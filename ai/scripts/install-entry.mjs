#!/usr/bin/env node
/**
 * install-entry — 어떤 AI 도구로 열어도 "S1 온보딩부터" 하도록, 도구마다 처음 읽는 안내 파일을 깐다.
 * --------------------------------------------------------------------------
 *   node ai/scripts/install-entry.mjs                 이 가이드 저장소 자신에 깐다
 *   node ai/scripts/install-entry.mjs <개발자프로젝트>   개발자 프로젝트에 깐다(가이드 위치를 상대 경로로 적어 준다)
 *
 * 도구별로 처음 읽는 파일:
 *   Claude Code → CLAUDE.md · VS Code(Copilot) → .github/copilot-instructions.md · Cursor → .cursor/rules/s1-design.mdc
 *   Windsurf → .windsurfrules · Gemini → GEMINI.md · Codex·그 밖 → AGENTS.md
 * 이미 있는 파일은 덮어쓰지 않는다. S1 표시(<!-- S1-DESIGN:START --> … END)로 감싼 칸만 넣거나 바꾼다.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const GUIDE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const target = path.resolve(process.cwd(), process.argv[2] || GUIDE_ROOT);
const self = target === GUIDE_ROOT;
/* 가이드가 프로젝트 가까이(형제 폴더·하위 폴더)에 있으면 상대 경로, 멀리 떨어져 있으면 절대 경로로 적는다. */
const relative = (path.relative(target, GUIDE_ROOT) || ".").split(path.sep).join("/");
const guide = self ? "." : (relative.split("/").filter((p) => p === "..").length > 2 ? GUIDE_ROOT.split(path.sep).join("/") : relative);

const PHRASE = "온보딩을 진행할까요? 디자인 가이드를 제대로 적용하려면 반드시 온보딩이 필요합니다.";
const START = "<!-- S1-DESIGN:START — 자동으로 넣은 칸입니다. 고치려면 S1 가이드의 ai/scripts/install-entry.mjs 를 다시 돌리세요 -->";
const END = "<!-- S1-DESIGN:END -->";

const body = `## S1 디자인 기준 — 화면(UI)을 만들거나 고치기 전에 꼭

이 프로젝트의 화면은 **S1 디자인 가이드**를 따릅니다. 가이드 위치: \`${guide}\`

1. **프로젝트 맨 위에 \`s1.profile.json\` 이 없으면** — 화면 이야기가 나오면 먼저 사용자에게 이렇게 제안합니다: **"${PHRASE}"** 그다음 \`${guide}/ONBOARDING.md\` 를 읽고, 거기 있는 질문(문서·프로토타입 / 새 화면·이미 있는 화면에 입히기 / 매체 / 화면 종류)을 **한 번에 묶어 번호로 묻습니다.** 답을 받기 전에는 화면을 만들거나 고치지 않습니다.
2. **있으면** — 다시 묻지 않습니다. 그 값대로 \`${guide}/ONBOARDING.md\` 2단계의 파일만 읽고 작업합니다. 크기는 \`${guide}/ai/generated/profile.<profile>.md\` 표대로만 씁니다.
3. **\`mode\` 가 \`apply\`(이미 있는 화면에 입히기)면** — 문서(\`kind: doc\`)는 \`${guide}/ai/rules/apply-doc.md\` 대로 S1 토큰으로 색·글자·간격만 입힙니다. 프로토타입(\`kind: prototype\`)은 \`${guide}/ai/rules/apply-poc.md\` 순서를 따라 **고치기 전에 디자인 확인 요청서를 먼저 만들어 디자이너에게 보냅니다.**
4. **끝나면 검수합니다** — \`node ${guide}/ai/check/s1-check.mjs <폴더>\`. 합격하기 전에는 "다 적용했다"고 말하지 않습니다.
`;

const block = `${START}\n${body}${END}\n`;

const FILES = [
  { file: "CLAUDE.md", title: "# Claude Code 안내" },
  { file: "GEMINI.md", title: "# Gemini 안내" },
  { file: ".github/copilot-instructions.md", title: "# GitHub Copilot 안내" },
  { file: ".windsurfrules", title: "# Windsurf 안내" },
  { file: ".cursor/rules/s1-design.mdc", title: "", front: "---\ndescription: S1 디자인 기준 — 화면(UI) 작업 전에 온보딩부터\nalwaysApply: true\n---\n" },
  { file: "AGENTS.md", title: "# AI Agent Instructions" }
];

function merge(existing, entry) {
  if (existing === null) return `${entry.front || ""}${entry.title ? `${entry.title}\n\n` : ""}${block}`;
  const at = existing.indexOf(START);
  if (at !== -1) {
    const end = existing.indexOf(END, at);
    return existing.slice(0, at) + block.trimEnd() + existing.slice(end === -1 ? existing.length : end + END.length);
  }
  /* 처음 넣는 칸은 맨 위(머리말·제목 바로 아래)에 둔다 — 다른 규칙보다 먼저 읽히도록. */
  const lines = existing.split("\n");
  let insertAt = 0;
  if (lines[0] === "---") { const close = lines.indexOf("---", 1); insertAt = close === -1 ? 0 : close + 1; }
  if (/^# /.test(lines[insertAt] || "")) insertAt += 1;
  return [...lines.slice(0, insertAt), "", block, ...lines.slice(insertAt)].join("\n").replace(/\n{3,}/g, "\n\n");
}

const done = [];
for (const entry of FILES) {
  const file = path.join(target, entry.file);
  let existing = null;
  try { existing = await readFile(file, "utf8"); } catch { /* 새로 만든다 */ }
  const next = merge(existing, entry);
  if (next === existing) { done.push(`  · ${entry.file} (그대로)`); continue; }
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, next, "utf8");
  done.push(`  ✓ ${entry.file}${existing === null ? " (새로 만듦)" : " (S1 칸 넣음)"}`);
}
console.log(`${self ? "이 가이드 저장소" : path.relative(process.cwd(), target) || "."} 에 AI 도구별 안내를 깔았습니다 — 가이드 위치 ${guide}`);
console.log(done.join("\n"));
