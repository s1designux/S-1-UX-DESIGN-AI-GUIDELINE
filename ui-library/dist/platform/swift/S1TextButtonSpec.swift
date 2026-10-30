// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// text-button 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1TextButtonSpec {
    public static let variants: [String] = ["primary", "secondary"]
    public static let states: [String] = ["default", "hover", "pressed", "disabled"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["primary|default"] = [
            "root": S1Box(foreground: S1Palette.colorTextStateAccent, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box()
        ]
        table["primary|hover"] = [
            "root": S1Box(foreground: S1Palette.colorTextStateAccent, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3, underline: true),
            "label": S1Box()
        ]
        table["primary|pressed"] = [
            "root": S1Box(foreground: S1Palette.colorTextStateAccent, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3, underline: true),
            "label": S1Box()
        ]
        table["primary|disabled"] = [
            "root": S1Box(foreground: S1Palette.colorTextStateDisabled, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box()
        ]
        table["secondary|default"] = [
            "root": S1Box(foreground: S1Palette.colorTextBodyTertiary, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box()
        ]
        table["secondary|hover"] = [
            "root": S1Box(foreground: S1Palette.colorTextBodyTertiary, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3, underline: true),
            "label": S1Box()
        ]
        table["secondary|pressed"] = [
            "root": S1Box(foreground: S1Palette.colorTextBodyTertiary, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3, underline: true),
            "label": S1Box()
        ]
        table["secondary|disabled"] = [
            "root": S1Box(foreground: S1Palette.colorTextStateDisabled, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "label": S1Box()
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "text-button") }
}
