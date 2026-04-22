import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../src/components/Checkbox';
import {
  Section, StateLabel, Row, Col, CodeBlock, CompareGrid, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor } from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────

const BOX_TOKEN_MAP = {
  unchecked: {
    default: {
      boxBg:     'transparent',
      boxBorder: 'color/border/active',
      icon:      'color/icon/onColor',
    },
    disabled: {
      boxBg:     'transparent',
      boxBorder: 'color/border/active',
      icon:      'color/icon/onColor',
    },
  },
  checked: {
    default: {
      boxBg:     'color/background/brand',
      boxBorder: 'color/border/focus',
      icon:      'color/icon/onColor',
    },
    disabled: {
      boxBg:     'color/background/brandDisabled',
      boxBorder: 'color/border/active',
      icon:      'color/icon/onColor',
    },
  },
  indeterminate: {
    default: {
      boxBg:     'color/background/brand',
      boxBorder: 'color/border/focus',
      icon:      'color/icon/onColor',
    },
    disabled: {
      boxBg:     'color/background/brandDisabled',
      boxBorder: 'color/border/active',
      icon:      'color/icon/onColor',
    },
  },
} as const;

const LABEL_TOKEN_MAP = {
  default:  { label: 'color/text/primary',  sublabel: 'color/text/secondary' },
  disabled: { label: 'color/text/tertiary', sublabel: 'color/text/tertiary' },
} as const;

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof Checkbox> = {
  title: 'Input/Checkbox',
  component: Checkbox,
  argTypes: {
    state: {
      control: 'select',
      options: ['unchecked', 'checked', 'indeterminate'],
      description: '체크 상태 (Figma: State)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: '체크박스 크기 (Figma: Size)',
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
    bold: {
      control: 'boolean',
      description: '라벨 볼드 처리',
    },
    tight: {
      control: 'boolean',
      description: '컴팩트 모드 (배경색 + 패딩 적용)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    return (
      <View style={{ gap: spacing.small }}>
        <Checkbox
          state={checked1 ? 'checked' : 'unchecked'}
          label="이용약관에 동의합니다."
          onPress={() => setChecked1(!checked1)}
        />
        <Checkbox
          state={checked2 ? 'checked' : 'unchecked'}
          label="개인정보 처리방침에 동의합니다."
          onPress={() => setChecked2(!checked2)}
        />
        <Checkbox
          state={checked3 ? 'checked' : 'unchecked'}
          label="마케팅 수신 동의 (선택)"
          onPress={() => setChecked3(!checked3)}
        />
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: `color/background/brand`, `color/icon/onColor`, `color/text/primary`, `Label 2`. 클릭하여 체크를 토글합니다.',
      },
    },
  },
};

// ─── 2. 체크 상태별 ──────────────────────────────────────────

export const CheckStates: Story = {
  name: '체크 상태별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="체크 상태별"
        description="unchecked, checked, indeterminate 세 가지 상태를 확인합니다."
      >
        <CompareGrid
          items={[
            { label: 'Unchecked', content: <Checkbox state="unchecked" label="선택 안 됨" /> },
            { label: 'Checked', content: <Checkbox state="checked" label="선택됨" /> },
            { label: 'Indeterminate', content: <Checkbox state="indeterminate" label="부분 선택" /> },
          ]}
        />
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**Unchecked**: 투명 배경 + `color/border/active`',
          '**Checked**: `color/background/brand` + `color/icon/onColor`',
          '**Indeterminate**: `color/background/brand` + 가로선 아이콘',
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
              <Checkbox state="checked" size={size} label={`${size} 체크박스`} />
              <Checkbox state="unchecked" size={size} label={`${size} 체크박스`} />
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
        description="모든 체크 상태의 disabled 조합입니다."
      >
        <CompareGrid
          items={[
            { label: 'Unchecked Disabled', content: <Checkbox state="unchecked" label="비활성" disabled /> },
            { label: 'Checked Disabled', content: <Checkbox state="checked" label="비활성" disabled /> },
            { label: 'Indeterminate Disabled', content: <Checkbox state="indeterminate" label="비활성" disabled /> },
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
          '**Checked Disabled**: `color/background/brandDisabled` + `color/icon/onColor`',
          '**라벨**: `color/text/tertiary`',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 5. 라벨 & 서브라벨 ──────────────────────────────────────

export const LabelVariations: Story = {
  name: '라벨 변형',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="라벨 변형"
        description="라벨, 서브라벨, 볼드, 라벨 없음 등 다양한 조합을 확인합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>라벨만</StateLabel>
            <Checkbox state="checked" label="이용약관에 동의합니다." />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>라벨 + 서브라벨</StateLabel>
            <Checkbox state="checked" label="마케팅 수신 동의" sublabel="이벤트, 혜택 등의 정보를 받아보실 수 있습니다." />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>볼드 라벨</StateLabel>
            <Checkbox state="checked" label="전체 동의" bold />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>라벨 없음 (아이콘만)</StateLabel>
            <Checkbox state="checked" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>컴팩트 모드 (tight)</StateLabel>
            <Checkbox state="checked" label="배경색 포함 컴팩트" tight />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. 인터랙티브 데모 ──────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [items, setItems] = useState([
      { id: 'terms', label: '이용약관 동의 (필수)', checked: false },
      { id: 'privacy', label: '개인정보 처리방침 동의 (필수)', checked: false },
      { id: 'marketing', label: '마케팅 수신 동의 (선택)', sublabel: '이벤트, 혜택 등의 정보를 받아보실 수 있습니다.', checked: false },
    ]);

    const allChecked = items.every(i => i.checked);
    const someChecked = items.some(i => i.checked);
    const allState = allChecked ? 'checked' : someChecked ? 'indeterminate' : 'unchecked';

    const toggleAll = () => {
      const next = !allChecked;
      setItems(items.map(i => ({ ...i, checked: next })));
    };

    const toggleItem = (id: string) => {
      setItems(items.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
    };

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="전체 선택 / 개별 선택 패턴입니다. Indeterminate 상태를 확인할 수 있습니다."
        >
          <View style={{ gap: spacing.small, maxWidth: 400 }}>
            <Checkbox state={allState} label="전체 동의" bold onPress={toggleAll} />
            <Divider />
            {items.map(item => (
              <Checkbox
                key={item.id}
                state={item.checked ? 'checked' : 'unchecked'}
                label={item.label}
                sublabel={item.sublabel}
                onPress={() => toggleItem(item.id)}
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
    const states = ['unchecked', 'checked', 'indeterminate'] as const;
    const disabledStates = ['default', 'disabled'] as const;

    const resolve: Record<string, string> = {
      'color/background/brand':         semanticColor.backgroundBrand,
      'color/background/brandDisabled':  semanticColor.backgroundBrandDisabled,
      'color/background/disabled':       semanticColor.backgroundDisabled,
      'color/border/focus':              semanticColor.borderFocus,
      'color/border/active':             semanticColor.borderActive,
      'color/border/default':            semanticColor.borderDefault,
      'color/icon/onColor':              semanticColor.iconOnColor,
      'color/text/primary':              semanticColor.textPrimary,
      'color/text/secondary':            semanticColor.textSecondary,
      'color/text/tertiary':             semanticColor.textTertiary,
    };
    const r = (token: string) => resolve[token] ?? token;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 Checkbox 전체 조합 스펙입니다."
          badge="디자인"
        >
          {states.map(checkState =>
            disabledStates.map(dis => {
              const box = BOX_TOKEN_MAP[checkState][dis];
              const lbl = LABEL_TOKEN_MAP[dis];
              return (
                <View key={`${checkState}-${dis}`}>
                  <TokenSpecTable
                    title={`${checkState} / ${dis}`}
                    rows={[
                      { property: 'Box 배경',       token: box.boxBg,     value: r(box.boxBg),     type: 'color' },
                      { property: 'Box 테두리',     token: box.boxBorder, value: r(box.boxBorder), type: 'color' },
                      { property: '체크 아이콘',     token: box.icon,      value: r(box.icon),      type: 'color' },
                      { property: '라벨 텍스트',     token: lbl.label,     value: r(lbl.label),     type: 'color' },
                      { property: '서브라벨 텍스트', token: lbl.sublabel,  value: r(lbl.sublabel),  type: 'color' },
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
              { property: 'Box 크기 (small)',  token: '—',               value: '18×18',     type: 'size' },
              { property: 'Box 크기 (medium)', token: '—',               value: '22×22',     type: 'size' },
              { property: 'Box 라디우스 (small)', token: '—',            value: 4,            type: 'size' },
              { property: 'Box 라디우스 (medium)', token: '—',           value: 5,            type: 'size' },
              { property: 'Box-라벨 간격 (small)', token: 'spacing/small', value: spacing.small, type: 'size' },
              { property: 'Box-라벨 간격 (medium)', token: '—',          value: 10,           type: 'size' },
              { property: '라벨 타이포',       token: 'Body 2 / Label 1', value: '15px / 14px' },
              { property: '서브라벨 타이포',   token: 'Label 2 / Caption', value: '14px / 13px' },
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
        description="개발자를 위한 Checkbox 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { Checkbox } from '@design-system/components/Checkbox';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`const [checked, setChecked] = useState(false);

<Checkbox
  state={checked ? 'checked' : 'unchecked'}
  label="이용약관에 동의합니다."
  onPress={() => setChecked(!checked)}
/>`}
        />

        <CodeBlock
          title="전체 선택 + 개별 선택 패턴"
          code={`const allChecked = items.every(i => i.checked);
const someChecked = items.some(i => i.checked);
const allState = allChecked ? 'checked' : someChecked ? 'indeterminate' : 'unchecked';

<Checkbox state={allState} label="전체 동의" bold onPress={toggleAll} />
{items.map(item => (
  <Checkbox
    key={item.id}
    state={item.checked ? 'checked' : 'unchecked'}
    label={item.label}
    onPress={() => toggle(item.id)}
  />
))}`}
        />

        <CodeBlock
          title="서브라벨 & 컴팩트 모드"
          code={`<Checkbox
  state="checked"
  label="마케팅 수신 동의"
  sublabel="이벤트, 혜택 정보를 받아보실 수 있습니다."
/>

<Checkbox state="checked" label="컴팩트 모드" tight />`}
        />
      </Section>
    </View>
  ),
};
