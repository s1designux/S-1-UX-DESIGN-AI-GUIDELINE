// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// expandable-card 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1ExpandableCardSpec {
    val states: List<String> = listOf("closed", "hover", "open")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "closed" to mapOf(
            "root" to S1Box(background = S1Palette.colorBgLevel0, borderColor = S1Palette.colorLineDefault, borderWidth = 1f, radius = 10f),
            "header" to S1Box(background = S1Palette.colorBgLevel0, paddingStart = 19f, paddingEnd = 15f, paddingTop = 15f, paddingBottom = 15f, gap = 10f, durationMs = 180),
            "text" to S1Box(minWidth = 0f, gap = 10f),
            "toggleIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, rotation = 90f, durationMs = 220, icon = "chevron"),
            "panelWrap" to S1Box(opacity = 0f, durationMs = 220),
            "panel" to S1Box(background = S1Palette.colorBgLevel2, minHeight = 0f, paddingStart = 19f, paddingEnd = 15f, gap = 10f, durationMs = 220),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, minHeight = 24f, fontSize = 16f, lineHeight = 1.3f, fontWeight = 700),
            "panelTitle" to S1Box(foreground = S1Palette.colorTextTitlePrimary, fontSize = 16f, lineHeight = 1.3f, fontWeight = 700),
            "subtitle" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, lineHeight = 1.3f, fontWeight = 700),
            "panelSubtitle" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, lineHeight = 1.3f, fontWeight = 700),
            "body" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "panelBody" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "note" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400),
            "panelNote" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400),
            "caption" to S1Box(foreground = S1Palette.colorTextBodyTertiary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400),
            "panelCaption" to S1Box(foreground = S1Palette.colorTextBodyTertiary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400)
        ),
        "hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorBgLevel0, borderColor = S1Palette.colorLineDefault, borderWidth = 1f, radius = 10f),
            "header" to S1Box(background = S1Palette.colorBgLevel1, paddingStart = 19f, paddingEnd = 15f, paddingTop = 15f, paddingBottom = 15f, gap = 10f, durationMs = 180),
            "text" to S1Box(minWidth = 0f, gap = 10f),
            "toggleIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, rotation = 90f, durationMs = 220, icon = "chevron"),
            "panelWrap" to S1Box(opacity = 0f, durationMs = 220),
            "panel" to S1Box(background = S1Palette.colorBgLevel2, minHeight = 0f, paddingStart = 19f, paddingEnd = 15f, gap = 10f, durationMs = 220),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, minHeight = 24f, fontSize = 16f, lineHeight = 1.3f, fontWeight = 700),
            "panelTitle" to S1Box(foreground = S1Palette.colorTextTitlePrimary, fontSize = 16f, lineHeight = 1.3f, fontWeight = 700),
            "subtitle" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, lineHeight = 1.3f, fontWeight = 700),
            "panelSubtitle" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, lineHeight = 1.3f, fontWeight = 700),
            "body" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "panelBody" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "note" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400),
            "panelNote" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400),
            "caption" to S1Box(foreground = S1Palette.colorTextBodyTertiary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400),
            "panelCaption" to S1Box(foreground = S1Palette.colorTextBodyTertiary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400)
        ),
        "open" to mapOf(
            "root" to S1Box(background = S1Palette.colorBgLevel0, borderColor = S1Palette.colorLineDefault, borderWidth = 1f, radius = 10f),
            "header" to S1Box(background = S1Palette.colorBgLevel0, paddingStart = 19f, paddingEnd = 15f, paddingTop = 15f, paddingBottom = 16f, gap = 10f, durationMs = 180),
            "text" to S1Box(minWidth = 0f, gap = 10f),
            "toggleIcon" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, rotation = 90f, scaleX = -1f, durationMs = 220, icon = "chevron"),
            "panelWrap" to S1Box(opacity = 1f, durationMs = 220),
            "panel" to S1Box(background = S1Palette.colorBgLevel2, minHeight = 0f, paddingStart = 19f, paddingEnd = 15f, paddingTop = 16f, paddingBottom = 15f, gap = 10f, durationMs = 220),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, minHeight = 24f, fontSize = 16f, lineHeight = 1.3f, fontWeight = 700),
            "panelTitle" to S1Box(foreground = S1Palette.colorTextTitlePrimary, fontSize = 16f, lineHeight = 1.3f, fontWeight = 700),
            "subtitle" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, lineHeight = 1.3f, fontWeight = 700),
            "panelSubtitle" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, lineHeight = 1.3f, fontWeight = 700),
            "body" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "panelBody" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "note" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400),
            "panelNote" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400),
            "caption" to S1Box(foreground = S1Palette.colorTextBodyTertiary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400),
            "panelCaption" to S1Box(foreground = S1Palette.colorTextBodyTertiary, fontSize = 12f, lineHeight = 1.3f, fontWeight = 400)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "expandable-card")
}
