// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Select — 정본 Select Box(트리거 5상태) + 목록은 S1Dropdown 재사용

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
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.window.Popup

/**
 * 승인된 셀렉트 박스. 목록은 별도 부품(S1Dropdown)을 그대로 쓰고, 여기서는 배치와 폭만 담당한다 —
 * 웹 배포본에서 select.css 가 dropdown.css 를 복제하지 않는 것과 같은 구조다.
 * 이 부품은 크기 md · 화면 mobile · 변형 base 한 벌뿐이라 고를 파라미터가 없다.
 */
@Composable
fun S1Select(
    options: List<String>,
    selectedIndex: Int?,
    onSelect: (Int) -> Unit,
    modifier: Modifier = Modifier,
    placeholder: String = "선택",
    enabled: Boolean = true
) {
    var expanded by remember { mutableStateOf(false) }
    var triggerWidth by remember { mutableStateOf(0) }
    val interactionSource = remember { MutableInteractionSource() }
    val hovered by interactionSource.collectIsHoveredAsState()
    val state = when {
        !enabled -> "disabled"
        expanded -> "open"
        selectedIndex != null -> "filled"
        hovered -> "hover"
        else -> "default"
    }
    val key = "md|mobile|$state"
    val trigger = S1SelectSpec.box(key, "trigger")
    val icon = S1SelectSpec.box(key, "icon")
    val panel = S1SelectSpec.box(key, "panel")
    val density = LocalDensity.current
    Box(modifier = modifier) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .onGloballyPositioned { triggerWidth = it.size.width }
                .s1Box(trigger, applyPadding = false)
                .clickable(
                    enabled = enabled,
                    interactionSource = interactionSource,
                    indication = null
                ) { expanded = !expanded }
                .s1Padding(trigger),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            BasicText(
                text = selectedIndex?.let { options.getOrNull(it) } ?: placeholder,
                style = s1TextStyle(trigger),
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
                modifier = Modifier.weight(1f, fill = false)
            )
            val iconName = icon.icon
            if (iconName != null) {
                Image(
                    imageVector = S1Icons.byName(iconName),
                    contentDescription = null,
                    modifier = Modifier
                        .size((icon.width ?: 0f).dp, (icon.height ?: 0f).dp)
                        .rotate(icon.rotation ?: 0f),
                    colorFilter = ColorFilter.tint(icon.background?.value() ?: Color.Unspecified)
                )
            }
        }
        if (expanded) {
            val offsetY = with(density) { ((trigger.height ?: 0f) + panel.marginTop).dp.roundToPx() }
            Popup(
                alignment = Alignment.TopStart,
                offset = IntOffset(0, offsetY),
                onDismissRequest = { expanded = false }
            ) {
                S1Dropdown(
                    options = options,
                    selectedIndices = selectedIndex?.let { setOf(it) } ?: emptySet(),
                    onOptionClick = { index ->
                        onSelect(index)
                        expanded = false
                    },
                    modifier = Modifier.width(with(density) { triggerWidth.toDp() }),
                    type = "text",
                    size = "md"
                )
            }
        }
    }
}
