// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// mobile-bottom-nav 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1MobileBottomNavSpec {
    val variants: List<String> = listOf("home", "search", "notification", "settings")
    val states: List<String> = listOf("unselected", "selected")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "home|unselected" to mapOf(
            "root" to S1Box(height = 60f, width = 60f, gap = 4f),
            "icon" to S1Box(background = S1Palette.colorIconGray, height = 32f, width = 32f, icon = "mobile-nav-home"),
            "label" to S1Box(foreground = S1Palette.colorNavigationLabelDefault, fontSize = 12f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "home|selected" to mapOf(
            "root" to S1Box(height = 60f, width = 60f, gap = 4f),
            "icon" to S1Box(background = S1Palette.colorIconBlue, height = 32f, width = 32f, icon = "mobile-nav-home"),
            "label" to S1Box(foreground = S1Palette.colorNavigationLabelSelected, fontSize = 12f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "search|unselected" to mapOf(
            "root" to S1Box(height = 60f, width = 60f, gap = 4f),
            "icon" to S1Box(background = S1Palette.colorIconGray, height = 32f, width = 32f, icon = "nav-search"),
            "label" to S1Box(foreground = S1Palette.colorNavigationLabelDefault, fontSize = 12f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "search|selected" to mapOf(
            "root" to S1Box(height = 60f, width = 60f, gap = 4f),
            "icon" to S1Box(background = S1Palette.colorIconBlue, height = 32f, width = 32f, icon = "nav-search"),
            "label" to S1Box(foreground = S1Palette.colorNavigationLabelSelected, fontSize = 12f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "notification|unselected" to mapOf(
            "root" to S1Box(height = 60f, width = 60f, gap = 4f),
            "icon" to S1Box(background = S1Palette.colorIconGray, height = 32f, width = 32f, icon = "nav-notification"),
            "label" to S1Box(foreground = S1Palette.colorNavigationLabelDefault, fontSize = 12f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "notification|selected" to mapOf(
            "root" to S1Box(height = 60f, width = 60f, gap = 4f),
            "icon" to S1Box(background = S1Palette.colorIconBlue, height = 32f, width = 32f, icon = "nav-notification"),
            "label" to S1Box(foreground = S1Palette.colorNavigationLabelSelected, fontSize = 12f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "settings|unselected" to mapOf(
            "root" to S1Box(height = 60f, width = 60f, gap = 4f),
            "icon" to S1Box(background = S1Palette.colorIconGray, height = 32f, width = 32f, icon = "nav-settings"),
            "label" to S1Box(foreground = S1Palette.colorNavigationLabelDefault, fontSize = 12f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "settings|selected" to mapOf(
            "root" to S1Box(height = 60f, width = 60f, gap = 4f),
            "icon" to S1Box(background = S1Palette.colorIconBlue, height = 32f, width = 32f, icon = "nav-settings"),
            "label" to S1Box(foreground = S1Palette.colorNavigationLabelSelected, fontSize = 12f, lineHeight = 1.3f, fontWeight = 500)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "mobile-bottom-nav")
}
