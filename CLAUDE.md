# CLAUDE.md — BioComm App Design System 작업 지침

---

## 0. 작업 전 필수 확인

- 모든 작업은 이 파일의 규칙을 전부 숙지한 뒤 시작한다
- 단계를 건너뛰거나 순서를 바꾸지 않는다
- 모호하거나 판단이 필요한 상황은 작업 전 반드시 먼저 질문한다
- 각 단계 완료 시 완료 여부를 보고한 뒤 다음 단계로 넘어간다

---

## 1. 전체 작업 흐름 (순서 고정)

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

## 2. Figma 작업 규칙

### 2-1. 기본 원칙
- 기존 스타일 규칙(네이밍, 계층 구조, 색상 체계)을 분석한 뒤 작업한다
- 기존 규칙과 충돌이 발생하면 임의로 판단하지 않고 먼저 보고한다
- 모든 프레임과 컴포넌트는 Auto Layout을 유지한다
- Auto Layout 해제가 불가피할 경우 반드시 사전 보고 후 진행한다

### 2-2. 네이밍 규칙

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

### 2-3. 폰트 로딩 규칙 ⚠️

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

### 2-4. Variables 저장 규칙
- 컬렉션 구조는 아래 3단계로 고정
  ```
  Primitives   → raw 값 (blue-500, gray-100 등)
  Semantics    → 역할별 alias (bg-primary, text-secondary 등)
  Components   → 컴포넌트별 토큰 (button-bg, input-border 등)
  ```
- Semantic 토큰은 Primitives를 참조(alias)로 연결, 직접 값 입력 금지
- 기존 Variables와 중복되는 토큰은 신규 생성하지 않고 기존 것 재사용

### 2-5. 캔버스 시각화 규칙
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

## 3. Storybook 업데이트 규칙

### 3-1. 기본 원칙
- Figma Variables 변경/추가 후 반드시 Storybook에 동기화
- 하드코딩된 값(color: "#3B82F6", fontSize: 16 등) 사용 금지
- 모든 값은 `src/tokens/tokens.ts` 에서 import해서 사용

### 3-2. 스토리 작성 기준
- 모든 컴포넌트 스토리는 아래 Variant를 포함
  ```
  Default / Disabled / Error / Loading
  ```
- Controls: 주요 props는 모두 argType으로 조작 가능하게 설정

### 3-3. 파일 위치 규칙
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

### 3-4. 토큰 빌드
- Variables 변경 시 반드시 style-dictionary 빌드 먼저 실행
  ```bash
  npx style-dictionary build
  ```
- 빌드 결과 `src/tokens/tokens.ts` 생성 확인 후 Storybook 작업 시작

---

## 4. Git 커밋 규칙

### 4-1. 브랜치 전략
```
main                               ← 배포 브랜치
└── feat/design-system-v[버전]     ← 작업 브랜치
```

### 4-2. 커밋 메시지 형식
```
feat(tokens): [변경 내용 요약]
feat(components): [변경 내용 요약]
docs(storybook): [변경 내용 요약]
docs(changelog): Release Notes v[버전] 업데이트
fix(figma): [수정 내용]
```

### 4-3. 커밋 순서 (반드시 준수)
```
1. tokens/ 변경사항
2. src/tokens/ 빌드 결과물
3. src/components/ 변경사항
4. src/stories/ 스토리 변경사항
5. CHANGELOG.md 업데이트
```

### 4-4. Push 전 체크리스트
```
□ style-dictionary 빌드 완료 확인
□ Storybook 로컬 실행 오류 없음 확인
□ 커밋 메시지 형식 준수 확인
```

---

## 5. Chromatic 배포 규칙

- Git push 완료 후 Chromatic 배포 실행
- 배포 명령어:
  ```bash
  npm run chromatic
  ```
- 배포 완료 후 Chromatic URL 보고
- Visual regression(시각적 변경)이 감지된 경우 변경 목록 함께 보고

---

## 6. Release Notes 작성 규칙

### 6-1. CHANGELOG.md 형식
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

### 6-2. Storybook ReleaseNotes.mdx 형식

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

### 6-3. 버전 관리 기준 (semver)
```
Major (1.0.0 → 2.0.0): 기존 토큰/컴포넌트 삭제 또는 breaking change
Minor (1.0.0 → 1.1.0): 신규 토큰/컴포넌트 추가
Patch (1.0.0 → 1.0.1): 버그 수정, 오타 수정
```

---

## 7. 앱 화면 제작 규칙 (Phase 6 — 선행 단계 완료 후 진행)

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

## 8. 오류 처리 규칙

- 오류 발생 시 임의로 넘어가지 않는다
- 오류 메시지 전문과 발생 단계를 보고한 뒤 지시를 기다린다
- 동일 오류 2회 이상 반복 시 대안 방법 제시 후 선택을 요청한다
- 작업 중간에 기존 파일/토큰을 삭제해야 하는 상황이 생기면
  반드시 사전 보고 후 승인을 받는다
