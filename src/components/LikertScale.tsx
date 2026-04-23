import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import {
  semanticColor, fontWeight, textStyle, spacing, interaction,
} from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────

export type LikertSteps = 3 | 4 | 5 | 6 | 7;
export type LikertColorMode = 'neutral' | 'bipolar';

export interface LikertScaleProps {
  /** 선택지 개수 (3~7) */
  steps?: LikertSteps;
  /** 선택된 인덱스 (0-based, null = 미선택) */
  value: number | null;
  /** 선택 변경 콜백 */
  onChange: (index: number) => void;
  /** 좌측 끝 레이블 */
  startLabel?: string;
  /** 우측 끝 레이블 */
  endLabel?: string;
  /** 색상 모드 */
  colorMode?: LikertColorMode;
  /** 비활성화 */
  disabled?: boolean;
  /** 접근성 그룹 이름 */
  name?: string;
}

// ─── Color Palette ──────────────────────────────────────────

const BIPOLAR_COLORS = [
  semanticColor.backgroundError,    // critical (red)
  semanticColor.backgroundWarning,  // warning (orange)
  semanticColor.backgroundOff,      // neutral (gray)
  semanticColor.backgroundCaution,  // safe-light (yellow)
  semanticColor.backgroundSuccess,  // safe (green)
];

function getBipolarColor(index: number, total: number): string {
  const ratio = total <= 1 ? 0 : index / (total - 1);
  const mappedIndex = Math.round(ratio * (BIPOLAR_COLORS.length - 1));
  return BIPOLAR_COLORS[mappedIndex];
}

// ─── Component ──────────────────────────────────────────────

const DOT_SIZE = 32;
const TOUCH_SIZE = 44;

export function LikertScale({
  steps = 4,
  value,
  onChange,
  startLabel,
  endLabel,
  colorMode = 'neutral',
  disabled = false,
  name,
}: LikertScaleProps) {
  const dots = Array.from({ length: steps }, (_, i) => i);

  const getColor = (index: number, selected: boolean): string => {
    if (!selected) return 'transparent';
    if (colorMode === 'neutral') return semanticColor.backgroundBrand;
    return getBipolarColor(index, steps);
  };

  const getBorderColor = (index: number, selected: boolean): string => {
    if (selected) return 'transparent';
    if (colorMode === 'bipolar') return getBipolarColor(index, steps);
    return semanticColor.borderActive;
  };

  const startLabelColor = colorMode === 'bipolar'
    ? semanticColor.textError
    : semanticColor.textSecondary;

  const endLabelColor = colorMode === 'bipolar'
    ? semanticColor.textSuccess
    : semanticColor.textSecondary;

  return (
    <View
      style={[styles.container, disabled && styles.disabled]}
      accessibilityRole="radiogroup"
      accessibilityLabel={name}
    >
      {/* Dots */}
      <View style={styles.dotsRow}>
        {dots.map((i) => {
          const selected = value === i;
          const fillColor = getColor(i, selected);
          const borderColor = getBorderColor(i, selected);
          const ariaLabel = (() => {
            if (i === 0 && startLabel) return `${i + 1}단계: ${startLabel}`;
            if (i === steps - 1 && endLabel) return `${i + 1}단계: ${endLabel}`;
            return `${i + 1}단계`;
          })();

          return (
            <View key={i} style={styles.dotCell}>
              <Pressable
                onPress={() => { if (!disabled) onChange(i); }}
                disabled={disabled}
                accessibilityRole="radio"
                accessibilityState={{ checked: selected }}
                accessibilityLabel={ariaLabel}
                style={({ pressed }) => [
                  styles.touchArea,
                  pressed && !disabled && styles.pressed,
                ]}
              >
                <View style={[
                  styles.dot,
                  {
                    backgroundColor: fillColor,
                    borderColor,
                    borderWidth: selected ? 0 : 2,
                  },
                ]} />
              </Pressable>
            </View>
          );
        })}
      </View>

      {/* Labels */}
      {(startLabel || endLabel) && (
        <View style={styles.labelsRow}>
          <Text style={[styles.label, { color: startLabelColor }]}>
            {startLabel || ''}
          </Text>
          <Text style={[styles.label, { color: endLabelColor, textAlign: 'right' }]}>
            {endLabel || ''}
          </Text>
        </View>
      )}
    </View>
  );
}

// ─── Styles ─────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    gap: spacing.small,
  } as ViewStyle,
  disabled: {
    opacity: 0.4,
  } as ViewStyle,
  dotsRow: {
    flexDirection: 'row',
  } as ViewStyle,
  dotCell: {
    flex: 1,
    alignItems: 'center',
  } as ViewStyle,
  touchArea: {
    width: TOUCH_SIZE,
    height: TOUCH_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  pressed: {
    opacity: interaction.pressOpacity,
  } as ViewStyle,
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
  } as ViewStyle,
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  } as ViewStyle,
  label: {
    fontSize: textStyle.caption.fontSize,
    fontWeight: fontWeight.regular,
    lineHeight: textStyle.caption.lineHeight,
    letterSpacing: textStyle.caption.letterSpacing,
    color: semanticColor.textSecondary,
  } as TextStyle,
});
