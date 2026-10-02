# ai/ — AI가 이 디자인시스템을 쓰기 위한 꾸러미

사람용 문서(`README.md`·`design/DESIGN.core.md`)는 그대로 있습니다. 이 폴더는 **AI에게 주는 쪽**입니다.

| 경로 | 무엇인가 |
| --- | --- |
| `../ONBOARDING.md` | **시작점.** AI에게 이 한 장을 주면 객관식으로 환경·매체·기술을 물어 세팅합니다 |
| `rules/core.md` | 매체·기술과 무관한 공통 문법 |
| `rules/platform.pc.md` · `platform.mobile.md` | 매체별 기준. 한 번에 하나만 읽습니다 |
| `rules/stack.*.md` | 기술별(웹·React·Vue·Kotlin·Swift·C++) 쓰는 법 |
| `rules/service.default.md` | 서비스별 조합 문법. 서비스가 늘면 파일을 추가합니다 |
| `rules/platform-scope.overrides.json` | **사람이 손으로 고치는 파일.** 부품의 PC/모바일 소속 확정 |
| `rules/usage-profiles.json` | **사람이 손으로 고치는 파일.** 화면 종류(PC PR용 · 사용자용 · 관리자용 기본·작게 · 모바일) → 밀도(넓게·보통·좁게) |
| `generated/profile.pr.md` · `profile.user.md` · `profile.admin.md` · `profile.admin-compact.md` · `profile.mobile.md` | 화면 종류별 부품 크기표. AI 는 고른 화면 종류의 표 하나만 읽습니다 |
| `generated/profiles.pc.html` · `profiles.mobile.html` | 화면 종류를 실제 부품으로 나란히 그린 비교판 (PC·모바일 따로) |
| `generated/scope.json` | 검수기가 쓰는 정답표 — 배포본에서 자동으로 뽑습니다 |
| `generated/components.pc.md` · `components.mobile.md` | 매체별로 쓸 수 있는 부품·크기 목록 |
| `check/s1-check.mjs` | 검수기 |
| `profiles/` | 프로젝트에 넣을 `s1.profile.json` 본보기 |

## 쓰는 법

```bash
# 배포본이 바뀌면 정답표를 다시 뽑는다
npm run ai:scope

# 만든 화면을 검수한다
npm run ai:check -- <폴더> --profile user --report 판정표.html   # pr · user · admin · admin-compact · mobile
```

## 검수기가 보는 것

1. **매체 잠금** — PC 검수에 모바일 전용 부품·크기·`data-break` 가 섞였는가
2. **적용률** — 화면 속 부품 중 몇 개가 배포본인가. 100%가 아니면 일부를 지어낸 것이다
3. **직접 만든 자리** — 배포본에 있는데 손으로 다시 만든 흔적
4. **속 채움** — 겉만 부품이고 안쪽 `data-s1-part` 가 빈 것
5. **동작 배선** — 여닫기가 필요한 부품을 쓰고 런타임을 안 붙인 것
6. **색·토큰** — HEX·rgba 직접 사용, 없는 토큰 이름
7. **조합 문법** — 임의 px 간격, 토큰에 없는 글자 크기
8. **화면 종류별 크기** — PR용·사용자용·관리자용(기본·작게)·모바일 크기표와 다른 `data-size`, 그 화면에 없는 밀도 단어, 모바일에서 바꿔 써야 할 부품

판정 기준은 검수기가 만들지 않습니다. 전부 `generated/scope.json` 에서 읽고, 그 값은 배포본에서 나옵니다.
화면 종류별 크기는 `rules/usage-profiles.json`(화면 종류 → 밀도) + `registry/governance/density-policy.json`(밀도 정본, 원본 저장소에서 동기화) + 배포본 부품 CSS 의 실제 높이(밀도 → 크기 이름)로 만듭니다.
