import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimePicker, type TimeValue } from '../src/components/TimePicker';
import { Section, StateLabel, Row, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle, radius } from '../src/tokens/theme';

const meta: Meta<typeof TimePicker> = {
  title: 'Input/TimePicker',
  component: TimePicker,
  argTypes: {
    value:          { control: 'object', description: 'TimeValue 객체 { hour, minute, period }' },
    disabled:       { control: 'boolean' },
    minuteInterval: { control: 'select', options: [1, 5, 10, 15, 30] },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TimePicker>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState<TimeValue>({ hour: 8, minute: 30, period: 'AM' });

    return (
      <View style={{ gap: spacing.xlarge }}>
        <TimePicker
          value={value}
          onChange={(v) => {
            setValue(v);
          }}
        />
        <Text style={{ fontSize: textStyle.body2.fontSize, color: semanticColor.textSecondary }}>
          선택: {value.period} {String(value.hour).padStart(2, '0')}:{String(value.minute).padStart(2, '0')}
        </Text>
      </View>
    );
  },
};

// ─── 2. 상태별 비교 ─────────────────────────────────────────

export const AllStates: Story = {
  name: '상태별 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="상태별 비교"
        description="활성 상태와 비활성(Disabled) 상태를 비교합니다."
      >
        <View style={{ gap: spacing['2xlarge'] }}>
          <Col gap={spacing.small}>
            <StateLabel>Default</StateLabel>
            <TimePicker value={{ hour: 9, minute: 0, period: 'AM' }} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <TimePicker value={{ hour: 9, minute: 0, period: 'AM' }} disabled />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. 분 간격 ─────────────────────────────────────────────

export const MinuteIntervals: Story = {
  name: '분 간격',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="분 간격"
        description="minuteInterval prop으로 분 단위를 조절합니다."
      >
        <View style={{ gap: spacing['2xlarge'] }}>
          <Col gap={spacing.small}>
            <StateLabel>5분 간격</StateLabel>
            <TimePicker value={{ hour: 7, minute: 0, period: 'AM' }} minuteInterval={5} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>15분 간격</StateLabel>
            <TimePicker value={{ hour: 7, minute: 0, period: 'PM' }} minuteInterval={15} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>30분 간격</StateLabel>
            <TimePicker value={{ hour: 12, minute: 0, period: 'PM' }} minuteInterval={30} />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. 실전 예시 ───────────────────────────────────────────

export const InContext: Story = {
  name: '실전 예시',
  render: () => {
    const [value, setValue] = useState<TimeValue>({ hour: 7, minute: 30, period: 'AM' });

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="실전 예시"
          description="알람 설정 화면에서의 활용 예시입니다."
        >
          <View style={{
            maxWidth: 375,
            padding: spacing.xlarge,
            backgroundColor: semanticColor.backgroundPrimary,
            borderRadius: radius.large,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            gap: spacing.xlarge,
          }}>
            <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary,
            }}>
              기상 알람 설정
            </Text>
            <TimePicker
              value={value}
              minuteInterval={5}
              onChange={(v) => {
                setValue(v);
              }}
            />
            <Text style={{
              fontSize: textStyle.caption.fontSize,
              color: semanticColor.textSecondary,
            }}>
              매일 {value.period} {String(value.hour).padStart(2, '0')}:{String(value.minute).padStart(2, '0')}에 알림을 보내드려요
            </Text>
          </View>
        </Section>
      </View>
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
        description="Figma 시맨틱 토큰 기준 TimePicker 스펙입니다."
        badge="디자인"
      >
        <TokenSpecTable
          title="값 박스"
          rows={[
            { property: '배경색',       token: 'color/background/secondary', value: semanticColor.backgroundSecondary, type: 'color' },
            { property: '테두리',       token: 'color/border/default',       value: semanticColor.borderDefault,       type: 'color' },
            { property: '텍스트',       token: 'color/text/primary',         value: semanticColor.textPrimary,         type: 'color' },
            { property: '타이포',       token: 'Title 3',                    value: `${textStyle.title3.fontSize}px / Bold`, type: 'typography' },
            { property: '코너 라디우스', token: 'borderRadius/medium',       value: radius.medium,                     type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="AM/PM 버튼"
          rows={[
            { property: '비활성 배경',  token: 'color/background/secondary', value: semanticColor.backgroundSecondary, type: 'color' },
            { property: '활성 배경',    token: 'color/background/brand',     value: semanticColor.backgroundBrand,     type: 'color' },
            { property: '비활성 텍스트', token: 'color/text/secondary',      value: semanticColor.textSecondary,       type: 'color' },
            { property: '활성 텍스트',  token: 'color/text/onColor',         value: semanticColor.textOnColor,         type: 'color' },
            { property: '타이포',       token: 'Label 1',                    value: `${textStyle.label1.fontSize}px / SemiBold`, type: 'typography' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="레이아웃"
          rows={[
            { property: '값 박스 크기', token: '—',              value: '64 × 56',        type: 'size' },
            { property: 'AM/PM 크기',   token: '—',              value: '48 × 36',        type: 'size' },
            { property: '화살표 크기',  token: '—',              value: '36 × 36',        type: 'size' },
            { property: '열 간격',      token: 'spacing/small',  value: spacing.small,     type: 'size' },
            { property: 'AM/PM 간격',   token: 'spacing/medium', value: spacing.medium,    type: 'size' },
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
      <Section title="사용 가이드" badge="개발">
        <CodeBlock
          title="Import"
          code={`import { TimePicker } from '@design-system/components/TimePicker';`}
        />
        <CodeBlock
          title="기본 사용"
          code={`import { TimePicker, type TimeValue } from '@design-system/components/TimePicker';

const [value, setValue] = useState<TimeValue>({ hour: 8, minute: 0, period: 'AM' });

<TimePicker
  value={value}
  onChange={(v) => {
    setValue(v);
  }}
/>`}
        />
        <CodeBlock
          title="분 간격 설정"
          code={`<TimePicker
  value={{ hour: 7, minute: 0, period: 'AM' }}
  minuteInterval={15}
  onChange={handleTimeChange}
/>`}
        />
      </Section>
    </View>
  ),
};
