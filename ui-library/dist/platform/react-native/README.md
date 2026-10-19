# @s1/ui-react-native

**S1 디자인 시스템의 React Native(Expo) 부품입니다.** iOS · Android · 웹(react-native-web) 에서 같은 코드로 그려지고,
**PC·Mobile 두 화면 기준을 모두 담았습니다**(`breakName="pc" | "mobile"`). 부품 35종.

**배포본 번호 0.26.0** · 2026-10-19 판 — 디자인가이드 내려받기 화면의 번호와 다르면 새로 받으세요.
코드에서 볼 때는 `import { S1_VERSION } from "@s1/ui-react-native"` 입니다.

이 패키지는 웹용 React(`@s1/ui-react`)와 다릅니다. 그쪽은 `<button>`·`<span>` 과 CSS 파일을 쓰는 **React DOM** 이라 iOS·Android 에서 돌지 않습니다.
여기 부품은 `View`·`Text`·`Pressable`·`TextInput` 으로 그려집니다.

## 1. 설치 (Expo)

```bash
npx expo install react-native-svg expo-font
```

압축을 풀어 나온 `s1-ui-react-native` 폴더를 프로젝트에 넣고(예: `src/s1-ui`) 그 폴더에서 꺼내 씁니다.
필요한 것: **React Native 0.76 이상**(Expo SDK 52 이상) · `react-native-svg`. 다른 의존 패키지는 없습니다.

## 2. 앱 맨 위에 한 번 — 서체와 다크 모드

서체는 **Pretendard** 입니다. 앱이 `expo-font` 로 불러온 뒤 이름을 넘깁니다.

```jsx
import { useFonts } from "expo-font";
import { S1Provider, S1Button } from "./src/s1-ui";

export default function App() {
  const [loaded] = useFonts({
    "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
    "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf")
  });
  if (!loaded) return null;
  return (
    <S1Provider
      fontFamily={{ 400: "Pretendard-Regular", 500: "Pretendard-Medium", 600: "Pretendard-SemiBold", 700: "Pretendard-Bold" }}
    >
      <S1Button variant="primary" size="lg" breakName="mobile" parts={{ label: "확인" }} onPress={save} />
    </S1Provider>
  );
}
```

- `fontFamily` 를 문자열 하나로 주면(예: `"Pretendard"`) 굵기는 `fontWeight` 로 고릅니다(웹·iOS). 안드로이드는 굵기별 이름을 주는 쪽이 정확합니다.
- **다크 모드**는 `<S1Provider dark>` 로 고정하거나, 생략하면 기기 설정(`useColorScheme`)을 따라 바뀝니다. 색은 라이트·다크 한 쌍을 토큰 이름으로 들고 있어서 별도 작업이 없습니다.

## 3. 쓰기

```jsx
import { S1Button, S1Input, S1Tab, S1Table, S1DatePicker } from "./src/s1-ui";

<S1Button variant="primary" size="md" parts={{ label: "확인" }} onPress={save} />

<S1Input value={name} onChangeText={setName} placeholder="이름" />

<S1Tab onChange={({ index }) => setPage(index)} tabs={["전체", "진행", "완료"]} />

<S1Table headerCells={["이름", "부서"]} rows={[["김하늘", "디자인"], ["박바다", "개발"]]} onSelectionChange={({ selected }) => setPicked(selected)} />

<S1DatePicker variant="range" onChange={({ start, end }) => setRange([start, end])} />
```

| 통로 | 언제 쓰나 | 예 |
|---|---|---|
| `parts` | 글자·아이콘 한 칸을 갈아끼울 때 | `parts={{ label: <><Icon name="check" color={ink} /> 저장</> }}` |
| 목록 prop | 표·목록에 내 데이터를 넣을 때 | `rows={[["가", "나"]]}` · `tabs` · `options` |
| 값 prop | 입력값을 상태와 이을 때 | `value` · `onChangeText` · `checked` · `onCheckedChange` |
| `partProps` | 칸 하나에 RN 속성(눌림 등)을 줄 때 | `partProps={{ back: { onPress: goBack } }}` |
| `style` | 루트에 바깥 여백·배치를 줄 때 | `style={{ marginTop: 16 }}` |

## 4. PC·Mobile 화면 고르기

화면 크기가 아니라 **쓰는 쪽이 정합니다.** 태블릿에서 PC 화면 기준을 쓰고 싶으면 `breakName="pc"`, 폰이면 `"mobile"`.
`breakName` 을 고르면 그 화면에 승인된 크기만 쓸 수 있고(`size`), 없는 조합은 그 자리에서 멈추고 쓸 수 있는 값을 알려 줍니다.

## 5. 어떤 부품을 쓸까

**먼저 `<S1Gallery />` 를 앱에 올려 보세요.** 승인된 조합이 실제 모습으로 한 화면에 늘어섭니다.

| 부품 | 변형(variant) | 크기(size) | 화면(breakName) | 그 밖에 받는 값 | 언제 쓰나 |
|---|---|---|---|---|---|
| `S1Input` | — | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` | `mode`(password·search) · `value` · `readOnly` · `inputRef` · `onClear` · `onSearch` · `onChangeText` · `onFocus` · `onBlur` | 한 줄 텍스트·숫자를 입력받을 때 — 로그인·검색·필터·설정 폼 등. 라벨·도움말과 함께 쓰려면 Input Slots(라벨/헬퍼 조합) 패턴으로 감싼다. 안내메시지(helper)는 필요한 화면에서만 켠다 — 계정 관련 화면(로그인·비밀번호 변경·회원가입)처럼 입력 규칙을 미리 알려야 하는 곳이 대표적이다. 일반 입력·검색에는 넣지 않는다(river 결정 2026-09-07). |
| `S1Button` | `primary` `secondary` `blue-line` | PC `md` `xsm` `xxsm` · 모바일 `lg` | `pc` `mobile` | `parts` | 사용자가 실행할 액션을 트리거할 때 — 저장·확인·취소·다음 등. 화면에서 가장 중요한 단일 액션은 primary, 보조 액션은 secondary, 약한 강조는 blue-line. |
| `S1Checkbox` | — | — | — | `parts` | 여러 항목을 독립적으로 켜고 끌 때(다중 선택). 약관 동의처럼 항목마다 따로 켜고 끌 때. |
| `S1Radio` | — | — | — | `parts` | 여러 보기 중 하나만 고를 때(상호배타). |
| `S1Toggle` | — | — | — | `checked` · `onCheckedChange` | 단일 설정을 즉시 켜고 끌 때(즉시 반영). |
| `S1Chip` | `line` `solid` | PC `sm` `md` · 모바일 `sm` | `pc` `mobile` | `selected` · `onBeforechange` · `onChange` · `onSelectedChange` | 선택 가능한 태그·필터를 나열할 때. filter 는 드롭다운으로 값을 고르고 적용 완료(complete)를 표시할 때. |
| `S1Dropdown` | `text` `checkbox` | `xxsm` `xsm` `md` | — | `options` · `options` · `value` · `onChange` | 트리거를 눌러 옵션 목록에서 하나를 고를 때(글자 유형). 한 목록에서 여러 항목을 동시에 고를 때(체크박스 유형) — 필터·대상 선택 등. Select 의 기반 컴포넌트. |
| `S1Select` | — | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` | `open` · `value` · `options` · `onChange` · `onOpen` · `onClose` | 단일 값을 목록에서 고르는 폼 필드일 때. Dropdown 토큰(--dropdown-*)을 재사용한다. |
| `S1FilterChip` | `line` `solid` | PC `sm` `md` · 모바일 `md` | `pc` `mobile` | `open` · `value` · `options` · `onChange` · `onOpen` · `onClose` | 목록·표의 정렬/기간/범주 같은 조건을 바꿀 때. 선택한 값을 칩 자체에 계속 보여줘야 할 때(무엇이 걸려 있는지 한눈에). |
| `S1Tab` | — | PC `md` `sm` `xsm` · 모바일 `sm` | `pc` `mobile` | `tabs` · `tabs` · `value` · `onChange` | 같은 화면에서 콘텐츠 영역을 전환할 때. 정본에 등록된 플랫폼과 크기 중 사용 맥락에 맞는 항목을 고른다. |
| `S1Pagination` | — | — | — | `pages` · `page` · `totalPages` · `onChange` | 긴 목록·표를 페이지로 나눠 이동할 때. |
| `S1Textarea` | — | — | `pc` `mobile` | `parts` | 여러 줄 텍스트를 입력받을 때(메모·설명 등). Input 과 시각 동일 — --input-* 토큰을 공유한다. |
| `S1MultiToggle` | — | `md` `sm` `xsm` | — | `cells` · `value` · `onChange` | 선택지가 2~4개로 적고 서로 배타적일 때(정렬 기준·기간 범위 등). 선택 결과가 즉시 화면에 반영돼야 할 때. |
| `S1Modal` | `single` `dual` | — | `pc` `mobile` | `onOpen` · `onClose` · `onConfirm` · `onCancel` | 확인·알림 등 흐름을 멈추고 결정을 받을 때. Single=알림/설명체 1버튼, Dual=확인/질문체 2버튼. |
| `S1Table` | — | PC `md` `sm` `xsm` | — | `headerCells` · `rows` · `selection` · `onSelectionChange` | 행·열의 정형 데이터를 보여줄 때. 정렬·선택(체크박스)·행 hover/selected 가 필요할 때. |
| `S1MobileBottomNav` | `home` `search` `notification` `settings` | — | — | `selected` · `onBeforechange` · `onChange` · `onSelectedChange` | 모바일 화면에서 최상위 영역 간 이동을 항상 보이게 둘 때. 탭 수가 3~5개로 고정된 주요 메뉴 구조일 때. |
| `S1MobileHeader` | `home-title` `home-title-subtitle` `standard-title` `standard-title-close` `standard-no-title` `standard-no-title-close` | — | — | `parts` | 모바일 앱 또는 모바일 웹 화면에서 상단 전역 크롬과 화면 이동 동작을 제공할 때. 회원가입처럼 앱바 안 제목을 비우고 본문 큰 제목을 사용하는 화면에는 Standard / No Title을 쓴다. |
| `S1TimePicker` | — | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` | `open` · `onOpen` · `onClose` · `onChange` | 시간(시/분)을 드롭다운 목록에서 고를 때. |
| `S1DatePicker` | `single` `range` | PC `xxsm` `xsm` `md` · 모바일 `md` | `pc` `mobile` | `open` · `value` · `disabledDates` · `placeholder` · `today` · `onOpen` · `onClose` · `onChange` | 날짜(단일/기간)를 고를 때. 트리거는 Base Input 필드. PC 는 팝오버 캘린더, Mobile 은 바텀시트로 표출. |
| `S1Gnb` | `center-between` `start` | `md` `sm` `xsm` | — | `openId` · `onOpen` · `onClose` | PC 상단 글로벌 내비게이션이 필요할 때. 로고 + 메뉴 + 유틸(아이콘) 조립. |
| `S1GnbSubMenuItem` | — | — | — | `parts` | GNB 하위메뉴 패널의 카테고리 제목 또는 항목을 놓을 때. |
| `S1GnbSubMenu` | — | — | — | `columns` · `columns` · `columns` | GNB 주 메뉴 아래로 하위 메뉴를 펼쳐 보일 때. |
| `S1AssistButton` | — | — | — | `parts` | 본문 옆이나 목록 행 안처럼 좁은 자리에서, 눈에 덜 띄는 보조 동작 하나를 둘 때. 코어 Button 의 4크기(MD·XSM·XXSM·LG) 어디에도 맞지 않는, 원본에 정의된 고정 32px 자리. |
| `S1TextButton` | `primary` `secondary` | — | — | `parts` | 링크에 가까운 가벼운 보조 동작(더보기·자세히 등)을 텍스트만으로 표시할 때. Primary 는 강조가 필요한 텍스트 액션, Secondary 는 덜 중요한 텍스트 액션. |
| `S1ModalContent` | `single` `dual` | PC `md` `lg` `xl` | — | `onOpen` · `onClose` · `onConfirm` · `onCancel` | 입력창·표·이미지처럼 확인 계열(짧은 텍스트)보다 큰 본문이 필요할 때. Single=알림/설명체 1버튼, Dual=확인/질문체 2버튼(확인 계열과 같은 규칙). |
| `S1BottomSheetOption` | `text` `checkbox` `radio` `list` | — | — | `selected` · `onBeforechange` · `onChange` · `onSelectedChange` | 바텀시트 본문에 고를 것을 줄로 늘어놓을 때. Text = 한 값 고르기(고른 줄에 파란 체크), Checkbox = 여러 값 고르기, Radio = 한 값 고르기(동그라미 표시), List = 사람·항목처럼 아바타와 설명이 함께 있는 줄. |
| `S1BottomSheet` | `none` `single` `dual` | — | — | `onOpen` · `onClose` · `onConfirm` · `onCancel` | 모바일에서 목록을 띄워 고르게 할 때 — 드롭다운 대신 쓴다(density-policy mobileSubstitutes.dropdown). 모바일에서 날짜·시간처럼 넓은 선택 UI 를 띄울 때. Footer=None 은 고르는 즉시 적용되는 목록, Single 은 '적용' 하나, Dual 은 '취소+적용'. |
| `S1ListRow` | `nav` `value` `read` `pick` `agree` `switch` `thumb` | — | — | `checked` · `onCheckedChange` · `onOpen` | 같은 모양의 줄이 반복되는 목록을 만들 때. |
| `S1ExpandableCard` | — | — | — | `open` · `onChange` | 한 화면에 여러 덩어리를 쌓아 두고, 필요한 것만 펴서 보게 할 때. 질문과 답처럼 제목만으로 고르고 내용은 접어 두는 목록. |
| `S1DataTag` | `blue` `red` `gray` | — | — | `parts` | 표나 목록에서 한 줄의 상태를 한 눈에 보이게 할 때. 승인·확인(파랑), 주의·에러(빨강)처럼 뜻이 정해진 상태를 표시할 때. 그 밖의 중립 상태(대기 등)는 회색으로 표시할 때. |
| `S1Divider` | `x` `y` | — | — | `parts` | 목록 줄 사이를 나눌 때. 표 위·아래처럼 영역을 크게 끊을 때(강한선). 한 줄 안에서 값과 값을 끊을 때(세로선). |
| `S1Lnb` | `menu` `brand` | `md` `lg` | — | `collapsed` · `onCollapse` · `onToggle` | 화면 왼쪽에 세로로 서서 같은 서비스 안의 큰 영역을 오가는 메뉴가 필요할 때. 하위메뉴(2뎁스)까지 한 판에서 보여 줄 때. |
| `S1Footer` | `pc` `mobile` | — | — | `parts` | 화면 맨 아래에 이용약관·개인정보 처리방침·회사 정보·카피라이트를 보여줄 때. PC 화면에서는 회사 정보와 로고까지 함께 보여줄 때(PC), 모바일 화면에서는 링크와 카피라이트만 간단히 보여줄 때(Mobile). |
| `S1Ci` | `s1` `samsung` | — | — | `parts` | 화면에 회사 로고를 보여줄 때(에스원 · 삼성). 밝은 로고(White)가 필요한 어두운 바탕, 브랜드색(Blue), 회색(Dark) 중에서 바탕에 맞춰 고를 때. |
| `S1LoginGnb` | — | — | — | `parts` | 로그인 화면 맨 위에 서비스 이름과 언어 선택을 보여줄 때. |

크기·변형·화면은 위에 적힌 값만 쓸 수 있습니다. 다른 값을 주면 그 자리에서 오류로 알려 줍니다.

## 6. 값 체계 — 손으로 옮겨 적지 마세요

| 층 | 어디에 | 개수 |
|---|---|---|
| 색(라이트·다크 한 쌍) | `COLORS` (`tokens.js`) | 411 |
| 길이·수치 | `DIMENS` · `NUMBERS` | 77 · 10 |
| 이름 붙은 텍스트 스타일 | `TYPES` · `<S1Text type="body-14r">` | 21 |
| 아이콘 | `ICONS` · `<Icon name="check" color={…} />` | 26 |

```jsx
<S1Text type="body-14r" color="--color-text-body-primary">본문</S1Text>
```

부품에 없는 화면을 직접 그릴 때만 위 값을 이름으로 부르세요. 값을 눈으로 보고 옮겨 적으면 배포본과 조용히 어긋납니다.

## 7. 어떻게 만들었나

부품마다 **승인된 웹 배포본의 CSS 를 실제 캐스케이드까지 계산해**(요소 × 상태 조합) `specs/*.js` 의 표로 굳혔습니다.
`components/*.js` 에는 치수·색 값이 한 자리도 없고, `engine.js` 가 지금 상태(속성·눌림·포커스·비활성)를 읽어 표에서 골라 그립니다.
마크업 구조(칸 이름·반복 목록)는 승인 예제에서 그대로 옮겼습니다.

| 검사 | 방법 |
|---|---|
| 값이 CSS 계산과 같은가 | `npm run rn:parity` — 표의 모든 칸을 다시 계산해 대조 |
| 웹과 같은 모양인가 | `npm run rn:compare` — 같은 조합을 웹 배포본과 나란히 그려 상자 크기·위치·색을 잼 |
| 동작이 승인 계약대로인가 | `npm run rn:behavior` — 실제로 눌러 속성·보이는 칸을 확인 |
| RN 이 못 옮긴 CSS 가 있는가 | `coverage.json` — 이유와 함께 센 목록 |

## 8. RN 에서 원리상 다른 점

- **hover** 는 마우스가 있는 환경(웹)에서만 켜집니다. 터치 기기에서는 눌림(pressed)만 있습니다 — 웹 배포본이 모바일에서 hover 를 끈 것과 같습니다.
- **키보드 조작**(화살표·Home·End·Esc)은 터치 화면에 없어 옮기지 않았습니다. 웹(react-native-web)에서는 포커스·Enter/Space 가 동작합니다.
- **표**는 열 폭을 내용으로 정하는 자동 배치가 없습니다. 폭을 정하지 않은 칸은 남는 폭을 같은 몫으로 나눕니다(CSS `table-layout: fixed` 와 같습니다).
- **그림자·테두리 모양**은 RN `boxShadow`(0.76 이상)로 그립니다. 안쪽 그림자(inset)도 같은 속성입니다.
- **한글 세로 1px 보정**은 웹 브라우저가 글자를 1px 단위로 놓는 보정이라 RN 에는 옮기지 않았습니다(정본 결정).
- **마스크 아이콘**(CSS mask)은 같은 SVG path 에 색을 직접 칠합니다. 모양은 같습니다.
- **고르기는 부품이 알아서(river 2026-10-13)**: 칩·하단 탭·시트 줄은 `selected`(제어형) · `defaultSelected` · `onSelectedChange(selected)` 를 받습니다. 값을 주면(제어형) 눌러도 모양이 안 바뀌고 화면이 값을 바꿀 때만 바뀝니다. `onBeforechange(event)` 에서 `event.preventDefault()` 하면 아무것도 바뀌지 않고(웹 beforechange 와 같음), `onChange(event)` 는 모양이 실제로 바뀐 뒤(비제어형)에 불립니다. 시트 줄은 켜지면 체크 조각이 붙고 꺼지면 사라집니다. **칩 하나만 켜기**는 `<S1ChipGroup value onChange>` 로 묶습니다(칩의 값은 `data-value`) — 웹의 `data-s1-select="single"` 에 해당합니다. 하단 탭·시트 줄의 하나만 켜기는 화면이 각 항목의 `selected` 를 정합니다.
- **모달·바텀시트**는 RN `Modal` 에 그립니다(`open` 일 때만). `<S1Provider inline>` 이면 놓인 자리 안에 그립니다(미리보기용).
- **팝업(셀렉트·날짜·시간)**은 트리거 아래에 겹쳐 그립니다. 바깥을 눌러 닫는 동작은 없고, 고르거나 트리거를 다시 눌러 닫습니다.
- 날짜·시간 휠의 **스크롤 스냅**은 `snapToInterval` 로 옮겼습니다(칸 간격은 CSS 계산값).

## 9. 고치지 마세요

이 폴더는 자동 생성물입니다. 고치면 다음 배포에서 지워집니다. 필요한 것이 없으면 만들지 말고 디자인팀에 요청해 주세요.
