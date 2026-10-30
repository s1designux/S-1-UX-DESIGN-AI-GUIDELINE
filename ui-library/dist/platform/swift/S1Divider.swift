// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Divider — 정본 Divider(가로 x · 세로 y)

import SwiftUI

/// 승인된 구분선. 가로(x)는 폭을 가득 채우고, 세로(y)는 글자 줄보다 짧은 높이로 정해진 길이를 쓴다.
/// 들여쓰기(inset = "text")는 가로 전용이다 — 세로선에 쓰면 승인되지 않은 조합이라 멈춘다.
/// 뜻 없는 장식선이므로 보조기기에서는 숨긴다.
///
/// 쓸 수 있는 값
///   · axis    x · y
///   · weight  default · strong (굵기)
///   · tone    default · strong (색)
///   · inset   none · text
public struct S1Divider: View {
    private let axis: String
    private let weight: String
    private let tone: String
    private let inset: String

    public init(axis: String = "x", weight: String = "default", tone: String = "default", inset: String = "none") {
        self.axis = axis
        self.weight = weight
        self.tone = tone
        self.inset = inset
    }

    public var body: some View {
        let box = S1DividerSpec.box("\(axis)|\(weight)|\(tone)|\(inset)", "root")
        S1Fill(Rectangle(), box.background)
            .s1Box(box, alignment: .center)
            .s1Margin(box)
            .accessibilityHidden(true)
    }

}
