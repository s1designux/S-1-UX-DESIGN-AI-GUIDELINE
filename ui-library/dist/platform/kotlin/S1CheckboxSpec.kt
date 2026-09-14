// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// checkbox 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1CheckboxSpec {
    val states: List<String> = listOf("default", "hover", "checked", "disabled", "disabledChecked")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "default" to mapOf(
            "root" to S1Box(gap = 8f),
            "control" to S1Box(background = S1Palette.colorControlBgDefault, foreground = S1Palette.colorControlIndicatorSelected, borderColor = S1Palette.colorControlBorderDefault, borderWidth = 1f, radius = 2f, height = 18f, width = 18f),
            "indicator" to S1Box(),
            "label" to S1Box(foreground = S1Palette.colorControlLabelDefault, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "hover" to mapOf(
            "root" to S1Box(gap = 8f),
            "control" to S1Box(background = S1Palette.colorControlBgHover, foreground = S1Palette.colorControlIndicatorSelected, borderColor = S1Palette.colorControlBorderDefault, borderWidth = 1f, radius = 2f, height = 18f, width = 18f),
            "indicator" to S1Box(),
            "label" to S1Box(foreground = S1Palette.colorControlLabelDefault, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "checked" to mapOf(
            "root" to S1Box(gap = 8f),
            "control" to S1Box(background = S1Palette.colorControlBgSelected, foreground = S1Palette.colorControlIndicatorSelected, borderColor = S1Palette.colorControlBorderSelected, borderWidth = 1f, radius = 2f, height = 18f, width = 18f),
            "indicator" to S1Box(backgroundInherit = true, height = 16f, width = 16f, icon = "check"),
            "label" to S1Box(foreground = S1Palette.colorControlLabelDefault, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "disabled" to mapOf(
            "root" to S1Box(gap = 8f),
            "control" to S1Box(background = S1Palette.colorControlBgDisabled, foreground = S1Palette.colorControlIndicatorSelected, borderColor = S1Palette.colorControlBorderDisabled, borderWidth = 1f, radius = 2f, height = 18f, width = 18f),
            "indicator" to S1Box(),
            "label" to S1Box(foreground = S1Palette.colorControlLabelDisabled, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "disabledChecked" to mapOf(
            "root" to S1Box(gap = 8f),
            "control" to S1Box(background = S1Palette.colorControlBgDisabled, foreground = S1Palette.colorControlIndicatorDisabled, borderColor = S1Palette.colorControlBorderDisabled, borderWidth = 1f, radius = 2f, height = 18f, width = 18f),
            "indicator" to S1Box(backgroundInherit = true, height = 16f, width = 16f, icon = "check"),
            "label" to S1Box(foreground = S1Palette.colorControlLabelDisabled, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "checkbox")
}
