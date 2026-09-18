# PC 기준 — 지금 만드는 것은 PC 웹 화면입니다

## 이 작업에서 모바일 규칙은 읽지 않습니다

`ai/rules/platform.mobile.md` 와 `ai/generated/components.mobile.md` 를 열지 않습니다.
모바일 전용 부품(하단 내비게이션·모바일 헤더·바텀시트)을 PC 화면에 놓지 않습니다.

## 쓸 수 있는 부품과 크기

`ai/generated/components.pc.md` 를 읽으세요. 거기 있는 부품·크기만 씁니다.

`data-break` 속성이 필요한 부품에는 항상 **`data-break="pc"`** 를 적습니다.

## 동작

PC 동작 계약은 `registry/components/component-behavior.pc.json` 입니다.
`status: verified` 인 규칙만 구현하고, `not-defined` 는 만들지 않습니다.

마우스 올림(hover)·포커스 링·키보드 이동이 PC의 기본 상호작용입니다. 터치 제스처를 가정하지 않습니다.

## 검수

```bash
node ai/check/s1-check.mjs <만든폴더> --platform pc --report 판정표.html
```
