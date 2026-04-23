import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { Icon } from './Icon';
import { BaseInput } from './_internal/BaseInput';
import { semanticColor, spacing, radius } from '../tokens/theme';

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
  value,
  onChangeText,
  onSubmit,
  onClear,
  disabled = false,
}: SearchBarProps) {
  return (
    <View style={disabled ? styles.disabled : undefined}>
      <BaseInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        disabled={disabled}
        leading={
          <Icon name="magnifying-glass" size={20} color={semanticColor.iconSecondary} />
        }
        showClear
        onClear={onClear}
        containerStyle={styles.container}
        accessibilityLabel={placeholder}
        textInputProps={{
          returnKeyType: 'search',
          onSubmitEditing: (e) => {
            const text = e.nativeEvent.text;
            onSubmit?.(text);
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: semanticColor.backgroundTertiary,
    borderRadius: radius.medium,
    paddingHorizontal: spacing.medium,
    height: 44,
    gap: spacing.small,
  } as ViewStyle,
  disabled: {
    opacity: 0.5,
  } as ViewStyle,
});
