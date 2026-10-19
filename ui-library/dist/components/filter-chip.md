# S1FilterChip — `data-s1-component="filter-chip"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 목록·표의 정렬/기간/범주 같은 조건을 바꿀 때.
- 선택한 값을 칩 자체에 계속 보여줘야 할 때(무엇이 걸려 있는지 한눈에).

## 이럴 땐 다른 걸

- 단순 태그·상태 표시 — Chip 을 쓴다(누를 수 없는 표시용).
- 선택지가 배타적이고 개수가 적어 항상 펼쳐 두는 편이 나을 때 — Multi Toggle 을 쓴다.
- 폼 안의 값 입력 — Select Box 를 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/filter-chip.html` · `examples/filter-chip.mobile.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/dropdown.css` · `components/checkbox.css` · `components/filter-chip.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/filter-chip.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-variant` | `line` | 테두리형 — 흰 바탕, 선택하면 테두리·글자가 파랗게 |
| `data-variant` | `solid` | 배경을 채운 형태 |

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `sm` `md` |
| `data-break` | 화면(PC·모바일) | `pc` `mobile` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `div[data-s1-component=filter-chip]`
- 꼭 있어야 하는 속성: `data-variant` `data-size` `data-break` `data-title`
- 꼭 있어야 하는 부분(`data-s1-part`): `trigger` `value` `icon` `panel`
- 있어도 되는 부분: `title`
- trigger aria-haspopup=listbox
- trigger aria-expanded 는 panel 표시와 동기화
- trigger accessible name = title+value 결합(예: '정렬, 최신순')
- Esc 키로 패널을 닫는다(registry filter-chip.json a11y 요구) — 트리거뿐 아니라 root(트리거+패널) 전체에서 받는다(open() 이 포커스를 패널로 옮기므로 트리거 전용이면 열린 직후 Esc 가 안 먹는다)

## 값·옵션 속성

| 속성 | 뜻 |
|---|---|
| `data-value` | 처음에 골라 둘 옵션의 값 |
| `data-name` | 폼 전송용 숨은 입력의 name (고른 옵션 값이 실린다) |

## 스크립트로 부르기

`init(요소)` 가 돌려주는 객체의 `openPanel()` · `closePanel()` · `value` · `setValue(value)`.

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:filter-chip:change` | `{ value, option }` |
| `s1:filter-chip:open` | `{}` |
| `s1:filter-chip:close` | `{}` |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: button[aria-haspopup=listbox][aria-expanded] driving a role=listbox panel (registry filter-chip.json a11y 확정)
- **이름**: title+value 결합(예: '정렬, 최신순') — aria-label 로 런타임이 동기화
- **키보드**: trigger: Enter/Space toggles; root(트리거+패널) 전체: Escape 로 닫고 트리거로 포커스 복귀; panel: dropdown 모듈의 ArrowUp/Down·Home/End·Enter/Space
- **초점**: 열릴 때 패널의 활성 옵션으로 포커스 이동, 닫힐 때 트리거로 복귀
- **상태 표시**: 런타임이 aria-expanded·data-complete·aria-label 을 갱신하고 s1:filter-chip:open·close·change 를 낸다

---

정본 지문 `e9ee9098166ab334c5cd6e353abd207bf7cfbec36b8515bdf2cb9fbd2dfb52d8` · 부품 버전 0.3.0
