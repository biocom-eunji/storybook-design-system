import React from 'react';
import {
  Pressable,
  Text,
  View,
  ActivityIndicator,
  type ViewStyle,
  type TextStyle,
  type PressableStateCallbackType,
} from 'react-native';
import { textButtonToken, fontWeight } from '../tokens/theme';

export type TextButtonColor = 'primary' | 'assistive';
export type TextButtonSize = 'small' | 'medium';

export interface TextButtonProps {
  label: string;
  onPress?: () => void;
  color?: TextButtonColor;
  size?: TextButtonSize;
  disabled?: boolean;
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function TextButton({
  label,
  onPress,
  color = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
}: TextButtonProps) {
  const sizeToken = textButtonToken.size[size];
  const colorToken = textButtonToken.color[color];

  const getContentColor = (state: PressableStateCallbackType): string => {
    if (disabled) return colorToken.contentDisabled;
    if (state.pressed) return colorToken.contentPressed;
    return colorToken.content;
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={(state) => [
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
        } satisfies ViewStyle,
      ]}
    >
      {(state) => {
        const contentColor = getContentColor(state);

        const textStyle: TextStyle = {
          fontSize: sizeToken.fontSize,
          fontWeight: fontWeight.medium,
          color: contentColor,
        };

        if (loading) {
          return <ActivityIndicator size="small" color={contentColor} />;
        }

        return (
          <>
            {leadingIcon && (
              <View style={{ width: sizeToken.iconSize, height: sizeToken.iconSize }}>
                {React.isValidElement(leadingIcon)
                  ? React.cloneElement(leadingIcon as React.ReactElement<any>, {
                      width: sizeToken.iconSize,
                      height: sizeToken.iconSize,
                      color: contentColor,
                    })
                  : leadingIcon}
              </View>
            )}
            <Text style={textStyle}>{label}</Text>
            {trailingIcon && (
              <View style={{ width: sizeToken.iconSize, height: sizeToken.iconSize }}>
                {React.isValidElement(trailingIcon)
                  ? React.cloneElement(trailingIcon as React.ReactElement<any>, {
                      width: sizeToken.iconSize,
                      height: sizeToken.iconSize,
                      color: contentColor,
                    })
                  : trailingIcon}
              </View>
            )}
          </>
        );
      }}
    </Pressable>
  );
}
