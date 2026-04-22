import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from '../src/components/DatePicker';
import { Section, StateLabel, Col, CodeBlock } from './storyHelpers';
import { spacing, semanticColor } from '../src/tokens/theme';

const meta: Meta<typeof DatePicker> = {
  title: 'Input/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Playground: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <View style={{ maxWidth: 375 }}>
        <DatePicker value={date} onChange={setDate} />
        {date && (
          <Text style={{ marginTop: spacing.medium, color: semanticColor.textSecondary, textAlign: 'center' }}>
            선택: {date.getFullYear()}-{String(date.getMonth() + 1).padStart(2, '0')}-{String(date.getDate()).padStart(2, '0')}
          </Text>
        )}
      </View>
    );
  },
};

export const WithConstraints: Story = {
  name: '날짜 제한',
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section title="날짜 제한" description="minDate/maxDate로 선택 가능 범위를 제한합니다. 오늘 기준 과거 7일만 선택 가능.">
          <View style={{ maxWidth: 375 }}>
            <DatePicker value={date} onChange={setDate} minDate={minDate} maxDate={today} />
          </View>
        </Section>
      </View>
    );
  },
};

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={`import { DatePicker } from '@design-system/components/DatePicker';`} />
        <CodeBlock title="기본 사용" code={`const [date, setDate] = useState<Date>();\n\n<DatePicker value={date} onChange={setDate} />`} />
        <CodeBlock title="날짜 제한" code={`<DatePicker\n  value={date}\n  onChange={setDate}\n  minDate={new Date(2026, 0, 1)}\n  maxDate={new Date()}\n/>`} />
      </Section>
    </View>
  ),
};
