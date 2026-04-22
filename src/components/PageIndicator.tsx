import React from 'react';
import { View, Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { semanticColor, opacity } from '../tokens/theme';

export type PageIndicatorVariant = 'normal' | 'white';
export type PageIndicatorSize = 'small' | 'medium';

/** Dot — 캐러셀 페이지 인디케이터 */
export interface PageIndicatorProps {
  /** 색상 변형 */
  variant?: PageIndicatorVariant;
  /** 크기 */
  size?: PageIndicatorSize;
  /** 전체 페이지 수 */
  total: number;
  /** 현재 페이지 index (0-based) */
  current: number;
  /** 클릭 시 페이지 이동 */
  onChange?: (index: number) => void;
}

// Figma 실측 기반 사이즈 스펙
const SIZE_CONFIG = {
  medium: {
    activeSize: 10,
    sizes: [10, 10, 8, 6],   // distance 0, 1, 2, 3+
    gap: 10,
  },
  small: {
    activeSize: 6,
    sizes: [6, 6, 4, 2],     // distance 0, 1, 2, 3+
    gap: 6,
  },
} as const;

// Figma 실측 기반 opacity 스펙
const OPACITY_CONFIG = {
  normal: {
    active: opacity[100],
    inactive: opacity[16],
    color: semanticColor.iconPrimary,
  },
  white: {
    active: opacity[100],
    inactive: opacity[52],
    color: semanticColor.iconOnColor,
  },
} as const;

function getPageIndicatorSize(distance: number, sizeConfig: typeof SIZE_CONFIG['medium']): number {
  if (distance >= sizeConfig.sizes.length) return sizeConfig.sizes[sizeConfig.sizes.length - 1];
  return sizeConfig.sizes[distance];
}

export function PageIndicator({
  variant = 'normal',
  size = 'medium',
  total,
  current,
  onChange,
}: PageIndicatorProps) {
  const sizeConfig = SIZE_CONFIG[size];
  const opacityConfig = OPACITY_CONFIG[variant];

  return (
    <View
      style={[styles.container, { gap: sizeConfig.gap }]}
      accessibilityRole="tablist"
      accessibilityLabel="페이지 인디케이터"
    >
      {Array.from({ length: total }, (_, i) => {
        const isActive = i === current;
        const distance = Math.abs(i - current);
        const dotSize = getPageIndicatorSize(distance, sizeConfig);
        const dotOpacity = isActive ? opacityConfig.active : opacityConfig.inactive;

        const dotStyle: ViewStyle = {
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize / 2,
          backgroundColor: opacityConfig.color,
          opacity: dotOpacity,
        };

        if (onChange) {
          return (
            <Pressable
              key={i}
              onPress={() => onChange(i)}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={`페이지 ${i + 1}`}
              hitSlop={8}
              style={styles.dotWrapper}
            >
              <View style={dotStyle} />
            </Pressable>
          );
        }

        return (
          <View
            key={i}
            style={[styles.dotWrapper, dotStyle]}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  dotWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
});
