import React from 'react';
import {
  Pressable,
  Text,
  ActivityIndicator,
  type ViewStyle,
  type TextStyle,
  type PressableStateCallbackType,
} from 'react-native';
import { textButtonToken, fontWeight, spacing } from '../tokens/theme';

export type TextButtonColorScheme = 'primary' | 'assistive';
export type TextButtonSize = 'small' | 'medium';

export interface TextButtonProps {
  label: string;
  onPress?: () => void;
  colorScheme?: TextButtonColorScheme;
  size?: TextButtonSize;
  disabled?: boolean;
  loading?: boolean;
}

export function TextButton({
  label,
  onPress,
  colorScheme = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
}: TextButtonProps) {
  const sizeToken = textButtonToken.size[size];
  const colorToken = textButtonToken.color[colorScheme];

  const getContentColor = (state: PressableStateCallbackType): string => {
    if (disabled) return colorToken.contentDisabled;
    if (state.pressed) return colorToken.contentPressed;
    return colorToken.content;
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading }}
      style={(state) => [
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: spacing.xsmall,
        } satisfies ViewStyle,
      ]}
    >
      {(state) => {
        const contentColor = getContentColor(state);

        const textStyle: TextStyle = {
          fontSize: sizeToken.fontSize,
          lineHeight: sizeToken.lineHeight,
          letterSpacing: sizeToken.letterSpacing,
          fontWeight: fontWeight.medium,
          color: contentColor,
          textDecorationLine: 'underline',
        };

        if (loading) {
          return <ActivityIndicator size="small" color={contentColor} />;
        }

        return <Text style={textStyle}>{label}</Text>;
      }}
    </Pressable>
  );
}
