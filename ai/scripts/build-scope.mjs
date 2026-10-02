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
 *   화면 종류(사용자용·관리자용 기본·작게·모바일)별 크기 ← ai/rules/usage-profiles.json (화면 종류 → 밀도)
 *                                            + registry/governance/density-policy.json (밀도 정본)
 *                                            + 배포본 부품 CSS 의 실제 높이 (밀도 → 크기 이름)
 * 여기 없는 것은 만들어 넣지 않는다.
 */
import { readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { densityMapFor } from "./density-map.mjs";
import { writeProfileDocs } from "./profile-docs.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const DIST = path.join(ROOT, "ui-library", "dist");
const readJson = async (p) => JSON.parse(await readFile(p, "utf8"));

const contract = await readJson(path.join(DIST, "platform", "contract.json"));
const registryDir = path.join(ROOT, "registry", "components");
const tokens = await readJson(path.join(DIST, "platform", "tokens.json"));
const manifest = await readJson(path.join(DIST, "manifest.json"));
const lintRules = await readJson(path.join(DIST, "tools", "lint-rules.json"));
const overrides = await readJson(path.join(ROOT, "ai", "rules", "platform-scope.overrides.json"));
const densityPolicy = await readJson(path.join(ROOT, "registry", "governance", "density-policy.json"));
const usageProfiles = await readJson(path.join(ROOT, "ai", "rules", "usage-profiles.json"));

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

/* 예제 안에서 각 부품이 매체별로 실제로 갖춘 부품(part)을 모은다.
   계약의 requiredParts 는 PC 모양 기준이라, 모바일 예제(바퀴형 시간 선택·시트 안 달력 등)를
   그대로 붙여도 '빠졌다'고 나왔다. 그 매체 예제 전부에 실제로 있는 것만 그 매체의 필수로 본다. */
const VOID_TAGS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);
const examplePartsByPlatform = new Map(); // id → { pc: [Set…], mobile: [Set…] }
for (const file of exampleFiles) {
  if (!file.endsWith(".html")) continue;
  const text = (await readFile(path.join(exampleDir, file), "utf8")).replace(/<!--[\s\S]*?-->/g, "");
  const fileIsMobile = file.includes(".mobile") || file.includes("-mobile");
  const stack = [];
  const occurrences = [];
  for (const m of text.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>])*?)(\/?)>/g)) {
    const [, closing, rawName, body, self] = m;
    const name = rawName.toLowerCase();
    if (closing) {
      for (let i = stack.length - 1; i >= 0; i -= 1) if (stack[i].name === name) { stack.length = i; break; }
      continue;
    }
    const component = /data-s1-component\s*=\s*["']([a-z0-9-]+)["']/.exec(body)?.[1] || null;
    const part = /data-s1-part\s*=\s*["']([a-z0-9-]+)["']/.exec(body)?.[1] || null;
    const owner = [...stack].reverse().find((entry) => entry.occurrence)?.occurrence || null;
    if (part && owner) owner.parts.add(part);
    let occurrence = null;
    if (component) {
      const declared = /data-break\s*=\s*["'](pc|mobile)["']/.exec(body)?.[1];
      const inherited = owner?.platform;
      occurrence = { id: component, parts: new Set(), platform: declared || inherited || (fileIsMobile ? "mobile" : "pc") };
      occurrences.push(occurrence);
    }
    if (!self && !VOID_TAGS.has(name)) stack.push({ name, occurrence });
  }
  for (const occurrence of occurrences) {
    if (!examplePartsByPlatform.has(occurrence.id)) examplePartsByPlatform.set(occurrence.id, { pc: [], mobile: [] });
    examplePartsByPlatform.get(occurrence.id)[occurrence.platform].push(occurrence.parts);
  }
}
const requiredPartsFor = (id, required, target) => {
  const seen = examplePartsByPlatform.get(id)?.[target] || [];
  if (!seen.length) return required;
  return required.filter((part) => seen.every((parts) => parts.has(part)));
};

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
    requiredPartsByPlatform: {
      pc: requiredPartsFor(component.id, component.requiredParts || [], "pc"),
      mobile: requiredPartsFor(component.id, component.requiredParts || [], "mobile")
    },
    parts: component.parts || [],
    states: component.states || [],
    jsRequired: Boolean(component.jsRequired),
    events: component.events || []
  };
});

/* 밀도 → 부품별 크기 이름. 배포본 CSS 의 실제 높이에서 읽는다. */
const densityMap = {};
for (const id of Object.keys(densityPolicy.componentFacts)) {
  let css;
  let componentManifest = {};
  try {
    css = await readFile(path.join(DIST, "components", `${id}.css`), "utf8");
  } catch {
    throw new Error(`밀도 정책이 지목한 부품 ${id} 가 배포본에 없습니다 — density-policy.json 과 배포본이 어긋났습니다.`);
  }
  try { componentManifest = await readJson(path.join(DIST, "components", `${id}.manifest.json`)); } catch { /* breaks 없이 읽는다 */ }
  const read = densityMapFor(css, densityPolicy, componentManifest.breaks || null);
  for (const level of densityPolicy.levels) {
    if (!read.pc[level.id]) throw new Error(`${id}: ${level.ko}(${level.pcHeight}) 에 맞는 크기를 배포본 CSS 에서 읽지 못했습니다.`);
  }
  densityMap[id] = read;
}
const substitutes = Object.fromEntries(Object.entries(densityPolicy.mobileSubstitutes || {})
  .filter(([key]) => !key.startsWith("_"))
  .map(([id, value]) => [id, { use: value.use, note: value.note }]));

/* 부품별 실제 높이 — 문서·검수기가 "34(xsm)" 처럼 숫자로 보여 주려고 읽는다. */
const heightIds = new Set([...Object.keys(densityPolicy.componentFacts), "tab", "gnb", ...Object.values(usageProfiles.groups).flatMap((g) => g.components)]);
const componentHeights = {};
for (const id of heightIds) {
  try {
    const css = await readFile(path.join(DIST, "components", `${id}.css`), "utf8");
    let componentManifest = {};
    try { componentManifest = await readJson(path.join(DIST, "components", `${id}.manifest.json`)); } catch { /* 없으면 breaks 없이 */ }
    componentHeights[id] = densityMapFor(css, densityPolicy, componentManifest.breaks || null).heights;
  } catch { /* CSS 가 없는 부품은 숫자 없이 크기 이름만 보여 준다 */ }
}

/* 화면 종류별 크기. PC 는 river 가 판정표에서 고른 '자리 × 부품 묶음' 값을 그대로 쓰고,
   모바일은 밀도 정책의 손가락 기준 크기를 쓴다. */
const specById = new Map(components.map((c) => [c.id, c]));
const profiles = {};
for (const [id, profile] of Object.entries(usageProfiles.profiles)) {
  if (!["pc", "mobile"].includes(profile.platform)) throw new Error(`usage-profiles.json: ${id} 의 platform 이 pc·mobile 이 아닙니다.`);
  if (profile.platform === "mobile") {
    const sizes = {};
    for (const [component, read] of Object.entries(densityMap)) {
      sizes[component] = substitutes[component] ? { substitute: substitutes[component].use } : { base: read.mobile };
    }
    profiles[id] = { ...profile, sizes };
    continue;
  }
  if (!densityPolicy.levels.some((l) => l.id === profile.density)) throw new Error(`usage-profiles.json: ${id} 의 density "${profile.density}" 가 밀도 정책에 없습니다.`);
  const componentSizes = {};
  for (const [zone, picks] of Object.entries(profile.sizes || {})) {
    if (!usageProfiles.zones[zone]) throw new Error(`usage-profiles.json: ${id} 가 없는 자리 "${zone}" 를 씁니다.`);
    componentSizes[zone] = {};
    for (const [group, size] of Object.entries(picks)) {
      const members = usageProfiles.groups[group]?.components;
      if (!members) throw new Error(`usage-profiles.json: ${id}.${zone} 에 없는 부품 묶음 "${group}" 이 있습니다.`);
      for (const component of members) {
        const spec = specById.get(component);
        if (spec?.sizes.length && !spec.sizes.includes(size)) throw new Error(`usage-profiles.json: ${id}.${zone}.${group} 의 "${size}" 는 ${component} 에 없는 크기입니다.`);
        componentSizes[zone][component] = size;
      }
    }
  }
  const tableRows = [...new Set(Object.values(profile.tableRow || {}))];
  for (const size of tableRows) {
    if (!specById.get("table")?.sizes.includes(size)) throw new Error(`usage-profiles.json: ${id}.tableRow 의 "${size}" 는 표에 없는 크기입니다.`);
  }
  if (profile.gnb && !specById.get("gnb")?.sizes.includes(profile.gnb)) throw new Error(`usage-profiles.json: ${id}.gnb 의 "${profile.gnb}" 는 GNB 에 없는 크기입니다.`);
  profiles[id] = { ...profile, componentSizes, tableRows };
}

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
      "ai/rules/platform-scope.overrides.json",
      "ai/rules/usage-profiles.json",
      "registry/governance/density-policy.json",
      "ui-library/dist/components/*.css"
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
  density: {
    note: "화면 종류별 크기 기준. 화면 종류 → 밀도는 usage-profiles.json, 밀도 → 크기 이름은 배포본 CSS 높이에서 읽었다.",
    attribute: densityPolicy.attribute,
    breakAttribute: densityPolicy.breakAttribute,
    levels: densityPolicy.levels.map(({ id, ko, pcHeight }) => ({ id, ko, pcHeight })),
    mobileHeight: densityPolicy.mobileHeight,
    map: densityMap,
    mobileSubstitutes: substitutes,
    zones: usageProfiles.zones,
    groups: usageProfiles.groups,
    advisory: usageProfiles.advisory || {},
    heights: componentHeights,
    unsettled: Object.fromEntries(Object.entries(usageProfiles.unsettled || {}).filter(([key]) => !key.startsWith("_")))
  },
  profiles,
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
  const swaps = target === "mobile" ? substitutes : {};
  const usable = components.filter((c) => (c.platform === "both" || c.platform === `${target}-only`) && !swaps[c.id]);
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
    ...(Object.keys(swaps).length ? [
      `## 따로 쓰지 않고 바꿔 쓰는 것 (${Object.keys(swaps).length}종)`,
      "",
      "선택 상자·필터 칩 예제 안에 들어 있는 목록은 예제 그대로 둡니다. 화면에 따로 놓지 않을 뿐입니다.",
      "",
      ...Object.entries(swaps).map(([id, swap]) => `- \`${id}\` → ${swap.use}`),
      ""
    ] : []),
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

/* 화면 종류별 크기표와 비교판 — AI 는 고른 화면 종류의 표 하나만 읽는다. */
await writeProfileDocs(scope, ROOT, DIST, manifest);

const byPlatform = components.reduce((acc, c) => { acc[c.platform] = (acc[c.platform] || 0) + 1; return acc; }, {});
console.log(`scope.json 생성 · 부품 ${components.length}종 · 토큰 ${names.length}개`);
console.log(`매체 소속 — ${Object.entries(byPlatform).map(([k, v]) => `${k} ${v}`).join(" · ")}`);
const unknown = components.filter((c) => c.platform === "unknown").map((c) => c.id);
console.log(`화면 종류 — ${Object.values(profiles).map((p) => p.label).join(" · ")} (ai/generated/profile.*.md · profiles.pc.html · profiles.mobile.html)`);
if (unknown.length) console.log(`아직 확정 안 됨(경고만 냄): ${unknown.join(", ")}`);
