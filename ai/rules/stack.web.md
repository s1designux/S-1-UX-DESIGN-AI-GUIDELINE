# HTML + CSS 로 만들 때

## 1. 세 줄을 먼저 읽힙니다

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<link rel="stylesheet" href="ui-library/dist/assets/css/tokens.css">
<link rel="stylesheet" href="ui-library/dist/s1-ui.css">
```

## 2. 마크업은 예제를 그대로 복사합니다

`ui-library/dist/examples/<부품이름>.html` 이 정답입니다. 손으로 새로 쓰지 않습니다.

```html
<button type="button" data-s1-component="button" data-variant="primary" data-size="md">
  <span data-s1-part="label">확인</span>
</button>
```

부품 안쪽의 `data-s1-part` 요소를 빼면 겉만 부품이고 속이 빈 상태가 됩니다. 검수기가 잡습니다.

## 3. 여닫기·키보드가 필요한 부품은 런타임을 켭니다

```html
<script type="module">
  import { autoInit } from "./ui-library/dist/s1-ui.auto.js";
  autoInit();
</script>
```

어떤 부품이 이걸 필요로 하는지는 `ai/generated/components.<매체>.md` 에 "동작 스크립트 필요"로 적혀 있습니다.

## 4. 내가 쓰는 CSS 에서 하지 말 것

- `padding: 20px` 처럼 숫자 직접 쓰기 → `var(--spacing-24)`
- `font-size: 15px` → `var(--font-size-14)` 또는 `var(--font-size-16)`
- `color: #333` → 역할 토큰
- 배포본 부품의 모양을 덮어쓰는 CSS
