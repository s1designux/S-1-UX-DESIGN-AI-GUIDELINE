/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Tab — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/tab*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/tab.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot, attrsOf, keyOf } from "../runtime.js";
import SPEC from "../specs/tab.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["line"];
export const SIZES = ["md","sm","xsm"];
export const MODES = [];
export const PARTS = ["tab","tabpanel (optional)"];

/* 예제에 있던 내용 — prop 을 주지 않으면 이게 그려진다. */
const DEFAULT_TABS_0 = (uid) => ["탭 메뉴 1", { "content": "탭 메뉴 2", "attrs": { "aria-selected": "false", "aria-controls": "tab-panel-two", "data-value": "two" } }, { "content": "탭 메뉴 3", "attrs": { "aria-selected": "false", "aria-controls": "tab-panel-three", "data-value": "three" } }];
const DEFAULT_TABS_1 = (uid) => ["탭 메뉴 1", { "content": "탭 메뉴 2", "attrs": { "aria-selected": "false", "data-value": "two" } }, { "content": "탭 메뉴 3", "attrs": { "aria-selected": "false", "data-value": "three" } }];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] tab: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"itemPart":"tab","attr":"aria-selected","panelRole":"tabpanel","initial":0},{"itemPart":"tab","attr":"aria-selected","panelRole":"tabpanel","initial":0}];

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

export default function S1Tab({ size, breakName = DEFAULT_BREAK, parts, tabs, children, value, defaultValue, onChange, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);
  const tpl = pickTemplate(breakName, undefined, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("select-one", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { value, defaultValue, onChange, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "tab", "data-size": size ?? "md", "data-break": "pc", "role": "tablist", "aria-label": "콘텐츠 보기 선택" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        {(tabs ?? DEFAULT_TABS_0(uid)).map((item1, index1, all1) => {
          const scope1 = scopeOf(item1);
          return (
            <El k="n1" a={{ "type": "button", "data-s1-part": "tab", "role": "tab", "aria-selected": "true", "aria-controls": "tab-panel-one", "data-value": "one", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
              {slot(scope1, "tab", true).content ?? "탭 메뉴 1"}
            </El>
          );
        })}
        {children === undefined ? (
          <>
            <El k="n4" a={{ "id": "tab-panel-one", "role": "tabpanel" }}>
              {"첫 번째 내용"}
            </El>
            <El k="n5" a={{ "id": "tab-panel-two", "role": "tabpanel", "hidden": "" }}>
              {"두 번째 내용"}
            </El>
            <El k="n6" a={{ "id": "tab-panel-three", "role": "tabpanel", "hidden": "" }}>
              {"세 번째 내용"}
            </El>
          </>
        ) : children}
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "tab", "data-size": size ?? "sm", "data-break": "mobile", "role": "tablist", "aria-label": "콘텐츠 보기 선택" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        {(tabs ?? DEFAULT_TABS_1(uid)).map((item1, index1, all1) => {
          const scope1 = scopeOf(item1);
          return (
            <El k="n1" a={{ "type": "button", "data-s1-part": "tab", "role": "tab", "aria-selected": "true", "data-value": "one", ...attrsOf(scope1) }} at={[index1, all1.length]} props={propsOf(scope1)} key={keyOf(item1, index1)}>
              {slot(scope1, "tab", true).content ?? "탭 메뉴 1"}
            </El>
          );
        })}
      </Root>
    );
  }
  throw new Error("[s1-ui] tab: 그릴 템플릿을 고르지 못했습니다.");
}
