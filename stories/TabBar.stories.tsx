import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabBar } from '../src/components/TabBar';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius, semanticColor } from '../src/tokens/theme';

const defaultTabs = [
  { key: 'home', label: '홈' },
  { key: 'search', label: '검색' },
  { key: 'notifications', label: '알림' },
  { key: 'my', label: '마이' },
];

const iconTabs = [
  { key: 'home', label: '홈', icon: 'house' },
  { key: 'search', label: '검색', icon: 'magnifying-glass' },
  { key: 'notifications', label: '알림', icon: 'bell' },
  { key: 'my', label: '마이', icon: 'user-circle' },
];

const meta: Meta<typeof TabBar> = {
  title: 'Components/TabBar',
  component: TabBar,
  argTypes: {
    activeTab: {
      control: 'select',
      options: ['home', 'search', 'notifications', 'my'],
      description: '활성 탭 키',
    },
    variant: {
      control: 'select',
      options: ['default', 'floating'],
      description: '스타일 변형',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TabBar>;

const PreviewContainer = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <View style={{
    backgroundColor: dark ? coolNeutral[17] : coolNeutral[99],
    paddingTop: spacing['3xl'],
    borderRadius: radius.md,
    overflow: 'hidden',
  }}>
    {children}
  </View>
);

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    tabs: defaultTabs,
    activeTab: 'home',
    variant: 'default',
  },
};

// ─── 2. 기본 탭바 ───────────────────────────────────────────

export const Default: Story = {
  name: '기본 탭바',
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    return (
      <Section
        title="기본 탭바"
        description="4개 탭이 포함된 인터랙티브 탭바입니다. 탭을 눌러 전환해 보세요."
      >
        <PreviewContainer>
          <TabBar
            tabs={defaultTabs}
            activeTab={activeTab}
            onTabPress={setActiveTab}
          />
        </PreviewContainer>
        <View style={{ marginTop: spacing.md }}>
          <Text style={{ fontSize: fontSize.sm, color: coolNeutral[50] }}>
            현재 활성 탭: <Text style={{ fontWeight: fontWeight.bold, color: mint[45] }}>{activeTab}</Text>
          </Text>
        </View>
      </Section>
    );
  },
};

// ─── 3. 플로팅 변형 ────────────────────────────────────────────

export const Floating: Story = {
  name: '플로팅 변형',
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    return (
      <Section
        title="플로팅 변형"
        description="둥근 모서리와 그림자가 적용된 플로팅 스타일 탭바입니다."
      >
        <PreviewContainer dark>
          <TabBar
            tabs={defaultTabs}
            activeTab={activeTab}
            onTabPress={setActiveTab}
            variant="floating"
          />
        </PreviewContainer>
      </Section>
    );
  },
};

// ─── 4. 아이콘 탭바 ────────────────────────────────────────────

export const WithIcons: Story = {
  name: '아이콘 탭바',
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    return (
      <View style={{ gap: spacing['3xl'] }}>
        <Section
          title="아이콘 탭바"
          description="아이콘이 포함된 탭바입니다. Icon 컴포넌트와 함께 사용합니다."
        >
          <CompareGrid
            items={[
              {
                label: 'Default',
                content: (
                  <PreviewContainer>
                    <TabBar
                      tabs={iconTabs}
                      activeTab={activeTab}
                      onTabPress={setActiveTab}
                    />
                  </PreviewContainer>
                ),
              },
              {
                label: 'Floating',
                content: (
                  <PreviewContainer dark>
                    <TabBar
                      tabs={iconTabs}
                      activeTab={activeTab}
                      onTabPress={setActiveTab}
                      variant="floating"
                    />
                  </PreviewContainer>
                ),
              },
            ]}
          />
        </Section>
      </View>
    );
  },
};

// ─── 5. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="디자인 스펙"
        description="TabBar 컴포넌트의 디자인 토큰 상세 스펙입니다."
      >
        <SpecTable
          title="컨테이너 (Default)"
          rows={[
            { label: '높이', value: '56px', token: '—' },
            { label: '배경색', value: '#FFFFFF', token: 'palette.white' },
            { label: '상단 테두리', value: `1px ${coolNeutral[96]}`, token: 'coolNeutral[96]' },
            { label: '방향', value: 'row', token: '—' },
          ]}
        />

        <SpecTable
          title="컨테이너 (Floating)"
          rows={[
            { label: '높이', value: '52px', token: '—' },
            { label: '배경색', value: '#FFFFFF', token: 'palette.white' },
            { label: '모서리 반경', value: '28px', token: '—' },
            { label: '좌우 마진', value: '16px', token: '—' },
            { label: '하단 마진', value: '8px', token: '—' },
            { label: '그림자 색상', value: '#000000', token: 'palette.black' },
            { label: '그림자 오프셋', value: '0 / 2', token: '—' },
            { label: '그림자 투명도', value: '0.08', token: '—' },
            { label: '그림자 반경', value: '8px', token: '—' },
          ]}
        />

        <SpecTable
          title="탭 아이템"
          rows={[
            { label: '정렬', value: 'flex: 1, center', token: '—' },
            { label: '간격', value: '2px', token: '—' },
          ]}
        />

        <SpecTable
          title="라벨"
          rows={[
            { label: '폰트 크기', value: `${fontSize.xs}px`, token: 'fontSize.xs' },
            { label: '활성 색상', value: mint[45], token: 'mint[45]' },
            { label: '비활성 색상', value: coolNeutral[60], token: 'coolNeutral[60]' },
            { label: '활성 굵기', value: fontWeight.semibold, token: 'fontWeight.semibold' },
            { label: '비활성 굵기', value: fontWeight.medium, token: 'fontWeight.medium' },
          ]}
        />

        <SpecTable
          title="아이콘"
          rows={[
            { label: '크기', value: '24px', token: '—' },
            { label: '활성 색상', value: mint[45], token: 'mint[45]' },
            { label: '비활성 색상', value: coolNeutral[60], token: 'coolNeutral[60]' },
          ]}
        />

        <SpecTable
          title="활성 인디케이터"
          rows={[
            { label: '크기', value: '4px (원형)', token: '—' },
            { label: '배경색', value: mint[45], token: 'mint[45]' },
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
        description="개발자를 위한 TabBar 컴포넌트 사용 예시입니다."
      >
        <CodeBlock
          title="Import"
          code={`import { TabBar } from '@design-system/components/TabBar';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`const [activeTab, setActiveTab] = useState('home');

<TabBar
  tabs={[
    { key: 'home', label: '홈' },
    { key: 'search', label: '검색' },
    { key: 'notifications', label: '알림' },
    { key: 'my', label: '마이' },
  ]}
  activeTab={activeTab}
  onTabPress={setActiveTab}
/>`}
        />

        <CodeBlock
          title="아이콘과 함께 사용"
          code={`<TabBar
  tabs={[
    { key: 'home', label: '홈', icon: 'house' },
    { key: 'search', label: '검색', icon: 'magnifying-glass' },
    { key: 'notifications', label: '알림', icon: 'bell' },
    { key: 'my', label: '마이', icon: 'user-circle' },
  ]}
  activeTab={activeTab}
  onTabPress={setActiveTab}
/>`}
        />

        <CodeBlock
          title="플로팅 변형"
          code={`<TabBar
  tabs={tabs}
  activeTab={activeTab}
  onTabPress={setActiveTab}
  variant="floating"
/>`}
        />

        <Divider />

        <Col gap={spacing.sm}>
          <StateLabel>Props</StateLabel>
          <SpecTable
            rows={[
              { label: 'tabs', value: 'TabItem[]', token: '탭 아이템 배열 (필수)' },
              { label: 'activeTab', value: 'string', token: '활성 탭 key (필수)' },
              { label: 'onTabPress', value: '(key: string) => void', token: '탭 클릭 콜백' },
              { label: 'variant', value: "'default' | 'floating'", token: '스타일 변형 (기본: default)' },
            ]}
          />
        </Col>

        <Col gap={spacing.sm}>
          <StateLabel>TabItem</StateLabel>
          <SpecTable
            rows={[
              { label: 'key', value: 'string', token: '고유 식별자 (필수)' },
              { label: 'label', value: 'string', token: '탭 라벨 (필수)' },
              { label: 'icon', value: 'string', token: 'Icon 이름 (선택)' },
            ]}
          />
        </Col>
      </Section>
    </View>
  ),
};
