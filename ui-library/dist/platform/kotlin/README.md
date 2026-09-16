# S1 Design System — Kotlin (Jetpack Compose)

> 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.

**배포본 번호 0.8.0** · 2026-09-16 판
이 번호가 최신인지는 디자인가이드 내려받기 화면에서 확인하세요 — 번호가 다르면 새로 받으면 됩니다.
코드에서 볼 때는 `S1Version.VERSION` 을 읽습니다.

## 무엇이 들어 있나

| 파일 | 내용 |
|---|---|
| `S1Tokens.kt` | 토큰 값 상수(색·크기·숫자) — 라이트/다크 |
| `S1Palette.kt` | 색 하나마다 라이트·다크 한 쌍 |
| `S1Style.kt` | `S1Box`·`S1Theme`·수식어(그림자·여백·글자) |
| `S1Icons.kt` | 배포본 아이콘을 옮긴 ImageVector |
| `S1*Spec.kt` | 부품별 **승인 조합 → 최종 값** 표 (배포본 CSS 에서 계산) |
| `S1*.kt` | Compose 부품 16종: button · input · checkbox · radio · toggle · chip · dropdown · select · tab · modal · mobile-header · mobile-bottom-nav · textarea · text-button · assist-button · filter-chip |
| `S1Type.kt` | 이름 붙은 텍스트 스타일 — 정본 타이포와 같은 값 |
| `preview/S1Gallery.kt` | 승인 조합을 한 화면에 늘어놓는 검수 화면 |
| `../kotlin-sample/` | Android Studio 로 바로 열어 보는 예제 앱 |

## 쓰는 법

```kotlin
S1Theme(dark = isSystemInDarkTheme()) {
    S1Button(text = "확인", onClick = { }, variant = "primary")
    BasicText(text = "본문", style = S1Type.body14r.textStyle(S1Palette.colorTextBodyPrimary))
}
```

variant 같은 축은 배포본 허용목록의 값만 받는다. 없는 조합을 넣으면 그 자리에서 멈추고
쓸 수 있는 조합을 알려 준다 — 조용히 다른 모양으로 그리지 않는다.
글자는 낱개 값 대신 이름 붙은 스타일(`S1Type`)로 부른다.

### 하단 내비 아이콘 갈아끼우기

`S1MobileBottomNav` 에 들어 있는 아이콘 네 가지(home·search·notification·settings)는 **예시**다.
실제 화면은 칸 구성이 서비스마다 다르므로, 아이콘 라이브러리에서 받은 그림을 `customIcon` 으로 넣는다.
**받을 때 Solid 변형으로 받는다** — 하단 내비는 채운 도형이 기준이고, 한 바 안에서 Line 과 섞이면 칸마다 무게가 달라 보인다.

```kotlin
S1MobileBottomNav(
    label = "내 정보",
    selected = false,
    onClick = { },
    customIcon = ImageVector.vectorResource(R.drawable.ic_my_info)
)
```

색은 그래도 부품이 토큰으로 칠한다 — 단색 도형을 넣으면 된다.

## 서체

정본 서체는 **Pretendard** 다. 안드로이드 폰트 리소스는 앱이 넣고 테마에 넘긴다.

```kotlin
S1Theme(fontFamily = FontFamily(Font(R.font.pretendard_medium))) { ... }
```

넘기지 않으면 기기 기본 서체로 그려진다(글자 모양만 다르고 치수는 정본 그대로다).

## 예제 앱 열기

1. Android Studio 에서 `platform/kotlin-sample` 폴더를 연다.
2. `app` 을 실행하거나, `S1GalleryPreview.kt` 에서 미리보기를 연다.

필요 버전: AGP 8.5.2 · Kotlin 2.0.20 · compileSdk 34 · JDK 17.

## 값이 어디서 오나

`S1*Spec.kt` 의 모든 값은 승인된 웹 배포본 CSS 를 **실제 캐스케이드까지 계산해서** 뽑은 것이다.
사람이 옮겨 적은 값은 없다. 정본이 바뀌면 `npm run ui:build` 한 번으로 이 파일들이 다시 만들어진다.
어떤 CSS 선언이 이 과정에서 읽히지 않았는지는 `platform/kotlin/coverage.json` 에 남는다.
