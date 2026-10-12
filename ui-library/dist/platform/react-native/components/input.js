/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Input — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/input*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/input.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/input.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["xxsm","xsm","md"];
export const MODES = ["password","search"];
export const PARTS = ["label","field","control","action","action-icon","message"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] input: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"mode":"base"},{"mode":"base"},{"mode":"password"},{"mode":"password"},{"mode":"search"},{"mode":"search"}];

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
  if (breakName === "pc" && (mode === undefined || mode === "base")) {
    return 0;
  }
  if (breakName === "pc" && mode === "password") {
    return 2;
  }
  if (breakName === "pc" && mode === "search") {
    return 4;
  }
  if (breakName === "mobile" && (mode === undefined || mode === "base")) {
    return 1;
  }
  if (breakName === "mobile" && mode === "password") {
    return 3;
  }
  if (breakName === "mobile" && mode === "search") {
    return 5;
  }
  return 0;
}

export default function S1Input({ size, breakName = DEFAULT_BREAK, mode, parts, value, defaultValue, onChangeText, onFocus, onBlur, placeholder, disabled, readOnly, invalid, maxLength, inputRef, onClear, onSearch, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);
  assertAllowed("mode", mode, MODES);
  const tpl = pickTemplate(breakName, mode, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("input", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { value, defaultValue, onChangeText, onFocus, onBlur, readOnly, inputRef, onClear, onSearch, disabled: disabled, rest });
  /* 입력 계열 — value 를 주면 제어, defaultValue 면 비제어. */
  const ctlState = {
    ...(disabled ? { disabled: "" } : {}),
    ...(readOnly ? { readonly: "" } : {}),
    ...(invalid ? { "aria-invalid": "true" } : {})
  };
  const ctl = { value, defaultValue, onChangeText, onFocus, onBlur, placeholder, readOnly, maxLength, inputRef, ...(controller?.ctl ?? {}) };
  const lifted = initialLifted ?? { n2: { k: "n2", a: ctlState, p: { disabled: Boolean(disabled), focus: false, "focus-visible": false } } };

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "input", "data-size": size ?? "md", "data-break": "pc" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "field", ...(slot(partScope, "field").attrs ?? {}) }}>
          <El k="n2" a={{ "id": "profile-name", "data-s1-part": "control", "aria-label": "이름", "placeholder": "입력해 주세요", ...ctlState, ...(slot(partScope, "control").attrs ?? {}) }} ctl={ctl} />
          <El k="n3" a={{ "type": "button", "data-s1-part": "action", "data-action": "clear", "aria-label": "입력 내용 지우기", "hidden": "", ...(slot(partScope, "action").attrs ?? {}) }}>
            <El k="n4" a={{ "data-s1-part": "action-icon", "aria-hidden": "true", ...(slot(partScope, "actionIcon").attrs ?? {}) }}>
              {slot(partScope, "actionIcon").content ?? ""}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "input", "data-size": size ?? "md", "data-break": "mobile" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "field", ...(slot(partScope, "field").attrs ?? {}) }}>
          <El k="n2" a={{ "id": "profile-name", "data-s1-part": "control", "aria-label": "이름", "placeholder": "입력해 주세요", ...ctlState, ...(slot(partScope, "control").attrs ?? {}) }} ctl={ctl} />
          <El k="n3" a={{ "type": "button", "data-s1-part": "action", "data-action": "clear", "aria-label": "입력 내용 지우기", "hidden": "", ...(slot(partScope, "action").attrs ?? {}) }}>
            <El k="n4" a={{ "data-s1-part": "action-icon", "aria-hidden": "true", ...(slot(partScope, "actionIcon").attrs ?? {}) }}>
              {slot(partScope, "actionIcon").content ?? ""}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 2) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "input", "data-size": size ?? "md", "data-break": "pc" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "field", ...(slot(partScope, "field").attrs ?? {}) }}>
          <El k="n2" a={{ "id": "profile-password", "data-s1-part": "control", "type": "password", "aria-label": "비밀번호", "placeholder": "비밀번호를 입력하세요", ...ctlState, ...(slot(partScope, "control").attrs ?? {}) }} ctl={ctl} />
          <El k="n3" a={{ "type": "button", "data-s1-part": "action", "data-action": "password", "aria-pressed": "false", "aria-label": "비밀번호 보기", ...(slot(partScope, "action").attrs ?? {}) }}>
            <El k="n4" a={{ "data-s1-part": "action-icon", "aria-hidden": "true", ...(slot(partScope, "actionIcon").attrs ?? {}) }}>
              {slot(partScope, "actionIcon").content ?? ""}
            </El>
          </El>
          <El k="n5" a={{ "type": "button", "data-s1-part": "action", "data-action": "clear", "aria-label": "비밀번호 지우기", "hidden": "", ...(slot(partScope, "action").attrs ?? {}) }}>
            <El k="n6" a={{ "data-s1-part": "action-icon", "aria-hidden": "true", ...(slot(partScope, "actionIcon").attrs ?? {}) }}>
              {slot(partScope, "actionIcon").content ?? ""}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 3) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "input", "data-size": size ?? "md", "data-break": "mobile" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "field", ...(slot(partScope, "field").attrs ?? {}) }}>
          <El k="n2" a={{ "id": "profile-password-mobile", "data-s1-part": "control", "type": "password", "aria-label": "비밀번호", "placeholder": "비밀번호를 입력하세요", ...ctlState, ...(slot(partScope, "control").attrs ?? {}) }} ctl={ctl} />
          <El k="n3" a={{ "type": "button", "data-s1-part": "action", "data-action": "password", "aria-pressed": "false", "aria-label": "비밀번호 보기", ...(slot(partScope, "action").attrs ?? {}) }}>
            <El k="n4" a={{ "data-s1-part": "action-icon", "aria-hidden": "true", ...(slot(partScope, "actionIcon").attrs ?? {}) }}>
              {slot(partScope, "actionIcon").content ?? ""}
            </El>
          </El>
          <El k="n5" a={{ "type": "button", "data-s1-part": "action", "data-action": "clear", "aria-label": "비밀번호 지우기", "hidden": "", ...(slot(partScope, "action").attrs ?? {}) }}>
            <El k="n6" a={{ "data-s1-part": "action-icon", "aria-hidden": "true", ...(slot(partScope, "actionIcon").attrs ?? {}) }}>
              {slot(partScope, "actionIcon").content ?? ""}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 4) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "input", "data-size": size ?? "md", "data-break": "pc", "data-mode": "search" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "field", ...(slot(partScope, "field").attrs ?? {}) }}>
          <El k="n2" a={{ "id": "profile-search", "data-s1-part": "control", "aria-label": "검색", "placeholder": "검색어를 입력하세요", ...ctlState, ...(slot(partScope, "control").attrs ?? {}) }} ctl={ctl} />
          <El k="n3" a={{ "type": "button", "data-s1-part": "action", "data-action": "clear", "aria-label": "검색어 지우기", "hidden": "", ...(slot(partScope, "action").attrs ?? {}) }}>
            <El k="n4" a={{ "data-s1-part": "action-icon", "aria-hidden": "true", ...(slot(partScope, "actionIcon").attrs ?? {}) }}>
              {slot(partScope, "actionIcon").content ?? ""}
            </El>
          </El>
          <El k="n5" a={{ "type": "button", "data-s1-part": "action", "data-action": "search", "aria-label": "검색", ...(slot(partScope, "action").attrs ?? {}) }}>
            <El k="n6" a={{ "data-s1-part": "action-icon", "aria-hidden": "true", ...(slot(partScope, "actionIcon").attrs ?? {}) }}>
              {slot(partScope, "actionIcon").content ?? ""}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 5) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "input", "data-size": size ?? "md", "data-break": "mobile", "data-mode": "search" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "field", ...(slot(partScope, "field").attrs ?? {}) }}>
          <El k="n2" a={{ "id": "profile-search-mobile", "data-s1-part": "control", "aria-label": "검색", "placeholder": "검색어를 입력하세요", ...ctlState, ...(slot(partScope, "control").attrs ?? {}) }} ctl={ctl} />
          <El k="n3" a={{ "type": "button", "data-s1-part": "action", "data-action": "clear", "aria-label": "검색어 지우기", "hidden": "", ...(slot(partScope, "action").attrs ?? {}) }}>
            <El k="n4" a={{ "data-s1-part": "action-icon", "aria-hidden": "true", ...(slot(partScope, "actionIcon").attrs ?? {}) }}>
              {slot(partScope, "actionIcon").content ?? ""}
            </El>
          </El>
          <El k="n5" a={{ "type": "button", "data-s1-part": "action", "data-action": "search", "aria-label": "검색", ...(slot(partScope, "action").attrs ?? {}) }}>
            <El k="n6" a={{ "data-s1-part": "action-icon", "aria-hidden": "true", ...(slot(partScope, "actionIcon").attrs ?? {}) }}>
              {slot(partScope, "actionIcon").content ?? ""}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] input: 그릴 템플릿을 고르지 못했습니다.");
}
