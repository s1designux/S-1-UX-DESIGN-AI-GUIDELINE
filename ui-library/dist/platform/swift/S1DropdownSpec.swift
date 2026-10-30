// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// dropdown 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1DropdownSpec {
    public static let types: [String] = ["text", "checkbox"]
    public static let sizes: [String] = ["xxsm", "xsm", "md"]
    public static let states: [String] = ["default", "hover", "selected"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["text|xxsm|default"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 28, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 12, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 27, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 12, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["text|xxsm|hover"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgHover, foreground: S1Palette.colorDropdownOptionLabelHover, minHeight: 28, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 12, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 27, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 12, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["text|xxsm|selected"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelSelected, minHeight: 28, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 12, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelSelected, minHeight: 27, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 12, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["text|xsm|default"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 34, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 33, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["text|xsm|hover"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgHover, foreground: S1Palette.colorDropdownOptionLabelHover, minHeight: 34, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 33, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["text|xsm|selected"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelSelected, minHeight: 34, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelSelected, minHeight: 33, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["text|md|default"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 44, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 43, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["text|md|hover"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgHover, foreground: S1Palette.colorDropdownOptionLabelHover, minHeight: 44, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 43, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["text|md|selected"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelSelected, minHeight: 44, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelSelected, minHeight: 43, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["checkbox|xxsm|default"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 28, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 12, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 27, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 12, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["checkbox|xxsm|hover"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgHover, foreground: S1Palette.colorDropdownOptionLabelHover, minHeight: 28, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 12, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 27, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 12, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["checkbox|xxsm|selected"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 28, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 12, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 27, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 12, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["checkbox|xsm|default"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 34, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 33, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["checkbox|xsm|hover"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgHover, foreground: S1Palette.colorDropdownOptionLabelHover, minHeight: 34, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 33, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["checkbox|xsm|selected"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 34, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 33, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["checkbox|md|default"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 44, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 43, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["checkbox|md|hover"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgHover, foreground: S1Palette.colorDropdownOptionLabelHover, minHeight: 44, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 43, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        table["checkbox|md|selected"] = [
            "root": S1Box(background: S1Palette.colorDropdownListBg, borderColor: S1Palette.colorDropdownListBorder, borderWidth: 1, radius: 4, minWidth: 100, paddingTop: 4, paddingBottom: 4, shadow: [S1Shadow(x: 0, y: 4, blur: 8, spread: 0, color: 0x26000000)]),
            "option": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 44, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "optionLabel": S1Box(minWidth: 0),
            "selectAll": S1Box(background: S1Palette.colorDropdownOptionBgDefault, foreground: S1Palette.colorDropdownOptionLabelDefault, minHeight: 43, paddingStart: 12, paddingEnd: 12, paddingTop: 4, paddingBottom: 4, gap: 8, fontSize: 14, fontWeight: 400),
            "divider": S1Box(background: S1Palette.colorDropdownListBorder, height: 1)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "dropdown") }
}
