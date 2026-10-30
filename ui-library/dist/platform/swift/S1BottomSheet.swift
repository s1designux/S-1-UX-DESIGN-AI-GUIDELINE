// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1BottomSheet — 정본 Bottom Sheet(Footer None · Single · Dual)

import SwiftUI

/// 시트 껍데기 — 딤 + 화면 아래에 붙은 패널. 바텀 시트·날짜 선택·시간 선택 시트가 같이 쓴다.
/// 패널의 높이 상한(화면의 몇 %)과 폭 상한은 표에서 읽는다. 패널 안을 누르는 것은 딤으로 새지 않는다.
struct S1SheetFrame<Content: View>: View {
    let backdrop: S1Box
    let panel: S1Box
    let onDismiss: () -> Void
    let content: Content

    init(backdrop: S1Box, panel: S1Box, onDismiss: @escaping () -> Void, @ViewBuilder content: () -> Content) {
        self.backdrop = backdrop
        self.panel = panel
        self.onDismiss = onDismiss
        self.content = content()
    }

    var body: some View {
        GeometryReader { proxy in
            ZStack(alignment: .bottom) {
                S1Fill(Rectangle(), backdrop.background)
                    .contentShape(Rectangle())
                    .onTapGesture(perform: onDismiss)
                    .accessibilityHidden(true)
                S1SheetPanelStack(panel: panel, content: content)
                    .frame(maxWidth: panel.maxWidth ?? .infinity)
                    .frame(maxHeight: panel.maxHeightVh.map { proxy.size.height * $0 / 100 })
                    .fixedSize(horizontal: false, vertical: true)
                    .s1Box(panel, applySize: false, applyPadding: false, alignment: .top)
                    .contentShape(Rectangle())
                    .onTapGesture {}
                    .accessibilityElement(children: .contain)
                    .accessibilityAddTraits(.isModal)
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .bottom)
        }
    }
}

/// 시트 패널 안쪽 — 안쪽 여백과 칸 사이 간격. 시스템 시트(.sheet)로 띄울 때는 이것만 쓴다.
struct S1SheetPanelStack<Content: View>: View {
    let panel: S1Box
    let content: Content

    var body: some View {
        VStack(alignment: .leading, spacing: panel.gap) { content }
            .padding(panel.insets)
    }
}

/// 시트 머리줄 — 제목과 닫기 아이콘.
struct S1SheetHeader: View {
    let title: String
    let header: S1Box
    let titleBox: S1Box
    let close: S1Box
    let onClose: () -> Void

    var body: some View {
        HStack(spacing: header.spaceBetween ? 0 : header.gap) {
            S1Text(title, titleBox)
                .frame(maxWidth: .infinity, alignment: .leading)
                .accessibilityAddTraits(.isHeader)
            if close.icon != nil {
                S1Pressable(action: onClose) { _ in
                    S1Icon(box: close, tint: close.background)
                }
                .accessibilityLabel("닫기")
            }
        }
        .padding(header.insets)
        .frame(maxWidth: .infinity)
    }
}

/// 시트 푸터 — 버튼이 폭을 나눠 갖는다(정본 flex 1 1 0).
struct S1SheetFooter<Content: View>: View {
    let footer: S1Box
    let content: Content

    init(footer: S1Box, @ViewBuilder content: () -> Content) {
        self.footer = footer
        self.content = content()
    }

    var body: some View {
        HStack(spacing: footer.gap) { content }
            .padding(footer.insets)
            .frame(maxWidth: .infinity)
    }
}

/// 본문이 시트 높이 상한보다 길면 스크롤되고, 짧으면 제 높이만 차지한다(Compose 의 weight(1f, fill = false) 와 같다).
struct S1SheetScroll<Content: View>: View {
    let content: Content

    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }

    var body: some View {
        ViewThatFits(in: .vertical) {
            content
            ScrollView(.vertical, showsIndicators: false) { content }
        }
    }
}

/// 승인된 바텀 시트(패널). 화면 아래에 붙어 올라오고, 딤(바깥)을 누르거나 닫기 버튼을 누르면 닫힌다.
/// 모바일 한 벌뿐이라 고를 것은 푸터(버튼 없음 / 하나 / 둘)이고, 푸터는 넘긴 라벨로 정해진다.
///
///   · primaryLabel 이 없으면 푸터 없음
///   · primaryLabel 만 있으면 버튼 하나(primary)
///   · secondaryLabel 도 있으면 버튼 둘(secondary + primary)
///
/// 본문(content)은 화면이 채운다 — 보통 S1BottomSheetOption 줄들이다. 본문이 길면 시트 안에서 스크롤된다.
/// 딤과 패널을 직접 그린다 — 미리보기·화면 안에 끼워 넣을 때 쓴다. 화면 위로 띄울 때는 s1BottomSheet 수식어를 쓴다.
public struct S1BottomSheetPanel<Content: View>: View {
    private let title: String
    private let primaryLabel: String?
    private let secondaryLabel: String?
    private let framed: Bool
    private let onDismiss: () -> Void
    private let onPrimary: () -> Void
    private let onSecondary: () -> Void
    private let content: Content

    public init(
        title: String,
        primaryLabel: String? = nil,
        secondaryLabel: String? = nil,
        onDismiss: @escaping () -> Void = {},
        onPrimary: (() -> Void)? = nil,
        onSecondary: (() -> Void)? = nil,
        @ViewBuilder content: () -> Content
    ) {
        self.init(title: title, primaryLabel: primaryLabel, secondaryLabel: secondaryLabel, framed: true, onDismiss: onDismiss, onPrimary: onPrimary, onSecondary: onSecondary, content: content)
    }

    init(
        title: String,
        primaryLabel: String?,
        secondaryLabel: String?,
        framed: Bool,
        onDismiss: @escaping () -> Void,
        onPrimary: (() -> Void)?,
        onSecondary: (() -> Void)?,
        @ViewBuilder content: () -> Content
    ) {
        s1Require(primaryLabel != nil || secondaryLabel == nil, "S1BottomSheet: 버튼이 하나뿐이면 secondaryLabel 이 아니라 primaryLabel 에 넘기세요.")
        self.title = title
        self.primaryLabel = primaryLabel
        self.secondaryLabel = secondaryLabel
        self.framed = framed
        self.onDismiss = onDismiss
        self.onPrimary = onPrimary ?? onDismiss
        self.onSecondary = onSecondary ?? onDismiss
        self.content = content()
    }

    public var body: some View {
        let footerKind = primaryLabel == nil ? "none" : (secondaryLabel == nil ? "single" : "dual")
        let backdrop = S1BottomSheetSpec.box(footerKind, "backdrop")
        let panel = S1BottomSheetSpec.box(footerKind, "panel")
        let contentBox = S1BottomSheetSpec.box(footerKind, "content")
        let headerBox = S1BottomSheetSpec.box(footerKind, "header")
        let titleBox = S1BottomSheetSpec.box(footerKind, "title")
        let close = S1BottomSheetSpec.box(footerKind, "close")
        S1SheetWrap(framed: framed, backdrop: backdrop, panel: panel, onDismiss: onDismiss) {
            VStack(alignment: .leading, spacing: contentBox.gap) {
                S1SheetHeader(title: title, header: headerBox, titleBox: titleBox, close: close, onClose: onDismiss)
                S1SheetScroll {
                    VStack(alignment: .leading, spacing: 0) { content }
                        .frame(maxWidth: .infinity, alignment: .leading)
                }
            }
            if let primaryLabel {
                S1SheetFooter(footer: S1BottomSheetSpec.box(footerKind, "footer")) {
                    if let secondaryLabel {
                        S1Button(text: secondaryLabel, variant: "secondary", fullWidth: true, action: onSecondary)
                    }
                    S1Button(text: primaryLabel, variant: "primary", fullWidth: true, action: onPrimary)
                }
            }
        }
    }
}

/// 시트 껍데기를 두를지(미리보기·겹쳐 올림) 말지(시스템 시트 안) 가른다.
struct S1SheetWrap<Content: View>: View {
    let framed: Bool
    let backdrop: S1Box
    let panel: S1Box
    let onDismiss: () -> Void
    let content: Content

    init(framed: Bool, backdrop: S1Box, panel: S1Box, onDismiss: @escaping () -> Void, @ViewBuilder content: () -> Content) {
        self.framed = framed
        self.backdrop = backdrop
        self.panel = panel
        self.onDismiss = onDismiss
        self.content = content()
    }

    var body: some View {
        if framed {
            S1SheetFrame(backdrop: backdrop, panel: panel, onDismiss: onDismiss) { content }
        } else {
            S1SheetPanelStack(panel: panel, content: content)
        }
    }
}

extension View {
    /// 화면 아래에서 올라오는 승인된 바텀 시트. 안쪽 높이만큼만 올라오고, 끌어내리거나 닫기 버튼으로 닫힌다.
    /// 푸터는 라벨로 정해진다(primaryLabel 없음 = 푸터 없음 · 하나 = 버튼 하나 · secondaryLabel 도 = 버튼 둘).
    public func s1BottomSheet<Content: View>(
        isPresented: Binding<Bool>,
        title: String,
        primaryLabel: String? = nil,
        secondaryLabel: String? = nil,
        onPrimary: (() -> Void)? = nil,
        onSecondary: (() -> Void)? = nil,
        @ViewBuilder content: @escaping () -> Content
    ) -> some View {
        let footerKind = primaryLabel == nil ? "none" : (secondaryLabel == nil ? "single" : "dual")
        return s1Sheet(isPresented: isPresented, panel: S1BottomSheetSpec.box(footerKind, "panel")) {
            S1BottomSheetPanel(
                title: title, primaryLabel: primaryLabel, secondaryLabel: secondaryLabel, framed: false,
                onDismiss: { isPresented.wrappedValue = false },
                onPrimary: onPrimary.map { action in { action(); isPresented.wrappedValue = false } },
                onSecondary: onSecondary.map { action in { action(); isPresented.wrappedValue = false } },
                content: content
            )
        }
    }
}
