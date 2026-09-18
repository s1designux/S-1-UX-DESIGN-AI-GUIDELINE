# Kotlin (Jetpack Compose) 로 만들 때

## 1. 이 판은 모바일입니다

Kotlin 배포본은 안드로이드 화면을 위한 것입니다. 매체는 `mobile` 로 잡고 `ai/rules/platform.mobile.md` 를 읽습니다.

**모바일 동작 계약은 아직 없습니다.** 여닫기·제스처 동작이 필요하면 추측하지 말고 무엇이 비어 있는지 밝히고 물어보세요.

## 2. 배포본을 씁니다

`ui-library/dist/platform/kotlin/` 안의 파일이 정본입니다.

| 파일 | 내용 |
| --- | --- |
| `S1Tokens.kt` | 토큰 값 상수 (라이트·다크) |
| `S1Palette.kt` | 색 하나마다 라이트·다크 한 쌍 |
| `S1*Spec.kt` | 부품별 승인 조합 → 최종 값 표 |
| `S1*.kt` | Compose 부품 |
| `S1Type.kt` | 이름 붙은 텍스트 스타일 |

```kotlin
S1Theme(dark = isSystemInDarkTheme()) {
    S1Button(text = "확인", onClick = { }, variant = "primary")
}
```

## 3. 하지 말 것

- `Color(0xFF0072CE)` 처럼 색을 직접 쓰기 → `S1Palette` 를 거칩니다
- `Modifier.padding(13.dp)` 처럼 임의 숫자 → `S1Tokens` 의 간격 상수
- `S1Button` 이 있는데 `Button` 으로 새로 만들기
- `S1*Spec.kt` 에 없는 variant·size 조합 쓰기

## 4. 검수

```bash
node ai/check/s1-check.mjs <만든폴더> --platform mobile --stack kotlin --report 판정표.html
```

Kotlin 파일에서는 색 직접 쓰기와 없는 토큰 이름을 검사합니다. 부품 조합 검사는 마크업(HTML·JSX·Vue)에서만 동작합니다.
