/* S1 UI — React Native 그리기 엔진.
 *
 * 이 파일은 손으로 쓴 **범용 엔진**이다. 값(치수·색)은 한 자리도 들어 있지 않다.
 * 부품마다 생성된 표(specs/*.js)가 "이 요소가 이 상태일 때 최종 스타일" 을 정해 두었고,
 * 엔진은 지금 상태가 무엇인지 읽어 표에서 골라 React Native 요소로 옮기기만 한다.
 *
 *   표 한 칸 = 배포본 CSS 를 캐스케이드까지 계산한 결과(빌드 때 css-model 로 계산)
 *   상태     = 속성(aria-selected 등) + 상호작용(hover·pressed·focus·disabled·checked)
 *
 * 웹과 달라지는 점은 README 「원리상 다른 점」 에 적혀 있다.
 */
import {
  Children, cloneElement, createContext, createElement as h, Fragment, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState
} from "react";
import { Image, Modal, Platform, Pressable, ScrollView, Text, TextInput, View, useColorScheme, useWindowDimensions } from "react-native";
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";
import { COLORS, SHADOWS } from "./tokens.js";
import { ICONS } from "./icons.js";
import { IMAGES } from "./images.js";

const ABSENT = "∅";
const OTHER = "•";
const EMPTY = Object.freeze({});
const IS_WEB = Platform.OS === "web";

/* ── 서체·테마 ───────────────────────────────────────────────────────── */

const ThemeContext = createContext({ dark: false, fontFamily: undefined, inline: false });

/**
 * 앱 맨 위에 한 번 둔다.
 *   dark        true/false 로 고정하거나, 생략하면 기기 설정(useColorScheme)을 따른다.
 *   fontFamily  Pretendard 를 expo-font 로 불러온 뒤 그 이름을 준다.
 *               문자열 하나("Pretendard") — 굵기는 fontWeight 로 고른다(웹·iOS)
 *               또는 굵기별 이름 {400: "Pretendard-Regular", 500: "Pretendard-Medium", …}(안드로이드 권장)
 *   inline      true 면 모달·바텀시트를 RN Modal 이 아니라 놓인 자리 안에 그린다(미리보기·갤러리용).
 */
export function S1Provider({ dark, fontFamily, inline = false, children }) {
  const scheme = useColorScheme();
  const isDark = dark ?? scheme === "dark";
  const value = useMemo(() => ({ dark: isDark, fontFamily, inline }), [isDark, fontFamily, inline]);
  const chain = useMemo(() => ({
    nodes: { w: { k: "w", a: { "data-theme": isDark ? "dark" : "light" }, p: EMPTY } },
    layout: { flex: false, column: true },
    text: EMPTY
  }), [isDark]);
  return h(ThemeContext.Provider, { value }, h(ChainContext.Provider, { value: chain }, children));
}

export const useS1 = () => useContext(ThemeContext);

/** 토큰 색 → 지금 테마의 색 문자열 */
export function paint(name, dark, current) {
  if (name === undefined || name === null) return undefined;
  if (name === "transparent") return "transparent";
  if (name === "currentColor") return current;
  const pair = COLORS[name];
  if (pair === undefined) throw new Error(`[s1-ui] 팔레트에 없는 색: ${name}`);
  return dark ? pair[1] : pair[0];
}

function fontProps(declared, fontFamily) {
  /* 굵기를 안 정한 글자는 CSS 초기값(보통 400)으로 — 서체는 그래도 같은 것을 써야 글자 폭이 같다. */
  const weight = declared ?? 400;
  if (fontFamily === undefined || fontFamily === null) return { fontWeight: String(weight) };
  if (typeof fontFamily === "string") return { fontFamily, fontWeight: String(weight) };
  if (typeof fontFamily === "function") return { fontFamily: fontFamily(weight) };
  const known = Object.keys(fontFamily).map(Number).sort((a, b) => a - b);
  const hit = fontFamily[weight] !== undefined ? weight : known.filter((w) => w <= weight).pop() ?? known[0];
  return { fontFamily: fontFamily[hit] };
}

/* ── 키보드로 조작 중인지(웹) — :focus-visible 판정 ─────────────────── */

let keyboardModality = false;
if (IS_WEB && typeof document !== "undefined") {
  document.addEventListener("keydown", () => { keyboardModality = true; }, true);
  document.addEventListener("pointerdown", () => { keyboardModality = false; }, true);
}

/* ── 표 읽기 ─────────────────────────────────────────────────────────── */

const ChainContext = createContext({ nodes: EMPTY, layout: { flex: false, column: true }, text: EMPTY });
const RootContext = createContext(null);

const isOn = (value) => value !== undefined && value !== null && value !== false && value !== "false";

function normalize(value, domain) {
  if (value === undefined || value === null || value === false) return ABSENT;
  const text = value === true ? "" : String(value);
  return domain.includes(text) ? text : OTHER;
}

function readDim(dim, self, nodes, lifted, at) {
  const info = dim.n === self.k ? self : (nodes[dim.n] ?? lifted[dim.n]);
  if (dim.a !== undefined) return normalize(info?.a?.[dim.a], dim.d);
  if (dim.p !== undefined) return info?.p?.[dim.p] ? 1 : 0;
  if (at === undefined) return 1;      // 목록의 한 칸이 아니면 처음이자 마지막
  return dim.pos === "first-child" ? (at[0] === 0 ? 1 : 0) : (at[0] === at[1] - 1 ? 1 : 0);
}

function pick(template, key, self, nodes, lifted, at) {
  const table = template.tables[key];
  if (table === undefined) return undefined;
  if (table.s !== undefined) return template.styles[table.s];
  const parts = new Array(table.dims.length);
  for (let i = 0; i < table.dims.length; i += 1) parts[i] = readDim(table.dims[i], self, nodes, lifted, at);
  const index = table.map[parts.join("|")];
  if (index === undefined) {
    throw new Error(`[s1-ui] ${template.id}: 표에 없는 상태 조합입니다 — ${key} [${parts.join("|")}]. 승인되지 않은 속성 값을 주었는지 확인하세요.`);
  }
  return template.styles[index];
}

/* ── 스타일 옮기기 ───────────────────────────────────────────────────── */

const TEXT_KEYS = ["color", "fontSize", "fontWeight", "lineHeight", "lineHeightRatio", "letterSpacing", "letterSpacingEm", "textAlign", "underline", "nowrap", "textTransform"];

/** 상속되는 글자 속성을 합친다. em·배수는 선언한 요소 자신의 글자 크기로 풀어 상속한다(CSS 와 같다). */
function mergeText(inherited, style) {
  let merged = inherited;
  const set = (patch) => { merged = merged === inherited ? { ...inherited, ...patch } : Object.assign(merged, patch); };
  for (const key of ["color", "fontSize", "fontWeight", "textAlign", "underline", "nowrap", "textTransform"]) {
    if (style[key] !== undefined) set({ [key]: style[key] });
  }
  if (style.lineHeight !== undefined) set({ lineHeight: style.lineHeight, lineHeightRatio: undefined });
  if (style.lineHeightRatio !== undefined) set({ lineHeightRatio: style.lineHeightRatio, lineHeight: undefined });
  if (style.letterSpacing !== undefined) set({ letterSpacing: style.letterSpacing });
  else if (style.letterSpacingEm !== undefined) set({ letterSpacing: style.letterSpacingEm * (merged.fontSize ?? 16) });
  return merged;
}

function textStyleOf(text, env) {
  const out = {};
  const color = paint(text.color, env.dark, undefined);
  if (color !== undefined) out.color = color;
  /* 글자 크기를 아무도 안 정했으면 CSS 초기값(16)이다 — RN 기본(14)을 쓰면 같은 CSS 가 다른 크기로 읽힌다. */
  const size = text.fontSize ?? 16;
  out.fontSize = size;
  Object.assign(out, fontProps(text.fontWeight, env.fontFamily));
  if (text.lineHeight !== undefined) out.lineHeight = text.lineHeight;
  else if (text.lineHeightRatio !== undefined) out.lineHeight = text.lineHeightRatio * size;
  if (text.letterSpacing !== undefined) out.letterSpacing = text.letterSpacing;
  if (text.textAlign !== undefined) out.textAlign = text.textAlign;
  if (text.underline) out.textDecorationLine = "underline";
  if (text.textTransform !== undefined && text.textTransform !== "none") out.textTransform = text.textTransform;
  return out;
}

const SIDES = ["Top", "Right", "Bottom", "Left"];

function size(value, win) {
  if (value !== null && typeof value === "object") {
    if (value.vw !== undefined) return (win.width * value.vw) / 100 + value.px;
    return (win.height * value.vh) / 100 + value.px;
  }
  return value;
}

const UA_BLOCK = new Set(["div", "ul", "li", "nav", "p", "h1", "h2", "h3", "header", "table", "thead", "tbody", "tr", "td", "th", "section", "hr", "form"]);

/**
 * 표의 한 칸 → View 스타일.
 *  parent  부모가 flex 컨테이너인가 / 세로로 쌓는가
 *  tag     태그의 기본 display 를 알아야 한다(span 은 inline, div 는 block)
 */
function boxOf(style, tag, parent, env, current, aspect) {
  const out = {};
  const display = style.display ?? (UA_BLOCK.has(tag) ? "block" : "inline");
  const flex = display === "flex" || display === "inline-flex";
  out.flexDirection = flex ? (style.flexDirection ?? "row") : "column";
  /* 표 — RN 에는 표 배치(table layout)가 없다. 행은 가로로 쌓고, 폭을 정하지 않은 칸은 남는 폭을 같은 몫으로 나눈다
     (CSS 의 table-layout: fixed 와 같다. 내용에 따라 열 폭이 달라지는 자동 배치는 따라 하지 않는다). */
  if (tag === "tr") out.flexDirection = "row";
  if (tag === "td" || tag === "th") {
    out.justifyContent = out.justifyContent ?? "center";
    if (style.width === undefined) { out.flexGrow = style.flexGrow ?? 1; out.flexBasis = 0; out.flexShrink = 1; }
    else out.flexShrink = 0;
  }
  const absolute = style.position === "absolute" || style.position === "fixed";
  if (absolute) out.position = "absolute";

  /* 블록 상자(display: block · 생략)에서는 flex 용 속성(align-items · justify-content · gap · flex-wrap)이 아무 일도 하지 않는다 —
     같은 규칙에 함께 적혀 있어도 표시 방식이 block 으로 바뀌었으면 버린다(예: 접힌 LNB 항목은 flex → block). */
  const blockLike = !flex && display !== "grid" && display !== "inline-grid";
  for (const key of ["flexWrap", "alignItems", "alignContent", "justifyContent", "alignSelf"]) {
    if (blockLike && key !== "alignSelf" && key !== "alignContent") continue;
    if (style[key] !== undefined) out[key] = style[key];
  }
  /* 블록 상자의 align-content — 내용 덩어리를 세로로 맞춘다(RN 에서는 세로로 쌓는 상자의 justifyContent 가 같은 일을 한다). */
  if (!flex && style.alignContent !== undefined) {
    delete out.alignContent;
    const mapped = { center: "center", "flex-end": "flex-end", end: "flex-end", "flex-start": "flex-start", start: "flex-start" }[style.alignContent];
    if (mapped !== undefined) out.justifyContent = mapped;
  }
  if (style.flexGrow !== undefined) out.flexGrow = style.flexGrow;
  if (style.flexBasis !== undefined) out.flexBasis = style.flexBasis;
  /* CSS flex 항목은 shrink 1 이지만 "최소 크기 auto" 가 있어 내용보다 작아지지 않는다(RN 에는 그 장치가 없다).
     그 장치를 끈 항목만(min-width/min-height 를 정했거나 넘침을 자르는 항목) 줄어들게 하고, 나머지는 RN 기본(0)대로 둔다. */
  if (style.flexShrink !== undefined) out.flexShrink = style.flexShrink;
  else if (parent.flex && !absolute && (style.minWidth !== undefined || style.minHeight !== undefined || style.overflow || style.scrollX || style.scrollY)) out.flexShrink = 1;

  /* 블록 부모 안의 인라인 계열은 내용만큼만 차지한다(왼쪽 정렬). 블록은 부모 폭을 채운다. */
  const inlineLevel = display === "inline-flex" || display === "inline-block" || display === "inline";
  /* 정렬은 부모의 text-align 이 정한다(text-align: center 안의 인라인 상자는 가운데에 선다). */
  if (!parent.flex && !absolute && out.alignSelf === undefined && (inlineLevel || style.widthFit)) {
    out.alignSelf = parent.textAlign === "center" ? "center" : parent.textAlign === "right" ? "flex-end" : "flex-start";
  }
  if (parent.flex && style.widthFit) out.flexShrink = 0;
  /* 접힌 grid(grid-template-rows: 0fr) 의 항목은 줄 높이 0 에 맞춰 높이가 0 이 된다. */
  if (parent.collapse) out.height = 0;

  for (const key of ["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "top", "right", "bottom", "left", "rowGap", "columnGap"]) {
    if (blockLike && (key === "rowGap" || key === "columnGap")) continue;
    if (style[key] !== undefined) out[key] = size(style[key], env.window);
  }
  for (const kind of ["padding", "margin"]) {
    for (const side of SIDES) {
      const key = `${kind}${side}`;
      if (style[key] !== undefined) out[key] = size(style[key], env.window);
      if (kind === "margin" && style[`${key}Auto`]) out[key] = "auto";
    }
  }
  for (const side of SIDES) {
    if (style[`border${side}Width`] !== undefined) out[`border${side}Width`] = style[`border${side}Width`];
    if (style[`border${side}Color`] !== undefined) out[`border${side}Color`] = paint(style[`border${side}Color`], env.dark, current);
  }
  for (const corner of ["TopLeft", "TopRight", "BottomRight", "BottomLeft"]) {
    const key = `border${corner}Radius`;
    if (style[key] !== undefined) out[key] = style[key];
  }
  if (style.backgroundColor !== undefined) out.backgroundColor = paint(style.backgroundColor, env.dark, current);
  if (style.opacity !== undefined) out.opacity = style.opacity;
  if (style.invisible) out.opacity = 0;
  if (style.gridCollapsed) out.height = 0;
  if (style.overflow) out.overflow = style.overflow;
  if (style.zIndex !== undefined) out.zIndex = style.zIndex;
  /* 그림(img)은 높이를 auto 로 두면 그림의 가로세로 비율이 높이를 정한다 — 자리표시 그림의 비율을 그대로 쓴다. */
  if (aspect !== undefined && style.height === undefined) out.aspectRatio = aspect;
  if (style.shadow) {
    const layers = [];
    for (const layer of style.shadow) {
      if (layer.token !== undefined) {
        const pair = SHADOWS[layer.token];
        if (pair === undefined) throw new Error(`[s1-ui] 그림자 토큰이 없습니다: ${layer.token}`);
        layers.push(...(env.dark ? pair[1] : pair[0]));
      } else {
        layers.push({
          offsetX: layer.x, offsetY: layer.y, blurRadius: layer.blur, spreadDistance: layer.spread,
          color: paint(layer.color, env.dark, current), ...(layer.inset ? { inset: true } : EMPTY)
        });
      }
    }
    out.boxShadow = layers;
  }
  if (style.transform) out.transform = style.transform.map(([name, value]) => ({ [name]: name === "rotate" ? `${value}deg` : value }));
  return { box: out, flex, absolute };
}

/* ── 아이콘 ──────────────────────────────────────────────────────────── */

/** 마스크 아이콘 — 웹은 SVG 를 mask 로 씌워 색을 입힌다. 여기서는 같은 path 에 색을 직접 칠한다. */
export function Icon({ name, color, style }) {
  const icon = ICONS[name];
  if (icon === undefined) throw new Error(`[s1-ui] 배포본에 없는 아이콘: ${name}. 쓸 수 있는 이름: ${Object.keys(ICONS).join(", ")}`);
  return h(
    Svg,
    { width: "100%", height: "100%", viewBox: `0 0 ${icon.w} ${icon.h}`, preserveAspectRatio: "xMidYMid meet", style, pointerEvents: "none" },
    icon.paths.map((path, index) => h(Path, {
      key: index,
      d: path.d,
      fill: path.fill ? color : "none",
      stroke: path.stroke ? color : undefined,
      strokeWidth: path.stroke ? path.strokeWidth : undefined,
      strokeLinecap: path.stroke ? path.cap : undefined,
      strokeLinejoin: path.stroke ? path.join : undefined,
      fillRule: path.fill ? path.rule : undefined
    }))
  );
}

/* 배경에 그린 한 줄(가로선) · 위아래 흐림 — CSS 의 background-image 에 해당한다 */
function Decoration({ style, dark, current, id }) {
  const nodes = [];
  if (style.line) {
    nodes.push(h(View, {
      key: "line", pointerEvents: "none",
      style: { position: "absolute", top: 0, left: style.line.insetX, right: style.line.insetX, height: style.line.height, backgroundColor: paint(style.line.color, dark, current) }
    }));
  }
  if (style.image) {
    const image = IMAGES[style.image.name];
    if (image === undefined) throw new Error(`[s1-ui] 배포본에 없는 그림: ${style.image.name}. 쓸 수 있는 이름: ${Object.keys(IMAGES).join(", ")}`);
    nodes.push(h(Image, { key: "picture", source: { uri: image.uri }, resizeMode: "cover", accessible: false, pointerEvents: "none", style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%" } }));
  }
  if (style.gradient) {
    const to = style.gradient.to;
    nodes.push(h(Svg, { key: "fade", width: "100%", height: "100%", style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, pointerEvents: "none", preserveAspectRatio: "none" },
      h(Defs, null, h(LinearGradient, { id: `fade-${id}`, x1: "0", y1: to === "bottom" ? "0" : "1", x2: "0", y2: to === "bottom" ? "1" : "0" },
        style.gradient.stops.map((stop, index) => h(Stop, { key: index, offset: String(stop.at), stopColor: paint(stop.color, dark, current), stopOpacity: String(stop.alpha) })))),
      h(Rect, { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#fade-${id})` })));
  }
  return nodes;
}

/* ── 상태 읽기 도우미 ────────────────────────────────────────────────── */

function hasContent(children) {
  let found = false;
  Children.forEach(children, (child) => {
    if (child === null || child === undefined || child === false || child === "") return;
    found = true;
  });
  return found;
}

/** 검수·미리보기에서 상태를 고정해 그릴 때 쓴다(forceState="hover" 등). */
const FORCED = { hover: { hover: true }, pressed: { active: true, hover: true }, active: { active: true, hover: true }, focus: { focus: true } };

const ARIA_PASS = ["aria-label", "aria-selected", "aria-checked", "aria-expanded", "aria-disabled", "aria-hidden", "aria-pressed", "aria-current", "aria-invalid", "aria-modal", "aria-haspopup", "aria-controls", "aria-labelledby", "aria-describedby"];

function accessibilityOf(a, meta, disabled, checked) {
  const props = {};
  const role = a.role ?? (meta.tag === "button" ? "button" : meta.tag === "a" ? "link" : meta.tag === "input" && (a.type === "checkbox" || a.type === "radio") ? a.type : undefined);
  if (role !== undefined) props.role = role;
  for (const name of ARIA_PASS) {
    if (a[name] === undefined) continue;
    if (["aria-controls", "aria-labelledby", "aria-describedby", "aria-haspopup", "aria-modal"].includes(name)) continue;
    const value = a[name];
    props[name] = value === "true" ? true : value === "false" ? false : value;
  }
  if (a.title !== undefined && props["aria-label"] === undefined) props["aria-label"] = a.title;
  if (disabled) props["aria-disabled"] = true;
  if (checked !== undefined && props["aria-checked"] === undefined && (role === "checkbox" || role === "radio" || role === "switch")) props["aria-checked"] = checked;
  return props;
}

function wrapText(children, textStyle, textProps) {
  if (children === undefined || children === null || children === false) return children;
  const out = [];
  let buffer = null;
  const flush = () => { if (buffer !== null) { out.push(h(Text, { key: `t${out.length}`, style: textStyle, ...textProps }, buffer)); buffer = null; } };
  Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") { buffer = (buffer ?? "") + String(child); return; }
    flush();
    if (child !== null && child !== undefined && child !== false) out.push(child);
  });
  flush();
  return out.length === 1 ? out[0] : out;
}

/* ── 한 요소 그리기 ──────────────────────────────────────────────────── */

/**
 * El — 템플릿의 요소 하나.
 *   k         요소 키(표의 이름)
 *   a         지금 이 요소의 속성들(variant·aria-*·data-* …)
 *   at        목록의 한 칸이면 [순번, 전체 개수]
 *   ctl       입력 요소로 그대로 넘어갈 값(value·onChangeText·placeholder …)
 *   onPress   눌렀을 때
 *   나머지     RN 요소에 그대로 붙는다(style·testID·accessibilityLabel …)
 */
export function El({ k, a: given = EMPTY, at, ctl = EMPTY, onPress: givenPress, children: givenChildren, style: userStyle, outer, forceState, props: itemProps, ...forwarded }) {
  const root = useContext(RootContext);
  const chain = useContext(ChainContext);
  const theme = useContext(ThemeContext);
  const win = useWindowDimensions();
  const template = root.t;
  const meta = template.nodes[k];
  const isRoot = k === "n0";

  /* 루트에는 웹처럼 속성을 바로 줄 수 있다 — aria-pressed="true" · data-state="selected" · hidden={false} 등.
     이 값들은 상태 표를 읽는 데 쓰이고 RN 요소로는 넘어가지 않는다. */
  let a = given;
  let rest = forwarded;
  if (isRoot) {
    for (const name of Object.keys(forwarded)) {
      if (/^(aria-|data-)/.test(name) || name === "hidden" || name === "readonly") {
        if (a === given) a = { ...given };
        const value = forwarded[name];
        if (name === "aria-label") { a[name] = value; continue; }
        a[name] = value === undefined || value === null || value === false ? undefined : value === true ? "" : String(value);
        if (rest === forwarded) rest = { ...forwarded };
        delete rest[name];
      }
    }
  }

  /* 동작(선택·열림·입력 등) — 부품의 controller 가 이 요소에 줄 속성·눌림·내용을 정한다(behaviors.js). */
  let children = givenChildren;
  let bound = EMPTY;
  if (root.controller !== undefined) {
    bound = root.controller.bind(meta.part, at, { k, meta, a, isRoot, children: givenChildren, up: (part) => ancestorOf(root, chain.nodes, part), nodes: chain.nodes }) ?? EMPTY;
    if (bound.a !== undefined) a = { ...a, ...bound.a };
    if (bound.children !== undefined) children = bound.children;
    /* 견본 하나를 데이터만큼 되풀이한다 — 달력 칸·시간 칸처럼 JS 가 개수를 정하는 목록.
       견본은 승인 예제의 칸 하나이고, 칸마다 속성·눌림·내용만 바뀐다. */
    if (bound.repeat !== undefined) {
      const sample = Children.toArray(children)[0];
      if (sample !== undefined) {
        const total = bound.repeat.length;
        children = bound.repeat.map((entry, index) => cloneElement(sample, {
          key: index,
          at: [index, total],
          a: { ...(sample.props.a ?? EMPTY), ...(entry.a ?? EMPTY) },
          onPress: entry.onPress ?? sample.props.onPress,
          ...(entry.content !== undefined ? { children: entry.content } : EMPTY),
          ...(entry.props !== undefined ? { props: entry.props } : EMPTY)
        }));
      }
    }
  }
  const partProp = meta.part !== undefined ? (root.partProps?.[meta.part] ?? root.partProps?.[camelOf(meta.part)]) : undefined;
  const onPress = composePress(bound.onPress, partProp?.onPress, itemProps?.onPress, givenPress);
  if (bound.props !== undefined || partProp !== undefined || itemProps !== undefined) {
    const merged = { ...(partProp ?? EMPTY), ...(itemProps ?? EMPTY), ...(bound.props ?? EMPTY), ...rest };
    delete merged.onPress;
    rest = merged;
  }

  /* 검수·미리보기에서 상태를 고정한다 — 루트는 forceState 로, 안쪽 칸은 partProps={{ trigger: { forceState: "hover" } }} 로. */
  const forcedState = isRoot ? forceState : rest.forceState;
  if (rest.forceState !== undefined) { if (rest === forwarded) rest = { ...forwarded }; delete rest.forceState; }
  const [live, setLive] = useState(() => (forcedState ? FORCED[forcedState] ?? EMPTY : EMPTY));   // hover·pressed·focus
  const disabled = isOn(a.disabled) || isOn(rest.disabled);
  const checked = isOn(a.checked);
  const empty = !hasContent(children);

  const info = {
    k,
    a,
    at,
    p: {
      hover: live.hover === true,
      active: live.active === true,
      focus: live.focus === true,
      "focus-visible": live.focus === true && (meta.tag === "input" || meta.tag === "textarea" || keyboardModality),
      "focus-within": isRoot ? root.focusCount > 0 || live.focus === true : live.focus === true,
      disabled,
      checked,
      empty
    }
  };

  /* 다른 요소가 이 요소의 상태를 읽는 경우(:has · 형제) — 루트에 알려 둔다. */
  const report = root.report;
  const liftKey = meta.lift ? JSON.stringify([a, info.p]) : null;
  useLayoutEffect(() => { if (meta.lift) report(k, info); }, [liftKey]);

  const nodes = { ...chain.nodes, [k]: info };
  const base = pick(template, k, info, chain.nodes, root.lifted, at);
  if (base === undefined) throw new Error(`[s1-ui] ${template.id}: 요소 ${k} 의 표가 없습니다.`);
  const style = outer && isRoot ? { ...base, ...outer } : base;

  const textMerged = mergeText(chain.text, style);
  const env = { dark: theme.dark, fontFamily: theme.fontFamily, window: win };

  /* hidden 이어도 display 를 안 정한 요소는 브라우저 기본값(display:none)이 적용된다.
     controller 가 숨긴 것(달력의 다른 보기·닫힌 팝업 등)은 CSS display 와 상관없이 숨긴다. */
  const controllerHidden = bound.a !== undefined && bound.a.hidden !== undefined && bound.a.hidden !== false;
  const hidden = controllerHidden || style.display === "none" || (a.hidden !== undefined && a.hidden !== false && style.display === undefined);
  if (hidden) return null;
  if (root.omit !== undefined && meta.part !== undefined && root.omit.includes(meta.part)) return null;

  const currentColor = paint(textMerged.color, theme.dark, undefined);
  const { box, flex } = boxOf(style, meta.tag, chain.layout, env, currentColor, meta.aspect);
  const layout = { flex, column: box.flexDirection === "column", collapse: Boolean(style.gridCollapsed), textAlign: textMerged.textAlign };

  /* 1) 입력창 */
  const type = a.type;
  const isCheck = meta.tag === "input" && (type === "checkbox" || type === "radio");
  const isField = (meta.tag === "input" && !isCheck) || meta.tag === "textarea";

  /* 보조 선택: 가상요소(::before / ::after / ::placeholder) */
  const pseudo = (which) => {
    if (!meta.ps || !meta.ps.includes(which)) return null;
    return h(Pseudo, { key: `${k}::${which}`, hostKey: k, which, info, at, textMerged, parent: layout, env, dark: theme.dark });
  };

  /* 사용자가 넘긴 RN 속성(testID · accessibilityLabel · onLongPress …)은 그대로 RN 요소에 붙는다. */
  const passthrough = {};
  for (const name of Object.keys(rest)) {
    if (["disabled", "onPressIn", "onPressOut", "onFocus", "onBlur", "onRequestClose", "onClose", "scrollRef"].includes(name)) continue;
    passthrough[name] = rest[name];
  }
  const common = { ...passthrough };
  if (IS_WEB) common.dataSet = { s1k: k, s1part: meta.part ?? "", ...(isRoot ? { s1c: template.id } : a["data-s1-component"] !== undefined ? { s1c: a["data-s1-component"] } : EMPTY) };
  if (style.pointerEventsNone) common.pointerEvents = "none";

  /* 루트가 화면 전체를 덮는 겹침(모달·바텀시트)이면 RN Modal 에 얹는다. inline(미리보기)이면 놓인 자리 안에 그린다. */
  const finish = (element) => ((isRoot ? template.overlay : style.position === "fixed") && !theme.inline
    ? h(Modal, { transparent: true, visible: true, animationType: "fade", onRequestClose: rest.onRequestClose ?? rest.onClose }, element)
    : element);

  const ownText = style;
  const textStyleBase = textStyleOf(textMerged, env);
  /* white-space: nowrap — 웹은 줄을 바꾸지 않고 상자 밖으로 흘려 보여 준다(자르지 않는다). RN 의 numberOfLines 는 잘라 버리므로,
     가로로 쌓는 상자 안에서는 글자가 줄어들지 않게(flexShrink 0) 두어 같은 모양이 되게 한다. 말줄임(text-overflow: ellipsis)은 그대로 자른다. */
  const nowrapRow = Boolean(textMerged.nowrap) && !style.ellipsis && flex && box.flexDirection === "row";
  const textStyle = nowrapRow ? { ...textStyleBase, flexShrink: 0 } : textStyleBase;
  const textProps = !nowrapRow && (textMerged.nowrap || style.ellipsis)
    ? { numberOfLines: 1, ellipsizeMode: style.ellipsis ? "tail" : "clip" }
    : EMPTY;

  const access = accessibilityOf(a, meta, disabled, isCheck ? checked : undefined);

  /* 아이콘 요소(마스크) — 배경색이 곧 아이콘 색이다. */
  if (style.icon !== undefined) {
    const color = paint(style.backgroundColor, theme.dark, currentColor);
    const iconBox = { ...box };
    delete iconBox.backgroundColor;
    /* 소비자가 자기 아이콘을 끼운 경우(웹의 --s1-icon 덮어쓰기에 해당) — 그것을 그대로 그린다. */
    const custom = hasContent(children) ? children : null;
    if (IS_WEB && common.dataSet) common.dataSet = { ...common.dataSet, s1icon: color ?? "" };
    return finish(h(View, { style: [iconBox, userStyle], ...common, ...access, accessible: false }, custom ?? h(Icon, { name: style.icon, color }), pseudo("before"), pseudo("after")));
  }

  const interactiveEvents = {};
  const ix = meta.ix ?? [];
  if (ix.includes("hover")) {
    interactiveEvents.onHoverIn = () => setLive((s) => (s.hover ? s : { ...s, hover: true }));
    interactiveEvents.onHoverOut = () => setLive((s) => (s.hover ? { ...s, hover: false } : s));
  }
  if (ix.includes("active")) {
    interactiveEvents.onPressIn = (event) => { setLive((s) => (s.active ? s : { ...s, active: true })); rest.onPressIn?.(event); };
    interactiveEvents.onPressOut = (event) => { setLive((s) => (s.active ? { ...s, active: false } : s)); rest.onPressOut?.(event); };
  }
  const trackFocus = ix.includes("focus") || isRoot;
  if (trackFocus) {
    interactiveEvents.onFocus = (event) => { setLive((s) => (s.focus ? s : { ...s, focus: true })); root.focusIn(); rest.onFocus?.(event); ctl.onFocus?.(event); };
    interactiveEvents.onBlur = (event) => { setLive((s) => (s.focus ? { ...s, focus: false } : s)); root.focusOut(); rest.onBlur?.(event); ctl.onBlur?.(event); };
  }

  const provide = (content) => h(ChainContext.Provider, { value: { nodes, layout, text: textMerged } }, content);

  if (isField) {
    const multiline = meta.tag === "textarea";
    const placeholderStyle = meta.ps && meta.ps.includes("placeholder")
      ? pick(template, `${k}::placeholder`, info, chain.nodes, root.lifted, at)
      : undefined;
    const props = {
      ...common,
      ...access,
      style: [box, textStyle, userStyle],
      multiline,
      editable: !disabled && !isOn(a.readonly) && !isOn(ctl.readOnly),
      placeholder: ctl.placeholder ?? a.placeholder,
      placeholderTextColor: paint(placeholderStyle?.color, theme.dark, undefined),
      value: ctl.value,
      defaultValue: ctl.defaultValue,
      onChangeText: ctl.onChangeText,
      secureTextEntry: type === "password" && !ctl.reveal,
      maxLength: ctl.maxLength,
      ref: ctl.inputRef,
      ...interactiveEvents
    };
    if (props.value === undefined) delete props.value;
    if (props.defaultValue === undefined) delete props.defaultValue;
    return finish(h(TextInput, props));
  }

  const kids = [(style.line || style.gradient || style.image) ? h(Decoration, { key: "decor", style, dark: theme.dark, current: currentColor, id: `${template.id}-${k}-${(at?.[0] ?? 0)}` }) : null, pseudo("before"), children === undefined ? null : wrapText(children, textStyle, textProps), pseudo("after")];
  const content = provide(kids);

  const pressable = onPress !== undefined || ix.length > 0 || isCheck || meta.tag === "button";
  const wantsScroll = style.scrollY || style.scrollX;

  if (wantsScroll) {
    const outerBox = {};
    const innerBox = {};
    for (const [key, value] of Object.entries(box)) {
      if (/^padding|^gap|^rowGap|^columnGap|^flexDirection|^alignItems|^justifyContent|^flexWrap/.test(key)) innerBox[key] = value;
      else outerBox[key] = value;
    }
    innerBox.flexGrow = 1;
    return finish(h(ScrollView, { ref: rest.scrollRef, style: [outerBox, userStyle], contentContainerStyle: innerBox, horizontal: Boolean(style.scrollX && !style.scrollY), showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, ...common, ...access }, content));
  }

  if (pressable) {
    return finish(h(Pressable, {
      style: [box, userStyle],
      onPress: disabled ? undefined : onPress,
      disabled: disabled || (onPress === undefined && !ix.length),
      accessible: onPress !== undefined || isCheck || meta.tag === "button",
      ...common,
      ...access,
      ...interactiveEvents
    }, content));
  }
  return finish(h(View, { style: [box, userStyle], ...common, ...access, ...(IS_WEB ? EMPTY : { accessible: false }) }, content));
}

/** ::before / ::after — 호스트 요소의 상태를 읽는다. 내용이 있는(content) 경우에만 그린다. */
function Pseudo({ hostKey, which, info, at, textMerged, parent, env, dark }) {
  const root = useContext(RootContext);
  const chain = useContext(ChainContext);
  const key = `${hostKey}::${which}`;
  const style = pick(root.t, key, info, chain.nodes, root.lifted, at);
  if (style === undefined || style.content === undefined || style.display === "none") return null;
  const current = paint(textMerged.color, dark, undefined);
  const { box } = boxOf(style, "div", parent, env, current);
  if (style.icon !== undefined) {
    const iconBox = { ...box };
    const color = paint(style.backgroundColor, dark, current);
    delete iconBox.backgroundColor;
    return h(View, { style: iconBox, pointerEvents: "none", ...(IS_WEB ? { dataSet: { s1k: key, s1icon: color ?? "" } } : EMPTY) }, h(Icon, { name: style.icon, color }));
  }
  return h(View, { style: box, pointerEvents: "none", ...(IS_WEB ? { dataSet: { s1k: key } } : EMPTY) });
}

/* ── 루트 ────────────────────────────────────────────────────────────── */

/**
 * Root — 부품 하나의 바깥. 표를 문맥으로 내려 주고, 요소들이 서로의 상태를 읽을 자리를 만든다.
 *   t         이 화면(break)의 템플릿 표
 *   omit      그리지 않을 part 이름들(다른 부품 안에 들어갈 때 쓰지 않는 칸)
 *   lifted    처음부터 알려 줄 요소 상태 { n3: { a, p } }
 */
export function Root({ t, omit, lifted: initial, placeholder, controller, partProps, children, ...props }) {
  const [liftedState, setLifted] = useState(initial ?? EMPTY);
  const [focusCount, setFocusCount] = useState(0);
  const report = useCallback((k, info) => {
    setLifted((previous) => {
      const before = previous[k];
      if (before && JSON.stringify([before.a, before.p]) === JSON.stringify([info.a, info.p])) return previous;
      return { ...previous, [k]: { k, a: info.a, p: info.p } };
    });
  }, []);
  const value = useMemo(() => ({
    t,
    omit,
    lifted: liftedState,
    report,
    focusCount,
    focusIn: () => setFocusCount((n) => n + 1),
    focusOut: () => setFocusCount((n) => Math.max(0, n - 1)),
    placeholder,
    controller,
    partProps
  }), [t, omit, liftedState, report, focusCount, placeholder, controller, partProps]);
  return h(RootContext.Provider, { value }, h(El, { k: "n0", ...props }, children));
}

/* ── 안에 들어가는 다른 부품 ─────────────────────────────────────────── */

/**
 * N — 다른 부품이 그 자리에 들어간 경우. 바깥 부품의 CSS 가 이 자리에 주는 값(크기·간격 등)을
 *     바깥 스타일(outer)로 계산해 넘기고, 안쪽 모양은 그 부품이 그린다.
 */
export function N({ k, as: Component, p = EMPTY, a: given = EMPTY, at, ...rest }) {
  const root = useContext(RootContext);
  const chain = useContext(ChainContext);
  const meta = root.t.nodes[k];
  /* 바깥 부품의 controller 가 안에 들어간 부품에 줄 값(선택 상태·눌림·열림 …) */
  let a = given;
  let props = p;
  if (root.controller !== undefined) {
    const bound = root.controller.bind(undefined, at, { k, meta, a, nested: meta.nested, isRoot: false, up: (part) => ancestorOf(root, chain.nodes, part), nodes: chain.nodes }) ?? EMPTY;
    if (bound.a !== undefined) a = { ...a, ...bound.a };
    if (bound.p !== undefined) props = { ...p, ...bound.p };
  }
  const info = { k, a, at, p: EMPTY };
  const outer = pick(root.t, k, info, chain.nodes, root.lifted, at);
  const nodes = { ...chain.nodes, [k]: info };
  return h(ChainContext.Provider, { value: { nodes, layout: chain.layout, text: chain.text } }, h(Component, { ...props, ...rest, outer }));
}

const camelOf = (name) => name.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

/** 눌렀을 때 — 여러 곳에서 온 핸들러를 차례로 부른다(controller → partProps → 항목 → 직접 준 것). */
function composePress(...handlers) {
  const list = handlers.filter((one) => typeof one === "function");
  if (list.length === 0) return undefined;
  if (list.length === 1) return list[0];
  return (event) => { for (const one of list) one(event); };
}

/** 가장 가까운 조상 중 이 part 인 요소의 정보 */
function ancestorOf(root, nodes, part) {
  const keys = Object.keys(nodes);
  for (let i = keys.length - 1; i >= 0; i -= 1) {
    const meta = root.t.nodes[keys[i]];
    if (meta && meta.part === part) return nodes[keys[i]];
  }
  return undefined;
}

/** 목록 항목이 자기 요소에 직접 주는 RN 속성(항목 데이터의 props) */
export function propsOf(scope) {
  const value = scope?.props;
  return value !== null && typeof value === "object" ? value : undefined;
}

/** 목록 항목이 안쪽 입력 요소에 준 속성(attrs) → 안에 들어간 부품의 prop */
export function nestedFrom(attrs) {
  if (!attrs) return EMPTY;
  const out = {};
  /* 값이 undefined 로 "있는" 경우는 "이 항목은 그 상태가 아니다" 라는 뜻이다(틀 항목이 checked 였던 경우). */
  if (Object.hasOwn(attrs, "checked")) out.checked = isOn(attrs.checked);
  if (Object.hasOwn(attrs, "disabled")) out.disabled = isOn(attrs.disabled);
  return out;
}

/** 목록 항목의 속성(attrs) 중 상태를 말하는 것(data-* · aria-*)만 → 안에 들어간 부품의 prop */
export function attrProps(attrs) {
  if (!attrs) return EMPTY;
  const out = {};
  for (const [name, value] of Object.entries(attrs)) {
    if (/^(aria-|data-)/.test(name) && !name.startsWith("data-s1") && name !== "aria-hidden") out[name] = value;
  }
  return out;
}

/** 인라인 SVG 안의 currentColor — 지금 글자색 */
export function useSvgColor() {
  const chain = useContext(ChainContext);
  const theme = useContext(ThemeContext);
  return paint(chain.text.color, theme.dark, undefined);
}

export { ABSENT, OTHER, Fragment };
