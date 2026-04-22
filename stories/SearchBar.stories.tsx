import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchBar } from '../src/components/SearchBar';
import { Section, StateLabel, Col, CodeBlock } from './storyHelpers';
import { spacing, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof SearchBar> = {
  title: 'Input/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <View style={{ maxWidth: 375 }}>
        <SearchBar value={value} onChangeText={setValue} placeholder="음식을 검색하세요" />
      </View>
    );
  },
};

export const States: Story = {
  name: '상태별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="상태별" description="기본, 입력됨, 비활성화 상태입니다.">
        <View style={{ gap: spacing.xlarge, maxWidth: 375 }}>
          <Col gap={spacing.small}>
            <StateLabel>기본 (빈 상태)</StateLabel>
            <SearchBar placeholder="음식을 검색하세요" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>입력됨</StateLabel>
            <SearchBar value="닭가슴살" placeholder="음식을 검색하세요" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>비활성화</StateLabel>
            <SearchBar placeholder="검색 불가" disabled />
          </Col>
        </View>
      </Section>
    </View>
  ),
};

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={`import { SearchBar } from '@design-system/components/SearchBar';`} />
        <CodeBlock title="기본 사용" code={`const [query, setQuery] = useState('');\n\n<SearchBar\n  value={query}\n  onChangeText={setQuery}\n  onSubmit={handleSearch}\n  placeholder="음식을 검색하세요"\n/>`} />
      </Section>
    </View>
  ),
};
