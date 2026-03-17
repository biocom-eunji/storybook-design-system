import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../src/components/Badge';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, Divider as DividerLine } from './storyHelpers';
import { coolNeutral, mint, red, yellow, fontSize, fontWeight, spacing, radius, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  argTypes: {
    count: {
      control: 'number',
      description: '표시할 숫자 (생략 시 dot 뱃지에서는 숫자 없음)',
    },
    maxCount: {
      control: 'number',
      description: '최대 표시 숫자 (초과 시 99+)',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'dot'],
      description: '뱃지 스타일 변형',
    },
    color: {
      control: 'select',
      options: ['primary', 'error', 'success', 'warning'],
      description: '뱃지 컬러 테마',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: '뱃지 크기',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    count: 5,
    maxCount: 99,
    variant: 'filled',
    color: 'error',
    size: 'medium',
  },
};

// ─── 2. 모든 변형 ───────────────────────────────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="뱃지 변형 전체 보기"
        description="variant(filled/outlined/dot)와 color(primary/error/success/warning)의 모든 조합입니다."
      >
        {/* Header */}
        <Row gap={spacing['4xlarge']} align="flex-start">
          <View style={{ width: 100 }} />
          <View style={{ width: 80, alignItems: 'center' }}>
            <StateLabel>Primary</StateLabel>
          </View>
          <View style={{ width: 80, alignItems: 'center' }}>
            <StateLabel>Error</StateLabel>
          </View>
          <View style={{ width: 80, alignItems: 'center' }}>
            <StateLabel>Success</StateLabel>
          </View>
          <View style={{ width: 80, alignItems: 'center' }}>
            <StateLabel>Warning</StateLabel>
          </View>
        </Row>

        <View style={{ gap: spacing.xlarge, marginTop: spacing.large }}>
          {/* Filled */}
          <Row gap={spacing['4xlarge']} align="center">
            <View style={{ width: 100 }}>
              <StateLabel>Filled</StateLabel>
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge count={5} variant="filled" color="primary" />
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge count={5} variant="filled" color="error" />
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge count={5} variant="filled" color="success" />
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge count={5} variant="filled" color="warning" />
            </View>
          </Row>

          {/* Outlined */}
          <Row gap={spacing['4xlarge']} align="center">
            <View style={{ width: 100 }}>
              <StateLabel>Outlined</StateLabel>
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge count={5} variant="outlined" color="primary" />
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge count={5} variant="outlined" color="error" />
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge count={5} variant="outlined" color="success" />
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge count={5} variant="outlined" color="warning" />
            </View>
          </Row>

          {/* Dot */}
          <Row gap={spacing['4xlarge']} align="center">
            <View style={{ width: 100 }}>
              <StateLabel>Dot</StateLabel>
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge variant="dot" color="primary" />
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge variant="dot" color="error" />
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge variant="dot" color="success" />
            </View>
            <View style={{ width: 80, alignItems: 'center' }}>
              <Badge variant="dot" color="warning" />
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
      description="Small(16px)과 Medium(20px) 두 가지 크기를 비교합니다."
    >
      <Row gap={spacing['3xlarge']} align="flex-end">
        <Col gap={spacing.small}>
          <StateLabel>Small (16px)</StateLabel>
          <Row gap={spacing.medium}>
            <Badge count={3} variant="filled" color="error" size="small" />
            <Badge count={3} variant="outlined" color="error" size="small" />
            <Badge variant="dot" color="error" size="small" />
          </Row>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>Medium (20px)</StateLabel>
          <Row gap={spacing.medium}>
            <Badge count={3} variant="filled" color="error" size="medium" />
            <Badge count={3} variant="outlined" color="error" size="medium" />
            <Badge variant="dot" color="error" size="medium" />
          </Row>
        </Col>
      </Row>
    </Section>
  ),
};

// ─── 4. 래핑 예시 ───────────────────────────────────────────

export const WrappingExample: Story = {
  name: '래핑 예시',
  render: () => (
    <Section
      title="래핑 예시"
      description="children을 감싸면 뱃지가 우상단에 자동 위치합니다."
    >
      <Row gap={spacing['3xlarge']}>
        <Col gap={spacing.small}>
          <StateLabel>숫자 뱃지</StateLabel>
          <Badge count={3} variant="filled" color="error">
            <View style={{
              width: 48,
              height: 48,
              borderRadius: radius.medium,
              backgroundColor: coolNeutral[97],
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{ fontSize: fontSize.xlarge, color: coolNeutral[50] }}>A</Text>
            </View>
          </Badge>
        </Col>

        <Col gap={spacing.small}>
          <StateLabel>99+ 뱃지</StateLabel>
          <Badge count={150} variant="filled" color="error">
            <View style={{
              width: 48,
              height: 48,
              borderRadius: radius.medium,
              backgroundColor: coolNeutral[97],
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{ fontSize: fontSize.xlarge, color: coolNeutral[50] }}>B</Text>
            </View>
          </Badge>
        </Col>

        <Col gap={spacing.small}>
          <StateLabel>Dot 뱃지</StateLabel>
          <Badge variant="dot" color="error">
            <View style={{
              width: 48,
              height: 48,
              borderRadius: radius.medium,
              backgroundColor: coolNeutral[97],
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{ fontSize: fontSize.xlarge, color: coolNeutral[50] }}>C</Text>
            </View>
          </Badge>
        </Col>

        <Col gap={spacing.small}>
          <StateLabel>Outlined 뱃지</StateLabel>
          <Badge count={7} variant="outlined" color="primary">
            <View style={{
              width: 48,
              height: 48,
              borderRadius: radius.medium,
              backgroundColor: coolNeutral[97],
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{ fontSize: fontSize.xlarge, color: coolNeutral[50] }}>D</Text>
            </View>
          </Badge>
        </Col>
      </Row>
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
        description="디자이너와 개발자를 위한 Badge 토큰 상세 스펙입니다."
      >
        <SpecTable
          title="Small (16px)"
          rows={[
            { label: '높이', value: '16px', token: 'SIZE_MAP.small.height' },
            { label: '최소 너비', value: '16px', token: 'SIZE_MAP.small.minWidth' },
            { label: '폰트 크기', value: '10px', token: 'SIZE_MAP.small.fontSize' },
            { label: 'Dot 크기', value: '6px', token: 'SIZE_MAP.small.dotSize' },
            { label: '모서리 반경', value: '9999px', token: 'radius.full' },
          ]}
        />

        <SpecTable
          title="Medium (20px)"
          rows={[
            { label: '높이', value: '20px', token: 'SIZE_MAP.medium.height' },
            { label: '최소 너비', value: '20px', token: 'SIZE_MAP.medium.minWidth' },
            { label: '폰트 크기', value: '11px', token: 'SIZE_MAP.medium.fontSize' },
            { label: 'Dot 크기', value: '8px', token: 'SIZE_MAP.medium.dotSize' },
            { label: '모서리 반경', value: '9999px', token: 'radius.full' },
          ]}
        />

        <DividerLine />

        <SpecTable
          title="컬러 토큰"
          rows={[
            { label: 'Primary', value: mint[45], token: 'mint[45]' },
            { label: 'Error', value: red[70], token: 'red[70]' },
            { label: 'Success', value: mint[45], token: 'mint[45]' },
            { label: 'Warning', value: yellow[50], token: 'yellow[50]' },
            { label: 'Filled 텍스트', value: '#FFFFFF', token: 'palette.white' },
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
        description="개발자를 위한 Badge 컴포넌트 사용 예시입니다."
      >
        <CodeBlock
          title="Import"
          code={`import { Badge } from '@design-system/components/Badge';`}
        />

        <CodeBlock
          title="숫자 뱃지"
          code={`<Badge count={5} variant="filled" color="error" />`}
        />

        <CodeBlock
          title="Dot 뱃지"
          code={`<Badge variant="dot" color="primary" />`}
        />

        <CodeBlock
          title="아이콘 래핑"
          code={`<Badge count={3} color="error">
  <IconButton name="notification" />
</Badge>`}
        />

        <CodeBlock
          title="최대값 커스텀"
          code={`<Badge count={150} maxCount={99} color="error" />
// 결과: "99+"`}
        />
      </Section>
    </View>
  ),
};
