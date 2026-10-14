"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Gnb — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/gnb*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef } from "react";
import { mergeParts, scopeOf, slot, useMergedRef, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/gnb.js";
import S1GnbSubMenu from "./gnb-sub-menu.jsx";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["center-between","start"];
export const SIZES = ["md","sm","xsm"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["leading","logo","menus","util","lang","langIcon","langLabel","account","accountIcon","menuToggle","menuIcon","menu"];
/* 0.22.0 에서 쓰던 슬롯 이름 — 계속 받는다(옛 이름 하나가 여러 자리를 함께 채우는 것도 그때 그대로). 새 코드는 위 이름을 쓰세요. */
export const LEGACY_PARTS = ["menu"];

const DEFAULT_GNB_MENUS = [{"label":"공지사항","current":true},{"label":"서비스","controls":"gnb-sub-menu-a-service"},{"label":"통계","controls":"gnb-sub-menu-a-stats"}];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] gnb: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Gnb = forwardRef(function S1Gnb({ variant, size, parts, onOpen, onClose, menus, subMenuType = "regular", logo, langLabel, onOpenChange, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = logo === undefined && langLabel === undefined;
  const menuSig = (menus ?? []).map((entry) => (entry && typeof entry === "object" && (entry.columns || entry.children || entry.controls) ? "1" : "0")).join("");
  const menuList = menus ?? DEFAULT_GNB_MENUS;
  const partScope = scopeOf(mergeParts(parts, { logo: logo, langLabel: langLabel }));
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:gnb:open": (event) => { onOpen?.(event); onOpenChange?.(true, event.detail); },
    "s1:gnb:close": (event) => { onClose?.(event); onOpenChange?.(false, event.detail); }
  }, [menuSig]);
  const renderGnbMenu = (entry, index) => {
    const menu = typeof entry === "string" || typeof entry === "number" ? { label: String(entry) } : entry;
    const columns = menu.columns ?? menu.children;
    return (
      <li key={menu.key ?? index}>
        <a data-s1-part="menu" href={menu.href ?? "#"} aria-current={menu.current ? "page" : undefined} aria-expanded={columns || menu.controls ? "false" : undefined} aria-controls={menu.controls ?? (columns ? uid + "-sub-" + index : undefined)} {...(slot(partScope, "menu").attrs ?? {})}>{slot(partScope, "menu").content ?? menu.label}</a>
      </li>
    );
  };
  const renderGnbPanel = (entry, index) => {
    const menu = typeof entry === "string" || typeof entry === "number" ? { label: String(entry) } : entry;
    const columns = menu.columns ?? menu.children;
    if (!columns) return null;
    return <S1GnbSubMenu key={menu.key ?? index} id={uid + "-sub-" + index} type={subMenuType} columns={columns} hidden aria-label={typeof menu.label === "string" ? menu.label + " 하위 메뉴" : "하위 메뉴"} />;
  };
  return (
      <>
      <nav data-s1-component="gnb" data-size={size ?? "sm"} data-variant={variant ?? "start"} aria-label="주 메뉴 · 레귤러 예시" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="leading" {...(slot(partScope, "leading").attrs ?? {})}>
          <a data-s1-part="logo" href="#" {...(slot(partScope, "logo").attrs ?? {})}>
            {slot(partScope, "logo").content ?? (bare ? "SAMPLE LOGO" : undefined)}
          </a>
          <ul data-s1-part="menus" {...(slot(partScope, "menus").attrs ?? {})}>
            {menuList.map(renderGnbMenu)}
          </ul>
        </div>
        <div data-s1-part="util" {...(slot(partScope, "util").attrs ?? {})}>
          <button type="button" data-s1-part="lang" {...(slot(partScope, "lang").attrs ?? {})}>
            <span data-s1-part="lang-icon" aria-hidden="true" {...(slot(partScope, "langIcon").attrs ?? {})}>
              {slot(partScope, "langIcon").content ?? ""}
            </span>
            <span data-s1-part="lang-label" {...(slot(partScope, "langLabel").attrs ?? {})}>
              {slot(partScope, "langLabel").content ?? "한국어"}
            </span>
          </button>
          <button type="button" data-s1-part="account" aria-label="계정" {...(slot(partScope, "account").attrs ?? {})}>
            <span data-s1-part="account-icon" aria-hidden="true" {...(slot(partScope, "accountIcon").attrs ?? {})}>
              {slot(partScope, "accountIcon").content ?? ""}
            </span>
          </button>
          <button type="button" data-s1-part="menu-toggle" aria-label="전체 메뉴" {...(slot(partScope, "menuToggle").attrs ?? {})}>
            <span data-s1-part="menu-icon" aria-hidden="true" {...(slot(partScope, "menuIcon").attrs ?? {})}>
              {slot(partScope, "menuIcon").content ?? ""}
            </span>
          </button>
        </div>
      </nav>
        {menuList.map(renderGnbPanel)}
      </>
  );
});
S1Gnb.displayName = "S1Gnb";
export default S1Gnb;
