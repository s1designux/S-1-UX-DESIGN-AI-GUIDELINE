// 자동 생성물 — 손으로 고치지 마세요. 정본을 고치고 `npm run ui:build` 를 실행하세요.
// date-picker 의 승인된 조합별 최종 값. 배포본 CSS 를 캐스케이드까지 계산해 굳힌 것이다.

import CoreGraphics

public enum S1DatePickerSpec {
    /// sizeBreaks — 승인된 (size, break) 조합만 담는다.
    public static let sizeBreaks: [S1SizeBreak] = [S1SizeBreak(size: "md", breakName: "mobile")]
    public static let states: [String] = ["default", "hover", "filled", "open", "disabled"]

    public static let boxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["md|mobile|default"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgDefault, foreground: S1Palette.colorFormControlTextPlaceholder, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, gap: 8, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconDefault, height: 24, width: 24, icon: "calendar")
        ]
        table["md|mobile|hover"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgHover, foreground: S1Palette.colorFormControlTextPlaceholder, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, gap: 8, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconDefault, height: 24, width: 24, icon: "calendar")
        ]
        table["md|mobile|filled"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgDefault, foreground: S1Palette.colorFormControlTextDefault, borderColor: S1Palette.colorFormControlBorderDefault, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, gap: 8, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconDefault, height: 24, width: 24, icon: "calendar")
        ]
        table["md|mobile|open"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgSelected, foreground: S1Palette.colorFormControlTextSelected, borderColor: S1Palette.colorFormControlBorderSelected, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, gap: 8, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconSelected, height: 24, width: 24, icon: "calendar")
        ]
        table["md|mobile|disabled"] = [
            "root": S1Box(),
            "trigger": S1Box(background: S1Palette.colorFormControlBgDisabled, foreground: S1Palette.colorFormControlTextDisabled, borderColor: S1Palette.colorFormControlBorderDisabled, borderWidth: 1, radius: 4, height: 48, minWidth: 140, paddingStart: 12, paddingEnd: 12, gap: 8, fontSize: 14, fontWeight: 400, letterSpacing: -0.02, lineHeight: 1.3, spaceBetween: true),
            "value": S1Box(),
            "icon": S1Box(background: S1Palette.colorFormControlIconDisabled, height: 24, width: 24, icon: "calendar")
        ]
        return table
    }()

    public static func box(_ key: String, _ part: String) -> S1Box { s1Lookup(boxes, key, part, "date-picker") }

    public static let sheetBoxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["default"] = [
            "root": S1Box(left: 0, right: 0, top: 0),
            "backdrop": S1Box(background: S1Palette.colorOverlay, left: 0, right: 0, top: 0),
            "panel": S1Box(background: S1Palette.colorSurfaceRaised, paddingTop: 20, paddingBottom: 20, gap: 32, maxWidth: 360, maxHeightVh: 92, radiusTopStart: 8, radiusTopEnd: 8),
            "header": S1Box(paddingStart: 20, paddingEnd: 20, spaceBetween: true),
            "title": S1Box(foreground: S1Palette.colorTextTitlePrimary, fontSize: 20, fontWeight: 700, lineHeight: 1.3),
            "close": S1Box(height: 24, width: 24),
            "calendarWrap": S1Box(paddingStart: 24, paddingEnd: 24),
            "footer": S1Box(paddingStart: 20, paddingEnd: 20, gap: 8),
            "apply": S1Box()
        ]
        return table
    }()

    public static func sheetBox(_ key: String, _ part: String) -> S1Box { s1Lookup(sheetBoxes, key, part, "sheet") }

    public static let calendarBoxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["date|default"] = [
            "calendar": S1Box(width: 308, gap: 16),
            "header": S1Box(height: 32, width: 308, spaceBetween: true),
            "prev": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "next": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "prevIcon": S1Box(background: S1Palette.colorDatePickerIconDefault, height: 16, width: 16, rotation: 180, icon: "chevron"),
            "nextIcon": S1Box(background: S1Palette.colorDatePickerIconDefault, height: 16, width: 16, icon: "chevron"),
            "headerLabel": S1Box(gap: 4),
            "yearLabel": S1Box(foreground: S1Palette.colorDatePickerTextPrimary, fontSize: 24, fontWeight: 700, lineHeight: 1.3),
            "monthLabel": S1Box(foreground: S1Palette.colorDatePickerTextPrimary, fontSize: 24, fontWeight: 700, lineHeight: 1.3)
        ]
        table["date|hover"] = [
            "calendar": S1Box(width: 308, gap: 16),
            "header": S1Box(height: 32, width: 308, spaceBetween: true),
            "prev": S1Box(background: S1Palette.colorDatePickerCellBgHover, radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "next": S1Box(background: S1Palette.colorDatePickerCellBgHover, radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "prevIcon": S1Box(background: S1Palette.colorDatePickerIconHover, height: 16, width: 16, rotation: 180, icon: "chevron"),
            "nextIcon": S1Box(background: S1Palette.colorDatePickerIconHover, height: 16, width: 16, icon: "chevron"),
            "headerLabel": S1Box(gap: 4),
            "yearLabel": S1Box(foreground: S1Palette.colorDatePickerIconHover, fontSize: 24, fontWeight: 700, lineHeight: 1.3),
            "monthLabel": S1Box(foreground: S1Palette.colorDatePickerIconHover, fontSize: 24, fontWeight: 700, lineHeight: 1.3)
        ]
        table["date|disabled"] = [
            "calendar": S1Box(width: 308, gap: 16),
            "header": S1Box(height: 32, width: 308, spaceBetween: true),
            "prev": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "next": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "prevIcon": S1Box(background: S1Palette.colorDatePickerIconDisabled, height: 16, width: 16, rotation: 180, icon: "chevron"),
            "nextIcon": S1Box(background: S1Palette.colorDatePickerIconDisabled, height: 16, width: 16, icon: "chevron"),
            "headerLabel": S1Box(gap: 4),
            "yearLabel": S1Box(foreground: S1Palette.colorDatePickerTextPrimary, fontSize: 24, fontWeight: 700, lineHeight: 1.3),
            "monthLabel": S1Box(foreground: S1Palette.colorDatePickerTextPrimary, fontSize: 24, fontWeight: 700, lineHeight: 1.3)
        ]
        table["year|default"] = [
            "calendar": S1Box(width: 308, gap: 20),
            "header": S1Box(height: 32, width: 308, spaceBetween: true),
            "prev": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "next": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "prevIcon": S1Box(background: S1Palette.colorDatePickerIconDefault, height: 16, width: 16, rotation: 180, icon: "chevron"),
            "nextIcon": S1Box(background: S1Palette.colorDatePickerIconDefault, height: 16, width: 16, icon: "chevron"),
            "headerLabel": S1Box(gap: 4),
            "yearLabel": S1Box(foreground: S1Palette.colorDatePickerTextPrimary, fontSize: 24, fontWeight: 700, lineHeight: 1.3)
        ]
        table["year|hover"] = [
            "calendar": S1Box(width: 308, gap: 20),
            "header": S1Box(height: 32, width: 308, spaceBetween: true),
            "prev": S1Box(background: S1Palette.colorDatePickerCellBgHover, radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "next": S1Box(background: S1Palette.colorDatePickerCellBgHover, radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "prevIcon": S1Box(background: S1Palette.colorDatePickerIconHover, height: 16, width: 16, rotation: 180, icon: "chevron"),
            "nextIcon": S1Box(background: S1Palette.colorDatePickerIconHover, height: 16, width: 16, icon: "chevron"),
            "headerLabel": S1Box(gap: 4),
            "yearLabel": S1Box(foreground: S1Palette.colorDatePickerIconHover, fontSize: 24, fontWeight: 700, lineHeight: 1.3)
        ]
        table["year|disabled"] = [
            "calendar": S1Box(width: 308, gap: 20),
            "header": S1Box(height: 32, width: 308, spaceBetween: true),
            "prev": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "next": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "prevIcon": S1Box(background: S1Palette.colorDatePickerIconDisabled, height: 16, width: 16, rotation: 180, icon: "chevron"),
            "nextIcon": S1Box(background: S1Palette.colorDatePickerIconDisabled, height: 16, width: 16, icon: "chevron"),
            "headerLabel": S1Box(gap: 4),
            "yearLabel": S1Box(foreground: S1Palette.colorDatePickerTextPrimary, fontSize: 24, fontWeight: 700, lineHeight: 1.3)
        ]
        table["month|default"] = [
            "calendar": S1Box(width: 308, gap: 20),
            "header": S1Box(height: 32, width: 308, spaceBetween: true),
            "prev": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "next": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "prevIcon": S1Box(background: S1Palette.colorDatePickerIconDefault, height: 16, width: 16, rotation: 180, icon: "chevron"),
            "nextIcon": S1Box(background: S1Palette.colorDatePickerIconDefault, height: 16, width: 16, icon: "chevron"),
            "headerLabel": S1Box(gap: 4),
            "yearLabel": S1Box(foreground: S1Palette.colorDatePickerTextPrimary, fontSize: 24, fontWeight: 700, lineHeight: 1.3)
        ]
        table["month|hover"] = [
            "calendar": S1Box(width: 308, gap: 20),
            "header": S1Box(height: 32, width: 308, spaceBetween: true),
            "prev": S1Box(background: S1Palette.colorDatePickerCellBgHover, radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "next": S1Box(background: S1Palette.colorDatePickerCellBgHover, radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "prevIcon": S1Box(background: S1Palette.colorDatePickerIconHover, height: 16, width: 16, rotation: 180, icon: "chevron"),
            "nextIcon": S1Box(background: S1Palette.colorDatePickerIconHover, height: 16, width: 16, icon: "chevron"),
            "headerLabel": S1Box(gap: 4),
            "yearLabel": S1Box(foreground: S1Palette.colorDatePickerIconHover, fontSize: 24, fontWeight: 700, lineHeight: 1.3)
        ]
        table["month|disabled"] = [
            "calendar": S1Box(width: 308, gap: 20),
            "header": S1Box(height: 32, width: 308, spaceBetween: true),
            "prev": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "next": S1Box(radius: 4, height: 24, width: 24, marginStart: -4, marginTop: -4, marginEnd: -4, marginBottom: -4),
            "prevIcon": S1Box(background: S1Palette.colorDatePickerIconDisabled, height: 16, width: 16, rotation: 180, icon: "chevron"),
            "nextIcon": S1Box(background: S1Palette.colorDatePickerIconDisabled, height: 16, width: 16, icon: "chevron"),
            "headerLabel": S1Box(gap: 4),
            "yearLabel": S1Box(foreground: S1Palette.colorDatePickerTextPrimary, fontSize: 24, fontWeight: 700, lineHeight: 1.3)
        ]
        return table
    }()

    public static func calendarBox(_ key: String, _ part: String) -> S1Box { s1Lookup(calendarBoxes, key, part, "calendar") }

    public static let weekdayBoxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["weekday"] = [
            "weekdays": S1Box(),
            "weekday": S1Box(foreground: S1Palette.colorDatePickerTextPrimary, height: 44, width: 44, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "grid": S1Box(),
            "week": S1Box()
        ]
        table["sunday"] = [
            "weekdays": S1Box(),
            "weekday": S1Box(foreground: S1Palette.colorDatePickerTextSunday, height: 44, width: 44, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "grid": S1Box(),
            "week": S1Box()
        ]
        table["saturday"] = [
            "weekdays": S1Box(),
            "weekday": S1Box(foreground: S1Palette.colorDatePickerTextSaturday, height: 44, width: 44, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3),
            "grid": S1Box(),
            "week": S1Box()
        ]
        return table
    }()

    public static func weekdayBox(_ key: String, _ part: String) -> S1Box { s1Lookup(weekdayBoxes, key, part, "weekday") }

    public static let cellBoxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["weekday|false|default|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSecondary, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|false|default|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSecondary, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|false|today|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|false|today|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|false|selected|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelected, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|false|selected|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelectedHover, borderColor: S1Palette.colorDatePickerCellBgSelectedHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|false|disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|false|range-mid|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSecondary, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|false|range-disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|true|default|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextOtherMonth, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|true|default|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextOtherMonth, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|true|today|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|true|today|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|true|selected|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelected, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|true|selected|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelectedHover, borderColor: S1Palette.colorDatePickerCellBgSelectedHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|true|disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|true|range-mid|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextOtherMonth, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["weekday|true|range-disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|false|default|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSunday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|false|default|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSunday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|false|today|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|false|today|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|false|selected|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelected, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|false|selected|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelectedHover, borderColor: S1Palette.colorDatePickerCellBgSelectedHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|false|disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|false|range-mid|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSunday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|false|range-disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|true|default|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextOtherMonth, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|true|default|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextOtherMonth, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|true|today|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|true|today|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|true|selected|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelected, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|true|selected|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelectedHover, borderColor: S1Palette.colorDatePickerCellBgSelectedHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|true|disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|true|range-mid|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextOtherMonth, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["sunday|true|range-disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|false|default|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSaturday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|false|default|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSaturday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|false|today|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|false|today|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|false|selected|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelected, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|false|selected|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelectedHover, borderColor: S1Palette.colorDatePickerCellBgSelectedHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|false|disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|false|range-mid|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSaturday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|false|range-disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|true|default|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextOtherMonth, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|true|default|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextOtherMonth, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|true|today|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|true|today|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgHover, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextToday, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|true|selected|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelected, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|true|selected|hover"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgSelectedHover, borderColor: S1Palette.colorDatePickerCellBgSelectedHover, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextSelected, fontSize: 16, fontWeight: 700, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|true|disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgToday, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|true|range-mid|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextOtherMonth, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["saturday|true|range-disabled|rest"] = [
            "cell": S1Box(height: 44, width: 44),
            "cellInner": S1Box(background: S1Palette.colorDatePickerCellBgRange, borderColor: S1Palette.colorDatePickerCellBgRange, borderWidth: 1, radius: 9999, height: 30, width: 30),
            "cellNum": S1Box(foreground: S1Palette.colorDatePickerTextDisabled, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        return table
    }()

    public static func cellBox(_ key: String, _ part: String) -> S1Box { s1Lookup(cellBoxes, key, part, "cell") }

    public static let bandBoxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["start"] = [
            "band": S1Box(background: S1Palette.colorDatePickerCellBgRange, height: 30, left: 22, right: 0, top: 7)
        ]
        table["mid"] = [
            "band": S1Box(background: S1Palette.colorDatePickerCellBgRange, height: 30, left: 0, right: 0, top: 7)
        ]
        table["end"] = [
            "band": S1Box(background: S1Palette.colorDatePickerCellBgRange, height: 30, left: 0, right: 22, top: 7)
        ]
        return table
    }()

    public static func bandBox(_ key: String, _ part: String) -> S1Box { s1Lookup(bandBoxes, key, part, "band") }

    public static let tileBoxes: [String: [String: S1Box]] = {
        var table: [String: [String: S1Box]] = [:]
        table["default"] = [
            "grid": S1Box(gap: 12),
            "tileRow": S1Box(gap: 12),
            "tile": S1Box(background: S1Palette.colorDatePickerTileBgDefault, foreground: S1Palette.colorDatePickerTextPrimary, borderColor: S1Palette.colorDatePickerTileBorderDefault, borderWidth: 1, radius: 4, height: 56, width: 88, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["hover"] = [
            "grid": S1Box(gap: 12),
            "tileRow": S1Box(gap: 12),
            "tile": S1Box(background: S1Palette.colorDatePickerTileBgHover, foreground: S1Palette.colorDatePickerTextPrimary, borderColor: S1Palette.colorDatePickerTileBorderDefault, borderWidth: 1, radius: 4, height: 56, width: 88, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["selected"] = [
            "grid": S1Box(gap: 12),
            "tileRow": S1Box(gap: 12),
            "tile": S1Box(background: S1Palette.colorDatePickerTileBgSelected, foreground: S1Palette.colorDatePickerTextToday, borderColor: S1Palette.colorDatePickerCellBorderToday, borderWidth: 1, radius: 4, height: 56, width: 88, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        table["disabled"] = [
            "grid": S1Box(gap: 12),
            "tileRow": S1Box(gap: 12),
            "tile": S1Box(background: S1Palette.colorDatePickerTileBgDisabled, foreground: S1Palette.colorDatePickerTextDisabled, borderColor: S1Palette.colorDatePickerTileBorderDisabled, borderWidth: 1, radius: 4, height: 56, width: 88, fontSize: 16, fontWeight: 500, letterSpacing: -0.02, lineHeight: 1.3)
        ]
        return table
    }()

    public static func tileBox(_ key: String, _ part: String) -> S1Box { s1Lookup(tileBoxes, key, part, "tile") }
}
