import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '../src/components/Radio';
import {
  Section, StateLabel, Row, Col, CodeBlock, CompareGrid, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor } from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────

const CIRCLE_TOKEN_MAP = {
  unchecked: {
    default: {
      outerBg:     'color/background/status',
      outerBorder: 'color/border/active',
      innerDot:    'color/icon/onColor',
    },
    disabled: {
      outerBg:     'color/background/status',
      outerBorder: 'color/border/active',
      innerDot:    'color/icon/onColor',
    },
  },
  checked: {
    default: {
      outerBg:     'color/background/brand',
      outerBorder: 'color/border/focus',
      innerDot:    'color/icon/onColor',
    },
    disabled: {
      outerBg:     'color/icon/disabled',
      outerBorder: 'color/border/active',
      innerDot:    'color/icon/onColor',
    },
  },
} as const;

const LABEL_TOKEN_MAP = {
  default:  { label: 'color/text/primary',  sublabel: 'color/text/secondary' },
  disabled: { label: 'color/text/tertiary', sublabel: 'color/text/tertiary' },
} as const;

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof Radio> = {
  title: 'Input/Radio',
  component: Radio,
  argTypes: {
    checked: {
      control: 'boolean',
      description: '선택 상태 (Figma: Checked)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: '라디오 크기 (Figma: Size)',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화',
    },
    label: {
      control: 'text',
      description: '라벨 텍스트',
    },
    sublabel: {
      control: 'text',
      description: '서브라벨 텍스트',
    },
    tight: {
      control: 'boolean',
      description: '컴팩트 모드 (배경색 + 패딩 적용)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [selected, setSelected] = useState('a');
    return (
      <View style={{ gap: spacing.small }}>
        <Radio checked={selected === 'a'} label="옵션 A" onPress={() => setSelected('a')} />
        <Radio checked={selected === 'b'} label="옵션 B" onPress={() => setSelected('b')} />
        <Radio checked={selected === 'c'} label="옵션 C" onPress={() => setSelected('c')} />
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: `color/background/brand`, `color/icon/onColor`, `color/text/primary`. 클릭하여 선택을 변경합니다.',
      },
    },
  },
};

// ─── 2. 선택 상태별 ──────────────────────────────────────────

export const CheckStates: Story = {
  name: '선택 상태별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="선택 상태별"
        description="Unchecked와 Checked 두 가지 상태를 확인합니다."
      >
        <CompareGrid
          items={[
            { label: 'Unchecked', content: <Radio checked={false} label="선택 안 됨" /> },
            { label: 'Checked', content: <Radio checked={true} label="선택됨" /> },
          ]}
        />
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**Unchecked**: 투명 배경 + `color/border/active` 테두리',
          '**Checked**: `color/background/brand` 배경 + `color/icon/onColor` 내부 점',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 3. 크기 비교 ────────────────────────────────────────────

export const Sizes: Story = {
  name: '크기 비교',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="크기 비교"
        description="Small(18px)과 Medium(22px) 두 가지 크기를 비교합니다."
      >
        <Row gap={spacing['2xlarge']} align="flex-start">
          {(['small', 'medium'] as const).map(size => (
            <Col key={size} gap={spacing.small}>
              <StateLabel>{size}</StateLabel>
              <Radio checked={true} size={size} label={`${size} 라디오`} />
              <Radio checked={false} size={size} label={`${size} 라디오`} />
            </Col>
          ))}
        </Row>
      </Section>
    </View>
  ),
};

// ─── 4. 비활성화 ─────────────────────────────────────────────

export const DisabledStates: Story = {
  name: '비활성화',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="비활성화"
        description="Unchecked / Checked의 disabled 조합입니다."
      >
        <CompareGrid
          items={[
            { label: 'Unchecked Disabled', content: <Radio checked={false} label="비활성" disabled /> },
            { label: 'Checked Disabled', content: <Radio checked={true} label="비활성" disabled /> },
          ]}
        />
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**Unchecked Disabled**: 투명 배경 + `color/border/active`',
          '**Checked Disabled**: `color/icon/disabled` 배경 + `color/icon/onColor` 내부 점',
          '**라벨**: `color/text/tertiary`',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 5. 라벨 변형 ────────────────────────────────────────────

export const LabelVariations: Story = {
  name: '라벨 변형',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="라벨 변형"
        description="라벨, 서브라벨, 라벨 없음, 컴팩트 모드 등 다양한 조합을 확인합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>라벨만</StateLabel>
            <Radio checked={true} label="옵션 A" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>라벨 + 서브라벨</StateLabel>
            <Radio checked={true} label="프리미엄 플랜" sublabel="월 9,900원 · 모든 기능 이용 가능" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>라벨 없음 (아이콘만)</StateLabel>
            <Radio checked={true} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>컴팩트 모드 (tight)</StateLabel>
            <Radio checked={true} label="배경색 포함 컴팩트" tight />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. 인터랙티브 데모 (RadioGroup 패턴) ────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [selected, setSelected] = useState('option1');

    const options = [
      { id: 'option1', label: '기본 플랜', sublabel: '무료 · 기본 기능' },
      { id: 'option2', label: '스탠다드 플랜', sublabel: '월 4,900원 · 리포트 포함' },
      { id: 'option3', label: '프리미엄 플랜', sublabel: '월 9,900원 · 모든 기능' },
    ];

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="RadioGroup 패턴입니다. 단일 선택만 가능합니다."
        >
          <View style={{ gap: spacing.small, maxWidth: 400 }}>
            {options.map(opt => (
              <Radio
                key={opt.id}
                checked={selected === opt.id}
                label={opt.label}
                sublabel={opt.sublabel}
                onPress={() => setSelected(opt.id)}
              />
            ))}
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 7. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => {
    const checkStates = ['unchecked', 'checked'] as const;
    const disabledStates = ['default', 'disabled'] as const;

    const resolve: Record<string, string> = {
      'color/background/brand':    semanticColor.backgroundBrand,
      'color/background/status':   semanticColor.backgroundPrimary,
      'color/border/focus':        semanticColor.borderFocus,
      'color/border/active':       semanticColor.borderActive,
      'color/border/default':      semanticColor.borderDefault,
      'color/icon/onColor':        semanticColor.iconOnColor,
      'color/icon/disabled':       semanticColor.iconDisabled,
      'color/text/primary':        semanticColor.textPrimary,
      'color/text/secondary':      semanticColor.textSecondary,
      'color/text/tertiary':       semanticColor.textTertiary,
    };
    const r = (token: string) => resolve[token] ?? token;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 Radio 전체 조합 스펙입니다."
          badge="디자인"
        >
          {checkStates.map(checkState =>
            disabledStates.map(dis => {
              const circle = CIRCLE_TOKEN_MAP[checkState][dis];
              const lbl = LABEL_TOKEN_MAP[dis];
              return (
                <View key={`${checkState}-${dis}`}>
                  <TokenSpecTable
                    title={`${checkState} / ${dis}`}
                    rows={[
                      { property: 'Outer 배경',     token: circle.outerBg,     value: r(circle.outerBg),     type: 'color' },
                      { property: 'Outer 테두리',   token: circle.outerBorder, value: r(circle.outerBorder), type: 'color' },
                      { property: 'Inner 점',       token: circle.innerDot,    value: r(circle.innerDot),    type: 'color' },
                      { property: '라벨 텍스트',     token: lbl.label,         value: r(lbl.label),          type: 'color' },
                      { property: '서브라벨 텍스트', token: lbl.sublabel,      value: r(lbl.sublabel),       type: 'color' },
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
              { property: 'Outer 크기 (small)',  token: '—', value: '18×18',  type: 'size' },
              { property: 'Outer 크기 (medium)', token: '—', value: '22×22',  type: 'size' },
              { property: 'Inner 점 (small)',    token: '—', value: '8×8',    type: 'size' },
              { property: 'Inner 점 (medium)',   token: '—', value: '10×10',  type: 'size' },
              { property: 'Outer 라디우스',       token: 'borderRadius/full', value: '50% (원형)' },
              { property: 'Circle-라벨 간격 (small)',  token: 'spacing/small', value: spacing.small,  type: 'size' },
              { property: 'Circle-라벨 간격 (medium)', token: '—',            value: 10,             type: 'size' },
              { property: '라벨 타이포',         token: 'Body 2 / Label 1',   value: '15px / 14px' },
              { property: '서브라벨 타이포',     token: 'Label 2 / Caption',   value: '14px / 13px' },
            ]}
          />
        </Section>
      </View>
    );
  },
};

// ─── 8. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 Radio 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { Radio } from '@design-system/components/Radio';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`const [checked, setChecked] = useState(false);

<Radio
  checked={checked}
  label="옵션 A"
  onPress={() => setChecked(!checked)}
/>`}
        />

        <CodeBlock
          title="RadioGroup 패턴"
          code={`const [selected, setSelected] = useState('option1');

const options = [
  { id: 'option1', label: '기본 플랜', sublabel: '무료' },
  { id: 'option2', label: '프리미엄 플랜', sublabel: '월 9,900원' },
];

{options.map(opt => (
  <Radio
    key={opt.id}
    checked={selected === opt.id}
    label={opt.label}
    sublabel={opt.sublabel}
    onPress={() => setSelected(opt.id)}
  />
))}`}
        />

        <CodeBlock
          title="서브라벨 & 컴팩트 모드"
          code={`<Radio
  checked={true}
  label="프리미엄 플랜"
  sublabel="월 9,900원 · 모든 기능 이용 가능"
/>

<Radio checked={true} label="컴팩트 모드" tight />`}
        />
      </Section>
    </View>
  ),
};
