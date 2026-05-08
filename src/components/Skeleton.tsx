import React, { useEffect, useRef } from 'react';
import { View, Animated, type ViewStyle } from 'react-native';
import { radius, semanticColor } from '../tokens/theme';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular';

/** Skeleton — 로딩 플레이스홀더 */
export interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number;
  borderRadius?: number;
}

const defaultHeights: Record<SkeletonVariant, number> = {
  text: 16,
  circular: 40,
  rectangular: 100,
};

export function Skeleton({
  variant = 'rectangular',
  width,
  height,
  borderRadius: customBorderRadius,
}: SkeletonProps) {
  const resolvedHeight = height ?? defaultHeights[variant];

  const resolvedWidth = (() => {
    if (width !== undefined) return width;
    if (variant === 'circular') return resolvedHeight;
    return '100%';
  })();

  const resolvedBorderRadius = (() => {
    if (customBorderRadius !== undefined) return customBorderRadius;
    switch (variant) {
      case 'circular':
        return radius.full;
      case 'text':
        return radius.xsmall;
      case 'rectangular':
      default:
        return radius.small;
    }
  })();

  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    );
    animation.start();
    return () => animation.stop();
  }, [shimmerAnim]);

  const containerStyle: ViewStyle = {
    width: resolvedWidth as any,
    height: resolvedHeight,
    borderRadius: resolvedBorderRadius,
    backgroundColor: semanticColor.backgroundDisabled,
    overflow: 'hidden',
  };

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 200],
  });

  return (
    <View style={containerStyle}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
          backgroundColor: semanticColor.backgroundOff,
          opacity: 0.3,
          transform: [{ translateX }],
        }}
      />
    </View>
  );
}
