// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// toggle 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1ToggleSpec {
    public static let states: [String] = ["off", "on", "disabledOff", "disabledOn"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["off"] = [
            "root": S1Box(background: S1Palette.colorControlIndicatorUnselected, radius: 9999, height: 20, width: 40),
            "knob": S1Box(background: S1Palette.colorControlIndicatorSelected, radius: 9999, height: 16, width: 16, left: 2)
        ]
        table["on"] = [
            "root": S1Box(background: S1Palette.colorControlBgSelected, radius: 9999, height: 20, width: 40),
            "knob": S1Box(background: S1Palette.colorControlIndicatorSelected, radius: 9999, height: 16, width: 16, right: 2)
        ]
        table["disabledOff"] = [
            "root": S1Box(background: S1Palette.colorControlBgDisabled, radius: 9999, height: 20, width: 40),
            "knob": S1Box(background: S1Palette.colorControlIndicatorDisabled, radius: 9999, height: 16, width: 16, left: 2)
        ]
        table["disabledOn"] = [
            "root": S1Box(background: S1Palette.colorControlBgDisabled, radius: 9999, height: 20, width: 40),
            "knob": S1Box(background: S1Palette.colorControlIndicatorDisabled, radius: 9999, height: 16, width: 16, right: 2)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "toggle") }
}
