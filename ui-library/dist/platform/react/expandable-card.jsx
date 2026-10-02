/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1ExpandableCard — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/expandable-card*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/expandable-card.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = [];
export const SIZES = [];
export const PARTS = ["header","text","title","subtitle","body","note","caption","toggle-icon","panel-wrap","panel"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] expandable-card: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1ExpandableCard({ parts, onChange, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);

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
    const bound = [["s1:expandable-card:change", onChange]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  return (
      <div data-s1-component="expandable-card" ref={rootRef} className={className} style={style} {...rest}>
        <button type="button" data-s1-part="header" aria-expanded="false" aria-controls={`${uid}-panel-wrap`} {...(slot(partScope, "header").attrs ?? {})}>
          <span data-s1-part="text" {...(slot(partScope, "text").attrs ?? {})}>
            <span data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
              {slot(partScope, "title").content ?? "타이틀"}
            </span>
            <span data-s1-part="subtitle" {...(slot(partScope, "subtitle").attrs ?? {})}>
              {slot(partScope, "subtitle").content ?? "서브타이틀"}
            </span>
            <span data-s1-part="body" {...(slot(partScope, "body").attrs ?? {})}>
              {slot(partScope, "body").content ?? "서브타이틀"}
            </span>
            <span data-s1-part="note" {...(slot(partScope, "note").attrs ?? {})}>
              {slot(partScope, "note").content ?? "서브타이틀"}
            </span>
            <span data-s1-part="caption" {...(slot(partScope, "caption").attrs ?? {})}>
              {slot(partScope, "caption").content ?? "서브타이틀"}
            </span>
          </span>
          <span data-s1-part="toggle-icon" aria-hidden="true" {...(slot(partScope, "toggleIcon").attrs ?? {})}>
            {slot(partScope, "toggleIcon").content ?? ""}
          </span>
        </button>
        <div data-s1-part="panel-wrap" id={`${uid}-panel-wrap`} {...(slot(partScope, "panelWrap").attrs ?? {})}>
          <div data-s1-part="panel" {...(slot(partScope, "panel").attrs ?? {})}>
            <span data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
              {slot(partScope, "title").content ?? "타이틀"}
            </span>
            <span data-s1-part="subtitle" {...(slot(partScope, "subtitle").attrs ?? {})}>
              {slot(partScope, "subtitle").content ?? "서브타이틀"}
            </span>
            <span data-s1-part="body" {...(slot(partScope, "body").attrs ?? {})}>
              {slot(partScope, "body").content ?? "서브타이틀"}
            </span>
            <span data-s1-part="note" {...(slot(partScope, "note").attrs ?? {})}>
              {slot(partScope, "note").content ?? "서브타이틀"}
            </span>
            <span data-s1-part="caption" {...(slot(partScope, "caption").attrs ?? {})}>
              {slot(partScope, "caption").content ?? "서브타이틀"}
            </span>
          </div>
        </div>
      </div>
  );
}
