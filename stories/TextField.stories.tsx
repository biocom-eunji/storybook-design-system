import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputField } from '../src/components/InputField';
import {
  Section, StateLabel, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle, radius } from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────
// InputField(multiline=true)로 구현. 토큰 구조는 InputField와 동일하며
// 레이아웃만 다중행 전용 값을 사용.

const STATE_TOKEN_MAP = {
  default: {
    background:  'color/background/primary',
    border:      'color/border/default',
    text:        'color/text/primary',
    placeholder: 'color/text/tertiary',
    label:       'color/text/primary',
  },
  focus: {
    background:  'color/background/primary',
    border:      'color/border/focus',
    text:        'color/text/primary',
    placeholder: 'color/text/tertiary',
    label:       'color/text/primary',
  },
  filled: {
    background:  'color/background/primary',
    border:      'color/border/active',
    text:        'color/text/primary',
    placeholder: 'color/text/tertiary',
    label:       'color/text/primary',
  },
  error: {
    background:  'color/background/primary',
    border:      'color/border/error',
    text:        'color/text/primary',
    placeholder: 'color/text/tertiary',
    label:       'color/text/primary',
    message:     'color/text/error',
  },
  disabled: {
    background:  'color/background/secondary',
    border:      'color/border/default',
    text:        'color/text/tertiary',
    placeholder: 'color/text/tertiary',
    label:       'color/text/primary',
  },
} as const;

const LAYOUT_TOKEN_MAP = {
  inputTypo:   'Body 2',
  labelTypo:   'Label 2',
  helperTypo:  'Label 2',
  paddingH:    'spacing/large',
  paddingV:    'spacing/medium',
  radius:      'borderRadius/medium',
  minHeight:   '100px (기본값)',
  counterTypo: 'Label 2',
} as const;

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof InputField> = {
  title: 'Input/TextField',
  component: InputField,
  argTypes: {
    label:          { control: 'text',    description: '라벨 텍스트' },
    placeholder:    { control: 'text',    description: '플레이스홀더' },
    helperText:     { control: 'text',    description: '하단 도움말 텍스트' },
    errorMessage:   { control: 'text',    description: '에러 메시지' },
    disabled:       { control: 'boolean', description: '비활성화' },
    maxCharCount:   { control: 'number',  description: '최대 글자 수 카운터' },
    minHeight:      { control: 'number',  description: 'Textarea 최소 높이' },
  },
  args: {
    multiline: true,
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputField>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: '자기소개',
    placeholder: '자기소개를 입력해 주세요.',
    multiline: true,
    maxCharCount: 200,
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: `color/background/primary`, `color/border/default`, `color/text/primary`, `Body 2`, `Label 2`, `borderRadius/medium`, `spacing/large`, `spacing/medium`',
      },
    },
  },
};

// ─── 2. 상태별 비교 ──────────────────────────────────────────

export const AllStates: Story = {
  name: '상태별 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'], maxWidth: 400 }}>
      <Section
        title="상태별 비교"
        description="Default, Filled, Error, Disabled 상태를 확인합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>Default</StateLabel>
            <InputField
              label="자기소개"
              placeholder="자기소개를 입력해 주세요."
              multiline
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Filled</StateLabel>
            <InputField
              label="자기소개"
              value="안녕하세요. 건강한 라이프스타일에 관심이 많은 사용자입니다. 바이오컴을 통해 식단과 수면 패턴을 관리하고 있어요."
              multiline
              maxCharCount={200}
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Error</StateLabel>
            <InputField
              label="자기소개"
              value="짧은 소개"
              multiline
              maxCharCount={200}
              errorMessage="최소 20자 이상 입력해 주세요."
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <InputField
              label="자기소개"
              placeholder="입력할 수 없습니다."
              multiline
              disabled
            />
          </Col>
        </View>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**Default**: `color/border/default`',
          '**Focus**: `color/border/focus`',
          '**Filled**: `color/border/active` + 글자 수 카운터',
          '**Error**: `color/border/error` + `color/text/error`',
          '**Disabled**: `color/background/secondary` + `color/text/tertiary`',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 3. 글자 수 카운터 ───────────────────────────────────────

export const CharCounter: Story = {
  name: '글자 수 카운터',
  render: () => (
    <View style={{ gap: spacing['3xlarge'], maxWidth: 400 }}>
      <Section
        title="글자 수 카운터"
        description="TextField는 내부 하단 오른쪽에 글자 수 카운터가 표시됩니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>카운터 표시</StateLabel>
            <InputField
              label="메모"
              placeholder="메모를 입력하세요."
              multiline
              maxCharCount={500}
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>초과 상태</StateLabel>
            <InputField
              label="메모"
              value="글자 수가 제한을 초과하면 카운터와 테두리가 에러 색상으로 변경됩니다. 이 텍스트는 50자를 초과합니다."
              multiline
              maxCharCount={50}
              errorMessage="최대 50자까지 입력 가능합니다."
            />
          </Col>
        </View>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '카운터: `color/text/primary` (`Label 2`) · 초과 시: `color/text/error`',
      },
    },
  },
};

// ─── 4. 높이 커스텀 ──────────────────────────────────────────

export const CustomHeight: Story = {
  name: '높이 커스텀',
  render: () => (
    <View style={{ gap: spacing['3xlarge'], maxWidth: 400 }}>
      <Section
        title="높이 커스텀"
        description="minHeight prop으로 최소 높이를 조절할 수 있습니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>minHeight: 80</StateLabel>
            <InputField
              label="짧은 메모"
              placeholder="짧은 메모..."
              multiline
              minHeight={80}
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>minHeight: 160</StateLabel>
            <InputField
              label="긴 메모"
              placeholder="긴 메모..."
              multiline
              minHeight={160}
            />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => {
    const states = ['default', 'focus', 'filled', 'error', 'disabled'] as const;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 TextField 상태별 스펙입니다."
          badge="디자인"
        >
          {states.map(state => {
            const stateColors: Record<string, string> = {
              'color/background/primary':   semanticColor.backgroundStatus,
              'color/background/secondary':  semanticColor.backgroundSecondary,
              'color/border/default':        semanticColor.borderDefault,
              'color/border/focus':          semanticColor.borderFocus,
              'color/border/active':         semanticColor.borderActive,
              'color/border/error':          semanticColor.borderError,
              'color/text/primary':          semanticColor.textPrimary,
              'color/text/tertiary':         semanticColor.textTertiary,
              'color/text/error':            semanticColor.textError,
              'color/text/primary':               semanticColor.textPrimary,
            };
            const resolve = (token: string) => stateColors[token] ?? token;
            const st = STATE_TOKEN_MAP[state];
            return (
              <View key={state}>
                <TokenSpecTable
                  title={`state: ${state}`}
                  rows={[
                    { property: '배경색',       token: st.background,  value: resolve(st.background),  type: 'color' },
                    { property: '테두리',       token: st.border,      value: resolve(st.border),      type: 'color' },
                    { property: '텍스트',       token: st.text,        value: resolve(st.text),        type: 'color' },
                    { property: 'Placeholder', token: st.placeholder, value: resolve(st.placeholder), type: 'color' },
                    { property: '라벨',         token: st.label,       value: resolve(st.label),       type: 'color' },
                    ...('message' in st
                      ? [{ property: '메시지', token: (st as any).message, value: resolve((st as any).message), type: 'color' as const }]
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
              { property: '입력 타이포',     token: 'Body 2',              value: `${textStyle.body2.fontSize}px / ${textStyle.body2.lineHeight}px / ${textStyle.body2.fontWeight}`, type: 'typography' },
              { property: '라벨 타이포',     token: 'Label 2',             value: `${textStyle.label2.fontSize}px / ${textStyle.label2.lineHeight}px / ${textStyle.label2.fontWeight}`, type: 'typography' },
              { property: '헬퍼 타이포',     token: 'Label 2',             value: `${textStyle.label2.fontSize}px / ${textStyle.label2.lineHeight}px / ${textStyle.label2.fontWeight}`, type: 'typography' },
              { property: '좌우 패딩',       token: 'spacing/large',       value: spacing.large,   type: 'size' },
              { property: '상하 패딩',       token: 'spacing/medium',      value: spacing.medium,  type: 'size' },
              { property: '코너 라디우스',   token: 'borderRadius/medium', value: radius.medium,   type: 'size' },
              { property: '최소 높이',       token: 'prop: minHeight',     value: '100 (기본값)' },
              { property: '카운터 타이포',   token: 'Label 2',             value: `${textStyle.label2.fontSize}px / ${textStyle.label2.lineHeight}px / ${textStyle.label2.fontWeight}`, type: 'typography' },
            ]}
          />

          <Divider />

          <TokenSpecTable
            title="InputField와의 차이점"
            rows={[
              { property: 'multiline',        token: 'prop',            value: 'true (고정)' },
              { property: 'paddingVertical',   token: 'spacing/medium',  value: spacing.medium,         type: 'size' },
              { property: '카운터 위치',       token: '—',               value: '인풋 내부 하단 오른쪽' },
              { property: 'textAlignVertical', token: '—',               value: 'top' },
              { property: '최소 높이',         token: 'prop: minHeight', value: '100 (기본값, 조절 가능)' },
            ]}
          />
        </Section>
      </View>
    );
  },
};

// ─── 6. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="TextField는 InputField 컴포넌트의 multiline 모드입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import (InputField와 동일)"
          code={`import { InputField } from '@design-system/components/InputField';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<InputField
  label="자기소개"
  placeholder="자기소개를 입력해 주세요."
  multiline
  onChangeText={setBio}
/>`}
        />

        <CodeBlock
          title="글자 수 제한"
          code={`<InputField
  label="메모"
  multiline
  maxCharCount={200}
  onChangeText={setMemo}
/>`}
        />

        <CodeBlock
          title="높이 커스텀"
          code={`<InputField
  label="상세 설명"
  multiline
  minHeight={160}
  maxCharCount={500}
/>`}
        />

        <CodeBlock
          title="유효성 검사"
          code={`<InputField
  label="자기소개"
  multiline
  value={bio}
  onChangeText={setBio}
  maxCharCount={200}
  errorMessage={bio.length < 20 ? '최소 20자 이상 입력해 주세요.' : undefined}
/>`}
        />
      </Section>
    </View>
  ),
};
