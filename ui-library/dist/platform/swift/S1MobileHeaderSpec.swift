// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// mobile-header 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1MobileHeaderSpec {
    public static let variants: [String] = ["home-title", "home-title-subtitle", "standard-title", "standard-title-close", "standard-no-title", "standard-no-title-close"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["home-title"] = [
            "root": S1Box(background: S1Palette.colorBgHome, height: 56, paddingStart: 20, paddingEnd: 16, paddingTop: 12, paddingBottom: 12),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, minWidth: 0, fontSize: 18, fontWeight: 700, lineHeight: 1.3)
        ]
        table["home-title-subtitle"] = [
            "root": S1Box(background: S1Palette.colorBgHome, height: 56, paddingStart: 20, paddingEnd: 16, paddingTop: 6, paddingBottom: 6),
            "stack": S1Box(minWidth: 0, gap: 2),
            "titleRow": S1Box(gap: 4),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, minWidth: 0, fontSize: 18, fontWeight: 700, lineHeight: 1.3),
            "arrowIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, rotation: 90, icon: "mobile-header-arrow-down"),
            "subtitle": S1Box(foreground: S1Palette.colorTextBodyTertiary, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "notification": S1Box(height: 32, width: 32),
            "notificationIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, icon: "mobile-header-notification"),
            "notificationDot": S1Box(background: S1Palette.colorIconRed, icon: "mobile-header-notification-accent", left: 0, right: 0, top: 0),
            "notificationHit": S1Box(left: -6, right: -6, top: -6)
        ]
        table["standard-title"] = [
            "root": S1Box(background: S1Palette.colorBgLevel0, height: 56, paddingStart: 16, paddingEnd: 16, paddingTop: 12, paddingBottom: 12, gap: 8),
            "back": S1Box(height: 32, width: 32),
            "backIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, icon: "mobile-header-back"),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, minWidth: 0, fontSize: 18, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "spacer": S1Box(height: 32, width: 32),
            "backHit": S1Box(left: -6, right: -6, top: -6)
        ]
        table["standard-title-close"] = [
            "root": S1Box(background: S1Palette.colorBgLevel0, height: 56, paddingStart: 16, paddingEnd: 16, paddingTop: 12, paddingBottom: 12, gap: 8),
            "back": S1Box(height: 32, width: 32),
            "backIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, icon: "mobile-header-back"),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, minWidth: 0, fontSize: 18, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "close": S1Box(height: 32, width: 32),
            "closeIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, icon: "mobile-header-close"),
            "backHit": S1Box(left: -6, right: -6, top: -6),
            "closeHit": S1Box(left: -6, right: -6, top: -6)
        ]
        table["standard-no-title"] = [
            "root": S1Box(background: S1Palette.colorBgLevel0, height: 56, paddingStart: 16, paddingEnd: 16, paddingTop: 12, paddingBottom: 12, gap: 8),
            "back": S1Box(height: 32, width: 32),
            "backIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, icon: "mobile-header-back"),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, height: 24, minWidth: 0, fontSize: 18, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "spacer": S1Box(height: 32, width: 32),
            "backHit": S1Box(left: -6, right: -6, top: -6)
        ]
        table["standard-no-title-close"] = [
            "root": S1Box(background: S1Palette.colorBgLevel0, height: 56, paddingStart: 16, paddingEnd: 16, paddingTop: 12, paddingBottom: 12, gap: 8),
            "back": S1Box(height: 32, width: 32),
            "backIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, icon: "mobile-header-back"),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, height: 24, minWidth: 0, fontSize: 18, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "close": S1Box(height: 32, width: 32),
            "closeIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, icon: "mobile-header-close"),
            "backHit": S1Box(left: -6, right: -6, top: -6),
            "closeHit": S1Box(left: -6, right: -6, top: -6)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "mobile-header") }
}
