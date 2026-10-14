"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1MobileBottomNav — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/mobile-bottom-nav*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef, useState } from "react";
import { mergeParts, scopeOf, slot, useApply, useMergedRef, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/mobile-bottom-nav.js";


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["home","search","notification","settings"];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["icon","label"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] mobile-bottom-nav: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1MobileBottomNav = forwardRef(function S1MobileBottomNav({ variant, parts, selected, defaultSelected, onSelectedChange, onBeforeChange, onBeforechange, onChange, label, children, value, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("variant", variant, VARIANTS);
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = children === undefined && label === undefined;
  const initialSelected = useRef(selected ?? defaultSelected ?? true).current;
  const partScope = scopeOf(mergeParts(parts, { label: children !== undefined ? children : label }));
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:mobile-bottom-nav:beforechange": (event) => { if (selected !== undefined) { event.preventDefault(); onSelectedChange?.(event.detail?.selected ?? true); } onBeforeChange?.(event); onBeforechange?.(event); },
    "s1:mobile-bottom-nav:change": (event) => { if (selected === undefined) onSelectedChange?.(event.detail?.selected ?? true); onChange?.(event); }
  }, []);
  const seen = useRef(false);
  useApply(apiRef, (api) => {
    if (selected !== undefined) api.setSelected(selected);
    else if (defaultSelected !== undefined && !seen.current) api.setSelected(defaultSelected);
    seen.current = true;
  }, [selected, defaultSelected]);
  return (
      <button aria-selected={String(initialSelected)} data-value={value} type="button" data-s1-component="mobile-bottom-nav" data-icon={variant ?? "home"} role="tab" ref={rootAttr} className={className} style={style} {...rest}>
        <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
          {slot(partScope, "icon").content ?? ""}
        </span>
        <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
          {slot(partScope, "label").content ?? (bare ? "홈" : undefined)}
        </span>
      </button>
  );
});
S1MobileBottomNav.displayName = "S1MobileBottomNav";
export default S1MobileBottomNav;
