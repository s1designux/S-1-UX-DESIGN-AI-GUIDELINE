// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// tab 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1TabSpec {
    /** sizeBreaks — 승인된 (size, break) 조합만 담는다. */
    val sizeBreaks: List<Pair<String, String>> = listOf("sm" to "mobile")
    val states: List<String> = listOf("default", "hover", "selected")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "sm|mobile|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorNavigationBg),
            "baseline" to S1Box(background = S1Palette.colorNavigationIndicatorDefault, height = 1f, left = 0f, right = 0f),
            "tab" to S1Box(foreground = S1Palette.colorNavigationLabelDefault, height = 32f, minWidth = 76f, paddingStart = 16f, paddingEnd = 16f, paddingBottom = 2f, fontSize = 16f, fontWeight = 500),
            "indicator" to S1Box()
        ),
        "sm|mobile|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorNavigationBg),
            "baseline" to S1Box(background = S1Palette.colorNavigationIndicatorDefault, height = 1f, left = 0f, right = 0f),
            "tab" to S1Box(foreground = S1Palette.colorNavigationLabelHover, height = 32f, minWidth = 76f, paddingStart = 16f, paddingEnd = 16f, paddingBottom = 2f, fontSize = 16f, fontWeight = 500),
            "indicator" to S1Box(background = S1Palette.colorNavigationIndicatorHover, height = 2f, left = 0f, right = 0f)
        ),
        "sm|mobile|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorNavigationBg),
            "baseline" to S1Box(background = S1Palette.colorNavigationIndicatorDefault, height = 1f, left = 0f, right = 0f),
            "tab" to S1Box(foreground = S1Palette.colorNavigationLabelSelected, height = 32f, minWidth = 76f, paddingStart = 16f, paddingEnd = 16f, paddingBottom = 2f, fontSize = 16f, fontWeight = 500),
            "indicator" to S1Box(background = S1Palette.colorNavigationIndicatorSelected, height = 2f, left = 0f, right = 0f)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "tab")
}
