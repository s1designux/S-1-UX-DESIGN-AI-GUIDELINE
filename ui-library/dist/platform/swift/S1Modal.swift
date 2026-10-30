// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Modal — 정본 Modal Shell(Footer Single·Dual)

import SwiftUI

/// 딤과 패널만 그린다 — 미리보기 화면처럼 시트 없이 보여줄 때, 또는 s1Modal 이 겹쳐 올릴 때 쓴다.
/// 정본에 크기 축·상태 축이 없고, iOS 는 모바일 한 벌만 쓰므로 변형은 푸터(확인만 / 취소+확인) 둘뿐이다.
/// 푸터 버튼 크기는 승인된 모바일 예제 마크업에서 읽은 값(lg)이다.
/// 모바일 정본에는 닫기 버튼이 없어 여기서도 그리지 않는다.
public struct S1ModalPanel: View {
    private let title: String
    private let message: String
    private let confirmLabel: String
    private let cancelLabel: String?
    private let onConfirm: () -> Void
    private let onCancel: () -> Void

    public init(title: String, message: String, confirmLabel: String = "확인", cancelLabel: String? = nil, onConfirm: @escaping () -> Void = {}, onCancel: @escaping () -> Void = {}) {
        self.title = title
        self.message = message
        self.confirmLabel = confirmLabel
        self.cancelLabel = cancelLabel
        self.onConfirm = onConfirm
        self.onCancel = onCancel
    }

    public var body: some View {
        let footerKind = cancelLabel == nil ? "single" : "dual"
        let key = "mobile|\(footerKind)"
        let overlay = S1ModalSpec.box(key, "overlay")
        let panel = S1ModalSpec.box(key, "panel")
        let content = S1ModalSpec.box(key, "content")
        let headerBox = S1ModalSpec.box(key, "header")
        let titleBox = S1ModalSpec.box(key, "title")
        let bodyBox = S1ModalSpec.box(key, "body")
        let messageBox = S1ModalSpec.box(key, "message")
        let footerBox = S1ModalSpec.box(key, "footer")
        ZStack {
            S1Fill(Rectangle(), overlay.background)
                .ignoresSafeArea()
            VStack(alignment: .leading, spacing: panel.gap) {
                VStack(alignment: .leading, spacing: content.gap) {
                    HStack(alignment: .bottom, spacing: headerBox.gap) {
                        S1Text(title, titleBox)
                            .accessibilityAddTraits(.isHeader)
                        Spacer(minLength: 0)
                    }
                    .padding(headerBox.insets)
                    VStack(alignment: .leading, spacing: bodyBox.gap) {
                        S1Text(message, messageBox)
                    }
                    .padding(bodyBox.insets)
                }
                HStack(spacing: footerBox.gap) {
                    if let cancelLabel {
                        S1Button(text: cancelLabel, variant: "secondary", fullWidth: true, action: onCancel)
                    }
                    S1Button(text: confirmLabel, variant: "primary", fullWidth: true, action: onConfirm)
                }
                .padding(footerBox.insets)
            }
            .s1Box(panel, applyPadding: true, alignment: .topLeading)
            .accessibilityElement(children: .contain)
            .accessibilityAddTraits(.isModal)
        }
    }

}

extension View {
    /// 화면 위에 겹쳐 뜨는 모달. 이 수식어를 붙인 화면 전체를 딤으로 덮는다 — 화면 맨 바깥(루트)에 붙인다.
    /// 확인·취소를 누르면 isPresented 가 false 로 돌아간다.
    public func s1Modal(
        isPresented: Binding<Bool>,
        title: String,
        message: String,
        confirmLabel: String = "확인",
        cancelLabel: String? = nil,
        onConfirm: @escaping () -> Void = {},
        onCancel: @escaping () -> Void = {}
    ) -> some View {
        overlay {
            if isPresented.wrappedValue {
                S1ModalPanel(
                    title: title,
                    message: message,
                    confirmLabel: confirmLabel,
                    cancelLabel: cancelLabel,
                    onConfirm: { onConfirm(); isPresented.wrappedValue = false },
                    onCancel: { onCancel(); isPresented.wrappedValue = false }
                )
                .transition(.opacity)
            }
        }
    }
}
