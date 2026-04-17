import React from 'react';
import { Pressable, View, type ViewStyle } from 'react-native';
import { semanticColor, interaction, palette } from '../tokens/theme';

/** Switch — 켜짐/꺼짐 두 가지 상태를 전환하는 토글 */
export interface SwitchProps {
  /** 켜짐 상태 */
  active?: boolean;
  /** 토글 콜백 */
  onPress?: () => void;
  /** 비활성화 (회색 처리) */
  disabled?: boolean;
}

const TRACK_W = 52;
const TRACK_H = 32;
const THUMB_SIZE = 28;
const PAD = (TRACK_H - THUMB_SIZE) / 2;

export function Switch({
  active = false,
  onPress,
  disabled = false,
}: SwitchProps) {
  const trackColor = disabled
    ? semanticColor.backgroundDisabled
    : active
      ? semanticColor.backgroundBrand
      : semanticColor.backgroundOff;

  const thumbShadow: ViewStyle = disabled
    ? {}
    : {
        shadowColor: palette.black,
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
      <View
        style={{
          width: TRACK_W,
          height: TRACK_H,
          borderRadius: TRACK_H / 2,
          backgroundColor: trackColor,
          justifyContent: 'center',
          paddingHorizontal: PAD,
        }}
      >
        <View
          style={{
            width: THUMB_SIZE,
            height: THUMB_SIZE,
            borderRadius: THUMB_SIZE / 2,
            backgroundColor: semanticColor.textOnColor,
            alignSelf: active ? 'flex-end' : 'flex-start',
            ...thumbShadow,
          }}
        />
      </View>
    </Pressable>
  );
}
