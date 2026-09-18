# S1 디자인 온보딩 — AI에게 그대로 주는 한 장

이 문서를 받은 AI에게.
지금부터 당신은 **에스원(S1) 디자인시스템 기준으로만** 화면·컴포넌트를 만듭니다.
값을 기억에서 꺼내 쓰지 않습니다. 이 저장소의 파일을 실제로 읽고, 거기 있는 값만 씁니다.

저장소 — https://github.com/s1designux/S-1-UX-DESIGN-AI-GUIDELINE
파일을 못 읽는 대화형 AI라면 `https://raw.githubusercontent.com/s1designux/S-1-UX-DESIGN-AI-GUIDELINE/main/` 뒤에 경로를 붙여 읽으세요.

---

## 1단계 — 사용자에게 먼저 물어보세요 (객관식)

**작업을 시작하기 전에** 아래 네 가지를 물어 답을 받습니다.
답을 받기 전에는 화면을 만들지 않습니다. 사용자가 "알아서 해"라고 하면 기본값(★)을 씁니다.

**Q1. 어떤 도구에서 작업하나요?**
1. Claude Code · Cursor · Copilot 등 — 파일을 직접 읽고 쓸 수 있음 ★
2. ChatGPT · Claude 대화창 등 — 파일을 못 읽고 대화로만 주고받음

**Q2. 어떤 매체의 화면인가요?** (이게 가장 중요합니다)
1. PC 웹 ★
2. 모바일 앱 / 모바일 웹

> 한 번에 하나만 고릅니다. PC와 모바일을 같이 만들어야 하면 **둘로 나눠서 따로** 진행합니다.
> 섞으면 PC 화면에 모바일 전용 부품이 들어가고, 검수기가 그걸 잡아냅니다.

**Q3. 무엇으로 만드나요?**
1. HTML + CSS ★
2. React
3. Vue
4. Kotlin (Jetpack Compose)
5. Swift (iOS)
6. C++

**Q4. 어느 서비스 기준인가요?**
1. 기본(default) ★ — 현재 확정된 기준은 이것 하나입니다

---

## 2단계 — 답에 맞는 파일만 읽으세요

**항상 읽는 것**

| 파일 | 무엇이 들어 있나 |
| --- | --- |
| `ai/rules/core.md` | 색·글자·간격·라벨·부품·동작의 공통 문법 |
| `ai/generated/scope.json` | 승인된 부품·크기·필수 속성·토큰 이름 전부 (정답표) |
| `assets/css/tokens.css` | 색·간격·반경·글자 크기 실제 값 (라이트·다크) |

**Q2 답에 따라 하나만**

| 답 | 읽을 파일 | 여기에 없는 것 |
| --- | --- | --- |
| PC 웹 | `ai/rules/platform.pc.md` + `ai/generated/components.pc.md` | 모바일 기준은 읽지 않습니다 |
| 모바일 | `ai/rules/platform.mobile.md` + `ai/generated/components.mobile.md` | PC 기준은 읽지 않습니다 |

**Q3 답에 따라 하나만**

| 답 | 읽을 파일 |
| --- | --- |
| HTML + CSS | `ai/rules/stack.web.md` |
| React | `ai/rules/stack.react.md` |
| Vue | `ai/rules/stack.vue.md` |
| Kotlin | `ai/rules/stack.kotlin.md` |
| Swift | `ai/rules/stack.swift.md` |
| C++ | `ai/rules/stack.cpp.md` |

**Q4 답에 따라 하나만** — `ai/rules/service.default.md`

읽지 않기로 한 파일은 **열지 않습니다.** PC 작업 중에 모바일 규칙을 참고하지 않습니다.

---

## 3단계 — 세팅을 파일로 남기세요

Q1에서 1번(파일을 읽고 쓸 수 있는 도구)을 골랐다면, 작업할 프로젝트 맨 위에 `s1.profile.json` 을 만듭니다.
검수기가 이 파일을 읽어 "어떤 매체 기준으로 볼지"를 정합니다.

```json
{
  "platform": "pc",
  "stack": "web",
  "service": "default",
  "guidelineVersion": "0.8.1",
  "setUpAt": "2026-09-18"
}
```

- `platform` — `pc` 또는 `mobile`
- `stack` — `web` · `react` · `vue` · `kotlin` · `swift` · `cpp`
- `service` — `default`

Q1에서 2번(대화형 AI)을 골랐다면 파일 대신 대화 안에서 이 값을 계속 기억하고, 답할 때마다 맨 위에 한 줄로 밝힙니다 —
`[S1 · PC · HTML+CSS · default 기준]`

---

## 4단계 — 만들고 나면 반드시 검수하세요

만들었다고 말하기 전에 검수기를 돌립니다. **검수를 통과하지 못한 화면은 "다 적용했다"고 말하지 않습니다.**

```bash
node ai/check/s1-check.mjs <만든폴더> --platform pc --report 판정표.html
```

- 결과가 **합격**이면 끝입니다.
- **불합격**이면 나온 항목을 고치고 다시 돌립니다. 통과할 때까지 반복합니다.
- 적용률이 100%가 아니면 화면 일부를 배포본 없이 지어낸 것입니다. 그 자리를 배포본으로 바꿉니다.
- 검수기를 돌릴 수 없는 환경이면, 만든 결과를 사용자에게 주면서 **"검수기를 아직 돌리지 않았다"고 그대로 밝힙니다.**

---

## 5단계 — 막히면

값이나 규칙을 찾지 못하면 임의로 채우지 않습니다.
**어떤 항목이 비어 있는지 그대로 말하고 사용자에게 묻습니다.**

"보통 이렇게 합니다"로 채우는 것은 이 시스템에서 가장 큰 잘못입니다.
