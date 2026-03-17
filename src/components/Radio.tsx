import React from 'react';
import { Pressable, View, Text, type ViewStyle, type TextStyle } from 'react-native';
import { coolNeutral, mint, fontWeight, interaction } from '../tokens/theme';

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
  small: { outer: 18, inner: 8, gap: 8, fontSize: 14, subFontSize: 13 },
  medium: { outer: 22, inner: 10, gap: 10, fontSize: 15, subFontSize: 14 },
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
    ? coolNeutral[90]
    : checked
      ? mint[45]
      : coolNeutral[90];
  const fillColor = disabled
    ? coolNeutral[80]
    : mint[45];
  const labelColor = disabled ? coolNeutral[80] : coolNeutral[17];
  const subColor = disabled ? coolNeutral[80] : coolNeutral[50];

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
        paddingVertical: tight ? 8 : 12,
        paddingHorizontal: tight ? 12 : 0,
        backgroundColor: tight ? coolNeutral[99] : 'transparent',
        borderRadius: tight ? 12 : 0,
      })}
    >
      <View style={{
        width: s.outer,
        height: s.outer,
        borderRadius: s.outer / 2,
        borderWidth: checked ? 0 : 1.5,
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
            backgroundColor: '#FFFFFF',
          }} />
        )}
      </View>
      {label && (
        <View>
          <Text style={{ fontSize: s.fontSize, fontWeight: fontWeight.medium, color: labelColor }}>
            {label}
          </Text>
          {sublabel && (
            <Text style={{ fontSize: s.subFontSize, fontWeight: fontWeight.regular, color: subColor, marginTop: 2 }}>
              {sublabel}
            </Text>
          )}
        </View>
      )}
    </Pressable>
  );
}
