/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1GnbSubMenu — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/gnb-sub-menu*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useId, useRef } from "react";
import { attrsOf, keyOf, list, scopeOf, slot } from "./runtime.js";
// gnb-sub-menu 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = [];
export const SIZES = [];
export const PARTS = ["columns","column"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_COLUMNS = (uid) => [{ "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴", "하위 메뉴", "하위 메뉴"] }, { "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴"] }, { "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴", "하위 메뉴"] }, { "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴", "하위 메뉴", { "content": "단말기정보", "attrs": { "aria-current": "page" } }] }];
const DEFAULT_ITEMS_1 = (uid) => ["하위 메뉴", "하위 메뉴", "하위 메뉴", "하위 메뉴"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] gnb-sub-menu: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1GnbSubMenu({ parts, columns, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);

  return (
      <div data-s1-component="gnb-sub-menu" data-type="regular" aria-label="하위 메뉴 · regular" ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="columns" {...(slot(partScope, "columns").attrs ?? {})}>
          {(columns ?? DEFAULT_COLUMNS(uid)).map((item1, index1) => {
            const scope1 = scopeOf(item1);
            return (
              <ul data-s1-part="column" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
                <li>
                  <span data-s1-component="gnb-sub-menu-item" data-depth="1depth" {...(slot(scope1, "title").attrs ?? {})}>
                    {slot(scope1, "title", true).content ?? "카테고리 제목"}
                  </span>
                </li>
                {(scope1.items ?? DEFAULT_ITEMS_1(uid)).map((item2, index2) => {
                  const scope2 = scopeOf(item2);
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
}
