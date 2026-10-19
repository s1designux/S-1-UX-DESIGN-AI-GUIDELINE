# S1Radio — `data-s1-component="radio"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 여러 보기 중 하나만 고를 때(상호배타).

## 이럴 땐 다른 걸

- 여러 개 동시 선택은 Checkbox.
- 단일 on/off 는 Toggle.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/radio.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/radio.css` 를 읽습니다.
3. 동작(JS)은 필요 없습니다 — 마크업과 CSS 만으로 동작합니다.

## 마크업 규칙

- 루트: `div[data-s1-component=radio]`
- 꼭 있어야 하는 부분(`data-s1-part`): `control`
- 있어도 되는 부분: `label`
- label[for] ↔ control[id]
- 라벨이 없으면 control 에 aria-label
- 같은 그룹은 control[name] 이 같아야 한다

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: input[type=radio] grouped by name
- **이름**: associated label or aria-label
- **키보드**: native arrow-key movement inside the name group and Tab into the group
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(2026-09-02 river 결정).

---

정본 지문 `6562bf18311aeb0eb60f576976779a67f209ca14d4d26fb9729347e2ab9035c9` · 부품 버전 0.3.0
