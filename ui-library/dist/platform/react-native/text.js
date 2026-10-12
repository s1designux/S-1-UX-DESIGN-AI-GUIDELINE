/* S1Text — 이름 붙은 텍스트 스타일(typography.js)로 글자를 그린다.
 *   <S1Text type="body-14r" color="--color-text-body-primary">본문</S1Text>
 * 크기·굵기·줄간격·자간을 낱개로 적지 말고 이름으로 부른다. 색은 토큰 이름(팔레트 쌍)이다. */
import { createElement as h } from "react";
import { Text } from "react-native";
import { paint, useS1 } from "./engine.js";
import { TYPES } from "./typography.js";

export function S1Text({ type = "body-14r", color, style, children, ...rest }) {
  const { dark, fontFamily } = useS1();
  const spec = TYPES[type];
  if (spec === undefined) throw new Error(`[s1-ui] 승인 목록에 없는 텍스트 스타일: ${type}. 쓸 수 있는 이름: ${Object.keys(TYPES).join(", ")}`);
  const family = fontFamily === undefined || fontFamily === null ? { fontWeight: String(spec.fontWeight) }
    : typeof fontFamily === "string" ? { fontFamily, fontWeight: String(spec.fontWeight) }
      : typeof fontFamily === "function" ? { fontFamily: fontFamily(spec.fontWeight) }
        : { fontFamily: fontFamily[spec.fontWeight] ?? fontFamily[Math.max(...Object.keys(fontFamily).map(Number).filter((w) => w <= spec.fontWeight))] };
  return h(Text, {
    ...rest,
    style: [{
      fontSize: spec.fontSize,
      lineHeight: spec.fontSize * spec.lineHeight,
      letterSpacing: spec.fontSize * spec.letterSpacing,
      ...family,
      ...(color !== undefined ? { color: paint(color, dark) } : {})
    }, style]
  }, children);
}
