"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1MultiToggle — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/multi-toggle*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef, useState } from "react";
import { attrsOf, itemValue, keyOf, mergeParts, originalValue, s1Item, scopeOf, slot, useApply, useMergedRef, useRerender, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/multi-toggle.js";


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["md","sm","xsm"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = [];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_CELLS = (uid) => ["왼쪽", { "content": "가운데", "attrs": { "aria-checked": "false", "data-value": "center" } }, { "content": "오른쪽", "attrs": { "aria-checked": "false", "data-value": "right" } }];

const CELL_ITEM = { slot: "content", selected: "aria-checked", roving: true, disabled: "aria-disabled" };

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] multi-toggle: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1MultiToggle = forwardRef(function S1MultiToggle({ size, parts, value, defaultValue, onValueChange, onChange, name, cells, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("size", size, SIZES);
  const initialValue = useRef(value !== undefined ? value : defaultValue).current;
  const itemList = cells ?? null;
  const firstValue = itemList && itemList.length ? itemValue(itemList[0], 0) : undefined;
  const itemCtx = { selected: initialValue !== undefined && initialValue !== null ? String(initialValue) : firstValue };
  const [picked, setPicked] = useState(itemCtx.selected);
  const currentValue = value !== undefined ? String(value) : picked;
  const syncing = useRef(false);
  const rerender = useRerender();
  const partScope = scopeOf(parts);
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:multi-toggle:change": (event) => {
      if (syncing.current) return;
      const raw = event.detail?.value;
      setPicked(String(raw));
      onChange?.(event); 
      onValueChange?.(originalValue(itemList, raw), event.detail);
      rerender();
    }
  }, []);
  useApply(apiRef, (api) => {
    const wanted = currentValue === undefined || currentValue === null ? "" : String(currentValue);
    const current = api.selected?.dataset.value ?? "";
    if (wanted === "" || current === wanted) return;
    const target = rootRef.current?.querySelector(`[data-s1-part="cell"][data-value="${CSS.escape(wanted)}"]`);
    if (!target) return;
    syncing.current = true;
    try { api.select(target); } finally { syncing.current = false; }
  });
  return (
      <div data-s1-component="multi-toggle" data-size={size ?? "md"} role="radiogroup" aria-label="정렬 기준" ref={rootAttr} className={className} style={style} {...rest}>
        {(cells ?? DEFAULT_CELLS(uid)).map((item1, index1) => {
          const scope1 = scopeOf(cells ? s1Item(item1, index1, itemCtx, CELL_ITEM) : item1);
          return (
            <button type="button" data-s1-part="cell" role="radio" aria-checked="true" data-value="left" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
              {slot(scope1, "cell", true).content ?? "왼쪽"}
            </button>
          );
        })}
        {name ? <input type="hidden" name={name} value={currentValue ?? ""} /> : null}
      </div>
  );
});
S1MultiToggle.displayName = "S1MultiToggle";
export default S1MultiToggle;
