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
import { Icon } from './Icon';
import {
  coolNeutral,
  mint,
  red,
  green,
  fontSize,
  fontWeight,
  semanticColor,
  spacing,
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
  <Icon name="x-circle" size={20} color={color} />
);

const ErrorIcon = ({ color = red[70] }: { color?: string }) => (
  <Icon name="warning" size={20} color={color} />
);

const SuccessIcon = ({ color = mint[45] }: { color?: string }) => (
  <Icon name="check-circle" size={20} color={color} />
);

const SearchIcon = ({ color = coolNeutral[50] }: { color?: string }) => (
  <Icon name="magnifying-glass" size={20} color={color} />
);

// ─── Component ───────────────────────────────────────────

export function InputField({
  label,
  placeholder = '텍스트를 입력해 주세요.',
  value: valueProp,
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
  const [internalValue, setInternalValue] = useState(valueProp ?? '');
  const inputRef = useRef<TextInput>(null);

  // 외부 value prop이 변경되면 내부 상태도 동기화
  React.useEffect(() => {
    if (valueProp !== undefined) setInternalValue(valueProp);
  }, [valueProp]);

  const value = valueProp ?? internalValue;

  const handleChangeText = (text: string) => {
    setInternalValue(text);
    onChangeText?.(text);
  };

  const hasValue = !!value && value.length > 0;
  const status: InputFieldStatus = errorMessage ? 'error' : successMessage ? 'success' : 'default';

  // ─── State-driven styles ─────────────────────────────

  const getBorderColor = (): string => {
    if (disabled) return coolNeutral[96];
    if (status === 'error') return red[70];
    if (isFocused) return mint[45];
    if (hasValue) return coolNeutral[90];
    return coolNeutral[96];
  };

  const containerStyle: ViewStyle = {
    borderWidth: 1,
    borderColor: getBorderColor(),
    borderRadius: 12,
    backgroundColor: disabled ? semanticColor.backgroundSecondary : semanticColor.backgroundPrimary,
    paddingHorizontal: 16,
    paddingVertical: multiline ? 14 : 0,
    minHeight: multiline ? minHeight : 48,
    flexDirection: multiline ? 'column' : 'row',
    alignItems: multiline ? 'stretch' : 'center',
  };

  const inputStyle: TextStyle = {
    flex: 1,
    fontSize: fontSize.medium,
    fontWeight: fontWeight.regular,
    color: disabled ? coolNeutral[80] : coolNeutral[17],
    paddingVertical: multiline ? 0 : 14,
    textAlignVertical: multiline ? 'top' : 'center',
    outlineStyle: 'none' as any,
  };

  const placeholderColor = coolNeutral[80];

  // ─── Helper / Error / Success text ───────────────────

  const bottomMessage = errorMessage || successMessage || helperText;
  const bottomMessageColor = errorMessage
    ? red[70]
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
          <Pressable onPress={onClear} hitSlop={8} style={{ marginLeft: spacing.small }}>
            <ClearIcon />
          </Pressable>
        );
      case 'error':
        return (
          <View style={{ marginLeft: spacing.small }}>
            <ErrorIcon />
          </View>
        );
      case 'success':
        return (
          <View style={{ marginLeft: spacing.small }}>
            <SuccessIcon />
          </View>
        );
      case 'search':
        return (
          <View style={{ marginLeft: spacing.small }}>
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
          fontSize: fontSize.small,
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
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          editable={!disabled}
          multiline={multiline}
          accessibilityLabel={label}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={inputStyle}
          {...textInputProps}
        />

        {!multiline && (renderTrailingIcon() || null)}
        {!multiline && trailingText && (
          <Pressable onPress={onTrailingTextPress} hitSlop={8} style={{ marginLeft: spacing.small }}>
            <Text style={{
              fontSize: fontSize.small,
              fontWeight: fontWeight.semibold,
              color: isFocused ? mint[45] : coolNeutral[50],
            }}>
              {trailingText}
            </Text>
          </Pressable>
        )}

        {multiline && (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            {maxCharCount != null ? (
              <Text style={{ fontSize: fontSize.small, color: (value?.length ?? 0) > maxCharCount ? red[70] : coolNeutral[17] }}>
                {value?.length ?? 0}/{maxCharCount}
              </Text>
            ) : <View />}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {renderTrailingIcon()}
              {trailingText && (
                <Pressable onPress={onTrailingTextPress} hitSlop={8} style={{ marginLeft: spacing.small }}>
                  <Text style={{
                    fontSize: fontSize.small,
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
          <Text style={{ fontSize: fontSize.small, color: bottomMessageColor, flex: 1 }}>
            {bottomMessage}
          </Text>
        ) : <View />}
        {!multiline && maxCharCount != null && (
          <Text style={{ fontSize: fontSize.small, color: (value?.length ?? 0) > maxCharCount ? red[70] : coolNeutral[17] }}>
            {value?.length ?? 0}/{maxCharCount}
          </Text>
        )}
      </View>
    </View>
  );
}
