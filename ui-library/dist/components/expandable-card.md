# S1ExpandableCard — `data-s1-component="expandable-card"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 한 화면에 여러 덩어리를 쌓아 두고, 필요한 것만 펴서 보게 할 때.
- 질문과 답처럼 제목만으로 고르고 내용은 접어 두는 목록.

## 이럴 땐 다른 걸

- 화면을 덮어야 하는 내용 — Bottom Sheet·Modal 을 쓴다.
- 같은 모양의 한 줄이 반복될 뿐 펼칠 내용이 없을 때 — List Row 를 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/expandable-card.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/expandable-card.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/expandable-card.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 마크업 규칙

- 루트: `div[data-s1-component=expandable-card] > button[data-s1-part=header][aria-expanded][aria-controls] + div[data-s1-part=panel-wrap][id] > div[data-s1-part=panel]. header 안은 span[data-s1-part=text](title·subtitle·body·note·caption 중 필요한 것) + span[data-s1-part=toggle-icon].`
- 꼭 있어야 하는 부분(`data-s1-part`): `header` `text` `title` `toggle-icon` `panel-wrap` `panel`
- 있어도 되는 부분: `subtitle` `body` `note` `caption`
- 원본: SW UX GUIDE V2.4 「card」 expandable-card (540:6547 닫힘 / 540:6555 펼침) 실측 — padding 16/16/20/20 · 세로 간격 10 · radius 10 · 테두리 line/default · 펼침칸 바탕 bg/level-2 · 헤더와 펼침칸 사이 선 없음.
- 글자 다섯 자리는 원본 실측 그대로다 — title 16/700 · subtitle 14/700 · body 14/400 · note 12/400 · caption 12/400.

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:expandable-card:change` |  |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: 머리줄은 button[type=button] — aria-expanded 로 열림 여부, aria-controls 로 펼침칸 id 를 가리킨다.
- **이름**: 머리줄 안 title 글자가 이름이다(별도 aria 불필요).
- **키보드**: Tab 으로 머리줄에 초점이 가고 Enter·Space 로 여닫는다(native button).
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(다른 코어와 동일한 2026-09-02 river 결정).
- **상태 표시**: 런타임이 aria-expanded ↔ panel-wrap[data-open] 두 표시를 항상 함께 맞춘다.
- **reducedMotion**: prefers-reduced-motion: reduce 이면 펼침·화살표·배경 전환 모션을 끈다.

---

정본 지문 `6d70380b945a5903105aabf7c6e5d7b16ecc87e947066abd6c1c6fba39d4c6e1` · 부품 버전 0.1.4
