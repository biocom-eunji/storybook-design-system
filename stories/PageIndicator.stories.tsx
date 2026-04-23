import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageIndicator } from '../src/components/PageIndicator';
import {
  Section, StateLabel, Row, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, opacity } from '../src/tokens/theme';

// ─── 토큰 매핑 (Single Source of Truth) ─────────────────────

const TOKEN_MAP = {
  normal: {
    color:          { token: 'color/icon/primary',   value: semanticColor.iconPrimary },
    activeOpacity:  { token: 'opacity/100',           value: opacity[100] },
    inactiveOpacity:{ token: 'opacity/16',            value: opacity[16] },
  },
  white: {
    color:          { token: 'color/icon/onColor',   value: semanticColor.iconOnColor },
    activeOpacity:  { token: 'opacity/100',           value: opacity[100] },
    inactiveOpacity:{ token: 'opacity/52',            value: opacity[52] },
  },
} as const;

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof PageIndicator> = {
  title: 'Navigation/PageIndicator',
  component: PageIndicator,
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'inverse'],
      description: '색상 변형 (Figma: Variant)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: '크기 (Figma: Size)',
    },
    total: {
      control: { type: 'range', min: 2, max: 10 },
      description: '전체 페이지 수',
    },
    current: {
      control: { type: 'range', min: 0, max: 9 },
      description: '현재 페이지 index (0-based)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageIndicator>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [current, setCurrent] = useState(0);
    return <PageIndicator variant="normal" size="medium" total={5} current={current} onChange={setCurrent} />;
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 활성 `color/icon/primary` + `opacity/100`, 비활성 `opacity/16`, 축소 dot: distance별 10→8→6px',
      },
    },
  },
};

// ─── 2. Variant 비교 ─────────────────────────────────────────

export const Variants: Story = {
  name: 'Variant 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Variant 비교"
        description="normal(어두운 점)과 white(밝은 점)를 비교합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>normal</StateLabel>
            <PageIndicator variant="normal" size="medium" total={5} current={0} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>white (어두운 배경)</StateLabel>
            <View style={{
              backgroundColor: semanticColor.backgroundInverse,
              padding: spacing.large,
              borderRadius: spacing.small,
            }}>
              <PageIndicator variant="white" size="medium" total={5} current={0} />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**Normal**: `color/icon/primary` + 비활성 `opacity/16`',
          '**White**: `color/icon/onColor` + 비활성 `opacity/52`',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 3. Size 비교 ────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Size 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Size 비교"
        description="small과 medium 두 가지 크기를 비교합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>medium — 활성 10px, gap 10px</StateLabel>
            <PageIndicator variant="normal" size="medium" total={5} current={0} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>small — 활성 6px, gap 6px</StateLabel>
            <PageIndicator variant="normal" size="small" total={5} current={0} />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. Matrix ───────────────────────────────────────────────

export const Matrix: Story = {
  name: 'Variant × Size 매트릭스',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Variant × Size 매트릭스"
        description="모든 조합을 한 화면에서 비교합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>normal / medium</StateLabel>
            <PageIndicator variant="normal" size="medium" total={5} current={0} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>normal / small</StateLabel>
            <PageIndicator variant="normal" size="small" total={5} current={0} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>white / medium</StateLabel>
            <View style={{ backgroundColor: semanticColor.backgroundInverse, padding: spacing.large, borderRadius: spacing.small }}>
              <PageIndicator variant="white" size="medium" total={5} current={0} />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>white / small</StateLabel>
            <View style={{ backgroundColor: semanticColor.backgroundInverse, padding: spacing.large, borderRadius: spacing.small }}>
              <PageIndicator variant="white" size="small" total={5} current={0} />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. Positions ────────────────────────────────────────────

export const Positions: Story = {
  name: '위치별 (Fade 방향)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="위치별 (Fade 방향)"
        description="current를 변경하여 축소 dot의 fade 방향을 확인합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          {[0, 2, 4].map(current => (
            <Col key={current} gap={spacing.small}>
              <StateLabel>{`current=${current} (${current + 1}번째)`}</StateLabel>
              <PageIndicator variant="normal" size="medium" total={5} current={current} />
            </Col>
          ))}
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. Interactive ──────────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [current, setCurrent] = useState(0);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="점을 클릭하여 current를 변경합니다."
        >
          <View style={{ gap: spacing.xlarge }}>
            <Col gap={spacing.small}>
              <StateLabel>medium (클릭 가능)</StateLabel>
              <PageIndicator variant="normal" size="medium" total={7} current={current} onChange={setCurrent} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>white (클릭 가능)</StateLabel>
              <View style={{ backgroundColor: semanticColor.backgroundInverse, padding: spacing.large, borderRadius: spacing.small }}>
                <PageIndicator variant="white" size="medium" total={7} current={current} onChange={setCurrent} />
              </View>
            </Col>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 7. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="Figma 실측 기준 Dot 스펙입니다."
        badge="디자인"
      >
        {(['normal', 'inverse'] as const).map(variant => (
          <View key={variant}>
            <TokenSpecTable
              title={`variant: ${variant}`}
              rows={[
                { property: 'Dot 색상',       token: TOKEN_MAP[variant].color.token,           value: TOKEN_MAP[variant].color.value,           type: 'color' },
                { property: '활성 opacity',   token: TOKEN_MAP[variant].activeOpacity.token,   value: TOKEN_MAP[variant].activeOpacity.value,   type: 'opacity' },
                { property: '비활성 opacity', token: TOKEN_MAP[variant].inactiveOpacity.token, value: TOKEN_MAP[variant].inactiveOpacity.value, type: 'opacity' },
              ]}
            />
            <Divider />
          </View>
        ))}

        <TokenSpecTable
          title="medium 사이즈 (Figma 실측)"
          rows={[
            { property: '활성 dot (distance 0)',   token: '—', value: 10, type: 'size' },
            { property: '인접 비활성 (distance 1)', token: '—', value: 10, type: 'size' },
            { property: '1단계 축소 (distance 2)',  token: '—', value: 8,  type: 'size' },
            { property: '2단계 축소 (distance 3+)', token: '—', value: 6,  type: 'size' },
            { property: 'gap',                      token: '—', value: 10, type: 'size' },
          ]}
        />

        <TokenSpecTable
          title="small 사이즈 (Figma 실측)"
          rows={[
            { property: '활성 dot (distance 0)',   token: '—', value: 6, type: 'size' },
            { property: '인접 비활성 (distance 1)', token: '—', value: 6, type: 'size' },
            { property: '1단계 축소 (distance 2)',  token: '—', value: 4, type: 'size' },
            { property: '2단계 축소 (distance 3+)', token: '—', value: 2, type: 'size' },
            { property: 'gap',                      token: '—', value: 6, type: 'size' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 8. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 Dot 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { PageIndicator } from '@design-system/components/PageIndicator';`}
        />

        <CodeBlock
          title="기본 사용 (표시 전용)"
          code={`<PageIndicator total={5} current={currentPage} />`}
        />

        <CodeBlock
          title="클릭 가능 (onChange)"
          code={`<Dot
  total={5}
  current={currentPage}
  onChange={setCurrentPage}
/>`}
        />

        <CodeBlock
          title="어두운 배경 위 (white variant)"
          code={`<View style={{ backgroundColor: semanticColor.backgroundInverse }}>
  <PageIndicator variant="white" total={5} current={currentPage} />
</View>`}
        />

        <CodeBlock
          title="캐러셀과 함께"
          code={`const [page, setPage] = useState(0);

<Carousel onPageChange={setPage}>
  {slides}
</Carousel>
<PageIndicator total={slides.length} current={page} size="small" />`}
        />
      </Section>
    </View>
  ),
};
