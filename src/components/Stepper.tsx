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

/** Stepper (NumberInput) — 숫자 증감 입력 */
export interface StepperProps {
  /** 현재 값 */
  value?: number;
  /** 값 변경 콜백 */
  onChange?: (value: number) => void;
  /** 최소값 */
  min?: number;
  /** 최대값 */
  max?: number;
  /** 증감 단위 (기본 1) */
  step?: number;
  /** 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 비활성화 */
  disabled?: boolean;
  /** 단위 텍스트 (예: "개", "회") */
  unit?: string;
}

const SIZE_MAP = {
  small:  { btnSize: 28, fontSize: textStyle.label2.fontSize, gap: spacing.small },
  medium: { btnSize: 36, fontSize: textStyle.body2.fontSize,  gap: spacing.medium },
  large:  { btnSize: 44, fontSize: textStyle.headline.fontSize, gap: spacing.large },
} as const;

export function Stepper({
  value: valueProp = 0,
  onChange,
  min = 0,
  max = 99,
  step = 1,
  size = 'medium',
  disabled = false,
  unit,
}: StepperProps) {
  const [value, setValue] = useState(valueProp);

  useEffect(() => { setValue(valueProp); }, [valueProp]);

  const sizeConfig = SIZE_MAP[size];
  const isMinReached = value <= min;
  const isMaxReached = value >= max;

  const handleChange = (delta: number) => {
    if (disabled) return;
    const next = Math.min(max, Math.max(min, value + delta));
    if (next !== value) {
      setValue(next);
      onChange?.(next);
    }
  };

  const iconSize = size === 'small' ? 14 : size === 'medium' ? 18 : 22;

  return (
    <View
      style={[styles.container, { gap: sizeConfig.gap, opacity: disabled ? 0.4 : 1 }]}
      accessibilityRole="adjustable"
      accessibilityValue={{ min, max, now: value }}
      accessibilityLabel={`수량 ${value}${unit ? ` ${unit}` : ''}`}
    >
      <Pressable
        onPress={() => handleChange(-step)}
        disabled={disabled || isMinReached}
        style={({ pressed }) => [
          styles.button,
          {
            width: sizeConfig.btnSize,
            height: sizeConfig.btnSize,
            borderRadius: sizeConfig.btnSize / 2,
          },
          (isMinReached || disabled) && styles.buttonDisabled,
          pressed && !isMinReached && !disabled && styles.pressed,
        ]}
        accessibilityLabel="감소"
      >
        <Icon
          name="minus"
          size={iconSize}
          color={(isMinReached || disabled) ? semanticColor.iconDisabled : semanticColor.iconPrimary}
        />
      </Pressable>

      <View style={styles.valueWrap}>
        <Text style={[
          styles.valueText,
          { fontSize: sizeConfig.fontSize },
          disabled && styles.valueDisabled,
        ]}>
          {value}
        </Text>
        {unit && (
          <Text style={[
            styles.unitText,
            disabled && styles.valueDisabled,
          ]}>
            {unit}
          </Text>
        )}
      </View>

      <Pressable
        onPress={() => handleChange(step)}
        disabled={disabled || isMaxReached}
        style={({ pressed }) => [
          styles.button,
          {
            width: sizeConfig.btnSize,
            height: sizeConfig.btnSize,
            borderRadius: sizeConfig.btnSize / 2,
          },
          (isMaxReached || disabled) && styles.buttonDisabled,
          pressed && !isMaxReached && !disabled && styles.pressed,
        ]}
        accessibilityLabel="증가"
      >
        <Icon
          name="plus"
          size={iconSize}
          color={(isMaxReached || disabled) ? semanticColor.iconDisabled : semanticColor.iconPrimary}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  } as ViewStyle,
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: semanticColor.backgroundSecondary,
    borderWidth: 1,
    borderColor: semanticColor.borderDefault,
  } as ViewStyle,
  buttonDisabled: {
    backgroundColor: semanticColor.backgroundDisabled,
    borderColor: semanticColor.borderDefault,
  } as ViewStyle,
  pressed: {
    opacity: interaction.pressOpacity,
  } as ViewStyle,
  valueWrap: {
    flexDirection: 'row',
    alignItems: 'baseline',
    minWidth: 40,
    justifyContent: 'center',
  } as ViewStyle,
  valueText: {
    fontWeight: fontWeight.bold,
    color: semanticColor.textPrimary,
    textAlign: 'center',
  } as TextStyle,
  unitText: {
    fontSize: textStyle.caption.fontSize,
    fontWeight: fontWeight.medium,
    color: semanticColor.textSecondary,
    marginLeft: 2,
  } as TextStyle,
  valueDisabled: {
    color: semanticColor.textTertiary,
  } as TextStyle,
});
