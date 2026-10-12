/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Table — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/table*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/table.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot, attrsOf, keyOf, list } from "../runtime.js";
import SPEC from "../specs/table.js";
import S1Checkbox from "./checkbox.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["md","sm","xsm"];
export const MODES = [];
export const PARTS = ["table","header-cell","row","cell"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_HEADER_CELLS_0 = (uid) => ["항목명", "카테고리", { "content": "수량", "attrs": { "data-align": "center" } }, { "content": "상태", "attrs": { "data-align": "center" } }];
const DEFAULT_ROWS_0 = (uid) => [{ "cells": ["항목 1", "카테고리 A", { "content": "10", "attrs": { "data-align": "center" } }, { "content": "활성", "attrs": { "data-align": "center" } }] }, { "control": { "attrs": { "aria-label": "항목 2 선택" } }, "cells": ["항목 2", "카테고리 B", { "content": "20", "attrs": { "data-align": "center" } }, { "content": "검토중", "attrs": { "data-align": "center" } }] }, { "control": { "attrs": { "aria-label": "항목 3 선택" } }, "cells": ["항목 3", "카테고리 C", { "content": "30", "attrs": { "data-align": "center" } }, { "content": "완료", "attrs": { "data-align": "center" } }] }];
const DEFAULT_CELLS_1_0 = (uid) => ["항목 1", "카테고리 A", { "content": "10", "attrs": { "data-align": "center" } }, { "content": "활성", "attrs": { "data-align": "center" } }];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] table: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{}];

/* 같은 화면·모드에 구조가 다른 템플릿이 여럿이면, 루트 속성이 가장 많이 맞는 것을 고른다(안 준 속성은 따지지 않는다). */
function pickGroup(current, groups) {
  let best = groups[0];
  let bestScore = -1;
  for (const group of groups) {
    let score = 0;
    let ok = true;
    for (const [name, values] of Object.entries(group.values)) {
      const value = current?.[name];
      if (value === undefined || values.length === 0) continue;
      if (values.includes(String(value))) score += 1; else ok = false;
    }
    if (ok && score > bestScore) { best = group; bestScore = score; }
  }
  return best.index;
}

function pickTemplate(breakName, mode, current) {
  if (breakName === "pc") {
    return 0;
  }
  return 0;
}

export default function S1Table({ size, parts, headerCells, rows, onSelectionChange, selection, defaultSelection, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("size", size, SIZES);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("table", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { selection, defaultSelection, onSelectionChange, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "table", "data-size": size ?? "md" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "table", ...(slot(partScope, "table").attrs ?? {}) }}>
          <El k="n2" a={{  }}>
            <El k="n3" a={{  }}>
              <El k="n4" a={{ "data-s1-part": "header-cell", "data-selection": "", "scope": "col", ...(slot(partScope, "headerCell").attrs ?? {}) }}>
                <N k="n5" as={S1Checkbox} a={{ "data-s1-component": "checkbox" }} p={{ "aria-label": "전체 선택", omit: ["label"], ...nestedFrom(slot(partScope, "control").attrs), ...attrProps(slot(partScope, "nested:checkbox").attrs) }} />
              </El>
              {(headerCells ?? DEFAULT_HEADER_CELLS_0(uid)).map((item1, index1, all1) => {
                const scope1 = scopeOf(item1);
                return (
                  <El k="n6" a={{ "data-s1-part": "header-cell", "scope": "col", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
                    {slot(scope1, "headerCell", true).content ?? "항목명"}
                  </El>
                );
              })}
            </El>
          </El>
          <El k="n10" a={{  }}>
            {(rows ?? DEFAULT_ROWS_0(uid)).map((item1, index1, all1) => {
              const scope1 = scopeOf(item1);
              return (
                <El k="n11" a={{ "data-s1-part": "row", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
                  <El k="n12" a={{ "data-s1-part": "cell", "data-selection": "", ...(slot(scope1, "cell").attrs ?? {}) }}>
                    <N k="n13" as={S1Checkbox} a={{ "data-s1-component": "checkbox" }} p={{ "aria-label": "항목 1 선택", omit: ["label"], ...nestedFrom(slot(scope1, "control").attrs), ...attrProps(slot(scope1, "nested:checkbox").attrs) }} />
                  </El>
                  {(list(scope1, "cells", DEFAULT_CELLS_1_0(uid))).map((item2, index2, all2) => {
                    const scope2 = scopeOf(item2);
                    return (
                      <El k="n14" a={{ "data-s1-part": "cell", ...attrsOf(scope2) }} at={[index2, all2.length]} props={propsOf(scope2)} key={keyOf(item2, index2)}>
                        {slot(scope2, "cell", true).content ?? "항목 1"}
                      </El>
                    );
                  })}
                </El>
              );
            })}
          </El>
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] table: 그릴 템플릿을 고르지 못했습니다.");
}
