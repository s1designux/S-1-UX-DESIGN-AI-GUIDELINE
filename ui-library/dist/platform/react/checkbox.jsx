"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Checkbox — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/checkbox*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId } from "react";
import { mergeParts, scopeOf, slot } from "./kit.js";
// checkbox 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["control","label"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] checkbox: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Checkbox = forwardRef(function S1Checkbox({ parts, value, defaultValue, onChange, onInput, onBlur, onFocus, name, placeholder, disabled, required, readOnly, checked, defaultChecked, inputRef, label, children, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootAttr = forwardedRef;
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = children === undefined && label === undefined;
  /* 입력 요소로 그대로 넘어가는 값 — 정의되지 않은 것은 넘기지 않는다(비제어 상태 유지). */
  const controlProps = {};
  if (value !== undefined) controlProps.value = value;
  if (defaultValue !== undefined) controlProps.defaultValue = defaultValue;
  if (onChange !== undefined) controlProps.onChange = onChange;
  if (onInput !== undefined) controlProps.onInput = onInput;
  if (onBlur !== undefined) controlProps.onBlur = onBlur;
  if (onFocus !== undefined) controlProps.onFocus = onFocus;
  if (name !== undefined) controlProps.name = name;
  if (placeholder !== undefined) controlProps.placeholder = placeholder;
  if (disabled !== undefined) controlProps.disabled = disabled;
  if (required !== undefined) controlProps.required = required;
  if (readOnly !== undefined) controlProps.readOnly = readOnly;
  if (checked !== undefined) controlProps.checked = checked;
  if (defaultChecked !== undefined) controlProps.defaultChecked = defaultChecked;
  if (inputRef !== undefined) controlProps.ref = inputRef;
  const partScope = scopeOf(mergeParts(parts, { label: children !== undefined ? children : label }));
  return (
      <div data-s1-component="checkbox" ref={rootAttr} className={className} style={style} {...rest}>
        <input type="checkbox" id={`${uid}-control`} data-s1-part="control" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
        <label data-s1-part="label" htmlFor={`${uid}-control`} {...(slot(partScope, "label").attrs ?? {})}>
          {slot(partScope, "label").content ?? (bare ? "선택 항목" : undefined)}
        </label>
      </div>
  );
});
S1Checkbox.displayName = "S1Checkbox";
export default S1Checkbox;
