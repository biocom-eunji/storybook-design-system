import{j as e,M as p}from"./blocks-CF6kqcnP.js";import{useMDXComponents as c}from"./index-ukDLHecn.js";import{R as h}from"./iframe-CExKz_YG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhQdN83S.js";import"./index-4WY5UODG.js";const o=({token:s,hex:r,source:t,role:i})=>{const[d,a]=h.useState(!1),x=()=>{navigator.clipboard.writeText(`semanticColor.${s}`).then(()=>{a(!0),setTimeout(()=>a(!1),1500)})};return e.jsxs("tr",{className:"token-row",onClick:x,style:{cursor:"pointer"},children:[e.jsxs("td",{className:"token-name",children:[e.jsx("code",{children:s}),d&&e.jsx("span",{className:"copied-badge",children:"복사됨!"})]}),e.jsx("td",{children:e.jsx("div",{className:"color-preview-wrap",children:e.jsx("div",{className:"color-preview",style:{backgroundColor:r,border:r==="#FFFFFF"?"1px solid #E1E2E4":"none"}})})}),e.jsxs("td",{className:"value-cell",children:[e.jsx("span",{className:"mono",children:r}),t&&e.jsx("span",{className:"source-tag",children:t})]}),e.jsx("td",{className:"role-text",children:i})]})},n=({title:s,description:r})=>e.jsx(e.Fragment,{children:e.jsx("tr",{className:"section-header-row",children:e.jsx("td",{colSpan:4,children:e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-title",children:s}),e.jsx("span",{className:"section-desc",children:r})]})})})});function l(s){const r={h3:"h3",p:"p",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Design Tokens/Color Tokens"}),`
`,`
`,`
`,e.jsx("style",{children:`
  .tokens-page {
    max-width: 960px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #292A2D;
  }
  .tokens-page h2.page-title {
    font-size: 28px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 8px;
    padding-bottom: 12px;
    border-bottom: 2px solid #22C3BC;
  }
  .tokens-page > p.page-desc {
    font-size: 15px;
    color: #5A5C63;
    margin: 0 0 12px;
  }
  .usage-card {
    background: linear-gradient(135deg, #FBFEFE 0%, #E9FBFA 100%);
    border: 1px solid #D4F7F6;
    border-radius: 12px;
    padding: 20px 24px;
    margin: 0 0 40px;
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
  .usage-card .keyword { color: #17827D; }
  .usage-card .string { color: #22C289; }
  .usage-card .token { color: #22C3BC; }
  .tokens-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    margin: 0 0 48px;
  }
  .tokens-table thead {
    border-bottom: 2px solid #171719;
    position: sticky;
    top: 0;
    background: #FFFFFF;
    z-index: 1;
  }
  .tokens-table th {
    text-align: left;
    padding: 10px 12px;
    font-weight: 600;
    color: #46474C;
    font-size: 13px;
  }
  .tokens-table td {
    padding: 12px;
    border-bottom: 1px solid #E1E2E4;
    vertical-align: middle;
  }
  .token-row:hover {
    background: #F7F7F8;
  }
  .token-row:hover .token-name code {
    color: #22C3BC;
  }
  .token-name {
    position: relative;
  }
  .token-name code {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 13px;
    font-weight: 500;
    color: #171719;
    background: #F4F4F5;
    padding: 2px 8px;
    border-radius: 4px;
    transition: color 0.15s;
  }
  .copied-badge {
    position: absolute;
    top: -6px;
    right: -8px;
    background: #22C3BC;
    color: #FFFFFF;
    font-size: 10px;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 4px;
    white-space: nowrap;
  }
  .color-preview-wrap {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .color-preview {
    width: 100%;
    height: 32px;
    border-radius: 6px;
    min-width: 56px;
    flex-shrink: 0;
  }
  .mono {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 13px;
    color: #5A5C63;
  }
  .value-cell {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .source-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    color: #22C3BC;
    background: #E9FBFA;
    padding: 1px 6px;
    border-radius: 4px;
    font-family: 'SF Mono', 'Fira Code', monospace;
  }
  .role-text {
    font-size: 13px;
    color: #5A5C63;
    line-height: 1.5;
  }
  .section-header-row td {
    padding: 0 !important;
    border-bottom: none !important;
  }
  .section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 24px 12px 12px;
    border-bottom: 1px solid #DBDCDF;
  }
  .section-title {
    font-size: 16px;
    font-weight: 700;
    color: #171719;
    white-space: nowrap;
  }
  .section-desc {
    font-size: 13px;
    color: #70737C;
  }
`}),`
`,e.jsxs("div",{className:"tokens-page",children:[e.jsx("h2",{className:"page-title",children:"Color Tokens"}),e.jsx("p",{className:"page-desc",children:e.jsxs(r.p,{children:[`역할 기반 색상 토큰입니다. 컴포넌트에서 HEX 코드 대신 토큰명을 사용하면 테마 변경 시 일괄 적용됩니다.
`,e.jsx("br",{}),"토큰 이름을 클릭하면 코드가 클립보드에 복사됩니다."]})}),e.jsxs("table",{className:"tokens-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"28%"},children:"Token Name"}),e.jsx("th",{style:{width:"10%"},children:"Preview"}),e.jsx("th",{style:{width:"14%"},children:"Value"}),e.jsx("th",{children:"역할 (Role)"})]})}),e.jsxs("tbody",{children:[e.jsx(n,{title:"Text",description:"텍스트에 적용하는 색상 토큰"}),e.jsx(o,{token:"textPrimary",hex:"#212225",source:"coolNeutral17",role:"기본 본문·타이틀 텍스트 색상."}),e.jsx(o,{token:"textSecondary",hex:"#70737C",source:"coolNeutral50",role:"보조 설명, 부가 정보, 캡션 텍스트."}),e.jsx(o,{token:"textTertiary",hex:"#AEB0B6",source:"coolNeutral80",role:"비활성화 텍스트, 힌트, 플레이스홀더."}),e.jsx(o,{token:"textOnColor",hex:"#FFFFFF",source:"coolNeutral100",role:"색상 배경 위 텍스트 (버튼, 배지 등)."}),e.jsx(o,{token:"textBrand",hex:"#22C3BC",source:"mint45",role:"링크, 포커스, 브랜드 강조 텍스트."}),e.jsx(o,{token:"textError",hex:"#EF7676",source:"red70",role:"에러·유효성 실패 메시지."}),e.jsx(o,{token:"textSuccess",hex:"#22C3BC",source:"mint45",role:"성공·유효성 통과 메시지."}),e.jsx(o,{token:"textWarning",hex:"#FFCE00",source:"yellow50",role:"경고·주의 메시지."}),e.jsx(n,{title:"Background",description:"배경에 적용하는 색상 토큰"}),e.jsx(o,{token:"backgroundPrimary",hex:"#FFFFFF",source:"coolNeutral100",role:"기본 화면 배경색."}),e.jsx(o,{token:"backgroundSecondary",hex:"#F7F7F8",source:"coolNeutral99",role:"카드, 섹션 구분 배경색."}),e.jsx(o,{token:"backgroundTertiary",hex:"#EAEBEC",source:"coolNeutral97",role:"인풋 비활성, 칩 기본 배경."}),e.jsx(o,{token:"backgroundInverse",hex:"#171719",source:"coolNeutral10",role:"다크 영역, 활성 칩 배경."}),e.jsx(o,{token:"backgroundBrand",hex:"#22C3BC",source:"mint45",role:"CTA 버튼, 강조 영역 배경."}),e.jsx(o,{token:"backgroundBrandPressed",hex:"#17827D",source:"mint30",role:"브랜드 배경 눌림 상태."}),e.jsx(o,{token:"backgroundStatus",hex:"#FFFFFF",source:"coolNeutral100",role:"에러/성공/경고 상태 배경 (흰색 통일)."}),e.jsx(n,{title:"Border",description:"테두리·구분선에 적용하는 색상 토큰"}),e.jsx(o,{token:"borderDefault",hex:"#E1E2E4",source:"coolNeutral96",role:"기본·비활성화 테두리, 구분선."}),e.jsx(o,{token:"borderActive",hex:"#C2C4C8",source:"coolNeutral90",role:"입력됨 상태 테두리."}),e.jsx(o,{token:"borderFocus",hex:"#22C3BC",source:"mint45",role:"포커스·브랜드 강조 테두리."}),e.jsx(o,{token:"borderError",hex:"#EF7676",source:"red70",role:"에러 상태 테두리."}),e.jsx(o,{token:"borderSuccess",hex:"#22C3BC",source:"mint45",role:"성공 상태 테두리."}),e.jsx(n,{title:"Icon",description:"아이콘에 적용하는 색상 토큰"}),e.jsx(o,{token:"iconPrimary",hex:"#212225",source:"coolNeutral17",role:"기본 아이콘. 내비게이션, 액션."}),e.jsx(o,{token:"iconSecondary",hex:"#70737C",source:"coolNeutral50",role:"보조 아이콘. 부가 정보."}),e.jsx(o,{token:"iconDisabled",hex:"#AEB0B6",source:"coolNeutral80",role:"비활성화 아이콘."}),e.jsx(o,{token:"iconBrand",hex:"#22C3BC",source:"mint45",role:"브랜드 아이콘. 체크, 활성 상태."}),e.jsx(o,{token:"iconOnColor",hex:"#FFFFFF",source:"coolNeutral100",role:"색상 배경 위 아이콘."}),e.jsx(o,{token:"iconError",hex:"#EF7676",source:"red70",role:"에러 상태 아이콘."}),e.jsx(o,{token:"iconSuccess",hex:"#22C3BC",source:"mint45",role:"성공 상태 아이콘."})]})]}),e.jsx(r.h3,{id:"usage",children:"Usage"}),e.jsxs("p",{children:["컴포넌트에서 HEX 코드 대신 ",e.jsx("code",{children:"semanticColor"})," 토큰을 사용합니다."]}),e.jsx("div",{className:"usage-card",children:e.jsxs("pre",{children:[e.jsxs(r.p,{children:[e.jsx("span",{className:"comment",children:"// theme.ts에서 import"}),`
`,`
`,e.jsx("span",{className:"keyword",children:"import"})," ","{ ",e.jsx("span",{className:"token",children:"semanticColor"})," }"," ",e.jsx("span",{className:"keyword",children:"from"})," ",e.jsx("span",{className:"string",children:"'../tokens/theme'"}),";",`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx("span",{className:"comment",children:"// 텍스트 색상 적용"}),`
`,`
`,"<",e.jsx("span",{className:"token",children:"Text"})," style=","{{ ","color: ",e.jsx("span",{className:"token",children:"semanticColor.textPrimary"})," }}",">",`
`,`
`,"  ","본문 텍스트",`
`,`
`,"</",e.jsx("span",{className:"token",children:"Text"}),">",`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx("span",{className:"comment",children:"// 배경 색상 적용"}),`
`,`
`,"<",e.jsx("span",{className:"token",children:"View"})," style=","{{ ","backgroundColor: ",e.jsx("span",{className:"token",children:"semanticColor.backgroundBrand"})," }}"," ","/>",`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx("span",{className:"comment",children:"// 테두리 색상 적용"}),`
`,`
`,"<",e.jsx("span",{className:"token",children:"View"})," style=","{{ ","borderColor: ",e.jsx("span",{className:"token",children:"semanticColor.borderError"}),", borderWidth: 1"," }}"," ","/>",`
`]})]})})]})]})}function C(s={}){const{wrapper:r}={...c(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(l,{...s})}):l(s)}export{n as SectionHeader,o as TokenRow,C as default};
