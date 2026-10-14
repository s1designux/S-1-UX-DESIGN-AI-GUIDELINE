# S1ModalContent — `data-s1-component="modal-content"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 입력창·표·이미지처럼 확인 계열(짧은 텍스트)보다 큰 본문이 필요할 때.
- Single=알림/설명체 1버튼, Dual=확인/질문체 2버튼(확인 계열과 같은 규칙).

## 이럴 땐 다른 걸

- 짧은 확인 문구 하나면 확인 계열 Modal 을 쓴다.
- 페이지 전체를 차지하는 다단계 폼은 별도 페이지를 고려한다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/modal-content.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/button.css` · `components/modal-content.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/modal-content.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-footer` | `single` | 버튼 1개(확인) |
| `data-footer` | `dual` | 버튼 2개(취소 + 확인) |

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `md` `lg` `xl` |
| `data-break` | 화면(PC·모바일) | `pc` `mobile` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `div[data-s1-component=modal-content][hidden]`
- 꼭 있어야 하는 속성: `data-size` `data-footer`
- 꼭 있어야 하는 부분(`data-s1-part`): `overlay` `panel` `header` `title` `close` `content-area` `content` `content-label` `footer`
- root[hidden] 이 닫힘, 없으면 열림이다
- aria-labelledby 는 반드시 [data-s1-part=title] 의 id 를 가리킨다
- 한 페이지에 여러 개를 둘 때 title id 는 자리마다 새로 만든다
- root 는 <body> 바로 아래에 둔다 — 조상에 쌓임 맥락(transform·filter·z-index 를 가진 상자)이 있으면 그 안에 갇힌다
- 놓는 자리: body 직계 자식. 화면 안쪽 컨테이너에 두지 않는다.

## 열고 닫기

처음에는 숨겨져 있습니다(루트의 `hidden`). 여는 방법은 두 가지입니다.

**① 속성 한 줄(권장)** — 누르면 열릴 버튼 등에 창의 id 를 적습니다. 창 안에서 닫을 요소에는 `data-s1-close` 를 답니다.

```html
<button type="button" data-s1-open="my-modal-content">열기</button>
<div id="my-modal-content" data-s1-component="modal-content" hidden> … <button type="button" data-s1-close="cancel">취소</button> … </div>
```

`data-s1-close` 의 값(cancel · confirm · apply 등, 없으면 close)은 닫힌 이유로 `s1:modal-content:close` 이벤트의 `detail.reason` 에 실립니다. Esc 와 닫기(X) 버튼는 따로 달 것 없이 기본으로 닫힙니다.

**② 스크립트**

```js
import { modalContent } from "./s1-ui/s1-ui.js";
const api = modalContent.init(document.getElementById("my-modal-content"));
api.open();  api.close();  api.isOpen;
```

**창을 겹쳐 쌓는 것(열린 창 안에서 다른 창 열기)은 지원하지 않습니다.** 열리기는 하지만 초점 가둠과 Esc 는 맨 위 한 겹만 맡을 뿐, 쌓는 사용법을 설계에 넣지 마세요. 확인이 끝난 뒤 다음 창을 여세요.

Esc 는 맨 위 겹 하나만 닫습니다 — 창 안에서 달력·시간·드롭다운·셀렉트·필터칩이 열려 있으면 그것만 닫히고 창은 남습니다.

## 값·옵션 속성

| 속성 | 뜻 |
|---|---|
| `data-s1-open` | 다른 요소(버튼 등)에 달면 누를 때 id 가 같은 이 창이 열린다 |
| `data-s1-close` | 창 안 요소에 달면 누를 때 닫힌다. 값은 닫힌 이유(cancel·confirm 등, 없으면 close)로 s1:modal-content:close 의 detail.reason 에 실린다 |

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:modal-content:open` | `{ ...호출자가 넘긴 detail }` |
| `s1:modal-content:close` | `{ reason?: "escape" \| "close-button", ...호출자가 넘긴 detail }` |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: div[data-s1-part=panel][role=dialog][aria-modal=true] — 확인 계열 Modal 과 같은 계약.
- **이름**: aria-labelledby 가 [data-s1-part=title] 을 가리킨다.
- **키보드**: Escape 로 닫는다. Tab·Shift+Tab 은 패널 안에서만 순환한다(초점 가둠). content-area 는 스크롤 가능하며 키보드 스크롤(Tab 으로 도달한 포커스 요소의 자연스러운 스크롤·PageUp/Down 등 브라우저 기본 동작)을 막지 않는다.
- **초점**: 열릴 때 패널 안 첫 초점 요소로 이동하고, 닫힐 때 열기 전 초점 자리로 복귀한다
- **상태 표시**: 런타임이 root[hidden] 을 전환하고 s1:modal-content:open·close 를 낸다
- **배경**: 열려 있는 동안 배경 스크롤을 잠그고, 초점이 패널 밖으로 나가면 되돌린다

---

정본 지문 `631b21245d4ee95332ba83134037a2da1b6337f2b1785999fb1f2968944d9db1` · 부품 버전 0.2.5
