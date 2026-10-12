/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Select — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/select*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/select.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/select.js";
import S1Dropdown from "./dropdown.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["xxsm","xsm","md"];
export const MODES = [];
export const PARTS = ["trigger","value","icon","panel"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] select: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"filledAttr":"data-filled","initialValue":null},{"filledAttr":"data-filled","initialValue":null}];

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

export default function S1Select({ size, breakName = DEFAULT_BREAK, parts, onChange, onOpen, onClose, open, defaultOpen, value, defaultValue, options, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);
  const tpl = pickTemplate(breakName, undefined, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("popup", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { open, defaultOpen, value, defaultValue, options, onChange, onOpen, onClose, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "select", "data-size": size ?? "md", "data-break": "pc" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "trigger", "aria-haspopup": "listbox", "aria-expanded": "false", ...(slot(partScope, "trigger").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "선택"}
          </El>
          <El k="n3" a={{ "data-s1-part": "icon", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
            {slot(partScope, "icon").content ?? ""}
          </El>
        </El>
        <El k="n4" a={{ "data-s1-part": "panel", "hidden": "", ...(slot(partScope, "panel").attrs ?? {}) }}>
          <N k="n5" as={S1Dropdown} a={{ "data-s1-component": "dropdown", "data-type": "text", "data-size": "md", "role": "listbox", "aria-label": "선택" }} p={{ variant: "text", size: "md", "aria-label": "선택", options: [{"optionLabel":"서울","attrs":{"aria-selected":"false","data-value":"seoul"}},{"optionLabel":"부산","attrs":{"aria-selected":"false","data-value":"busan"}},{"optionLabel":"제주","attrs":{"aria-selected":"false","data-value":"jeju"}}], omit: ["option-check","divider"], parts: {"optionLabel":"제주"}, ...attrProps(slot(partScope, "nested:dropdown").attrs) }} />
        </El>
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "select", "data-size": size ?? "md", "data-break": "mobile" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "trigger", "aria-haspopup": "listbox", "aria-expanded": "false", ...(slot(partScope, "trigger").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "선택"}
          </El>
          <El k="n3" a={{ "data-s1-part": "icon", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
            {slot(partScope, "icon").content ?? ""}
          </El>
        </El>
        <El k="n4" a={{ "data-s1-part": "panel", "hidden": "", ...(slot(partScope, "panel").attrs ?? {}) }}>
          <N k="n5" as={S1Dropdown} a={{ "data-s1-component": "dropdown", "data-type": "text", "data-size": "md", "role": "listbox", "aria-label": "선택" }} p={{ variant: "text", size: "md", "aria-label": "선택", options: [{"optionLabel":"서울","attrs":{"aria-selected":"false","data-value":"seoul"}},{"optionLabel":"부산","attrs":{"aria-selected":"false","data-value":"busan"}},{"optionLabel":"제주","attrs":{"aria-selected":"false","data-value":"jeju"}}], omit: ["option-check","divider"], parts: {"optionLabel":"제주"}, ...attrProps(slot(partScope, "nested:dropdown").attrs) }} />
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] select: 그릴 템플릿을 고르지 못했습니다.");
}
