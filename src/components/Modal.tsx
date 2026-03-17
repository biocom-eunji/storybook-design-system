import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { coolNeutral, mint, red, fontSize, fontWeight, spacing, semanticColor, radius } from '../tokens/theme';

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
      <Pressable style={styles.backdrop} onPress={onClose} />
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
    backgroundColor: semanticColor.backgroundPrimary,
    borderRadius: radius.xl,
    width: 300,
    padding: spacing['2xl'],
  } as ViewStyle,
  title: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: coolNeutral[17],
    textAlign: 'center',
  } as TextStyle,
  description: {
    fontSize: fontSize.md,
    color: coolNeutral[50],
    textAlign: 'center',
    marginTop: spacing.sm,
  } as TextStyle,
  childrenContainer: {
    marginTop: spacing.sm,
  } as ViewStyle,
  buttonArea: {
    marginTop: spacing['2xl'],
    gap: spacing.sm,
  } as ViewStyle,
  primaryButton: {
    height: 48,
    borderRadius: spacing.md,
    backgroundColor: mint[45],
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  destructiveButton: {
    backgroundColor: red[70],
  } as ViewStyle,
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
  } as TextStyle,
  secondaryButton: {
    height: 48,
    borderRadius: spacing.md,
    backgroundColor: coolNeutral[97],
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  secondaryButtonText: {
    color: coolNeutral[40],
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
  } as TextStyle,
});
