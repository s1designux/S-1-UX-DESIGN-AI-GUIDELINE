# S-1 UX DESIGN AI GUIDELINE

S-1 디자인 시스템을 AI 에이전트와 개발자가 시각적으로 정확하고, 실제 PC 동작까지 일관되게 구현할 수 있도록 정리한 공개 가이드입니다.

## 바로 쓰기 — 직접 만들지 말고 배포본을 붙이세요

컴포넌트는 이미 만들어져 있습니다. `ui-library/dist` 를 프로젝트에 넣고 아래 세 줄을 읽히면 끝입니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<link rel="stylesheet" href="ui-library/dist/assets/css/tokens.css">
<link rel="stylesheet" href="ui-library/dist/s1-ui.css">
```

마크업은 클래스가 아니라 **속성**으로 지정합니다. 컴포넌트별 완성 예제는 `ui-library/dist/examples/` 에 있습니다.

```html
<button type="button" data-s1-component="button" data-variant="primary" data-size="md">
  <span data-s1-part="label">확인</span>
</button>
```

여닫기·키보드가 필요한 컴포넌트(모달·드롭다운·달력 등)는 런타임을 한 번 켜면 됩니다.

```html
<script type="module">
  import { autoInit } from "./ui-library/dist/s1-ui.auto.js";
  autoInit();
</script>
```

React·Vue·Swift·Kotlin·C++ 로 쓸 때는 `ui-library/dist/platform/<플랫폼>/` 안의 README 를 보세요.

## 가장 먼저 읽을 파일

[`design/DESIGN.core.md`](design/DESIGN.core.md)를 최우선 구현 기준으로 사용하세요. 이 문서에는 디자인 원칙, 토큰, 컴포넌트 구조, 상태, 아이콘, PC 동작 계약이 통합되어 있습니다.

> ⚠️ 문서의 컴포넌트 표에 적힌 `--button-*` · `--chip-*` 같은 **옛 이름은 배포본에서 쓰지 않습니다.** 배포본은 `--color-button-bg-primary--default` 처럼 토큰을 직접 참조합니다. 값이 어긋나면 `ui-library/dist/s1-ui.css` 가 정답입니다.

## AI에게 전달할 요청문

> PC 화면을 구현해 주세요. **컴포넌트를 새로 만들지 말고 `ui-library/dist` 배포본을 그대로 쓰세요** — `assets/css/tokens.css` 와 `s1-ui.css` 를 읽히고, 마크업은 `ui-library/dist/examples/` 의 예제를 그대로 붙입니다(`data-s1-component` 속성 방식). 배포본에 없는 것만 `design/DESIGN.core.md` 를 기준으로 만들고, 동작은 `registry/components/component-behavior.pc.json` 의 검증된 규칙만 구현하세요. 정의되지 않은 동작이나 상태는 임의로 만들지 마세요.

## 파일 안내

| 경로 | 역할 |
| --- | --- |
| `ui-library/dist/s1-ui.css` | **컴포넌트를 실제로 그리는 CSS. 이것부터 붙이세요** |
| `ui-library/dist/s1-ui.js` · `s1-ui.auto.js` | 여닫기·키보드 동작 런타임 |
| `ui-library/dist/assets/css/tokens.css` | 배포본이 쓰는 토큰. 이 파일 하나로 값이 다 나옵니다 |
| `ui-library/dist/examples/*.html` | 컴포넌트별 완성 마크업 (그대로 복사) |
| `ui-library/dist/platform/*` | React · Vue · Swift · Kotlin · C++ 판 |
| `ui-library/dist/manifest.json` | 배포본 번호와 아이콘·의존성 목록 |
| `design/DESIGN.core.md` | 시각·상태·PC 동작을 통합한 AI용 핵심 가이드 |
| `registry/components/component-facts.json` | 크기, 간격, 구성요소 등 측정된 시각 정보 |
| `registry/components/component-behavior.pc.json` | 클릭, 선택, 열기·닫기, 키보드, 포커스 동작 계약 |
| `assets/css/tokens.css` | Foundation·Semantic 토큰 (배포본 tokens.css 와 같은 내용) |
| `assets/css/component-tokens.css` | 옛 컴포넌트 별칭 토큰 — **새로 쓰지 마세요**. `site-base.css` 가 함께 있어야 값이 나옵니다 |
| `assets/css/typography.css` | 타이포그래피 토큰 |
| `data/icons.json` | 아이콘 목록과 메타데이터 |
| `pages/components.html` | PC 컴포넌트의 실제 시각·JavaScript 참고 화면 |
| `ui-library/src/components/*.js` | 동작 계약이 근거로 지목한 실제 컴포넌트 JavaScript |
| `CHANGELOG.md` | 언제 무엇이 갱신됐는지 남기는 업데이트 이력 |

## 사용 원칙

1. `ui-library/dist` 배포본을 먼저 씁니다. 손으로 다시 만들지 않습니다.
2. 기존 컴포넌트와 정의된 변형을 먼저 재사용합니다.
3. 색상이나 크기를 임의 값으로 복사하지 않고 Semantic 또는 Component 토큰을 사용합니다.
4. PC 동작은 `status: verified`인 규칙만 구현합니다.
5. `not-defined`는 자유롭게 만들어도 된다는 뜻이 아닙니다. 필요한 경우 디자인 시스템 담당자에게 확인합니다.
6. 이 저장소는 현재 PC 기준입니다. 모바일 동작 계약은 포함하지 않습니다.

## 실제 동작 확인

간단한 로컬 서버를 실행한 뒤 `pages/components.html?platform=pc`를 열면 됩니다.

```bash
python3 -m http.server 8000
```

```text
http://localhost:8000/pages/components.html?platform=pc
```

## 검사

```bash
npm test
```

검사는 PC 동작 계약 20개가 실제 참고 페이지의 JavaScript·마크업 근거와 계속 연결되어 있는지 확인합니다.

## 자동 업데이트

GitHub Actions가 매일 한국 시간 오전 3시 15분에 원본 저장소의 최신 자료를 확인합니다. 새 자료는 PC 동작 검사를 통과한 경우에만 자동 커밋됩니다. GitHub의 `Actions` 화면에서 `Sync from S-1 Design System`을 선택하면 필요할 때 즉시 실행할 수도 있습니다.

갱신 시각과 바뀐 파일 목록은 [`CHANGELOG.md`](CHANGELOG.md)에 한국 시간으로 쌓입니다. 지금 내려받은 자료가 원본의 어느 시점인지는 [`SOURCE.json`](SOURCE.json)의 `syncedAt`·`sourceCommitDate`에서 확인할 수 있습니다. 바뀐 내용이 없는 날에는 이력도 커밋도 남기지 않습니다.

## 원본

- Source repository: https://github.com/s1designux/S1-UX-DESIGN-with-AI
- Source commit: `SOURCE.json` 의 `commit` 값이 항상 최신 기준입니다.

이 저장소를 공개해서 볼 수 있다는 사실만으로 별도의 상업적 사용 권한이나 재배포 권한이 부여되지는 않습니다.
