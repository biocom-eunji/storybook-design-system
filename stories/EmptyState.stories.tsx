import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from '../src/components/EmptyState';
import { Section, StateLabel, Col, CodeBlock } from './storyHelpers';
import { spacing, semanticColor, radius } from '../src/tokens/theme';

const meta: Meta<typeof EmptyState> = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: 'text' },
    actionLabel: { control: 'text' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Playground: Story = {
  render: () => (
    <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: radius.small }}>
      <EmptyState
        icon="magnifying-glass"
        title="검색 결과가 없어요"
        description="다른 검색어를 입력해보세요."
      />
    </View>
  ),
};

export const Variants: Story = {
  name: '다양한 케이스',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="다양한 케이스" description="아이콘, 설명, CTA 조합을 확인합니다.">
        <View style={{ gap: spacing.xlarge, maxWidth: 375 }}>
          <Col gap={spacing.small}>
            <StateLabel>아이콘 + 제목 + 설명</StateLabel>
            <View style={{ borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: radius.small }}>
              <EmptyState icon="magnifying-glass" title="검색 결과가 없어요" description="다른 검색어를 입력해보세요." />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>아이콘 + 제목 + CTA</StateLabel>
            <View style={{ borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: radius.small }}>
              <EmptyState icon="plus" title="아직 기록이 없어요" description="오늘 첫 식단을 기록해보세요." actionLabel="기록 시작하기" onAction={() => {}} />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>제목만</StateLabel>
            <View style={{ borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: radius.small }}>
              <EmptyState title="데이터가 없습니다" />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={`import { EmptyState } from '@design-system/components/EmptyState';`} />
        <CodeBlock title="기본 사용" code={`<EmptyState\n  icon="plus"\n  title="아직 기록이 없어요"\n  description="오늘 첫 식단을 기록해보세요."\n  actionLabel="기록 시작하기"\n  onAction={handleCreate}\n/>`} />
      </Section>
    </View>
  ),
};
