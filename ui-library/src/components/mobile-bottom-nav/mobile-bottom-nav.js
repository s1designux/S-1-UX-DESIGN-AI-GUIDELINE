/* Mobile Bottom Nav 런타임 — 탭을 누르면 부품이 알아서 활성 탭을 옮긴다(river 결정 2026-10-13 「전부 부품이 알아서」 —
   2026-09-02 HD-1 "선택 상태는 호스트 화면이 정적으로 설정" 을 뒤집은 것).

   · 탭 = role="tab" 인 아이템 하나가 이 부품이다. 같은 tablist(없으면 같은 부모) 안의 아이템이 한 묶음이다.
   · 누르면: ① s1:mobile-bottom-nav:beforechange(취소 가능) 를 먼저 낸다 — 화면이 preventDefault 하면(로그인 확인·저장 안 한 변경 등) 탭은 그대로다.
             ② 취소하지 않으면 aria-selected · aria-current="page" 를 옮긴다.  ③ s1:mobile-bottom-nav:change 를 낸다.
     detail = { value, selected: true, tab, previous }. value 는 data-value → data-icon → 라벨 글자 순.
   · 화면이 직접 정하는 길(라우팅이 정하는 화면)은 그대로 열려 있다: api.setActive() 또는 aria-selected 속성 — 이벤트 없음.
   · 방향키 ←→ 는 탭 사이로 초점만 옮긴다(고르기는 Enter/Space). Tab 은 네 칸 모두 거친다(roving 하지 않음). */
export const componentId = "mobile-bottom-nav";
export const jsRequired = true;

const instances = new WeakMap();
const TAB = '[data-s1-component="mobile-bottom-nav"]';

const listOf = (root) => root.closest('[role="tablist"]') ?? root.parentElement;
const tabsOf = (root) => [...(listOf(root)?.querySelectorAll(TAB) ?? [root])].filter((tab) => listOf(tab) === listOf(root));
const valueOf = (tab) => tab.dataset.value ?? tab.dataset.icon ?? tab.querySelector('[data-s1-part="label"]')?.textContent.trim() ?? "";

/** 활성 탭을 옮긴다(이벤트 없음). aria-selected 와 aria-current 를 함께 맞춘다. */
function activate(root) {
  for (const tab of tabsOf(root)) {
    const on = tab === root;
    tab.setAttribute("aria-selected", String(on));
    if (on) tab.setAttribute("aria-current", "page"); else tab.removeAttribute("aria-current");
  }
}

export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);

  const isActive = () => root.getAttribute("aria-selected") === "true";
  if (isActive() && !root.hasAttribute("aria-current")) root.setAttribute("aria-current", "page");

  const handleClick = () => {
    if (root.disabled) return;
    /* 활성 탭이 이 탭 하나뿐이면 아무 일도 없다. 하지만 탭 여러 개가 함께 켜져 있으면(React 껍데기를 props 없이 여러 개 놓은 처음 모습 —
       예시 마크업이 탭마다 aria-selected=true 다) 이 탭만 남기고 나머지를 끈다 — 그래야 처음 모습을 바꾸지 않고도 눌러서 고를 수 있다. */
    const others = tabsOf(root).filter((tab) => tab !== root && tab.getAttribute("aria-selected") === "true");
    if (isActive() && others.length === 0) return;
    const previous = others[0] ?? tabsOf(root).find((tab) => tab.getAttribute("aria-selected") === "true") ?? null;
    const detail = { value: valueOf(root), selected: true, tab: root, previous };
    if (!root.dispatchEvent(new CustomEvent("s1:mobile-bottom-nav:beforechange", { bubbles: true, cancelable: true, detail }))) return;
    activate(root);
    root.dispatchEvent(new CustomEvent("s1:mobile-bottom-nav:change", { bubbles: true, detail }));
  };

  const handleKeydown = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    const tabs = tabsOf(root);
    const index = tabs.indexOf(root);
    const step = event.key === "ArrowRight" ? 1 : -1;
    tabs[(index + step + tabs.length) % tabs.length]?.focus();
    event.preventDefault();
  };

  root.addEventListener("click", handleClick);
  root.addEventListener("keydown", handleKeydown);

  const api = Object.freeze({
    get selected() { return isActive(); },
    /** 이벤트 없이 이 탭을 활성으로 만든다(라우팅이 정하는 화면·제어형 껍데기). false 면 이 탭만 끈다. */
    setActive(next = true) {
      if (next) activate(root);
      else { root.setAttribute("aria-selected", "false"); root.removeAttribute("aria-current"); }
    },
    setSelected(next) { api.setActive(Boolean(next)); },
    destroy() {
      root.removeEventListener("click", handleClick);
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
