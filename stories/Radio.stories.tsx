import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '../src/components/Radio';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof Radio> = {
  title: 'Input/Radio',
  component: Radio,
  argTypes: {
    checked: { control: 'boolean', description: '선택 상태' },
    size: { control: 'select', options: ['small', 'medium'], description: '라디오 크기' },
    label: { control: 'text', description: '라벨 텍스트' },
    sublabel: { control: 'text', description: '보조 라벨 텍스트' },
    disabled: { control: 'boolean', description: '비활성화 상태' },
    tight: { control: 'boolean', description: '좁은 간격 모드' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    checked: true,
    size: 'medium',
    label: '옵션 텍스트',
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
      description="라디오 버튼의 모든 상태를 한눈에 확인할 수 있습니다."
    >
      <Row gap={spacing['3xlarge']} wrap align="flex-start">
        <Col gap={spacing.large}>
          <StateLabel>Small - 활성</StateLabel>
          <CompareGrid
            items={[
              { label: '미선택', content: <Radio checked={false} size="small" /> },
              { label: '선택', content: <Radio checked size="small" /> },
            ]}
          />
        </Col>
        <Col gap={spacing.large}>
          <StateLabel>Small - 비활성</StateLabel>
          <CompareGrid
            items={[
              { label: '미선택', content: <Radio checked={false} size="small" disabled /> },
              { label: '선택', content: <Radio checked size="small" disabled /> },
            ]}
          />
        </Col>
        <Col gap={spacing.large}>
          <StateLabel>Medium - 활성</StateLabel>
          <CompareGrid
            items={[
              { label: '미선택', content: <Radio checked={false} size="medium" /> },
              { label: '선택', content: <Radio checked size="medium" /> },
            ]}
          />
        </Col>
        <Col gap={spacing.large}>
          <StateLabel>Medium - 비활성</StateLabel>
          <CompareGrid
            items={[
              { label: '미선택', content: <Radio checked={false} size="medium" disabled /> },
              { label: '선택', content: <Radio checked size="medium" disabled /> },
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
    <Section title="라벨 조합" description="라벨, 보조 라벨, tight 모드 등 다양한 라벨 조합을 확인합니다.">
      <Col gap={spacing['2xlarge']}>
        <Col gap={spacing.small}>
          <StateLabel>라벨만</StateLabel>
          <Radio checked label="라벨만 있는 라디오" />
          <Radio checked={false} label="라벨만 있는 라디오" />
        </Col>

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>라벨 + 보조 라벨</StateLabel>
          <Radio checked label="메인 라벨" sublabel="보조 설명 텍스트가 여기에 표시됩니다" />
          <Radio checked={false} label="메인 라벨" sublabel="보조 설명 텍스트가 여기에 표시됩니다" />
        </Col>

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>Tight 모드</StateLabel>
          <View style={{ maxWidth: 300 }}>
            <Col gap={spacing.small}>
              <Radio checked label="좁은 간격" sublabel="tight 모드에서는 간격이 줄어듭니다" tight />
              <Radio checked={false} label="좁은 간격" sublabel="tight 모드에서는 간격이 줄어듭니다" tight />
            </Col>
          </View>
        </Col>
      </Col>
    </Section>
  ),
};

// ─── 4. 라디오 그룹 ─────────────────────────────────────────

export const RadioGroup: Story = {
  name: '라디오 그룹',
  render: () => {
    const [selected, setSelected] = useState(0);
    const options = [
      { label: '이메일로 받기', sublabel: '등록된 이메일 주소로 알림을 발송합니다' },
      { label: 'SMS로 받기', sublabel: '등록된 휴대폰 번호로 문자를 발송합니다' },
      { label: '알림 받지 않기', sublabel: '모든 알림을 중지합니다' },
    ];
    return (
      <Section title="라디오 그룹" description="여러 옵션 중 하나를 선택하는 인터랙티브 예시입니다. 직접 클릭해 보세요.">
        <Col gap={spacing.xsmall}>
          {options.map((opt, i) => (
            <Radio
              key={i}
              checked={selected === i}
              label={opt.label}
              sublabel={opt.sublabel}
              onPress={() => setSelected(i)}
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
      <Col gap={spacing['2xlarge']}>
        <SpecTable
          title="Small 사이즈"
          rows={[
            { label: '외곽 원 크기', value: '18px', token: '—' },
            { label: '내부 원 크기', value: '8px', token: '—' },
            { label: '라벨 간격', value: `${spacing.small}px`, token: 'spacing.small' },
            { label: '라벨 폰트 크기', value: `${fontSize.small}px`, token: 'fontSize.small' },
          ]}
        />
        <SpecTable
          title="Medium 사이즈"
          rows={[
            { label: '외곽 원 크기', value: '22px', token: '—' },
            { label: '내부 원 크기', value: '10px', token: '—' },
            { label: '라벨 간격', value: '10px', token: '—' },
            { label: '라벨 폰트 크기', value: `${fontSize.medium}px`, token: 'fontSize.medium' },
          ]}
        />
        <SpecTable
          title="컬러"
          rows={[
            { label: '미선택 테두리', value: coolNeutral[90], token: 'coolNeutral[90]' },
            { label: '선택 채움', value: mint[45], token: 'mint[45]' },
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
      <Col gap={spacing.large}>
        <CodeBlock
          title="기본 사용"
          code={`<Radio checked={false} onPress={() => {}} />`}
        />
        <CodeBlock
          title="라벨과 함께 사용"
          code={`<Radio
  checked={true}
  label="옵션 텍스트"
  sublabel="보조 설명"
  onPress={() => handleSelect()}
/>`}
        />
        <CodeBlock
          title="라디오 그룹 패턴"
          code={`const [selected, setSelected] = useState(0);
const options = ['옵션 A', '옵션 B', '옵션 C'];

{options.map((opt, i) => (
  <Radio
    key={i}
    checked={selected === i}
    label={opt}
    onPress={() => setSelected(i)}
  />
))}`}
        />
        <CodeBlock
          title="사이즈 변경"
          code={`<Radio checked size="small" label="작은 라디오" />
<Radio checked size="medium" label="중간 라디오" />`}
        />
        <CodeBlock
          title="비활성화"
          code={`<Radio checked disabled label="비활성 라디오" />`}
        />
      </Col>
    </Section>
  ),
};
