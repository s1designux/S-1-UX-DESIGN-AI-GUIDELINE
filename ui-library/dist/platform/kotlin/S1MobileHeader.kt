// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1MobileHeader — 정본 Mobile Header(AppBar 56)

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
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.requiredSize
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow

/**
 * 승인된 모바일 헤더. 유형 6종이 유일한 축이고, 유형마다 들어있는 슬롯이 다르다 —
 * 없는 슬롯에 값을 넘기면 그 값은 그려지지 않는다(유형이 슬롯을 정한다).
 *
 * 상태바는 부품에 없다. 안드로이드에서는 OS 가 그리는 영역이라 우리가 그리면 가짜가 된다
 * (웹 배포본과 같은 경계 — river 결정 D5).
 *
 * 쓸 수 있는 유형: home-title · home-title-subtitle · standard-title · standard-title-close · standard-no-title · standard-no-title-close
 */
@Composable
fun S1MobileHeader(
    variant: String = "home-title",
    modifier: Modifier = Modifier,
    title: String? = null,
    subtitle: String? = null,
    onBack: (() -> Unit)? = null,
    onClose: (() -> Unit)? = null,
    onNotification: (() -> Unit)? = null
) {
    require(S1MobileHeaderSpec.variants.contains(variant)) {
        "S1MobileHeader: 승인되지 않은 유형 \"$variant\". 쓸 수 있는 값: " + S1MobileHeaderSpec.variants.joinToString(" · ")
    }
    val has = { part: String -> S1MobileHeaderSpec.boxes[variant]?.containsKey(part) == true }
    val root = S1MobileHeaderSpec.box(variant, "root")
    Row(
        modifier = modifier.fillMaxWidth().s1Box(root),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(root.gapDp)
    ) {
        if (has("back")) {
            S1MobileHeaderAction(
                box = S1MobileHeaderSpec.box(variant, "back"),
                icon = S1MobileHeaderSpec.box(variant, "backIcon"),
                hit = S1MobileHeaderSpec.box(variant, "backHit"),
                onClick = onBack
            )
        }
        if (has("stack")) {
            val stack = S1MobileHeaderSpec.box(variant, "stack")
            val titleRow = S1MobileHeaderSpec.box(variant, "titleRow")
            val titleBox = S1MobileHeaderSpec.box(variant, "title")
            val subtitleBox = S1MobileHeaderSpec.box(variant, "subtitle")
            Column(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.spacedBy(stack.gapDp)
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(titleRow.gapDp)
                ) {
                    if (title != null) {
                        BasicText(
                            text = title,
                            style = s1TextStyle(titleBox),
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis,
                            modifier = Modifier.weight(1f, fill = false)
                        )
                    }
                    if (has("arrowIcon")) {
                        val arrow = S1MobileHeaderSpec.box(variant, "arrowIcon")
                        val arrowName = arrow.icon
                        if (arrowName != null) {
                            Image(
                                imageVector = S1Icons.byName(arrowName),
                                contentDescription = null,
                                modifier = Modifier
                                    .size((arrow.width ?: 0f).dp, (arrow.height ?: 0f).dp)
                                    .rotate(arrow.rotation ?: 0f),
                                colorFilter = ColorFilter.tint(arrow.background?.value() ?: Color.Unspecified)
                            )
                        }
                    }
                }
                if (subtitle != null) {
                    BasicText(
                        text = subtitle,
                        style = s1TextStyle(subtitleBox),
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                }
            }
        } else if (has("title")) {
            val titleBox = S1MobileHeaderSpec.box(variant, "title")
            Box(
                modifier = Modifier
                    .weight(1f)
                    .then(titleBox.height?.let { Modifier.height(it.dp) } ?: Modifier),
                contentAlignment = Alignment.Center
            ) {
                if (title != null) {
                    BasicText(
                        text = title,
                        style = s1TextStyle(titleBox).copy(
                            textAlign = if (variant.startsWith("home-")) TextAlign.Start else TextAlign.Center
                        ),
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                        modifier = Modifier.fillMaxWidth()
                    )
                }
            }
        }
        if (has("notification")) {
            S1MobileHeaderAction(
                box = S1MobileHeaderSpec.box(variant, "notification"),
                icon = S1MobileHeaderSpec.box(variant, "notificationIcon"),
                overlay = S1MobileHeaderSpec.box(variant, "notificationDot"),
                hit = S1MobileHeaderSpec.box(variant, "notificationHit"),
                onClick = onNotification
            )
        }
        if (has("close")) {
            S1MobileHeaderAction(
                box = S1MobileHeaderSpec.box(variant, "close"),
                icon = S1MobileHeaderSpec.box(variant, "closeIcon"),
                hit = S1MobileHeaderSpec.box(variant, "closeHit"),
                onClick = onClose
            )
        }
        if (has("spacer")) {
            val spacer = S1MobileHeaderSpec.box(variant, "spacer")
            Box(modifier = Modifier.size((spacer.width ?: 0f).dp, (spacer.height ?: 0f).dp))
        }
    }
}

/**
 * 뒤로·닫기·알림 — 보이는 크기는 32×32 한 벌이고, 알림만 위에 빨간 점 레이어가 겹친다.
 *
 * 눌리는 영역은 보이는 것보다 바깥으로 넓다(정본 44×44). 바깥 상자는 32 자리만 차지하고
 * 안쪽 상자가 requiredSize 로 그 제약을 벗어나 44 로 커진다 — 배치는 그대로고 손가락만 넓어진다
 * (웹이 ::before inset -6 으로 하는 것과 같은 결과).
 */
@Composable
private fun RowScope.S1MobileHeaderAction(
    box: S1Box,
    icon: S1Box,
    onClick: (() -> Unit)?,
    overlay: S1Box? = null,
    hit: S1Box? = null
) {
    val expand = -(hit?.left ?: 0f)
    val touchWidth = (box.width ?: 0f) + expand * 2
    val touchHeight = (box.height ?: 0f) + expand * 2
    Box(
        modifier = Modifier.size((box.width ?: 0f).dp, (box.height ?: 0f).dp),
        contentAlignment = Alignment.Center
    ) {
      Box(
        modifier = Modifier
            .requiredSize(touchWidth.dp, touchHeight.dp)
            .then(
                if (onClick != null) {
                    Modifier.clickable(
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        onClick = onClick
                    )
                } else {
                    Modifier
                }
            ),
        contentAlignment = Alignment.Center
    ) {
        val iconName = icon.icon
        if (iconName != null) {
            Image(
                imageVector = S1Icons.byName(iconName),
                contentDescription = null,
                modifier = Modifier.size((icon.width ?: 0f).dp, (icon.height ?: 0f).dp),
                colorFilter = ColorFilter.tint(icon.background?.value() ?: Color.Unspecified)
            )
        }
        val dotName = overlay?.icon
        if (overlay != null && dotName != null) {
            Image(
                imageVector = S1Icons.byName(dotName),
                contentDescription = null,
                modifier = Modifier.size((icon.width ?: 0f).dp, (icon.height ?: 0f).dp),
                colorFilter = ColorFilter.tint(overlay.background?.value() ?: Color.Unspecified)
            )
        }
      }
    }
}
