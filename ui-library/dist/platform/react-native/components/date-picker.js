/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1DatePicker — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/date-picker*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/date-picker.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/date-picker.js";
import S1Button from "./button.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["single","range"];
export const SIZES = ["xxsm","xsm","md"];
export const MODES = [];
export const PARTS = ["trigger","value","icon","panel","calendar","header","prev","next","chevron-icon","header-label","year-label","month-label","weekdays","weekday","view","grid","week","cell","cell-inner","cell-num","tile","sheet","sheet-backdrop","sheet-panel","sheet-header","sheet-title","sheet-close","calendar-wrap","sheet-footer","apply"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] date-picker: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"mode":"single","mobile":false},{"mode":"single","mobile":true}];

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

export default function S1DatePicker({ variant, size, breakName = DEFAULT_BREAK, parts, onOpen, onClose, onChange, open, value, defaultValue, disabledDates, placeholder, today, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);
  const tpl = pickTemplate(breakName, undefined, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("date-picker", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { variant, open, value, defaultValue, disabledDates, placeholder, today, onChange, onOpen, onClose, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "date-picker", "data-size": size ?? "md", "data-break": "pc", "data-mode": variant ?? "single" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "trigger", "aria-haspopup": "dialog", "aria-expanded": "false", ...(slot(partScope, "trigger").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "날짜 선택"}
          </El>
          <El k="n3" a={{ "data-s1-part": "icon", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
            {slot(partScope, "icon").content ?? ""}
          </El>
        </El>
        <El k="n4" a={{ "data-s1-part": "panel", "role": "dialog", "hidden": "", ...(slot(partScope, "panel").attrs ?? {}) }}>
          <El k="n5" a={{ "data-s1-part": "calendar", ...(slot(partScope, "calendar").attrs ?? {}) }}>
            <El k="n6" a={{ "data-s1-part": "header", ...(slot(partScope, "header").attrs ?? {}) }}>
              <El k="n7" a={{ "type": "button", "data-s1-part": "prev", "aria-label": "이전", ...(slot(partScope, "prev").attrs ?? {}) }}>
                <El k="n8" a={{ "data-s1-part": "chevron-icon", "aria-hidden": "true", ...(slot(partScope, "chevronIcon").attrs ?? {}) }}>
                  {slot(partScope, "chevronIcon").content ?? ""}
                </El>
              </El>
              <El k="n9" a={{ "data-s1-part": "header-label", ...(slot(partScope, "headerLabel").attrs ?? {}) }}>
                <El k="n10" a={{ "type": "button", "data-s1-part": "year-label", ...(slot(partScope, "yearLabel").attrs ?? {}) }}>
                  {slot(partScope, "yearLabel").content ?? "2026년"}
                </El>
                <El k="n11" a={{ "type": "button", "data-s1-part": "month-label", ...(slot(partScope, "monthLabel").attrs ?? {}) }}>
                  {slot(partScope, "monthLabel").content ?? "1월"}
                </El>
              </El>
              <El k="n12" a={{ "type": "button", "data-s1-part": "next", "aria-label": "다음", ...(slot(partScope, "next").attrs ?? {}) }}>
                <El k="n13" a={{ "data-s1-part": "chevron-icon", "aria-hidden": "true", ...(slot(partScope, "chevronIcon").attrs ?? {}) }}>
                  {slot(partScope, "chevronIcon").content ?? ""}
                </El>
              </El>
            </El>
            <El k="n14" a={{ "data-s1-part": "view", ...(slot(partScope, "view").attrs ?? {}) }}>
              <El k="n15" a={{ "data-s1-part": "weekdays", ...(slot(partScope, "weekdays").attrs ?? {}) }}>
                <El k="n16" a={{ "data-s1-part": "weekday", "data-weekday": "1", ...(slot(partScope, "weekday").attrs ?? {}) }}>
                  {slot(partScope, "weekday").content ?? "일"}
                </El>
              </El>
              <El k="n17" a={{ "data-s1-part": "grid", "role": "grid", ...(slot(partScope, "grid").attrs ?? {}) }}>
                <El k="n18" a={{ "data-s1-part": "week", "role": "row", ...(slot(partScope, "week").attrs ?? {}) }}>
                  <El k="n19" a={{ "type": "button", "data-s1-part": "cell", "role": "gridcell", "data-date": "2026-01-01", "data-other-month": "false", "data-weekday": "1", "data-state": "default", "aria-selected": "false", ...(slot(partScope, "cell").attrs ?? {}) }}>
                    <El k="n20" a={{ "data-s1-part": "cell-inner", ...(slot(partScope, "cellInner").attrs ?? {}) }}>
                      <El k="n21" a={{ "data-s1-part": "cell-num", ...(slot(partScope, "cellNum").attrs ?? {}) }}>
                        {slot(partScope, "cellNum").content ?? "1"}
                      </El>
                    </El>
                  </El>
                </El>
              </El>
              <El k="n22" a={{ "data-s1-part": "grid", "data-tile-grid": "month", ...(slot(partScope, "grid").attrs ?? {}) }}>
                <El k="n23" a={{ "data-s1-part": "tile-row", ...(slot(partScope, "tileRow").attrs ?? {}) }}>
                  <El k="n24" a={{ "type": "button", "data-s1-part": "tile", "data-value": "0", "aria-selected": "false", ...(slot(partScope, "tile").attrs ?? {}) }}>
                    {slot(partScope, "tile").content ?? "1월"}
                  </El>
                </El>
              </El>
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "date-picker", "data-size": size ?? "md", "data-break": "mobile", "data-mode": variant ?? "single" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "trigger", "aria-haspopup": "dialog", "aria-expanded": "false", ...(slot(partScope, "trigger").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "날짜 선택"}
          </El>
          <El k="n3" a={{ "data-s1-part": "icon", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
            {slot(partScope, "icon").content ?? ""}
          </El>
        </El>
        <El k="n4" a={{ "data-s1-component": "bottom-sheet", "data-s1-part": "sheet", "data-break": "mobile", "data-footer": "single", "hidden": "", ...(slot(partScope, "sheet").attrs ?? {}) }}>
          <El k="n5" a={{ "data-s1-part": "sheet-backdrop", ...(slot(partScope, "sheetBackdrop").attrs ?? {}) }}>
            {slot(partScope, "sheetBackdrop").content ?? ""}
          </El>
          <El k="n6" a={{ "data-s1-part": "sheet-panel", "role": "dialog", "aria-modal": "true", ...(slot(partScope, "sheetPanel").attrs ?? {}) }}>
            <El k="n7" a={{ "data-s1-part": "sheet-header", ...(slot(partScope, "sheetHeader").attrs ?? {}) }}>
              <El k="n8" a={{ "data-s1-part": "sheet-title", "id": "date-picker-mobile-sheet-title", ...(slot(partScope, "sheetTitle").attrs ?? {}) }}>
                {slot(partScope, "sheetTitle").content ?? "날짜 선택"}
              </El>
              <El k="n9" a={{ "type": "button", "data-s1-part": "sheet-close", "aria-label": "닫기", ...(slot(partScope, "sheetClose").attrs ?? {}) }}>
                {slot(partScope, "sheetClose").content ?? ""}
              </El>
            </El>
            <El k="n10" a={{ "data-s1-part": "calendar-wrap", ...(slot(partScope, "calendarWrap").attrs ?? {}) }}>
              <El k="n11" a={{ "data-s1-part": "calendar", ...(slot(partScope, "calendar").attrs ?? {}) }}>
                <El k="n12" a={{ "data-s1-part": "header", ...(slot(partScope, "header").attrs ?? {}) }}>
                  <El k="n13" a={{ "type": "button", "data-s1-part": "prev", "aria-label": "이전", ...(slot(partScope, "prev").attrs ?? {}) }}>
                    <El k="n14" a={{ "data-s1-part": "chevron-icon", "aria-hidden": "true", ...(slot(partScope, "chevronIcon").attrs ?? {}) }}>
                      {slot(partScope, "chevronIcon").content ?? ""}
                    </El>
                  </El>
                  <El k="n15" a={{ "data-s1-part": "header-label", ...(slot(partScope, "headerLabel").attrs ?? {}) }}>
                    <El k="n16" a={{ "type": "button", "data-s1-part": "year-label", ...(slot(partScope, "yearLabel").attrs ?? {}) }}>
                      {slot(partScope, "yearLabel").content ?? "2026년"}
                    </El>
                    <El k="n17" a={{ "type": "button", "data-s1-part": "month-label", ...(slot(partScope, "monthLabel").attrs ?? {}) }}>
                      {slot(partScope, "monthLabel").content ?? "1월"}
                    </El>
                  </El>
                  <El k="n18" a={{ "type": "button", "data-s1-part": "next", "aria-label": "다음", ...(slot(partScope, "next").attrs ?? {}) }}>
                    <El k="n19" a={{ "data-s1-part": "chevron-icon", "aria-hidden": "true", ...(slot(partScope, "chevronIcon").attrs ?? {}) }}>
                      {slot(partScope, "chevronIcon").content ?? ""}
                    </El>
                  </El>
                </El>
                <El k="n20" a={{ "data-s1-part": "view", ...(slot(partScope, "view").attrs ?? {}) }}>
                  <El k="n21" a={{ "data-s1-part": "weekdays", ...(slot(partScope, "weekdays").attrs ?? {}) }}>
                    <El k="n22" a={{ "data-s1-part": "weekday", "data-weekday": "1", ...(slot(partScope, "weekday").attrs ?? {}) }}>
                      {slot(partScope, "weekday").content ?? "일"}
                    </El>
                  </El>
                  <El k="n23" a={{ "data-s1-part": "grid", "role": "grid", ...(slot(partScope, "grid").attrs ?? {}) }}>
                    <El k="n24" a={{ "data-s1-part": "week", "role": "row", ...(slot(partScope, "week").attrs ?? {}) }}>
                      <El k="n25" a={{ "type": "button", "data-s1-part": "cell", "role": "gridcell", "data-date": "2026-01-01", "data-other-month": "false", "data-weekday": "1", "data-state": "default", "aria-selected": "false", ...(slot(partScope, "cell").attrs ?? {}) }}>
                        <El k="n26" a={{ "data-s1-part": "cell-inner", ...(slot(partScope, "cellInner").attrs ?? {}) }}>
                          <El k="n27" a={{ "data-s1-part": "cell-num", ...(slot(partScope, "cellNum").attrs ?? {}) }}>
                            {slot(partScope, "cellNum").content ?? "1"}
                          </El>
                        </El>
                      </El>
                    </El>
                  </El>
                  <El k="n28" a={{ "data-s1-part": "grid", "data-tile-grid": "month", ...(slot(partScope, "grid").attrs ?? {}) }}>
                    <El k="n29" a={{ "data-s1-part": "tile-row", ...(slot(partScope, "tileRow").attrs ?? {}) }}>
                      <El k="n30" a={{ "type": "button", "data-s1-part": "tile", "data-value": "0", "aria-selected": "false", ...(slot(partScope, "tile").attrs ?? {}) }}>
                        {slot(partScope, "tile").content ?? "1월"}
                      </El>
                    </El>
                  </El>
                </El>
              </El>
            </El>
            <El k="n31" a={{ "data-s1-part": "sheet-footer", ...(slot(partScope, "sheetFooter").attrs ?? {}) }}>
              <N k="n32" as={S1Button} a={{ "type": "button", "data-s1-part": "apply", "data-s1-component": "button", "data-variant": "primary", "data-size": "lg" }} p={{ variant: "primary", size: "lg", parts: {"label":"적용"}, ...attrProps(slot(partScope, "nested:button").attrs) }} />
            </El>
          </El>
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] date-picker: 그릴 템플릿을 고르지 못했습니다.");
}
