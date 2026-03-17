import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from '../src/components/Toast';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, red, yellow, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  argTypes: {
    message: { control: 'text', description: '토스트 메시지 텍스트' },
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning'],
      description: '상태 변형',
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
            paddingHorizontal: spacing.xlarge,
            paddingVertical: spacing.medium,
            borderRadius: radius.medium,
            alignSelf: 'flex-start',
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: fontSize.small, fontWeight: fontWeight.semibold }}>
            토스트 표시
          </Text>
        </Pressable>
        <Toast
          message="메시지에 마침표를 찍어요."
          variant="success"
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
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="변형"
        description="variant별로 왼쪽 아이콘이 달라집니다. 성공(민트 체크), 경고(노란 삼각형), 에러(빨간 느낌표)를 제공합니다."
      >
        <View style={{ gap: spacing['2xlarge'] }}>
          <Col gap={spacing.small}>
            <StateLabel>SUCCESS (성공)</StateLabel>
            <View style={{ height: 100, position: 'relative', backgroundColor: coolNeutral[99], borderRadius: radius.small }}>
              <Toast message="메시지에 마침표를 찍어요." variant="success" visible position="bottom" />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>WARNING (경고)</StateLabel>
            <View style={{ height: 100, position: 'relative', backgroundColor: coolNeutral[99], borderRadius: radius.small }}>
              <Toast message="메시지에 마침표를 찍어요." variant="warning" visible position="bottom" />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>ERROR (에러)</StateLabel>
            <View style={{ height: 100, position: 'relative', backgroundColor: coolNeutral[99], borderRadius: radius.small }}>
              <Toast message="메시지에 마침표를 찍어요." variant="error" visible position="bottom" />
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
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="액션 버튼"
        description="action prop으로 토스트에 인터랙티브 버튼을 추가할 수 있습니다."
      >
        <View style={{ gap: spacing.large }}>
          <Col gap={spacing.small}>
            <StateLabel>실행 취소</StateLabel>
            <View style={{ height: 100, position: 'relative', backgroundColor: coolNeutral[99], borderRadius: radius.small }}>
              <Toast
                message="항목이 삭제되었습니다."
                variant="success"
                visible
                action={{ label: '실행 취소', onPress: () => {} }}
              />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>다시 시도</StateLabel>
            <View style={{ height: 100, position: 'relative', backgroundColor: coolNeutral[99], borderRadius: radius.small }}>
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

// ─── 4. 인터랙티브 데모 ─────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [variant, setVariant] = useState<'success' | 'warning' | 'error'>('success');
    const [visible, setVisible] = useState(false);

    const show = (v: typeof variant) => {
      setVariant(v);
      setVisible(true);
    };

    return (
      <Section title="인터랙티브 데모" description="버튼을 눌러 각 변형의 토스트를 직접 확인해보세요. 3초 후 자동으로 사라집니다.">
        <Row gap={spacing.small} wrap>
          <Pressable
            onPress={() => show('success')}
            style={{ backgroundColor: mint[45], paddingHorizontal: spacing.large, paddingVertical: spacing.small, borderRadius: radius.small }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: fontSize.small, fontWeight: fontWeight.semibold }}>성공</Text>
          </Pressable>
          <Pressable
            onPress={() => show('warning')}
            style={{ backgroundColor: yellow[50], paddingHorizontal: spacing.large, paddingVertical: spacing.small, borderRadius: radius.small }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: fontSize.small, fontWeight: fontWeight.semibold }}>경고</Text>
          </Pressable>
          <Pressable
            onPress={() => show('error')}
            style={{ backgroundColor: red[70], paddingHorizontal: spacing.large, paddingVertical: spacing.small, borderRadius: radius.small }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: fontSize.small, fontWeight: fontWeight.semibold }}>에러</Text>
          </Pressable>
        </Row>
        <View style={{ height: 100, position: 'relative', marginTop: spacing.large }}>
          <Toast
            message="메시지에 마침표를 찍어요."
            variant={variant}
            visible={visible}
            duration={3000}
            onDismiss={() => setVisible(false)}
          />
        </View>
      </Section>
    );
  },
};

// ─── 5. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="디자이너와 개발자를 위한 Toast 토큰 상세 스펙입니다."
      >
        <SpecTable
          title="레이아웃"
          rows={[
            { label: '배경색', value: coolNeutral[50], token: 'coolNeutral[50]' },
            { label: '텍스트 색상', value: '#FFFFFF', token: 'palette.white' },
            { label: '폰트 크기', value: `${fontSize.medium}px`, token: 'fontSize.medium' },
            { label: '폰트 굵기', value: fontWeight.medium, token: 'fontWeight.medium' },
            { label: '모서리 반경', value: `${radius.medium}px`, token: 'radius.medium' },
            { label: '좌우 패딩', value: `${spacing.large}px`, token: 'spacing.large' },
            { label: '상하 패딩', value: `${spacing.medium}px`, token: 'spacing.medium' },
            { label: '아이콘-텍스트 간격', value: `${spacing.medium}px`, token: 'spacing.medium' },
            { label: '좌우 마진', value: `${spacing.large}px`, token: 'spacing.large' },
          ]}
        />

        <Divider />

        <SpecTable
          title="상태별 아이콘"
          rows={[
            { label: 'Success 아이콘', value: '민트 원 + 흰색 체크', token: `mint[45] (${mint[45]})` },
            { label: 'Warning 아이콘', value: '노란 삼각형 + 흰색 느낌표', token: `yellow[50] (${yellow[50]})` },
            { label: 'Error 아이콘', value: '빨간 원 + 흰색 느낌표', token: `red[70] (${red[70]})` },
            { label: 'Default 아이콘', value: '민트 원 + 흰색 느낌표', token: `mint[45] (${mint[45]})` },
            { label: '아이콘 크기', value: '24×24px', token: '—' },
          ]}
        />

        <Divider />

        <SpecTable
          title="액션 버튼"
          rows={[
            { label: '텍스트 색상', value: mint[80], token: 'mint[80]' },
            { label: '폰트 크기', value: `${fontSize.small}px`, token: 'fontSize.small' },
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
    <View style={{ gap: spacing['3xlarge'] }}>
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
  variant="success"
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
