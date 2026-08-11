# AI Agent Instructions

- 구현 전에 `design/DESIGN.core.md`를 처음부터 읽는다.
- 시각 정보는 `component-facts.json`과 CSS 토큰을 따른다.
- PC 동작은 `component-behavior.pc.json`의 `status: verified` 규칙만 구현한다.
- `not-defined`인 상태·키보드·포커스·접근성 동작을 추측해서 만들지 않는다.
- 기존 컴포넌트와 정의된 변형을 우선 재사용한다.
- 원시 색상값이나 임의 크기를 새로 만들지 않는다.
- 현재 범위는 PC다. 모바일 규칙으로 확대 해석하지 않는다.
