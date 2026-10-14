# S1Dropdown — `data-s1-component="dropdown"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 트리거를 눌러 옵션 목록에서 하나를 고를 때(글자 유형).
- 한 목록에서 여러 항목을 동시에 고를 때(체크박스 유형) — 필터·대상 선택 등.
- Select 의 기반 컴포넌트.

## 이럴 땐 다른 걸

- 즉시 실행 액션 그룹은 Button.
- 적은 수의 상호배타 선택은 Radio.
- 항목이 3~4개 이하로 적고 항상 보여도 되는 다중 선택은 목록을 접지 말고 Checkbox 를 펼쳐 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/dropdown.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/checkbox.css` · `components/dropdown.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/dropdown.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-type` | `text` | 글자만 있는 목록 — 하나를 골라 표시 |
| `data-type` | `checkbox` | 각 줄 왼쪽에 체크박스가 붙는 목록 — 여러 개를 고르고, 맨 위에 '전체 선택' 줄을 둘 수 있음 |

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `xxsm` `xsm` `md` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `div[data-s1-component=dropdown]`
- 꼭 있어야 하는 속성: `data-type` `data-size`
- 꼭 있어야 하는 부분(`data-s1-part`): `option` `option-label`
- 있어도 되는 부분: `divider`

## 스크립트로 부르기

`init(요소)` 가 돌려주는 객체의 `focusActive()` · `value` · `setValue(value)`.

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:dropdown:change` |  |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: role=listbox/option (text) 또는 옵션별 role=checkbox (checkbox), registry dropdown.json a11y 확정
- **이름**: panel 은 표시 라벨 또는 트리거가 제공한 aria-label/aria-labelledby, 옵션은 option-label 텍스트
- **키보드**: ArrowUp/ArrowDown 이동, Home/End 처음·끝, Enter/Space 선택 — roving tabindex
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(2026-09-02 river 결정).
- **상태 표시**: 런타임이 aria-selected(text) 또는 aria-checked(checkbox)를 갱신하고 s1:dropdown:change 를 낸다

---

정본 지문 `93c277610de52701b5f6b3fc4ea925e601a86a29f7229df99fcfea4e80abb31b` · 부품 버전 0.2.5
