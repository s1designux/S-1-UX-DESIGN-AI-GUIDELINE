/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Lnb — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/lnb*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/lnb.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/lnb.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["menu","brand"];
export const SIZES = ["md","lg"];
export const MODES = [];
export const PARTS = ["head","brand","brand-logo","collapse","collapse-icon","group","items","item","item-icon","item-toggle","subitems"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] lnb: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"collapsed":false,"openIds":[]},{"collapsed":false,"openIds":[]}];

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
    return pickGroup(current, [{"index":0,"values":{"data-variant":["menu"],"data-state":["expanded"]}},{"index":1,"values":{"data-variant":["brand"],"data-state":["expanded","collapsed"]}}]);
  }
  return 0;
}

export default function S1Lnb({ variant, size, parts, onCollapse, onToggle, collapsed, defaultCollapsed, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, { "data-variant": variant, "data-state": rest["data-state"] });
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("side-menu", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { collapsed, defaultCollapsed, onCollapse, onToggle, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "lnb", "data-variant": "menu", "data-size": size ?? "md", "data-state": "expanded", "aria-label": "기본 메뉴" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "head", ...(slot(partScope, "head").attrs ?? {}) }}>
          <El k="n2" a={{ "type": "button", "data-s1-part": "collapse", "aria-pressed": "false", "aria-label": "메뉴 접기", ...(slot(partScope, "collapse").attrs ?? {}) }}>
            <El k="n3" a={{ "data-s1-part": "collapse-icon", "aria-hidden": "true", ...(slot(partScope, "collapseIcon").attrs ?? {}) }}>
              {slot(partScope, "collapseIcon").content ?? ""}
            </El>
          </El>
        </El>
        <El k="n4" a={{ "data-s1-part": "items", ...(slot(partScope, "items").attrs ?? {}) }}>
          <El k="n5" a={{  }}>
            <El k="n6" a={{ "data-s1-part": "item", "aria-current": "page", "title": "개요", ...(slot(partScope, "item").attrs ?? {}) }}>
              <El k="n7" a={{ "data-s1-part": "item-icon", "aria-hidden": "true", ...(slot(partScope, "itemIcon").attrs ?? {}) }}>
                {slot(partScope, "itemIcon").content ?? ""}
              </El>
              {"개요"}
            </El>
          </El>
          <El k="n8" a={{  }}>
            <El k="n9" a={{ "data-s1-part": "item", "title": "기반 토큰", ...(slot(partScope, "item").attrs ?? {}) }}>
              <El k="n10" a={{ "data-s1-part": "item-icon", "aria-hidden": "true", ...(slot(partScope, "itemIcon").attrs ?? {}) }}>
                {slot(partScope, "itemIcon").content ?? ""}
              </El>
              {"기반 토큰"}
            </El>
          </El>
          <El k="n11" a={{  }}>
            <El k="n12" a={{ "type": "button", "data-s1-part": "item", "aria-expanded": "false", "aria-controls": "lnb-example-sub-1", "title": "컴포넌트", ...(slot(partScope, "item").attrs ?? {}) }}>
              <El k="n13" a={{ "data-s1-part": "item-icon", "aria-hidden": "true", ...(slot(partScope, "itemIcon").attrs ?? {}) }}>
                {slot(partScope, "itemIcon").content ?? ""}
              </El>
              {"컴포넌트"}
              <El k="n14" a={{ "data-s1-part": "item-toggle", "aria-hidden": "true", ...(slot(partScope, "itemToggle").attrs ?? {}) }}>
                {slot(partScope, "itemToggle").content ?? ""}
              </El>
            </El>
            <El k="n15" a={{ "data-s1-part": "subitems", "id": "lnb-example-sub-1", "hidden": "", ...(slot(partScope, "subitems").attrs ?? {}) }}>
              <El k="n16" a={{  }}>
                <El k="n17" a={{ "data-s1-part": "item", ...(slot(partScope, "item").attrs ?? {}) }}>
                  {slot(partScope, "item").content ?? "PC 컴포넌트"}
                </El>
              </El>
              <El k="n18" a={{  }}>
                <El k="n19" a={{ "data-s1-part": "item", ...(slot(partScope, "item").attrs ?? {}) }}>
                  {slot(partScope, "item").content ?? "Mobile 컴포넌트"}
                </El>
              </El>
            </El>
          </El>
          <El k="n20" a={{  }}>
            <El k="n21" a={{ "data-s1-part": "item", "aria-disabled": "true", "title": "준비 중", ...(slot(partScope, "item").attrs ?? {}) }}>
              <El k="n22" a={{ "data-s1-part": "item-icon", "aria-hidden": "true", ...(slot(partScope, "itemIcon").attrs ?? {}) }}>
                {slot(partScope, "itemIcon").content ?? ""}
              </El>
              {"준비 중"}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "lnb", "data-variant": "brand", "data-size": size ?? "md", "data-state": "expanded", "aria-label": "로고 메뉴" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "head", ...(slot(partScope, "head").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "brand", "aria-label": "첫 화면으로", ...(slot(partScope, "brand").attrs ?? {}) }}>
            <El k="n3" a={{ "data-s1-part": "brand-logo", ...(slot(partScope, "brandLogo").attrs ?? {}) }} />
          </El>
          <El k="n4" a={{ "type": "button", "data-s1-part": "collapse", "aria-pressed": "false", "aria-label": "메뉴 접기", ...(slot(partScope, "collapse").attrs ?? {}) }}>
            <El k="n5" a={{ "data-s1-part": "collapse-icon", "aria-hidden": "true", ...(slot(partScope, "collapseIcon").attrs ?? {}) }}>
              {slot(partScope, "collapseIcon").content ?? ""}
            </El>
          </El>
        </El>
        <El k="n6" a={{ "data-s1-part": "items", ...(slot(partScope, "items").attrs ?? {}) }}>
          <El k="n7" a={{  }}>
            <El k="n8" a={{ "data-s1-part": "item", "aria-current": "page", "title": "개요", ...(slot(partScope, "item").attrs ?? {}) }}>
              <El k="n9" a={{ "data-s1-part": "item-icon", "aria-hidden": "true", ...(slot(partScope, "itemIcon").attrs ?? {}) }}>
                {slot(partScope, "itemIcon").content ?? ""}
              </El>
              {"개요"}
            </El>
          </El>
          <El k="n10" a={{  }}>
            <El k="n11" a={{ "data-s1-part": "item", "title": "기반 토큰", ...(slot(partScope, "item").attrs ?? {}) }}>
              <El k="n12" a={{ "data-s1-part": "item-icon", "aria-hidden": "true", ...(slot(partScope, "itemIcon").attrs ?? {}) }}>
                {slot(partScope, "itemIcon").content ?? ""}
              </El>
              {"기반 토큰"}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] lnb: 그릴 템플릿을 고르지 못했습니다.");
}
