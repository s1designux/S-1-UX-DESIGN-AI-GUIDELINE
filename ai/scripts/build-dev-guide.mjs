#!/usr/bin/env node
/**
 * build-dev-guide — 개발자에게 주는 "S1 가이드 쓰는 법" 한 장을 만든다.
 * --------------------------------------------------------------------------
 *   node ai/scripts/build-dev-guide.mjs                 → ai/generated/developer-guide.html
 *   node ai/scripts/build-dev-guide.mjs --fragment <파일> → 본문만(공유 페이지 게시용)
 *
 * 이 안내서 자체도 S1 디자인 시스템으로만 짠다 — 배포본 부품(표·입력칸·버튼·뱃지·구분선)과
 * 토큰·글자 스타일만 쓰고, 시스템에 없는 꾸밈(카드 상자·그림자·임의 색·임의 간격)은 넣지 않는다.
 * 만든 뒤 검수기(사용자용 기준)로 스스로 검사한다.
 */
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const DIST = path.join(ROOT, "ui-library", "dist");
const manifest = JSON.parse(await readFile(path.join(DIST, "manifest.json"), "utf8"));
const argv = process.argv.slice(2);
const fragmentAt = argv.indexOf("--fragment");
const fragmentOut = fragmentAt === -1 ? null : path.resolve(process.cwd(), argv[fragmentAt + 1]);
const REPO = "https://github.com/s1designux/S-1-UX-DESIGN-AI-GUIDELINE";
const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ── S1 부품 조각 — 배포본 예제와 같은 마크업 ── */
let seq = 0;
function command(text, label) {
  seq += 1;
  const id = `cmd-${seq}`;
  return `<div class="cmd">
  <div data-s1-component="input" data-size="md" data-break="pc" aria-labelledby="${id}-label">
    <div data-s1-part="field"><input id="${id}" data-s1-part="control" type="text" value="${esc(text)}" readonly></div>
  </div>
  <button type="button" data-s1-component="button" data-variant="secondary" data-size="md" data-copy="${id}"><span data-s1-part="label">복사</span></button>
  <span class="sr" id="${id}-label">${esc(label)}</span>
</div>`;
}
function table(head, rows) {
  return `<div class="scroll"><div data-s1-component="table" data-size="md">
  <table data-s1-part="table">
    <thead><tr>${head.map((h) => `<th data-s1-part="header-cell" scope="col">${h}</th>`).join("")}</tr></thead>
    <tbody>${rows.map((r) => `<tr data-s1-part="row">${r.map((c) => `<td data-s1-part="cell">${c}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>
</div></div>`;
}
const who = (name, tone, solid) => `<span data-s1-component="data-tag" data-shape="chips" data-solid="${solid}" data-tone="${tone}">${name}</span>`;
const DEV = who("개발자", "blue", "on");
const AI = who("AI", "blue", "off");
const DESIGN = "디자이너";
const divider = `<hr data-s1-component="divider" data-axis="x">`;
/* 흐름 한 칸 — 누가 · 무엇을 · 한 줄 설명. 칸 사이 화살표는 S1 아이콘(chevron)이다. */
let flowIndex = 0;
const flowStep = (actor, title, line, designer = false) => {
  flowIndex += 1;
  return `<li class="step${designer ? " designer" : ""}">
        <span class="actor typo-body-12m">${flowIndex} · ${esc(actor)}</span>
        <span class="title typo-title-16b">${esc(title)}</span>
        <span class="typo-body-12r">${esc(line)}</span>
      </li>`;
};

const body = `
<main class="wrap">
  <header class="group">
    <h1 class="title typo-title-32b">S-1 DESIGN GUIDE MD 쓰는 법</h1>
    <p class="sub typo-body-16r">개발자용 안내 · S1 배포본 ${esc(manifest.version)} 기준</p>
    <p class="typo-body-16r">AI 코딩 도구(Claude Code · VS Code Copilot · Cursor 등)로 화면을 만들거나, 이미 만든 화면(POC)에 S1 디자인을 입힐 때 쓰는 가이드입니다. 개발자는 AI에게 말하고, 디자이너에게 확인 요청서를 보내고, 받은 결과를 AI에게 붙여 넣기만 하면 됩니다. 나머지는 AI가 가이드대로 합니다.</p>
  </header>

  ${divider}

  <section class="group-lg">
    <h2 class="title typo-title-24b">처음 한 번 — 설치</h2>
    <div class="group">
      <h3 class="title typo-title-16b">AI 채팅창에 링크를 붙이고 "깔아줘"</h3>
      <p class="typo-body-14r">작업할 프로젝트를 연 AI 채팅창에 아래 글을 그대로 보내면 됩니다. AI가 가이드를 프로젝트 안에 받아 두고, 어떤 AI 도구로 다시 열어도 S1 기준을 따르게 설정한 뒤, 바로 "온보딩을 진행할까요? 디자인 가이드를 제대로 적용하려면 반드시 온보딩이 필요합니다."라고 제안합니다.</p>
      ${command(`${REPO} 깔아줘`, "AI 채팅창에 보낼 글")}
    </div>
    <p class="sub typo-body-12r">이미 있는 프로토타입에 입힐 때 화면 캡처 도구가 없으면, AI가 그때 "화면 캡처 도구를 설치할까요?"라고 제안합니다.</p>
  </section>

  ${divider}

  <section class="group-lg">
    <h2 class="title typo-title-24b">작업 흐름</h2>
    <ol class="flow">
      ${flowStep("개발자", "링크 주고 깔아줘", "처음 한 번")}
      ${flowStep("AI", "설치 · 온보딩 질문", "번호로 답하면 저장")}
      ${flowStep("AI", "짝짓기 · 요청서", "이미 있는 프로토타입일 때")}
      ${flowStep("디자이너", "요청서에서 고르기", "바꾸기 · 그대로 · 새 부품", true)}
      ${flowStep("개발자 → AI", "결과 붙여 넣기", "AI가 반영하고 검수 합격까지")}
    </ol>
    <p class="sub typo-body-12r">새 화면과 문서는 디자이너 확인 없이 AI가 바로 만들거나 입히고 검수합니다. 같은 프로젝트의 두 번째 화면부터는 온보딩 질문을 건너뜁니다.</p>
  </section>

  ${divider}

  <section class="group-lg">
    <h2 class="title typo-title-24b">온보딩 질문</h2>
    <p class="typo-body-14r">AI가 한 번에 묶어 묻고, 번호로 답하면 됩니다. 예: A2 B2 C1 D3. 기술(HTML·React 등)은 AI가 프로젝트를 보고 알아냅니다.</p>
    ${table(["질문", "고르는 것", "달라지는 것"], [
      ["A. 무엇을 만드나요?", "1) 문서 작성 · 2) 프로토타입 제작", "문서는 사용자용 화면과 같은 기준으로 씁니다"],
      ["B. 어떻게 작업하나요?", "1) 새 화면 작성 · 2) 이미 있는 화면에 디자인 입히기", "입히기면 아래 \"이미 있는 화면에 입힐 때\"를 따릅니다"],
      ["C. 어떤 매체인가요? (프로토타입만)", "1) PC 웹 · 2) 모바일", "모바일은 손가락 기준 높이 48 하나"],
      ["D. 누가 쓰는 화면인가요? (프로토타입 · PC 웹만)", "1) PR용 · 2) 사용자용 · 3) 관리자용 · 기본 · 4) 관리자용 · 작게", "부품 기본 높이 44 · 44 · 34 · 28"]
    ])}
  </section>

  ${divider}

  <section class="group-lg">
    <h2 class="title typo-title-24b">이미 있는 화면에 입힐 때</h2>
    ${table(["무엇", "AI가 하는 일"], [
      ["문서", "구조와 내용은 그대로 두고, S1 토큰으로 색 · 글자 · 간격만 입힙니다"],
      ["프로토타입", "화면을 고치기 전에 디자인 확인 요청서를 만들어 디자이너에게 보내고, 답을 받은 뒤 바꿉니다"]
    ])}
    <div class="group">
      <h3 class="title typo-title-16b">디자인 확인 요청서가 왜 필요한가요?</h3>
      <p class="typo-body-14r">화면 속 버튼 · 입력칸이 S1의 어떤 부품에 해당하는지는 디자인 기준을 아는 디자이너가 정해야 정확합니다. AI가 짝지은 결과를 디자이너가 한 번 확인하면, 엉뚱한 부품으로 바뀌거나 S1에 없는 부품을 지어내는 일을 막을 수 있습니다.</p>
    </div>
  </section>

  ${divider}

  <section class="group-lg">
    <h2 class="title typo-title-24b">디자이너 결과의 뜻</h2>
    <p class="typo-body-14r">결과를 붙여 넣으면 AI가 이대로 처리합니다. 개발자는 결과 글을 붙여 넣기만 하면 됩니다.</p>
    ${table(["결과", "뜻", "AI가 하는 일"], [
      ["제안대로 바꾸기", "제안한 S1 부품으로", "그 부품으로 바꿈"],
      ["다른 후보로 바꾸기", "요청서의 다른 후보로", "고른 후보로 바꿈"],
      ["그대로 두기", "바꾸지 않음", "그대로 두고 S1 색·글자만 맞춤"],
      ["새 부품으로 만들기", "디자인 시스템에 새로 만들 부품", "그대로 두고 디자이너 요청 목록에 올림"]
    ])}
  </section>

  ${divider}

  <section class="group-lg">
    <h2 class="title typo-title-24b">검수</h2>
    <div class="group">
      <p class="typo-body-14r">AI가 스스로 돌리지만, 직접 확인하려면 아래 명령을 씁니다. 화면 종류는 저장된 답(s1.profile.json)에서 읽습니다.</p>
      ${command("node ../S-1-UX-DESIGN-AI-GUIDELINE/ai/check/s1-check.mjs .", "검수 명령")}
    </div>
    ${table(["검수 결과", "뜻"], [
      ["합격", "S1 기준을 모두 지켰습니다."],
      ["불합격", "디자인 시스템에 없는 색·크기·간격을 쓰거나, 부품을 직접 만든 자리가 있습니다. AI가 고칩니다."],
      ["판정 안 함", "화면 종류가 정해지지 않았습니다. 온보딩부터 합니다."]
    ])}
  </section>

  ${divider}

  <section class="group">
    <h2 class="title typo-title-24b">막히면</h2>
    <p class="typo-body-14r">AI는 가이드에 없는 값이나 부품을 지어내지 않고 멈춰서 묻습니다. 그때는 디자이너에게 물어 주세요. 디자인 시스템에 없는 부품이 필요하면 확인 요청서의 "새 부품으로 만들기"로 모입니다.</p>
    <p class="sub typo-body-12r">가이드 저장소 ${esc(REPO)}</p>
  </section>
</main>`;

const chevron = (await readFile(path.join(DIST, "assets", "icons", "chevron.svg"))).toString("base64");
const pageCss = `
  /* 이 안내서의 배치 — 색·간격·글자는 S1 토큰과 글자 스타일만 쓴다. 묶음 안 8 · 한 줄 안 12 · 묶음 사이 24 */
  body { margin:0; background:var(--color-bg-level-0); color:var(--color-text-body-primary); font-family:"Pretendard", sans-serif; }
  .wrap { max-width:960px; margin:0 auto; padding-inline:var(--spacing-24); padding-block:var(--spacing-48) var(--spacing-96); display:flex; flex-direction:column; gap:var(--spacing-48); }
  h1, h2, h3, p { margin:0; }
  .title { color:var(--color-text-title-primary); }
  .sub { color:var(--color-text-body-tertiary); }
  .group { display:flex; flex-direction:column; gap:var(--spacing-8); min-width:0; }
  .group-lg { display:flex; flex-direction:column; gap:var(--spacing-24); min-width:0; }
  .cmd { display:flex; gap:var(--spacing-12); align-items:center; min-width:0; }
  .cmd [data-s1-component="input"] { flex:1 1 auto; width:auto; min-width:0; }
  .scroll { overflow-x:auto; }
  .flow { list-style:none; margin:0; padding:0; display:grid; grid-template-columns:repeat(5, minmax(0, 1fr)); gap:var(--spacing-24); }
  .step { position:relative; min-width:0; display:flex; flex-direction:column; gap:var(--spacing-4); padding:var(--spacing-16); border:var(--border-width-default) solid var(--color-line-default); border-radius:var(--radius-8); }
  .step.designer { border-color:var(--color-line-blue); }
  .step .actor { color:var(--color-text-body-tertiary); }
  .step.designer .actor { color:var(--color-text-state-accent); }
  .step + .step::before { content:""; position:absolute; left:calc(-1 * var(--spacing-24) / 2 - var(--sizing-16) / 2); top:50%; width:var(--sizing-16); height:var(--sizing-16); margin-top:calc(var(--sizing-16) / -2); background-color:var(--color-icon-gray); -webkit-mask:url("data:image/svg+xml;base64,${chevron}") center / contain no-repeat; mask:url("data:image/svg+xml;base64,${chevron}") center / contain no-repeat; } /* 화살표는 S1 아이콘 chevron */
  @media (max-width:760px) { .flow { grid-template-columns:minmax(0, 1fr); } .step + .step::before { display:none; } }
  .sr { position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%); white-space:nowrap; }
`;
/* 입력칸·표는 배포본 런타임이 필요하다 — 파일 하나로 열리도록 두 부품의 런타임만 그대로 넣는다. */
const runtimeParts = [];
for (const id of ["input", "table"]) {
  const code = (await readFile(path.join(DIST, "components", `${id}.js`), "utf8")).replace(/^export /gm, "");
  runtimeParts.push(`{\n${code}\nfor (const el of document.querySelectorAll('[data-s1-component="${id}"]')) init(el);\n}`);
}
const runtime = `function autoInit() {\n${runtimeParts.join("\n")}\n}\nautoInit();`;

const script = `
document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) return;
  const field = document.getElementById(button.dataset.copy);
  const label = button.querySelector("[data-s1-part=label]");
  try { await navigator.clipboard.writeText(field.value); label.textContent = "복사함"; }
  catch { field.select(); label.textContent = "선택함"; }
  setTimeout(() => { label.textContent = "복사"; }, 1600);
});`;

let css = (await readFile(path.join(DIST, "assets/css/tokens.css"), "utf8"))
  + "\n" + (await readFile(path.join(DIST, "assets/css/typography.css"), "utf8"))
  + "\n" + (await readFile(path.join(DIST, "s1-ui.css"), "utf8"));
for (const icon of await readdir(path.join(DIST, "assets/icons"))) {
  const svg = await readFile(path.join(DIST, "assets/icons", icon));
  css = css.split(`url("./assets/icons/${icon}")`).join(`url("data:image/svg+xml;base64,${svg.toString("base64")}")`);
}
css = css.replace(/@import[^;]+;/g, "").replace(/<\/style/gi, "<\\/style");

const title = "S-1 DESIGN GUIDE MD 쓰는 법";
const font = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">`;
const full = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
${font}
<style>${css}</style>
<style>${pageCss}</style>
</head>
<body data-s1-density="wide">${body}
<script>${runtime}</script>
<script>${script}</script>
</body></html>
`;
await writeFile(path.join(ROOT, "ai", "generated", "developer-guide.html"), full, "utf8");
console.log("개발자 안내: ai/generated/developer-guide.html");

if (fragmentOut) {
  /* 공유 페이지 게시용 — 문서 뼈대 없이 본문만. 글꼴은 허용된 곳(Google Fonts)의 같은 계열로 대신한다. */
  const fragment = `<title>${title}</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap">
<style>${css}</style>
<style>${pageCss.replace('font-family:"Pretendard", sans-serif;', 'font-family:"Pretendard", "Noto Sans KR", sans-serif;')}</style>
<div data-s1-density="wide">${body}</div>
<script>${runtime}</script>
<script>${script}</script>
`;
  await writeFile(fragmentOut, fragment, "utf8");
  console.log(`게시용 본문: ${path.relative(process.cwd(), fragmentOut)}`);
}
