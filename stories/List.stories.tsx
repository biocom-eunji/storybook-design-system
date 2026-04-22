import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { List } from '../src/components/List';
import { Icon } from '../src/components/Icon';
import { Checkbox } from '../src/components/Checkbox';
import { Switch } from '../src/components/Switch';
import { Radio } from '../src/components/Radio';
import {
  Section, StateLabel, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle } from '../src/tokens/theme';

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Data Display/List',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
      <List>
        <List.Item title="프로필" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
        <List.Item title="알림 설정" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
        <List.Item title="개인정보 처리방침" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
        <List.Item title="로그아웃" onPress={() => {}} />
      </List>
    </View>
  ),
};

// ─── 2. Standard ─────────────────────────────────────────────

export const Standard: Story = {
  name: 'Standard (텍스트만)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Standard List" description="텍스트만 나열하는 가장 단순한 형태입니다.">
        <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
          <List>
            <List.Item title="식단 관리" />
            <List.Item title="수면 관리" />
            <List.Item title="운동 관리" />
          </List>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. Two Line ─────────────────────────────────────────────

export const TwoLine: Story = {
  name: 'Two Line (제목 + 설명)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Two Line" description="title + description 2줄 레이아웃입니다.">
        <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
          <List>
            <List.Item title="식단 기록" description="오늘 먹은 음식을 기록하세요" />
            <List.Item title="수면 리포트" description="지난 7일간의 수면 패턴을 확인합니다" />
            <List.Item title="운동 목표" description="주간 운동 목표를 설정하고 달성률을 확인합니다" />
          </List>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. With Leading Icon ────────────────────────────────────

export const WithLeadingIcon: Story = {
  name: 'Leading 아이콘',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Leading 아이콘" description="좌측에 아이콘이 포함된 리스트입니다.">
        <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
          <List inset="leading">
            <List.Item
              leading={<Icon name="bell" size={24} color={semanticColor.iconPrimary} />}
              title="알림"
              description="푸시 알림 설정을 관리합니다"
              trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />}
              onPress={() => {}}
            />
            <List.Item
              leading={<Icon name="caret-right" size={24} color={semanticColor.iconPrimary} />}
              title="설정"
              description="앱 환경설정을 변경합니다"
              trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />}
              onPress={() => {}}
            />
            <List.Item
              leading={<Icon name="share-network" size={24} color={semanticColor.iconPrimary} />}
              title="공유"
              trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />}
              onPress={() => {}}
            />
          </List>
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. With Switch ──────────────────────────────────────────

export const WithSwitch: Story = {
  name: 'Switch (설정 화면)',
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [biometric, setBiometric] = useState(false);

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="Switch (설정 화면)" description="trailing에 Switch를 배치한 설정 화면 패턴입니다.">
          <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
            <List>
              <List.Item
                title="푸시 알림"
                description="건강 리포트, 식단 알림"
                trailing={<Switch active={notifications} onPress={() => setNotifications(!notifications)} />}
              />
              <List.Item
                title="다크 모드"
                description="준비 중 (v2 예정)"
                trailing={<Switch active={darkMode} onPress={() => setDarkMode(!darkMode)} disabled />}
                disabled
              />
              <List.Item
                title="생체 인증"
                description="Face ID / 지문으로 빠른 로그인"
                trailing={<Switch active={biometric} onPress={() => setBiometric(!biometric)} />}
              />
            </List>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 6. With Checkbox ────────────────────────────────────────

export const WithCheckbox: Story = {
  name: 'Checkbox (선택 리스트)',
  render: () => {
    const [items, setItems] = useState([
      { key: 'diet', label: '식단', checked: true },
      { key: 'sleep', label: '수면', checked: false },
      { key: 'exercise', label: '운동', checked: false },
      { key: 'water', label: '수분', checked: true },
    ]);

    const toggle = (key: string) => {
      setItems(prev => prev.map(item =>
        item.key === key ? { ...item, checked: !item.checked } : item
      ));
    };

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="Checkbox (선택 리스트)" description="trailing에 Checkbox를 배치한 복수 선택 리스트입니다.">
          <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
            <List>
              {items.map(item => (
                <List.Item
                  key={item.key}
                  title={item.label}
                  trailing={
                    <Checkbox
                      state={item.checked ? 'checked' : 'unchecked'}
                      onPress={() => toggle(item.key)}
                      size="small"
                    />
                  }
                  onPress={() => toggle(item.key)}
                />
              ))}
            </List>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 7. Expandable ───────────────────────────────────────────

export const Expandable: Story = {
  name: 'Expandable (아코디언)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Expandable (아코디언)" description="클릭 시 하위 콘텐츠가 토글로 펼쳐집니다.">
        <View style={{ maxWidth: 375, borderWidth: 1, borderColor: semanticColor.borderDefault, borderRadius: spacing.small, overflow: 'hidden' }}>
          <List>
            <List.ExpandableItem title="자주 묻는 질문" defaultExpanded>
              <Text style={{ fontSize: textStyle.body2.fontSize, color: semanticColor.textSecondary, lineHeight: textStyle.body2.lineHeight }}>
                바이오컴은 AI 기반 헬스케어 셀프케어 앱으로, 식단·수면·운동·영양제 데이터를 통합 분석하여 개인 맞춤형 건강 관리를 제공합니다.
              </Text>
            </List.ExpandableItem>
            <List.ExpandableItem title="데이터는 어떻게 보호되나요?">
              <Text style={{ fontSize: textStyle.body2.fontSize, color: semanticColor.textSecondary, lineHeight: textStyle.body2.lineHeight }}>
                모든 건강 데이터는 암호화되어 저장되며, 사용자 동의 없이 제3자에게 제공되지 않습니다.
              </Text>
            </List.ExpandableItem>
            <List.ExpandableItem title="프리미엄 플랜은 무엇인가요?">
              <Text style={{ fontSize: textStyle.body2.fontSize, color: semanticColor.textSecondary, lineHeight: textStyle.body2.lineHeight }}>
                프리미엄 플랜은 AI 리포트, 상세 분석, 전문가 상담 등 추가 기능을 제공합니다. 월 9,900원에 이용 가능합니다.
              </Text>
            </List.ExpandableItem>
          </List>
        </View>
      </Section>
    </View>
  ),
};

// ─── 8. Settings Screen ──────────────────────────────────────

export const SettingsScreen: Story = {
  name: '설정 화면 (조합)',
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [biometric, setBiometric] = useState(false);

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="설정 화면 (조합)" description="Standard, Control, Expandable을 섞어서 구성한 실전 예시입니다.">
          <View style={{
            maxWidth: 375,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: spacing.small,
            overflow: 'hidden',
            backgroundColor: semanticColor.backgroundSecondary,
          }}>
            {/* 계정 섹션 */}
            <Text style={{ fontSize: textStyle.label2.fontSize, fontWeight: '600', color: semanticColor.textSecondary, paddingHorizontal: spacing.large, paddingTop: spacing.large, paddingBottom: spacing.small }}>
              계정
            </Text>
            <View style={{ backgroundColor: semanticColor.backgroundStatus }}>
              <List>
                <List.Item title="프로필" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
                <List.Item
                  title="알림"
                  trailing={<Switch active={notifications} onPress={() => setNotifications(!notifications)} />}
                />
                <List.Item
                  title="생체 인증"
                  trailing={<Switch active={biometric} onPress={() => setBiometric(!biometric)} />}
                />
              </List>
            </View>

            {/* 정보 섹션 */}
            <Text style={{ fontSize: textStyle.label2.fontSize, fontWeight: '600', color: semanticColor.textSecondary, paddingHorizontal: spacing.large, paddingTop: spacing.xlarge, paddingBottom: spacing.small }}>
              정보
            </Text>
            <View style={{ backgroundColor: semanticColor.backgroundStatus }}>
              <List>
                <List.Item title="이용약관" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
                <List.Item title="개인정보 처리방침" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
                <List.ExpandableItem title="앱 버전">
                  <Text style={{ fontSize: textStyle.body2.fontSize, color: semanticColor.textSecondary }}>v1.4.0 (Build 727cfb9)</Text>
                </List.ExpandableItem>
              </List>
            </View>

            <View style={{ height: spacing.large }} />
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 9. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="디자인 스펙" description="List 컴포넌트 스펙입니다." badge="디자인">
        <TokenSpecTable
          title="레이아웃"
          rows={[
            { property: '최소 높이 (1줄)',  token: '—',              value: 48, type: 'size' },
            { property: '최소 높이 (2줄)',  token: '—',              value: 64, type: 'size' },
            { property: '좌우 패딩',       token: 'spacing/large',   value: spacing.large, type: 'size' },
            { property: 'Leading-Title gap', token: 'spacing/large', value: spacing.large, type: 'size' },
            { property: '구분선',          token: 'color/border/default', value: semanticColor.borderDefault, type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="타이포그래피"
          rows={[
            { property: 'Title',       token: 'Body 1', value: `${textStyle.body1.fontSize}px / ${textStyle.body1.lineHeight}px / Regular`, type: 'typography' },
            { property: 'Description', token: 'Label 1', value: `${textStyle.label1.fontSize}px / ${textStyle.label1.lineHeight}px / Regular`, type: 'typography' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="색상"
          rows={[
            { property: 'Title 텍스트',       token: 'color/text/primary',      value: semanticColor.textPrimary,       type: 'color' },
            { property: 'Description 텍스트', token: 'color/text/secondary',    value: semanticColor.textSecondary,     type: 'color' },
            { property: 'Disabled 텍스트',    token: 'color/text/tertiary',     value: semanticColor.textTertiary,      type: 'color' },
            { property: 'Pressed 배경',       token: 'color/background/secondary', value: semanticColor.backgroundSecondary, type: 'color' },
            { property: 'Selected 배경',      token: 'color/background/secondary', value: semanticColor.backgroundSecondary, type: 'color' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 10. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" description="개발자를 위한 List 사용 예시입니다." badge="개발">
        <CodeBlock
          title="Import"
          code={`import { List } from '@design-system/components/List';`}
        />

        <CodeBlock
          title="Standard List"
          code={`<List>
  <List.Item title="프로필" onPress={goProfile} />
  <List.Item title="설정" onPress={goSettings} />
</List>`}
        />

        <CodeBlock
          title="Control List (Switch)"
          code={`<List>
  <List.Item
    title="푸시 알림"
    description="건강 리포트, 식단 알림"
    trailing={
      <Switch active={notifications} onPress={toggleNotifications} />
    }
  />
</List>`}
        />

        <CodeBlock
          title="Expandable List"
          code={`<List>
  <List.ExpandableItem title="자주 묻는 질문" defaultExpanded>
    <Text>답변 내용...</Text>
  </List.ExpandableItem>
</List>`}
        />

        <CodeBlock
          title="혼합 사용"
          code={`<List>
  <List.Item title="프로필" trailing={<Icon name="caret-right" />} onPress={go} />
  <List.Item title="알림" trailing={<Switch active={on} onPress={toggle} />} />
  <List.ExpandableItem title="앱 버전">
    <Text>v1.4.0</Text>
  </List.ExpandableItem>
</List>`}
        />
      </Section>
    </View>
  ),
};
