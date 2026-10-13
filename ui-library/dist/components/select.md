# S1Select — `data-s1-component="select"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 단일 값을 목록에서 고르는 폼 필드일 때.
- Dropdown 토큰(--dropdown-*)을 재사용한다.

## 이럴 땐 다른 걸

- 다중 선택은 Checkbox·Chip.
- 즉시 실행 메뉴는 Dropdown/Button.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/select.html` · `examples/select.mobile.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/dropdown.css` · `components/checkbox.css` · `components/select.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/select.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `xxsm` `xsm` `md` |
| `data-break` | 화면(PC·모바일) | `pc` `mobile` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `div[data-s1-component=select]`
- 꼭 있어야 하는 속성: `data-size` `data-break`
- 꼭 있어야 하는 부분(`data-s1-part`): `trigger` `value` `icon` `panel`
- trigger aria-haspopup=listbox
- trigger aria-expanded 는 panel 표시와 동기화
- panel 안 dropdown 의 role=listbox/option + aria-selected 는 dropdown 모듈이 관리
- Esc 키로 패널을 닫는다(role=listbox 표준 패턴, river 확정 접근성 표준안 범위)

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
| `s1:select:change` | `{ value, option }` |
| `s1:select:open` | `{}` |
| `s1:select:close` | `{}` |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: button[aria-haspopup=listbox][aria-expanded] driving a role=listbox panel (registry select.json a11y 확정)
- **이름**: visible label associated with the trigger or aria-label
- **키보드**: trigger: Enter/Space toggles; root(트리거+패널) 전체: Escape 로 닫고 트리거로 포커스 복귀; panel: dropdown 모듈의 ArrowUp/Down·Home/End·Enter/Space
- **초점**: 열릴 때 패널의 활성 옵션으로 포커스 이동, 닫힐 때 트리거로 복귀
- **상태 표시**: 런타임이 aria-expanded·data-filled 를 갱신하고 s1:select:open·close·change 를 낸다

---

정본 지문 `18c3bac6333c269d9e2a7e9e52372b31960e4b01d03b53f2ee166d99d7790456` · 부품 버전 0.2.11
