import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { semanticColor, fontWeight, textStyle, spacing } from '../tokens/theme';

export type TabsSize = 'small' | 'medium' | 'large';
export type TabsResize = 'hug' | 'fill';

export interface TabsItem {
  key: string;
  label: string;
  disabled?: boolean;
}

/** Tab — 목적에 따라 구분된 콘텐츠를 볼 수 있도록 돕습니다. */
export interface TabsProps {
  items: TabsItem[];
  value: string;
  onChange?: (key: string) => void;
  size?: TabsSize;
  resize?: TabsResize;
}

const SIZE_MAP = {
  small: {
    height: 40,
    fontSize: textStyle.body2.fontSize,
    lineHeight: textStyle.body2.lineHeight,
    letterSpacing: textStyle.body2.letterSpacing,
    fontWeight: fontWeight.regular,
    activeFontWeight: fontWeight.semibold,
  },
  medium: {
    height: 48,
    fontSize: textStyle.headline.fontSize,
    lineHeight: textStyle.headline.lineHeight,
    letterSpacing: textStyle.headline.letterSpacing,
    fontWeight: fontWeight.regular,
    activeFontWeight: fontWeight.semibold,
  },
  large: {
    height: 56,
    fontSize: textStyle.heading.fontSize,
    lineHeight: textStyle.heading.lineHeight,
    letterSpacing: textStyle.heading.letterSpacing,
    fontWeight: fontWeight.regular,
    activeFontWeight: fontWeight.semibold,
  },
} as const;

const INDICATOR_HEIGHT = 2;
const TAB_GAP = 24;
const TAB_PY = spacing.medium;
const TAB_MIN_W = 32;

export function Tabs({
  items,
  value,
  onChange,
  size = 'medium',
  resize = 'hug',
}: TabsProps) {
  const sizeToken = SIZE_MAP[size];
  const isFill = resize === 'fill';

  return (
    <View
      style={styles.container}
      accessibilityRole="tablist"
    >
      <View style={[
        styles.content,
        { height: sizeToken.height },
        isFill ? styles.contentFill : { gap: TAB_GAP },
      ]}>
        {items.map((item) => {
          const isActive = item.key === value;
          const isDisabled = item.disabled;

          const textColor = isDisabled
            ? semanticColor.textTertiary
            : isActive
              ? semanticColor.textPrimary
              : semanticColor.textTertiary;

          const tabTextStyle: TextStyle = {
            fontSize: sizeToken.fontSize,
            lineHeight: sizeToken.lineHeight,
            letterSpacing: sizeToken.letterSpacing,
            fontWeight: isActive ? sizeToken.activeFontWeight : sizeToken.fontWeight,
            color: textColor,
            textAlign: 'center',
          };

          return (
            <Pressable
              key={item.key}
              onPress={() => !isDisabled && onChange?.(item.key)}
              disabled={isDisabled}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive, disabled: isDisabled }}
              style={[
                styles.tab,
                isFill && styles.tabFill,
                { paddingVertical: TAB_PY, minWidth: TAB_MIN_W },
              ]}
            >
              <Text style={tabTextStyle}>{item.label}</Text>
              {isActive && (
                <View style={[
                  styles.indicator,
                  { backgroundColor: semanticColor.textPrimary },
                ]} />
              )}
            </Pressable>
          );
        })}
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  } as ViewStyle,
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  contentFill: {
    justifyContent: 'space-evenly',
  } as ViewStyle,
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  } as ViewStyle,
  tabFill: {
    flex: 1,
  } as ViewStyle,
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: INDICATOR_HEIGHT,
  } as ViewStyle,
  divider: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: semanticColor.borderDefault,
  } as ViewStyle,
});
