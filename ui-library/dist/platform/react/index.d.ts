/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
import type { CSSProperties, ReactElement, ReactNode, Ref } from "react";

/** 슬롯 한 칸에 넣을 수 있는 값. 글자·요소를 그대로 주거나, 속성까지 함께 준다. */
export type S1SlotValue = ReactNode | { content?: ReactNode; attrs?: Record<string, unknown> };
/** 목록 한 줄. 글자 하나, 안쪽 목록(배열), 또는 슬롯 이름별 지정. */
export type S1ItemValue = ReactNode | readonly S1ItemValue[] | ({
  key?: string | number;
  attrs?: Record<string, unknown>;
} & Record<string, S1SlotValue | readonly S1ItemValue[] | undefined>);

export interface S1BaseProps {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: Record<string, S1SlotValue>;
  className?: string;
  style?: CSSProperties;
  [attribute: string]: unknown;
}

export interface S1InputProps extends S1BaseProps {
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 화면 기준: pc · mobile · password · password-mobile · search · search-mobile (기본 pc) */
  breakName?: "pc" | "mobile" | "password" | "password-mobile" | "search" | "search-mobile";
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: any) => void;
  onInput?: (event: any) => void;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  name?: string | number;
  placeholder?: string | number;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  /** 입력 요소에 직접 닿는 ref */
  inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  /** s1:input:clear */
  onClear?: (event: CustomEvent) => void;
  /** s1:input:search */
  onSearch?: (event: CustomEvent) => void;
}
export declare function S1Input(props: S1InputProps): ReactElement;

export interface S1ButtonProps extends S1BaseProps {
  /** 승인된 변형: primary · secondary · blue-line */
  variant?: "primary" | "secondary" | "blue-line";
  /** 승인된 크기: md · xsm · xxsm · lg */
  size?: "md" | "xsm" | "xxsm" | "lg";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
}
export declare function S1Button(props: S1ButtonProps): ReactElement;

export interface S1CheckboxProps extends S1BaseProps {
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: any) => void;
  onInput?: (event: any) => void;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  name?: string | number;
  placeholder?: string | number;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  /** 입력 요소에 직접 닿는 ref */
  inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}
export declare function S1Checkbox(props: S1CheckboxProps): ReactElement;

export interface S1RadioProps extends S1BaseProps {
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: any) => void;
  onInput?: (event: any) => void;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  name?: string | number;
  placeholder?: string | number;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  /** 입력 요소에 직접 닿는 ref */
  inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}
export declare function S1Radio(props: S1RadioProps): ReactElement;

export interface S1ToggleProps extends S1BaseProps {

}
export declare function S1Toggle(props: S1ToggleProps): ReactElement;

export interface S1ChipProps extends S1BaseProps {
  /** 승인된 변형: line · solid */
  variant?: "line" | "solid";
  /** 승인된 크기: sm · md */
  size?: "sm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
}
export declare function S1Chip(props: S1ChipProps): ReactElement;

export interface S1DropdownProps extends S1BaseProps {
  /** 승인된 변형: text · checkbox */
  variant?: "text" | "checkbox";
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  options?: readonly S1ItemValue[];
  /** s1:dropdown:change */
  onChange?: (event: CustomEvent) => void;
}
export declare function S1Dropdown(props: S1DropdownProps): ReactElement;

export interface S1SelectProps extends S1BaseProps {
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  options?: readonly S1ItemValue[];
  /** s1:select:change */
  onChange?: (event: CustomEvent) => void;
  /** s1:select:open */
  onOpen?: (event: CustomEvent) => void;
  /** s1:select:close */
  onClose?: (event: CustomEvent) => void;
}
export declare function S1Select(props: S1SelectProps): ReactElement;

export interface S1FilterChipProps extends S1BaseProps {
  /** 승인된 변형: line · solid */
  variant?: "line" | "solid";
  /** 승인된 크기: sm · md */
  size?: "sm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  options?: readonly S1ItemValue[];
  /** s1:filter-chip:change */
  onChange?: (event: CustomEvent) => void;
  /** s1:filter-chip:open */
  onOpen?: (event: CustomEvent) => void;
  /** s1:filter-chip:close */
  onClose?: (event: CustomEvent) => void;
}
export declare function S1FilterChip(props: S1FilterChipProps): ReactElement;

export interface S1TabProps extends S1BaseProps {
  /** 승인된 크기: md · sm · xsm */
  size?: "md" | "sm" | "xsm";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  tabs?: readonly S1ItemValue[];
  /** 앱이 소유하는 내용(탭 내용 등). 주면 예제 내용을 대신한다. */
  children?: ReactNode;
}
export declare function S1Tab(props: S1TabProps): ReactElement;

export interface S1PaginationProps extends S1BaseProps {
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  pages?: readonly S1ItemValue[];
}
export declare function S1Pagination(props: S1PaginationProps): ReactElement;

export interface S1TextareaProps extends S1BaseProps {
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: any) => void;
  onInput?: (event: any) => void;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  name?: string | number;
  placeholder?: string | number;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  /** 입력 요소에 직접 닿는 ref */
  inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}
export declare function S1Textarea(props: S1TextareaProps): ReactElement;

export interface S1MultiToggleProps extends S1BaseProps {
  /** 승인된 크기: md · sm */
  size?: "md" | "sm";
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  cells?: readonly S1ItemValue[];
  /** s1:multi-toggle:change */
  onChange?: (event: CustomEvent) => void;
}
export declare function S1MultiToggle(props: S1MultiToggleProps): ReactElement;

export interface S1ModalProps extends S1BaseProps {
  /** 승인된 변형: single · dual */
  variant?: "single" | "dual";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** s1:modal:open */
  onOpen?: (event: CustomEvent) => void;
  /** s1:modal:close */
  onClose?: (event: CustomEvent) => void;
}
export declare function S1Modal(props: S1ModalProps): ReactElement;

export interface S1TableProps extends S1BaseProps {
  /** 승인된 크기: md · sm · xsm */
  size?: "md" | "sm" | "xsm";
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  headerCells?: readonly S1ItemValue[];
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  rows?: readonly S1ItemValue[];
  /** s1:table:selectionchange */
  onSelectionchange?: (event: CustomEvent) => void;
}
export declare function S1Table(props: S1TableProps): ReactElement;

export interface S1MobileBottomNavProps extends S1BaseProps {
  /** 승인된 변형: home · search · notification · settings */
  variant?: "home" | "search" | "notification" | "settings";
}
export declare function S1MobileBottomNav(props: S1MobileBottomNavProps): ReactElement;

export interface S1MobileHeaderProps extends S1BaseProps {
  /** 승인된 변형: home-title · home-title-subtitle · standard-title · standard-title-close · standard-no-title · standard-no-title-close */
  variant?: "home-title" | "home-title-subtitle" | "standard-title" | "standard-title-close" | "standard-no-title" | "standard-no-title-close";
}
export declare function S1MobileHeader(props: S1MobileHeaderProps): ReactElement;

export interface S1TimePickerProps extends S1BaseProps {
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** s1:time-picker:open */
  onOpen?: (event: CustomEvent) => void;
  /** s1:time-picker:close */
  onClose?: (event: CustomEvent) => void;
  /** s1:time-picker:change */
  onChange?: (event: CustomEvent) => void;
}
export declare function S1TimePicker(props: S1TimePickerProps): ReactElement;

export interface S1DatePickerProps extends S1BaseProps {
  /** 승인된 변형: single · range */
  variant?: "single" | "range";
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** s1:date-picker:open */
  onOpen?: (event: CustomEvent) => void;
  /** s1:date-picker:close */
  onClose?: (event: CustomEvent) => void;
  /** s1:date-picker:change */
  onChange?: (event: CustomEvent) => void;
}
export declare function S1DatePicker(props: S1DatePickerProps): ReactElement;

export interface S1AssistButtonProps extends S1BaseProps {

}
export declare function S1AssistButton(props: S1AssistButtonProps): ReactElement;

export interface S1TextButtonProps extends S1BaseProps {
  /** 승인된 변형: primary · secondary */
  variant?: "primary" | "secondary";
}
export declare function S1TextButton(props: S1TextButtonProps): ReactElement;

export interface S1ModalContentProps extends S1BaseProps {
  /** 승인된 변형: single · dual */
  variant?: "single" | "dual";
  /** 승인된 크기: md · lg · xl */
  size?: "md" | "lg" | "xl";
  /** s1:modal-content:open */
  onOpen?: (event: CustomEvent) => void;
  /** s1:modal-content:close */
  onClose?: (event: CustomEvent) => void;
}
export declare function S1ModalContent(props: S1ModalContentProps): ReactElement;
