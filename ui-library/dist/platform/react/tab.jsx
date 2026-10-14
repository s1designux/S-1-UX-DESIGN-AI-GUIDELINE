"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Tab — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/tab*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef, useState } from "react";
import { attrsOf, itemValue, keyOf, mergeParts, originalValue, s1Item, scopeOf, slot, useApply, useMergedRef, useRerender, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/tab.js";


export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["line"];
export const SIZES = ["md","sm","xsm"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = [];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_TABS_PC = (uid) => ["탭 메뉴 1", { "content": "탭 메뉴 2", "attrs": { "aria-selected": "false", "aria-controls": `${uid}-tab-panel-two`, "data-value": "two" } }, { "content": "탭 메뉴 3", "attrs": { "aria-selected": "false", "aria-controls": `${uid}-tab-panel-three`, "data-value": "three" } }];
const DEFAULT_TABS_MOBILE = (uid) => ["탭 메뉴 1", { "content": "탭 메뉴 2", "attrs": { "aria-selected": "false", "data-value": "two" } }, { "content": "탭 메뉴 3", "attrs": { "aria-selected": "false", "data-value": "three" } }];

const TAB_ITEM = { slot: "content", selected: "aria-selected", roving: true, extra: (item, index, ctx) => (ctx.hasPanels ? { "aria-controls": `${ctx.uid}-tabpanel-${index}` } : {}) };

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] tab: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Tab = forwardRef(function S1Tab({ size, breakName = DEFAULT_BREAK, parts, value, defaultValue, onValueChange, onChange, children, tabs, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);
  const formKey = breakName;
  const initialValue = useRef(value !== undefined ? value : defaultValue).current;
  const itemList = tabs ?? null;
  const firstValue = itemList && itemList.length ? itemValue(itemList[0], 0) : undefined;
  const itemCtx = { selected: initialValue !== undefined && initialValue !== null ? String(initialValue) : firstValue };
  const [picked, setPicked] = useState(itemCtx.selected);
  const currentValue = value !== undefined ? String(value) : picked;
  const syncing = useRef(false);
  const rerender = useRerender();
  const hasPanels = Boolean(itemList && itemList.some((item) => item && typeof item === "object" && "panel" in item));
  itemCtx.uid = uid;
  itemCtx.hasPanels = hasPanels;
  const tabPanels = hasPanels ? itemList.map((item, index) => (
    <div key={index} id={`${uid}-tabpanel-${index}`} role="tabpanel" hidden={itemValue(item, index) !== String(itemCtx.selected)}>{item && typeof item === "object" ? item.panel : null}</div>
  )) : null;
  const partScope = scopeOf(parts);
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:tab:change": (event) => {
      if (syncing.current) return;
      const raw = event.detail?.value;
      setPicked(String(raw));
      onChange?.(event); 
      onValueChange?.(originalValue(itemList, raw), event.detail);
      rerender();
    }
  }, [breakName, formKey]);
  useApply(apiRef, (api) => {
    const wanted = currentValue === undefined || currentValue === null ? "" : String(currentValue);
    const current = api.selected?.dataset.value ?? "";
    if (wanted === "" || current === wanted) return;
    const target = rootRef.current?.querySelector(`[data-s1-part="tab"][data-value="${CSS.escape(wanted)}"]`);
    if (!target) return;
    syncing.current = true;
    try { api.select(target); } finally { syncing.current = false; }
  });
  if (formKey === "pc") {
    return (
      <div data-s1-component="tab" data-size={size ?? "md"} data-break="pc" role="tablist" aria-label="콘텐츠 보기 선택" ref={rootAttr} className={className} style={style} {...rest}>
        {(tabs ?? DEFAULT_TABS_PC(uid)).map((item1, index1) => {
          const scope1 = scopeOf(tabs ? s1Item(item1, index1, itemCtx, TAB_ITEM) : item1);
          return (
            <button type="button" data-s1-part="tab" role="tab" aria-selected="true" aria-controls={`${uid}-tab-panel-one`} data-value="one" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
              {slot(scope1, "tab", true).content ?? "탭 메뉴 1"}
            </button>
          );
        })}
        {children === undefined ? (tabPanels ?? (
          <>
            <div id={`${uid}-tab-panel-one`} role="tabpanel">
              {"첫 번째 내용"}
            </div>
            <div id={`${uid}-tab-panel-two`} role="tabpanel" hidden>
              {"두 번째 내용"}
            </div>
            <div id={`${uid}-tab-panel-three`} role="tabpanel" hidden>
              {"세 번째 내용"}
            </div>
          </>
        )) : children}
      </div>
    );
  } else if (formKey === "mobile") {
    return (
      <div data-s1-component="tab" data-size={size ?? "sm"} data-break="mobile" role="tablist" aria-label="콘텐츠 보기 선택" ref={rootAttr} className={className} style={style} {...rest}>
        {(tabs ?? DEFAULT_TABS_MOBILE(uid)).map((item1, index1) => {
          const scope1 = scopeOf(tabs ? s1Item(item1, index1, itemCtx, TAB_ITEM) : item1);
          return (
            <button type="button" data-s1-part="tab" role="tab" aria-selected="true" data-value="one" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
              {slot(scope1, "tab", true).content ?? "탭 메뉴 1"}
            </button>
          );
        })}
      </div>
    );
  }
  throw new Error(`[s1-ui] tab: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
});
S1Tab.displayName = "S1Tab";
export default S1Tab;
