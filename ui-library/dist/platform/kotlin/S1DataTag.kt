// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1DataTag — 정본 Data Tag(색 × 모양 × 채움)

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

/**
 * 승인된 데이터 태그(뱃지). 보여주기만 하는 표시라 누르지 않고 hover·pressed 도 없다 — 상태 축이 없다.
 * 안에는 글자만 넣는다. 글자 크기는 부품이 정한다.
 *
 * 쓸 수 있는 값
 *   · tone   blue · red · gray (blue 승인·확인 / red 주의·에러)
 *   · shape  chips(알약) · square(네모)
 *   · solid  true = 채움 · false = 테두리만
 */
@Composable
fun S1DataTag(
    text: String,
    modifier: Modifier = Modifier,
    tone: String = "blue",
    shape: String = "chips",
    solid: Boolean = true
) {
    val box = S1DataTagSpec.box("${tone}|${shape}|${if (solid) "on" else "off"}", "root")
    Box(modifier = modifier.s1Box(box)) {
        BasicText(text = text, style = s1TextStyle(box), maxLines = 1)
    }
}
