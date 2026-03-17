import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { coolNeutral, radius } from '../tokens/theme';

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
        return 4;
      case 'rectangular':
      default:
        return radius.small;
    }
  })();

  const containerStyle: ViewStyle = {
    width: resolvedWidth as any,
    height: resolvedHeight,
    borderRadius: resolvedBorderRadius,
    backgroundColor: coolNeutral[96],
    overflow: 'hidden',
  };

  return (
    <View style={containerStyle}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes skeleton-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
          `,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(90deg, ${coolNeutral[96]} 0%, ${coolNeutral[90]} 50%, ${coolNeutral[96]} 100%)`,
          animation: 'skeleton-shimmer 1.5s ease-in-out infinite',
        }}
      />
    </View>
  );
}
