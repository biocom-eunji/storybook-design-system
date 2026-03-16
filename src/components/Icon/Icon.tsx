import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconPaths, type IconName } from './iconPaths';

export interface IconProps {
  /** 아이콘 이름 (icon-svg-handoff-list.xlsx 기준) */
  name: IconName;
  /** 아이콘 크기 (width = height), 기본 24 */
  size?: number;
  /** 직접 색상 지정 — 생략하면 엑셀에 정의된 기본 색상 사용 */
  color?: string;
  /** 활성화 상태 (activeColor/inactiveColor가 정의된 아이콘에 적용) */
  active?: boolean;
}

export function Icon({ name, size = 24, color, active }: IconProps) {
  const meta = iconPaths[name];

  if (!meta) {
    if (__DEV__) {
      console.warn(`[Icon] "${name}" is not a registered icon name.`);
    }
    return null;
  }

  let fillColor: string;
  if (color) {
    fillColor = color;
  } else if (active !== undefined && meta.activeColor && meta.inactiveColor) {
    fillColor = active ? meta.activeColor : meta.inactiveColor;
  } else {
    fillColor = meta.defaultColor;
  }

  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" fill="none">
      <Path d={meta.path} fill={fillColor} />
    </Svg>
  );
}
