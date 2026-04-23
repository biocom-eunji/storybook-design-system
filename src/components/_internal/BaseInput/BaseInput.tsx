import React, { useState, useRef, useCallback } from 'react';
import { TextInput, Pressable, StyleSheet, type TextStyle } from 'react-native';
import { Icon } from '../../Icon';
import { semanticColor, textStyle } from '../../../tokens/theme';
import type { BaseInputProps } from './types';

export function BaseInput({
  value: valueProp,
  onChangeText,
  placeholder,
  disabled = false,
  leading,
  trailing,
  showClear = false,
  onClear,
  onFocus,
  onBlur,
  containerStyle,
  containerFocusedStyle,
  accessibilityLabel,
  textInputProps,
}: BaseInputProps) {
  const [internalValue, setInternalValue] = useState(valueProp ?? '');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  React.useEffect(() => {
    if (valueProp !== undefined) setInternalValue(valueProp);
  }, [valueProp]);

  const value = valueProp ?? internalValue;
  const hasValue = value.length > 0;

  const handleChangeText = useCallback(
    (text: string) => {
      setInternalValue(text);
      onChangeText?.(text);
    },
    [onChangeText],
  );

  const handleClear = useCallback(() => {
    setInternalValue('');
    onChangeText?.('');
    onClear?.();
    inputRef.current?.focus();
  }, [onChangeText, onClear]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    onFocus?.();
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    onBlur?.();
  }, [onBlur]);

  const mergedContainerStyle = [
    styles.container,
    containerStyle,
    isFocused && containerFocusedStyle,
  ];

  const inputStyle: TextStyle = {
    ...styles.input,
    color: disabled ? semanticColor.textTertiary : semanticColor.textPrimary,
  };

  return (
    <Pressable
      onPress={() => { if (!disabled) inputRef.current?.focus(); }}
      style={mergedContainerStyle}
    >
      {leading}

      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor={semanticColor.textPlaceholder}
        editable={!disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        accessibilityLabel={accessibilityLabel}
        {...textInputProps}
        style={[inputStyle, textInputProps?.style]}
      />

      {trailing}

      {showClear && hasValue && !disabled && (
        <Pressable onPress={handleClear} hitSlop={8} accessibilityLabel="지우기">
          <Icon name="x-circle" size={20} color={semanticColor.iconDisabled} />
        </Pressable>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: textStyle.body2.fontSize,
    fontWeight: textStyle.body2.fontWeight,
    letterSpacing: textStyle.body2.letterSpacing,
    padding: 0,
    outlineStyle: 'none' as any,
  },
});
