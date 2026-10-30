// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1MobileBottomNav — 정본 Mobile Bottom Nav 아이템 1칸(60×60)

import SwiftUI

/// 승인된 하단 내비 **한 칸**. 정본은 칸 하나만 부품으로 만들고 4칸 바는 화면이 조립한다 —
/// 바 배경과 가로 배치는 이 부품이 아니라 화면이 소유한다(웹 배포본과 같은 경계).
///
/// 아이콘은 두 갈래다:
///   · icon — 들어 있는 **예시 아이콘** 중에 고른다: home · search · notification · settings
///   · customIcon — 아이콘 라이브러리에서 받은 그림(Image)을 직접 넣는다(이쪽이 이긴다)
/// 실제 서비스의 하단 내비는 칸 구성이 서비스마다 다르다 — 예시 넷은 "이렇게 쓴다"는 보기일 뿐이고,
/// 받은 아이콘을 customIcon 에 넘기면 된다. 색은 그래도 이 부품이 토큰으로 칠한다.
public struct S1MobileBottomNav: View {
    private let label: String
    private let selected: Bool
    private let icon: String
    private let customIcon: Image?
    private let onClick: () -> Void

    public init(label: String, selected: Bool, icon: String = "home", customIcon: Image? = nil, onClick: @escaping () -> Void) {
        self.label = label
        self.selected = selected
        self.icon = icon
        self.customIcon = customIcon
        self.onClick = onClick
    }

    public var body: some View {
        let _ = s1Require(S1MobileBottomNavSpec.variants.contains(icon), "S1MobileBottomNav: 승인되지 않은 아이콘 \"\(icon)\". 쓸 수 있는 값: " + S1MobileBottomNavSpec.variants.joined(separator: " · "))
        S1Pressable(action: onClick) { _ in
            let key = "\(icon)|\(selected ? "selected" : "unselected")"
            let root = S1MobileBottomNavSpec.box(key, "root")
            let iconBox = S1MobileBottomNavSpec.box(key, "icon")
            let labelBox = S1MobileBottomNavSpec.box(key, "label")
            VStack(spacing: root.gap) {
                if let customIcon {
                    customIcon
                        .renderingMode(.template)
                        .resizable()
                        .scaledToFit()
                        .frame(width: iconBox.width ?? 0, height: iconBox.height ?? 0)
                        .s1Foreground(iconBox.background)
                } else if iconBox.icon != nil {
                    S1Icon(box: iconBox, tint: iconBox.background)
                }
                S1Text(label, labelBox)
                    .lineLimit(1)
            }
            .s1Box(root, alignment: .center)
        }
        .accessibilityLabel(label)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }

}
