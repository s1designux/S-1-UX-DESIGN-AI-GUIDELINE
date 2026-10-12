/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Textarea — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/textarea*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/textarea.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/textarea.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = [];
export const MODES = [];
export const PARTS = ["control"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] textarea: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
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
    return 0;
  }
  if (breakName === "mobile") {
    return 1;
  }
  return 0;
}

export default function S1Textarea({ breakName = DEFAULT_BREAK, parts, value, defaultValue, onChangeText, onFocus, onBlur, placeholder, disabled, readOnly, invalid, maxLength, inputRef, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("breakName", breakName, BREAKS);
  const tpl = pickTemplate(breakName, undefined, undefined);
  const controller = undefined;
  /* 입력 계열 — value 를 주면 제어, defaultValue 면 비제어. */
  const ctlState = {
    ...(disabled ? { disabled: "" } : {}),
    ...(readOnly ? { readonly: "" } : {}),
    ...(invalid ? { "aria-invalid": "true" } : {})
  };
  const ctl = { value, defaultValue, onChangeText, onFocus, onBlur, placeholder, readOnly, maxLength, inputRef, ...(controller?.ctl ?? {}) };
  const lifted = initialLifted ?? { n1: { k: "n1", a: ctlState, p: { disabled: Boolean(disabled), focus: false, "focus-visible": false } } };

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "textarea", "data-break": "pc" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "id": "profile-memo", "data-s1-part": "control", "aria-label": "설명", "placeholder": "여러 줄 내용을 입력하세요", ...ctlState, ...(slot(partScope, "control").attrs ?? {}) }} ctl={ctl}>
          {slot(partScope, "control").content ?? ""}
        </El>
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "textarea", "data-break": "mobile" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "id": "profile-memo-mobile", "data-s1-part": "control", "aria-label": "설명", "placeholder": "여러 줄 내용을 입력하세요", ...ctlState, ...(slot(partScope, "control").attrs ?? {}) }} ctl={ctl}>
          {slot(partScope, "control").content ?? ""}
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] textarea: 그릴 템플릿을 고르지 못했습니다.");
}
