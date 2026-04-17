import React from 'react';
import {
  Pressable,
  Text,
  ActivityIndicator,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type PressableStateCallbackType,
} from 'react-native';
import { buttonToken, fontWeight, textStyle } from '../tokens/theme';

export type ButtonVariant = 'solid' | 'outlined';
export type ButtonColor = 'primary' | 'assistive';
export type ButtonSize = 'small' | 'medium' | 'large';

/** Button — 사용자가 원하는 동작을 수행할 수 있도록 돕는 버튼 */
export interface ButtonProps {
  /** 버튼 텍스트 */
  label: string;
  /** 클릭 콜백 */
  onPress?: () => void;
  /** 버튼 스타일 변형 */
  variant?: ButtonVariant;
  /** 버튼 컬러 */
  color?: ButtonColor;
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 로딩 상태 */
  loading?: boolean;
}

const TEXT_STYLE_MAP: Record<ButtonSize, TextStyle> = {
  small:  { fontSize: textStyle.label2.fontSize,  lineHeight: textStyle.label2.lineHeight,  letterSpacing: textStyle.label2.letterSpacing },
  medium: { fontSize: textStyle.body2.fontSize,   lineHeight: textStyle.body2.lineHeight,   letterSpacing: textStyle.body2.letterSpacing },
  large:  { fontSize: textStyle.headline.fontSize, lineHeight: textStyle.headline.lineHeight, letterSpacing: textStyle.headline.letterSpacing },
};

export function Button({
  label,
  onPress,
  variant = 'solid',
  color = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
}: ButtonProps) {
  const sizeToken = buttonToken.size[size];
  const colorToken = buttonToken.color[color][variant];

  const contentColor = disabled ? colorToken.contentDisabled : colorToken.content;

  const getContainerStyle = ({ pressed }: PressableStateCallbackType): ViewStyle => {
    let bg: string = colorToken.background;
    if (disabled) bg = colorToken.backgroundDisabled;
    else if (pressed) bg = colorToken.backgroundPressed;

    const style: ViewStyle = {
      ...styles.base,
      height: sizeToken.height,
      paddingHorizontal: sizeToken.paddingHorizontal,
      borderRadius: sizeToken.radius,
      backgroundColor: bg,
    };

    if ('border' in colorToken) {
      style.borderWidth = 1;
      style.borderColor = disabled && 'borderDisabled' in colorToken
        ? colorToken.borderDisabled
        : colorToken.border;
    }

    return style;
  };

  const labelStyle: TextStyle = {
    ...TEXT_STYLE_MAP[size],
    fontWeight: fontWeight.semibold,
    color: contentColor,
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading }}
      style={getContainerStyle}
    >
      {loading ? (
        <ActivityIndicator size="small" color={contentColor} />
      ) : (
        <Text style={labelStyle}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
