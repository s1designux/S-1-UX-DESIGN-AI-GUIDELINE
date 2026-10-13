/* S1ChipGroup — 칩 여러 개 중 하나만 켠다(웹의 data-s1-select="single" 에 해당).
 * river 결정 2026-10-13 「전부 부품이 알아서」. RN 에는 DOM 묶음이 없어 부모가 칩의 selected 를 맞춰 줘야 했는데,
 * 그 일을 이 작은 부품이 대신한다 — 칩은 승인된 S1Chip 그대로이고 색·치수는 칩의 표가 정한다(여기 없다).
 *
 *   <S1ChipGroup value={sort} onChange={setSort}>
 *     <S1Chip data-value="latest"><S1Text>최신순</S1Text></S1Chip> …
 *   </S1ChipGroup>
 *
 * · value 를 주면 제어형(값이 바뀌어야 켜진 칩이 바뀐다), defaultValue 는 비제어형의 처음 값.
 * · 칩의 값은 data-value(없으면 value, 그것도 없으면 순서)다. 켜진 칩을 다시 눌러도 꺼지지 않는다(항상 하나).
 * · onChange(value, event) — 다른 칩이 켜질 때. event = { detail: { value, selected: true } }.
 * · onBeforechange(event) — 켜지기 전. event.preventDefault() 하면 아무것도 바뀌지 않는다(웹 beforechange 와 같다). */
import { Children, cloneElement, isValidElement, useRef, useState } from "react";

export function S1ChipGroup({ value, defaultValue, onChange, onBeforechange, children }) {
  const controlled = value !== undefined;
  const [inner, setInner] = useState(defaultValue ?? null);
  const current = controlled ? value : inner;
  const latest = useRef({ onChange, onBeforechange, controlled });
  latest.current = { onChange, onBeforechange, controlled };

  const idOf = (child, index) => child.props["data-value"] ?? child.props.value ?? index;
  return Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;
    const id = idOf(child, index);
    return cloneElement(child, {
      selected: current === id,
      onBeforechange: (event) => {
        child.props.onBeforechange?.(event);
        if (event.defaultPrevented) return;
        event.detail.value = id;                      // 묶음의 onBeforechange 는 이 칩의 값을 받는다
        latest.current.onBeforechange?.(event);
      },
      onSelectedChange: (on) => {
        child.props.onSelectedChange?.(on);
        if (!on) return;                             // 하나만 켠다 — 꺼지는 쪽은 다른 칩이 켜질 때 저절로 꺼진다
        if (!latest.current.controlled) setInner(id);
        latest.current.onChange?.(id, { detail: { value: id, selected: true } });
      }
    });
  });
}
