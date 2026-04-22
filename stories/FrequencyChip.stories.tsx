import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FrequencyChip } from '../src/components/FrequencyChip';
import {
  Section, StateLabel, Row, Col, CodeBlock, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { spacing, semanticColor, textStyle, green, yellow, orange, red } from '../src/tokens/theme';

const meta: Meta<typeof FrequencyChip> = {
  title: 'Data Display/FrequencyChip',
  component: FrequencyChip,
  argTypes: {
    value: { control: { type: 'number', min: 0 }, description: '표시할 숫자' },
    severity: { control: 'select', options: ['safe', 'moderate', 'warning', 'critical'], description: '심각도' },
    max: { control: 'number', description: '최대값 (초과 시 "99+"  표시)' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FrequencyChip>;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <Row gap={spacing.medium} align="center">
      <FrequencyChip value={8} severity="critical" />
      <FrequencyChip value={5} severity="warning" />
      <FrequencyChip value={2} severity="moderate" />
      <FrequencyChip value={0} severity="safe" />
    </Row>
  ),
};

// ─── 2. Severity별 ──────────────────────────────────────────

export const Severities: Story = {
  name: 'Severity별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Severity별" description="4단계 심각도를 색상으로 구분합니다.">
        <Row gap={spacing.xlarge} align="center">
          {(['critical', 'warning', 'moderate', 'safe'] as const).map(sev => (
            <Col key={sev} gap={spacing.small}>
              <StateLabel>{sev}</StateLabel>
              <View style={{ alignItems: 'center' }}>
                <FrequencyChip value={3} severity={sev} />
              </View>
            </Col>
          ))}
        </Row>
      </Section>
    </View>
  ),
};

// ─── 3. 다양한 값 ───────────────────────────────────────────

export const Values: Story = {
  name: '다양한 값',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="다양한 값" description="0부터 max 초과까지 다양한 숫자 표시입니다.">
        <Row gap={spacing.medium} align="center">
          {[0, 1, 5, 8, 15, 99, 100].map(v => (
            <Col key={v} gap={spacing.small}>
              <View style={{ alignItems: 'center' }}>
                <FrequencyChip value={v} severity={v >= 8 ? 'critical' : v >= 5 ? 'warning' : v >= 2 ? 'moderate' : 'safe'} />
              </View>
              <StateLabel>{v > 99 ? '99+' : String(v)}</StateLabel>
            </Col>
          ))}
        </Row>
      </Section>
    </View>
  ),
};

// ─── 4. 실전 예시 (주간 섭취 빈도) ──────────────────────────

export const InContext: Story = {
  name: '실전 예시 (주간)',
  render: () => {
    const weekData = [
      { day: '04/14', value: 3, severity: 'moderate' as const },
      { day: '04/15', value: 0, severity: 'safe' as const },
      { day: '04/16', value: 7, severity: 'critical' as const },
      { day: '04/17', value: 2, severity: 'moderate' as const },
      { day: '04/18', value: 5, severity: 'warning' as const },
      { day: '04/19', value: 1, severity: 'safe' as const },
      { day: '04/20', value: 8, severity: 'critical' as const },
    ];

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="실전 예시" description="일주일간 과민음식 섭취 빈도를 시각화한 예시입니다.">
          <View style={{
            maxWidth: 375,
            padding: spacing.large,
            backgroundColor: semanticColor.backgroundStatus,
            borderRadius: spacing.small,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
          }}>
            <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary,
              marginBottom: spacing.medium,
            }}>이번 주 섭취 빈도</Text>
            <Row gap={spacing.medium} align="center">
              {weekData.map(d => (
                <Col key={d.day} gap={spacing.small}>
                  <View style={{ alignItems: 'center' }}>
                    <FrequencyChip value={d.value} severity={d.severity} />
                  </View>
                  <Text style={{
                    fontSize: textStyle.caption.fontSize,
                    color: semanticColor.textSecondary,
                    textAlign: 'center',
                  }}>{d.day}</Text>
                </Col>
              ))}
            </Row>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 5. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="디자인 스펙" description="Figma 기반 FrequencyChip 스펙입니다." badge="디자인">
        <TokenSpecTable
          title="Severity별 색상"
          rows={[
            { property: 'Safe 메인',      token: 'role/success',           value: semanticColor.backgroundSuccess, type: 'color' },
            { property: 'Safe halo',      token: 'green/90',               value: green[90],                       type: 'color' },
            { property: 'Moderate 메인',  token: 'role/caution',           value: semanticColor.backgroundCaution, type: 'color' },
            { property: 'Moderate halo',  token: 'yellow/90',              value: yellow[90],                      type: 'color' },
            { property: 'Warning 메인',   token: 'role/warning',           value: semanticColor.backgroundWarning, type: 'color' },
            { property: 'Warning halo',   token: 'orange/90',              value: orange[90],                      type: 'color' },
            { property: 'Critical 메인',  token: 'role/error',             value: semanticColor.backgroundError,   type: 'color' },
            { property: 'Critical halo',  token: 'red/90',                 value: red[90],                         type: 'color' },
            { property: '텍스트',         token: 'color/text/onColor',     value: semanticColor.textOnColor,       type: 'color' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="레이아웃"
          rows={[
            { property: '전체 크기',   token: '—', value: '26×26',  type: 'size' },
            { property: 'Border 두께', token: '—', value: 2,        type: 'size' },
            { property: 'Border radius', token: '—', value: 13,     type: 'size' },
            { property: '타이포',      token: 'Label 1', value: `${textStyle.label1.fontSize}px / Medium`, type: 'typography' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 6. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" description="개발자를 위한 FrequencyChip 사용 예시입니다." badge="개발">
        <CodeBlock
          title="Import"
          code={`import { FrequencyChip } from '@design-system/components/FrequencyChip';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`<FrequencyChip value={5} severity="warning" />`}
        />

        <CodeBlock
          title="주간 빈도 리스트"
          code={`{weekData.map(d => (
  <View key={d.day} style={{ alignItems: 'center', gap: 4 }}>
    <FrequencyChip value={d.value} severity={d.severity} />
    <Text style={{ fontSize: 12, color: semanticColor.textSecondary }}>
      {d.day}
    </Text>
  </View>
))}`}
        />

        <CodeBlock
          title="접근성 라벨 (색상만으로 구분하지 않도록 라벨 동반 권장)"
          code={`<FrequencyChip
  value={8}
  severity="critical"
  accessibilityLabel="위험 단계, 과민음식 8회 섭취"
/>`}
        />
      </Section>
    </View>
  ),
};
