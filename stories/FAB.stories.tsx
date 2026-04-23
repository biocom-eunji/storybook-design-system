import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FAB } from '../src/components/FAB';
import {
  Section, StateLabel, Row, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, radius, shadow, textStyle } from '../src/tokens/theme';

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof FAB> = {
  title: 'Actions/FAB',
  component: FAB,
  argTypes: {
    variant: { control: 'select', options: ['regular', 'extended'], description: 'FAB 형태' },
    color: { control: 'select', options: ['primary', 'secondary'], description: '색상' },
    label: { control: 'text', description: '라벨 (extended에서만)' },
    disabled: { control: 'boolean', description: '비활성화' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FAB>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <Row gap={spacing.xlarge} align="center">
      <FAB iconName="plus" onPress={() => {}} accessibilityLabel="새 기록 추가" />
      <FAB variant="extended" iconName="plus" label="작성하기" onPress={() => {}} />
    </Row>
  ),
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 배경 `color/background/brand`, 콘텐츠 `color/text/onColor`, 그림자 `shadow.level2`, radius 28(regular) / 16(extended)',
      },
    },
  },
};

// ─── 2. Regular FAB ──────────────────────────────────────────

export const Regular: Story = {
  name: 'Regular FAB',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Regular FAB" description="원형 FAB. 아이콘만 포함합니다. accessibilityLabel 필수.">
        <Row gap={spacing.xlarge} align="center">
          <Col gap={spacing.small}>
            <StateLabel>Primary</StateLabel>
            <FAB iconName="plus" onPress={() => {}} color="primary" accessibilityLabel="추가" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Secondary</StateLabel>
            <FAB iconName="plus" onPress={() => {}} color="secondary" accessibilityLabel="추가" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <FAB iconName="plus" onPress={() => {}} disabled accessibilityLabel="추가" />
          </Col>
        </Row>
      </Section>
    </View>
  ),
};

// ─── 3. Extended FAB ─────────────────────────────────────────

export const Extended: Story = {
  name: 'Extended FAB',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Extended FAB" description="아이콘 + 라벨 텍스트를 포함한 pill 형태 FAB입니다.">
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>Primary</StateLabel>
            <FAB variant="extended" iconName="plus" label="새 기록 작성" onPress={() => {}} color="primary" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Secondary</StateLabel>
            <FAB variant="extended" iconName="plus" label="새 기록 작성" onPress={() => {}} color="secondary" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <FAB variant="extended" iconName="plus" label="새 기록 작성" onPress={() => {}} disabled />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. Colors 비교 ──────────────────────────────────────────

export const Colors: Story = {
  name: 'Colors 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Colors 비교" description="Primary(브랜드)와 Secondary(중립) 색상을 비교합니다.">
        <View style={{ gap: spacing.xlarge }}>
          <Row gap={spacing['2xlarge']} align="center">
            <Col gap={spacing.small}>
              <StateLabel>Regular Primary</StateLabel>
              <FAB iconName="plus" onPress={() => {}} color="primary" accessibilityLabel="추가" />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>Regular Secondary</StateLabel>
              <FAB iconName="plus" onPress={() => {}} color="secondary" accessibilityLabel="추가" />
            </Col>
          </Row>

          <Divider />

          <Col gap={spacing.small}>
            <StateLabel>Extended Primary</StateLabel>
            <FAB variant="extended" iconName="plus" label="작성하기" onPress={() => {}} color="primary" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Extended Secondary</StateLabel>
            <FAB variant="extended" iconName="plus" label="작성하기" onPress={() => {}} color="secondary" />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. On Screen 시뮬레이션 ─────────────────────────────────

export const OnScreen: Story = {
  name: 'On Screen',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="On Screen" description="모바일 화면(375px) 하단에 FAB이 배치된 모습을 시뮬레이션합니다.">
        <View style={{ flexDirection: 'row', gap: spacing.xlarge }}>
          {/* Regular FAB */}
          <View style={{
            width: 375,
            height: 500,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: spacing.medium,
            overflow: 'hidden',
            backgroundColor: semanticColor.backgroundSecondary,
            position: 'relative',
          }}>
            <View style={{
              height: 56,
              backgroundColor: semanticColor.backgroundPrimary,
              justifyContent: 'center',
              paddingHorizontal: spacing.large,
              borderBottomWidth: 1,
              borderBottomColor: semanticColor.borderDefault,
            }}>
              <Text style={{ fontSize: textStyle.headline.fontSize, fontWeight: '600', color: semanticColor.textPrimary }}>건강 대시보드</Text>
            </View>
            <ScrollView style={{ flex: 1, padding: spacing.large }}>
              {Array.from({ length: 6 }, (_, i) => (
                <View key={i} style={{
                  height: 64,
                  backgroundColor: semanticColor.backgroundPrimary,
                  borderRadius: spacing.small,
                  marginBottom: spacing.medium,
                  padding: spacing.large,
                  justifyContent: 'center',
                }}>
                  <Text style={{ color: semanticColor.textSecondary, fontSize: textStyle.body2.fontSize }}>기록 항목 {i + 1}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={{
              position: 'absolute',
              bottom: spacing.large,
              right: spacing.large,
            }}>
              <FAB iconName="plus" onPress={() => {}} accessibilityLabel="새 기록 추가" />
            </View>
          </View>
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="Material Design 3 기반 FAB 스펙입니다. Figma 디자인 없이 자체 정의한 값입니다."
        badge="디자인"
      >
        <TokenSpecTable
          title="Regular FAB"
          rows={[
            { property: '컨테이너 크기', token: '—',                       value: '56×56', type: 'size' },
            { property: '아이콘 크기',   token: '—',                       value: 24,      type: 'size' },
            { property: '코너 라디우스', token: '—',                       value: 28,      type: 'size' },
            { property: '그림자',       token: 'shadow/level2',             value: `offset(0,${shadow.level2.shadowOffset.height}) blur(${shadow.level2.shadowRadius}) opacity(${shadow.level2.shadowOpacity})` },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="Extended FAB"
          rows={[
            { property: '높이',         token: '—',                       value: 56,       type: 'size' },
            { property: '좌우 패딩',     token: 'spacing/large',           value: spacing.large, type: 'size' },
            { property: '아이콘-라벨 gap', token: 'spacing/small',         value: spacing.small, type: 'size' },
            { property: '코너 라디우스', token: 'borderRadius/large',      value: radius.large,  type: 'size' },
            { property: '라벨 타이포',   token: 'Label 1',                 value: `${textStyle.label1.fontSize}px / ${textStyle.label1.lineHeight}px / Medium`, type: 'typography' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="색상 토큰"
          rows={[
            { property: 'Primary 배경',     token: 'color/background/brand',    value: semanticColor.backgroundBrand,    type: 'color' },
            { property: 'Primary 콘텐츠',   token: 'color/text/onColor',        value: semanticColor.textOnColor,        type: 'color' },
            { property: 'Secondary 배경',   token: 'color/background/tertiary', value: semanticColor.backgroundTertiary, type: 'color' },
            { property: 'Secondary 콘텐츠', token: 'color/text/primary',        value: semanticColor.textPrimary,        type: 'color' },
            { property: 'Disabled 배경',    token: 'color/background/disabled', value: semanticColor.backgroundDisabled, type: 'color' },
            { property: 'Disabled 콘텐츠',  token: 'color/text/tertiary',       value: semanticColor.textTertiary,       type: 'color' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 7. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" description="개발자를 위한 FAB 사용 예시입니다." badge="개발">
        <CodeBlock
          title="Import"
          code={`import { FAB } from '@design-system/components/FAB';`}
        />

        <CodeBlock
          title="Regular FAB (아이콘만)"
          code={`<FAB
  iconName="plus"
  onPress={handleCreate}
  accessibilityLabel="새 기록 추가"
/>`}
        />

        <CodeBlock
          title="Extended FAB (아이콘 + 라벨)"
          code={`<FAB
  variant="extended"
  iconName="plus"
  label="작성하기"
  onPress={handleCreate}
/>`}
        />

        <CodeBlock
          title="화면 배치 예시"
          code={`<View style={{ flex: 1 }}>
  {/* 메인 콘텐츠 */}
  <FlatList data={items} renderItem={renderItem} />

  {/* FAB: 우하단 고정 */}
  <View style={{
    position: 'absolute',
    bottom: spacing.large,  // 16
    right: spacing.large,   // 16
  }}>
    <FAB
      iconName="plus"
      onPress={handleCreate}
      accessibilityLabel="새 기록 추가"
    />
  </View>
</View>`}
        />

        <CodeBlock
          title="Secondary 색상"
          code={`<FAB
  color="secondary"
  iconName="magnifying-glass"
  onPress={handleSearch}
  accessibilityLabel="검색"
/>`}
        />
      </Section>
    </View>
  ),
};
