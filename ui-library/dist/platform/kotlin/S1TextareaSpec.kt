// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// textarea 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1TextareaSpec {
    val states: List<String> = listOf("default", "focus", "readOnly", "disabled")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "default" to mapOf(
            "root" to S1Box(),
            "control" to S1Box(background = S1Palette.colorFormControlBgDefault, foreground = S1Palette.colorFormControlTextDefault, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, minHeight = 80f, paddingStart = 10f, paddingEnd = 12f, paddingTop = 12f, paddingBottom = 10f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "placeholder" to S1Box(foreground = S1Palette.colorFormControlTextPlaceholder, opacity = 1f)
        ),
        "focus" to mapOf(
            "root" to S1Box(),
            "control" to S1Box(background = S1Palette.colorFormControlBgSelected, foreground = S1Palette.colorFormControlTextSelected, borderColor = S1Palette.colorFormControlBorderSelected, borderWidth = 1f, radius = 4f, minHeight = 80f, paddingStart = 10f, paddingEnd = 12f, paddingTop = 12f, paddingBottom = 10f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "placeholder" to S1Box(foreground = S1Palette.colorFormControlTextPlaceholder, opacity = 1f)
        ),
        "readOnly" to mapOf(
            "root" to S1Box(),
            "control" to S1Box(background = S1Palette.colorFormControlBgDisabled, foreground = S1Palette.colorFormControlTextReadOnly, borderColor = S1Palette.colorFormControlBorderDefault, borderWidth = 1f, radius = 4f, minHeight = 80f, paddingStart = 10f, paddingEnd = 12f, paddingTop = 12f, paddingBottom = 10f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "placeholder" to S1Box(foreground = S1Palette.colorFormControlTextPlaceholder, opacity = 1f)
        ),
        "disabled" to mapOf(
            "root" to S1Box(),
            "control" to S1Box(background = S1Palette.colorFormControlBgDisabled, foreground = S1Palette.colorFormControlTextDisabled, borderColor = S1Palette.colorFormControlBorderDisabled, borderWidth = 1f, radius = 4f, minHeight = 80f, paddingStart = 10f, paddingEnd = 12f, paddingTop = 12f, paddingBottom = 10f, fontSize = 14f, letterSpacing = -0.02f, lineHeight = 1.3f, fontWeight = 400),
            "placeholder" to S1Box(foreground = S1Palette.colorFormControlTextDisabled, opacity = 1f)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "textarea")
}
