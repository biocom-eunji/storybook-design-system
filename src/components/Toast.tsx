import React, { useEffect } from 'react';
import { View, Text, Pressable, type ViewStyle, type TextStyle } from 'react-native';
import { coolNeutral, mint, red, yellow, fontSize, fontWeight, radius } from '../tokens/theme';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning';
export type ToastPosition = 'top' | 'bottom';

export interface ToastAction {
  label: string;
  onPress: () => void;
}

export interface ToastProps {
  message: string;
  variant?: ToastVariant;
  visible: boolean;
  duration?: number;
  onDismiss?: () => void;
  position?: ToastPosition;
  action?: ToastAction;
}

const accentColors: Record<ToastVariant, string> = {
  default: mint[45],
  success: mint[45],
  error: red[70],
  warning: yellow[50],
};

export function Toast({
  message,
  variant = 'default',
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

  const containerStyle: ViewStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    ...(position === 'bottom' ? { bottom: 48 } : { top: 48 }),
    marginHorizontal: 16,
  };

  const toastStyle: ViewStyle = {
    backgroundColor: coolNeutral[17],
    opacity: 0.95,
    borderRadius: radius.md,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: accentColors[variant],
  };

  const messageStyle: TextStyle = {
    color: '#FFFFFF',
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    flex: 1,
  };

  const actionTextStyle: TextStyle = {
    color: mint[45],
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    marginLeft: 12,
  };

  return (
    <View style={containerStyle} pointerEvents="box-none">
      <View style={toastStyle}>
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
