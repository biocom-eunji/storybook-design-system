import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionArea } from '../src/components/ActionArea';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof ActionArea> = {
  title: 'Display/ActionArea',
  component: ActionArea,
  argTypes: {
    variant: {
      control: 'select',
      options: ['strong', 'neutral', 'compact', 'cancel'],
      description: '레이아웃 변형',
    },
    divider: { control: 'boolean', description: '상단 구분선' },
    transparent: { control: 'boolean', description: '투명 배경' },
  },
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 400, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
        <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: fontSize.small, color: coolNeutral[70] }}>화면 콘텐츠 영역</Text>
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
  },
};

// ─── 2. 모든 변형 ──────────────────────────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  decorators: [],
  render: () => (
    <Section
      title="모든 변형"
      description="ActionArea는 화면 하단에서 사용자 액션을 유도하는 영역입니다. 4가지 레이아웃 변형을 제공합니다."
    >
      <View style={{ gap: spacing['3xlarge'] }}>
        {/* Strong */}
        <Col gap={spacing.small}>
          <StateLabel>STRONG — CTA 강조형</StateLabel>
          <Text style={{ fontSize: fontSize.xsmall, color: coolNeutral[50], marginBottom: spacing.small }}>
            메인 액션 하나만 크게 노출합니다. 결제, 가입 완료 등 핵심 전환 화면에 사용합니다.
          </Text>
          <View style={{ maxWidth: 400, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
            <View style={{ height: 80, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: fontSize.xsmall, color: coolNeutral[70] }}>콘텐츠</Text>
            </View>
            <ActionArea
              variant="strong"
              primary={{ label: '결제하기', onPress: () => {} }}
            />
          </View>
        </Col>

        <Divider />

        {/* Neutral */}
        <Col gap={spacing.small}>
          <StateLabel>NEUTRAL — 보조/메인 복합</StateLabel>
          <Text style={{ fontSize: fontSize.xsmall, color: coolNeutral[50], marginBottom: spacing.small }}>
            보조 버튼과 메인 버튼을 함께 노출합니다. 메인 버튼이 2:1 비율로 강조됩니다.
          </Text>
          <View style={{ maxWidth: 400, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
            <View style={{ height: 80, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: fontSize.xsmall, color: coolNeutral[70] }}>콘텐츠</Text>
            </View>
            <ActionArea
              variant="neutral"
              primary={{ label: '다음', onPress: () => {} }}
              secondary={{ label: '이전', onPress: () => {} }}
            />
          </View>
        </Col>

        <Divider />

        {/* Neutral with tertiary */}
        <Col gap={spacing.small}>
          <StateLabel>NEUTRAL + 제3 버튼</StateLabel>
          <Text style={{ fontSize: fontSize.xsmall, color: coolNeutral[50], marginBottom: spacing.small }}>
            상단에 제3 버튼을 추가로 배치할 수 있습니다.
          </Text>
          <View style={{ maxWidth: 400, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
            <View style={{ height: 80, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: fontSize.xsmall, color: coolNeutral[70] }}>콘텐츠</Text>
            </View>
            <ActionArea
              variant="neutral"
              primary={{ label: '저장', onPress: () => {} }}
              secondary={{ label: '취소', onPress: () => {} }}
              tertiary={{ label: '임시 저장', onPress: () => {} }}
            />
          </View>
        </Col>

        <Divider />

        {/* Compact */}
        <Col gap={spacing.small}>
          <StateLabel>COMPACT — 작은 크기 복합</StateLabel>
          <Text style={{ fontSize: fontSize.xsmall, color: coolNeutral[50], marginBottom: spacing.small }}>
            Medium 사이즈 버튼으로 공간을 절약합니다. 모달, 바텀시트 등에 적합합니다.
          </Text>
          <View style={{ maxWidth: 400, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
            <View style={{ height: 80, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: fontSize.xsmall, color: coolNeutral[70] }}>콘텐츠</Text>
            </View>
            <ActionArea
              variant="compact"
              primary={{ label: '적용', onPress: () => {} }}
              secondary={{ label: '초기화', onPress: () => {} }}
            />
          </View>
        </Col>

        <Divider />

        {/* Cancel */}
        <Col gap={spacing.small}>
          <StateLabel>CANCEL — 취소/확인</StateLabel>
          <Text style={{ fontSize: fontSize.xsmall, color: coolNeutral[50], marginBottom: spacing.small }}>
            취소와 확인 버튼을 1:1 비율로 배치합니다. 확인 대화상자에 사용합니다.
          </Text>
          <View style={{ maxWidth: 400, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
            <View style={{ height: 80, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: fontSize.xsmall, color: coolNeutral[70] }}>콘텐츠</Text>
            </View>
            <ActionArea
              variant="cancel"
              primary={{ label: '삭제', onPress: () => {} }}
              secondary={{ label: '취소', onPress: () => {} }}
            />
          </View>
        </Col>
      </View>
    </Section>
  ),
};

// ─── 3. 상태 ────────────────────────────────────────────

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
          <View style={{ width: 320, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
            <ActionArea
              variant="cancel"
              primary={{ label: '확인' }}
              secondary={{ label: '취소' }}
              divider={false}
            />
          </View>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>메인 버튼 비활성화</StateLabel>
          <View style={{ width: 320, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
            <ActionArea
              variant="cancel"
              primary={{ label: '확인', disabled: true }}
              secondary={{ label: '취소' }}
              divider={false}
            />
          </View>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>메인 버튼 로딩</StateLabel>
          <View style={{ width: 320, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
            <ActionArea
              variant="cancel"
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

// ─── 4. 옵션 ────────────────────────────────────────────

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
          <View style={{ width: 320, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
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
          <View style={{ width: 320, backgroundColor: coolNeutral[99], borderRadius: radius.large, overflow: 'hidden' }}>
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
          <View style={{ width: 320, backgroundColor: coolNeutral[97], borderRadius: radius.large, overflow: 'hidden' }}>
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

// ─── 5. 디자인 스펙 ─────────────────────────────────────

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
            { label: '상하 패딩', value: '12px', token: 'spacing.medium' },
            { label: '버튼 간격', value: '8px', token: 'actionAreaToken.gap (spacing.small)' },
            { label: '구분선 색상', value: coolNeutral[96], token: 'coolNeutral[96]' },
            { label: '배경색', value: '#FFFFFF', token: 'palette.white' },
          ]}
        />
        <SpecTable
          title="변형별 버튼 구성"
          rows={[
            { label: 'Strong', value: 'Large Solid Primary ×1', token: '메인 CTA 단독' },
            { label: 'Neutral', value: 'Large ×2 (보조 1 : 메인 2)', token: '복합 액션' },
            { label: 'Compact', value: 'Medium ×2 (1:1)', token: '작은 복합 액션' },
            { label: 'Cancel', value: 'Large ×2 (1:1)', token: '취소/확인' },
          ]}
        />
      </Col>
    </Section>
  ),
};

// ─── 6. 사용 가이드 ─────────────────────────────────────

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
          title="Strong — CTA 강조형"
          code={`<ActionArea
  variant="strong"
  primary={{ label: '결제하기', onPress: handlePay }}
/>`}
        />
        <CodeBlock
          title="Neutral — 보조/메인 복합"
          code={`<ActionArea
  variant="neutral"
  primary={{ label: '다음', onPress: handleNext }}
  secondary={{ label: '이전', onPress: handleBack }}
/>`}
        />
        <CodeBlock
          title="Neutral + 제3 버튼"
          code={`<ActionArea
  variant="neutral"
  primary={{ label: '저장', onPress: handleSave }}
  secondary={{ label: '취소', onPress: handleCancel }}
  tertiary={{ label: '임시 저장', onPress: handleDraft }}
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
        <CodeBlock
          title="Cancel — 확인 대화상자"
          code={`<ActionArea
  variant="cancel"
  primary={{ label: '삭제', onPress: handleDelete }}
  secondary={{ label: '취소', onPress: handleCancel }}
/>`}
        />
        <CodeBlock
          title="옵션: 구분선 없음 + 투명 배경"
          code={`<ActionArea
  variant="strong"
  primary={{ label: '확인' }}
  divider={false}
  transparent
/>`}
        />
        <CodeBlock
          title="비활성화 / 로딩"
          code={`<ActionArea
  variant="cancel"
  primary={{ label: '확인', disabled: true }}
  secondary={{ label: '취소' }}
/>

<ActionArea
  variant="strong"
  primary={{ label: '처리 중...', loading: true }}
/>`}
        />
      </Col>
    </Section>
  ),
};
