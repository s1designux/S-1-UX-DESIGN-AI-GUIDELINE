# S1Divider — `data-s1-component="divider"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 목록 줄 사이를 나눌 때.
- 표 위·아래처럼 영역을 크게 끊을 때(강한선).
- 한 줄 안에서 값과 값을 끊을 때(세로선).

## 이럴 땐 다른 걸

- 바탕색이 이미 영역을 나누고 있을 때 — 선을 겹쳐 넣지 않는다.
- 카드 테두리 대신 쓰려 할 때 — 테두리는 그 부품이 갖는다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/divider.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/divider.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-axis` | `x` | 가로선(폭 100%) |
| `data-axis` | `y` | 세로선(높이는 놓인 자리가 정함, 14가 기본) |

## 마크업 규칙

- 루트: `hr[data-s1-component=divider]. 세로선(data-axis=y)에는 aria-orientation=vertical 을 함께 쓴다. 자식·부품 자리가 없다.`
- 꼭 있어야 하는 속성: `data-axis`
- 세로선 높이 14 는 크기 토큰(sizing)이 아니라 간격 값(spacing/14)이다 — river 결정 2026-09-29("이걸 크기로 적용할건 아닌거같은데, 일단 그대로 둬"). sizing/14 를 신설하지 않는다.

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: hr(암묵적 role=separator). 장식용이면 화면이 role=presentation 으로 바꿀 수 있다. 세로선은 aria-orientation=vertical.

---

정본 지문 `ecc1feee9c1fe058cab17762aedaef994045b6ba4ac298f421762dc19e3c7821` · 부품 버전 0.1.3
