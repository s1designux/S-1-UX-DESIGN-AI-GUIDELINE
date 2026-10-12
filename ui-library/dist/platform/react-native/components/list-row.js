/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1ListRow — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/list-row*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/list-row.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/list-row.js";
import S1Checkbox from "./checkbox.js";
import S1Toggle from "./toggle.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["nav","value","read","pick","agree","switch","thumb"];
export const SIZES = [];
export const MODES = [];
export const PARTS = ["lead","thumbnail","text","title","description","trail","value","chevron","check","open"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] list-row: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"initial":false,"rootPress":false},{"initial":false,"rootPress":false},{"initial":false,"rootPress":false},{"initial":false,"rootPress":true},{"initial":false,"rootPress":false},{"initial":true,"rootPress":false},{"initial":false,"rootPress":false}];

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
    return pickGroup(current, [{"index":0,"values":{"data-type":["nav"],"data-state":["default","pressed"]}},{"index":1,"values":{"data-type":["value"],"data-state":["default"]}},{"index":2,"values":{"data-type":["read"],"data-state":["default"]}},{"index":3,"values":{"data-type":["pick"],"data-state":["default"]}},{"index":4,"values":{"data-type":["agree"],"data-state":["default"]}},{"index":5,"values":{"data-type":["switch"],"data-state":["default"]}},{"index":6,"values":{"data-type":["thumb"],"data-state":["default"]}}]);
  }
  return 0;
}

export default function S1ListRow({ variant, parts, checked, defaultChecked, onCheckedChange, onOpen, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, { "data-type": variant, "data-state": rest["data-state"] });
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("row-control", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { checked, defaultChecked, onCheckedChange, onOpen, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "type": "button", "data-s1-component": "list-row", "data-type": "nav", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "text", ...(slot(partScope, "text").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "title", ...(slot(partScope, "title").attrs ?? {}) }}>
            {slot(partScope, "title").content ?? "설정"}
          </El>
          <El k="n3" a={{ "data-s1-part": "description", ...(slot(partScope, "description").attrs ?? {}) }}>
            {slot(partScope, "description").content ?? "환경설정 및 계정 관리"}
          </El>
        </El>
        <El k="n4" a={{ "data-s1-part": "trail", ...(slot(partScope, "trail").attrs ?? {}) }}>
          <El k="n5" a={{ "data-s1-part": "chevron", "aria-hidden": "true", ...(slot(partScope, "chevron").attrs ?? {}) }}>
            {slot(partScope, "chevron").content ?? ""}
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "type": "button", "data-s1-component": "list-row", "data-type": "value", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "text", ...(slot(partScope, "text").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "title", ...(slot(partScope, "title").attrs ?? {}) }}>
            {slot(partScope, "title").content ?? "테마"}
          </El>
          <El k="n3" a={{ "data-s1-part": "description", ...(slot(partScope, "description").attrs ?? {}) }}>
            {slot(partScope, "description").content ?? "화면 표시 방식"}
          </El>
        </El>
        <El k="n4" a={{ "data-s1-part": "trail", ...(slot(partScope, "trail").attrs ?? {}) }}>
          <El k="n5" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "라이트"}
          </El>
          <El k="n6" a={{ "data-s1-part": "chevron", "aria-hidden": "true", ...(slot(partScope, "chevron").attrs ?? {}) }}>
            {slot(partScope, "chevron").content ?? ""}
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 2) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "list-row", "data-type": "read", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "text", ...(slot(partScope, "text").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "title", ...(slot(partScope, "title").attrs ?? {}) }}>
            {slot(partScope, "title").content ?? "버전"}
          </El>
          <El k="n3" a={{ "data-s1-part": "description", ...(slot(partScope, "description").attrs ?? {}) }}>
            {slot(partScope, "description").content ?? "현재 설치된 버전 정보"}
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 3) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "list-row", "data-type": "pick", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "lead", ...(slot(partScope, "lead").attrs ?? {}) }}>
          <N k="n2" as={S1Checkbox} a={{ "data-s1-component": "checkbox" }} p={{ omit: ["label"], ...nestedFrom(slot(partScope, "control").attrs), ...attrProps(slot(partScope, "nested:checkbox").attrs) }} />
        </El>
        <El k="n3" a={{ "data-s1-part": "text", ...(slot(partScope, "text").attrs ?? {}) }}>
          <El k="n4" a={{ "data-s1-part": "title", "id": "lr-example-pick-title", ...(slot(partScope, "title").attrs ?? {}) }}>
            {slot(partScope, "title").content ?? "빠른 배송"}
          </El>
          <El k="n5" a={{ "data-s1-part": "description", ...(slot(partScope, "description").attrs ?? {}) }}>
            {slot(partScope, "description").content ?? "당일 도착 옵션"}
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 4) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "list-row", "data-type": "agree", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "check", ...(slot(partScope, "check").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "lead", ...(slot(partScope, "lead").attrs ?? {}) }}>
            <N k="n3" as={S1Checkbox} a={{ "data-s1-component": "checkbox" }} p={{ omit: ["label"], ...nestedFrom(slot(partScope, "control").attrs), ...attrProps(slot(partScope, "nested:checkbox").attrs) }} />
          </El>
          <El k="n4" a={{ "data-s1-part": "text", ...(slot(partScope, "text").attrs ?? {}) }}>
            <El k="n5" a={{ "data-s1-part": "title", "id": "lr-example-agree-title", ...(slot(partScope, "title").attrs ?? {}) }}>
              {slot(partScope, "title").content ?? "이용약관 동의"}
            </El>
            <El k="n6" a={{ "data-s1-part": "description", ...(slot(partScope, "description").attrs ?? {}) }}>
              {slot(partScope, "description").content ?? "필수 동의 항목입니다"}
            </El>
          </El>
        </El>
        <El k="n7" a={{ "data-s1-part": "trail", ...(slot(partScope, "trail").attrs ?? {}) }}>
          <El k="n8" a={{ "type": "button", "data-s1-part": "open", "aria-label": "이용약관 보기", ...(slot(partScope, "open").attrs ?? {}) }}>
            <El k="n9" a={{ "data-s1-part": "chevron", "aria-hidden": "true", ...(slot(partScope, "chevron").attrs ?? {}) }}>
              {slot(partScope, "chevron").content ?? ""}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 5) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "list-row", "data-type": "switch", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "text", ...(slot(partScope, "text").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "title", "id": "lr-example-switch-title", ...(slot(partScope, "title").attrs ?? {}) }}>
            {slot(partScope, "title").content ?? "알림"}
          </El>
          <El k="n3" a={{ "data-s1-part": "description", ...(slot(partScope, "description").attrs ?? {}) }}>
            {slot(partScope, "description").content ?? "새 소식 알림 받기"}
          </El>
        </El>
        <El k="n4" a={{ "data-s1-part": "trail", ...(slot(partScope, "trail").attrs ?? {}) }}>
          <N k="n5" as={S1Toggle} a={{ "type": "button", "data-s1-component": "toggle", "role": "switch", "aria-checked": "true", "aria-labelledby": "lr-example-switch-title" }} p={{ "aria-checked": "true", "aria-labelledby": "lr-example-switch-title", ...attrProps(slot(partScope, "nested:toggle").attrs) }} />
        </El>
      </Root>
    );
  }
  if (tpl === 6) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "list-row", "data-type": "thumb", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "thumbnail", "aria-hidden": "true", ...(slot(partScope, "thumbnail").attrs ?? {}) }}>
          {slot(partScope, "thumbnail").content ?? ""}
        </El>
        <El k="n2" a={{ "data-s1-part": "text", ...(slot(partScope, "text").attrs ?? {}) }}>
          <El k="n3" a={{ "data-s1-part": "title", ...(slot(partScope, "title").attrs ?? {}) }}>
            {slot(partScope, "title").content ?? "여행 사진"}
          </El>
          <El k="n4" a={{ "data-s1-part": "description", ...(slot(partScope, "description").attrs ?? {}) }}>
            {slot(partScope, "description").content ?? "2026년 9월 14일"}
          </El>
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] list-row: 그릴 템플릿을 고르지 못했습니다.");
}
