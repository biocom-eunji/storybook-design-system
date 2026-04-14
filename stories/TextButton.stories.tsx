import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextButton } from '../src/components/TextButton';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { spacing, coolNeutral, mint } from '../src/tokens/theme';

const meta: Meta<typeof TextButton> = {
  title: 'General/TextButton',
  component: TextButton,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'assistive'],
      description: '버튼 컬러',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: '버튼 크기',
    },
    label: { control: 'text', description: '버튼 텍스트' },
    disabled: { control: 'boolean', description: '비활성화 상태' },
    loading: { control: 'boolean', description: '로딩 상태' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextButton>;

// ─── 1. Playground ──────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: '텍스트 버튼',
    color: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
  },
};

// ─── 2. 모든 변형 ──────────────────────────────────────────

export const AllVariants: Story = {
  name: '모든 변형',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="TextButton"
        description="배경이나 테두리 없이 텍스트만으로 동작하는 버튼입니다."
      >
        <Col gap={spacing['2xlarge']}>
          {/* Primary */}
          <Col gap={spacing.medium}>
            <StateLabel>PRIMARY</StateLabel>
            <Row gap={spacing.xlarge}>
              <Col gap={spacing.xsmall}>
                <StateLabel>Medium</StateLabel>
                <TextButton label="텍스트" color="primary" size="medium" />
              </Col>
              <Col gap={spacing.xsmall}>
                <StateLabel>Small</StateLabel>
                <TextButton label="텍스트" color="primary" size="small" />
              </Col>
              <Col gap={spacing.xsmall}>
                <StateLabel>비활성화</StateLabel>
                <TextButton label="텍스트" color="primary" size="medium" disabled />
              </Col>
            </Row>
          </Col>

          <Divider />

          {/* Assistive */}
          <Col gap={spacing.medium}>
            <StateLabel>ASSISTIVE</StateLabel>
            <Row gap={spacing.xlarge}>
              <Col gap={spacing.xsmall}>
                <StateLabel>Medium</StateLabel>
                <TextButton label="텍스트" color="assistive" size="medium" />
              </Col>
              <Col gap={spacing.xsmall}>
                <StateLabel>Small</StateLabel>
                <TextButton label="텍스트" color="assistive" size="small" />
              </Col>
              <Col gap={spacing.xsmall}>
                <StateLabel>비활성화</StateLabel>
                <TextButton label="텍스트" color="assistive" size="medium" disabled />
              </Col>
            </Row>
          </Col>
        </Col>
      </Section>
    </View>
  ),
};

// ─── 3. 상태 ────────────────────────────────────────────────

export const States: Story = {
  name: '상태',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="상태별 비교" description="각 상태에서의 TextButton 모습을 비교합니다.">
        <Col gap={spacing['2xlarge']}>
          <Col gap={spacing.medium}>
            <StateLabel>PRIMARY</StateLabel>
            <CompareGrid
              items={[
                {
                  label: '기본',
                  content: <TextButton label="텍스트" color="primary" />,
                },
                {
                  label: '비활성화',
                  content: <TextButton label="텍스트" color="primary" disabled />,
                },
                {
                  label: '로딩',
                  content: <TextButton label="텍스트" color="primary" loading />,
                },
              ]}
            />
          </Col>

          <Divider />

          <Col gap={spacing.medium}>
            <StateLabel>ASSISTIVE</StateLabel>
            <CompareGrid
              items={[
                {
                  label: '기본',
                  content: <TextButton label="텍스트" color="assistive" />,
                },
                {
                  label: '비활성화',
                  content: <TextButton label="텍스트" color="assistive" disabled />,
                },
                {
                  label: '로딩',
                  content: <TextButton label="텍스트" color="assistive" loading />,
                },
              ]}
            />
          </Col>
        </Col>
      </Section>
    </View>
  ),
};

// ─── 4. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="디자인 스펙" description="TextButton 컴포넌트의 디자인 토큰 명세입니다.">
        <Col gap={spacing['2xlarge']}>
          <SpecTable
            title="사이즈별 스펙"
            rows={[
              { label: 'Small - fontSize', value: '13', token: 'textStyle.label2.fontSize' },
              { label: 'Small - lineHeight', value: '18', token: 'textStyle.label2.lineHeight' },
              { label: 'Small - letterSpacing', value: '0.25', token: 'textStyle.label2.letterSpacing' },
              { label: 'Small - iconSize', value: '16', token: 'textButtonToken.size.small.iconSize' },
              { label: 'Medium - fontSize', value: '15', token: 'textStyle.body2.fontSize' },
              { label: 'Medium - lineHeight', value: '22', token: 'textStyle.body2.lineHeight' },
              { label: 'Medium - letterSpacing', value: '0.14', token: 'textStyle.body2.letterSpacing' },
              { label: 'Medium - iconSize', value: '20', token: 'textButtonToken.size.medium.iconSize' },
            ]}
          />

          <SpecTable
            title="Primary 컬러"
            rows={[
              { label: '기본 콘텐츠', value: '#22C3BC', token: 'semanticColor.textBrand' },
              { label: '눌림 콘텐츠', value: mint[30], token: 'mint[30] (palette 직접 참조)' },
              { label: '비활성화 콘텐츠', value: coolNeutral[80], token: 'semanticColor.textTertiary' },
            ]}
          />

          <SpecTable
            title="Assistive 컬러"
            rows={[
              { label: '기본 콘텐츠', value: '#70737C', token: 'semanticColor.textSecondary' },
              { label: '눌림 콘텐츠', value: coolNeutral[30], token: 'coolNeutral[30] (palette 직접 참조)' },
              { label: '비활성화 콘텐츠', value: coolNeutral[80], token: 'semanticColor.textTertiary' },
            ]}
          />
        </Col>
      </Section>
    </View>
  ),
};

// ─── 6. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" description="TextButton 컴포넌트의 import 및 사용 예시입니다.">
        <Col gap={spacing.large}>
          <CodeBlock
            title="Import"
            code={`import { TextButton } from '@design-system/components/TextButton';`}
          />

          <CodeBlock
            title="기본 사용"
            code={`<TextButton label="확인" onPress={handlePress} />`}
          />

          <CodeBlock
            title="Assistive 스타일"
            code={`<TextButton label="취소" color="assistive" onPress={handleCancel} />`}
          />

          <CodeBlock
            title="Small 사이즈"
            code={`<TextButton label="더보기" size="small" />`}
          />

          <CodeBlock
            title="비활성화 상태"
            code={`<TextButton label="제출" disabled />`}
          />

          <CodeBlock
            title="로딩 상태"
            code={`<TextButton label="저장 중" loading />`}
          />
        </Col>
      </Section>
    </View>
  ),
};
