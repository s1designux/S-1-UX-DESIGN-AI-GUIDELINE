// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// divider 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1DividerSpec {
    public static let variants: [String] = ["x", "y"]
    public static let weights: [String] = ["default", "strong"]
    public static let tones: [String] = ["default", "strong"]
    public static let insets: [String] = ["none", "text"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["x|default|default|none"] = [
            "root": S1Box(background: S1Palette.colorLineDefault, height: 1)
        ]
        table["x|default|default|text"] = [
            "root": S1Box(background: S1Palette.colorLineDefault, height: 1)
        ]
        table["x|default|strong|none"] = [
            "root": S1Box(background: S1Palette.colorLineStrong, height: 1)
        ]
        table["x|default|strong|text"] = [
            "root": S1Box(background: S1Palette.colorLineStrong, height: 1)
        ]
        table["x|strong|default|none"] = [
            "root": S1Box(background: S1Palette.colorLineDefault, height: 2)
        ]
        table["x|strong|default|text"] = [
            "root": S1Box(background: S1Palette.colorLineDefault, height: 2)
        ]
        table["x|strong|strong|none"] = [
            "root": S1Box(background: S1Palette.colorLineStrong, height: 2)
        ]
        table["x|strong|strong|text"] = [
            "root": S1Box(background: S1Palette.colorLineStrong, height: 2)
        ]
        table["y|default|default|none"] = [
            "root": S1Box(background: S1Palette.colorLineDefault, height: 14, width: 1)
        ]
        table["y|default|strong|none"] = [
            "root": S1Box(background: S1Palette.colorLineStrong, height: 14, width: 1)
        ]
        table["y|strong|default|none"] = [
            "root": S1Box(background: S1Palette.colorLineDefault, height: 14, width: 2)
        ]
        table["y|strong|strong|none"] = [
            "root": S1Box(background: S1Palette.colorLineStrong, height: 14, width: 2)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "divider") }
}
