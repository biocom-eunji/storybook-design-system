import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomSheet } from '../src/components/BottomSheet';
import { Section, StateLabel, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof BottomSheet> = {
  title: 'Feedback/BottomSheet',
  component: BottomSheet,
  argTypes: {
    visible: { control: 'boolean', description: '표시 여부' },
    title: { control: 'text', description: '헤더 타이틀' },
    showHandle: { control: 'boolean', description: '드래그 핸들바 표시' },
    showCloseButton: { control: 'boolean', description: '닫기 버튼 표시' },
    safeAreaBottom: { control: { type: 'range', min: 0, max: 48, step: 4 }, description: 'Safe Area 하단 여백 (px)' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

// ─── 공통 헬퍼 ────────────────────────────────────────────

const OpenButton = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <Pressable
    onPress={onPress}
    style={{ backgroundColor: mint[45], paddingHorizontal: spacing.xlarge, paddingVertical: spacing.medium, borderRadius: radius.medium, alignSelf: 'flex-start' }}
  >
    <Text style={{ color: '#FFFFFF', fontSize: fontSize.medium, fontWeight: fontWeight.semibold }}>{label}</Text>
  </Pressable>
);

const ListItem = ({ label }: { label: string }) => (
  <Pressable style={{ paddingVertical: spacing.medium, borderBottomWidth: 1, borderBottomColor: coolNeutral[96] }}>
    <Text style={{ fontSize: fontSize.medium, color: coolNeutral[17] }}>{label}</Text>
  </Pressable>
);

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    visible: false,
    title: '바텀시트 제목',
    showHandle: true,
    showCloseButton: false,
    safeAreaBottom: 0,
  },
  render: (args) => {
    const [visible, setVisible] = useState(false);
    return (
      <View style={{ gap: spacing.large }}>
        <OpenButton label="바텀시트 열기" onPress={() => setVisible(true)} />
        <BottomSheet
          {...args}
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <ListItem label="옵션 1" />
          <ListItem label="옵션 2" />
          <ListItem label="옵션 3" />
        </BottomSheet>
      </View>
    );
  },
};

// ─── 2. 기본 사용 ───────────────────────────────────────────

export const Default: Story = {
  name: '기본 사용',
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <Section
        title="기본 사용"
        description="타이틀과 리스트 콘텐츠가 포함된 기본 바텀시트입니다. 버튼을 눌러 확인하세요."
      >
        <OpenButton label="기본 바텀시트 열기" onPress={() => setVisible(true)} />
        <BottomSheet visible={visible} title="메뉴 선택" onClose={() => setVisible(false)}>
          <ListItem label="프로필 편집" />
          <ListItem label="알림 설정" />
          <ListItem label="로그아웃" />
          <ListItem label="고객센터" />
        </BottomSheet>
      </Section>
    );
  },
};

// ─── 3. 핸들바/닫기버튼 옵션 ──────────────────────────────────

const OptionDemo = ({
  label,
  showHandle,
  showCloseButton,
}: {
  label: string;
  showHandle: boolean;
  showCloseButton: boolean;
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ gap: spacing.small }}>
      <OpenButton label={label} onPress={() => setVisible(true)} />
      <BottomSheet
        visible={visible}
        title={label}
        showHandle={showHandle}
        showCloseButton={showCloseButton}
        onClose={() => setVisible(false)}
      >
        <ListItem label="항목 A" />
        <ListItem label="항목 B" />
      </BottomSheet>
    </View>
  );
};

export const HandleAndCloseOptions: Story = {
  name: '핸들바/닫기버튼 옵션',
  render: () => (
    <Section
      title="핸들바/닫기버튼 옵션"
      description="핸들바와 닫기 버튼 조합에 따른 헤더 스타일 변화를 확인합니다. 각 버튼을 눌러 비교하세요."
    >
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.medium }}>
        <OptionDemo label="핸들바만 (기본)" showHandle showCloseButton={false} />
        <OptionDemo label="닫기 버튼만" showHandle={false} showCloseButton />
        <OptionDemo label="핸들바 + 닫기" showHandle showCloseButton />
        <OptionDemo label="둘 다 없음" showHandle={false} showCloseButton={false} />
      </View>
    </Section>
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
            { label: '구현', value: '<Modal transparent>', token: 'React Native Modal' },
            { label: '배경색', value: '#000000', token: '—' },
            { label: '배경 투명도', value: '0.4', token: 'BACKDROP_OPACITY' },
            { label: '애니메이션', value: '300ms slide up', token: 'ANIMATION_DURATION' },
          ]}
        />

        <SpecTable
          title="시트"
          rows={[
            { label: '배경색', value: '#FFFFFF', token: 'semanticColor.backgroundStatus' },
            { label: '상단 반경', value: '20px', token: 'radius.xlarge' },
            { label: '하단 여백', value: 'safeAreaBottom prop', token: 'useSafeAreaInsets().bottom' },
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
            { label: '하단 패딩', value: `${spacing.xlarge}px`, token: 'spacing.xlarge' },
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
          title="Safe Area 적용 (react-native-safe-area-context)"
          code={`import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MyScreen() {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);

  return (
    <BottomSheet
      visible={visible}
      onClose={() => setVisible(false)}
      title="설정"
      safeAreaBottom={insets.bottom}
    >
      {/* 콘텐츠 */}
    </BottomSheet>
  );
}`}
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
              { label: 'safeAreaBottom', value: 'number', token: 'Safe Area 하단 여백 (기본: 0)' },
            ]}
          />
        </Col>
      </Section>
    </View>
  ),
};
