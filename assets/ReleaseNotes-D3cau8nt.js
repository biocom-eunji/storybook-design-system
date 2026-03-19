import{j as e,M as d}from"./blocks-CF6kqcnP.js";import{useMDXComponents as r}from"./index-ukDLHecn.js";import"./iframe-CExKz_YG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhQdN83S.js";import"./index-4WY5UODG.js";const n=()=>e.jsxs("span",{className:"caret",children:[e.jsx("svg",{className:"caret-right",width:"14",height:"14",viewBox:"0 0 256 256",fill:"none",children:e.jsx("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z",fill:"#989BA2"})}),e.jsx("svg",{className:"caret-down",width:"14",height:"14",viewBox:"0 0 256 256",fill:"none",children:e.jsx("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z",fill:"#989BA2"})})]}),a="?path=/docs/",s={BottomSheet:`${a}feedback-bottomsheet--docs`,ActionArea:`${a}navigation-actionarea--docs`,InputField:`${a}input-inputfield--docs`,Typography:`${a}design-tokens-typography--docs`,Button:`${a}general-button--docs`,TextButton:`${a}general-textbutton--docs`,Chip:`${a}input-chip--docs`,Icon:`${a}general-icon--docs`,Checkbox:`${a}input-checkbox--docs`,Radio:`${a}input-radio--docs`,Switch:`${a}input-switch--docs`,Toast:`${a}feedback-toast--docs`,Modal:`${a}feedback-modal--docs`,TabBar:`${a}navigation-tabbar--docs`,Badge:`${a}data-display-badge--docs`,Avatar:`${a}data-display-avatar--docs`,Divider:`${a}data-display-divider--docs`,ProgressBar:`${a}feedback-progressbar--docs`,Skeleton:`${a}feedback-skeleton--docs`,ColorPalette:`${a}design-tokens-color-palette--docs`,ColorTokens:`${a}design-tokens-color-tokens--docs`,NamingConv:`${a}getting-started-naming-convention--docs`,Intro:`${a}getting-started-introduction--docs`};function i(c){const l={p:"p",strong:"strong",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Getting Started/Release Notes"}),`
`,e.jsx("style",{children:`
  /* ── Base ── */
  .release-page {
    max-width: 900px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #37383C;
  }

  /* ── Page Header ── */
  .release-page h2.page-title {
    font-size: 28px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 8px;
    padding-bottom: 12px;
    border-bottom: 2px solid #22C3BC;
  }
  .release-page > p.page-desc {
    font-size: 14px;
    color: #70737C;
    margin: 0 0 32px;
    line-height: 1.7;
  }

  /* ── Stat Grid ── */
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin: 0 0 48px;
  }
  .stat-card {
    background: #F7F7F8;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
  }
  .stat-card .num {
    font-size: 28px;
    font-weight: 700;
    color: #22C3BC;
    margin: 0;
  }
  .stat-card .label {
    font-size: 12px;
    color: #70737C;
    margin: 4px 0 0;
  }

  /* ── Version Header ── */
  .version-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 20px;
  }
  .version-badge {
    display: inline-block;
    background: #22C3BC;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 16px;
    border-radius: 20px;
  }
  .version-badge.minor {
    background: #171719;
  }
  .version-date {
    font-size: 13px;
    color: #989BA2;
    font-weight: 500;
  }
  .version-divider {
    border: none;
    border-top: 1px solid #E1E2E4;
    margin: 48px 0 32px;
  }

  /* ── Toggle Card (details/summary) ── */
  .toggle-card {
    border: 1px solid #E1E2E4;
    border-radius: 12px;
    margin: 0 0 12px;
    overflow: hidden;
  }
  .toggle-card summary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 20px;
    background: #F7F7F8;
    cursor: pointer;
    list-style: none;
    user-select: none;
    transition: background 0.15s;
  }
  .toggle-card summary:hover {
    background: #EAEBEC;
  }
  .toggle-card summary::-webkit-details-marker {
    display: none;
  }
  .toggle-card summary .caret {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .toggle-card summary .caret .caret-right {
    display: block;
  }
  .toggle-card summary .caret .caret-down {
    display: none;
  }
  .toggle-card[open] summary .caret .caret-right {
    display: none;
  }
  .toggle-card[open] summary .caret .caret-down {
    display: block;
  }
  .toggle-card[open] summary {
    border-bottom: 1px solid #E1E2E4;
  }
  .toggle-card summary .emoji {
    font-size: 15px;
    flex-shrink: 0;
  }
  .toggle-card summary .title {
    font-size: 14px;
    font-weight: 700;
    color: #171719;
  }
  .toggle-card summary .count {
    font-size: 11px;
    font-weight: 600;
    color: #22C3BC;
    background: #E9FBF5;
    padding: 2px 8px;
    border-radius: 10px;
    margin-left: auto;
    flex-shrink: 0;
  }

  .toggle-body {
    padding: 16px 20px;
  }

  /* ── Component Tags ── */
  .component-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 0 0 12px;
  }
  .component-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 12px;
    background: #F4F4F5;
    color: #70737C;
  }
  .component-tag.new {
    background: #E9FBF5;
    color: #22C289;
  }
  .component-tag.updated {
    background: #EBF5FF;
    color: #3182F6;
  }

  /* ── Change Item (name + desc 2-col) ── */
  .change-item {
    display: flex;
    gap: 12px;
    padding: 8px 0;
    border-bottom: 1px solid #F4F4F5;
    font-size: 13px;
    line-height: 1.65;
  }
  .change-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  .change-item:first-child {
    padding-top: 0;
  }
  .change-item .name {
    min-width: 96px;
    flex-shrink: 0;
  }
  .change-item .name a {
    font-weight: 600;
    color: #22C3BC;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.15s;
  }
  .change-item .name a:hover {
    color: #17827D;
  }
  .change-item .name a:visited {
    color: #22C3BC;
  }
  .change-item .name-plain {
    font-weight: 600;
    color: #171719;
    white-space: nowrap;
    min-width: 96px;
    flex-shrink: 0;
  }
  .change-item .desc {
    color: #5A5C63;
  }
  .change-item code {
    background: #F4F4F5;
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 12px;
    color: #46474C;
  }

  /* ── Migration Block ── */
  .migration-block {
    margin: 8px 0 0;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #E1E2E4;
  }
  .migration-block .migration-row {
    display: flex;
  }
  .migration-block .migration-col {
    flex: 1;
    padding: 12px 16px;
  }
  .migration-block .migration-col:first-child {
    background: #FFF0F0;
    border-right: 1px solid #E1E2E4;
  }
  .migration-block .migration-col:last-child {
    background: #E9FBF5;
  }
  .migration-block .migration-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 6px;
  }
  .migration-block .migration-col:first-child .migration-label {
    color: #EF4452;
  }
  .migration-block .migration-col:last-child .migration-label {
    color: #22C289;
  }
  .migration-block pre {
    margin: 0;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 12px;
    line-height: 1.6;
    color: #37383C;
    white-space: pre-wrap;
    word-break: break-word;
  }

  /* ── Simple List ── */
  .simple-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .simple-list li {
    font-size: 13px;
    color: #5A5C63;
    line-height: 1.65;
    padding: 8px 0 8px 16px;
    position: relative;
    border-bottom: 1px solid #F4F4F5;
  }
  .simple-list li:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  .simple-list li:first-child {
    padding-top: 0;
  }
  .simple-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 15px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #C2C4C8;
  }
  .simple-list li:first-child::before {
    top: 7px;
  }
  .simple-list li code {
    background: #F4F4F5;
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 12px;
    color: #46474C;
  }
`}),`
`,`
`,`
`,e.jsxs("div",{className:"release-page",children:[e.jsx("h2",{className:"page-title",children:"Release Notes"}),e.jsx("p",{className:"page-desc",children:e.jsx(l.p,{children:"바이오컴 디자인 시스템의 변경 이력입니다. 카테고리를 클릭하면 상세 내역을 확인할 수 있습니다. 컴포넌트 이름을 클릭하면 해당 페이지로 이동합니다."})}),e.jsxs("div",{className:"stat-grid",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("p",{className:"num",children:"19"}),e.jsx("p",{className:"label",children:"컴포넌트"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("p",{className:"num",children:"74"}),e.jsx("p",{className:"label",children:"아이콘"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("p",{className:"num",children:"27"}),e.jsx("p",{className:"label",children:"시맨틱 토큰"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("p",{className:"num",children:"11"}),e.jsx("p",{className:"label",children:"텍스트 스타일"})]})]}),e.jsxs("div",{className:"version-header",children:[e.jsx("span",{className:"version-badge minor",children:"v1.2.0"}),e.jsx("span",{className:"version-date",children:"2026-03-19"})]}),e.jsxs("details",{className:"toggle-card",open:!0,children:[e.jsxs("summary",{children:[e.jsx(n,{}),e.jsx("span",{className:"emoji",children:"✨"}),e.jsx("span",{className:"title",children:"Features"}),e.jsx("span",{className:"count",children:"3"})]}),e.jsxs("div",{className:"toggle-body",children:[e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Grid Palette"}),e.jsx("span",{className:"desc",children:"4px 배수 원시 값 시각화 (막대 비교), 20px 컬럼 그리드 설명, Figma 그리드 단축키(macOS/Windows)"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Grid Tokens"}),e.jsx("span",{className:"desc",children:"Spacing/Component/Radius 카테고리별 시맨틱 토큰 매핑 표, Color Tokens와 동일한 4열 레이아웃, 클릭 복사"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Pretendard Variable"}),e.jsxs("span",{className:"desc",children:["웹폰트 전역 적용 — ",e.jsx("code",{children:"@font-face"})," 가변 폰트 선언(weight 100-900), 모든 컴포넌트에 자동 적용"]})]})]})]}),e.jsxs("details",{className:"toggle-card",children:[e.jsxs("summary",{children:[e.jsx(n,{}),e.jsx("span",{className:"emoji",children:"♻️"}),e.jsx("span",{className:"title",children:"Refactored"}),e.jsx("span",{className:"count",children:"8"})]}),e.jsxs("div",{className:"toggle-body",children:[e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Grid Palette 확장"}),e.jsx("span",{className:"desc",children:"컴포넌트 토큰에서 사용 중이나 Palette에 없던 4px 배수 값 7개 추가 (14/18/28/36/38/44/52px). Palette 10개 → 17개, Grid Tokens와 완전 1:1 매핑"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Grid Tokens 별칭 제거"}),e.jsxs("span",{className:"desc",children:["이중 표기(alias) 완전 제거, theme.ts 실제 키만 표시. ",e.jsx("code",{children:"SINGLE_LINE_HEIGHT"})," → ",e.jsx("code",{children:"spacing['4xlarge']"})," 토큰 참조로 통일"]})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"토큰 네이밍 통일"}),e.jsxs("span",{className:"desc",children:["문서의 camelCase 오기재를 theme.ts 실제 키(",e.jsx("code",{children:"spacing['2xlarge']"}),")와 동기화, Modal ",e.jsx("code",{children:"borderRadius: spacing.medium"})," → ",e.jsx("code",{children:"radius.medium"})]})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"하드코딩 제거"}),e.jsxs("span",{className:"desc",children:["TabBar/Chip/TextButton/ProgressBar의 하드코딩 px → 토큰 교체 (5건), ",e.jsx("code",{children:"palette.white"})," → ",e.jsx("code",{children:"coolNeutral[100]"})," 완전 전환 (12건)"]})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Grid Tokens"}),e.jsx("span",{className:"desc",children:"BaseRow 공통 컴포넌트 추출, SubHeader로 Button/Chip/ActionArea/InputField 서브 그룹 분리"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Shadow"}),e.jsx("span",{className:"desc",children:"Shadow & Elevation → Shadow로 이름 변경"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Spacing & Grid"}),e.jsx("span",{className:"desc",children:"페이지 삭제 — Grid Palette + Grid Tokens로 대체"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Button,children:"Button"})}),e.jsx("span",{className:"desc",children:"디자인 스펙 폰트 크기 → 폰트 스타일(Label 2, Body 2, Headline) 표기"})]})]})]}),e.jsx("hr",{className:"version-divider"}),e.jsxs("div",{className:"version-header",children:[e.jsx("span",{className:"version-badge minor",children:"v1.1.0"}),e.jsx("span",{className:"version-date",children:"2026-03-18"})]}),e.jsxs("details",{className:"toggle-card",open:!0,children:[e.jsxs("summary",{children:[e.jsx(n,{}),e.jsx("span",{className:"emoji",children:"🔧"}),e.jsx("span",{className:"title",children:"Enhanced"}),e.jsx("span",{className:"count",children:"6"})]}),e.jsxs("div",{className:"toggle-body",children:[e.jsxs("div",{className:"component-tags",children:[e.jsx("span",{className:"component-tag updated",children:"BottomSheet"}),e.jsx("span",{className:"component-tag updated",children:"ActionArea"}),e.jsx("span",{className:"component-tag updated",children:"InputField"}),e.jsx("span",{className:"component-tag updated",children:"Typography"}),e.jsx("span",{className:"component-tag updated",children:"Button"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.BottomSheet,children:"BottomSheet"})}),e.jsxs("span",{className:"desc",children:[e.jsx("code",{children:"position: absolute"})," → ",e.jsx("code",{children:"<Modal>"})," 전환, 300ms 슬라이드업 애니메이션, ",e.jsx("code",{children:"safeAreaBottom"})," prop으로 Safe Area 대응"]})]}),e.jsx("div",{className:"migration-block",children:e.jsxs("div",{className:"migration-row",children:[e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"AS-IS"}),e.jsx("pre",{children:`<View style={{ position: 'absolute' }}>
<Pressable style={styles.backdrop} />
<View style={styles.sheet}>
  {children}
</View>
</View>`})]}),e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"TO-BE"}),e.jsx("pre",{children:`<Modal visible={visible} transparent>
<Animated.View style={styles.backdrop} />
<Animated.View style={styles.sheet}>
  {children}
</Animated.View>
</Modal>`})]})]})}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ActionArea,children:"ActionArea"})}),e.jsxs("span",{className:"desc",children:[e.jsx("code",{children:"safeAreaBottom"})," prop 추가, Cancel/Tertiary 변형 제거 → 3가지(Strong/Neutral/Compact)로 간소화"]})]}),e.jsx("div",{className:"migration-block",children:e.jsxs("div",{className:"migration-row",children:[e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"AS-IS"}),e.jsx("pre",{children:`<ActionArea
variant="cancel"
primary={{ label: '삭제' }}
secondary={{ label: '취소' }}
tertiary={{ label: '임시 저장' }}
/>`})]}),e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"TO-BE"}),e.jsx("pre",{children:`<ActionArea
variant="neutral"
primary={{ label: '삭제' }}
secondary={{ label: '취소' }}
safeAreaBottom={insets.bottom}
/>`})]})]})}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.InputField,children:"InputField"})}),e.jsxs("span",{className:"desc",children:[e.jsx("code",{children:"keyboardType"}),", ",e.jsx("code",{children:"secureTextEntry"}),", ",e.jsx("code",{children:"autoCapitalize"})," 1급 props 승격, 키보드 타입별 데모 8종, KeyboardAvoidingView 가이드"]})]}),e.jsx("div",{className:"migration-block",children:e.jsxs("div",{className:"migration-row",children:[e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"AS-IS"}),e.jsx("pre",{children:`<InputField
label="이메일"
textInputProps={{
  keyboardType: 'email-address',
  autoCapitalize: 'none',
}}
/>`})]}),e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"TO-BE"}),e.jsx("pre",{children:`<InputField
label="이메일"
keyboardType="email-address"
autoCapitalize="none"
/>`})]})]})}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Typography,children:"Typography"})}),e.jsx("span",{className:"desc",children:"피그마 11개 시맨틱 텍스트 스타일 1:1 매칭, lineHeight/letterSpacing RN 절대 px 값으로 수정"})]}),e.jsx("div",{className:"migration-block",children:e.jsxs("div",{className:"migration-row",children:[e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"AS-IS"}),e.jsx("pre",{children:`<Text style={{
fontSize: fontSize.xlarge,
fontWeight: fontWeight.semibold,
lineHeight: lineHeight.xlarge,
}}>
소제목
</Text>`})]}),e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"TO-BE"}),e.jsx("pre",{children:`import { textStyle } from '../tokens/theme';

<Text style={textStyle.heading}>
소제목
</Text>`})]})]})}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Button,children:"Button"})}),e.jsxs("span",{className:"desc",children:["Cancel 변형 보조 버튼 ",e.jsx("code",{children:"solid"})," → ",e.jsx("code",{children:"outlined"})," 통일"]})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"SpecTable"}),e.jsx("span",{className:"desc",children:"셀 겹침 수정 — 셀 간 gap 추가, flexShrink 적용, 최소 폭 700px 확보"})]})]})]}),e.jsxs("details",{className:"toggle-card",children:[e.jsxs("summary",{children:[e.jsx(n,{}),e.jsx("span",{className:"emoji",children:"♻️"}),e.jsx("span",{className:"title",children:"Refactored"}),e.jsx("span",{className:"count",children:"9"})]}),e.jsxs("div",{className:"toggle-body",children:[e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ColorTokens,children:"Color Tokens"})}),e.jsxs("span",{className:"desc",children:["Role Primitives(",e.jsx("code",{children:"_surface"}),", ",e.jsx("code",{children:"_content"}),", ",e.jsx("code",{children:"_line"}),", ",e.jsx("code",{children:"_role"}),") 도입으로 다크모드 확장 대비. 토큰 38개 → 27개 정리"]})]}),e.jsx("div",{className:"migration-block",children:e.jsxs("div",{className:"migration-row",children:[e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"AS-IS (38개, 직접 참조)"}),e.jsx("pre",{children:`textError: red[70],
borderError: red[70],
iconError: red[70],
statusError: red[70],
// 같은 값을 4곳에서 중복 정의`})]}),e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"TO-BE (27개, 역할 프리미티브)"}),e.jsx("pre",{children:`const _role = { error: red[70] };

textError: _role.error,
borderError: _role.error,
iconError: _role.error,
// 단일 소스 → 다크모드 시 _role만 교체`})]})]})}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ColorPalette,children:"Color Palette"})}),e.jsxs("span",{className:"desc",children:[e.jsx("code",{children:"neutral"})," 팔레트 삭제, ",e.jsx("code",{children:"coolNeutral"})," 단일 무채색 통합, ",e.jsx("code",{children:"coolNeutral[100]"})," #FFFFFF 추가"]})]}),e.jsx("div",{className:"migration-block",children:e.jsxs("div",{className:"migration-row",children:[e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"AS-IS"}),e.jsx("pre",{children:`import { neutral, coolNeutral } from '../tokens/theme';
neutral[50]      // #737373`})]}),e.jsxs("div",{className:"migration-col",children:[e.jsx("p",{className:"migration-label",children:"TO-BE"}),e.jsx("pre",{children:`import { coolNeutral } from '../tokens/theme';
coolNeutral[50]  // #70737C
// neutral 삭제됨`})]})]})}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"시맨틱 토큰 병합"}),e.jsxs("span",{className:"desc",children:[e.jsx("code",{children:"textTertiary+Placeholder"}),", ",e.jsx("code",{children:"borderDefault+Disabled"}),", ",e.jsx("code",{children:"borderFocus+Brand"}),", ",e.jsx("code",{children:"statusSuccess+Info"})," 통합. ",e.jsx("code",{children:"backgroundError/Success/Warning"})," → ",e.jsx("code",{children:"backgroundStatus"}),". ",e.jsx("code",{children:"backgroundBrandDisabled"}),"/Status 섹션 삭제"]})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.InputField,children:"InputField"})}),e.jsxs("span",{className:"desc",children:["매직넘버 → 토큰, 인라인 → StyleSheet, 아이콘 4개 → ",e.jsx("code",{children:"TRAILING_ICON_MAP"}),", 중복 함수 추출"]})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Button,children:"Button"})}),e.jsxs("span",{className:"desc",children:["정적 스타일 StyleSheet 분리, ",e.jsx("code",{children:"contentColor"})," 변수 추출"]})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ActionArea,children:"ActionArea"})}),e.jsxs("span",{className:"desc",children:[e.jsx("code",{children:"ButtonRow"})," 공통 컴포넌트 추출, ",e.jsx("code",{children:"ActionButtonProps"})," 타입 추출"]})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"theme.ts"}),e.jsxs("span",{className:"desc",children:[e.jsx("code",{children:"fontWeight"}),"에 ",e.jsx("code",{children:"as const"}),", ",e.jsx("code",{children:"palette.white"})," → ",e.jsx("code",{children:"coolNeutral[100]"})," 전환"]})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"접근성 (16/18)"}),e.jsxs("span",{className:"desc",children:["Button/TextButton/Chip/Toast/Modal/BottomSheet/Badge/Avatar/ProgressBar/Divider에 ",e.jsx("code",{children:"accessibilityRole"}),", ",e.jsx("code",{children:"accessibilityState"}),", ",e.jsx("code",{children:"accessibilityLabel"}),", ",e.jsx("code",{children:"accessibilityValue"})," 추가. Checkbox 매직넘버 → 토큰 교체"]})]})]})]}),e.jsxs("details",{className:"toggle-card",children:[e.jsxs("summary",{children:[e.jsx(n,{}),e.jsx("span",{className:"emoji",children:"📝"}),e.jsx("span",{className:"title",children:"Docs"}),e.jsx("span",{className:"count",children:"6"})]}),e.jsxs("div",{className:"toggle-body",children:[e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ColorPalette,children:"Color Palette"})}),e.jsx("span",{className:"desc",children:"Neutral+Cool Neutral → Mono 통합, 섹션명 정리 (Brand/Semantic/Extended), Orange 포인트·Purple 업셀링 설명 변경, coolNeutral100 추가"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ColorTokens,children:"Color Tokens"})}),e.jsx("span",{className:"desc",children:"제목 변경, Usage 맨 밑 이동, Value에 팔레트명 표기(coolNeutral17, mint45 등), 토큰 수 27개 반영"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.NamingConv,children:"Naming Conv."})}),e.jsx("span",{className:"desc",children:"Quick Reference 상단 이동, 헬퍼 추출(34% 코드 감소), 테이블 하단 테두리 추가"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Design Tokens"}),e.jsx("span",{className:"desc",children:"전체 Usage 섹션 스타일/레이아웃 통일 (민트 그라데이션, usage-card 패턴)"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Release Notes"}),e.jsx("span",{className:"desc",children:"caret SVG 토글, 컴포넌트 하이퍼링크, AS-IS/TO-BE 마이그레이션 스니펫"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"CHANGELOG"}),e.jsx("span",{className:"desc",children:"v1.1.0 변경 이력 동기화"})]})]})]}),e.jsxs("details",{className:"toggle-card",children:[e.jsxs("summary",{children:[e.jsx(n,{}),e.jsx("span",{className:"emoji",children:"🔧"}),e.jsx("span",{className:"title",children:"Infra"}),e.jsx("span",{className:"count",children:"2"})]}),e.jsxs("div",{className:"toggle-body",children:[e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Chromatic"}),e.jsx("span",{className:"desc",children:"Chromatic 설치 및 연동, 시각적 회귀 테스트 환경 구축"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"Deploy Script"}),e.jsxs("span",{className:"desc",children:[e.jsx("code",{children:"npm run deploy"})," 통합 스크립트 추가 (GitHub Pages + Chromatic 동시 배포)"]})]})]})]}),e.jsx("hr",{className:"version-divider"}),e.jsxs("div",{className:"version-header",children:[e.jsx("span",{className:"version-badge",children:"v1.0.0"}),e.jsx("span",{className:"version-date",children:"2026-03-17"})]}),e.jsxs("details",{className:"toggle-card",children:[e.jsxs("summary",{children:[e.jsx(n,{}),e.jsx("span",{className:"emoji",children:"✨"}),e.jsx("span",{className:"title",children:"Features"}),e.jsx("span",{className:"count",children:"19"})]}),e.jsxs("div",{className:"toggle-body",children:[e.jsxs("div",{className:"component-tags",children:[e.jsx("span",{className:"component-tag new",children:"Button"}),e.jsx("span",{className:"component-tag new",children:"TextButton"}),e.jsx("span",{className:"component-tag new",children:"Chip"}),e.jsx("span",{className:"component-tag new",children:"Icon"}),e.jsx("span",{className:"component-tag new",children:"InputField"}),e.jsx("span",{className:"component-tag new",children:"Checkbox"}),e.jsx("span",{className:"component-tag new",children:"CheckMark"}),e.jsx("span",{className:"component-tag new",children:"Radio"}),e.jsx("span",{className:"component-tag new",children:"Switch"}),e.jsx("span",{className:"component-tag new",children:"Toast"}),e.jsx("span",{className:"component-tag new",children:"Modal"}),e.jsx("span",{className:"component-tag new",children:"BottomSheet"}),e.jsx("span",{className:"component-tag new",children:"TabBar"}),e.jsx("span",{className:"component-tag new",children:"ActionArea"}),e.jsx("span",{className:"component-tag new",children:"Badge"}),e.jsx("span",{className:"component-tag new",children:"Avatar"}),e.jsx("span",{className:"component-tag new",children:"Divider"}),e.jsx("span",{className:"component-tag new",children:"ProgressBar"}),e.jsx("span",{className:"component-tag new",children:"Skeleton"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Button,children:"Button"})}),e.jsx("span",{className:"desc",children:"Solid/Outlined 변형, Primary/Assistive 컬러, S/M/L 3단계 크기, 로딩 상태 지원"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.TextButton,children:"TextButton"})}),e.jsx("span",{className:"desc",children:"배경 없는 텍스트 전용 버튼, 밑줄 스타일, 아이콘 조합 지원"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Chip,children:"Chip"})}),e.jsx("span",{className:"desc",children:"Solid/Outlined 변형, XS/S/M/L 4단계 크기, 활성/비활성/비활성화 상태"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Icon,children:"Icon"})}),e.jsx("span",{className:"desc",children:"Normal(43개), Color(12개), Circle(12개), Mini(7개) 총 74개 아이콘, 검색 및 클릭 복사"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.InputField,children:"InputField"})}),e.jsx("span",{className:"desc",children:"4가지 상태(비활성/입력됨/포커스/에러), 글자 수 카운터, 후행 아이콘/텍스트 조합"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Checkbox,children:"Checkbox"})}),e.jsx("span",{className:"desc",children:"미선택/선택/부분선택 3가지 상태, 부모-자식 연동 패턴"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Checkbox,children:"CheckMark"})}),e.jsx("span",{className:"desc",children:"체크 아이콘만 사용하는 간결한 선택 컴포넌트"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Radio,children:"Radio"})}),e.jsx("span",{className:"desc",children:"라디오 그룹 패턴, 라벨/보조라벨/Tight 모드 지원"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Switch,children:"Switch"})}),e.jsx("span",{className:"desc",children:"iOS/Normal 플랫폼별 디자인, S/M 크기"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Toast,children:"Toast"})}),e.jsx("span",{className:"desc",children:"성공/경고/에러 3가지 변형, 자동 닫힘, 액션 버튼 지원"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Modal,children:"Modal"})}),e.jsx("span",{className:"desc",children:"확인 대화상자, 위험 액션(빨간 버튼), 커스텀 콘텐츠"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.BottomSheet,children:"BottomSheet"})}),e.jsx("span",{className:"desc",children:"하단 시트, 드래그 핸들바, 닫기 버튼 옵션"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.TabBar,children:"TabBar"})}),e.jsx("span",{className:"desc",children:"바이오컴 기본 5탭(콘텐츠/목표/메인/AI/쇼핑), 아이콘 연동"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ActionArea,children:"ActionArea"})}),e.jsx("span",{className:"desc",children:"화면 하단 액션 영역, Strong/Neutral/Compact 3가지 변형"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Badge,children:"Badge"})}),e.jsx("span",{className:"desc",children:"숫자/상태 배지, Filled/Outlined/Dot 변형"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Avatar,children:"Avatar"})}),e.jsx("span",{className:"desc",children:"프로필 이미지, 이니셜 폴백, 온라인 상태 표시"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Divider,children:"Divider"})}),e.jsx("span",{className:"desc",children:"수평/수직 구분선, 두께/색상/인셋 커스텀"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ProgressBar,children:"ProgressBar"})}),e.jsx("span",{className:"desc",children:"수평 진행률 표시, 3단계 크기, 4가지 컬러"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Skeleton,children:"Skeleton"})}),e.jsx("span",{className:"desc",children:"로딩 플레이스홀더, 텍스트/원형/사각형 변형, 시머 애니메이션"})]})]})]}),e.jsxs("details",{className:"toggle-card",children:[e.jsxs("summary",{children:[e.jsx(n,{}),e.jsx("span",{className:"emoji",children:"🎨"}),e.jsx("span",{className:"title",children:"Design System"}),e.jsx("span",{className:"count",children:"11"})]}),e.jsxs("div",{className:"toggle-body",children:[e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ColorPalette,children:"컬러 팔레트"})}),e.jsx("span",{className:"desc",children:"13종 색상 카테고리, 단계별 HEX 코드 정의"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ColorTokens,children:"시맨틱 토큰"})}),e.jsx("span",{className:"desc",children:"Text/Background/Border/Icon/Status 38개 역할 기반 토큰 구축"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Typography,children:"타이포그래피"})}),e.jsx("span",{className:"desc",children:"Pretendard Variable 기반 11개 텍스트 위계 정의"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"스페이싱/반경"}),e.jsx("span",{className:"desc",children:"xsmall(4)~4xlarge(48) 스페이싱, xsmall(4)~full(9999) 반경 토큰"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"인터랙션"}),e.jsx("span",{className:"desc",children:"pressOpacity, overlayOpacity 공통 상수 추가"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"컴포넌트 토큰"}),e.jsx("span",{className:"desc",children:"Button, TextButton, Chip, ActionArea 별 크기/컬러/변형 토큰"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.NamingConv,children:"네이밍 컨벤션"})}),e.jsx("span",{className:"desc",children:"5가지 원칙, 4개 카테고리별 Do/Don't 규칙 수립"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"토큰 리네이밍"}),e.jsx("span",{className:"desc",children:"축약형(xs, sm) → 전체 단어(xsmall, small) 전체 통일"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"에러 색상"}),e.jsx("span",{className:"desc",children:"Red[70] (#EF7676) 통일"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"팔레트 리네이밍"}),e.jsx("span",{className:"desc",children:"Orange → Yellow, RedOrange → Orange"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"브랜드 테마"}),e.jsx("span",{className:"desc",children:"사이드바/도구바 민트 색상(#22C3BC) 적용"})]})]})]}),e.jsxs("details",{className:"toggle-card",children:[e.jsxs("summary",{children:[e.jsx(n,{}),e.jsx("span",{className:"emoji",children:"🐛"}),e.jsx("span",{className:"title",children:"Fixes"}),e.jsx("span",{className:"count",children:"10"})]}),e.jsx("div",{className:"toggle-body",children:e.jsxs("ul",{className:"simple-list",children:[e.jsx("li",{children:"GitHub Pages 배포 시 모듈 로드 실패 오류 해결"}),e.jsxs("li",{children:["Jekyll ",e.jsx("code",{children:"_"})," 접두사 파일 무시 문제 해결"]}),e.jsxs("li",{children:[e.jsx("code",{children:e.jsx(l.strong,{children:"DEV"})})," 미정의 오류 해결"]}),e.jsx("li",{children:"Typography 다운로드 버튼 텍스트 색상 수정"}),e.jsx("li",{children:"InputField 포커스 시 브라우저 기본 파란 outline 제거"}),e.jsx("li",{children:"InputField 글자 수 카운터 실시간 업데이트 및 초과 시 에러색 전환"}),e.jsx("li",{children:"Chip/Badge 가로 크기 hug contents 동작으로 수정"}),e.jsx("li",{children:"SVG 직접 그리기 코드를 Icon 컴포넌트로 통일"}),e.jsx("li",{children:"하드코딩된 색상값을 디자인 토큰으로 전체 교체"}),e.jsx("li",{children:"미사용 import 정리"})]})})]}),e.jsxs("details",{className:"toggle-card",children:[e.jsxs("summary",{children:[e.jsx(n,{}),e.jsx("span",{className:"emoji",children:"📝"}),e.jsx("span",{className:"title",children:"Docs"}),e.jsx("span",{className:"count",children:"9"})]}),e.jsxs("div",{className:"toggle-body",children:[e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Intro,children:"Introduction"})}),e.jsx("span",{className:"desc",children:"디자인 시스템 철학, 비전, 목표"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ColorPalette,children:"Color Palette"})}),e.jsx("span",{className:"desc",children:"13종 팔레트 HEX 코드, 클릭 복사"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.ColorTokens,children:"Color Tokens"})}),e.jsx("span",{className:"desc",children:"38개 시맨틱 토큰, 팔레트 출처 태그, 클릭 복사"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.Typography,children:"Typography"})}),e.jsx("span",{className:"desc",children:"11개 텍스트 스펙 표, 미리보기, 폰트 다운로드 링크"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name",children:e.jsx("a",{href:s.NamingConv,children:"Naming Conv."})}),e.jsx("span",{className:"desc",children:"5가지 원칙, Do/Don't 규칙표"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"스토리 구조"}),e.jsx("span",{className:"desc",children:"모든 컴포넌트를 Playground / 모든 변형 / 디자인 스펙 / 사용 가이드 패턴으로 통일"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"사이드바"}),e.jsx("span",{className:"desc",children:"Getting Started → Design Tokens → General → Input → Feedback → Navigation → Data Display 정리"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"접근성"}),e.jsx("span",{className:"desc",children:"6개 컴포넌트에 accessibilityRole, accessibilityState props 추가"})]}),e.jsxs("div",{className:"change-item",children:[e.jsx("span",{className:"name-plain",children:"JSDoc"}),e.jsx("span",{className:"desc",children:"12개 컴포넌트 인터페이스에 한글 설명 추가"})]})]})]})]})]})}function j(c={}){const{wrapper:l}={...r(),...c.components};return l?e.jsx(l,{...c,children:e.jsx(i,{...c})}):i(c)}export{n as CaretIcon,s as LINK,a as SB,j as default};
