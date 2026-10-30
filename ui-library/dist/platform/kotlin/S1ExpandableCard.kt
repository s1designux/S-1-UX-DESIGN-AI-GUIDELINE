// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1ExpandableCard — 정본 Expandable Card(모바일 한 유형)

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
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.animation.expandVertically
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.shrinkVertically
import androidx.compose.foundation.Image
import androidx.compose.foundation.hoverable
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.graphicsLayer

/** 접힘 카드 한 자리의 글자 다섯 가지 — 비워 두면 그 줄은 그리지 않는다. */
data class S1CardTexts(
    val title: String? = null,
    val subtitle: String? = null,
    val body: String? = null,
    val note: String? = null,
    val caption: String? = null
)

/**
 * 승인된 접힘 카드. 머리줄을 누르면 펼침칸이 열리고 닫힌다.
 * 상태는 닫힘 · 열림 · 머리줄 hover(열려 있을 때는 기본색 유지) 세 가지이고,
 * 펼침칸이 열리고 닫히는 시간·화살표가 도는 시간은 정본 전환 값을 그대로 쓴다.
 *
 * 열림 여부는 화면이 쥔다(expanded) — 부품은 누른 사실만 알린다.
 */
@Composable
fun S1ExpandableCard(
    expanded: Boolean,
    onExpandedChange: (Boolean) -> Unit,
    header: S1CardTexts,
    panel: S1CardTexts,
    modifier: Modifier = Modifier
) {
    val source = remember { MutableInteractionSource() }
    val hovered by source.collectIsHoveredAsState()
    val state = when {
        expanded -> "open"
        hovered -> "hover"
        else -> "closed"
    }
    val root = S1ExpandableCardSpec.box(state, "root")
    val headerBox = S1ExpandableCardSpec.box(state, "header")
    val textBox = S1ExpandableCardSpec.box(state, "text")
    val iconBox = S1ExpandableCardSpec.box(state, "toggleIcon")
    val wrap = S1ExpandableCardSpec.box(state, "panelWrap")
    /* 펼침칸은 열렸을 때의 안쪽 여백으로 그린다 — 닫힘 값은 접혀 숨는 동안의 값이다. */
    val panelBox = S1ExpandableCardSpec.box("open", "panel")
    val rotation by animateFloatAsState(iconBox.rotation ?: 0f, tween(iconBox.durationMs ?: 0), label = "s1-card-rotation")
    val flip by animateFloatAsState(iconBox.scaleX ?: 1f, tween(iconBox.durationMs ?: 0), label = "s1-card-flip")
    val openDuration = wrap.durationMs ?: 0

    Column(modifier = modifier.fillMaxWidth().s1Box(root, applyPadding = false)) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .s1Box(headerBox, applyPadding = false)
                .hoverable(source)
                .clickable(interactionSource = source, indication = null) { onExpandedChange(!expanded) }
                .s1Padding(headerBox),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(headerBox.gapDp)
        ) {
            Column(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.spacedBy(textBox.gapDp)
            ) {
                S1CardTextLines(header, state, prefix = "")
            }
            val iconName = iconBox.icon
            if (iconName != null) {
                Image(
                    imageVector = S1Icons.byName(iconName),
                    contentDescription = null,
                    modifier = Modifier
                        .size((iconBox.width ?: 0f).dp, (iconBox.height ?: 0f).dp)
                        .graphicsLayer { rotationZ = rotation; scaleX = flip },
                    colorFilter = ColorFilter.tint(iconBox.background?.value() ?: Color.Unspecified)
                )
            }
        }
        AnimatedVisibility(
            visible = expanded,
            enter = expandVertically(tween(openDuration)) + fadeIn(tween(openDuration)),
            exit = shrinkVertically(tween(openDuration)) + fadeOut(tween(openDuration))
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .s1Box(panelBox),
                verticalArrangement = Arrangement.spacedBy(panelBox.gapDp)
            ) {
                S1CardTextLines(panel, "open", prefix = "panel")
            }
        }
    }
}

@Composable
private fun S1CardTextLines(texts: S1CardTexts, state: String, prefix: String) {
    val lines = listOf(
        "title" to texts.title,
        "subtitle" to texts.subtitle,
        "body" to texts.body,
        "note" to texts.note,
        "caption" to texts.caption
    )
    for ((name, text) in lines) {
        if (text == null) continue
        val part = if (prefix.isEmpty()) name else prefix + name.replaceFirstChar { it.uppercase() }
        val box = S1ExpandableCardSpec.box(state, part)
        BasicText(
            text = text,
            style = s1TextStyle(box),
            modifier = Modifier.then(box.minHeight?.let { Modifier.defaultMinSize(minHeight = it.dp) } ?: Modifier)
        )
    }
}
