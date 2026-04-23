import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchBar } from '../src/components/SearchBar';
import { Section, StateLabel, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle, radius, fontWeight as fw } from '../src/tokens/theme';

const meta: Meta<typeof SearchBar> = {
  title: 'Input/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <View style={{ maxWidth: 375 }}>
        <SearchBar value={value} onChangeText={setValue} placeholder="음식을 검색하세요" />
      </View>
    );
  },
};

export const States: Story = {
  name: '상태별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="상태별" description="기본, 입력됨, 비활성화 상태입니다.">
        <View style={{ gap: spacing.xlarge, maxWidth: 375 }}>
          <Col gap={spacing.small}>
            <StateLabel>기본 (빈 상태)</StateLabel>
            <SearchBar placeholder="음식을 검색하세요" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>입력됨</StateLabel>
            <SearchBar value="닭가슴살" placeholder="음식을 검색하세요" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>비활성화</StateLabel>
            <SearchBar placeholder="검색 불가" disabled />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 상태별 토큰 매핑 ────────────────────────────────────────

const STATE_TOKEN_MAP = {
  default: {
    background: 'color/background/tertiary',
    text:       'color/text/primary',
    placeholder:'color/text/placeholder',
    icon:       'color/icon/secondary',
    clear:      '—',
  },
  filled: {
    background: 'color/background/tertiary',
    text:       'color/text/primary',
    placeholder:'color/text/placeholder',
    icon:       'color/icon/secondary',
    clear:      'color/icon/disabled',
  },
  disabled: {
    background: 'color/background/tertiary',
    text:       'color/text/primary',
    placeholder:'color/text/placeholder',
    icon:       'color/icon/secondary',
    clear:      '—',
  },
} as const;

const stateColors: Record<string, string> = {
  'color/background/tertiary':  semanticColor.backgroundTertiary,
  'color/text/primary':         semanticColor.textPrimary,
  'color/text/placeholder':     semanticColor.textPlaceholder,
  'color/icon/secondary':       semanticColor.iconSecondary,
  'color/icon/disabled':        semanticColor.iconDisabled,
};

const resolve = (token: string) => stateColors[token] ?? token;

// ─── 디자인 스펙 ────────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => {
    const states = ['default', 'filled', 'disabled'] as const;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 SearchBar 상태별 스펙입니다."
          badge="디자인"
        >
          {states.map(state => {
            const st = STATE_TOKEN_MAP[state];
            return (
              <View key={state}>
                <TokenSpecTable
                  title={`state: ${state}`}
                  rows={[
                    { property: '배경색',       token: st.background,  value: resolve(st.background),  type: 'color' },
                    { property: '텍스트',       token: st.text,        value: resolve(st.text),        type: 'color' },
                    { property: 'Placeholder', token: st.placeholder, value: resolve(st.placeholder), type: 'color' },
                    { property: '검색 아이콘',   token: st.icon,        value: resolve(st.icon),        type: 'color' },
                    ...(st.clear !== '—'
                      ? [{ property: '지우기 아이콘', token: st.clear, value: resolve(st.clear), type: 'color' as const }]
                      : []),
                  ]}
                />
                <Divider />
              </View>
            );
          })}

          <TokenSpecTable
            title="레이아웃"
            rows={[
              { property: '높이',           token: '44dp (고정)',                   value: 44,              type: 'size' },
              { property: '입력 타이포',     token: 'Body 2',                        value: `${textStyle.body2.fontSize}px / ${textStyle.body2.lineHeight}px / ${fw.regular}`, type: 'typography' },
              { property: '좌우 패딩',       token: 'spacing/medium',                value: spacing.medium,  type: 'size' },
              { property: '아이콘-입력 간격', token: 'spacing/small',                 value: spacing.small,   type: 'size' },
              { property: '코너 라디우스',   token: 'borderRadius/medium',            value: radius.medium,   type: 'size' },
              { property: '검색 아이콘 크기', token: '20dp',                           value: 20,              type: 'size' },
              { property: '지우기 아이콘 크기', token: '20dp',                         value: 20,              type: 'size' },
              { property: '비활성 투명도',   token: '0.5',                             value: 0.5,             type: 'opacity' },
            ]}
          />
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
        <CodeBlock title="Import" code={`import { SearchBar } from '@design-system/components/SearchBar';`} />
        <CodeBlock title="기본 사용" code={`const [query, setQuery] = useState('');\n\n<SearchBar\n  value={query}\n  onChangeText={setQuery}\n  onSubmit={handleSearch}\n  placeholder="음식을 검색하세요"\n/>`} />
      </Section>
    </View>
  ),
};
