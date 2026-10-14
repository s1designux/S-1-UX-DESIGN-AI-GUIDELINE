"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1TimePicker — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/time-picker*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef } from "react";
import { clockValue, mergeParts, scopeOf, slot, useApply, useControlledOpen, useMergedRef, useRerender, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/time-picker.js";


export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["xxsm","xsm","md"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["trigger","value","icon","panel","columns","column","divider","footer","confirm","sheet","sheetBackdrop","sheetPanel","sheetHeader","sheetTitle","sheetClose","wheel","wheelCol","fadeTop","fadeBottom","sheetFooter","apply","label"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] time-picker: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1TimePicker = forwardRef(function S1TimePicker({ size, breakName = DEFAULT_BREAK, parts, value, defaultValue, onValueChange, name, placeholder, disabled, open, onOpenChange, onOpen, onClose, onChange, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);
  const formKey = breakName;
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = placeholder === undefined;
  const initialValue = useRef(value !== undefined ? value : defaultValue).current;
  const chosen = useRef(initialValue);
  const currentValue = value !== undefined ? value : chosen.current;
  const syncing = useRef(false);
  const rerender = useRerender();
  const partScope = scopeOf(mergeParts(parts, { value: placeholder }));
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:time-picker:open": (event) => { onOpen?.(event); if (!syncing.current) onOpenChange?.(true); },
    "s1:time-picker:close": (event) => { onClose?.(event); if (!syncing.current) onOpenChange?.(false); },
    "s1:time-picker:change": (event) => {
      chosen.current = clockValue(event.detail);
      onChange?.(event);
      onValueChange?.(chosen.current, event.detail);
      rerender();
    }
  }, [breakName, formKey]);
  useApply(apiRef, (api) => {
    if (currentValue === undefined) return;
    const wanted = currentValue === null ? "" : String(currentValue);
    const now = api.value ? clockValue(api.value) : "";
    if (now !== wanted) api.setValue(wanted);
  });
  useControlledOpen(apiRef, open, syncing, { isOpen: "open", open: "openPanel", close: "closePanel" });
  if (formKey === "pc") {
    return (
      <div data-name={name} data-placeholder={placeholder} data-value={initialValue || undefined} data-s1-component="time-picker" data-size={size ?? "md"} data-break="pc" data-type="24h" data-minute-step="1" ref={rootAttr} className={className} style={style} {...rest}>
        <button disabled={disabled} type="button" data-s1-part="trigger" aria-haspopup="listbox" aria-expanded="false" aria-label="시간" {...(slot(partScope, "trigger").attrs ?? {})}>
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? (bare ? "시간 선택" : undefined)}
          </span>
          <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
            {slot(partScope, "icon").content ?? ""}
          </span>
        </button>
        <div data-s1-part="panel" hidden {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-part="columns" {...(slot(partScope, "columns").attrs ?? {})}>
            <div data-s1-part="column" data-column="hour" role="listbox" aria-label="시" {...(slot(partScope, "column").attrs ?? {})} />
            <div data-s1-part="divider" {...(slot(partScope, "divider").attrs ?? {})} />
            <div data-s1-part="column" data-column="minute" role="listbox" aria-label="분" {...(slot(partScope, "column").attrs ?? {})} />
          </div>
          <div data-s1-part="footer" {...(slot(partScope, "footer").attrs ?? {})}>
            <button type="button" data-s1-part="confirm" disabled {...(slot(partScope, "confirm").attrs ?? {})}>
              {slot(partScope, "confirm").content ?? (bare ? "확인" : undefined)}
            </button>
          </div>
        </div>
      </div>
    );
  } else if (formKey === "mobile") {
    return (
      <div data-name={name} data-placeholder={placeholder} data-value={initialValue || undefined} data-s1-component="time-picker" data-size={size ?? "md"} data-break="mobile" data-type="12h" data-minute-step="1" data-mobile-ui="wheel" data-mobile-content="time-only" ref={rootAttr} className={className} style={style} {...rest}>
        <button disabled={disabled} type="button" data-s1-part="trigger" aria-haspopup="dialog" aria-expanded="false" aria-label="시간" {...(slot(partScope, "trigger").attrs ?? {})}>
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? (bare ? "시간 선택" : undefined)}
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
                {slot(partScope, "sheetTitle").content ?? (bare ? "시간 선택" : undefined)}
              </span>
              <button type="button" data-s1-part="sheet-close" aria-label="닫기" {...(slot(partScope, "sheetClose").attrs ?? {})} />
            </div>
            <div data-s1-part="wheel" {...(slot(partScope, "wheel").attrs ?? {})}>
              <div data-s1-part="wheel-col" data-column="ampm" role="listbox" aria-label="오전오후" {...(slot(partScope, "wheelCol").attrs ?? {})} />
              <div data-s1-part="wheel-col" data-column="hour" role="listbox" aria-label="시" {...(slot(partScope, "wheelCol").attrs ?? {})} />
              <div data-s1-part="wheel-col" data-column="colon" aria-hidden="true" {...(slot(partScope, "wheelCol").attrs ?? {})}>
                {slot(partScope, "wheelCol").content ?? ""}
              </div>
              <div data-s1-part="wheel-col" data-column="minute" role="listbox" aria-label="분" {...(slot(partScope, "wheelCol").attrs ?? {})} />
              <div data-s1-part="fade-top" aria-hidden="true" {...(slot(partScope, "fadeTop").attrs ?? {})}>
                {slot(partScope, "fadeTop").content ?? ""}
              </div>
              <div data-s1-part="fade-bottom" aria-hidden="true" {...(slot(partScope, "fadeBottom").attrs ?? {})}>
                {slot(partScope, "fadeBottom").content ?? ""}
              </div>
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
  throw new Error(`[s1-ui] time-picker: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
});
S1TimePicker.displayName = "S1TimePicker";
export default S1TimePicker;
