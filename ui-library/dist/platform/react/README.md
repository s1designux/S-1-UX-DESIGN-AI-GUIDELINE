# @s1/ui-react

**배포본 번호 0.6.10** · 2026-09-15 판
이 번호가 최신인지는 디자인가이드 내려받기 화면에서 확인하세요 — 번호가 다르면 새로 받으면 됩니다.
코드에서 볼 때는 `import { S1_VERSION } from "@s1/ui-react"` 입니다.

S1 디자인 시스템의 **승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트**입니다.
마크업을 새로 쓰지 않았고, 값·구조·속성은 배포본 예제와 같습니다.

## 1. 준비 — CSS 를 먼저 읽힌다

컴포넌트는 배포본 CSS 로 그려집니다. 앱 진입점에서 한 번 읽히세요.

```js
import "@s1/ui/assets/css/tokens.css";
import "@s1/ui/assets/css/typography.css";
import "@s1/ui/s1-ui.css";
```

## 2. 쓰기

```jsx
import { S1Button, S1Input, S1Table } from "@s1/ui-react";

<S1Button variant="primary" size="md" parts={{ label: "확인" }} onClick={save} />

<S1Input value={name} onChange={(event) => setName(event.target.value)} placeholder="이름" />

<S1Table
  headerCells={["이름", "부서", "수량"]}
  rows={[["김하늘", "디자인", 3], ["박바다", "개발", 5]]}
/>
```

## 3. 네 가지 통로

| 통로 | 언제 쓰나 | 예 |
|---|---|---|
| `parts` | 글자·아이콘 한 칸을 갈아끼울 때 | `parts={{ label: <><Icon /> 저장</> }}` |
| 목록 prop | 표·목록에 내 데이터를 넣을 때 | `rows={[["가", "나"]]}` |
| 폼 prop | 입력값을 React 상태와 잇을 때 | `value` · `onChange` · `inputRef` |
| 나머지 속성 | 루트에 그대로 붙는다 | `id` · `onClick` · `aria-*` |

슬롯 한 칸에 속성까지 주려면 `{ content, attrs }` 로 넘깁니다.

### 하단 내비 아이콘 갈아끼우기

`S1MobileBottomNav` 에 들어 있는 아이콘 네 가지(`home`·`search`·`notification`·`settings`)는 **예시**입니다.
실제 화면은 칸 구성이 다르기 마련이라, 아이콘 라이브러리에서 받은 SVG 를 이렇게 끼웁니다.
**받을 때 Solid 변형으로 받으세요** — 하단 내비는 채운 도형이 기준이고, 한 바 안에서 Line 과 섞이면 칸마다 무게가 달라 보입니다.

```jsx
<S1MobileBottomNav
  label="내 정보"
  selected={false}
  style={{ "--s1-mobile-nav-icon": "url(/icons/ic_내정보.svg)" }}
/>
```

단색 도형이면 색은 그대로 컴포넌트가 토큰으로 칠합니다(마스크 방식).

```jsx
<S1Table rows={[{ cells: ["합계", "", { content: 8, attrs: { "data-align": "center" } }] }]} />
```

## 4. 서버 렌더링

컴포넌트는 서버에서도 같은 마크업을 냅니다. 동작 스크립트(열고 닫기·키보드)는 브라우저에서 붙습니다.

## 5. 어떤 컴포넌트를 쓸까

**먼저 `preview.html` 을 브라우저로 열어 보세요.** 22종이 실제 모습으로 그려지고, 크기·변형과 "언제 쓰나"가 함께 보입니다.

| 컴포넌트 | 변형(variant) | 크기(size) | 화면(breakName) | 그 밖에 받는 값 | 언제 쓰나 |
|---|---|---|---|---|---|
| `S1Input` | — | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` `password` `password-mobile` `search` `search-mobile` | `value`·`onChange` · `onClear` · `onSearch` | 한 줄 텍스트·숫자를 입력받을 때 — 로그인·검색·필터·설정 폼 등. 라벨·도움말과 함께 쓰려면 Input Slots(라벨/헬퍼 조합) 패턴으로 감싼다. 안내메시지(helper)는 필요한 화면에서만 켠다 — 계정 관련 화면(로그인·비밀번호 변경·회원가입)처럼 입력 규칙을 미리 알려야 하는 곳이 대표적이다. 일반 입력·검색에는 넣지 않는다(river 결정 2026-09-07). |
| `S1Button` | `primary` `secondary` `blue-line` | PC `md` `xsm` `xxsm` · 모바일 `lg` | `pc` `mobile` | `parts` | 사용자가 실행할 액션을 트리거할 때 — 저장·확인·취소·다음 등. 화면에서 가장 중요한 단일 액션은 primary, 보조 액션은 secondary, 약한 강조는 blue-line. |
| `S1Checkbox` | — | — | — | `value`·`onChange` | 여러 항목을 독립적으로 켜고 끌 때(다중 선택). 약관 동의처럼 항목마다 따로 켜고 끌 때. |
| `S1Radio` | — | — | — | `value`·`onChange` | 여러 보기 중 하나만 고를 때(상호배타). |
| `S1Toggle` | — | — | — | `parts` | 단일 설정을 즉시 켜고 끌 때(즉시 반영). |
| `S1Chip` | `line` `solid` | PC `sm` `md` · 모바일 `sm` | `pc` `mobile` | `parts` | 선택 가능한 태그·필터를 나열할 때. filter 는 드롭다운으로 값을 고르고 적용 완료(complete)를 표시할 때. |
| `S1Dropdown` | `text` `checkbox` | `xxsm` `xsm` `md` | — | `options` · `onChange` | 트리거를 눌러 옵션 목록에서 하나를 고를 때(글자 유형). 한 목록에서 여러 항목을 동시에 고를 때(체크박스 유형) — 필터·대상 선택 등. Select 의 기반 컴포넌트. |
| `S1Select` | — | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` | `options` · `onChange` · `onOpen` · `onClose` | 단일 값을 목록에서 고르는 폼 필드일 때. Dropdown 토큰(--dropdown-*)을 재사용한다. |
| `S1FilterChip` | `line` `solid` | PC `sm` `md` · 모바일 `md` | `pc` `mobile` | `options` · `onChange` · `onOpen` · `onClose` | 목록·표의 정렬/기간/범주 같은 조건을 바꿀 때. 선택한 값을 칩 자체에 계속 보여줘야 할 때(무엇이 걸려 있는지 한눈에). |
| `S1Tab` | — | PC `md` `sm` `xsm` · 모바일 `sm` | `pc` `mobile` | `tabs` · `children` | 같은 화면에서 콘텐츠 영역을 전환할 때. 정본에 등록된 플랫폼과 크기 중 사용 맥락에 맞는 항목을 고른다. |
| `S1Pagination` | — | `28` | — | `pages` | 긴 목록·표를 페이지로 나눠 이동할 때. |
| `S1Textarea` | — | — | `pc` `mobile` | `value`·`onChange` | 여러 줄 텍스트를 입력받을 때(메모·설명 등). Input 과 시각 동일 — --input-* 토큰을 공유한다. |
| `S1MultiToggle` | — | `md` `sm` | — | `cells` · `onChange` | 선택지가 2~4개로 적고 서로 배타적일 때(정렬 기준·기간 범위 등). 선택 결과가 즉시 화면에 반영돼야 할 때. |
| `S1Modal` | `single` `dual` | — | `pc` `mobile` | `onOpen` · `onClose` | 확인·알림 등 흐름을 멈추고 결정을 받을 때. Single=알림/설명체 1버튼, Dual=확인/질문체 2버튼. |
| `S1Table` | — | PC `md` `sm` `xsm` | — | `headerCells` · `rows` · `onSelectionchange` | 행·열의 정형 데이터를 보여줄 때. 정렬·선택(체크박스)·행 hover/selected 가 필요할 때. |
| `S1MobileBottomNav` | `home` `search` `notification` `settings` | — | — | `parts` | 모바일 화면에서 최상위 영역 간 이동을 항상 보이게 둘 때. 탭 수가 3~5개로 고정된 주요 메뉴 구조일 때. |
| `S1MobileHeader` | `home-title` `home-title-subtitle` `standard-title` `standard-title-close` `standard-no-title` `standard-no-title-close` | — | — | `parts` | 모바일 앱 또는 모바일 웹 화면에서 상단 전역 크롬과 화면 이동 동작을 제공할 때. 회원가입처럼 앱바 안 제목을 비우고 본문 큰 제목을 사용하는 화면에는 Standard / No Title을 쓴다. |
| `S1TimePicker` | — | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` | `onOpen` · `onClose` · `onChange` | 시간(시/분)을 드롭다운 목록에서 고를 때. |
| `S1DatePicker` | `single` `range` | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` | `onOpen` · `onClose` · `onChange` | 날짜(단일/기간)를 고를 때. 트리거는 Base Input 필드. PC 는 팝오버 캘린더, Mobile 은 바텀시트로 표출. |
| `S1AssistButton` | — | — | — | `parts` | 본문 옆이나 목록 행 안처럼 좁은 자리에서, 눈에 덜 띄는 보조 동작 하나를 둘 때. 코어 Button 의 4크기(MD·XSM·XXSM·LG) 어디에도 맞지 않는, 원본에 정의된 고정 32px 자리. |
| `S1TextButton` | `primary` `secondary` | — | — | `parts` | 링크에 가까운 가벼운 보조 동작(더보기·자세히 등)을 텍스트만으로 표시할 때. Primary 는 강조가 필요한 텍스트 액션, Secondary 는 덜 중요한 텍스트 액션. |
| `S1ModalContent` | `single` `dual` | PC `md` `lg` `xl` | — | `onOpen` · `onClose` | 입력창·표·이미지처럼 확인 계열(짧은 텍스트)보다 큰 본문이 필요할 때. Single=알림/설명체 1버튼, Dual=확인/질문체 2버튼(확인 계열과 같은 규칙). |
| `S1BottomSheetOption` | `text` `checkbox` `radio` `list` | — | — | `parts` | 바텀시트 본문에 고를 것을 줄로 늘어놓을 때. Text = 한 값 고르기(고른 줄에 파란 체크), Checkbox = 여러 값 고르기, Radio = 한 값 고르기(동그라미 표시), List = 사람·항목처럼 아바타와 설명이 함께 있는 줄. |
| `S1BottomSheet` | `none` `single` `dual` | — | — | `onOpen` · `onClose` | 모바일에서 목록을 띄워 고르게 할 때 — 드롭다운 대신 쓴다(density-policy mobileSubstitutes.dropdown). 모바일에서 날짜·시간처럼 넓은 선택 UI 를 띄울 때. Footer=None 은 고르는 즉시 적용되는 목록, Single 은 '적용' 하나, Dual 은 '취소+적용'. |

크기·변형은 위에 적힌 값만 쓸 수 있습니다. 다른 값을 주면 그 자리에서 오류로 알려 줍니다.

### 이럴 땐 다른 걸 쓰세요

| 컴포넌트 | 대신 쓸 것 |
|---|---|
| `S1Input` | 여러 줄 입력은 Textarea 를 쓴다. 선택지 중 하나를 고르는 입력은 Select·Dropdown, 날짜·시간은 DatePicker·TimePicker 를 쓴다. 안내메시지가 필요하다는 이유로 '계정용 인풋' 같은 별도 컴포넌트를 만들지 않는다 — 안내메시지는 켜고 끄는 선택 슬롯이다. 업계 관행도 검색만 별도 컴포넌트로 가르고, 쓰이는 화면으로는 가르지 않는다(river 결정 2026-09-07). |
| `S1Button` | 페이지 이동만 하는 것은 링크를 고려한다. on/off 상태 전환은 Toggle, 다중 선택은 Checkbox·Chip 을 쓴다. |
| `S1Checkbox` | 여러 보기 중 하나만 고를 때는 Radio. 단일 on/off 설정은 Toggle. |
| `S1Radio` | 여러 개 동시 선택은 Checkbox. 단일 on/off 는 Toggle. |
| `S1Toggle` | 여러 항목 다중 선택은 Checkbox. 상호배타 다중 보기는 Radio. |
| `S1Chip` | 단일 액션 실행은 Button. 긴 목록의 단일 선택은 Select·Dropdown. |
| `S1Dropdown` | 즉시 실행 액션 그룹은 Button. 적은 수의 상호배타 선택은 Radio. 항목이 3~4개 이하로 적고 항상 보여도 되는 다중 선택은 목록을 접지 말고 Checkbox 를 펼쳐 쓴다. |
| `S1Select` | 다중 선택은 Checkbox·Chip. 즉시 실행 메뉴는 Dropdown/Button. |
| `S1FilterChip` | 단순 태그·상태 표시 — Chip 을 쓴다(누를 수 없는 표시용). 선택지가 배타적이고 개수가 적어 항상 펼쳐 두는 편이 나을 때 — Multi Toggle 을 쓴다. 폼 안의 값 입력 — Select Box 를 쓴다. |
| `S1Tab` | 페이지 이동은 Navigation. 상호배타 폼 선택은 Radio. |
| `S1Pagination` | 무한 스크롤 UX 에는 쓰지 않는다. 적은 항목은 페이지네이션 없이 한 번에 보여준다. |
| `S1Textarea` | 한 줄 입력은 Input. 선택형 입력은 Select·Dropdown. |
| `S1MultiToggle` | 선택지가 5개 이상이거나 길이가 들쭉날쭉할 때 — Select Box 를 쓴다. 여러 개를 동시에 고를 수 있어야 할 때 — Checkbox·Filter Chip 을 쓴다. on/off 하나만 있을 때 — Toggle 을 쓴다. |
| `S1Modal` | 비차단 알림은 토스트/인라인 메시지. 복잡한 폼·다단계는 별도 페이지·패널을 고려한다. |
| `S1Table` | 카드형 비정형 목록에는 쓰지 않는다. |
| `S1MobileBottomNav` | PC 화면 — PC 전역 이동은 GNB 를 쓴다. 항목이 자주 바뀌거나 6개 이상인 경우(더보기/드로어를 고려한다). |
| `S1MobileHeader` | PC 화면의 전역 내비게이션에는 GNB를 쓴다. 모바일 화면이 아닌 PC 전용 헤더에는 사용하지 않는다. |
| `S1TimePicker` | 날짜는 DatePicker. 자유 텍스트만 필요하면 Input. |
| `S1DatePicker` | 시간만 고를 때는 TimePicker. 자유 텍스트 날짜 입력만 필요하면 Input. |
| `S1AssistButton` | 화면의 주 액션(저장·확인 등)에는 코어 Button 을 쓴다. 배경·테두리가 없는 링크형 액션은 Text Button 을 쓴다. |
| `S1TextButton` | 배경·테두리가 있는 버튼이 필요하면 코어 Button 또는 Assist Button 을 쓴다. 페이지 이동 전용 링크는 <a> 를 우선 고려한다. |
| `S1ModalContent` | 짧은 확인 문구 하나면 확인 계열 Modal 을 쓴다. 페이지 전체를 차지하는 다단계 폼은 별도 페이지를 고려한다. |
| `S1BottomSheetOption` | 바텀시트 밖 — PC 목록은 Dropdown 을 쓴다. 표의 행 — Table 을 쓴다. |
| `S1BottomSheet` | PC 화면 — PC 는 드롭다운·팝오버·모달을 쓴다. 정본 시트는 모바일 폭(360) 기준이다. 확인·알림처럼 짧은 결정 — Modal 을 쓴다. 비차단 알림 — 토스트·인라인 메시지. |

## 6. 고치지 마세요

이 폴더는 자동 생성물입니다. 고치면 다음 배포에서 지워집니다.
