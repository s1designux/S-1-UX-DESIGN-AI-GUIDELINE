# S1 디자인 온보딩 — AI에게 그대로 주는 한 장

이 문서를 받은 AI에게.
지금부터 당신은 **에스원(S1) 디자인시스템 기준으로만** 화면·컴포넌트를 만들거나, 이미 있는 화면에 S1 을 입힙니다.
값을 기억에서 꺼내 쓰지 않습니다. 이 저장소의 파일을 실제로 읽고, 거기 있는 값만 씁니다.

저장소 — https://github.com/s1designux/S-1-UX-DESIGN-AI-GUIDELINE
파일을 못 읽는 대화형 AI라면 `https://raw.githubusercontent.com/s1designux/S-1-UX-DESIGN-AI-GUIDELINE/main/` 뒤에 경로를 붙여 읽으세요.

---

## 0단계 — 이미 세팅된 프로젝트인지 보세요

작업할 프로젝트 맨 위에 `s1.profile.json` 이 **있으면** 질문을 건너뜁니다. 그 값대로 2단계 파일만 읽고 바로 작업합니다.
**없으면** 1단계 질문부터 합니다.

---

## 1단계 — 사용자에게 먼저 물어보세요 (객관식)

**작업을 시작하기 전에** 아래 질문을 하나씩 물어 답을 받습니다.
답을 받기 전에는 화면을 만들거나 고치지 않습니다. 사용자가 "알아서 해"라고 하면 기본값(★)을 씁니다.

**Q0. 무엇을 하나요?**
1. 새 화면 만들기 ★
2. 이미 있는 화면(POC)에 S1 디자인 입히기 — 고치기 전에 **디자인 확인 요청서**를 먼저 만들어 디자이너에게 보냅니다(`ai/rules/apply-poc.md`)

**Q1. 어떤 도구에서 작업하나요?**
1. Claude Code · Cursor · Copilot 등 — 파일을 직접 읽고 쓸 수 있음 ★
2. ChatGPT · Claude 대화창 등 — 파일을 못 읽고 대화로만 주고받음

**Q2. 어떤 매체의 화면인가요?** (이게 가장 중요합니다)
1. PC 웹 ★
2. 모바일 앱 / 모바일 웹

> 한 번에 하나만 고릅니다. PC와 모바일을 같이 만들어야 하면 **둘로 나눠서 따로** 진행합니다.

**Q2-1. (Q2에서 PC 웹을 골랐을 때만) 누가 쓰는 화면인가요?** — 부품 크기가 이걸로 정해집니다
1. PR용 — 회사·서비스를 알리는 홍보·소개 화면
2. 사용자용 ★ — 여유 있게. 기본 높이 44
3. 관리자용

**Q2-2. (Q2-1에서 관리자용을 골랐을 때만) 어떤 크기로 쓰나요?**
1. 기본 ★ — 관리자가 평소에 쓰는 크기. 기본 높이 34
2. 작게 — 정보를 더 많이 담을 때. 기본 높이 28

> 모바일은 Q2-1·Q2-2를 건너뜁니다. 모바일 크기는 손가락 기준 하나뿐입니다.
> 한 화면에서는 하나만 고릅니다. 섞으면 큰 버튼과 작은 버튼이 뒤섞이고, 검수기가 그걸 잡아냅니다.

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
| PC 웹 | `ai/rules/platform.pc.md` + `ai/generated/components.pc.md` + 아래 표 하나 | 모바일 기준은 읽지 않습니다 |
| 모바일 | `ai/rules/platform.mobile.md` + `ai/generated/components.mobile.md` + `ai/generated/profile.mobile.md` | PC 기준은 읽지 않습니다 |

**Q2-1·Q2-2 답에 따라 하나만 (PC 웹일 때)**

| 답 | 읽을 파일 |
| --- | --- |
| PR용 | `ai/generated/profile.pr.md` |
| 사용자용 | `ai/generated/profile.user.md` |
| 관리자용 · 기본 | `ai/generated/profile.admin.md` |
| 관리자용 · 작게 | `ai/generated/profile.admin-compact.md` |

`profile.*.md` 가 **부품마다 써야 할 크기를 하나로 정해 둔 표**입니다.
배포본 예제를 붙인 뒤 `data-size` 값을 이 표대로 바꿉니다. 예제에 적힌 크기를 그대로 두거나, 크기를 화면 느낌으로 고르지 않습니다.

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

**Q0 에서 2번(이미 있는 화면에 입히기)을 골랐으면 추가로** — `ai/rules/apply-poc.md` + `ai/generated/matching-guide.<pc|mobile>.md`

읽지 않기로 한 파일은 **열지 않습니다.** PC 작업 중에 모바일 규칙을 참고하지 않습니다.

---

## 3단계 — 고른 크기를 보여 주고 확인받으세요

고른 화면 종류의 크기표(`ai/generated/profile.<종류>.md`) 2번 표를 사용자에게 그대로 보여 주고 묻습니다 —
"이 크기로 진행할까요?" 사용자가 다른 종류로 바꾸고 싶다고 하면 1단계 Q2-1·Q2-2 로 돌아갑니다.

---

## 4단계 — 세팅을 프로젝트에 남기세요

Q1에서 1번(파일을 읽고 쓸 수 있는 도구)을 골랐다면 두 가지를 합니다. 다음에 AI 를 다시 열어도 같은 기준으로 바로 작업하게 하기 위해서입니다.

**① 작업할 프로젝트 맨 위에 `s1.profile.json` 을 만듭니다.** 검수기도 이 파일을 읽어 "어떤 화면 기준으로 볼지"를 정합니다.

```json
{
  "mode": "new",
  "profile": "user",
  "platform": "pc",
  "stack": "web",
  "service": "default",
  "guidelineVersion": "0.16.1",
  "setUpAt": "2026-10-02"
}
```

- `mode` — `new`(새로 만들기) 또는 `apply`(이미 있는 화면에 입히기) (Q0)
- `platform` — `pc` 또는 `mobile` (Q2)
- `profile` — PC 웹이면 `pr`(PR용) · `user`(사용자용) · `admin`(관리자용 기본) · `admin-compact`(관리자용 작게). 모바일이면 `mobile`
- `stack` — `web` · `react` · `vue` · `kotlin` · `swift` · `cpp`
- `service` — `default`
- `guidelineVersion` — S1 가이드 `ui-library/dist/manifest.json` 의 `version` 값

**② 어떤 AI 도구로 열어도 이 기준부터 읽도록 안내 파일을 깝니다.**

```bash
node <S1 가이드 폴더>/ai/scripts/install-entry.mjs <작업할 프로젝트>
```

Claude Code·VS Code(Copilot)·Cursor·Windsurf·Gemini·Codex 가 처음 읽는 파일에 "S1 기준부터"라는 칸을 넣습니다. 프로젝트에 이미 있는 안내 파일은 지우지 않고 그 칸만 더합니다. 이미 깔려 있으면 "(그대로)"라고 나오고 아무것도 바꾸지 않습니다.

Q1에서 2번(대화형 AI)을 골랐다면 파일 대신 대화 안에서 이 값을 계속 기억하고, 답할 때마다 맨 위에 한 줄로 밝힙니다 —
`[S1 · PC 사용자용 · HTML+CSS · default 기준]`

---

## 5단계 — 이미 있는 화면에 입히는 경우: 디자인 확인부터

Q0 에서 2번을 골랐다면 화면을 고치기 전에 `ai/rules/apply-poc.md` 순서를 따릅니다.
POC 부품을 하는 일로 S1 부품과 짝지어 **디자인 확인 요청서**를 만들고, **디자이너 답을 받은 뒤에** 바꿉니다.

---

## 6단계 — 만들고 나면 반드시 검수하세요

만들었다고 말하기 전에 검수기를 돌립니다. **검수를 통과하지 못한 화면은 "다 적용했다"고 말하지 않습니다.**

```bash
node ai/check/s1-check.mjs <만든폴더> --profile user --report 판정표.html
```

`s1.profile.json` 이 있으면 `--profile` 은 생략합니다. 화면 종류가 정해지지 않으면 검수기는 판정하지 않고 "온보딩부터 하세요"라고 멈춥니다.
`--profile` 에는 PC 웹이면 `pr`(PR용) · `user`(사용자용) · `admin`(관리자용 기본) · `admin-compact`(관리자용 작게), 모바일이면 `mobile` 을 넣습니다. `s1.profile.json` 이 있으면 생략해도 됩니다.

- 결과가 **합격**이면 끝입니다.
- **불합격**이면 나온 항목을 고치고 다시 돌립니다. 통과할 때까지 반복합니다.
- 적용률이 100%가 아니면 화면 일부를 배포본 없이 지어낸 것입니다. 그 자리를 배포본으로 바꿉니다.
- 검수기를 돌릴 수 없는 환경이면, 만든 결과를 사용자에게 주면서 **"검수기를 아직 돌리지 않았다"고 그대로 밝힙니다.**

---

## 7단계 — 막히면

값이나 규칙을 찾지 못하면 임의로 채우지 않습니다.
**어떤 항목이 비어 있는지 그대로 말하고 사용자에게 묻습니다.**

"보통 이렇게 합니다"로 채우는 것은 이 시스템에서 가장 큰 잘못입니다.
