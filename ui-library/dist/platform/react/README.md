# S1 UI — React 부품 설명서

**배포본 번호 0.27.0** · 2026-10-21 판
이 번호가 최신인지는 디자인가이드 내려받기 화면에서 확인하세요 — 번호가 다르면 새로 받으면 됩니다.
코드에서는 `import { S1_VERSION } from "./s1-ui/platform/react"` 로 읽습니다(TypeScript 타입도 들어 있습니다).

S1 디자인 시스템의 **승인된 배포본 마크업을 그대로 옮긴 React 컴포넌트 35종**입니다.
마크업을 새로 쓰지 않았고 값·구조·속성은 배포본 예제와 같습니다. 서버 렌더링(Next.js 포함)을 지원합니다.

## 1. 시작하기

1. 압축을 풀면 나오는 `s1-ui` 폴더를 프로젝트의 `src/` 안에 그대로 넣습니다(아래 경로는 `src/s1-ui` 기준입니다).
2. 앱 진입 파일(Vite 는 `src/main.jsx`, Next.js 는 `app/layout.tsx`)에서 CSS 를 **한 번, 이 순서대로** 읽힙니다.

```js
import "./s1-ui/assets/css/tokens.css";      // 색·크기 토큰 (필수)
import "./s1-ui/assets/css/typography.css";  // 글자 스타일 클래스 typo-* (선택)
import "./s1-ui/s1-ui.base.css";             // 페이지 바탕·기본 글자색 (선택 — 다크 모드에서 바탕이 따라옵니다)
import "./s1-ui/s1-ui.css";                  // 부품 모양 (필수)
```

3. **글꼴(Pretendard Variable)** 은 묶음에 들어 있지 않습니다. `index.html` 의 `<head>`(Next.js 는 `<head>` 또는 `next/font`)에 아래 링크를 넣어야 설계한 모양 그대로 나옵니다. 없으면 부품은 그 글꼴이 깔린 컴퓨터에서만 그대로 보입니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
```

4. 쓸 것만 꺼내 씁니다(안 쓴 부품은 묶음에서 빠집니다).

```js
import { S1Button, S1Input } from "./s1-ui/platform/react";
```

5. **다크 모드**: `<html data-theme="dark">` 속성 하나로 부품 전체가 바뀝니다(끄려면 속성을 지웁니다). 페이지 바탕·기본 글자색은 위 `s1-ui.base.css` 를 읽히거나 직접 `background: var(--color-bg-level-0)` 로 칠하세요.
6. **Next.js (App Router)**: 부품 파일마다 `"use client"` 가 들어 있어 서버 컴포넌트 파일에서 그대로 import 해도 됩니다. 서버에서도 같은 마크업을 그리고, 열기·고르기 동작은 브라우저에서 붙습니다.
7. **TypeScript**: 별도 설정이 없습니다. `import { S1Select } from "./s1-ui/platform/react"` 하면 `index.d.ts` 의 타입이 붙습니다 — 허용되지 않은 variant·size 와 오타 난 prop 이름을 빌드 때 잡아 줍니다(`data-*` · `aria-*` 는 자유롭게 줄 수 있습니다).
8. JSX 런타임은 automatic 이어야 합니다(요즘 기본값 — `tsconfig` 의 `"jsx": "react-jsx"`, Babel 의 `runtime: "automatic"`).

## 2. 모든 부품이 같은 방식으로 받는 것

| 하고 싶은 것 | 쓰는 prop | 비고 |
|---|---|---|
| 글자 바꾸기 | `children` 또는 `label`(버튼·칩·꼬리표·체크 등) · `title`(모달·시트·접힘 카드…) | 한 칸을 더 세밀하게 바꾸려면 `parts={{ 슬롯이름: 글자 또는 요소 }}` |
| 목록 넣기 | `options` · `cells` · `tabs` · `rows` · `menus` · `items` · `columns` | **모든 목록 항목은 `{ value, label, disabled? }` 한 모양**입니다. 글자 하나는 값=글자로 봅니다. `disabled` 는 정본에 비활성 모양이 있는 멀티 토글 칸·시트 줄에서 적용됩니다 |
| 값 제어 | `value` / `defaultValue` + `onValueChange(value)` | `value` 를 주면 제어형 — 눌러도 부모가 `value` 를 안 바꾸면 모양이 그 값으로 되돌아옵니다. 안 주면 부품이 알아서 하고 `defaultValue` 가 처음 값 |
| 열고 닫기 | `open` / `defaultOpen` + `onOpenChange(open)` | 모달·모달 콘텐츠·바텀시트는 처음부터 지원, 셀렉트·날짜·시간·필터칩·접힘 카드·GNB 는 `onOpenChange`(와 `open`) |
| 켜고 끄기 | `selected` / `defaultSelected` + `onSelectedChange(selected)` | 칩·시트 목록 줄·하단 탭. 토글·리스트 행 스위치는 `checked` / `defaultChecked` + `onCheckedChange` |
| 폼에 실기 | `name` | 입력·체크·셀렉트·날짜·시간·토글·칩·멀티 토글 모두 `<form>` 전송에 값이 실립니다 |
| DOM 잡기 | `ref` | 루트 요소로 전달됩니다(부품 동작은 그대로) |
| 모양 덧입히기 | `className` · `style` · 그 밖의 HTML 속성 | 루트 요소에 붙습니다 |

### 이벤트 받는 모양 (`onChange` 는 이벤트, `onValueChange` 는 값)

| 부품 | `onChange` 가 주는 것 | `onValueChange` 가 주는 것 |
|---|---|---|
| 입력칸·여러 줄 입력·체크박스·라디오·리스트 행의 체크 | 브라우저 표준 `ChangeEvent` — `event.target.value` · `event.target.checked` | (없음) |
| 고르는 부품 (`S1Dropdown` · `S1Select` · `S1FilterChip` · `S1Tab` · `S1MultiToggle` · `S1TimePicker` · `S1DatePicker` · `S1BottomSheet`) | 배포본 사용자 이벤트 `CustomEvent` — `event.detail.value` · `event.detail.option` (**0.22.0 과 똑같은 모양**이라 옛 코드가 그대로 돕니다) | **고른 값 하나** — 준 `value` 그대로(숫자로 줬으면 숫자). 두 번째 인자 `detail` 이 이벤트의 detail |

- 규칙은 하나입니다: **`onChange` = 이벤트를 받는 옛 방식(바뀌지 않았습니다), `onValueChange` = 값만 받는 새 방식**. 값을 상태에 쥘 때는 `onValueChange` 가 간단합니다. 타입 정의(`index.d.ts`)에도 같은 설명이 적혀 있습니다.
- 이벤트 이름은 React 대소문자입니다: `onBeforeChange` · `onSelectionChange`. 옛 이름(`onBeforechange` · `onSelectionchange`)도 한동안 함께 받습니다.
- 화면이 정한 변화(`open`·`value`·`page` 를 바꿔서 생긴 열림·고름)는 `onOpenChange`·`onValueChange`·`onPageChange` 로 **되알리지 않습니다** — 상태가 루프를 돌지 않습니다.

### 견본 글자는 언제 나오나

- 부품에 **내용 prop(`label` · `children` · `title` · `message` · `description` …)을 하나도 주지 않으면** 승인 예제의 견본 글자가 그대로 그려집니다(보기용).
- **하나라도 주면** 주지 않은 글자 칸은 비어 있거나 그려지지 않습니다 — 견본 문구가 실서비스 화면에 새어 나오지 않습니다. 단, 꼭 필요한 단추 글자(모달 취소·확인, 시트 적용)와 aria-label 은 견본이 아니라 기본 글자라 그대로 남습니다 — 바꾸려면 `confirmLabel` · `cancelLabel` · `applyLabel` 을 주세요.
- `parts` 로만 쓰던 0.22.0 코드는 예전 그대로 견본이 남습니다(리스트 행의 새 종류(value · read · pick · agree · switch · thumb)는 예외 — `parts` 를 주면 안 준 칸이 비어 있습니다).
- 목록(메뉴·선택지·탭…)은 목록 prop 을 안 줬을 때만 견본 목록이 나옵니다.

### 0.22.0 에서 올릴 때

- **옛 코드는 그대로 돕니다**: `parts` 슬롯 이름(`parts.label`(모달·시트 단추) · 접힘 카드의 `parts.title` 등 · LNB `parts.item`/`itemIcon` · 리스트 행 `parts.chevron` 에 준 토글)과 `onChange(event)` 를 바꾸지 않아도 됩니다. 새 이름(`cancelLabel` · `confirmLabel` · `applyLabel` · `items`)을 같이 주면 새 이름이 이깁니다.
- **타입이 엄격해졌습니다**: 아무 prop 이나 통과시키던 열린 타입을 닫았기 때문에, TypeScript 를 쓰는 프로젝트는 0.22.0 코드에서 **타입 오류가 새로 보일 수 있습니다**(동작은 같습니다). 흔한 고침:
  - `aria-checked={String(on)}` → `aria-checked={on}` 또는 `on ? "true" : "false"` (React 의 표준 타입이 `boolean | "true" | "false" | "mixed"` 입니다 — `string` 은 안 됩니다).
  - 표의 `control.attrs.onClick` · 슬롯 `attrs` 의 이벤트 핸들러 → 매개변수 타입을 DOM 의 `MouseEvent` 가 아니라 React 의 `React.MouseEvent` 로(또는 타입을 생략).
  - 오타 난 prop 이름 → 타입 정의가 가리키는 이름으로.

## 3. 예시 (그대로 붙여 넣으면 됩니다)

### 3-1. 입력과 폼

```jsx
import { useState } from "react";
import { S1Button, S1Checkbox, S1Input, S1Textarea } from "./s1-ui/platform/react";

export default function ProfileForm() {
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  return (
    <form onSubmit={(event) => { event.preventDefault(); }}>
      <S1Input name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="이름" label="이름" />
      <S1Textarea name="memo" defaultValue="처음 메모" label="메모" />
      <S1Checkbox name="agree" checked={agree} onChange={(event) => setAgree(event.target.checked)}>약관에 동의합니다</S1Checkbox>
      <S1Button type="submit">저장</S1Button>
    </form>
  );
}
```

- 입력칸의 지우기(X) 단추를 누르면 `onChange` 가 빈 값으로 옵니다(상태가 함께 비워집니다). `type="password"` · `type="search"` 로 비밀번호·검색 입력을 고르고, `breakName="pc"|"mobile"` 로 화면 기준을 고릅니다(옛 이름 `breakName="password-mobile"` 등도 받습니다).

### 3-2. 목록 고르기 (셀렉트 · 필터 칩 · 드롭다운)

```jsx
import { useState } from "react";
import { S1FilterChip, S1Select } from "./s1-ui/platform/react";

const CITIES = [{ value: "seoul", label: "서울" }, { value: "busan", label: "부산" }, "제주"];

export default function CityPicker() {
  const [city, setCity] = useState("busan");
  const [sort, setSort] = useState("latest");
  return (
    <div>
      <S1Select name="city" options={CITIES} value={city} onValueChange={(next) => setCity(String(next))} placeholder="도시 선택" />
      <S1FilterChip title="정렬" options={[{ value: "latest", label: "최신순" }, { value: "name", label: "이름순" }]} value={sort} onValueChange={(next) => setSort(String(next))} />
      <p>{city} · {sort}</p>
    </div>
  );
}
```

### 3-3. 창 열기 (모달 · 바텀시트)

**모달을 열려면** `open` 에 상태를 넘기고, 닫힘은 `onOpenChange` 로 받아 상태를 맞춥니다(아래 예시). 열려 있는 동안 스크롤 잠금·초점 가둠·Esc 가 부품이 알아서 따라옵니다.

```jsx
import { useState } from "react";
import { S1BottomSheet, S1Button, S1Modal } from "./s1-ui/platform/react";

export default function Windows() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [size, setSize] = useState("보통");
  return (
    <div>
      <S1Button onClick={() => setConfirmOpen(true)}>삭제</S1Button>
      <S1Modal open={confirmOpen} onOpenChange={setConfirmOpen} title="삭제할까요?" message="되돌릴 수 없습니다." cancelLabel="취소" confirmLabel="삭제" onConfirm={() => console.log("삭제")} />

      <S1Button onClick={() => setSheetOpen(true)}>글자 크기: {size}</S1Button>
      <S1BottomSheet open={sheetOpen} onOpenChange={setSheetOpen} title="글자 크기" options={["작게", "보통", "크게"]} value={size} onValueChange={(next) => setSize(String(next))} />
    </div>
  );
}
```

- 창이 닫힌 이유는 `onOpenChange(false, detail)` 의 `detail.reason` 으로 옵니다(`confirm` · `cancel` · `escape` · `close-button` · `backdrop` …). 확인·취소 단추는 `onConfirm` · `onCancel` 로도 받습니다.
- `S1ModalContent` 는 같은 모양에 본문 자리를 `children` 으로 받습니다. 바텀시트에 `options` 를 주면 하나만 고르는 시트가 되고(고르면 닫힘 — `closeOnSelect={false}` 로 끌 수 있습니다), 본문을 직접 구성하려면 `children` 을 줍니다.
- `open` 을 안 주면 모달은 닫힌 채로, 바텀시트는 보이는 채로 시작합니다(종전과 같습니다 — `defaultOpen` 으로 바꿉니다).

### 3-4. 날짜와 시간

```jsx
import { useState } from "react";
import { S1DatePicker, S1TimePicker } from "./s1-ui/platform/react";

export default function Reservation() {
  const [date, setDate] = useState("2026-10-20");
  const [time, setTime] = useState("09:30");
  return (
    <div>
      <S1DatePicker name="date" value={date} onValueChange={(next) => setDate(typeof next === "string" ? next : "")} />
      <S1TimePicker name="time" value={time} onValueChange={setTime} />
      <p>{date} {time}</p>
    </div>
  );
}
```

- 날짜는 `"YYYY-MM-DD"`, 기간(`variant="range"`)은 `{ start, end }`. 시간은 12시간 표기여도 값은 24시간 `"HH:mm"` 로 주고받습니다.

### 3-5. 메뉴 (GNB · LNB · 목록 행)

```jsx
import { useState } from "react";
import { S1Gnb, S1ListRow, S1Lnb } from "./s1-ui/platform/react";

export default function Navigation() {
  const [push, setPush] = useState(true);
  return (
    <div>
      <S1Gnb
        logo="S1 관제"
        menus={[
          { label: "공지사항", current: true, href: "/notice" },
          { label: "서비스", columns: [{ title: "출입", items: [{ label: "출입 기록", href: "/log" }, "방문 예약"] }] }
        ]}
      />
      <S1Lnb items={[{ label: "개요", current: true, href: "/" }, { label: "설비", children: [{ label: "목록", href: "/equip" }, { label: "점검", href: "/check" }] }, { label: "준비 중", disabled: true }]} />
      <S1ListRow variant="switch" title="알림" description="새 출입 기록 알려 주기" checked={push} onCheckedChange={setPush} />
    </div>
  );
}
```

- GNB 는 `columns` 가 있는 메뉴의 하위 메뉴 판을 함께 그리고 알아서 펼칩니다(따로 붙일 필요가 없습니다).
- 리스트 행은 `variant` 로 `nav` · `value` · `read` · `pick` · `agree` · `switch` · `thumb` 를 고릅니다. `value`(오른쪽 값 글자) · `title` · `description` 을 주고, pick·agree 는 체크, switch 는 `checked` · `onCheckedChange` 입니다.

### 3-6. 표와 페이지

```jsx
import { useState } from "react";
import { S1Pagination, S1Table } from "./s1-ui/platform/react";

const ROWS = Array.from({ length: 23 }, (_, index) => [`장비 ${index + 1}`, index % 2 ? "점검" : "정상"]);

export default function Equipment() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <S1Table headerCells={["이름", "상태"]} rows={ROWS.slice((page - 1) * 10, page * 10)} onSelectionChange={(event) => console.log(event.detail.selectedCount)} />
      <S1Pagination page={page} totalPages={Math.ceil(ROWS.length / 10)} onPageChange={setPage} />
    </div>
  );
}
```

### 3-7. 칩 묶음 · 탭 · 하단 탭

```jsx
import { useState } from "react";
import { S1Chip, S1MobileBottomNav, S1Tab } from "./s1-ui/platform/react";

export default function Filters() {
  const [filter, setFilter] = useState("전체");
  const [tab, setTab] = useState("home");
  return (
    <div>
      <div data-s1-select="single">
        {["전체", "진행", "완료"].map((label) => (
          <S1Chip key={label} value={label} selected={filter === label} onSelectedChange={(on) => { if (on) setFilter(label); }}>{label}</S1Chip>
        ))}
      </div>
      <S1Tab tabs={[{ value: "a", label: "개요", panel: "개요 내용" }, { value: "b", label: "상세", panel: "상세 내용" }]} defaultValue="a" />
      <nav role="tablist">
        <S1MobileBottomNav variant="home" label="홈" selected={tab === "home"} onSelectedChange={(on) => { if (on) setTab("home"); }} />
        <S1MobileBottomNav variant="search" label="검색" selected={tab === "search"} onSelectedChange={(on) => { if (on) setTab("search"); }} />
      </nav>
    </div>
  );
}
```

- **칩 묶음에서 하나만 켜기**: 칩을 감싼 요소에 `data-s1-select="single"` 을 달면 부품이 알아서 하나만 켭니다. 켜진 칩을 다시 눌러도 꺼지지 않습니다.
- **막고 싶을 때**(저장 안 한 변경 확인 등): 제어형(`selected`)이면 부품은 `selected` 가 바뀔 때만 모양이 바뀝니다 — `onSelectedChange` 에서 상태를 바꾸지 않으면 안 바뀝니다. `onBeforeChange(event)` 에서 `event.preventDefault()` 해도 됩니다.
- **시트 목록 줄(`S1BottomSheetOption`)을 직접 쓸 때**: 목록 묶음에 `data-s1-select="single"`(고른 뒤 닫으려면 `data-s1-close-on-select` 도)을 달면 고르고 나머지는 풀립니다. `S1BottomSheet` 의 `options` 가 이 일을 대신합니다.
- 하단 탭 `selected` 를 안 주면 처음엔 탭이 모두 켜진 모양으로 시작합니다(종전 모양) — `defaultSelected` 또는 `selected` 를 주세요.

## 4. 서버 렌더링

부품은 서버에서도 같은 마크업을 그립니다. 열기·고르기·키보드 동작(배포본 스크립트)은 브라우저에서 붙습니다. id 는 `useId` 로 만들어 같은 부품을 여러 번 놓아도 겹치지 않습니다.

## 5. 어떤 부품을 쓸까

**먼저 `preview.html` 을 브라우저로 열어 보세요.** 35종이 실제 모습으로 그려지고, 크기·변형과 "언제 쓰나"가 함께 보입니다.

| 컴포넌트 | 변형(variant) | 크기(size) | 화면(breakName) | 그 밖에 받는 값 | 언제 쓰나 |
|---|---|---|---|---|---|
| `S1Input` | — | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` + `type` | `type` · `label` · `value` · `defaultValue` · `onChange` · `onInput` · `onBlur` · `onFocus` · `name` · `placeholder` · `disabled` · `required` · `readOnly` · `inputRef` · `onClear` · `onSearch` | 한 줄 텍스트·숫자를 입력받을 때 — 로그인·검색·필터·설정 폼 등. 라벨·도움말과 함께 쓰려면 Input Slots(라벨/헬퍼 조합) 패턴으로 감싼다. 안내메시지(helper)는 필요한 화면에서만 켠다 — 계정 관련 화면(로그인·비밀번호 변경·회원가입)처럼 입력 규칙을 미리 알려야 하는 곳이 대표적이다. 일반 입력·검색에는 넣지 않는다(river 결정 2026-09-07). |
| `S1Button` | `primary` `secondary` `blue-line` | PC `md` `xsm` `xxsm` · 모바일 `lg` | `pc` `mobile` | `label` | 사용자가 실행할 액션을 트리거할 때 — 저장·확인·취소·다음 등. 화면에서 가장 중요한 단일 액션은 primary, 보조 액션은 secondary, 약한 강조는 blue-line. |
| `S1Checkbox` | — | — | — | `value` · `onChange` · `onInput` · `onBlur` · `onFocus` · `name` · `disabled` · `required` · `checked` · `defaultChecked` · `inputRef` · `label` | 여러 항목을 독립적으로 켜고 끌 때(다중 선택). 약관 동의처럼 항목마다 따로 켜고 끌 때. |
| `S1Radio` | — | — | — | `value` · `onChange` · `onInput` · `onBlur` · `onFocus` · `name` · `disabled` · `required` · `checked` · `defaultChecked` · `inputRef` · `label` | 여러 보기 중 하나만 고를 때(상호배타). |
| `S1Toggle` | — | — | — | `checked` · `defaultChecked` · `onCheckedChange` · `onChange` · `name` · `value` · `disabled` · `label` | 단일 설정을 즉시 켜고 끌 때(즉시 반영). |
| `S1Chip` | `line` `solid` | PC `sm` `md` · 모바일 `sm` | `pc` `mobile` | `selected` · `defaultSelected` · `onSelectedChange` · `onBeforeChange` · `onChange` · `label` · `value` · `name` | 선택 가능한 태그·필터를 나열할 때. filter 는 드롭다운으로 값을 고르고 적용 완료(complete)를 표시할 때. |
| `S1Dropdown` | `text` `checkbox` | `xxsm` `xsm` `md` | — | `value` · `defaultValue` · `onValueChange` · `onChange` · `options` | 트리거를 눌러 옵션 목록에서 하나를 고를 때(글자 유형). 한 목록에서 여러 항목을 동시에 고를 때(체크박스 유형) — 필터·대상 선택 등. Select 의 기반 컴포넌트. |
| `S1Select` | — | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` | `value` · `defaultValue` · `onValueChange` · `onChange` · `name` · `disabled` · `placeholder` · `open` · `onOpenChange` · `options` | 단일 값을 목록에서 고르는 폼 필드일 때. Dropdown 토큰(--dropdown-*)을 재사용한다. |
| `S1FilterChip` | `line` `solid` | PC `sm` `md` · 모바일 `md` | `pc` `mobile` | `value` · `defaultValue` · `onValueChange` · `onChange` · `name` · `disabled` · `open` · `onOpenChange` · `title` · `options` | 목록·표의 정렬/기간/범주 같은 조건을 바꿀 때. 선택한 값을 칩 자체에 계속 보여줘야 할 때(무엇이 걸려 있는지 한눈에). |
| `S1Tab` | — | PC `md` `sm` `xsm` · 모바일 `sm` | `pc` `mobile` | `value` · `defaultValue` · `onValueChange` · `onChange` · `tabs` | 같은 화면에서 콘텐츠 영역을 전환할 때. 정본에 등록된 플랫폼과 크기 중 사용 맥락에 맞는 항목을 고른다. |
| `S1Pagination` | — | `28` | — | `page` · `defaultPage` · `totalPages` · `onPageChange` · `onChange` | 긴 목록·표를 페이지로 나눠 이동할 때. |
| `S1Textarea` | — | — | `pc` `mobile` | `value` · `defaultValue` · `onChange` · `onInput` · `onBlur` · `onFocus` · `name` · `placeholder` · `disabled` · `required` · `readOnly` · `inputRef` · `label` | 여러 줄 텍스트를 입력받을 때(메모·설명 등). Input 과 시각 동일 — --input-* 토큰을 공유한다. |
| `S1MultiToggle` | — | `md` `sm` `xsm` | — | `value` · `defaultValue` · `onValueChange` · `onChange` · `name` · `cells` | 선택지가 2~4개로 적고 서로 배타적일 때(정렬 기준·기간 범위 등). 선택 결과가 즉시 화면에 반영돼야 할 때. |
| `S1Modal` | `single` `dual` | — | `pc` `mobile` | `open` · `defaultOpen` · `onOpenChange` · `confirmLabel` · `cancelLabel` · `onConfirm` · `onCancel` · `title` · `message` | 확인·알림 등 흐름을 멈추고 결정을 받을 때. Single=알림/설명체 1버튼, Dual=확인/질문체 2버튼. |
| `S1Table` | — | PC `md` `sm` `xsm` | — | `onSelectionChange` · `headerCells` · `rows` | 행·열의 정형 데이터를 보여줄 때. 정렬·선택(체크박스)·행 hover/selected 가 필요할 때. |
| `S1MobileBottomNav` | `home` `search` `notification` `settings` | — | — | `selected` · `defaultSelected` · `onSelectedChange` · `onBeforeChange` · `onChange` · `label` · `value` | 모바일 화면에서 최상위 영역 간 이동을 항상 보이게 둘 때. 탭 수가 3~5개로 고정된 주요 메뉴 구조일 때. |
| `S1MobileHeader` | `home-title` `home-title-subtitle` `standard-title` `standard-title-close` `standard-no-title` `standard-no-title-close` | — | — | `title` | 모바일 앱 또는 모바일 웹 화면에서 상단 전역 크롬과 화면 이동 동작을 제공할 때. 회원가입처럼 앱바 안 제목을 비우고 본문 큰 제목을 사용하는 화면에는 Standard / No Title을 쓴다. |
| `S1TimePicker` | — | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` | `value` · `defaultValue` · `onValueChange` · `name` · `placeholder` · `disabled` · `open` · `onOpenChange` · `onChange` | 시간(시/분)을 드롭다운 목록에서 고를 때. |
| `S1DatePicker` | `single` `range` | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` | `value` · `defaultValue` · `onValueChange` · `name` · `placeholder` · `disabled` · `open` · `onOpenChange` · `onChange` | 날짜(단일/기간)를 고를 때. 트리거는 Base Input 필드. PC 는 팝오버 캘린더, Mobile 은 바텀시트로 표출. |
| `S1Gnb` | `center-between` `start` | `md` `sm` `xsm` | — | `menus` · `subMenuType` · `logo` · `langLabel` · `onOpenChange` | PC 상단 글로벌 내비게이션이 필요할 때. 로고 + 메뉴 + 유틸(아이콘) 조립. |
| `S1GnbSubMenuItem` | `depth` | — | — | `depth` · `label` · `href` · `current` | GNB 하위메뉴 패널의 카테고리 제목 또는 항목을 놓을 때. |
| `S1GnbSubMenu` | — | — | — | `type` · `columns` | GNB 주 메뉴 아래로 하위 메뉴를 펼쳐 보일 때. |
| `S1AssistButton` | — | — | — | `label` | 본문 옆이나 목록 행 안처럼 좁은 자리에서, 눈에 덜 띄는 보조 동작 하나를 둘 때. 코어 Button 의 4크기(MD·XSM·XXSM·LG) 어디에도 맞지 않는, 원본에 정의된 고정 32px 자리. |
| `S1TextButton` | `primary` `secondary` | — | — | `label` | 링크에 가까운 가벼운 보조 동작(더보기·자세히 등)을 텍스트만으로 표시할 때. Primary 는 강조가 필요한 텍스트 액션, Secondary 는 덜 중요한 텍스트 액션. |
| `S1ModalContent` | `single` `dual` | PC `md` `lg` `xl` | — | `open` · `defaultOpen` · `onOpenChange` · `confirmLabel` · `cancelLabel` · `onConfirm` · `onCancel` · `title` | 입력창·표·이미지처럼 확인 계열(짧은 텍스트)보다 큰 본문이 필요할 때. Single=알림/설명체 1버튼, Dual=확인/질문체 2버튼(확인 계열과 같은 규칙). |
| `S1BottomSheetOption` | `text` `checkbox` `radio` `list` | — | — | `selected` · `defaultSelected` · `onSelectedChange` · `onBeforeChange` · `onChange` · `label` · `value` · `disabled` | 바텀시트 본문에 고를 것을 줄로 늘어놓을 때. Text = 한 값 고르기(고른 줄에 파란 체크), Checkbox = 여러 값 고르기, Radio = 한 값 고르기(동그라미 표시), List = 사람·항목처럼 아바타와 설명이 함께 있는 줄. |
| `S1BottomSheet` | `none` `single` `dual` | — | — | `open` · `defaultOpen` · `onOpenChange` · `options` · `value` · `defaultValue` · `onValueChange` · `closeOnSelect` · `title` · `applyLabel` | 모바일에서 목록을 띄워 고르게 할 때 — 드롭다운 대신 쓴다(density-policy mobileSubstitutes.dropdown). 모바일에서 날짜·시간처럼 넓은 선택 UI 를 띄울 때. Footer=None 은 고르는 즉시 적용되는 목록, Single 은 '적용' 하나, Dual 은 '취소+적용'. |
| `S1ListRow` | `variant` | — | — | `title` · `description` · `value` · `checked` · `defaultChecked` · `onCheckedChange` · `onChange` · `name` | 같은 모양의 줄이 반복되는 목록을 만들 때. |
| `S1ExpandableCard` | — | — | — | `open` · `defaultOpen` · `onOpenChange` · `title` · `subtitle` · `body` · `note` · `caption` · `onChange` | 한 화면에 여러 덩어리를 쌓아 두고, 필요한 것만 펴서 보게 할 때. 질문과 답처럼 제목만으로 고르고 내용은 접어 두는 목록. |
| `S1DataTag` | `blue` `red` `gray` | — | — | `label` | 표나 목록에서 한 줄의 상태를 한 눈에 보이게 할 때. 승인·확인(파랑), 주의·에러(빨강)처럼 뜻이 정해진 상태를 표시할 때. 그 밖의 중립 상태(대기 등)는 회색으로 표시할 때. |
| `S1Divider` | `x` `y` | — | — | `parts` | 목록 줄 사이를 나눌 때. 표 위·아래처럼 영역을 크게 끊을 때(강한선). 한 줄 안에서 값과 값을 끊을 때(세로선). |
| `S1Lnb` | `variant` | `md` `lg` | — | `onCollapse` · `onToggle` · `items` | 화면 왼쪽에 세로로 서서 같은 서비스 안의 큰 영역을 오가는 메뉴가 필요할 때. 하위메뉴(2뎁스)까지 한 판에서 보여 줄 때. |
| `S1Footer` | `pc` `mobile` | — | — | `parts` | 화면 맨 아래에 이용약관·개인정보 처리방침·회사 정보·카피라이트를 보여줄 때. PC 화면에서는 회사 정보와 로고까지 함께 보여줄 때(PC), 모바일 화면에서는 링크와 카피라이트만 간단히 보여줄 때(Mobile). |
| `S1Ci` | `s1` `samsung` | — | — | `parts` | 화면에 회사 로고를 보여줄 때(에스원 · 삼성). 밝은 로고(White)가 필요한 어두운 바탕, 브랜드색(Blue), 회색(Dark) 중에서 바탕에 맞춰 고를 때. |
| `S1LoginGnb` | — | — | — | `parts` | 로그인 화면 맨 위에 서비스 이름과 언어 선택을 보여줄 때. |

크기·변형은 위에 적힌 값만 쓸 수 있습니다. 다른 값을 주면 그 자리에서 오류로 알려 줍니다(TypeScript 는 빌드 때 잡습니다).

### 이럴 땐 다른 걸 쓰세요

| 컴포넌트 | 대신 쓸 것 |
|---|---|
| `S1Input` | 여러 줄 입력은 Textarea 를 쓴다. 선택지 중 하나를 고르는 입력은 Select·Dropdown, 날짜·시간은 DatePicker·TimePicker 를 쓴다. 안내메시지가 필요하다는 이유로 '계정용 인풋' 같은 별도 컴포넌트를 만들지 않는다 — 안내메시지는 켜고 끄는 선택 슬롯이다. 업계 관행도 검색만 별도 컴포넌트로 가르고, 쓰이는 화면으로는 가르지 않는다(river 결정 2026-09-07). |
| `S1Button` | 페이지 이동만 하는 것은 링크를 고려한다. on/off 상태 전환은 Toggle, 다중 선택은 Checkbox·Chip 을 쓴다. |
| `S1Checkbox` | 여러 보기 중 하나만 고를 때는 Radio. 단일 on/off 설정은 Toggle. |
| `S1Radio` | 여러 개 동시 선택은 Checkbox. 단일 on/off 는 Toggle. |
| `S1Toggle` | 여러 항목 다중 선택은 Checkbox. 상호배타 다중 보기는 Radio. |
| `S1Chip` | 단일 액션 실행은 Button. 긴 목록의 단일 선택은 Select·Dropdown. |
| `S1Dropdown` | 즉시 실행 액션 그룹은 Button. 적은 수의 상호배타 선택은 Radio. 항목이 3~4개 이하로 적고 항상 보여도 되는 다중 선택은 목록을 접지 말고 Checkbox 를 펼쳐 쓴다. |
| `S1Select` | 다중 선택은 Checkbox·Chip. 즉시 실행 메뉴는 Dropdown/Button. |
| `S1FilterChip` | 단순 태그·상태 표시 — Chip 을 쓴다(누를 수 없는 표시용). 선택지가 배타적이고 개수가 적어 항상 펼쳐 두는 편이 나을 때 — Multi Toggle 을 쓴다. 폼 안의 값 입력 — Select Box 를 쓴다. |
| `S1Tab` | 페이지 이동은 Navigation. 상호배타 폼 선택은 Radio. |
| `S1Pagination` | 무한 스크롤 UX 에는 쓰지 않는다. 적은 항목은 페이지네이션 없이 한 번에 보여준다. |
| `S1Textarea` | 한 줄 입력은 Input. 선택형 입력은 Select·Dropdown. |
| `S1MultiToggle` | 선택지가 5개 이상이거나 길이가 들쭉날쭉할 때 — Select Box 를 쓴다. 여러 개를 동시에 고를 수 있어야 할 때 — Checkbox·Filter Chip 을 쓴다. on/off 하나만 있을 때 — Toggle 을 쓴다. |
| `S1Modal` | 비차단 알림은 토스트/인라인 메시지. 복잡한 폼·다단계는 별도 페이지·패널을 고려한다. |
| `S1Table` | 카드형 비정형 목록에는 쓰지 않는다. |
| `S1MobileBottomNav` | PC 화면 — PC 전역 이동은 GNB 를 쓴다. 항목이 자주 바뀌거나 6개 이상인 경우(더보기/드로어를 고려한다). |
| `S1MobileHeader` | PC 화면의 전역 내비게이션에는 GNB를 쓴다. 모바일 화면이 아닌 PC 전용 헤더에는 사용하지 않는다. |
| `S1TimePicker` | 날짜는 DatePicker. 자유 텍스트만 필요하면 Input. |
| `S1DatePicker` | 시간만 고를 때는 TimePicker. 자유 텍스트 날짜 입력만 필요하면 Input. |
| `S1Gnb` | 사이드바 내비게이션은 Navigation. 모바일 하단 탭은 Mobile Bottom Nav. |
| `S1GnbSubMenuItem` | 상단바의 주 메뉴는 GNB 의 메뉴 슬롯을 쓴다. 패널 없이 이 부품만 화면에 두지 않는다. |
| `S1GnbSubMenu` | 모바일에는 쓰지 않는다(PC 전용). 단일 목록 하나만 띄우는 자리에는 Dropdown 을 쓴다. |
| `S1AssistButton` | 화면의 주 액션(저장·확인 등)에는 코어 Button 을 쓴다. 배경·테두리가 없는 링크형 액션은 Text Button 을 쓴다. |
| `S1TextButton` | 배경·테두리가 있는 버튼이 필요하면 코어 Button 또는 Assist Button 을 쓴다. 페이지 이동 전용 링크는 <a> 를 우선 고려한다. |
| `S1ModalContent` | 짧은 확인 문구 하나면 확인 계열 Modal 을 쓴다. 페이지 전체를 차지하는 다단계 폼은 별도 페이지를 고려한다. |
| `S1BottomSheetOption` | 바텀시트 밖 — PC 목록은 Dropdown 을 쓴다. 표의 행 — Table 을 쓴다. |
| `S1BottomSheet` | PC 화면 — PC 는 드롭다운·팝오버·모달을 쓴다. 정본 시트는 모바일 폭(360) 기준이다. 확인·알림처럼 짧은 결정 — Modal 을 쓴다. 비차단 알림 — 토스트·인라인 메시지. |
| `S1ListRow` | 표의 행 — Table 을 쓴다. 바텀시트 안의 고르기 줄 — Bottom Sheet Option 을 쓴다. 드롭다운 안의 옵션 줄 — Dropdown List 를 쓴다. |
| `S1ExpandableCard` | 화면을 덮어야 하는 내용 — Bottom Sheet·Modal 을 쓴다. 같은 모양의 한 줄이 반복될 뿐 펼칠 내용이 없을 때 — List Row 를 쓴다. |
| `S1DataTag` | 누르는 것 — Chip 이나 Button 을 쓴다. 고르는 것 — Filter Chip 을 쓴다. 뜻이 정해지지 않은 색을 쓰고 싶을 때 — 색을 늘리지 않는다. |
| `S1Divider` | 바탕색이 이미 영역을 나누고 있을 때 — 선을 겹쳐 넣지 않는다. 카드 테두리 대신 쓰려 할 때 — 테두리는 그 부품이 갖는다. |
| `S1Lnb` | 화면 위쪽 가로 메뉴가 필요할 때 — GNB 를 쓴다. 모바일 하단 이동 막대가 필요할 때 — Mobile Bottom Nav 를 쓴다. |
| `S1Footer` | 화면 맨 위 바가 필요할 때 — 그건 GNB 나 로그인 상단바의 몫이다. 법인 문구를 화면마다 고쳐 쓰고 싶을 때 — 문구는 registry/content/footer.json 이 단일 출처이며 임의로 바꾸지 않는다. |
| `S1Ci` | 서비스 이름 글자를 보여줄 때 — 그건 서비스 이름 글자 자리의 몫이다. 로고를 임의로 늘리거나 색을 바꿀 때 — 크기와 색은 이 부품의 값만 쓴다. |
| `S1LoginGnb` | 로그인 후 화면의 주 메뉴가 필요할 때 — 그건 GNB 의 몫이다. 삼성 로고를 이 바 안에 넣으려 할 때 — 정본에서 2026-06-24 제거됐다. |

## 6. 규칙 검사 (lint)

```bash
node src/s1-ui/tools/s1-ui-lint.mjs src
```

직접 적은 색, 승인되지 않은 variant·size, 없는 토큰 이름을 찾아 줍니다. 묶음 폴더(`s1-ui`) 자신은 검사에서 빠집니다.

## 7. 고치지 마세요

이 폴더는 자동 생성물입니다. 고치면 다음 배포에서 지워집니다. 필요한 것이 없으면 만들지 말고 디자인팀에 요청해 주세요.
