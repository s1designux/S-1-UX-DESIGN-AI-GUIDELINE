/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1ListRow — 승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트.
   마크업을 새로 쓰지 않는다. dist/examples/list-row*.html 의 승인 인스턴스를 JSX 로 옮긴 것이다.
   서버에서 그려도 같은 마크업이 나온다. */
import { useId, useRef } from "react";
import { scopeOf, slot } from "./runtime.js";
// list-row 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["nav","value","read","pick","agree","switch","thumb"];
export const SIZES = [];
export const PARTS = ["lead","thumbnail","text","title","description","trail","value","chevron","check","open"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] list-row: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

export default function S1ListRow({ variant, parts, className, style, ...rest }) {
  const uid = useId();
  const rootRef = useRef(null);
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);

  return (
      <button type="button" data-s1-component="list-row" data-type={variant ?? "nav"} data-state="default" ref={rootRef} className={className} style={style} {...rest}>
        <div data-s1-part="text" {...(slot(partScope, "text").attrs ?? {})}>
          <span data-s1-part="title" {...(slot(partScope, "title").attrs ?? {})}>
            {slot(partScope, "title").content ?? "설정"}
          </span>
          <span data-s1-part="description" {...(slot(partScope, "description").attrs ?? {})}>
            {slot(partScope, "description").content ?? "환경설정 및 계정 관리"}
          </span>
        </div>
        <span data-s1-part="trail" {...(slot(partScope, "trail").attrs ?? {})}>
          <span data-s1-part="chevron" aria-hidden="true" {...(slot(partScope, "chevron").attrs ?? {})}>
            {slot(partScope, "chevron").content ?? ""}
          </span>
        </span>
      </button>
  );
}
