/**
 * density-map — "밀도(넓게·보통·좁게) → 부품별 크기 이름" 표를 배포본 CSS 에서 읽는다.
 * --------------------------------------------------------------------------
 * 표를 손으로 적지 않는다. 부품 CSS 의 `[data-size="…"]` 규칙이 만드는 실제 높이를
 * density-policy.json 의 높이(44·34·28, 모바일 48·30)와 맞춰 본다.
 * 원본 저장소 ui-library/scripts/density.mjs 의 densityMapFor 와 같은 방식이고,
 * 맞는 크기가 없을 때 고르는 순서(아래 먼저, 없으면 위)도 같은 정책을 따른다.
 */

/** 배포본 CSS 뒤에 붙은 밀도 사본은 읽지 않는다 — 원래 크기 규칙만 본다. */
const DENSITY_SECTION = "/* ── 밀도(density)";

function splitSelectorList(selector) {
  const parts = [];
  let depth = 0;
  let quote = null;
  let start = 0;
  for (let i = 0; i < selector.length; i++) {
    const ch = selector[i];
    if (quote) { if (ch === quote && selector[i - 1] !== "\\") quote = null; continue; }
    if (ch === '"' || ch === "'") quote = ch;
    else if (ch === "(" || ch === "[") depth++;
    else if (ch === ")" || ch === "]") depth--;
    else if (ch === "," && depth === 0) { parts.push(selector.slice(start, i)); start = i + 1; }
  }
  parts.push(selector.slice(start));
  return parts.map((s) => s.trim()).filter(Boolean);
}

function* topLevelRules(css) {
  let depth = 0;
  let start = 0;
  let selector = null;
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (ch === "{") {
      if (depth === 0) { selector = css.slice(start, i).replace(/\/\*[\s\S]*?\*\//g, " ").trim(); start = i + 1; }
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0) {
        if (selector && !selector.startsWith("@")) yield { selector, body: css.slice(start, i) };
        selector = null;
        start = i + 1;
      }
    }
  }
}

function partSuffixes(selector) {
  return splitSelectorList(selector).map((one) => {
    const parts = one.split(/\s+/).filter(Boolean);
    const rest = parts.slice(1).join(" ").replace(/\[data-size="[a-z]+"\]/g, "").replace(/\[data-break="[a-z]+"\]/g, "").trim();
    return rest || ":root-self";
  });
}

/* 높이는 토큰(var(--sizing-N))으로 적혀 있는 게 보통이지만, 탭 42 처럼 숫자(px)로, GNB 36 처럼 --spacing-N 으로 적힌 자리도 있다. */
const HEIGHT = /(?:^|[\s;{])(?:min-)?height:\s*(?:calc\()?(?:var\(--(?:sizing|spacing)-(\d+)\)|(\d+)px)/g;
const readHeight = (m) => Number(m[1] ?? m[2]);

function defaultHeightFor(css, controlParts) {
  let found = null;
  for (const { selector, body } of topLevelRules(css)) {
    if (/\[data-size=/.test(selector) || /\[data-break=/.test(selector)) continue;
    if (!partSuffixes(selector).some((part) => controlParts.has(part))) continue;
    const heights = [...body.matchAll(HEIGHT)].map(readHeight);
    if (heights.length) found = Math.max(found ?? 0, ...heights);
  }
  return found;
}

/**
 * 한 부품의 밀도 표.
 * 돌려주는 것: { pc: { wide, normal, narrow }, mobile, heights: { 크기: 높이 } }
 * pc 의 각 칸은 그 밀도에서 써야 할 크기 이름이다.
 */
export function densityMapFor(rawCss, policy, breaks = null) {
  const cut = rawCss.indexOf(DENSITY_SECTION);
  const css = cut === -1 ? rawCss : rawCss.slice(0, cut);
  const byPcHeight = new Map(policy.levels.map((l) => [l.pcHeight, l.id]));
  const pcHeights = new Map();
  const mobileHeights = new Map();
  const partsByHeight = new Map();
  for (const { selector, body } of topLevelRules(css)) {
    const sizes = [...new Set([...selector.matchAll(/\[data-size="([a-z]+)"\]/g)].map((m) => m[1]))];
    if (sizes.length !== 1) continue;
    const heights = [...body.matchAll(HEIGHT)].map(readHeight);
    if (!heights.length) continue;
    const tallest = Math.max(...heights);
    const mobileOnly = breaks ? (breaks.mobile || []).includes(sizes[0]) && !(breaks.pc || []).includes(sizes[0]) : false;
    const target = (mobileOnly || selector.includes('[data-break="mobile"]')) ? mobileHeights : pcHeights;
    target.set(sizes[0], Math.max(tallest, target.get(sizes[0]) ?? 0));
    if (!partsByHeight.has(tallest)) partsByHeight.set(tallest, new Set());
    for (const part of partSuffixes(selector)) partsByHeight.get(tallest).add(part);
  }
  const tallestSized = Math.max(0, ...partsByHeight.keys());
  const defaultHeight = defaultHeightFor(css, partsByHeight.get(tallestSized) ?? new Set());

  /* 크기 규칙 없이 기본으로 서는 크기(표의 md=44 처럼)도 높이 목록에 넣는다. */
  const unlisted = (breaks?.pc || []).filter((size) => !pcHeights.has(size));
  if (defaultHeight && unlisted.length === 1) pcHeights.set(unlisted[0], defaultHeight);

  const heights = [...pcHeights].map(([size, height]) => [height, size]);
  const pc = {};
  for (const [height, size] of heights) {
    const level = byPcHeight.get(height);
    if (level && !pc[level]) pc[level] = size;
  }
  /* 그 밀도에 딱 맞는 크기가 없으면 가장 가까운 아래 크기, 아래가 없으면 위 (density-policy fallbackDirection). */
  for (const level of policy.levels) {
    if (pc[level.id]) continue;
    const below = heights.filter(([h]) => h < level.pcHeight).sort((a, b) => b[0] - a[0])[0];
    const above = heights.filter(([h]) => h > level.pcHeight).sort((a, b) => a[0] - b[0])[0];
    const pick = below || above;
    if (pick) pc[level.id] = pick[1];
  }
  let mobile = null;
  for (const [size, height] of mobileHeights) {
    if (policy.mobileFallbackHeights.includes(height) && !mobile) mobile = size;
  }
  /* 모바일 전용 크기 규칙이 없고 PC 와 같은 이름을 쓰는 부품(입력 md 등)은 breaks.mobile 이 정본이다. */
  if (!mobile && Array.isArray(breaks?.mobile) && breaks.mobile.length === 1) mobile = breaks.mobile[0];

  const heightOf = {};
  for (const [size, height] of pcHeights) heightOf[size] = height;
  const mobileHeightOf = {};
  for (const [size, height] of mobileHeights) mobileHeightOf[size] = height;
  return { pc, mobile, heights: heightOf, mobileHeights: mobileHeightOf };
}
