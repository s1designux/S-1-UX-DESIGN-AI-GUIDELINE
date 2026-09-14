// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1AssistButton — 정본 Assist Button(높이 32, 최소 폭 60)

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
 * 승인된 보조 버튼. 누르는 동안의 면은 hover 와 같다(코어 Button 규칙).
 * 이 부품은 화면 mobile 한 벌뿐이라 고를 파라미터가 없다.
 */
@Composable
fun S1AssistButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
) {
    val hovered by interactionSource.collectIsHoveredAsState()
    val pressed by interactionSource.collectIsPressedAsState()
    val state = when {
        !enabled -> "disabled"
        pressed -> "pressed"
        hovered -> "hover"
        else -> "default"
    }
    val key = "$state"
    val root = S1AssistButtonSpec.box(key, "root")
    val label = S1AssistButtonSpec.box(key, "label")
    Box(
        modifier = modifier
            .s1Box(root, applyPadding = false)
            .clickable(
                enabled = enabled,
                interactionSource = interactionSource,
                indication = null,
                onClick = onClick
            )
            .s1Padding(root),
        contentAlignment = Alignment.Center
    ) {
        /* 글자 값(크기·굵기·밑줄)은 뿌리 상자가 갖는다 — 라벨 상자는 색만 다를 때 그 색을 덮어쓴다. */
        BasicText(text = text, style = s1TextStyle(root, label.foreground ?: root.foreground), maxLines = 1)
    }
}
