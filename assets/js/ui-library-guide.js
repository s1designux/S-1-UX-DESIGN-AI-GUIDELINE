import * as S1UI from "../../ui-library/dist/s1-ui.js";

const componentConfig = {
  input: {
    title: "Input",
    description: "한 줄 정보를 입력받는 기본 컴포넌트입니다. 라벨과 안내 메시지는 필요에 따라 함께 사용합니다.",
    approvedScope: { pc: "Base Input · 상태 7종 · PC 3크기 · Mobile 1크기 · remove 동작 · Password Field(눈 액션) · Search Input(3상태, 데스크탑용 XSM 대표)", mobile: "Base Input · 상태 7종 · remove 동작 · Password Field(눈 액션) · Search Input(3상태)" },
    runtime: S1UI.input
  },
  button: {
    title: "Button",
    description: "사용자가 저장·확인·취소처럼 명확한 행동을 실행할 때 사용하는 컴포넌트입니다.",
    approvedScope: { pc: "Primary · Secondary · Blue Line · PC 3크기 · Mobile 1크기", mobile: "Primary · Secondary · Blue Line · 상태 4종" },
    runtime: S1UI.button
  },
  "assist-button": {
    title: "Assist Button",
    description: "본문 옆이나 목록 행 안처럼 좁은 자리에서 쓰는 보조 동작 버튼입니다. 코어 Button과 별도 컴포넌트이며 크기는 h32 하나뿐입니다.",
    approvedScope: "상태 4종(Default·Hover·Pressed·Disabled) · 크기 축 없음(h32 고정) · variant 없음 · JavaScript 불필요",
    runtime: S1UI.assistButton
  },
  "text-button": {
    title: "Text Button",
    description: "배경·테두리 없는 글자형 링크 버튼입니다. Primary·Secondary 두 색 중 하나를 고르고, Hover·Pressed는 밑줄로만 표시됩니다.",
    approvedScope: "Primary · Secondary × 상태 4종 · 크기 축 없음(글자 크기만큼만 차지) · JavaScript 불필요",
    runtime: S1UI.textButton
  },
  checkbox: {
    title: "Checkbox",
    description: "여러 항목을 각각 켜고 끌 때 사용합니다. 라벨은 선택 사항이며, 붙이면 라벨을 눌러도 선택됩니다.",
    approvedScope: "상태 5종 · 라벨 유무 · 크기 축 없음(18px 고정) · JavaScript 불필요",
    runtime: S1UI.checkbox
  },
  toggle: {
    title: "Toggle",
    description: "설정 하나를 즉시 켜고 끌 때 사용합니다. 누르는 순간 바로 반영되며 별도 확인 단계가 없습니다.",
    approvedScope: "켜짐·꺼짐 × 기본·비활성 4가지 · 크기 축 없음(40×20 고정) · 라벨은 화면낭독기용 이름으로",
    runtime: S1UI.toggle
  },
  chip: {
    title: "Chip",
    description: "태그나 조건을 눌러서 고르는 컴포넌트입니다. Line은 외곽선, Solid는 채운 배경 형태입니다.",
    approvedScope: { pc: "Line · Solid × 상태 4종 · PC 2크기(SM 28 · MD 34) · Mobile 1크기(SM 30) · 라벨 전용", mobile: "Line · Solid × 상태 4종 · 라벨 전용" },
    runtime: S1UI.chip
  },
  select: {
    title: "Select Box",
    description: "정해진 보기 중 하나를 고를 때 씁니다. 트리거를 누르면 목록(Dropdown)이 열리고, 고르면 닫히면서 값이 남습니다.",
    approvedScope: { pc: "상태 5종 · PC 3크기(XXSM 28 · XSM 34 · MD 44) · Mobile 1크기(MD 48) · 목록은 Dropdown 배포본을 조립", mobile: "상태 5종 · 목록은 Dropdown 배포본을 조립" },
    runtime: S1UI.select
  },
  dropdown: {
    title: "Dropdown",
    description: "Select·Filter Chip이 열었을 때 나오는 목록입니다. 글자 유형과 체크박스 유형이 있고, 체크박스 유형은 승인된 Checkbox 배포본을 그대로 조립합니다. 목록 폭은 트리거(칩·셀렉트) 폭을 따르되 최소 100px이며, 트리거가 100px보다 좁으면 100px로 열립니다. 폭을 넘는 옵션 글자는 말줄임(…)되고 마우스를 올리면 전체가 보입니다.",
    approvedScope: "유형 3가지(글자 · 체크박스 · 체크박스+전체 선택) · 3크기(XXSM 28 · XSM 34 · MD 44) · 옵션 행 상태 3종 · 패널 자체는 상태 축 없음",
    runtime: S1UI.dropdown
  },
  "filter-chip": {
    title: "Filter Chip",
    description: "목록에서 조건을 골라 거는 칩입니다. 눌러서 열고(Selected), 값을 고르면 닫히면서 칩에 값이 남습니다(Complete). 열린 목록의 폭은 칩 폭과 같고, 칩이 100px보다 좁으면 목록은 100px로 열립니다.",
    approvedScope: { pc: "Line · Solid × 제목 있음/없음 × 상태 5종 · PC 2크기(SM 28 · MD 34) · Mobile 1크기(MD 30) · 목록 크기 SM·MD 모두 XSM(34px)", mobile: "Line · Solid × 제목 있음/없음 × 상태 5종 · 목록은 Dropdown 배포본을 조립" },
    runtime: S1UI.filterChip
  },
  tab: {
    title: "Line Tab",
    description: "같은 화면 안에서 콘텐츠를 바꿔 볼 때 사용합니다. 선택된 탭은 파란 글자와 하단 선으로 표시됩니다.",
    approvedScope: { pc: "기본 · Hover · 선택 · PC 3크기(MD 44 · SM 42 · XSM 40) · 화살표 키 이동", mobile: "기본 · Hover · 선택 · 화살표 키 이동" },
    runtime: S1UI.tab
  },
  pagination: {
    title: "Pagination",
    description: "긴 목록을 페이지 단위로 나눠 이동할 때 사용합니다. 현재 페이지와 양 끝 이동 가능 여부를 바로 보여줍니다.",
    approvedScope: "화살표 4종 · 페이지 번호 · 28px 컨트롤 · 첫·마지막에서 이동 버튼 비활성",
    runtime: S1UI.pagination
  },
  radio: {
    title: "Radio",
    description: "여러 보기 중 하나만 고를 때 사용합니다. 같은 그룹으로 묶으면 하나만 선택되고 화살표 키로 이동합니다.",
    approvedScope: "상태 5종 · 라벨 유무 · 크기 축 없음(18px 고정) · JavaScript 불필요",
    runtime: S1UI.radio
  },
  textarea: {
    title: "Textarea",
    description: "여러 줄 내용을 입력받을 때 사용합니다. 라벨과 안내 문구는 정본에 없어 화면에서 따로 연결합니다.",
    approvedScope: "상태 5종(Default · Focus · Filled · Disabled · Read-only) · 크기 축 없음 · 세로 방향으로만 크기 조절 · JavaScript 불필요",
    runtime: S1UI.textarea
  },
  "multi-toggle": {
    title: "Multi Toggle",
    description: "붙어 있는 칸 중 하나를 골라 화면 내용을 바꿀 때 사용합니다. 한 번에 하나만 선택됩니다.",
    approvedScope: "상태 4종 · 두 크기(MD 44 · SM 34) · 3칸 구성 · 화살표 키 이동 · PC 전용",
    runtime: S1UI.multiToggle
  }
,
  table: {
    title: "Table",
    description: "행과 열로 정리된 데이터를 보여줍니다. 행을 고를 수 있고, 표 아래 페이지 이동과 '몇 개씩 보기'는 승인된 배포본을 조립해 씁니다.",
    approvedScope: "상태 3종(기본 · Hover · 선택) · 3크기(MD 44 · SM 38 · XSM 34) · 선택 컬럼은 Checkbox 배포본 재사용 · 열 정렬 2종(왼쪽·가운데) · 행 정렬(sort) 기능 없음 · PC 전용",
    runtime: S1UI.table
  },
  modal: {
    title: "Modal",
    description: "흐름을 멈추고 결정을 받을 때 쓰는 팝업입니다. 어두운 배경 위에 제목·본문·버튼 세 층으로 뜹니다.",
    approvedScope: {
      pc: "버튼 1개(Single) · 2개(Dual) · 패널 360 · 제목 옆 닫기 있음 · Esc 닫기 · 초점 가둠",
      mobile: "버튼 1개(Single) · 2개(Dual) · 패널 300 · 닫기 없음 · Esc 닫기 · 초점 가둠"
    },
    runtime: S1UI.modal
  },
  "modal-content": {
    title: "Modal Content",
    description: "입력창·표·이미지처럼 큰 콘텐츠가 들어가는 팝업입니다. 확인 계열 Modal과 별도 컴포넌트이며 PC 전용입니다.",
    approvedScope: "MD·LG·XL 3크기 × Single·Dual 버튼 · 제목·닫기·푸터 버튼은 확인 계열과 같은 규칙 · 콘텐츠는 회색 자리표시 박스 · 콘텐츠가 늘면 최대 85vh까지 커진 뒤 본문 안에서 스크롤 · PC 전용 · Esc 닫기 · 초점 가둠",
    runtime: S1UI.modalContent
  },
  "mobile-bottom-nav": {
    title: "Bottom Nav",
    description: "모바일 화면 최하단에 고정하는 내비게이션의 탭 아이템입니다. 배포 부품은 아이템 1칸뿐이며, 4탭 바는 화면이 조립합니다.",
    approvedScope: "탭 아이템 1칸(60×60) · 상태 2종(unselected·selected) · 크기 축 없음 · JavaScript 불필요",
    runtime: S1UI.mobileBottomNav
  },
  "mobile-header": {
    title: "Mobile Header",
    description: "모바일 화면 상단 AppBar입니다. 상태바(StatusBar)는 OS·브라우저가 그리는 영역이라 배포본에 넣지 않습니다.",
    approvedScope: "Type 6종(Home 2 · Standard 4) · AppBar 56px 고정 · 크기 축 없음 · JavaScript 불필요",
    runtime: S1UI.mobileHeader
  },
  gnb: {
    title: "GNB",
    description: "PC 상단 글로벌 내비게이션입니다. 로고 + 메뉴 슬롯 + 유틸리티(언어·계정·전체메뉴) 조립체이며 PC 전용입니다. 메뉴에 aria-controls 로 하위메뉴(GNB Sub Menu) 패널을 연결하면 마우스를 올려 여닫을 수 있습니다(river 결정 2026-09-09).",
    approvedScope: "바 Align×Size 6종(Center-Between·Start × MD·SM·XSM) · 메뉴 Size×State 9종 · viewport 는 full-width 반응형으로 통합 · 하위메뉴를 여닫는 조립 예시(선택적, 강제 의존 아님)",
    runtime: S1UI.gnb
  },
  "gnb-sub-menu-item": {
    title: "GNB Sub Menu Item",
    description: "GNB 하위메뉴 패널 안의 글자 한 줄입니다. 1depth는 카테고리 제목(Bold), 2depth는 항목(Medium)입니다.",
    approvedScope: "4종 — 1depth(카테고리 제목)는 Default 하나, 2depth(항목)는 Default·Hover·Selected · 들여쓰기·배경·아이콘 없음 · 크기 축 없음(hug) · JavaScript 불필요",
    runtime: S1UI.gnbSubMenuItem
  },
  "gnb-sub-menu": {
    title: "GNB Sub Menu",
    description: "GNB 상단바 아래로 펼쳐지는 하위메뉴 패널입니다. Type 3종(regular·compact-1·compact-2)이며, 여닫는 동작은 상단바(GNB)가 갖습니다 — 메뉴에 마우스를 올리면 이 패널이 펼쳐집니다.",
    approvedScope: "Type 3종(regular=제목+항목 4묶음(5·3·4·5) · compact-1=항목 6개 한 줄 · compact-2=항목 5묶음(2·2·2·2·1)) · 묶음 수는 유형별 정본 기본값(넣고 빼서 조절) · PC 전용 · viewport 는 GNB 바와 같은 full-width 반응형 · 이 패널 자체는 JavaScript 가 없다(여닫기는 GNB 가 한다 — 메뉴의 aria-controls 로 이 패널을 가리킨다)",
    runtime: S1UI.gnbSubMenu
  },
  "time-picker": {
    title: "Time Picker",
    description: "시각을 고를 때 사용합니다. PC는 트리거 아래 시·분 목록이 열리고, Mobile은 하단 시트가 올라옵니다. 값은 확인(모바일은 적용)을 눌러야 남습니다.",
    approvedScope: {
      pc: "상태 5종 · PC 3크기(XXSM 28 · XSM 34 · MD 44) · 24시간제 · 오전오후 2유형 · 확인을 눌러야 값이 적용",
      mobile: "상태 5종 · 휠 바텀시트(시간만 · 시작 일시 2유형) · 적용을 눌러야 값이 적용"
    },
    runtime: S1UI.timePicker
  },
  "date-picker": {
    title: "Date Picker",
    description: "날짜(단일·기간)를 고를 때 사용합니다. PC는 트리거 아래 팝오버 캘린더, Mobile은 하단 시트로 열립니다.",
    approvedScope: {
      pc: "상태 5종 · PC 3크기(XXSM 28 · XSM 34 · MD 44) · 단일/기간 선택 · Date·Year·Month 3화면 · 일요일 시작",
      mobile: "바텀시트(캘린더 + 적용 버튼) · 단일/기간 선택"
    },
    runtime: S1UI.datePicker
  }
};

let controlId = 0;

/* 한 컴포넌트 화면 안에서 상자를 여럿으로 가르는 선언(river 결정 HD-A, 2026-09-07).
   example / exampleMobile 은 배포본 manifest 의 htmlContract.breakExamples 키를 가리킨다 —
   경로를 여기에 적지 않는다(배포본 선언이 정본). */
const demoBlockConfig = {
  input: [
    { key: "base", title: "기본 인풋", note: "한 줄 정보를 입력받는 기본 형태입니다. 상태 7종과 지우기 동작을 함께 봅니다.", example: "pc", exampleMobile: "mobile" },
    { key: "password", title: "패스워드 필드", note: "기본 인풋에 눈 액션을 더한 형태입니다. 마크업은 기본 인풋과 다릅니다.", example: "password", exampleMobile: "password-mobile" },
    { key: "search", title: "서치 인풋", note: "기본 인풋에 돋보기 액션을 더한 형태입니다. 마크업은 기본 인풋과 다릅니다.", example: "search", exampleMobile: "search-mobile" }
  ]
};

let inputId = 0;

const declaredExamples = (manifest) => manifest.htmlContract?.breakExamples ?? {};

const urls = (id) => ({
  manifest: new URL(`../../ui-library/dist/components/${id}.manifest.json`, import.meta.url),
  registry: new URL(`../../registry/components/${id}.json`, import.meta.url),
  html: new URL(`../../ui-library/dist/examples/${id}.html`, import.meta.url),
  htmlMobile: new URL(`../../ui-library/dist/examples/${id}.mobile.html`, import.meta.url),
  css: new URL(`../../ui-library/dist/components/${id}.css`, import.meta.url),
  js: new URL(`../../ui-library/dist/components/${id}.js`, import.meta.url)
});

/* 지금 보고 있는 화면의 플랫폼. 메뉴가 ?platform=pc|mobile 로 페이지를 갈라 열고
   pages/components.html 이 <html> 에 view-pc|view-mobile 을 건다(기본 pc). */
function currentPlatform() {
  if (document.documentElement.classList.contains("view-mobile")) return "mobile";
  return new URLSearchParams(location.search).get("platform") === "mobile" ? "mobile" : "pc";
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url.pathname}`);
  return response.text();
}

async function fetchJson(url) {
  return JSON.parse(await fetchText(url));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

/* ── Markup generators ── */

function inputMarkup({
  label = false,
  value = "",
  placeholder = "내용을 입력하세요",
  state = "default",
  size = "md",
  breakName = "pc",
  message = true,
  isPreview = false,
  forceState = ""
}) {
  inputId += 1;
  const id = `guide-input-${inputId}`;
  const messageId = `${id}-message`;
  const error = state === "error";
  const correct = state === "correct";
  const rootState = correct ? ' data-state="correct"' : "";
  const controlState = [
    error ? ' aria-invalid="true"' : "",
    state === "readonly" ? " readonly" : "",
    state === "disabled" ? " disabled" : ""
  ].join("");
  const messageText = error
    ? "입력 내용을 다시 확인해 주세요."
    : correct
      ? "사용할 수 있는 내용입니다."
      : "안내 메시지";
  const previewClass = isPreview ? " is-preview" : "";
  const force = forceState ? ` data-force-state="${forceState}"` : "";
  const labelHtml = label ? `<label data-s1-part="label" for="${id}">${escapeHtml(label)}</label>` : "";

  return `
    <div data-s1-component="input" data-size="${size}" data-break="${breakName}"${rootState}${force} class="${previewClass}">
      ${labelHtml}
      <div data-s1-part="field">
        <input id="${id}" data-s1-part="control"${message ? ` aria-describedby="${messageId}"` : ""} placeholder="${escapeHtml(placeholder)}" value="${escapeHtml(value)}"${controlState}>
        <button type="button" data-s1-part="action" data-action="clear" aria-label="입력 내용 지우기" hidden>
          <span data-s1-part="action-icon" aria-hidden="true"></span>
        </button>
      </div>
      ${message ? `<p id="${messageId}" data-s1-part="message">${messageText}</p>` : ""}
    </div>`;
}

/* Password Field — Base Input 옵션(별도 컴포넌트 아님, river D1). trail = [눈][지우기]. */
function passwordMarkup({
  value = "",
  size = "md",
  breakName = "pc",
  visible = false,
  hasClear = false,
  disabled = false,
  isPreview = false,
  forceState = ""
}) {
  inputId += 1;
  const id = `guide-password-${inputId}`;
  const previewClass = isPreview ? " is-preview" : "";
  const force = forceState ? ` data-force-state="${forceState}"` : "";
  const showClear = hasClear && value.length > 0;
  return `
    <div data-s1-component="input" data-size="${size}" data-break="${breakName}"${force} class="${previewClass}">
      <div data-s1-part="field">
        <input id="${id}" data-s1-part="control" type="${visible ? "text" : "password"}" aria-label="비밀번호" placeholder="비밀번호를 입력하세요" value="${escapeHtml(value)}"${disabled ? " disabled" : ""}>
        <button type="button" data-s1-part="action" data-action="password" aria-pressed="${visible}" aria-label="${visible ? "비밀번호 숨기기" : "비밀번호 보기"}"${disabled ? " disabled" : ""}>
          <span data-s1-part="action-icon" aria-hidden="true"></span>
        </button>
        <button type="button" data-s1-part="action" data-action="clear" aria-label="비밀번호 지우기"${showClear ? "" : " hidden"}>
          <span data-s1-part="action-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>`;
}

/* Search Input — Base Input 옵션(별도 컴포넌트 아님, river D1). trail = [지우기][돋보기], 돋보기 항상 표시. */
function searchMarkup({
  value = "",
  size = "md",
  breakName = "pc",
  disabled = false,
  isPreview = false,
  forceState = ""
}) {
  inputId += 1;
  const id = `guide-search-${inputId}`;
  const previewClass = isPreview ? " is-preview" : "";
  const force = forceState ? ` data-force-state="${forceState}"` : "";
  const showClear = !disabled && value.length > 0;
  return `
    <div data-s1-component="input" data-size="${size}" data-break="${breakName}" data-mode="search"${force} class="${previewClass}">
      <div data-s1-part="field">
        <input id="${id}" data-s1-part="control" aria-label="검색" placeholder="검색어를 입력하세요" value="${escapeHtml(value)}"${disabled ? " disabled" : ""}>
        <button type="button" data-s1-part="action" data-action="clear" aria-label="검색어 지우기"${showClear ? "" : " hidden"}>
          <span data-s1-part="action-icon" aria-hidden="true"></span>
        </button>
        <button type="button" data-s1-part="action" data-action="search" aria-label="검색"${disabled ? " disabled" : ""}>
          <span data-s1-part="action-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>`;
}

function buttonMarkup(variant, size, label = "버튼", disabled = false, forceState = "") {
  const preview = forceState ? " is-preview" : "";
  const force = forceState ? ` data-force-state="${forceState}"` : "";
  return `<button type="button" data-s1-component="button" data-variant="${variant}" data-size="${size}"${disabled ? " disabled" : ""}${force} class="${preview}"><span data-s1-part="label">${escapeHtml(label)}</span></button>`;
}

/* ── State matrix: Button ── */

function buttonStateMatrix() {
  const variants = [
    ["primary", "Primary"],
    ["secondary", "Secondary"],
    ["blue-line", "Blue Line"]
  ];
  const pcSizes = [
    ["xxsm", "XXSM", "56×28"],
    ["xsm", "XSM", "64×34"],
    ["md", "MD", "80×44"]
  ];
  const states = ["default", "hover", "pressed", "disabled"];
  const stateLabels = ["Default", "Hover", "Pressed", "Disabled"];

  function unifiedAction(sizes) {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      sizes.map(([, sLabel, dim]) => `<div class="matrix-col-header">${sLabel || ""}${dim ? `<span class="uilg-size-dim">${dim}</span>` : ""}</div>`).join("");
    const activeRows = variants.map(([variant, vLabel]) => {
      const rowLabel = `<div class="matrix-row-label">${vLabel}</div>`;
      const cells = sizes.map(([size]) =>
        `<div class="comp-state-cell">${buttonMarkup(variant, size, "버튼")}</div>`
      ).join("");
      return rowLabel + cells;
    }).join("");
    const disabledRow = `<div class="matrix-row-label">Disabled${sizes.length > 1 ? '<span class="uilg-size-dim">공통</span>' : ""}</div>` +
      sizes.map(([size]) =>
        `<div class="comp-state-cell">${buttonMarkup("primary", size, "비활성", true)}</div>`
      ).join("");
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="comp-state-matrix" style="grid-template-columns: 100px repeat(${sizes.length}, minmax(80px, 1fr));">${header}${activeRows}${disabledRow}</div>
    </div>`;
  }

  function variantGrid(sizes, variant) {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      sizes.map(([, sLabel]) => `<div class="matrix-col-header">${sLabel}</div>`).join("");
    const rows = states.map((state, si) => {
      const rowLabel = `<div class="matrix-row-label">${stateLabels[si]}</div>`;
      const cells = sizes.map(([size]) => {
        if (state === "disabled") {
          return `<div class="comp-state-cell">${buttonMarkup(variant, size, "버튼", true)}</div>`;
        }
        return `<div class="comp-state-cell">${buttonMarkup(variant, size, "버튼", false, state)}</div>`;
      }).join("");
      return rowLabel + cells;
    }).join("");
    return `<div class="comp-state-matrix" style="grid-template-columns: 100px repeat(${sizes.length}, minmax(80px, 1fr));">${header}${rows}</div>`;
  }

  const pcVariantBlocks = variants.map(([variant, vLabel]) => `
    <div class="uilg-variant-block">
      <div class="variant-label">${vLabel}</div>
      ${variantGrid(pcSizes, variant)}
    </div>`).join('<hr class="uilg-separator">');

  const pcContent = `${unifiedAction(pcSizes)}
    ${pcVariantBlocks}`;

  /* Mobile 은 크기 축이 하나뿐이라 크기 라벨(LG)을 표출하지 않는다.
     한 표에서 유형(행) × 상태(열)를 한꺼번에 본다. */
  const mobileSizes = [["lg", ""]];
  const mobileStateMatrix = `<div class="comp-state-matrix" style="grid-template-columns: 100px repeat(${states.length}, minmax(80px, 1fr));">
      ${`<div class="matrix-col-header" style="grid-column:1"></div>` +
        stateLabels.map((label) => `<div class="matrix-col-header">${label}</div>`).join("")}
      ${variants.map(([variant, vLabel]) =>
        `<div class="matrix-row-label">${vLabel}</div>` +
        states.map((state) => `<div class="comp-state-cell">${state === "disabled"
          ? buttonMarkup(variant, "lg", "버튼", true)
          : buttonMarkup(variant, "lg", "버튼", false, state)}</div>`).join("")
      ).join("")}
    </div>`;

  const mobileContent = `${unifiedAction(mobileSizes)}
    ${mobileStateMatrix}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${pcContent}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">${mobileContent}</div>
    </div>`;
}

/* ── State matrix: Assist Button ──
   정본 buildAssistButtonSet 은 크기·variant 축이 없다 — State(Default·Hover·Pressed·Disabled) 4가지뿐이다.
   Pressed = Hover(코어 Button 정본 규칙)라 CSS 는 :hover·:active 를 합쳐 표현하고,
   미리보기 칸(마우스를 받지 않는 .is-preview)은 data-force-state 로 같은 모양을 재현한다. */

function assistButtonMarkup({ disabled = false, forceState = "", isPreview = false, label = "보조버튼" } = {}) {
  const preview = isPreview ? " is-preview" : "";
  const force = forceState ? ` data-force-state="${forceState}"` : "";
  return `<button type="button" data-s1-component="assist-button"${disabled ? " disabled" : ""}${force} class="${preview}"><span data-s1-part="label">${escapeHtml(label)}</span></button>`;
}

function assistButtonStateMatrix() {
  const states = ["default", "hover", "pressed", "disabled"];
  const stateLabels = ["Default", "Hover", "Pressed", "Disabled"];

  function actionSection() {
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-control-action">${assistButtonMarkup({})}</div>
      <p class="uilg-demo-note">본문 옆이나 목록 행 안처럼 좁은 자리에서 쓰는 보조 동작입니다. 크기 축이 없고 h32 하나뿐입니다.</p>
    </div>`;
  }

  function stateSection() {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      stateLabels.map((label) => `<div class="matrix-col-header">${label}</div>`).join("");
    const row = `<div class="matrix-row-label">Assist Button</div>` +
      states.map((state) => `<div class="comp-state-cell">${assistButtonMarkup({
        isPreview: true,
        disabled: state === "disabled",
        forceState: state === "hover" || state === "pressed" ? state : ""
      })}</div>`).join("");
    return `<div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${states.length}, minmax(104px, 1fr));">${header}${row}</div>`;
  }

  const content = `${actionSection()}
    ${stateSection()}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${content}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">${content}</div>
    </div>`;
}

/* ── State matrix: Text Button ──
   정본 buildTextButtonSet 은 크기 축이 없다 — Variant(Primary·Secondary) × State(Default·Hover·Pressed·Disabled).
   Variant 를 한 표의 행으로 두면(river 확정 A-5) Mobile 에서도 크기 라벨·블록 분리 없이 같은 표 하나로 본다. */

function textButtonMarkup({ variant = "primary", disabled = false, forceState = "", isPreview = false, label = "텍스트버튼" } = {}) {
  const preview = isPreview ? " is-preview" : "";
  const force = forceState ? ` data-force-state="${forceState}"` : "";
  return `<button type="button" data-s1-component="text-button" data-variant="${variant}"${disabled ? " disabled" : ""}${force} class="${preview}"><span data-s1-part="label">${escapeHtml(label)}</span></button>`;
}

function textButtonStateMatrix() {
  const variants = [["primary", "Primary"], ["secondary", "Secondary"]];
  const states = ["default", "hover", "pressed", "disabled"];
  const stateLabels = ["Default", "Hover", "Pressed", "Disabled"];

  function actionSection() {
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-control-action">${textButtonMarkup({ variant: "primary" })}</div>
      <p class="uilg-demo-note">배경·테두리가 없는 글자형 링크 동작입니다. 크기 축이 없고 글자 크기만큼만(hug) 차지합니다.</p>
    </div>`;
  }

  function stateSection() {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      stateLabels.map((label) => `<div class="matrix-col-header">${label}</div>`).join("");
    const rows = variants.map(([variant, vLabel]) =>
      `<div class="matrix-row-label">${vLabel}</div>` +
      states.map((state) => `<div class="comp-state-cell">${textButtonMarkup({
        variant,
        isPreview: true,
        disabled: state === "disabled",
        forceState: state === "hover" || state === "pressed" ? state : ""
      })}</div>`).join("")
    ).join("");
    return `<div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${states.length}, minmax(104px, 1fr));">${header}${rows}</div>`;
  }

  const content = `${actionSection()}
    ${stateSection()}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${content}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">${content}</div>
    </div>`;
}

/* ── State matrix: Checkbox · Radio ── */

function controlMarkup(kind, { label = "", checked = false, disabled = false, name = "", forceState = "", isPreview = false } = {}) {
  controlId += 1;
  const id = `guide-${kind}-${controlId}`;
  const attrs = [
    `type="${kind}"`,
    `id="${id}"`,
    name ? `name="${name}"` : "",
    'data-s1-part="control"',
    checked ? "checked" : "",
    disabled ? "disabled" : "",
    label ? "" : `aria-label="${kind === "checkbox" ? "라벨 없는 선택 항목" : "라벨 없는 옵션"}"`
  ].filter(Boolean).join(" ");
  const force = forceState ? ` data-force-state="${forceState}"` : "";
  const previewClass = isPreview ? ' class="is-preview"' : "";
  const labelHtml = label ? `<label data-s1-part="label" for="${id}">${escapeHtml(label)}</label>` : "";
  return `<div data-s1-component="${kind}"${force}${previewClass}>
      <input ${attrs}>
      ${labelHtml}
    </div>`;
}

function controlStateMatrix(kind) {
  const onWord = kind === "checkbox" ? "Checked" : "Selected";
  const states = [
    { label: "Default", opts: {} },
    { label: "Hover", opts: { forceState: "hover" } },
    { label: onWord, opts: { checked: true } },
    { label: "Disabled", opts: { disabled: true } },
    { label: `Dis+${onWord}`, opts: { checked: true, disabled: true } }
  ];
  const sampleLabel = kind === "checkbox" ? "선택 항목" : "옵션";

  /* ── 1) Action: 실제로 눌러보는 예시 — 여러 개를 함께 쓸 때 ── */
  function actionSection(platform) {
    const groupName = `guide-${kind}-${platform}-action`;
    const items = kind === "checkbox"
      ? ["이메일", "문자", "앱 푸시"]
      : ["받음", "받지 않음", "나중에 정하기"];
    const legend = kind === "checkbox" ? "받을 알림" : "알림 받기";
    const note = kind === "checkbox"
      ? "항목마다 따로 켜고 끕니다. 라벨을 눌러도 선택됩니다."
      : "같은 그룹에서 하나만 선택되고, 그룹 안에서는 화살표 키로 이동합니다.";
    const rows = items.map((text, index) => controlMarkup(kind, {
      label: text,
      name: kind === "radio" ? groupName : "",
      checked: index === 0
    })).join("");
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-control-action">
        <fieldset class="uilg-control-group">
          <legend class="matrix-row-label">${legend}</legend>
          ${rows}
        </fieldset>
        <p class="uilg-demo-note">${note}</p>
      </div>
    </div>`;
  }

  /* ── 2) 상태: 라벨 없음 1행 + 라벨 있음 1행 ── */
  function stateSection(platform) {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      states.map((state) => `<div class="matrix-col-header">${state.label}</div>`).join("");
    const row = (labelled) => `<div class="matrix-row-label">${labelled ? "라벨 있음" : "라벨 없음"}<span>${labelled ? "선택 부품" : "기본형"}</span></div>` +
      states.map((state, index) => `<div class="comp-state-cell">${controlMarkup(kind, {
        ...state.opts,
        isPreview: true,
        label: labelled ? sampleLabel : "",
        name: kind === "radio" ? `guide-${kind}-${platform}-${labelled ? "on" : "off"}-${index}` : ""
      })}</div>`).join("");
    return `<div class="uilg-demo-group">
      <div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${states.length}, minmax(104px, 1fr));">
        ${header}${row(false)}${row(true)}
      </div>
    </div>`;
  }

  /* PC·Mobile 은 각각 새로 생성한다 — 같은 문자열을 두 번 붙이면 id 와 radio name 이
     페이지 안에서 충돌해 PC 쪽 선택 상태가 풀린다. */
  /* .comp-action-top 이 이미 아래 구분선을 그리므로 별도 hr 을 두지 않는다(줄 2개로 보임). */
  const content = (platform) => `${actionSection(platform)}
    ${stateSection(platform)}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${content("pc")}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">
        ${content("mobile")}
      </div>
    </div>`;
}

/* ── State matrix: Toggle ── */

let toggleId = 0;

function toggleMarkup({ on = false, disabled = false, label = "알림 받기", isPreview = false } = {}) {
  toggleId += 1;
  const preview = isPreview ? ' class="is-preview"' : "";
  return `<button type="button" data-s1-component="toggle" role="switch" aria-checked="${on}" aria-label="${escapeHtml(label)}"${disabled ? " disabled" : ""}${preview} id="guide-toggle-${toggleId}">
      <span data-s1-part="knob" aria-hidden="true"></span>
    </button>`;
}

function toggleStateMatrix() {
  /* 열 = 정본 상태(Default·Disabled) · 행 = 정본 Pressed 축(Off·On) */
  const states = [
    { label: "Default", disabled: false },
    { label: "Disabled", disabled: true }
  ];
  const rows = [
    { label: "Off", note: "꺼짐", on: false },
    { label: "On", note: "켜짐", on: true }
  ];

  function actionSection() {
    const items = [
      ["앱 푸시 알림", true],
      ["야간 방해 금지", false]
    ];
    const rowsHtml = items.map(([text, on]) => `<div class="uilg-toggle-row">
        ${toggleMarkup({ on, label: text })}
        <span class="uilg-toggle-row-label">${escapeHtml(text)}</span>
      </div>`).join("");
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-control-action">
        <div class="uilg-control-group" role="group" aria-label="알림 설정">
          <span class="matrix-row-label">알림 설정</span>
          ${rowsHtml}
        </div>
        <p class="uilg-demo-note">누르는 즉시 반영됩니다. 옆의 글자는 화면 설명용이며 토글의 접근 이름은 aria-label로 붙입니다.</p>
      </div>
    </div>`;
  }

  function stateSection() {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      states.map((state) => `<div class="matrix-col-header">${state.label}</div>`).join("");
    const body = rows.map((row) => `<div class="matrix-row-label">${row.label}<span>${row.note}</span></div>` +
      states.map((state) => `<div class="comp-state-cell">${toggleMarkup({
        on: row.on,
        disabled: state.disabled,
        isPreview: true,
        label: `${row.label} · ${state.label}`
      })}</div>`).join("")).join("");
    return `<div class="uilg-demo-group">
      <div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${states.length}, 140px);">
        ${header}${body}
      </div>
    </div>`;
  }

  const content = () => `${actionSection()}
    ${stateSection()}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${content()}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">
        ${content()}
      </div>
    </div>`;
}

/* ── State matrix: Chip ── */

function chipMarkup({ variant = "line", size = "md", breakName = "pc", label = "라벨", selected = false, disabled = false, forceState = "", isPreview = false } = {}) {
  const force = forceState ? ` data-force-state="${forceState}"` : "";
  const preview = isPreview ? ' class="is-preview"' : "";
  return `<button type="button" data-s1-component="chip" data-variant="${variant}" data-size="${size}" data-break="${breakName}" aria-pressed="${selected}"${disabled ? " disabled" : ""}${force}${preview}><span data-s1-part="label">${escapeHtml(label)}</span></button>`;
}

function chipStateMatrix() {
  const variants = [["line", "Line"], ["solid", "Solid"]];
  const states = [
    { label: "Default", opts: {} },
    { label: "Hover", opts: { forceState: "hover" } },
    { label: "Selected", opts: { selected: true } },
    { label: "Disabled", opts: { disabled: true } }
  ];

  /* Action — 실제로 눌러서 고르는 자리. 버튼 Action 과 같은 틀: 열=크기, 행=variant.
     크기는 여기에만 표출한다(별도 SIZES 블록 금지). */
  function actionSection(breakName) {
    /* Mobile 은 크기 축이 하나뿐이라 크기 라벨(SM)을 표출하지 않는다. */
    const sizes = breakName === "mobile" ? [["sm", ""]] : [["sm", "SM", "28px"], ["md", "MD", "34px"]];
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      sizes.map(([, sLabel, dim]) => `<div class="matrix-col-header">${sLabel || ""}${dim ? `<span class="uilg-size-dim">${dim}</span>` : ""}</div>`).join("");
    const activeRows = variants.map(([variant, vLabel]) => {
      const rowLabel = `<div class="matrix-row-label">${vLabel}</div>`;
      const cells = sizes.map(([size]) =>
        `<div class="comp-state-cell">${chipMarkup({ variant, size, breakName, label: "라벨" })}</div>`
      ).join("");
      return rowLabel + cells;
    }).join("");
    const disabledRow = `<div class="matrix-row-label">Disabled${sizes.length > 1 ? '<span class="uilg-size-dim">공통</span>' : ""}</div>` +
      sizes.map(([size]) =>
        `<div class="comp-state-cell">${chipMarkup({ variant: "line", size, breakName, label: "라벨", disabled: true })}</div>`
      ).join("");
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="comp-state-matrix" style="grid-template-columns: 100px repeat(${sizes.length}, minmax(80px, 1fr));">${header}${activeRows}${disabledRow}</div>
      <p class="uilg-demo-note">눌러서 선택하고 다시 눌러 해제합니다. 선택 상태는 aria-pressed로 전달됩니다.</p>
    </div>`;
  }

  function variantGrid(variant, breakName, size) {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      states.map((state) => `<div class="matrix-col-header">${state.label}</div>`).join("");
    const row = `<div class="matrix-row-label">${size.toUpperCase()}<span>${breakName === "mobile" ? "30px" : size === "sm" ? "28px" : "34px"}</span></div>` +
      states.map((state) => `<div class="comp-state-cell">${chipMarkup({
        variant, size, breakName, isPreview: true, ...state.opts
      })}</div>`).join("");
    return `<div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${states.length}, minmax(96px, 1fr));">${header}${row}</div>`;
  }

  /* Mobile — 크기 축이 하나뿐이라 왼쪽 라벨은 크기(SM) 대신 유형(Line·Solid)을 쓰고,
     Line·Solid 를 한 표에서 함께 본다(사이 가로선 없음). */
  function mobileGrid() {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      states.map((state) => `<div class="matrix-col-header">${state.label}</div>`).join("");
    const rows = variants.map(([variant, vLabel]) =>
      `<div class="matrix-row-label">${vLabel}</div>` +
      states.map((state) => `<div class="comp-state-cell">${chipMarkup({
        variant, size: "sm", breakName: "mobile", isPreview: true, ...state.opts
      })}</div>`).join("")).join("");
    return `<div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${states.length}, minmax(96px, 1fr));">${header}${rows}</div>`;
  }

  function content(breakName) {
    if (breakName === "mobile") {
      return `${actionSection(breakName)}
      ${mobileGrid()}`;
    }
    const blocks = variants.map(([variant, label]) => `
      <div class="uilg-variant-block">
        <div class="variant-label">${label}</div>
        ${variantGrid(variant, breakName, "md")}
      </div>`).join('<hr class="uilg-separator">');
    return `${actionSection(breakName)}
      ${blocks}`;
  }

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${content("pc")}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">
        ${content("mobile")}
      </div>
    </div>`;
}

/* ── State matrix: Input ── */

function inputStateMatrix() {
  const states = [
    { label: "Default", opts: {} },
    { label: "Filled", opts: { value: "홍길동" } },
    { label: "Focus", opts: { value: "홍길", forceState: "focus" } },
    { label: "Error", opts: { state: "error", value: "ㅎ" } },
    { label: "Correct", opts: { state: "correct", value: "홍길동" } },
    { label: "Read-only", opts: { state: "readonly", value: "변경할 수 없는 값" } },
    { label: "Disabled", opts: { state: "disabled", value: "사용할 수 없음" } }
  ];

  /* ── 1) Action: XSM 대표 인터랙션 ── */
  function actionSection(breakName) {
    const size = breakName === "mobile" ? "md" : "xsm";
    const toggleId = `input-msg-toggle-${breakName}`;
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-input-action">
        ${inputMarkup({ size, breakName, isPreview: false, message: false })}
      </div>
      <div class="uilg-option-chips">
        <label class="uilg-option-chip" for="${toggleId}">
          <input id="${toggleId}" type="checkbox" data-input-msg-toggle="${breakName}" hidden>
          <span class="uilg-option-chip-text">Message: <strong>off</strong></span>
        </label>
      </div>
      ${breakName === "mobile" ? `<p class="uilg-demo-note">필드 높이와 remove 누르는 영역은 48px을 유지합니다.</p>` : ""}
    </div>`;
  }

  /* ── 2) PC 크기 비교: XXSM · XSM · MD ── */
  function sizeSection() {
    const sizes = [
      ["xxsm", "XXSM", "28px"],
      ["xsm", "XSM", "34px"],
      ["md", "MD", "44px"]
    ];
    const header = sizes.map(([, sLabel, dim]) =>
      `<div class="matrix-col-header">${sLabel}<span class="uilg-size-dim">${dim}</span></div>`
    ).join("");
    const cells = sizes.map(([size]) =>
      `<div class="comp-state-cell">${inputMarkup({ breakName: "pc", size, isPreview: true, message: false })}</div>`
    ).join("");
    return `<div class="uilg-demo-group">
      <div class="comp-state-matrix uilg-input-constrained" style="grid-template-columns: repeat(3, 200px);">
        ${header}${cells}
      </div>
    </div>`;
  }

  /* 열 너비. Mobile 은 누르는 영역이 48×48 이라 아이콘 하나만 있어도 180px 중 116px 만 글자에 남고
     placeholder("비밀번호를 입력하세요" 125px)가 잘렸다(river 제보 2026-09-07 · 실측 have 114 < need 125).
     같은 표의 옆 칸도 같은 너비를 쓴다 — 한 칸만 넓히면 칸마다 필드 크기가 달라 보인다. */
  const colWidth = (breakName) => (breakName === "mobile" ? "200px" : "180px");

  /* ── 3) 상태: 메시지 없음 1행 + 메시지 있음 1행 ── */
  function stateSection(breakName) {
    const size = breakName === "mobile" ? "md" : "xsm";
    const cols = states.length;
    const header = states.map((s) => `<div class="matrix-col-header">${s.label}</div>`).join("");

    const noMsgCells = states.map((s) =>
        `<div class="comp-state-cell">${inputMarkup({ breakName, size, isPreview: true, message: false, ...s.opts })}</div>`
      ).join("");

    const withMsgCells = states.map((s) =>
        `<div class="comp-state-cell">${inputMarkup({ breakName, size, isPreview: true, message: true, ...s.opts })}</div>`
      ).join("");

    return `<div class="uilg-demo-group">
      <div class="comp-state-matrix uilg-input-constrained" style="grid-template-columns: repeat(${cols}, ${colWidth(breakName)});">
        ${header}
        ${noMsgCells}
        ${withMsgCells}
      </div>
    </div>`;
  }

  /* ── 4) Password Field · Search Input — Input 의 옵션 조립(river D1, 별도 컴포넌트 아님) ── */
  function passwordSection(breakName) {
    const size = breakName === "mobile" ? "md" : "xsm";
    const cells = [
      ["숨김(기본)", { breakName, size, value: "" }],
      ["값 있음 · 지우기 표시", { breakName, size, value: "1234abcd", hasClear: true }],
      ["표시 중", { breakName, size, value: "1234abcd", visible: true, hasClear: true }],
      ["Disabled", { breakName, size, value: "1234abcd", disabled: true }]
    ];
    const header = cells.map(([label]) => `<div class="matrix-col-header">${label}</div>`).join("");
    const row = cells.map(([, opts]) =>
      `<div class="comp-state-cell">${passwordMarkup({ isPreview: true, ...opts })}</div>`
    ).join("");
    return `<div class="uilg-variant-block">
      <p class="uilg-demo-note">Base Input 조립 — type=password + 눈 액션. 크기·상태·break는 Base Input과 동일합니다. 트레일 순서는 [눈][지우기](2px 간격)입니다.</p>
      <div class="comp-action-top">
        <div class="matrix-col-header-action">Action</div>
        <div class="uilg-input-action">${passwordMarkup({ breakName, size, isPreview: false })}</div>
      </div>
      <div class="comp-state-matrix uilg-input-constrained" style="grid-template-columns: repeat(${cells.length}, ${colWidth(breakName)});">
        ${header}${row}
      </div>
    </div>`;
  }

  function searchSection(breakName) {
    const size = breakName === "mobile" ? "md" : "xsm";
    const cells = [
      ["Default", { breakName, size, value: "" }],
      ["값 있음 · 지우기+돋보기", { breakName, size, value: "디자인 시스템" }],
      ["Disabled", { breakName, size, value: "", disabled: true }]
    ];
    const header = cells.map(([label]) => `<div class="matrix-col-header">${label}</div>`).join("");
    const row = cells.map(([, opts]) =>
      `<div class="comp-state-cell">${searchMarkup({ isPreview: true, ...opts })}</div>`
    ).join("");
    return `<div class="uilg-variant-block">
      <p class="uilg-demo-note">Base Input 조립 — data-mode="search" + 돋보기 액션. 상태는 Default·값 있음·Disabled 3종뿐입니다(river 결정). 돋보기 클릭 또는 Enter로 s1:input:search 이벤트가 발생합니다 — 아래 실제로 눌러보기에서 확인하세요.</p>
      <div class="comp-action-top">
        <div class="matrix-col-header-action">Action</div>
        <div class="uilg-input-action">${searchMarkup({ breakName, size, isPreview: false })}</div>
        <p class="uilg-demo-note" data-search-live-note>검색을 실행하면 여기에 값이 표시됩니다.</p>
      </div>
      <div class="comp-state-matrix uilg-input-constrained" style="grid-template-columns: repeat(${cells.length}, ${colWidth(breakName)});">
        ${header}${row}
      </div>
    </div>`;
  }

  /* 기본 인풋·패스워드·서치는 각각 독립된 상자로 갈라 그 상자 밑에 자기 개발 코드를 단다
     (river 결정 HD-A, 2026-09-07). 세 형태는 같은 부품(data-s1-component="input")이지만
     붙여넣는 마크업은 서로 다르다 — 한 상자에 섞여 있으면 어느 코드가 어느 형태의 것인지 알 수 없다.
     상자가 이미 경계를 그으므로 블록 사이 가로선은 두지 않는다. */
  const platformWrap = (pcContent, mobileContent) => `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${pcContent}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">${mobileContent}</div>
    </div>`;

  return {
    base: platformWrap(
      `${actionSection("pc")}
       ${sizeSection()}
       <hr class="uilg-separator" style="margin-block: 12px 16px;">
       ${stateSection("pc")}`,
      `${actionSection("mobile")}
       ${stateSection("mobile")}`
    ),
    password: platformWrap(passwordSection("pc"), passwordSection("mobile")),
    search: platformWrap(searchSection("pc"), searchSection("mobile"))
  };
}


/* ── State matrix: Select · Dropdown · Filter Chip ──
   세 모듈은 사슬로 조립된다 — filter-chip / select → dropdown → checkbox.
   미리보기 칸(.is-preview)은 런타임을 붙이지 않으므로 panel 의 hidden 을 마크업이 직접 들고 있고,
   Open/Selected 칸만 hidden 을 떼어 실제 목록이 보이게 한다. */

function dropdownOptionMarkup(type, { label, selected = false, forceState = "", selectAll = false, value = "" }) {
  const force = forceState ? ` data-force-state="${forceState}"` : "";
  // 「전체 선택」 행은 배포본이 data-select-all 로 식별한다(dropdown.example.html 계약과 동일).
  const all = selectAll ? ' data-select-all="true"' : "";
  const val = value ? ` data-value="${escapeHtml(value)}"` : "";
  if (type === "text") {
    return `<div data-s1-part="option" role="option" aria-selected="${selected}" tabindex="-1"${force}${val}><span data-s1-part="option-label">${escapeHtml(label)}</span></div>`;
  }
  return `<div data-s1-part="option" role="checkbox" aria-checked="${selected}" tabindex="-1"${force}${all}${val}>
      <div data-s1-component="checkbox" aria-hidden="true"><input type="checkbox" data-s1-part="control" tabindex="-1"${selected ? " checked" : ""}></div>
      <span data-s1-part="option-label">${escapeHtml(label)}</span>
    </div>`;
}

function dropdownMarkup({ type = "text", size = "md", withAll = false, ariaLabel = "목록", rows = null, isPreview = false } = {}) {
  const body = rows
    ? rows.map((row) => dropdownOptionMarkup(type, row)).join("")
    : [
        { label: "서울", selected: true },
        { label: "부산", selected: false },
        { label: "제주", selected: false }
      ].map((row) => dropdownOptionMarkup(type, row)).join("");
  const allRow = withAll
    ? dropdownOptionMarkup(type, { label: "전체", selected: false, selectAll: true, value: "all" }) + '<div data-s1-part="divider"></div>'
    : "";
  const listRole = type === "text" ? ' role="listbox"' : "";
  const preview = isPreview ? " is-preview" : "";
  return `<div data-s1-component="dropdown" data-type="${type}" data-size="${size}"${listRole} aria-label="${escapeHtml(ariaLabel)}" class="${preview}">${allRow}${body}</div>`;
}

function selectMarkup({ size = "md", breakName = "pc", state = "default", isPreview = false, valueText = null, placeholder = "선택", ariaLabel = "지역", rows = null } = {}) {
  const open = state === "open";
  const filled = state === "filled";
  const disabled = state === "disabled";
  const force = state === "hover" ? ' data-force-state="hover"' : "";
  const preview = isPreview ? " is-preview" : "";
  /* 미리보기는 init 하지 않으므로 hidden 을 마크업이 든다. Open 칸만 목록을 편다
     (표출 정책 select.keepInState.open = optionList). */
  const panelHidden = isPreview ? (open ? "" : " hidden") : " hidden";
  return `<div data-s1-component="select" data-size="${size}" data-break="${breakName}" class="${preview}">
      <button type="button" data-s1-part="trigger" aria-haspopup="listbox" aria-expanded="${open}"${filled ? ' data-filled="true"' : ""}${disabled ? " disabled" : ""}${force}>
        <span data-s1-part="value">${valueText ?? (filled ? "서울" : placeholder)}</span>
        <span data-s1-part="icon" aria-hidden="true"></span>
      </button>
      <div data-s1-part="panel"${panelHidden}>${dropdownMarkup({ type: "text", size, ariaLabel, rows, isPreview })}</div>
    </div>`;
}

const filterChipPanelSize = { sm: "xsm", md: "xsm" };

function filterChipMarkup({ variant = "line", size = "md", breakName = "pc", title = "on", state = "default", isPreview = false } = {}) {
  const open = state === "selected";
  const complete = state === "complete";
  const disabled = state === "disabled";
  const force = state === "hover" ? ' data-force-state="hover"' : "";
  const preview = isPreview ? " is-preview" : "";
  const panelHidden = isPreview ? (open ? "" : " hidden") : " hidden";
  return `<div data-s1-component="filter-chip" data-variant="${variant}" data-size="${size}" data-break="${breakName}" data-title="${title}" class="${preview}">
      <button type="button" data-s1-part="trigger" aria-haspopup="listbox" aria-expanded="${open}"${complete ? ' data-complete="true"' : ""}${disabled ? " disabled" : ""}${force}>
        ${title === "on" ? '<span data-s1-part="title">정렬</span>' : ""}
        <span data-s1-part="value">${complete ? "인기순" : "최신순"}</span>
        <span data-s1-part="icon" aria-hidden="true"></span>
      </button>
      <div data-s1-part="panel"${panelHidden}>${dropdownMarkup({ type: "text", size: filterChipPanelSize[size], ariaLabel: "정렬", isPreview, rows: [
        { label: "최신순", selected: true }, { label: "인기순", selected: false }, { label: "과거순", selected: false }
      ] })}</div>
    </div>`;
}

/* 공통 — 열=크기 · 행=상태 그리드 (Button·Chip 과 같은 틀) */
function sizeStateGrid(sizes, states, cell, { tall = false, columns = null } = {}) {
  /* 열이 하나뿐이면(크기 축이 하나인 Mobile) 1fr 로 늘리지 않는다 — 칸 가운데 정렬 탓에
     실물이 표 오른쪽으로 밀려 Action 영역과 어긋난다. */
  const colWidth = sizes.length === 1 ? "220px" : "minmax(140px, 1fr)";
  /* columns 를 준 컴포넌트는 그 값을 그대로 쓴다 — 열린 패널이 칸보다 넓어 오른쪽으로 삐져나가는
     경우(Date Picker 달력)에 칸 너비를 패널 실제 폭에 맞추기 위한 것이다. */
  if (columns) return `<div class="comp-state-matrix" style="grid-template-columns: ${columns};">${(() => {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      sizes.map(([, sLabel, dim]) => `<div class="matrix-col-header">${sLabel}${dim ? `<span class="uilg-size-dim">${dim}</span>` : ""}</div>`).join("");
    const rows = states.map(([stateLabel, state, note]) => {
      const rowLabel = `<div class="matrix-row-label">${stateLabel}${note ? `<span>${note}</span>` : ""}</div>`;
      return rowLabel + sizes.map(([size]) =>
        `<div class="comp-state-cell${tall && state === states[states.length - 1][1] ? " uilg-open-cell" : ""}">${cell(size, state)}</div>`).join("");
    }).join("");
    return header + rows;
  })()}</div>`;
  const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
    sizes.map(([, sLabel, dim]) => `<div class="matrix-col-header">${sLabel}${dim ? `<span class="uilg-size-dim">${dim}</span>` : ""}</div>`).join("");
  const rows = states.map(([stateLabel, state, note]) => {
    const rowLabel = `<div class="matrix-row-label">${stateLabel}${note ? `<span>${note}</span>` : ""}</div>`;
    return rowLabel + sizes.map(([size]) =>
      `<div class="comp-state-cell${tall && state === states[states.length - 1][1] ? " uilg-open-cell" : ""}">${cell(size, state)}</div>`).join("");
  }).join("");
  return `<div class="comp-state-matrix" style="grid-template-columns: 120px repeat(${sizes.length}, ${colWidth});">${header}${rows}</div>`;
}

function selectStateMatrix() {
  const pcSizes = [["xxsm", "XXSM", "28px"], ["xsm", "XSM", "34px"], ["md", "MD", "44px"]];
  /* Mobile 은 크기 축이 하나뿐이라 크기 라벨(MD)을 표출하지 않는다. */
  const mobileSizes = [["md", ""]];
  /* 열 = 정본 상태 전수(5종). Open 은 목록을 편 채로 보인다(표출 정책 keepInState). */
  const states = [
    ["Default", "default"],
    ["Hover", "hover", "검수 표시"],
    ["Filled", "filled", "값 선택됨"],
    ["Disabled", "disabled"],
    ["Open", "open", "목록 열림"]
  ];

  function actionSection(breakName, sizes) {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      sizes.map(([, sLabel, dim]) => `<div class="matrix-col-header">${sLabel || ""}${dim ? `<span class="uilg-size-dim">${dim}</span>` : ""}</div>`).join("");
    const liveRow = `<div class="matrix-row-label">Select</div>` +
      sizes.map(([size]) => `<div class="comp-state-cell">${selectMarkup({ size, breakName })}</div>`).join("");
    const disabledRow = `<div class="matrix-row-label">Disabled${sizes.length > 1 ? '<span class="uilg-size-dim">공통</span>' : ""}</div>` +
      sizes.map(([size]) => `<div class="comp-state-cell">${selectMarkup({ size, breakName, state: "disabled", isPreview: true })}</div>`).join("");
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="comp-state-matrix" style="grid-template-columns: 120px repeat(${sizes.length}, minmax(140px, 1fr));">${header}${liveRow}${disabledRow}</div>
      <p class="uilg-demo-note">눌러서 목록을 열고 화살표 키·Enter로 고릅니다. 고르면 닫히고 값이 남습니다. 바깥을 눌러도 닫힙니다.</p>
    </div>`;
  }

  const content = (breakName, sizes) => `${actionSection(breakName, sizes)}
    ${sizeStateGrid(sizes, states, (size, state) => selectMarkup({ size, breakName, state, isPreview: true }), { tall: true })}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${content("pc", pcSizes)}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">
        ${content("mobile", mobileSizes)}
      </div>
    </div>`;
}

function dropdownStateMatrix() {
  const sizes = [["xxsm", "XXSM", "28px"], ["xsm", "XSM", "34px"], ["md", "MD", "44px"]];
  const types = [
    ["text", "글자 유형", { type: "text" }],
    ["checkbox", "체크박스 유형", { type: "checkbox" }],
    ["checkbox-all", "체크박스 + 전체 선택", { type: "checkbox", withAll: true }]
  ];
  /* 열 = 크기 · 행 = 옵션 행 상태(정본 3종). 패널 자체에는 상태 축이 없다. */
  const optionStates = [
    ["Default", "default"],
    ["Hover", "hover", "검수 표시"],
    ["Selected", "selected"]
  ];

  function actionSection() {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      sizes.map(([, sLabel, dim]) => `<div class="matrix-col-header">${sLabel || ""}${dim ? `<span class="uilg-size-dim">${dim}</span>` : ""}</div>`).join("");
    const rows = types.map(([, typeLabel, opts]) => `<div class="matrix-row-label">${typeLabel}</div>` +
      sizes.map(([size]) => `<div class="comp-state-cell">${dropdownMarkup({ ...opts, size, ariaLabel: typeLabel })}</div>`).join("")).join("");
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="comp-state-matrix" style="grid-template-columns: 120px repeat(${sizes.length}, minmax(160px, 1fr));">${header}${rows}</div>
      <p class="uilg-demo-note">눌러서 고르고 화살표 키·Home·End로 이동합니다. 체크박스 유형은 여러 개를 함께 고릅니다.</p>
    </div>`;
  }

  const optionCell = (type, size, state) => dropdownMarkup({
    type, size, isPreview: true, ariaLabel: "옵션 상태",
    rows: [{ label: type === "text" ? "서울" : "서울", selected: state === "selected", forceState: state === "hover" ? "hover" : "" }]
  });

  const blocks = [["text", "글자 유형"], ["checkbox", "체크박스 유형"]].map(([type, typeLabel]) => `
    <div class="uilg-variant-block">
      <div class="variant-label">${typeLabel} · 옵션 행 상태</div>
      ${sizeStateGrid(sizes, optionStates, (size, state) => optionCell(type, size, state))}
    </div>`).join('<hr class="uilg-separator">');

  const content = () => `${actionSection()}
    ${blocks}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${content()}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">
        ${content()}
      </div>
    </div>`;
}

function filterChipStateMatrix() {
  const pcSizes = [["sm", "SM", "28px"], ["md", "MD", "34px"]];
  const mobileSizes = [["md", ""]];
  const variants = [["line", "Line"], ["solid", "Solid"]];
  const titles = [["on", "제목 있음"], ["off", "제목 없음"]];
  const states = [
    ["Default", "default"],
    ["Hover", "hover", "검수 표시"],
    ["Complete", "complete", "값 확정"],
    ["Disabled", "disabled"],
    ["Selected", "selected", "열림"]
  ];

  /* Action — Button·Chip Action 과 같은 틀: 열=크기 · 행=유형(+Disabled).
     Filter Chip 은 유형 축이 variant(Line·Solid) × 제목 유무 2겹이라 행을 그 조합으로 편다.
     크기는 여기에만 표출한다(별도 SIZES 블록 금지). 모든 칸이 실제로 눌리는 실물이다. */
  function actionSection(breakName, sizes) {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      sizes.map(([, sLabel, dim]) => `<div class="matrix-col-header">${sLabel || ""}${dim ? `<span class="uilg-size-dim">${dim}</span>` : ""}</div>`).join("");
    const activeRows = variants.map(([variant, vLabel]) =>
      titles.map(([title, titleLabel]) =>
        /* 유형 라벨은 한 줄 글자로 둔다 — .comp-state-matrix .matrix-row-label span 은
           페이지 규칙(2026-07-06)에 따라 display:none 이라 span 으로 넣으면 보이지 않는다. */
        `<div class="matrix-row-label">${vLabel} · ${titleLabel}</div>` +
        sizes.map(([size]) => `<div class="comp-state-cell">${filterChipMarkup({ variant, size, breakName, title })}</div>`).join("")
      ).join("")).join("");
    const disabledRow = `<div class="matrix-row-label">Disabled${sizes.length > 1 ? '<span class="uilg-size-dim">공통</span>' : ""}</div>` +
      sizes.map(([size]) => `<div class="comp-state-cell">${filterChipMarkup({ variant: "line", size, breakName, state: "disabled", isPreview: true })}</div>`).join("");
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="comp-state-matrix" style="grid-template-columns: 120px repeat(${sizes.length}, minmax(140px, 1fr));">${header}${activeRows}${disabledRow}</div>
      <p class="uilg-demo-note">눌러서 열고 값을 고르면 닫히면서 값이 남습니다. Esc·바깥 클릭으로도 닫힙니다.</p>
    </div>`;
  }

  /* Mobile — 크기 축이 하나뿐이라 왼쪽 라벨은 크기(MD) 대신 유형(Line·Solid × 제목 유무)을 쓰고,
     네 조합을 한 표에서 함께 본다(사이 가로선 없음). */
  function mobileGrid() {
    /* 열 = 유형 4조합 · 행 = 상태. 열림(Selected) 행만 목록을 펴므로 세로가 짧다. */
    const columns = variants.flatMap(([variant, vLabel]) =>
      titles.map(([title, titleLabel]) => [variant, title, `${vLabel} · ${titleLabel}`]));
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      columns.map(([, , colLabel]) => `<div class="matrix-col-header">${colLabel}</div>`).join("");
    const rows = states.map(([stateLabel, state, note], index) =>
      `<div class="matrix-row-label">${stateLabel}${note ? `<span>${note}</span>` : ""}</div>` +
      columns.map(([variant, title]) => `<div class="comp-state-cell${index === states.length - 1 ? " uilg-open-cell" : ""}">${filterChipMarkup({
        variant, size: "md", breakName: "mobile", title, state, isPreview: true
      })}</div>`).join("")).join("");
    return `<div class="comp-state-matrix" style="grid-template-columns: 120px repeat(${columns.length}, minmax(140px, 1fr));">${header}${rows}</div>`;
  }

  function content(breakName, sizes) {
    if (breakName === "mobile") {
      return `${actionSection(breakName, sizes)}
      ${mobileGrid()}`;
    }
    const blocks = variants.map(([variant, vLabel]) => {
      const grids = titles.map(([title, titleLabel]) => `
        <div class="uilg-demo-group">
          <div class="matrix-row-label">${titleLabel}</div>
          ${sizeStateGrid(sizes, states, (size, state) => filterChipMarkup({ variant, size, breakName, title, state, isPreview: true }), { tall: true })}
        </div>`).join("");
      return `<div class="uilg-variant-block">
        <div class="variant-label">${vLabel}</div>
        ${grids}
      </div>`;
    }).join('<hr class="uilg-separator">');
    return `${actionSection(breakName, sizes)}
      ${blocks}`;
  }

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${content("pc", pcSizes)}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">
        ${content("mobile", mobileSizes)}
      </div>
    </div>`;
}

/* ── Line Tab · Pagination ── */

function tabMarkup({ size = "md", breakName = "pc", selected = 0, hover = -1, preview = false } = {}) {
  const labels = ["탭 메뉴 1", "탭 메뉴 2", "탭 메뉴 3"];
  return `<div data-s1-component="tab" data-size="${size}" data-break="${breakName}" role="tablist" aria-label="콘텐츠 보기 선택"${preview ? ' class="is-preview"' : ""}>${labels.map((label, index) => `<button type="button" data-s1-part="tab" role="tab" aria-selected="${index === selected}"${index === hover ? ' data-force-state="hover"' : ""}>${label}</button>`).join("")}</div>`;
}

function tabStateItemMarkup({ size = "md", breakName = "pc", selected = false, hover = false } = {}) {
  return `<div data-s1-component="tab" data-size="${size}" data-break="${breakName}" role="tablist" aria-label="탭 상태 미리보기" class="is-preview"><button type="button" data-s1-part="tab" role="tab" aria-selected="${selected}"${hover ? ' data-force-state="hover"' : ""}>탭 메뉴</button></div>`;
}

function tabStateMatrix() {
  const sizes = currentPlatform() === "mobile" ? [["sm", "SM", "32px"]] : [["md", "MD", "44px"], ["sm", "SM", "42px"], ["xsm", "XSM", "40px"]];
  const breakName = currentPlatform() === "mobile" ? "mobile" : "pc";
  const action = `<div class="comp-action-top uilg-tab-action-top"><div class="matrix-col-header-action">Action</div><div class="uilg-tab-action-row">${sizes.map(([size, label, height]) => `<div class="uilg-tab-action-item"><div class="matrix-col-header">${label}<span class="uilg-size-dim">${height}</span></div>${tabMarkup({ size, breakName })}</div>`).join("")}</div></div>`;
  const states = [["기본", {}], ["선택", { selected: true }], ["Hover", { hover: true }]];
  return `<div class="platform-section"><div class="preview-area">${action}<div class="comp-state-matrix" style="grid-template-columns:repeat(3,minmax(120px,1fr));">${states.map(([label]) => `<div class="matrix-col-header">${label}</div>`).join("")}${states.map(([, options]) => `<div class="comp-state-cell">${tabStateItemMarkup({ size: sizes[0][0], breakName, ...options })}</div>`).join("")}</div></div></div>`;
}

function paginationMarkup({ page = 1, total = 6, preview = false } = {}) {
  const beforeDisabled = page <= 1;
  const afterDisabled = page >= total;
  return `<nav data-s1-component="pagination" data-total-pages="${total}" data-page="${page}" aria-label="페이지 탐색"${preview ? ' class="is-preview"' : ""}><span data-s1-part="arrow-group"><button type="button" data-s1-action="first" aria-label="첫 페이지"${beforeDisabled ? " disabled" : ""}><span data-s1-part="icon" data-icon="edge" aria-hidden="true"></span></button><button type="button" data-s1-action="previous" aria-label="이전 페이지"${beforeDisabled ? " disabled" : ""}><span data-s1-part="icon" data-icon="chevron" aria-hidden="true"></span></button></span><span data-s1-part="pages">${Array.from({ length: total }, (_, index) => { const number = index + 1; return `<button type="button" data-s1-part="page" data-page="${number}"${number === page ? ' aria-current="page"' : ""}>${number}</button>`; }).join("")}</span><span data-s1-part="arrow-group"><button type="button" data-s1-action="next" aria-label="다음 페이지"${afterDisabled ? " disabled" : ""}><span data-s1-part="icon" data-icon="chevron" aria-hidden="true"></span></button><button type="button" data-s1-action="last" aria-label="마지막 페이지"${afterDisabled ? " disabled" : ""}><span data-s1-part="icon" data-icon="edge" aria-hidden="true"></span></button></span></nav>`;
}

/* ── State matrix: Table ──
   정본 buildTableCell(Size 3 × Type 2 × Variant 3) · buildTable(Size 3).
   상태는 정본과 같이 '셀'이 소유하고 행은 그 조합으로 표현한다.
   Action 영역은 river 결정(2026-09-02)대로 표 + 페이지네이션 + 보기 셀렉박스를 함께 보여주되,
   뒤 둘은 승인된 배포본을 조립해 쓴다 — Table 안에 다시 구현하지 않는다. */

let tableRowId = 0;

function tableSelectionCell({ tag = "td", label = "", checked = false, isPreview = false } = {}) {
  tableRowId += 1;
  const attrs = [
    'type="checkbox"',
    'data-s1-part="control"',
    `aria-label="${escapeHtml(label)}"`,
    checked ? "checked" : "",
    isPreview ? 'tabindex="-1"' : ""
  ].filter(Boolean).join(" ");
  const part = tag === "th" ? 'data-s1-part="header-cell" scope="col"' : 'data-s1-part="cell"';
  return `<${tag} ${part} data-selection><div data-s1-component="checkbox"><input ${attrs}></div></${tag}>`;
}

function tableMarkup({ size = "md", rows = null, isPreview = false } = {}) {
  const data = rows ?? [
    { name: "항목 1", category: "카테고리 A", count: 10, state: "활성" },
    { name: "항목 2", category: "카테고리 B", count: 20, state: "검토중" },
    { name: "항목 3", category: "카테고리 C", count: 30, state: "완료" },
    { name: "항목 4", category: "카테고리 A", count: 40, state: "활성" }
  ];
  const preview = isPreview ? " is-preview" : "";
  const body = data.map((row, index) => `<tr data-s1-part="row"${row.selected ? ' data-selected="true"' : ""}>
        ${tableSelectionCell({ label: `${row.name} 선택`, checked: Boolean(row.selected), isPreview })}
        <td data-s1-part="cell"${row.forceState ? ` data-state="${row.forceState}"` : ""}>${escapeHtml(row.name)}</td>
        <td data-s1-part="cell"${row.forceState ? ` data-state="${row.forceState}"` : ""}>${escapeHtml(row.category)}</td>
        <td data-s1-part="cell" data-align="center"${row.forceState ? ` data-state="${row.forceState}"` : ""}>${row.count}</td>
        <td data-s1-part="cell" data-align="center"${row.forceState ? ` data-state="${row.forceState}"` : ""}>${escapeHtml(row.state)}</td>
      </tr>`).join("");
  return `<div data-guide-sample="set" data-s1-component="table" data-size="${size}" class="${preview.trim()}">
      <table data-s1-part="table">
        <thead>
          <tr>
            ${tableSelectionCell({ tag: "th", label: "전체 선택", isPreview })}
            <th data-s1-part="header-cell" scope="col">항목명</th>
            <th data-s1-part="header-cell" scope="col">카테고리</th>
            <th data-s1-part="header-cell" data-align="center" scope="col">수량</th>
            <th data-s1-part="header-cell" data-align="center" scope="col">상태</th>
          </tr>
        </thead>
        <tbody>${body}</tbody>
      </table>
    </div>`;
}

/* 셀 한 칸짜리 표본 — 정본 Table Cell 세트의 낱개 변형만 보여준다.
   정본에서 셀이 가진 선은 **아래 1px(color/table/border/default) 하나뿐**이다.
   위·아래의 진한 선(위 2px · 아래 1px, border/strong)은 셀이 아니라 **표 세트**가 그리는 외곽선이라
   낱개 셀 표본에서는 꺼 둔다 — 켜 두면 정본에 없는 모습이 된다(river 지적 2026-09-02). */
function tableCellSample({ size = "md", type = "cell", state = "default", align = "left", width = null } = {}) {
  const forced = state === "default" ? "" : ` data-state="${state}"`;
  /* 열 정렬 — 정본 Table Cell 의 Align 축(Left·Center)과 1:1. 기본(왼쪽)은 속성을 붙이지 않는다. */
  const aligned = align === "center" ? ` data-align="center"` : "";
  const inner = type === "header"
    ? `<thead><tr><th data-s1-part="header-cell" scope="col"${aligned}>헤더</th></tr></thead>`
    : `<tbody><tr data-s1-part="row"><td data-s1-part="cell"${forced}${aligned}>셀 내용</td></tr></tbody>`;
  /* 정렬은 열 폭이 있어야 눈에 보인다 — 정렬 표본만 폭을 고정한다(그 외는 종전대로 내용 폭). */
  const boxW = width ? `${width}px` : "auto";
  return `<div data-guide-sample="part" data-s1-component="table" data-size="${size}" class="is-preview" style="width:${boxW};border-top:0;border-bottom:0;">
      <table data-s1-part="table" style="width:${boxW};">${inner}</table>
    </div>`;
}

function tableStateMatrix() {
  /* Action — 표 + 페이지네이션 + 보기 셀렉박스(정본 푸터 구성). 뒤 둘은 각자의 배포본이다. */
  const action = `<div class="comp-action-top"><div class="matrix-col-header-action">Action</div>
      <div class="uilg-table-action" style="display:flex;flex-direction:column;gap:12px;width:100%;">
        ${tableMarkup()}
        <div style="display:flex;align-items:center;justify-content:center;position:relative;">
          ${paginationMarkup({ page: 1, total: 5 })}
          <div style="position:absolute;right:0;">${selectMarkup({
            size: "xxsm",
            ariaLabel: "한 페이지에 보여줄 행 수",
            valueText: "15개씩 보기",
            rows: [
              { label: "10개씩 보기", selected: false },
              { label: "15개씩 보기", selected: true },
              { label: "20개씩 보기", selected: false },
              { label: "50개씩 보기", selected: false }
            ]
          })}</div>
        </div>
      </div></div>`;

  /* 크기 3종 — 정본 사다리(MD 44 · SM 38 · XSM 34, XSM 만 글자 12) */
  const sizes = [["MD", "md", "행 44 · 글자 14"], ["SM", "sm", "행 38 · 글자 14"], ["XSM", "xsm", "행 34 · 글자 12"]];
  const sizeRows = sizes.map(([label, size, note]) => `<div class="matrix-row-label">${label} · ${note}</div><div class="comp-state-cell">${tableMarkup({
    size,
    isPreview: true,
    rows: [
      { name: "기본 행", category: "카테고리 A", count: 10, state: "활성" },
      { name: "Hover 행", category: "카테고리 B", count: 20, state: "검토중", forceState: "hover" },
      { name: "선택된 행", category: "카테고리 C", count: 30, state: "완료", selected: true }
    ]
  })}</div>`).join("");

  /* 셀 단위 — 정본 Table Cell 세트(Size × Type × Variant).
     부품(바디 셀 / 헤더 셀)으로 먼저 묶고 그 안에서 크기를 비교한다(river 지시 2026-09-02).
     헤더는 정본에 Default 변형만 있어 상태 열이 하나뿐이다. */
  /* 두 표는 같은 열 격자를 쓴다 — 헤더 셀의 Default 가 아래 바디 셀의 Default 와 같은 세로선에
     놓이게 하기 위함이다(river 지시 2026-09-02). 헤더에 없는 Hover·Selected 칸은 비워 둔다. */
  const CELL_GRID_COLUMNS = "150px repeat(3, minmax(120px, 1fr))";
  const cellGrid = (type) => {
    const states = type === "header" ? ["default", null, null] : ["default", "hover", "selected"];
    const headers = type === "header"
      ? '<div class="matrix-col-header">Default</div><div class="matrix-col-header"></div><div class="matrix-col-header"></div>'
      : '<div class="matrix-col-header">Default</div><div class="matrix-col-header">Hover</div><div class="matrix-col-header">Selected</div>';
    const rows = sizes.map(([label, size, note]) =>
      `<div class="matrix-row-label">${label} · ${note}</div>${states.map((state) => `<div class="comp-state-cell">${state ? tableCellSample({ size, type, state }) : ""}</div>`).join("")}`
    ).join("");
    return `<div class="comp-state-matrix" style="grid-template-columns:${CELL_GRID_COLUMNS};">
        <div class="matrix-col-header">크기</div>${headers}
        ${rows}
      </div>`;
  };

  return `<div class="platform-section"><div class="preview-area">${action}
    <div class="uilg-variant-block">
      <div class="variant-label">세트 — 크기별 표 전체</div>
      <div class="comp-state-matrix" style="grid-template-columns:150px minmax(0,1fr);">
        <div class="matrix-col-header">크기</div>
        <div class="matrix-col-header">기본 · Hover · 선택</div>
        ${sizeRows}
      </div>
    </div>
    <hr class="uilg-separator">
    <div class="uilg-variant-block">
      <div class="variant-label">셀 단위 — 헤더 셀 <span style="font-weight:400;font-size:11px;color:#9ca3af;text-transform:none;letter-spacing:0;">— 정본에 Default 변형만 있습니다 · 셀이 가진 선은 아래 1px 하나뿐입니다(표 위·아래 진한 선은 표 세트 몫)</span></div>
      ${cellGrid("header")}
    </div>
    <hr class="uilg-separator">
    <div class="uilg-variant-block">
      <div class="variant-label">셀 단위 — 바디 셀</div>
      ${cellGrid("cell")}
    </div>
    <hr class="uilg-separator">
    <div class="uilg-variant-block">
      <div class="variant-label">열 정렬 — 왼쪽 · 가운데 <span style="font-weight:400;font-size:11px;color:#9ca3af;text-transform:none;letter-spacing:0;">— 기본은 왼쪽입니다. 수량·상태처럼 짧은 값만 열 단위로 가운데를 씁니다 · 좌우 여백 16은 그대로입니다</span></div>
      <div class="comp-state-matrix" style="grid-template-columns:150px repeat(2, minmax(120px, 1fr));">
        <div class="matrix-col-header">부품</div>
        <div class="matrix-col-header">왼쪽 (기본)</div>
        <div class="matrix-col-header">가운데</div>
        ${["header", "cell"].map((type) => `<div class="matrix-row-label">${type === "header" ? "헤더 셀" : "바디 셀"}</div>` +
          ["left", "center"].map((align) => `<div class="comp-state-cell">${tableCellSample({ type, align, width: 180 })}</div>`).join("")).join("")}
      </div>
    </div></div></div>`;
}

function paginationStateMatrix() {
  const states = [["한 페이지", 1, 1], ["첫 페이지", 1, 6], ["마지막 페이지", 6, 6], ["중간 페이지", 4, 6]];
  const action = `<div class="comp-action-top"><div class="matrix-col-header-action">Action</div>${paginationMarkup()}</div>`;
  return `<div class="platform-section"><div class="preview-area">${action}<div class="comp-state-matrix" style="grid-template-columns:120px minmax(0,1fr);"><div class="matrix-col-header">상태</div><div class="matrix-col-header"></div>${states.map(([label, page, total]) => `<div class="matrix-row-label">${label}</div><div class="comp-state-cell">${paginationMarkup({ page, total, preview: true })}</div>`).join("")}</div></div></div>`;
}

/* ── State matrix: Textarea ──
   정본 buildTextarea 는 State 축 하나뿐이다(크기·라벨·안내문구 부품 없음).
   Focus 는 미리보기 칸에 초점을 줄 수 없어 검수 전용 data-force-state 로만 표시한다. */

let textareaId = 0;

function textareaMarkup({ breakName = "pc", value = "", state = "default", isPreview = false } = {}) {
  textareaId += 1;
  const id = `guide-textarea-${breakName}-${textareaId}`;
  const force = state === "focus" ? ' data-force-state="focus"' : "";
  const preview = isPreview ? ' class="is-preview"' : "";
  const attrs = [
    `id="${id}"`,
    'data-s1-part="control"',
    'rows="3"',
    'aria-label="설명"',
    'placeholder="여러 줄 내용을 입력하세요"',
    state === "disabled" ? "disabled" : "",
    state === "readonly" ? "readonly" : "",
    isPreview ? 'tabindex="-1"' : ""
  ].filter(Boolean).join(" ");
  return `<div data-s1-component="textarea" data-break="${breakName}"${force}${preview}>
      <textarea ${attrs}>${escapeHtml(value)}</textarea>
    </div>`;
}

function textareaStateMatrix() {
  const states = [
    { label: "Default", opts: {} },
    { label: "Focus", opts: { state: "focus" }, note: "검수 표시" },
    { label: "Filled", opts: { value: "회의 내용을 정리했습니다." } },
    { label: "Disabled", opts: { state: "disabled" } },
    { label: "Read-only", opts: { state: "readonly", value: "읽기 전용 내용입니다." } }
  ];

  function actionSection(breakName) {
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-textarea-action">${textareaMarkup({ breakName })}</div>
      <p class="uilg-demo-note">직접 입력해 보세요. 오른쪽 아래를 끌면 세로 방향으로만 커집니다. 라벨은 화면에서 따로 연결합니다.</p>
    </div>`;
  }

  function stateSection(breakName) {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      states.map((state) => `<div class="matrix-col-header">${state.label}${state.note ? `<span class="uilg-size-dim">${state.note}</span>` : ""}</div>`).join("");
    const row = `<div class="matrix-row-label">Text Area</div>` +
      states.map((state) => `<div class="comp-state-cell">${textareaMarkup({
        breakName, isPreview: true, ...state.opts
      })}</div>`).join("");
    return `<div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${states.length}, minmax(150px, 1fr));">${header}${row}</div>`;
  }

  const content = (breakName) => `${actionSection(breakName)}
    ${stateSection(breakName)}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${content("pc")}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">
        ${content("mobile")}
      </div>
    </div>`;
}

/* ── State matrix: Multi Toggle ──
   정본은 md·sm 두 크기와 상태 4종만 가진다. 모바일 크기가 없어 PC 전용으로 한 벌만 둔다.
   Hover 는 미리보기 칸에 마우스를 올릴 수 없어 검수 전용 data-force-state 로만 표시한다. */

let multiToggleId = 0;

function multiToggleMarkup({ size = "md", selected = 0, disabled = false, forceState = "", isPreview = false } = {}) {
  multiToggleId += 1;
  const cells = [["left", "왼쪽"], ["center", "가운데"], ["right", "오른쪽"]];
  const preview = isPreview ? ' class="is-preview"' : "";
  const body = cells.map(([value, label], index) => {
    const checked = index === selected;
    const force = forceState && index === 1 && !checked ? ` data-force-state="${forceState}"` : "";
    return `<button type="button" data-s1-part="cell" role="radio" aria-checked="${checked}" data-value="${value}"${disabled ? ' aria-disabled="true"' : ""}${force}>${label}</button>`;
  }).join("");
  return `<div data-s1-component="multi-toggle" data-size="${size}" role="radiogroup" aria-label="정렬 기준 ${multiToggleId}"${preview}>${body}</div>`;
}

function multiToggleStateMatrix() {
  const sizes = [["md", "MD", "44px"], ["sm", "SM", "34px"]];
  const states = [
    { label: "Default", opts: { selected: -1 } },
    { label: "Hover", opts: { selected: -1, forceState: "hover" }, note: "검수 표시" },
    { label: "Selected", opts: { selected: 1 } },
    { label: "Disabled", opts: { selected: -1, disabled: true } }
  ];

  const actionHeader = `<div class="matrix-col-header" style="grid-column:1"></div>` +
    sizes.map(([, sLabel, dim]) => `<div class="matrix-col-header">${sLabel}<span class="uilg-size-dim">${dim}</span></div>`).join("");
  const liveRow = `<div class="matrix-row-label">Multi Toggle</div>` +
    sizes.map(([size]) => `<div class="comp-state-cell">${multiToggleMarkup({ size })}</div>`).join("");
  const action = `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${sizes.length}, minmax(200px, 1fr));">${actionHeader}${liveRow}</div>
      <p class="uilg-demo-note">칸을 누르면 선택이 옮겨집니다. 키보드에서는 화살표 키로 이동하며 이동과 동시에 선택됩니다.</p>
    </div>`;

  const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
    states.map((state) => `<div class="matrix-col-header">${state.label}${state.note ? `<span class="uilg-size-dim">${state.note}</span>` : ""}</div>`).join("");
  const rows = sizes.map(([size, sLabel, dim]) =>
    `<div class="matrix-row-label">${sLabel}<span>${dim}</span></div>` +
    states.map((state) => `<div class="comp-state-cell">${multiToggleMarkup({ size, isPreview: true, ...state.opts })}</div>`).join("")).join("");
  const grid = `<div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${states.length}, minmax(200px, 1fr));">${header}${rows}</div>`;

  return `
    <div class="platform-section">
      <div class="preview-area">${action}
      ${grid}</div>
    </div>`;
}

/* ── State matrix: Modal ──
   정본 buildModalShell 의 변형은 Break(PC·Mobile) × Footer(Single·Dual) 4가지뿐이고 상태 축이 없다.
   Action 은 실제로 열리는 진짜 모달(딤이 화면을 덮는다)이고, 아래 칸은 지면에 눕혀 보여주는 검수 표시다. */

let modalId = 0;

function modalMarkup({ breakName = "pc", footer = "dual", isPreview = false } = {}) {
  modalId += 1;
  const titleId = `guide-modal-title-${modalId}`;
  const messageId = `guide-modal-message-${modalId}`;
  const preview = isPreview ? ' class="is-preview"' : "";
  const mobile = breakName === "mobile";
  const buttonSize = mobile ? "lg" : "xxsm";
  const title = mobile
    ? (footer === "dual" ? "자동 로그인 설정" : "업데이트 안내")
    : "제목 영역";
  const message = mobile
    ? (footer === "dual" ? "로그인되었어요.\n다음부터 자동으로 로그인할까요?" : "보다 안정적인 서비스 이용을 위해 최신\n버전으로 업데이트해 주세요.")
    : (footer === "dual" ? "변경한 내용이 저장되지 않고 사라집니다.\n정말 이 작업을 진행하시겠어요?" : "요청하신 작업이 정상적으로 처리되었습니다.\n변경된 내용은 목록에서 확인하실 수 있어요.");
  const labels = footer === "dual"
    ? (mobile ? ["아니오", "네"] : ["취소", "확인"])
    : (mobile ? ["업데이트"] : ["확인"]);
  const buttons = footer === "dual"
    ? `<button type="button" data-s1-component="button" data-variant="secondary" data-size="${buttonSize}" data-modal-close${isPreview ? ' tabindex="-1"' : ""}><span data-s1-part="label">${labels[0]}</span></button>` +
      `<button type="button" data-s1-component="button" data-variant="primary" data-size="${buttonSize}" data-modal-close${isPreview ? ' tabindex="-1"' : ""}><span data-s1-part="label">${labels[1]}</span></button>`
    : `<button type="button" data-s1-component="button" data-variant="primary" data-size="${buttonSize}" data-modal-close${isPreview ? ' tabindex="-1"' : ""}><span data-s1-part="label">${labels[0]}</span></button>`;
  /* 정본은 PC 에만 닫기(X)를 둔다. Mobile 변형에는 없다. */
  const close = mobile ? "" : `<button type="button" data-s1-part="close" aria-label="닫기" data-modal-close${isPreview ? ' tabindex="-1"' : ""}></button>`;
  return `<div data-s1-component="modal" data-break="${breakName}" data-footer="${footer}"${preview}${isPreview ? "" : " hidden"}>
      <div data-s1-part="overlay"></div>
      <div data-s1-part="panel" role="dialog" aria-modal="true" aria-labelledby="${titleId}" aria-describedby="${messageId}" tabindex="-1">
        <div data-s1-part="content">
          <div data-s1-part="header">
            <h2 data-s1-part="title" id="${titleId}">${title}</h2>
            ${close}
          </div>
          <div data-s1-part="body">
            <p data-s1-part="message" id="${messageId}">${escapeHtml(message)}</p>
          </div>
        </div>
        <div data-s1-part="footer">${buttons}</div>
      </div>
    </div>`;
}

function modalStateMatrix() {
  const footers = [["single", "Single", "버튼 1개"], ["dual", "Dual", "버튼 2개"]];

  function actionSection(breakName) {
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-modal-action">
        <button type="button" data-s1-component="button" data-variant="secondary" data-size="${breakName === "mobile" ? "lg" : "md"}" data-modal-open><span data-s1-part="label">모달 열기</span></button>
        ${modalMarkup({ breakName, footer: "dual" })}
      </div>
      <p class="uilg-demo-note">눌러서 열어 보세요. Esc 키로 닫히고, Tab 키는 팝업 안에서만 돕니다. 닫으면 열기 전 자리로 초점이 돌아옵니다.</p>
    </div>`;
  }

  function stateSection(breakName) {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      footers.map(([, label, dim]) => `<div class="matrix-col-header">${label}<span class="uilg-size-dim">${dim}</span></div>`).join("");
    const row = `<div class="matrix-row-label">Modal<span>${breakName === "mobile" ? "300px" : "360px"}</span></div>` +
      footers.map(([footer]) => `<div class="comp-state-cell">${modalMarkup({ breakName, footer, isPreview: true })}</div>`).join("");
    return `<div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${footers.length}, minmax(420px, 1fr));">${header}${row}</div>`;
  }

  const content = (breakName) => `${actionSection(breakName)}
    ${stateSection(breakName)}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${content("pc")}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">
        ${content("mobile")}
      </div>
    </div>`;
}

/* ── State matrix: Modal Content ──
   정본 buildModalContent 의 변형은 Size(MD·LG·XL) × Footer(Single·Dual) 6가지뿐이고 PC 전용이다
   (breaks.mobile 없음 — river 지시 2026-09-08 "확인계열은 360으로만, 컨텐츠계열은 MD 이상부터").
   Action 은 실제로 열리는 진짜 모달(딤이 화면을 덮는다)이고, 아래 칸은 지면에 눕혀 보여주는 검수 표시다. */

let modalContentId = 0;

function modalContentMarkup({ size = "md", footer = "dual", isPreview = false } = {}) {
  modalContentId += 1;
  const titleId = `guide-modal-content-title-${modalContentId}`;
  const preview = isPreview ? " is-preview" : "";
  const tabindex = isPreview ? ' tabindex="-1"' : "";
  const buttons = footer === "dual"
    ? `<button type="button" data-s1-component="button" data-variant="secondary" data-size="xxsm" data-modal-close${tabindex}><span data-s1-part="label">취소</span></button>` +
      `<button type="button" data-s1-component="button" data-variant="primary" data-size="xxsm" data-modal-close${tabindex}><span data-s1-part="label">확인</span></button>`
    : `<button type="button" data-s1-component="button" data-variant="primary" data-size="xxsm" data-modal-close${tabindex}><span data-s1-part="label">확인</span></button>`;
  return `<div data-s1-component="modal-content" data-size="${size}" data-footer="${footer}" class="${preview}"${isPreview ? "" : " hidden"}>
      <div data-s1-part="overlay"></div>
      <div data-s1-part="panel" role="dialog" aria-modal="true" aria-labelledby="${titleId}" tabindex="-1">
        <div data-s1-part="header">
          <h2 data-s1-part="title" id="${titleId}">제목 영역</h2>
          <button type="button" data-s1-part="close" aria-label="닫기" data-modal-close${tabindex}></button>
        </div>
        <div data-s1-part="content-area">
          <div data-s1-part="content">
            <span data-s1-part="content-label">컨텐츠 영역</span>
          </div>
        </div>
        <div data-s1-part="footer">${buttons}</div>
      </div>
    </div>`;
}

/* 6칸(Size 3 × Footer 2)을 실제 폭 그대로 놓으면 XL(1200)이 한 칸을 다 차지해 한 화면에 Single 열 하나만
   보이고 세로도 3239px 로 늘어져 크기 비교가 안 됐다(river 2026-09-08 지적). 실제 폭 값(520/1000/1200 등)은
   손대지 않고 "표시만" transform:scale 로 축소한다 — 520:1000:1200 비율이 그대로 유지되어 오히려
   크기 비교표의 목적(상대적 크기 차이를 한눈에)에 맞다. 실물 "모달 열기" 버튼(Action 스트립)은 축소하지 않는다. */
const MODAL_CONTENT_PREVIEW_SCALE = 0.3;
/* is-preview 오버라이드(ui-library-guide.css)가 modal-content 바깥 여백으로 spacing-24(24px)를
   사방에 준다 — 스케일 전 실제 렌더 크기 = 패널 w/h + 그 24px×2. 축소 전 자리를 이 값으로 예약해야
   칸이 잘리거나 옆 칸을 침범하지 않는다. */
const MODAL_CONTENT_PREVIEW_PAD = 24;

function modalContentStateMatrix() {
  const sizes = [["md", "MD", 520, 336], ["lg", "LG", 1000, 587], ["xl", "XL", 1200, 587]];
  const footers = [["single", "Single"], ["dual", "Dual"]];
  const scale = MODAL_CONTENT_PREVIEW_SCALE;
  const pad2 = MODAL_CONTENT_PREVIEW_PAD * 2;

  const action = `<div class="comp-action-top">
    <div class="matrix-col-header-action">Action</div>
    <div class="uilg-modal-content-action">
      <button type="button" data-s1-component="button" data-variant="secondary" data-size="md" data-modal-open><span data-s1-part="label">콘텐츠 모달 열기</span></button>
      ${modalContentMarkup({ size: "lg", footer: "dual" })}
    </div>
    <p class="uilg-demo-note">눌러서 열어 보세요. 본문은 입력창·표·이미지가 들어갈 자리표시입니다(실제 화면에서 교체). 콘텐츠가 늘면 패널이 커지다가 화면 높이의 85%에서 멈추고 본문 안에서만 스크롤합니다.</p>
  </div>`;

  const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
    footers.map(([, label]) => `<div class="matrix-col-header">${label}</div>`).join("");
  const rows = sizes.map(([size, sLabel, w, h]) => {
    const outerW = w + pad2;
    const outerH = h + pad2;
    const scaledW = Math.round(outerW * scale);
    const scaledH = Math.round(outerH * scale);
    const cells = footers.map(([footer]) => `<div class="comp-state-cell">
      <div class="uilg-modal-content-scale" style="width:${scaledW}px;height:${scaledH}px;">
        <div class="uilg-modal-content-scale-inner" style="width:${outerW}px;transform:scale(${scale});">${modalContentMarkup({ size, footer, isPreview: true })}</div>
      </div>
    </div>`).join("");
    return `<div class="matrix-row-label">${sLabel}<span>${w}×${h}</span></div>${cells}`;
  }).join("");
  const maxScaledW = Math.round((1200 + pad2) * scale);
  const grid = `<div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${footers.length}, minmax(${maxScaledW + 16}px, 1fr));">${header}${rows}</div>`;

  return `
    <div class="platform-section">
      <div class="preview-area">${action}
      ${grid}</div>
    </div>`;
}

/* ── Mobile Bottom Nav — 탭 아이템 1칸(60×60). 360×780 모바일 목업은 안내 화면 전용 크롬이다(D6).
   목업 크롬(휴대폰 테두리·상태바 그림·화면 내용 스켈레톤)은 dist 부품이 아니므로 data-s1-component 을
   갖지 않는다 — 부품 표본에는 data-guide-sample="part", 조립 표본에는 "set" 을 붙인다(부품 표본 격리). */
function mobileBottomNavItemMarkup({ selected = false, label = "라벨" } = {}) {
  return `<button type="button" data-s1-component="mobile-bottom-nav" role="tab" aria-selected="${selected}">
    <span data-s1-part="icon" aria-hidden="true"></span>
    <span data-s1-part="label">${label}</span>
  </button>`;
}

/* 상태바는 정본 StatusBar(App 360×27)를 그대로 옮긴 그림이다 — 배포 부품이 아니다(D5).
   정본 populateStatusRow(build-components.ts:5741-5770): 좌우 SPACE_BETWEEN · 패딩 20/16 ·
   왼쪽 "12:30"(12 Medium, text/body/secondary) · 오른쪽 묶음 간격 6(신호 17×12 · wifi 16×12 ·
   배터리 24×12 · "78%"), 아이콘색 icon/gray-dark. wifi 는 정본 SHELL_WIFI_SVG 를 그대로 쓰되
   색만 하드코딩 hex 대신 currentColor 로 받는다.
   배경: 정본은 상태바 인스턴스의 fills 를 비워(build-components.ts:3498-3500) 헤더 프레임의
   배경이 그대로 비쳐 보이게 한다 — 그래서 Home 유형에서는 상태바도 bg/home 이다. 이 그림도
   같은 기제를 쓴다(headerBg 로 위쪽 크롬 전체를 한 색으로 칠한다). */
/* wifi — 정본 SHELL_WIFI_SVG 그대로(색만 hex → currentColor). 마스크 id 는 인스턴스마다 새로 만든다:
   이 그림은 한 페이지에 여러 번(부품 2종 × PC/Mobile 블록) 그려지는데 id 가 같으면 문서 안에서 중복되고,
   url(#...) 은 문서 순서상 첫 번째를 가리킨다. 그 첫 번째가 숨겨진(display:none) 블록 안이면 마스크가
   적용되지 않아 호 2겹이 속 찬 부채꼴로 뭉개진다(2026-09-02 F-5, 검증자가 격리 실험으로 실증).
   ※ 함정 T5 의 확장판이다 — 중복은 라디오 name·id 만이 아니라 SVG 내부 id 에서도 난다. */
let phoneWifiSeq = 0;
function phoneWifiSvg() {
  const uid = `uilg-sw${++phoneWifiSeq}`;
  return `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="${uid}a" fill="white"><path d="M2.34315 4.34315C3.84344 2.84286 5.87827 2 8 2C10.1217 2 12.1566 2.84285 13.6569 4.34314L8 10L2.34315 4.34315Z"/></mask><path d="M2.34315 4.34315C3.84344 2.84286 5.87827 2 8 2C10.1217 2 12.1566 2.84285 13.6569 4.34314L8 10L2.34315 4.34315Z" stroke="currentColor" stroke-width="3.2" mask="url(#${uid}a)"/><mask id="${uid}b" fill="white"><path d="M4.46447 6.46447C5.40215 5.52678 6.67392 5 8 5C9.32608 5 10.5979 5.52678 11.5355 6.46447L8 10L4.46447 6.46447Z"/></mask><path d="M4.46447 6.46447C5.40215 5.52678 6.67392 5 8 5C9.32608 5 10.5979 5.52678 11.5355 6.46447L8 10L4.46447 6.46447Z" stroke="currentColor" stroke-width="3.2" mask="url(#${uid}b)"/><circle cx="7.9998" cy="10.2" r="1.2" fill="currentColor"/></svg>`;
}

function phoneStatusBar() {
  const bars = [[0, 8, 3, 4], [4.5, 6, 3, 6], [9, 4, 3, 8], [13.5, 1, 3, 11]]
    .map(([x, y, w, h]) => `<i style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"></i>`).join("");
  return `<div class="uilg-phone-status" aria-hidden="true">
    <span class="uilg-phone-status-time">12:30</span>
    <span class="uilg-phone-status-right">
      <span class="uilg-phone-signal">${bars}</span>
      <span class="uilg-phone-wifi">${phoneWifiSvg()}</span>
      <span class="uilg-phone-battery"><i class="uilg-phone-battery-shell"></i><i class="uilg-phone-battery-tip"></i><i class="uilg-phone-battery-fill"></i></span>
      <span class="uilg-phone-status-pct">78%</span>
    </span>
  </div>`;
}

function phoneMockup(bodyHtml, { headerBg = "level-0", chromeGap = false } = {}) {
  return `<div class="uilg-phone" data-header-bg="${headerBg}" role="img" aria-label="모바일 화면 목업">
    ${phoneStatusBar()}
    ${chromeGap ? '<div class="uilg-phone-chrome-gap" aria-hidden="true"></div>' : ""}
    <div class="uilg-phone-screen">${bodyHtml}</div>
  </div>`;
}

/* 유형별 위쪽 크롬 배경 — 정본 buildMobileHeaderVariant(:3107·3132) 의 isHome 분기 그대로. */
function mobileHeaderBg(variant) {
  return variant.startsWith("home-") ? "home" : "level-0";
}

function mobileBottomNavStateMatrix() {
  const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
    `<div class="matrix-col-header">Unselected</div><div class="matrix-col-header">Selected</div>`;
  const row = `<div class="matrix-row-label">Tab Item<span>60×60</span></div>` +
    `<div class="comp-state-cell"><span data-guide-sample="part">${mobileBottomNavItemMarkup({ selected: false })}</span></div>` +
    `<div class="comp-state-cell"><span data-guide-sample="part">${mobileBottomNavItemMarkup({ selected: true })}</span></div>`;

  /* PC·Mobile 두 블록에 같은 문자열을 넣지 않고 블록마다 새로 만든다 — 목업 안 SVG 의 마스크 id 가
     문서 안에서 중복되면 url(#...) 이 숨겨진 블록의 것을 가리켜 그림이 뭉개진다(2026-09-02 F-5). */
  const block = () => {
    const bar = ["홈", "검색", "알림", "내 정보"]
      .map((label, index) => mobileBottomNavItemMarkup({ selected: index === 0, label })).join("");
    const mock = phoneMockup(`
      <div class="uilg-phone-content" aria-hidden="true">
        <div class="uilg-phone-skeleton uilg-phone-skeleton--title"></div>
        <div class="uilg-phone-skeleton uilg-phone-skeleton--line"></div>
        <div class="uilg-phone-card"></div>
        <div class="uilg-phone-card"></div>
      </div>
      <nav data-guide-sample="set" role="tablist" aria-label="하단 내비게이션" style="display:flex;justify-content:space-between;background:var(--color-navigation-bg);">${bar}</nav>`);
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-mobile-action">${mock}</div>
      <p class="uilg-demo-note">배포 부품은 아이템 1칸뿐입니다. 위 4탭 바는 화면이 조립한 예시이고, 배경은 --color-navigation-bg 입니다.</p>
    </div>
    <div class="comp-state-matrix" style="grid-template-columns: 110px repeat(2, minmax(120px,1fr));">${header}${row}</div>`;
  };

  return `<div class="platform-section platform-section-pc"><div class="preview-area">${block()}</div></div>
    <div class="platform-section platform-section-mobile"><div class="preview-area">${block()}</div></div>`;
}

/* ── Mobile Header — Type 6종. StatusBar·Platform 축은 river 결정(D5)으로 배포본에서 뺐다.
   안내 화면 목업 안에서만 상태바를 그림으로 보여준다(D6). */
function mobileHeaderMarkup(variant) {
  const back = `<button type="button" data-s1-part="back" aria-label="이전"><span data-s1-part="back-icon" aria-hidden="true"></span></button>`;
  const close = `<button type="button" data-s1-part="close" aria-label="닫기"><span data-s1-part="close-icon" aria-hidden="true"></span></button>`;
  const spacer = `<span data-s1-part="spacer" aria-hidden="true"></span>`;
  if (variant === "home-title") {
    return `<header data-guide-sample="part" data-s1-component="mobile-header" data-variant="home-title"><h1 data-s1-part="title">홈 타이틀</h1></header>`;
  }
  if (variant === "home-title-subtitle") {
    return `<header data-guide-sample="part" data-s1-component="mobile-header" data-variant="home-title-subtitle">
      <div data-s1-part="stack">
        <div data-s1-part="title-row"><h1 data-s1-part="title">홈 타이틀</h1><span data-s1-part="arrow-icon" aria-hidden="true"></span></div>
        <p data-s1-part="subtitle">홈 서브타이틀</p>
      </div>
      <button type="button" data-s1-part="notification" aria-label="알림"><span data-s1-part="notification-icon" aria-hidden="true"></span></button>
    </header>`;
  }
  const hasClose = variant.endsWith("-close");
  const hasTitle = !variant.includes("no-title");
  return `<header data-guide-sample="part" data-s1-component="mobile-header" data-variant="${variant}">
    ${back}
    ${hasTitle ? '<h1 data-s1-part="title">스탠다드형 타이틀</h1>' : '<span data-s1-part="title" aria-hidden="true"></span>'}
    ${hasClose ? close : spacer}
  </header>`;
}

const MOBILE_HEADER_TYPES = [
  ["Home / Title", "home-title"],
  ["Home / Title + Subtitle + 1 Icon", "home-title-subtitle"],
  ["Standard / Title", "standard-title"],
  ["Standard / Title + Close", "standard-title-close"],
  ["Standard / No Title", "standard-no-title"],
  ["Standard / No Title + Close", "standard-no-title-close"]
];
const MOBILE_HEADER_DEFAULT_TYPE = "standard-title";

/* Action 영역 — 유형을 옵션칩으로 골라 목업 위에 얹어 본다(river 지시 2026-09-02).
   칩은 PC·Mobile 두 섹션에 같은 내용이 두 번 그려지므로 name·id 를 break 별로 나눈다
   — 같은 name 의 라디오는 하나만 선택될 수 있어 먼저 그려진 쪽 선택이 조용히 풀린다(함정 T5). */
function mobileHeaderActionBlock(breakName) {
  const mock = phoneMockup(`
    <div class="uilg-phone-header-slot">${mobileHeaderMarkup(MOBILE_HEADER_DEFAULT_TYPE)}</div>
    <div class="uilg-phone-content" aria-hidden="true">
      <div class="uilg-phone-skeleton uilg-phone-skeleton--title"></div>
      <div class="uilg-phone-skeleton uilg-phone-skeleton--line"></div>
      <div class="uilg-phone-card"></div>
    </div>`, { headerBg: mobileHeaderBg(MOBILE_HEADER_DEFAULT_TYPE), chromeGap: true });

  const chips = MOBILE_HEADER_TYPES.map(([label, variant]) => {
    const inputId = `mh-type-${breakName}-${variant}`;
    const on = variant === MOBILE_HEADER_DEFAULT_TYPE;
    return `<label class="uilg-option-chip${on ? " is-on" : ""}" for="${inputId}">
      <input id="${inputId}" type="radio" name="mh-type-${breakName}" value="${variant}" data-mobile-header-type${on ? " checked" : ""} hidden>
      <span class="uilg-option-chip-text">${label}</span>
    </label>`;
  }).join("");

  /* 칩은 목업 왼쪽에 세로 6행으로 세운다 — 목업이 길어서 아래에 두면 모니터에서 잘린다(river 지시). */
  return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-mobile-action uilg-mobile-action--with-picker">
        <div class="uilg-option-chips uilg-option-chips--stacked" role="group" aria-label="헤더 유형 선택">${chips}</div>
        ${mock}
      </div>
      <p class="uilg-demo-note">왼쪽에서 유형을 고르면 목업의 헤더가 바뀝니다. 상태바(시간·배터리)는 그림일 뿐 배포 부품이 아닙니다 — 실제 서비스에서는 OS·브라우저가 그립니다.</p>
    </div>`;
}

function mobileHeaderStateMatrix() {
  const rows = MOBILE_HEADER_TYPES.map(([label, variant]) => `
    <div class="review-sample" style="width:100%;">
      <p class="review-state-label">${label}</p>
      <div class="uilg-mobile-header-row">${mobileHeaderMarkup(variant)}</div>
    </div>`).join("");

  const list = `<div class="uilg-mobile-header-list">${rows}</div>`;

  return `<div class="platform-section platform-section-pc"><div class="preview-area">${mobileHeaderActionBlock("pc")}${list}</div></div>
    <div class="platform-section platform-section-mobile"><div class="preview-area">${mobileHeaderActionBlock("mobile")}${list}</div></div>`;
}

/* ── GNB ──
   정본: buildGNB(바 6종 Align×Size, build-components.ts:3627) + fillGnbMenu(메뉴 9종 Size×State, :3133).
   메뉴의 aria-current="page" 는 host 화면이 현재 경로에 맞춰 정적으로 설정하는 값이다(jsRequired=false) —
   미리보기 칸에는 마우스가 없으니 Hover 는 data-force-state="hover" 로 흉내낸다(다른 컴포넌트와 같은 방식).
   GNB 는 PC 전용(registry gnb.json doNotUse)이라 platform-section 수식자 없이 한 벌만 낸다(multi-toggle 과 같은 방식). */

let gnbId = 0;

function gnbMenuMarkup(label, { state = "default" } = {}) {
  const current = state === "selected" ? ' aria-current="page"' : "";
  const force = state === "hover" ? ' data-force-state="hover"' : "";
  return `<li><a data-s1-part="menu" href="#"${current}${force}>${label}</a></li>`;
}

function gnbMarkup({ size = "md", align = "center-between", isPreview = false } = {}) {
  gnbId += 1;
  const preview = isPreview ? " is-preview" : "";
  // 어느 메뉴도 고정 선택하지 않는다 — 예시 메뉴는 전부 같은 자격의 메뉴다(river 지시 2026-09-10).
  // Selected 시각은 아래 "메뉴 슬롯" 상태 매트릭스가 따로 보여준다.
  const menus = `<ul data-s1-part="menus">${gnbMenuMarkup("공지사항")}${gnbMenuMarkup("서비스")}${gnbMenuMarkup("통계")}</ul>`;
  const util = `<div data-s1-part="util">
      <button type="button" data-s1-part="lang">
        <span data-s1-part="lang-icon" aria-hidden="true"></span>
        <span data-s1-part="lang-label">한국어</span>
      </button>
      <button type="button" data-s1-part="account" aria-label="계정">
        <span data-s1-part="account-icon" aria-hidden="true"></span>
      </button>
      <button type="button" data-s1-part="menu-toggle" aria-label="전체 메뉴">
        <span data-s1-part="menu-icon" aria-hidden="true"></span>
      </button>
    </div>`;
  const logo = `<a data-s1-part="logo" href="#">SAMPLE LOGO</a>`;
  const body = align === "start" ? `<div data-s1-part="leading">${logo}${menus}</div>${util}` : `${logo}${menus}${util}`;
  return `<nav data-guide-sample="set" data-s1-component="gnb" data-size="${size}" data-variant="${align}" aria-label="주 메뉴 ${gnbId}" class="${preview}">${body}</nav>`;
}

/* 메뉴 슬롯 9변형은 바 안에 끼우면 밑줄·hover 차이가 작아 잘 안 보인다 — 독립 셀로 따로 크게 보여준다. */
function gnbMenuCellMarkup(size, state) {
  return `<nav data-s1-component="gnb" data-size="${size}" data-variant="center-between" aria-label="메뉴 슬롯 표본" class="is-preview uilg-gnb-menu-cell"><ul data-s1-part="menus">${gnbMenuMarkup("메뉴", { state })}</ul></nav>`;
}

/* 유틸리티 5조합(정본 buildGNBUtilIcon 의 language·menu·user on/off 조합) — GNB 바가 실제로 쓰는 것은
   all-on(첫 행) 하나뿐이지만, 언어·계정·메뉴 부품은 각자 독립된 part 라 host 가 넣고 빼서 나머지
   4조합도 그대로 낼 수 있다(registry gnb.json notInCanon.utilVariantAxis). 언어 라벨은 English/한국어
   두 값(Language Icon 축)을 번갈아 보여준다. */
const GNB_UTIL_COMBOS = [
  { language: true, account: true, menu: true, label: "언어·계정·메뉴", lang: "한국어" },
  { language: true, account: true, menu: false, label: "언어·계정", lang: "English" },
  { language: true, account: false, menu: false, label: "언어", lang: "한국어" },
  { language: false, account: true, menu: true, label: "계정·메뉴" },
  { language: false, account: true, menu: false, label: "계정" }
];

function gnbUtilMarkup(combo) {
  const parts = [];
  if (combo.language) parts.push(`<button type="button" data-s1-part="lang"><span data-s1-part="lang-icon" aria-hidden="true"></span><span data-s1-part="lang-label">${combo.lang}</span></button>`);
  if (combo.account) parts.push(`<button type="button" data-s1-part="account" aria-label="계정"><span data-s1-part="account-icon" aria-hidden="true"></span></button>`);
  if (combo.menu) parts.push(`<button type="button" data-s1-part="menu-toggle" aria-label="전체 메뉴"><span data-s1-part="menu-icon" aria-hidden="true"></span></button>`);
  return `<nav data-s1-component="gnb" data-size="md" data-variant="start" aria-label="유틸리티 표본" class="is-preview uilg-gnb-menu-cell"><div data-s1-part="util">${parts.join("")}</div></nav>`;
}

/* 조립 예시 3벌 — 상단바 + 하위메뉴 패널을 한 화면에 두고 실제로 연다/닫는다(river 지시
   2026-09-09: "액션은 하단메뉴 유형에 맞게 3개로 표출한다 — 레귤러/콤팩트1/콤팩트2").
   "SM" = GNB 바 크기 축(sm). 정렬 축은 river 지시 2026-09-10 으로 start → center-between 이다
   (로고·메뉴·유틸 3분할). center-between 은 leading 래퍼 없이 로고·메뉴·유틸이 형제로 놓인다.
   gnb.js(jsRequired=true)가 이 인스턴스를 init() 하면 살아난다(아래 mountGuide 의 런타임 초기화가
   `gnb` 를 대상에 추가한다). 미리보기용 정적 표본(.is-preview)이 아니므로 gnbId 를 그대로 써서
   벌마다 매번 고유한 id 를 만든다 — 문서 전체 id 중복 0건이 되게 한다(⚠️ 함정 §2 T5).

   ★ 핵심 규칙(registry doDont 반영): 한 GNB 안에서는 하위메뉴를 가진 메뉴가 전부 같은 유형(Type)의
   패널을 연다 — "서비스"·"통계" 두 메뉴가 벌 안에서 같은 type 을 가리킨다. 유형은 사이트가
   하나 고르는 것이지 메뉴마다 고르는 게 아니다(river 결정 2026-09-09, "이러면 안되지"). */
const GNB_ASSEMBLED_TYPE_CONTENT = {
  "regular": {
    notice: [
      { depth: "1depth", label: "공지·소식" },
      { depth: "2depth", label: "공지사항" },
      { depth: "2depth", label: "보도자료" }
    ],
    notice2: [
      { depth: "1depth", label: "자료실" },
      { depth: "2depth", label: "카탈로그" },
      { depth: "2depth", label: "매뉴얼" }
    ],
    service: [
      { depth: "1depth", label: "서비스 소개" },
      { depth: "2depth", state: "selected", label: "개요" },
      { depth: "2depth", label: "요금제" }
    ],
    service2: [
      { depth: "1depth", label: "이용 안내" },
      { depth: "2depth", label: "시작하기" },
      { depth: "2depth", label: "FAQ" }
    ],
    stats: [
      { depth: "1depth", label: "방문·매출" },
      { depth: "2depth", label: "방문자 통계" },
      { depth: "2depth", label: "매출 통계" }
    ],
    stats2: [
      { depth: "1depth", label: "리포트" },
      { depth: "2depth", label: "전체 리포트" }
    ]
  },
  "compact-1": {
    notice: [{ depth: "2depth", label: "공지사항" }],
    notice2: [{ depth: "2depth", label: "보도자료" }],
    notice3: [{ depth: "2depth", label: "자료실" }],
    service: [{ depth: "2depth", label: "개요" }],
    service2: [{ depth: "2depth", label: "요금제" }],
    service3: [{ depth: "2depth", label: "시작하기" }],
    stats: [{ depth: "2depth", label: "방문자 통계" }],
    stats2: [{ depth: "2depth", label: "매출 통계" }],
    stats3: [{ depth: "2depth", label: "리포트" }]
  },
  /* 콤팩트2 — river 지시 2026-09-10: 한 판에 항목 10개 정도. 정본 원본(A gnb list 540:6398)의
     콤팩트2 는 "묶음마다 최대 2개"라 묶음 5개 × 2 = 10 으로 채운다(줄간격 20 · 묶음 사이 80 그대로). */
  "compact-2": {
    notice: [{ depth: "2depth", label: "공지사항" }, { depth: "2depth", label: "보도자료" }],
    notice2: [{ depth: "2depth", label: "자료실" }, { depth: "2depth", label: "카탈로그" }],
    notice3: [{ depth: "2depth", label: "매뉴얼" }, { depth: "2depth", label: "브로슈어" }],
    notice4: [{ depth: "2depth", label: "이벤트" }, { depth: "2depth", label: "뉴스레터" }],
    notice5: [{ depth: "2depth", label: "채용 공고" }, { depth: "2depth", label: "입찰 공고" }],
    service: [{ depth: "2depth", label: "개요" }, { depth: "2depth", label: "요금제" }],
    service2: [{ depth: "2depth", label: "시작하기" }, { depth: "2depth", label: "FAQ" }],
    service3: [{ depth: "2depth", label: "도입 사례" }, { depth: "2depth", label: "제휴 안내" }],
    service4: [{ depth: "2depth", label: "API 안내" }, { depth: "2depth", label: "연동 가이드" }],
    service5: [{ depth: "2depth", label: "보안 정책" }, { depth: "2depth", label: "이용 약관" }],
    stats: [{ depth: "2depth", label: "방문자 통계" }, { depth: "2depth", label: "매출 통계" }],
    stats2: [{ depth: "2depth", label: "전체 리포트" }, { depth: "2depth", label: "기간 리포트" }],
    stats3: [{ depth: "2depth", label: "사용량" }, { depth: "2depth", label: "전환율" }],
    stats4: [{ depth: "2depth", label: "지역별" }, { depth: "2depth", label: "기기별" }],
    stats5: [{ depth: "2depth", label: "내보내기" }, { depth: "2depth", label: "공유 설정" }]
  }
};

function gnbAssembledColumnsMarkup(type, key) {
  const groups = Object.keys(GNB_ASSEMBLED_TYPE_CONTENT[type]).filter((k) => k.startsWith(key));
  return groups.map((g) =>
    `<ul data-s1-part="column">${GNB_ASSEMBLED_TYPE_CONTENT[type][g].map((it) => gnbSubMenuItemMarkup(it)).join("")}</ul>`
  ).join("");
}

/* 벌 하나 — align(고정 center-between)·size(고정 sm)·type 하나를 받아 상단바 + 패널 2개(서비스·통계, 같은 type)를 낸다. */
function gnbAssembledUnitMarkup(type, typeLabel) {
  gnbId += 1;
  const noticeId = `gnb-sub-menu-notice-${type}-${gnbId}`;
  const serviceId = `gnb-sub-menu-service-${type}-${gnbId}`;
  const statsId = `gnb-sub-menu-stats-${type}-${gnbId}`;
  const bar = `<nav data-s1-component="gnb" data-size="sm" data-variant="center-between" aria-label="주 메뉴 조립 표본 · ${typeLabel} ${gnbId}">
      <a data-s1-part="logo" href="#">SAMPLE LOGO</a>
      <ul data-s1-part="menus">
        <li><a data-s1-part="menu" href="#" aria-expanded="false" aria-controls="${noticeId}">공지사항</a></li>
        <li><a data-s1-part="menu" href="#" aria-expanded="false" aria-controls="${serviceId}">서비스</a></li>
        <li><a data-s1-part="menu" href="#" aria-expanded="false" aria-controls="${statsId}">통계</a></li>
      </ul>
      <div data-s1-part="util">
        <button type="button" data-s1-part="lang">
          <span data-s1-part="lang-icon" aria-hidden="true"></span>
          <span data-s1-part="lang-label">한국어</span>
        </button>
        <button type="button" data-s1-part="account" aria-label="계정">
          <span data-s1-part="account-icon" aria-hidden="true"></span>
        </button>
        <button type="button" data-s1-part="menu-toggle" aria-label="전체 메뉴">
          <span data-s1-part="menu-icon" aria-hidden="true"></span>
        </button>
      </div>
    </nav>`;
  const noticePanel = `<div data-s1-component="gnb-sub-menu" data-type="${type}" id="${noticeId}" aria-label="공지사항 하위 메뉴 ${gnbId}" hidden>
      <div data-s1-part="columns">${gnbAssembledColumnsMarkup(type, "notice")}</div>
    </div>`;
  const servicePanel = `<div data-s1-component="gnb-sub-menu" data-type="${type}" id="${serviceId}" aria-label="서비스 하위 메뉴 ${gnbId}" hidden>
      <div data-s1-part="columns">${gnbAssembledColumnsMarkup(type, "service")}</div>
    </div>`;
  const statsPanel = `<div data-s1-component="gnb-sub-menu" data-type="${type}" id="${statsId}" aria-label="통계 하위 메뉴 ${gnbId}" hidden>
      <div data-s1-part="columns">${gnbAssembledColumnsMarkup(type, "stats")}</div>
    </div>`;
  /* 패널 2개는 자리 예약 슬롯 안에 겹쳐 둔다 — 열고 닫아도 아래 내용이 밀리지 않는다(river 지시 2026-09-10).
     슬롯 높이는 그 벌에서 가장 높은 패널이 정하므로 host 가 높이를 지어내지 않는다. */
  return `
    <div class="uilg-gnb-assembled-item">
      <p class="uilg-gnb-row-label">Center-Between · SM · ${typeLabel}</p>
      <div class="uilg-gnb-assembled">${bar}<div class="uilg-gnb-panel-slot">${noticePanel}${servicePanel}${statsPanel}</div></div>
    </div>`;
}

/* 3벌 — river 확정 순서: 레귤러 → 콤팩트1 → 콤팩트2. */
function gnbAssembledMarkup() {
  return [
    gnbAssembledUnitMarkup("regular", "레귤러"),
    gnbAssembledUnitMarkup("compact-1", "콤팩트1"),
    gnbAssembledUnitMarkup("compact-2", "콤팩트2")
  ].join("");
}

function gnbStateMatrix() {
  const sizes = [["md", "MD", "56px"], ["sm", "SM", "48px"], ["xsm", "XSM", "36px"]];
  const aligns = [["center-between", "Center-Between"], ["start", "Start"]];
  const states = [["default", "Default"], ["hover", "Hover"], ["selected", "Selected"]];

  const barRows = aligns.flatMap(([align, alignLabel]) => sizes.map(([size, sizeLabel, dim]) => `
    <div class="uilg-gnb-row">
      <p class="uilg-gnb-row-label">${alignLabel} · ${sizeLabel}<span class="uilg-size-dim">${dim}</span></p>
      <div class="uilg-gnb-row-bar">${gnbMarkup({ size, align, isPreview: true })}</div>
    </div>`)).join("");

  const menuHeader = `<div class="matrix-col-header" style="grid-column:1"></div>` +
    states.map(([, label]) => `<div class="matrix-col-header">${label}</div>`).join("");
  const menuRows = sizes.map(([size, label, dim]) =>
    `<div class="matrix-row-label">${label}<span>${dim}</span></div>` +
    states.map(([state]) => `<div class="comp-state-cell">${gnbMenuCellMarkup(size, state)}</div>`).join("")).join("");
  const menuGrid = `<div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${states.length}, minmax(160px, 1fr));">${menuHeader}${menuRows}</div>`;

  return `
    <div class="platform-section">
      <div class="preview-area uilg-gnb-action-area">
        <p class="uilg-demo-note">조립 액션 3벌 — 하단메뉴 유형에 맞춰 낸 실제 배선입니다(river 지시 2026-09-09). 세 벌 모두 Center-Between 정렬·SM 크기이고, 벌마다 유형만 다릅니다(레귤러 → 콤팩트1 → 콤팩트2). 메뉴에 마우스를 올리면(또는 Tab 으로 들어가면) 아래 패널이 펼쳐지고, 바깥으로 나가면 짧은 유예 뒤 닫힙니다. Esc 로 닫으면 초점이 그 메뉴로 돌아옵니다. 한 벌 안에서는 세 메뉴가 항상 같은 유형의 패널을 엽니다 — 유형은 메뉴마다 고르는 게 아니라 사이트가 하나 고르는 것입니다. 패널이 펼쳐질 자리는 미리 비워 두어 열고 닫아도 아래 내용이 밀리지 않습니다 — 흰 패널이 잘 보이도록 이 칸 배경만 옅은 회색입니다(실제 화면 배경은 아닙니다).</p>
        <div class="uilg-gnb-assembled-wrap">${gnbAssembledMarkup()}</div>
      </div>
      <div class="preview-area">
        <p class="uilg-demo-note">GNB 설명 — 바 변형 전수. 정렬(Align) × 사이즈(Size) 6가지. 실제 폭은 화면 전체(full-width)이며 카드 폭에 맞춰 그대로 늘어납니다. (아래 바들은 하위메뉴가 안 걸려 있어 펼쳐지지 않습니다 — 위 조립 액션 3벌만 실제로 엽니다.)</p>
        <div class="uilg-gnb-list">${barRows}</div>
      </div>
      <div class="preview-area">
        <p class="uilg-demo-note">GNB 설명 — 메뉴 슬롯. 사이즈(Size) × 상태(State) 9가지. Hover 와 Selected 는 정본에서 시각이 같습니다(밑줄·글자색). Selected 에만 aria-current="page" 가 붙습니다.</p>
        ${menuGrid}
      </div>
      <div class="preview-area">
        <p class="uilg-demo-note">GNB 설명 — 유틸리티 구성 5가지. 언어·계정·전체메뉴 부품을 각각 넣고 뺄 수 있습니다. GNB 바가 실제로 쓰는 것은 첫 번째(전체)뿐입니다.</p>
        <div class="uilg-gnb-list">${GNB_UTIL_COMBOS.map((combo) => `
          <div class="uilg-gnb-row">
            <p class="uilg-gnb-row-label">${combo.label}</p>
            <div class="uilg-gnb-row-bar">${gnbUtilMarkup(combo)}</div>
          </div>`).join("")}</div>
      </div>
    </div>`;
}

/* ── GNB Sub Menu Item ──
   정본: buildGNBSubMenuItem(build-components.ts:3822). Depth(1depth=카테고리 제목·2depth=항목) 축이며
   상태는 2depth 만 갖는다(Default·Hover·Selected) — 1depth 는 Default 하나뿐이라 4변형이다.
   Hover 는 host 화면 마우스 없이 흉내내야 하므로 다른 컴포넌트와 같이 data-force-state="hover" 를 쓴다. */
function gnbSubMenuItemMarkup({ depth = "2depth", state = "default", label = null, isPreview = false } = {}) {
  const selected = state === "selected";
  const force = state === "hover" ? ' data-force-state="hover"' : "";
  const preview = isPreview ? " is-preview" : "";
  const text = label ?? (depth === "1depth" ? "카테고리 제목" : "하위 메뉴");
  // 1depth(카테고리 제목·<span>)는 상태가 없다 — 선택 표시도 hover 표시도 붙이지 않는다.
  // 2depth(항목·<a href>)만 현재 위치이자 시각인 aria-current="page" 를 쓴다(manifest htmlContract.relations).
  return depth === "1depth"
    ? `<li><span data-s1-component="gnb-sub-menu-item" data-depth="1depth" class="${preview.trim()}">${text}</span></li>`
    : `<li><a data-s1-component="gnb-sub-menu-item" data-depth="2depth" href="#"${selected ? ' aria-current="page"' : ""}${force} class="${preview.trim()}">${text}</a></li>`;
}

function gnbSubMenuItemStateMatrix() {
  const depths = [["1depth", "1Depth", "카테고리 제목"], ["2depth", "2Depth", "항목"]];
  const states = [["default", "Default"], ["hover", "Hover"], ["selected", "Selected"]];

  const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
    states.map(([, label]) => `<div class="matrix-col-header">${label}</div>`).join("");
  // 1depth(카테고리 제목)는 누를 수 없는 제목이라 상태가 없다 — Default 한 칸만 내고 나머지는 비운다
  // (river 지시 2026-09-10: "최상단 큰글씨는 셀렉티드가 안되는 항목이니 기본 색상으로 표출할 것").
  const rows = depths.map(([depth, label, dim]) =>
    `<div class="matrix-row-label">${label}<span>${dim}</span></div>` +
    states.map(([state]) => {
      if (depth === "1depth" && state !== "default") {
        return `<div class="comp-state-cell"><span class="uilg-na">해당 없음</span></div>`;
      }
      return `<div class="comp-state-cell"><ul class="uilg-gnb-submenu-item-cell">${gnbSubMenuItemMarkup({ depth, state, isPreview: true })}</ul></div>`;
    }).join("")).join("");
  const grid = `<div class="comp-state-matrix" style="grid-template-columns: 110px repeat(${states.length}, minmax(140px, 1fr));">${header}${rows}</div>`;

  const action = `<div class="comp-action-top"><div class="matrix-col-header-action">Action</div>
    <ul class="uilg-gnb-submenu-item-cell">
      ${gnbSubMenuItemMarkup({ depth: "1depth", state: "default" })}
      ${gnbSubMenuItemMarkup({ depth: "2depth", state: "selected" })}
      ${gnbSubMenuItemMarkup({ depth: "2depth", state: "default" })}
    </ul>
    <p class="uilg-demo-note">목록 안 <a>·<span> 그대로이며, 실제로 링크를 누를 수 있습니다. 1depth(카테고리 제목)는 링크가 아니라 목록의 제목 글자라 마우스를 올려도 선택돼도 늘 기본 색입니다 — 상태는 2depth(항목)만 갖습니다.</p>
  </div>`;

  return `<div class="platform-section"><div class="preview-area">${action}${grid}</div></div>`;
}

/* ── GNB Sub Menu ──
   정본: buildGNBSubMenu(build-components.ts:3864). Type(regular · compact-1 · compact-2) 3변형 — 2026-09-09 개편
   (종전 Depth 축은 없어졌다). TYPE_SPEC 은 정본 build-components.ts 의 표를 그대로 옮긴다.
   이 매트릭스는 변형 전수를 보여주는 자리라 트리거를 만들지 않고 펼쳐진 모양만 보여준다.
   여닫는 동작 자체는 gnb 가 갖는다(river 결정 2026-09-09, D4·D5) — 조립 예시는 GNB 섹션에 있다. */
const GNB_SUBMENU_TYPE_SPEC = {
  "regular": { withTitle: true, perGroup: [5, 3, 4, 5], selected: [3, 3] },
  "compact-1": { withTitle: false, perGroup: [1, 1, 1, 1, 1, 1], selected: [5, 0] },
  "compact-2": { withTitle: false, perGroup: [2, 2, 2, 2, 1], selected: [4, 0] }
};

function gnbSubMenuColumnMarkup(type, groupIndex) {
  const spec = GNB_SUBMENU_TYPE_SPEC[type];
  const items = [];
  if (spec.withTitle) items.push(gnbSubMenuItemMarkup({ depth: "1depth" }));
  for (let i = 0; i < spec.perGroup[groupIndex]; i++) {
    const isSelected = spec.selected[0] === groupIndex && spec.selected[1] === i;
    items.push(gnbSubMenuItemMarkup({ depth: "2depth", state: isSelected ? "selected" : "default" }));
  }
  return `<ul data-s1-part="column">${items.join("")}</ul>`;
}

function gnbSubMenuMarkup({ type = "regular", isPreview = false } = {}) {
  const preview = isPreview ? " is-preview" : "";
  const spec = GNB_SUBMENU_TYPE_SPEC[type];
  const columns = spec.perGroup.map((_, gi) => gnbSubMenuColumnMarkup(type, gi)).join("");
  return `<div data-guide-sample="set" data-s1-component="gnb-sub-menu" data-type="${type}" aria-label="하위 메뉴" class="${preview.trim()}">
      <div data-s1-part="columns">${columns}</div>
    </div>`;
}

function gnbSubMenuStateMatrix() {
  const types = [
    ["regular", "Regular", "제목 + 항목 목록 · 묶음 4개(5·3·4·5) · 위 32 / 아래 64"],
    ["compact-1", "Compact-1", "제목 없음 · 항목 6개가 한 줄로 · 상하 24"],
    ["compact-2", "Compact-2", "제목 없음 · 묶음 5개(2·2·2·2·1) · 상하 24 · 묶음 안 20"]
  ];
  const rows = types.map(([type, label, note]) => `
    <div class="uilg-gnb-row">
      <p class="uilg-gnb-row-label">${label}<span class="uilg-size-dim">${note}</span></p>
      <div class="uilg-gnb-row-bar">${gnbSubMenuMarkup({ type, isPreview: true })}</div>
    </div>`).join("");

  return `
    <div class="platform-section">
      <div class="preview-area">
        <p class="uilg-demo-note">하위메뉴 설명 — Type 3가지. 묶음 사이 간격 80은 세 유형 공통입니다. 묶음 안 항목 간격은 regular·compact-1이 24, compact-2가 20입니다. 묶음(컬럼)은 패널 폭이 아니라 내용 크기만큼(hug)이며 가운데 정렬됩니다. 여닫는 동작은 상단바(GNB)가 갖습니다 — 메뉴에 마우스를 올리거나 Tab 으로 들어가면 펼쳐지고, 벗어나거나 Esc 를 누르면 닫힙니다. 한 GNB 안에서는 모든 메뉴가 같은 유형의 패널을 엽니다(조립 액션 참조).</p>
        <div class="uilg-gnb-list">${rows}</div>
      </div>
    </div>`;
}

/* ── Component documentation (실제 동작 다음에 온다) ── */

/* ── Time Picker ──
   정본: buildTimePicker(트리거) · buildTimePickerDropdown(패널 8변형) · buildTimePickerCell(칸 3변형).
   미리보기 칸은 init 하지 않으므로 목록을 마크업이 직접 든다 — 이때 배포본 계약대로 각 칸에
   data-value 를 준다(없으면 확인이 값을 못 읽는다 · 독립 검증 F-1).
   Focus 칸은 정본 Focus 변형 그대로다: 트리거 문구는 placeholder "시간 선택" 이고
   패널은 TPD:focus-default(=24h/시 Selected, 확인 비활성)다(build-components.ts 2333·2559). */

const timePickerSample = {
  hour: ["08", "09", "10", "11"],
  minute: ["00", "15", "30", "45"],
  ampm: ["오전", "오후"]
};

function timePickerCell(text, { selected = false, hover = false } = {}) {
  return `<div data-s1-part="cell" role="option" data-value="${text}" aria-selected="${selected}"${hover ? ' data-force-state="hover"' : ""}>${text}</div>`;
}

function timePickerColumn(column, label, items, { selected = null, hover = null } = {}) {
  const cells = items.map((text) => timePickerCell(text, { selected: text === selected, hover: text === hover })).join("");
  return `<div data-s1-part="column" data-column="${column}" role="listbox" aria-label="${label}">${cells}</div>`;
}

const timePickerDivider = '<div data-s1-part="divider"></div>';

/* pick = 정본 Time Picker Dropdown 의 한 변형. 확인 활성 여부도 정본을 따른다
   — 시 Hover·시 Selected·분 Hover 는 비활성, 분 Selected 만 활성(build-components.ts 2533-2538). */
const timePickerPanelStates = {
  "시 Hover":    { hourHover: "09" },
  "시 Selected": { hour: "09" },
  "분 Hover":    { hour: "09", minuteHover: "30" },
  "분 Selected": { hour: "09", minute: "30" }
};

function timePickerPanel(type, pick) {
  const hour = timePickerColumn("hour", "시", timePickerSample.hour, { selected: pick.hour, hover: pick.hourHover });
  const minute = timePickerColumn("minute", "분", timePickerSample.minute, { selected: pick.minute, hover: pick.minuteHover });
  const ampm = timePickerColumn("ampm", "오전오후", timePickerSample.ampm, { selected: type === "12h" ? "오전" : null });
  const columns = type === "12h" ? [ampm, hour, minute].join(timePickerDivider) : [hour, minute].join(timePickerDivider);
  const complete = Boolean(pick.hour && pick.minute);
  return `<div data-s1-part="columns">${columns}</div>
      <div data-s1-part="footer"><button type="button" data-s1-part="confirm"${complete ? "" : " disabled"}>확인</button></div>`;
}

function timePickerMarkup({ size = "md", breakName = "pc", type = "24h", state = "default", isPreview = false, panelState = "시 Selected", sheetMode = false } = {}) {
  /* 정본 Focus = 드롭다운이 열린 상태(manifest states.focus). */
  const open = state === "focus";
  const filled = state === "filled";
  const disabled = state === "disabled";
  const force = state === "hover" ? ' data-force-state="hover"' : "";
  const preview = isPreview ? " is-preview" : "";
  const panelHidden = isPreview ? (open ? "" : " hidden") : " hidden";
  /* 정본 Focus 변형의 트리거 문구는 값이 아니라 placeholder 다 — 값이 보이는 것은 Filled 뿐이다. */
  const value = filled ? (type === "12h" ? "오전 09:30" : "09:30") : "시간 선택";
  const step = type === "12h" ? "5" : "1";
  /* Mobile 은 트리거를 누르면 목록 패널이 아니라 휠 바텀시트가 열린다(river 결정 2026-09-07).
     상태 표본도 그 형태를 따라야 한다 — 옛 목록 마크업(aria-haspopup=listbox + panel)을 그대로 두면
     겉모습은 같아도 접근성 의미와 개발 코드가 화면과 어긋난다(🤖 component-verifier 2026-09-07 A-2).
     표본은 열리지 않으므로 시트 본체는 만들지 않고 트리거만 낸다. */
  if (sheetMode) {
    return `<div data-guide-sample="set" data-s1-component="time-picker" data-size="${size}" data-break="${breakName}" data-type="${type}" data-minute-step="${step}" data-mobile-ui="wheel" class="${preview}">
      <button type="button" data-s1-part="trigger" aria-haspopup="dialog" aria-expanded="false"${filled ? ' data-filled="true"' : ""}${disabled ? " disabled" : ""}${force} aria-label="시간">
        <span data-s1-part="value">${value}</span>
        <span data-s1-part="icon" aria-hidden="true"></span>
      </button>
    </div>`;
  }

  return `<div data-guide-sample="set" data-s1-component="time-picker" data-size="${size}" data-break="${breakName}" data-type="${type}" data-minute-step="${step}" class="${preview}">
      <button type="button" data-s1-part="trigger" aria-haspopup="listbox" aria-expanded="${open}"${filled ? ' data-filled="true"' : ""}${disabled ? " disabled" : ""}${force} aria-label="시간">
        <span data-s1-part="value">${value}</span>
        <span data-s1-part="icon" aria-hidden="true"></span>
      </button>
      <div data-s1-part="panel"${panelHidden}>${timePickerPanel(type, timePickerPanelStates[panelState])}</div>
    </div>`;
}

let timePickerWheelId = 0;

function timePickerWheelMarkup({ content = "time-only" } = {}) {
  timePickerWheelId += 1;
  const sheetTitleId = `guide-time-picker-wheel-title-${timePickerWheelId}`;
  const title = content === "date-time" ? "시작 일시" : "시간 선택";
  const triggerLabel = content === "date-time" ? "시작 일시 선택" : "시간 선택";
  /* 모바일 시트는 24시간제를 제공하지 않는다 — 오전/오후 열이 들어간 12시간제 휠 하나뿐이다
     (river 결정 2026-09-07). 정본도 두 변형 모두 4열(오전/오후·시·콜론·분)이다
     (build-components.ts:4836-4839). */
  const type = "12h";
  const tabs = content === "date-time" ? `
      <div data-s1-part="tabs" data-s1-component="tab" data-size="sm" data-break="mobile" role="tablist" aria-label="날짜·시간 선택">
        <button type="button" data-s1-part="tab" role="tab" aria-selected="false" data-value="date">날짜</button>
        <button type="button" data-s1-part="tab" role="tab" aria-selected="true" data-value="time">시간</button>
      </div>
      <div data-s1-part="date-panel" hidden>
        <p data-s1-part="date-panel-note">날짜 선택 화면은 Date Picker 코어가 별도로 제공합니다(이 컴포넌트 범위 밖).</p>
      </div>` : "";
  const wheelCols = content === "date-time"
    ? `<div data-s1-part="wheel-col" data-column="ampm" role="listbox" aria-label="오전오후"></div>
      <div data-s1-part="wheel-col" data-column="hour" role="listbox" aria-label="시"></div>
      <div data-s1-part="wheel-col" data-column="colon" aria-hidden="true"></div>
      <div data-s1-part="wheel-col" data-column="minute" role="listbox" aria-label="분"></div>`
    : `<div data-s1-part="wheel-col" data-column="ampm" role="listbox" aria-label="오전오후"></div>
      <div data-s1-part="wheel-col" data-column="hour" role="listbox" aria-label="시"></div>
      <div data-s1-part="wheel-col" data-column="colon" aria-hidden="true"></div>
      <div data-s1-part="wheel-col" data-column="minute" role="listbox" aria-label="분"></div>`;
  return `<div data-guide-sample="set" data-s1-component="time-picker" data-size="md" data-break="mobile" data-type="${type}" data-minute-step="1" data-mobile-ui="wheel" data-mobile-content="${content}">
      <button type="button" data-s1-part="trigger" aria-haspopup="dialog" aria-expanded="false" aria-label="${title}">
        <span data-s1-part="value">${triggerLabel}</span>
        <span data-s1-part="icon" aria-hidden="true"></span>
      </button>
      <div data-s1-part="sheet" hidden>
        <div data-s1-part="sheet-backdrop"></div>
        <div data-s1-part="sheet-panel" role="dialog" aria-modal="true" aria-labelledby="${sheetTitleId}" tabindex="-1">
          <div data-s1-part="sheet-header">
            <span data-s1-part="sheet-title" id="${sheetTitleId}">${title}</span>
            <button type="button" data-s1-part="sheet-close" aria-label="닫기"></button>
          </div>${tabs}
          <div data-s1-part="wheel">${wheelCols}
            <div data-s1-part="fade-top" aria-hidden="true"></div>
            <div data-s1-part="fade-bottom" aria-hidden="true"></div>
          </div>
          <div data-s1-part="sheet-footer">
            <button type="button" data-s1-part="apply" data-s1-component="button" data-variant="primary" data-size="lg"><span data-s1-part="label">적용</span></button>
          </div>
        </div>
      </div>
    </div>`;
}

function timePickerStateMatrix() {
  const pcSizes = [["xxsm", "XXSM", "28px"], ["xsm", "XSM", "34px"], ["md", "MD", "44px"]];
  /* Mobile 은 크기가 하나뿐이라 크기를 축으로 세우지 않는다 — 그 자리에 유형(24h·12h)을 넣는다
     (표출 정책 _meta.uiLibraryGuideLayout.stateMatrix.singleValueAxis, river 확정 2026-09-02). */
  /* 모바일은 24시간제를 제공하지 않는다 — 오전/오후 휠 하나뿐이다(river 결정 2026-09-07).
     유형이 한 가지가 됐으므로 표의 축으로 세우지 않는다(값이 하나뿐인 축 금지, river 확정 2026-09-02). */
  const mobileCols = [["12h", ""]];
  /* 열 = 정본 트리거 상태 전수(5종 — manifest canonicalStateMap). */
  const states = [
    ["Default", "default"],
    ["Hover", "hover", "검수 표시"],
    ["Filled", "filled", "값 선택됨"],
    ["Disabled", "disabled"],
    ["Focus", "focus", "열림"]
  ];

  /* PC 는 열=크기(유형은 24h 고정), Mobile 은 열=유형(크기는 md 고정). */
  const cellFor = (breakName, axis) => (key, state) => axis === "size"
    ? timePickerMarkup({ size: key, breakName, type: "24h", state, isPreview: true })
    : timePickerMarkup({ size: "md", breakName, type: key, state, isPreview: true, sheetMode: breakName === "mobile" });

  function actionSection(breakName, cols, axis) {
    const live = (key) => axis === "size"
      ? timePickerMarkup({ size: key, breakName, type: "24h" })
      : timePickerMarkup({ size: "md", breakName, type: key });
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      cols.map(([, label, dim]) => `<div class="matrix-col-header">${label || ""}${dim ? `<span class="uilg-size-dim">${dim}</span>` : ""}</div>`).join("");
    /* PC 는 열이 크기라 유형(24h·12h)이 표에 드러나지 않는다 — Action 에서 두 줄로 나눠 보인다
       (river 지시 2026-09-03). Mobile 은 이미 열이 유형이라 한 줄이면 된다. */
    const liveRows = axis === "size"
      ? [["24시간제", "24h"], ["오전·오후", "12h"]].map(([label, type]) =>
          `<div class="matrix-row-label">${label}</div>` +
          cols.map(([size]) => `<div class="comp-state-cell">${timePickerMarkup({ size, breakName, type })}</div>`).join("")).join("")
      : `<div class="matrix-row-label">Time Picker</div>` +
        cols.map(([key]) => `<div class="comp-state-cell">${live(key)}</div>`).join("");
    const disabledRow = `<div class="matrix-row-label">Disabled${axis === "size" ? '<span class="uilg-size-dim">공통</span>' : ""}</div>` +
      cols.map(([key]) => `<div class="comp-state-cell">${cellFor(breakName, axis)(key, "disabled")}</div>`).join("");
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="comp-state-matrix" style="grid-template-columns: 120px repeat(${cols.length}, minmax(150px, 1fr));">${header}${liveRows}${disabledRow}</div>
      <p class="uilg-demo-note">눌러서 시·분을 고르고 <strong>확인</strong>을 눌러야 값이 남습니다. 화살표 키로 칸과 열을 옮기고 Esc로 닫습니다.</p>
    </div>`;
  }

  /* 패널 상태 — 정본 Time Picker Dropdown 세트의 State 축 전수(4종).
     시·분을 차례로 고르는 동안 확인이 언제 풀리는지가 이 표의 핵심이다. */
  const panelStates = [
    ["시 Hover", "확인 비활성"],
    ["시 Selected", "확인 비활성"],
    ["분 Hover", "확인 비활성"],
    ["분 Selected", "확인 활성"]
  ];
  const panelBlock = (type) => `<div class="uilg-variant-block">
      <div class="variant-label">패널 상태 — ${type === "12h" ? "오전·오후(12시간제)" : "24시간제"}</div>
      <div class="comp-state-matrix" style="grid-template-columns: 120px repeat(${panelStates.length}, minmax(150px, 1fr));">
        <div class="matrix-col-header" style="grid-column:1"></div>${panelStates.map(([label, note]) => `<div class="matrix-col-header">${label}<span class="uilg-size-dim">${note}</span></div>`).join("")}
        <div class="matrix-row-label">${type === "12h" ? "12h · 3열" : "24h · 2열"}</div>${panelStates.map(([label]) => `<div class="comp-state-cell uilg-open-cell">${timePickerMarkup({ size: "md", breakName: "pc", type, state: "focus", isPreview: true, panelState: label })}</div>`).join("")}
      </div>
    </div>`;

  /* 목록 칸은 정본 Time Picker Cell 세트(Default·Hover·Selected 3변형)다.
     시·분 열에 같은 셀 컴포넌트가 쓰이므로 표본은 한 줄이면 충분하다. */
  const cellSamples = [["Default", {}], ["Hover", { hover: true }], ["Selected", { selected: true }]];
  const cellBlock = `<div class="uilg-variant-block">
      <div class="variant-label">목록 칸 상태</div>
      <div class="comp-state-matrix" style="grid-template-columns: 120px repeat(${cellSamples.length}, minmax(120px, 1fr));">
        <div class="matrix-col-header" style="grid-column:1"></div>${cellSamples.map(([label]) => `<div class="matrix-col-header">${label}</div>`).join("")}
        <div class="matrix-row-label">Cell</div>${cellSamples.map(([, opts]) => `<div class="comp-state-cell"><div data-guide-sample="part" data-s1-component="time-picker" class="is-preview">${timePickerCell("09", opts)}</div></div>`).join("")}
      </div>
    </div>`;

  const pcContent = `${actionSection("pc", pcSizes, "size")}
    ${sizeStateGrid(pcSizes, states, cellFor("pc", "size"), { tall: true })}
    <hr class="uilg-separator">
    ${panelBlock("24h")}
    <hr class="uilg-separator">
    ${panelBlock("12h")}
    <hr class="uilg-separator">
    ${cellBlock}`;

  /* 모바일은 트리거를 누르면 휠 바텀시트가 열린다(river 결정 2026-09-07 — 목록 드롭다운을 뒤집었다).
     시트는 화면 아래에서 올라오는 것이라 지면에 눕혀 두면 실제 모습을 알 수 없다. 그래서 트리거와
     그 다음 동작을 모두 휴대폰 목업 안에 얹는다(river 지시: "모바일에서 실제 보는듯하게").
     목업 크롬은 이미 Mobile Header·Bottom Nav 안내 화면이 쓰던 것을 그대로 재사용한다(phoneMockup). */
  const wheelPhone = (label, note, content) => `<div class="uilg-phone-item">
      <div class="matrix-col-header">${label}</div>
      ${phoneMockup(`<div class="uilg-phone-stage">${timePickerWheelMarkup({ content })}</div>`)}
      <p class="uilg-demo-note">${note}</p>
    </div>`;

  const mobileContent = `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-phone-row">
        ${wheelPhone("시간만(TimeOnly)", "시·분을 스크롤 또는 화살표 키로 고르고 <strong>적용</strong>을 누릅니다.", "time-only")}
        ${wheelPhone("시작 일시(DateTime)", "날짜·시간 탭(승인된 Line Tab 재사용)으로 전환됩니다. 날짜 화면 자체는 이 컴포넌트 범위 밖입니다.", "date-time")}
      </div>
      <p class="uilg-demo-note">트리거를 누르면 휴대폰 화면 안에서 바텀시트가 올라옵니다. Esc 또는 닫기로 닫습니다.</p>
    </div>
    ${sizeStateGrid(mobileCols, states, cellFor("mobile", "type"), { tall: true })}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${pcContent}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">${mobileContent}</div>
    </div>`;
}

/* ── Date Picker — 정본 buildDatePicker(트리거)·buildCalendar(Date/Year/Month)·buildCalendarCell·buildCalendarTile
   기준 정적 미리보기. 실 상호작용은 ui-library/dist 런타임(date-picker.js)이 담당하고, 여기는 표를 위한 스냅샷이다. */
const DP_WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"]; // D3: 일요일 시작

function dpCell(day, otherMonth, state, opts = {}) {
  const rangeBand = opts.band ? ` data-range-band="${opts.band}"` : "";
  const weekday = day.weekday;
  return `<button type="button" data-s1-part="cell" data-state="${state}" data-other-month="${otherMonth}" data-weekday="${weekday}"${rangeBand} aria-selected="${!!opts.selected}" tabindex="-1">
      <span data-s1-part="cell-inner"><span data-s1-part="cell-num">${day.num}</span></span>
    </button>`;
}

/* 2025년 1월 고정 표본 — 정본 buildCalendar 데모(3591-3600)와 동일 달. 1일=수요일. */
function dpDateView({ today = 10, selected = 17, disabledDay = 25, range = null, hoverEnd = null } = {}) {
  const daysInMonth = 31;
  const leading = 3; // 1월 1일 = 수요일 → 일요일 시작 그리드에서 앞 칸 3개(일·월·화=12/29·30·31)
  const cells = [];
  for (let i = leading; i > 0; i -= 1) cells.push({ num: 31 - i + 1, other: true, weekday: (leading - i) });
  for (let d = 1; d <= daysInMonth; d += 1) cells.push({ num: d, other: false, weekday: (leading + d - 1) % 7 });
  let next = 1;
  while (cells.length % 7 !== 0 || cells.length < 35) { cells.push({ num: next, other: true, weekday: cells.length % 7 }); next += 1; }

  const rows = [];
  for (let r = 0; r < cells.length / 7; r += 1) {
    const rowCells = cells.slice(r * 7, r * 7 + 7).map((day) => {
      if (day.other) return dpCell(day, true, "default");
      if (range) {
        const { start, end } = range;
        const effectiveEnd = end ?? hoverEnd;
        if (day.num === start && effectiveEnd && effectiveEnd !== start) return dpCell(day, false, "today", { band: "start", selected: true });
        if (effectiveEnd && day.num === effectiveEnd && effectiveEnd !== start) return dpCell(day, false, "selected", { band: "end", selected: true });
        if (effectiveEnd && day.num > start && day.num < effectiveEnd) return dpCell(day, false, "range-mid", { band: "mid", selected: true });
        if (day.num === start) return dpCell(day, false, "today", { selected: true });
        return dpCell(day, false, "default");
      }
      if (day.num === selected) return dpCell(day, false, "selected", { selected: true });
      if (day.num === today) return dpCell(day, false, "today");
      if (day.num === disabledDay) return dpCell(day, false, "disabled");
      return dpCell(day, false, "default");
    }).join("");
    rows.push(`<div data-s1-part="week" role="row">${rowCells}</div>`);
  }
  const weekdays = DP_WEEKDAYS.map((label, i) => `<span data-s1-part="weekday" data-weekday="${i}">${label}</span>`).join("");
  return `<div data-s1-part="view" data-view="date">
      <div data-s1-part="weekdays">${weekdays}</div>
      <div data-s1-part="grid" role="grid">${rows.join("")}</div>
    </div>`;
}

function dpTile(label, state) {
  const disabled = state === "disabled" ? " disabled" : "";
  const selected = state === "selected";
  return `<button type="button" data-s1-part="tile" aria-selected="${selected}"${disabled}>${label}</button>`;
}

function dpYearView() {
  const rows = [
    [["2021", "disabled"], ["2022", "disabled"], ["2023", "disabled"]],
    [["2024", "default"], ["2025", "selected"], ["2026", "default"]],
    [["2027", "default"], ["2028", "default"], ["2029", "default"]],
    [["2030", "disabled"], ["2031", "disabled"], ["2032", "disabled"]]
  ];
  const grid = rows.map((row) => `<div data-s1-part="tile-row">${row.map(([label, state]) => dpTile(label, state)).join("")}</div>`).join("");
  return `<div data-s1-part="view" data-view="year"><div data-s1-part="grid" data-tile-grid="year">${grid}</div></div>`;
}

function dpMonthView() {
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const rows = [];
  for (let r = 0; r < 4; r += 1) {
    rows.push(`<div data-s1-part="tile-row">${months.slice(r * 3, r * 3 + 3).map((m) => dpTile(m, m === "1월" ? "selected" : "default")).join("")}</div>`);
  }
  return `<div data-s1-part="view" data-view="month"><div data-s1-part="grid" data-tile-grid="month">${rows.join("")}</div></div>`;
}

function dpHeader(view) {
  const label = view === "date"
    ? `<button type="button" data-s1-part="year-label">2025년</button><button type="button" data-s1-part="month-label">1월</button>`
    : `<button type="button" data-s1-part="year-label">2025년</button>`;
  return `<div data-s1-part="header">
      <button type="button" data-s1-part="prev" aria-label="이전"><span data-s1-part="chevron-icon" aria-hidden="true"></span></button>
      <div data-s1-part="header-label">${label}</div>
      <button type="button" data-s1-part="next" aria-label="다음"><span data-s1-part="chevron-icon" aria-hidden="true"></span></button>
    </div>`;
}

function dpCalendar(view, opts = {}) {
  const body = view === "date" ? dpDateView({ range: opts.range, hoverEnd: opts.hoverEnd }) : view === "year" ? dpYearView() : dpMonthView();
  return `<div data-s1-part="calendar" data-view="${view}">${dpHeader(view)}${body}</div>`;
}

let datePickerSheetId = 0;

function datePickerMarkup({ size = "md", breakName = "pc", mode = "single", state = "default", isPreview = false, view = "date", rangeOpts = null } = {}) {
  const open = state === "open";
  const filled = state === "filled";
  const disabled = state === "disabled";
  const force = state === "hover" ? ' data-force-state="hover"' : "";
  const preview = isPreview ? " is-preview" : "";
  const panelHidden = isPreview ? (open ? "" : " hidden") : " hidden";
  /* 표시 형식 YY.MM.DD(정본 그대로) · 기간 구분자 ~ — river 결정 2026-09-08(M-9). */
  const value = mode === "range"
    ? (filled || open ? "26.01.17 ~ 26.01.22" : "YY.MM.DD")
    : (filled || open ? "26.01.17" : "YY.MM.DD");
  const calendarOpenInner = dpCalendar(view, mode === "range" ? { range: rangeOpts || { start: 17, end: 22 }, hoverEnd: (rangeOpts && rangeOpts.hoverEnd) || null } : {});
  /* V-2: pages/ui-review.html 의 F-2 수정과 같은 분기를 여기에도 넣는다 — mobile 은 panel 이 아니라
     dist/examples/date-picker.mobile.html 과 같은 sheet 구조를 내야 date-picker.js 의 init() 이
     sheetCalendar 컨테이너를 찾는다(panel 만 있으면 null 반환 — 죽은 컨트롤). */
  datePickerSheetId += 1;
  const sheetTitleId = `guide-date-picker-sheet-title-${datePickerSheetId}`;
  // R-1 과 같은 방식(modal.is-preview 선례, ui-library-guide.css) — sheet 는 root 의 .is-preview 를
  // CSS 선택자로 잡아 position:fixed→relative 로 눕힌다. 여기서 별도 클래스를 추가하지 않는다.
  const body = breakName === "mobile"
    ? `<div data-s1-part="sheet"${panelHidden}>
        <div data-s1-part="sheet-backdrop"></div>
        <div data-s1-part="sheet-panel" role="dialog" aria-modal="true" aria-labelledby="${sheetTitleId}" tabindex="-1">
          <div data-s1-part="sheet-header">
            <span data-s1-part="sheet-title" id="${sheetTitleId}">날짜 선택</span>
            <button type="button" data-s1-part="sheet-close" aria-label="닫기"${isPreview ? ' tabindex="-1"' : ""}></button>
          </div>
          <div data-s1-part="calendar-wrap">${open ? calendarOpenInner : '<div data-s1-part="calendar"></div>'}</div>
          <div data-s1-part="sheet-footer">
            <button type="button" data-s1-part="apply" data-s1-component="button" data-variant="primary" data-size="lg"${isPreview ? ' tabindex="-1"' : ""}><span data-s1-part="label">적용</span></button>
          </div>
        </div>
      </div>`
    : `<div data-s1-part="panel"${panelHidden} data-view="${view}">${calendarOpenInner}</div>`;
  return `<div data-guide-sample="set" data-s1-component="date-picker" data-size="${size}" data-break="${breakName}" data-mode="${mode}" class="${preview}">
      <button type="button" data-s1-part="trigger" aria-haspopup="dialog" aria-expanded="${open}"${filled ? ' data-filled="true"' : ""}${disabled ? " disabled" : ""}${force}>
        <span data-s1-part="value">${value}</span>
        <span data-s1-part="icon" aria-hidden="true"></span>
      </button>
      ${body}
    </div>`;
}

function datePickerStateMatrix() {
  const pcSizes = [["xxsm", "XXSM", "28px"], ["xsm", "XSM", "34px"], ["md", "MD", "44px"]];
  const mobileCols = [["single", "단일 선택"], ["range", "기간 선택"]];
  const states = [
    ["Default", "default"],
    ["Hover", "hover", "검수 표시"],
    ["Filled", "filled", "값 선택됨"],
    ["Disabled", "disabled"],
    ["Open", "open", "패널 열림"]
  ];
  const cellFor = (breakName, axis) => (key, state) => axis === "size"
    ? datePickerMarkup({ size: key, breakName, mode: "single", state, isPreview: true })
    : datePickerMarkup({ size: "md", breakName, mode: key, state, isPreview: true });

  function actionSection() {
    const header = `<div class="matrix-col-header" style="grid-column:1"></div>` +
      pcSizes.map(([, label, dim]) => `<div class="matrix-col-header">${label}<span class="uilg-size-dim">${dim}</span></div>`).join("");
    const liveRow = `<div class="matrix-row-label">Date Picker</div>` +
      pcSizes.map(([size]) => `<div class="comp-state-cell">${datePickerMarkup({ size, breakName: "pc", mode: "single" })}</div>`).join("");
    const disabledRow = `<div class="matrix-row-label">Disabled</div>` +
      pcSizes.map(([size]) => `<div class="comp-state-cell">${cellFor("pc", "size")(size, "disabled")}</div>`).join("");
    return `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="comp-state-matrix" style="grid-template-columns: 120px repeat(${pcSizes.length}, minmax(150px, 1fr));">${header}${liveRow}${disabledRow}</div>
      <p class="uilg-demo-note">눌러서 날짜를 고릅니다. 단일 선택은 고르면 바로 닫히고, 기간 선택은 시작·종료 두 번 눌러야 닫힙니다. 화살표 키로 날짜를 옮기고 Esc로 닫습니다.</p>
    </div>`;
  }

  const viewBlock = (view, label) => `<div class="uilg-variant-block">
      <div class="variant-label">캘린더 — ${label}</div>
      <div class="comp-state-cell uilg-open-cell">${datePickerMarkup({ size: "md", breakName: "pc", mode: "single", state: "open", isPreview: true, view })}</div>
    </div>`;

  const rangeBlock = `<div class="uilg-variant-block">
      <div class="variant-label">기간 선택 — 완료(17~22일)</div>
      <div class="comp-state-cell uilg-open-cell">${datePickerMarkup({ size: "md", breakName: "pc", mode: "range", state: "open", isPreview: true, rangeOpts: { start: 17, end: 22 } })}</div>
    </div>
    <div class="uilg-variant-block">
      <div class="variant-label">기간 선택 — hover 미리보기(D6, 시작일만 고른 상태)</div>
      <div class="comp-state-cell uilg-open-cell">${datePickerMarkup({ size: "md", breakName: "pc", mode: "range", state: "open", isPreview: true, rangeOpts: { start: 17, end: null, hoverEnd: 22 } })}</div>
    </div>`;

  /* 달력 크기 비교 — 입력창 크기를 따라간다(river 결정 2026-09-04). 새 속성은 없다: data-size 하나로 결정된다. */
  const calSizeBlock = `<div class="uilg-variant-block">
      <div class="variant-label">달력 크기 — 입력창을 따라갑니다 (MD 356 · SM 267)</div>
      <!-- 열 너비 = 각 칸에서 열리는 달력의 실제 폭(MD 356 · SM 267). 균등 280px 로 두면
           왼쪽 큰 달력이 오른쪽 칸을 파고들어 두 달력이 겹쳐 보인다(river 제보 2026-09-04). -->
      <div class="comp-state-matrix" style="grid-template-columns: 368px 280px;">
        <div class="matrix-col-header">MD 입력창 (44) → 큰 달력<span class="uilg-size-dim">356 × 352</span></div>
        <div class="matrix-col-header">XSM·XXSM 입력창 (34·28) → 작은 달력<span class="uilg-size-dim">267 × 266</span></div>
        <div class="comp-state-cell uilg-open-cell">${datePickerMarkup({ size: "md", breakName: "pc", mode: "single", state: "open", isPreview: true })}</div>
        <div class="comp-state-cell uilg-open-cell">${datePickerMarkup({ size: "xsm", breakName: "pc", mode: "single", state: "open", isPreview: true })}</div>
      </div>
      <p class="uilg-demo-note">작은 달력은 날짜칸 33·글자 12·헤더 18로 줄어듭니다. 고르는 값이 따로 있지는 않고, 입력창 크기가 그대로 달력 크기가 됩니다.</p>
    </div>`;

  /* 최하위 요소 — 정본이 별도 컴포넌트 세트로 선언한 두 부품이다(📖 source-reader 2026-09-07 판독,
     줄번호·상태는 2026-09-09 갱신):
       · Calendar Cell(calCellCompsForSize, build-components.ts:4048-4146 — 세트 조립은 buildCalendarCell :4147)
         Type=Standard → Default·Hover·Today·Selected·Selected Hover·Disabled
           ※ Selected Hover 는 2026-09-09 정본 신설(river 승인 M-7 — 감사문서 §9). 선택된 파란 칸의
             hover 는 회색이 아니라 한 단계 진한 파랑이고 테두리도 같은 색을 쓴다.
         Type=Range    → Default·Start·End·Disabled
       · Calendar Tile(calTileCompsForSize, :4005-4034 — 세트 조립은 buildCalendarTile :4037-4043) → Default·Hover·Selected·Disabled
     정본에 있는 상태만 그대로 옮긴다 — 새 상태를 만들지 않는다. hover 는 손이 닿아야 보이는 상태라
     표에서는 data-force-state="hover" 로 세워 둔다(저장소가 이미 쓰는 방식). */
  const cellSample = (label, attrs, num = "17") => `<div class="comp-state-cell">
      <div data-guide-sample="part" data-s1-component="date-picker" data-size="md" class="is-preview">
        <button type="button" data-s1-part="cell"${attrs} tabindex="-1">
          <span data-s1-part="cell-inner"><span data-s1-part="cell-num">${num}</span></span>
        </button>
      </div>
    </div>`;

  const cellStates = [
    ["Default", ' data-state="default"'],
    ["Hover", ' data-state="default" data-force-state="hover"'],
    ["Today", ' data-state="today"'],
    ["Selected", ' data-state="selected"'],
    ["Selected Hover", ' data-state="selected" data-force-state="hover"'],
    ["Disabled", ' data-state="disabled" disabled']
  ];
  const rangeStates = [
    ["Default", ' data-state="range-mid" data-range-band="mid"'],
    ["Start", ' data-state="today" data-range-band="start"'],
    ["End", ' data-state="selected" data-range-band="end"'],
    ["Disabled", ' data-state="range-disabled" disabled']
  ];
  const tileStates = [
    ["Default", ""],
    ["Hover", ' data-force-state="hover"'],
    ["Selected", ' aria-selected="true"'],
    ["Disabled", " disabled"]
  ];

  const partBlock = `<div class="uilg-variant-block">
      <div class="variant-label">날짜 칸 상태 — 하나씩 고르는 달력(Type=Standard)</div>
      <div class="comp-state-matrix" style="grid-template-columns: repeat(${cellStates.length}, 96px);">
        ${cellStates.map(([label]) => `<div class="matrix-col-header">${label}</div>`).join("")}
        ${cellStates.map(([, attrs]) => cellSample("", attrs)).join("")}
      </div>
    </div>
    <div class="uilg-variant-block">
      <div class="variant-label">날짜 칸 상태 — 기간을 고르는 달력(Type=Range)</div>
      <div class="comp-state-matrix" style="grid-template-columns: repeat(${rangeStates.length}, 96px);">
        ${rangeStates.map(([label]) => `<div class="matrix-col-header">${label}</div>`).join("")}
        ${rangeStates.map(([, attrs]) => cellSample("", attrs)).join("")}
      </div>
      <p class="uilg-demo-note">시작·끝 사이 칸은 뒤에 옅은 띠가 깔립니다. 시작 칸은 띠가 오른쪽으로만, 끝 칸은 왼쪽으로만 이어집니다.</p>
    </div>
    <div class="uilg-variant-block">
      <div class="variant-label">월·년 칸 상태</div>
      <div class="comp-state-matrix" style="grid-template-columns: repeat(${tileStates.length}, 96px);">
        ${tileStates.map(([label]) => `<div class="matrix-col-header">${label}</div>`).join("")}
        ${tileStates.map(([, attrs]) => `<div class="comp-state-cell"><div data-guide-sample="part" data-s1-component="date-picker" data-size="md" class="is-preview"><button type="button" data-s1-part="tile"${attrs.includes("aria-selected") ? attrs : ` aria-selected="false"${attrs}`} tabindex="-1">1월</button></div></div>`).join("")}
      </div>
    </div>`;

  const pcContent = `${actionSection()}
    ${/* 열 너비 = 열리는 달력의 실제 폭. XXSM·XSM 은 작은 달력(267), MD 는 큰 달력(356)이라
          균등 분할(minmax(140px,1fr))로 두면 MD 칸의 달력만 카드 밖으로 삐져나가 옆·아래 내용과 겹친다
          (river 제보 2026-09-04). 폭을 달력 실제 폭에 맞춘다. */""}
    ${sizeStateGrid(pcSizes, states, cellFor("pc", "size"), { tall: true, columns: "100px 276px 276px 368px" })}
    <hr class="uilg-separator">
    ${calSizeBlock}
    <hr class="uilg-separator">
    ${viewBlock("date", "Date")}
    ${viewBlock("year", "Year")}
    ${viewBlock("month", "Month")}
    <hr class="uilg-separator">
    ${rangeBlock}
    <hr class="uilg-separator">
    ${partBlock}`;

  /* 모바일 시트도 Time Picker 와 같이 휴대폰 목업 안에서 올라온다(river 지시 2026-09-07) —
     시트는 화면 아래에서 올라오는 것이라 지면에 눕혀 두면 실제 모습을 알 수 없다.
     열 제목(단일 선택·기간 선택)은 목업 바로 위에 붙어 아래 컴포넌트와 같은 자리에서 시작한다. */
  const mobilePhone = ([mode, label]) => `<div class="uilg-phone-item">
      <div class="matrix-col-header">${label}</div>
      ${phoneMockup(`<div class="uilg-phone-stage">${datePickerMarkup({ size: "md", breakName: "mobile", mode })}</div>`)}
    </div>`;

  /* Mobile 도 PC 와 같은 층을 갖춘다 — Action 만 두면 상태값과 그 아래 층(캘린더 뷰·기간 선택)이
     통째로 빠진다(river 제보 2026-09-07). 층 구성은 PC 와 같고, 형태만 모바일 시트다. */
  const mobileViewBlock = (view, label) => `<div class="uilg-variant-block">
      <div class="variant-label">캘린더 — ${label}</div>
      <div class="comp-state-cell">${datePickerMarkup({ size: "md", breakName: "mobile", mode: "single", state: "open", isPreview: true, view })}</div>
    </div>`;

  const mobileRangeBlock = `<div class="uilg-variant-block">
      <div class="variant-label">기간 선택 — 완료(17~22일)</div>
      <div class="comp-state-cell">${datePickerMarkup({ size: "md", breakName: "mobile", mode: "range", state: "open", isPreview: true, rangeOpts: { start: 17, end: 22 } })}</div>
    </div>
    <div class="uilg-variant-block">
      <div class="variant-label">기간 선택 — hover 미리보기(D6, 시작일만 고른 상태)</div>
      <div class="comp-state-cell">${datePickerMarkup({ size: "md", breakName: "mobile", mode: "range", state: "open", isPreview: true, rangeOpts: { start: 17, end: null, hoverEnd: 22 } })}</div>
    </div>`;

  const mobileContent = `<div class="comp-action-top">
      <div class="matrix-col-header-action">Action</div>
      <div class="uilg-phone-row">${mobileCols.map(mobilePhone).join("")}</div>
      <p class="uilg-demo-note">트리거를 누르면 휴대폰 화면 안에서 하단 시트가 올라옵니다 — 팝오버 대신 같은 캘린더 + &quot;적용&quot; 버튼으로 구성됩니다.</p>
    </div>
    ${sizeStateGrid(mobileCols, states, cellFor("mobile", "type"), { tall: true })}
    <hr class="uilg-separator">
    ${mobileViewBlock("date", "Date")}
    ${mobileViewBlock("year", "Year")}
    ${mobileViewBlock("month", "Month")}
    <hr class="uilg-separator">
    ${mobileRangeBlock}
    <hr class="uilg-separator">
    ${partBlock}`;

  return `
    <div class="platform-section platform-section-pc">
      <div class="preview-area">${pcContent}</div>
    </div>
    <div class="platform-section platform-section-mobile">
      <div class="preview-area">${mobileContent}</div>
    </div>`;
}

function stateMatrix(id) {
  if (id === "date-picker") return datePickerStateMatrix();
  if (id === "input") return inputStateMatrix();
  if (id === "button") return buttonStateMatrix();
  if (id === "toggle") return toggleStateMatrix();
  if (id === "chip") return chipStateMatrix();
  if (id === "select") return selectStateMatrix();
  if (id === "dropdown") return dropdownStateMatrix();
  if (id === "filter-chip") return filterChipStateMatrix();
  if (id === "tab") return tabStateMatrix();
  if (id === "pagination") return paginationStateMatrix();
  if (id === "textarea") return textareaStateMatrix();
  if (id === "multi-toggle") return multiToggleStateMatrix();
  if (id === "table") return tableStateMatrix();
  if (id === "modal") return modalStateMatrix();
  if (id === "modal-content") return modalContentStateMatrix();
  if (id === "assist-button") return assistButtonStateMatrix();
  if (id === "text-button") return textButtonStateMatrix();
  if (id === "mobile-bottom-nav") return mobileBottomNavStateMatrix();
  if (id === "mobile-header") return mobileHeaderStateMatrix();
  if (id === "gnb") return gnbStateMatrix();
  if (id === "gnb-sub-menu-item") return gnbSubMenuItemStateMatrix();
  if (id === "gnb-sub-menu") return gnbSubMenuStateMatrix();
  if (id === "time-picker") return timePickerStateMatrix();
  return controlStateMatrix(id);
}

function componentOverview(id, registry) {
  return `${implementationRules(id, registry)}\n      ${usageGuide(id, registry)}`;
}

/* ── Implementation rules ── */

function implementationRules(id, registry) {
  const anatomy = registry.anatomy || [];
  const a11y = Array.isArray(registry.a11y) ? registry.a11y : [];
  const doDont = registry.doDont || {};
  const donts = doDont.dont || [];

  /* registry 규약: 선택 부품은 part 이름에 "(선택)" 을 붙인다(role 문장이 아니라). */
  const isOptional = (a) => a.part.includes("(선택)");
  const required = anatomy.filter((a) => !isOptional(a));
  const optional = anatomy.filter(isOptional);

  function ruleList(items) {
    if (!items.length) return "";
    return `<ul class="uilg-rule-list">${items.map((item) => {
      const text = typeof item === "string" ? item : `${item.part} — ${item.role}`;
      return `<li>${escapeHtml(text)}</li>`;
    }).join("")}</ul>`;
  }

  const sections = [];

  if (required.length) {
    sections.push(`<div class="uilg-rule-group"><h4 class="uilg-rule-heading">필수 요소</h4>${ruleList(required)}</div>`);
  }
  if (optional.length) {
    sections.push(`<div class="uilg-rule-group"><h4 class="uilg-rule-heading">선택 가능한 요소</h4>${ruleList(optional)}</div>`);
  }
  if (donts.length) {
    sections.push(`<div class="uilg-rule-group"><h4 class="uilg-rule-heading">하지 말 것</h4>${ruleList(donts)}</div>`);
  }
  if (a11y.length) {
    sections.push(`<div class="uilg-rule-group"><h4 class="uilg-rule-heading">접근성·동작 규칙</h4>${ruleList(a11y)}</div>`);
  }

  return `
    <section class="uilg-rules" aria-labelledby="${id}-rules-heading">
      <h2 class="uilg-section-title" id="${id}-rules-heading">구현 시 꼭 지킬 것</h2>
      <div class="uilg-rules-body">${sections.join("")}</div>
    </section>`;
}

/* ── Detailed usage guide ── */

function usageGuide(id, registry) {
  const usage = registry.usage || {};
  const doDont = registry.doDont || {};
  const dos = doDont.do || [];
  const whenToUse = usage.whenToUse || [];
  const whenNotToUse = usage.whenNotToUse || [];

  const sections = [];
  if (whenToUse.length) {
    sections.push(`<div class="uilg-rule-group"><h4 class="uilg-rule-heading">언제 사용하나요?</h4>${list(whenToUse)}</div>`);
  }
  if (whenNotToUse.length) {
    sections.push(`<div class="uilg-rule-group"><h4 class="uilg-rule-heading">사용하지 않는 경우</h4>${list(whenNotToUse)}</div>`);
  }
  if (dos.length) {
    sections.push(`<div class="uilg-rule-group"><h4 class="uilg-rule-heading">권장 사항</h4>${list(dos)}</div>`);
  }

  return `
    <details class="uilg-usage-details" aria-labelledby="${id}-usage-heading">
      <summary class="uilg-usage-summary" id="${id}-usage-heading">상세 사용 가이드</summary>
      <div class="uilg-usage-body">${sections.join("")}</div>
    </details>`;
}

/* ── Code viewer ── */

function codeViewer(id, key = "") {
  const uid = key ? `${id}-${key}` : id;
  /* 보고 있는 화면의 마크업만 보여준다 — Mobile 화면에서 PC 코드를 복사하는 사고를 막는다
     (river 결정 2026-09-01). 코드 위 안내 문구는 두지 않는다(river 결정 2026-09-02). */
  const tabs = [
    ["html", "HTML"],
    ["css", "CSS"],
    ["js", "JavaScript"]
  ];
  return `
    <section class="uilg-code" aria-labelledby="${uid}-code-title">
      <div class="uilg-code-toolbar">
        <div class="uilg-code-tabs" role="tablist" aria-label="${componentConfig[id].title} 코드">
          ${tabs.map(([tabKey, label], index) => `<button type="button" class="uilg-code-tab" role="tab" data-guide-tab="${tabKey}" aria-selected="${index === 0}" aria-controls="${uid}-code-${tabKey}">${label}</button>`).join("")}
        </div>
        <button type="button" class="uilg-copy">현재 코드 복사</button>
      </div>
      ${tabs.map(([tabKey], index) => `<div class="uilg-code-panel${index === 0 ? " is-active" : ""}" id="${uid}-code-${tabKey}" role="tabpanel"><pre data-guide-code="${tabKey}"></pre></div>`).join("")}
    </section>`;
}

function wireCodeViewer(section, sources) {
  for (const [key, value] of Object.entries(sources)) {
    const pre = section.querySelector(`[data-guide-code="${key}"]`);
    if (pre) pre.textContent = value.trim();
  }

  const tabs = [...section.querySelectorAll("[data-guide-tab]")];
  const panels = [...section.querySelectorAll(".uilg-code-panel")];
  const activate = (key) => {
    tabs.forEach((tab) => tab.setAttribute("aria-selected", String(tab.dataset.guideTab === key)));
    panels.forEach((panel) => panel.classList.toggle("is-active", panel.id.endsWith(`-${key}`)));
  };
  tabs.forEach((tab) => tab.addEventListener("click", () => activate(tab.dataset.guideTab)));

  section.querySelector(".uilg-copy")?.addEventListener("click", async (event) => {
    const selected = section.querySelector('[data-guide-tab][aria-selected="true"]')?.dataset.guideTab || "html";
    const text = sources[selected].trim();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    const button = event.currentTarget;
    const original = button.textContent;
    button.textContent = "복사됨";
    setTimeout(() => { button.textContent = original; }, 1400);
  });
}

/* ── Mount ── */

async function mountGuide(id) {
  const section = document.getElementById(id);
  if (!section) return;
  const config = componentConfig[id];
  const sourceUrls = urls(id);

  try {
    const [manifest, registry, htmlPc, css, js] = await Promise.all([
      fetchJson(sourceUrls.manifest),
      fetchJson(sourceUrls.registry),
      fetchText(sourceUrls.html),
      fetchText(sourceUrls.css),
      fetchText(sourceUrls.js)
    ]);

    if (!["approved", "verified"].includes(manifest.status)) throw new Error(`${id} 배포 상태가 verified 또는 approved가 아닙니다.`);

    /* 요약 한 줄도 보고 있는 화면 기준이다 — 크기가 한 가지인 화면에서는 크기를 말하지 않는다
       (river 확정 2026-09-01). 갈래 선언이 없는 컴포넌트는 한 문장을 그대로 쓴다. */
    const scopeText = typeof config.approvedScope === "string"
      ? config.approvedScope
      : config.approvedScope[currentPlatform()] ?? config.approvedScope.pc;

    /* 배포본이 선언한 플랫폼별 예제만 쓴다. 선언이 없으면 PC 1벌(플랫폼 축 없는 컴포넌트). */
    const platform = currentPlatform();
    const hasMobileExample = Boolean(manifest.htmlContract?.breakExamples?.mobile);
    const html = hasMobileExample && platform === "mobile"
      ? await fetchText(sourceUrls.htmlMobile)
      : htmlPc;

    /* 상자(demo + 개발 코드) 목록. 기본은 한 상자다.
       상자를 여럿 두는 컴포넌트는 stateMatrix 가 객체를 돌려주고, 각 상자의 예제 파일은
       배포본 manifest 의 htmlContract.breakExamples 선언을 그대로 쓴다 — 새 이름을 만들지 않는다. */
    const matrix = stateMatrix(id);
    const blocks = [];
    if (typeof matrix === "string") {
      const mainExample = hasMobileExample && platform === "mobile"
        ? declaredExamples(manifest).mobile?.distribution
        : declaredExamples(manifest).pc?.distribution;
      blocks.push({ key: "", uid: id, title: "실제 동작과 상태", note: scopeText, matrix, html, first: true, example: mainExample ?? `examples/${id}.html` });
    } else {
      const declared = manifest.htmlContract?.breakExamples ?? {};
      const parts = demoBlockConfig[id] ?? [];
      for (const [index, part] of parts.entries()) {
        const exampleKey = platform === "mobile" && declared[part.exampleMobile] ? part.exampleMobile : part.example;
        const distribution = declared[exampleKey]?.distribution;
        if (!distribution) throw new Error(`${id} ${part.key} 상자의 예제 선언(${exampleKey})이 배포본 manifest 에 없습니다.`);
        blocks.push({
          key: part.key,
          uid: `${id}-${part.key}`,
          title: part.title,
          note: part.note,
          matrix: matrix[part.key],
          html: await fetchText(new URL(`../../ui-library/dist/${distribution}`, import.meta.url)),
          example: distribution,
          first: index === 0
        });
      }
    }

    // 실제 동작·상태를 먼저 보이고, 설명 문서는 그 뒤에 둔다.
    const overview = (data) => componentOverview(id, data);
    const fragment = document.createElement("div");
    fragment.className = "uilg";
    fragment.dataset.guideComponent = id;
    fragment.innerHTML = `
      <header class="uilg-header">
        <div class="uilg-title-group">
          <h2 class="uilg-title">${config.title}</h2>
          <p class="uilg-description">${config.description}</p>
        </div>
        <div class="uilg-badges" aria-label="배포 상태">
          <span class="uilg-badge uilg-badge-approved">${manifest.status === "approved" ? "Approved" : "검수 준비"}</span>
          <span class="uilg-badge">Core</span>
          <span class="uilg-badge">v${escapeHtml(manifest.version)}</span>
          <span class="uilg-badge">실제 dist 사용</span>
        </div>
      </header>
      ${blocks.map((block) => `
      <div class="uilg-demo-block" data-guide-block="${block.key || "main"}" data-guide-example="${block.example}">
        <section class="uilg-demo preview-area" aria-labelledby="${block.uid}-demo-title">
          <div class="uilg-demo-head">
            <div><h2 class="uilg-section-title" id="${block.uid}-demo-title">${block.title}</h2><p class="uilg-demo-note">${block.note}</p></div>
            ${block.first ? `<p class="uilg-status-text">이 설명 화면과 배포 파일은 같은 <strong>ui-library/dist</strong>를 사용합니다.</p>` : ""}
          </div>
          ${block.matrix}
        </section>
        <section aria-labelledby="${block.uid}-code-heading">
          <div class="uilg-title-group">
            <h2 class="uilg-section-title" id="${block.uid}-code-heading">개발 코드</h2>
          </div>
          ${codeViewer(id, block.key)}
        </section>
      </div>`).join("")}
      ${overview(registry)}`;

    section.replaceChildren(fragment);
    /* 상자마다 자기 마크업을 단다 — CSS·JavaScript 는 부품 하나라 세 상자가 같은 것을 가리킨다. */
    for (const block of blocks) {
      const scope = section.querySelector(`[data-guide-block="${block.key || "main"}"]`);
      if (scope) wireCodeViewer(scope, { html: block.html, css, js });
    }
    if (id === "toggle" || id === "chip" || id === "select" || id === "dropdown" || id === "filter-chip" || id === "tab" || id === "pagination" || id === "multi-toggle" || id === "table" || id === "time-picker" || id === "date-picker") {
      /* 미리보기 칸(.is-preview)은 init 하지 않는다 — 런타임이 패널을 다시 닫아
         Open/Selected 칸이 사라진다. Action 영역의 실물만 살린다. */
      section.querySelectorAll(`[data-s1-component="${id}"]:not(.is-preview)`).forEach((root) => config.runtime.init(root));
    }
    if (id === "gnb") {
      /* GNB — 2026-09-09부터 jsRequired=true(D4·D5). aria-controls 를 가진 메뉴가 없는 인스턴스는
         init() 이 조용히 아무 것도 안 하므로 .is-preview 구분 없이 전부 init 해도 안전하다 —
         조립 예시(gnbAssembledMarkup)만 실제로 열리고 닫힌다. */
      section.querySelectorAll('[data-s1-component="gnb"]').forEach((root) => config.runtime.init(root));
    }
    /* 목업 안에서 열리는 시트는 페이지를 덮지 않는다 — 그런데 배포본은 시트를 열 때
       document.body 의 스크롤을 잠근다(실제 서비스에서는 화면 전체를 덮으므로 맞는 동작이다).
       안내 화면에서는 그 잠금 때문에 시트를 하나 열어 두면 페이지 전체가 멈춘다(river 제보 2026-09-07).
       배포본을 고치지 않고, 목업 안에서 열린 경우에만 잠금을 되돌린다. */
    if (id === "time-picker" || id === "date-picker") {
      section.addEventListener(`s1:${id}:open`, (event) => {
        if (event.target.closest(".uilg-phone")) document.body.style.overflow = "";
      });
    }

    if (id === "table") {
      /* Action 영역에 조립한 페이지네이션·보기 셀렉박스는 각자의 배포본 런타임으로 살린다.
         (Table 은 이 둘을 소유하지 않는다 — river 결정 2026-09-02) */
      section.querySelectorAll('.uilg-table-action [data-s1-component="pagination"]').forEach((root) => S1UI.pagination.init(root));
      section.querySelectorAll('.uilg-table-action [data-s1-component="select"]').forEach((root) => S1UI.select.init(root));
    }
    if (id === "modal") {
      /* Action 영역의 진짜 모달만 배선한다. 미리보기 칸(.is-preview)은 지면에 눕혀 둔 표시라
         init 하지 않는다 — init 하면 배경 스크롤이 잠긴 채로 남는다. */
      section.querySelectorAll(".uilg-modal-action").forEach((area) => {
        const root = area.querySelector('[data-s1-component="modal"]');
        const trigger = area.querySelector("[data-modal-open]");
        if (!root || !trigger) return;
        /* 배포본 계약대로 모달은 body 바로 아래에 둔다(manifest.htmlContract.placement).
           안내 화면 안에 두면 상단 고정바가 모달 위에 남는다 — 쌓임 맥락에 갇히기 때문이다. */
        document.body.append(root);
        const api = config.runtime.init(root);
        trigger.addEventListener("click", () => api?.open());
        root.querySelectorAll("[data-modal-close]").forEach((button) => {
          if (button.dataset.s1Part === "close") return;   /* 닫기(X)는 런타임이 이미 배선한다 */
          button.addEventListener("click", () => api?.close({ reason: "footer-button" }));
        });
      });
    }
    if (id === "modal-content") {
      /* Action 영역의 진짜 콘텐츠 모달만 배선한다. 미리보기 칸(.is-preview)은 지면에 눕혀 둔 표시라
         init 하지 않는다 — init 하면 배경 스크롤이 잠긴 채로 남는다. */
      section.querySelectorAll(".uilg-modal-content-action").forEach((area) => {
        const root = area.querySelector('[data-s1-component="modal-content"]');
        const trigger = area.querySelector("[data-modal-open]");
        if (!root || !trigger) return;
        /* 배포본 계약대로 모달은 body 바로 아래에 둔다(manifest.htmlContract.placement). */
        document.body.append(root);
        const api = config.runtime.init(root);
        trigger.addEventListener("click", () => api?.open());
        root.querySelectorAll("[data-modal-close]").forEach((button) => {
          if (button.dataset.s1Part === "close") return;   /* 닫기(X)는 런타임이 이미 배선한다 */
          button.addEventListener("click", () => api?.close({ reason: "footer-button" }));
        });
      });
    }
    if (id === "mobile-header") {
      /* 옵션칩으로 고른 유형을 목업 헤더 슬롯에 다시 그린다. 배포본은 런타임이 없는 정적 크롬이라
         init 은 필요 없고, 화면이 마크업만 갈아끼운다(부품 경계 그대로). */
      section.querySelectorAll("[data-mobile-header-type]").forEach((radio) => {
        radio.addEventListener("change", () => {
          const action = radio.closest(".comp-action-top");
          const slot = action?.querySelector(".uilg-phone-header-slot");
          if (!slot) return;
          slot.innerHTML = mobileHeaderMarkup(radio.value);
          /* 정본은 상태바가 헤더 프레임 배경을 그대로 물려받는다 — 유형이 바뀌면 위쪽 크롬 색도 함께 바뀐다. */
          const phone = action.querySelector(".uilg-phone");
          if (phone) phone.dataset.headerBg = radio.value.startsWith("home-") ? "home" : "level-0";
          action.querySelectorAll("[data-mobile-header-type]").forEach((other) => {
            other.closest(".uilg-option-chip")?.classList.toggle("is-on", other.checked);
          });
        });
      });
    }
    if (id === "input") {
      section.querySelectorAll('[data-s1-component="input"]:not(.is-preview)').forEach((root) => config.runtime.init(root));
      /* Wire message toggle chips in Action area */
      section.querySelectorAll("[data-input-msg-toggle]").forEach((toggle) => {
        const chipText = toggle.closest(".uilg-option-chip")?.querySelector(".uilg-option-chip-text");
        toggle.addEventListener("change", () => {
          const action = toggle.closest(".comp-action-top");
          if (!action) return;
          const input = action.querySelector('[data-s1-component="input"]');
          if (!input) return;
          let msg = input.querySelector('[data-s1-part="message"]');
          if (toggle.checked) {
            if (!msg) {
              msg = document.createElement("p");
              msg.dataset.s1Part = "message";
              msg.id = "action-input-msg";
              msg.textContent = "안내 메시지";
              input.append(msg);
              const ctrl = input.querySelector('[data-s1-part="control"]');
              if (ctrl) ctrl.setAttribute("aria-describedby", msg.id);
            }
            msg.hidden = false;
            if (chipText) chipText.innerHTML = 'Message: <strong>on</strong>';
          } else if (msg) {
            msg.hidden = true;
            const ctrl = input.querySelector('[data-s1-part="control"]');
            if (ctrl) ctrl.removeAttribute("aria-describedby");
          }
          if (!toggle.checked && chipText) chipText.innerHTML = 'Message: <strong>off</strong>';
          toggle.closest(".uilg-option-chip")?.classList.toggle("is-on", toggle.checked);
        });
      });
      /* Search Input Action — s1:input:search 를 눈으로 확인 (river D2: Enter·클릭 둘 다 낸다). */
      section.addEventListener("s1:input:search", (event) => {
        const note = event.target.closest(".comp-action-top")?.querySelector("[data-search-live-note]");
        if (note) note.textContent = `검색 실행됨 — 값: "${event.detail.value}"`;
      });
    }
  } catch (error) {
    section.replaceChildren();
    const message = document.createElement("div");
    message.className = "uilg-load-error";
    message.textContent = `${config.title} 승인 배포본을 불러오지 못했습니다: ${error.message}`;
    section.append(message);
    console.error(error);
  }
}

const guideComponents = ["input", "button", "assist-button", "text-button", "checkbox", "radio", "toggle", "chip", "select", "dropdown", "filter-chip", "tab", "pagination", "textarea", "multi-toggle", "modal", "modal-content", "table", "mobile-bottom-nav", "mobile-header", "gnb", "gnb-sub-menu-item", "gnb-sub-menu", "time-picker", "date-picker"];
await Promise.all(guideComponents.map(mountGuide));
document.dispatchEvent(new CustomEvent("s1:component-guide:ready", { detail: { components: guideComponents } }));
