import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListCard } from '../src/components/ListCard';
import { Icon } from '../src/components/Icon';
import {
  Section, StateLabel, Col, Row, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, radius, textStyle } from '../src/tokens/theme';

const meta: Meta<typeof ListCard> = {
  title: 'Data Display/ListCard',
  component: ListCard,
  argTypes: {
    title: { control: 'text', description: '제목' },
    caption: { control: 'text', description: '캡션' },
    skeleton: { control: 'boolean', description: '스켈레톤 상태' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ListCard>;

// ─── 데이터 ──────────────────────────────────────────────────

const sampleItems = [
  { title: '건강한 아침 식단 가이드', caption: '식단 관리' },
  { title: '수면 패턴 분석 리포트', caption: '수면 리포트' },
  { title: '주간 운동 루틴 추천', caption: '운동' },
  { title: '영양제 섭취 타이밍 정리', caption: '영양제' },
];

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <View style={{ maxWidth: 375 }}>
      <ListCard title="건강한 아침 식단 가이드" caption="식단 관리" onPress={() => {}} />
    </View>
  ),
};

// ─── 2. 기본 ─────────────────────────────────────────────────

export const Default: Story = {
  name: 'Default',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Default" description="썸네일 + 제목 + 캡션 기본 조합입니다.">
        <View style={{ maxWidth: 375, gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>제목 + 캡션</StateLabel>
            <ListCard title="건강한 아침 식단 가이드" caption="식단 관리" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>제목만</StateLabel>
            <ListCard title="수면 패턴 분석 리포트" />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. 클릭 가능 ────────────────────────────────────────────

export const Clickable: Story = {
  name: '클릭 가능',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="클릭 가능" description="onPress가 있으면 pressed 인터랙션이 적용됩니다.">
        <View style={{ maxWidth: 375 }}>
          <ListCard title="식단 기록 상세 보기" caption="오늘의 식단" onPress={() => {}} />
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. Trailing ─────────────────────────────────────────────

export const WithTrailing: Story = {
  name: 'Trailing 슬롯',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Trailing 슬롯" description="우측에 아이콘이나 액션 요소를 배치합니다.">
        <View style={{ maxWidth: 375 }}>
          <ListCard
            title="건강한 아침 식단 가이드"
            caption="식단 관리"
            trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />}
            onPress={() => {}}
          />
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. 스켈레톤 ─────────────────────────────────────────────

export const SkeletonState: Story = {
  name: '스켈레톤',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="스켈레톤" description="로딩 중 플레이스홀더입니다. 기존 Skeleton 컴포넌트를 재사용합니다.">
        <View style={{ maxWidth: 375, gap: spacing.large }}>
          <ListCard title="" skeleton />
          <ListCard title="" caption="" skeleton />
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. 긴 제목 ──────────────────────────────────────────────

export const LongTitle: Story = {
  name: '긴 제목',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="긴 제목" description="제목이 2줄까지 표시되고 그 이상은 말줄임됩니다.">
        <View style={{ maxWidth: 375 }}>
          <ListCard
            title="아주 긴 제목이 들어가는 리스트 카드 항목으로 두 줄까지 표시되고 나머지는 잘립니다"
            caption="식단 관리 · 오늘"
          />
        </View>
      </Section>
    </View>
  ),
};

// ─── 7. 리스트 (실전 예시) ───────────────────────────────────

export const ListExample: Story = {
  name: '리스트 (실전)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="리스트 (실전)" description="여러 ListCard를 세로로 나열한 실제 사용 예시입니다. 일부는 스켈레톤.">
        <View style={{
          maxWidth: 375,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          borderRadius: radius.small,
          overflow: 'hidden',
          backgroundColor: semanticColor.backgroundStatus,
        }}>
          {sampleItems.map((item, i) => (
            <View key={i}>
              <View style={{ paddingHorizontal: spacing.large, paddingVertical: spacing.medium }}>
                <ListCard
                  title={item.title}
                  caption={item.caption}
                  trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />}
                  onPress={() => {}}
                />
              </View>
              {i < sampleItems.length - 1 && (
                <View style={{ height: 1, backgroundColor: semanticColor.borderDefault, marginLeft: 96 + spacing.medium + spacing.large }} />
              )}
            </View>
          ))}
          {/* Loading items */}
          <View style={{ height: 1, backgroundColor: semanticColor.borderDefault, marginLeft: 96 + spacing.medium + spacing.large }} />
          <View style={{ paddingHorizontal: spacing.large, paddingVertical: spacing.medium }}>
            <ListCard title="" caption="" skeleton />
          </View>
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
      <Section title="디자인 스펙" description="Figma 기반 ListCard 스펙입니다. 외부 토큰은 우리 토큰으로 매핑되었습니다." badge="디자인">
        <TokenSpecTable
          title="색상 토큰"
          rows={[
            { property: '제목 텍스트',     token: 'color/text/primary',         value: semanticColor.textPrimary,        type: 'color' },
            { property: '캡션 텍스트',     token: 'color/text/secondary',       value: semanticColor.textSecondary,      type: 'color' },
            { property: '썸네일 테두리',   token: 'color/border/default',       value: semanticColor.borderDefault,      type: 'color' },
            { property: '썸네일 배경',     token: 'color/background/secondary', value: semanticColor.backgroundSecondary, type: 'color' },
            { property: '스켈레톤 배경',   token: 'color/background/disabled',  value: semanticColor.backgroundDisabled, type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="레이아웃"
          rows={[
            { property: '썸네일 크기 (Mobile)', token: '—', value: '96 × 67',   type: 'size' },
            { property: '썸네일 라디우스',       token: 'borderRadius/medium', value: radius.medium, type: 'size' },
            { property: '썸네일-텍스트 gap',     token: 'spacing/medium', value: spacing.medium, type: 'size' },
            { property: '콘텐츠 내부 gap',       token: 'spacing/xsmall', value: spacing.xsmall, type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="타이포그래피"
          rows={[
            { property: '제목',  token: 'Body 2', value: `${textStyle.body2.fontSize}px / ${textStyle.body2.lineHeight}px / Regular`, type: 'typography' },
            { property: '캡션', token: 'Label 2', value: `${textStyle.label2.fontSize}px / ${textStyle.label2.lineHeight}px / Medium`, type: 'typography' },
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
      <Section title="사용 가이드" description="개발자를 위한 ListCard 사용 예시입니다." badge="개발">
        <CodeBlock
          title="Import"
          code={`import { ListCard } from '@design-system/components/ListCard';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<ListCard
  title="건강한 아침 식단 가이드"
  caption="식단 관리"
  onPress={() => navigate('detail')}
/>`}
        />

        <CodeBlock
          title="Trailing 아이콘"
          code={`<ListCard
  title="수면 패턴 분석"
  caption="수면 리포트"
  trailing={<Icon name="caret-right" size={20} />}
  onPress={goDetail}
/>`}
        />

        <CodeBlock
          title="스켈레톤 (로딩)"
          code={`<ListCard title="" caption="" skeleton />`}
        />

        <CodeBlock
          title="리스트로 반복"
          code={`<FlatList
  data={items}
  renderItem={({ item }) => (
    <ListCard
      title={item.title}
      caption={item.caption}
      imageSource={{ uri: item.thumbnailUrl }}
      onPress={() => navigate(item.id)}
    />
  )}
/>`}
        />
      </Section>
    </View>
  ),
};
