/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1BottomSheetOption — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/bottom-sheet-option*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/bottom-sheet-option.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/bottom-sheet-option.js";
import S1Checkbox from "./checkbox.js";
import S1Radio from "./radio.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["text","checkbox","radio","list"];
export const SIZES = [];
export const MODES = [];
export const PARTS = ["label","check","list-left","avatar","list-text","list-title","list-sub","chevron","lock"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] bottom-sheet-option: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
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
    return pickGroup(current, [{"index":0,"values":{"data-type":["text"],"data-state":["default","disabled"]}},{"index":1,"values":{"data-type":["text"],"data-state":["selected"]}},{"index":2,"values":{"data-type":["checkbox"],"data-state":["default","selected"]}},{"index":3,"values":{"data-type":["radio"],"data-state":["default","selected"]}},{"index":4,"values":{"data-type":["list"],"data-state":["default"]}},{"index":5,"values":{"data-type":["list"],"data-state":["disabled"]}}]);
  }
  return 0;
}

export default function S1BottomSheetOption({ variant, parts, children, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, { "data-type": variant, "data-state": rest["data-state"] });
  const controller = undefined;
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "bottom-sheet-option", "data-type": "text", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "label", ...(slot(partScope, "label").attrs ?? {}) }}>
          {slot(partScope, "label").content ?? "항목 1"}
        </El>
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "bottom-sheet-option", "data-type": "text", "data-state": "selected" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "label", ...(slot(partScope, "label").attrs ?? {}) }}>
          {slot(partScope, "label").content ?? "항목 2"}
        </El>
        <El k="n2" a={{ "data-s1-part": "check", "aria-hidden": "true", ...(slot(partScope, "check").attrs ?? {}) }}>
          {slot(partScope, "check").content ?? ""}
        </El>
      </Root>
    );
  }
  if (tpl === 2) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "bottom-sheet-option", "data-type": "checkbox", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        {children === undefined ? (
          <>
            <N k="n1" as={S1Checkbox} a={{ "data-s1-component": "checkbox" }} p={{ omit: ["label"], ...nestedFrom(slot(partScope, "control").attrs), ...attrProps(slot(partScope, "nested:checkbox").attrs) }} />
          </>
        ) : children}
        <El k="n2" a={{ "data-s1-part": "label", "id": "bso-example-checkbox-default-label", ...(slot(partScope, "label").attrs ?? {}) }}>
          {slot(partScope, "label").content ?? "항목 4"}
        </El>
      </Root>
    );
  }
  if (tpl === 3) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "bottom-sheet-option", "data-type": "radio", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        {children === undefined ? (
          <>
            <N k="n1" as={S1Radio} a={{ "data-s1-component": "radio" }} p={{ omit: ["label"], ...nestedFrom(slot(partScope, "control").attrs), ...attrProps(slot(partScope, "nested:radio").attrs) }} />
          </>
        ) : children}
        <El k="n2" a={{ "data-s1-part": "label", "id": "bso-example-radio-default-label", ...(slot(partScope, "label").attrs ?? {}) }}>
          {slot(partScope, "label").content ?? "항목 6"}
        </El>
      </Root>
    );
  }
  if (tpl === 4) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "bottom-sheet-option", "data-type": "list", "data-state": "default" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "list-left", ...(slot(partScope, "listLeft").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "avatar", "aria-hidden": "true", ...(slot(partScope, "avatar").attrs ?? {}) }}>
            {slot(partScope, "avatar").content ?? ""}
          </El>
          <El k="n3" a={{ "data-s1-part": "list-text", ...(slot(partScope, "listText").attrs ?? {}) }}>
            <El k="n4" a={{ "data-s1-part": "list-title", ...(slot(partScope, "listTitle").attrs ?? {}) }}>
              {slot(partScope, "listTitle").content ?? "제목"}
            </El>
            <El k="n5" a={{ "data-s1-part": "list-sub", ...(slot(partScope, "listSub").attrs ?? {}) }}>
              {slot(partScope, "listSub").content ?? "서브 텍스트"}
            </El>
          </El>
        </El>
        <El k="n6" a={{ "data-s1-part": "chevron", "aria-hidden": "true", ...(slot(partScope, "chevron").attrs ?? {}) }}>
          {slot(partScope, "chevron").content ?? ""}
        </El>
      </Root>
    );
  }
  if (tpl === 5) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "bottom-sheet-option", "data-type": "list", "data-state": "disabled" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "list-left", ...(slot(partScope, "listLeft").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "avatar", "aria-hidden": "true", ...(slot(partScope, "avatar").attrs ?? {}) }}>
            {slot(partScope, "avatar").content ?? ""}
          </El>
          <El k="n3" a={{ "data-s1-part": "list-text", ...(slot(partScope, "listText").attrs ?? {}) }}>
            <El k="n4" a={{ "data-s1-part": "list-title", ...(slot(partScope, "listTitle").attrs ?? {}) }}>
              {slot(partScope, "listTitle").content ?? "제목"}
            </El>
            <El k="n5" a={{ "data-s1-part": "list-sub", ...(slot(partScope, "listSub").attrs ?? {}) }}>
              {slot(partScope, "listSub").content ?? "서브 텍스트"}
            </El>
          </El>
        </El>
        <El k="n6" a={{ "data-s1-part": "lock", "aria-hidden": "true", ...(slot(partScope, "lock").attrs ?? {}) }}>
          {slot(partScope, "lock").content ?? ""}
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] bottom-sheet-option: 그릴 템플릿을 고르지 못했습니다.");
}
