import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '../src/components/Chip';
import { Icon } from '../src/components/Icon';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius, buttonToken, chipToken } from '../src/tokens/theme';

const meta: Meta<typeof Chip> = {
  title: 'Form/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined'],
      description: '칩 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large'],
      description: '칩 크기',
    },
    active: { control: 'boolean', description: '활성화 상태' },
    disabled: { control: 'boolean', description: '비활성화 상태' },
    label: { control: 'text', description: '칩 텍스트' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: '텍스트',
    variant: 'solid',
    size: 'medium',
    active: false,
    disabled: false,
  },
};

// ─── 2. 모든 변형 ───────────────────────────────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="칩 변형 전체 보기"
        description="variant(solid/outlined)와 상태(inactive/active/disabled)의 모든 조합을 확인할 수 있습니다."
      >
        {/* Solid Row */}
        <View style={{ gap: spacing.xl }}>
          <Row gap={spacing['2xl']} align="flex-start">
            <Col gap={spacing.sm}>
              <StateLabel>Solid — 비활성</StateLabel>
              <Chip label="텍스트" variant="solid" />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>Solid — 활성</StateLabel>
              <Chip label="텍스트" variant="solid" active />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>Solid — 비활성화</StateLabel>
              <Chip label="텍스트" variant="solid" disabled />
            </Col>
          </Row>

          {/* Outlined Row */}
          <Row gap={spacing['2xl']} align="flex-start">
            <Col gap={spacing.sm}>
              <StateLabel>Outlined — 비활성</StateLabel>
              <Chip label="텍스트" variant="outlined" />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>Outlined — 활성</StateLabel>
              <Chip label="텍스트" variant="outlined" active />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>Outlined — 비활성화</StateLabel>
              <Chip label="텍스트" variant="outlined" disabled />
            </Col>
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
      description="XSmall, Small, Medium, Large 네 가지 크기를 나란히 비교합니다."
    >
      <Row gap={spacing['2xl']} align="flex-end">
        <Col gap={spacing.sm}>
          <StateLabel>{`XS — ${chipToken.size.xsmall.height}px`}</StateLabel>
          <Chip label="텍스트" size="xsmall" />
        </Col>
        <Col gap={spacing.sm}>
          <StateLabel>{`S — ${chipToken.size.small.height}px`}</StateLabel>
          <Chip label="텍스트" size="small" />
        </Col>
        <Col gap={spacing.sm}>
          <StateLabel>{`M — ${chipToken.size.medium.height}px`}</StateLabel>
          <Chip label="텍스트" size="medium" />
        </Col>
        <Col gap={spacing.sm}>
          <StateLabel>{`L — ${chipToken.size.large.height}px`}</StateLabel>
          <Chip label="텍스트" size="large" />
        </Col>
      </Row>
    </Section>
  ),
};

// ─── 4. 아이콘 조합 ─────────────────────────────────────────

export const WithIcons: Story = {
  name: '아이콘 조합',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="아이콘 조합"
        description="leadingIcon, trailingIcon 또는 양쪽 모두 아이콘을 배치할 수 있습니다."
      >
        <View style={{ gap: spacing.xl }}>
          <Row gap={spacing['2xl']} align="flex-start">
            <Col gap={spacing.sm}>
              <StateLabel>Leading 아이콘</StateLabel>
              <Chip
                label="선택됨"
                variant="solid"
                active
                leadingIcon={<Icon name="check" size={chipToken.size.medium.iconSize} />}
              />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>Trailing 아이콘</StateLabel>
              <Chip
                label="삭제"
                variant="outlined"
                trailingIcon={<Icon name="close" size={chipToken.size.medium.iconSize} />}
              />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>양쪽 아이콘</StateLabel>
              <Chip
                label="필터"
                variant="outlined"
                active
                leadingIcon={<Icon name="check" size={chipToken.size.medium.iconSize} />}
                trailingIcon={<Icon name="close" size={chipToken.size.medium.iconSize} />}
              />
            </Col>
          </Row>

          {/* Icon chips in different sizes */}
          <Row gap={spacing.lg} align="flex-end">
            <Col gap={spacing.sm}>
              <StateLabel>XS + 아이콘</StateLabel>
              <Chip
                label="태그"
                size="xsmall"
                leadingIcon={<Icon name="check" size={chipToken.size.xsmall.iconSize} />}
              />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>S + 아이콘</StateLabel>
              <Chip
                label="태그"
                size="small"
                leadingIcon={<Icon name="check" size={chipToken.size.small.iconSize} />}
              />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>M + 아이콘</StateLabel>
              <Chip
                label="태그"
                size="medium"
                leadingIcon={<Icon name="check" size={chipToken.size.medium.iconSize} />}
              />
            </Col>
            <Col gap={spacing.sm}>
              <StateLabel>L + 아이콘</StateLabel>
              <Chip
                label="태그"
                size="large"
                leadingIcon={<Icon name="check" size={chipToken.size.large.iconSize} />}
              />
            </Col>
          </Row>
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="디자인 스펙"
        description="디자이너와 개발자를 위한 칩 토큰 상세 스펙입니다."
      >
        {/* Size specs */}
        <SpecTable
          title="XSmall (24px)"
          rows={[
            { label: '높이', value: `${chipToken.size.xsmall.height}px`, token: 'chipToken.size.xsmall.height' },
            { label: '좌우 패딩', value: `${chipToken.size.xsmall.paddingHorizontal}px`, token: 'chipToken.size.xsmall.paddingHorizontal' },
            { label: '폰트 크기', value: `${chipToken.size.xsmall.fontSize}px`, token: 'fontSize.xs' },
            { label: '모서리 반경', value: `${chipToken.size.xsmall.radius}px`, token: 'radius.xs' },
          ]}
        />

        <SpecTable
          title="Small (28px)"
          rows={[
            { label: '높이', value: `${chipToken.size.small.height}px`, token: 'chipToken.size.small.height' },
            { label: '좌우 패딩', value: `${chipToken.size.small.paddingHorizontal}px`, token: 'chipToken.size.small.paddingHorizontal' },
            { label: '폰트 크기', value: `${chipToken.size.small.fontSize}px`, token: 'fontSize.xs' },
            { label: '모서리 반경', value: `${chipToken.size.small.radius}px`, token: 'radius.sm' },
          ]}
        />

        <SpecTable
          title="Medium (32px)"
          rows={[
            { label: '높이', value: `${chipToken.size.medium.height}px`, token: 'chipToken.size.medium.height' },
            { label: '좌우 패딩', value: `${chipToken.size.medium.paddingHorizontal}px`, token: 'chipToken.size.medium.paddingHorizontal' },
            { label: '폰트 크기', value: `${chipToken.size.medium.fontSize}px`, token: 'fontSize.sm' },
            { label: '모서리 반경', value: `${chipToken.size.medium.radius}px`, token: 'radius.sm' },
          ]}
        />

        <SpecTable
          title="Large (38px)"
          rows={[
            { label: '높이', value: `${chipToken.size.large.height}px`, token: 'chipToken.size.large.height' },
            { label: '좌우 패딩', value: `${chipToken.size.large.paddingHorizontal}px`, token: 'chipToken.size.large.paddingHorizontal' },
            { label: '폰트 크기', value: `${chipToken.size.large.fontSize}px`, token: 'fontSize.md' },
            { label: '모서리 반경', value: `${chipToken.size.large.radius}px`, token: 'radius.md' },
          ]}
        />

        <Divider />

        {/* Color state specs — Solid */}
        <SpecTable
          title="Solid 컬러 상태"
          rows={[
            { label: 'Inactive 배경', value: coolNeutral[97], token: 'coolNeutral[97]' },
            { label: 'Inactive 텍스트', value: coolNeutral[40], token: 'coolNeutral[40]' },
            { label: 'Active 배경', value: coolNeutral[10], token: 'coolNeutral[10]' },
            { label: 'Active 텍스트', value: '#FFFFFF', token: 'palette.white' },
            { label: 'Disabled 배경', value: coolNeutral[97], token: 'coolNeutral[97]' },
            { label: 'Disabled 텍스트', value: coolNeutral[80], token: 'coolNeutral[80]' },
          ]}
        />

        {/* Color state specs — Outlined */}
        <SpecTable
          title="Outlined 컬러 상태"
          rows={[
            { label: 'Inactive 배경', value: 'transparent', token: '— (transparent)' },
            { label: 'Inactive 텍스트', value: coolNeutral[40], token: 'coolNeutral[40]' },
            { label: 'Inactive 테두리', value: coolNeutral[90], token: 'coolNeutral[90]' },
            { label: 'Active 텍스트', value: mint[45], token: 'mint[45]' },
            { label: 'Active 테두리', value: mint[45], token: 'mint[45]' },
            { label: 'Disabled 텍스트', value: coolNeutral[80], token: 'coolNeutral[80]' },
            { label: 'Disabled 테두리', value: coolNeutral[96], token: 'coolNeutral[96]' },
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
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 Chip 컴포넌트 사용 예시입니다."
      >
        <CodeBlock
          title="Import"
          code={`import { Chip } from '@design-system/components/Chip';
import { Icon } from '@design-system/components/Icon';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<Chip label="카테고리" onPress={handleSelect} />`}
        />

        <CodeBlock
          title="모든 Props 예시"
          code={`<Chip
  label="필터"
  variant="outlined"
  size="medium"
  active={isSelected}
  disabled={false}
  leadingIcon={<Icon name="check" size={16} />}
  trailingIcon={<Icon name="close" size={16} />}
  onPress={handleToggle}
/>`}
        />
      </Section>
    </View>
  ),
};
