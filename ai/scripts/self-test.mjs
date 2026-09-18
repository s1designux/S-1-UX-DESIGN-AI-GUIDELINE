#!/usr/bin/env node
/** 검수기가 아직 판정할 줄 아는지 확인한다. 표본은 ai/fixtures/ 에 있다. */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const run = (fixture) => spawnSync(process.execPath,
  [path.join(ROOT, "ai", "check", "s1-check.mjs"), path.join(ROOT, "ai", "fixtures", fixture), "--platform", "pc"],
  { cwd: ROOT, encoding: "utf8" });

let failed = false;
for (const [fixture, expected, label] of [["pass", 0, "합격"], ["fail", 1, "불합격"]]) {
  const result = run(fixture);
  const ok = result.status === expected;
  console.log(`${ok ? "✓" : "✖"} ${fixture} 표본 — ${label}이 나와야 함 (결과 코드 ${result.status})`);
  if (!ok) { failed = true; console.log(result.stdout); console.log(result.stderr); }
}
if (failed) {
  console.log("검수기가 표본을 제대로 판정하지 못했습니다.");
  process.exit(1);
}
console.log("검수기 자가 확인 통과.");
