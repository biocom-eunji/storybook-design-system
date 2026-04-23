import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppBar } from '../src/components/AppBar';
import {
  Section, StateLabel, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle } from '../src/tokens/theme';

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof AppBar> = {
  title: 'Navigation/AppBar',
  component: AppBar,
  argTypes: {
    title: { control: 'text', description: '화면 제목' },
    titleAlign: { control: 'select', options: ['left', 'center'], description: '타이틀 정렬' },
    showDivider: { control: 'boolean', description: '하단 구분선' },
    variant: { control: 'select', options: ['default', 'transparent'], description: '배경 변형' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppBar>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
      <AppBar
        title="홈"
        titleAlign="left"
        leading={<AppBar.BackButton />}
        trailing={<AppBar.IconAction name="bell" label="알림" />}
        showDivider
      />
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 배경 `color/background/status`, 텍스트 `color/text/primary`, 구분선 `color/border/default`, 타이포 `Headline` (17px SemiBold)',
      },
    },
  },
};

// ─── 2. Default (타이틀만) ───────────────────────────────────

export const Default: Story = {
  name: 'Default (타이틀만)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Default" description="타이틀만 있는 가장 단순한 형태입니다.">
        <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
          <AppBar title="설정" />
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. With BackButton ──────────────────────────────────────

export const WithBackButton: Story = {
  name: 'BackButton + 중앙 정렬',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="BackButton + 중앙 정렬" description="leading에 BackButton, titleAlign='center'">
        <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
          <AppBar
            title="프로필 수정"
            titleAlign="center"
            leading={<AppBar.BackButton />}
            showDivider
          />
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. Trailing 액션 1~3개 ──────────────────────────────────

export const WithActions: Story = {
  name: 'Trailing 액션',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Trailing 액션" description="우측 액션 버튼 1~3개 케이스입니다.">
        <View style={{ gap: spacing.xlarge, maxWidth: 375 }}>
          <Col gap={spacing.small}>
            <StateLabel>1개</StateLabel>
            <View style={{ borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
              <AppBar
                title="홈"
                leading={<AppBar.BackButton />}
                trailing={<AppBar.IconAction name="bell" label="알림" />}
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>2개</StateLabel>
            <View style={{ borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
              <AppBar
                title="홈"
                leading={<AppBar.BackButton />}
                trailing={[
                  <AppBar.IconAction key="search" name="magnifying-glass" label="검색" />,
                  <AppBar.IconAction key="bell" name="bell" label="알림" />,
                ]}
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>3개 (최대)</StateLabel>
            <View style={{ borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
              <AppBar
                title="홈"
                leading={<AppBar.BackButton />}
                trailing={[
                  <AppBar.IconAction key="search" name="magnifying-glass" label="검색" />,
                  <AppBar.IconAction key="share" name="share-network" label="공유" />,
                  <AppBar.IconAction key="bell" name="bell" label="알림" />,
                ]}
              />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. Full Example ─────────────────────────────────────────

export const FullExample: Story = {
  name: '전체 예시',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Full Example" description="leading + title + trailing 3개 + showDivider 전부 포함된 케이스입니다.">
        <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
          <AppBar
            title="건강 리포트"
            titleAlign="center"
            leading={<AppBar.BackButton />}
            trailing={[
              <AppBar.IconAction key="search" name="magnifying-glass" label="검색" />,
              <AppBar.IconAction key="share" name="share-network" label="공유" />,
              <AppBar.IconAction key="bell" name="bell" label="알림" />,
            ]}
            showDivider
          />
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. Long Title ───────────────────────────────────────────

export const LongTitle: Story = {
  name: 'Long Title (말줄임)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Long Title" description="긴 타이틀이 trailing 액션과 겹치지 않고 말줄임 처리되는지 확인합니다.">
        <View style={{ gap: spacing.xlarge, maxWidth: 375 }}>
          <Col gap={spacing.small}>
            <StateLabel>left 정렬 + trailing 3개</StateLabel>
            <View style={{ borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
              <AppBar
                title="아주 긴 타이틀이 들어가는 화면의 제목입니다"
                titleAlign="left"
                leading={<AppBar.BackButton />}
                trailing={[
                  <AppBar.IconAction key="1" name="magnifying-glass" label="검색" />,
                  <AppBar.IconAction key="2" name="share-network" label="공유" />,
                  <AppBar.IconAction key="3" name="bell" label="알림" />,
                ]}
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>center 정렬 + trailing 3개</StateLabel>
            <View style={{ borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
              <AppBar
                title="아주 긴 타이틀이 들어가는 화면의 제목입니다"
                titleAlign="center"
                leading={<AppBar.BackButton />}
                trailing={[
                  <AppBar.IconAction key="1" name="magnifying-glass" label="검색" />,
                  <AppBar.IconAction key="2" name="share-network" label="공유" />,
                  <AppBar.IconAction key="3" name="bell" label="알림" />,
                ]}
              />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 7. Transparent ──────────────────────────────────────────

export const Transparent: Story = {
  name: '투명 배경',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Transparent" description="배경 이미지 위에 투명 AppBar를 올린 케이스입니다.">
        <View style={{
          maxWidth: 375,
          borderRadius: spacing.small,
          overflow: 'hidden',
          backgroundColor: semanticColor.backgroundInverse,
          height: 200,
        }}>
          <AppBar
            title="사진 상세"
            titleAlign="center"
            variant="transparent"
            leading={<AppBar.BackButton />}
            trailing={<AppBar.IconAction name="share-network" label="공유" />}
          />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: semanticColor.textOnColor, fontSize: textStyle.caption.fontSize }}>배경 이미지 영역</Text>
          </View>
        </View>
      </Section>
    </View>
  ),
};

// ─── 8. Title Alignment 비교 ─────────────────────────────────

export const TitleAlignment: Story = {
  name: 'Title 정렬 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Title 정렬 비교" description="left vs center 정렬을 비교합니다.">
        <View style={{ gap: spacing.xlarge, maxWidth: 375 }}>
          <Col gap={spacing.small}>
            <StateLabel>left (기본)</StateLabel>
            <View style={{ borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
              <AppBar title="설정" titleAlign="left" leading={<AppBar.BackButton />} showDivider />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>center</StateLabel>
            <View style={{ borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
              <AppBar title="설정" titleAlign="center" leading={<AppBar.BackButton />} showDivider />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 9. CloseButton ──────────────────────────────────────────

export const WithCloseButton: Story = {
  name: '닫기 버튼',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="CloseButton" description="모달/풀스크린 닫기용 CloseButton 프리셋입니다.">
        <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
          <AppBar
            title="약관 동의"
            titleAlign="center"
            leading={<AppBar.CloseButton />}
            showDivider
          />
        </View>
      </Section>
    </View>
  ),
};

// ─── 10. On Screen 시뮬레이션 ────────────────────────────────

export const OnScreen: Story = {
  name: 'On Screen',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="On Screen" description="모바일 화면(375px) 상단에 놓인 모습을 시뮬레이션합니다.">
        <View style={{
          width: 375,
          height: 600,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          borderRadius: spacing.medium,
          overflow: 'hidden',
          backgroundColor: semanticColor.backgroundSecondary,
        }}>
          <AppBar
            title="건강 대시보드"
            leading={<AppBar.BackButton />}
            trailing={[
              <AppBar.IconAction key="search" name="magnifying-glass" label="검색" />,
              <AppBar.IconAction key="bell" name="bell" label="알림" />,
            ]}
            showDivider
          />
          <ScrollView style={{ flex: 1, padding: spacing.large }}>
            {Array.from({ length: 8 }, (_, i) => (
              <View key={i} style={{
                height: 80,
                backgroundColor: semanticColor.backgroundPrimary,
                borderRadius: spacing.small,
                marginBottom: spacing.medium,
                padding: spacing.large,
                justifyContent: 'center',
              }}>
                <Text style={{ color: semanticColor.textSecondary, fontSize: textStyle.body2.fontSize }}>
                  콘텐츠 카드 {i + 1}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </Section>
    </View>
  ),
};

// ─── 11. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="AppBar 토큰 스펙입니다. Figma 디자인 없이 자체 정의한 값입니다."
        badge="디자인"
      >
        <TokenSpecTable
          title="색상 토큰"
          rows={[
            { property: '배경 (default)',   token: 'color/background/status', value: semanticColor.backgroundPrimary, type: 'color' },
            { property: '배경 (transparent)', token: '—',                     value: 'transparent' },
            { property: '타이틀 텍스트',     token: 'color/text/primary',      value: semanticColor.textPrimary,      type: 'color' },
            { property: '아이콘',           token: 'color/icon/primary',       value: semanticColor.iconPrimary,      type: 'color' },
            { property: '구분선',           token: 'color/border/default',     value: semanticColor.borderDefault,    type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="레이아웃 스펙"
          rows={[
            { property: '높이',          token: '—', value: 56,  type: 'size' },
            { property: '좌우 패딩',      token: 'spacing/xsmall', value: spacing.xsmall, type: 'size' },
            { property: '아이콘 버튼 크기', token: '—', value: '44×44', type: 'size' },
            { property: '아이콘 크기',     token: '—', value: 24,  type: 'size' },
            { property: 'Trailing gap',   token: 'spacing/xsmall', value: spacing.xsmall, type: 'size' },
            { property: 'Trailing 최대',  token: '—', value: '3개' },
            { property: '구분선 높이',     token: '—', value: 1,   type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="타이포그래피"
          rows={[
            { property: 'Medium 타이틀', token: 'Headline', value: `${textStyle.headline.fontSize}px / ${textStyle.headline.lineHeight}px / ${textStyle.headline.fontWeight}`, type: 'typography' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 12. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" description="개발자를 위한 AppBar 사용 예시입니다." badge="개발">
        <CodeBlock
          title="Import"
          code={`import { AppBar } from '@design-system/components/AppBar';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<AppBar title="설정" />`}
        />

        <CodeBlock
          title="BackButton + 중앙 정렬"
          code={`<AppBar
  title="프로필 수정"
  titleAlign="center"
  leading={<AppBar.BackButton onPress={navigation.goBack} />}
  showDivider
/>`}
        />

        <CodeBlock
          title="Trailing 액션"
          code={`<AppBar
  title="홈"
  leading={<AppBar.BackButton onPress={goBack} />}
  trailing={[
    <AppBar.IconAction name="magnifying-glass" label="검색" onPress={openSearch} />,
    <AppBar.IconAction name="bell" label="알림" onPress={openNotifications} />,
  ]}
/>`}
        />

        <CodeBlock
          title="Transparent (배경 이미지 위)"
          code={`<ImageBackground source={heroImage}>
  <AppBar
    title="사진 상세"
    variant="transparent"
    leading={<AppBar.BackButton />}
  />
</ImageBackground>`}
        />

        <CodeBlock
          title="CloseButton (모달용)"
          code={`<AppBar
  title="약관 동의"
  titleAlign="center"
  leading={<AppBar.CloseButton onPress={closeModal} />}
/>`}
        />
      </Section>
    </View>
  ),
};
