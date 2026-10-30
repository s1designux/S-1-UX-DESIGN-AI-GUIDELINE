# S1 Design System — Swift (SwiftUI · iOS 16+)

> 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.

**배포본 번호 0.28.0** · 2026-10-30 판
이 번호가 최신인지는 디자인가이드 내려받기 화면에서 확인하세요 — 번호가 다르면 새로 받으면 됩니다.
코드에서 볼 때는 `S1Version.version` 을 읽습니다.

**모바일 한 벌만 들어 있습니다.** iPhone 과 iPad 모두 모바일 사양을 씁니다(PC 조합은 없습니다).

## 무엇이 들어 있나

| 파일 | 내용 |
|---|---|
| `Package.swift` | Swift Package 선언(iOS 16+) — 이 폴더가 곧 패키지 `S1DesignSystem` 입니다 |
| `S1Tokens.swift` | 토큰 값 상수(색·크기·숫자) — 라이트/다크 |
| `S1Palette.swift` | 색 하나마다 라이트·다크 한 쌍(504개 토큰 중 색) |
| `S1Style.swift` · `S1IconView.swift` | 표를 화면에 그리는 뼈대(상자·그림자·글자·눌림·아이콘) |
| `S1Icons.swift` | 배포본 아이콘 21개(SVG 경로 그대로) |
| `S1Type.swift` | 이름 붙은 텍스트 스타일 21종 — 정본 타이포와 같은 값 |
| `S1*Spec.swift` | 부품별 **승인 조합 → 최종 값** 표 (배포본 CSS 에서 계산) |
| `S1*.swift` | SwiftUI 부품 23종: button · input · checkbox · radio · toggle · chip · dropdown · select · tab · modal · mobile-header · mobile-bottom-nav · textarea · text-button · assist-button · filter-chip · bottom-sheet-option · bottom-sheet · date-picker · time-picker · expandable-card · divider · data-tag |
| `preview/S1Gallery.swift` | 승인 조합을 한 화면에 늘어놓는 검수 화면(`S1Gallery`) |
| `coverage.json` | 배포본 CSS 의 어느 선언을 읽었는지 기록 |

## 쓰는 법

Xcode 에서 **File ▸ Add Package Dependencies ▸ Add Local…** 로 이 폴더를 고릅니다(또는 폴더째 프로젝트에 넣습니다).

```swift
import S1DesignSystem

struct ContentView: View {
    var body: some View {
        S1Theme(.system, fontFamily: "Pretendard") {
            VStack {
                S1Button(text: "확인", variant: "primary") { }
                S1Text("본문", type: S1Type.body14r, color: S1Palette.colorTextBodyPrimary)
            }
        }
    }
}
```

variant 같은 축은 배포본 허용목록의 값만 받습니다. 없는 조합을 넣으면 그 자리에서 멈추고
쓸 수 있는 조합을 알려 줍니다 — 조용히 다른 모양으로 그리지 않습니다.
고를 것이 하나뿐인 축(크기 등)은 파라미터로 나오지 않습니다.
글자는 낱개 값 대신 이름 붙은 스타일(`S1Type`)로 부릅니다.

### 라이트·다크

색은 라이트·다크 한 쌍이고, 어느 쪽을 쓸지는 화면의 `colorScheme` 이 정합니다.
`S1Theme(.system)` 은 기기 설정을 따르고 `S1Theme(.dark)` · `S1Theme(.light)` 는 그 한쪽으로 고정합니다.

### 시트·모달

- `.s1BottomSheet(isPresented:title:…)` — 아래에서 올라오는 시트(내용 높이만큼). 날짜·시간 선택도 같은 방식으로 올라옵니다.
- `.s1Modal(isPresented:title:message:…)` — 화면 위에 겹치는 모달. **화면 맨 바깥(루트)에 붙이세요.**
- 시스템 시트 없이 그 자리에 그리려면 `S1BottomSheetPanel` · `S1ModalPanel` · `S1DatePickerSheet` · `S1TimePickerSheet` 를 씁니다.

### 하단 내비 아이콘 갈아끼우기

`S1MobileBottomNav` 에 들어 있는 아이콘 네 가지(home·search·notification·settings)는 **예시**입니다.
아이콘 라이브러리에서 받은 그림을 `customIcon`(Image)으로 넣으세요. **받을 때 Solid 변형으로 받습니다.**
색은 그래도 부품이 토큰으로 칠합니다 — 단색 도형을 넣으면 됩니다.

## 접근성

부품마다 `accessibilityLabel`·`accessibilityValue`·트레이트를 registry 의 접근성 메타에 맞게 붙였습니다
(체크박스·라디오는 선택됨/선택 안 됨, 토글은 스위치, 탭·칩·옵션은 선택 상태, 모달·시트는 `isModal`,
입력칸의 지우기·비밀번호 보기·검색 버튼은 이름 부여). 토글·텍스트영역처럼 글자가 없는 부품은
`accessibilityLabel` 파라미터로 이름을 줍니다.

## 서체

정본 서체는 **Pretendard** 입니다. 앱이 폰트 파일을 등록하고(`UIAppFonts` 또는 `CTFontManager`),
테마에 **이름만** 넘깁니다.

```swift
S1Theme(fontFamily: "Pretendard") { ... }
```

넘기지 않으면 기기 기본 서체로 그려집니다(치수는 정본 그대로).

## 동작 명세

부품이 없는 화면을 직접 그릴 때만 `platform/behavior.json` 으로 상태 변화를 맞춥니다.
