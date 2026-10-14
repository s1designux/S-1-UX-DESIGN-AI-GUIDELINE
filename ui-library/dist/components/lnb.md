# S1Lnb — `data-s1-component="lnb"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 화면 왼쪽에 세로로 서서 같은 서비스 안의 큰 영역을 오가는 메뉴가 필요할 때.
- 하위메뉴(2뎁스)까지 한 판에서 보여 줄 때.

## 이럴 땐 다른 걸

- 화면 위쪽 가로 메뉴가 필요할 때 — GNB 를 쓴다.
- 모바일 하단 이동 막대가 필요할 때 — Mobile Bottom Nav 를 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/lnb.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/lnb.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/lnb.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-variant` | `menu` | 메뉴만 있는 왼쪽 메뉴 |
| `data-variant` | `brand` | 맨 위에 로고 자리가 있고 아래에 구분선이 붙는 왼쪽 메뉴 |

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `md` `lg` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `nav[data-s1-component=lnb][aria-label] > div[data-s1-part=head](brand? + button[data-s1-part=collapse]) + ul[data-s1-part=items] 하나 이상. 메뉴 항목은 li > a|button[data-s1-part=item](span[data-s1-part=item-icon] + 글자 [+ span[data-s1-part=item-toggle]]). 하위메뉴는 항목 button(aria-expanded·aria-controls) 바로 아래 ul[data-s1-part=subitems][id].`
- 꼭 있어야 하는 부분(`data-s1-part`): `head` `collapse` `collapse-icon` `items` `item`
- 있어도 되는 부분: `brand` `brand-logo` `group` `item-icon` `item-toggle` `subitems`
- 하위메뉴(2뎁스) 글자색은 상위 메뉴와 같은 색이다 — 연하게 낮추지 않는다(river 2026-09-29).
- 로고에는 집 아이콘을 넣지 않는다. 로고 그림만 두고 누르면 첫 화면으로 간다.
- 단추(button)로 만든 항목은 font-family: inherit 가 필요하다 — 이 CSS 가 이미 준다(안 그러면 그 줄만 브라우저 기본 글꼴로 얇게 나온다).

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:lnb:collapse` |  |
| `s1:lnb:toggle` |  |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: nav[aria-label] 안의 ul/li 목록. 이동 항목은 a[href], 하위메뉴를 여는 항목과 접기 단추는 button[type=button].
- **이름**: nav 는 aria-label(예: "기본 메뉴")로 이름을 갖는다. 항목은 보이는 글자가 이름이다 — 접힌 상태에서는 title 속성이 이름을 이어 준다. 접기 단추는 aria-label.
- **키보드**: Tab 순서 = 접기 단추 → 메뉴(위→아래). 하위메뉴는 열려 있을 때만 초점 순서에 들어온다(닫히면 hidden). 방향키 이동은 정본에 없어 만들지 않는다.
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(다른 코어와 동일한 2026-09-02 river 결정).
- **상태 표시**: 하위메뉴 항목의 aria-expanded ↔ 하위 목록 hidden, 접기 단추의 aria-pressed ↔ 루트 data-state 를 런타임이 항상 함께 맞춘다. 현재 위치는 aria-current=page 로 알린다.
- **reducedMotion**: prefers-reduced-motion: reduce 이면 접힘 폭·화살표 전환 모션을 끈다.

## 바꿀 수 있는 CSS 변수

`--s1-brand-logo` · `--s1-brand-logo-w` · `--s1-collapse-icon` · `--s1-collapse-icon-solid` · `--s1-icon` · `--s1-icon-solid` — 예: 아이콘 모양을 바꿀 때 `--s1-brand-logo: url("my-icon.svg")`.

---

정본 지문 `f88063bde5d727e9e3f6cc63872fa259b23058436bde32ac0837e3c6ee376036` · 부품 버전 0.2.4
