# Changelog

바이오컴 디자인 시스템의 변경 이력입니다.

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

- **neutral 팔레트 삭제** — `neutral` 14단계 완전 제거, `coolNeutral` 단일 무채색 팔레트로 통합
- **InputField** — 매직넘버 → 토큰, 인라인 스타일 → StyleSheet, 아이콘 4개 → `TRAILING_ICON_MAP` 통합, 중복 렌더 함수 추출, 미사용 import 제거
- **Button** — 정적 스타일 StyleSheet 분리, `contentColor` 변수 추출
- **ActionArea** — `ButtonRow` 공통 컴포넌트 추출, `ActionButtonProps` 타입 추출로 중복 제거
- **theme.ts** — `fontWeight`에 `as const` 추가하여 타입 리터럴 추론 개선

### 📝 Docs

- **Release Notes** — v1.1.0 이력 추가, 토글(details/summary) 재설계, caret SVG 아이콘, 컴포넌트 하이퍼링크, AS-IS/TO-BE 마이그레이션 스니펫
- **Color Palette** — Neutral + Cool Neutral → Mono 통합, 섹션명 정리 (Brand, Semantic, Extended)
- **Color Tokens** — 페이지 제목 `Semantic Color Tokens` → `Color Tokens` 변경, Usage 맨 밑 이동
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
