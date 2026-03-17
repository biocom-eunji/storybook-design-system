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

  const getContainerStyle = (state: PressableStateCallbackType): ViewStyle[] => {
    const base: ViewStyle = {
      height: sizeToken.height,
      paddingHorizontal: sizeToken.paddingHorizontal,
      borderRadius: sizeToken.radius,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: colorToken.background,
    };

    if ('border' in colorToken) {
      base.borderWidth = 1;
      base.borderColor = disabled && 'borderDisabled' in colorToken
        ? colorToken.borderDisabled
        : colorToken.border;
    }

    if (disabled) {
      base.backgroundColor = colorToken.backgroundDisabled;
    } else if (state.pressed) {
      base.backgroundColor = colorToken.backgroundPressed;
    }

    return [base];
  };

  const textStyle: TextStyle = {
    fontSize: sizeToken.fontSize,
    fontWeight: fontWeight.semibold,
    color: disabled ? colorToken.contentDisabled : colorToken.content,
  };

  const indicatorColor = disabled
    ? colorToken.contentDisabled
    : colorToken.content;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={getContainerStyle}
    >
      {loading ? (
        <ActivityIndicator size="small" color={indicatorColor} />
      ) : (
        <Text style={textStyle}>{label}</Text>
      )}
    </Pressable>
  );
}
