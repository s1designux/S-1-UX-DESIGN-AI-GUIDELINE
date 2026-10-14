"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Input — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/input*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useEffect, useRef } from "react";
import { mergeParts, scopeOf, slot, useMergedRef, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/input.js";


export const BREAKS = ["pc","mobile"];
export const FORMS = ["pc","mobile","password","password-mobile","search","search-mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["xxsm","xsm","md"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["field","control","action","actionIcon"];

const LEGACY_FORMS = { password: ["pc", "password"], "password-mobile": ["mobile", "password"], search: ["pc", "search"], "search-mobile": ["mobile", "search"] };
export const TYPES = ["text", "password", "search"];
/* 화면 기준(pc · mobile)과 종류(text · password · search)를 예제 파일 이름으로 합친다. 옛 이름(password-mobile 등)도 받는다. */
function inputFormKey(breakName, type) {
  const legacy = LEGACY_FORMS[breakName];
  const screen = legacy ? legacy[0] : breakName;
  const kind = legacy ? legacy[1] : (type ?? "text");
  return kind === "text" ? screen : screen === "mobile" ? `${kind}-mobile` : kind;
}

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] input: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Input = forwardRef(function S1Input({ size, breakName = "pc", type = undefined, label, parts, value, defaultValue, onChange, onInput, onBlur, onFocus, name, placeholder, disabled, required, readOnly, inputRef, onClear, onSearch, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, ["pc", "mobile", ...Object.keys(LEGACY_FORMS)]);
  assertAllowed("type", type, ["text", "password", "search"]);
  const formKey = inputFormKey(breakName, type);
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
  const partScope = scopeOf(parts);
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:input:clear": (event) => onClear?.(event),
    "s1:input:search": (event) => onSearch?.(event)
  }, [formKey]);
  useEffect(() => { apiRef.current?.update?.(); }, [value]);
  if (formKey === "pc") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="pc" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input aria-label={label ?? "이름"} id={`${uid}-control`} data-s1-part="control" placeholder="입력해 주세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
          <button type="button" data-s1-part="action" data-action="clear" aria-label="입력 내용 지우기" hidden {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
        </div>
      </div>
    );
  } else if (formKey === "mobile") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="mobile" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input aria-label={label ?? "이름"} id={`${uid}-control`} data-s1-part="control" placeholder="입력해 주세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
          <button type="button" data-s1-part="action" data-action="clear" aria-label="입력 내용 지우기" hidden {...(slot(partScope, "action").attrs ?? {})}>
            <span data-s1-part="action-icon" aria-hidden="true" {...(slot(partScope, "actionIcon").attrs ?? {})}>
              {slot(partScope, "actionIcon").content ?? ""}
            </span>
          </button>
        </div>
      </div>
    );
  } else if (formKey === "password") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="pc" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input aria-label={label ?? "비밀번호"} id={`${uid}-control`} data-s1-part="control" type="password" placeholder="비밀번호를 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
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
  } else if (formKey === "password-mobile") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="mobile" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input aria-label={label ?? "비밀번호"} id={`${uid}-control`} data-s1-part="control" type="password" placeholder="비밀번호를 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
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
  } else if (formKey === "search") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="pc" data-mode="search" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input aria-label={label ?? "검색"} id={`${uid}-control`} data-s1-part="control" placeholder="검색어를 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
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
  } else if (formKey === "search-mobile") {
    return (
      <div data-s1-component="input" data-size={size ?? "md"} data-break="mobile" data-mode="search" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="field" {...(slot(partScope, "field").attrs ?? {})}>
          <input aria-label={label ?? "검색"} id={`${uid}-control`} data-s1-part="control" placeholder="검색어를 입력하세요" {...(slot(partScope, "control").attrs ?? {})} {...controlProps} />
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
});
S1Input.displayName = "S1Input";
export default S1Input;
