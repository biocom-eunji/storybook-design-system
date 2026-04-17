import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../src/components/Switch';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof Switch> = {
  title: 'Input/Switch',
  component: Switch,
  argTypes: {
    active: { control: 'boolean', description: '켜짐 상태' },
    disabled: { control: 'boolean', description: '비활성화 상태' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Switch>;

// ─── 1. Playground ──────────────────────────────────────

export const Playground: Story = {
  args: {
    active: false,
    disabled: false,
  },
};

// ─── 2. 모든 상태 ──────────────────────────────────────

export const AllStates: Story = {
  name: '모든 상태',
  render: () => (
    <Section
      title="모든 상태"
      description="스위치의 켜짐/꺼짐 × 활성/비활성 4가지 상태를 확인합니다."
    >
      <CompareGrid
        items={[
          {
            label: '꺼짐',
            content: <Switch active={false} />,
          },
          {
            label: '켜짐',
            content: <Switch active />,
          },
          {
            label: '비활성 꺼짐',
            content: <Switch active={false} disabled />,
          },
          {
            label: '비활성 켜짐',
            content: <Switch active disabled />,
          },
        ]}
      />
    </Section>
  ),
};

// ─── 3. 인터랙티브 데모 ────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [notif, setNotif] = useState(false);
    const [dark, setDark] = useState(true);

    return (
      <Section
        title="인터랙티브 데모"
        description="스위치를 직접 눌러보며 상태 변화를 확인하세요."
      >
        <Col gap={spacing.xlarge}>
          <Row gap={spacing.medium}>
            <Switch active={notif} onPress={() => setNotif(!notif)} />
            <Text style={{ fontSize: fontSize.medium, fontWeight: fontWeight.medium, color: semanticColor.textPrimary }}>
              알림 설정
            </Text>
            <Text
              style={{
                fontSize: fontSize.small,
                fontWeight: fontWeight.semibold,
                color: notif ? mint[45] : coolNeutral[60],
              }}
            >
              {notif ? '켜짐' : '꺼짐'}
            </Text>
          </Row>

          <Row gap={spacing.medium}>
            <Switch active={dark} onPress={() => setDark(!dark)} />
            <Text style={{ fontSize: fontSize.medium, fontWeight: fontWeight.medium, color: semanticColor.textPrimary }}>
              다크 모드
            </Text>
            <Text
              style={{
                fontSize: fontSize.small,
                fontWeight: fontWeight.semibold,
                color: dark ? mint[45] : coolNeutral[60],
              }}
            >
              {dark ? '켜짐' : '꺼짐'}
            </Text>
          </Row>
        </Col>
      </Section>
    );
  },
};

// ─── 4. 디자인 스펙 ────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <Section
      title="디자인 스펙"
      description="스위치 컴포넌트의 치수와 색상 토큰을 정리한 참고 자료입니다."
    >
      <SpecTable
        title="치수"
        rows={[
          { label: '트랙 너비', value: '52px', token: '—' },
          { label: '트랙 높이', value: '32px', token: '—' },
          { label: '썸 크기', value: '28px', token: '—' },
          { label: '트랙 radius', value: '16px', token: 'trackH / 2' },
        ]}
      />

      <View style={{ height: spacing.large }} />

      <SpecTable
        title="색상"
        rows={[
          { label: '켜짐 트랙', value: mint[45], token: 'mint[45]' },
          { label: '꺼짐 트랙', value: coolNeutral[90], token: 'coolNeutral[90]' },
          { label: '비활성 트랙 (공통)', value: coolNeutral[96], token: 'coolNeutral[96]' },
          { label: '썸 색상', value: '#FFFFFF', token: 'semanticColor.textOnColor' },
        ]}
      />
    </Section>
  ),
};

// ─── 5. 사용 가이드 ────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <Section
      title="사용 가이드"
      description="개발 시 참고할 수 있는 코드 예제입니다."
    >
      <CodeBlock
        title="Import"
        code={`import { Switch } from '@design-system/components/Switch';`}
      />

      <CodeBlock
        title="기본 사용"
        code={`<Switch />
<Switch active />
<Switch disabled />`}
      />

      <CodeBlock
        title="제어 컴포넌트 (useState)"
        code={`const [active, setActive] = useState(false);

<Switch
  active={active}
  onPress={() => setActive(!active)}
/>`}
      />
    </Section>
  ),
};
