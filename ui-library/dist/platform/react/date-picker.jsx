"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1DatePicker — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/date-picker*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef } from "react";
import { mergeParts, scopeOf, slot, useApply, useControlledOpen, useMergedRef, useRerender, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/date-picker.js";


export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["single","range"];
export const SIZES = ["xxsm","xsm","md"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["trigger","value","icon","panel","calendar","sheet","sheetBackdrop","sheetPanel","sheetHeader","sheetTitle","sheetClose","calendarWrap","sheetFooter","apply","label"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] date-picker: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1DatePicker = forwardRef(function S1DatePicker({ variant, size, breakName = DEFAULT_BREAK, parts, value, defaultValue, onValueChange, name, placeholder, disabled, open, onOpenChange, onOpen, onClose, onChange, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);
  const formKey = breakName;
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = placeholder === undefined;
  const initialValue = useRef(value !== undefined ? value : defaultValue).current;
  const initialSingle = typeof initialValue === "string" ? initialValue : undefined;
  const initialStart = initialValue && typeof initialValue === "object" ? initialValue.start ?? undefined : undefined;
  const initialEnd = initialValue && typeof initialValue === "object" ? initialValue.end ?? undefined : undefined;
  const chosen = useRef(initialValue);
  const currentValue = value !== undefined ? value : chosen.current;
  const syncing = useRef(false);
  const rerender = useRerender();
  const partScope = scopeOf(mergeParts(parts, { value: placeholder }));
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:date-picker:open": (event) => { onOpen?.(event); if (!syncing.current) onOpenChange?.(true); },
    "s1:date-picker:close": (event) => { onClose?.(event); if (!syncing.current) onOpenChange?.(false); },
    "s1:date-picker:change": (event) => {
      const found = event.detail;
      chosen.current = found?.mode === "range" ? { start: found.start, end: found.end } : (found?.value ?? null);
      onChange?.(event);
      onValueChange?.(chosen.current, found);
      rerender();
    }
  }, [breakName, formKey]);
  useApply(apiRef, (api) => {
    if (currentValue === undefined) return;
    const wanted = typeof currentValue === "string" || currentValue === null ? currentValue : { start: currentValue.start ?? null, end: currentValue.end ?? null };
    if (JSON.stringify(api.value) !== JSON.stringify(wanted)) api.setValue(wanted);
  });
  useControlledOpen(apiRef, open, syncing, { isOpen: "open", open: "openPanel", close: "closePanel" });
  if (formKey === "pc") {
    return (
      <div data-name={name} data-placeholder={placeholder} data-value={initialSingle} data-range-start={initialStart} data-range-end={initialEnd} data-s1-component="date-picker" data-size={size ?? "md"} data-break="pc" data-mode={variant ?? "single"} ref={rootAttr} className={className} style={style} {...rest}>
        <button disabled={disabled} type="button" data-s1-part="trigger" aria-haspopup="dialog" aria-expanded="false" {...(slot(partScope, "trigger").attrs ?? {})}>
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? (bare ? "날짜 선택" : undefined)}
          </span>
          <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
            {slot(partScope, "icon").content ?? ""}
          </span>
        </button>
        <div data-s1-part="panel" role="dialog" hidden {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-part="calendar" {...(slot(partScope, "calendar").attrs ?? {})} />
        </div>
      </div>
    );
  } else if (formKey === "mobile") {
    return (
      <div data-name={name} data-placeholder={placeholder} data-value={initialSingle} data-range-start={initialStart} data-range-end={initialEnd} data-s1-component="date-picker" data-size={size ?? "md"} data-break="mobile" data-mode={variant ?? "single"} ref={rootAttr} className={className} style={style} {...rest}>
        <button disabled={disabled} type="button" data-s1-part="trigger" aria-haspopup="dialog" aria-expanded="false" {...(slot(partScope, "trigger").attrs ?? {})}>
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? (bare ? "날짜 선택" : undefined)}
          </span>
          <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
            {slot(partScope, "icon").content ?? ""}
          </span>
        </button>
        <div data-s1-component="bottom-sheet" data-s1-part="sheet" data-break="mobile" data-footer="single" hidden {...(slot(partScope, "sheet").attrs ?? {})}>
          <div data-s1-part="sheet-backdrop" {...(slot(partScope, "sheetBackdrop").attrs ?? {})} />
          <div data-s1-part="sheet-panel" role="dialog" aria-modal="true" aria-labelledby={`${uid}-sheet-title`} tabIndex="-1" {...(slot(partScope, "sheetPanel").attrs ?? {})}>
            <div data-s1-part="sheet-header" {...(slot(partScope, "sheetHeader").attrs ?? {})}>
              <span data-s1-part="sheet-title" id={`${uid}-sheet-title`} {...(slot(partScope, "sheetTitle").attrs ?? {})}>
                {slot(partScope, "sheetTitle").content ?? (bare ? "날짜 선택" : undefined)}
              </span>
              <button type="button" data-s1-part="sheet-close" aria-label="닫기" {...(slot(partScope, "sheetClose").attrs ?? {})} />
            </div>
            <div data-s1-part="calendar-wrap" {...(slot(partScope, "calendarWrap").attrs ?? {})}>
              <div data-s1-part="calendar" {...(slot(partScope, "calendar").attrs ?? {})} />
            </div>
            <div data-s1-part="sheet-footer" {...(slot(partScope, "sheetFooter").attrs ?? {})}>
              <button type="button" data-s1-part="apply" data-s1-component="button" data-variant="primary" data-size="lg" {...(slot(partScope, "apply").attrs ?? {})}>
                <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                  {slot(partScope, "label").content ?? (bare ? "적용" : undefined)}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  throw new Error(`[s1-ui] date-picker: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
});
S1DatePicker.displayName = "S1DatePicker";
export default S1DatePicker;
