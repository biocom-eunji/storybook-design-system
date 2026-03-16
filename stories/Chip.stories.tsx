import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '../src/components/Chip';

/** 아이콘 placeholder (Storybook 데모용) */
const IconPlaceholder = ({ color = '#000', width = 16, height = 16 }: any) => (
  <View
    style={{
      width,
      height,
      borderRadius: 2,
      borderWidth: 1.5,
      borderColor: color,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{ fontSize: width * 0.5, color, lineHeight: width * 0.7 }}>✓</Text>
  </View>
);

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined'],
      description: '칩 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large'],
      description: '칩 크기',
    },
    active: { control: 'boolean', description: '활성화 상태' },
    disabled: { control: 'boolean', description: '비활성화 상태' },
    label: { control: 'text', description: '칩 텍스트' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

// ─── Variant ──────────────────────────────────────────────

export const Solid: Story = {
  args: { label: '텍스트', variant: 'solid', size: 'medium' },
};

export const Outlined: Story = {
  args: { label: '텍스트', variant: 'outlined', size: 'medium' },
};

// ─── Size ─────────────────────────────────────────────────

export const XSmall: Story = {
  args: { label: '텍스트', size: 'xsmall' },
};

export const Small: Story = {
  args: { label: '텍스트', size: 'small' },
};

export const Medium: Story = {
  args: { label: '텍스트', size: 'medium' },
};

export const Large: Story = {
  args: { label: '텍스트', size: 'large' },
};

// ─── Active ───────────────────────────────────────────────

export const SolidActive: Story = {
  args: { label: '텍스트', variant: 'solid', active: true },
};

export const OutlinedActive: Story = {
  args: { label: '텍스트', variant: 'outlined', active: true },
};

// ─── Disabled ─────────────────────────────────────────────

export const Disabled: Story = {
  args: { label: '텍스트', variant: 'solid', disabled: true },
};

export const DisabledOutlined: Story = {
  args: { label: '텍스트', variant: 'outlined', disabled: true },
};

// ─── Icon ─────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
  args: {
    label: '텍스트',
    variant: 'solid',
    leadingIcon: <IconPlaceholder />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    label: '텍스트',
    variant: 'solid',
    trailingIcon: <IconPlaceholder />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: '텍스트',
    variant: 'outlined',
    leadingIcon: <IconPlaceholder />,
    trailingIcon: <IconPlaceholder />,
  },
};

// ─── All Sizes ────────────────────────────────────────────

export const AllSizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Chip label="텍스트" size="xsmall" />
      <Chip label="텍스트" size="small" />
      <Chip label="텍스트" size="medium" />
      <Chip label="텍스트" size="large" />
    </View>
  ),
};

// ─── All States ───────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <Chip label="Inactive" variant="solid" />
        <Chip label="Active" variant="solid" active />
        <Chip label="Disabled" variant="solid" disabled />
      </View>
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <Chip label="Inactive" variant="outlined" />
        <Chip label="Active" variant="outlined" active />
        <Chip label="Disabled" variant="outlined" disabled />
      </View>
    </View>
  ),
};
