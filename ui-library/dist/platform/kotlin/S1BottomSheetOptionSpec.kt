// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// bottom-sheet-option 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1BottomSheetOptionSpec {
    val variants: List<String> = listOf("text", "checkbox", "radio", "list")
    val states: List<String> = listOf("default", "selected", "disabled")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "text|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorSurfaceRaised, height = 48f, paddingStart = 20f, paddingEnd = 20f, paddingTop = 8f, paddingBottom = 8f, gap = 8f),
            "label" to S1Box(foreground = S1Palette.colorTextBodyPrimary, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "text|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorSurfaceRaised, height = 48f, paddingStart = 20f, paddingEnd = 20f, paddingTop = 8f, paddingBottom = 8f, gap = 8f, spaceBetween = true),
            "label" to S1Box(foreground = S1Palette.colorTextStateAccent, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "check" to S1Box(background = S1Palette.colorIconBlue, height = 24f, width = 24f, icon = "check24")
        ),
        "text|disabled" to mapOf(
            "root" to S1Box(background = S1Palette.colorSurfaceRaised, height = 48f, paddingStart = 20f, paddingEnd = 20f, paddingTop = 8f, paddingBottom = 8f, gap = 8f),
            "label" to S1Box(foreground = S1Palette.colorTextStateDisabled, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "checkbox|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorSurfaceRaised, height = 48f, paddingStart = 20f, paddingEnd = 20f, paddingTop = 8f, paddingBottom = 8f, gap = 8f),
            "label" to S1Box(foreground = S1Palette.colorTextBodyPrimary, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "checkbox|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorSurfaceRaised, height = 48f, paddingStart = 20f, paddingEnd = 20f, paddingTop = 8f, paddingBottom = 8f, gap = 8f),
            "label" to S1Box(foreground = S1Palette.colorTextBodyPrimary, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "radio|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorSurfaceRaised, height = 48f, paddingStart = 20f, paddingEnd = 20f, paddingTop = 8f, paddingBottom = 8f, gap = 8f),
            "label" to S1Box(foreground = S1Palette.colorTextBodyPrimary, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "radio|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorSurfaceRaised, height = 48f, paddingStart = 20f, paddingEnd = 20f, paddingTop = 8f, paddingBottom = 8f, gap = 8f),
            "label" to S1Box(foreground = S1Palette.colorTextBodyPrimary, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500)
        ),
        "list|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorSurfaceRaised, paddingStart = 20f, paddingEnd = 20f, paddingTop = 12f, paddingBottom = 12f, spaceBetween = true),
            "listLeft" to S1Box(minWidth = 0f, gap = 12f),
            "avatar" to S1Box(background = S1Palette.colorIconGrayLight, radius = 9999f, height = 40f, width = 40f),
            "avatarIcon" to S1Box(background = S1Palette.colorIconWhite, height = 24f, width = 24f, icon = "account"),
            "listText" to S1Box(minWidth = 0f, gap = 2f),
            "listTitle" to S1Box(foreground = S1Palette.colorTextBodyPrimary, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "listSub" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "chevron" to S1Box(background = S1Palette.colorIconGrayDark, height = 24f, width = 24f, icon = "chevron")
        ),
        "list|disabled" to mapOf(
            "root" to S1Box(background = S1Palette.colorSurfaceRaised, paddingStart = 20f, paddingEnd = 20f, paddingTop = 12f, paddingBottom = 12f, spaceBetween = true),
            "listLeft" to S1Box(minWidth = 0f, gap = 12f),
            "avatar" to S1Box(background = S1Palette.colorIconGrayLight, radius = 9999f, height = 40f, width = 40f),
            "avatarIcon" to S1Box(background = S1Palette.colorIconWhite, height = 24f, width = 24f, icon = "account"),
            "listText" to S1Box(minWidth = 0f, gap = 2f),
            "listTitle" to S1Box(foreground = S1Palette.colorTextBodyPrimary, fontSize = 16f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "listSub" to S1Box(foreground = S1Palette.colorTextBodySecondary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "lock" to S1Box(background = S1Palette.colorIconGray, height = 24f, width = 24f, icon = "lock")
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "bottom-sheet-option")
}
