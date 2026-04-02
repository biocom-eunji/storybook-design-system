import React from 'react';
import { View } from 'react-native';

/**
 * 아이콘 ReactNode에 size와 color를 주입하는 유틸리티.
 * Chip, TextButton 등에서 leadingIcon/trailingIcon 렌더링에 사용.
 */
export function renderIcon(
  icon: React.ReactNode,
  size: number,
  color: string,
): React.ReactNode {
  if (!icon) return null;

  return (
    <View style={{ width: size, height: size }}>
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<any>, {
            width: size,
            height: size,
            color,
          })
        : icon}
    </View>
  );
}
