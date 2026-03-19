import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/components/Button';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius, buttonToken, chipToken } from '../src/tokens/theme';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined'],
      description: '버튼 스타일 변형',
    },
    color: {
      control: 'select',
      options: ['primary', 'assistive'],
      description: '버튼 컬러',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    label: { control: 'text', description: '버튼 텍스트' },
    disabled: { control: 'boolean', description: '비활성화 상태' },
    loading: { control: 'boolean', description: '로딩 상태' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: '버튼',
    variant: 'solid',
    color: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};

// ─── 2. 모든 변형 ───────────────────────────────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="버튼 변형 전체 보기"
        description="variant(solid/outlined)와 color(primary/assistive)의 모든 조합을 한눈에 확인할 수 있습니다."
      >
        {/* Header */}
        <Row gap={spacing['4xlarge']} align="flex-start">
          <View style={{ width: 200 }} />
          <View style={{ width: 140, alignItems: 'center' }}>
            <StateLabel>Primary</StateLabel>
          </View>
          <View style={{ width: 140, alignItems: 'center' }}>
            <StateLabel>Assistive</StateLabel>
          </View>
        </Row>

        <View style={{ gap: spacing.xlarge, marginTop: spacing.large }}>
          {/* Solid */}
          <Row gap={spacing['4xlarge']} align="center">
            <View style={{ width: 200 }}>
              <StateLabel>Solid</StateLabel>
            </View>
            <View style={{ width: 140, alignItems: 'center' }}>
              <Button label="확인" variant="solid" color="primary" />
            </View>
            <View style={{ width: 140, alignItems: 'center' }}>
              <Button label="확인" variant="solid" color="assistive" />
            </View>
          </Row>

          {/* Solid Disabled */}
          <Row gap={spacing['4xlarge']} align="center">
            <View style={{ width: 200 }}>
              <StateLabel>Solid (비활성화)</StateLabel>
            </View>
            <View style={{ width: 140, alignItems: 'center' }}>
              <Button label="확인" variant="solid" color="primary" disabled />
            </View>
            <View style={{ width: 140, alignItems: 'center' }}>
              <Button label="확인" variant="solid" color="assistive" disabled />
            </View>
          </Row>

          {/* Outlined */}
          <Row gap={spacing['4xlarge']} align="center">
            <View style={{ width: 200 }}>
              <StateLabel>Outlined</StateLabel>
            </View>
            <View style={{ width: 140, alignItems: 'center' }}>
              <Button label="확인" variant="outlined" color="primary" />
            </View>
            <View style={{ width: 140, alignItems: 'center' }}>
              <Button label="확인" variant="outlined" color="assistive" />
            </View>
          </Row>

          {/* Outlined Disabled */}
          <Row gap={spacing['4xlarge']} align="center">
            <View style={{ width: 200 }}>
              <StateLabel>Outlined (비활성화)</StateLabel>
            </View>
            <View style={{ width: 140, alignItems: 'center' }}>
              <Button label="확인" variant="outlined" color="primary" disabled />
            </View>
            <View style={{ width: 140, alignItems: 'center' }}>
              <Button label="확인" variant="outlined" color="assistive" disabled />
            </View>
          </Row>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. 크기 비교 ───────────────────────────────────────────

export const Sizes: Story = {
  name: '크기 비교',
  render: () => (
    <Section
      title="크기 비교"
      description="Small, Medium, Large 세 가지 크기를 나란히 비교합니다."
    >
      <Row gap={spacing['2xlarge']} align="flex-end">
        <Col gap={spacing.small}>
          <StateLabel>{`S — ${buttonToken.size.small.height}px`}</StateLabel>
          <Button label="버튼" variant="solid" color="primary" size="small" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{`M — ${buttonToken.size.medium.height}px`}</StateLabel>
          <Button label="버튼" variant="solid" color="primary" size="medium" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{`L — ${buttonToken.size.large.height}px`}</StateLabel>
          <Button label="버튼" variant="solid" color="primary" size="large" />
        </Col>
      </Row>
    </Section>
  ),
};

// ─── 4. 상태 ────────────────────────────────────────────────

export const States: Story = {
  name: '상태',
  render: () => (
    <Section
      title="버튼 상태"
      description="기본, 눌림, 비활성화, 로딩 등 다양한 인터랙션 상태를 확인합니다."
    >
      <CompareGrid
        items={[
          {
            label: '기본',
            content: <Button label="확인" variant="solid" color="primary" />,
          },
          {
            label: '눌림 (Pressed)',
            content: (
              <View style={{
                backgroundColor: mint[30],
                height: buttonToken.size.medium.height,
                paddingHorizontal: buttonToken.size.medium.paddingHorizontal,
                borderRadius: buttonToken.size.medium.radius,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <View>
                  <Button label="확인" variant="solid" color="primary" />
                </View>
              </View>
            ),
          },
          {
            label: '비활성화',
            content: <Button label="확인" variant="solid" color="primary" disabled />,
          },
          {
            label: '로딩',
            content: <Button label="확인" variant="solid" color="primary" loading />,
          },
        ]}
      />
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
        description="디자이너와 개발자를 위한 버튼 토큰 상세 스펙입니다."
      >
        {/* Size specs */}
        <SpecTable
          title="Small (36px)"
          rows={[
            { label: '높이', value: `${buttonToken.size.small.height}px`, token: 'buttonToken.size.small.height' },
            { label: '좌우 패딩', value: `${buttonToken.size.small.paddingHorizontal}px`, token: 'buttonToken.size.small.paddingHorizontal' },
            { label: '폰트 스타일', value: `Label 2 (${buttonToken.size.small.fontSize}px)`, token: 'textStyle.label2' },
            { label: '모서리 반경', value: `${buttonToken.size.small.radius}px`, token: 'radius.small' },
          ]}
        />

        <SpecTable
          title="Medium (44px)"
          rows={[
            { label: '높이', value: `${buttonToken.size.medium.height}px`, token: 'buttonToken.size.medium.height' },
            { label: '좌우 패딩', value: `${buttonToken.size.medium.paddingHorizontal}px`, token: 'buttonToken.size.medium.paddingHorizontal' },
            { label: '폰트 스타일', value: `Body 2 (${buttonToken.size.medium.fontSize}px)`, token: 'textStyle.body2' },
            { label: '모서리 반경', value: `${buttonToken.size.medium.radius}px`, token: 'radius.medium' },
          ]}
        />

        <SpecTable
          title="Large (52px)"
          rows={[
            { label: '높이', value: `${buttonToken.size.large.height}px`, token: 'buttonToken.size.large.height' },
            { label: '좌우 패딩', value: `${buttonToken.size.large.paddingHorizontal}px`, token: 'buttonToken.size.large.paddingHorizontal' },
            { label: '폰트 스타일', value: `Headline (${buttonToken.size.large.fontSize}px)`, token: 'textStyle.headline' },
            { label: '모서리 반경', value: `${buttonToken.size.large.radius}px`, token: 'radius.medium' },
          ]}
        />

        <Divider />

        {/* Color specs — Primary Solid */}
        <SpecTable
          title="Primary Solid 컬러"
          rows={[
            { label: '배경색', value: mint[45], token: 'mint[45]' },
            { label: '텍스트 색상', value: '#FFFFFF', token: 'palette.white' },
            { label: '눌림 배경', value: mint[30], token: 'mint[30]' },
            { label: '비활성화 배경', value: coolNeutral[96], token: 'coolNeutral[96]' },
            { label: '비활성화 텍스트', value: coolNeutral[80], token: 'coolNeutral[80]' },
          ]}
        />

        {/* Color specs — Primary Outlined */}
        <SpecTable
          title="Primary Outlined 컬러"
          rows={[
            { label: '배경색', value: 'transparent', token: "— (transparent)" },
            { label: '텍스트 색상', value: mint[45], token: 'mint[45]' },
            { label: '테두리 색상', value: mint[45], token: 'mint[45]' },
            { label: '비활성화 텍스트', value: coolNeutral[80], token: 'coolNeutral[80]' },
            { label: '비활성화 테두리', value: coolNeutral[96], token: 'coolNeutral[96]' },
          ]}
        />

        {/* Color specs — Assistive Solid */}
        <SpecTable
          title="Assistive Solid 컬러"
          rows={[
            { label: '배경색', value: coolNeutral[97], token: 'coolNeutral[97]' },
            { label: '텍스트 색상', value: coolNeutral[17], token: 'coolNeutral[17]' },
            { label: '눌림 배경', value: coolNeutral[90], token: 'coolNeutral[90]' },
            { label: '비활성화 텍스트', value: coolNeutral[80], token: 'coolNeutral[80]' },
          ]}
        />

        {/* Color specs — Assistive Outlined */}
        <SpecTable
          title="Assistive Outlined 컬러"
          rows={[
            { label: '배경색', value: 'transparent', token: "— (transparent)" },
            { label: '텍스트 색상', value: coolNeutral[40], token: 'coolNeutral[40]' },
            { label: '테두리 색상', value: coolNeutral[90], token: 'coolNeutral[90]' },
            { label: '비활성화 텍스트', value: coolNeutral[80], token: 'coolNeutral[80]' },
            { label: '비활성화 테두리', value: coolNeutral[96], token: 'coolNeutral[96]' },
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
        description="개발자를 위한 Button 컴포넌트 사용 예시입니다."
      >
        <CodeBlock
          title="Import"
          code={`import { Button } from '@design-system/components/Button';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<Button label="확인" onPress={handlePress} />`}
        />

        <CodeBlock
          title="모든 Props 예시"
          code={`<Button
  label="저장하기"
  variant="solid"
  color="primary"
  size="large"
  disabled={false}
  loading={isLoading}
  onPress={handleSave}
/>`}
        />
      </Section>
    </View>
  ),
};
