// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Input — 정본 Base Input + 비밀번호 · 검색 조립

import SwiftUI

/// 승인된 입력칸. 비밀번호·검색은 별도 부품이 아니라 이 입력칸을 조립한 것이다(river D1, 2026-09-04).
/// 이 부품은 크기 md · 화면 mobile · 변형 base 한 벌뿐이라 고를 파라미터가 없다.
/// 상태는 화면이 정하지 않고 값·초점·플래그에서 정해진다 — 정본 CSS 의 우선순위와 같은 순서다
/// (비활성 > 읽기 전용 > 오류 > 맞음 > 초점 > 기본).
/// mode: "text" · "password" · "search" — 비밀번호는 눈 아이콘으로 보임·숨김을, 검색은 돋보기 버튼을 붙인다.
public struct S1Input: View {
    @FocusState private var focused: Bool
    @State private var passwordVisible = false
    @Environment(\.s1StaticFields) private var staticFields
    private let text: Binding<String>
    private let label: String?
    private let placeholder: String?
    private let message: String?
    private let enabled: Bool
    private let readOnly: Bool
    private let isError: Bool
    private let isCorrect: Bool
    private let mode: String
    private let onSearch: (() -> Void)?

    public init(text: Binding<String>, label: String? = nil, placeholder: String? = nil, message: String? = nil, enabled: Bool = true, readOnly: Bool = false, isError: Bool = false, isCorrect: Bool = false, mode: String = "text", onSearch: (() -> Void)? = nil) {
        self.text = text
        self.label = label
        self.placeholder = placeholder
        self.message = message
        self.enabled = enabled
        self.readOnly = readOnly
        self.isError = isError
        self.isCorrect = isCorrect
        self.mode = mode
        self.onSearch = onSearch
    }

    public var body: some View {
        let state = !enabled ? "disabled" : (readOnly ? "readOnly" : (isError ? "error" : (isCorrect ? "correct" : (focused ? "focus" : "default"))))
        let key = "md|mobile|\(state)"
        let root = S1InputSpec.box(key, "root")
        let labelBox = S1InputSpec.box(key, "label")
        let fieldBox = S1InputSpec.box(key, "field")
        let control = S1InputSpec.box(key, "control")
        let placeholderBox = S1InputSpec.box(key, "placeholder")
        let messageBox = S1InputSpec.box(key, "message")
        VStack(alignment: .leading, spacing: root.gap) {
            if let label {
                S1Text(label, labelBox)
            }
            HStack(spacing: 0) {
                ZStack(alignment: .leading) {
                    if text.wrappedValue.isEmpty, let placeholder {
                        S1Text(placeholder, control, color: placeholderBox.foreground)
                            .lineLimit(1)
                            .allowsHitTesting(false)
                            .accessibilityHidden(true)
                    }
                    if readOnly || staticFields {
                        S1Text((mode == "password" && !passwordVisible) ? String(repeating: "•", count: text.wrappedValue.count) : text.wrappedValue, control)
                            .lineLimit(1)
                            .frame(maxWidth: .infinity, alignment: .leading)
                    } else if mode == "password" && !passwordVisible {
                        SecureField("", text: text)
                            .textFieldStyle(.plain)
                            .focused($focused)
                            .s1FieldText(control)
                            .s1Tint(control.foreground)
                            .disabled(!enabled)
                    } else {
                        TextField("", text: text)
                            .textFieldStyle(.plain)
                            .focused($focused)
                            .s1FieldText(control)
                            .s1Tint(control.foreground)
                            .autocorrectionDisabled(mode == "password")
                            .disabled(!enabled)
                    }
                }
                .frame(maxWidth: .infinity, alignment: .leading)
                .accessibilityElement(children: .contain)
                .accessibilityLabel(label ?? placeholder ?? "")
                .accessibilityHint(message ?? "")
                if !text.wrappedValue.isEmpty {
                    S1InputAction(action: "clear", size: "md", inputState: state, first: true, label: "지우기") { text.wrappedValue = "" }
                }
                if mode == "password" {
                    S1InputAction(action: passwordVisible ? "password-pressed" : "password", size: "md", inputState: state, first: text.wrappedValue.isEmpty, label: passwordVisible ? "비밀번호 숨기기" : "비밀번호 보기") { passwordVisible.toggle() }
                }
                if mode == "search" {
                    S1InputAction(action: "search", size: "md", inputState: state, first: text.wrappedValue.isEmpty, label: "검색") { onSearch?() }
                }
            }
            .s1Box(fieldBox, alignment: .leading)
            if let message {
                S1Text(message, messageBox)
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

}

/// 입력칸 안의 액션(지우기·비밀번호 보기·검색).
struct S1InputAction: View {
    private let action: String
    private let size: String
    private let inputState: String
    private let first: Bool
    private let label: String
    private let onClick: () -> Void

    public init(action: String, size: String, inputState: String, first: Bool, label: String, onClick: @escaping () -> Void) {
        self.action = action
        self.size = size
        self.inputState = inputState
        self.first = first
        self.label = label
        self.onClick = onClick
    }

    public var body: some View {
        S1Pressable(enabled: inputState != "disabled", action: onClick) { interaction in
            let state = inputState == "disabled" ? "disabled" : (interaction.hovered ? "hover" : "default")
            let key = "\(size)|mobile|\(action)|\(state)"
            let box = S1InputSpec.inputActionsBox(key, "action")
            let icon = S1InputSpec.inputActionsBox(key, "icon")
            ZStack {
                if icon.icon != nil {
                    S1Icon(box: icon, tint: box.foreground)
                }
            }
            .s1Box(box, applyPadding: false, alignment: .center)
            .padding(.leading, first ? 0 : box.marginStart)
        }
        .accessibilityLabel(label)
    }

}
