// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1BottomSheetOption — 정본 Bottom Sheet Option(Text · Checkbox · Radio · List)

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
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.ui.graphics.ColorFilter

/**
 * 승인된 시트 옵션 한 줄. 유형이 줄의 모양을 정하고, 상태는 선택 · 비활성(둘 다 아니면 기본)이다.
 * 정본에 없는 칸은 만들지 않는다 — Checkbox·Radio 에는 비활성이, List 에는 선택이 없어서
 * 그 조합을 넘기면 쓸 수 있는 조합을 알려 주며 멈춘다.
 *
 *   · type      text · checkbox · radio · list
 *   · selected  text 는 글자색이 바뀌고 체크 표시가 붙는다 / checkbox·radio 는 안쪽 부품이 선택 모양이 된다
 *   · enabled   false 면 비활성(text · list)
 *
 * checkbox·radio 줄 안의 부품은 승인된 S1Checkbox·S1Radio 를 그대로 쓴다. 줄 전체가 눌리는 자리다.
 * list 줄은 왼쪽에 동그란 자리(아바타)와 두 줄 글자, 오른쪽에 화살표(비활성이면 자물쇠)를 둔다.
 */
@Composable
fun S1BottomSheetOption(
    label: String,
    modifier: Modifier = Modifier,
    type: String = "text",
    selected: Boolean = false,
    enabled: Boolean = true,
    subtitle: String? = null,
    onClick: (() -> Unit)? = null
) {
    val state = when {
        !enabled -> "disabled"
        selected -> "selected"
        else -> "default"
    }
    val key = "${type}|${state}"
    val root = S1BottomSheetOptionSpec.box(key, "root")
    val clickable = if (onClick != null && enabled) {
        Modifier.clickable(
            interactionSource = remember { MutableInteractionSource() },
            indication = null,
            onClick = onClick
        )
    } else {
        Modifier
    }
    Row(
        modifier = modifier
            .fillMaxWidth()
            .s1Box(root, applyPadding = false)
            .then(clickable)
            .s1Padding(root),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = if (root.spaceBetween) Arrangement.SpaceBetween else Arrangement.spacedBy(root.gapDp)
    ) {
        when (type) {
            "text" -> {
                BasicText(text = label, style = s1TextStyle(S1BottomSheetOptionSpec.box(key, "label")))
                val check = if (selected) S1BottomSheetOptionSpec.box(key, "check") else null
                val checkName = check?.icon
                if (check != null && checkName != null) {
                    Image(
                        imageVector = S1Icons.byName(checkName),
                        contentDescription = null,
                        modifier = Modifier.size((check.width ?: 0f).dp, (check.height ?: 0f).dp),
                        colorFilter = ColorFilter.tint(check.background?.value() ?: Color.Unspecified)
                    )
                }
            }
            "checkbox" -> {
                S1Checkbox(checked = selected, onCheckedChange = null, enabled = enabled)
                BasicText(text = label, style = s1TextStyle(S1BottomSheetOptionSpec.box(key, "label")))
            }
            "radio" -> {
                S1Radio(selected = selected, onClick = null, enabled = enabled)
                BasicText(text = label, style = s1TextStyle(S1BottomSheetOptionSpec.box(key, "label")))
            }
            "list" -> {
                val left = S1BottomSheetOptionSpec.box(key, "listLeft")
                val avatar = S1BottomSheetOptionSpec.box(key, "avatar")
                val avatarIcon = S1BottomSheetOptionSpec.box(key, "avatarIcon")
                val textColumn = S1BottomSheetOptionSpec.box(key, "listText")
                Row(
                    modifier = Modifier.weight(1f),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(left.gapDp)
                ) {
                    Box(modifier = Modifier.s1Box(avatar), contentAlignment = Alignment.Center) {
                        val avatarName = avatarIcon.icon
                        if (avatarName != null) {
                            Image(
                                imageVector = S1Icons.byName(avatarName),
                                contentDescription = null,
                                modifier = Modifier.size((avatarIcon.width ?: 0f).dp, (avatarIcon.height ?: 0f).dp),
                                colorFilter = ColorFilter.tint(avatarIcon.background?.value() ?: Color.Unspecified)
                            )
                        }
                    }
                    Column(
                        modifier = Modifier.weight(1f),
                        verticalArrangement = Arrangement.spacedBy(textColumn.gapDp)
                    ) {
                        BasicText(text = label, style = s1TextStyle(S1BottomSheetOptionSpec.box(key, "listTitle")))
                        if (subtitle != null) {
                            BasicText(text = subtitle, style = s1TextStyle(S1BottomSheetOptionSpec.box(key, "listSub")))
                        }
                    }
                }
                val trailing = S1BottomSheetOptionSpec.box(key, if (enabled) "chevron" else "lock")
                val trailingName = trailing.icon
                if (trailingName != null) {
                    Image(
                        imageVector = S1Icons.byName(trailingName),
                        contentDescription = null,
                        modifier = Modifier.size((trailing.width ?: 0f).dp, (trailing.height ?: 0f).dp),
                        colorFilter = ColorFilter.tint(trailing.background?.value() ?: Color.Unspecified)
                    )
                }
            }
            else -> error("[s1] bottom-sheet-option: 승인되지 않은 유형 \"${type}\". 쓸 수 있는 값: ${S1BottomSheetOptionSpec.variants.joinToString(" · ")}")
        }
    }
}
