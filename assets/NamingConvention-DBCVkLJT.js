import{j as e,M as a}from"./blocks-CF6kqcnP.js";import{useMDXComponents as t}from"./index-ukDLHecn.js";import"./iframe-CExKz_YG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhQdN83S.js";import"./index-4WY5UODG.js";const l=()=>e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"18%"},children:"항목"}),e.jsx("th",{style:{width:"34%"},children:"규칙"}),e.jsx("th",{children:"Do / Don't"})]})}),i=({children:r})=>e.jsxs("div",{className:"do-dont",children:[e.jsx("span",{className:"do-tag do",children:"DO"}),r]}),n=({children:r})=>e.jsxs("div",{className:"do-dont",children:[e.jsx("span",{className:"do-tag dont",children:"DON'T"}),r]}),s=({children:r})=>e.jsx("code",{className:"do-example",children:r});function d(r){const c={h3:"h3",h4:"h4",p:"p",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Getting Started/Naming Convention"}),`
`,e.jsx("style",{children:`
  .naming-page {
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 64px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #37383C;
    overflow: visible !important;
  }
  /* Storybook Docs 부모 overflow 해제 */
  .sbdocs-wrapper,
  .sbdocs-content,
  .docs-story {
    overflow: visible !important;
  }

  /* ── Page Header ── */
  .naming-page h2.page-title {
    font-size: 28px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 8px;
    padding-bottom: 12px;
    border-bottom: 2px solid #22C3BC;
  }
  .naming-page > p.page-desc {
    font-size: 14px;
    color: #70737C;
    margin: 0 0 24px;
    line-height: 1.7;
  }

  /* ── Quick Reference ── */
  .summary-box {
    background: linear-gradient(135deg, #FBFEFE 0%, #E9FBFA 100%);
    border: 1px solid #D4F7F6;
    border-radius: 12px;
    padding: 24px 28px;
    margin: 0 0 40px;
  }
  .summary-box .title {
    font-size: 15px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 12px;
  }
  .summary-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .summary-list li {
    font-size: 13px;
    color: #46474C;
    line-height: 1.8;
    padding-left: 18px;
    position: relative;
  }
  .summary-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #22C3BC;
    font-weight: 700;
  }
  .summary-list li code {
    background: #F4F4F5;
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 12px;
  }

  /* ── Section Headings ── */
  .naming-page h3 {
    font-size: 18px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 6px;
  }
  .naming-page h3 + p {
    font-size: 13px;
    color: #70737C;
    margin: 0 0 16px;
    line-height: 1.6;
  }
  .naming-page h4 {
    font-size: 14px;
    font-weight: 700;
    color: #37383C;
    margin: 28px 0 12px;
  }
  .naming-page h4:first-of-type {
    margin-top: 0;
  }

  /* ── Divider ── */
  .section-divider {
    border: none;
    border-top: 1px solid #E1E2E4;
    margin: 36px 0;
  }

  /* ── Principle Grid ── */
  .principle-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 0 0 0;
  }
  .principle-grid .full {
    grid-column: 1 / -1;
  }
  .principle-card {
    background: #F7F7F8;
    border-radius: 10px;
    padding: 20px;
    border-left: 3px solid #22C3BC;
  }
  .principle-card .num {
    font-size: 11px;
    font-weight: 700;
    color: #22C3BC;
    letter-spacing: 0.5px;
    margin: 0 0 6px;
  }
  .principle-card .title {
    font-size: 14px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 4px;
  }
  .principle-card .desc {
    font-size: 13px;
    color: #5A5C63;
    line-height: 1.6;
    margin: 0;
  }
  .principle-card .desc code {
    background: #EAEBEC;
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 12px;
  }

  /* ── Table ── */
  .naming-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 0 0 0;
    overflow: visible !important;
    border-bottom: 2px solid #171719;
  }
  .naming-table thead {
    border-bottom: 2px solid #171719;
  }
  .naming-table th {
    text-align: left;
    padding: 8px 12px;
    font-weight: 600;
    color: #46474C;
    font-size: 12px;
  }
  .naming-table td {
    padding: 12px;
    border-bottom: 1px solid #E1E2E4;
    color: #37383C;
    vertical-align: top;
    line-height: 1.5;
  }
  .naming-table tr:last-child td {
    border-bottom: none;
    padding-bottom: 16px;
  }
  .naming-table .category {
    font-weight: 600;
    color: #171719;
    white-space: nowrap;
  }

  /* ── Do / Don't ── */
  .do-dont {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin: 3px 0;
  }
  .do-tag {
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .do-tag.do {
    background: #E9FBF5;
    color: #22C289;
  }
  .do-tag.dont {
    background: #FCE8E8;
    color: #EF7676;
  }
  .do-example {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 12px;
    color: #37383C;
    padding: 2px 8px;
    background: #F4F4F5;
    border-radius: 4px;
  }
`}),`
`,`
`,`
`,`
`,`
`,e.jsxs("div",{className:"naming-page",children:[e.jsx("h2",{className:"page-title",children:"Naming Convention"}),e.jsx("p",{className:"page-desc",children:e.jsxs(c.p,{children:["네이밍 규칙은 기획자·디자이너·개발자 사이의 ",e.jsx("strong",{children:"공식적인 약속"}),`입니다.
일관된 명명법은 커뮤니케이션 비용을 줄이고, 컴포넌트의 역할을 코드만 보고도 즉시 파악할 수 있게 합니다.
이 가이드는 바이오컴 디자인 시스템의 모든 산출물(피그마, 코드, 문서)에 동일하게 적용됩니다.`]})}),e.jsxs("div",{className:"summary-box",children:[e.jsx("p",{className:"title",children:"Quick Reference"}),e.jsxs("ul",{className:"summary-list",children:[e.jsxs("li",{children:["컴포넌트 · 파일: ",e.jsx("strong",{children:"PascalCase"})," — ",e.jsx("code",{children:"Button.tsx"}),", ",e.jsx("code",{children:"InputField"})]}),e.jsxs("li",{children:["변수 · 토큰 · 유틸: ",e.jsx("strong",{children:"camelCase"})," — ",e.jsx("code",{children:"buttonToken"}),", ",e.jsx("code",{children:"semanticColor.textPrimary"})]}),e.jsxs("li",{children:["아이콘 이름: ",e.jsx("strong",{children:"kebab-case"})," — ",e.jsx("code",{children:"check-circle"}),", ",e.jsx("code",{children:"shopping-cart-simple"})]}),e.jsxs("li",{children:["색상 토큰: ",e.jsx("strong",{children:"카테고리 + 역할"})," — ",e.jsx("code",{children:"text"})," + ",e.jsx("code",{children:"Primary"})," = ",e.jsx("code",{children:"textPrimary"})]}),e.jsx("li",{children:"시각적 속성(색상명, 크기값)을 이름에 포함하지 않음"}),e.jsxs("li",{children:["그리드 토큰: ",e.jsx("strong",{children:"camelCase"})," — ",e.jsx("code",{children:"spacing['2xlarge']"}),", ",e.jsx("code",{children:"screenMargin.default"}),", ",e.jsx("code",{children:"buttonToken.size.medium.height"})]}),e.jsxs("li",{children:["줄임말 대신 전체 단어 사용 — ",e.jsx("code",{children:"background"})," not ",e.jsx("code",{children:"bg"})]}),e.jsxs("li",{children:["샘플 아이콘 슬롯에는 ",e.jsx("code",{children:'<Icon name="null" />'})," 사용"]})]})]}),e.jsx(c.h3,{id:"핵심-원칙",children:"핵심 원칙"}),e.jsx("p",{children:"모든 네이밍은 아래 5가지 원칙을 따릅니다."}),e.jsxs("div",{className:"principle-grid",children:[e.jsxs("div",{className:"principle-card",children:[e.jsx("p",{className:"num",children:"PRINCIPLE 01"}),e.jsx("p",{className:"title",children:"논리적 구조"}),e.jsx("p",{className:"desc",children:"예측 가능하고 변경 가능성이 적은 일관된 명명법을 사용합니다. 이름만으로 해당 요소의 계층과 역할을 유추할 수 있어야 합니다."})]}),e.jsxs("div",{className:"principle-card",children:[e.jsx("p",{className:"num",children:"PRINCIPLE 02"}),e.jsx("p",{className:"title",children:"시각적 속성 배제"}),e.jsx("p",{className:"desc",children:"'파란 버튼', '빨간 텍스트'처럼 시각적 속성을 이름에 포함하지 않습니다. 대신 기능적 역할(Primary, Error)을 기반으로 정의합니다."})]}),e.jsxs("div",{className:"principle-card",children:[e.jsx("p",{className:"num",children:"PRINCIPLE 03"}),e.jsx("p",{className:"title",children:"확장 가능성"}),e.jsx("p",{className:"desc",children:"새로운 변형이 추가될 것을 고려한 구조를 사용합니다. Primary/Secondary 패턴으로 시작하면 Tertiary 추가가 자연스럽습니다."})]}),e.jsxs("div",{className:"principle-card",children:[e.jsx("p",{className:"num",children:"PRINCIPLE 04"}),e.jsx("p",{className:"title",children:"일관성"}),e.jsx("p",{className:"desc",children:"하이픈(-)은 단어 연결에, 카멜케이스(camelCase)는 코드 변수에 사용합니다. 팀 전체가 동일한 규칙을 공유합니다."})]}),e.jsxs("div",{className:"principle-card full",children:[e.jsx("p",{className:"num",children:"PRINCIPLE 05"}),e.jsx("p",{className:"title",children:"명확성"}),e.jsxs("p",{className:"desc",children:["줄임말 대신 전체 단어를 사용합니다. ",e.jsx("code",{children:"bg"})," 대신 ",e.jsx("code",{children:"background"}),", ",e.jsx("code",{children:"xs"})," 대신 ",e.jsx("code",{children:"xsmall"}),"을 사용하여 누구나 의미를 즉시 파악할 수 있게 합니다."]})]})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(c.h3,{id:"상세-규칙",children:"상세 규칙"}),e.jsx("p",{children:"각 카테고리별 네이밍 규칙과 Do/Don't 예시입니다."}),e.jsx(c.h4,{id:"1-컴포넌트",children:"1. 컴포넌트"}),e.jsxs("table",{className:"naming-table",children:[e.jsx(l,{}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"컴포넌트 이름"}),e.jsx("td",{children:"PascalCase 사용. 역할 기반 이름으로, 시각적 속성을 포함하지 않음."}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"Button"}),e.jsx(s,{children:"InputField"}),e.jsx(s,{children:"ActionArea"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"GreenButton"}),e.jsx(s,{children:"BigInput"}),e.jsx(s,{children:"BottomButtons"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"Variant"}),e.jsx("td",{children:"소문자 camelCase. 기능적 역할을 나타내는 단어 사용."}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"solid"}),e.jsx(s,{children:"outlined"}),e.jsx(s,{children:"primary"}),e.jsx(s,{children:"assistive"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"green"}),e.jsx(s,{children:"type1"}),e.jsx(s,{children:"v2"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"Size"}),e.jsx("td",{children:"전체 단어 사용. 축약형 쓰지 않음."}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"small"}),e.jsx(s,{children:"medium"}),e.jsx(s,{children:"large"}),e.jsx(s,{children:"xsmall"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"sm"}),e.jsx(s,{children:"md"}),e.jsx(s,{children:"lg"}),e.jsx(s,{children:"xs"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"State"}),e.jsx("td",{children:"형용사 또는 과거분사 형태. Boolean prop으로 표현."}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"disabled"}),e.jsx(s,{children:"active"}),e.jsx(s,{children:"checked"}),e.jsx(s,{children:"loading"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"isDisable"}),e.jsx(s,{children:"setActive"}),e.jsx(s,{children:"statusChecked"})]})]})]})]})]}),e.jsx(c.h4,{id:"2-토큰--변수",children:"2. 토큰 · 변수"}),e.jsxs("table",{className:"naming-table",children:[e.jsx(l,{}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"색상 토큰"}),e.jsxs("td",{children:["camelCase. ",e.jsx("code",{children:"카테고리 + 역할"})," 패턴. 색상명이 아닌 의미 기반."]}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"textPrimary"}),e.jsx(s,{children:"backgroundBrand"}),e.jsx(s,{children:"borderError"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"mintColor"}),e.jsx(s,{children:"darkGray"}),e.jsx(s,{children:"red_border"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"팔레트 변수"}),e.jsxs("td",{children:["camelCase + 숫자 단계. ",e.jsx("code",{children:"색상명[단계]"})," 형태."]}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"coolNeutral[17]"}),e.jsx(s,{children:"mint[45]"}),e.jsx(s,{children:"red[70]"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"gray900"}),e.jsx(s,{children:"MINT_PRIMARY"}),e.jsx(s,{children:"color-red-1"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"스페이싱 · 반경"}),e.jsx("td",{children:"camelCase. 티셔츠 사이즈 패턴. 전체 단어, 숫자 접두사는 영문으로."}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"spacing.small"}),e.jsx(s,{children:"spacing['2xlarge']"}),e.jsx(s,{children:"radius.medium"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"spacing8"}),e.jsx(s,{children:"spacing['2xlarge']"}),e.jsx(s,{children:"RADIUS_12"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"그리드 토큰"}),e.jsxs("td",{children:["camelCase. ",e.jsx("code",{children:"객체.속성"})," 패턴. 소문자로 시작."]}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"screenMargin.default"}),e.jsx(s,{children:"buttonToken.size.medium.height"}),e.jsx(s,{children:"actionAreaToken.gap"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"InputField.minHeight"}),e.jsx(s,{children:"SCREEN_MARGIN"}),e.jsx(s,{children:"action-area-gap"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"컴포넌트 토큰"}),e.jsxs("td",{children:[e.jsx("code",{children:"컴포넌트명 + Token"})," 접미사. 내부는 size/color/variant."]}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"buttonToken.size.medium"}),e.jsx(s,{children:"chipToken.variant.solid"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"BTN_MEDIUM"}),e.jsx(s,{children:"chipStyle1"})]})]})]})]})]}),e.jsx(c.h4,{id:"3-파일--폴더",children:"3. 파일 · 폴더"}),e.jsxs("table",{className:"naming-table",children:[e.jsx(l,{}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"컴포넌트 파일"}),e.jsxs("td",{children:["PascalCase. 컴포넌트와 1:1 대응. 확장자 ",e.jsx("code",{children:".tsx"}),"."]}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"Button.tsx"}),e.jsx(s,{children:"InputField.tsx"}),e.jsx(s,{children:"ActionArea.tsx"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"button.tsx"}),e.jsx(s,{children:"input-field.tsx"}),e.jsx(s,{children:"action_area.tsx"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"토큰 · 유틸"}),e.jsx("td",{children:"camelCase. 역할을 나타내는 이름."}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"theme.ts"}),e.jsx(s,{children:"iconRegistry.ts"}),e.jsx(s,{children:"storyHelpers.tsx"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"Theme.ts"}),e.jsx(s,{children:"icon-data.ts"}),e.jsx(s,{children:"_helpers.tsx"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"스토리 파일"}),e.jsxs("td",{children:[e.jsx("code",{children:"컴포넌트명.stories.tsx"})," 패턴."]}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"Button.stories.tsx"}),e.jsx(s,{children:"TabBar.stories.tsx"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"button-stories.tsx"}),e.jsx(s,{children:"TabBarStory.tsx"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"폴더"}),e.jsx("td",{children:"PascalCase(컴포넌트) 또는 camelCase(유틸). 복수형 지양."}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"Icon/"}),e.jsx(s,{children:"tokens/"}),e.jsx(s,{children:"stories/"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"icons/"}),e.jsx(s,{children:"Components/"}),e.jsx(s,{children:"src_tokens/"})]})]})]})]})]}),e.jsx(c.h4,{id:"4-아이콘",children:"4. 아이콘"}),e.jsxs("table",{className:"naming-table",children:[e.jsx(l,{}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"아이콘 이름"}),e.jsx("td",{children:"kebab-case. 사물·동작을 나타내는 영어 명사."}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"shopping-cart-simple"}),e.jsx(s,{children:"check-circle"}),e.jsx(s,{children:"magnifying-glass"})]}),e.jsxs(n,{children:[e.jsx(s,{children:"shoppingCart"}),e.jsx(s,{children:"icon_check"}),e.jsx(s,{children:"SearchIcon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"카테고리"}),e.jsx("td",{children:"style prop으로 구분. normal, color, circle, mini."}),e.jsxs("td",{children:[e.jsxs(i,{children:[e.jsx(s,{children:'<Icon name="bell" />'}),e.jsx(s,{children:'<Icon name="date" style="color" />'})]}),e.jsxs(n,{children:[e.jsx(s,{children:'<NormalIcon name="bell" />'}),e.jsx(s,{children:'<Icon type="colorDate" />'})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"category",children:"플레이스홀더"}),e.jsxs("td",{children:["샘플·데모용 슬롯에는 ",e.jsx("code",{children:"null"})," 아이콘 사용."]}),e.jsxs("td",{children:[e.jsx(i,{children:e.jsx(s,{children:'<Icon name="null" />'})}),e.jsx(n,{children:e.jsx(s,{children:'<Icon name="placeholder" />'})})]})]})]})]})]})]})}function g(r={}){const{wrapper:c}={...t(),...r.components};return c?e.jsx(c,{...r,children:e.jsx(d,{...r})}):d(r)}export{i as Do,n as Dont,s as Ex,l as TableHead,g as default};
