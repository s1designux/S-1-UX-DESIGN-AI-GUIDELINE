# S1 UI — React Native 예제 앱

`../react-native` 의 부품 32종을 한 화면에 늘어놓은 Expo 앱입니다. 새 화면·새 값은 없습니다.

```bash
npm install
npx expo start      # i · a · w 로 iOS · Android · 웹 선택
```

- 위쪽 단추로 **Mobile / PC** 화면 기준과 **다크** 를 바꿉니다.
- 이 폴더는 자동 생성물입니다. 고치지 마세요.
- 서체(Pretendard)는 파일이 들어 있지 않습니다. `assets/fonts` 에 넣고 `App.js` 의 주석을 풀면 같아집니다.
- 이 예제는 `S1Provider inline` 으로 모달·바텀시트를 칸 안에 그립니다. 실제 앱에서는 `inline` 을 빼면 RN `Modal` 로 뜹니다.
