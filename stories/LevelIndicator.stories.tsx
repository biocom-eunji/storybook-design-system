import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LevelIndicator } from '../src/components/LevelIndicator';
import {
  Section, StateLabel, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle } from '../src/tokens/theme';

const meta: Meta<typeof LevelIndicator> = {
  title: 'Data Display/LevelIndicator',
  component: LevelIndicator,
  argTypes: {
    current: {
      control: 'select',
      options: [null, 'bad', 'caution', 'good', 'great'],
      description: '현재 활성 단계',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LevelIndicator>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <View style={{ maxWidth: 375, padding: spacing.large }}>
      <LevelIndicator current="caution" />
    </View>
  ),
};

// ─── 2. 전체 상태 ───────────────────────────────────────────

export const AllStates: Story = {
  name: '전체 상태',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="전체 상태" description="step 0(없음)부터 step 4(좋음)까지 5가지 상태입니다.">
        <View style={{ gap: spacing.xlarge, maxWidth: 375 }}>
          <Col gap={spacing.small}>
            <StateLabel>상태 없음 (current=null)</StateLabel>
            <LevelIndicator current={null} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>나쁨 (critical)</StateLabel>
            <LevelIndicator current="bad" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>주의 (warning)</StateLabel>
            <LevelIndicator current="caution" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>양호 (caution)</StateLabel>
            <LevelIndicator current="good" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>좋음 (safe)</StateLabel>
            <LevelIndicator current="great" />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. 실전 예시 ────────────────────────────────────────────

export const InContext: Story = {
  name: '실전 예시',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="실전 예시" description="카드 내부에 LevelIndicator를 배치한 예시입니다.">
        <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: spacing.small,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          gap: spacing.large,
        }}>
          <View>
            <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary,
            }}>과민음식 분석</Text>
            <Text style={{
              fontSize: textStyle.body2.fontSize,
              color: semanticColor.textSecondary,
              marginTop: spacing.xsmall,
            }}>이번 주 섭취 빈도 기준</Text>
          </View>
          <LevelIndicator current="caution" />
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. 커스텀 레벨 ──────────────────────────────────────────

// ─── 4. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="디자인 스펙" description="Figma 기반 LevelIndicator 스펙입니다." badge="디자인">
        <TokenSpecTable
          title="구간별 색상 (role 토큰)"
          rows={[
            { property: 'Critical (나쁨)',  token: 'role/error',   value: semanticColor.backgroundError,   type: 'color' },
            { property: 'Warning (주의)',   token: 'role/warning', value: semanticColor.backgroundWarning, type: 'color' },
            { property: 'Caution (양호)',   token: 'role/caution', value: semanticColor.backgroundCaution, type: 'color' },
            { property: 'Safe (좋음)',      token: 'role/success', value: semanticColor.backgroundSuccess, type: 'color' },
            { property: '비활성 라벨',      token: 'color/text/tertiary', value: semanticColor.textTertiary, type: 'color' },
            { property: '활성 라벨 (말풍선)', token: 'color/text/onColor', value: semanticColor.textOnColor, type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="레이아웃"
          rows={[
            { property: '막대 높이',       token: '—', value: 19,  type: 'size' },
            { property: '막대 radius',     token: '—', value: 6,   type: 'size' },
            { property: '말풍선 높이',     token: '—', value: 24,  type: 'size' },
            { property: '말풍선 arrow',    token: '—', value: 5,   type: 'size' },
            { property: '말풍선 radius',   token: 'borderRadius/xsmall', value: 4, type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="타이포그래피"
          rows={[
            { property: '비활성 라벨', token: 'Label 1', value: `${textStyle.label1.fontSize}px / Medium`, type: 'typography' },
            { property: '활성 라벨 (말풍선)', token: 'Caption', value: `${textStyle.caption.fontSize}px / Medium`, type: 'typography' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 6. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" description="개발자를 위한 LevelIndicator 사용 예시입니다." badge="개발">
        <CodeBlock
          title="Import"
          code={`import { LevelIndicator } from '@design-system/components/LevelIndicator';`}
        />

        <CodeBlock
          title="기본 사용 (기본 4단계)"
          code={`<LevelIndicator current="caution" />`}
        />

        <CodeBlock
          title="상태 없음"
          code={`<LevelIndicator current={null} />`}
        />

        <CodeBlock
          title="커스텀 레벨"
          code={`<LevelIndicator
  levels={[
    { key: 'low',  label: '낮음', color: 'safe' },
    { key: 'mid',  label: '보통', color: 'caution' },
    { key: 'high', label: '높음', color: 'critical' },
  ]}
  current="mid"
/>`}
        />
      </Section>
    </View>
  ),
};
