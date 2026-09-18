# Swift (iOS) 로 만들 때

## 1. 이 판은 모바일입니다

매체는 `mobile` 로 잡고 `ai/rules/platform.mobile.md` 를 읽습니다.

**모바일 동작 계약은 아직 없습니다.** 필요한 동작이 비어 있으면 추측하지 말고 밝히고 물어보세요.

## 2. 배포본에 있는 것

`ui-library/dist/platform/swift/` 에는 **토큰만** 있습니다 (`S1Tokens.swift`).
Compose·React 처럼 완성된 부품은 아직 없습니다.

그래서 부품은 직접 조립해야 합니다. 조립할 때:

- 색·간격·글자 크기는 `S1Tokens.swift` 의 상수만 씁니다
- 부품의 구조·크기·상태는 `ai/generated/scope.json` 과 `registry/components/component-facts.json` 을 읽고 맞춥니다
- 거기 없는 값은 만들지 말고 물어봅니다

## 3. 하지 말 것

- `Color(hex: "#0072CE")` 처럼 색 직접 쓰기
- `.padding(13)` 처럼 임의 숫자
- 배포본에 없는 상태·변형 만들기

## 4. 검수

```bash
node ai/check/s1-check.mjs <만든폴더> --platform mobile --stack swift --report 판정표.html
```

Swift 파일에서는 색 직접 쓰기를 검사합니다. 부품 조합 검사는 마크업에서만 동작합니다.
