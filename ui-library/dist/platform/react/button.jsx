/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Button — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/button*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
// button 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["primary","secondary","blue-line"];
export const SIZES = ["md","xsm","xxsm","lg"];
export const PARTS = ["label"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] button: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1Button({ variant, size, breakName = DEFAULT_BREAK, parts, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);

  if (breakName === "pc") {
    return (
      <button type="button" data-s1-component="button" data-variant={variant ?? "primary"} data-size={size ?? "md"} ref={rootRef} className={className} style={style} {...rest}>
        <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
          {slot(partScope, "label").content ?? "확인"}
        </span>
      </button>
    );
  } else if (breakName === "mobile") {
    return (
      <button type="button" data-s1-component="button" data-variant={variant ?? "primary"} data-size={size ?? "lg"} ref={rootRef} className={className} style={style} {...rest}>
        <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
          {slot(partScope, "label").content ?? "확인"}
        </span>
      </button>
    );
  }
  throw new Error(`[s1-ui] button: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
}
