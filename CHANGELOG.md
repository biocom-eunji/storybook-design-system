# Changelog

바이오컴 디자인 시스템의 변경 이력입니다.

---
\
## v2.7.0 (2026-05-11)\
\
### Added\
\
\
\
---
\
## v2.6.0 (2026-05-11)\
\
### Added\
\
\
\
---

## v2.6.0 (2026-05-11)

> Figma "Typography" 캔버스 기반 신규 타이포그래피 토큰 13개 추가. 기존 `textStyle` 미수정 (사용처 마이그레이션은 별도 PR). **Breaking Changes 없음 (additive only)**.

### Added

- **`textStyleV2`** namespace export (`theme.ts`) — 13개 시맨틱 텍스트 스타일
  - **Title 계열 (3종)**: `title1` (32px Bold), `title2` (28px), `title3` (24px) — v1과 값 동일
  - **Headline 계열 (2종)**: `headline1` (20px, v1 `heading` 대응), `headline2` (17px, v1 `headline` 대응) — 이름 변경
  - **Body 계열 (4종)**: `body1` / `body1Str` (16px Regular/SemiBold), `body2` / `body2Str` (15px) — Str 변형 신규
  - **Label 계열 (3종)**: `label1` (16px SemiBold, **신규**), `label2` (14px, v1 `label1`), `label3` (13px, v1 `label2`)
  - **Caption (1종)**: `caption` (12px Medium) — v1 weight 400 → 500
- **`figma-tokens.json` `Primitives.typographyV2`** — style-dictionary `typography` 타입 13개 composite 토큰
- **Storybook v2.6.0 Typography 페이지** (`stories/TypographyV2.mdx`) — 13개 스타일 미리보기 + Spec Table + 변경 사항 배지

### Changed

- **`theme.ts` `textStyle.body3`에 `@deprecated` JSDoc** — `body1`과 동일 값이며 Figma v2.6.0에서 대응 토큰이 사라짐. `textStyleV2.body1` 또는 기존 `textStyle.body1` 사용 권장
- **기존 `Typography.mdx`** — v2.6.0 신규 토큰 안내 배너 추가

### Migration Map

| 기존 `textStyle` | v2.6.0 `textStyleV2` | 비고 |
|---|---|---|
| `title1` (32/700/44/-0.81) | `title1` | 동일 |
| `title2` (28/700/38/-0.66) | `title2` | 동일 |
| `title3` (24/700/32/-0.55) | `title3` | 동일 |
| `heading` (20/600/28/-0.24) | **`headline1`** | 이름 변경 |
| `headline` (17/600/24/0) | **`headline2`** | 이름 변경 |
| `body1` (16/400/24/0.09) | `body1` | 동일 |
| (없음) | **`body1Str`** | 신규 (16px SemiBold) |
| `body2` (15/400/**22**/0.14) | `body2` (15/400/**22.5**/0.14) | lineHeight 22 → 22.5 |
| (없음) | **`body2Str`** | 신규 (15px SemiBold) |
| `body3` (16/400/24/0.09) | (없음, deprecated) | `body1`과 중복 |
| (없음) | **`label1`** (16/600/23/0) | 신규 (가장 큰 label) |
| `label1` (14/500/20/**0.2**) | **`label2`** (14/500/20/**0**) | 이름 변경 + LS 제거 |
| `label2` (13/500/**18**/**0.25**) | **`label3`** (13/500/**19**/**0**) | 이름 변경 + LH 18→19, LS 제거 |
| `caption` (12/**400**/16/0.3) | `caption` (12/**500**/16/0.3) | weight 400 → 500 |

### 후속 작업 (별도 PR)

기존 컴포넌트의 `textStyle.heading`/`textStyle.label1` 등 v1 키 참조를 `textStyleV2.headline1`/`textStyleV2.label2` 등 v2 키로 점진적 마이그레이션 예정.

---

## v2.5.0 (2026-05-11)

> Figma "6. gradient" 캔버스 기반 그라데이션 토큰 추가. 스크롤 영역 페이드 효과용. **Breaking Changes 없음 (additive only)**.

### Added

- **`gradientTokensV2`** namespace export (`theme.ts`) — 2개 토큰
  - **`whTopdown`** — 위→아래 흰색 페이드 (수직 스크롤 상단 fade-out)
  - **`whRight`** — 왼쪽→오른쪽 흰색 페이드 (가로 스크롤 우측 fade-out)
  - 각 토큰은 `colors`/`locations`/`start`/`end` (expo-linear-gradient 호환) + `css` (web용) 필드 동봉
- **`figma-tokens.json` `Primitives.gradient`** — type `gradient`로 2개 토큰 (stops 배열 + angle)
- **Storybook Gradient Tokens v2 페이지** (`stories/GradientTokensV2.mdx`) — 체커 배경 위 페이드 시각 카드 + Spec Table + RN/Web 사용 예시 (expo-linear-gradient 가이드 포함)

### React Native 호환성 노트

React Native는 네이티브 linear-gradient 미지원. 사용 시 `expo-linear-gradient` 설치 필요:
```bash
npx expo install expo-linear-gradient
```
토큰의 `colors`/`locations`/`start`/`end` 필드를 그대로 props로 매핑.

---

## v2.4.0 (2026-05-08)

> 모달/바텀시트 backdrop을 v2.3.0의 표준 `bk60`으로 마이그레이션. **시각 회귀 발생** (backdrop alpha 증가).

### Changed

- **`semanticColor.backgroundScrim`** — `rgba(0,0,0,0.4)` → `dimmedLayerTokensV2.bk60` (`rgba(0,0,0,0.6)`)
  - **Modal**: 백드롭 alpha `0.4` → `0.6` (50% 더 진한 dim)
  - **BottomSheet**: 백드롭 alpha `0.16` (= 0.4 × 0.4 multiplicative dilution) → **`0.6`** (3.75배 더 진한 dim)
- **`BottomSheet` 애니메이션 보정** — `BACKDROP_OPACITY = interaction.overlayOpacity` (`0.4`) → `1`
  - 기존: 정적 색의 0.4 alpha를 다시 0.4로 곱해 0.16으로 약화시키던 버그
  - 변경: 색 토큰(0.6)에 인코딩된 alpha를 그대로 표현, 애니메이션은 entrance/exit 페이드만 담당
- **`stories/ColorTokens.mdx`** — backgroundScrim 표기 `rgba(0,0,0,0.4)` → `rgba(0,0,0,0.6)` 동기화

### 시각 회귀 영향

| 컴포넌트 | 이전 effective alpha | 신규 effective alpha | 변화 |
|---|---|---|---|
| Modal | 0.4 | 0.6 | +50% |
| BottomSheet | 0.16 | 0.6 | +275% |

> Chromatic visual review에서 두 컴포넌트의 backdrop이 더 진하게 표시됨이 정상.

### 후방 호환

- `semanticColor.backgroundScrim` 키는 그대로 유지 — 기존 import 무수정
- `interaction.overlayOpacity = 0.4`는 보존 (다른 곳에서 참조될 가능성)

---

## v2.3.0 (2026-05-08)

> Figma "5. dimmed layer" 캔버스 기반 dim/scrim 토큰 추가. 모달 backdrop, 풀스크린 dim, 다크 배경 하이라이트용. **Breaking Changes 없음 (additive only)**.

### Added

- **`dimmedLayerTokensV2`** namespace export (`theme.ts`) — 5개 토큰 (BK 3단 + WH 2단)
  - **BK 3단**: `bk20` `rgba(0,0,0,0.2)` / `bk60` `rgba(0,0,0,0.6)` / `bk80` `rgba(0,0,0,0.8)`
  - **WH 2단**: `wh20` `rgba(255,255,255,0.2)` / `wh60` `rgba(255,255,255,0.6)`
  - 표준 backdrop scrim은 `bk60` (모달, 바텀시트 권장)
- **`figma-tokens.json` `Primitives.dimmedLayer`** — 5개 토큰 (color 타입 rgba 값)
- **Storybook Dimmed Layer Tokens v2 페이지** (`stories/DimmedLayerTokensV2.mdx`) — BK/WH 시각 카드(체커 배경 + 다크 그라데이션) + Spec Table + RN/Web 사용 예시

### Migration Notes

기존 `semanticColor.backgroundScrim` (`rgba(0,0,0,0.4)`)은 v2.3.0에서 미수정 (additive only). 모달/바텀시트 backdrop을 표준화하려면 후속 PR에서 `bk60` (`rgba(0,0,0,0.6)`)으로 마이그레이션 권장.

| 위치 | 현재 (v1) | 권장 (v2.3.0) |
|---|---|---|
| Modal/BottomSheet backdrop | `rgba(0,0,0,0.4)` | `dimmedLayerTokensV2.bk60` |
| 풀스크린 이미지 dim | (없음) | `dimmedLayerTokensV2.bk80` |
| 다크 배경 위 하이라이트 | (없음) | `dimmedLayerTokensV2.wh20` / `wh60` |

---

## v2.2.0 (2026-05-08)

> Figma "4. Shadow" 캔버스 기반 그림자 토큰 v2 추가. **Level 4 신규** + spread 필드 보존.

### Added

- **`shadowTokensV2`** namespace export (`theme.ts`) — 4 level (1~4), Figma DROP_SHADOW 원본 미러링
- **Level 4 그림자 신규** — bottom sheet 등 위로 향한 그림자 (offsetY: `-4`, opacity `0.10`, blur `16`, spread `4`)
- **spread 필드 보존** — Figma 원본 spread 값을 토큰에 명시 (web/Storybook은 `boxShadow`로 spread 포함 렌더링)
- **`color`에 alpha 포함** — `#00000014`/`#0000001A`/`#00000026` 등 8자리 hex 통일
- **`figma-tokens.json` `Primitives.shadow`** — style-dictionary `boxShadow` 타입 4 level
- **Storybook Shadow Tokens v2 페이지** (`stories/ShadowTokensV2.mdx`) — 4 level 시각 카드 + Spec Table + RN/Web 호환성 가이드
- **기존 `shadow.level4`** 추가 — 기존 export에 level4 추가 (additive, 호환성 유지)

### Changed

- **theme.ts `shadow`에 `@deprecated` JSDoc** — `shadowTokensV2` 사용 권장. 기존 토큰은 RN 호환을 위해 spread 누락 채로 유지
- **기존 `ShadowElevation.mdx`** — deprecation 배너 추가, v2 페이지로 유도

### Migration

| AS-IS (v1 shadow) | TO-BE (v2 shadowTokensV2) | 비고 |
|---|---|---|
| `shadow.level1` | `shadowTokensV2.level1` | 동일 시각, spread=0이라 차이 없음 |
| `shadow.level2` | `shadowTokensV2.level2` | RN 시각 동일, web에서 spread=4 추가 그림자 |
| `shadow.level3` | `shadowTokensV2.level3` | RN 시각 동일, web에서 spread=8 추가 그림자 |
| (없음) | `shadowTokensV2.level4` | bottom sheet 등 위로 향한 그림자 |

### React Native 호환성 노트

React Native shadow API는 `spread`를 미지원. v2 토큰의 `spread` 필드는 web Storybook과 향후 cross-platform 디자인 도구용 메타데이터로 보존됩니다. RN 컴포넌트는 `offsetX/offsetY`/`opacity`/`blur`/`elevation`만 사용하세요.

---

## v2.1.0 (2026-05-08)

> 디자인 토큰 컬러 v2.0 전면 갱신 + v2.1 스토리·컴포넌트 통합 릴리즈. **Breaking Changes 포함** — 마이그레이션 가이드는 아래 참조.

### ⚠️ Breaking Changes

- **shade 네이밍 역전**: `99/95/.../10` → `50/100/.../900` (50=옅음, 900=진함)
- **Mono.coolNeutral 22단 → Mono.neutral 10단**으로 정리. 기존 22개 토큰은 `deprecated: true` 마커로 보존
- **Brand.mint → Mono.mint 컬렉션 이동**. `mint45` → `mint400` (동일 hex `#22C3BC`)
- **Accent.orange → Semantic.orange 이동** (warning 시멘틱 후보 — Issue #3에서 결정 대기)
- **Mono.WH (#FFFFFF) / Mono.BK (#000000) 별도 토큰 분리**
- **8개 의미 반전 토큰**: `red50/yellow50/cyan50/khaki50/lightBlue50/pink50/purple50/violet50` — v1.x 강한 색이 v2에서 옅은 색으로 재정의됨. 기존 강한 색은 `*500` 또는 `*_v1` 접미사 참조

### Added

#### 디자인 토큰 v2.0
- **`colorTokensV2`** namespace export (`theme.ts`) — Figma Variables Primitives 구조 미러링 (`Mono`/`Semantic`/`Accent`)
- **122개 신규 swatch** (`figma-tokens.json`): Mono.neutral 10 + Mono.mint 10 + Mono.WH/BK 2 + Semantic 40 + Accent 60
- **Storybook Color Tokens v2 페이지** (`stories/ColorTokensV2.mdx`) — 3 섹션 (Basic / Semantic / Accent), 8개 의미 반전 ReversalNotice
- `.figma-extracted-snapshot.json` — Figma 추출 원본 스냅샷 동봉

#### v2.1 컴포넌트·스토리
- **신규 컴포넌트 7종** — StatCard, LikertScale, RadioCard, Tag, TimePicker, Stepper, Guide
- **신규 스토리 6종** — DesignSpec/InContext/States 섹션 패턴 정착
- **Figma 캔버스 시각화 17종** — SearchBar, DatePicker, TimePicker, Stepper, LikertScale, CircularProgress, EmptyState 등 전체 Figma Variables 바인딩

### Changed

- **컴포넌트 토큰 하이진** (23종) — `'#000000'` 하드코딩 → `palette.black`, 숫자 리터럴 → `radius.*`, `Pressable` 스타일 `StyleSheet.create()` 분리
- **theme.ts shadow level 1~3** — `shadowColor` 토큰 참조로 변경
- **30개 스토리 고도화** — DesignSpec/InContext/States 추가, semanticColor 토큰 일괄 전환
- **`palette` export에 `v2: colorTokensV2`** 추가 (`palette.v2.Mono.neutral[500]` 형태 접근)

### Deprecated

- **143개 v1 컬러 토큰** — `deprecated: true` + `comment` 필드로 보존. 컴포넌트 마이그레이션 전까지 참조 끊지 않음
- **theme.ts v1 스케일 12종** — `coolNeutral`, `mint`, `red`, `yellow`, `green`, `orange`, `pink`, `purple`, `violet`, `lightBlue`, `cyan`, `khaki`에 `@deprecated` JSDoc 추가 → IDE에서 사용처 strikethrough hint로 마이그레이션 타깃 가시화
- **8개 충돌 토큰**: 기존 `red50` 등은 `red50_v1` 접미사로 보존, 신규 값이 canonical 키 차지

### Fixed

- **TypeScript 컴파일 에러 42건** 일괄 수정
  - Tooltip type swap (position top/bottom ↔ horizontal align, position left/right ↔ vertical align)
  - Card/ListCard `thumbImage` 스타일 타입 `ViewStyle` → `ImageStyle`
  - PageIndicator `getPageIndicatorSize` sizeConfig 파라미터 union 타입 수용
  - Button stories 17건: `color="..."` → `colorScheme="..."`
  - Switch stories 7건: `active={...}` → `checked={...}`
  - Tag stories 2건: `{level}단계` → `` `${level}단계` `` (number→string)
  - Chip/TextArea/Tooltip stories 12건 타입 정합 수정
- **vitest TextField 테스트 ESM 파싱 실패** — `phosphor-react-native`를 setup.ts에서 NoopIcon으로 모킹

### Infra · Security

- **`CHROMATIC_PROJECT_TOKEN` 평문 노출 제거** — `package.json` deploy 스크립트에서 `--project-token=...` 플래그 제거, `CHROMATIC_PROJECT_TOKEN` 환경변수로 전환
- **`.env.example` 신규 추가** — Chromatic 환경변수 설정 가이드
- **`*.zip` `.gitignore` 추가**

> **후속 조치 필수**: git history에 노출된 기존 토큰(`chpt_a2aa7504369e0a9`) rotate 필요

### Migration

| AS-IS (v1) | TO-BE (v2.1) | 비고 |
|---|---|---|
| `coolNeutral[100]` (#FFFFFF) | `Mono.WH` 또는 `colorTokensV2.Mono.WH` | 신규 별도 토큰 |
| `coolNeutral[10]` (#171719) | `colorTokensV2.Mono.neutral[900]` | 동일 hex |
| `coolNeutral[40]` (#5A5C63) | `colorTokensV2.Mono.neutral[600]` | 동일 hex |
| `mint[45]` (#22C3BC) | `colorTokensV2.Mono.mint[400]` | 동일 hex (브랜드 키) |
| `yellow[50]` (#FFCE00) | `colorTokensV2.Semantic.yellow[300]` | 동일 hex (warning) |
| `red[50]` (#E51A1A) | ⚠️ `colorTokensV2.Semantic.red[500]` | hex 변경 (#D92020), 의미 반전 |
| `Accent.orange.*` | `colorTokensV2.Semantic.orange.*` | 카테고리 이동 |

---

## v2.0.0 (2026-04-22)

### Added
- AppBar 컴포넌트 (BackButton/CloseButton/IconAction 서브 컴포넌트)
- Tabs 컴포넌트 (S/M/L, hug/fill)
- PageIndicator 컴포넌트 (normal/white, fade 감쇠)
- SegmentedControl 컴포넌트 (S/M/L)
- FAB 컴포넌트 (regular/extended, primary/secondary)
- Tooltip 컴포넌트 (4방향 position + align)
- Card 컴포넌트 (썸네일 + 제목 + 캡션, Skeleton)
- ListCard 컴포넌트 (가로 리스트 카드, Skeleton)
- List 컴포넌트 (Compound: Item + ExpandableItem)
- FrequencyChip 컴포넌트 (4단계 severity)
- LevelIndicator 컴포넌트 (4구간 상태 막대 그래프)
- Brand Logo 페이지 (Getting Started)
- BorderRadius 토큰 카탈로그 (Semantics)
- Shadow Level 1 신규 추가 (0 0 4px rgba(0,0,0,0.08))
- role/warning 토큰 신규 (orange[60])
- role/caution 토큰 신규 (yellow[50])
- semanticColor.backgroundCaution/textCaution/iconCaution 추가

### Changed (Breaking)
- InputField → TextField (한 줄 입력)
- TextField → TextArea (여러 줄 입력)
- Tab → Tabs
- TabBar → BottomNavigation
- Dot → PageIndicator
- GENERAL → ACTIONS 카테고리 변경
- Icon: ACTIONS → FOUNDATION 이동
- Modal, BottomSheet: FEEDBACK → OVERLAY 이동
- role/warning: yellow[50] → orange[60] (주황)
- role/success: mint[45] → green[45]
- Shadow Level 리넘버링 (기존 L1→L2, L2→L3)

### Changed
- 모든 컴포넌트 Playground에 인터랙티브 useState 추가
- Divider 스토리 시맨틱 토큰 교체
- Toast Success/Warning 버튼 role 색상 적용
- Storybook 좌측 상단 biocom 로고 적용
- Color Palette에서 Opacity 섹션 삭제 (별도 페이지로 분리)

### Removed
- ActionArea 스토리
- Avatar 스토리

---

## v1.4.0 (2026-04-21)

### Added
- Figma Tokens Studio용 JSON 파일 (`figma-tokens.json`) — Primitives/Semantics/Components 3단계
- TokenSpecTable 재사용 컴포넌트 — 3열 구조(속성/시맨틱 토큰/값) + 색상 스와치 + opacity 시각화
- TextField 스토리 신규 추가 (InputField multiline 분리 문서화)
- Opacity 토큰 카탈로그 스토리 신규 추가 (15단계 시각화)

### Changed
- Button 스토리 전면 재생성 — TokenSpecTable 기반 디자인 스펙
- TextButton 스토리 전면 재생성 — TokenSpecTable 기반 디자인 스펙
- InputField 스토리 전면 재생성 — 상태별 토큰 스펙 문서화
- Checkbox 스토리 전면 재생성 — 인터랙티브 전체선택 데모
- Radio 스토리 전면 재생성 — RadioGroup 패턴 데모
- Switch 스토리 전면 재생성 — 설정 화면 패턴 데모
- Chip 스토리 전면 재생성 — Filter Chip 패턴 데모
- Toast 스토리 전면 재생성 — 인라인 미리보기 방식 전환
- Modal 스토리 전면 재생성 — Button/InputField import 재사용
- Shadow Level 1 삭제, Level 2→1, Level 3→2 명칭 변경
- storyHelpers opacity 하드코딩 → 토큰 참조 교체
- storySort에 TextField, Opacity 추가

### Fixed
- Storybook staticDirs `public/` 디렉토리 누락 오류 해결

---

## v1.3.1 (2026-04-14)

### Added

- **backgroundDisabled** 시맨틱 컬러 토큰 추가 — `coolNeutral[96]` (#E1E2E4) 참조, 비활성화 상태 컴포넌트 배경용

### Changed

- **Button** Figma 컴포넌트 기반 전면 교체 — 서체를 `textStyle` 참조로 변경 (S: label2, M: body2, L: headline)
- **Button** Assistive Outlined 텍스트 색상 `coolNeutral[40]` → `semanticColor.textPrimary`
- **Button** Assistive Solid 배경색 `coolNeutral[97]` → `semanticColor.backgroundDisabled`
- **TextButton** 서체를 `textStyle` 토큰 참조로 변경 — Small: `textStyle.label2`, Medium: `textStyle.body2`
- **TextButton** 컬러를 `semanticColor` 토큰 참조로 변경 — content→textBrand/textSecondary, disabled→textTertiary
- **InputField** 서체를 `textStyle` 토큰 참조로 변경 — label/message/counter→`textStyle.label2`, input→`textStyle.body2`
- **InputField** 아이콘 컬러를 `semanticColor.icon*` 토큰 참조로 변경
- 레거시 토큰 파일 정리 — `colors.ts`, `typography.ts`, `spacing.ts` 삭제 (`theme.ts`에 통합)

### Removed

- **backgroundPrimary** 시맨틱 컬러 토큰 제거 — 기존 참조 5개를 `backgroundStatus`로 교체
- **TextButton** 아이콘 조합 기능 전체 삭제 — `leadingIcon`, `trailingIcon` props, `iconSize` 토큰 제거
- **Button.test.tsx** 삭제 — Figma 기반 컴포넌트 재작성에 따른 기존 테스트 제거

---

## v1.3.0 (2026-03-19)

### ✨ Features

- **README.md** 추가 — 프로젝트 소개, 로컬 설치/실행 방법, 배포 가이드, 프로젝트 구조, 기술 스택, 기여 방법 문서화
- **GitHub Actions CI** 추가 — PR/push 시 TypeScript 체크 → Vitest 테스트 → Storybook 빌드 → Chromatic 배포 자동화 파이프라인
- **Vitest 단위 테스트** 도입 — Button(8개), InputField(10개), Checkbox(8개) 총 26개 테스트 작성

### 🔧 Infra

- **vitest.config.ts** 추가 — jsdom 환경, `@vitejs/plugin-react` JSX 자동 런타임, react-native-web alias 설정
- **테스트 setup** — `@testing-library/react`, `@testing-library/jest-dom` 연동
- **CI 워크플로우** — `ci.yml` (Node 20, npm ci → tsc → vitest → build-storybook → chromatic)

### 📝 Docs

- **CHANGELOG** v1.3.0 이력 추가
- **Release Notes** v1.3.0 섹션 추가

---

## v1.2.0 (2026-03-19)

### ✨ Features

- **Grid Palette** 페이지 추가 — 4px 배수 원시 값 시각화 (막대 비교), 20px 컬럼 그리드 설명, Figma 그리드 단축키(macOS ⌃G / Windows Ctrl+Shift+4)
- **Grid Tokens** 페이지 추가 — Spacing/Component/Radius 카테고리별 시맨틱 토큰 매핑 표, Color Tokens와 동일한 4열 레이아웃(Token Name/Preview/Value/Role), 클릭 복사
- **Pretendard Variable** 웹폰트 전역 적용 — `@font-face` 가변 폰트 선언(weight 100-900), `public/fonts/` 배치, `staticDirs` 설정

### ♻️ Refactored

- **Grid Palette 확장** — 컴포넌트 토큰 누락값 7개 추가 (14/18/28/36/38/44/52px). Palette 10개 → 17개, Grid Tokens와 완전 1:1 매핑
- **Grid Tokens 별칭 제거** — 이중 표기(alias) 완전 제거, theme.ts 실제 키만 표시. `SINGLE_LINE_HEIGHT` → `spacing['4xlarge']` 토큰 참조로 통일
- **전체 토큰 네이밍 통일** — 문서의 camelCase 오기재를 theme.ts 실제 키(`spacing['2xlarge']`)와 동기화
- **잘못된 토큰 타입 수정** — Modal `borderRadius: spacing.medium` → `radius.medium` (2건)
- **하드코딩 → 토큰** — TabBar/Chip/TextButton/ProgressBar px 값 → 토큰 교체 (5건)
- **palette.white 완전 제거** — 전 컴포넌트/스토리에서 `coolNeutral[100]`으로 전환 (12건)
- **Grid Tokens 최적화** — BaseRow 공통 추출, SubHeader로 서브 그룹 분리
- **Shadow & Elevation** → **Shadow**로 이름 변경
- **Spacing & Grid** 페이지 삭제 — Grid Palette + Grid Tokens로 대체
- **Button** — 디자인 스펙 폰트 크기 → 폰트 스타일(Label 2, Body 2, Headline) 표기

---

## v1.1.0 (2026-03-18)

### 🔧 Enhanced

- **BottomSheet** — `position: absolute` → `<Modal>` 전환, 300ms 슬라이드업 애니메이션 추가, `safeAreaBottom` prop으로 Safe Area 대응
- **ActionArea** — `safeAreaBottom` prop 추가, DeviceFrame 시뮬레이터로 실기기 프리뷰 제공, Cancel/Tertiary 변형 제거하여 3가지(Strong/Neutral/Compact)로 간소화
- **InputField** — `keyboardType`, `secureTextEntry`, `autoCapitalize` 1급 props 승격, 키보드 타입별 데모 8종 및 매핑 가이드 추가, KeyboardAvoidingView 사용법 문서화
- **Typography** — 피그마 11개 시맨틱 텍스트 스타일 1:1 매칭 (`textStyle.title1`~`caption`), lineHeight/letterSpacing RN 절대 px 값으로 수정, Weight 열에 Bold/SemiBold 등 텍스트 병기
- **Button** — Cancel 변형 보조 버튼 `solid` → `outlined` 통일
- **SpecTable** — 셀 겹침 수정 (셀 간 gap 추가, flexShrink 적용, 최소 폭 700px 확보)

### ♻️ Refactored

- **시맨틱 컬러 토큰 최적화** — Role Primitives(`_surface`, `_content`, `_line`, `_role`) 도입, 다크모드 확장 대비. 토큰 38개 → 27개 정리
- **시맨틱 토큰 병합** — `textTertiary` + `textPlaceholder`, `borderDefault` + `borderDisabled`, `borderFocus` + `borderBrand`, `statusSuccess` + `statusInfo` 통합
- **backgroundError/Success/Warning** → `backgroundStatus` 1개로 통합 (white)
- **`backgroundBrandDisabled`** 삭제, **Status 섹션** 전체 삭제 (역할 프리미티브로 대체)
- **`palette.white`** → `coolNeutral[100]` 전환 (시맨틱 토큰 6건)
- **neutral 팔레트 삭제** — `neutral` 14단계 완전 제거, `coolNeutral` 단일 무채색 팔레트로 통합, `coolNeutral[100]` #FFFFFF 추가
- **InputField** — 매직넘버 → 토큰, 인라인 스타일 → StyleSheet, 아이콘 4개 → `TRAILING_ICON_MAP` 통합, 중복 렌더 함수 추출
- **Button** — 정적 스타일 StyleSheet 분리, `contentColor` 변수 추출
- **ActionArea** — `ButtonRow` 공통 컴포넌트 추출, `ActionButtonProps` 타입 추출로 중복 제거
- **theme.ts** — `fontWeight`에 `as const` 추가
- **접근성 강화 (16/18)** — Button, TextButton, Chip, Toast, Modal, BottomSheet, Badge, Avatar, ProgressBar, Divider에 accessibilityRole/State/Label/Value 추가, Checkbox 매직넘버 → 토큰 교체

### 📝 Docs

- **Release Notes** — v1.1.0 이력 추가, 토글(details/summary) 재설계, caret SVG 아이콘, 컴포넌트 하이퍼링크, AS-IS/TO-BE 마이그레이션 스니펫
- **Color Palette** — Neutral + Cool Neutral → Mono 통합, 섹션명 정리 (Brand, Semantic, Extended), Orange/Purple 설명 업데이트, coolNeutral100 추가
- **Color Tokens** — 제목 `Semantic Color Tokens` → `Color Tokens`, Usage 맨 밑 이동, Value에 팔레트명(coolNeutral17, mint45 등) 표기, 토큰 수 반영
- **Design Tokens 전체** — Usage 섹션 스타일/레이아웃 통일 (민트 그라데이션 배경, usage-card 패턴)
- **NamingConvention** — Quick Reference 상단 이동, 헬퍼 추출 (34% 코드 감소), 테이블 하단 테두리 추가

### 🔧 Infra

- **Chromatic** 설치 및 시각적 회귀 테스트 환경 구축
- **`npm run deploy`** 통합 배포 스크립트 추가 (GitHub Pages + Chromatic 동시 배포)

---

## v1.0.0 (2026-03-17)

### ✨ Features

- **Button** 컴포넌트 추가 — Solid/Outlined 변형, Primary/Assistive 컬러, S/M/L 3단계 크기, 로딩 상태 지원
- **TextButton** 컴포넌트 추가 — 배경 없는 텍스트 전용 버튼, 밑줄 스타일, 아이콘 조합 지원
- **Chip** 컴포넌트 추가 — Solid/Outlined 변형, XS/S/M/L 4단계 크기, 활성/비활성/비활성화 상태
- **Icon** 시스템 구축 — Normal(43개), Color(12개), Circle(12개), Mini(7개) 총 74개 아이콘, 검색 및 클릭 복사 기능
- **InputField** 컴포넌트 추가 — 4가지 상태(비활성/입력됨/포커스/에러), 글자 수 카운터, 후행 아이콘/텍스트 조합
- **Checkbox** 컴포넌트 추가 — 미선택/선택/부분선택 3가지 상태, 부모-자식 연동 패턴 지원
- **CheckMark** 컴포넌트 추가 — 체크 아이콘만 사용하는 간결한 선택 컴포넌트
- **Radio** 컴포넌트 추가 — 라디오 그룹 패턴, 라벨/보조라벨/Tight 모드 지원
- **Switch** 컴포넌트 추가 — iOS/Normal 플랫폼별 디자인, S/M 크기
- **Toast** 컴포넌트 추가 — 성공/경고/에러 3가지 변형, 자동 닫힘, 액션 버튼 지원
- **Modal** 컴포넌트 추가 — 확인 대화상자, 위험 액션(빨간 버튼), 커스텀 콘텐츠 지원
- **BottomSheet** 컴포넌트 추가 — 하단 시트, 드래그 핸들바, 닫기 버튼 옵션
- **TabBar** 컴포넌트 추가 — 바이오컴 기본 5탭(콘텐츠/목표/메인/AI/쇼핑), 아이콘 연동
- **ActionArea** 컴포넌트 추가 — 화면 하단 액션 영역, Strong/Neutral/Compact 3가지 변형
- **Badge** 컴포넌트 추가 — 숫자/상태 배지, Filled/Outlined/Dot 변형, 최대값 초과 시 "99+" 표시
- **Avatar** 컴포넌트 추가 — 프로필 이미지, 이니셜 폴백, 온라인 상태 표시
- **Divider** 컴포넌트 추가 — 수평/수직 구분선, 두께/색상/인셋 커스텀
- **ProgressBar** 컴포넌트 추가 — 수평 진행률 표시, 3단계 크기, 4가지 컬러, 퍼센트 라벨
- **Skeleton** 컴포넌트 추가 — 로딩 플레이스홀더, 텍스트/원형/사각형 변형, 시머 애니메이션
- **null 아이콘** 추가 — 컴포넌트 샘플/플레이스홀더 전용 스캔 프레임 아이콘

### 🎨 Design System

- **컬러 팔레트** 정의 — 13종 색상 카테고리(Neutral, Cool Neutral, Khaki, Yellow, Orange, Red, Pink, Purple, Violet, Light Blue, Cyan, Mint, Green), 단계별 HEX 코드
- **시맨틱 컬러 토큰** 구축 — Text/Background/Border/Icon/Status 5개 섹션, 38개 역할 기반 토큰
- **타이포그래피 시스템** 정의 — Pretendard Variable 기반, 11개 텍스트 위계(Title 1~3, Heading, Headline, Body 1~3, Label 1~2, Caption)
- **스페이싱/반경 토큰** 정의 — xsmall(4)~4xlarge(48) 스페이싱, xsmall(4)~full(9999) 반경
- **인터랙션 토큰** 추가 — pressOpacity(0.7), overlayOpacity(0.4) 공통 상수
- **컴포넌트 토큰** 정의 — Button, TextButton, Chip, ActionArea 별 크기/컬러/변형 토큰
- **네이밍 컨벤션** 수립 — 5가지 핵심 원칙, 컴포넌트/토큰/파일/아이콘별 Do/Don't 규칙
- **토큰 키 리네이밍** — 축약형(xs, sm, md, lg, xl) → 전체 단어(xsmall, small, medium, large, xlarge)로 전체 통일
- **에러 색상 변경** — RedOrange[50] → Red[70] (#EF7676)
- **팔레트 리네이밍** — Orange → Yellow, RedOrange → Orange
- **Biocom 브랜드 테마** 적용 — 사이드바/도구바 민트 브랜드 색상(#22C3BC)

### 🐛 Fixes

- GitHub Pages 배포 시 "Failed to fetch dynamically imported module" 오류 해결 (상대 경로 통일)
- Jekyll이 `_` 접두사 파일을 무시하는 문제 해결 (.nojekyll + 파일명 변경)
- `__DEV__` 미정의 오류 해결 (preview.ts + Vite define 설정)
- Typography 다운로드 버튼 텍스트 흰색 미적용 문제 해결 (CSS class + inline 이중 적용)
- InputField 포커스 시 브라우저 기본 파란색 outline 제거
- InputField 글자 수 카운터가 타이핑 시 업데이트되지 않던 문제 해결 (내부 상태 관리)
- InputField 글자 수 초과 시 카운터 색상이 에러색으로 변경되도록 수정
- Chip/Badge 가로 크기가 부모에 맞게 늘어나던 문제 해결 (alignSelf: flex-start)
- Toast 컴포넌트 SVG 직접 그리기 코드를 Icon 컴포넌트로 통일
- InputField/CheckMark의 SVG 직접 그리기 코드를 Icon 컴포넌트로 통일
- 하드코딩된 #FFFFFF를 palette.white 토큰으로 전체 교체
- 미사용 import 10건 정리

### 📝 Docs

- **Introduction** 페이지 — 바이오컴 디자인 시스템 철학, 비전, 목표 서술
- **Color Palette** 페이지 — 13종 팔레트 전체 HEX 코드, 클릭 복사 기능
- **Color Tokens** 페이지 — 38개 시맨틱 토큰 표, 팔레트 출처 태그, 클릭 복사 기능
- **Typography** 페이지 — 11개 텍스트 위계 스펙 표, 미리보기, Pretendard Variable 다운로드 링크
- **Naming Convention** 페이지 — 5가지 원칙, 4개 카테고리별 Do/Don't 규칙표
- **모든 컴포넌트 스토리 구조 통일** — Playground, 모든 변형, 디자인 스펙, 사용 가이드 패턴
- 스토리 공통 헬퍼 구축 — Section, StateLabel, SpecTable, CodeBlock, CompareGrid 등
- 카테고리별 사이드바 정리 — Foundation → General → Form → Feedback → Display 순서
- 접근성 props(accessibilityRole, accessibilityState) 6개 컴포넌트에 추가
- 12개 컴포넌트 인터페이스에 JSDoc 한글 설명 추가
- renderIcon() 유틸 함수 추출로 Chip/TextButton 중복 코드 제거
