// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1DatePicker — 정본 Date Picker(모바일: 트리거 + 바텀 시트 달력)

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
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.platform.LocalDensity

/**
 * 날짜 하나. month 는 1~12 다. 안드로이드 최소 버전(24)에서 java.time 을 쓰려면 별도 설정이 필요해서
 * 필요한 만큼만 직접 가진다 — 요일·달 길이·비교가 전부다.
 */
data class S1Date(val year: Int, val month: Int, val day: Int) : Comparable<S1Date> {
    override fun compareTo(other: S1Date): Int = compareValuesBy(this, other, S1Date::year, S1Date::month, S1Date::day)

    /** 0 = 일요일 … 6 = 토요일 (정본: 일요일 시작). */
    val dayOfWeek: Int
        get() {
            val offsets = intArrayOf(0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4)
            val y = if (month < 3) year - 1 else year
            return (y + y / 4 - y / 100 + y / 400 + offsets[month - 1] + day) % 7
        }

    companion object {
        fun today(): S1Date {
            val now = java.util.Calendar.getInstance()
            return S1Date(now.get(java.util.Calendar.YEAR), now.get(java.util.Calendar.MONTH) + 1, now.get(java.util.Calendar.DAY_OF_MONTH))
        }
    }
}

/** 트리거에 보이는 표기 — 정본 그대로 YY.MM.DD(2자리 연도). */
fun s1FormatDate(date: S1Date): String =
    String.format("%02d.%02d.%02d", date.year % 100, date.month, date.day)

private val S1_MONTH_LABELS = listOf("1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월")
private val S1_WEEKDAY_LABELS = listOf("일", "월", "화", "수", "목", "금", "토")

private fun s1DaysInMonth(year: Int, month: Int): Int = when (month) {
    2 -> if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) 29 else 28
    4, 6, 9, 11 -> 30
    else -> 31
}

/** (연, 월) 에서 delta 달 떨어진 (연, 월). */
private fun s1AddMonths(year: Int, month: Int, delta: Int): Pair<Int, Int> {
    val index = year * 12 + (month - 1) + delta
    return (index / 12) to (index % 12 + 1)
}

/** 한 달 달력 칸 — 일요일부터 채우고 5주에 못 미치면 6주까지 늘린다(정본 달력과 같다). */
private fun s1MonthCells(year: Int, month: Int): List<Pair<S1Date, Boolean>> {
    val firstWeekday = S1Date(year, month, 1).dayOfWeek
    val days = s1DaysInMonth(year, month)
    val (prevYear, prevMonth) = s1AddMonths(year, month, -1)
    val (nextYear, nextMonth) = s1AddMonths(year, month, 1)
    val prevDays = s1DaysInMonth(prevYear, prevMonth)
    val cells = mutableListOf<Pair<S1Date, Boolean>>()
    for (i in 0 until firstWeekday) cells.add(S1Date(prevYear, prevMonth, prevDays - firstWeekday + 1 + i) to true)
    for (day in 1..days) cells.add(S1Date(year, month, day) to false)
    while (cells.size % 7 != 0 || cells.size < 35) {
        cells.add(S1Date(nextYear, nextMonth, cells.size - (firstWeekday + days) + 1) to true)
    }
    return cells
}

/**
 * 승인된 날짜 선택(한 날짜). 트리거를 누르면 바텀 시트 달력이 올라온다.
 * 날짜를 누르는 즉시 값이 정해지고 시트가 닫힌다(정본 동작). 적용 버튼은 이미 고른 날짜를 확인하는 자리다.
 * 트리거 상태는 기본 · hover · 채움 · 열림 · 비활성이고, 모바일 크기(md)는 한 벌뿐이다.
 *
 * 비활성 날짜(disabledDates)는 눌리지 않는다. 시작 요일은 일요일이다.
 */
@Composable
fun S1DatePicker(
    value: S1Date?,
    onValueChange: (S1Date) -> Unit,
    modifier: Modifier = Modifier,
    placeholder: String = "날짜 선택",
    title: String = "날짜 선택",
    applyLabel: String = "적용",
    disabledDates: Set<S1Date> = emptySet(),
    enabled: Boolean = true
) {
    var open by remember { mutableStateOf(false) }
    S1PickerTrigger(
        text = value?.let { s1FormatDate(it) } ?: placeholder,
        filled = value != null,
        expanded = open,
        expandedState = "open",
        enabled = enabled,
        onClick = { open = true },
        modifier = modifier,
        boxOf = { state, part -> S1DatePickerSpec.box("md|mobile|${state}", part) }
    )
    if (open) {
        Dialog(onDismissRequest = { open = false }, properties = DialogProperties(usePlatformDefaultWidth = false)) {
            S1DatePickerSheet(
                selected = value,
                onSelect = onValueChange,
                onDismissRequest = { open = false },
                title = title,
                applyLabel = applyLabel,
                disabledDates = disabledDates
            )
        }
    }
}

/**
 * 승인된 날짜 선택(기간). 시작일을 누르고 끝일을 누르면 값이 정해지고 닫힌다.
 * 시작일보다 앞선 날짜를 두 번째로 누르면 그 날짜가 새 시작일이 된다(자동으로 뒤집지 않는다).
 * 같은 날짜를 두 번 누르면 하루짜리 기간이다. 끝일이 아직 없으면 트리거에는 "시작 ~ " 까지 보인다.
 */
@Composable
fun S1DateRangePicker(
    start: S1Date?,
    end: S1Date?,
    onRangeChange: (start: S1Date?, end: S1Date?) -> Unit,
    modifier: Modifier = Modifier,
    placeholder: String = "날짜 선택",
    title: String = "날짜 선택",
    applyLabel: String = "적용",
    disabledDates: Set<S1Date> = emptySet(),
    enabled: Boolean = true
) {
    var open by remember { mutableStateOf(false) }
    val text = when {
        start != null && end != null -> s1FormatDate(start) + " ~ " + s1FormatDate(end)
        start != null -> s1FormatDate(start) + " ~ "
        else -> placeholder
    }
    S1PickerTrigger(
        text = text,
        filled = start != null,
        expanded = open,
        expandedState = "open",
        enabled = enabled,
        onClick = { open = true },
        modifier = modifier,
        boxOf = { state, part -> S1DatePickerSpec.box("md|mobile|${state}", part) }
    )
    if (open) {
        Dialog(onDismissRequest = { open = false }, properties = DialogProperties(usePlatformDefaultWidth = false)) {
            S1DateRangePickerSheet(
                start = start,
                end = end,
                onRangeChange = onRangeChange,
                onDismissRequest = { open = false },
                title = title,
                applyLabel = applyLabel,
                disabledDates = disabledDates
            )
        }
    }
}

/** 시트만 그린다(한 날짜) — 미리보기 화면처럼 대화상자 없이 보여줄 때 쓴다. */
@Composable
fun S1DatePickerSheet(
    selected: S1Date?,
    onSelect: (S1Date) -> Unit,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier,
    title: String = "날짜 선택",
    applyLabel: String = "적용",
    disabledDates: Set<S1Date> = emptySet()
) {
    S1DateSheetImpl(
        range = false,
        start = selected,
        end = null,
        onSelectionChange = { first, _ -> if (first != null) onSelect(first) },
        onDismissRequest = onDismissRequest,
        modifier = modifier,
        title = title,
        applyLabel = applyLabel,
        disabledDates = disabledDates
    )
}

/** 시트만 그린다(기간). */
@Composable
fun S1DateRangePickerSheet(
    start: S1Date?,
    end: S1Date?,
    onRangeChange: (start: S1Date?, end: S1Date?) -> Unit,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier,
    title: String = "날짜 선택",
    applyLabel: String = "적용",
    disabledDates: Set<S1Date> = emptySet()
) {
    S1DateSheetImpl(
        range = true,
        start = start,
        end = end,
        onSelectionChange = onRangeChange,
        onDismissRequest = onDismissRequest,
        modifier = modifier,
        title = title,
        applyLabel = applyLabel,
        disabledDates = disabledDates
    )
}

/** 날짜·시간 선택이 같이 쓰는 트리거 — 값(또는 안내 문구)과 오른쪽 아이콘. */
@Composable
internal fun S1PickerTrigger(
    text: String,
    filled: Boolean,
    expanded: Boolean,
    expandedState: String,
    enabled: Boolean,
    onClick: () -> Unit,
    modifier: Modifier,
    boxOf: (state: String, part: String) -> S1Box
) {
    val source = remember { MutableInteractionSource() }
    val hovered by source.collectIsHoveredAsState()
    val state = when {
        !enabled -> "disabled"
        expanded -> expandedState
        filled -> "filled"
        hovered -> "hover"
        else -> "default"
    }
    val trigger = boxOf(state, "trigger")
    val icon = boxOf(state, "icon")
    Row(
        modifier = modifier
            .s1Box(trigger, applyPadding = false)
            .hoverable(source)
            .clickable(enabled = enabled, interactionSource = source, indication = null, onClick = onClick)
            .s1Padding(trigger),
        verticalAlignment = Alignment.CenterVertically
    ) {
        BasicText(
            text = text,
            style = s1TextStyle(trigger),
            maxLines = 1,
            modifier = Modifier
                .weight(1f)
                .padding(end = trigger.gapDp)
        )
        val iconName = icon.icon
        if (iconName != null) {
            Image(
                imageVector = S1Icons.byName(iconName),
                contentDescription = null,
                modifier = Modifier.size((icon.width ?: 0f).dp, (icon.height ?: 0f).dp),
                colorFilter = ColorFilter.tint(icon.background?.value() ?: Color.Unspecified)
            )
        }
    }
}

@Composable
private fun S1DateSheetImpl(
    range: Boolean,
    start: S1Date?,
    end: S1Date?,
    onSelectionChange: (S1Date?, S1Date?) -> Unit,
    onDismissRequest: () -> Unit,
    modifier: Modifier,
    title: String,
    applyLabel: String,
    disabledDates: Set<S1Date>
) {
    val sheet = "default"
    val anchor = start ?: S1Date.today()
    var view by remember { mutableStateOf("date") }
    var viewYear by remember { mutableStateOf(anchor.year) }
    var viewMonth by remember { mutableStateOf(anchor.month) }
    val today = remember { S1Date.today() }

    /* 화살표 — 날짜 보기는 한 달, 월 보기는 1년, 연 보기는 12년씩 옮긴다. */
    fun move(delta: Int) {
        when (view) {
            "date" -> {
                val (y, m) = s1AddMonths(viewYear, viewMonth, delta)
                viewYear = y
                viewMonth = m
            }
            "month" -> { viewYear += delta }
            else -> { viewYear += delta * 12 }
        }
    }

    fun commit(first: S1Date?, second: S1Date?) {
        onSelectionChange(first, second)
        if (!range) onDismissRequest() else if (first != null && second != null) onDismissRequest()
    }

    fun select(date: S1Date) {
        if (date in disabledDates) return
        if (!range) {
            commit(date, null)
            return
        }
        val first = start
        when {
            first == null -> commit(date, null)
            end != null -> commit(date, null)
            date < first -> commit(date, null)
            date == first -> commit(date, date)
            else -> commit(first, date)
        }
    }

    fun cellState(date: S1Date): Pair<String, String?> {
        val disabled = date in disabledDates
        if (!range) {
            return when {
                start != null && date == start -> "selected" to null
                date == today -> "today" to null
                disabled -> "disabled" to null
                else -> "default" to null
            }
        }
        return when {
            start != null && date == start && end != null && end != start -> "today" to "start"
            end != null && date == end && end != start -> "selected" to "end"
            start != null && end != null && date > start && date < end -> (if (disabled) "range-disabled" else "range-mid") to "mid"
            start != null && date == start -> "today" to null
            disabled -> "disabled" to null
            else -> "default" to null
        }
    }

    S1SheetFrame(
        backdrop = S1DatePickerSpec.sheetBox(sheet, "backdrop"),
        panel = S1DatePickerSpec.sheetBox(sheet, "panel"),
        onDismissRequest = onDismissRequest,
        modifier = modifier
    ) {
        S1SheetHeader(
            title,
            S1DatePickerSpec.sheetBox(sheet, "header"),
            S1DatePickerSpec.sheetBox(sheet, "title"),
            S1DatePickerSpec.sheetBox(sheet, "close"),
            onDismissRequest
        )
        Column(
            modifier = Modifier
                .weight(1f, fill = false)
                .fillMaxWidth()
                .verticalScroll(rememberScrollState())
                .s1Padding(S1DatePickerSpec.sheetBox(sheet, "calendarWrap")),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            val calendar = S1DatePickerSpec.calendarBox("${view}|default", "calendar")
            val headerBox = S1DatePickerSpec.calendarBox("${view}|default", "header")
            val labelBox = S1DatePickerSpec.calendarBox("${view}|default", "headerLabel")
            Column(
                modifier = Modifier.width((calendar.width ?: 0f).dp),
                verticalArrangement = Arrangement.spacedBy(calendar.gapDp)
            ) {
                Row(
                    modifier = Modifier
                        .width((headerBox.width ?: 0f).dp)
                        .height((headerBox.height ?: 0f).dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    S1CalendarNav(view, "prev", "prevIcon") { move(-1) }
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(labelBox.gapDp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        S1CalendarLabel(view, "yearLabel", "${viewYear}년") { view = "year" }
                        if (view == "date") {
                            S1CalendarLabel(view, "monthLabel", S1_MONTH_LABELS[viewMonth - 1]) { view = "month" }
                        }
                    }
                    S1CalendarNav(view, "next", "nextIcon") { move(1) }
                }
                if (view == "date") {
                    val weekdayKinds = listOf("sunday", "weekday", "weekday", "weekday", "weekday", "weekday", "saturday")
                    Row {
                        for (index in 0..6) {
                            val box = S1DatePickerSpec.weekdayBox(weekdayKinds[index], "weekday")
                            Box(
                                modifier = Modifier.size((box.width ?: 0f).dp, (box.height ?: 0f).dp),
                                contentAlignment = Alignment.Center
                            ) {
                                BasicText(text = S1_WEEKDAY_LABELS[index], style = s1TextStyle(box).copy(textAlign = TextAlign.Center))
                            }
                        }
                    }
                    val cells = s1MonthCells(viewYear, viewMonth)
                    Column {
                        for (week in 0 until cells.size / 7) {
                            Row {
                                for (day in 0..6) {
                                    val (date, other) = cells[week * 7 + day]
                                    val (state, band) = cellState(date)
                                    S1CalendarCell(
                                        date = date,
                                        otherMonth = other,
                                        state = state,
                                        band = band,
                                        enabled = date !in disabledDates
                                    ) {
                                        if (other) { viewYear = date.year; viewMonth = date.month }
                                        select(date)
                                    }
                                }
                            }
                        }
                    }
                } else {
                    val isYear = view == "year"
                    val first = (viewYear / 12) * 12
                    val grid = S1DatePickerSpec.tileBox("default", "grid")
                    val rowBox = S1DatePickerSpec.tileBox("default", "tileRow")
                    Column(verticalArrangement = Arrangement.spacedBy(grid.gapDp)) {
                        for (row in 0 until 4) {
                            Row(horizontalArrangement = Arrangement.spacedBy(rowBox.gapDp)) {
                                for (column in 0 until 3) {
                                    val index = row * 3 + column
                                    val value = if (isYear) first + index else index + 1
                                    val label = if (isYear) "${value}" else S1_MONTH_LABELS[index]
                                    val selected = if (isYear) value == viewYear else value == viewMonth
                                    S1CalendarTile(label, selected) {
                                        if (isYear) { viewYear = value; view = "month" } else { viewMonth = value; view = "date" }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        S1SheetFooter(S1DatePickerSpec.sheetBox(sheet, "footer")) {
            S1Button(
                text = applyLabel,
                onClick = {
                    /* 적용 — 한 날짜는 고른 날짜가 있을 때, 기간은 시작·끝이 다 있을 때만 확정한다. */
                    if (!range && start != null) onDismissRequest()
                    if (range && start != null && end != null) onDismissRequest()
                },
                modifier = Modifier.weight(1f),
                variant = "primary"
            )
        }
    }
}

@Composable
private fun S1CalendarNav(view: String, part: String, iconPart: String, onClick: () -> Unit) {
    val source = remember { MutableInteractionSource() }
    val hovered by source.collectIsHoveredAsState()
    val key = "${view}|" + if (hovered) "hover" else "default"
    val box = S1DatePickerSpec.calendarBox(key, part)
    val icon = S1DatePickerSpec.calendarBox(key, iconPart)
    val touchWidth = box.width ?: 0f
    val touchHeight = box.height ?: 0f
    /* 보이는 크기와 눌리는 크기가 다르다 — 바깥 여백이 음수라 자리는 작게 잡고 손가락 영역만 넓힌다. */
    Box(
        modifier = Modifier.size(
            (touchWidth + box.marginStart + box.marginEnd).dp,
            (touchHeight + box.marginTop + box.marginBottom).dp
        ),
        contentAlignment = Alignment.Center
    ) {
        Box(
            modifier = Modifier
                .requiredSize(touchWidth.dp, touchHeight.dp)
                .s1Box(box, applySize = false, applyPadding = false)
                .hoverable(source)
                .clickable(interactionSource = source, indication = null, onClick = onClick),
            contentAlignment = Alignment.Center
        ) {
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
    }
}

@Composable
private fun S1CalendarLabel(view: String, part: String, text: String, onClick: () -> Unit) {
    val source = remember { MutableInteractionSource() }
    val hovered by source.collectIsHoveredAsState()
    val box = S1DatePickerSpec.calendarBox("${view}|" + if (hovered) "hover" else "default", part)
    BasicText(
        text = text,
        style = s1TextStyle(box),
        modifier = Modifier
            .hoverable(source)
            .clickable(interactionSource = source, indication = null, onClick = onClick)
    )
}

@Composable
private fun S1CalendarCell(
    date: S1Date,
    otherMonth: Boolean,
    state: String,
    band: String?,
    enabled: Boolean,
    onClick: () -> Unit
) {
    val source = remember { MutableInteractionSource() }
    val hovered by source.collectIsHoveredAsState()
    val kind = when (date.dayOfWeek) {
        0 -> "sunday"
        6 -> "saturday"
        else -> "weekday"
    }
    val hoverable = state == "default" || state == "today" || state == "selected"
    val key = "${kind}|${otherMonth}|${state}|" + if (hovered && hoverable) "hover" else "rest"
    val cell = S1DatePickerSpec.cellBox(key, "cell")
    val inner = S1DatePickerSpec.cellBox(key, "cellInner")
    val number = S1DatePickerSpec.cellBox(key, "cellNum")
    val bandBox = band?.let { S1DatePickerSpec.bandBox(it, "band") }
    val dark = LocalS1Dark.current
    val density = LocalDensity.current
    val bandModifier = if (bandBox != null) {
        Modifier.drawBehind {
            val left = with(density) { (bandBox.left ?: 0f).dp.toPx() }
            val right = with(density) { (bandBox.right ?: 0f).dp.toPx() }
            val top = with(density) { (bandBox.top ?: 0f).dp.toPx() }
            val height = with(density) { (bandBox.height ?: 0f).dp.toPx() }
            bandBox.background?.let { color ->
                drawRect(color = color.resolve(dark), topLeft = Offset(left, top), size = Size(size.width - left - right, height))
            }
        }
    } else {
        Modifier
    }
    Box(
        modifier = Modifier
            .size((cell.width ?: 0f).dp, (cell.height ?: 0f).dp)
            .then(bandModifier)
            .hoverable(source)
            .clickable(enabled = enabled, interactionSource = source, indication = null, onClick = onClick),
        contentAlignment = Alignment.Center
    ) {
        Box(modifier = Modifier.s1Box(inner), contentAlignment = Alignment.Center) {
            BasicText(text = "${date.day}", style = s1TextStyle(number).copy(textAlign = TextAlign.Center))
        }
    }
}

@Composable
private fun S1CalendarTile(label: String, selected: Boolean, onClick: () -> Unit) {
    val source = remember { MutableInteractionSource() }
    val hovered by source.collectIsHoveredAsState()
    val state = when {
        selected -> "selected"
        hovered -> "hover"
        else -> "default"
    }
    val tile = S1DatePickerSpec.tileBox(state, "tile")
    Box(
        modifier = Modifier
            .s1Box(tile)
            .hoverable(source)
            .clickable(interactionSource = source, indication = null, onClick = onClick),
        contentAlignment = Alignment.Center
    ) {
        BasicText(text = label, style = s1TextStyle(tile).copy(textAlign = TextAlign.Center))
    }
}
