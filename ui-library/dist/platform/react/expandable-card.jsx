"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1ExpandableCard — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/expandable-card*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef } from "react";
import { mergeParts, scopeOf, slot, useApply, useMergedRef, useRerender, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/expandable-card.js";


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = [];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["header","text","title","subtitle","body","note","caption","toggleIcon","panelWrap","panel","panelTitle","panelSubtitle","panelBody","panelNote","panelCaption"];
/* 0.22.0 에서 쓰던 슬롯 이름 — 계속 받는다(옛 이름 하나가 여러 자리를 함께 채우는 것도 그때 그대로). 새 코드는 위 이름을 쓰세요. */
export const LEGACY_PARTS = ["title","subtitle","body","note","caption"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] expandable-card: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1ExpandableCard = forwardRef(function S1ExpandableCard({ parts, open, defaultOpen, onOpenChange, title, subtitle, body, note, caption, children, onChange, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = title === undefined && subtitle === undefined && body === undefined && note === undefined && caption === undefined && children === undefined;
  const initialOpen = useRef(open ?? defaultOpen ?? false).current;
  const syncing = useRef(false);
  const rerender = useRerender();
  const partScope = scopeOf(mergeParts(parts, { title: title, subtitle: subtitle, body: body, note: note, caption: caption }, {"title":["panelTitle"],"subtitle":["panelSubtitle"],"body":["panelBody"],"note":["panelNote"],"caption":["panelCaption"]}));
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:expandable-card:change": (event) => {
      onChange?.(event);
      if (!syncing.current) onOpenChange?.(Boolean(event.detail?.open));
      rerender();
    }
  }, []);
  useApply(apiRef, (api) => {
    if (open === undefined || api.open === open) return;
    syncing.current = true;
    try { api.set(open); } finally { syncing.current = false; }
  });
  return (
      <div data-s1-component="expandable-card" ref={rootAttr} className={className} style={style} {...rest}>
        <button aria-expanded={String(initialOpen)} type="button" data-s1-part="header" aria-controls={`${uid}-panel-wrap`} {...(slot(partScope, "header").attrs ?? {})}>
          <span data-s1-part="text" {...(slot(partScope, "text").attrs ?? {})}>
            <span data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
              {slot(partScope, "title").content ?? (bare ? "타이틀" : undefined)}
            </span>
            <span data-s1-part="subtitle" {...(slot(partScope, "subtitle").attrs ?? {})}>
              {slot(partScope, "subtitle").content ?? (bare ? "서브타이틀" : undefined)}
            </span>
            <span data-s1-part="body" {...(slot(partScope, "body").attrs ?? {})}>
              {slot(partScope, "body").content ?? (bare ? "서브타이틀" : undefined)}
            </span>
            <span data-s1-part="note" {...(slot(partScope, "note").attrs ?? {})}>
              {slot(partScope, "note").content ?? (bare ? "서브타이틀" : undefined)}
            </span>
            <span data-s1-part="caption" {...(slot(partScope, "caption").attrs ?? {})}>
              {slot(partScope, "caption").content ?? (bare ? "서브타이틀" : undefined)}
            </span>
          </span>
          <span data-s1-part="toggle-icon" aria-hidden="true" {...(slot(partScope, "toggleIcon").attrs ?? {})}>
            {slot(partScope, "toggleIcon").content ?? ""}
          </span>
        </button>
        <div data-open={initialOpen ? "true" : undefined} data-s1-part="panel-wrap" id={`${uid}-panel-wrap`} {...(slot(partScope, "panelWrap").attrs ?? {})}>
          <div data-s1-part="panel" {...(slot(partScope, "panel").attrs ?? {})}>
            {children === undefined ? (
              <>
            <span data-s1-part="title" {...(slot(partScope, "panelTitle").attrs ?? {})}>
              {slot(partScope, "panelTitle").content ?? (bare ? "타이틀" : undefined)}
            </span>
            <span data-s1-part="subtitle" {...(slot(partScope, "panelSubtitle").attrs ?? {})}>
              {slot(partScope, "panelSubtitle").content ?? (bare ? "서브타이틀" : undefined)}
            </span>
            <span data-s1-part="body" {...(slot(partScope, "panelBody").attrs ?? {})}>
              {slot(partScope, "panelBody").content ?? (bare ? "서브타이틀" : undefined)}
            </span>
            <span data-s1-part="note" {...(slot(partScope, "panelNote").attrs ?? {})}>
              {slot(partScope, "panelNote").content ?? (bare ? "서브타이틀" : undefined)}
            </span>
            <span data-s1-part="caption" {...(slot(partScope, "panelCaption").attrs ?? {})}>
              {slot(partScope, "panelCaption").content ?? (bare ? "서브타이틀" : undefined)}
            </span>
              </>
            ) : children}
          </div>
        </div>
      </div>
  );
});
S1ExpandableCard.displayName = "S1ExpandableCard";
export default S1ExpandableCard;
