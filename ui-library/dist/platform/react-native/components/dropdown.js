/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Dropdown — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/dropdown*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/dropdown.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot, attrsOf, keyOf } from "../runtime.js";
import SPEC from "../specs/dropdown.js";
import S1Checkbox from "./checkbox.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["text","checkbox"];
export const SIZES = ["xxsm","xsm","md"];
export const MODES = [];
export const PARTS = ["option","option-label","option-check","divider"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_OPTIONS_0 = (uid) => ["최신순", { "optionLabel": "인기순", "attrs": { "aria-selected": "false", "tabIndex": "-1", "data-value": "popular" } }, { "optionLabel": "과거순", "attrs": { "aria-selected": "false", "tabIndex": "-1", "data-value": "past" } }];
const DEFAULT_OPTIONS_1 = (uid) => ["서울", { "control": { "attrs": { "checked": undefined } }, "optionLabel": "부산", "attrs": { "aria-checked": "false", "data-value": "busan" } }];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] dropdown: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"type":"text","initial":"latest","values":["latest","popular","past"]},{"type":"checkbox","initial":["seoul"],"values":["seoul","busan"]}];

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
    return pickGroup(current, [{"index":0,"values":{"data-type":["text"]}},{"index":1,"values":{"data-type":["checkbox"]}}]);
  }
  return 0;
}

export default function S1Dropdown({ variant, size, parts, options, onChange, value, defaultValue, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, { "data-type": variant });
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("dropdown", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { value, defaultValue, onChange, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "dropdown", "data-type": "text", "data-size": size ?? "md", "role": "listbox", "aria-label": "정렬" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        {(options ?? DEFAULT_OPTIONS_0(uid)).map((item1, index1, all1) => {
          const scope1 = scopeOf(item1);
          return (
            <El k="n1" a={{ "data-s1-part": "option", "role": "option", "aria-selected": "true", "data-value": "latest", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
              <El k="n2" a={{ "data-s1-part": "option-label", ...(slot(scope1, "optionLabel").attrs ?? {}) }}>
                {slot(scope1, "optionLabel", true).content ?? "최신순"}
              </El>
            </El>
          );
        })}
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "dropdown", "data-type": "checkbox", "data-size": size ?? "md", "aria-label": "지역" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "option", "role": "checkbox", "aria-checked": "false", "data-value": "all", "data-select-all": "true", ...(slot(partScope, "option").attrs ?? {}) }}>
          <N k="n2" as={S1Checkbox} a={{ "data-s1-component": "checkbox", "aria-hidden": "true" }} p={{ omit: ["label"], ...nestedFrom(slot(partScope, "control").attrs), ...attrProps(slot(partScope, "nested:checkbox").attrs) }} />
          <El k="n3" a={{ "data-s1-part": "option-label", ...(slot(partScope, "optionLabel").attrs ?? {}) }}>
            {slot(partScope, "optionLabel").content ?? "전체"}
          </El>
        </El>
        <El k="n4" a={{ "data-s1-part": "divider", ...(slot(partScope, "divider").attrs ?? {}) }}>
          {slot(partScope, "divider").content ?? ""}
        </El>
        {(options ?? DEFAULT_OPTIONS_1(uid)).map((item1, index1, all1) => {
          const scope1 = scopeOf(item1);
          return (
            <El k="n5" a={{ "data-s1-part": "option", "role": "checkbox", "aria-checked": "true", "data-value": "seoul", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
              <N k="n6" as={S1Checkbox} a={{ "data-s1-component": "checkbox", "aria-hidden": "true" }} p={{ checked: true, omit: ["label"], ...nestedFrom(slot(scope1, "control").attrs), ...attrProps(slot(scope1, "nested:checkbox").attrs) }} />
              <El k="n7" a={{ "data-s1-part": "option-label", ...(slot(scope1, "optionLabel").attrs ?? {}) }}>
                {slot(scope1, "optionLabel", true).content ?? "서울"}
              </El>
            </El>
          );
        })}
      </Root>
    );
  }
  throw new Error("[s1-ui] dropdown: 그릴 템플릿을 고르지 못했습니다.");
}
