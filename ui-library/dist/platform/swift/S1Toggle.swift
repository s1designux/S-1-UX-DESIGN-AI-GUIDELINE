// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Toggle — 정본 Toggle(트랙 40×20, 노브 16×16)

import SwiftUI

/// 승인된 토글. 정본에 크기·화면 축이 없어 PC 와 모바일이 같은 한 벌이고, Hover·모션 변형도 없다.
/// 노브 위치는 정본 값(꺼짐 왼쪽 2 · 켜짐 오른쪽 2)을 그대로 쓴다.
/// 접근성 이름은 accessibilityLabel 로 준다(정본에 글자가 없는 부품이다).
public struct S1Toggle: View {
    private let checked: Bool
    private let accessibilityLabel: String
    private let enabled: Bool
    private let onCheckedChange: (Bool) -> Void

    public init(checked: Bool, accessibilityLabel: String = "", enabled: Bool = true, onCheckedChange: @escaping (Bool) -> Void) {
        self.checked = checked
        self.accessibilityLabel = accessibilityLabel
        self.enabled = enabled
        self.onCheckedChange = onCheckedChange
    }

    public var body: some View {
        let state = !enabled && checked ? "disabledOn" : (!enabled ? "disabledOff" : (checked ? "on" : "off"))
        let track = S1ToggleSpec.box(state, "root")
        let knob = S1ToggleSpec.box(state, "knob")
        let inset = knob.right ?? knob.left ?? 0
        let onRight = knob.right != nil
        S1Pressable(enabled: enabled, action: { onCheckedChange(!checked) }) { _ in
            S1Fill(knob.shape, knob.background)
                .frame(width: knob.width ?? 0, height: knob.height ?? 0)
                .padding(.horizontal, inset)
                .s1Box(track, applyPadding: false, alignment: onRight ? .trailing : .leading)
        }
        .accessibilityRepresentation {
            Toggle(accessibilityLabel, isOn: Binding(get: { checked }, set: { onCheckedChange($0) }))
                .disabled(!enabled)
        }
    }

}
