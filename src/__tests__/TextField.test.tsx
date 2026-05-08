import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from '../components/TextField';

describe('TextField', () => {
  it('renders label text', () => {
    render(<TextField label="이름" />);
    expect(screen.getByText('이름')).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    render(<TextField placeholder="입력하세요" />);
    expect(screen.getByPlaceholderText('입력하세요')).toBeInTheDocument();
  });

  it('renders default placeholder when none provided', () => {
    render(<TextField />);
    expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toBeInTheDocument();
  });

  it('displays value', () => {
    render(<TextField value="안녕하세요" />);
    expect(screen.getByDisplayValue('안녕하세요')).toBeInTheDocument();
  });

  it('calls onChangeText when typing', () => {
    const onChangeText = vi.fn();
    render(<TextField onChangeText={onChangeText} />);
    const input = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
    fireEvent.change(input, { target: { value: '테스트' } });
    expect(onChangeText).toHaveBeenCalled();
  });

  it('shows error message', () => {
    render(<TextField errorMessage="필수 입력 항목입니다" />);
    expect(screen.getByText('필수 입력 항목입니다')).toBeInTheDocument();
  });

  it('shows success message', () => {
    render(<TextField successMessage="사용 가능합니다" />);
    expect(screen.getByText('사용 가능합니다')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(<TextField helperText="도움말 텍스트" />);
    expect(screen.getByText('도움말 텍스트')).toBeInTheDocument();
  });

  it('makes input readonly when disabled', () => {
    render(<TextField disabled label="비활성" />);
    const input = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
    // react-native-web renders editable={false} as readonly attribute
    expect(input).toHaveAttribute('readonly');
  });

  it('shows character counter', () => {
    render(<TextField value="abc" maxCharCount={10} />);
    expect(screen.getByText('3/10')).toBeInTheDocument();
  });
});
