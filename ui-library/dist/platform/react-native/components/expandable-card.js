/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1ExpandableCard — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/expandable-card*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/expandable-card.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/expandable-card.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = [];
export const SIZES = [];
export const MODES = [];
export const PARTS = ["header","text","title","subtitle","body","note","caption","toggle-icon","panel-wrap","panel"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] expandable-card: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"headerPart":"header","targetPart":"panel-wrap","targetAttr":"data-open","initial":false}];

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

export default function S1ExpandableCard({ parts, onChange, open, defaultOpen, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("disclosure", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { open, defaultOpen, onChange, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "expandable-card" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "header", "aria-expanded": "false", "aria-controls": "exp-card-example-closed", ...(slot(partScope, "header").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "text", ...(slot(partScope, "text").attrs ?? {}) }}>
            <El k="n3" a={{ "data-s1-part": "title", ...(slot(partScope, "title").attrs ?? {}) }}>
              {slot(partScope, "title").content ?? "타이틀"}
            </El>
            <El k="n4" a={{ "data-s1-part": "subtitle", ...(slot(partScope, "subtitle").attrs ?? {}) }}>
              {slot(partScope, "subtitle").content ?? "서브타이틀"}
            </El>
            <El k="n5" a={{ "data-s1-part": "body", ...(slot(partScope, "body").attrs ?? {}) }}>
              {slot(partScope, "body").content ?? "서브타이틀"}
            </El>
            <El k="n6" a={{ "data-s1-part": "note", ...(slot(partScope, "note").attrs ?? {}) }}>
              {slot(partScope, "note").content ?? "서브타이틀"}
            </El>
            <El k="n7" a={{ "data-s1-part": "caption", ...(slot(partScope, "caption").attrs ?? {}) }}>
              {slot(partScope, "caption").content ?? "서브타이틀"}
            </El>
          </El>
          <El k="n8" a={{ "data-s1-part": "toggle-icon", "aria-hidden": "true", ...(slot(partScope, "toggleIcon").attrs ?? {}) }}>
            {slot(partScope, "toggleIcon").content ?? ""}
          </El>
        </El>
        <El k="n9" a={{ "data-s1-part": "panel-wrap", "id": "exp-card-example-closed", ...(slot(partScope, "panelWrap").attrs ?? {}) }}>
          <El k="n10" a={{ "data-s1-part": "panel", ...(slot(partScope, "panel").attrs ?? {}) }}>
            <El k="n11" a={{ "data-s1-part": "title", ...(slot(partScope, "title").attrs ?? {}) }}>
              {slot(partScope, "title").content ?? "타이틀"}
            </El>
            <El k="n12" a={{ "data-s1-part": "subtitle", ...(slot(partScope, "subtitle").attrs ?? {}) }}>
              {slot(partScope, "subtitle").content ?? "서브타이틀"}
            </El>
            <El k="n13" a={{ "data-s1-part": "body", ...(slot(partScope, "body").attrs ?? {}) }}>
              {slot(partScope, "body").content ?? "서브타이틀"}
            </El>
            <El k="n14" a={{ "data-s1-part": "note", ...(slot(partScope, "note").attrs ?? {}) }}>
              {slot(partScope, "note").content ?? "서브타이틀"}
            </El>
            <El k="n15" a={{ "data-s1-part": "caption", ...(slot(partScope, "caption").attrs ?? {}) }}>
              {slot(partScope, "caption").content ?? "서브타이틀"}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] expandable-card: 그릴 템플릿을 고르지 못했습니다.");
}
