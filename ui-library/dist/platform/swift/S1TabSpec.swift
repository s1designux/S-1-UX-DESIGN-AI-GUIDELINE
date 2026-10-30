// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// tab 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1TabSpec {
    /// sizeBreaks — 승인된 (size, break) 조합만 담는다.
    public static let sizeBreaks: [S1SizeBreak] = [S1SizeBreak(size: "sm", breakName: "mobile")]
    public static let states: [String] = ["default", "hover", "selected"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["sm|mobile|default"] = [
            "root": S1Box(),
            "baseline": S1Box(background: S1Palette.colorNavigationIndicatorDefault, height: 1, left: 0, right: 0),
            "tab": S1Box(foreground: S1Palette.colorNavigationLabelDefault, height: 32, minWidth: 76, paddingStart: 16, paddingEnd: 16, paddingBottom: 2, fontSize: 16, fontWeight: 500),
            "indicator": S1Box()
        ]
        table["sm|mobile|hover"] = [
            "root": S1Box(),
            "baseline": S1Box(background: S1Palette.colorNavigationIndicatorDefault, height: 1, left: 0, right: 0),
            "tab": S1Box(foreground: S1Palette.colorNavigationLabelHover, height: 32, minWidth: 76, paddingStart: 16, paddingEnd: 16, paddingBottom: 2, fontSize: 16, fontWeight: 500),
            "indicator": S1Box(background: S1Palette.colorNavigationIndicatorHover, height: 2, left: 0, right: 0)
        ]
        table["sm|mobile|selected"] = [
            "root": S1Box(),
            "baseline": S1Box(background: S1Palette.colorNavigationIndicatorDefault, height: 1, left: 0, right: 0),
            "tab": S1Box(foreground: S1Palette.colorNavigationLabelSelected, height: 32, minWidth: 76, paddingStart: 16, paddingEnd: 16, paddingBottom: 2, fontSize: 16, fontWeight: 500),
            "indicator": S1Box(background: S1Palette.colorNavigationIndicatorSelected, height: 2, left: 0, right: 0)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "tab") }
}
