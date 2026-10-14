"use client";
/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Modal — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/modal*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { forwardRef, useId, useRef } from "react";
import { mergeParts, scopeOf, slot, useControlledOpen, useMergedRef, useRuntime } from "./kit.js";
import { init, destroy } from "../../components/modal.js";


export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["single","dual"];
export const SIZES = [];
/* parts 로 줄 수 있는 슬롯 이름(낙타 표기) — 타입 정의의 parts 키와 같다. */
export const PARTS = ["overlay","panel","content","header","title","close","body","message","footer","cancelLabel","confirmLabel","label"];
/* 0.22.0 에서 쓰던 슬롯 이름 — 계속 받는다(옛 이름 하나가 여러 자리를 함께 채우는 것도 그때 그대로). 새 코드는 위 이름을 쓰세요. */
export const LEGACY_PARTS = ["label"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] modal: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

const S1Modal = forwardRef(function S1Modal({ variant, breakName = DEFAULT_BREAK, parts, open, defaultOpen, onOpenChange, onOpen, onClose, confirmLabel, cancelLabel, onConfirm, onCancel, title, message, children, className, style, ...rest }, forwardedRef) {
  const uid = useId();
  const rootRef = useRef(null);
  const rootAttr = useMergedRef(rootRef, forwardedRef);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("breakName", breakName, BREAKS);
  const formKey = breakName;
  /* 견본 글자는 내용 prop 을 하나도 주지 않았을 때만 그린다. */
  const bare = confirmLabel === undefined && cancelLabel === undefined && title === undefined && message === undefined && children === undefined;
  const initialOpen = useRef(open ?? defaultOpen ?? false).current;
  const syncing = useRef(false);
  const partScope = scopeOf(mergeParts(parts, { confirmLabel: confirmLabel, cancelLabel: cancelLabel, title: title, message: message }, {"label":["cancelLabel","confirmLabel"]}));
  const apiRef = useRuntime(rootRef, { init, destroy }, {
    "s1:modal:open": (event) => { onOpen?.(event); if (!syncing.current) onOpenChange?.(true, event.detail); },
    "s1:modal:close": (event) => {
      onClose?.(event);
      const reason = event.detail?.reason;
      if (reason === "confirm") onConfirm?.(event);
      else if (reason === "cancel") onCancel?.(event);
      if (!syncing.current) onOpenChange?.(false, event.detail);
    }
  }, [breakName, formKey]);
  useControlledOpen(apiRef, open, syncing);
  if (formKey === "pc") {
    return (
      <div hidden={initialOpen ? undefined : true} id={`${uid}-confirm-modal`} data-s1-component="modal" data-break="pc" data-footer={variant ?? "dual"} ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="overlay" {...(slot(partScope, "overlay").attrs ?? {})}>
          {slot(partScope, "overlay").content ?? ""}
        </div>
        <div data-s1-part="panel" role="dialog" aria-modal="true" aria-labelledby={`${uid}-title`} aria-describedby={`${uid}-message`} tabIndex="-1" {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-part="content" {...(slot(partScope, "content").attrs ?? {})}>
            <div data-s1-part="header" {...(slot(partScope, "header").attrs ?? {})}>
              <h2 data-s1-part="title" id={`${uid}-title`} {...(slot(partScope, "title").attrs ?? {})}>
                {slot(partScope, "title").content ?? (bare ? "제목 영역" : undefined)}
              </h2>
              <button type="button" data-s1-part="close" aria-label="닫기" {...(slot(partScope, "close").attrs ?? {})}>
                {slot(partScope, "close").content ?? ""}
              </button>
            </div>
            <div data-s1-part="body" {...(slot(partScope, "body").attrs ?? {})}>
              {children === undefined ? (
                <>
              <p data-s1-part="message" id={`${uid}-message`} {...(slot(partScope, "message").attrs ?? {})}>
                {slot(partScope, "message").content ?? (bare ? "변경한 내용이 저장되지 않고 사라집니다. 정말 이 작업을 진행하시겠어요?" : undefined)}
              </p>
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
  } else if (formKey === "mobile") {
    return (
      <div hidden={initialOpen ? undefined : true} id={`${uid}-confirm-modal`} data-s1-component="modal" data-break="mobile" data-footer={variant ?? "dual"} ref={rootAttr} className={className} style={style} {...rest}>
        <div data-s1-part="overlay" {...(slot(partScope, "overlay").attrs ?? {})}>
          {slot(partScope, "overlay").content ?? ""}
        </div>
        <div data-s1-part="panel" role="dialog" aria-modal="true" aria-labelledby={`${uid}-title`} aria-describedby={`${uid}-message`} tabIndex="-1" {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-part="content" {...(slot(partScope, "content").attrs ?? {})}>
            <div data-s1-part="header" {...(slot(partScope, "header").attrs ?? {})}>
              <h2 data-s1-part="title" id={`${uid}-title`} {...(slot(partScope, "title").attrs ?? {})}>
                {slot(partScope, "title").content ?? (bare ? "자동 로그인 설정" : undefined)}
              </h2>
            </div>
            <div data-s1-part="body" {...(slot(partScope, "body").attrs ?? {})}>
              {children === undefined ? (
                <>
              <p data-s1-part="message" id={`${uid}-message`} {...(slot(partScope, "message").attrs ?? {})}>
                {slot(partScope, "message").content ?? (bare ? "로그인되었어요. 다음부터 자동으로 로그인할까요?" : undefined)}
              </p>
                </>
              ) : children}
            </div>
          </div>
          <div data-s1-part="footer" {...(slot(partScope, "footer").attrs ?? {})}>
            <button type="button" data-s1-component="button" data-variant="secondary" data-size="lg" data-s1-close="cancel">
              <span data-s1-part="label" {...(slot(partScope, "cancelLabel").attrs ?? {})}>
                {slot(partScope, "cancelLabel").content ?? "아니오"}
              </span>
            </button>
            <button type="button" data-s1-component="button" data-variant="primary" data-size="lg" data-s1-close="confirm">
              <span data-s1-part="label" {...(slot(partScope, "confirmLabel").attrs ?? {})}>
                {slot(partScope, "confirmLabel").content ?? "네"}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  throw new Error(`[s1-ui] modal: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
});
S1Modal.displayName = "S1Modal";
export default S1Modal;
