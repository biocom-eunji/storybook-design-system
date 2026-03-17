import React from 'react';
import Svg, { Path, Circle, Rect, Ellipse, Line } from 'react-native-svg';
import {
  normalIcons,
  colorIcons,
  circleIcons,
  miniIcons,
  type IconStyle,
  type SvgElement,
} from './iconRegistry';

export interface IconProps {
  /** 아이콘 이름 */
  name: string;
  /** 아이콘 카테고리: normal | color | circle | mini */
  style?: IconStyle;
  /** 아이콘 크기 (width = height), 카테고리별 기본값 적용 */
  size?: number;
  /** 직접 색상 지정 — 생략하면 레지스트리에 정의된 기본 색상 사용 */
  color?: string;
  /** 활성화 상태 (activeColor/inactiveColor가 정의된 아이콘에 적용) */
  active?: boolean;
}

const DEFAULT_SIZES: Record<IconStyle, number> = {
  normal: 24,
  color: 32,
  circle: 48,
  mini: 20,
};

export function Icon({ name, style = 'normal', size, color, active }: IconProps) {
  const resolvedSize = size ?? DEFAULT_SIZES[style];

  if (style === 'normal') {
    const entry = normalIcons[name];

    if (!entry) {
      if (__DEV__) {
        console.warn(`[Icon] "${name}" is not a registered normal icon name.`);
      }
      return null;
    }

    let fillColor: string;
    if (color) {
      fillColor = color;
    } else if (active !== undefined && entry.activeColor && entry.inactiveColor) {
      fillColor = active ? entry.activeColor : entry.inactiveColor;
    } else {
      fillColor = entry.defaultColor;
    }

    return (
      <Svg width={resolvedSize} height={resolvedSize} viewBox="0 0 256 256" fill="none">
        <Path d={entry.path} fill={fillColor} />
      </Svg>
    );
  }

  // Color, Circle, Mini
  const registry =
    style === 'color'
      ? colorIcons
      : style === 'circle'
        ? circleIcons
        : miniIcons;

  const entry = registry[name];

  if (!entry) {
    if (__DEV__) {
      console.warn(`[Icon] "${name}" is not a registered ${style} icon name.`);
    }
    return null;
  }

  const viewBox = entry.viewBox ?? '0 0 256 256';

  return (
    <Svg width={resolvedSize} height={resolvedSize} viewBox={viewBox} fill="none">
      {entry.elements.map((el, i) => renderElement(el, i, color))}
    </Svg>
  );
}

function renderElement(el: SvgElement, key: number, colorOverride?: string) {
  const { tag, ...props } = el;

  switch (tag) {
    case 'path':
      return <Path key={key} {...props} />;
    case 'circle':
      return <Circle key={key} {...props} />;
    case 'rect':
      return <Rect key={key} {...props} />;
    case 'ellipse':
      return <Ellipse key={key} {...props} />;
    case 'line':
      return <Line key={key} {...props} />;
    default:
      return null;
  }
}
