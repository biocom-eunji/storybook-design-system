import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  type TextInputProps,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import {
  coolNeutral,
  mint,
  red,
  redOrange,
  green,
  fontWeight,
} from '../tokens/theme';

// ─── Types ───────────────────────────────────────────────

export type InputFieldStatus = 'default' | 'error' | 'success';

export interface InputFieldProps {
  /** 라벨 텍스트 */
  label?: string;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 입력값 */
  value?: string;
  /** 값 변경 콜백 */
  onChangeText?: (text: string) => void;
  /** 하단 도움말 텍스트 */
  helperText?: string;
  /** 에러 메시지 (표시되면 error 상태 자동 적용) */
  errorMessage?: string;
  /** 성공 메시지 (표시되면 success 상태 자동 적용) */
  successMessage?: string;
  /** 최대 글자 수 카운터 */
  maxCharCount?: number;
  /** 비활성화 */
  disabled?: boolean;
  /** Textarea 모드 (여러 줄 입력) */
  multiline?: boolean;
  /** Textarea 최소 높이 */
  minHeight?: number;
  /** 오른쪽 trailing 아이콘 */
  trailingIcon?: 'clear' | 'error' | 'success' | 'search';
  /** 오른쪽 trailing 텍스트 링크 */
  trailingText?: string;
  /** trailing 텍스트 클릭 콜백 */
  onTrailingTextPress?: () => void;
  /** 지우기 버튼 클릭 콜백 */
  onClear?: () => void;
  /** 추가 TextInput props */
  textInputProps?: Omit<TextInputProps, 'value' | 'onChangeText' | 'placeholder' | 'editable' | 'multiline'>;
}

// ─── Icons ───────────────────────────────────────────────

const ClearIcon = ({ color = coolNeutral[80] }: { color?: string }) => (
  <Svg width={20} height={20} viewBox="0 0 256 256" fill="none">
    <Circle cx="128" cy="128" r="96" fill={color} />
    <Path d="M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.49,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17Z" fill="#FFFFFF" />
  </Svg>
);

const ErrorIcon = ({ color = redOrange[50] }: { color?: string }) => (
  <Svg width={20} height={20} viewBox="0 0 256 256" fill="none">
    <Circle cx="128" cy="128" r="96" fill={color} />
    <Path d="M128,80a12,12,0,0,1,12,12v48a12,12,0,0,1-24,0V92A12,12,0,0,1,128,80Zm0,100a16,16,0,1,0-16-16A16,16,0,0,0,128,180Z" fill="#FFFFFF" />
  </Svg>
);

const SuccessIcon = ({ color = mint[45] }: { color?: string }) => (
  <Svg width={20} height={20} viewBox="0 0 256 256" fill="none">
    <Circle cx="128" cy="128" r="96" fill={color} />
    <Path d="M176.49,96.49l-64,64a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17L104,135,159.51,79.51a12,12,0,0,1,17,17Z" fill="#FFFFFF" />
  </Svg>
);

const SearchIcon = ({ color = coolNeutral[50] }: { color?: string }) => (
  <Svg width={20} height={20} viewBox="0 0 256 256" fill="none">
    <Path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.52a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" fill={color} />
  </Svg>
);

// ─── Component ───────────────────────────────────────────

export function InputField({
  label,
  placeholder = '텍스트를 입력해 주세요.',
  value,
  onChangeText,
  helperText,
  errorMessage,
  successMessage,
  maxCharCount,
  disabled = false,
  multiline = false,
  minHeight = 100,
  trailingIcon,
  trailingText,
  onTrailingTextPress,
  onClear,
  textInputProps,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const hasValue = !!value && value.length > 0;
  const status: InputFieldStatus = errorMessage ? 'error' : successMessage ? 'success' : 'default';

  // ─── State-driven styles ─────────────────────────────

  const getBorderColor = (): string => {
    if (disabled) return coolNeutral[96];
    if (status === 'error') return redOrange[50];
    if (isFocused) return mint[45];
    if (hasValue) return coolNeutral[90];
    return coolNeutral[96];
  };

  const containerStyle: ViewStyle = {
    borderWidth: 1,
    borderColor: getBorderColor(),
    borderRadius: 12,
    backgroundColor: disabled ? coolNeutral[99] : '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: multiline ? 14 : 0,
    minHeight: multiline ? minHeight : 48,
    flexDirection: multiline ? 'column' : 'row',
    alignItems: multiline ? 'stretch' : 'center',
  };

  const inputStyle: TextStyle = {
    flex: 1,
    fontSize: 15,
    fontWeight: fontWeight.regular,
    color: disabled ? coolNeutral[80] : coolNeutral[17],
    paddingVertical: multiline ? 0 : 14,
    textAlignVertical: multiline ? 'top' : 'center',
  };

  const placeholderColor = coolNeutral[80];

  // ─── Helper / Error / Success text ───────────────────

  const bottomMessage = errorMessage || successMessage || helperText;
  const bottomMessageColor = errorMessage
    ? redOrange[50]
    : successMessage
      ? mint[45]
      : coolNeutral[50];

  // ─── Trailing icon resolution ────────────────────────

  const resolvedTrailingIcon = trailingIcon ?? (status === 'error' ? 'error' : undefined);

  const renderTrailingIcon = () => {
    if (!resolvedTrailingIcon) return null;
    switch (resolvedTrailingIcon) {
      case 'clear':
        return (
          <Pressable onPress={onClear} hitSlop={8} style={{ marginLeft: 8 }}>
            <ClearIcon />
          </Pressable>
        );
      case 'error':
        return (
          <View style={{ marginLeft: 8 }}>
            <ErrorIcon />
          </View>
        );
      case 'success':
        return (
          <View style={{ marginLeft: 8 }}>
            <SuccessIcon />
          </View>
        );
      case 'search':
        return (
          <View style={{ marginLeft: 8 }}>
            <SearchIcon />
          </View>
        );
      default:
        return null;
    }
  };

  // ─── Render ──────────────────────────────────────────

  return (
    <View style={{ gap: 6 }}>
      {label && (
        <Text style={{
          fontSize: 13,
          fontWeight: fontWeight.medium,
          color: coolNeutral[30],
        }}>
          {label}
        </Text>
      )}

      <Pressable
        onPress={() => { if (!disabled) inputRef.current?.focus(); }}
        style={containerStyle}
      >
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          editable={!disabled}
          multiline={multiline}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={inputStyle}
          {...textInputProps}
        />

        {!multiline && (renderTrailingIcon() || null)}
        {!multiline && trailingText && (
          <Pressable onPress={onTrailingTextPress} hitSlop={8} style={{ marginLeft: 8 }}>
            <Text style={{
              fontSize: 14,
              fontWeight: fontWeight.semibold,
              color: isFocused ? mint[45] : coolNeutral[50],
            }}>
              {trailingText}
            </Text>
          </Pressable>
        )}

        {multiline && (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            {maxCharCount ? (
              <Text style={{ fontSize: 13, color: coolNeutral[80] }}>
                {value?.length ?? 0}/{maxCharCount}
              </Text>
            ) : <View />}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {renderTrailingIcon()}
              {trailingText && (
                <Pressable onPress={onTrailingTextPress} hitSlop={8} style={{ marginLeft: 8 }}>
                  <Text style={{
                    fontSize: 14,
                    fontWeight: fontWeight.semibold,
                    color: isFocused ? mint[45] : coolNeutral[50],
                  }}>
                    {trailingText}
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        )}
      </Pressable>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        {bottomMessage ? (
          <Text style={{ fontSize: 12, color: bottomMessageColor, flex: 1 }}>
            {bottomMessage}
          </Text>
        ) : <View />}
        {!multiline && maxCharCount && (
          <Text style={{ fontSize: 12, color: coolNeutral[80] }}>
            {value?.length ?? 0}/{maxCharCount}
          </Text>
        )}
      </View>
    </View>
  );
}
