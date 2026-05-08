import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../src/components/Switch';
import {
  Section, StateLabel, Row, Col, CodeBlock, CompareGrid, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, radius, shadow, textStyle, fontWeight as fw } from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────

const TRACK_TOKEN_MAP = {
  off: {
    default: {
      trackBg:  'color/background/off',
      thumbBg:  'color/text/onColor',
    },
    disabled: {
      trackBg:  'color/background/disabled',
      thumbBg:  'color/text/onColor',
    },
  },
  on: {
    default: {
      trackBg:  'color/background/brand',
      thumbBg:  'color/text/onColor',
    },
    disabled: {
      trackBg:  'color/background/disabled',
      thumbBg:  'color/text/onColor',
    },
  },
} as const;

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof Switch> = {
  title: 'Input/Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: 'boolean',
      description: '켜짐/꺼짐 상태 (Figma: Checked)',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [checked, setActive] = useState(false);
    return <Switch checked={checked} onPress={() => setActive(!checked)} />;
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: Track `color/background/brand`, Thumb `color/text/onColor`, 라디우스 `borderRadius/full`. 클릭하여 on/off를 토글합니다.',
      },
    },
  },
};

// ─── 2. 상태별 ───────────────────────────────────────────────

export const AllStates: Story = {
  name: '상태별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="상태별"
        description="Off / On / Disabled Off / Disabled On 네 가지 상태를 확인합니다."
      >
        <CompareGrid
          items={[
            { label: 'Off', content: <Switch checked={false} /> },
            { label: 'On', content: <Switch checked={true} /> },
            { label: 'Off (Disabled)', content: <Switch checked={false} disabled /> },
            { label: 'On (Disabled)', content: <Switch checked={true} disabled /> },
          ]}
        />
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**Off**: Track `color/background/off` + Thumb `color/text/onColor`',
          '**On**: Track `color/background/brand` + Thumb `color/text/onColor`',
          '**Disabled**: Track `color/background/disabled` + 그림자 제거',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 3. 인터랙티브 데모 ──────────────────────────────────────

export const Interchecked: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [biometric, setBiometric] = useState(false);

    const SwitchRow = ({ label, sublabel, checked, onPress, disabled }: {
      label: string; sublabel?: string; checked: boolean; onPress: () => void; disabled?: boolean;
    }) => (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: spacing.medium,
        borderBottomWidth: 1,
        borderBottomColor: semanticColor.borderDefault,
      }}>
        <View style={{ flex: 1, marginRight: spacing.large }}>
          <Text style={{
            fontSize: 15,
            fontWeight: '500',
            color: disabled ? semanticColor.textTertiary : semanticColor.textPrimary,
          }}>{label}</Text>
          {sublabel && (
            <Text style={{
              fontSize: 13,
              color: semanticColor.textSecondary,
              marginTop: spacing.xsmall,
            }}>{sublabel}</Text>
          )}
        </View>
        <Switch checked={checked} onPress={onPress} disabled={disabled} />
      </View>
    );

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="설정 화면 패턴입니다. 클릭하여 토글 애니메이션과 상태 변화를 확인하세요."
        >
          <View style={{ maxWidth: 400 }}>
            <SwitchRow
              label="푸시 알림"
              sublabel="건강 리포트, 식단 알림 등"
              checked={notifications}
              onPress={() => setNotifications(!notifications)}
            />
            <SwitchRow
              label="다크 모드"
              sublabel="준비 중 (v2 예정)"
              checked={darkMode}
              onPress={() => setDarkMode(!darkMode)}
              disabled
            />
            <SwitchRow
              label="생체 인증"
              sublabel="Face ID / 지문으로 빠른 로그인"
              checked={biometric}
              onPress={() => setBiometric(!biometric)}
            />
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 4. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => {
    const checkedStates = ['off', 'on'] as const;
    const disabledStates = ['default', 'disabled'] as const;

    const resolve: Record<string, string> = {
      'color/background/brand':    semanticColor.backgroundBrand,
      'color/background/off':      semanticColor.backgroundOff,
      'color/background/disabled': semanticColor.backgroundDisabled,
      'color/text/onColor':        semanticColor.textOnColor,
    };
    const r = (token: string) => resolve[token] ?? token;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 Switch 전체 조합 스펙입니다."
          badge="디자인"
        >
          {checkedStates.map(checked =>
            disabledStates.map(dis => {
              const t = TRACK_TOKEN_MAP[checked][dis];
              return (
                <View key={`${checked}-${dis}`}>
                  <TokenSpecTable
                    title={`${checked} / ${dis}`}
                    rows={[
                      { property: 'Track 배경',   token: t.trackBg, value: r(t.trackBg), type: 'color' },
                      { property: 'Thumb 배경',   token: t.thumbBg, value: r(t.thumbBg), type: 'color' },
                    ]}
                  />
                  <Divider />
                </View>
              );
            })
          )}

          <TokenSpecTable
            title="공통 레이아웃"
            rows={[
              { property: 'Track 크기',       token: '—',                value: '52×32',                      type: 'size' },
              { property: 'Thumb 크기',       token: '—',                value: '28×28',                      type: 'size' },
              { property: 'Track 라디우스',   token: 'borderRadius/full', value: radius.full,                  type: 'size' },
              { property: 'Thumb 라디우스',   token: 'borderRadius/full', value: radius.full,                  type: 'size' },
              { property: 'Thumb 그림자',     token: 'shadow/level2',     value: `offset(0,${shadow.level2.shadowOffset.height}) blur(${shadow.level2.shadowRadius}) opacity(${shadow.level2.shadowOpacity})` },
              { property: 'Thumb 이동 방식',  token: '—',                value: 'alignSelf (flex-start ↔ flex-end)' },
            ]}
          />

          <TokenSpecTable
            title="애니메이션 (권장값)"
            rows={[
              { property: 'Duration',  token: '—', value: '150~200ms' },
              { property: 'Easing',    token: '—', value: 'ease-in-out' },
              { property: 'Reduce Motion 대응', token: '—', value: 'prefers-reduced-motion 시 즉시 전환' },
            ]}
          />
        </Section>
      </View>
    );
  },
};

// ─── 실전 예시 ──────────────────────────────────────────────

export const InContext: Story = {
  name: '실전 예시',
  render: () => {
    const [push, setPush] = useState(true);
    const [meal, setMeal] = useState(true);
    const [sleep, setSleep] = useState(false);

    const settings = [
      { label: '푸시 알림', sublabel: '건강 리포트, 목표 달성 알림', checked: push, onPress: () => setPush(!push) },
      { label: '식단 기록 리마인더', sublabel: '매일 아침·점심·저녁 알림', checked: meal, onPress: () => setMeal(!meal) },
      { label: '수면 분석 알림', sublabel: '기상 후 수면 리포트 발송', checked: sleep, onPress: () => setSleep(!sleep) },
    ];

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="실전 예시"
          description="실제 화면에서 Switch가 배치되는 맥락을 확인합니다."
        >
          <View style={{ gap: spacing['2xlarge'], maxWidth: 375 }}>
            <Col gap={spacing.small}>
              <StateLabel>알림 설정</StateLabel>
              <View style={{
                borderWidth: 1,
                borderColor: semanticColor.borderDefault,
                borderRadius: radius.large,
                padding: spacing.xlarge,
                backgroundColor: semanticColor.backgroundPrimary,
              }}>
                {settings.map((item, i) => (
                  <View key={item.label} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: spacing.medium,
                    borderBottomWidth: i < settings.length - 1 ? 1 : 0,
                    borderBottomColor: semanticColor.borderDefault,
                  }}>
                    <View style={{ flex: 1, marginRight: spacing.large }}>
                      <Text style={{
                        fontSize: textStyle.body2.fontSize,
                        fontWeight: fw.medium,
                        color: semanticColor.textPrimary,
                      }}>{item.label}</Text>
                      <Text style={{
                        fontSize: textStyle.caption.fontSize,
                        color: semanticColor.textSecondary,
                        marginTop: spacing.xsmall,
                      }}>{item.sublabel}</Text>
                    </View>
                    <Switch checked={item.checked} onPress={item.onPress} />
                  </View>
                ))}
              </View>
            </Col>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 5. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 Switch 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { Switch } from '@design-system/components/Switch';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`const [checked, setActive] = useState(false);

<Switch
  checked={checked}
  onPress={() => setActive(!checked)}
/>`}
        />

        <CodeBlock
          title="설정 화면 패턴 (라벨 + Switch)"
          code={`<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <View>
    <Text style={{ fontSize: 15, color: semanticColor.textPrimary }}>
      푸시 알림
    </Text>
    <Text style={{ fontSize: 13, color: semanticColor.textSecondary }}>
      건강 리포트, 식단 알림 등
    </Text>
  </View>
  <Switch checked={isEnabled} onPress={toggle} />
</View>`}
        />

        <CodeBlock
          title="비활성화"
          code={`<Switch checked={false} disabled />
<Switch checked={true} disabled />`}
        />
      </Section>
    </View>
  ),
};
