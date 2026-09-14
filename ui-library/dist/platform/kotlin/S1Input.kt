// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Input — 정본 Base Input + 비밀번호 · 검색 조립

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
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation

/**
 * 승인된 입력칸. 비밀번호·검색은 별도 부품이 아니라 이 입력칸을 조립한 것이다(river D1, 2026-09-04).
 * 이 부품은 크기 md · 화면 mobile · 변형 base 한 벌뿐이라 고를 파라미터가 없다.
 * 상태는 화면이 정하지 않고 값·초점·플래그에서 정해진다 — 정본 CSS 의 우선순위와 같은 순서다.
 */
@Composable
fun S1Input(
    value: String,
    onValueChange: (String) -> Unit,
    modifier: Modifier = Modifier,
    label: String? = null,
    placeholder: String? = null,
    message: String? = null,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    isError: Boolean = false,
    isCorrect: Boolean = false,
    mode: String = "text",
    onSearch: (() -> Unit)? = null
) {
    val interactionSource = remember { MutableInteractionSource() }
    val focused by interactionSource.collectIsFocusedAsState()
    var passwordVisible by remember { mutableStateOf(false) }
    val state = when {
        !enabled -> "disabled"
        readOnly -> "readOnly"
        isError -> "error"
        isCorrect -> "correct"
        focused -> "focus"
        else -> "default"
    }
    val key = "md|mobile|$state"
    val root = S1InputSpec.box(key, "root")
    val labelBox = S1InputSpec.box(key, "label")
    val field = S1InputSpec.box(key, "field")
    val control = S1InputSpec.box(key, "control")
    val placeholderBox = S1InputSpec.box(key, "placeholder")
    val messageBox = S1InputSpec.box(key, "message")
    Column(
        modifier = modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(root.gapDp)
    ) {
        if (label != null) BasicText(text = label, style = s1TextStyle(labelBox))
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .s1Box(field, applyPadding = false)
                .s1Padding(field),
            verticalAlignment = Alignment.CenterVertically
        ) {
            BasicTextField(
                value = value,
                onValueChange = onValueChange,
                modifier = Modifier.weight(1f),
                enabled = enabled,
                readOnly = readOnly,
                singleLine = true,
                textStyle = s1TextStyle(control),
                cursorBrush = SolidColor(control.foreground?.value() ?: Color.Unspecified),
                interactionSource = interactionSource,
                visualTransformation = if (mode == "password" && !passwordVisible) {
                    PasswordVisualTransformation()
                } else {
                    VisualTransformation.None
                },
                decorationBox = { inner ->
                    Box(contentAlignment = Alignment.CenterStart) {
                        if (value.isEmpty() && placeholder != null) {
                            BasicText(
                                text = placeholder,
                                style = s1TextStyle(control, color = placeholderBox.foreground),
                                maxLines = 1
                            )
                        }
                        inner()
                    }
                }
            )
            var first = true
            if (value.isNotEmpty()) {
                S1InputAction("clear", "md", state, first) { onValueChange("") }
                first = false
            }
            if (mode == "password") {
                S1InputAction(
                    if (passwordVisible) "password-pressed" else "password",
                    "md", state, first
                ) { passwordVisible = !passwordVisible }
                first = false
            }
            if (mode == "search") {
                S1InputAction("search", "md", state, first) { onSearch?.invoke() }
                first = false
            }
        }
        if (message != null) BasicText(text = message, style = s1TextStyle(messageBox))
    }
}

@Composable
private fun S1InputAction(
    action: String,
    size: String,
    inputState: String,
    first: Boolean,
    onClick: () -> Unit
) {
    val interactionSource = remember { MutableInteractionSource() }
    val hovered by interactionSource.collectIsHoveredAsState()
    val state = when {
        inputState == "disabled" -> "disabled"
        hovered -> "hover"
        else -> "default"
    }
    val key = "$size|mobile|$action|$state"
    val box = S1InputSpec.inputActionsBox(key, "action")
    val icon = S1InputSpec.inputActionsBox(key, "icon")
    val iconName = icon.icon ?: return
    Box(
        modifier = Modifier
            .padding(start = if (first) 0.dp else box.marginStart.dp)
            .s1Box(box, applyPadding = false)
            .clickable(
                enabled = inputState != "disabled",
                interactionSource = interactionSource,
                indication = null,
                onClick = onClick
            ),
        contentAlignment = Alignment.Center
    ) {
        Image(
            imageVector = S1Icons.byName(iconName),
            contentDescription = null,
            modifier = Modifier.size((icon.width ?: 0f).dp, (icon.height ?: 0f).dp),
            colorFilter = ColorFilter.tint(box.foreground?.value() ?: Color.Unspecified)
        )
    }
}
