// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// filter-chip 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1FilterChipSpec {
    public static let variants: [String] = ["line", "solid"]
    /// sizeBreaks — 승인된 (size, break) 조합만 담는다.
    public static let sizeBreaks: [S1SizeBreak] = [S1SizeBreak(size: "md", breakName: "mobile")]
    public static let titles: [String] = ["on", "off"]
    public static let states: [String] = ["default", "hover", "selected", "complete", "disabled"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["line|md|mobile|on|default"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipLineBgDefault, foreground: S1Palette.colorChipLineLabelDefault, borderColor: S1Palette.colorChipLineBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(foreground: S1Palette.colorChipLineLabelSelected),
            "icon": S1Box(background: S1Palette.colorChipLineIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0),
            "title": S1Box()
        ]
        table["line|md|mobile|on|hover"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipLineBgHover, foreground: S1Palette.colorChipLineLabelDefault, borderColor: S1Palette.colorChipLineBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(foreground: S1Palette.colorChipLineLabelSelected),
            "icon": S1Box(background: S1Palette.colorChipLineIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0),
            "title": S1Box()
        ]
        table["line|md|mobile|on|selected"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipLineBgSelected, foreground: S1Palette.colorChipLineLabelDefault, borderColor: S1Palette.colorChipLineBorderSelected, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(foreground: S1Palette.colorChipLineLabelSelected),
            "icon": S1Box(background: S1Palette.colorChipLineIconDefault, height: 20, width: 20, rotation: -90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0),
            "title": S1Box()
        ]
        table["line|md|mobile|on|complete"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipLineBgDefault, foreground: S1Palette.colorChipLineLabelDefault, borderColor: S1Palette.colorChipLineBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(foreground: S1Palette.colorChipLineLabelSelected),
            "icon": S1Box(background: S1Palette.colorChipLineIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0),
            "title": S1Box()
        ]
        table["line|md|mobile|on|disabled"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipLineBgDisabled, foreground: S1Palette.colorChipLineLabelDisabled, borderColor: S1Palette.colorChipLineBorderDisabled, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(foreground: S1Palette.colorChipLineLabelDisabled),
            "icon": S1Box(background: S1Palette.colorChipLineIconDisabled, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0),
            "title": S1Box()
        ]
        table["line|md|mobile|off|default"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipLineBgDefault, foreground: S1Palette.colorChipLineLabelDefault, borderColor: S1Palette.colorChipLineBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipLineIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["line|md|mobile|off|hover"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipLineBgHover, foreground: S1Palette.colorChipLineLabelDefault, borderColor: S1Palette.colorChipLineBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipLineIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["line|md|mobile|off|selected"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipLineBgSelected, foreground: S1Palette.colorChipLineLabelDefault, borderColor: S1Palette.colorChipLineBorderSelected, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipLineIconDefault, height: 20, width: 20, rotation: -90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["line|md|mobile|off|complete"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipLineBgDefault, foreground: S1Palette.colorChipLineLabelDefault, borderColor: S1Palette.colorChipLineBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipLineIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["line|md|mobile|off|disabled"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipLineBgDisabled, foreground: S1Palette.colorChipLineLabelDisabled, borderColor: S1Palette.colorChipLineBorderDisabled, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipLineIconDisabled, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["solid|md|mobile|on|default"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipSolidBgDefault, foreground: S1Palette.colorChipSolidLabelDefault, borderColor: S1Palette.colorChipSolidBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipSolidIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0),
            "title": S1Box()
        ]
        table["solid|md|mobile|on|hover"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipSolidBgHover, foreground: S1Palette.colorChipSolidLabelDefault, borderColor: S1Palette.colorChipSolidBgHover, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipSolidIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0),
            "title": S1Box()
        ]
        table["solid|md|mobile|on|selected"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipSolidBgSelected, foreground: S1Palette.colorChipSolidLabelSelected, borderColor: S1Palette.colorChipSolidBorderSelected, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipSolidIconSelected, height: 20, width: 20, rotation: -90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0),
            "title": S1Box()
        ]
        table["solid|md|mobile|on|complete"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipSolidBgDefault, foreground: S1Palette.colorChipSolidLabelDefault, borderColor: S1Palette.colorChipSolidBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipSolidIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0),
            "title": S1Box()
        ]
        table["solid|md|mobile|on|disabled"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipSolidBgDisabled, foreground: S1Palette.colorChipSolidLabelDisabled, borderColor: S1Palette.colorChipSolidBorderDisabled, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipSolidIconDisabled, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0),
            "title": S1Box()
        ]
        table["solid|md|mobile|off|default"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipSolidBgDefault, foreground: S1Palette.colorChipSolidLabelDefault, borderColor: S1Palette.colorChipSolidBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipSolidIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["solid|md|mobile|off|hover"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipSolidBgHover, foreground: S1Palette.colorChipSolidLabelDefault, borderColor: S1Palette.colorChipSolidBgHover, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipSolidIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["solid|md|mobile|off|selected"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipSolidBgSelected, foreground: S1Palette.colorChipSolidLabelSelected, borderColor: S1Palette.colorChipSolidBorderSelected, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipSolidIconSelected, height: 20, width: 20, rotation: -90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["solid|md|mobile|off|complete"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipSolidBgDefault, foreground: S1Palette.colorChipSolidLabelDefault, borderColor: S1Palette.colorChipSolidBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipSolidIconDefault, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["solid|md|mobile|off|disabled"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorChipSolidBgDisabled, foreground: S1Palette.colorChipSolidLabelDisabled, borderColor: S1Palette.colorChipSolidBorderDisabled, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 6, gap: 4, fontSize: 14, fontWeight: 500),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorChipSolidIconDisabled, height: 20, width: 20, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "filter-chip") }
}
