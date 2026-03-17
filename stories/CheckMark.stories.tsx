import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckMark } from '../src/components/CheckMark';
import { spacing } from '../src/tokens/theme';

const meta: Meta<typeof CheckMark> = {
  title: 'Components/CheckMark',
  component: CheckMark,
  argTypes: {
    checked: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium'] },
    label: { control: 'text' },
    sublabel: { control: 'text' },
    disabled: { control: 'boolean' },
    tight: { control: 'boolean' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CheckMark>;

export const Playground: Story = {
  args: { checked: true, size: 'medium', label: '텍스트', sublabel: '텍스트' },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: spacing.lg, alignItems: 'center' }}>
      <CheckMark checked size="small" />
      <CheckMark checked size="medium" />
    </View>
  ),
};

export const States: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: spacing['2xl'], alignItems: 'center' }}>
      <CheckMark checked={false} />
      <CheckMark checked />
    </View>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <View style={{ gap: spacing.sm }}>
      <CheckMark checked label="텍스트" sublabel="텍스트" />
      <CheckMark checked={false} label="텍스트" sublabel="텍스트" />
    </View>
  ),
};

export const Tight: Story = {
  render: () => (
    <View style={{ gap: spacing.sm, maxWidth: 300 }}>
      <CheckMark checked label="텍스트" sublabel="텍스트" tight />
      <CheckMark checked={false} label="텍스트" sublabel="텍스트" tight />
    </View>
  ),
};

export const Disabled: Story = {
  render: () => (
    <View style={{ gap: spacing.sm }}>
      <View style={{ flexDirection: 'row', gap: spacing['3xl'] }}>
        <CheckMark checked label="텍스트" sublabel="텍스트" />
        <CheckMark checked label="텍스트" sublabel="텍스트" disabled />
      </View>
      <View style={{ flexDirection: 'row', gap: spacing['3xl'] }}>
        <CheckMark checked={false} label="텍스트" sublabel="텍스트" />
        <CheckMark checked={false} label="텍스트" sublabel="텍스트" disabled />
      </View>
    </View>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [items, setItems] = useState([false, true, false]);
    return (
      <View style={{ gap: spacing.xs }}>
        {['항목 A', '항목 B', '항목 C'].map((name, i) => (
          <CheckMark
            key={i}
            checked={items[i]}
            label={name}
            onPress={() => setItems(prev => { const n = [...prev]; n[i] = !n[i]; return n; })}
          />
        ))}
      </View>
    );
  },
};
