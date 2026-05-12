import React from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type PressableStateCallbackType,
} from 'react-native';
import {
  textButtonToken,
  type TextButtonVariantV2,
  type TextButtonSizeV2,
} from '../tokens/theme';

export type TextButtonVariant = TextButtonVariantV2;  // 'default' | 'focused'
export type TextButtonSize = TextButtonSizeV2;        // 'large' | 'medium'

/**
 * TextButton — Figma "text button" 컴포넌트 1:1
 *
 * Figma component set "Btn-Text":
 *   - variant 'default'  ← (focused=no, enabled=yes)
 *   - variant 'focused'  ← (focused=yes, enabled=no)
 *   - size 'large'       ← (large=yes, medium=no)
 *   - size 'medium'      ← (large=no, medium=yes)
 *
 * @breaking-change v3.0
 *   - `colorScheme` prop 제거 → variant union으로 통합
 *   - `size` 키 변경: small → medium / medium → large
 *   - `loading` prop 제거 (Figma 미정의)
 *   - `underlined` prop 신규 (기본 true)
 */
export interface TextButtonProps {
  /** 버튼 텍스트 (Figma: label) */
  label: string;
  /** 클릭 콜백 */
  onPress?: () => void;
  /** Figma named variant — focused/enabled toggle */
  variant?: TextButtonVariant;
  /** 버튼 크기 — Figma: large / medium (현재 동일 토큰, 향후 확장 대비 prop 유지) */
  size?: TextButtonSize;
  /** 비활성화 상태 (Figma: disabled state) */
  disabled?: boolean;
  /** 밑줄 표시 (Figma 시각 default true) */
  underlined?: boolean;
  /** 좌측 아이콘 슬롯 — Figma icon size 16 자동 적용 */
  leadingIcon?: React.ReactNode;
  /** 우측 아이콘 슬롯 — Figma icon size 16 자동 적용 */
  trailingIcon?: React.ReactNode;
  /** 접근성 라벨 (미지정 시 label 사용) */
  accessibilityLabel?: string;
}

const MIN_TOUCH_TARGET = 44;

export function TextButton({
  label,
  onPress,
  variant = 'default',
  size = 'medium',
  disabled = false,
  underlined = true,
  leadingIcon,
  trailingIcon,
  accessibilityLabel,
}: TextButtonProps) {
  const sizeToken = textButtonToken.size[size];
  const variantToken = textButtonToken.color[variant];

  // Figma "Hover"는 RN에 없음 → Pressable의 pressed로 통합
  const resolveColors = (pressed: boolean) => {
    if (disabled) return variantToken.disabled;
    if (pressed) return variantToken.pressed;
    return variantToken.default;
  };

  // Figma 구조: 컨테이너는 VERTICAL auto-layout (itemSpacing 0)
  //   ├── Frame (HORIZONTAL — leadingIcon + label + trailingIcon, gap=sizeToken.gap)
  //   └── underline (alignSelf: stretch — Frame 전체 폭)
  const getContainerStyle = ({ pressed }: PressableStateCallbackType): ViewStyle => {
    const colors = resolveColors(pressed);
    return {
      ...styles.base,
      height: sizeToken.height,
      paddingHorizontal: sizeToken.paddingHorizontal,
      borderRadius: sizeToken.radius,
      // gap 0 — Figma 컨테이너 VERTICAL itemSpacing (label↔underline 사이 명시 0)
      backgroundColor: colors.container,
    };
  };

  const getLabelStyle = ({ pressed }: PressableStateCallbackType): TextStyle => {
    const colors = resolveColors(pressed);
    return {
      fontSize: sizeToken.textStyle.fontSize,
      lineHeight: sizeToken.textStyle.lineHeight,
      letterSpacing: sizeToken.textStyle.letterSpacing,
      fontWeight: sizeToken.textStyle.fontWeight,
      color: colors.label,
      // underline은 별도 View로 그려서 두께(line.regular=1)와 색을 정확히 제어
    };
  };

  // height 32px < 44 → hitSlop으로 터치 영역 보강 (iOS HIG / Android 권장)
  const hitSlopValue = Math.max(0, (MIN_TOUCH_TARGET - sizeToken.height) / 2);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={accessibilityLabel ?? label}
      hitSlop={{ top: hitSlopValue, bottom: hitSlopValue, left: hitSlopValue, right: hitSlopValue }}
      style={getContainerStyle}
    >
      {(state) => {
        const colors = resolveColors(state.pressed);
        return (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: sizeToken.gap,  // Figma 내부 HORIZONTAL Frame itemSpacing 4
              }}
            >
              {leadingIcon}
              <Text style={getLabelStyle(state)}>{label}</Text>
              {trailingIcon}
            </View>
            {underlined && (
              <View
                style={{
                  height: sizeToken.lineWidth,
                  backgroundColor: colors.underline,
                  alignSelf: 'stretch',  // Figma: underline.width = Frame.width
                }}
              />
            )}
          </>
        );
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',  // Figma 컨테이너 VERTICAL auto-layout (icon+label Frame ↑↓ underline)
  },
});
