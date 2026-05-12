/**
 * Design System Theme
 * - Definition.png 기반 컬러 팔레트 + design.png 기반 컴포넌트 토큰
 */

// ─── Color Palette ──────────────────────────────────────

/**
 * @deprecated v2.0: Use `colorTokensV2.Mono.neutral` (50/100/.../900) 대신 사용하세요.
 *  v1 22단 스케일은 v2에서 10단으로 정리됨. 매핑은 PR 본문 참조.
 */
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

/** @deprecated v2.0: Use `colorTokensV2.Accent.khaki` (50/100/.../900) — naming 역전 주의 */
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

/** @deprecated v2.0: Use `colorTokensV2.Semantic.yellow` (50/100/.../900). yellow50은 의미 반전 — 강한 노랑은 yellow300 */
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

/** @deprecated v2.0: orange는 Accent에서 Semantic으로 이동. `colorTokensV2.Semantic.orange` 참조 */
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

/** @deprecated v2.0: Use `colorTokensV2.Semantic.red` (50/100/.../900). red50은 의미 반전 — 강한 빨강은 red500 */
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

/** @deprecated v2.0: Use `colorTokensV2.Accent.pink` (50/100/.../900). pink50은 의미 반전 — 강한 핑크는 pink500 */
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

/** @deprecated v2.0: Use `colorTokensV2.Accent.purple`. purple50은 의미 반전 — 강한 퍼플은 purple500 */
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

/** @deprecated v2.0: Use `colorTokensV2.Accent.violet`. violet50은 의미 반전 — 강한 바이올렛은 violet500 */
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

/** @deprecated v2.0: Use `colorTokensV2.Accent.lightBlue`. lightBlue50은 의미 반전 — 강한 색은 lightBlue400 */
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

/** @deprecated v2.0: Use `colorTokensV2.Accent.cyan`. cyan50은 의미 반전 — 강한 시안은 cyan400 */
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

/** @deprecated v2.0: Use `colorTokensV2.Mono.mint` (Brand 컬렉션 폐기, Mono로 이동). mint45=mint400 동일 hex */
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

/** @deprecated v2.0: Use `colorTokensV2.Semantic.green`. green45 → green400 (값은 변경됨: #22C289 → #12BA7E) */
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

// ─── v2.0 컬러 토큰 ──────────────────────────────────────

/**
 * v2.0 컬러 토큰 — Figma Variables Primitives 구조 미러링
 *
 * - figma-tokens.json Primitives.{Mono|Semantic|Accent} 와 동일한 계층
 * - shade 네이밍: 50(가장 옅음) → 900(가장 진함)
 * - 8개 의미 반전 토큰(red50/yellow50/cyan50/khaki50/lightBlue50/pink50/purple50/violet50):
 *   v1.x에서 강한 색이었으나 v2에서 옅은 색으로 재정의됨.
 *   기존 강한 색이 필요하면 동일 스케일의 500/300/400 시리즈 참조.
 *
 * @see src/tokens/figma-tokens.json Primitives section
 * @since v2.0 (2026-05-08)
 */
export const colorTokensV2 = {
  Mono: {
    /** v1 coolNeutral 대체 — 10단 그레이 스케일 */
    neutral: {
      50: '#F3F5F7',
      100: '#E1E3E8',
      200: '#C4C7CD',
      300: '#ACAEB5',
      400: '#8A8D94',
      500: '#72747B',
      600: '#5A5C63',
      700: '#46474D',
      800: '#2C2E32',
      900: '#171719',
    },
    /** v1 Brand.mint를 Mono로 이동 — 400은 v1.x mint45와 동일(#22C3BC) */
    mint: {
      50: '#E4FCFC',
      100: '#C2F7F6',
      200: '#8BEAE5',
      300: '#64D7D2',
      400: '#22C3BC',
      500: '#12A09A',
      600: '#157D78',
      700: '#105E5A',
      800: '#093F3E',
      900: '#082B2A',
    },
    WH: '#FFFFFF',
    BK: '#000000',
  },
  Semantic: {
    /** v1 green 재정의 — 400은 새 키컬러(#12BA7E) */
    green: {
      50: '#E9FBF5',
      100: '#B5F7E1',
      200: '#7AF0C6',
      300: '#33D49A',
      400: '#12BA7E',
      500: '#0B9D69',
      600: '#108159',
      700: '#0A6343',
      800: '#074730',
      900: '#082B1F',
    },
    /** ⚠️ v2 의미 반전: red50=#FFE9E9(옅음). 강한 빨강은 red500(#D92020) 참조 */
    red: {
      50: '#FFE9E9',
      100: '#FFC9C9',
      200: '#FFA1A1',
      300: '#F86F6F',
      400: '#F04545',
      500: '#D92020',
      600: '#B51616',
      700: '#8B0B0B',
      800: '#5A0707',
      900: '#2E0505',
    },
    /** ⚠️ v2 의미 반전: yellow50=#FFF8D8(옅음). 강한 노랑은 yellow300(#FFCE00, 동일 hex) 참조 */
    yellow: {
      50: '#FFF8D8',
      100: '#FFEDA2',
      200: '#FFE05F',
      300: '#FFCE00',
      400: '#F0B800',
      500: '#E3A700',
      600: '#C59000',
      700: '#936C00',
      800: '#604600',
      900: '#3C2C00',
    },
    /** v2 신규 — Accent.orange에서 Semantic으로 이동 (warning 시멘틱 후보) */
    orange: {
      50: '#FFF2E5',
      100: '#FFD1A4',
      200: '#FFB166',
      300: '#FF932B',
      400: '#F67900',
      500: '#DB6600',
      600: '#B55400',
      700: '#884200',
      800: '#602D00',
      900: '#361900',
    },
  },
  Accent: {
    /** ⚠️ v2 의미 반전: pink50=#FFE3ED(옅음). 강한 핑크는 pink500(#F81C62) 참조 */
    pink: {
      50: '#FFE3ED',
      100: '#FFBACF',
      200: '#FF9ABA',
      300: '#FF729E',
      400: '#FF417E',
      500: '#F81C62',
      600: '#D50A4A',
      700: '#A40236',
      800: '#77072A',
      900: '#480419',
    },
    /** ⚠️ v2 의미 반전: purple50=#F7E6FF(옅음). 강한 퍼플은 purple500(#A924E5) 참조 */
    purple: {
      50: '#F7E6FF',
      100: '#E9BAFF',
      200: '#E09DFF',
      300: '#D376FF',
      400: '#C74CFF',
      500: '#A924E5',
      600: '#8A18C1',
      700: '#6C1097',
      800: '#510B74',
      900: '#32024A',
    },
    /** ⚠️ v2 의미 반전: violet50=#F0ECFE(옅음). 강한 바이올렛은 violet500(#552CF4) 참조 */
    violet: {
      50: '#F0ECFE',
      100: '#CBBFFF',
      200: '#B09CFF',
      300: '#8E70FF',
      400: '#704CFF',
      500: '#552CF4',
      600: '#3C17CE',
      700: '#2907B1',
      800: '#1C057D',
      900: '#0F004A',
    },
    /** ⚠️ v2 의미 반전: lightBlue50=#E5F6FE(옅음). 강한 라이트블루는 lightBlue400(#08B1FF) 참조 */
    lightBlue: {
      50: '#E5F6FE',
      100: '#B9E9FF',
      200: '#7ED6FF',
      300: '#45C4FF',
      400: '#08B1FF',
      500: '#0090D7',
      600: '#006FB5',
      700: '#00538A',
      800: '#003659',
      900: '#00223C',
    },
    /** ⚠️ v2 의미 반전: cyan50=#E6FBFF(옅음). 강한 시안은 cyan400(#05BDDF) 참조 */
    cyan: {
      50: '#E6FBFF',
      100: '#C0F6FF',
      200: '#82E9FB',
      300: '#37DAF8',
      400: '#05BDDF',
      500: '#00A5C2',
      600: '#007E94',
      700: '#005E6E',
      800: '#003F49',
      900: '#00252B',
    },
    /** ⚠️ v2 의미 반전: khaki50=#F4F7EE(옅음). 강한 카키는 khaki500(#6D8339) 참조 */
    khaki: {
      50: '#F4F7EE',
      100: '#DCE6C5',
      200: '#C4D49E',
      300: '#A8C072',
      400: '#87A349',
      500: '#6D8339',
      600: '#54642E',
      700: '#3E4B1F',
      800: '#303919',
      900: '#202610',
    },
  },
} as const;

export type ColorTokensV2 = typeof colorTokensV2;

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
  /** v2.0 신규 컬러 토큰 — colorTokensV2.{Mono|Semantic|Accent}.{scale}[shade] */
  v2: colorTokensV2,
} as const;

// ─── Typography ──────────────────────────────────────────

/**
 * Pretendard 폰트 패밀리 (OFL 1.1 / orioncactus/pretendard)
 *
 * - 네이티브: `App.tsx`의 `useFonts` + `app.json`의 `expo-font` plugin으로 로딩
 * - 웹 Storybook: `.storybook/global.css`의 `@font-face`로 PretendardVariable 로딩
 *
 * weight별 family를 분리 노출 — iOS는 fontWeight만으로 두께 분기가 일정치 않으므로
 * 실제 사용 시 family + weight를 함께 지정하는 게 안전.
 */
export const fontFamily = {
  base:     'Pretendard',
  medium:   'Pretendard-Medium',
  semibold: 'Pretendard-SemiBold',
  bold:     'Pretendard-Bold',
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
  /**
   * 16px · Regular · 24px — 본문 강조, Body 1 대체 스타일
   * @deprecated v2.6.0: `body1`과 동일 값입니다. `textStyleV2.body1` 또는 기존 `textStyle.body1`을 사용하세요.
   *  Figma v2.6.0 타이포 토큰에서 `body3` 대응 항목이 사라졌습니다.
   */
  body3:    { fontSize: 16, fontWeight: '400' as const, lineHeight: 24, letterSpacing: 0.09 },
  /** 14px · Medium · 20px — 버튼 텍스트, 탭 메뉴, 클릭 요소 */
  label1:   { fontSize: 14, fontWeight: '500' as const, lineHeight: 20, letterSpacing: 0.2 },
  /** 13px · Medium · 18px — 소형 버튼, 태그, 필터 칩 */
  label2:   { fontSize: 13, fontWeight: '500' as const, lineHeight: 18, letterSpacing: 0.25 },
  /** 12px · Regular · 16px — 캡션, 보조 설명, 날짜 등 작은 정보 */
  caption:  { fontSize: 12, fontWeight: '400' as const, lineHeight: 16, letterSpacing: 0.3 },
} as const;

/**
 * v2.6.0 타이포그래피 토큰 — Figma Typography 캔버스 미러링 (13개 스타일)
 *
 * - Pretendard Variable 기반, 4단계 weight (700/600/500/400)
 * - 기존 `textStyle`과 별개 export — 기존 사용처 무수정 유지
 * - 네이밍 변경: heading → headline1, headline → headline2, label1 → label2, label2 → label3
 * - 신규 토큰: body1Str, body2Str, label1 (모두 SemiBold 강조)
 * - `caption` weight 400 → 500, `body2` lineHeight 22 → 22.5, `label2/3` letterSpacing 제거
 *
 * 사용처 마이그레이션은 별도 PR로 진행 예정.
 *
 * @see src/tokens/figma-tokens.json Primitives.typographyV2
 * @since v2.6.0 (2026-05-11)
 */
export const textStyleV2 = {
  /** 32px · Bold · 44px (1.375) · -0.81 — 서비스 핵심 타이틀, 온보딩 메인 문구 */
  title1:    { fontSize: 32, fontWeight: '700' as const, lineHeight: 44,   letterSpacing: -0.81 },
  /** 28px · Bold · 38px (1.358) · -0.66 — 페이지 상단 헤더, 주요 섹션 대제목 */
  title2:    { fontSize: 28, fontWeight: '700' as const, lineHeight: 38,   letterSpacing: -0.66 },
  /** 24px · Bold · 32px (1.334) · -0.55 — 카드/모달 타이틀, 하위 페이지 대제목 */
  title3:    { fontSize: 24, fontWeight: '700' as const, lineHeight: 32,   letterSpacing: -0.55 },
  /** 20px · SemiBold · 28px (1.4) · -0.24 — 소제목, 섹션 구분 (v1 heading 대응) */
  headline1: { fontSize: 20, fontWeight: '600' as const, lineHeight: 28,   letterSpacing: -0.24 },
  /** 17px · SemiBold · 24px (1.412) · 0 — 리스트 헤더, 탭 섹션 제목 (v1 headline 대응) */
  headline2: { fontSize: 17, fontWeight: '600' as const, lineHeight: 24,   letterSpacing: 0 },
  /** 16px · SemiBold · 24px (1.5) · 0.09 — Body 1 강조 변형 (신규) */
  body1Str:  { fontSize: 16, fontWeight: '600' as const, lineHeight: 24,   letterSpacing: 0.09 },
  /** 16px · Regular · 24px (1.5) · 0.09 — 일반 본문, 상세 설명 */
  body1:     { fontSize: 16, fontWeight: '400' as const, lineHeight: 24,   letterSpacing: 0.09 },
  /** 15px · SemiBold · 22.5px (1.5) · 0.14 — Body 2 강조 변형 (신규) */
  body2Str:  { fontSize: 15, fontWeight: '600' as const, lineHeight: 22.5, letterSpacing: 0.14 },
  /** 15px · Regular · 22.5px (1.5) · 0.14 — 보조 본문, 세부 설명 */
  body2:     { fontSize: 15, fontWeight: '400' as const, lineHeight: 22.5, letterSpacing: 0.14 },
  /** 16px · SemiBold · 23px (1.44) · 0 — 가장 큰 label 사이즈 (신규) */
  label1:    { fontSize: 16, fontWeight: '600' as const, lineHeight: 23,   letterSpacing: 0 },
  /** 14px · Medium · 20px (1.44) · 0 — 버튼 텍스트, 탭 메뉴 (v1 label1 대응) */
  label2:    { fontSize: 14, fontWeight: '500' as const, lineHeight: 20,   letterSpacing: 0 },
  /** 13px · Medium · 19px (1.44) · 0 — 소형 버튼, 태그, 필터 칩 (v1 label2 대응) */
  label3:    { fontSize: 13, fontWeight: '500' as const, lineHeight: 19,   letterSpacing: 0 },
  /** 12px · Medium · 16px (1.334) · 0.3 — 캡션, 보조 설명 (weight 400 → 500) */
  caption:   { fontSize: 12, fontWeight: '500' as const, lineHeight: 16,   letterSpacing: 0.3 },
} as const;

export type TextStyleV2 = typeof textStyleV2;
export type TextStyleV2Key = keyof typeof textStyleV2;

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

/**
 * @deprecated v3.0: Figma "4. units / radius" 명세에 맞춰 `radiusTokensV2`로 이전 권장.
 *
 * 이름 매핑 변경:
 *   radius.medium (12) → radiusTokensV2.regular
 *   radius.large  (16) → radiusTokensV2.medium
 *   radius.xlarge (24) → radiusTokensV2.large
 *   (신규 추가: radiusTokensV2.xlarge = 32)
 *
 * 기존 컴포넌트 호환을 위해 객체 유지. 신규 코드는 `radiusTokensV2` 사용.
 */
export const radius = {
  xsmall: 4,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 24,
  full: 9999,
} as const;

/**
 * Radius 토큰 — Figma "4. units / radius" 1:1 매핑 (7단계).
 *
 * 모서리 반경 (border radius).
 */
export const radiusTokensV2 = {
  xsmall:  4,
  small:   8,
  regular: 12,
  medium:  16,
  large:   24,
  xlarge:  32,
  full:    9999,
} as const;

/**
 * gap·margin·padding 토큰 — Figma "4. units / gap, margin, padding" 1:1 매핑.
 *
 * - `gap.inner`: 버튼·카드 등 컴포넌트 **내부** 갭/패딩/마진 (8단계).
 * - `gap.outer`: 섹션 등 컴포넌트 **외부** 갭/마진 (5단계).
 */
export const gap = {
  inner: {
    '3xsmall': 4,
    '2xsmall': 6,
    xsmall:    8,
    small:     12,
    medium:    16,
    large:     20,
    xlarge:    24,
    '2xlarge': 32,
  },
  outer: {
    xsmall: 16,
    small:  24,
    medium: 32,
    large:  40,
    xlarge: 48,
  },
} as const;

/**
 * Line 토큰 — Figma "4. units / line" 1:1 매핑.
 *
 * 보더·언더라인·아웃라인 두께 (px). `hairline`은 device pixel ratio 기반 특수값.
 */
export const line = {
  /** Device pixel ratio 기준의 1물리픽셀. CSS는 일반적으로 1px 또는 0.5px로 표현. */
  hairline: 'hairline',
  regular:  1,
  medium:   1.5,
  bold:     2,
  heavy:    6,
  black:    12,
} as const;

/**
 * 컴포넌트 높이 토큰 — Figma "4. units / 콘텐츠, 컴포넌트 높이" 1:1 매핑
 *
 * 버튼·탭·카드 등 모든 컴포넌트 높이는 이 스케일에서 선택. 7단계.
 *
 * @see Figma node 307:6148
 */
export const height = {
  '2xsmall': 24,
  xsmall:    32,
  small:     36,
  medium:    40,
  large:     44,
  xlarge:    52,
  '2xlarge': 56,
} as const;

/**
 * 아이콘 크기 토큰 — Figma "4. units / 아이콘 크기" 1:1 매핑
 *
 * 4단계. Icon 컴포넌트의 size prop에 사용.
 *
 * @see Figma node 307:6382
 */
export const icon = {
  small:  16,
  medium: 20,
  large:  24,
  xlarge: 32,
} as const;

// ─── Shadow & Elevation ─────────────────────────────────

/**
 * 그림자 단계 토큰 — 카드, 모달, 바텀시트 등에 사용
 *
 * @deprecated v2.2.0: `shadowTokensV2`를 사용하세요. 기존 토큰은 React Native 호환을 위해
 *  spread 필드를 누락한 채로 유지됩니다. v2는 Figma 원본 spread 값을 보존합니다.
 */
export const shadow = {
  /** Level 1 — Subtle / 카드, 버튼 hover 등 가벼운 고도감 */
  level1: {
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  /** Level 2 — Medium / 플로팅 요소, 드롭다운, 호버 카드 */
  level2: {
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  /** Level 3 — Strong / 모달, 바텀시트, 최상위 레이어 */
  level3: {
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  /** Level 4 — Inverted / bottom sheet (위로 향한 그림자) — v2.2.0 신규 */
  level4: {
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;

/**
 * v2.2.0 그림자 토큰 — Figma "4. Shadow" 캔버스 원본 미러링
 *
 * - 4개 level (1~4) — Figma DROP_SHADOW 효과 1:1 매핑
 * - **`spread` 필드 보존**: React Native는 spread를 미지원하므로 RN 컴포넌트에서는
 *   `shadowOffset`/`shadowOpacity`/`shadowRadius`/`elevation`만 사용. 웹/Storybook은
 *   `boxShadow`로 spread 포함 렌더링 가능
 * - color는 alpha 포함 8자리 hex(`#00000014` = `rgba(0,0,0,0.08)` 등)
 *
 * @see src/tokens/figma-tokens.json Primitives.shadow
 * @since v2.2.0 (2026-05-08)
 */
export const shadowTokensV2 = {
  /** Level 1 — Subtle / 카드, 버튼 hover, 가벼운 고도감 */
  level1: {
    color: '#00000014', // rgba(0,0,0,0.08)
    offsetX: 0,
    offsetY: 0,
    blur: 4,
    spread: 0,
    opacity: 0.08,
    elevation: 1,
    /** 웹용 CSS box-shadow 문자열 (spread 포함) */
    css: '0px 0px 4px 0px rgba(0,0,0,0.08)',
  },
  /** Level 2 — Medium / 플로팅 요소, 드롭다운, 호버 카드 */
  level2: {
    color: '#0000001A', // rgba(0,0,0,0.10)
    offsetX: 0,
    offsetY: 2,
    blur: 8,
    spread: 4,
    opacity: 0.1,
    elevation: 4,
    css: '0px 2px 8px 4px rgba(0,0,0,0.1)',
  },
  /** Level 3 — Strong / 모달 */
  level3: {
    color: '#00000026', // rgba(0,0,0,0.15)
    offsetX: 0,
    offsetY: 4,
    blur: 16,
    spread: 8,
    opacity: 0.15,
    elevation: 8,
    css: '0px 4px 16px 8px rgba(0,0,0,0.15)',
  },
  /** Level 4 — Inverted / bottom sheet (위로 향한 그림자) */
  level4: {
    color: '#0000001A', // rgba(0,0,0,0.10)
    offsetX: 0,
    offsetY: -4,
    blur: 16,
    spread: 4,
    opacity: 0.1,
    elevation: 8,
    css: '0px -4px 16px 4px rgba(0,0,0,0.1)',
  },
} as const;

export type ShadowTokensV2 = typeof shadowTokensV2;

/**
 * v2.3.0 Dimmed Layer 토큰 — Figma "5. dimmed layer" 캔버스 미러링
 *
 * - BK 3단(20/60/80): 라이트 배경 위 black 오버레이 (모달 backdrop, 풀스크린 dim 등)
 * - WH 2단(20/60): 다크 배경 위 white 오버레이 (이미지 위 하이라이트 등)
 * - 토큰 값은 `rgba()` 문자열 — RN/Web 양쪽에서 그대로 사용 가능
 *
 * @see src/tokens/figma-tokens.json Primitives.dimmedLayer
 * @since v2.3.0 (2026-05-08)
 */
export const dimmedLayerTokensV2 = {
  /** BK-20 — 가벼운 강조 dim */
  bk20: 'rgba(0,0,0,0.2)',
  /** BK-60 — 표준 backdrop scrim (모달, 바텀시트) */
  bk60: 'rgba(0,0,0,0.6)',
  /** BK-80 — 강한 dim (이미지/풀스크린 오버레이) */
  bk80: 'rgba(0,0,0,0.8)',
  /** WH-20 — 다크 배경 위 가벼운 하이라이트 dim */
  wh20: 'rgba(255,255,255,0.2)',
  /** WH-60 — 다크 배경 위 강한 하이라이트 dim */
  wh60: 'rgba(255,255,255,0.6)',
} as const;

export type DimmedLayerTokensV2 = typeof dimmedLayerTokensV2;

/**
 * v2.5.0 Gradient 토큰 — Figma "6. gradient" 캔버스 미러링
 *
 * 스크롤 가능 콘텐츠의 끝부분 페이드 효과 등에 사용. 모두 transparent → white 전환.
 *
 * 사용 라이브러리:
 * - React Native: `expo-linear-gradient` 또는 `react-native-linear-gradient`
 *   → `colors`, `locations`, `start`/`end` 속성에 토큰의 동명 필드 매핑
 * - Web (Storybook 등): `css` 필드를 그대로 `background` 속성에 적용
 *
 * @see src/tokens/figma-tokens.json Primitives.gradient
 * @since v2.5.0 (2026-05-11)
 */
export const gradientTokensV2 = {
  /** WH-topdown — 위→아래 흰색 페이드 (수직 스크롤 상단 페이드) */
  whTopdown: {
    /** expo-linear-gradient `colors` 속성 */
    colors: ['rgba(255,255,255,0)', '#FFFFFF'] as readonly string[],
    /** expo-linear-gradient `locations` 속성 (0~1) */
    locations: [0, 1] as readonly number[],
    /** expo-linear-gradient `start` (top) */
    start: { x: 0, y: 0 },
    /** expo-linear-gradient `end` (bottom) */
    end: { x: 0, y: 1 },
    /** Web/Storybook CSS 문자열 */
    css: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 100%)',
  },
  /** WH-right — 왼쪽→오른쪽 흰색 페이드 (가로 스크롤 우측 페이드) */
  whRight: {
    colors: ['rgba(255,255,255,0)', '#FFFFFF'] as readonly string[],
    locations: [0, 1] as readonly number[],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    css: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, #FFFFFF 100%)',
  },
} as const;

export type GradientTokensV2 = typeof gradientTokensV2;

/** 화면 좌우 마진 토큰 */
export const screenMargin = {
  default: 16,
  wide: 20,
} as const;

/** 그리드 기본 단위 (4px 기반) */
export const gridUnit = 4 as const;

// ─── Interaction ─────────────────────────────────────────

/** 인터랙션 피드백에 사용하는 공통 상수 */
export const interaction = {
  /** Pressable 눌림 시 투명도 */
  pressOpacity: 0.7,
  /** 비활성화 상태 전체 투명도 */
  disabledOpacity: 0.4,
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
  primary:    coolNeutral[17],
  secondary:  coolNeutral[50],
  tertiary:   coolNeutral[80],
  quaternary: coolNeutral[40],
  label:      coolNeutral[30],
  onColor:    coolNeutral[100],
} as const;

const _line = {
  default: coolNeutral[96],
  active:  coolNeutral[90],
} as const;

const _role = {
  brand:        mint[45],
  brandPressed: mint[30],
  error:        red[70],
  success:      green[45],
  warning:      orange[60],
  caution:      yellow[50],
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
  /** 경고 상태 텍스트 (주황) */
  textWarning: _role.warning,
  /** 주의 상태 텍스트 (노랑) */
  textCaution: _role.caution,
  /** 4단계 텍스트 (보조 버튼, 비활성 수치 등) */
  textQuaternary: _content.quaternary,
  /** 라벨 텍스트 (입력 필드 등) */
  textLabel: _content.label,
  /** 다크 배경 위 액션 텍스트 (토스트 등) */
  textAction: mint[80],

  // ── Background ────────────────────────────────────────
  /** 기본 배경색 */
  backgroundPrimary: _surface.primary,
  /** 보조 배경색 (카드, 섹션 구분) */
  backgroundSecondary: _surface.secondary,
  /** 3단계 배경색 (인풋 비활성, 칩 등) */
  backgroundTertiary: _surface.tertiary,
  /** 반전 배경 (다크 영역, 활성 칩) */
  backgroundInverse: _surface.inverse,
  /** 비활성 트랙, OFF 상태 배경 */
  backgroundOff: coolNeutral[90],
  /** 브랜드 배경색 (CTA 버튼, 강조 영역) */
  backgroundBrand: _role.brand,
  /** 브랜드 배경 눌림 */
  backgroundBrandPressed: _role.brandPressed,
  /** 비활성화 배경 (Disabled 상태 컴포넌트) */
  backgroundDisabled: coolNeutral[96],
  /** 브랜드 비활성화 배경 (체크박스 등) */
  backgroundBrandDisabled: mint[90],
  /** 에러 배경 (위험 버튼, ProgressBar error) */
  backgroundError: _role.error,
  /** 경고 배경 (주황) */
  backgroundWarning: _role.warning,
  /** 주의 배경 (노랑) */
  backgroundCaution: _role.caution,
  /** 성공 배경 (ProgressBar success) */
  backgroundSuccess: _role.success,
  /** 토스트 배경 */
  backgroundToast: coolNeutral[50],
  /** 오버레이 스크림 (모달, 바텀시트 dim 배경) — v2.4.0: bk60 (0.4 → 0.6)으로 마이그레이션 */
  backgroundScrim: dimmedLayerTokensV2.bk60,

  // ── Border ────────────────────────────────────────────
  /** 기본·비활성화 테두리, 구분선 */
  borderDefault: _line.default,
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
  /** 경고 아이콘 (주황) */
  iconWarning: _role.warning,
  /** 주의 아이콘 (노랑) */
  iconCaution: _role.caution,
  /** 미선택/비활성 아이콘 (체크마크, 탭바 등) */
  iconInactive: coolNeutral[90],

  // ── Accent (대시보드/차트 전용) ───────────────────────────
  /** 바이올렛 액센트 */
  accentViolet: violet[60],
  /** 퍼플 액센트 */
  accentPurple: purple[40],
  /** 그린 액센트 */
  accentGreen: green[45],
  /** 라이트블루 액센트 */
  accentLightBlue: lightBlue[50],
  /** 민트 액센트 */
  accentMint: mint[45],
  /** 레드 액센트 */
  accentRed: red[60],

  // ── Subtle Background (halo, 연한 배경) ──────────────────
  /** 성공 연한 배경 (halo, Tag 등) */
  backgroundSuccessSubtle: green[90],
  /** 주의 연한 배경 */
  backgroundCautionSubtle: yellow[90],
  /** 경고 연한 배경 */
  backgroundWarningSubtle: orange[90],
  /** 에러 연한 배경 */
  backgroundErrorSubtle: red[90],
} as const;

export type SemanticColor = typeof semanticColor;

// ─── Component Tokens ────────────────────────────────────

/**
 * Button — Figma "Button" 컴포넌트 1:1 매핑 (v3.0)
 *
 * Figma component sets:
 *   - Btn:          primary∈{yes,no} · sub∈{yes,no}
 *   - Btn-outlined: focused∈{yes,no} · sub∈{yes,no}
 *
 * 4개 named variant(`primary` / `sub` / `outlined` / `outlined-focused`)를
 * 단일 `variant` prop union으로 표현합니다.
 *
 * size: small / medium / large — Figma SPEC 1:1
 *   small  : height 36 · padding 12 · radius 8  · gap 4 · iconSize 16 · label3 (13px)
 *   medium : height 44 · padding 16 · radius 8  · gap 4 · iconSize 16 · label2 (14px)
 *   large  : height 52 · padding 24 · radius 12 · gap 6 · iconSize 16 · label1 (16px)
 *
 * @breaking-change v3.0 (2026-05-12):
 *   - `colorScheme` prop 제거 → variant union으로 통합
 *   - `loading` prop 제거 → Figma 미정의
 *   - size별 radius/iconSize/fontSize 모두 변경 (Figma 일치)
 *   마이그레이션:
 *     <Button variant="solid" colorScheme="primary" />      → <Button variant="primary" />
 *     <Button variant="solid" colorScheme="assistive" />    → <Button variant="sub" />
 *     <Button variant="outlined" colorScheme="primary" />   → <Button variant="outlined-focused" />
 *     <Button variant="outlined" colorScheme="assistive" /> → <Button variant="outlined" />
 */
export const buttonToken = {
  size: {
    small:  { height: 36, paddingHorizontal: 12, gap: 4, radius: 8,  iconSize: icon.small, textStyle: textStyleV2.label3 },
    medium: { height: 44, paddingHorizontal: 16, gap: 4, radius: 8,  iconSize: icon.small, textStyle: textStyleV2.label2 },
    large:  { height: 52, paddingHorizontal: 24, gap: 6, radius: 12, iconSize: icon.small, textStyle: textStyleV2.label1 },
  },
  /**
   * 4 variant × 3 state 컬러 매트릭스 — Figma 명세 1:1
   *   variant: 'primary' | 'sub' | 'outlined' | 'outlined-focused'
   *   state:   'default' | 'pressed' | 'disabled'
   *
   * TODO(figma-spec): pressed/disabled state는 Figma 미정의. mint/neutral 스케일 추론값.
   *   디자이너 컨펌 후 v3.1에서 확정 예정.
   */
  color: {
    primary: {
      default:  { container: colorTokensV2.Mono.mint[400], label: colorTokensV2.Mono.WH },
      pressed:  { container: colorTokensV2.Mono.mint[500], label: colorTokensV2.Mono.WH },
      disabled: { container: colorTokensV2.Mono.mint[300], label: colorTokensV2.Mono.mint[100] },
    },
    sub: {
      default:  { container: colorTokensV2.Mono.neutral[50],  label: colorTokensV2.Mono.neutral[800] },
      pressed:  { container: colorTokensV2.Mono.neutral[100], label: colorTokensV2.Mono.neutral[800] },
      disabled: { container: colorTokensV2.Mono.neutral[50],  label: colorTokensV2.Mono.neutral[300] },
    },
    outlined: {
      default:  { container: colorTokensV2.Mono.WH,           label: colorTokensV2.Mono.neutral[800], border: colorTokensV2.Mono.neutral[100], borderWidth: line.regular },
      pressed:  { container: colorTokensV2.Mono.neutral[50],  label: colorTokensV2.Mono.neutral[800], border: colorTokensV2.Mono.neutral[100], borderWidth: line.regular },
      disabled: { container: colorTokensV2.Mono.WH,           label: colorTokensV2.Mono.neutral[300], border: colorTokensV2.Mono.neutral[100], borderWidth: line.regular },
    },
    'outlined-focused': {
      default:  { container: colorTokensV2.Mono.WH,           label: colorTokensV2.Mono.mint[400], border: colorTokensV2.Mono.mint[400],    borderWidth: line.medium },
      pressed:  { container: colorTokensV2.Mono.neutral[50],  label: colorTokensV2.Mono.mint[500], border: colorTokensV2.Mono.mint[500],    borderWidth: line.medium },
      disabled: { container: colorTokensV2.Mono.WH,           label: colorTokensV2.Mono.neutral[300], border: colorTokensV2.Mono.neutral[200], borderWidth: line.medium },
    },
  },
} as const;

export type ButtonVariantV2 = keyof typeof buttonToken.color;        // 'primary' | 'sub' | 'outlined' | 'outlined-focused'
export type ButtonSizeV2 = keyof typeof buttonToken.size;            // 'small' | 'medium' | 'large'
export type ButtonStateV2 = keyof typeof buttonToken.color.primary;  // 'default' | 'pressed' | 'disabled'

/**
 * Text Button — Figma "text button" 컴포넌트 1:1 매핑 (v3.0)
 *
 * Figma component set "Btn-Text" (134:4609):
 *   variant properties: large∈{yes,no} · medium∈{yes,no} · focused∈{yes,no} · enabled∈{yes,no}
 *
 * 노출된 4개 named 조합 → 단일 `variant` union + `size` prop로 압축:
 *   (large=yes, focused=no, enabled=yes) → variant="default", size="large"
 *   (large=yes, focused=yes, enabled=no) → variant="focused", size="large"
 *   (medium=yes, focused=no, enabled=yes) → variant="default", size="medium"
 *   (medium=yes, focused=yes, enabled=no) → variant="focused", size="medium"
 *
 * size: large / medium — Figma SPEC은 단일 column (모든 토큰 동일). large/medium 변종은
 *  향후 확장을 위해 prop으로 유지하되 현재는 동일 토큰값.
 *
 * @breaking-change v3.0 (2026-05-12):
 *   - `colorScheme` prop 제거 → `variant` union으로 통합
 *   - `size` 키 변경: small → medium / medium → large
 *   - `loading` prop 제거 (Figma 미정의)
 *   - `underlined` prop 신규 (기본 true)
 *   마이그레이션:
 *     <TextButton colorScheme="primary" />   → <TextButton variant="focused" />
 *     <TextButton colorScheme="assistive" /> → <TextButton variant="default" />
 *     <TextButton size="small" />            → <TextButton size="medium" /> (시각 회귀: body2 → label2)
 *     <TextButton size="medium" />           → <TextButton size="large" /> (시각 동일: body2 유지)
 */
export const textButtonToken = {
  size: {
    /** Figma 측정값: 15px / Regular(400) / lineHeight 22.5 / letterSpacing 0.14 → textStyleV2.body2 */
    large:  { height: 32, paddingHorizontal: 4, gap: 4, radius: 8, iconSize: icon.small, lineWidth: line.regular, textStyle: textStyleV2.body2 },
    /** Figma 측정값: 14px / Medium(500) / lineHeight 20 / letterSpacing 0 → textStyleV2.label2 */
    medium: { height: 32, paddingHorizontal: 4, gap: 4, radius: 8, iconSize: icon.small, lineWidth: line.regular, textStyle: textStyleV2.label2 },
  },
  /**
   * 2 variant × 3 state 컬러 매트릭스 — Figma 명세 1:1
   *   variant: 'default' | 'focused'
   *   state:   'default' | 'pressed' | 'disabled'
   *
   * 각 셀: { label, underline, icon, container }
   *
   * TODO(figma-spec): pressed/disabled state는 Figma 미정의. mint/neutral 스케일 추론값.
   *   디자이너 컨펌 후 v3.1에서 확정 예정.
   */
  color: {
    default: {
      default:  { container: colorTokensV2.Mono.WH,          label: colorTokensV2.Mono.neutral[600], underline: colorTokensV2.Mono.neutral[300], icon: colorTokensV2.Mono.neutral[500] },
      pressed:  { container: colorTokensV2.Mono.neutral[50], label: colorTokensV2.Mono.neutral[600], underline: colorTokensV2.Mono.neutral[300], icon: colorTokensV2.Mono.neutral[500] },
      disabled: { container: colorTokensV2.Mono.WH,          label: colorTokensV2.Mono.neutral[300], underline: colorTokensV2.Mono.neutral[200], icon: colorTokensV2.Mono.neutral[300] },
    },
    focused: {
      default:  { container: colorTokensV2.Mono.WH,          label: colorTokensV2.Mono.mint[400], underline: colorTokensV2.Mono.mint[400], icon: colorTokensV2.Mono.mint[400] },
      pressed:  { container: colorTokensV2.Mono.neutral[50], label: colorTokensV2.Mono.mint[500], underline: colorTokensV2.Mono.mint[500], icon: colorTokensV2.Mono.mint[500] },
      disabled: { container: colorTokensV2.Mono.WH,          label: colorTokensV2.Mono.mint[300], underline: colorTokensV2.Mono.mint[300], icon: colorTokensV2.Mono.mint[300] },
    },
  },
} as const;

export type TextButtonVariantV2 = keyof typeof textButtonToken.color;        // 'default' | 'focused'
export type TextButtonSizeV2 = keyof typeof textButtonToken.size;            // 'large' | 'medium'
export type TextButtonStateV2 = keyof typeof textButtonToken.color.default;  // 'default' | 'pressed' | 'disabled'

/**
 * Chip: 상호작용을 통해 정보를 분류하거나, 상태를 표시
 *
 * size.{xsmall/small/medium/large}의 height·iconSize는 Figma "4. units" 토큰 alias.
 * 임의값(28/38/12/14/18)은 가장 가까운 Figma 값으로 자동 스납됨 (동률 시 큰 쪽):
 *   xsmall = height['2xsmall'](24) · icon.small(16)   [임의 12 → 16, +4]
 *   small  = height.xsmall(32)     · icon.small(16)   [임의 28 → 32, +4 / 14 → 16, +2]
 *   medium = height.xsmall(32)     · icon.small(16)   [동일 — small과 height 충돌 허용]
 *   large  = height.medium(40)     · icon.medium(20)  [임의 38 → 40, +2 / 18 → 20, +2]
 */
export const chipToken = {
  size: {
    xsmall: { height: height['2xsmall'], paddingHorizontal: 8,  fontSize: fontSize.xsmall, iconSize: icon.small,  radius: radius.xsmall },
    small:  { height: height.xsmall,     paddingHorizontal: 10, fontSize: fontSize.xsmall, iconSize: icon.small,  radius: radius.small },
    medium: { height: height.xsmall,     paddingHorizontal: 12, fontSize: fontSize.small,  iconSize: icon.small,  radius: radius.small },
    large:  { height: height.medium,     paddingHorizontal: 14, fontSize: fontSize.medium, iconSize: icon.medium, radius: radius.medium },
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

// ─── Flat Spacing (기본 + screenMargin + 컴포넌트 사이즈 플랫 병합) ──

export const spacingFlat = {
  ...spacing,

  // 화면 여백
  screenMarginDefault: screenMargin.default,
  screenMarginWide: screenMargin.wide,

  // Button
  buttonHeightSmall: buttonToken.size.small.height,
  buttonHeightMedium: buttonToken.size.medium.height,
  buttonHeightLarge: buttonToken.size.large.height,
  buttonPaddingHorizontalSmall: buttonToken.size.small.paddingHorizontal,
  buttonPaddingHorizontalMedium: buttonToken.size.medium.paddingHorizontal,
  buttonPaddingHorizontalLarge: buttonToken.size.large.paddingHorizontal,

  // Chip
  chipHeightXSmall: chipToken.size.xsmall.height,
  chipHeightSmall: chipToken.size.small.height,
  chipHeightMedium: chipToken.size.medium.height,
  chipHeightLarge: chipToken.size.large.height,

  // ActionArea
  actionAreaPadding: actionAreaToken.padding,
  actionAreaGap: actionAreaToken.gap,
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
  /** @alias textStyle — theme.typography.body1.fontSize 형태로 접근 가능 */
  typography: textStyle,
  spacing: spacingFlat,
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
