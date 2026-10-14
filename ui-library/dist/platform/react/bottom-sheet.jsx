"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1BottomSheet — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/bottom-sheet*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, isValidElement, useRef } from "react";
import { itemValue, mergeParts, originalValue, scopeOf, slot, useApply, useControlledOpen, useMergedRef, useRerender, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/bottom-sheet.js";
import S1BottomSheetOption from "./bottom-sheet-option.jsx";
import { init as initSheetOption } from "../../components/bottom-sheet-option.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["none","single","dual"];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["sheet","sheetBackdrop","sheetPanel","sheetContent","sheetHeader","sheetTitle","sheetClose","sheetBody","sheetFooter","applyLabel","label"];
/* 0.22.0 에서 쓰던 슬롯 이름 — 계속 받는다(옛 이름 하나가 여러 자리를 함께 채우는 것도 그때 그대로). 새 코드는 위 이름을 쓰세요. */
export const LEGACY_PARTS = ["label"];

const DEFAULT_SHEET_OPTIONS = [{"label":"항목 1","selected":false},{"label":"항목 2","selected":true},{"label":"항목 3","selected":false},{"label":"항목 4","selected":false}];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] bottom-sheet: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1BottomSheet = forwardRef(function S1BottomSheet({ variant, parts, open, defaultOpen, onOpenChange, onOpen, onClose, options, value, defaultValue, onValueChange, closeOnSelect = true, title, applyLabel, children, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("variant", variant, VARIANTS);
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = title === undefined && applyLabel === undefined;
  const rerender = useRerender();
  const initialOpen = useRef(open ?? defaultOpen ?? true).current;
  const syncing = useRef(false);
  const legacyLabel = options === undefined && parts && typeof parts === "object" && !isValidElement(parts) && !Array.isArray(parts) && parts.label !== undefined ? slot(parts, "label") : undefined;
  const sheetItems = options ?? DEFAULT_SHEET_OPTIONS;
  const selectable = options !== undefined || value !== undefined || defaultValue !== undefined;
  const initialSheetValue = useRef(value !== undefined ? value : defaultValue).current;
  const sheetSelected = initialSheetValue !== undefined && initialSheetValue !== null ? String(initialSheetValue) : undefined;
  const sheetBodyContent = sheetItems.map((entry, index) => {
    const item = typeof entry === "object" && entry !== null && !isValidElement(entry) ? entry : { label: entry, value: entry };
    const entryValue = itemValue(item, index);
    const on = sheetSelected !== undefined ? entryValue === sheetSelected : Boolean(item.selected);
    return <S1BottomSheetOption key={entryValue + ":" + index} variant="text" value={item.value !== undefined ? String(item.value) : undefined} label={legacyLabel ? { content: legacyLabel.content !== undefined ? legacyLabel.content : item.label, attrs: legacyLabel.attrs } : item.label} disabled={item.disabled} defaultSelected={on} />;
  });
  const partScope = scopeOf(mergeParts(parts, { sheetTitle: title, applyLabel: applyLabel }, {"label":["applyLabel"]}));
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:bottom-sheet:open": (event) => { onOpen?.(event); if (!syncing.current) onOpenChange?.(true, event.detail); },
    "s1:bottom-sheet:close": (event) => {
      onClose?.(event);
      
      if (!syncing.current) onOpenChange?.(false, event.detail);
    },
    "s1:bottom-sheet-option:change": (event) => { if (onValueChange) onValueChange(originalValue(sheetItems, event.detail?.value), event.detail); rerender(); }
  }, []);
  useControlledOpen(apiRef, open, syncing);
  useApply(apiRef, () => {
    const wanted = value === undefined || value === null ? "" : String(value);
    const first = rootRef.current?.querySelector('[data-s1-component="bottom-sheet-option"]');
    const optionApi = first ? initSheetOption(first) : null;
    if (wanted !== "" && optionApi && optionApi.value !== wanted) optionApi.setValue(wanted);
  });
  return (
      <div hidden={initialOpen ? undefined : true} id={`${uid}-sheet`} data-s1-component="bottom-sheet" data-s1-part="sheet" data-break="mobile" data-footer={variant ?? "single"} {...(slot(partScope, "sheet").attrs ?? {})} ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="sheet-backdrop" {...(slot(partScope, "sheetBackdrop").attrs ?? {})}>
          {slot(partScope, "sheetBackdrop").content ?? ""}
        </div>
        <div data-s1-part="sheet-panel" role="dialog" aria-modal="true" aria-labelledby={`${uid}-sheet-title`} tabIndex="-1" {...(slot(partScope, "sheetPanel").attrs ?? {})}>
          <div data-s1-part="sheet-content" {...(slot(partScope, "sheetContent").attrs ?? {})}>
            <div data-s1-part="sheet-header" {...(slot(partScope, "sheetHeader").attrs ?? {})}>
              <span data-s1-part="sheet-title" id={`${uid}-sheet-title`} {...(slot(partScope, "sheetTitle").attrs ?? {})}>
                {slot(partScope, "sheetTitle").content ?? (bare ? "항목 선택" : undefined)}
              </span>
              <button type="button" data-s1-part="sheet-close" aria-label="닫기" {...(slot(partScope, "sheetClose").attrs ?? {})}>
                {slot(partScope, "sheetClose").content ?? ""}
              </button>
            </div>
            <div {...(selectable ? { "data-s1-select": "single", ...(closeOnSelect ? { "data-s1-close-on-select": "" } : {}) } : {})} data-s1-part="sheet-body" {...(slot(partScope, "sheetBody").attrs ?? {})}>
              {children !== undefined ? children : sheetBodyContent}
            </div>
          </div>
          <div data-s1-part="sheet-footer" {...(slot(partScope, "sheetFooter").attrs ?? {})}>
            <button type="button" data-s1-component="button" data-variant="primary" data-size="lg" data-s1-close="apply">
              <span data-s1-part="label" {...(slot(partScope, "applyLabel").attrs ?? {})}>
                {slot(partScope, "applyLabel").content ?? "적용"}
              </span>
            </button>
          </div>
        </div>
      </div>
  );
});
S1BottomSheet.displayName = "S1BottomSheet";
export default S1BottomSheet;
