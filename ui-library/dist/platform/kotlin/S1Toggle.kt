// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Toggle — 정본 Toggle(트랙 40×20, 노브 16×16)

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
 * 승인된 토글. 정본에 크기·화면 축이 없어 PC 와 모바일이 같은 한 벌이고, Hover·모션 변형도 없다.
 * 노브 위치는 정본 값(꺼짐 왼쪽 2 · 켜짐 오른쪽 2)을 그대로 쓴다.
 */
@Composable
fun S1Toggle(
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
) {
    val state = when {
        !enabled && checked -> "disabledOn"
        !enabled -> "disabledOff"
        checked -> "on"
        else -> "off"
    }
    val track = S1ToggleSpec.box(state, "root")
    val knob = S1ToggleSpec.box(state, "knob")
    val inset = (knob.right ?: knob.left ?: 0f)
    Box(
        modifier = modifier
            .s1Box(track, applyPadding = false)
            .clickable(
                enabled = enabled,
                interactionSource = interactionSource,
                indication = null
            ) { onCheckedChange(!checked) }
    ) {
        Box(
            modifier = Modifier
                .align(if (knob.right != null) Alignment.CenterEnd else Alignment.CenterStart)
                .padding(horizontal = inset.dp)
                .size((knob.width ?: 0f).dp, (knob.height ?: 0f).dp)
                .background(knob.background?.value() ?: Color.Unspecified, knob.shape)
        )
    }
}
