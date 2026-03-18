import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  type ViewStyle,
  type TextStyle,
  type PressableStateCallbackType,
} from 'react-native';
import { buttonToken, fontWeight } from '../tokens/theme';

export type ButtonVariant = 'solid' | 'outlined';
export type ButtonColor = 'primary' | 'assistive';
export type ButtonSize = 'small' | 'medium' | 'large';

/** Button — 주요 액션을 유도하는 버튼 */
export interface ButtonProps {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
}

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
    let bg = colorToken.background;
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

  const textStyle: TextStyle = {
    fontSize: sizeToken.fontSize,
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
        <Text style={textStyle}>{label}</Text>
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
