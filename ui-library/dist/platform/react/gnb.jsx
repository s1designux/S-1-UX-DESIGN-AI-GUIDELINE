/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Gnb — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/gnb*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/gnb.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["center-between","start"];
export const SIZES = ["md","sm","xsm"];
export const PARTS = ["logo","leading","menus","menu","util","lang","lang-icon","lang-label","account","account-icon","menu-toggle","menu-icon"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] gnb: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1Gnb({ variant, size, parts, onOpen, onClose, className, style, ...rest }) {
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
    const bound = [["s1:gnb:open", onOpen], ["s1:gnb:close", onClose]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  return (
      <nav data-s1-component="gnb" data-size={size ?? "sm"} data-variant={variant ?? "start"} aria-label="주 메뉴 · 레귤러 예시" ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="leading" {...(slot(partScope, "leading").attrs ?? {})}>
          <a data-s1-part="logo" href="#" {...(slot(partScope, "logo").attrs ?? {})}>
            {slot(partScope, "logo").content ?? "SAMPLE LOGO"}
          </a>
          <ul data-s1-part="menus" {...(slot(partScope, "menus").attrs ?? {})}>
            <li>
              <a data-s1-part="menu" href="#" aria-current="page" {...(slot(partScope, "menu").attrs ?? {})}>
                {slot(partScope, "menu").content ?? "공지사항"}
              </a>
            </li>
            <li>
              <a data-s1-part="menu" href="#" aria-expanded="false" aria-controls="gnb-sub-menu-a-service" {...(slot(partScope, "menu").attrs ?? {})}>
                {slot(partScope, "menu").content ?? "서비스"}
              </a>
            </li>
            <li>
              <a data-s1-part="menu" href="#" aria-expanded="false" aria-controls="gnb-sub-menu-a-stats" {...(slot(partScope, "menu").attrs ?? {})}>
                {slot(partScope, "menu").content ?? "통계"}
              </a>
            </li>
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
  );
}
