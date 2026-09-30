export const componentId = "expandable-card";
export const jsRequired = true;

const instances = new WeakMap();

/* 헤더(button)가 aria-controls 로 가리키는 펼침칸(panel-wrap)을 찾는다.
   id 로 못 찾으면(마크업이 다른 문서에 옮겨졌을 때) 카드 안의 panel-wrap 을 쓴다. */
function findPanelWrap(root, header) {
  const id = header.getAttribute("aria-controls");
  const doc = root.ownerDocument || document;
  return (id && doc.getElementById(id)) || root.querySelector('[data-s1-part="panel-wrap"]');
}

export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);
  const header = root.querySelector('[data-s1-part="header"]');
  if (!header) return null;
  const panelWrap = findPanelWrap(root, header);
  if (!panelWrap) return null;

  const isOpen = () => header.getAttribute("aria-expanded") === "true";
  /* 처음 상태는 마크업이 정한다 — aria-expanded 가 없으면 닫힘. 두 표시(aria-expanded ↔ data-open)를 맞춘다. */
  const paint = (open) => {
    header.setAttribute("aria-expanded", String(open));
    if (open) panelWrap.setAttribute("data-open", "true");
    else panelWrap.removeAttribute("data-open");
  };
  paint(isOpen());

  const set = (next) => {
    const value = Boolean(next);
    if (value === isOpen()) return;
    paint(value);
    root.dispatchEvent(new CustomEvent("s1:expandable-card:change", { bubbles: true, detail: { open: value } }));
  };
  const handleClick = () => {
    set(!isOpen());
    /* 누른 뒤 헤더가 회색 hover 로 남지 않게 초점을 풀어 준다 — 마우스로 누른 경우만 해당한다. */
    if (header.matches(":hover")) header.blur();
  };
  header.addEventListener("click", handleClick);

  const api = Object.freeze({
    get open() { return isOpen(); },
    set(next) { set(next); },
    toggle() { set(!isOpen()); },
    destroy() {
      header.removeEventListener("click", handleClick);
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
