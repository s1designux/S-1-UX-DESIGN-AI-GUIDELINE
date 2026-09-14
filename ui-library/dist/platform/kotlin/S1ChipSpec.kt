// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// chip 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1ChipSpec {
    val variants: List<String> = listOf("line", "solid")
    /** sizeBreaks — 승인된 (size, break) 조합만 담는다. */
    val sizeBreaks: List<Pair<String, String>> = listOf("sm" to "mobile")
    val states: List<String> = listOf("default", "hover", "selected", "disabled")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "line|sm|mobile|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorChipLineBgDefault, foreground = S1Palette.colorChipLineLabelDefault, borderColor = S1Palette.colorChipLineBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, fontWeight = 500),
            "label" to S1Box()
        ),
        "line|sm|mobile|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorChipLineBgHover, foreground = S1Palette.colorChipLineLabelDefault, borderColor = S1Palette.colorChipLineBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, fontWeight = 500),
            "label" to S1Box()
        ),
        "line|sm|mobile|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorChipLineBgSelected, foreground = S1Palette.colorChipLineLabelSelected, borderColor = S1Palette.colorChipLineBorderSelected, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, fontWeight = 500),
            "label" to S1Box()
        ),
        "line|sm|mobile|disabled" to mapOf(
            "root" to S1Box(background = S1Palette.colorChipLineBgDisabled, foreground = S1Palette.colorChipLineLabelDisabled, borderColor = S1Palette.colorChipLineBorderDisabled, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, fontWeight = 500),
            "label" to S1Box()
        ),
        "solid|sm|mobile|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorChipSolidBgDefault, foreground = S1Palette.colorChipSolidLabelDefault, borderColor = S1Palette.colorChipSolidBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, fontWeight = 500),
            "label" to S1Box()
        ),
        "solid|sm|mobile|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorChipSolidBgHover, foreground = S1Palette.colorChipSolidLabelDefault, borderColor = S1Palette.colorChipSolidBgHover, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, fontWeight = 500),
            "label" to S1Box()
        ),
        "solid|sm|mobile|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorChipSolidBgSelected, foreground = S1Palette.colorChipSolidLabelSelected, borderColor = S1Palette.colorChipSolidBorderSelected, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, fontWeight = 500),
            "label" to S1Box()
        ),
        "solid|sm|mobile|disabled" to mapOf(
            "root" to S1Box(background = S1Palette.colorChipSolidBgDisabled, foreground = S1Palette.colorChipSolidLabelDisabled, borderColor = S1Palette.colorChipSolidBorderDisabled, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, fontWeight = 500),
            "label" to S1Box()
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "chip")
}
