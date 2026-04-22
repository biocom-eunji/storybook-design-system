import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '../src/components/Chip';
import {
  Section, StateLabel, Row, Col, CodeBlock, CompareGrid, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, chipToken, semanticColor } from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────

const COLOR_TOKEN_MAP = {
  solid: {
    inactive: {
      background: 'color/background/tertiary',
      content:    'color/text/secondary',
    },
    active: {
      background: 'color/background/inverse',
      content:    'color/text/onColor',
    },
    disabled: {
      background: 'color/background/tertiary',
      content:    'color/text/tertiary',
    },
  },
  outlined: {
    inactive: {
      background: 'transparent',
      content:    'color/text/secondary',
      border:     'color/border/active',
    },
    active: {
      background: 'transparent',
      content:    'color/text/brand',
      border:     'color/border/focus',
    },
    disabled: {
      background: 'transparent',
      content:    'color/text/tertiary',
      border:     'color/border/default',
    },
  },
} as const;

const SIZE_TOKEN_MAP = {
  xsmall: { height: 'component/chip/size/xsmall/height', paddingH: 'component/chip/size/xsmall/paddingH', typography: 'Caption',  radius: 'borderRadius/xsmall' },
  small:  { height: 'component/chip/size/small/height',  paddingH: 'component/chip/size/small/paddingH',  typography: 'Caption',  radius: 'borderRadius/small' },
  medium: { height: 'component/chip/size/medium/height', paddingH: 'component/chip/size/medium/paddingH', typography: 'Label 2',  radius: 'borderRadius/small' },
  large:  { height: 'component/chip/size/large/height',  paddingH: 'component/chip/size/large/paddingH',  typography: 'Body 2',   radius: 'borderRadius/medium' },
} as const;

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof Chip> = {
  title: 'Input/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined'],
      description: '칩 스타일 변형 (Figma: Variant)',
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large'],
      description: '칩 크기 (Figma: Size)',
    },
    active: {
      control: 'boolean',
      description: '선택 상태 (Figma: Active)',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화',
    },
    label: {
      control: 'text',
      description: '칩 텍스트',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    const categories = ['식단', '수면', '운동', '영양제'];
    return (
      <Row gap={spacing.small} wrap>
        {categories.map(cat => (
          <Chip
            key={cat}
            label={cat}
            variant="solid"
            size="medium"
            active={selected === cat}
            onPress={() => setSelected(selected === cat ? null : cat)}
          />
        ))}
      </Row>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: `color/background/tertiary`, `color/text/secondary`, `Label 2`, `borderRadius/small`. 클릭하여 활성/비활성을 토글합니다.',
      },
    },
  },
};

// ─── 2. 모든 변형 (Variant × State 매트릭스) ─────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="모든 변형"
        description="variant(solid/outlined) × state(inactive/active/disabled)의 모든 조합을 확인합니다."
      >
        {(['solid', 'outlined'] as const).map(variant => (
          <View key={variant} style={{ marginBottom: spacing.xlarge }}>
            <StateLabel>{variant}</StateLabel>
            <Row gap={spacing.medium} wrap>
              <Chip label="비선택" variant={variant} size="medium" />
              <Chip label="선택됨" variant={variant} size="medium" active />
              <Chip label="비활성" variant={variant} size="medium" disabled />
            </Row>
          </View>
        ))}
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**Solid Inactive**: `color/background/tertiary` + `color/text/quaternary`',
          '**Solid Active**: `color/background/inverse` + `color/text/onColor`',
          '**Outlined Active**: `transparent` + `color/text/brand` + `color/border/focus`',
          '**Disabled 공통**: `color/text/tertiary`',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 3. 크기 비교 ────────────────────────────────────────────

export const Sizes: Story = {
  name: '크기 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="크기 비교"
        description="XSmall(24px), Small(28px), Medium(32px), Large(38px) 네 가지 크기를 비교합니다."
      >
        <Row gap={spacing.medium} align="flex-end" wrap>
          {(['xsmall', 'small', 'medium', 'large'] as const).map(size => (
            <Col key={size} gap={spacing.small}>
              <StateLabel>{`${size} — ${chipToken.size[size].height}px`}</StateLabel>
              <Chip label="카테고리" variant="solid" size={size} active />
            </Col>
          ))}
        </Row>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**XSmall**: height 24 · `Caption` · `borderRadius/xsmall`',
          '**Small**: height 28 · `Caption` · `borderRadius/small`',
          '**Medium**: height 32 · `Label 2` · `borderRadius/small`',
          '**Large**: height 38 · `Body 2` · `borderRadius/medium`',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 4. 인터랙티브 데모 (Filter Chip 패턴) ───────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['식단']);
    const categories = ['식단', '수면', '운동', '영양제', '수분'];

    const toggle = (cat: string) => {
      setSelected(prev =>
        prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
      );
    };

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="Filter Chip 패턴입니다. 복수 선택 가능합니다."
        >
          <View style={{ gap: spacing.xlarge }}>
            <Col gap={spacing.small}>
              <StateLabel>Solid</StateLabel>
              <Row gap={spacing.small} wrap>
                {categories.map(cat => (
                  <Chip
                    key={cat}
                    label={cat}
                    variant="solid"
                    size="medium"
                    active={selected.includes(cat)}
                    onPress={() => toggle(cat)}
                  />
                ))}
              </Row>
            </Col>

            <Divider />

            <Col gap={spacing.small}>
              <StateLabel>Outlined</StateLabel>
              <Row gap={spacing.small} wrap>
                {categories.map(cat => (
                  <Chip
                    key={cat}
                    label={cat}
                    variant="outlined"
                    size="medium"
                    active={selected.includes(cat)}
                    onPress={() => toggle(cat)}
                  />
                ))}
              </Row>
            </Col>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 5. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => {
    const variants = ['solid', 'outlined'] as const;
    const states = ['inactive', 'active', 'disabled'] as const;
    const sizes = ['xsmall', 'small', 'medium', 'large'] as const;

    const resolve: Record<string, string> = {
      'color/background/tertiary':  semanticColor.backgroundTertiary,
      'color/background/inverse':   semanticColor.backgroundInverse,
      'color/background/disabled':  semanticColor.backgroundDisabled,
      'color/text/onColor':         semanticColor.textOnColor,
      'color/text/brand':           semanticColor.textBrand,
      'color/border/active':        semanticColor.borderActive,
      'color/border/focus':         semanticColor.borderFocus,
      'color/border/default':       semanticColor.borderDefault,
      'color/text/secondary':         semanticColor.textSecondary,
      'color/text/tertiary':         semanticColor.textTertiary,
    };
    const r = (token: string) => resolve[token] ?? token;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 Chip 전체 조합 스펙입니다."
          badge="디자인"
        >
          {variants.map(variant =>
            states.map(state => {
              const ct = COLOR_TOKEN_MAP[variant][state];
              const rows = [
                { property: '배경색',   token: ct.background, value: r(ct.background), type: 'color' as const },
                { property: '텍스트',   token: ct.content,    value: r(ct.content),    type: 'color' as const },
              ];
              if ('border' in ct) {
                rows.push({ property: '테두리', token: ct.border, value: r(ct.border), type: 'color' as const });
              }
              return (
                <View key={`${variant}-${state}`}>
                  <TokenSpecTable title={`${variant} / ${state}`} rows={rows} />
                  <Divider />
                </View>
              );
            })
          )}

          {sizes.map(size => (
            <TokenSpecTable
              key={size}
              title={`크기: ${size}`}
              rows={[
                { property: '높이',         token: SIZE_TOKEN_MAP[size].height,   value: chipToken.size[size].height,            type: 'size' },
                { property: '좌우 패딩',     token: SIZE_TOKEN_MAP[size].paddingH, value: chipToken.size[size].paddingHorizontal, type: 'size' },
                { property: '코너 라디우스', token: SIZE_TOKEN_MAP[size].radius,   value: chipToken.size[size].radius,            type: 'size' },
                { property: '아이콘 크기',   token: '—',                           value: chipToken.size[size].iconSize,          type: 'size' },
                { property: '타이포',       token: SIZE_TOKEN_MAP[size].typography, value: SIZE_TOKEN_MAP[size].typography },
                { property: '아이콘-텍스트 간격', token: 'spacing/xsmall',          value: spacing.xsmall,                        type: 'size' },
              ]}
            />
          ))}
        </Section>
      </View>
    );
  },
};

// ─── 6. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 Chip 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { Chip } from '@design-system/components/Chip';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<Chip label="카테고리" onPress={handlePress} />`}
        />

        <CodeBlock
          title="Variant + Active 조합"
          code={`<Chip label="식단" variant="solid" active />
<Chip label="수면" variant="outlined" active />
<Chip label="운동" variant="solid" disabled />`}
        />

        <CodeBlock
          title="Filter Chip 패턴 (복수 선택)"
          code={`const [selected, setSelected] = useState<string[]>([]);

const toggle = (cat: string) => {
  setSelected(prev =>
    prev.includes(cat)
      ? prev.filter(c => c !== cat)
      : [...prev, cat]
  );
};

{categories.map(cat => (
  <Chip
    key={cat}
    label={cat}
    variant="solid"
    size="medium"
    active={selected.includes(cat)}
    onPress={() => toggle(cat)}
  />
))}`}
        />

        <CodeBlock
          title="크기 지정"
          code={`<Chip label="XS" size="xsmall" />
<Chip label="S" size="small" />
<Chip label="M" size="medium" />
<Chip label="L" size="large" />`}
        />
      </Section>
    </View>
  ),
};
