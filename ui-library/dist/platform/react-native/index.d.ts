/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
import type { ReactElement, ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";

/** 슬롯 한 칸에 넣을 수 있는 값. 글자·요소를 그대로 주거나, 속성까지 함께 준다. */
export type S1SlotValue = ReactNode | { content?: ReactNode; attrs?: Record<string, unknown> };
/** 목록 한 줄. 글자 하나, 안쪽 목록(배열), 또는 슬롯 이름별 지정. props 는 그 줄 요소에 직접 붙는 RN 속성(onPress 등). */
export type S1ItemValue = ReactNode | readonly S1ItemValue[] | ({
  key?: string | number;
  attrs?: Record<string, unknown>;
  props?: Record<string, unknown>;
} & Record<string, S1SlotValue | readonly S1ItemValue[] | Record<string, unknown> | undefined>);

export interface S1BaseProps {
  /** 슬롯 이름별 내용·속성. 예: parts={{ label: "확인" }} */
  parts?: Record<string, S1SlotValue>;
  /** 칸(part) 이름별 RN 속성. 예: partProps={{ back: { onPress: goBack } }} */
  partProps?: Record<string, Record<string, unknown>>;
  style?: StyleProp<ViewStyle>;
  /** 웹처럼 루트에 직접 주는 상태 속성(aria-pressed · data-state · hidden …) */
  [attribute: string]: unknown;
}

export interface S1ProviderProps {
  /** 다크 모드. 생략하면 기기 설정을 따른다. */
  dark?: boolean;
  /** Pretendard 를 expo-font 로 불러온 뒤 그 이름. 문자열 하나이거나 굵기별 이름 { 400: "Pretendard-Regular", … } */
  fontFamily?: string | Record<number, string> | ((weight: number) => string);
  /** true 면 모달·바텀시트를 RN Modal 이 아니라 놓인 자리 안에 그린다(미리보기·갤러리용) */
  inline?: boolean;
  children?: ReactNode;
}
export declare function S1Provider(props: S1ProviderProps): ReactElement;
export declare function useS1(): { dark: boolean; fontFamily: unknown; inline: boolean };
export declare function Icon(props: { name: string; color: string; style?: unknown }): ReactElement;

export type S1TextStyleName = "title-32b" | "title-32r" | "title-24b" | "title-20b" | "title-20r" | "title-18b" | "title-18m" | "title-16b" | "title-16m" | "title-14b" | "title-12b" | "title-14m" | "body-18m" | "body-16m" | "body-16r" | "body-14m" | "body-14r" | "body-12m" | "body-12r" | "body-10m" | "body-10r";
export declare function S1Text(props: { type?: S1TextStyleName; color?: string; children?: ReactNode; numberOfLines?: number }): ReactElement;

export declare const COLORS: Record<string, readonly [light: string, dark: string]>;
export declare const DIMENS: Record<string, number>;
export declare const NUMBERS: Record<string, number>;
export declare const SHADOWS: Record<string, unknown>;
export declare const TYPES: Record<S1TextStyleName, { fontSize: number; fontWeight: number; lineHeight: number; letterSpacing: number }>;
export declare const ICONS: Record<string, unknown>;
export declare const S1_VERSION: string;
export declare const S1_RELEASED_AT: string;
export declare const S1_CANONICAL_FINGERPRINT: string;
/** 칩 여러 개 중 하나만 켠다(웹의 data-s1-select="single"). 칩의 값은 data-value(없으면 value, 그것도 없으면 순서). */
export interface S1ChipGroupProps {
  /** 켜진 칩의 값 — 주면 제어형(값이 바뀌어야 켜진 칩이 바뀐다) */
  value?: string | number | null;
  /** 비제어형의 처음 값 */
  defaultValue?: string | number | null;
  /** 다른 칩이 켜졌을 때(켜진 칩을 다시 눌러도 꺼지지 않는다) */
  onChange?: (value: string | number, event: { detail: { value: string | number; selected: true } }) => void;
  /** 켜지기 전 — event.preventDefault() 하면 아무것도 바뀌지 않는다 */
  onBeforechange?: (event: { detail: { selected: boolean; value: string | number }; preventDefault(): void; readonly defaultPrevented: boolean }) => void;
  children?: ReactNode;
}
export declare function S1ChipGroup(props: S1ChipGroupProps): ReactElement;
export declare function S1Gallery(props: { only?: readonly string[]; breakName?: "pc" | "mobile" }): ReactElement;

export interface S1InputProps extends S1BaseProps {
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 입력 모양: password · search */
  mode?: "password" | "search";
  value?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  defaultValue?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  onChangeText?: (text: string) => void;
  onFocus?: (detail: any) => void;
  onBlur?: (detail: any) => void;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  maxLength?: number;
  inputRef?: any;
  /** s1:input:clear */
  onClear?: (detail: any) => void;
  /** s1:input:search */
  onSearch?: (detail: any) => void;
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
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  disabled?: boolean;
  name?: string;
}
export declare function S1Checkbox(props: S1CheckboxProps): ReactElement;

export interface S1RadioProps extends S1BaseProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  disabled?: boolean;
  name?: string;
}
export declare function S1Radio(props: S1RadioProps): ReactElement;

export interface S1ToggleProps extends S1BaseProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (value: boolean) => void;
}
export declare function S1Toggle(props: S1ToggleProps): ReactElement;

export interface S1ChipProps extends S1BaseProps {
  /** 승인된 변형: line · solid */
  variant?: "line" | "solid";
  /** 승인된 크기: sm · md */
  size?: "sm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** s1:chip:beforechange */
  onBeforechange?: (detail: any) => void;
  /** s1:chip:change */
  onChange?: (detail: any) => void;
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (value: boolean) => void;
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
  onChange?: (detail: any) => void;
  value?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  defaultValue?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
}
export declare function S1Dropdown(props: S1DropdownProps): ReactElement;

export interface S1SelectProps extends S1BaseProps {
  /** 승인된 크기: xxsm · xsm · md */
  size?: "xxsm" | "xsm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** s1:select:change */
  onChange?: (detail: any) => void;
  /** s1:select:open */
  onOpen?: (detail: any) => void;
  /** s1:select:close */
  onClose?: (detail: any) => void;
  open?: boolean;
  defaultOpen?: boolean;
  value?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  defaultValue?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  options?: readonly unknown[];
}
export declare function S1Select(props: S1SelectProps): ReactElement;

export interface S1FilterChipProps extends S1BaseProps {
  /** 승인된 변형: line · solid */
  variant?: "line" | "solid";
  /** 승인된 크기: sm · md */
  size?: "sm" | "md";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** s1:filter-chip:change */
  onChange?: (detail: any) => void;
  /** s1:filter-chip:open */
  onOpen?: (detail: any) => void;
  /** s1:filter-chip:close */
  onClose?: (detail: any) => void;
  open?: boolean;
  defaultOpen?: boolean;
  value?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  defaultValue?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  options?: readonly unknown[];
}
export declare function S1FilterChip(props: S1FilterChipProps): ReactElement;

export interface S1TabProps extends S1BaseProps {
  /** 승인된 크기: md · sm · xsm */
  size?: "md" | "sm" | "xsm";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  tabs?: readonly S1ItemValue[];
  value?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  defaultValue?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  onChange?: (detail: any) => void;
  /** 앱이 소유하는 내용(탭 내용 등). 주면 예제 내용을 대신한다. */
  children?: ReactNode;
}
export declare function S1Tab(props: S1TabProps): ReactElement;

export interface S1PaginationProps extends S1BaseProps {
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  pages?: readonly S1ItemValue[];
  page?: number;
  defaultPage?: number;
  totalPages?: number;
  onChange?: (detail: any) => void;
}
export declare function S1Pagination(props: S1PaginationProps): ReactElement;

export interface S1TextareaProps extends S1BaseProps {
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  value?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  defaultValue?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  onChangeText?: (text: string) => void;
  onFocus?: (detail: any) => void;
  onBlur?: (detail: any) => void;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  maxLength?: number;
  inputRef?: any;
}
export declare function S1Textarea(props: S1TextareaProps): ReactElement;

export interface S1MultiToggleProps extends S1BaseProps {
  /** 승인된 크기: md · sm · xsm */
  size?: "md" | "sm" | "xsm";
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  cells?: readonly S1ItemValue[];
  /** s1:multi-toggle:change */
  onChange?: (detail: any) => void;
  value?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  defaultValue?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
}
export declare function S1MultiToggle(props: S1MultiToggleProps): ReactElement;

export interface S1ModalProps extends S1BaseProps {
  /** 승인된 변형: single · dual */
  variant?: "single" | "dual";
  /** 화면 기준: pc · mobile (기본 pc) */
  breakName?: "pc" | "mobile";
  /** s1:modal:open */
  onOpen?: (detail: any) => void;
  /** s1:modal:close */
  onClose?: (detail: any) => void;
  onConfirm?: (detail: any) => void;
  onCancel?: (detail: any) => void;
  /** 열려 있나 — 안 주면 닫힘(그려지지 않음). */
  open?: boolean;
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
  onSelectionChange?: (detail: any) => void;
  selection?: readonly number[];
  defaultSelection?: readonly number[];
}
export declare function S1Table(props: S1TableProps): ReactElement;

export interface S1MobileBottomNavProps extends S1BaseProps {
  /** 승인된 변형: home · search · notification · settings */
  variant?: "home" | "search" | "notification" | "settings";
  /** s1:mobile-bottom-nav:beforechange */
  onBeforechange?: (detail: any) => void;
  /** s1:mobile-bottom-nav:change */
  onChange?: (detail: any) => void;
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (value: boolean) => void;
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
  onOpen?: (detail: any) => void;
  /** s1:time-picker:close */
  onClose?: (detail: any) => void;
  /** s1:time-picker:change */
  onChange?: (detail: any) => void;
  open?: boolean;
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
  onOpen?: (detail: any) => void;
  /** s1:date-picker:close */
  onClose?: (detail: any) => void;
  /** s1:date-picker:change */
  onChange?: (detail: any) => void;
  open?: boolean;
  value?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  defaultValue?: string | number | boolean | readonly string[] | { start?: string | null; end?: string | null } | null;
  disabledDates?: readonly string[];
  placeholder?: string;
  today?: string;
}
export declare function S1DatePicker(props: S1DatePickerProps): ReactElement;

export interface S1GnbProps extends S1BaseProps {
  /** 승인된 변형: center-between · start */
  variant?: "center-between" | "start";
  /** 승인된 크기: md · sm · xsm */
  size?: "md" | "sm" | "xsm";
  /** s1:gnb:open */
  onOpen?: (detail: any) => void;
  /** s1:gnb:close */
  onClose?: (detail: any) => void;
  openId?: string | null;
  defaultOpenId?: string | null;
}
export declare function S1Gnb(props: S1GnbProps): ReactElement;

export interface S1GnbSubMenuItemProps extends S1BaseProps {
  /** 앱이 소유하는 내용(탭 내용 등). 주면 예제 내용을 대신한다. */
  children?: ReactNode;
}
export declare function S1GnbSubMenuItem(props: S1GnbSubMenuItemProps): ReactElement;

export interface S1GnbSubMenuProps extends S1BaseProps {
  /** 목록 데이터 — 주지 않으면 예제 내용이 그려진다. */
  columns?: readonly S1ItemValue[];
}
export declare function S1GnbSubMenu(props: S1GnbSubMenuProps): ReactElement;

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
  onOpen?: (detail: any) => void;
  /** s1:modal-content:close */
  onClose?: (detail: any) => void;
  onConfirm?: (detail: any) => void;
  onCancel?: (detail: any) => void;
  /** 열려 있나 — 안 주면 닫힘(그려지지 않음). */
  open?: boolean;
}
export declare function S1ModalContent(props: S1ModalContentProps): ReactElement;

export interface S1BottomSheetOptionProps extends S1BaseProps {
  /** 승인된 변형: text · checkbox · radio · list */
  variant?: "text" | "checkbox" | "radio" | "list";
  /** s1:bottom-sheet-option:beforechange */
  onBeforechange?: (detail: any) => void;
  /** s1:bottom-sheet-option:change */
  onChange?: (detail: any) => void;
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (value: boolean) => void;
  /** 앱이 소유하는 내용(탭 내용 등). 주면 예제 내용을 대신한다. */
  children?: ReactNode;
}
export declare function S1BottomSheetOption(props: S1BottomSheetOptionProps): ReactElement;

export interface S1BottomSheetProps extends S1BaseProps {
  /** 승인된 변형: none · single · dual */
  variant?: "none" | "single" | "dual";
  /** s1:bottom-sheet:open */
  onOpen?: (detail: any) => void;
  /** s1:bottom-sheet:close */
  onClose?: (detail: any) => void;
  onConfirm?: (detail: any) => void;
  onCancel?: (detail: any) => void;
  /** 열려 있나 — 안 주면 열림(기본 true). false 면 닫힘. */
  open?: boolean;
}
export declare function S1BottomSheet(props: S1BottomSheetProps): ReactElement;

export interface S1ListRowProps extends S1BaseProps {
  /** 승인된 변형: nav · value · read · pick · agree · switch · thumb */
  variant?: "nav" | "value" | "read" | "pick" | "agree" | "switch" | "thumb";
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  onOpen?: (detail: any) => void;
}
export declare function S1ListRow(props: S1ListRowProps): ReactElement;

export interface S1ExpandableCardProps extends S1BaseProps {
  /** s1:expandable-card:change */
  onChange?: (detail: any) => void;
  open?: boolean;
  defaultOpen?: boolean;
}
export declare function S1ExpandableCard(props: S1ExpandableCardProps): ReactElement;

export interface S1DataTagProps extends S1BaseProps {
  /** 승인된 변형: blue · red · gray */
  variant?: "blue" | "red" | "gray";
  /** 앱이 소유하는 내용(탭 내용 등). 주면 예제 내용을 대신한다. */
  children?: ReactNode;
}
export declare function S1DataTag(props: S1DataTagProps): ReactElement;

export interface S1DividerProps extends S1BaseProps {
  /** 승인된 변형: x · y */
  variant?: "x" | "y";
}
export declare function S1Divider(props: S1DividerProps): ReactElement;

export interface S1LnbProps extends S1BaseProps {
  /** 승인된 변형: menu · brand */
  variant?: "menu" | "brand";
  /** 승인된 크기: md · lg */
  size?: "md" | "lg";
  /** s1:lnb:collapse */
  onCollapse?: (detail: any) => void;
  /** s1:lnb:toggle */
  onToggle?: (detail: any) => void;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
}
export declare function S1Lnb(props: S1LnbProps): ReactElement;

export interface S1FooterProps extends S1BaseProps {
  /** 승인된 변형: pc · mobile */
  variant?: "pc" | "mobile";
}
export declare function S1Footer(props: S1FooterProps): ReactElement;

export interface S1CiProps extends S1BaseProps {
  /** 승인된 변형: s1 · samsung */
  variant?: "s1" | "samsung";
  /** 앱이 소유하는 내용(탭 내용 등). 주면 예제 내용을 대신한다. */
  children?: ReactNode;
}
export declare function S1Ci(props: S1CiProps): ReactElement;

export interface S1LoginGnbProps extends S1BaseProps {

}
export declare function S1LoginGnb(props: S1LoginGnbProps): ReactElement;
