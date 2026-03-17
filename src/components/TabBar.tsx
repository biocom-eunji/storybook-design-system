import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { coolNeutral, mint, fontSize, fontWeight } from '../tokens/theme';
import { Icon } from './Icon';

export interface TabItem {
  key: string;
  label: string;
  icon?: string;
}

export interface TabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onTabPress?: (key: string) => void;
  variant?: 'default' | 'floating';
}

export function TabBar({
  tabs,
  activeTab,
  onTabPress,
  variant = 'default',
}: TabBarProps) {
  const isFloating = variant === 'floating';

  return (
    <View style={[styles.container, isFloating ? styles.floating : styles.default]}>
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;
        const color = isActive ? mint[45] : coolNeutral[60];

        return (
          <Pressable
            key={tab.key}
            style={styles.tab}
            onPress={() => onTabPress?.(tab.key)}
          >
            {tab.icon ? (
              <Icon name={tab.icon} size={24} color={color} />
            ) : (
              <View
                style={[
                  styles.iconPlaceholder,
                  { backgroundColor: isActive ? mint[45] : coolNeutral[90] },
                ]}
              />
            )}
            <Text
              style={[
                styles.label,
                { color, fontWeight: isActive ? fontWeight.semibold : fontWeight.medium },
              ]}
            >
              {tab.label}
            </Text>
            {isActive && <View style={styles.activeDot} />}
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
    height: 56,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: coolNeutral[96],
  } as ViewStyle,
  floating: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    marginHorizontal: 16,
    marginBottom: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  } as ViewStyle,
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  } as ViewStyle,
  iconPlaceholder: {
    width: 24,
    height: 24,
    borderRadius: 12,
  } as ViewStyle,
  label: {
    fontSize: fontSize.xs,
    color: coolNeutral[60],
  } as TextStyle,
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: mint[45],
  } as ViewStyle,
});
