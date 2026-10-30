// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1BottomSheet — 정본 Bottom Sheet(Footer None · Single · Dual)

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
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.Image
import androidx.compose.foundation.hoverable
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.requiredSize
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties

/**
 * 승인된 바텀 시트. 화면 아래에 붙어 올라오고, 딤(바깥)을 누르거나 닫기 버튼을 누르면 닫힌다.
 * 모바일 한 벌뿐이라 고를 것은 푸터(버튼 없음 / 하나 / 둘)이고, 푸터는 넘긴 라벨로 정해진다.
 *
 *   · primaryLabel 이 없으면 푸터 없음
 *   · primaryLabel 만 있으면 버튼 하나(primary)
 *   · secondaryLabel 도 있으면 버튼 둘(secondary + primary)
 *
 * 본문(content)은 화면이 채운다 — 보통 S1BottomSheetOption 줄들이다. 본문이 길면 시트 안에서 스크롤된다.
 */
@Composable
fun S1BottomSheet(
    title: String,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier,
    primaryLabel: String? = null,
    onPrimary: () -> Unit = onDismissRequest,
    secondaryLabel: String? = null,
    onSecondary: () -> Unit = onDismissRequest,
    content: @Composable ColumnScope.() -> Unit
) {
    Dialog(
        onDismissRequest = onDismissRequest,
        properties = DialogProperties(usePlatformDefaultWidth = false)
    ) {
        S1BottomSheetPanel(
            title = title,
            onDismissRequest = onDismissRequest,
            modifier = modifier,
            primaryLabel = primaryLabel,
            onPrimary = onPrimary,
            secondaryLabel = secondaryLabel,
            onSecondary = onSecondary,
            content = content
        )
    }
}

/** 딤과 패널만 그린다 — 미리보기 화면처럼 대화상자 없이 보여줄 때 쓴다. */
@Composable
fun S1BottomSheetPanel(
    title: String,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier,
    primaryLabel: String? = null,
    onPrimary: () -> Unit = onDismissRequest,
    secondaryLabel: String? = null,
    onSecondary: () -> Unit = onDismissRequest,
    content: @Composable ColumnScope.() -> Unit
) {
    require(primaryLabel != null || secondaryLabel == null) {
        "S1BottomSheet: 버튼이 하나뿐이면 secondaryLabel 이 아니라 primaryLabel 에 넘기세요."
    }
    val footerKind = when {
        primaryLabel == null -> "none"
        secondaryLabel == null -> "single"
        else -> "dual"
    }
    val backdrop = S1BottomSheetSpec.box(footerKind, "backdrop")
    val panel = S1BottomSheetSpec.box(footerKind, "panel")
    val contentBox = S1BottomSheetSpec.box(footerKind, "content")
    val headerBox = S1BottomSheetSpec.box(footerKind, "header")
    val titleBox = S1BottomSheetSpec.box(footerKind, "title")
    val close = S1BottomSheetSpec.box(footerKind, "close")
    S1SheetFrame(backdrop, panel, onDismissRequest, modifier) {
        Column(
            modifier = Modifier.weight(1f, fill = false),
            verticalArrangement = Arrangement.spacedBy(contentBox.gapDp)
        ) {
            S1SheetHeader(title, headerBox, titleBox, close, onDismissRequest)
            Column(
                modifier = Modifier
                    .weight(1f, fill = false)
                    .verticalScroll(rememberScrollState()),
                content = content
            )
        }
        if (primaryLabel != null) {
            S1SheetFooter(S1BottomSheetSpec.box(footerKind, "footer")) {
                if (secondaryLabel != null) {
                    S1Button(text = secondaryLabel, onClick = onSecondary, modifier = Modifier.weight(1f), variant = "secondary")
                }
                S1Button(text = primaryLabel, onClick = onPrimary, modifier = Modifier.weight(1f), variant = "primary")
            }
        }
    }
}

/**
 * 시트 껍데기 — 딤 + 화면 아래에 붙은 패널. 바텀 시트·날짜 선택·시간 선택 시트가 같이 쓴다.
 * 패널의 높이 상한(화면의 몇 %)과 폭 상한은 표에서 읽는다. 패널 안을 누르는 것은 딤으로 새지 않는다.
 */
@Composable
internal fun S1SheetFrame(
    backdrop: S1Box,
    panel: S1Box,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier,
    content: @Composable ColumnScope.() -> Unit
) {
    BoxWithConstraints(
        modifier = modifier
            .fillMaxSize()
            .background(backdrop.background?.value() ?: Color.Transparent)
            .clickable(
                interactionSource = remember { MutableInteractionSource() },
                indication = null,
                onClick = onDismissRequest
            ),
        contentAlignment = Alignment.BottomCenter
    ) {
        val maxPanelHeight: Dp = panel.maxHeightVh?.let { maxHeight * (it / 100f) } ?: Dp.Unspecified
        Column(
            modifier = Modifier
                .then(panel.maxWidth?.let { Modifier.widthIn(max = it.dp) } ?: Modifier)
                .fillMaxWidth()
                .heightIn(max = maxPanelHeight)
                .s1Box(panel, applySize = false, applyPadding = false)
                .clickable(
                    interactionSource = remember { MutableInteractionSource() },
                    indication = null,
                    onClick = {}
                )
                .s1Padding(panel),
            verticalArrangement = Arrangement.spacedBy(panel.gapDp),
            content = content
        )
    }
}

/** 시트 머리줄 — 제목과 닫기 아이콘. */
@Composable
internal fun S1SheetHeader(title: String, header: S1Box, titleBox: S1Box, close: S1Box, onClose: () -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .s1Padding(header),
        horizontalArrangement = if (header.spaceBetween) Arrangement.SpaceBetween else Arrangement.spacedBy(header.gapDp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        BasicText(text = title, style = s1TextStyle(titleBox), modifier = Modifier.weight(1f))
        val iconName = close.icon
        if (iconName != null) {
            Image(
                imageVector = S1Icons.byName(iconName),
                contentDescription = "닫기",
                modifier = Modifier
                    .size((close.width ?: 0f).dp, (close.height ?: 0f).dp)
                    .clickable(
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        onClick = onClose
                    ),
                colorFilter = ColorFilter.tint(close.background?.value() ?: Color.Unspecified)
            )
        }
    }
}

/** 시트 푸터 — 버튼이 폭을 나눠 갖는다(정본 flex 1 1 0). */
@Composable
internal fun S1SheetFooter(footer: S1Box, content: @Composable RowScope.() -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .s1Padding(footer),
        horizontalArrangement = Arrangement.spacedBy(footer.gapDp),
        content = content
    )
}
