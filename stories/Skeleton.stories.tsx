import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '../src/components/Skeleton';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
      description: '스켈레톤 형태',
    },
    width: { control: 'text', description: '너비' },
    height: { control: 'number', description: '높이' },
    borderRadius: { control: 'number', description: '커스텀 모서리 반경' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    variant: 'rectangular',
    width: 200,
    height: 100,
  },
};

// ─── 2. 변형 ─────────────────────────────────────────────────

export const Variants: Story = {
  name: '변형',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="변형"
        description="text, circular, rectangular 세 가지 형태를 제공합니다."
      >
        <View style={{ gap: spacing.xl }}>
          <Col gap={spacing.sm}>
            <StateLabel>Text</StateLabel>
            <View style={{ maxWidth: 300 }}>
              <Skeleton variant="text" />
            </View>
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>Circular</StateLabel>
            <Skeleton variant="circular" />
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>Rectangular</StateLabel>
            <View style={{ maxWidth: 300 }}>
              <Skeleton variant="rectangular" />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. 크기 커스텀 ─────────────────────────────────────────

export const CustomSizes: Story = {
  name: '크기 커스텀',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="크기 커스텀"
        description="width와 height를 자유롭게 조합할 수 있습니다."
      >
        <View style={{ gap: spacing.xl }}>
          <Row gap={spacing.lg} align="flex-end">
            <Col gap={spacing.sm}>
              <StateLabel>40×40</StateLabel>
              <Skeleton variant="rectangular" width={40} height={40} />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>80×80</StateLabel>
              <Skeleton variant="rectangular" width={80} height={80} />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>120×60</StateLabel>
              <Skeleton variant="rectangular" width={120} height={60} />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>200×20</StateLabel>
              <Skeleton variant="rectangular" width={200} height={20} />
            </Col>
          </Row>

          <Divider />

          <Row gap={spacing.lg} align="flex-end">
            <Col gap={spacing.sm}>
              <StateLabel>원형 24</StateLabel>
              <Skeleton variant="circular" width={24} height={24} />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>원형 40</StateLabel>
              <Skeleton variant="circular" width={40} height={40} />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>원형 56</StateLabel>
              <Skeleton variant="circular" width={56} height={56} />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>원형 72</StateLabel>
              <Skeleton variant="circular" width={72} height={72} />
            </Col>
          </Row>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. 실전 예시 ────────────────────────────────────────────

export const CardExample: Story = {
  name: '실전 예시',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="실전 예시 — 카드 스켈레톤"
        description="실제 UI 레이아웃에 맞춰 Skeleton을 조합한 예시입니다."
      >
        <CompareGrid
          items={[
            {
              label: '프로필 카드',
              content: (
                <View
                  style={{
                    padding: spacing.lg,
                    borderRadius: radius.md,
                    borderWidth: 1,
                    borderColor: coolNeutral[96],
                    width: 260,
                    gap: spacing.md,
                  }}
                >
                  <Row gap={spacing.md} align="center">
                    <Skeleton variant="circular" width={48} height={48} />
                    <View style={{ flex: 1, gap: spacing.sm }}>
                      <Skeleton variant="text" width={120} />
                      <Skeleton variant="text" width={80} height={12} />
                    </View>
                  </Row>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="80%" />
                </View>
              ),
            },
            {
              label: '미디어 카드',
              content: (
                <View
                  style={{
                    borderRadius: radius.md,
                    borderWidth: 1,
                    borderColor: coolNeutral[96],
                    width: 260,
                    overflow: 'hidden',
                  }}
                >
                  <Skeleton variant="rectangular" height={140} borderRadius={0} />
                  <View style={{ padding: spacing.lg, gap: spacing.sm }}>
                    <Skeleton variant="text" width="90%" />
                    <Skeleton variant="text" width="60%" height={12} />
                    <View style={{ marginTop: spacing.sm }}>
                      <Skeleton variant="rectangular" height={36} borderRadius={radius.sm} />
                    </View>
                  </View>
                </View>
              ),
            },
            {
              label: '리스트 아이템',
              content: (
                <View style={{ width: 260, gap: spacing.md }}>
                  {[0, 1, 2].map((i) => (
                    <Row key={i} gap={spacing.md} align="center">
                      <Skeleton variant="circular" width={36} height={36} />
                      <View style={{ flex: 1, gap: spacing.xs }}>
                        <Skeleton variant="text" width="70%" />
                        <Skeleton variant="text" width="40%" height={12} />
                      </View>
                      <Skeleton variant="rectangular" width={60} height={28} borderRadius={radius.sm} />
                    </Row>
                  ))}
                </View>
              ),
            },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 5. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="디자인 스펙"
        description="디자이너와 개발자를 위한 Skeleton 토큰 상세 스펙입니다."
      >
        <SpecTable
          title="기본값"
          rows={[
            { label: '배경색', value: coolNeutral[96], token: 'coolNeutral[96]' },
            { label: '쉬머 하이라이트', value: coolNeutral[90], token: 'coolNeutral[90]' },
            { label: '애니메이션 주기', value: '1.5s', token: '—' },
          ]}
        />

        <Divider />

        <SpecTable
          title="Text 변형"
          rows={[
            { label: '높이', value: '16px', token: '—' },
            { label: '너비', value: '100%', token: '—' },
            { label: '모서리 반경', value: '4px', token: '—' },
          ]}
        />

        <SpecTable
          title="Circular 변형"
          rows={[
            { label: '높이', value: '40px', token: '—' },
            { label: '너비', value: '40px', token: '—' },
            { label: '모서리 반경', value: '9999px', token: 'radius.full' },
          ]}
        />

        <SpecTable
          title="Rectangular 변형"
          rows={[
            { label: '높이', value: '100px', token: '—' },
            { label: '너비', value: '100%', token: '—' },
            { label: '모서리 반경', value: `${radius.sm}px`, token: 'radius.sm' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 6. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 Skeleton 컴포넌트 사용 예시입니다."
      >
        <CodeBlock
          title="Import"
          code={`import { Skeleton } from '@design-system/components/Skeleton';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<Skeleton variant="rectangular" />
<Skeleton variant="text" />
<Skeleton variant="circular" />`}
        />

        <CodeBlock
          title="커스텀 크기"
          code={`<Skeleton
  variant="rectangular"
  width={200}
  height={120}
  borderRadius={16}
/>`}
        />

        <CodeBlock
          title="카드 스켈레톤 조합"
          code={`<View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
  <Skeleton variant="circular" width={48} height={48} />
  <View style={{ flex: 1, gap: 8 }}>
    <Skeleton variant="text" width={120} />
    <Skeleton variant="text" width={80} height={12} />
  </View>
</View>`}
        />
      </Section>
    </View>
  ),
};
