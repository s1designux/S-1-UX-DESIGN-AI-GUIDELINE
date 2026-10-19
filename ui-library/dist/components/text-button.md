# S1TextButton — `data-s1-component="text-button"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 링크에 가까운 가벼운 보조 동작(더보기·자세히 등)을 텍스트만으로 표시할 때.
- Primary 는 강조가 필요한 텍스트 액션, Secondary 는 덜 중요한 텍스트 액션.

## 이럴 땐 다른 걸

- 배경·테두리가 있는 버튼이 필요하면 코어 Button 또는 Assist Button 을 쓴다.
- 페이지 이동 전용 링크는 <a> 를 우선 고려한다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/text-button.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/text-button.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-variant` | `primary` | 파란(강조) 글자만 있는 버튼 — 링크처럼 쓰는 주 행동 |
| `data-variant` | `secondary` | 옅은 회색 글자만 있는 버튼 — 덜 중요한 보조 행동 |

## 마크업 규칙

- 루트: `button[data-s1-component=text-button]`
- 꼭 있어야 하는 속성: `type` `data-variant`
- 꼭 있어야 하는 부분(`data-s1-part`): `label`

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: button
- **이름**: visible label or aria-label
- **키보드**: native Enter and Space activation
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(코어 Button 과 같은 방침).

---

정본 지문 `e3c547c1aefa2bd8f9093f208daac59c4be3e1d89df25c5ff9e9068ea1e725b2` · 부품 버전 0.3.0
