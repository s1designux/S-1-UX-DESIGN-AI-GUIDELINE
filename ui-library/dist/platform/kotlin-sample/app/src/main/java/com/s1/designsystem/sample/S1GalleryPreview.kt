// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
package com.s1.designsystem.sample

import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.s1.designsystem.S1Gallery

@Preview(name = "S1 — 라이트", showBackground = true, heightDp = 2400, widthDp = 420)
@Composable
private fun S1GalleryLightPreview() {
    S1Gallery(dark = false)
}

@Preview(name = "S1 — 다크", showBackground = true, heightDp = 2400, widthDp = 420)
@Composable
private fun S1GalleryDarkPreview() {
    S1Gallery(dark = true)
}
