// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Divider — 정본 Divider(가로 x · 세로 y)

package com.s1.designsystem

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsHoveredAsState
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.text.BasicText
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.layout.fillMaxWidth

/**
 * 승인된 구분선. 가로(x)는 폭을 가득 채우고, 세로(y)는 글자 줄보다 짧은 높이로 정해진 길이를 쓴다.
 * 들여쓰기(inset = "text")는 가로 전용이다 — 세로선에 쓰면 승인되지 않은 조합이라 멈춘다.
 *
 * 쓸 수 있는 값
 *   · axis    x · y
 *   · weight  default · strong (굵기)
 *   · tone    default · strong (색)
 *   · inset   none · text
 */
@Composable
fun S1Divider(
    modifier: Modifier = Modifier,
    axis: String = "x",
    weight: String = "default",
    tone: String = "default",
    inset: String = "none"
) {
    val box = S1DividerSpec.box("${axis}|${weight}|${tone}|${inset}", "root")
    val sized = if (axis == "x") Modifier.fillMaxWidth() else Modifier
    Box(
        modifier = modifier
            .s1Margin(box)
            .then(sized)
            .s1Box(box)
    )
}
