import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  type ImageSourcePropType,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { coolNeutral, mint, palette, fontWeight } from '../tokens/theme';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

/** Avatar — 사용자 프로필 이미지/이니셜 */
export interface AvatarProps {
  source?: ImageSourcePropType;
  name?: string;
  size?: AvatarSize;
  online?: boolean;
  /** 접근성 라벨 */
  accessibilityLabel?: string;
}

const sizeMap = {
  small: { container: 32, fontSize: 13, onlineDot: 8 },
  medium: { container: 40, fontSize: 15, onlineDot: 10 },
  large: { container: 56, fontSize: 20, onlineDot: 12 },
  xlarge: { container: 80, fontSize: 28, onlineDot: 16 },
} as const;

export function Avatar({
  source,
  name,
  size = 'medium',
  online,
  accessibilityLabel,
}: AvatarProps) {
  const sizeToken = sizeMap[size];
  const containerSize = sizeToken.container;

  const containerStyle: ViewStyle = {
    width: containerSize,
    height: containerSize,
    borderRadius: containerSize / 2,
    backgroundColor: coolNeutral[97],
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const initialStyle: TextStyle = {
    fontSize: sizeToken.fontSize,
    fontWeight: fontWeight.medium,
    color: coolNeutral[50],
  };

  const initial = name ? name.charAt(0).toUpperCase() : '?';

  const onlineDotSize = sizeToken.onlineDot;
  const borderWidth = 2;

  return (
    <View style={styles.wrapper} accessibilityLabel={accessibilityLabel || name}>
      <View style={containerStyle}>
        {source ? (
          <Image
            source={source}
            style={{
              width: containerSize,
              height: containerSize,
              borderRadius: containerSize / 2,
            }}
          />
        ) : (
          <Text style={initialStyle}>{initial}</Text>
        )}
      </View>
      {online && (
        <View
          style={[
            styles.onlineDot,
            {
              width: onlineDotSize + borderWidth * 2,
              height: onlineDotSize + borderWidth * 2,
              borderRadius: (onlineDotSize + borderWidth * 2) / 2,
              borderWidth,
              borderColor: palette.white,
              backgroundColor: mint[45],
            },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
