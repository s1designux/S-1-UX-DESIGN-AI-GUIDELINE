# S1Textarea — `data-s1-component="textarea"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 여러 줄 텍스트를 입력받을 때(메모·설명 등).
- Input 과 시각 동일 — --input-* 토큰을 공유한다.

## 이럴 땐 다른 걸

- 한 줄 입력은 Input.
- 선택형 입력은 Select·Dropdown.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/textarea.html` · `examples/textarea.mobile.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/textarea.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 마크업 규칙

- 루트: `div[data-s1-component=textarea]`
- 꼭 있어야 하는 속성: `data-break`
- 꼭 있어야 하는 부분(`data-s1-part`): `control`
- 외부 label[for] ↔ control[id] 또는 control[aria-label]

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: textarea
- **이름**: associated label or aria-label
- **키보드**: native multiline text editing
- **초점**: native focus mapped to canonical Focus state (:focus-within)

---

정본 지문 `3414cf4b12485787412bfbd013348f770cab7cca4b1aabee20b8bd86cc73ecde` · 부품 버전 0.2.6
