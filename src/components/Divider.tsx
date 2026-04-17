import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { semanticColor } from '../tokens/theme';

export type DividerDirection = 'horizontal' | 'vertical';

/** Divider — 콘텐츠 구분선 */
export interface DividerProps {
  direction?: DividerDirection;
  thickness?: number;
  color?: string;
  spacing?: number;
  inset?: number;
}

export function Divider({
  direction = 'horizontal',
  thickness = 1,
  color = semanticColor.borderDefault,
  spacing: spacingValue = 0,
  inset = 0,
}: DividerProps) {
  const isHorizontal = direction === 'horizontal';

  const style: ViewStyle = isHorizontal
    ? {
        height: thickness,
        width: '100%',
        backgroundColor: color,
        marginVertical: spacingValue,
        marginLeft: inset,
      }
    : {
        width: thickness,
        height: '100%',
        backgroundColor: color,
        marginHorizontal: spacingValue,
        marginLeft: inset,
      };

  return <View style={style} accessibilityRole="none" />;
}
