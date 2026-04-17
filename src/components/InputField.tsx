import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  type TextInputProps,
  type KeyboardTypeOptions,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { Icon } from './Icon';
import {
  fontSize,
  fontWeight,
  semanticColor,
  spacing,
  radius,
  textStyle,
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
  /** 키보드 타입 (숫자 패드, 이메일 등) */
  keyboardType?: KeyboardTypeOptions;
  /** 비밀번호 마스킹 */
  secureTextEntry?: boolean;
  /** 자동 대문자 변환 */
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  /** 추가 TextInput props */
  textInputProps?: Omit<TextInputProps, 'value' | 'onChangeText' | 'placeholder' | 'editable' | 'multiline' | 'keyboardType' | 'secureTextEntry' | 'autoCapitalize'>;
}

// ─── Constants ───────────────────────────────────────────

const ICON_SIZE = 20;
const SINGLE_LINE_HEIGHT = spacing['4xlarge']; // 48px

const TRAILING_ICON_MAP = {
  clear:   { name: 'x-circle',        color: semanticColor.iconDisabled },
  error:   { name: 'warning',         color: semanticColor.iconError },
  success: { name: 'check-circle',    color: semanticColor.iconSuccess },
  search:  { name: 'magnifying-glass', color: semanticColor.iconSecondary },
} as const;

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
  keyboardType,
  secureTextEntry,
  autoCapitalize,
  textInputProps,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(valueProp ?? '');
  const inputRef = useRef<TextInput>(null);

  React.useEffect(() => {
    if (valueProp !== undefined) setInternalValue(valueProp);
  }, [valueProp]);

  const value = valueProp ?? internalValue;
  const charCount = value?.length ?? 0;
  const hasValue = charCount > 0;
  const status: InputFieldStatus = errorMessage ? 'error' : successMessage ? 'success' : 'default';
  const isOverLimit = maxCharCount != null && charCount > maxCharCount;

  const handleChangeText = (text: string) => {
    setInternalValue(text);
    onChangeText?.(text);
  };

  // ─── Derived styles ─────────────────────────────────

  const borderColor = (() => {
    if (disabled) return semanticColor.borderDisabled;
    if (status === 'error') return semanticColor.borderError;
    if (isFocused) return semanticColor.borderFocus;
    if (hasValue) return semanticColor.borderActive;
    return semanticColor.borderDefault;
  })();

  const containerStyle: ViewStyle = {
    ...styles.container,
    borderColor,
    backgroundColor: disabled ? semanticColor.backgroundSecondary : semanticColor.backgroundStatus,
    paddingVertical: multiline ? spacing.medium : 0,
    minHeight: multiline ? minHeight : SINGLE_LINE_HEIGHT,
    flexDirection: multiline ? 'column' : 'row',
    alignItems: multiline ? 'stretch' : 'center',
  };

  const inputStyle: TextStyle = {
    ...styles.input,
    color: disabled ? semanticColor.textTertiary : semanticColor.textPrimary,
    paddingVertical: multiline ? 0 : spacing.medium,
    textAlignVertical: multiline ? 'top' : 'center',
  };

  // ─── Sub-renders ────────────────────────────────────

  const bottomMessage = errorMessage || successMessage || helperText;
  const bottomMessageColor = errorMessage
    ? semanticColor.textError
    : successMessage
      ? semanticColor.textSuccess
      : semanticColor.textSecondary;

  const resolvedTrailingIcon = trailingIcon ?? (status === 'error' ? 'error' : undefined);

  const renderTrailingIcon = () => {
    if (!resolvedTrailingIcon) return null;
    const { name, color } = TRAILING_ICON_MAP[resolvedTrailingIcon];
    const icon = <Icon name={name} size={ICON_SIZE} color={color} />;

    if (resolvedTrailingIcon === 'clear') {
      return (
        <Pressable onPress={onClear} hitSlop={8} style={styles.trailingSlot}>
          {icon}
        </Pressable>
      );
    }
    return <View style={styles.trailingSlot}>{icon}</View>;
  };

  const renderTrailingText = () => {
    if (!trailingText) return null;
    return (
      <Pressable onPress={onTrailingTextPress} hitSlop={8} style={styles.trailingSlot}>
        <Text style={[styles.trailingTextLabel, isFocused && styles.trailingTextFocused]}>
          {trailingText}
        </Text>
      </Pressable>
    );
  };

  const renderCharCounter = () => {
    if (maxCharCount == null) return null;
    return (
      <Text style={[styles.charCounter, isOverLimit && styles.charCounterError]}>
        {charCount}/{maxCharCount}
      </Text>
    );
  };

  // ─── Render ──────────────────────────────────────────

  return (
    <View style={styles.root}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Pressable
        onPress={() => { if (!disabled) inputRef.current?.focus(); }}
        style={containerStyle}
      >
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={semanticColor.textPlaceholder}
          editable={!disabled}
          multiline={multiline}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          accessibilityLabel={label}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={inputStyle}
          {...textInputProps}
        />

        {!multiline && renderTrailingIcon()}
        {!multiline && renderTrailingText()}

        {multiline && (
          <View style={styles.multilineFooter}>
            {renderCharCounter() ?? <View />}
            <View style={styles.multilineTrailing}>
              {renderTrailingIcon()}
              {renderTrailingText()}
            </View>
          </View>
        )}
      </Pressable>

      <View style={styles.bottomRow}>
        {bottomMessage ? (
          <Text style={[styles.bottomMessage, { color: bottomMessageColor }]}>
            {bottomMessage}
          </Text>
        ) : <View />}
        {!multiline && renderCharCounter()}
      </View>
    </View>
  );
}

// ─── Styles ──────────────────────────────────────────────

const styles = StyleSheet.create({
  root: {
    gap: 6, // 라벨-인풋-헬퍼 간격 (4px 그리드 예외)
  },
  label: {
    fontSize: textStyle.label2.fontSize,
    fontWeight: textStyle.label2.fontWeight,
    lineHeight: textStyle.label2.lineHeight,
    letterSpacing: textStyle.label2.letterSpacing,
    color: semanticColor.textLabel,
  },
  container: {
    borderWidth: 1,
    borderRadius: radius.medium,
    paddingHorizontal: spacing.large,
  },
  input: {
    flex: 1,
    fontSize: textStyle.body2.fontSize,
    fontWeight: textStyle.body2.fontWeight,
    letterSpacing: textStyle.body2.letterSpacing,
    outlineStyle: 'none' as any,
  },
  trailingSlot: {
    marginLeft: spacing.small,
  },
  trailingTextLabel: {
    fontSize: textStyle.label2.fontSize,
    fontWeight: fontWeight.semibold,
    lineHeight: textStyle.label2.lineHeight,
    letterSpacing: textStyle.label2.letterSpacing,
    color: semanticColor.textSecondary,
  },
  trailingTextFocused: {
    color: semanticColor.textBrand,
  },
  multilineFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.small,
  },
  multilineTrailing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomMessage: {
    fontSize: textStyle.label2.fontSize,
    lineHeight: textStyle.label2.lineHeight,
    letterSpacing: textStyle.label2.letterSpacing,
    flex: 1,
  },
  charCounter: {
    fontSize: textStyle.label2.fontSize,
    lineHeight: textStyle.label2.lineHeight,
    letterSpacing: textStyle.label2.letterSpacing,
    color: semanticColor.textPrimary,
  },
  charCounterError: {
    color: semanticColor.textError,
  },
});
