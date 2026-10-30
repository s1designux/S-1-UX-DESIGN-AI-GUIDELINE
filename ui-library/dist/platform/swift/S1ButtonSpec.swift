// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// button 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1ButtonSpec {
    public static let variants: [String] = ["primary", "secondary", "blue-line"]
    public static let sizes: [String] = ["lg"]
    public static let states: [String] = ["default", "hover", "disabled"]
    public static let breaks: [String: [String]] = ["mobile": ["lg"]]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["primary|lg|default"] = [
            "root": S1Box(background: S1Palette.colorButtonBgPrimaryDefault, foreground: S1Palette.colorButtonLabelPrimaryDefault, borderColor: S1Palette.colorButtonBorderPrimaryDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 80, paddingStart: 16, paddingEnd: 16, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box(minWidth: 0)
        ]
        table["primary|lg|hover"] = [
            "root": S1Box(background: S1Palette.colorButtonBgPrimaryHover, foreground: S1Palette.colorButtonLabelPrimaryHover, borderColor: S1Palette.colorButtonBorderPrimaryHover, borderWidth: 1, radius: 4, height: 48, minWidth: 80, paddingStart: 16, paddingEnd: 16, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box(minWidth: 0)
        ]
        table["primary|lg|disabled"] = [
            "root": S1Box(background: S1Palette.colorButtonBgDisabled, foreground: S1Palette.colorButtonLabelDisabled, borderColor: S1Palette.colorButtonBorderDisabled, borderWidth: 1, radius: 4, height: 48, minWidth: 80, paddingStart: 16, paddingEnd: 16, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box(minWidth: 0)
        ]
        table["secondary|lg|default"] = [
            "root": S1Box(background: S1Palette.colorButtonBgSecondaryDefault, foreground: S1Palette.colorButtonLabelSecondaryDefault, borderColor: S1Palette.colorButtonBorderSecondaryDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 80, paddingStart: 16, paddingEnd: 16, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box(minWidth: 0)
        ]
        table["secondary|lg|hover"] = [
            "root": S1Box(background: S1Palette.colorButtonBgSecondaryHover, foreground: S1Palette.colorButtonLabelSecondaryHover, borderColor: S1Palette.colorButtonBorderSecondaryHover, borderWidth: 1, radius: 4, height: 48, minWidth: 80, paddingStart: 16, paddingEnd: 16, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box(minWidth: 0)
        ]
        table["secondary|lg|disabled"] = [
            "root": S1Box(background: S1Palette.colorButtonBgDisabled, foreground: S1Palette.colorButtonLabelDisabled, borderColor: S1Palette.colorButtonBorderDisabled, borderWidth: 1, radius: 4, height: 48, minWidth: 80, paddingStart: 16, paddingEnd: 16, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box(minWidth: 0)
        ]
        table["blue-line|lg|default"] = [
            "root": S1Box(background: S1Palette.colorButtonBgBlueLineDefault, foreground: S1Palette.colorButtonLabelBlueLineDefault, borderColor: S1Palette.colorButtonBorderBlueLineDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 80, paddingStart: 16, paddingEnd: 16, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box(minWidth: 0)
        ]
        table["blue-line|lg|hover"] = [
            "root": S1Box(background: S1Palette.colorButtonBgBlueLineHover, foreground: S1Palette.colorButtonLabelBlueLineHover, borderColor: S1Palette.colorButtonBorderBlueLineHover, borderWidth: 1, radius: 4, height: 48, minWidth: 80, paddingStart: 16, paddingEnd: 16, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box(minWidth: 0)
        ]
        table["blue-line|lg|disabled"] = [
            "root": S1Box(background: S1Palette.colorButtonBgDisabled, foreground: S1Palette.colorButtonLabelDisabled, borderColor: S1Palette.colorButtonBorderDisabled, borderWidth: 1, radius: 4, height: 48, minWidth: 80, paddingStart: 16, paddingEnd: 16, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box(minWidth: 0)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "button") }
}
