import type { ReactNode } from 'react';
import type { TextInputProps, ViewStyle } from 'react-native';

export interface BaseInputProps {
  /** 입력값 (controlled) */
  value?: string;
  /** 값 변경 콜백 */
  onChangeText?: (text: string) => void;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 비활성화 */
  disabled?: boolean;

  /** leading 슬롯 (아이콘 등) */
  leading?: ReactNode;
  /** trailing 슬롯 (아이콘, 텍스트 등) */
  trailing?: ReactNode;

  /** 지우기 버튼 표시 여부 (true이면 값이 있을 때 trailing 뒤에 x-circle 표시) */
  showClear?: boolean;
  /** 지우기 콜백 */
  onClear?: () => void;

  /** focus 콜백 */
  onFocus?: () => void;
  /** blur 콜백 */
  onBlur?: () => void;

  /** 컨테이너 스타일 오버라이드 */
  containerStyle?: ViewStyle;
  /** focus 상태 컨테이너 스타일 오버라이드 */
  containerFocusedStyle?: ViewStyle;

  /** 접근성 라벨 */
  accessibilityLabel?: string;

  /** 추가 TextInput props (패스스루) */
  textInputProps?: Omit<
    TextInputProps,
    'value' | 'onChangeText' | 'placeholder' | 'editable'
  >;
}
