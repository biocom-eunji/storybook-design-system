import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from '../src/components/Toast';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, red, yellow, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    message: { control: 'text', description: '토스트 메시지 텍스트' },
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning'],
      description: '색상 변형',
    },
    visible: { control: 'boolean', description: '표시 여부' },
    duration: { control: 'number', description: '자동 닫힘 시간(ms)' },
    position: {
      control: 'select',
      options: ['top', 'bottom'],
      description: '위치',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  render: function PlaygroundRender() {
    const [visible, setVisible] = useState(false);
    return (
      <View style={{ height: 200 }}>
        <Pressable
          onPress={() => setVisible(true)}
          style={{
            backgroundColor: mint[45],
            paddingHorizontal: spacing.xl,
            paddingVertical: spacing.md,
            borderRadius: radius.md,
            alignSelf: 'flex-start',
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: fontSize.sm, fontWeight: fontWeight.semibold }}>
            토스트 표시
          </Text>
        </Pressable>
        <Toast
          message="변경사항이 저장되었습니다."
          variant="default"
          visible={visible}
          duration={3000}
          onDismiss={() => setVisible(false)}
          position="bottom"
        />
      </View>
    );
  },
};

// ─── 2. 변형 ─────────────────────────────────────────────────

export const Variants: Story = {
  name: '변형',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="변형"
        description="variant별로 왼쪽 강조 보더 색상이 달라집니다."
      >
        <View style={{ gap: spacing.lg }}>
          <Col gap={spacing.sm}>
            <StateLabel>Default</StateLabel>
            <View style={{ height: 80, position: 'relative' }}>
              <Toast message="기본 알림 메시지입니다." variant="default" visible position="bottom" />
            </View>
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>Success</StateLabel>
            <View style={{ height: 80, position: 'relative' }}>
              <Toast message="성공적으로 저장되었습니다." variant="success" visible position="bottom" />
            </View>
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>Error</StateLabel>
            <View style={{ height: 80, position: 'relative' }}>
              <Toast message="오류가 발생했습니다." variant="error" visible position="bottom" />
            </View>
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>Warning</StateLabel>
            <View style={{ height: 80, position: 'relative' }}>
              <Toast message="네트워크 연결이 불안정합니다." variant="warning" visible position="bottom" />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. 액션 버튼 ────────────────────────────────────────────

export const WithAction: Story = {
  name: '액션 버튼',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="액션 버튼"
        description="action prop으로 토스트에 인터랙티브 버튼을 추가할 수 있습니다."
      >
        <View style={{ gap: spacing.lg }}>
          <Col gap={spacing.sm}>
            <StateLabel>실행 취소</StateLabel>
            <View style={{ height: 80, position: 'relative' }}>
              <Toast
                message="항목이 삭제되었습니다."
                variant="default"
                visible
                action={{ label: '실행 취소', onPress: () => {} }}
              />
            </View>
          </Col>
          <Col gap={spacing.sm}>
            <StateLabel>다시 시도</StateLabel>
            <View style={{ height: 80, position: 'relative' }}>
              <Toast
                message="전송에 실패했습니다."
                variant="error"
                visible
                action={{ label: '다시 시도', onPress: () => {} }}
              />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. 위치 ─────────────────────────────────────────────────

export const Position: Story = {
  name: '위치',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="위치"
        description="position prop으로 토스트의 상단/하단 표시를 제어합니다."
      >
        <CompareGrid
          items={[
            {
              label: 'Top',
              content: (
                <View style={{ height: 120, position: 'relative', backgroundColor: coolNeutral[99], borderRadius: radius.sm }}>
                  <Toast message="상단 토스트" variant="default" visible position="top" />
                </View>
              ),
            },
            {
              label: 'Bottom',
              content: (
                <View style={{ height: 120, position: 'relative', backgroundColor: coolNeutral[99], borderRadius: radius.sm }}>
                  <Toast message="하단 토스트" variant="default" visible position="bottom" />
                </View>
              ),
            },
          ]}
        />
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
        description="디자이너와 개발자를 위한 Toast 토큰 상세 스펙입니다."
      >
        <SpecTable
          title="레이아웃"
          rows={[
            { label: '배경색', value: coolNeutral[17], token: 'coolNeutral[17]' },
            { label: '배경 투명도', value: '0.95', token: '—' },
            { label: '텍스트 색상', value: '#FFFFFF', token: 'palette.white' },
            { label: '폰트 크기', value: `${fontSize.sm}px`, token: 'fontSize.sm' },
            { label: '폰트 굵기', value: fontWeight.medium, token: 'fontWeight.medium' },
            { label: '모서리 반경', value: `${radius.md}px`, token: 'radius.md' },
            { label: '좌우 패딩', value: '20px', token: '—' },
            { label: '상하 패딩', value: '14px', token: '—' },
            { label: '좌우 마진', value: '16px', token: '—' },
            { label: '상/하 마진', value: '48px', token: '—' },
          ]}
        />

        <Divider />

        <SpecTable
          title="Variant 액센트 (왼쪽 보더)"
          rows={[
            { label: 'Default', value: mint[45], token: 'mint[45]' },
            { label: 'Success', value: mint[45], token: 'mint[45]' },
            { label: 'Error', value: red[70], token: 'red[70]' },
            { label: 'Warning', value: yellow[50], token: 'yellow[50]' },
            { label: '보더 두께', value: '3px', token: '—' },
          ]}
        />

        <Divider />

        <SpecTable
          title="액션 버튼"
          rows={[
            { label: '텍스트 색상', value: mint[45], token: 'mint[45]' },
            { label: '폰트 크기', value: `${fontSize.sm}px`, token: 'fontSize.sm' },
            { label: '폰트 굵기', value: fontWeight.semibold, token: 'fontWeight.semibold' },
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
        description="개발자를 위한 Toast 컴포넌트 사용 예시입니다."
      >
        <CodeBlock
          title="Import"
          code={`import { Toast } from '@design-system/components/Toast';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`const [visible, setVisible] = useState(false);

<Toast
  message="저장되었습니다."
  visible={visible}
  onDismiss={() => setVisible(false)}
/>`}
        />

        <CodeBlock
          title="액션 버튼 포함"
          code={`<Toast
  message="항목이 삭제되었습니다."
  variant="error"
  visible={visible}
  onDismiss={() => setVisible(false)}
  action={{
    label: '실행 취소',
    onPress: handleUndo,
  }}
/>`}
        />

        <CodeBlock
          title="상단 위치 + 경고"
          code={`<Toast
  message="네트워크 연결 불안정"
  variant="warning"
  visible={visible}
  position="top"
  duration={5000}
  onDismiss={() => setVisible(false)}
/>`}
        />
      </Section>
    </View>
  ),
};
