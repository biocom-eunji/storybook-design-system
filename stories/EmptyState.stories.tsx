import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from '../src/components/EmptyState';
import { Section, StateLabel, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import {
  spacing, semanticColor, radius, textStyle, fontWeight as fw,
} from '../src/tokens/theme';

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

// ─── 구성 요소별 토큰 매핑 ──────────────────────────────────

const ELEMENT_TOKEN_MAP = {
  icon: {
    color: 'color/icon/disabled',
    size:  '48dp',
  },
  title: {
    color: 'color/text/primary',
    typo:  'Headline',
  },
  description: {
    color: 'color/text/secondary',
    typo:  'Body 2',
  },
  cta: {
    component: 'Button (solid / primary / medium)',
  },
} as const;

const elementColors: Record<string, string> = {
  'color/icon/disabled':   semanticColor.iconDisabled,
  'color/text/primary':    semanticColor.textPrimary,
  'color/text/secondary':  semanticColor.textSecondary,
};

const resolve = (token: string) => elementColors[token] ?? token;

// ─── 실전 예시 ──────────────────────────────────────────────

export const InContext: Story = {
  name: '실전 예시',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="실전 예시"
        description="실제 화면에서 EmptyState가 배치되는 맥락을 확인합니다."
      >
        <View style={{ gap: spacing['2xlarge'], maxWidth: 375 }}>
          {/* 식단 기록 빈 상태 */}
          <Col gap={spacing.small}>
            <StateLabel>식단 기록 리스트</StateLabel>
            <View style={{
              borderWidth: 1,
              borderColor: semanticColor.borderDefault,
              borderRadius: radius.large,
              overflow: 'hidden',
            }}>
              <View style={{
                backgroundColor: semanticColor.backgroundPrimary,
                paddingHorizontal: spacing.xlarge,
                paddingVertical: spacing.medium,
                borderBottomWidth: 1,
                borderBottomColor: semanticColor.borderDefault,
              }}>
                <Text style={{
                  fontSize: textStyle.headline.fontSize,
                  fontWeight: fw.semibold,
                  color: semanticColor.textPrimary,
                }}>
                  오늘의 식단
                </Text>
              </View>
              <EmptyState
                icon="plus"
                title="오늘 기록된 식단이 없어요"
                description="첫 끼니를 기록하고 영양 분석을 시작해보세요."
                actionLabel="식단 기록하기"
                onAction={() => {}}
              />
            </View>
          </Col>

          {/* 목표 미설정 */}
          <Col gap={spacing.small}>
            <StateLabel>목표 미설정</StateLabel>
            <View style={{
              borderWidth: 1,
              borderColor: semanticColor.borderDefault,
              borderRadius: radius.large,
              backgroundColor: semanticColor.backgroundPrimary,
              paddingHorizontal: spacing.xlarge,
              paddingVertical: spacing.xlarge,
            }}>
              <EmptyState
                icon="star"
                title="건강 목표를 설정해주세요"
                description="목표를 설정하면 맞춤 관리를 시작할 수 있어요."
                actionLabel="목표 설정하기"
                onAction={() => {}}
              />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 디자인 스펙 ────────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="Figma 시맨틱 토큰 기준 EmptyState 구성 요소별 스펙입니다."
        badge="디자인"
      >
        <TokenSpecTable
          title="아이콘"
          rows={[
            { property: '색상', token: ELEMENT_TOKEN_MAP.icon.color, value: resolve(ELEMENT_TOKEN_MAP.icon.color), type: 'color' },
            { property: '크기', token: ELEMENT_TOKEN_MAP.icon.size,  value: 48, type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="제목"
          rows={[
            { property: '색상', token: ELEMENT_TOKEN_MAP.title.color, value: resolve(ELEMENT_TOKEN_MAP.title.color), type: 'color' },
            { property: '타이포', token: ELEMENT_TOKEN_MAP.title.typo, value: `${textStyle.headline.fontSize}px / ${textStyle.headline.lineHeight}px / ${fw.semibold}`, type: 'typography' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="설명"
          rows={[
            { property: '색상', token: ELEMENT_TOKEN_MAP.description.color, value: resolve(ELEMENT_TOKEN_MAP.description.color), type: 'color' },
            { property: '타이포', token: ELEMENT_TOKEN_MAP.description.typo, value: `${textStyle.body2.fontSize}px / ${textStyle.body2.lineHeight}px / ${fw.regular}`, type: 'typography' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="CTA 버튼"
          rows={[
            { property: '컴포넌트', token: ELEMENT_TOKEN_MAP.cta.component, value: 'Button', type: 'typography' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="레이아웃"
          rows={[
            { property: '상하 패딩',       token: 'spacing/4xlarge',  value: spacing['4xlarge'], type: 'size' },
            { property: '좌우 패딩',       token: 'spacing/2xlarge',  value: spacing['2xlarge'], type: 'size' },
            { property: '요소 간 gap',     token: 'spacing/small',    value: spacing.small,      type: 'size' },
            { property: '아이콘-제목 간격', token: 'spacing/medium',   value: spacing.medium,     type: 'size' },
            { property: '설명-CTA 간격',   token: 'spacing/xlarge',   value: spacing.xlarge,     type: 'size' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 사용 가이드 ────────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={`import { EmptyState } from '@design-system/components/EmptyState';`} />
        <CodeBlock title="기본 사용" code={`<EmptyState\n  icon="plus"\n  title="아직 기록이 없어요"\n  description="오늘 첫 식단을 기록해보세요."\n  actionLabel="기록 시작하기"\n  onAction={handleCreate}\n/>`} />
        <CodeBlock title="아이콘 + 설명만 (CTA 없음)" code={`<EmptyState\n  icon="magnifying-glass"\n  title="검색 결과가 없어요"\n  description="다른 검색어를 입력해보세요."\n/>`} />
      </Section>
    </View>
  ),
};
