/* S1 UI — React Native 동작(controller).
 *
 * 승인 배포본의 동작(components/*.js)과 `platform/behavior.json` 원장이 정한 상태 전이를 RN 으로 옮긴 것이다.
 * 웹은 DOM 속성(aria-selected · aria-expanded · hidden …)을 바꿔 가며 CSS 가 모양을 정한다.
 * 여기서도 같은 속성을 "상태"로 들고, 엔진이 그 속성으로 표를 읽어 모양을 고른다 — 모양을 따로 계산하지 않는다.
 *
 * controller = { bind(part, at, ctx) → { a, onPress, children, props, p } }
 *   a         그 요소의 속성을 덮어쓴다(undefined 는 지움)
 *   onPress   눌렀을 때
 *   children  내용을 갈아끼운다(선택한 값의 글자 등)
 *   props     RN 요소에 붙는 속성
 *   p         안에 들어간 부품에게 주는 prop
 * 키보드 조작(화살표·Home·End·Esc)은 터치 화면에 없으므로 옮기지 않았다 — 웹(react-native-web)에서는 포커스·Enter/Space 가 Pressable 로 동작한다.
 */
import { Children, useCallback, useEffect, useMemo, useRef, useState } from "react";

const NONE = undefined;
const isTrue = (value) => value === true || value === "true";

/** 값을 주면 제어, 안 주면 안에서 들고 있는다. */
function useControlled(value, initial) {
  const [inner, setInner] = useState(initial);
  const controlled = value !== undefined;
  const current = controlled ? value : inner;
  const set = useCallback((next) => { if (!controlled) setInner(next); }, [controlled]);
  return [current, set];
}

const textOf = (children) => {
  let out = "";
  Children.forEach(children, (child) => { if (typeof child === "string" || typeof child === "number") out += String(child); });
  return out;
};

/* ── 1. 켜고 끄기 (chip · toggle) ──────────────────────────────────── */

function useToggle(config, props) {
  /* 웹처럼 루트에 aria-pressed="true" 같은 속성을 직접 준 경우도 처음 상태로 받는다.
     값이 true/false 글자가 아닌 속성(data-state=selected)은 "켜짐 값"과 같은지로 읽는다. */
  const given = props.rest?.[config.attr];
  const givenOn = given === undefined ? undefined : config.values ? given === config.values[0] : isTrue(given);
  const [on, setOn] = useControlled(props.value, props.defaultValue ?? (givenOn !== undefined ? givenOn : config.initial));
  /* 비활성은 어떤 경우에도 덮어쓰지 않는다 — disabled 속성·aria-disabled·data-state=disabled 어느 쪽이든 줄은 비활성 모양 그대로이고 눌러도 반응하지 않는다(웹과 같다). */
  const rest = props.rest ?? {};
  const disabled = Boolean(props.disabled) || isTrue(rest["aria-disabled"]) || rest["data-state"] === "disabled" || rest.disabled === true || rest.disabled === "";
  const controlled = props.value !== undefined;
  /* 손잡이는 매번 새로 오니 ref 로 들고 있는다 — useMemo 가 낡은 함수를 붙들지 않게 */
  const latest = useRef(props);
  latest.current = props;
  const selectable = Boolean(config.values || config.also);
  const shown = config.values ? (on ? config.values[0] : config.values[1]) : String(on);
  return useMemo(() => ({
    /** 지금 켜짐 여부를 속성 값으로 — 템플릿을 고르는 부품(시트 줄)이 읽는다. 비활성이면 disabled, 이 유형이 고르지 않으면 undefined */
    state: !config.attr ? undefined : disabled ? "disabled" : shown,
    bind(part, at, ctx) {
      if (!ctx.isRoot) return NONE;
      /* 고르지 않는 유형(config 없음 — 시트 줄의 List·Checkbox)이거나 비활성이면 속성도 눌림도 주지 않는다. */
      if (!config.attr || (disabled && config.attr === "data-state")) return NONE;
      /* config.values: 켜짐·꺼짐 값이 true/false 글자가 아닌 속성(예: data-state=selected|default). config.also: 함께 맞출 속성. */
      const also = Object.fromEntries(Object.entries(config.also ?? {}).map(([name, pair]) => [name, on ? pair[0] : pair[1]]));
      return {
        a: { [config.attr]: shown, ...also },
        onPress: () => {
          if (disabled) return;
          /* 선택형(탭·시트 줄)은 켜진 것을 다시 눌러도 꺼지지 않는다 — 웹 런타임과 같다. */
          if (selectable && on) return;
          const next = !on;
          const now = latest.current;
          /* 웹의 beforechange 와 같다: onBeforechange(event) 에서 event.preventDefault() 하면 아무것도 바뀌지 않는다.
             event = { detail: { selected, value }, preventDefault(), defaultPrevented } */
          let prevented = false;
          const detail = { selected: next, value: now.rest?.["data-value"] };
          const event = { detail, preventDefault() { prevented = true; }, get defaultPrevented() { return prevented; } };
          now.onBeforechange?.(event);
          if (prevented) return;
          setOn(next);
          now.onChange?.(next);                 // onSelectedChange(selected) — 제어형이면 화면이 값을 바꿔야 모양이 바뀐다
          /* 웹의 change 는 모양이 실제로 바뀐 뒤에 난다 — 제어형에서는 화면이 값을 바꾸기 전이라 내지 않는다(웹 껍데기와 같다). */
          if (!controlled) now.onAfterchange?.({ detail });
        }
      };
    }
  }), [on, disabled, config.attr, shown, controlled, selectable]);
}

/* ── 2. 하나 고르기 (tab · multi-toggle · dropdown · 페이지) ───────── */

function useSelectOne(config, props) {
  const [selected, setSelected] = useControlled(props.value, props.defaultValue ?? config.initial);
  const registry = useRef({ controls: {}, values: {}, labels: {} });
  const reg = registry.current;
  const valueAt = (index, a) => a["data-value"] ?? index;
  const isSelected = (index, a) => (typeof selected === "number" ? selected === index : String(selected) === String(valueAt(index, a)));
  const disabledGroup = Boolean(props.disabled);

  return useMemo(() => ({
    bind(part, at, ctx) {
      const { a } = ctx;
      if (part === config.itemPart && at !== undefined) {
        const index = at[0];
        reg.values[index] = valueAt(index, a);
        reg.controls[index] = a["aria-controls"];
        const on = isSelected(index, a);
        const off = disabledGroup || isTrue(a["aria-disabled"]) || a.disabled !== undefined;
        return {
          a: { [config.attr]: String(on), ...(config.currentAttr ? { [config.currentAttr]: on ? "page" : undefined } : {}) },
          onPress: () => {
            if (off) return;
            setSelected(index);
            props.onChange?.({ index, value: valueAt(index, a), label: reg.labels[index] });
          }
        };
      }
      /* 칸 안의 글자 — 고른 값을 알릴 때 쓴다 */
      if (config.labelPart !== undefined && part === config.labelPart) {
        const parent = ctx.up(config.itemPart);
        if (parent?.at) reg.labels[parent.at[0]] = textOf(ctx.children);
        return NONE;
      }
      /* 탭 내용 — 고른 탭이 가리키는 것만 보인다 */
      if (config.panelRole && a.role === config.panelRole) {
        const selectedIndex = Object.keys(reg.values).map(Number).find((index) => isSelected(index, { "data-value": reg.values[index] }));
        const visible = selectedIndex !== undefined && reg.controls[selectedIndex] === a.id;
        return { a: { hidden: visible ? undefined : "" } };
      }
      return NONE;
    }
  }), [selected, disabledGroup, props.onChange]);
}

/* ── 3. 드롭다운(글자 하나 고르기 · 체크박스 여럿 고르기) ─────────── */

function useDropdown(config, props) {
  const text = config.type !== "checkbox";
  const [selected, setSelected] = useControlled(text ? props.value : props.value, props.defaultValue ?? config.initial);
  const registry = useRef({ labels: {}, values: {} });
  const reg = registry.current;
  const valueAt = (index, a) => a["data-value"] ?? index;

  return useMemo(() => ({
    bind(part, at, ctx) {
      const { a } = ctx;
      if (part === "option" && at !== undefined) {
        const index = at[0];
        const value = valueAt(index, a);
        reg.values[index] = value;
        if (text) {
          const on = selected === value || (typeof selected === "number" && selected === index);
          return {
            a: { "aria-selected": String(on) },
            onPress: () => { setSelected(value); props.onChange?.({ type: "text", index, value, label: reg.labels[index] }); }
          };
        }
        const checkedSet = new Set(selected ?? []);
        const on = checkedSet.has(value);
        return {
          a: { "aria-checked": String(on) },
          onPress: () => {
            const next = new Set(checkedSet);
            if (on) next.delete(value); else next.add(value);
            const list = [...next];
            setSelected(list);
            props.onChange?.({ type: "checkbox", value, checked: !on, selectAll: false, values: list });
          }
        };
      }
      if (!text && part === "option" && at === undefined) {
        /* 「전체」 줄(반복 목록 밖의 첫 줄) — 켜져 있으면 전체 끄기, 아니면 전체 켜기.
           나머지 줄의 값은 그려지면서 등록된다(처음 한 번은 예제의 값으로 대신한다). */
        const known = () => (Object.keys(reg.values).length > 0 ? Object.values(reg.values) : (config.values ?? []));
        const others = known();
        const checkedSet = new Set(selected ?? []);
        const all = others.length > 0 && others.every((value) => checkedSet.has(value));
        return {
          a: { "aria-checked": String(all) },
          onPress: () => {
            const next = all ? [] : [...known()];
            setSelected(next);
            props.onChange?.({ type: "checkbox", value: a["data-value"] ?? "all", checked: !all, selectAll: true, values: next });
          }
        };
      }
      if (part === "option-label") {
        const parent = ctx.up("option");
        if (parent?.at) reg.labels[parent.at[0]] = textOf(ctx.children);
        return NONE;
      }
      /* 체크박스형 옵션 안의 체크박스 — 옵션이 정한 상태를 따른다 */
      if (!text && ctx.nested === "checkbox") {
        const option = ctx.up("option");
        if (!option) return NONE;
        const checkedSet = new Set(selected ?? []);
        if (option.at === undefined) {
          const others = Object.keys(reg.values).length > 0 ? Object.values(reg.values) : (config.values ?? []);
          return { p: { checked: others.length > 0 && others.every((value) => checkedSet.has(value)) } };
        }
        return { p: { checked: checkedSet.has(valueAt(option.at[0], option.a)) } };
      }
      return NONE;
    }
  }), [selected, props.onChange]);
}

/* ── 4. 열고 닫기 — 펼침 카드 · 사이드 메뉴 · 상단바 ──────────────── */

function useDisclosure(config, props) {
  const [open, setOpen] = useControlled(props.open, props.defaultOpen ?? config.initial);
  return useMemo(() => ({
    bind(part, at, ctx) {
      if (part === config.headerPart) {
        return {
          a: { "aria-expanded": String(open) },
          onPress: () => { const next = !open; setOpen(next); props.onChange?.({ open: next }); }
        };
      }
      if (part === config.targetPart) return { a: { [config.targetAttr]: open ? "true" : undefined } };
      return NONE;
    }
  }), [open, props.onChange]);
}

/** 사이드 메뉴(LNB) — 하위 목록 여닫기 + 접기 */
function useSideMenu(config, props) {
  const [collapsed, setCollapsed] = useControlled(props.collapsed, props.defaultCollapsed ?? config.collapsed);
  const [openIds, setOpenIds] = useState(config.openIds);
  const known = useRef(new Set());
  return useMemo(() => ({
    bind(part, at, ctx) {
      const { a } = ctx;
      if (ctx.isRoot) return { a: { "data-state": collapsed ? "collapsed" : "expanded" } };
      if (part === "collapse") {
        return { a: { "aria-pressed": String(collapsed) }, onPress: () => { const next = !collapsed; setCollapsed(next); props.onCollapse?.({ collapsed: next }); } };
      }
      if (a["aria-controls"] !== undefined && a["aria-expanded"] !== undefined) {
        const id = a["aria-controls"];
        known.current.add(id);
        const open = openIds.includes(id);
        return {
          a: { "aria-expanded": String(open) },
          onPress: () => {
            setOpenIds(open ? openIds.filter((one) => one !== id) : [...openIds, id]);
            props.onToggle?.({ id, expanded: !open });
          }
        };
      }
      if (a.id !== undefined && known.current.has(a.id)) return { a: { hidden: openIds.includes(a.id) ? undefined : "" } };
      return NONE;
    }
  }), [collapsed, openIds, props.onCollapse, props.onToggle]);
}

/** 상단바(GNB) — 하위 메뉴를 가진 메뉴는 한 번에 하나만 펼친다 */
function useTopBar(config, props) {
  const [openId, setOpenId] = useControlled(props.openId, props.defaultOpenId ?? null);
  return useMemo(() => ({
    bind(part, at, ctx) {
      const { a } = ctx;
      if (part === "menu" && a["aria-controls"] !== undefined) {
        const id = a["aria-controls"];
        const open = openId === id;
        return {
          a: { "aria-expanded": String(open) },
          onPress: () => {
            const next = open ? null : id;
            setOpenId(next);
            if (next === null) props.onClose?.({ id }); else props.onOpen?.({ id });
          }
        };
      }
      return NONE;
    }
  }), [openId, props.onOpen, props.onClose]);
}

/* ── 5. 겹침 — 모달 · 바텀시트 ──────────────────────────────────────── */

function useOverlay(config, props) {
  return useMemo(() => ({
    bind(part, at, ctx) {
      if (ctx.isRoot) return { props: { onRequestClose: () => props.onClose?.({ reason: "request" }) } };
      if (config.closeParts.includes(part)) return { onPress: () => props.onClose?.({ reason: part }) };
      /* 아래쪽 단추(취소·확인·적용) — 안에 들어간 button 부품 */
      if (ctx.nested === "button") {
        const secondary = ctx.a["data-variant"] === "secondary";
        const handler = secondary ? (props.onCancel ?? (() => props.onClose?.({ reason: "cancel" }))) : props.onConfirm;
        return handler ? { p: { onPress: handler } } : NONE;
      }
      return NONE;
    }
  }), [props.onClose, props.onCancel, props.onConfirm]);
}

/* ── 6. 팝업 — 셀렉트 · 필터 칩 ─────────────────────────────────────── */

function usePopup(config, props) {
  const [open, setOpen] = useControlled(props.open, props.defaultOpen ?? false);
  const [chosen, setChosen] = useControlled(props.value, props.defaultValue);
  const disabled = Boolean(props.disabled);
  const close = () => { if (props.open === undefined) setOpen(false); props.onClose?.({}); };
  return useMemo(() => ({
    bind(part, at, ctx) {
      if (part === "trigger") {
        return {
          a: { "aria-expanded": String(open), ...(chosen !== undefined ? { [config.filledAttr]: "true" } : {}) },
          onPress: () => {
            if (disabled) return;
            const next = !open;
            setOpen(next);
            if (next) props.onOpen?.({}); else props.onClose?.({});
          }
        };
      }
      if (part === "value" && chosen !== undefined && chosen.label !== undefined) return { children: chosen.label };
      if (part === "panel") return { a: { hidden: open ? undefined : "" } };
      if (ctx.nested === "dropdown") {
        return {
          p: {
            ...(props.options !== undefined ? { options: props.options } : {}),
            value: chosen?.value ?? config.initialValue ?? null,
            onChange: (detail) => {
              if (detail.type !== "text") return;
              setChosen({ value: detail.value, label: detail.label });
              props.onChange?.({ value: detail.value, label: detail.label, index: detail.index });
              close();
            }
          }
        };
      }
      return NONE;
    }
  }), [open, chosen, disabled, props.options, props.onChange, props.onOpen, props.onClose]);
}

/* ── 7. 입력창 — 지우기 · 비밀번호 보기 · 검색 ─────────────────────── */

function useInput(config, props) {
  const [text, setText] = useControlled(props.value, props.defaultValue ?? "");
  const [focused, setFocused] = useState(false);
  const [reveal, setReveal] = useState(false);
  const editable = !props.disabled && !props.readOnly;
  const search = config.mode === "search";
  const showClear = editable && text.length > 0 && (search || focused);

  const ctl = useMemo(() => ({
    value: text,
    onChangeText: (next) => { setText(next); props.onChangeText?.(next); },
    onFocus: (event) => { setFocused(true); props.onFocus?.(event); },
    onBlur: (event) => { setFocused(false); props.onBlur?.(event); },
    onSubmitEditing: search ? () => props.onSearch?.({ value: text }) : undefined,
    reveal
  }), [text, reveal, search, props.onChangeText, props.onFocus, props.onBlur, props.onSearch]);

  const controller = useMemo(() => ({
    bind(part, at, ctx) {
      if (part !== "action") return NONE;
      const action = ctx.a["data-action"];
      if (action === "clear") {
        return {
          a: { hidden: showClear ? undefined : "" },
          onPress: () => { setText(""); props.onChangeText?.(""); props.onClear?.({ value: "" }); props.inputRef?.current?.focus?.(); }
        };
      }
      if (action === "password") {
        return { a: { "aria-pressed": String(reveal), "aria-label": reveal ? "비밀번호 숨기기" : "비밀번호 보기" }, onPress: () => setReveal(!reveal) };
      }
      if (action === "search") return { onPress: () => props.onSearch?.({ value: text }) };
      return NONE;
    }
  }), [showClear, reveal, text, props.onClear, props.onSearch, props.onChangeText]);
  return { ...controller, ctl };
}

/* ── 8. 페이지 ───────────────────────────────────────────────────────── */

function usePagination(config, props) {
  const total = props.totalPages ?? config.total;
  const [page, setPage] = useControlled(props.page, props.defaultPage ?? config.initial);
  const go = (next) => {
    const value = Math.max(1, Math.min(total, next));
    setPage(value);
    props.onChange?.({ page: value, totalPages: total });
  };
  return useMemo(() => ({
    bind(part, at, ctx) {
      const { a } = ctx;
      if (part === "page") {
        const number = Number(a["data-page"]);
        const on = number === page;
        return {
          a: { "aria-current": on ? "page" : undefined, "aria-label": on ? `${number}페이지, 현재 페이지` : `${number}페이지` },
          onPress: () => go(number)
        };
      }
      const action = a["data-s1-action"];
      if (action !== undefined) {
        /* |<(first)=이전 묶음의 첫 쪽 · <(previous)=한 쪽 뒤 · >(next)=한 쪽 앞 · >|(last)=다음 묶음의 첫 쪽.
           묶음은 번호 최대 6개(config.block). 첫 묶음에서 |<, 마지막 묶음에서 >| 는 막힌다(웹 pagination.js 와 같은 규칙). */
        const block = config.block ?? 6;
        const blockIndex = Math.floor((page - 1) / block);
        const lastBlock = Math.max(0, Math.ceil(total / block) - 1);
        const blocked = action === "first" ? blockIndex <= 0 : action === "previous" ? page <= 1 : action === "next" ? page >= total : blockIndex >= lastBlock;
        const target = action === "first" ? (blockIndex - 1) * block + 1 : action === "previous" ? page - 1 : action === "next" ? page + 1 : (blockIndex + 1) * block + 1;
        return { a: { disabled: blocked ? "" : undefined }, onPress: () => { if (!blocked) go(target); } };
      }
      return NONE;
    }
  }), [page, total, props.onChange]);
}

/* ── 9. 표 — 행 선택 ─────────────────────────────────────────────────── */

function useTable(config, props) {
  const [selection, setSelection] = useControlled(props.selection, props.defaultSelection ?? []);
  const total = useRef(0);
  const change = (next) => {
    setSelection(next);
    props.onSelectionChange?.({ selected: next, selectedCount: next.length, totalCount: total.current });
  };
  return useMemo(() => ({
    bind(part, at, ctx) {
      if (part === "row" && at !== undefined) {
        total.current = at[1];
        return { a: { "data-selected": selection.includes(at[0]) ? "true" : "false" } };
      }
      if (ctx.nested === "checkbox") {
        const row = ctx.up("row");
        if (row?.at) {
          const index = row.at[0];
          const on = selection.includes(index);
          return { p: { checked: on, onCheckedChange: () => change(on ? selection.filter((one) => one !== index) : [...selection, index].sort((x, y) => x - y)) } };
        }
        if (ctx.up("header-cell")) {
          const count = total.current;
          const all = count > 0 && selection.length === count;
          return { p: { checked: all, onCheckedChange: () => change(all ? [] : Array.from({ length: count }, (_, index) => index)) } };
        }
      }
      return NONE;
    }
  }), [selection, props.onSelectionChange]);
}

/* ── 10. 목록 줄 — 체크·스위치가 들어간 줄 ──────────────────────────── */

function useRowControl(config, props) {
  const [checked, setChecked] = useControlled(props.checked, props.defaultChecked ?? config.initial);
  const disabled = Boolean(props.disabled);
  const toggle = (next = !checked) => { if (disabled) return; setChecked(next); props.onCheckedChange?.(next); };
  return useMemo(() => ({
    bind(part, at, ctx) {
      if (ctx.isRoot && config.rootPress) return { onPress: () => toggle() };
      if (ctx.nested === "checkbox" || ctx.nested === "toggle") return { p: { checked, onCheckedChange: toggle } };
      if (part === "open") return { onPress: () => props.onOpen?.({}) };
      return NONE;
    }
  }), [checked, disabled, props.onCheckedChange, props.onOpen]);
}

/* ── 11. 날짜 고르기 ─────────────────────────────────────────────────── */

const WEEKDAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"];   // 일요일 시작(river 결정, CU-1)
const MONTH_LABELS = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
const pad2 = (n) => String(n).padStart(2, "0");
const toISO = (date) => `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
const parseISO = (value) => {
  if (!value) return null;
  if (value instanceof Date) return value;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value).trim());
  if (!m) return null;
  const date = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isNaN(date.getTime()) ? null : date;
};
/* 표시는 정본 트리거 그대로 YY.MM.DD, 값 입출력은 YYYY-MM-DD */
const formatDisplay = (date) => `${pad2(date.getFullYear() % 100)}.${pad2(date.getMonth() + 1)}.${pad2(date.getDate())}`;
const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
const addMonths = (year, month, delta) => { const d = new Date(year, month + delta, 1); return { year: d.getFullYear(), month: d.getMonth() }; };

/** 5주×7일이 모자라면 6주까지 늘린다(배포본 buildMonthGrid 와 같다). */
function buildMonthGrid(year, month) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstWeekday; i += 1) {
    const { year: py, month: pm } = addMonths(year, month, -1);
    cells.push({ date: new Date(py, pm, daysInPrevMonth - firstWeekday + 1 + i), otherMonth: true });
  }
  for (let day = 1; day <= daysInMonth; day += 1) cells.push({ date: new Date(year, month, day), otherMonth: false });
  while (cells.length % 7 !== 0 || cells.length < 35) {
    const { year: ny, month: nm } = addMonths(year, month, 1);
    cells.push({ date: new Date(ny, nm, cells.length - (firstWeekday + daysInMonth) + 1), otherMonth: true });
  }
  return cells;
}

function useDatePicker(config, props) {
  const mode = props.variant === "range" ? "range" : props.variant === "single" ? "single" : config.mode;
  const today = useMemo(() => startOfDay(parseISO(props.today) ?? new Date()), [props.today]);
  const disabledSet = useMemo(() => new Set(props.disabledDates ?? []), [props.disabledDates]);
  const toSelection = (value) => (mode === "single" ? parseISO(value) : { start: parseISO(value?.start), end: parseISO(value?.end) });
  const [open, setOpen] = useControlled(props.open, false);
  const [sel, setSel] = useState(() => toSelection(props.value ?? props.defaultValue));
  const valueKey = JSON.stringify(props.value ?? null);
  useEffect(() => { if (props.value !== undefined) setSel(toSelection(props.value)); }, [valueKey]);
  const anchor = (mode === "single" ? sel : sel?.start) ?? today;
  const [view, setView] = useState("date");
  const [viewYear, setViewYear] = useState(anchor.getFullYear());
  const [viewMonth, setViewMonth] = useState(anchor.getMonth());
  const grid = useMemo(() => buildMonthGrid(viewYear, viewMonth), [viewYear, viewMonth]);
  const disabled = Boolean(props.disabled);

  const close = () => { setOpen(false); props.onClose?.({}); };
  const openPanel = () => {
    if (disabled || open) return;
    setView("date");
    const base = (mode === "single" ? sel : sel?.start) ?? null;
    if (base) { setViewYear(base.getFullYear()); setViewMonth(base.getMonth()); }
    setOpen(true);
    props.onOpen?.({});
  };
  const emitChange = (next) => {
    props.onChange?.(mode === "single"
      ? { value: next ? toISO(next) : null, mode }
      : { start: next?.start ? toISO(next.start) : null, end: next?.end ? toISO(next.end) : null, mode });
  };
  const goToMonth = (year, month) => { setViewYear(year); setViewMonth(month); };

  const selectDate = (date) => {
    const iso = toISO(date);
    if (disabledSet.has(iso)) return;
    if (mode === "single") { setSel(date); emitChange(date); close(); return; }
    const { start, end } = sel ?? {};
    let next;
    if (!start || end) next = { start: date, end: null };
    else if (iso < toISO(start)) next = { start: date, end: null };
    else if (iso === toISO(start)) next = { start: date, end: date };
    else next = { start, end: date };
    setSel(next);
    if (next.start && next.end) { emitChange(next); close(); }
  };

  const cellState = (day) => {
    const iso = toISO(day.date);
    const isDisabled = disabledSet.has(iso);
    let state = "default";
    let selected = false;
    let band = null;
    if (mode === "range") {
      const { start, end } = sel ?? {};
      const startISO = start ? toISO(start) : null;
      const endISO = end ? toISO(end) : null;
      if (startISO && iso === startISO && endISO && endISO !== startISO) { state = "today"; band = "start"; selected = true; }
      else if (endISO && iso === endISO && endISO !== startISO) { state = "selected"; band = "end"; selected = true; }
      else if (startISO && endISO && iso > startISO && iso < endISO) { state = isDisabled ? "range-disabled" : "range-mid"; band = "mid"; selected = true; }
      else if (startISO && iso === startISO) { state = "today"; selected = true; }
      else state = isDisabled ? "disabled" : "default";
    } else if (sel && iso === toISO(sel)) { state = "selected"; selected = true; }
    else if (toISO(today) === iso) state = "today";
    else state = isDisabled ? "disabled" : "default";
    return { iso, isDisabled, state, selected, band };
  };

  const text = useMemo(() => {
    if (mode === "single") return sel ? formatDisplay(sel) : (props.placeholder ?? undefined);
    const { start, end } = sel ?? {};
    if (start && end) return `${formatDisplay(start)} ~ ${formatDisplay(end)}`;
    if (start) return `${formatDisplay(start)} ~ `;
    return props.placeholder ?? undefined;
  }, [sel, props.placeholder]);
  const filled = mode === "single" ? Boolean(sel) : Boolean(sel?.start);

  const apply = () => {
    if (mode === "single" && !sel) return;
    if (mode === "range" && (!sel?.start || !sel?.end)) return;
    emitChange(sel);
    close();
  };

  return useMemo(() => ({
    bind(part, at, ctx) {
      const { a } = ctx;
      switch (part) {
        case "trigger":
          return { a: { "aria-expanded": String(open), "data-filled": String(filled) }, onPress: () => (open ? close() : openPanel()) };
        case "value": return text !== undefined ? { children: text } : NONE;
        case "panel": return { a: { hidden: open ? undefined : "", "data-view": view } };
        case "sheet": return { a: { hidden: open ? undefined : "" } };
        case "sheet-backdrop": case "sheet-close": return { onPress: close };
        case "calendar": return { a: { "data-view": view } };
        case "prev": case "next": {
          const delta = part === "prev" ? -1 : 1;
          return { onPress: () => {
            if (view === "date") { const m = addMonths(viewYear, viewMonth, delta); goToMonth(m.year, m.month); }
            else if (view === "month") setViewYear(viewYear + delta);
            else setViewYear(viewYear + delta * 12);
          } };
        }
        case "year-label": return { children: `${viewYear}년`, onPress: () => setView("year") };
        case "month-label": return { children: MONTH_LABELS[viewMonth], onPress: () => setView("month"), a: { hidden: view === "date" ? undefined : "" } };
        case "weekdays":
          return { a: { hidden: view === "date" ? undefined : "" }, repeat: WEEKDAY_LABELS.map((label, index) => ({ a: { "data-weekday": String(index) }, content: label })) };
        case "grid":
          if (a["data-tile-grid"] !== undefined) {
            return { a: { hidden: view === "date" ? "" : undefined, "data-tile-grid": view === "date" ? a["data-tile-grid"] : view }, repeat: Array.from({ length: 4 }, () => ({})) };
          }
          return { a: { hidden: view === "date" ? undefined : "" }, repeat: Array.from({ length: grid.length / 7 }, () => ({})) };
        case "week": {
          if (at === undefined) return NONE;
          return {
            repeat: grid.slice(at[0] * 7, at[0] * 7 + 7).map((day) => {
              const info = cellState(day);
              return {
                a: {
                  "data-date": info.iso,
                  "data-other-month": String(day.otherMonth),
                  "data-weekday": String(day.date.getDay()),
                  "data-state": info.state,
                  "data-range-band": info.band ?? undefined,
                  "aria-selected": String(info.selected),
                  "aria-disabled": info.isDisabled ? "true" : undefined,
                  disabled: info.isDisabled ? "" : undefined
                },
                onPress: () => {
                  if (info.isDisabled) return;
                  if (day.otherMonth) goToMonth(day.date.getFullYear(), day.date.getMonth());
                  selectDate(day.date);
                }
              };
            })
          };
        }
        case "cell-num": {
          const cell = ctx.up("cell");
          const iso = cell?.a["data-date"];
          return iso ? { children: String(Number(iso.slice(8, 10))) } : NONE;
        }
        case "tile-row": {
          if (at === undefined) return NONE;
          const kind = view === "year" ? "year" : "month";
          const items = kind === "year" ? Array.from({ length: 12 }, (_, i) => Math.floor(viewYear / 12) * 12 + i) : MONTH_LABELS.map((_, i) => i);
          return {
            repeat: items.slice(at[0] * 3, at[0] * 3 + 3).map((value) => ({
              a: { "data-value": String(value), "aria-selected": String(kind === "year" ? value === viewYear : value === viewMonth) },
              content: kind === "year" ? String(value) : MONTH_LABELS[value],
              onPress: () => {
                if (kind === "year") { setViewYear(value); setView("month"); }
                else { setViewMonth(value); setView("date"); }
              }
            }))
          };
        }
        default:
          if (ctx.nested === "button" && a["data-s1-part"] === "apply") return { p: { onPress: apply } };
          return NONE;
      }
    }
  }), [open, view, viewYear, viewMonth, sel, text, filled, grid, disabled, props.onChange, props.onOpen, props.onClose]);
}

/* ── 12. 시간 고르기 ─────────────────────────────────────────────────── */

function useTimePicker(config, props) {
  const items = useMemo(() => {
    const minutes = [];
    for (let m = 0; m < 60; m += config.minuteStep) minutes.push(pad2(m));
    return {
      ampm: ["오전", "오후"],
      hour: config.type === "12h" ? Array.from({ length: 12 }, (_, i) => String(i + 1)) : Array.from({ length: 24 }, (_, i) => pad2(i)),
      minute: minutes
    };
  }, [config.type, config.minuteStep]);
  const [open, setOpen] = useControlled(props.open, false);
  const [sel, setSel] = useState({});
  const [committed, setCommitted] = useState(null);
  const [tab, setTab] = useState("time");
  const wheelRefs = useRef({});
  const required = config.type === "12h" ? ["ampm", "hour", "minute"] : ["hour", "minute"];
  const complete = required.every((kind) => sel[kind] !== undefined);
  const disabled = Boolean(props.disabled);
  const close = () => { setOpen(false); props.onClose?.({}); };
  const commit = () => {
    if (!complete) return;
    const text = config.type === "12h" ? `${sel.ampm} ${sel.hour}:${sel.minute}` : `${sel.hour}:${sel.minute}`;
    setCommitted(text);
    close();
    props.onChange?.({ value: text, hour: sel.hour, minute: sel.minute, ampm: config.type === "12h" ? sel.ampm : null, type: config.type });
  };

  return useMemo(() => ({
    bind(part, at, ctx) {
      const { a } = ctx;
      switch (part) {
        case "trigger":
          return { a: { "aria-expanded": String(open), "data-filled": committed ? "true" : undefined }, onPress: () => { if (disabled) return; if (open) close(); else { setOpen(true); props.onOpen?.({}); } } };
        case "value": return committed ? { children: committed } : NONE;
        case "panel": case "sheet": return { a: { hidden: open ? undefined : "" } };
        case "sheet-backdrop": case "sheet-close": return { onPress: close };
        case "confirm": return { a: { disabled: complete ? undefined : "" }, onPress: commit };
        case "column": {
          const kind = a["data-column"];
          return {
            repeat: (items[kind] ?? []).map((item) => ({
              a: { "aria-selected": String(sel[kind] === item), "data-value": item },
              content: item,
              onPress: () => setSel({ ...sel, [kind]: item })
            }))
          };
        }
        case "wheel-col": {
          const kind = a["data-column"];
          if (kind === "colon") return { repeat: [{ content: ":" }] };
          const list = items[kind] ?? [];
          const pitch = config.pitch;
          const pick = (event) => {
            const y = event?.nativeEvent?.contentOffset?.y ?? 0;
            const index = Math.max(0, Math.min(list.length - 1, Math.round(y / pitch)));
            if (sel[kind] !== list[index]) setSel((current) => ({ ...current, [kind]: list[index] }));
          };
          return {
            repeat: list.map((item, index) => ({
              a: { "data-value": item },
              content: item,
              onPress: () => wheelRefs.current[kind]?.scrollTo?.({ y: index * pitch, animated: false })
            })),
            props: {
              snapToInterval: pitch,
              decelerationRate: "fast",
              scrollEventThrottle: 16,
              onMomentumScrollEnd: pick,
              onScrollEndDrag: pick,
              scrollRef: (node) => { wheelRefs.current[kind] = node; }
            }
          };
        }
        case "date-panel": return { a: { hidden: tab === "date" ? undefined : "" } };
        case "wheel": return { a: { hidden: tab === "date" ? "" : undefined } };
        default:
          if (ctx.nested === "button" && a["data-s1-part"] === "apply") return { p: { onPress: commit } };
          if (ctx.nested === "tab") return { p: { value: tab === "date" ? 0 : 1, onChange: ({ index }) => setTab(index === 0 ? "date" : "time") } };
          return NONE;
      }
    }
  }), [open, sel, committed, tab, complete, items, disabled, props.onChange, props.onOpen, props.onClose]);
}

/* ── 진입점 ──────────────────────────────────────────────────────────── */

const KINDS = {
  toggle: useToggle,
  "select-one": useSelectOne,
  dropdown: useDropdown,
  disclosure: useDisclosure,
  "side-menu": useSideMenu,
  "top-bar": useTopBar,
  overlay: useOverlay,
  popup: usePopup,
  input: useInput,
  pagination: usePagination,
  table: useTable,
  "row-control": useRowControl,
  "date-picker": useDatePicker,
  "time-picker": useTimePicker
};

/** 생성된 부품이 부른다: useBehavior("tab", config, props) */
export function useBehavior(kind, config, props) {
  const hook = KINDS[kind];
  if (hook === undefined) throw new Error(`[s1-ui] 알 수 없는 동작 종류: ${kind}`);
  return hook(config, props);
}

export { useControlled, textOf };
