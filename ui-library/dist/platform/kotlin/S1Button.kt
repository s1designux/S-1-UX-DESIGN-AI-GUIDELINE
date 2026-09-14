// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Button — 정본 Button(primary · secondary · blue-line × lg)

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
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow

/**
 * 승인된 버튼. 없는 조합을 넣으면 그 자리에서 멈추고 쓸 수 있는 조합을 알려 준다.
 * 이 부품은 크기 lg · 화면 mobile 한 벌뿐이라 고를 파라미터가 없다.
 * Hover 는 마우스가 있는 화면에서만 생긴다 — 정본 CSS 의 @media (hover: hover) 와 같다.
 */
@Composable
fun S1Button(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    variant: String = "primary",
    enabled: Boolean = true,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
) {
    val hovered by interactionSource.collectIsHoveredAsState()
    val pressed by interactionSource.collectIsPressedAsState()
    val state = when {
        !enabled -> "disabled"
        hovered || pressed -> "hover"
        else -> "default"
    }
    val box = S1ButtonSpec.box("$variant|lg|$state", "root")
    Box(
        modifier = modifier
            .s1Box(box, applyPadding = false)
            .clickable(
                enabled = enabled,
                interactionSource = interactionSource,
                indication = null,
                onClick = onClick
            )
            .s1Padding(box),
        contentAlignment = Alignment.Center
    ) {
        BasicText(
            text = text,
            style = s1TextStyle(box).copy(textAlign = TextAlign.Center),
            maxLines = 1,
            overflow = TextOverflow.Ellipsis
        )
    }
}
