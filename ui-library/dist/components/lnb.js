export const componentId = "lnb";
export const jsRequired = true;

const instances = new WeakMap();

/* 하위메뉴를 가진 항목(button[aria-expanded][aria-controls])의 여닫이와, 우측 상단 접기 단추(collapse)를 맞춘다.
   여닫는 것은 aria-expanded ↔ 하위 목록의 hidden, 접는 것은 aria-pressed ↔ 루트 data-state 다.
   접힘 상태에서는 하위 목록이 CSS 로 감춰지므로(display:none) 트리거의 aria-expanded 도 닫힘으로 맞추고,
   열려 있던 것은 remembered 에 기억해 두었다가 다시 펼치면 이어서 연다.
   준비 중 항목([aria-disabled=true])은 눌러도 동작하지 않고(click·Enter 취소) 탭 순서에서도 뺀다(date-picker 의 비활성 칸과 같은 관례: tabIndex -1).
   잠깐 펼침(peek, river 2026-10-21) — 접힌 상태에서 메뉴 칸에 마우스를 올리면 바로(고른 칸 포함), 하위메뉴를 가진 칸은 눌러도
   펼침 모습 그대로 판을 잠깐 펼친다. 하위메뉴를 가진 칸이면 그 하위메뉴도 연다.
   메뉴 고르기 — 이동 항목(a)을 누르면 aria-current=page 를 그 항목으로 옮긴다(mobile-bottom-nav 와 같은 관례). 고른 것이 하위메뉴 줄이면
   그 상위 칸에 data-current-parent 를 달아, 접힌 띠에서도 어느 묶음이 골라졌는지 보이게 한다(river 2026-10-21 "메뉴 선택하면 선택이 안되네").
   마우스가 판을 떠나거나, 초점이 판 밖으로 나가거나, Esc 를 누르면 다시 접힌 모습으로 돌아간다.
   잠깐 펼친 동안 루트는 data-state=expanded + data-peek 이고, 사용자가 고른 상태는 여전히 접힘이다(collapsed 는 true, 접기 단추 aria-pressed 도 true).
   이때 접기 단추를 누르면 바로 접힌 모습으로 돌아간다.
   펼치면 칸 높이가 달라져 마우스 아래에 다른 메뉴가 놓인다 — 누른 메뉴에 초점과 표시(data-peek-focus)를 주고,
   마우스를 실제로 움직이기 전까지는 다른 칸의 호버 표시를 막는다(root data-peek-hold, river 2026-10-21). */
export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);

  const doc = root.ownerDocument || document;
  const collapseButton = root.querySelector('[data-s1-part="collapse"]');

  const isCollapsed = () => root.getAttribute("data-state") === "collapsed";
  let peeking = false;

  const triggers = () => root.querySelectorAll('[data-s1-part="item"][aria-controls][aria-expanded]');
  const remembered = new Set();
  const paintExpanded = (trigger, open) => {
    const panel = doc.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;
    trigger.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
  };
  /* 접힘 ↔ 표출 일치 — 접히면 열린 트리거를 기억하고 닫힘 표시, 펼치면 기억한 것을 다시 연다. */
  const syncCollapsedDisclosure = () => {
    if (isCollapsed()) {
      for (const t of triggers()) {
        if (t.getAttribute("aria-expanded") === "true") { remembered.add(t); paintExpanded(t, false); }
      }
    } else {
      for (const t of remembered) paintExpanded(t, true);
      remembered.clear();
    }
  };

  /* 잠깐 펼침 — 펼친 모습으로 바꾸되 사용자가 고른 접힘은 그대로 둔다(이벤트 없음). */
  const startPeek = (trigger, { focus = true } = {}) => {
    peeking = true;
    root.setAttribute("data-peek", "");
    root.setAttribute("data-state", "expanded");
    syncCollapsedDisclosure();
    if (trigger.matches("[aria-controls][aria-expanded]")) setExpanded(trigger, true);
    markPeekFocus(trigger);
    root.setAttribute("data-peek-hold", "");
    /* 마우스만 올려 펼친 경우는 초점을 옮기지 않는다 — 옮기면 누르지도 않았는데 초점 테두리가 뜬다. */
    if (focus) trigger.focus({ preventScroll: true });
  };
  const markPeekFocus = (trigger) => {
    for (const marked of root.querySelectorAll("[data-peek-focus]")) marked.removeAttribute("data-peek-focus");
    if (trigger) trigger.setAttribute("data-peek-focus", "");
  };
  const releaseHold = () => {
    if (!root.hasAttribute("data-peek-hold")) return;
    root.removeAttribute("data-peek-hold");
    markPeekFocus(null);
  };
  const endPeek = () => {
    if (!peeking) return;
    peeking = false;
    releaseHold();
    root.removeAttribute("data-peek");
    root.setAttribute("data-state", "collapsed");
    syncCollapsedDisclosure();
  };

  const setCollapsed = (next) => {
    const value = Boolean(next);
    if (peeking) {
      endPeek();
      if (value) return;
    }
    if (value === isCollapsed()) return;
    root.setAttribute("data-state", value ? "collapsed" : "expanded");
    if (collapseButton) collapseButton.setAttribute("aria-pressed", String(value));
    syncCollapsedDisclosure();
    root.dispatchEvent(new CustomEvent("s1:lnb:collapse", { bubbles: true, detail: { collapsed: value } }));
  };

  const setExpanded = (trigger, next) => {
    const panel = doc.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;
    const value = Boolean(next);
    if (isCollapsed()) {
      /* 접힌 동안은 하위 목록이 보이지 않으므로 표시는 닫힘으로 두고 펼칠 때 열 것만 기억한다. */
      if (value === remembered.has(trigger)) return;
      if (value) remembered.add(trigger); else remembered.delete(trigger);
      root.dispatchEvent(new CustomEvent("s1:lnb:toggle", { bubbles: true, detail: { trigger, expanded: value } }));
      return;
    }
    if (value === (trigger.getAttribute("aria-expanded") === "true")) return;
    trigger.setAttribute("aria-expanded", String(value));
    panel.hidden = !value;
    root.dispatchEvent(new CustomEvent("s1:lnb:toggle", { bubbles: true, detail: { trigger, expanded: value } }));
  };

  /* 고른 메뉴 — aria-current 를 한 칸에만 두고, 하위메뉴 줄이 골라졌으면 상위 칸에 표시를 단다. */
  const markCurrentParent = () => {
    for (const t of triggers()) {
      const panel = doc.getElementById(t.getAttribute("aria-controls"));
      t.toggleAttribute("data-current-parent", Boolean(panel && panel.querySelector('[aria-current="page"]')));
    }
  };
  const setCurrent = (item) => {
    for (const other of root.querySelectorAll('[data-s1-part="item"][aria-current]')) {
      if (other !== item) other.removeAttribute("aria-current");
    }
    item.setAttribute("aria-current", "page");
    markCurrentParent();
  };

  /* 처음 표시를 맞춘다 — aria-expanded 가 열림인데 hidden 이면(또는 반대) 하나로 정리한다. */
  for (const trigger of root.querySelectorAll('[data-s1-part="item"][aria-controls][aria-expanded]')) {
    const panel = doc.getElementById(trigger.getAttribute("aria-controls"));
    if (panel) panel.hidden = trigger.getAttribute("aria-expanded") !== "true";
  }
  if (collapseButton) collapseButton.setAttribute("aria-pressed", String(isCollapsed()));
  syncCollapsedDisclosure();
  markCurrentParent();
  for (const item of root.querySelectorAll('[data-s1-part="item"][aria-disabled="true"]')) item.tabIndex = -1;

  /* 포인터 누름 뒤에만 초점을 푼다 — 키보드 Enter/Space 의 click 은 detail 이 0 이다. */
  const byPointer = (event) => event.detail > 0;

  const handleClick = (event) => {
    const disabledItem = event.target.closest('[data-s1-part="item"][aria-disabled="true"]');
    if (disabledItem && root.contains(disabledItem)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const collapse = event.target.closest('[data-s1-part="collapse"]');
    if (collapse && root.contains(collapse)) {
      setCollapsed(!isCollapsed());
      if (byPointer(event) && collapse.matches(":hover")) collapse.blur();
      return;
    }
    const link = event.target.closest('a[data-s1-part="item"]');
    if (link && root.contains(link)) {
      setCurrent(link);
      return;
    }
    const trigger = event.target.closest('[data-s1-part="item"][aria-controls][aria-expanded]');
    if (trigger && root.contains(trigger)) {
      if (isCollapsed()) {
        startPeek(trigger);
        return;
      }
      setExpanded(trigger, trigger.getAttribute("aria-expanded") !== "true");
      if (byPointer(event) && trigger.matches(":hover")) trigger.blur();
    }
  };
  root.addEventListener("click", handleClick);

  /* 마우스를 올리면 바로 잠깐 펼침 — 메뉴 칸이면 고른 칸·하위메뉴 없는 칸도 똑같이. 펼친 뒤에는 평소처럼 누를 때만 여닫는다. */
  const handlePointerOver = (event) => {
    if (event.pointerType === "touch" || !isCollapsed()) return;
    const item = event.target.closest('[data-s1-part="item"]');
    if (!item || !root.contains(item) || item.getAttribute("aria-disabled") === "true") return;
    startPeek(item, { focus: false });
  };

  /* 잠깐 펼침 끝내기 — 마우스가 판을 떠날 때(터치는 떠남이 없어 초점·Esc 로 끝낸다). */
  const handlePointerLeave = (event) => {
    if (peeking && event.pointerType !== "touch") endPeek();
  };
  /* 마우스를 실제로 움직이면(펼침으로 생긴 칸 이동이 아니라) 표시를 풀고 평소 호버로 돌아간다. */
  const handlePointerMove = (event) => {
    if (event.movementX || event.movementY) releaseHold();
  };
  const handleFocusOut = (event) => {
    if (peeking && !(event.relatedTarget instanceof Node && root.contains(event.relatedTarget)) && !root.matches(":hover")) endPeek();
  };
  const handleKeydown = (event) => {
    if (!peeking || event.key !== "Escape") return;
    const opened = event.target.closest?.('[data-s1-part="subitems"]');
    const owner = opened ? root.querySelector(`[aria-controls="${opened.id}"]`) : null;
    endPeek();
    if (owner) owner.focus();
  };
  root.addEventListener("pointerleave", handlePointerLeave);
  root.addEventListener("pointermove", handlePointerMove);
  root.addEventListener("pointerover", handlePointerOver);
  root.addEventListener("focusout", handleFocusOut);
  root.addEventListener("keydown", handleKeydown);

  const api = Object.freeze({
    get collapsed() { return isCollapsed() || peeking; },
    get peeking() { return peeking; },
    collapse(next = true) { setCollapsed(next); },
    toggleCollapse() { setCollapsed(!isCollapsed()); },
    destroy() {
      root.removeEventListener("click", handleClick);
      root.removeEventListener("pointerleave", handlePointerLeave);
      root.removeEventListener("pointermove", handlePointerMove);
      root.removeEventListener("pointerover", handlePointerOver);
      root.removeEventListener("focusout", handleFocusOut);
      root.removeEventListener("keydown", handleKeydown);
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
