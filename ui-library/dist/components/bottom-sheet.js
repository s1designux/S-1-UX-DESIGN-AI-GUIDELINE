/* Bottom Sheet 런타임 — modal.js 를 그대로 본뜬다(구조·초점 가둠·스크롤 잠금 카운터·이미 열린
   마크업 배선까지). modal.js 를 import 하지 않는다 — 개별 설치에서 끊긴다(3-build-spec.md A-4).
   modal 과 다른 점 한 가지: 딤(backdrop) 클릭으로도 닫는다 — 이미 배포된 date-picker 시트의 동작이며
   빼면 그 화면이 퇴행한다(2-canon-readiness.md D-4). */
export const componentId = "bottom-sheet";
export const jsRequired = true;

const instances = new WeakMap();

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");

function focusables(panel) {
  return [...panel.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null || el === document.activeElement);
}

/* 배경 스크롤 잠금 — 열려 있는 **시트** 수를 세어 마지막 하나가 닫힐 때만 되돌린다.
   모달은 세지 않는다(셀 수 없다 — 별도 모듈이라 서로의 카운터가 안 보인다).

   ★ 그래서 잠그는 자리를 modal 과 **다른 요소**로 둔다: modal·modal-content 는 `body` 의
   인라인 overflow 를, 시트는 `html`(documentElement) 의 인라인 overflow 를 쓴다.
   두 모듈이 같은 자리를 저장·복원하면 겹쳐 열었을 때 서로의 저장값을 덮어써서
   ① 모달이 열려 있는데 배경이 풀리고 ② 다 닫았는데 페이지가 잠긴 채 남는다
   (2026-09-15 독립 검증에서 재현율 100% 로 잡힌 결함). 자리를 나누면 각자 자기 것만
   저장·복원하므로 여는 순서와 닫는 순서에 상관없이 "하나라도 열려 있으면 잠김"이 성립한다.
   html 에 overflow:hidden 을 걸어도 페이지 스크롤은 똑같이 잠긴다(실측 확인).

   한계(정직 표기): 이 분리는 modal 계열과의 충돌만 없앤다. 앞으로 또 다른 컴포넌트가
   html 인라인 overflow 를 쓰면 같은 문제가 생긴다 — 그때는 공용 잠금 장치를 따로 만든다. */
const scrollLock = { count: 0, previous: "" };
const scrollLockTarget = () => document.documentElement;

function lockScroll() {
  if (scrollLock.count === 0) {
    scrollLock.previous = scrollLockTarget().style.overflow;
    scrollLockTarget().style.overflow = "hidden";
  }
  scrollLock.count += 1;
}

function unlockScroll() {
  scrollLock.count = Math.max(0, scrollLock.count - 1);
  if (scrollLock.count === 0) scrollLockTarget().style.overflow = scrollLock.previous;
}

/* 겹 목록 — 열린 창(modal·modal-content·bottom-sheet)이 열린 순서대로 쌓인다. 별도 모듈끼리 보도록 전역 심볼에 둔다.
   초점 가둠·Esc 는 맨 위 한 겹만 맡는다 — 두 창이 서로 초점을 되돌리려 다투면 무한 재귀로 페이지가 멈춘다.
   (창을 겹쳐 쌓는 사용법은 지원하지 않는다. 이 장치는 그래도 멈추지 않게 하는 안전장치다.) */
const layers = (globalThis[Symbol.for("s1.ui.layers")] ??= []);
const dropLayer = (root) => { const index = layers.indexOf(root); if (index >= 0) layers.splice(index, 1); };

/* 겹 순서 — 이 창 안에서 팝오버(달력·시간·드롭다운·셀렉트·필터칩)가 열려 있으면 Esc 는 그 팝오버 몫이다.
   창까지 같이 닫으면 입력하던 내용이 날아간다. 포커스가 팝오버 밖(트리거 등)에 있으면 그 트리거를
   눌러 팝오버만 닫는다. 팝오버는 열릴 때 트리거에 aria-haspopup·aria-expanded="true" 를 단다. */
function closeTopPopover(panel) {
  const opened = panel.querySelector('[aria-haspopup][aria-expanded="true"]');
  if (!opened) return false;
  const owner = opened.closest("[data-s1-component]");
  if (!(owner && owner.contains(document.activeElement))) opened.click();
  return true;
}

/* 선언형 여닫기 — 아무 요소에 data-s1-open="<창 id>" 를 달면 누를 때 그 창이 열린다.
   창 안의 data-s1-close(값은 닫힌 이유: cancel·confirm 등, 없으면 "close")를 누르면 닫힌다. */
let declarativeOpenInstalled = false;
function installDeclarativeOpen() {
  if (declarativeOpenInstalled || typeof document === "undefined") return;
  declarativeOpenInstalled = true;
  document.addEventListener("click", (event) => {
    const trigger = event.target instanceof Element ? event.target.closest("[data-s1-open]") : null;
    if (!trigger || trigger.disabled) return;
    const target = document.getElementById(trigger.getAttribute("data-s1-open"));
    if (!target || target.dataset.s1Component !== componentId) return;
    const api = init(target);
    if (!api) return;
    event.preventDefault();
    api.open({ reason: "trigger", trigger });
  });
}

export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);

  const panel = root.querySelector('[data-s1-part="sheet-panel"]');
  if (!panel) return null;
  const closeButton = root.querySelector('[data-s1-part="sheet-close"]');
  const backdrop = root.querySelector('[data-s1-part="sheet-backdrop"]');

  let lastFocused = null;
  let locked = false;
  let openedBy = null;   // data-s1-open 으로 연 경우의 열기 요소 — 고른 값을 그 안의 [data-s1-part="value"] 에 보여 준다

  const isOpen = () => !root.hidden;
  const isTop = () => layers[layers.length - 1] === root;

  const dispatch = (name, detail = {}) => {
    root.dispatchEvent(new CustomEvent(`s1:bottom-sheet:${name}`, { bubbles: true, detail }));
  };

  const focusFirst = () => {
    const list = focusables(panel);
    (list[0] || panel).focus();
  };

  // 초점 가둠 — Tab 이 마지막에서 처음으로, Shift+Tab 이 처음에서 마지막으로 돈다.
  const trapFocus = (event) => {
    const list = focusables(panel);
    if (list.length === 0) { event.preventDefault(); panel.focus(); return; }
    const first = list[0];
    const last = list[list.length - 1];
    if (!panel.contains(document.activeElement)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
      return;
    }
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleKeydown = (event) => {
    if (!isOpen() || !isTop()) return;
    if (event.key === "Escape") {
      if (closeTopPopover(panel)) return;
      event.preventDefault();
      close({ reason: "escape" });
      return;
    }
    if (event.key === "Tab") trapFocus(event);
  };

  const handleFocusIn = (event) => {
    if (!isOpen() || !isTop()) return;
    if (!root.contains(event.target)) focusFirst();
  };

  const handleFocusOut = (event) => {
    if (!isOpen() || !isTop()) return;
    if (event.relatedTarget && root.contains(event.relatedTarget)) return;
    queueMicrotask(() => {
      if (!isOpen() || !isTop()) return;
      if (!root.contains(document.activeElement)) focusFirst();
    });
  };

  const handleCloseClick = () => close({ reason: "close-button" });
  /* 목록 줄(bottom-sheet-option)이 알아서 고른 결과 — 줄의 이벤트만 듣고 서로 import 하지 않는다(개별 설치에서 끊기지 않게).
     · 값이 바뀌면 이 시트를 연 요소(data-s1-open) 안의 [data-s1-part="value"] 글자를 고른 글자로 바꾼다. 연 요소를 모르면(스크립트로 열었다면) 이벤트만 나간다.
     · 묶음에 data-s1-close-on-select 가 있으면 줄이 닫기를 요청한다. */
  const handleOptionChange = (event) => {
    const target = openedBy?.querySelector('[data-s1-part="value"]');
    if (!target || typeof event.detail?.label !== "string") return;
    target.textContent = event.detail.label;
    openedBy.dataset.filled = "true";
  };
  const handleOptionCloseRequest = (event) => close({ reason: event.detail?.reason ?? "select" });
  const handleDeclarativeClose = (event) => {
    const closer = event.target instanceof Element ? event.target.closest("[data-s1-close]") : null;
    if (!closer || !root.contains(closer) || closer.disabled) return;
    close({ reason: closer.getAttribute("data-s1-close") || "close" });
  };
  const handleBackdropClick = () => close({ reason: "backdrop" });

  function open(detail = {}) {
    if (isOpen()) return;
    lastFocused = detail.trigger instanceof Element ? detail.trigger : document.activeElement;
    openedBy = detail.trigger instanceof Element ? detail.trigger : null;
    root.hidden = false;
    if (!layers.includes(root)) layers.push(root);
    if (!locked) { lockScroll(); locked = true; }
    document.addEventListener("keydown", handleKeydown, true);
    document.addEventListener("focusin", handleFocusIn, true);
    document.addEventListener("focusout", handleFocusOut, true);
    focusFirst();
    dispatch("open", detail);
  }

  function close(detail = {}) {
    if (!isOpen()) return;
    root.hidden = true;
    dropLayer(root);
    document.removeEventListener("keydown", handleKeydown, true);
    document.removeEventListener("focusin", handleFocusIn, true);
    document.removeEventListener("focusout", handleFocusOut, true);
    if (locked) { unlockScroll(); locked = false; }
    if (lastFocused && typeof lastFocused.focus === "function" && document.contains(lastFocused)) lastFocused.focus();
    lastFocused = null;
    dispatch("close", detail);
  }

  closeButton?.addEventListener("click", handleCloseClick);
  root.addEventListener("s1:bottom-sheet-option:change", handleOptionChange);
  root.addEventListener("s1:bottom-sheet-option:close-request", handleOptionCloseRequest);
  root.addEventListener("click", handleDeclarativeClose);
  installDeclarativeOpen();
  backdrop?.addEventListener("click", handleBackdropClick);

  // 이미 열린 채로 마크업이 들어온 경우(검수 화면·정적 예시)도 계약대로 배선한다.
  if (isOpen()) {
    if (!layers.includes(root)) layers.push(root);
    if (!locked) { lockScroll(); locked = true; }
    document.addEventListener("keydown", handleKeydown, true);
    document.addEventListener("focusin", handleFocusIn, true);
    document.addEventListener("focusout", handleFocusOut, true);
  }

  const api = Object.freeze({
    get isOpen() { return isOpen(); },
    open,
    close,
    destroy() {
      closeButton?.removeEventListener("click", handleCloseClick);
      root.removeEventListener("s1:bottom-sheet-option:change", handleOptionChange);
      root.removeEventListener("s1:bottom-sheet-option:close-request", handleOptionCloseRequest);
      root.removeEventListener("click", handleDeclarativeClose);
      backdrop?.removeEventListener("click", handleBackdropClick);
      document.removeEventListener("keydown", handleKeydown, true);
      document.removeEventListener("focusin", handleFocusIn, true);
      document.removeEventListener("focusout", handleFocusOut, true);
      dropLayer(root);
      if (locked) { unlockScroll(); locked = false; }
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
