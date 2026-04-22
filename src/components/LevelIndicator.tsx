import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { semanticColor, fontWeight, textStyle, spacing, radius as radiusToken } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────

export type LevelColor = 'critical' | 'warning' | 'caution' | 'safe';

export interface Level {
  key: string;
  label: string;
  color: LevelColor;
}

export interface LevelIndicatorProps {
  /** 구간 정의 (왼쪽부터 순서대로) */
  levels?: Level[];
  /** 현재 상태의 key. null이면 Tooltip 없음 */
  current?: string | null;
}

// ─── Constants ──────────────────────────────────────────────

const BAR_HEIGHT = 19;
const BAR_RADIUS = 6;
const TOOLTIP_HEIGHT = 24;
const ARROW_SIZE = 5;

const COLOR_MAP: Record<LevelColor, string> = {
  critical: semanticColor.backgroundError,
  warning:  semanticColor.backgroundWarning,  // orange[60] via role/warning
  caution:  semanticColor.backgroundCaution, // yellow[50] via role/caution
  safe:     semanticColor.backgroundSuccess,
};

// caution은 warning과 색이 같으므로 Figma 원본 의도에 맞게 재매핑
// Figma: critical=red, warning=orange, caution=yellow, safe=green
// role 토큰: error=red, warning=yellow, success=green — orange가 없음
// 따라서 orange(주의)는 backgroundWarning을 사용하고, yellow(양호)는 textWarning으로 매핑

const DEFAULT_LEVELS: Level[] = [
  { key: 'bad',     label: '나쁨', color: 'critical' },
  { key: 'caution', label: '주의', color: 'warning' },
  { key: 'good',    label: '양호', color: 'caution' },
  { key: 'great',   label: '좋음', color: 'safe' },
];

// ─── Component ──────────────────────────────────────────────

export function LevelIndicator({
  levels = DEFAULT_LEVELS,
  current = null,
}: LevelIndicatorProps) {
  if (__DEV__ && (levels.length < 3 || levels.length > 5)) {
    console.warn('LevelIndicator: levels는 3~5개를 권장합니다.');
  }

  const currentIndex = current ? levels.findIndex(l => l.key === current) : -1;

  if (__DEV__ && current && currentIndex === -1) {
    console.warn(`LevelIndicator: "${current}"는 levels에 존재하지 않는 key입니다.`);
  }

  const currentLevel = currentIndex >= 0 ? levels[currentIndex] : null;
  const label = currentLevel ? `현재 상태: ${currentLevel.label}` : '상태 미지정';

  return (
    <View style={styles.container} accessibilityRole="image" accessibilityLabel={label}>
      {/* Labels + Tooltip */}
      <View style={styles.labelRow}>
        {levels.map((level, i) => {
          const isActive = i === currentIndex;
          return (
            <View key={level.key} style={styles.labelCell}>
              {isActive ? (
                <View style={styles.tooltipWrap}>
                  <View style={[styles.tooltip, { backgroundColor: COLOR_MAP[level.color] }]}>
                    <Text style={styles.tooltipText}>{level.label}</Text>
                  </View>
                  <View style={[styles.arrow, { borderTopColor: COLOR_MAP[level.color] }]} />
                </View>
              ) : (
                <Text style={styles.labelText}>{level.label}</Text>
              )}
            </View>
          );
        })}
      </View>

      {/* Bar */}
      <View style={styles.barRow}>
        {levels.map((level, i) => {
          const isFirst = i === 0;
          const isLast = i === levels.length - 1;
          return (
            <View
              key={level.key}
              style={[
                styles.barSegment,
                { backgroundColor: COLOR_MAP[level.color] },
                isFirst && styles.barFirst,
                isLast && styles.barLast,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

// ─── Styles ─────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    width: '100%' as any,
  } as ViewStyle,
  labelRow: {
    flexDirection: 'row',
    marginBottom: spacing.xsmall,
  } as ViewStyle,
  labelCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: TOOLTIP_HEIGHT + ARROW_SIZE,
  } as ViewStyle,
  labelText: {
    fontSize: textStyle.label1.fontSize,
    fontWeight: fontWeight.medium,
    color: semanticColor.textTertiary,
    textAlign: 'center',
  } as TextStyle,
  tooltipWrap: {
    alignItems: 'center',
  } as ViewStyle,
  tooltip: {
    paddingHorizontal: spacing.small,
    paddingVertical: 2,
    borderRadius: radiusToken.xsmall,
  } as ViewStyle,
  tooltipText: {
    fontSize: textStyle.caption.fontSize,
    fontWeight: fontWeight.medium,
    color: semanticColor.textOnColor,
    textAlign: 'center',
  } as TextStyle,
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: ARROW_SIZE,
    borderRightWidth: ARROW_SIZE,
    borderTopWidth: ARROW_SIZE,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  } as ViewStyle,
  barRow: {
    flexDirection: 'row',
    height: BAR_HEIGHT,
    overflow: 'hidden',
  } as ViewStyle,
  barSegment: {
    flex: 1,
  } as ViewStyle,
  barFirst: {
    borderTopLeftRadius: BAR_RADIUS,
    borderBottomLeftRadius: BAR_RADIUS,
  } as ViewStyle,
  barLast: {
    borderTopRightRadius: BAR_RADIUS,
    borderBottomRightRadius: BAR_RADIUS,
  } as ViewStyle,
});
