// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// bottom-sheet 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1BottomSheetSpec {
    val footers: List<String> = listOf("none", "single", "dual")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "none" to mapOf(
            "root" to S1Box(left = 0f, right = 0f, top = 0f),
            "backdrop" to S1Box(background = S1Palette.colorOverlay, left = 0f, right = 0f, top = 0f),
            "panel" to S1Box(background = S1Palette.colorSurfaceRaised, paddingTop = 20f, paddingBottom = 40f, gap = 48f, maxWidth = 360f, maxHeightVh = 92f, radiusTopStart = 8f, radiusTopEnd = 8f, shadow = listOf(S1Shadow(0f, -4f, 16f, 0f, 0x26000000))),
            "content" to S1Box(gap = 24f),
            "header" to S1Box(paddingStart = 20f, paddingEnd = 20f, spaceBetween = true),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, fontSize = 20f, lineHeight = 1.3f, fontWeight = 700),
            "close" to S1Box(height = 24f, width = 24f),
            "body" to S1Box()
        ),
        "single" to mapOf(
            "root" to S1Box(left = 0f, right = 0f, top = 0f),
            "backdrop" to S1Box(background = S1Palette.colorOverlay, left = 0f, right = 0f, top = 0f),
            "panel" to S1Box(background = S1Palette.colorSurfaceRaised, paddingTop = 20f, paddingBottom = 20f, gap = 48f, maxWidth = 360f, maxHeightVh = 92f, radiusTopStart = 8f, radiusTopEnd = 8f, shadow = listOf(S1Shadow(0f, -4f, 16f, 0f, 0x26000000))),
            "content" to S1Box(gap = 24f),
            "header" to S1Box(paddingStart = 20f, paddingEnd = 20f, spaceBetween = true),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, fontSize = 20f, lineHeight = 1.3f, fontWeight = 700),
            "close" to S1Box(height = 24f, width = 24f),
            "body" to S1Box(),
            "footer" to S1Box(paddingStart = 20f, paddingEnd = 20f, gap = 8f)
        ),
        "dual" to mapOf(
            "root" to S1Box(left = 0f, right = 0f, top = 0f),
            "backdrop" to S1Box(background = S1Palette.colorOverlay, left = 0f, right = 0f, top = 0f),
            "panel" to S1Box(background = S1Palette.colorSurfaceRaised, paddingTop = 20f, paddingBottom = 20f, gap = 48f, maxWidth = 360f, maxHeightVh = 92f, radiusTopStart = 8f, radiusTopEnd = 8f, shadow = listOf(S1Shadow(0f, -4f, 16f, 0f, 0x26000000))),
            "content" to S1Box(gap = 24f),
            "header" to S1Box(paddingStart = 20f, paddingEnd = 20f, spaceBetween = true),
            "title" to S1Box(foreground = S1Palette.colorTextTitlePrimary, fontSize = 20f, lineHeight = 1.3f, fontWeight = 700),
            "close" to S1Box(height = 24f, width = 24f),
            "body" to S1Box(),
            "footer" to S1Box(paddingStart = 20f, paddingEnd = 20f, gap = 8f)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "bottom-sheet")
}
