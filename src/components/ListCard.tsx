import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, type ViewStyle, type TextStyle, type ImageSourcePropType } from 'react-native';
import { Skeleton } from './Skeleton';
import { semanticColor, fontWeight, textStyle, spacing, radius, interaction } from '../tokens/theme';

/** ListCard — 썸네일과 텍스트를 가로로 묶어 리스트로 나열하는 카드 */
export interface ListCardProps {
  /** 제목 */
  title: string;
  /** 캡션 */
  caption?: string;
  /** 썸네일 이미지 */
  imageSource?: ImageSourcePropType;
  /** 우측 슬롯 */
  trailing?: React.ReactNode;
  /** 클릭 핸들러 */
  onPress?: () => void;
  /** 스켈레톤 로딩 */
  skeleton?: boolean;
}

const THUMB_WIDTH = 96;
const THUMB_HEIGHT = 67; // ≈ 2:3 비율
const THUMB_RADIUS = radius.medium; // 12
const GAP = spacing.medium; // 12
const CONTENT_GAP = spacing.xsmall; // 4

export function ListCard({
  title,
  caption,
  imageSource,
  trailing,
  onPress,
  skeleton = false,
}: ListCardProps) {
  if (skeleton) {
    return (
      <View style={styles.container} accessibilityState={{ busy: true }}>
        <Skeleton variant="rectangular" width={THUMB_WIDTH} height={THUMB_HEIGHT} borderRadius={THUMB_RADIUS} />
        <View style={styles.textWrap}>
          <Skeleton variant="text" width="75%" />
          <Skeleton variant="text" width="40%" height={14} />
        </View>
      </View>
    );
  }

  const content = (
    <View style={styles.container}>
      {/* Thumbnail */}
      <View style={styles.thumbWrap}>
        {imageSource ? (
          <Image source={imageSource} style={styles.thumbImage} resizeMode="cover" accessibilityLabel={title} />
        ) : (
          <View style={styles.thumbPlaceholder} />
        )}
        <View style={styles.thumbBorder} />
      </View>

      {/* Text */}
      <View style={styles.contentWrap}>
        <View style={styles.textWrap}>
          <Text style={styles.titleText} numberOfLines={2}>{title}</Text>
          {caption && <Text style={styles.captionText} numberOfLines={1}>{caption}</Text>}
        </View>
        {trailing && (
          <View style={styles.trailingSlot} onStartShouldSetResponder={() => true}>
            {trailing}
          </View>
        )}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        {content}
      </Pressable>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: GAP,
  } as ViewStyle,
  thumbWrap: {
    width: THUMB_WIDTH,
    height: THUMB_HEIGHT,
    borderRadius: THUMB_RADIUS,
    overflow: 'hidden',
    position: 'relative',
    flexShrink: 0,
  } as ViewStyle,
  thumbImage: {
    width: '100%' as any,
    height: '100%' as any,
  } as ViewStyle,
  thumbPlaceholder: {
    width: '100%' as any,
    height: '100%' as any,
    backgroundColor: semanticColor.backgroundSecondary,
  } as ViewStyle,
  thumbBorder: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    borderRadius: THUMB_RADIUS,
    borderWidth: 1,
    borderColor: semanticColor.borderDefault,
  } as ViewStyle,
  contentWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: GAP,
  } as ViewStyle,
  textWrap: {
    flex: 1,
    gap: CONTENT_GAP,
  } as ViewStyle,
  titleText: {
    fontSize: textStyle.body2.fontSize,
    lineHeight: textStyle.body2.lineHeight,
    fontWeight: fontWeight.regular,
    color: semanticColor.textPrimary,
  } as TextStyle,
  captionText: {
    fontSize: textStyle.label2.fontSize,
    lineHeight: textStyle.label2.lineHeight,
    fontWeight: fontWeight.medium,
    color: semanticColor.textSecondary,
  } as TextStyle,
  trailingSlot: {
    flexShrink: 0,
  } as ViewStyle,
  pressed: {
    opacity: interaction.pressOpacity,
  } as ViewStyle,
});
