/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* 컴포넌트들이 함께 쓰는 작은 도우미. 슬롯 값 하나를 "내용 + 속성" 으로 읽어 준다.
   넘길 수 있는 모양:
     "글자"                      → 내용만
     <아이콘 />                  → 요소도 그대로
     { content, attrs }          → 내용과 속성을 같이
     ["가", "나"]                → 안쪽 목록(표의 한 줄 등)
     { cell: "가", attrs: {} }   → 안쪽 슬롯 이름으로 지정 */
import { isValidElement } from "react";

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

export function keyOf(item, index) {
  if (isPlainObject(item) && item.key !== undefined && item.key !== null) return item.key;
  return index;
}
