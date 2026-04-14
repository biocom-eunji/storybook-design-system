/**
 * Design System Theme
 * - Definition.png 기반 컬러 팔레트 + design.png 기반 컴포넌트 토큰
 */

// ─── Color Palette ──────────────────────────────────────

export const coolNeutral = {
  100: '#FFFFFF',
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

export const yellow = {
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

export const orange = {
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
  coolNeutral,
  khaki,
  yellow,
  orange,
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
  xsmall: 12,
  small: 13,
  medium: 15,
  large: 17,
  xlarge: 20,
  '2xlarge': 24,
  '3xlarge': 28,
  '4xlarge': 32,
} as const;

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
} as const;

export const lineHeight = {
  xsmall: 16,
  small: 18,
  medium: 20,
  large: 22,
  xlarge: 24,
  '2xlarge': 28,
  '3xlarge': 32,
  '4xlarge': 38,
  '5xlarge': 44,
} as const;

/**
 * 시맨틱 텍스트 스타일 — 피그마 11개 위계와 1:1 매칭
 *
 * 사용법: <Text style={textStyle.title1}>제목</Text>
 *
 * lineHeight · letterSpacing 는 RN 절대 px 단위입니다.
 * (CSS의 배수가 아니므로 앱에 그대로 적용 가능)
 */
export const textStyle = {
  /** 32px · Bold · 44px — 서비스 핵심 타이틀, 온보딩 메인 문구 */
  title1:   { fontSize: 32, fontWeight: '700' as const, lineHeight: 44, letterSpacing: -0.81 },
  /** 28px · Bold · 38px — 페이지 상단 헤더, 주요 섹션 대제목 */
  title2:   { fontSize: 28, fontWeight: '700' as const, lineHeight: 38, letterSpacing: -0.66 },
  /** 24px · Bold · 32px — 카드/모달 타이틀, 하위 페이지 대제목 */
  title3:   { fontSize: 24, fontWeight: '700' as const, lineHeight: 32, letterSpacing: -0.55 },
  /** 20px · SemiBold · 28px — 소제목, 섹션 구분, 강조 중간 타이틀 */
  heading:  { fontSize: 20, fontWeight: '600' as const, lineHeight: 28, letterSpacing: -0.24 },
  /** 17px · SemiBold · 24px — 리스트 헤더, 탭 섹션 제목 */
  headline: { fontSize: 17, fontWeight: '600' as const, lineHeight: 24, letterSpacing: 0 },
  /** 16px · Regular · 24px — 일반 본문, 상세 설명 */
  body1:    { fontSize: 16, fontWeight: '400' as const, lineHeight: 24, letterSpacing: 0.09 },
  /** 15px · Regular · 22px — 보조 본문, 세부 설명 */
  body2:    { fontSize: 15, fontWeight: '400' as const, lineHeight: 22, letterSpacing: 0.14 },
  /** 16px · Regular · 24px — 본문 강조, Body 1 대체 스타일 */
  body3:    { fontSize: 16, fontWeight: '400' as const, lineHeight: 24, letterSpacing: 0.09 },
  /** 14px · Medium · 20px — 버튼 텍스트, 탭 메뉴, 클릭 요소 */
  label1:   { fontSize: 14, fontWeight: '500' as const, lineHeight: 20, letterSpacing: 0.2 },
  /** 13px · Medium · 18px — 소형 버튼, 태그, 필터 칩 */
  label2:   { fontSize: 13, fontWeight: '500' as const, lineHeight: 18, letterSpacing: 0.25 },
  /** 12px · Regular · 16px — 캡션, 보조 설명, 날짜 등 작은 정보 */
  caption:  { fontSize: 12, fontWeight: '400' as const, lineHeight: 16, letterSpacing: 0.3 },
} as const;

// ─── Spacing & Radius ────────────────────────────────────

export const spacing = {
  xsmall: 4,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 20,
  '2xlarge': 24,
  '3xlarge': 32,
  '4xlarge': 48,
} as const;

export const radius = {
  xsmall: 4,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 24,
  full: 9999,
} as const;

// ─── Shadow & Elevation ─────────────────────────────────

/** 그림자 단계 토큰 — 카드, 모달, 바텀시트 등에 사용 */
export const shadow = {
  level1: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  level2: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  level3: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;

/** 화면 좌우 마진 토큰 */
export const screenMargin = {
  default: 16,
  compact: 12,
  wide: 20,
} as const;

/** 그리드 기본 단위 (4px 기반) */
export const gridUnit = 4 as const;

// ─── Interaction ─────────────────────────────────────────

/** 인터랙션 피드백에 사용하는 공통 상수 */
export const interaction = {
  /** Pressable 눌림 시 투명도 */
  pressOpacity: 0.7,
  /** 오버레이(바텀시트, 모달) 배경 투명도 */
  overlayOpacity: 0.4,
} as const;

// ─── Semantic Role Primitives ────────────────────────────
// 역할(Role)별 단일 색상 소스 — 다크모드 전환 시 이 값만 교체

const _surface = {
  primary:   coolNeutral[100],
  secondary: coolNeutral[99],
  tertiary:  coolNeutral[97],
  inverse:   coolNeutral[10],
} as const;

const _content = {
  primary:  coolNeutral[17],
  secondary: coolNeutral[50],
  tertiary: coolNeutral[80],
  onColor:  coolNeutral[100],
} as const;

const _line = {
  default: coolNeutral[96],
  active:  coolNeutral[90],
} as const;

const _role = {
  brand:        mint[45],
  brandPressed: mint[30],
  error:        red[70],
  success:      mint[45],
  warning:      yellow[50],
} as const;

// ─── Semantic Color Tokens ───────────────────────────────
// 컴포넌트에서 color={semanticColor.textPrimary} 형태로 사용
// 속성(Property) 기반 — 다크모드 확장 시 _surface/_content/_line/_role만 교체

export const semanticColor = {
  // ── Text ───────────────────────────────────────────────
  /** 기본 본문·타이틀 텍스트 */
  textPrimary: _content.primary,
  /** 보조 설명, 부가 정보 텍스트 */
  textSecondary: _content.secondary,
  /** 비활성화 텍스트, 힌트, 플레이스홀더 */
  textTertiary: _content.tertiary,
  /** @alias textTertiary (하위 호환) */
  textPlaceholder: _content.tertiary,
  /** 색상 배경 위 텍스트 (버튼, 배지 등) */
  textOnColor: _content.onColor,
  /** 브랜드 강조 텍스트 (링크, 포커스 등) */
  textBrand: _role.brand,
  /** 에러 상태 텍스트 */
  textError: _role.error,
  /** 성공 상태 텍스트 */
  textSuccess: _role.success,
  /** 경고 상태 텍스트 */
  textWarning: _role.warning,

  // ── Background ────────────────────────────────────────
  /** 기본 화면 배경색 */
  backgroundPrimary: _surface.primary,
  /** 보조 배경색 (카드, 섹션 구분) */
  backgroundSecondary: _surface.secondary,
  /** 3단계 배경색 (인풋 비활성, 칩 등) */
  backgroundTertiary: _surface.tertiary,
  /** 반전 배경 (다크 영역, 활성 칩) */
  backgroundInverse: _surface.inverse,
  /** 브랜드 배경색 (CTA 버튼, 강조 영역) */
  backgroundBrand: _role.brand,
  /** 브랜드 배경 눌림 */
  backgroundBrandPressed: _role.brandPressed,
  /** 상태 배경 (에러/성공/경고 — 흰색 통일) */
  backgroundStatus: _surface.primary,
  /** 비활성화 배경 (Disabled 상태 컴포넌트) */
  backgroundDisabled: coolNeutral[96],

  // ── Border ────────────────────────────────────────────
  /** 기본·비활성화 테두리, 구분선 */
  borderDefault: _line.default,
  /** @alias borderDefault (하위 호환) */
  borderDisabled: _line.default,
  /** 입력됨 상태 테두리 */
  borderActive: _line.active,
  /** 포커스·브랜드 강조 테두리 */
  borderFocus: _role.brand,
  /** 에러 상태 테두리 */
  borderError: _role.error,
  /** 성공 상태 테두리 */
  borderSuccess: _role.success,

  // ── Icon ──────────────────────────────────────────────
  /** 기본 아이콘 색상 */
  iconPrimary: _content.primary,
  /** 보조 아이콘 색상 */
  iconSecondary: _content.secondary,
  /** 비활성화 아이콘 */
  iconDisabled: _content.tertiary,
  /** 브랜드 아이콘 */
  iconBrand: _role.brand,
  /** 색상 배경 위 아이콘 */
  iconOnColor: _content.onColor,
  /** 에러 아이콘 */
  iconError: _role.error,
  /** 성공 아이콘 */
  iconSuccess: _role.success,
} as const;

export type SemanticColor = typeof semanticColor;

// ─── Component Tokens ────────────────────────────────────

/** Button: variant = solid | outlined, color = primary | assistive */
export const buttonToken = {
  size: {
    small:  { height: 36, paddingHorizontal: 14, fontSize: fontSize.small, iconSize: 16, radius: radius.small },
    medium: { height: 44, paddingHorizontal: 18, fontSize: fontSize.medium, iconSize: 20, radius: radius.medium },
    large:  { height: 52, paddingHorizontal: 24, fontSize: fontSize.large, iconSize: 24, radius: radius.medium },
  },
  color: {
    primary: {
      solid: {
        background: mint[45],
        content: coolNeutral[100],
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
    small:  { fontSize: fontSize.small, iconSize: 16 },
    medium: { fontSize: fontSize.medium, iconSize: 20 },
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
    xsmall: { height: 24, paddingHorizontal: 8,  fontSize: fontSize.xsmall, iconSize: 12, radius: radius.xsmall },
    small:  { height: 28, paddingHorizontal: 10, fontSize: fontSize.xsmall, iconSize: 14, radius: radius.small },
    medium: { height: 32, paddingHorizontal: 12, fontSize: fontSize.small, iconSize: 16, radius: radius.small },
    large:  { height: 38, paddingHorizontal: 14, fontSize: fontSize.medium, iconSize: 18, radius: radius.medium },
  },
  variant: {
    solid: {
      inactive: { background: coolNeutral[97], content: coolNeutral[40] },
      active:   { background: coolNeutral[10], content: coolNeutral[100] },
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
    neutral: { description: '보조/메인 복합 액션' },
    compact: { description: '작은 크기 복합 액션' },
  },
  padding: spacing.large,
  gap: spacing.small,
} as const;

// ─── Theme (통합) ────────────────────────────────────────

export const theme = {
  palette,
  colors: semanticColor,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textStyle,
  spacing,
  radius,
  shadow,
  screenMargin,
  gridUnit,
  components: {
    button: buttonToken,
    textButton: textButtonToken,
    chip: chipToken,
    actionArea: actionAreaToken,
  },
} as const;

export type Theme = typeof theme;
export default theme;
