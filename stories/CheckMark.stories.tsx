import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckMark } from '../src/components/CheckMark';

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
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <CheckMark checked size="small" />
      <CheckMark checked size="medium" />
    </View>
  ),
};

export const States: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
      <CheckMark checked={false} />
      <CheckMark checked />
    </View>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <CheckMark checked label="텍스트" sublabel="텍스트" />
      <CheckMark checked={false} label="텍스트" sublabel="텍스트" />
    </View>
  ),
};

export const Tight: Story = {
  render: () => (
    <View style={{ gap: 8, maxWidth: 300 }}>
      <CheckMark checked label="텍스트" sublabel="텍스트" tight />
      <CheckMark checked={false} label="텍스트" sublabel="텍스트" tight />
    </View>
  ),
};

export const Disabled: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <View style={{ flexDirection: 'row', gap: 32 }}>
        <CheckMark checked label="텍스트" sublabel="텍스트" />
        <CheckMark checked label="텍스트" sublabel="텍스트" disabled />
      </View>
      <View style={{ flexDirection: 'row', gap: 32 }}>
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
      <View style={{ gap: 4 }}>
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
