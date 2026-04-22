import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from '../src/components/Tooltip';
import {
  Section, StateLabel, Row, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, radius, textStyle, shadow } from '../src/tokens/theme';

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof Tooltip> = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  argTypes: {
    content: { control: 'text', description: '툴팁 내용' },
    size: { control: 'select', options: ['small', 'medium'], description: '크기' },
    position: { control: 'select', options: ['top', 'right', 'bottom', 'left'], description: '위치' },
    visible: { control: 'boolean', description: '표시 여부' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <View style={{ padding: spacing['3xlarge'] }}>
      <Tooltip content="추가 정보를 확인하세요" position="top" align="leading" />
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 배경 `color/background/inverse`, 텍스트 `color/text/onColor`, radius `borderRadius/small`, shadow `level2`',
      },
    },
  },
};

// ─── 2. Sizes ────────────────────────────────────────────────

export const Sizes: Story = {
  name: '크기별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="크기별" description="Medium(Label 1, 14px)과 Small(Caption, 12px)을 비교합니다.">
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>Medium</StateLabel>
            <Tooltip content="Medium 사이즈 툴팁입니다" size="medium" position="top" align="leading" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Small</StateLabel>
            <Tooltip content="Small 사이즈 툴팁입니다" size="small" position="top" align="leading" />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. Positions ────────────────────────────────────────────

export const Positions: Story = {
  name: '위치별 (4방향)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="위치별" description="top / right / bottom / left 4방향 배치입니다. 화살표가 anchor를 향합니다.">
        <View style={{ gap: spacing.xlarge }}>
          {(['top', 'bottom', 'left', 'right'] as const).map(pos => (
            <Col key={pos} gap={spacing.small}>
              <StateLabel>{`position="${pos}"`}</StateLabel>
              <Tooltip content={`${pos} 방향 툴팁`} position={pos} align={pos === 'top' || pos === 'bottom' ? 'leading' : 'top'} />
            </Col>
          ))}
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. Vertical Align ──────────────────────────────────────

export const VerticalAlign: Story = {
  name: 'Arrow Vertical (상/하 배치 + 가로 정렬)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Arrow Vertical" description="position='top'일 때 align=leading / center / trailing 비교입니다.">
        <View style={{ gap: spacing.xlarge }}>
          {(['leading', 'center', 'trailing'] as const).map(align => (
            <Col key={align} gap={spacing.small}>
              <StateLabel>{`align="${align}"`}</StateLabel>
              <Tooltip content="툴팁 텍스트" position="top" align={align} />
            </Col>
          ))}
        </View>

        <Divider />

        <View style={{ gap: spacing.xlarge, marginTop: spacing.xlarge }}>
          <StateLabel>position="bottom" 에서도 동일</StateLabel>
          {(['leading', 'center', 'trailing'] as const).map(align => (
            <Col key={align} gap={spacing.small}>
              <StateLabel>{`align="${align}"`}</StateLabel>
              <Tooltip content="툴팁 텍스트" position="bottom" align={align} />
            </Col>
          ))}
        </View>
      </Section>
    </View>
  ),
};

// ─── 5. Horizontal Align ────────────────────────────────────

export const HorizontalAlign: Story = {
  name: 'Arrow Horizontal (좌/우 배치 + 세로 정렬)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Arrow Horizontal" description="position='right'일 때 align=top / center / bottom 비교입니다.">
        <View style={{ gap: spacing.xlarge }}>
          {(['top', 'center', 'bottom'] as const).map(align => (
            <Col key={align} gap={spacing.small}>
              <StateLabel>{`align="${align}"`}</StateLabel>
              <Tooltip content="툴팁 텍스트" position="right" align={align} />
            </Col>
          ))}
        </View>

        <Divider />

        <View style={{ gap: spacing.xlarge, marginTop: spacing.xlarge }}>
          <StateLabel>position="left" 에서도 동일</StateLabel>
          {(['top', 'center', 'bottom'] as const).map(align => (
            <Col key={align} gap={spacing.small}>
              <StateLabel>{`align="${align}"`}</StateLabel>
              <Tooltip content="툴팁 텍스트" position="left" align={align} />
            </Col>
          ))}
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. Long Content ────────────────────────────────────────

export const LongContent: Story = {
  name: '긴 텍스트 (줄바꿈)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="긴 텍스트" description="최대 폭(240px/200px) 초과 시 자동 줄바꿈됩니다.">
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>Medium (max 240px)</StateLabel>
            <Tooltip content="이 툴팁은 긴 텍스트를 포함하고 있어서 최대 폭을 초과하면 자동으로 줄바꿈이 됩니다." size="medium" position="top" align="leading" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Small (max 200px)</StateLabel>
            <Tooltip content="이 툴팁은 긴 텍스트를 포함하고 있어서 최대 폭을 초과하면 자동으로 줄바꿈이 됩니다." size="small" position="top" align="leading" />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 7. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="디자인 스펙" description="Figma 실측 기준 Tooltip 스펙입니다." badge="디자인">
        <TokenSpecTable
          title="색상 토큰"
          rows={[
            { property: '배경',   token: 'color/background/inverse', value: semanticColor.backgroundInverse, type: 'color' },
            { property: '텍스트', token: 'color/text/onColor',       value: semanticColor.textOnColor,       type: 'color' },
            { property: '그림자', token: 'shadow/level2',             value: `offset(0,${shadow.level2.shadowOffset.height}) blur(${shadow.level2.shadowRadius})` },
            { property: '라디우스', token: 'borderRadius/small',      value: radius.small,                    type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="Medium 사이즈"
          rows={[
            { property: '패딩',     token: 'spacing/small × spacing/medium', value: `${spacing.small} × ${spacing.medium}`, type: 'size' },
            { property: '타이포',   token: 'Label 1',   value: `${textStyle.label1.fontSize}px / ${textStyle.label1.lineHeight}px / Medium`, type: 'typography' },
            { property: '최대 폭', token: '—',          value: 240, type: 'size' },
          ]}
        />

        <TokenSpecTable
          title="Small 사이즈"
          rows={[
            { property: '패딩',     token: '6 × 10',   value: '6 × 10', type: 'size' },
            { property: '타이포',   token: 'Caption',   value: `${textStyle.caption.fontSize}px / ${textStyle.caption.lineHeight}px / Regular`, type: 'typography' },
            { property: '최대 폭', token: '—',          value: 200, type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="화살표"
          rows={[
            { property: '크기',  token: '—', value: '6px 삼각형', type: 'size' },
            { property: '색상',  token: 'color/background/inverse', value: semanticColor.backgroundInverse, type: 'color' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 8. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" description="개발자를 위한 Tooltip 사용 예시입니다." badge="개발">
        <CodeBlock
          title="Import"
          code={`import { Tooltip } from '@design-system/components/Tooltip';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<Tooltip
  content="추가 정보를 확인하세요"
  position="top"
  align="leading"
/>`}
        />

        <CodeBlock
          title="Position + Align 조합"
          code={`// 상단, 화살표 중앙
<Tooltip content="도움말" position="top" align="center" />

// 우측, 화살표 상단
<Tooltip content="도움말" position="right" align="top" />

// 하단, 화살표 우측
<Tooltip content="도움말" position="bottom" align="trailing" />`}
        />

        <CodeBlock
          title="Small 사이즈"
          code={`<Tooltip content="간단한 힌트" size="small" position="top" />`}
        />

        <CodeBlock
          title="TypeScript 타입 안전성"
          code={`// ✅ 올바른 조합
<Tooltip position="top" align="leading" />     // vertical → leading/center/trailing
<Tooltip position="right" align="top" />       // horizontal → top/center/bottom

// ❌ 타입 에러 (컴파일 시 잡힘)
// <Tooltip position="top" align="top" />      // vertical에 horizontal align 불가
// <Tooltip position="right" align="leading" /> // horizontal에 vertical align 불가`}
        />
      </Section>
    </View>
  ),
};
