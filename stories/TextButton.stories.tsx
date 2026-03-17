import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextButton } from '../src/components/TextButton';
import { Icon } from '../src/components/Icon';
import { spacing } from '../src/tokens/theme';

const meta: Meta<typeof TextButton> = {
  title: 'Components/TextButton',
  component: TextButton,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'assistive'],
      description: '버튼 컬러',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: '버튼 크기',
    },
    label: { control: 'text', description: '버튼 텍스트' },
    disabled: { control: 'boolean', description: '비활성화 상태' },
    loading: { control: 'boolean', description: '로딩 상태' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextButton>;

// ─── Color ────────────────────────────────────────────────

export const Primary: Story = {
  args: { label: '텍스트', color: 'primary', size: 'medium' },
};

export const Assistive: Story = {
  args: { label: '텍스트', color: 'assistive', size: 'medium' },
};

// ─── Size ─────────────────────────────────────────────────

export const Small: Story = {
  args: { label: '텍스트', color: 'primary', size: 'small' },
};

export const Medium: Story = {
  args: { label: '텍스트', color: 'primary', size: 'medium' },
};

// ─── State ────────────────────────────────────────────────

export const Disabled: Story = {
  args: { label: '텍스트', color: 'primary', disabled: true },
};

export const Loading: Story = {
  args: { label: '텍스트', color: 'primary', loading: true },
};

// ─── Icon ─────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
  args: {
    label: '텍스트',
    color: 'primary',
    leadingIcon: <Icon name="arrowRight" size={16} />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    label: '텍스트',
    color: 'primary',
    trailingIcon: <Icon name="arrowRight" size={16} />,
  },
};

// ─── All Variants ─────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: spacing.lg }}>
      <View style={{ flexDirection: 'row', gap: spacing.xl, alignItems: 'center' }}>
        <TextButton label="Primary" color="primary" size="medium" />
        <TextButton label="Assistive" color="assistive" size="medium" />
        <TextButton label="Disabled" color="primary" disabled />
      </View>
      <View style={{ flexDirection: 'row', gap: spacing.xl, alignItems: 'center' }}>
        <TextButton label="Small" color="primary" size="small" />
        <TextButton label="Medium" color="primary" size="medium" />
      </View>
      <View style={{ flexDirection: 'row', gap: spacing.xl, alignItems: 'center' }}>
        <TextButton label="Leading" color="primary" leadingIcon={<Icon name="arrowRight" size={16} />} />
        <TextButton label="Trailing" color="primary" trailingIcon={<Icon name="arrowRight" size={16} />} />
      </View>
    </View>
  ),
};
