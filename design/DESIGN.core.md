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
      - "eye_show"
      - "globe"
      - "home"
      - "menu"
      - "mobileHeaderArrowDown"
      - "mobileHeaderBack"
      - "mobileHeaderClose"
      - "mobileHeaderNotification"
      - "navNotification"
      - "navSearch"
      - "navSettings"
      - "remove"
      - "search"
  unknownMarkers:
    - "unknown"
    - "not-defined"
    - "figma-unconfirmed"
  missingDefinitionResponse: "DESIGN_SYSTEM_GAP: <missing definition>"
```

### Assist Button

한 크기(h32)만 있는 보조 버튼. 코어 Button 과 별도 컴포넌트다 — 크기 축이 하나뿐이라 Button 의 4크기 체계에 끼워 넣으면 있지도 않은 크기가 만들어진다(river 지시 2026-09-08).

**언제 쓰나**
- 본문 옆이나 목록 행 안처럼 좁은 자리에서, 눈에 덜 띄는 보조 동작 하나를 둘 때.
- 코어 Button 의 4크기(MD·XSM·XXSM·LG) 어디에도 맞지 않는, 원본에 정의된 고정 32px 자리.

**쓰지 말아야 할 때**
- 화면의 주 액션(저장·확인 등)에는 코어 Button 을 쓴다.
- 배경·테두리가 없는 링크형 액션은 Text Button 을 쓴다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 라벨 | 버튼 텍스트. body/14M. |
| 컨테이너 | 배경·테두리·반경. Secondary 배경/테두리 토큰을 빌려 쓰고 글자·hover 테두리만 전용 토큰. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | — | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "Assist Button"
  variantAxes:
    State:
      - "Default"
      - "Hover"
      - "Pressed"
      - "Disabled"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Pressed"
      - "Disabled"
    metadata: "unknown"
  behavior:
    platform: "PC"
    status: "not-defined"
  geometry:
    common:
      target: "root"
      width: 60
      height: 32
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "FIXED"
      primaryAxisAlignItems: "CENTER"
      counterAxisAlignItems: "CENTER"
      paddingTop: "0"
      paddingRight: "spacing/12"
      paddingBottom: "0"
      paddingLeft: "spacing/12"
      minWidth: "60"
      topLeftRadius: "radius/4"
      topRightRadius: "radius/4"
      bottomLeftRadius: "radius/4"
      bottomRightRadius: "radius/4"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
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
      - "color/button/bg/disabled"
      - "color/button/bg/secondary--default"
      - "color/button/bg/secondary--hover"
      - "color/button/border/assist--hover"
      - "color/button/border/disabled"
      - "color/button/border/secondary--default"
      - "color/button/label/assist--default"
      - "color/button/label/assist--hover"
      - "color/button/label/disabled"
      - "radius/4"
      - "spacing/12"
    aliasChains: "not-defined"
  figma:
    status: "available"
    identifiers:
      componentSetKey: "(미발행)"
      fileKey: "cysG5U1udpQqVagYY1hWHW"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 크기는 h32 하나만 쓴다 — 임의로 다른 높이를 만들지 않는다.
- 색은 Semantic 경유 토큰으로만 참조한다.

_Don't_
- 코어 Button 의 variant 로 편입하지 않는다(river 결정 2026-09-08 — 버튼 목록에 섞여 표출되면 안 된다).
- 아이콘 부착형(레거시 icon_lead·icon_trail)을 임의로 추가하지 않는다 — 이번 범위 밖.

**접근성 (a11y)**
- 네이티브 <button type="button"> 를 쓴다.
- 상태는 :hover·:active·[disabled] 로 표현하고 별도 data 상태를 만들지 않는다.
- 포커스 표시는 브라우저 기본값을 그대로 쓴다(정본에 별도 focus 표현이 없다).

### Bottom Sheet

모바일에서 화면 아래에서 올라오는 시트 그릇 3종(Footer None|Single|Dual). 딤 위에 제목·닫기(X)·본문 자리·푸터 버튼으로 뜬다. 본문은 슬롯이라 화면마다 갈아끼운다 — 기본 채움은 Bottom Sheet Option 줄이고, 날짜·시간 선택은 달력·휠을 넣어 쓴다. 모바일에서 드롭다운을 대신하는 자리다.

**언제 쓰나**
- 모바일에서 목록을 띄워 고르게 할 때 — 드롭다운 대신 쓴다(density-policy mobileSubstitutes.dropdown).
- 모바일에서 날짜·시간처럼 넓은 선택 UI 를 띄울 때.
- Footer=None 은 고르는 즉시 적용되는 목록, Single 은 '적용' 하나, Dual 은 '취소+적용'.

**쓰지 말아야 할 때**
- PC 화면 — PC 는 드롭다운·팝오버·모달을 쓴다. 정본 시트는 모바일 폭(360) 기준이다.
- 확인·알림처럼 짧은 결정 — Modal 을 쓴다.
- 비차단 알림 — 토스트·인라인 메시지.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 딤(backdrop) | 뒤 배경을 덮는 color-overlay 딤. 누르면 닫힌다. |
| 패널 | 아래에 붙어 위 모서리만 둥근 시트면. 폭은 화면 폭(최대 360). |
| 헤더 | 제목 ↔ 닫기(X). 좌우 여백 20. |
| 본문(슬롯) | 화면이 채우는 자리. 컴포넌트는 빈 그릇만 소유한다. |
| 푸터(선택) | 코어 Button 1개(Single) 또는 2개(Dual). Footer=None 이면 없다. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | — | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "Bottom Sheet"
  variantAxes:
    Footer:
      - "None"
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
      itemSpacing: "48"
      paddingTop: "20"
      paddingRight: "0"
      paddingLeft: "0"
      topLeftRadius: "8"
      topRightRadius: "8"
      bottomLeftRadius: "0"
      bottomRightRadius: "0"
    variants:
      -
        when:
          Footer: "None"
        paddingBottom: "40"
      -
        when:
          Footer:
            - "Single"
            - "Dual"
        paddingBottom: "20"
  composition:
    mustReuse:
      - "Bottom Sheet Option"
      - "Button"
      - "button"
      - "bottom-sheet-option"
    mustNotCreate: "not-defined"
    declaredParts:
      - "content"
      - "footer"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "border-width/1"
      - "color/button/bg/primary--default"
      - "color/button/bg/secondary--default"
      - "color/button/border/primary--default"
      - "color/button/border/secondary--default"
      - "color/button/label/primary--default"
      - "color/button/label/secondary--default"
      - "color/surface/raised"
      - "color/text/body/primary"
      - "color/text/state/accent"
      - "color/text/title/primary"
      - "radius/4"
      - "spacing/16"
    aliasChains: "not-defined"
  figma:
    status: "available"
    identifiers:
      componentSetKey: "(미발행 — 라이브러리 publish 시 기록)"
      fileKey: "cysG5U1udpQqVagYY1hWHW"
    variants:
      footer:
        - "none"
        - "single"
        - "dual"
  icons:
    allowed:
      - "ic_닫기 (V2.2 아이콘 라이브러리)"
    slots: "unknown"
```

_Do_
- 제목은 항상 둔다. 닫기(X)도 항상 둔다(정본 3변형 전부 헤더에 있다).
- 푸터 버튼은 코어 Button 배포본(Mobile LG)을 그대로 조립한다.
- 시트는 화면(body) 바로 아래에 둔다 — 상자 안에 넣으면 갇힌다.
- 본문에 넣는 줄은 Bottom Sheet Option 을 쓴다. 새로 그리지 않는다.

_Don't_
- 시트 문구(실제 카피)를 컴포넌트 정본으로 넣지 않는다 — 예시일 뿐(UX라이팅 영역).
- PC 용 크기를 만들지 않는다 — 정본에 없다.
- 정본에 없는 층(부제·손잡이 바 등)을 임의로 만들지 않는다.

**접근성 (a11y)**
- 패널을 role=dialog · aria-modal=true 로 표시하고 aria-labelledby 로 제목을 연결한다.
- 열릴 때 패널 안 첫 초점 요소로 초점을 옮기고, 닫힐 때 열기 전 초점 자리로 되돌린다.
- 열려 있는 동안 Tab·Shift+Tab 은 패널 안에서만 순환한다(초점 가둠).
- Esc 로 닫을 수 있게 한다. 닫기(X) 버튼에 '닫기' 이름을 준다.
- 딤을 눌러도 닫힌다 — 닫기 수단이 키보드(Esc)·버튼·포인터 세 갈래로 모두 있다.
- 열려 있는 동안 배경 스크롤을 잠근다. 시트·모달이 여럿이면 마지막 하나가 닫힐 때 되돌린다.

### Bottom Sheet Option

바텀시트 안에 놓이는 한 줄. Type 4종(Text·Checkbox·Radio·List) × State(Default·Selected·Disabled) 중 정본에 실재하는 9칸. Text·Checkbox·Radio 는 높이 48 고정, List 는 아바타+두 줄 글자라 내용만큼 늘어난다. 단독으로 쓰지 않고 Bottom Sheet 본문 안에서 쓴다.

**언제 쓰나**
- 바텀시트 본문에 고를 것을 줄로 늘어놓을 때.
- Text = 한 값 고르기(고른 줄에 파란 체크), Checkbox = 여러 값 고르기, Radio = 한 값 고르기(동그라미 표시), List = 사람·항목처럼 아바타와 설명이 함께 있는 줄.

**쓰지 말아야 할 때**
- 바텀시트 밖 — PC 목록은 Dropdown 을 쓴다.
- 표의 행 — Table 을 쓴다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 라벨 | 줄의 글자. Text·Checkbox·Radio 공통. |
| 체크 표시(선택) | Text 가 선택됐을 때 오른쪽에 붙는 파란 체크 아이콘. |
| 컨트롤(선택) | Checkbox·Radio 코어 배포본 인스턴스. 복제하지 않는다. |
| list-left(선택) | List 줄의 왼쪽 묶음 — 아바타 40 + 제목/서브 두 줄. |
| 오른쪽 아이콘(선택) | List 는 기본이 화살표(chevron), 비활성이면 자물쇠(lock). |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | — | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "Bottom Sheet Option"
  variantAxes:
    Type:
      - "Text"
      - "Checkbox"
      - "Radio"
      - "List"
    State:
      - "Default"
      - "Selected"
      - "Disabled"
  states:
    builder:
      - "Default"
      - "Selected"
      - "Disabled"
    metadata: "unknown"
  behavior:
    platform: "PC"
    status: "not-defined"
  geometry:
    common:
      target: "root"
      width: 360
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisAlignItems: "CENTER"
      paddingRight: "20"
      paddingLeft: "20"
    variants:
      -
        when:
          Type:
            - "Text"
            - "Checkbox"
            - "Radio"
        height: 48
        counterAxisSizingMode: "FIXED"
        primaryAxisAlignItems: "MIN"
        itemSpacing: "8"
        paddingTop: "8"
        paddingBottom: "8"
      -
        when:
          Type: "Text"
          State: "Selected"
        height: 48
        counterAxisSizingMode: "FIXED"
        primaryAxisAlignItems: "SPACE_BETWEEN"
        itemSpacing: "8"
        paddingTop: "8"
        paddingBottom: "8"
      -
        when:
          Type: "List"
          State:
            - "Default"
            - "Disabled"
        counterAxisSizingMode: "AUTO"
        primaryAxisAlignItems: "SPACE_BETWEEN"
        paddingTop: "12"
        paddingBottom: "12"
  composition:
    mustReuse:
      - "Checkbox"
      - "Radio"
      - "checkbox"
      - "radio"
    mustNotCreate: "not-defined"
    declaredParts:
      - "check"
      - "checkbox"
      - "chevron"
      - "list-left"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/control/bg/default"
      - "color/control/bg/selected"
      - "color/control/border/default"
      - "color/control/border/selected"
      - "color/icon/gray-light"
      - "color/surface/raised"
      - "color/text/body/primary"
      - "color/text/body/secondary"
      - "color/text/state/accent"
      - "color/text/state/disabled"
    aliasChains: "not-defined"
  figma:
    status: "available"
    identifiers:
      componentSetKey: "(미발행 — 라이브러리 publish 시 기록)"
      fileKey: "cysG5U1udpQqVagYY1hWHW"
    variants:
      type:
        - "text"
        - "checkbox"
        - "radio"
        - "list"
      state:
        - "default"
        - "selected"
        - "disabled"
  icons:
    allowed:
      - "ic_확인 (V2.2)"
      - "ic_화살표더보기 (V2.2)"
      - "ic_계정/사용자/ID (V2.2)"
      - "ic_잠김 (V2.2)"
    slots: "unknown"
```

_Do_
- Checkbox·Radio 는 코어 배포본을 그대로 넣는다.
- 줄의 의미(고르기·이동)는 시트를 여는 화면이 ARIA 로 준다.
- 정본에 있는 9칸만 쓴다.

_Don't_
- 선택된 줄에 배경색을 칠하지 않는다 — 정본은 글자색과 아이콘으로만 구분한다.
- 정본에 없는 칸(Checkbox·Radio 의 비활성, List 의 선택됨)을 만들지 않는다.
- Checkbox·Radio 코어 내부를 override 하지 않는다.

**접근성 (a11y)**
- 줄 자체는 모양만 소유한다 — 역할(role)·이름·선택 상태는 시트를 여는 화면이 준다.
- Checkbox·Radio 는 native input 을 그대로 쓴다(코어 배포본의 계약).
- Text 의 선택 표시(파란 체크)는 장식이다 — 선택 상태는 aria-selected·aria-checked 로 따로 알린다.
- 비활성 줄은 disabled 또는 aria-disabled 로 알리고 초점 순서에서 뺀다.
- List 의 아바타 아이콘은 장식이다 — 이름은 제목 글자가 갖는다.

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
| 컨테이너 | 배경·테두리·반경. variant×state 토큰. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| primary | --color-button-bg-primary--default<br>--color-button-label-primary--default | --color-button-bg-primary--hover | — | --color-button-bg-disabled<br>--color-button-border-disabled<br>--color-button-label-disabled |
| secondary | --color-button-bg-secondary--default<br>--color-button-border-secondary--default<br>--color-button-label-secondary--default | --color-button-bg-secondary--hover | — | --color-button-bg-disabled<br>--color-button-border-disabled<br>--color-button-label-disabled |
| blue-line | --color-button-bg-blue-line--default<br>--color-button-border-blue-line--default<br>--color-button-label-blue-line--default | --color-button-bg-blue-line--hover<br>--color-button-border-blue-line--hover | — | --color-button-bg-disabled<br>--color-button-border-disabled<br>--color-button-label-disabled |

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
        width: 80
        height: 44
        paddingRight: "spacing/16"
        paddingLeft: "spacing/16"
        minWidth: "80"
      -
        when:
          Size: "XSM"
          Break: "PC"
        width: 64
        height: 34
        paddingRight: "spacing/8"
        paddingLeft: "spacing/8"
        minWidth: "64"
      -
        when:
          Size: "XXSM"
          Break: "PC"
        width: 56
        height: 28
        paddingRight: "spacing/8"
        paddingLeft: "spacing/8"
        minWidth: "56"
      -
        when:
          Size: "LG"
          Break: "Mobile"
        width: 80
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
        chain: "--color-button-bg-primary--default → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-button-bg-primary--hover → --color-blue-500 → #2747B9"
        status: "resolved"
      -
        chain: "--color-button-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-button-border-disabled → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-button-label-primary--default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-button-label-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--color-button-bg-secondary--default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-button-bg-secondary--hover → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-button-border-secondary--default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-button-label-secondary--default → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-button-bg-blue-line--default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-button-bg-blue-line--hover → --color-blue-50 → #E2F1FF"
        status: "resolved"
      -
        chain: "--color-button-border-blue-line--default → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-button-border-blue-line--hover → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-button-label-blue-line--default → --color-blue-400 → #1D6CEB"
        status: "resolved"
  figma:
    status: "available"
    identifiers:
      componentName: "Button"
      figmaNodeId: "6440:4032"
    variants:
      variant: "Variant"
      size: "Size"
      state: "State"
      break: "Break"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- variant 는 primary·secondary·blue-line 만 쓴다.
- 크기는 PC md(44)/xsm(34)/xxsm(28), Mobile lg(48) 중에서 고른다.
- 색은 배포본이 쓰는 역할 토큰(--color-button-*)으로만 참조한다.

_Don't_
- Danger·ghost variant 를 재도입하지 않는다(폐지 확정).
- 한 화면에 primary 를 여러 개 두어 강조를 분산시키지 않는다.
- raw HEX·Foundation 직접 참조 금지.

**접근성 (a11y)**
- 아이콘만 있는 버튼은 aria-label 로 용도를 준다.
- disabled 는 실제 비활성 처리하고 클릭을 막는다.

### Checkbox

체크박스 컨트롤. 정본 상태는 default·hover·checked·disabled·disabled+checked 다섯이며 부분선택(indeterminate)은 아직 정본에 없다.

**언제 쓰나**
- 여러 항목을 독립적으로 켜고 끌 때(다중 선택).
- 약관 동의처럼 항목마다 따로 켜고 끌 때.

**쓰지 말아야 할 때**
- 여러 보기 중 하나만 고를 때는 Radio.
- 단일 on/off 설정은 Toggle.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 박스 | 체크 영역. 배경·테두리는 control 토큰. |
| 체크 표시 | checked 인디케이터 아이콘(정본 ic_확인 16px). 색은 control indicator 토큰. |
| 라벨(선택) | 선택 부품. 없는 것이 기본이고, 붙이면 라벨 클릭도 선택 영역이 된다(본문 14 Medium, 간격 8). |

| variant | default | hover | checked | disabled |
| --- | --- | --- | --- | --- |
| default | --color-control-bg-default<br>--color-control-border-default | --color-control-bg-hover<br>--color-control-border-default | --color-control-bg-selected<br>--color-control-border-selected<br>--color-control-indicator-selected | --color-control-bg-disabled<br>--color-control-border-disabled<br>--color-control-indicator-disabled |

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
        chain: "--color-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-control-bg-hover → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-control-bg-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-control-bg-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--color-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-control-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-control-border-disabled → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-control-indicator-selected → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-control-indicator-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
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
- 라벨을 붙일 때는 label[for] 로 control 과 연결해 라벨 클릭도 선택되게 한다.
- 박스는 코어 체크박스를 재사용한다(모듈 전용 체크박스 금지).

_Don't_
- Table·Filter 등 모듈에서 체크박스를 새로 만들지 않는다.
- 라벨 없이 쓸 때 aria-label 을 빠뜨리지 않는다.

**접근성 (a11y)**
- native input[type=checkbox] 를 사용해 역할·선택 상태·Space 키 동작을 브라우저가 제공하게 한다.
- 라벨이 없으면 aria-label 필수.
- 비활성은 disabled 속성으로 표현하고 시각 처리만으로 대체하지 않는다.
- 키보드 초점은 선택 테두리 토큰의 2px 외곽선으로 보이게 한다.

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
| line | --color-chip-line-bg-default<br>--color-chip-line-border-default<br>--color-chip-line-label-default<br>--color-chip-line-icon-default | --color-chip-line-bg-hover<br>--color-chip-line-border-default<br>--color-chip-line-label-default | --color-chip-line-bg-selected<br>--color-chip-line-border-selected<br>--color-chip-line-label-selected | — | --color-chip-line-bg-disabled<br>--color-chip-line-border-disabled<br>--color-chip-line-label-disabled<br>--color-chip-line-icon-disabled |
| solid | --color-chip-solid-bg-default<br>--color-chip-solid-border-default<br>--color-chip-solid-label-default<br>--color-chip-solid-icon-default | --color-chip-solid-bg-hover<br>--color-chip-solid-label-default | --color-chip-solid-bg-selected<br>--color-chip-solid-border-selected<br>--color-chip-solid-label-selected<br>--color-chip-solid-icon-selected | — | --color-chip-solid-bg-disabled<br>--color-chip-solid-border-disabled<br>--color-chip-solid-label-disabled<br>--color-chip-solid-icon-disabled |
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
      topLeftRadius: "radius/full"
      topRightRadius: "radius/full"
      bottomLeftRadius: "radius/full"
      bottomRightRadius: "radius/full"
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
      - "radius/full"
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
        chain: "--color-chip-line-icon-default → --color-gray-500 → #757575"
        status: "resolved"
      -
        chain: "--color-chip-line-icon-disabled → --color-gray-300 → #C4C4C4"
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
      -
        chain: "--color-chip-solid-icon-default → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-chip-solid-icon-selected → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-chip-solid-icon-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
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
| default | --color-form-control-bg-default<br>--color-form-control-border-default<br>--color-date-picker-icon-default → color-icon-default | --color-date-picker-cell-bg-hover → color-bg-subtle | — | --color-form-control-bg-disabled<br>--color-form-control-border-disabled<br>--color-form-control-text-disabled<br>--color-date-picker-text-disabled → color-text-disabled |

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
      - "calendar"
      - "trigger"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/date-picker/cell/bg/selected"
      - "color/date-picker/cell/bg/today"
      - "color/date-picker/cell/border/today"
      - "color/date-picker/panel/bg"
      - "color/date-picker/panel/border"
      - "color/date-picker/text/disabled"
      - "color/date-picker/text/primary"
      - "color/date-picker/text/saturday"
      - "color/date-picker/text/secondary"
      - "color/date-picker/text/selected"
      - "color/date-picker/text/sunday"
      - "color/date-picker/text/today"
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
      - "radius/full"
    aliasChains:
      -
        chain: "--color-form-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-form-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-form-control-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-form-control-bg-disabled → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-form-control-border-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--color-form-control-border-error → --color-red-300 → #FF4554"
        status: "resolved"
      -
        chain: "--color-form-control-text-placeholder → --color-gray-500 → #757575"
        status: "resolved"
      -
        chain: "--color-form-control-text-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--color-date-picker-panel-bg → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-date-picker-text-secondary → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-date-picker-text-other-month → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--color-date-picker-cell-bg-hover → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-date-picker-cell-bg-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-date-picker-text-selected → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-date-picker-cell-border-today → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-date-picker-text-today → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-date-picker-cell-bg-today → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-date-picker-text-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--color-date-picker-text-primary → --color-gray-900 → #202020"
        status: "resolved"
      -
        chain: "--color-date-picker-icon-default → --color-gray-900 → #202020"
        status: "resolved"
      -
        chain: "--color-date-picker-text-sunday → --color-red-300 → #FF4554"
        status: "resolved"
      -
        chain: "--color-date-picker-text-saturday → --color-blue-400 → #1D6CEB"
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

Select Box와 Filter Chip이 재사용하는 옵션 패널 컴포넌트. 옵션 줄은 글자만(단일 선택)과 체크박스(다중 선택) 두 유형이며, 체크박스 유형은 「전체」 줄을 기본 포함한다. 트리거 상태는 Select Box가 담당한다.

**언제 쓰나**
- 트리거를 눌러 옵션 목록에서 하나를 고를 때(글자 유형).
- 한 목록에서 여러 항목을 동시에 고를 때(체크박스 유형) — 필터·대상 선택 등.
- Select 의 기반 컴포넌트.

**쓰지 말아야 할 때**
- 즉시 실행 액션 그룹은 Button.
- 적은 수의 상호배타 선택은 Radio.
- 항목이 3~4개 이하로 적고 항상 보여도 되는 다중 선택은 목록을 접지 말고 Checkbox 를 펼쳐 쓴다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 트리거 | 현재 값·placeholder 표시. default·hover·open·disabled. 다중 선택은 고른 이름을 쉼표로 나열하고 넘치면 말줄임. |
| 옵션 목록 | surface-raised 위에 떠 있는 패널. 글자 유형·체크박스 유형 두 벌. |
| 옵션 | hover·selected 상태 항목. 체크박스 유형은 코어 Checkbox 를 왼쪽에 배치(간격 8px). |
| 전체 선택 줄 | 체크박스 유형 최상단. 아래에 1px 구분선으로 목록과 분리. 필요 없는 화면에서는 이 줄만 뺀다. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | --color-dropdown-list-bg<br>--color-dropdown-list-border<br>--color-dropdown-option-label-default | --color-dropdown-option-bg-hover<br>--color-dropdown-list-bg<br>--color-dropdown-list-border | --color-dropdown-list-bg<br>--color-dropdown-list-border | --color-dropdown-list-bg<br>--color-dropdown-list-border |

#### Agent-readable contract

```yaml
agent:
  component: "Dropdown"
  variantAxes:
    Size:
      - "XXSM"
      - "XSM"
      - "MD"
    Type:
      - "Text"
      - "Checkbox"
    State:
      - "Default"
  states:
    builder:
      - "Default"
    metadata:
      panel:
        - "default"
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
      -
        on: "keydown"
        target: "option"
        result: "ArrowUp/ArrowDown move, Home/End jump, Enter/Space select"
    selection: "single"
    openClose: "owned by the composing trigger component"
    keyboard: "ArrowUp · ArrowDown · Home · End · Enter/Space (role=listbox pattern)"
    focus: "roving tabindex — only the active option is in the tab order"
    accessibility: "role=listbox on the list, role=option with aria-selected on each row"
  geometry:
    common:
      target: "root"
      width: 100
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
    declaredParts:
      - "Options"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/control/bg/default"
      - "color/control/bg/hover"
      - "color/control/bg/selected"
      - "color/control/border/default"
      - "color/control/border/selected"
      - "color/dropdown/list/bg"
      - "color/dropdown/list/border"
      - "color/dropdown/option/bg/default"
      - "color/dropdown/option/bg/hover"
      - "color/dropdown/option/label/default"
      - "color/dropdown/option/label/hover"
      - "color/dropdown/option/label/selected"
    aliasChains:
      -
        chain: "--color-dropdown-list-bg → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-dropdown-option-bg-hover → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-dropdown-list-border → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-dropdown-option-label-default → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-dropdown-option-label-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-dropdown-option-bg-selected → --color-blue-50 → #E2F1FF"
        status: "resolved"
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
- 체크박스 유형의 체크박스는 코어 Checkbox 컴포넌트를 그대로 배치한다(Figma=인스턴스, 코드=.s1-checkbox).
- 다중 선택은 고르는 즉시 적용하고 목록을 열어 둔다.
- 목록 폭은 트리거(칩·셀렉트) 폭을 따르되 100px 밑으로 내려가지 않는다 — guide.panelWidthRule 참조.

_Don't_
- 목록 배경에 surface-default 를 쓰지 않는다(D002 결정: raised).
- 옵션 hover/selected 색을 raw 로 칠하지 않는다.
- 드롭다운 전용 체크박스를 새로 만들지 않는다(코어 재사용 규칙).
- 체크박스 유형에서 선택된 줄의 글자를 강조하지 않는다 — 체크 표시가 이미 선택을 표현한다(2026-08-14 결정).
- 다중 선택에서 옵션을 고를 때 목록을 닫지 않는다.
- 목록에 임의의 최대 폭 상한을 두지 않는다(2026-09-07 river 결정으로 상한 폐기).

**접근성 (a11y)**
- 트리거는 aria-expanded 로 열림 상태를 노출한다.
- 단일 선택은 선택 옵션에 aria-selected, 목록은 role=listbox 패턴을 따른다.
- 다중 선택 옵션은 role=checkbox + aria-checked 로 켜짐/꺼짐을 노출한다.
- 「전체 선택」은 정본에 켜짐/꺼짐 2단계만 있어 aria-checked 도 true/false 만 쓴다. 부분 선택(mixed) 표시는 정본에 해당 모양이 없어 만들지 않는다(river 결정 2026-08-31).

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
| line | — | --color-chip-line-bg-hover → color/chip/line/bg/hover | --color-chip-line-bg-selected → color/chip/line/bg/selected<br>--color-chip-line-border-selected → color/chip/line/border/selected | — | --color-chip-line-bg-disabled → color/chip/line/bg/disabled<br>--color-chip-line-border-disabled → color/chip/line/border/disabled<br>--color-chip-line-label-disabled → color/chip/line/label/disabled<br>--color-chip-line-icon-disabled → color/chip/line/icon/disabled |
| solid | — | --color-chip-solid-bg-hover → color/chip/solid/bg/hover | --color-chip-solid-bg-selected → color/chip/solid/bg/selected<br>--color-chip-solid-border-selected → color/chip/solid/border/selected<br>--color-chip-solid-label-selected → color/chip/solid/label/selected<br>--color-chip-solid-icon-selected → color/chip/solid/icon/selected | — | --color-chip-solid-bg-disabled → color/chip/solid/bg/disabled<br>--color-chip-solid-border-disabled → color/chip/solid/border/disabled<br>--color-chip-solid-label-disabled → color/chip/solid/label/disabled<br>--color-chip-solid-icon-disabled → color/chip/solid/icon/disabled |

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
        result: "toggle closed ↔ open and keep aria-expanded in sync"
      -
        on: "click"
        target: "option"
        result: "select one option, update the trigger label, mark complete, and close"
      -
        on: "keydown"
        target: "filter chip"
        result: "close on Escape and return focus to the trigger"
      -
        on: "click"
        target: "outside"
        result: "close"
      -
        on: "disable"
        target: "filter chip"
        result: "close and block trigger clicks"
    selection: "single"
    keyboard: "native button on the trigger (Enter/Space); Escape closes; option movement is owned by the Dropdown contract"
    focus: "move focus into the panel on open and return it to the trigger on close"
    accessibility: "aria-haspopup=listbox and aria-expanded on the trigger; the accessible name joins the title and the value (e.g. '정렬, 최신순'); complete is exposed as data-complete=true because no ARIA state matches"
  geometry:
    common:
      target: "chip"
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "FIXED"
      counterAxisAlignItems: "CENTER"
      itemSpacing: "4"
      topLeftRadius: "radius/full"
      topRightRadius: "radius/full"
      bottomLeftRadius: "radius/full"
      bottomRightRadius: "radius/full"
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
      - "dropdown"
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
      - "color/dropdown/list/bg"
      - "color/dropdown/list/border"
      - "color/dropdown/option/bg/default"
      - "color/dropdown/option/bg/hover"
      - "color/dropdown/option/label/default"
      - "color/dropdown/option/label/hover"
      - "color/dropdown/option/label/selected"
      - "radius/full"
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
        chain: "--color-chip-line-icon-default → --color-gray-500 → #757575"
        status: "resolved"
      -
        chain: "--color-chip-line-icon-disabled → --color-gray-300 → #C4C4C4"
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
      -
        chain: "--color-chip-solid-icon-default → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-chip-solid-icon-selected → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-chip-solid-icon-disabled → --color-gray-300 → #C4C4C4"
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
| 메뉴 슬롯 | size md/sm/xsm × default/hover/selected. 메뉴들이 놓이는 자리 전체가 GNB 바의 Figma 슬롯 'Menus' — 기본은 메뉴 3개이고, 인스턴스를 넣고 빼서 메뉴 수를 늘리고 줄인다 (river 지시 2026-09-03). |
| 유틸리티 | 우측 아이콘 3종. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| menuSlot | --color-navigation-label-default-alt | --color-navigation-label-hover | — | — |
| bar | --color-navigation-label-default-alt | --color-navigation-label-hover | — | — |

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
    initialState: "no menu current (aria-current unset) unless the host page renders one as current"
    events:
      - "s1:gnb:open"
      - "s1:gnb:close"
    keyboard: "Tab order: logo → menus (left to right) → language → account → menu-toggle; native button/link Enter/Space activation. A menu with aria-controls opens its gnb-sub-menu panel on focusin (Tab entry) and closes on Escape, returning focus to the menu — focus is never trapped inside the panel."
    focus: "Browser default focus indication; on Escape-close, focus programmatically returns to the trigger menu (no other custom focus movement)."
    accessibility:
      role: "nav (root) with aria-label; menu list is ul/li of a[href]; language/account/menu-toggle are button[type=button]"
      name: "nav aria-label (e.g. \"주 메뉴\"); account/menu-toggle carry aria-label; language button's accessible name is its visible label text"
      current: "aria-current=\"page\" reflects the host page's current route; no local click-to-select toggle logic (unchanged)."
      expanded: "For a menu with aria-controls, aria-expanded (\"true\"/\"false\") and the target gnb-sub-menu panel's hidden attribute are managed by gnb.js — open on hover (pointer with hover:hover) or focusin, close 150ms after mouseleave/pointer-outside or immediately on Escape/opening a different menu."
    runtimeNote: "런타임 있음(jsRequired=true, gnb.js) — river 결정(2026-09-09, D4·D5)에 따라 하위메뉴(gnb-sub-menu) 여닫는 동작을 gnb 가 갖는다. aria-controls 를 가진 메뉴가 없으면(하위메뉴 없이 상단바만 쓰는 화면) init() 은 아무 것도 하지 않고 조용히 끝난다 — 강제 의존이 아니다. 상호작용: hover-capable 기기는 마우스를 올리면 즉시 열고 바·패널을 벗어나면 150ms 유예 뒤 닫는다(둘 사이 틈을 지날 때 깜빡임 방지). hover 가 안 되는 기기(matchMedia로 매 이벤트마다 재확인)는 클릭으로 열고 닫는다. Tab 으로 들어가면 열리고 Esc 로 닫히며 초점이 그 메뉴로 되돌아온다 — 패널 안에 초점을 가두지 않는다. 한 번에 하나만 열리고, 바깥 포인터다운에도 닫힌다(select·date-picker 와 같은 안전망). 현재 메뉴 표시(aria-current)는 여전히 host 화면이 정적으로 설정한다(mobile-bottom-nav 와 같은 방식) — 이 런타임이 건드리지 않는다. 이 status 는 \"문서 근거가 실제 코드와 일치\"만 확인한 것이다 — ui-library/src/components/gnb/manifest.json 의 배포 상태는 candidate 이며 component-verifier 원본대조·river UX 승인 전이다."
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
      - "Menus"
      - "border"
      - "language=on, menu=on, user=on"
      - "leading"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/line/gray/subtle"
      - "color/navigation/bg"
      - "color/navigation/indicator/selected"
      - "color/navigation/label/default-alt"
      - "color/navigation/label/selected"
      - "color/text/body/primary"
      - "color/text/title/primary"
    aliasChains:
      -
        chain: "--color-navigation-bg → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-line-gray-subtle → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--color-navigation-label-default-alt → --color-gray-700 → #434343"
        status: "resolved"
      -
        chain: "--color-navigation-label-hover → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-line-blue → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-text-title-primary → --color-base-black → #000000"
        status: "resolved"
      -
        chain: "--color-icon-gray-dark → --color-gray-800 → #353535"
        status: "resolved"
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
- 한 GNB 안에서는 하위메뉴를 가진 메뉴 전부가 같은 유형(Type)의 하위메뉴 패널을 연다 — 유형은 메뉴마다 고르는 게 아니라 사이트가 하나 고르는 것이다(river 결정 2026-09-09).

**접근성 (a11y)**
- 바 전체를 <nav> 로 감싸고 aria-label 로 이름을 준다(예: "주 메뉴"). 한 화면에 내비게이션이 둘 이상이면 이름으로 구분된다.
- 메뉴 목록은 <ul>/<li>, 각 메뉴는 <a href> 로 낸다. 링크가 아닌 동작이면 <button type="button"> 을 쓴다.
- 현재 메뉴에 aria-current="page" 를 준다. Selected 는 시각 표현이고 현재 위치를 알리는 것은 aria-current 다.
- Hover 와 Selected 는 정본에서 시각이 같다 — 그래도 aria-current 는 Selected 에만 준다.
- 유틸 아이콘 버튼(계정·메뉴)은 <button type="button"> + aria-label 로 이름을 준다. 아이콘 SVG 는 aria-hidden 이다.
- 언어 항목은 지구본 아이콘 + 보이는 글자 라벨을 함께 두므로 별도 aria-label 을 붙이지 않는다.
- 로고는 홈으로 가는 링크일 때 <a> 로 내고 글자 라벨이 접근 가능한 이름이 된다.
- 키보드: Tab 으로 로고 → 메뉴 순서대로 → 유틸 순서대로 이동한다. 하위메뉴를 연 메뉴를 지날 때는 그 패널 안 링크들도 이 순서 사이에 끼어든다(아래 하위메뉴 항목 참고). 정본에 방향키 이동이 없으므로 만들지 않는다.
- 포커스 표시는 브라우저 기본값을 그대로 쓴다 — 정본에 별도 focus 표현이 없다.
- 오류 관계·모션 감소는 이 컴포넌트에 해당 없음(not-applicable) — 오류 표시도 애니메이션도 정본에 없다.
- 하위메뉴를 여는 메뉴에는 aria-controls 로 그 패널의 id를, aria-expanded 로 열림/닫힘 상태를 준다 — 둘 다 이 컴포넌트의 JavaScript(gnb.js)가 관리한다(river 결정 2026-09-09). 마우스를 올리면 열리고(hover-capable), 바·패널 밖으로 나가면 150ms 유예 뒤 닫힌다. Tab 으로 들어가면 열리고, Esc 로 닫히며 초점이 그 메뉴로 되돌아온다. 열린 패널이 있는 메뉴에서 Tab 을 한 번 더 누르면 초점이 그 패널의 첫 링크로 들어가고, 패널의 마지막 링크에서 Tab 을 누르면 패널이 닫히며 다음 메뉴(또는 유틸 버튼)로 넘어간다 — 패널 첫 링크에서 Shift+Tab 을 누르면 다시 그 메뉴로 돌아간다(river 결정 2026-09-15, gnb-nav 후속). 되돌아오는 방향도 같다 — 어떤 자리에서 Shift+Tab 을 누를 때 바로 앞이 하위메뉴를 가진 메뉴면 그 목록의 마지막 링크부터 훑는다(river 결정 2026-09-16). 이건 초점을 패널 안에 가두는 게 아니다 — 원래 Tab 순서에 없던 패널 내용을 순서 안에 끼워 넣을 뿐, 패널 안 어디서든 Tab/Shift+Tab 을 계속 누르면 결국 패널을 벗어난다 — 그 메뉴 뒤에 갈 곳이 없는 조립(유틸 영역 없는 GNB)에서는 Tab 을 가로채지 않고 GNB 바깥으로 그대로 넘긴다. 마우스가 없는 기기는 클릭으로 열고 닫는다(다만 첫 탭이 열지 못하는 선행 결함이 있다 — BACKLOG 0-d D-2).
- 닫힌 하위메뉴 패널은 hidden 속성으로 접근성 트리에서도 빠진다(gnb-sub-menu a11y) — 눈에만 안 보이게 하지 않는다.
- 하위메뉴는 강제 의존이 아니다 — aria-controls 를 붙이지 않은 메뉴는 여전히 평범한 링크다.

### GNB Sub Menu

GNB 상단바 아래로 펼쳐지는 하위메뉴 패널. Type 3변형(2026-09-09 개편, 종전 Depth 축 폐지) — regular=카테고리 제목 + 항목 목록(묶음 4개, 항목 5·3·4·5) · compact-1=제목 없이 항목 6개가 한 줄 · compact-2=제목 없이 항목이 묶음마다 2개(마지막 묶음만 1개). 묶음(컬럼)은 유형별 정본 기본값이며 넣고 빼서 조절한다. PC 전용. 폭은 GNB 바와 같은 full-width 반응형.

**언제 쓰나**
- GNB 주 메뉴 아래로 하위 메뉴를 펼쳐 보일 때.

**쓰지 말아야 할 때**
- 모바일에는 쓰지 않는다(PC 전용).
- 단일 목록 하나만 띄우는 자리에는 Dropdown 을 쓴다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 패널 | 화면 폭을 채우는 흰 면. 하단 1px 선과 드롭다운 그림자를 갖는다. |
| 컬럼 묶음 | 컬럼이 놓이는 자리. 컬럼 수는 유형별 기본값(regular=4 · compact-1=6 · compact-2=5), 컬럼 사이 80. 묶음 전체가 가운데 정렬된다. |
| 컬럼 | GNB Sub Menu Item 을 세로로 쌓는다. 간격은 regular·compact-1 이 24, compact-2 가 20. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| 0 | — | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "GNB Sub Menu"
  variantAxes:
    Type:
      - "regular"
      - "compact-1"
      - "compact-2"
  states:
    builder: "not-defined"
    metadata: "unknown"
  behavior:
    platform: "PC"
    status: "not-defined"
  geometry:
    common:
      target: "root"
      width: 1920
      height: 100
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "AUTO"
      primaryAxisAlignItems: "CENTER"
      counterAxisAlignItems: "MIN"
      itemSpacing: "0"
      paddingRight: "spacing/24"
      paddingLeft: "spacing/24"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Type: "regular"
        paddingTop: "spacing/32"
        paddingBottom: "spacing/64"
      -
        when:
          Type:
            - "compact-1"
            - "compact-2"
        paddingTop: "spacing/24"
        paddingBottom: "spacing/24"
  composition:
    mustReuse:
      - "GNB Sub Menu Item"
    mustNotCreate: "not-defined"
    declaredParts:
      - "Columns"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/line/gray/subtle"
      - "color/navigation/bg"
      - "color/navigation/label/default"
      - "color/navigation/label/selected"
      - "color/navigation/submenu/label/default"
      - "spacing/20"
      - "spacing/24"
      - "spacing/32"
      - "spacing/64"
      - "spacing/80"
    aliasChains: "not-defined"
  figma:
    status: "figma-unconfirmed"
    identifiers: "figma-unconfirmed"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 컬럼 묶음을 가운데 정렬한다 — 좌우 여백은 값이 아니라 정렬 결과다.
- 컬럼 수·항목 수는 유형(regular·compact-1·compact-2)에 맞게 화면에서 넣고 뺀다.

_Don't_
- 컬럼 묶음을 패널 폭만큼 늘리지 않는다 — 늘리면 가운데 정렬할 여백이 사라져 왼쪽에 붙는다.
- 패널 안에 아이콘·배지를 새로 만들지 않는다 — 정본에 없다.
- 한 GNB 안에서는 하위메뉴를 가진 메뉴 전부가 같은 유형(Type)의 하위메뉴 패널을 연다 — 유형은 메뉴마다 고르는 게 아니라 사이트가 하나 고르는 것이다(river 결정 2026-09-09).

**접근성 (a11y)**
- 패널을 여는 GNB 메뉴에 aria-expanded 와 aria-controls 를 주고, 패널의 id 를 가리키게 한다 — 이 컴포넌트 자신이 아니라 gnb(2026-09-09부터 jsRequired=true)가 그 둘을 관리한다.
- 패널 안 목록은 <ul>/<li> 로 낸다. 컬럼은 목록을 담는 그릇이며 그 자체가 목록이 아니다.
- 닫힌 상태는 hidden 또는 display:none 으로 접근성 트리에서도 빠지게 한다 — 눈에만 안 보이게 하지 않는다. gnb-sub-menu.css 의 [data-s1-component=gnb-sub-menu][hidden]{display:none} 이 이걸 보장한다(같은 selector 의 display:flex 가 UA [hidden] 규칙을 덮어써 버리는 함정 방지).
- Esc 로 닫고 포커스를 연 메뉴로 되돌린다. 이 동작은 이 컴포넌트가 아니라 패널을 여는 gnb 가 갖는다 — gnb-sub-menu 자신은 여전히 여닫는 코드가 없다(jsRequired=false 그대로).
- 포커스를 패널 안에 가두지 않는다 — 정본에 가둠이 없고, 팝업이 아니라 펼침 영역이다.
- 포커스 표시는 브라우저 기본값을 그대로 쓴다.
- 오류 관계·모션 감소는 해당 없음(not-applicable) — 정본에 오류 표시도 애니메이션도 없다.

### GNB Sub Menu Item

GNB 하위메뉴 패널 안의 글자 한 줄. Depth(1depth=카테고리 제목 Bold 16 · 2depth=항목 Medium 16) 축이며, 상태(Default·Hover·Selected)는 2depth 만 갖는다 — 1depth 는 누를 수 없는 제목이라 늘 기본 색이다(river 지시 2026-09-10). 그래서 4변형이다. 아이콘·배경·들여쓰기가 없다. 단독으로 쓰지 않고 GNB Sub Menu 안에서 쓴다.

**언제 쓰나**
- GNB 하위메뉴 패널의 카테고리 제목 또는 항목을 놓을 때.

**쓰지 말아야 할 때**
- 상단바의 주 메뉴는 GNB 의 메뉴 슬롯을 쓴다.
- 패널 없이 이 부품만 화면에 두지 않는다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 라벨 | 글자 한 줄. Depth 에 따라 굵기·색이 갈린다. 아이콘·배경·들여쓰기 없음. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| 0 | color/navigation/submenu/label/default<br>color/navigation/label/default | — | — | — |
| 1 | color/navigation/submenu/label/default<br>color/navigation/label/default | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "GNB Sub Menu Item"
  variantAxes:
    Depth:
      - "1depth"
      - "2depth"
    State:
      - "Default"
      - "Hover"
      - "Selected"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Selected"
    metadata: "unknown"
  behavior:
    platform: "PC"
    status: "not-defined"
  geometry:
    common:
      target: "root"
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "AUTO"
      counterAxisAlignItems: "CENTER"
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
      - "color/navigation/label/default"
      - "color/navigation/label/selected"
      - "color/navigation/submenu/label/default"
    aliasChains: "not-defined"
  figma:
    status: "figma-unconfirmed"
    identifiers: "figma-unconfirmed"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 1depth 는 카테고리 제목이므로 Bold 16, 2depth 는 항목이므로 Medium 16 을 쓴다.
- 현재 위치인 항목에만 Selected 를 준다.

_Don't_
- 2depth 를 들여쓰지 않는다 — 기준 원본(A)에 들여쓰기가 없다.
- Hover 와 Selected 의 색을 다르게 만들지 않는다 — 정본에서 같다.

**접근성 (a11y)**
- 패널의 목록 안에서 <li> 하나에 <a href> 하나로 낸다. 링크가 아닌 동작이면 <button type="button"> 을 쓴다.
- 1depth(카테고리 제목)가 링크가 아니면 <a>·<button> 으로 만들지 않는다 — 목록의 제목 글자로 둔다.
- 현재 위치인 2depth 항목(<a href>)에 aria-current="page" 를 준다. Selected 는 시각 표현이고 현재 위치를 알리는 것은 aria-current 다.
- 1depth(카테고리 제목)는 링크가 아니라 '현재 페이지' 개념이 없으므로 aria-current 를 쓰지 않는다. 정본에도 1depth 의 Hover·Selected 변형이 없어 어떤 상태 표시도 붙이지 않는다(river 지시 2026-09-10).
- Hover 는 시각만이며 ARIA 로 알리지 않는다 — 정본에서 Selected 와 색이 같다.
- 포커스 표시는 브라우저 기본값을 그대로 쓴다(정본에 별도 focus 표현이 없다).
- 키보드는 Tab 이동 + Enter 활성화의 네이티브 동작만 쓴다. 방향키 이동은 정본에 없으므로 만들지 않는다(not-applicable).
- 오류 관계·모션 감소는 해당 없음(not-applicable) — 정본에 오류 표시도 애니메이션도 없다.

### Input

Base text input field. Pure input element without label/helper wrapper. Label/Helper combo = Input Slots pattern.

**언제 쓰나**
- 한 줄 텍스트·숫자를 입력받을 때 — 로그인·검색·필터·설정 폼 등.
- 라벨·도움말과 함께 쓰려면 Input Slots(라벨/헬퍼 조합) 패턴으로 감싼다.
- 안내메시지(helper)는 필요한 화면에서만 켠다 — 계정 관련 화면(로그인·비밀번호 변경·회원가입)처럼 입력 규칙을 미리 알려야 하는 곳이 대표적이다. 일반 입력·검색에는 넣지 않는다(river 결정 2026-09-07).

**쓰지 말아야 할 때**
- 여러 줄 입력은 Textarea 를 쓴다.
- 선택지 중 하나를 고르는 입력은 Select·Dropdown, 날짜·시간은 DatePicker·TimePicker 를 쓴다.
- 안내메시지가 필요하다는 이유로 '계정용 인풋' 같은 별도 컴포넌트를 만들지 않는다 — 안내메시지는 켜고 끄는 선택 슬롯이다. 업계 관행도 검색만 별도 컴포넌트로 가르고, 쓰이는 화면으로는 가르지 않는다(river 결정 2026-09-07).

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 입력 필드(base) | 텍스트·숫자를 입력하는 기본 영역. 배경·테두리·텍스트는 form-control 토큰. |
| placeholder | 입력 전 안내 문구. 입력되면 default 텍스트 색으로 전환. |
| suffix 액션 그룹(선택) | 오른쪽 액션 버튼 그룹. 검색=지우기+검색 아이콘, 비밀번호=표시전환+지우기. |
| helper 텍스트(선택) | 필드 아래 도움말·오류·성공 메시지. color-text-state 사용. |

| variant | default | focus | filled | error | correct | read-only | disabled |
| --- | --- | --- | --- | --- | --- | --- | --- |
| default | --color-form-control-bg-default → color-surface-default<br>--color-form-control-border-default → color-border-default<br>--color-form-control-text-default → color-text-secondary | — | — | --color-form-control-border-error → color-status-error | --color-form-control-border-correct<br>--color-text-state-correct | — | --color-form-control-bg-disabled → color-bg-subtle<br>--color-form-control-border-disabled → color-border-subtle<br>--color-form-control-text-disabled → color-text-disabled |

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
      - "Focus"
      - "Error"
      - "Correct"
      - "Read-Only"
      - "Disabled"
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
      - "Focus"
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
      - "read-only"
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
        target: "control"
        result: "refresh clear-action visibility (Base·Password: focus-within && value; Search: value only)"
      -
        on: "click"
        target: "clear action"
        result: "clear the value, hide the clear action, and return focus to the input"
      -
        on: "click"
        target: "password visibility action"
        result: "toggle password ↔ text, sync aria-pressed/aria-label, and return focus to the input"
      -
        on: "click"
        target: "search action"
        result: "dispatch s1:input:search with the current value"
      -
        on: "keydown Enter (control, data-mode=search only)"
        target: "search control"
        result: "dispatch s1:input:search unless the Enter is part of IME composition (isComposing)"
      -
        on: "focusin"
        target: "input"
        result: "paint Selected border; move caret to the end only when focus did not come from a pointer"
    keyboard: "native-input"
    focus:
      field: "keyboard focus paints the field border with the canonical Selected color (error·correct·read-only included)"
      caret: "keyboard (Tab) focus places the caret at the end of the value; pointer focus keeps the clicked position. A focus arriving within 500ms of the last pointerdown/pointerup on the component counts as pointer focus — do not change that window without re-verifying mobile tap, where focus arrives after the finger lifts."
      disabled: "native disabled inputs are not focusable and are skipped in tab order"
      clear: "return to input"
      passwordVisibility: "return to input"
      search: "no focus change on search execute"
    accessibility:
      passwordVisibility: "synchronize aria-label and aria-pressed"
      search: "search action is always visible; clear action visibility follows value presence only (not focus)"
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
        paddingRight: "0"
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
      - "color/form-control/bg/hover"
      - "color/form-control/bg/selected"
      - "color/form-control/border/correct"
      - "color/form-control/border/default"
      - "color/form-control/border/disabled"
      - "color/form-control/border/error"
      - "color/form-control/border/selected"
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
      - "radius/4"
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
      -
        chain: "--color-text-state-caution → --color-red-300 → #FF4554"
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
- focus 는 파란 테두리(--color-form-control-border-selected)로만 표시하고 배경은 바꾸지 않는다.
- 라벨은 form-control 밖 제목 텍스트 토큰(--color-text-title-secondary)을 쓴다.
- 안내메시지는 규칙을 알려야 하는 화면에서만 켠다. 끌 때는 message 요소와 aria-describedby 를 함께 뺀다.

_Don't_
- Input field 전체에 hover 상태를 만들지 않는다 — HD-2에서 제거됨. suffix action의 독립 Hover 배경은 예외이며, 그마저도 PC 에서만 낸다(Mobile 제외, river 지시 2026-09-07).
- filled·error·focus 에 별도 배경색을 넣지 않는다 — 배경은 default 와 동일, 구분은 텍스트·테두리 색으로만.
- correct(성공) 테두리를 초록으로 칠하지 않는다 — 원본은 파란색(border-selected).
- 모든 입력칸에 안내메시지를 기본으로 깔지 않는다 — 읽을 것이 늘어 정작 필요한 곳의 규칙 안내가 묻힌다.

**접근성 (a11y)**
- suffix 액션(지우기·검색·비밀번호 표시전환)에는 각각 aria-label 을 단다(예: 검색어 지우기, 비밀번호 보기/숨기기).
- 비밀번호 표시전환 토글은 aria-pressed 로 표시·숨김 상태를 노출한다.
- Focus 상태의 지우기(clear) 버튼은 값이 있고 Input 또는 지우기 버튼에 초점이 있을 때만 노출한다(hidden 속성 제어).
- suffix 액션의 실제 누르는 영역은 PC 28×28px, Mobile 48×48px이며 액션마다 독립된 button 영역을 가진다. Mobile 에서 액션이 둘 보일 때는 누르는 영역을 맞붙이고(간격 0) 왼쪽 아이콘 그림만 자기 영역 안쪽 끝으로 당겨 보이는 간격을 좁힌다 — 영역 48×48 과 겹치지 않음은 그대로다(river 결정 2026-09-07, 실측 28px→12px).
- Mobile break 에서는 suffix 액션에 hover 배경을 내지 않는다 — 손가락에는 hover 가 없고, PC 브라우저로 모바일 화면을 볼 때 48×48 영역이 통째로 칠해져 혼란을 준다(river 지시 2026-09-07).
- suffix 액션의 키보드 초점 표시는 브라우저 기본 표시에 맡긴다 — 정본에 focus 표현이 없어 웹에서 따로 만들지 않는다(2026-09-02 river 결정).
- 입력칸에 키보드 초점이 들어오면 field 테두리를 정본 Selected 색으로 바꾼다. error·correct·read-only 에서도 같다(2026-09-04 river 지시).
- Tab 으로 들어온 초점은 커서를 값 끝에 둔다. 마우스로 눌러 들어온 초점은 누른 자리를 유지한다(2026-09-04 river 지시).
- disabled 입력칸은 초점을 받지 않고 tab 순서에서 건너뛴다(native disabled).

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
| 아이콘 | 32×32 라이브러리 아이콘 인스턴스(**Solid 변형**). 상태에 따라 색만 바뀐다. |
| 라벨 | Pretendard Medium 12(body/12M). 아이콘 아래 4px 간격. |
| 아이템 컨테이너 | 60×60 고정, 세로 가운데 정렬, 배경 투명. |
| 바(bar) | 컴포넌트가 아님 — 아이템 인스턴스를 가로로 배열해 화면에서 구성한다. 배경색은 화면이 --color-navigation-bg 로 칠한다. |

| variant | unselected | selected |
| --- | --- | --- |
| default | --color-navigation-icon-default → color/navigation/icon/default<br>--color-navigation-label-default → color/navigation/label/default<br>--color-navigation-bg → color/navigation/bg | --color-icon-blue → color/icon/blue<br>--color-navigation-label-selected → color/navigation/label/selected<br>--color-navigation-bg → color/navigation/bg |

#### Agent-readable contract

```yaml
agent:
  component: "Mobile Bottom Nav"
  variantAxes:
    icon:
      - "home"
      - "search"
      - "notification"
      - "settings"
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
    source: "registry/components/component-behavior.pc.json ← pages/components.html#mobile-bottom-nav"
    status: "verified"
    initialState: "unselected (aria-selected=false) unless the host page renders it selected"
    events:
      []
    keyboard: "native button Enter/Space activation"
    focus: "native button focus with a 2px visible outline"
    accessibility:
      role: "tab (root); a surrounding role=tablist container is owned by the host screen"
      name: "the visible label text"
      selected: "aria-selected reflects the host page's current route; no local toggle logic"
    runtimeNote: "런타임 없음(jsRequired=false). 선택 상태는 호스트 화면이 정적으로 설정한 aria-selected 를 CSS 가 그대로 반영한다(HD-1 선택지 A — 화살표 키 이동·로컬 클릭 토글은 범위 밖)."
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
      - "navNotification"
      - "navSearch"
      - "navSettings"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/navigation/label/default"
      - "color/navigation/label/selected"
    aliasChains:
      -
        chain: "--color-navigation-icon-default → --color-gray-300 → #C4C4C4"
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
      icon:
        - "home"
        - "search"
        - "notification"
        - "settings"
      state:
        - "unselected"
        - "selected"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 아이템 자체는 배경을 갖지 않게 두고, 바 배경은 상위 컨테이너에서 칠한다.
- 아이콘은 **Solid 변형만** 쓴다 — 하단 내비는 한눈에 읽히는 면(채운 도형)이 기준이다(river 지시 2026-09-14). 받은 아이콘도 Solid 를 받아 끼운다.
- 아이콘은 라이브러리 인스턴스를 쓴다(벡터를 직접 그리지 않는다).
- 선택 상태는 아이콘·라벨 두 요소의 색을 함께 바꾼다.

_Don't_
- Line 변형 아이콘을 섞지 않는다 — 한 바 안에서 채운 것과 선만 있는 것이 섞이면 선택 상태가 아닌 칸이 꺼져 보인다.
- 아이템 안에 배지·점 등 임의 요소를 추가하지 않는다(정본에 없음).
- 60×60 고정 크기를 임의로 바꾸지 않는다.
- selected 아이콘에 control/indicator 계열 토큰을 쓰지 않는다(V2.4 오참조를 재유입시키지 말 것).

**접근성 (a11y)**
- 탭 목록은 role=tablist·각 항목 role=tab 으로 표시하고 현재 탭에 aria-selected 를 준다.
- 아이콘만으로 의미를 전달하지 않는다 — 라벨을 항상 함께 보여준다.
- 터치 타깃은 60×60 으로 최소 권장치를 만족한다.

### Mobile Header

모바일 화면 상단의 StatusBar와 AppBar를 하나로 묶은 코어 컴포넌트. 홈형 2종·표준형 4종을 Type 축으로, 앱(360×99)·모바일 웹(360×149)을 Platform 축으로 제공한다.

**언제 쓰나**
- 모바일 앱 또는 모바일 웹 화면에서 상단 전역 크롬과 화면 이동 동작을 제공할 때.
- 회원가입처럼 앱바 안 제목을 비우고 본문 큰 제목을 사용하는 화면에는 Standard / No Title을 쓴다.

**쓰지 말아야 할 때**
- PC 화면의 전역 내비게이션에는 GNB를 쓴다.
- 모바일 화면이 아닌 PC 전용 헤더에는 사용하지 않는다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| StatusBar | 선택한 Platform의 StatusBar 정본 인스턴스. App은 360×27, Web은 주소창을 포함한 360×77이다. 배경은 투명이며 헤더 프레임 배경과 Appearance 모드를 상속한다. |
| AppBar | 360×56. StatusBar 아래 16px 간격으로 배치한다. |
| Title area | 표준형은 중앙 정렬(title/18M), 홈형은 좌측 정렬(title/18B). No Title 계열에는 텍스트 노드가 없다. |
| Action slots | 32×32 이전·닫기·알림 슬롯 또는 같은 폭 spacer. |

| variant |
| --- |
| Type |
| Platform |

#### Agent-readable contract

```yaml
agent:
  component: "Mobile Header"
  variantAxes:
    Type:
      - "Home / Title"
      - "Home / Title + 1 Icon"
      - "Home / Title + Subtitle + 1 Icon"
      - "Standard / Title"
      - "Standard / Title + Close"
      - "Standard / No Title"
      - "Standard / No Title + Close"
    Platform:
      - "App"
      - "Web"
  states:
    builder: "not-defined"
    metadata:
      []
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#mobile-header"
    status: "verified"
    initialState: "static chrome; no open/closed local state"
    events:
      []
    keyboard: "native button Enter/Space activation for back/close/notification"
    focus: "native button focus with a 2px visible outline on back/close/notification"
    accessibility:
      name: "back/close/notification carry a context-appropriate aria-label; title-bearing variants render an h1"
      headingRole: "variants without title text render an empty non-heading span; the page body's own h1 acts as the primary heading"
    runtimeNote: "런타임 없음(jsRequired=false). StatusBar·Platform 축은 river 결정(D5)으로 배포본에서 뺐다 — AppBar 56px·Type 7종(Home 3 · Standard 4)을 배포한다. 2026-09-15 에 Home / Title + 1 Icon 이 더해져 6종 → 7종."
  geometry:
    common:
      target: "root"
      width: 360
      layoutMode: "VERTICAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "FIXED"
      itemSpacing: "16"
    variants:
      -
        when:
          Platform: "App"
        height: 99
      -
        when:
          Platform: "Web"
        height: 149
  composition:
    mustReuse:
      - "StatusBar"
    mustNotCreate: "not-defined"
    declaredParts:
      - "AppBar"
      - "StatusBar"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/bg/home"
      - "color/bg/level-0"
      - "color/bg/level-2"
      - "color/icon/gray-dark"
      - "color/text/body/secondary"
      - "color/text/body/tertiary"
      - "color/text/title/primary"
    aliasChains: "not-defined"
  figma:
    status: "available"
    identifiers:
      componentSetKey: "9fd8509a9e73c1279d9efb2088bb591658ce29f5"
      fileKey: "cysG5U1udpQqVagYY1hWHW"
      figmaNodeId: "1760:7247"
    variants:
      Type:
        - "Home / Title"
        - "Home / Title + Subtitle + 1 Icon"
        - "Standard / Title"
        - "Standard / Title + Close"
        - "Standard / No Title"
        - "Standard / No Title + Close"
      Platform:
        - "App"
        - "Web"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 앱바 안 제목과 본문 큰 제목이 중복되면 Standard / No Title을 쓴다.
- 아이콘은 등록된 원본 라이브러리 인스턴스를 사용한다.
- 배경·텍스트·아이콘 색은 역할에 맞는 Semantic 변수로 바인딩한다.

_Don't_
- 제목을 흰색으로 숨겨 제목 없음처럼 만들지 않는다.
- StatusBar를 벡터나 텍스트로 다시 그리지 않는다.
- raw hex 색이나 Noto 계열 글꼴을 넣지 않는다.

**접근성 (a11y)**
- 이전·닫기·알림 버튼은 화면 맥락에 맞는 접근성 이름을 제공한다.
- 제목 없는 유형에서는 본문의 큰 제목이 화면의 주 제목 역할을 하도록 heading 구조를 유지한다.
- 아이콘 버튼의 실제 터치 영역은 화면 구현에서 최소 44×44를 확보한다.

### Modal

> ⚠️ 배포본에 아직 없는 컴포넌트입니다(codeStatus: `in-progress`). 아래 토큰은 `ui-library/dist` 로 값이 풀리지 않으니 이 절을 보고 구현하지 마세요.

확인 계열 모달 그릇 4종(Break PC|Mobile × Footer Single|Dual). 딤(overlay) 위 공통 팝업 셸 — 제목+본문+푸터의 3층 껍데기. PC는 제목 옆 닫기 버튼과 컴팩트 푸터를 사용하고, Mobile은 닫기 없이 300px 패널과 LG 버튼을 사용한다. 실제 문구는 예시(UX라이팅 영역·컴포넌트 아님).

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
| 닫기(선택) | PC 헤더의 닫기(X) 버튼. 정본 Mobile 변형에는 없다. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | — | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "Modal"
  variantAxes:
    Break:
      - "PC"
      - "Mobile"
    Footer:
      - "Single"
      - "Dual"
  states:
    builder: "not-defined"
    metadata: "unknown"
  behavior:
    platform: "PC"
    source: "registry/components/component-behavior.pc.json ← pages/components.html#modal"
    status: "verified"
    initialState: "closed — root[hidden]"
    events:
      -
        on: "open()"
        target: "modal"
        result: "remove root[hidden], lock background scroll, move focus into the panel, and emit s1:modal:open"
      -
        on: "close()"
        target: "modal"
        result: "set root[hidden], unlock background scroll, restore focus to the element focused before opening, and emit s1:modal:close"
      -
        on: "click"
        target: "close button"
        guard: "PC only — Mobile has no close button in canon"
        result: "close with detail.reason=\"close-button\""
      -
        on: "keydown Escape"
        target: "document while open"
        result: "close with detail.reason=\"escape\""
      -
        on: "keydown Tab"
        target: "document while open"
        result: "cycle focus inside the panel only (focus trap)"
    selection: "not-applicable"
    keyboard: "Escape closes; Tab/Shift+Tab cycle inside the panel and never leave it"
    focus: "focus moves to the first focusable element in the panel on open and returns to the previously focused element on close; focus escaping the panel is pulled back"
    accessibility:
      dialog: "panel carries role=dialog and aria-modal=true"
      name: "aria-labelledby points at [data-s1-part=title]; aria-describedby points at [data-s1-part=message]"
      background: "body scroll is locked while any modal is open and restored when the last one closes"
  geometry:
    common:
      target: "root"
      height: 100
      layoutMode: "VERTICAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "FIXED"
      counterAxisAlignItems: "CENTER"
      paddingTop: "20"
      paddingBottom: "20"
      topLeftRadius: "radius/8"
      topRightRadius: "radius/8"
      bottomLeftRadius: "radius/8"
      bottomRightRadius: "radius/8"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Break: "PC"
        width: 360
        itemSpacing: "32"
        paddingRight: "0"
        paddingLeft: "0"
      -
        when:
          Break: "Mobile"
        width: 300
        itemSpacing: "30"
        paddingRight: "20"
        paddingLeft: "20"
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
      - "border-width/1"
      - "color/button/bg/primary--default"
      - "color/button/bg/secondary--default"
      - "color/button/border/primary--default"
      - "color/button/border/secondary--default"
      - "color/button/label/primary--default"
      - "color/button/label/secondary--default"
      - "color/modal/panel/border"
      - "color/surface/raised"
      - "color/text/body/primary"
      - "color/text/title/primary"
      - "radius/4"
      - "radius/8"
      - "spacing/16"
      - "spacing/8"
    aliasChains: "not-defined"
  figma:
    status: "available"
    identifiers:
      componentSetKey: "(미발행 — 라이브러리 publish 시 기록)"
      fileKey: "cysG5U1udpQqVagYY1hWHW"
      figmaNodeId: "1546:17971"
      sectionNodeId: "1546:18005"
      pageNodeId: "5:5706"
    variants:
      break:
        - "pc"
        - "mobile"
      footer:
        - "single"
        - "dual"
  icons:
    allowed:
      - "ic_닫기 (V2.2 아이콘 라이브러리)"
    slots: "unknown"
```

_Do_
- 제목은 항상 둔다. PC는 닫기 버튼을 포함하고 Mobile은 포함하지 않는다.
- 푸터 버튼은 코어 Button, 아이콘은 V2.2 라이브러리 인스턴스를 재사용한다.
- 모달은 화면(body) 바로 아래에 둔다. 카드·패널 같은 상자 안에 넣으면 상단 고정바 등 일부 요소가 모달 위에 남는다.

_Don't_
- 모달 문구(실제 카피)를 컴포넌트 정본으로 넣지 않는다 — 예시일 뿐(UX라이팅 영역).
- 그릇(제목·본문·푸터 3층) 외 임의 레이아웃을 만들지 않는다.

**접근성 (a11y)**
- 패널을 role=dialog · aria-modal=true 로 표시하고, aria-labelledby 로 제목을, aria-describedby 로 본문을 연결한다.
- 열릴 때 패널 안 첫 초점 요소로 초점을 옮기고, 닫힐 때 열기 전 초점 자리로 되돌린다.
- 열려 있는 동안 Tab·Shift+Tab 은 패널 안에서만 순환한다(초점 가둠). 초점이 밖으로 나가면 패널로 되돌린다.
- Esc 로 닫을 수 있게 한다. PC 는 헤더의 닫기(X) 버튼에 '닫기' 이름을 준다.
- 열려 있는 동안 배경 스크롤을 잠근다. 모달이 여럿이면 마지막 하나가 닫힐 때 되돌린다.

### Modal Content

콘텐츠 계열 모달 그릇 6종(Size MD|LG|XL × Footer Single|Dual). 입력창·표·이미지가 들어가는 큰 팝업. 확인 계열 Modal 과 별개 컴포넌트다(river 결정 2026-07-15 계열 분리). 제목·닫기·푸터 버튼은 확인 계열과 같은 규칙(16B·XXSM h28·close), 크기와 본문 내용물만 다르다.

**언제 쓰나**
- 입력창·표·이미지처럼 확인 계열(짧은 텍스트)보다 큰 본문이 필요할 때.
- Single=알림/설명체 1버튼, Dual=확인/질문체 2버튼(확인 계열과 같은 규칙).

**쓰지 말아야 할 때**
- 짧은 확인 문구 하나면 확인 계열 Modal 을 쓴다.
- 페이지 전체를 차지하는 다단계 폼은 별도 페이지를 고려한다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 딤(overlay) | 뒤 배경을 덮는 color-overlay 딤. 확인 계열과 같은 토큰. |
| 헤더 | 제목(16B) + 닫기(X). 확인 계열과 같은 규칙 — 제목 항상 존재. |
| 본문(content-area) | 입력창·표·이미지 등 콘텐츠가 들어가는 자리. 유일하게 스크롤되는 영역. |
| 본문 자리표시(content) | 회색 박스 + '컨텐츠 영역' 안내문구. 이 자리가 Figma 슬롯('Content')이며 네모칸은 그 기본 내용이다 — 빼고 입력 폼·표·이미지 등 무엇이든 넣는다. 좌우 여백 24 는 슬롯 밖(content-area)에 고정이다. |
| 푸터 | 코어 Button 1개(Single) 또는 2개(Dual), XXSM h28. 확인 계열과 같은 규칙. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | — | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "Modal Content"
  variantAxes:
    Size:
      - "MD"
      - "LG"
      - "XL"
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
      layoutMode: "VERTICAL"
      primaryAxisSizingMode: "FIXED"
      counterAxisSizingMode: "FIXED"
      counterAxisAlignItems: "CENTER"
      itemSpacing: "32"
      paddingTop: "spacing/20"
      paddingBottom: "spacing/20"
      topLeftRadius: "radius/8"
      topRightRadius: "radius/8"
      bottomLeftRadius: "radius/8"
      bottomRightRadius: "radius/8"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Size: "MD"
        width: 520
        height: 336
      -
        when:
          Size: "LG"
        width: 1000
        height: 587
      -
        when:
          Size: "XL"
        width: 1200
        height: 587
  composition:
    mustReuse:
      - "Button"
      - "button"
    mustNotCreate: "not-defined"
    declaredParts:
      - "content"
      - "content-area"
      - "footer"
      - "header"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "border-width/1"
      - "color/bg/level-3"
      - "color/button/bg/primary--default"
      - "color/button/bg/secondary--default"
      - "color/button/border/primary--default"
      - "color/button/border/secondary--default"
      - "color/button/label/primary--default"
      - "color/button/label/secondary--default"
      - "color/modal/panel/border"
      - "color/surface/raised"
      - "color/text/body/tertiary"
      - "color/text/title/primary"
      - "radius/4"
      - "radius/8"
      - "spacing/20"
      - "spacing/24"
      - "spacing/32"
      - "spacing/8"
    aliasChains: "not-defined"
  figma:
    status: "available"
    identifiers:
      componentSetKey: "(미발행)"
      fileKey: "cysG5U1udpQqVagYY1hWHW"
    variants:
      size:
        - "MD"
        - "LG"
        - "XL"
      footer:
        - "single"
        - "dual"
  icons:
    allowed:
      - "close (확인 계열 Modal 과 동일 자산 재사용 — 신규 등록 없음)"
    slots: "unknown"
```

_Do_
- 크기는 MD(520)·LG(1000)·XL(1200) 중에서 고른다 — SM(360)은 확인 계열 폭이라 채택하지 않는다.
- 닫기 아이콘은 확인 계열 Modal 과 같은 close 부품을 재사용한다.
- 본문이 정본 최소 높이를 넘으면 패널이 자라다가 화면 85% 에서 멈추고 그 다음은 본문 안에서만 스크롤한다.

_Don't_
- 본문에 샘플 문장을 넣지 않는다 — 회색 자리표시 박스 + '컨텐츠 영역' 문구만 둔다(river 지시 2026-09-08).
- 확인 계열 Modal 과 그릇을 공유하지 않는다 — 별개 컴포넌트다.
- 패널 폭(520/1000/1200)을 임의로 바꾸지 않는다. 좁은 화면 대응은 max-width 상한만 쓴다.

**접근성 (a11y)**
- 패널을 role=dialog · aria-modal=true 로 표시하고, aria-labelledby 로 제목을 연결한다.
- 열릴 때 패널 안 첫 초점 요소로 초점을 옮기고, 닫힐 때 열기 전 초점 자리로 되돌린다.
- 열려 있는 동안 Tab·Shift+Tab 은 패널 안에서만 순환한다(초점 가둠).
- Esc 로 닫을 수 있게 한다. 헤더의 닫기(X) 버튼에 '닫기' 이름을 준다.
- 열려 있는 동안 배경 스크롤을 잠근다.
- 본문(content-area)은 넘치면 스크롤되며, 키보드로도 스크롤 가능해야 한다(브라우저 기본 스크롤 동작을 막지 않는다).

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
    keyboard: "ArrowLeft/ArrowRight·ArrowUp/ArrowDown move and select among enabled cells; Home/End jump; Enter/Space selects the focused cell"
    focus: "roving tabindex — only the selected cell is in the tab order; disabled cells are skipped"
    accessibility:
      group: "role=radiogroup on the root, role=radio on each cell"
      selectedCell: "aria-checked=true on the selected cell and false on siblings"
      disabledCell: "aria-disabled=true is not selectable and is skipped by arrow keys"
  geometry:
    common:
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "FIXED"
      primaryAxisAlignItems: "CENTER"
      counterAxisAlignItems: "CENTER"
      topLeftRadius: "4"
      topRightRadius: "0"
      bottomLeftRadius: "4"
      bottomRightRadius: "0"
      strokeWeight: "1"
      strokeAlign: "INSIDE"
    variants:
      -
        when:
          Size: "md"
          Selected: "Left"
        target: "position=first, state=selected, size=md"
        height: 44
        paddingRight: "12"
        paddingLeft: "12"
        minWidth: "64"
      -
        when:
          Size: "md"
          Selected:
            - "Center"
            - "Right"
        target: "position=first, state=default, size=md"
        height: 44
        paddingRight: "12"
        paddingLeft: "12"
        minWidth: "64"
      -
        when:
          Size: "sm"
          Selected: "Left"
        target: "position=first, state=selected, size=sm"
        height: 34
        paddingRight: "8"
        paddingLeft: "8"
        minWidth: "56"
      -
        when:
          Size: "sm"
          Selected:
            - "Center"
            - "Right"
        target: "position=first, state=default, size=sm"
        height: 34
        paddingRight: "8"
        paddingLeft: "8"
        minWidth: "56"
  composition:
    mustReuse:
      - "Multi Toggle Element"
    mustNotCreate: "not-defined"
    declaredParts:
      - "Items"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/button/bg/primary--default"
      - "color/button/bg/secondary--default"
      - "color/button/border/primary--default"
      - "color/button/border/secondary--default"
      - "color/button/label/primary--default"
      - "color/button/label/secondary--default"
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

> ⚠️ 배포본에 아직 없는 컴포넌트입니다(codeStatus: `not-started`). 아래 토큰은 `ui-library/dist` 로 값이 풀리지 않으니 이 절을 보고 구현하지 마세요.

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
| default | --color-navigation-bg<br>--color-navigation-label-default<br>--nav-item-default-icon → color-icon-default<br>--color-navigation-indicator-default<br>--nav-divider → color-border-subtle | --color-navigation-bg<br>--nav-item-hover-bg → color-bg-subtle<br>--nav-divider → color-border-subtle | --color-navigation-bg<br>--nav-item-active-bg → color-action-primary-subtle<br>--color-navigation-label-selected<br>--nav-item-active-icon → color-action-primary-default<br>--color-navigation-indicator-selected<br>--nav-divider → color-border-subtle | --color-navigation-bg<br>--nav-divider → color-border-subtle |

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
        chain: "--color-navigation-bg → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--nav-item-hover-bg → --color-bg-subtle"
        status: "unresolved"
      -
        chain: "--nav-item-active-bg → --color-action-primary-subtle"
        status: "unresolved"
      -
        chain: "--color-navigation-label-default → --color-gray-600 → #555555"
        status: "resolved"
      -
        chain: "--color-navigation-label-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--nav-item-default-icon → --color-icon-default"
        status: "unresolved"
      -
        chain: "--nav-item-active-icon → --color-action-primary-default"
        status: "unresolved"
      -
        chain: "--color-navigation-indicator-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-navigation-indicator-default → --color-gray-200 → #D9D9D9"
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
| arrow | --color-pagination-control-bg-default<br>--color-pagination-control-border-default | --color-pagination-control-bg-hover | — | — |
| number | --color-pagination-control-bg-default<br>--color-pagination-control-border-default | --color-pagination-control-bg-hover | — | — |

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
    declaredParts:
      - "pg-first"
      - "pg-last"
      - "pg-next"
      - "pg-num-1"
      - "pg-num-2"
      - "pg-num-3"
      - "pg-num-4"
      - "pg-num-5"
      - "pg-num-6"
      - "pg-prev"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/pagination/control/bg/default"
      - "color/pagination/control/bg/disabled"
      - "color/pagination/control/border/default"
      - "color/pagination/control/border/disabled"
      - "color/pagination/number/default"
      - "color/pagination/number/selected"
    aliasChains:
      -
        chain: "--color-pagination-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-pagination-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-pagination-control-bg-hover → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-gray-400 → #9D9D9D"
        status: "resolved"
      -
        chain: "--color-text-body-primary → --color-gray-800 → #353535"
        status: "resolved"
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

라디오 버튼 컨트롤. 정본 상태는 default·hover·selected·disabled·disabled+selected 다섯이고, 라벨은 정본 Label 축의 선택 부품이다.

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
| 라벨(선택) | 선택 부품. 정본 Label=Off 가 기본이고 On 이면 보기 텍스트가 붙는다(본문 14 Medium, 간격 8). |

| variant | default | hover | selected | disabled |
| --- | --- | --- | --- | --- |
| default | --color-control-bg-default<br>--color-control-border-default | --color-control-bg-hover<br>--color-control-border-default | --color-control-border-selected<br>--color-control-indicator-selected-alt | --color-control-bg-disabled<br>--color-control-border-disabled<br>--color-control-indicator-disabled |

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
        chain: "--color-control-bg-default → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-control-bg-hover → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-control-bg-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--color-control-border-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-control-border-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-control-border-disabled → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-control-indicator-selected-alt → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-control-indicator-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
  figma:
    status: "figma-unconfirmed"
    identifiers: "figma-unconfirmed"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- 같은 그룹의 라디오는 name 으로 묶어 하나만 선택되게 한다(감싸는 fieldset 에 그룹 이름을 준다).
- 원/점 색은 control 토큰을 쓴다.

_Don't_
- 독립 on/off 에 라디오를 쓰지 않는다.
- 라벨 없이 aria-label 을 빠뜨리지 않는다.

**접근성 (a11y)**
- native input[type=radio] 를 같은 name 으로 묶어 역할·선택 상태·화살표 이동을 브라우저가 제공하게 한다.
- 그룹은 fieldset·legend 로 묶어 그룹 이름을 읽히게 한다.
- 라벨이 없으면 aria-label 필수.
- 키보드 초점은 선택 테두리 토큰의 2px 외곽선으로 보이게 한다.

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
| default | --color-dropdown-list-bg<br>--color-dropdown-list-border<br>--color-dropdown-option-label-default | --color-dropdown-option-bg-hover<br>--color-dropdown-list-bg<br>--color-dropdown-list-border | --color-dropdown-list-bg<br>--color-dropdown-list-border | --color-dropdown-option-label-selected<br>--color-dropdown-list-bg<br>--color-dropdown-list-border | --color-dropdown-list-bg<br>--color-dropdown-list-border |

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
        result: "toggle closed ↔ open and keep aria-expanded in sync"
      -
        on: "click"
        target: "option"
        result: "select one option, update the trigger text, mark filled, and close"
      -
        on: "keydown"
        target: "select"
        result: "close on Escape and return focus to the trigger"
      -
        on: "click"
        target: "outside"
        result: "close"
      -
        on: "disable"
        target: "select"
        result: "close and block trigger clicks"
    selection: "single"
    keyboard: "native button on the trigger (Enter/Space); option movement is owned by the Dropdown contract; Escape closes"
    focus: "move focus into the panel on open and return it to the trigger on close"
    accessibility: "aria-haspopup=listbox and aria-expanded on the trigger; aria-selected on the chosen option; filled is exposed as data-filled=true because no ARIA state matches"
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
      - "dropdown"
      - "trigger"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/dropdown/list/bg"
      - "color/dropdown/list/border"
      - "color/dropdown/option/bg/default"
      - "color/dropdown/option/bg/hover"
      - "color/dropdown/option/label/default"
      - "color/dropdown/option/label/hover"
      - "color/dropdown/option/label/selected"
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
        chain: "--color-dropdown-list-bg → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-dropdown-option-bg-hover → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-dropdown-list-border → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-dropdown-option-label-default → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-dropdown-option-label-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-dropdown-option-bg-selected → --color-blue-50 → #E2F1FF"
        status: "resolved"
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

라인탭 컴포넌트. 탭 하단 인디케이터로 선택 상태를 표시한다. 크기·상태·시각 수치는 component-guide-model.json에서 자동으로 가져온다.

**언제 쓰나**
- 같은 화면에서 콘텐츠 영역을 전환할 때.
- 정본에 등록된 플랫폼과 크기 중 사용 맥락에 맞는 항목을 고른다.

**쓰지 말아야 할 때**
- 페이지 이동은 Navigation.
- 상호배타 폼 선택은 Radio.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 탭 라벨 | unselected·selected 텍스트. |
| 인디케이터(밑줄) | 선택 탭 하단 강조 막대. |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | --color-navigation-label-default<br>--color-navigation-indicator-default | — | — | — |

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
    metadata: "unknown"
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
    keyboard: "ArrowLeft/ArrowRight move and select; Home/End jump; Enter/Space native-button activation"
    focus: "roving tabindex — only the selected tab is in the tab order"
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
        chain: "--color-navigation-bg → --color-base-white → #FFFFFF"
        status: "resolved"
      -
        chain: "--color-navigation-label-default → --color-gray-600 → #555555"
        status: "resolved"
      -
        chain: "--color-navigation-label-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-navigation-indicator-default → --color-gray-200 → #D9D9D9"
        status: "resolved"
      -
        chain: "--color-navigation-indicator-selected → --color-blue-400 → #1D6CEB"
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
| header | --color-table-border-default | --color-table-cell-hover | --color-table-cell-selected |
| body | --color-table-border-default | --color-table-cell-hover | --color-table-cell-selected |

#### Agent-readable contract

```yaml
agent:
  component: "Table"
  variantAxes:
    Size:
      - "MD"
      - "SM"
      - "XSM"
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
      -
        when:
          Size: "XSM"
        height: 350
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
      - "color/control/bg/default"
      - "color/control/bg/hover"
      - "color/control/bg/selected"
      - "color/control/border/default"
      - "color/control/border/selected"
      - "color/form-control/bg/default"
      - "color/form-control/border/default"
      - "color/form-control/text/placeholder"
      - "color/pagination/control/bg/default"
      - "color/pagination/control/border/default"
      - "color/pagination/number/default"
      - "color/pagination/number/selected"
      - "color/table/border/default"
      - "color/table/border/strong"
      - "color/table/cell/default"
      - "color/table/cell/hover"
      - "color/table/cell/selected"
      - "color/table/header/bg"
      - "color/text/body/primary"
      - "color/text/body/secondary"
    aliasChains:
      -
        chain: "--color-table-header-bg → --color-gray-0 → #FAFAFA"
        status: "resolved"
      -
        chain: "--color-text-title-secondary → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-table-border-default → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--color-table-border-strong → --color-gray-800 → #353535"
        status: "resolved"
      -
        chain: "--color-table-cell-hover → --color-gray-50 → #F5F5F5"
        status: "resolved"
      -
        chain: "--color-table-cell-selected → --color-blue-50 → #E2F1FF"
        status: "resolved"
      -
        chain: "--color-text-body-primary → --color-gray-800 → #353535"
        status: "resolved"
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
- 열 제목은 th·scope="col" 로 표시해 화면낭독기가 값과 짝지어 읽게 한다.
- 전체 선택 체크박스에는 '전체 선택', 각 행 체크박스에는 그 행을 가리키는 이름을 준다.
- 선택은 native checkbox 의 Tab 이동·Space 조작을 그대로 쓴다. 방향키 격자 이동은 채택하지 않는다(river 결정 2026-09-02).
- 정렬 기능이 범위 밖이라 aria-sort 는 쓰지 않는다(river 결정 2026-09-02).

### Text Button

배경·테두리 없이 글자만 있는 버튼. 구조가 코어 Button 과 전혀 달라(고정 크기·배경·테두리가 전부 없음) 별도 컴포넌트다.

**언제 쓰나**
- 링크에 가까운 가벼운 보조 동작(더보기·자세히 등)을 텍스트만으로 표시할 때.
- Primary 는 강조가 필요한 텍스트 액션, Secondary 는 덜 중요한 텍스트 액션.

**쓰지 말아야 할 때**
- 배경·테두리가 있는 버튼이 필요하면 코어 Button 또는 Assist Button 을 쓴다.
- 페이지 이동 전용 링크는 <a> 를 우선 고려한다.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 라벨 | 버튼 텍스트. body/14M. 배경·테두리 없음(hug). |

| variant | default | hover | pressed | disabled |
| --- | --- | --- | --- | --- |
| default | — | — | — | — |

#### Agent-readable contract

```yaml
agent:
  component: "Text Button"
  variantAxes:
    Variant:
      - "Primary"
      - "Secondary"
    State:
      - "Default"
      - "Hover"
      - "Pressed"
      - "Disabled"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Pressed"
      - "Disabled"
    metadata: "unknown"
  behavior:
    platform: "PC"
    status: "not-defined"
  geometry:
    common:
      target: "root"
      layoutMode: "HORIZONTAL"
      primaryAxisSizingMode: "AUTO"
      counterAxisSizingMode: "AUTO"
      primaryAxisAlignItems: "CENTER"
      counterAxisAlignItems: "CENTER"
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
      - "color/text/body/tertiary"
      - "color/text/state/accent"
      - "color/text/state/disabled"
    aliasChains: "not-defined"
  figma:
    status: "available"
    identifiers:
      componentSetKey: "(미발행)"
      fileKey: "cysG5U1udpQqVagYY1hWHW"
    variants: "figma-unconfirmed"
  icons:
    allowed: "figma-unconfirmed"
    slots: "unknown"
```

_Do_
- Hover·Pressed 는 색을 바꾸지 않고 밑줄만 더한다(원본 그대로).
- 색은 Primary=color/text/state/accent, Secondary=color/text/body/tertiary 만 쓴다.

_Don't_
- 코어 Button 의 variant 로 편입하지 않는다 — 구조(배경·테두리·고정 크기)가 아예 없다.
- 레거시 B m_subbutton(글자+화살표, 모바일)을 임의로 함께 만들지 않는다 — 원본 색이 raw hex 라 색 매핑 결정이 별도로 필요하다(river 결정 2026-09-08 ④, 범위 밖).

**접근성 (a11y)**
- 네이티브 <button type="button"> 를 쓴다.
- 상태는 :hover·:active·[disabled] 로 표현하고 별도 data 상태를 만들지 않는다.
- 포커스 표시는 브라우저 기본값을 그대로 쓴다.

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

| variant | default | focus | filled | disabled | readonly |
| --- | --- | --- | --- | --- | --- |
| default | --color-form-control-bg-default<br>--color-form-control-border-default<br>--color-form-control-text-placeholder<br>--color-text-state-caption | --color-form-control-border-selected<br>--color-form-control-text-placeholder | --color-form-control-text-placeholder | --color-form-control-bg-disabled<br>--color-form-control-border-disabled<br>--color-form-control-text-placeholder<br>--color-form-control-text-disabled | --color-form-control-bg-disabled<br>--color-form-control-border-default<br>--color-form-control-text-placeholder<br>--color-form-control-text-read-only |

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
      - "filled"
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
        target: "control"
        result: "native :focus-within styling; no runtime involved"
      -
        on: "input"
        target: "control"
        result: "native value change; no runtime involved"
    keyboard: "native textarea"
    focus: "native textarea"
    accessibility:
      name: "a label element or aria-label on the control"
      readOnly: "the readonly attribute"
      disabled: "the disabled attribute"
    runtimeNote: "런타임 없음(jsRequired=false). 상태는 전부 네이티브 속성과 CSS 로 성립한다 — 2026-09-02 배포본 이관 후 사이트 인라인 JS 가 사라져 근거를 배포본 원본으로 옮겼다."
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
        chain: "--color-form-control-text-disabled → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--color-form-control-text-read-only → --color-gray-500 → #757575"
        status: "resolved"
      -
        chain: "--color-text-state-caption → --color-gray-500 → #757575"
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
- 라벨과 연결(for/id)하거나 aria-label 로 이름을 준다. 안내·오류 문구는 정본에 아직 없어 이번 웹 배포본에 없다 — 정본에 추가된 뒤 aria-invalid·aria-describedby 로 연결한다.

### TimePicker

시간 입력 트리거를 눌러 드롭다운 목록에서 시간을 고르는 Time Picker Input 컴포넌트.

**언제 쓰나**
- 시간(시/분)을 드롭다운 목록에서 고를 때.

**쓰지 말아야 할 때**
- 날짜는 DatePicker.
- 자유 텍스트만 필요하면 Input.

**구성 (Anatomy)**

| 요소 | 역할 |
| --- | --- |
| 트리거/필드 | 시간 표시 + ic_시계 아이콘. |
| 드롭다운 패널 | 시간 선택 목록. |

| variant | default | hover | focus | filled | disabled |
| --- | --- | --- | --- | --- | --- |
| input | --color-form-control-bg-default → color-surface-default<br>--color-form-control-border-default → color-control-border-default<br>--color-form-control-text-default → color-text-secondary | — | — | — | --color-form-control-bg-disabled → color-bg-subtle<br>--color-form-control-border-disabled → color-border-subtle<br>--color-form-control-text-disabled → color-text-disabled |
| dropdown_panel | --color-form-control-bg-default → color-surface-default<br>--color-form-control-border-default → color-control-border-default<br>--color-form-control-text-default → color-text-secondary | — | — | — | --color-form-control-bg-disabled → color-bg-subtle<br>--color-form-control-border-disabled → color-border-subtle<br>--color-form-control-text-disabled → color-text-disabled |

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
    Type:
      - "24h"
      - "12h"
  states:
    builder:
      - "Default"
      - "Hover"
      - "Focus"
      - "Filled"
      - "Disabled"
    metadata:
      - "default"
      - "hover"
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
      - "tpd"
      - "trigger"
  constraints: "unknown"
  tokens:
    figmaSemanticBindings:
      - "color/dropdown/list/bg"
      - "color/dropdown/list/border"
      - "color/dropdown/option/bg/default"
      - "color/dropdown/option/bg/selected"
      - "color/dropdown/option/label/default"
      - "color/dropdown/option/label/selected"
      - "color/form-control/bg/default"
      - "color/form-control/bg/disabled"
      - "color/form-control/bg/hover"
      - "color/form-control/border/default"
      - "color/form-control/border/disabled"
      - "color/form-control/border/selected"
      - "color/form-control/text/default"
      - "color/form-control/text/disabled"
      - "color/form-control/text/placeholder"
      - "color/line/gray/subtle"
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
- 트리거는 button 이며 aria-haspopup=listbox·aria-expanded 를 가지고, 접근 가능한 이름(aria-label 또는 연결된 label)을 반드시 제공한다.
- 드롭다운의 각 열은 role=listbox 와 접근 이름(시·분·오전오후)을 가지고, 각 칸은 role=option 과 aria-selected 를 가진다.
- 키보드: 트리거에서 Enter·Space·아래화살표로 열고, Esc 로 닫으며 포커스는 트리거로 돌아온다. 위아래 화살표는 같은 열 이동, 좌우 화살표는 열 이동, Enter 는 선택, Tab 으로 확인 버튼에 도달한다.
- 열릴 때 포커스는 현재 선택값(없으면 첫 칸)으로 이동한다.
- disabled 트리거는 열리지 않는다.

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
| default | --color-control-bg-selected<br>--color-control-indicator-selected | --color-control-indicator-unselected<br>--color-control-indicator-selected | --color-control-bg-disabled<br>--color-control-indicator-selected |

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
        chain: "--color-control-bg-selected → --color-blue-400 → #1D6CEB"
        status: "resolved"
      -
        chain: "--color-control-indicator-unselected → --color-gray-300 → #C4C4C4"
        status: "resolved"
      -
        chain: "--color-control-bg-disabled → --color-gray-100 → #E9E9E9"
        status: "resolved"
      -
        chain: "--color-control-indicator-selected → --color-base-white → #FFFFFF"
        status: "resolved"
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

**밀도 (Density) — 크기는 화면에 한 번만 정한다**
- 크기는 컴포넌트마다 고르지 않는다. 화면을 감싸는 요소에 밀도 한 단어와 화면 구분을 한 번만 준다 — data-s1-density="wide|normal|narrow" (넓게 44px · 보통 34px · 좁게 28px) 와 data-s1-break="pc|mobile". 그러면 안쪽 컨트롤이 data-size 없이도 같은 줄 높이로 그려진다.
- 어느 밀도를 쓰나 — 일반 사용자용 폼·상세 화면은 넓게, 관리자 화면·표 안·도구 모음은 보통, 표 칸 안이나 필터 줄처럼 아주 좁은 자리는 좁게. 모바일은 밀도 축이 없다(손가락 기준 높이 하나) — data-s1-break="mobile" 만 준다.
- 한 자리만 다르게 해야 하면 그 컴포넌트에 data-size 를 직접 준다 — 직접 준 값이 밀도보다 우선한다. 밀도가 닿는 컴포넌트와 눈금은 registry/governance/density-policy.json 이 정본이다(상단 바·모달·탭·달력은 자기 눈금을 쓰므로 대상이 아니다).
- 같은 크기 단어가 컴포넌트마다 다른 높이를 뜻한다 — 버튼 md=44 인데 칩 md=34 다. 그래서 "전부 md 로" 는 줄을 어긋나게 만든다. 크기 단어 대신 밀도를 쓴다.
- 밀도 선언은 한 화면에 한 번만 한다. 밀도 선언 안에 또 밀도 선언을 겹치면 안쪽이 이기지 않는다 — 다르게 할 자리는 겹치지 말고 그 컴포넌트에 data-size 를 직접 준다.
- 감싸는 요소의 화면 구분(data-s1-break)을 화면이 떠 있는 동안 바꾸면, 날짜 선택은 그 값을 다시 읽지 않는다 — 바꾼 뒤 다시 초기화한다.
- 모바일에서는 드롭다운 대신 바텀시트를 쓰고, 멀티 토글 대신 라디오(하나 고르기)나 체크박스(여러 개 고르기)를 쓴다 — 이 둘은 모바일 크기가 없다. 라디오·체크박스는 크기 축이 없어 그대로 쓰면 되고, 바텀시트는 승인된 배포본 부품이 있다 — 시트 그릇(bottom-sheet)에 줄(bottom-sheet-option)을 넣어 쓴다(2026-09-15 승인).
- 그 밀도에 맞는 크기가 없는 컴포넌트는 가장 가까운 크기로 대신한다 — 아래를 먼저 쓰고 아래가 없으면 위를 쓴다. 칩은 넓게에서 34, 멀티 토글·표는 좁게에서 34 가 된다.

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
- 화면을 만들 때 컴포넌트마다 크기를 고르지 말고, 감싸는 요소에 data-s1-break 와 data-s1-density 를 한 번만 선언한다(§8 밀도).

**해석 순서 (Resolution)**
- 적용 해석 순서(뒤가 앞을 덮음): core → service(extends core) → role → platform → theme. 기본값: service=core · role=user · platform=web · theme=light.
- 서비스 분기(예: vms 영상관제)는 core 를 상속하고 차이분만 덮는다.

<!-- generated-stamp: ec13038fb1fd · 손편집 금지 -->
