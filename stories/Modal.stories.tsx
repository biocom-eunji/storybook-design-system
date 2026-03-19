import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from '../src/components/Modal';
import { Section, StateLabel, Col, SpecTable, CodeBlock, Divider } from './storyHelpers';
import { coolNeutral, mint, red, fontSize, fontWeight, spacing, radius, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  argTypes: {
    visible: { control: 'boolean', description: '표시 여부' },
    title: { control: 'text', description: '대화상자 타이틀' },
    description: { control: 'text', description: '본문 텍스트' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const PreviewContainer = ({ children }: { children: React.ReactNode }) => (
  <View style={{ height: 400, backgroundColor: coolNeutral[99], position: 'relative', overflow: 'hidden', borderRadius: radius.medium, justifyContent: 'center', alignItems: 'center' }}>
    {children}
  </View>
);

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    visible: true,
    title: '알림',
    description: '변경 사항을 저장하시겠습니까?',
  },
  render: (args) => {
    const [visible, setVisible] = useState(args.visible);
    return (
      <View style={{ gap: spacing.large }}>
        <Pressable
          onPress={() => setVisible(true)}
          style={{ backgroundColor: mint[45], paddingHorizontal: spacing.xlarge, paddingVertical: spacing.medium, borderRadius: radius.medium, alignSelf: 'flex-start' }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: fontSize.medium, fontWeight: fontWeight.semibold }}>모달 열기</Text>
        </Pressable>
        <PreviewContainer>
          <Modal
            {...args}
            visible={visible}
            onClose={() => setVisible(false)}
            primaryAction={{ label: '확인', onPress: () => setVisible(false) }}
            secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
          />
        </PreviewContainer>
      </View>
    );
  },
};

// ─── 2. 기본 대화상자 ──────────────────────────────────────────

export const Default: Story = {
  name: '기본 대화상자',
  render: () => (
    <Section
      title="기본 대화상자"
      description="타이틀, 설명, 버튼이 포함된 기본 모달입니다."
    >
      <PreviewContainer>
        <Modal
          visible
          title="변경 사항 저장"
          description="저장하지 않으면 변경 사항이 모두 사라집니다."
          primaryAction={{ label: '저장', onPress: () => {} }}
          secondaryAction={{ label: '취소', onPress: () => {} }}
        />
      </PreviewContainer>
    </Section>
  ),
};

// ─── 3. 위험 액션 ───────────────────────────────────────────

export const Destructive: Story = {
  name: '위험 액션',
  render: () => (
    <Section
      title="위험 액션"
      description="삭제 등 되돌릴 수 없는 작업에 대한 경고 모달입니다. Primary 버튼이 빨간색으로 표시됩니다."
    >
      <PreviewContainer>
        <Modal
          visible
          title="계정 삭제"
          description="정말로 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
          primaryAction={{ label: '삭제', onPress: () => {}, destructive: true }}
          secondaryAction={{ label: '취소', onPress: () => {} }}
        />
      </PreviewContainer>
    </Section>
  ),
};

// ─── 4. 커스텀 콘텐츠 ──────────────────────────────────────────

export const CustomContent: Story = {
  name: '커스텀 콘텐츠',
  render: () => (
    <Section
      title="커스텀 콘텐츠"
      description="children을 통해 description 대신 커스텀 콘텐츠를 렌더링할 수 있습니다."
    >
      <PreviewContainer>
        <Modal
          visible
          title="피드백 보내기"
          primaryAction={{ label: '보내기', onPress: () => {} }}
          secondaryAction={{ label: '취소', onPress: () => {} }}
        >
          <View style={{ gap: spacing.medium, marginTop: spacing.medium }}>
            <Text style={{ fontSize: fontSize.small, color: coolNeutral[50], textAlign: 'center' }}>
              서비스 개선을 위해 의견을 보내주세요.
            </Text>
            <View style={{
              borderWidth: 1,
              borderColor: coolNeutral[96],
              borderRadius: radius.small,
              padding: spacing.medium,
              minHeight: 80,
              backgroundColor: coolNeutral[99],
            }}>
              <Text style={{ fontSize: fontSize.medium, color: coolNeutral[80] }}>의견을 입력하세요...</Text>
            </View>
          </View>
        </Modal>
      </PreviewContainer>
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
        description="Modal 컴포넌트의 디자인 토큰 상세 스펙입니다."
      >
        <SpecTable
          title="오버레이"
          rows={[
            { label: '배경색', value: 'rgba(0,0,0,0.4)', token: '—' },
            { label: '정렬', value: 'center / center', token: '—' },
          ]}
        />

        <SpecTable
          title="대화상자"
          rows={[
            { label: '배경색', value: '#FFFFFF', token: 'coolNeutral[100]' },
            { label: '모서리 반경', value: '20px', token: '—' },
            { label: '너비', value: '300px', token: '—' },
            { label: '패딩', value: `${spacing['2xlarge']}px`, token: 'spacing.2xl' },
          ]}
        />

        <SpecTable
          title="타이틀"
          rows={[
            { label: '폰트 크기', value: `${fontSize.large}px`, token: 'fontSize.large' },
            { label: '폰트 굵기', value: fontWeight.bold, token: 'fontWeight.bold' },
            { label: '색상', value: coolNeutral[17], token: 'coolNeutral[17]' },
            { label: '정렬', value: 'center', token: '—' },
          ]}
        />

        <SpecTable
          title="설명"
          rows={[
            { label: '폰트 크기', value: `${fontSize.medium}px`, token: 'fontSize.medium' },
            { label: '색상', value: coolNeutral[50], token: 'coolNeutral[50]' },
            { label: '상단 마진', value: `${spacing.small}px`, token: 'spacing.small' },
            { label: '정렬', value: 'center', token: '—' },
          ]}
        />

        <SpecTable
          title="Primary 버튼"
          rows={[
            { label: '높이', value: '48px', token: '—' },
            { label: '모서리 반경', value: `${spacing.medium}px`, token: 'spacing.medium' },
            { label: '배경색', value: mint[45], token: 'mint[45]' },
            { label: '배경색 (위험)', value: red[70], token: 'red[70]' },
            { label: '텍스트 색상', value: '#FFFFFF', token: 'coolNeutral[100]' },
            { label: '폰트 크기', value: `${fontSize.medium}px`, token: 'fontSize.medium' },
            { label: '폰트 굵기', value: fontWeight.semibold, token: 'fontWeight.semibold' },
          ]}
        />

        <SpecTable
          title="Secondary 버튼"
          rows={[
            { label: '높이', value: '48px', token: '—' },
            { label: '모서리 반경', value: `${spacing.medium}px`, token: 'spacing.medium' },
            { label: '배경색', value: coolNeutral[97], token: 'coolNeutral[97]' },
            { label: '텍스트 색상', value: coolNeutral[40], token: 'coolNeutral[40]' },
          ]}
        />

        <SpecTable
          title="버튼 영역"
          rows={[
            { label: '상단 마진', value: `${spacing['2xlarge']}px`, token: 'spacing.2xl' },
            { label: '간격', value: `${spacing.small}px`, token: 'spacing.small' },
            { label: '정렬', value: '수직 (primary 위, secondary 아래)', token: '—' },
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
        description="개발자를 위한 Modal 컴포넌트 사용 예시입니다."
      >
        <CodeBlock
          title="Import"
          code={`import { Modal } from '@design-system/components/Modal';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`const [visible, setVisible] = useState(false);

<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="알림"
  description="변경 사항을 저장하시겠습니까?"
  primaryAction={{ label: '저장', onPress: handleSave }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>`}
        />

        <CodeBlock
          title="위험 액션"
          code={`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="삭제 확인"
  description="이 작업은 되돌릴 수 없습니다."
  primaryAction={{ label: '삭제', onPress: handleDelete, destructive: true }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>`}
        />

        <CodeBlock
          title="커스텀 콘텐츠"
          code={`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="피드백"
  primaryAction={{ label: '보내기', onPress: handleSubmit }}
>
  <TextInput placeholder="의견을 입력하세요" />
</Modal>`}
        />

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>Props</StateLabel>
          <SpecTable
            rows={[
              { label: 'visible', value: 'boolean', token: '표시 여부 (필수)' },
              { label: 'onClose', value: '() => void', token: '배경 탭 시 닫기 콜백' },
              { label: 'title', value: 'string', token: '대화상자 타이틀' },
              { label: 'description', value: 'string', token: '본문 텍스트' },
              { label: 'children', value: 'ReactNode', token: '커스텀 콘텐츠 (description 대체)' },
              { label: 'primaryAction', value: '{ label, onPress, destructive? }', token: '주 버튼' },
              { label: 'secondaryAction', value: '{ label, onPress }', token: '보조 버튼' },
            ]}
          />
        </Col>
      </Section>
    </View>
  ),
};
