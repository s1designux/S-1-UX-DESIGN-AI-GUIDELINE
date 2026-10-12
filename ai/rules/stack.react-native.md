# React Native (Expo) 로 만들 때

## 0. 웹 React 와 다른 판입니다

`package.json` 에 `react-native` 나 `expo` 가 있으면 이 파일을 따릅니다. `stack.react.md` 는 읽지 않습니다.

웹 React 배포본(`@s1/ui-react`)은 `<button>`·`<span>` 과 CSS 파일로 그립니다. react-native-web 에서는 어찌어찌 보여도 **iOS·Android 빌드에서 깨집니다.**
React Native 배포본은 `View`·`Text`·`Pressable`·`TextInput` 으로 그려서 iOS·Android·웹에서 같은 코드로 돕니다.

## 1. 배포본을 씁니다

`ui-library/dist/platform/react-native/` 가 정본입니다. 설치·서체·다크 모드는 그 폴더의 `README.md` 를 따릅니다.

```bash
npx expo install react-native-svg expo-font
```

폴더째 프로젝트에 넣고(예: `src/s1-ui`) 거기서 꺼내 씁니다. **React Native 0.76 이상**(Expo SDK 52 이상)이 필요합니다.

```jsx
import { S1Provider, S1Button, S1Input } from "./src/s1-ui";

<S1Provider>
  <S1Input breakName="mobile" size="md" value={name} onChangeText={setName} />
  <S1Button breakName="mobile" variant="primary" size="lg" parts={{ label: "확인" }} onPress={save} />
</S1Provider>
```

같은 이름의 부품을 새로 만들지 않습니다. 부품 32종 목록과 받는 값은 배포본 `README.md` 5장에 있습니다.

## 2. breakName 을 꼭 적습니다

부품은 `breakName` 을 안 주면 **PC 모양**으로 그려집니다. 모바일 화면이면 PC·모바일 갈래가 있는 부품마다 `breakName="mobile"` 을 적습니다.

`size` 는 고른 화면 종류의 표(`ai/generated/profile.<pr|user|admin|admin-compact|mobile>.md`)에 적힌 값만 넣습니다. 웹의 `data-size` 가 여기서는 `size` 입니다.

## 3. 부품에 없는 자리를 그릴 때 — 값은 이름으로 부릅니다

| 필요한 것 | 쓰는 법 |
| --- | --- |
| 색 | `const { dark } = useS1();` → `COLORS["--color-bg-level-0"][dark ? 1 : 0]` |
| 간격·반경·크기 | `DIMENS["--spacing-16"]` · `DIMENS["--radius-8"]` |
| 글자 | `<S1Text type="body-14r" color="--color-text-body-primary">` |
| 아이콘 | `<Icon name="check" color={…} />` |

## 4. 하지 말 것

- `@s1/ui-react`·`s1-ui.css`·`tokens.css` 를 불러오기 → 웹 전용입니다
- `<button data-s1-component="button">` 같은 웹 마크업 붙이기
- `style={{ padding: 13, color: "#1D6CEB", fontSize: 15 }}` 처럼 숫자·색 직접 쓰기 → 3장의 이름으로
- `S1Button` 이 있는데 `Pressable` + `Text` 로 새로 만들기
- 배포본 폴더(`src/s1-ui`) 안의 파일 고치기 → 다음 배포에서 지워집니다

## 5. 원리상 웹과 다른 점

hover 는 마우스가 있는 웹에서만 켜지고, 터치 기기는 눌림만 있습니다. 키보드 조작(화살표·Esc)과 팝업 바깥을 눌러 닫기는 없습니다. 자세한 것은 배포본 `README.md` 8장.

## 6. 검수

```bash
node ai/check/s1-check.mjs <만든폴더> --profile mobile --stack react-native --report 판정표.html
```

부품 이름·`size`·`variant`·`breakName`, 화면 종류별 크기, 웹 배포본·웹 마크업 섞임, 스타일 안의 색·간격·글자 크기 숫자, 없는 토큰 이름을 봅니다.
적용률은 누르는 자리(`Pressable`·`TextInput`·`Switch` 등) 중 S1 부품의 비율입니다. 프로젝트에 넣어 둔 배포본 폴더는 검사에서 뺍니다.
