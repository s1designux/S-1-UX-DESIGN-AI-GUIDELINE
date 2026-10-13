#!/usr/bin/env node
/**
 * build-frames — 화면 큰 틀(GNB·LNB 유무)을 그림으로 고르는 한 장과, 틀마다 시작 파일을 만든다.
 * --------------------------------------------------------------------------
 *   node ai/scripts/build-frames.mjs
 *     → ai/generated/frame-picker.html   사람이 열어 그림을 보고 고르는 페이지(파일 하나로 열림)
 *     → ai/frames/<틀>.html              AI 가 새 화면을 시작할 때 복사하는 빈 뼈대
 *
 * 값을 새로 만들지 않는다. GNB 높이·LNB 폭은 scope.json 의 profiles(gnb·lnb)에서,
 * 마크업은 배포본 예제(ui-library/dist/examples)에서 그대로 가져온다.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const DIST = path.join(ROOT, "ui-library", "dist");
const scope = JSON.parse(await readFile(path.join(ROOT, "ai", "generated", "scope.json"), "utf8"));
const manifest = JSON.parse(await readFile(path.join(DIST, "manifest.json"), "utf8"));
const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const GNB_HEIGHT = { md: 56, sm: 48, xsm: 36 };
const LNB_WIDTH = { md: 240, lg: 280 };

/* ── 고를 수 있는 틀 — 온보딩 답(A·C·D·E)과 1:1 ── */
const P = scope.profiles;
const GROUPS = [
  { key: "doc", label: "문서", hint: "보고서·안내처럼 읽는 화면 · 사용자용 화면과 같은 크기", profile: "user", kind: "doc", answer: "A1 B1",
    frames: [{ frame: "plain", label: "본문만", e: 1 }, { frame: "gnb", label: "GNB + 본문", e: 2 }] },
  { key: "pr", label: P.pr.label, hint: "홍보·안내용 · GNB 만 씁니다(LNB 없음)", profile: "pr", kind: "prototype", answer: "A2 B1 C1 D1",
    frames: [{ frame: "gnb", label: "GNB만", e: 1 }] },
  { key: "user", label: P.user.label, hint: P.user.hint, profile: "user", kind: "prototype", answer: "A2 B1 C1 D2",
    frames: [{ frame: "gnb", label: "GNB만", e: 1 }, { frame: "gnb-lnb", label: "GNB + LNB", e: 2 }] },
  { key: "admin", label: P.admin.label, hint: P.admin.hint, profile: "admin", kind: "prototype", answer: "A2 B1 C1 D3",
    frames: [{ frame: "gnb", label: "GNB만", e: 1 }, { frame: "gnb-lnb", label: "GNB + LNB", e: 2 }] },
  { key: "admin-compact", label: P["admin-compact"].label, hint: P["admin-compact"].hint, profile: "admin-compact", kind: "prototype", answer: "A2 B1 C1 D4",
    frames: [{ frame: "gnb", label: "GNB만", e: 1 }, { frame: "gnb-lnb", label: "GNB + LNB", e: 2 }] },
  { key: "mobile", label: P.mobile.label, hint: "손가락 기준 높이 하나", profile: "mobile", kind: "prototype", answer: "A2 B1 C2",
    frames: [{ frame: "header", label: "위 제목 줄만", e: 1 }, { frame: "header-tabbar", label: "위 제목 줄 + 아래 메뉴", e: 2 }] }
];

/* ── 배포본 예제에서 부품 하나씩 떼어 오기 ── */
const example = async (name) => (await readFile(path.join(DIST, "examples", `${name}.html`), "utf8")).replace(/<!--[\s\S]*?-->/g, "");
function firstElement(html, tag, attr) {
  const start = html.search(new RegExp(`<${tag}\\b[^>]*${attr}`));
  if (start === -1) throw new Error(`${tag}[${attr}] 를 예제에서 찾지 못했습니다`);
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, "g");
  re.lastIndex = start;
  let depth = 0, m;
  while ((m = re.exec(html))) {
    depth += m[1] ? -1 : 1;
    if (depth === 0) return html.slice(start, re.lastIndex);
  }
  throw new Error(`${tag} 끝을 찾지 못했습니다`);
}
const gnbSource = firstElement(await example("gnb"), "nav", 'data-s1-component="gnb"');
const lnbSource = firstElement(await example("lnb"), "nav", 'data-s1-component="lnb"');
const headerSource = firstElement(await example("mobile-header"), "header", 'data-s1-component="mobile-header"');
const tabbarSource = firstElement(await example("mobile-bottom-nav"), "nav", 'role="tablist"');
const inputSource = firstElement(await example("input"), "div", 'data-s1-component="input"');
const buttonSource = firstElement(await example("button"), "button", 'data-s1-component="button"');

const MENUS = ["홈", "서비스", "고객지원"];
function gnb(size) {
  let i = 0;
  return gnbSource
    .replace(/data-size="[^"]*"/, `data-size="${size}"`)
    .replace(/aria-label="[^"]*"/, 'aria-label="주 메뉴"')
    .replace(/ aria-expanded="false" aria-controls="[^"]*"/g, "")
    .replace(/(<a data-s1-part="menu"[^>]*>)[^<]*/g, (_, open) => `${open}${MENUS[i++] ?? "메뉴"}`)
    .replace(/(data-s1-part="logo"[^>]*>)[^<]*/, "$1SERVICE LOGO");
}
const lnb = (size, prefix) => lnbSource
  .replace(/data-size="[^"]*"/, `data-size="${size}"`)
  .replace(/aria-label="기본 메뉴"/, 'aria-label="화면 메뉴"')
  .replace(/\s*<li><a[^>]*aria-disabled="true"[\s\S]*?<\/li>/, "")
  .replace(/\b(id|aria-controls)="([^"]+)"/g, `$1="${prefix}-$2"`);
const header = headerSource.replace(/(data-s1-part="title">)[^<]*/, "$1화면 제목");
const tabbar = tabbarSource.replace("<nav ", '<nav class="s1-tabbar" ');

/* 미리보기 안을 채우는 예시 내용 — 그 화면 종류의 크기 그대로 */
const sized = (html, size) => html.replace(/data-size="[^"]*"/, `data-size="${size}"`);
function sampleContent(group) {
  if (group.kind === "doc") {
    const para = '<p class="pv-text">이 자리에 문서 본문이 들어갑니다. 제목·문단·표를 사용자용 화면과 같은 크기로 씁니다.</p>';
    return `<h1 class="pv-title">문서 제목</h1>${para.repeat(3)}<div class="pv-block"></div>${para.repeat(2)}`;
  }
  if (group.profile === "mobile") {
    return `<div class="pv-block pv-short"></div><div class="pv-line"></div><div class="pv-line"></div><div class="pv-line"></div><div class="pv-line"></div>`;
  }
  const p = P[group.profile];
  const filter = `<div class="pv-filter">${sized(inputSource, p.sizes.filter.control).replace(/<div data-s1-component="input"/, '<div data-s1-component="input" aria-label="검색어"').replace(/\s(id|for|aria-labelledby|aria-describedby)="[^"]*"/g, "")}${sized(buttonSource, p.sizes.filter.button).replace(/(data-s1-part="label">)[^<]*/, "$1조회")}</div>`;
  const rows = Array.from({ length: 8 }, (_, n) => `<tr data-s1-part="row"><td data-s1-part="cell">항목 ${n + 1}</td><td data-s1-part="cell">정상</td><td data-s1-part="cell">2026-10-${String(n + 1).padStart(2, "0")}</td></tr>`).join("");
  const table = `<div data-s1-component="table" data-size="${p.tableRow.list}"><table data-s1-part="table"><thead><tr><th data-s1-part="header-cell" scope="col">항목</th><th data-s1-part="header-cell" scope="col">상태</th><th data-s1-part="header-cell" scope="col">날짜</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  return `<h1 class="pv-title">화면 제목</h1>${filter}${table}`;
}

/* ── 틀 하나의 몸통 — 시작 파일과 미리보기가 같은 마크업을 쓴다 ── */
function frameBody(group, f, content, prefix) {
  if (group.profile === "mobile") {
    return `<div class="s1-frame s1-frame--mobile">
  ${header}
  <main class="s1-frame__main">
    ${content}
  </main>${f.frame === "header-tabbar" ? `\n  ${tabbar}` : ""}
</div>`;
  }
  const p = P[group.profile];
  const top = f.frame === "plain" ? "" : `\n  ${gnb(p.gnb)}`;
  const side = f.frame === "gnb-lnb" ? `\n    ${lnb(p.lnb, prefix)}` : "";
  return `<div class="s1-frame${group.kind === "doc" ? " s1-frame--doc" : ""}">${top}
  <div class="s1-frame__body">${side}
    <main class="s1-frame__main">
      ${content}
    </main>
  </div>
</div>`;
}

/* 틀 배치만 정하는 CSS — 색·간격은 토큰만 */
const FRAME_CSS = `.s1-frame { display: flex; flex-direction: column; min-height: 100vh; background: var(--color-bg-level-0); color: var(--color-text-body-primary); }
.s1-frame__body { display: flex; flex: 1; min-height: 0; }
.s1-frame__body > [data-s1-component="lnb"] { flex: none; }
.s1-frame__main { flex: 1; min-width: 0; padding: var(--spacing-32) var(--spacing-40); }
.s1-frame--doc .s1-frame__main { max-width: 1000px; margin: 0 auto; }
.s1-frame--mobile .s1-frame__main { padding: var(--spacing-16) var(--spacing-20); }
.s1-tabbar { position: sticky; bottom: 0; display: grid; grid-template-columns: repeat(4, 1fr); background: var(--color-navigation-bg); border-top: 1px solid var(--color-line-default); }`;

const bodyAttr = (group) => group.profile === "mobile" ? 'data-s1-break="mobile"' : `data-s1-density="${P[group.profile].density}"`;
const sizeLine = (group, f) => {
  if (group.profile === "mobile") return f.frame === "header-tabbar" ? "뒤로 가기·제목 줄 + 아래 4칸 메뉴" : "뒤로 가기·제목 줄";
  const p = P[group.profile];
  const parts = [];
  if (f.frame !== "plain") parts.push(`GNB 높이 ${GNB_HEIGHT[p.gnb]}`);
  if (f.frame === "gnb-lnb") parts.push(`LNB 폭 ${LNB_WIDTH[p.lnb]}`);
  return parts.length ? parts.join(" · ") : "메뉴 없이 본문만";
};
const fileName = (group, f) => `${group.key}.${f.frame}.html`;
const pasteLine = (group, f) => `[S1 화면 틀] ${group.label} · ${f.label} — 온보딩 답: ${group.answer} E${f.e} (profile: ${group.profile}, frame: ${f.frame}). ai/frames/${fileName(group, f)} 틀로 시작해 주세요.`;

/* ── 1. 시작 파일 ── */
await mkdir(path.join(ROOT, "ai", "frames"), { recursive: true });
const needsJs = (f) => f.frame === "gnb" || f.frame === "gnb-lnb";
for (const group of GROUPS) {
  for (const f of group.frames) {
    /* 모바일은 위 제목 줄이 화면 제목을 들고 있어 본문 제목을 따로 두지 않는다 */
    const placeholder = `${group.profile === "mobile" ? "" : '<h1 class="s1-frame__title">화면 제목</h1>\n      '}<div class="s1-frame__slot">이 자리에 화면 내용을 넣습니다</div>`;
    const html = `<!doctype html>
<!-- S1 화면 틀 · ${esc(group.label)} · ${esc(f.label)} (${esc(sizeLine(group, f))})
     자동 생성물 — ai/scripts/build-frames.mjs. 프로젝트로 복사한 뒤 ../../ui-library 경로를 가이드 폴더(.s1-guide/ui-library)로 바꿉니다.
     GNB·LNB 크기는 바꾸지 않습니다. 메뉴 이름·개수·로고만 서비스에 맞게 고칩니다. -->
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>화면 제목</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <link rel="stylesheet" href="../../ui-library/dist/assets/css/tokens.css">
  <link rel="stylesheet" href="../../ui-library/dist/s1-ui.css">
  <style>
    body { margin: 0; font-family: Pretendard, -apple-system, "Malgun Gothic", sans-serif; }
    ${FRAME_CSS.split("\n").join("\n    ")}
    .s1-frame__title { margin: 0 0 var(--spacing-24); font-size: var(--font-size-24); color: var(--color-text-title-primary); }
    .s1-frame__slot { padding: var(--spacing-64) var(--spacing-24); border: 1px dashed var(--color-line-default); border-radius: var(--radius-8); color: var(--color-text-body-secondary); text-align: center; }
  </style>
</head>
<body ${bodyAttr(group)}>
${frameBody(group, f, placeholder, "lnb")}${needsJs(f) ? `
<script type="module">
  import { autoInit } from "../../ui-library/dist/s1-ui.auto.js";
  autoInit();
</script>` : ""}
</body>
</html>
`;
    await writeFile(path.join(ROOT, "ai", "frames", fileName(group, f)), html, "utf8");
  }
}

/* ── 2. 고르기 페이지 — 1) 무엇을 → 2) 누가(PC 웹만) → 3) 메뉴 틀, 차례로 하나씩 ── */
const { inlineCss } = await import("./profile-docs.mjs");
const groupOf = (key) => GROUPS.find((g) => g.key === key);
let seq = 0;
/* 질문 답(1·2번)은 글자 선택지, 마지막 틀(3번)만 그림 카드 */
const option = ({ value, label, sub }) => `<div class="card card--text" role="button" tabindex="0" data-value="${esc(value)}" aria-pressed="false" aria-label="${esc(label)}">
      <span class="card-label typo-title-16b">${esc(label)}</span>
      <span class="card-size typo-body-12r">${esc(sub)}</span>
    </div>`;
function card({ value, label, sub, group, f, attrs = "" }) {
  seq += 1;
  const mobile = group.profile === "mobile";
  return `<div class="card${mobile ? " card--mobile" : ""}" role="button" tabindex="0" data-value="${esc(value)}" ${attrs} aria-pressed="false" aria-label="${esc(label)}">
      <div class="mini${mobile ? " mini--mobile" : ""}" aria-hidden="true"><div class="mini-inner" inert ${bodyAttr(group)}>${frameBody(group, f, sampleContent(group), `m${seq}`)}</div></div>
      <span class="card-label typo-title-16b">${esc(label)}</span>
      <span class="card-size typo-body-12r">${esc(sub)}</span>
    </div>`;
}
const KIND = [
  { value: "doc", label: "문서", sub: "보고서·안내·설명처럼 읽는 화면" },
  { value: "pc", label: "PC 웹 화면", sub: "실제 서비스처럼 동작하는 화면" },
  { value: "mobile", label: "모바일 화면", sub: "휴대폰에서 쓰는 화면" }
];
const step1 = KIND.map(option);
const step2 = ["pr", "user", "admin", "admin-compact"].map((key) => {
  const g = groupOf(key);
  return option({ value: key, label: g.label, sub: g.hint });
});
const step3 = [];
const choices = {};
for (const group of GROUPS) {
  for (const f of group.frames) {
    const id = `${group.key}.${f.frame}`;
    choices[id] = { title: `${group.label} · ${f.label}`, size: sizeLine(group, f), file: fileName(group, f), paste: pasteLine(group, f) };
    step3.push(card({ value: id, label: f.label, sub: sizeLine(group, f), group, f, attrs: `data-group="${esc(group.key)}"` }));
  }
}
const step = (n, title, hint, items) => `<section class="step" data-step="${n}"${n > 1 ? " hidden" : ""}>
  <div class="step-head">
    <span class="step-no typo-title-14b">${n}</span>
    <h2 class="typo-title-18b">${esc(title)}</h2>
    <span class="step-answer typo-body-16m"></span>
    <button type="button" data-s1-component="text-button" data-variant="primary" class="step-change" hidden><span data-s1-part="label">바꾸기</span></button>
  </div>
  <p class="step-hint typo-body-14r">${esc(hint)}</p>
  <div class="cards">${items.join("\n    ")}</div>
</section>`;

const picker = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>S1 화면 틀 고르기</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<style>${await inlineCss(DIST)}</style>
<style>
  body { margin: 0; padding: var(--spacing-40) var(--spacing-16) 0; background: var(--color-bg-level-1); color: var(--color-text-body-primary); font-family: Pretendard, -apple-system, "Malgun Gothic", sans-serif; }
  .wrap { max-width: 1280px; margin: 0 auto; min-height: 100vh; }
  h1, h2 { margin: 0; color: var(--color-text-title-primary); }
  .sub { margin: var(--spacing-8) 0 var(--spacing-32); color: var(--color-text-body-secondary); }
  .step { margin-bottom: var(--spacing-16); padding: var(--spacing-24); border: 1px solid var(--color-line-default); border-radius: var(--radius-12); background: var(--color-bg-level-0); }
  .step-head { display: flex; align-items: center; gap: var(--spacing-12); flex-wrap: wrap; }
  .step-no { display: inline-flex; align-items: center; justify-content: center; width: var(--sizing-28); height: var(--sizing-28); border-radius: var(--radius-full); background: var(--color-line-blue); color: var(--color-base-white); }
  .step-answer { color: var(--color-line-blue); }
  .step-answer:not(:empty)::before { content: "→ "; color: var(--color-text-body-secondary); }
  .step-hint { margin: var(--spacing-8) 0 var(--spacing-20); color: var(--color-text-body-secondary); }
  .step[data-done] .step-hint, .step[data-done] .cards { display: none; }
  .step[data-done] .step-no { background: var(--color-text-body-secondary); }
  .cards { display: flex; flex-wrap: wrap; align-items: flex-start; gap: var(--spacing-20); }
  .card { display: flex; flex-direction: column; gap: var(--spacing-4); flex: 1 1 280px; max-width: 600px; box-sizing: border-box; padding: var(--spacing-12); border: 2px solid var(--color-line-default); border-radius: var(--radius-12); background: var(--color-bg-level-0); color: inherit; text-align: left; cursor: pointer; }
  .card:focus-visible { outline: 2px solid var(--color-line-blue); outline-offset: 2px; }
  .card:hover { border-color: var(--color-line-strong); }
  .card[aria-pressed="true"] { border-color: var(--color-line-blue); }
  .card[hidden], .step-change[hidden] { display: none; }
  .card-label { margin-top: var(--spacing-8); color: var(--color-text-title-primary); }
  .card-size { color: var(--color-text-body-secondary); }
  .card--mobile { flex: 0 1 260px; }
  .card--text { flex: 0 1 220px; padding: var(--spacing-16); }
  .card--text .card-label { margin-top: 0; }
  .mini { position: relative; display: block; width: 100%; aspect-ratio: 1280 / 800; overflow: hidden; border: 1px solid var(--color-line-default); border-radius: var(--radius-6); background: var(--color-bg-level-0); }
  .mini--mobile { aspect-ratio: 390 / 760; }
  .mini-inner .s1-frame__main { background: var(--color-bg-level-2); }
  .mini-inner [data-s1-component="gnb"] { border-bottom: 1px solid var(--color-line-strong); }
  .mini-inner [data-s1-component="lnb"] { border-right: 1px solid var(--color-line-strong); }
  .mini-inner { position: absolute; top: 0; left: 0; display: block; width: 1280px; height: 800px; transform: scale(var(--k, .25)); transform-origin: 0 0; pointer-events: none; }
  .mini--mobile .mini-inner { width: 390px; height: 760px; }
  .mini-inner .s1-frame { min-height: 100%; height: 100%; }
  .mini--mobile .s1-tabbar { position: absolute; left: 0; right: 0; }
  ${FRAME_CSS.replace("min-height: 100vh; ", "")}
  .pv-title { margin: 0 0 var(--spacing-24); font-size: var(--font-size-24); color: var(--color-text-title-primary); }
  .pv-filter { display: flex; gap: var(--spacing-8); margin-bottom: var(--spacing-16); }
  .pv-filter [data-s1-component="input"] { width: 240px; }
  .pv-text { margin: 0 0 var(--spacing-16); font-size: var(--font-size-16); line-height: 1.7; }
  .pv-block { height: 200px; margin: var(--spacing-24) 0; border-radius: var(--radius-8); background: var(--color-bg-level-0); }
  .pv-short { height: 140px; margin-top: 0; }
  .pv-line { height: var(--sizing-48); margin-bottom: var(--spacing-12); border-radius: var(--radius-8); background: var(--color-bg-level-0); }
  .done { padding: var(--spacing-24); border: 2px solid var(--color-line-blue); border-radius: var(--radius-12); background: var(--color-bg-level-0); margin-bottom: var(--spacing-40); }
  .done-title { margin: 0; color: var(--color-text-title-primary); }
  .done-size { margin: var(--spacing-4) 0 0; color: var(--color-text-body-secondary); }
  .done-preview { max-width: 960px; margin-top: var(--spacing-16); }
  .done-preview .mini--mobile { max-width: 300px; }
  .done-paste { margin: var(--spacing-12) 0 var(--spacing-16); padding: var(--spacing-12) var(--spacing-16); border-radius: var(--radius-8); background: var(--color-bg-level-1); color: var(--color-text-body-primary); overflow-wrap: anywhere; }
  .done-actions { display: flex; flex-wrap: wrap; gap: var(--spacing-8); }
</style></head>
<body data-s1-density="wide"><div class="wrap">
<h1 class="typo-title-24b">화면 틀 고르기</h1>
<p class="sub typo-body-14r">세 번만 고르면 됩니다. 마지막에 나오는 한 줄을 AI 채팅창에 붙여 넣으면 온보딩 답과 시작 틀이 한 번에 정해집니다. 배포본 ${esc(manifest.version)} 실제 부품으로 그렸습니다.</p>
${step(1, "무엇을 만드나요?", "가장 가까운 것을 누르세요.", step1)}
${step(2, "누가 쓰는 화면인가요?", "쓰는 사람에 따라 글자·칸 크기가 달라집니다.", step2)}
${step(3, "메뉴 틀은요?", "고른 화면에 맞는 틀만 보여 드려요. 그림을 보고 고르세요.", step3)}
<section class="done" id="done" hidden aria-live="polite">
  <h2 class="done-title typo-title-18b" id="pick-title"></h2>
  <p class="done-size typo-body-14r" id="pick-size"></p>
  <div class="done-preview" id="pick-preview"></div>
  <p class="done-paste typo-body-14r" id="pick-paste"></p>
  <div class="done-actions">
    <button type="button" data-s1-component="button" data-variant="primary" data-size="md" id="copy"><span data-s1-part="label">AI에게 줄 말 복사</span></button>
    <a data-s1-component="button" data-variant="secondary" data-size="md" id="open" href="#"><span data-s1-part="label">빈 틀 열어 보기</span></a>
  </div>
</section>
</div>
<script>
  const CHOICES = ${JSON.stringify(choices)};
  const fit = () => document.querySelectorAll(".mini").forEach((m) => { if (m.clientWidth) m.style.setProperty("--k", m.clientWidth / m.firstElementChild.offsetWidth); });
  addEventListener("resize", fit);
  const steps = [...document.querySelectorAll(".step")];
  const done = document.getElementById("done");
  const copy = document.getElementById("copy");
  const answers = {};
  const STEP3_GROUP = () => answers[1] === "pc" ? answers[2] : answers[1];

  function show(n) {
    steps.forEach((s) => {
      const k = Number(s.dataset.step);
      const skipped = k === 2 && answers[1] && answers[1] !== "pc";
      s.hidden = k > n || skipped;
      if (k < n) s.dataset.done = ""; else delete s.dataset.done;
      s.querySelector(".step-change").hidden = !(k < n);
      if (k >= n) s.querySelector(".step-answer").textContent = "";
    });
    if (n === 3) document.querySelectorAll('[data-step="3"] .card').forEach((c) => { c.hidden = c.dataset.group !== STEP3_GROUP(); });
    steps.find((s) => Number(s.dataset.step) === n)?.querySelectorAll(".card").forEach((c) => c.setAttribute("aria-pressed", "false"));
    if (n <= 3) done.hidden = true;
    let no = 0;
    steps.forEach((s) => { if (!s.hidden) s.querySelector(".step-no").textContent = ++no; });
    fit();
    const current = n <= 3 ? steps[n - 1] : done;
    current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function choose(card) {
    const section = card.closest(".step");
    const n = Number(section.dataset.step);
    answers[n] = card.dataset.value;
    section.querySelectorAll(".card").forEach((c) => c.setAttribute("aria-pressed", String(c === card)));
    section.querySelector(".step-answer").textContent = card.querySelector(".card-label").textContent;
    if (n === 1) return show(answers[1] === "pc" ? 2 : 3);
    if (n === 2) return show(3);
    const picked = CHOICES[answers[3]];
    document.getElementById("pick-title").textContent = picked.title;
    document.getElementById("pick-size").textContent = picked.size;
    document.getElementById("pick-paste").textContent = picked.paste;
    document.getElementById("open").href = "../frames/" + picked.file;
    document.getElementById("pick-preview").replaceChildren(card.querySelector(".mini").cloneNode(true));
    copy.querySelector("[data-s1-part=label]").textContent = "AI에게 줄 말 복사";
    show(4);
    done.hidden = false;
    fit();
    done.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => choose(card));
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(card); } });
  });
  steps.forEach((s) => s.querySelector(".step-change").addEventListener("click", () => show(Number(s.dataset.step))));
  copy.addEventListener("click", async () => {
    const text = document.getElementById("pick-paste").textContent;
    try { await navigator.clipboard.writeText(text); }
    catch { const t = document.createElement("textarea"); t.value = text; document.body.append(t); t.select(); document.execCommand("copy"); t.remove(); }
    copy.querySelector("[data-s1-part=label]").textContent = "복사했어요";
  });
  fit();
</script>
</body></html>
`;
await writeFile(path.join(ROOT, "ai", "generated", "frame-picker.html"), picker, "utf8");
console.log(`화면 틀 ${Object.keys(choices).length}개 · ai/generated/frame-picker.html · ai/frames/*.html`);
