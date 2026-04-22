import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { fontWeight, textStyle, green, yellow, orange, red, semanticColor } from '../tokens/theme';
// halo 색상은 Primitive 참조 (시맨틱 토큰에 halo 전용 없음)

// ─── Types ──────────────────────────────────────────────────

export type FrequencyChipSeverity = 'safe' | 'moderate' | 'warning' | 'critical';

/** FrequencyChip — 수치 데이터를 원형 칩으로 시각화하는 컴포넌트 */
export interface FrequencyChipProps {
  /** 표시할 숫자 (0 이상의 정수) */
  value: number;
  /** 심각도 */
  severity?: FrequencyChipSeverity;
  /** 최대값 (초과 시 "99+" 형태) */
  max?: number;
  /** 접근성 라벨 */
  accessibilityLabel?: string;
}

// ─── Constants ──────────────────────────────────────────────

const CHIP_SIZE = 26;
const BORDER_WIDTH = 2;
const BORDER_RADIUS = CHIP_SIZE / 2;

const SEVERITY_COLORS: Record<FrequencyChipSeverity, { main: string; halo: string }> = {
  safe:     { main: semanticColor.backgroundSuccess, halo: green[90] },
  moderate: { main: semanticColor.backgroundCaution, halo: yellow[90] },
  warning:  { main: semanticColor.backgroundWarning, halo: orange[90] },
  critical: { main: semanticColor.backgroundError, halo: red[90] },
};

const SEVERITY_LABELS: Record<FrequencyChipSeverity, string> = {
  safe: '안전',
  moderate: '양호',
  warning: '주의',
  critical: '위험',
};

// ─── Component ──────────────────────────────────────────────

export function FrequencyChip({
  value,
  severity = 'safe',
  max = 99,
  accessibilityLabel,
}: FrequencyChipProps) {
  if (__DEV__ && (value < 0 || !Number.isInteger(value))) {
    console.warn('FrequencyChip: value는 0 이상의 정수여야 합니다.');
  }

  const colors = SEVERITY_COLORS[severity];
  const displayValue = value > max ? `${max}+` : String(value);
  const label = accessibilityLabel ?? `${SEVERITY_LABELS[severity]} 단계, ${value}회`;

  return (
    <View
      style={[
        styles.chip,
        {
          backgroundColor: colors.main,
          borderColor: colors.halo,
        },
      ]}
      accessibilityRole="image"
      accessibilityLabel={label}
    >
      <Text style={styles.text}>{displayValue}</Text>
    </View>
  );
}

// ─── Styles ─────────────────────────────────────────────────

const styles = StyleSheet.create({
  chip: {
    width: CHIP_SIZE,
    height: CHIP_SIZE,
    borderRadius: BORDER_RADIUS,
    borderWidth: BORDER_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  text: {
    fontSize: textStyle.label1.fontSize,
    fontWeight: fontWeight.medium,
    color: semanticColor.textOnColor,
    textAlign: 'center',
  } as TextStyle,
});
