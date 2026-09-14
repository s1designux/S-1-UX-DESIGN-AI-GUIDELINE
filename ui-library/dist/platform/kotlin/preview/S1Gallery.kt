// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// S1Gallery — 승인된 부품·조합을 한 화면에 늘어놓는 검수 화면

package com.s1.designsystem

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.BasicText
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

/**
 * 눈으로 대조하기 위한 화면이다. 여기 나오는 조합은 스타일 표의 축 목록에서 바로 훑는다 —
 * 승인 목록에 무엇이 늘거나 줄면 이 화면도 함께 늘거나 준다.
 * 안드로이드는 모바일 한 벌만 쓰므로 크기 축이 하나인 부품에는 크기 선택이 없다.
 */
@Composable
fun S1Gallery(modifier: Modifier = Modifier, dark: Boolean = false) {
    S1Theme(dark = dark) {
        Column(
            modifier = modifier
                .fillMaxWidth()
                .background(S1Palette.colorBgLevel0.resolve(dark))
                .verticalScroll(rememberScrollState())
                .padding(24.dp),
            verticalArrangement = Arrangement.spacedBy(32.dp)
        ) {
            GallerySection("Button") {
                for (variant in S1ButtonSpec.variants) {
                    GalleryRow(variant) {
                        S1Button(text = "버튼", onClick = {}, variant = variant)
                        S1Button(text = "비활성", onClick = {}, variant = variant, enabled = false)
                    }
                }
            }

            GallerySection("Chip") {
                for (variant in S1ChipSpec.variants) {
                    var selected by remember { mutableStateOf(false) }
                    GalleryRow(variant) {
                        S1Chip(text = "칩", selected = selected, onSelectedChange = { selected = it }, variant = variant)
                        S1Chip(text = "선택됨", selected = true, onSelectedChange = {}, variant = variant)
                        S1Chip(text = "비활성", selected = false, onSelectedChange = {}, variant = variant, enabled = false)
                    }
                }
            }

            GallerySection("Checkbox · Radio") {
                var checked by remember { mutableStateOf(false) }
                var picked by remember { mutableStateOf(false) }
                GalleryRow("checkbox") {
                    S1Checkbox(checked = checked, onCheckedChange = { checked = it }, label = "선택 항목")
                    S1Checkbox(checked = true, onCheckedChange = {}, label = "선택됨")
                    S1Checkbox(checked = false, onCheckedChange = {}, label = "비활성", enabled = false)
                    S1Checkbox(checked = true, onCheckedChange = {}, label = "비활성 선택됨", enabled = false)
                }
                GalleryRow("radio") {
                    S1Radio(selected = picked, onClick = { picked = !picked }, label = "항목")
                    S1Radio(selected = true, onClick = {}, label = "선택됨")
                    S1Radio(selected = false, onClick = {}, label = "비활성", enabled = false)
                    S1Radio(selected = true, onClick = {}, label = "비활성 선택됨", enabled = false)
                }
            }

            GallerySection("Toggle") {
                var on by remember { mutableStateOf(false) }
                GalleryRow("toggle") {
                    S1Toggle(checked = on, onCheckedChange = { on = it })
                    S1Toggle(checked = true, onCheckedChange = {})
                    S1Toggle(checked = false, onCheckedChange = {}, enabled = false)
                    S1Toggle(checked = true, onCheckedChange = {}, enabled = false)
                }
            }

            GallerySection("Line Tab") {
                var index by remember { mutableStateOf(0) }
                S1TabRow(
                    tabs = listOf("탭 메뉴 1", "탭 메뉴 2", "탭 메뉴 3"),
                    selectedIndex = index,
                    onSelect = { index = it },
                    modifier = Modifier.fillMaxWidth()
                )
            }

            GallerySection("Select Box") {
                var picked by remember { mutableStateOf<Int?>(null) }
                GalleryRow("select") {
                    S1Select(
                        options = listOf("서울", "부산", "제주"),
                        selectedIndex = picked,
                        onSelect = { picked = it },
                        modifier = Modifier.width(200.dp)
                    )
                    S1Select(
                        options = listOf("서울"),
                        selectedIndex = null,
                        onSelect = {},
                        modifier = Modifier.width(200.dp),
                        enabled = false
                    )
                }
            }

            GallerySection("Dropdown") {
                for (type in S1DropdownSpec.types) {
                    for (size in S1DropdownSpec.sizes) {
                        GalleryLabel("$type · $size")
                        S1Dropdown(
                            options = listOf("최신순", "인기순", "과거순"),
                            selectedIndices = setOf(0),
                            onOptionClick = {},
                            type = type,
                            size = size
                        )
                    }
                }
            }

            GallerySection("Input") {
                var text by remember { mutableStateOf("") }
                S1Input(
                    value = text,
                    onValueChange = { text = it },
                    label = "이름",
                    placeholder = "내용을 입력하세요",
                    message = "안내 문구"
                )
                S1Input(value = "오류 값", onValueChange = {}, message = "다시 확인해 주세요", isError = true)
                S1Input(value = "읽기 전용", onValueChange = {}, readOnly = true)
                S1Input(value = "", onValueChange = {}, placeholder = "비활성", enabled = false)
                S1Input(value = "비밀번호", onValueChange = {}, mode = "password")
                S1Input(value = "검색어", onValueChange = {}, mode = "search")
            }

            GallerySection("Text Style") {
                for ((name, spec) in S1Type.all) {
                    Column(verticalArrangement = Arrangement.spacedBy(2.dp)) {
                        GalleryLabel(name)
                        BasicText(
                            text = "다람쥐 헌 쳇바퀴에 타고파 AaBbGg 123",
                            style = spec.textStyle(S1Palette.colorTextBodyPrimary)
                        )
                    }
                }
            }

            GallerySection("Modal") {
                for (footer in S1ModalSpec.footers) {
                    GalleryLabel(footer)
                    Box(modifier = Modifier.fillMaxWidth().height(360.dp)) {
                        S1ModalPanel(
                            title = "제목 영역",
                            message = "변경한 내용이 저장되지 않고 사라집니다.\n정말 이 작업을 진행하시겠어요?",
                            onDismissRequest = {},
                            cancelLabel = if (footer == "dual") "취소" else null
                        )
                    }
                }
            }

            GallerySection("Text Button · Assist Button") {
                for (variant in S1TextButtonSpec.variants) {
                    GalleryRow(variant) {
                        S1TextButton(text = "글자 버튼", onClick = {}, variant = variant)
                        S1TextButton(text = "비활성", onClick = {}, variant = variant, enabled = false)
                    }
                }
                GalleryRow("assist") {
                    S1AssistButton(text = "보조 버튼", onClick = {})
                    S1AssistButton(text = "비활성", onClick = {}, enabled = false)
                }
            }

            GallerySection("Textarea") {
                var memo by remember { mutableStateOf("") }
                GalleryRow("default") { S1Textarea(value = memo, onValueChange = { memo = it }, placeholder = "여러 줄 내용을 입력하세요") }
                GalleryRow("readOnly") { S1Textarea(value = "읽기 전용 내용", onValueChange = {}, readOnly = true) }
                GalleryRow("disabled") { S1Textarea(value = "", onValueChange = {}, placeholder = "여러 줄 내용을 입력하세요", enabled = false) }
            }

            GallerySection("Filter Chip") {
                for (variant in S1FilterChipSpec.variants) {
                    var picked by remember { mutableStateOf<Int?>(null) }
                    GalleryRow(variant) {
                        S1FilterChip(
                            options = listOf("최신순", "인기순", "과거순"),
                            selectedIndex = picked,
                            onSelect = { picked = it },
                            title = "정렬",
                            variant = variant
                        )
                        S1FilterChip(
                            options = listOf("전체", "진행중", "완료"),
                            selectedIndex = null,
                            onSelect = {},
                            variant = variant
                        )
                        S1FilterChip(
                            options = listOf("전체"),
                            selectedIndex = null,
                            onSelect = {},
                            variant = variant,
                            enabled = false
                        )
                    }
                }
            }

            GallerySection("Mobile Header") {
                for (variant in S1MobileHeaderSpec.variants) {
                    GalleryLabel(variant)
                    S1MobileHeader(
                        variant = variant,
                        title = "화면 제목",
                        subtitle = "부제목",
                        onBack = {},
                        onClose = {},
                        onNotification = {}
                    )
                }
            }

            /* 하단 내비는 칸 하나가 부품이다 — 바(배경·가로 배치)는 화면이 조립한다.
               검수 화면에서도 그 경계를 그대로 보여 준다. */
            GallerySection("Mobile Bottom Nav") {
                var picked by remember { mutableStateOf(0) }
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .background(S1Palette.colorNavigationBg.resolve(dark)),
                    horizontalArrangement = Arrangement.SpaceEvenly,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    listOf("홈" to "home", "검색" to "search", "알림" to "notification", "설정" to "settings")
                        .forEachIndexed { index, (label, icon) ->
                            S1MobileBottomNav(
                                label = label,
                                icon = icon,
                                selected = index == picked,
                                onClick = { picked = index }
                            )
                        }
                }
            }
        }
    }
}

@Composable
private fun GallerySection(title: String, content: @Composable () -> Unit) {
    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
        BasicText(
            text = title,
            style = TextStyle(
                color = S1Palette.colorTextTitlePrimary.value(),
                fontFamily = LocalS1FontFamily.current,
                fontSize = 18.sp,
                fontWeight = FontWeight(700)
            )
        )
        content()
    }
}

@Composable
private fun GalleryLabel(text: String) {
    BasicText(
        text = text,
        style = TextStyle(
            color = S1Palette.colorTextBodyPrimary.value(),
            fontFamily = LocalS1FontFamily.current,
            fontSize = 12.sp
        )
    )
}

@Composable
private fun GalleryRow(label: String, content: @Composable () -> Unit) {
    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
        GalleryLabel(label)
        Row(
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            content()
        }
    }
}
