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
import { phosphorMap, type PhosphorIconName, type IconVariant } from './phosphorMap';

export interface IconProps {
  /** 아이콘 이름 */
  name: string;
  /** 아이콘 카테고리: normal | color | circle | mini */
  style?: IconStyle;
  /** Phosphor weight (normal 카테고리에서만 적용) */
  variant?: IconVariant;
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

export function Icon({
  name,
  style = 'normal',
  variant = 'regular',
  size,
  color,
  active,
}: IconProps) {
  const resolvedSize = size ?? DEFAULT_SIZES[style];

  if (style === 'normal') {
    // Phosphor 라이브러리 매핑이 있으면 직접 렌더링
    const entry = phosphorMap[name as PhosphorIconName];
    if (entry) {
      const { component: PhosphorComponent, defaultWeight } = entry;
      const resolvedWeight = variant !== 'regular' ? variant : defaultWeight;
      return (
        <PhosphorComponent
          size={resolvedSize}
          color={color ?? '#212225'}
          weight={resolvedWeight}
        />
      );
    }

    // Fallback: 기존 iconRegistry (커스텀 아이콘)
    const registryEntry = normalIcons[name];
    if (!registryEntry) {
      if (__DEV__) {
        console.warn(`[Icon] "${name}" is not a registered icon name.`);
      }
      return null;
    }

    let fillColor: string;
    if (color) {
      fillColor = color;
    } else if (active !== undefined && registryEntry.activeColor && registryEntry.inactiveColor) {
      fillColor = active ? registryEntry.activeColor : registryEntry.inactiveColor;
    } else {
      fillColor = registryEntry.defaultColor;
    }

    const vb = registryEntry.viewBox ?? '0 0 256 256';
    const pathList = registryEntry.paths ?? (registryEntry.path ? [registryEntry.path] : []);

    return (
      <Svg width={resolvedSize} height={resolvedSize} viewBox={vb} fill="none">
        {pathList.map((d, i) => (
          <Path key={i} d={d} fill={fillColor} />
        ))}
      </Svg>
    );
  }

  // Color, Circle, Mini — 기존 레지스트리 유지
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
  const overridden = colorOverride
    ? { ...props, ...(props.fill ? { fill: colorOverride } : {}), ...(props.stroke ? { stroke: colorOverride } : {}) }
    : props;

  switch (tag) {
    case 'path':
      return <Path key={key} {...overridden} />;
    case 'circle':
      return <Circle key={key} {...overridden} />;
    case 'rect':
      return <Rect key={key} {...overridden} />;
    case 'ellipse':
      return <Ellipse key={key} {...overridden} />;
    case 'line':
      return <Line key={key} {...overridden} />;
    default:
      return null;
  }
}
