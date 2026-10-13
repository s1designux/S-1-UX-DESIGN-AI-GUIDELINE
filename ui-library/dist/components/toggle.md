# S1Toggle — `data-s1-component="toggle"`

> 자동 생성된 설명서입니다. 손으로 고치지 마세요 — 다음 배포 때 사라집니다.

## 언제 쓰나

- 단일 설정을 즉시 켜고 끌 때(즉시 반영).

## 이럴 땐 다른 걸

- 여러 항목 다중 선택은 Checkbox.
- 상호배타 다중 보기는 Radio.

## 시작하기

1. 마크업은 예시 파일을 복사해서 씁니다: `examples/toggle.html`
2. 겉모습: 전체 묶음 `s1-ui.css` 한 줄이면 됩니다. 이 부품만 쓰려면 `assets/css/tokens.css` · `assets/css/typography.css` · `components/toggle.css` 를 읽습니다.
3. 동작: `autoInit()` 이 이 부품을 찾아 붙입니다. 이 부품만 쓰려면 `import { init } from "./s1-ui/components/toggle.js"` 후 `const api = init(요소)` 를 부릅니다.
4. 페이지가 뜬 뒤에 넣은 마크업은 `autoInit(감쌀요소)` 를 한 번 더 부르면 붙습니다(두 번 불러도 겹치지 않습니다).

## 마크업 규칙

- 루트: `button[data-s1-component=toggle][role=switch]`
- 꼭 있어야 하는 속성: `type` `role` `aria-checked`
- 꼭 있어야 하는 부분(`data-s1-part`): `knob`
- 루트 button 이 곧 정본 트랙이다
- 접근 이름은 aria-label 또는 aria-labelledby

## 접근성 — 퍼블리셔가 지킬 것

- **역할**: button[role=switch]
- **이름**: aria-label or aria-labelledby
- **키보드**: native Space and Enter activation with Tab order
- **초점**: 브라우저 기본 포커스 표시를 그대로 쓴다 — 정본에 focus 표현이 없어 웹에서 만들지 않는다(2026-09-02 river 결정).
- **상태 표시**: runtime keeps aria-checked in sync with the pressed state and emits s1:toggle:change

---

정본 지문 `ba9919ac0abe1e1abf188873f3c2dcfc1d314ad526f0233a349df21747da87b7` · 부품 버전 0.2.3
