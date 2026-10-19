# S1Tab — `data-s1-component="tab"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 같은 화면에서 콘텐츠 영역을 전환할 때.
- 정본에 등록된 플랫폼과 크기 중 사용 맥락에 맞는 항목을 고른다.

## 이럴 땐 다른 걸

- 페이지 이동은 Navigation.
- 상호배타 폼 선택은 Radio.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/tab.html` · `examples/tab.mobile.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/tab.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/tab.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `md` `sm` `xsm` |
| `data-break` | 화면(PC·모바일) | `pc` `mobile` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `div[data-s1-component=tab][role=tablist]`
- 꼭 있어야 하는 속성: `data-size` `data-break` `role` `aria-label`
- 꼭 있어야 하는 부분(`data-s1-part`): `tab`

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: role=tablist with button[role=tab] and optional role=tabpanel
- **이름**: tablist aria-label; each tab has visible label
- **키보드**: ArrowLeft/ArrowRight move and select; Home/End jump
- **초점**: roving tabindex; 초점 표시는 브라우저 기본을 그대로 쓴다 — 정본에 focus 표현이 없다(2026-09-02 river 결정).
- **상태 표시**: runtime synchronizes aria-selected, tabindex, and an optional controlled panel

---

정본 지문 `a8d8aaa4fac1b9244261b50b512da64c42b275b395606ef644ca5852c0166a88` · 부품 버전 0.5.0
