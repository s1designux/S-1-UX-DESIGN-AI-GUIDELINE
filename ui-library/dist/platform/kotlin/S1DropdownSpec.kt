// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// dropdown 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

package com.s1.designsystem

object S1DropdownSpec {
    val types: List<String> = listOf("text", "checkbox")
    val sizes: List<String> = listOf("xxsm", "xsm", "md")
    val states: List<String> = listOf("default", "hover", "selected")

    val boxes: Map<String, Map<String, S1Box>> = mapOf(
        "text|xxsm|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 28f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 12f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 27f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 12f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "text|xxsm|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgHover, foreground = S1Palette.colorDropdownOptionLabelHover, minHeight = 28f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 12f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 27f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 12f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "text|xxsm|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelSelected, minHeight = 28f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 12f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelSelected, minHeight = 27f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 12f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "text|xsm|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 34f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 33f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "text|xsm|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgHover, foreground = S1Palette.colorDropdownOptionLabelHover, minHeight = 34f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 33f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "text|xsm|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelSelected, minHeight = 34f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelSelected, minHeight = 33f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "text|md|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 44f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 43f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "text|md|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgHover, foreground = S1Palette.colorDropdownOptionLabelHover, minHeight = 44f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 43f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "text|md|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelSelected, minHeight = 44f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelSelected, minHeight = 43f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "checkbox|xxsm|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 28f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 12f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 27f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 12f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "checkbox|xxsm|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgHover, foreground = S1Palette.colorDropdownOptionLabelHover, minHeight = 28f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 12f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 27f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 12f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "checkbox|xxsm|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 28f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 12f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 27f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 12f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "checkbox|xsm|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 34f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 33f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "checkbox|xsm|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgHover, foreground = S1Palette.colorDropdownOptionLabelHover, minHeight = 34f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 33f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "checkbox|xsm|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 34f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 33f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "checkbox|md|default" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 44f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 43f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "checkbox|md|hover" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgHover, foreground = S1Palette.colorDropdownOptionLabelHover, minHeight = 44f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 43f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        ),
        "checkbox|md|selected" to mapOf(
            "root" to S1Box(background = S1Palette.colorDropdownListBg, borderColor = S1Palette.colorDropdownListBorder, borderWidth = 1f, radius = 4f, minWidth = 100f, paddingTop = 4f, paddingBottom = 4f, shadow = listOf(S1Shadow(0f, 4f, 8f, 0f, 0x26000000))),
            "option" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 44f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "optionLabel" to S1Box(minWidth = 0f),
            "selectAll" to S1Box(background = S1Palette.colorDropdownOptionBgDefault, foreground = S1Palette.colorDropdownOptionLabelDefault, minHeight = 43f, paddingStart = 12f, paddingEnd = 12f, paddingTop = 4f, paddingBottom = 4f, gap = 8f, fontSize = 14f, fontWeight = 400),
            "divider" to S1Box(background = S1Palette.colorDropdownListBorder, height = 1f)
        )
    )

    fun box(key: String, part: String): S1Box = boxes.box(key, part, "dropdown")
}
