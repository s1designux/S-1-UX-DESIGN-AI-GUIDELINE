// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// 정본: plugins/figma-vars-installer/src/textstyles-data.ts → assets/css/typography.css
// 낱개 값은 S1Tokens 에 있다. 여기 있는 것은 이름으로 부르는 묶음이다.
//
// 쓰는 법:  S1Text("본문", type: S1Type.body14r, color: S1Palette.colorTextBodyPrimary)

import CoreGraphics

public enum S1Type {
    /// typo-title-32b — 32pt · 굵기 700 · 줄간격 1.3 · 자간 0em
    public static let title32b = S1TypeSpec(fontSize: 32, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0)
    /// typo-title-32r — 32pt · 굵기 400 · 줄간격 1.3 · 자간 0em
    public static let title32r = S1TypeSpec(fontSize: 32, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0)
    /// typo-title-24b — 24pt · 굵기 700 · 줄간격 1.3 · 자간 0em
    public static let title24b = S1TypeSpec(fontSize: 24, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0)
    /// typo-title-20b — 20pt · 굵기 700 · 줄간격 1.3 · 자간 0em
    public static let title20b = S1TypeSpec(fontSize: 20, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0)
    /// typo-title-20r — 20pt · 굵기 400 · 줄간격 1.3 · 자간 0em
    public static let title20r = S1TypeSpec(fontSize: 20, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0)
    /// typo-title-18b — 18pt · 굵기 700 · 줄간격 1.3 · 자간 0em
    public static let title18b = S1TypeSpec(fontSize: 18, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0)
    /// typo-title-18m — 18pt · 굵기 500 · 줄간격 1.3 · 자간 -0.02em
    public static let title18m = S1TypeSpec(fontSize: 18, fontWeight: 500, lineHeight: 1.3, letterSpacing: -0.02)
    /// typo-title-16b — 16pt · 굵기 700 · 줄간격 1.3 · 자간 0em
    public static let title16b = S1TypeSpec(fontSize: 16, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0)
    /// typo-title-16m — 16pt · 굵기 500 · 줄간격 1.3 · 자간 -0.02em
    public static let title16m = S1TypeSpec(fontSize: 16, fontWeight: 500, lineHeight: 1.3, letterSpacing: -0.02)
    /// typo-title-14b — 14pt · 굵기 700 · 줄간격 1.3 · 자간 0em
    public static let title14b = S1TypeSpec(fontSize: 14, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0)
    /// typo-title-12b — 12pt · 굵기 700 · 줄간격 1.3 · 자간 0em
    public static let title12b = S1TypeSpec(fontSize: 12, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0)
    /// typo-title-14m — 14pt · 굵기 500 · 줄간격 1.3 · 자간 0em
    public static let title14m = S1TypeSpec(fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0)
    /// typo-body-18m — 18pt · 굵기 500 · 줄간격 1.3 · 자간 -0.02em
    public static let body18m = S1TypeSpec(fontSize: 18, fontWeight: 500, lineHeight: 1.3, letterSpacing: -0.02)
    /// typo-body-16m — 16pt · 굵기 500 · 줄간격 1.3 · 자간 -0.02em
    public static let body16m = S1TypeSpec(fontSize: 16, fontWeight: 500, lineHeight: 1.3, letterSpacing: -0.02)
    /// typo-body-16r — 16pt · 굵기 400 · 줄간격 1.3 · 자간 -0.02em
    public static let body16r = S1TypeSpec(fontSize: 16, fontWeight: 400, lineHeight: 1.3, letterSpacing: -0.02)
    /// typo-body-14m — 14pt · 굵기 500 · 줄간격 1.3 · 자간 -0.02em
    public static let body14m = S1TypeSpec(fontSize: 14, fontWeight: 500, lineHeight: 1.3, letterSpacing: -0.02)
    /// typo-body-14r — 14pt · 굵기 400 · 줄간격 1.3 · 자간 -0.02em
    public static let body14r = S1TypeSpec(fontSize: 14, fontWeight: 400, lineHeight: 1.3, letterSpacing: -0.02)
    /// typo-body-12m — 12pt · 굵기 500 · 줄간격 1.3 · 자간 0em
    public static let body12m = S1TypeSpec(fontSize: 12, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0)
    /// typo-body-12r — 12pt · 굵기 400 · 줄간격 1.3 · 자간 0em
    public static let body12r = S1TypeSpec(fontSize: 12, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0)
    /// typo-body-10m — 10pt · 굵기 500 · 줄간격 1.4 · 자간 0.02em
    public static let body10m = S1TypeSpec(fontSize: 10, fontWeight: 500, lineHeight: 1.4, letterSpacing: 0.02)
    /// typo-body-10r — 10pt · 굵기 400 · 줄간격 1.4 · 자간 0.02em
    public static let body10r = S1TypeSpec(fontSize: 10, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0.02)

    /// 승인 목록의 이름과 값 — 순서는 정본 순서다.
    public static let all: [(name: String, spec: S1TypeSpec)] = [
        (name: "title-32b", spec: title32b),
        (name: "title-32r", spec: title32r),
        (name: "title-24b", spec: title24b),
        (name: "title-20b", spec: title20b),
        (name: "title-20r", spec: title20r),
        (name: "title-18b", spec: title18b),
        (name: "title-18m", spec: title18m),
        (name: "title-16b", spec: title16b),
        (name: "title-16m", spec: title16m),
        (name: "title-14b", spec: title14b),
        (name: "title-12b", spec: title12b),
        (name: "title-14m", spec: title14m),
        (name: "body-18m", spec: body18m),
        (name: "body-16m", spec: body16m),
        (name: "body-16r", spec: body16r),
        (name: "body-14m", spec: body14m),
        (name: "body-14r", spec: body14r),
        (name: "body-12m", spec: body12m),
        (name: "body-12r", spec: body12r),
        (name: "body-10m", spec: body10m),
        (name: "body-10r", spec: body10r)
    ]

    /// 이름으로 찾는다. 승인 목록에 없는 이름이면 그 자리에서 멈춘다.
    public static func byName(_ name: String) -> S1TypeSpec {
        guard let found = all.first(where: { $0.name == name }) else {
            fatalError("[s1] 승인 목록에 없는 텍스트 스타일: \(name). 쓸 수 있는 이름: \(all.map { $0.name }.joined(separator: ", "))")
        }
        return found.spec
    }
}
