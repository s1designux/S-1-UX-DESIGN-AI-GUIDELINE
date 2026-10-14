# S1Input — `data-s1-component="input"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 한 줄 텍스트·숫자를 입력받을 때 — 로그인·검색·필터·설정 폼 등.
- 라벨·도움말과 함께 쓰려면 Input Slots(라벨/헬퍼 조합) 패턴으로 감싼다.
- 안내메시지(helper)는 필요한 화면에서만 켠다 — 계정 관련 화면(로그인·비밀번호 변경·회원가입)처럼 입력 규칙을 미리 알려야 하는 곳이 대표적이다. 일반 입력·검색에는 넣지 않는다(river 결정 2026-09-07).

## 이럴 땐 다른 걸

- 여러 줄 입력은 Textarea 를 쓴다.
- 선택지 중 하나를 고르는 입력은 Select·Dropdown, 날짜·시간은 DatePicker·TimePicker 를 쓴다.
- 안내메시지가 필요하다는 이유로 '계정용 인풋' 같은 별도 컴포넌트를 만들지 않는다 — 안내메시지는 켜고 끄는 선택 슬롯이다. 업계 관행도 검색만 별도 컴포넌트로 가르고, 쓰이는 화면으로는 가르지 않는다(river 결정 2026-09-07).

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/input.html` · `examples/input.mobile.html` · `examples/input.password.html` · `examples/input.password.mobile.html` · `examples/input.search.html` · `examples/input.search.mobile.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/input.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/input.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-mode` | `search` | 오른쪽에 지우기 + 돋보기 아이콘이 붙는 검색 입력칸 |
| `data-mode` | `password` | 오른쪽에 눈(표시 전환) + 지우기 아이콘이 붙는 비밀번호 입력칸 |

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `xxsm` `xsm` `md` |
| `data-break` | 화면(PC·모바일) | `pc` `mobile` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `div[data-s1-component=input]`
- 꼭 있어야 하는 속성: `data-size` `data-break`
- 꼭 있어야 하는 부분(`data-s1-part`): `field` `control`
- 있어도 되는 부분: `label` `action` `action-icon` `message`
- label[for] ↔ control[id]
- message[id] ↔ control[aria-describedby]
- action[data-action=clear] 안 action-icon
- action[data-action=password] ↔ control[type=password|text] · aria-pressed
- action[data-action=search] ↔ root[data-mode=search]

## 스크립트로 부르기

`init(요소)` 가 돌려주는 객체의 `init(root)` · `destroy(root)` · `instance.update()`.

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:input:clear` |  |
| `s1:input:search` |  |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: input
- **이름**: associated label or aria-label
- **키보드**: native text editing
- **초점**: Keyboard focus turns the field border to the canonical Selected color and places the caret at the end of the value; pointer focus keeps the caret where the user clicked. Disabled inputs are skipped by native tab order.
- **상태 표시**: Service sets aria-invalid when error state is active; runtime keeps clear visibility in sync with value and focus.
- **errorRelation**: When a message exists, service gives it an id and references it with aria-describedby. Both may be omitted together.
- **passwordVisibility**: toggle button synchronizes aria-pressed and aria-label with control.type on every toggle; focus returns to the control.
- **searchExecute**: search action and Enter keydown (excluding IME composition) both dispatch the same s1:input:search event; no separate keyboard shortcut is added.

---

정본 지문 `785ecda4f20da6a0b6cd6b4ffbfa2a2a161b237b5b87f0f588a7dde2d8507755` · 부품 버전 0.3.10
