// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Gallery — 승인된 부품·조합을 한 화면에 늘어놓는 검수 화면

import SwiftUI

/// 검수 화면의 구역 — 부품 하나(또는 한 묶음)에 구역 하나.
public enum S1GallerySection: String, CaseIterable, Identifiable {
    case button, chip, checkboxRadio, toggle, tab, select, dropdown, input, textStyle, modal
    case textButtonAssist, textarea, filterChip, mobileHeader, divider, dataTag, expandableCard
    case bottomSheetOption, bottomSheet, datePicker, timePicker, mobileBottomNav

    public var id: String { rawValue }

    public var title: String {
        switch self {
        case .button: return "Button"
        case .chip: return "Chip"
        case .checkboxRadio: return "Checkbox · Radio"
        case .toggle: return "Toggle"
        case .tab: return "Line Tab"
        case .select: return "Select Box"
        case .dropdown: return "Dropdown"
        case .input: return "Input"
        case .textStyle: return "Text Style"
        case .modal: return "Modal"
        case .textButtonAssist: return "Text Button · Assist Button"
        case .textarea: return "Textarea"
        case .filterChip: return "Filter Chip"
        case .mobileHeader: return "Mobile Header"
        case .divider: return "Divider"
        case .dataTag: return "Data Tag"
        case .expandableCard: return "Expandable Card"
        case .bottomSheetOption: return "Bottom Sheet Option"
        case .bottomSheet: return "Bottom Sheet"
        case .datePicker: return "Date Picker"
        case .timePicker: return "Time Picker"
        case .mobileBottomNav: return "Mobile Bottom Nav"
        }
    }

    @ViewBuilder
    public var content: some View {
        switch self {
        case .button: S1GalleryButton()
        case .chip: S1GalleryChip()
        case .checkboxRadio: S1GalleryCheckboxRadio()
        case .toggle: S1GalleryToggle()
        case .tab: S1GalleryTab()
        case .select: S1GallerySelect()
        case .dropdown: S1GalleryDropdown()
        case .input: S1GalleryInput()
        case .textStyle: S1GalleryTextStyle()
        case .modal: S1GalleryModal()
        case .textButtonAssist: S1GalleryTextButtons()
        case .textarea: S1GalleryTextarea()
        case .filterChip: S1GalleryFilterChip()
        case .mobileHeader: S1GalleryMobileHeader()
        case .divider: S1GalleryDivider()
        case .dataTag: S1GalleryDataTag()
        case .expandableCard: S1GalleryExpandableCard()
        case .bottomSheetOption: S1GalleryBottomSheetOption()
        case .bottomSheet: S1GalleryBottomSheet()
        case .datePicker: S1GalleryDatePicker()
        case .timePicker: S1GalleryTimePicker()
        case .mobileBottomNav: S1GalleryMobileBottomNav()
        }
    }
}

/// 승인된 부품·조합을 한 화면에 늘어놓는다. 라이트·다크는 scheme 으로 고정하거나 기기 설정을 따른다.
public struct S1Gallery: View {
    private let scheme: S1ColorScheme
    private let fontFamily: String?

    public init(scheme: S1ColorScheme = .system, fontFamily: String? = nil) {
        self.scheme = scheme
        self.fontFamily = fontFamily
    }

    public var body: some View {
        S1Theme(scheme, fontFamily: fontFamily) {
            S1GalleryBackdrop {
                ScrollView {
                    VStack(alignment: .leading, spacing: 32) {
                        ForEach(S1GallerySection.allCases) { section in
                            S1GalleryBlock(title: section.title) { section.content }
                        }
                    }
                    .padding(24)
                    .frame(maxWidth: .infinity, alignment: .leading)
                }
            }
        }
    }
}

/// 구역 하나만 그린다 — 렌더 스크립트가 구역마다 사진 한 장을 뜰 때 쓴다.
public struct S1GallerySectionView: View {
    private let section: S1GallerySection
    private let scheme: S1ColorScheme
    private let fontFamily: String?

    public init(_ section: S1GallerySection, scheme: S1ColorScheme = .system, fontFamily: String? = nil) {
        self.section = section
        self.scheme = scheme
        self.fontFamily = fontFamily
    }

    public var body: some View {
        S1Theme(scheme, fontFamily: fontFamily) {
            S1GalleryBackdrop {
                S1GalleryBlock(title: section.title) { section.content }
                    .padding(24)
                    .frame(maxWidth: .infinity, alignment: .leading)
            }
        }
    }
}

struct S1GalleryBackdrop<Content: View>: View {
    @Environment(\.colorScheme) private var scheme
    let content: Content

    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }

    var body: some View {
        content.background(S1Palette.colorBgLevel0.resolve(scheme).ignoresSafeArea())
    }
}

struct S1GalleryBlock<Content: View>: View {
    let title: String
    let content: Content

    init(title: String, @ViewBuilder content: () -> Content) {
        self.title = title
        self.content = content()
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(title)
                .font(.system(size: 18, weight: .bold))
                .s1Foreground(S1Palette.colorTextTitlePrimary)
            content
        }
    }
}

struct S1GalleryLabel: View {
    let text: String

    init(_ text: String) {
        self.text = text
    }

    var body: some View {
        Text(text)
            .font(.system(size: 12))
            .s1Foreground(S1Palette.colorTextBodyPrimary)
    }
}

struct S1GalleryRow<Content: View>: View {
    let label: String
    let content: Content

    init(_ label: String, @ViewBuilder content: () -> Content) {
        self.label = label
        self.content = content()
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            S1GalleryLabel(label)
            HStack(spacing: 8) { content }
        }
    }
}

struct S1GalleryButton: View {
    var body: some View {
        ForEach(S1ButtonSpec.variants, id: \.self) { variant in
            S1GalleryRow(variant) {
                S1Button(text: "버튼", variant: variant) {}
                S1Button(text: "비활성", variant: variant, enabled: false) {}
            }
        }
    }
}

struct S1GalleryChip: View {
    @State private var selected = false

    var body: some View {
        ForEach(S1ChipSpec.variants, id: \.self) { variant in
            S1GalleryRow(variant) {
                S1Chip(text: "칩", selected: selected, variant: variant) { selected = $0 }
                S1Chip(text: "선택됨", selected: true, variant: variant) { _ in }
                S1Chip(text: "비활성", selected: false, variant: variant, enabled: false) { _ in }
            }
        }
    }
}

struct S1GalleryCheckboxRadio: View {
    @State private var checked = false
    @State private var picked = false

    var body: some View {
        S1GalleryRow("checkbox") {
            S1Checkbox(checked: checked, label: "선택 항목") { checked = $0 }
            S1Checkbox(checked: true, label: "선택됨") { _ in }
            S1Checkbox(checked: false, label: "비활성", enabled: false) { _ in }
            S1Checkbox(checked: true, label: "비활성 선택됨", enabled: false) { _ in }
        }
        S1GalleryRow("radio") {
            S1Radio(selected: picked, label: "항목") { picked.toggle() }
            S1Radio(selected: true, label: "선택됨") {}
            S1Radio(selected: false, label: "비활성", enabled: false) {}
            S1Radio(selected: true, label: "비활성 선택됨", enabled: false) {}
        }
    }
}

struct S1GalleryToggle: View {
    @State private var on = false

    var body: some View {
        S1GalleryRow("toggle") {
            S1Toggle(checked: on, accessibilityLabel: "알림") { on = $0 }
            S1Toggle(checked: true, accessibilityLabel: "켜짐") { _ in }
            S1Toggle(checked: false, accessibilityLabel: "비활성", enabled: false) { _ in }
            S1Toggle(checked: true, accessibilityLabel: "비활성 켜짐", enabled: false) { _ in }
        }
    }
}

struct S1GalleryTab: View {
    @State private var index = 0

    var body: some View {
        S1TabRow(tabs: ["탭 메뉴 1", "탭 메뉴 2", "탭 메뉴 3"], selectedIndex: index) { index = $0 }
    }
}

struct S1GallerySelect: View {
    @State private var picked: Int?

    var body: some View {
        S1GalleryRow("select") {
            S1Select(options: ["서울", "부산", "제주"], selectedIndex: picked) { picked = $0 }
                .frame(width: 200)
            S1Select(options: ["서울"], selectedIndex: nil, enabled: false) { _ in }
                .frame(width: 200)
        }
    }
}

struct S1GalleryDropdown: View {
    var body: some View {
        ForEach(S1DropdownSpec.types, id: \.self) { type in
            ForEach(S1DropdownSpec.sizes, id: \.self) { size in
                S1GalleryLabel("\(type) · \(size)")
                S1Dropdown(options: ["최신순", "인기순", "과거순"], selectedIndices: [0], type: type, size: size) { _ in }
            }
        }
    }
}

struct S1GalleryInput: View {
    @State private var text = ""

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            S1Input(text: $text, label: "이름", placeholder: "입력해 주세요", message: "안내 문구")
            S1Input(text: .constant("오류 값"), message: "다시 확인해 주세요", isError: true)
            S1Input(text: .constant("읽기 전용"), readOnly: true)
            S1Input(text: .constant(""), placeholder: "비활성", enabled: false)
            S1Input(text: .constant("비밀번호"), mode: "password")
            S1Input(text: .constant("검색어"), mode: "search")
        }
    }
}

struct S1GalleryTextStyle: View {
    var body: some View {
        ForEach(S1Type.all, id: \.name) { item in
            VStack(alignment: .leading, spacing: 2) {
                S1GalleryLabel(item.name)
                S1Text("다람쥐 헌 쳇바퀴에 타고파 AaBbGg 123", type: item.spec, color: S1Palette.colorTextBodyPrimary)
            }
        }
    }
}

struct S1GalleryModal: View {
    var body: some View {
        ForEach(S1ModalSpec.footers, id: \.self) { footer in
            S1GalleryLabel(footer)
            S1ModalPanel(
                title: "제목 영역",
                message: "변경한 내용이 저장되지 않고 사라집니다.\n정말 이 작업을 진행하시겠어요?",
                cancelLabel: footer == "dual" ? "취소" : nil
            )
            .frame(height: 360)
            .clipped()
        }
    }
}

struct S1GalleryTextButtons: View {
    var body: some View {
        ForEach(S1TextButtonSpec.variants, id: \.self) { variant in
            S1GalleryRow(variant) {
                S1TextButton(text: "글자 버튼", variant: variant) {}
                S1TextButton(text: "비활성", variant: variant, enabled: false) {}
            }
        }
        S1GalleryRow("assist") {
            S1AssistButton(text: "보조 버튼") {}
            S1AssistButton(text: "비활성", enabled: false) {}
        }
    }
}

struct S1GalleryTextarea: View {
    @State private var memo = ""

    var body: some View {
        S1GalleryRow("default") { S1Textarea(text: $memo, placeholder: "여러 줄 내용을 입력하세요") }
        S1GalleryRow("readOnly") { S1Textarea(text: .constant("읽기 전용 내용"), readOnly: true) }
        S1GalleryRow("disabled") { S1Textarea(text: .constant(""), placeholder: "여러 줄 내용을 입력하세요", enabled: false) }
    }
}

struct S1GalleryFilterChip: View {
    @State private var picked: Int?

    var body: some View {
        ForEach(S1FilterChipSpec.variants, id: \.self) { variant in
            S1GalleryRow(variant) {
                S1FilterChip(options: ["최신순", "인기순", "과거순"], selectedIndex: picked, title: "정렬", variant: variant) { picked = $0 }
                S1FilterChip(options: ["전체", "진행중", "완료"], selectedIndex: nil, variant: variant) { _ in }
                S1FilterChip(options: ["전체"], selectedIndex: nil, variant: variant, enabled: false) { _ in }
            }
        }
    }
}

struct S1GalleryMobileHeader: View {
    var body: some View {
        ForEach(S1MobileHeaderSpec.variants, id: \.self) { variant in
            S1GalleryLabel(variant)
            S1MobileHeader(variant: variant, title: "화면 제목", subtitle: "부제목", onBack: {}, onClose: {}, onNotification: {})
        }
    }
}

struct S1GalleryDivider: View {
    var body: some View {
        ForEach(S1DividerSpec.variants, id: \.self) { axis in
            S1GalleryLabel(axis)
            if axis == "x" {
                VStack(alignment: .leading, spacing: 6) {
                    S1Divider(axis: "x")
                    S1Divider(axis: "x", weight: "strong")
                    S1Divider(axis: "x", tone: "strong")
                    S1Divider(axis: "x", inset: "text")
                }
            } else {
                HStack(spacing: 16) {
                    Text("왼쪽").font(.system(size: 14)).s1Foreground(S1Palette.colorTextBodyPrimary)
                    S1Divider(axis: "y")
                    Text("오른쪽").font(.system(size: 14)).s1Foreground(S1Palette.colorTextBodyPrimary)
                }
            }
        }
    }
}

struct S1GalleryDataTag: View {
    var body: some View {
        ForEach(S1DataTagSpec.shapes, id: \.self) { shape in
            S1GalleryRow(shape) {
                ForEach(S1DataTagSpec.tones, id: \.self) { tone in
                    S1DataTag(text: "승인", tone: tone, shape: shape, solid: true)
                    S1DataTag(text: "확인", tone: tone, shape: shape, solid: false)
                }
            }
        }
    }
}

struct S1GalleryExpandableCard: View {
    @State private var closed = false

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            S1ExpandableCard(
                expanded: closed,
                header: S1CardTexts(title: "타이틀", subtitle: "서브타이틀", body: "본문", note: "안내", caption: "캡션"),
                panel: S1CardTexts(title: "타이틀", subtitle: "서브타이틀", body: "본문", note: "안내", caption: "캡션")
            ) { closed = $0 }
            S1ExpandableCard(
                expanded: true,
                header: S1CardTexts(title: "열린 카드"),
                panel: S1CardTexts(body: "펼침칸 본문")
            ) { _ in }
        }
    }
}

struct S1GalleryBottomSheetOption: View {
    var body: some View {
        ForEach(S1BottomSheetOptionSpec.variants, id: \.self) { type in
            S1GalleryLabel(type)
            VStack(spacing: 0) {
                S1BottomSheetOption(label: "항목 1", type: type, subtitle: "설명")
                S1BottomSheetOption(label: "항목 2", type: type, selected: type != "list", subtitle: "설명")
                if type == "text" || type == "list" {
                    S1BottomSheetOption(label: "항목 3", type: type, enabled: false, subtitle: "설명")
                }
            }
        }
    }
}

struct S1GalleryBottomSheet: View {
    var body: some View {
        ForEach(S1BottomSheetSpec.footers, id: \.self) { footer in
            S1GalleryLabel(footer)
            S1BottomSheetPanel(
                title: "항목 선택",
                primaryLabel: footer == "none" ? nil : "적용",
                secondaryLabel: footer == "dual" ? "취소" : nil
            ) {
                S1BottomSheetOption(label: "항목 1")
                S1BottomSheetOption(label: "항목 2", selected: true)
                S1BottomSheetOption(label: "항목 3")
            }
            .frame(height: 420)
            .clipped()
        }
    }
}

struct S1GalleryDatePicker: View {
    @State private var date: S1Date?
    @State private var start: S1Date?
    @State private var end: S1Date?

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            S1GalleryLabel("trigger")
            S1DatePicker(value: date) { date = $0 }
            S1DatePicker(value: S1Date(2026, 10, 2)) { _ in }
            S1DatePicker(value: nil, enabled: false) { _ in }
        }
        VStack(alignment: .leading, spacing: 8) {
            S1GalleryLabel("range")
            S1DateRangePicker(start: start, end: end) { start = $0; end = $1 }
        }
        S1GalleryLabel("sheet")
        S1DatePickerSheet(selected: S1Date(2026, 10, 15)) { _ in }
            .frame(height: 760)
            .clipped()
    }
}

struct S1GalleryTimePicker: View {
    @State private var time: S1Time?

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            S1GalleryLabel("trigger")
            S1TimePicker(value: time) { time = $0 }
            S1TimePicker(value: S1Time(15, 5)) { _ in }
            S1TimePicker(value: nil, enabled: false) { _ in }
        }
        S1GalleryLabel("12h")
        S1TimePickerSheet(value: S1Time(15, 5)) { _ in }
            .frame(height: 470)
            .clipped()
        S1GalleryLabel("24h")
        S1TimePickerSheet(value: S1Time(15, 5), is24Hour: true) { _ in }
            .frame(height: 470)
            .clipped()
    }
}

/// 하단 내비는 칸 하나가 부품이다 — 바(배경·가로 배치)는 화면이 조립한다.
/// 검수 화면에서도 그 경계를 그대로 보여 준다.
struct S1GalleryMobileBottomNav: View {
    @Environment(\.colorScheme) private var scheme
    @State private var picked = 0

    var body: some View {
        let items = [("홈", "home"), ("검색", "search"), ("알림", "notification"), ("설정", "settings")]
        HStack {
            ForEach(0..<items.count, id: \.self) { index in
                S1MobileBottomNav(label: items[index].0, selected: index == picked, icon: items[index].1) { picked = index }
                if index < items.count - 1 { Spacer(minLength: 0) }
            }
        }
        .frame(maxWidth: .infinity)
        .background(S1Palette.colorNavigationBg.resolve(scheme))
    }
}

struct S1Gallery_Previews: PreviewProvider {
    static var previews: some View {
        S1Gallery(scheme: .light).previewDisplayName("Light")
        S1Gallery(scheme: .dark).previewDisplayName("Dark")
    }
}
