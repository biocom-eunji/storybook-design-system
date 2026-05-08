import React, { useEffect } from 'react';
import { View, Text, Pressable, type ViewStyle, type TextStyle } from 'react-native';
import { Icon } from './Icon';
import { fontSize, fontWeight, radius, spacing, semanticColor } from '../tokens/theme';

export type ToastVariant = 'success' | 'error' | 'warning';
export type ToastPosition = 'top' | 'bottom';

export interface ToastAction {
  label: string;
  onPress: () => void;
}

/** Toast — 짧은 피드백 알림 메시지 */
export interface ToastProps {
  message: string;
  variant?: ToastVariant;
  visible: boolean;
  duration?: number;
  onDismiss?: () => void;
  position?: ToastPosition;
  action?: ToastAction;
}

// ─── Status Icons (Toast.png 디자인 기반) ────────────────

const SuccessIcon = () => (
  <Icon name="check-circle" size={24} color={semanticColor.iconSuccess} />
);

const WarningIcon = () => (
  <Icon name="warning" size={24} color={semanticColor.iconCaution} />
);

const ErrorIcon = () => (
  <Icon name="x-circle" size={24} color={semanticColor.iconError} />
);

const iconMap: Record<ToastVariant, React.FC> = {
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

// ─── Component ──────────────────────────────────────────

export function Toast({
  message,
  variant = 'success',
  visible,
  duration = 3000,
  onDismiss,
  position = 'bottom',
  action,
}: ToastProps) {
  useEffect(() => {
    if (visible && duration > 0 && onDismiss) {
      const timer = setTimeout(onDismiss, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration, onDismiss]);

  if (!visible) return null;

  const IconComponent = iconMap[variant];

  const containerStyle: ViewStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    ...(position === 'bottom' ? { bottom: 48 } : { top: 48 }),
    marginHorizontal: spacing.large,
  };

  const toastStyle: ViewStyle = {
    backgroundColor: semanticColor.backgroundToast,
    borderRadius: radius.medium,
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.medium,
  };

  const messageStyle: TextStyle = {
    color: semanticColor.textOnColor,
    fontSize: fontSize.medium,
    fontWeight: fontWeight.medium,
    flex: 1,
  };

  const actionTextStyle: TextStyle = {
    color: semanticColor.textAction,
    fontSize: fontSize.small,
    fontWeight: fontWeight.semibold,
    marginLeft: spacing.small,
  };

  return (
    <View style={containerStyle} pointerEvents="box-none">
      <View style={toastStyle} accessibilityRole="alert">
        <IconComponent />
        <Text style={messageStyle}>{message}</Text>
        {action && (
          <Pressable onPress={action.onPress}>
            <Text style={actionTextStyle}>{action.label}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
