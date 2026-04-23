import React from 'react';
import { Pressable, View, type ViewStyle } from 'react-native';
import { semanticColor, interaction, shadow } from '../tokens/theme';

/** Switch — 켜짐/꺼짐 두 가지 상태를 전환하는 토글 */
export interface SwitchProps {
  /** 켜짐 상태 */
  checked?: boolean;
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
  checked = false,
  onPress,
  disabled = false,
}: SwitchProps) {
  const trackColor = disabled
    ? semanticColor.backgroundDisabled
    : checked
      ? semanticColor.backgroundBrand
      : semanticColor.backgroundOff;

  const thumbShadow: ViewStyle = disabled
    ? {}
    : shadow.level1;

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      accessibilityRole="switch"
      accessibilityState={{ checked }}
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
            backgroundColor: semanticColor.backgroundPrimary,
            alignSelf: checked ? 'flex-end' : 'flex-start',
            ...thumbShadow,
          }}
        />
      </View>
    </Pressable>
  );
}
