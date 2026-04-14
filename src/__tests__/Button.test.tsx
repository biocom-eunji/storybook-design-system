import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../components/Button';

describe('Button', () => {
  it('renders label text', () => {
    render(<Button label="확인" />);
    expect(screen.getByText('확인')).toBeInTheDocument();
  });

  it('calls onPress when clicked', () => {
    const onPress = vi.fn();
    render(<Button label="클릭" onPress={onPress} />);
    fireEvent.click(screen.getByText('클릭'));
    expect(onPress).toHaveBeenCalledOnce();
  });

  it('does not call onPress when disabled', () => {
    const onPress = vi.fn();
    render(<Button label="비활성" onPress={onPress} disabled />);
    fireEvent.click(screen.getByText('비활성'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('shows loading indicator instead of label when loading', () => {
    render(<Button label="로딩" loading />);
    expect(screen.queryByText('로딩')).not.toBeInTheDocument();
  });

  it('has correct accessibility role', () => {
    render(<Button label="접근성" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('applies disabled accessibility state', () => {
    render(<Button label="비활성" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('renders all size variants without error', () => {
    const sizes = ['small', 'medium', 'large'] as const;
    sizes.forEach((size) => {
      const { unmount } = render(<Button label={`${size} 버튼`} size={size} />);
      expect(screen.getByText(`${size} 버튼`)).toBeInTheDocument();
      unmount();
    });
  });

  it('renders all variant/color combinations', () => {
    const variants = ['solid', 'outlined'] as const;
    const colors = ['primary', 'assistive'] as const;
    variants.forEach((variant) => {
      colors.forEach((color) => {
        const label = `${variant}-${color}`;
        const { unmount } = render(<Button label={label} variant={variant} color={color} />);
        expect(screen.getByText(label)).toBeInTheDocument();
        unmount();
      });
    });
  });
});
