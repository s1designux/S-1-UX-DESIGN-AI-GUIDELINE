// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// mobile-header 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1MobileHeaderSpec {
    val variants: List<String> = listOf("home-title", "home-title-subtitle", "standard-title", "standard-title-close", "standard-no-title", "standard-no-title-close")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "home-title" to mapOf(
            "root" to S1Box(background = S1Palette.colorBgHome, height = 56f, paddingStart = 20f, paddingEnd = 16f, paddingTop = 12f, paddingBottom = 12f),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, minWidth = 0f, fontSize = 18f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "home-title-subtitle" to mapOf(
            "root" to S1Box(background = S1Palette.colorBgHome, height = 56f, paddingStart = 20f, paddingEnd = 16f, paddingTop = 6f, paddingBottom = 6f),
            "stack" to S1Box(minWidth = 0f, gap = 2f),
            "titleRow" to S1Box(gap = 4f),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, minWidth = 0f, fontSize = 18f, lineHeight = 1.3f, fontWeight = 700),
            "arrowIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, rotation = 90f, icon = "mobile-header-arrow-down"),
            "subtitle" to S1Box(foreground = S1Palette.colorTextBodyTertiary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "notification" to S1Box(height = 32f, width = 32f),
            "notificationIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, icon = "mobile-header-notification"),
            "notificationDot" to S1Box(background = S1Palette.colorIconRed, left = 0f, right = 0f, icon = "mobile-header-notification-accent"),
            "notificationHit" to S1Box(left = -6f, right = -6f)
        ),
        "standard-title" to mapOf(
            "root" to S1Box(background = S1Palette.colorBgLevel0, height = 56f, paddingStart = 16f, paddingEnd = 16f, paddingTop = 12f, paddingBottom = 12f, gap = 8f),
            "back" to S1Box(height = 32f, width = 32f),
            "backIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, icon = "mobile-header-back"),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, minWidth = 0f, fontSize = 18f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "spacer" to S1Box(height = 32f, width = 32f),
            "backHit" to S1Box(left = -6f, right = -6f)
        ),
        "standard-title-close" to mapOf(
            "root" to S1Box(background = S1Palette.colorBgLevel0, height = 56f, paddingStart = 16f, paddingEnd = 16f, paddingTop = 12f, paddingBottom = 12f, gap = 8f),
            "back" to S1Box(height = 32f, width = 32f),
            "backIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, icon = "mobile-header-back"),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, minWidth = 0f, fontSize = 18f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "close" to S1Box(height = 32f, width = 32f),
            "closeIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, icon = "mobile-header-close"),
            "backHit" to S1Box(left = -6f, right = -6f),
            "closeHit" to S1Box(left = -6f, right = -6f)
        ),
        "standard-no-title" to mapOf(
            "root" to S1Box(background = S1Palette.colorBgLevel0, height = 56f, paddingStart = 16f, paddingEnd = 16f, paddingTop = 12f, paddingBottom = 12f, gap = 8f),
            "back" to S1Box(height = 32f, width = 32f),
            "backIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, icon = "mobile-header-back"),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, height = 24f, minWidth = 0f, fontSize = 18f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "spacer" to S1Box(height = 32f, width = 32f),
            "backHit" to S1Box(left = -6f, right = -6f)
        ),
        "standard-no-title-close" to mapOf(
            "root" to S1Box(background = S1Palette.colorBgLevel0, height = 56f, paddingStart = 16f, paddingEnd = 16f, paddingTop = 12f, paddingBottom = 12f, gap = 8f),
            "back" to S1Box(height = 32f, width = 32f),
            "backIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, icon = "mobile-header-back"),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, height = 24f, minWidth = 0f, fontSize = 18f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "close" to S1Box(height = 32f, width = 32f),
            "closeIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, icon = "mobile-header-close"),
            "backHit" to S1Box(left = -6f, right = -6f),
            "closeHit" to S1Box(left = -6f, right = -6f)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "mobile-header")
}
