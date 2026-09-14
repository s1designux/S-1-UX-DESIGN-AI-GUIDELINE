// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// assist-button 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1AssistButtonSpec {
    val states: List<String> = listOf("default", "hover", "pressed", "disabled")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "default" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgSecondaryDefault, foreground = S1Palette.colorButtonLabelAssistDefault, borderColor = S1Palette.colorButtonBorderSecondaryDefault, borderWidth = 1f, radius = 4f, height = 32f, minWidth = 60f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box()
        ),
        "hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgSecondaryHover, foreground = S1Palette.colorButtonLabelAssistHover, borderColor = S1Palette.colorButtonBorderAssistHover, borderWidth = 1f, radius = 4f, height = 32f, minWidth = 60f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box()
        ),
        "pressed" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgSecondaryHover, foreground = S1Palette.colorButtonLabelAssistHover, borderColor = S1Palette.colorButtonBorderAssistHover, borderWidth = 1f, radius = 4f, height = 32f, minWidth = 60f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box()
        ),
        "disabled" to mapOf(
            "root" to S1Box(background = S1Palette.colorButtonBgDisabled, foreground = S1Palette.colorButtonLabelDisabled, borderColor = S1Palette.colorButtonBorderDisabled, borderWidth = 1f, radius = 4f, height = 32f, minWidth = 60f, paddingStart = 12f, paddingEnd = 12f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 500),
            "label" to S1Box()
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "assist-button")
}
