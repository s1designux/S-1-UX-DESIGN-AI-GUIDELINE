# React 로 만들 때

## 1. CSS 를 앱 진입점에서 한 번 읽힙니다

```js
import "@s1/ui/assets/css/tokens.css";
import "@s1/ui/assets/css/typography.css";
import "@s1/ui/s1-ui.css";
```

## 2. 배포본 컴포넌트를 씁니다

`ui-library/dist/platform/react/` 안의 컴포넌트가 정본입니다. 같은 이름의 컴포넌트를 새로 만들지 않습니다.

```jsx
import { S1Button, S1Input, S1Table } from "@s1/ui-react";

<S1Button variant="primary" size="md" parts={{ label: "확인" }} onClick={save} />
```

props 로 넘길 수 있는 값(variant·size)은 `ai/generated/scope.json` 에 있는 것만입니다.

## 3. 하지 말 것

- styled-components·Tailwind 등으로 부품 모양을 다시 만들기
- 인라인 style 에 숫자·색 직접 쓰기 → 토큰 변수
- 배포본에 있는 부품을 `<div>` 로 새로 조립하기

## 4. 검수

JSX 도 검수 대상입니다. `--stack react` 로 돌리세요.
