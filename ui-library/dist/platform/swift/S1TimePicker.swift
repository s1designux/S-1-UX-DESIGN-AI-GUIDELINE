// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1TimePicker — 정본 Time Picker(모바일: 트리거 + 휠 바텀 시트)

import SwiftUI

/// 시각 하나 — hour 는 0~23 이다(12시간제 표기는 화면에 그릴 때만 바꾼다).
public struct S1Time: Hashable, Sendable {
    public let hour: Int
    public let minute: Int

    public init(_ hour: Int, _ minute: Int) {
        self.hour = hour
        self.minute = minute
    }
}

/// 트리거에 보이는 표기 — 12시간제는 "오후 3:05", 24시간제는 "15:05".
public func s1FormatTime(_ time: S1Time, is24Hour: Bool) -> String {
    if is24Hour { return String(format: "%02d:%02d", time.hour, time.minute) }
    let hour12 = time.hour % 12 == 0 ? 12 : time.hour % 12
    return (time.hour < 12 ? "오전" : "오후") + " " + String(hour12) + ":" + String(format: "%02d", time.minute)
}

/// 승인된 시간 선택. 트리거를 누르면 휠 바텀 시트가 올라온다.
/// 휠을 돌려 가운데에 온 값이 선택값이고, 적용 버튼을 눌러야 값이 정해진다(정본 동작).
/// 값이 아직 없으면 휠은 지금 시각에 맞춰 열린다.
///
///   · is24Hour    false = 오전/오후 + 1~12시 · true = 00~23시
///   · minuteStep  분 눈금 간격(기본 1분)
///   · dateContent 넘기면 시트 위에 날짜·시간 탭이 생기고 날짜 탭에서 이 내용을 보여 준다
///                 (날짜 고르기는 S1DatePicker 쪽 몫이다 — 이 부품은 탭 전환만 맡는다)
public struct S1TimePicker: View {
    @State private var open = false
    private let value: S1Time?
    private let placeholder: String
    private let title: String
    private let applyLabel: String
    private let is24Hour: Bool
    private let minuteStep: Int
    private let dateContent: AnyView?
    private let enabled: Bool
    private let onValueChange: (S1Time) -> Void

    public init(value: S1Time?, placeholder: String = "시간 선택", title: String = "시간 선택", applyLabel: String = "적용", is24Hour: Bool = false, minuteStep: Int = 1, dateContent: AnyView? = nil, enabled: Bool = true, onValueChange: @escaping (S1Time) -> Void) {
        self.value = value
        self.placeholder = placeholder
        self.title = title
        self.applyLabel = applyLabel
        self.is24Hour = is24Hour
        self.minuteStep = minuteStep
        self.dateContent = dateContent
        self.enabled = enabled
        self.onValueChange = onValueChange
    }

    public var body: some View {
        S1PickerTrigger(
            text: value.map { s1FormatTime($0, is24Hour: is24Hour) } ?? placeholder,
            filled: value != nil,
            expanded: open,
            expandedState: "focus",
            enabled: enabled,
            boxOf: { state, part in S1TimePickerSpec.box("md|mobile|\(state)", part) }
        ) { open = true }
        .s1Sheet(isPresented: $open, panel: S1TimePickerSpec.sheetBox(dateContent == nil ? "time-only" : "date-time", "panel")) {
            S1TimePickerSheet(
                value: value, title: title, applyLabel: applyLabel, is24Hour: is24Hour, minuteStep: minuteStep,
                dateContent: dateContent, framed: false, onDismiss: { open = false },
                onApply: { onValueChange($0); open = false }
            )
        }
    }

}

/// 시트만 그린다 — 미리보기 화면처럼 시스템 시트 없이 보여줄 때 쓴다.
public struct S1TimePickerSheet: View {
    private let value: S1Time?
    private let title: String
    private let applyLabel: String
    private let is24Hour: Bool
    private let minuteStep: Int
    private let dateContent: AnyView?
    private let framed: Bool
    private let onDismiss: () -> Void
    private let onApply: (S1Time) -> Void
    @State private var ampmIndex: Int
    @State private var hourIndex: Int
    @State private var minuteIndex: Int
    @State private var tab = 1

    public init(
        value: S1Time?,
        title: String = "시간 선택",
        applyLabel: String = "적용",
        is24Hour: Bool = false,
        minuteStep: Int = 1,
        dateContent: AnyView? = nil,
        onDismiss: @escaping () -> Void = {},
        onApply: @escaping (S1Time) -> Void
    ) {
        self.init(value: value, title: title, applyLabel: applyLabel, is24Hour: is24Hour, minuteStep: minuteStep, dateContent: dateContent, framed: true, onDismiss: onDismiss, onApply: onApply)
    }

    init(value: S1Time?, title: String, applyLabel: String, is24Hour: Bool, minuteStep: Int, dateContent: AnyView?, framed: Bool, onDismiss: @escaping () -> Void, onApply: @escaping (S1Time) -> Void) {
        s1Require((1...59).contains(minuteStep), "S1TimePicker: minuteStep 은 1~59 여야 합니다(받은 값 \(minuteStep)).")
        self.value = value
        self.title = title
        self.applyLabel = applyLabel
        self.is24Hour = is24Hour
        self.minuteStep = minuteStep
        self.dateContent = dateContent
        self.framed = framed
        self.onDismiss = onDismiss
        self.onApply = onApply
        /* 처음 열릴 때 가운데에 놓을 값 — 고른 값이 있으면 그 값, 없으면 지금 시각(분은 눈금에 내림). */
        let now = Calendar.current.dateComponents([.hour, .minute], from: Date())
        let seed = value ?? S1Time(now.hour ?? 0, now.minute ?? 0)
        let minutesCount = (0..<60).filter { $0 % minuteStep == 0 }.count
        _ampmIndex = State(initialValue: seed.hour < 12 ? 0 : 1)
        _hourIndex = State(initialValue: is24Hour ? seed.hour : (seed.hour % 12 == 0 ? 12 : seed.hour % 12) - 1)
        _minuteIndex = State(initialValue: min(seed.minute / minuteStep, minutesCount - 1))
    }

    public var body: some View {
        let content = dateContent == nil ? "time-only" : "date-time"
        let type = is24Hour ? "24h" : "12h"
        let sheet = { (part: String) -> S1Box in S1TimePickerSpec.sheetBox(content, part) }
        let wheelBox = { (part: String) -> S1Box in S1TimePickerSpec.wheelBox(type, part) }
        let hours = is24Hour ? (0...23).map { String(format: "%02d", $0) } : (1...12).map { String($0) }
        let minutes = (0..<60).filter { $0 % minuteStep == 0 }.map { String(format: "%02d", $0) }
        S1SheetWrap(framed: framed, backdrop: sheet("backdrop"), panel: sheet("panel"), onDismiss: onDismiss) {
            S1SheetHeader(title: title, header: sheet("header"), titleBox: sheet("title"), close: sheet("close"), onClose: onDismiss)
            if let dateContent {
                S1TabRow(tabs: ["날짜", "시간"], selectedIndex: tab, onSelect: { tab = $0 })
                    .padding(sheet("tabs").insets)
                    .frame(maxWidth: .infinity)
                if tab == 0 {
                    dateContent
                        .padding(sheet("datePanel").insets)
                        .frame(maxWidth: .infinity)
                }
            }
            if dateContent == nil || tab != 0 {
                wheels(hours: hours, minutes: minutes, wheelBox: wheelBox)
            }
            S1SheetFooter(footer: sheet("footer")) {
                S1Button(text: applyLabel, variant: "primary", fullWidth: true) {
                    let hour24 = is24Hour ? hourIndex : (hourIndex + 1) % 12 + (ampmIndex == 1 ? 12 : 0)
                    onApply(S1Time(hour24, minuteIndex * minuteStep))
                }
            }
        }
    }

    private func wheels(hours: [String], minutes: [String], wheelBox: (String) -> S1Box) -> some View {
        let wheel = wheelBox("wheel")
        let fadeTop = wheelBox("fadeTop")
        let fadeBottom = wheelBox("fadeBottom")
        let colon = wheelBox("colColon")
        return ZStack {
            HStack(spacing: wheel.gap) {
                if !is24Hour {
                    S1WheelColumn(items: ["오전", "오후"], index: $ampmIndex, column: wheelBox("colAmpm"), cell: wheelBox("cell"), label: "오전 오후")
                }
                S1WheelColumn(items: hours, index: $hourIndex, column: wheelBox("colHour"), cell: wheelBox("cell"), label: "시")
                    .padding(.leading, wheelBox("colHour").marginStart)
                S1Text(":", wheelBox("colonCell"))
                    .lineLimit(1)
                    .frame(width: colon.width, alignment: .center)
                    .frame(maxHeight: .infinity, alignment: .center)
                    .accessibilityHidden(true)
                S1WheelColumn(items: minutes, index: $minuteIndex, column: wheelBox("colMinute"), cell: wheelBox("cell"), label: "분")
            }
            .padding(wheel.insets)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            /* 위·아래 흐림 — 가운데 값만 또렷하게 보이게 하는 덮개. 손가락을 막지 않는다. */
            VStack(spacing: 0) {
                S1Fade(box: fadeTop)
                Spacer(minLength: 0)
                S1Fade(box: fadeBottom)
            }
            .allowsHitTesting(false)
        }
        .frame(height: wheel.height)
        .frame(maxWidth: .infinity)
    }
}

/// 위·아래 흐림 한 장 — 표의 그라데이션 정거장을 그대로 칠한다.
struct S1Fade: View {
    @Environment(\.colorScheme) private var scheme
    let box: S1Box

    var body: some View {
        let stops = box.gradient ?? []
        let base = stops.compactMap { $0.color }.first
        Rectangle()
            .fill(LinearGradient(
                stops: stops.map { stop in
                    Gradient.Stop(
                        color: (stop.color ?? base ?? S1Color.transparent).resolve(scheme).opacity(stop.color == nil ? 0 : Double(stop.alpha)),
                        location: stop.offset
                    )
                },
                startPoint: .top,
                endPoint: .bottom
            ))
            .frame(height: box.height ?? 0)
    }
}

/// 휠 한 열 — 위아래로 밀면 한 칸씩 멈추고, 가운데에 놓인 칸이 선택값이다.
/// 위·아래 여백은 첫 칸과 끝 칸도 정중앙까지 올 수 있게 잡은 값이고, 칸 사이 간격·칸 높이는 표에서 읽는다.
struct S1WheelColumn: View {
    let items: [String]
    @Binding var index: Int
    let column: S1Box
    let cell: S1Box
    let label: String
    @State private var drag: CGFloat = 0

    var body: some View {
        let cellHeight = cell.flexBasis ?? 0
        let pitch = max(cellHeight + column.gap, 1)
        Color.clear
            .frame(width: column.width)
            .frame(maxHeight: .infinity)
            .overlay(alignment: .top) {
                VStack(spacing: column.gap) {
                    ForEach(0..<items.count, id: \.self) { item in
                        S1Pressable(action: { withAnimation(.easeOut) { index = item } }) { _ in
                            S1Text(items[item], cell)
                                .multilineTextAlignment(.center)
                                .lineLimit(1)
                                .frame(maxWidth: .infinity)
                                .frame(height: cellHeight)
                        }
                        .accessibilityHidden(item != index)
                    }
                }
                .frame(width: column.width)
                .fixedSize(horizontal: false, vertical: true)
                .offset(y: column.paddingTop - CGFloat(index) * pitch + drag)
            }
            .clipped()
            .contentShape(Rectangle())
        .gesture(
            DragGesture()
                .onChanged { drag = $0.translation.height }
                .onEnded { value in
                    let moved = Int((-value.predictedEndTranslation.height / pitch).rounded())
                    let next = min(max(index + moved, 0), items.count - 1)
                    withAnimation(.easeOut) {
                        index = next
                        drag = 0
                    }
                }
        )
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(label)
        .accessibilityValue(items.indices.contains(index) ? items[index] : "")
        .accessibilityAdjustableAction { direction in
            switch direction {
            case .increment: index = min(index + 1, items.count - 1)
            case .decrement: index = max(index - 1, 0)
            @unknown default: break
            }
        }
    }
}
