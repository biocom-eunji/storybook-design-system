import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { semanticColor, fontWeight, textStyle } from '../tokens/theme';

export type CircularProgressColor = 'primary' | 'success' | 'warning' | 'error';

/** CircularProgress — 원형 진행률 표시 */
export interface CircularProgressProps {
  /** 진행률 (0~1) */
  progress: number;
  /** 크기 (지름) */
  size?: number;
  /** 링 두께 */
  strokeWidth?: number;
  /** 색상 */
  color?: CircularProgressColor;
  /** 중앙 텍스트 표시 */
  showLabel?: boolean;
  /** 커스텀 라벨 (기본: 퍼센트) */
  label?: string;
}

const COLOR_MAP: Record<CircularProgressColor, string> = {
  primary: semanticColor.backgroundBrand,
  success: semanticColor.backgroundSuccess,
  warning: semanticColor.backgroundWarning,
  error:   semanticColor.backgroundError,
};

export function CircularProgress({
  progress,
  size = 80,
  strokeWidth = 6,
  color = 'primary',
  showLabel = true,
  label,
}: CircularProgressProps) {
  const clamped = Math.min(Math.max(progress, 0), 1);
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference * (1 - clamped);
  const displayLabel = label ?? `${Math.round(clamped * 100)}%`;

  const fontSize = size >= 80 ? textStyle.headline.fontSize :
                   size >= 56 ? textStyle.label1.fontSize :
                   textStyle.caption.fontSize;

  return (
    <View style={[styles.container, { width: size, height: size }]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(clamped * 100) }}
    >
      <Svg width={size} height={size}>
        {/* Track */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={semanticColor.backgroundDisabled}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Fill */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={COLOR_MAP[color]}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      {showLabel && (
        <View style={styles.labelWrap}>
          <Text style={[styles.label, { fontSize }]}>{displayLabel}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  labelWrap: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  label: {
    fontWeight: fontWeight.bold,
    color: semanticColor.textPrimary,
    textAlign: 'center',
  } as TextStyle,
});
