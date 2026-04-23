import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgress } from '../src/components/CircularProgress';
import { Section, StateLabel, Row, Col, CodeBlock, Divider } from './storyHelpers';
import { spacing, semanticColor, textStyle } from '../src/tokens/theme';

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    size: { control: 'number' },
    strokeWidth: { control: 'number' },
    color: { control: 'select', options: ['primary', 'success', 'warning', 'error'] },
    showLabel: { control: 'boolean' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Playground: Story = {
  render: () => (
    <Row gap={spacing.xlarge} align="center">
      <CircularProgress progress={0.72} color="primary" />
      <CircularProgress progress={0.85} color="success" />
      <CircularProgress progress={0.45} color="warning" />
    </Row>
  ),
};

export const ProgressValues: Story = {
  name: '진행률별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="진행률별" description="0% ~ 100% 진행률을 비교합니다.">
        <Row gap={spacing.large} align="center">
          {[0, 0.25, 0.5, 0.75, 1].map(v => (
            <Col key={v} gap={spacing.small}>
              <CircularProgress progress={v} size={64} />
            </Col>
          ))}
        </Row>
      </Section>
    </View>
  ),
};

export const Colors: Story = {
  name: 'Color별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Color별" description="primary, success, warning, error 색상을 비교합니다.">
        <Row gap={spacing.xlarge} align="center">
          {(['primary', 'success', 'warning', 'error'] as const).map(color => (
            <Col key={color} gap={spacing.small}>
              <StateLabel>{color}</StateLabel>
              <CircularProgress progress={0.65} color={color} size={64} />
            </Col>
          ))}
        </Row>
      </Section>
    </View>
  ),
};

export const Sizes: Story = {
  name: '크기별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="크기별" description="size prop으로 크기를 조절합니다.">
        <Row gap={spacing.xlarge} align="center">
          {[40, 56, 80, 120].map(size => (
            <Col key={size} gap={spacing.small}>
              <StateLabel>{`${size}px`}</StateLabel>
              <CircularProgress progress={0.72} size={size} />
            </Col>
          ))}
        </Row>
      </Section>
    </View>
  ),
};

export const InContext: Story = {
  name: '실전 예시',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="실전 예시" description="건강 목표 달성률 대시보드입니다.">
        <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: spacing.small,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
        }}>
          <Text style={{ fontSize: textStyle.headline.fontSize, fontWeight: '600', color: semanticColor.textPrimary, marginBottom: spacing.large }}>
            오늘의 목표
          </Text>
          <Row gap={spacing['2xlarge']} align="center">
            <Col gap={spacing.small}>
              <CircularProgress progress={0.85} color="success" label="85%" />
              <Text style={{ fontSize: textStyle.caption.fontSize, color: semanticColor.textSecondary, textAlign: 'center' }}>수분</Text>
            </Col>
            <Col gap={spacing.small}>
              <CircularProgress progress={0.6} color="primary" label="60%" />
              <Text style={{ fontSize: textStyle.caption.fontSize, color: semanticColor.textSecondary, textAlign: 'center' }}>운동</Text>
            </Col>
            <Col gap={spacing.small}>
              <CircularProgress progress={0.3} color="error" label="30%" />
              <Text style={{ fontSize: textStyle.caption.fontSize, color: semanticColor.textSecondary, textAlign: 'center' }}>수면</Text>
            </Col>
          </Row>
        </View>
      </Section>
    </View>
  ),
};

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={`import { CircularProgress } from '@design-system/components/CircularProgress';`} />
        <CodeBlock title="기본 사용" code={`<CircularProgress progress={0.72} />`} />
        <CodeBlock title="커스텀" code={`<CircularProgress\n  progress={goal / target}\n  size={120}\n  strokeWidth={8}\n  color="success"\n  label={\`\${Math.round(goal/target*100)}%\`}\n/>`} />
      </Section>
    </View>
  ),
};
