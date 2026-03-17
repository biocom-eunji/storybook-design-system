import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../src/components/Checkbox';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    state: { control: 'select', options: ['unchecked', 'checked', 'indeterminate'], description: '체크박스 상태' },
    size: { control: 'select', options: ['small', 'medium'], description: '체크박스 크기' },
    label: { control: 'text', description: '라벨 텍스트' },
    sublabel: { control: 'text', description: '보조 라벨 텍스트' },
    disabled: { control: 'boolean', description: '비활성화 상태' },
    bold: { control: 'boolean', description: '라벨 굵게 표시' },
    tight: { control: 'boolean', description: '좁은 간격 모드' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    state: 'checked',
    size: 'medium',
    label: '동의합니다',
    sublabel: '보조 설명 텍스트',
    disabled: false,
    bold: false,
    tight: false,
  },
};

// ─── 2. 세 가지 상태 ────────────────────────────────────────

export const ThreeStates: Story = {
  name: '세 가지 상태',
  render: () => (
    <Section
      title="세 가지 상태"
      description="체크박스는 unchecked, checked, indeterminate 세 가지 상태를 가집니다."
    >
      <CompareGrid
        items={[
          {
            label: 'Unchecked (미선택)',
            content: (
              <Col gap={spacing.xs}>
                <StateLabel>미선택</StateLabel>
                <Checkbox state="unchecked" label="미선택 상태" />
              </Col>
            ),
          },
          {
            label: 'Checked (선택)',
            content: (
              <Col gap={spacing.xs}>
                <StateLabel>선택</StateLabel>
                <Checkbox state="checked" label="선택 상태" />
              </Col>
            ),
          },
          {
            label: 'Indeterminate (부분 선택)',
            content: (
              <Col gap={spacing.xs}>
                <StateLabel>부분 선택</StateLabel>
                <Checkbox state="indeterminate" label="부분 선택 상태" />
              </Col>
            ),
          },
        ]}
      />
    </Section>
  ),
};

// ─── 3. 모든 변형 ───────────────────────────────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  render: () => {
    const states: Array<{ state: 'unchecked' | 'checked' | 'indeterminate'; label: string }> = [
      { state: 'unchecked', label: '미선택' },
      { state: 'checked', label: '선택' },
      { state: 'indeterminate', label: '부분 선택' },
    ];
    return (
      <Section
        title="모든 변형"
        description="3가지 상태 x 활성/비활성 x 2가지 사이즈의 전체 조합입니다."
      >
        <Col gap={spacing['3xl']}>
          {/* Small */}
          <Col gap={spacing.lg}>
            <StateLabel>Small 사이즈</StateLabel>
            <Row gap={spacing['3xl']} wrap align="flex-start">
              <Col gap={spacing.sm}>
                <StateLabel>활성</StateLabel>
                <CompareGrid
                  items={states.map(s => ({
                    label: s.label,
                    content: <Checkbox state={s.state} size="small" />,
                  }))}
                />
              </Col>
              <Col gap={spacing.sm}>
                <StateLabel>비활성</StateLabel>
                <CompareGrid
                  items={states.map(s => ({
                    label: s.label,
                    content: <Checkbox state={s.state} size="small" disabled />,
                  }))}
                />
              </Col>
            </Row>
          </Col>

          <Divider />

          {/* Medium */}
          <Col gap={spacing.lg}>
            <StateLabel>Medium 사이즈</StateLabel>
            <Row gap={spacing['3xl']} wrap align="flex-start">
              <Col gap={spacing.sm}>
                <StateLabel>활성</StateLabel>
                <CompareGrid
                  items={states.map(s => ({
                    label: s.label,
                    content: <Checkbox state={s.state} size="medium" />,
                  }))}
                />
              </Col>
              <Col gap={spacing.sm}>
                <StateLabel>비활성</StateLabel>
                <CompareGrid
                  items={states.map(s => ({
                    label: s.label,
                    content: <Checkbox state={s.state} size="medium" disabled />,
                  }))}
                />
              </Col>
            </Row>
          </Col>
        </Col>
      </Section>
    );
  },
};

// ─── 4. 라벨 옵션 ───────────────────────────────────────────

export const LabelOptions: Story = {
  name: '라벨 옵션',
  render: () => (
    <Section title="라벨 옵션" description="라벨, 보조 라벨, bold, tight 등 다양한 라벨 구성을 확인합니다.">
      <Col gap={spacing['2xl']}>
        <Col gap={spacing.sm}>
          <StateLabel>라벨만</StateLabel>
          <Checkbox state="checked" label="라벨만 있는 체크박스" />
          <Checkbox state="unchecked" label="라벨만 있는 체크박스" />
        </Col>

        <Divider />

        <Col gap={spacing.sm}>
          <StateLabel>라벨 + 보조 라벨</StateLabel>
          <Checkbox state="checked" label="메인 라벨" sublabel="보조 설명이 여기에 표시됩니다" />
          <Checkbox state="unchecked" label="메인 라벨" sublabel="보조 설명이 여기에 표시됩니다" />
        </Col>

        <Divider />

        <Col gap={spacing.sm}>
          <StateLabel>Bold 라벨</StateLabel>
          <Row gap={spacing['2xl']} wrap>
            <Checkbox state="checked" label="일반 라벨" sublabel="기본 굵기" />
            <Checkbox state="checked" label="굵은 라벨" sublabel="bold 적용" bold />
          </Row>
        </Col>

        <Divider />

        <Col gap={spacing.sm}>
          <StateLabel>Tight 모드</StateLabel>
          <View style={{ maxWidth: 300 }}>
            <Col gap={spacing.sm}>
              <Checkbox state="checked" label="좁은 간격" sublabel="tight 모드에서는 간격이 줄어듭니다" tight />
              <Checkbox state="unchecked" label="좁은 간격" sublabel="tight 모드에서는 간격이 줄어듭니다" tight />
            </Col>
          </View>
        </Col>
      </Col>
    </Section>
  ),
};

// ─── 5. 부모-자식 연동 ──────────────────────────────────────

export const ParentChild: Story = {
  name: '부모-자식 연동',
  render: () => {
    const [items, setItems] = useState([false, true, false]);
    const allChecked = items.every(Boolean);
    const someChecked = items.some(Boolean);
    const parentState: 'checked' | 'indeterminate' | 'unchecked' = allChecked
      ? 'checked'
      : someChecked
        ? 'indeterminate'
        : 'unchecked';

    const toggleAll = () => {
      const next = !allChecked;
      setItems(items.map(() => next));
    };

    const toggleItem = (i: number) =>
      setItems(prev => { const n = [...prev]; n[i] = !n[i]; return n; });

    const children = ['이용약관 동의', '개인정보 수집 동의', '마케팅 수신 동의'];

    return (
      <Section
        title="부모-자식 연동"
        description="부모 체크박스가 자식의 상태에 따라 indeterminate로 전환됩니다. 직접 클릭해 보세요."
      >
        <Col gap={spacing.xs}>
          <Checkbox
            state={parentState}
            label="전체 동의"
            bold
            onPress={toggleAll}
          />
          <View style={{ paddingLeft: spacing['2xl'] }}>
            <Col gap={spacing.xs}>
              {children.map((name, i) => (
                <Checkbox
                  key={i}
                  state={items[i] ? 'checked' : 'unchecked'}
                  label={name}
                  onPress={() => toggleItem(i)}
                />
              ))}
            </Col>
          </View>
        </Col>
      </Section>
    );
  },
};

// ─── 6. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <Section title="디자인 스펙" description="디자이너를 위한 사이즈 및 컬러 토큰 명세입니다.">
      <Col gap={spacing['2xl']}>
        <SpecTable
          title="Small 사이즈"
          rows={[
            { label: '박스 크기', value: '18px', token: '—' },
            { label: '모서리 반경', value: `${radius.xs}px`, token: 'radius.xs' },
            { label: '라벨 간격', value: `${spacing.sm}px`, token: 'spacing.sm' },
            { label: '라벨 폰트 크기', value: `${fontSize.sm}px`, token: 'fontSize.sm' },
          ]}
        />
        <SpecTable
          title="Medium 사이즈"
          rows={[
            { label: '박스 크기', value: '22px', token: '—' },
            { label: '모서리 반경', value: '5px', token: '—' },
            { label: '라벨 간격', value: '10px', token: '—' },
            { label: '라벨 폰트 크기', value: `${fontSize.md}px`, token: 'fontSize.md' },
          ]}
        />
        <SpecTable
          title="컬러"
          rows={[
            { label: '미선택 테두리', value: coolNeutral[90], token: 'coolNeutral[90]' },
            { label: '선택/부분선택 채움', value: mint[45], token: 'mint[45]' },
            { label: '비활성 상태', value: mint[90], token: 'mint[90]' },
          ]}
        />
      </Col>
    </Section>
  ),
};

// ─── 7. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <Section title="사용 가이드" description="개발자를 위한 코드 사용 예시입니다.">
      <Col gap={spacing.lg}>
        <CodeBlock
          title="기본 사용"
          code={`<Checkbox state="unchecked" onPress={() => {}} />`}
        />
        <CodeBlock
          title="라벨과 함께 사용"
          code={`<Checkbox
  state="checked"
  label="동의합니다"
  sublabel="보조 설명 텍스트"
  onPress={() => handleToggle()}
/>`}
        />
        <CodeBlock
          title="Indeterminate 상태 (부모-자식 패턴)"
          code={`const allChecked = items.every(Boolean);
const someChecked = items.some(Boolean);
const parentState = allChecked
  ? 'checked'
  : someChecked
    ? 'indeterminate'
    : 'unchecked';

<Checkbox
  state={parentState}
  label="전체 선택"
  bold
  onPress={() => {
    const next = !allChecked;
    setItems(items.map(() => next));
  }}
/>`}
        />
        <CodeBlock
          title="사이즈 변경"
          code={`<Checkbox state="checked" size="small" label="작은 체크박스" />
<Checkbox state="checked" size="medium" label="중간 체크박스" />`}
        />
        <CodeBlock
          title="Bold 라벨"
          code={`<Checkbox state="checked" label="굵은 라벨" bold />`}
        />
        <CodeBlock
          title="비활성화"
          code={`<Checkbox state="checked" disabled label="비활성 체크박스" />`}
        />
      </Col>
    </Section>
  ),
};
