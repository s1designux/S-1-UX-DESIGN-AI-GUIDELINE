// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Textarea — 정본 Textarea(최소 높이 80, 상태 4가지)

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
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.graphics.SolidColor

/**
 * 승인된 여러 줄 입력. 정본에 크기 축이 없어 한 벌뿐이고, 글자수·도움말·라벨은 이 부품이 아니다
 * (필요하면 화면이 따로 조합한다 — 웹 배포본과 같은 경계).
 * 값이 들어찬 상태(filled)는 따로 그리는 면이 없다 — 정본이 default 와 같은 면을 쓴다.
 */
@Composable
fun S1Textarea(
    value: String,
    onValueChange: (String) -> Unit,
    modifier: Modifier = Modifier,
    placeholder: String? = null,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
) {
    var focused by remember { mutableStateOf(false) }
    val state = when {
        !enabled -> "disabled"
        readOnly -> "readOnly"
        focused -> "focus"
        else -> "default"
    }
    val control = S1TextareaSpec.box(state, "control")
    val hint = S1TextareaSpec.box(state, "placeholder")
    BasicTextField(
        value = value,
        onValueChange = onValueChange,
        enabled = enabled,
        readOnly = readOnly,
        textStyle = s1TextStyle(control),
        cursorBrush = SolidColor(control.foreground?.value() ?: Color.Unspecified),
        interactionSource = interactionSource,
        modifier = modifier
            .fillMaxWidth()
            .s1Box(control, applyPadding = false)
            .onFocusChanged { focused = it.isFocused }
            .s1Padding(control),
        decorationBox = { inner ->
            Box(modifier = Modifier.fillMaxWidth()) {
                if (value.isEmpty() && placeholder != null) {
                    BasicText(text = placeholder, style = s1TextStyle(control, hint.foreground))
                }
                inner()
            }
        }
    )
}
