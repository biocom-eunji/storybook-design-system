import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { Button, type ButtonProps } from './Button';
import { actionAreaToken, coolNeutral, spacing, radius } from '../tokens/theme';

export type ActionAreaVariant = 'strong' | 'neutral' | 'compact' | 'cancel';

export interface ActionAreaProps {
  /** 레이아웃 변형 */
  variant?: ActionAreaVariant;
  /** 메인(Primary) 버튼 props */
  primary: Omit<ButtonProps, 'variant' | 'color' | 'size'> & {
    label: string;
  };
  /** 보조(Secondary) 버튼 props — neutral, compact, cancel에서 사용 */
  secondary?: Omit<ButtonProps, 'variant' | 'color' | 'size'> & {
    label: string;
  };
  /** 제3(Tertiary) 버튼 props — neutral에서 사용 */
  tertiary?: Omit<ButtonProps, 'variant' | 'color' | 'size'> & {
    label: string;
  };
  /** 상단 구분선 표시 여부 */
  divider?: boolean;
  /** 배경색 투명 여부 (기본: 흰색) */
  transparent?: boolean;
}

export function ActionArea({
  variant = 'strong',
  primary,
  secondary,
  tertiary,
  divider = true,
  transparent = false,
}: ActionAreaProps) {
  const containerStyle: ViewStyle = {
    paddingHorizontal: actionAreaToken.padding,
    paddingVertical: spacing.md,
    gap: actionAreaToken.gap,
    backgroundColor: transparent ? 'transparent' : '#FFFFFF',
    borderTopWidth: divider ? 1 : 0,
    borderTopColor: coolNeutral[96],
  };

  switch (variant) {
    // ─── Strong: CTA 강조형 — 메인 액션 하나만 노출
    case 'strong':
      return (
        <View style={containerStyle}>
          <Button
            {...primary}
            variant="solid"
            color="primary"
            size="large"
          />
        </View>
      );

    // ─── Neutral: 보조/대체/메인 복합 액션
    case 'neutral':
      return (
        <View style={containerStyle}>
          {tertiary && (
            <Button
              {...tertiary}
              variant="outlined"
              color="assistive"
              size="medium"
            />
          )}
          <View style={{ flexDirection: 'row', gap: actionAreaToken.gap }}>
            {secondary && (
              <View style={{ flex: 1 }}>
                <Button
                  {...secondary}
                  variant="outlined"
                  color="assistive"
                  size="large"
                />
              </View>
            )}
            <View style={{ flex: secondary ? 2 : 1 }}>
              <Button
                {...primary}
                variant="solid"
                color="primary"
                size="large"
              />
            </View>
          </View>
        </View>
      );

    // ─── Compact: 작은 크기 복합 액션
    case 'compact':
      return (
        <View style={containerStyle}>
          <View style={{ flexDirection: 'row', gap: actionAreaToken.gap }}>
            {secondary && (
              <View style={{ flex: 1 }}>
                <Button
                  {...secondary}
                  variant="outlined"
                  color="assistive"
                  size="medium"
                />
              </View>
            )}
            <View style={{ flex: 1 }}>
              <Button
                {...primary}
                variant="solid"
                color="primary"
                size="medium"
              />
            </View>
          </View>
        </View>
      );

    // ─── Cancel: 취소/확인 단일 액션
    case 'cancel':
      return (
        <View style={containerStyle}>
          <View style={{ flexDirection: 'row', gap: actionAreaToken.gap }}>
            {secondary && (
              <View style={{ flex: 1 }}>
                <Button
                  {...secondary}
                  variant="solid"
                  color="assistive"
                  size="large"
                />
              </View>
            )}
            <View style={{ flex: 1 }}>
              <Button
                {...primary}
                variant="solid"
                color="primary"
                size="large"
              />
            </View>
          </View>
        </View>
      );

    default:
      return null;
  }
}
