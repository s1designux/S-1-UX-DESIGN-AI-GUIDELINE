export const componentId = "pagination";
export const jsRequired = true;
const instances = new WeakMap();

/* 번호 창 크기 — 처음 마크업에 있던 번호 버튼 수(최대 6, registry: 한 블록에 번호 최대 6개)를 따른다.
   총 쪽수가 창보다 크면 현재 쪽이 속한 블록의 번호만 다시 그린다. */
const MAX_WINDOW = 6;

const pageButtons = (root) => [...root.querySelectorAll('[data-s1-part="page"]')];
function current(root) { return Number(root.dataset.page || root.querySelector('[aria-current="page"]')?.dataset.page || 1); }
function total(root) { return Number(root.dataset.totalPages || pageButtons(root).at(-1)?.dataset.page || 1); }

/* 현재 쪽이 속한 블록에 맞게 번호 버튼을 다시 맞춘다. 이미 맞으면 건드리지 않는다. */
function renderWindow(root, page, windowSize, template) {
  const pages = root.querySelector('[data-s1-part="pages"]');
  if (!pages || !template) return;
  const totalPages = total(root);
  const start = Math.floor((page - 1) / windowSize) * windowSize + 1;
  const end = Math.min(totalPages, start + windowSize - 1);
  const wanted = [];
  for (let number = start; number <= end; number += 1) wanted.push(number);
  const have = pageButtons(root).map((button) => Number(button.dataset.page));
  if (have.length === wanted.length && have.every((number, index) => number === wanted[index])) return;
  const fragment = document.createDocumentFragment();
  for (const number of wanted) {
    const button = template.cloneNode(false);
    button.removeAttribute("aria-current");
    button.removeAttribute("aria-label");
    button.dataset.page = String(number);
    button.textContent = String(number);
    fragment.appendChild(button);
  }
  pages.replaceChildren(fragment);
}

/* 네 버튼 — |<(first)=이전 묶음 · <(previous)=이전 쪽 · >(next)=다음 쪽 · >|(last)=다음 묶음.
   묶음 이동은 이전/다음 묶음의 첫 쪽으로 가고(component-behavior.pc.json Pagination), 첫/마지막 묶음에서는 막힌다.
   data-s1-action 이름(first·last)은 기존 마크업과 맞추려고 그대로 쓴다. */
const blockOf = (page, windowSize) => Math.floor((page - 1) / windowSize);
const BLOCK_LABELS = { first: "이전 페이지 묶음", last: "다음 페이지 묶음" };
const LEGACY_LABELS = new Set(["", "첫 페이지", "마지막 페이지"]);

/** 네 버튼의 막힘 상태 — 화면 동작(setPage)과 안내 화면이 같은 계산을 쓰도록 순수 함수로 내보낸다.
 *  |<(first)·>|(last) 는 첫/마지막 묶음에서, <(previous)·>(next) 는 첫/마지막 쪽에서 막힌다. */
export function navState(page, totalPages, windowSize = MAX_WINDOW) {
  const lastBlock = Math.max(1, Math.ceil(totalPages / windowSize)) - 1;
  const block = blockOf(page, windowSize);
  return { first: block <= 0, previous: page <= 1, next: page >= totalPages, last: block >= lastBlock };
}

function setPage(root, page, windowSize, template) {
  const next = Math.max(1, Math.min(total(root), Number(page) || 1));
  const focusWasInside = root.contains(document.activeElement) && document.activeElement !== root;
  root.dataset.page = String(next);
  renderWindow(root, next, windowSize, template);
  for (const button of pageButtons(root)) {
    const selected = Number(button.dataset.page) === next;
    button.toggleAttribute("aria-current", selected);
    if (selected) button.setAttribute("aria-current", "page");
    button.setAttribute("aria-label", selected ? `${button.dataset.page}페이지, 현재 페이지` : `${button.dataset.page}페이지`);
  }
  const blocked = navState(next, total(root), windowSize);
  for (const button of root.querySelectorAll("[data-s1-action]")) {
    const action = button.dataset.s1Action;
    if (action in blocked) button.disabled = blocked[action];
    if (BLOCK_LABELS[action] && LEGACY_LABELS.has((button.getAttribute("aria-label") ?? "").trim())) button.setAttribute("aria-label", BLOCK_LABELS[action]);
  }
  /* 눌러서 막힌 버튼·다시 그려진 번호 버튼에 있던 초점이 body 로 떨어지지 않게 현재 쪽 버튼으로 옮긴다. */
  if (focusWasInside && !root.contains(document.activeElement)) root.querySelector('[aria-current="page"]')?.focus();
  else if (focusWasInside && document.activeElement?.disabled) root.querySelector('[aria-current="page"]')?.focus();
  root.dispatchEvent(new CustomEvent("s1:pagination:change", { bubbles: true, detail: { page: next, totalPages: total(root) } }));
}

export function init(root) {
  if (!(root instanceof Element) || root.dataset.s1Component !== componentId) return null;
  if (instances.has(root)) return instances.get(root);
  const initialButtons = pageButtons(root);
  const windowSize = Math.max(1, Math.min(MAX_WINDOW, initialButtons.length || MAX_WINDOW));
  const template = initialButtons[0] ? initialButtons[0].cloneNode(false) : null;
  const go = (page) => setPage(root, page, windowSize, template);
  const onClick = (event) => {
    const button = event.target.closest("button");
    if (!button || !root.contains(button) || button.disabled) return;
    const action = button.dataset.s1Action;
    const now = current(root);
    if (button.dataset.page) go(button.dataset.page);
    else if (action === "first") go((blockOf(now, windowSize) - 1) * windowSize + 1);
    else if (action === "previous") go(now - 1);
    else if (action === "next") go(now + 1);
    else if (action === "last") go((blockOf(now, windowSize) + 1) * windowSize + 1);
  };
  root.addEventListener("click", onClick);
  go(current(root));
  const api = Object.freeze({
    get page() { return current(root); },
    get totalPages() { return total(root); },
    setPage: (page) => go(page),
    /* 총 쪽수만 바꿔 주면 번호 창을 다시 그리고 현재 쪽 표시를 유지한다(현재 쪽이 넘치면 마지막 쪽으로). */
    setTotalPages(count) {
      root.dataset.totalPages = String(Math.max(1, Number(count) || 1));
      go(current(root));
    },
    destroy() { root.removeEventListener("click", onClick); instances.delete(root); }
  });
  instances.set(root, api);
  return api;
}
export function destroy(root) { instances.get(root)?.destroy(); }
export const runtime = Object.freeze({ init, destroy });
