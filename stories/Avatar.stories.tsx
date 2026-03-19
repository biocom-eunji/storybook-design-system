import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../src/components/Avatar';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider as DividerLine } from './storyHelpers';
import { coolNeutral, mint, red, yellow, fontSize, fontWeight, spacing, radius, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    name: {
      control: 'text',
      description: '사용자 이름 (첫 글자가 이니셜로 표시)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: '아바타 크기',
    },
    online: {
      control: 'boolean',
      description: '온라인 상태 표시 여부',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    name: '홍길동',
    size: 'medium',
    online: false,
  },
};

// ─── 2. 모든 크기 ───────────────────────────────────────────

export const AllSizes: Story = {
  name: '모든 크기',
  render: () => (
    <Section
      title="크기 비교"
      description="Small(32px), Medium(40px), Large(56px), XLarge(80px) 네 가지 크기를 비교합니다."
    >
      <Row gap={spacing['2xlarge']} align="flex-end">
        <Col gap={spacing.small}>
          <StateLabel>Small (32px)</StateLabel>
          <Avatar name="김민수" size="small" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>Medium (40px)</StateLabel>
          <Avatar name="김민수" size="medium" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>Large (56px)</StateLabel>
          <Avatar name="김민수" size="large" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>XLarge (80px)</StateLabel>
          <Avatar name="김민수" size="xlarge" />
        </Col>
      </Row>
    </Section>
  ),
};

// ─── 3. 이니셜 폴백 ─────────────────────────────────────────

export const InitialFallback: Story = {
  name: '이니셜 폴백',
  render: () => (
    <Section
      title="이니셜 폴백"
      description="이미지가 없을 때 이름의 첫 글자가 이니셜로 표시됩니다."
    >
      <Row gap={spacing['2xlarge']}>
        <Col gap={spacing.small}>
          <StateLabel>한글 이름</StateLabel>
          <Avatar name="홍길동" size="large" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>영문 이름</StateLabel>
          <Avatar name="Alice" size="large" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>이름 없음</StateLabel>
          <Avatar size="large" />
        </Col>
      </Row>
    </Section>
  ),
};

// ─── 4. 온라인 상태 ─────────────────────────────────────────

export const OnlineStatus: Story = {
  name: '온라인 상태',
  render: () => (
    <Section
      title="온라인 상태 표시"
      description="online prop을 통해 온라인 상태를 녹색 점으로 표시합니다."
    >
      <CompareGrid
        items={[
          {
            label: '오프라인 (기본)',
            content: <Avatar name="김철수" size="large" />,
          },
          {
            label: '온라인',
            content: <Avatar name="김철수" size="large" online />,
          },
        ]}
      />

      <DividerLine />

      <Row gap={spacing['2xlarge']} align="flex-end">
        <Col gap={spacing.small}>
          <StateLabel>Small</StateLabel>
          <Avatar name="A" size="small" online />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>Medium</StateLabel>
          <Avatar name="B" size="medium" online />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>Large</StateLabel>
          <Avatar name="C" size="large" online />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>XLarge</StateLabel>
          <Avatar name="D" size="xlarge" online />
        </Col>
      </Row>
    </Section>
  ),
};

// ─── 5. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="디자이너와 개발자를 위한 Avatar 토큰 상세 스펙입니다."
      >
        <SpecTable
          title="크기별 스펙"
          rows={[
            { label: 'Small 크기', value: '32px', token: 'SIZE_MAP.small.container' },
            { label: 'Small 폰트', value: '13px', token: 'fontSize.small' },
            { label: 'Medium 크기', value: '40px', token: 'SIZE_MAP.medium.container' },
            { label: 'Medium 폰트', value: '15px', token: 'fontSize.medium' },
            { label: 'Large 크기', value: '56px', token: 'SIZE_MAP.large.container' },
            { label: 'Large 폰트', value: '20px', token: 'fontSize.xlarge' },
            { label: 'XLarge 크기', value: '80px', token: 'SIZE_MAP.xlarge.container' },
            { label: 'XLarge 폰트', value: '28px', token: "fontSize['3xlarge']" },
          ]}
        />

        <DividerLine />

        <SpecTable
          title="컬러 토큰"
          rows={[
            { label: '폴백 배경색', value: coolNeutral[97], token: 'coolNeutral[97]' },
            { label: '이니셜 텍스트', value: coolNeutral[50], token: 'coolNeutral[50]' },
            { label: '온라인 점 색상', value: mint[45], token: 'mint[45]' },
            { label: '온라인 점 테두리', value: '#FFFFFF', token: 'coolNeutral[100]' },
            { label: '테두리 두께', value: '2px', token: '—' },
          ]}
        />

        <SpecTable
          title="모서리 반경"
          rows={[
            { label: '형태', value: '원형 (size / 2)', token: '—' },
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
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 Avatar 컴포넌트 사용 예시입니다."
      >
        <CodeBlock
          title="Import"
          code={`import { Avatar } from '@design-system/components/Avatar';`}
        />

        <CodeBlock
          title="이미지 아바타"
          code={`<Avatar
  source={{ uri: 'https://example.com/photo.jpg' }}
  name="홍길동"
  size="medium"
/>`}
        />

        <CodeBlock
          title="이니셜 폴백"
          code={`<Avatar name="홍길동" size="large" />`}
        />

        <CodeBlock
          title="온라인 상태"
          code={`<Avatar name="홍길동" size="medium" online />`}
        />
      </Section>
    </View>
  ),
};
