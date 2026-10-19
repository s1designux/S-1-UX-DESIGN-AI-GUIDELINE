<!-- 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. -->
<!-- S1Ci — 승인된 배포본을 그대로 마운트하는 Vue 껍데기.
     MARKUPS 는 dist/examples/ci*.html 안의 승인된 인스턴스를 그대로 도려낸 것이다. -->
<script setup>
import { getCurrentInstance, onBeforeUnmount, onMounted, ref, watch, watchEffect } from "vue";
// ci 는 JavaScript 런타임이 없다 — 브라우저 기본 동작만 쓴다.

const MARKUPS = {
  "pc": "<span data-s1-component=\"ci\" data-brand=\"s1\" data-color=\"white\" role=\"img\" aria-label=\"에스원\"><svg viewBox=\"0 0 42 16\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M32.6826 14.3262H41.5254V16H30.6992V10.2461H32.6826V14.3262ZM10.1426 15.9902H8.32129V7.07812H7.39258C7.30419 11.1554 5.68825 13.0125 3.70117 13.0127C1.65723 13.0127 0 11.0554 0 6.73047C0 2.41216 1.65721 0.448242 3.70117 0.448242C5.52602 0.448409 7.03869 2.01912 7.34277 5.42676H8.32129V0.172852H10.1426V15.9902ZM12.9111 15.9902H11.084V0.173828H12.9111V15.9902ZM28.084 15.2305H15.084V13.5811H28.084V15.2305ZM41.2891 0.182617V13.0557H39.46V11.2832H36.459V9.64453H39.46V0.182617H41.2891ZM38.8672 8.87891H35.3379V12.1885H33.3799V8.87891H29.7305V7.3291H38.8672V8.87891ZM22.6143 2.46875C22.6143 4.89881 24.005 8.20501 27.7148 9.30078V11.0654C27.6961 11.063 23.8792 10.5615 21.583 6.69531C19.2775 10.5711 15.4512 11.0654 15.4512 11.0654V9.30078C19.1607 8.21325 20.5518 4.89883 20.5518 2.46875V0.551758H22.6143V2.46875ZM3.70215 2.41211C2.66837 2.41211 1.83011 3.41277 1.83008 6.7334C1.83008 10.0732 2.66835 11.0557 3.70215 11.0557C4.73624 11.0556 5.57422 10.0731 5.57422 6.7334C5.57418 3.41295 4.73622 2.41222 3.70215 2.41211ZM34.3525 0C36.6151 0 38.4492 1.17983 38.4492 3.41797C38.449 5.69092 36.615 6.83496 34.3525 6.83496C32.0903 6.83485 30.2561 5.69081 30.2559 3.41797C30.2559 1.17994 32.0901 0 34.3525 0ZM34.3486 1.57227C33.1672 1.57227 32.2091 2.36269 32.209 3.44043C32.209 4.51861 33.1671 5.30859 34.3486 5.30859C35.5303 5.3084 36.4883 4.51026 36.4883 3.44043C36.4882 2.35834 35.5302 1.57246 34.3486 1.57227Z\"/></svg></span>"
};
const DEFAULT_BREAK = "pc";
const BREAKS = ["pc"];
const VARIANTS = ["s1","samsung"];
const SIZES = [];
/* variant·size 속성 이름은 컴포넌트마다 다르다 — 승인된 마크업에서 읽어 온 것이다. */
const VARIANT_ATTRIBUTE = "data-brand";
const SIZE_ATTRIBUTE = null;

/* defineProps 는 컴파일 타임 매크로라 인자가 setup() 밖으로 끌어올려진다 —
   여기서 위 상수들을 참조하면 SFC 가 컴파일되지 않는다(Vue 3.2+ 하드 제약).
   그래서 허용목록을 리터럴로 박아 넣는다. 값의 출처는 위 상수와 같은 manifest 다.
   (2026-09-04 독립 검증에서 19종 전부 컴파일 실패로 발견) */
const props = defineProps({
  variant: { type: String, default: undefined, validator: (value) => ["s1","samsung"].includes(value) },
  size: { type: String, default: undefined, validator: (value) => true },
  breakName: { type: String, default: "pc", validator: (value) => ["pc"].includes(value) },
  parts: { type: Object, default: () => ({}) },
  attrs: { type: Object, default: () => ({}) }
});
const emit = defineEmits([]);

/* root 는 반드시 ref 여야 한다 — 보통 변수로 두면 watchEffect 가 setup 중 한 번 돌 때
   root 가 아직 없어 그대로 끝나고, 의존성이 하나도 등록되지 않아 **영원히 다시 돌지 않는다.**
   그러면 variant·size·parts 를 줘도 조용히 버려진다(오류도 경고도 없이).
   (2026-09-04 독립 검증 3차에서 19종 전부 이 상태로 발견) */
const host = ref(null);
const root = ref(null);
const listeners = [];

/* React 껍데기와 같게 승인되지 않은 값을 막는다 — Vue 의 validator 는 개발 빌드에서만 돈다. */
function assertAllowed(label, value, allowed) {
  if (value === undefined || allowed.length === 0 || allowed.includes(value)) return;
  throw new Error(`[s1-ui] ci: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

/* 같은 페이지에 껍데기가 여럿이어도 id 가 겹치지 않게, 인스턴스마다 접두사를 붙인다(React 껍데기의 useId 와 같은 목적).
   마크업 안의 id 와 그것을 가리키는 속성(aria-*·for·data-s1-open)을 함께 바꾼다. */
const uid = `s1v${getCurrentInstance()?.uid ?? 0}`;
function uniquifyIds(element) {
  const nodes = [element, ...element.querySelectorAll("*")];
  const ids = new Set(nodes.map((node) => node.id).filter(Boolean));
  if (!ids.size) return;
  const rename = (value) => (ids.has(value) ? `${uid}-${value}` : value);
  for (const node of nodes) {
    if (node.id) node.id = rename(node.id);
    for (const name of ["aria-labelledby", "aria-describedby", "aria-controls", "for", "data-s1-open"]) {
      const value = node.getAttribute(name);
      if (value) node.setAttribute(name, value.split(/\s+/).map(rename).join(" "));
    }
  }
}

function mount() {
  host.value.innerHTML = MARKUPS[props.breakName] ?? MARKUPS[DEFAULT_BREAK];
  const element = host.value.firstElementChild;
  uniquifyIds(element);
  for (const [eventName, emitName] of []) {
    const handler = (event) => emit(emitName, event.detail ?? event);
    element.addEventListener(eventName, handler);
    listeners.push([eventName, handler]);
  }
  root.value = element;
}

function unmount() {
  const element = root.value;
  if (!element) return;
  for (const [eventName, handler] of listeners.splice(0)) element.removeEventListener(eventName, handler);
  root.value = null;
}

onMounted(mount);
onBeforeUnmount(unmount);


/* break 가 바뀌면 마크업 자체가 다른 파일이라 다시 마운트해야 한다.
   mount() 는 onMounted 로 한 번만 도니 여기서 갈아 끼운다
   (React 껍데기의 useEffect(..., [breakName]) 와 같은 동작).
   (2026-09-04 독립 검증 4차에서 Vue 만 반영이 안 되는 것으로 발견) */
watch(() => props.breakName, () => {
  if (!root.value) return;
  unmount();
  mount();
});

watchEffect(() => {
  const element = root.value;          // ref 를 먼저 읽어 의존성을 등록한다
  if (!element) return;
  assertAllowed("variant", props.variant, VARIANTS);
  assertAllowed("size", props.size, SIZES);
  assertAllowed("breakName", props.breakName, BREAKS);
  if (props.variant !== undefined && VARIANT_ATTRIBUTE) element.setAttribute(VARIANT_ATTRIBUTE, props.variant);
  if (props.size !== undefined && SIZE_ATTRIBUTE) element.setAttribute(SIZE_ATTRIBUTE, props.size);
  for (const [key, value] of Object.entries(props.attrs)) {
    if (value === undefined || value === null || value === false) element.removeAttribute(key);
    else element.setAttribute(key, value === true ? "" : String(value));
  }
  for (const [name, text] of Object.entries(props.parts)) {
    const target = element.querySelector(`[data-s1-part="${name}"]`);
    if (target) target.textContent = text;
  }
});
</script>

<template>
  <div ref="host" style="display: contents" />
</template>
