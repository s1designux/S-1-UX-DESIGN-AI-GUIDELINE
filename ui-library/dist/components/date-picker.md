# S1DatePicker — `data-s1-component="date-picker"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 날짜(단일/기간)를 고를 때. 트리거는 Base Input 필드.
- PC 는 팝오버 캘린더, Mobile 은 바텀시트로 표출.

## 이럴 땐 다른 걸

- 시간만 고를 때는 TimePicker.
- 자유 텍스트 날짜 입력만 필요하면 Input.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/date-picker.html` · `examples/date-picker.mobile.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/button.css` · `components/bottom-sheet.css` · `components/date-picker.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/date-picker.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-mode` | `single` | 날짜 하나를 고름 — 입력칸에 '26.10.15' 같은 표기 |
| `data-mode` | `range` | 시작일~종료일 기간을 고름 — 입력칸에 '시작 ~ 끝' 표기 |

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `xxsm` `xsm` `md` |
| `data-break` | 화면(PC·모바일) | `pc` `mobile` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `div[data-s1-component=date-picker]`
- 꼭 있어야 하는 속성: `data-size` `data-break` `data-mode`
- 꼭 있어야 하는 부분(`data-s1-part`): `trigger` `value` `icon`
- trigger aria-haspopup=dialog, aria-expanded 는 panel/sheet 표시와 동기화
- panel(PC) role=dialog, 내부 grid는 role=grid, 날짜 셀은 role=gridcell + aria-selected(+ aria-disabled)
- Esc 키로 패널/시트를 닫고 트리거로 포커스 복귀
- Mobile sheet: role=dialog[aria-modal=true], 배경 클릭·닫기 버튼·Esc 로 닫힘
- s1:date-picker:change 이벤트가 값을 실어 나른다 — 단일: {value}, 기간: {start,end}

## 값·옵션 속성

| 속성 | 뜻 |
|---|---|
| `data-value` | 단일 모드의 처음 날짜(YYYY-MM-DD) |
| `data-range-start` | 기간 모드의 처음 시작일(YYYY-MM-DD) |
| `data-range-end` | 기간 모드의 처음 종료일(YYYY-MM-DD) |
| `data-name` | 폼 전송용 숨은 입력의 name (단일: name · 기간: name-start, name-end) |

## 스크립트로 부르기

`init(요소)` 가 돌려주는 객체의 `openPanel()` · `closePanel()` · `value` · `setValue(value)`.

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:date-picker:open` | `{}` |
| `s1:date-picker:close` | `{}` |
| `s1:date-picker:change` | `단일: { value, mode: 'single' } · 기간: { start, end, mode: 'range' } (모두 YYYY-MM-DD)` |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: button[aria-haspopup=dialog][aria-expanded] driving role=dialog panel; 날짜 격자는 role=grid/gridcell + aria-selected(+aria-disabled)
- **이름**: visible label associated with the trigger or aria-label; sheet 는 aria-labelledby(sheet-title)
- **키보드**: trigger: Enter/Space(native click)로 열기; 격자 안: 화살표=날짜 이동, Home/End=주 시작·끝, PageUp/Down=달 이동, Enter/Space=선택; Esc=닫고 트리거로 포커스 복귀(PC)/시트 닫기(Mobile)
- **초점**: 열리면 키보드 초점이 달력의 날짜 칸으로 간다 — 골라 둔 날짜(기간이면 시작일), 없으면 오늘, 오늘이 보이는 달에 없으면 그 달의 1일(막힌 날이면 그 달의 첫 선택 가능 날짜). PC 팝오버와 모바일 시트가 같은 규칙이다(river 2026-10-13 '-> 추천안으로'). 닫히면 트리거로 복귀. 모바일 시트는 시트 안에서 Esc·배경·닫기로만 닫히는 단순 계약(모달과 같은 패턴).
- **상태 표시**: 런타임이 aria-expanded·aria-selected·aria-disabled·data-filled·data-state·data-range-band 를 갱신하고 s1:date-picker:open·close·change 를 낸다

---

정본 지문 `58222df141bbfa0787e41becfe79afefe74d76c35352453ae88ecead4e09bf3d` · 부품 버전 0.4.0
