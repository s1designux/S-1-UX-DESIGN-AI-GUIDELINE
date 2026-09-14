// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1FilterChip — 정본 Filter Chip(트리거) + 목록은 S1Dropdown 재사용

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
 * 승인된 필터 칩. 목록은 별도 부품(S1Dropdown)을 그대로 쓰고 여기서는 배치·폭만 담당한다.
 * 제목(title)을 주면 "제목 값" 두 칸이 되고, 주지 않으면 값 한 칸이다 — 정본의 Title 축이 그것이다.
 * 고른 뒤의 complete 는 정본이 default 와 같은 면을 쓴다(값만 바뀐다).
 * 이 부품은 크기 md · 화면 mobile 한 벌뿐이라 고를 파라미터가 없다.
 */
@Composable
fun S1FilterChip(
    options: List<String>,
    selectedIndex: Int?,
    onSelect: (Int) -> Unit,
    modifier: Modifier = Modifier,
    title: String? = null,
    placeholder: String = "전체",
    variant: String = "line",    enabled: Boolean = true
) {
    var expanded by remember { mutableStateOf(false) }
    var triggerWidth by remember { mutableStateOf(0) }
    val interactionSource = remember { MutableInteractionSource() }
    val hovered by interactionSource.collectIsHoveredAsState()
    val state = when {
        !enabled -> "disabled"
        expanded -> "selected"
        selectedIndex != null -> "complete"
        hovered -> "hover"
        else -> "default"
    }
    val titleAxis = if (title != null) "on" else "off"
    val key = "$variant|md|mobile|$titleAxis|$state"
    val trigger = S1FilterChipSpec.box(key, "trigger")
    val valueBox = S1FilterChipSpec.box(key, "value")
    val icon = S1FilterChipSpec.box(key, "icon")
    val panel = S1FilterChipSpec.box(key, "panel")
    val density = LocalDensity.current
    Box(modifier = modifier) {
        Row(
            modifier = Modifier
                .onGloballyPositioned { triggerWidth = it.size.width }
                .s1Box(trigger, applyPadding = false)
                .clickable(
                    enabled = enabled,
                    interactionSource = interactionSource,
                    indication = null
                ) { expanded = !expanded }
                .s1Padding(trigger),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(trigger.gapDp)
        ) {
            if (title != null) {
                val titleBox = S1FilterChipSpec.box(key, "title")
                BasicText(
                    text = title,
                    style = s1TextStyle(trigger, titleBox.foreground ?: trigger.foreground),
                    maxLines = 1
                )
            }
            BasicText(
                text = selectedIndex?.let { options.getOrNull(it) } ?: placeholder,
                style = s1TextStyle(trigger, valueBox.foreground ?: trigger.foreground),
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
                    modifier = Modifier.width(with(density) { triggerWidth.toDp() })
                )
            }
        }
    }
}
