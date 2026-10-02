/**
 * profile-docs — scope.json 의 화면 종류별 크기 기준을 사람·AI 가 읽을 문서로 내보낸다.
 *   ai/generated/profile.<pr|user|admin|admin-compact|mobile>.md  — AI 가 읽는 크기표
 *   ai/generated/profiles.pc.html · profiles.mobile.html — 화면 종류를 실제 부품으로 나란히 그린 비교판(PC·모바일 따로)
 * 값을 새로 만들지 않는다. scope.json 에 있는 것만 옮겨 적는다.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const COMPONENT_KO = {
  button: "버튼",
  input: "입력칸",
  select: "선택 상자",
  chip: "칩",
  "filter-chip": "필터 칩",
  table: "표(줄 높이)",
  "multi-toggle": "멀티 토글",
  dropdown: "드롭다운 목록",
  "date-picker": "날짜 선택",
  "time-picker": "시간 선택",
  tab: "탭",
  gnb: "GNB",
  "modal-content": "큰 팝업"
};
const ko = (id) => COMPONENT_KO[id] || id;
const ZONE_ORDER = ["form", "header", "filter", "table", "popup"];
const TABLE_KINDS = { summary: "요약 표", list: "일반 목록", dense: "촘촘한 목록" };
const WIDTH = { md: 520, lg: 1000, xl: 1200 };
const GNB = { md: 56, sm: 48, xsm: 36 };

function heightOf(scope, component, size, platform) {
  if (!size) return null;
  if (platform === "mobile") {
    const read = scope.density.map[component];
    return read ? (read.mobileHeights[size] ?? scope.density.mobileHeight) : null;
  }
  return scope.density.heights[component]?.[size] ?? null;
}
const cell = (scope, component, size, platform) => {
  if (!size) return "—";
  const h = heightOf(scope, component, size, platform);
  return h ? `\`${size}\` (${h})` : `\`${size}\``;
};
/** 묶음의 크기를 보여 줄 때는 대표 부품의 높이를 쓴다(묶음 안 부품은 같은 크기 이름 = 같은 높이). */
const groupCell = (scope, group, size) => cell(scope, scope.density.groups[group].components[0], size, "pc");

export async function writeProfileDocs(scope, ROOT, DIST, manifest) {
  const out = path.join(ROOT, "ai", "generated");
  const levelKo = Object.fromEntries(scope.density.levels.map((l) => [l.id, `${l.ko}(${l.pcHeight})`]));
  const otherLabels = (id) => Object.entries(scope.profiles).filter(([key, p]) => key !== id && p.platform === scope.profiles[id].platform).map(([, p]) => p.label).join(" · ");

  for (const [id, profile] of Object.entries(scope.profiles)) {
    const pc = profile.platform === "pc";
    const lines = [
      `# ${profile.label} — 이 크기만 씁니다`,
      "",
      "> 자동 생성물 — 손으로 고치지 마세요. 기준을 바꾸려면 `ai/rules/usage-profiles.json` 을 고치고 `npm run ai:scope` 를 돌립니다.",
      `> 배포본 ${manifest.version} (${manifest.releasedAt} 판) 기준.${pc ? " 크기는 river 가 크기 판정표에서 고른 값입니다(2026-10-02)." : ""}`,
      "",
      otherLabels(id)
        ? `이 화면은 **${profile.label}** 입니다. ${otherLabels(id)} 크기를 섞지 않습니다.${pc ? " 모바일 기준은 이 화면과 관계가 없습니다." : ""}`
        : `이 화면은 **${profile.label}** 입니다.${pc ? "" : " PC 기준은 이 화면과 관계가 없습니다."}`,
      "배포본 예제(`ui-library/dist/examples/`)를 붙인 뒤 **`data-size` 값만 아래 표대로 바꿉니다.** 예제에 적힌 크기를 그대로 두지 않습니다.",
      "",
      "## 1. 화면 맨 바깥에 한 번 적습니다",
      "",
      "```html",
      pc
        ? `<body data-s1-density="${profile.density}">   <!-- 크기를 빠뜨린 부품의 안전망: ${levelKo[profile.density]} -->`
        : `<body data-s1-break="mobile">   <!-- 모바일은 손가락 기준 높이 ${scope.density.mobileHeight} 하나 -->`,
      "```",
      "",
      pc
        ? `\`data-s1-density\` 는 맨 바깥에 \`${profile.density}\` 하나만 적습니다. 안쪽 자리는 아래 3번처럼 \`data-s1-zone\` 으로 표시합니다.`
        : "모바일에는 밀도 단어(`data-s1-density`)를 적지 않습니다. 예제에 `data-break` 가 있는 부품은 모두 `data-break=\"mobile\"` 로 적습니다.",
      ""
    ];
    if (pc) {
      const zones = ZONE_ORDER.filter((z) => profile.sizes[z]);
      const groups = Object.keys(scope.density.groups).filter((g) => zones.some((z) => profile.sizes[z][g]));
      lines.push(
        "## 2. 자리별 부품 크기",
        "",
        `| 부품 | ${zones.map((z) => scope.density.zones[z].label).join(" | ")} |`,
        `| --- | ${zones.map(() => "---").join(" | ")} |`,
        ...groups.map((g) => `| ${scope.density.groups[g].label} | ${zones.map((z) => groupCell(scope, g, profile.sizes[z][g])).join(" | ")} |`),
        "",
        "괄호 안 숫자는 실제 높이(px)입니다. 칸이 `—` 인 자리에는 기준이 없습니다 — 그 부품을 거기 놓아야 하면 예제 크기를 그대로 두고 사용자에게 알립니다.",
        "`data-size` 는 이 표대로 **항상 적습니다.**",
        "",
        "### 표 줄 높이",
        "",
        "| 표 성격 | 줄 높이 |",
        "| --- | --- |",
        ...Object.entries(profile.tableRow || {}).map(([kind, size]) => `| ${TABLE_KINDS[kind] || kind} | ${cell(scope, "table", size, "pc")} |`),
        "",
        "열(칸) 수로는 높이를 바꾸지 않습니다.",
        "",
        "### 팝업 폭 (권장 — 필수 아님)",
        "",
        `- 입력 팝업 \`${profile.popupWidth?.input}\` (${WIDTH[profile.popupWidth?.input]}) · 표·목록 팝업 \`${profile.popupWidth?.list}\` (${WIDTH[profile.popupWidth?.list]})`,
        `- ${scope.density.advisory.popupWidth}`,
        "",
        "### GNB (화면 맨 위 로고·메뉴 줄)",
        "",
        profile.gnb ? `- \`${profile.gnb}\` (높이 ${GNB[profile.gnb]})` : "- 아직 기준이 없습니다. 예제 크기를 그대로 씁니다.",
        "",
        "## 3. 자리를 정하는 법",
        "",
        ...ZONE_ORDER.map((z) => `- **${scope.density.zones[z].label}** — ${scope.density.zones[z].how}`),
        "- 선택 상자·필터 칩 안의 목록처럼 **다른 부품 안에 든 것은 예제 크기를 그대로** 둡니다.",
        "",
        "입력칸·선택 상자의 라벨은 부품 위에 별도 글자로 올리고(간격 8), 그 글자에 `id` 를 준 뒤 부품 맨 바깥 요소에 `aria-labelledby` 로 잇습니다."
      );
    } else {
      const usable = Object.entries(profile.sizes).filter(([, row]) => row.base);
      const swapped = Object.entries(profile.sizes).filter(([, row]) => row.substitute);
      lines.push(
        "## 2. 부품별 크기",
        "",
        "| 부품 | 크기 |",
        "| --- | --- |",
        ...usable.map(([component, row]) => `| ${ko(component)} \`${component}\` | ${cell(scope, component, row.base, "mobile")} |`),
        "",
        "## 3. 모바일에서 쓰지 않고 바꿔 쓰는 것",
        "",
        "| 쓰지 않는 부품 | 대신 쓰는 것 |",
        "| --- | --- |",
        ...swapped.map(([component]) => `| ${ko(component)} \`${component}\` | ${scope.density.mobileSubstitutes[component].use} — ${scope.density.mobileSubstitutes[component].note} |`),
        `| ${ko("table")} \`table\` | PC 전용입니다. 같은 모양 줄이 반복되면 \`list-row\` 를 씁니다. |`,
        "",
        "선택 상자·필터 칩 예제 안에 들어 있는 드롭다운 목록은 예제 그대로 둡니다. 드롭다운을 화면에 **따로** 띄우지 않는다는 뜻입니다."
      );
    }
    lines.push(
      "",
      "## 4. 검수",
      "",
      "```bash",
      `node ai/check/s1-check.mjs <만든폴더> --profile ${id} --report 판정표.html`,
      "```",
      ""
    );
    await writeFile(path.join(out, `profile.${id}.md`), lines.join("\n"), "utf8");
  }

  for (const platform of ["pc", "mobile"]) {
    await writeFile(path.join(out, `profiles.${platform}.html`), await renderBoard(scope, DIST, manifest, platform), "utf8");
  }
}

/* ── 비교판 — 배포본 예제를 그대로 가져와 크기만 바꿔 그린다 ─────────────── */
async function example(DIST, name) {
  try { return await readFile(path.join(DIST, "examples", `${name}.html`), "utf8"); } catch { return null; }
}
/** 예제 파일에 여러 벌이 들어 있으면 첫 번째 것만 쓴다. */
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);
function firstElement(html) {
  const pattern = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)(?:"[^"]*"|'[^']*'|[^>])*?(\/?)>/g;
  let depth = 0;
  let start = -1;
  let m;
  while ((m = pattern.exec(html)) !== null) {
    const [, closing, name, self] = m;
    if (start === -1) start = m.index;
    if (closing) depth -= 1;
    else if (!self && !VOID.has(name.toLowerCase())) depth += 1;
    if (depth === 0) return html.slice(start, m.index + m[0].length);
  }
  return html;
}
const resize = (html, size) => html.replace(/data-size="[a-z0-9]+"/, `data-size="${size}"`);
const uniqueIds = (html, prefix) => html.replace(/\bid="([^"]+)"/g, `id="${prefix}-$1"`).replace(/\b(for|aria-labelledby|aria-controls)="([^"]+)"/g, `$1="${prefix}-$2"`);
const withLabel = (html, label) => html.replace(/(<span data-s1-part="label">)[^<]*/, `$1${label}`);

/** 비교판은 파일 하나로 열려야 한다 — 미리보기 창은 옆 파일(CSS·아이콘)을 못 읽는다. 배포본 CSS 를 그대로 넣는다. */
async function inlineCss(DIST) {
  const { readdir } = await import("node:fs/promises");
  let css = (await readFile(path.join(DIST, "assets/css/tokens.css"), "utf8"))
    + "\n" + (await readFile(path.join(DIST, "assets/css/typography.css"), "utf8"))
    + "\n" + (await readFile(path.join(DIST, "s1-ui.css"), "utf8"));
  for (const icon of await readdir(path.join(DIST, "assets/icons"))) {
    const svg = await readFile(path.join(DIST, "assets/icons", icon), "utf8");
    css = css.split(`url("./assets/icons/${icon}")`).join(`url("data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}")`);
  }
  return css.replace(/@import[^;]+;/g, "").replace(/<\/style/gi, "<\\/style");
}

async function renderBoard(scope, DIST, manifest, platform) {
  const shown = Object.fromEntries(Object.entries(scope.profiles).filter(([, p]) => p.platform === platform));
  const escape = (v) => String(v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const mobile = platform === "mobile";
  let seq = 0;

  async function markup(component, size, label) {
    const source = (mobile && await example(DIST, `${component}.mobile`)) || await example(DIST, component);
    if (!source) return "";
    let html = resize(firstElement(source.replace(/<!--[\s\S]*?-->/g, "").trim()), size);
    if (mobile) html = html.replace(/data-break="pc"/g, 'data-break="mobile"');
    if (component === "tab") html = html.replace(/<div id="[^"]*" role="tabpanel"[^>]*>[^<]*<\/div>/g, "");
    if (component === "button") {
      html = withLabel(html, label || "저장");
      if (!/data-break=/.test(html.split(">")[0])) html = html.replace('data-s1-component="button"', `data-s1-component="button" data-break="${mobile ? "mobile" : "pc"}"`);
    }
    seq += 1;
    return uniqueIds(html, `p${seq}`);
  }
  async function piece(component, size, label) {
    const html = await markup(component, size, label);
    if (!html) return "";
    const height = heightOf(scope, component, size, platform);
    return `<figure class="piece"><div class="slot">${html}</div><figcaption>${escape(ko(component))} <code>${escape(size)}</code>${height ? ` · ${height}` : ""}</figcaption></figure>`;
  }

  /* 자리마다 보여 줄 대표 부품 */
  const SHOW = { control: ["input", "select", "date-picker"], button: ["button"], chip: ["chip"], multi: ["multi-toggle"], tab: ["tab"] };
  const BUTTON_LABEL = { form: "저장", header: "등록", filter: "조회", popup: "확인" };

  async function tablePreview(rowSize, buttonSize) {
    const button = buttonSize ? await markup("button", buttonSize, "상세") : "상세";
    const rows = ["출입 기록 1", "출입 기록 2"].map((name) => `<tr data-s1-part="row"><td data-s1-part="cell">${name}</td><td data-s1-part="cell">정상</td><td data-s1-part="cell">${button}</td></tr>`).join("");
    return `<div data-s1-component="table" data-size="${rowSize}"><table data-s1-part="table"><thead><tr><th data-s1-part="header-cell" scope="col">항목</th><th data-s1-part="header-cell" scope="col">상태</th><th data-s1-part="header-cell" scope="col">관리</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  const columns = [];
  for (const [id, profile] of Object.entries(shown)) {
    if (mobile) {
      const pieces = [];
      for (const component of ["button", "input", "select", "chip", "filter-chip", "date-picker"]) {
        const size = profile.sizes[component]?.base;
        if (size) pieces.push(await piece(component, size));
      }
      columns.push(`<section class="col" data-s1-break="mobile">
  <header><h3>${escape(profile.label)}</h3><p>손가락 기준 ${scope.density.mobileHeight} 하나 · <code>--profile ${id}</code></p></header>
  <div class="row">${pieces.join("")}</div>
  <h4>바꿔 쓰는 것</h4><ul class="swap">${Object.entries(scope.density.mobileSubstitutes).map(([c, s]) => `<li><s>${escape(ko(c))}</s> → ${escape(s.use)}</li>`).join("")}<li><s>표</s> → 목록 줄(list-row)</li></ul>
</section>`);
      continue;
    }
    const blocks = [];
    for (const zone of ZONE_ORDER) {
      const picks = profile.sizes[zone];
      if (!picks) continue;
      let body;
      if (zone === "table") {
        body = `<div class="pv-table">${await tablePreview(profile.tableRow.list, picks.button)}</div><p class="note">줄 높이 ${heightOf(scope, "table", profile.tableRow.list, "pc")} (${escape(profile.tableRow.list)}) · 칸 안 버튼 ${heightOf(scope, "button", picks.button, "pc")} — 표 성격·열 수와 상관없이 같습니다</p>`;
      } else {
        const pieces = [];
        for (const [group, size] of Object.entries(picks)) {
          for (const component of SHOW[group] || []) pieces.push(await piece(component, size, group === "button" ? BUTTON_LABEL[zone] : undefined));
        }
        body = `<div class="row">${pieces.join("")}</div>`;
      }
      blocks.push(`<h4>${escape(scope.density.zones[zone].label)}</h4>${body}`);
    }
    columns.push(`<section class="col" data-s1-density="${profile.density}">
  <header><h3>${escape(profile.label)}</h3><p>${escape(profile.hint || "")} · <code>--profile ${id}</code></p></header>
  ${blocks.join("\n  ")}
  <h4>팝업 폭 (권장)</h4><p class="note">입력 팝업 ${WIDTH[profile.popupWidth.input]} · 표·목록 팝업 ${WIDTH[profile.popupWidth.list]}</p>
  <h4>GNB</h4><p class="note">${profile.gnb ? `높이 ${GNB[profile.gnb]}` : "아직 기준 없음"}</p>
</section>`);
  }

  let summary = "";
  if (!mobile) {
    const rows = [];
    for (const zone of ZONE_ORDER) {
      for (const group of Object.keys(scope.density.groups)) {
        if (!Object.values(shown).some((p) => p.sizes[zone]?.[group])) continue;
        const rep = scope.density.groups[group].components[0];
        rows.push(`<tr><th>${escape(scope.density.zones[zone].label)}</th><td>${escape(scope.density.groups[group].label)}</td>${Object.values(shown).map((p) => {
          const size = p.sizes[zone]?.[group];
          return `<td>${size ? `<b>${heightOf(scope, rep, size, "pc") ?? ""}</b> <small>${escape(size)}</small>` : "—"}</td>`;
        }).join("")}</tr>`);
      }
    }
    rows.push(`<tr><th>표</th><td>줄 높이</td>${Object.values(shown).map((p) => `<td><b>${heightOf(scope, "table", p.tableRow.list, "pc")}</b> <small>${escape(p.tableRow.list)}</small></td>`).join("")}</tr>`);
    summary = `<h2>한눈에 보기</h2><p class="sub">굵은 숫자가 높이(px)입니다. — 는 그 자리에 기준이 없다는 뜻입니다.</p>
<div class="scroll"><table class="sum"><thead><tr><th>자리</th><th>부품</th>${Object.values(shown).map((p) => `<th>${escape(p.label)}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>`;
  }

  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${mobile ? "모바일 크기 기준" : "PC 화면별 크기 기준"}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
<style>${await inlineCss(DIST)}</style>
<style>
  body { margin:0; padding:32px 16px 64px; background:var(--color-bg-level-0); color:var(--color-text-body-primary); font-family:Pretendard, -apple-system, "Malgun Gothic", sans-serif; font-size:var(--font-size-14); line-height:1.6; }
  .wrap { max-width:1480px; margin:0 auto; }
  h1 { font-size:var(--font-size-24); margin:0 0 var(--spacing-4); }
  .sub { color:var(--color-text-body-secondary); margin:0 0 var(--spacing-24); }
  .cols { display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:var(--spacing-16); align-items:start; }
  .col { border:1px solid var(--color-line-gray-subtle); border-radius:var(--radius-12); padding:var(--spacing-20); background:var(--color-bg-level-1); min-width:0; }
  .col header h3 { margin:0; font-size:var(--font-size-18); }
  .col header p { margin:var(--spacing-4) 0 var(--spacing-8); color:var(--color-text-body-secondary); font-size:var(--font-size-12); }
  h4 { font-size:var(--font-size-12); color:var(--color-text-body-secondary); margin:var(--spacing-20) 0 var(--spacing-8); font-weight:600; }
  .row { display:flex; flex-wrap:wrap; gap:var(--spacing-12); align-items:flex-start; }
  .piece { margin:0; min-width:0; }
  .slot { display:flex; align-items:center; min-height:var(--sizing-48); }
  .slot > [data-s1-component="input"], .slot > [data-s1-component="select"], .slot > [data-s1-component="date-picker"] { width:150px; }
  .pv-table { overflow-x:auto; }
  .note { margin:var(--spacing-4) 0 0; font-size:var(--font-size-12); color:var(--color-text-body-secondary); }
  figcaption { font-size:var(--font-size-12); color:var(--color-text-body-secondary); margin-top:var(--spacing-4); }
  .swap { margin:0; padding-left:var(--spacing-20); }
  .swap s { color:var(--color-text-body-secondary); }
  table.sum { width:100%; border-collapse:collapse; margin-top:var(--spacing-8); }
  table.sum th, table.sum td { text-align:left; padding:var(--spacing-8) var(--spacing-12); border-bottom:1px solid var(--color-line-gray-subtle); vertical-align:top; font-size:var(--font-size-14); font-variant-numeric:tabular-nums; }
  table.sum thead th { font-size:var(--font-size-12); color:var(--color-text-body-secondary); font-weight:500; }
  small { color:var(--color-text-body-secondary); font-size:var(--font-size-12); }
  h2 { font-size:var(--font-size-18); margin:var(--spacing-40) 0 var(--spacing-4); }
  code { font-size:var(--font-size-12); }
  .scroll { overflow-x:auto; }
</style></head>
<body><div class="wrap">
<h1>${mobile ? "모바일 크기 기준" : "PC 화면별 크기 기준"}</h1>
<p class="sub">${escape(Object.values(shown).map((p) => p.label).join(" / "))} — 화면마다 쓰는 부품 크기. 배포본 ${escape(manifest.version)} (${escape(manifest.releasedAt)}) 실제 부품으로 그렸습니다.</p>
<div class="cols">
${columns.join("\n")}
</div>
${summary}
</div></body></html>
`;
}
