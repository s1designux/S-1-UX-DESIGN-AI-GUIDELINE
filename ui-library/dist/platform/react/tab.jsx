/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Tab — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/tab*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { attrsOf, keyOf, scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/tab.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["line"];
export const SIZES = ["md","sm","xsm"];
export const PARTS = ["tab","tabpanel (optional)"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_TABS_PC = (uid) => ["탭 메뉴 1", { "content": "탭 메뉴 2", "attrs": { "aria-selected": "false", "aria-controls": `${uid}-tab-panel-two`, "data-value": "two" } }, { "content": "탭 메뉴 3", "attrs": { "aria-selected": "false", "aria-controls": `${uid}-tab-panel-three`, "data-value": "three" } }];
const DEFAULT_TABS_MOBILE = (uid) => ["탭 메뉴 1", { "content": "탭 메뉴 2", "attrs": { "aria-selected": "false", "data-value": "two" } }, { "content": "탭 메뉴 3", "attrs": { "aria-selected": "false", "data-value": "three" } }];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] tab: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1Tab({ size, breakName = DEFAULT_BREAK, parts, tabs, children, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);

  /* 배포본의 실제 동작 스크립트를 그대로 쓴다 — 브라우저에서만 돈다(서버 렌더링은 마크업까지). */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    init(root);
    return () => destroy(root);
  }, [breakName]);

  if (breakName === "pc") {
    return (
      <div data-s1-component="tab" data-size={size ?? "md"} data-break="pc" role="tablist" aria-label="콘텐츠 보기 선택" ref={rootRef} className={className} style={style} {...rest}>
        {(tabs ?? DEFAULT_TABS_PC(uid)).map((item1, index1) => {
          const scope1 = scopeOf(item1);
          return (
            <button type="button" data-s1-part="tab" role="tab" aria-selected="true" aria-controls={`${uid}-tab-panel-one`} data-value="one" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
              {slot(scope1, "tab", true).content ?? "탭 메뉴 1"}
            </button>
          );
        })}
        {children === undefined ? (
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
        ) : children}
      </div>
    );
  } else if (breakName === "mobile") {
    return (
      <div data-s1-component="tab" data-size={size ?? "sm"} data-break="mobile" role="tablist" aria-label="콘텐츠 보기 선택" ref={rootRef} className={className} style={style} {...rest}>
        {(tabs ?? DEFAULT_TABS_MOBILE(uid)).map((item1, index1) => {
          const scope1 = scopeOf(item1);
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
}
