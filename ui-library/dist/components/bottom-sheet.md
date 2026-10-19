# S1BottomSheet — `data-s1-component="bottom-sheet"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.
> **모바일 전용 부품입니다.** PC 화면에는 쓰지 않습니다(PC 는 대응 부품을 쓰세요 — 아래 「이럴 땐 다른 걸」).

## 언제 쓰나

- 모바일에서 목록을 띄워 고르게 할 때 — 드롭다운 대신 쓴다(density-policy mobileSubstitutes.dropdown).
- 모바일에서 날짜·시간처럼 넓은 선택 UI 를 띄울 때.
- Footer=None 은 고르는 즉시 적용되는 목록, Single 은 '적용' 하나, Dual 은 '취소+적용'.

## 이럴 땐 다른 걸

- PC 화면 — PC 는 드롭다운·팝오버·모달을 쓴다. 정본 시트는 모바일 폭(360) 기준이다.
- 확인·알림처럼 짧은 결정 — Modal 을 쓴다.
- 비차단 알림 — 토스트·인라인 메시지.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/bottom-sheet.mobile.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/button.css` · `components/bottom-sheet-option.css` · `components/bottom-sheet.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/bottom-sheet.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-footer` | `none` | 하단 버튼 없음 — 고르는 즉시 적용되는 목록 |
| `data-footer` | `single` | '적용' 버튼 1개 |
| `data-footer` | `dual` | '취소 + 적용' 버튼 2개 |

## 마크업 규칙

- 루트: `div[data-s1-component=bottom-sheet][data-break=mobile][data-footer][hidden]`
- 꼭 있어야 하는 속성: `data-break` `data-footer`
- 꼭 있어야 하는 부분(`data-s1-part`): `sheet-backdrop` `sheet-panel` `sheet-header` `sheet-title` `sheet-close` `sheet-body`
- 있어도 되는 부분: `sheet-content` `sheet-footer`
- root[hidden] 이 닫힘, 없으면 열림이다
- aria-labelledby 는 반드시 [data-s1-part=sheet-title] 의 id 를 가리킨다
- 루트에 data-s1-part="sheet" 를 함께 달 수 있다 — date-picker·time-picker 가 그 이름으로 부른다
- 한 페이지에 시트를 여럿 두면 title id 는 자리마다 새로 만든다
- root 는 <body> 바로 아래에 둔다 — 조상에 쌓임 맥락(transform·filter·z-index 를 가진 상자)이 있으면 그 안에 갇힌다
- sheet-content 는 선택 부품이다 — 정본 content 프레임의 웹 대응이며 있으면 gap 24. date-picker·time-picker 는 이 층을 쓰지 않는다(정본이 한 층).
- root 를 body 로 옮기면 화면이 칸마다 [data-theme] 로 테마를 씌우는 구조일 때 그 칸 밖으로 나간다 — 다크 칸에서 연 시트가 라이트로 뜬다(river 지적 2026-09-15). 테마를 :root/html 이 아니라 안쪽 상자에 씌우는 화면이라면 옮길 때 그 테마 값을 시트 root 에 함께 새겨야 한다. modal·modal-content 도 같은 배치 규칙이라 같은 처리가 필요하다.
- 놓는 자리: body 직계 자식. 화면 안쪽 컨테이너에 두지 않는다.

## 열고 닫기

처음에는 숨겨져 있습니다(루트의 `hidden`). 여는 방법은 두 가지입니다.

**① 속성 한 줄(권장)** — 누르면 열릴 버튼 등에 창의 id 를 적습니다. 창 안에서 닫을 요소에는 `data-s1-close` 를 답니다.

```html
<button type="button" data-s1-open="my-bottom-sheet">열기</button>
<div id="my-bottom-sheet" data-s1-component="bottom-sheet" hidden> … <button type="button" data-s1-close="cancel">취소</button> … </div>
```

`data-s1-close` 의 값(cancel · confirm · apply 등, 없으면 close)은 닫힌 이유로 `s1:bottom-sheet:close` 이벤트의 `detail.reason` 에 실립니다. Esc 와 닫기(X) 버튼·딤(뒤쪽 어두운 부분) 누르기는 따로 달 것 없이 기본으로 닫힙니다.

**② 스크립트**

```js
import { bottomSheet } from "./s1-ui/s1-ui.js";
const api = bottomSheet.init(document.getElementById("my-bottom-sheet"));
api.open();  api.close();  api.isOpen;
```

**창을 겹쳐 쌓는 것(열린 창 안에서 다른 창 열기)은 지원하지 않습니다.** 열리기는 하지만 초점 가둠과 Esc 는 맨 위 한 겹만 맡을 뿐, 쌓는 사용법을 설계에 넣지 마세요. 확인이 끝난 뒤 다음 창을 여세요.

Esc 는 맨 위 겹 하나만 닫습니다 — 창 안에서 달력·시간·드롭다운·셀렉트·필터칩이 열려 있으면 그것만 닫히고 창은 남습니다.

## 값·옵션 속성

| 속성 | 뜻 |
|---|---|
| `data-s1-open` | 다른 요소(버튼 등)에 달면 누를 때 id 가 같은 이 시트가 열린다 |
| `data-s1-close` | 시트 안 요소에 달면 누를 때 닫힌다. 값은 닫힌 이유(cancel·apply 등, 없으면 close)로 s1:bottom-sheet:close 의 detail.reason 에 실린다 |

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:bottom-sheet:open` | `{ ...호출자가 넘긴 detail }` |
| `s1:bottom-sheet:close` | `{ reason?: "escape" \| "close-button" \| "backdrop", ...호출자가 넘긴 detail }` |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: div[data-s1-part=sheet-panel][role=dialog][aria-modal=true] (modal 표준안과 같은 규칙, river 승인 2026-09-02)
- **이름**: aria-labelledby 가 [data-s1-part=sheet-title] 을 가리킨다
- **키보드**: Escape 로 닫는다. Tab·Shift+Tab 은 패널 안에서만 순환한다(초점 가둠)
- **초점**: 열릴 때 패널 안 첫 초점 요소로 이동하고, 닫힐 때 열기 전 초점 자리로 복귀한다
- **상태 표시**: 런타임이 root[hidden] 을 전환하고 s1:bottom-sheet:open·close 를 낸다
- **배경**: 열려 있는 동안 배경 스크롤을 잠그고, 초점이 패널 밖으로 나가면 되돌린다

## 바꿀 수 있는 CSS 변수

`--s1-bottom-sheet-gap` · `--s1-bottom-sheet-shadow` — 예: 아이콘 모양을 바꿀 때 `--s1-bottom-sheet-gap: url("my-icon.svg")`.

---

정본 지문 `cfcdd0a868fe7df66776acf051104737a71c3f6898d74bc97036f14dfb7baf17` · 부품 버전 0.4.0
