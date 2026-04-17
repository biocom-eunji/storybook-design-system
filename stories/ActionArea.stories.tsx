import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionArea } from '../src/components/ActionArea';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, Divider } from './storyHelpers';
import { coolNeutral, fontSize, fontWeight, spacing, radius, semanticColor } from '../src/tokens/theme';

// ─── Safe Area 시뮬레이터 ─────────────────────────────────

const SAFE_AREA_BOTTOM = 34; // iPhone 홈 인디케이터 기본값

/** 실제 기기 하단 Safe Area를 시뮬레이션하는 프리뷰 컨테이너 */
const DeviceFrame = ({
  children,
  safeArea = true,
  width = 400,
}: {
  children: React.ReactNode;
  safeArea?: boolean;
  width?: number;
}) => (
  <View style={{ maxWidth: width, borderRadius: radius.large, overflow: 'hidden', borderWidth: 1, borderColor: coolNeutral[95] }}>
    <View style={{ height: 80, backgroundColor: semanticColor.backgroundSecondary, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: fontSize.xsmall, color: semanticColor.textSecondary }}>화면 콘텐츠 영역</Text>
    </View>
    {children}
    {safeArea && (
      <View style={{ height: SAFE_AREA_BOTTOM, backgroundColor: semanticColor.backgroundSecondary, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 120, height: 4, borderRadius: 2, backgroundColor: semanticColor.backgroundOff }} />
      </View>
    )}
  </View>
);

const meta: Meta<typeof ActionArea> = {
  title: 'Navigation/ActionArea',
  component: ActionArea,
  argTypes: {
    variant: {
      control: 'select',
      options: ['strong', 'neutral', 'compact'],
      description: '레이아웃 변형',
    },
    divider: { control: 'boolean', description: '상단 구분선' },
    transparent: { control: 'boolean', description: '투명 배경' },
    safeAreaBottom: { control: { type: 'range', min: 0, max: 48, step: 4 }, description: 'Safe Area 하단 여백 (px)' },
  },
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 400, borderRadius: radius.large, overflow: 'hidden', borderWidth: 1, borderColor: coolNeutral[95] }}>
        <View style={{ height: 200, backgroundColor: semanticColor.backgroundSecondary, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: fontSize.small, color: semanticColor.textSecondary }}>화면 콘텐츠 영역</Text>
        </View>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ActionArea>;

// ─── 1. Playground ──────────────────────────────────────

export const Playground: Story = {
  args: {
    variant: 'strong',
    primary: { label: '확인' },
    secondary: { label: '취소' },
    divider: true,
    transparent: false,
    safeAreaBottom: SAFE_AREA_BOTTOM,
  },
};

// ─── 2. 모든 변형 ──────────────────────────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  decorators: [],
  render: () => (
    <Section
      title="모든 변형"
      description="ActionArea는 화면 하단에서 사용자 액션을 유도하는 영역입니다. 3가지 레이아웃 변형을 제공합니다."
    >
      <View style={{ gap: spacing['3xlarge'] }}>
        {/* Strong */}
        <Col gap={spacing.small}>
          <StateLabel>STRONG — CTA 강조형</StateLabel>
          <Text style={{ fontSize: fontSize.xsmall, color: semanticColor.textSecondary, marginBottom: spacing.small }}>
            메인 액션 하나만 크게 노출합니다. 결제, 가입 완료 등 핵심 전환 화면에 사용합니다.
          </Text>
          <DeviceFrame>
            <ActionArea
              variant="strong"
              primary={{ label: '결제하기', onPress: () => {} }}
              safeAreaBottom={SAFE_AREA_BOTTOM}
            />
          </DeviceFrame>
        </Col>

        <Divider />

        {/* Neutral */}
        <Col gap={spacing.small}>
          <StateLabel>NEUTRAL — 보조/메인 복합</StateLabel>
          <Text style={{ fontSize: fontSize.xsmall, color: semanticColor.textSecondary, marginBottom: spacing.small }}>
            보조 버튼과 메인 버튼을 함께 노출합니다. 메인 버튼이 2:1 비율로 강조됩니다.
          </Text>
          <DeviceFrame>
            <ActionArea
              variant="neutral"
              primary={{ label: '다음', onPress: () => {} }}
              secondary={{ label: '이전', onPress: () => {} }}
              safeAreaBottom={SAFE_AREA_BOTTOM}
            />
          </DeviceFrame>
        </Col>

        <Divider />

        {/* Compact */}
        <Col gap={spacing.small}>
          <StateLabel>COMPACT — 작은 크기 복합</StateLabel>
          <Text style={{ fontSize: fontSize.xsmall, color: semanticColor.textSecondary, marginBottom: spacing.small }}>
            Medium 사이즈 버튼으로 공간을 절약합니다. 모달, 바텀시트 등에 적합합니다.
          </Text>
          <DeviceFrame>
            <ActionArea
              variant="compact"
              primary={{ label: '적용', onPress: () => {} }}
              secondary={{ label: '초기화', onPress: () => {} }}
              safeAreaBottom={SAFE_AREA_BOTTOM}
            />
          </DeviceFrame>
        </Col>
      </View>
    </Section>
  ),
};

// ─── 3. Safe Area 비교 ──────────────────────────────────

export const SafeAreaComparison: Story = {
  name: 'Safe Area 비교',
  decorators: [],
  render: () => (
    <Section
      title="Safe Area 비교"
      description="safeAreaBottom 적용 전/후를 비교합니다. 실제 기기에서는 useSafeAreaInsets().bottom 값을 전달하세요."
    >
      <Row gap={spacing['2xlarge']} wrap align="flex-start">
        <Col gap={spacing.small}>
          <StateLabel>safeAreaBottom: 0</StateLabel>
          <DeviceFrame safeArea={false}>
            <ActionArea
              variant="strong"
              primary={{ label: '확인' }}
              safeAreaBottom={0}
            />
          </DeviceFrame>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>safeAreaBottom: 34 (iPhone)</StateLabel>
          <DeviceFrame>
            <ActionArea
              variant="strong"
              primary={{ label: '확인' }}
              safeAreaBottom={SAFE_AREA_BOTTOM}
            />
          </DeviceFrame>
        </Col>
      </Row>
    </Section>
  ),
};

// ─── 4. 상태 ────────────────────────────────────────────

export const States: Story = {
  name: '상태',
  decorators: [],
  render: () => (
    <Section
      title="버튼 상태"
      description="ActionArea 내 버튼의 활성/비활성 상태를 확인합니다."
    >
      <Row gap={spacing['2xlarge']} wrap align="flex-start">
        <Col gap={spacing.small}>
          <StateLabel>기본</StateLabel>
          <View style={{ width: 320, backgroundColor: semanticColor.backgroundSecondary, borderRadius: radius.large, overflow: 'hidden' }}>
            <ActionArea
              variant="neutral"
              primary={{ label: '확인' }}
              secondary={{ label: '취소' }}
              divider={false}
            />
          </View>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>메인 버튼 비활성화</StateLabel>
          <View style={{ width: 320, backgroundColor: semanticColor.backgroundSecondary, borderRadius: radius.large, overflow: 'hidden' }}>
            <ActionArea
              variant="neutral"
              primary={{ label: '확인', disabled: true }}
              secondary={{ label: '취소' }}
              divider={false}
            />
          </View>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>메인 버튼 로딩</StateLabel>
          <View style={{ width: 320, backgroundColor: semanticColor.backgroundSecondary, borderRadius: radius.large, overflow: 'hidden' }}>
            <ActionArea
              variant="neutral"
              primary={{ label: '확인', loading: true }}
              secondary={{ label: '취소' }}
              divider={false}
            />
          </View>
        </Col>
      </Row>
    </Section>
  ),
};

// ─── 5. 옵션 ────────────────────────────────────────────

export const Options: Story = {
  name: '옵션',
  decorators: [],
  render: () => (
    <Section
      title="옵션"
      description="구분선 표시 및 투명 배경 옵션을 확인합니다."
    >
      <Row gap={spacing['2xlarge']} wrap align="flex-start">
        <Col gap={spacing.small}>
          <StateLabel>구분선 있음 (기본)</StateLabel>
          <View style={{ width: 320, backgroundColor: semanticColor.backgroundSecondary, borderRadius: radius.large, overflow: 'hidden' }}>
            <View style={{ height: 40 }} />
            <ActionArea
              variant="strong"
              primary={{ label: '확인' }}
              divider={true}
            />
          </View>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>구분선 없음</StateLabel>
          <View style={{ width: 320, backgroundColor: semanticColor.backgroundSecondary, borderRadius: radius.large, overflow: 'hidden' }}>
            <View style={{ height: 40 }} />
            <ActionArea
              variant="strong"
              primary={{ label: '확인' }}
              divider={false}
            />
          </View>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>투명 배경</StateLabel>
          <View style={{ width: 320, backgroundColor: semanticColor.backgroundTertiary, borderRadius: radius.large, overflow: 'hidden' }}>
            <View style={{ height: 40 }} />
            <ActionArea
              variant="strong"
              primary={{ label: '확인' }}
              transparent={true}
            />
          </View>
        </Col>
      </Row>
    </Section>
  ),
};

// ─── 6. 디자인 스펙 ─────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  decorators: [],
  render: () => (
    <Section title="디자인 스펙" description="ActionArea 컴포넌트의 레이아웃 토큰 명세입니다.">
      <Col gap={spacing['2xlarge']}>
        <SpecTable
          title="레이아웃"
          rows={[
            { label: '좌우 패딩', value: '16px', token: 'actionAreaToken.padding (spacing.large)' },
            { label: '상단 패딩', value: '12px', token: 'spacing.medium' },
            { label: '하단 패딩', value: '12px + safeAreaBottom', token: 'spacing.medium + safeAreaBottom' },
            { label: '버튼 간격', value: '8px', token: 'actionAreaToken.gap (spacing.small)' },
            { label: '구분선 색상', value: coolNeutral[96], token: 'coolNeutral[96]' },
            { label: '배경색', value: '#FFFFFF', token: 'semanticColor.backgroundStatus' },
          ]}
        />
        <SpecTable
          title="변형별 버튼 구성"
          rows={[
            { label: 'Strong', value: 'Large Solid Primary ×1', token: '메인 CTA 단독' },
            { label: 'Neutral', value: 'Large ×2 (보조 1 : 메인 2)', token: '복합 액션' },
            { label: 'Compact', value: 'Medium ×2 (1:1)', token: '작은 복합 액션' },
          ]}
        />
      </Col>
    </Section>
  ),
};

// ─── 7. 사용 가이드 ─────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  decorators: [],
  render: () => (
    <Section title="사용 가이드" description="개발자를 위한 ActionArea 컴포넌트 사용 예시입니다.">
      <Col gap={spacing.large}>
        <CodeBlock
          title="Import"
          code={`import { ActionArea } from '@design-system/components/ActionArea';`}
        />
        <CodeBlock
          title="Safe Area 적용 (react-native-safe-area-context)"
          code={`import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MyScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      {/* 화면 콘텐츠 */}
      <ActionArea
        variant="strong"
        primary={{ label: '결제하기', onPress: handlePay }}
        safeAreaBottom={insets.bottom}
      />
    </View>
  );
}`}
        />
        <CodeBlock
          title="Strong — CTA 강조형"
          code={`<ActionArea
  variant="strong"
  primary={{ label: '결제하기', onPress: handlePay }}
  safeAreaBottom={insets.bottom}
/>`}
        />
        <CodeBlock
          title="Neutral — 보조/메인 복합"
          code={`<ActionArea
  variant="neutral"
  primary={{ label: '다음', onPress: handleNext }}
  secondary={{ label: '이전', onPress: handleBack }}
  safeAreaBottom={insets.bottom}
/>`}
        />
        <CodeBlock
          title="Compact — 모달/바텀시트용"
          code={`<ActionArea
  variant="compact"
  primary={{ label: '적용', onPress: handleApply }}
  secondary={{ label: '초기화', onPress: handleReset }}
/>`}
        />

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>Props</StateLabel>
          <SpecTable
            rows={[
              { label: 'variant', value: "'strong' | 'neutral' | 'compact'", token: "레이아웃 변형 (기본: 'strong')" },
              { label: 'primary', value: '{ label, onPress, ... }', token: '메인 버튼 (필수)' },
              { label: 'secondary', value: '{ label, onPress, ... }', token: '보조 버튼' },
              { label: 'divider', value: 'boolean', token: '상단 구분선 (기본: true)' },
              { label: 'transparent', value: 'boolean', token: '투명 배경 (기본: false)' },
              { label: 'safeAreaBottom', value: 'number', token: 'Safe Area 하단 여백 (기본: 0)' },
            ]}
          />
        </Col>
      </Col>
    </Section>
  ),
};
