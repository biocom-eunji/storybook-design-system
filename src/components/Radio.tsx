import React from 'react';
import { Pressable, View, Text, type ViewStyle, type TextStyle } from 'react-native';
import { fontWeight, interaction, spacing, radius, semanticColor, textStyle } from '../tokens/theme';

export type RadioSize = 'small' | 'medium';

export interface RadioProps {
  checked?: boolean;
  onPress?: () => void;
  size?: RadioSize;
  label?: string;
  sublabel?: string;
  disabled?: boolean;
  tight?: boolean;
}

const sizeMap = {
  small: { outer: 18, inner: 8, gap: spacing.small, fontSize: textStyle.label1.fontSize, subFontSize: textStyle.label2.fontSize },
  medium: { outer: 22, inner: 10, gap: spacing.medium, fontSize: textStyle.body2.fontSize, subFontSize: textStyle.label1.fontSize },
};

export function Radio({
  checked = false,
  onPress,
  size = 'medium',
  label,
  sublabel,
  disabled = false,
  tight = false,
}: RadioProps) {
  const s = sizeMap[size];
  const borderColor = disabled
    ? semanticColor.borderActive
    : checked
      ? semanticColor.borderFocus
      : semanticColor.borderActive;
  const fillColor = disabled
    ? semanticColor.iconDisabled
    : semanticColor.backgroundBrand;
  const labelColor = disabled ? semanticColor.textTertiary : semanticColor.textPrimary;
  const subColor = disabled ? semanticColor.textTertiary : semanticColor.textSecondary;

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked }}
      accessibilityLabel={label}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: label ? s.gap : 0,
        opacity: pressed && !disabled ? interaction.pressOpacity : 1,
        paddingVertical: tight ? spacing.small : spacing.medium,
        paddingHorizontal: tight ? spacing.medium : 0,
        backgroundColor: tight ? semanticColor.backgroundSecondary : 'transparent',
        borderRadius: tight ? radius.medium : 0,
      })}
    >
      <View style={{
        width: s.outer,
        height: s.outer,
        borderRadius: s.outer / 2,
        borderWidth: checked ? 0 : 1,
        borderColor,
        backgroundColor: checked ? fillColor : 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {checked && (
          <View style={{
            width: s.inner,
            height: s.inner,
            borderRadius: s.inner / 2,
            backgroundColor: semanticColor.iconOnColor,
          }} />
        )}
      </View>
      {label && (
        <View>
          <Text style={{ fontSize: s.fontSize, fontWeight: fontWeight.medium, color: labelColor }}>
            {label}
          </Text>
          {sublabel && (
            <Text style={{ fontSize: s.subFontSize, fontWeight: fontWeight.regular, color: subColor }}>
              {sublabel}
            </Text>
          )}
        </View>
      )}
    </Pressable>
  );
}
