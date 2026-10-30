// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// assist-button 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1AssistButtonSpec {
    public static let states: [String] = ["default", "hover", "pressed", "disabled"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["default"] = [
            "root": S1Box(background: S1Palette.colorButtonBgSecondaryDefault, foreground: S1Palette.colorButtonLabelAssistDefault, borderColor: S1Palette.colorButtonBorderSecondaryDefault, borderWidth: 1, radius: 4, height: 32, minWidth: 60, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box()
        ]
        table["hover"] = [
            "root": S1Box(background: S1Palette.colorButtonBgSecondaryHover, foreground: S1Palette.colorButtonLabelAssistHover, borderColor: S1Palette.colorButtonBorderAssistHover, borderWidth: 1, radius: 4, height: 32, minWidth: 60, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box()
        ]
        table["pressed"] = [
            "root": S1Box(background: S1Palette.colorButtonBgSecondaryHover, foreground: S1Palette.colorButtonLabelAssistHover, borderColor: S1Palette.colorButtonBorderAssistHover, borderWidth: 1, radius: 4, height: 32, minWidth: 60, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box()
        ]
        table["disabled"] = [
            "root": S1Box(background: S1Palette.colorButtonBgDisabled, foreground: S1Palette.colorButtonLabelDisabled, borderColor: S1Palette.colorButtonBorderDisabled, borderWidth: 1, radius: 4, height: 32, minWidth: 60, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box()
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "assist-button") }
}
