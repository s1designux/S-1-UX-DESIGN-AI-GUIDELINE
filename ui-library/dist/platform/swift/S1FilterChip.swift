// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1FilterChip — 정본 Filter Chip(트리거) + 목록은 S1Dropdown 재사용

import SwiftUI

/// 승인된 필터 칩. 목록은 별도 부품(S1Dropdown)을 그대로 쓰고 여기서는 배치·폭만 담당한다.
/// 제목(title)을 주면 "제목 값" 두 칸이 되고, 주지 않으면 값 한 칸이다 — 정본의 Title 축이 그것이다.
/// 고른 뒤의 complete 는 정본이 default 와 같은 면을 쓴다(값만 바뀐다).
/// 이 부품은 크기 md · 화면 mobile 한 벌뿐이라 고를 파라미터가 없다.
public struct S1FilterChip: View {
    @State private var expanded = false
    @State private var triggerSize: CGSize = .zero
    private let options: [String]
    private let selectedIndex: Int?
    private let title: String?
    private let placeholder: String
    private let variant: String
    private let enabled: Bool
    private let onSelect: (Int) -> Void

    public init(options: [String], selectedIndex: Int?, title: String? = nil, placeholder: String = "전체", variant: String = "line", enabled: Bool = true, onSelect: @escaping (Int) -> Void) {
        self.options = options
        self.selectedIndex = selectedIndex
        self.title = title
        self.placeholder = placeholder
        self.variant = variant
        self.enabled = enabled
        self.onSelect = onSelect
    }

    public var body: some View {
        let titleAxis = title != nil ? "on" : "off"
        let panelMargin = S1FilterChipSpec.box("\(variant)|md|mobile|\(titleAxis)|default", "panel").marginTop
        let valueText = selectedIndex.flatMap { options.indices.contains($0) ? options[$0] : nil } ?? placeholder
        S1Pressable(enabled: enabled, action: { expanded.toggle() }) { interaction in
            let state = !enabled ? "disabled" : (expanded ? "selected" : (selectedIndex != nil ? "complete" : (interaction.hovered ? "hover" : "default")))
            let key = "\(variant)|md|mobile|\(titleAxis)|\(state)"
            let trigger = S1FilterChipSpec.box(key, "trigger")
            let valueBox = S1FilterChipSpec.box(key, "value")
            let icon = S1FilterChipSpec.box(key, "icon")
            HStack(spacing: trigger.gap) {
                if let title {
                    let titleBox = S1FilterChipSpec.box(key, "title")
                    S1Text(title, trigger, color: titleBox.foreground ?? trigger.foreground)
                        .lineLimit(1)
                }
                S1Text(valueText, trigger, color: valueBox.foreground ?? trigger.foreground)
                    .lineLimit(1)
                if icon.icon != nil {
                    S1Icon(box: icon, tint: icon.background)
                }
            }
            .s1Box(trigger, alignment: .leading)
        }
        .background(GeometryReader { proxy in Color.clear.onAppear { triggerSize = proxy.size }.onChange(of: proxy.size) { triggerSize = $0 } })
        .overlay(alignment: .topLeading) {
            if expanded {
                ZStack(alignment: .topLeading) {
                    Color.clear
                        .frame(width: S1Layout.outsideTapReach, height: S1Layout.outsideTapReach)
                        .contentShape(Rectangle())
                        .onTapGesture { expanded = false }
                        .offset(x: -S1Layout.outsideTapReach / 2, y: -S1Layout.outsideTapReach / 2)
                    S1Dropdown(
                        options: options,
                        selectedIndices: selectedIndex.map { [$0] } ?? [],
                        onOptionClick: { index in
                            onSelect(index)
                            expanded = false
                        }
                    )
                    .frame(width: triggerSize.width)
                    .offset(y: triggerSize.height + panelMargin)
                }
            }
        }
        .zIndex(expanded ? 1 : 0)
        .accessibilityElement(children: .contain)
        .accessibilityLabel([title, valueText].compactMap { $0 }.joined(separator: ", "))
    }

}
