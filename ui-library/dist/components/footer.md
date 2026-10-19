# S1Footer — `data-s1-component="footer"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 화면 맨 아래에 이용약관·개인정보 처리방침·회사 정보·카피라이트를 보여줄 때.
- PC 화면에서는 회사 정보와 로고까지 함께 보여줄 때(PC), 모바일 화면에서는 링크와 카피라이트만 간단히 보여줄 때(Mobile).

## 이럴 땐 다른 걸

- 화면 맨 위 바가 필요할 때 — 그건 GNB 나 로그인 상단바의 몫이다.
- 법인 문구를 화면마다 고쳐 쓰고 싶을 때 — 문구는 registry/content/footer.json 이 단일 출처이며 임의로 바꾸지 않는다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/footer.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/footer.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-platform` | `pc` | 가로 배치 — 왼쪽에 링크·회사 정보·카피라이트, 오른쪽에 에스원 로고. 화면 폭 768 미만에서는 저절로 모바일 모양이 된다 |
| `data-platform` | `mobile` | 세로 배치 — 링크 줄과 그 아래 가운데 카피라이트만 있고 회사 정보·로고가 없다 |

## 마크업 규칙

- 루트: `footer[data-s1-component=footer][data-platform]. 화면 맨 아래 영역(contentinfo 랜드마크).`
- 꼭 있어야 하는 속성: `data-platform`
- 꼭 있어야 하는 부분(`data-s1-part`): `links` `link` `copyright`
- 있어도 되는 부분: `content` `company` `logo`
- 링크는 진짜 <a> 다 — href 는 쓰는 화면이 채운다(예시는 #). 구분선은 CSS 가 li 사이에 그린다(마크업에 넣지 않는다).
- 회사 정보 p 의 연속 공백은 정본 그대로 두며 CSS white-space: pre-wrap 이 접지 않는다. 문구 세 줄(링크·회사 정보·카피라이트)은 registry/content/footer.json 이 단일 출처다.

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: footer(암묵적 role=contentinfo). 링크 줄은 ul > li > a. 로고 svg 는 회사 정보 글자가 이미 이름을 말하므로 aria-hidden=true.
- **이름**: 링크는 보이는 글자가 이름이다. 영역 자체는 landmark 이름이 없어도 된다(화면에 하나뿐인 contentinfo).
- **키보드**: 링크는 Tab 으로 초점을 받고 Enter 로 이동한다(<a> 기본 동작). 이 부품이 새 키 조작을 만들지 않는다.
- **초점**: 브라우저 기본 초점 표시에 맡긴다(2026-09-02 river 결정 — 정본에 focus 변형 없음).

---

정본 지문 `e7dd3c1ea4e7a0fecbce7d05c497a29bea7cdd51b9ad7c782aca88d656074d47` · 부품 버전 0.2.0
