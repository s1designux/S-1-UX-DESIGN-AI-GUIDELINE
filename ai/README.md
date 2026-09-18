# ai/ — AI가 이 디자인시스템을 쓰기 위한 꾸러미

사람용 문서(`README.md`·`design/DESIGN.core.md`)는 그대로 있습니다. 이 폴더는 **AI에게 주는 쪽**입니다.

| 경로 | 무엇인가 |
| --- | --- |
| `../ONBOARDING.md` | **시작점.** AI에게 이 한 장을 주면 객관식으로 환경·매체·기술을 물어 세팅합니다 |
| `rules/core.md` | 매체·기술과 무관한 공통 문법 |
| `rules/platform.pc.md` · `platform.mobile.md` | 매체별 기준. 한 번에 하나만 읽습니다 |
| `rules/stack.*.md` | 기술별(웹·React·Vue·Kotlin·Swift·C++) 쓰는 법 |
| `rules/service.default.md` | 서비스별 조합 문법. 서비스가 늘면 파일을 추가합니다 |
| `rules/platform-scope.overrides.json` | **사람이 손으로 고치는 유일한 파일.** 부품의 PC/모바일 소속 확정 |
| `generated/scope.json` | 검수기가 쓰는 정답표 — 배포본에서 자동으로 뽑습니다 |
| `generated/components.pc.md` · `components.mobile.md` | 매체별로 쓸 수 있는 부품·크기 목록 |
| `check/s1-check.mjs` | 검수기 |
| `profiles/` | 프로젝트에 넣을 `s1.profile.json` 본보기 |

## 쓰는 법

```bash
# 배포본이 바뀌면 정답표를 다시 뽑는다
npm run ai:scope

# 만든 화면을 검수한다
npm run ai:check -- <폴더> --platform pc --report 판정표.html
```

## 검수기가 보는 것

1. **매체 잠금** — PC 검수에 모바일 전용 부품·크기·`data-break` 가 섞였는가
2. **적용률** — 화면 속 부품 중 몇 개가 배포본인가. 100%가 아니면 일부를 지어낸 것이다
3. **직접 만든 자리** — 배포본에 있는데 손으로 다시 만든 흔적
4. **속 채움** — 겉만 부품이고 안쪽 `data-s1-part` 가 빈 것
5. **동작 배선** — 여닫기가 필요한 부품을 쓰고 런타임을 안 붙인 것
6. **색·토큰** — HEX·rgba 직접 사용, 없는 토큰 이름
7. **조합 문법** — 임의 px 간격, 토큰에 없는 글자 크기

판정 기준은 검수기가 만들지 않습니다. 전부 `generated/scope.json` 에서 읽고, 그 값은 배포본에서 나옵니다.
