/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Textarea — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/textarea*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
// textarea 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = [];
export const PARTS = ["control"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] textarea: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1Textarea({ breakName = DEFAULT_BREAK, parts, value, defaultValue, onChange, onInput, onBlur, onFocus, name, placeholder, disabled, required, readOnly, inputRef, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("breakName", breakName, BREAKS);

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
  if (inputRef !== undefined) controlProps.ref = inputRef;

  if (breakName === "pc") {
    return (
      <div data-s1-component="textarea" data-break="pc" ref={rootRef} className={className} style={style} {...rest}>
        <textarea id={`${uid}-control`} data-s1-part="control" aria-label="설명" placeholder="여러 줄 내용을 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps}>
          {slot(partScope, "control").content ?? ""}
        </textarea>
      </div>
    );
  } else if (breakName === "mobile") {
    return (
      <div data-s1-component="textarea" data-break="mobile" ref={rootRef} className={className} style={style} {...rest}>
        <textarea id={`${uid}-control`} data-s1-part="control" aria-label="설명" placeholder="여러 줄 내용을 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps}>
          {slot(partScope, "control").content ?? ""}
        </textarea>
      </div>
    );
  }
  throw new Error(`[s1-ui] textarea: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
}
