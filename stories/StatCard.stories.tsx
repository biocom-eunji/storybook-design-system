import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatCard, type StatCardAccent } from '../src/components/StatCard';
import { Icon } from '../src/components/Icon';
import { LevelIndicator } from '../src/components/LevelIndicator';
import { ProgressBar } from '../src/components/ProgressBar';
import { Section, StateLabel, Row, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import {
  spacing, semanticColor, textStyle, radius, fontWeight,
  violet, purple, green, lightBlue, mint, red,
} from '../src/tokens/theme';

// ─── Accent Map (스토리용 참조) ─────────────────────────────

const ACCENT_HEX: Record<StatCardAccent, string> = {
  violet:    violet[60],
  purple:    purple[40],
  green:     green[45],
  lightBlue: lightBlue[50],
  blue:      violet[50],
  mint:      mint[45],
  red:       red[60],
};

// ─── Meta ───────────────────────────────────────────────────

const meta: Meta<typeof StatCard> = {
  title: 'Data Display/StatCard',
  component: StatCard,
  argTypes: {
    accent: {
      control: 'select',
      options: ['violet', 'purple', 'green', 'lightBlue', 'blue', 'mint', 'red'],
      description: '액센트 컬러',
    },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof StatCard>;

// ─── 1. Playground ──────────────────────────────────────────

export const Playground: Story = {
  render: (args) => (
    <View style={{ maxWidth: 200 }}>
      <StatCard accent={args.accent || 'violet'}>
        <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="목표" />
        <StatCard.Count current={3} total={10} unit="개" />
      </StatCard>
    </View>
  ),
};

// ─── 2. 기본 블록 스토리 ─────────────────────────────────────

export const Default: Story = {
  name: 'Default (Header + Count)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Default" description="최소 구성: Header + Count 블록 조합">
        <View style={{ maxWidth: 200 }}>
          <StatCard accent="violet">
            <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="목표" />
            <StatCard.Count current={3} total={10} unit="개" />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

export const WithBigScore: Story = {
  name: 'BigScore 블록',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="BigScore" description="여러 점수를 세로로 나열합니다. 첫 번째 행만 accent 색상, 나머지는 보조색입니다.">
        <View style={{ maxWidth: 200 }}>
          <StatCard accent="purple">
            <StatCard.Header icon={<Icon name="beauty-score" style="mini" size={16} />} title="뷰티 종합 점수" />
            <StatCard.BigScore items={[
              { value: 50, unit: '점', label: '이너' },
              { value: 40, unit: '점', label: '아우터' },
            ]} />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

export const WithLabel: Story = {
  name: 'Label 블록',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Label" description="레이블 + 강조 값 형태. value는 accent 색상으로 강조됩니다.">
        <View style={{ maxWidth: 200 }}>
          <StatCard accent="green">
            <StatCard.Header icon={<Icon name="meal" style="mini" size={16} />} title="식단" />
            <StatCard.Label label="점수" value="좋음" />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

export const WithDuration: Story = {
  name: 'Duration 블록',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Duration" description="시간 + 분 형태로 시간을 표시합니다.">
        <Row gap={spacing.large} wrap align="flex-start">
          <View style={{ width: 200 }}>
            <StatCard accent="blue">
              <StatCard.Header icon={<Icon name="fasting" style="mini" size={16} />} title="간헐적 단식" />
              <StatCard.Duration hours={11} minutes={30} />
            </StatCard>
          </View>
          <View style={{ width: 200 }}>
            <StatCard accent="mint">
              <StatCard.Header icon={<Icon name="sleep" style="mini" size={16} />} title="수면" />
              <StatCard.Duration hours={5} />
            </StatCard>
          </View>
        </Row>
      </Section>
    </View>
  ),
};

export const WithCompletionCheck: Story = {
  name: 'CompletionCheck 블록',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="CompletionCheck" description="CircularProgress 기반 원형 진행률을 표시합니다. accent 색상이 자동 적용됩니다.">
        <Row gap={spacing.large} wrap align="flex-start">
          <View style={{ width: 200 }}>
            <StatCard accent="mint">
              <StatCard.Header icon={<Icon name="sleep" style="mini" size={16} />} title="수면" />
              <StatCard.Duration hours={5} />
              <StatCard.CompletionCheck progress={0.63} />
            </StatCard>
          </View>
          <View style={{ width: 200 }}>
            <StatCard accent="blue">
              <StatCard.Header icon={<Icon name="fasting" style="mini" size={16} />} title="간헐적 단식" />
              <StatCard.Duration hours={11} minutes={30} />
              <StatCard.CompletionCheck progress={0.85} />
            </StatCard>
          </View>
        </Row>
      </Section>
    </View>
  ),
};

export const WithCheckList: Story = {
  name: 'CheckList 블록',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="CheckList" description="네모 칸으로 완료 상태를 시각화합니다. 인터랙션 없는 표시 전용입니다.">
        <View style={{ maxWidth: 200 }}>
          <StatCard accent="lightBlue">
            <StatCard.Header icon={<Icon name="supplement" style="mini" size={16} />} title="영양제" />
            <StatCard.Count current={2} total={3} unit="개" />
            <StatCard.CheckList total={3} completed={2} />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. 재사용 조합 스토리 ───────────────────────────────────

export const WithLevelIndicator: Story = {
  name: 'LevelIndicator 조합',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="LevelIndicator 조합" description="기존 LevelIndicator 컴포넌트를 children으로 배치하여 식단 카드를 구성합니다.">
        <View style={{ maxWidth: 200 }}>
          <StatCard accent="green">
            <StatCard.Header icon={<Icon name="meal" style="mini" size={16} />} title="식단" />
            <StatCard.Label label="점수" value="좋음" />
            <LevelIndicator current="great" />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

export const WithProgressBar: Story = {
  name: 'ProgressBar 조합',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="ProgressBar 조합" description="기존 ProgressBar 컴포넌트를 children으로 배치하여 활동 카드를 구성합니다.">
        <View style={{ maxWidth: 200 }}>
          <StatCard accent="red">
            <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="활동" />
            <StatCard.Count current={483} unit="Kcal" />
            <ProgressBar progress={0.6} size="small" color="error" />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. Accent 팔레트 ───────────────────────────────────────

export const AccentColors: Story = {
  name: 'Accent 팔레트',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Accent 팔레트" description="7가지 accent 컬러를 한 화면에 나열합니다.">
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.medium }}>
          {(Object.keys(ACCENT_HEX) as StatCardAccent[]).map(accent => (
            <View key={accent} style={{ width: 170 }}>
              <Col gap={spacing.xsmall}>
                <StateLabel>{accent}</StateLabel>
                <StatCard accent={accent}>
                  <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title={accent} />
                  <StatCard.Count current={42} unit="pt" />
                </StatCard>
              </Col>
            </View>
          ))}
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. 실사용 예시 (Figma 디자인 재현) ─────────────────────

export const ExampleGoal: Story = {
  name: '예시: 목표',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="목표 카드" description="Figma 디자인의 '목표' 카드 재현">
        <View style={{ width: 173 }}>
          <StatCard accent="violet">
            <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="목표" />
            <StatCard.Count current={3} total={10} unit="개" />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

export const ExampleBeautyScore: Story = {
  name: '예시: 뷰티 종합 점수',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="뷰티 종합 점수 카드" description="Figma 디자인의 '뷰티 종합 점수' 카드 재현">
        <View style={{ width: 170 }}>
          <StatCard accent="purple">
            <StatCard.Header icon={<Icon name="beauty-score" style="mini" size={16} />} title="뷰티 종합 점수" />
            <StatCard.BigScore items={[
              { value: 50, unit: '점', label: '이너' },
              { value: 40, unit: '점', label: '아우터' },
            ]} />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

export const ExampleDiet: Story = {
  name: '예시: 식단',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="식단 카드" description="Figma 디자인의 '식단' 카드 재현 (LevelIndicator 조합)">
        <View style={{ width: 173 }}>
          <StatCard accent="green">
            <StatCard.Header icon={<Icon name="meal" style="mini" size={16} />} title="식단" />
            <StatCard.Label label="점수" value="좋음" />
            <LevelIndicator current="great" />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

export const ExampleSupplement: Story = {
  name: '예시: 영양제',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="영양제 카드" description="Figma 디자인의 '영양제' 카드 재현 (CheckList 블록)">
        <View style={{ width: 170 }}>
          <StatCard accent="lightBlue">
            <StatCard.Header icon={<Icon name="supplement" style="mini" size={16} />} title="영양제" />
            <StatCard.Count current={2} total={3} unit="개" />
            <StatCard.CheckList total={3} completed={2} />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

export const ExampleFasting: Story = {
  name: '예시: 간헐적 단식',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="간헐적 단식 카드" description="Figma 디자인의 '간헐적 단식' 카드 재현 (Duration + CompletionCheck)">
        <View style={{ width: 173 }}>
          <StatCard accent="blue">
            <StatCard.Header icon={<Icon name="fasting" style="mini" size={16} />} title="간헐적 단식" />
            <StatCard.Duration hours={11} minutes={30} />
            <StatCard.CompletionCheck progress={1} />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

export const ExampleSleep: Story = {
  name: '예시: 수면',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="수면 카드" description="Figma 디자인의 '수면' 카드 재현 (Duration + CompletionCheck)">
        <View style={{ width: 170 }}>
          <StatCard accent="mint">
            <StatCard.Header icon={<Icon name="sleep" style="mini" size={16} />} title="수면" />
            <StatCard.Duration hours={5} />
            <StatCard.CompletionCheck progress={1} />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

export const ExampleActivity: Story = {
  name: '예시: 활동',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="활동 카드" description="Figma 디자인의 '활동' 카드 재현 (Count + ProgressBar 조합)">
        <View style={{ width: 173 }}>
          <StatCard accent="red">
            <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="활동" />
            <StatCard.Count current={483} unit="Kcal" />
            <ProgressBar progress={0.6} size="small" color="error" />
          </StatCard>
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. 대시보드 전체 레이아웃 ──────────────────────────────

export const DashboardGrid: Story = {
  name: '대시보드 그리드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="대시보드 그리드"
        description="모바일 375px 뷰포트 기준, 2열 그리드에 7개 카드를 배치합니다."
      >
        <View style={{
          width: 375,
          paddingHorizontal: spacing.large,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: spacing.medium,
        }}>
          {/* Row 1 */}
          <View style={{ flex: 1, minWidth: 150 }}>
            <StatCard accent="violet">
              <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="목표" />
              <StatCard.Count current={3} total={10} unit="개" />
            </StatCard>
          </View>
          <View style={{ flex: 1, minWidth: 150 }}>
            <StatCard accent="purple">
              <StatCard.Header icon={<Icon name="beauty-score" style="mini" size={16} />} title="뷰티 종합 점수" />
              <StatCard.BigScore items={[
                { value: 50, unit: '점', label: '이너' },
                { value: 40, unit: '점', label: '아우터' },
              ]} />
            </StatCard>
          </View>

          {/* Row 2 */}
          <View style={{ flex: 1, minWidth: 150 }}>
            <StatCard accent="green">
              <StatCard.Header icon={<Icon name="meal" style="mini" size={16} />} title="식단" />
              <StatCard.Label label="점수" value="좋음" />
              <LevelIndicator current="great" />
            </StatCard>
          </View>
          <View style={{ flex: 1, minWidth: 150 }}>
            <StatCard accent="lightBlue">
              <StatCard.Header icon={<Icon name="supplement" style="mini" size={16} />} title="영양제" />
              <StatCard.Count current={2} total={3} unit="개" />
              <StatCard.CheckList total={3} completed={2} />
            </StatCard>
          </View>

          {/* Row 3 */}
          <View style={{ flex: 1, minWidth: 150 }}>
            <StatCard accent="blue">
              <StatCard.Header icon={<Icon name="fasting" style="mini" size={16} />} title="간헐적 단식" />
              <StatCard.Duration hours={11} minutes={30} />
              <StatCard.CompletionCheck progress={1} />
            </StatCard>
          </View>
          <View style={{ flex: 1, minWidth: 150 }}>
            <StatCard accent="mint">
              <StatCard.Header icon={<Icon name="sleep" style="mini" size={16} />} title="수면" />
              <StatCard.Duration hours={5} />
              <StatCard.CompletionCheck progress={1} />
            </StatCard>
          </View>

          {/* Row 4 — 활동 카드 (한 줄 전체) */}
          <View style={{ flex: 1, minWidth: 150 }}>
            <StatCard accent="red">
              <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="활동" />
              <StatCard.Count current={483} unit="Kcal" />
              <ProgressBar progress={0.6} size="small" color="error" />
            </StatCard>
          </View>
        </View>
      </Section>
    </View>
  ),
};

// ─── 7. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="Figma 시맨틱 토큰 기준 StatCard 스펙입니다."
        badge="디자인"
      >
        <TokenSpecTable
          title="컨테이너"
          rows={[
            { property: '배경색',          token: 'color/background/primary',  value: semanticColor.backgroundPrimary,  type: 'color' },
            { property: '테두리',          token: 'color/border/default',      value: semanticColor.borderDefault,     type: 'color' },
            { property: '코너 라디우스',    token: 'borderRadius/large',       value: radius.large,                    type: 'size' },
            { property: '상하 패딩',       token: 'spacing/large',             value: spacing.large,                   type: 'size' },
            { property: '좌우 패딩',       token: 'spacing/xlarge',            value: spacing.xlarge,                  type: 'size' },
            { property: '블록 간 gap',     token: 'spacing/medium',            value: spacing.medium,                  type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="Header"
          rows={[
            { property: '아이콘 크기',     token: '—',                  value: 16,                                 type: 'size' },
            { property: '아이콘-제목 gap',  token: '—',                  value: 6,                                  type: 'size' },
            { property: '제목 타이포',     token: 'Label 1',             value: `${textStyle.label1.fontSize}px / Medium`, type: 'typography' },
            { property: '제목/아이콘 색상', token: 'accent',              value: '카드별 accent 색상',                type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="Count / BigScore / Duration"
          rows={[
            { property: '큰 숫자 타이포',   token: 'Title 3',            value: `${textStyle.title3.fontSize}px / SemiBold`, type: 'typography' },
            { property: '큰 숫자 색상',     token: 'accent',              value: '카드별 accent 색상',                type: 'color' },
            { property: '단위 타이포',      token: 'Label 1',             value: `${textStyle.label1.fontSize}px / Medium`, type: 'typography' },
            { property: '단위 색상',        token: 'color/text/secondary', value: semanticColor.textSecondary,        type: 'color' },
            { property: 'BigScore 2행+',   token: 'color/text/secondary', value: semanticColor.textSecondary,        type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="CheckList"
          rows={[
            { property: '칸 크기',        token: '—',                       value: 36,                              type: 'size' },
            { property: '칸 간격',        token: 'spacing/small',            value: spacing.small,                   type: 'size' },
            { property: '칸 radius',      token: 'borderRadius/xsmall',     value: radius.xsmall,                   type: 'size' },
            { property: '완료 칸 배경',    token: 'accent',                  value: '카드별 accent 색상',             type: 'color' },
            { property: '빈 칸 배경',     token: 'color/background/disabled', value: semanticColor.backgroundDisabled, type: 'color' },
            { property: '체크 아이콘',    token: 'color/icon/onColor',       value: semanticColor.iconOnColor,        type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="Accent 팔레트"
          rows={[
            { property: 'violet',    token: 'violet[60]',    value: violet[60],    type: 'color' },
            { property: 'purple',    token: 'purple[40]',    value: purple[40],    type: 'color' },
            { property: 'green',     token: 'green[45]',     value: green[45],     type: 'color' },
            { property: 'lightBlue', token: 'lightBlue[50]', value: lightBlue[50], type: 'color' },
            { property: 'blue',      token: 'violet[50]',    value: violet[50],    type: 'color' },
            { property: 'mint',      token: 'mint[45]',      value: mint[45],      type: 'color' },
            { property: 'red',       token: 'red[60]',       value: red[60],       type: 'color' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 8. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock
          title="Import"
          code={`import { StatCard } from '@design-system/components/StatCard';
import { Icon } from '@design-system/components/Icon';`}
        />
        <CodeBlock
          title="기본 사용 (Header + Count)"
          code={`<StatCard accent="violet">
  <StatCard.Header icon={<Icon name="activity" style="mini" />} title="목표" />
  <StatCard.Count current={3} total={10} unit="개" />
</StatCard>`}
        />
        <CodeBlock
          title="기존 컴포넌트 조합"
          code={`<StatCard accent="green">
  <StatCard.Header icon={<Icon name="meal" style="mini" />} title="식단" />
  <StatCard.Label label="점수" value="좋음" />
  <LevelIndicator current="great" />
</StatCard>`}
        />
        <CodeBlock
          title="Duration + CompletionCheck"
          code={`<StatCard accent="blue">
  <StatCard.Header icon={<Icon name="fasting" style="mini" />} title="간헐적 단식" />
  <StatCard.Duration hours={11} minutes={30} />
  <StatCard.CompletionCheck progress={1} />
</StatCard>`}
        />
        <CodeBlock
          title="BigScore (여러 점수)"
          code={`<StatCard accent="purple">
  <StatCard.Header icon={<Icon name="beauty-score" style="mini" />} title="뷰티 종합 점수" />
  <StatCard.BigScore items={[
    { value: 50, unit: '점', label: '이너' },
    { value: 40, unit: '점', label: '아우터' },
  ]} />
</StatCard>`}
        />
      </Section>
    </View>
  ),
};
