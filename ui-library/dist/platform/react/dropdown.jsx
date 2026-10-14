"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Dropdown — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/dropdown*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef } from "react";
import { attrsOf, findLabel, itemValue, keyOf, mergeParts, originalValue, s1Item, scopeOf, slot, useApply, useMergedRef, useRerender, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/dropdown.js";


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["text","checkbox"];
export const SIZES = ["xxsm","xsm","md"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = [];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_OPTIONS = (uid) => ["최신순", { "optionLabel": "인기순", "attrs": { "aria-selected": "false", "tabIndex": "-1", "data-value": "popular" } }, { "optionLabel": "과거순", "attrs": { "aria-selected": "false", "tabIndex": "-1", "data-value": "past" } }];

const OPTION_ITEM = { slot: "optionLabel", selected: "aria-selected", roving: true };

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] dropdown: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Dropdown = forwardRef(function S1Dropdown({ variant, size, parts, value, defaultValue, onValueChange, onChange, options, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  const initialValue = useRef(value !== undefined ? value : defaultValue).current;
  const chosen = useRef(initialValue);
  const currentValue = value !== undefined ? value : chosen.current;
  const optionList = options ?? null;
  const firstValue = optionList && optionList.length ? itemValue(optionList[0], 0) : undefined;
  const itemCtx = { selected: initialValue !== undefined && initialValue !== null ? String(initialValue) : firstValue };
  const initialLabel = findLabel(optionList, itemCtx.selected);
  const rerender = useRerender();
  
  const partScope = scopeOf(parts);
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:dropdown:change": (event) => {
      const original = originalValue(optionList, event.detail?.value);
      chosen.current = original;
      onChange?.(event);
      onValueChange?.(original, event.detail);
      rerender();
    }
  }, []);
  useApply(apiRef, (api) => {
    if (currentValue === undefined) return;
    const wanted = currentValue === null ? "" : String(currentValue);
    if (api.value !== wanted) api.setValue(wanted);
  });
  return (
      <div data-s1-component="dropdown" data-type={variant ?? "text"} data-size={size ?? "md"} role="listbox" aria-label="정렬" ref={rootAttr} className={className} style={style} {...rest}>
        {(options ?? DEFAULT_OPTIONS(uid)).map((item1, index1) => {
          const scope1 = scopeOf(options ? s1Item(item1, index1, itemCtx, OPTION_ITEM) : item1);
          return (
            <div data-s1-part="option" role="option" aria-selected="true" tabIndex="0" data-value="latest" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
              <span data-s1-part="option-label" {...(slot(scope1, "optionLabel").attrs ?? {})}>
                {slot(scope1, "optionLabel", true).content ?? "최신순"}
              </span>
            </div>
          );
        })}
      </div>
  );
});
S1Dropdown.displayName = "S1Dropdown";
export default S1Dropdown;
