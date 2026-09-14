// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// filter-chip 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1FilterChipSpec {
    val variants: List<String> = listOf("line", "solid")
    /** sizeBreaks — 승인된 (size, break) 조합만 담는다. */
    val sizeBreaks: List<Pair<String, String>> = listOf("md" to "mobile")
    val titles: List<String> = listOf("on", "off")
    val states: List<String> = listOf("default", "hover", "selected", "complete", "disabled")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "line|md|mobile|on|default" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipLineBgDefault, foreground = S1Palette.colorChipLineLabelDefault, borderColor = S1Palette.colorChipLineBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(foreground = S1Palette.colorChipLineLabelSelected),
            "icon" to S1Box(background = S1Palette.colorChipLineIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f),
            "title" to S1Box()
        ),
        "line|md|mobile|on|hover" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipLineBgHover, foreground = S1Palette.colorChipLineLabelDefault, borderColor = S1Palette.colorChipLineBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(foreground = S1Palette.colorChipLineLabelSelected),
            "icon" to S1Box(background = S1Palette.colorChipLineIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f),
            "title" to S1Box()
        ),
        "line|md|mobile|on|selected" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipLineBgSelected, foreground = S1Palette.colorChipLineLabelDefault, borderColor = S1Palette.colorChipLineBorderSelected, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(foreground = S1Palette.colorChipLineLabelSelected),
            "icon" to S1Box(background = S1Palette.colorChipLineIconDefault, height = 20f, width = 20f, rotation = -90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f),
            "title" to S1Box()
        ),
        "line|md|mobile|on|complete" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipLineBgDefault, foreground = S1Palette.colorChipLineLabelDefault, borderColor = S1Palette.colorChipLineBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(foreground = S1Palette.colorChipLineLabelSelected),
            "icon" to S1Box(background = S1Palette.colorChipLineIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f),
            "title" to S1Box()
        ),
        "line|md|mobile|on|disabled" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipLineBgDisabled, foreground = S1Palette.colorChipLineLabelDisabled, borderColor = S1Palette.colorChipLineBorderDisabled, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(foreground = S1Palette.colorChipLineLabelDisabled),
            "icon" to S1Box(background = S1Palette.colorChipLineIconDisabled, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f),
            "title" to S1Box()
        ),
        "line|md|mobile|off|default" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipLineBgDefault, foreground = S1Palette.colorChipLineLabelDefault, borderColor = S1Palette.colorChipLineBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipLineIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "line|md|mobile|off|hover" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipLineBgHover, foreground = S1Palette.colorChipLineLabelDefault, borderColor = S1Palette.colorChipLineBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipLineIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "line|md|mobile|off|selected" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipLineBgSelected, foreground = S1Palette.colorChipLineLabelDefault, borderColor = S1Palette.colorChipLineBorderSelected, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipLineIconDefault, height = 20f, width = 20f, rotation = -90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "line|md|mobile|off|complete" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipLineBgDefault, foreground = S1Palette.colorChipLineLabelDefault, borderColor = S1Palette.colorChipLineBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipLineIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "line|md|mobile|off|disabled" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipLineBgDisabled, foreground = S1Palette.colorChipLineLabelDisabled, borderColor = S1Palette.colorChipLineBorderDisabled, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipLineIconDisabled, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "solid|md|mobile|on|default" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipSolidBgDefault, foreground = S1Palette.colorChipSolidLabelDefault, borderColor = S1Palette.colorChipSolidBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipSolidIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f),
            "title" to S1Box()
        ),
        "solid|md|mobile|on|hover" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipSolidBgHover, foreground = S1Palette.colorChipSolidLabelDefault, borderColor = S1Palette.colorChipSolidBgHover, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipSolidIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f),
            "title" to S1Box()
        ),
        "solid|md|mobile|on|selected" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipSolidBgSelected, foreground = S1Palette.colorChipSolidLabelSelected, borderColor = S1Palette.colorChipSolidBorderSelected, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipSolidIconSelected, height = 20f, width = 20f, rotation = -90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f),
            "title" to S1Box()
        ),
        "solid|md|mobile|on|complete" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipSolidBgDefault, foreground = S1Palette.colorChipSolidLabelDefault, borderColor = S1Palette.colorChipSolidBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipSolidIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f),
            "title" to S1Box()
        ),
        "solid|md|mobile|on|disabled" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipSolidBgDisabled, foreground = S1Palette.colorChipSolidLabelDisabled, borderColor = S1Palette.colorChipSolidBorderDisabled, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipSolidIconDisabled, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f),
            "title" to S1Box()
        ),
        "solid|md|mobile|off|default" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipSolidBgDefault, foreground = S1Palette.colorChipSolidLabelDefault, borderColor = S1Palette.colorChipSolidBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipSolidIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "solid|md|mobile|off|hover" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipSolidBgHover, foreground = S1Palette.colorChipSolidLabelDefault, borderColor = S1Palette.colorChipSolidBgHover, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipSolidIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "solid|md|mobile|off|selected" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipSolidBgSelected, foreground = S1Palette.colorChipSolidLabelSelected, borderColor = S1Palette.colorChipSolidBorderSelected, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipSolidIconSelected, height = 20f, width = 20f, rotation = -90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "solid|md|mobile|off|complete" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipSolidBgDefault, foreground = S1Palette.colorChipSolidLabelDefault, borderColor = S1Palette.colorChipSolidBorderDefault, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipSolidIconDefault, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "solid|md|mobile|off|disabled" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorChipSolidBgDisabled, foreground = S1Palette.colorChipSolidLabelDisabled, borderColor = S1Palette.colorChipSolidBorderDisabled, borderWidth = 1f, radius = 9999f, height = 30f, paddingStart = 12f, paddingEnd = 6f, gap = 4f, fontSize = 14f, fontWeight = 500),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorChipSolidIconDisabled, height = 20f, width = 20f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "filter-chip")
}
