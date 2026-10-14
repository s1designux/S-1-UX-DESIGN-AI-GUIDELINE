"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1ListRow — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/list-row*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef, useState } from "react";
import { mergeParts, scopeOf, slot, useApply, useMergedRef, useRerender, useRuntime } from "./kit.js";
// list-row 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.
import { init as initToggle, destroy as destroyToggle } from "../../components/toggle.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["nav","value","read","pick","agree","switch","thumb"];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["text","title","description","trail","chevron","value","lead","control","check","open","knob","thumbnail"];
export const DEFAULT_VARIANT = "nav";
export const STRUCTURAL = {"attribute":"data-type","prop":"variant"};

/* 스위치 줄 안의 토글에 동작 스크립트를 붙인다 — 줄 자신은 동작 스크립트가 없다. */
const toggleInRow = {
  init: (root) => { const el = root.querySelector('[data-s1-component="toggle"]'); return el ? initToggle(el) : null; },
  destroy: (root) => { const el = root.querySelector('[data-s1-component="toggle"]'); if (el) destroyToggle(el); }
};

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] list-row: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1ListRow = forwardRef(function S1ListRow({ variant, parts, title, description, value, checked, defaultChecked, onCheckedChange, onChange, name, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("variant", variant, VARIANTS);
  const formKey = (variant ?? DEFAULT_VARIANT);
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = title === undefined && description === undefined && value === undefined && (formKey === "nav" || parts === undefined);
  const initialChecked = useRef(checked ?? defaultChecked ?? false).current;
  const [on, setOn] = useState(initialChecked);
  const isOn = checked !== undefined ? checked : on;
  const syncing = useRef(false);
  const rerender = useRerender();
  const checkProps = {};
  if (checked !== undefined) checkProps.checked = checked;
  else if (defaultChecked !== undefined) checkProps.defaultChecked = defaultChecked;
  if (name !== undefined) checkProps.name = name;
  checkProps.onChange = (event) => { onChange?.(event); onCheckedChange?.(event.target.checked); };
  const partScope = scopeOf(mergeParts(parts, { title: title, description: description, value: value }));
  const ownToggle = slot(partScope, "chevron").content !== undefined && formKey === "switch";
  const apiRef = useRuntime(rootRef, ownToggle ? null : toggleInRow, {
    "s1:toggle:change": (event) => { setOn(Boolean(event.detail?.checked)); if (!syncing.current) onCheckedChange?.(Boolean(event.detail?.checked)); rerender(); }
  }, [ownToggle, formKey]);
  useApply(apiRef, (api) => {
    if (checked === undefined || !api || api.checked === checked) return;
    syncing.current = true;
    try { api.set(checked); } finally { syncing.current = false; }
  });
  if (formKey === "nav") {
    return (
      <button type="button" data-s1-component="list-row" data-type="nav" data-state="default" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="text" {...(slot(partScope, "text").attrs ?? {})}>
          <span data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
            {slot(partScope, "title").content ?? (bare ? "설정" : undefined)}
          </span>
          {bare || slot(partScope, "description").content !== undefined ? (
          <span data-s1-part="description" {...(slot(partScope, "description").attrs ?? {})}>
            {slot(partScope, "description").content ?? (bare ? "환경설정 및 계정 관리" : undefined)}
          </span>
          ) : null}
        </div>
        <span data-s1-part="trail" {...(slot(partScope, "trail").attrs ?? {})}>
          <span data-s1-part="chevron" aria-hidden="true" {...(slot(partScope, "chevron").attrs ?? {})}>
            {slot(partScope, "chevron").content ?? ""}
          </span>
        </span>
        {formKey === "switch" && name ? <input type="hidden" name={name} value="on" disabled={!isOn} /> : null}
      </button>
    );
  } else if (formKey === "value") {
    return (
      <button type="button" data-s1-component="list-row" data-type="value" data-state="default" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="text" {...(slot(partScope, "text").attrs ?? {})}>
          <span data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
            {slot(partScope, "title").content ?? (bare ? "테마" : undefined)}
          </span>
          {bare || slot(partScope, "description").content !== undefined ? (
          <span data-s1-part="description" {...(slot(partScope, "description").attrs ?? {})}>
            {slot(partScope, "description").content ?? (bare ? "화면 표시 방식" : undefined)}
          </span>
          ) : null}
        </div>
        <span data-s1-part="trail" {...(slot(partScope, "trail").attrs ?? {})}>
          {bare || slot(partScope, "value").content !== undefined ? (
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? (bare ? "라이트" : undefined)}
          </span>
          ) : null}
          <span data-s1-part="chevron" aria-hidden="true" {...(slot(partScope, "chevron").attrs ?? {})}>
            {slot(partScope, "chevron").content ?? ""}
          </span>
        </span>
        {formKey === "switch" && name ? <input type="hidden" name={name} value="on" disabled={!isOn} /> : null}
      </button>
    );
  } else if (formKey === "read") {
    return (
      <div data-s1-component="list-row" data-type="read" data-state="default" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="text" {...(slot(partScope, "text").attrs ?? {})}>
          <span data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
            {slot(partScope, "title").content ?? (bare ? "버전" : undefined)}
          </span>
          {bare || slot(partScope, "description").content !== undefined ? (
          <span data-s1-part="description" {...(slot(partScope, "description").attrs ?? {})}>
            {slot(partScope, "description").content ?? (bare ? "현재 설치된 버전 정보" : undefined)}
          </span>
          ) : null}
        </div>
        {formKey === "switch" && name ? <input type="hidden" name={name} value="on" disabled={!isOn} /> : null}
      </div>
    );
  } else if (formKey === "pick") {
    return (
      <label data-s1-component="list-row" data-type="pick" data-state="default" ref={rootAttr} className={className} style={style} {...rest}>
        <span data-s1-part="lead" {...(slot(partScope, "lead").attrs ?? {})}>
          <div data-s1-component="checkbox">
            <input {...checkProps} type="checkbox" id={`${uid}-control`} data-s1-part="control" aria-labelledby={`${uid}-title`} {...(slot(partScope, "control").attrs ?? {})} />
          </div>
        </span>
        <div data-s1-part="text" {...(slot(partScope, "text").attrs ?? {})}>
          <span data-s1-part="title" id={`${uid}-title`} {...(slot(partScope, "title").attrs ?? {})}>
            {slot(partScope, "title").content ?? (bare ? "빠른 배송" : undefined)}
          </span>
          {bare || slot(partScope, "description").content !== undefined ? (
          <span data-s1-part="description" {...(slot(partScope, "description").attrs ?? {})}>
            {slot(partScope, "description").content ?? (bare ? "당일 도착 옵션" : undefined)}
          </span>
          ) : null}
        </div>
        {formKey === "switch" && name ? <input type="hidden" name={name} value="on" disabled={!isOn} /> : null}
      </label>
    );
  } else if (formKey === "agree") {
    return (
      <div data-s1-component="list-row" data-type="agree" data-state="default" ref={rootAttr} className={className} style={style} {...rest}>
        <label data-s1-part="check" {...(slot(partScope, "check").attrs ?? {})}>
          <span data-s1-part="lead" {...(slot(partScope, "lead").attrs ?? {})}>
            <div data-s1-component="checkbox">
              <input {...checkProps} type="checkbox" id={`${uid}-control`} data-s1-part="control" aria-labelledby={`${uid}-title`} {...(slot(partScope, "control").attrs ?? {})} />
            </div>
          </span>
          <div data-s1-part="text" {...(slot(partScope, "text").attrs ?? {})}>
            <span data-s1-part="title" id={`${uid}-title`} {...(slot(partScope, "title").attrs ?? {})}>
              {slot(partScope, "title").content ?? (bare ? "이용약관 동의" : undefined)}
            </span>
            {bare || slot(partScope, "description").content !== undefined ? (
            <span data-s1-part="description" {...(slot(partScope, "description").attrs ?? {})}>
              {slot(partScope, "description").content ?? (bare ? "필수 동의 항목입니다" : undefined)}
            </span>
            ) : null}
          </div>
        </label>
        <span data-s1-part="trail" {...(slot(partScope, "trail").attrs ?? {})}>
          <button type="button" data-s1-part="open" aria-label="이용약관 보기" {...(slot(partScope, "open").attrs ?? {})}>
            <span data-s1-part="chevron" aria-hidden="true" {...(slot(partScope, "chevron").attrs ?? {})}>
              {slot(partScope, "chevron").content ?? ""}
            </span>
          </button>
        </span>
        {formKey === "switch" && name ? <input type="hidden" name={name} value="on" disabled={!isOn} /> : null}
      </div>
    );
  } else if (formKey === "switch") {
    return (
      <div data-s1-component="list-row" data-type="switch" data-state="default" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="text" {...(slot(partScope, "text").attrs ?? {})}>
          <span data-s1-part="title" id={`${uid}-title`} {...(slot(partScope, "title").attrs ?? {})}>
            {slot(partScope, "title").content ?? (bare ? "알림" : undefined)}
          </span>
          {bare || slot(partScope, "description").content !== undefined ? (
          <span data-s1-part="description" {...(slot(partScope, "description").attrs ?? {})}>
            {slot(partScope, "description").content ?? (bare ? "새 소식 알림 받기" : undefined)}
          </span>
          ) : null}
        </div>
        <span data-s1-part="trail" {...(slot(partScope, "trail").attrs ?? {})}>
          {slot(partScope, "chevron").content !== undefined ? slot(partScope, "chevron").content : (
          <button aria-checked={String(initialChecked)} type="button" data-s1-component="toggle" role="switch" aria-labelledby={`${uid}-title`}>
            <span data-s1-part="knob" aria-hidden="true" {...(slot(partScope, "knob").attrs ?? {})}>
              {slot(partScope, "knob").content ?? ""}
            </span>
          </button>
          )}
        </span>
        {formKey === "switch" && name ? <input type="hidden" name={name} value="on" disabled={!isOn} /> : null}
      </div>
    );
  } else if (formKey === "thumb") {
    return (
      <div data-s1-component="list-row" data-type="thumb" data-state="default" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="thumbnail" aria-hidden="true" {...(slot(partScope, "thumbnail").attrs ?? {})}>
          {slot(partScope, "thumbnail").content ?? ""}
        </div>
        <div data-s1-part="text" {...(slot(partScope, "text").attrs ?? {})}>
          <span data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
            {slot(partScope, "title").content ?? (bare ? "여행 사진" : undefined)}
          </span>
          {bare || slot(partScope, "description").content !== undefined ? (
          <span data-s1-part="description" {...(slot(partScope, "description").attrs ?? {})}>
            {slot(partScope, "description").content ?? (bare ? "2026년 9월 14일" : undefined)}
          </span>
          ) : null}
        </div>
        {formKey === "switch" && name ? <input type="hidden" name={name} value="on" disabled={!isOn} /> : null}
      </div>
    );
  }
  throw new Error(`[s1-ui] list-row: 승인되지 않은 variant "${variant}". 쓸 수 있는 값: ${VARIANTS.join(", ")}`);
});
S1ListRow.displayName = "S1ListRow";
export default S1ListRow;
