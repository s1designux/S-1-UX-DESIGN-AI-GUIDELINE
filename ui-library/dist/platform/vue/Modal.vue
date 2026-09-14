<!-- 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. -->
<!-- S1Modal — 승인된 배포본을 그대로 마운트하는 Vue 껍데기.
     MARKUPS 는 dist/examples/modal*.html 안의 승인된 인스턴스를 그대로 도려낸 것이다. -->
<script setup>
import { onBeforeUnmount, onMounted, ref, watch, watchEffect } from "vue";
import { init, destroy } from "../../components/modal.js";

const MARKUPS = {
  "pc": "<div data-s1-component=\"modal\" data-break=\"pc\" data-footer=\"dual\" hidden>\n  <div data-s1-part=\"overlay\"></div>\n  <div data-s1-part=\"panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"confirm-modal-title\" aria-describedby=\"confirm-modal-message\" tabindex=\"-1\">\n    <div data-s1-part=\"content\">\n      <div data-s1-part=\"header\">\n        <h2 data-s1-part=\"title\" id=\"confirm-modal-title\">제목 영역</h2>\n        <button type=\"button\" data-s1-part=\"close\" aria-label=\"닫기\"></button>\n      </div>\n      <div data-s1-part=\"body\">\n        <p data-s1-part=\"message\" id=\"confirm-modal-message\">변경한 내용이 저장되지 않고 사라집니다.\n정말 이 작업을 진행하시겠어요?</p>\n      </div>\n    </div>\n    <div data-s1-part=\"footer\">\n      <button type=\"button\" data-s1-component=\"button\" data-variant=\"secondary\" data-size=\"xxsm\"><span data-s1-part=\"label\">취소</span></button>\n      <button type=\"button\" data-s1-component=\"button\" data-variant=\"primary\" data-size=\"xxsm\"><span data-s1-part=\"label\">확인</span></button>\n    </div>\n  </div>\n</div>",
  "mobile": "<div data-s1-component=\"modal\" data-break=\"mobile\" data-footer=\"dual\" hidden>\n  <div data-s1-part=\"overlay\"></div>\n  <div data-s1-part=\"panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"confirm-modal-title\" aria-describedby=\"confirm-modal-message\" tabindex=\"-1\">\n    <div data-s1-part=\"content\">\n      <div data-s1-part=\"header\">\n        <h2 data-s1-part=\"title\" id=\"confirm-modal-title\">자동 로그인 설정</h2>\n      </div>\n      <div data-s1-part=\"body\">\n        <p data-s1-part=\"message\" id=\"confirm-modal-message\">로그인되었어요.\n다음부터 자동으로 로그인할까요?</p>\n      </div>\n    </div>\n    <div data-s1-part=\"footer\">\n      <button type=\"button\" data-s1-component=\"button\" data-variant=\"secondary\" data-size=\"lg\"><span data-s1-part=\"label\">아니오</span></button>\n      <button type=\"button\" data-s1-component=\"button\" data-variant=\"primary\" data-size=\"lg\"><span data-s1-part=\"label\">네</span></button>\n    </div>\n  </div>\n</div>"
};
const DEFAULT_BREAK = "pc";
const BREAKS = ["pc","mobile"];
const VARIANTS = ["single","dual"];
const SIZES = [];
/* variant·size 속성 이름은 컴포넌트마다 다르다 — 승인된 마크업에서 읽어 온 것이다. */
const VARIANT_ATTRIBUTE = "data-footer";
const SIZE_ATTRIBUTE = null;

/* defineProps 는 컴파일 타임 매크로라 인자가 setup() 밖으로 끌어올려진다 —
   여기서 위 상수들을 참조하면 SFC 가 컴파일되지 않는다(Vue 3.2+ 하드 제약).
   그래서 허용목록을 리터럴로 박아 넣는다. 값의 출처는 위 상수와 같은 manifest 다.
   (2026-09-04 독립 검증에서 19종 전부 컴파일 실패로 발견) */
const props = defineProps({
  variant: { type: String, default: undefined, validator: (value) => ["single","dual"].includes(value) },
  size: { type: String, default: undefined, validator: (value) => true },
  breakName: { type: String, default: "pc", validator: (value) => ["pc","mobile"].includes(value) },
  parts: { type: Object, default: () => ({}) },
  attrs: { type: Object, default: () => ({}) }
});
const emit = defineEmits(["open","close"]);

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
  throw new Error(`[s1-ui] modal: 승인되지 않은 ${label} "${value}". 쓸 수 있는 값: ${allowed.join(", ")}`);
}

function mount() {
  host.value.innerHTML = MARKUPS[props.breakName] ?? MARKUPS[DEFAULT_BREAK];
  const element = host.value.firstElementChild;
  init(element);
  for (const [eventName, emitName] of [["s1:modal:open","open"],["s1:modal:close","close"]]) {
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
