/* Chip 런타임 — 칩 하나는 눌러서 켜고 끈다(aria-pressed). 칩들을 감싼 요소에 data-s1-select="single" 을 달면
   부품이 알아서 하나만 켠다(river 결정 2026-10-13 「전부 부품이 알아서」).

   · 표시가 없으면 종전 그대로 칩마다 따로 켜고 끈다(여러 개 고르는 화면은 그대로).
   · 표시가 있으면: 다른 칩을 누르면 그 칩이 켜지고 나머지는 꺼진다. 켜진 칩을 다시 눌러도 꺼지지 않는다(항상 하나).
     방향키 이동은 넣지 않았다 — aria-pressed 토글 단추는 방향키 규약이 없고 Tab·Space·Enter 로 충분하다.
   · 이벤트: s1:chip:beforechange(취소 가능, 누르기 전 — 화면이 preventDefault 하면 모양이 안 바뀐다) → s1:chip:change.
     detail = { selected, value, group }. value 는 칩의 data-value(없으면 글자).
   · 값 넣기: init(칩).set(true|false) 은 이벤트를 낸다(종전 그대로). 이벤트 없이 넣으려면 setSelected(true|false).
     묶음 값은 getGroupValue(묶음) · setGroupValue(묶음, 값) — 이벤트 없음. */
export const componentId = "chip";
export const jsRequired = true;

const instances = new WeakMap();
const GROUP = '[data-s1-select="single"]';

function isSelected(root) {
  return root.getAttribute("aria-pressed") === "true";
}

const valueOf = (root) => root.dataset.value ?? root.textContent.trim();
const chipsOf = (group) => [...group.querySelectorAll('[data-s1-component="chip"]')].filter((chip) => chip.closest(GROUP) === group);

/** 묶음에서 켜진 칩의 값(없으면 null) */
export function getGroupValue(group) {
  const on = chipsOf(group).find(isSelected);
  return on ? valueOf(on) : null;
}

/** 이벤트 없이 묶음의 값을 넣는다 — 그 값의 칩만 켜고 나머지는 끈다. */
export function setGroupValue(group, value) {
  const chips = chipsOf(group);
  const target = chips.find((chip) => valueOf(chip) === String(value));
  for (const chip of chips) chip.setAttribute("aria-pressed", String(chip === target));
  return Boolean(target);
}

export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);
  if (!root.hasAttribute("aria-pressed")) root.setAttribute("aria-pressed", "false");

  const flip = (chip, value, group) => {
    chip.setAttribute("aria-pressed", String(value));
    chip.dispatchEvent(new CustomEvent("s1:chip:change", { bubbles: true, detail: { selected: value, value: valueOf(chip), group } }));
  };

  /* 사용자가 누른 경우 — 취소 가능한 beforechange 를 먼저 낸다. */
  const request = (next) => {
    if (root.disabled) return;
    const group = root.closest(GROUP);
    if (group && next === false) return;            // 하나만 켜는 묶음 — 켜진 칩은 다시 눌러도 그대로
    if (next === isSelected(root)) return;
    const before = new CustomEvent("s1:chip:beforechange", { bubbles: true, cancelable: true, detail: { selected: next, value: valueOf(root), group: Boolean(group) } });
    if (!root.dispatchEvent(before)) return;
    if (group) for (const other of chipsOf(group)) if (other !== root && isSelected(other)) flip(other, false, true);
    flip(root, next, Boolean(group));
  };

  const set = (next) => {
    if (root.disabled) return;
    const value = Boolean(next);
    if (value === isSelected(root)) return;
    flip(root, value, false);
  };
  const handleClick = () => request(!isSelected(root));

  root.addEventListener("click", handleClick);

  const api = Object.freeze({
    get selected() { return isSelected(root); },
    set(next) { set(next); },
    /** 이벤트 없이 켜고 끈다(제어형 껍데기가 값을 넣을 때) */
    setSelected(next) { root.setAttribute("aria-pressed", String(Boolean(next))); },
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
