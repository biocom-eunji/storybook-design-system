import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import {
  lightBlue, yellow, orange, pink, coolNeutral, green, mint, red, violet,
  fontWeight, textStyle, spacing, radius as radiusToken,
} from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────

export type TagSize = 'small' | 'medium';

export type TagColor =
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'mint'
  | 'violet'
  | 'pink';

export type TagLevel = 1 | 2 | 3 | 4 | 5;

export type TagProps =
  | { variant: 'neutral'; level?: never; color?: never; size?: TagSize; children: string }
  | { variant: 'level';   level: TagLevel; color?: never; size?: TagSize; children: string }
  | { variant: 'status';  color: TagColor; level?: never; size?: TagSize; children: string };

// ─── Color Maps ─────────────────────────────────────────────

const LEVEL_COLORS: Record<TagLevel, { bg: string; text: string }> = {
  1: { bg: lightBlue[90], text: lightBlue[30] },  // 안전 (파랑)
  2: { bg: green[90],     text: green[30] },     // 양호 (초록)
  3: { bg: yellow[90],    text: yellow[30] },    // 보통 (노랑)
  4: { bg: orange[90],    text: orange[30] },    // 주의 (주황)
  5: { bg: red[90],       text: red[20] },       // 위험 (빨강)
};

const STATUS_COLORS: Record<TagColor, { bg: string; text: string }> = {
  neutral: { bg: coolNeutral[97], text: coolNeutral[40] },
  info:    { bg: lightBlue[90],   text: lightBlue[30] },
  success: { bg: green[90],       text: green[30] },
  warning: { bg: orange[90],      text: orange[30] },
  error:   { bg: red[90],         text: red[20] },
  mint:    { bg: mint[90],        text: mint[30] },
  violet:  { bg: violet[95],      text: violet[30] },
  pink:    { bg: pink[95],        text: pink[30] },
};

const NEUTRAL_COLORS = { bg: coolNeutral[97], text: coolNeutral[40] };

// ─── Size Maps ──────────────────────────────────────────────

const SIZE_MAP = {
  small:  { paddingV: 2, paddingH: spacing.small, fontSize: textStyle.caption.fontSize },
  medium: { paddingV: spacing.xsmall, paddingH: spacing.medium, fontSize: textStyle.label1.fontSize },
} as const;

// ─── Component ──────────────────────────────────────────────

export function Tag(props: TagProps) {
  const { variant, children, size = 'medium' } = props;

  const colors = (() => {
    if (variant === 'level') return LEVEL_COLORS[props.level];
    if (variant === 'status') return STATUS_COLORS[props.color];
    return NEUTRAL_COLORS;
  })();

  const sizeConfig = SIZE_MAP[size];

  const ariaPrefix = variant === 'level' ? `${props.level}단계` : variant === 'status' ? '상태' : '';
  const ariaLabel = ariaPrefix ? `${ariaPrefix}: ${children}` : children;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.bg,
          paddingVertical: sizeConfig.paddingV,
          paddingHorizontal: sizeConfig.paddingH,
        },
      ]}
      accessibilityRole="text"
      accessibilityLabel={ariaLabel}
    >
      <Text style={[
        styles.text,
        {
          color: colors.text,
          fontSize: sizeConfig.fontSize,
        },
      ]}>
        {children}
      </Text>
    </View>
  );
}

// ─── Styles ─────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: radiusToken.full,
  } as ViewStyle,
  text: {
    fontWeight: fontWeight.semibold,
    textAlign: 'center',
  } as TextStyle,
});
