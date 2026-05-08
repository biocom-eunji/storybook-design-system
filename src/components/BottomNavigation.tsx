import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { fontSize, fontWeight, spacing, radius, semanticColor, interaction } from '../tokens/theme';
import { Icon } from './Icon';

export interface TabItem {
  key: string;
  label: string;
  icon?: string;
}

/** BottomNavigation — 하단 탭 내비게이션 */
export interface BottomNavigationProps {
  items: TabItem[];
  value: string;
  onChange?: (key: string) => void;
}

/** 바이오컴 기본 탭 구성 (Bottom Navigation.png 기반) */
export const BIOCOM_TABS: TabItem[] = [
  { key: 'contents', label: '콘텐츠', icon: 'stack' },
  { key: 'goal', label: '목표', icon: 'streak' },
  { key: 'main', label: '메인', icon: 'house' },
  { key: 'ai', label: 'AI', icon: 'heart' },
  { key: 'shop', label: '쇼핑', icon: 'shopping-cart-simple' },
];

export function BottomNavigation({
  items,
  value,
  onChange,
}: BottomNavigationProps) {
  return (
    <View style={[styles.container, styles.default]}>
      {items.map((tab) => {
        const isActive = tab.key === value;
        const iconColor = isActive ? semanticColor.iconBrand : semanticColor.iconDisabled;
        const textColor = isActive ? semanticColor.textBrand : semanticColor.textSecondary;

        return (
          <Pressable
            key={tab.key}
            style={({ pressed }) => [styles.tab, pressed && styles.tabPressed]}
            onPress={() => onChange?.(tab.key)}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={tab.label}
          >
            {tab.icon ? (
              <Icon name={tab.icon} size={24} color={iconColor} />
            ) : (
              <View
                style={[
                  styles.iconPlaceholder,
                  { backgroundColor: isActive ? semanticColor.iconBrand : semanticColor.iconInactive },
                ]}
              />
            )}
            <Text
              style={[
                styles.label,
                {
                  color: textColor,
                  fontWeight: isActive ? fontWeight.semibold : fontWeight.medium,
                },
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  } as ViewStyle,
  default: {
    height: 60,
    backgroundColor: semanticColor.backgroundPrimary,
    borderTopWidth: 1,
    borderTopColor: semanticColor.borderDefault,
    paddingBottom: spacing.xsmall,
  } as ViewStyle,
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xsmall,
    paddingTop: spacing.small,
  } as ViewStyle,
  tabPressed: {
    opacity: interaction.pressOpacity,
  } as ViewStyle,
  iconPlaceholder: {
    width: 24,
    height: 24,
    borderRadius: radius.medium,
  } as ViewStyle,
  label: {
    fontSize: fontSize.xsmall,
  } as TextStyle,
});
