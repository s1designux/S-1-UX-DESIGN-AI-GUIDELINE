# S1Ci — `data-s1-component="ci"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 화면에 회사 로고를 보여줄 때(에스원 · 삼성).
- 밝은 로고(White)가 필요한 어두운 바탕, 브랜드색(Blue), 회색(Dark) 중에서 바탕에 맞춰 고를 때.

## 이럴 땐 다른 걸

- 서비스 이름 글자를 보여줄 때 — 그건 서비스 이름 글자 자리의 몫이다.
- 로고를 임의로 늘리거나 색을 바꿀 때 — 크기와 색은 이 부품의 값만 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/ci.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/ci.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-brand` | `s1` | 에스원 로고(선으로 그린 그림, 78.75×30) |
| `data-brand` | `samsung` | 삼성 로고(그림 파일, 134×36) |
| `data-color` | `white` | 흰 로고 — 어두운 바탕 위 |
| `data-color` | `blue` | 회사 파란색 로고 — 밝은 바탕 위 기본 |
| `data-color` | `dark` | 회색 로고 — 밝은 바탕에서 차분하게 |

## 마크업 규칙

- 루트: `span[data-s1-component=ci][data-brand][data-color][role=img][aria-label]. 에스원은 안에 인라인 svg(viewBox 0 0 42 16, aria-hidden) 한 개, 삼성은 비어 있다.`
- 꼭 있어야 하는 속성: `data-brand` `data-color`
- 로고가 회사 이름을 알려 주는 자리에는 role=img 와 aria-label(에스원 · 삼성)을 준다. 옆 글자가 이미 이름을 말하는 장식 자리면 쓰는 화면이 role·aria-label 대신 aria-hidden=true 를 준다.
- 에스원 svg 의 path 는 정본 S1_LOGO_SVG 그대로이며 fill 은 currentColor 다(색은 data-color 가 정한다) — 임의로 고쳐 그리지 않는다.

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: role=img. 에스원 svg 는 aria-hidden=true(이름은 바깥 span 의 aria-label 이 준다). 장식 자리는 쓰는 화면이 aria-hidden=true 로 바꾼다.
- **이름**: aria-label — 에스원 · 삼성(정본 Brand 이름). 로고가 정체를 알려 주는 자리에서 필수.

---

정본 지문 `bc8cc2a8a4e7773e52e28084446c4ba737abdc35f721bd32918416fce1cf8d8e` · 부품 버전 0.2.0
