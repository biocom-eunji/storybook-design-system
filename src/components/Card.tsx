import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, type ViewStyle, type TextStyle, type ImageSourcePropType } from 'react-native';
import { Skeleton } from './Skeleton';
import { semanticColor, fontWeight, textStyle, spacing, radius, interaction } from '../tokens/theme';

/** Card — 정보를 묶어 빠르게 선택할 수 있도록 돕는 컴포넌트 */
export interface CardProps {
  /** 제목 텍스트 */
  title: string;
  /** 캡션 텍스트 */
  caption?: string;
  /** 보조 캡션 */
  subCaption?: string;
  /** 썸네일 이미지 */
  imageSource?: ImageSourcePropType;
  /** 클릭 핸들러 */
  onPress?: () => void;
  /** 스켈레톤 로딩 상태 */
  skeleton?: boolean;
  /** 카드 너비 */
  width?: number;
}

const CARD_WIDTH = 152;
const THUMB_RATIO = 75 / 152; // Figma Mobile 비율
const THUMB_RADIUS = radius.medium; // 12
const CARD_GAP = 6;
const CONTENT_GAP = spacing.xsmall; // 4

export function Card({
  title,
  caption,
  subCaption,
  imageSource,
  onPress,
  skeleton = false,
  width = CARD_WIDTH,
}: CardProps) {
  const thumbHeight = Math.round(width * THUMB_RATIO);

  if (skeleton) {
    return (
      <View style={[styles.container, { width, gap: CARD_GAP }]} accessibilityState={{ busy: true }}>
        <Skeleton variant="rectangular" width={width} height={thumbHeight} borderRadius={THUMB_RADIUS} />
        <View style={[styles.contentWrap, { gap: CONTENT_GAP }]}>
          <Skeleton variant="text" />
          {caption !== undefined && <Skeleton variant="text" width="75%" height={14} />}
          {subCaption !== undefined && <Skeleton variant="text" width="50%" height={14} />}
        </View>
      </View>
    );
  }

  const content = (
    <View style={[styles.container, { width, gap: CARD_GAP }]}>
      {/* Thumbnail */}
      <View style={[styles.thumbWrap, { height: thumbHeight }]}>
        {imageSource ? (
          <Image source={imageSource} style={styles.thumbImage} resizeMode="cover" />
        ) : (
          <View style={styles.thumbPlaceholder} />
        )}
        <View style={styles.thumbBorder} />
      </View>

      {/* Content */}
      <View style={[styles.contentWrap, { gap: CONTENT_GAP }]}>
        <Text style={styles.titleText} numberOfLines={2}>{title}</Text>
        {caption && <Text style={styles.captionText} numberOfLines={1}>{caption}</Text>}
        {subCaption && <Text style={styles.captionText} numberOfLines={1}>{subCaption}</Text>}
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
    flexDirection: 'column',
    alignItems: 'flex-start',
  } as ViewStyle,
  thumbWrap: {
    width: '100%' as any,
    borderRadius: THUMB_RADIUS,
    overflow: 'hidden',
    position: 'relative',
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: THUMB_RADIUS,
    borderWidth: 1,
    borderColor: semanticColor.borderDefault,
  } as ViewStyle,
  contentWrap: {
    width: '100%' as any,
    flexDirection: 'column',
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
  pressed: {
    opacity: interaction.pressOpacity,
  } as ViewStyle,
});
