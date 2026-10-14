"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1GnbSubMenu — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/gnb-sub-menu*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId } from "react";
import { attrsOf, keyOf, list, mergeParts, s1Link, scopeOf, slot } from "./kit.js";
// gnb-sub-menu 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = [];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["columns"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_COLUMNS = (uid) => [{ "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴", "하위 메뉴", "하위 메뉴"] }, { "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴"] }, { "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴", "하위 메뉴"] }, { "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴", "하위 메뉴", { "content": "단말기정보", "attrs": { "aria-current": "page" } }] }];
const DEFAULT_ITEMS_1 = (uid) => ["하위 메뉴", "하위 메뉴", "하위 메뉴", "하위 메뉴"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] gnb-sub-menu: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1GnbSubMenu = forwardRef(function S1GnbSubMenu({ parts, type, columns, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootAttr = forwardedRef;
  const partScope = scopeOf(parts);
  return (
      <div data-type={type ?? "regular"} data-s1-component="gnb-sub-menu" aria-label="하위 메뉴 · regular" ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="columns" {...(slot(partScope, "columns").attrs ?? {})}>
          {(columns ?? DEFAULT_COLUMNS(uid)).map((item1, index1) => {
            const scope1 = scopeOf(item1);
            return (
              <ul data-s1-part="column" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
                {(columns === undefined || scope1.title !== undefined || scope1.__content !== undefined) && (
                <li>
                  <span data-s1-component="gnb-sub-menu-item" data-depth="1depth" {...(slot(scope1, "title").attrs ?? {})}>
                    {slot(scope1, "title", true).content ?? "카테고리 제목"}
                  </span>
                </li>
                )}
                {(scope1.items ?? (columns === undefined ? DEFAULT_ITEMS_1(uid) : [])).map((item2, index2) => {
                  const scope2 = scopeOf(s1Link(item2));
                  return (
                    <li key={keyOf(item2, index2)}>
                      <a data-s1-component="gnb-sub-menu-item" data-depth="2depth" href="#" {...(attrsOf(scope2) ?? {})}>
                        {slot(scope2, "item", true).content ?? "하위 메뉴"}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
  );
});
S1GnbSubMenu.displayName = "S1GnbSubMenu";
export default S1GnbSubMenu;
