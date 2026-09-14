#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OWNER = 's1designux';
const REPOSITORY = 'S1-UX-DESIGN-with-AI';
const BRANCH = 'main';
const CONTRACT_REL = 'registry/components/component-behavior.pc.json';

const FILES = [
  'design/DESIGN.core.md',
  'registry/components/component-facts.json',
  'registry/components/component-behavior.pc.json',
  'assets/css/tokens.css',
  'assets/css/component-tokens.css',
  'assets/css/typography.css',
  'assets/css/style.css',
  'assets/css/site-base.css',
  'assets/js/main.js',
  'data/icons.json',
  'pages/components.html',
  'scripts/component-behavior-check.js'
];

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'S-1-UX-DESIGN-AI-GUIDELINE-sync' }
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.text();
}

function rawUrl(relativePath) {
  return `https://raw.githubusercontent.com/${OWNER}/${REPOSITORY}/${BRANCH}/${relativePath}`;
}

/** 행동 계약이 근거로 지목한 UI 라이브러리 원본 파일 목록. 고정 목록으로 두면 새 컴포넌트마다 동기화가 깨진다. */
function evidenceFilesFrom(contractText) {
  const doc = JSON.parse(contractText);
  const files = new Set();
  for (const contract of Object.values(doc.components || {})) {
    const sourceFile = contract && contract.source && contract.source.sourceFile;
    if (sourceFile && !FILES.includes(sourceFile)) files.add(sourceFile);
  }
  return [...files].sort();
}

/** 한국 시간 "YYYY-MM-DD HH:mm (KST)" — 개발자가 시차를 계산하지 않게. */
function seoulTimestamp(date) {
  const parts = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Asia/Seoul',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false
  }).formatToParts(date).reduce((acc, part) => (acc[part.type] = part.value, acc), {});
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute} (KST)`;
}

const CHANGELOG_HEADER = [
  '# 업데이트 이력',
  '',
  '> 이 저장소는 원본 디자인 시스템에서 매일 자동으로 내려받아 갱신된다.',
  '> 검사를 통과한 변경만 아래에 쌓이며, 시각은 한국 시간(KST)이다.',
  ''
].join('\n');

/** 업데이트 이력을 최신순으로 CHANGELOG.md 맨 위에 쌓는다. */
function writeChangelog({ syncedAt, commit, subject, added, updated }) {
  const changelogPath = path.join(ROOT, 'CHANGELOG.md');
  const existing = fs.existsSync(changelogPath) ? fs.readFileSync(changelogPath, 'utf8') : '';
  const previous = existing.startsWith(CHANGELOG_HEADER) ? existing.slice(CHANGELOG_HEADER.length) : existing;

  const lines = [`\n## ${syncedAt}`, '', `- 원본 커밋: \`${commit.slice(0, 7)}\` — ${subject}`];
  if (added.length) {
    lines.push(`- 새로 추가된 파일 ${added.length}개`);
    added.slice().sort().forEach((file) => lines.push(`  - \`${file}\``));
  }
  if (updated.length) {
    lines.push(`- 내용이 바뀐 파일 ${updated.length}개`);
    updated.slice().sort().forEach((file) => lines.push(`  - \`${file}\``));
  }
  lines.push('');

  fs.writeFileSync(changelogPath, `${CHANGELOG_HEADER}${lines.join('\n')}${previous}`);
}

async function main() {
  const downloaded = [];
  for (const relativePath of FILES) {
    downloaded.push({ relativePath, content: await fetchText(rawUrl(relativePath)) });
  }

  // 근거 파일은 계약이 가리키는 대로 따라가서 함께 가져온다.
  const contract = downloaded.find((item) => item.relativePath === CONTRACT_REL);
  if (!contract) throw new Error(`행동 계약 파일을 받지 못했다: ${CONTRACT_REL}`);
  for (const relativePath of evidenceFilesFrom(contract.content)) {
    downloaded.push({ relativePath, content: await fetchText(rawUrl(relativePath)) });
  }

  // 무엇이 새로 생기고 무엇이 바뀌었는지 적기 위해 쓰기 전에 비교한다.
  const added = [];
  const updated = [];
  for (const { relativePath, content } of downloaded) {
    const destination = path.join(ROOT, relativePath);
    const before = fs.existsSync(destination) ? fs.readFileSync(destination, 'utf8') : null;
    if (before === null) added.push(relativePath);
    else if (before !== content) updated.push(relativePath);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, content);
    console.log(`✓ ${relativePath}`);
  }

  if (!added.length && !updated.length) {
    console.log('변경 없음 — 이력과 SOURCE.json 은 그대로 둔다.');
    return;
  }

  const commitResponse = await fetch(`https://api.github.com/repos/${OWNER}/${REPOSITORY}/commits/${BRANCH}`, {
    headers: {
      accept: 'application/vnd.github+json',
      'user-agent': 'S-1-UX-DESIGN-AI-GUIDELINE-sync'
    }
  });
  if (!commitResponse.ok) throw new Error(`원본 커밋 확인 실패: ${commitResponse.status}`);
  const commit = await commitResponse.json();
  const subject = String(commit.commit.message || '').split('\n')[0];
  const syncedAt = seoulTimestamp(new Date());

  fs.writeFileSync(path.join(ROOT, 'SOURCE.json'), `${JSON.stringify({
    repository: `https://github.com/${OWNER}/${REPOSITORY}`,
    commit: commit.sha,
    scope: 'PC',
    generatedAt: syncedAt.slice(0, 10),
    syncedAt,
    sourceCommitDate: seoulTimestamp(new Date(commit.commit.author.date)),
    sourceCommitSubject: subject
  }, null, 2)}\n`);

  writeChangelog({ syncedAt, commit: commit.sha, subject, added, updated });
  console.log(`기록: ${syncedAt} · 새 파일 ${added.length}개 · 갱신 ${updated.length}개`);
}

main().catch(error => {
  console.error(`❌ 자동 동기화 실패: ${error.message}`);
  process.exit(1);
});
