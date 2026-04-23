import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { Button, type ButtonProps } from './Button';
import { actionAreaToken, spacing, semanticColor } from '../tokens/theme';

export type ActionAreaVariant = 'strong' | 'neutral' | 'compact';

type ActionButtonProps = Omit<ButtonProps, 'variant' | 'color' | 'size'> & {
  label: string;
};

/** ActionArea — 화면 하단 액션 버튼 영역 */
export interface ActionAreaProps {
  /** 레이아웃 변형 */
  variant?: ActionAreaVariant;
  /** 메인(Primary) 버튼 props */
  primary: ActionButtonProps;
  /** 보조(Secondary) 버튼 props — neutral, compact에서 사용 */
  secondary?: ActionButtonProps;
  /** 상단 구분선 표시 여부 */
  divider?: boolean;
  /** 배경색 투명 여부 (기본: 흰색) */
  transparent?: boolean;
  /**
   * 하단 Safe Area 여백 (px)
   * react-native-safe-area-context의 useSafeAreaInsets().bottom 값을 전달하세요.
   * 기본값: 0
   */
  safeAreaBottom?: number;
}

// ─── Shared sub-layout ───────────────────────────────────

const ButtonRow = ({
  primary,
  secondary,
  size,
  primaryFlex = 1,
}: {
  primary: ActionButtonProps;
  secondary?: ActionButtonProps;
  size: 'medium' | 'large';
  primaryFlex?: number;
}) => (
  <View style={styles.row}>
    {secondary && (
      <View style={styles.flex1}>
        <Button {...secondary} variant="outlined" color="assistive" size={size} />
      </View>
    )}
    <View style={{ flex: primaryFlex }}>
      <Button {...primary} variant="solid" color="primary" size={size} />
    </View>
  </View>
);

// ─── Component ───────────────────────────────────────────

export function ActionArea({
  variant = 'strong',
  primary,
  secondary,
  divider = true,
  transparent = false,
  safeAreaBottom = 0,
}: ActionAreaProps) {
  const containerStyle: ViewStyle = {
    ...styles.container,
    paddingBottom: spacing.medium + safeAreaBottom,
    backgroundColor: transparent ? 'transparent' : semanticColor.backgroundPrimary,
    borderTopWidth: divider ? 1 : 0,
  };

  switch (variant) {
    case 'strong':
      return (
        <View style={containerStyle}>
          <Button {...primary} variant="solid" color="primary" size="large" />
        </View>
      );

    case 'neutral':
      return (
        <View style={containerStyle}>
          <ButtonRow
            primary={primary}
            secondary={secondary}
            size="large"
            primaryFlex={secondary ? 2 : 1}
          />
        </View>
      );

    case 'compact':
      return (
        <View style={containerStyle}>
          <ButtonRow primary={primary} secondary={secondary} size="medium" />
        </View>
      );

    default:
      return null;
  }
}

// ─── Styles ──────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: actionAreaToken.padding,
    paddingTop: spacing.medium,
    gap: actionAreaToken.gap,
    borderTopColor: semanticColor.borderDefault,
  },
  row: {
    flexDirection: 'row',
    gap: actionAreaToken.gap,
  },
  flex1: {
    flex: 1,
  },
});
