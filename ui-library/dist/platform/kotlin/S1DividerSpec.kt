// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// divider 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1DividerSpec {
    val variants: List<String> = listOf("x", "y")
    val weights: List<String> = listOf("default", "strong")
    val tones: List<String> = listOf("default", "strong")
    val insets: List<String> = listOf("none", "text")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "x|default|default|none" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineDefault, height = 1f)
        ),
        "x|default|default|text" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineDefault, height = 1f)
        ),
        "x|default|strong|none" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineStrong, height = 1f)
        ),
        "x|default|strong|text" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineStrong, height = 1f)
        ),
        "x|strong|default|none" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineDefault, height = 2f)
        ),
        "x|strong|default|text" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineDefault, height = 2f)
        ),
        "x|strong|strong|none" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineStrong, height = 2f)
        ),
        "x|strong|strong|text" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineStrong, height = 2f)
        ),
        "y|default|default|none" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineDefault, height = 14f, width = 1f)
        ),
        "y|default|strong|none" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineStrong, height = 14f, width = 1f)
        ),
        "y|strong|default|none" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineDefault, height = 14f, width = 2f)
        ),
        "y|strong|strong|none" to mapOf(
            "root" to S1Box(background = S1Palette.colorLineStrong, height = 14f, width = 2f)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "divider")
}
