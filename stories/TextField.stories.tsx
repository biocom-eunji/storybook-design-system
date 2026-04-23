import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from '../src/components/TextField';
import {
  Section, StateLabel, Row, Col, CodeBlock, CompareGrid, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle, radius } from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────

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
    icon:        'color/icon/error',
  },
  success: {
    background:  'color/background/primary',
    border:      'color/border/focus',
    text:        'color/text/primary',
    placeholder: 'color/text/tertiary',
    label:       'color/text/primary',
    message:     'color/text/brand',
    icon:        'color/icon/success',
  },
  disabled: {
    background:  'color/background/secondary',
    border:      'color/border/default',
    text:        'color/text/tertiary',
    placeholder: 'color/text/tertiary',
    label:       'color/text/primary',
    icon:        'color/icon/disabled',
  },
} as const;

const LAYOUT_TOKEN_MAP = {
  inputTypo:     'Body 2',
  labelTypo:     'Label 2',
  helperTypo:    'Label 2',
  paddingH:      'spacing/large',
  paddingV:      'spacing/medium',
  radius:        'borderRadius/medium',
  gap:           'spacing/small',
  trailingGap:   'spacing/small',
} as const;

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof TextField> = {
  title: 'Input/TextField',
  component: TextField,
  argTypes: {
    label:          { control: 'text',    description: '라벨 텍스트' },
    placeholder:    { control: 'text',    description: '플레이스홀더' },
    helperText:     { control: 'text',    description: '하단 도움말 텍스트' },
    errorMessage:   { control: 'text',    description: '에러 메시지 (표시 시 error 상태 적용)' },
    successMessage: { control: 'text',    description: '성공 메시지 (표시 시 success 상태 적용)' },
    disabled:       { control: 'boolean', description: '비활성화' },
    maxCharCount:   { control: 'number',  description: '최대 글자 수 카운터' },
    trailingIcon:   { control: 'select',  options: [undefined, 'clear', 'error', 'success', 'search'], description: '오른쪽 아이콘' },
    trailingText:   { control: 'text',    description: '오른쪽 텍스트 링크' },
    secureTextEntry: { control: 'boolean', description: '비밀번호 마스킹' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: '이메일',
    placeholder: '이메일을 입력해 주세요.',
    helperText: '로그인에 사용할 이메일 주소를 입력하세요.',
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: `color/background/primary`, `color/border/default`, `color/text/primary`, `Body 2`, `Label 2`, `borderRadius/medium`, `spacing/large`',
      },
    },
  },
};

// ─── 2. 상태별 비교 ──────────────────────────────────────────

export const AllStates: Story = {
  name: '상태별 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'], maxWidth: 360 }}>
      <Section
        title="상태별 비교"
        description="Default, Focus(시뮬레이션), Filled, Error, Success, Disabled 상태를 확인합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>Default</StateLabel>
            <TextField label="이메일" placeholder="이메일을 입력해 주세요." />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Filled</StateLabel>
            <TextField label="이메일" value="user@biocom.kr" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Error</StateLabel>
            <TextField
              label="이메일"
              value="invalid-email"
              errorMessage="올바른 이메일 형식이 아닙니다."
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Success</StateLabel>
            <TextField
              label="이메일"
              value="user@biocom.kr"
              successMessage="사용 가능한 이메일입니다."
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <TextField
              label="이메일"
              placeholder="입력할 수 없습니다."
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
          '**Filled**: `color/border/active`',
          '**Error**: `color/border/error` + `color/text/error` + `color/icon/error`',
          '**Success**: `color/border/focus` + `color/text/brand` + `color/icon/success`',
          '**Disabled**: `color/background/secondary` + `color/text/tertiary`',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 3. Trailing 요소 ────────────────────────────────────────

export const TrailingElements: Story = {
  name: 'Trailing 요소',
  render: () => (
    <View style={{ gap: spacing['3xlarge'], maxWidth: 360 }}>
      <Section
        title="Trailing 요소"
        description="오른쪽 슬롯에 아이콘 또는 텍스트를 배치할 수 있습니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>Clear 아이콘</StateLabel>
            <TextField
              label="검색"
              value="바이오컴"
              trailingIcon="clear"
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Search 아이콘</StateLabel>
            <TextField
              label="검색"
              placeholder="검색어를 입력하세요."
              trailingIcon="search"
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Trailing 텍스트</StateLabel>
            <TextField
              label="인증번호"
              placeholder="인증번호 6자리"
              trailingText="재전송"
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>비밀번호</StateLabel>
            <TextField
              label="비밀번호"
              placeholder="비밀번호를 입력하세요."
              secureTextEntry
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
          '**Clear**: `color/icon/disabled` — 입력 지우기',
          '**Search**: `color/icon/secondary` — 검색 아이콘',
          '**Error/Success**: 자동 표시 (`color/icon/error`, `color/icon/success`)',
          '**Trailing 텍스트**: `color/text/secondary` → focus 시 `color/text/brand`',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 4. 글자 수 카운터 ───────────────────────────────────────

export const CharCounter: Story = {
  name: '글자 수 카운터',
  render: () => (
    <View style={{ gap: spacing['3xlarge'], maxWidth: 360 }}>
      <Section
        title="글자 수 카운터"
        description="maxCharCount prop으로 글자 수 제한과 카운터를 표시합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>기본 카운터</StateLabel>
            <TextField
              label="닉네임"
              placeholder="닉네임을 입력하세요."
              maxCharCount={20}
            />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>초과 상태</StateLabel>
            <TextField
              label="닉네임"
              value="이름이너무길면에러가표시됩니다열다섯글자넘음"
              maxCharCount={15}
              errorMessage="최대 15자까지 입력 가능합니다."
            />
          </Col>
        </View>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '카운터 텍스트: `color/text/primary` · 초과 시: `color/text/error`',
      },
    },
  },
};

// ─── 5. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => {
    const states = ['default', 'focus', 'filled', 'error', 'success', 'disabled'] as const;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 TextField 상태별 스펙입니다."
          badge="디자인"
        >
          {states.map(state => {
            const stateColors: Record<string, string> = {
              'color/background/primary':   semanticColor.backgroundPrimary,
              'color/background/secondary':  semanticColor.backgroundSecondary,
              'color/border/default':        semanticColor.borderDefault,
              'color/border/focus':          semanticColor.borderFocus,
              'color/border/active':         semanticColor.borderActive,
              'color/border/error':          semanticColor.borderError,
              'color/text/primary':          semanticColor.textPrimary,
              'color/text/tertiary':         semanticColor.textTertiary,
              'color/text/error':            semanticColor.textError,
              'color/text/brand':            semanticColor.textBrand,
              'color/icon/error':            semanticColor.iconError,
              'color/icon/success':          semanticColor.iconSuccess,
              'color/icon/disabled':         semanticColor.iconDisabled,
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
                    ...('icon' in st
                      ? [{ property: '아이콘', token: (st as any).icon, value: resolve((st as any).icon), type: 'color' as const }]
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
              { property: '입력 타이포',     token: 'Body 2',            value: `${textStyle.body2.fontSize}px / ${textStyle.body2.lineHeight}px / ${textStyle.body2.fontWeight}`, type: 'typography' },
              { property: '라벨 타이포',     token: 'Label 2',           value: `${textStyle.label2.fontSize}px / ${textStyle.label2.lineHeight}px / ${textStyle.label2.fontWeight}`, type: 'typography' },
              { property: '헬퍼 타이포',     token: 'Label 2',           value: `${textStyle.label2.fontSize}px / ${textStyle.label2.lineHeight}px / ${textStyle.label2.fontWeight}`, type: 'typography' },
              { property: '좌우 패딩',       token: 'spacing/large',     value: spacing.large,     type: 'size' },
              { property: '상하 패딩',       token: 'spacing/medium',    value: spacing.medium,    type: 'size' },
              { property: '코너 라디우스',   token: 'borderRadius/medium', value: radius.medium,   type: 'size' },
              { property: '라벨-인풋 간격',  token: 'spacing/small',     value: spacing.small,     type: 'size' },
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
        description="개발자를 위한 TextField 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { TextField } from '@design-system/components/TextField';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<TextField
  label="이메일"
  placeholder="이메일을 입력해 주세요."
  onChangeText={setEmail}
/>`}
        />

        <CodeBlock
          title="유효성 검사"
          code={`<TextField
  label="이메일"
  value={email}
  onChangeText={setEmail}
  errorMessage={emailError}
  successMessage={emailValid ? '사용 가능합니다.' : undefined}
/>`}
        />

        <CodeBlock
          title="Trailing 요소"
          code={`<TextField
  label="검색"
  trailingIcon="search"
/>

<TextField
  label="인증번호"
  trailingText="재전송"
  onTrailingTextPress={handleResend}
/>`}
        />

        <CodeBlock
          title="글자 수 제한"
          code={`<TextField
  label="닉네임"
  maxCharCount={20}
  onChangeText={setNickname}
/>`}
        />
      </Section>
    </View>
  ),
};
