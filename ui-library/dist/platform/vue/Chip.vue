<!-- 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. -->
<!-- S1Chip — 승인된 배포본을 그대로 마운트하는 Vue 껍데기.
     MARKUPS 는 dist/examples/chip*.html 안의 승인된 인스턴스를 그대로 도려낸 것이다. -->
<script setup>
import { getCurrentInstance, onBeforeUnmount, onMounted, ref, watch, watchEffect } from "vue";
import { init, destroy } from "../../components/chip.js";

const MARKUPS = {
  "pc": "<button type=\"button\" data-s1-component=\"chip\" data-variant=\"line\" data-size=\"md\" data-break=\"pc\" aria-pressed=\"false\">\n  <span data-s1-part=\"label\">라벨</span>\n</button>",
  "mobile": "<button type=\"button\" data-s1-component=\"chip\" data-variant=\"line\" data-size=\"sm\" data-break=\"mobile\" aria-pressed=\"false\">\n  <span data-s1-part=\"label\">라벨</span>\n</button>"
};
const DEFAULT_BREAK = "pc";
const BREAKS = ["pc","mobile"];
const VARIANTS = ["line","solid"];
const SIZES = ["sm","md"];
/* variant·size 속성 이름은 컴포넌트마다 다르다 — 승인된 마크업에서 읽어 온 것이다. */
const VARIANT_ATTRIBUTE = "data-variant";
const SIZE_ATTRIBUTE = "data-size";

/* defineProps 는 컴파일 타임 매크로라 인자가 setup() 밖으로 끌어올려진다 —
   여기서 위 상수들을 참조하면 SFC 가 컴파일되지 않는다(Vue 3.2+ 하드 제약).
   그래서 허용목록을 리터럴로 박아 넣는다. 값의 출처는 위 상수와 같은 manifest 다.
   (2026-09-04 독립 검증에서 19종 전부 컴파일 실패로 발견) */
const props = defineProps({
  variant: { type: String, default: undefined, validator: (value) => ["line","solid"].includes(value) },
  size: { type: String, default: undefined, validator: (value) => ["sm","md"].includes(value) },
  breakName: { type: String, default: "pc", validator: (value) => ["pc","mobile"].includes(value) },
  parts: { type: Object, default: () => ({}) },
  attrs: { type: Object, default: () => ({}) },
  modelValue: { type: Boolean, default: undefined },
  defaultSelected: { type: Boolean, default: undefined }
});
const emit = defineEmits(["beforechange","change","update:modelValue"]);

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
  throw new Error(`[s1-ui] chip: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
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
let api = null;

function mount() {
  host.value.innerHTML = MARKUPS[props.breakName] ?? MARKUPS[DEFAULT_BREAK];
  const element = host.value.firstElementChild;
  uniquifyIds(element);
  api = init(element);
  /* 제어형(v-model)이면 부품이 스스로 모양을 바꾸지 못하게 막고 알리기만 한다. 비제어형이면 바뀐 뒤에 알린다. */
  const before = (event) => { if (props.modelValue !== undefined) { event.preventDefault(); emit("update:modelValue", event.detail?.selected ?? true); } };
  const after = (event) => { if (props.modelValue === undefined) emit("update:modelValue", event.detail?.selected ?? true); };
  element.addEventListener("s1:chip:beforechange", before);
  element.addEventListener("s1:chip:change", after);
  listeners.push(["s1:chip:beforechange", before], ["s1:chip:change", after]);
  if (props.modelValue !== undefined) api?.setSelected(props.modelValue);
  else if (props.defaultSelected !== undefined) api?.setSelected(props.defaultSelected);
  for (const [eventName, emitName] of [["s1:chip:beforechange","beforechange"],["s1:chip:change","change"]]) {
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
  destroy(element);
  api = null;
  root.value = null;
}

onMounted(mount);
onBeforeUnmount(unmount);

/* v-model 값이 바뀌면 이벤트 없이 부품에 넣는다(제어형). */
watch(() => props.modelValue, (value) => {
  if (value !== undefined) api?.setSelected(value);
});


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
