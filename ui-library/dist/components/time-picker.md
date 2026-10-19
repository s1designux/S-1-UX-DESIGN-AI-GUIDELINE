# S1TimePicker — `data-s1-component="time-picker"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 시간(시/분)을 드롭다운 목록에서 고를 때.

## 이럴 땐 다른 걸

- 날짜는 DatePicker.
- 자유 텍스트만 필요하면 Input.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/time-picker.html` · `examples/time-picker.mobile.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/button.css` · `components/tab.css` · `components/bottom-sheet.css` · `components/time-picker.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/time-picker.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-type` | `24h` | 0~23시 24시간 표기 — 시·분 두 칸 |
| `data-type` | `12h` | 오전/오후 + 1~12시 12시간 표기 — 칸이 하나 더 있어 목록이 더 넓음 |

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `xxsm` `xsm` `md` |
| `data-break` | 화면(PC·모바일) | `pc` `mobile` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `div[data-s1-component=time-picker]`
- 꼭 있어야 하는 속성: `data-size` `data-break` `data-type`
- 꼭 있어야 하는 부분(`data-s1-part`): `trigger` `value` `icon` `panel` `column` `divider` `footer` `confirm`
- 있어도 되는 부분: `sheet` `sheet-backdrop` `sheet-panel` `sheet-header` `sheet-title` `sheet-close` `tabs` `date-panel` `wheel` `wheel-col` `wheel-cell` `fade-top` `fade-bottom` `sheet-footer` `apply`
- trigger aria-haspopup=listbox
- trigger aria-expanded 는 panel 표시와 동기화
- 각 column 은 role=listbox + aria-label(시/분/오전오후), cell 은 role=option + aria-selected
- Esc 키로 패널을 닫고 트리거로 포커스 복귀(Select 와 동일 표준 패턴)
- confirm 은 필수 column(24h: hour·minute / 12h: ampm·hour·minute) 이 모두 선택돼야 disabled 가 풀린다
- cell 은 data-value 를 가진다 — 확인 버튼이 이 값으로 트리거 문구와 s1:time-picker:change 를 만든다
- wheel 모드: trigger aria-haspopup=dialog, sheet-panel role=dialog[aria-modal=true]
- wheel-col 은 role=listbox + aria-label(시/분/오전오후), colon 열은 장식(aria-hidden)이라 role 없음
- wheel 모드는 스크롤 중앙에 가장 가까운 wheel-cell 이 그 열의 값이다 — 위/아래 화살표 키로 한 칸씩 이동, 클릭한 칸이 중앙으로 스크롤된다
- apply 버튼은 목록 모드 confirm 과 달리 상시 활성 — 휠은 항상 중앙에 값이 있는 상태(초기값=각 열 첫 항목)라 완결 조건이 없다
- DateTime 변형: tabs 의 s1:tab:change 이벤트로 wheel↔date-panel 을 토글한다(탭 전환만, 날짜 렌더링은 범위 밖)

## 값·옵션 속성

| 속성 | 뜻 |
|---|---|
| `data-name` | 폼 전송용 숨은 입력의 name (확정된 시간 글자가 실린다) |
| `data-value` | 처음 시간 — 24시간 "HH:mm" (예: 09:30). 12시간 표기여도 값은 24시간으로 준다 |
| `data-placeholder` | 비웠을 때 돌아갈 트리거 글자(없으면 처음 글자) |

## 스크립트로 부르기

`init(요소)` 가 돌려주는 객체의 `openPanel()` · `closePanel()` · `value` · `setValue(value)`.

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:time-picker:open` | `{}` |
| `s1:time-picker:close` | `{}` |
| `s1:time-picker:change` | `{ value, hour, minute, ampm, type }` |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: button[aria-haspopup=listbox][aria-expanded] driving role=listbox column들 (registry time-picker.json a11y 확정, HD-Time-6)
- **이름**: visible label associated with the trigger or aria-label; 각 column 은 aria-label(시/분/오전오후); wheel 모드(data-mobile-ui=wheel): sheet-panel 은 aria-labelledby 로 sheet-title 을 가리킨다(date-picker 모바일 시트와 동일 패턴)
- **키보드**: trigger: Enter/Space(native click)·ArrowDown 로 열기; root: Escape 로 닫고 트리거로 포커스 복귀; column 안: ArrowUp/Down 같은 열 이동, ArrowLeft/Right 열 이동, Enter/Space 선택; confirm 은 Tab 으로 도달; wheel 모드(data-mobile-ui=wheel): wheel-col 안 ArrowUp/Down 로 한 칸씩 이동(스크롤 중앙으로), Esc 로 시트 닫고 트리거 복귀, apply 는 Tab 으로 도달
- **초점**: 열릴 때 첫 column 의 현재 선택값(없으면 첫 칸)으로 포커스 이동, 닫힐 때 트리거로 복귀. wheel 시트가 열리면 시트 안(첫 포커스 가능 요소인 sheet-close)으로 포커스 이동, 닫히면 트리거로 복귀(포커스 가둠은 Esc·배경·닫기로만 나가는 단순 계약, date-picker 모바일 시트와 동일 패턴 — 휠 열을 먼저 보내야 한다는 정본 규정은 없다)
- **상태 표시**: 런타임이 aria-expanded·aria-selected·data-filled·confirm 의 disabled 를 갱신하고 s1:time-picker:open·close·change 를 낸다

---

정본 지문 `bdf304ea39d52ed35c85eb07447f737ea68b7a591a6af4126e5f73a64542c604` · 부품 버전 0.6.0
