/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Lnb — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/lnb*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/lnb.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["menu","brand"];
export const SIZES = ["md","lg"];
export const PARTS = ["head","brand","brand-logo","collapse","collapse-icon","group","items","item","item-icon","item-toggle","subitems"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] lnb: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1Lnb({ variant, size, parts, onCollapse, onToggle, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
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
    const bound = [["s1:lnb:collapse", onCollapse], ["s1:lnb:toggle", onToggle]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  return (
      <nav data-s1-component="lnb" data-variant={variant ?? "menu"} data-size={size ?? "md"} data-state="expanded" aria-label="기본 메뉴" ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="head" {...(slot(partScope, "head").attrs ?? {})}>
          <button type="button" data-s1-part="collapse" aria-pressed="false" aria-label="메뉴 접기" {...(slot(partScope, "collapse").attrs ?? {})}>
            <span data-s1-part="collapse-icon" aria-hidden="true" {...(slot(partScope, "collapseIcon").attrs ?? {})}>
              {slot(partScope, "collapseIcon").content ?? ""}
            </span>
          </button>
        </div>
        <ul data-s1-part="items" {...(slot(partScope, "items").attrs ?? {})}>
          <li>
            <a data-s1-part="item" href="#" aria-current="page" title="개요" {...(slot(partScope, "item").attrs ?? {})}>
              <span data-s1-part="item-icon" aria-hidden="true" {...(slot(partScope, "itemIcon").attrs ?? {})}>
                {slot(partScope, "itemIcon").content ?? ""}
              </span>
              {"개요"}
            </a>
          </li>
          <li>
            <a data-s1-part="item" href="#" title="기반 토큰" {...(slot(partScope, "item").attrs ?? {})}>
              <span data-s1-part="item-icon" aria-hidden="true" {...(slot(partScope, "itemIcon").attrs ?? {})}>
                {slot(partScope, "itemIcon").content ?? ""}
              </span>
              {"기반 토큰"}
            </a>
          </li>
          <li>
            <button type="button" data-s1-part="item" aria-expanded="false" aria-controls={`${uid}-subitems`} title="컴포넌트" {...(slot(partScope, "item").attrs ?? {})}>
              <span data-s1-part="item-icon" aria-hidden="true" {...(slot(partScope, "itemIcon").attrs ?? {})}>
                {slot(partScope, "itemIcon").content ?? ""}
              </span>
              {"컴포넌트"}
              <span data-s1-part="item-toggle" aria-hidden="true" {...(slot(partScope, "itemToggle").attrs ?? {})}>
                {slot(partScope, "itemToggle").content ?? ""}
              </span>
            </button>
            <ul data-s1-part="subitems" id={`${uid}-subitems`} hidden {...(slot(partScope, "subitems").attrs ?? {})}>
              <li>
                <a data-s1-part="item" href="#" {...(slot(partScope, "item").attrs ?? {})}>
                  {slot(partScope, "item").content ?? "PC 컴포넌트"}
                </a>
              </li>
              <li>
                <a data-s1-part="item" href="#" {...(slot(partScope, "item").attrs ?? {})}>
                  {slot(partScope, "item").content ?? "Mobile 컴포넌트"}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a data-s1-part="item" href="#" aria-disabled="true" title="준비 중" {...(slot(partScope, "item").attrs ?? {})}>
              <span data-s1-part="item-icon" aria-hidden="true" {...(slot(partScope, "itemIcon").attrs ?? {})}>
                {slot(partScope, "itemIcon").content ?? ""}
              </span>
              {"준비 중"}
            </a>
          </li>
        </ul>
      </nav>
  );
}
