import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SegmentedControl } from '../src/components/SegmentedControl';
import {
  Section, StateLabel, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, radius, shadow, textStyle } from '../src/tokens/theme';

// ─── 토큰 매핑 (Single Source of Truth) ─────────────────────

const TOKEN_MAP = {
  containerBg:   { token: 'color/background/tertiary', value: semanticColor.backgroundTertiary },
  activeBg:      { token: 'color/background/primary',  value: semanticColor.backgroundPrimary },
  activeShadow:  { token: 'Level 1',                    value: `offset(0,0) blur(${shadow.level1.shadowRadius}) opacity(${shadow.level1.shadowOpacity})` },
  activeText:    { token: 'color/text/primary',         value: semanticColor.textPrimary },
  inactiveText:  { token: 'color/text/secondary',       value: semanticColor.textSecondary },
  disabledText:  { token: 'color/text/tertiary',        value: semanticColor.textTertiary },
} as const;

// ─── 공통 데이터 ─────────────────────────────────────────────

const items3 = [
  { key: 'all', label: '전체' },
  { key: 'diet', label: '식단' },
  { key: 'exercise', label: '운동' },
];

const items2 = [
  { key: 'daily', label: '일간' },
  { key: 'weekly', label: '주간' },
];

const items5 = [
  { key: 'all', label: '전체' },
  { key: 'diet', label: '식단' },
  { key: 'exercise', label: '운동' },
  { key: 'sleep', label: '수면' },
  { key: 'supplement', label: '영양제' },
];

const disabledItems = [
  { key: 'all', label: '전체' },
  { key: 'diet', label: '식단' },
  { key: 'exercise', label: '운동', disabled: true },
];

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof SegmentedControl> = {
  title: 'Input/SegmentedControl',
  component: SegmentedControl,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '크기 (Figma: Size)',
    },
    value: {
      control: 'text',
      description: '선택된 세그먼트 key',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState('all');
    return (
      <View style={{ maxWidth: 375 }}>
        <SegmentedControl items={items3} value={value} onChange={setValue} size="medium" />
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 컨테이너 `color/background/tertiary`, 활성 `color/background/primary` + `Level 1` shadow, 텍스트 `color/text/primary`/`secondary`',
      },
    },
  },
};

// ─── 2. 크기별 ───────────────────────────────────────────────

export const Sizes: Story = {
  name: '크기별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="크기별"
        description="Small(32px), Medium(40px), Large(48px) 세 가지 크기를 비교합니다."
      >
        <View style={{ gap: spacing.xlarge, maxWidth: 375 }}>
          {(['small', 'medium', 'large'] as const).map(size => (
            <Col key={size} gap={spacing.small}>
              <StateLabel>{`${size}`}</StateLabel>
              <SegmentedControl items={items3} value="all" size={size} />
            </Col>
          ))}
        </View>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**Small**: `Label 2` (13px), height 32, radius S=`borderRadius/small`, segment=`borderRadius/xsmall`',
          '**Medium**: `Body 2` (15px), height 40, radius `borderRadius/small`',
          '**Large**: `Headline` (17px), height 48, radius `borderRadius/medium`, segment=`borderRadius/small`',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 3. 2개 항목 ─────────────────────────────────────────────

export const TwoItems: Story = {
  name: '2개 항목',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="2개 항목"
        description="세그먼트 2개인 케이스입니다."
      >
        <View style={{ maxWidth: 375 }}>
          <SegmentedControl items={items2} value="daily" size="medium" />
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. 5개 항목 ─────────────────────────────────────────────

export const FiveItems: Story = {
  name: '5개 항목',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="5개 항목"
        description="세그먼트 수가 많을 때의 레이아웃을 확인합니다."
      >
        <View style={{ maxWidth: 375 }}>
          <SegmentedControl items={items5} value="all" size="medium" />
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. Disabled ─────────────────────────────────────────────

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Disabled"
        description="특정 세그먼트가 비활성화된 상태입니다."
      >
        <View style={{ maxWidth: 375 }}>
          <SegmentedControl items={disabledItems} value="all" size="medium" />
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. 인터랙티브 데모 ──────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [value, setValue] = useState('all');
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="세그먼트를 클릭하여 onChange 동작을 확인합니다."
        >
          <View style={{ gap: spacing.xlarge, maxWidth: 375 }}>
            <Col gap={spacing.small}>
              <StateLabel>Medium (3개)</StateLabel>
              <SegmentedControl items={items3} value={value} onChange={setValue} size="medium" />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>Large (5개)</StateLabel>
              <SegmentedControl items={items5} value={value} onChange={setValue} size="large" />
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
        description="Figma 실측 기준 SegmentedControl 스펙입니다."
        badge="디자인"
      >
        <TokenSpecTable
          title="색상 토큰"
          rows={[
            { property: '컨테이너 배경',     token: TOKEN_MAP.containerBg.token,  value: TOKEN_MAP.containerBg.value,  type: 'color' },
            { property: '활성 세그먼트 배경', token: TOKEN_MAP.activeBg.token,     value: TOKEN_MAP.activeBg.value,     type: 'color' },
            { property: '활성 그림자',       token: 'Level 1',                     value: TOKEN_MAP.activeShadow.value },
            { property: '활성 텍스트',       token: TOKEN_MAP.activeText.token,    value: TOKEN_MAP.activeText.value,   type: 'color' },
            { property: '비활성 텍스트',     token: TOKEN_MAP.inactiveText.token,  value: TOKEN_MAP.inactiveText.value, type: 'color' },
            { property: 'Disabled 텍스트',   token: TOKEN_MAP.disabledText.token,  value: TOKEN_MAP.disabledText.value, type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="크기별 스펙 (Figma 실측)"
          rows={[
            { property: 'S — 높이',             token: '—', value: 32, type: 'size' },
            { property: 'S — 컨테이너 padding',  token: '—', value: 2,  type: 'size' },
            { property: 'S — 컨테이너 radius',   token: 'borderRadius/small',  value: radius.small,  type: 'size' },
            { property: 'S — 세그먼트 radius',   token: 'borderRadius/xsmall', value: radius.xsmall, type: 'size' },
            { property: 'S — 타이포',            token: 'Label 2', value: `${textStyle.label2.fontSize}px / ${textStyle.label2.lineHeight}px / Medium`, type: 'typography' },
            { property: 'M — 높이',             token: '—', value: 40, type: 'size' },
            { property: 'M — 컨테이너 padding',  token: '—', value: 2,  type: 'size' },
            { property: 'M — 컨테이너 radius',   token: 'borderRadius/small', value: radius.small, type: 'size' },
            { property: 'M — 세그먼트 radius',   token: 'borderRadius/small', value: radius.small, type: 'size' },
            { property: 'M — 타이포',            token: 'Body 2', value: `${textStyle.body2.fontSize}px / ${textStyle.body2.lineHeight}px / Medium`, type: 'typography' },
            { property: 'L — 높이',             token: '—', value: 48, type: 'size' },
            { property: 'L — 컨테이너 padding',  token: '—', value: 3,  type: 'size' },
            { property: 'L — 컨테이너 radius',   token: 'borderRadius/medium', value: radius.medium, type: 'size' },
            { property: 'L — 세그먼트 radius',   token: 'borderRadius/small',  value: radius.small,  type: 'size' },
            { property: 'L — 타이포',            token: 'Headline', value: `${textStyle.headline.fontSize}px / ${textStyle.headline.lineHeight}px / Medium`, type: 'typography' },
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
        description="개발자를 위한 SegmentedControl 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { SegmentedControl } from '@design-system/components/SegmentedControl';`}
        />

        <CodeBlock
          title="기본 사용 (controlled)"
          code={`const [period, setPeriod] = useState('daily');

<SegmentedControl
  items={[
    { key: 'daily', label: '일간' },
    { key: 'weekly', label: '주간' },
    { key: 'monthly', label: '월간' },
  ]}
  value={period}
  onChange={setPeriod}
  size="medium"
/>`}
        />

        <CodeBlock
          title="Disabled 항목"
          code={`<SegmentedControl
  items={[
    { key: 'all', label: '전체' },
    { key: 'diet', label: '식단' },
    { key: 'exercise', label: '운동', disabled: true },
  ]}
  value={selected}
  onChange={setSelected}
/>`}
        />

        <CodeBlock
          title="Tab과의 차이"
          code={`// Tab = 콘텐츠 전환 네비게이션 (페이지 레벨)
// role="tablist" + role="tab"
<Tab items={tabs} value={activeTab} onChange={setActiveTab} />

// SegmentedControl = 옵션 선택 폼 컨트롤 (값 선택)
// role="radiogroup" + role="radio"
<SegmentedControl items={options} value={selected} onChange={setSelected} />`}
        />
      </Section>
    </View>
  ),
};
