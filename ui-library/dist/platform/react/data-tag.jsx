"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1DataTag — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/data-tag*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId } from "react";
import { mergeParts, scopeOf, slot } from "./kit.js";
// data-tag 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["blue","red","gray"];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["label"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] data-tag: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1DataTag = forwardRef(function S1DataTag({ variant, parts, children, label, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootAttr = forwardedRef;
  assertAllowed("variant", variant, VARIANTS);
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = label === undefined && children === undefined;
  const partScope = scopeOf(mergeParts(parts, { label: label }));
  return (
      <span data-s1-component="data-tag" data-shape="chips" data-solid="on" data-tone={variant ?? "blue"} ref={rootAttr} className={className} style={style} {...rest}>
        {children === undefined ? (slot(partScope, "label").content ?? (bare ? "승인" : undefined)) : children}
      </span>
  );
});
S1DataTag.displayName = "S1DataTag";
export default S1DataTag;
