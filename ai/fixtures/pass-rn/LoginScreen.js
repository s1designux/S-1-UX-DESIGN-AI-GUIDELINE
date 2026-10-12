import { useState } from "react";
import { View } from "react-native";
import { COLORS, DIMENS, S1Button, S1Input, S1MobileHeader, S1Text, useS1 } from "./s1-ui";

export default function LoginScreen({ onLogin }) {
  const { dark } = useS1();
  const [id, setId] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: COLORS["--color-bg-level-0"][dark ? 1 : 0], padding: DIMENS["--spacing-16"] }}>
      <S1MobileHeader variant="standard-title" parts={{ title: "로그인" }} />
      <S1Text type="body-14r" color="--color-text-body-primary">아이디</S1Text>
      <S1Input breakName="mobile" size="md" value={id} onChangeText={(v) => setId(v)} />
      <S1Button breakName="mobile" variant="primary" size="lg" parts={{ label: "로그인" }} onPress={() => onLogin(id)} />
    </View>
  );
}
