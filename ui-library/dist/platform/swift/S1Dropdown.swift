// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Dropdown — 정본 Dropdown(패널 + 옵션 행 · Text·Checkbox 유형)

import SwiftUI

/// 승인된 목록. 정본에 화면 축이 없어 PC 와 모바일이 같은 한 벌이다.
/// 폭은 정본 규칙대로 최소 100 이고, 트리거가 있는 소비자(S1Select)가 자기 폭을 넘겨준다.
/// 긴 옵션은 줄바꿈하지 않고 말줄임으로 자른다(river 결정 2026-09-07).
public struct S1Dropdown: View {
    private let options: [String]
    private let selectedIndices: Set<Int>
    private let type: String
    private let size: String
    private let selectAllLabel: String?
    private let selectAllChecked: Bool
    private let onSelectAll: (() -> Void)?
    private let onOptionClick: (Int) -> Void

    public init(options: [String], selectedIndices: Set<Int>, type: String = "text", size: String = "xxsm", selectAllLabel: String? = nil, selectAllChecked: Bool = false, onSelectAll: (() -> Void)? = nil, onOptionClick: @escaping (Int) -> Void) {
        self.options = options
        self.selectedIndices = selectedIndices
        self.type = type
        self.size = size
        self.selectAllLabel = selectAllLabel
        self.selectAllChecked = selectAllChecked
        self.onSelectAll = onSelectAll
        self.onOptionClick = onOptionClick
    }

    public var body: some View {
        let root = S1DropdownSpec.box("\(type)|\(size)|default", "root")
        VStack(alignment: .leading, spacing: 0) {
            if let selectAllLabel, let onSelectAll {
                S1DropdownOption(label: selectAllLabel, selected: selectAllChecked, type: type, size: size, selectAll: true, onClick: onSelectAll)
                let divider = S1DropdownSpec.box("\(type)|\(size)|default", "divider")
                S1Fill(Rectangle(), divider.background)
                    .frame(height: divider.height ?? 0)
            }
            ForEach(0..<options.count, id: \.self) { index in
                S1DropdownOption(
                    label: options[index],
                    selected: selectedIndices.contains(index),
                    type: type,
                    size: size,
                    selectAll: false,
                    onClick: { onOptionClick(index) }
                )
            }
        }
        .s1Box(root, alignment: .topLeading)
        .accessibilityElement(children: .contain)
    }

}

/// 목록의 한 줄 — hover · selected · default.
struct S1DropdownOption: View {
    private let label: String
    private let selected: Bool
    private let type: String
    private let size: String
    private let selectAll: Bool
    private let onClick: () -> Void

    public init(label: String, selected: Bool, type: String, size: String, selectAll: Bool, onClick: @escaping () -> Void) {
        self.label = label
        self.selected = selected
        self.type = type
        self.size = size
        self.selectAll = selectAll
        self.onClick = onClick
    }

    public var body: some View {
        S1Pressable(action: onClick) { interaction in
            let state = interaction.hovered ? "hover" : (selected ? "selected" : "default")
            let key = "\(type)|\(size)|\(state)"
            let option = S1DropdownSpec.box(key, selectAll ? "selectAll" : "option")
            HStack(spacing: option.gap) {
                if type == "checkbox" {
                    S1Checkbox(checked: selected)
                }
                S1Text(label, option)
                    .lineLimit(1)
                Spacer(minLength: 0)
            }
            .s1Box(option, alignment: .leading)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .accessibilityLabel(label)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }

}
