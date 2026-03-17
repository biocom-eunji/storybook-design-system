import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider as DividerComponent } from '../src/components/Divider';
import { Section, StateLabel, Col, SpecTable, CodeBlock, Divider as DividerLine } from './storyHelpers';
import { coolNeutral, mint, red, yellow, fontSize, fontWeight, spacing, radius, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof DividerComponent> = {
  title: 'General/Divider',
  component: DividerComponent,
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '구분선 방향',
    },
    thickness: {
      control: 'number',
      description: '선 두께 (px)',
    },
    color: {
      control: 'color',
      description: '선 색상',
    },
    spacing: {
      control: 'number',
      description: '양쪽 여백 (px)',
    },
    inset: {
      control: 'number',
      description: '왼쪽 들여쓰기 (px)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DividerComponent>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    direction: 'horizontal',
    thickness: 1,
    color: coolNeutral[96],
    spacing: 0,
    inset: 0,
  },
};

// ─── 2. 방향 ─────────────────────────────────────────────────

export const Directions: Story = {
  name: '방향',
  render: () => (
    <Section
      title="방향"
      description="horizontal(가로)과 vertical(세로) 두 가지 방향을 지원합니다."
    >
      <Col gap={spacing.xlarge}>
        <Col gap={spacing.small}>
          <StateLabel>Horizontal (기본)</StateLabel>
          <View style={{ backgroundColor: coolNeutral[99], padding: spacing.large, borderRadius: radius.small }}>
            <Text style={{ fontSize: fontSize.small, color: coolNeutral[50], marginBottom: spacing.small }}>위쪽 콘텐츠</Text>
            <DividerComponent />
            <Text style={{ fontSize: fontSize.small, color: coolNeutral[50], marginTop: spacing.small }}>아래쪽 콘텐츠</Text>
          </View>
        </Col>

        <Col gap={spacing.small}>
          <StateLabel>Vertical</StateLabel>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: coolNeutral[99],
            padding: spacing.large,
            borderRadius: radius.small,
            height: 60,
          }}>
            <Text style={{ fontSize: fontSize.small, color: coolNeutral[50] }}>왼쪽</Text>
            <View style={{ marginHorizontal: spacing.medium, height: '100%' }}>
              <DividerComponent direction="vertical" />
            </View>
            <Text style={{ fontSize: fontSize.small, color: coolNeutral[50] }}>오른쪽</Text>
          </View>
        </Col>
      </Col>
    </Section>
  ),
};

// ─── 3. 두께 ─────────────────────────────────────────────────

export const Thickness: Story = {
  name: '두께',
  render: () => (
    <Section
      title="두께"
      description="thickness 값을 조절하여 선의 두께를 변경할 수 있습니다."
    >
      <Col gap={spacing.xlarge}>
        <Col gap={spacing.small}>
          <StateLabel>1px (기본)</StateLabel>
          <DividerComponent thickness={1} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>2px</StateLabel>
          <DividerComponent thickness={2} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>4px</StateLabel>
          <DividerComponent thickness={4} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>8px</StateLabel>
          <DividerComponent thickness={8} />
        </Col>
      </Col>
    </Section>
  ),
};

// ─── 4. 색상 ─────────────────────────────────────────────────

export const Colors: Story = {
  name: '색상',
  render: () => (
    <Section
      title="색상"
      description="color prop으로 선 색상을 커스터마이즈할 수 있습니다."
    >
      <Col gap={spacing.xlarge}>
        <Col gap={spacing.small}>
          <StateLabel>{`기본 — coolNeutral[96]`}</StateLabel>
          <DividerComponent thickness={2} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{`coolNeutral[90]`}</StateLabel>
          <DividerComponent thickness={2} color={coolNeutral[90]} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{`mint[45]`}</StateLabel>
          <DividerComponent thickness={2} color={mint[45]} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{`red[70]`}</StateLabel>
          <DividerComponent thickness={2} color={red[70]} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{`yellow[50]`}</StateLabel>
          <DividerComponent thickness={2} color={yellow[50]} />
        </Col>
      </Col>
    </Section>
  ),
};

// ─── 5. 인셋 ─────────────────────────────────────────────────

export const Inset: Story = {
  name: '인셋',
  render: () => (
    <Section
      title="인셋 (들여쓰기)"
      description="inset prop으로 왼쪽 들여쓰기를 적용할 수 있습니다. 리스트 구분선에 유용합니다."
    >
      <View style={{ backgroundColor: coolNeutral[99], borderRadius: radius.small, overflow: 'hidden' }}>
        <View style={{ padding: spacing.large }}>
          <Text style={{ fontSize: fontSize.medium, color: coolNeutral[17] }}>전체 너비 (inset: 0)</Text>
        </View>
        <DividerComponent />
        <View style={{ padding: spacing.large }}>
          <Text style={{ fontSize: fontSize.medium, color: coolNeutral[17] }}>들여쓰기 16px</Text>
        </View>
        <DividerComponent inset={spacing.large} />
        <View style={{ padding: spacing.large }}>
          <Text style={{ fontSize: fontSize.medium, color: coolNeutral[17] }}>들여쓰기 48px</Text>
        </View>
        <DividerComponent inset={spacing['4xlarge']} />
        <View style={{ padding: spacing.large }}>
          <Text style={{ fontSize: fontSize.medium, color: coolNeutral[17] }}>마지막 항목</Text>
        </View>
      </View>
    </Section>
  ),
};

// ─── 6. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="디자이너와 개발자를 위한 Divider 토큰 상세 스펙입니다."
      >
        <SpecTable
          title="기본 스펙"
          rows={[
            { label: '기본 두께', value: '1px', token: '—' },
            { label: '기본 색상', value: coolNeutral[96], token: 'coolNeutral[96]' },
            { label: '기본 방향', value: 'horizontal', token: '—' },
            { label: '기본 여백', value: '0px', token: '—' },
            { label: '기본 인셋', value: '0px', token: '—' },
          ]}
        />

        <DividerLine />

        <SpecTable
          title="Horizontal 레이아웃"
          rows={[
            { label: '높이', value: 'thickness 값', token: '—' },
            { label: '너비', value: '100%', token: '—' },
            { label: '여백 방향', value: 'marginVertical', token: '—' },
          ]}
        />

        <SpecTable
          title="Vertical 레이아웃"
          rows={[
            { label: '너비', value: 'thickness 값', token: '—' },
            { label: '높이', value: '100%', token: '—' },
            { label: '여백 방향', value: 'marginHorizontal', token: '—' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 7. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 Divider 컴포넌트 사용 예시입니다."
      >
        <CodeBlock
          title="Import"
          code={`import { Divider } from '@design-system/components/Divider';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<Divider />`}
        />

        <CodeBlock
          title="리스트 구분선 (인셋)"
          code={`<Divider inset={16} />`}
        />

        <CodeBlock
          title="세로 구분선"
          code={`<View style={{ flexDirection: 'row', height: 40 }}>
  <Text>왼쪽</Text>
  <Divider direction="vertical" spacing={12} />
  <Text>오른쪽</Text>
</View>`}
        />

        <CodeBlock
          title="커스텀 스타일"
          code={`<Divider
  thickness={2}
  color={coolNeutral[90]}
  spacing={16}
  inset={24}
/>`}
        />
      </Section>
    </View>
  ),
};
