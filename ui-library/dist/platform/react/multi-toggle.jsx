/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1MultiToggle — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/multi-toggle*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { attrsOf, keyOf, scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/multi-toggle.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["md","sm"];
export const PARTS = ["cell"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_CELLS = (uid) => ["왼쪽", { "content": "가운데", "attrs": { "aria-checked": "false", "data-value": "center" } }, { "content": "오른쪽", "attrs": { "aria-checked": "false", "data-value": "right" } }];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] multi-toggle: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1MultiToggle({ size, parts, cells, onChange, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("size", size, SIZES);

  /* 배포본의 실제 동작 스크립트를 그대로 쓴다 — 브라우저에서만 돈다(서버 렌더링은 마크업까지). */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    init(root);
    return () => destroy(root);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const bound = [["s1:multi-toggle:change", onChange]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  return (
      <div data-s1-component="multi-toggle" data-size={size ?? "md"} role="radiogroup" aria-label="정렬 기준" ref={rootRef} className={className} style={style} {...rest}>
        {(cells ?? DEFAULT_CELLS(uid)).map((item1, index1) => {
          const scope1 = scopeOf(item1);
          return (
            <button type="button" data-s1-part="cell" role="radio" aria-checked="true" data-value="left" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
              {slot(scope1, "cell", true).content ?? "왼쪽"}
            </button>
          );
        })}
      </div>
  );
}
