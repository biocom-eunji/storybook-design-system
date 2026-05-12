import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextButton } from '../src/components/TextButton';
import {
  Section, StateLabel, Row, Col, CompareGrid, Divider, CodeBlock,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { textButtonToken, spacing, textStyleV2 } from '../src/tokens/theme';

// ─── Inline arrow icons (Figma icon size 16) ─────────────────

const ArrowRight = ({ color = '#000', size = 16 }: { color?: string; size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);
const ArrowLeft = ({ color = '#000', size = 16 }: { color?: string; size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M19 12H5M11 6l-6 6 6 6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof TextButton> = {
  title: 'Actions/TextButton',
  component: TextButton,
  argTypes: {
    label:      { control: 'text', description: 'Figma: 버튼 텍스트' },
    variant:    {
      control: 'select',
      options: ['default', 'focused'],
      description: "Figma named variant — 'default' ← (focused=no, enabled=yes) / 'focused' ← (focused=yes, enabled=no)",
    },
    size:       { control: 'select', options: ['large', 'medium'], description: 'Figma: large / medium (현재 동일 토큰)' },
    disabled:   { control: 'boolean', description: 'Figma 상태: disabled' },
    underlined: { control: 'boolean', description: '밑줄 표시 (기본 true)' },
  },
  args: { label: '더보기', variant: 'default', size: 'medium', disabled: false, underlined: true },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'TextButton — Figma `text button` 컴포넌트 1:1 매핑. 2 variant × 2 size × 3 state.\n\n**v3.0 Breaking**: `colorScheme` · `loading` 제거 / `size` 키 변경 (small→medium, medium→large) / `underlined` prop 신규.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextButton>;

const VARIANTS = ['default', 'focused'] as const;
const SIZES = ['large', 'medium'] as const;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  parameters: {
    docs: {
      description: { story: 'Controls 패널에서 Figma property를 조작합니다.' },
    },
  },
};

// ─── 2. Variants ─────────────────────────────────────────────

export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Variants"
        description="Figma named variant 2종 — Text-Btn(default) / Text-focused-Btn(focused)."
      >
        <CompareGrid
          items={VARIANTS.map((v) => ({
            label: v,
            content: <TextButton label="더보기" variant={v} />,
          }))}
        />
      </Section>
    </View>
  ),
};

// ─── 3. Sizes ────────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Sizes"
        description="Figma는 large/medium 2종 변종이지만 현재 토큰값은 동일 (height 32, label2 14px). 향후 분기 대비로 prop 유지."
      >
        {VARIANTS.map((v) => (
          <View key={v} style={{ gap: spacing.small, marginBottom: spacing.xlarge }}>
            <StateLabel>{v}</StateLabel>
            <Row gap={spacing.medium} align="center">
              {SIZES.map((s) => (
                <Col key={s} gap={spacing.xsmall}>
                  <StateLabel>{s}</StateLabel>
                  <TextButton label="더보기" variant={v} size={s} />
                </Col>
              ))}
            </Row>
          </View>
        ))}
      </Section>
    </View>
  ),
};

// ─── 4. States ───────────────────────────────────────────────

export const States: Story = {
  name: 'States',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="States"
        description="default / pressed / disabled. pressed는 실제 클릭 시 확인 (RN Pressable 한계)."
      >
        {VARIANTS.map((v) => (
          <View key={v} style={{ gap: spacing.small, marginBottom: spacing.xlarge }}>
            <StateLabel>{v}</StateLabel>
            <CompareGrid
              items={[
                { label: 'default',  content: <TextButton label="더보기" variant={v} /> },
                { label: 'pressed (눌러서 확인)', content: <TextButton label="더보기" variant={v} /> },
                { label: 'disabled', content: <TextButton label="더보기" variant={v} disabled /> },
              ]}
            />
          </View>
        ))}
      </Section>
    </View>
  ),
};

// ─── 5. With Icon · Underline ────────────────────────────────

export const WithIcon: Story = {
  name: 'With Icon · Underline',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="아이콘 슬롯 + underlined 옵션" description="leadingIcon / trailingIcon + underlined boolean prop.">
        <Row gap={spacing.xlarge} align="center">
          <Col gap={spacing.xsmall}>
            <StateLabel>leadingIcon</StateLabel>
            <TextButton label="이전" variant="focused" leadingIcon={<ArrowLeft color={textButtonToken.color.focused.default.icon} />} />
          </Col>
          <Col gap={spacing.xsmall}>
            <StateLabel>trailingIcon</StateLabel>
            <TextButton label="다음" variant="focused" trailingIcon={<ArrowRight color={textButtonToken.color.focused.default.icon} />} />
          </Col>
          <Col gap={spacing.xsmall}>
            <StateLabel>underlined=false</StateLabel>
            <TextButton label="밑줄 없음" variant="default" underlined={false} />
          </Col>
          <Col gap={spacing.xsmall}>
            <StateLabel>underlined=true (기본)</StateLabel>
            <TextButton label="밑줄 있음" variant="default" underlined />
          </Col>
        </Row>
      </Section>
    </View>
  ),
};

// ─── 6. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Size 토큰 (단일 column)" description="Figma SPEC상 large/medium 모두 동일 토큰." badge="디자인">
        <TokenSpecTable
          title="공통 size 토큰"
          rows={[
            { property: 'height',     token: 'textButtonToken.size.{*}.height',            value: textButtonToken.size.medium.height,            type: 'size' },
            { property: 'padding',    token: 'textButtonToken.size.{*}.paddingHorizontal', value: textButtonToken.size.medium.paddingHorizontal, type: 'size' },
            { property: 'radius',     token: 'textButtonToken.size.{*}.radius',            value: textButtonToken.size.medium.radius,            type: 'size' },
            { property: 'gap',        token: 'textButtonToken.size.{*}.gap',               value: textButtonToken.size.medium.gap,               type: 'size' },
            { property: 'icon size',  token: 'textButtonToken.size.{*}.iconSize',          value: textButtonToken.size.medium.iconSize,          type: 'size' },
            { property: 'line width', token: 'textButtonToken.size.{*}.lineWidth',         value: textButtonToken.size.medium.lineWidth,         type: 'size' },
            { property: 'label font', token: 'textStyleV2.label2',                          value: `${textStyleV2.label2.fontSize}px · weight ${textStyleV2.label2.fontWeight}` },
          ]}
        />
      </Section>

      <Section title="Variant × State 컬러" description="Figma 명세 1:1." badge="디자인">
        {VARIANTS.map((v) => {
          const t = textButtonToken.color[v];
          const rows: { property: string; token: string; value: string | number; type?: 'color' | 'size' }[] = [];
          (['default', 'pressed', 'disabled'] as const).forEach((s) => {
            const c = t[s];
            rows.push({ property: `${s} / container`, token: `textButtonToken.color.${v}.${s}.container`, value: c.container, type: 'color' });
            rows.push({ property: `${s} / label`,     token: `textButtonToken.color.${v}.${s}.label`,     value: c.label,     type: 'color' });
            rows.push({ property: `${s} / underline`, token: `textButtonToken.color.${v}.${s}.underline`, value: c.underline, type: 'color' });
            rows.push({ property: `${s} / icon`,      token: `textButtonToken.color.${v}.${s}.icon`,      value: c.icon,      type: 'color' });
          });
          return (
            <View key={v}>
              <TokenSpecTable title={v} rows={rows} />
              <Divider />
            </View>
          );
        })}
      </Section>
    </View>
  ),
};

// ─── 7. 마이그레이션 가이드 ──────────────────────────────────

export const Migration: Story = {
  name: '마이그레이션 가이드 (v3.0)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="v3.0 Breaking Changes" description="이전 API를 사용하던 코드의 매핑." badge="개발">
        <CodeBlock
          title="colorScheme → variant union"
          code={`// Before (v2.x)
<TextButton colorScheme="primary"   />
<TextButton colorScheme="assistive" />

// After (v3.0)
<TextButton variant="focused" />
<TextButton variant="default" />`}
        />
        <CodeBlock
          title="size 키 변경"
          code={`// Before (v2.x)
<TextButton size="small"  />   // label2 (14px Medium)
<TextButton size="medium" />   // body2 (15px Regular)

// After (v3.0)
<TextButton size="medium" />   // label2 (14px Medium) — 시각 회귀 발생 (body2 → label2)
<TextButton size="large"  />   // body2  (15px Regular) — 시각 동일 (body2 유지)`}
        />
        <CodeBlock
          title="loading 제거 + underlined 신규"
          code={`// Before
<TextButton label="저장" loading />

// After — 외부 분기
{isLoading ? <ActivityIndicator /> : <TextButton label="저장" />}

// underlined 신규 (기본 true)
<TextButton label="밑줄 있음" />                // underlined=true
<TextButton label="밑줄 없음" underlined={false} />`}
        />
        <CodeBlock
          title="아이콘 슬롯 신규 (leadingIcon / trailingIcon)"
          code={`import { Icon } from '@/components/Icon';

<TextButton label="이전" leadingIcon={<Icon name="arrow-left" size={16} />} />
<TextButton label="다음" trailingIcon={<Icon name="arrow-right" size={16} />} />`}
        />
      </Section>
    </View>
  ),
};
