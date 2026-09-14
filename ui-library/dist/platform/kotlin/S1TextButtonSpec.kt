// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// text-button 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1TextButtonSpec {
    val variants: List<String> = listOf("primary", "secondary")
    val states: List<String> = listOf("default", "hover", "pressed", "disabled")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "primary|default" to mapOf(
            "root" to S1Box(foreground = S1Palette.colorTextStateAccent, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box()
        ),
        "primary|hover" to mapOf(
            "root" to S1Box(foreground = S1Palette.colorTextStateAccent, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500, underline = true),
            "label" to S1Box()
        ),
        "primary|pressed" to mapOf(
            "root" to S1Box(foreground = S1Palette.colorTextStateAccent, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500, underline = true),
            "label" to S1Box()
        ),
        "primary|disabled" to mapOf(
            "root" to S1Box(foreground = S1Palette.colorTextStateDisabled, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box()
        ),
        "secondary|default" to mapOf(
            "root" to S1Box(foreground = S1Palette.colorTextBodyTertiary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box()
        ),
        "secondary|hover" to mapOf(
            "root" to S1Box(foreground = S1Palette.colorTextBodyTertiary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500, underline = true),
            "label" to S1Box()
        ),
        "secondary|pressed" to mapOf(
            "root" to S1Box(foreground = S1Palette.colorTextBodyTertiary, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500, underline = true),
            "label" to S1Box()
        ),
        "secondary|disabled" to mapOf(
            "root" to S1Box(foreground = S1Palette.colorTextStateDisabled, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box()
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "text-button")
}
