/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Input — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/input*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/input.js";

export const BREAKS = ["pc","mobile","password","password-mobile","search","search-mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["xxsm","xsm","md"];
export const PARTS = ["label","field","control","action","action-icon","message"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] input: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1Input({ size, breakName = DEFAULT_BREAK, parts, value, defaultValue, onChange, onInput, onBlur, onFocus, name, placeholder, disabled, required, readOnly, inputRef, onClear, onSearch, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("size", size, SIZES);
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

  /* 배포본의 실제 동작 스크립트를 그대로 쓴다 — 브라우저에서만 돈다(서버 렌더링은 마크업까지). */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    init(root);
    return () => destroy(root);
  }, [breakName]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const bound = [["s1:input:clear", onClear], ["s1:input:search", onSearch]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  if (breakName === "pc") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="pc" ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input id={`${uid}-control`} data-s1-part="control" aria-label="이름" placeholder="내용을 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
          <button type="button" data-s1-part="action" data-action="clear" aria-label="입력 내용 지우기" hidden {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
        </div>
      </div>
    );
  } else if (breakName === "mobile") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="mobile" ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input id={`${uid}-control`} data-s1-part="control" aria-label="이름" placeholder="내용을 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
          <button type="button" data-s1-part="action" data-action="clear" aria-label="입력 내용 지우기" hidden {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
        </div>
      </div>
    );
  } else if (breakName === "password") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="pc" ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input id={`${uid}-control`} data-s1-part="control" type="password" aria-label="비밀번호" placeholder="비밀번호를 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
          <button type="button" data-s1-part="action" data-action="password" aria-pressed="false" aria-label="비밀번호 보기" {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
          <button type="button" data-s1-part="action" data-action="clear" aria-label="비밀번호 지우기" hidden {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
        </div>
      </div>
    );
  } else if (breakName === "password-mobile") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="mobile" ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input id={`${uid}-control`} data-s1-part="control" type="password" aria-label="비밀번호" placeholder="비밀번호를 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
          <button type="button" data-s1-part="action" data-action="password" aria-pressed="false" aria-label="비밀번호 보기" {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
          <button type="button" data-s1-part="action" data-action="clear" aria-label="비밀번호 지우기" hidden {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
        </div>
      </div>
    );
  } else if (breakName === "search") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="pc" data-mode="search" ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input id={`${uid}-control`} data-s1-part="control" aria-label="검색" placeholder="검색어를 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
          <button type="button" data-s1-part="action" data-action="clear" aria-label="검색어 지우기" hidden {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
          <button type="button" data-s1-part="action" data-action="search" aria-label="검색" {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
        </div>
      </div>
    );
  } else if (breakName === "search-mobile") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="mobile" data-mode="search" ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input id={`${uid}-control`} data-s1-part="control" aria-label="검색" placeholder="검색어를 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
          <button type="button" data-s1-part="action" data-action="clear" aria-label="검색어 지우기" hidden {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
          <button type="button" data-s1-part="action" data-action="search" aria-label="검색" {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
        </div>
      </div>
    );
  }
  throw new Error(`[s1-ui] input: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
}
