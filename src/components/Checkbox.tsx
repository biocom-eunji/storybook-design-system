import React from 'react';
import { Pressable, View, Text } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { coolNeutral, mint, fontWeight, interaction, spacing, radius } from '../tokens/theme';

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
    ? (isFilled ? mint[90] : 'transparent')
    : (isFilled ? mint[45] : 'transparent');
  const borderColor = disabled
    ? coolNeutral[90]
    : (isFilled ? mint[45] : coolNeutral[90]);
  const labelColor = disabled ? coolNeutral[80] : coolNeutral[17];
  const subColor = disabled ? coolNeutral[80] : coolNeutral[50];

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
        backgroundColor: tight ? coolNeutral[99] : 'transparent',
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
              fill="#FFFFFF"
            />
          </Svg>
        )}
        {isIndeterminate && (
          <Svg width={s.box * 0.6} height={s.box * 0.6} viewBox="0 0 256 256" fill="none">
            <Rect x="40" y="112" width="176" height="32" rx="12" fill="#FFFFFF" />
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
