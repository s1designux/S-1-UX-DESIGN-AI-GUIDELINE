// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Box 는 승인된 배포본 CSS 를 그대로 계산한 값 묶음이다. 여기서는 그리는 방법만 정한다.

package com.s1.designsystem

import android.graphics.BlurMaskFilter
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.ProvidableCompositionLocal
import androidx.compose.runtime.compositionLocalOf
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.drawIntoCanvas
import androidx.compose.ui.graphics.nativeCanvas
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.em
import androidx.compose.ui.unit.sp

/** 한 토큰의 라이트·다크 값 한 쌍. 어느 쪽을 쓸지는 화면의 테마가 정한다. */
@Immutable
data class S1Color(val light: Long, val dark: Long) {
    fun resolve(dark: Boolean): Color = Color(if (dark) this.dark else this.light)

    @Composable
    fun value(): Color = resolve(LocalS1Dark.current)

    companion object {
        val Transparent = S1Color(0x00000000, 0x00000000)
    }
}

val LocalS1Dark: ProvidableCompositionLocal<Boolean> = compositionLocalOf { false }

/** 정본 서체는 Pretendard 다. 안드로이드 폰트 리소스는 앱이 넣어 주고 여기에 전달한다. */
val LocalS1FontFamily: ProvidableCompositionLocal<FontFamily> = compositionLocalOf { FontFamily.Default }

@Composable
fun S1Theme(
    dark: Boolean = false,
    fontFamily: FontFamily = LocalS1FontFamily.current,
    content: @Composable () -> Unit
) {
    CompositionLocalProvider(
        LocalS1Dark provides dark,
        LocalS1FontFamily provides fontFamily,
        content = content
    )
}

/**
 * 이름 붙은 글자 묶음 하나(텍스트 스타일). 서체는 테마가 준다 —
 * 정본 서체는 Pretendard 이고, 안드로이드 폰트 리소스는 앱이 넣어 S1Theme 에 넘긴다.
 */
@Immutable
data class S1TypeSpec(
    val fontSize: Float,
    val fontWeight: Int,
    /** 글꼴 크기에 곱하는 배수(정본 130% = 1.3). */
    val lineHeight: Float,
    /** em 단위 자간. */
    val letterSpacing: Float
)

@Composable
fun S1TypeSpec.textStyle(color: S1Color? = null): TextStyle = TextStyle(
    color = color?.resolve(LocalS1Dark.current) ?: Color.Unspecified,
    fontFamily = LocalS1FontFamily.current,
    fontSize = fontSize.sp,
    fontWeight = FontWeight(fontWeight),
    letterSpacing = if (letterSpacing == 0f) TextUnit.Unspecified else letterSpacing.em,
    lineHeight = (fontSize * lineHeight).sp
)

/** 그림자 한 겹. CSS box-shadow 의 x·y·번짐·퍼짐·색을 그대로 옮긴 것이다. */
@Immutable
data class S1Shadow(val x: Float, val y: Float, val blur: Float, val spread: Float, val color: Long)

/** 세로 흐림 한 정거장 — 위치(0~1)와 색·불투명도. color 가 null 이면 투명이다. */
@Immutable
data class S1GradientStop(val offset: Float, val color: S1Color?, val alpha: Float)

/**
 * 한 부품이 한 상태일 때의 최종 값. CSS 에 없던 항목은 null 로 남는다 —
 * null 을 임의의 기본값으로 채우지 않는다.
 */
@Immutable
data class S1Box(
    val background: S1Color? = null,
    val backgroundInherit: Boolean = false,
    val foreground: S1Color? = null,
    val foregroundInherit: Boolean = false,
    val borderColor: S1Color? = null,
    val borderWidth: Float = 0f,
    val radius: Float = 0f,
    val height: Float? = null,
    val minHeight: Float? = null,
    val width: Float? = null,
    val minWidth: Float? = null,
    val paddingStart: Float = 0f,
    val paddingEnd: Float = 0f,
    val paddingTop: Float = 0f,
    val paddingBottom: Float = 0f,
    val gap: Float = 0f,
    val marginStart: Float = 0f,
    val marginTop: Float = 0f,
    val fontSize: Float? = null,
    val fontWeight: Int? = null,
    val letterSpacing: Float = 0f,
    val lineHeight: Float? = null,
    val opacity: Float? = null,
    val rotation: Float? = null,
    val icon: String? = null,
    val underline: Boolean = false,
    val left: Float? = null,
    val right: Float? = null,
    val top: Float? = null,
    val marginEnd: Float = 0f,
    val marginBottom: Float = 0f,
    val maxWidth: Float? = null,
    val maxHeight: Float? = null,
    /** 화면 높이의 몇 퍼센트까지 커질 수 있는가(CSS vh). */
    val maxHeightVh: Float? = null,
    /** 위쪽 두 모서리만 따로 둥글 때(시트) — null 이면 radius 를 네 모서리에 쓴다. */
    val radiusTopStart: Float? = null,
    val radiusTopEnd: Float? = null,
    /** 좌우 뒤집기(-1) — 접힘 카드 화살표가 열리면 위를 가리키게 만든다. */
    val scaleX: Float? = null,
    /** 한 줄 안의 칸 기본 크기(CSS flex-basis) — 휠 칸 높이. */
    val flexBasis: Float? = null,
    val spaceBetween: Boolean = false,
    /** 전환 시간(ms) — 정본 transition 의 첫 시간. null 이면 움직임이 없다. */
    val durationMs: Int? = null,
    val gradient: List<S1GradientStop>? = null,
    val shadow: List<S1Shadow>? = null
) {
    val shape: Shape get() = if (radiusTopStart != null || radiusTopEnd != null) {
        RoundedCornerShape(
            topStart = (radiusTopStart ?: radius).dp,
            topEnd = (radiusTopEnd ?: radius).dp,
            bottomEnd = radius.dp,
            bottomStart = radius.dp
        )
    } else {
        RoundedCornerShape(radius.dp)
    }
    val gapDp: Dp get() = gap.dp
}

/** 배경·테두리·모서리·크기·안쪽 여백을 한 번에 적용한다. 그림자는 배경보다 먼저 그린다. */
@Composable
fun Modifier.s1Box(
    box: S1Box,
    background: S1Color? = box.background,
    borderColor: S1Color? = box.borderColor,
    applySize: Boolean = true,
    applyPadding: Boolean = true
): Modifier {
    val dark = LocalS1Dark.current
    var modifier = this
    box.shadow?.let { modifier = modifier.s1Shadow(it, box.radiusTopStart ?: box.radius) }
    if (applySize) {
        box.width?.let { modifier = modifier.width(it.dp) }
        box.height?.let { modifier = modifier.height(it.dp) }
        if (box.minWidth != null || box.minHeight != null) {
            modifier = modifier.defaultMinSize(
                minWidth = box.minWidth?.dp ?: Dp.Unspecified,
                minHeight = box.minHeight?.dp ?: Dp.Unspecified
            )
        }
    }
    background?.let { modifier = modifier.background(it.resolve(dark), box.shape) }
    if (borderColor != null && box.borderWidth > 0f) {
        modifier = modifier.border(box.borderWidth.dp, borderColor.resolve(dark), box.shape)
    }
    if (applyPadding) {
        modifier = modifier.padding(
            start = box.paddingStart.dp,
            end = box.paddingEnd.dp,
            top = box.paddingTop.dp,
            bottom = box.paddingBottom.dp
        )
    }
    return modifier
}

/** 바깥 여백(CSS margin)을 적용한다 — 음수가 아닌 값만 이 수식어로 그린다(음수는 부품이 따로 처리한다). */
fun Modifier.s1Margin(box: S1Box): Modifier = padding(
    start = box.marginStart.dp,
    end = box.marginEnd.dp,
    top = box.marginTop.dp,
    bottom = box.marginBottom.dp
)

/** 세로 흐림 정거장 → 브러시. 투명 정거장은 이웃 색의 투명판으로 칠한다(CSS 의 투명은 색을 품은 채 사라지기 때문이다). */
fun List<S1GradientStop>.toVerticalBrush(dark: Boolean): Brush {
    val base = firstNotNullOf { it.color }.resolve(dark)
    val stops = map { stop ->
        val color = stop.color?.resolve(dark) ?: base
        stop.offset to color.copy(alpha = if (stop.color == null) 0f else stop.alpha)
    }
    return Brush.verticalGradient(colorStops = stops.toTypedArray())
}

/** 안쪽 여백만 따로 적용한다 — 누르는 영역을 여백까지 포함시키려면 클릭 뒤에 붙인다. */
fun Modifier.s1Padding(box: S1Box): Modifier = padding(
    start = box.paddingStart.dp,
    end = box.paddingEnd.dp,
    top = box.paddingTop.dp,
    bottom = box.paddingBottom.dp
)

/** CSS box-shadow 를 층 그대로 그린다(안드로이드 elevation 으로 바꾸지 않는다). */
fun Modifier.s1Shadow(layers: List<S1Shadow>, radius: Float): Modifier = drawBehind {
    for (layer in layers) drawShadowLayer(layer, radius)
}

private fun DrawScope.drawShadowLayer(layer: S1Shadow, radius: Float) {
    drawIntoCanvas { canvas ->
        val paint = android.graphics.Paint().apply {
            isAntiAlias = true
            color = Color(layer.color).toArgb()
            if (layer.blur > 0f) maskFilter = BlurMaskFilter(layer.blur.dp.toPx(), BlurMaskFilter.Blur.NORMAL)
        }
        val spread = layer.spread.dp.toPx()
        canvas.nativeCanvas.drawRoundRect(
            -spread + layer.x.dp.toPx(),
            -spread + layer.y.dp.toPx(),
            size.width + spread + layer.x.dp.toPx(),
            size.height + spread + layer.y.dp.toPx(),
            radius.dp.toPx(),
            radius.dp.toPx(),
            paint
        )
    }
}

/** 글자 값 — 없는 항목은 상속을 뜻하므로 Unspecified 로 둔다. */
@Composable
fun s1TextStyle(box: S1Box, color: S1Color? = box.foreground): TextStyle {
    val dark = LocalS1Dark.current
    val size: TextUnit = box.fontSize?.sp ?: TextUnit.Unspecified
    return TextStyle(
        color = color?.resolve(dark) ?: Color.Unspecified,
        fontFamily = LocalS1FontFamily.current,
        fontSize = size,
        fontWeight = box.fontWeight?.let { FontWeight(it) },
        letterSpacing = if (box.letterSpacing == 0f) TextUnit.Unspecified else box.letterSpacing.em,
        lineHeight = if (box.lineHeight == null || box.fontSize == null) TextUnit.Unspecified else (box.fontSize * box.lineHeight).sp,
        textDecoration = if (box.underline) TextDecoration.Underline else TextDecoration.None
    )
}

/** 표에서 값을 꺼내다 없으면 조용히 넘어가지 않는다 — 어느 칸이 비었는지 말하고 멈춘다. */
internal fun Map<String, Map<String, S1Box>>.box(key: String, part: String, component: String): S1Box {
    val row = this[key] ?: error("[s1] $component: 승인되지 않은 조합 \"$key\". 쓸 수 있는 조합: ${keys.sorted().joinToString(", ")}")
    return row[part] ?: error("[s1] $component: $key 에 부품 \"$part\" 값이 없습니다.")
}
