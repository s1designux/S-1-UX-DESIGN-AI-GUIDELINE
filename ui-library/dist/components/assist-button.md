# S1AssistButton — `data-s1-component="assist-button"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 본문 옆이나 목록 행 안처럼 좁은 자리에서, 눈에 덜 띄는 보조 동작 하나를 둘 때.
- 코어 Button 의 4크기(MD·XSM·XXSM·LG) 어디에도 맞지 않는, 원본에 정의된 고정 32px 자리.

## 이럴 땐 다른 걸

- 화면의 주 액션(저장·확인 등)에는 코어 Button 을 쓴다.
- 배경·테두리가 없는 링크형 액션은 Text Button 을 쓴다.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/assist-button.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/assist-button.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 마크업 규칙

- 루트: `button[data-s1-component=assist-button]`
- 꼭 있어야 하는 속성: `type`
- 꼭 있어야 하는 부분(`data-s1-part`): `label`

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: button
- **이름**: visible label or aria-label
- **키보드**: native Enter and Space activation
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(코어 Button 과 같은 방침).

---

정본 지문 `510aa34e83fc7e2bfd13ee4c74c17c227110d8884e1e49d7320df1ffc86bd4e3` · 부품 버전 0.3.0
