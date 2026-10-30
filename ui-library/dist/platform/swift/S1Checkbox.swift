// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Checkbox — 정본 Checkbox(18×18, check 16×16)

import SwiftUI

/// 승인된 체크박스. 정본에 크기·화면 축이 없어 PC 와 모바일이 같은 한 벌이다.
/// 라벨은 선택 부품이라 없으면 상자만 남는다. 선택 표시 색은 상자의 글자색을 따라간다(정본 currentColor).
/// onCheckedChange 를 nil 로 두면 누르지 않는 표시용이다(시트 옵션 줄 안에서 쓰인다).
public struct S1Checkbox: View {
    private let checked: Bool
    private let label: String?
    private let enabled: Bool
    private let onCheckedChange: ((Bool) -> Void)?

    public init(checked: Bool, label: String? = nil, enabled: Bool = true, onCheckedChange: ((Bool) -> Void)? = nil) {
        self.checked = checked
        self.label = label
        self.enabled = enabled
        self.onCheckedChange = onCheckedChange
    }

    public var body: some View {
        S1Pressable(enabled: enabled, action: onCheckedChange == nil ? nil : { onCheckedChange?(!checked) }) { interaction in
            let state = !enabled && checked ? "disabledChecked" : (!enabled ? "disabled" : (checked ? "checked" : (interaction.hovered ? "hover" : "default")))
            let root = S1CheckboxSpec.box(state, "root")
            let control = S1CheckboxSpec.box(state, "control")
            let indicator = S1CheckboxSpec.box(state, "indicator")
            let labelBox = S1CheckboxSpec.box(state, "label")
            HStack(spacing: root.gap) {
                ZStack {
                    if checked {
                        if indicator.icon != nil {
                            S1Icon(box: indicator, tint: control.foreground)
                        } else {
                            S1Fill(indicator.shape, control.foreground)
                                .frame(width: indicator.width ?? 0, height: indicator.height ?? 0)
                        }
                    }
                }
                .s1Box(control, alignment: .center)
                if let label {
                    S1Text(label, labelBox)
                }
            }
        }
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(label ?? "")
        .accessibilityValue(checked ? "선택됨" : "선택 안 됨")
        .accessibilityAddTraits(onCheckedChange == nil ? [] : .isButton)
    }

}
