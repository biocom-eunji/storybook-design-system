import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../src/components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    active: { control: 'boolean' },
    platform: { control: 'select', options: ['ios', 'normal'] },
    size: { control: 'select', options: ['small', 'medium'] },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  args: { active: true, platform: 'ios', size: 'medium' },
};

const Label = ({ children }: { children: string }) => (
  <Text style={{ fontSize: 12, fontWeight: '600', color: '#70737C', marginBottom: 8 }}>{children}</Text>
);

// ─── iOS ──────────────────────────────────────────────────

export const IosSizes: Story = {
  render: () => (
    <View>
      <Label>iOS — size</Label>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Switch platform="ios" size="small" />
        <Switch platform="ios" size="medium" />
      </View>
    </View>
  ),
};

export const IosActive: Story = {
  render: () => (
    <View>
      <Label>iOS — active</Label>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Switch platform="ios" active={false} />
        <Switch platform="ios" active />
      </View>
    </View>
  ),
};

export const IosDisabled: Story = {
  render: () => (
    <View>
      <Label>iOS — disabled</Label>
      <View style={{ gap: 12 }}>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <Switch platform="ios" active={false} />
          <Switch platform="ios" active={false} disabled />
        </View>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <Switch platform="ios" active />
          <Switch platform="ios" active disabled />
        </View>
      </View>
    </View>
  ),
};

// ─── Normal ───────────────────────────────────────────────

export const NormalSizes: Story = {
  render: () => (
    <View>
      <Label>Normal — size</Label>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Switch platform="normal" size="small" />
        <Switch platform="normal" size="medium" />
      </View>
    </View>
  ),
};

export const NormalActive: Story = {
  render: () => (
    <View>
      <Label>Normal — active</Label>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Switch platform="normal" active={false} />
        <Switch platform="normal" active />
      </View>
    </View>
  ),
};

export const NormalDisabled: Story = {
  render: () => (
    <View>
      <Label>Normal — disabled</Label>
      <View style={{ gap: 12 }}>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <Switch platform="normal" active={false} />
          <Switch platform="normal" active={false} disabled />
        </View>
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <Switch platform="normal" active />
          <Switch platform="normal" active disabled />
        </View>
      </View>
    </View>
  ),
};

// ─── Interactive ──────────────────────────────────────────

export const Interactive: Story = {
  render: () => {
    const [val1, setVal1] = useState(false);
    const [val2, setVal2] = useState(true);
    return (
      <View style={{ gap: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Switch platform="ios" active={val1} onPress={() => setVal1(!val1)} />
          <Text style={{ fontSize: 15, color: '#292A2D' }}>알림 설정</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Switch platform="normal" active={val2} onPress={() => setVal2(!val2)} />
          <Text style={{ fontSize: 15, color: '#292A2D' }}>다크 모드</Text>
        </View>
      </View>
    );
  },
};

// ─── All Variants ─────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 32 }}>
      <View>
        <Label>iOS</Label>
        <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Switch platform="ios" size="small" active={false} />
          <Switch platform="ios" size="small" active />
          <Switch platform="ios" size="medium" active={false} />
          <Switch platform="ios" size="medium" active />
          <Switch platform="ios" size="small" active={false} disabled />
          <Switch platform="ios" size="small" active disabled />
        </View>
      </View>
      <View>
        <Label>Normal</Label>
        <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Switch platform="normal" size="small" active={false} />
          <Switch platform="normal" size="small" active />
          <Switch platform="normal" size="medium" active={false} />
          <Switch platform="normal" size="medium" active />
          <Switch platform="normal" size="small" active={false} disabled />
          <Switch platform="normal" size="small" active disabled />
        </View>
      </View>
    </View>
  ),
};
