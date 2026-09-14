/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1FilterChip — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/filter-chip*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { attrsOf, keyOf, scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/filter-chip.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["line","solid"];
export const SIZES = ["sm","md"];
export const PARTS = ["trigger","title","value","icon","panel"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_OPTIONS_PC = (uid) => ["최신순", { "optionLabel": "인기순", "attrs": { "aria-selected": "false", "tabIndex": "-1", "data-value": "popular" } }, { "optionLabel": "과거순", "attrs": { "aria-selected": "false", "tabIndex": "-1", "data-value": "past" } }];
const DEFAULT_OPTIONS_MOBILE = (uid) => ["최신순", { "optionLabel": "인기순", "attrs": { "aria-selected": "false", "tabIndex": "-1", "data-value": "popular" } }, { "optionLabel": "과거순", "attrs": { "aria-selected": "false", "tabIndex": "-1", "data-value": "past" } }];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] filter-chip: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1FilterChip({ variant, size, breakName = DEFAULT_BREAK, parts, options, onChange, onOpen, onClose, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);

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
    const bound = [["s1:filter-chip:change", onChange], ["s1:filter-chip:open", onOpen], ["s1:filter-chip:close", onClose]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  if (breakName === "pc") {
    return (
      <div data-s1-component="filter-chip" data-variant={variant ?? "line"} data-size={size ?? "sm"} data-break="pc" data-title="on" ref={rootRef} className={className} style={style} {...rest}>
        <button type="button" data-s1-part="trigger" aria-haspopup="listbox" aria-expanded="false" {...(slot(partScope, "trigger").attrs ?? {})}>
          <span data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
            {slot(partScope, "title").content ?? "정렬"}
          </span>
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? "최신순"}
          </span>
          <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
            {slot(partScope, "icon").content ?? ""}
          </span>
        </button>
        <div data-s1-part="panel" hidden {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-component="dropdown" data-type="text" data-size="xsm" role="listbox" aria-label="정렬">
            {(options ?? DEFAULT_OPTIONS_PC(uid)).map((item1, index1) => {
              const scope1 = scopeOf(item1);
              return (
                <div data-s1-part="option" role="option" aria-selected="true" tabIndex="0" data-value="latest" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
                  <span data-s1-part="option-label" {...(slot(scope1, "optionLabel").attrs ?? {})}>
                    {slot(scope1, "optionLabel", true).content ?? "최신순"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (breakName === "mobile") {
    return (
      <div data-s1-component="filter-chip" data-variant={variant ?? "line"} data-size={size ?? "md"} data-break="mobile" data-title="on" ref={rootRef} className={className} style={style} {...rest}>
        <button type="button" data-s1-part="trigger" aria-haspopup="listbox" aria-expanded="false" {...(slot(partScope, "trigger").attrs ?? {})}>
          <span data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
            {slot(partScope, "title").content ?? "정렬"}
          </span>
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? "최신순"}
          </span>
          <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
            {slot(partScope, "icon").content ?? ""}
          </span>
        </button>
        <div data-s1-part="panel" hidden {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-component="dropdown" data-type="text" data-size="xsm" role="listbox" aria-label="정렬">
            {(options ?? DEFAULT_OPTIONS_MOBILE(uid)).map((item1, index1) => {
              const scope1 = scopeOf(item1);
              return (
                <div data-s1-part="option" role="option" aria-selected="true" tabIndex="0" data-value="latest" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
                  <span data-s1-part="option-label" {...(slot(scope1, "optionLabel").attrs ?? {})}>
                    {slot(scope1, "optionLabel", true).content ?? "최신순"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  throw new Error(`[s1-ui] filter-chip: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
}
