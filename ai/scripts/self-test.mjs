#!/usr/bin/env node
/** 검수기가 아직 판정할 줄 아는지 확인한다. 표본은 ai/fixtures/ 에 있다. */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const run = (fixture, profile) => spawnSync(process.execPath,
  [path.join(ROOT, "ai", "check", "s1-check.mjs"), path.join(ROOT, "ai", "fixtures", fixture), "--profile", profile],
  { cwd: ROOT, encoding: "utf8" });

/* [표본, 화면 종류, 나와야 할 결과 코드, 설명] */
const CASES = [
  ["pass", "user", 0, "사용자용 화면 — 합격"],
  ["pass-admin", "admin", 0, "관리자용 기본 화면(필터 줄·표 칸 안·팝업 포함) — 합격"],
  ["pass-mobile", "mobile", 0, "모바일 화면 — 합격"],
  ["pass-admin", "user", 1, "관리자용 크기를 사용자용 화면으로 검수 — 불합격"],
  ["fail-mixed", "user", 1, "버튼 크기가 제각각인 화면 — 불합격"],
  ["fail-mobile", "mobile", 1, "모바일에 PC 크기·밀도·멀티 토글 — 불합격"],
  ["pass-admin", "admin-compact", 1, "관리자용 기본 크기를 관리자용 작게로 검수 — 불합격"],
  ["pass-admin", "pr", 1, "관리자용 크기를 PR용으로 검수 — 불합격"],
  ["fail", "user", 1, "색·간격·부품 규칙 위반 — 불합격"]
];

let failed = false;
for (const [fixture, profile, expected, label] of CASES) {
  const result = run(fixture, profile);
  const ok = result.status === expected;
  console.log(`${ok ? "✓" : "✖"} ${fixture} (${profile}) — ${label} (결과 코드 ${result.status})`);
  if (!ok) { failed = true; console.log(result.stdout); console.log(result.stderr); }
}
if (failed) {
  console.log("검수기가 표본을 제대로 판정하지 못했습니다.");
  process.exit(1);
}
console.log("검수기 자가 확인 통과.");
