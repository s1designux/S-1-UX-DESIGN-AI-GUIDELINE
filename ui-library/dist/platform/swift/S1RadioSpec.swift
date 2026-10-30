// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// radio 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1RadioSpec {
    public static let states: [String] = ["default", "hover", "checked", "disabled", "disabledChecked"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["default"] = [
            "root": S1Box(gap: 8),
            "control": S1Box(background: S1Palette.colorControlBgDefault, foreground: S1Palette.colorControlIndicatorSelectedAlt, borderColor: S1Palette.colorControlBorderDefault, borderWidth: 1, radius: 9999, height: 18, width: 18),
            "indicator": S1Box(),
            "label": S1Box(foreground: S1Palette.colorControlLabelDefault, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["hover"] = [
            "root": S1Box(gap: 8),
            "control": S1Box(background: S1Palette.colorControlBgHover, foreground: S1Palette.colorControlIndicatorSelectedAlt, borderColor: S1Palette.colorControlBorderDefault, borderWidth: 1, radius: 9999, height: 18, width: 18),
            "indicator": S1Box(),
            "label": S1Box(foreground: S1Palette.colorControlLabelDefault, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["checked"] = [
            "root": S1Box(gap: 8),
            "control": S1Box(background: S1Palette.colorControlBgDefault, foreground: S1Palette.colorControlIndicatorSelectedAlt, borderColor: S1Palette.colorControlBorderSelected, borderWidth: 1, radius: 9999, height: 18, width: 18),
            "indicator": S1Box(backgroundInherit: true, radius: 9999, height: 10, width: 10),
            "label": S1Box(foreground: S1Palette.colorControlLabelDefault, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["disabled"] = [
            "root": S1Box(gap: 8),
            "control": S1Box(background: S1Palette.colorControlBgDisabled, foreground: S1Palette.colorControlIndicatorSelectedAlt, borderColor: S1Palette.colorControlBorderDisabled, borderWidth: 1, radius: 9999, height: 18, width: 18),
            "indicator": S1Box(),
            "label": S1Box(foreground: S1Palette.colorControlLabelDisabled, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["disabledChecked"] = [
            "root": S1Box(gap: 8),
            "control": S1Box(background: S1Palette.colorControlBgDisabled, foreground: S1Palette.colorControlIndicatorDisabled, borderColor: S1Palette.colorControlBorderDisabled, borderWidth: 1, radius: 9999, height: 18, width: 18),
            "indicator": S1Box(backgroundInherit: true, radius: 9999, height: 10, width: 10),
            "label": S1Box(foreground: S1Palette.colorControlLabelDisabled, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "radio") }
}
