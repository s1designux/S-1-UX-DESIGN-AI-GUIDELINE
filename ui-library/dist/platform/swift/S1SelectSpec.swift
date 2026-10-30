// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// select 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1SelectSpec {
    /// sizeBreaks — 승인된 (size, break) 조합만 담는다.
    public static let sizeBreaks: [S1SizeBreak] = [S1SizeBreak(size: "md", breakName: "mobile")]
    public static let states: [String] = ["default", "hover", "filled", "open", "disabled"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["md|mobile|default"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgDefault, foreground: S1Palette.colorFormControlTextPlaceholder, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 400, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconDefault, height: 24, width: 24, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["md|mobile|hover"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgHover, foreground: S1Palette.colorFormControlTextPlaceholder, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 400, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconHover, height: 24, width: 24, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["md|mobile|filled"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgDefault, foreground: S1Palette.colorFormControlTextSelected, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 400, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconDefault, height: 24, width: 24, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["md|mobile|open"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgSelected, foreground: S1Palette.colorFormControlTextPlaceholder, borderColor: S1Palette.colorFormControlBorderSelected, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 400, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconSelected, height: 24, width: 24, rotation: -90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        table["md|mobile|disabled"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgDisabled, foreground: S1Palette.colorFormControlTextDisabled, borderColor: S1Palette.colorFormControlBorderDisabled, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, fontSize: 14, fontWeight: 400, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconDisabled, height: 24, width: 24, rotation: 90, icon: "chevron"),
            "panel": S1Box(marginTop: 8, left: 0)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "select") }
}
