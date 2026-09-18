# Vue 로 만들 때

## 1. CSS 를 앱 진입점에서 한 번 읽힙니다

```js
import "@s1/ui/assets/css/tokens.css";
import "@s1/ui/assets/css/typography.css";
import "@s1/ui/s1-ui.css";
```

## 2. 배포본 컴포넌트를 씁니다

`ui-library/dist/platform/vue/` 안의 SFC 가 정본입니다. 같은 이름의 컴포넌트를 새로 만들지 않습니다.

props 로 넘길 수 있는 값(variant·size)은 `ai/generated/scope.json` 에 있는 것만입니다.

## 3. 하지 말 것

- `<style scoped>` 로 부품 모양 덮어쓰기
- 숫자·색 직접 쓰기 → 토큰 변수
- 배포본에 있는 부품을 `<div>` 로 새로 조립하기

## 4. 검수

`.vue` 파일도 검수 대상입니다. `--stack vue` 로 돌리세요.
