import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from '../src/components/DatePicker';
import { Section, StateLabel, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import {
  spacing, semanticColor, textStyle, fontWeight as fw,
  radius, interaction,
} from '../src/tokens/theme';

const meta: Meta<typeof DatePicker> = {
  title: 'Input/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Playground: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <View style={{ maxWidth: 375 }}>
        <DatePicker value={date} onChange={setDate} />
        {date && (
          <Text style={{ marginTop: spacing.medium, color: semanticColor.textSecondary, textAlign: 'center' }}>
            선택: {date.getFullYear()}-{String(date.getMonth() + 1).padStart(2, '0')}-{String(date.getDate()).padStart(2, '0')}
          </Text>
        )}
      </View>
    );
  },
};

export const WithConstraints: Story = {
  name: '날짜 제한',
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="날짜 제한" description="minDate/maxDate로 선택 가능 범위를 제한합니다. 오늘 기준 과거 7일만 선택 가능.">
          <View style={{ maxWidth: 375 }}>
            <DatePicker value={date} onChange={setDate} minDate={minDate} maxDate={today} />
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 상태별 ────────────────────────────────────────────────

export const States: Story = {
  name: '상태별',
  render: () => {
    const today = new Date();
    const selected = new Date(today.getFullYear(), today.getMonth(), 15);
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="상태별"
          description="날짜 셀의 5가지 상태를 확인합니다: 기본 · 오늘 · 선택됨 · 비활성 · 일요일."
        >
          <View style={{ gap: spacing.xlarge, maxWidth: 375 }}>
            <Col gap={spacing.small}>
              <StateLabel>기본 (선택 전)</StateLabel>
              <DatePicker />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>날짜 선택됨 (15일)</StateLabel>
              <DatePicker value={selected} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>날짜 제한 (오늘+3일 이후만 선택 가능)</StateLabel>
              <DatePicker minDate={minDate} />
            </Col>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 날짜 셀 상태별 토큰 매핑 ───────────────────────────────

const CELL_STATE_TOKEN_MAP = {
  default: {
    background: '—',
    text:       'color/text/primary',
    border:     '—',
    opacity:    '1',
  },
  today: {
    background: '—',
    text:       'color/text/brand',
    border:     'color/border/focus',
    opacity:    '1',
  },
  selected: {
    background: 'color/background/brand',
    text:       'color/text/onColor',
    border:     '—',
    opacity:    '1',
  },
  disabled: {
    background: '—',
    text:       'color/text/tertiary',
    border:     '—',
    opacity:    '0.3',
  },
  sunday: {
    background: '—',
    text:       'color/text/error',
    border:     '—',
    opacity:    '1',
  },
} as const;

const cellColors: Record<string, string> = {
  'color/text/primary':        semanticColor.textPrimary,
  'color/text/brand':          semanticColor.textBrand,
  'color/text/onColor':        semanticColor.textOnColor,
  'color/text/tertiary':       semanticColor.textTertiary,
  'color/text/error':          semanticColor.textError,
  'color/background/brand':    semanticColor.backgroundBrand,
  'color/border/focus':        semanticColor.borderFocus,
};

const resolveCell = (token: string) => cellColors[token] ?? token;

// ─── 디자인 스펙 ────────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => {
    const cellStates = ['default', 'today', 'selected', 'disabled', 'sunday'] as const;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 DatePicker 상태별 스펙입니다."
          badge="디자인"
        >
          {/* 날짜 셀 상태별 */}
          {cellStates.map(state => {
            const st = CELL_STATE_TOKEN_MAP[state];
            return (
              <View key={state}>
                <TokenSpecTable
                  title={`날짜 셀: ${state}`}
                  rows={[
                    ...(st.background !== '—'
                      ? [{ property: '배경색', token: st.background, value: resolveCell(st.background), type: 'color' as const }]
                      : []),
                    { property: '텍스트', token: st.text, value: resolveCell(st.text), type: 'color' },
                    ...(st.border !== '—'
                      ? [{ property: '테두리', token: st.border, value: resolveCell(st.border), type: 'color' as const }]
                      : []),
                    ...(st.opacity !== '1'
                      ? [{ property: 'opacity', token: st.opacity, value: Number(st.opacity), type: 'opacity' as const }]
                      : []),
                  ]}
                />
                <Divider />
              </View>
            );
          })}

          {/* 컨테이너 / 헤더 */}
          <TokenSpecTable
            title="컨테이너 · 헤더"
            rows={[
              { property: '컨테이너 배경',   token: 'color/background/primary', value: semanticColor.backgroundPrimary,  type: 'color' },
              { property: '컨테이너 라디우스', token: 'borderRadius/medium',      value: radius.medium,                   type: 'size' },
              { property: '컨테이너 패딩',   token: 'spacing/large',             value: spacing.large,                   type: 'size' },
              { property: '헤더 타이포',     token: 'Headline',                  value: `${textStyle.headline.fontSize}px / ${textStyle.headline.lineHeight}px / ${fw.semibold}`, type: 'typography' },
              { property: '헤더 텍스트',     token: 'color/text/primary',        value: semanticColor.textPrimary,       type: 'color' },
              { property: '네비 아이콘',     token: 'color/icon/primary',        value: semanticColor.iconPrimary,       type: 'color' },
              { property: '네비 버튼 크기',   token: '36dp (원형)',               value: 36,                              type: 'size' },
              { property: '헤더-요일 간격',   token: 'spacing/large',             value: spacing.large,                   type: 'size' },
            ]}
          />

          <Divider />

          {/* 요일 · 날짜 셀 레이아웃 */}
          <TokenSpecTable
            title="요일 · 날짜 셀 레이아웃"
            rows={[
              { property: '요일 타이포',     token: 'Caption',                   value: `${textStyle.caption.fontSize}px / ${textStyle.caption.lineHeight}px / ${fw.medium}`, type: 'typography' },
              { property: '요일 색상',       token: 'color/text/secondary',      value: semanticColor.textSecondary,     type: 'color' },
              { property: '일요일 색상',     token: 'color/text/error',          value: semanticColor.textError,         type: 'color' },
              { property: '요일-날짜 간격',   token: 'spacing/small',             value: spacing.small,                   type: 'size' },
              { property: '셀 높이',         token: '40dp (CELL_SIZE)',          value: 40,                              type: 'size' },
              { property: '날짜 버튼 크기',   token: '36dp (원형)',               value: 36,                              type: 'size' },
              { property: '날짜 타이포',     token: 'Label 1',                   value: `${textStyle.label1.fontSize}px / ${textStyle.label1.lineHeight}px / ${fw.regular}`, type: 'typography' },
              { property: 'press 투명도',    token: 'interaction.pressOpacity',  value: interaction.pressOpacity,        type: 'opacity' },
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
    const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
    const maxDate = new Date();

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="실전 예시"
          description="생년월일 입력에서의 DatePicker 활용 예시입니다."
        >
          <View style={{
            maxWidth: 375,
            padding: spacing.xlarge,
            backgroundColor: semanticColor.backgroundPrimary,
            borderRadius: radius.large,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            gap: spacing.large,
          }}>
            <View style={{ gap: spacing.small }}>
              <Text style={{
                fontSize: textStyle.label2.fontSize,
                fontWeight: textStyle.label2.fontWeight,
                lineHeight: textStyle.label2.lineHeight,
                color: semanticColor.textPrimary,
              }}>
                생년월일
              </Text>
              <Text style={{
                fontSize: textStyle.caption.fontSize,
                lineHeight: textStyle.caption.lineHeight,
                color: semanticColor.textSecondary,
              }}>
                맞춤 건강 분석을 위해 생년월일을 선택해 주세요.
              </Text>
            </View>

            <DatePicker
              value={birthDate}
              onChange={setBirthDate}
              maxDate={maxDate}
            />

            {birthDate && (
              <Text style={{
                fontSize: textStyle.caption.fontSize,
                color: semanticColor.textBrand,
                textAlign: 'center',
              }}>
                선택: {birthDate.getFullYear()}년 {birthDate.getMonth() + 1}월 {birthDate.getDate()}일
              </Text>
            )}
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 사용 가이드 ────────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={`import { DatePicker } from '@design-system/components/DatePicker';`} />
        <CodeBlock title="기본 사용" code={`const [date, setDate] = useState<Date>();\n\n<DatePicker value={date} onChange={setDate} />`} />
        <CodeBlock title="날짜 제한" code={`<DatePicker\n  value={date}\n  onChange={setDate}\n  minDate={new Date(2026, 0, 1)}\n  maxDate={new Date()}\n/>`} />
      </Section>
    </View>
  ),
};
