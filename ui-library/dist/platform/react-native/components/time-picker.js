/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1TimePicker — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/time-picker*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/time-picker.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/time-picker.js";
import S1Button from "./button.js";
import S1Tab from "./tab.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["base"];
export const SIZES = ["xxsm","xsm","md"];
export const MODES = [];
export const PARTS = ["trigger","value","icon","panel","column","cell","divider","footer","confirm","sheet","sheet-backdrop","sheet-panel","sheet-header","sheet-title","sheet-close","tabs","date-panel","wheel","wheel-col","wheel-cell","fade-top","fade-bottom","sheet-footer","apply"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] time-picker: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{"type":"24h","minuteStep":1,"mobile":false,"mobileContent":"time-only"},{"type":"12h","minuteStep":5,"mobile":false,"mobileContent":"time-only"},{"type":"12h","minuteStep":1,"mobile":true,"mobileContent":"time-only"},{"type":"12h","minuteStep":1,"mobile":true,"mobileContent":"date-time"}];

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
    return pickGroup(current, [{"index":0,"values":{"data-type":["24h"],"data-minute-step":["1"]}},{"index":1,"values":{"data-type":["12h"],"data-minute-step":["5"]}}]);
  }
  if (breakName === "mobile") {
    return pickGroup(current, [{"index":2,"values":{"data-mobile-content":["time-only"]}},{"index":3,"values":{"data-mobile-content":["date-time"]}}]);
  }
  return 0;
}

export default function S1TimePicker({ size, breakName = DEFAULT_BREAK, parts, onOpen, onClose, onChange, open, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);
  const tpl = pickTemplate(breakName, undefined, { "data-type": rest["data-type"], "data-minute-step": rest["data-minute-step"], "data-mobile-content": rest["data-mobile-content"] });
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("time-picker", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { open, onChange, onOpen, onClose, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "time-picker", "data-size": size ?? "md", "data-break": "pc", "data-type": "24h", "data-minute-step": "1" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "trigger", "aria-haspopup": "listbox", "aria-expanded": "false", "aria-label": "시간", ...(slot(partScope, "trigger").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "시간 선택"}
          </El>
          <El k="n3" a={{ "data-s1-part": "icon", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
            {slot(partScope, "icon").content ?? ""}
          </El>
        </El>
        <El k="n4" a={{ "data-s1-part": "panel", "hidden": "", ...(slot(partScope, "panel").attrs ?? {}) }}>
          <El k="n5" a={{ "data-s1-part": "columns", ...(slot(partScope, "columns").attrs ?? {}) }}>
            <El k="n6" a={{ "data-s1-part": "column", "data-column": "hour", "role": "listbox", "aria-label": "시", ...(slot(partScope, "column").attrs ?? {}) }}>
              <El k="n7" a={{ "data-s1-part": "cell", "role": "option", "aria-selected": "false", "data-value": "00", ...(slot(partScope, "cell").attrs ?? {}) }}>
                {slot(partScope, "cell").content ?? "00"}
              </El>
            </El>
            <El k="n8" a={{ "data-s1-part": "divider", ...(slot(partScope, "divider").attrs ?? {}) }}>
              {slot(partScope, "divider").content ?? ""}
            </El>
            <El k="n9" a={{ "data-s1-part": "column", "data-column": "minute", "role": "listbox", "aria-label": "분", ...(slot(partScope, "column").attrs ?? {}) }}>
              <El k="n10" a={{ "data-s1-part": "cell", "role": "option", "aria-selected": "false", "data-value": "00", ...(slot(partScope, "cell").attrs ?? {}) }}>
                {slot(partScope, "cell").content ?? "00"}
              </El>
            </El>
          </El>
          <El k="n11" a={{ "data-s1-part": "footer", ...(slot(partScope, "footer").attrs ?? {}) }}>
            <El k="n12" a={{ "type": "button", "data-s1-part": "confirm", "disabled": "", ...(slot(partScope, "confirm").attrs ?? {}) }}>
              {slot(partScope, "confirm").content ?? "확인"}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 1) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "time-picker", "data-size": size ?? "md", "data-break": "pc", "data-type": "12h", "data-minute-step": "5" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "trigger", "aria-haspopup": "listbox", "aria-expanded": "false", "aria-label": "시간", ...(slot(partScope, "trigger").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "시간 선택"}
          </El>
          <El k="n3" a={{ "data-s1-part": "icon", "aria-hidden": "true", ...(slot(partScope, "icon").attrs ?? {}) }}>
            {slot(partScope, "icon").content ?? ""}
          </El>
        </El>
        <El k="n4" a={{ "data-s1-part": "panel", "hidden": "", ...(slot(partScope, "panel").attrs ?? {}) }}>
          <El k="n5" a={{ "data-s1-part": "columns", ...(slot(partScope, "columns").attrs ?? {}) }}>
            <El k="n6" a={{ "data-s1-part": "column", "data-column": "ampm", "role": "listbox", "aria-label": "오전오후", ...(slot(partScope, "column").attrs ?? {}) }}>
              <El k="n7" a={{ "data-s1-part": "cell", "role": "option", "aria-selected": "false", "data-value": "00", ...(slot(partScope, "cell").attrs ?? {}) }}>
                {slot(partScope, "cell").content ?? "00"}
              </El>
            </El>
            <El k="n8" a={{ "data-s1-part": "divider", ...(slot(partScope, "divider").attrs ?? {}) }}>
              {slot(partScope, "divider").content ?? ""}
            </El>
            <El k="n9" a={{ "data-s1-part": "column", "data-column": "hour", "role": "listbox", "aria-label": "시", ...(slot(partScope, "column").attrs ?? {}) }}>
              <El k="n10" a={{ "data-s1-part": "cell", "role": "option", "aria-selected": "false", "data-value": "00", ...(slot(partScope, "cell").attrs ?? {}) }}>
                {slot(partScope, "cell").content ?? "00"}
              </El>
            </El>
            <El k="n11" a={{ "data-s1-part": "divider", ...(slot(partScope, "divider").attrs ?? {}) }}>
              {slot(partScope, "divider").content ?? ""}
            </El>
            <El k="n12" a={{ "data-s1-part": "column", "data-column": "minute", "role": "listbox", "aria-label": "분", ...(slot(partScope, "column").attrs ?? {}) }}>
              <El k="n13" a={{ "data-s1-part": "cell", "role": "option", "aria-selected": "false", "data-value": "00", ...(slot(partScope, "cell").attrs ?? {}) }}>
                {slot(partScope, "cell").content ?? "00"}
              </El>
            </El>
          </El>
          <El k="n14" a={{ "data-s1-part": "footer", ...(slot(partScope, "footer").attrs ?? {}) }}>
            <El k="n15" a={{ "type": "button", "data-s1-part": "confirm", "disabled": "", ...(slot(partScope, "confirm").attrs ?? {}) }}>
              {slot(partScope, "confirm").content ?? "확인"}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 2) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "time-picker", "data-size": size ?? "md", "data-break": "mobile", "data-type": "12h", "data-minute-step": "1", "data-mobile-ui": "wheel", "data-mobile-content": "time-only" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "trigger", "aria-haspopup": "dialog", "aria-expanded": "false", "aria-label": "시간", ...(slot(partScope, "trigger").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "시간 선택"}
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
              <El k="n8" a={{ "data-s1-part": "sheet-title", "id": "time-picker-wheel-title-time-only", ...(slot(partScope, "sheetTitle").attrs ?? {}) }}>
                {slot(partScope, "sheetTitle").content ?? "시간 선택"}
              </El>
              <El k="n9" a={{ "type": "button", "data-s1-part": "sheet-close", "aria-label": "닫기", ...(slot(partScope, "sheetClose").attrs ?? {}) }}>
                {slot(partScope, "sheetClose").content ?? ""}
              </El>
            </El>
            <El k="n10" a={{ "data-s1-part": "wheel", ...(slot(partScope, "wheel").attrs ?? {}) }}>
              <El k="n11" a={{ "data-s1-part": "wheel-col", "data-column": "ampm", "role": "listbox", "aria-label": "오전오후", ...(slot(partScope, "wheelCol").attrs ?? {}) }}>
                <El k="n12" a={{ "data-s1-part": "wheel-cell", "role": "option", "data-value": "00", ...(slot(partScope, "wheelCell").attrs ?? {}) }}>
                  {slot(partScope, "wheelCell").content ?? "00"}
                </El>
              </El>
              <El k="n13" a={{ "data-s1-part": "wheel-col", "data-column": "hour", "role": "listbox", "aria-label": "시", ...(slot(partScope, "wheelCol").attrs ?? {}) }}>
                <El k="n14" a={{ "data-s1-part": "wheel-cell", "role": "option", "data-value": "00", ...(slot(partScope, "wheelCell").attrs ?? {}) }}>
                  {slot(partScope, "wheelCell").content ?? "00"}
                </El>
              </El>
              <El k="n15" a={{ "data-s1-part": "wheel-col", "data-column": "colon", "aria-hidden": "true", ...(slot(partScope, "wheelCol").attrs ?? {}) }}>
                <El k="n16" a={{ "data-s1-part": "wheel-cell", ...(slot(partScope, "wheelCell").attrs ?? {}) }}>
                  {slot(partScope, "wheelCell").content ?? ":"}
                </El>
              </El>
              <El k="n17" a={{ "data-s1-part": "wheel-col", "data-column": "minute", "role": "listbox", "aria-label": "분", ...(slot(partScope, "wheelCol").attrs ?? {}) }}>
                <El k="n18" a={{ "data-s1-part": "wheel-cell", "role": "option", "data-value": "00", ...(slot(partScope, "wheelCell").attrs ?? {}) }}>
                  {slot(partScope, "wheelCell").content ?? "00"}
                </El>
              </El>
              <El k="n19" a={{ "data-s1-part": "fade-top", "aria-hidden": "true", ...(slot(partScope, "fadeTop").attrs ?? {}) }}>
                {slot(partScope, "fadeTop").content ?? ""}
              </El>
              <El k="n20" a={{ "data-s1-part": "fade-bottom", "aria-hidden": "true", ...(slot(partScope, "fadeBottom").attrs ?? {}) }}>
                {slot(partScope, "fadeBottom").content ?? ""}
              </El>
            </El>
            <El k="n21" a={{ "data-s1-part": "sheet-footer", ...(slot(partScope, "sheetFooter").attrs ?? {}) }}>
              <N k="n22" as={S1Button} a={{ "type": "button", "data-s1-part": "apply", "data-s1-component": "button", "data-variant": "primary", "data-size": "lg" }} p={{ variant: "primary", size: "lg", parts: {"label":"적용"}, ...attrProps(slot(partScope, "nested:button").attrs) }} />
            </El>
          </El>
        </El>
      </Root>
    );
  }
  if (tpl === 3) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "time-picker", "data-size": size ?? "md", "data-break": "mobile", "data-type": "12h", "data-minute-step": "1", "data-mobile-ui": "wheel", "data-mobile-content": "date-time" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "type": "button", "data-s1-part": "trigger", "aria-haspopup": "dialog", "aria-expanded": "false", "aria-label": "시작 일시", ...(slot(partScope, "trigger").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "value", ...(slot(partScope, "value").attrs ?? {}) }}>
            {slot(partScope, "value").content ?? "시작 일시 선택"}
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
              <El k="n8" a={{ "data-s1-part": "sheet-title", "id": "time-picker-wheel-title-date-time", ...(slot(partScope, "sheetTitle").attrs ?? {}) }}>
                {slot(partScope, "sheetTitle").content ?? "시작 일시"}
              </El>
              <El k="n9" a={{ "type": "button", "data-s1-part": "sheet-close", "aria-label": "닫기", ...(slot(partScope, "sheetClose").attrs ?? {}) }}>
                {slot(partScope, "sheetClose").content ?? ""}
              </El>
            </El>
            <N k="n10" as={S1Tab} a={{ "data-s1-part": "tabs", "data-s1-component": "tab", "data-size": "sm", "data-break": "mobile", "role": "tablist", "aria-label": "날짜·시간 선택" }} p={{ size: "sm", "aria-label": "날짜·시간 선택", tabs: [{"content":"날짜","attrs":{"aria-selected":"false","data-value":"date"}},{"content":"시간","attrs":{"aria-selected":"true","data-value":"time"}}], omit: ["tabpanel (optional)"], parts: {"tab":"시간"}, ...attrProps(slot(partScope, "nested:tab").attrs) }} />
            <El k="n11" a={{ "data-s1-part": "date-panel", "hidden": "", ...(slot(partScope, "datePanel").attrs ?? {}) }}>
              <El k="n12" a={{ "data-s1-part": "date-panel-note", ...(slot(partScope, "datePanelNote").attrs ?? {}) }}>
                {slot(partScope, "datePanelNote").content ?? "날짜 선택 화면은 Date Picker 부품이 따로 제공합니다(이 부품은 탭 전환만 합니다)."}
              </El>
            </El>
            <El k="n13" a={{ "data-s1-part": "wheel", ...(slot(partScope, "wheel").attrs ?? {}) }}>
              <El k="n14" a={{ "data-s1-part": "wheel-col", "data-column": "ampm", "role": "listbox", "aria-label": "오전오후", ...(slot(partScope, "wheelCol").attrs ?? {}) }}>
                <El k="n15" a={{ "data-s1-part": "wheel-cell", "role": "option", "data-value": "00", ...(slot(partScope, "wheelCell").attrs ?? {}) }}>
                  {slot(partScope, "wheelCell").content ?? "00"}
                </El>
              </El>
              <El k="n16" a={{ "data-s1-part": "wheel-col", "data-column": "hour", "role": "listbox", "aria-label": "시", ...(slot(partScope, "wheelCol").attrs ?? {}) }}>
                <El k="n17" a={{ "data-s1-part": "wheel-cell", "role": "option", "data-value": "00", ...(slot(partScope, "wheelCell").attrs ?? {}) }}>
                  {slot(partScope, "wheelCell").content ?? "00"}
                </El>
              </El>
              <El k="n18" a={{ "data-s1-part": "wheel-col", "data-column": "colon", "aria-hidden": "true", ...(slot(partScope, "wheelCol").attrs ?? {}) }}>
                <El k="n19" a={{ "data-s1-part": "wheel-cell", ...(slot(partScope, "wheelCell").attrs ?? {}) }}>
                  {slot(partScope, "wheelCell").content ?? ":"}
                </El>
              </El>
              <El k="n20" a={{ "data-s1-part": "wheel-col", "data-column": "minute", "role": "listbox", "aria-label": "분", ...(slot(partScope, "wheelCol").attrs ?? {}) }}>
                <El k="n21" a={{ "data-s1-part": "wheel-cell", "role": "option", "data-value": "00", ...(slot(partScope, "wheelCell").attrs ?? {}) }}>
                  {slot(partScope, "wheelCell").content ?? "00"}
                </El>
              </El>
              <El k="n22" a={{ "data-s1-part": "fade-top", "aria-hidden": "true", ...(slot(partScope, "fadeTop").attrs ?? {}) }}>
                {slot(partScope, "fadeTop").content ?? ""}
              </El>
              <El k="n23" a={{ "data-s1-part": "fade-bottom", "aria-hidden": "true", ...(slot(partScope, "fadeBottom").attrs ?? {}) }}>
                {slot(partScope, "fadeBottom").content ?? ""}
              </El>
            </El>
            <El k="n24" a={{ "data-s1-part": "sheet-footer", ...(slot(partScope, "sheetFooter").attrs ?? {}) }}>
              <N k="n25" as={S1Button} a={{ "type": "button", "data-s1-part": "apply", "data-s1-component": "button", "data-variant": "primary", "data-size": "lg" }} p={{ variant: "primary", size: "lg", parts: {"label":"적용"}, ...attrProps(slot(partScope, "nested:button").attrs) }} />
            </El>
          </El>
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] time-picker: 그릴 템플릿을 고르지 못했습니다.");
}
