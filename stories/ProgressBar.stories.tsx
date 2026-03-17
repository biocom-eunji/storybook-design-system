import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from '../src/components/ProgressBar';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, green, red, yellow, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 1, step: 0.01 }, description: '진행률 (0~1)' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '바 높이',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning'],
      description: '바 색상',
    },
    showLabel: { control: 'boolean', description: '퍼센트 텍스트 표시' },
    animated: { control: 'boolean', description: '너비 애니메이션' },
    rounded: { control: 'boolean', description: '둥근 끝' },
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
    showLabel: false,
    animated: true,
    rounded: true,
  },
};

// ─── 2. 크기 비교 ────────────────────────────────────────────

export const Sizes: Story = {
  name: '크기 비교',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="크기 비교"
        description="Small(4px), Medium(8px), Large(12px) 세 가지 높이를 비교합니다."
      >
        <View style={{ gap: spacing.xl, maxWidth: 400 }}>
          <Col gap={spacing.sm}>
            <StateLabel>Small — 4px</StateLabel>
            <ProgressBar progress={0.7} size="small" />
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>Medium — 8px</StateLabel>
            <ProgressBar progress={0.7} size="medium" />
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>Large — 12px</StateLabel>
            <ProgressBar progress={0.7} size="large" />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. 색상 ─────────────────────────────────────────────────

export const Colors: Story = {
  name: '색상',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="색상"
        description="color prop으로 진행 바의 색상을 변경할 수 있습니다."
      >
        <View style={{ gap: spacing.xl, maxWidth: 400 }}>
          <Col gap={spacing.sm}>
            <StateLabel>Primary (mint)</StateLabel>
            <ProgressBar progress={0.65} color="primary" />
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>Success (green)</StateLabel>
            <ProgressBar progress={0.65} color="success" />
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>Error (red)</StateLabel>
            <ProgressBar progress={0.65} color="error" />
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>Warning (yellow)</StateLabel>
            <ProgressBar progress={0.65} color="warning" />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. 라벨 표시 ────────────────────────────────────────────

export const WithLabel: Story = {
  name: '라벨 표시',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="라벨 표시"
        description="showLabel prop을 사용하면 퍼센트 텍스트가 바 위에 표시됩니다."
      >
        <View style={{ gap: spacing.xl, maxWidth: 400 }}>
          <Col gap={spacing.sm}>
            <StateLabel>0%</StateLabel>
            <ProgressBar progress={0} showLabel />
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>33%</StateLabel>
            <ProgressBar progress={0.33} showLabel />
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>67%</StateLabel>
            <ProgressBar progress={0.67} showLabel />
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>100%</StateLabel>
            <ProgressBar progress={1} showLabel />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. 인터랙티브 데모 ─────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: function InteractiveRender() {
    const [progress, setProgress] = useState(0.3);

    return (
      <View style={{ gap: spacing['3xl'] }}>
        <Section
          title="인터랙티브 데모"
          description="버튼을 눌러 진행률을 변경해 보세요."
        >
          <View style={{ maxWidth: 400, gap: spacing.lg }}>
            <ProgressBar progress={progress} showLabel size="large" />
            <Row gap={spacing.sm}>
              {[0, 0.25, 0.5, 0.75, 1].map((val) => (
                <Pressable
                  key={val}
                  onPress={() => setProgress(val)}
                  style={{
                    backgroundColor: progress === val ? mint[45] : coolNeutral[97],
                    paddingHorizontal: spacing.md,
                    paddingVertical: spacing.sm,
                    borderRadius: radius.sm,
                  }}
                >
                  <Text
                    style={{
                      fontSize: fontSize.sm,
                      fontWeight: fontWeight.semibold,
                      color: progress === val ? '#FFFFFF' : coolNeutral[40],
                    }}
                  >
                    {Math.round(val * 100)}%
                  </Text>
                </Pressable>
              ))}
            </Row>
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
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="디자인 스펙"
        description="디자이너와 개발자를 위한 ProgressBar 토큰 상세 스펙입니다."
      >
        <SpecTable
          title="크기"
          rows={[
            { label: 'Small 높이', value: '4px', token: '—' },
            { label: 'Medium 높이', value: '8px', token: '—' },
            { label: 'Large 높이', value: '12px', token: '—' },
            { label: '모서리 반경', value: 'height / 2', token: '—' },
          ]}
        />

        <Divider />

        <SpecTable
          title="트랙"
          rows={[
            { label: '배경색', value: coolNeutral[96], token: 'coolNeutral[96]' },
          ]}
        />

        <SpecTable
          title="채우기 색상"
          rows={[
            { label: 'Primary', value: mint[45], token: 'mint[45]' },
            { label: 'Success', value: green[45], token: 'green[45]' },
            { label: 'Error', value: red[70], token: 'red[70]' },
            { label: 'Warning', value: yellow[50], token: 'yellow[50]' },
          ]}
        />

        <Divider />

        <SpecTable
          title="라벨"
          rows={[
            { label: '폰트 크기', value: `${fontSize.xs}px`, token: 'fontSize.xs' },
            { label: '폰트 굵기', value: fontWeight.semibold, token: 'fontWeight.semibold' },
            { label: '텍스트 색상', value: coolNeutral[17], token: 'coolNeutral[17]' },
            { label: '정렬', value: 'right', token: '—' },
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
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 ProgressBar 컴포넌트 사용 예시입니다."
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
          title="라벨 + 색상 + 크기"
          code={`<ProgressBar
  progress={0.75}
  size="large"
  color="success"
  showLabel
/>`}
        />

        <CodeBlock
          title="각진 스타일"
          code={`<ProgressBar
  progress={0.5}
  rounded={false}
  animated={false}
/>`}
        />
      </Section>
    </View>
  ),
};
