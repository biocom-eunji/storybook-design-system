# CLAUDE.md — Biocom App Design System 작업 지침

> 본 문서는 Biocom 디자인 시스템 리포지토리의 Root 지침서다.
> 매 세션 시작 시 자동 로드되어 에이전트에게 프로젝트 정체성, 작업 절차, 디자인 토큰, 금지 사항을 주입한다.

---

## 0. 프로젝트 정체성 (Project Identity)

| 항목 | 내용 |
|---|---|
| **프로젝트명** | Biocom |
| **한 줄 정의** | AI 기반 헬스케어 × 게이미피케이션 셀프케어 앱 |
| **핵심 가치** | 식단·수면·운동·영양제 데이터를 통합 분석하여 개인 맞춤형 건강 관리를 제공 |
| **타겟 유저** | 20~40대 셀프케어에 관심 있는 일반 사용자 |
| **플랫폼** | 모바일 앱 (iOS / Android), 모바일 퍼스트 |
| **프로젝트 단계** | 초기 기획 (MVP 이전) |
| **현재 리포지토리** | `design-system` — 제품 본체가 아닌, 제품이 참조할 디자인 시스템 패키지 |

### 0-1. 디자인 철학 3대 축

모든 판단은 아래 3축의 균형을 기준으로 한다.

1. **신뢰감(Trust)** — 건강 데이터를 다루므로 과장·모호함 없이 정직하게 표현
2. **재미(Play)** — 게이미피케이션이 브랜드 DNA. 단, 의료 정보의 진중함을 해치지 않는 선에서
3. **접근성(Accessibility)** — 건강 앱은 누구나 써야 한다. WCAG 2.1 AA를 하한선으로 본다

### 0-2. 기술 스택

- **프레임워크**: React Native (Expo 권장)
- **언어**: TypeScript (`strict: true`)
- **컴포넌트 원칙**: Atomic Design (Atoms → Molecules → Organisms)
- **배포 전략**: 외부 UI 라이브러리 의존 최소화, 컴포넌트 코드를 리포 내부에서 직접 소유·수정 (Copy-own)
- **아이콘**: Phosphor Icons (`phosphor-react-native`) — 타 라이브러리 혼용 금지
- **폰트**: Pretendard Variable — `expo-font`로 번들 포함 필수 (시스템 폰트 폴백 금지)
- **문서화**: Storybook + Chromatic
- **테스트**: Vitest

**미확정 (제품 리포 생성 시 결정)**
- 상태관리 (Zustand / TanStack Query 유력)
- 애니메이션 (Reanimated 3 + Moti 권장)
- 내비게이션 (React Navigation 추정)

---

## 1. 작업 전 필수 확인

- 모든 작업은 이 파일의 규칙을 전부 숙지한 뒤 시작한다
- 단계를 건너뛰거나 순서를 바꾸지 않는다
- 모호하거나 판단이 필요한 상황은 작업 전 반드시 먼저 질문한다
- 각 단계 완료 시 완료 여부를 보고한 뒤 다음 단계로 넘어간다
- 디자인 값(색상·폰트·간격·radius)은 이 문서 §9의 토큰 외 임의 값 사용 금지

---

## 2. 전체 작업 흐름 (순서 고정)

```
PHASE 1. Figma 디자인 시스템 고도화
    → PHASE 2. Figma Variables 저장
    → PHASE 3. Storybook 업데이트
    → PHASE 4. Git Push + Chromatic 배포
    → PHASE 5. Release Notes 기록
    → PHASE 6. (위 완료 후) 앱 화면 제작
```

단계 간 선행 조건이 충족되지 않으면 다음 단계로 진행하지 않는다.

---

## 3. Figma 작업 규칙

### 3-1. 기본 원칙
- 기존 스타일 규칙(네이밍, 계층 구조, 색상 체계)을 분석한 뒤 작업한다
- 기존 규칙과 충돌이 발생하면 임의로 판단하지 않고 먼저 보고한다
- 모든 프레임과 컴포넌트는 Auto Layout을 유지한다
- Auto Layout 해제가 불가피할 경우 반드시 사전 보고 후 진행한다

### 3-2. 네이밍 규칙

```
컴포넌트: [Category]/[Name]/[Variant]
예시: Button/Primary/Default
     Input/Text/Error
     Card/Profile/Elevated

Variables: [collection]/[group]/[token]
예시: Primitives/blue/500
     Semantic/color/bg-primary
     Component/button/bg-default
```

### 3-3. 폰트 로딩 규칙 ⚠️

#### 절대 금지
```javascript
// ❌ family에 style 합치기 금지
figma.loadFontAsync({ family: "Pretendard Variable Regular" })
figma.loadFontAsync({ family: "Pretendard Variable Bold" })
```

#### 올바른 문법 (반드시 준수)
```javascript
// ✅ family와 style 반드시 분리
figma.loadFontAsync({ family: "Pretendard Variable", style: "Regular" })
figma.loadFontAsync({ family: "Pretendard Variable", style: "Medium" })
figma.loadFontAsync({ family: "Pretendard Variable", style: "SemiBold" })
figma.loadFontAsync({ family: "Pretendard Variable", style: "Bold" })
figma.loadFontAsync({ family: "Pretendard Variable", style: "Light" })
```

#### 용도별 style 매핑
| 용도 | family | style |
|---|---|---|
| Display / H1~H2 | Pretendard Variable | Bold |
| H3~H4 / Subheading | Pretendard Variable | SemiBold |
| Body / Button 텍스트 | Pretendard Variable | Medium |
| Caption / Label / Helper | Pretendard Variable | Regular |
| Placeholder | Pretendard Variable | Light |

#### MCP API 폰트 로드 제한 사항
- Pretendard Variable는 **문서 내장 폰트**로, MCP Plugin API에서 `loadFontAsync` 불가
- `listAvailableFontsAsync()`에 Pretendard가 표시되지 않음
- 문서 내 실제 사용 중인 스타일: **Regular, Medium, SemiBold** (Bold/Light 미확인)
- **대체 폰트**: MCP API로 텍스트 생성 시 `Inter` 사용 (Bold, Semi Bold, Regular 등 사용 가능)
- 기존 컴포넌트 인스턴스의 텍스트 변경도 폰트 로드 실패로 불가 — 수동 편집 필요

#### 폰트 오류 발생 시 처리
1. `figma.listAvailableFontsAsync()` 로 사용 가능한 폰트 목록 출력
2. "Pretendard" 포함 항목의 정확한 family / style 확인
3. 확인된 값으로 재시도
4. 그래도 실패 시 Inter 폰트로 대체 후 보고

### 3-4. Variables 저장 규칙
- 컬렉션 구조는 아래 3단계로 고정
  ```
  Primitives   → raw 값 (blue-500, gray-100 등)
  Semantics    → 역할별 alias (bg-primary, text-secondary 등)
  Components   → 컴포넌트별 토큰 (button-bg, input-border 등)
  ```
- Semantic 토큰은 Primitives를 참조(alias)로 연결, 직접 값 입력 금지
- 기존 Variables와 중복되는 토큰은 신규 생성하지 않고 기존 것 재사용
- 토큰 실제 값은 이 문서 §9 참조

### 3-5. 캔버스 시각화 규칙
- 수정/추가된 항목은 Figma 캔버스 "Design System" 페이지에 반영
- 섹션 구조:
  ```
  ├── 🎨 Colors
  ├── 📝 Typography
  ├── 📐 Spacing & Grid
  ├── 🔘 Components
  └── 📋 변경 이력
  ```
- 신규 항목은 해당 섹션에 추가, 기존 항목 수정 시 원본 위치에서 수정
- 각 항목에 토큰명 레이블 표기

---

## 4. Storybook 업데이트 규칙

### 4-1. 기본 원칙
- Figma Variables 변경/추가 후 반드시 Storybook에 동기화
- 하드코딩된 값(color: "#3B82F6", fontSize: 16 등) 사용 금지
- 모든 값은 `src/tokens/tokens.ts` 에서 import해서 사용

### 4-2. 스토리 작성 기준
- 모든 컴포넌트 스토리는 아래 Variant를 포함
  ```
  Default / Disabled / Error / Loading
  ```
- Controls: 주요 props는 모두 argType으로 조작 가능하게 설정

### 4-3. 파일 위치 규칙
```
src/
├── tokens/
│   ├── figma-tokens.json             ← Figma Variables 추출본
│   └── tokens.ts                     ← style-dictionary 빌드 결과물
├── components/
│   └── [ComponentName]/
│       ├── [ComponentName].tsx
│       └── [ComponentName].stories.tsx
└── stories/
    └── ReleaseNotes.mdx          ← 릴리즈 노트
```

### 4-4. 토큰 빌드
- Variables 변경 시 반드시 style-dictionary 빌드 먼저 실행
  ```bash
  npx style-dictionary build
  ```
- 빌드 결과 `src/tokens/tokens.ts` 생성 확인 후 Storybook 작업 시작

---

## 5. Git 커밋 규칙

### 5-1. 브랜치 전략
```
main                               ← 배포 브랜치
└── feat/design-system-v[버전]     ← 작업 브랜치
```

### 5-2. 커밋 메시지 형식
```
feat(tokens): [변경 내용 요약]
feat(components): [변경 내용 요약]
docs(storybook): [변경 내용 요약]
docs(changelog): Release Notes v[버전] 업데이트
fix(figma): [수정 내용]
```

### 5-3. 커밋 순서 (반드시 준수)
```
1. tokens/ 변경사항
2. src/tokens/ 빌드 결과물
3. src/components/ 변경사항
4. src/stories/ 스토리 변경사항
5. CHANGELOG.md 업데이트
```

### 5-4. Push 전 체크리스트
```
□ style-dictionary 빌드 완료 확인
□ Storybook 로컬 실행 오류 없음 확인
□ 커밋 메시지 형식 준수 확인
```

---

## 6. Chromatic 배포 규칙

- Git push 완료 후 Chromatic 배포 실행
- 배포 명령어:
  ```bash
  npm run chromatic
  ```
- 배포 완료 후 Chromatic URL 보고
- Visual regression(시각적 변경)이 감지된 경우 변경 목록 함께 보고

---

## 7. Release Notes 작성 규칙

### 7-1. CHANGELOG.md 형식
```markdown
## [버전] - YYYY-MM-DD

### Added
- 새로 추가된 토큰/컴포넌트 목록

### Changed
- 수정된 항목 목록

### Fixed
- 수정된 버그 목록

### Deprecated
- 제거 예정 항목 목록
```

### 7-2. Storybook ReleaseNotes.mdx 형식

파일 위치: `src/stories/ReleaseNotes.mdx`

#### 구조 개요
```
① LINK 객체에 신규 컴포넌트 경로 추가
② stat-grid 숫자 업데이트 (컴포넌트 수, 아이콘 수 등)
③ 기존 최상단 버전 블록 위에 새 버전 블록 추가
④ 이전 버전 블록의 open 속성 제거 (접힌 상태로 전환)
⑤ 버전 간 <hr className="version-divider" /> 삽입
```

#### LINK 객체 — 신규 컴포넌트 추가 시
```jsx
export const LINK = {
  // 기존 항목 유지
  Button:      `${SB}general-button--docs`,

  // 신규 추가 예시
  NewComponent: `${SB}[category]-[componentname]--docs`,
};
```

#### 버전 헤더 — 버전 타입별 badge 클래스 구분
```jsx
{/* Major 버전 — badge 기본(민트색) */}
<div className="version-header">
  <span className="version-badge">v2.0.0</span>
  <span className="version-date">YYYY-MM-DD</span>
</div>

{/* Minor/Patch 버전 — badge minor(검정색) */}
<div className="version-header">
  <span className="version-badge minor">v1.4.0</span>
  <span className="version-date">YYYY-MM-DD</span>
</div>
```

#### toggle-card 카테고리별 템플릿

**Features / Design System (컴포넌트·토큰 추가)**
```jsx
<details className="toggle-card" open>
  <summary>
    <CaretIcon />
    <span className="emoji">✨</span>
    <span className="title">Features</span>
    <span className="count">{항목 수}</span>
  </summary>
  <div className="toggle-body">

    {/* 신규 컴포넌트 태그 목록 */}
    <div className="component-tags">
      <span className="component-tag new">NewComponent</span>
      <span className="component-tag updated">UpdatedComponent</span>
    </div>

    {/* Storybook 링크 있는 항목 */}
    <div className="change-item">
      <span className="name"><a href={LINK.ComponentName}>ComponentName</a></span>
      <span className="desc">변경/추가 내용 설명</span>
    </div>

    {/* Storybook 링크 없는 항목 */}
    <div className="change-item">
      <span className="name-plain">항목명</span>
      <span className="desc">변경/추가 내용 설명. <code>토큰명</code> 코드 표기 가능</span>
    </div>

  </div>
</details>
```

**Refactored (리팩토링)**
```jsx
<details className="toggle-card">
  <summary>
    <CaretIcon />
    <span className="emoji">♻️</span>
    <span className="title">Refactored</span>
    <span className="count">{항목 수}</span>
  </summary>
  <div className="toggle-body">
    <div className="change-item">
      <span className="name-plain">항목명</span>
      <span className="desc">리팩토링 내용</span>
    </div>
  </div>
</details>
```

**Fixes (버그 수정) — simple-list 사용**
```jsx
<details className="toggle-card">
  <summary>
    <CaretIcon />
    <span className="emoji">🐛</span>
    <span className="title">Fixes</span>
    <span className="count">{항목 수}</span>
  </summary>
  <div className="toggle-body">
    <ul className="simple-list">
      <li>수정 내용. <code>관련 코드</code> 표기 가능</li>
      <li>수정 내용</li>
    </ul>
  </div>
</details>
```

**Infra (CI/빌드/배포 관련)**
```jsx
<details className="toggle-card">
  <summary>
    <CaretIcon />
    <span className="emoji">🔧</span>
    <span className="title">Infra</span>
    <span className="count">{항목 수}</span>
  </summary>
  <div className="toggle-body">
    <div className="change-item">
      <span className="name-plain">항목명</span>
      <span className="desc">내용. <code>파일명/명령어</code> 표기 가능</span>
    </div>
  </div>
</details>
```

**Docs (문서 추가/수정)**
```jsx
<details className="toggle-card">
  <summary>
    <CaretIcon />
    <span className="emoji">📝</span>
    <span className="title">Docs</span>
    <span className="count">{항목 수}</span>
  </summary>
  <div className="toggle-body">
    <div className="change-item">
      <span className="name"><a href={LINK.PageName}>페이지명</a></span>
      <span className="desc">문서 내용 설명</span>
    </div>
  </div>
</details>
```

**Breaking Changes (마이그레이션 가이드 포함)**
```jsx
<details className="toggle-card">
  <summary>
    <CaretIcon />
    <span className="emoji">⚠️</span>
    <span className="title">Breaking Changes</span>
    <span className="count">{항목 수}</span>
  </summary>
  <div className="toggle-body">
    <div className="change-item">
      <span className="name-plain">항목명</span>
      <span className="desc">변경 내용 설명</span>
    </div>
    <div className="migration-block">
      <div className="migration-row">
        <div className="migration-col">
          <p className="migration-label">Before</p>
          <pre>이전 코드</pre>
        </div>
        <div className="migration-col">
          <p className="migration-label">After</p>
          <pre>변경된 코드</pre>
        </div>
      </div>
    </div>
  </div>
</details>
```

#### 버전 간 구분선
```jsx
<hr className="version-divider" />
```

#### stat-grid 업데이트 기준
```jsx
<div className="stat-grid">
  <div className="stat-card">
    <p className="num">{총 컴포넌트 수}</p>
    <p className="label">컴포넌트</p>
  </div>
  <div className="stat-card">
    <p className="num">{총 아이콘 수}</p>
    <p className="label">아이콘</p>
  </div>
  <div className="stat-card">
    <p className="num">{총 단위 테스트 수}</p>
    <p className="label">단위 테스트</p>
  </div>
  <div className="stat-card">
    <p className="num">CI</p>
    <p className="label">자동화 파이프라인</p>
  </div>
</div>
```

#### 작성 규칙 요약
- 신규 버전 블록은 **항상 최상단**에 추가 (과거 버전은 아래로 밀림)
- 최신 버전 toggle-card만 `open` 속성 유지, 나머지는 제거
- `change-item` 내 설명은 **명사형**으로 끝맺음 (동사형 금지)
- Storybook 링크 있는 항목 → `.name > <a>` / 없는 항목 → `.name-plain`
- `component-tag` 클래스: 신규는 `new`, 수정은 `updated`
- 항목 수(`count`)는 해당 toggle-card 내 `change-item` + `li` 총합과 일치시킬 것

### 7-3. 버전 관리 기준 (semver)
```
Major (1.0.0 → 2.0.0): 기존 토큰/컴포넌트 삭제 또는 breaking change
Minor (1.0.0 → 1.1.0): 신규 토큰/컴포넌트 추가
Patch (1.0.0 → 1.0.1): 버그 수정, 오타 수정
```

---

## 8. 앱 화면 제작 규칙 (Phase 6 — 선행 단계 완료 후 진행)

- Phase 1~5 완료 확인 후에만 진행
- 반드시 기존 디자인 시스템 Variables와 컴포넌트만 사용
- 새로운 토큰/컴포넌트가 필요한 경우 Phase 1~5 프로세스로 먼저 추가 후 사용
- 화면 Frame 네이밍:
  ```
  [ScreenName]/[Platform]/[State]
  예시: SignUp/Mobile/Default
       Home/Tablet/LoggedIn
  ```
- 모바일 우선 (375px 기준), 이후 Tablet (768px) 대응
- 화면 완성 후 React Native 코드 변환 순서:
  ```
  1. Figma 프레임 → RN 컴포넌트 변환
  2. 토큰 src/tokens/tokens.ts 참조
  3. react-hook-form 유효성 검사 포함
  4. Storybook 스토리 추가
  5. Phase 4~5 배포/기록 프로세스 동일 적용
  ```

---

## 9. 디자인 토큰 값 (Source of Truth)

> 이 섹션의 값은 `src/tokens/figma-tokens.json`, `src/tokens/tokens.ts`와 완벽히 일치해야 한다.
> 불일치 발견 시 에이전트는 작업을 중단하고 보고한다.

### 9-1. 컬러 토큰

**Brand**
| 토큰명 | Hex | 용도 |
|---|---|---|
| `color.brand.primary` | `#22C3BC` | 브랜드 메인, CTA 버튼, 주요 강조 |

**Semantic**
| 토큰명 | Hex | 용도 |
|---|---|---|
| `color.semantic.success` | `#22C3BC` | 성공 상태 |
| `color.semantic.error` | `#EF7676` | 오류, 경고, 위험 행동 |
| `color.semantic.warning` | `#FFCE00` | 주의, 진행 중, 부분 완료 |

**주의**: Primary와 Success가 현재 동일 색상(`#22C3BC`)이다. CTA 버튼과 상태 배지가 같은 화면에 공존할 때 시각적 구분이 약해질 수 있으므로, 중장기적으로 Success를 별도 색(예: `#1AA89F`)으로 분리 검토 필요.

**Neutral (제안값 — 실제 Figma 정의 확정 시 교체)**
```
color.neutral.0       #FFFFFF
color.neutral.50      #F7F8F9
color.neutral.100     #EEF0F2
color.neutral.200     #DDE1E5
color.neutral.400     #9BA3AD
color.neutral.600     #5A6470
color.neutral.800     #2A3138
color.neutral.900     #141820
```

**사용 규칙**
- 하드코딩 절대 금지. `import { color } from '@/tokens'` 경유
- CTA는 brand 토큰, 상태 표시는 semantic 토큰 — 의미 구분을 이름으로 유지
- 명도 대비 최소 4.5:1 (본문), 3:1 (큰 텍스트 18pt 이상)

### 9-2. 타이포그래피 토큰

**Font Family**: Pretendard Variable (시스템 폰트 폴백 금지)

**Size Scale**
| 토큰명 | Size | Line-height | 용도 |
|---|---|---|---|
| `typo.size.12` | 12px | 1.5 | Caption, 태그 |
| `typo.size.13` | 13px | 1.5 | Small label |
| `typo.size.14` | 14px | 1.5 | 보조 본문 |
| `typo.size.15` | 15px | 1.5 | Label |
| `typo.size.16` | 16px | 1.5 | **본문 기본** |
| `typo.size.17` | 17px | 1.5 | 강조 본문 |
| `typo.size.20` | 20px | 1.4 | Sub-heading |
| `typo.size.24` | 24px | 1.3 | H3 |
| `typo.size.28` | 28px | 1.3 | H2 |
| `typo.size.32` | 32px | 1.2 | H1, Display |

**공통 속성**
- Letter-spacing: `0.0057em` (모든 본문)
- 모바일 본문 최소 16px — 이 이하로 낮추지 않는다
- `size.15` 이하는 메타 정보(타임스탬프, 보조 라벨) 전용

### 9-3. 간격 토큰 (4의 배수)

| 토큰명 | Value | 토큰명 | Value |
|---|---|---|---|
| `spacing.0` | 0 | `spacing.5` | 20px |
| `spacing.1` | 4px | `spacing.6` | 24px |
| `spacing.2` | 8px | `spacing.8` | 32px |
| `spacing.3` | 12px | `spacing.10` | 40px |
| `spacing.4` | 16px | `spacing.12` | 48px |
|  |  | `spacing.16` | 64px |

- 임의 값(13px, 17px 등) 금지. 4의 배수로 반올림
- 화면 좌우 기본 여백: `spacing.5` (20px)
- 섹션 간 수직 간격: 최소 `spacing.6` (24px)

### 9-4. 라운딩 토큰

| 토큰명 | Value | 용도 |
|---|---|---|
| `radius.xs` | 4px | Chip, Badge, 작은 input |
| `radius.sm` | 8px | Checkbox, Radio 등 control |
| `radius.md` | 12px | InputField, Button (기본) |
| `radius.lg` | 16px | Card, Modal |
| `radius.xl` | 24px | BottomSheet 상단, 큰 카드 |
| `radius.full` | 9999px | Pill 버튼, Avatar, Switch thumb |

### 9-5. 다크모드 정책

**v1에서는 Light 단일 지원.** 단, 에이전트는 아래를 준수한다.
- 토큰 이름은 Semantic으로 유지 (`color.bg.primary` 등) → 추후 다크모드 추가 시 값만 교체
- `useColorScheme()`, `Appearance` API 직접 호출 금지
- 고대비 모드 대응은 별도 허용 (`AccessibilityInfo.isHighTextContrastEnabled()`)

### 9-6. 그림자 / Elevation (TBD — `stories/ShadowElevation.mdx` 확정값으로 교체 필요)

| 토큰명 | offset | blur | opacity |
|---|---|---|---|
| `shadow.sm` | 0, 1 | 2 | 0.05 |
| `shadow.md` | 0, 4 | 8 | 0.08 |
| `shadow.lg` | 0, 8 | 16 | 0.12 |

iOS는 `shadowColor/Offset/Opacity/Radius`, Android는 `elevation`으로 플랫폼 분기 필요.

---

## 10. 컴포넌트 인벤토리 & Atomic 분류

### 10-1. 기존 컴포넌트 (17종 + Icon 서브구조)

새 컴포넌트 생성 전 **반드시** 이 표에서 중복·확장 가능성을 검토한다.

| # | 컴포넌트 | 분류 | 역할 |
|---|---|---|---|
| 1 | `ActionArea` | Atom | 탭 가능 영역 래퍼 (터치 피드백 공통화) |
| 2 | `Avatar` | Atom | 사용자 프로필 이미지 |
| 3 | `Badge` | Atom | 상태/카운트 표시 |
| 4 | `BottomSheet` | Organism | 모바일 하단 시트 |
| 5 | `Button` | Atom | 기본 버튼 |
| 6 | `CheckMark` | Atom | 체크 아이콘 (Checkbox 내부 부품) |
| 7 | `Checkbox` | Molecule | 체크박스 (CheckMark + 라벨 조합) |
| 8 | `Chip` | Atom | 태그/필터 칩 |
| 9 | `Divider` | Atom | 구분선 |
| 10 | `Icon` | Atom | 아이콘 렌더러 (iconRegistry 경유) |
| 11 | `InputField` | Molecule | 텍스트 입력 (라벨·에러 포함) |
| 12 | `Modal` | Organism | 모달 다이얼로그 |
| 13 | `ProgressBar` | Atom | 진행률 표시 |
| 14 | `Radio` | Molecule | 라디오 버튼 |
| 15 | `Skeleton` | Atom | 로딩 스켈레톤 |
| 16 | `Switch` | Atom | 토글 스위치 |
| 17 | `TabBar` | Organism | 탭 내비게이션 |
| 18 | `TextButton` | Atom | 텍스트 전용 버튼 |
| 19 | `Toast` | Organism | 토스트 알림 |

> 실제 분류가 다르면 이 표를 먼저 수정한 후 작업 진행.

### 10-2. Atomic Design 분류 기준

- **Atoms**: 더 이상 쪼갤 수 없는 최소 UI. 단일 책임, 비즈니스 로직 없음
- **Molecules**: Atom 2개 이상의 조합, 하나의 목적 단위
- **Organisms**: 독립적으로 의미를 갖는 UI 섹션
- **Templates / Pages**: 이 리포 범위 아님. 제품 리포에서 조합

### 10-3. 컴포넌트 제작 체크리스트

**사전 검토**
- [ ] §10-1 인벤토리에서 중복·확장 가능성 확인
- [ ] Atomic 계층 결정
- [ ] 제품 리포 재사용 가능성 검토 (불가 시 제품 리포의 로컬 컴포넌트로)

**파일 작성**
- [ ] `src/components/[Name].tsx` 생성
- [ ] TypeScript `interface [Name]Props` 명시적 정의
- [ ] 모든 디자인 값은 `@/tokens`에서 import
- [ ] Phosphor 아이콘은 `Icon` 컴포넌트 경유 (`iconRegistry.ts` 등록)

**스토리 & 테스트**
- [ ] `stories/[Name].stories.tsx` — 최소 Default / Disabled / Error / Loading
- [ ] `src/__tests__/[Name].test.tsx` — 렌더, 인터랙션, 에지 케이스

**문서화 & 접근성**
- [ ] JSDoc으로 Props 설명
- [ ] `accessibilityLabel`, `accessibilityRole`, `accessibilityState` 명시

### 10-4. Props 설계 원칙

- **Composition over Configuration**: Props 10개 넘으면 분해 신호. Compound Pattern 고려 (`<Modal.Header>`, `<Modal.Body>` 등)
- **제어/비제어 병행**: `value` + `onChange` (controlled), `defaultValue` (uncontrolled) 둘 다 지원
- **Forwarded Ref**: 모든 interactive 컴포넌트는 `forwardRef`로 ref 전달 지원

### 10-5. React Native 특수 제약

- 웹 속성 금지: `onClick` → `onPress`, `className` → `style`, `href` 사용 불가
- 플랫폼 분기: `Platform.select()` 또는 `.ios.tsx` / `.android.tsx` 파일 분리
- 스타일은 `StyleSheet.create()` 권장
- 이미지는 `require()` 또는 `expo-image`, `<img>` 금지
- 리스트는 `FlatList` / `FlashList` 필수, `map()` + `ScrollView` 금지

### 10-6. 명명 규칙

- 파일명: PascalCase (`BottomSheet.tsx`)
- 컴포넌트명: 파일명과 동일, **Named export 권장**
- Props Boolean: `is-`, `has-` 접두 지양 (`disabled`, `loading`, `selected`)
- 이벤트: `onPress`, `onChange`, `onClose` (RN 관례)
- Variant 값: 문자열 리터럴 유니온 (`'primary' | 'secondary' | 'ghost' | 'danger'`)
- 금지: 약어 (`Btn`, `Img`), 숫자 접미 (`Button2`, `ButtonNew`)

---

## 11. 접근성 체크리스트 (WCAG 2.1 AA)

### 11-1. 헬스케어 도메인 특별 고려

- 시력 저하가 있는 40대 이상 사용자
- 저조도 환경 야간 사용자 (수면 관리 시간대)
- 한 손 조작 환경 (다른 한 손은 식사/운동 중)
- 스크린 리더 사용자 (VoiceOver / TalkBack)

### 11-2. 필수 준수 사항

**Visual**
- 본문 텍스트 대비 최소 **4.5:1**, 큰 텍스트(18pt+) **3:1**
- 상태를 색 단독 표현 금지 — 아이콘·텍스트·패턴 중 하나 병기
- 본문 최소 16px, 그 이하는 메타 정보 전용

**Touch**
- 터치 타겟 최소 **44 × 44 pt** (`hitSlop`으로 확장 가능)
- 인접 터치 타겟 간 **8pt 이상** 간격
- 스와이프 전용 동작 금지 — 반드시 탭 대안 제공 (BottomSheet 닫기 버튼 필수)

**Screen Reader**
- 모든 interactive 요소에 `accessibilityRole` 명시
- 아이콘 전용 버튼은 `accessibilityLabel` 필수
- `accessibilityState`: `{ disabled, selected, checked, expanded, busy }`
- 장식용 요소는 `accessibilityElementsHidden={true}` (iOS) / `importantForAccessibility="no"` (Android)
- 실시간 알림(Toast 등): `accessibilityLiveRegion="polite"` 또는 `AccessibilityInfo.announceForAccessibility()`

**Motion**
- 허용 속성: `transform`, `opacity`만
- 금지 속성: `width`, `height`, `top/left`, `backgroundColor` (레이아웃 재계산 유발)
- Reduce Motion 설정 대응: `AccessibilityInfo.isReduceMotionEnabled()`
- 깜빡임 초당 3회 이하 (광과민성 발작 방지)

**Form**
- 입력 필드 **명시적 라벨 필수** (Placeholder 단독 라벨 금지)
- 에러 메시지는 필드와 `accessibilityLabelledBy` 연결
- 자동완성: `textContentType` (iOS), `autoComplete` (Android)

### 11-3. 작업 완료 후 자가 진단

에이전트는 아래 질문에 YES/NO로 답한다. 하나라도 NO면 작업 미완료.

- [ ] 텍스트 대비 4.5:1 이상?
- [ ] 색 단독으로 상태 표현한 곳 없음?
- [ ] 본문 16pt 이상?
- [ ] 터치 타겟 44×44pt 이상?
- [ ] 스와이프 전용 동작에 탭 대안 있음?
- [ ] 모든 interactive 요소에 `accessibilityRole` 있음?
- [ ] 아이콘 전용 버튼에 `accessibilityLabel` 있음?
- [ ] `transform`·`opacity` 외 애니메이션 속성 미사용?
- [ ] Reduce Motion 대응 로직 있음?
- [ ] 입력 필드에 명시적 라벨 있음?

---

## 12. 톤앤매너 가이드 [TBD — 확정 후 교체]

> 이 섹션은 현재 제안값이다. 은지님 확정 후 실제 브랜드 가이드로 교체 필요.

### 12-1. 브랜드 보이스

**핵심 성격**: 친절한 건강 코치 (Friendly Health Coach)

| 축 | 방향 |
|---|---|
| Trustworthy | 근거 있게, 과장 없이 |
| Warm | 잔소리가 아닌 응원하는 친구처럼 |
| Playful | 게이미피케이션 DNA 유지, 단 건강 정보는 진중하게 |

### 12-2. 기본 어조 규칙

| 항목 | 원칙 |
|---|---|
| 존댓말 | 친근한 존댓말 (`~해요`, `~할까요?`) |
| 명령조 | 금지. 제안형 사용 (`~해보세요` O, `~하라` X) |
| 전문 용어 | 최소화. 괄호로 쉬운 설명 병기 |
| 이모지 | 성취·응원 맥락에서만. 에러·안내에는 금지 |
| 수치 | 단위·범위 병기 (`약 7시간`, `권장량 기준`) |
| 2인칭 | `당신` 또는 가입 시 입력한 닉네임 (`회원님` 지양) |

### 12-3. 마이크로카피 패턴

**버튼 라벨**
| 맥락 | 권장 | 지양 |
|---|---|---|
| 시작 | "시작하기", "기록할게요" | "START", "저장" |
| 확인 | "확인", "알겠어요" | "OK", "Yes" |
| 취소 | "취소", "나중에 할게요" | "Cancel" |
| 삭제 | "삭제", "~를 지울게요" | "Delete" |

**에러 메시지 구조**: [무엇이 잘못됐는지] + [어떻게 해결]
- O: "기록을 불러오지 못했어요. 잠시 후 다시 시도해주세요."
- X: "Error 404. Failed to fetch data."

**빈 상태**: 부정형이 아닌 가능성 제시
- O: "오늘 첫 식단을 기록해보세요"
- X: "기록이 없습니다"

**성공 메시지 (게이미피케이션 영역)**: 이모지·톤 확장 허용
- "7일 연속 기록 달성! 🎉 습관이 만들어지고 있어요"

### 12-4. 의료 정보 주의 문구

**항상 포함**: "Biocom의 제안은 의학적 진단을 대체하지 않아요. 이상 증상이 있다면 의료 전문가와 상담해주세요."

### 12-5. 금칙어

- "절대", "반드시" — 단정적 표현 위험
- "다이어트" → "균형 잡힌 식단"
- "실패", "실수" → "다시 시작해볼까요?"
- "정상/비정상" → "권장 범위/권장 범위 밖"

---

## 13. 오류 처리 규칙

- 오류 발생 시 임의로 넘어가지 않는다
- 오류 메시지 전문과 발생 단계를 보고한 뒤 지시를 기다린다
- 동일 오류 2회 이상 반복 시 대안 방법 제시 후 선택을 요청한다
- 작업 중간에 기존 파일/토큰을 삭제해야 하는 상황이 생기면 반드시 사전 보고 후 승인을 받는다

---

## 14. 시행착오 일지 (Lessons Learned)

> 에이전트가 실수한 내역과 사용자가 반복 수정한 사항을 이 섹션에 **누적 기록**한다.
> 같은 실수를 반복하지 않기 위함이다. 프로젝트 진행에 따라 계속 채워나간다.

### 14-1. 과거 실수 및 해결책

| 날짜 | 실수 | 해결 |
|---|---|---|
| YYYY-MM-DD | *(기록 대기 중)* | - |

### 14-2. 안티 패턴 (Anti-Patterns)

- 아이콘을 `phosphor-react-native`에서 직접 import 금지 → **반드시 `src/components/Icon/iconRegistry.ts` 경유**
- 색상 hex 코드 하드코딩 금지 → `src/tokens/tokens.ts` semantic 토큰 사용
- 웹 shadcn/ui 컴포넌트(`@/components/ui/*`) import 시도 금지 → 이 프로젝트는 React Native
- `Pretendard Variable Regular`처럼 family+style 합친 문법 금지 → §3-3 참조
- 인라인 스타일로 반복되는 값 작성 금지 → StyleSheet 또는 토큰화
- 리스트 렌더링에 `map()` + `ScrollView` 금지 → `FlatList` / `FlashList`

### 14-3. 에이전트 행동 개선 지침

- "간단한 수정"이라는 판단으로 Plan 단계를 건너뛰지 않는다. 애매하면 계획부터 제시한다
- 사용자가 "~처럼 보이게"라고 모호하게 요청하면 **반드시 참조 이미지/Figma 링크를 먼저 요청**한다
- 추측성 정보 생성 금지. 모르는 API·라이브러리 동작은 공식 문서를 확인하거나 사용자에게 질문한다
- 폰트 로드 오류 시 §3-3의 처리 절차를 따른다 (목록 확인 → 재시도 → Inter 대체 + 보고)

---

## 15. 메타 정보

- **최종 수정일**: 2026-04-21
- **작성자**: 은지 × 루미 (AI 협업)
- **다음 업데이트 트리거**:
  - 제품 리포 생성 시 → §0-2 기술 스택 확정
  - 브랜드 가이드 v1 확정 시 → §12 톤앤매너 교체
  - Neutral 컬러·Shadow 값 확정 시 → §9-1, §9-6 교체
  - 시행착오 발생 시 → §14-1 누적 기록
