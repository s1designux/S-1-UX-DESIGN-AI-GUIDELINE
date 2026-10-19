# S1ListRow — `data-s1-component="list-row"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 같은 모양의 줄이 반복되는 목록을 만들 때.

## 이럴 땐 다른 걸

- 표의 행 — Table 을 쓴다.
- 바텀시트 안의 고르기 줄 — Bottom Sheet Option 을 쓴다.
- 드롭다운 안의 옵션 줄 — Dropdown List 를 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/list-row.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/checkbox.css` · `components/toggle.css` · `components/list-row.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-type` | `nav` | 누르면 다른 화면으로 가는 줄 — 오른쪽 화살표 |
| `data-type` | `value` | 현재 값을 보여 주고 누르면 바꾸는 줄 — 오른쪽에 값 |
| `data-type` | `read` | 읽기만 하는 줄 — 정보 표시용 |
| `data-type` | `pick` | 왼쪽 체크박스로 고르는 줄 |
| `data-type` | `agree` | 약관 동의처럼 체크박스 + 설명이 붙는 줄 |
| `data-type` | `switch` | 오른쪽 토글 스위치가 있는 줄 |
| `data-type` | `thumb` | 왼쪽에 사진·아이콘 자리(40각)가 있는 줄 |

## 마크업 규칙

- 루트: `요소는 유형(Type)이 하는 일에 맞춘다 — Nav·Value(눌러서 이동/편집)=button, Read·Thumb(보여주기만)=div(누르지 않는다), Pick(고르기)=label(체크 코어를 감싸 클릭 영역을 넓힌다), Agree=div(체크 영역 label[check] + 오른쪽 칸의 약관 열기 button — label 안에 button 을 넣지 않는다), Switch=div(토글 컨트롤 자체가 상호작용 요소다). 공통 속성 data-s1-component=list-row, data-type, 선택 data-state. Density 축은 없다(2026-09-21 정정 — 한 벌만 쓴다).`
- 꼭 있어야 하는 속성: `data-type`
- 꼭 있어야 하는 부분(`data-s1-part`): `text` `title`
- 있어도 되는 부분: `description` `lead` `thumbnail` `trail` `value` `chevron` `check` `open`
- checkbox·toggle 코어를 그대로 조립한다 — 복제하지 않는다.
- checkbox 코어 내부에는 코어 자신의 label 을 넣지 않는다(Label=Off) — 이 컴포넌트의 title 이 보이는 글자이자 accessible name 출처다.
- 다른 코어(checkbox·toggle·radio·text-button 등) 내부 part 는 이 컴포넌트 CSS 가 선택하지 않는다 — 자리(flex)만 준다.
- lead·trail 은 슬롯이다(정본 makeSlot "왼쪽 칸"·"오른쪽 칸", river 2026-09-22) — 기본 내용을 빼고 다른 부품으로 갈아끼우거나 비울 수 있다. 비우면([data-s1-part=lead]:empty / [data-s1-part=trail]:empty) 그 칸 자체가 사라진다.
- Agree 의 약관 열기 버튼 click 은 이 컴포넌트가 받지 않는다 — 약관 화면을 여는 동작은 쓰는 화면이 배선한다(jsRequired:false). 체크 label 과 버튼은 서로 형제라 버튼을 눌러도 체크가 바뀌지 않는다.

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: Nav·Value=button(누르면 이동/편집). Read·Thumb=역할 없는 div(누를 수 없다). Pick=label 이 checkbox 코어의 native input[type=checkbox] 를 감싼다. Agree=div 루트 안에 체크 label(checkbox 를 감쌈)과 약관 열기 native button 이 형제로 있다(label 안에 button 중첩 없음). Switch=div 안에 toggle 코어의 native button[role=switch] 를 그대로 둔다.
- **이름**: Nav·Value·Read·Thumb 은 title 글자가 곧 보이는 이름이다(별도 aria 불필요). Pick·Agree 의 checkbox control 과 Switch 의 toggle 은 aria-labelledby 로 이 컴포넌트의 title id 를 가리켜 accessible name 을 만든다(checkbox·toggle 각자 계약의 accessibleName 요건을 충족). Agree 의 약관 열기 버튼은 하는 일을 말하는 aria-label(예: "이용약관 보기")을 갖고 화살표 아이콘은 aria-hidden 이다.
- **키보드**: Nav·Value(button)·Pick/Agree 의 checkbox·Switch 의 toggle 은 각자 코어 계약의 Tab 순서·Space/Enter 활성화를 그대로 따른다. Read·Thumb 는 상호작용 요소가 아니므로 초점 순서에 들어가지 않는다. Agree 는 체크 → 약관 열기 버튼 순으로 Tab 초점이 간다. 줄이 비활성이면 체크 input·버튼 모두 disabled.
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(다른 코어와 동일한 2026-09-02 river 결정).

---

정본 지문 `a57e54755e1f5117d3db63268e22479371192838564e2dbc4f639723913b54f8` · 부품 버전 0.5.0
