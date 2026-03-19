import{j as e,M as j}from"./blocks-CF6kqcnP.js";import{useMDXComponents as p}from"./index-ukDLHecn.js";import{R as k}from"./iframe-CExKz_YG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhQdN83S.js";import"./index-4WY5UODG.js";const x=({token:n,alias:o,value:t,preview:i,role:m})=>{const[h,d]=k.useState(!1),g=()=>{navigator.clipboard.writeText(n).then(()=>{d(!0),setTimeout(()=>d(!1),1500)})};return e.jsxs("tr",{className:"token-row",onClick:g,style:{cursor:"pointer"},children:[e.jsxs("td",{className:"token-name-cell",children:[e.jsx("code",{children:o||n}),h&&e.jsx("span",{className:"copied-badge",children:"복사됨!"})]}),e.jsx("td",{children:i}),e.jsx("td",{className:"value-cell",children:t}),e.jsx("td",{className:"role-cell",children:m})]})},s=({token:n,alias:o,px:t,role:i})=>e.jsx(x,{token:n,alias:o,value:`${t}px`,preview:e.jsx("div",{className:"bar-preview",children:e.jsx("div",{className:"bar-fill",style:{width:Math.min(t*2,120)}})}),role:i}),a=({token:n,alias:o,px:t,role:i})=>e.jsx(x,{token:n,alias:o,value:t===9999?"9999px":`${t}px`,preview:e.jsx("div",{style:{width:28,height:28,backgroundColor:"#22C3BC",borderTopRightRadius:Math.min(t,14)}}),role:i}),l=({title:n,description:o})=>e.jsx("tr",{className:"section-header-row",children:e.jsx("td",{colSpan:4,children:e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-title",children:n}),e.jsx("span",{className:"section-desc",children:o})]})})}),r=({label:n})=>e.jsx("tr",{className:"sub-header-row",children:e.jsx("td",{colSpan:4,children:e.jsx("span",{className:"sub-label",children:n})})});function c(n){const o={h3:"h3",p:"p",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Design Tokens/Grid Tokens"}),`
`,`
`,`
`,`
`,`
`,`
`,e.jsx("style",{children:`
  .grid-tokens-page {
    max-width: 900px;
    margin: 0 auto;
    font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #37383C;
  }
  .grid-tokens-page h2.page-title {
    font-size: 28px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 8px;
    padding-bottom: 12px;
    border-bottom: 2px solid #22C3BC;
  }
  .grid-tokens-page > p.page-desc {
    font-size: 14px;
    color: #70737C;
    margin: 0 0 24px;
    line-height: 1.7;
  }

  /* ── Table ── */
  .grid-tokens-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }
  .grid-tokens-table thead th {
    text-align: left;
    padding: 10px 14px;
    font-weight: 600;
    color: #46474C;
    font-size: 12px;
    background: #F7F7F8;
    border-bottom: 2px solid #E1E2E4;
  }
  .grid-tokens-table .token-row td {
    padding: 10px 14px;
    border-bottom: 1px solid #F4F4F5;
    vertical-align: middle;
  }
  .grid-tokens-table .token-row:hover td {
    background: #FBFEFE;
  }
  .grid-tokens-table .token-name-cell {
    position: relative;
  }
  .grid-tokens-table .token-name-cell code {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 12px;
    color: #22C3BC;
    background: #E9FBF5;
    padding: 2px 8px;
    border-radius: 4px;
    white-space: nowrap;
  }
  .grid-tokens-table .copied-badge {
    position: absolute;
    top: -4px;
    right: 0;
    font-size: 10px;
    font-weight: 600;
    color: #22C3BC;
    background: #E9FBF5;
    padding: 2px 6px;
    border-radius: 4px;
  }
  .grid-tokens-table .value-cell {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 12px;
    font-weight: 600;
    color: #37383C;
  }
  .grid-tokens-table .role-cell {
    font-size: 12px;
    color: #70737C;
  }

  /* ── Bar Preview ── */
  .bar-preview {
    height: 12px;
    background: #F4F4F5;
    border-radius: 6px;
    overflow: hidden;
    min-width: 40px;
    max-width: 120px;
  }
  .bar-fill {
    height: 100%;
    background: #22C3BC;
    border-radius: 6px;
    min-width: 4px;
  }

  /* ── Section / Sub Header ── */
  .section-header-row td {
    padding: 12px 14px 8px !important;
    border-bottom: 1px solid #E1E2E4 !important;
    background: #F7F7F8;
  }
  .section-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .section-title {
    font-size: 14px;
    font-weight: 700;
    color: #171719;
  }
  .section-desc {
    font-size: 12px;
    color: #70737C;
  }
  .sub-header-row td {
    padding: 8px 14px 4px !important;
    border-bottom: 1px solid #F4F4F5 !important;
  }
  .sub-label {
    font-size: 11px;
    font-weight: 700;
    color: #989BA2;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  /* ── Divider ── */
  .section-divider {
    border: none;
    border-top: 1px solid #E1E2E4;
    margin: 36px 0;
  }

  /* ── Usage Card ── */
  .usage-card {
    background: linear-gradient(135deg, #FBFEFE 0%, #E9FBFA 100%);
    border: 1px solid #D4F7F6;
    border-radius: 12px;
    padding: 20px 24px;
    margin: 16px 0 0;
    overflow-x: auto;
  }
  .usage-card pre {
    margin: 0;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 13px;
    line-height: 1.7;
    color: #37383C;
  }
  .usage-card .comment { color: #70737C; }
  .usage-card .token { color: #22C3BC; }
`}),`
`,e.jsxs("div",{className:"grid-tokens-page",children:[e.jsx("h2",{className:"page-title",children:"Grid Tokens"}),e.jsx("p",{className:"page-desc",children:e.jsx(o.p,{children:"컴포넌트에서 실제 사용 중인 시맨틱 Grid/Spacing 토큰입니다. 토큰을 클릭하면 코드가 클립보드에 복사됩니다."})}),e.jsxs("table",{className:"grid-tokens-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"30%"},children:"Token Name"}),e.jsx("th",{style:{width:"15%"},children:"Preview"}),e.jsx("th",{style:{width:"10%"},children:"Value"}),e.jsx("th",{children:"역할 (Role)"})]})}),e.jsxs("tbody",{children:[e.jsx(l,{title:"Spacing",description:"기본 스페이싱 스케일"}),e.jsx(s,{token:"spacing.xsmall",px:4,role:"아이콘-텍스트 간격, 인라인 최소"}),e.jsx(s,{token:"spacing.small",px:8,role:"컴포넌트 내부 패딩, 요소 간 간격"}),e.jsx(s,{token:"spacing.medium",px:12,role:"카드 내부 패딩, 섹션 내 간격"}),e.jsx(s,{token:"spacing.large",px:16,role:"화면 좌우 마진, 섹션 간 기본"}),e.jsx(s,{token:"spacing.xlarge",px:20,role:"넓은 간격, BottomSheet 패딩"}),e.jsx(s,{token:"spacing['2xlarge']",px:24,role:"섹션 간 큰 간격"}),e.jsx(s,{token:"spacing['3xlarge']",px:32,role:"페이지 섹션 구분"}),e.jsx(s,{token:"spacing['4xlarge']",px:48,role:"최대 여백, 헤더-콘텐츠"}),e.jsx(r,{label:"Screen Margin"}),e.jsx(s,{token:"screenMargin.default",px:16,role:"일반 화면 좌우 여백"}),e.jsx(s,{token:"screenMargin.compact",px:12,role:"모달, 바텀시트"}),e.jsx(s,{token:"screenMargin.wide",px:20,role:"넓은 화면, 태블릿"}),e.jsx(l,{title:"Component",description:"컴포넌트별 크기 · 간격"}),e.jsx(r,{label:"Button"}),e.jsx(s,{token:"buttonToken.size.small.height",px:36,role:"높이"}),e.jsx(s,{token:"buttonToken.size.small.paddingHorizontal",px:14,role:"좌우 패딩"}),e.jsx(s,{token:"buttonToken.size.medium.height",px:44,role:"높이"}),e.jsx(s,{token:"buttonToken.size.medium.paddingHorizontal",px:18,role:"좌우 패딩"}),e.jsx(s,{token:"buttonToken.size.large.height",px:52,role:"높이"}),e.jsx(s,{token:"buttonToken.size.large.paddingHorizontal",px:24,role:"좌우 패딩"}),e.jsx(r,{label:"Chip"}),e.jsx(s,{token:"chipToken.size.xsmall.height",px:24,role:"높이"}),e.jsx(s,{token:"chipToken.size.small.height",px:28,role:"높이"}),e.jsx(s,{token:"chipToken.size.medium.height",px:32,role:"높이"}),e.jsx(s,{token:"chipToken.size.large.height",px:38,role:"높이"}),e.jsx(r,{label:"ActionArea"}),e.jsx(s,{token:"actionAreaToken.padding",px:16,role:"좌우 패딩"}),e.jsx(s,{token:"actionAreaToken.gap",px:8,role:"버튼 간 간격"}),e.jsx(r,{label:"InputField"}),e.jsx(s,{token:"spacing['4xlarge']",px:48,role:"단일 행 최소 높이"}),e.jsx(s,{token:"spacing.large",px:16,role:"좌우 패딩 (paddingHorizontal)"}),e.jsx(l,{title:"Radius",description:"모서리 반경(border-radius)"}),e.jsx(a,{token:"radius.xsmall",px:4,role:"소형 태그, 코드 블록"}),e.jsx(a,{token:"radius.small",px:8,role:"Small 버튼, Small 칩"}),e.jsx(a,{token:"radius.medium",px:12,role:"Medium/Large 버튼, 인풋, 카드"}),e.jsx(a,{token:"radius.large",px:16,role:"모달, 바텀시트 상단"}),e.jsx(a,{token:"radius.xlarge",px:24,role:"BottomSheet, 대형 카드"}),e.jsx(a,{token:"radius.full",px:9999,role:"원형 (배지, 아바타, 토글)"})]})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(o.h3,{id:"usage",children:"Usage"}),e.jsx("p",{children:"컴포넌트에서 spacing/radius 토큰을 사용하는 예시입니다."}),e.jsx("div",{className:"usage-card",children:e.jsxs("pre",{children:[e.jsxs(o.p,{children:[e.jsx("span",{className:"comment",children:"// theme.ts에서 import"}),`
`,`
import `,"{ ",e.jsx("span",{className:"token",children:"spacing"}),", ",e.jsx("span",{className:"token",children:"radius"}),", ",e.jsx("span",{className:"token",children:"buttonToken"})," }"," from '../tokens/theme';",`
`]}),`
`,e.jsx("span",{className:"comment",children:"// 기본 스페이싱"}),`
`,"<View style={{ padding: ",e.jsx("span",{className:"token",children:"spacing.large"}),", gap: ",e.jsx("span",{className:"token",children:"spacing.small"})," }}>",`
`,`
`,e.jsxs(o.p,{children:[e.jsx("span",{className:"comment",children:"// 컴포넌트 토큰"}),`
`,`
`,"const h = ",e.jsx("span",{className:"token",children:"buttonToken.size.medium.height"}),";","     ",e.jsx("span",{className:"comment",children:"// 44px"}),`
`,`
`,"const px = ",e.jsx("span",{className:"token",children:"buttonToken.size.medium.paddingHorizontal"}),";","  ",e.jsx("span",{className:"comment",children:"// 18px"}),`
`]}),`
`,e.jsx("span",{className:"comment",children:"// 반경"}),`
`,"<View style={{ borderRadius: ",e.jsx("span",{className:"token",children:"radius.medium"})," }}>",e.jsxs("span",{className:"comment",children:["  ","// 12px"]}),`
`]})})]})]})}function C(n={}){const{wrapper:o}={...p(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(c,{...n})}):c(n)}export{x as BaseRow,a as RadiusRow,l as SectionHeader,s as SpacingRow,r as SubHeader,C as default};
