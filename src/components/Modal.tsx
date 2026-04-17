import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { fontSize, fontWeight, spacing, semanticColor, radius } from '../tokens/theme';

export interface ModalAction {
  label: string;
  onPress: () => void;
  destructive?: boolean;
}

/** Modal — 사용자 확인이 필요한 대화상자 */
export interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  primaryAction?: ModalAction;
  secondaryAction?: { label: string; onPress: () => void };
}

export function Modal({
  visible,
  onClose,
  title,
  description,
  children,
  primaryAction,
  secondaryAction,
}: ModalProps) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.backdrop} onPress={onClose} accessibilityRole="none" />
      <View style={styles.dialog}>
        {title && <Text style={styles.title}>{title}</Text>}
        {children ? (
          <View style={styles.childrenContainer}>{children}</View>
        ) : (
          description && <Text style={styles.description}>{description}</Text>
        )}
        {(primaryAction || secondaryAction) && (
          <View style={styles.buttonArea}>
            {primaryAction && (
              <Pressable
                style={[
                  styles.primaryButton,
                  primaryAction.destructive && styles.destructiveButton,
                ]}
                onPress={primaryAction.onPress}
              >
                <Text style={styles.primaryButtonText}>{primaryAction.label}</Text>
              </Pressable>
            )}
            {secondaryAction && (
              <Pressable style={styles.secondaryButton} onPress={secondaryAction.onPress}>
                <Text style={styles.secondaryButtonText}>{secondaryAction.label}</Text>
              </Pressable>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as ViewStyle,
  dialog: {
    backgroundColor: semanticColor.backgroundStatus,
    borderRadius: radius.xlarge,
    width: 300,
    padding: spacing['2xlarge'],
  } as ViewStyle,
  title: {
    fontSize: fontSize.large,
    fontWeight: fontWeight.bold,
    color: semanticColor.textPrimary,
    textAlign: 'center',
  } as TextStyle,
  description: {
    fontSize: fontSize.medium,
    color: semanticColor.textSecondary,
    textAlign: 'center',
    marginTop: spacing.small,
  } as TextStyle,
  childrenContainer: {
    marginTop: spacing.small,
  } as ViewStyle,
  buttonArea: {
    marginTop: spacing['2xlarge'],
    gap: spacing.small,
  } as ViewStyle,
  primaryButton: {
    height: 48,
    borderRadius: radius.medium,
    backgroundColor: semanticColor.backgroundBrand,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  destructiveButton: {
    backgroundColor: semanticColor.backgroundError,
  } as ViewStyle,
  primaryButtonText: {
    color: semanticColor.textOnColor,
    fontSize: fontSize.medium,
    fontWeight: fontWeight.semibold,
  } as TextStyle,
  secondaryButton: {
    height: 48,
    borderRadius: radius.medium,
    backgroundColor: semanticColor.backgroundTertiary,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  secondaryButtonText: {
    color: semanticColor.textQuaternary,
    fontSize: fontSize.medium,
    fontWeight: fontWeight.semibold,
  } as TextStyle,
});
