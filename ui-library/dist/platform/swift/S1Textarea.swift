// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Textarea — 정본 Textarea(최소 높이 80, 상태 4가지)

import SwiftUI

/// 승인된 여러 줄 입력. 정본에 크기 축이 없어 한 벌뿐이고, 글자수·도움말·라벨은 이 부품이 아니다
/// (필요하면 화면이 따로 조합한다 — 웹 배포본과 같은 경계).
/// 값이 들어찬 상태(filled)는 따로 그리는 면이 없다 — 정본이 default 와 같은 면을 쓴다.
public struct S1Textarea: View {
    @FocusState private var focused: Bool
    @Environment(\.s1StaticFields) private var staticFields
    private let text: Binding<String>
    private let placeholder: String?
    private let accessibilityLabel: String
    private let enabled: Bool
    private let readOnly: Bool

    public init(text: Binding<String>, placeholder: String? = nil, accessibilityLabel: String = "", enabled: Bool = true, readOnly: Bool = false) {
        self.text = text
        self.placeholder = placeholder
        self.accessibilityLabel = accessibilityLabel
        self.enabled = enabled
        self.readOnly = readOnly
    }

    public var body: some View {
        let state = !enabled ? "disabled" : (readOnly ? "readOnly" : (focused ? "focus" : "default"))
        let control = S1TextareaSpec.box(state, "control")
        let hint = S1TextareaSpec.box(state, "placeholder")
        ZStack(alignment: .topLeading) {
            if text.wrappedValue.isEmpty, let placeholder {
                S1Text(placeholder, control, color: hint.foreground)
                    .allowsHitTesting(false)
                    .accessibilityHidden(true)
            }
            if readOnly || staticFields {
                S1Text(text.wrappedValue, control)
                    .frame(maxWidth: .infinity, alignment: .topLeading)
            } else {
                TextField("", text: text, axis: .vertical)
                    .textFieldStyle(.plain)
                    .focused($focused)
                    .s1FieldText(control)
                    .s1Tint(control.foreground)
                    .disabled(!enabled)
                    .frame(maxWidth: .infinity, alignment: .topLeading)
            }
        }
        .s1Box(control, alignment: .topLeading)
        .frame(maxWidth: .infinity)
        .accessibilityElement(children: .contain)
        .accessibilityLabel(accessibilityLabel.isEmpty ? (placeholder ?? "") : accessibilityLabel)
    }

}
