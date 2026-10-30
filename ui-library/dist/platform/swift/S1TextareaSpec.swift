// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// textarea 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1TextareaSpec {
    public static let states: [String] = ["default", "focus", "readOnly", "disabled"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["default"] = [
            "root": S1Box(),
            "control": S1Box(background: S1Palette.colorFormControlBgDefault, foreground: S1Palette.colorFormControlTextDefault, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, minHeight: 80, paddingStart: 10, paddingEnd: 12, paddingTop: 12, paddingBottom: 10, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextPlaceholder, opacity: 1)
        ]
        table["focus"] = [
            "root": S1Box(),
            "control": S1Box(background: S1Palette.colorFormControlBgSelected, foreground: S1Palette.colorFormControlTextSelected, borderColor: S1Palette.colorFormControlBorderSelected, borderWidth: 1, radius: 4, minHeight: 80, paddingStart: 10, paddingEnd: 12, paddingTop: 12, paddingBottom: 10, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextPlaceholder, opacity: 1)
        ]
        table["readOnly"] = [
            "root": S1Box(),
            "control": S1Box(background: S1Palette.colorFormControlBgDisabled, foreground: S1Palette.colorFormControlTextReadOnly, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, minHeight: 80, paddingStart: 10, paddingEnd: 12, paddingTop: 12, paddingBottom: 10, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextPlaceholder, opacity: 1)
        ]
        table["disabled"] = [
            "root": S1Box(),
            "control": S1Box(background: S1Palette.colorFormControlBgDisabled, foreground: S1Palette.colorFormControlTextDisabled, borderColor: S1Palette.colorFormControlBorderDisabled, borderWidth: 1, radius: 4, minHeight: 80, paddingStart: 10, paddingEnd: 12, paddingTop: 12, paddingBottom: 10, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "placeholder": S1Box(foreground: S1Palette.colorFormControlTextDisabled, opacity: 1)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "textarea") }
}
