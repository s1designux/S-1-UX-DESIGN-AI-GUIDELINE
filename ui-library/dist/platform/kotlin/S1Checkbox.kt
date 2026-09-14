// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Checkbox — 정본 Checkbox(18×18, check 16×16)

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
import androidx.compose.foundation.Image
import androidx.compose.ui.graphics.ColorFilter

/**
 * 승인된 체크박스. 정본에 크기·화면 축이 없어 PC 와 모바일이 같은 한 벌이다.
 * 라벨은 선택 부품이라 없으면 상자만 남는다. 선택 표시 색은 상자의 글자색을 따라간다(정본 currentColor).
 */
@Composable
fun S1Checkbox(
    checked: Boolean,
    onCheckedChange: ((Boolean) -> Unit)?,
    modifier: Modifier = Modifier,
    label: String? = null,
    enabled: Boolean = true,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
) {
    val hovered by interactionSource.collectIsHoveredAsState()
    val state = when {
        !enabled && checked -> "disabledChecked"
        !enabled -> "disabled"
        checked -> "checked"
        hovered -> "hover"
        else -> "default"
    }
    val root = S1CheckboxSpec.box(state, "root")
    val control = S1CheckboxSpec.box(state, "control")
    val indicator = S1CheckboxSpec.box(state, "indicator")
    val labelBox = S1CheckboxSpec.box(state, "label")
    Row(
        modifier = modifier.then(
            if (onCheckedChange != null) {
                Modifier.clickable(
                    enabled = enabled,
                    interactionSource = interactionSource,
                    indication = null
                ) { onCheckedChange(!checked) }
            } else {
                Modifier
            }
        ),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(root.gapDp)
    ) {
        Box(modifier = Modifier.s1Box(control), contentAlignment = Alignment.Center) {
            if (checked) {
                val tint = control.foreground?.value() ?: Color.Unspecified
                val markWidth = indicator.width ?: 0f
                val markHeight = indicator.height ?: 0f
                val markName = indicator.icon
                if (markName != null) {
                    Image(
                        imageVector = S1Icons.byName(markName),
                        contentDescription = null,
                        modifier = Modifier.size(markWidth.dp, markHeight.dp),
                        colorFilter = ColorFilter.tint(tint)
                    )
                } else {
                    Box(
                        modifier = Modifier
                            .size(markWidth.dp, markHeight.dp)
                            .background(tint, indicator.shape)
                    )
                }
            }
        }
        if (label != null) BasicText(text = label, style = s1TextStyle(labelBox))
    }
}
