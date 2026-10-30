// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// chip 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1ChipSpec {
    public static let variants: [String] = ["line", "solid"]
    /// sizeBreaks — 승인된 (size, break) 조합만 담는다.
    public static let sizeBreaks: [S1SizeBreak] = [S1SizeBreak(size: "sm", breakName: "mobile")]
    public static let states: [String] = ["default", "hover", "selected", "disabled"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["line|sm|mobile|default"] = [
            "root": S1Box(background: S1Palette.colorChipLineBgDefault, foreground: S1Palette.colorChipLineLabelDefault, borderColor: S1Palette.colorChipLineBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02),
            "label": S1Box()
        ]
        table["line|sm|mobile|hover"] = [
            "root": S1Box(background: S1Palette.colorChipLineBgHover, foreground: S1Palette.colorChipLineLabelDefault, borderColor: S1Palette.colorChipLineBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02),
            "label": S1Box()
        ]
        table["line|sm|mobile|selected"] = [
            "root": S1Box(background: S1Palette.colorChipLineBgSelected, foreground: S1Palette.colorChipLineLabelSelected, borderColor: S1Palette.colorChipLineBorderSelected, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02),
            "label": S1Box()
        ]
        table["line|sm|mobile|disabled"] = [
            "root": S1Box(background: S1Palette.colorChipLineBgDisabled, foreground: S1Palette.colorChipLineLabelDisabled, borderColor: S1Palette.colorChipLineBorderDisabled, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02),
            "label": S1Box()
        ]
        table["solid|sm|mobile|default"] = [
            "root": S1Box(background: S1Palette.colorChipSolidBgDefault, foreground: S1Palette.colorChipSolidLabelDefault, borderColor: S1Palette.colorChipSolidBorderDefault, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02),
            "label": S1Box()
        ]
        table["solid|sm|mobile|hover"] = [
            "root": S1Box(background: S1Palette.colorChipSolidBgHover, foreground: S1Palette.colorChipSolidLabelDefault, borderColor: S1Palette.colorChipSolidBgHover, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02),
            "label": S1Box()
        ]
        table["solid|sm|mobile|selected"] = [
            "root": S1Box(background: S1Palette.colorChipSolidBgSelected, foreground: S1Palette.colorChipSolidLabelSelected, borderColor: S1Palette.colorChipSolidBorderSelected, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02),
            "label": S1Box()
        ]
        table["solid|sm|mobile|disabled"] = [
            "root": S1Box(background: S1Palette.colorChipSolidBgDisabled, foreground: S1Palette.colorChipSolidLabelDisabled, borderColor: S1Palette.colorChipSolidBorderDisabled, borderWidth: 1, radius: 9999, height: 30, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02),
            "label": S1Box()
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "chip") }
}
