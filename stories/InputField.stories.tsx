import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputField } from '../src/components/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    label: { control: 'text', description: '라벨' },
    placeholder: { control: 'text', description: '플레이스홀더' },
    value: { control: 'text', description: '입력값' },
    helperText: { control: 'text', description: '도움말' },
    errorMessage: { control: 'text', description: '에러 메시지' },
    successMessage: { control: 'text', description: '성공 메시지' },
    maxCharCount: { control: 'number', description: '최대 글자 수' },
    disabled: { control: 'boolean', description: '비활성화' },
    multiline: { control: 'boolean', description: 'Textarea 모드' },
    trailingIcon: {
      control: 'select',
      options: [undefined, 'clear', 'error', 'success', 'search'],
      description: '우측 아이콘',
    },
    trailingText: { control: 'text', description: '우측 텍스트 링크' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 360, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InputField>;

// ─── Playground ───────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: '주제',
    placeholder: '메시지를 입력해 주세요.',
    helperText: '메시지에 마침표를 찍어요.',
    maxCharCount: 2000,
  },
};

// ─── 4 States ─────────────────────────────────────────────

const StateRow = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <View style={{ flex: 1, minWidth: 280 }}>
    <Text style={{ fontSize: 12, fontWeight: '600', color: '#70737C', marginBottom: 8 }}>{title}</Text>
    {children}
  </View>
);

export const FourStates: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 24, maxWidth: 800 }}>
      <StateRow title="Inactive">
        <InputField
          label="주제"
          placeholder="메시지를 입력해 주세요."
          helperText="메시지에 마침표를 찍어요."
          maxCharCount={2000}
        />
      </StateRow>
      <StateRow title="Active">
        <InputField
          label="주제"
          value="입력된 내용"
          helperText="메시지에 마침표를 찍어요."
          maxCharCount={2000}
        />
      </StateRow>
    </View>
  ),
  name: 'States: Inactive / Active',
};

// ─── With Trailing Text ──────────────────────────────────

export const WithTrailingText: Story = {
  args: {
    label: '주제',
    placeholder: '메시지를 입력해 주세요.',
    helperText: '메시지에 마침표를 찍어요.',
    maxCharCount: 2000,
    trailingText: '텍스트',
  },
};

export const ActiveWithTrailingText: Story = {
  args: {
    label: '주제',
    value: '입력된 내용',
    helperText: '메시지에 마침표를 찍어요.',
    maxCharCount: 2000,
    trailingText: '텍스트',
  },
};

// ─── Error State ──────────────────────────────────────────

export const Error: Story = {
  args: {
    label: '주제',
    placeholder: '텍스트를 입력해 주세요.',
    errorMessage: '에러 메시지를 나타내요.',
    trailingIcon: 'error',
  },
};

export const ErrorWithValue: Story = {
  args: {
    label: '주제',
    value: '값',
    errorMessage: '에러 메시지를 나타내요.',
    trailingIcon: 'error',
  },
};

export const ErrorWithTrailingText: Story = {
  args: {
    label: '주제',
    value: '값',
    errorMessage: '에러 메시지를 나타내요.',
    trailingIcon: 'error',
    trailingText: '텍스트',
  },
};

// ─── Success State ────────────────────────────────────────

export const Success: Story = {
  args: {
    label: '주제',
    value: '값',
    successMessage: '성공 메시지를 나타내요.',
    trailingIcon: 'success',
  },
};

export const SuccessWithTrailingText: Story = {
  args: {
    label: '주제',
    value: '값',
    successMessage: '성공 메시지를 나타내요.',
    trailingIcon: 'success',
    trailingText: '텍스트',
  },
};

// ─── Clear Icon ───────────────────────────────────────────

export const WithClearIcon: Story = {
  args: {
    label: '주제',
    value: '값',
    helperText: '메시지에 마침표를 찍어요.',
    trailingIcon: 'clear',
    trailingText: '텍스트',
  },
};

// ─── Disabled ─────────────────────────────────────────────

export const Disabled: Story = {
  args: {
    label: '주제',
    placeholder: '텍스트를 입력해 주세요.',
    helperText: '메시지에 마침표를 찍어요.',
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    label: '주제',
    value: '입력된 내용',
    helperText: '메시지에 마침표를 찍어요.',
    disabled: true,
    trailingText: '텍스트',
  },
};

// ─── Textarea ─────────────────────────────────────────────

export const Textarea: Story = {
  args: {
    label: '주제',
    placeholder: '메시지를 입력해 주세요.',
    helperText: '메시지에 마침표를 찍어요.',
    maxCharCount: 2000,
    multiline: true,
  },
};

export const TextareaWithValue: Story = {
  args: {
    label: '주제',
    value: '입력된 내용',
    helperText: '메시지에 마침표를 찍어요.',
    maxCharCount: 2000,
    multiline: true,
    trailingText: '텍스트',
  },
};

export const TextareaDisabled: Story = {
  args: {
    label: '주제',
    value: '입력된 내용',
    helperText: '메시지에 마침표를 찍어요.',
    maxCharCount: 2000,
    multiline: true,
    disabled: true,
  },
};

// ─── Interactive Demo ─────────────────────────────────────

export const InteractiveDemo: Story = {
  render: () => {
    const [text, setText] = useState('');
    return (
      <InputField
        label="주제"
        placeholder="메시지를 입력해 주세요."
        value={text}
        onChangeText={setText}
        helperText="메시지에 마침표를 찍어요."
        maxCharCount={2000}
        trailingIcon={text.length > 0 ? 'clear' : undefined}
        onClear={() => setText('')}
        trailingText="텍스트"
      />
    );
  },
};

// ─── All Variants ─────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 32, maxWidth: 360 }}>
      <View>
        <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 12, color: '#171719' }}>기본</Text>
        <InputField label="주제" placeholder="메시지를 입력해 주세요." helperText="메시지에 마침표를 찍어요." maxCharCount={2000} />
      </View>
      <View>
        <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 12, color: '#171719' }}>입력됨 + 텍스트 링크</Text>
        <InputField label="주제" value="입력된 내용" helperText="메시지에 마침표를 찍어요." maxCharCount={2000} trailingText="텍스트" />
      </View>
      <View>
        <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 12, color: '#171719' }}>에러</Text>
        <InputField label="주제" value="값" errorMessage="에러 메시지를 나타내요." trailingIcon="error" />
      </View>
      <View>
        <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 12, color: '#171719' }}>성공</Text>
        <InputField label="주제" value="값" successMessage="성공 메시지를 나타내요." trailingIcon="success" />
      </View>
      <View>
        <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 12, color: '#171719' }}>비활성화</Text>
        <InputField label="주제" placeholder="텍스트를 입력해 주세요." disabled helperText="메시지에 마침표를 찍어요." />
      </View>
      <View>
        <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 12, color: '#171719' }}>Textarea</Text>
        <InputField label="주제" placeholder="메시지를 입력해 주세요." multiline maxCharCount={2000} helperText="메시지에 마침표를 찍어요." />
      </View>
    </View>
  ),
};
