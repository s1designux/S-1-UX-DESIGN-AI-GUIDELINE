// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1BottomSheetOption — 정본 Bottom Sheet Option(Text · Checkbox · Radio · List)

import SwiftUI

/// 승인된 시트 옵션 한 줄. 유형이 줄의 모양을 정하고, 상태는 선택 · 비활성(둘 다 아니면 기본)이다.
/// 정본에 없는 칸은 만들지 않는다 — Checkbox·Radio 에는 비활성이, List 에는 선택이 없어서
/// 그 조합을 넘기면 쓸 수 있는 조합을 알려 주며 멈춘다.
///
///   · type      text · checkbox · radio · list
///   · selected  text 는 글자색이 바뀌고 체크 표시가 붙는다 / checkbox·radio 는 안쪽 부품이 선택 모양이 된다
///   · enabled   false 면 비활성(text · list)
///
/// checkbox·radio 줄 안의 부품은 승인된 S1Checkbox·S1Radio 를 그대로 쓴다. 줄 전체가 눌리는 자리다.
/// list 줄은 왼쪽에 동그란 자리(아바타)와 두 줄 글자, 오른쪽에 화살표(비활성이면 자물쇠)를 둔다.
public struct S1BottomSheetOption: View {
    private let label: String
    private let type: String
    private let selected: Bool
    private let enabled: Bool
    private let subtitle: String?
    private let onClick: (() -> Void)?

    public init(label: String, type: String = "text", selected: Bool = false, enabled: Bool = true, subtitle: String? = nil, onClick: (() -> Void)? = nil) {
        self.label = label
        self.type = type
        self.selected = selected
        self.enabled = enabled
        self.subtitle = subtitle
        self.onClick = onClick
    }

    public var body: some View {
        let state = !enabled ? "disabled" : (selected ? "selected" : "default")
        let key = "\(type)|\(state)"
        let root = S1BottomSheetOptionSpec.box(key, "root")
        S1Pressable(enabled: enabled, action: enabled ? onClick : nil) { _ in
            HStack(spacing: root.spaceBetween ? 0 : root.gap) {
                switch type {
                case "text":
                    S1Text(label, S1BottomSheetOptionSpec.box(key, "label"))
                        .frame(maxWidth: root.spaceBetween ? .infinity : nil, alignment: .leading)
                    if selected {
                        let check = S1BottomSheetOptionSpec.box(key, "check")
                        if check.icon != nil {
                            S1Icon(box: check, tint: check.background)
                        }
                    }
                case "checkbox":
                    S1Checkbox(checked: selected, enabled: enabled)
                    S1Text(label, S1BottomSheetOptionSpec.box(key, "label"))
                    Spacer(minLength: 0)
                case "radio":
                    S1Radio(selected: selected, enabled: enabled)
                    S1Text(label, S1BottomSheetOptionSpec.box(key, "label"))
                    Spacer(minLength: 0)
                case "list":
                    let left = S1BottomSheetOptionSpec.box(key, "listLeft")
                    let avatar = S1BottomSheetOptionSpec.box(key, "avatar")
                    let avatarIcon = S1BottomSheetOptionSpec.box(key, "avatarIcon")
                    let textColumn = S1BottomSheetOptionSpec.box(key, "listText")
                    HStack(spacing: left.gap) {
                        ZStack {
                            if avatarIcon.icon != nil {
                                S1Icon(box: avatarIcon, tint: avatarIcon.background)
                            }
                        }
                        .s1Box(avatar, alignment: .center)
                        VStack(alignment: .leading, spacing: textColumn.gap) {
                            S1Text(label, S1BottomSheetOptionSpec.box(key, "listTitle"))
                            if let subtitle {
                                S1Text(subtitle, S1BottomSheetOptionSpec.box(key, "listSub"))
                            }
                        }
                        .frame(maxWidth: .infinity, alignment: .leading)
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                    let trailing = S1BottomSheetOptionSpec.box(key, enabled ? "chevron" : "lock")
                    if trailing.icon != nil {
                        S1Icon(box: trailing, tint: trailing.background)
                    }
                default:
                    let _ = s1Require(false, "[s1] bottom-sheet-option: 승인되지 않은 유형 \"\(type)\". 쓸 수 있는 값: \(S1BottomSheetOptionSpec.variants.joined(separator: " · "))")
                }
            }
            .s1Box(root, alignment: .leading)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .accessibilityLabel(label)
        .accessibilityValue(subtitle ?? "")
        .accessibilityAddTraits(selected ? .isSelected : [])
    }

}
