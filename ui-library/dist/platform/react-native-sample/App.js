/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
import { useState } from "react";
import { Pressable, SafeAreaView, Text, View, useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { COLORS, S1Gallery, S1Provider, S1_VERSION } from "../react-native";

/* 색은 값을 적지 않고 토큰 이름으로 부른다(라이트·다크 한 쌍). */
const color = (name, dark) => COLORS[name][dark ? 1 : 0];

/* Pretendard 파일을 assets/fonts 에 넣고 아래 주석을 풀면 서체까지 배포본과 같아진다(파일은 이 예제에 들어 있지 않다).
const FONTS = {
  "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
  "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
  "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
  "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf")
};
*/

function Toggle({ label, on, dark, onPress }) {
  const tone = color(on ? "--color-text-state-accent" : "--color-text-body-secondary", dark);
  return (
    <Pressable onPress={onPress} style={{ paddingVertical: 6, paddingHorizontal: 12, borderWidth: 1, borderColor: tone, borderRadius: 16, marginRight: 8 }}>
      <Text style={{ color: tone, fontSize: 13 }}>{label}</Text>
    </Pressable>
  );
}

export default function App() {
  const scheme = useColorScheme();
  const [dark, setDark] = useState(scheme === "dark");
  const [screen, setScreen] = useState("mobile");
  // const [loaded] = useFonts(FONTS); if (!loaded) return null;
  return (
    <S1Provider dark={dark} inline /* fontFamily={{ 400: "Pretendard-Regular", 500: "Pretendard-Medium", 600: "Pretendard-SemiBold", 700: "Pretendard-Bold" }} */>
      <SafeAreaView style={{ flex: 1, backgroundColor: color("--color-bg-level-0", dark) }}>
        <View style={{ flexDirection: "row", alignItems: "center", padding: 12 }}>
          <Toggle label="Mobile" dark={dark} on={screen === "mobile"} onPress={() => setScreen("mobile")} />
          <Toggle label="PC" dark={dark} on={screen === "pc"} onPress={() => setScreen("pc")} />
          <Toggle label="다크" dark={dark} on={dark} onPress={() => setDark(!dark)} />
          <Text style={{ marginLeft: "auto", color: color("--color-text-body-secondary", dark), fontSize: 11 }}>v{S1_VERSION}</Text>
        </View>
        <S1Gallery breakName={screen} />
      </SafeAreaView>
    </S1Provider>
  );
}
