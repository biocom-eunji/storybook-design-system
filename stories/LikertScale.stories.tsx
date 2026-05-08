import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LikertScale } from '../src/components/LikertScale';
import { Section, StateLabel, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle, radius } from '../src/tokens/theme';

const meta: Meta<typeof LikertScale> = {
  title: 'Input/LikertScale',
  component: LikertScale,
  argTypes: {
    steps:      { control: { type: 'range', min: 3, max: 7, step: 1 } },
    colorMode:  { control: 'select', options: ['neutral', 'bipolar'] },
    startLabel: { control: 'text' },
    endLabel:   { control: 'text' },
    disabled:   { control: 'boolean' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LikertScale>;

// ─── 1. Playground ──────────────────────────────────────────

export const Playground: Story = {
  render: (args) => {
    const [val, setVal] = useState<number | null>(null);
    return (
      <View style={{ maxWidth: 375 }}>
        <LikertScale
          steps={args.steps || 4}
          value={val}
          onChange={setVal}
          startLabel={args.startLabel || '그렇지 않다'}
          endLabel={args.endLabel || '그렇다'}
          colorMode={args.colorMode || 'neutral'}
          disabled={args.disabled}
        />
      </View>
    );
  },
};

// ─── 2. Default (Neutral) ───────────────────────────────────

export const Default: Story = {
  name: 'Default (Neutral 4단계)',
  render: () => {
    const [val, setVal] = useState<number | null>(null);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="Default" description="4단계 neutral 모드, 미선택 상태입니다.">
          <View style={{ maxWidth: 375 }}>
            <LikertScale
              steps={4}
              value={val}
              onChange={setVal}
              startLabel="그렇지 않다"
              endLabel="그렇다"
            />
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 3. Bipolar 4단계 ───────────────────────────────────────

export const FourStepsBipolar: Story = {
  name: 'Bipolar 4단계',
  render: () => {
    const [val, setVal] = useState<number | null>(1);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="Bipolar 4단계" description="양극 색상 그라데이션으로 부정(빨강)→긍정(초록)을 표현합니다.">
          <View style={{ maxWidth: 375 }}>
            <LikertScale
              steps={4}
              value={val}
              onChange={setVal}
              startLabel="전혀 아니다"
              endLabel="매우 그렇다"
              colorMode="bipolar"
            />
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 4. Bipolar 5단계 ───────────────────────────────────────

export const FiveStepsBipolar: Story = {
  name: 'Bipolar 5단계',
  render: () => {
    const [val, setVal] = useState<number | null>(2);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="Bipolar 5단계" description="중앙에 중립(회색) 단계가 포함된 5단계 양극 척도입니다.">
          <View style={{ maxWidth: 375 }}>
            <LikertScale
              steps={5}
              value={val}
              onChange={setVal}
              startLabel="매우 나쁨"
              endLabel="매우 좋음"
              colorMode="bipolar"
            />
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 5. Neutral 7단계 ───────────────────────────────────────

export const SevenStepsNeutral: Story = {
  name: 'Neutral 7단계',
  render: () => {
    const [val, setVal] = useState<number | null>(4);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="Neutral 7단계" description="7단계 중립 색상 척도입니다. 모든 옵션이 brand 색상으로 통일됩니다.">
          <View style={{ maxWidth: 375 }}>
            <LikertScale
              steps={7}
              value={val}
              onChange={setVal}
              startLabel="전혀 동의하지 않음"
              endLabel="매우 동의함"
            />
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 6. PreSelected ─────────────────────────────────────────

export const PreSelected: Story = {
  name: '초기값 지정',
  render: () => {
    const [val, setVal] = useState<number | null>(2);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="초기값 지정" description="value prop으로 초기 선택 상태를 지정합니다.">
          <View style={{ maxWidth: 375 }}>
            <LikertScale
              steps={4}
              value={val}
              onChange={setVal}
              startLabel="그렇지 않다"
              endLabel="그렇다"
              colorMode="bipolar"
            />
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 7. Disabled ────────────────────────────────────────────

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Disabled" description="비활성화 상태에서는 인터랙션이 차단됩니다.">
        <View style={{ maxWidth: 375 }}>
          <LikertScale
            steps={4}
            value={1}
            onChange={() => {}}
            startLabel="그렇지 않다"
            endLabel="그렇다"
            colorMode="bipolar"
            disabled
          />
        </View>
      </Section>
    </View>
  ),
};

// ─── 8. InContext (문진 화면) ────────────────────────────────

export const InContext: Story = {
  name: '실전 예시: 문진',
  render: () => {
    const questions = [
      '두통이나 편두통이 있다',
      '탈수 증상이 자주 있다',
      '수면 시 깊이 잠들지 못한다',
      '일상 활동 시 피로감을 느낀다',
    ];
    const [answers, setAnswers] = useState<(number | null)[]>(
      Array(questions.length).fill(null),
    );

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="문진 화면" description="여러 질문에 LikertScale을 반복 배치한 실제 설문 UI 예시입니다.">
          <View style={{
            maxWidth: 375,
            padding: spacing.xlarge,
            backgroundColor: semanticColor.backgroundPrimary,
            borderRadius: radius.large,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            gap: spacing['2xlarge'],
          }}>
            <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary,
            }}>
              건강 상태 체크
            </Text>

            {questions.map((q, qi) => (
              <View key={qi} style={{ gap: spacing.medium }}>
                <Text style={{
                  fontSize: textStyle.body2.fontSize,
                  fontWeight: '500',
                  color: semanticColor.textPrimary,
                  lineHeight: textStyle.body2.lineHeight,
                }}>
                  {qi + 1}. {q}
                </Text>
                <LikertScale
                  steps={4}
                  value={answers[qi]}
                  onChange={(idx) => {
                    const next = [...answers];
                    next[qi] = idx;
                    setAnswers(next);
                  }}
                  startLabel="그렇지 않다"
                  endLabel="그렇다"
                  colorMode="bipolar"
                  name={`question-${qi}`}
                />
              </View>
            ))}
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 9. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="디자인 스펙" badge="디자인">
        <TokenSpecTable
          title="원형 선택지"
          rows={[
            { property: '크기',          token: '—',                       value: 32,                             type: 'size' },
            { property: '터치 영역',     token: '—',                       value: 44,                             type: 'size' },
            { property: '비선택 border',  token: 'color/border/active',     value: semanticColor.borderActive,     type: 'color' },
            { property: 'border 두께',    token: '—',                       value: 2,                              type: 'size' },
            { property: '선택 fill (neutral)', token: 'color/background/brand', value: semanticColor.backgroundBrand, type: 'color' },
          ]}
        />
        <Divider />
        <TokenSpecTable
          title="Bipolar 색상"
          rows={[
            { property: 'critical',  token: 'color/background/error',    value: semanticColor.backgroundError,   type: 'color' },
            { property: 'warning',   token: 'color/background/warning',  value: semanticColor.backgroundWarning, type: 'color' },
            { property: 'neutral',   token: 'color/background/off',      value: semanticColor.backgroundOff,     type: 'color' },
            { property: 'caution',   token: 'color/background/caution',  value: semanticColor.backgroundCaution, type: 'color' },
            { property: 'success',   token: 'color/background/success',  value: semanticColor.backgroundSuccess, type: 'color' },
          ]}
        />
        <Divider />
        <TokenSpecTable
          title="레이블"
          rows={[
            { property: '타이포',        token: 'Caption',                  value: `${textStyle.caption.fontSize}px / Regular`, type: 'typography' },
            { property: 'neutral 색상',  token: 'color/text/secondary',     value: semanticColor.textSecondary,    type: 'color' },
            { property: 'bipolar start', token: 'color/text/error',         value: semanticColor.textError,        type: 'color' },
            { property: 'bipolar end',   token: 'color/text/success',       value: semanticColor.textSuccess,      type: 'color' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 10. 사용 가이드 ────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock
          title="Import"
          code={`import { LikertScale } from '@design-system/components/LikertScale';`}
        />
        <CodeBlock
          title="기본 사용"
          code={`const [value, setValue] = useState<number | null>(null);

<LikertScale
  steps={4}
  value={value}
  onChange={setValue}
  startLabel="그렇지 않다"
  endLabel="그렇다"
/>`}
        />
        <CodeBlock
          title="Bipolar 모드"
          code={`<LikertScale
  steps={5}
  value={value}
  onChange={setValue}
  startLabel="매우 나쁨"
  endLabel="매우 좋음"
  colorMode="bipolar"
/>`}
        />
      </Section>
    </View>
  ),
};
