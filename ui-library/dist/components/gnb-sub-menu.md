# S1GnbSubMenu — `data-s1-component="gnb-sub-menu"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- GNB 주 메뉴 아래로 하위 메뉴를 펼쳐 보일 때.

## 이럴 땐 다른 걸

- 모바일에는 쓰지 않는다(PC 전용).
- 단일 목록 하나만 띄우는 자리에는 Dropdown 을 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/gnb-sub-menu.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/gnb-sub-menu-item.css` · `components/gnb-sub-menu.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-type` | `regular` | 카테고리 제목 + 항목 목록이 있는 기본 판(컬럼 4개 기준) |
| `data-type` | `compact-1` | 제목 없이 항목 6개가 한 줄로 나열되는 판 |
| `data-type` | `compact-2` | 제목 없이 묶음마다 항목 2개씩 놓이는 판(컬럼 5개 기준) |

## 마크업 규칙

- 루트: `div[data-s1-component=gnb-sub-menu][data-type]`
- 꼭 있어야 하는 부분(`data-s1-part`): `columns` `column`
- [data-s1-part=columns] 는 정본 Figma 슬롯 'Columns' 다 — hug 로 두고 늘리지 않는다. 부모(root)가 justify-content:center 로 컬럼 묶음 전체를 가운데 정렬한다. 늘리면 가운데 정렬할 여백이 사라져 왼쪽에 붙는다(정본 주석 3814).
- [data-s1-part=column] 은 <ul> 이고, GNB Sub Menu Item 인스턴스를 담는 <li> 들을 세로로 쌓는다. 묶음 안 간격은 regular 가 24(spacing/24) · compact-2 가 20(spacing/20)이다 — 원본 실측이라 유형마다 다르다. compact-1 은 묶음마다 항목이 1개뿐이라 묶음 안 간격이 없다(정본 0). 컬럼은 목록을 담는 그릇이며 그 자체가 목록이 아니다.
- regular 컬럼 구성 = 제목(1depth) <li> 1개 + 항목(2depth) <li> N개(묶음별 5·3·4·5). compact-1 컬럼 구성 = 항목(2depth) <li> 1개씩(묶음 6개, 제목 없음). compact-2 컬럼 구성 = 항목(2depth) <li> 2개씩(마지막 묶음만 1개, 묶음 5개, 제목 없음).
- Selected 항목 위치는 유형마다 다르다 — regular 는 4번째 묶음의 4번째 항목, compact-1·compact-2 는 마지막 묶음의 (유일한) 마지막 항목. host 가 aria-current="page" 를 정적으로 설정한다.
- 패널을 여는 GNB 메뉴가 aria-expanded 와 aria-controls 로 이 패널의 id 를 가리킨다. 열고 닫는 동작·Esc·포커스 복귀는 이 패널을 여는 gnb 가 소유한다(river 결정 2026-09-09, D4·D5 — gnb.js, jsRequired=true) — 이 컴포넌트 자신은 여전히 펼쳐진 모양만 낸다(jsRequired=false).
- 하위메뉴 패널은 열려도 본문을 아래로 밀지 않고 GNB 바 바로 아래에 본문 위로 겹쳐 뜬다(river 결정 2026-10-12). 왼쪽 끝·폭·세로 위치는 gnb.js 가 열 때 바의 상자에 맞춰 채우므로 position 이 잡힌 조상 상자를 따로 둘 필요는 없다. 단 gnb.js 로 이어 준(aria-controls) 패널만 겹침이 된다.

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: 패널 안 목록은 <ul data-s1-part=column>/<li> 로 낸다. 컬럼은 목록을 담는 그릇이다.
- **이름**: 패널을 여는 GNB 메뉴의 aria-controls 로 연결된다. 패널 자체에는 aria-label 을 host 가 필요에 따라 추가로 붙일 수 있다.
- **상태 표시**: 패널을 여는 GNB 메뉴에 aria-expanded 를 gnb.js 가 동적으로 설정한다. 이 컴포넌트는 그 상태를 스스로 만들지 않는다.

---

정본 지문 `bb5c6b604896261b44a23a749c1e80477ec3fd8badd468304abedf696e8cc9ac` · 부품 버전 0.2.8
