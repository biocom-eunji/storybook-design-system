import React from 'react';
import { Pressable, Text, View, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { Icon } from './Icon';
import {
  semanticColor, fontWeight, textStyle, spacing, radius, shadow, interaction,
} from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────

export type FABVariant = 'regular' | 'extended';
export type FABColor = 'primary' | 'secondary';

/** FAB — 화면에서 중요한 작업을 수행하기 위해 고정 위치에 제공되는 버튼 */
export interface FABProps {
  /** FAB 형태 */
  variant?: FABVariant;
  /** 색상 */
  color?: FABColor;
  /** 아이콘 이름 (iconRegistry 경유) */
  iconName: string;
  /** 라벨 텍스트 (extended에서만 표시) */
  label?: string;
  /** 클릭 콜백 */
  onPress: () => void;
  /** 비활성화 */
  disabled?: boolean;
  /** 접근성 라벨 (regular FAB는 필수) */
  accessibilityLabel?: string;
}

// ─── Constants ──────────────────────────────────────────────

const FAB_SIZE = 56;
const ICON_SIZE = 24;
const EXTENDED_PADDING_H = spacing.large; // 16
const ICON_LABEL_GAP = spacing.small; // 8
const FAB_RADIUS = FAB_SIZE / 2; // 28 — 원형
const EXTENDED_RADIUS = radius.large; // 16

// ─── Color Config ───────────────────────────────────────────

const COLOR_CONFIG = {
  primary: {
    background: semanticColor.backgroundBrand,
    backgroundPressed: semanticColor.backgroundBrandPressed,
    content: semanticColor.iconOnColor,
  },
  secondary: {
    background: semanticColor.backgroundTertiary,
    backgroundPressed: semanticColor.backgroundOff,
    content: semanticColor.textPrimary,
  },
} as const;

// ─── Component ──────────────────────────────────────────────

export function FAB({
  variant = 'regular',
  color = 'primary',
  iconName,
  label,
  onPress,
  disabled = false,
  accessibilityLabel: ariaLabel,
}: FABProps) {
  const isExtended = variant === 'extended';
  const colorToken = disabled
    ? { background: semanticColor.backgroundDisabled, content: semanticColor.textTertiary }
    : COLOR_CONFIG[color];

  // Dev warnings
  if (__DEV__) {
    if (!isExtended && label) {
      console.warn('FAB: regular variant에 label을 전달했습니다. label은 extended에서만 표시됩니다.');
    }
    if (isExtended && iconName && !label) {
      console.warn('FAB: extended variant에 label이 없습니다. 아이콘만 사용하려면 regular variant를 권장합니다.');
    }
    if (!isExtended && !ariaLabel) {
      console.warn('FAB: regular FAB에는 accessibilityLabel이 필수입니다.');
    }
  }

  const containerStyle: ViewStyle = {
    height: FAB_SIZE,
    borderRadius: isExtended ? EXTENDED_RADIUS : FAB_RADIUS,
    backgroundColor: colorToken.background,
    ...(isExtended
      ? { paddingHorizontal: EXTENDED_PADDING_H, alignSelf: 'flex-start' as const }
      : { width: FAB_SIZE }
    ),
    ...(!disabled ? shadow.level2 : {}),
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={ariaLabel || label}
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.base,
        containerStyle,
        pressed && !disabled && { backgroundColor: (COLOR_CONFIG[color] || COLOR_CONFIG.primary).backgroundPressed },
        pressed && !disabled && styles.pressed,
      ]}
    >
      <View style={[styles.content, isExtended && { gap: ICON_LABEL_GAP }]}>
        <Icon name={iconName} size={ICON_SIZE} color={colorToken.content} />
        {isExtended && label && (
          <Text style={[styles.label, { color: colorToken.content }]} numberOfLines={1}>
            {label}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

// ─── Styles ─────────────────────────────────────────────────

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  label: {
    fontSize: textStyle.label1.fontSize,
    lineHeight: textStyle.label1.lineHeight,
    fontWeight: fontWeight.medium,
  } as TextStyle,
  pressed: {
    opacity: interaction.pressOpacity,
  } as ViewStyle,
});
