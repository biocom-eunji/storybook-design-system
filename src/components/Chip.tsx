import React from 'react';
import {
  Pressable,
  Text,
  View,
  Image,
  type ViewStyle,
  type TextStyle,
  type PressableStateCallbackType,
  type ImageSourcePropType,
} from 'react-native';
import { chipToken, fontWeight } from '../tokens/theme';

export type ChipVariant = 'solid' | 'outlined';
export type ChipSize = 'xsmall' | 'small' | 'medium' | 'large';

export interface ChipProps {
  label: string;
  onPress?: () => void;
  variant?: ChipVariant;
  size?: ChipSize;
  active?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  thumbnail?: ImageSourcePropType;
}

export function Chip({
  label,
  onPress,
  variant = 'solid',
  size = 'medium',
  active = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  thumbnail,
}: ChipProps) {
  const sizeToken = chipToken.size[size];
  const stateKey = disabled ? 'disabled' : active ? 'active' : 'inactive';
  const variantToken = chipToken.variant[variant][stateKey];

  const thumbnailSize = sizeToken.height - 8;

  const getContainerStyle = (state: PressableStateCallbackType): ViewStyle[] => {
    const base: ViewStyle = {
      height: sizeToken.height,
      paddingHorizontal: sizeToken.paddingHorizontal,
      borderRadius: sizeToken.radius,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 4,
      backgroundColor: variantToken.background,
    };

    if ('border' in variantToken) {
      base.borderWidth = 1;
      base.borderColor = variantToken.border;
    }

    if (!disabled && state.pressed) {
      base.opacity = 0.7;
    }

    if (thumbnail) {
      base.paddingLeft = 4;
    }

    return [base];
  };

  const textStyle: TextStyle = {
    fontSize: sizeToken.fontSize,
    fontWeight: fontWeight.medium,
    color: variantToken.content,
  };

  const iconColor = variantToken.content;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={getContainerStyle}
    >
      {thumbnail && (
        <Image
          source={thumbnail}
          style={{
            width: thumbnailSize,
            height: thumbnailSize,
            borderRadius: thumbnailSize / 2,
          }}
        />
      )}
      {leadingIcon && (
        <View style={{ width: sizeToken.iconSize, height: sizeToken.iconSize }}>
          {React.isValidElement(leadingIcon)
            ? React.cloneElement(leadingIcon as React.ReactElement<any>, {
                width: sizeToken.iconSize,
                height: sizeToken.iconSize,
                color: iconColor,
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
                color: iconColor,
              })
            : trailingIcon}
        </View>
      )}
    </Pressable>
  );
}
