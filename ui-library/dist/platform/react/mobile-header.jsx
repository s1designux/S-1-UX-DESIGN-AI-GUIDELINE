"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1MobileHeader — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/mobile-header*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId } from "react";
import { mergeParts, scopeOf, slot } from "./kit.js";
// mobile-header 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["home-title","home-title-subtitle","standard-title","standard-title-close","standard-no-title","standard-no-title-close"];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["back","backIcon","title","spacer"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] mobile-header: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1MobileHeader = forwardRef(function S1MobileHeader({ variant, parts, title, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootAttr = forwardedRef;
  assertAllowed("variant", variant, VARIANTS);
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = title === undefined;
  const partScope = scopeOf(mergeParts(parts, { title: title }));
  return (
      <header data-s1-component="mobile-header" data-variant={variant ?? "standard-title"} ref={rootAttr} className={className} style={style} {...rest}>
        <button type="button" data-s1-part="back" aria-label="이전" {...(slot(partScope, "back").attrs ?? {})}>
          <span data-s1-part="back-icon" aria-hidden="true" {...(slot(partScope, "backIcon").attrs ?? {})}>
            {slot(partScope, "backIcon").content ?? ""}
          </span>
        </button>
        <h1 data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
          {slot(partScope, "title").content ?? (bare ? "스탠다드형 타이틀" : undefined)}
        </h1>
        <span data-s1-part="spacer" aria-hidden="true" {...(slot(partScope, "spacer").attrs ?? {})}>
          {slot(partScope, "spacer").content ?? ""}
        </span>
      </header>
  );
});
S1MobileHeader.displayName = "S1MobileHeader";
export default S1MobileHeader;
