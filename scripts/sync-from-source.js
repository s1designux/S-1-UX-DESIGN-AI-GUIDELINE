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
  'assets/css/ui-library-guide.css',
  'assets/js/main.js',
  'assets/js/ui-library-guide.js',
  'data/icons.json',
  'pages/components.html',
  'scripts/component-behavior-check.js'
];

/**
 * 통째로 따라오는 폴더. 파일 목록을 손으로 적지 않는다 —
 * 컴포넌트가 늘어도 여기를 고칠 일이 없어야 한다.
 * ui-library/dist 는 배포본(CSS·JS·예제 마크업·플랫폼 포트)이라, 이게 없으면
 * 가이드를 받아가도 화면이 그려지지 않고 pages/components.html 도 깨진 채로 열린다.
 */
const DIRECTORIES = [
  'ui-library/dist',
  // 참고 화면이 컴포넌트마다 이 메타 파일을 읽는다 — 없으면 화면이 404 로 비어 보인다.
  'registry/components'
];

/** 폴더째 따라오지만 공개본에서 쓰지 않는 파일. */
const SKIP = new Set([
  // 가이드 사이트 전용 모델 15MB — 공개본에서 읽는 곳이 없다.
  'registry/components/component-guide-model.json'
]);

function apiHeaders() {
  const headers = {
    accept: 'application/vnd.github+json',
    'user-agent': 'S-1-UX-DESIGN-AI-GUIDELINE-sync'
  };
  // Actions 에서는 토큰이 있으면 쓴다 — 익명 호출은 IP 공용 한도(60/시간)에 걸린다.
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) headers.authorization = `Bearer ${token}`;
  return headers;
}

async function fetchBuffer(url) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'S-1-UX-DESIGN-AI-GUIDELINE-sync' }
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return Buffer.from(await response.arrayBuffer());
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: apiHeaders() });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
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

/**
 * 폴더 하나의 파일 경로를 전부 돌려준다.
 * 저장소 전체 트리를 한 번에 받으면 GitHub 가 잘라낼 수 있어(truncated),
 * 경로를 한 칸씩 따라 내려가 그 폴더의 트리만 재귀로 받는다.
 */
async function listDirectoryFiles(directory) {
  const base = `https://api.github.com/repos/${OWNER}/${REPOSITORY}/git/trees`;
  let treeSha = BRANCH;
  for (const segment of directory.split('/')) {
    const tree = await fetchJson(`${base}/${treeSha}`);
    const entry = (tree.tree || []).find((item) => item.path === segment && item.type === 'tree');
    if (!entry) throw new Error(`원본에 폴더가 없다: ${directory} (${segment} 에서 끊김)`);
    treeSha = entry.sha;
  }
  const tree = await fetchJson(`${base}/${treeSha}?recursive=1`);
  if (tree.truncated) throw new Error(`폴더가 너무 커서 목록이 잘렸다: ${directory}`);
  return (tree.tree || [])
    .filter((item) => item.type === 'blob')
    .map((item) => `${directory}/${item.path}`)
    .filter((relativePath) => !SKIP.has(relativePath))
    .sort();
}

/** 원본에서 사라진 파일은 여기서도 지운다 — 안 그러면 폐기된 컴포넌트가 남는다. */
function removeStaleFiles(directory, keep) {
  const removed = [];
  const root = path.join(ROOT, directory);
  if (!fs.existsSync(root)) return removed;
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(absolute);
        if (!fs.readdirSync(absolute).length) fs.rmdirSync(absolute);
        continue;
      }
      const relative = path.relative(ROOT, absolute).split(path.sep).join('/');
      if (keep.has(relative)) continue;
      fs.unlinkSync(absolute);
      removed.push(relative);
    }
  };
  walk(root);
  return removed;
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
function writeChangelog({ syncedAt, commit, subject, added, updated, removed }) {
  const changelogPath = path.join(ROOT, 'CHANGELOG.md');
  const existing = fs.existsSync(changelogPath) ? fs.readFileSync(changelogPath, 'utf8') : '';
  const previous = existing.startsWith(CHANGELOG_HEADER) ? existing.slice(CHANGELOG_HEADER.length) : existing;

  const lines = [`\n## ${syncedAt}`, '', `- 원본 커밋: \`${commit.slice(0, 7)}\` — ${subject}`];
  // 배포본은 한 번에 수백 개가 움직여서 전부 적으면 이력이 파일 목록으로 뒤덮인다.
  const section = (label, files) => {
    if (!files.length) return;
    lines.push(`- ${label} ${files.length}개`);
    const sorted = files.slice().sort();
    sorted.slice(0, 20).forEach((file) => lines.push(`  - \`${file}\``));
    if (sorted.length > 20) lines.push(`  - … 외 ${sorted.length - 20}개`);
  };
  section('새로 추가된 파일', added);
  section('내용이 바뀐 파일', updated);
  section('원본에서 사라져 삭제한 파일', removed);
  lines.push('');

  fs.writeFileSync(changelogPath, `${CHANGELOG_HEADER}${lines.join('\n')}${previous}`);
}

async function main() {
  const downloaded = [];
  const seen = new Set();
  const pull = async (relativePath) => {
    // 고정 목록과 폴더 목록이 겹칠 수 있다 — 같은 파일을 두 번 받지 않는다.
    if (seen.has(relativePath)) return;
    seen.add(relativePath);
    downloaded.push({ relativePath, content: await fetchBuffer(rawUrl(relativePath)) });
  };

  for (const relativePath of FILES) await pull(relativePath);

  // 근거 파일은 계약이 가리키는 대로 따라가서 함께 가져온다.
  const contract = downloaded.find((item) => item.relativePath === CONTRACT_REL);
  if (!contract) throw new Error(`행동 계약 파일을 받지 못했다: ${CONTRACT_REL}`);
  for (const relativePath of evidenceFilesFrom(contract.content.toString('utf8'))) await pull(relativePath);

  // 배포본 폴더는 원본 목록을 그대로 따라간다.
  const removed = [];
  for (const directory of DIRECTORIES) {
    const files = await listDirectoryFiles(directory);
    for (const relativePath of files) await pull(relativePath);
    removed.push(...removeStaleFiles(directory, new Set(files)));
  }

  // 무엇이 새로 생기고 무엇이 바뀌었는지 적기 위해 쓰기 전에 비교한다.
  const added = [];
  const updated = [];
  for (const { relativePath, content } of downloaded) {
    const destination = path.join(ROOT, relativePath);
    const before = fs.existsSync(destination) ? fs.readFileSync(destination) : null;
    if (before === null) added.push(relativePath);
    else if (!before.equals(content)) updated.push(relativePath);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, content);
  }
  console.log(`✓ 내려받은 파일 ${downloaded.length}개`);

  if (!added.length && !updated.length && !removed.length) {
    console.log('변경 없음 — 이력과 SOURCE.json 은 그대로 둔다.');
    return;
  }

  const commit = await fetchJson(`https://api.github.com/repos/${OWNER}/${REPOSITORY}/commits/${BRANCH}`);
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

  writeChangelog({ syncedAt, commit: commit.sha, subject, added, updated, removed });
  console.log(`기록: ${syncedAt} · 새 파일 ${added.length}개 · 갱신 ${updated.length}개 · 삭제 ${removed.length}개`);
}

main().catch(error => {
  console.error(`❌ 자동 동기화 실패: ${error.message}`);
  process.exit(1);
});
