---
name: figma-values-to-tokens
description: "Figma 수치(간격·글자 크기·모서리)는 참고만 하고, 코드에는 S1 토큰·텍스트 스타일 클래스만 쓴다"
metadata:
  node_type: memory
  type: feedback
  modified: 2026-10-13T07:10:34.849Z
---

Figma에서 읽은 간격·글자 크기·r값은 "어느 토큰인지" 고르는 참고로만 쓴다. 코드에는 S1 토큰(var(--spacing-*), --radius-*, --border-width-*, 색 토큰)과 텍스트 스타일 클래스(typo-title-16b 등)만 넣는다. px·font-size·line-height 직접 값 금지.

**Why:** river 지시(2026-10-13). 디자인 시스템과 어긋나지 않게 하려는 것.

**How to apply:** Figma 값 → 가장 가까운 토큰/텍스트 스타일로 매핑. 글자는 font-size·weight를 따로 쓰지 말고 typo-* 클래스. 토큰에 없는 값(예: 테두리 #D9D9D9)이면 river에게 묻는다. 관련: [[use-design-system-component-names]]
