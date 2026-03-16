import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined'],
      description: '버튼 스타일 변형',
    },
    color: {
      control: 'select',
      options: ['primary', 'assistive'],
      description: '버튼 컬러',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    label: { control: 'text', description: '버튼 텍스트' },
    disabled: { control: 'boolean', description: '비활성화 상태' },
    loading: { control: 'boolean', description: '로딩 상태' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Variant ──────────────────────────────────────────────

export const Solid: Story = {
  args: { label: '확인', variant: 'solid', color: 'primary', size: 'medium' },
};

export const Outlined: Story = {
  args: { label: '확인', variant: 'outlined', color: 'primary', size: 'medium' },
};

// ─── Color ────────────────────────────────────────────────

export const PrimarySolid: Story = {
  args: { label: '메인 액션', variant: 'solid', color: 'primary' },
};

export const PrimaryOutlined: Story = {
  args: { label: '메인 액션', variant: 'outlined', color: 'primary' },
};

export const AssistiveSolid: Story = {
  args: { label: '보조', variant: 'solid', color: 'assistive' },
};

export const AssistiveOutlined: Story = {
  args: { label: '보조', variant: 'outlined', color: 'assistive' },
};

// ─── Size ─────────────────────────────────────────────────

export const Small: Story = {
  args: { label: '작은 버튼', variant: 'solid', color: 'primary', size: 'small' },
};

export const Medium: Story = {
  args: { label: '중간 버튼', variant: 'solid', color: 'primary', size: 'medium' },
};

export const Large: Story = {
  args: { label: '큰 버튼', variant: 'solid', color: 'primary', size: 'large' },
};

// ─── State ────────────────────────────────────────────────

export const Disabled: Story = {
  args: { label: '비활성화', variant: 'solid', color: 'primary', disabled: true },
};

export const DisabledOutlined: Story = {
  args: { label: '비활성화', variant: 'outlined', color: 'primary', disabled: false },
};

export const Loading: Story = {
  args: { label: '로딩 중', variant: 'solid', color: 'primary', loading: true },
};
