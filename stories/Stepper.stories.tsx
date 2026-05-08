import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from '../src/components/Stepper';
import { Section, StateLabel, Row, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle, radius } from '../src/tokens/theme';

const meta: Meta<typeof Stepper> = {
  title: 'Input/Stepper',
  component: Stepper,
  argTypes: {
    value:    { control: { type: 'range', min: 0, max: 99, step: 1 } },
    min:      { control: 'number' },
    max:      { control: 'number' },
    step:     { control: 'number' },
    size:     { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    unit:     { control: 'text' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Stepper>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [count, setCount] = useState(3);
    return (
      <View style={{ gap: spacing.xlarge }}>
        <Stepper value={count} onChange={setCount} min={0} max={10} unit="개" />
        <Text style={{ fontSize: textStyle.body2.fontSize, color: semanticColor.textSecondary }}>
          현재 값: {count}
        </Text>
      </View>
    );
  },
};

// ─── 2. 크기별 ──────────────────────────────────────────────

export const Sizes: Story = {
  name: '크기별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="크기별" description="small, medium, large 크기를 비교합니다.">
        <View style={{ gap: spacing['2xlarge'] }}>
          {(['small', 'medium', 'large'] as const).map(size => (
            <Col key={size} gap={spacing.small}>
              <StateLabel>{size}</StateLabel>
              <Stepper value={5} size={size} min={0} max={10} />
            </Col>
          ))}
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. 상태별 비교 ─────────────────────────────────────────

export const AllStates: Story = {
  name: '상태별 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="상태별 비교"
        description="Default, 최소값, 최대값, Disabled 상태를 비교합니다."
      >
        <View style={{ gap: spacing['2xlarge'] }}>
          <Col gap={spacing.small}>
            <StateLabel>Default</StateLabel>
            <Stepper value={5} min={0} max={10} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>최소값 도달 (- 버튼 비활성)</StateLabel>
            <Stepper value={0} min={0} max={10} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>최대값 도달 (+ 버튼 비활성)</StateLabel>
            <Stepper value={10} min={0} max={10} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <Stepper value={3} min={0} max={10} disabled />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. 커스텀 설정 ─────────────────────────────────────────

export const CustomStep: Story = {
  name: '커스텀 설정',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="커스텀 설정"
        description="증감 단위(step)와 단위 텍스트(unit) 활용 예시입니다."
      >
        <View style={{ gap: spacing['2xlarge'] }}>
          <Col gap={spacing.small}>
            <StateLabel>step=5, unit="분"</StateLabel>
            <Stepper value={30} min={0} max={60} step={5} unit="분" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>step=100, unit="mL"</StateLabel>
            <Stepper value={500} min={0} max={2000} step={100} unit="mL" size="large" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>step=1, unit="회"</StateLabel>
            <Stepper value={3} min={1} max={7} step={1} unit="회" size="small" />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. 실전 예시 ───────────────────────────────────────────

export const InContext: Story = {
  name: '실전 예시',
  render: () => {
    const [water, setWater] = useState(500);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="실전 예시"
          description="수분 섭취 기록 카드에서의 활용 예시입니다."
        >
          <View style={{
            maxWidth: 375,
            padding: spacing.xlarge,
            backgroundColor: semanticColor.backgroundPrimary,
            borderRadius: radius.large,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            gap: spacing.large,
          }}>
            <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary,
            }}>
              수분 섭취 기록
            </Text>
            <Stepper
              value={water}
              onChange={setWater}
              min={0}
              max={3000}
              step={250}
              unit="mL"
              size="large"
            />
            <View style={{
              height: 6,
              borderRadius: 3,
              backgroundColor: semanticColor.backgroundDisabled,
              overflow: 'hidden',
            }}>
              <View style={{
                width: `${Math.min((water / 2000) * 100, 100)}%` as any,
                height: '100%',
                backgroundColor: water >= 2000
                  ? semanticColor.backgroundSuccess
                  : semanticColor.backgroundBrand,
                borderRadius: 3,
              }} />
            </View>
            <Text style={{
              fontSize: textStyle.caption.fontSize,
              color: semanticColor.textSecondary,
            }}>
              목표 2,000mL 중 {water.toLocaleString()}mL 달성
            </Text>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 6. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="Figma 시맨틱 토큰 기준 Stepper 스펙입니다."
        badge="디자인"
      >
        <TokenSpecTable
          title="증감 버튼"
          rows={[
            { property: '배경색',       token: 'color/background/secondary', value: semanticColor.backgroundSecondary, type: 'color' },
            { property: '테두리',       token: 'color/border/default',       value: semanticColor.borderDefault,       type: 'color' },
            { property: '아이콘',       token: 'color/icon/primary',         value: semanticColor.iconPrimary,         type: 'color' },
            { property: '비활성 아이콘', token: 'color/icon/disabled',       value: semanticColor.iconDisabled,        type: 'color' },
            { property: '비활성 배경',  token: 'color/background/disabled',  value: semanticColor.backgroundDisabled,  type: 'color' },
            { property: '코너 라디우스', token: 'radius/full',               value: '원형',                            type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="값 표시"
          rows={[
            { property: '텍스트',   token: 'color/text/primary',   value: semanticColor.textPrimary,   type: 'color' },
            { property: '단위',     token: 'color/text/secondary', value: semanticColor.textSecondary, type: 'color' },
            { property: '비활성',   token: 'color/text/tertiary',  value: semanticColor.textTertiary,  type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="크기별 레이아웃"
          rows={[
            { property: 'Small 버튼',  token: '—', value: '28 × 28',                              type: 'size' },
            { property: 'Medium 버튼', token: '—', value: '36 × 36',                              type: 'size' },
            { property: 'Large 버튼',  token: '—', value: '44 × 44',                              type: 'size' },
            { property: 'Small 간격',  token: 'spacing/small',  value: spacing.small,              type: 'size' },
            { property: 'Medium 간격', token: 'spacing/medium', value: spacing.medium,             type: 'size' },
            { property: 'Large 간격',  token: 'spacing/large',  value: spacing.large,              type: 'size' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 7. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock
          title="Import"
          code={`import { Stepper } from '@design-system/components/Stepper';`}
        />
        <CodeBlock
          title="기본 사용"
          code={`const [count, setCount] = useState(1);

<Stepper
  value={count}
  onChange={setCount}
  min={0}
  max={10}
/>`}
        />
        <CodeBlock
          title="커스텀 단위"
          code={`<Stepper
  value={water}
  onChange={setWater}
  min={0}
  max={3000}
  step={250}
  unit="mL"
  size="large"
/>`}
        />
      </Section>
    </View>
  ),
};
