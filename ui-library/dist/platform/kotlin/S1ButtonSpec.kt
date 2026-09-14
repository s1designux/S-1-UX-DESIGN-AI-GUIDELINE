// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// button 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1ButtonSpec {
    val variants: List<String> = listOf("primary", "secondary", "blue-line")
    val sizes: List<String> = listOf("lg")
    val states: List<String> = listOf("default", "hover", "disabled")
    val breaks: Map<String, List<String>> = mapOf("mobile" to listOf("lg"))

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "primary|lg|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgPrimaryDefault, foreground = S1Palette.colorButtonLabelPrimaryDefault, borderColor = S1Palette.colorButtonBorderPrimaryDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 80f, paddingStart = 16f, paddingEnd = 16f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box(minWidth = 0f)
        ),
        "primary|lg|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgPrimaryHover, foreground = S1Palette.colorButtonLabelPrimaryHover, borderColor = S1Palette.colorButtonBorderPrimaryHover, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 80f, paddingStart = 16f, paddingEnd = 16f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box(minWidth = 0f)
        ),
        "primary|lg|disabled" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgDisabled, foreground = S1Palette.colorButtonLabelDisabled, borderColor = S1Palette.colorButtonBorderDisabled, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 80f, paddingStart = 16f, paddingEnd = 16f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box(minWidth = 0f)
        ),
        "secondary|lg|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgSecondaryDefault, foreground = S1Palette.colorButtonLabelSecondaryDefault, borderColor = S1Palette.colorButtonBorderSecondaryDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 80f, paddingStart = 16f, paddingEnd = 16f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box(minWidth = 0f)
        ),
        "secondary|lg|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgSecondaryHover, foreground = S1Palette.colorButtonLabelSecondaryHover, borderColor = S1Palette.colorButtonBorderSecondaryHover, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 80f, paddingStart = 16f, paddingEnd = 16f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box(minWidth = 0f)
        ),
        "secondary|lg|disabled" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgDisabled, foreground = S1Palette.colorButtonLabelDisabled, borderColor = S1Palette.colorButtonBorderDisabled, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 80f, paddingStart = 16f, paddingEnd = 16f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box(minWidth = 0f)
        ),
        "blue-line|lg|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgBlueLineDefault, foreground = S1Palette.colorButtonLabelBlueLineDefault, borderColor = S1Palette.colorButtonBorderBlueLineDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 80f, paddingStart = 16f, paddingEnd = 16f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box(minWidth = 0f)
        ),
        "blue-line|lg|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgBlueLineHover, foreground = S1Palette.colorButtonLabelBlueLineHover, borderColor = S1Palette.colorButtonBorderBlueLineHover, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 80f, paddingStart = 16f, paddingEnd = 16f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box(minWidth = 0f)
        ),
        "blue-line|lg|disabled" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgDisabled, foreground = S1Palette.colorButtonLabelDisabled, borderColor = S1Palette.colorButtonBorderDisabled, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 80f, paddingStart = 16f, paddingEnd = 16f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box(minWidth = 0f)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "button")
}
