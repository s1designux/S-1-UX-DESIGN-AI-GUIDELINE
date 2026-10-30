// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Radio — 정본 Radio(원 18×18, 점 10×10)

import SwiftUI

/// 승인된 라디오. 정본에 크기·화면 축이 없어 PC 와 모바일이 같은 한 벌이다.
/// 라벨은 선택 부품이라 없으면 상자만 남는다. 선택 표시 색은 상자의 글자색을 따라간다(정본 currentColor).
/// onClick 를 nil 로 두면 누르지 않는 표시용이다(시트 옵션 줄 안에서 쓰인다).
public struct S1Radio: View {
    private let selected: Bool
    private let label: String?
    private let enabled: Bool
    private let onClick: (() -> Void)?

    public init(selected: Bool, label: String? = nil, enabled: Bool = true, onClick: (() -> Void)? = nil) {
        self.selected = selected
        self.label = label
        self.enabled = enabled
        self.onClick = onClick
    }

    public var body: some View {
        S1Pressable(enabled: enabled, action: onClick == nil ? nil : { onClick?() }) { interaction in
            let state = !enabled && selected ? "disabledChecked" : (!enabled ? "disabled" : (selected ? "checked" : (interaction.hovered ? "hover" : "default")))
            let root = S1RadioSpec.box(state, "root")
            let control = S1RadioSpec.box(state, "control")
            let indicator = S1RadioSpec.box(state, "indicator")
            let labelBox = S1RadioSpec.box(state, "label")
            HStack(spacing: root.gap) {
                ZStack {
                    if selected {
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
        .accessibilityValue(selected ? "선택됨" : "선택 안 됨")
        .accessibilityAddTraits(onClick == nil ? [] : .isButton)
    }

}
