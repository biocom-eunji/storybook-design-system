import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { semanticColor, fontWeight, textStyle, radius, shadow } from '../tokens/theme';

export type SegmentedControlSize = 'small' | 'medium' | 'large';

export interface SegmentedControlItem {
  key: string;
  label: string;
  disabled?: boolean;
}

/** SegmentedControl — 여러 옵션 중 하나를 선택하는 컨트롤 */
export interface SegmentedControlProps {
  items: SegmentedControlItem[];
  value: string;
  onChange?: (key: string) => void;
  size?: SegmentedControlSize;
}

const SIZE_CONFIG = {
  small: {
    height: 32,
    containerPadding: 2,
    containerRadius: radius.small,
    segmentRadius: radius.xsmall,
    fontSize: textStyle.label2.fontSize,
    lineHeight: textStyle.label2.lineHeight,
    letterSpacing: textStyle.label2.letterSpacing,
  },
  medium: {
    height: 40,
    containerPadding: 2,
    containerRadius: radius.small,
    segmentRadius: radius.small,
    fontSize: textStyle.body2.fontSize,
    lineHeight: textStyle.body2.lineHeight,
    letterSpacing: textStyle.body2.letterSpacing,
  },
  large: {
    height: 48,
    containerPadding: 3,
    containerRadius: radius.medium,
    segmentRadius: radius.small,
    fontSize: textStyle.headline.fontSize,
    lineHeight: textStyle.headline.lineHeight,
    letterSpacing: textStyle.headline.letterSpacing,
  },
} as const;

export function SegmentedControl({
  items,
  value,
  onChange,
  size = 'medium',
}: SegmentedControlProps) {
  const config = SIZE_CONFIG[size];

  return (
    <View
      style={[
        styles.container,
        {
          height: config.height,
          padding: config.containerPadding,
          borderRadius: config.containerRadius,
        },
      ]}
      accessibilityRole="radiogroup"
    >
      {items.map((item) => {
        const isActive = item.key === value;
        const isDisabled = item.disabled;

        const segmentStyle: ViewStyle = {
          ...styles.segment,
          borderRadius: config.segmentRadius,
          ...(isActive ? {
            backgroundColor: semanticColor.backgroundStatus,
            ...shadow.level1,
          } : {}),
        };

        const textColor = isDisabled
          ? semanticColor.textTertiary
          : isActive
            ? semanticColor.textPrimary
            : semanticColor.textSecondary;

        const labelStyle: TextStyle = {
          fontSize: config.fontSize,
          lineHeight: config.lineHeight,
          letterSpacing: config.letterSpacing,
          fontWeight: fontWeight.medium,
          color: textColor,
          textAlign: 'center',
        };

        return (
          <Pressable
            key={item.key}
            onPress={() => !isDisabled && onChange?.(item.key)}
            disabled={isDisabled}
            accessibilityRole="radio"
            accessibilityState={{ checked: isActive, disabled: isDisabled }}
            style={segmentStyle}
          >
            <Text style={labelStyle} numberOfLines={1}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: semanticColor.backgroundTertiary,
  } as ViewStyle,
  segment: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%' as any,
  } as ViewStyle,
});
