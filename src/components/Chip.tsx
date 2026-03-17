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
import { renderIcon } from './utils';

export type ChipVariant = 'solid' | 'outlined';
export type ChipSize = 'xsmall' | 'small' | 'medium' | 'large';

/** Chip — 정보 분류·상태 표시용 태그 */
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
      alignSelf: 'flex-start',
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
      {renderIcon(leadingIcon, sizeToken.iconSize, iconColor)}
      <Text style={textStyle}>{label}</Text>
      {renderIcon(trailingIcon, sizeToken.iconSize, iconColor)}
    </Pressable>
  );
}
