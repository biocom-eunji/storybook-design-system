import React from 'react';
import { Pressable, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { coolNeutral, mint, fontWeight } from '../tokens/theme';

export type CheckMarkSize = 'small' | 'medium';

export interface CheckMarkProps {
  checked?: boolean;
  onPress?: () => void;
  size?: CheckMarkSize;
  label?: string;
  sublabel?: string;
  disabled?: boolean;
  tight?: boolean;
}

const sizeMap = {
  small: { icon: 18, gap: 8, fontSize: 14, subFontSize: 13 },
  medium: { icon: 22, gap: 10, fontSize: 15, subFontSize: 14 },
};

export function CheckMark({
  checked = false,
  onPress,
  size = 'medium',
  label,
  sublabel,
  disabled = false,
  tight = false,
}: CheckMarkProps) {
  const s = sizeMap[size];
  const color = disabled
    ? coolNeutral[80]
    : checked
      ? mint[45]
      : coolNeutral[90];
  const labelColor = disabled ? coolNeutral[80] : coolNeutral[17];
  const subColor = disabled ? coolNeutral[80] : coolNeutral[50];

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: label ? s.gap : 0,
        opacity: pressed && !disabled ? 0.7 : 1,
        paddingVertical: tight ? 8 : 12,
        paddingHorizontal: tight ? 12 : 0,
        backgroundColor: tight ? coolNeutral[99] : 'transparent',
        borderRadius: tight ? 12 : 0,
      })}
    >
      <Svg width={s.icon} height={s.icon} viewBox="0 0 256 256" fill="none">
        <Path
          d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"
          fill={color}
        />
      </Svg>
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
