/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1DatePicker — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/date-picker*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/date-picker.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["single","range"];
export const SIZES = ["xxsm","xsm","md"];
export const PARTS = ["trigger","value","icon","panel","calendar","header","prev","next","chevron-icon","header-label","year-label","month-label","weekdays","weekday","view","grid","week","cell","cell-inner","cell-num","tile","sheet","sheet-backdrop","sheet-panel","sheet-header","sheet-title","sheet-close","calendar-wrap","sheet-footer","apply"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] date-picker: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1DatePicker({ variant, size, breakName = DEFAULT_BREAK, parts, onOpen, onClose, onChange, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  assertAllowed("breakName", breakName, BREAKS);

  /* 배포본의 실제 동작 스크립트를 그대로 쓴다 — 브라우저에서만 돈다(서버 렌더링은 마크업까지). */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    init(root);
    return () => destroy(root);
  }, [breakName]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const bound = [["s1:date-picker:open", onOpen], ["s1:date-picker:close", onClose], ["s1:date-picker:change", onChange]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  if (breakName === "pc") {
    return (
      <div data-s1-component="date-picker" data-size={size ?? "md"} data-break="pc" data-mode={variant ?? "single"} ref={rootRef} className={className} style={style} {...rest}>
        <button type="button" data-s1-part="trigger" aria-haspopup="dialog" aria-expanded="false" {...(slot(partScope, "trigger").attrs ?? {})}>
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? "YY.MM.DD"}
          </span>
          <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
            {slot(partScope, "icon").content ?? ""}
          </span>
        </button>
        <div data-s1-part="panel" role="dialog" hidden {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-part="calendar" {...(slot(partScope, "calendar").attrs ?? {})}>
            {slot(partScope, "calendar").content ?? ""}
          </div>
        </div>
      </div>
    );
  } else if (breakName === "mobile") {
    return (
      <div data-s1-component="date-picker" data-size={size ?? "md"} data-break="mobile" data-mode={variant ?? "single"} ref={rootRef} className={className} style={style} {...rest}>
        <button type="button" data-s1-part="trigger" aria-haspopup="dialog" aria-expanded="false" {...(slot(partScope, "trigger").attrs ?? {})}>
          <span data-s1-part="value" {...(slot(partScope, "value").attrs ?? {})}>
            {slot(partScope, "value").content ?? "YY.MM.DD"}
          </span>
          <span data-s1-part="icon" aria-hidden="true" {...(slot(partScope, "icon").attrs ?? {})}>
            {slot(partScope, "icon").content ?? ""}
          </span>
        </button>
        <div data-s1-part="sheet" hidden {...(slot(partScope, "sheet").attrs ?? {})}>
          <div data-s1-part="sheet-backdrop" {...(slot(partScope, "sheetBackdrop").attrs ?? {})}>
            {slot(partScope, "sheetBackdrop").content ?? ""}
          </div>
          <div data-s1-part="sheet-panel" role="dialog" aria-modal="true" aria-labelledby={`${uid}-sheet-title`} tabIndex="-1" {...(slot(partScope, "sheetPanel").attrs ?? {})}>
            <div data-s1-part="sheet-header" {...(slot(partScope, "sheetHeader").attrs ?? {})}>
              <span data-s1-part="sheet-title" id={`${uid}-sheet-title`} {...(slot(partScope, "sheetTitle").attrs ?? {})}>
                {slot(partScope, "sheetTitle").content ?? "날짜 선택"}
              </span>
              <button type="button" data-s1-part="sheet-close" aria-label="닫기" {...(slot(partScope, "sheetClose").attrs ?? {})}>
                {slot(partScope, "sheetClose").content ?? ""}
              </button>
            </div>
            <div data-s1-part="calendar-wrap" {...(slot(partScope, "calendarWrap").attrs ?? {})}>
              <div data-s1-part="calendar" {...(slot(partScope, "calendar").attrs ?? {})}>
                {slot(partScope, "calendar").content ?? ""}
              </div>
            </div>
            <div data-s1-part="sheet-footer" {...(slot(partScope, "sheetFooter").attrs ?? {})}>
              <button type="button" data-s1-part="apply" data-s1-component="button" data-variant="primary" data-size="lg" {...(slot(partScope, "apply").attrs ?? {})}>
                <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                  {slot(partScope, "label").content ?? "적용"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  throw new Error(`[s1-ui] date-picker: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
}
