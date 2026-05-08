import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../src/components/Avatar';
import { Section, StateLabel, Row, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import {
  spacing, semanticColor, radius, textStyle, fontWeight as fw,
} from '../src/tokens/theme';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', 'xlarge'], description: '크기' },
    name: { control: 'text', description: '이니셜용 이름' },
    online: { control: 'boolean', description: '온라인 상태 표시' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {
  render: () => (
    <Row gap={spacing.large} align="center">
      <Avatar name="은지" size="small" />
      <Avatar name="은지" size="medium" />
      <Avatar name="은지" size="large" />
      <Avatar name="은지" size="xlarge" />
    </Row>
  ),
};

export const Sizes: Story = {
  name: '크기별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="크기별" description="small(32) / medium(40) / large(56) / xlarge(80)">
        <Row gap={spacing.large} align="flex-end">
          {(['small', 'medium', 'large', 'xlarge'] as const).map(size => (
            <Col key={size} gap={spacing.small}>
              <StateLabel>{size}</StateLabel>
              <Avatar name="바이오" size={size} />
            </Col>
          ))}
        </Row>
      </Section>
    </View>
  ),
};

export const OnlineStatus: Story = {
  name: '온라인 상태',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="온라인 상태" description="online prop으로 초록색 상태 점을 표시합니다.">
        <Row gap={spacing.large} align="center">
          <Col gap={spacing.small}><StateLabel>오프라인</StateLabel><Avatar name="은지" size="large" /></Col>
          <Col gap={spacing.small}><StateLabel>온라인</StateLabel><Avatar name="은지" size="large" online /></Col>
        </Row>
      </Section>
    </View>
  ),
};

// ─── 실전 예시 ──────────────────────────────────────────────

const TEAM_MEMBERS = [
  { name: '김은지', role: '프로덕트 디자이너', online: true },
  { name: '박지훈', role: '프론트엔드 개발자', online: true },
  { name: '이서연', role: '데이터 분석가', online: false },
];

export const InContext: Story = {
  name: '실전 예시',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="실전 예시"
        description="실제 화면에서 Avatar가 배치되는 맥락을 확인합니다."
      >
        <View style={{ maxWidth: 375 }}>
          <Col gap={spacing.small}>
            <StateLabel>팀원 목록</StateLabel>
            <View style={{
              borderWidth: 1,
              borderColor: semanticColor.borderDefault,
              borderRadius: radius.large,
              overflow: 'hidden',
              backgroundColor: semanticColor.backgroundPrimary,
            }}>
              <View style={{
                paddingHorizontal: spacing.xlarge,
                paddingVertical: spacing.medium,
                borderBottomWidth: 1,
                borderBottomColor: semanticColor.borderDefault,
              }}>
                <Text style={{
                  fontSize: textStyle.headline.fontSize,
                  fontWeight: fw.semibold,
                  color: semanticColor.textPrimary,
                }}>
                  헬스케어 팀
                </Text>
              </View>
              {TEAM_MEMBERS.map((member, i) => (
                <View key={member.name}>
                  <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: spacing.xlarge,
                    paddingVertical: spacing.medium,
                    gap: spacing.medium,
                  }}>
                    <Avatar name={member.name} size="large" online={member.online} />
                    <View style={{ flex: 1, gap: spacing.xsmall }}>
                      <Text style={{
                        fontSize: textStyle.body2.fontSize,
                        fontWeight: fw.medium,
                        color: semanticColor.textPrimary,
                      }}>
                        {member.name}
                      </Text>
                      <Text style={{
                        fontSize: textStyle.caption.fontSize,
                        color: semanticColor.textSecondary,
                      }}>
                        {member.role}
                      </Text>
                    </View>
                  </View>
                  {i < TEAM_MEMBERS.length - 1 && (
                    <View style={{
                      height: 1,
                      backgroundColor: semanticColor.borderDefault,
                      marginLeft: spacing.xlarge + 56 + spacing.medium,
                    }} />
                  )}
                </View>
              ))}
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 디자인 스펙 ────────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="Figma 시맨틱 토큰 기준 Avatar 구성 요소별 스펙입니다."
        badge="디자인"
      >
        <TokenSpecTable
          title="원형 컨테이너"
          rows={[
            { property: '배경색', token: 'color/background/tertiary', value: semanticColor.backgroundTertiary, type: 'color' },
            { property: '모양', token: '—', value: '원형 (borderRadius = size / 2)' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="이니셜 텍스트"
          rows={[
            { property: '색상', token: 'color/text/secondary', value: semanticColor.textSecondary, type: 'color' },
            { property: 'fontWeight', token: 'fontWeight/medium', value: fw.medium },
            { property: 'small fontSize', token: '—', value: 13, type: 'size' },
            { property: 'medium fontSize', token: '—', value: 15, type: 'size' },
            { property: 'large fontSize', token: '—', value: 20, type: 'size' },
            { property: 'xlarge fontSize', token: '—', value: 28, type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="온라인 상태 점"
          rows={[
            { property: '배경색', token: 'color/background/brand', value: semanticColor.backgroundBrand, type: 'color' },
            { property: '테두리색', token: 'color/background/primary', value: semanticColor.backgroundPrimary, type: 'color' },
            { property: '테두리 두께', token: '—', value: 2, type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="크기별 컨테이너"
          rows={[
            { property: 'small', token: '—', value: 32, type: 'size' },
            { property: 'medium', token: '—', value: 40, type: 'size' },
            { property: 'large', token: '—', value: 56, type: 'size' },
            { property: 'xlarge', token: '—', value: 80, type: 'size' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 사용 가이드 ────────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={`import { Avatar } from '@design-system/components/Avatar';`} />
        <CodeBlock title="기본 사용" code={`<Avatar name="은지" size="medium" />\n<Avatar name="은지" size="large" online />`} />
      </Section>
    </View>
  ),
};
