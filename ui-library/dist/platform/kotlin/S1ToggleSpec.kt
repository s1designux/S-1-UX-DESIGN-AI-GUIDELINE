// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// toggle 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1ToggleSpec {
    val states: List<String> = listOf("off", "on", "disabledOff", "disabledOn")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "off" to mapOf(
            "root" to S1Box(background = S1Palette.colorControlIndicatorUnselected, radius = 9999f, height = 20f, width = 40f),
            "knob" to S1Box(background = S1Palette.colorControlIndicatorSelected, radius = 9999f, height = 16f, width = 16f, left = 2f)
        ),
        "on" to mapOf(
            "root" to S1Box(background = S1Palette.colorControlBgSelected, radius = 9999f, height = 20f, width = 40f),
            "knob" to S1Box(background = S1Palette.colorControlIndicatorSelected, radius = 9999f, height = 16f, width = 16f, right = 2f)
        ),
        "disabledOff" to mapOf(
            "root" to S1Box(background = S1Palette.colorControlBgDisabled, radius = 9999f, height = 20f, width = 40f),
            "knob" to S1Box(background = S1Palette.colorControlIndicatorDisabled, radius = 9999f, height = 16f, width = 16f, left = 2f)
        ),
        "disabledOn" to mapOf(
            "root" to S1Box(background = S1Palette.colorControlBgDisabled, radius = 9999f, height = 20f, width = 40f),
            "knob" to S1Box(background = S1Palette.colorControlIndicatorDisabled, radius = 9999f, height = 16f, width = 16f, right = 2f)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "toggle")
}
