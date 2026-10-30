// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// bottom-sheet 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1BottomSheetSpec {
    public static let footers: [String] = ["none", "single", "dual"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["none"] = [
            "root": S1Box(left: 0, right: 0, top: 0),
            "backdrop": S1Box(background: S1Palette.colorOverlay, left: 0, right: 0, top: 0),
            "panel": S1Box(background: S1Palette.colorSurfaceRaised, paddingTop: 20, paddingBottom: 40, gap: 48, maxWidth: 360, maxHeightVh: 92, radiusTopStart: 8, radiusTopEnd: 8, shadow: [S1Shadow(x: 0, y: -4, blur: 16, spread: 0, color: 0x26000000)]),
            "content": S1Box(gap: 24),
            "header": S1Box(paddingStart: 20, paddingEnd: 20, spaceBetween: true),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 20, fontWeight: 700, lineHeight: 1.3),
            "close": S1Box(height: 24, width: 24),
            "body": S1Box()
        ]
        table["single"] = [
            "root": S1Box(left: 0, right: 0, top: 0),
            "backdrop": S1Box(background: S1Palette.colorOverlay, left: 0, right: 0, top: 0),
            "panel": S1Box(background: S1Palette.colorSurfaceRaised, paddingTop: 20, paddingBottom: 20, gap: 48, maxWidth: 360, maxHeightVh: 92, radiusTopStart: 8, radiusTopEnd: 8, shadow: [S1Shadow(x: 0, y: -4, blur: 16, spread: 0, color: 0x26000000)]),
            "content": S1Box(gap: 24),
            "header": S1Box(paddingStart: 20, paddingEnd: 20, spaceBetween: true),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 20, fontWeight: 700, lineHeight: 1.3),
            "close": S1Box(height: 24, width: 24),
            "body": S1Box(),
            "footer": S1Box(paddingStart: 20, paddingEnd: 20, gap: 8)
        ]
        table["dual"] = [
            "root": S1Box(left: 0, right: 0, top: 0),
            "backdrop": S1Box(background: S1Palette.colorOverlay, left: 0, right: 0, top: 0),
            "panel": S1Box(background: S1Palette.colorSurfaceRaised, paddingTop: 20, paddingBottom: 20, gap: 48, maxWidth: 360, maxHeightVh: 92, radiusTopStart: 8, radiusTopEnd: 8, shadow: [S1Shadow(x: 0, y: -4, blur: 16, spread: 0, color: 0x26000000)]),
            "content": S1Box(gap: 24),
            "header": S1Box(paddingStart: 20, paddingEnd: 20, spaceBetween: true),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 20, fontWeight: 700, lineHeight: 1.3),
            "close": S1Box(height: 24, width: 24),
            "body": S1Box(),
            "footer": S1Box(paddingStart: 20, paddingEnd: 20, gap: 8)
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "bottom-sheet") }
}
