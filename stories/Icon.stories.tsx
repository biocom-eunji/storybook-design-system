import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../src/components/Icon';
import { iconNames } from '../src/components/Icon';
import { iconPaths } from '../src/components/Icon/iconPaths';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: '아이콘 이름',
    },
    size: {
      control: { type: 'range', min: 12, max: 64, step: 4 },
      description: '아이콘 크기 (px)',
    },
    color: { control: 'color', description: '색상 직접 지정' },
    active: { control: 'boolean', description: '활성화 상태' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

// ─── Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: { name: 'bell', size: 32 },
};

// ─── Sizes ────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      {[16, 20, 24, 32, 48].map((s) => (
        <View key={s} style={{ alignItems: 'center', gap: 4 }}>
          <Icon name="star" size={s} />
          <Text style={styles.caption}>{s}px</Text>
        </View>
      ))}
    </View>
  ),
};

// ─── Active / Inactive ───────────────────────────────────

export const ActiveState: Story = {
  render: () => {
    const stateful = iconNames.filter((n) => iconPaths[n].activeColor);
    return (
      <View style={{ gap: 12 }}>
        <View style={{ flexDirection: 'row', gap: 24 }}>
          <Text style={[styles.header, { width: 180 }]}>아이콘</Text>
          <Text style={styles.header}>Inactive</Text>
          <Text style={styles.header}>Active</Text>
        </View>
        {stateful.map((name) => (
          <View key={name} style={{ flexDirection: 'row', alignItems: 'center', gap: 24 }}>
            <Text style={[styles.label, { width: 180 }]}>{name}</Text>
            <View style={{ width: 50, alignItems: 'center' }}>
              <Icon name={name} size={24} active={false} />
            </View>
            <View style={{ width: 50, alignItems: 'center' }}>
              <Icon name={name} size={24} active={true} />
            </View>
          </View>
        ))}
      </View>
    );
  },
};

// ─── Custom Color ────────────────────────────────────────

export const CustomColor: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
      <Icon name="bell" size={28} color="#EF4444" />
      <Icon name="star" size={28} color="#F59E0B" />
      <Icon name="check" size={28} color="#10B981" />
      <Icon name="info" size={28} color="#3B82F6" />
      <Icon name="camera" size={28} color="#8B5CF6" />
    </View>
  ),
};

// ─── All Icons ────────────────────────────────────────────

export const AllIcons: Story = {
  render: () => (
    <View style={styles.grid}>
      {iconNames.map((name) => (
        <View key={name} style={styles.cell}>
          <Icon name={name} size={24} />
          <Text style={styles.caption} numberOfLines={1}>{name}</Text>
        </View>
      ))}
    </View>
  ),
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  cell: {
    width: 100,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 8,
    backgroundColor: '#F7F8F9',
    padding: 8,
  },
  caption: {
    fontSize: 11,
    color: '#6B7280',
    textAlign: 'center',
  },
  label: {
    fontSize: 13,
    color: '#333B47',
    fontFamily: 'monospace',
  },
  header: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F2937',
    width: 50,
    textAlign: 'center',
  },
});
