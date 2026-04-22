import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { Icon } from './Icon';
import { Button } from './Button';
import { semanticColor, fontWeight, textStyle, spacing } from '../tokens/theme';

/** EmptyState — 데이터 없을 때 표시하는 안내 화면 */
export interface EmptyStateProps {
  /** 아이콘 이름 (Icon 컴포넌트 name) */
  icon?: string;
  /** 커스텀 아이콘 (ReactNode, icon prop 대신 사용) */
  illustration?: React.ReactNode;
  /** 제목 */
  title: string;
  /** 설명 */
  description?: string;
  /** CTA 버튼 라벨 */
  actionLabel?: string;
  /** CTA 클릭 */
  onAction?: () => void;
}

export function EmptyState({
  icon,
  illustration,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <View style={styles.container} accessibilityRole="none">
      {illustration || (icon && (
        <View style={styles.iconWrap}>
          <Icon name={icon} size={48} color={semanticColor.iconDisabled} />
        </View>
      ))}
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
      {actionLabel && onAction && (
        <View style={styles.actionWrap}>
          <Button label={actionLabel} variant="solid" color="primary" size="medium" onPress={onAction} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['4xlarge'],
    paddingHorizontal: spacing['2xlarge'],
    gap: spacing.small,
  } as ViewStyle,
  iconWrap: {
    marginBottom: spacing.medium,
  } as ViewStyle,
  title: {
    fontSize: textStyle.headline.fontSize,
    lineHeight: textStyle.headline.lineHeight,
    fontWeight: fontWeight.semibold,
    color: semanticColor.textPrimary,
    textAlign: 'center',
  } as TextStyle,
  description: {
    fontSize: textStyle.body2.fontSize,
    lineHeight: textStyle.body2.lineHeight,
    fontWeight: fontWeight.regular,
    color: semanticColor.textSecondary,
    textAlign: 'center',
  } as TextStyle,
  actionWrap: {
    marginTop: spacing.xlarge,
  } as ViewStyle,
});
