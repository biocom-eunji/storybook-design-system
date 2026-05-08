# 디자인 시스템 감사 리포트

**작성일**: 2026-04-22
**감사 범위**: 전체 컴포넌트 42개 + 토큰 + 스토리 41개 + MDX 문서
**감사자 주관 고지**: 네이밍, 카테고리 제안은 감사자의 주관적 판단을 포함합니다.

---

## Executive Summary

| 항목 | 수치 |
|---|---|
| 전체 컴포넌트 | 42개 |
| 이슈 발견 컴포넌트 | 31개 |
| 하드코딩 | 48건 |
| 토큰 계층 위반 | 6건 |
| 네이밍 개선 제안 | 22건 (High 8 / Medium 9 / Low 5) |
| 설명 정리 대상 | 12건 |
| 카테고리 재배치 후보 | 2건 |
| 누락 문서 | 1건 (Semantics/Spacing) |

### 카테고리별 건강도

| 카테고리 | 컴포넌트 수 | 평균 건강도 | 주요 이슈 |
|---|---|---|---|
| ACTIONS | 3 | 8/10 | FAB icon prop 패턴 위반 |
| INPUT | 12 | 6/10 | Checkbox/Radio 하드코딩, 선택 상태 prop 불일치 |
| FEEDBACK | 5 | 7/10 | Skeleton 웹 DOM 사용 |
| OVERLAY | 3 | 6/10 | Modal/BottomSheet scrim 하드코딩, Tooltip 네이밍 오류 |
| NAVIGATION | 4 | 6/10 | Tabs/BottomNavigation API 불일치 |
| DATA DISPLAY | 10 | 7/10 | Badge 로직 버그, StatCard primitive 직접 참조 |

### 가장 시급한 TOP 10 이슈

| # | 컴포넌트 | 이슈 | 심각도 |
|---|---|---|---|
| 1 | Badge | `success` 색상이 `backgroundBrand`로 매핑 (로직 버그) | Critical |
| 2 | Badge | `fontSize: 10/11` — 최소 12px 미만, WCAG 위반 | Critical |
| 3 | Badge | `fontWeight: '600'` 하드코딩 | Critical |
| 4 | Skeleton | `<style>`, `<div>` 웹 DOM 사용 — RN에서 동작 불가 | Critical |
| 5 | Switch/Radio/Checkbox | 선택 상태 prop 이름 불일치 (`active`/`checked`/`state`) | High |
| 6 | FAB, Chip | icon prop이 `ReactNode` 직접 수용 — iconRegistry 우회 | High |
| 7 | BottomSheet | `palette.black` 직접 import — primitive 계층 위반 | High |
| 8 | Tabs vs BottomNav | size 표기 (`'S'|'M'|'L'` vs `'small'|'medium'|'large'`), API 불일치 | High |
| 9 | DatePicker | `backgroundError` 토큰을 텍스트 색상에 사용 — 의미 위반 | High |
| 10 | Tooltip | `AlignVertical`/`AlignHorizontal` 이름이 실제 제어 축과 반대 | High |

---

## 1. 하드코딩 (48건)

### 1-1. 반복 패턴 (여러 컴포넌트에서 동일 유형 반복)

#### `opacity: 0.4` (disabled 상태) — 4건
> 토큰 `interaction.disabledOpacity`가 존재하지 않아 raw 값 사용 중. 토큰 추가 필요.

| 컴포넌트 | 라인 |
|---|---|
| Stepper | 70 |
| TimePicker | 81 |
| LikertScale | 158 |
| RadioCard | 167 |

#### `borderWidth: 1.5` — 4건
> 표준 border 두께(1 또는 2)에 해당하지 않는 값. 1로 통일 권장.

| 컴포넌트 | 라인 |
|---|---|
| Checkbox | 70 |
| Radio | 64 |
| LikertScale | 124 |
| RadioCard | 123 |

#### `marginTop: 2` / `gap: 2` — 5건
> 4px 그리드 최소 단위(4) 미만. `spacing.xsmall`(4) 또는 0으로 정렬 필요.

| 컴포넌트 | 라인 | 값 |
|---|---|---|
| Checkbox | 100 | `marginTop: 2` |
| Radio | 85 | `marginTop: 2` |
| Stepper | 175 | `marginLeft: 2` |
| List | 219 | `gap: 2` |
| RadioCard | 189 | `gap: 2` |

#### raw `fontSize` / `subFontSize` (토큰 미참조) — 4건

| 컴포넌트 | 라인 | 값 | 대체 토큰 |
|---|---|---|---|
| Checkbox (small) | 21 | `fontSize: 14, subFontSize: 13` | `textStyle.label1.fontSize`, `textStyle.label2.fontSize` |
| Checkbox (medium) | 22 | `fontSize: 15, subFontSize: 14` | `textStyle.body2.fontSize`, `textStyle.label1.fontSize` |
| Radio (small) | 18 | `fontSize: 14, subFontSize: 13` | 동일 |
| Radio (medium) | 19 | `fontSize: 15, subFontSize: 14` | 동일 |

### 1-2. 개별 하드코딩

| 컴포넌트 | 라인 | 스니펫 | 대체 제안 |
|---|---|---|---|
| TextField | 253 | `gap: 6` (주석으로 4px grid 예외 인정) | `spacing.xsmall`(4) 또는 토큰 추가 |
| Chip | 66 | `opacity: 0.7` (pressed) | `interaction.pressOpacity` |
| Chip | 71 | `paddingLeft: 4` | `spacing.xsmall` |
| Switch | 35 | inline shadow 값 (`shadowOpacity: 0.15` 등) | `shadow.level1` 또는 전용 토큰 |
| DatePicker | 205 | `opacity: 0.3` (disabled day) | disabled 공통 토큰 |
| DatePicker | 125,145,177 | `CELL_SIZE=40`, 버튼 `36×36`, `borderRadius: 18` | 컴포넌트 토큰 정의 |
| TimePicker | 180,190,215 | 버튼/박스 `36`, `64×56`, `48×36` | 컴포넌트 토큰 정의 |
| Stepper | 66 | icon sizes `14/18/22` inline 분기 | SIZE_MAP에 통합 |
| OTPInput | 164,176 | `CELL_SIZE=48`, `CELL_SIZE+8` | 컴포넌트 토큰 |
| SearchBar | 79 | `height: 44` | 컴포넌트 토큰 |
| Modal | 75 | `'rgba(0,0,0,0.4)'` scrim 색상 | `semanticColor.backgroundScrim` 신규 정의 |
| Modal | 89 | `width: 300` | 화면 비율 기반 또는 토큰 |
| Badge | 80 | `fontWeight: '600'` | `fontWeight.semibold` |
| Badge | 29-31 | `fontSize: 10/11` | 최소 12px (WCAG AA) |
| Tabs | 52 | `TAB_PY = 12` | `spacing.medium` |
| BottomNavigation | 84 | `height: 60` | 컴포넌트 토큰 |
| Card | 27 | `CARD_GAP = 6` | `spacing.xsmall`(4) 또는 `spacing.small`(8) |
| LevelIndicator | 25 | `BAR_RADIUS = 6` | `radius.xsmall`(4) 또는 `radius.small`(8) |
| Avatar | 26-29 | sizeMap font sizes (`13,15,20,28`) | `textStyle.*` 토큰 참조 |
| Tooltip | 47 | `paddingVertical: 6` | `spacing.xsmall`(4) 또는 토큰 추가 |
| StatCard | 299 | `HEADER_ICON_GAP = 6` | 동일 |

### 1-3. 누락 토큰 제안

감사 과정에서 발견된, 현재 존재하지 않아 신규 정의가 필요한 토큰:

| 토큰명 (제안) | 용도 | 현재 raw 값 |
|---|---|---|
| `interaction.disabledOpacity` | disabled 상태 전체 opacity | 0.4 |
| `semanticColor.backgroundScrim` | 오버레이 배경 dim | `rgba(0,0,0,0.4)` |

---

## 2. 토큰 계층 위반 (6건)

### 2-1. Primitive palette 직접 import

| 컴포넌트 | 라인 | 사용된 primitive | 대체 가능한 semantic |
|---|---|---|---|
| Switch | 3, 34 | `palette.black` (shadow color) | semantic 없음 → `semanticColor.backgroundScrim` 또는 shadow 토큰 사용 |
| BottomSheet | 12, 140 | `palette.black` (backdrop) | semantic 없음 → `semanticColor.backgroundScrim` 신규 정의 |
| FrequencyChip | 3, 29-33 | `green[90]`, `yellow[90]`, `orange[90]`, `red[90]` (halo) | semantic 없음 → `semanticColor.background*Subtle` 시리즈 신규 정의 |
| StatCard | 13-15, 21-29 | `violet[60]`, `purple[40]`, `green[45]`, `lightBlue[50]`, `mint[45]`, `red[60]` | semantic 없음 → `semanticColor.accent*` 시리즈 신규 정의 |

### 2-2. Semantic 토큰의 의미 위반

| 컴포넌트 | 라인 | 사용 | 문제 | 수정 |
|---|---|---|---|---|
| DatePicker | 165, 211 | `semanticColor.backgroundError` → 일요일 텍스트 색상 | background 토큰을 text에 사용 | `semanticColor.textError` |
| Switch | 65 | `semanticColor.textOnColor` → thumb 배경색 | text 토큰을 background에 사용 | `semanticColor.backgroundStatus` |

---

## 3. 네이밍 개선 제안 (22건)

### High Impact (8건)
> 사용자/개발자가 혼동하거나, 컴포넌트 간 일관성을 심각하게 해치는 경우

| # | 대상 | 현재 | 제안 | 근거 |
|---|---|---|---|---|
| 1 | Radio/Checkbox/Switch | `checked` / `state` / `active` | 모두 `checked`로 통일 | 동일한 "선택 여부" 개념에 3가지 다른 이름. 폼 연동 시 혼란 |
| 2 | Tabs | `TabsSize = 'S'\|'M'\|'L'` | `'small'\|'medium'\|'large'` | 전체 시스템이 소문자 풀네임 사용. 유일한 예외 |
| 3 | BottomNavigation | `activeTab` / `onTabPress` | `value` / `onChange` | Tabs는 `value`/`onChange` 사용. 동일 패턴으로 통일 |
| 4 | BottomNavigation | `tabs: TabItem[]` | `items: TabItem[]` | Tabs 컴포넌트가 `items` 사용. 동일 개념 통일 |
| 5 | Tooltip | `TooltipAlignVertical` | `TooltipAlignHorizontal` | 이름이 실제 제어 축과 반대. Vertical이 가로 정렬을 제어 중 |
| 6 | Tooltip | `TooltipAlignHorizontal` | `TooltipAlignVertical` | 위와 반대. 두 타입명이 교차되어 있음 |
| 7 | FAB | `icon: ReactNode` | `iconName: string` + Icon 컴포넌트 경유 | CLAUDE.md §14-2 안티 패턴 (iconRegistry 우회) |
| 8 | Chip | `leadingIcon/trailingIcon: ReactNode` | `leadingIconName/trailingIconName: string` | 동일 안티 패턴 |

### Medium Impact (9건)

| # | 대상 | 현재 | 제안 | 근거 |
|---|---|---|---|---|
| 9 | Button/TextButton | `color` prop | `colorScheme` 또는 `intent` | RN `<Text>`의 `color` prop과 이름 충돌 |
| 10 | Chip | `active` | `selected` | `accessibilityState: { selected }` 와 일치시키기 |
| 11 | Checkbox | `bold` prop | Radio에는 없음 → 제거 또는 양쪽 통일 | Checkbox/Radio 간 비대칭 |
| 12 | OTPInput | `error` + `errorMessage` 이중 prop | `errorMessage`만으로 에러 판단 (TextField 패턴) | TextField는 `errorMessage`만 사용 |
| 13 | TimePicker | `hour`/`minute`/`period` 3개 분리 | `value: TimeValue` 단일 객체 | state 동기화 3중 useEffect 발생 |
| 14 | SegmentedControl | controlled only | `defaultValue` 추가 | §10-4 제어/비제어 병행 원칙 |
| 15 | PageIndicator | `variant: 'white'` | `variant: 'inverse'` | 색상명 대신 의미명 사용 관례 |
| 16 | FrequencyChip | `severity: 'moderate'` | `severity: 'caution'` | LevelIndicator는 `caution` 사용. 동일 tier 통일 |
| 17 | Divider | `spacing` prop | `margin` 또는 `gap` | 토큰 이름 `spacing`과 충돌 가능 |

### Low Impact (5건)

| # | 대상 | 현재 | 제안 | 근거 |
|---|---|---|---|---|
| 18 | OTPInput | `length` | `digits` 또는 `codeLength` | JS `Array.length`와 혼동 |
| 19 | Checkbox/Radio | `tight` | `compact` | 의미가 더 직관적 |
| 20 | SearchBar | `onSubmit` | `onSubmitEditing` 또는 `onSearch` | RN 관례와 일치 |
| 21 | Card/ListCard | `skeleton` | `loading` | RN 일반 관례 |
| 22 | StatCard | accent `'blue'` | `'indigo'` | 실제 매핑이 `violet[50]`이라 blue가 아님 |

---

## 4. 설명 정리 제안 (12건)

### 4-1. 스토리 name 한영 혼용 (Korean/English 불일치)

| 파일 | 스토리 | 현재 name | 제안 |
|---|---|---|---|
| Modal.stories.tsx | Confirmation | *(name 없음 — 영어 자동 생성)* | `name: '확인 다이얼로그'` 추가 |
| Modal.stories.tsx | Destructive | *(name 없음)* | `name: '위험 액션'` 추가 |
| Modal.stories.tsx | FormModal | *(name 없음)* | `name: '폼 모달'` 추가 |
| Modal.stories.tsx | TitleOnly | *(name 없음)* | `name: '제목만'` 추가 |
| Modal.stories.tsx | SingleAction | *(name 없음)* | `name: '단일 액션'` 추가 |
| AppBar.stories.tsx | FullExample | `'Full Example'` | `'전체 예시'` |
| AppBar.stories.tsx | Transparent | `'Transparent'` | `'투명 배경'` |
| AppBar.stories.tsx | WithCloseButton | `'CloseButton'` | `'닫기 버튼'` |

### 4-2. 보일러플레이트 설명 중복

6개 이상의 컴포넌트 DesignSpec 스토리에 동일 문구 반복:
> "디자이너·개발자를 위한 Figma 시맨틱 토큰 기준 [X] 전체 조합 스펙 문서입니다."

**제안**: 중복 제거 또는 컴포넌트별 고유 설명으로 교체.

### 4-3. Figma 미보유 고지

| 파일 | 스토리 | 현재 문구 |
|---|---|---|
| AppBar.stories.tsx | DesignSpec | "Figma 디자인 없이 자체 정의한 값입니다." |
| FAB.stories.tsx | DesignSpec | "Material Design 3 기반 FAB 스펙입니다. Figma 디자인 없이 자체 정의한 값입니다." |

**제안**: 내부 추적용으로 유지. 단, 외부 공개 시 제거 필요.

### 4-4. 플랫폼 위반 코드

| 파일 | 위치 | 문제 |
|---|---|---|
| Toast.stories.tsx | Playground (~130줄) | `<div style={{ transition: ... }}>` — 웹 전용 DOM. RN에서 미동작 |
| Skeleton.tsx | 58-78줄 | `<style dangerouslySetInnerHTML>`, `<div>` — 컴포넌트 자체가 웹 DOM 사용 |

---

## 5. 카테고리 분류 MECE 검증

### 5-1. 누락 문서

| storySort 항목 | 파일 존재 | 상태 |
|---|---|---|
| `Semantics/Spacing` | `.stories.tsx` 없음, `.mdx` 없음 | **누락** — 사이드바에 빈 항목 노출 |

### 5-2. 카테고리 적합성 재검토

| 컴포넌트 | 현재 | 검토 결과 |
|---|---|---|
| CircularProgress | Feedback | 적합. StatCard 내부에서도 사용되나 독립 Feedback 표시 역할 |
| Stepper | Input | 적합. 숫자 증감 입력 용도 |
| EmptyState | Feedback | 적합. 빈 상태 피드백 |
| Tag | Data Display | 적합. Badge 옆 배치, 인라인 정보 표시 |

**이동 제안 후보**: 없음. 현재 카테고리 배치가 적절합니다.

### 5-3. 카테고리 규모 균형

| 카테고리 | 컴포넌트 수 | 평가 |
|---|---|---|
| INPUT | 12 | 가장 비대 — 세분화 가능하나 현재 수준에서 무리 없음 |
| ACTIONS | 3 | 적정 |
| FEEDBACK | 5 | 적정 |
| OVERLAY | 3 | 적정 |
| NAVIGATION | 4 | 적정 |
| DATA DISPLAY | 10 | 다소 비대하나 역할 구분 명확 |

### 5-4. Badge 로직 버그 (카테고리와 무관하나 중요)

`Badge.tsx` 24행: `success: semanticColor.backgroundBrand` — success 색상이 brand(민트)로 매핑.
**`semanticColor.backgroundSuccess`(green)로 수정 필요.** 이는 카테고리 문제가 아닌 로직 버그.

---

## 우선순위 권장 실행 순서

### Phase 1: Quick Wins (기계적 수정, breaking change 없음)
1. **Badge 로직 버그** — `success` → `backgroundSuccess` (1줄 수정)
2. **Badge fontWeight 하드코딩** — `'600'` → `fontWeight.semibold`
3. **Badge fontSize 최소 12px** — WCAG AA 준수
4. **DatePicker 일요일 색상** — `backgroundError` → `textError`
5. **Switch thumb 배경** — `textOnColor` → `backgroundStatus`
6. **Chip pressed opacity** — `0.7` → `interaction.pressOpacity`
7. **Checkbox/Radio raw fontSize** — `textStyle.*` 토큰 참조로 교체
8. **Checkbox/Radio borderWidth 1.5** → 1로 통일
9. **Checkbox/Radio marginTop 2** → 0 또는 `spacing.xsmall`
10. **Tabs TAB_PY** — `12` → `spacing.medium`
11. **신규 토큰 정의**: `interaction.disabledOpacity = 0.4`
12. **신규 토큰 정의**: `semanticColor.backgroundScrim` (오버레이 dim)
13. **Modal/BottomSheet scrim** — 신규 토큰 적용
14. **Semantics/Spacing 문서** — mdx 파일 생성

### Phase 2: Medium (일관성 개선, minor breaking change 가능)
1. **선택 상태 prop 통일** — Switch `active` → `checked`, Checkbox `state` → `checked` + `indeterminate` boolean
2. **Tabs size 타입** — `'S'|'M'|'L'` → `'small'|'medium'|'large'`
3. **BottomNavigation API** — `activeTab` → `value`, `onTabPress` → `onChange`, `tabs` → `items`
4. **Tooltip 타입명 교차** — `AlignVertical` ↔ `AlignHorizontal` 교환
5. **FrequencyChip severity** — `'moderate'` → `'caution'`
6. **PageIndicator variant** — `'white'` → `'inverse'`
7. **OTPInput error 이중 prop** — `error` boolean 제거, `errorMessage`만 유지
8. **스토리 name 한국어 통일** — Modal 5개, AppBar 3개
9. **Skeleton 웹 DOM** — `Animated.View` 기반 shimmer로 교체

### Phase 3: Careful (설계 변경, breaking change 위험)
1. **FAB/Chip icon prop** — `ReactNode` → icon name string 패턴 (API 변경)
2. **Button/TextButton color prop** — `colorScheme` 또는 `intent` 으로 변경
3. **TimePicker 3-prop** → 단일 `value` 객체로 통합
4. **StatCard accent palette** — `semanticColor.accent*` 시리즈 신규 정의
5. **FrequencyChip halo** — `semanticColor.background*Subtle` 시리즈 신규 정의

---

## 감사 한계

- 스토리 파일(.stories.tsx)의 데모 콘텐츠 내 하드코딩은 의도적으로 제외했습니다.
- 성능(렌더링 최적화, 메모이제이션 등)은 감사 범위 외입니다.
- 접근성은 코드 레벨에서만 확인했으며, 실제 스크린 리더 테스트는 미수행입니다.
- Figma 파일과의 시각적 일치 여부는 이번 감사에서 확인하지 않았습니다.
