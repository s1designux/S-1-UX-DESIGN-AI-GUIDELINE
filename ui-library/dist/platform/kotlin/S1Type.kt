// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// 정본: plugins/figma-vars-installer/src/textstyles-data.ts → assets/css/typography.css
// 낱개 값은 S1Tokens 에 있다. 여기 있는 것은 이름으로 부르는 묶음이다.
//
// 쓰는 법:  BasicText(text = "본문", style = S1Type.body14r.textStyle())
//          색을 함께 주려면  S1Type.body14r.textStyle(S1Palette.colorTextBodyPrimary)

package com.s1.designsystem

object S1Type {
    /** typo-title-32b — 32sp · 굵기 700 · 줄간격 1.3 · 자간 0em */
    val title32b: S1TypeSpec = S1TypeSpec(32f, 700, 1.3f, 0f)
    /** typo-title-32r — 32sp · 굵기 400 · 줄간격 1.3 · 자간 0em */
    val title32r: S1TypeSpec = S1TypeSpec(32f, 400, 1.3f, 0f)
    /** typo-title-24b — 24sp · 굵기 700 · 줄간격 1.3 · 자간 0em */
    val title24b: S1TypeSpec = S1TypeSpec(24f, 700, 1.3f, 0f)
    /** typo-title-20b — 20sp · 굵기 700 · 줄간격 1.3 · 자간 0em */
    val title20b: S1TypeSpec = S1TypeSpec(20f, 700, 1.3f, 0f)
    /** typo-title-20r — 20sp · 굵기 400 · 줄간격 1.3 · 자간 0em */
    val title20r: S1TypeSpec = S1TypeSpec(20f, 400, 1.3f, 0f)
    /** typo-title-18b — 18sp · 굵기 700 · 줄간격 1.3 · 자간 0em */
    val title18b: S1TypeSpec = S1TypeSpec(18f, 700, 1.3f, 0f)
    /** typo-title-18m — 18sp · 굵기 500 · 줄간격 1.3 · 자간 -0.02em */
    val title18m: S1TypeSpec = S1TypeSpec(18f, 500, 1.3f, -0.02f)
    /** typo-title-16b — 16sp · 굵기 700 · 줄간격 1.3 · 자간 0em */
    val title16b: S1TypeSpec = S1TypeSpec(16f, 700, 1.3f, 0f)
    /** typo-title-16m — 16sp · 굵기 500 · 줄간격 1.3 · 자간 -0.02em */
    val title16m: S1TypeSpec = S1TypeSpec(16f, 500, 1.3f, -0.02f)
    /** typo-title-14b — 14sp · 굵기 700 · 줄간격 1.3 · 자간 0em */
    val title14b: S1TypeSpec = S1TypeSpec(14f, 700, 1.3f, 0f)
    /** typo-title-14m — 14sp · 굵기 500 · 줄간격 1.3 · 자간 0em */
    val title14m: S1TypeSpec = S1TypeSpec(14f, 500, 1.3f, 0f)
    /** typo-body-18m — 18sp · 굵기 500 · 줄간격 1.3 · 자간 -0.02em */
    val body18m: S1TypeSpec = S1TypeSpec(18f, 500, 1.3f, -0.02f)
    /** typo-body-16m — 16sp · 굵기 500 · 줄간격 1.3 · 자간 -0.02em */
    val body16m: S1TypeSpec = S1TypeSpec(16f, 500, 1.3f, -0.02f)
    /** typo-body-16r — 16sp · 굵기 400 · 줄간격 1.3 · 자간 -0.02em */
    val body16r: S1TypeSpec = S1TypeSpec(16f, 400, 1.3f, -0.02f)
    /** typo-body-14m — 14sp · 굵기 500 · 줄간격 1.3 · 자간 -0.02em */
    val body14m: S1TypeSpec = S1TypeSpec(14f, 500, 1.3f, -0.02f)
    /** typo-body-14r — 14sp · 굵기 400 · 줄간격 1.3 · 자간 -0.02em */
    val body14r: S1TypeSpec = S1TypeSpec(14f, 400, 1.3f, -0.02f)
    /** typo-body-12m — 12sp · 굵기 500 · 줄간격 1.3 · 자간 0em */
    val body12m: S1TypeSpec = S1TypeSpec(12f, 500, 1.3f, 0f)
    /** typo-body-12r — 12sp · 굵기 400 · 줄간격 1.3 · 자간 0em */
    val body12r: S1TypeSpec = S1TypeSpec(12f, 400, 1.3f, 0f)
    /** typo-body-10m — 10sp · 굵기 500 · 줄간격 1.4 · 자간 0.02em */
    val body10m: S1TypeSpec = S1TypeSpec(10f, 500, 1.4f, 0.02f)
    /** typo-body-10r — 10sp · 굵기 400 · 줄간격 1.4 · 자간 0.02em */
    val body10r: S1TypeSpec = S1TypeSpec(10f, 400, 1.4f, 0.02f)

    /** 이름으로 찾는다. 승인 목록에 없는 이름이면 그 자리에서 멈춘다. */
    val all: Map<String, S1TypeSpec> = mapOf(
        "title-32b" to title32b,
        "title-32r" to title32r,
        "title-24b" to title24b,
        "title-20b" to title20b,
        "title-20r" to title20r,
        "title-18b" to title18b,
        "title-18m" to title18m,
        "title-16b" to title16b,
        "title-16m" to title16m,
        "title-14b" to title14b,
        "title-14m" to title14m,
        "body-18m" to body18m,
        "body-16m" to body16m,
        "body-16r" to body16r,
        "body-14m" to body14m,
        "body-14r" to body14r,
        "body-12m" to body12m,
        "body-12r" to body12r,
        "body-10m" to body10m,
        "body-10r" to body10r
    )

    fun byName(name: String): S1TypeSpec =
        all[name] ?: error("[s1] 승인 목록에 없는 텍스트 스타일: $name. 쓸 수 있는 이름: ${all.keys.joinToString(", ")}")
}
