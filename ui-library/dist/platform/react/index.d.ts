/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
import type {
  AllHTMLAttributes, AnchorHTMLAttributes, AriaAttributes, ButtonHTMLAttributes, ChangeEventHandler, CSSProperties, FocusEventHandler, FormEventHandler,
  HTMLAttributes, Key, LabelHTMLAttributes, ReactElement, ReactNode, Ref
} from "react";

/** 이 묶음이 나온 배포본 번호 — 디자인가이드가 공개한 번호와 다르면 낡은 것이다. */
export declare const S1_VERSION: string;
export declare const S1_RELEASED_AT: string;

/** aria-* 속성 — React 의 표준 타입(boolean · "true" · "false" · "mixed" …)을 다 받고, 0.22.0 코드가 쓰던 문자열(String(on) 등)도 막지 않는다. */
export type S1Aria = { [K in keyof AriaAttributes]?: AriaAttributes[K] | (string & {}) };
/** 요소에 덧붙이는 속성(data-* · aria-* 포함). */
export type S1Attrs = Omit<AllHTMLAttributes<HTMLElement>, keyof AriaAttributes> & S1Aria & { [name: `data-${string}`]: string | number | boolean | undefined };
/** 슬롯 한 칸에 넣을 수 있는 값. 글자·요소를 그대로 주거나, 속성까지 함께 준다. */
export type S1SlotValue = ReactNode | { content?: ReactNode; attrs?: S1Attrs };
/** 슬롯 이름별 내용 — 부품마다 받는 이름만 열려 있다(오타가 나면 잡힌다). */
export type S1Parts<Name extends string = string> = { [K in Name]?: S1SlotValue };
/** 옛 모양 목록 항목(글자 · {content, attrs} · 안쪽 목록). 새 코드는 S1Item 을 쓰세요. */
export type S1Entry = ReactNode | { key?: Key; content?: ReactNode; attrs?: S1Attrs } | readonly S1Entry[];
/** 사용자 이벤트(CustomEvent) — event.detail 모양은 이벤트마다 정해져 있다. 고르는 부품의 onChange 는 이 이벤트를 받고(0.22.0 과 같다), 값만 받는 길은 onValueChange 다. */
export type S1Event<Detail> = CustomEvent<Detail>;

/** 목록 한 줄의 공통 모양 — 모든 부품이 같다. 값(value)은 문자열이거나 숫자(콜백에는 준 그대로 돌아온다). */
export interface S1Item {
  value: string | number;
  label: ReactNode;
  /** 비활성 — 정본에 비활성 모양이 있는 멀티 토글 칸·시트 줄에서 적용된다 */
  disabled?: boolean;
}
/** 고르는 목록 항목 입력 — 글자 · 새 모양 · 옛 모양 어느 것이든 받는다. */
export type S1OptionInput = string | number | S1Item | { optionLabel: S1SlotValue; attrs?: S1Attrs; key?: Key };
export type S1CellInput = string | number | S1Item | { content?: S1SlotValue; attrs?: S1Attrs; key?: Key };
export type S1TabInput = string | number | (S1Item & { panel?: ReactNode }) | { content?: S1SlotValue; attrs?: S1Attrs; key?: Key };
export type S1SheetOptionInput = string | number | { value?: string | number; label: ReactNode; disabled?: boolean; selected?: boolean };
/** 표의 칸 · 줄. 줄은 글자 배열이거나 { cells, attrs?, control? } 다. */
export type S1TableCellInput = ReactNode | { content?: ReactNode; attrs?: S1Attrs };
export type S1TableRowInput = readonly S1TableCellInput[] | { key?: Key; cells: readonly S1TableCellInput[]; attrs?: S1Attrs; control?: { attrs?: S1Attrs } };
/** 링크 항목({ label, href?, current? }) 또는 글자 · 옛 모양. */
export interface S1Link { label: ReactNode; href?: string; current?: boolean; disabled?: boolean; key?: Key }
export type S1LinkInput = string | S1Link | { content?: ReactNode; attrs?: S1Attrs; key?: Key };
export interface S1GnbColumn { title?: ReactNode; items: readonly S1LinkInput[] }
export type S1GnbMenuInput = string | { label: ReactNode; href?: string; current?: boolean; columns?: readonly S1GnbColumn[]; children?: readonly S1GnbColumn[]; key?: Key };
export type S1LnbItemInput = string | {
  label: ReactNode; href?: string; current?: boolean; disabled?: boolean; icon?: ReactNode; title?: string; expanded?: boolean; key?: Key;
  children?: readonly (string | { label: ReactNode; href?: string; current?: boolean; key?: Key })[];
};
/** 날짜 값 — 한 날짜는 "YYYY-MM-DD", 기간은 { start, end }. */
export type S1DateValue = string | { start?: string | null; end?: string | null } | null;
/** 모달·시트가 열리고 닫힐 때 같이 오는 정보. */
export interface S1OpenDetail { reason?: string; trigger?: Element }
/** 드롭다운 이벤트 detail. */
export type S1DropdownDetail =
  | { type: "text"; option: HTMLElement; value: string; selected: true }
  | { type: "checkbox"; option: HTMLElement; value: string; checked: boolean; selectAll: boolean; affected?: HTMLElement[]; selectAllChecked?: boolean };

export interface S1InputProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "size" | "breakName" | "type" | "label" | "value" | "defaultValue" | "onChange" | "onInput" | "onBlur" | "onFocus" | "name" | "placeholder" | "disabled" | "required" | "readOnly" | "inputRef" | "onClear" | "onSearch">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ field: "확인" }} */
  parts?: S1Parts<"field" | "control" | "action" | "actionIcon">;
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 화면 기준: pc · mobile (옛 이름 password · search · password-mobile · search-mobile 도 받는다 — type 을 쓰세요) */
  breakName?: "pc" | "mobile" | "password" | "password-mobile" | "search" | "search-mobile";
  /** 입력칸 종류: text(기본) · password(보기/숨기기 버튼) · search(돋보기 버튼) */
  type?: "text" | "password" | "search";
  /** 스크린리더가 읽는 이름 (aria-label) */
  label?: string;
  /** 값(제어형) */
  value?: string | number;
  /** 처음 값(비제어형) */
  defaultValue?: string | number;
  /** 바뀔 때(event.target.value) */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onInput?: FormEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  /** 폼 이름 — 주면 폼 전송에 값이 실린다 */
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  /** 입력 요소에 직접 닿는 ref */
  inputRef?: Ref<HTMLInputElement>;
  /** s1:input:clear */
  onClear?: (event: S1Event<{ value: "" }>) => void;
  /** s1:input:search */
  onSearch?: (event: S1Event<{ value: string }>) => void;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1Input(props: S1InputProps): ReactElement;

export interface S1ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "size" | "breakName" | "label">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<"label">;
  /** 승인된 변형: primary · secondary · blue-line */
  variant?: "primary" | "secondary" | "blue-line";
  /** 승인된 크기: md · xsm · xxsm · lg */
  size?: "md" | "xsm" | "xxsm" | "lg";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 글자 — parts 로도 줄 수 있다 */
  label?: ReactNode;
  /** 글자 — parts 로도 줄 수 있다 (label 과 같다) */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLButtonElement>;
}
export declare function S1Button(props: S1ButtonProps): ReactElement;

export interface S1CheckboxProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "value" | "onChange" | "onInput" | "onBlur" | "onFocus" | "name" | "disabled" | "required" | "checked" | "defaultChecked" | "inputRef" | "label">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ control: "확인" }} */
  parts?: S1Parts<"control" | "label">;
  /** 폼에 실릴 값 */
  value?: string;
  /** 바뀔 때(event.target.checked) */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onInput?: FormEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  /** 폼 이름 — 주면 폼 전송에 값이 실린다 */
  name?: string;
  disabled?: boolean;
  required?: boolean;
  /** 켜져 있나(제어형) */
  checked?: boolean;
  /** 처음 켜져 있나(비제어형) */
  defaultChecked?: boolean;
  /** 입력 요소에 직접 닿는 ref */
  inputRef?: Ref<HTMLInputElement>;
  /** 글자 — parts 로도 줄 수 있다 */
  label?: ReactNode;
  /** 글자 — parts 로도 줄 수 있다 (label 과 같다) */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1Checkbox(props: S1CheckboxProps): ReactElement;

export interface S1RadioProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "value" | "onChange" | "onInput" | "onBlur" | "onFocus" | "name" | "disabled" | "required" | "checked" | "defaultChecked" | "inputRef" | "label">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ control: "확인" }} */
  parts?: S1Parts<"control" | "label">;
  /** 폼에 실릴 값 */
  value?: string;
  /** 바뀔 때(event.target.checked) */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onInput?: FormEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  /** 폼 이름 — 주면 폼 전송에 값이 실린다 */
  name?: string;
  disabled?: boolean;
  required?: boolean;
  /** 켜져 있나(제어형) */
  checked?: boolean;
  /** 처음 켜져 있나(비제어형) */
  defaultChecked?: boolean;
  /** 입력 요소에 직접 닿는 ref */
  inputRef?: Ref<HTMLInputElement>;
  /** 글자 — parts 로도 줄 수 있다 */
  label?: ReactNode;
  /** 글자 — parts 로도 줄 수 있다 (label 과 같다) */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1Radio(props: S1RadioProps): ReactElement;

export interface S1ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "checked" | "defaultChecked" | "onCheckedChange" | "onChange" | "name" | "value" | "disabled" | "label">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ knob: "확인" }} */
  parts?: S1Parts<"knob">;
  /** 켜져 있나(제어형) */
  checked?: boolean;
  /** 처음 켜져 있나(비제어형) */
  defaultChecked?: boolean;
  /** 눌러서 켜지거나(true) 꺼질(false) 때 */
  onCheckedChange?: (checked: boolean) => void;
  /** s1:toggle:change (event.detail.checked) */
  onChange?: (event: S1Event<{ checked: boolean }>) => void;
  /** 폼 이름 — 주면 켜져 있을 때 값이 폼 전송에 실린다 */
  name?: string;
  /** 폼에 실릴 값 (기본 "on") */
  value?: string;
  /** 누를 수 없음 */
  disabled?: boolean;
  /** 스크린리더가 읽는 이름 (aria-label, 기본 "알림 받기") */
  label?: string;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLButtonElement>;
}
export declare function S1Toggle(props: S1ToggleProps): ReactElement;

export interface S1ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "size" | "breakName" | "selected" | "defaultSelected" | "onSelectedChange" | "onBeforeChange" | "onBeforechange" | "onChange" | "label" | "value" | "name">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<"label">;
  /** 승인된 변형: line · solid */
  variant?: "line" | "solid";
  /** 승인된 크기: sm · md */
  size?: "sm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 켜져 있나(제어형) — 주면 부품은 이 값이 바뀔 때만 모양이 바뀐다. 눌러도 onSelectedChange 로 알리기만 한다. */
  selected?: boolean;
  /** 처음 켜져 있나(비제어형) */
  defaultSelected?: boolean;
  /** 눌려서 켜지거나(true) 꺼질(false) 때 — 제어형이면 바뀌기 전에, 비제어형이면 바뀐 뒤에 불린다 */
  onSelectedChange?: (selected: boolean) => void;
  /** s1:chip:beforechange */
  onBeforeChange?: (event: S1Event<{ selected: boolean; value: string; group: boolean }>) => void;
  /** s1:chip:beforechange (옛 이름 — onBeforeChange 을 쓰세요) */
  /** @deprecated */
  onBeforechange?: (event: S1Event<{ selected: boolean; value: string; group: boolean }>) => void;
  /** s1:chip:change */
  onChange?: (event: S1Event<{ selected: boolean; value: string; group: boolean }>) => void;
  /** 글자 — parts 로도 줄 수 있다 */
  label?: ReactNode;
  /** 글자 — parts 로도 줄 수 있다 (label 과 같다) */
  children?: ReactNode;
  /** 이 칩의 값 — 칩 묶음에서 어느 칩인지 가리키고, name 을 주면 폼에 실린다 (data-value) */
  value?: string;
  /** 폼 이름 — 주면 켜진 칩의 값이 폼 전송에 실린다 */
  name?: string;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLButtonElement>;
}
export declare function S1Chip(props: S1ChipProps): ReactElement;

export interface S1DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "size" | "value" | "defaultValue" | "onValueChange" | "onChange" | "options">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<never>;
  /** 승인된 변형: text · checkbox */
  variant?: "text" | "checkbox";
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 고른 값(제어형) — options 의 value. 문자열이나 숫자 */
  value?: string | number;
  /** 처음 고른 값(비제어형) */
  defaultValue?: string | number;
  /** 고른 값이 바뀔 때 — 준 value 그대로 돌아온다 */
  onValueChange?: (value: string | number, detail: S1Event<S1DropdownDetail>["detail"]) => void;
  /** 바뀔 때 — 배포본 사용자 이벤트(CustomEvent)를 그대로 받는다: event.detail.value 등(0.22.0 과 같은 모양). 값만 받으려면 onValueChange 를 쓰세요. s1:dropdown:change */
  onChange?: (event: S1Event<S1DropdownDetail>) => void;
  /** 고를 수 있는 목록 — { value, label } 또는 글자. 주지 않으면 예제 내용이 그려진다. */
  options?: readonly S1OptionInput[];
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1Dropdown(props: S1DropdownProps): ReactElement;

export interface S1SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "size" | "breakName" | "value" | "defaultValue" | "onValueChange" | "onChange" | "onOpen" | "onClose" | "name" | "disabled" | "placeholder" | "open" | "onOpenChange" | "options">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ trigger: "확인" }} */
  parts?: S1Parts<"trigger" | "value" | "icon" | "panel">;
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 고른 값(제어형) — options 의 value. 문자열이나 숫자 */
  value?: string | number;
  /** 처음 고른 값(비제어형) */
  defaultValue?: string | number;
  /** 고른 값이 바뀔 때 — 준 value 그대로 돌아온다 */
  onValueChange?: (value: string | number, detail: S1Event<{ value: string; option: HTMLElement }>["detail"]) => void;
  /** 바뀔 때 — 배포본 사용자 이벤트(CustomEvent)를 그대로 받는다: event.detail.value 등(0.22.0 과 같은 모양). 값만 받으려면 onValueChange 를 쓰세요. s1:select:change */
  onChange?: (event: S1Event<{ value: string; option: HTMLElement }>) => void;
  /** s1:select:open */
  onOpen?: (event: S1Event<Record<string, never>>) => void;
  /** s1:select:close */
  onClose?: (event: S1Event<Record<string, never>>) => void;
  /** 폼 이름 — 주면 고른 값이 폼 전송에 실린다 (data-name) */
  name?: string;
  /** 누를 수 없음 */
  disabled?: boolean;
  /** 고른 것이 없을 때 보이는 글자 */
  placeholder?: string;
  /** 목록이 열려 있나(제어형) — onOpenChange 와 함께 쓴다 */
  open?: boolean;
  /** 목록이 열리거나(true) 닫힐(false) 때 — open 을 바꿔 정한 것은 되알리지 않는다 */
  onOpenChange?: (open: boolean) => void;
  /** 고를 수 있는 목록 — { value, label } 또는 글자. 주지 않으면 예제 내용이 그려진다. */
  options?: readonly S1OptionInput[];
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1Select(props: S1SelectProps): ReactElement;

export interface S1FilterChipProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "size" | "breakName" | "value" | "defaultValue" | "onValueChange" | "onChange" | "onOpen" | "onClose" | "name" | "disabled" | "open" | "onOpenChange" | "title" | "options">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ trigger: "확인" }} */
  parts?: S1Parts<"trigger" | "title" | "value" | "icon" | "panel">;
  /** 승인된 변형: line · solid */
  variant?: "line" | "solid";
  /** 승인된 크기: sm · md */
  size?: "sm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 고른 값(제어형) — options 의 value. 문자열이나 숫자 */
  value?: string | number;
  /** 처음 고른 값(비제어형) */
  defaultValue?: string | number;
  /** 고른 값이 바뀔 때 — 준 value 그대로 돌아온다 */
  onValueChange?: (value: string | number, detail: S1Event<{ value: string; option: HTMLElement }>["detail"]) => void;
  /** 바뀔 때 — 배포본 사용자 이벤트(CustomEvent)를 그대로 받는다: event.detail.value 등(0.22.0 과 같은 모양). 값만 받으려면 onValueChange 를 쓰세요. s1:filter-chip:change */
  onChange?: (event: S1Event<{ value: string; option: HTMLElement }>) => void;
  /** s1:filter-chip:open */
  onOpen?: (event: S1Event<Record<string, never>>) => void;
  /** s1:filter-chip:close */
  onClose?: (event: S1Event<Record<string, never>>) => void;
  /** 폼 이름 — 주면 고른 값이 폼 전송에 실린다 (data-name) */
  name?: string;
  /** 누를 수 없음 */
  disabled?: boolean;
  /** 목록이 열려 있나(제어형) — onOpenChange 와 함께 쓴다 */
  open?: boolean;
  /** 목록이 열리거나(true) 닫힐(false) 때 — open 을 바꿔 정한 것은 되알리지 않는다 */
  onOpenChange?: (open: boolean) => void;
  /** 칩 앞의 이름 글자 (예: "정렬") */
  title?: ReactNode;
  /** 고를 수 있는 목록 — { value, label } 또는 글자. 주지 않으면 예제 내용이 그려진다. */
  options?: readonly S1OptionInput[];
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1FilterChip(props: S1FilterChipProps): ReactElement;

export interface S1TabProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "size" | "breakName" | "value" | "defaultValue" | "onValueChange" | "onChange" | "tabs">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<never>;
  /** 승인된 크기: md · sm · xsm */
  size?: "md" | "sm" | "xsm";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 고른 값(제어형) — 목록의 value */
  value?: string | number;
  /** 처음 고른 값(비제어형) */
  defaultValue?: string | number;
  /** 고른 값이 바뀔 때 — 준 value 그대로 돌아온다 */
  onValueChange?: (value: string | number, detail: { tab: HTMLElement; value: string }) => void;
  /** 바뀔 때 — 배포본 사용자 이벤트(CustomEvent)를 그대로 받는다: event.detail.value 등(0.22.0 과 같은 모양). 값만 받으려면 onValueChange 를 쓰세요. s1:tab:change */
  onChange?: (event: S1Event<{ tab: HTMLElement; value: string }>) => void;
  /** 탭 내용(패널)을 직접 둘 때 — 주면 예제 패널을 대신한다. 탭 항목의 panel 로 주는 쪽이 간단하다. */
  children?: ReactNode;
  /** 탭 목록 — { value, label, panel? } 또는 글자. panel 을 주면 그 탭의 내용이 함께 그려진다. 주지 않으면 예제 내용. */
  tabs?: readonly S1TabInput[];
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1Tab(props: S1TabProps): ReactElement;

export interface S1PaginationProps extends Omit<HTMLAttributes<HTMLElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "page" | "defaultPage" | "totalPages" | "onPageChange" | "pages" | "onChange">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ arrowGroup: "확인" }} */
  parts?: S1Parts<"arrowGroup" | "icon" | "pages">;
  /** 현재 쪽(제어형) — 1부터 */
  page?: number;
  /** 처음 현재 쪽(비제어형, 기본 1) */
  defaultPage?: number;
  /** 전체 쪽 수 — 바뀌면 번호 줄을 다시 그린다 (기본 6) */
  totalPages?: number;
  /** 쪽이 바뀔 때 — 사용자가 눌러 바뀐 것만 알린다 (page 를 바꿔 정한 것은 되알리지 않는다) */
  onPageChange?: (page: number, detail: { page: number; totalPages: number }) => void;
  /** 번호 칸에 쓸 글자(옛 방식) — 주면 그 개수만큼 번호 칸이 그려진다. 새 코드는 totalPages 를 쓰세요. */
  /** @deprecated */
  pages?: readonly S1Entry[];
  /** s1:pagination:change */
  onChange?: (event: S1Event<{ page: number; totalPages: number }>) => void;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLElement>;
}
export declare function S1Pagination(props: S1PaginationProps): ReactElement;

export interface S1TextareaProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "breakName" | "value" | "defaultValue" | "onChange" | "onInput" | "onBlur" | "onFocus" | "name" | "placeholder" | "disabled" | "required" | "readOnly" | "inputRef" | "label">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ control: "확인" }} */
  parts?: S1Parts<"control">;
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 값(제어형) */
  value?: string | number;
  /** 처음 값(비제어형) */
  defaultValue?: string | number;
  /** 바뀔 때(event.target.value) */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onInput?: FormEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  /** 폼 이름 — 주면 폼 전송에 값이 실린다 */
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  /** 입력 요소에 직접 닿는 ref */
  inputRef?: Ref<HTMLTextAreaElement>;
  /** 스크린리더가 읽는 이름 (aria-label) */
  label?: string;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1Textarea(props: S1TextareaProps): ReactElement;

export interface S1MultiToggleProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "size" | "value" | "defaultValue" | "onValueChange" | "onChange" | "name" | "cells">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<never>;
  /** 승인된 크기: md · sm · xsm */
  size?: "md" | "sm" | "xsm";
  /** 고른 값(제어형) — 목록의 value */
  value?: string | number;
  /** 처음 고른 값(비제어형) */
  defaultValue?: string | number;
  /** 고른 값이 바뀔 때 — 준 value 그대로 돌아온다 */
  onValueChange?: (value: string | number, detail: S1Event<{ index: number; value: string; cell: HTMLElement }>["detail"]) => void;
  /** 바뀔 때 — 배포본 사용자 이벤트(CustomEvent)를 그대로 받는다: event.detail.value 등(0.22.0 과 같은 모양). 값만 받으려면 onValueChange 를 쓰세요. s1:multi-toggle:change */
  onChange?: (event: S1Event<{ index: number; value: string; cell: HTMLElement }>) => void;
  /** 폼 이름 — 주면 고른 칸의 값이 폼 전송에 실린다 */
  name?: string;
  /** 칸 목록 — { value, label, disabled? } 또는 글자. 주지 않으면 예제 내용이 그려진다. */
  cells?: readonly S1CellInput[];
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1MultiToggle(props: S1MultiToggleProps): ReactElement;

export interface S1ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "breakName" | "open" | "defaultOpen" | "onOpenChange" | "onOpen" | "onClose" | "confirmLabel" | "cancelLabel" | "onConfirm" | "onCancel" | "title" | "message">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ overlay: "확인" }} */
  parts?: S1Parts<"overlay" | "panel" | "content" | "header" | "title" | "close" | "body" | "message" | "footer" | "cancelLabel" | "confirmLabel" | "label">;
  /** 승인된 변형: single · dual */
  variant?: "single" | "dual";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 열려 있나(제어형) — 바뀌면 부품을 열거나 닫는다(스크롤 잠금 · 초점 · Esc 가 함께 따라온다). 닫힘은 onOpenChange(false) 로 알려 주니 상태를 맞춰 주세요. */
  open?: boolean;
  /** 처음 열려 있나(비제어형, 기본 false) */
  defaultOpen?: boolean;
  /** 열리거나(true) 닫힐(false) 때 — detail.reason 이 닫힌 이유. open 을 바꿔 정한 것은 되알리지 않는다 */
  onOpenChange?: (open: boolean, detail: S1OpenDetail) => void;
  /** s1:modal:open */
  onOpen?: (event: S1Event<S1OpenDetail>) => void;
  /** s1:modal:close */
  onClose?: (event: S1Event<S1OpenDetail>) => void;
  /** 확인 단추 글자 (기본 "확인") */
  confirmLabel?: ReactNode;
  /** 취소 단추 글자 (기본 "취소") */
  cancelLabel?: ReactNode;
  /** 확인 단추로 닫힐 때 */
  onConfirm?: (event: S1Event<S1OpenDetail>) => void;
  /** 취소 단추로 닫힐 때 */
  onCancel?: (event: S1Event<S1OpenDetail>) => void;
  /** 제목 글자 */
  title?: ReactNode;
  /** 본문 글자(안내 문장). 본문을 직접 구성하려면 children 을 쓰세요 */
  message?: ReactNode;
  /** 본문 영역 전체 — 주면 message 자리를 대신한다 */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1Modal(props: S1ModalProps): ReactElement;

export interface S1TableProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "size" | "onSelectionChange" | "onSelectionchange" | "headerCells" | "rows">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ table: "확인" }} */
  parts?: S1Parts<"table" | "headerCell" | "control">;
  /** 승인된 크기: md · sm · xsm */
  size?: "md" | "sm" | "xsm";
  /** s1:table:selectionchange */
  onSelectionChange?: (event: S1Event<{ selectedCount: number; totalCount: number }>) => void;
  /** s1:table:selectionchange (옛 이름 — onSelectionChange 을 쓰세요) */
  /** @deprecated */
  onSelectionchange?: (event: S1Event<{ selectedCount: number; totalCount: number }>) => void;
  /** 머리 칸 목록 — 글자 또는 { content, attrs }. 주지 않으면 예제 내용이 그려진다. */
  headerCells?: readonly S1TableCellInput[];
  /** 줄 목록 — 글자 배열 ["가", "나"] 이거나 { cells, attrs?, control? }. 주지 않으면 예제 내용이 그려진다. */
  rows?: readonly S1TableRowInput[];
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1Table(props: S1TableProps): ReactElement;

export interface S1MobileBottomNavProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "selected" | "defaultSelected" | "onSelectedChange" | "onBeforeChange" | "onBeforechange" | "onChange" | "label" | "value">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ icon: "확인" }} */
  parts?: S1Parts<"icon" | "label">;
  /** 승인된 변형: home · search · notification · settings */
  variant?: "home" | "search" | "notification" | "settings";
  /** 켜져 있나(제어형) — 주면 부품은 이 값이 바뀔 때만 모양이 바뀐다. 눌러도 onSelectedChange 로 알리기만 한다. */
  selected?: boolean;
  /** 처음 켜져 있나(비제어형) */
  defaultSelected?: boolean;
  /** 눌려서 켜지거나(true) 꺼질(false) 때 — 제어형이면 바뀌기 전에, 비제어형이면 바뀐 뒤에 불린다 */
  onSelectedChange?: (selected: boolean) => void;
  /** s1:mobile-bottom-nav:beforechange */
  onBeforeChange?: (event: S1Event<{ value: string; selected: boolean; tab: HTMLElement; previous: HTMLElement | null }>) => void;
  /** s1:mobile-bottom-nav:beforechange (옛 이름 — onBeforeChange 을 쓰세요) */
  /** @deprecated */
  onBeforechange?: (event: S1Event<{ value: string; selected: boolean; tab: HTMLElement; previous: HTMLElement | null }>) => void;
  /** s1:mobile-bottom-nav:change */
  onChange?: (event: S1Event<{ value: string; selected: boolean; tab: HTMLElement; previous: HTMLElement | null }>) => void;
  /** 글자 — parts 로도 줄 수 있다 */
  label?: ReactNode;
  /** 글자 — parts 로도 줄 수 있다 (label 과 같다) */
  children?: ReactNode;
  /** 이 탭의 값 (data-value) — 안 주면 아이콘 이름이 값이 된다 */
  value?: string;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLButtonElement>;
}
export declare function S1MobileBottomNav(props: S1MobileBottomNavProps): ReactElement;

export interface S1MobileHeaderProps extends Omit<HTMLAttributes<HTMLElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "title">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ back: "확인" }} */
  parts?: S1Parts<"back" | "backIcon" | "title" | "spacer">;
  /** 승인된 변형: home-title · home-title-subtitle · standard-title · standard-title-close · standard-no-title · standard-no-title-close */
  variant?: "home-title" | "home-title-subtitle" | "standard-title" | "standard-title-close" | "standard-no-title" | "standard-no-title-close";
  /** 제목 글자 */
  title?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLElement>;
}
export declare function S1MobileHeader(props: S1MobileHeaderProps): ReactElement;

export interface S1TimePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "size" | "breakName" | "value" | "defaultValue" | "onValueChange" | "name" | "placeholder" | "disabled" | "open" | "onOpenChange" | "onOpen" | "onClose" | "onChange">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ trigger: "확인" }} */
  parts?: S1Parts<"trigger" | "value" | "icon" | "panel" | "columns" | "column" | "divider" | "footer" | "confirm" | "sheet" | "sheetBackdrop" | "sheetPanel" | "sheetHeader" | "sheetTitle" | "sheetClose" | "wheel" | "wheelCol" | "fadeTop" | "fadeBottom" | "sheetFooter" | "apply" | "label">;
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 시간(제어형) — 24시간 "HH:mm" (예: "09:30", "14:05"). 12시간 표시여도 값은 24시간으로 주고받는다 */
  value?: string;
  /** 처음 시간(비제어형) */
  defaultValue?: string;
  /** 시간을 고르면 — 24시간 "HH:mm" 문자열 */
  onValueChange?: (value: string, detail: S1Event<{ value: string; hour: string; minute: string; ampm: string | null; type: "12h" | "24h" }>["detail"]) => void;
  /** 폼 이름 — 주면 고른 시간(화면에 보이는 글자)이 폼 전송에 실린다 */
  name?: string;
  /** 고른 시간이 없을 때 보이는 글자 */
  placeholder?: string;
  /** 누를 수 없음 */
  disabled?: boolean;
  /** 시간 목록(모바일은 시트)이 열려 있나(제어형) */
  open?: boolean;
  /** 열리거나 닫힐 때 — open 을 바꿔 정한 것은 되알리지 않는다 */
  onOpenChange?: (open: boolean) => void;
  /** s1:time-picker:open */
  onOpen?: (event: S1Event<Record<string, never>>) => void;
  /** s1:time-picker:close */
  onClose?: (event: S1Event<Record<string, never>>) => void;
  /** 바뀔 때 — 배포본 사용자 이벤트(CustomEvent)를 그대로 받는다: event.detail.value 등(0.22.0 과 같은 모양). 값만 받으려면 onValueChange 를 쓰세요. s1:time-picker:change */
  onChange?: (event: S1Event<{ value: string; hour: string; minute: string; ampm: string | null; type: "12h" | "24h" }>) => void;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1TimePicker(props: S1TimePickerProps): ReactElement;

export interface S1DatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "size" | "breakName" | "value" | "defaultValue" | "onValueChange" | "name" | "placeholder" | "disabled" | "open" | "onOpenChange" | "onOpen" | "onClose" | "onChange">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ trigger: "확인" }} */
  parts?: S1Parts<"trigger" | "value" | "icon" | "panel" | "calendar" | "sheet" | "sheetBackdrop" | "sheetPanel" | "sheetHeader" | "sheetTitle" | "sheetClose" | "calendarWrap" | "sheetFooter" | "apply" | "label">;
  /** 승인된 변형: single · range */
  variant?: "single" | "range";
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 날짜(제어형) — 한 날짜는 "2026-10-01", 기간(variant="range")은 { start, end } */
  value?: S1DateValue;
  /** 처음 날짜(비제어형) */
  defaultValue?: S1DateValue;
  /** 날짜를 고르면 — 한 날짜는 "YYYY-MM-DD" 문자열(없으면 null), 기간은 { start, end } */
  onValueChange?: (value: S1DateValue, detail: S1Event<{ mode: "single"; value: string | null } | { mode: "range"; start: string | null; end: string | null }>["detail"]) => void;
  /** 폼 이름 — 주면 고른 날짜가 폼 전송에 실린다 (기간은 name-start · name-end) */
  name?: string;
  /** 고른 날짜가 없을 때 보이는 글자 */
  placeholder?: string;
  /** 누를 수 없음 */
  disabled?: boolean;
  /** 달력이 열려 있나(제어형) */
  open?: boolean;
  /** 달력이 열리거나 닫힐 때 — open 을 바꿔 정한 것은 되알리지 않는다 */
  onOpenChange?: (open: boolean) => void;
  /** s1:date-picker:open */
  onOpen?: (event: S1Event<Record<string, never>>) => void;
  /** s1:date-picker:close */
  onClose?: (event: S1Event<Record<string, never>>) => void;
  /** 바뀔 때 — 배포본 사용자 이벤트(CustomEvent)를 그대로 받는다: event.detail.value 등(0.22.0 과 같은 모양). 값만 받으려면 onValueChange 를 쓰세요. s1:date-picker:change */
  onChange?: (event: S1Event<{ mode: "single"; value: string | null } | { mode: "range"; start: string | null; end: string | null }>) => void;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1DatePicker(props: S1DatePickerProps): ReactElement;

export interface S1GnbProps extends Omit<HTMLAttributes<HTMLElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "size" | "onOpen" | "onClose" | "menus" | "subMenuType" | "logo" | "langLabel" | "onOpenChange">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ leading: "확인" }} */
  parts?: S1Parts<"leading" | "logo" | "menus" | "util" | "lang" | "langIcon" | "langLabel" | "account" | "accountIcon" | "menuToggle" | "menuIcon" | "menu">;
  /** 승인된 변형: center-between · start */
  variant?: "center-between" | "start";
  /** 승인된 크기: md · sm · xsm */
  size?: "md" | "sm" | "xsm";
  /** s1:gnb:open */
  onOpen?: (event: S1Event<{ trigger: HTMLElement; panel: HTMLElement }>) => void;
  /** s1:gnb:close */
  onClose?: (event: S1Event<{ trigger: HTMLElement; panel: HTMLElement }>) => void;
  /** 메뉴 — { label, href?, current?, columns? } 또는 글자. columns 가 있으면 누르면(마우스는 올리면) 하위 메뉴가 펼쳐진다. 주지 않으면 예제 내용 */
  menus?: readonly S1GnbMenuInput[];
  /** 하위 메뉴 종류 (기본 regular) */
  subMenuType?: "regular" | "compact-1" | "compact-2";
  /** 로고 자리 글자·요소 */
  logo?: ReactNode;
  /** 언어 단추 글자 */
  langLabel?: ReactNode;
  /** 하위 메뉴가 펼쳐지거나(true) 접힐(false) 때 */
  onOpenChange?: (open: boolean, detail: { trigger: HTMLElement; panel: HTMLElement }) => void;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLElement>;
}
export declare function S1Gnb(props: S1GnbProps): ReactElement;

export interface S1GnbSubMenuItemProps extends Omit<HTMLAttributes<HTMLSpanElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "depth" | "label" | "href" | "current">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<"label">;
  /** 승인된 종류: 1depth · 2depth */
  depth?: "1depth" | "2depth";
  /** 글자 (label 과 같다) */
  children?: ReactNode;
  /** 글자 — children 으로도 줄 수 있다 */
  label?: ReactNode;
  /** 이동할 주소 (2depth 만) */
  href?: string;
  /** 지금 보고 있는 항목 (2depth 만, aria-current) */
  current?: boolean;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLSpanElement>;
}
export declare function S1GnbSubMenuItem(props: S1GnbSubMenuItemProps): ReactElement;

export interface S1GnbSubMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "type" | "columns">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ columns: "확인" }} */
  parts?: S1Parts<"columns">;
  /** 하위 메뉴 종류 (data-type): regular(제목+항목) · compact-1 · compact-2 */
  type?: "regular" | "compact-1" | "compact-2";
  /** 열 목록 — { title, items: [{ label, href?, current? } 또는 글자] }. 주지 않으면 예제 내용이 그려진다. */
  columns?: readonly S1GnbColumn[];
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1GnbSubMenu(props: S1GnbSubMenuProps): ReactElement;

export interface S1AssistButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "label">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<"label">;
  /** 글자 — parts 로도 줄 수 있다 */
  label?: ReactNode;
  /** 글자 — parts 로도 줄 수 있다 (label 과 같다) */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLButtonElement>;
}
export declare function S1AssistButton(props: S1AssistButtonProps): ReactElement;

export interface S1TextButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "label">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<"label">;
  /** 승인된 변형: primary · secondary */
  variant?: "primary" | "secondary";
  /** 글자 — parts 로도 줄 수 있다 */
  label?: ReactNode;
  /** 글자 — parts 로도 줄 수 있다 (label 과 같다) */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLButtonElement>;
}
export declare function S1TextButton(props: S1TextButtonProps): ReactElement;

export interface S1ModalContentProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "size" | "open" | "defaultOpen" | "onOpenChange" | "onOpen" | "onClose" | "confirmLabel" | "cancelLabel" | "onConfirm" | "onCancel" | "title">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ overlay: "확인" }} */
  parts?: S1Parts<"overlay" | "panel" | "header" | "title" | "close" | "contentArea" | "content" | "contentLabel" | "footer" | "cancelLabel" | "confirmLabel" | "label">;
  /** 승인된 변형: single · dual */
  variant?: "single" | "dual";
  /** 승인된 크기: md · lg · xl */
  size?: "md" | "lg" | "xl";
  /** 열려 있나(제어형) — 바뀌면 부품을 열거나 닫는다(스크롤 잠금 · 초점 · Esc 가 함께 따라온다). 닫힘은 onOpenChange(false) 로 알려 주니 상태를 맞춰 주세요. */
  open?: boolean;
  /** 처음 열려 있나(비제어형, 기본 false) */
  defaultOpen?: boolean;
  /** 열리거나(true) 닫힐(false) 때 — detail.reason 이 닫힌 이유. open 을 바꿔 정한 것은 되알리지 않는다 */
  onOpenChange?: (open: boolean, detail: S1OpenDetail) => void;
  /** s1:modal-content:open */
  onOpen?: (event: S1Event<S1OpenDetail>) => void;
  /** s1:modal-content:close */
  onClose?: (event: S1Event<S1OpenDetail>) => void;
  /** 확인 단추 글자 (기본 "확인") */
  confirmLabel?: ReactNode;
  /** 취소 단추 글자 (기본 "취소") */
  cancelLabel?: ReactNode;
  /** 확인 단추로 닫힐 때 */
  onConfirm?: (event: S1Event<S1OpenDetail>) => void;
  /** 취소 단추로 닫힐 때 */
  onCancel?: (event: S1Event<S1OpenDetail>) => void;
  /** 제목 글자 */
  title?: ReactNode;
  /** 내용 영역 — 주면 예제의 견본 글자를 대신한다 */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1ModalContent(props: S1ModalContentProps): ReactElement;

export interface S1BottomSheetOptionProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "selected" | "defaultSelected" | "onSelectedChange" | "onBeforeChange" | "onBeforechange" | "onChange" | "label" | "value" | "disabled">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<"label">;
  /** 승인된 변형: text · checkbox · radio · list */
  variant?: "text" | "checkbox" | "radio" | "list";
  /** 켜져 있나(제어형) — 주면 부품은 이 값이 바뀔 때만 모양이 바뀐다. 눌러도 onSelectedChange 로 알리기만 한다. */
  selected?: boolean;
  /** 처음 켜져 있나(비제어형) */
  defaultSelected?: boolean;
  /** 눌려서 켜지거나(true) 꺼질(false) 때 — 제어형이면 바뀌기 전에, 비제어형이면 바뀐 뒤에 불린다 */
  onSelectedChange?: (selected: boolean) => void;
  /** s1:bottom-sheet-option:beforechange */
  onBeforeChange?: (event: S1Event<{ value: string; label: string; selected: boolean; option: HTMLElement }>) => void;
  /** s1:bottom-sheet-option:beforechange (옛 이름 — onBeforeChange 을 쓰세요) */
  /** @deprecated */
  onBeforechange?: (event: S1Event<{ value: string; label: string; selected: boolean; option: HTMLElement }>) => void;
  /** s1:bottom-sheet-option:change */
  onChange?: (event: S1Event<{ value: string; label: string; selected: boolean; option: HTMLElement }>) => void;
  /** 글자 — parts 로도 줄 수 있다 */
  label?: ReactNode;
  /** 글자 — parts 로도 줄 수 있다 (label 과 같다) */
  children?: ReactNode;
  /** 이 줄의 값 — 고른 값으로 돌아온다 (data-value) */
  value?: string;
  /** 누를 수 없는 줄 */
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1BottomSheetOption(props: S1BottomSheetOptionProps): ReactElement;

export interface S1BottomSheetProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "open" | "defaultOpen" | "onOpenChange" | "onOpen" | "onClose" | "options" | "value" | "defaultValue" | "onValueChange" | "closeOnSelect" | "title" | "applyLabel">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ sheet: "확인" }} */
  parts?: S1Parts<"sheet" | "sheetBackdrop" | "sheetPanel" | "sheetContent" | "sheetHeader" | "sheetTitle" | "sheetClose" | "sheetBody" | "sheetFooter" | "applyLabel" | "label">;
  /** 승인된 변형: none · single · dual */
  variant?: "none" | "single" | "dual";
  /** 열려 있나(제어형) — 바뀌면 부품을 열거나 닫는다(스크롤 잠금 · 초점 · Esc 가 함께 따라온다). 닫힘은 onOpenChange(false) 로 알려 주니 상태를 맞춰 주세요. */
  open?: boolean;
  /** 처음 열려 있나(비제어형, 기본 true) */
  defaultOpen?: boolean;
  /** 열리거나(true) 닫힐(false) 때 — detail.reason 이 닫힌 이유. open 을 바꿔 정한 것은 되알리지 않는다 */
  onOpenChange?: (open: boolean, detail: S1OpenDetail) => void;
  /** s1:bottom-sheet:open */
  onOpen?: (event: S1Event<S1OpenDetail>) => void;
  /** s1:bottom-sheet:close */
  onClose?: (event: S1Event<S1OpenDetail>) => void;
  /** 고르는 줄 목록 — { value, label, disabled? } 또는 글자. 주면 하나만 고르는 시트가 된다. 주지 않으면 예제 내용 */
  options?: readonly S1SheetOptionInput[];
  /** 고른 값(제어형) — options 의 value */
  value?: string | number;
  /** 처음 고른 값(비제어형) */
  defaultValue?: string | number;
  /** 줄을 고르면 — 준 value 그대로 돌아온다 */
  onValueChange?: (value: string | number, detail: S1Event<{ value: string; label: string; selected: boolean; option: HTMLElement }>["detail"]) => void;
  /** 고르면 시트를 닫나 (기본 true) */
  closeOnSelect?: boolean;
  /** 시트 제목 글자 */
  title?: ReactNode;
  /** 아래 단추 글자 (기본 "적용") */
  applyLabel?: ReactNode;
  /** 시트 본문 전체 — 주면 options 를 대신한다 */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1BottomSheet(props: S1BottomSheetProps): ReactElement;

export interface S1ListRowProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "title" | "description" | "value" | "checked" | "defaultChecked" | "onCheckedChange" | "onChange" | "name">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ text: "확인" }} */
  parts?: S1Parts<"text" | "title" | "description" | "trail" | "chevron" | "value" | "lead" | "control" | "check" | "open" | "knob" | "thumbnail">;
  /** 승인된 종류: nav · value · read · pick · agree · switch · thumb */
  variant?: "nav" | "value" | "read" | "pick" | "agree" | "switch" | "thumb";
  /** 제목 글자 */
  title?: ReactNode;
  /** 설명 글자 */
  description?: ReactNode;
  /** 오른쪽에 보이는 값 글자 (variant="value") */
  value?: ReactNode;
  /** 켜져 있나(제어형) — pick · agree 는 체크 표시, switch 는 스위치 */
  checked?: boolean;
  /** 처음 켜져 있나(비제어형) — 주지 않으면 꺼진 채 시작한다 */
  defaultChecked?: boolean;
  /** 켜지거나(true) 꺼질(false) 때 */
  onCheckedChange?: (checked: boolean) => void;
  /** 체크 표시가 바뀔 때 (pick · agree) */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** 폼 이름 — pick · agree 는 체크 표시가, switch 는 켜져 있을 때 "on" 이 폼 전송에 실린다 */
  name?: string;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLButtonElement>;
}
export declare function S1ListRow(props: S1ListRowProps): ReactElement;

export interface S1ExpandableCardProps extends Omit<HTMLAttributes<HTMLDivElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "open" | "defaultOpen" | "onOpenChange" | "title" | "subtitle" | "body" | "note" | "caption" | "onChange">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ header: "확인" }} */
  parts?: S1Parts<"header" | "text" | "title" | "subtitle" | "body" | "note" | "caption" | "toggleIcon" | "panelWrap" | "panel" | "panelTitle" | "panelSubtitle" | "panelBody" | "panelNote" | "panelCaption">;
  /** 펼쳐져 있나(제어형) */
  open?: boolean;
  /** 처음 펼쳐져 있나(비제어형) */
  defaultOpen?: boolean;
  /** 펼쳐지거나(true) 접힐(false) 때 — open 을 바꿔 정한 것은 되알리지 않는다 */
  onOpenChange?: (open: boolean) => void;
  /** 머리줄 title 글자 */
  title?: ReactNode;
  /** 머리줄 subtitle 글자 */
  subtitle?: ReactNode;
  /** 머리줄 body 글자 */
  body?: ReactNode;
  /** 머리줄 note 글자 */
  note?: ReactNode;
  /** 머리줄 caption 글자 */
  caption?: ReactNode;
  /** 펼쳐지는 내용 — 주면 예제 견본을 대신한다 */
  children?: ReactNode;
  /** s1:expandable-card:change */
  onChange?: (event: S1Event<{ open: boolean }>) => void;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLDivElement>;
}
export declare function S1ExpandableCard(props: S1ExpandableCardProps): ReactElement;

export interface S1DataTagProps extends Omit<HTMLAttributes<HTMLSpanElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "label">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<"label">;
  /** 승인된 변형: blue · red · gray */
  variant?: "blue" | "red" | "gray";
  /** 꼬리표 글자 (label 과 같다) */
  children?: ReactNode;
  /** 꼬리표 글자 — children 으로도 줄 수 있다 */
  label?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLSpanElement>;
}
export declare function S1DataTag(props: S1DataTagProps): ReactElement;

export interface S1DividerProps extends Omit<HTMLAttributes<HTMLHRElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<never>;
  /** 승인된 변형: x · y */
  variant?: "x" | "y";
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLHRElement>;
}
export declare function S1Divider(props: S1DividerProps): ReactElement;

export interface S1LnbProps extends Omit<HTMLAttributes<HTMLElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant" | "size" | "onCollapse" | "onToggle" | "items">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ head: "확인" }} */
  parts?: S1Parts<"head" | "collapse" | "collapseIcon" | "items" | "brand" | "brandLogo" | "item" | "itemIcon" | "itemToggle" | "subitems" | "group">;
  /** 승인된 종류: menu · brand */
  variant?: "menu" | "brand";
  /** 승인된 크기: md · lg */
  size?: "md" | "lg";
  /** s1:lnb:collapse */
  onCollapse?: (event: S1Event<{ collapsed: boolean }>) => void;
  /** s1:lnb:toggle */
  onToggle?: (event: S1Event<{ trigger: HTMLElement; expanded: boolean }>) => void;
  /** 메뉴 항목 — { label, href?, current?, disabled?, icon?, children? } 또는 글자. children 이 있으면 펼쳐지는 묶음이 된다. 주지 않으면 예제 내용 */
  items?: readonly S1LnbItemInput[];
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLElement>;
}
export declare function S1Lnb(props: S1LnbProps): ReactElement;

export interface S1FooterProps extends Omit<HTMLAttributes<HTMLElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ content: "확인" }} */
  parts?: S1Parts<"content" | "links" | "link" | "company" | "copyright" | "logo">;
  /** 승인된 변형: pc · mobile */
  variant?: "pc" | "mobile";
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLElement>;
}
export declare function S1Footer(props: S1FooterProps): ReactElement;

export interface S1CiProps extends Omit<HTMLAttributes<HTMLSpanElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref" | "variant">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: S1Parts<never>;
  /** 승인된 변형: s1 · samsung */
  variant?: "s1" | "samsung";
  /** 앱이 소유하는 내용 — 주면 예제 내용을 대신한다. */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLSpanElement>;
}
export declare function S1Ci(props: S1CiProps): ReactElement;

export interface S1LoginGnbProps extends Omit<HTMLAttributes<HTMLElement>, keyof AriaAttributes | "parts" | "className" | "style" | "children" | "ref">, S1Aria {
  /** 슬롯 이름별 내용·속성. 예: parts={{ service: "확인" }} */
  parts?: S1Parts<"service" | "lang" | "langIcon" | "langLabel">;

  className?: string;
  style?: CSSProperties;
  /** 루트 요소에 닿는 ref (안쪽 배선과 합쳐진다) */
  ref?: Ref<HTMLElement>;
}
export declare function S1LoginGnb(props: S1LoginGnbProps): ReactElement;
