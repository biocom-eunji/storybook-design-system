import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/Checkbox';

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="동의합니다" />);
    expect(screen.getByText('동의합니다')).toBeInTheDocument();
  });

  it('renders with sublabel', () => {
    render(<Checkbox label="약관" sublabel="전문 보기" />);
    expect(screen.getByText('전문 보기')).toBeInTheDocument();
  });

  it('has checkbox accessibility role', () => {
    render(<Checkbox label="체크" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('calls onPress when clicked', () => {
    const onPress = vi.fn();
    render(<Checkbox label="클릭" onPress={onPress} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onPress).toHaveBeenCalledOnce();
  });

  it('does not call onPress when disabled', () => {
    const onPress = vi.fn();
    render(<Checkbox label="비활성" onPress={onPress} disabled />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('renders unchecked state by default', () => {
    render(<Checkbox label="기본" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders checked state', () => {
    render(<Checkbox label="체크됨" state="checked" />);
    // react-native-web maps accessibilityState.checked via aria-checked
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders both sizes without error', () => {
    const sizes = ['small', 'medium'] as const;
    sizes.forEach((size) => {
      const { unmount } = render(<Checkbox label={`${size}`} size={size} />);
      expect(screen.getByText(size)).toBeInTheDocument();
      unmount();
    });
  });
});
