import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '../src/components/Chip';
import { Icon } from '../src/components/Icon';
import { spacing } from '../src/tokens/theme';

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
    leadingIcon: <Icon name="check" size={16} />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    label: '텍스트',
    variant: 'solid',
    trailingIcon: <Icon name="close" size={16} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: '텍스트',
    variant: 'outlined',
    leadingIcon: <Icon name="check" size={16} />,
    trailingIcon: <Icon name="close" size={16} />,
  },
};

// ─── All Sizes ────────────────────────────────────────────

export const AllSizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
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
    <View style={{ gap: spacing.md }}>
      <View style={{ flexDirection: 'row', gap: spacing.sm, alignItems: 'center' }}>
        <Chip label="Inactive" variant="solid" />
        <Chip label="Active" variant="solid" active />
        <Chip label="Disabled" variant="solid" disabled />
      </View>
      <View style={{ flexDirection: 'row', gap: spacing.sm, alignItems: 'center' }}>
        <Chip label="Inactive" variant="outlined" />
        <Chip label="Active" variant="outlined" active />
        <Chip label="Disabled" variant="outlined" disabled />
      </View>
    </View>
  ),
};
