# 이미 있는 문서에 S1 입히기

> 온보딩에서 **A1(문서 작성) · B2(이미 있는 화면에 입히기)** 를 골랐을 때만 읽습니다.
> 문서는 사용자용 화면과 같은 기준(`ai/generated/profile.user.md`)을 씁니다.

문서는 보고서·안내·설명 페이지처럼 **읽는 화면**입니다. 구조와 내용은 그대로 두고, **이미 있는 S1 토큰으로 색·글자·간격만 입힙니다.**
부품을 짝짓거나 디자인 확인 요청서를 만들지 않습니다.

## 바꾸는 것

| 지금 문서 | S1 으로 |
| --- | --- |
| 글자 색 `#333` 등 | `var(--color-text-body-primary)` · 제목은 `var(--color-text-title-primary)` · 보조 글은 `var(--color-text-body-secondary)` |
| 배경 색 | `var(--color-bg-level-0)` (본문) · `var(--color-bg-level-1)`·`-2` (구역 구분) |
| 선 색 | `var(--color-line-default)` · 강조선 `var(--color-line-strong)` |
| 강조·링크 색 | `var(--color-text-state-accent)` |
| 경고·오류 글 | `var(--color-text-state-caution)` |
| 글자 크기·굵기 | 글자 스타일 클래스(`typo-title-24b`, `typo-body-14r` …) 또는 `var(--font-size-N)` · `var(--font-weight-…)` |
| 간격 | `var(--spacing-N)` — 한 묶음 안 8 · 한 줄 안 12 · 묶음 사이 24 |
| 모서리 | `var(--radius-N)` |
| 글꼴 | Pretendard |

쓸 수 있는 토큰 이름은 `ai/generated/scope.json` 의 `tokenNames`, 글자 크기는 `scale.fontSize` 에 있습니다. **없는 값을 지어내지 않습니다.** 맞는 토큰이 없으면 가장 가까운 것을 쓰고 사용자에게 알립니다.

## 바꾸지 않는 것

- 문서의 구조·순서·문장·표의 칸 구성
- 문서 안의 버튼·입력칸 등 부품 — 색·글자만 토큰으로 맞추고 S1 부품으로 갈아 끼우지 않습니다.

## 검수

```bash
node <가이드 폴더>/ai/check/s1-check.mjs <문서 폴더>
```

`s1.profile.json` 의 `kind: "doc"` · `mode: "apply"` 를 읽어, 적용률은 따지지 않고 색·글자·간격·토큰 이름만 봅니다.
