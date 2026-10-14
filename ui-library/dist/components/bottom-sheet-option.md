# S1BottomSheetOption — `data-s1-component="bottom-sheet-option"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 바텀시트 본문에 고를 것을 줄로 늘어놓을 때.
- Text = 한 값 고르기(고른 줄에 파란 체크), Checkbox = 여러 값 고르기, Radio = 한 값 고르기(동그라미 표시), List = 사람·항목처럼 아바타와 설명이 함께 있는 줄.

## 이럴 땐 다른 걸

- 바텀시트 밖 — PC 목록은 Dropdown 을 쓴다.
- 표의 행 — Table 을 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/bottom-sheet-option.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/checkbox.css` · `components/radio.css` · `components/bottom-sheet-option.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/bottom-sheet-option.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-type` | `text` | 글자만 있는 한 줄 — 고른 줄 오른쪽에 파란 체크 |
| `data-type` | `checkbox` | 왼쪽에 체크박스 — 여러 개 고르기 |
| `data-type` | `radio` | 왼쪽에 동그라미 라디오 — 하나만 고르기 |
| `data-type` | `list` | 왼쪽 아바타 + 제목/서브 두 줄 + 오른쪽 화살표(비활성이면 자물쇠) — 사람·항목 목록 |

## 마크업 규칙

- 루트: `div[data-s1-component=bottom-sheet-option][data-type][data-state]`
- 꼭 있어야 하는 속성: `data-type` `data-state`
- 있어도 되는 부분: `label` `check` `list-left` `avatar` `list-text` `list-title` `list-sub` `chevron` `lock`
- checkbox·radio 코어를 그대로 조립한다 — 복제하지 않는다.
- checkbox·radio 코어 내부에는 코어 자신의 label 을 넣지 않는다(정본 Label=Off) — 이 컴포넌트의 label span 이 보이는 글자를 낸다.
- 라벨(span[data-s1-part=label])은 root 의 직계 자식일 때만 이 컴포넌트의 CSS 가 적용된다 — checkbox·radio 코어 내부 part 를 건드리지 않기 위해서다(CSS `>` 직계 자식 스코프).

## 값·옵션 속성

| 속성 | 뜻 |
|---|---|
| `data-s1-select` | 묶음(보통 시트 본문)에 single 을 달면 고르기가 켜진다. Text·Radio 유형 줄만 고른다(List 는 선택 모양이 정본에 없고 Checkbox 는 여러 개 고르는 줄이라 제외) |
| `data-s1-close-on-select` | 묶음에 달면 고른 뒤 시트가 닫힌다(같은 줄을 다시 골라도 닫힌다) |
| `data-value` | 줄의 값(detail.value). 없으면 라벨 글자 |

## 스크립트로 부르기

`init(요소)` 가 돌려주는 객체의 `setSelected(next)` · `setValue(value)` · `selected` · `value`.

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:bottom-sheet-option:beforechange` | `{ value, label, selected: true, option } — 취소 가능(preventDefault 하면 모양이 그대로)` |
| `s1:bottom-sheet-option:change` | `{ value, label, selected: true, option }` |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: Checkbox·Radio 는 native input[type=checkbox|radio] 를 그대로 쓴다(코어 배포본의 계약). Text·List 는 역할이 없는 div/span 이다 — role·이름·선택 상태는 시트를 여는 화면이 준다(registry a11y).
- **이름**: Checkbox·Radio 는 control 의 aria-labelledby 가 이 컴포넌트의 label span id 를 가리킨다(associated label — checkbox·radio manifest accessibleName 계약 충족). Text·List 는 이 컴포넌트 자체가 이름을 갖지 않는다 — 시트를 여는 화면이 role·이름을 준다.
- **키보드**: 묶음에 data-s1-select=single 이 있으면: Text 는 ↑↓·Home·End 로 줄 사이를 옮기고 Enter/Space 로 고른다(roving tabindex — 고른 줄이 Tab 정거장). Radio 는 native 키보드(Tab·방향키·Space)를 그대로 쓴다. 표시가 없으면 종전처럼 줄은 상호작용 요소가 아니다.
- **상태 표시**: 묶음에 data-s1-select=single 이 있으면 런타임이 묶음에 role=listbox(Radio 뿐이면 radiogroup), 줄에 role=option 과 aria-selected, 고른 줄에 data-state=selected(+파란 체크)를 맞춘다. 표시가 없으면 이 동기화는 화면 몫이다.

---

정본 지문 `437fd477846e829c956c1824e3e4c4e188c1f6a932cac43f62b55a07b54f8ecf` · 부품 버전 0.3.1
