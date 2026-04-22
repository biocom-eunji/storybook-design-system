import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from '../src/components/ProgressBar';
import { Button } from '../src/components/Button';
import {
  Section, StateLabel, Row, Col, CodeBlock, CompareGrid, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import {
  spacing, semanticColor, radius, textStyle,
} from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────

const COLOR_TOKEN_MAP = {
  primary: { token: 'color/background/brand',   value: semanticColor.backgroundBrand },
  success: { token: 'color/background/success',  value: semanticColor.backgroundSuccess },
  error:   { token: 'color/background/error',    value: semanticColor.backgroundError },
  warning: { token: 'color/background/warning',  value: semanticColor.backgroundWarning },
} as const;

const COMMON_TOKEN_MAP = {
  track:       { token: 'color/background/disabled', value: semanticColor.backgroundDisabled },
  labelColor:  { token: 'color/text/primary',        value: semanticColor.textPrimary },
  labelGap:    { token: 'spacing/xsmall',             value: spacing.xsmall },
} as const;

const SIZE_MAP = {
  small:  { height: 4 },
  medium: { height: 8 },
  large:  { height: 12 },
} as const;

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof ProgressBar> = {
  title: 'Feedback/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
      description: '진행률 (0~1)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '크기 (Figma: Size)',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning'],
      description: 'Fill 색상 (Figma: Color)',
    },
    showLabel: {
      control: 'boolean',
      description: '퍼센트 라벨 표시',
    },
    rounded: {
      control: 'boolean',
      description: 'Pill 형태 라운딩',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    progress: 0.6,
    size: 'medium',
    color: 'primary',
    showLabel: true,
    rounded: true,
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: Track `color/background/disabled`, Fill `color/background/brand`, Label `color/text/primary` `Caption`',
      },
    },
  },
};

// ─── 2. 진행률별 ─────────────────────────────────────────────

export const ProgressValues: Story = {
  name: '진행률별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="진행률별"
        description="0%, 25%, 50%, 75%, 100% 진행률을 비교합니다."
      >
        <View style={{ gap: spacing.xlarge, maxWidth: 400 }}>
          {[0, 0.25, 0.5, 0.75, 1].map(v => (
            <Col key={v} gap={spacing.small}>
              <StateLabel>{`${Math.round(v * 100)}%`}</StateLabel>
              <ProgressBar progress={v} size="medium" color="primary" showLabel />
            </Col>
          ))}
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. Label ────────────────────────────────────────────────

export const WithLabel: Story = {
  name: 'Label 표시',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Label 표시"
        description="showLabel prop으로 퍼센트 수치를 표시합니다."
      >
        <View style={{ gap: spacing.xlarge, maxWidth: 400 }}>
          <Col gap={spacing.small}>
            <StateLabel>Label 없음</StateLabel>
            <ProgressBar progress={0.45} size="large" color="primary" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Label 표시</StateLabel>
            <ProgressBar progress={0.45} size="large" color="primary" showLabel />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. 인터랙티브 데모 ──────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [progress, setProgress] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
      if (!running) return;
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 1) { setRunning(false); return 1; }
          return prev + 0.02;
        });
      }, 50);
      return () => clearInterval(interval);
    }, [running]);

    const reset = () => { setProgress(0); setRunning(false); };
    const start = () => { setProgress(0); setRunning(true); };

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="버튼을 클릭하여 진행률 애니메이션을 확인합니다."
        >
          <View style={{ maxWidth: 400, gap: spacing.large }}>
            <ProgressBar progress={progress} size="large" color="primary" showLabel />
            <Row gap={spacing.medium}>
              <Button label="시작" variant="solid" color="primary" size="small" onPress={start} />
              <Button label="초기화" variant="solid" color="assistive" size="small" onPress={reset} />
            </Row>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 7. 실전 예시 ────────────────────────────────────────────

export const Examples: Story = {
  name: '실전 예시',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="실전 예시"
        description="실제 UI 패턴에서의 ProgressBar 활용 예시입니다."
      >
        <View style={{ gap: spacing['2xlarge'], maxWidth: 400 }}>
          <Col gap={spacing.small}>
            <StateLabel>파일 업로드</StateLabel>
            <View style={{ gap: spacing.xsmall }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: textStyle.label2.fontSize, fontWeight: textStyle.label2.fontWeight, color: semanticColor.textPrimary }}>photo_001.jpg</Text>
                <Text style={{ fontSize: textStyle.caption.fontSize, color: semanticColor.textSecondary }}>72%</Text>
              </View>
              <ProgressBar progress={0.72} size="small" color="primary" />
            </View>
          </Col>

          <Divider />

          <Col gap={spacing.small}>
            <StateLabel>건강 목표 달성률</StateLabel>
            <View style={{ gap: spacing.medium }}>
              <View style={{ gap: spacing.xsmall }}>
                <Text style={{ fontSize: textStyle.label2.fontSize, fontWeight: textStyle.label2.fontWeight, color: semanticColor.textPrimary }}>수분 섭취</Text>
                <ProgressBar progress={0.85} size="medium" color="success" />
              </View>
              <View style={{ gap: spacing.xsmall }}>
                <Text style={{ fontSize: textStyle.label2.fontSize, fontWeight: textStyle.label2.fontWeight, color: semanticColor.textPrimary }}>운동</Text>
                <ProgressBar progress={0.3} size="medium" color="warning" />
              </View>
              <View style={{ gap: spacing.xsmall }}>
                <Text style={{ fontSize: textStyle.label2.fontSize, fontWeight: textStyle.label2.fontWeight, color: semanticColor.textPrimary }}>수면</Text>
                <ProgressBar progress={0.15} size="medium" color="error" />
              </View>
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 8. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="Figma 시맨틱 토큰 기준 ProgressBar 스펙입니다."
        badge="디자인"
      >
        <TokenSpecTable
          title="ProgressBar 토큰"
          rows={[
            { property: 'Track 배경',      token: COMMON_TOKEN_MAP.track.token,      value: COMMON_TOKEN_MAP.track.value,      type: 'color' },
            { property: 'Fill 배경',       token: COLOR_TOKEN_MAP.primary.token,     value: COLOR_TOKEN_MAP.primary.value,     type: 'color' },
            { property: 'Track 라디우스',   token: 'height / 2 (pill)',               value: 'pill 형태' },
            { property: 'Label 색상',       token: COMMON_TOKEN_MAP.labelColor.token, value: COMMON_TOKEN_MAP.labelColor.value, type: 'color' },
            { property: 'Label 타이포',     token: 'Caption', value: `${textStyle.caption.fontSize}px / ${textStyle.caption.lineHeight}px / ${textStyle.caption.fontWeight}`, type: 'typography' },
            { property: 'Label-Track 간격', token: COMMON_TOKEN_MAP.labelGap.token,   value: COMMON_TOKEN_MAP.labelGap.value,   type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="애니메이션 (권장값)"
          rows={[
            { property: 'Determinate transition', token: '—', value: '300ms ease' },
            { property: 'Reduce Motion 대응',     token: '—', value: 'transition 제거' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 9. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 ProgressBar 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { ProgressBar } from '@design-system/components/ProgressBar';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<ProgressBar progress={0.6} />`}
        />

        <CodeBlock
          title="Color + Size + Label"
          code={`<ProgressBar progress={0.75} size="large" color="success" showLabel />`}
        />

        <CodeBlock
          title="동적 진행률"
          code={`const [progress, setProgress] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => Math.min(prev + 0.01, 1));
  }, 50);
  return () => clearInterval(interval);
}, []);

<ProgressBar progress={progress} color="primary" showLabel />`}
        />

        <CodeBlock
          title="건강 목표 대시보드"
          code={`<View style={{ gap: spacing.medium }}>
  <ProgressBar progress={waterGoal} color="success" size="small" />
  <ProgressBar progress={exerciseGoal} color="warning" size="small" />
  <ProgressBar progress={sleepGoal} color="error" size="small" />
</View>`}
        />
      </Section>
    </View>
  ),
};
