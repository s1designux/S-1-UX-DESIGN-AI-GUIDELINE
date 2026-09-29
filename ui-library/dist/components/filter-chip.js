import { init as initDropdown, destroy as destroyDropdown } from "./dropdown.js";

export const componentId = "filter-chip";
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
    title: root.querySelector('[data-s1-part="title"]'),
    value: root.querySelector('[data-s1-part="value"]'),
    panel: root.querySelector('[data-s1-part="panel"]'),
    dropdownRoot: root.querySelector('[data-s1-component="dropdown"]')
  };
}

function isOpen(trigger) {
  return trigger.getAttribute("aria-expanded") === "true";
}

function syncAccessibleName(trigger, title, value) {
  const titleText = title?.textContent.trim();
  const valueText = value?.textContent.trim() ?? "";
  trigger.setAttribute("aria-label", titleText ? `${titleText}, ${valueText}` : valueText);
}

// river 실사용 지적(2026-09-01, ①): dropdown 코어의 min-width:140px 는 트리거가 140px 보다 좁을 때
// 목록이 칩보다 옆으로 삐져나오게 만든다. 셀렉트는 트리거가 항상 140 이상(select.css 자체 min-width)이라
// 영향이 없고, 필터칩만 정본상 트리거가 AUTO(내용만큼 줄어듦)라 실제로 140 보다 좁아진다.
// dropdown.css 공통 규칙(140~320 클램프)은 그대로 두고, 이 인스턴스(필터칩이 소유한 dropdownRoot)에만
// 인라인 style 로 min/max-width 를 덮어써 "트리거 폭 < 140 → 목록 폭 = 트리거 폭"을 강제한다.
// 트리거 폭 >= 140 인 경우는 인라인 style 을 제거해 dropdown.css 의 기존 클램프(140~320, 내용에 맞춰 확장)로 되돌린다.


export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);

  const { trigger, title, value, panel, dropdownRoot } = getParts(root);
  if (!trigger || !panel || !dropdownRoot) return null;

  if (!trigger.hasAttribute("aria-haspopup")) trigger.setAttribute("aria-haspopup", "listbox");
  if (!trigger.hasAttribute("aria-expanded")) trigger.setAttribute("aria-expanded", "false");
  panel.hidden = true;
  syncAccessibleName(trigger, title, value);

  const dropdownApi = initDropdown(dropdownRoot);

  // behavior 계약(component-behavior.pc.json "Filter Chip": on disable → close and block trigger clicks).
  // 클릭 차단은 open() 의 disabled 가드가 이미 담당한다 — 여기서는 열린 채로 비활성화될 때 자동으로 닫는다.
  // 인스턴스마다 자기 trigger 만 관찰하므로 누적되지 않고, destroy() 가 disconnect 한다.
  const disabledObserver = new MutationObserver(() => {
    if (trigger.disabled && isOpen(trigger)) close({ returnFocus: false });
  });
  disabledObserver.observe(trigger, { attributes: true, attributeFilter: ["disabled"] });

  // 패널은 열려 있는 동안 화면 고정 층으로 띄운다 — 스크롤 상자 안에서도 잘리지 않는다.
  // 폭은 CSS 가 width:100%(= 칩 폭)로 잡으므로, 띄우는 동안 root 의 실제 폭을 px 로 넘겨준다.
  const positionPanel = () => { if (!panel.hidden) floatPanel(trigger, panel, { gap: 8, widthFrom: root }); };
  const handleReposition = () => positionPanel();

  const close = ({ returnFocus = true } = {}) => {
    if (!isOpen(trigger)) return;
    trigger.setAttribute("aria-expanded", "false");
    panel.hidden = true;
    unfloatPanel(panel);
    document.removeEventListener("pointerdown", handleOutsidePointer, true);
    window.removeEventListener("scroll", handleReposition, true);
    window.removeEventListener("resize", handleReposition);
    if (returnFocus) trigger.focus();
    root.dispatchEvent(new CustomEvent("s1:filter-chip:close", { bubbles: true, detail: {} }));
  };

  const open = () => {
    if (trigger.disabled || isOpen(trigger)) return;
    trigger.setAttribute("aria-expanded", "true");
    panel.hidden = false;
    positionPanel();
    document.addEventListener("pointerdown", handleOutsidePointer, true);
    window.addEventListener("scroll", handleReposition, true);
    window.addEventListener("resize", handleReposition);
    dropdownApi?.focusActive();
    root.dispatchEvent(new CustomEvent("s1:filter-chip:open", { bubbles: true, detail: {} }));
  };

  const handleOutsidePointer = (event) => {
    if (!root.contains(event.target)) close({ returnFocus: false });
  };

  const handleTriggerClick = () => {
    if (isOpen(trigger)) close();
    else open();
  };

  // registry filter-chip.json a11y: "Esc 로 드롭다운을 닫을 수 있어야 한다." open() 이 포커스를 패널
  // 안(옵션)으로 옮기므로 트리거에만 걸면 열린 직후 Esc 가 먹지 않는다 — root 범위(트리거+패널) 전체에 건다.
  const handleRootKeydown = (event) => {
    if (event.key === "Escape" && isOpen(trigger)) {
      event.preventDefault();
      close();
    }
  };

  const handleDropdownChange = (event) => {
    if (event.detail?.type !== "text") return;
    if (value) {
      value.textContent = event.detail.option?.querySelector('[data-s1-part="option-label"]')?.textContent ?? event.detail.value ?? "";
    }
    trigger.dataset.complete = "true";
    syncAccessibleName(trigger, title, value);
    close();
    root.dispatchEvent(new CustomEvent("s1:filter-chip:change", { bubbles: true, detail: { value: event.detail.value, option: event.detail.option } }));
  };

  trigger.addEventListener("click", handleTriggerClick);
  root.addEventListener("keydown", handleRootKeydown);
  root.addEventListener("s1:dropdown:change", handleDropdownChange);

  const api = Object.freeze({
    get open() { return isOpen(trigger); },
    openPanel: open,
    closePanel: close,
    destroy() {
      trigger.removeEventListener("click", handleTriggerClick);
      root.removeEventListener("keydown", handleRootKeydown);
      root.removeEventListener("s1:dropdown:change", handleDropdownChange);
      document.removeEventListener("pointerdown", handleOutsidePointer, true);
      window.removeEventListener("scroll", handleReposition, true);
      window.removeEventListener("resize", handleReposition);
      unfloatPanel(panel);
      disabledObserver.disconnect();
      destroyDropdown(dropdownRoot);
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
