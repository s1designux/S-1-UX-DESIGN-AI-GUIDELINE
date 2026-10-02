#!/usr/bin/env node
/**
 * review-request — POC 에 S1 을 입히기 전에 디자이너에게 보낼 "디자인 확인 요청서"(HTML 한 장)를 만든다.
 * --------------------------------------------------------------------------
 *   node ai/scripts/review-request.mjs <POC폴더>/s1-mapping.json [--out <POC폴더>/디자인확인요청서.html]
 *
 * 입력: 개발 쪽 AI 가 만든 대응표(s1-mapping.json) — 형식은 ai/rules/apply-poc.md 2단계.
 * 출력: 파일 하나로 열리는 요청서. S1 후보 부품은 배포본 예제를 그대로 그려 넣는다.
 *       디자이너가 고른 뒤 "결과 복사"를 누르면 판정 결과(JSON)가 복사되고, 그걸 개발자에게 보낸다.
 * 판정 기준을 이 스크립트가 만들지 않는다. 대응표에 적힌 것만 보여 준다.
 */
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const DIST = path.join(ROOT, "ui-library", "dist");
const argv = process.argv.slice(2);
const mappingPath = argv.find((a) => !a.startsWith("--"));
const outFlag = argv.indexOf("--out");
if (!mappingPath) {
  console.error("대응표 파일을 알려주세요.  예: node ai/scripts/review-request.mjs poc/s1-mapping.json");
  process.exit(2);
}
const mappingFile = path.resolve(process.cwd(), mappingPath);
const outFile = outFlag !== -1 ? path.resolve(process.cwd(), argv[outFlag + 1]) : path.join(path.dirname(mappingFile), "디자인확인요청서.html");

const mapping = JSON.parse(await readFile(mappingFile, "utf8"));
const scope = JSON.parse(await readFile(path.join(ROOT, "ai", "generated", "scope.json"), "utf8"));
const byId = new Map(scope.components.map((c) => [c.id, c]));
const profile = scope.profiles[mapping.profile];

/* ── 대응표 점검 — 형식이 틀리면 요청서를 만들지 않는다 ── */
const problems = [];
if (!profile) problems.push(`profile "${mapping.profile}" 이 없습니다 — ${Object.keys(scope.profiles).join(" · ")} 중 하나`);
if (!Array.isArray(mapping.items) || !mapping.items.length) problems.push("items 가 비어 있습니다");
const seen = new Set();
for (const item of mapping.items || []) {
  const where = `items[${item.id || "?"}]`;
  if (!item.id) problems.push(`${where}: id 가 없습니다`);
  if (seen.has(item.id)) problems.push(`${where}: id 가 겹칩니다`);
  seen.add(item.id);
  if (!["exact", "similar", "none"].includes(item.match)) problems.push(`${where}: match 는 exact · similar · none 중 하나`);
  if (!item.poc?.does) problems.push(`${where}: poc.does(하는 일)가 없습니다 — 이름이 아니라 하는 일로 짝짓습니다`);
  for (const candidate of [item.s1, ...(item.alternatives || [])].filter(Boolean)) {
    const spec = byId.get(candidate.component);
    if (!spec) { problems.push(`${where}: S1 에 없는 부품 "${candidate.component}"`); continue; }
    if (candidate.variant && spec.variants.length && !spec.variants.includes(candidate.variant)) problems.push(`${where}: ${candidate.component} 에 없는 변형 "${candidate.variant}"`);
    if (candidate.size && spec.sizes.length && !spec.sizes.includes(candidate.size)) problems.push(`${where}: ${candidate.component} 에 없는 크기 "${candidate.size}"`);
  }
  if (item.match !== "none" && !item.s1) problems.push(`${where}: match 가 ${item.match} 인데 s1(제안 부품)이 없습니다`);
  if (item.match !== "exact" && !item.gap) problems.push(`${where}: similar·none 은 gap(무엇이 다른지)을 적어야 디자이너가 고를 수 있습니다`);
}
if (problems.length) {
  console.error("대응표를 고쳐야 요청서를 만들 수 있습니다:");
  for (const p of problems) console.error(`  ✖ ${p}`);
  process.exit(1);
}

/* ── S1 후보 부품을 배포본 예제로 그린다 ── */
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);
function firstElement(html) {
  const pattern = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)(?:"[^"]*"|'[^']*'|[^>])*?(\/?)>/g;
  let depth = 0, start = -1, m;
  while ((m = pattern.exec(html)) !== null) {
    if (start === -1) start = m.index;
    if (m[1]) depth -= 1; else if (!m[3] && !VOID.has(m[2].toLowerCase())) depth += 1;
    if (depth === 0) return html.slice(start, m.index + m[0].length);
  }
  return html;
}
let seq = 0;
async function render(candidate) {
  const spec = byId.get(candidate.component);
  const mobile = profile.platform === "mobile";
  let source = null;
  for (const name of mobile ? [`${candidate.component}.mobile`, candidate.component] : [candidate.component]) {
    try { source = await readFile(path.join(DIST, "examples", `${name}.html`), "utf8"); break; } catch { /* 다음 */ }
  }
  if (!source) return `<div class="s1-missing">예제가 없는 부품입니다</div>`;
  /* 예제 파일 맨 앞이 보여 주기용 묶음일 수 있다 — 그 부품의 첫 요소를 찾아 떼어 낸다. */
  const clean = source.replace(/<!--[\s\S]*?-->/g, "").trim();
  const at = clean.indexOf(`data-s1-component="${candidate.component}"`);
  let html = firstElement(at === -1 ? clean : clean.slice(clean.lastIndexOf("<", at)));
  /* 팝업처럼 처음에 숨겨 둔 부품은 겉만 보이게 한다(안쪽의 hidden 은 그대로 — 선택 상자 목록 등). */
  html = html.replace(/^(<[^>]*?)\s+hidden(?=[\s>])/, "$1");
  if (candidate.size) html = html.replace(/data-size="[a-z0-9]+"/, `data-size="${candidate.size}"`);
  if (candidate.variant && spec.variantAttribute) {
    const attr = spec.variantAttribute;
    html = new RegExp(`${attr}="[^"]*"`).test(html.split(">")[0])
      ? html.replace(new RegExp(`${attr}="[^"]*"`), `${attr}="${candidate.variant}"`)
      : html.replace(`data-s1-component="${candidate.component}"`, `data-s1-component="${candidate.component}" ${attr}="${candidate.variant}"`);
  }
  if (candidate.label) {
    html = /data-s1-part="label"/.test(html)
      ? html.replace(/(<span data-s1-part="label">)[^<]*/, `$1${escape(candidate.label)}`)
      : html.replace(/^(<[^>]+>)([^<]+)(<\/)/, `$1${escape(candidate.label)}$3`); // 라벨 부품이 없는 부품(뱃지 등)은 글자만 바꾼다
  }
  seq += 1;
  return html.replace(/\bid="([^"]+)"/g, `id="r${seq}-$1"`).replace(/\b(for|aria-labelledby|aria-controls)="([^"]+)"/g, `$1="r${seq}-$2"`);
}
const escape = (v) => String(v ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const label = (c) => [c.component, c.variant, c.size].filter(Boolean).join(" · ");
const heightOf = (c) => scope.density.heights?.[c.component]?.[c.size];


/* ── 요청서 — 이 페이지 자체도 S1 부품(뱃지·라디오·텍스트 영역·버튼·구분선)과 토큰으로 짠다 ── */
const MATCH = {
  exact: { text: "짝 있음", hint: "이의가 있을 때만 바꾸세요", tag: 'data-tone="blue" data-solid="off"', cls: "ok" },
  similar: { text: "비슷한 것 있음", hint: "어떻게 할지 골라 주세요", tag: 'data-tone="red" data-solid="off"', cls: "near" },
  none: { text: "기준에 없음", hint: "어떻게 할지 골라 주세요", tag: 'data-tone="red" data-solid="on"', cls: "none" }
};
const tag = (m, text) => `<span data-s1-component="data-tag" data-shape="square" ${m.tag}>${escape(text ?? m.text)}</span>`;
const zoneLabel = (z) => scope.density.zones?.[z]?.label || z || "—";
const items = mapping.items;
const counts = { exact: 0, similar: 0, none: 0 };
for (const item of items) counts[item.match] += 1;

/** 대응표 옆에 있는 그림(캡처)을 파일 하나에 넣는다 — 요청서는 한 장으로 주고받는다. */
async function picture(rel, alt) {
  if (!rel) return "";
  try {
    const file = path.resolve(path.dirname(mappingFile), rel);
    const ext = path.extname(file).slice(1).toLowerCase();
    const type = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp", gif: "image/gif" }[ext];
    if (!type) return "";
    return `<img class="shot" alt="${escape(alt)}" src="data:${type};base64,${(await readFile(file)).toString("base64")}">`;
  } catch { return ""; }
}
const radio = (name, id, value, text, checked) => `<div data-s1-component="radio">
      <input type="radio" id="${id}" name="${name}" value="${value}" data-s1-part="control"${checked ? " checked" : ""}>
      <label data-s1-part="label" for="${id}">${text}</label>
    </div>`;

const cards = [];
for (const item of items) {
  const m = MATCH[item.match];
  const id = escape(item.id);
  const options = [];
  if (item.s1) options.push({ value: "apply", text: `제안대로 바꾸기 · <span class="muted">${escape(label(item.s1))}</span>` });
  (item.alternatives || []).forEach((alt, i) => options.push({ value: `alt:${i}`, text: `다른 후보로 바꾸기 · <span class="muted">${escape(label(alt))}</span>` }));
  options.push({ value: "keep", text: `그대로 두기 · <span class="muted">S1 색·글자만 입힘</span>` });
  options.push({ value: "request", text: `새 부품으로 만들기 · <span class="muted">디자인 시스템 추가 목록에 올림</span>` });
  const candidates = [];
  for (const [i, c] of [item.s1, ...(item.alternatives || [])].entries()) {
    if (!c) continue;
    const h = heightOf(c);
    const status = byId.get(c.component)?.status;
    candidates.push(`<figure class="cand">
        <div class="cand-slot" ${profile.platform === "mobile" ? 'data-s1-break="mobile"' : `data-s1-density="${profile.density}"`}>${await render(c)}</div>
        <figcaption class="muted typo-body-12r"><span class="title typo-title-14b">${i === 0 ? "제안" : `후보 ${i}`}</span> ${escape(label(c))}${h ? ` · 높이 ${h}` : ""}${status === "candidate" ? ` ${tag(MATCH.similar, "승인 전 후보")}` : ""}</figcaption>
      </figure>`);
  }
  const shot = await picture(item.poc.image, `${item.id} 가 놓인 POC 화면`);
  cards.push(`<article class="item" id="item-${id}" data-id="${id}">
  <header class="item-head">
    <span class="title typo-title-18b">${id}</span>
    ${tag(m)}
    <span class="muted typo-body-12r">${escape(item.screen || "")} · ${escape(zoneLabel(item.zone))}${item.file ? ` · ${escape(item.file)}${item.line ? `:${item.line}` : ""}` : ""}</span>
  </header>
  <div class="body">
    <section class="poc">
      <div class="group">
        <h3 class="title typo-title-14b">지금 POC 화면 <span class="muted typo-body-12r">빨간 테두리가 이 부품</span></h3>
        ${shot || `<p class="caution typo-body-12r">화면 캡처가 없습니다 — 아래 설명을 보고 판단해 주세요.</p>`}
      </div>
      <dl class="facts typo-body-14r">
        <dt class="muted">하는 일</dt><dd>${escape(item.poc.does)}</dd>
        ${item.poc.looks ? `<dt class="muted">모습</dt><dd>${escape(item.poc.looks)}</dd>` : ""}
        ${item.poc.name ? `<dt class="muted">POC 이름</dt><dd>${escape(item.poc.name)}</dd>` : ""}
      </dl>
    </section>
    <section class="s1">
      <div class="group">
        <h3 class="title typo-title-14b">S1 로 바꾸면</h3>
        ${candidates.length ? `<div class="cands">${candidates.join("")}</div>` : `<p class="caution typo-body-14m">맞는 S1 부품이 없습니다.</p>`}
      </div>
      ${item.why || item.gap ? `<dl class="reasons typo-body-12r">
        ${item.why ? `<div class="pair"><dt class="title typo-title-14b">이렇게 짝지은 이유</dt><dd>${escape(item.why)}</dd></div>` : ""}
        ${item.gap ? `<div class="pair"><dt class="caution typo-title-14b">다른 점</dt><dd>${escape(item.gap)}</dd></div>` : ""}
      </dl>` : ""}
    </section>
  </div>
  <fieldset class="decide">
    <legend class="title typo-title-14b">${m.hint}</legend>
    <div class="radios">${options.map((o) => radio(`d-${id}`, `d-${id}-${o.value.replace(":", "-")}`, o.value, o.text, item.match === "exact" && o.value === "apply")).join("")}</div>
    <div data-s1-component="textarea" data-break="pc">
      <textarea id="memo-${id}" data-s1-part="control" aria-label="${id} 메모" placeholder="메모 (선택) — 예: 삭제는 빨간색이 꼭 필요함"></textarea>
    </div>
  </fieldset>
</article>`);
}

const overviews = [];
for (const screen of mapping.screens || []) {
  const img = await picture(screen.image, `${screen.name} 전체 화면`);
  if (img) overviews.push(`<figure class="overview"><figcaption class="title typo-title-14b">${escape(screen.name)} <span class="muted typo-body-12r">— 번호가 아래 항목입니다</span></figcaption>${img}</figure>`);
}

const css = await (async () => {
  let text = (await readFile(path.join(DIST, "assets/css/tokens.css"), "utf8"))
    + "\n" + (await readFile(path.join(DIST, "assets/css/typography.css"), "utf8"))
    + "\n" + (await readFile(path.join(DIST, "s1-ui.css"), "utf8"));
  for (const icon of await readdir(path.join(DIST, "assets/icons"))) {
    const svg = await readFile(path.join(DIST, "assets/icons", icon));
    text = text.split(`url("./assets/icons/${icon}")`).join(`url("data:image/svg+xml;base64,${svg.toString("base64")}")`);
  }
  return text.replace(/@import[^;]+;/g, "").replace(/<\/style/gi, "<\\/style");
})();

const order = { none: 0, similar: 1, exact: 2 };
const sortedCards = cards.map((html, i) => ({ html, item: items[i] })).sort((a, b) => order[a.item.match] - order[b.item.match]);

const page = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>디자인 확인 요청서 — ${escape(mapping.project || "POC")}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<style>${css}</style>
<style>
  /* 페이지 틀 — 디자인 시스템에 없는 꾸밈(카드 상자·색 테두리·그림자·고정 막대)은 넣지 않는다.
     S1 부품과 글자 스타일만 쓰고, 여기서는 자리 배치와 S1 간격 토큰만 정한다. */
  body { margin:0; background:var(--color-bg-level-0); color:var(--color-text-body-primary); font-family:"Pretendard", sans-serif; }
  .wrap { max-width:1280px; margin:0 auto; padding:var(--spacing-32) var(--spacing-24) var(--spacing-64); display:flex; flex-direction:column; gap:var(--spacing-24); }
  .head { display:flex; flex-direction:column; gap:var(--spacing-8); }
  h1, h2, h3, p, ol, dl, figure { margin:0; }
  .title { color:var(--color-text-title-primary); }
  .sub { color:var(--color-text-body-secondary); }
  .guide { display:flex; flex-direction:column; gap:var(--spacing-12); }
  .guide ol { padding-left:var(--spacing-20); display:flex; flex-direction:column; gap:var(--spacing-4); }
  .tally { display:flex; gap:var(--spacing-8); flex-wrap:wrap; }
  .overview { display:flex; flex-direction:column; gap:var(--spacing-12); }
  .shot { display:block; width:100%; height:auto; }
  /* S1 묶음 규칙 — 한 묶음 안 8 · 한 줄 안 12 · 묶음 사이 24 */
  .item { display:flex; flex-direction:column; gap:var(--spacing-24); }
  .item-head { display:flex; gap:var(--spacing-12); align-items:center; flex-wrap:wrap; }
  .body { display:grid; grid-template-columns:minmax(0, 3fr) minmax(0, 2fr); gap:var(--spacing-24); }
  .poc, .s1 { display:flex; flex-direction:column; gap:var(--spacing-24); min-width:0; }
  .group { display:flex; flex-direction:column; gap:var(--spacing-8); min-width:0; }
  .cands { display:flex; flex-wrap:wrap; align-items:flex-end; gap:var(--spacing-24); }
  .cand { display:flex; flex-direction:column; gap:var(--spacing-8); min-width:0; overflow-x:auto; }
  .reasons { display:flex; flex-direction:column; gap:var(--spacing-12); }
  .reasons .pair { display:flex; flex-direction:column; gap:var(--spacing-4); }
  .reasons dd { margin:0; }
  .cand-slot > [data-s1-component="input"], .cand-slot > [data-s1-component="select"], .cand-slot > [data-s1-component="date-picker"] { width:200px; }
  .cand-slot [data-s1-component="modal"], .cand-slot [data-s1-component="modal-content"] { position:static; }
  .facts { display:grid; grid-template-columns:auto 1fr; gap:var(--spacing-4) var(--spacing-12); }
  .facts dd { margin:0; }
  .muted { color:var(--color-text-body-tertiary); }
  .caution { color:var(--color-text-state-caution); }
  .decide { border:0; margin:0; padding:0; display:flex; flex-direction:column; gap:var(--spacing-12); }
  .decide legend { padding:0; margin-bottom:var(--spacing-8); }
  .radios { display:flex; flex-wrap:wrap; gap:var(--spacing-8) var(--spacing-24); }
  .decide [data-s1-component="textarea"] { width:100%; max-width:640px; }
  .finish { display:flex; gap:var(--spacing-12); align-items:center; flex-wrap:wrap; }
  .finish [data-s1-component="textarea"] { width:100%; }
  #out { display:none; }
  #out.show { display:block; }
  @media (max-width:900px) { .body { grid-template-columns:minmax(0, 1fr); } }
</style></head>
<body>
<main class="wrap">
  <header class="head">
    <h1 class="title typo-title-24b">디자인 확인 요청서</h1>
    <p class="sub typo-body-14r">${escape(mapping.project || "POC")} · 화면 종류 ${escape(profile.label)} · 만든 날 ${escape(mapping.createdAt || "")}${mapping.requestedBy ? ` · 요청 ${escape(mapping.requestedBy)}` : ""}</p>
  </header>
  <section class="guide">
    <ol class="typo-body-14r">
      <li>POC 화면의 부품을 하나씩 S1 부품과 짝지었습니다. 왼쪽이 지금 POC 화면(빨간 테두리), 오른쪽이 바꿀 S1 부품입니다.</li>
      <li>기준에 없음과 비슷한 것 있음은 하나씩 골라 주세요. 짝 있음은 이의가 있을 때만 바꾸면 됩니다.</li>
      <li>다 고르면 맨 아래 결과 복사를 눌러 개발자에게 보내 주세요.</li>
    </ol>
    <div class="tally">${tag(MATCH.none, `기준에 없음 ${counts.none}`)}${tag(MATCH.similar, `비슷한 것 ${counts.similar}`)}${tag(MATCH.exact, `짝 있음 ${counts.exact}`)}</div>
  </section>
  ${overviews.length ? `<hr data-s1-component="divider" data-axis="x"><h2 class="title typo-title-18b">POC 화면 전체</h2>${overviews.join("")}` : ""}
  <hr data-s1-component="divider" data-axis="x">
  <h2 class="title typo-title-18b">부품별 확인</h2>
${sortedCards.map((c) => c.html).join('\n  <hr data-s1-component="divider" data-axis="x">\n')}
  <hr data-s1-component="divider" data-axis="x">
  <section class="finish">
    <span class="caution typo-body-14m" id="left"></span>
    <button type="button" data-s1-component="button" data-variant="primary" data-size="md" id="copy"><span data-s1-part="label">결과 복사</span></button>
    <div data-s1-component="textarea" data-break="pc" id="out"><textarea data-s1-part="control" id="out-text" aria-label="판정 결과" readonly></textarea></div>
  </section>
</main>
<script>
const META = ${JSON.stringify({ project: mapping.project || "", profile: mapping.profile, mappingCreatedAt: mapping.createdAt || "" })};
const IDS = ${JSON.stringify(items.map((i) => i.id))};
const KEY = "s1-review:" + META.project + ":" + META.mappingCreatedAt;
function state() {
  return IDS.map((id) => ({
    id,
    decision: (document.querySelector('input[name="d-' + CSS.escape(id) + '"]:checked') || {}).value || "",
    memo: document.getElementById("memo-" + id).value.trim()
  }));
}
function refresh() {
  const left = state().filter((d) => !d.decision).length;
  const el = document.getElementById("left");
  el.textContent = left ? "아직 안 고른 것 " + left + "개" : "모두 골랐습니다";
  el.classList.toggle("caution", !!left);
  try { localStorage.setItem(KEY, JSON.stringify(state())); } catch {}
}
try {
  const saved = JSON.parse(localStorage.getItem(KEY) || "null");
  if (saved) for (const d of saved) {
    if (d.decision) { const el = document.querySelector('input[name="d-' + CSS.escape(d.id) + '"][value="' + d.decision + '"]'); if (el) el.checked = true; }
    const memo = document.getElementById("memo-" + d.id); if (memo) memo.value = d.memo || "";
  }
} catch {}
document.addEventListener("change", refresh);
document.addEventListener("input", refresh);
refresh();
document.getElementById("copy").addEventListener("click", async () => {
  const result = { kind: "s1-review-result", ...META, reviewedAt: new Date().toISOString().slice(0, 10), decisions: state() };
  const text = JSON.stringify(result, null, 2);
  const label = document.querySelector("#copy [data-s1-part=label]");
  document.getElementById("out-text").value = text;
  try { await navigator.clipboard.writeText(text); label.textContent = "복사했습니다 — 개발자에게 보내 주세요"; }
  catch { document.getElementById("out").classList.add("show"); document.getElementById("out-text").select(); label.textContent = "아래 글을 복사해 보내 주세요"; }
});
</script>
</body></html>
`;
await writeFile(outFile, page, "utf8");
console.log(`요청서 생성: ${path.relative(process.cwd(), outFile)} · ❌ ${counts.none} · 🟡 ${counts.similar} · ✅ ${counts.exact}`);
