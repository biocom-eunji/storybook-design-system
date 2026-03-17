import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextButton } from '../src/components/TextButton';
import { Icon } from '../src/components/Icon';
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
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="TextButton"
        description="배경이나 테두리 없이 텍스트만으로 동작하는 버튼입니다."
      >
        <Col gap={spacing['2xl']}>
          {/* Primary */}
          <Col gap={spacing.md}>
            <StateLabel>PRIMARY</StateLabel>
            <Row gap={spacing.xl}>
              <Col gap={spacing.xs}>
                <StateLabel>Medium</StateLabel>
                <TextButton label="텍스트" color="primary" size="medium" />
              </Col>
              <Col gap={spacing.xs}>
                <StateLabel>Small</StateLabel>
                <TextButton label="텍스트" color="primary" size="small" />
              </Col>
              <Col gap={spacing.xs}>
                <StateLabel>아이콘 포함</StateLabel>
                <TextButton
                  label="텍스트"
                  color="primary"
                  size="medium"
                  leadingIcon={<Icon name="arrowRight" />}
                />
              </Col>
              <Col gap={spacing.xs}>
                <StateLabel>비활성화</StateLabel>
                <TextButton label="텍스트" color="primary" size="medium" disabled />
              </Col>
            </Row>
          </Col>

          <Divider />

          {/* Assistive */}
          <Col gap={spacing.md}>
            <StateLabel>ASSISTIVE</StateLabel>
            <Row gap={spacing.xl}>
              <Col gap={spacing.xs}>
                <StateLabel>Medium</StateLabel>
                <TextButton label="텍스트" color="assistive" size="medium" />
              </Col>
              <Col gap={spacing.xs}>
                <StateLabel>Small</StateLabel>
                <TextButton label="텍스트" color="assistive" size="small" />
              </Col>
              <Col gap={spacing.xs}>
                <StateLabel>아이콘 포함</StateLabel>
                <TextButton
                  label="텍스트"
                  color="assistive"
                  size="medium"
                  leadingIcon={<Icon name="arrowRight" />}
                />
              </Col>
              <Col gap={spacing.xs}>
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
    <View style={{ gap: spacing['3xl'] }}>
      <Section title="상태별 비교" description="각 상태에서의 TextButton 모습을 비교합니다.">
        <Col gap={spacing['2xl']}>
          <Col gap={spacing.md}>
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

          <Col gap={spacing.md}>
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

// ─── 4. 아이콘 조합 ─────────────────────────────────────────

export const WithIcons: Story = {
  name: '아이콘 조합',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section title="아이콘 조합" description="Leading, Trailing 또는 양쪽 모두에 아이콘을 배치할 수 있습니다.">
        <Col gap={spacing['2xl']}>
          <Col gap={spacing.md}>
            <StateLabel>LEADING 아이콘</StateLabel>
            <Row gap={spacing.xl}>
              <TextButton
                label="텍스트"
                color="primary"
                size="medium"
                leadingIcon={<Icon name="arrowRight" />}
              />
              <TextButton
                label="텍스트"
                color="assistive"
                size="medium"
                leadingIcon={<Icon name="arrowRight" />}
              />
            </Row>
          </Col>

          <Divider />

          <Col gap={spacing.md}>
            <StateLabel>TRAILING 아이콘</StateLabel>
            <Row gap={spacing.xl}>
              <TextButton
                label="텍스트"
                color="primary"
                size="medium"
                trailingIcon={<Icon name="arrowRight" />}
              />
              <TextButton
                label="텍스트"
                color="assistive"
                size="medium"
                trailingIcon={<Icon name="arrowRight" />}
              />
            </Row>
          </Col>

          <Divider />

          <Col gap={spacing.md}>
            <StateLabel>양쪽 아이콘</StateLabel>
            <Row gap={spacing.xl}>
              <TextButton
                label="텍스트"
                color="primary"
                size="medium"
                leadingIcon={<Icon name="arrowRight" />}
                trailingIcon={<Icon name="arrowRight" />}
              />
              <TextButton
                label="텍스트"
                color="assistive"
                size="medium"
                leadingIcon={<Icon name="arrowRight" />}
                trailingIcon={<Icon name="arrowRight" />}
              />
            </Row>
          </Col>
        </Col>
      </Section>
    </View>
  ),
};

// ─── 5. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section title="디자인 스펙" description="TextButton 컴포넌트의 디자인 토큰 명세입니다.">
        <Col gap={spacing['2xl']}>
          <SpecTable
            title="사이즈별 스펙"
            rows={[
              { label: 'Small - fontSize', value: '13', token: 'textButtonToken.size.small.fontSize' },
              { label: 'Small - iconSize', value: '16', token: 'textButtonToken.size.small.iconSize' },
              { label: 'Medium - fontSize', value: '15', token: 'textButtonToken.size.medium.fontSize' },
              { label: 'Medium - iconSize', value: '20', token: 'textButtonToken.size.medium.iconSize' },
            ]}
          />

          <SpecTable
            title="Primary 컬러"
            rows={[
              { label: '기본 콘텐츠', value: '#22C3BC', token: 'mint[45]' },
              { label: '눌림 콘텐츠', value: mint[30], token: 'mint[30]' },
              { label: '비활성화 콘텐츠', value: coolNeutral[80], token: 'coolNeutral[80]' },
            ]}
          />

          <SpecTable
            title="Assistive 컬러"
            rows={[
              { label: '기본 콘텐츠', value: '#70737C', token: 'coolNeutral[50]' },
              { label: '눌림 콘텐츠', value: coolNeutral[30], token: 'coolNeutral[30]' },
              { label: '비활성화 콘텐츠', value: coolNeutral[80], token: 'coolNeutral[80]' },
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
    <View style={{ gap: spacing['3xl'] }}>
      <Section title="사용 가이드" description="TextButton 컴포넌트의 import 및 사용 예시입니다.">
        <Col gap={spacing.lg}>
          <CodeBlock
            title="Import"
            code={`import { TextButton } from '@design-system/components/TextButton';
import { Icon } from '@design-system/components/Icon';`}
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
            title="아이콘 포함"
            code={`<TextButton
  label="다음"
  trailingIcon={<Icon name="arrowRight" />}
  onPress={handleNext}
/>`}
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
