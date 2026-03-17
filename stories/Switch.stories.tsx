import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../src/components/Switch';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  argTypes: {
    active: { control: 'boolean' },
    platform: { control: 'select', options: ['ios', 'normal'] },
    size: { control: 'select', options: ['small', 'medium'] },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Switch>;

// ─── 1. Playground ──────────────────────────────────────

export const Playground: Story = {
  args: {
    active: false,
    platform: 'ios',
    size: 'medium',
    disabled: false,
  },
};

// ─── 2. 모든 변형 ──────────────────────────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  render: () => (
    <Section
      title="모든 변형"
      description="스위치의 모든 조합을 한눈에 확인할 수 있습니다."
    >
      {(['ios', 'normal'] as const).map((platform) => (
        <View key={platform} style={{ marginBottom: spacing['3xlarge'] }}>
          <Text
            style={{
              fontSize: fontSize.medium,
              fontWeight: fontWeight.bold,
              color: coolNeutral[17],
              marginBottom: spacing.large,
            }}
          >
            {platform === 'ios' ? 'iOS' : 'Normal'}
          </Text>

          {(['small', 'medium'] as const).map((size) => (
            <View key={size} style={{ marginBottom: spacing.xlarge }}>
              <Text
                style={{
                  fontSize: fontSize.small,
                  fontWeight: fontWeight.semibold,
                  color: coolNeutral[40],
                  marginBottom: spacing.small,
                }}
              >
                {size === 'small' ? 'Small' : 'Medium'}
              </Text>
              <Row gap={spacing['2xlarge']} wrap>
                <Col>
                  <StateLabel>꺼짐</StateLabel>
                  <Switch platform={platform} size={size} active={false} />
                </Col>
                <Col>
                  <StateLabel>켜짐</StateLabel>
                  <Switch platform={platform} size={size} active />
                </Col>
                <Col>
                  <StateLabel>비활성 꺼짐</StateLabel>
                  <Switch platform={platform} size={size} active={false} disabled />
                </Col>
                <Col>
                  <StateLabel>비활성 켜짐</StateLabel>
                  <Switch platform={platform} size={size} active disabled />
                </Col>
              </Row>
            </View>
          ))}
        </View>
      ))}
    </Section>
  ),
};

// ─── 3. 플랫폼 비교 ────────────────────────────────────

export const PlatformComparison: Story = {
  name: '플랫폼 비교',
  render: () => (
    <Section
      title="플랫폼 비교"
      description="iOS와 Normal 플랫폼의 동일한 상태를 나란히 비교합니다."
    >
      <Text
        style={{
          fontSize: fontSize.small,
          fontWeight: fontWeight.semibold,
          color: coolNeutral[30],
          marginBottom: spacing.medium,
        }}
      >
        Medium 크기 기준
      </Text>
      <CompareGrid
        items={[
          {
            label: 'iOS — 꺼짐',
            content: <Switch platform="ios" size="medium" active={false} />,
          },
          {
            label: 'Normal — 꺼짐',
            content: <Switch platform="normal" size="medium" active={false} />,
          },
          {
            label: 'iOS — 켜짐',
            content: <Switch platform="ios" size="medium" active />,
          },
          {
            label: 'Normal — 켜짐',
            content: <Switch platform="normal" size="medium" active />,
          },
          {
            label: 'iOS — 비활성 꺼짐',
            content: <Switch platform="ios" size="medium" active={false} disabled />,
          },
          {
            label: 'Normal — 비활성 꺼짐',
            content: <Switch platform="normal" size="medium" active={false} disabled />,
          },
          {
            label: 'iOS — 비활성 켜짐',
            content: <Switch platform="ios" size="medium" active disabled />,
          },
          {
            label: 'Normal — 비활성 켜짐',
            content: <Switch platform="normal" size="medium" active disabled />,
          },
        ]}
      />
    </Section>
  ),
};

// ─── 4. 크기 비교 ──────────────────────────────────────

export const Sizes: Story = {
  name: '크기 비교',
  render: () => (
    <Section
      title="크기 비교"
      description="플랫폼별 Small / Medium 크기를 비교합니다."
    >
      {(['ios', 'normal'] as const).map((platform) => (
        <View key={platform} style={{ marginBottom: spacing['2xlarge'] }}>
          <Text
            style={{
              fontSize: fontSize.medium,
              fontWeight: fontWeight.bold,
              color: coolNeutral[17],
              marginBottom: spacing.medium,
            }}
          >
            {platform === 'ios' ? 'iOS' : 'Normal'}
          </Text>
          <Row gap={spacing['3xlarge']}>
            <Col gap={spacing.small}>
              <StateLabel>
                {platform === 'ios' ? 'Small — 44×26' : 'Small — 36×20'}
              </StateLabel>
              <Switch platform={platform} size="small" active />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>
                {platform === 'ios' ? 'Medium — 52×32' : 'Medium — 44×24'}
              </StateLabel>
              <Switch platform={platform} size="medium" active />
            </Col>
          </Row>
        </View>
      ))}
    </Section>
  ),
};

// ─── 5. 인터랙티브 데모 ────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [notif, setNotif] = useState(false);
    const [dark, setDark] = useState(false);

    return (
      <Section
        title="인터랙티브 데모"
        description="스위치를 직접 눌러보며 상태 변화를 확인하세요."
      >
        <Col gap={spacing.xlarge}>
          <Row gap={spacing.medium}>
            <Switch platform="ios" size="medium" active={notif} onPress={() => setNotif(!notif)} />
            <Text style={{ fontSize: fontSize.medium, fontWeight: fontWeight.medium, color: coolNeutral[17] }}>
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
            <Switch platform="normal" size="medium" active={dark} onPress={() => setDark(!dark)} />
            <Text style={{ fontSize: fontSize.medium, fontWeight: fontWeight.medium, color: coolNeutral[17] }}>
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

// ─── 6. 디자인 스펙 ────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <Section
      title="디자인 스펙"
      description="스위치 컴포넌트의 치수와 색상 토큰을 정리한 참고 자료입니다."
    >
      <SpecTable
        title="iOS 치수"
        rows={[
          { label: 'Small 트랙 너비', value: '44px', token: '—' },
          { label: 'Small 트랙 높이', value: '26px', token: '—' },
          { label: 'Small 썸 크기', value: '22px', token: '—' },
          { label: 'Medium 트랙 너비', value: '52px', token: '—' },
          { label: 'Medium 트랙 높이', value: '32px', token: '—' },
          { label: 'Medium 썸 크기', value: '28px', token: '—' },
        ]}
      />

      <View style={{ height: spacing.large }} />

      <SpecTable
        title="Normal 치수"
        rows={[
          { label: 'Small 트랙 너비', value: '36px', token: '—' },
          { label: 'Small 트랙 높이', value: '20px', token: '—' },
          { label: 'Small 썸 크기', value: '16px', token: '—' },
          { label: 'Medium 트랙 너비', value: '44px', token: '—' },
          { label: 'Medium 트랙 높이', value: '24px', token: '—' },
          { label: 'Medium 썸 크기', value: '20px', token: '—' },
        ]}
      />

      <View style={{ height: spacing.large }} />

      <SpecTable
        title="색상"
        rows={[
          { label: '활성 트랙', value: '#22C3BC', token: 'mint[45]' },
          { label: '비활성 트랙', value: coolNeutral[90], token: 'coolNeutral[90]' },
          { label: '비활성화 활성 트랙', value: mint[90], token: 'mint[90]' },
          { label: '비활성화 비활성 트랙', value: coolNeutral[96], token: 'coolNeutral[96]' },
          { label: '썸 색상', value: '#FFFFFF', token: '—' },
        ]}
      />
    </Section>
  ),
};

// ─── 7. 사용 가이드 ────────────────────────────────────

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
<Switch size="small" />
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

      <CodeBlock
        title="플랫폼별 사용"
        code={`// iOS 스타일 (기본값)
<Switch platform="ios" size="medium" active />

// Normal 스타일
<Switch platform="normal" size="small" active={false} />`}
      />
    </Section>
  ),
};
