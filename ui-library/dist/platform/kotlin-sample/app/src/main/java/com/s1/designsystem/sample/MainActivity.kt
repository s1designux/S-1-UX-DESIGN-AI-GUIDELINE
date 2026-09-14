// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
package com.s1.designsystem.sample

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.BasicText
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.s1.designsystem.S1Gallery
import com.s1.designsystem.S1Theme
import com.s1.designsystem.S1Toggle

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent { S1SampleScreen() }
    }
}

/** 라이트·다크를 한 화면에서 바꿔 가며 볼 수 있게 한 검수 화면. */
@Composable
fun S1SampleScreen() {
    var dark by remember { mutableStateOf(false) }
    Column(modifier = Modifier.fillMaxSize()) {
        S1Theme(dark = dark) {
            Row(
                modifier = Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                S1Toggle(checked = dark, onCheckedChange = { dark = it })
                BasicText(text = "  다크 모드", modifier = Modifier.padding(start = 8.dp))
            }
        }
        S1Gallery(dark = dark)
    }
}
