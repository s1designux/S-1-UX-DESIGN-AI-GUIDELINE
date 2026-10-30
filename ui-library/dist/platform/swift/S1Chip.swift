// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Chip — 정본 Chip(line · solid)

import SwiftUI

/// 승인된 칩. 눌린 상태(selected)는 정본 Selected 셀을 쓰고, 선택된 칩에는 Hover 변형이 없다.
/// 이 부품은 크기 sm · 화면 mobile 한 벌뿐이라 고를 파라미터가 없다.
public struct S1Chip: View {
    private let text: String
    private let selected: Bool
    private let variant: String
    private let enabled: Bool
    private let onSelectedChange: (Bool) -> Void

    public init(text: String, selected: Bool, variant: String = "line", enabled: Bool = true, onSelectedChange: @escaping (Bool) -> Void) {
        self.text = text
        self.selected = selected
        self.variant = variant
        self.enabled = enabled
        self.onSelectedChange = onSelectedChange
    }

    public var body: some View {
        S1Pressable(enabled: enabled, action: { onSelectedChange(!selected) }) { interaction in
            let state = !enabled ? "disabled" : (selected ? "selected" : (interaction.hovered ? "hover" : "default"))
            let box = S1ChipSpec.box("\(variant)|sm|mobile|\(state)", "root")
            S1Text(text, box)
                .multilineTextAlignment(.center)
                .lineLimit(1)
                .s1Box(box, alignment: .center)
        }
        .accessibilityLabel(text)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }

}
