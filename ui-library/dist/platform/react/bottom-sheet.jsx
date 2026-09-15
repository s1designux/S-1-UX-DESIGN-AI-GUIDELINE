/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1BottomSheet — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/bottom-sheet*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/bottom-sheet.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["none","single","dual"];
export const SIZES = [];
export const PARTS = ["sheet-backdrop","sheet-panel","sheet-content","sheet-header","sheet-title","sheet-close","sheet-body","sheet-footer"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] bottom-sheet: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1BottomSheet({ variant, parts, onOpen, onClose, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);

  /* 배포본의 실제 동작 스크립트를 그대로 쓴다 — 브라우저에서만 돈다(서버 렌더링은 마크업까지). */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    init(root);
    return () => destroy(root);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const bound = [["s1:bottom-sheet:open", onOpen], ["s1:bottom-sheet:close", onClose]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  return (
      <div data-s1-component="bottom-sheet" data-s1-part="sheet" data-break="mobile" data-footer={variant ?? "single"} {...(slot(partScope, "sheet").attrs ?? {})} ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="sheet-backdrop" {...(slot(partScope, "sheetBackdrop").attrs ?? {})}>
          {slot(partScope, "sheetBackdrop").content ?? ""}
        </div>
        <div data-s1-part="sheet-panel" role="dialog" aria-modal="true" aria-labelledby={`${uid}-sheet-title`} tabIndex="-1" {...(slot(partScope, "sheetPanel").attrs ?? {})}>
          <div data-s1-part="sheet-content" {...(slot(partScope, "sheetContent").attrs ?? {})}>
            <div data-s1-part="sheet-header" {...(slot(partScope, "sheetHeader").attrs ?? {})}>
              <span data-s1-part="sheet-title" id={`${uid}-sheet-title`} {...(slot(partScope, "sheetTitle").attrs ?? {})}>
                {slot(partScope, "sheetTitle").content ?? "항목 선택"}
              </span>
              <button type="button" data-s1-part="sheet-close" aria-label="닫기" {...(slot(partScope, "sheetClose").attrs ?? {})}>
                {slot(partScope, "sheetClose").content ?? ""}
              </button>
            </div>
            <div data-s1-part="sheet-body" {...(slot(partScope, "sheetBody").attrs ?? {})}>
              <div data-s1-component="bottom-sheet-option" data-type="text" data-state="default">
                <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                  {slot(partScope, "label").content ?? "항목 1"}
                </span>
              </div>
              <div data-s1-component="bottom-sheet-option" data-type="text" data-state="selected">
                <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                  {slot(partScope, "label").content ?? "항목 2"}
                </span>
                <span data-s1-part="check" aria-hidden="true" {...(slot(partScope, "check").attrs ?? {})}>
                  {slot(partScope, "check").content ?? ""}
                </span>
              </div>
              <div data-s1-component="bottom-sheet-option" data-type="text" data-state="default">
                <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                  {slot(partScope, "label").content ?? "항목 3"}
                </span>
              </div>
              <div data-s1-component="bottom-sheet-option" data-type="text" data-state="default">
                <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                  {slot(partScope, "label").content ?? "항목 4"}
                </span>
              </div>
            </div>
          </div>
          <div data-s1-part="sheet-footer" {...(slot(partScope, "sheetFooter").attrs ?? {})}>
            <button type="button" data-s1-component="button" data-variant="primary" data-size="lg">
              <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                {slot(partScope, "label").content ?? "적용"}
              </span>
            </button>
          </div>
        </div>
      </div>
  );
}
