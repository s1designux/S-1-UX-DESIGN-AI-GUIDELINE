// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1TimePicker — 정본 Time Picker(모바일: 트리거 + 휠 바텀 시트)

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
import androidx.compose.foundation.gestures.snapping.rememberSnapFlingBehavior
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.ui.graphics.Brush
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.platform.LocalDensity
import kotlinx.coroutines.launch

/** 시각 하나 — hour 는 0~23 이다(12시간제 표기는 화면에 그릴 때만 바꾼다). */
data class S1Time(val hour: Int, val minute: Int)

/** 트리거에 보이는 표기 — 12시간제는 "오후 3:05", 24시간제는 "15:05". */
fun s1FormatTime(time: S1Time, is24Hour: Boolean): String {
    if (is24Hour) return String.format("%02d:%02d", time.hour, time.minute)
    val hour12 = if (time.hour % 12 == 0) 12 else time.hour % 12
    return (if (time.hour < 12) "오전" else "오후") + " " + hour12 + ":" + String.format("%02d", time.minute)
}

/**
 * 승인된 시간 선택. 트리거를 누르면 휠 바텀 시트가 올라온다.
 * 휠을 돌려 가운데에 온 값이 선택값이고, 적용 버튼을 눌러야 값이 정해진다(정본 동작).
 * 값이 아직 없으면 휠은 지금 시각에 맞춰 열린다.
 *
 *   · is24Hour    false = 오전/오후 + 1~12시 · true = 00~23시
 *   · minuteStep  분 눈금 간격(기본 1분)
 *   · dateContent 넘기면 시트 위에 날짜·시간 탭이 생기고 날짜 탭에서 이 내용을 보여 준다
 *                 (날짜 고르기는 S1DatePicker 쪽 몫이다 — 이 부품은 탭 전환만 맡는다)
 */
@Composable
fun S1TimePicker(
    value: S1Time?,
    onValueChange: (S1Time) -> Unit,
    modifier: Modifier = Modifier,
    placeholder: String = "시간 선택",
    title: String = "시간 선택",
    applyLabel: String = "적용",
    is24Hour: Boolean = false,
    minuteStep: Int = 1,
    dateContent: (@Composable () -> Unit)? = null,
    enabled: Boolean = true
) {
    var open by remember { mutableStateOf(false) }
    S1PickerTrigger(
        text = value?.let { s1FormatTime(it, is24Hour) } ?: placeholder,
        filled = value != null,
        expanded = open,
        expandedState = "focus",
        enabled = enabled,
        onClick = { open = true },
        modifier = modifier,
        boxOf = { state, part -> S1TimePickerSpec.box("md|mobile|${state}", part) }
    )
    if (open) {
        Dialog(onDismissRequest = { open = false }, properties = DialogProperties(usePlatformDefaultWidth = false)) {
            S1TimePickerSheet(
                value = value,
                onApply = { onValueChange(it); open = false },
                onDismissRequest = { open = false },
                title = title,
                applyLabel = applyLabel,
                is24Hour = is24Hour,
                minuteStep = minuteStep,
                dateContent = dateContent
            )
        }
    }
}

/** 시트만 그린다 — 미리보기 화면처럼 대화상자 없이 보여줄 때 쓴다. */
@Composable
fun S1TimePickerSheet(
    value: S1Time?,
    onApply: (S1Time) -> Unit,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier,
    title: String = "시간 선택",
    applyLabel: String = "적용",
    is24Hour: Boolean = false,
    minuteStep: Int = 1,
    dateContent: (@Composable () -> Unit)? = null
) {
    require(minuteStep in 1..59) { "S1TimePicker: minuteStep 은 1~59 여야 합니다(받은 값 ${minuteStep})." }
    val content = if (dateContent == null) "time-only" else "date-time"
    val type = if (is24Hour) "24h" else "12h"
    val sheet = { part: String -> S1TimePickerSpec.sheetBox(content, part) }
    val wheelBox = { part: String -> S1TimePickerSpec.wheelBox(type, part) }

    val hours = if (is24Hour) (0..23).map { String.format("%02d", it) } else (1..12).map { it.toString() }
    val minutes = (0 until 60 step minuteStep).map { String.format("%02d", it) }
    val ampm = listOf("오전", "오후")

    /* 처음 열릴 때 가운데에 놓을 값 — 고른 값이 있으면 그 값, 없으면 지금 시각(분은 눈금에 내림). */
    val seed = value ?: S1Time(
        java.util.Calendar.getInstance().get(java.util.Calendar.HOUR_OF_DAY),
        java.util.Calendar.getInstance().get(java.util.Calendar.MINUTE)
    )
    var ampmIndex by remember { mutableStateOf(if (seed.hour < 12) 0 else 1) }
    var hourIndex by remember {
        mutableStateOf(if (is24Hour) seed.hour else (if (seed.hour % 12 == 0) 12 else seed.hour % 12) - 1)
    }
    var minuteIndex by remember { mutableStateOf((seed.minute / minuteStep).coerceAtMost(minutes.size - 1)) }
    var tab by remember { mutableStateOf(1) }

    S1SheetFrame(
        backdrop = sheet("backdrop"),
        panel = sheet("panel"),
        onDismissRequest = onDismissRequest,
        modifier = modifier
    ) {
        S1SheetHeader(title, sheet("header"), sheet("title"), sheet("close"), onDismissRequest)
        if (dateContent != null) {
            Box(modifier = Modifier.fillMaxWidth().s1Padding(sheet("tabs"))) {
                S1TabRow(
                    tabs = listOf("날짜", "시간"),
                    selectedIndex = tab,
                    onSelect = { tab = it },
                    modifier = Modifier.fillMaxWidth()
                )
            }
        }
        if (dateContent != null && tab == 0) {
            Box(modifier = Modifier.fillMaxWidth().s1Padding(sheet("datePanel"))) { dateContent() }
        } else {
            val wheel = wheelBox("wheel")
            val dark = LocalS1Dark.current
            val fadeTop = wheelBox("fadeTop")
            val fadeBottom = wheelBox("fadeBottom")
            val clear = Brush.verticalGradient(listOf(Color.Transparent, Color.Transparent))
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height((wheel.height ?: 0f).dp)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxSize()
                        .s1Padding(wheel),
                    horizontalArrangement = Arrangement.spacedBy(wheel.gapDp, Alignment.CenterHorizontally)
                ) {
                    if (!is24Hour) {
                        S1WheelColumn(ampm, ampmIndex, { ampmIndex = it }, wheelBox("colAmpm"), wheelBox("cell"))
                    }
                    S1WheelColumn(
                        hours, hourIndex, { hourIndex = it }, wheelBox("colHour"), wheelBox("cell"),
                        modifier = Modifier.padding(start = wheelBox("colHour").marginStart.dp)
                    )
                    val colon = wheelBox("colColon")
                    Box(
                        modifier = Modifier
                            .width((colon.width ?: 0f).dp)
                            .fillMaxHeight(),
                        contentAlignment = Alignment.Center
                    ) {
                        BasicText(text = ":", style = s1TextStyle(wheelBox("colonCell")), maxLines = 1, softWrap = false)
                    }
                    S1WheelColumn(minutes, minuteIndex, { minuteIndex = it }, wheelBox("colMinute"), wheelBox("cell"))
                }
                /* 위·아래 흐림 — 가운데 값만 또렷하게 보이게 하는 덮개. 손가락을 막지 않는다. */
                Box(
                    modifier = Modifier
                        .align(Alignment.TopCenter)
                        .fillMaxWidth()
                        .height((fadeTop.height ?: 0f).dp)
                        .background(fadeTop.gradient?.toVerticalBrush(dark) ?: clear)
                )
                Box(
                    modifier = Modifier
                        .align(Alignment.BottomCenter)
                        .fillMaxWidth()
                        .height((fadeBottom.height ?: 0f).dp)
                        .background(fadeBottom.gradient?.toVerticalBrush(dark) ?: clear)
                )
            }
        }
        S1SheetFooter(sheet("footer")) {
            S1Button(
                text = applyLabel,
                onClick = {
                    val hour24 = if (is24Hour) hourIndex else (hourIndex + 1) % 12 + (if (ampmIndex == 1) 12 else 0)
                    onApply(S1Time(hour24, minuteIndex * minuteStep))
                },
                modifier = Modifier.weight(1f),
                variant = "primary"
            )
        }
    }
}

/**
 * 휠 한 열 — 위아래로 밀면 한 칸씩 멈추고, 가운데에 놓인 칸이 선택값이다.
 * 위·아래 여백은 첫 칸과 끝 칸도 정중앙까지 올 수 있게 잡은 값이고, 칸 사이 간격·칸 높이는 표에서 읽는다.
 */
@OptIn(ExperimentalFoundationApi::class)
@Composable
private fun S1WheelColumn(
    items: List<String>,
    selectedIndex: Int,
    onSelectedIndexChange: (Int) -> Unit,
    column: S1Box,
    cell: S1Box,
    modifier: Modifier = Modifier
) {
    val state = rememberLazyListState(initialFirstVisibleItemIndex = selectedIndex.coerceIn(0, items.size - 1))
    val scope = rememberCoroutineScope()
    val density = LocalDensity.current
    val cellHeight = cell.flexBasis ?: 0f
    val pitch = with(density) { (cellHeight + column.gap).dp.toPx() }
    val centered by remember {
        derivedStateOf {
            val passed = if (state.firstVisibleItemScrollOffset > pitch / 2f) 1 else 0
            (state.firstVisibleItemIndex + passed).coerceIn(0, items.size - 1)
        }
    }
    LaunchedEffect(state) {
        snapshotFlow { state.isScrollInProgress to centered }.collect { (scrolling, index) ->
            if (!scrolling) onSelectedIndexChange(index)
        }
    }
    LazyColumn(
        state = state,
        flingBehavior = rememberSnapFlingBehavior(state),
        contentPadding = PaddingValues(top = column.paddingTop.dp, bottom = column.paddingBottom.dp),
        verticalArrangement = Arrangement.spacedBy(column.gapDp),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = modifier
            .width((column.width ?: 0f).dp)
            .fillMaxHeight()
    ) {
        itemsIndexed(items) { index, text ->
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(cellHeight.dp)
                    .clickable(interactionSource = remember { MutableInteractionSource() }, indication = null) {
                        scope.launch { state.animateScrollToItem(index) }
                    },
                contentAlignment = Alignment.Center
            ) {
                BasicText(text = text, style = s1TextStyle(cell).copy(textAlign = TextAlign.Center), maxLines = 1, softWrap = false)
            }
        }
    }
}
