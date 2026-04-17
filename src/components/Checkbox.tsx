import React from 'react';
import { Pressable, View, Text } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { fontWeight, interaction, spacing, radius, semanticColor } from '../tokens/theme';

export type CheckboxSize = 'small' | 'medium';
export type CheckboxState = 'unchecked' | 'checked' | 'indeterminate';

export interface CheckboxProps {
  state?: CheckboxState;
  onPress?: () => void;
  size?: CheckboxSize;
  label?: string;
  sublabel?: string;
  disabled?: boolean;
  bold?: boolean;
  tight?: boolean;
}

const sizeMap = {
  small: { box: 18, iconVB: 256, radius: 4, gap: 8, fontSize: 14, subFontSize: 13 },
  medium: { box: 22, iconVB: 256, radius: 5, gap: 10, fontSize: 15, subFontSize: 14 },
};

export function Checkbox({
  state = 'unchecked',
  onPress,
  size = 'medium',
  label,
  sublabel,
  disabled = false,
  bold = false,
  tight = false,
}: CheckboxProps) {
  const s = sizeMap[size];
  const isChecked = state === 'checked';
  const isIndeterminate = state === 'indeterminate';
  const isFilled = isChecked || isIndeterminate;

  const bgColor = disabled
    ? (isFilled ? semanticColor.backgroundBrandDisabled : 'transparent')
    : (isFilled ? semanticColor.backgroundBrand : 'transparent');
  const borderColor = disabled
    ? semanticColor.borderActive
    : (isFilled ? semanticColor.borderFocus : semanticColor.borderActive);
  const labelColor = disabled ? semanticColor.textTertiary : semanticColor.textPrimary;
  const subColor = disabled ? semanticColor.textTertiary : semanticColor.textSecondary;

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: isChecked || isIndeterminate }}
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
        width: s.box,
        height: s.box,
        borderRadius: s.radius,
        borderWidth: isFilled ? 0 : 1.5,
        borderColor,
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {isChecked && (
          <Svg width={s.box * 0.7} height={s.box * 0.7} viewBox="0 0 256 256" fill="none">
            <Path
              d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"
              fill={semanticColor.iconOnColor}
            />
          </Svg>
        )}
        {isIndeterminate && (
          <Svg width={s.box * 0.6} height={s.box * 0.6} viewBox="0 0 256 256" fill="none">
            <Rect x="40" y="112" width="176" height="32" rx="12" fill={semanticColor.iconOnColor} />
          </Svg>
        )}
      </View>
      {label && (
        <View style={{ flex: 1 }}>
          <Text style={{
            fontSize: s.fontSize,
            fontWeight: bold ? fontWeight.semibold : fontWeight.medium,
            color: labelColor,
          }}>
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
