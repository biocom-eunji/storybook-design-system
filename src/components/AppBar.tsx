import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { Icon } from './Icon';
import { semanticColor, fontWeight, textStyle, spacing, interaction } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────

export type AppBarVariant = 'default' | 'transparent';
export type AppBarTitleAlign = 'left' | 'center';

export interface AppBarProps {
  /** 화면 제목 */
  title?: string;
  /** 타이틀 정렬 */
  titleAlign?: AppBarTitleAlign;
  /** 좌측 슬롯 (보통 BackButton / CloseButton) */
  leading?: React.ReactNode;
  /** 우측 슬롯 (최대 3개) */
  trailing?: React.ReactNode | React.ReactNode[];
  /** 하단 구분선 표시 여부 */
  showDivider?: boolean;
  /** 배경 변형 */
  variant?: AppBarVariant;
}

// ─── Constants ──────────────────────────────────────────────

const BAR_HEIGHT = 56;
const SIDE_PADDING = spacing.xsmall; // 4px
const ICON_BUTTON_SIZE = 44;
const MAX_TRAILING = 3;

// ─── Sub Components ─────────────────────────────────────────

function BackButton({ onPress, label = '뒤로 가기' }: { onPress?: () => void; label?: string }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.iconButton, pressed && styles.iconButtonPressed]}
    >
      <Icon name="caret-left" size={24} color={semanticColor.iconPrimary} />
    </Pressable>
  );
}

function CloseButton({ onPress, label = '닫기' }: { onPress?: () => void; label?: string }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.iconButton, pressed && styles.iconButtonPressed]}
    >
      <Icon name="x-circle" size={24} color={semanticColor.iconPrimary} />
    </Pressable>
  );
}

function IconAction({ name, onPress, label }: { name: string; onPress?: () => void; label: string }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.iconButton, pressed && styles.iconButtonPressed]}
    >
      <Icon name={name} size={24} color={semanticColor.iconPrimary} />
    </Pressable>
  );
}

// ─── Main Component ─────────────────────────────────────────

export function AppBar({
  title,
  titleAlign = 'left',
  leading,
  trailing,
  showDivider = true,
  variant = 'default',
}: AppBarProps) {
  const trailingItems = React.useMemo(() => {
    if (!trailing) return [];
    const items = Array.isArray(trailing) ? trailing : [trailing];
    if (items.length > MAX_TRAILING) {
      if (__DEV__) {
        console.warn(`AppBar: trailing은 최대 ${MAX_TRAILING}개입니다.`);
      }
      return items.slice(0, MAX_TRAILING);
    }
    return items;
  }, [trailing]);

  const isCenter = titleAlign === 'center';
  const hasLeading = !!leading;
  const trailingCount = trailingItems.length;

  return (
    <View
      style={[styles.container, { backgroundColor: semanticColor.backgroundPrimary }]}
      accessibilityRole="header"
    >
      {isCenter ? (
        // ── 중앙 정렬 레이아웃 ──
        // 3열: [leading 고정폭] [타이틀 flex] [trailing 고정폭]
        // 양쪽을 동일 폭으로 맞춰 타이틀이 정확한 중앙에 오도록 함
        <View style={styles.row}>
          {/* 좌측: leading + spacer로 trailing과 동일 폭 확보 */}
          <View style={[styles.sideSlot, { minWidth: Math.max(hasLeading ? ICON_BUTTON_SIZE : 0, trailingCount * ICON_BUTTON_SIZE) + SIDE_PADDING }]}>
            {leading}
          </View>

          {/* 중앙: 타이틀 */}
          <View style={styles.centerTitle}>
            <Text style={[styles.titleText, { textAlign: 'center' }]} numberOfLines={1} accessibilityRole="header">
              {title}
            </Text>
          </View>

          {/* 우측: trailing */}
          <View style={[styles.sideSlot, styles.sideSlotEnd, { minWidth: Math.max(hasLeading ? ICON_BUTTON_SIZE : 0, trailingCount * ICON_BUTTON_SIZE) + SIDE_PADDING }]}>
            {trailingItems.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </View>
        </View>
      ) : (
        // ── 좌측 정렬 레이아웃 ──
        // [leading] [타이틀 flex] [trailing]
        <View style={styles.row}>
          {hasLeading && (
            <View style={[styles.sideSlot, { paddingLeft: SIDE_PADDING }]}>
              {leading}
            </View>
          )}

          <View style={[styles.leftTitle, !hasLeading && { paddingLeft: spacing.large }]}>
            <Text style={[styles.titleText, { textAlign: 'left' }]} numberOfLines={1} accessibilityRole="header">
              {title}
            </Text>
          </View>

          {trailingCount > 0 && (
            <View style={[styles.sideSlot, styles.sideSlotEnd, { paddingRight: SIDE_PADDING }]}>
              {trailingItems.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </View>
          )}
        </View>
      )}

      {showDivider && <View style={styles.divider} />}
    </View>
  );
}

AppBar.BackButton = BackButton;
AppBar.CloseButton = CloseButton;
AppBar.IconAction = IconAction;

// ─── Styles ─────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    width: '100%' as any,
    height: BAR_HEIGHT,
    position: 'relative',
  } as ViewStyle,
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  sideSlot: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
  } as ViewStyle,
  sideSlotEnd: {
    justifyContent: 'flex-end',
  } as ViewStyle,
  centerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xsmall,
  } as ViewStyle,
  leftTitle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.small,
  } as ViewStyle,
  titleText: {
    fontSize: textStyle.headline.fontSize,
    lineHeight: textStyle.headline.lineHeight,
    fontWeight: fontWeight.semibold,
    color: semanticColor.textPrimary,
  } as TextStyle,
  iconButton: {
    width: ICON_BUTTON_SIZE,
    height: ICON_BUTTON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  iconButtonPressed: {
    opacity: interaction.pressOpacity,
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
