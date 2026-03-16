/**
 * Design System Theme
 * - design.png 기반으로 추출된 컬러, 타이포그래피, 컴포넌트 토큰
 */

// ─── Colors ───────────────────────────────────────────────

export const palette = {
  // Primary (Teal/Turquoise)
  primary: {
    50: '#E0F7F6',
    100: '#B3ECE9',
    200: '#80E0DB',
    300: '#4DD4CD',
    400: '#2DCBC3',
    500: '#2CBCB6', // 메인 브랜드 컬러
    600: '#26A9A3',
    700: '#1F908B',
    800: '#197873',
    900: '#0F524E',
  },

  // Neutral (Gray)
  neutral: {
    0: '#FFFFFF',
    50: '#F7F8F9',
    100: '#F1F2F4',
    200: '#E4E6E9',
    300: '#D1D4D9',
    400: '#B0B5BD',
    500: '#8C929B',
    600: '#6B7280',
    700: '#4B5563',
    800: '#333B47',
    900: '#1F2937',
    1000: '#111827',
  },

  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  white: '#FFFFFF',
  black: '#000000',
} as const;

// ─── Typography ───────────────────────────────────────────

export const fontFamily = {
  base: 'System',
  // iOS: 'SF Pro Text', Android: 'Roboto'에 매핑됨
} as const;

export const fontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 34,
} as const;

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const lineHeight = {
  xs: 16,
  sm: 18,
  md: 22,
  lg: 24,
  xl: 28,
  '2xl': 32,
  '3xl': 36,
  '4xl': 42,
} as const;

export const textStyle = {
  heading1: {
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight['4xl'],
  },
  heading2: {
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight['3xl'],
  },
  heading3: {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight['2xl'],
  },
  title1: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.xl,
  },
  title2: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.lg,
  },
  body1: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.md,
  },
  body2: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.sm,
  },
  caption: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.xs,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.sm,
  },
} as const;

// ─── Spacing & Radius ─────────────────────────────────────

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 48,
} as const;

export const radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

// ─── Component Tokens ─────────────────────────────────────

/** Button: variant = solid | outlined, color = primary | assistive */
export const buttonToken = {
  size: {
    small: {
      height: 36,
      paddingHorizontal: 14,
      fontSize: fontSize.sm,
      iconSize: 16,
      radius: radius.sm,
    },
    medium: {
      height: 44,
      paddingHorizontal: 18,
      fontSize: fontSize.md,
      iconSize: 20,
      radius: radius.md,
    },
    large: {
      height: 52,
      paddingHorizontal: 24,
      fontSize: fontSize.lg,
      iconSize: 24,
      radius: radius.md,
    },
  },
  color: {
    primary: {
      solid: {
        background: palette.primary[500],
        content: palette.white,
        backgroundPressed: palette.primary[700],
        backgroundHovered: palette.primary[600],
        backgroundDisabled: palette.neutral[200],
        contentDisabled: palette.neutral[400],
      },
      outlined: {
        background: 'transparent',
        content: palette.primary[500],
        border: palette.primary[500],
        backgroundPressed: palette.primary[50],
        backgroundHovered: palette.primary[50],
        backgroundDisabled: 'transparent',
        contentDisabled: palette.neutral[400],
        borderDisabled: palette.neutral[200],
      },
    },
    assistive: {
      solid: {
        background: palette.neutral[100],
        content: palette.neutral[900],
        backgroundPressed: palette.neutral[300],
        backgroundHovered: palette.neutral[200],
        backgroundDisabled: palette.neutral[100],
        contentDisabled: palette.neutral[400],
      },
      outlined: {
        background: 'transparent',
        content: palette.neutral[700],
        border: palette.neutral[300],
        backgroundPressed: palette.neutral[100],
        backgroundHovered: palette.neutral[50],
        backgroundDisabled: 'transparent',
        contentDisabled: palette.neutral[400],
        borderDisabled: palette.neutral[200],
      },
    },
  },
} as const;

/** Text Button: 배경색이나 테두리가 없는 버튼 */
export const textButtonToken = {
  size: {
    small: {
      fontSize: fontSize.sm,
      iconSize: 16,
    },
    medium: {
      fontSize: fontSize.md,
      iconSize: 20,
    },
  },
  color: {
    primary: {
      content: palette.primary[500],
      contentPressed: palette.primary[700],
      contentHovered: palette.primary[600],
      contentDisabled: palette.neutral[400],
    },
    assistive: {
      content: palette.neutral[600],
      contentPressed: palette.neutral[800],
      contentHovered: palette.neutral[700],
      contentDisabled: palette.neutral[400],
    },
  },
} as const;

/** Chip: 상호작용을 통해 정보를 분류하거나, 상태를 표시 */
export const chipToken = {
  size: {
    xsmall: {
      height: 24,
      paddingHorizontal: 8,
      fontSize: fontSize.xs,
      iconSize: 12,
      radius: radius.xs,
    },
    small: {
      height: 28,
      paddingHorizontal: 10,
      fontSize: fontSize.xs,
      iconSize: 14,
      radius: radius.sm,
    },
    medium: {
      height: 32,
      paddingHorizontal: 12,
      fontSize: fontSize.sm,
      iconSize: 16,
      radius: radius.sm,
    },
    large: {
      height: 38,
      paddingHorizontal: 14,
      fontSize: fontSize.md,
      iconSize: 18,
      radius: radius.md,
    },
  },
  variant: {
    solid: {
      inactive: {
        background: palette.neutral[100],
        content: palette.neutral[700],
      },
      active: {
        background: palette.neutral[1000],
        content: palette.white,
      },
      disabled: {
        background: palette.neutral[100],
        content: palette.neutral[400],
      },
    },
    outlined: {
      inactive: {
        background: 'transparent',
        content: palette.neutral[700],
        border: palette.neutral[300],
      },
      active: {
        background: 'transparent',
        content: palette.primary[500],
        border: palette.primary[500],
      },
      disabled: {
        background: 'transparent',
        content: palette.neutral[400],
        border: palette.neutral[200],
      },
    },
  },
} as const;

/** Action Area: 화면 하단 액션 버튼 영역 */
export const actionAreaToken = {
  variant: {
    strong: {
      /** 메인 액션 단일 버튼, full-width primary */
      description: 'CTA 강조형 — 메인 액션 하나만 노출',
    },
    neutral: {
      /** 보조 + 대체 + 메인 조합 */
      description: '보조/대체/메인 복합 액션',
    },
    compact: {
      /** neutral과 동일 구성, 작은 크기 */
      description: '작은 크기 복합 액션',
    },
    cancel: {
      /** 확인 단일 텍스트 버튼 */
      description: '취소/확인 단일 액션',
    },
  },
  padding: spacing.lg,
  gap: spacing.sm,
} as const;

// ─── Theme (통합) ─────────────────────────────────────────

export const theme = {
  palette,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textStyle,
  spacing,
  radius,
  components: {
    button: buttonToken,
    textButton: textButtonToken,
    chip: chipToken,
    actionArea: actionAreaToken,
  },
} as const;

export type Theme = typeof theme;
export default theme;
