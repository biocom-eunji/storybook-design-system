import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomSheet } from '../src/components/BottomSheet';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof BottomSheet> = {
  title: 'Feedback/BottomSheet',
  component: BottomSheet,
  argTypes: {
    visible: { control: 'boolean', description: '표시 여부' },
    title: { control: 'text', description: '헤더 타이틀' },
    showHandle: { control: 'boolean', description: '드래그 핸들바 표시' },
    showCloseButton: { control: 'boolean', description: '닫기 버튼 표시' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

const PreviewContainer = ({ children }: { children: React.ReactNode }) => (
  <View style={{ height: 400, backgroundColor: coolNeutral[99], position: 'relative', overflow: 'hidden', borderRadius: radius.medium }}>
    {children}
  </View>
);

const ListItem = ({ label }: { label: string }) => (
  <Pressable style={{ paddingVertical: spacing.medium, borderBottomWidth: 1, borderBottomColor: coolNeutral[96] }}>
    <Text style={{ fontSize: fontSize.medium, color: coolNeutral[17] }}>{label}</Text>
  </Pressable>
);

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    visible: true,
    title: '바텀시트 제목',
    showHandle: true,
    showCloseButton: false,
  },
  render: (args) => {
    const [visible, setVisible] = useState(args.visible);
    return (
      <View style={{ gap: spacing.large }}>
        <Pressable
          onPress={() => setVisible(true)}
          style={{ backgroundColor: mint[45], paddingHorizontal: spacing.xlarge, paddingVertical: spacing.medium, borderRadius: radius.medium, alignSelf: 'flex-start' }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: fontSize.medium, fontWeight: fontWeight.semibold }}>바텀시트 열기</Text>
        </Pressable>
        <PreviewContainer>
          <BottomSheet
            {...args}
            visible={visible}
            onClose={() => setVisible(false)}
          >
            <ListItem label="옵션 1" />
            <ListItem label="옵션 2" />
            <ListItem label="옵션 3" />
          </BottomSheet>
        </PreviewContainer>
      </View>
    );
  },
};

// ─── 2. 기본 사용 ───────────────────────────────────────────

export const Default: Story = {
  name: '기본 사용',
  render: () => (
    <Section
      title="기본 사용"
      description="타이틀과 리스트 콘텐츠가 포함된 기본 바텀시트입니다."
    >
      <PreviewContainer>
        <BottomSheet visible title="메뉴 선택" onClose={() => {}}>
          <ListItem label="프로필 편집" />
          <ListItem label="알림 설정" />
          <ListItem label="로그아웃" />
          <ListItem label="고객센터" />
        </BottomSheet>
      </PreviewContainer>
    </Section>
  ),
};

// ─── 3. 핸들바/닫기버튼 옵션 ──────────────────────────────────

export const HandleAndCloseOptions: Story = {
  name: '핸들바/닫기버튼 옵션',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="핸들바/닫기버튼 옵션"
        description="핸들바와 닫기 버튼 조합에 따른 헤더 스타일 변화를 확인합니다."
      >
        <CompareGrid
          items={[
            {
              label: '핸들바만 (기본)',
              content: (
                <PreviewContainer>
                  <BottomSheet visible title="핸들바만" showHandle showCloseButton={false}>
                    <ListItem label="항목 A" />
                    <ListItem label="항목 B" />
                  </BottomSheet>
                </PreviewContainer>
              ),
            },
            {
              label: '닫기 버튼만',
              content: (
                <PreviewContainer>
                  <BottomSheet visible title="닫기 버튼" showHandle={false} showCloseButton>
                    <ListItem label="항목 A" />
                    <ListItem label="항목 B" />
                  </BottomSheet>
                </PreviewContainer>
              ),
            },
            {
              label: '핸들바 + 닫기 버튼',
              content: (
                <PreviewContainer>
                  <BottomSheet visible title="모두 표시" showHandle showCloseButton>
                    <ListItem label="항목 A" />
                    <ListItem label="항목 B" />
                  </BottomSheet>
                </PreviewContainer>
              ),
            },
            {
              label: '둘 다 없음',
              content: (
                <PreviewContainer>
                  <BottomSheet visible title="헤더 없음" showHandle={false} showCloseButton={false}>
                    <ListItem label="항목 A" />
                    <ListItem label="항목 B" />
                  </BottomSheet>
                </PreviewContainer>
              ),
            },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 4. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="BottomSheet 컴포넌트의 디자인 토큰 상세 스펙입니다."
      >
        <SpecTable
          title="오버레이"
          rows={[
            { label: '배경색', value: 'rgba(0,0,0,0.4)', token: '—' },
            { label: '위치', value: 'absolute (full screen)', token: '—' },
          ]}
        />

        <SpecTable
          title="시트"
          rows={[
            { label: '배경색', value: '#FFFFFF', token: 'palette.white' },
            { label: '상단 좌측 반경', value: '20px', token: '—' },
            { label: '상단 우측 반경', value: '20px', token: '—' },
          ]}
        />

        <SpecTable
          title="핸들바"
          rows={[
            { label: '너비', value: '40px', token: '—' },
            { label: '높이', value: '4px', token: '—' },
            { label: '모서리 반경', value: '2px', token: '—' },
            { label: '배경색', value: coolNeutral[90], token: 'coolNeutral[90]' },
            { label: '상단 마진', value: `${spacing.medium}px`, token: 'spacing.medium' },
          ]}
        />

        <SpecTable
          title="타이틀"
          rows={[
            { label: '폰트 크기', value: `${fontSize.large}px`, token: 'fontSize.large' },
            { label: '폰트 굵기', value: fontWeight.bold, token: 'fontWeight.bold' },
            { label: '색상', value: coolNeutral[17], token: 'coolNeutral[17]' },
            { label: '좌우 패딩', value: `${spacing.xlarge}px`, token: 'spacing.xlarge' },
            { label: '상하 패딩', value: `${spacing.large}px`, token: 'spacing.large' },
          ]}
        />

        <SpecTable
          title="닫기 버튼"
          rows={[
            { label: '위치', value: 'right: 16, top: 16', token: 'spacing.large' },
            { label: '색상', value: coolNeutral[50], token: 'coolNeutral[50]' },
          ]}
        />

        <SpecTable
          title="콘텐츠 영역"
          rows={[
            { label: '좌우 패딩', value: `${spacing.xlarge}px`, token: 'spacing.xlarge' },
            { label: '하단 패딩', value: '34px', token: '— (safe area)' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 5. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 BottomSheet 컴포넌트 사용 예시입니다."
      >
        <CodeBlock
          title="Import"
          code={`import { BottomSheet } from '@design-system/components/BottomSheet';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`const [visible, setVisible] = useState(false);

<BottomSheet
  visible={visible}
  onClose={() => setVisible(false)}
  title="메뉴 선택"
>
  <MenuItem label="프로필 편집" />
  <MenuItem label="알림 설정" />
</BottomSheet>`}
        />

        <CodeBlock
          title="닫기 버튼 사용"
          code={`<BottomSheet
  visible={visible}
  onClose={() => setVisible(false)}
  title="설정"
  showHandle={false}
  showCloseButton
>
  {/* 콘텐츠 */}
</BottomSheet>`}
        />

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>Props</StateLabel>
          <SpecTable
            rows={[
              { label: 'visible', value: 'boolean', token: '표시 여부 (필수)' },
              { label: 'onClose', value: '() => void', token: '닫기 콜백' },
              { label: 'title', value: 'string', token: '헤더 타이틀' },
              { label: 'children', value: 'ReactNode', token: '콘텐츠 (필수)' },
              { label: 'showHandle', value: 'boolean', token: '핸들바 표시 (기본: true)' },
              { label: 'showCloseButton', value: 'boolean', token: '닫기 버튼 표시 (기본: false)' },
            ]}
          />
        </Col>
      </Section>
    </View>
  ),
};
