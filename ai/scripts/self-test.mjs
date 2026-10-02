#!/usr/bin/env node
/** 검수기·요청서 생성기가 아직 판정할 줄 아는지 확인한다. 표본은 ai/fixtures/ 에 있다. */
import { spawnSync } from "node:child_process";
import { cpSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const FIX = path.join(ROOT, "ai", "fixtures");
const node = (args) => spawnSync(process.execPath, args, { cwd: ROOT, encoding: "utf8" });
const check = (dir, profile) => node([path.join(ROOT, "ai", "check", "s1-check.mjs"), dir, ...(profile ? ["--profile", profile] : [])]);

/* 디자이너가 "S1 으로 바꾸라"고 한 자리를 그대로 둔 화면 — 검수기가 잡아야 한다. */
const tmp = mkdtempSync(path.join(os.tmpdir(), "s1-selftest-"));
const ignored = path.join(tmp, "poc-ignored");
cpSync(path.join(FIX, "poc-applied"), ignored, { recursive: true });
const result = JSON.parse(readFileSync(path.join(ignored, "s1-review-result.json"), "utf8"));
result.decisions.find((d) => d.id === "P08").decision = "apply";
writeFileSync(path.join(ignored, "s1-review-result.json"), JSON.stringify(result));

/* 같은 문서를 프로토타입으로 세팅하면 부품을 갈아 끼우지 않은 것이 걸려야 한다. */
const docAsPrototype = path.join(tmp, "doc-as-prototype");
cpSync(path.join(FIX, "doc-applied"), docAsPrototype, { recursive: true });
const docProfile = JSON.parse(readFileSync(path.join(docAsPrototype, "s1.profile.json"), "utf8"));
writeFileSync(path.join(docAsPrototype, "s1.profile.json"), JSON.stringify({ ...docProfile, kind: "prototype" }));

/* 개발자 프로젝트에 안내 파일 깔기 — 기존 내용은 지우지 않고 S1 칸만 더한다. */
const project = path.join(tmp, "dev-project");
cpSync(path.join(FIX, "poc-sample"), project, { recursive: true });
writeFileSync(path.join(project, "CLAUDE.md"), "# 우리 팀 규칙\n\n- 커밋 메시지는 한국어\n");
function installTwice() {
  const first = node([path.join(ROOT, "ai", "scripts", "install-entry.mjs"), project]);
  const second = node([path.join(ROOT, "ai", "scripts", "install-entry.mjs"), project]);
  const claude = readFileSync(path.join(project, "CLAUDE.md"), "utf8");
  const ok = first.status === 0 && second.status === 0 && claude.includes("커밋 메시지는 한국어")
    && claude.split("S1-DESIGN:START").length === 2 && /ONBOARDING\.md/.test(readFileSync(path.join(project, ".github", "copilot-instructions.md"), "utf8"));
  return { status: ok ? 0 : 1, stdout: first.stdout + second.stdout + claude, stderr: first.stderr + second.stderr };
}

/* [설명, 실행, 나와야 할 결과 코드] */
const CASES = [
  ["pass (user) — 사용자용 화면 — 합격", () => check(path.join(FIX, "pass"), "user"), 0],
  ["pass-admin (admin) — 관리자용 기본 화면(필터 줄·표 칸 안·팝업 포함) — 합격", () => check(path.join(FIX, "pass-admin"), "admin"), 0],
  ["pass-mobile (mobile) — 모바일 화면 — 합격", () => check(path.join(FIX, "pass-mobile"), "mobile"), 0],
  ["pass-admin (user) — 관리자용 크기를 사용자용 화면으로 검수 — 불합격", () => check(path.join(FIX, "pass-admin"), "user"), 1],
  ["fail-mixed (user) — 버튼 크기가 제각각인 화면 — 불합격", () => check(path.join(FIX, "fail-mixed"), "user"), 1],
  ["fail-mobile (mobile) — 모바일에 PC 크기·밀도·멀티 토글 — 불합격", () => check(path.join(FIX, "fail-mobile"), "mobile"), 1],
  ["pass-admin (admin-compact) — 관리자용 기본 크기를 관리자용 작게로 검수 — 불합격", () => check(path.join(FIX, "pass-admin"), "admin-compact"), 1],
  ["pass-admin (pr) — 관리자용 크기를 PR용으로 검수 — 불합격", () => check(path.join(FIX, "pass-admin"), "pr"), 1],
  ["fail (user) — 색·간격·부품 규칙 위반 — 불합격", () => check(path.join(FIX, "fail"), "user"), 1],
  ["pass (화면 종류 없음) — 온보딩 없이 만든 화면 — 판정 거부", () => check(path.join(FIX, "pass"), null), 2],
  ["poc-applied (s1.profile.json) — 디자인 확인 결과대로 입힌 POC — 합격", () => check(path.join(FIX, "poc-applied"), null), 0],
  ["poc-ignored — 디자이너가 바꾸라고 한 자리를 그대로 둔 POC — 불합격", () => check(ignored, null), 1],
  ["doc-applied (s1.profile.json) — 문서에 토큰만 입힘, 부품은 그대로 — 합격", () => check(path.join(FIX, "doc-applied"), null), 0],
  ["doc-as-prototype — 같은 화면을 프로토타입으로 세팅하면(부품을 안 바꿈) — 불합격", () => check(docAsPrototype, null), 1],
  ["개발자 프로젝트에 AI 안내 깔기(두 번 돌려도 한 칸, 기존 규칙 보존) — 성공", installTwice, 0],
  ["poc-sample 대응표 → 디자인 확인 요청서 만들기 — 성공", () => node([path.join(ROOT, "ai", "scripts", "review-request.mjs"), path.join(FIX, "poc-sample", "s1-mapping.json"), "--out", path.join(tmp, "요청서.html")]), 0]
];

let failed = false;
for (const [label, run, expected] of CASES) {
  const outcome = run();
  const ok = outcome.status === expected;
  console.log(`${ok ? "✓" : "✖"} ${label} (결과 코드 ${outcome.status})`);
  if (!ok) { failed = true; console.log(outcome.stdout); console.log(outcome.stderr); }
}
rmSync(tmp, { recursive: true, force: true });
if (failed) {
  console.log("검수기가 표본을 제대로 판정하지 못했습니다.");
  process.exit(1);
}
console.log("검수기 자가 확인 통과.");
