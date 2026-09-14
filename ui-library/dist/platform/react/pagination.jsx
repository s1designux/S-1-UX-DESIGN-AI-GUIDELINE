/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Pagination — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/pagination*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { attrsOf, keyOf, scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/pagination.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["bar"];
export const SIZES = ["28"];
export const PARTS = ["arrow-group","pages","page","icon"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_PAGES = (uid) => ["1", { "content": "2", "attrs": { "data-page": "2", "aria-current": undefined } }, { "content": "3", "attrs": { "data-page": "3", "aria-current": undefined } }, { "content": "4", "attrs": { "data-page": "4", "aria-current": undefined } }, { "content": "5", "attrs": { "data-page": "5", "aria-current": undefined } }, { "content": "6", "attrs": { "data-page": "6", "aria-current": undefined } }];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] pagination: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1Pagination({ parts, pages, className, style, ...rest }) {
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

  return (
      <nav data-s1-component="pagination" data-total-pages="6" data-page="1" aria-label="페이지 탐색" ref={rootRef} className={className} style={style} {...rest}>
        <span data-s1-part="arrow-group" {...(slot(partScope, "arrowGroup").attrs ?? {})}>
          <button type="button" data-s1-action="first" aria-label="첫 페이지">
            <span data-s1-part="icon" data-icon="edge" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
              {slot(partScope, "icon").content ?? ""}
            </span>
          </button>
          <button type="button" data-s1-action="previous" aria-label="이전 페이지">
            <span data-s1-part="icon" data-icon="chevron" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
              {slot(partScope, "icon").content ?? ""}
            </span>
          </button>
        </span>
        <span data-s1-part="pages" {...(slot(partScope, "pages").attrs ?? {})}>
          {(pages ?? DEFAULT_PAGES(uid)).map((item1, index1) => {
            const scope1 = scopeOf(item1);
            return (
              <button type="button" data-s1-part="page" data-page="1" aria-current="page" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
                {slot(scope1, "page", true).content ?? "1"}
              </button>
            );
          })}
        </span>
        <span data-s1-part="arrow-group" {...(slot(partScope, "arrowGroup").attrs ?? {})}>
          <button type="button" data-s1-action="next" aria-label="다음 페이지">
            <span data-s1-part="icon" data-icon="chevron" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
              {slot(partScope, "icon").content ?? ""}
            </span>
          </button>
          <button type="button" data-s1-action="last" aria-label="마지막 페이지">
            <span data-s1-part="icon" data-icon="edge" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
              {slot(partScope, "icon").content ?? ""}
            </span>
          </button>
        </span>
      </nav>
  );
}
