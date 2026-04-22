import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { Icon } from './Icon';
import { semanticColor, fontWeight, textStyle, spacing, interaction } from '../tokens/theme';

// ─── List Container ─────────────────────────────────────────

export interface ListProps {
  children: React.ReactNode;
  /** 아이템 사이 구분선 */
  divider?: boolean;
  /** 구분선 시작 위치 */
  inset?: 'none' | 'leading';
}

function ListRoot({ children, divider = true, inset = 'none' }: ListProps) {
  const items = React.Children.toArray(children);

  return (
    <View accessibilityRole="list">
      {items.map((child, i) => (
        <React.Fragment key={i}>
          {child}
          {divider && i < items.length - 1 && (
            <View style={[styles.divider, inset === 'leading' && styles.dividerInset]} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
}

// ─── List.Item ──────────────────────────────────────────────

export interface ListItemProps {
  /** 메인 텍스트 */
  title: string;
  /** 보조 텍스트 */
  description?: string;
  /** 좌측 슬롯 */
  leading?: React.ReactNode;
  /** 우측 슬롯 */
  trailing?: React.ReactNode;
  /** 전체 row 클릭 */
  onPress?: () => void;
  /** 비활성화 */
  disabled?: boolean;
  /** 선택 상태 */
  selected?: boolean;
}

function ListItem({
  title,
  description,
  leading,
  trailing,
  onPress,
  disabled = false,
  selected = false,
}: ListItemProps) {
  const isClickable = !!onPress && !disabled;
  const minHeight = description ? 64 : 48;

  const content = (
    <View style={[
      styles.itemRow,
      { minHeight },
      selected && styles.itemSelected,
    ]}>
      {leading && <View style={styles.leadingSlot}>{leading}</View>}
      <View style={styles.textSlot}>
        <Text
          style={[styles.titleText, disabled && styles.disabledText]}
          numberOfLines={1}
        >
          {title}
        </Text>
        {description && (
          <Text
            style={[styles.descText, disabled && styles.disabledText]}
            numberOfLines={2}
          >
            {description}
          </Text>
        )}
      </View>
      {trailing && (
        <View style={styles.trailingSlot} onStartShouldSetResponder={() => true}>
          {trailing}
        </View>
      )}
    </View>
  );

  if (isClickable) {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        accessibilityRole="button"
        style={({ pressed }) => [pressed && styles.itemPressed]}
      >
        {content}
      </Pressable>
    );
  }

  return <View accessibilityRole="none">{content}</View>;
}

// ─── List.ExpandableItem ────────────────────────────────────

export interface ExpandableItemProps {
  /** 헤더 텍스트 */
  title: string;
  /** 헤더 보조 텍스트 */
  description?: string;
  /** 좌측 슬롯 */
  leading?: React.ReactNode;
  /** 비제어 초기 상태 */
  defaultExpanded?: boolean;
  /** 제어 모드 */
  expanded?: boolean;
  /** 제어 모드 콜백 */
  onExpandedChange?: (value: boolean) => void;
  /** 펼쳐지는 콘텐츠 */
  children: React.ReactNode;
}

function ExpandableItem({
  title,
  description,
  leading,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onExpandedChange,
  children,
}: ExpandableItemProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  const toggle = () => {
    if (isControlled) {
      onExpandedChange?.(!controlledExpanded);
    } else {
      setInternalExpanded(prev => !prev);
    }
  };

  const minHeight = description ? 64 : 48;

  return (
    <View>
      <Pressable
        onPress={toggle}
        accessibilityRole="button"
        accessibilityState={{ expanded: isExpanded }}
        style={({ pressed }) => [pressed && styles.itemPressed]}
      >
        <View style={[styles.itemRow, { minHeight }]}>
          {leading && <View style={styles.leadingSlot}>{leading}</View>}
          <View style={styles.textSlot}>
            <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
            {description && (
              <Text style={styles.descText} numberOfLines={2}>{description}</Text>
            )}
          </View>
          <View style={[
            styles.expandIcon,
            isExpanded && styles.expandIconRotated,
          ]}>
            <Icon name="caret-down" size={20} color={semanticColor.iconSecondary} />
          </View>
        </View>
      </Pressable>

      {isExpanded && (
        <View style={styles.expandedContent}>
          {children}
        </View>
      )}
    </View>
  );
}

// ─── Compound Export ────────────────────────────────────────

export const List = Object.assign(ListRoot, {
  Item: ListItem,
  ExpandableItem: ExpandableItem,
});

// ─── Styles ─────────────────────────────────────────────────

const LEADING_WIDTH = 40; // 24 icon + 16 gap

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.medium,
  } as ViewStyle,
  itemPressed: {
    backgroundColor: semanticColor.backgroundSecondary,
  } as ViewStyle,
  itemSelected: {
    backgroundColor: semanticColor.backgroundSecondary,
  } as ViewStyle,
  leadingSlot: {
    marginRight: spacing.large,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  textSlot: {
    flex: 1,
    justifyContent: 'center',
    gap: 2,
  } as ViewStyle,
  titleText: {
    fontSize: textStyle.body1.fontSize,
    lineHeight: textStyle.body1.lineHeight,
    fontWeight: fontWeight.regular,
    color: semanticColor.textPrimary,
  } as TextStyle,
  descText: {
    fontSize: textStyle.label1.fontSize,
    lineHeight: textStyle.label1.lineHeight,
    fontWeight: fontWeight.regular,
    color: semanticColor.textSecondary,
  } as TextStyle,
  disabledText: {
    color: semanticColor.textTertiary,
  } as TextStyle,
  trailingSlot: {
    marginLeft: spacing.large,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  divider: {
    height: 1,
    backgroundColor: semanticColor.borderDefault,
  } as ViewStyle,
  dividerInset: {
    marginLeft: spacing.large + LEADING_WIDTH,
  } as ViewStyle,
  expandIcon: {
    marginLeft: spacing.small,
    transition: 'transform 0.2s ease' as any,
  } as ViewStyle,
  expandIconRotated: {
    transform: [{ rotate: '180deg' }],
  } as ViewStyle,
  expandedContent: {
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
    paddingBottom: spacing.medium,
  } as ViewStyle,
});
