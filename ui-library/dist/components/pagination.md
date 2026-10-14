# S1Pagination — `data-s1-component="pagination"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 긴 목록·표를 페이지로 나눠 이동할 때.

## 이럴 땐 다른 걸

- 무한 스크롤 UX 에는 쓰지 않는다.
- 적은 항목은 페이지네이션 없이 한 번에 보여준다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/pagination.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/pagination.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/pagination.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 마크업 규칙

- 루트: `nav[data-s1-component=pagination]`
- 꼭 있어야 하는 속성: `data-total-pages` `data-page` `aria-label`
- 꼭 있어야 하는 부분(`data-s1-part`): `arrow-group` `pages` `page`
- 이동 버튼 4개: data-s1-action=first(|< 이전 페이지 묶음) · previous(< 이전 페이지) · next(> 다음 페이지) · last(>| 다음 페이지 묶음). 이름 first·last 는 기존 마크업과 맞추려고 그대로 두었다 — 동작은 묶음 넘김이다.
- 묶음 이동은 이전/다음 묶음의 첫 쪽으로 간다(component-behavior.pc.json Pagination). 첫 묶음에서 |<, 마지막 묶음에서 >| 가 막힌다. 번호는 한 묶음에 최대 6개.

## 값·옵션 속성

| 속성 | 뜻 |
|---|---|
| `data-total-pages` | 총 쪽수(처음 값). 나중에 바꿀 때는 setTotalPages(count) 를 부른다 — 번호 창을 다시 그리고 현재 쪽 표시를 유지한다 |
| `data-page` | 현재 쪽 |

## 스크립트로 부르기

`init(요소)` 가 돌려주는 객체의 `setPage(page)` · `setTotalPages(count)` · `page` · `totalPages`.

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: nav landmark with native buttons
- **이름**: pagination nav 와 이동 버튼 4개에 한국어 이름 — 이전 페이지 묶음 · 이전 페이지 · 다음 페이지 · 다음 페이지 묶음; 번호 버튼은 쪽 번호를 포함한다
- **키보드**: native Tab, Enter, and Space activation
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(2026-09-02 river 결정). 단, 이동으로 눌린 버튼이 막히거나 번호 버튼이 다시 그려지면 초점을 현재 쪽 번호 버튼으로 옮겨 body 로 떨어지지 않게 한다.
- **상태 표시**: runtime keeps aria-current=page, arrow disabled states, and current page label in sync

---

정본 지문 `04aaf4daa947a835435ee2a664646d982b02d46e8d34a0b5b4563f1269f20e58` · 부품 버전 0.4.1
