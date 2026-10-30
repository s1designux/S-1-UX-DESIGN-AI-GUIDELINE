// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1ExpandableCard — 정본 Expandable Card(모바일 한 유형)

import SwiftUI

/// 접힘 카드 한 자리의 글자 다섯 가지 — 비워 두면 그 줄은 그리지 않는다.
public struct S1CardTexts: Sendable {
    public var title: String?
    public var subtitle: String?
    public var body: String?
    public var note: String?
    public var caption: String?

    public init(title: String? = nil, subtitle: String? = nil, body: String? = nil, note: String? = nil, caption: String? = nil) {
        self.title = title
        self.subtitle = subtitle
        self.body = body
        self.note = note
        self.caption = caption
    }
}

/// 승인된 접힘 카드. 머리줄을 누르면 펼침칸이 열리고 닫힌다.
/// 상태는 닫힘 · 열림 · 머리줄 hover(열려 있을 때는 기본색 유지) 세 가지이고,
/// 펼침칸이 열리고 닫히는 시간·화살표가 도는 시간은 정본 전환 값을 그대로 쓴다.
///
/// 열림 여부는 화면이 쥔다(expanded) — 부품은 누른 사실만 알린다.
public struct S1ExpandableCard: View {
    @State private var hovered = false
    private let expanded: Bool
    private let header: S1CardTexts
    private let panel: S1CardTexts
    private let onExpandedChange: (Bool) -> Void

    public init(expanded: Bool, header: S1CardTexts, panel: S1CardTexts, onExpandedChange: @escaping (Bool) -> Void) {
        self.expanded = expanded
        self.header = header
        self.panel = panel
        self.onExpandedChange = onExpandedChange
    }

    public var body: some View {
        let state = expanded ? "open" : (hovered ? "hover" : "closed")
        let root = S1ExpandableCardSpec.box(state, "root")
        let headerBox = S1ExpandableCardSpec.box(state, "header")
        let textBox = S1ExpandableCardSpec.box(state, "text")
        let iconBox = S1ExpandableCardSpec.box(state, "toggleIcon")
        let wrap = S1ExpandableCardSpec.box(state, "panelWrap")
        /* 펼침칸은 열렸을 때의 안쪽 여백으로 그린다 — 닫힘 값은 접혀 숨는 동안의 값이다. */
        let panelBox = S1ExpandableCardSpec.box("open", "panel")
        let iconAnimation = Animation.easeInOut(duration: iconBox.duration ?? 0)
        let openAnimation = Animation.easeInOut(duration: wrap.duration ?? 0)
        VStack(alignment: .leading, spacing: 0) {
            S1Pressable(action: { onExpandedChange(!expanded) }) { _ in
                HStack(spacing: headerBox.gap) {
                    VStack(alignment: .leading, spacing: textBox.gap) {
                        S1CardTextLines(texts: header, state: state, prefix: "")
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                    if iconBox.icon != nil {
                        S1Icon(box: iconBox, tint: iconBox.background)
                            .animation(iconAnimation, value: state)
                    }
                }
                .s1Box(headerBox, alignment: .leading)
            }
            .onHover { hovered = $0 }
            .accessibilityLabel(header.title ?? "")
            .accessibilityValue(expanded ? "펼침" : "접힘")
            .accessibilityHint(expanded ? "누르면 접힙니다" : "누르면 펼칩니다")
            if expanded {
                VStack(alignment: .leading, spacing: panelBox.gap) {
                    S1CardTextLines(texts: panel, state: "open", prefix: "panel")
                }
                .frame(maxWidth: .infinity, alignment: .leading)
                .s1Box(panelBox, alignment: .topLeading)
                .clipShape(root.shape)
                .transition(.opacity)
            }
        }
        .animation(openAnimation, value: expanded)
        .frame(maxWidth: .infinity, alignment: .leading)
        .s1Box(root, applyPadding: false, alignment: .topLeading)
    }

}

struct S1CardTextLines: View {
    let texts: S1CardTexts
    let state: String
    let prefix: String

    var body: some View {
        let rows: [(String, String?)] = [
            ("title", texts.title),
            ("subtitle", texts.subtitle),
            ("body", texts.body),
            ("note", texts.note),
            ("caption", texts.caption)
        ]
        ForEach(0..<rows.count, id: \.self) { index in
            if let text = rows[index].1 {
                let name = rows[index].0
                let part = prefix.isEmpty ? name : prefix + name.prefix(1).uppercased() + name.dropFirst()
                let box = S1ExpandableCardSpec.box(state, part)
                S1Text(text, box)
                    .frame(minHeight: box.minHeight, alignment: .topLeading)
                    .frame(maxWidth: .infinity, alignment: .leading)
            }
        }
    }
}
