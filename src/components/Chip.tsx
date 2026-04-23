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
import { chipToken, fontWeight, spacing, interaction } from '../tokens/theme';
import { Icon } from './Icon';

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
  /** 좌측 아이콘 이름 (iconRegistry 경유) */
  leadingIconName?: string;
  /** 우측 아이콘 이름 (iconRegistry 경유) */
  trailingIconName?: string;
  thumbnail?: ImageSourcePropType;
}

export function Chip({
  label,
  onPress,
  variant = 'solid',
  size = 'medium',
  active = false,
  disabled = false,
  leadingIconName,
  trailingIconName,
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
      gap: spacing.xsmall,
      backgroundColor: variantToken.background,
    };

    if ('border' in variantToken) {
      base.borderWidth = 1;
      base.borderColor = variantToken.border;
    }

    if (!disabled && state.pressed) {
      base.opacity = interaction.pressOpacity;
    }

    if (thumbnail) {
      base.paddingLeft = spacing.xsmall;
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
      accessibilityRole="button"
      accessibilityState={{ selected: active, disabled }}
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
      {leadingIconName && <Icon name={leadingIconName} size={sizeToken.iconSize} color={iconColor} />}
      <Text style={textStyle}>{label}</Text>
      {trailingIconName && <Icon name={trailingIconName} size={sizeToken.iconSize} color={iconColor} />}
    </Pressable>
  );
}
