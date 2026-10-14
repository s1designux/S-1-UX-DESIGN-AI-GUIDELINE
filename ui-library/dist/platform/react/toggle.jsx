"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Toggle — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/toggle*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef, useState } from "react";
import { mergeParts, scopeOf, slot, useApply, useMergedRef, useRerender, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/toggle.js";


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["knob"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] toggle: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Toggle = forwardRef(function S1Toggle({ parts, checked, defaultChecked, onCheckedChange, onChange, name, value, disabled, label, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  const initialChecked = useRef(checked ?? defaultChecked ?? false).current;
  const [on, setOn] = useState(initialChecked);
  const isOn = checked !== undefined ? checked : on;
  const syncing = useRef(false);
  const rerender = useRerender();
  const partScope = scopeOf(parts);
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:toggle:change": (event) => { setOn(Boolean(event.detail?.checked)); if (!syncing.current) onCheckedChange?.(Boolean(event.detail?.checked)); onChange?.(event); rerender(); }
  }, []);
  useApply(apiRef, (api) => {
    if (checked === undefined || api.checked === checked) return;
    syncing.current = true;
    try { api.set(checked); } finally { syncing.current = false; }
  });
  return (
      <button aria-checked={String(initialChecked)} aria-label={label ?? "알림 받기"} disabled={disabled} type="button" data-s1-component="toggle" role="switch" ref={rootAttr} className={className} style={style} {...rest}>
        <span data-s1-part="knob" aria-hidden="true" {...(slot(partScope, "knob").attrs ?? {})}>
          {slot(partScope, "knob").content ?? ""}
        </span>
        {name ? <input type="hidden" name={name} value={value ?? "on"} disabled={!isOn} /> : null}
      </button>
  );
});
S1Toggle.displayName = "S1Toggle";
export default S1Toggle;
