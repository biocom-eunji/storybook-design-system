import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckMark } from '../src/components/CheckMark';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof CheckMark> = {
  title: 'Form/CheckMark',
  component: CheckMark,
  argTypes: {
    checked: { control: 'boolean', description: '선택 상태' },
    size: { control: 'select', options: ['small', 'medium'], description: '체크마크 크기' },
    label: { control: 'text', description: '라벨 텍스트' },
    sublabel: { control: 'text', description: '보조 라벨 텍스트' },
    disabled: { control: 'boolean', description: '비활성화 상태' },
    tight: { control: 'boolean', description: '좁은 간격 모드' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckMark>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    checked: true,
    size: 'medium',
    label: '항목 텍스트',
    sublabel: '보조 설명 텍스트',
    disabled: false,
    tight: false,
  },
};

// ─── 2. 모든 변형 ───────────────────────────────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  render: () => (
    <Section
      title="모든 변형"
      description="체크 아이콘만 사용하는 간결한 선택 컴포넌트입니다."
    >
      <Row gap={spacing['3xl']} wrap align="flex-start">
        <Col gap={spacing.lg}>
          <StateLabel>Small - 활성</StateLabel>
          <CompareGrid
            items={[
              { label: '미선택', content: <CheckMark checked={false} size="small" /> },
              { label: '선택', content: <CheckMark checked size="small" /> },
            ]}
          />
        </Col>
        <Col gap={spacing.lg}>
          <StateLabel>Small - 비활성</StateLabel>
          <CompareGrid
            items={[
              { label: '미선택', content: <CheckMark checked={false} size="small" disabled /> },
              { label: '선택', content: <CheckMark checked size="small" disabled /> },
            ]}
          />
        </Col>
        <Col gap={spacing.lg}>
          <StateLabel>Medium - 활성</StateLabel>
          <CompareGrid
            items={[
              { label: '미선택', content: <CheckMark checked={false} size="medium" /> },
              { label: '선택', content: <CheckMark checked size="medium" /> },
            ]}
          />
        </Col>
        <Col gap={spacing.lg}>
          <StateLabel>Medium - 비활성</StateLabel>
          <CompareGrid
            items={[
              { label: '미선택', content: <CheckMark checked={false} size="medium" disabled /> },
              { label: '선택', content: <CheckMark checked size="medium" disabled /> },
            ]}
          />
        </Col>
      </Row>
    </Section>
  ),
};

// ─── 3. 라벨 조합 ───────────────────────────────────────────

export const WithLabels: Story = {
  name: '라벨 조합',
  render: () => (
    <Section title="라벨 조합" description="라벨, 보조 라벨, tight 모드 등 다양한 라벨 구성을 확인합니다.">
      <Col gap={spacing['2xl']}>
        <Col gap={spacing.sm}>
          <StateLabel>라벨만</StateLabel>
          <CheckMark checked label="선택된 항목" />
          <CheckMark checked={false} label="미선택 항목" />
        </Col>

        <Divider />

        <Col gap={spacing.sm}>
          <StateLabel>라벨 + 보조 라벨</StateLabel>
          <CheckMark checked label="메인 라벨" sublabel="보조 설명이 여기에 표시됩니다" />
          <CheckMark checked={false} label="메인 라벨" sublabel="보조 설명이 여기에 표시됩니다" />
        </Col>

        <Divider />

        <Col gap={spacing.sm}>
          <StateLabel>Tight 모드</StateLabel>
          <View style={{ maxWidth: 300 }}>
            <Col gap={spacing.sm}>
              <CheckMark checked label="좁은 간격" sublabel="tight 모드에서는 간격이 줄어듭니다" tight />
              <CheckMark checked={false} label="좁은 간격" sublabel="tight 모드에서는 간격이 줄어듭니다" tight />
            </Col>
          </View>
        </Col>
      </Col>
    </Section>
  ),
};

// ─── 4. 인터랙티브 ──────────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브',
  render: () => {
    const [items, setItems] = useState([false, true, false, false]);
    const labels = [
      { label: '알림 수신 동의', sublabel: '마케팅 및 서비스 알림을 수신합니다' },
      { label: '이메일 수신 동의', sublabel: '이메일로 소식을 받아봅니다' },
      { label: 'SMS 수신 동의', sublabel: '문자로 소식을 받아봅니다' },
      { label: '야간 알림 동의', sublabel: '21시~08시 사이 알림을 수신합니다' },
    ];
    const toggle = (i: number) =>
      setItems(prev => { const n = [...prev]; n[i] = !n[i]; return n; });
    return (
      <Section title="인터랙티브" description="여러 항목을 자유롭게 선택/해제할 수 있는 예시입니다. 직접 클릭해 보세요.">
        <Col gap={spacing.xs}>
          {labels.map((opt, i) => (
            <CheckMark
              key={i}
              checked={items[i]}
              label={opt.label}
              sublabel={opt.sublabel}
              onPress={() => toggle(i)}
            />
          ))}
        </Col>
      </Section>
    );
  },
};

// ─── 5. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <Section title="디자인 스펙" description="디자이너를 위한 사이즈 및 컬러 토큰 명세입니다.">
      <Col gap={spacing['2xl']}>
        <SpecTable
          title="Small 사이즈"
          rows={[
            { label: '아이콘 크기', value: '18px', token: '—' },
            { label: '라벨 간격', value: `${spacing.sm}px`, token: 'spacing.sm' },
            { label: '라벨 폰트 크기', value: `${fontSize.sm}px`, token: 'fontSize.sm' },
          ]}
        />
        <SpecTable
          title="Medium 사이즈"
          rows={[
            { label: '아이콘 크기', value: '22px', token: '—' },
            { label: '라벨 간격', value: '10px', token: '—' },
            { label: '라벨 폰트 크기', value: `${fontSize.md}px`, token: 'fontSize.md' },
          ]}
        />
        <SpecTable
          title="컬러"
          rows={[
            { label: '미선택 아이콘', value: mint[90], token: 'mint[90]' },
            { label: '선택 아이콘', value: mint[45], token: 'mint[45]' },
            { label: '비활성 상태', value: coolNeutral[80], token: 'coolNeutral[80]' },
          ]}
        />
      </Col>
    </Section>
  ),
};

// ─── 6. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <Section title="사용 가이드" description="개발자를 위한 코드 사용 예시입니다.">
      <Col gap={spacing.lg}>
        <CodeBlock
          title="기본 사용"
          code={`<CheckMark checked={false} onPress={() => {}} />`}
        />
        <CodeBlock
          title="라벨과 함께 사용"
          code={`<CheckMark
  checked={true}
  label="항목 텍스트"
  sublabel="보조 설명"
  onPress={() => handleToggle()}
/>`}
        />
        <CodeBlock
          title="다중 선택 패턴"
          code={`const [items, setItems] = useState([false, false, false]);

{options.map((opt, i) => (
  <CheckMark
    key={i}
    checked={items[i]}
    label={opt}
    onPress={() => {
      setItems(prev => {
        const next = [...prev];
        next[i] = !next[i];
        return next;
      });
    }}
  />
))}`}
        />
        <CodeBlock
          title="사이즈 변경"
          code={`<CheckMark checked size="small" label="작은 체크" />
<CheckMark checked size="medium" label="중간 체크" />`}
        />
        <CodeBlock
          title="비활성화"
          code={`<CheckMark checked disabled label="비활성 항목" />`}
        />
      </Col>
    </Section>
  ),
};
