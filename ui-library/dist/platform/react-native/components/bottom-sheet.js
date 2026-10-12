/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1BottomSheet — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/bottom-sheet*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/bottom-sheet.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/bottom-sheet.js";
import S1BottomSheetOption from "./bottom-sheet-option.js";
import S1Button from "./button.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["none","single","dual"];
export const SIZES = [];
export const MODES = [];
export const PARTS = ["sheet-backdrop","sheet-panel","sheet-content","sheet-header","sheet-title","sheet-close","sheet-body","sheet-footer"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] bottom-sheet: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"closeParts":["sheet-close","sheet-backdrop"]}];

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

export default function S1BottomSheet({ variant, parts, onOpen, onClose, onConfirm, onCancel, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("overlay", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { onClose, onConfirm, onCancel, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "bottom-sheet", "data-s1-part": "sheet", "data-break": "mobile", "data-footer": variant ?? "single", ...(slot(partScope, "sheet").attrs ?? {}) }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "sheet-backdrop", ...(slot(partScope, "sheetBackdrop").attrs ?? {}) }}>
          {slot(partScope, "sheetBackdrop").content ?? ""}
        </El>
        <El k="n2" a={{ "data-s1-part": "sheet-panel", "role": "dialog", "aria-modal": "true", ...(slot(partScope, "sheetPanel").attrs ?? {}) }}>
          <El k="n3" a={{ "data-s1-part": "sheet-content", ...(slot(partScope, "sheetContent").attrs ?? {}) }}>
            <El k="n4" a={{ "data-s1-part": "sheet-header", ...(slot(partScope, "sheetHeader").attrs ?? {}) }}>
              <El k="n5" a={{ "data-s1-part": "sheet-title", "id": "bottom-sheet-example-title", ...(slot(partScope, "sheetTitle").attrs ?? {}) }}>
                {slot(partScope, "sheetTitle").content ?? "항목 선택"}
              </El>
              <El k="n6" a={{ "type": "button", "data-s1-part": "sheet-close", "aria-label": "닫기", ...(slot(partScope, "sheetClose").attrs ?? {}) }}>
                {slot(partScope, "sheetClose").content ?? ""}
              </El>
            </El>
            <El k="n7" a={{ "data-s1-part": "sheet-body", ...(slot(partScope, "sheetBody").attrs ?? {}) }}>
              <N k="n8" as={S1BottomSheetOption} a={{ "data-s1-component": "bottom-sheet-option", "data-type": "text", "data-state": "default" }} p={{ variant: "text", "data-state": "default", omit: ["check","list-left","avatar","list-text","list-title","list-sub","chevron","lock"], parts: {"label":"항목 1"}, ...attrProps(slot(partScope, "nested:bottomSheetOption").attrs) }} />
              <N k="n9" as={S1BottomSheetOption} a={{ "data-s1-component": "bottom-sheet-option", "data-type": "text", "data-state": "selected" }} p={{ variant: "text", "data-state": "selected", omit: ["list-left","avatar","list-text","list-title","list-sub","chevron","lock"], parts: {"label":"항목 2"}, ...attrProps(slot(partScope, "nested:bottomSheetOption").attrs) }} />
              <N k="n10" as={S1BottomSheetOption} a={{ "data-s1-component": "bottom-sheet-option", "data-type": "text", "data-state": "default" }} p={{ variant: "text", "data-state": "default", omit: ["check","list-left","avatar","list-text","list-title","list-sub","chevron","lock"], parts: {"label":"항목 3"}, ...attrProps(slot(partScope, "nested:bottomSheetOption").attrs) }} />
              <N k="n11" as={S1BottomSheetOption} a={{ "data-s1-component": "bottom-sheet-option", "data-type": "text", "data-state": "default" }} p={{ variant: "text", "data-state": "default", omit: ["check","list-left","avatar","list-text","list-title","list-sub","chevron","lock"], parts: {"label":"항목 4"}, ...attrProps(slot(partScope, "nested:bottomSheetOption").attrs) }} />
            </El>
          </El>
          <El k="n12" a={{ "data-s1-part": "sheet-footer", ...(slot(partScope, "sheetFooter").attrs ?? {}) }}>
            <N k="n13" as={S1Button} a={{ "type": "button", "data-s1-component": "button", "data-variant": "primary", "data-size": "lg" }} p={{ variant: "primary", size: "lg", parts: {"label":"적용"}, ...attrProps(slot(partScope, "nested:button").attrs) }} />
          </El>
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] bottom-sheet: 그릴 템플릿을 고르지 못했습니다.");
}
