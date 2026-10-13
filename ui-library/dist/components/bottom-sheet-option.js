/* Bottom Sheet Option 런타임 — 목록 묶음에 data-s1-select="single" 을 달면 부품이 알아서 하나를 고른다.
   (river 결정 2026-10-13 「전부 부품이 알아서」 — 표시를 단 묶음만 켜진다. 표시가 없으면 아무것도 바뀌지 않는다.)

   · 묶음 = data-s1-select="single" 이 달린 요소(보통 시트 본문). 줄은 Text·Radio 유형만 고른다.
     List 는 선택 모양이 정본에 없고(list:selected 없음), Checkbox 는 여러 개 고르는 줄이라 이 묶음에서 다루지 않는다.
   · Text: role=listbox/option · aria-selected · 고른 줄 data-state=selected + 파란 체크 · 방향키·Home·End 로 이동 · Enter/Space 로 고름 · roving tabindex.
   · Radio: 줄을 누르면 안쪽 native radio 가 켜진다(키보드는 native 그대로).
   · 이벤트: s1:bottom-sheet-option:beforechange(취소 가능 — 고르기 전) → s1:bottom-sheet-option:change(값이 바뀐 뒤).
     detail = { value, label, selected: true, option }. 화면이 beforechange 에서 preventDefault 하면 모양이 바뀌지 않는다(제어형).
   · data-s1-close-on-select 가 묶음에 있으면 고른 뒤 시트가 닫힌다(bottom-sheet.js 가 요청을 받아 닫는다).
   · 값 넣기: init(줄).setSelected(true) 또는 api.setValue(값) — 이벤트를 내지 않는다. */
export const componentId = "bottom-sheet-option";
export const jsRequired = true;

const instances = new WeakMap();
const groups = new WeakMap();

const GROUP = '[data-s1-select="single"]';
const OPTION = '[data-s1-component="bottom-sheet-option"]';
const SELECTABLE = new Set(["text", "radio"]);

const typeOf = (option) => option.dataset.type;
const isEnabled = (option) => option.dataset.state !== "disabled";
const labelOf = (option) => option.querySelector('[data-s1-part="label"]')?.textContent.trim() ?? option.textContent.trim();
const valueOf = (option) => option.dataset.value ?? labelOf(option);
const radioOf = (option) => option.querySelector('input[type="radio"]');
const isSelected = (option) => (typeOf(option) === "radio" ? Boolean(radioOf(option)?.checked) : option.dataset.state === "selected");

function setupGroup(group) {
  const known = groups.get(group);
  if (known) { known.count += 1; return known; }

  const options = () => [...group.querySelectorAll(OPTION)].filter((option) => SELECTABLE.has(typeOf(option)) && option.closest(GROUP) === group);
  const enabledOptions = () => options().filter(isEnabled);

  /* 묶음 역할 — 글자 줄이 있으면 listbox, 라디오 줄뿐이면 radiogroup. 이름은 시트 제목에서 가져온다. */
  if (!group.hasAttribute("role")) group.setAttribute("role", options().some((option) => typeOf(option) === "text") ? "listbox" : "radiogroup");
  if (!group.hasAttribute("aria-labelledby") && !group.hasAttribute("aria-label")) {
    const title = group.closest('[data-s1-component="bottom-sheet"]')?.querySelector('[data-s1-part="sheet-title"]');
    if (title?.id) group.setAttribute("aria-labelledby", title.id);
  }

  const paint = () => {
    const list = options();
    const current = list.find((option) => isSelected(option)) ?? enabledOptions()[0];
    for (const option of list) {
      if (typeOf(option) === "radio") {
        /* 라디오는 native 상태가 정본이다 — 줄의 data-state 를 거기에 맞춘다(비활성은 건드리지 않는다). */
        if (isEnabled(option)) option.dataset.state = radioOf(option)?.checked ? "selected" : "default";
        continue;
      }
      const on = option.dataset.state === "selected";
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", String(on));
      if (option.dataset.state === "disabled") option.setAttribute("aria-disabled", "true");
      option.tabIndex = option === current ? 0 : -1;
      option.style.cursor = isEnabled(option) ? "pointer" : "";
    }
  };

  const mark = (option, on) => {
    if (!isEnabled(option)) return;
    option.dataset.state = on ? "selected" : "default";
    if (typeOf(option) === "radio") { const radio = radioOf(option); if (radio) radio.checked = on; return; }
    const check = option.querySelector('[data-s1-part="check"]');
    if (!on && check) check.remove();
    if (on && !check) {
      const added = document.createElement("span");
      added.setAttribute("data-s1-part", "check");
      added.setAttribute("aria-hidden", "true");
      option.appendChild(added);
    }
  };

  const apply = (option) => {
    for (const other of options()) if (other !== option) mark(other, false);
    mark(option, true);
    paint();
  };

  /* 사용자가 고른 경우 — beforechange(취소 가능) → 모양 바꿈 → change. 같은 줄을 다시 골라도 시트 닫기 요청은 낸다. */
  const pick = (option) => {
    if (!isEnabled(option)) return;
    const detail = { value: valueOf(option), label: labelOf(option), selected: true, option };
    /* 라디오 안쪽 input 을 직접 누르면 native 가 먼저 켜 버린다 — 그래서 바뀌었는지는 줄의 data-state(직전 상태)로 본다. */
    const changed = option.dataset.state !== "selected";
    if (changed) {
      const before = new CustomEvent("s1:bottom-sheet-option:beforechange", { bubbles: true, cancelable: true, detail });
      if (!option.dispatchEvent(before)) {
        for (const other of options()) { const radio = typeOf(other) === "radio" ? radioOf(other) : null; if (radio) radio.checked = other.dataset.state === "selected"; }
        return;
      }
      apply(option);
      option.dispatchEvent(new CustomEvent("s1:bottom-sheet-option:change", { bubbles: true, detail }));
    }
    if (group.hasAttribute("data-s1-close-on-select")) {
      option.dispatchEvent(new CustomEvent("s1:bottom-sheet-option:close-request", { bubbles: true, detail: { reason: "select" } }));
    }
  };

  const handleClick = (event) => {
    const option = event.target instanceof Element ? event.target.closest(OPTION) : null;
    if (!option || option.closest(GROUP) !== group || !SELECTABLE.has(typeOf(option))) return;
    pick(option);
  };

  const handleKeydown = (event) => {
    const option = event.target instanceof Element ? event.target.closest(OPTION) : null;
    if (!option || option.closest(GROUP) !== group || typeOf(option) !== "text") return;
    const list = enabledOptions().filter((one) => typeOf(one) === "text");
    const index = list.indexOf(option);
    if (index < 0) return;
    const move = (target) => {
      for (const one of list) one.tabIndex = one === target ? 0 : -1;
      target.focus();
    };
    if (event.key === "ArrowDown") move(list[Math.min(index + 1, list.length - 1)]);
    else if (event.key === "ArrowUp") move(list[Math.max(index - 1, 0)]);
    else if (event.key === "Home") move(list[0]);
    else if (event.key === "End") move(list[list.length - 1]);
    else if (event.key === "Enter" || event.key === " ") pick(option);
    else return;
    event.preventDefault();
  };

  group.addEventListener("click", handleClick);
  group.addEventListener("keydown", handleKeydown);
  paint();

  const entry = {
    count: 1,
    options,
    paint,
    apply,
    teardown() {
      group.removeEventListener("click", handleClick);
      group.removeEventListener("keydown", handleKeydown);
    }
  };
  groups.set(group, entry);
  return entry;
}

export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);

  const group = root.closest(GROUP);
  const entry = group && SELECTABLE.has(typeOf(root)) ? setupGroup(group) : null;

  const api = Object.freeze({
    /** 이 줄이 골라져 있나 */
    get selected() { return isSelected(root); },
    /** 묶음에서 지금 골라진 값(없으면 null) */
    get value() {
      const on = entry?.options().find((option) => isSelected(option));
      return on ? valueOf(on) : null;
    },
    /** 이벤트 없이 이 줄을 고르거나(true) 비운다(false) — 제어형 껍데기·화면이 값을 넣을 때 쓴다. */
    setSelected(next) {
      if (!entry || !isEnabled(root)) return;
      if (next) entry.apply(root);
      else { /* 하나만 고르는 묶음 — 비우면 아무 줄도 안 골라진 상태가 된다 */
        root.dataset.state = "default";
        if (typeOf(root) === "radio") { const radio = radioOf(root); if (radio) radio.checked = false; }
        else root.querySelector('[data-s1-part="check"]')?.remove();
        entry.paint();
      }
    },
    /** 값(data-value 또는 글자)으로 묶음의 줄을 고른다 — 이벤트 없음 */
    setValue(value) {
      const target = entry?.options().find((option) => valueOf(option) === String(value));
      if (target) entry.apply(target);
      return Boolean(target);
    },
    destroy() {
      if (entry) { entry.count -= 1; if (entry.count <= 0) { entry.teardown(); groups.delete(group); } }
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
