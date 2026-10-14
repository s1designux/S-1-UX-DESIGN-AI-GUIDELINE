# S1Table — `data-s1-component="table"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 행·열의 정형 데이터를 보여줄 때.
- 정렬·선택(체크박스)·행 hover/selected 가 필요할 때.

## 이럴 땐 다른 걸

- 카드형 비정형 목록에는 쓰지 않는다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/table.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/table.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/table.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `md` `sm` `xsm` |
| `data-break` | 화면(PC·모바일) | `pc` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `div[data-s1-component=table]`
- 꼭 있어야 하는 속성: `data-size`
- 꼭 있어야 하는 부분(`data-s1-part`): `table` `header-cell` `row` `cell`
- th[data-s1-part=header-cell][scope=col] ↔ 열 제목
- 선택 셀의 체크박스는 코어 [data-s1-component=checkbox] 를 그대로 넣는다

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:table:selectionchange` |  |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: table·thead·tbody·tr·th[scope=col]·td
- **이름**: 전체선택 체크박스와 각 행 체크박스에 aria-label 을 준다
- **키보드**: native Tab 이동과 Space 선택. 방향키 격자 이동은 채택하지 않는다(river 결정 2026-09-02, HD-4 A)

---

정본 지문 `e9ba689fb4c2ee4662ecd43089dd2601e2d4980ccb91440975f111b74e589f65` · 부품 버전 0.2.6
