import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '../src/components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  args: { checked: true, size: 'medium', label: '텍스트', sublabel: '텍스트' },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <Radio checked size="small" />
      <Radio checked size="medium" />
    </View>
  ),
};

export const States: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
      <Radio checked={false} size="medium" />
      <Radio checked size="medium" />
    </View>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Radio checked label="텍스트" />
      <Radio checked={false} label="텍스트" />
    </View>
  ),
};

export const WithSublabel: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Radio checked label="텍스트" sublabel="텍스트" />
      <Radio checked={false} label="텍스트" sublabel="텍스트" />
    </View>
  ),
};

export const Tight: Story = {
  render: () => (
    <View style={{ gap: 8, maxWidth: 300 }}>
      <Radio checked label="텍스트" sublabel="텍스트" tight />
      <Radio checked={false} label="텍스트" sublabel="텍스트" tight />
    </View>
  ),
};

export const Disabled: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <View style={{ flexDirection: 'row', gap: 32 }}>
        <Radio checked={false} label="텍스트" sublabel="텍스트" />
        <Radio checked={false} label="텍스트" sublabel="텍스트" disabled />
      </View>
      <View style={{ flexDirection: 'row', gap: 32 }}>
        <Radio checked label="텍스트" sublabel="텍스트" />
        <Radio checked label="텍스트" sublabel="텍스트" disabled />
      </View>
    </View>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState(0);
    const options = ['옵션 A', '옵션 B', '옵션 C'];
    return (
      <View style={{ gap: 4 }}>
        {options.map((opt, i) => (
          <Radio key={i} checked={selected === i} label={opt} onPress={() => setSelected(i)} />
        ))}
      </View>
    );
  },
};
