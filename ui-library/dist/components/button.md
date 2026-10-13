# S1Button — `data-s1-component="button"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 사용자가 실행할 액션을 트리거할 때 — 저장·확인·취소·다음 등.
- 화면에서 가장 중요한 단일 액션은 primary, 보조 액션은 secondary, 약한 강조는 blue-line.

## 이럴 땐 다른 걸

- 페이지 이동만 하는 것은 링크를 고려한다.
- on/off 상태 전환은 Toggle, 다중 선택은 Checkbox·Chip 을 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/button.html` · `examples/button.mobile.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/button.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 종류를 고르는 속성

이 부품의 종류(모양)는 아래 속성으로 고릅니다. 속성 이름은 부품마다 다릅니다 — 정본 어휘 그대로라 바꾸지 않고 표로 안내합니다.

| 속성 | 값 | 모양·쓰임 |
|---|---|---|
| `data-variant` | `primary` | 채운 배경에 흰 글자 — 화면에서 가장 중요한 행동 하나 |
| `data-variant` | `secondary` | 바탕이 옅고 테두리가 있는 보조 버튼 — 취소·이전 같은 덜 중요한 행동 |
| `data-variant` | `blue-line` | 흰 바탕에 파란 테두리·파란 글자 — 강조는 하되 가벼운 행동 |

## 고르는 속성(크기·화면)

| 속성 | 뜻 | 쓸 수 있는 값 |
|---|---|---|
| `data-size` | 크기 | `md` `xsm` `xxsm` `lg` |
| `data-break` | 화면(PC·모바일) | `pc` `mobile` |

예시에는 일부 값만 나옵니다. 다른 값은 속성 값만 바꾸면 됩니다.

## 마크업 규칙

- 루트: `button[data-s1-component=button]`
- 꼭 있어야 하는 속성: `type` `data-variant` `data-size`
- 꼭 있어야 하는 부분(`data-s1-part`): `label`

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: button
- **이름**: visible label or aria-label
- **키보드**: native Enter and Space activation
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(2026-09-02 river 결정).

---

정본 지문 `4227305ab757473c235e2f3d0b7b6c32503ea627056247c045b09c566e7e3380` · 부품 버전 0.2.3
