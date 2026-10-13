# S1GnbSubMenuItem — `data-s1-component="gnb-sub-menu-item"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- GNB 하위메뉴 패널의 카테고리 제목 또는 항목을 놓을 때.

## 이럴 땐 다른 걸

- 상단바의 주 메뉴는 GNB 의 메뉴 슬롯을 쓴다.
- 패널 없이 이 부품만 화면에 두지 않는다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/gnb-sub-menu-item.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/gnb-sub-menu-item.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: 목록 안에서 <li> 하나에 2depth 는 <a href> 하나, 1depth 는 <a>·<button> 없는 텍스트(<span>) 하나로 낸다.
- **이름**: 글자 자체가 접근 가능한 이름이다.
- **키보드**: Tab 이동 + Enter 활성화의 네이티브 동작만 쓴다. 방향키 이동은 정본에 없어 만들지 않는다.
- **상태 표시**: 현재 위치인 2depth 항목(<a href>)에 host 가 aria-current="page" 를 정적으로 설정한다. 1depth(카테고리 제목·<span>, 링크 아님)는 '현재 페이지' 개념이 없어 aria-current 도 다른 상태 표시도 쓰지 않는다.

---

정본 지문 `b07b354a23f96950f94e4eefabf8ac540723824a19d6bcbd2fe5b79a80683227` · 부품 버전 0.2.5
