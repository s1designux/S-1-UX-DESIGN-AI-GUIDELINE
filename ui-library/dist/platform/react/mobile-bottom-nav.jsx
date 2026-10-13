/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1MobileBottomNav — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/mobile-bottom-nav*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/mobile-bottom-nav.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["home","search","notification","settings"];
export const SIZES = [];
export const PARTS = ["icon","label"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] mobile-bottom-nav: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1MobileBottomNav({ variant, parts, onBeforechange, onChange, selected, defaultSelected, onSelectedChange, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const apiRef = useRef(null);
  const selectedSeen = useRef(false);
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);

  /* 배포본의 실제 동작 스크립트를 그대로 쓴다 — 브라우저에서만 돈다(서버 렌더링은 마크업까지). */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    apiRef.current = init(root);
    return () => { apiRef.current = null; destroy(root); };
  }, []);

  /* 제어형이면 부품이 스스로 모양을 바꾸지 못하게 막고 알리기만 한다. 비제어형이면 바뀐 뒤에 알린다. */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const controlled = selected !== undefined;
    const before = (event) => { if (controlled) { event.preventDefault(); onSelectedChange?.(event.detail?.selected ?? true); } };
    const after = (event) => { if (!controlled) onSelectedChange?.(event.detail?.selected ?? true); };
    root.addEventListener("s1:mobile-bottom-nav:beforechange", before);
    root.addEventListener("s1:mobile-bottom-nav:change", after);
    return () => { root.removeEventListener("s1:mobile-bottom-nav:beforechange", before); root.removeEventListener("s1:mobile-bottom-nav:change", after); };
  });

  /* 값이 바뀌면 이벤트 없이 부품에 넣는다(제어형). 처음 값(defaultSelected)도 한 번 넣는다. */
  useEffect(() => {
    const api = apiRef.current;
    if (!api) return;
    if (selected !== undefined) api.setSelected(selected);
    else if (defaultSelected !== undefined && !selectedSeen.current) api.setSelected(defaultSelected);
    selectedSeen.current = true;
  }, [selected, defaultSelected]);


  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const bound = [["s1:mobile-bottom-nav:beforechange", onBeforechange], ["s1:mobile-bottom-nav:change", onChange]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  return (
      <button type="button" data-s1-component="mobile-bottom-nav" data-icon={variant ?? "home"} role="tab" aria-selected="true" ref={rootRef} className={className} style={style} {...rest}>
        <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
          {slot(partScope, "icon").content ?? ""}
        </span>
        <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
          {slot(partScope, "label").content ?? "홈"}
        </span>
      </button>
  );
}
