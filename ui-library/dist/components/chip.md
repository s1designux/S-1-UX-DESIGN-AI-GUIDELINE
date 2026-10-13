# S1Chip — `data-s1-component="chip"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 선택 가능한 태그·필터를 나열할 때.
- filter 는 드롭다운으로 값을 고르고 적용 완료(complete)를 표시할 때.

## 이럴 땐 다른 걸

- 단일 액션 실행은 Button.
- 긴 목록의 단일 선택은 Select·Dropdown.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/chip.html` · `examples/chip.mobile.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/chip.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/chip.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-variant` | `line` | 흰 바탕에 테두리만 있는 칩 — 기본형, 선택하면 테두리가 파랗게 |
| `data-variant` | `solid` | 배경을 채운 칩 |

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `sm` `md` |
| `data-break` | 화면(PC·모바일) | `pc` `mobile` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `button[data-s1-component=chip]`
- 꼭 있어야 하는 속성: `type` `data-variant` `data-size` `data-break` `aria-pressed`
- 꼭 있어야 하는 부분(`data-s1-part`): `label`

## 값·옵션 속성

| 속성 | 뜻 |
|---|---|
| `data-s1-select` | 칩을 감싼 요소에 single 을 달면 하나만 켠다(켜진 칩을 다시 눌러도 꺼지지 않는다). 없으면 칩마다 따로 켜고 끈다 |
| `data-value` | 칩의 값(detail.value). 없으면 글자 |

## 스크립트로 부르기

`init(요소)` 가 돌려주는 객체의 `set(next)` · `setSelected(next)` · `selected`.

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:chip:beforechange` | `{ selected(다음 값), value, group } — 취소 가능(preventDefault 하면 모양이 그대로)` |
| `s1:chip:change` | `{ selected, value, group }` |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: button with aria-pressed
- **이름**: visible label or aria-label
- **키보드**: native Enter and Space activation with Tab order
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(2026-09-02 river 결정).
- **상태 표시**: runtime keeps aria-pressed in sync with the selected state and emits s1:chip:change

---

정본 지문 `1f0b8c5410b47101605777c88ff1723c1ac73d7ffd0feaa2ad7a58a0f0475844` · 부품 버전 0.3.0
