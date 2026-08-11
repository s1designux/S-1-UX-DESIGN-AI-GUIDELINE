#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OWNER = 's1designux';
const REPOSITORY = 'S1-UX-DESIGN-with-AI';
const BRANCH = 'main';

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

async function main() {
  const downloaded = [];
  for (const relativePath of FILES) {
    const url = `https://raw.githubusercontent.com/${OWNER}/${REPOSITORY}/${BRANCH}/${relativePath}`;
    const content = await fetchText(url);
    downloaded.push({ relativePath, content });
  }

  for (const { relativePath, content } of downloaded) {
    const destination = path.join(ROOT, relativePath);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, content);
    console.log(`✓ ${relativePath}`);
  }

  const commitResponse = await fetch(`https://api.github.com/repos/${OWNER}/${REPOSITORY}/commits/${BRANCH}`, {
    headers: {
      accept: 'application/vnd.github+json',
      'user-agent': 'S-1-UX-DESIGN-AI-GUIDELINE-sync'
    }
  });
  if (!commitResponse.ok) throw new Error(`원본 커밋 확인 실패: ${commitResponse.status}`);
  const commit = await commitResponse.json();
  fs.writeFileSync(path.join(ROOT, 'SOURCE.json'), `${JSON.stringify({
    repository: `https://github.com/${OWNER}/${REPOSITORY}`,
    commit: commit.sha,
    scope: 'PC',
    generatedAt: new Date().toISOString().slice(0, 10)
  }, null, 2)}\n`);
}

main().catch(error => {
  console.error(`❌ 자동 동기화 실패: ${error.message}`);
  process.exit(1);
});
