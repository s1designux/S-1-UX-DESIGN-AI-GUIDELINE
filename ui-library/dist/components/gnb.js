export const componentId = "gnb";
export const jsRequired = true;

const instances = new WeakMap();

// 마우스가 바 → 패널로 지나갈 때(둘 사이 좁은 틈) 깜빡이지 않게 닫힘에만 짧은 유예를 둔다.
// 여는 건 즉시(hover 는 반응이 늦으면 어색하다), 닫는 건 사람이 실수로 살짝 벗어났다 돌아오는
// 정도(대략 100~200ms)를 흡수하는 값으로 150ms 를 골랐다 — river 지시("여는 건 즉시, 닫는 건
// ~150ms")를 그대로 따른 값이다(2026-09-09).
const CLOSE_DELAY_MS = 150;

// 정본에는 트리거도 여닫는 동작도 없다(2-canon-readiness §A) — 이 런타임은 river 결정(D4·D5,
// 2026-09-09)으로 gnb 가 갖게 된 host 쪽 배선이다. 메뉴(트리거)와 패널을 잇는 것은
// aria-controls 하나뿐이다 — 어느 메뉴에 어느 패널이 걸리는지는 이 마크업(host)이 정한다.
function getPairs(root) {
  const doc = root.ownerDocument || document;
  const pairs = [];
  for (const trigger of root.querySelectorAll('[data-s1-part="menu"][aria-controls]')) {
    const panel = doc.getElementById(trigger.getAttribute("aria-controls"));
    if (panel) pairs.push({ trigger, panel });
  }
  return pairs;
}

export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);

  const pairs = getPairs(root);

  // aria-controls 를 가진 메뉴가 하나도 없다 — 하위메뉴 없이 상단바만 쓰는 화면이다.
  // gnb 는 jsRequired=true 지만, 쓸 패널이 없으면 아무 것도 하지 않고 조용히 끝난다
  // (강제 의존이 아니다 — 3-build.md §의존 관계 판단).
  if (!pairs.length) {
    const api = Object.freeze({ destroy() { instances.delete(root); } });
    instances.set(root, api);
    return api;
  }

  // 마우스가 없는 기기(터치스크린 노트북 등) 대비 — 매 이벤트마다 새로 확인한다(값을 캐시하지
  // 않는다). 하이브리드 기기가 세션 중 마우스를 붙였다 떼도 그때그때 맞게 반응한다.
  const hoverCapable = () => (window.matchMedia ? window.matchMedia("(hover: hover)").matches : true);

  const closeTimers = new WeakMap();
  let suppressFocusOpenFor = null;

  for (const { trigger, panel } of pairs) {
    if (!trigger.hasAttribute("aria-expanded")) trigger.setAttribute("aria-expanded", "false");
    // 닫힌 상태는 접근성 트리에서도 빠져야 한다(registry a11y) — hidden 이 그 역할이다.
    // (gnb-sub-menu.css 의 [hidden]{display:none} 이 화면에서도 실제로 사라지게 한다.)
    panel.hidden = true;
  }

  const isOpen = (pair) => pair.trigger.getAttribute("aria-expanded") === "true";

  const clearTimer = (pair) => {
    const timer = closeTimers.get(pair);
    if (timer) { clearTimeout(timer); closeTimers.delete(pair); }
  };

  const closePair = (pair, { returnFocus = false } = {}) => {
    clearTimer(pair);
    if (!isOpen(pair)) return;
    pair.trigger.setAttribute("aria-expanded", "false");
    pair.panel.hidden = true;
    if (returnFocus) {
      // Esc 로 닫을 때만: focusin 이 이 focus() 를 "다시 들어옴"으로 읽어 즉시 재오픈하지
      // 않도록 한 번 건너뛴다. focus() 가 동기 이벤트를 못 낼 수도 있어(이미 그 요소가
      // active 인 경우) 다음 tick 에 표시를 정리한다.
      suppressFocusOpenFor = pair;
      pair.trigger.focus();
      setTimeout(() => { if (suppressFocusOpenFor === pair) suppressFocusOpenFor = null; }, 0);
    }
    root.dispatchEvent(new CustomEvent("s1:gnb:close", { bubbles: true, detail: { trigger: pair.trigger, panel: pair.panel } }));
  };

  const openPair = (pair) => {
    clearTimer(pair);
    if (isOpen(pair)) return;
    // 한 번에 하나만 연다 — 다른 트리거로 마우스를 옮기면 이전 패널은 유예 없이 바로 닫는다.
    for (const other of pairs) if (other !== pair) closePair(other, { returnFocus: false });
    pair.trigger.setAttribute("aria-expanded", "true");
    pair.panel.hidden = false;
    root.dispatchEvent(new CustomEvent("s1:gnb:open", { bubbles: true, detail: { trigger: pair.trigger, panel: pair.panel } }));
  };

  const scheduleClose = (pair) => {
    clearTimer(pair);
    closeTimers.set(pair, setTimeout(() => { closeTimers.delete(pair); closePair(pair); }, CLOSE_DELAY_MS));
  };

  const pairFor = (el) => pairs.find((pair) => pair.trigger === el || pair.trigger.contains(el) || pair.panel.contains(el));

  const handleMouseenter = (pair) => () => { if (hoverCapable()) openPair(pair); };
  const handleMouseleave = (pair) => () => { if (hoverCapable()) scheduleClose(pair); };

  // 마우스가 없는 기기 폴백 — hover 가 안 되면 클릭으로 연다(첫 클릭=열기, 다시 누르면 닫기).
  // hover 가 되는 기기는 그대로 링크로 동작하게 두고 여기서 가로채지 않는다.
  const handleTriggerClick = (pair) => (event) => {
    if (hoverCapable()) return;
    event.preventDefault();
    if (isOpen(pair)) closePair(pair, { returnFocus: false });
    else openPair(pair);
  };

  // Tab 으로 메뉴에 들어가면 펼치고, 트리거·패널 밖으로 초점이 나가면 닫는다(포커스는 가두지
  // 않는다 — 그냥 자연스럽게 다음 요소로 넘어가게 둔다).
  const handleFocusin = (event) => {
    const pair = pairFor(event.target);
    if (pair) {
      if (suppressFocusOpenFor === pair) { suppressFocusOpenFor = null; return; }
      openPair(pair);
      return;
    }
    for (const other of pairs) closePair(other, { returnFocus: false });
  };

  // Esc — 열려 있으면 닫고 초점을 그 메뉴로 되돌린다.
  const handleKeydown = (event) => {
    if (event.key !== "Escape") return;
    const pair = pairFor(event.target);
    if (!pair || !isOpen(pair)) return;
    event.preventDefault();
    closePair(pair, { returnFocus: true });
  };

  // 마우스·터치로 바깥을 누르면 닫는다(선택: hover 유예만으로 못 잡는 경우의 안전망 —
  // select·date-picker 등 기존 트리거+패널 컴포넌트와 같은 관례).
  const handlePointerdown = (event) => {
    if (pairFor(event.target)) return;
    for (const pair of pairs) closePair(pair, { returnFocus: false });
  };

  const cleanups = [];
  for (const pair of pairs) {
    const onEnter = handleMouseenter(pair);
    const onLeave = handleMouseleave(pair);
    const onClick = handleTriggerClick(pair);
    pair.trigger.addEventListener("mouseenter", onEnter);
    pair.trigger.addEventListener("mouseleave", onLeave);
    pair.panel.addEventListener("mouseenter", onEnter);
    pair.panel.addEventListener("mouseleave", onLeave);
    pair.trigger.addEventListener("click", onClick);
    cleanups.push(() => {
      pair.trigger.removeEventListener("mouseenter", onEnter);
      pair.trigger.removeEventListener("mouseleave", onLeave);
      pair.panel.removeEventListener("mouseenter", onEnter);
      pair.panel.removeEventListener("mouseleave", onLeave);
      pair.trigger.removeEventListener("click", onClick);
    });
  }
  document.addEventListener("focusin", handleFocusin, true);
  document.addEventListener("keydown", handleKeydown, true);
  document.addEventListener("pointerdown", handlePointerdown, true);

  const api = Object.freeze({
    get openPairs() { return pairs.filter(isOpen).map(({ trigger, panel }) => ({ trigger, panel })); },
    openMenu(trigger) { const pair = pairs.find((p) => p.trigger === trigger); if (pair) openPair(pair); },
    closeMenu(trigger) { const pair = pairs.find((p) => p.trigger === trigger); if (pair) closePair(pair, { returnFocus: false }); },
    destroy() {
      for (const cleanup of cleanups) cleanup();
      document.removeEventListener("focusin", handleFocusin, true);
      document.removeEventListener("keydown", handleKeydown, true);
      document.removeEventListener("pointerdown", handlePointerdown, true);
      for (const pair of pairs) closePair(pair, { returnFocus: false });
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
