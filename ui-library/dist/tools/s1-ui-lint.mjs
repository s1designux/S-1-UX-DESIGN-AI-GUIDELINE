#!/usr/bin/env node
/**
 * s1-ui-lint — S1 UI 라이브러리 자가 검사기
 * --------------------------------------------------------------------------
 * 개발자·퍼블리셔가 자기 프로젝트에서 돌린다.
 *
 *   node tools/s1-ui-lint.mjs src            # 폴더 검사
 *   node tools/s1-ui-lint.mjs --version      # 내가 쓰는 배포본이 최신인지 확인용 지문
 *
 * [이 검사기가 판정 기준을 만들지 않는다]
 *   허용 variant·size·필수 속성  ← platform/contract.json (승인된 배포본 그대로)
 *   쓸 수 있는 색·크기 이름        ← platform/tokens.json (정본 토큰 그대로)
 *   HEX·rgba 금지 규칙             ← tools/lint-rules.json (registry/governance/audit-rules.json 발췌)
 *   여기 없는 것은 검사하지 않는다. 확실하지 않은 것은 error 로 올리지 않는다.
 */

import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const toolDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(toolDir, "..");
const CHECKED_EXTENSIONS = new Set([".html", ".htm", ".css", ".scss", ".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte"]);
const SKIPPED_DIRECTORIES = new Set(["node_modules", ".git", "dist", "build", "out", "coverage", ".next", ".nuxt", "vendor"]);

const readJson = async (relative) => JSON.parse(await readFile(path.join(packageRoot, relative), "utf8"));

async function collectFiles(target, found = []) {
  const info = await stat(target);
  if (info.isFile()) {
    if (CHECKED_EXTENSIONS.has(path.extname(target))) found.push(target);
    return found;
  }
  for (const entry of await readdir(target, { withFileTypes: true })) {
    if (entry.name.startsWith(".") && entry.name !== ".") continue;
    if (entry.isDirectory() && SKIPPED_DIRECTORIES.has(entry.name)) continue;
    await collectFiles(path.join(target, entry.name), found);
  }
  return found;
}

const lineOf = (text, index) => text.slice(0, index).split("\n").length;

/** 검사에서 빼야 하는 구간 — 주석과 문자열 안의 색 코드는 실제 스타일이 아니다. */
function maskNonCode(text) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, (match) => " ".repeat(match.length))
    .replace(/(^|[^:])\/\/[^\n]*/g, (match) => " ".repeat(match.length))
    .replace(/<!--[\s\S]*?-->/g, (match) => " ".repeat(match.length));
}

/** 이 위치를 감싸는 HTML 속성 이름을 돌려준다(속성값 안이 아니면 null).
 *  "앞 몇 글자를 본다" 같은 어림짐작을 쓰지 않는다 — 그 방식은 앞줄의 href 하나가
 *  뒷줄의 색을 통째로 사면해 버린다(2026-09-04 독립 검증에서 R02 무력화로 발견). */
function enclosingAttribute(text, index) {
  const tagStart = text.lastIndexOf("<", index);
  if (tagStart === -1) return null;
  if (text.slice(tagStart, index).includes(">")) return null;   // 태그 밖이다
  const tagEnd = text.indexOf(">", index);
  if (tagEnd === -1) return null;
  const region = text.slice(tagStart, tagEnd + 1);
  const pattern = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("[^"]*"|'[^']*')/g;
  let match;
  while ((match = pattern.exec(region)) !== null) {
    const valueStart = tagStart + match.index + match[0].length - match[2].length + 1;
    const valueEnd = valueStart + match[2].length - 2;
    if (index >= valueStart && index < valueEnd) return match[1].toLowerCase();
  }
  return null;
}

/** 이 위치가 속한 CSS 선언 한 줄만 돌려준다. 예외(color-overlay)는 그 선언 안에서만 인정한다. */
function enclosingDeclaration(text, index) {
  let start = 0;
  for (const boundary of [";", "{", "}"]) {
    const found = text.lastIndexOf(boundary, index);
    if (found > start) start = found;
  }
  return text.slice(start, index);
}

/* 색이 아니라 '가리키는 이름'이 들어가는 속성 — 여기 있는 # 은 색이 아니다. */
const REFERENCE_ATTRIBUTES = new Set(["id", "href", "xlink:href", "name", "for", "headers", "aria-controls", "aria-labelledby", "aria-describedby", "form", "list"]);

function checkColors(text, rules, findings, file) {
  const masked = maskNonCode(text);
  for (const match of masked.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) {
    const attribute = enclosingAttribute(masked, match.index);
    if (attribute && REFERENCE_ATTRIBUTES.has(attribute)) continue;        // href="#top" 같은 참조
    if (masked.slice(Math.max(0, match.index - 5), match.index).endsWith("url(")) continue;  // url(#gradient)
    if (/color-overlay/.test(enclosingDeclaration(masked, match.index))) continue;           // EX03
    findings.push({ severity: "error", rule: rules.hex.id, file, line: lineOf(text, match.index),
      message: `색을 직접 적었습니다(${match[0]}). 디자인 토큰을 쓰세요 — 예: var(--color-bg-level-0)` });
  }
  for (const match of masked.matchAll(/\brgba?\(/g)) {
    if (/color-overlay/.test(enclosingDeclaration(masked, match.index))) continue;           // EX03
    findings.push({ severity: "error", rule: rules.rgba.id, file, line: lineOf(text, match.index),
      message: "rgba() 를 직접 적었습니다. overlay 외에는 토큰을 쓰세요." });
  }
}

function checkTokenNames(text, tokenNames, findings, file) {
  for (const match of text.matchAll(/var\(\s*(--[a-z0-9-]+)/g)) {
    if (tokenNames.has(match[1])) continue;
    findings.push({ severity: "error", rule: "S1-TOKEN", file, line: lineOf(text, match.index),
      message: `없는 토큰입니다: ${match[1]}. 디자인 시스템에 있는 이름만 쓸 수 있습니다.` });
  }
}

function checkComponentUsage(text, contract, findings, file) {
  const byId = new Map(contract.components.map((component) => [component.id, component]));
  for (const match of text.matchAll(/data-s1-component\s*=\s*["']([a-z0-9-]+)["']/g)) {
    const id = match[1];
    const component = byId.get(id);
    const line = lineOf(text, match.index);
    if (!component) {
      findings.push({ severity: "error", rule: "S1-COMPONENT", file, line,
        message: `승인된 적 없는 컴포넌트 이름입니다: "${id}". 배포본에 있는 것만 쓸 수 있습니다.` });
      continue;
    }
    /* 여는 태그 하나만 본다 — 다음 '>' 까지가 그 요소의 속성 구간이다. */
    const tagStart = text.lastIndexOf("<", match.index);
    const tagEnd = text.indexOf(">", match.index);
    const tag = tagStart === -1 || tagEnd === -1 ? "" : text.slice(tagStart, tagEnd + 1);

    /* 속성 이름은 계약이 알려 준다 — 검사기가 짐작하지 않는다.
       (2026-09-04 — dropdown 은 data-type, date-picker 는 data-mode 를 쓴다) */
    for (const [attribute, allowed] of [[component.variantAttribute, component.variants], [component.sizeAttribute, component.sizes]]) {
      if (!attribute || !allowed.length) continue;
      const declared = new RegExp(`${attribute}\\s*=\\s*["']([^"']*)["']`).exec(tag);
      if (!declared) continue;
      if (allowed.includes(declared[1])) continue;
      findings.push({ severity: "error", rule: "S1-VARIANT", file, line,
        message: `${id} 에 없는 ${attribute}="${declared[1]}" 입니다. 쓸 수 있는 값: ${allowed.join(", ")}` });
    }
    for (const required of component.requiredAttributes) {
      if (new RegExp(`${required}\\s*=`).test(tag)) continue;
      findings.push({ severity: "error", rule: "S1-CONTRACT", file, line,
        message: `${id} 에 필수 속성 ${required} 가 없습니다.` });
    }
  }
}

/** 재구현 의심 — 확실히 가를 수 없으므로 경고로만 알린다(오류로 만들면 검사기를 끄게 된다).
 *  판정에 쓰는 이름은 **contract.json 에 실재하는 컴포넌트 id** 뿐이다.
 *  검사기가 자기 어휘(btn·dialog 같은 목록)를 지어내지 않는다 — 그건 판정 기준 신설이다.
 *  (2026-09-04 독립 검증에서 자작 목록이 H6② 위반으로 지적돼 교체) */
function checkReimplementation(text, contract, findings, file) {
  if (/data-s1-component/.test(text)) return;
  for (const component of contract.components) {
    const pattern = new RegExp(`class\\s*=\\s*["'][^"']*\\b${component.id}\\b`, "i");
    const match = pattern.exec(text);
    if (!match) continue;
    findings.push({ severity: "warning", rule: "S1-REIMPL", file, line: lineOf(text, match.index),
      message: `${component.id} 를 직접 만든 것처럼 보입니다. 배포본에 이미 있습니다 — 확인해 주세요.` });
  }
}

async function main() {
  const args = process.argv.slice(2);
  const distManifest = await readJson("manifest.json");
  const platformManifest = await readJson("platform/manifest.json");

  if (args.includes("--version") || args.includes("-v")) {
    console.log(`s1-ui ${distManifest.version} (${distManifest.releasedAt} 판)`);
    console.log(`컴포넌트 ${platformManifest.components.length}종 · 토큰 ${platformManifest.tokenCount}개`);
    console.log(`정본 지문 ${distManifest.canonicalFingerprint}`);
    console.log("최신인지 확인: 디자인가이드 내려받기 화면의 번호와 이 번호가 같으면 최신입니다.");
    return;
  }

  const targets = args.filter((argument) => !argument.startsWith("-"));
  if (!targets.length) {
    console.error("검사할 폴더나 파일을 알려주세요.  예: node tools/s1-ui-lint.mjs src");
    process.exit(2);
  }

  const [contract, tokens, rules] = await Promise.all([readJson("platform/contract.json"), readJson("platform/tokens.json"), readJson("tools/lint-rules.json")]);
  const tokenNames = new Set(tokens.tokens.map(({ name }) => name));
  const findings = [];
  let scanned = 0;

  for (const target of targets) {
    for (const file of await collectFiles(path.resolve(process.cwd(), target))) {
      const text = await readFile(file, "utf8");
      const shown = path.relative(process.cwd(), file);
      scanned += 1;
      checkColors(text, rules, findings, shown);
      checkTokenNames(text, tokenNames, findings, shown);
      checkComponentUsage(text, contract, findings, shown);
      checkReimplementation(text, contract, findings, shown);
    }
  }

  const errors = findings.filter(({ severity }) => severity === "error");
  const warnings = findings.filter(({ severity }) => severity === "warning");
  for (const finding of [...errors, ...warnings]) {
    const mark = finding.severity === "error" ? "✖" : "⚠";
    console.log(`${mark} ${finding.file}:${finding.line}  ${finding.message}  [${finding.rule}]`);
  }
  console.log(`\n파일 ${scanned}개 검사 · 오류 ${errors.length} · 경고 ${warnings.length}`);
  if (errors.length) {
    console.log("오류는 디자인 시스템에 없는 것을 쓴 자리입니다. 필요한 것이 정말 없다면 만들지 말고 디자인팀에 요청해 주세요.");
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(`s1-ui-lint 를 실행하지 못했습니다: ${error.message}`);
  process.exit(2);
});
