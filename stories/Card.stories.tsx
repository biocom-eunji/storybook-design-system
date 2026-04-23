import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../src/components/Card';
import {
  Section, StateLabel, Row, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, radius, textStyle } from '../src/tokens/theme';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  argTypes: {
    title: { control: 'text', description: '제목' },
    caption: { control: 'text', description: '캡션' },
    subCaption: { control: 'text', description: '보조 캡션' },
    skeleton: { control: 'boolean', description: '스켈레톤 상태' },
    width: { control: 'number', description: '카드 너비' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <Row gap={spacing.medium}>
      <Card title="건강한 아침 식단" caption="식단 관리" />
      <Card title="수면 패턴 분석" caption="수면 리포트" subCaption="7일간 데이터" />
    </Row>
  ),
};

// ─── 2. 기본 ─────────────────────────────────────────────────

export const Default: Story = {
  name: 'Default',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Default" description="제목만 있는 가장 단순한 카드입니다.">
        <Card title="건강한 아침 식단" />
      </Section>
    </View>
  ),
};

// ─── 3. 캡션 조합 ────────────────────────────────────────────

export const WithCaptions: Story = {
  name: '캡션 조합',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="캡션 조합" description="caption, subCaption 조합을 비교합니다.">
        <Row gap={spacing.medium} wrap>
          <Col gap={spacing.small}>
            <StateLabel>제목만</StateLabel>
            <Card title="건강한 아침 식단" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>제목 + 캡션</StateLabel>
            <Card title="건강한 아침 식단" caption="식단 관리" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>제목 + 캡션 + 보조</StateLabel>
            <Card title="건강한 아침 식단" caption="식단 관리" subCaption="오늘 기록" />
          </Col>
        </Row>
      </Section>
    </View>
  ),
};

// ─── 4. 클릭 가능 ────────────────────────────────────────────

export const Clickable: Story = {
  name: '클릭 가능',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="클릭 가능" description="onPress가 있으면 pressed 인터랙션이 적용됩니다.">
        <Row gap={spacing.medium}>
          <Card title="식단 기록 보기" caption="오늘의 식단" onPress={() => {}} />
          <Card title="운동 기록 보기" caption="오늘의 운동" onPress={() => {}} />
        </Row>
      </Section>
    </View>
  ),
};

// ─── 5. 스켈레톤 ─────────────────────────────────────────────

export const Skeleton: Story = {
  name: '스켈레톤',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="스켈레톤" description="로딩 중 플레이스홀더 상태입니다.">
        <Row gap={spacing.medium}>
          <Col gap={spacing.small}>
            <StateLabel>캡션 포함</StateLabel>
            <Card title="" caption="" skeleton />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>캡션 + 보조 포함</StateLabel>
            <Card title="" caption="" subCaption="" skeleton />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>제목만</StateLabel>
            <Card title="" skeleton />
          </Col>
        </Row>
      </Section>
    </View>
  ),
};

// ─── 6. 너비 커스텀 ──────────────────────────────────────────

export const CustomWidth: Story = {
  name: '너비 커스텀',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="너비 커스텀" description="width prop으로 카드 크기를 조절합니다.">
        <Row gap={spacing.medium} align="flex-start">
          <Col gap={spacing.small}>
            <StateLabel>120px</StateLabel>
            <Card title="좁은 카드" caption="캡션" width={120} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>152px (기본)</StateLabel>
            <Card title="기본 카드" caption="캡션" width={152} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>200px</StateLabel>
            <Card title="넓은 카드" caption="캡션" width={200} />
          </Col>
        </Row>
      </Section>
    </View>
  ),
};

// ─── 7. 그리드 (모바일) ──────────────────────────────────────

export const Grid: Story = {
  name: '그리드 (모바일)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="그리드" description="375px 모바일 화면에 2열 그리드로 배치한 예시입니다.">
        <View style={{
          width: 375,
          padding: spacing.large,
          backgroundColor: semanticColor.backgroundPrimary,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          borderRadius: radius.small,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: spacing.medium,
        }}>
          {['건강한 아침 식단', '수면 패턴 분석', '주간 운동 리포트', '영양제 섭취 기록'].map((title, i) => (
            <Card
              key={i}
              title={title}
              caption={['식단', '수면', '운동', '영양제'][i]}
              width={(375 - spacing.large * 2 - spacing.medium) / 2}
              onPress={() => {}}
            />
          ))}
        </View>
      </Section>
    </View>
  ),
};

// ─── 8. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="디자인 스펙" description="Figma 기반 Card 스펙입니다. 외부 토큰은 우리 토큰으로 매핑되었습니다." badge="디자인">
        <TokenSpecTable
          title="색상 토큰"
          rows={[
            { property: '제목 텍스트',     token: 'color/text/primary',        value: semanticColor.textPrimary,        type: 'color' },
            { property: '캡션 텍스트',     token: 'color/text/secondary',      value: semanticColor.textSecondary,      type: 'color' },
            { property: '썸네일 테두리',   token: 'color/border/default',      value: semanticColor.borderDefault,      type: 'color' },
            { property: '썸네일 배경',     token: 'color/background/secondary', value: semanticColor.backgroundSecondary, type: 'color' },
            { property: '스켈레톤 배경',   token: 'color/background/disabled',  value: semanticColor.backgroundDisabled, type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="레이아웃"
          rows={[
            { property: '카드 너비 (Mobile)', token: '—', value: 152,           type: 'size' },
            { property: '썸네일 비율',        token: '—', value: '75:152 (≈1:2)' },
            { property: '썸네일 라디우스',    token: 'borderRadius/medium', value: radius.medium, type: 'size' },
            { property: '썸네일-콘텐츠 gap',  token: '—', value: 6,             type: 'size' },
            { property: '콘텐츠 내부 gap',    token: 'spacing/xsmall', value: spacing.xsmall, type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="타이포그래피"
          rows={[
            { property: '제목 (Mobile)', token: 'Body 2', value: `${textStyle.body2.fontSize}px / ${textStyle.body2.lineHeight}px / Regular`, type: 'typography' },
            { property: '캡션',          token: 'Label 2', value: `${textStyle.label2.fontSize}px / ${textStyle.label2.lineHeight}px / Medium`, type: 'typography' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 9. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" description="개발자를 위한 Card 사용 예시입니다." badge="개발">
        <CodeBlock
          title="Import"
          code={`import { Card } from '@design-system/components/Card';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<Card title="건강한 아침 식단" caption="식단 관리" />`}
        />

        <CodeBlock
          title="클릭 가능 카드"
          code={`<Card
  title="식단 기록 보기"
  caption="오늘의 식단"
  onPress={() => navigation.navigate('DietDetail')}
/>`}
        />

        <CodeBlock
          title="이미지 포함"
          code={`<Card
  title="오늘의 레시피"
  caption="건강 식단"
  imageSource={require('./assets/recipe.jpg')}
/>`}
        />

        <CodeBlock
          title="스켈레톤 (로딩)"
          code={`<Card title="" caption="" skeleton />`}
        />

        <CodeBlock
          title="2열 그리드"
          code={`<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.medium }}>
  {items.map(item => (
    <Card
      key={item.id}
      title={item.title}
      caption={item.caption}
      width={(screenWidth - spacing.large * 2 - spacing.medium) / 2}
      onPress={() => navigate(item.id)}
    />
  ))}
</View>`}
        />
      </Section>
    </View>
  ),
};
