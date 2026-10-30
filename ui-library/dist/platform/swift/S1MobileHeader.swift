// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1MobileHeader — 정본 Mobile Header(AppBar 56)

import SwiftUI

/// 승인된 모바일 헤더. 유형이 유일한 축이고, 유형마다 들어있는 슬롯이 다르다 —
/// 없는 슬롯에 값을 넘기면 그 값은 그려지지 않는다(유형이 슬롯을 정한다).
///
/// 상태바는 부품에 없다. iOS 에서는 OS 가 그리는 영역이라 우리가 그리면 가짜가 된다
/// (웹 배포본과 같은 경계 — river 결정 D5).
///
/// 쓸 수 있는 유형: home-title · home-title-subtitle · standard-title · standard-title-close · standard-no-title · standard-no-title-close
public struct S1MobileHeader: View {
    private let variant: String
    private let title: String?
    private let subtitle: String?
    private let onBack: (() -> Void)?
    private let onClose: (() -> Void)?
    private let onNotification: (() -> Void)?

    public init(variant: String = "home-title", title: String? = nil, subtitle: String? = nil, onBack: (() -> Void)? = nil, onClose: (() -> Void)? = nil, onNotification: (() -> Void)? = nil) {
        self.variant = variant
        self.title = title
        self.subtitle = subtitle
        self.onBack = onBack
        self.onClose = onClose
        self.onNotification = onNotification
    }

    public var body: some View {
        let _ = s1Require(S1MobileHeaderSpec.variants.contains(variant), "S1MobileHeader: 승인되지 않은 유형 \"\(variant)\". 쓸 수 있는 값: " + S1MobileHeaderSpec.variants.joined(separator: " · "))
        let has = { (part: String) -> Bool in S1MobileHeaderSpec.boxes[variant]?[part] != nil }
        let root = S1MobileHeaderSpec.box(variant, "root")
        HStack(spacing: root.gap) {
            if has("back") {
                S1MobileHeaderAction(
                    box: S1MobileHeaderSpec.box(variant, "back"),
                    icon: S1MobileHeaderSpec.box(variant, "backIcon"),
                    hit: S1MobileHeaderSpec.box(variant, "backHit"),
                    label: "이전",
                    onClick: onBack
                )
            }
            if has("stack") {
                let stack = S1MobileHeaderSpec.box(variant, "stack")
                let titleRow = S1MobileHeaderSpec.box(variant, "titleRow")
                let titleBox = S1MobileHeaderSpec.box(variant, "title")
                let subtitleBox = S1MobileHeaderSpec.box(variant, "subtitle")
                VStack(alignment: .leading, spacing: stack.gap) {
                    HStack(spacing: titleRow.gap) {
                        if let title {
                            S1Text(title, titleBox)
                                .lineLimit(1)
                                .accessibilityAddTraits(.isHeader)
                        }
                        if has("arrowIcon") {
                            let arrow = S1MobileHeaderSpec.box(variant, "arrowIcon")
                            if arrow.icon != nil {
                                S1Icon(box: arrow, tint: arrow.background)
                            }
                        }
                    }
                    if let subtitle {
                        S1Text(subtitle, subtitleBox)
                            .lineLimit(1)
                    }
                }
                .frame(maxWidth: .infinity, alignment: .leading)
            } else if has("title") {
                let titleBox = S1MobileHeaderSpec.box(variant, "title")
                ZStack {
                    if let title {
                        S1Text(title, titleBox)
                            .multilineTextAlignment(variant.hasPrefix("home-") ? .leading : .center)
                            .lineLimit(1)
                            .frame(maxWidth: .infinity, alignment: variant.hasPrefix("home-") ? .leading : .center)
                            .accessibilityAddTraits(.isHeader)
                    }
                }
                .frame(maxWidth: .infinity)
                .frame(height: titleBox.height)
            }
            if has("notification") {
                S1MobileHeaderAction(
                    box: S1MobileHeaderSpec.box(variant, "notification"),
                    icon: S1MobileHeaderSpec.box(variant, "notificationIcon"),
                    overlay: S1MobileHeaderSpec.box(variant, "notificationDot"),
                    hit: S1MobileHeaderSpec.box(variant, "notificationHit"),
                    label: "알림",
                    onClick: onNotification
                )
            }
            if has("close") {
                S1MobileHeaderAction(
                    box: S1MobileHeaderSpec.box(variant, "close"),
                    icon: S1MobileHeaderSpec.box(variant, "closeIcon"),
                    hit: S1MobileHeaderSpec.box(variant, "closeHit"),
                    label: "닫기",
                    onClick: onClose
                )
            }
            if has("spacer") {
                let spacer = S1MobileHeaderSpec.box(variant, "spacer")
                Color.clear.frame(width: spacer.width ?? 0, height: spacer.height ?? 0)
            }
        }
        .s1Box(root, alignment: .leading)
        .frame(maxWidth: .infinity)
    }

}

/// 뒤로·닫기·알림 — 보이는 크기는 32×32 한 벌이고, 알림만 위에 빨간 점 레이어가 겹친다.
///
/// 눌리는 영역은 보이는 것보다 바깥으로 넓다(정본 44×44). 바깥 틀은 32 자리만 차지하고
/// 안쪽이 그 제약을 벗어나 44 로 커진다 — 배치는 그대로고 손가락만 넓어진다
/// (웹이 ::before inset -6 으로 하는 것과 같은 결과).
struct S1MobileHeaderAction: View {
    let box: S1Box
    let icon: S1Box
    var overlay: S1Box?
    var hit: S1Box?
    let label: String
    let onClick: (() -> Void)?

    var body: some View {
        let expand = -(hit?.left ?? 0)
        let touchWidth = (box.width ?? 0) + expand * 2
        let touchHeight = (box.height ?? 0) + expand * 2
        S1Pressable(action: onClick) { _ in
            ZStack {
                if icon.icon != nil {
                    S1Icon(box: icon, tint: icon.background)
                }
                if let overlay, overlay.icon != nil {
                    S1Icon(box: S1Box(height: icon.height, width: icon.width, icon: overlay.icon), tint: overlay.background)
                }
            }
            .frame(width: touchWidth, height: touchHeight)
        }
        .frame(width: box.width ?? 0, height: box.height ?? 0)
        .accessibilityLabel(label)
    }
}
