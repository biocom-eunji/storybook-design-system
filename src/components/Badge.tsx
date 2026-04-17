import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { radius, spacing, semanticColor } from '../tokens/theme';

export type BadgeVariant = 'filled' | 'outlined' | 'dot';
export type BadgeColor = 'primary' | 'error' | 'success' | 'warning';
export type BadgeSize = 'small' | 'medium';

/** Badge — 숫자/상태 배지 */
export interface BadgeProps {
  count?: number;
  maxCount?: number;
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  /** 접근성 라벨 */
  accessibilityLabel?: string;
  children?: React.ReactNode;
}

const colorMap = {
  primary: semanticColor.backgroundBrand,
  error: semanticColor.backgroundError,
  success: semanticColor.backgroundBrand,
  warning: semanticColor.backgroundWarning,
} as const;

const sizeMap = {
  small: { height: 16, minWidth: 16, fontSize: 10, dotSize: 6 },
  medium: { height: 20, minWidth: 20, fontSize: 11, dotSize: 8 },
} as const;

export function Badge({
  count,
  maxCount = 99,
  variant = 'filled',
  color = 'error',
  size = 'medium',
  accessibilityLabel,
  children,
}: BadgeProps) {
  const themeColor = colorMap[color];
  const sizeToken = sizeMap[size];

  const displayText =
    count !== undefined
      ? count > maxCount
        ? `${maxCount}+`
        : `${count}`
      : undefined;

  const isDot = variant === 'dot';

  const badgeStyle: ViewStyle = isDot
    ? {
        width: sizeToken.dotSize,
        height: sizeToken.dotSize,
        borderRadius: radius.full,
        backgroundColor: themeColor,
      }
    : {
        alignSelf: 'flex-start',
        height: sizeToken.height,
        minWidth: sizeToken.height,
        borderRadius: radius.full,
        paddingHorizontal: spacing.xsmall,
        alignItems: 'center',
        justifyContent: 'center',
        ...(variant === 'filled'
          ? { backgroundColor: themeColor }
          : {
              backgroundColor: semanticColor.backgroundStatus,
              borderWidth: 1,
              borderColor: themeColor,
            }),
      };

  const textStyle: TextStyle = {
    fontSize: sizeToken.fontSize,
    fontWeight: '600',
    color: variant === 'filled' ? semanticColor.textOnColor : themeColor,
    textAlign: 'center',
  };

  const badge = (
    <View style={badgeStyle}>
      {!isDot && displayText !== undefined && (
        <Text style={textStyle}>{displayText}</Text>
      )}
    </View>
  );

  if (!children) {
    return badge;
  }

  return (
    <View style={styles.wrapper} accessibilityLabel={accessibilityLabel}>
      {children}
      <View style={[styles.positioned, isDot && styles.positionedDot]}>
        {badge}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
  },
  positioned: {
    position: 'absolute',
    top: -4,
    right: -4,
  },
  positionedDot: {
    top: -2,
    right: -2,
  },
});
