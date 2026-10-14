"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Table — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/table*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef } from "react";
import { attrsOf, keyOf, list, mergeParts, s1Row, scopeOf, slot, useMergedRef, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/table.js";


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["md","sm","xsm"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["table","headerCell","control"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_HEADER_CELLS = (uid) => ["항목명", "카테고리", { "content": "수량", "attrs": { "data-align": "center" } }, { "content": "상태", "attrs": { "data-align": "center" } }];
const DEFAULT_ROWS = (uid) => [{ "cells": ["항목 1", "카테고리 A", { "content": "10", "attrs": { "data-align": "center" } }, { "content": "활성", "attrs": { "data-align": "center" } }] }, { "control": { "attrs": { "aria-label": "항목 2 선택" } }, "cells": ["항목 2", "카테고리 B", { "content": "20", "attrs": { "data-align": "center" } }, { "content": "검토중", "attrs": { "data-align": "center" } }] }, { "control": { "attrs": { "aria-label": "항목 3 선택" } }, "cells": ["항목 3", "카테고리 C", { "content": "30", "attrs": { "data-align": "center" } }, { "content": "완료", "attrs": { "data-align": "center" } }] }];
const DEFAULT_CELLS_1 = (uid) => ["항목 1", "카테고리 A", { "content": "10", "attrs": { "data-align": "center" } }, { "content": "활성", "attrs": { "data-align": "center" } }];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] table: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Table = forwardRef(function S1Table({ size, parts, onSelectionChange, onSelectionchange, headerCells, rows, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("size", size, SIZES);
  const partScope = scopeOf(parts);
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:table:selectionchange": (event) => { onSelectionChange?.(event); onSelectionchange?.(event); }
  }, []);
  return (
      <div data-s1-component="table" data-size={size ?? "md"} ref={rootAttr} className={className} style={style} {...rest}>
        <table data-s1-part="table" {...(slot(partScope, "table").attrs ?? {})}>
          <thead>
            <tr>
              <th data-s1-part="header-cell" data-selection scope="col" {...(slot(partScope, "headerCell").attrs ?? {})}>
                <div data-s1-component="checkbox">
                  <input type="checkbox" data-s1-part="control" aria-label="전체 선택" {...(slot(partScope, "control").attrs ?? {})} />
                </div>
              </th>
              {(headerCells ?? DEFAULT_HEADER_CELLS(uid)).map((item1, index1) => {
                const scope1 = scopeOf(item1);
                return (
                  <th data-s1-part="header-cell" scope="col" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
                    {slot(scope1, "headerCell", true).content ?? "항목명"}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {(rows ?? DEFAULT_ROWS(uid)).map((item1, index1) => {
              const scope1 = scopeOf(rows ? s1Row(item1, index1) : item1);
              return (
                <tr data-s1-part="row" {...attrsOf(scope1)} key={keyOf(item1, index1)}>
                  <td data-s1-part="cell" data-selection {...(slot(scope1, "cell").attrs ?? {})}>
                    <div data-s1-component="checkbox">
                      <input type="checkbox" data-s1-part="control" aria-label="항목 1 선택" {...(slot(scope1, "control").attrs ?? {})} />
                    </div>
                  </td>
                  {(list(scope1, "cells", DEFAULT_CELLS_1(uid))).map((item2, index2) => {
                    const scope2 = scopeOf(item2);
                    return (
                      <td data-s1-part="cell" {...attrsOf(scope2)} key={keyOf(item2, index2)}>
                        {slot(scope2, "cell", true).content ?? "항목 1"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  );
});
S1Table.displayName = "S1Table";
export default S1Table;
