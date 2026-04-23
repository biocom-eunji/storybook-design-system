import React, { createContext, useContext } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import {
  semanticColor, fontWeight, textStyle, spacing, radius, interaction,
} from '../tokens/theme';

// ─── Context ─────────────────────────────────────────────────

interface RadioCardGroupContextValue {
  value: string | null;
  onChange: (value: string) => void;
  name: string;
  groupDisabled: boolean;
}

const RadioCardGroupContext = createContext<RadioCardGroupContextValue>({
  value: null,
  onChange: () => {},
  name: '',
  groupDisabled: false,
});

// ─── RadioCardGroup ──────────────────────────────────────────

export interface RadioCardGroupProps {
  /** 선택된 값 */
  value: string | null;
  /** 선택 변경 콜백 */
  onChange: (value: string) => void;
  /** 폼 그룹 이름 */
  name: string;
  /** 전체 비활성화 */
  disabled?: boolean;
  /** 카드 간 간격 */
  gap?: number;
  /** RadioCard children */
  children: React.ReactNode;
}

export function RadioCardGroup({
  value,
  onChange,
  name,
  disabled = false,
  gap = spacing.small,
  children,
}: RadioCardGroupProps) {
  return (
    <RadioCardGroupContext.Provider value={{ value, onChange, name, groupDisabled: disabled }}>
      <View
        style={{ gap }}
        accessibilityRole="radiogroup"
        accessibilityLabel={name}
      >
        {children}
      </View>
    </RadioCardGroupContext.Provider>
  );
}

// ─── RadioCard ───────────────────────────────────────────────

export interface RadioCardProps {
  /** 고유 식별자 */
  value: string;
  /** 표시 텍스트 */
  label: string;
  /** 보조 설명 */
  description?: string;
  /** 개별 비활성화 */
  disabled?: boolean;
}

const INDICATOR_OUTER = 22;
const INDICATOR_INNER = 10;

export function RadioCard({
  value,
  label,
  description,
  disabled: itemDisabled = false,
}: RadioCardProps) {
  const { value: groupValue, onChange, groupDisabled } = useContext(RadioCardGroupContext);
  const selected = groupValue === value;
  const disabled = groupDisabled || itemDisabled;

  const borderColor = (() => {
    if (disabled) return semanticColor.borderDefault;
    if (selected) return semanticColor.borderFocus;
    return semanticColor.borderDefault;
  })();

  const borderWidth = selected && !disabled ? 2 : 1;

  return (
    <Pressable
      onPress={() => { if (!disabled) onChange(value); }}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected, disabled }}
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.card,
        { borderColor, borderWidth },
        disabled && styles.cardDisabled,
        pressed && !disabled && styles.pressed,
      ]}
    >
      {/* Radio Indicator */}
      <View style={[
        styles.indicator,
        selected && !disabled
          ? { backgroundColor: semanticColor.backgroundBrand, borderWidth: 0 }
          : {
              backgroundColor: 'transparent',
              borderWidth: 1.5,
              borderColor: disabled ? semanticColor.borderDefault : semanticColor.borderActive,
            },
      ]}>
        {selected && (
          <View style={styles.indicatorInner} />
        )}
      </View>

      {/* Text */}
      <View style={styles.textWrap}>
        <Text style={[
          styles.label,
          selected && !disabled && styles.labelSelected,
          disabled && styles.textDisabled,
        ]}>
          {label}
        </Text>
        {description && (
          <Text style={[
            styles.description,
            disabled && styles.textDisabled,
          ]}>
            {description}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

// ─── Styles ─────────────────────────────────────────────────

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.medium,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: radius.medium,
    backgroundColor: semanticColor.backgroundPrimary,
  } as ViewStyle,
  cardDisabled: {
    opacity: 0.4,
  } as ViewStyle,
  pressed: {
    opacity: interaction.pressOpacity,
  } as ViewStyle,
  indicator: {
    width: INDICATOR_OUTER,
    height: INDICATOR_OUTER,
    borderRadius: INDICATOR_OUTER / 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  } as ViewStyle,
  indicatorInner: {
    width: INDICATOR_INNER,
    height: INDICATOR_INNER,
    borderRadius: INDICATOR_INNER / 2,
    backgroundColor: semanticColor.iconOnColor,
  } as ViewStyle,
  textWrap: {
    flex: 1,
    gap: 2,
  } as ViewStyle,
  label: {
    fontSize: textStyle.body2.fontSize,
    fontWeight: fontWeight.medium,
    lineHeight: textStyle.body2.lineHeight,
    color: semanticColor.textPrimary,
  } as TextStyle,
  labelSelected: {
    fontWeight: fontWeight.semibold,
  } as TextStyle,
  description: {
    fontSize: textStyle.caption.fontSize,
    fontWeight: fontWeight.regular,
    lineHeight: textStyle.caption.lineHeight,
    color: semanticColor.textSecondary,
  } as TextStyle,
  textDisabled: {
    color: semanticColor.textTertiary,
  } as TextStyle,
});
