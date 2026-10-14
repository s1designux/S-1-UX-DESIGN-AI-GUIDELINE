"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Lnb — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/lnb*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef } from "react";
import { attrsOf, mergeParts, scopeOf, slot, useMergedRef, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/lnb.js";


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["menu","brand"];
export const SIZES = ["md","lg"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["head","collapse","collapseIcon","items","brand","brandLogo","item","itemIcon","itemToggle","subitems","group"];
/* 0.22.0 에서 쓰던 슬롯 이름 — 계속 받는다(옛 이름 하나가 여러 자리를 함께 채우는 것도 그때 그대로). 새 코드는 위 이름을 쓰세요. */
export const LEGACY_PARTS = ["item","itemIcon","itemToggle","subitems","group"];
export const DEFAULT_VARIANT = "menu";
export const STRUCTURAL = {"attribute":"data-variant","prop":"variant"};

const DEFAULT_LNB_ITEMS_MENU = [{"label":"개요","current":true},{"label":"기반 토큰"},{"label":"컴포넌트","children":[{"label":"PC 컴포넌트"},{"label":"Mobile 컴포넌트"}]},{"label":"준비 중","disabled":true}];
const DEFAULT_LNB_ITEMS_BRAND = [{"label":"개요","current":true},{"label":"기반 토큰"}];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] lnb: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Lnb = forwardRef(function S1Lnb({ variant, size, parts, onCollapse, onToggle, items, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  const formKey = (variant ?? DEFAULT_VARIANT);
  const lnbList = items ?? (formKey === "brand" ? DEFAULT_LNB_ITEMS_BRAND : DEFAULT_LNB_ITEMS_MENU);
  const partScope = scopeOf(parts);
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:lnb:collapse": (event) => onCollapse?.(event),
    "s1:lnb:toggle": (event) => onToggle?.(event)
  }, [formKey]);
  const renderLnbItem = (entry, index) => {
    const item = typeof entry === "string" || typeof entry === "number" ? { label: String(entry) } : entry;
    const key = item.key ?? index;
    const title = item.title ?? (typeof item.label === "string" ? item.label : undefined);
    const iconAttrs = slot(partScope, "itemIcon").attrs ?? {};
    const icon = <span data-s1-part="item-icon" aria-hidden="true" {...iconAttrs}>{item.icon ?? slot(partScope, "itemIcon").content ?? ""}</span>;
    if (item.children) {
      const subId = uid + "-sub-" + index;
      const open = Boolean(item.expanded);
      return (
        <li key={key}>
          <button type="button" data-s1-part="item" aria-expanded={String(open)} aria-controls={subId} title={title} {...(slot(partScope, "item").attrs ?? {})}>
            {icon}
            {item.label}
            <span data-s1-part="item-toggle" aria-hidden="true" {...(slot(partScope, "itemToggle").attrs ?? {})}>{slot(partScope, "itemToggle").content ?? ""}</span>
          </button>
          <ul data-s1-part="subitems" id={subId} hidden={!open} {...(slot(partScope, "subitems").attrs ?? {})}>
            {item.children.map((child, childIndex) => {
              const sub = typeof child === "string" || typeof child === "number" ? { label: String(child) } : child;
              return (
                <li key={sub.key ?? childIndex}>
                  <a data-s1-part="item" href={sub.href ?? "#"} aria-current={sub.current ? "page" : undefined} {...(slot(partScope, "item").attrs ?? {})}>{slot(partScope, "item").content ?? sub.label}</a>
                </li>
              );
            })}
          </ul>
        </li>
      );
    }
    return (
      <li key={key}>
        <a data-s1-part="item" href={item.href ?? "#"} aria-current={item.current ? "page" : undefined} aria-disabled={item.disabled ? "true" : undefined} tabIndex={item.disabled ? -1 : undefined} title={title} {...(slot(partScope, "item").attrs ?? {})}>
          {icon}
          {item.label}
        </a>
      </li>
    );
  };
  if (formKey === "menu") {
    return (
      <nav data-s1-component="lnb" data-variant="menu" data-size={size ?? "md"} data-state="expanded" aria-label="기본 메뉴" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="head" {...(slot(partScope, "head").attrs ?? {})}>
          <button type="button" data-s1-part="collapse" aria-pressed="false" aria-label="메뉴 접기" {...(slot(partScope, "collapse").attrs ?? {})}>
            <span data-s1-part="collapse-icon" aria-hidden="true" {...(slot(partScope, "collapseIcon").attrs ?? {})}>
              {slot(partScope, "collapseIcon").content ?? ""}
            </span>
          </button>
        </div>
        <ul data-s1-part="items" {...(slot(partScope, "items").attrs ?? {})}>
          {lnbList.map(renderLnbItem)}
        </ul>
      </nav>
    );
  } else if (formKey === "brand") {
    return (
      <nav data-s1-component="lnb" data-variant="brand" data-size={size ?? "md"} data-state="expanded" aria-label="로고 메뉴" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="head" {...(slot(partScope, "head").attrs ?? {})}>
          <a data-s1-part="brand" href="#" aria-label="첫 화면으로" {...(slot(partScope, "brand").attrs ?? {})}>
            <img data-s1-part="brand-logo" src="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%20150%2024%27%2F%3E" alt="서비스 로고" {...(slot(partScope, "brandLogo").attrs ?? {})} />
          </a>
          <button type="button" data-s1-part="collapse" aria-pressed="false" aria-label="메뉴 접기" {...(slot(partScope, "collapse").attrs ?? {})}>
            <span data-s1-part="collapse-icon" aria-hidden="true" {...(slot(partScope, "collapseIcon").attrs ?? {})}>
              {slot(partScope, "collapseIcon").content ?? ""}
            </span>
          </button>
        </div>
        <ul data-s1-part="items" {...(slot(partScope, "items").attrs ?? {})}>
          {lnbList.map(renderLnbItem)}
        </ul>
      </nav>
    );
  }
  throw new Error(`[s1-ui] lnb: 승인되지 않은 variant "${variant}". 쓸 수 있는 값: ${VARIANTS.join(", ")}`);
});
S1Lnb.displayName = "S1Lnb";
export default S1Lnb;
