export const componentId = "lnb";
export const jsRequired = true;

const instances = new WeakMap();

/* 하위메뉴를 가진 항목(button[aria-expanded][aria-controls])의 여닫이와, 우측 상단 접기 단추(collapse)를 맞춘다.
   여닫는 것은 aria-expanded ↔ 하위 목록의 hidden, 접는 것은 aria-pressed ↔ 루트 data-state 다.
   접힘 상태에서는 하위 목록이 CSS 로 감춰지므로(display:none) 열림 표시는 그대로 두고 다시 펼치면 이어진다. */
export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);

  const doc = root.ownerDocument || document;
  const collapseButton = root.querySelector('[data-s1-part="collapse"]');

  const isCollapsed = () => root.getAttribute("data-state") === "collapsed";

  const setCollapsed = (next) => {
    const value = Boolean(next);
    if (value === isCollapsed()) return;
    root.setAttribute("data-state", value ? "collapsed" : "expanded");
    if (collapseButton) collapseButton.setAttribute("aria-pressed", String(value));
    root.dispatchEvent(new CustomEvent("s1:lnb:collapse", { bubbles: true, detail: { collapsed: value } }));
  };

  const setExpanded = (trigger, next) => {
    const panel = doc.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;
    const value = Boolean(next);
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

  const handleClick = (event) => {
    const collapse = event.target.closest('[data-s1-part="collapse"]');
    if (collapse && root.contains(collapse)) {
      setCollapsed(!isCollapsed());
      if (collapse.matches(":hover")) collapse.blur();
      return;
    }
    const trigger = event.target.closest('[data-s1-part="item"][aria-controls][aria-expanded]');
    if (trigger && root.contains(trigger)) {
      setExpanded(trigger, trigger.getAttribute("aria-expanded") !== "true");
      if (trigger.matches(":hover")) trigger.blur();
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
