# S1MultiToggle — `data-s1-component="multi-toggle"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 선택지가 2~4개로 적고 서로 배타적일 때(정렬 기준·기간 범위 등).
- 선택 결과가 즉시 화면에 반영돼야 할 때.

## 이럴 땐 다른 걸

- 선택지가 5개 이상이거나 길이가 들쭉날쭉할 때 — Select Box 를 쓴다.
- 여러 개를 동시에 고를 수 있어야 할 때 — Checkbox·Filter Chip 을 쓴다.
- on/off 하나만 있을 때 — Toggle 을 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/multi-toggle.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/multi-toggle.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/multi-toggle.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `md` `sm` `xsm` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `div[data-s1-component=multi-toggle][role=radiogroup]`
- 꼭 있어야 하는 속성: `data-size`
- 꼭 있어야 하는 부분(`data-s1-part`): `cell`
- root 에 aria-label 또는 aria-labelledby
- 셀 2개 이상, 정본 문서화 대표 구성은 3개

## 스크립트로 부르기

`init(요소)` 가 돌려주는 객체의 `init(root)` · `destroy(root)` · `instance.select(cell)`.

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:multi-toggle:change` |  |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: role=radiogroup with role=radio cells and aria-checked
- **이름**: root aria-label or aria-labelledby
- **키보드**: ArrowLeft/ArrowRight and ArrowUp/ArrowDown move and select; Home/End jump; Space/Enter select
- **초점**: roving tabindex; 초점 표시는 브라우저 기본을 그대로 쓴다 — 정본에 focus 표현이 없다(2026-09-02 river 결정).
- **상태 표시**: runtime synchronizes aria-checked and roving tabindex across cells

---

정본 지문 `91c9bfe82bef3e033e7867a16d40fc85d68ae059366e8a7b69752aa246682396` · 부품 버전 0.3.2
