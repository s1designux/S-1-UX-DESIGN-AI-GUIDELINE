// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// date-picker 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1DatePickerSpec {
    /** sizeBreaks — 승인된 (size, break) 조합만 담는다. */
    val sizeBreaks: List<Pair<String, String>> = listOf("md" to "mobile")
    val states: List<String> = listOf("default", "hover", "filled", "open", "disabled")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "md|mobile|default" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgDefault, foreground = S1Palette.colorFormControlTextPlaceholder, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 12f, paddingEnd = 12f, gap = 8f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400, spaceBetween = true),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconDefault, height = 24f, width = 24f, icon = "calendar")
        ),
        "md|mobile|hover" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgHover, foreground = S1Palette.colorFormControlTextPlaceholder, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 12f, paddingEnd = 12f, gap = 8f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400, spaceBetween = true),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconDefault, height = 24f, width = 24f, icon = "calendar")
        ),
        "md|mobile|filled" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgDefault, foreground = S1Palette.colorFormControlTextDefault, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 12f, paddingEnd = 12f, gap = 8f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400, spaceBetween = true),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconDefault, height = 24f, width = 24f, icon = "calendar")
        ),
        "md|mobile|open" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgSelected, foreground = S1Palette.colorFormControlTextSelected, borderColor = S1Palette.colorFormControlBorderSelected, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 12f, paddingEnd = 12f, gap = 8f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400, spaceBetween = true),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconSelected, height = 24f, width = 24f, icon = "calendar")
        ),
        "md|mobile|disabled" to mapOf(
            "root" to S1Box(),
            "trigger" to S1Box(background = S1Palette.colorFormControlBgDisabled, foreground = S1Palette.colorFormControlTextDisabled, borderColor = S1Palette.colorFormControlBorderDisabled, borderWidth = 1f, radius = 4f, height = 48f, minWidth = 140f, paddingStart = 12f, paddingEnd = 12f, gap = 8f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400, spaceBetween = true),
            "value" to S1Box(),
            "icon" to S1Box(background = S1Palette.colorFormControlIconDisabled, height = 24f, width = 24f, icon = "calendar")
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "date-picker")

    val sheetBoxes: Map<String, Map<String, S1Box>> = mapOf(
        "default" to mapOf(
            "root" to S1Box(left = 0f, right = 0f, top = 0f),
            "backdrop" to S1Box(background = S1Palette.colorOverlay, left = 0f, right = 0f, top = 0f),
            "panel" to S1Box(background = S1Palette.colorSurfaceRaised, paddingTop = 20f, paddingBottom = 20f, gap = 32f, maxWidth = 360f, maxHeightVh = 92f, radiusTopStart = 8f, radiusTopEnd = 8f),
            "header" to S1Box(paddingStart = 20f, paddingEnd = 20f, spaceBetween = true),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, fontSize = 20f, lineHeight = 1.3f, fontWeight = 700),
            "close" to S1Box(height = 24f, width = 24f),
            "calendarWrap" to S1Box(paddingStart = 24f, paddingEnd = 24f),
            "footer" to S1Box(paddingStart = 20f, paddingEnd = 20f, gap = 8f),
            "apply" to S1Box()
        )
    )

    fun sheetBox(key: String, part: String): S1Box = sheetBoxes.box(key, part, "sheet")

    val calendarBoxes: Map<String, Map<String, S1Box>> = mapOf(
        "date|default" to mapOf(
            "calendar" to S1Box(width = 308f, gap = 16f),
            "header" to S1Box(height = 32f, width = 308f, spaceBetween = true),
            "prev" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "next" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "prevIcon" to S1Box(background = S1Palette.colorDatePickerIconDefault, height = 16f, width = 16f, rotation = 180f, icon = "chevron"),
            "nextIcon" to S1Box(background = S1Palette.colorDatePickerIconDefault, height = 16f, width = 16f, icon = "chevron"),
            "headerLabel" to S1Box(gap = 4f),
            "yearLabel" to S1Box(foreground = S1Palette.colorDatePickerTextPrimary, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700),
            "monthLabel" to S1Box(foreground = S1Palette.colorDatePickerTextPrimary, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "date|hover" to mapOf(
            "calendar" to S1Box(width = 308f, gap = 16f),
            "header" to S1Box(height = 32f, width = 308f, spaceBetween = true),
            "prev" to S1Box(background = S1Palette.colorDatePickerCellBgHover, radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "next" to S1Box(background = S1Palette.colorDatePickerCellBgHover, radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "prevIcon" to S1Box(background = S1Palette.colorDatePickerIconHover, height = 16f, width = 16f, rotation = 180f, icon = "chevron"),
            "nextIcon" to S1Box(background = S1Palette.colorDatePickerIconHover, height = 16f, width = 16f, icon = "chevron"),
            "headerLabel" to S1Box(gap = 4f),
            "yearLabel" to S1Box(foreground = S1Palette.colorDatePickerIconHover, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700),
            "monthLabel" to S1Box(foreground = S1Palette.colorDatePickerIconHover, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "date|disabled" to mapOf(
            "calendar" to S1Box(width = 308f, gap = 16f),
            "header" to S1Box(height = 32f, width = 308f, spaceBetween = true),
            "prev" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "next" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "prevIcon" to S1Box(background = S1Palette.colorDatePickerIconDisabled, height = 16f, width = 16f, rotation = 180f, icon = "chevron"),
            "nextIcon" to S1Box(background = S1Palette.colorDatePickerIconDisabled, height = 16f, width = 16f, icon = "chevron"),
            "headerLabel" to S1Box(gap = 4f),
            "yearLabel" to S1Box(foreground = S1Palette.colorDatePickerTextPrimary, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700),
            "monthLabel" to S1Box(foreground = S1Palette.colorDatePickerTextPrimary, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "year|default" to mapOf(
            "calendar" to S1Box(width = 308f, gap = 20f),
            "header" to S1Box(height = 32f, width = 308f, spaceBetween = true),
            "prev" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "next" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "prevIcon" to S1Box(background = S1Palette.colorDatePickerIconDefault, height = 16f, width = 16f, rotation = 180f, icon = "chevron"),
            "nextIcon" to S1Box(background = S1Palette.colorDatePickerIconDefault, height = 16f, width = 16f, icon = "chevron"),
            "headerLabel" to S1Box(gap = 4f),
            "yearLabel" to S1Box(foreground = S1Palette.colorDatePickerTextPrimary, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "year|hover" to mapOf(
            "calendar" to S1Box(width = 308f, gap = 20f),
            "header" to S1Box(height = 32f, width = 308f, spaceBetween = true),
            "prev" to S1Box(background = S1Palette.colorDatePickerCellBgHover, radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "next" to S1Box(background = S1Palette.colorDatePickerCellBgHover, radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "prevIcon" to S1Box(background = S1Palette.colorDatePickerIconHover, height = 16f, width = 16f, rotation = 180f, icon = "chevron"),
            "nextIcon" to S1Box(background = S1Palette.colorDatePickerIconHover, height = 16f, width = 16f, icon = "chevron"),
            "headerLabel" to S1Box(gap = 4f),
            "yearLabel" to S1Box(foreground = S1Palette.colorDatePickerIconHover, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "year|disabled" to mapOf(
            "calendar" to S1Box(width = 308f, gap = 20f),
            "header" to S1Box(height = 32f, width = 308f, spaceBetween = true),
            "prev" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "next" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "prevIcon" to S1Box(background = S1Palette.colorDatePickerIconDisabled, height = 16f, width = 16f, rotation = 180f, icon = "chevron"),
            "nextIcon" to S1Box(background = S1Palette.colorDatePickerIconDisabled, height = 16f, width = 16f, icon = "chevron"),
            "headerLabel" to S1Box(gap = 4f),
            "yearLabel" to S1Box(foreground = S1Palette.colorDatePickerTextPrimary, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "month|default" to mapOf(
            "calendar" to S1Box(width = 308f, gap = 20f),
            "header" to S1Box(height = 32f, width = 308f, spaceBetween = true),
            "prev" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "next" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "prevIcon" to S1Box(background = S1Palette.colorDatePickerIconDefault, height = 16f, width = 16f, rotation = 180f, icon = "chevron"),
            "nextIcon" to S1Box(background = S1Palette.colorDatePickerIconDefault, height = 16f, width = 16f, icon = "chevron"),
            "headerLabel" to S1Box(gap = 4f),
            "yearLabel" to S1Box(foreground = S1Palette.colorDatePickerTextPrimary, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "month|hover" to mapOf(
            "calendar" to S1Box(width = 308f, gap = 20f),
            "header" to S1Box(height = 32f, width = 308f, spaceBetween = true),
            "prev" to S1Box(background = S1Palette.colorDatePickerCellBgHover, radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "next" to S1Box(background = S1Palette.colorDatePickerCellBgHover, radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "prevIcon" to S1Box(background = S1Palette.colorDatePickerIconHover, height = 16f, width = 16f, rotation = 180f, icon = "chevron"),
            "nextIcon" to S1Box(background = S1Palette.colorDatePickerIconHover, height = 16f, width = 16f, icon = "chevron"),
            "headerLabel" to S1Box(gap = 4f),
            "yearLabel" to S1Box(foreground = S1Palette.colorDatePickerIconHover, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "month|disabled" to mapOf(
            "calendar" to S1Box(width = 308f, gap = 20f),
            "header" to S1Box(height = 32f, width = 308f, spaceBetween = true),
            "prev" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "next" to S1Box(radius = 4f, height = 24f, width = 24f, marginStart = -4f, marginTop = -4f, marginEnd = -4f, marginBottom = -4f),
            "prevIcon" to S1Box(background = S1Palette.colorDatePickerIconDisabled, height = 16f, width = 16f, rotation = 180f, icon = "chevron"),
            "nextIcon" to S1Box(background = S1Palette.colorDatePickerIconDisabled, height = 16f, width = 16f, icon = "chevron"),
            "headerLabel" to S1Box(gap = 4f),
            "yearLabel" to S1Box(foreground = S1Palette.colorDatePickerTextPrimary, fontSize = 24f, lineHeight = 1.3f, fontWeight = 700)
        )
    )

    fun calendarBox(key: String, part: String): S1Box = calendarBoxes.box(key, part, "calendar")

    val weekdayBoxes: Map<String, Map<String, S1Box>> = mapOf(
        "weekday" to mapOf(
            "weekdays" to S1Box(),
            "weekday" to S1Box(foreground = S1Palette.colorDatePickerTextPrimary, height = 44f, width = 44f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "grid" to S1Box(),
            "week" to S1Box()
        ),
        "sunday" to mapOf(
            "weekdays" to S1Box(),
            "weekday" to S1Box(foreground = S1Palette.colorDatePickerTextSunday, height = 44f, width = 44f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "grid" to S1Box(),
            "week" to S1Box()
        ),
        "saturday" to mapOf(
            "weekdays" to S1Box(),
            "weekday" to S1Box(foreground = S1Palette.colorDatePickerTextSaturday, height = 44f, width = 44f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "grid" to S1Box(),
            "week" to S1Box()
        )
    )

    fun weekdayBox(key: String, part: String): S1Box = weekdayBoxes.box(key, part, "weekday")

    val cellBoxes: Map<String, Map<String, S1Box>> = mapOf(
        "weekday|false|default|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSecondary, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|false|default|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSecondary, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|false|today|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|false|today|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|false|selected|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelected, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "weekday|false|selected|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelectedHover, borderColor = S1Palette.colorDatePickerCellBgSelectedHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "weekday|false|disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|false|range-mid|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSecondary, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|false|range-disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|true|default|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextOtherMonth, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|true|default|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextOtherMonth, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|true|today|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|true|today|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|true|selected|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelected, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "weekday|true|selected|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelectedHover, borderColor = S1Palette.colorDatePickerCellBgSelectedHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "weekday|true|disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|true|range-mid|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextOtherMonth, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "weekday|true|range-disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|false|default|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSunday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|false|default|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSunday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|false|today|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|false|today|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|false|selected|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelected, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "sunday|false|selected|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelectedHover, borderColor = S1Palette.colorDatePickerCellBgSelectedHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "sunday|false|disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|false|range-mid|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSunday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|false|range-disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|true|default|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextOtherMonth, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|true|default|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextOtherMonth, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|true|today|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|true|today|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|true|selected|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelected, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "sunday|true|selected|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelectedHover, borderColor = S1Palette.colorDatePickerCellBgSelectedHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "sunday|true|disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|true|range-mid|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextOtherMonth, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "sunday|true|range-disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|false|default|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSaturday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|false|default|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSaturday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|false|today|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|false|today|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|false|selected|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelected, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "saturday|false|selected|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelectedHover, borderColor = S1Palette.colorDatePickerCellBgSelectedHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "saturday|false|disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|false|range-mid|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSaturday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|false|range-disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|true|default|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextOtherMonth, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|true|default|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextOtherMonth, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|true|today|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|true|today|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgHover, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextToday, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|true|selected|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelected, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "saturday|true|selected|hover" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgSelectedHover, borderColor = S1Palette.colorDatePickerCellBgSelectedHover, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextSelected, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 700)
        ),
        "saturday|true|disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgToday, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|true|range-mid|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextOtherMonth, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "saturday|true|range-disabled|rest" to mapOf(
            "cell" to S1Box(height = 44f, width = 44f),
            "cellInner" to S1Box(background = S1Palette.colorDatePickerCellBgRange, borderColor = S1Palette.colorDatePickerCellBgRange, borderWidth = 1f, radius = 9999f, height = 30f, width = 30f),
            "cellNum" to S1Box(foreground = S1Palette.colorDatePickerTextDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        )
    )

    fun cellBox(key: String, part: String): S1Box = cellBoxes.box(key, part, "cell")

    val bandBoxes: Map<String, Map<String, S1Box>> = mapOf(
        "start" to mapOf(
            "band" to S1Box(background = S1Palette.colorDatePickerCellBgRange, height = 30f, left = 22f, right = 0f, top = 7f)
        ),
        "mid" to mapOf(
            "band" to S1Box(background = S1Palette.colorDatePickerCellBgRange, height = 30f, left = 0f, right = 0f, top = 7f)
        ),
        "end" to mapOf(
            "band" to S1Box(background = S1Palette.colorDatePickerCellBgRange, height = 30f, left = 0f, right = 22f, top = 7f)
        )
    )

    fun bandBox(key: String, part: String): S1Box = bandBoxes.box(key, part, "band")

    val tileBoxes: Map<String, Map<String, S1Box>> = mapOf(
        "default" to mapOf(
            "grid" to S1Box(gap = 12f),
            "tileRow" to S1Box(gap = 12f),
            "tile" to S1Box(background = S1Palette.colorDatePickerTileBgDefault, foreground = S1Palette.colorDatePickerTextPrimary, borderColor = S1Palette.colorDatePickerTileBorderDefault, borderWidth = 1f, radius = 4f, height = 56f, width = 88f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "hover" to mapOf(
            "grid" to S1Box(gap = 12f),
            "tileRow" to S1Box(gap = 12f),
            "tile" to S1Box(background = S1Palette.colorDatePickerTileBgHover, foreground = S1Palette.colorDatePickerTextPrimary, borderColor = S1Palette.colorDatePickerTileBorderDefault, borderWidth = 1f, radius = 4f, height = 56f, width = 88f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "selected" to mapOf(
            "grid" to S1Box(gap = 12f),
            "tileRow" to S1Box(gap = 12f),
            "tile" to S1Box(background = S1Palette.colorDatePickerTileBgSelected, foreground = S1Palette.colorDatePickerTextToday, borderColor = S1Palette.colorDatePickerCellBorderToday, borderWidth = 1f, radius = 4f, height = 56f, width = 88f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "disabled" to mapOf(
            "grid" to S1Box(gap = 12f),
            "tileRow" to S1Box(gap = 12f),
            "tile" to S1Box(background = S1Palette.colorDatePickerTileBgDisabled, foreground = S1Palette.colorDatePickerTextDisabled, borderColor = S1Palette.colorDatePickerTileBorderDisabled, borderWidth = 1f, radius = 4f, height = 56f, width = 88f, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        )
    )

    fun tileBox(key: String, part: String): S1Box = tileBoxes.box(key, part, "tile")
}
