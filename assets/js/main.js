/* ============================================================
   SW Design System Guide · main.js
   ============================================================ */

/* ── Site Map ── */
const SITE_NAV = [
  /* ── Guide ── */
  { type: 'label', text: 'Guide' },
  { type: 'item', id: 'policy', href: 'policy.html', rootHref: 'pages/policy.html', icon: '📋', text: 'Policy' },
  { type: 'item', id: 'install-prompt', href: 'install-prompt.html', rootHref: 'pages/install-prompt.html', icon: '⚡', text: 'Design Guide Download', status: 'ready' },
  { type: 'item', id: 'ux-writing', href: 'ux-writing.html', rootHref: 'pages/ux-writing.html', icon: '✍️', text: 'UX Writing Assistant', status: 'ready' },
  { type: 'item', id: 'foundation', href: 'foundation.html', rootHref: 'pages/foundation.html', icon: '🎨', text: 'Foundation Tokens', status: 'ready' },
  { type: 'item', id: 'semantic', href: 'semantic.html', rootHref: 'pages/semantic.html', icon: '🌗', text: 'Semantic Tokens', status: 'ready' },

  /* ── Source ── */
  { type: 'label', text: 'Source' },
  /* Layer Policy (2026-07-03 메뉴에서 숨김 — layer policy 가 아직 제대로 정리되지 않아 비노출.
     파일/route(pages/layer-policy.html)는 그대로 보존 → 직접 URL 접근 가능.
     다시 켜려면 아래 한 줄의 주석을 해제하면 됩니다.)
  { type: 'item', id: 'layer-policy', href: 'layer-policy.html', rootHref: 'pages/layer-policy.html', icon: '🗂', text: 'Layer Policy', status: 'ready' }, */
  { type: 'item', id: 'components-pc', href: 'components.html?platform=pc', rootHref: 'pages/components.html?platform=pc', icon: '🖥', text: 'PC Components', status: 'ready' },
  { type: 'item', id: 'components-mobile', href: 'components.html?platform=mobile', rootHref: 'pages/components.html?platform=mobile', icon: '📱', text: 'Mobile Components', status: 'ready' },
  { type: 'item', id: 'icons', href: 'icons.html', rootHref: 'pages/icons.html', icon: '✦', text: 'Icons', status: 'ready' },
  { type: 'item', id: 'patterns', href: 'patterns.html', rootHref: 'pages/patterns.html', icon: '📐', text: 'Patterns', status: 'ready' },

  /* ── System ── */
  { type: 'label', text: 'System' },
  { type: 'item', id: 'dashboard', href: 'dashboard.html', rootHref: 'pages/dashboard.html', icon: '🛡', text: 'Agent Team', status: 'ready' },
  { type: 'item', id: 'pipeline-status', href: 'pipeline-status.html', rootHref: 'pages/pipeline-status.html', icon: '🔗', text: '파이프라인 상태', status: 'new' },
  { type: 'item', id: 'update-management', href: 'update-management.html', rootHref: 'pages/update-management.html', icon: '🗂', text: '업데이트 관리', status: 'ready' },

  /* ── Harness Admin (2026-06-24 메뉴에서 숨김 — 파일/route 는 보존, 직접 URL 접근만 가능.
     river: 결과물 위주로만 봐서 관리 메뉴 7개 거의 안 봄 → 메뉴 비노출. 차후 정말 불필요한지 확인 후 삭제 결정.)
       harness-overview · registry-explorer · token-mapping · migration-board
       registry-health(System Status) · reports · legacy(Legacy Guide)
     ── Archive 페이지(ai-snippets·guide-md·md-review)는 2026-06-24 삭제됨 ── */
];

/* ── Sidebar Render ── */
// href 는 쿼리(?platform=pc)를 포함할 수 있다. 경로(파일명)가 맞고,
// href 에 쿼리가 있으면 현재 URL 의 쿼리 값까지 일치해야 활성으로 본다.
// (같은 components.html 을 PC/Mobile 두 메뉴가 공유하므로 필요)
function navItemMatches(item) {
  const path = window.location.pathname;
  const [fileHref] = (item.href || '').split('?');
  const [fileRoot] = (item.rootHref || '').split('?');
  const fileOk = (fileHref && path.endsWith(fileHref)) || (fileRoot && path.endsWith(fileRoot));
  if (!fileOk) return false;
  const q = (item.href || '').split('?')[1];
  if (!q) return true; // 쿼리 없는 일반 메뉴
  const want = new URLSearchParams(q);
  const cur = new URLSearchParams(window.location.search);
  for (const [k, v] of want) {
    const curVal = cur.get(k);
    if (curVal === null) {
      // URL 에 파라미터가 없으면(직접 방문 등) platform=pc 를 기본 활성으로
      if (!(k === 'platform' && v === 'pc')) return false;
    } else if (curVal !== v) {
      return false;
    }
  }
  return true;
}

function renderSidebar() {
  const isRoot = !window.location.pathname.includes('/pages/');

  // Pre-detect active group IDs so we don't collapse groups with active items
  const activeGroupIds = new Set();
  SITE_NAV.forEach(item => {
    if (item.type === 'item' && item.group) {
      if (navItemMatches(item)) {
        activeGroupIds.add(item.group);
      }
    }
  });

  const items = SITE_NAV.map(item => {
    if (item.type === 'label') {
      if (item.collapsible) {
        const collapsed = item.defaultCollapsed && !activeGroupIds.has(item.groupId);
        return `<button class="nav-group-toggle${collapsed ? ' is-collapsed' : ''}" data-group-id="${item.groupId}" onclick="toggleNavGroup('${item.groupId}', this)">
          <span>${item.text}</span>
          <svg class="nav-toggle-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>`;
      }
      return `<div class="nav-group-label">${item.text}</div>`;
    }

    const href = isRoot ? item.rootHref : item.href;
    const active = navItemMatches(item) ? 'active' : '';
    const badge = item.status === 'soon'
      ? `<span class="nav-badge">Soon</span>`
      : item.status === 'new'
      ? `<span class="nav-badge new">New</span>`
      : '';

    let groupAttrs = '';
    if (item.group) {
      const parentLabel = SITE_NAV.find(n => n.type === 'label' && n.groupId === item.group);
      const shouldHide = parentLabel?.defaultCollapsed && !activeGroupIds.has(item.group);
      groupAttrs = ` data-group="${item.group}"${shouldHide ? ' style="display:none"' : ''}`;
    }

    return `<a href="${href}" class="nav-item ${active}" data-id="${item.id}"${groupAttrs}>
      <span class="nav-icon">${item.icon}</span>
      <span class="nav-label">${item.text}</span>
      ${badge}
    </a>`;
  }).join('');

  return `
    <div class="sidebar-logo">
      <a href="${isRoot ? 'index.html' : '../index.html'}" class="logo-mark" style="text-decoration:none;color:inherit;display:flex;align-items:center;gap:8px;">
        <div class="logo-dot"></div>
        <span class="logo-title">S1 UX DESIGN GUIDE</span>
      </a>
      <div class="logo-version">UX Guide V2.4 · 2026</div>
    </div>
    <div class="sidebar-search">
      <div class="search-wrap">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input type="text" id="sidebar-search-input" placeholder="토큰, 색상 검색...">
      </div>
    </div>
    <nav class="sidebar-nav">${items}</nav>
    <div class="sidebar-footer">
v1.0.0 · Figma node 540:7663<br>
      <a href="https://www.figma.com/design/yE5UCFEbmXJBlYJWB24Lz2/" style="color:#0072ce" target="_blank">Figma 열기 ↗</a>
    </div>
  `;
}

/* ── Collapsible Nav Group ── */
function toggleNavGroup(groupId, btn) {
  const collapsed = btn.classList.toggle('is-collapsed');
  document.querySelectorAll(`.nav-item[data-group="${groupId}"]`).forEach(el => {
    el.style.display = collapsed ? 'none' : '';
  });
}

/* ── Mobile Toggle ── */
function initMobile() {
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!toggle || !sidebar) return;
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

/* ── Tabs ── */
function initTabs(root) {
  const el = root || document;
  el.querySelectorAll('.tabs-container').forEach(container => {
    const btns = container.querySelectorAll('.tab-btn');
    const panels = container.querySelectorAll('.tab-panel');
    if (btns.length === 0) return;
    function activate(idx) {
      btns.forEach((b, i) => b.classList.toggle('active', i === idx));
      panels.forEach((p, i) => p.classList.toggle('active', i === idx));
    }
    btns.forEach((btn, i) => btn.addEventListener('click', () => activate(i)));
    activate(0);
  });
}

/* ── Copy to Clipboard ── */
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 복사됨`;
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 1800);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}

function initCopyBtns(root) {
  (root || document).querySelectorAll('.copy-btn[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => copyText(btn.getAttribute('data-copy'), btn));
  });
}

/* ── Color Card (click to copy hex) ── */
function initColorCards(root) {
  (root || document).querySelectorAll('.color-card[data-hex]').forEach(card => {
    card.addEventListener('click', () => {
      const hex = card.getAttribute('data-hex');
      const cssVar = card.getAttribute('data-var') || hex;
      navigator.clipboard.writeText(cssVar).catch(() => {});
      card.classList.add('flashing');
      setTimeout(() => card.classList.remove('flashing'), 900);
    });
  });
}

/* ── Sidebar Search Index ── */
var SEARCH_INDEX = [
  // Pages
  { label: 'Foundation Tokens', sublabel: '색상·타이포·간격', type: 'page', page: 'foundation.html', keywords: 'foundation token color palette typography spacing radius border font' },
  { label: 'Semantic Tokens',   sublabel: '역할 기반 토큰',  type: 'page', page: 'semantic.html',   keywords: 'semantic token bg surface text border action status overlay icon form-control' },
  { label: 'PC Components',     sublabel: 'PC 컴포넌트 가이드 (Variables 정본)', type: 'page', page: 'components.html?platform=pc', keywords: 'component pc button checkbox radio toggle chip input select dropdown textarea datepicker table gnb pagination variables 컴포넌트 피씨' },
  { label: 'Mobile Components', sublabel: '모바일 컴포넌트 가이드 (Variables 정본)', type: 'page', page: 'components.html?platform=mobile', keywords: 'component mobile button checkbox radio toggle chip input select textarea datepicker timepicker bottom nav 모바일 컴포넌트 하단내비' },
  { label: 'Icons',             sublabel: '아이콘 818개',    type: 'page', page: 'icons.html',       keywords: 'icon svg 아이콘' },
  { label: 'Token Mapping',     sublabel: 'Figma ↔ CSS',    type: 'page', page: 'token-mapping.html', keywords: 'token mapping figma css 토큰 매핑' },
  { label: 'Reports',           sublabel: '리포트 목록',     type: 'page', page: 'reports.html',     keywords: 'report mvp 리포트' },

  // Components
  { label: 'Button',          sublabel: 'Components', type: 'component', page: 'components.html', anchor: 'button',      keywords: 'button primary secondary blue-line s1-btn 버튼' },
  { label: 'Checkbox',        sublabel: 'Components', type: 'component', page: 'components.html', anchor: 'checkbox',    keywords: 'checkbox s1-checkbox 체크박스' },
  { label: 'Radio',           sublabel: 'Components', type: 'component', page: 'components.html', anchor: 'radio',       keywords: 'radio s1-radio 라디오' },
  { label: 'Toggle',          sublabel: 'Components', type: 'component', page: 'components.html', anchor: 'toggle',      keywords: 'toggle switch s1-toggle 토글 스위치' },
  { label: 'Chip · FilterChip', sublabel: 'Components', type: 'component', page: 'components.html', anchor: 'chip',     keywords: 'chip filter filterchip s1-chip ds-filter-chip 칩 필터칩' },
  { label: 'Input',           sublabel: 'Components', type: 'component', page: 'components.html', anchor: 'input',       keywords: 'input text field s1-input 인풋 입력' },
  { label: 'Select',          sublabel: 'Components', type: 'component', page: 'components.html', anchor: 'select',      keywords: 'select s1-select 셀렉트' },
  { label: 'Textarea',        sublabel: 'Components', type: 'component', page: 'components.html', anchor: 'textarea',    keywords: 'textarea 텍스트에리어' },
  { label: 'Date Picker',     sublabel: 'Components', type: 'component', page: 'components.html', anchor: 'date-picker', keywords: 'date picker datepicker calendar 날짜 달력 데이트피커' },

  // Foundation tokens
  { label: '--color-gray-*',      sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'color gray grey 그레이 0 50 100 200 300 400 500 600 700 800 900' },
  { label: '--color-blue-*',      sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'color blue 블루 50 100 200 300 400 500' },
  { label: '--color-red-*',       sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'color red 레드 50 100 200 300 400 500' },
  { label: '--color-green-*',     sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'color green 그린 50 100 200 300 400 500' },
  { label: '--color-orange-*',    sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'color orange 오렌지 50 100 200 300 400 500' },
  { label: '--color-yellow-*',    sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'color yellow 옐로우 50 100 200 300 400 500' },
  { label: '--color-purple-*',    sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'color purple 퍼플 50 100 200 300 400 500' },
  { label: '--color-skyblue-*',   sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'color skyblue sky 스카이블루 50 100 200 300 400 500' },
  { label: '--color-gray-dark-*', sublabel: 'Foundation Dark', type: 'token', page: 'foundation.html', keywords: 'color gray dark 다크 dark mode 0 50 100 200 300 400 500 600 700 800 900' },
  { label: '--color-blue-dark-*', sublabel: 'Foundation Dark', type: 'token', page: 'foundation.html', keywords: 'color blue dark 다크 50 100 200 300 400 500' },
  { label: '--font-size-*',       sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'font size typography 타이포 폰트 10 12 14 16 18 20 24 32' },
  { label: '--font-weight-*',     sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'font weight bold medium regular 400 500 700' },
  { label: '--spacing-*',         sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'spacing gap padding margin 간격 2 4 8 12 16 20 24 28 32' },
  { label: '--radius-*',          sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'radius border-radius rounded 반경 0 2 4 6 8 10 12 16 20 full' },
  { label: '--border-width-*',    sublabel: 'Foundation', type: 'token', page: 'foundation.html', keywords: 'border width stroke 1px 2px' },

  // Semantic tokens
  { label: '--color-bg-*',           sublabel: 'Semantic', type: 'token', page: 'semantic.html', keywords: 'color bg background default subtle muted selected 배경' },
  { label: '--color-surface-*',      sublabel: 'Semantic', type: 'token', page: 'semantic.html', keywords: 'color surface default raised 서피스 카드 패널' },
  { label: '--color-text-*',         sublabel: 'Semantic', type: 'token', page: 'semantic.html', keywords: 'color text primary secondary caption disabled placeholder 텍스트' },
  { label: '--color-border-*',       sublabel: 'Semantic', type: 'token', page: 'semantic.html', keywords: 'color border default subtle strong emphasis focus disabled 보더 테두리' },
  { label: '--color-action-*',       sublabel: 'Semantic', type: 'token', page: 'semantic.html', keywords: 'color action primary secondary hover pressed 액션 인터랙션' },
  { label: '--color-status-*',       sublabel: 'Semantic', type: 'token', page: 'semantic.html', keywords: 'color status success error warning info correct 상태 피드백' },
  { label: '--color-icon-*',         sublabel: 'Semantic', type: 'token', page: 'semantic.html', keywords: 'color icon default muted emphasis 아이콘' },
  { label: '--color-overlay-*',      sublabel: 'Semantic', type: 'token', page: 'semantic.html', keywords: 'color overlay dim backdrop 오버레이 딤' },
  { label: '--color-form-control-*', sublabel: 'Semantic', type: 'token', page: 'semantic.html', keywords: 'color form control input bg border text label 폼 컨트롤' },

  // Component tokens
  { label: '--button-*',          sublabel: 'Component Token', type: 'token', page: 'components.html', anchor: 'button',      keywords: 'button primary secondary blue-line hover pressed disabled bg border text 버튼 토큰' },
  { label: '--checkbox-*',        sublabel: 'Component Token', type: 'token', page: 'components.html', anchor: 'checkbox',    keywords: 'checkbox bg border icon selected disabled 체크박스 토큰' },
  { label: '--radio-*',           sublabel: 'Component Token', type: 'token', page: 'components.html', anchor: 'radio',       keywords: 'radio border dot selected disabled 라디오 토큰' },
  { label: '--toggle-*',          sublabel: 'Component Token', type: 'token', page: 'components.html', anchor: 'toggle',      keywords: 'toggle on off bg knob disabled 토글 토큰' },
  { label: '--chip-line-* / --chip-solid-*', sublabel: 'Component Token', type: 'token', page: 'components.html', anchor: 'chip', keywords: 'chip line solid hover selected disabled bg border text 칩 토큰' },
  { label: '--input-*',           sublabel: 'Component Token', type: 'token', page: 'components.html', anchor: 'input',       keywords: 'input default focus error correct disabled bg border text 인풋 토큰' },
  { label: '--select-* / --dropdown-*', sublabel: 'Component Token', type: 'token', page: 'components.html', anchor: 'select', keywords: 'select dropdown bg border text 셀렉트 드롭다운 토큰' },
];

/* ── Sidebar Search ── */
function initSidebarSearch() {
  var input = document.getElementById('sidebar-search-input');
  if (!input) return;

  var sidebarSearch = input.closest('.sidebar-search');
  var dropdown = document.createElement('div');
  dropdown.className = 'search-results';
  sidebarSearch.appendChild(dropdown);

  var focusedIdx = -1;
  var currentResults = [];

  function getPageFilename() {
    var parts = window.location.pathname.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  function resolveHref(page, anchor) {
    var isRoot = !window.location.pathname.includes('/pages/');
    var base = isRoot ? 'pages/' + page : page;
    return anchor ? base + '#' + anchor : base;
  }

  function navigate(item) {
    input.value = '';
    closeDropdown();
    var currentPage = getPageFilename();
    if (currentPage === item.page) {
      if (item.anchor) {
        if (typeof showSection === 'function') {
          var btn = document.querySelector('.comp-nav-btn[onclick*="\'' + item.anchor + '\'"]');
          showSection(item.anchor, btn);
          setTimeout(function() {
            var el = document.getElementById(item.anchor);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 60);
        } else {
          var el = document.getElementById(item.anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.href = resolveHref(item.page, item.anchor);
    }
  }

  function closeDropdown() {
    dropdown.classList.remove('is-open');
    focusedIdx = -1;
    currentResults = [];
  }

  function updateFocus() {
    dropdown.querySelectorAll('.search-result-item').forEach(function(el, i) {
      el.classList.toggle('is-focused', i === focusedIdx);
      if (i === focusedIdx) el.scrollIntoView({ block: 'nearest' });
    });
  }

  function renderResults(results) {
    currentResults = results;
    if (!results.length) {
      dropdown.innerHTML = '<div class="search-no-results">검색 결과 없음</div>';
      dropdown.classList.add('is-open');
      return;
    }
    dropdown.innerHTML = results.map(function(item, i) {
      var bc = item.type === 'page' ? 'srb-page' : item.type === 'component' ? 'srb-component' : 'srb-token';
      var bt = item.type === 'page' ? 'Page' : item.type === 'component' ? 'Comp' : 'Token';
      return '<div class="search-result-item" data-idx="' + i + '">' +
        '<span class="search-result-badge ' + bc + '">' + bt + '</span>' +
        '<span class="search-result-label">' + item.label + '</span>' +
        '<span class="search-result-hint">' + item.sublabel + '</span>' +
        '</div>';
    }).join('');
    dropdown.classList.add('is-open');
    dropdown.querySelectorAll('.search-result-item').forEach(function(el) {
      el.addEventListener('mousedown', function(e) {
        e.preventDefault();
        navigate(results[parseInt(el.dataset.idx)]);
      });
    });
  }

  input.addEventListener('input', function() {
    var q = input.value.toLowerCase().trim();
    focusedIdx = -1;
    if (!q) { closeDropdown(); return; }
    var hits = SEARCH_INDEX.filter(function(item) {
      return item.label.toLowerCase().includes(q) || item.keywords.toLowerCase().includes(q);
    }).slice(0, 8);
    renderResults(hits);
  });

  input.addEventListener('keydown', function(e) {
    if (!dropdown.classList.contains('is-open')) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusedIdx = Math.min(focusedIdx + 1, currentResults.length - 1);
      updateFocus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusedIdx = Math.max(focusedIdx - 1, -1);
      updateFocus();
    } else if (e.key === 'Enter' && focusedIdx >= 0) {
      navigate(currentResults[focusedIdx]);
    } else if (e.key === 'Escape') {
      closeDropdown();
      input.blur();
    }
  });

  input.addEventListener('blur', function() {
    setTimeout(closeDropdown, 150);
  });
}

/* ── Filter Buttons ── */
function initFilterBtns() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-category]');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      cards.forEach(card => {
        card.style.display = (cat === 'all' || card.getAttribute('data-category') === cat) ? '' : 'none';
      });
    });
  });
}

/* ── Global Theme (localStorage 기반, 모든 페이지 공유) ── */
function setGlobalTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('sw-ds-theme', t);
  document.getElementById('global-btn-light')?.classList.toggle('active', t === 'light');
  document.getElementById('global-btn-dark')?.classList.toggle('active', t === 'dark');
  // components.html 자체 토글 버튼이 있으면 동기화
  document.getElementById('btnLight')?.classList.toggle('active', t === 'light');
  document.getElementById('btnDark')?.classList.toggle('active', t === 'dark');
}

function initGlobalTheme() {
  const saved = localStorage.getItem('sw-ds-theme') || 'light';
  setGlobalTheme(saved);
}

/* ── Semantic Theme Toggle ── */
function initThemeToggle() {
  const btns = document.querySelectorAll('[data-mode]');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mode');
      document.querySelectorAll('.semantic-swatch[data-light][data-dark]').forEach(swatch => {
        swatch.style.backgroundColor = mode === 'dark'
          ? swatch.getAttribute('data-dark')
          : swatch.getAttribute('data-light');
      });
      document.querySelectorAll('.ref-tag').forEach(tag => {
        tag.style.display = (tag.classList.contains(mode)) ? '' : 'none';
      });
    });
  });
}

/* ── Zoom (keyboard + wheel 기반, localStorage 영속) ── */
const ZOOM_STEPS = [50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200];
const ZOOM_KEY = 'sw-ds-zoom';

function getZoom() {
  return parseInt(localStorage.getItem(ZOOM_KEY) || '100', 10);
}

function applyZoom(level) {
  const clamped = Math.max(ZOOM_STEPS[0], Math.min(ZOOM_STEPS[ZOOM_STEPS.length - 1], level));
  document.documentElement.style.zoom = clamped + '%';
  localStorage.setItem(ZOOM_KEY, clamped);
}

function stepZoom(direction) {
  const cur = getZoom();
  const idx = ZOOM_STEPS.indexOf(cur);
  if (direction > 0) {
    const next = idx >= 0 && idx < ZOOM_STEPS.length - 1
      ? ZOOM_STEPS[idx + 1]
      : ZOOM_STEPS.find(s => s > cur) || ZOOM_STEPS[ZOOM_STEPS.length - 1];
    applyZoom(next);
  } else {
    const next = idx > 0
      ? ZOOM_STEPS[idx - 1]
      : [...ZOOM_STEPS].reverse().find(s => s < cur) || ZOOM_STEPS[0];
    applyZoom(next);
  }
}

function initZoom() {
  applyZoom(getZoom());

  // Ctrl/Cmd + 키보드 단축키 가로채기
  document.addEventListener('keydown', e => {
    if (!e.ctrlKey && !e.metaKey) return;
    if (e.key === '=' || e.key === '+') { e.preventDefault(); stepZoom(1); }
    else if (e.key === '-')            { e.preventDefault(); stepZoom(-1); }
    else if (e.key === '0')            { e.preventDefault(); applyZoom(100); }
  });

  // Ctrl + 마우스 휠 가로채기
  document.addEventListener('wheel', e => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    stepZoom(e.deltaY < 0 ? 1 : -1);
  }, { passive: false });
}

/* ── Init ── */
// 테마·줌을 DOMContentLoaded 이전에 적용해 flash 방지
(function() {
  const savedTheme = localStorage.getItem('sw-ds-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  const savedZoom = localStorage.getItem(ZOOM_KEY);
  if (savedZoom) document.documentElement.style.zoom = savedZoom + '%';
})();

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.innerHTML = renderSidebar();

  initGlobalTheme();
  initMobile();
  initTabs();
  initCopyBtns();
  initColorCards();
  initSidebarSearch();
  initFilterBtns();
  initThemeToggle();
  initZoom();
});

// bfcache(뒤로/앞으로) 복원 시에도 줌 재적용
window.addEventListener('pageshow', e => {
  if (e.persisted) applyZoom(getZoom());
});
