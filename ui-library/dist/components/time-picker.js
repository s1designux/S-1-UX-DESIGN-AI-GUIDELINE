import { init as initTab, destroy as destroyTab } from "./tab.js";

export const componentId = "time-picker";
export const jsRequired = true;

const instances = new WeakMap();

/* ── 팝오버 띄우기 (date-picker·time-picker·select·filter-chip 공통 배선, 2026-09-28) ──────────────
   패널은 기본적으로 컴포넌트 안에 position:absolute 로 붙는다. 소비자가 컴포넌트를 스크롤 상자
   (overflow:auto|scroll|hidden) 안에 넣으면 그 상자가 패널을 잘라낸다 — 특히 위로 뒤집을 때 상자
   윗변에서 잘린다(안내 페이지 Date Picker XXSM 실측: 위쪽 165px 잘림).
   그래서 **열려 있는 동안만** position:fixed 로 띄우고 트리거 좌표로 직접 붙인다 — 어떤 조상도
   자르지 못한다. 닫으면 인라인 값을 전부 지워 원래(absolute) 계약으로 되돌린다(정적 Open 표본 불변).
   width:100% / min-width:100% 를 쓰는 패널은 fixed 가 되면 기준이 뷰포트로 바뀌므로, 띄우는 동안
   따라갈 요소의 실제 폭을 px 로 고정해 준다. */
const PANEL_VIEWPORT_MARGIN = 8;

function floatPanel(trigger, panel, { gap = 8, widthFrom = null, minWidthFrom = null } = {}) {
  if (widthFrom) panel.style.width = `${widthFrom.getBoundingClientRect().width}px`;
  if (minWidthFrom) panel.style.minWidth = `${minWidthFrom.getBoundingClientRect().width}px`;
  panel.setAttribute("data-s1-float", "fixed");
  // 재계산 전에 좌표를 0,0 으로 되돌려야 이전 위치가 크기 측정에 섞이지 않는다.
  panel.style.top = "0px";
  panel.style.left = "0px";
  const t = trigger.getBoundingClientRect();
  const p = panel.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;
  const roomBelow = vh - t.bottom - gap;
  const roomAbove = t.top - gap;
  /* 위로 뒤집는 건 **위에 온전히 들어갈 때만** 이다. 양쪽 다 모자라면 아래로 둔다 —
     아래로 넘친 부분은 스크롤로 볼 수 있지만, 위로 넘친 부분은 볼 방법이 없다. */
  const flipUp = p.height > roomBelow && p.height <= roomAbove;
  /* 세로는 트리거에 그대로 붙인다(화면 안으로 끌어당기지 않는다) — 끌어당기면 트리거가 화면 밖으로
     스크롤됐을 때 패널만 화면 끝에 홀로 남는다. 가로만 화면 밖으로 나가지 않게 당겨 준다. */
  const maxLeft = Math.max(PANEL_VIEWPORT_MARGIN, vw - PANEL_VIEWPORT_MARGIN - p.width);
  const top = flipUp ? t.top - gap - p.height : t.bottom + gap;
  const left = Math.min(Math.max(PANEL_VIEWPORT_MARGIN, t.left), maxLeft);
  panel.style.top = `${Math.round(top)}px`;
  panel.style.left = `${Math.round(left)}px`;
  if (flipUp) panel.setAttribute("data-flip", "up");
  else panel.removeAttribute("data-flip");
}

function unfloatPanel(panel) {
  panel.removeAttribute("data-s1-float");
  panel.removeAttribute("data-flip");
  panel.style.top = "";
  panel.style.left = "";
  panel.style.width = "";
  panel.style.minWidth = "";
}

function getParts(root) {
  return {
    trigger: root.querySelector('[data-s1-part="trigger"]'),
    value: root.querySelector('[data-s1-part="value"]'),
    panel: root.querySelector('[data-s1-part="panel"]'),
    columns: [...root.querySelectorAll('[data-s1-part="column"]')],
    confirm: root.querySelector('[data-s1-part="confirm"]'),
    sheet: root.querySelector('[data-s1-part="sheet"]'),
    sheetBackdrop: root.querySelector('[data-s1-part="sheet-backdrop"]'),
    sheetPanel: root.querySelector('[data-s1-part="sheet-panel"]'),
    sheetClose: root.querySelector('[data-s1-part="sheet-close"]'),
    tabsRoot: root.querySelector('[data-s1-part="tabs"]'),
    datePanel: root.querySelector('[data-s1-part="date-panel"]'),
    wheelCols: [...root.querySelectorAll('[data-s1-part="wheel-col"]')],
    apply: root.querySelector('[data-s1-part="apply"]')
  };
}

function isOpen(trigger) {
  return trigger.getAttribute("aria-expanded") === "true";
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

// 정본에 실제 목록 범위·간격 규정이 없다(1-inventory §E) — river 결정(D2): 분은 기본 1분 단위,
// data-minute-step 으로 소비자가 조절한다. 시 표기는 24h 2자리 / 12h 1~12(1-inventory 근거).
function buildItems(column, type) {
  if (column === "ampm") return ["오전", "오후"];
  if (column === "hour") {
    return type === "12h"
      ? Array.from({ length: 12 }, (_, i) => String(i + 1))
      : Array.from({ length: 24 }, (_, i) => pad2(i));
  }
  return []; // minute — step 은 호출부에서 처리
}

function buildMinuteItems(step) {
  const items = [];
  for (let m = 0; m < 60; m += step) items.push(pad2(m));
  return items;
}

function getCells(column) {
  return [...column.querySelectorAll('[data-s1-part="cell"]')];
}

function setActive(column, cell) {
  for (const c of getCells(column)) c.tabIndex = c === cell ? 0 : -1;
}

function selectedCell(column) {
  return getCells(column).find((c) => c.getAttribute("aria-selected") === "true") || null;
}

// ── 모바일 휠 바텀시트 헬퍼 (build-components.ts buildTimePickerMobileBottomSheet 3862-4060) ──
// 정본은 정적 스펙 샘플(3~4칸)일 뿐 실제 스크롤 동작이 없다. 아래 스크롤·중앙정렬 판정 메커니즘은
// 웹에서 실제로 작동하게 만들기 위한 오케스트레이터 결정이다(manifest notInCanon.wheelScrollMechanism).
function getWheelCells(col) {
  return [...col.querySelectorAll('[data-s1-part="wheel-cell"]')];
}

// 컬럼 안에서 스크롤 중앙에 가장 가까운 칸을 찾는다(값 판정 — 시각 강조는 하지 않는다, 정본이
// 전 셀 동일 accent 색이라 강조 없이 마스크만으로 위계를 준다).
function centeredWheelCell(col) {
  const cells = getWheelCells(col);
  if (!cells.length) return null;
  const colRect = col.getBoundingClientRect();
  const colCenter = colRect.top + colRect.height / 2;
  let best = cells[0];
  let bestDist = Infinity;
  for (const cell of cells) {
    const rect = cell.getBoundingClientRect();
    const dist = Math.abs(rect.top + rect.height / 2 - colCenter);
    if (dist < bestDist) { bestDist = dist; best = cell; }
  }
  return best;
}

// 즉시 이동(instant) 고정 — smooth 는 순수 장식이고 정본에 모션 규정이 없다(registry a11y reducedMotion: not-applicable).
// 실제 렌더 검증(2026-09-03)에서 smooth 가 값을 아예 못 옮기는 렌더 환경이 확인돼(스크롤이 0으로 멈춤)
// 키보드·클릭 이동의 기능적 신뢰성을 위해 instant 로 고정한다.
function scrollCellToCenter(col, cell, behavior = "instant") {
  if (!cell) return;
  col.scrollTo({ top: cell.offsetTop - (col.clientHeight - cell.offsetHeight) / 2, behavior });
}

const SHEET_FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");

function sheetFocusables(sheetPanel) {
  return [...sheetPanel.querySelectorAll(SHEET_FOCUSABLE)].filter((el) => el.offsetParent !== null);
}

function buildWheelColumn(col, type, minuteStep) {
  const kind = col.dataset.column;
  const items = kind === "minute" ? buildMinuteItems(minuteStep)
    : kind === "colon" ? [":"]
    : buildItems(kind, type);
  const repeated = kind === "colon" ? Array.from({ length: 20 }, () => ":") : items; // colon 열은 장식용 — 스크롤 없이 고정
  for (const item of repeated) {
    const cell = document.createElement("div");
    cell.dataset.s1Part = "wheel-cell";
    if (kind !== "colon") {
      cell.setAttribute("role", "option");
      cell.dataset.value = item;
      cell.tabIndex = -1;
    }
    cell.textContent = item;
    col.appendChild(cell);
  }
}

export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);

  const { trigger, value, panel, columns, confirm, sheet, sheetBackdrop, sheetPanel, sheetClose, tabsRoot, datePanel, wheelCols, apply } = getParts(root);
  const hasListPanel = !!(panel && confirm && columns.length > 0);
  const hasWheelSheet = !!sheet;
  if (!trigger || !value || (!hasListPanel && !hasWheelSheet)) return null;

  const type = root.dataset.type === "12h" ? "12h" : "24h";
  const stepRaw = Number.parseInt(root.dataset.minuteStep, 10);
  const minuteStep = Number.isFinite(stepRaw) && stepRaw >= 1 && stepRaw <= 59 ? stepRaw : 1;
  const mobileContent = root.dataset.mobileContent === "date-time" ? "date-time" : "time-only";

  if (!trigger.hasAttribute("aria-haspopup")) trigger.setAttribute("aria-haspopup", hasWheelSheet && !hasListPanel ? "dialog" : "listbox");
  trigger.setAttribute("aria-expanded", "false");

  // ── 목록 모드(기존, 변경 없음) ──────────────────────────────────────────────
  const columnByKind = {};
  let requiredKinds = [];
  let syncConfirm = () => {};
  let formatValue = () => null;
  let handleColumnClick = () => {};
  let handleColumnKeydown = () => {};
  let handleConfirmClick = () => {};
  let focusInitialList = () => {};

  if (hasListPanel) {
    for (const column of columns) columnByKind[column.dataset.column] = column;

    for (const column of columns) {
      if (getCells(column).length > 0) continue;
      const kind = column.dataset.column;
      const items = kind === "minute" ? buildMinuteItems(minuteStep) : buildItems(kind, type);
      for (const item of items) {
        const cell = document.createElement("div");
        cell.dataset.s1Part = "cell";
        cell.setAttribute("role", "option");
        cell.setAttribute("aria-selected", "false");
        cell.tabIndex = -1;
        cell.dataset.value = item;
        cell.textContent = item;
        column.appendChild(cell);
      }
      const first = getCells(column)[0];
      if (first) first.tabIndex = 0;
    }
    for (const column of columns) {
      const sel = selectedCell(column);
      if (sel) setActive(column, sel);
    }
    for (const column of columns) {
      for (const cell of getCells(column)) {
        if (cell.dataset.value == null) cell.dataset.value = cell.textContent.trim();
        if (!cell.hasAttribute("tabindex")) cell.tabIndex = -1;
      }
    }

    panel.hidden = true;
    requiredKinds = type === "12h" ? ["ampm", "hour", "minute"] : ["hour", "minute"];

    syncConfirm = () => {
      const complete = requiredKinds.every((kind) => selectedCell(columnByKind[kind]));
      confirm.disabled = !complete;
    };
    syncConfirm();

    formatValue = () => {
      const hour = selectedCell(columnByKind.hour)?.dataset.value;
      const minute = selectedCell(columnByKind.minute)?.dataset.value;
      if (hour == null || minute == null) return null;
      if (type === "12h") {
        const ampm = selectedCell(columnByKind.ampm)?.dataset.value ?? "";
        return { text: `${ampm} ${hour}:${minute}`.trim(), hour, minute, ampm };
      }
      return { text: `${hour}:${minute}`, hour, minute, ampm: null };
    };

    focusInitialList = () => {
      for (const column of columns) {
        const target = selectedCell(column) || getCells(column)[0];
        if (target) {
          setActive(column, target);
          if (column === columns[0]) target.focus();
        }
      }
    };

    const selectCell = (column, cell) => {
      for (const c of getCells(column)) c.setAttribute("aria-selected", String(c === cell));
      setActive(column, cell);
      syncConfirm();
    };

    const moveFocus = (column, from, delta) => {
      const list = getCells(column);
      if (!list.length) return;
      const index = list.indexOf(from);
      const clamped = Math.min(Math.max((index < 0 ? 0 : index) + delta, 0), list.length - 1);
      const next = list[clamped];
      setActive(column, next);
      next.focus();
    };

    const moveColumn = (from, delta) => {
      const index = columns.indexOf(from);
      const target = columns[Math.min(Math.max(index + delta, 0), columns.length - 1)];
      if (!target || target === from) return;
      const active = selectedCell(target) || getCells(target)[0];
      if (active) {
        setActive(target, active);
        active.focus();
      }
    };

    handleColumnClick = (event) => {
      const cell = event.target.closest('[data-s1-part="cell"]');
      if (!cell) return;
      const column = cell.closest('[data-s1-part="column"]');
      if (!column) return;
      selectCell(column, cell);
    };

    handleColumnKeydown = (event) => {
      const cell = event.target.closest('[data-s1-part="cell"]');
      if (!cell) return;
      const column = cell.closest('[data-s1-part="column"]');
      if (!column) return;
      if (event.key === "ArrowDown") { event.preventDefault(); moveFocus(column, cell, 1); }
      else if (event.key === "ArrowUp") { event.preventDefault(); moveFocus(column, cell, -1); }
      else if (event.key === "ArrowRight") { event.preventDefault(); moveColumn(column, 1); }
      else if (event.key === "ArrowLeft") { event.preventDefault(); moveColumn(column, -1); }
      else if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectCell(column, cell); }
    };

    handleConfirmClick = () => {
      const result = formatValue();
      if (!result) return;
      if (value) value.textContent = result.text;
      trigger.dataset.filled = "true";
      close();
      root.dispatchEvent(new CustomEvent("s1:time-picker:change", {
        bubbles: true,
        detail: { value: result.text, hour: result.hour, minute: result.minute, ampm: result.ampm, type }
      }));
    };

    panel.addEventListener("click", handleColumnClick);
    panel.addEventListener("keydown", handleColumnKeydown);
    confirm.addEventListener("click", handleConfirmClick);
  }

  // ── 모바일 휠 바텀시트 모드 (신규) ───────────────────────────────────────────
  const wheelColByKind = {};
  let centerWheelDefault = null;
  let tabApi = null;
  let sheetLastFocused = null;

  if (hasWheelSheet) {
    for (const col of wheelCols) wheelColByKind[col.dataset.column] = col;
    for (const col of wheelCols) {
      if (getWheelCells(col).length > 0) continue;
      buildWheelColumn(col, type, minuteStep);
    }
    // 콜론 열은 장식(스크롤 없음) — 값 열만 Tab 으로 도달 가능해야 화살표 키로 값을 바꿀 수 있다.
    for (const col of wheelCols) {
      if (col.dataset.column === "colon") continue;
      if (!col.hasAttribute("tabindex")) col.tabIndex = 0;
      if (!col.hasAttribute("aria-label") && col.dataset.column) col.setAttribute("aria-label", col.dataset.column);
    }
    sheet.hidden = true;

    /* 초기 표시 — 아직 고른 값이 없으면 **지금 시각**을 가운데에 놓는다(river 결정 2026-09-07).
       종전엔 각 열의 첫 값을 중앙에 두어 그 위가 통째로 비어 보였다.
       분은 소비자가 정한 간격(minuteStep)에 맞춰 가장 가까운 아래 눈금으로 내린다 —
       목록에 없는 값을 가리키면 가운데가 비기 때문이다.
       트리거 값은 바뀌지 않는다: "적용"을 눌러야 값이 남는 동작은 그대로다. */
    const wheelNow = () => {
      const now = new Date();
      const h24 = now.getHours();
      const minute = pad2(Math.floor(now.getMinutes() / minuteStep) * minuteStep);
      if (type === "12h") {
        const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
        return { ampm: h24 < 12 ? "오전" : "오후", hour: String(h12), minute };
      }
      return { ampm: "오전", hour: pad2(h24), minute };
    };
    centerWheelDefault = () => {
      const target = wheelNow();
      for (const kind of ["ampm", "hour", "minute"]) {
        const col = wheelColByKind[kind];
        if (!col) continue;
        const cells = getWheelCells(col);
        const wanted = cells.find((c) => c.dataset.value === target[kind]);
        scrollCellToCenter(col, wanted ?? cells[0]);
      }
    };
    centerWheelDefault();
    const colonCol = wheelColByKind.colon;
    if (colonCol) scrollCellToCenter(colonCol, getWheelCells(colonCol)[Math.floor(getWheelCells(colonCol).length / 2)]);

    if (tabsRoot && mobileContent === "date-time") {
      tabApi = initTab(tabsRoot);
      tabsRoot.addEventListener("s1:tab:change", (event) => {
        const showDate = event.detail?.value === "date";
        if (datePanel) datePanel.hidden = !showDate;
        const wheel = root.querySelector('[data-s1-part="wheel"]');
        if (wheel) wheel.hidden = showDate;
      });
    }
  }

  const readWheelValue = () => {
    const hourCell = centeredWheelCell(wheelColByKind.hour);
    const minuteCell = centeredWheelCell(wheelColByKind.minute);
    const hour = hourCell?.dataset.value;
    const minute = minuteCell?.dataset.value;
    if (hour == null || minute == null) return null;
    if (type === "12h") {
      const ampm = centeredWheelCell(wheelColByKind.ampm)?.dataset.value ?? "";
      return { text: `${ampm} ${hour}:${minute}`.trim(), hour, minute, ampm };
    }
    return { text: `${hour}:${minute}`, hour, minute, ampm: null };
  };

  const handleWheelColKeydown = (event) => {
    const col = event.target.closest('[data-s1-part="wheel-col"]');
    if (!col || col.dataset.column === "colon") return;
    const cells = getWheelCells(col);
    const current = centeredWheelCell(col);
    const index = Math.max(0, cells.indexOf(current));
    if (event.key === "ArrowUp") { event.preventDefault(); scrollCellToCenter(col, cells[Math.max(0, index - 1)]); }
    else if (event.key === "ArrowDown") { event.preventDefault(); scrollCellToCenter(col, cells[Math.min(cells.length - 1, index + 1)]); }
  };
  const handleWheelColClick = (event) => {
    const cell = event.target.closest('[data-s1-part="wheel-cell"]');
    const col = event.target.closest('[data-s1-part="wheel-col"]');
    if (!cell || !col || col.dataset.column === "colon") return;
    scrollCellToCenter(col, cell);
  };

  const handleApplyClick = () => {
    const result = readWheelValue();
    if (!result) return;
    if (value) value.textContent = result.text;
    trigger.dataset.filled = "true";
    close();
    root.dispatchEvent(new CustomEvent("s1:time-picker:change", {
      bubbles: true,
      detail: { value: result.text, hour: result.hour, minute: result.minute, ampm: result.ampm, type }
    }));
  };

  // ── 공용 열기/닫기 — 목록 패널과 휠 시트 중 마크업에 있는 쪽으로 분기한다 ──────────
  // 목록은 열려 있는 동안 화면 고정 층으로 띄운다 — 스크롤 상자 안에서도 잘리지 않고,
  // 화면 아래가 모자라면 위로 뒤집는다. 폭은 CSS 가 min-width:100%(= 트리거 폭)로 잡으므로
  // 띄우는 동안 트리거의 실제 폭을 px 로 넘겨준다(고정폭 121/194 는 CSS 가 그대로 유지한다).
  const positionPanel = () => {
    if (!hasListPanel || panel.hidden) return;
    floatPanel(trigger, panel, { gap: 4, minWidthFrom: trigger });
  };
  const handleReposition = () => positionPanel();

  const close = ({ returnFocus = true } = {}) => {
    if (!isOpen(trigger)) return;
    trigger.setAttribute("aria-expanded", "false");
    if (hasListPanel) {
      panel.hidden = true;
      unfloatPanel(panel);
      document.removeEventListener("pointerdown", handleOutsidePointer, true);
      window.removeEventListener("scroll", handleReposition, true);
      window.removeEventListener("resize", handleReposition);
    }
    if (hasWheelSheet) {
      sheet.hidden = true;
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleSheetKeydown, true);
      if (returnFocus && sheetLastFocused?.focus) sheetLastFocused.focus();
      root.dispatchEvent(new CustomEvent("s1:time-picker:close", { bubbles: true, detail: {} }));
      return;
    }
    if (returnFocus) trigger.focus();
    root.dispatchEvent(new CustomEvent("s1:time-picker:close", { bubbles: true, detail: {} }));
  };

  const handleSheetKeydown = (event) => {
    if (event.key === "Escape") { event.preventDefault(); close(); return; }
    if (event.key !== "Tab" || !sheetPanel) return;
    const list = sheetFocusables(sheetPanel);
    if (!list.length) { event.preventDefault(); sheetPanel.focus(); return; }
    const first = list[0];
    const last = list[list.length - 1];
    if (!sheetPanel.contains(document.activeElement)) { event.preventDefault(); (event.shiftKey ? last : first).focus(); return; }
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  const open = () => {
    if (trigger.disabled || isOpen(trigger)) return;
    trigger.setAttribute("aria-expanded", "true");
    if (hasListPanel) {
      panel.hidden = false;
      positionPanel();
      document.addEventListener("pointerdown", handleOutsidePointer, true);
      window.addEventListener("scroll", handleReposition, true);
      window.addEventListener("resize", handleReposition);
      focusInitialList();
    } else if (hasWheelSheet) {
      sheetLastFocused = trigger; // 항상 자기 트리거로 복귀(document.activeElement 는 클릭 방식에 따라 신뢰 불가)
      sheet.hidden = false;
      /* 시트가 닫혀 있는 동안에는 열 높이가 0 이라 스크롤 위치가 잡히지 않는다 — 화면에 붙은 뒤
         한 번 더 잡아야 기본값이 실제로 가운데에 온다(실측 2026-09-07). 이미 고른 값이 있으면
         그 자리를 지킨다: 트리거가 값을 들고 있을 때(data-filled)는 다시 잡지 않는다. */
      if (centerWheelDefault && trigger.dataset.filled !== "true") centerWheelDefault();
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleSheetKeydown, true);
      const firstFocusable = sheetPanel ? sheetFocusables(sheetPanel)[0] : null;
      (firstFocusable || sheetPanel)?.focus();
    }
    root.dispatchEvent(new CustomEvent("s1:time-picker:open", { bubbles: true, detail: {} }));
  };

  const handleOutsidePointer = (event) => {
    if (!root.contains(event.target)) close({ returnFocus: false });
  };

  const handleTriggerClick = () => {
    if (isOpen(trigger)) close();
    else open();
  };

  const handleTriggerKeydown = (event) => {
    if (trigger.disabled) return;
    if (event.key === "ArrowDown" && !isOpen(trigger)) {
      event.preventDefault();
      open();
    }
  };

  const handleRootKeydown = (event) => {
    if (event.key === "Escape" && isOpen(trigger)) {
      event.preventDefault();
      close();
    }
  };

  trigger.addEventListener("click", handleTriggerClick);
  trigger.addEventListener("keydown", handleTriggerKeydown);
  root.addEventListener("keydown", handleRootKeydown);
  if (hasWheelSheet) {
    sheetClose?.addEventListener("click", () => close());
    sheetBackdrop?.addEventListener("click", () => close());
    apply?.addEventListener("click", handleApplyClick);
    for (const col of wheelCols) {
      col.addEventListener("keydown", handleWheelColKeydown);
      col.addEventListener("click", handleWheelColClick);
    }
  }

  const disabledObserver = new MutationObserver(() => {
    if (trigger.disabled && isOpen(trigger)) close({ returnFocus: false });
  });
  disabledObserver.observe(trigger, { attributes: true, attributeFilter: ["disabled"] });

  const api = Object.freeze({
    get open() { return isOpen(trigger); },
    openPanel: open,
    closePanel: close,
    destroy() {
      close({ returnFocus: false });
      trigger.removeEventListener("click", handleTriggerClick);
      trigger.removeEventListener("keydown", handleTriggerKeydown);
      root.removeEventListener("keydown", handleRootKeydown);
      if (hasListPanel) {
        panel.removeEventListener("click", handleColumnClick);
        panel.removeEventListener("keydown", handleColumnKeydown);
        confirm.removeEventListener("click", handleConfirmClick);
      }
      if (hasWheelSheet) {
        apply?.removeEventListener("click", handleApplyClick);
        for (const col of wheelCols) {
          col.removeEventListener("keydown", handleWheelColKeydown);
          col.removeEventListener("click", handleWheelColClick);
        }
        if (tabApi) destroyTab(tabsRoot);
      }
      document.removeEventListener("pointerdown", handleOutsidePointer, true);
      document.removeEventListener("keydown", handleSheetKeydown, true);
      window.removeEventListener("scroll", handleReposition, true);
      window.removeEventListener("resize", handleReposition);
      if (hasListPanel) unfloatPanel(panel);
      disabledObserver.disconnect();
      instances.delete(root);
    }
  });
  instances.set(root, api);
  return api;
}

export function destroy(root) {
  instances.get(root)?.destroy();
}

export const runtime = Object.freeze({ init, destroy });
