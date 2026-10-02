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

const body = `
<main class="wrap">
  <header class="group">
    <h1 class="title typo-title-32b">S1 디자인 가이드 쓰는 법</h1>
    <p class="sub typo-body-16r">개발자용 안내 · S1 배포본 ${esc(manifest.version)} 기준</p>
    <p class="typo-body-16r">AI 코딩 도구(Claude Code · VS Code Copilot · Cursor 등)로 화면을 만들거나, 이미 만든 화면(POC)에 S1 디자인을 입힐 때 쓰는 가이드입니다. 개발자는 AI에게 말하고, 디자이너에게 확인 요청서를 보내고, 받은 결과를 AI에게 붙여 넣기만 하면 됩니다. 나머지는 AI가 가이드대로 합니다.</p>
  </header>

  ${divider}

  <section class="group-lg">
    <h2 class="title typo-title-24b">처음 한 번 — 준비</h2>
    <div class="group">
      <h3 class="title typo-title-16b">1. 가이드 받기</h3>
      <p class="typo-body-14r">작업할 프로젝트 옆 폴더에 받아 둡니다.</p>
      ${command(`git clone ${REPO}.git`, "가이드 받기 명령")}
    </div>
    <div class="group">
      <h3 class="title typo-title-16b">2. 내 프로젝트에 AI 안내 깔기</h3>
      <p class="typo-body-14r">어떤 AI 도구로 열어도 S1 온보딩부터 하도록, 도구마다 처음 읽는 안내 파일에 S1 칸을 넣습니다. 이미 있는 안내는 지우지 않습니다. AI에게 "S1 가이드 안내를 내 프로젝트에 깔아줘"라고 말해도 됩니다.</p>
      ${command("node ../S-1-UX-DESIGN-AI-GUIDELINE/ai/scripts/install-entry.mjs .", "안내 깔기 명령")}
    </div>
    <div class="group">
      <h3 class="title typo-title-16b">3. 화면 캡처 도구 (이미 만든 화면에 입힐 때만)</h3>
      <p class="typo-body-14r">디자이너가 화면을 보고 판단할 수 있게, AI가 부품마다 화면을 찍어 요청서에 넣습니다.</p>
      ${command("pip install playwright && python3 -m playwright install chromium", "캡처 도구 설치 명령")}
    </div>
  </section>

  ${divider}

  <section class="group-lg">
    <h2 class="title typo-title-24b">작업 흐름</h2>
    <p class="typo-body-14r">같은 프로젝트의 두 번째 화면부터는 ③·④ 를 건너뜁니다. 새 화면을 만들 때는 ⑤~⑦ 없이 바로 만들고 ⑧ 검수로 갑니다.</p>
    ${table(["단계", "누가", "무엇을", "남는 것"], [
      ["①", DEV, "처음 한 번 AI 안내 깔기", "도구별 안내 파일"],
      ["②", DEV, "AI에게 \"이 화면에 S1 입혀줘\" 또는 \"S1으로 만들어줘\"", "—"],
      ["③", AI, "온보딩 질문 — 새로 만들기·입히기 / PC·모바일 / 화면 종류 / 기술", "—"],
      ["④", AI, "고른 화면 종류의 크기표를 보여 주고 확인받은 뒤 답을 저장", "s1.profile.json"],
      ["⑤", AI, "POC 부품을 하는 일로 S1 부품과 짝짓고, 화면을 찍어 디자인 확인 요청서를 만든 뒤 멈춤", "s1-mapping.json · s1-captures/ · 디자인확인요청서.html"],
      ["⑥", `${DEV} → ${DESIGN}`, "요청서 파일을 디자이너에게 보냄. 디자이너는 항목마다 고르고 결과 복사", "결과 글(JSON)"],
      ["⑦", DEV, "디자이너가 보낸 결과 글을 AI에게 붙여 넣음 — AI가 결과대로 부품을 바꿈", "s1-review-result.json"],
      ["⑧", AI, "검수기를 돌려 합격할 때까지 고침. 합격해야 완료라고 말함", "판정표"]
    ])}
  </section>

  ${divider}

  <section class="group-lg">
    <h2 class="title typo-title-24b">화면 종류 고르기</h2>
    <p class="typo-body-14r">③ 에서 AI가 묻습니다. 고른 종류에 따라 부품 크기가 하나로 정해지고, 한 화면에서 섞지 않습니다.</p>
    ${table(["매체", "화면 종류", "언제", "기본 높이"], [
      ["PC 웹", "PR용", "회사·서비스를 알리는 홍보·소개 화면", "44"],
      ["PC 웹", "사용자용", "일반 사용자가 쓰는 화면", "44"],
      ["PC 웹", "관리자용 · 기본", "관리자가 평소에 쓰는 화면", "34"],
      ["PC 웹", "관리자용 · 작게", "정보를 더 많이 담아야 하는 관리자 화면", "28"],
      ["모바일", "모바일", "앱 · 모바일 웹", "48"]
    ])}
  </section>

  ${divider}

  <section class="group-lg">
    <h2 class="title typo-title-24b">디자이너 결과의 뜻</h2>
    <p class="typo-body-14r">⑦ 에서 AI가 이대로 처리합니다. 개발자는 결과 글을 붙여 넣기만 하면 됩니다.</p>
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

const title = "S1 가이드 개발자 안내";
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
