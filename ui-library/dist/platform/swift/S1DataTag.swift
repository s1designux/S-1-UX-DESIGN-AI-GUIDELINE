// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1DataTag — 정본 Data Tag(색 × 모양 × 채움)

import SwiftUI

/// 승인된 데이터 태그(뱃지). 보여주기만 하는 표시라 누르지 않고 hover·pressed 도 없다 — 상태 축이 없다.
/// 안에는 글자만 넣는다. 글자 크기는 부품이 정한다.
///
/// 쓸 수 있는 값
///   · tone   blue · red · gray (blue 승인·확인 / red 주의·에러)
///   · shape  chips(알약) · square(네모)
///   · solid  true = 채움 · false = 테두리만
public struct S1DataTag: View {
    private let text: String
    private let tone: String
    private let shape: String
    private let solid: Bool

    public init(text: String, tone: String = "blue", shape: String = "chips", solid: Bool = true) {
        self.text = text
        self.tone = tone
        self.shape = shape
        self.solid = solid
    }

    public var body: some View {
        let fill = solid ? "on" : "off"
        let box = S1DataTagSpec.box("\(tone)|\(shape)|\(fill)", "root")
        S1Text(text, box)
            .lineLimit(1)
            .s1Box(box, alignment: .center)
    }

}
