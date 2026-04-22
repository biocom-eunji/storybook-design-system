import React, { useState, useRef } from 'react';
import { View, TextInput, Pressable, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { Icon } from './Icon';
import { semanticColor, fontWeight, textStyle, spacing, radius } from '../tokens/theme';

/** SearchBar — 검색 입력 필드 */
export interface SearchBarProps {
  /** 플레이스홀더 */
  placeholder?: string;
  /** 입력값 */
  value?: string;
  /** 값 변경 콜백 */
  onChangeText?: (text: string) => void;
  /** 검색 제출 콜백 */
  onSubmit?: (text: string) => void;
  /** 지우기 콜백 */
  onClear?: () => void;
  /** 비활성화 */
  disabled?: boolean;
}

export function SearchBar({
  placeholder = '검색어를 입력하세요',
  value: valueProp,
  onChangeText,
  onSubmit,
  onClear,
  disabled = false,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState(valueProp ?? '');
  const inputRef = useRef<TextInput>(null);

  const value = valueProp ?? internalValue;
  const hasValue = value.length > 0;

  const handleChange = (text: string) => {
    setInternalValue(text);
    onChangeText?.(text);
  };

  const handleClear = () => {
    setInternalValue('');
    onChangeText?.('');
    onClear?.();
    inputRef.current?.focus();
  };

  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      <Icon name="magnifying-glass" size={20} color={semanticColor.iconSecondary} />
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChange}
        onSubmitEditing={() => onSubmit?.(value)}
        placeholder={placeholder}
        placeholderTextColor={semanticColor.textPlaceholder}
        editable={!disabled}
        style={styles.input}
        returnKeyType="search"
        accessibilityLabel={placeholder}
      />
      {hasValue && !disabled && (
        <Pressable onPress={handleClear} hitSlop={8} accessibilityLabel="검색어 지우기">
          <Icon name="x-circle" size={20} color={semanticColor.iconDisabled} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: semanticColor.backgroundTertiary,
    borderRadius: radius.medium,
    paddingHorizontal: spacing.medium,
    height: 44,
    gap: spacing.small,
  } as ViewStyle,
  disabled: {
    opacity: 0.5,
  } as ViewStyle,
  input: {
    flex: 1,
    fontSize: textStyle.body2.fontSize,
    fontWeight: fontWeight.regular,
    color: semanticColor.textPrimary,
    padding: 0,
    outlineStyle: 'none' as any,
  } as TextStyle,
});
