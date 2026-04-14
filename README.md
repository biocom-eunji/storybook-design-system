# Biocom Design System

React Native 기반 모바일 앱 디자인 시스템입니다. Storybook으로 컴포넌트를 문서화하고, Chromatic으로 시각적 회귀 테스트를 수행합니다.

## 주요 구성

- **19개 컴포넌트** — Button, InputField, Checkbox, Radio, Switch, Chip, Modal, BottomSheet, Toast 등
- **74개 아이콘** — 4개 카테고리 (Action, Navigation, Status, Content)
- **디자인 토큰** — 27개 시맨틱 컬러 + 17개 Grid 토큰
- **접근성** — 16/18 컴포넌트 WCAG 대응
- **웹폰트** — Pretendard Variable 적용

## 시작하기

```bash
# 의존성 설치
npm install

# Storybook 로컬 실행 (http://localhost:6006)
npm run storybook

# Storybook 빌드
npm run build-storybook

# 테스트 실행
npx vitest run

# Expo 앱 실행
npm start
```

## 배포

```bash
# GitHub Pages + Chromatic 동시 배포
npm run deploy

# 개별 배포
npm run deploy:pages      # GitHub Pages만
npm run deploy:chromatic   # Chromatic만
```

## 라이브 데모

- **Storybook**: [GitHub Pages](https://biocom-eunji.github.io/storybook-design-system)
- **Visual Review**: [Chromatic](https://www.chromatic.com/library?appId=storybook-design-system)

## 프로젝트 구조

```
src/
├── components/    # React Native 컴포넌트 (Button, InputField, ...)
├── tokens/        # 디자인 토큰 (theme.ts, colors.ts, ...)
stories/           # Storybook 스토리 + MDX 문서
.storybook/        # Storybook 설정
.github/workflows/ # CI 자동화
```

## 기술 스택

| 영역 | 기술 |
|---|---|
| UI | React Native + react-native-web |
| 문서 | Storybook 10 |
| 테스트 | Vitest |
| 시각 회귀 | Chromatic |
| 배포 | GitHub Pages |
| 폰트 | Pretendard Variable |

## 기여 방법

1. 이슈 또는 기능 요청 생성
2. 브랜치 생성 (`feat/component-name` 또는 `fix/issue-description`)
3. 변경사항 커밋 후 PR 생성
4. Chromatic 시각 리뷰 통과 확인
5. 코드 리뷰 후 머지
