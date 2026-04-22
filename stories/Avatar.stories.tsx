import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../src/components/Avatar';
import { Section, StateLabel, Row, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', 'xlarge'], description: '크기' },
    name: { control: 'text', description: '이니셜용 이름' },
    online: { control: 'boolean', description: '온라인 상태 표시' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {
  render: () => (
    <Row gap={spacing.large} align="center">
      <Avatar name="은지" size="small" />
      <Avatar name="은지" size="medium" />
      <Avatar name="은지" size="large" />
      <Avatar name="은지" size="xlarge" />
    </Row>
  ),
};

export const Sizes: Story = {
  name: '크기별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="크기별" description="small(32) / medium(40) / large(56) / xlarge(80)">
        <Row gap={spacing.large} align="flex-end">
          {(['small', 'medium', 'large', 'xlarge'] as const).map(size => (
            <Col key={size} gap={spacing.small}>
              <StateLabel>{size}</StateLabel>
              <Avatar name="바이오" size={size} />
            </Col>
          ))}
        </Row>
      </Section>
    </View>
  ),
};

export const OnlineStatus: Story = {
  name: '온라인 상태',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="온라인 상태" description="online prop으로 초록색 상태 점을 표시합니다.">
        <Row gap={spacing.large} align="center">
          <Col gap={spacing.small}><StateLabel>오프라인</StateLabel><Avatar name="은지" size="large" /></Col>
          <Col gap={spacing.small}><StateLabel>온라인</StateLabel><Avatar name="은지" size="large" online /></Col>
        </Row>
      </Section>
    </View>
  ),
};

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={`import { Avatar } from '@design-system/components/Avatar';`} />
        <CodeBlock title="기본 사용" code={`<Avatar name="은지" size="medium" />\n<Avatar name="은지" size="large" online />`} />
      </Section>
    </View>
  ),
};
