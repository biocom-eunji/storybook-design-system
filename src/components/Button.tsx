import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type PressableStateCallbackType,
} from 'react-native';
import {
  buttonToken,
  type ButtonVariantV2,
  type ButtonSizeV2,
} from '../tokens/theme';

export type ButtonVariant = ButtonVariantV2;  // 'primary' | 'sub' | 'outlined' | 'outlined-focused'
export type ButtonSize = ButtonSizeV2;        // 'small' | 'medium' | 'large'

/**
 * Button — Figma "Button" 컴포넌트 1:1
 *
 * Figma component sets:
 *   - Btn (primary∈{yes,no}, sub∈{yes,no})
 *   - Btn-outlined (focused∈{yes,no}, sub∈{yes,no})
 *
 * 4개 named variant를 단일 `variant` prop으로 표현:
 *   primary           ← Btn(primary=yes, sub=no)
 *   sub               ← Btn(primary=no, sub=yes)
 *   outlined-focused  ← Btn-outlined(focused=yes, sub=no)
 *   outlined          ← Btn-outlined(focused=no, sub=yes)
 *
 * @breaking-change v3.0
 *   - `colorScheme` prop 제거 → variant union으로 통합
 *   - `loading` prop 제거 → Figma 미정의
 */
export interface ButtonProps {
  /** 버튼 텍스트 (Figma: label) */
  label: string;
  /** 클릭 콜백 */
  onPress?: () => void;
  /** 버튼 스타일 변형 — Figma named variant (primary / sub / outlined / outlined-focused) */
  variant?: ButtonVariant;
  /** 버튼 크기 — Figma SPEC (small / medium / large) */
  size?: ButtonSize;
  /** 비활성화 상태 (Figma: disabled) */
  disabled?: boolean;
  /** 좌측 아이콘 (Figma BOOLEAN property: `left icon#175:5`) */
  leftIcon?: React.ReactNode;
  /** 우측 아이콘 (Figma BOOLEAN property: `right icon#175:8`) */
  rightIcon?: React.ReactNode;
}

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const sizeToken = buttonToken.size[size];
  const variantToken = buttonToken.color[variant];

  // Figma "Hover"는 RN에 없음 → Pressable의 pressed로 통합 (RN 변환 규칙 §상태 매핑)
  const resolveColors = (pressed: boolean) => {
    if (disabled) return variantToken.disabled;
    if (pressed) return variantToken.pressed;
    return variantToken.default;
  };

  const getContainerStyle = ({ pressed }: PressableStateCallbackType): ViewStyle => {
    const colors = resolveColors(pressed);
    const style: ViewStyle = {
      ...styles.base,
      height: sizeToken.height,
      paddingHorizontal: sizeToken.paddingHorizontal,
      borderRadius: sizeToken.radius,
      gap: sizeToken.gap,
      backgroundColor: colors.container,
    };
    if ('border' in colors) {
      style.borderColor = colors.border;
      style.borderWidth = colors.borderWidth;
    }
    return style;
  };

  const getLabelStyle = ({ pressed }: PressableStateCallbackType): TextStyle => {
    const colors = resolveColors(pressed);
    return {
      fontSize: sizeToken.textStyle.fontSize,
      lineHeight: sizeToken.textStyle.lineHeight,
      letterSpacing: sizeToken.textStyle.letterSpacing,
      // Figma "Label/버튼 크기별 적용" 변수의 weight: 600 (SemiBold) — 모든 사이즈 강제
      fontWeight: '600',
      color: colors.label,
    };
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={label}
      style={getContainerStyle}
    >
      {(state) => (
        <>
          {leftIcon}
          <Text style={getLabelStyle(state)}>{label}</Text>
          {rightIcon}
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
