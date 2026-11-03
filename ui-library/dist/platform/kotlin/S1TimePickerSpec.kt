// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// time-picker 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1TimePickerSpec {
    /** sizeBreaks — 승인된 (size, break) 조합만 담는다. */
    val sizeBreaks: List<Pair<String, String>> = listOf("md" to "mobile")
    val states: List<String> = listOf("default", "hover", "focus", "filled", "disabled")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "md|mobile|default" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgDefault, foreground = S1Palette.colorFormControlTextPlaceholder, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 12f, paddingEnd = 12f, gap = 8f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400, spaceBetween = true),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconDefault, height = 24f, width = 24f, icon = "clock")
        ),
        "md|mobile|hover" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgHover, foreground = S1Palette.colorFormControlTextPlaceholder, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 12f, paddingEnd = 12f, gap = 8f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400, spaceBetween = true),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconHover, height = 24f, width = 24f, icon = "clock")
        ),
        "md|mobile|focus" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgDefault, foreground = S1Palette.colorFormControlTextPlaceholder, borderColor = S1Palette.colorFormControlBorderSelected, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 12f, paddingEnd = 12f, gap = 8f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400, spaceBetween = true),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconSelected, height = 24f, width = 24f, icon = "clock")
        ),
        "md|mobile|filled" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgDefault, foreground = S1Palette.colorFormControlTextDefault, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 12f, paddingEnd = 12f, gap = 8f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400, spaceBetween = true),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconDefault, height = 24f, width = 24f, icon = "clock")
        ),
        "md|mobile|disabled" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgDisabled, foreground = S1Palette.colorFormControlTextDisabled, borderColor = S1Palette.colorFormControlBorderDisabled, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 12f, paddingEnd = 12f, gap = 8f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400, spaceBetween = true),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconDisabled, height = 24f, width = 24f, icon = "clock")
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "time-picker")

    val sheetBoxes: Map<String, Map<String, S1Box>> = mapOf(
        "time-only" to mapOf(
            "root" to S1Box(left = 0f, right = 0f, top = 0f),
            "backdrop" to S1Box(background = S1Palette.colorOverlay, left = 0f, right = 0f, top = 0f),
            "panel" to S1Box(background = S1Palette.colorSurfaceRaised, paddingTop = 20f, paddingBottom = 20f, gap = 32f, maxWidth = 360f, maxHeightVh = 92f, radiusTopStart = 8f, radiusTopEnd = 8f),
            "header" to S1Box(paddingStart = 20f, paddingEnd = 20f, spaceBetween = true),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, fontSize = 20f, lineHeight = 1.3f, fontWeight = 700),
            "close" to S1Box(height = 24f, width = 24f),
            "footer" to S1Box(paddingStart = 20f, paddingEnd = 20f, gap = 8f),
            "apply" to S1Box()
        ),
        "date-time" to mapOf(
            "root" to S1Box(left = 0f, right = 0f, top = 0f),
            "backdrop" to S1Box(background = S1Palette.colorOverlay, left = 0f, right = 0f, top = 0f),
            "panel" to S1Box(background = S1Palette.colorSurfaceRaised, paddingTop = 20f, paddingBottom = 20f, gap = 32f, maxWidth = 360f, maxHeightVh = 92f, radiusTopStart = 8f, radiusTopEnd = 8f),
            "header" to S1Box(paddingStart = 20f, paddingEnd = 20f, spaceBetween = true),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, fontSize = 20f, lineHeight = 1.3f, fontWeight = 700),
            "close" to S1Box(height = 24f, width = 24f),
            "footer" to S1Box(paddingStart = 20f, paddingEnd = 20f, gap = 8f),
            "apply" to S1Box(),
            "tabs" to S1Box(paddingStart = 24f, paddingEnd = 24f),
            "datePanel" to S1Box(paddingStart = 24f, paddingEnd = 24f),
            "datePanelNote" to S1Box()
        )
    )

    fun sheetBox(key: String, part: String): S1Box = sheetBoxes.box(key, part, "sheet")

    val wheelBoxes: Map<String, Map<String, S1Box>> = mapOf(
        "12h" to mapOf(
            "wheel" to S1Box(height = 270f, paddingStart = 24f, paddingEnd = 24f, gap = 32f),
            "colHour" to S1Box(width = 40f, paddingTop = 114f, paddingBottom = 114f, gap = 32f, marginStart = 4f),
            "colColon" to S1Box(width = 8f),
            "colMinute" to S1Box(width = 40f, paddingTop = 114f, paddingBottom = 114f, gap = 32f),
            "cell" to S1Box(foreground = S1Palette.colorTextStateAccent, fontSize = 32f, lineHeight = 1.3f, flexBasis = 42f, fontWeight = 400),
            "colonCell" to S1Box(foreground = S1Palette.colorTextStateAccent, fontSize = 32f, lineHeight = 1.3f, fontWeight = 400),
            "fadeTop" to S1Box(height = 110f, left = 0f, right = 0f, top = 0f, gradient = listOf(S1GradientStop(0f, S1Palette.colorOverlayWheelFade, 0.9f), S1GradientStop(0.25f, S1Palette.colorOverlayWheelFade, 0.9f), S1GradientStop(0.65f, S1Palette.colorOverlayWheelFade, 0.7f), S1GradientStop(1f, null, 0f))),
            "fadeBottom" to S1Box(height = 110f, left = 0f, right = 0f, gradient = listOf(S1GradientStop(0f, null, 0f), S1GradientStop(0.35f, S1Palette.colorOverlayWheelFade, 0.7f), S1GradientStop(0.75f, S1Palette.colorOverlayWheelFade, 0.9f), S1GradientStop(1f, S1Palette.colorOverlayWheelFade, 0.9f))),
            "colAmpm" to S1Box(width = 56f, paddingTop = 114f, paddingBottom = 114f, gap = 32f)
        ),
        "24h" to mapOf(
            "wheel" to S1Box(height = 270f, paddingStart = 24f, paddingEnd = 24f, gap = 32f),
            "colHour" to S1Box(width = 40f, paddingTop = 114f, paddingBottom = 114f, gap = 32f),
            "colColon" to S1Box(width = 8f),
            "colMinute" to S1Box(width = 40f, paddingTop = 114f, paddingBottom = 114f, gap = 32f),
            "cell" to S1Box(foreground = S1Palette.colorTextStateAccent, fontSize = 32f, lineHeight = 1.3f, flexBasis = 42f, fontWeight = 400),
            "colonCell" to S1Box(foreground = S1Palette.colorTextStateAccent, fontSize = 32f, lineHeight = 1.3f, fontWeight = 400),
            "fadeTop" to S1Box(height = 110f, left = 0f, right = 0f, top = 0f, gradient = listOf(S1GradientStop(0f, S1Palette.colorOverlayWheelFade, 0.9f), S1GradientStop(0.25f, S1Palette.colorOverlayWheelFade, 0.9f), S1GradientStop(0.65f, S1Palette.colorOverlayWheelFade, 0.7f), S1GradientStop(1f, null, 0f))),
            "fadeBottom" to S1Box(height = 110f, left = 0f, right = 0f, gradient = listOf(S1GradientStop(0f, null, 0f), S1GradientStop(0.35f, S1Palette.colorOverlayWheelFade, 0.7f), S1GradientStop(0.75f, S1Palette.colorOverlayWheelFade, 0.9f), S1GradientStop(1f, S1Palette.colorOverlayWheelFade, 0.9f)))
        )
    )

    fun wheelBox(key: String, part: String): S1Box = wheelBoxes.box(key, part, "wheel")
}
