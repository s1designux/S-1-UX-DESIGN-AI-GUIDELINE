"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Pagination — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/pagination*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef } from "react";
import { attrsOf, mergeParts, scopeOf, slot, useApply, useMergedRef, useRerender, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/pagination.js";


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["bar"];
export const SIZES = ["28"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["arrowGroup","icon","pages"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] pagination: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Pagination = forwardRef(function S1Pagination({ parts, page, defaultPage, totalPages, onPageChange, pages, onChange, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  const initialTotal = useRef(totalPages ?? (pages ? pages.length : 6)).current;
  const initialPage = useRef(page ?? defaultPage ?? 1).current;
  const syncing = useRef(false);
  const rerender = useRerender();
  const firstPage = Math.floor((initialPage - 1) / 6) * 6 + 1;
  const lastPage = Math.min(initialTotal, firstPage + 5);
  const pageButtons = Array.from({ length: Math.max(0, lastPage - firstPage + 1) }, (_, offset) => {
    const number = firstPage + offset;
    const scope = scopeOf(pages ? pages[number - 1] : undefined);
    return (
      <button type="button" data-s1-part="page" data-page={number} aria-current={number === initialPage ? "page" : undefined} {...attrsOf(scope)} key={number}>
        {slot(scope, "page", true).content ?? String(number)}
      </button>
    );
  });
  const partScope = scopeOf(parts);
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:pagination:change": (event) => {
      if (syncing.current) return;
      onChange?.(event);
      onPageChange?.(event.detail.page, event.detail);
      rerender();
    }
  }, []);
  useApply(apiRef, (api) => {
    const before = api.page;
    syncing.current = true;
    try {
      if (totalPages !== undefined && api.totalPages !== totalPages) api.setTotalPages(totalPages);
      if (page !== undefined && api.page !== page) api.setPage(page);
    } finally { syncing.current = false; }
    const settled = api.page;
    if (settled !== before && settled !== page) onPageChange?.(settled, { page: settled, totalPages: api.totalPages });
  });
  return (
      <nav data-total-pages={String(initialTotal)} data-page={String(initialPage)} data-s1-component="pagination" aria-label="페이지 탐색" ref={rootAttr} className={className} style={style} {...rest}>
        <span data-s1-part="arrow-group" {...(slot(partScope, "arrowGroup").attrs ?? {})}>
          <button type="button" data-s1-action="first" aria-label="이전 페이지 묶음">
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
          {pageButtons}
        </span>
        <span data-s1-part="arrow-group" {...(slot(partScope, "arrowGroup").attrs ?? {})}>
          <button type="button" data-s1-action="next" aria-label="다음 페이지">
            <span data-s1-part="icon" data-icon="chevron" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
              {slot(partScope, "icon").content ?? ""}
            </span>
          </button>
          <button type="button" data-s1-action="last" aria-label="다음 페이지 묶음">
            <span data-s1-part="icon" data-icon="edge" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
              {slot(partScope, "icon").content ?? ""}
            </span>
          </button>
        </span>
      </nav>
  );
});
S1Pagination.displayName = "S1Pagination";
export default S1Pagination;
