"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1ModalContent — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/modal-content*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef } from "react";
import { mergeParts, scopeOf, slot, useControlledOpen, useMergedRef, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/modal-content.js";


export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["single","dual"];
export const SIZES = ["md","lg","xl"];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["overlay","panel","header","title","close","contentArea","content","contentLabel","footer","cancelLabel","confirmLabel","label"];
/* 0.22.0 에서 쓰던 슬롯 이름 — 계속 받는다(옛 이름 하나가 여러 자리를 함께 채우는 것도 그때 그대로). 새 코드는 위 이름을 쓰세요. */
export const LEGACY_PARTS = ["label"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] modal-content: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1ModalContent = forwardRef(function S1ModalContent({ variant, size, parts, open, defaultOpen, onOpenChange, onOpen, onClose, confirmLabel, cancelLabel, onConfirm, onCancel, title, children, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = confirmLabel === undefined && cancelLabel === undefined && title === undefined && children === undefined;
  const initialOpen = useRef(open ?? defaultOpen ?? false).current;
  const syncing = useRef(false);
  const partScope = scopeOf(mergeParts(parts, { confirmLabel: confirmLabel, cancelLabel: cancelLabel, title: title }, {"label":["cancelLabel","confirmLabel"]}));
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:modal-content:open": (event) => { onOpen?.(event); if (!syncing.current) onOpenChange?.(true, event.detail); },
    "s1:modal-content:close": (event) => {
      onClose?.(event);
      const reason = event.detail?.reason;
      if (reason === "confirm") onConfirm?.(event);
      else if (reason === "cancel") onCancel?.(event);
      if (!syncing.current) onOpenChange?.(false, event.detail);
    }
  }, []);
  useControlledOpen(apiRef, open, syncing);
  return (
      <div hidden={initialOpen ? undefined : true} id={`${uid}-content-modal`} data-s1-component="modal-content" data-size={size ?? "md"} data-footer={variant ?? "dual"} ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="overlay" {...(slot(partScope, "overlay").attrs ?? {})}>
          {slot(partScope, "overlay").content ?? ""}
        </div>
        <div data-s1-part="panel" role="dialog" aria-modal="true" aria-labelledby={`${uid}-title`} tabIndex="-1" {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-part="header" {...(slot(partScope, "header").attrs ?? {})}>
            <h2 data-s1-part="title" id={`${uid}-title`} {...(slot(partScope, "title").attrs ?? {})}>
              {slot(partScope, "title").content ?? (bare ? "제목 영역" : undefined)}
            </h2>
            <button type="button" data-s1-part="close" aria-label="닫기" {...(slot(partScope, "close").attrs ?? {})}>
              {slot(partScope, "close").content ?? ""}
            </button>
          </div>
          <div data-s1-part="content-area" {...(slot(partScope, "contentArea").attrs ?? {})}>
            <div data-s1-part="content" {...(slot(partScope, "content").attrs ?? {})}>
              {children === undefined ? (
                <>
              <span data-s1-part="content-label" {...(slot(partScope, "contentLabel").attrs ?? {})}>
                {slot(partScope, "contentLabel").content ?? (bare ? "컨텐츠 영역" : undefined)}
              </span>
                </>
              ) : children}
            </div>
          </div>
          <div data-s1-part="footer" {...(slot(partScope, "footer").attrs ?? {})}>
            <button type="button" data-s1-component="button" data-variant="secondary" data-size="xxsm" data-s1-close="cancel">
              <span data-s1-part="label" {...(slot(partScope, "cancelLabel").attrs ?? {})}>
                {slot(partScope, "cancelLabel").content ?? "취소"}
              </span>
            </button>
            <button type="button" data-s1-component="button" data-variant="primary" data-size="xxsm" data-s1-close="confirm">
              <span data-s1-part="label" {...(slot(partScope, "confirmLabel").attrs ?? {})}>
                {slot(partScope, "confirmLabel").content ?? "확인"}
              </span>
            </button>
          </div>
        </div>
      </div>
  );
});
S1ModalContent.displayName = "S1ModalContent";
export default S1ModalContent;
