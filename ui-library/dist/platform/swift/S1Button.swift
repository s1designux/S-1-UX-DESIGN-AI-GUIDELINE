// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Button — 정본 Button(primary · secondary · blue-line × lg)

import SwiftUI

/// 승인된 버튼. 없는 조합을 넣으면 그 자리에서 멈추고 쓸 수 있는 조합을 알려 준다.
/// 이 부품은 크기 lg · 화면 mobile 한 벌뿐이라 고를 파라미터가 없다.
/// Hover 는 포인터가 있는 화면(iPad·Mac)에서만 생긴다. 손가락으로 누르는 동안은 정본 Hover 칸을 쓴다(모바일은 누름이 hover 를 대신한다).
public struct S1Button: View {
    private let text: String
    private let variant: String
    private let fullWidth: Bool
    private let enabled: Bool
    private let action: () -> Void

    public init(text: String, variant: String = "primary", fullWidth: Bool = false, enabled: Bool = true, action: @escaping () -> Void) {
        self.text = text
        self.variant = variant
        self.fullWidth = fullWidth
        self.enabled = enabled
        self.action = action
    }

    public var body: some View {
        S1Pressable(enabled: enabled, action: action) { interaction in
            let state = !enabled ? "disabled" : (interaction.active ? "hover" : "default")
            let box = S1ButtonSpec.box("\(variant)|lg|\(state)", "root")
            S1Text(text, box)
                .multilineTextAlignment(.center)
                .lineLimit(1)
                .frame(maxWidth: fullWidth ? .infinity : nil)
                .s1Box(box, alignment: .center)
        }
        .accessibilityLabel(text)
    }

}
