import React from 'react';
import { View, Text, type ViewStyle, type TextStyle } from 'react-native';
import { coolNeutral, mint, green, red, yellow, fontSize, fontWeight } from '../tokens/theme';

export type ProgressBarSize = 'small' | 'medium' | 'large';
export type ProgressBarColor = 'primary' | 'success' | 'error' | 'warning';

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
  primary: mint[45],
  success: green[45],
  error: red[70],
  warning: yellow[50],
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
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    color: coolNeutral[17],
    textAlign: 'right',
    marginBottom: 4,
  };

  const trackStyle: ViewStyle = {
    height,
    backgroundColor: coolNeutral[96],
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
    <View>
      {showLabel && (
        <Text style={labelStyle}>{Math.round(clampedProgress * 100)}%</Text>
      )}
      <View style={trackStyle}>
        <View style={fillStyle} />
      </View>
    </View>
  );
}
