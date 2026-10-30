// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// modal 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1ModalSpec {
    public static let breaks: [String] = ["mobile"]
    public static let footers: [String] = ["single", "dual"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["mobile|single"] = [
            "root": S1Box(left: 0, right: 0, top: 0),
            "overlay": S1Box(background: S1Palette.colorOverlay, left: 0, right: 0, top: 0),
            "panel": S1Box(background: S1Palette.colorSurfaceRaised, borderColor: S1Palette.colorModalPanelBorder, borderWidth: 1, radius: 8, width: 300, paddingStart: 20, paddingEnd: 20, paddingTop: 20, paddingBottom: 20, gap: 30, shadow: [S1Shadow(x: 0, y: 4, blur: 6, spread: -2, color: 0x0F000000), S1Shadow(x: 0, y: 12, blur: 20, spread: -4, color: 0x1A000000)]),
            "content": S1Box(gap: 24),
            "header": S1Box(gap: 8, spaceBetween: true),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 18, fontWeight: 700, lineHeight: 1.3),
            "body": S1Box(gap: 8),
            "message": S1Box(foreground: S1Palette.colorTextBodyPrimary, fontSize: 16, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "footer": S1Box(gap: 8),
            "close": S1Box(radius: 4, height: 24, width: 24),
            "closeIcon": S1Box(background: S1Palette.colorIconGrayDark, icon: "close")
        ]
        table["mobile|dual"] = [
            "root": S1Box(left: 0, right: 0, top: 0),
            "overlay": S1Box(background: S1Palette.colorOverlay, left: 0, right: 0, top: 0),
            "panel": S1Box(background: S1Palette.colorSurfaceRaised, borderColor: S1Palette.colorModalPanelBorder, borderWidth: 1, radius: 8, width: 300, paddingStart: 20, paddingEnd: 20, paddingTop: 20, paddingBottom: 20, gap: 30, shadow: [S1Shadow(x: 0, y: 4, blur: 6, spread: -2, color: 0x0F000000), S1Shadow(x: 0, y: 12, blur: 20, spread: -4, color: 0x1A000000)]),
            "content": S1Box(gap: 24),
            "header": S1Box(gap: 8, spaceBetween: true),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 18, fontWeight: 700, lineHeight: 1.3),
            "body": S1Box(gap: 8),
            "message": S1Box(foreground: S1Palette.colorTextBodyPrimary, fontSize: 16, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3),
            "footer": S1Box(gap: 8),
            "close": S1Box(radius: 4, height: 24, width: 24),
            "closeIcon": S1Box(background: S1Palette.colorIconGrayDark, icon: "close")
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "modal") }

    public static let modalCloseHoverBoxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["mobile"] = [
            "close": S1Box(radius: 4, height: 24, width: 24)
        ]
        return table
    }()

    public static func modalCloseHoverBox(_ key: String, _ part: String) -> S1Box { s1Lookup(modalCloseHoverBoxes, key, part, "modal-close-hover") }
}
