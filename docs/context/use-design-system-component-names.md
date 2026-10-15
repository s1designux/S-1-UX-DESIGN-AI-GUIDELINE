---
name: use-design-system-component-names
description: "Call S1 components by the names river knows from the design system (GNB etc.), not invented Korean paraphrases"
metadata:
  node_type: memory
  type: feedback
  modified: 2026-10-02T01:27:38.055Z
---

S1 부품을 가리킬 때는 디자인 시스템에서 river가 쓰는 이름을 그대로 쓴다. 예: "상단 바"가 아니라 **GNB**. 뜻을 덧붙이려면 이름 옆에 짧게 단다("GNB(화면 맨 위 로고·메뉴 줄)").

**Why:** 2026-10-02 판정표에서 GNB를 "상단 바"로 풀어 쓰자 river가 무엇을 말하는지 몰랐고, "상단 바가 아니라 gnb라고 얘기해줬어야지"라고 지적했다. 쉬운 말 원칙([[river-plain-language]])은 개발 용어에 대한 것이고, river 본인의 디자인 용어(GNB·LNB·모달 등)는 풀지 않는 게 더 잘 통한다.

**How to apply:** 판정표·보고·문서에서 부품 이름이 나오면 디자인 시스템 이름(GNB, 탭, 칩, 멀티 토글, 모달 등)을 먼저 쓴다. 코드 식별자(`gnb`, `data-size`)는 여전히 보고에 쓰지 않는다.
