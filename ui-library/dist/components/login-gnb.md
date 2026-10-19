# S1LoginGnb — `data-s1-component="login-gnb"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 로그인 화면 맨 위에 서비스 이름과 언어 선택을 보여줄 때.

## 이럴 땐 다른 걸

- 로그인 후 화면의 주 메뉴가 필요할 때 — 그건 GNB 의 몫이다.
- 삼성 로고를 이 바 안에 넣으려 할 때 — 정본에서 2026-06-24 제거됐다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/login-gnb.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/login-gnb.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 마크업 규칙

- 루트: `header[data-s1-component=login-gnb]. 화면 맨 위 바(banner 랜드마크). 변형 속성이 없다.`
- 꼭 있어야 하는 부분(`data-s1-part`): `service` `lang` `lang-icon` `lang-label`
- 언어 조작은 GNB 의 lang 과 같은 button type=button 이다(GNB 의미 그대로 — 새 동작을 만들지 않는다). 눌렀을 때 무엇을 할지는 쓰는 화면이 배선한다.
- 지구본은 아이콘 라이브러리 globe(24 frame, 글리프 18) 를 CSS 마스크로 그린다 — 색은 icon/gray-dark.

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: header(banner 랜드마크). 언어 조작은 button type=button. 서비스 이름은 글자 노드.
- **이름**: 언어 button 은 보이는 글자(한국어)가 이름이다. 지구본은 aria-hidden 장식. 서비스 이름은 글자 자체가 이름이다.
- **키보드**: 언어 button 은 Tab 으로 초점을 받고 Enter·Space 로 활성화된다(button 기본 동작). 이 부품이 새 키 조작을 만들지 않는다.
- **초점**: 브라우저 기본 초점 표시에 맡긴다(2026-09-02 river 결정 — 정본에 focus 변형 없음).

---

정본 지문 `b2c533a59551f9665727b38d0513f90cad3337345f87e710c20e43cfb80bc992` · 부품 버전 0.2.0
