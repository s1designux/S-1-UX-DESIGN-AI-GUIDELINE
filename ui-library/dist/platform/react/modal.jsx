/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Modal — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/modal*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/modal.js";

export const BREAKS = ["pc","mobile"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["single","dual"];
export const SIZES = [];
export const PARTS = ["overlay","panel","content","header","title","body","message","footer","close"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] modal: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1Modal({ variant, breakName = DEFAULT_BREAK, parts, onOpen, onClose, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
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
    const bound = [["s1:modal:open", onOpen], ["s1:modal:close", onClose]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  if (breakName === "pc") {
    return (
      <div data-s1-component="modal" data-break="pc" data-footer={variant ?? "dual"} hidden ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="overlay" {...(slot(partScope, "overlay").attrs ?? {})}>
          {slot(partScope, "overlay").content ?? ""}
        </div>
        <div data-s1-part="panel" role="dialog" aria-modal="true" aria-labelledby={`${uid}-title`} aria-describedby={`${uid}-message`} tabIndex="-1" {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-part="content" {...(slot(partScope, "content").attrs ?? {})}>
            <div data-s1-part="header" {...(slot(partScope, "header").attrs ?? {})}>
              <h2 data-s1-part="title" id={`${uid}-title`} {...(slot(partScope, "title").attrs ?? {})}>
                {slot(partScope, "title").content ?? "제목 영역"}
              </h2>
              <button type="button" data-s1-part="close" aria-label="닫기" {...(slot(partScope, "close").attrs ?? {})}>
                {slot(partScope, "close").content ?? ""}
              </button>
            </div>
            <div data-s1-part="body" {...(slot(partScope, "body").attrs ?? {})}>
              <p data-s1-part="message" id={`${uid}-message`} {...(slot(partScope, "message").attrs ?? {})}>
                {slot(partScope, "message").content ?? "변경한 내용이 저장되지 않고 사라집니다. 정말 이 작업을 진행하시겠어요?"}
              </p>
            </div>
          </div>
          <div data-s1-part="footer" {...(slot(partScope, "footer").attrs ?? {})}>
            <button type="button" data-s1-component="button" data-variant="secondary" data-size="xxsm">
              <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                {slot(partScope, "label").content ?? "취소"}
              </span>
            </button>
            <button type="button" data-s1-component="button" data-variant="primary" data-size="xxsm">
              <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                {slot(partScope, "label").content ?? "확인"}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  } else if (breakName === "mobile") {
    return (
      <div data-s1-component="modal" data-break="mobile" data-footer={variant ?? "dual"} hidden ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="overlay" {...(slot(partScope, "overlay").attrs ?? {})}>
          {slot(partScope, "overlay").content ?? ""}
        </div>
        <div data-s1-part="panel" role="dialog" aria-modal="true" aria-labelledby={`${uid}-title`} aria-describedby={`${uid}-message`} tabIndex="-1" {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-part="content" {...(slot(partScope, "content").attrs ?? {})}>
            <div data-s1-part="header" {...(slot(partScope, "header").attrs ?? {})}>
              <h2 data-s1-part="title" id={`${uid}-title`} {...(slot(partScope, "title").attrs ?? {})}>
                {slot(partScope, "title").content ?? "자동 로그인 설정"}
              </h2>
            </div>
            <div data-s1-part="body" {...(slot(partScope, "body").attrs ?? {})}>
              <p data-s1-part="message" id={`${uid}-message`} {...(slot(partScope, "message").attrs ?? {})}>
                {slot(partScope, "message").content ?? "로그인되었어요. 다음부터 자동으로 로그인할까요?"}
              </p>
            </div>
          </div>
          <div data-s1-part="footer" {...(slot(partScope, "footer").attrs ?? {})}>
            <button type="button" data-s1-component="button" data-variant="secondary" data-size="lg">
              <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                {slot(partScope, "label").content ?? "아니오"}
              </span>
            </button>
            <button type="button" data-s1-component="button" data-variant="primary" data-size="lg">
              <span data-s1-part="label" {...(slot(partScope, "label").attrs ?? {})}>
                {slot(partScope, "label").content ?? "네"}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  throw new Error(`[s1-ui] modal: 승인되지 않은 breakName "${breakName}". 쓸 수 있는 값: ${BREAKS.join(", ")}`);
}
