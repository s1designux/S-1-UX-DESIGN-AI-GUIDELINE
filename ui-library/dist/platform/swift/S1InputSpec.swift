// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// input 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1InputSpec {
    /// sizeBreaks — 승인된 (size, break) 조합만 담는다.
    public static let sizeBreaks: [S1SizeBreak] = [S1SizeBreak(size: "md", breakName: "mobile")]
    public static let states: [String] = ["default", "filled", "focus", "error", "correct", "readOnly", "disabled"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["md|mobile|default"] = [
            "root": S1Box(width: 200, gap: 6),
            "label": S1Box(foreground: S1Palette.colorFormControlLabelDefault, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "field": S1Box(background: S1Palette.colorFormControlBgDefault, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minHeight: 48, paddingStart: 12),
            "control": S1Box(foreground: S1Palette.colorFormControlTextDefault, minWidth: 0, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "actionIcon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "remove"),
            "message": S1Box(foreground: S1Palette.colorTextStateCaption, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextPlaceholder, opacity: 1)
        ]
        table["md|mobile|filled"] = [
            "root": S1Box(width: 200, gap: 6),
            "label": S1Box(foreground: S1Palette.colorFormControlLabelDefault, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "field": S1Box(background: S1Palette.colorFormControlBgDefault, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minHeight: 48, paddingStart: 12),
            "control": S1Box(foreground: S1Palette.colorFormControlTextDefault, minWidth: 0, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "actionIcon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "remove"),
            "message": S1Box(foreground: S1Palette.colorTextStateCaption, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextPlaceholder, opacity: 1)
        ]
        table["md|mobile|focus"] = [
            "root": S1Box(width: 200, gap: 6),
            "label": S1Box(foreground: S1Palette.colorFormControlLabelDefault, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "field": S1Box(background: S1Palette.colorFormControlBgSelected, borderColor: S1Palette.colorFormControlBorderSelected, borderWidth: 1, radius: 4, height: 48, minHeight: 48, paddingStart: 12),
            "control": S1Box(foreground: S1Palette.colorFormControlTextSelected, minWidth: 0, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "actionIcon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "remove"),
            "message": S1Box(foreground: S1Palette.colorTextStateCaption, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextPlaceholder, opacity: 1)
        ]
        table["md|mobile|error"] = [
            "root": S1Box(width: 200, gap: 6),
            "label": S1Box(foreground: S1Palette.colorFormControlLabelDefault, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "field": S1Box(background: S1Palette.colorFormControlBgDefault, borderColor: S1Palette.colorFormControlBorderError, borderWidth: 1, radius: 4, height: 48, minHeight: 48, paddingStart: 12),
            "control": S1Box(foreground: S1Palette.colorFormControlTextDefault, minWidth: 0, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "actionIcon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "remove"),
            "message": S1Box(foreground: S1Palette.colorTextStateCaution, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextPlaceholder, opacity: 1)
        ]
        table["md|mobile|correct"] = [
            "root": S1Box(width: 200, gap: 6),
            "label": S1Box(foreground: S1Palette.colorFormControlLabelDefault, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "field": S1Box(background: S1Palette.colorFormControlBgDefault, borderColor: S1Palette.colorFormControlBorderCorrect, borderWidth: 1, radius: 4, height: 48, minHeight: 48, paddingStart: 12),
            "control": S1Box(foreground: S1Palette.colorFormControlTextDefault, minWidth: 0, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "actionIcon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "remove"),
            "message": S1Box(foreground: S1Palette.colorTextStateCorrect, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextPlaceholder, opacity: 1)
        ]
        table["md|mobile|readOnly"] = [
            "root": S1Box(width: 200, gap: 6),
            "label": S1Box(foreground: S1Palette.colorFormControlLabelDefault, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "field": S1Box(background: S1Palette.colorFormControlBgDisabled, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minHeight: 48, paddingStart: 12),
            "control": S1Box(foreground: S1Palette.colorFormControlTextReadOnly, minWidth: 0, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "actionIcon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "remove"),
            "message": S1Box(foreground: S1Palette.colorTextStateCaption, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextPlaceholder, opacity: 1)
        ]
        table["md|mobile|disabled"] = [
            "root": S1Box(width: 200, gap: 6),
            "label": S1Box(foreground: S1Palette.colorFormControlLabelDisabled, fontSize: 14, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "field": S1Box(background: S1Palette.colorFormControlBgDisabled, borderColor: S1Palette.colorFormControlBorderDisabled, borderWidth: 1, radius: 4, height: 48, minHeight: 48, paddingStart: 12),
            "control": S1Box(foreground: S1Palette.colorFormControlTextDisabled, minWidth: 0, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "actionIcon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "remove"),
            "message": S1Box(foreground: S1Palette.colorTextStateDisabled, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextDisabled, opacity: 1)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "input") }

    public static let inputActionsBoxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["md|mobile|clear|default"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "remove")
        ]
        table["md|mobile|clear|hover"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "remove")
        ]
        table["md|mobile|clear|disabled"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "remove")
        ]
        table["md|mobile|password|default"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "eye_hide")
        ]
        table["md|mobile|password|hover"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "eye_hide")
        ]
        table["md|mobile|password|disabled"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "eye_hide")
        ]
        table["md|mobile|password-pressed|default"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "eye_show")
        ]
        table["md|mobile|password-pressed|hover"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "eye_show")
        ]
        table["md|mobile|password-pressed|disabled"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "eye_show")
        ]
        table["md|mobile|search|default"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "search")
        ]
        table["md|mobile|search|hover"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDefault, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "search")
        ]
        table["md|mobile|search|disabled"] = [
            "action": S1Box(foreground: S1Palette.colorFormControlIconDisabled, height: 48, width: 48),
            "icon": S1Box(backgroundInherit: true, height: 24, width: 24, icon: "search")
        ]
        return table
    }()

    public static func inputActionsBox(_ key: String, _ part: String) -> S1Box { s1Lookup(inputActionsBoxes, key, part, "input-actions") }
}
