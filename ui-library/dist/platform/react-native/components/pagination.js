/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Pagination — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/pagination*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/pagination.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot, attrsOf, keyOf } from "../runtime.js";
import SPEC from "../specs/pagination.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["bar"];
export const SIZES = ["28"];
export const MODES = [];
export const PARTS = ["arrow-group","pages","page","icon"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_PAGES_0 = (uid) => ["1", { "content": "2", "attrs": { "data-page": "2", "aria-current": undefined } }, { "content": "3", "attrs": { "data-page": "3", "aria-current": undefined } }, { "content": "4", "attrs": { "data-page": "4", "aria-current": undefined } }, { "content": "5", "attrs": { "data-page": "5", "aria-current": undefined } }, { "content": "6", "attrs": { "data-page": "6", "aria-current": undefined } }];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] pagination: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"initial":1,"total":6,"block":6}];

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

export default function S1Pagination({ parts, pages, page, defaultPage, totalPages, onChange, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("pagination", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { page, defaultPage, totalPages, onChange, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "pagination", "data-total-pages": "6", "data-page": "1", "aria-label": "페이지 탐색" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "arrow-group", ...(slot(partScope, "arrowGroup").attrs ?? {}) }}>
          <El k="n2" a={{ "type": "button", "data-s1-action": "first", "aria-label": "이전 페이지 묶음" }}>
            <El k="n3" a={{ "data-s1-part": "icon", "data-icon": "edge", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
              {slot(partScope, "icon").content ?? ""}
            </El>
          </El>
          <El k="n4" a={{ "type": "button", "data-s1-action": "previous", "aria-label": "이전 페이지" }}>
            <El k="n5" a={{ "data-s1-part": "icon", "data-icon": "chevron", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
              {slot(partScope, "icon").content ?? ""}
            </El>
          </El>
        </El>
        <El k="n6" a={{ "data-s1-part": "pages", ...(slot(partScope, "pages").attrs ?? {}) }}>
          {(pages ?? DEFAULT_PAGES_0(uid)).map((item1, index1, all1) => {
            const scope1 = scopeOf(item1);
            return (
              <El k="n7" a={{ "type": "button", "data-s1-part": "page", "data-page": "1", "aria-current": "page", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
                {slot(scope1, "page", true).content ?? "1"}
              </El>
            );
          })}
        </El>
        <El k="n13" a={{ "data-s1-part": "arrow-group", ...(slot(partScope, "arrowGroup").attrs ?? {}) }}>
          <El k="n14" a={{ "type": "button", "data-s1-action": "next", "aria-label": "다음 페이지" }}>
            <El k="n15" a={{ "data-s1-part": "icon", "data-icon": "chevron", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
              {slot(partScope, "icon").content ?? ""}
            </El>
          </El>
          <El k="n16" a={{ "type": "button", "data-s1-action": "last", "aria-label": "다음 페이지 묶음" }}>
            <El k="n17" a={{ "data-s1-part": "icon", "data-icon": "edge", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
              {slot(partScope, "icon").content ?? ""}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] pagination: 그릴 템플릿을 고르지 못했습니다.");
}
