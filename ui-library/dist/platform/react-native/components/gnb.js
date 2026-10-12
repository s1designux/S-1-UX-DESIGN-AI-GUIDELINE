/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Gnb — 승인된 배포본 마크업을 그대로 옮긴 React Native 부품.
   마크업을 새로 쓰지 않는다. dist/examples/gnb*.html 의 승인 인스턴스에서 옮긴 것이다.
   치수·색은 이 파일에 없다 — specs/gnb.js 의 표(배포본 CSS 를 캐스케이드까지 계산한 결과)에서 온다. */
import { useId, useState } from "react";
import { El, N, Root, attrProps, nestedFrom, propsOf } from "../engine.js";
import { useBehavior } from "../behaviors.js";
import { scopeOf, slot } from "../runtime.js";
import SPEC from "../specs/gnb.js";

export const BREAKS = ["pc"];
export const DEFAULT_BREAK = "pc";
export const VARIANTS = ["center-between","start"];
export const SIZES = ["md","sm","xsm"];
export const MODES = [];
export const PARTS = ["logo","leading","menus","menu","util","lang","lang-icon","lang-label","account","account-icon","menu-toggle","menu-icon"];

function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] gnb: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 동작의 처음 상태 — 승인 예제가 정한 값(고른 탭·열린 카드·체크된 줄 …). 템플릿(화면·모드·유형)마다 하나. */
const BEHAVIOR = [{}];

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

export default function S1Gnb({ variant, size, parts, onOpen, onClose, openId, defaultOpenId, partProps, style, outer, omit, lifted: initialLifted, forceState, ...rest }) {
  const uid = useId();
  const partScope = scopeOf(parts);
  assertAllowed("variant", variant, VARIANTS);
  assertAllowed("size", size, SIZES);
  const tpl = pickTemplate(DEFAULT_BREAK, undefined, undefined);
  /* 동작 — 눌렀을 때 무엇이 바뀌는지는 behaviors.js 가 정한다(승인 배포본의 동작 · platform/behavior.json). */
  const controller = useBehavior("top-bar", { ...BEHAVIOR[tpl], ...SPEC.templates[tpl].metrics }, { openId, defaultOpenId, onOpen, onClose, disabled: rest.disabled, rest });
  const lifted = initialLifted;

  if (tpl === 0) {
    return (
      <Root t={SPEC.templates[tpl]} k="n0" a={{ "data-s1-component": "gnb", "data-size": size ?? "sm", "data-variant": variant ?? "start", "aria-label": "주 메뉴 · 레귤러 예시" }} controller={controller} partProps={partProps} style={style} outer={outer} omit={omit} lifted={lifted} forceState={forceState} {...rest}>
        <El k="n1" a={{ "data-s1-part": "leading", ...(slot(partScope, "leading").attrs ?? {}) }}>
          <El k="n2" a={{ "data-s1-part": "logo", ...(slot(partScope, "logo").attrs ?? {}) }}>
            {slot(partScope, "logo").content ?? "SAMPLE LOGO"}
          </El>
          <El k="n3" a={{ "data-s1-part": "menus", ...(slot(partScope, "menus").attrs ?? {}) }}>
            <El k="n4" a={{  }}>
              <El k="n5" a={{ "data-s1-part": "menu", "aria-current": "page", ...(slot(partScope, "menu").attrs ?? {}) }}>
                {slot(partScope, "menu").content ?? "공지사항"}
              </El>
            </El>
            <El k="n6" a={{  }}>
              <El k="n7" a={{ "data-s1-part": "menu", "aria-expanded": "false", "aria-controls": "gnb-sub-menu-a-service", ...(slot(partScope, "menu").attrs ?? {}) }}>
                {slot(partScope, "menu").content ?? "서비스"}
              </El>
            </El>
            <El k="n8" a={{  }}>
              <El k="n9" a={{ "data-s1-part": "menu", "aria-expanded": "false", "aria-controls": "gnb-sub-menu-a-stats", ...(slot(partScope, "menu").attrs ?? {}) }}>
                {slot(partScope, "menu").content ?? "통계"}
              </El>
            </El>
          </El>
        </El>
        <El k="n10" a={{ "data-s1-part": "util", ...(slot(partScope, "util").attrs ?? {}) }}>
          <El k="n11" a={{ "type": "button", "data-s1-part": "lang", ...(slot(partScope, "lang").attrs ?? {}) }}>
            <El k="n12" a={{ "data-s1-part": "lang-icon", "aria-hidden": "true", ...(slot(partScope, "langIcon").attrs ?? {}) }}>
              {slot(partScope, "langIcon").content ?? ""}
            </El>
            <El k="n13" a={{ "data-s1-part": "lang-label", ...(slot(partScope, "langLabel").attrs ?? {}) }}>
              {slot(partScope, "langLabel").content ?? "한국어"}
            </El>
          </El>
          <El k="n14" a={{ "type": "button", "data-s1-part": "account", "aria-label": "계정", ...(slot(partScope, "account").attrs ?? {}) }}>
            <El k="n15" a={{ "data-s1-part": "account-icon", "aria-hidden": "true", ...(slot(partScope, "accountIcon").attrs ?? {}) }}>
              {slot(partScope, "accountIcon").content ?? ""}
            </El>
          </El>
          <El k="n16" a={{ "type": "button", "data-s1-part": "menu-toggle", "aria-label": "전체 메뉴", ...(slot(partScope, "menuToggle").attrs ?? {}) }}>
            <El k="n17" a={{ "data-s1-part": "menu-icon", "aria-hidden": "true", ...(slot(partScope, "menuIcon").attrs ?? {}) }}>
              {slot(partScope, "menuIcon").content ?? ""}
            </El>
          </El>
        </El>
      </Root>
    );
  }
  throw new Error("[s1-ui] gnb: 그릴 템플릿을 고르지 못했습니다.");
}
