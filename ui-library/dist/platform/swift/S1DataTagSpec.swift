// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// data-tag 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1DataTagSpec {
    public static let tones: [String] = ["blue", "red", "gray"]
    public static let shapes: [String] = ["chips", "square"]
    public static let solids: [String] = ["on", "off"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["blue|chips|on"] = [
            "root": S1Box(background: S1Palette.colorTagSolidBgBlue, foreground: S1Palette.colorTagSolidLabelBlue, borderColor: S1Palette.colorTagSolidBgBlue, borderWidth: 1, radius: 9999, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["blue|chips|off"] = [
            "root": S1Box(foreground: S1Palette.colorTagLineLabelBlue, borderColor: S1Palette.colorTagLineBorderBlue, borderWidth: 1, radius: 9999, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["blue|square|on"] = [
            "root": S1Box(background: S1Palette.colorTagSolidBgBlue, foreground: S1Palette.colorTagSolidLabelBlue, borderColor: S1Palette.colorTagSolidBgBlue, borderWidth: 1, radius: 4, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["blue|square|off"] = [
            "root": S1Box(foreground: S1Palette.colorTagLineLabelBlue, borderColor: S1Palette.colorTagLineBorderBlue, borderWidth: 1, radius: 4, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["red|chips|on"] = [
            "root": S1Box(background: S1Palette.colorTagSolidBgRed, foreground: S1Palette.colorTagSolidLabelRed, borderColor: S1Palette.colorTagSolidBgRed, borderWidth: 1, radius: 9999, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["red|chips|off"] = [
            "root": S1Box(foreground: S1Palette.colorTagLineLabelRed, borderColor: S1Palette.colorTagLineBorderRed, borderWidth: 1, radius: 9999, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["red|square|on"] = [
            "root": S1Box(background: S1Palette.colorTagSolidBgRed, foreground: S1Palette.colorTagSolidLabelRed, borderColor: S1Palette.colorTagSolidBgRed, borderWidth: 1, radius: 4, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["red|square|off"] = [
            "root": S1Box(foreground: S1Palette.colorTagLineLabelRed, borderColor: S1Palette.colorTagLineBorderRed, borderWidth: 1, radius: 4, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["gray|chips|on"] = [
            "root": S1Box(background: S1Palette.colorTagSolidBgGray, foreground: S1Palette.colorTagSolidLabelGray, borderColor: S1Palette.colorTagSolidBgGray, borderWidth: 1, radius: 9999, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["gray|chips|off"] = [
            "root": S1Box(foreground: S1Palette.colorTagLineLabelGray, borderColor: S1Palette.colorTagLineBorderGray, borderWidth: 1, radius: 9999, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["gray|square|on"] = [
            "root": S1Box(background: S1Palette.colorTagSolidBgGray, foreground: S1Palette.colorTagSolidLabelGray, borderColor: S1Palette.colorTagSolidBgGray, borderWidth: 1, radius: 4, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        table["gray|square|off"] = [
            "root": S1Box(foreground: S1Palette.colorTagLineLabelGray, borderColor: S1Palette.colorTagLineBorderGray, borderWidth: 1, radius: 4, paddingStart: 7, paddingEnd: 7, paddingTop: 6, paddingBottom: 6, fontSize: 12, fontWeight: 500, lineHeight: 1)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "data-tag") }
}
