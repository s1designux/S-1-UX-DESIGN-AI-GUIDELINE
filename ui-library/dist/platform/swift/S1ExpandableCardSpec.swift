// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// expandable-card 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1ExpandableCardSpec {
    public static let states: [String] = ["closed", "hover", "open"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["closed"] = [
            "root": S1Box(background: S1Palette.colorBgLevel0, borderColor: S1Palette.colorLineDefault, borderWidth: 1, radius: 10),
            "header": S1Box(background: S1Palette.colorBgLevel0, paddingStart: 19, paddingEnd: 15, paddingTop: 15, paddingBottom: 15, gap: 10, durationMs: 180),
            "text": S1Box(minWidth: 0, gap: 10),
            "toggleIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, rotation: 90, icon: "chevron", durationMs: 220),
            "panelWrap": S1Box(opacity: 0, durationMs: 220),
            "panel": S1Box(background: S1Palette.colorBgLevel2, minHeight: 0, paddingStart: 19, paddingEnd: 15, gap: 10, durationMs: 220),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, minHeight: 24, fontSize: 16, fontWeight: 700, lineHeight: 1.3),
            "panelTitle": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 16, fontWeight: 700, lineHeight: 1.3),
            "subtitle": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 700, lineHeight: 1.3),
            "panelSubtitle": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 700, lineHeight: 1.3),
            "body": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "panelBody": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "note": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "panelNote": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "caption": S1Box(foreground: S1Palette.colorTextBodyTertiary, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "panelCaption": S1Box(foreground: S1Palette.colorTextBodyTertiary, fontSize: 12, fontWeight: 400, lineHeight: 1.3)
        ]
        table["hover"] = [
            "root": S1Box(background: S1Palette.colorBgLevel0, borderColor: S1Palette.colorLineDefault, borderWidth: 1, radius: 10),
            "header": S1Box(background: S1Palette.colorBgLevel1, paddingStart: 19, paddingEnd: 15, paddingTop: 15, paddingBottom: 15, gap: 10, durationMs: 180),
            "text": S1Box(minWidth: 0, gap: 10),
            "toggleIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, rotation: 90, icon: "chevron", durationMs: 220),
            "panelWrap": S1Box(opacity: 0, durationMs: 220),
            "panel": S1Box(background: S1Palette.colorBgLevel2, minHeight: 0, paddingStart: 19, paddingEnd: 15, gap: 10, durationMs: 220),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, minHeight: 24, fontSize: 16, fontWeight: 700, lineHeight: 1.3),
            "panelTitle": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 16, fontWeight: 700, lineHeight: 1.3),
            "subtitle": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 700, lineHeight: 1.3),
            "panelSubtitle": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 700, lineHeight: 1.3),
            "body": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "panelBody": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "note": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "panelNote": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "caption": S1Box(foreground: S1Palette.colorTextBodyTertiary, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "panelCaption": S1Box(foreground: S1Palette.colorTextBodyTertiary, fontSize: 12, fontWeight: 400, lineHeight: 1.3)
        ]
        table["open"] = [
            "root": S1Box(background: S1Palette.colorBgLevel0, borderColor: S1Palette.colorLineDefault, borderWidth: 1, radius: 10),
            "header": S1Box(background: S1Palette.colorBgLevel0, paddingStart: 19, paddingEnd: 15, paddingTop: 15, paddingBottom: 16, gap: 10, durationMs: 180),
            "text": S1Box(minWidth: 0, gap: 10),
            "toggleIcon": S1Box(background: S1Palette.colorIconGrayDark, height: 24, width: 24, rotation: 90, icon: "chevron", scaleX: -1, durationMs: 220),
            "panelWrap": S1Box(opacity: 1, durationMs: 220),
            "panel": S1Box(background: S1Palette.colorBgLevel2, minHeight: 0, paddingStart: 19, paddingEnd: 15, paddingTop: 16, paddingBottom: 15, gap: 10, durationMs: 220),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, minHeight: 24, fontSize: 16, fontWeight: 700, lineHeight: 1.3),
            "panelTitle": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 16, fontWeight: 700, lineHeight: 1.3),
            "subtitle": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 700, lineHeight: 1.3),
            "panelSubtitle": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 700, lineHeight: 1.3),
            "body": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "panelBody": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "note": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "panelNote": S1Box(foreground: S1Palette.colorTextBodySecondary, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "caption": S1Box(foreground: S1Palette.colorTextBodyTertiary, fontSize: 12, fontWeight: 400, lineHeight: 1.3),
            "panelCaption": S1Box(foreground: S1Palette.colorTextBodyTertiary, fontSize: 12, fontWeight: 400, lineHeight: 1.3)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "expandable-card") }
}
