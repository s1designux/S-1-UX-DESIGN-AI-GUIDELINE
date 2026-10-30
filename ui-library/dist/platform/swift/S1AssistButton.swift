// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1AssistButton — 정본 Assist Button(높이 32, 최소 폭 60)

import SwiftUI

/// 승인된 보조 버튼. 누르는 동안의 면은 hover 와 같다(코어 Button 규칙).
/// 이 부품은 화면 mobile 한 벌뿐이라 고를 파라미터가 없다.
public struct S1AssistButton: View {
    private let text: String
    private let enabled: Bool
    private let action: () -> Void

    public init(text: String, enabled: Bool = true, action: @escaping () -> Void) {
        self.text = text
        self.enabled = enabled
        self.action = action
    }

    public var body: some View {
        S1Pressable(enabled: enabled, action: action) { interaction in
            let state = !enabled ? "disabled" : (interaction.pressed ? "pressed" : (interaction.hovered ? "hover" : "default"))
            let key = "\(state)"
            let root = S1AssistButtonSpec.box(key, "root")
            let label = S1AssistButtonSpec.box(key, "label")
            /* 글자 값(크기·굵기·밑줄)은 뿌리 상자가 갖는다 — 라벨 상자는 색만 다를 때 그 색을 덮어쓴다. */
            S1Text(text, root, color: label.foreground ?? root.foreground)
                .lineLimit(1)
                .s1Box(root, alignment: .center)
        }
        .accessibilityLabel(text)
    }

}
