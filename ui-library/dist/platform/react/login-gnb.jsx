"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1LoginGnb — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/login-gnb*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId } from "react";
import { mergeParts, scopeOf, slot } from "./kit.js";
// login-gnb 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = [];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["service","lang","langIcon","langLabel"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] login-gnb: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1LoginGnb = forwardRef(function S1LoginGnb({ parts, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootAttr = forwardedRef;
  const partScope = scopeOf(parts);
  return (
      <header data-s1-component="login-gnb" ref={rootAttr} className={className} style={style} {...rest}>
        <span data-s1-part="service" {...(slot(partScope, "service").attrs ?? {})}>
          {slot(partScope, "service").content ?? "[서비스명]"}
        </span>
        <button type="button" data-s1-part="lang" {...(slot(partScope, "lang").attrs ?? {})}>
          <span data-s1-part="lang-icon" aria-hidden="true" {...(slot(partScope, "langIcon").attrs ?? {})}>
            {slot(partScope, "langIcon").content ?? ""}
          </span>
          <span data-s1-part="lang-label" {...(slot(partScope, "langLabel").attrs ?? {})}>
            {slot(partScope, "langLabel").content ?? "한국어"}
          </span>
        </button>
      </header>
  );
});
S1LoginGnb.displayName = "S1LoginGnb";
export default S1LoginGnb;
