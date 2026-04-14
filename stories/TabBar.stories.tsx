import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabBar, BIOCOM_TABS } from '../src/components/TabBar';
import { Section, StateLabel, Col, SpecTable, CodeBlock, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof TabBar> = {
  title: 'Navigation/TabBar',
  component: TabBar,
  argTypes: {
    activeTab: {
      control: 'select',
      options: ['contents', 'goal', 'main', 'ai', 'shop'],
      description: '활성 탭 키',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TabBar>;

const PreviewContainer = ({ children }: { children: React.ReactNode }) => (
  <View style={{
    backgroundColor: coolNeutral[99],
    paddingTop: spacing['3xlarge'],
    borderRadius: radius.medium,
    overflow: 'hidden',
  }}>
    {children}
  </View>
);

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('main');
    return (
      <PreviewContainer>
        <TabBar
          tabs={BIOCOM_TABS}
          activeTab={activeTab}
          onTabPress={setActiveTab}
        />
      </PreviewContainer>
    );
  },
};

// ─── 2. 바이오컴 탭바 ───────────────────────────────────────

export const BiocomTabBar: Story = {
  name: '바이오컴 탭바',
  render: () => {
    const [activeTab, setActiveTab] = useState('main');
    return (
      <Section
        title="바이오컴 탭바"
        description="콘텐츠 · 목표 · 메인 · AI · 쇼핑 — 바이오컴 서비스의 기본 하단 내비게이션입니다."
      >
        <PreviewContainer>
          <TabBar
            tabs={BIOCOM_TABS}
            activeTab={activeTab}
            onTabPress={setActiveTab}
          />
        </PreviewContainer>
        <View style={{ marginTop: spacing.medium }}>
          <Text style={{ fontSize: fontSize.small, color: coolNeutral[50] }}>
            현재 활성 탭: <Text style={{ fontWeight: fontWeight.bold, color: semanticColor.textBrand }}>{activeTab}</Text>
          </Text>
        </View>
      </Section>
    );
  },
};

// ─── 3. 탭별 활성 상태 ──────────────────────────────────────

export const ActiveStates: Story = {
  name: '탭별 활성 상태',
  render: () => (
    <Section
      title="탭별 활성 상태"
      description="각 탭이 활성화된 상태를 한눈에 비교합니다."
    >
      <Col gap={spacing.xlarge}>
        {BIOCOM_TABS.map((tab) => (
          <Col key={tab.key} gap={spacing.small}>
            <StateLabel>{`${tab.label} 활성`}</StateLabel>
            <PreviewContainer>
              <TabBar tabs={BIOCOM_TABS} activeTab={tab.key} />
            </PreviewContainer>
          </Col>
        ))}
      </Col>
    </Section>
  ),
};

// ─── 4. 아이콘 매핑 ────────────────────────────────────────

export const IconMapping: Story = {
  name: '아이콘 매핑',
  render: () => (
    <Section
      title="아이콘 매핑"
      description="각 탭에 사용된 Icon 컴포넌트 이름입니다. 모두 기존 Icon 파운데이션에서 가져옵니다."
    >
      <SpecTable
        title="탭 → 아이콘 매핑"
        rows={[
          { label: '콘텐츠', value: 'stack', token: '<Icon name="stack" />' },
          { label: '목표', value: 'streak', token: '<Icon name="streak" />' },
          { label: '메인', value: 'house', token: '<Icon name="house" />' },
          { label: 'AI', value: 'heart', token: '<Icon name="heart" />' },
          { label: '쇼핑', value: 'shopping-cart-simple', token: '<Icon name="shopping-cart-simple" />' },
        ]}
      />

      <Divider />

      <SpecTable
        title="색상 토큰"
        rows={[
          { label: '활성 아이콘', value: semanticColor.iconBrand, token: 'semanticColor.iconBrand' },
          { label: '비활성 아이콘', value: semanticColor.iconDisabled, token: 'semanticColor.iconDisabled' },
          { label: '활성 텍스트', value: semanticColor.textBrand, token: 'semanticColor.textBrand' },
          { label: '비활성 텍스트', value: semanticColor.textSecondary, token: 'semanticColor.textSecondary' },
          { label: '배경', value: semanticColor.backgroundStatus, token: 'semanticColor.backgroundStatus' },
          { label: '구분선', value: semanticColor.borderDefault, token: 'semanticColor.borderDefault' },
        ]}
      />
    </Section>
  ),
};

// ─── 5. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <Section title="디자인 스펙" description="TabBar 컴포넌트의 레이아웃 토큰 명세입니다.">
      <Col gap={spacing.xlarge}>
        <SpecTable
          title="컨테이너"
          rows={[
            { label: '높이', value: '60px', token: '—' },
            { label: '배경색', value: semanticColor.backgroundStatus, token: 'semanticColor.backgroundStatus' },
            { label: '상단 테두리', value: semanticColor.borderDefault, token: 'semanticColor.borderDefault' },
            { label: '하단 패딩', value: `${spacing.xsmall}px`, token: 'spacing.xsmall' },
          ]}
        />
        <SpecTable
          title="탭 아이템"
          rows={[
            { label: '아이콘 크기', value: '24px', token: '—' },
            { label: '라벨 폰트', value: `${fontSize.xsmall}px`, token: 'fontSize.xsmall' },
            { label: '아이콘-라벨 간격', value: `${spacing.xsmall}px`, token: 'spacing.xsmall' },
            { label: '상단 패딩', value: `${spacing.small}px`, token: 'spacing.small' },
          ]}
        />
      </Col>
    </Section>
  ),
};

// ─── 6. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <Section title="사용 가이드" description="개발자를 위한 TabBar 컴포넌트 사용 예시입니다.">
      <Col gap={spacing.large}>
        <CodeBlock
          title="Import"
          code={`import { TabBar, BIOCOM_TABS } from '@design-system/components/TabBar';`}
        />

        <CodeBlock
          title="바이오컴 기본 탭바 (가장 간단한 사용법)"
          code={`const [activeTab, setActiveTab] = useState('main');

<TabBar
  tabs={BIOCOM_TABS}
  activeTab={activeTab}
  onTabPress={setActiveTab}
/>`}
        />

        <CodeBlock
          title="커스텀 탭 구성"
          code={`<TabBar
  tabs={[
    { key: 'contents', label: '콘텐츠', icon: 'stack' },
    { key: 'goal', label: '목표', icon: 'streak' },
    { key: 'main', label: '메인', icon: 'house' },
    { key: 'ai', label: 'AI', icon: 'heart' },
    { key: 'shop', label: '쇼핑', icon: 'shopping-cart-simple' },
  ]}
  activeTab={activeTab}
  onTabPress={setActiveTab}
/>`}
        />
      </Col>
    </Section>
  ),
};
