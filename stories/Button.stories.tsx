import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/components/Button';
import {
  Section, StateLabel, Row, Col, CodeBlock, CompareGrid, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, buttonToken, semanticColor, textStyle, radius } from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────
// Figma 시맨틱 토큰명과 theme.ts buttonToken의 1:1 매핑

const TOKEN_MAP = {
  solid: {
    primary: {
      background:         'color/background/brand',
      backgroundPressed:  'color/background/brandPressed',
      backgroundDisabled: 'color/background/disabled',
      content:            'color/text/onColor',
      contentDisabled:    'color/text/tertiary',
    },
    assistive: {
      background:         'color/background/disabled',
      backgroundPressed:  'Mono/coolNeutral90',
      backgroundDisabled: 'color/background/disabled',
      content:            'color/text/primary',
      contentDisabled:    'color/text/tertiary',
    },
  },
  outlined: {
    primary: {
      background:         'transparent',
      backgroundPressed:  'Brand/mint99',
      backgroundDisabled: 'transparent',
      content:            'role/brand',
      contentDisabled:    'color/text/tertiary',
      border:             'color/border/focus',
      borderDisabled:     'color/border/default',
    },
    assistive: {
      background:         'transparent',
      backgroundPressed:  'Mono/coolNeutral97',
      backgroundDisabled: 'transparent',
      content:            'color/text/primary',
      contentDisabled:    'color/text/tertiary',
      border:             'color/border/active',
      borderDisabled:     'color/border/default',
    },
  },
} as const;

const SIZE_TOKEN_MAP = {
  small:  { height: 'component/button/size/small/height',  paddingH: 'component/button/size/small/paddingHorizontal',  typography: 'Label 2',   radius: 'borderRadius/small'  },
  medium: { height: 'component/button/size/medium/height', paddingH: 'component/button/size/medium/paddingHorizontal', typography: 'Body 2',    radius: 'borderRadius/medium' },
  large:  { height: 'component/button/size/large/height',  paddingH: 'component/button/size/large/paddingHorizontal',  typography: 'Headline',  radius: 'borderRadius/medium' },
} as const;

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined'],
      description: '버튼 스타일 변형 (Figma: Variant)',
    },
    color: {
      control: 'select',
      options: ['primary', 'assistive'],
      description: '버튼 컬러 (Figma: Color)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기 (Figma: Size)',
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
type Story = StoryObj<typeof Button>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: '확인',
    variant: 'solid',
    color: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: `color/background/brand`, `color/text/onColor`, `Body 2`, `component/button/size/medium/*`, `borderRadius/medium`',
      },
    },
  },
};

// ─── 2. 모든 변형 (Variant × Color 매트릭스) ─────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="모든 변형"
        description="variant(solid/outlined)와 color(primary/assistive)의 모든 조합을 확인합니다."
      >
        <Row gap={spacing['2xlarge']} wrap>
          {(['solid', 'outlined'] as const).map(variant =>
            (['primary', 'assistive'] as const).map(color => (
              <Col key={`${variant}-${color}`} gap={spacing.small}>
                <StateLabel>{`${variant} / ${color}`}</StateLabel>
                <Row gap={spacing.medium}>
                  <Button label="확인" variant={variant} color={color} size="medium" />
                  <Button label="확인" variant={variant} color={color} size="medium" disabled />
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
          '**Solid/Primary**: `color/background/brand` + `color/text/onColor`',
          '**Solid/Assistive**: `color/background/disabled` + `color/text/primary`',
          '**Outlined/Primary**: `transparent` + `color/border/focus` + `role/brand`',
          '**Outlined/Assistive**: `transparent` + `color/border/active` + `color/text/primary`',
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
        description="Small(36px), Medium(44px), Large(52px) 세 가지 크기를 나란히 비교합니다."
      >
        <Row gap={spacing.xlarge} align="flex-end">
          {(['small', 'medium', 'large'] as const).map(size => (
            <Col key={size} gap={spacing.small}>
              <StateLabel>{`${size.charAt(0).toUpperCase()} — ${buttonToken.size[size].height}px`}</StateLabel>
              <Button label="확인" variant="solid" color="primary" size={size} />
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
          '**Small**: `component/button/size/small/height`(36) · `Label 2` · `borderRadius/small`',
          '**Medium**: `component/button/size/medium/height`(44) · `Body 2` · `borderRadius/medium`',
          '**Large**: `component/button/size/large/height`(52) · `Headline` · `borderRadius/medium`',
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
        description="기본, 비활성화, 로딩 등 다양한 인터랙션 상태를 확인합니다."
      >
        <CompareGrid
          items={[
            {
              label: '기본',
              content: <Button label="확인" variant="solid" color="primary" size="small" />,
            },
            {
              label: '비활성화',
              content: <Button label="확인" variant="solid" color="primary" size="small" disabled />,
            },
            {
              label: '로딩',
              content: <Button label="확인" variant="solid" color="primary" size="small" loading />,
            },
          ]}
        />

        <Divider />

        <CompareGrid
          items={[
            {
              label: 'Outlined 기본',
              content: <Button label="확인" variant="outlined" color="primary" size="small" />,
            },
            {
              label: 'Outlined 비활성화',
              content: <Button label="확인" variant="outlined" color="primary" size="small" disabled />,
            },
            {
              label: 'Outlined 로딩',
              content: <Button label="확인" variant="outlined" color="primary" size="small" loading />,
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
          '**기본**: `color/background/brand`',
          '**비활성화**: `color/background/disabled` + `color/text/tertiary`',
          '**로딩**: 기본 배경 유지, `ActivityIndicator` 색상 = content 토큰',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 5. 전체 조합 프리셋 ─────────────────────────────────────

export const SolidPrimaryLarge: Story = {
  name: 'Solid / Primary / Large',
  args: { label: '확인', variant: 'solid', color: 'primary', size: 'large' },
  parameters: { docs: { description: { story: '`color/background/brand` · `color/text/onColor` · `Headline` · `borderRadius/medium`' } } },
};

export const SolidPrimarySmall: Story = {
  name: 'Solid / Primary / Small',
  args: { label: '확인', variant: 'solid', color: 'primary', size: 'small' },
  parameters: { docs: { description: { story: '`color/background/brand` · `color/text/onColor` · `Label 2` · `borderRadius/small`' } } },
};

export const SolidAssistiveMedium: Story = {
  name: 'Solid / Assistive / Medium',
  args: { label: '확인', variant: 'solid', color: 'assistive', size: 'medium' },
  parameters: { docs: { description: { story: '`color/background/disabled` · `color/text/primary` · `Body 2` · `borderRadius/medium`' } } },
};

export const OutlinedPrimaryMedium: Story = {
  name: 'Outlined / Primary / Medium',
  args: { label: '확인', variant: 'outlined', color: 'primary', size: 'medium' },
  parameters: { docs: { description: { story: '`transparent` + `color/border/focus` · `role/brand` · `Body 2` · `borderRadius/medium`' } } },
};

export const OutlinedAssistiveMedium: Story = {
  name: 'Outlined / Assistive / Medium',
  args: { label: '확인', variant: 'outlined', color: 'assistive', size: 'medium' },
  parameters: { docs: { description: { story: '`transparent` + `color/border/active` · `color/text/primary` · `Body 2` · `borderRadius/medium`' } } },
};

export const DisabledAll: Story = {
  name: 'Disabled 전체',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="비활성화 전체"
        description="모든 variant × color 조합의 disabled 상태입니다."
      >
        <Row gap={spacing.large} wrap>
          {(['solid', 'outlined'] as const).map(variant =>
            (['primary', 'assistive'] as const).map(color => (
              <Col key={`${variant}-${color}`} gap={spacing.small}>
                <StateLabel>{`${variant} / ${color}`}</StateLabel>
                <Button label="확인" variant={variant} color={color} size="medium" disabled />
              </Col>
            ))
          )}
        </Row>
      </Section>
    </View>
  ),
  parameters: { docs: { description: { story: '**Disabled 공통 텍스트**: `color/text/tertiary` · **Solid bg**: `color/background/disabled` · **Outlined border**: `color/border/default`' } } },
};

// ─── 6. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => {
    const variants = ['solid', 'outlined'] as const;
    const colors = ['primary', 'assistive'] as const;
    const sizes = ['small', 'medium', 'large'] as const;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 Button 전체 조합 스펙입니다."
          badge="디자인"
        >
          {variants.map(variant =>
            colors.map(color => {
              const ct = buttonToken.color[color][variant];
              return (
                <View key={`${variant}-${color}`}>
                  <TokenSpecTable
                    title={`${variant} / ${color}`}
                    rows={[
                      { property: '배경색',         token: TOKEN_MAP[variant][color].background,         value: ct.background,         type: 'color' },
                      { property: '배경색 (눌림)',    token: TOKEN_MAP[variant][color].backgroundPressed,  value: ct.backgroundPressed,  type: 'color' },
                      { property: '배경색 (비활성)',  token: TOKEN_MAP[variant][color].backgroundDisabled, value: ct.backgroundDisabled, type: 'color' },
                      { property: '텍스트',         token: TOKEN_MAP[variant][color].content,             value: ct.content,            type: 'color' },
                      { property: '텍스트 (비활성)',  token: TOKEN_MAP[variant][color].contentDisabled,    value: ct.contentDisabled,    type: 'color' },
                      ...('border' in ct
                        ? [
                            { property: '테두리',         token: (TOKEN_MAP[variant][color] as any).border,         value: (ct as any).border,         type: 'color' as const },
                            { property: '테두리 (비활성)', token: (TOKEN_MAP[variant][color] as any).borderDisabled, value: (ct as any).borderDisabled, type: 'color' as const },
                          ]
                        : []),
                    ]}
                  />
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
                { property: '높이',         token: SIZE_TOKEN_MAP[size].height,    value: buttonToken.size[size].height,            type: 'size' },
                { property: '좌우 패딩',     token: SIZE_TOKEN_MAP[size].paddingH,  value: buttonToken.size[size].paddingHorizontal, type: 'size' },
                { property: '코너 라디우스', token: SIZE_TOKEN_MAP[size].radius,    value: buttonToken.size[size].radius,             type: 'size' },
                { property: '타이포',       token: SIZE_TOKEN_MAP[size].typography, value: `${buttonToken.size[size].fontSize}px / ${textStyle[size === 'small' ? 'label2' : size === 'medium' ? 'body2' : 'headline'].lineHeight}px / ${textStyle[size === 'small' ? 'label2' : size === 'medium' ? 'body2' : 'headline'].fontWeight}`, type: 'typography' },
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
        description="개발자를 위한 Button 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { Button } from '@design-system/components/Button';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<Button label="확인" onPress={handlePress} />`}
        />

        <CodeBlock
          title="Variant + Color 조합"
          code={`<Button label="확인" variant="solid" color="primary" />
<Button label="취소" variant="outlined" color="assistive" />
<Button label="삭제" variant="solid" color="primary" disabled />`}
        />

        <CodeBlock
          title="크기 지정"
          code={`<Button label="Small" size="small" />
<Button label="Medium" size="medium" />
<Button label="Large" size="large" />`}
        />

        <CodeBlock
          title="로딩 상태"
          code={`<Button label="저장 중..." loading />`}
        />
      </Section>
    </View>
  ),
};
