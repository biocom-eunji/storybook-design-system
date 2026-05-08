import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioCardGroup, RadioCard } from '../src/components/RadioCard';
import { Section, StateLabel, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle, radius, fontWeight } from '../src/tokens/theme';

const meta: Meta<typeof RadioCardGroup> = {
  title: 'Input/RadioCard',
  component: RadioCardGroup,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RadioCardGroup>;

// ─── 1. Playground ──────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [val, setVal] = useState<string | null>('low');
    return (
      <View style={{ maxWidth: 375 }}>
        <RadioCardGroup value={val} onChange={setVal} name="frequency">
          <RadioCard value="none" label="해당 없음" />
          <RadioCard value="low" label="가끔 (월 1~2회)" />
          <RadioCard value="mid" label="자주 (주 1~2회)" />
          <RadioCard value="high" label="매일" />
        </RadioCardGroup>
      </View>
    );
  },
};

// ─── 2. Default ─────────────────────────────────────────────

export const Default: Story = {
  name: 'Default (선택됨)',
  render: () => {
    const [val, setVal] = useState<string | null>('none');
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="Default" description="첫 번째 옵션이 선택된 상태입니다.">
          <View style={{ maxWidth: 375 }}>
            <RadioCardGroup value={val} onChange={setVal} name="drinking">
              <RadioCard value="none" label="술을 안 마신다" />
              <RadioCard value="low" label="월 1회 이하" />
              <RadioCard value="mid" label="월 2~4회" />
              <RadioCard value="high" label="주 2~4회" />
            </RadioCardGroup>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 3. Unselected ──────────────────────────────────────────

export const Unselected: Story = {
  name: '미선택 상태',
  render: () => {
    const [val, setVal] = useState<string | null>(null);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="미선택 상태" description="아무것도 선택되지 않은 초기 상태입니다.">
          <View style={{ maxWidth: 375 }}>
            <RadioCardGroup value={val} onChange={setVal} name="exercise">
              <RadioCard value="none" label="운동을 하지 않는다" />
              <RadioCard value="light" label="가벼운 운동 (산책, 스트레칭)" />
              <RadioCard value="moderate" label="중간 강도 운동 (조깅, 수영)" />
              <RadioCard value="intense" label="고강도 운동 (웨이트, HIIT)" />
            </RadioCardGroup>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 4. WithDescription ─────────────────────────────────────

export const WithDescription: Story = {
  name: 'Description 포함',
  render: () => {
    const [val, setVal] = useState<string | null>('balanced');
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="Description 포함" description="label 아래 보조 설명 텍스트를 추가할 수 있습니다.">
          <View style={{ maxWidth: 375 }}>
            <RadioCardGroup value={val} onChange={setVal} name="diet-type">
              <RadioCard value="balanced" label="균형 잡힌 식단" description="탄수화물, 단백질, 지방을 고르게 섭취" />
              <RadioCard value="low-carb" label="저탄수화물 식단" description="탄수화물 섭취를 줄이고 단백질 위주로" />
              <RadioCard value="vegetarian" label="채식 식단" description="육류를 제외하고 식물성 식품 위주로" />
            </RadioCardGroup>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 5. LongLabels ──────────────────────────────────────────

export const LongLabels: Story = {
  name: '긴 텍스트',
  render: () => {
    const [val, setVal] = useState<string | null>('a');
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="긴 텍스트" description="긴 레이블이 자연스럽게 줄바꿈되는지 확인합니다.">
          <View style={{ maxWidth: 375 }}>
            <RadioCardGroup value={val} onChange={setVal} name="long">
              <RadioCard
                value="a"
                label="매일 규칙적인 시간에 충분한 수면을 취하고 있으며 기상 시 개운함을 느낀다"
              />
              <RadioCard
                value="b"
                label="수면 시간이 불규칙하거나 충분하지 않아 낮 시간에 졸음이 오는 경우가 있다"
              />
            </RadioCardGroup>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 6. Disabled ────────────────────────────────────────────

export const DisabledGroup: Story = {
  name: 'Disabled (전체)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Disabled" description="그룹 전체가 비활성화된 상태입니다.">
        <View style={{ maxWidth: 375 }}>
          <RadioCardGroup value="low" onChange={() => {}} name="disabled-group" disabled>
            <RadioCard value="none" label="술을 안 마신다" />
            <RadioCard value="low" label="월 1회 이하" />
            <RadioCard value="mid" label="월 2~4회" />
          </RadioCardGroup>
        </View>
      </Section>
    </View>
  ),
};

// ─── 7. PartiallyDisabled ───────────────────────────────────

export const PartiallyDisabled: Story = {
  name: 'Disabled (일부)',
  render: () => {
    const [val, setVal] = useState<string | null>('low');
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="일부 비활성화" description="특정 카드만 개별적으로 비활성화할 수 있습니다.">
          <View style={{ maxWidth: 375 }}>
            <RadioCardGroup value={val} onChange={setVal} name="partial">
              <RadioCard value="none" label="해당 없음" />
              <RadioCard value="low" label="월 1회 이하" />
              <RadioCard value="mid" label="월 2~4회" disabled />
              <RadioCard value="high" label="주 2~4회" disabled />
            </RadioCardGroup>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 8. InContext (설문 화면) ────────────────────────────────

export const InContext: Story = {
  name: '실전 예시: 설문',
  render: () => {
    const [val, setVal] = useState<string | null>(null);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="설문 화면" description="음주 습관 관련 질문 화면을 재현합니다.">
          <View style={{
            maxWidth: 375,
            padding: spacing.xlarge,
            backgroundColor: semanticColor.backgroundPrimary,
            borderRadius: radius.large,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            gap: spacing.xlarge,
          }}>
            <View style={{ gap: spacing.small }}>
              <Text style={{
                fontSize: textStyle.headline.fontSize,
                fontWeight: '600',
                color: semanticColor.textPrimary,
              }}>
                음주 습관
              </Text>
              <Text style={{
                fontSize: textStyle.body2.fontSize,
                color: semanticColor.textSecondary,
                lineHeight: textStyle.body2.lineHeight,
              }}>
                평균적인 음주 횟수를 선택해주세요
              </Text>
            </View>
            <RadioCardGroup value={val} onChange={setVal} name="drinking-survey">
              <RadioCard value="none" label="술을 안 마신다" />
              <RadioCard value="low" label="월 1회 이하" description="사교 모임에서 가끔" />
              <RadioCard value="mid" label="월 2~4회" description="주말에 가끔" />
              <RadioCard value="high" label="주 2~4회" description="규칙적으로 음주" />
              <RadioCard value="daily" label="거의 매일" description="하루 한 잔 이상" />
            </RadioCardGroup>
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
          title="카드 컨테이너"
          rows={[
            { property: '배경',          token: 'color/background/primary',  value: semanticColor.backgroundPrimary,  type: 'color' },
            { property: '비선택 테두리',  token: 'color/border/default',      value: semanticColor.borderDefault,     type: 'color' },
            { property: '선택 테두리',    token: 'color/border/focus',        value: semanticColor.borderFocus,       type: 'color' },
            { property: '선택 border 두께', token: '—',                       value: 2,                               type: 'size' },
            { property: 'radius',         token: 'borderRadius/medium',      value: radius.medium,                   type: 'size' },
            { property: '상하 패딩',      token: 'spacing/medium',           value: spacing.medium,                  type: 'size' },
            { property: '좌우 패딩',      token: 'spacing/large',            value: spacing.large,                   type: 'size' },
            { property: '카드 간 gap',    token: 'spacing/small',            value: spacing.small,                   type: 'size' },
          ]}
        />
        <Divider />
        <TokenSpecTable
          title="라디오 인디케이터"
          rows={[
            { property: '크기',          token: '—',                        value: 22,                              type: 'size' },
            { property: '비선택 border',  token: 'color/border/active',      value: semanticColor.borderActive,      type: 'color' },
            { property: '선택 fill',      token: 'color/background/brand',   value: semanticColor.backgroundBrand,   type: 'color' },
            { property: 'inner dot',      token: 'color/icon/onColor',       value: semanticColor.iconOnColor,       type: 'color' },
            { property: 'inner dot 크기', token: '—',                        value: 10,                              type: 'size' },
          ]}
        />
        <Divider />
        <TokenSpecTable
          title="텍스트"
          rows={[
            { property: 'label 타이포',      token: 'Body 2',                value: `${textStyle.body2.fontSize}px / Medium`, type: 'typography' },
            { property: 'label (선택)',       token: 'Body 2',                value: `${textStyle.body2.fontSize}px / SemiBold`, type: 'typography' },
            { property: 'description 타이포', token: 'Caption',              value: `${textStyle.caption.fontSize}px / Regular`, type: 'typography' },
            { property: 'label 색상',         token: 'color/text/primary',   value: semanticColor.textPrimary,       type: 'color' },
            { property: 'description 색상',   token: 'color/text/secondary', value: semanticColor.textSecondary,     type: 'color' },
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
          code={`import { RadioCardGroup, RadioCard } from '@design-system/components/RadioCard';`}
        />
        <CodeBlock
          title="기본 사용"
          code={`const [value, setValue] = useState<string | null>(null);

<RadioCardGroup value={value} onChange={setValue} name="drinking">
  <RadioCard value="none" label="술을 안 마신다" />
  <RadioCard value="low" label="월 1회 이하" />
  <RadioCard value="mid" label="월 2~4회" />
  <RadioCard value="high" label="주 2~4회" />
</RadioCardGroup>`}
        />
        <CodeBlock
          title="Description 포함"
          code={`<RadioCardGroup value={value} onChange={setValue} name="diet">
  <RadioCard
    value="balanced"
    label="균형 잡힌 식단"
    description="탄수화물, 단백질, 지방을 고르게 섭취"
  />
  <RadioCard
    value="low-carb"
    label="저탄수화물 식단"
    description="탄수화물 섭취를 줄이고 단백질 위주로"
  />
</RadioCardGroup>`}
        />
      </Section>
    </View>
  ),
};
