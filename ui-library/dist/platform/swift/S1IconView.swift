// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// 배포본 아이콘(SVG)을 SwiftUI 로 그린다. 모양은 원본 그대로이고, 색은 그릴 때 tint 로 준다.

import SwiftUI

/// 아이콘 경로 한 줄(원본 <path> 하나). 채움·선 여부와 선 모양은 원본 속성 그대로다.
public struct S1IconPath: Sendable {
    public let data: String
    public let filled: Bool
    public let stroked: Bool
    public let strokeWidth: CGFloat
    public let lineCap: CGLineCap
    public let lineJoin: CGLineJoin
    public let evenOdd: Bool

    public init(data: String, filled: Bool, stroked: Bool, strokeWidth: CGFloat, lineCap: CGLineCap, lineJoin: CGLineJoin, evenOdd: Bool) {
        self.data = data
        self.filled = filled
        self.stroked = stroked
        self.strokeWidth = strokeWidth
        self.lineCap = lineCap
        self.lineJoin = lineJoin
        self.evenOdd = evenOdd
    }
}

/// 아이콘 하나 — 원본 크기(width×height)와 경로들.
public struct S1IconData: Sendable {
    public let name: String
    public let width: CGFloat
    public let height: CGFloat
    public let paths: [S1IconPath]

    public init(name: String, width: CGFloat, height: CGFloat, paths: [S1IconPath]) {
        self.name = name
        self.width = width
        self.height = height
        self.paths = paths
    }
}

/// SVG 경로 문자열 → Path. 절대 좌표 명령(M L H V C S Q T A Z)만 읽는다(생성기가 그렇게 정규화해 둔다).
enum S1SVGPath {
    static func parse(_ data: String) -> Path {
        let tokens = data.split(separator: " ").map(String.init)
        var path = Path()
        var index = 0
        var current = CGPoint.zero
        var start = CGPoint.zero
        var lastCubic: CGPoint?
        var lastQuad: CGPoint?

        func number() -> CGFloat {
            defer { index += 1 }
            return CGFloat(Double(tokens[index]) ?? 0)
        }

        while index < tokens.count {
            let command = tokens[index]
            index += 1
            switch command {
            case "M":
                current = CGPoint(x: number(), y: number())
                start = current
                path.move(to: current)
                lastCubic = nil; lastQuad = nil
            case "L":
                current = CGPoint(x: number(), y: number())
                path.addLine(to: current)
                lastCubic = nil; lastQuad = nil
            case "H":
                current = CGPoint(x: number(), y: current.y)
                path.addLine(to: current)
                lastCubic = nil; lastQuad = nil
            case "V":
                current = CGPoint(x: current.x, y: number())
                path.addLine(to: current)
                lastCubic = nil; lastQuad = nil
            case "C":
                let c1 = CGPoint(x: number(), y: number())
                let c2 = CGPoint(x: number(), y: number())
                let end = CGPoint(x: number(), y: number())
                path.addCurve(to: end, control1: c1, control2: c2)
                current = end; lastCubic = c2; lastQuad = nil
            case "S":
                let c1 = lastCubic.map { CGPoint(x: 2 * current.x - $0.x, y: 2 * current.y - $0.y) } ?? current
                let c2 = CGPoint(x: number(), y: number())
                let end = CGPoint(x: number(), y: number())
                path.addCurve(to: end, control1: c1, control2: c2)
                current = end; lastCubic = c2; lastQuad = nil
            case "Q":
                let c = CGPoint(x: number(), y: number())
                let end = CGPoint(x: number(), y: number())
                path.addQuadCurve(to: end, control: c)
                current = end; lastQuad = c; lastCubic = nil
            case "T":
                let c = lastQuad.map { CGPoint(x: 2 * current.x - $0.x, y: 2 * current.y - $0.y) } ?? current
                let end = CGPoint(x: number(), y: number())
                path.addQuadCurve(to: end, control: c)
                current = end; lastQuad = c; lastCubic = nil
            case "A":
                let rx = number()
                let ry = number()
                let rotation = number()
                let large = number() != 0
                let sweep = number() != 0
                let end = CGPoint(x: number(), y: number())
                addArc(&path, from: current, rx: rx, ry: ry, rotation: rotation, large: large, sweep: sweep, to: end)
                current = end; lastCubic = nil; lastQuad = nil
            case "Z":
                path.closeSubpath()
                current = start
                lastCubic = nil; lastQuad = nil
            default:
                fatalError("[s1] 지원하지 않는 SVG 경로 명령: \(command)")
            }
        }
        return path
    }

    /// SVG 타원 호(끝점 표기)를 베지어 곡선 조각들로 바꾼다(SVG 사양 부록 F.6).
    private static func addArc(_ path: inout Path, from p0: CGPoint, rx rxIn: CGFloat, ry ryIn: CGFloat, rotation: CGFloat, large: Bool, sweep: Bool, to p1: CGPoint) {
        var rx = abs(rxIn)
        var ry = abs(ryIn)
        if rx == 0 || ry == 0 || (p0.x == p1.x && p0.y == p1.y) {
            path.addLine(to: p1)
            return
        }
        let phi = rotation * .pi / 180
        let cosPhi = cos(phi)
        let sinPhi = sin(phi)
        let dx = (p0.x - p1.x) / 2
        let dy = (p0.y - p1.y) / 2
        let x1p = cosPhi * dx + sinPhi * dy
        let y1p = -sinPhi * dx + cosPhi * dy
        let lambda = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry)
        if lambda > 1 {
            let scale = lambda.squareRoot()
            rx *= scale
            ry *= scale
        }
        let numerator = rx * rx * ry * ry - rx * rx * y1p * y1p - ry * ry * x1p * x1p
        let denominator = rx * rx * y1p * y1p + ry * ry * x1p * x1p
        let sign: CGFloat = large == sweep ? -1 : 1
        let coefficient = sign * max(0, numerator / denominator).squareRoot()
        let cxp = coefficient * (rx * y1p / ry)
        let cyp = coefficient * (-ry * x1p / rx)
        let cx = cosPhi * cxp - sinPhi * cyp + (p0.x + p1.x) / 2
        let cy = sinPhi * cxp + cosPhi * cyp + (p0.y + p1.y) / 2

        func angle(_ ux: CGFloat, _ uy: CGFloat, _ vx: CGFloat, _ vy: CGFloat) -> CGFloat {
            let dot = ux * vx + uy * vy
            let length = (ux * ux + uy * uy).squareRoot() * (vx * vx + vy * vy).squareRoot()
            var value = acos(max(-1, min(1, dot / length)))
            if ux * vy - uy * vx < 0 { value = -value }
            return value
        }
        let theta1 = angle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry)
        var delta = angle((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx, (-y1p - cyp) / ry)
        if !sweep && delta > 0 { delta -= 2 * .pi }
        if sweep && delta < 0 { delta += 2 * .pi }

        let segments = max(1, Int((abs(delta) / (.pi / 2)).rounded(.up)))
        let step = delta / CGFloat(segments)
        let t = 4.0 / 3.0 * tan(step / 4)
        var angleStart = theta1
        for _ in 0..<segments {
            let angleEnd = angleStart + step
            let cosStart = cos(angleStart), sinStart = sin(angleStart)
            let cosEnd = cos(angleEnd), sinEnd = sin(angleEnd)
            func map(_ x: CGFloat, _ y: CGFloat) -> CGPoint {
                CGPoint(x: cosPhi * rx * x - sinPhi * ry * y + cx, y: sinPhi * rx * x + cosPhi * ry * y + cy)
            }
            let c1 = map(cosStart - t * sinStart, sinStart + t * cosStart)
            let c2 = map(cosEnd + t * sinEnd, sinEnd - t * cosEnd)
            let end = map(cosEnd, sinEnd)
            path.addCurve(to: end, control1: c1, control2: c2)
            angleStart = angleEnd
        }
    }
}

private struct S1IconShape: Shape {
    let data: String
    let viewWidth: CGFloat
    let viewHeight: CGFloat

    func path(in rect: CGRect) -> Path {
        S1SVGPath.parse(data).applying(CGAffineTransform(scaleX: rect.width / viewWidth, y: rect.height / viewHeight))
    }
}

/// 승인된 아이콘 한 개. width·height 는 그릴 크기(점)이고, 색은 tint 로 입힌다.
public struct S1Icon: View {
    @Environment(\.colorScheme) private var scheme
    private let icon: S1IconData
    private let width: CGFloat
    private let height: CGFloat
    private let tint: S1Color?
    private let rotation: CGFloat
    private let scaleX: CGFloat

    public init(_ name: String, width: CGFloat, height: CGFloat, tint: S1Color?, rotation: CGFloat = 0, scaleX: CGFloat = 1) {
        self.icon = S1Icons.byName(name)
        self.width = width
        self.height = height
        self.tint = tint
        self.rotation = rotation
        self.scaleX = scaleX
    }

    /// 표의 한 부품(S1Box)이 가진 아이콘 이름·크기·회전·뒤집기로 그린다. 아이콘 이름이 없는 칸에는 쓰지 않는다(호출하는 쪽이 먼저 확인한다).
    public init(box: S1Box, tint: S1Color?) {
        guard let name = box.icon else { fatalError("[s1] S1Icon: 이 칸에는 아이콘이 없습니다.") }
        self.init(name, width: box.width ?? 0, height: box.height ?? 0, tint: tint, rotation: box.rotation ?? 0, scaleX: box.scaleX ?? 1)
    }

    public var body: some View {
        let color = tint?.resolve(scheme) ?? Color.primary
        let scale = icon.width == 0 ? 1 : width / icon.width
        ZStack {
            ForEach(0..<icon.paths.count, id: \.self) { index in
                let path = icon.paths[index]
                let shape = S1IconShape(data: path.data, viewWidth: icon.width, viewHeight: icon.height)
                if path.filled {
                    shape.fill(color, style: FillStyle(eoFill: path.evenOdd))
                }
                if path.stroked {
                    shape.stroke(color, style: StrokeStyle(lineWidth: path.strokeWidth * scale, lineCap: path.lineCap, lineJoin: path.lineJoin))
                }
            }
        }
        .frame(width: width, height: height)
        .rotationEffect(.degrees(Double(rotation)))
        .scaleEffect(x: scaleX, y: 1)
        .accessibilityHidden(true)
    }
}
