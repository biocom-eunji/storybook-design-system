import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  Animated,
  StyleSheet,
  useWindowDimensions,
  type ViewStyle,
} from 'react-native';
import { coolNeutral, fontSize, fontWeight, spacing, semanticColor, radius } from '../tokens/theme';

/** BottomSheet — 하단에서 올라오는 시트 */
export interface BottomSheetProps {
  /** 표시 여부 */
  visible: boolean;
  /** 닫기 콜백 */
  onClose?: () => void;
  /** 헤더 타이틀 */
  title?: string;
  /** 콘텐츠 */
  children: React.ReactNode;
  /** 드래그 핸들바 표시 (기본: true) */
  showHandle?: boolean;
  /** 닫기 버튼 표시 (기본: false) */
  showCloseButton?: boolean;
  /**
   * 하단 Safe Area 여백 (px)
   * react-native-safe-area-context의 useSafeAreaInsets().bottom 값을 전달하세요.
   * 기본값: 0
   */
  safeAreaBottom?: number;
}

const ANIMATION_DURATION = 300;
const BACKDROP_OPACITY = 0.4;

export function BottomSheet({
  visible,
  onClose,
  title,
  children,
  showHandle = true,
  showCloseButton = false,
  safeAreaBottom = 0,
}: BottomSheetProps) {
  const { height: screenHeight } = useWindowDimensions();

  const translateY = useRef(new Animated.Value(screenHeight)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = React.useState(false);

  useEffect(() => {
    if (visible) {
      // 모달을 먼저 마운트한 뒤 애니메이션 시작
      setModalVisible(true);
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: BACKDROP_OPACITY,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // 닫힘 애니메이션 후 모달 언마운트
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: screenHeight,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setModalVisible(false);
      });
    }
  }, [visible, screenHeight, translateY, backdropOpacity]);

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        {/* 반투명 배경 */}
        <Animated.View
          style={[
            styles.backdrop,
            { opacity: backdropOpacity },
          ]}
        >
          <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        </Animated.View>

        {/* 시트 */}
        <Animated.View
          style={[
            styles.sheet,
            { transform: [{ translateY }], paddingBottom: safeAreaBottom },
          ]}
        >
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
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  } as ViewStyle,
  sheet: {
    backgroundColor: semanticColor.backgroundPrimary,
    borderTopLeftRadius: radius.xlarge,
    borderTopRightRadius: radius.xlarge,
  } as ViewStyle,
  handleContainer: {
    alignItems: 'center',
    marginTop: spacing.medium,
  } as ViewStyle,
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: coolNeutral[90],
  } as ViewStyle,
  closeButton: {
    position: 'absolute',
    right: spacing.large,
    top: spacing.large,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  closeButtonText: {
    fontSize: fontSize.large,
    color: coolNeutral[50],
    fontWeight: fontWeight.medium,
  },
  title: {
    fontSize: fontSize.large,
    fontWeight: fontWeight.bold,
    color: coolNeutral[17],
    paddingHorizontal: spacing.xlarge,
    paddingVertical: spacing.large,
  },
  content: {
    paddingHorizontal: spacing.xlarge,
    paddingBottom: spacing.xlarge,
  } as ViewStyle,
});
