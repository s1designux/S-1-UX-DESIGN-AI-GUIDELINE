// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// bottom-sheet-option 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1BottomSheetOptionSpec {
    public static let variants: [String] = ["text", "checkbox", "radio", "list"]
    public static let states: [String] = ["default", "selected", "disabled"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["text|default"] = [
            "root": S1Box(background: S1Palette.colorSurfaceRaised, height: 48, paddingStart: 20, paddingEnd: 20, paddingTop: 8, paddingBottom: 8, gap: 8),
            "label": S1Box(foreground: S1Palette.colorTextBodyPrimary, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["text|selected"] = [
            "root": S1Box(background: S1Palette.colorSurfaceRaised, height: 48, paddingStart: 20, paddingEnd: 20, paddingTop: 8, paddingBottom: 8, gap: 8, spaceBetween: true),
            "label": S1Box(foreground: S1Palette.colorTextStateAccent, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "check": S1Box(background: S1Palette.colorIconBlue, height: 24, width: 24, icon: "check24")
        ]
        table["text|disabled"] = [
            "root": S1Box(background: S1Palette.colorSurfaceRaised, height: 48, paddingStart: 20, paddingEnd: 20, paddingTop: 8, paddingBottom: 8, gap: 8),
            "label": S1Box(foreground: S1Palette.colorTextStateDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["checkbox|default"] = [
            "root": S1Box(background: S1Palette.colorSurfaceRaised, height: 48, paddingStart: 20, paddingEnd: 20, paddingTop: 8, paddingBottom: 8, gap: 8),
            "label": S1Box(foreground: S1Palette.colorTextBodyPrimary, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["checkbox|selected"] = [
            "root": S1Box(background: S1Palette.colorSurfaceRaised, height: 48, paddingStart: 20, paddingEnd: 20, paddingTop: 8, paddingBottom: 8, gap: 8),
            "label": S1Box(foreground: S1Palette.colorTextBodyPrimary, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["radio|default"] = [
            "root": S1Box(background: S1Palette.colorSurfaceRaised, height: 48, paddingStart: 20, paddingEnd: 20, paddingTop: 8, paddingBottom: 8, gap: 8),
            "label": S1Box(foreground: S1Palette.colorTextBodyPrimary, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["radio|selected"] = [
            "root": S1Box(background: S1Palette.colorSurfaceRaised, height: 48, paddingStart: 20, paddingEnd: 20, paddingTop: 8, paddingBottom: 8, gap: 8),
            "label": S1Box(foreground: S1Palette.colorTextBodyPrimary, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["list|default"] = [
            "root": S1Box(background: S1Palette.colorSurfaceRaised, paddingStart: 20, paddingEnd: 20, paddingTop: 12, paddingBottom: 12, spaceBetween: true),
            "listLeft": S1Box(minWidth: 0, gap: 12),
            "avatar": S1Box(background: S1Palette.colorIconGrayLight, radius: 9999, height: 40, width: 40),
            "avatarIcon": S1Box(background: S1Palette.colorIconWhite, height: 24, width: 24, icon: "account"),
            "listText": S1Box(minWidth: 0, gap: 2),
            "listTitle": S1Box(foreground: S1Palette.colorTextBodyPrimary, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "listSub": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "chevron": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, icon: "chevron")
        ]
        table["list|disabled"] = [
            "root": S1Box(background: S1Palette.colorSurfaceRaised, paddingStart: 20, paddingEnd: 20, paddingTop: 12, paddingBottom: 12, spaceBetween: true),
            "listLeft": S1Box(minWidth: 0, gap: 12),
            "avatar": S1Box(background: S1Palette.colorIconGrayLight, radius: 9999, height: 40, width: 40),
            "avatarIcon": S1Box(background: S1Palette.colorIconWhite, height: 24, width: 24, icon: "account"),
            "listText": S1Box(minWidth: 0, gap: 2),
            "listTitle": S1Box(foreground: S1Palette.colorTextBodyPrimary, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "listSub": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "lock": S1Box(background: S1Palette.colorIconGray, height: 24, width: 24, icon: "lock")
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "bottom-sheet-option") }
}
