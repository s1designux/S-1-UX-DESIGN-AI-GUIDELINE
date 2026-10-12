/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* 부품 폴더(../react-native)를 옆에서 읽는다 — 폴더를 복사하지 않아도 이 예제가 열린다. */
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
const parts = path.resolve(__dirname, "../react-native");
config.watchFolders = [parts];
config.resolver.extraNodeModules = new Proxy({}, { get: (_, name) => path.join(__dirname, "node_modules", String(name)) });
config.resolver.nodeModulesPaths = [path.join(__dirname, "node_modules")];
module.exports = config;
