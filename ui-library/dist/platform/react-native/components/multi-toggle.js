/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1MultiToggle — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/multi-toggle*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/multi-toggle.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot, attrsOf, keyOf } from "../runtime.js";
import SPEC from "../specs/multi-toggle.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["md","sm","xsm"];
export const MODES = [];
export const PARTS = ["cell"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_CELLS_0 = (uid) => ["왼쪽", { "content": "가운데", "attrs": { "aria-checked": "false", "data-value": "center" } }, { "content": "오른쪽", "attrs": { "aria-checked": "false", "data-value": "right" } }];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] multi-toggle: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"itemPart":"cell","attr":"aria-checked","initial":0}];

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

export default function S1MultiToggle({ size, parts, cells, onChange, value, defaultValue, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("size", size, SIZES);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("select-one", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { value, defaultValue, onChange, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "multi-toggle", "data-size": size ?? "md", "role": "radiogroup", "aria-label": "정렬 기준" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        {(cells ?? DEFAULT_CELLS_0(uid)).map((item1, index1, all1) => {
          const scope1 = scopeOf(item1);
          return (
            <El k="n1" a={{ "type": "button", "data-s1-part": "cell", "role": "radio", "aria-checked": "true", "data-value": "left", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
              {slot(scope1, "cell", true).content ?? "왼쪽"}
            </El>
          );
        })}
      </Root>
    );
  }
  throw new Error("[s1-ui] multi-toggle: 그릴 템플릿을 고르지 못했습니다.");
}
