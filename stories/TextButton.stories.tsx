import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextButton } from '../src/components/TextButton';
import {
  Section, StateLabel, Row, Col, CodeBlock, CompareGrid, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, textButtonToken } from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────
// Figma 시맨틱 토큰명과 theme.ts textButtonToken의 1:1 매핑

const TOKEN_MAP = {
  primary: {
    content:         'color/text/brand',
    contentPressed:  'role/brandPressed',
    contentDisabled: 'color/text/tertiary',
  },
  assistive: {
    content:         'color/text/secondary',
    contentPressed:  'Mono/coolNeutral30',
    contentDisabled: 'color/text/tertiary',
  },
} as const;

const SIZE_TOKEN_MAP = {
  small:  { typography: 'Label 2', fontSize: 'fontSize/small',  lineHeight: 'lineHeight/small' },
  medium: { typography: 'Body 2',  fontSize: 'fontSize/medium', lineHeight: 'lineHeight/large' },
} as const;

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof TextButton> = {
  title: 'Actions/TextButton',
  component: TextButton,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'assistive'],
      description: '텍스트 버튼 컬러 (Figma: Color)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: '텍스트 버튼 크기 (Figma: Size)',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태 (Figma: Disable)',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    label: {
      control: 'text',
      description: '버튼 텍스트',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextButton>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: '더보기',
    color: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: `color/text/brand`, `Body 2`, 배경 없음 (transparent), 밑줄 스타일',
      },
    },
  },
};

// ─── 2. 모든 변형 (Color × Size 매트릭스) ────────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="모든 변형"
        description="color(primary/assistive) × size(small/medium)의 모든 조합을 확인합니다."
      >
        <Row gap={spacing['2xlarge']} wrap>
          {(['primary', 'assistive'] as const).map(color =>
            (['small', 'medium'] as const).map(size => (
              <Col key={`${color}-${size}`} gap={spacing.small}>
                <StateLabel>{`${color} / ${size}`}</StateLabel>
                <Row gap={spacing.large}>
                  <TextButton label="더보기" color={color} size={size} />
                  <TextButton label="더보기" color={color} size={size} disabled />
                </Row>
              </Col>
            ))
          )}
        </Row>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**Primary**: `color/text/brand` (민트)',
          '**Assistive**: `color/text/secondary` (그레이)',
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
        description="Small(Label 2)과 Medium(Body 2) 두 가지 크기를 비교합니다."
      >
        <Row gap={spacing.xlarge} align="flex-end">
          {(['small', 'medium'] as const).map(size => (
            <Col key={size} gap={spacing.small}>
              <StateLabel>{`${size} — ${SIZE_TOKEN_MAP[size].typography}`}</StateLabel>
              <TextButton label="더보기" color="primary" size={size} />
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
          '**Small**: `Label 2` (13px · Medium · lineHeight 18px)',
          '**Medium**: `Body 2` (15px · Regular · lineHeight 22px)',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 4. 상태 ─────────────────────────────────────────────────

export const States: Story = {
  name: '상태',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="상태"
        description="기본, 비활성화, 로딩 상태를 확인합니다. 눌림(Pressed) 상태는 인터랙션으로 확인하세요."
      >
        <CompareGrid
          items={[
            {
              label: 'Primary 기본',
              content: <TextButton label="더보기" color="primary" size="medium" />,
            },
            {
              label: 'Primary 비활성화',
              content: <TextButton label="더보기" color="primary" size="medium" disabled />,
            },
            {
              label: 'Primary 로딩',
              content: <TextButton label="더보기" color="primary" size="medium" loading />,
            },
          ]}
        />

        <Divider />

        <CompareGrid
          items={[
            {
              label: 'Assistive 기본',
              content: <TextButton label="더보기" color="assistive" size="medium" />,
            },
            {
              label: 'Assistive 비활성화',
              content: <TextButton label="더보기" color="assistive" size="medium" disabled />,
            },
            {
              label: 'Assistive 로딩',
              content: <TextButton label="더보기" color="assistive" size="medium" loading />,
            },
          ]}
        />
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**기본 Primary**: `color/text/brand`',
          '**눌림 Primary**: `role/brandPressed`',
          '**비활성화**: `color/text/tertiary`',
          '**로딩**: content 토큰 색상으로 ActivityIndicator 표시',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 5. 프리셋 ───────────────────────────────────────────────

export const PrimaryMedium: Story = {
  name: 'Primary / Medium',
  args: { label: '더보기', color: 'primary', size: 'medium' },
  parameters: { docs: { description: { story: '`color/text/brand` · `Body 2` · 밑줄' } } },
};

export const PrimarySmall: Story = {
  name: 'Primary / Small',
  args: { label: '더보기', color: 'primary', size: 'small' },
  parameters: { docs: { description: { story: '`color/text/brand` · `Label 2` · 밑줄' } } },
};

export const AssistiveMedium: Story = {
  name: 'Assistive / Medium',
  args: { label: '더보기', color: 'assistive', size: 'medium' },
  parameters: { docs: { description: { story: '`color/text/secondary` · `Body 2` · 밑줄' } } },
};

export const AssistiveSmall: Story = {
  name: 'Assistive / Small',
  args: { label: '더보기', color: 'assistive', size: 'small' },
  parameters: { docs: { description: { story: '`color/text/secondary` · `Label 2` · 밑줄' } } },
};

// ─── 6. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => {
    const colors = ['primary', 'assistive'] as const;
    const sizes = ['small', 'medium'] as const;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 TextButton 전체 조합 스펙입니다."
          badge="디자인"
        >
          {colors.map(color => {
            const ct = textButtonToken.color[color];
            return (
              <View key={color}>
                <TokenSpecTable
                  title={`color: ${color}`}
                  rows={[
                    { property: '배경색',           token: '—',                              value: 'transparent' },
                    { property: '텍스트',           token: TOKEN_MAP[color].content,          value: ct.content,         type: 'color' },
                    { property: '텍스트 (눌림)',     token: TOKEN_MAP[color].contentPressed,   value: ct.contentPressed,  type: 'color' },
                    { property: '텍스트 (비활성)',   token: TOKEN_MAP[color].contentDisabled,  value: ct.contentDisabled, type: 'color' },
                    { property: '텍스트 장식',       token: '—',                              value: 'underline' },
                    { property: '아이콘-텍스트 간격', token: 'spacing/xsmall',                 value: spacing.xsmall,     type: 'size' },
                  ]}
                />
                <Divider />
              </View>
            );
          })}

          {sizes.map(size => (
            <TokenSpecTable
              key={size}
              title={`크기: ${size}`}
              rows={[
                { property: 'fontSize',   token: SIZE_TOKEN_MAP[size].fontSize,   value: textButtonToken.size[size].fontSize,   type: 'size' },
                { property: 'lineHeight', token: SIZE_TOKEN_MAP[size].lineHeight,  value: textButtonToken.size[size].lineHeight, type: 'size' },
                { property: '타이포',      token: SIZE_TOKEN_MAP[size].typography, value: SIZE_TOKEN_MAP[size].typography },
              ]}
            />
          ))}
        </Section>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '디자이너·개발자를 위한 Figma 시맨틱 토큰 기준 전체 조합 스펙 문서입니다.',
      },
    },
  },
};

// ─── 7. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 TextButton 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { TextButton } from '@design-system/components/TextButton';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<TextButton label="더보기" onPress={handlePress} />`}
        />

        <CodeBlock
          title="Color 조합"
          code={`<TextButton label="더보기" color="primary" />
<TextButton label="건너뛰기" color="assistive" />`}
        />

        <CodeBlock
          title="크기 지정"
          code={`<TextButton label="Small" size="small" />
<TextButton label="Medium" size="medium" />`}
        />

        <CodeBlock
          title="비활성화 & 로딩"
          code={`<TextButton label="더보기" disabled />
<TextButton label="로딩 중..." loading />`}
        />

        <CodeBlock
          title="Button과 함께 사용 (ActionArea 패턴)"
          code={`<View style={{ flexDirection: 'row', gap: spacing.medium, alignItems: 'center' }}>
  <Button label="확인" variant="solid" color="primary" />
  <TextButton label="건너뛰기" color="assistive" />
</View>`}
        />
      </Section>
    </View>
  ),
};
