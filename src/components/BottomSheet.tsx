import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { coolNeutral, fontSize, fontWeight, spacing, semanticColor, radius } from '../tokens/theme';

/** BottomSheet — 하단에서 올라오는 시트 */
export interface BottomSheetProps {
  visible: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
  showHandle?: boolean;
  showCloseButton?: boolean;
}

export function BottomSheet({
  visible,
  onClose,
  title,
  children,
  showHandle = true,
  showCloseButton = false,
}: BottomSheetProps) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={styles.sheet}>
        {showHandle && (
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
        )}
        {showCloseButton && (
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>{'\u2715'}</Text>
          </Pressable>
        )}
        {title && <Text style={styles.title}>{title}</Text>}
        <View style={styles.content}>{children}</View>
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
    justifyContent: 'flex-end',
  } as ViewStyle,
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as ViewStyle,
  sheet: {
    backgroundColor: semanticColor.backgroundPrimary,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
  } as ViewStyle,
  handleContainer: {
    alignItems: 'center',
    marginTop: spacing.md,
  } as ViewStyle,
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: coolNeutral[90],
  } as ViewStyle,
  closeButton: {
    position: 'absolute',
    right: spacing.lg,
    top: spacing.lg,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  closeButtonText: {
    fontSize: fontSize.lg,
    color: coolNeutral[50],
    fontWeight: fontWeight.medium,
  },
  title: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: coolNeutral[17],
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },
  content: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 34,
  } as ViewStyle,
});
