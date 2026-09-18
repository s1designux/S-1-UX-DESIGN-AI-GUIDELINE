#!/usr/bin/env node
/**
 * build-scope — 검수기가 쓸 '정답표'를 배포본에서 뽑아 한 파일로 모은다.
 * --------------------------------------------------------------------------
 *   node ai/scripts/build-scope.mjs
 *
 * [이 스크립트는 판정 기준을 만들지 않는다]
 *   승인된 부품·크기·필수 속성·필수 부품   ← ui-library/dist/platform/contract.json
 *   쓸 수 있는 토큰 이름                    ← ui-library/dist/platform/tokens.json
 *   매체(PC/모바일) 소속                    ← contract 의 breaks + examples 의 data-break
 *   그래도 갈리지 않는 부품                 ← unknown 으로 남긴다(사람이 overrides 에서 확정)
 * 여기 없는 것은 만들어 넣지 않는다.
 */
import { readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const DIST = path.join(ROOT, "ui-library", "dist");
const readJson = async (p) => JSON.parse(await readFile(p, "utf8"));

const contract = await readJson(path.join(DIST, "platform", "contract.json"));
const registryDir = path.join(ROOT, "registry", "components");
const tokens = await readJson(path.join(DIST, "platform", "tokens.json"));
const manifest = await readJson(path.join(DIST, "manifest.json"));
const lintRules = await readJson(path.join(DIST, "tools", "lint-rules.json"));
const overrides = await readJson(path.join(ROOT, "ai", "rules", "platform-scope.overrides.json"));

/* examples 안에서 각 부품이 어떤 data-break 로 쓰였는지 모은다. */
const exampleDir = path.join(DIST, "examples");
const exampleFiles = await readdir(exampleDir);
const breakMarks = new Map();
for (const file of exampleFiles) {
  if (!file.endsWith(".html")) continue;
  const text = await readFile(path.join(exampleDir, file), "utf8");
  for (const hit of text.matchAll(/data-s1-component\s*=\s*["']([a-z0-9-]+)["']/g)) {
    const id = hit[1];
    const tagStart = text.lastIndexOf("<", hit.index);
    const tagEnd = text.indexOf(">", hit.index);
    const tag = tagStart === -1 || tagEnd === -1 ? "" : text.slice(tagStart, tagEnd + 1);
    const declared = /data-break\s*=\s*["'](pc|mobile)["']/.exec(tag);
    if (!declared) continue;
    if (!breakMarks.has(id)) breakMarks.set(id, new Set());
    breakMarks.get(id).add(declared[1]);
  }
}

/* 변형(variant) 단에 매체 축이 있는지 본다 — 배리언츠에 pc/mobile 이 갈려 있으면 그게 곧 소속이다. */
const variantPlatform = new Map();
for (const component of contract.components) {
  let registry;
  try {
    registry = await readJson(path.join(registryDir, `${component.id}.json`));
  } catch { continue; }
  const support = registry.platformSupport || {};
  const variants = registry.variants || {};
  const pc = Boolean(support.pc) || Array.isArray(variants.pcSize);
  const mobile = Boolean(support.mobile) || Array.isArray(variants.mobileSize);
  const axes = [];
  if (Array.isArray(variants.pcSize)) axes.push(`variants.pcSize = ${variants.pcSize.join("·")}`);
  if (Array.isArray(variants.mobileSize)) axes.push(`variants.mobileSize = ${variants.mobileSize.join("·")}`);
  if (support.pc || support.mobile) axes.push(`platformSupport = ${Object.keys(support).filter((k) => support[k]).join("·")}`);
  variantPlatform.set(component.id, { pc, mobile, axes, hasAxis: pc || mobile });
}

const components = contract.components.map((component) => {
  const breaks = component.breaks || {};
  const marks = breakMarks.get(component.id) || new Set();
  const evidence = [];
  const pcSizes = Array.isArray(breaks.pc) ? breaks.pc : [];
  const mobileSizes = Array.isArray(breaks.mobile) ? breaks.mobile : [];
  if (pcSizes.length) evidence.push(`contract.breaks.pc = ${pcSizes.join("·")}`);
  if (mobileSizes.length) evidence.push(`contract.breaks.mobile = ${mobileSizes.join("·")}`);
  if (marks.has("pc")) evidence.push('examples 에 data-break="pc" 사용');
  if (marks.has("mobile")) evidence.push('examples 에 data-break="mobile" 사용');

  const variantAxis = variantPlatform.get(component.id) || { pc: false, mobile: false, axes: [], hasAxis: false };
  evidence.push(...variantAxis.axes);

  const pc = pcSizes.length > 0 || marks.has("pc") || variantAxis.pc;
  const mobile = mobileSizes.length > 0 || marks.has("mobile") || variantAxis.mobile;
  let platform = "unknown";
  let source = "derived";
  if (pc && mobile) platform = "both";
  else if (pc) platform = "pc-only";
  else if (mobile) platform = "mobile-only";
  else {
    /* 변형 어디에도 매체가 갈려 있지 않다 = 두 매체에서 같은 모습으로 쓴다.
       (river 확정 2026-09-18 — "배리언츠 단을 보면 구분할 수 있다") */
    platform = "both";
    source = "no-platform-axis";
    evidence.push("매체로 갈리는 변형이 없음 — 두 매체에서 같은 모습");
  }

  const override = overrides.components?.[component.id];
  if (override) { platform = override; source = "overrides"; }

  return {
    id: component.id,
    status: component.status,
    platform,
    platformSource: source,
    platformEvidence: evidence,
    sizesByPlatform: { pc: pcSizes, mobile: mobileSizes },
    sizes: component.sizes || [],
    variants: component.variants || [],
    variantAttribute: component.variantAttribute,
    sizeAttribute: component.sizeAttribute,
    requiredAttributes: component.requiredAttributes || [],
    requiredParts: component.requiredParts || [],
    parts: component.parts || [],
    states: component.states || [],
    jsRequired: Boolean(component.jsRequired),
    events: component.events || []
  };
});

const names = tokens.tokens.map(({ name }) => name);
const numberOf = (prefix) => names
  .filter((name) => new RegExp(`^${prefix}\\d+$`).test(name))
  .map((name) => Number(name.slice(prefix.length)))
  .sort((a, b) => a - b);

const scope = {
  _meta: {
    note: "자동 생성물 — 손으로 고치지 마세요. `node ai/scripts/build-scope.mjs` 로 다시 만듭니다.",
    sources: [
      "ui-library/dist/platform/contract.json",
      "ui-library/dist/platform/tokens.json",
      "ui-library/dist/tools/lint-rules.json",
      "ui-library/dist/examples/*.html",
      "ai/rules/platform-scope.overrides.json"
    ],
    distVersion: manifest.version,
    distReleasedAt: manifest.releasedAt,
    canonicalFingerprint: manifest.canonicalFingerprint,
    builtAt: new Date().toISOString().slice(0, 10)
  },
  rules: lintRules,
  platforms: ["pc", "mobile"],
  breakAttribute: "data-break",
  componentAttribute: "data-s1-component",
  partAttribute: "data-s1-part",
  scale: {
    spacing: numberOf("--spacing-"),
    fontSize: numberOf("--font-size-"),
    radius: numberOf("--radius-"),
    borderWidth: numberOf("--border-width-")
  },
  grouping: {
    note: "S1 조합 문법 — 간격은 이 세 자리에서 고른다.",
    withinGroup: 8,
    betweenGroups: 24,
    inline: 12
  },
  tokenNames: names,
  darkOnlyTokens: tokens.darkOnlyTokens || [],
  components
};

await mkdir(path.join(ROOT, "ai", "generated"), { recursive: true });
await writeFile(path.join(ROOT, "ai", "generated", "scope.json"), `${JSON.stringify(scope, null, 2)}\n`, "utf8");

/* 매체별 부품 목록도 같이 내보낸다 — AI 가 읽을 때 목록을 외우지 않게. */
for (const target of ["pc", "mobile"]) {
  const label = target === "pc" ? "PC" : "모바일";
  const other = target === "pc" ? "mobile" : "pc";
  const usable = components.filter((c) => c.platform === "both" || c.platform === `${target}-only`);
  const forbidden = components.filter((c) => c.platform === `${other}-only`);
  const undecided = components.filter((c) => c.platform === "unknown");
  const sizeLine = (c) => {
    const sizes = c.sizesByPlatform[target];
    return sizes.length ? ` — 크기 ${sizes.join(" · ")}` : "";
  };
  const lines = [
    `# ${label} 에서 쓸 수 있는 부품`,
    "",
    "> 자동 생성물 — 손으로 고치지 마세요. `node ai/scripts/build-scope.mjs` 로 다시 만듭니다.",
    `> 배포본 ${manifest.version} (${manifest.releasedAt} 판) 기준.`,
    "",
    `## 써도 되는 것 (${usable.length}종)`,
    "",
    ...usable.map((c) => `- \`${c.id}\`${sizeLine(c)}${c.jsRequired ? " · 동작 스크립트 필요" : ""}`),
    "",
    `## ${label} 화면에 놓지 않는 것 (${forbidden.length}종)`,
    "",
    ...(forbidden.length ? forbidden.map((c) => `- \`${c.id}\` — ${other === "pc" ? "PC" : "모바일"} 전용`) : ["- 없습니다."]),
    "",
    `## 아직 확정되지 않은 것 (${undecided.length}종)`,
    "",
    "어느 매체 것인지 배포본 파일만으로는 갈리지 않는 부품입니다. 검수기는 경고만 냅니다.",
    "",
    ...(undecided.length ? undecided.map((c) => `- \`${c.id}\``) : ["- 없습니다."]),
    ""
  ];
  await writeFile(path.join(ROOT, "ai", "generated", `components.${target}.md`), lines.join("\n"), "utf8");
}

const byPlatform = components.reduce((acc, c) => { acc[c.platform] = (acc[c.platform] || 0) + 1; return acc; }, {});
console.log(`scope.json 생성 · 부품 ${components.length}종 · 토큰 ${names.length}개`);
console.log(`매체 소속 — ${Object.entries(byPlatform).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
const unknown = components.filter((c) => c.platform === "unknown").map((c) => c.id);
if (unknown.length) console.log(`아직 확정 안 됨(경고만 냄): ${unknown.join(", ")}`);
