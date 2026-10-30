// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Select — 정본 Select Box(트리거 5상태) + 목록은 S1Dropdown 재사용

import SwiftUI

/// 승인된 셀렉트 박스. 목록은 별도 부품(S1Dropdown)을 그대로 쓰고, 여기서는 배치와 폭만 담당한다 —
/// 웹 배포본에서 select.css 가 dropdown.css 를 복제하지 않는 것과 같은 구조다.
/// 이 부품은 크기 md · 화면 mobile · 변형 base 한 벌뿐이라 고를 파라미터가 없다.
/// 목록은 트리거 아래에 겹쳐 열리고, 바깥을 누르거나 항목을 고르면 닫힌다. 같은 줄의 다른 부품 위로 올라오게 하려면 호출하는 쪽이 zIndex 를 주지 않아도 된다(이 부품이 스스로 올린다).
public struct S1Select: View {
    @State private var expanded = false
    @State private var triggerSize: CGSize = .zero
    private let options: [String]
    private let selectedIndex: Int?
    private let placeholder: String
    private let enabled: Bool
    private let onSelect: (Int) -> Void

    public init(options: [String], selectedIndex: Int?, placeholder: String = "선택", enabled: Bool = true, onSelect: @escaping (Int) -> Void) {
        self.options = options
        self.selectedIndex = selectedIndex
        self.placeholder = placeholder
        self.enabled = enabled
        self.onSelect = onSelect
    }

    public var body: some View {
        let panelMargin = S1SelectSpec.box("md|mobile|default", "panel").marginTop
        S1Pressable(enabled: enabled, action: { expanded.toggle() }) { interaction in
            let state = !enabled ? "disabled" : (expanded ? "open" : (selectedIndex != nil ? "filled" : (interaction.hovered ? "hover" : "default")))
            let key = "md|mobile|\(state)"
            let trigger = S1SelectSpec.box(key, "trigger")
            let icon = S1SelectSpec.box(key, "icon")
            HStack(spacing: 0) {
                S1Text(selectedIndex.flatMap { options.indices.contains($0) ? options[$0] : nil } ?? placeholder, trigger)
                    .lineLimit(1)
                Spacer(minLength: 0)
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
                        type: "text", size: "md", onOptionClick: { index in
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
        .accessibilityLabel(placeholder)
        .accessibilityValue(selectedIndex.flatMap { options.indices.contains($0) ? options[$0] : nil } ?? "")
    }

}
