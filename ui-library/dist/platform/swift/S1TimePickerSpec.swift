// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// time-picker 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1TimePickerSpec {
    /// sizeBreaks — 승인된 (size, break) 조합만 담는다.
    public static let sizeBreaks: [S1SizeBreak] = [S1SizeBreak(size: "md", breakName: "mobile")]
    public static let states: [String] = ["default", "hover", "focus", "filled", "disabled"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["md|mobile|default"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgDefault, foreground: S1Palette.colorFormControlTextPlaceholder, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, gap: 8, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconDefault, height: 24, width: 24, icon: "clock")
        ]
        table["md|mobile|hover"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgHover, foreground: S1Palette.colorFormControlTextPlaceholder, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, gap: 8, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconHover, height: 24, width: 24, icon: "clock")
        ]
        table["md|mobile|focus"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgDefault, foreground: S1Palette.colorFormControlTextPlaceholder, borderColor: S1Palette.colorFormControlBorderSelected, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, gap: 8, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconSelected, height: 24, width: 24, icon: "clock")
        ]
        table["md|mobile|filled"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgDefault, foreground: S1Palette.colorFormControlTextDefault, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, gap: 8, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconDefault, height: 24, width: 24, icon: "clock")
        ]
        table["md|mobile|disabled"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgDisabled, foreground: S1Palette.colorFormControlTextDisabled, borderColor: S1Palette.colorFormControlBorderDisabled, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, gap: 8, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconDisabled, height: 24, width: 24, icon: "clock")
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "time-picker") }

    public static let sheetBoxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["time-only"] = [
            "root": S1Box(left: 0, right: 0, top: 0),
            "backdrop": S1Box(background: S1Palette.colorOverlay, left: 0, right: 0, top: 0),
            "panel": S1Box(background: S1Palette.colorSurfaceRaised, paddingTop: 20, paddingBottom: 20, gap: 32, maxWidth: 360, maxHeightVh: 92, radiusTopStart: 8, radiusTopEnd: 8),
            "header": S1Box(paddingStart: 20, paddingEnd: 20, spaceBetween: true),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 20, fontWeight: 700, lineHeight: 1.3),
            "close": S1Box(height: 24, width: 24),
            "footer": S1Box(paddingStart: 20, paddingEnd: 20, gap: 8),
            "apply": S1Box()
        ]
        table["date-time"] = [
            "root": S1Box(left: 0, right: 0, top: 0),
            "backdrop": S1Box(background: S1Palette.colorOverlay, left: 0, right: 0, top: 0),
            "panel": S1Box(background: S1Palette.colorSurfaceRaised, paddingTop: 20, paddingBottom: 20, gap: 32, maxWidth: 360, maxHeightVh: 92, radiusTopStart: 8, radiusTopEnd: 8),
            "header": S1Box(paddingStart: 20, paddingEnd: 20, spaceBetween: true),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 20, fontWeight: 700, lineHeight: 1.3),
            "close": S1Box(height: 24, width: 24),
            "footer": S1Box(paddingStart: 20, paddingEnd: 20, gap: 8),
            "apply": S1Box(),
            "tabs": S1Box(paddingStart: 24, paddingEnd: 24),
            "datePanel": S1Box(paddingStart: 24, paddingEnd: 24),
            "datePanelNote": S1Box()
        ]
        return table
    }()

    public static func sheetBox(_ key: String, _ part: String) -> S1Box { s1Lookup(sheetBoxes, key, part, "sheet") }

    public static let wheelBoxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["12h"] = [
            "wheel": S1Box(height: 270, paddingStart: 24, paddingEnd: 24, gap: 32),
            "colHour": S1Box(width: 40, paddingTop: 114, paddingBottom: 114, gap: 32, marginStart: 4),
            "colColon": S1Box(width: 8),
            "colMinute": S1Box(width: 40, paddingTop: 114, paddingBottom: 114, gap: 32),
            "cell": S1Box(foreground: S1Palette.colorTextStateAccent, fontSize: 32, fontWeight: 400, lineHeight: 1.3, flexBasis: 42),
            "colonCell": S1Box(foreground: S1Palette.colorTextStateAccent, fontSize: 32, fontWeight: 400, lineHeight: 1.3),
            "fadeTop": S1Box(height: 110, left: 0, right: 0, top: 0, gradient: [S1GradientStop(offset: 0, color: S1Palette.colorOverlayWheelFade, alpha: 0.9), S1GradientStop(offset: 0.25, color: S1Palette.colorOverlayWheelFade, alpha: 0.9), S1GradientStop(offset: 0.65, color: S1Palette.colorOverlayWheelFade, alpha: 0.7), S1GradientStop(offset: 1, color: nil, alpha: 0)]),
            "fadeBottom": S1Box(height: 110, left: 0, right: 0, gradient: [S1GradientStop(offset: 0, color: nil, alpha: 0), S1GradientStop(offset: 0.35, color: S1Palette.colorOverlayWheelFade, alpha: 0.7), S1GradientStop(offset: 0.75, color: S1Palette.colorOverlayWheelFade, alpha: 0.9), S1GradientStop(offset: 1, color: S1Palette.colorOverlayWheelFade, alpha: 0.9)]),
            "colAmpm": S1Box(width: 56, paddingTop: 114, paddingBottom: 114, gap: 32)
        ]
        table["24h"] = [
            "wheel": S1Box(height: 270, paddingStart: 24, paddingEnd: 24, gap: 32),
            "colHour": S1Box(width: 40, paddingTop: 114, paddingBottom: 114, gap: 32),
            "colColon": S1Box(width: 8),
            "colMinute": S1Box(width: 40, paddingTop: 114, paddingBottom: 114, gap: 32),
            "cell": S1Box(foreground: S1Palette.colorTextStateAccent, fontSize: 32, fontWeight: 400, lineHeight: 1.3, flexBasis: 42),
            "colonCell": S1Box(foreground: S1Palette.colorTextStateAccent, fontSize: 32, fontWeight: 400, lineHeight: 1.3),
            "fadeTop": S1Box(height: 110, left: 0, right: 0, top: 0, gradient: [S1GradientStop(offset: 0, color: S1Palette.colorOverlayWheelFade, alpha: 0.9), S1GradientStop(offset: 0.25, color: S1Palette.colorOverlayWheelFade, alpha: 0.9), S1GradientStop(offset: 0.65, color: S1Palette.colorOverlayWheelFade, alpha: 0.7), S1GradientStop(offset: 1, color: nil, alpha: 0)]),
            "fadeBottom": S1Box(height: 110, left: 0, right: 0, gradient: [S1GradientStop(offset: 0, color: nil, alpha: 0), S1GradientStop(offset: 0.35, color: S1Palette.colorOverlayWheelFade, alpha: 0.7), S1GradientStop(offset: 0.75, color: S1Palette.colorOverlayWheelFade, alpha: 0.9), S1GradientStop(offset: 1, color: S1Palette.colorOverlayWheelFade, alpha: 0.9)])
        ]
        return table
    }()

    public static func wheelBox(_ key: String, _ part: String) -> S1Box { s1Lookup(wheelBoxes, key, part, "wheel") }
}
