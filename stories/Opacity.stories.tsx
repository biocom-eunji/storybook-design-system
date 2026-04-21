import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { opacity, spacing } from '../src/tokens/theme';

const meta: Meta = {
  title: 'Design Tokens/Opacity',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const OpacityScale: Story = {
  name: 'Opacity Scale',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Opacity Tokens"
        description="Figma Opacity 스케일과 1:1 매핑되는 투명도 토큰입니다. 모든 opacity 사용은 이 스케일 내에서만 이루어져야 합니다."
      >
        <TokenSpecTable
          title="Opacity Scale (15단계)"
          rows={[
            { property: 'Opacity 0 — 완전 투명, hide 상태',          token: 'opacity/0',   value: opacity[0],   type: 'opacity' },
            { property: 'Opacity 5 — 극미세 overlay',                token: 'opacity/5',   value: opacity[5],   type: 'opacity' },
            { property: 'Opacity 8 — hover overlay (light)',         token: 'opacity/8',   value: opacity[8],   type: 'opacity' },
            { property: 'Opacity 12 — pressed overlay, 미세 구분선', token: 'opacity/12',  value: opacity[12],  type: 'opacity' },
            { property: 'Opacity 16 — focus ring, subtle overlay',   token: 'opacity/16',  value: opacity[16],  type: 'opacity' },
            { property: 'Opacity 22 — disabled (light mode)',        token: 'opacity/22',  value: opacity[22],  type: 'opacity' },
            { property: 'Opacity 28 — muted content',                token: 'opacity/28',  value: opacity[28],  type: 'opacity' },
            { property: 'Opacity 35 — disabled (일반)',              token: 'opacity/35',  value: opacity[35],  type: 'opacity' },
            { property: 'Opacity 43 — secondary muted',              token: 'opacity/43',  value: opacity[43],  type: 'opacity' },
            { property: 'Opacity 52 — semi-transparent',             token: 'opacity/52',  value: opacity[52],  type: 'opacity' },
            { property: 'Opacity 61 — tertiary text overlay',        token: 'opacity/61',  value: opacity[61],  type: 'opacity' },
            { property: 'Opacity 74 — near-solid overlay',           token: 'opacity/74',  value: opacity[74],  type: 'opacity' },
            { property: 'Opacity 88 — scrim (dialog 뒤 배경)',       token: 'opacity/88',  value: opacity[88],  type: 'opacity' },
            { property: 'Opacity 97 — almost opaque',                token: 'opacity/97',  value: opacity[97],  type: 'opacity' },
            { property: 'Opacity 100 — 완전 불투명',                  token: 'opacity/100', value: opacity[100], type: 'opacity' },
          ]}
        />
      </Section>
    </View>
  ),
};
