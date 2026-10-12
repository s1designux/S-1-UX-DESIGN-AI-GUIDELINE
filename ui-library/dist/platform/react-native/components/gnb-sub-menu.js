/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1GnbSubMenu — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/gnb-sub-menu*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/gnb-sub-menu.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { scopeOf, slot, attrsOf, keyOf, list } from "../runtime.js";
import SPEC from "../specs/gnb-sub-menu.js";
import S1GnbSubMenuItem from "./gnb-sub-menu-item.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = [];
export const SIZES = [];
export const MODES = [];
export const PARTS = ["columns","column"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_COLUMNS_0 = (uid) => [{ "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴", "하위 메뉴", "하위 메뉴"] }, { "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴"] }, { "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴", "하위 메뉴"] }, { "title": "카테고리 제목", "items": ["하위 메뉴", "하위 메뉴", "하위 메뉴", { "content": "단말기정보", "attrs": { "aria-current": "page" } }] }];
const DEFAULT_COLUMNS_1 = (uid) => ["", "", "", "", "", { "nested:gnbSubMenuItem": { "content": "하위 메뉴", "attrs": { "aria-current": "page" } } }];
const DEFAULT_COLUMNS_2 = (uid) => [{ "items": ["하위 메뉴", "하위 메뉴"] }, { "items": ["하위 메뉴", "하위 메뉴"] }, { "items": ["하위 메뉴", "하위 메뉴"] }, { "items": ["하위 메뉴", "하위 메뉴"] }, { "items": [{ "content": "하위 메뉴", "attrs": { "aria-current": "page" } }] }];
const DEFAULT_ITEMS_1_0 = (uid) => ["하위 메뉴", "하위 메뉴", "하위 메뉴", "하위 메뉴"];
const DEFAULT_ITEMS_1_2 = (uid) => ["하위 메뉴", "하위 메뉴"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] gnb-sub-menu: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

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
    return pickGroup(current, [{"index":0,"values":{"data-type":["regular"]}},{"index":1,"values":{"data-type":["compact-1"]}},{"index":2,"values":{"data-type":["compact-2"]}}]);
  }
  return 0;
}

export default function S1GnbSubMenu({ parts, columns, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, { "data-type": rest["data-type"] });
  const controller = undefined;
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "gnb-sub-menu", "data-type": "regular", "aria-label": "하위 메뉴 · regular" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "columns", ...(slot(partScope, "columns").attrs ?? {}) }}>
          {(columns ?? DEFAULT_COLUMNS_0(uid)).map((item1, index1, all1) => {
            const scope1 = scopeOf(item1);
            return (
              <El k="n2" a={{ "data-s1-part": "column", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
                <El k="n3" a={{  }}>
                  <N k="n4" as={S1GnbSubMenuItem} a={{ "data-s1-component": "gnb-sub-menu-item", "data-depth": "1depth" }} p={{ "data-depth": "1depth", "aria-current": undefined, ...attrProps(attrsOf(scope1)) }}>{slot(scope1, "title", true).content ?? "카테고리 제목"}</N>
                </El>
                {(scope1.items ?? DEFAULT_ITEMS_1_0(uid)).map((item2, index2, all2) => {
                  const scope2 = scopeOf(item2);
                  return (
                    <El k="n5" a={{  }} key={keyOf(item2, index2)} at={[index2, all2.length]} props={propsOf(scope2)}>
                      <N k="n6" as={S1GnbSubMenuItem} a={{ "data-s1-component": "gnb-sub-menu-item", "data-depth": "2depth", "href": "#" }} p={{ "data-depth": "2depth", "aria-current": undefined, ...attrProps(attrsOf(scope2)) }}>{slot(scope2, "item", true).content ?? "하위 메뉴"}</N>
                    </El>
                  );
                })}
              </El>
            );
          })}
        </El>
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "gnb-sub-menu", "data-type": "compact-1", "aria-label": "하위 메뉴 · compact-1" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "columns", ...(slot(partScope, "columns").attrs ?? {}) }}>
          {(columns ?? DEFAULT_COLUMNS_1(uid)).map((item1, index1, all1) => {
            const scope1 = scopeOf(item1);
            return (
              <El k="n2" a={{ "data-s1-part": "column", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
                <El k="n3" a={{  }}>
                  <N k="n4" as={S1GnbSubMenuItem} a={{ "data-s1-component": "gnb-sub-menu-item", "data-depth": "2depth", "href": "#" }} p={{ "data-depth": "2depth", "aria-current": undefined, ...attrProps(slot(scope1, "nested:gnbSubMenuItem").attrs) }}>{slot(scope1, "nested:gnbSubMenuItem").content ?? "하위 메뉴"}</N>
                </El>
              </El>
            );
          })}
        </El>
      </Root>
    );
  }
  if (tpl === 2) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "gnb-sub-menu", "data-type": "compact-2", "aria-label": "하위 메뉴 · compact-2" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "columns", ...(slot(partScope, "columns").attrs ?? {}) }}>
          {(columns ?? DEFAULT_COLUMNS_2(uid)).map((item1, index1, all1) => {
            const scope1 = scopeOf(item1);
            return (
              <El k="n2" a={{ "data-s1-part": "column", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
                {(scope1.items ?? DEFAULT_ITEMS_1_2(uid)).map((item2, index2, all2) => {
                  const scope2 = scopeOf(item2);
                  return (
                    <El k="n3" a={{  }} key={keyOf(item2, index2)} at={[index2, all2.length]} props={propsOf(scope2)}>
                      <N k="n4" as={S1GnbSubMenuItem} a={{ "data-s1-component": "gnb-sub-menu-item", "data-depth": "2depth", "href": "#" }} p={{ "data-depth": "2depth", "aria-current": undefined, ...attrProps(attrsOf(scope2)) }}>{slot(scope2, "item", true).content ?? "하위 메뉴"}</N>
                    </El>
                  );
                })}
              </El>
            );
          })}
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] gnb-sub-menu: 그릴 템플릿을 고르지 못했습니다.");
}
