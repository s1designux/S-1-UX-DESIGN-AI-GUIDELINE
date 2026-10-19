/* 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run tokens:reconcile` 또는 `npm run ui:build` 를 실행하세요. */
/* S1Gallery — 승인 조합을 한 화면에 늘어놓는다. 앱에 그대로 올려 부품이 제대로 나오는지 눈으로 확인하는 용도다.
     <S1Provider dark={false} fontFamily="Pretendard"><S1Gallery /></S1Provider>
   only 로 부품을 고르고, break 로 PC·Mobile 을 고른다. */
import { ScrollView, Text, View } from "react-native";
import { paint, useS1 } from "../engine.js";
import { CASES } from "./cases.js";
import S1Input from "../components/input.js";
import S1Button from "../components/button.js";
import S1Checkbox from "../components/checkbox.js";
import S1Radio from "../components/radio.js";
import S1Toggle from "../components/toggle.js";
import S1Chip from "../components/chip.js";
import S1Dropdown from "../components/dropdown.js";
import S1Select from "../components/select.js";
import S1FilterChip from "../components/filter-chip.js";
import S1Tab from "../components/tab.js";
import S1Pagination from "../components/pagination.js";
import S1Textarea from "../components/textarea.js";
import S1MultiToggle from "../components/multi-toggle.js";
import S1Modal from "../components/modal.js";
import S1Table from "../components/table.js";
import S1MobileBottomNav from "../components/mobile-bottom-nav.js";
import S1MobileHeader from "../components/mobile-header.js";
import S1TimePicker from "../components/time-picker.js";
import S1DatePicker from "../components/date-picker.js";
import S1Gnb from "../components/gnb.js";
import S1GnbSubMenuItem from "../components/gnb-sub-menu-item.js";
import S1GnbSubMenu from "../components/gnb-sub-menu.js";
import S1AssistButton from "../components/assist-button.js";
import S1TextButton from "../components/text-button.js";
import S1ModalContent from "../components/modal-content.js";
import S1BottomSheetOption from "../components/bottom-sheet-option.js";
import S1BottomSheet from "../components/bottom-sheet.js";
import S1ListRow from "../components/list-row.js";
import S1ExpandableCard from "../components/expandable-card.js";
import S1DataTag from "../components/data-tag.js";
import S1Divider from "../components/divider.js";
import S1Lnb from "../components/lnb.js";
import S1Footer from "../components/footer.js";
import S1Ci from "../components/ci.js";
import S1LoginGnb from "../components/login-gnb.js";

const COMPONENTS = { S1Input, S1Button, S1Checkbox, S1Radio, S1Toggle, S1Chip, S1Dropdown, S1Select, S1FilterChip, S1Tab, S1Pagination, S1Textarea, S1MultiToggle, S1Modal, S1Table, S1MobileBottomNav, S1MobileHeader, S1TimePicker, S1DatePicker, S1Gnb, S1GnbSubMenuItem, S1GnbSubMenu, S1AssistButton, S1TextButton, S1ModalContent, S1BottomSheetOption, S1BottomSheet, S1ListRow, S1ExpandableCard, S1DataTag, S1Divider, S1Lnb, S1Footer, S1Ci, S1LoginGnb };

export function S1Gallery({ only, breakName, columns }) {
  const { dark } = useS1();
  const shown = CASES.filter((one) => (only === undefined || only.includes(one.component) || only.includes(one.id.split("/")[0])) && (breakName === undefined || one.break === breakName));
  const sections = [];
  for (const one of shown) {
    const last = sections[sections.length - 1];
    if (last && last.component === one.component) last.items.push(one);
    else sections.push({ component: one.component, items: [one] });
  }
  const ink = paint("--color-text-title-primary", dark);
  const mute = paint("--color-text-body-secondary", dark);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: paint("--color-bg-level-0", dark) }} contentContainerStyle={{ padding: 16, gap: 24 }}>
      {sections.map((section) => (
        <View key={section.component} style={{ gap: 12 }}>
          <Text style={{ color: ink, fontSize: 16, fontWeight: "700" }}>{section.component}</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16, alignItems: "flex-start" }}>
            {section.items.map((one) => {
              const Component = COMPONENTS[one.component];
              return (
                <View key={one.id} style={{ gap: 6, width: columns ? undefined : undefined }}>
                  <Text style={{ color: mute, fontSize: 10 }}>{one.id.split("/").slice(1).join(" · ")}</Text>
                  <View style={one.frame ? { width: one.frame.width, height: one.frame.height, overflow: one.frame.clip ? "hidden" : "visible", position: "relative" } : undefined}>
                    <Component {...one.props} />
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
