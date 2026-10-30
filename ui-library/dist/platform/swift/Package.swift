// swift-tools-version:5.7
// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
import PackageDescription

let package = Package(
    name: "S1DesignSystem",
    platforms: [.iOS(.v16), .macOS(.v13)],
    products: [
        .library(name: "S1DesignSystem", targets: ["S1DesignSystem"])
    ],
    targets: [
        .target(
            name: "S1DesignSystem",
            path: ".",
            exclude: ["README.md", "coverage.json"]
        )
    ]
)
