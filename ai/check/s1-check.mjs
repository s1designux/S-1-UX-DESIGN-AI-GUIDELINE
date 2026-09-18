#!/usr/bin/env node
/**
 * s1-check — 에스원(S1)스럽게 조합됐는지 판정하는 검수기
 * --------------------------------------------------------------------------
 *   node ai/check/s1-check.mjs <검사할폴더> --platform pc
 *   node ai/check/s1-check.mjs src --platform mobile --stack kotlin --report 판정표.html
 *
 * [판정 기준을 이 파일이 만들지 않는다]
 *   승인된 부품·크기·필수 속성·필수 부품·매체 소속 ← ai/generated/scope.json (배포본에서 뽑은 것)
 *   조합 문법(간격·글자 크기)                      ← scope.json 의 scale / grouping
 *   여기 없는 것은 검사하지 않는다.
 *
 * [기존 s1-ui-lint 와 다른 점]
 *   1. 매체를 먼저 못 박고, 그 매체 기준만 적용한다.
 *   2. 적용률을 센다 — 부품 하나만 제대로 쓰고 나머지를 지어내면 드러난다.
 *   3. 화면에 S1 부품이 있어도 '직접 만든 것' 검사를 끄지 않는다.
 *   4. 겉만 맞고 속(필수 부품)이 빈 것, 동작 스크립트를 안 붙인 것을 잡는다.
 */
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..");
const scope = JSON.parse(await readFile(path.join(ROOT, "ai", "generated", "scope.json"), "utf8"));

const MARKUP_EXT = new Set([".html", ".htm", ".vue", ".jsx", ".tsx", ".svelte"]);
const STYLE_EXT = new Set([".css", ".scss", ".sass", ".less"]);
const CODE_EXT = new Set([".js", ".ts", ".mjs", ".kt", ".kts", ".swift", ".h", ".cpp"]);
const CHECKED = new Set([...MARKUP_EXT, ...STYLE_EXT, ...CODE_EXT]);
const SKIP_DIR = new Set(["node_modules", ".git", "dist", "build", "out", "coverage", ".next", ".nuxt", "vendor", ".venv"]);
const VOID_TAGS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const RAW_TEXT_TAGS = new Set(["script", "style", "svg"]);
const REFERENCE_ATTRIBUTES = new Set(["id", "href", "xlink:href", "name", "for", "headers", "aria-controls", "aria-labelledby", "aria-describedby", "form", "list"]);
const INTERACTIVE_TAGS = new Set(["button", "input", "select", "textarea", "table", "dialog"]);
const INTERACTIVE_ROLES = new Set(["button", "tab", "tablist", "dialog", "checkbox", "radio", "switch", "combobox", "listbox", "menu", "menuitem"]);

const byId = new Map(scope.components.map((component) => [component.id, component]));
const tokenNames = new Set(scope.tokenNames);
const spacingScale = new Set(scope.scale.spacing);
const fontScale = new Set(scope.scale.fontSize);

/* ── 실행 옵션 ───────────────────────────────────────────────────────────── */
const argv = process.argv.slice(2);
const flag = (name) => {
  const at = argv.indexOf(`--${name}`);
  return at === -1 ? null : argv[at + 1];
};
const targets = argv.filter((a, i) => !a.startsWith("--") && !(i > 0 && argv[i - 1].startsWith("--")));

async function loadProfile() {
  for (const base of [...targets, process.cwd()]) {
    for (const dir of [base, path.dirname(base)]) {
      try {
        return JSON.parse(await readFile(path.resolve(dir, "s1.profile.json"), "utf8"));
      } catch { /* 없으면 다음 자리 */ }
    }
  }
  return null;
}
const profile = await loadProfile();
const platform = flag("platform") || profile?.platform || null;
const stack = flag("stack") || profile?.stack || "web";
const service = flag("service") || profile?.service || "default";
const reportPath = flag("report");

if (!targets.length) {
  console.error("검사할 폴더를 알려주세요.  예: node ai/check/s1-check.mjs src --platform pc");
  process.exit(2);
}
if (!scope.platforms.includes(platform)) {
  console.error(`어떤 매체인지 먼저 정해야 합니다: --platform ${scope.platforms.join(" 또는 ")}`);
  console.error("온보딩(ONBOARDING.md)을 마치면 s1.profile.json 이 생기고 이 값이 자동으로 들어갑니다.");
  process.exit(2);
}
const otherPlatform = platform === "pc" ? "mobile" : "pc";
const platformLabel = platform === "pc" ? "PC" : "모바일";

/* ── 파일 모으기 ─────────────────────────────────────────────────────────── */
async function collect(target, found = []) {
  const info = await stat(target);
  if (info.isFile()) {
    if (CHECKED.has(path.extname(target))) found.push(target);
    return found;
  }
  for (const entry of await readdir(target, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    if (entry.isDirectory() && SKIP_DIR.has(entry.name)) continue;
    await collect(path.join(target, entry.name), found);
  }
  return found;
}

/* ── 공통 도구 ───────────────────────────────────────────────────────────── */
const lineOf = (text, index) => text.slice(0, index).split("\n").length;

/** 주석은 실제 스타일이 아니다 — 검사에서 뺀다. */
const maskComments = (text) => text
  .replace(/\/\*[\s\S]*?\*\//g, (m) => " ".repeat(m.length))
  .replace(/(^|[^:])\/\/[^\n]*/g, (m) => " ".repeat(m.length))
  .replace(/<!--[\s\S]*?-->/g, (m) => " ".repeat(m.length));

/** 이 위치를 감싸는 HTML 속성 이름 (속성값 안이 아니면 null). */
function enclosingAttribute(text, index) {
  const tagStart = text.lastIndexOf("<", index);
  if (tagStart === -1) return null;
  if (text.slice(tagStart, index).includes(">")) return null;
  const tagEnd = text.indexOf(">", index);
  if (tagEnd === -1) return null;
  const region = text.slice(tagStart, tagEnd + 1);
  for (const m of region.matchAll(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("[^"]*"|'[^']*')/g)) {
    const valueStart = tagStart + m.index + m[0].length - m[2].length + 1;
    if (index >= valueStart && index < valueStart + m[2].length - 2) return m[1].toLowerCase();
  }
  return null;
}

/** 이 위치가 속한 CSS 선언 한 줄 — 예외(color-overlay)는 그 선언 안에서만 인정한다. */
function enclosingDeclaration(text, index) {
  let start = 0;
  for (const boundary of [";", "{", "}", "\n"]) {
    const found = text.lastIndexOf(boundary, index);
    if (found > start) start = found;
  }
  return text.slice(start, index);
}

/** 여는 태그의 속성을 뽑는다. */
function parseAttributes(tagBody) {
  const attributes = {};
  for (const m of tagBody.matchAll(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("([^"]*)"|'([^']*)'|\{([^}]*)\})/g)) {
    attributes[m[1].toLowerCase()] = m[3] ?? m[4] ?? m[5] ?? "";
  }
  for (const m of tagBody.matchAll(/(^|\s)([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?=\s|$)/g)) {
    const key = m[2].toLowerCase();
    if (!(key in attributes)) attributes[key] = "";
  }
  return attributes;
}

/* ── 마크업 훑기 — 부모-자식 관계를 유지한 채 요소를 모은다 ─────────────── */
function walkMarkup(text) {
  const elements = [];
  const stack = [];
  const tagPattern = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>])*?)(\/?)>/g;
  let skipUntil = null;
  let match;
  while ((match = tagPattern.exec(text)) !== null) {
    const [whole, closing, rawName, body, selfClosing] = match;
    const name = rawName.toLowerCase();
    if (skipUntil) {
      if (closing && name === skipUntil) skipUntil = null;
      continue;
    }
    if (closing) {
      for (let i = stack.length - 1; i >= 0; i -= 1) {
        if (stack[i].tag === name) { stack.length = i; break; }
      }
      continue;
    }
    const attributes = parseAttributes(body);
    const parent = stack[stack.length - 1] || null;
    const ownComponent = attributes[scope.componentAttribute] || null;
    const element = {
      tag: name,
      attributes,
      index: match.index,
      line: lineOf(text, match.index),
      tagText: whole,
      ownComponent,
      inComponent: ownComponent || parent?.inComponent || null,
      part: attributes[scope.partAttribute] || null,
      parent
    };
    elements.push(element);
    if (RAW_TEXT_TAGS.has(name) && !selfClosing) { skipUntil = name; continue; }
    if (!VOID_TAGS.has(name) && !selfClosing) stack.push(element);
  }
  /* 부품(part) 은 자기를 감싸는 컴포넌트에 달아 준다. */
  const partsByComponent = new Map();
  for (const element of elements) {
    if (!element.part) continue;
    let owner = element.parent;
    while (owner && !owner.ownComponent) owner = owner.parent;
    if (!owner) continue;
    if (!partsByComponent.has(owner)) partsByComponent.set(owner, new Set());
    partsByComponent.get(owner).add(element.part);
  }
  return { elements, partsByComponent };
}

/* ── 검사들 ─────────────────────────────────────────────────────────────── */
const findings = [];
const add = (severity, rule, file, line, message, hint) => findings.push({ severity, rule, file, line, message, hint });

function checkColors(text, file) {
  const masked = maskComments(text);
  for (const m of masked.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) {
    const attribute = enclosingAttribute(masked, m.index);
    if (attribute && REFERENCE_ATTRIBUTES.has(attribute)) continue;
    if (masked.slice(Math.max(0, m.index - 4), m.index).endsWith("url(")) continue;
    if (/color-overlay/.test(enclosingDeclaration(masked, m.index))) continue;
    add("error", scope.rules.hex.id, file, lineOf(text, m.index),
      `색을 직접 적었습니다 (${m[0]}).`, "색은 역할 토큰으로만 씁니다 — 예: var(--color-bg-level-0)");
  }
  for (const m of masked.matchAll(/\brgba?\(/g)) {
    if (/color-overlay/.test(enclosingDeclaration(masked, m.index))) continue;
    add("error", scope.rules.rgba.id, file, lineOf(text, m.index),
      "rgba() 를 직접 적었습니다.", "딤(오버레이)만 예외입니다. 나머지는 토큰을 쓰세요.");
  }
}

function checkTokenNames(text, file) {
  for (const m of text.matchAll(/var\(\s*(--[a-zA-Z0-9-]+)/g)) {
    if (tokenNames.has(m[1])) continue;
    add("error", "S1-TOKEN", file, lineOf(text, m.index),
      `디자인시스템에 없는 토큰입니다: ${m[1]}`, "있는 이름만 쓸 수 있습니다. 필요한 값이 없으면 지어내지 말고 디자인팀에 요청하세요.");
  }
}

function checkGrammar(text, file) {
  const masked = maskComments(text);
  for (const m of masked.matchAll(/\b(gap|row-gap|column-gap|margin|margin-top|margin-right|margin-bottom|margin-left|padding|padding-top|padding-right|padding-bottom|padding-left)\s*:\s*([^;{}\n]+)/g)) {
    const value = m[2];
    for (const px of value.matchAll(/(-?\d+(?:\.\d+)?)px/g)) {
      const amount = Number(px[1]);
      if (amount === 0) continue;
      const known = spacingScale.has(Math.abs(amount));
      add("error", "S1-SPACING", file, lineOf(text, m.index + m[0].indexOf(px[0])),
        `간격을 숫자로 직접 적었습니다 (${m[1]}: ${px[0]}).`,
        known
          ? `같은 값의 토큰이 있습니다 — var(--spacing-${Math.abs(amount)}) 로 바꾸세요.`
          : `간격 토큰에 없는 값입니다. 한 묶음 안 ${scope.grouping.withinGroup} · 한 줄 안 ${scope.grouping.inline} · 묶음 사이 ${scope.grouping.betweenGroups} 중에서 고르세요.`);
    }
  }
  for (const m of masked.matchAll(/\bfont-size\s*:\s*([^;{}\n]+)/g)) {
    const px = /(\d+(?:\.\d+)?)px/.exec(m[1]);
    if (!px) continue;
    const amount = Number(px[1]);
    add("error", "S1-FONTSIZE", file, lineOf(text, m.index),
      `글자 크기를 숫자로 직접 적었습니다 (${px[0]}).`,
      fontScale.has(amount)
        ? `같은 값의 토큰이 있습니다 — var(--font-size-${amount}) 로 바꾸세요.`
        : `쓸 수 있는 글자 크기는 ${[...fontScale].join(" · ")} 뿐입니다.`);
  }
}

function checkComponents(text, file, walked) {
  const { elements, partsByComponent } = walked;
  for (const element of elements) {
    const id = element.ownComponent;
    if (!id) continue;
    const spec = byId.get(id);
    if (!spec) {
      add("error", "S1-COMPONENT", file, element.line,
        `승인된 적 없는 부품 이름입니다: "${id}"`, "배포본에 있는 부품만 쓸 수 있습니다.");
      continue;
    }

    /* 1) 매체 잠금 — 이 검수는 오직 이 매체 기준이다. */
    if (spec.platform === `${otherPlatform}-only`) {
      add("error", "S1-PLATFORM", file, element.line,
        `${id} 는 ${otherPlatform === "pc" ? "PC" : "모바일"} 전용 부품입니다. 지금은 ${platformLabel} 화면을 보고 있습니다.`,
        `근거: ${spec.platformEvidence.join(" / ") || "배포본 계약"}`);
    } else if (spec.platform === "unknown") {
      add("warning", "S1-PLATFORM-UNKNOWN", file, element.line,
        `${id} 가 어느 매체 것인지 아직 확정되지 않았습니다.`,
        "디자인팀이 ai/rules/platform-scope.overrides.json 에서 확정하기 전까지는 통과시킵니다.");
    }

    const declaredBreak = element.attributes[scope.breakAttribute];
    if (declaredBreak && declaredBreak !== platform) {
      add("error", "S1-BREAK", file, element.line,
        `${id} 에 ${scope.breakAttribute}="${declaredBreak}" 로 적혀 있습니다. 지금 검수 기준은 ${platformLabel} 입니다.`,
        `${scope.breakAttribute}="${platform}" 이어야 합니다.`);
    }

    /* 2) 크기 — 그 매체에 있는 크기만 */
    const sizeAttribute = spec.sizeAttribute;
    if (sizeAttribute) {
      const declared = element.attributes[sizeAttribute];
      if (declared) {
        const allowedHere = spec.sizesByPlatform[platform] || [];
        if (spec.sizes.length && !spec.sizes.includes(declared)) {
          add("error", "S1-VARIANT", file, element.line,
            `${id} 에 없는 ${sizeAttribute}="${declared}" 입니다.`, `쓸 수 있는 값: ${spec.sizes.join(", ")}`);
        } else if (allowedHere.length && !allowedHere.includes(declared)) {
          add("error", "S1-SIZE-PLATFORM", file, element.line,
            `${id} 의 ${declared} 크기는 ${platformLabel} 에 없습니다.`,
            `${platformLabel} 에서 쓸 수 있는 크기: ${allowedHere.join(", ")}`);
        }
      }
    }

    /* 3) 변형 */
    if (spec.variantAttribute && spec.variants.length) {
      const declared = element.attributes[spec.variantAttribute];
      if (declared && !spec.variants.includes(declared)) {
        add("error", "S1-VARIANT", file, element.line,
          `${id} 에 없는 ${spec.variantAttribute}="${declared}" 입니다.`, `쓸 수 있는 값: ${spec.variants.join(", ")}`);
      }
    }

    /* 4) 필수 속성 */
    for (const required of spec.requiredAttributes) {
      if (required in element.attributes) continue;
      add("error", "S1-CONTRACT", file, element.line,
        `${id} 에 필수 속성 ${required} 가 없습니다.`, "배포본 예제(ui-library/dist/examples/)를 그대로 붙이면 빠지지 않습니다.");
    }

    /* 5) 속 채움 — 겉만 맞고 안이 빈 것 */
    const seen = partsByComponent.get(element) || new Set();
    const missing = spec.requiredParts.filter((part) => !seen.has(part));
    if (missing.length) {
      add("error", "S1-PART", file, element.line,
        `${id} 안에 있어야 할 부품이 없습니다: ${missing.join(", ")}`,
        `${scope.partAttribute}="${missing[0]}" 처럼 안쪽 부품을 채워야 합니다.`);
    }

    /* 6) 이름 없는 입력칸 */
    if (["input", "textarea", "select"].includes(id)) {
      const named = seen.has("label") || "aria-label" in element.attributes || "aria-labelledby" in element.attributes;
      if (!named) {
        add("warning", "S1-LABEL", file, element.line,
          `${id} 에 라벨이 없습니다.`, "라벨은 부품 안이 아니라 부품 위에 별도 글자로 올립니다(간격 8).");
      }
    }
  }
}

/** 직접 만든 것으로 보이는 자리 — S1 부품이 이미 있어도 검사를 끄지 않는다. */
function checkReimplementation(text, file, walked) {
  for (const element of walked.elements) {
    if (element.inComponent) continue;
    const className = element.attributes.class || element.attributes.classname || "";
    if (!className) continue;
    for (const spec of scope.components) {
      if (!new RegExp(`\\b${spec.id}\\b`, "i").test(className)) continue;
      add("warning", "S1-REIMPL", file, element.line,
        `${spec.id} 를 직접 만든 것으로 보입니다.`, "배포본에 이미 있습니다 — ui-library/dist/examples/ 의 마크업을 그대로 쓰세요.");
      break;
    }
  }
}

/** 적용률 — 화면에 놓인 UI 부품 중 몇 개가 S1 배포본인가. */
function countCoverage(walked, counters) {
  for (const element of walked.elements) {
    const role = (element.attributes.role || "").toLowerCase();
    const className = element.attributes.class || element.attributes.classname || "";
    const looksLikeComponent = scope.components.some((spec) => new RegExp(`\\b${spec.id}\\b`, "i").test(className));
    const isCandidate = INTERACTIVE_TAGS.has(element.tag) || INTERACTIVE_ROLES.has(role) || looksLikeComponent;
    if (!isCandidate) continue;
    if (element.tag === "input" && (element.attributes.type || "").toLowerCase() === "hidden") continue;
    counters.total += 1;
    if (element.inComponent) counters.covered += 1;
    else counters.strays.push({ tag: element.tag, line: element.line, file: counters.file });
  }
}

/* ── 실행 ───────────────────────────────────────────────────────────────── */
const files = [];
for (const target of targets) files.push(...await collect(path.resolve(process.cwd(), target)));

const coverage = { total: 0, covered: 0, strays: [] };
const usedComponents = new Set();
let jsWiringSeen = false;
let scanned = 0;

for (const file of files) {
  const text = await readFile(file, "utf8");
  const shown = path.relative(process.cwd(), file);
  const extension = path.extname(file);
  scanned += 1;

  checkColors(text, shown);
  checkTokenNames(text, shown);
  if (STYLE_EXT.has(extension) || MARKUP_EXT.has(extension)) checkGrammar(text, shown);

  if (/s1-ui\.auto\.js|s1-ui\.js|@s1\/ui-react|@s1\/ui-vue|autoInit\s*\(/.test(text)) jsWiringSeen = true;

  if (MARKUP_EXT.has(extension)) {
    const walked = walkMarkup(text);
    for (const element of walked.elements) if (element.ownComponent) usedComponents.add(element.ownComponent);
    checkComponents(text, shown, walked);
    checkReimplementation(text, shown, walked);
    coverage.file = shown;
    countCoverage(walked, coverage);
  }
}

/* 동작 배선 — 여닫기·키보드가 필요한 부품을 썼는데 런타임을 안 붙였다. */
const needsJs = [...usedComponents].filter((id) => byId.get(id)?.jsRequired);
if (needsJs.length && !jsWiringSeen && ["web", "react", "vue"].includes(stack)) {
  add("error", "S1-JS", "(프로젝트 전체)", 0,
    `여닫기·키보드 동작이 필요한 부품을 썼는데 런타임을 연결하지 않았습니다: ${needsJs.join(", ")}`,
    'import { autoInit } from "ui-library/dist/s1-ui.auto.js"; autoInit(); 한 번이면 됩니다.');
}

const errors = findings.filter((f) => f.severity === "error");
const warnings = findings.filter((f) => f.severity === "warning");
const rate = coverage.total ? Math.round((coverage.covered / coverage.total) * 100) : null;
const passed = errors.length === 0 && (rate === null || rate === 100);

/* ── 터미널 출력 ────────────────────────────────────────────────────────── */
const order = { error: 0, warning: 1 };
findings.sort((a, b) => order[a.severity] - order[b.severity] || a.file.localeCompare(b.file) || a.line - b.line);
for (const finding of findings) {
  const mark = finding.severity === "error" ? "✖" : "⚠";
  console.log(`${mark} ${finding.file}:${finding.line}  ${finding.message}  [${finding.rule}]`);
  if (finding.hint) console.log(`    → ${finding.hint}`);
}
console.log("");
console.log(`매체 ${platformLabel} · 기술 ${stack} · 서비스 ${service} · 배포본 ${scope._meta.distVersion}`);
console.log(`파일 ${scanned}개 검사 · 오류 ${errors.length} · 경고 ${warnings.length}`);
if (rate !== null) console.log(`S1 적용률 ${rate}% — 화면 속 부품 ${coverage.total}개 중 ${coverage.covered}개가 배포본입니다.`);
console.log(passed ? "판정: 합격" : "판정: 불합격");

if (reportPath) {
  const out = path.resolve(process.cwd(), reportPath);
  await writeFile(out, renderReport({ findings, errors, warnings, rate, coverage, passed, scanned, needsJs }), "utf8");
  console.log(`판정표: ${path.relative(process.cwd(), out)}`);
}
process.exit(passed ? 0 : 1);

/* ── 판정표(HTML) ───────────────────────────────────────────────────────── */
function renderReport({ findings, errors, warnings, rate, coverage, passed, scanned }) {
  const escape = (value) => String(value).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const rows = findings.map((f) => `<tr class="${f.severity}">
      <td class="mark">${f.severity === "error" ? "✖ 고쳐야 함" : "⚠ 확인 필요"}</td>
      <td class="where">${escape(f.file)}${f.line ? `:${f.line}` : ""}</td>
      <td><div class="msg">${escape(f.message)}</div>${f.hint ? `<div class="hint">${escape(f.hint)}</div>` : ""}</td>
      <td class="rule">${escape(f.rule)}</td>
    </tr>`).join("\n");
  const strays = coverage.strays.slice(0, 40).map((s) => `<li>${escape(s.file)}:${s.line} — <code>&lt;${escape(s.tag)}&gt;</code></li>`).join("\n");
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>S1 검수 판정표</title>
<style>
  :root { color-scheme: light dark; --ok:#1a7f4b; --no:#c0392b; --warn:#b26a00; --line:#d9dde3; --muted:#5b6472; --bg:#fff; --fg:#1b1f24; --panel:#f6f8fa; }
  @media (prefers-color-scheme: dark) { :root { --bg:#14171c; --fg:#e8ecf1; --panel:#1d222a; --line:#2c333d; --muted:#9aa4b2; } }
  * { box-sizing: border-box; }
  body { margin:0; padding:32px 16px 64px; background:var(--bg); color:var(--fg); font:400 14px/1.6 Pretendard, -apple-system, BlinkMacSystemFont, "Malgun Gothic", sans-serif; }
  .wrap { max-width: 960px; margin: 0 auto; }
  h1 { font-size:24px; margin:0 0 8px; }
  .sub { color:var(--muted); margin:0 0 24px; }
  .verdict { display:flex; align-items:center; gap:16px; padding:20px 24px; border-radius:12px; background:var(--panel); border:1px solid var(--line); margin-bottom:24px; flex-wrap:wrap; }
  .badge { font-size:20px; font-weight:700; padding:8px 16px; border-radius:999px; color:#fff; }
  .badge.ok { background:var(--ok); } .badge.no { background:var(--no); }
  .stat { display:flex; gap:24px; flex-wrap:wrap; }
  .stat b { display:block; font-size:20px; }
  .stat span { color:var(--muted); font-size:12px; }
  .bar { height:10px; border-radius:999px; background:var(--line); overflow:hidden; width:100%; margin-top:8px; }
  .bar i { display:block; height:100%; background:var(--ok); }
  table { width:100%; border-collapse:collapse; margin-top:8px; }
  th, td { text-align:left; padding:10px 12px; border-bottom:1px solid var(--line); vertical-align:top; }
  th { font-size:12px; color:var(--muted); font-weight:500; }
  tr.error .mark { color:var(--no); white-space:nowrap; font-weight:700; }
  tr.warning .mark { color:var(--warn); white-space:nowrap; font-weight:500; }
  .where { color:var(--muted); font-size:12px; white-space:nowrap; }
  .rule { color:var(--muted); font-size:11px; white-space:nowrap; }
  .hint { color:var(--muted); font-size:12px; margin-top:4px; }
  h2 { font-size:16px; margin:32px 0 4px; }
  ul { margin:8px 0; padding-left:20px; color:var(--muted); font-size:13px; }
  code { background:var(--panel); padding:1px 5px; border-radius:4px; }
  .empty { color:var(--muted); padding:16px 0; }
</style></head>
<body><div class="wrap">
<h1>S1 검수 판정표</h1>
<p class="sub">${platformLabel} 기준 · 기술 ${escape(stack)} · 서비스 ${escape(service)} · 배포본 ${escape(scope._meta.distVersion)} (${escape(scope._meta.distReleasedAt)}) · 파일 ${scanned}개</p>
<div class="verdict">
  <span class="badge ${passed ? "ok" : "no"}">${passed ? "합격" : "불합격"}</span>
  <div class="stat">
    <div><b>${errors.length}</b><span>고쳐야 함</span></div>
    <div><b>${warnings.length}</b><span>확인 필요</span></div>
    <div><b>${rate === null ? "—" : `${rate}%`}</b><span>S1 적용률</span></div>
  </div>
</div>
${rate === null ? "" : `<p class="sub">화면 속 부품 ${coverage.total}개 중 ${coverage.covered}개가 배포본입니다.</p><div class="bar"><i style="width:${rate}%"></i></div>`}
<h2>어긋난 자리</h2>
${findings.length ? `<table><thead><tr><th>판정</th><th>자리</th><th>무엇이 어긋났나</th><th>규칙</th></tr></thead><tbody>${rows}</tbody></table>` : '<p class="empty">없습니다.</p>'}
${coverage.strays.length ? `<h2>배포본을 안 쓰고 직접 만든 자리</h2><ul>${strays}</ul>` : ""}
<h2>이 판정표를 읽는 법</h2>
<ul>
  <li><b>고쳐야 함</b> — 디자인시스템에 없는 것을 쓴 자리입니다. 필요한 것이 정말 없다면 만들지 말고 디자인팀에 요청하세요.</li>
  <li><b>확인 필요</b> — 규칙으로 잘라 말할 수 없어 사람이 봐야 하는 자리입니다.</li>
  <li><b>S1 적용률</b> — 100%가 아니면 화면 일부를 배포본 없이 지어냈다는 뜻입니다.</li>
</ul>
</div></body></html>`;
}
