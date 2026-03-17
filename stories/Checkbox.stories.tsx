import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../src/components/Checkbox';
import { spacing } from '../src/tokens/theme';

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
    <View style={{ flexDirection: 'row', gap: spacing.lg, alignItems: 'center' }}>
      <Checkbox state="checked" size="small" />
      <Checkbox state="checked" size="medium" />
    </View>
  ),
};

export const ThreeStates: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: spacing['2xl'], alignItems: 'center' }}>
      <Checkbox state="unchecked" />
      <Checkbox state="checked" />
      <Checkbox state="indeterminate" />
    </View>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <View style={{ gap: spacing.xs }}>
      <Checkbox state="unchecked" label="텍스트" />
      <Checkbox state="checked" label="텍스트" />
      <Checkbox state="indeterminate" label="텍스트" />
    </View>
  ),
};

export const Tight: Story = {
  render: () => (
    <View style={{ gap: spacing.sm, maxWidth: 300 }}>
      <Checkbox state="checked" label="텍스트" sublabel="텍스트" tight />
      <Checkbox state="unchecked" label="텍스트" sublabel="텍스트" tight />
    </View>
  ),
};

export const Bold: Story = {
  render: () => (
    <View style={{ gap: spacing.xs }}>
      <Checkbox state="unchecked" label="텍스트" sublabel="텍스트" />
      <Checkbox state="unchecked" label="텍스트" sublabel="텍스트" bold />
    </View>
  ),
};

export const Disabled: Story = {
  render: () => (
    <View style={{ gap: spacing.sm }}>
      <View style={{ flexDirection: 'row', gap: spacing['3xl'] }}>
        <Checkbox state="unchecked" label="텍스트" />
        <Checkbox state="unchecked" label="텍스트" disabled />
      </View>
      <View style={{ flexDirection: 'row', gap: spacing['3xl'] }}>
        <Checkbox state="checked" label="텍스트" />
        <Checkbox state="checked" label="텍스트" disabled />
      </View>
      <View style={{ flexDirection: 'row', gap: spacing['3xl'] }}>
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
      <View style={{ gap: spacing.xs, maxWidth: 300 }}>
        <Checkbox
          state={parentState as any}
          label="전체 선택"
          bold
          onPress={() => {
            const next = !allChecked;
            setItems(items.map(() => next));
          }}
        />
        <View style={{ paddingLeft: spacing['2xl'], gap: spacing.xs }}>
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
