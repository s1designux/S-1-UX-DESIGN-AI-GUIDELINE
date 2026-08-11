# S-1 UX DESIGN AI GUIDELINE

S-1 디자인 시스템을 AI 에이전트와 개발자가 시각적으로 정확하고, 실제 PC 동작까지 일관되게 구현할 수 있도록 정리한 공개 가이드입니다.

## 가장 먼저 읽을 파일

[`design/DESIGN.core.md`](design/DESIGN.core.md)를 최우선 구현 기준으로 사용하세요. 이 문서에는 디자인 원칙, 토큰, 컴포넌트 구조, 상태, 아이콘, PC 동작 계약이 통합되어 있습니다.

## AI에게 전달할 요청문

> PC 화면을 구현해 주세요. `design/DESIGN.core.md`를 최우선 기준으로 사용하고, 시각값은 CSS 토큰 파일을 적용하세요. 동작은 `registry/components/component-behavior.pc.json`에 정의된 검증된 규칙만 구현하세요. 정의되지 않은 동작이나 상태는 임의로 만들지 마세요. 필요하면 `pages/components.html`의 실제 동작을 참고하세요.

## 파일 안내

| 경로 | 역할 |
| --- | --- |
| `design/DESIGN.core.md` | 시각·상태·PC 동작을 통합한 AI용 핵심 가이드 |
| `registry/components/component-facts.json` | 크기, 간격, 구성요소 등 측정된 시각 정보 |
| `registry/components/component-behavior.pc.json` | 클릭, 선택, 열기·닫기, 키보드, 포커스 동작 계약 |
| `assets/css/tokens.css` | Foundation·Semantic 토큰 |
| `assets/css/component-tokens.css` | 컴포넌트 전용 토큰 |
| `assets/css/typography.css` | 타이포그래피 토큰 |
| `data/icons.json` | 아이콘 목록과 메타데이터 |
| `pages/components.html` | PC 컴포넌트의 실제 시각·JavaScript 참고 화면 |

## 사용 원칙

1. 기존 컴포넌트와 정의된 변형을 먼저 재사용합니다.
2. 색상이나 크기를 임의 값으로 복사하지 않고 Semantic 또는 Component 토큰을 사용합니다.
3. PC 동작은 `status: verified`인 규칙만 구현합니다.
4. `not-defined`는 자유롭게 만들어도 된다는 뜻이 아닙니다. 필요한 경우 디자인 시스템 담당자에게 확인합니다.
5. 이 저장소는 현재 PC 기준입니다. 모바일 동작 계약은 포함하지 않습니다.

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

## 원본

- Source repository: https://github.com/s1designux/S1-UX-DESIGN-with-AI
- Source commit: `adb436db04982be41810493620ec4ce028bdba96`

이 저장소를 공개해서 볼 수 있다는 사실만으로 별도의 상업적 사용 권한이나 재배포 권한이 부여되지는 않습니다.
