# 화면 큰 틀 — 새 화면은 여기서 시작합니다

> **AI 에게** — 프로토타입(`kind: prototype`)이고 `mode` 가 `new` 이면, 화면을 짜기 전에 `frame` 에 맞는 시작 파일 **하나만** 복사해 그 안의 본문 자리(`.s1-frame__main`)부터 채웁니다.
> 자동 생성물 — `ai/scripts/build-frames.mjs` 가 `scope.json` 과 배포본 예제로 만듭니다(`npm run ai:scope`). HTML 을 손으로 고치지 마세요.
> 사람이 그림으로 고르는 페이지 — `ai/generated/frame-picker.html`.

## 1. 어떤 파일을 쓰나

| 화면(`profile`) | `frame` | 시작 파일 | GNB 높이 | LNB 펼친 폭 |
| --- | --- | --- | --- | --- |
| PR용 `pr` | `gnb` | `pr.gnb.html` | 56 (`md`) | 쓰지 않음 |
| 사용자용 `user` | `gnb` · `gnb-lnb` | `user.<frame>.html` | 48 (`sm`) | 280 (`lg`) |
| 관리자용 기본 `admin` | `gnb` · `gnb-lnb` | `admin.<frame>.html` | 36 (`xsm`) | 280 (`lg`) |
| 관리자용 작게 `admin-compact` | `gnb` · `gnb-lnb` | `admin-compact.<frame>.html` | 36 (`xsm`) | 240 (`md`) |
| 모바일 `mobile` | `header` · `header-tabbar` | `mobile.<frame>.html` | — | — |

`frame` 이 비어 있으면(예전 프로젝트) 사용자에게 고르기 페이지를 열어 보라고 한 줄 제안하고, 답이 없으면 PC 는 `gnb`, 모바일은 `header` 로 시작합니다.

## 2. 복사한 뒤 할 일

1. `../../ui-library/` 경로를 프로젝트에서 가이드가 있는 자리로 바꿉니다(보통 `.s1-guide/ui-library/`). React·Vue 등이면 같은 구조를 그 기술의 컴포넌트로 옮깁니다.
2. 로고(`SERVICE LOGO`)·메뉴 이름·개수만 서비스에 맞게 고칩니다. 현재 메뉴 하나에만 `aria-current="page"`.
3. **바꾸지 않는 것** — GNB·LNB 의 `data-size`, `<body>` 의 `data-s1-density`·`data-s1-break`, 틀 배치 CSS(`.s1-frame*`), 동작 스크립트(`autoInit`).
4. PC 웹은 회색 바탕 위에 내용 덩어리(조회 조건·목록 등)마다 흰 상자 `<section class="s1-frame__box">` 하나씩 둡니다. 상자는 지우지 말고 `.s1-frame__title`·`.s1-frame__slot` 자리표시만 지우고 본문을 `profile.<profile>.md` 크기표대로 채웁니다.
5. GNB 하위메뉴가 필요하면 `ui-library/dist/examples/gnb.html` 의 패널 배선(`aria-controls`)을 그대로 따릅니다.

## 3. 로그인 화면

`s1.profile.json` 의 `login` 이 `true` 이면 로그인 화면은 이 틀을 쓰지 않고 `ai/patterns/login.<pc|mobile>.md` 대로 따로 만듭니다.

## 4. 검수

틀만 복사한 상태에서도 검수기를 통과합니다. 본문을 채운 뒤 다시 돌립니다 — `node <가이드 폴더>/ai/check/s1-check.mjs <폴더>`.
