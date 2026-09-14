# AI Agent Instructions

- **컴포넌트를 새로 만들지 않는다. `ui-library/dist` 배포본을 쓴다** — `assets/css/tokens.css` + `s1-ui.css` 를 읽히고 `dist/examples/` 의 마크업을 그대로 붙인다.
- 마크업은 `data-s1-component` 속성 방식이다. `.s1-btn` 같은 클래스 방식은 옛 것이라 쓰지 않는다.
- 배포본에 없는 것만 `design/DESIGN.core.md`를 처음부터 읽고 만든다.
- 시각 정보는 `component-facts.json`과 CSS 토큰을 따른다.
- PC 동작은 `component-behavior.pc.json`의 `status: verified` 규칙만 구현한다.
- `not-defined`인 상태·키보드·포커스·접근성 동작을 추측해서 만들지 않는다.
- 기존 컴포넌트와 정의된 변형을 우선 재사용한다.
- 원시 색상값이나 임의 크기를 새로 만들지 않는다.
- 문서의 `--button-*`·`--chip-*` 같은 옛 별칭 토큰을 쓰지 않는다. 배포본이 쓰는 이름(`--color-button-bg-primary--default` 등)이 기준이다.
- 현재 범위는 PC다. 모바일 규칙으로 확대 해석하지 않는다.
