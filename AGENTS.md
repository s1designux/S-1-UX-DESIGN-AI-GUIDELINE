# AI Agent Instructions

<!-- S1-DESIGN:START — 자동으로 넣은 칸입니다. 고치려면 S1 가이드의 ai/scripts/install-entry.mjs 를 다시 돌리세요 -->
## S1 디자인 기준 — 화면(UI)을 만들거나 고치기 전에 꼭

이 프로젝트의 화면은 **S1 디자인 가이드**를 따릅니다. 가이드 위치: `.`

1. **프로젝트 맨 위에 `s1.profile.json` 이 없으면** — 화면 작업 전에 `./ONBOARDING.md` 를 읽고, 거기 있는 질문(새로 만들기·이미 있는 화면에 입히기 / 매체 / 화면 종류 / 기술)을 **사용자에게 먼저 묻습니다.** 답을 받기 전에는 화면을 만들거나 고치지 않습니다.
2. **있으면** — 다시 묻지 않습니다. 그 값대로 `./ONBOARDING.md` 2단계의 파일만 읽고 작업합니다. 크기는 `./ai/generated/profile.<profile>.md` 표대로만 씁니다.
3. **`mode` 가 `apply`(이미 있는 화면에 입히기)면** — `./ai/rules/apply-poc.md` 순서를 따릅니다. **고치기 전에 디자인 확인 요청서를 먼저 만들어 디자이너에게 보냅니다.**
4. **끝나면 검수합니다** — `node ./ai/check/s1-check.mjs <폴더>`. 합격하기 전에는 "다 적용했다"고 말하지 않습니다.
<!-- S1-DESIGN:END -->

- **컴포넌트를 새로 만들지 않는다. `ui-library/dist` 배포본을 쓴다** — `assets/css/tokens.css` + `s1-ui.css` 를 읽히고 `dist/examples/` 의 마크업을 그대로 붙인다.
- 마크업은 `data-s1-component` 속성 방식이다. `.s1-btn` 같은 클래스 방식은 옛 것이라 쓰지 않는다.
- 배포본에 없는 것만 `design/DESIGN.core.md`를 처음부터 읽고 만든다.
- 시각 정보는 `component-facts.json`과 CSS 토큰을 따른다.
- PC 동작은 `component-behavior.pc.json`의 `status: verified` 규칙만 구현한다.
- `not-defined`인 상태·키보드·포커스·접근성 동작을 추측해서 만들지 않는다.
- **크기는 화면 종류(PC PR용 · 사용자용 · 관리자용 기본·작게 · 모바일)의 표 `ai/generated/profile.*.md` 대로만 쓴다.** 예제의 `data-size` 를 그대로 두거나 느낌으로 고르지 않는다.
- 기존 컴포넌트와 정의된 변형을 우선 재사용한다.
- 원시 색상값이나 임의 크기를 새로 만들지 않는다.
- 문서의 `--button-*`·`--chip-*` 같은 옛 별칭 토큰을 쓰지 않는다. 배포본이 쓰는 이름(`--color-button-bg-primary--default` 등)이 기준이다.
- 매체(PC/모바일)는 온보딩에서 고른 것 하나만 따른다. 다른 매체 규칙으로 확대 해석하지 않는다.
