// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Box 는 승인된 배포본 CSS 를 그대로 계산한 값 묶음이다. 여기서는 그리는 방법만 정한다.

import SwiftUI
import CoreText

// MARK: - 색

/// 한 토큰의 라이트·다크 값 한 쌍(0xAARRGGBB). 어느 쪽을 쓸지는 화면의 colorScheme 이 정한다.
public struct S1Color: Sendable, Hashable {
    public let light: UInt32
    public let dark: UInt32

    public init(_ light: UInt32, _ dark: UInt32) {
        self.light = light
        self.dark = dark
    }

    public static let transparent = S1Color(0x00000000, 0x00000000)

    public func resolve(_ scheme: ColorScheme) -> Color {
        Color(argb: scheme == .dark ? dark : light)
    }
}

extension Color {
    /// 0xAARRGGBB 정수에서 sRGB 색을 만든다.
    public init(argb: UInt32) {
        let alpha = Double((argb >> 24) & 0xFF) / 255
        let red = Double((argb >> 16) & 0xFF) / 255
        let green = Double((argb >> 8) & 0xFF) / 255
        let blue = Double(argb & 0xFF) / 255
        self.init(.sRGB, red: red, green: green, blue: blue, opacity: alpha)
    }
}

// MARK: - 테마

private struct S1FontFamilyKey: EnvironmentKey {
    static let defaultValue: String? = nil
}

extension EnvironmentValues {
    /// 정본 서체 이름(Pretendard). 앱이 서체를 등록하고 이름을 넘긴다. nil 이면 기기 기본 서체.
    public var s1FontFamily: String? {
        get { self[S1FontFamilyKey.self] }
        set { self[S1FontFamilyKey.self] = newValue }
    }
}

/// 라이트·다크를 따르는 방법. system 은 기기 설정을 따르고, 나머지는 그 한쪽으로 고정한다.
public enum S1ColorScheme: Sendable {
    case system, light, dark
}

/// 안쪽 화면 전체에 테마를 입힌다 — Kotlin 의 S1Theme 과 같은 역할이다.
///
///     S1Theme(.system, fontFamily: "Pretendard") { ContentView() }
public struct S1Theme<Content: View>: View {
    private let scheme: S1ColorScheme
    private let fontFamily: String?
    private let content: Content

    public init(_ scheme: S1ColorScheme = .system, fontFamily: String? = nil, @ViewBuilder content: () -> Content) {
        self.scheme = scheme
        self.fontFamily = fontFamily
        self.content = content()
    }

    public var body: some View {
        switch scheme {
        case .system:
            content.environment(\.s1FontFamily, fontFamily)
        case .light:
            content.environment(\.s1FontFamily, fontFamily).environment(\.colorScheme, .light)
        case .dark:
            content.environment(\.s1FontFamily, fontFamily).environment(\.colorScheme, .dark)
        }
    }
}

extension View {
    /// 화면 하나에 테마를 입힌다(S1Theme 의 수식어 꼴).
    public func s1Theme(_ scheme: S1ColorScheme = .system, fontFamily: String? = nil) -> some View {
        S1Theme(scheme, fontFamily: fontFamily) { self }
    }
}

// MARK: - 값 묶음

/// 이름 붙은 글자 묶음 하나(텍스트 스타일). 서체는 테마가 준다.
public struct S1TypeSpec: Sendable {
    public let fontSize: CGFloat
    public let fontWeight: Int
    /// 글꼴 크기에 곱하는 배수(정본 130% = 1.3).
    public let lineHeight: CGFloat
    /// em 단위 자간.
    public let letterSpacing: CGFloat

    public init(fontSize: CGFloat, fontWeight: Int, lineHeight: CGFloat, letterSpacing: CGFloat) {
        self.fontSize = fontSize
        self.fontWeight = fontWeight
        self.lineHeight = lineHeight
        self.letterSpacing = letterSpacing
    }
}

/// 승인된 (size, break) 조합 한 쌍.
public struct S1SizeBreak: Sendable, Hashable {
    public let size: String
    public let breakName: String

    public init(size: String, breakName: String) {
        self.size = size
        self.breakName = breakName
    }
}

/// 그림자 한 겹. CSS box-shadow 의 x·y·번짐·퍼짐·색을 그대로 옮긴 것이다.
public struct S1Shadow: Sendable {
    public let x: CGFloat
    public let y: CGFloat
    public let blur: CGFloat
    public let spread: CGFloat
    public let color: UInt32

    public init(x: CGFloat, y: CGFloat, blur: CGFloat, spread: CGFloat, color: UInt32) {
        self.x = x
        self.y = y
        self.blur = blur
        self.spread = spread
        self.color = color
    }
}

/// 세로 흐림 한 정거장 — 위치(0~1)와 색·불투명도. color 가 nil 이면 투명이다.
public struct S1GradientStop: Sendable {
    public let offset: CGFloat
    public let color: S1Color?
    public let alpha: CGFloat

    public init(offset: CGFloat, color: S1Color?, alpha: CGFloat) {
        self.offset = offset
        self.color = color
        self.alpha = alpha
    }
}

/// 한 부품이 한 상태일 때의 최종 값. CSS 에 없던 항목은 nil 로 남는다 —
/// nil 을 임의의 기본값으로 채우지 않는다.
public struct S1Box: Sendable {
    public let background: S1Color?
    public let backgroundInherit: Bool
    public let foreground: S1Color?
    public let foregroundInherit: Bool
    public let borderColor: S1Color?
    public let borderWidth: CGFloat
    public let radius: CGFloat
    public let height: CGFloat?
    public let minHeight: CGFloat?
    public let width: CGFloat?
    public let minWidth: CGFloat?
    public let paddingStart: CGFloat
    public let paddingEnd: CGFloat
    public let paddingTop: CGFloat
    public let paddingBottom: CGFloat
    public let gap: CGFloat
    public let marginStart: CGFloat
    public let marginTop: CGFloat
    public let fontSize: CGFloat?
    public let fontWeight: Int?
    public let letterSpacing: CGFloat
    public let lineHeight: CGFloat?
    public let opacity: CGFloat?
    public let rotation: CGFloat?
    public let icon: String?
    public let underline: Bool
    public let left: CGFloat?
    public let right: CGFloat?
    public let top: CGFloat?
    public let marginEnd: CGFloat
    public let marginBottom: CGFloat
    public let maxWidth: CGFloat?
    public let maxHeight: CGFloat?
    /// 화면 높이의 몇 퍼센트까지 커질 수 있는가(CSS vh).
    public let maxHeightVh: CGFloat?
    /// 위쪽 두 모서리만 따로 둥글 때(시트) — nil 이면 radius 를 네 모서리에 쓴다.
    public let radiusTopStart: CGFloat?
    public let radiusTopEnd: CGFloat?
    /// 좌우 뒤집기(-1) — 접힘 카드 화살표가 열리면 위를 가리키게 만든다.
    public let scaleX: CGFloat?
    /// 한 줄 안의 칸 기본 크기(CSS flex-basis) — 휠 칸 높이.
    public let flexBasis: CGFloat?
    public let spaceBetween: Bool
    /// 전환 시간(ms) — 정본 transition 의 첫 시간. nil 이면 움직임이 없다.
    public let durationMs: Int?
    public let gradient: [S1GradientStop]?
    public let shadow: [S1Shadow]?

    public init(
        background: S1Color? = nil, backgroundInherit: Bool = false,
        foreground: S1Color? = nil, foregroundInherit: Bool = false,
        borderColor: S1Color? = nil, borderWidth: CGFloat = 0, radius: CGFloat = 0,
        height: CGFloat? = nil, minHeight: CGFloat? = nil, width: CGFloat? = nil, minWidth: CGFloat? = nil,
        paddingStart: CGFloat = 0, paddingEnd: CGFloat = 0, paddingTop: CGFloat = 0, paddingBottom: CGFloat = 0,
        gap: CGFloat = 0, marginStart: CGFloat = 0, marginTop: CGFloat = 0,
        fontSize: CGFloat? = nil, fontWeight: Int? = nil, letterSpacing: CGFloat = 0, lineHeight: CGFloat? = nil,
        opacity: CGFloat? = nil, rotation: CGFloat? = nil,
        icon: String? = nil, underline: Bool = false,
        left: CGFloat? = nil, right: CGFloat? = nil, top: CGFloat? = nil,
        marginEnd: CGFloat = 0, marginBottom: CGFloat = 0,
        maxWidth: CGFloat? = nil, maxHeight: CGFloat? = nil, maxHeightVh: CGFloat? = nil,
        radiusTopStart: CGFloat? = nil, radiusTopEnd: CGFloat? = nil,
        scaleX: CGFloat? = nil, flexBasis: CGFloat? = nil,
        spaceBetween: Bool = false, durationMs: Int? = nil,
        gradient: [S1GradientStop]? = nil, shadow: [S1Shadow]? = nil
    ) {
        self.background = background
        self.backgroundInherit = backgroundInherit
        self.foreground = foreground
        self.foregroundInherit = foregroundInherit
        self.borderColor = borderColor
        self.borderWidth = borderWidth
        self.radius = radius
        self.height = height
        self.minHeight = minHeight
        self.width = width
        self.minWidth = minWidth
        self.paddingStart = paddingStart
        self.paddingEnd = paddingEnd
        self.paddingTop = paddingTop
        self.paddingBottom = paddingBottom
        self.gap = gap
        self.marginStart = marginStart
        self.marginTop = marginTop
        self.fontSize = fontSize
        self.fontWeight = fontWeight
        self.letterSpacing = letterSpacing
        self.lineHeight = lineHeight
        self.opacity = opacity
        self.rotation = rotation
        self.icon = icon
        self.underline = underline
        self.left = left
        self.right = right
        self.top = top
        self.marginEnd = marginEnd
        self.marginBottom = marginBottom
        self.maxWidth = maxWidth
        self.maxHeight = maxHeight
        self.maxHeightVh = maxHeightVh
        self.radiusTopStart = radiusTopStart
        self.radiusTopEnd = radiusTopEnd
        self.scaleX = scaleX
        self.flexBasis = flexBasis
        self.spaceBetween = spaceBetween
        self.durationMs = durationMs
        self.gradient = gradient
        self.shadow = shadow
    }

    /// 안쪽 여백(CSS padding).
    public var insets: EdgeInsets {
        EdgeInsets(top: paddingTop, leading: paddingStart, bottom: paddingBottom, trailing: paddingEnd)
    }

    /// 바깥 여백(CSS margin).
    public var margin: EdgeInsets {
        EdgeInsets(top: marginTop, leading: marginStart, bottom: marginBottom, trailing: marginEnd)
    }

    public var shape: S1RoundedShape {
        S1RoundedShape(
            topLeading: radiusTopStart ?? radius,
            topTrailing: radiusTopEnd ?? radius,
            bottomTrailing: radius,
            bottomLeading: radius
        )
    }

    /// 전환 시간(초). 정본에 전환이 없으면 nil.
    public var duration: Double? {
        durationMs.map { Double($0) / 1000 }
    }
}

/// 표에서 값을 꺼내다 없으면 조용히 넘어가지 않는다 — 어느 칸이 비었는지 말하고 멈춘다.
public func s1Lookup(_ table: [String: [String: S1Box]], _ key: String, _ part: String, _ component: String) -> S1Box {
    guard let row = table[key] else {
        fatalError("[s1] \(component): 승인되지 않은 조합 \"\(key)\". 쓸 수 있는 조합: \(table.keys.sorted().joined(separator: ", "))")
    }
    guard let box = row[part] else {
        fatalError("[s1] \(component): \(key) 에 부품 \"\(part)\" 값이 없습니다.")
    }
    return box
}

// MARK: - 모서리

/// 네 모서리를 따로 둥글릴 수 있는 모양(iOS 16 에는 UnevenRoundedRectangle 이 없다).
/// 테두리를 안쪽에 그리거나 그림자를 퍼뜨릴 수 있도록 InsettableShape 이다.
public struct S1RoundedShape: InsettableShape {
    public var topLeading: CGFloat
    public var topTrailing: CGFloat
    public var bottomTrailing: CGFloat
    public var bottomLeading: CGFloat
    private var amount: CGFloat = 0

    public init(topLeading: CGFloat, topTrailing: CGFloat, bottomTrailing: CGFloat, bottomLeading: CGFloat) {
        self.topLeading = topLeading
        self.topTrailing = topTrailing
        self.bottomTrailing = bottomTrailing
        self.bottomLeading = bottomLeading
    }

    public init(radius: CGFloat) {
        self.init(topLeading: radius, topTrailing: radius, bottomTrailing: radius, bottomLeading: radius)
    }

    public func inset(by amount: CGFloat) -> S1RoundedShape {
        var copy = self
        copy.amount += amount
        return copy
    }

    public func path(in rect: CGRect) -> Path {
        let box = rect.insetBy(dx: amount, dy: amount)
        guard box.width > 0, box.height > 0 else { return Path() }
        let limit = min(box.width, box.height) / 2
        func radius(_ value: CGFloat) -> CGFloat { min(max(value - amount, 0), limit) }
        let tl = radius(topLeading)
        let tr = radius(topTrailing)
        let br = radius(bottomTrailing)
        let bl = radius(bottomLeading)
        var path = Path()
        path.move(to: CGPoint(x: box.minX + tl, y: box.minY))
        path.addLine(to: CGPoint(x: box.maxX - tr, y: box.minY))
        if tr > 0 {
            path.addArc(tangent1End: CGPoint(x: box.maxX, y: box.minY), tangent2End: CGPoint(x: box.maxX, y: box.minY + tr), radius: tr)
        }
        path.addLine(to: CGPoint(x: box.maxX, y: box.maxY - br))
        if br > 0 {
            path.addArc(tangent1End: CGPoint(x: box.maxX, y: box.maxY), tangent2End: CGPoint(x: box.maxX - br, y: box.maxY), radius: br)
        }
        path.addLine(to: CGPoint(x: box.minX + bl, y: box.maxY))
        if bl > 0 {
            path.addArc(tangent1End: CGPoint(x: box.minX, y: box.maxY), tangent2End: CGPoint(x: box.minX, y: box.maxY - bl), radius: bl)
        }
        path.addLine(to: CGPoint(x: box.minX, y: box.minY + tl))
        if tl > 0 {
            path.addArc(tangent1End: CGPoint(x: box.minX, y: box.minY), tangent2End: CGPoint(x: box.minX + tl, y: box.minY), radius: tl)
        }
        path.closeSubpath()
        return path
    }
}

// MARK: - 상자 수식어

private struct S1ShadowLayers: View {
    let layers: [S1Shadow]
    let shape: S1RoundedShape

    var body: some View {
        ZStack {
            ForEach(0..<layers.count, id: \.self) { index in
                let layer = layers[index]
                shape
                    .inset(by: -layer.spread)
                    .fill(Color(argb: layer.color))
                    .blur(radius: layer.blur / 2)
                    .offset(x: layer.x, y: layer.y)
            }
        }
    }
}

private struct S1BoxModifier: ViewModifier {
    @Environment(\.colorScheme) private var scheme
    let box: S1Box
    let applySize: Bool
    let applyPadding: Bool
    let alignment: Alignment

    func body(content: Content) -> some View {
        let shape = box.shape
        content
            .padding(applyPadding ? box.insets : EdgeInsets())
            .frame(width: applySize ? box.width : nil, height: applySize ? box.height : nil, alignment: alignment)
            .frame(
                minWidth: applySize ? box.minWidth : nil,
                minHeight: applySize ? box.minHeight : nil,
                alignment: alignment
            )
            .background(shape.fill(box.background?.resolve(scheme) ?? Color.clear))
            .overlay {
                if let border = box.borderColor, box.borderWidth > 0 {
                    shape.strokeBorder(border.resolve(scheme), lineWidth: box.borderWidth)
                }
            }
            .background {
                if let layers = box.shadow {
                    S1ShadowLayers(layers: layers, shape: shape)
                }
            }
    }
}

extension View {
    /// 배경·테두리·모서리·크기·안쪽 여백·그림자를 한 번에 적용한다. 그림자는 배경보다 먼저(뒤에) 그린다.
    /// alignment 는 상자가 안의 내용보다 클 때 내용이 놓이는 자리다.
    public func s1Box(_ box: S1Box, applySize: Bool = true, applyPadding: Bool = true, alignment: Alignment = .center) -> some View {
        modifier(S1BoxModifier(box: box, applySize: applySize, applyPadding: applyPadding, alignment: alignment))
    }

    /// 바깥 여백(CSS margin)을 적용한다.
    public func s1Margin(_ box: S1Box) -> some View {
        padding(box.margin)
    }

    /// 입력칸처럼 글자 상자를 쓰지 못하는 곳에 글자 값(서체·크기·굵기·색)을 입힌다.
    public func s1FieldText(_ box: S1Box, color: S1Color? = nil) -> some View {
        modifier(S1FieldTextModifier(box: box, color: color))
    }
}

private struct S1FieldTextModifier: ViewModifier {
    @Environment(\.colorScheme) private var scheme
    @Environment(\.s1FontFamily) private var family
    let box: S1Box
    let color: S1Color?

    func body(content: Content) -> some View {
        content
            .font(box.fontSize.map { s1Font(family: family, size: $0, weight: box.fontWeight) })
            .foregroundColor((color ?? box.foreground)?.resolve(scheme))
            .tracking((box.fontSize ?? 0) * box.letterSpacing)
    }
}

// MARK: - 정지 화면 모드

private struct S1StaticFieldsKey: EnvironmentKey {
    static let defaultValue = false
}

extension EnvironmentValues {
    /// 입력칸을 글자로만 그린다 — ImageRenderer(사진 찍기)는 TextField 를 그리지 못해서 갤러리 사진용으로만 쓴다.
    /// 패키지 안에서만 보이는 값이라 앱 코드에서는 쓰이지 않는다.
    var s1StaticFields: Bool {
        get { self[S1StaticFieldsKey.self] }
        set { self[S1StaticFieldsKey.self] = newValue }
    }
}

// MARK: - 뼈대 상수

/// 부품 값이 아니라 뼈대(동작)가 필요로 하는 상수 — 정본 CSS 에 없는 것이라 표에 있지 않다.
enum S1Layout {
    /// 목록이 열려 있을 때 바깥 어디를 눌러도 닫히게 하는 투명 덮개의 한 변.
    static let outsideTapReach: CGFloat = 4000
}

// MARK: - 색 칠하기

/// 환경의 colorScheme 으로 색을 풀어 모양을 칠한다. 색이 nil 이면 칠하지 않는다(투명).
public struct S1Fill<S: Shape>: View {
    @Environment(\.colorScheme) private var scheme
    private let shape: S
    private let color: S1Color?

    public init(_ shape: S, _ color: S1Color?) {
        self.shape = shape
        self.color = color
    }

    public var body: some View {
        shape.fill(color?.resolve(scheme) ?? Color.clear)
    }
}

private struct S1ForegroundModifier: ViewModifier {
    @Environment(\.colorScheme) private var scheme
    let color: S1Color?

    func body(content: Content) -> some View {
        content.foregroundColor(color?.resolve(scheme))
    }
}

private struct S1TintModifier: ViewModifier {
    @Environment(\.colorScheme) private var scheme
    let color: S1Color?

    func body(content: Content) -> some View {
        content.tint(color?.resolve(scheme))
    }
}

extension View {
    /// 글자·아이콘 색을 토큰으로 칠한다(nil 이면 건드리지 않는다).
    public func s1Foreground(_ color: S1Color?) -> some View {
        modifier(S1ForegroundModifier(color: color))
    }

    /// 입력칸의 커서·선택 색을 토큰으로 칠한다.
    public func s1Tint(_ color: S1Color?) -> some View {
        modifier(S1TintModifier(color: color))
    }
}

/// 승인되지 않은 값이 들어오면 그 자리에서 멈추고 이유를 알린다 — 조용히 다른 모양으로 그리지 않는다.
public func s1Require(_ condition: Bool, _ message: @autoclosure () -> String) {
    if !condition { fatalError(message()) }
}

// MARK: - 글자

func s1Weight(_ css: Int) -> Font.Weight {
    switch css {
    case ..<150: return .ultraLight
    case ..<250: return .thin
    case ..<350: return .light
    case ..<450: return .regular
    case ..<550: return .medium
    case ..<650: return .semibold
    case ..<750: return .bold
    case ..<850: return .heavy
    default: return .black
    }
}

func s1Font(family: String?, size: CGFloat, weight: Int?) -> Font {
    let resolved = s1Weight(weight ?? 400)
    if let family, !family.isEmpty {
        return Font.custom(family, size: size).weight(resolved)
    }
    return Font.system(size: size, weight: resolved)
}

/// 서체가 가진 한 줄의 기본 높이 — 정본 줄간격(배수)과의 차이만큼 줄 사이를 벌린다.
func s1NaturalLineHeight(family: String?, size: CGFloat) -> CGFloat {
    let font: CTFont
    if let family, !family.isEmpty {
        font = CTFontCreateWithName(family as CFString, size, nil)
    } else {
        font = CTFontCreateUIFontForLanguage(.system, size, nil) ?? CTFontCreateWithName("Helvetica" as CFString, size, nil)
    }
    return CTFontGetAscent(font) + CTFontGetDescent(font) + CTFontGetLeading(font)
}

/// 글자 한 덩어리의 값. 표(S1Box)의 글자 값이나 이름 붙은 텍스트 스타일에서 만든다.
struct S1TextValues {
    var fontSize: CGFloat?
    var fontWeight: Int?
    var letterSpacing: CGFloat
    var lineHeight: CGFloat?
    var underline: Bool
    var color: S1Color?
}

/// 승인된 글자. 크기·굵기·자간·줄간격·밑줄·색을 표에서 받아 그린다.
/// 줄간격은 정본 배수(예: 1.3)대로 맞춘다 — 서체의 기본 줄 높이와의 차이만 줄 사이에 더한다.
public struct S1Text: View {
    @Environment(\.colorScheme) private var scheme
    @Environment(\.s1FontFamily) private var family
    private let text: String
    private let values: S1TextValues

    /// 표의 한 부품(S1Box)에 적힌 글자 값으로 그린다. color 를 주면 상자의 글자색 대신 그 색을 쓴다.
    public init(_ text: String, _ box: S1Box, color: S1Color? = nil) {
        self.text = text
        self.values = S1TextValues(
            fontSize: box.fontSize, fontWeight: box.fontWeight, letterSpacing: box.letterSpacing,
            lineHeight: box.lineHeight, underline: box.underline, color: color ?? box.foreground
        )
    }

    /// 이름 붙은 텍스트 스타일(S1Type)로 그린다.
    public init(_ text: String, type: S1TypeSpec, color: S1Color? = nil) {
        self.text = text
        self.values = S1TextValues(
            fontSize: type.fontSize, fontWeight: type.fontWeight, letterSpacing: type.letterSpacing,
            lineHeight: type.lineHeight, underline: false, color: color
        )
    }

    public var body: some View {
        let size = values.fontSize
        let lineHeightPx: CGFloat? = (size != nil && values.lineHeight != nil) ? size! * values.lineHeight! : nil
        let natural: CGFloat = size.map { s1NaturalLineHeight(family: family, size: $0) } ?? 0
        let extra: CGFloat = lineHeightPx.map { max(0, $0 - natural) } ?? 0
        styled
            .lineSpacing(extra)
            .frame(minHeight: lineHeightPx, alignment: .center)
    }

    private var styled: Text {
        var view = Text(text)
        if let size = values.fontSize {
            view = view.font(s1Font(family: family, size: size, weight: values.fontWeight))
            if values.letterSpacing != 0 { view = view.tracking(size * values.letterSpacing) }
        }
        if values.underline { view = view.underline() }
        if let color = values.color { view = view.foregroundColor(color.resolve(scheme)) }
        return view
    }
}

// MARK: - 눌림·마우스 올림

/// 누르는 중인가, 포인터가 올라와 있는가. 터치 화면에는 hover 가 없고 iPad 포인터·Mac 에서만 생긴다.
public struct S1Interaction: Sendable {
    public let pressed: Bool
    public let hovered: Bool

    public init(pressed: Bool, hovered: Bool) {
        self.pressed = pressed
        self.hovered = hovered
    }

    /// 정본의 Hover 칸 — 마우스가 올라왔거나 손가락이 누르는 동안(모바일은 누름이 hover 를 대신한다).
    public var active: Bool { pressed || hovered }
}

private struct S1PressableStyle<Content: View>: ButtonStyle {
    let hovered: Bool
    let content: (S1Interaction) -> Content

    func makeBody(configuration: Configuration) -> some View {
        content(S1Interaction(pressed: configuration.isPressed, hovered: hovered))
            .contentShape(Rectangle())
    }
}

/// 누를 수 있는 자리. 안에 그릴 것은 눌림·hover 값을 받아 스스로 정한다.
/// action 이 nil 이면 누르지 않는 표시용이다(버튼 역할도 붙지 않는다).
public struct S1Pressable<Content: View>: View {
    private let enabled: Bool
    private let action: (() -> Void)?
    private let content: (S1Interaction) -> Content
    @State private var hovered = false

    public init(enabled: Bool = true, action: (() -> Void)?, @ViewBuilder content: @escaping (S1Interaction) -> Content) {
        self.enabled = enabled
        self.action = action
        self.content = content
    }

    public var body: some View {
        if let action {
            Button(action: action) { EmptyView() }
                .buttonStyle(S1PressableStyle(hovered: hovered, content: content))
                .disabled(!enabled)
                .onHover { hovered = enabled && $0 }
        } else {
            content(S1Interaction(pressed: false, hovered: false))
        }
    }
}

// MARK: - 바닥 시트

private struct S1SheetHeightKey: PreferenceKey {
    static let defaultValue: CGFloat = 0
    static func reduce(value: inout CGFloat, nextValue: () -> CGFloat) { value = max(value, nextValue()) }
}

private struct S1SheetHost<Content: View>: View {
    let panelColor: S1Color?
    let content: Content
    @Environment(\.colorScheme) private var scheme
    @State private var height: CGFloat = 480

    var body: some View {
        let background = panelColor?.resolve(scheme) ?? Color.clear
        let measured = content
            .fixedSize(horizontal: false, vertical: true)
            .background(GeometryReader { proxy in Color.clear.preference(key: S1SheetHeightKey.self, value: proxy.size.height) })
        measured
            .frame(maxWidth: .infinity)
            .onPreferenceChange(S1SheetHeightKey.self) { height = $0 }
            .background(background.ignoresSafeArea())
            .presentationDetents([.height(max(height, 1))])
            .presentationDragIndicator(.hidden)
    }
}

extension View {
    /// 화면 아래에서 올라오는 시트. 안쪽 높이만큼만 올라온다. panel 은 시트 배경색을 정하는 표의 부품이다.
    public func s1Sheet<Sheet: View>(isPresented: Binding<Bool>, panel: S1Box, @ViewBuilder content: @escaping () -> Sheet) -> some View {
        sheet(isPresented: isPresented) {
            S1SheetHost(panelColor: panel.background, content: content())
        }
    }
}
