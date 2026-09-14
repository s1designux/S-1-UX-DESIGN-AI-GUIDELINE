// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Dropdown — 정본 Dropdown(패널 + 옵션 행 · Text·Checkbox 유형)

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
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.ui.text.style.TextOverflow

/**
 * 승인된 목록. 정본에 화면 축이 없어 PC 와 모바일이 같은 한 벌이다.
 * 폭은 정본 규칙대로 최소 100 이고, 트리거가 있는 소비자(S1Select)가 자기 폭을 넘겨준다.
 * 긴 옵션은 줄바꿈하지 않고 말줄임으로 자른다(river 결정 2026-09-07).
 */
@Composable
fun S1Dropdown(
    options: List<String>,
    selectedIndices: Set<Int>,
    onOptionClick: (Int) -> Unit,
    modifier: Modifier = Modifier,
    type: String = "text",
    size: String = "xxsm",
    selectAllLabel: String? = null,
    selectAllChecked: Boolean = false,
    onSelectAll: (() -> Unit)? = null
) {
    val root = S1DropdownSpec.box("$type|$size|default", "root")
    Column(modifier = modifier.s1Box(root)) {
        if (selectAllLabel != null && onSelectAll != null) {
            S1DropdownOption(
                label = selectAllLabel,
                selected = selectAllChecked,
                type = type,
                size = size,
                selectAll = true,
                onClick = onSelectAll
            )
            val divider = S1DropdownSpec.box("$type|$size|default", "divider")
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height((divider.height ?: 0f).dp)
                    .background(divider.background?.value() ?: Color.Unspecified)
            )
        }
        options.forEachIndexed { index, label ->
            S1DropdownOption(
                label = label,
                selected = selectedIndices.contains(index),
                type = type,
                size = size,
                selectAll = false,
                onClick = { onOptionClick(index) }
            )
        }
    }
}

@Composable
private fun ColumnScope.S1DropdownOption(
    label: String,
    selected: Boolean,
    type: String,
    size: String,
    selectAll: Boolean,
    onClick: () -> Unit
) {
    val interactionSource = remember { MutableInteractionSource() }
    val hovered by interactionSource.collectIsHoveredAsState()
    val state = when {
        hovered -> "hover"
        selected -> "selected"
        else -> "default"
    }
    val key = "$type|$size|$state"
    val option = S1DropdownSpec.box(key, if (selectAll) "selectAll" else "option")
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .s1Box(option, applyPadding = false)
            .clickable(
                interactionSource = interactionSource,
                indication = null,
                onClick = onClick
            )
            .s1Padding(option),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(option.gapDp)
    ) {
        if (type == "checkbox") {
            S1Checkbox(checked = selected, onCheckedChange = null)
        }
        BasicText(
            text = label,
            style = s1TextStyle(option),
            maxLines = 1,
            overflow = TextOverflow.Ellipsis
        )
    }
}
