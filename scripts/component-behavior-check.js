#!/usr/bin/env node
'use strict';

/** PC UI 라이브러리 JavaScript와 AI 행동 계약이 같은 근거를 유지하는지 검사한다. */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGE_REL = 'pages/components.html';
const CONTRACT_REL = 'registry/components/component-behavior.pc.json';
const page = fs.readFileSync(path.join(ROOT, PAGE_REL), 'utf8');
const doc = JSON.parse(fs.readFileSync(path.join(ROOT, CONTRACT_REL), 'utf8'));
const failures = [];

for (const [name, contract] of Object.entries(doc.components || {})) {
  const source = contract.source || {};
  const sectionId = source.sectionId;
  if (!sectionId || !new RegExp(`<section\\b[^>]*\\bid=["']${sectionId}["']`).test(page)) {
    failures.push(`${name}: PC 페이지 섹션 #${sectionId || 'unknown'} 없음`);
  }
  const evidence = Array.isArray(source.sourceEvidence) ? source.sourceEvidence : [];
  if (!evidence.length) failures.push(`${name}: JavaScript/마크업 근거 없음`);
  for (const snippet of evidence) {
    if (!page.includes(snippet)) failures.push(`${name}: 근거가 코드에서 사라짐 — ${snippet}`);
  }
  if (!['verified', 'static'].includes(contract.status)) failures.push(`${name}: status는 verified/static만 허용`);
}

const required = ['Button', 'Checkbox', 'Radio', 'Toggle', 'Multi Toggle', 'Chip', 'Filter Chip',
  'Input', 'Text Area', 'Select Box', 'Dropdown', 'Line Tab', 'GNB', 'Pagination',
  'Date Picker', 'Time Picker', 'Table', 'CI', 'Footer', 'LoginGNB'];
for (const name of required) if (!doc.components || !doc.components[name]) failures.push(`${name}: PC 행동 계약 누락`);

console.log('🔎 PC Component Behavior 계약 검사');
if (failures.length) {
  failures.forEach((f) => console.error(`  ❌ ${f}`));
  process.exit(1);
}
console.log(`  ✅ PC 20개 계약이 UI 라이브러리 JavaScript/마크업 근거와 연결됨`);
