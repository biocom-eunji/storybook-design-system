/**
 * Design System Theme
 * - Definition.png 기반 컬러 팔레트 + design.png 기반 컴포넌트 토큰
 */

// ─── Color Palette (Definition.png) ──────────────────────

export const neutral = {
  99: '#F7F7F7',
  95: '#DCDCDC',
  90: '#C4C4C4',
  80: '#B0B0B0',
  70: '#9B9B9B',
  60: '#8A8A8A',
  50: '#737373',
  40: '#5C5C5C',
  30: '#474747',
  22: '#303030',
  20: '#2A2A2A',
  15: '#1C1C1C',
  10: '#171717',
  5: '#0F0F0F',
} as const;

export const coolNeutral = {
  99: '#F7F7F8',
  98: '#F4F4F5',
  97: '#EAEBEC',
  96: '#E1E2E4',
  95: '#DBDCDF',
  90: '#C2C4C8',
  80: '#AEB0B6',
  70: '#989BA2',
  60: '#878A93',
  50: '#70737C',
  40: '#5A5C63',
  30: '#46474C',
  25: '#37383C',
  23: '#333438',
  22: '#2E2F33',
  20: '#292A2D',
  17: '#212225',
  15: '#1B1C1E',
  10: '#171719',
  7: '#141415',
  5: '#0F0F10',
} as const;

export const khaki = {
  99: '#FDFDFC',
  95: '#F4F7EE',
  90: '#E9EFDC',
  80: '#D3DEBA',
  70: '#BDCE97',
  60: '#A7BE74',
  50: '#91AD52',
  40: '#748B41',
  30: '#576831',
  20: '#3A4521',
  10: '#1D2310',
} as const;

export const orange = {
  99: '#FFFEFA',
  95: '#FFFAE5',
  90: '#FFF5CC',
  80: '#FFEC99',
  70: '#FFE266',
  60: '#FFD833',
  50: '#FFCE00',
  40: '#CCA500',
  30: '#997C00',
  20: '#665300',
  10: '#332900',
} as const;

export const redOrange = {
  99: '#FFFCFA',
  95: '#FFF2E5',
  90: '#FFE5CC',
  80: '#FFCB99',
  70: '#FFB166',
  60: '#FF9733',
  50: '#FF7D00',
  40: '#CC6400',
  30: '#994B00',
  20: '#663200',
  10: '#331900',
} as const;

export const red = {
  99: '#FEFAFA',
  95: '#FCE8E8',
  90: '#FAD1D1',
  80: '#F5A3A3',
  70: '#EF7676',
  60: '#EA4848',
  50: '#E51A1A',
  40: '#B71515',
  30: '#891010',
  20: '#5C0A0A',
  10: '#2E0505',
} as const;

export const pink = {
  99: '#FFFAFC',
  95: '#FFE5EE',
  80: '#FF99B9',
  75: '#FF80A8',
  70: '#FF6696',
  60: '#FF3374',
  50: '#FF0051',
  40: '#CC0041',
  30: '#990030',
  20: '#660020',
  10: '#330010',
} as const;

export const purple = {
  99: '#FEFBFF',
  95: '#F9EDFF',
  90: '#F2D6FF',
  80: '#E9BAFF',
  70: '#DE96FF',
  60: '#D478FF',
  50: '#CB59FF',
  40: '#AD36E3',
  30: '#861CB8',
  20: '#580A7D',
  10: '#290247',
} as const;

export const violet = {
  99: '#FBFAFF',
  95: '#F0ECFE',
  90: '#DBD3FE',
  80: '#C0B0FF',
  70: '#9E86FC',
  60: '#7D5EF7',
  50: '#6541F2',
  40: '#4F29E5',
  30: '#3A16C9',
  20: '#23098F',
  10: '#11024D',
} as const;

export const lightBlue = {
  99: '#F7FDFF',
  95: '#E5F6FE',
  90: '#C4ECFE',
  80: '#A1E1FF',
  70: '#70D2FF',
  60: '#3DC2FF',
  50: '#00AEFF',
  40: '#008DCF',
  30: '#006796',
  20: '#004261',
  10: '#002130',
} as const;

export const cyan = {
  99: '#F7FEFF',
  95: '#DEFAFF',
  90: '#B5F4FF',
  80: '#8AEDFF',
  70: '#57DFF7',
  60: '#28D0ED',
  50: '#00BDDE',
  40: '#0098B2',
  30: '#006F82',
  20: '#004854',
  10: '#00252B',
} as const;

export const mint = {
  99: '#FBFEFE',
  95: '#E9FBFA',
  90: '#D4F7F6',
  80: '#A8F0EC',
  70: '#7DE8E3',
  60: '#52E0DA',
  45: '#22C3BC',
  40: '#1FADA7',
  30: '#17827D',
  20: '#0F5753',
  10: '#082B2A',
} as const;

export const green = {
  99: '#FBFEFD',
  95: '#E9FBF5',
  90: '#D4F7EB',
  80: '#A8F0D6',
  70: '#7DE8C2',
  60: '#52E0AD',
  45: '#22C289',
  40: '#1FAD7A',
  30: '#17825C',
  20: '#0F573D',
  10: '#082B1F',
} as const;

/** 투명도 토큰 (Opacity) — 0 = 투명, 100 = 불투명 */
export const opacity = {
  0: 0,
  5: 0.05,
  8: 0.08,
  12: 0.12,
  16: 0.16,
  22: 0.22,
  28: 0.28,
  35: 0.35,
  43: 0.43,
  52: 0.52,
  61: 0.61,
  74: 0.74,
  88: 0.88,
  97: 0.97,
  100: 1,
} as const;

// ─── Palette (통합 색상 접근) ────────────────────────────

export const palette = {
  neutral,
  coolNeutral,
  khaki,
  orange,
  redOrange,
  red,
  pink,
  purple,
  violet,
  lightBlue,
  cyan,
  mint,
  green,
  opacity,
  white: '#FFFFFF',
  black: '#000000',
} as const;

// ─── Typography ──────────────────────────────────────────

export const fontFamily = {
  base: 'System',
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
  heading1: { fontSize: fontSize['4xl'], fontWeight: fontWeight.bold, lineHeight: lineHeight['4xl'] },
  heading2: { fontSize: fontSize['3xl'], fontWeight: fontWeight.bold, lineHeight: lineHeight['3xl'] },
  heading3: { fontSize: fontSize['2xl'], fontWeight: fontWeight.bold, lineHeight: lineHeight['2xl'] },
  title1:   { fontSize: fontSize.xl,     fontWeight: fontWeight.semibold, lineHeight: lineHeight.xl },
  title2:   { fontSize: fontSize.lg,     fontWeight: fontWeight.semibold, lineHeight: lineHeight.lg },
  body1:    { fontSize: fontSize.md,     fontWeight: fontWeight.regular, lineHeight: lineHeight.md },
  body2:    { fontSize: fontSize.sm,     fontWeight: fontWeight.regular, lineHeight: lineHeight.sm },
  caption:  { fontSize: fontSize.xs,     fontWeight: fontWeight.regular, lineHeight: lineHeight.xs },
  label:    { fontSize: fontSize.sm,     fontWeight: fontWeight.medium, lineHeight: lineHeight.sm },
} as const;

// ─── Spacing & Radius ────────────────────────────────────

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

// ─── Component Tokens ────────────────────────────────────

/** Button: variant = solid | outlined, color = primary | assistive */
export const buttonToken = {
  size: {
    small:  { height: 36, paddingHorizontal: 14, fontSize: fontSize.sm, iconSize: 16, radius: radius.sm },
    medium: { height: 44, paddingHorizontal: 18, fontSize: fontSize.md, iconSize: 20, radius: radius.md },
    large:  { height: 52, paddingHorizontal: 24, fontSize: fontSize.lg, iconSize: 24, radius: radius.md },
  },
  color: {
    primary: {
      solid: {
        background: mint[45],
        content: palette.white,
        backgroundPressed: mint[30],
        backgroundHovered: mint[40],
        backgroundDisabled: coolNeutral[96],
        contentDisabled: coolNeutral[80],
      },
      outlined: {
        background: 'transparent',
        content: mint[45],
        border: mint[45],
        backgroundPressed: mint[99],
        backgroundHovered: mint[99],
        backgroundDisabled: 'transparent',
        contentDisabled: coolNeutral[80],
        borderDisabled: coolNeutral[96],
      },
    },
    assistive: {
      solid: {
        background: coolNeutral[97],
        content: coolNeutral[17],
        backgroundPressed: coolNeutral[90],
        backgroundHovered: coolNeutral[95],
        backgroundDisabled: coolNeutral[97],
        contentDisabled: coolNeutral[80],
      },
      outlined: {
        background: 'transparent',
        content: coolNeutral[40],
        border: coolNeutral[90],
        backgroundPressed: coolNeutral[97],
        backgroundHovered: coolNeutral[99],
        backgroundDisabled: 'transparent',
        contentDisabled: coolNeutral[80],
        borderDisabled: coolNeutral[96],
      },
    },
  },
} as const;

/** Text Button: 배경색이나 테두리가 없는 버튼 */
export const textButtonToken = {
  size: {
    small:  { fontSize: fontSize.sm, iconSize: 16 },
    medium: { fontSize: fontSize.md, iconSize: 20 },
  },
  color: {
    primary: {
      content: mint[45],
      contentPressed: mint[30],
      contentHovered: mint[40],
      contentDisabled: coolNeutral[80],
    },
    assistive: {
      content: coolNeutral[50],
      contentPressed: coolNeutral[30],
      contentHovered: coolNeutral[40],
      contentDisabled: coolNeutral[80],
    },
  },
} as const;

/** Chip: 상호작용을 통해 정보를 분류하거나, 상태를 표시 */
export const chipToken = {
  size: {
    xsmall: { height: 24, paddingHorizontal: 8,  fontSize: fontSize.xs, iconSize: 12, radius: radius.xs },
    small:  { height: 28, paddingHorizontal: 10, fontSize: fontSize.xs, iconSize: 14, radius: radius.sm },
    medium: { height: 32, paddingHorizontal: 12, fontSize: fontSize.sm, iconSize: 16, radius: radius.sm },
    large:  { height: 38, paddingHorizontal: 14, fontSize: fontSize.md, iconSize: 18, radius: radius.md },
  },
  variant: {
    solid: {
      inactive: { background: coolNeutral[97], content: coolNeutral[40] },
      active:   { background: coolNeutral[10], content: palette.white },
      disabled: { background: coolNeutral[97], content: coolNeutral[80] },
    },
    outlined: {
      inactive: { background: 'transparent', content: coolNeutral[40], border: coolNeutral[90] },
      active:   { background: 'transparent', content: mint[45],        border: mint[45] },
      disabled: { background: 'transparent', content: coolNeutral[80], border: coolNeutral[96] },
    },
  },
} as const;

/** Action Area: 화면 하단 액션 버튼 영역 */
export const actionAreaToken = {
  variant: {
    strong:  { description: 'CTA 강조형 — 메인 액션 하나만 노출' },
    neutral: { description: '보조/대체/메인 복합 액션' },
    compact: { description: '작은 크기 복합 액션' },
    cancel:  { description: '취소/확인 단일 액션' },
  },
  padding: spacing.lg,
  gap: spacing.sm,
} as const;

// ─── Theme (통합) ────────────────────────────────────────

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
