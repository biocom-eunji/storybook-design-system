import React from 'react';
import { View, Text, type ViewStyle, type TextStyle } from 'react-native';
import { fontSize, fontWeight, spacing, semanticColor } from '../tokens/theme';

export type ProgressBarSize = 'small' | 'medium' | 'large';
export type ProgressBarColor = 'primary' | 'success' | 'error' | 'warning';

/** ProgressBar — 수평 진행률 표시 */
export interface ProgressBarProps {
  progress: number;
  size?: ProgressBarSize;
  color?: ProgressBarColor;
  showLabel?: boolean;
  animated?: boolean;
  rounded?: boolean;
}

const heights: Record<ProgressBarSize, number> = {
  small: 4,
  medium: 8,
  large: 12,
};

const fillColors: Record<ProgressBarColor, string> = {
  primary: semanticColor.backgroundBrand,
  success: semanticColor.backgroundSuccess,
  error: semanticColor.backgroundError,
  warning: semanticColor.backgroundWarning,
};

export function ProgressBar({
  progress,
  size = 'medium',
  color = 'primary',
  showLabel = false,
  animated = true,
  rounded = true,
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  const height = heights[size];
  const borderRadius = rounded ? height / 2 : 0;

  const labelStyle: TextStyle = {
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.semibold,
    color: semanticColor.textPrimary,
    textAlign: 'right',
    marginBottom: spacing.xsmall,
  };

  const trackStyle: ViewStyle = {
    height,
    backgroundColor: semanticColor.backgroundDisabled,
    borderRadius,
    overflow: 'hidden',
  };

  const fillStyle: ViewStyle = {
    height,
    width: `${clampedProgress * 100}%` as any,
    backgroundColor: fillColors[color],
    borderRadius,
    ...(animated ? { transition: 'width 0.3s ease' } as any : {}),
  };

  return (
    <View accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: 100, now: Math.round(clampedProgress * 100) }}>
      {showLabel && (
        <Text style={labelStyle}>{Math.round(clampedProgress * 100)}%</Text>
      )}
      <View style={trackStyle}>
        <View style={fillStyle} />
      </View>
    </View>
  );
}
