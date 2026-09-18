# 모바일 기준 — 지금 만드는 것은 모바일 화면입니다

## 이 작업에서 PC 규칙은 읽지 않습니다

`ai/rules/platform.pc.md` 와 `ai/generated/components.pc.md` 를 열지 않습니다.
PC 전용 부품(표·페이지 넘김·상단 전역 메뉴)을 모바일 화면에 놓지 않습니다.

## 쓸 수 있는 부품과 크기

`ai/generated/components.mobile.md` 를 읽으세요. 거기 있는 부품·크기만 씁니다.

`data-break` 속성이 필요한 부품에는 항상 **`data-break="mobile"`** 를 적습니다.

## 동작 — 아직 계약이 없습니다

이 저장소의 동작 계약(`component-behavior.pc.json`)은 **PC 기준입니다.**
모바일 동작 계약은 아직 없습니다. PC 규칙을 모바일로 늘려 해석하지 않습니다.

모바일에서 여닫기·제스처·키보드 동작이 필요하면 **추측해서 만들지 말고, 어떤 동작이 비어 있는지 밝히고 물어보세요.**

시각(색·글자·간격·크기)은 이 저장소 기준을 그대로 따릅니다.

## 검수

```bash
node ai/check/s1-check.mjs <만든폴더> --platform mobile --report 판정표.html
```
