"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* 컴포넌트들이 함께 쓰는 작은 도우미.
   ① 슬롯 읽기 — 한 칸을 "내용 + 속성" 으로 받는다. 넘길 수 있는 모양:
        "글자"                      → 내용만
        <아이콘 />                  → 요소도 그대로
        { content, attrs }          → 내용과 속성을 같이
        ["가", "나"]                → 안쪽 목록(표의 한 줄 등)
        { cell: "가", attrs: {} }   → 안쪽 슬롯 이름으로 지정
   ② 목록 항목 — 모든 목록은 { value, label, disabled?, … } 한 모양으로 받는다(옛 모양도 그대로 받는다).
   ③ 훅 — ref 합치기 · 동작 스크립트 붙이기 · 열림/값 맞추기. */
import { isValidElement, useCallback, useEffect, useRef, useState } from "react";

/* ── ① 슬롯 읽기 ─────────────────────────────────────────────────────── */

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value) && !isValidElement(value);

export function scopeOf(value) {
  if (value === undefined || value === null) return {};
  if (Array.isArray(value)) return { __list: value };
  if (!isPlainObject(value)) return { __content: value };
  return value;
}

export function attrsOf(scope) {
  const attrs = scope?.attrs;
  return isPlainObject(attrs) ? attrs : {};
}

export function slot(scope, name, primary = false) {
  let raw = scope?.[name];
  if (raw === undefined && primary) raw = scope?.__content ?? scope?.content;
  if (raw === undefined || raw === null) return { content: undefined, attrs: undefined };
  if (isPlainObject(raw) && ("content" in raw || "attrs" in raw)) return { content: raw.content, attrs: raw.attrs };
  return { content: raw, attrs: undefined };
}

export function list(scope, name, fallback) {
  const raw = scope?.[name] ?? (Array.isArray(scope?.__list) ? scope.__list : undefined);
  if (Array.isArray(raw)) return raw;
  /* 한 줄을 글자 하나로 준 경우 — rows={["가", "나"]} 처럼. 그 줄의 첫 칸으로 본다. */
  if (scope?.__content !== undefined) return [scope.__content];
  return fallback;
}

/** 목록 항목의 key — 직접 준 key → 값(value) → 순서. 값이 겹치면 순서를 덧붙여 겹치지 않게 한다. */
export function keyOf(item, index) {
  if (isPlainObject(item)) {
    if (item.key !== undefined && item.key !== null) return item.key;
    if (item.value !== undefined && item.value !== null && (typeof item.value === "string" || typeof item.value === "number")) return `${item.value}:${index}`;
  }
  return index;
}

/** parts 에 이름 붙은 prop(title · message …)을 합친다 — 같은 칸이면 prop 이 이긴다.
 *  aliases: 옛 슬롯 이름 → 새 슬롯 이름들. 옛 이름으로 준 값은 새 이름 칸에도 들어간다(0.22.0 에서 쓰던 코드가 그대로 도는 길).
 *  새 이름으로 직접 준 값(parts 의 새 이름 · prop)이 있으면 그쪽이 이기고, 옛 이름은 비어 있는 칸만 채운다. */
export function mergeParts(parts, direct, aliases) {
  let merged = parts;
  if (aliases && isPlainObject(parts)) {
    for (const [oldName, targets] of Object.entries(aliases)) {
      if (parts[oldName] === undefined) continue;
      for (const target of targets) {
        if (parts[target] !== undefined) continue;
        if (merged === parts) merged = { ...parts };
        merged[target] = parts[oldName];
      }
    }
  }
  for (const [name, value] of Object.entries(direct)) {
    if (value === undefined) continue;
    if (merged === parts) merged = isPlainObject(parts) ? { ...parts } : {};
    merged[name] = value;
  }
  return merged;
}

/* ── ② 목록 항목 한 모양 ──────────────────────────────────────────────── */

const ITEM_KEYS = new Set(["value", "label", "disabled", "selected", "key", "href", "current", "icon", "description", "children", "panel", "title", "items", "columns"]);

const textOf = (node) => (typeof node === "string" || typeof node === "number" ? String(node) : undefined);

/** 새 모양({ value, label, … })인가. 옛 모양({ optionLabel, attrs, content … })이면 false — 그대로 통과시킨다. */
export function isItem(item) {
  if (!isPlainObject(item)) return false;
  const keys = Object.keys(item);
  if (keys.length === 0) return false;
  return keys.every((key) => ITEM_KEYS.has(key)) && ("label" in item || "value" in item);
}

/** 항목의 값 — value 가 있으면 그것, 없으면 글자 라벨. 둘 다 없으면 순서. */
export function itemValue(item, index = 0) {
  if (isPlainObject(item) && item.value !== undefined && item.value !== null) return String(item.value);
  if (isPlainObject(item) && "label" in item) return textOf(item.label) ?? String(index);
  return textOf(item) ?? String(index);
}

/** 항목 → 안쪽 슬롯 모양. cfg:
 *   slot       글자를 넣을 슬롯 이름("content" 또는 "optionLabel" 처럼 part 이름)
 *   selected   켜진 상태를 적는 속성("aria-selected" · "aria-checked") — ctx.selected 가 가리키는 값이 켜진다
 *   roving     켜진 항목만 tabIndex 0 (나머지 -1)
 *   disabled   비활성을 적는 속성("aria-disabled")
 *   extra(item, index, ctx) → 더 붙일 속성
 */
export function s1Item(item, index, ctx, cfg) {
  if (item === null || item === undefined) return item;
  let normalized = item;
  if (typeof item === "string" || typeof item === "number") normalized = { label: item, value: String(item) };
  else if (!isItem(item)) return item;
  const value = itemValue(normalized, index);
  const attrs = { "data-value": value };
  if (cfg.selected) {
    const on = ctx?.selected !== undefined && ctx.selected !== null && String(ctx.selected) === value;
    attrs[cfg.selected] = String(on);
    if (cfg.roving) attrs.tabIndex = on || (ctx?.selected === undefined && index === 0) ? "0" : "-1";
  }
  if (cfg.disabled && normalized.disabled) attrs[cfg.disabled] = "true";
  if (cfg.extra) Object.assign(attrs, cfg.extra(normalized, index, ctx));
  return { [cfg.slot]: normalized.label ?? value, attrs };
}

/** 목록에서 값(value)에 해당하는 라벨 글자 — 새 모양·옛 모양·글자 모두 읽는다. 없으면 undefined. */
export function findLabel(items, value) {
  if (!Array.isArray(items) || value === undefined || value === null) return undefined;
  const wanted = String(value);
  for (const [index, item] of items.entries()) {
    if (typeof item === "string" || typeof item === "number") { if (String(item) === wanted) return String(item); continue; }
    if (!isPlainObject(item)) continue;
    if (isItem(item)) { if (itemValue(item, index) === wanted) return textOf(item.label) ?? undefined; continue; }
    if (item.attrs?.["data-value"] === wanted) {
      const label = item.optionLabel ?? item.content;
      return textOf(isPlainObject(label) ? label.content : label);
    }
  }
  return undefined;
}

/** 부품이 돌려준 문자열 값을 목록에서 준 그대로의 값(숫자 등)으로 되돌린다. 못 찾으면 문자열 그대로. */
export function originalValue(items, raw) {
  if (Array.isArray(items)) {
    for (const [index, item] of items.entries()) {
      if (isItem(item) && itemValue(item, index) === String(raw)) return item.value ?? raw;
      if ((typeof item === "number") && String(item) === String(raw)) return item;
    }
  }
  return raw;
}

/** 표의 한 줄 — 글자 배열이면 { cells } 로 감싸고, 선택 칸 이름(aria-label)이 줄마다 다르게 첫 칸 글자를 쓴다. */
export function s1Row(item) {
  const cells = Array.isArray(item) ? item : isPlainObject(item) && Array.isArray(item.cells) ? item.cells : null;
  if (!cells) return item;
  const first = cells[0];
  const firstText = textOf(isPlainObject(first) && !isValidElement(first) ? first.content : first);
  const base = Array.isArray(item) ? { cells } : item;
  const label = firstText ? { "aria-label": `${firstText} 선택` } : null;
  if (!label || base.control?.attrs?.["aria-label"]) return base;
  return { ...base, control: { ...base.control, attrs: { ...(base.control?.attrs ?? {}), ...label } } };
}

/** 링크 항목({ label, href, current }) → { content, attrs }. 글자나 옛 모양은 그대로. */
export function s1Link(item) {
  if (!isPlainObject(item) || !("label" in item)) return item;
  const attrs = {};
  if (item.href !== undefined) attrs.href = item.href;
  if (item.current) attrs["aria-current"] = "page";
  if (item.disabled) { attrs["aria-disabled"] = "true"; attrs.tabIndex = -1; }
  return { content: item.label, attrs, key: item.key };
}

/** 시간 부품이 알려 준 detail → 24시간 "HH:mm". */
export function clockValue(detail) {
  if (!detail || detail.hour == null || detail.minute == null) return "";
  let hour = Number(detail.hour);
  if (detail.type === "12h") hour = (hour % 12) + (detail.ampm === "오후" ? 12 : 0);
  return `${String(hour).padStart(2, "0")}:${String(detail.minute).padStart(2, "0")}`;
}

/* ── ③ 훅 ───────────────────────────────────────────────────────────── */

/** 여러 ref(객체·함수)를 하나로 합친다 — 부품 안쪽에서 쓰는 ref 와 바깥에서 받은 ref 가 둘 다 루트를 받는다. */
export function useMergedRef(...refs) {
  return useCallback((node) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    }
  }, refs); // eslint-disable-line react-hooks/exhaustive-deps
}

/** 가장 최근 값을 담는 ref — 듣기를 다시 걸지 않고도 최신 핸들러를 부른다. */
export function useLatest(value) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

/**
 * 배포본 동작 스크립트를 붙이고, 사용자 이벤트(s1:…)를 듣는다.
 *   runtime   { init, destroy } — 동작 스크립트가 없는 부품이면 null
 *   handlers  { "s1:select:change": (event) => … } — 이름 목록은 부품마다 고정, 함수는 매번 최신
 *   deps      다시 붙여야 하는 조건(breakName 처럼 마크업이 통째로 바뀔 때)
 * 돌려주는 값: 배포본 api 를 담은 ref(붙기 전·떼고 난 뒤는 null).
 */
export function useRuntime(rootRef, runtime, handlers, deps = []) {
  const apiRef = useRef(null);
  const latest = useRef(handlers);
  latest.current = handlers;
  const names = Object.keys(handlers).join("|");
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    apiRef.current = runtime ? runtime.init(root) : null;
    const bound = names ? names.split("|").map((name) => [name, (event) => latest.current[name]?.(event)]) : [];
    for (const [name, listener] of bound) root.addEventListener(name, listener);
    return () => {
      for (const [name, listener] of bound) root.removeEventListener(name, listener);
      apiRef.current = null;
      runtime?.destroy(root);
    };
  }, [names, ...deps]); // eslint-disable-line react-hooks/exhaustive-deps
  return apiRef;
}

/**
 * 열림을 React 상태와 맞춘다.
 *   open 을 주면(제어형) 그 값이 정한다. 값이 달라진 그리기 뒤에 부품을 열거나 닫는다.
 *   syncing 은 "화면이 시킨 열림/닫힘" 동안 true 가 되는 ref — 이벤트 핸들러가 onOpenChange 를 건너뛰는 데 쓴다
 *   (화면이 정한 것을 화면에 되알리지 않는다. onOpen/onClose 이벤트는 그대로 나간다).
 *   names: 배포본 api 의 이름 — 열림 여부(속성 또는 함수) · 여는 함수 · 닫는 함수
 */
export function useControlledOpen(apiRef, open, syncing, names = { isOpen: "isOpen", open: "open", close: "close" }) {
  useEffect(() => {
    const api = apiRef.current;
    if (!api || open === undefined) return;
    const now = typeof api[names.isOpen] === "function" ? api[names.isOpen]() : api[names.isOpen];
    if (Boolean(now) === Boolean(open)) return;
    syncing.current = true;
    try { if (open) api[names.open](); else api[names.close](); } finally { syncing.current = false; }
  });
}

/**
 * 화면이 정한 값을 부품에 넣는다(이벤트 없이).
 *   apply(api)  부품에 값을 넣는 함수 — 값이 바뀌었거나 목록이 바뀌어 새로 그려졌을 때 불린다.
 * deps 가 바뀐 그리기 뒤에 한 번 부른다.
 */
export function useApply(apiRef, apply, deps) {
  useEffect(() => {
    const api = apiRef.current;
    if (api) apply(api);
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}

/** 다시 그리게 한다 — 제어형(value 를 준 부품)에서 부모가 값을 안 바꿨으면 부품 모양을 value 로 되돌리려는 데 쓴다.
 *  부품이 스스로 바뀐 뒤 이벤트를 내면, 부모의 setState 와 같은 묶음으로 한 번 다시 그려지고 그 그리기가 value 와 맞춘다. */
export function useRerender() {
  const [, set] = useState(0);
  return useCallback(() => set((count) => count + 1), []);
}

/** 비제어형 값 기억 — 처음 값(defaultValue)에서 시작해 사용자가 고른 값을 따라간다. */
export function useUncontrolled(value, defaultValue) {
  const initial = useRef(value !== undefined ? value : defaultValue);
  const lastChosen = useRef(initial.current);
  return { initial: initial.current, chosen: lastChosen, controlled: value !== undefined };
}

/** 이벤트 한 번에 여러 핸들러(옛 이름 · 새 이름)를 부른다. */
export function call(...fns) {
  return (...args) => { for (const fn of fns) if (typeof fn === "function") fn(...args); };
}

/** 폼 전송용 숨은 입력 — name 이 있을 때만 그린다. 켜지지 않은 부품은 disabled 라 전송되지 않는다. */
export function hiddenField(name, value, enabled = true) {
  if (!name) return null;
  return { type: "hidden", name, value: value ?? "", disabled: !enabled, "data-s1-form": "" };
}
