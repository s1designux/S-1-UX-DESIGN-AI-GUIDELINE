# C++ 로 만들 때

## 1. 배포본에 있는 것

`ui-library/dist/platform/cpp/` 에는 **토큰만** 있습니다 (`s1_tokens.h`).
완성된 부품은 없습니다.

## 2. 부품을 직접 만들어야 할 때

- 색·간격·글자 크기는 `s1_tokens.h` 의 상수만 씁니다
- 부품의 구조·크기·상태는 `ai/generated/scope.json` 과 `registry/components/component-facts.json` 을 읽고 맞춥니다
- PC 동작은 `registry/components/component-behavior.pc.json` 의 `status: verified` 규칙만 구현합니다
- 거기 없는 값·동작은 만들지 말고 물어봅니다

## 3. 하지 말 것

- 색·크기를 숫자로 직접 쓰기
- 배포본에 없는 상태·변형 만들기
- "보통 이렇게 한다"로 빈 자리를 채우기

## 4. 검수

```bash
node ai/check/s1-check.mjs <만든폴더> --platform pc --stack cpp --report 판정표.html
```

C++ 파일에서는 색 직접 쓰기를 검사합니다. 부품 조합 검사는 마크업에서만 동작합니다.
