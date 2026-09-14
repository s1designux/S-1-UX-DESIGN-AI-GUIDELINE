// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// select 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1SelectSpec {
    /** sizeBreaks — 승인된 (size, break) 조합만 담는다. */
    val sizeBreaks: List<Pair<String, String>> = listOf("md" to "mobile")
    val states: List<String> = listOf("default", "hover", "filled", "open", "disabled")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "md|mobile|default" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgDefault, foreground = S1Palette.colorFormControlTextPlaceholder, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 16f, paddingEnd = 8f, fontSize = 14f, fontWeight = 400),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconDefault, height = 24f, width = 24f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "md|mobile|hover" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgHover, foreground = S1Palette.colorFormControlTextPlaceholder, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 16f, paddingEnd = 8f, fontSize = 14f, fontWeight = 400),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconHover, height = 24f, width = 24f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "md|mobile|filled" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgDefault, foreground = S1Palette.colorFormControlTextSelected, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 16f, paddingEnd = 8f, fontSize = 14f, fontWeight = 400),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconDefault, height = 24f, width = 24f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "md|mobile|open" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgSelected, foreground = S1Palette.colorFormControlTextPlaceholder, borderColor = S1Palette.colorFormControlBorderSelected, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 16f, paddingEnd = 8f, fontSize = 14f, fontWeight = 400),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconSelected, height = 24f, width = 24f, rotation = -90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        ),
        "md|mobile|disabled" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgDisabled, foreground = S1Palette.colorFormControlTextDisabled, borderColor = S1Palette.colorFormControlBorderDisabled, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 16f, paddingEnd = 8f, fontSize = 14f, fontWeight = 400),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconDisabled, height = 24f, width = 24f, rotation = 90f, icon = "chevron"),
            "panel" to S1Box(marginTop = 8f, left = 0f)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "select")
}
