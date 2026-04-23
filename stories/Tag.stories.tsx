import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag, type TagColor, type TagLevel } from '../src/components/Tag';
import { Section, StateLabel, Row, Col, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import {
  spacing, semanticColor, textStyle, radius,
  lightBlue, yellow, orange, pink, coolNeutral, green, mint, red, violet,
} from '../src/tokens/theme';

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tag>;

// ─── 1. Playground ──────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <View style={{ gap: spacing.xlarge }}>
      <Row gap={spacing.small} wrap>
        <Tag variant="neutral">기본 태그</Tag>
        <Tag variant="status" color="info">안내</Tag>
        <Tag variant="status" color="success">완료</Tag>
        <Tag variant="status" color="warning">주의</Tag>
        <Tag variant="status" color="error">오류</Tag>
        <Tag variant="level" level={1}>1단계</Tag>
      </Row>
    </View>
  ),
};

// ─── 2. Default (Neutral) ───────────────────────────────────

export const Default: Story = {
  name: 'Default (Neutral)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Default" description="기본 neutral 태그입니다. 카테고리나 일반 레이블에 사용합니다.">
        <Row gap={spacing.small} wrap>
          <Tag variant="neutral">일반</Tag>
          <Tag variant="neutral">카테고리</Tag>
          <Tag variant="neutral">기타</Tag>
        </Row>
      </Section>
    </View>
  ),
};

// ─── 3. Levels ──────────────────────────────────────────────

export const Levels: Story = {
  name: 'Level 5단계',
  render: () => {
    const levels: { level: TagLevel; label: string }[] = [
      { level: 1, label: '1단계' },
      { level: 2, label: '2단계' },
      { level: 3, label: '3단계' },
      { level: 4, label: '4단계' },
      { level: 5, label: '5단계' },
    ];
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="Level 5단계" description="숫자 단계를 파스텔 색상으로 구분합니다.">
          <Row gap={spacing.small} wrap>
            {levels.map(({ level, label }) => (
              <Tag key={level} variant="level" level={level}>{label}</Tag>
            ))}
          </Row>
        </Section>
      </View>
    );
  },
};

// ─── 4. Status Colors ───────────────────────────────────────

export const Statuses: Story = {
  name: 'Status 색상',
  render: () => {
    const statuses: { color: TagColor; label: string }[] = [
      { color: 'neutral', label: '기본' },
      { color: 'info',    label: '안내' },
      { color: 'success', label: '완료' },
      { color: 'warning', label: '주의' },
      { color: 'error',   label: '오류' },
      { color: 'mint',    label: '브랜드' },
      { color: 'violet',  label: '특별' },
      { color: 'pink',    label: '이벤트' },
    ];
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="Status 색상" description="color prop으로 다양한 상태를 표현합니다.">
          <Row gap={spacing.small} wrap>
            {statuses.map(({ color, label }) => (
              <Tag key={color} variant="status" color={color}>{label}</Tag>
            ))}
          </Row>
        </Section>
      </View>
    );
  },
};

// ─── 5. Sizes ───────────────────────────────────────────────

export const Sizes: Story = {
  name: '크기별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="크기별" description="medium(기본)과 small 크기를 비교합니다.">
        <View style={{ gap: spacing.large }}>
          <Col gap={spacing.small}>
            <StateLabel>medium (기본)</StateLabel>
            <Row gap={spacing.small} wrap>
              <Tag variant="status" color="success">완료</Tag>
              <Tag variant="level" level={2}>2단계</Tag>
              <Tag variant="neutral">일반</Tag>
            </Row>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>small</StateLabel>
            <Row gap={spacing.small} wrap>
              <Tag variant="status" color="success" size="small">완료</Tag>
              <Tag variant="level" level={2} size="small">2단계</Tag>
              <Tag variant="neutral" size="small">일반</Tag>
            </Row>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 6. InContext: 과민음식 리스트 ───────────────────────────

export const InContextList: Story = {
  name: '실전 예시: 과민음식 리스트',
  render: () => {
    const items = [
      { name: '아몬드', level: 5 as TagLevel },
      { name: '우유', level: 3 as TagLevel },
      { name: '밀', level: 4 as TagLevel },
      { name: '계란', level: 1 as TagLevel },
      { name: '대두', level: 2 as TagLevel },
    ];
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="과민음식 리스트" description="음식 항목에 레벨 태그를 붙여 과민도를 표시합니다.">
          <View style={{
            maxWidth: 375,
            padding: spacing.xlarge,
            backgroundColor: semanticColor.backgroundPrimary,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            gap: spacing.medium,
          }}>
            <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary,
            }}>과민 음식</Text>
            {items.map((item, i) => (
              <View key={i} style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: spacing.small,
                borderBottomWidth: i < items.length - 1 ? 1 : 0,
                borderBottomColor: semanticColor.borderDefault,
              }}>
                <Text style={{
                  fontSize: textStyle.body2.fontSize,
                  color: semanticColor.textPrimary,
                }}>{item.name}</Text>
                <Tag variant="level" level={item.level} size="small">{item.level}단계</Tag>
              </View>
            ))}
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 7. InContext: 분석 상태 ────────────────────────────────

export const InContextStatus: Story = {
  name: '실전 예시: 분석 상태',
  render: () => {
    const analyses = [
      { name: '종합 검사', status: 'warning' as TagColor, label: '접수 대기' },
      { name: '혈액 검사', status: 'info' as TagColor, label: '분석 중' },
      { name: '장내 미생물', status: 'success' as TagColor, label: '결과 확인' },
      { name: '유전자 검사', status: 'error' as TagColor, label: '기한 만료' },
    ];
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="분석 상태" description="검사 항목에 상태 태그를 붙여 진행 상황을 표시합니다.">
          <View style={{
            maxWidth: 375,
            padding: spacing.xlarge,
            backgroundColor: semanticColor.backgroundPrimary,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            gap: spacing.medium,
          }}>
            <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary,
            }}>검사 현황</Text>
            {analyses.map((item, i) => (
              <View key={i} style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: spacing.small,
                borderBottomWidth: i < analyses.length - 1 ? 1 : 0,
                borderBottomColor: semanticColor.borderDefault,
              }}>
                <Text style={{
                  fontSize: textStyle.body2.fontSize,
                  color: semanticColor.textPrimary,
                }}>{item.name}</Text>
                <Tag variant="status" color={item.status} size="small">{item.label}</Tag>
              </View>
            ))}
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 8. AllColors ───────────────────────────────────────────

export const AllColors: Story = {
  name: '전체 색상 팔레트',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="전체 색상 팔레트" description="Level 5단계 + Status 8색을 한 화면에 나열합니다.">
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>Level</StateLabel>
            <Row gap={spacing.small} wrap>
              {([1, 2, 3, 4, 5] as TagLevel[]).map(level => (
                <Tag key={level} variant="level" level={level}>{level}단계</Tag>
              ))}
            </Row>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Status</StateLabel>
            <Row gap={spacing.small} wrap>
              {(['neutral', 'info', 'success', 'warning', 'error', 'mint', 'violet', 'pink'] as TagColor[]).map(color => (
                <Tag key={color} variant="status" color={color}>{color}</Tag>
              ))}
            </Row>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 9. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="디자인 스펙" badge="디자인">
        <TokenSpecTable
          title="레이아웃"
          rows={[
            { property: 'radius',           token: 'radius/full',       value: 'pill',           type: 'size' },
            { property: 'medium padding-v', token: 'spacing/xsmall',    value: spacing.xsmall,   type: 'size' },
            { property: 'medium padding-h', token: 'spacing/medium',    value: spacing.medium,   type: 'size' },
            { property: 'small padding-v',  token: '—',                 value: 2,                type: 'size' },
            { property: 'small padding-h',  token: 'spacing/small',     value: spacing.small,    type: 'size' },
            { property: 'medium 타이포',    token: 'Label 1',            value: `${textStyle.label1.fontSize}px / SemiBold`, type: 'typography' },
            { property: 'small 타이포',     token: 'Caption',            value: `${textStyle.caption.fontSize}px / SemiBold`, type: 'typography' },
          ]}
        />
        <Divider />
        <TokenSpecTable
          title="Level 색상"
          rows={[
            { property: 'Lv1 배경 (안전)',  token: 'lightBlue[90]', value: lightBlue[90], type: 'color' },
            { property: 'Lv1 텍스트',       token: 'lightBlue[30]', value: lightBlue[30], type: 'color' },
            { property: 'Lv2 배경 (양호)',  token: 'green[90]',     value: green[90],     type: 'color' },
            { property: 'Lv2 텍스트',       token: 'green[30]',     value: green[30],     type: 'color' },
            { property: 'Lv3 배경 (보통)',  token: 'yellow[90]', value: yellow[90], type: 'color' },
            { property: 'Lv3 텍스트',       token: 'yellow[30]', value: yellow[30], type: 'color' },
            { property: 'Lv4 배경 (주의)',  token: 'orange[90]', value: orange[90], type: 'color' },
            { property: 'Lv4 텍스트',       token: 'orange[30]', value: orange[30], type: 'color' },
            { property: 'Lv5 배경 (위험)',  token: 'red[90]',    value: red[90],    type: 'color' },
            { property: 'Lv5 텍스트',       token: 'red[20]',    value: red[20],    type: 'color' },
          ]}
        />
        <Divider />
        <TokenSpecTable
          title="Status 색상"
          rows={[
            { property: 'neutral 배경', token: 'coolNeutral[97]', value: coolNeutral[97], type: 'color' },
            { property: 'neutral 텍스트', token: 'coolNeutral[40]', value: coolNeutral[40], type: 'color' },
            { property: 'info 배경',    token: 'lightBlue[90]',    value: lightBlue[90],   type: 'color' },
            { property: 'info 텍스트',  token: 'lightBlue[30]',    value: lightBlue[30],   type: 'color' },
            { property: 'success 배경', token: 'green[90]',        value: green[90],       type: 'color' },
            { property: 'success 텍스트', token: 'green[30]',      value: green[30],       type: 'color' },
            { property: 'warning 배경', token: 'orange[90]',       value: orange[90],      type: 'color' },
            { property: 'warning 텍스트', token: 'orange[30]',     value: orange[30],      type: 'color' },
            { property: 'error 배경',   token: 'red[90]',          value: red[90],         type: 'color' },
            { property: 'error 텍스트', token: 'red[20]',          value: red[20],         type: 'color' },
            { property: 'mint 배경',    token: 'mint[90]',         value: mint[90],        type: 'color' },
            { property: 'mint 텍스트',  token: 'mint[30]',         value: mint[30],        type: 'color' },
            { property: 'violet 배경',  token: 'violet[95]',       value: violet[95],      type: 'color' },
            { property: 'violet 텍스트', token: 'violet[30]',      value: violet[30],      type: 'color' },
            { property: 'pink 배경',    token: 'pink[95]',         value: pink[95],        type: 'color' },
            { property: 'pink 텍스트',  token: 'pink[30]',         value: pink[30],        type: 'color' },
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
          code={`import { Tag } from '@design-system/components/Tag';`}
        />
        <CodeBlock
          title="Neutral"
          code={`<Tag variant="neutral">일반 태그</Tag>`}
        />
        <CodeBlock
          title="Level"
          code={`<Tag variant="level" level={3}>3단계</Tag>
<Tag variant="level" level={1} size="small">1단계</Tag>`}
        />
        <CodeBlock
          title="Status"
          code={`<Tag variant="status" color="success">완료</Tag>
<Tag variant="status" color="warning">접수 대기</Tag>
<Tag variant="status" color="error">기한 만료</Tag>
<Tag variant="status" color="info">분석 중</Tag>`}
        />
      </Section>
    </View>
  ),
};
