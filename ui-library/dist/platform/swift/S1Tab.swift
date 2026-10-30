// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1TabRow — 정본 Line Tab(기본선 1px · 선택선 2px)

import SwiftUI

/// 승인된 라인 탭. 정본은 탭이 묶음 폭을 균등하게 나눠 갖는다(flex: 1 1 0) — 여기서도 같다.
/// 이 부품은 크기 sm · 화면 mobile · 변형 line 한 벌뿐이라 고를 파라미터가 없다.
public struct S1TabRow: View {
    private let tabs: [String]
    private let selectedIndex: Int
    private let onSelect: (Int) -> Void

    public init(tabs: [String], selectedIndex: Int, onSelect: @escaping (Int) -> Void) {
        self.tabs = tabs
        self.selectedIndex = selectedIndex
        self.onSelect = onSelect
    }

    public var body: some View {
        let root = S1TabSpec.box("sm|mobile|default", "root")
        let baseline = S1TabSpec.box("sm|mobile|default", "baseline")
        ZStack(alignment: .bottom) {
            HStack(spacing: 0) {
                ForEach(0..<tabs.count, id: \.self) { index in
                    S1Tab(label: tabs[index], selected: index == selectedIndex) { onSelect(index) }
                }
            }
            S1Fill(Rectangle(), baseline.background)
                .frame(height: baseline.height ?? 0)
        }
        .s1Box(root, applyPadding: false, alignment: .topLeading)
        .accessibilityElement(children: .contain)
    }

}

/// 탭 한 칸 — 정본 Tab 의 default · hover · selected.
public struct S1Tab: View {
    private let label: String
    private let selected: Bool
    private let onClick: () -> Void

    public init(label: String, selected: Bool, onClick: @escaping () -> Void) {
        self.label = label
        self.selected = selected
        self.onClick = onClick
    }

    public var body: some View {
        S1Pressable(action: onClick) { interaction in
            let state = selected ? "selected" : (interaction.hovered ? "hover" : "default")
            let key = "sm|mobile|\(state)"
            let tab = S1TabSpec.box(key, "tab")
            let indicator = S1TabSpec.box(key, "indicator")
            ZStack(alignment: .bottom) {
                S1Text(label, tab)
                    .multilineTextAlignment(.center)
                    .lineLimit(1)
                    .padding(tab.insets)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
                if indicator.background != nil {
                    S1Fill(Rectangle(), indicator.background)
                        .frame(height: indicator.height ?? 0)
                }
            }
            .frame(minWidth: tab.minWidth, maxWidth: .infinity)
            .frame(height: tab.height)
        }
        .accessibilityLabel(label)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }

}
