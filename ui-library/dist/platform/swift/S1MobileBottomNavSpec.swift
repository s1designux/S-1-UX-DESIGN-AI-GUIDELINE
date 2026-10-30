// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// mobile-bottom-nav 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1MobileBottomNavSpec {
    public static let variants: [String] = ["home", "search", "notification", "settings"]
    public static let states: [String] = ["unselected", "selected"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["home|unselected"] = [
            "root": S1Box(height: 60, width: 60, gap: 4),
            "icon": S1Box(background: S1Palette.colorNavigationIconDefault, height: 32, width: 32, icon: "mobile-nav-home"),
            "label": S1Box(foreground: S1Palette.colorNavigationLabelDefault, fontSize: 12, fontWeight: 500, lineHeight: 1.3)
        ]
        table["home|selected"] = [
            "root": S1Box(height: 60, width: 60, gap: 4),
            "icon": S1Box(background: S1Palette.colorIconBlue, height: 32, width: 32, icon: "mobile-nav-home"),
            "label": S1Box(foreground: S1Palette.colorNavigationLabelSelected, fontSize: 12, fontWeight: 500, lineHeight: 1.3)
        ]
        table["search|unselected"] = [
            "root": S1Box(height: 60, width: 60, gap: 4),
            "icon": S1Box(background: S1Palette.colorNavigationIconDefault, height: 32, width: 32, icon: "nav-search"),
            "label": S1Box(foreground: S1Palette.colorNavigationLabelDefault, fontSize: 12, fontWeight: 500, lineHeight: 1.3)
        ]
        table["search|selected"] = [
            "root": S1Box(height: 60, width: 60, gap: 4),
            "icon": S1Box(background: S1Palette.colorIconBlue, height: 32, width: 32, icon: "nav-search"),
            "label": S1Box(foreground: S1Palette.colorNavigationLabelSelected, fontSize: 12, fontWeight: 500, lineHeight: 1.3)
        ]
        table["notification|unselected"] = [
            "root": S1Box(height: 60, width: 60, gap: 4),
            "icon": S1Box(background: S1Palette.colorNavigationIconDefault, height: 32, width: 32, icon: "nav-notification"),
            "label": S1Box(foreground: S1Palette.colorNavigationLabelDefault, fontSize: 12, fontWeight: 500, lineHeight: 1.3)
        ]
        table["notification|selected"] = [
            "root": S1Box(height: 60, width: 60, gap: 4),
            "icon": S1Box(background: S1Palette.colorIconBlue, height: 32, width: 32, icon: "nav-notification"),
            "label": S1Box(foreground: S1Palette.colorNavigationLabelSelected, fontSize: 12, fontWeight: 500, lineHeight: 1.3)
        ]
        table["settings|unselected"] = [
            "root": S1Box(height: 60, width: 60, gap: 4),
            "icon": S1Box(background: S1Palette.colorNavigationIconDefault, height: 32, width: 32, icon: "nav-settings"),
            "label": S1Box(foreground: S1Palette.colorNavigationLabelDefault, fontSize: 12, fontWeight: 500, lineHeight: 1.3)
        ]
        table["settings|selected"] = [
            "root": S1Box(height: 60, width: 60, gap: 4),
            "icon": S1Box(background: S1Palette.colorIconBlue, height: 32, width: 32, icon: "nav-settings"),
            "label": S1Box(foreground: S1Palette.colorNavigationLabelSelected, fontSize: 12, fontWeight: 500, lineHeight: 1.3)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "mobile-bottom-nav") }
}
