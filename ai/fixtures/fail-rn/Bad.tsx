import { Pressable, Text, View } from "react-native";
import { S1Button } from "@s1/ui-react";
import { S1Table, S1Fancy, S1Chip } from "./s1-ui";

export function Bad({ go }: { go: () => void }) {
  return (
    <View style={{ padding: 13, marginTop: 16, backgroundColor: "#FF0000" }}>
      <button data-s1-component="button" data-size="lg">웹 버튼</button>
      <S1Button variant="primary" size="md" onPress={() => go()} />
      <S1Chip breakName="pc" variant="neon" size="sm" />
      <S1Table />
      <S1Fancy />
      <Pressable onPress={() => go()}><Text style={{ fontSize: 13, color: "--color-text-nope" }}>직접</Text></Pressable>
    </View>
  );
}
