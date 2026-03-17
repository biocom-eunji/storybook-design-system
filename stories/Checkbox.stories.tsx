import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../src/components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    state: { control: 'select', options: ['unchecked', 'checked', 'indeterminate'] },
    size: { control: 'select', options: ['small', 'medium'] },
    label: { control: 'text' },
    sublabel: { control: 'text' },
    disabled: { control: 'boolean' },
    bold: { control: 'boolean' },
    tight: { control: 'boolean' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  args: { state: 'checked', size: 'medium', label: '텍스트', sublabel: '텍스트' },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <Checkbox state="checked" size="small" />
      <Checkbox state="checked" size="medium" />
    </View>
  ),
};

export const ThreeStates: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
      <Checkbox state="unchecked" />
      <Checkbox state="checked" />
      <Checkbox state="indeterminate" />
    </View>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <View style={{ gap: 4 }}>
      <Checkbox state="unchecked" label="텍스트" />
      <Checkbox state="checked" label="텍스트" />
      <Checkbox state="indeterminate" label="텍스트" />
    </View>
  ),
};

export const Tight: Story = {
  render: () => (
    <View style={{ gap: 8, maxWidth: 300 }}>
      <Checkbox state="checked" label="텍스트" sublabel="텍스트" tight />
      <Checkbox state="unchecked" label="텍스트" sublabel="텍스트" tight />
    </View>
  ),
};

export const Bold: Story = {
  render: () => (
    <View style={{ gap: 4 }}>
      <Checkbox state="unchecked" label="텍스트" sublabel="텍스트" />
      <Checkbox state="unchecked" label="텍스트" sublabel="텍스트" bold />
    </View>
  ),
};

export const Disabled: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <View style={{ flexDirection: 'row', gap: 32 }}>
        <Checkbox state="unchecked" label="텍스트" />
        <Checkbox state="unchecked" label="텍스트" disabled />
      </View>
      <View style={{ flexDirection: 'row', gap: 32 }}>
        <Checkbox state="checked" label="텍스트" />
        <Checkbox state="checked" label="텍스트" disabled />
      </View>
      <View style={{ flexDirection: 'row', gap: 32 }}>
        <Checkbox state="indeterminate" label="텍스트" />
        <Checkbox state="indeterminate" label="텍스트" disabled />
      </View>
    </View>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [items, setItems] = useState([false, true, false]);
    const allChecked = items.every(Boolean);
    const someChecked = items.some(Boolean);
    const parentState = allChecked ? 'checked' : someChecked ? 'indeterminate' : 'unchecked';
    return (
      <View style={{ gap: 4, maxWidth: 300 }}>
        <Checkbox
          state={parentState as any}
          label="전체 선택"
          bold
          onPress={() => {
            const next = !allChecked;
            setItems(items.map(() => next));
          }}
        />
        <View style={{ paddingLeft: 24, gap: 4 }}>
          {['항목 A', '항목 B', '항목 C'].map((name, i) => (
            <Checkbox
              key={i}
              state={items[i] ? 'checked' : 'unchecked'}
              label={name}
              onPress={() => setItems(prev => { const n = [...prev]; n[i] = !n[i]; return n; })}
            />
          ))}
        </View>
      </View>
    );
  },
};
