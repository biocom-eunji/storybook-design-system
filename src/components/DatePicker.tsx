import React, { useState, useMemo } from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { Icon } from './Icon';
import { semanticColor, fontWeight, textStyle, spacing, radius, interaction } from '../tokens/theme';

/** DatePicker — 날짜 선택 달력 */
export interface DatePickerProps {
  /** 선택된 날짜 */
  value?: Date;
  /** 날짜 변경 콜백 */
  onChange?: (date: Date) => void;
  /** 최소 선택 가능 날짜 */
  minDate?: Date;
  /** 최대 선택 가능 날짜 */
  maxDate?: Date;
}

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isToday(d: Date): boolean {
  return isSameDay(d, new Date());
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

export function DatePicker({ value, onChange, minDate, maxDate }: DatePickerProps) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(value?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(value?.getMonth() ?? today.getMonth());

  const days = useMemo(() => {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const cells: (Date | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(viewYear, viewMonth, d));
    return cells;
  }, [viewYear, viewMonth]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(viewYear - 1); setViewMonth(11); }
    else setViewMonth(viewMonth - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(viewYear + 1); setViewMonth(0); }
    else setViewMonth(viewMonth + 1);
  };

  const isDisabled = (d: Date) => {
    if (minDate && d < minDate) return true;
    if (maxDate && d > maxDate) return true;
    return false;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={prevMonth} style={({ pressed }) => [styles.navBtn, pressed && styles.pressed]} accessibilityLabel="이전 달">
          <Icon name="caret-left" size={20} color={semanticColor.iconPrimary} />
        </Pressable>
        <Text style={styles.headerTitle}>
          {viewYear}년 {viewMonth + 1}월
        </Text>
        <Pressable onPress={nextMonth} style={({ pressed }) => [styles.navBtn, pressed && styles.pressed]} accessibilityLabel="다음 달">
          <Icon name="caret-right" size={20} color={semanticColor.iconPrimary} />
        </Pressable>
      </View>

      {/* Weekday labels */}
      <View style={styles.weekRow}>
        {WEEKDAYS.map((w, i) => (
          <View key={w} style={styles.cell}>
            <Text style={[styles.weekLabel, i === 0 && styles.sundayLabel]}>{w}</Text>
          </View>
        ))}
      </View>

      {/* Days grid */}
      <View style={styles.grid}>
        {days.map((day, i) => (
          <View key={i} style={styles.cell}>
            {day ? (
              <Pressable
                onPress={() => !isDisabled(day) && onChange?.(day)}
                disabled={isDisabled(day)}
                style={({ pressed }) => [
                  styles.dayBtn,
                  value && isSameDay(day, value) && styles.selectedDay,
                  isToday(day) && !value && styles.todayDay,
                  isDisabled(day) && styles.disabledDay,
                  pressed && !isDisabled(day) && styles.pressed,
                ]}
                accessibilityLabel={`${day.getMonth() + 1}월 ${day.getDate()}일`}
              >
                <Text style={[
                  styles.dayText,
                  value && isSameDay(day, value) && styles.selectedDayText,
                  isToday(day) && styles.todayText,
                  isDisabled(day) && styles.disabledText,
                  day.getDay() === 0 && styles.sundayText,
                ]}>
                  {day.getDate()}
                </Text>
              </Pressable>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  );
}

const CELL_SIZE = 40;

const styles = StyleSheet.create({
  container: {
    backgroundColor: semanticColor.backgroundPrimary,
    borderRadius: radius.medium,
    padding: spacing.large,
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.large,
  } as ViewStyle,
  headerTitle: {
    fontSize: textStyle.headline.fontSize,
    fontWeight: fontWeight.semibold,
    color: semanticColor.textPrimary,
  } as TextStyle,
  navBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  } as ViewStyle,
  pressed: {
    opacity: interaction.pressOpacity,
  } as ViewStyle,
  weekRow: {
    flexDirection: 'row',
    marginBottom: spacing.small,
  } as ViewStyle,
  weekLabel: {
    fontSize: textStyle.caption.fontSize,
    fontWeight: fontWeight.medium,
    color: semanticColor.textSecondary,
    textAlign: 'center',
  } as TextStyle,
  sundayLabel: {
    color: semanticColor.textError,
  } as TextStyle,
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  } as ViewStyle,
  cell: {
    width: `${100 / 7}%` as any,
    height: CELL_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  dayBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  } as ViewStyle,
  dayText: {
    fontSize: textStyle.label1.fontSize,
    fontWeight: fontWeight.regular,
    color: semanticColor.textPrimary,
  } as TextStyle,
  selectedDay: {
    backgroundColor: semanticColor.backgroundBrand,
  } as ViewStyle,
  selectedDayText: {
    color: semanticColor.textOnColor,
    fontWeight: fontWeight.semibold,
  } as TextStyle,
  todayDay: {
    borderWidth: 1,
    borderColor: semanticColor.borderFocus,
  } as ViewStyle,
  todayText: {
    color: semanticColor.textBrand,
    fontWeight: fontWeight.semibold,
  } as TextStyle,
  disabledDay: {
    opacity: 0.3,
  } as ViewStyle,
  disabledText: {
    color: semanticColor.textTertiary,
  } as TextStyle,
  sundayText: {
    color: semanticColor.textError,
  } as TextStyle,
});
