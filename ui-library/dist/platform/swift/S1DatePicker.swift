// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1DatePicker — 정본 Date Picker(모바일: 트리거 + 바텀 시트 달력)

import SwiftUI

/// 날짜 하나. month 는 1~12 다. 요일·달 길이·비교만 필요해서 필요한 만큼만 직접 가진다
/// (Kotlin 의 S1Date 와 같은 값이다).
public struct S1Date: Hashable, Comparable, Sendable {
    public let year: Int
    public let month: Int
    public let day: Int

    public init(_ year: Int, _ month: Int, _ day: Int) {
        self.year = year
        self.month = month
        self.day = day
    }

    public static func < (lhs: S1Date, rhs: S1Date) -> Bool {
        (lhs.year, lhs.month, lhs.day) < (rhs.year, rhs.month, rhs.day)
    }

    /// 0 = 일요일 … 6 = 토요일 (정본: 일요일 시작).
    public var dayOfWeek: Int {
        let offsets = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4]
        let y = month < 3 ? year - 1 : year
        return (y + y / 4 - y / 100 + y / 400 + offsets[month - 1] + day) % 7
    }

    public static func today() -> S1Date {
        let parts = Calendar.current.dateComponents([.year, .month, .day], from: Date())
        return S1Date(parts.year ?? 2000, parts.month ?? 1, parts.day ?? 1)
    }
}

/// 트리거에 보이는 표기 — 정본 그대로 YY.MM.DD(2자리 연도).
public func s1FormatDate(_ date: S1Date) -> String {
    String(format: "%02d.%02d.%02d", date.year % 100, date.month, date.day)
}

private let s1MonthLabels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
private let s1WeekdayLabels = ["일", "월", "화", "수", "목", "금", "토"]

private func s1DaysInMonth(_ year: Int, _ month: Int) -> Int {
    switch month {
    case 2: return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) ? 29 : 28
    case 4, 6, 9, 11: return 30
    default: return 31
    }
}

/// (연, 월) 에서 delta 달 떨어진 (연, 월).
private func s1AddMonths(_ year: Int, _ month: Int, _ delta: Int) -> (Int, Int) {
    let index = year * 12 + (month - 1) + delta
    return (index / 12, index % 12 + 1)
}

/// 한 달 달력 칸 — 일요일부터 채우고 5주에 못 미치면 6주까지 늘린다(정본 달력과 같다).
private func s1MonthCells(_ year: Int, _ month: Int) -> [(date: S1Date, other: Bool)] {
    let firstWeekday = S1Date(year, month, 1).dayOfWeek
    let days = s1DaysInMonth(year, month)
    let (prevYear, prevMonth) = s1AddMonths(year, month, -1)
    let (nextYear, nextMonth) = s1AddMonths(year, month, 1)
    let prevDays = s1DaysInMonth(prevYear, prevMonth)
    var cells: [(date: S1Date, other: Bool)] = []
    for i in 0..<firstWeekday { cells.append((S1Date(prevYear, prevMonth, prevDays - firstWeekday + 1 + i), true)) }
    for day in 1...days { cells.append((S1Date(year, month, day), false)) }
    while cells.count % 7 != 0 || cells.count < 35 {
        cells.append((S1Date(nextYear, nextMonth, cells.count - (firstWeekday + days) + 1), true))
    }
    return cells
}

/// 승인된 날짜 선택(한 날짜). 트리거를 누르면 바텀 시트 달력이 올라온다.
/// 날짜를 누르는 즉시 값이 정해지고 시트가 닫힌다(정본 동작). 적용 버튼은 이미 고른 날짜를 확인하는 자리다.
/// 트리거 상태는 기본 · hover · 채움 · 열림 · 비활성이고, 모바일 크기(md)는 한 벌뿐이다.
///
/// 비활성 날짜(disabledDates)는 눌리지 않는다. 시작 요일은 일요일이다.
public struct S1DatePicker: View {
    @State private var open = false
    private let value: S1Date?
    private let placeholder: String
    private let title: String
    private let applyLabel: String
    private let disabledDates: Set<S1Date>
    private let enabled: Bool
    private let onValueChange: (S1Date) -> Void

    public init(value: S1Date?, placeholder: String = "날짜 선택", title: String = "날짜 선택", applyLabel: String = "적용", disabledDates: Set<S1Date> = [], enabled: Bool = true, onValueChange: @escaping (S1Date) -> Void) {
        self.value = value
        self.placeholder = placeholder
        self.title = title
        self.applyLabel = applyLabel
        self.disabledDates = disabledDates
        self.enabled = enabled
        self.onValueChange = onValueChange
    }

    public var body: some View {
        S1PickerTrigger(
            text: value.map { s1FormatDate($0) } ?? placeholder,
            filled: value != nil,
            expanded: open,
            expandedState: "open",
            enabled: enabled,
            boxOf: { state, part in S1DatePickerSpec.box("md|mobile|\(state)", part) }
        ) { open = true }
        .s1Sheet(isPresented: $open, panel: S1DatePickerSpec.sheetBox("default", "panel")) {
            S1DatePickerSheet(
                selected: value, title: title, applyLabel: applyLabel, disabledDates: disabledDates,
                framed: false, onDismiss: { open = false }, onSelect: onValueChange
            )
        }
    }

}

/// 승인된 날짜 선택(기간). 시작일을 누르고 끝일을 누르면 값이 정해지고 닫힌다.
/// 시작일보다 앞선 날짜를 두 번째로 누르면 그 날짜가 새 시작일이 된다(자동으로 뒤집지 않는다).
/// 같은 날짜를 두 번 누르면 하루짜리 기간이다. 끝일이 아직 없으면 트리거에는 "시작 ~ " 까지 보인다.
public struct S1DateRangePicker: View {
    @State private var open = false
    private let start: S1Date?
    private let end: S1Date?
    private let placeholder: String
    private let title: String
    private let applyLabel: String
    private let disabledDates: Set<S1Date>
    private let enabled: Bool
    private let onRangeChange: (S1Date?, S1Date?) -> Void

    public init(start: S1Date?, end: S1Date?, placeholder: String = "날짜 선택", title: String = "날짜 선택", applyLabel: String = "적용", disabledDates: Set<S1Date> = [], enabled: Bool = true, onRangeChange: @escaping (S1Date?, S1Date?) -> Void) {
        self.start = start
        self.end = end
        self.placeholder = placeholder
        self.title = title
        self.applyLabel = applyLabel
        self.disabledDates = disabledDates
        self.enabled = enabled
        self.onRangeChange = onRangeChange
    }

    public var body: some View {
        let text: String = {
            if let start, let end { return s1FormatDate(start) + " ~ " + s1FormatDate(end) }
            if let start { return s1FormatDate(start) + " ~ " }
            return placeholder
        }()
        S1PickerTrigger(
            text: text,
            filled: start != nil,
            expanded: open,
            expandedState: "open",
            enabled: enabled,
            boxOf: { state, part in S1DatePickerSpec.box("md|mobile|\(state)", part) }
        ) { open = true }
        .s1Sheet(isPresented: $open, panel: S1DatePickerSpec.sheetBox("default", "panel")) {
            S1DateSheetImpl(
                range: true, start: start, end: end, title: title, applyLabel: applyLabel, disabledDates: disabledDates,
                framed: false, onDismiss: { open = false }, onSelectionChange: onRangeChange
            )
        }
    }

}

/// 시트만 그린다(한 날짜) — 미리보기 화면처럼 시스템 시트 없이 보여줄 때 쓴다.
public struct S1DatePickerSheet: View {
    private let selected: S1Date?
    private let title: String
    private let applyLabel: String
    private let disabledDates: Set<S1Date>
    private let framed: Bool
    private let onDismiss: () -> Void
    private let onSelect: (S1Date) -> Void

    public init(
        selected: S1Date?,
        title: String = "날짜 선택",
        applyLabel: String = "적용",
        disabledDates: Set<S1Date> = [],
        onDismiss: @escaping () -> Void = {},
        onSelect: @escaping (S1Date) -> Void
    ) {
        self.init(selected: selected, title: title, applyLabel: applyLabel, disabledDates: disabledDates, framed: true, onDismiss: onDismiss, onSelect: onSelect)
    }

    init(selected: S1Date?, title: String, applyLabel: String, disabledDates: Set<S1Date>, framed: Bool, onDismiss: @escaping () -> Void, onSelect: @escaping (S1Date) -> Void) {
        self.selected = selected
        self.title = title
        self.applyLabel = applyLabel
        self.disabledDates = disabledDates
        self.framed = framed
        self.onDismiss = onDismiss
        self.onSelect = onSelect
    }

    public var body: some View {
        S1DateSheetImpl(
            range: false, start: selected, end: nil, title: title, applyLabel: applyLabel, disabledDates: disabledDates,
            framed: framed, onDismiss: onDismiss, onSelectionChange: { first, _ in if let first { onSelect(first) } }
        )
    }
}

/// 시트만 그린다(기간).
public struct S1DateRangePickerSheet: View {
    private let start: S1Date?
    private let end: S1Date?
    private let title: String
    private let applyLabel: String
    private let disabledDates: Set<S1Date>
    private let onDismiss: () -> Void
    private let onRangeChange: (S1Date?, S1Date?) -> Void

    public init(
        start: S1Date?,
        end: S1Date?,
        title: String = "날짜 선택",
        applyLabel: String = "적용",
        disabledDates: Set<S1Date> = [],
        onDismiss: @escaping () -> Void = {},
        onRangeChange: @escaping (S1Date?, S1Date?) -> Void
    ) {
        self.start = start
        self.end = end
        self.title = title
        self.applyLabel = applyLabel
        self.disabledDates = disabledDates
        self.onDismiss = onDismiss
        self.onRangeChange = onRangeChange
    }

    public var body: some View {
        S1DateSheetImpl(
            range: true, start: start, end: end, title: title, applyLabel: applyLabel, disabledDates: disabledDates,
            framed: true, onDismiss: onDismiss, onSelectionChange: onRangeChange
        )
    }
}

/// 날짜·시간 선택이 같이 쓰는 트리거 — 값(또는 안내 문구)과 오른쪽 아이콘.
struct S1PickerTrigger: View {
    let text: String
    let filled: Bool
    let expanded: Bool
    let expandedState: String
    let enabled: Bool
    let boxOf: (_ state: String, _ part: String) -> S1Box
    let onClick: () -> Void

    var body: some View {
        S1Pressable(enabled: enabled, action: onClick) { interaction in
            let state = !enabled ? "disabled" : (expanded ? expandedState : (filled ? "filled" : (interaction.hovered ? "hover" : "default")))
            let trigger = boxOf(state, "trigger")
            let icon = boxOf(state, "icon")
            HStack(spacing: 0) {
                S1Text(text, trigger)
                    .lineLimit(1)
                    .padding(.trailing, trigger.gap)
                    .frame(maxWidth: .infinity, alignment: .leading)
                if icon.icon != nil {
                    S1Icon(box: icon, tint: icon.background)
                }
            }
            .s1Box(trigger, alignment: .leading)
        }
        .accessibilityLabel(text)
        .accessibilityHint("누르면 시트가 열립니다")
    }
}

struct S1DateSheetImpl: View {
    let range: Bool
    let start: S1Date?
    let end: S1Date?
    let title: String
    let applyLabel: String
    let disabledDates: Set<S1Date>
    let framed: Bool
    let onDismiss: () -> Void
    let onSelectionChange: (S1Date?, S1Date?) -> Void

    @State private var view = "date"
    @State private var viewYear: Int
    @State private var viewMonth: Int
    private let today = S1Date.today()

    init(range: Bool, start: S1Date?, end: S1Date?, title: String, applyLabel: String, disabledDates: Set<S1Date>, framed: Bool, onDismiss: @escaping () -> Void, onSelectionChange: @escaping (S1Date?, S1Date?) -> Void) {
        self.range = range
        self.start = start
        self.end = end
        self.title = title
        self.applyLabel = applyLabel
        self.disabledDates = disabledDates
        self.framed = framed
        self.onDismiss = onDismiss
        self.onSelectionChange = onSelectionChange
        let anchor = start ?? S1Date.today()
        _viewYear = State(initialValue: anchor.year)
        _viewMonth = State(initialValue: anchor.month)
    }

    /// 화살표 — 날짜 보기는 한 달, 월 보기는 1년, 연 보기는 12년씩 옮긴다.
    private func move(_ delta: Int) {
        switch view {
        case "date":
            let (y, m) = s1AddMonths(viewYear, viewMonth, delta)
            viewYear = y
            viewMonth = m
        case "month":
            viewYear += delta
        default:
            viewYear += delta * 12
        }
    }

    private func commit(_ first: S1Date?, _ second: S1Date?) {
        onSelectionChange(first, second)
        if !range { onDismiss() } else if first != nil && second != nil { onDismiss() }
    }

    private func select(_ date: S1Date) {
        if disabledDates.contains(date) { return }
        if !range {
            commit(date, nil)
            return
        }
        guard let first = start else { commit(date, nil); return }
        if end != nil { commit(date, nil) }
        else if date < first { commit(date, nil) }
        else if date == first { commit(date, date) }
        else { commit(first, date) }
    }

    private func cellState(_ date: S1Date) -> (String, String?) {
        let disabled = disabledDates.contains(date)
        if !range {
            if let start, date == start { return ("selected", nil) }
            if date == today { return ("today", nil) }
            if disabled { return ("disabled", nil) }
            return ("default", nil)
        }
        if let start, let end, date == start, end != start { return ("today", "start") }
        if let end, date == end, end != start { return ("selected", "end") }
        if let start, let end, date > start, date < end { return (disabled ? "range-disabled" : "range-mid", "mid") }
        if let start, date == start { return ("today", nil) }
        if disabled { return ("disabled", nil) }
        return ("default", nil)
    }

    var body: some View {
        let sheet = "default"
        let panel = S1DatePickerSpec.sheetBox(sheet, "panel")
        S1SheetWrap(framed: framed, backdrop: S1DatePickerSpec.sheetBox(sheet, "backdrop"), panel: panel, onDismiss: onDismiss) {
            S1SheetHeader(
                title: title,
                header: S1DatePickerSpec.sheetBox(sheet, "header"),
                titleBox: S1DatePickerSpec.sheetBox(sheet, "title"),
                close: S1DatePickerSpec.sheetBox(sheet, "close"),
                onClose: onDismiss
            )
            S1SheetScroll {
                calendar
                    .frame(maxWidth: .infinity)
                    .padding(S1DatePickerSpec.sheetBox(sheet, "calendarWrap").insets)
            }
            S1SheetFooter(footer: S1DatePickerSpec.sheetBox(sheet, "footer")) {
                S1Button(text: applyLabel, variant: "primary", fullWidth: true) {
                    /* 적용 — 한 날짜는 고른 날짜가 있을 때, 기간은 시작·끝이 다 있을 때만 확정한다. */
                    if !range && start != nil { onDismiss() }
                    if range && start != nil && end != nil { onDismiss() }
                }
            }
        }
    }

    private var calendar: some View {
        let box = S1DatePickerSpec.calendarBox("\(view)|default", "calendar")
        let headerBox = S1DatePickerSpec.calendarBox("\(view)|default", "header")
        let labelBox = S1DatePickerSpec.calendarBox("\(view)|default", "headerLabel")
        return VStack(alignment: .leading, spacing: box.gap) {
            HStack(spacing: 0) {
                S1CalendarNav(view: view, part: "prev", iconPart: "prevIcon", label: "이전") { move(-1) }
                Spacer(minLength: 0)
                HStack(spacing: labelBox.gap) {
                    S1CalendarLabel(view: view, part: "yearLabel", text: "\(viewYear)년") { view = "year" }
                    if view == "date" {
                        S1CalendarLabel(view: view, part: "monthLabel", text: s1MonthLabels[viewMonth - 1]) { view = "month" }
                    }
                }
                Spacer(minLength: 0)
                S1CalendarNav(view: view, part: "next", iconPart: "nextIcon", label: "다음") { move(1) }
            }
            .frame(width: headerBox.width, height: headerBox.height)
            if view == "date" {
                dateGrid
            } else {
                tileGrid
            }
        }
        .frame(width: box.width, alignment: .leading)
    }

    private var dateGrid: some View {
        let kinds = ["sunday", "weekday", "weekday", "weekday", "weekday", "weekday", "saturday"]
        let cells = s1MonthCells(viewYear, viewMonth)
        return VStack(alignment: .leading, spacing: 0) {
            HStack(spacing: 0) {
                ForEach(0..<7, id: \.self) { index in
                    let box = S1DatePickerSpec.weekdayBox(kinds[index], "weekday")
                    S1Text(s1WeekdayLabels[index], box)
                        .multilineTextAlignment(.center)
                        .frame(width: box.width, height: box.height)
                }
            }
            ForEach(0..<(cells.count / 7), id: \.self) { week in
                HStack(spacing: 0) {
                    ForEach(0..<7, id: \.self) { day in
                        let item = cells[week * 7 + day]
                        let (state, band) = cellState(item.date)
                        S1CalendarCell(date: item.date, otherMonth: item.other, state: state, band: band, enabled: !disabledDates.contains(item.date)) {
                            if item.other { viewYear = item.date.year; viewMonth = item.date.month }
                            select(item.date)
                        }
                    }
                }
            }
        }
    }

    private var tileGrid: some View {
        let isYear = view == "year"
        let first = (viewYear / 12) * 12
        let grid = S1DatePickerSpec.tileBox("default", "grid")
        let rowBox = S1DatePickerSpec.tileBox("default", "tileRow")
        return VStack(alignment: .leading, spacing: grid.gap) {
            ForEach(0..<4, id: \.self) { row in
                HStack(spacing: rowBox.gap) {
                    ForEach(0..<3, id: \.self) { column in
                        let index = row * 3 + column
                        let value = isYear ? first + index : index + 1
                        let label = isYear ? "\(value)" : s1MonthLabels[index]
                        let selected = isYear ? value == viewYear : value == viewMonth
                        S1CalendarTile(label: label, selected: selected) {
                            if isYear { viewYear = value; view = "month" } else { viewMonth = value; view = "date" }
                        }
                    }
                }
            }
        }
    }
}

struct S1CalendarNav: View {
    let view: String
    let part: String
    let iconPart: String
    let label: String
    let onClick: () -> Void

    var body: some View {
        S1Pressable(action: onClick) { interaction in
            let key = "\(view)|" + (interaction.hovered ? "hover" : "default")
            let box = S1DatePickerSpec.calendarBox(key, part)
            let icon = S1DatePickerSpec.calendarBox(key, iconPart)
            /* 보이는 크기와 눌리는 크기가 다르다 — 바깥 여백이 음수라 자리는 작게 잡고 손가락 영역만 넓힌다. */
            ZStack {
                if icon.icon != nil {
                    S1Icon(box: icon, tint: icon.background)
                }
            }
            .s1Box(box, applySize: false, applyPadding: false, alignment: .center)
            .frame(width: box.width ?? 0, height: box.height ?? 0)
            .frame(
                width: (box.width ?? 0) + box.marginStart + box.marginEnd,
                height: (box.height ?? 0) + box.marginTop + box.marginBottom
            )
        }
        .accessibilityLabel(label)
    }
}

struct S1CalendarLabel: View {
    let view: String
    let part: String
    let text: String
    let onClick: () -> Void

    var body: some View {
        S1Pressable(action: onClick) { interaction in
            let box = S1DatePickerSpec.calendarBox("\(view)|" + (interaction.hovered ? "hover" : "default"), part)
            S1Text(text, box)
        }
        .accessibilityLabel(text)
    }
}

struct S1CalendarCell: View {
    @Environment(\.colorScheme) private var scheme
    let date: S1Date
    let otherMonth: Bool
    let state: String
    let band: String?
    let enabled: Bool
    let onClick: () -> Void

    var body: some View {
        S1Pressable(enabled: enabled, action: onClick) { interaction in
            let kind = date.dayOfWeek == 0 ? "sunday" : (date.dayOfWeek == 6 ? "saturday" : "weekday")
            let hoverable = state == "default" || state == "today" || state == "selected"
            let key = "\(kind)|\(otherMonth)|\(state)|" + (interaction.hovered && hoverable ? "hover" : "rest")
            let cell = S1DatePickerSpec.cellBox(key, "cell")
            let inner = S1DatePickerSpec.cellBox(key, "cellInner")
            let number = S1DatePickerSpec.cellBox(key, "cellNum")
            let width = cell.width ?? 0
            let height = cell.height ?? 0
            ZStack {
                if let band, let bandBox = Optional(S1DatePickerSpec.bandBox(band, "band")) {
                    S1Fill(Rectangle(), bandBox.background)
                        .frame(width: max(0, width - (bandBox.left ?? 0) - (bandBox.right ?? 0)), height: bandBox.height ?? 0)
                        .frame(width: width, height: height, alignment: .topLeading)
                        .offset(x: bandBox.left ?? 0, y: bandBox.top ?? 0)
                        .frame(width: width, height: height, alignment: .topLeading)
                }
                S1Text("\(date.day)", number)
                    .multilineTextAlignment(.center)
                    .s1Box(inner, alignment: .center)
            }
            .frame(width: width, height: height)
        }
        .accessibilityLabel("\(date.month)월 \(date.day)일")
        .accessibilityAddTraits(state == "selected" || state == "today" ? .isSelected : [])
    }
}

struct S1CalendarTile: View {
    let label: String
    let selected: Bool
    let onClick: () -> Void

    var body: some View {
        S1Pressable(action: onClick) { interaction in
            let state = selected ? "selected" : (interaction.hovered ? "hover" : "default")
            let tile = S1DatePickerSpec.tileBox(state, "tile")
            S1Text(label, tile)
                .multilineTextAlignment(.center)
                .s1Box(tile, alignment: .center)
        }
        .accessibilityLabel(label)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }
}
