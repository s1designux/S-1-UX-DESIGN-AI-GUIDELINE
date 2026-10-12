/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1FilterChip — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/filter-chip*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/filter-chip.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/filter-chip.js";
import S1Dropdown from "./dropdown.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["line","solid"];
export const SIZES = ["sm","md"];
export const MODES = [];
export const PARTS = ["trigger","title","value","icon","panel"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] filter-chip: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"filledAttr":"data-complete","initialValue":"latest"},{"filledAttr":"data-complete","initialValue":"latest"}];

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
  if (breakName === "mobile") {
    return 1;
  }
  return 0;
}

export default function S1FilterChip({ variant, size, breakName = DEFAULT_BREAK, parts, onChange, onOpen, onClose, open, defaultOpen, value, defaultValue, options, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);
  const tpl = pickTemplate(breakName, undefined, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("popup", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { open, defaultOpen, value, defaultValue, options, onChange, onOpen, onClose, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "filter-chip", "data-variant": variant ?? "line", "data-size": size ?? "sm", "data-break": "pc", "data-title": "on" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "trigger", "aria-haspopup": "listbox", "aria-expanded": "false", ...(slot(partScope, "trigger").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "title", ...(slot(partScope, "title").attrs ?? {}) }}>
            {slot(partScope, "title").content ?? "정렬"}
          </El>
          <El k="n3" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "최신순"}
          </El>
          <El k="n4" a={{ "data-s1-part": "icon", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
            {slot(partScope, "icon").content ?? ""}
          </El>
        </El>
        <El k="n5" a={{ "data-s1-part": "panel", "hidden": "", ...(slot(partScope, "panel").attrs ?? {}) }}>
          <N k="n6" as={S1Dropdown} a={{ "data-s1-component": "dropdown", "data-type": "text", "data-size": "xsm", "role": "listbox", "aria-label": "정렬" }} p={{ variant: "text", size: "xsm", "aria-label": "정렬", options: [{"optionLabel":"최신순","attrs":{"aria-selected":"true","data-value":"latest"}},{"optionLabel":"인기순","attrs":{"aria-selected":"false","data-value":"popular"}},{"optionLabel":"과거순","attrs":{"aria-selected":"false","data-value":"past"}}], omit: ["option-check","divider"], parts: {"optionLabel":"과거순"}, ...attrProps(slot(partScope, "nested:dropdown").attrs) }} />
        </El>
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "filter-chip", "data-variant": variant ?? "line", "data-size": size ?? "md", "data-break": "mobile", "data-title": "on" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "trigger", "aria-haspopup": "listbox", "aria-expanded": "false", ...(slot(partScope, "trigger").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "title", ...(slot(partScope, "title").attrs ?? {}) }}>
            {slot(partScope, "title").content ?? "정렬"}
          </El>
          <El k="n3" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "최신순"}
          </El>
          <El k="n4" a={{ "data-s1-part": "icon", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
            {slot(partScope, "icon").content ?? ""}
          </El>
        </El>
        <El k="n5" a={{ "data-s1-part": "panel", "hidden": "", ...(slot(partScope, "panel").attrs ?? {}) }}>
          <N k="n6" as={S1Dropdown} a={{ "data-s1-component": "dropdown", "data-type": "text", "data-size": "xsm", "role": "listbox", "aria-label": "정렬" }} p={{ variant: "text", size: "xsm", "aria-label": "정렬", options: [{"optionLabel":"최신순","attrs":{"aria-selected":"true","data-value":"latest"}},{"optionLabel":"인기순","attrs":{"aria-selected":"false","data-value":"popular"}},{"optionLabel":"과거순","attrs":{"aria-selected":"false","data-value":"past"}}], omit: ["option-check","divider"], parts: {"optionLabel":"과거순"}, ...attrProps(slot(partScope, "nested:dropdown").attrs) }} />
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] filter-chip: 그릴 템플릿을 고르지 못했습니다.");
}
