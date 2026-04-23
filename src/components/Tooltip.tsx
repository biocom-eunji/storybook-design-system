import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { semanticColor, fontWeight, textStyle, spacing, radius, opacity, shadow } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────

export type TooltipSize = 'small' | 'medium';
export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';
export type TooltipAlignHorizontal = 'leading' | 'center' | 'trailing';
export type TooltipAlignVertical = 'top' | 'center' | 'bottom';

export type TooltipProps = {
  /** 툴팁 내용 */
  content: string;
  /** 크기 */
  size?: TooltipSize;
  /** 표시 여부 */
  visible?: boolean;
} & (
  | {
      /** 툴팁 위치 (anchor 기준) */
      position: 'top' | 'bottom';
      /** 화살표 정렬 (가로축) */
      align?: TooltipAlignVertical;
    }
  | {
      position: 'left' | 'right';
      /** 화살표 정렬 (세로축) */
      align?: TooltipAlignHorizontal;
    }
);

// ─── Constants ──────────────────────────────────────────────

const ARROW_SIZE = 6;

const SIZE_CONFIG = {
  medium: {
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    fontSize: textStyle.label1.fontSize,
    lineHeight: textStyle.label1.lineHeight,
    fontWeight: fontWeight.medium,
    maxWidth: 240,
  },
  small: {
    paddingVertical: 6,
    paddingHorizontal: spacing.small + 2, // 10
    fontSize: textStyle.caption.fontSize,
    lineHeight: textStyle.caption.lineHeight,
    fontWeight: fontWeight.regular,
    maxWidth: 200,
  },
} as const;

// ─── Component ──────────────────────────────────────────────

export function Tooltip({
  content,
  size = 'medium',
  position = 'top',
  align,
  visible = true,
}: TooltipProps) {
  if (!visible) return null;

  const config = SIZE_CONFIG[size];
  const isVertical = position === 'top' || position === 'bottom';

  // Default align
  const resolvedAlign = align ?? (isVertical ? 'leading' : 'top');

  // Arrow position style
  const arrowStyle = getArrowStyle(position, resolvedAlign);

  return (
    <View style={[styles.wrapper, getWrapperAlignment(position)]}>
      {/* Arrow on top/left */}
      {(position === 'bottom' || position === 'right') && (
        <View style={arrowStyle} />
      )}

      {/* Tooltip body */}
      <View style={[
        styles.body,
        {
          paddingVertical: config.paddingVertical,
          paddingHorizontal: config.paddingHorizontal,
          maxWidth: config.maxWidth,
        },
      ]}>
        <Text style={[
          styles.text,
          {
            fontSize: config.fontSize,
            lineHeight: config.lineHeight,
            fontWeight: config.fontWeight,
          },
        ]}>
          {content}
        </Text>
      </View>

      {/* Arrow on bottom/right */}
      {(position === 'top' || position === 'left') && (
        <View style={arrowStyle} />
      )}
    </View>
  );
}

// ─── Arrow Helpers ──────────────────────────────────────────

function getWrapperAlignment(position: TooltipPosition): ViewStyle {
  if (position === 'top' || position === 'bottom') {
    return { flexDirection: 'column', alignItems: 'flex-start' };
  }
  return { flexDirection: 'row', alignItems: 'flex-start' };
}

function getArrowStyle(position: TooltipPosition, align: string): ViewStyle {
  const base: ViewStyle = {
    width: 0,
    height: 0,
    borderStyle: 'solid',
  };

  const color = semanticColor.backgroundInverse;

  // Cross-axis offset
  let crossOffset: ViewStyle = {};
  if (position === 'top' || position === 'bottom') {
    if (align === 'leading') crossOffset = { marginLeft: spacing.medium };
    else if (align === 'center') crossOffset = { alignSelf: 'center' };
    else if (align === 'trailing') crossOffset = { alignSelf: 'flex-end', marginRight: spacing.medium };
  } else {
    if (align === 'top') crossOffset = { marginTop: spacing.small };
    else if (align === 'center') crossOffset = { alignSelf: 'center' };
    else if (align === 'bottom') crossOffset = { alignSelf: 'flex-end', marginBottom: spacing.small };
  }

  switch (position) {
    case 'top': // arrow points down
      return {
        ...base,
        ...crossOffset,
        borderLeftWidth: ARROW_SIZE,
        borderRightWidth: ARROW_SIZE,
        borderTopWidth: ARROW_SIZE,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: color,
      };
    case 'bottom': // arrow points up
      return {
        ...base,
        ...crossOffset,
        borderLeftWidth: ARROW_SIZE,
        borderRightWidth: ARROW_SIZE,
        borderBottomWidth: ARROW_SIZE,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: color,
      };
    case 'left': // arrow points right
      return {
        ...base,
        ...crossOffset,
        borderTopWidth: ARROW_SIZE,
        borderBottomWidth: ARROW_SIZE,
        borderLeftWidth: ARROW_SIZE,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: color,
      };
    case 'right': // arrow points left
      return {
        ...base,
        ...crossOffset,
        borderTopWidth: ARROW_SIZE,
        borderBottomWidth: ARROW_SIZE,
        borderRightWidth: ARROW_SIZE,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: color,
      };
  }
}

// ─── Styles ─────────────────────────────────────────────────

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
  } as ViewStyle,
  body: {
    backgroundColor: semanticColor.backgroundInverse,
    borderRadius: radius.small,
    ...shadow.level2,
  } as ViewStyle,
  text: {
    color: semanticColor.textOnColor,
  } as TextStyle,
});
