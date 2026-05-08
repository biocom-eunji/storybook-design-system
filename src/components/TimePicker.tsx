import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { Icon } from './Icon';
import { semanticColor, fontWeight, textStyle, spacing, radius, interaction } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────

export interface TimeValue {
  hour: number;
  minute: number;
  period: 'AM' | 'PM';
}

/** TimePicker — 시간 선택 (시 / 분 / AM·PM) */
export interface TimePickerProps {
  /** 선택된 시간 */
  value?: TimeValue;
  /** 시간 변경 콜백 */
  onChange?: (value: TimeValue) => void;
  /** 비활성화 */
  disabled?: boolean;
  /** 분 간격 (기본 1) */
  minuteInterval?: 1 | 5 | 10 | 15 | 30;
}

const DEFAULT_VALUE: TimeValue = { hour: 12, minute: 0, period: 'AM' };
const PERIODS: ('AM' | 'PM')[] = ['AM', 'PM'];

function padTwo(n: number): string {
  return String(n).padStart(2, '0');
}

// ─── Component ──────────────────────────────────────────────

export function TimePicker({
  value: valueProp,
  onChange,
  disabled = false,
  minuteInterval = 1,
}: TimePickerProps) {
  const [internal, setInternal] = useState<TimeValue>(valueProp ?? DEFAULT_VALUE);

  useEffect(() => {
    if (valueProp) setInternal(valueProp);
  }, [valueProp?.hour, valueProp?.minute, valueProp?.period]);

  const { hour, minute, period } = internal;

  const minutes = Array.from(
    { length: Math.floor(60 / minuteInterval) },
    (_, i) => i * minuteInterval,
  );

  const emit = (next: TimeValue) => {
    setInternal(next);
    onChange?.(next);
  };

  const handleHourChange = (delta: number) => {
    if (disabled) return;
    const nextHour = ((hour - 1 + delta + 12) % 12) + 1;
    emit({ ...internal, hour: nextHour });
  };

  const handleMinuteChange = (delta: number) => {
    if (disabled) return;
    const idx = minutes.indexOf(minute);
    const nextIdx = (idx + delta + minutes.length) % minutes.length;
    emit({ ...internal, minute: minutes[nextIdx] });
  };

  const handlePeriodSelect = (p: 'AM' | 'PM') => {
    if (disabled || p === period) return;
    emit({ ...internal, period: p });
  };

  const disabledOpacity = disabled ? interaction.disabledOpacity : 1;

  return (
    <View style={[styles.container, { opacity: disabledOpacity }]}
      accessibilityRole="adjustable"
      accessibilityLabel={`${hour}시 ${padTwo(minute)}분 ${period}`}
    >
      {/* Hour */}
      <View style={styles.column}>
        <Pressable
          onPress={() => handleHourChange(1)}
          disabled={disabled}
          style={({ pressed }) => [styles.arrowBtn, pressed && styles.pressed]}
          accessibilityLabel="시 증가"
        >
          <Icon name="caret-up" size={20} color={semanticColor.iconPrimary} />
        </Pressable>
        <View style={styles.valueBox}>
          <Text style={styles.valueText}>{padTwo(hour)}</Text>
        </View>
        <Pressable
          onPress={() => handleHourChange(-1)}
          disabled={disabled}
          style={({ pressed }) => [styles.arrowBtn, pressed && styles.pressed]}
          accessibilityLabel="시 감소"
        >
          <Icon name="caret-down" size={20} color={semanticColor.iconPrimary} />
        </Pressable>
      </View>

      <Text style={styles.separator}>:</Text>

      {/* Minute */}
      <View style={styles.column}>
        <Pressable
          onPress={() => handleMinuteChange(1)}
          disabled={disabled}
          style={({ pressed }) => [styles.arrowBtn, pressed && styles.pressed]}
          accessibilityLabel="분 증가"
        >
          <Icon name="caret-up" size={20} color={semanticColor.iconPrimary} />
        </Pressable>
        <View style={styles.valueBox}>
          <Text style={styles.valueText}>{padTwo(minute)}</Text>
        </View>
        <Pressable
          onPress={() => handleMinuteChange(-1)}
          disabled={disabled}
          style={({ pressed }) => [styles.arrowBtn, pressed && styles.pressed]}
          accessibilityLabel="분 감소"
        >
          <Icon name="caret-down" size={20} color={semanticColor.iconPrimary} />
        </Pressable>
      </View>

      {/* Period */}
      <View style={styles.periodColumn}>
        {PERIODS.map((p) => (
          <Pressable
            key={p}
            onPress={() => handlePeriodSelect(p)}
            disabled={disabled}
            style={({ pressed }) => [
              styles.periodBtn,
              p === period && styles.periodBtnActive,
              pressed && !disabled && styles.pressed,
            ]}
            accessibilityLabel={p}
            accessibilityState={{ selected: p === period }}
          >
            <Text style={[
              styles.periodText,
              p === period && styles.periodTextActive,
            ]}>
              {p}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

// ─── Styles ─────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.small,
    alignSelf: 'flex-start',
  } as ViewStyle,
  column: {
    alignItems: 'center',
    gap: spacing.xsmall,
  } as ViewStyle,
  arrowBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.small,
  } as ViewStyle,
  pressed: {
    opacity: interaction.pressOpacity,
  } as ViewStyle,
  valueBox: {
    width: 64,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: semanticColor.backgroundSecondary,
    borderRadius: radius.medium,
    borderWidth: 1,
    borderColor: semanticColor.borderDefault,
  } as ViewStyle,
  valueText: {
    fontSize: textStyle.title3.fontSize,
    fontWeight: fontWeight.bold,
    color: semanticColor.textPrimary,
  } as TextStyle,
  separator: {
    fontSize: textStyle.title3.fontSize,
    fontWeight: fontWeight.bold,
    color: semanticColor.textSecondary,
    marginHorizontal: spacing.xsmall,
  } as TextStyle,
  periodColumn: {
    gap: spacing.xsmall,
    marginLeft: spacing.medium,
  } as ViewStyle,
  periodBtn: {
    width: 48,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.small,
    backgroundColor: semanticColor.backgroundSecondary,
    borderWidth: 1,
    borderColor: semanticColor.borderDefault,
  } as ViewStyle,
  periodBtnActive: {
    backgroundColor: semanticColor.backgroundBrand,
    borderColor: semanticColor.backgroundBrand,
  } as ViewStyle,
  periodText: {
    fontSize: textStyle.label1.fontSize,
    fontWeight: fontWeight.semibold,
    color: semanticColor.textSecondary,
  } as TextStyle,
  periodTextActive: {
    color: semanticColor.textOnColor,
  } as TextStyle,
});
