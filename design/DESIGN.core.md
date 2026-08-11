---
version: 1.0.0
name: S1 Design System
scope: core
description: 디자인시스템 소비용 단일 컨텍스트(자동 생성 · 정본=tokens.css+registry)
colors:
  color-brand-blue: "#0072CE"
  color-brand-red: "#FF312C"
  color-brand-gray: "#DFDEDE"
  color-brand-ci: "#004097"
  color-gray-0: "#FAFAFA"
  color-gray-50: "#F5F5F5"
  color-gray-100: "#E9E9E9"
  color-gray-200: "#D9D9D9"
  color-gray-300: "#C4C4C4"
  color-gray-400: "#9D9D9D"
  color-gray-500: "#757575"
  color-gray-600: "#555555"
  color-gray-700: "#434343"
  color-gray-800: "#353535"
  color-gray-900: "#202020"
spacing:
  spacing-2: "2px"
  spacing-4: "4px"
  spacing-6: "6px"
  spacing-8: "8px"
  spacing-10: "10px"
  spacing-12: "12px"
  spacing-14: "14px"
  spacing-16: "16px"
  spacing-20: "20px"
  spacing-24: "24px"
  spacing-28: "28px"
  spacing-32: "32px"
  spacing-36: "36px"
  spacing-40: "40px"
  spacing-44: "44px"
  spacing-48: "48px"
  spacing-56: "56px"
  spacing-64: "64px"
  spacing-80: "80px"
  spacing-96: "96px"
  spacing-128: "128px"
radius:
  radius-0: "0px"
  radius-2: "2px"
  radius-4: "4px"
  radius-6: "6px"
  radius-8: "8px"
  radius-10: "10px"
  radius-12: "12px"
  radius-16: "16px"
  radius-20: "20px"
  radius-full: "9999px"
  radius-control-xs: "var(--radius-2)"
  radius-control-sm: "var(--radius-4)"
  radius-button-md: "var(--radius-4)"
  radius-card-md: "var(--radius-10)"
  radius-modal-md: "var(--radius-8)"
typography:
  fontSize:
    font-size-10: "10px"
    font-size-12: "12px"
    font-size-14: "14px"
    font-size-16: "16px"
    font-size-18: "18px"
    font-size-20: "20px"
    font-size-24: "24px"
    font-size-32: "32px"
  fontWeight:
    font-weight-regular: "400"
    font-weight-medium: "500"
    font-weight-bold: "700"
---

# S1 Design System — Core

> ⚠️ 이 파일은 자동 생성물입니다. 손으로 고치지 마세요. 정본 목록은 `registry/governance/canon-manifest.json` 이고, 이 문서는 `component-facts.json`(Figma 빌더 실행 파생) + `component-behavior.pc.json`(PC 동작 계약) + `tokens.css`/`component-tokens.css`(토큰 파생) + `registry/components/*.json`(메타)에서 `npm run design:md:write` 로 재생성됩니다.

## 소비 프로파일 (Profiles)

> 소비자(역할·플랫폼·테마)별 적용 프로파일. 해석 순서는 `design.manifest.json` 의 resolutionOrder 참조.

### role
- **admin** — 밀도: `compact` (관리자 — 고밀도(정보 우선))
- **user** — 밀도: `comfortable` (일반 사용자 — 여유 밀도(가독성 우선))

### platform
- **web** — 컨테이너: `1200px`, 컬럼: `12`
- **app** — 컨테이너: `1024px`, 컬럼: `8`
- **mobile** — 컨테이너: `375px`, 컬럼: `4`

### theme
- `light` / `dark`

## 1. Visual Theme & Atmosphere

S1 디자인시스템은 관제·운영·업무용 소프트웨어(영상관제·모빌리티·빌딩 등)를 위한 엔터프라이즈 UI 시스템이다. 화려함보다 정보의 명확성·일관성·오래 봐도 편한 절제된 톤을 우선한다.

기본 무드는 중립적이고 차분하다. 넓은 회색(Gray) 스케일을 배경·표면·구분선에 쓰고, 파란색(Brand Blue)을 주요 액션·선택·포커스의 단일 강조색으로 절제해서 쓴다. 빨강은 경고·오류에만 쓴다.

- 절제된 강조 — 파란색은 지금 눌러야 할 것·선택된 것·포커스에만 쓴다. 화면 대부분은 중립 회색과 밝은 표면(다크에선 짙은 회색 표면)이다.
- 정보 우선 밀도 — 관리자 화면은 고밀도(compact), 일반 사용자 화면은 여유 밀도(comfortable). 같은 컴포넌트라도 소비 프로파일로 밀도를 조정한다.
- Light 먼저, Dark는 검증 — 모든 토큰은 Light 기준으로 확정하고 Dark 값을 함께 정의한다. 다크는 배경↔표면의 명도 차이로 레이어 깊이를 만든다.
- 브랜드색은 UI에 직접 쓰지 않는다 — CI·로고 전용 색은 UI 요소 색으로 쓰지 않는다.

## 2. Color Palette & Roles

색은 값이 아니라 역할로 쓴다. 컴포넌트는 항상 역할 기반 Semantic 토큰을 참조하고, 팔레트(Foundation) HEX 를 직접 쓰지 않는다. Light/Dark 전환은 Semantic 레이어에서 일어난다.

구체적 HEX 값은 이 문서 상단 frontmatter 의 colors 사전과 assets/css/tokens.css 가 단일 출처다. 아래는 각 역할 카테고리의 용도만 정리한다.

| 카테고리 | 역할 |
| --- | --- |
| `color-bg` | 페이지·레이아웃 섹션·화면 최하위 배경 |
| `color-surface` | 그 위에 올라오는 컴포넌트 표면(카드·패널·모달·드롭다운). 라이트에선 배경과 같은 밝은 색이나 다크에서 깊이로 분리된다 |
| `color-text (title·body·state 3트랙)` | 제목·본문·상태(도움말·오류·성공) 텍스트 |
| `color-form-control` | 입력 필드군(Input·Select·Textarea·DatePicker·TimePicker) 공용 배경·테두리·텍스트·라벨 |
| `color-control-border` | 체크박스·라디오·토글 등 컨트롤 테두리 |
| `color-icon` | 아이콘 색(현 Variables 는 색상명으로 정의) |
| `color-overlay` | 딤·오버레이(알파 채널 포함 — rgba 허용 예외) |

- 테두리 역할은 단일 토큰으로 통합돼 있지 않고 폼 컨트롤용·컨트롤용·구분선용으로 분산돼 있다(2026-06-23 정리).
- 포커스·선택·주요 액션의 강조는 파란색 계열 역할 토큰으로 표현한다. 성공·정보 피드백도 현재 서비스 기준으로 파란색 계열을 쓴다(상태색 일관성 정책).
- 명도 대비는 WCAG AA 를 필수 기준으로 한다.
- 다크 팔레트는 스텝 의미가 라이트와 반대다 — 낮은 숫자(0·50·100)가 가장 어둡고(배경), 높은 숫자(700·800·900)가 가장 밝다(텍스트). 그래서 다크에서 배경 역할은 낮은 스텝을, 텍스트 역할은 높은 스텝을 참조한다. 라이트의 스텝 방향을 그대로 따르면 어두운 배경 위에 어두운 글자가 올라오는 역전이 생긴다.

## 3. Typography

폰트는 Pretendard 를 정본으로 한다. 크기·굵기·행간은 정의된 토큰만 쓰고 임의 값을 만들지 않는다. 구체적 크기·굵기 값은 frontmatter 의 typography 사전을 참조한다.

**위계 (Hierarchy)**
- 크기 스케일(px): 10 · 12 · 14 · 16 · 18 · 20 · 24 · 32. 본문 기본은 14, 보조·캡션은 12, 제목은 16 이상.
- 굵기: Regular 400 · Medium 500 · Bold 700. 강조는 굵기로 주고, 색은 역할 토큰으로 준다.
- 행간: 기본 130%(1.3).

**규칙**
- 정의된 토큰 외 크기·굵기 사용 금지. 새 값이 필요하면 토큰부터 신설한다.
- 약어 없는 의미 중심 네이밍을 쓴다(예: font-weight-medium, 약어 fw- 금지).

## 4. Components

### Agent contract defaults

```yaml
agentContractDefaults:
  sourcePriority:
    - "registry/components/component-facts.json (build-components.ts mock execution)"
    - "registry/components/component-behavior.pc.json (pages/components.html PC runtime behavior)"
    - "registry/components/*.json (description/composition/Figma metadata)"
    - "assets/css/tokens.css + assets/css/component-tokens.css (actual CSS alias chain)"
  rules:
    - "Reuse the existing component and listed variant before creating UI."
    - "Only listed states are allowed; a missing state is not permission to invent it."
    - "For PC interaction, implement only behavior.status=verified rules. not-defined is not permission to invent keyboard, focus, or accessibility behavior."
    - "Use the highest available semantic/component token; never copy a raw terminal value into UI code."
    - "Component-specific icon lists override the global icon library. figma-unconfirmed means ask/report, not invent."
  iconLibrary:
    source: "S1 Icon Library (V2.2 remote component keys used by installer)"
    allowed:
      - "account"
      - "calendar"
      - "check"
      - "chevron"
      - "clock"
      - "close"
      - "eye"
      - "globe"
      - "home"
      - "menu"
      - "remove"
      - "search"
  unknownMarkers:
    - "unknown"
    - "not-defined"
    - "figma-unconfirmed"
  missingDefinitionResponse: "DESIGN_SYSTEM_GAP: <missing definition>"
```

### Button

Core interactive button component. Primary / Secondary / Blue-line variants with PC 3 sizes and Mobile 1 size.

**언제 쓰나**
- 사용자가 실행할 액션을 트리거할 때 — 저장·확인·취소·다음 등.
- 화면에서 가장 중요한 단일 액션은 primary, 보조 액션은 secondary, 약한 강조는 blue-line.

**쓰지 말아야 할 때**
- 페이지 이동만 하는 것은 링크를 고려한다.
- on/off 상태 전환은 Toggle, 다중 선택은 Checkbox·Chip 을 쓴다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 라벨 | 버튼 텍스트. 굵기·색은 variant 토큰. |
| 아이콘(선택) | 라벨 앞/뒤 보조 아이콘. 라이브러리 인스턴스. |
| 컨테이너 | 배경·테두리·반경. variant×state 토큰. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| primary | --button-primary-default-bg<br>--button-primary-default-text<br>--button-primary-default-icon | --button-primary-hover-bg | --button-primary-pressed-bg | --button-primary-disabled-bg<br>--button-primary-disabled-border<br>--button-primary-disabled-text |
| secondary | --button-secondary-default-bg<br>--button-secondary-default-border<br>--button-secondary-default-text<br>--button-secondary-default-icon | --button-secondary-hover-bg | --button-secondary-pressed-bg | --button-secondary-disabled-bg<br>--button-secondary-disabled-border<br>--button-secondary-disabled-text<br>--button-secondary-disabled-icon |
| blue-line | --button-blue-line-default-bg<br>--button-blue-line-default-border<br>--button-blue-line-default-text | --button-blue-line-hover-bg<br>--button-blue-line-hover-border | --button-blue-line-pressed-bg | --button-blue-line-disabled-bg<br>--button-blue-line-disabled-border<br>--button-blue-line-disabled-text |

#### Agent-readable contract

```yaml
agent:
  component: "Button"
  variantAxes:
    Size:
      - "MD"
      - "XSM"
      - "XXSM"
      - "LG"
    State:
      - "Default"
      - "Hover"
      - "Pressed"
      - "Disabled"
    Variant:
      - "Primary"
      - "Secondary"
      - "Blue-Line"
    Break:
      - "PC"
      - "Mobile"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Pressed"
      - "Disabled"
    metadata:
      - "default"
      - "hover"
      - "pressed"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#button"
    status: "verified"
    initialState: "enabled"
    events:
      -
        on: "click"
        target: "button"
        guard: "disabled=false"
        result: "invoke the assigned action once"
      -
        on: "click"
        target: "button"
        guard: "disabled=true"
        result: "ignore the action"
    keyboard: "native-button"
    focus: "native-button"
    accessibility:
      disabled: "use the native disabled attribute"
  geometry:
    common:
      target: "root"
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "FIXED"
      primaryAxisAlignItems: "CENTER"
      counterAxisAlignItems: "CENTER"
      paddingTop: "0"
      paddingBottom: "0"
      topLeftRadius: "radius/4"
      topRightRadius: "radius/4"
      bottomLeftRadius: "radius/4"
      bottomRightRadius: "radius/4"
      strokeWeight: "border-width/1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Size: "MD"
          Break: "PC"
        height: 44
        paddingRight: "spacing/16"
        paddingLeft: "spacing/16"
        minWidth: "80"
      -
        when:
          Size: "XSM"
          Break: "PC"
        height: 34
        paddingRight: "spacing/8"
        paddingLeft: "spacing/8"
        minWidth: "64"
      -
        when:
          Size: "XXSM"
          Break: "PC"
        height: 28
        paddingRight: "spacing/8"
        paddingLeft: "spacing/8"
        minWidth: "64"
      -
        when:
          Size: "LG"
          Break: "Mobile"
        height: 48
        paddingRight: "spacing/16"
        paddingLeft: "spacing/16"
        minWidth: "80"
  composition:
    mustReuse: "not-defined"
    mustNotCreate: "not-defined"
    declaredParts: "not-defined"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "border-width/1"
      - "color/button/bg/blue-line--default"
      - "color/button/bg/blue-line--hover"
      - "color/button/bg/disabled"
      - "color/button/bg/primary--default"
      - "color/button/bg/primary--hover"
      - "color/button/bg/secondary--default"
      - "color/button/bg/secondary--hover"
      - "color/button/border/blue-line--default"
      - "color/button/border/blue-line--hover"
      - "color/button/border/disabled"
      - "color/button/border/primary--default"
      - "color/button/border/primary--hover"
      - "color/button/border/secondary--default"
      - "color/button/border/secondary--hover"
      - "color/button/label/blue-line--default"
      - "color/button/label/blue-line--hover"
      - "color/button/label/disabled"
      - "color/button/label/primary--default"
      - "color/button/label/primary--hover"
      - "color/button/label/secondary--default"
      - "color/button/label/secondary--hover"
      - "radius/4"
      - "spacing/16"
      - "spacing/8"
    aliasChains:
      -
        chain: "--button-primary-default-bg → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--button-primary-hover-bg → --color-action-primary-hover"
        status: "unresolved"
      -
        chain: "--button-primary-pressed-bg → --color-action-primary-pressed"
        status: "unresolved"
      -
        chain: "--button-primary-disabled-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--button-primary-disabled-border → --color-border-disabled"
        status: "unresolved"
      -
        chain: "--button-primary-default-text → --color-action-primary-text"
        status: "unresolved"
      -
        chain: "--button-primary-disabled-text → --color-text-disabled"
        status: "unresolved"
      -
        chain: "--button-primary-default-icon → --color-action-primary-text"
        status: "unresolved"
      -
        chain: "--button-secondary-default-bg → --color-surface-default"
        status: "unresolved"
      -
        chain: "--button-secondary-hover-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--button-secondary-pressed-bg → --color-bg-muted"
        status: "unresolved"
      -
        chain: "--button-secondary-disabled-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--button-secondary-default-border → --color-border-default"
        status: "unresolved"
      -
        chain: "--button-secondary-disabled-border → --color-border-disabled"
        status: "unresolved"
      -
        chain: "--button-secondary-default-text → --color-text-secondary"
        status: "unresolved"
      -
        chain: "--button-secondary-disabled-text → --color-text-disabled"
        status: "unresolved"
      -
        chain: "--button-secondary-default-icon → --color-icon-default"
        status: "unresolved"
      -
        chain: "--button-secondary-disabled-icon → --color-icon-muted"
        status: "unresolved"
      -
        chain: "--button-blue-line-default-bg → --color-surface-default"
        status: "unresolved"
      -
        chain: "--button-blue-line-hover-bg → --color-action-primary-subtle"
        status: "unresolved"
      -
        chain: "--button-blue-line-pressed-bg → --color-action-primary-subtle"
        status: "unresolved"
      -
        chain: "--button-blue-line-disabled-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--button-blue-line-default-border → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--button-blue-line-hover-border → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--button-blue-line-disabled-border → --color-border-disabled"
        status: "unresolved"
      -
        chain: "--button-blue-line-default-text → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--button-blue-line-disabled-text → --color-text-disabled"
        status: "unresolved"
  figma:
    status: "available"
    identifiers:
      componentName: "Button"
      figmaNodeId: "6440:4032"
    variants:
      variant: "Variant"
      size: "Size"
      state: "State"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- variant 는 primary·secondary·blue-line 만 쓴다.
- 크기는 PC md(44)/xsm(34)/xxsm(28), Mobile lg(48) 중에서 고른다.
- 색은 Semantic 경유 component 토큰(--button-*)으로만 참조한다.

_Don't_
- Danger·ghost variant 를 재도입하지 않는다(폐지 확정).
- 한 화면에 primary 를 여러 개 두어 강조를 분산시키지 않는다.
- raw HEX·Foundation 직접 참조 금지.

**접근성 (a11y)**
- 아이콘만 있는 버튼은 aria-label 로 용도를 준다.
- disabled 는 실제 비활성 처리하고 클릭을 막는다.

### Checkbox

체크박스 컨트롤. default·hover·checked·indeterminate·disabled 상태.

**언제 쓰나**
- 여러 항목을 독립적으로 켜고 끌 때(다중 선택).
- 목록 전체선택/부분선택(indeterminate) 헤더에.

**쓰지 말아야 할 때**
- 여러 보기 중 하나만 고를 때는 Radio.
- 단일 on/off 설정은 Toggle.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 박스 | 체크 영역. 배경·테두리는 control 토큰. |
| 체크 표시 | checked·indeterminate 인디케이터 아이콘. |
| 라벨(선택) | 항목 텍스트. 박스와 함께 클릭 영역. |

| variant | default | hover | checked | disabled |
| --- | --- | --- | --- | --- |
| default | --checkbox-default-bg → color-control-bg-default<br>--checkbox-default-border → color-control-border-default | --checkbox-hover-bg → color-control-bg-hover<br>--checkbox-hover-border → color-control-border-default | --checkbox-checked-bg → color-control-bg-selected<br>--checkbox-checked-border → color-control-border-selected<br>--checkbox-check-icon → color-control-indicator-selected | --checkbox-disabled-bg → color-control-bg-disabled<br>--checkbox-disabled-border → color-control-border-disabled<br>--checkbox-disabled-check-icon → color-control-indicator-disabled |

#### Agent-readable contract

```yaml
agent:
  component: "Checkbox"
  variantAxes:
    State:
      - "Default"
      - "Hover"
      - "Checked"
      - "Disabled"
      - "Dis+Checked"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Checked"
      - "Disabled"
      - "Dis+Checked"
    metadata:
      - "default"
      - "hover"
      - "checked"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#checkbox"
    status: "verified"
    initialState: "unchecked"
    events:
      -
        on: "click"
        target: "checkbox"
        guard: "disabled=false"
        result: "toggle unchecked ↔ checked"
      -
        on: "click"
        target: "checkbox"
        guard: "disabled=true"
        result: "keep the current value"
    keyboard: "not-defined"
    focus: "not-defined"
    accessibility: "not-defined"
  geometry:
    common:
      target: "root"
      width: 18
      height: 18
      cornerRadius: "2"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when: "all"
  composition:
    mustReuse: "not-defined"
    mustNotCreate: "not-defined"
    declaredParts:
      - "check"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/control/bg/default"
      - "color/control/bg/disabled"
      - "color/control/bg/hover"
      - "color/control/bg/selected"
      - "color/control/border/default"
      - "color/control/border/disabled"
      - "color/control/border/selected"
    aliasChains:
      -
        chain: "--checkbox-default-bg → --color-form-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--checkbox-checked-bg → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--checkbox-disabled-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--checkbox-default-border → --color-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--checkbox-hover-border → --color-control-border-hover"
        status: "unresolved"
      -
        chain: "--checkbox-checked-border → --color-control-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--checkbox-disabled-border → --color-control-border-disabled → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--checkbox-check-icon → --color-action-primary-text"
        status: "unresolved"
      -
        chain: "--checkbox-disabled-check-icon → --color-border-strong"
        status: "unresolved"
  figma:
    status: "available"
    identifiers:
      fileKey: "Tnihi6lixRR47N4RSAwUbF"
      figmaNodeId: "1459:16409"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 전체선택 헤더는 부분선택 시 indeterminate(is-indeterminate)를 쓴다.
- 박스는 코어 s1-checkbox 를 재사용한다(모듈 전용 체크박스 금지).

_Don't_
- Table·Filter 등 모듈에서 체크박스를 새로 만들지 않는다.
- 라벨 없이 쓸 때 aria-label 을 빠뜨리지 않는다.

**접근성 (a11y)**
- 라벨이 없으면 aria-label 필수.
- indeterminate 는 시각뿐 아니라 aria-checked="mixed" 로 표현한다.

### Chip

Selection and filter chip component. Line type (outlined) and Solid type (filled background). Filter chip extends Line with a dropdown.

**언제 쓰나**
- 선택 가능한 태그·필터를 나열할 때.
- filter 는 드롭다운으로 값을 고르고 적용 완료(complete)를 표시할 때.

**쓰지 말아야 할 때**
- 단일 액션 실행은 Button.
- 긴 목록의 단일 선택은 Select·Dropdown.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 라벨 | 칩 텍스트. |
| 아이콘(선택) | 앞쪽 보조 아이콘. |
| 닫기(X)(선택) | 선택·완료 상태에서 해제·삭제. filter complete 에 노출. |
| 컨테이너 | line=외곽선 / solid=채운 배경. |

| variant | default | hover | selected | complete | disabled |
| --- | --- | --- | --- | --- | --- |
| line | --chip-line-default-bg → color-chip-line-bg-default<br>--chip-line-default-border → color-chip-line-border-default<br>--chip-line-default-text → color-chip-line-label-default<br>--chip-line-default-icon → color-chip-line-label-default<br>--chip-line-default-close-icon → color-chip-line-label-default | --chip-line-hover-bg → color-chip-line-bg-hover<br>--chip-line-hover-border → color-chip-line-border-default<br>--chip-line-hover-close-icon → color-chip-line-label-default | --chip-line-selected-bg → color-chip-line-bg-selected<br>--chip-line-selected-border → color-chip-line-border-selected<br>--chip-line-selected-text → color-chip-line-label-selected<br>--chip-line-selected-icon → color-chip-line-label-selected<br>--chip-line-selected-close-icon → color-chip-line-label-selected | — | --chip-line-disabled-bg → color-chip-line-bg-disabled<br>--chip-line-disabled-border → color-chip-line-border-disabled<br>--chip-line-disabled-text → color-chip-line-label-disabled<br>--chip-line-disabled-icon → color-chip-line-label-disabled |
| solid | --chip-solid-default-bg → color-chip-solid-bg-default<br>--chip-solid-default-border → color-chip-solid-border-default<br>--chip-solid-default-text → color-chip-solid-label-default<br>--chip-solid-default-icon → color-chip-solid-label-default<br>--chip-solid-default-close-icon → color-chip-solid-label-default | --chip-solid-hover-bg → color-chip-solid-bg-hover<br>--chip-solid-hover-border → color-chip-solid-bg-hover<br>--chip-solid-hover-close-icon → color-chip-solid-label-default | --chip-solid-selected-bg → color-chip-solid-bg-selected<br>--chip-solid-selected-border → color-chip-solid-border-selected<br>--chip-solid-selected-text → color-chip-solid-label-selected<br>--chip-solid-selected-icon → color-chip-solid-label-selected<br>--chip-solid-selected-close-icon → color-chip-solid-label-selected | — | --chip-solid-disabled-bg → color-chip-solid-bg-disabled<br>--chip-solid-disabled-border → color-chip-solid-border-disabled<br>--chip-solid-disabled-text → color-chip-solid-label-disabled<br>--chip-solid-disabled-icon → color-chip-solid-label-disabled |
| filter | — | — | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "Chip"
  variantAxes:
    Size:
      - "SM"
      - "MD"
    State:
      - "Default"
      - "Hover"
      - "Selected"
      - "Disabled"
    Variant:
      - "Line"
      - "Solid"
    Break:
      - "PC"
      - "Mobile"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Selected"
      - "Disabled"
    metadata:
      - "default"
      - "hover"
      - "selected"
      - "complete"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#chip"
    status: "verified"
    initialState: "unselected"
    events:
      -
        on: "click"
        target: "chip"
        guard: "disabled=false"
        result: "toggle unselected ↔ selected"
      -
        on: "click"
        target: "chip"
        guard: "disabled=true"
        result: "keep the current value"
    keyboard: "not-defined"
    focus: "not-defined"
    accessibility: "not-defined"
  geometry:
    common:
      target: "root"
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "FIXED"
      primaryAxisAlignItems: "CENTER"
      counterAxisAlignItems: "CENTER"
      cornerRadius: "999"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Size: "SM"
          Break: "PC"
        height: 28
        paddingRight: "16"
        paddingLeft: "16"
      -
        when:
          Size: "SM"
          Break: "Mobile"
        height: 30
        paddingRight: "12"
        paddingLeft: "12"
      -
        when:
          Size: "MD"
          Break: "PC"
        height: 34
        paddingRight: "16"
        paddingLeft: "16"
  composition:
    mustReuse: "not-defined"
    mustNotCreate: "not-defined"
    declaredParts: "not-defined"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/chip/line/bg/default"
      - "color/chip/line/bg/disabled"
      - "color/chip/line/bg/hover"
      - "color/chip/line/bg/selected"
      - "color/chip/line/border/default"
      - "color/chip/line/border/disabled"
      - "color/chip/line/border/selected"
      - "color/chip/line/label/default"
      - "color/chip/line/label/disabled"
      - "color/chip/line/label/selected"
      - "color/chip/solid/bg/default"
      - "color/chip/solid/bg/disabled"
      - "color/chip/solid/bg/hover"
      - "color/chip/solid/bg/selected"
      - "color/chip/solid/border/default"
      - "color/chip/solid/border/disabled"
      - "color/chip/solid/border/selected"
      - "color/chip/solid/label/default"
      - "color/chip/solid/label/disabled"
      - "color/chip/solid/label/selected"
    aliasChains:
      -
        chain: "--chip-line-default-bg → --color-surface-default"
        status: "unresolved"
      -
        chain: "--chip-line-hover-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--chip-line-selected-bg → --color-surface-default"
        status: "unresolved"
      -
        chain: "--chip-line-disabled-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--chip-line-default-border → --color-border-strong"
        status: "unresolved"
      -
        chain: "--chip-line-hover-border → --color-border-strong"
        status: "unresolved"
      -
        chain: "--chip-line-selected-border → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--chip-line-disabled-border → --color-border-disabled"
        status: "unresolved"
      -
        chain: "--chip-line-default-text → --color-text-caption"
        status: "unresolved"
      -
        chain: "--chip-line-selected-text → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--chip-line-disabled-text → --color-text-disabled"
        status: "unresolved"
      -
        chain: "--chip-line-default-icon → --color-icon-default"
        status: "unresolved"
      -
        chain: "--chip-line-selected-icon → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--chip-line-disabled-icon → --color-icon-muted"
        status: "unresolved"
      -
        chain: "--chip-line-default-close-icon → --color-icon-default"
        status: "unresolved"
      -
        chain: "--chip-line-hover-close-icon → --color-icon-emphasis"
        status: "unresolved"
      -
        chain: "--chip-line-selected-close-icon → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--chip-solid-default-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--chip-solid-hover-bg → --color-bg-muted"
        status: "unresolved"
      -
        chain: "--chip-solid-selected-bg → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--chip-solid-disabled-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--chip-solid-default-border → transparent"
        status: "resolved"
      -
        chain: "--chip-solid-hover-border → transparent"
        status: "resolved"
      -
        chain: "--chip-solid-selected-border → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--chip-solid-disabled-border → transparent"
        status: "resolved"
      -
        chain: "--chip-solid-default-text → --color-text-caption"
        status: "unresolved"
      -
        chain: "--chip-solid-selected-text → --color-action-primary-text"
        status: "unresolved"
      -
        chain: "--chip-solid-disabled-text → --color-text-disabled"
        status: "unresolved"
      -
        chain: "--chip-solid-default-icon → --color-icon-default"
        status: "unresolved"
      -
        chain: "--chip-solid-selected-icon → --color-action-primary-text"
        status: "unresolved"
      -
        chain: "--chip-solid-disabled-icon → --color-icon-muted"
        status: "unresolved"
      -
        chain: "--chip-solid-default-close-icon → --color-icon-default"
        status: "unresolved"
      -
        chain: "--chip-solid-hover-close-icon → --color-icon-emphasis"
        status: "unresolved"
      -
        chain: "--chip-solid-selected-close-icon → --color-action-primary-text"
        status: "unresolved"
  figma:
    status: "figma-unconfirmed"
    identifiers: "figma-unconfirmed"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- line=외곽선, solid=채운 배경으로 용도에 맞게 쓴다.
- filter 의 complete 는 선택값 노출 + 닫기(X)로 표시한다.

_Don't_
- selection chip 에 complete(필터 완료) 개념을 쓰지 않는다 — filter 전용.
- form-control 의 filled 와 혼동하지 않는다(다른 개념).

**접근성 (a11y)**
- 선택 상태를 aria-pressed 또는 role 로 노출한다.
- 닫기(X)에는 삭제·해제 aria-label 을 단다.

### DatePicker

Date selection component. Uses Base Input as trigger field. PC popover calendar panel (figma-unconfirmed) or Mobile bottom sheet (Figma confirmed).

**언제 쓰나**
- 날짜(단일/기간)를 고를 때. 트리거는 Base Input 필드.
- PC 는 팝오버 캘린더, Mobile 은 바텀시트로 표출.

**쓰지 말아야 할 때**
- 시간만 고를 때는 TimePicker.
- 자유 텍스트 날짜 입력만 필요하면 Input.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 트리거 필드 | Base Input 재사용. 선택 날짜 표시. |
| 캘린더 패널 | 월 네비 + 날짜 셀 그리드. |
| 날짜 셀 | default·hover·today·selected·other-month·disabled 상태. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | --input-default-bg<br>--input-default-border | --date-picker-cell-hover-bg → color-bg-subtle<br>--date-picker-nav-hover-bg → color-bg-subtle | — | --input-disabled-bg<br>--input-disabled-border<br>--input-disabled-text<br>--date-picker-cell-disabled-text → color-text-disabled |

#### Agent-readable contract

```yaml
agent:
  component: "DatePicker"
  variantAxes:
    Size:
      - "XXSM"
      - "XSM"
      - "MD"
    State:
      - "Default"
      - "Filled"
      - "Open"
      - "Disabled"
    Break:
      - "PC"
      - "Mobile"
  states:
    builder:
      - "Default"
      - "Filled"
      - "Open"
      - "Disabled"
    metadata:
      trigger:
        - "default"
        - "selected(=open)"
        - "completed(=filled)"
        - "disabled"
        - "error(figma-unconfirmed)"
      dayCell:
        - "default"
        - "hover"
        - "today(selected-alt)"
        - "selected(filled)"
        - "other-month(disabled-text)"
        - "disabled-date"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#date-picker"
    status: "verified"
    initialState: "closed in calendar view"
    events:
      -
        on: "click"
        target: "input or calendar action"
        result: "toggle the panel"
      -
        on: "click"
        target: "day"
        guard: "date is enabled"
        result: "write YY.MM.DD, select the day, and close"
      -
        on: "click"
        target: "month label"
        result: "cycle calendar → month → year → calendar"
      -
        on: "click"
        target: "previous or next"
        result: "move one month, one year, or one 12-year block according to the current view"
      -
        on: "click"
        target: "outside"
        result: "close"
    keyboard:
      Escape: "close and return focus to input"
      ArrowLeft: "previous enabled day"
      ArrowRight: "next enabled day"
      ArrowUp: "previous week"
      ArrowDown: "next week"
      EnterOrSpace: "select focused day"
    focus:
      onOpen: "focus the first enabled day"
      onEscape: "return to input"
    accessibility:
      expanded: "synchronize aria-expanded on input and calendar action"
      disabledDate: "native disabled plus aria-disabled=true"
      day: "aria-label uses YY.MM.DD"
    constraints:
      - "week starts on Sunday"
      - "disabled dates come from data-disabled-dates"
      - "adjacent-month days remain selectable when enabled"
  geometry:
    common:
      target: "trigger"
      width: 180
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "FIXED"
      primaryAxisAlignItems: "SPACE_BETWEEN"
      counterAxisAlignItems: "CENTER"
      paddingTop: "0"
      paddingRight: "8"
      paddingBottom: "0"
      paddingLeft: "16"
      cornerRadius: "4"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Size: "XXSM"
          Break: "PC"
        height: 28
      -
        when:
          Size: "XSM"
          Break: "PC"
        height: 34
      -
        when:
          Size: "MD"
          Break: "PC"
        height: 44
      -
        when:
          Size: "MD"
          Break: "Mobile"
        height: 48
  composition:
    mustReuse:
      - "Calendar"
      - "Input"
    mustNotCreate: "not-defined"
    declaredParts:
      - "trigger"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/form-control/bg/default"
      - "color/form-control/bg/disabled"
      - "color/form-control/bg/selected"
      - "color/form-control/border/default"
      - "color/form-control/border/disabled"
      - "color/form-control/border/selected"
      - "color/form-control/text/default"
      - "color/form-control/text/disabled"
      - "color/form-control/text/placeholder"
      - "color/form-control/text/selected"
    aliasChains:
      -
        chain: "--input-default-bg → --color-form-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--input-default-border → --color-form-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--input-focus-border → --color-form-control-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--input-disabled-bg → --color-form-control-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--input-disabled-border → --color-form-control-border-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--input-error-border → --color-form-control-border-error → --color-red-300 → #FF4554"
        status: "resolved"
      -
        chain: "--input-placeholder-text → --color-form-control-text-placeholder → --color-gray-500 → #757575"
        status: "resolved"
      -
        chain: "--input-disabled-text → --color-form-control-text-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
  figma:
    status: "partial"
    identifiers:
      componentName: "datepicker_input"
      figmaFileKey: "yE5UCFEbmXJBlYJWB24Lz2"
      figmaNodeId: "540:3794"
      figmaSectionNodeId: "6456:4033"
    variants:
      platform:
        - "mobile"
        - "pc-md"
        - "pc-xsm"
        - "pc-xxsm"
      state:
        - "default"
        - "selected"
        - "completed"
        - "disabled"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 트리거는 Base Input 을 재사용한다(별도 필드 만들지 않음).
- 오늘·선택·타월(other-month)·비활성 날짜를 상태 토큰으로 구분한다.

_Don't_
- 날짜 셀 색을 raw 로 칠하지 않는다 — bg-subtle 등 Semantic 경유.
- PC 캘린더 레이아웃을 Figma 미확인 상태로 단정하지 않는다.

**접근성 (a11y)**
- 날짜 셀은 키보드 이동이 가능해야 하고 선택 셀에 aria-selected 를 준다.
- 비활성 날짜는 aria-disabled 로 표시한다.

### Dropdown

드롭다운 트리거 + 옵션 목록 컴포넌트. trigger 상태(default·hover·open·disabled)와 option 상태(hover·selected) 포함.

**언제 쓰나**
- 트리거를 눌러 옵션 목록에서 하나를 고를 때.
- Select 의 기반 컴포넌트.

**쓰지 말아야 할 때**
- 즉시 실행 액션 그룹은 Button.
- 적은 수의 상호배타 선택은 Radio.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 트리거 | 현재 값·placeholder 표시. default·hover·open·disabled. |
| 옵션 목록 | surface-raised 위에 떠 있는 패널. |
| 옵션 | hover·selected 상태 항목. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | --dropdown-trigger-default-bg → color-surface-default<br>--dropdown-trigger-default-border → color-form-control-border-default<br>--dropdown-trigger-default-text → color-text-secondary<br>--dropdown-list-bg → color-surface-raised<br>--dropdown-list-border → color-border-default | --dropdown-trigger-hover-bg → color-bg-subtle<br>--dropdown-trigger-hover-border → color-border-strong<br>--dropdown-list-bg → color-surface-raised<br>--dropdown-list-border → color-border-default<br>--dropdown-option-hover-bg → color-bg-subtle | --dropdown-list-bg → color-surface-raised<br>--dropdown-list-border → color-border-default | --dropdown-trigger-disabled-bg → color-bg-subtle<br>--dropdown-trigger-disabled-border → color-border-subtle<br>--dropdown-trigger-disabled-text → color-text-disabled<br>--dropdown-list-bg → color-surface-raised<br>--dropdown-list-border → color-border-default |

#### Agent-readable contract

```yaml
agent:
  component: "Dropdown"
  variantAxes:
    Size:
      - "XXSM"
      - "XSM"
      - "MD"
    State:
      - "Default"
  states:
    builder:
      - "Default"
    metadata:
      trigger:
        - "default"
        - "hover"
        - "open"
        - "disabled"
      option:
        - "default"
        - "hover"
        - "selected"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#dropdown"
    status: "verified"
    initialState: "one or zero options selected"
    events:
      -
        on: "click"
        target: "option"
        result: "select the clicked option and unselect every sibling"
    selection: "single"
    openClose: "owned by the composing trigger component"
    keyboard: "not-defined"
    focus: "not-defined"
    accessibility: "not-defined"
  geometry:
    common:
      target: "root"
      width: 140
      layoutMode: "VERTICAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "FIXED"
      itemSpacing: "0"
      paddingTop: "4"
      paddingBottom: "4"
      cornerRadius: "4"
      strokeWeight: "1"
      strokeAlign: "OUTSIDE"
    variants:
      -
        when:
          Size: "XXSM"
        height: 120
      -
        when:
          Size: "XSM"
        height: 144
      -
        when:
          Size: "MD"
        height: 184
  composition:
    mustReuse:
      - "Dropdown List"
    mustNotCreate: "not-defined"
    declaredParts: "not-defined"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/dropdown/list/bg"
      - "color/dropdown/list/border"
    aliasChains:
      -
        chain: "--dropdown-trigger-default-bg → --color-form-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--dropdown-trigger-hover-bg → --color-form-control-bg-hover → --color-gray-0 → #FAFAFA"
        status: "resolved"
      -
        chain: "--dropdown-trigger-open-bg → --color-form-control-bg-hover → --color-gray-0 → #FAFAFA"
        status: "resolved"
      -
        chain: "--dropdown-trigger-disabled-bg → --color-form-control-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--dropdown-trigger-default-border → --color-form-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--dropdown-trigger-hover-border → --color-form-control-border-hover"
        status: "unresolved"
      -
        chain: "--dropdown-trigger-open-border → --color-border-focus"
        status: "unresolved"
      -
        chain: "--dropdown-trigger-disabled-border → --color-form-control-border-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--dropdown-trigger-default-text → --color-text-secondary"
        status: "unresolved"
      -
        chain: "--dropdown-trigger-disabled-text → --color-text-disabled"
        status: "unresolved"
      -
        chain: "--dropdown-trigger-placeholder-text → --color-text-placeholder"
        status: "unresolved"
      -
        chain: "--dropdown-trigger-selected-text → --color-text-primary"
        status: "unresolved"
      -
        chain: "--dropdown-list-bg → --color-surface-default"
        status: "unresolved"
      -
        chain: "--dropdown-list-border → --color-border-default"
        status: "unresolved"
      -
        chain: "--dropdown-option-hover-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--dropdown-option-selected-bg → transparent"
        status: "resolved"
      -
        chain: "--dropdown-option-selected-text → --color-action-primary-default"
        status: "unresolved"
  figma:
    status: "figma-unconfirmed"
    identifiers: "figma-unconfirmed"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 목록 배경은 surface-raised(떠 있는 표면)를 쓴다.
- 트리거 테두리는 form-control 토큰을 참조한다.

_Don't_
- 목록 배경에 surface-default 를 쓰지 않는다(D002 결정: raised).
- 옵션 hover/selected 색을 raw 로 칠하지 않는다.

**접근성 (a11y)**
- 트리거는 aria-expanded 로 열림 상태를 노출한다.
- 선택 옵션에 aria-selected, 목록은 role=listbox 패턴을 따른다.

### Filter Chip

목록의 조건을 바꾸는 필터 칩. 값이 붙은 알약(pill) 트리거를 누르면 드롭다운이 열린다. Chip 과 색 토큰을 100% 공유하지만 별개 컴포넌트다 — 상태가 5개(Complete 추가)이고, 타이틀 축과 화살표·드롭다운 부품을 갖는다.

**언제 쓰나**
- 목록·표의 정렬/기간/범주 같은 조건을 바꿀 때.
- 선택한 값을 칩 자체에 계속 보여줘야 할 때(무엇이 걸려 있는지 한눈에).

**쓰지 말아야 할 때**
- 단순 태그·상태 표시 — Chip 을 쓴다(누를 수 없는 표시용).
- 선택지가 배타적이고 개수가 적어 항상 펼쳐 두는 편이 나을 때 — Multi Toggle 을 쓴다.
- 폼 안의 값 입력 — Select Box 를 쓴다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 트리거(알약) | cornerRadius 999 의 가로 배치 컨테이너. 테두리 1px INSIDE. |
| 타이틀 | Title=On 일 때만. 무엇을 거는 필터인지(예: '정렬'). 비활성이 아니면 선택 색으로 보인다. |
| 값 라벨 | 현재 선택된 값(예: '최신순'). Complete 상태에서는 확정된 값을 보여준다. |
| 화살표 | 20px 라이브러리 chevron 인스턴스. 닫힘=아래, 열림=위. |
| 드롭다운 | Selected 상태에서만 붙는 Dropdown 컴포넌트 인스턴스. 트리거 아래 8px 간격. |

| variant | default | hover | selected | complete | disabled |
| --- | --- | --- | --- | --- | --- |
| line | — | --color-chip-line-bg-hover → color/chip/line/bg/hover | --color-chip-line-bg-selected → color/chip/line/bg/selected<br>--color-chip-line-border-selected → color/chip/line/border/selected | — | --color-chip-line-bg-disabled → color/chip/line/bg/disabled<br>--color-chip-line-border-disabled → color/chip/line/border/disabled<br>--color-chip-line-label-disabled → color/chip/line/label/disabled |
| solid | — | --color-chip-solid-bg-hover → color/chip/solid/bg/hover | --color-chip-solid-bg-selected → color/chip/solid/bg/selected<br>--color-chip-solid-border-selected → color/chip/solid/border/selected<br>--color-chip-solid-label-selected → color/chip/solid/label/selected | — | --color-chip-solid-bg-disabled → color/chip/solid/bg/disabled<br>--color-chip-solid-border-disabled → color/chip/solid/border/disabled<br>--color-chip-solid-label-disabled → color/chip/solid/label/disabled |

#### Agent-readable contract

```yaml
agent:
  component: "Filter Chip"
  variantAxes:
    Size:
      - "SM"
      - "MD"
    Break:
      - "PC"
      - "Mobile"
    Variant:
      - "Line"
      - "Solid"
    Title:
      - "Off"
      - "On"
    State:
      - "Default"
      - "Hover"
      - "Selected"
      - "Complete"
      - "Disabled"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Selected"
      - "Complete"
      - "Disabled"
    metadata:
      - "default"
      - "hover"
      - "selected"
      - "complete"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#filter-chip"
    status: "verified"
    initialState: "closed"
    events:
      -
        on: "click"
        target: "trigger"
        guard: "disabled=false"
        result: "toggle closed ↔ open"
      -
        on: "click"
        target: "option"
        result: "select one option, update the trigger label, and close"
      -
        on: "click"
        target: "outside"
        result: "close"
      -
        on: "disable"
        target: "filter chip"
        result: "close and block trigger clicks"
    selection: "single"
    keyboard: "not-defined"
    focus: "not-defined"
    accessibility: "not-defined"
  geometry:
    common:
      target: "chip"
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "FIXED"
      counterAxisAlignItems: "CENTER"
      itemSpacing: "4"
      cornerRadius: "999"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Size: "SM"
          Break: "PC"
        height: 28
        paddingRight: "6"
        paddingLeft: "12"
      -
        when:
          Size: "MD"
          Break: "PC"
        height: 34
        paddingRight: "8"
        paddingLeft: "16"
      -
        when:
          Size: "MD"
          Break: "Mobile"
        height: 30
        paddingRight: "6"
        paddingLeft: "12"
  composition:
    mustReuse:
      - "Dropdown"
    mustNotCreate: "not-defined"
    declaredParts:
      - "chip"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/chip/line/bg/default"
      - "color/chip/line/bg/disabled"
      - "color/chip/line/bg/hover"
      - "color/chip/line/bg/selected"
      - "color/chip/line/border/default"
      - "color/chip/line/border/disabled"
      - "color/chip/line/border/selected"
      - "color/chip/line/label/default"
      - "color/chip/line/label/disabled"
      - "color/chip/line/label/selected"
      - "color/chip/solid/bg/default"
      - "color/chip/solid/bg/disabled"
      - "color/chip/solid/bg/hover"
      - "color/chip/solid/bg/selected"
      - "color/chip/solid/border/default"
      - "color/chip/solid/border/disabled"
      - "color/chip/solid/border/selected"
      - "color/chip/solid/label/default"
      - "color/chip/solid/label/disabled"
      - "color/chip/solid/label/selected"
    aliasChains:
      -
        chain: "--color-chip-line-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-chip-line-bg-hover → --color-gray-0 → #FAFAFA"
        status: "resolved"
      -
        chain: "--color-chip-line-bg-selected → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-chip-line-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-chip-line-border-default → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--color-chip-line-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-chip-line-border-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--color-chip-line-label-default → --color-gray-500 → #757575"
        status: "resolved"
      -
        chain: "--color-chip-line-label-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-chip-line-label-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--color-chip-solid-bg-default → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-chip-solid-bg-hover → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--color-chip-solid-bg-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-chip-solid-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-chip-solid-border-default → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-chip-solid-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-chip-solid-border-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-chip-solid-label-default → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-chip-solid-label-selected → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-chip-solid-label-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
  figma:
    status: "available"
    identifiers:
      figmaNodeId: "540:3226"
    variants:
      Size:
        - "SM"
        - "MD"
      Break:
        - "PC"
        - "Mobile"
      Variant:
        - "Line"
        - "Solid"
      Title:
        - "Off"
        - "On"
      State:
        - "Default"
        - "Hover"
        - "Selected"
        - "Complete"
        - "Disabled"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 색은 Chip 의 line/solid 토큰을 그대로 쓴다(필터 전용 색을 만들지 않는다).
- 화살표는 라이브러리 아이콘 인스턴스를 쓰고 회전으로 방향을 바꾼다.
- 드롭다운은 Dropdown 컴포넌트 인스턴스를 붙인다 — 목록을 새로 그리지 않는다.

_Don't_
- Chip 과 같은 것으로 취급해 하나로 합치지 않는다(상태·축·부품이 다르다).
- 좌우 padding 을 같게 맞추지 않는다(화살표 자리 확보가 목적).
- Complete 를 Selected 의 별칭으로 쓰지 않는다 — Complete 는 선택이 끝나 드롭다운이 닫힌 상태다.

**접근성 (a11y)**
- 트리거는 aria-haspopup=listbox·aria-expanded 로 열림 상태를 알린다.
- 타이틀과 값이 함께 읽히도록 접근 가능한 이름을 구성한다(예: '정렬, 최신순').
- Esc 로 드롭다운을 닫을 수 있어야 한다.

### GNB

Global Navigation Bar. 로고 + 메뉴 슬롯(slots_menu) + 유틸리티(아이콘 3종) 조립체. 메뉴 슬롯 9 variant(size md/sm/xsm × state default/hover/selected) + GNB 바 6 variant(size md/sm/xsm × align center-between/start). PC only. viewport(1280/1440/1920)는 full-width 반응형으로 통합.

**언제 쓰나**
- PC 상단 글로벌 내비게이션이 필요할 때.
- 로고 + 메뉴 + 유틸(아이콘) 조립.

**쓰지 말아야 할 때**
- 사이드바 내비게이션은 Navigation.
- 모바일 하단 탭은 Mobile Bottom Nav.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 로고 | 좌측 브랜드. |
| 메뉴 슬롯 | size md/sm/xsm × default/hover/selected. |
| 유틸리티 | 우측 아이콘 3종. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| menuSlot | --gnb-menu-label-default → color-navigation-label-default-alt | — | — | — |
| bar | --gnb-menu-label-default → color-navigation-label-default-alt | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "GNB"
  variantAxes:
    Align:
      - "Center-Between"
      - "Start"
    Size:
      - "md"
      - "sm"
      - "xsm"
  states:
    builder: "not-defined"
    metadata: "unknown"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#gnb"
    status: "verified"
    initialState: "one menu selected"
    events:
      -
        on: "click"
        target: "menu"
        result: "select the clicked menu and unselect every sibling"
    selection: "single"
    keyboard: "native-button-click-only"
    focus: "native-button"
    accessibility: "not-defined"
  geometry:
    common:
      target: "root"
      width: 1920
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "FIXED"
      primaryAxisAlignItems: "SPACE_BETWEEN"
      counterAxisAlignItems: "CENTER"
      itemSpacing: "0"
      paddingTop: "0"
      paddingBottom: "0"
    variants:
      -
        when:
          Size: "md"
        height: 56
        paddingRight: "20"
        paddingLeft: "24"
      -
        when:
          Size: "sm"
        height: 48
        paddingRight: "20"
        paddingLeft: "24"
      -
        when:
          Size: "xsm"
        height: 36
        paddingRight: "24"
        paddingLeft: "20"
  composition:
    mustReuse:
      - "GNB Utility Icon"
    mustNotCreate: "not-defined"
    declaredParts:
      - "border"
      - "leading"
      - "menus"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/line/gray/subtle"
      - "color/navigation/bg"
      - "color/text/title/primary"
    aliasChains:
      -
        chain: "--gnb-bg → --color-navigation-bg → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--gnb-border → --color-border-subtle"
        status: "unresolved"
      -
        chain: "--gnb-menu-label-default → --color-navigation-label-default-alt → --color-gray-700 → #434343"
        status: "resolved"
      -
        chain: "--gnb-menu-label-active → --color-navigation-label-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--gnb-menu-underline-active → --color-navigation-indicator-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--gnb-logo-text → --color-text-primary"
        status: "unresolved"
      -
        chain: "--gnb-icon → --color-navigation-icon"
        status: "unresolved"
  figma:
    status: "available"
    identifiers:
      figmaNodeId: "956:18233"
    variants:
      size: "variant"
      state: "state"
      align: "variant"
  icons:
    allowed:
      - "ic_인터넷"
      - "ic_계정/사용자/ID"
      - "ic_메뉴"
    slots: "unknown"
```

_Do_
- PC 전용으로 쓴다. 뷰포트(1280/1440/1920)는 full-width 반응형으로 통합한다.
- 메뉴 라벨 색은 navigation 역할 토큰을 쓴다.

_Don't_
- 모바일에 GNB 를 쓰지 않는다.
- 선택 메뉴 표시를 색만이 아니라 상태 토큰으로 일관되게 한다.

**접근성 (a11y)**
- 현재 메뉴에 aria-current 를 준다.
- 유틸 아이콘 버튼에 aria-label 을 단다.

### Input

Base text input field. Pure input element without label/helper wrapper. Label/Helper combo = Input Slots pattern.

**언제 쓰나**
- 한 줄 텍스트·숫자를 입력받을 때 — 로그인·검색·필터·설정 폼 등.
- 라벨·도움말과 함께 쓰려면 Input Slots(라벨/헬퍼 조합) 패턴으로 감싼다.

**쓰지 말아야 할 때**
- 여러 줄 입력은 Textarea 를 쓴다.
- 선택지 중 하나를 고르는 입력은 Select·Dropdown, 날짜·시간은 DatePicker·TimePicker 를 쓴다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 입력 필드(base) | 텍스트·숫자를 입력하는 기본 영역. 배경·테두리·텍스트는 form-control 토큰. |
| placeholder | 입력 전 안내 문구. 입력되면 default 텍스트 색으로 전환. |
| suffix 액션 그룹(선택) | 오른쪽 액션 버튼 그룹. 검색=지우기+검색 아이콘, 비밀번호=표시전환+지우기. |
| helper 텍스트(선택) | 필드 아래 도움말·오류·성공 메시지. color-text-state 사용. |

| variant | default | focus | filled | error | correct | disabled |
| --- | --- | --- | --- | --- | --- | --- |
| default | --color-form-control-bg-default → color-surface-default<br>--color-form-control-border-default → color-border-default<br>--color-form-control-text-default → color-text-secondary | — | — | --color-form-control-border-error → color-status-error<br>--color-text-state-error → color-status-error | --color-form-control-border-correct → color-border-focus<br>--color-text-state-correct | --color-form-control-bg-disabled → color-bg-subtle<br>--color-form-control-border-disabled → color-border-subtle<br>--color-form-control-text-disabled → color-text-disabled |

#### Agent-readable contract

```yaml
agent:
  component: "Input"
  variantAxes:
    Size:
      - "XXSM"
      - "XSM"
      - "MD"
    State:
      - "Default"
      - "Filled"
      - "Editing"
      - "Error"
      - "Correct"
      - "Read-Only"
      - "Disabled"
    Label:
      - "Off"
      - "On"
    Message:
      - "Off"
      - "On"
    Break:
      - "PC"
      - "Mobile"
  states:
    builder:
      - "Default"
      - "Filled"
      - "Editing"
      - "Error"
      - "Correct"
      - "Read-Only"
      - "Disabled"
    metadata:
      - "default"
      - "focus"
      - "filled"
      - "error"
      - "correct"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#input"
    status: "verified"
    initialState: "empty and unfocused"
    events:
      -
        on: "focus"
        target: "input"
        result: "enter editing/focus state"
      -
        on: "blur"
        target: "input"
        result: "leave editing/focus state unless focus moves to a suffix action"
      -
        on: "input"
        target: "search or password input"
        result: "show clear action only when a value exists"
      -
        on: "click"
        target: "clear action"
        result: "clear the value, hide the clear action, and return focus to the input"
      -
        on: "click"
        target: "password visibility action"
        result: "toggle password ↔ text and return focus to the input"
    keyboard: "native-input"
    focus:
      clear: "return to input"
      passwordVisibility: "return to input"
    accessibility:
      passwordVisibility: "synchronize aria-label and aria-pressed"
  geometry:
    common:
      target: "field"
      width: 200
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "FIXED"
      primaryAxisAlignItems: "MIN"
      counterAxisAlignItems: "CENTER"
      paddingTop: "0"
      paddingBottom: "0"
      cornerRadius: "4"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Size: "XXSM"
          Break: "PC"
        height: 28
        paddingRight: "8"
        paddingLeft: "12"
      -
        when:
          Size: "XSM"
          Break: "PC"
        height: 34
        paddingRight: "8"
        paddingLeft: "12"
      -
        when:
          Size: "MD"
          Break: "PC"
        height: 44
        paddingRight: "12"
        paddingLeft: "16"
      -
        when:
          Size: "MD"
          Break: "Mobile"
        height: 48
        paddingRight: "12"
        paddingLeft: "16"
  composition:
    mustReuse: "not-defined"
    mustNotCreate: "not-defined"
    declaredParts:
      - "field"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/form-control/bg/default"
      - "color/form-control/bg/disabled"
      - "color/form-control/bg/selected"
      - "color/form-control/border/correct"
      - "color/form-control/border/default"
      - "color/form-control/border/disabled"
      - "color/form-control/border/error"
      - "color/form-control/border/selected"
      - "color/form-control/label/default"
      - "color/form-control/label/disabled"
      - "color/form-control/text-cursor"
      - "color/form-control/text/default"
      - "color/form-control/text/disabled"
      - "color/form-control/text/placeholder"
      - "color/form-control/text/read-only"
      - "color/form-control/text/selected"
      - "color/text/state/caption"
      - "color/text/state/caution"
      - "color/text/state/correct"
      - "color/text/state/disabled"
    aliasChains:
      -
        chain: "--color-form-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-form-control-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-form-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-form-control-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-form-control-border-error → --color-red-300 → #FF4554"
        status: "resolved"
      -
        chain: "--color-form-control-border-correct → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-form-control-border-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--color-form-control-text-default → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-form-control-text-placeholder → --color-gray-500 → #757575"
        status: "resolved"
      -
        chain: "--color-form-control-text-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--color-text-title-secondary → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-text-state-helper → --color-gray-400 → #9D9D9D"
        status: "resolved"
      -
        chain: "--color-text-state-correct → --color-blue-400 → #1D6CEB"
        status: "resolved"
  figma:
    status: "available"
    identifiers:
      figmaNodeId: "6443:4408"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots:
      - "off"
      - "1"
      - "2+"
```

_Do_
- 색·테두리는 form-control 역할 토큰(--color-form-control-*)을 통해 참조한다.
- focus 는 파란 테두리(--input-focus-border)로만 표시하고 배경은 바꾸지 않는다.
- 라벨은 form-control 밖 제목 텍스트 토큰(--color-text-title-secondary)을 쓴다.

_Don't_
- hover 상태를 새로 만들지 않는다 — Figma 에 정의돼 있지 않아 제거됨(HD-2).
- filled·error·focus 에 별도 배경색을 넣지 않는다 — 배경은 default 와 동일, 구분은 텍스트·테두리 색으로만.
- correct(성공) 테두리를 초록으로 칠하지 않는다 — 원본은 파란색(border-selected).

**접근성 (a11y)**
- suffix 액션(지우기·검색·비밀번호 표시전환)에는 각각 aria-label 을 단다(예: 검색어 지우기, 비밀번호 보기/숨기기).
- 비밀번호 표시전환 토글은 aria-pressed 로 표시·숨김 상태를 노출한다.
- 지우기(clear) 버튼은 값이 있을 때만 노출한다(hidden 속성 제어).

### Mobile Bottom Nav

모바일 하단 내비게이션의 탭 아이템(Tab Item) 컴포넌트. 정본은 '탭 1칸'이며 4탭 바 자체는 컴포넌트가 아니라 이 아이템의 인스턴스 조합이다. 아이콘 32 + 라벨 12 세로 배치, 60×60 고정, 배경 투명(바 배경은 화면이 갖는다).

**언제 쓰나**
- 모바일 화면에서 최상위 영역 간 이동을 항상 보이게 둘 때.
- 탭 수가 3~5개로 고정된 주요 메뉴 구조일 때.

**쓰지 말아야 할 때**
- PC 화면 — PC 전역 이동은 GNB 를 쓴다.
- 항목이 자주 바뀌거나 6개 이상인 경우(더보기/드로어를 고려한다).

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 아이콘 | 32×32 라이브러리 아이콘 인스턴스. 상태에 따라 색만 바뀐다. |
| 라벨 | Pretendard Medium 12(body/12M). 아이콘 아래 4px 간격. |
| 아이템 컨테이너 | 60×60 고정, 세로 가운데 정렬, 배경 투명. |
| 바(bar) | 컴포넌트가 아님 — 아이템 인스턴스를 가로로 배열해 화면에서 구성한다. 배경색은 화면이 --color-navigation-bg 로 칠한다. |

| variant | unselected | selected |
| --- | --- | --- |
| default | --color-icon-gray → color/icon/gray<br>--color-navigation-label-default → color/navigation/label/default<br>--color-navigation-bg → color/navigation/bg | --color-icon-blue → color/icon/blue<br>--color-navigation-label-selected → color/navigation/label/selected<br>--color-navigation-bg → color/navigation/bg |

#### Agent-readable contract

```yaml
agent:
  component: "Mobile Bottom Nav"
  variantAxes:
    state:
      - "unselected"
      - "selected"
  states:
    builder: "not-defined"
    metadata:
      - "unselected"
      - "selected"
  behavior:
    platform: "PC"
    status: "not-defined"
  geometry:
    common:
      target: "root"
      width: 60
      height: 60
      layoutMode: "VERTICAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "FIXED"
      primaryAxisAlignItems: "CENTER"
      counterAxisAlignItems: "CENTER"
      itemSpacing: "4"
    variants:
      -
        when: "all"
  composition:
    mustReuse: "not-defined"
    mustNotCreate: "not-defined"
    declaredParts:
      - "home"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/navigation/label/default"
      - "color/navigation/label/selected"
    aliasChains:
      -
        chain: "--color-icon-gray → --color-gray-dark-600 → #55575F"
        status: "resolved"
      -
        chain: "--color-navigation-label-default → --color-gray-600 → #555555"
        status: "resolved"
      -
        chain: "--color-icon-blue → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-navigation-label-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-navigation-bg → --color-base-white → #FFFFFF"
        status: "resolved"
  figma:
    status: "available"
    identifiers:
      fileKey: "cysG5U1udpQqVagYY1hWHW"
      figmaNodeId: "723:6"
    variants:
      state:
        - "unselected"
        - "selected"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 아이템 자체는 배경을 갖지 않게 두고, 바 배경은 상위 컨테이너에서 칠한다.
- 아이콘은 라이브러리 인스턴스를 쓴다(벡터를 직접 그리지 않는다).
- 선택 상태는 아이콘·라벨 두 요소의 색을 함께 바꾼다.

_Don't_
- 아이템 안에 배지·점 등 임의 요소를 추가하지 않는다(정본에 없음).
- 60×60 고정 크기를 임의로 바꾸지 않는다.
- selected 아이콘에 control/indicator 계열 토큰을 쓰지 않는다(V2.4 오참조를 재유입시키지 말 것).

**접근성 (a11y)**
- 탭 목록은 role=tablist·각 항목 role=tab 으로 표시하고 현재 탭에 aria-selected 를 준다.
- 아이콘만으로 의미를 전달하지 않는다 — 라벨을 항상 함께 보여준다.
- 터치 타깃은 60×60 으로 최소 권장치를 만족한다.

### Modal

확인 계열 모달 그릇 2종(Footer Single|Dual). 딤(overlay) 위 공통 팝업 셸 — 헤더(제목+닫기)+본문(텍스트)+푸터(버튼)의 3층 껍데기. 그릇(제목·본문·푸터 3층)만 정본이며, 실제 문구는 예시(UX라이팅 플러그인 영역·컴포넌트 아님). Single=알림/설명체 1버튼, Dual=확인/질문체 2버튼. 제목 항상 존재. 코어 Button·V2.2 라이브러리 아이콘 재사용(신규 보여주기 컴포넌트 아님).

**언제 쓰나**
- 확인·알림 등 흐름을 멈추고 결정을 받을 때.
- Single=알림/설명체 1버튼, Dual=확인/질문체 2버튼.

**쓰지 말아야 할 때**
- 비차단 알림은 토스트/인라인 메시지.
- 복잡한 폼·다단계는 별도 페이지·패널을 고려한다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 딤(overlay) | 뒤 배경을 덮는 color-overlay 딤. |
| 헤더 | 제목 + 닫기(X). 제목 항상 존재. |
| 본문 | 텍스트 내용. |
| 푸터 | 코어 Button 1개(Single) 또는 2개(Dual). |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | — | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "Modal"
  variantAxes:
    Footer:
      - "Single"
      - "Dual"
  states:
    builder: "not-defined"
    metadata: "unknown"
  behavior:
    platform: "PC"
    status: "not-defined"
  geometry:
    common:
      target: "root"
      width: 360
      height: 100
      layoutMode: "VERTICAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "FIXED"
      counterAxisAlignItems: "CENTER"
      itemSpacing: "32"
      paddingTop: "20"
      paddingRight: "0"
      paddingBottom: "20"
      paddingLeft: "0"
      cornerRadius: "8"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when: "all"
  composition:
    mustReuse:
      - "Button"
      - "button"
    mustNotCreate: "not-defined"
    declaredParts:
      - "content"
      - "footer"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/modal/panel/border"
      - "color/surface/raised"
      - "color/text/body/primary"
      - "color/text/title/primary"
    aliasChains: "not-defined"
  figma:
    status: "available"
    identifiers:
      componentSetKey: "(미발행 — 라이브러리 publish 시 기록)"
      fileKey: "cysG5U1udpQqVagYY1hWHW"
      figmaNodeId: "1278:30800"
      sectionNodeId: "1278:30834"
      pageNodeId: "5:5706"
    variants:
      footer:
        - "single"
        - "dual"
  icons:
    allowed:
      - "ic_닫기 (V2.2 아이콘 라이브러리)"
    slots: "unknown"
```

_Do_
- 제목은 항상 둔다.
- 푸터 버튼은 코어 Button, 아이콘은 V2.2 라이브러리 인스턴스를 재사용한다.

_Don't_
- 모달 문구(실제 카피)를 컴포넌트 정본으로 넣지 않는다 — 예시일 뿐(UX라이팅 영역).
- 그릇(제목·본문·푸터 3층) 외 임의 레이아웃을 만들지 않는다.

**접근성 (a11y)**
- role=dialog·aria-modal 로 표시하고 포커스를 모달 안에 가둔다.
- 열릴 때 제목으로 포커스, 닫기는 Esc 로도 가능하게 한다.

### Multi Toggle

여러 선택지 중 하나를 고르는 분절 컨트롤(segmented control). 정본은 두 세트다 — 셀 정의 'Multi Toggle Element'(position×state×size, 32 variants)와 그 셀 인스턴스 3개를 묶은 조합형 'Multi Toggle'(Size×Selected, 6 variants).

**언제 쓰나**
- 선택지가 2~4개로 적고 서로 배타적일 때(정렬 기준·기간 범위 등).
- 선택 결과가 즉시 화면에 반영돼야 할 때.

**쓰지 말아야 할 때**
- 선택지가 5개 이상이거나 길이가 들쭉날쭉할 때 — Select Box 를 쓴다.
- 여러 개를 동시에 고를 수 있어야 할 때 — Checkbox·Filter Chip 을 쓴다.
- on/off 하나만 있을 때 — Toggle 을 쓴다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 셀(Multi Toggle Element) | 한 칸. position(first·middle-left·middle-right·last) × state(default·hover·selected·disabled) × size(md·sm). |
| 라벨 | 셀 안 가운데 정렬 텍스트(Medium 14). 셀 폭을 채운다(layoutGrow=1). |
| 묶음(Multi Toggle) | 셀 인스턴스 3개를 간격 0 으로 가로 배열. 자체 배경 없음(투명). |

| variant | default | hover | selected | disabled |
| --- | --- | --- | --- | --- |
| element | --color-button-bg-secondary--default → color/button/bg/secondary--default<br>--color-button-border-secondary--default → color/button/border/secondary--default<br>--color-button-label-secondary--default → color/button/label/secondary--default | --color-button-bg-secondary--hover → color/button/bg/secondary--hover<br>--color-button-border-secondary--hover → color/button/border/secondary--hover<br>--color-button-label-secondary--hover → color/button/label/secondary--hover | --color-button-bg-primary--default → color/button/bg/primary--default<br>--color-button-border-primary--default → color/button/border/primary--default<br>--color-button-label-primary--default → color/button/label/primary--default | --color-button-bg-disabled → color/button/bg/disabled<br>--color-button-border-disabled → color/button/border/disabled<br>--color-button-label-disabled → color/button/label/disabled |
| composed | --color-button-bg-secondary--default → color/button/bg/secondary--default<br>--color-button-border-secondary--default → color/button/border/secondary--default<br>--color-button-label-secondary--default → color/button/label/secondary--default | --color-button-bg-secondary--hover → color/button/bg/secondary--hover<br>--color-button-border-secondary--hover → color/button/border/secondary--hover<br>--color-button-label-secondary--hover → color/button/label/secondary--hover | --color-button-bg-primary--default → color/button/bg/primary--default<br>--color-button-border-primary--default → color/button/border/primary--default<br>--color-button-label-primary--default → color/button/label/primary--default | --color-button-bg-disabled → color/button/bg/disabled<br>--color-button-border-disabled → color/button/border/disabled<br>--color-button-label-disabled → color/button/label/disabled |

#### Agent-readable contract

```yaml
agent:
  component: "Multi Toggle"
  variantAxes:
    Size:
      - "md"
      - "sm"
    Selected:
      - "Left"
      - "Center"
      - "Right"
  states:
    builder: "not-defined"
    metadata:
      - "default"
      - "hover"
      - "selected"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#multi-toggle"
    status: "verified"
    initialState: "one segment selected"
    events:
      -
        on: "click"
        target: "segment"
        guard: "disabled=false"
        result: "select the clicked segment and unselect every sibling"
      -
        on: "click"
        target: "segment"
        guard: "disabled=true"
        result: "keep the current selection"
    selection: "single"
    keyboard: "not-defined"
    focus: "not-defined"
    accessibility: "not-defined"
  geometry:
    common:
      target: "root"
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "AUTO"
      primaryAxisAlignItems: "CENTER"
      counterAxisAlignItems: "CENTER"
      itemSpacing: "0"
    variants:
      -
        when: "all"
  composition:
    mustReuse:
      - "Multi Toggle Element"
    mustNotCreate: "not-defined"
    declaredParts: "not-defined"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings: "not-defined"
    aliasChains:
      -
        chain: "--color-button-bg-secondary--default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-button-border-secondary--default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-button-label-secondary--default → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-button-bg-secondary--hover → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-button-border-secondary--hover → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-button-label-secondary--hover → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-button-bg-primary--default → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-button-border-primary--default → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-button-label-primary--default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-button-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-button-border-disabled → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-button-label-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
  figma:
    status: "available"
    identifiers:
      fileKey: "cysG5U1udpQqVagYY1hWHW"
      figmaNodeId: "587:8029"
    variants:
      position:
        - "first"
        - "middle-left"
        - "middle-right"
        - "last"
      state:
        - "default"
        - "hover"
        - "selected"
        - "disabled"
      size:
        - "md"
        - "sm"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 셀 색은 button/* 토큰을 그대로 쓴다(선택=primary·비선택=secondary).
- 묶음은 셀 컴포넌트의 인스턴스로 만든다 — 셀 모양을 새로 그리지 않는다.
- 모서리 반경은 양 끝 칸에만 준다(가운데 칸은 0).

_Don't_
- 칸 사이에 간격을 주지 않는다(itemSpacing 0 — 붙어 있어야 한 덩어리로 읽힌다).
- 선택 칸과 인접한 면에 보더를 중복해서 그리지 않는다(이중선).
- control/* 계열 토큰으로 색을 재정의하지 않는다.

**접근성 (a11y)**
- 묶음은 role=radiogroup, 각 칸은 role=radio 로 표시하고 선택 칸에 aria-checked 를 준다.
- 좌우 화살표 키로 칸 간 이동이 가능해야 한다.
- disabled 칸은 포커스를 받지 않게 한다.

### Navigation

사이드바/상단 네비게이션 컴포넌트. 항목 hover·active 상태, 구분선, 활성 인디케이터 포함.

**언제 쓰나**
- 사이드바/상단 사이트 내비게이션 항목을 나열할 때.
- 현재 위치(active) 표시가 필요할 때.

**쓰지 말아야 할 때**
- PC 글로벌 상단 바는 GNB.
- 날짜 캘린더의 이동 버튼(nav)과 혼동하지 않는다(다른 개념).

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 항목 | 아이콘 + 라벨. default·hover·active. |
| 활성 인디케이터 | 현재 항목 강조 막대. |
| 구분선 | 그룹 구분 divider. |

| variant | default | hover | active | disabled |
| --- | --- | --- | --- | --- |
| default | --nav-bg → color-surface-default<br>--nav-item-default-text → color-text-tertiary<br>--nav-item-default-icon → color-icon-default<br>--nav-item-indicator-default → color-border-subtle<br>--nav-divider → color-border-subtle | --nav-bg → color-surface-default<br>--nav-item-hover-bg → color-bg-subtle<br>--nav-divider → color-border-subtle | --nav-bg → color-surface-default<br>--nav-item-active-bg → color-action-primary-subtle<br>--nav-item-active-text → color-action-primary-default<br>--nav-item-active-icon → color-action-primary-default<br>--nav-item-indicator → color-action-primary-default<br>--nav-divider → color-border-subtle | --nav-bg → color-surface-default<br>--nav-divider → color-border-subtle |

#### Agent-readable contract

```yaml
agent:
  component: "Navigation"
  variantAxes: "not-defined"
  states:
    builder: "not-defined"
    metadata:
      - "default"
      - "hover"
      - "active"
      - "disabled"
  behavior:
    platform: "PC"
    status: "not-defined"
  geometry: "not-defined"
  composition:
    mustReuse: "not-defined"
    mustNotCreate: "not-defined"
    declaredParts: "not-defined"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings: "not-defined"
    aliasChains:
      -
        chain: "--nav-bg → --color-surface-default"
        status: "unresolved"
      -
        chain: "--nav-item-hover-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--nav-item-active-bg → --color-action-primary-subtle"
        status: "unresolved"
      -
        chain: "--nav-item-default-text → --color-text-inverse"
        status: "unresolved"
      -
        chain: "--nav-item-active-text → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--nav-item-default-icon → --color-icon-default"
        status: "unresolved"
      -
        chain: "--nav-item-active-icon → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--nav-item-indicator → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--nav-item-indicator-default → transparent"
        status: "resolved"
      -
        chain: "--nav-divider → --color-border-subtle"
        status: "unresolved"
  figma:
    status: "figma-unconfirmed"
    identifiers: "figma-unconfirmed"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- active 항목은 인디케이터 + 액션색으로 표시한다.
- 비선택 인디케이터는 --nav-item-indicator-default 를 쓴다.

_Don't_
- DatePicker 의 nav 버튼 토큰과 섞지 않는다.
- 항목 색을 raw 로 칠하지 않는다.

**접근성 (a11y)**
- 현재 항목에 aria-current="page" 를 준다.
- 아이콘만 있는 항목엔 라벨/aria-label 을 준다.

### Pagination

페이지네이션 컨트롤. 화살표(first/prev/next/last) + 페이지 번호. 선택 페이지는 텍스트 색으로만 구분.

**언제 쓰나**
- 긴 목록·표를 페이지로 나눠 이동할 때.

**쓰지 말아야 할 때**
- 무한 스크롤 UX 에는 쓰지 않는다.
- 적은 항목은 페이지네이션 없이 한 번에 보여준다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 화살표 | first/prev/next/last 이동. |
| 페이지 번호 | 현재 페이지는 텍스트 색으로만 구분. |

| variant | default | hover | selected | disabled |
| --- | --- | --- | --- | --- |
| arrow | — | --pagination-control-hover-bg → color-bg-subtle | — | — |
| number | — | --pagination-control-hover-bg → color-bg-subtle | --pagination-number-text-selected → color-text-secondary | — |

#### Agent-readable contract

```yaml
agent:
  component: "Pagination"
  variantAxes:
    State:
      - "Single"
      - "First"
      - "Last"
      - "Middle"
  states:
    builder:
      - "Single"
      - "First"
      - "Last"
      - "Middle"
    metadata:
      - "default"
      - "hover"
      - "selected"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#pagination"
    status: "verified"
    initialState: "page 1"
    events:
      -
        on: "click"
        target: "page number"
        result: "set the current page and rerender the current number block"
      -
        on: "click"
        target: "first"
        result: "move to page 1"
      -
        on: "click"
        target: "previous block"
        result: "move to the first page of the previous block"
      -
        on: "click"
        target: "next block"
        result: "move to the first page of the next block"
      -
        on: "click"
        target: "last"
        result: "move to the final page"
    constraints:
      - "show at most 6 page numbers per block"
      - "disable unavailable edge/block actions"
      - "single-page mode disables all navigation actions"
    keyboard: "native-button"
    focus: "native-button"
    accessibility:
      pageNumber: "aria-label includes the page number and marks the current page in its accessible name"
  geometry:
    common:
      target: "root"
      height: 28
    variants:
      -
        when:
          State: "Single"
        width: 164
      -
        when:
          State:
            - "First"
            - "Last"
            - "Middle"
        width: 304
  composition:
    mustReuse:
      - "Pagination Cell"
    mustNotCreate: "not-defined"
    declaredParts: "not-defined"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings: "not-defined"
    aliasChains:
      -
        chain: "--pagination-control-bg → --color-surface-default"
        status: "unresolved"
      -
        chain: "--pagination-control-border → --color-border-default"
        status: "unresolved"
      -
        chain: "--pagination-control-hover-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--pagination-number-text → --color-gray-400 → #9D9D9D"
        status: "resolved"
      -
        chain: "--pagination-number-text-selected → --color-text-secondary"
        status: "unresolved"
  figma:
    status: "available"
    identifiers:
      figmaNodeId: "956:19066"
    variants:
      direction: "direction"
      property1: "property1"
      selected: "selected"
      hover: "hover"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 선택 페이지는 배경 변화 없이 텍스트 색으로만 구분한다(Figma 기준).
- 비활성 화살표는 전용 disabled 토큰(bg·border·icon)으로 표현한다 — opacity 로 처리하지 않는다.

_Don't_
- 선택 페이지에 배경색을 넣지 않는다.
- hover 배경을 임의 값으로 넣지 않는다(현재 gray-50 가정값 — 미확정).

**접근성 (a11y)**
- 현재 페이지에 aria-current 를 준다.
- 화살표 버튼에 이전·다음 등 aria-label 을 단다.

### Radio

라디오 버튼 컨트롤. default·hover·selected·disabled 상태.

**언제 쓰나**
- 여러 보기 중 하나만 고를 때(상호배타).

**쓰지 말아야 할 때**
- 여러 개 동시 선택은 Checkbox.
- 단일 on/off 는 Toggle.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 원(circle) | 선택 영역. 테두리는 control 토큰. |
| 점(dot) | selected 인디케이터. |
| 라벨(선택) | 보기 텍스트. |

| variant | default | hover | selected | disabled |
| --- | --- | --- | --- | --- |
| default | --radio-default-bg → color-control-bg-default<br>--radio-default-border → color-control-border-default | --radio-hover-bg → color-control-bg-hover<br>--radio-hover-border → color-control-border-default | --radio-selected-border → color-control-border-selected<br>--radio-selected-dot → color-control-indicator-selected-alt | --radio-disabled-bg → color-control-bg-disabled<br>--radio-disabled-border → color-control-border-disabled<br>--radio-disabled-dot → color-control-indicator-disabled |

#### Agent-readable contract

```yaml
agent:
  component: "Radio"
  variantAxes:
    State:
      - "Default"
      - "Hover"
      - "Selected"
      - "Disabled"
      - "Dis+Selected"
    Label:
      - "Off"
      - "On"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Selected"
      - "Disabled"
      - "Dis+Selected"
    metadata:
      - "default"
      - "hover"
      - "selected"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#radio"
    status: "verified"
    initialState: "unselected"
    events:
      -
        on: "click"
        target: "radio"
        guard: "disabled=false"
        result: "toggle unselected ↔ selected"
      -
        on: "click"
        target: "radio"
        guard: "disabled=true"
        result: "keep the current value"
    keyboard: "not-defined"
    focus: "not-defined"
    accessibility: "not-defined"
  geometry:
    common:
      target: "circle"
      width: 18
      height: 18
      cornerRadius: "9"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when: "all"
  composition:
    mustReuse: "not-defined"
    mustNotCreate: "not-defined"
    declaredParts:
      - "circle"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/control/bg/default"
      - "color/control/bg/disabled"
      - "color/control/bg/hover"
      - "color/control/border/default"
      - "color/control/border/disabled"
      - "color/control/border/selected"
      - "color/control/indicator/disabled"
      - "color/control/indicator/selected-alt"
      - "color/control/label/default"
      - "color/control/label/disabled"
    aliasChains:
      -
        chain: "--radio-default-bg → --color-form-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--radio-disabled-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--radio-default-border → --color-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--radio-hover-border → --color-control-border-hover"
        status: "unresolved"
      -
        chain: "--radio-selected-border → --color-control-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--radio-disabled-border → --color-control-border-disabled → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--radio-selected-dot → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--radio-disabled-dot → --color-border-strong"
        status: "unresolved"
  figma:
    status: "figma-unconfirmed"
    identifiers: "figma-unconfirmed"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 같은 그룹의 라디오는 name 으로 묶어 하나만 선택되게 한다.
- 원/점 색은 control 토큰을 쓴다.

_Don't_
- 독립 on/off 에 라디오를 쓰지 않는다.
- 라벨 없이 aria-label 을 빠뜨리지 않는다.

**접근성 (a11y)**
- role=radiogroup 으로 묶고 선택에 aria-checked 를 준다.
- 키보드 화살표로 그룹 내 이동이 가능하게 한다.

### Select

셀렉트 컴포넌트. 단일 선택 드롭다운. --dropdown-* 토큰 재사용 (trigger + list + option).

**언제 쓰나**
- 단일 값을 목록에서 고르는 폼 필드일 때.
- Dropdown 토큰(--dropdown-*)을 재사용한다.

**쓰지 말아야 할 때**
- 다중 선택은 Checkbox·Chip.
- 즉시 실행 메뉴는 Dropdown/Button.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 트리거 필드 | 현재 값·placeholder. default·hover·open·filled·disabled. |
| 옵션 목록 | Dropdown 목록 재사용(surface-raised). |

| variant | default | hover | open | filled | disabled |
| --- | --- | --- | --- | --- | --- |
| default | --dropdown-trigger-default-bg → color-surface-default<br>--dropdown-trigger-default-border → color-form-control-border-default<br>--dropdown-trigger-default-text → color-text-secondary<br>--dropdown-list-bg → color-surface-raised<br>--dropdown-list-border → color-border-default | --dropdown-trigger-hover-bg → color-bg-subtle<br>--dropdown-trigger-hover-border → color-border-strong<br>--dropdown-list-bg → color-surface-raised<br>--dropdown-list-border → color-border-default<br>--dropdown-option-hover-bg → color-bg-subtle | --dropdown-trigger-open-bg → color-bg-subtle<br>--dropdown-trigger-open-border → color-border-focus<br>--dropdown-list-bg → color-surface-raised<br>--dropdown-list-border → color-border-default | --dropdown-trigger-selected-text → color-text-primary<br>--dropdown-list-bg → color-surface-raised<br>--dropdown-list-border → color-border-default | --dropdown-trigger-disabled-bg → color-bg-subtle<br>--dropdown-trigger-disabled-border → color-border-subtle<br>--dropdown-trigger-disabled-text → color-text-disabled<br>--dropdown-list-bg → color-surface-raised<br>--dropdown-list-border → color-border-default |

#### Agent-readable contract

```yaml
agent:
  component: "Select"
  variantAxes:
    Size:
      - "XXSM"
      - "XSM"
      - "MD"
    State:
      - "Default"
      - "Hover"
      - "Open"
      - "Filled"
      - "Disabled"
    Break:
      - "PC"
      - "Mobile"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Open"
      - "Filled"
      - "Disabled"
    metadata:
      - "default"
      - "hover"
      - "open"
      - "filled"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#select"
    status: "verified"
    initialState: "closed without value"
    events:
      -
        on: "click"
        target: "trigger"
        guard: "disabled=false"
        result: "toggle closed ↔ open"
      -
        on: "click"
        target: "option"
        result: "select one option, update the trigger text, mark filled, and close"
      -
        on: "click"
        target: "outside"
        result: "close"
      -
        on: "disable"
        target: "select"
        result: "close and block trigger clicks"
    selection: "single"
    keyboard: "not-defined"
    focus: "not-defined"
    accessibility: "not-defined"
  geometry:
    common:
      target: "trigger"
      width: 140
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "FIXED"
      primaryAxisAlignItems: "SPACE_BETWEEN"
      counterAxisAlignItems: "CENTER"
      paddingTop: "0"
      paddingRight: "8"
      paddingBottom: "0"
      paddingLeft: "16"
      cornerRadius: "4"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Size: "XXSM"
          Break: "PC"
        height: 28
      -
        when:
          Size: "XSM"
          Break: "PC"
        height: 34
      -
        when:
          Size: "MD"
          Break: "PC"
        height: 44
      -
        when:
          Size: "MD"
          Break: "Mobile"
        height: 48
  composition:
    mustReuse:
      - "Dropdown"
    mustNotCreate: "not-defined"
    declaredParts:
      - "trigger"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/form-control/bg/default"
      - "color/form-control/bg/disabled"
      - "color/form-control/bg/hover"
      - "color/form-control/bg/selected"
      - "color/form-control/border/default"
      - "color/form-control/border/disabled"
      - "color/form-control/border/selected"
      - "color/form-control/text/disabled"
      - "color/form-control/text/placeholder"
      - "color/form-control/text/selected"
    aliasChains:
      -
        chain: "--dropdown-trigger-default-bg → --color-form-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--dropdown-trigger-hover-bg → --color-form-control-bg-hover → --color-gray-0 → #FAFAFA"
        status: "resolved"
      -
        chain: "--dropdown-trigger-open-bg → --color-form-control-bg-hover → --color-gray-0 → #FAFAFA"
        status: "resolved"
      -
        chain: "--dropdown-trigger-disabled-bg → --color-form-control-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--dropdown-trigger-default-border → --color-form-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--dropdown-trigger-hover-border → --color-form-control-border-hover"
        status: "unresolved"
      -
        chain: "--dropdown-trigger-open-border → --color-border-focus"
        status: "unresolved"
      -
        chain: "--dropdown-trigger-disabled-border → --color-form-control-border-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--dropdown-trigger-default-text → --color-text-secondary"
        status: "unresolved"
      -
        chain: "--dropdown-trigger-disabled-text → --color-text-disabled"
        status: "unresolved"
      -
        chain: "--dropdown-trigger-placeholder-text → --color-text-placeholder"
        status: "unresolved"
      -
        chain: "--dropdown-trigger-selected-text → --color-text-primary"
        status: "unresolved"
      -
        chain: "--dropdown-list-bg → --color-surface-default"
        status: "unresolved"
      -
        chain: "--dropdown-list-border → --color-border-default"
        status: "unresolved"
      -
        chain: "--dropdown-option-hover-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--dropdown-option-selected-bg → transparent"
        status: "resolved"
      -
        chain: "--dropdown-option-selected-text → --color-action-primary-default"
        status: "unresolved"
  figma:
    status: "available"
    identifiers:
      figmaComponentName: "pc_dropdown"
      componentKey: "2b522174bf5ff44a437a5d706ee15ff3f1c2b787"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 색·목록은 Dropdown 의 --dropdown-* 토큰을 공유한다(별도 --select-* 없음).
- open 은 트리거 테두리 focus 색으로 표시한다.

_Don't_
- --select-* 전용 토큰을 새로 만들지 않는다.
- 목록 배경에 surface-default 를 쓰지 않는다(raised).

**접근성 (a11y)**
- aria-expanded·role=listbox 패턴을 따른다.
- 선택 값에 aria-selected 를 준다.

### Line Tab

라인탭 컴포넌트. 탭 하단에 인디케이터(밑줄)로 선택 상태를 표시. PC MD / PC SM / PC XSM / Mobile 4가지 variant.

**언제 쓰나**
- 같은 화면에서 콘텐츠 영역을 전환할 때.
- PC MD/SM/XSM, Mobile 크기 중 맥락에 맞게 고른다.

**쓰지 말아야 할 때**
- 페이지 이동은 Navigation.
- 상호배타 폼 선택은 Radio.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 탭 라벨 | unselected·selected 텍스트. |
| 인디케이터(밑줄) | 선택 탭 하단 강조 막대. |

| variant | unselected | selected | hover | pressed |
| --- | --- | --- | --- | --- |
| size | — | --tab-label-selected → color-navigation-label-selected<br>--tab-indicator-selected → color-navigation-indicator-selected | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "Line Tab"
  variantAxes:
    Size:
      - "SM"
      - "MD"
      - "XSM"
    State:
      - "Unselected"
      - "Hover"
      - "Selected"
    Break:
      - "PC"
      - "Mobile"
  states:
    builder:
      - "Unselected"
      - "Hover"
      - "Selected"
    metadata:
      - "unselected"
      - "selected"
      - "hover"
      - "pressed"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#tab"
    status: "verified"
    initialState: "one tab selected"
    events:
      -
        on: "click"
        target: "tab"
        result: "select the clicked tab, unselect siblings, and move the indicator"
    selection: "single"
    keyboard: "native-button-click-only"
    focus: "native-button"
    accessibility:
      selectedTab: "set aria-selected=true and remove aria-selected from siblings"
  geometry:
    common:
      target: "root"
      width: 76
      layoutMode: "VERTICAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "AUTO"
      primaryAxisAlignItems: "SPACE_BETWEEN"
      counterAxisAlignItems: "CENTER"
      itemSpacing: "0"
      paddingTop: "0"
      paddingRight: "0"
      paddingBottom: "0"
      paddingLeft: "0"
      minWidth: "76"
    variants:
      -
        when:
          Size: "SM"
          Break: "PC"
        height: 42
      -
        when:
          Size: "MD"
          Break: "PC"
        height: 44
      -
        when:
          Size: "XSM"
          Break: "PC"
        height: 40
      -
        when:
          Size: "SM"
          Break: "Mobile"
        height: 32
  composition:
    mustReuse: "not-defined"
    mustNotCreate: "not-defined"
    declaredParts:
      - "label"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/navigation/indicator/default"
      - "color/navigation/indicator/hover"
      - "color/navigation/indicator/selected"
      - "color/navigation/label/default"
      - "color/navigation/label/hover"
      - "color/navigation/label/selected"
    aliasChains:
      -
        chain: "--tab-bg → --color-navigation-bg → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--tab-label-default → --color-navigation-label-default → --color-gray-600 → #555555"
        status: "resolved"
      -
        chain: "--tab-label-selected → --color-navigation-label-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--tab-indicator-default → --color-navigation-indicator-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--tab-indicator-selected → --color-navigation-indicator-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
  figma:
    status: "available"
    identifiers:
      figmaNodeId: "540:6032"
    variants:
      size: "variant"
      state: "state"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 선택 탭은 라벨 색 + 하단 인디케이터로 표시한다.
- navigation 역할 토큰(label/indicator selected)을 쓴다.

_Don't_
- 선택 표시를 색만으로 하지 않는다(인디케이터 병행).
- 탭으로 페이지 이동을 대체하지 않는다.

**접근성 (a11y)**
- role=tablist/tab/tabpanel 패턴, 선택에 aria-selected 를 준다.
- 키보드 화살표로 탭을 이동할 수 있게 한다.

### Table

데이터 그리드/테이블 컴포넌트. 헤더(정렬 아이콘·체크박스 포함), 행 hover·selected, 셀 스타일 포함.

**언제 쓰나**
- 행·열의 정형 데이터를 보여줄 때.
- 정렬·선택(체크박스)·행 hover/selected 가 필요할 때.

**쓰지 말아야 할 때**
- 카드형 비정형 목록에는 쓰지 않는다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 헤더 | 열 제목 + 정렬 아이콘 + 전체선택 체크박스. |
| 행(row) | default·hover·selected. |
| 선택 셀 | 코어 s1-checkbox 재사용. |

| variant | default | hover | selected |
| --- | --- | --- | --- |
| header | --table-row-default-bg → color-table-cell-default | --table-row-hover-bg → color-table-cell-hover | --table-row-selected-bg → color-table-cell-selected |
| body | --table-row-default-bg → color-table-cell-default | --table-row-hover-bg → color-table-cell-hover | --table-row-selected-bg → color-table-cell-selected |

#### Agent-readable contract

```yaml
agent:
  component: "Table"
  variantAxes:
    Size:
      - "MD"
      - "SM"
  states:
    builder: "not-defined"
    metadata:
      - "default"
      - "hover"
      - "selected"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#table"
    status: "verified"
    initialState: "zero or more rows selected"
    events:
      -
        on: "click"
        target: "row checkbox"
        result: "toggle that row selection and recompute the header checkbox"
      -
        on: "click"
        target: "header checkbox"
        result: "select all rows when any row is unchecked; otherwise clear all rows"
    selection: "multiple"
    keyboard: "not-defined"
    focus: "not-defined"
    accessibility: "not-defined"
  geometry:
    common:
      target: "root"
      width: 828
    variants:
      -
        when:
          Size: "MD"
        height: 440
      -
        when:
          Size: "SM"
        height: 386
  composition:
    mustReuse:
      - "Pagination"
      - "Table Cell"
      - "checkbox"
    mustNotCreate:
      - "redefine-checkbox-visual-style"
      - "create-table-specific-checkbox-class"
      - "override-checkbox-tokens"
    declaredParts:
      - "edge-bottom"
      - "edge-top"
      - "header"
      - "row-1"
      - "row-2"
      - "row-3"
      - "row-4"
      - "row-5"
      - "row-6"
      - "row-7"
      - "row-8"
      - "table-footer"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/table/border/default"
      - "color/table/border/strong"
      - "color/table/cell/default"
      - "color/table/cell/hover"
      - "color/table/cell/selected"
      - "color/table/header/bg"
    aliasChains:
      -
        chain: "--table-header-bg → --color-table-header-bg → --color-gray-0 → #FAFAFA"
        status: "resolved"
      -
        chain: "--table-header-text → --color-text-secondary"
        status: "unresolved"
      -
        chain: "--table-border-light → --color-table-border-default → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--table-border-strong → --color-table-border-strong → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--table-header-border → --table-border-light → --color-table-border-default → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--table-row-default-bg → --color-surface-default"
        status: "unresolved"
      -
        chain: "--table-row-hover-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--table-row-selected-bg → --color-bg-selected"
        status: "unresolved"
      -
        chain: "--table-cell-border → --table-border-light → --color-table-border-default → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--table-cell-text → --color-text-secondary"
        status: "unresolved"
  figma:
    status: "available"
    identifiers:
      figmaNodeId: "6515:4142"
    variants:
      size: "size"
      position: "position"
      align: "align"
      state: "state"
      icon: "icon"
      checkBox: "check box"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 선택 컬럼은 코어 s1-checkbox 를 재사용한다.
- 정렬 가능한 헤더에는 정렬 방향 아이콘을 두어 정렬 상태를 표시한다.

_Don't_
- Table 전용 체크박스를 새로 만들지 않는다(코어 재사용).
- 행 hover/selected 색을 raw 로 칠하지 않는다(table-cell 토큰).

**접근성 (a11y)**
- 헤더는 th·scope 로 표시한다.
- 정렬 상태는 aria-sort 로 노출한다.

### Textarea

멀티라인 텍스트 입력 컴포넌트. HD-6(2026-05-12)에서 Inputbox_large → Textarea로 분리 확정. --input-* 토큰 공유 결정(2026-05-20).

**언제 쓰나**
- 여러 줄 텍스트를 입력받을 때(메모·설명 등).
- Input 과 시각 동일 — --input-* 토큰을 공유한다.

**쓰지 말아야 할 때**
- 한 줄 입력은 Input.
- 선택형 입력은 Select·Dropdown.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 입력 영역 | 멀티라인 텍스트. --input-* 토큰. |
| helper 텍스트(선택) | 필드 아래 도움말·오류·성공. text/state/caption 기본. |

| variant | default | focus | error | correct | disabled | readonly |
| --- | --- | --- | --- | --- | --- | --- |
| default | --input-default-bg → color-form-control-bg-default<br>--input-default-border → color-form-control-border-default<br>--input-placeholder-text → color-form-control-text-placeholder<br>--input-helper-text → color-text-state-caption | --input-focus-border → color-form-control-border-selected<br>--input-placeholder-text → color-form-control-text-placeholder | --input-error-border → color-form-control-border-error<br>--input-placeholder-text → color-form-control-text-placeholder<br>--input-error-text → color-text-state-error | --input-correct-border → color-form-control-border-correct<br>--input-placeholder-text → color-form-control-text-placeholder<br>--input-correct-text → color-text-state-correct | --input-disabled-bg → color-form-control-bg-disabled<br>--input-disabled-border → color-form-control-border-disabled<br>--input-placeholder-text → color-form-control-text-placeholder<br>--input-disabled-text → color-form-control-text-disabled | --input-readonly-bg → color-form-control-bg-disabled<br>--input-readonly-border → color-form-control-border-disabled<br>--input-placeholder-text → color-form-control-text-placeholder<br>--input-readonly-text → color-text-readonly |

#### Agent-readable contract

```yaml
agent:
  component: "Textarea"
  variantAxes:
    State:
      - "Default"
      - "Focus"
      - "Filled"
      - "Disabled"
      - "Readonly"
  states:
    builder:
      - "Default"
      - "Focus"
      - "Filled"
      - "Disabled"
      - "Readonly"
    metadata:
      - "default"
      - "focus"
      - "error"
      - "correct"
      - "disabled"
      - "readonly"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#textarea"
    status: "verified"
    initialState: "editable and unfocused"
    events:
      -
        on: "focus"
        target: "textarea"
        result: "enter focus state"
      -
        on: "blur"
        target: "textarea"
        result: "leave focus state"
      -
        on: "readonly"
        target: "textarea"
        result: "prevent value editing while preserving readable content"
    keyboard: "native-textarea"
    focus: "native-textarea"
    accessibility:
      readonly: "use the native readonly attribute"
  geometry:
    common:
      target: "root"
      width: 240
      height: 80
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "FIXED"
      counterAxisAlignItems: "MIN"
      paddingTop: "10"
      paddingRight: "12"
      paddingBottom: "10"
      paddingLeft: "12"
      cornerRadius: "4"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when: "all"
  composition:
    mustReuse: "not-defined"
    mustNotCreate: "not-defined"
    declaredParts:
      - "lead"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/form-control/bg/default"
      - "color/form-control/bg/disabled"
      - "color/form-control/bg/selected"
      - "color/form-control/border/default"
      - "color/form-control/border/disabled"
      - "color/form-control/border/selected"
      - "color/form-control/text-cursor"
      - "color/form-control/text/default"
      - "color/form-control/text/disabled"
      - "color/form-control/text/placeholder"
      - "color/form-control/text/read-only"
      - "color/form-control/text/selected"
    aliasChains:
      -
        chain: "--input-default-bg → --color-form-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--input-disabled-bg → --color-form-control-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--input-readonly-bg → --color-form-control-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--input-default-border → --color-form-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--input-focus-border → --color-form-control-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--input-error-border → --color-form-control-border-error → --color-red-300 → #FF4554"
        status: "resolved"
      -
        chain: "--input-correct-border → --color-form-control-border-correct → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--input-disabled-border → --color-form-control-border-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--input-readonly-border → --color-form-control-border-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--input-placeholder-text → --color-form-control-text-placeholder → --color-gray-500 → #757575"
        status: "resolved"
      -
        chain: "--input-disabled-text → --color-form-control-text-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--input-readonly-text → --color-text-readonly"
        status: "unresolved"
      -
        chain: "--input-helper-text → --color-text-state-helper → --color-gray-400 → #9D9D9D"
        status: "resolved"
      -
        chain: "--input-error-text → --color-text-state-error"
        status: "unresolved"
      -
        chain: "--input-correct-text → --color-text-state-correct → --color-blue-400 → #1D6CEB"
        status: "resolved"
  figma:
    status: "available"
    identifiers:
      figmaNodeId: "641:4060"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 색·상태는 Input 의 --input-* 토큰을 공유한다(추가 divergence 없음).
- readonly 는 disabled 와 같은 bg/border, text 만 한 단계 진하게 한다.

_Don't_
- --textarea-* 전용 토큰을 새로 만들지 않는다.
- hover 상태를 만들지 않는다(HD-2, Figma 미정의).

**접근성 (a11y)**
- 라벨과 연결(for/id)하고, 오류 시 aria-invalid·aria-describedby 로 helper 를 연결한다.

### TimePicker

시간 선택 컴포넌트. input 방식(클릭 → 드롭다운 패널)과 select 방식(시/분 분리 셀렉트) 2가지 variant.

**언제 쓰나**
- 시간(시/분)을 고를 때. input 방식(클릭→드롭다운) 또는 select 방식(시·분 분리).

**쓰지 말아야 할 때**
- 날짜는 DatePicker.
- 자유 텍스트만 필요하면 Input.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 트리거/필드 | 시간 표시 + ic_시계 아이콘. |
| 시/분 라벨 | select 방식 시/분 라벨. form-control-label 토큰. |
| 드롭다운 패널 | 시간 선택 목록. |

| variant | default | focus | filled | disabled |
| --- | --- | --- | --- | --- |
| input | --color-form-control-bg-default → color-surface-default<br>--color-form-control-border-default → color-control-border-default<br>--color-form-control-text-default → color-text-secondary<br>--color-form-control-label-default → color-text-secondary | — | — | --color-form-control-bg-disabled → color-bg-subtle<br>--color-form-control-border-disabled → color-border-subtle<br>--color-form-control-text-disabled → color-text-disabled<br>--color-form-control-label-disabled → color-text-disabled |
| select | --color-form-control-bg-default → color-surface-default<br>--color-form-control-border-default → color-control-border-default<br>--color-form-control-text-default → color-text-secondary<br>--color-form-control-label-default → color-text-secondary | — | — | --color-form-control-bg-disabled → color-bg-subtle<br>--color-form-control-border-disabled → color-border-subtle<br>--color-form-control-text-disabled → color-text-disabled<br>--color-form-control-label-disabled → color-text-disabled |
| dropdown_panel | --color-form-control-bg-default → color-surface-default<br>--color-form-control-border-default → color-control-border-default<br>--color-form-control-text-default → color-text-secondary<br>--color-form-control-label-default → color-text-secondary | — | — | --color-form-control-bg-disabled → color-bg-subtle<br>--color-form-control-border-disabled → color-border-subtle<br>--color-form-control-text-disabled → color-text-disabled<br>--color-form-control-label-disabled → color-text-disabled |

#### Agent-readable contract

```yaml
agent:
  component: "TimePicker"
  variantAxes:
    Size:
      - "XXSM"
      - "XSM"
      - "MD"
    State:
      - "Default"
      - "Hover"
      - "Focus"
      - "Filled"
      - "Disabled"
    Break:
      - "PC"
      - "Mobile"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Focus"
      - "Filled"
      - "Disabled"
    metadata:
      - "default"
      - "focus"
      - "filled"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#time-picker"
    status: "verified"
    initialState: "closed without a committed time"
    events:
      -
        on: "click"
        target: "input trigger"
        result: "toggle the hour/minute panel"
      -
        on: "click"
        target: "hour or minute"
        result: "select one value in that column; show HH:MM after both values exist"
      -
        on: "click"
        target: "confirm"
        result: "close the panel"
      -
        on: "click"
        target: "outside"
        result: "close the panel"
      -
        on: "click"
        target: "select-style hour or minute field"
        result: "open only that field list; selecting a value updates it and closes"
    selection: "one hour and one minute"
    keyboard: "not-defined"
    focus: "selected values scroll into view when a panel opens"
    accessibility: "not-defined"
  geometry:
    common:
      target: "trigger"
      width: 150
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "FIXED"
      primaryAxisAlignItems: "SPACE_BETWEEN"
      counterAxisAlignItems: "CENTER"
      itemSpacing: "8"
      paddingTop: "0"
      paddingBottom: "0"
      cornerRadius: "4"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Size: "XXSM"
          Break: "PC"
        height: 28
        paddingRight: "6"
        paddingLeft: "10"
      -
        when:
          Size: "XSM"
          Break: "PC"
        height: 34
        paddingRight: "8"
        paddingLeft: "12"
      -
        when:
          Size: "MD"
          Break: "PC"
        height: 44
        paddingRight: "8"
        paddingLeft: "16"
      -
        when:
          Size: "MD"
          Break: "Mobile"
        height: 48
        paddingRight: "8"
        paddingLeft: "16"
  composition:
    mustReuse:
      - "Time Picker Dropdown"
    mustNotCreate: "not-defined"
    declaredParts:
      - "trigger"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/form-control/bg/default"
      - "color/form-control/bg/disabled"
      - "color/form-control/bg/hover"
      - "color/form-control/border/default"
      - "color/form-control/border/disabled"
      - "color/form-control/border/selected"
      - "color/form-control/text/default"
      - "color/form-control/text/disabled"
      - "color/form-control/text/placeholder"
    aliasChains:
      -
        chain: "--color-form-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-form-control-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-form-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-form-control-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-form-control-border-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--color-form-control-text-placeholder → --color-gray-500 → #757575"
        status: "resolved"
      -
        chain: "--color-form-control-text-default → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-form-control-text-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--color-form-control-label-default → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-form-control-label-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
  figma:
    status: "available"
    identifiers:
      figmaNodeId: "958:26994"
    variants:
      platform: "platform"
      state: "state"
      type: "type"
      size: "size"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 색은 --color-form-control-* semantic 을 100% 재사용한다(전용 색 토큰 없음).
- 아이콘은 ic_시계로 통일하고 disabled 는 색으로 구분한다.

_Don't_
- 전용 색상 토큰을 새로 만들지 않는다.
- 드롭다운 패널에 전용 shadow 토큰을 가정하지 않는다(dropdown semantic 재사용).

**접근성 (a11y)**
- 시/분 입력에 라벨을 연결한다.
- 드롭다운은 aria-expanded/listbox 패턴을 따른다.

### Toggle

토글 스위치 컨트롤. on·off·disabled 상태.

**언제 쓰나**
- 단일 설정을 즉시 켜고 끌 때(즉시 반영).

**쓰지 말아야 할 때**
- 여러 항목 다중 선택은 Checkbox.
- 상호배타 다중 보기는 Radio.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 트랙 | on/off 배경. control 토큰. |
| 노브(knob) | 좌우로 이동하는 인디케이터. |

| variant | on | off | disabled |
| --- | --- | --- | --- |
| default | --toggle-on-bg → color-control-bg-selected<br>--toggle-knob → color-control-indicator-selected | --toggle-off-bg → color-control-indicator-unselected<br>--toggle-knob → color-control-indicator-selected | --toggle-disabled-bg → color-control-bg-disabled<br>--toggle-knob → color-control-indicator-selected |

#### Agent-readable contract

```yaml
agent:
  component: "Toggle"
  variantAxes:
    Pressed:
      - "Off"
      - "On"
    State:
      - "Default"
      - "Disabled"
  states:
    builder:
      - "Default"
      - "Disabled"
    metadata:
      - "on"
      - "off"
      - "disabled"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#toggle"
    status: "verified"
    initialState: "off"
    events:
      -
        on: "click"
        target: "toggle"
        guard: "disabled=false"
        result: "toggle off ↔ on"
      -
        on: "click"
        target: "toggle"
        guard: "disabled=true"
        result: "keep the current value"
    keyboard: "not-defined"
    focus: "not-defined"
    accessibility: "not-defined"
  geometry:
    common:
      target: "root"
      width: 40
      height: 20
      cornerRadius: "10"
    variants:
      -
        when: "all"
  composition:
    mustReuse: "not-defined"
    mustNotCreate: "not-defined"
    declaredParts: "not-defined"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/control/bg/disabled"
      - "color/control/bg/selected"
      - "color/control/indicator/disabled"
      - "color/control/indicator/selected"
      - "color/control/indicator/unselected"
    aliasChains:
      -
        chain: "--toggle-on-bg → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--toggle-off-bg → --color-text-placeholder"
        status: "unresolved"
      -
        chain: "--toggle-disabled-bg → --color-bg-muted"
        status: "unresolved"
      -
        chain: "--toggle-knob → --color-action-primary-text"
        status: "unresolved"
  figma:
    status: "figma-unconfirmed"
    identifiers: "figma-unconfirmed"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 즉시 반영되는 설정에 쓴다(확인 없이 상태 전환).
- off 배경은 미선택 인디케이터 색(--color-control-indicator-unselected)을 따른다.

_Don't_
- 제출이 필요한 폼 선택에 토글을 쓰지 않는다.
- 노브/트랙 색을 raw 로 칠하지 않는다.

**접근성 (a11y)**
- role=switch·aria-checked 로 상태를 노출한다.
- 라벨을 연결하거나 aria-label 을 준다.

## 5. Layout Principles

레이아웃은 정의된 스페이싱 토큰과 플랫폼별 컨테이너·컬럼 그리드 위에서 구성한다. 임의 px 여백을 만들지 않는다.

**그리드 (Grid)**
- 플랫폼별 컨테이너·컬럼: web 1200px / 12컬럼 · app 1024px / 8컬럼 · mobile 375px / 4컬럼(소비 프로파일 참조).
- 페이지는 사이드바(LNB) + 메인 콘텐츠 셸 구조를 기본으로 한다. 페이지 폭은 넓게(wide) 또는 가독 폭(readable) 정책을 따른다.

**간격 (Spacing)**
- 간격은 Foundation 스페이싱(2~128)과 역할 기반 Semantic 스페이싱(padding-block·section·stack·cluster·label-gap)을 쓴다.
- 관리자(compact)와 일반 사용자(comfortable) 밀도에 따라 간격을 조정한다.

## 6. Depth & Elevation

깊이(엘리베이션)는 현재 그림자 스케일이 아니라 표면 위계 + 레이어(z-index)로 표현한다.

- 표면 위계: color-bg(최하위 배경) → color-surface-default(카드·패널·인풋) → color-surface-raised(모달·드롭다운·플로팅). 다크 모드에서 이 세 층이 명도로 분리돼 깊이를 만든다.
- 레이어(z-index) 기준: 기본 콘텐츠 < 고정 헤더·LNB < 드롭다운·팝오버 < 모달·오버레이(color-overlay 딤 동반).

> 그림자(shadow) 토큰(--shadow-*)은 아직 시스템에 정의돼 있지 않다(준비 중). 현재 화면·컴포넌트의 box-shadow 는 개별 raw 값이며, 향후 Foundation 그림자 토큰으로 승격 예정이다(백로그).

## 7. Do's & Don'ts

**Do**
- 색은 반드시 역할 기반 Semantic 토큰으로 참조한다. Light/Dark 는 Semantic 레이어에서 전환된다.
- 이미 있는 코어 컴포넌트(Button·Input·Checkbox 등)를 먼저 찾아 재사용한다. 모듈은 배치·조합만 담당한다.
- 명도 대비 WCAG AA 를 지킨다. 상태(성공·오류·경고·정보) 색은 정책에 맞춰 일관되게 쓴다.
- 새 값이 필요하면 토큰부터 신설하고, 원본(Figma) 값을 그대로 보존한다(반올림·변환 금지).

**Don't**
- HEX 직접 사용 금지(예외: color-overlay 의 rgba 알파). Foundation 팔레트 직접 참조 남용 금지 — 색은 Semantic 경유.
- 코어 컴포넌트의 시각·상태 스타일을 모듈에서 재정의(override)하지 않는다.
- CI·로고 전용 브랜드색을 UI 요소 색으로 쓰지 않는다.
- 폐지된 것(Danger·ghost 버튼 variant 등)을 재도입하지 않는다. Legacy 를 신규 기준처럼 쓰지 않는다.
- 다크모드 고려 없이 토큰을 확정하지 않는다.

## 8. Responsive Behavior

반응형은 정의된 브레이크포인트 토큰과 플랫폼 프로파일(web·app·mobile)로 다룬다. 구체적 브레이크포인트 값은 아래 표(토큰)를 참조한다.

**Breakpoints**

| 토큰 | 값 |
| --- | --- |
| `--breakpoint-xs` | 320px |
| `--breakpoint-sm` | 600px |
| `--breakpoint-md` | 768px |
| `--breakpoint-lg` | 1024px |
| `--breakpoint-xl` | 1280px |
| `--breakpoint-2xl` | 1440px |

- 플랫폼별 컨테이너·컬럼: web 1200px/12 · app 1024px/8 · mobile 375px/4.
- 컴포넌트는 플랫폼에 따라 크기·패딩·아이콘 슬롯이 달라질 수 있다(예: Input 은 PC 패딩 8px·토큰 radius / Mobile 패딩 12px·raw 4px, 모바일에서 지우기 버튼 노출). 각 컴포넌트의 플랫폼 차이는 해당 컴포넌트 항목을 참조한다.

## 9. Agent Prompt Guide

이 문서는 AI 에이전트가 S1 디자인시스템 기준으로 UI·토큰 산출물을 만들 때 통째로 읽는 단일 컨텍스트다.

**UI 구현 우선순위**
1. Reuse existing component.
2. Use existing component variant.
3. Use component token when its alias is currently resolved.
4. Use semantic token.
5. Use foundation token only when explicitly allowed.
6. Never invent raw values.

**DO NOT invent**
- `colors`
- `spacing`
- `radius`
- `typography`
- `component variants`
- `component states`
- `icons`
- `breakpoints`
- `shadows`

**정의가 없을 때의 응답 형식**

```text
DESIGN_SYSTEM_GAP:
<missing definition>
```

**프롬프트 팁**
- 색·간격·크기·굵기·반경은 정의된 토큰만 쓴다. 값이 없으면 만들지 말고 없음으로 보고한다(추측 금지).
- 컴포넌트를 새로 만들기 전에 §4 Components 에서 기존 코어를 먼저 찾는다.
- Light 기준으로 만들고 Dark 값을 함께 확인한다.
- 컴포넌트별 Agent-readable contract에 실제로 나열된 상태만 다룬다. 전역 상태 목록을 모든 컴포넌트에 일괄 적용하지 않는다.

**해석 순서 (Resolution)**
- 적용 해석 순서(뒤가 앞을 덮음): core → service(extends core) → role → platform → theme. 기본값: service=core · role=user · platform=web · theme=light.
- 서비스 분기(예: vms 영상관제)는 core 를 상속하고 차이분만 덮는다.

<!-- generated-stamp: fb73aa7c21ab · 손편집 금지 -->
