# S1Gnb — `data-s1-component="gnb"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- PC 상단 글로벌 내비게이션이 필요할 때.
- 로고 + 메뉴 + 유틸(아이콘) 조립.

## 이럴 땐 다른 걸

- 사이드바 내비게이션은 Navigation.
- 모바일 하단 탭은 Mobile Bottom Nav.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/gnb.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/gnb.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/gnb.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-variant` | `center-between` | 로고·메뉴·유틸 아이콘 세 덩어리가 양 끝과 가운데로 벌어져 놓임 |
| `data-variant` | `start` | 로고와 메뉴가 왼쪽에 함께 붙고, 유틸 아이콘만 오른쪽 끝 |

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `md` `sm` `xsm` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `nav[data-s1-component=gnb][data-size][data-variant]`
- 꼭 있어야 하는 속성: `data-size` `data-variant`
- center-between 은 로고·메뉴·유틸이 nav 의 직계 자식 3개로 나열되고 justify-content:space-between 으로 3분할된다(정본 :3591-3592).
- start 는 로고+메뉴가 [data-s1-part=leading] 안에 gap 64 로 묶이고, 유틸은 margin-left:auto 로 오른쪽에 붙는다(정본 :3593-3600).
- 메뉴가 놓이는 자리 전체가 정본의 Figma 슬롯 'Menus' 다 — 기본 3개이며, <li><a data-s1-part=menu> 를 늘리고 줄여 메뉴 수를 조정한다(registry anatomy, river 지시 2026-09-03).
- 현재 메뉴 1개에만 aria-current="page" 를 준다. Hover 는 시각만 같고(fillGnbMenu active, 정본 :3138) ARIA 로는 alert 하지 않는다 — 마우스 hover 는 순수 :hover 의사클래스다.
- 언어 항목은 지구본 아이콘 + 보이는 글자 라벨(예: '한국어')을 함께 두므로 별도 aria-label 을 붙이지 않는다(registry a11y) — 버튼의 접근 가능한 이름은 라벨 텍스트다.
- 계정·메뉴(햄버거) 버튼은 아이콘만 있어 aria-label 로 이름을 준다(기본값 '계정'·'전체 메뉴').
- util 안의 [data-s1-part=menu-toggle] 은 nav 링크 [data-s1-part=menu] 와 이름이 겹치지 않게 구분한 이름이다 — 정본 GNB Utility Icon 세트의 'menu' 축(햄버거)과 GNB Menu 세트의 메뉴 링크는 서로 다른 개념이다.
- [data-s1-part=menu] 에 aria-controls="<gnb-sub-menu 인스턴스 id>" 를 주면 그 메뉴가 그 패널을 여는 트리거가 된다(river 결정 2026-09-09, D4·D5) — gnb.js 가 aria-expanded·hidden 을 물린다. aria-controls 가 없는 메뉴는 하위메뉴 없이 그냥 링크다 — 하위메뉴는 강제 의존이 아니다(dependencies.optionalCoreComponents).
- 패널은 nav 의 자식이 아니라 host 페이지 안 형제 요소로 둔다(gnb.example.html) — GNB 바 하나가 여러 메뉴의 패널을 동시에(단, 한 번에 하나만 열림) 가리킬 수 있다.
- 하위메뉴 패널은 열려도 본문을 아래로 밀지 않고 GNB 바 바로 아래에 본문 위로 겹쳐 뜬다(river 결정 2026-10-12). 왼쪽 끝·폭·세로 위치는 gnb.js 가 열 때 바의 상자에 맞춰 채우므로 position 이 잡힌 조상 상자를 따로 둘 필요는 없다. 단 gnb.js 로 이어 준(aria-controls) 패널만 겹침이 된다.

## 스크립트로 부르기

`init(요소)` 가 돌려주는 객체의 `openMenu(trigger)` · `closeMenu(trigger)`.

## 이벤트

요소에서 올라오는 사용자 정의 이벤트입니다(`element.addEventListener(...)`). 값은 `event.detail` 에 있습니다.

| 이벤트 | detail |
|---|---|
| `s1:gnb:open` |  |
| `s1:gnb:close` |  |

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: nav[data-s1-component=gnb][aria-label]. 메뉴 목록은 ul/li, 각 메뉴는 a[href]. 계정·메뉴·언어는 button[type=button].
- **이름**: nav 는 aria-label(예: "주 메뉴")로 이름을 갖는다. 계정·메뉴 버튼은 aria-label. 언어 버튼은 보이는 라벨 텍스트가 이름이다. 로고가 링크면 텍스트가 이름이다.
- **키보드**: Tab 순서 = 로고 → 메뉴(좌→우) → 언어 → 계정 → 전체메뉴. 방향키 메뉴 이동은 정본에 없어 만들지 않는다. aria-controls 를 가진 메뉴는 Tab 으로 들어가면 그 하위메뉴 패널이 펼쳐지고, Esc 를 누르면 닫히며 초점이 그 메뉴로 되돌아온다(2026-09-09, D4·D5). river 결정(2026-09-15, gnb-nav 후속): 펼쳐진 패널이 있는 트리거에서 Tab 을 한 번 더 누르면 초점이 그 패널의 첫 링크로 들어간다 — 패널의 마지막 링크에서 Tab 을 누르면 패널이 닫히고 원래 그 트리거 다음에 왔을 요소(다음 메뉴 또는 유틸 버튼)로 넘어간다 — 그 트리거가 이 GNB 의 마지막 초점 가능 요소여서 갈 곳이 없으면 가로채지 않고 브라우저가 GNB 바깥으로 넘긴다. 패널 첫 링크에서 Shift+Tab 을 누르면 트리거로 되돌아간다. **역방향도 정방향의 거울이다**(river 결정 2026-09-16): 어떤 자리에서 Shift+Tab 을 누를 때 바로 앞이 하위메뉴를 가진 메뉴면 그 패널의 **마지막** 링크로 들어간다 — 그러지 않으면 되돌아올 때만 목록이 통째로 건너뛰어진다. 이건 초점을 가두는 게 아니라 원래 Tab 순서에 없던 패널 내용을 순서 안에 끼워 넣는 것이다 — 패널 밖으로는 항상 자연스럽게 나간다.
- **초점**: 하위메뉴 패널이 열린 상태에서 Esc 를 누르면 그 패널을 연 메뉴로 초점을 되돌린다. Tab 이 패널 안으로 들어가고 나가는 것(위 keyboard 참고)도 이 컴포넌트가 관리하는 자동 이동이다 — 다만 순서에 끼워 넣을 뿐 가두지는 않는다: 패널 안 어디서도 Tab/Shift+Tab 을 계속 누르면 결국 패널을 벗어나 다음·이전 요소로 나간다(팝업이 아니라 펼침 영역이다, gnb-sub-menu a11y.focus). 그 메뉴가 이 GNB 의 마지막 초점 가능 요소여서 nav 안에 갈 곳이 없으면(유틸 영역이 없는 조립) Tab 을 아예 가로채지 않고 브라우저가 GNB 바깥으로 넘긴다 — 되돌리면 그 자리에서 무한 순환하는 가둠이 된다(🤖 component-verifier 2026-09-15 D-1 실측). 그 외의 초점 이동은 없다.
- **상태 표시**: 현재 메뉴 1개에 aria-current="page" 를 host 가 정적으로 설정한다(현재 경로 기준) — 이건 여전히 host 소유다. aria-controls 를 가진 메뉴의 aria-expanded 와 그 패널의 hidden 은 gnb.js 가 동적으로 관리한다(true/false 토글, 초기값 false·hidden). Hover 는 시각(패널 열림)과 aria-expanded 를 함께 바꾸지만, 순수 CSS :hover 로 나는 메뉴 밑줄·글자색 자체는 여전히 ARIA 로 따로 알리지 않는다 — mobile-bottom-nav 의 aria-current 정적 원칙은 그대로 유지된다.

---

정본 지문 `fcf948850d0042cb94225c0ba90ba464b387fc58d1664b052112154488f4e0e4` · 부품 버전 0.2.9
