/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1ModalContent — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/modal-content*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useEffect, useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
import { init, destroy } from "../../components/modal-content.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["single","dual"];
export const SIZES = ["md","lg","xl"];
export const PARTS = ["overlay","panel","header","title","close","content-area","content","content-label","footer"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] modal-content: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1ModalContent({ variant, size, parts, onOpen, onClose, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);

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
    const bound = [["s1:modal-content:open", onOpen], ["s1:modal-content:close", onClose]]
      .filter(([, handler]) => typeof handler === "function");
    for (const [eventName, handler] of bound) root.addEventListener(eventName, handler);
    return () => { for (const [eventName, handler] of bound) root.removeEventListener(eventName, handler); };
  });

  return (
      <div data-s1-component="modal-content" data-size={size ?? "md"} data-footer={variant ?? "dual"} hidden ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="overlay" {...(slot(partScope, "overlay").attrs ?? {})}>
          {slot(partScope, "overlay").content ?? ""}
        </div>
        <div data-s1-part="panel" role="dialog" aria-modal="true" aria-labelledby={`${uid}-title`} tabIndex="-1" {...(slot(partScope, "panel").attrs ?? {})}>
          <div data-s1-part="header" {...(slot(partScope, "header").attrs ?? {})}>
            <h2 data-s1-part="title" id={`${uid}-title`} {...(slot(partScope, "title").attrs ?? {})}>
              {slot(partScope, "title").content ?? "제목 영역"}
            </h2>
            <button type="button" data-s1-part="close" aria-label="닫기" {...(slot(partScope, "close").attrs ?? {})}>
              {slot(partScope, "close").content ?? ""}
            </button>
          </div>
          <div data-s1-part="content-area" {...(slot(partScope, "contentArea").attrs ?? {})}>
            <div data-s1-part="content" {...(slot(partScope, "content").attrs ?? {})}>
              <span data-s1-part="content-label" {...(slot(partScope, "contentLabel").attrs ?? {})}>
                {slot(partScope, "contentLabel").content ?? "컨텐츠 영역"}
              </span>
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
}
