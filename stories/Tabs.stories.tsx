import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from '../src/components/Tabs';
import {
  Section, StateLabel, Row, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle } from '../src/tokens/theme';

// ─── 토큰 매핑 (Single Source of Truth) ─────────────────────

const TOKEN_MAP = {
  activeText:    { token: 'color/text/primary',   value: semanticColor.textPrimary },
  inactiveText:  { token: 'color/text/tertiary',  value: semanticColor.textTertiary },
  indicator:     { token: 'color/text/primary',   value: semanticColor.textPrimary },
  divider:       { token: 'color/border/default',  value: semanticColor.borderDefault },
} as const;

const SIZE_TOKEN_MAP = {
  S: { typo: 'Body 2',   height: 40 },
  M: { typo: 'Headline',  height: 48 },
  L: { typo: 'Heading',   height: 56 },
} as const;

// ─── 공통 데이터 ─────────────────────────────────────────────

const defaultItems = [
  { key: 'tab1', label: '전체' },
  { key: 'tab2', label: '식단' },
  { key: 'tab3', label: '운동' },
];

const manyItems = [
  { key: 'tab1', label: '전체' },
  { key: 'tab2', label: '식단' },
  { key: 'tab3', label: '운동' },
  { key: 'tab4', label: '수면' },
  { key: 'tab5', label: '영양제' },
  { key: 'tab6', label: '수분' },
];

const disabledItems = [
  { key: 'tab1', label: '전체' },
  { key: 'tab2', label: '식단' },
  { key: 'tab3', label: '운동', disabled: true },
  { key: 'tab4', label: '수면', disabled: true },
];

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '탭 크기 (Figma: Size)',
    },
    resize: {
      control: 'select',
      options: ['hug', 'fill'],
      description: '탭 너비 모드 (Figma: Resize)',
    },
    value: {
      control: 'text',
      description: '선택된 탭 key (controlled)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState('tab1');
    return (
      <View style={{ maxWidth: 400 }}>
        <Tabs items={defaultItems} value={value} onChange={setValue} size="M" resize="hug" />
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 활성 `color/text/primary`, 비활성 `color/text/tertiary`, 인디케이터 `color/text/primary`, 구분선 `color/border/default`',
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
        description="Small(40px), Medium(48px), Large(56px) 세 가지 크기를 비교합니다."
      >
        <View style={{ gap: spacing.xlarge, maxWidth: 400 }}>
          {(['small', 'medium', 'large'] as const).map(size => (
            <Col key={size} gap={spacing.small}>
              <StateLabel>{`${size} — ${SIZE_TOKEN_MAP[size].height}px (${SIZE_TOKEN_MAP[size].typo})`}</StateLabel>
              <Tabs items={defaultItems} value="tab1" size={size} resize="hug" />
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
          '**S**: `Body 2` (15px · Regular)',
          '**M**: `Headline` (17px · SemiBold)',
          '**L**: `Heading` (20px · SemiBold)',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 3. Resize 비교 ──────────────────────────────────────────

export const ResizeModes: Story = {
  name: 'Resize 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Resize 비교"
        description="hug(텍스트 너비)과 fill(균등 분할)의 차이를 비교합니다."
      >
        <View style={{ gap: spacing.xlarge, maxWidth: 400 }}>
          <Col gap={spacing.small}>
            <StateLabel>hug — 텍스트 너비만큼</StateLabel>
            <Tabs items={defaultItems} value="tab1" size="M" resize="hug" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>fill — 균등 분할</StateLabel>
            <Tabs items={defaultItems} value="tab1" size="M" resize="fill" />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. 많은 탭 ──────────────────────────────────────────────

export const ManyTabs: Story = {
  name: '많은 탭',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="많은 탭 (6개)"
        description="탭 개수가 많을 때 hug/fill 각각의 레이아웃을 확인합니다."
      >
        <View style={{ gap: spacing.xlarge, maxWidth: 400 }}>
          <Col gap={spacing.small}>
            <StateLabel>hug</StateLabel>
            <Tabs items={manyItems} value="tab1" size="M" resize="hug" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>fill</StateLabel>
            <Tabs items={manyItems} value="tab1" size="M" resize="fill" />
          </Col>
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
        title="Disabled 탭"
        description="특정 탭이 비활성화된 상태입니다. 클릭 불가하며 색상이 흐려집니다."
      >
        <View style={{ maxWidth: 400 }}>
          <Tabs items={disabledItems} value="tab1" size="M" resize="hug" />
        </View>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '**Disabled 텍스트**: `color/text/tertiary` — 비활성과 동일 색상이지만 클릭 불가',
      },
    },
  },
};

// ─── 6. Controlled (인터랙티브) ──────────────────────────────

export const Controlled: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [value, setValue] = useState('tab1');
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="탭을 클릭하여 onChange 동작을 확인합니다."
        >
          <View style={{ gap: spacing.xlarge, maxWidth: 400 }}>
            <Col gap={spacing.small}>
              <StateLabel>hug / Medium</StateLabel>
              <Tabs items={defaultItems} value={value} onChange={setValue} size="M" resize="hug" />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>fill / Medium</StateLabel>
              <Tabs items={defaultItems} value={value} onChange={setValue} size="M" resize="fill" />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>fill / Large (6개 탭)</StateLabel>
              <Tabs items={manyItems} value={value} onChange={setValue} size="L" resize="fill" />
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
        description="Figma 시맨틱 토큰 기준 Tab 스펙입니다."
        badge="디자인"
      >
        <TokenSpecTable
          title="색상 토큰"
          rows={[
            { property: '활성 텍스트',   token: TOKEN_MAP.activeText.token,   value: TOKEN_MAP.activeText.value,   type: 'color' },
            { property: '비활성 텍스트', token: TOKEN_MAP.inactiveText.token, value: TOKEN_MAP.inactiveText.value, type: 'color' },
            { property: '인디케이터',   token: TOKEN_MAP.indicator.token,    value: TOKEN_MAP.indicator.value,    type: 'color' },
            { property: '하단 구분선',   token: TOKEN_MAP.divider.token,     value: TOKEN_MAP.divider.value,      type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="크기별 스펙"
          rows={[
            { property: 'S — 높이',     token: '—',         value: SIZE_TOKEN_MAP.S.height, type: 'size' },
            { property: 'S — 타이포',   token: 'Body 2',    value: `${textStyle.body2.fontSize}px / ${textStyle.body2.lineHeight}px / ${textStyle.body2.fontWeight}`, type: 'typography' },
            { property: 'M — 높이',     token: '—',         value: SIZE_TOKEN_MAP.M.height, type: 'size' },
            { property: 'M — 타이포',   token: 'Headline',  value: `${textStyle.headline.fontSize}px / ${textStyle.headline.lineHeight}px / ${textStyle.headline.fontWeight}`, type: 'typography' },
            { property: 'L — 높이',     token: '—',         value: SIZE_TOKEN_MAP.L.height, type: 'size' },
            { property: 'L — 타이포',   token: 'Heading',   value: `${textStyle.heading.fontSize}px / ${textStyle.heading.lineHeight}px / ${textStyle.heading.fontWeight}`, type: 'typography' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="공통 레이아웃"
          rows={[
            { property: '인디케이터 높이', token: '—',             value: 2,  type: 'size' },
            { property: '탭 간 gap (hug)', token: '—',             value: 24, type: 'size' },
            { property: '탭 상하 패딩',     token: '—',             value: 12, type: 'size' },
            { property: '탭 최소 너비',     token: '—',             value: 32, type: 'size' },
            { property: '구분선 높이',     token: '—',              value: 1,  type: 'size' },
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
        description="개발자를 위한 Tab 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { Tabs } from '@design-system/components/Tabs';`}
        />

        <CodeBlock
          title="기본 사용 (controlled)"
          code={`const [activeTab, setActiveTab] = useState('tab1');

<Tab
  items={[
    { key: 'tab1', label: '전체' },
    { key: 'tab2', label: '식단' },
    { key: 'tab3', label: '운동' },
  ]}
  value={activeTab}
  onChange={setActiveTab}
  size="M"
  resize="hug"
/>`}
        />

        <CodeBlock
          title="fill 모드 (균등 분할)"
          code={`<Tab
  items={items}
  value={activeTab}
  onChange={setActiveTab}
  resize="fill"
/>`}
        />

        <CodeBlock
          title="Disabled 탭"
          code={`<Tab
  items={[
    { key: 'tab1', label: '전체' },
    { key: 'tab2', label: '식단' },
    { key: 'tab3', label: '운동', disabled: true },
  ]}
  value={activeTab}
  onChange={setActiveTab}
/>`}
        />
      </Section>
    </View>
  ),
};
