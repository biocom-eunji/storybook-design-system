import React from 'react';
import { Pressable, View, type ViewStyle } from 'react-native';
import { coolNeutral, mint, interaction, palette } from '../tokens/theme';

export type SwitchPlatform = 'ios' | 'normal';
export type SwitchSize = 'small' | 'medium';

export interface SwitchProps {
  active?: boolean;
  onPress?: () => void;
  platform?: SwitchPlatform;
  size?: SwitchSize;
  disabled?: boolean;
}

const dimensions = {
  ios: {
    small:  { trackW: 44, trackH: 26, thumbSize: 22 },
    medium: { trackW: 52, trackH: 32, thumbSize: 28 },
  },
  normal: {
    small:  { trackW: 36, trackH: 20, thumbSize: 16 },
    medium: { trackW: 44, trackH: 24, thumbSize: 20 },
  },
};

export function Switch({
  active = false,
  onPress,
  platform = 'ios',
  size,
  disabled = false,
}: SwitchProps) {
  const resolvedSize = size ?? (platform === 'ios' ? 'medium' : 'small');
  const d = dimensions[platform][resolvedSize];
  const pad = (d.trackH - d.thumbSize) / 2;

  const trackColor = disabled
    ? (active ? mint[90] : coolNeutral[96])
    : (active ? mint[45] : coolNeutral[90]);

  const thumbColor = palette.white;
  const thumbShadow: ViewStyle = disabled ? {} : {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  };

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      accessibilityRole="switch"
      accessibilityState={{ checked: active }}
      style={({ pressed }) => ({
        opacity: pressed && !disabled ? interaction.pressOpacity : 1,
      })}
    >
      <View style={{
        width: d.trackW,
        height: d.trackH,
        borderRadius: d.trackH / 2,
        backgroundColor: trackColor,
        justifyContent: 'center',
        paddingHorizontal: pad,
      }}>
        <View style={{
          width: d.thumbSize,
          height: d.thumbSize,
          borderRadius: d.thumbSize / 2,
          backgroundColor: thumbColor,
          alignSelf: active ? 'flex-end' : 'flex-start',
          ...thumbShadow,
        }} />
      </View>
    </Pressable>
  );
}
