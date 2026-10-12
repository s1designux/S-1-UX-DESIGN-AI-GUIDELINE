export const componentId = "lnb";
export const jsRequired = true;

const instances = new WeakMap();

/* 하위메뉴를 가진 항목(button[aria-expanded][aria-controls])의 여닫이와, 우측 상단 접기 단추(collapse)를 맞춘다.
   여닫는 것은 aria-expanded ↔ 하위 목록의 hidden, 접는 것은 aria-pressed ↔ 루트 data-state 다.
   접힘 상태에서는 하위 목록이 CSS 로 감춰지므로(display:none) 트리거의 aria-expanded 도 닫힘으로 맞추고,
   열려 있던 것은 remembered 에 기억해 두었다가 다시 펼치면 이어서 연다.
   준비 중 항목([aria-disabled=true])은 눌러도 동작하지 않고(click·Enter 취소) 탭 순서에서도 뺀다(date-picker 의 비활성 칸과 같은 관례: tabIndex -1). */
export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);

  const doc = root.ownerDocument || document;
  const collapseButton = root.querySelector('[data-s1-part="collapse"]');

  const isCollapsed = () => root.getAttribute("data-state") === "collapsed";

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

  const setCollapsed = (next) => {
    const value = Boolean(next);
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

  /* 처음 표시를 맞춘다 — aria-expanded 가 열림인데 hidden 이면(또는 반대) 하나로 정리한다. */
  for (const trigger of root.querySelectorAll('[data-s1-part="item"][aria-controls][aria-expanded]')) {
    const panel = doc.getElementById(trigger.getAttribute("aria-controls"));
    if (panel) panel.hidden = trigger.getAttribute("aria-expanded") !== "true";
  }
  if (collapseButton) collapseButton.setAttribute("aria-pressed", String(isCollapsed()));
  syncCollapsedDisclosure();
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
    const trigger = event.target.closest('[data-s1-part="item"][aria-controls][aria-expanded]');
    if (trigger && root.contains(trigger)) {
      setExpanded(trigger, trigger.getAttribute("aria-expanded") !== "true");
      if (byPointer(event) && trigger.matches(":hover")) trigger.blur();
    }
  };
  root.addEventListener("click", handleClick);

  const api = Object.freeze({
    get collapsed() { return isCollapsed(); },
    collapse(next = true) { setCollapsed(next); },
    toggleCollapse() { setCollapsed(!isCollapsed()); },
    destroy() {
      root.removeEventListener("click", handleClick);
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
