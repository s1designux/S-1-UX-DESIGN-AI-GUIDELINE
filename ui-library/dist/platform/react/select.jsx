"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Select — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/select*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef, useEffect } from "react";
import { attrsOf, findLabel, itemValue, keyOf, mergeParts, originalValue, s1Item, scopeOf, slot, useApply, useControlledOpen, useMergedRef, useRerender, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/select.js";


export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["xxsm","xsm","md"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["trigger","value","icon","panel"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_OPTIONS_PC = (uid) => ["서울", { "optionLabel": "부산", "attrs": { "tabIndex": "-1", "data-value": "busan" } }, { "optionLabel": "제주", "attrs": { "tabIndex": "-1", "data-value": "jeju" } }];
const DEFAULT_OPTIONS_MOBILE = (uid) => ["서울", { "optionLabel": "부산", "attrs": { "tabIndex": "-1", "data-value": "busan" } }, { "optionLabel": "제주", "attrs": { "tabIndex": "-1", "data-value": "jeju" } }];

const PLACEHOLDER = "선택";
const OPTION_ITEM = { slot: "optionLabel", selected: "aria-selected", roving: true };

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] select: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Select = forwardRef(function S1Select({ size, breakName = DEFAULT_BREAK, parts, value, defaultValue, onValueChange, onChange, onOpen, onClose, name, disabled, placeholder, open, onOpenChange, options, className, style, ...rest }, forwardedRef) {
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
  const optionList = options ?? null;
  const firstValue = optionList && optionList.length ? itemValue(optionList[0], 0) : undefined;
  const itemCtx = { selected: initialValue !== undefined && initialValue !== null ? String(initialValue) : undefined };
  const initialLabel = findLabel(optionList, itemCtx.selected);
  const rerender = useRerender();
  const syncing = useRef(false);
  const partScope = scopeOf(mergeParts(parts, { value: initialLabel !== undefined ? initialLabel : placeholder }));
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:select:change": (event) => {
      const original = originalValue(optionList, event.detail?.value);
      chosen.current = original;
      onChange?.(event);
      onValueChange?.(original, event.detail);
      rerender();
    },
    "s1:select:open": (event) => { onOpen?.(event); if (!syncing.current) onOpenChange?.(true); },
    "s1:select:close": (event) => { onClose?.(event); if (!syncing.current) onOpenChange?.(false); }
  }, [breakName, formKey]);
  useApply(apiRef, (api) => {
    if (currentValue === undefined) return;
    const wanted = currentValue === null ? "" : String(currentValue);
    if (api.value !== wanted) api.setValue(wanted);
  });
  const valueOverride = slot(scopeOf(parts), "value").content;
  useEffect(() => {
    if (value !== undefined || defaultValue !== undefined || (typeof valueOverride !== "string" && typeof valueOverride !== "number")) return;
    const element = rootRef.current?.querySelector('[data-s1-part="value"]');
    if (element && element.textContent !== String(valueOverride)) element.textContent = String(valueOverride);
  }, [valueOverride]);
  useControlledOpen(apiRef, open, syncing, { isOpen: "open", open: "openPanel", close: "closePanel" });
  if (formKey === "pc") {
    return (
      <div data-name={name} data-value={initialValue !== undefined && initialValue !== null ? String(initialValue) : undefined} data-placeholder={initialLabel !== undefined ? (placeholder ?? PLACEHOLDER) : placeholder} data-s1-component="select" data-size={size ?? "md"} data-break="pc" ref={rootAttr} className={className} style={style} {...rest}>
        <button disabled={disabled} type="button" data-s1-part="trigger" aria-haspopup="listbox" aria-expanded="false" {...(slot(partScope, "trigger").attrs ?? {})}>
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? (bare ? "선택" : undefined)}
          </span>
          <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
            {slot(partScope, "icon").content ?? ""}
          </span>
        </button>
        <div data-s1-part="panel" hidden {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-component="dropdown" data-type="text" data-size="md" role="listbox" aria-label="선택">
            {(options ?? DEFAULT_OPTIONS_PC(uid)).map((item1, index1) => {
              const scope1 = scopeOf(options ? s1Item(item1, index1, itemCtx, OPTION_ITEM) : item1);
              return (
                <div data-s1-part="option" role="option" aria-selected="false" tabIndex="0" data-value="seoul" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
                  <span data-s1-part="option-label" {...(slot(scope1, "optionLabel").attrs ?? {})}>
                    {slot(scope1, "optionLabel", true).content ?? "서울"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (formKey === "mobile") {
    return (
      <div data-name={name} data-value={initialValue !== undefined && initialValue !== null ? String(initialValue) : undefined} data-placeholder={initialLabel !== undefined ? (placeholder ?? PLACEHOLDER) : placeholder} data-s1-component="select" data-size={size ?? "md"} data-break="mobile" ref={rootAttr} className={className} style={style} {...rest}>
        <button disabled={disabled} type="button" data-s1-part="trigger" aria-haspopup="listbox" aria-expanded="false" {...(slot(partScope, "trigger").attrs ?? {})}>
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? (bare ? "선택" : undefined)}
          </span>
          <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
            {slot(partScope, "icon").content ?? ""}
          </span>
        </button>
        <div data-s1-part="panel" hidden {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-component="dropdown" data-type="text" data-size="md" role="listbox" aria-label="선택">
            {(options ?? DEFAULT_OPTIONS_MOBILE(uid)).map((item1, index1) => {
              const scope1 = scopeOf(options ? s1Item(item1, index1, itemCtx, OPTION_ITEM) : item1);
              return (
                <div data-s1-part="option" role="option" aria-selected="false" tabIndex="0" data-value="seoul" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
                  <span data-s1-part="option-label" {...(slot(scope1, "optionLabel").attrs ?? {})}>
                    {slot(scope1, "optionLabel", true).content ?? "서울"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  throw new Error(`[s1-ui] select: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
});
S1Select.displayName = "S1Select";
export default S1Select;
