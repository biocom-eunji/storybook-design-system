import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-BnV8E0r4.js";import{R as u}from"./iframe-rdsxNJ7l.js";import{M as h}from"./blocks-DrXMzeDr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvUEBMMR.js";import"./index-GFEO7EU5.js";const o=({token:n,hex:r,source:t,role:i})=>{const[x,c]=u.useState(!1),d=()=>{navigator.clipboard.writeText(`semanticColor.${n}`).then(()=>{c(!0),setTimeout(()=>c(!1),1500)})};return e.jsxs("tr",{className:"token-row",onClick:d,style:{cursor:"pointer"},children:[e.jsxs("td",{className:"token-name",children:[e.jsx("code",{children:n}),x&&e.jsx("span",{className:"copied-badge",children:"복사됨!"})]}),e.jsx("td",{children:e.jsx("div",{className:"color-preview-wrap",children:e.jsx("div",{className:"color-preview",style:{backgroundColor:r,border:r==="#FFFFFF"?"1px solid #E1E2E4":"none"}})})}),e.jsxs("td",{className:"value-cell",children:[e.jsx("span",{className:"mono",children:r}),t&&e.jsx("span",{className:"source-tag",children:t})]}),e.jsx("td",{className:"role-text",children:i})]})},s=({title:n,description:r})=>e.jsx(e.Fragment,{children:e.jsx("tr",{className:"section-header-row",children:e.jsx("td",{colSpan:4,children:e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-title",children:n}),e.jsx("span",{className:"section-desc",children:r})]})})})});function a(n){const r={h3:"h3",p:"p",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Token/Colors/Tokens"}),`
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
`,e.jsxs("div",{className:"tokens-page",children:[e.jsx("h2",{className:"page-title",children:"Semantics / Color"}),e.jsx("p",{className:"page-desc",children:e.jsxs(r.p,{children:[`Figma Semantics 컬렉션의 색상 변수입니다. Surface, Content, Line, Role은 다크모드 전환 시 교체되는 기본 역할 토큰이며, Color는 컴포넌트에서 실제 사용하는 시맨틱 토큰입니다.
`,e.jsx("br",{}),"토큰 이름을 클릭하면 코드가 클립보드에 복사됩니다."]})}),e.jsxs("table",{className:"tokens-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"28%"},children:"Token Name"}),e.jsx("th",{style:{width:"10%"},children:"Preview"}),e.jsx("th",{style:{width:"14%"},children:"Value"}),e.jsx("th",{children:"역할 (Role)"})]})}),e.jsxs("tbody",{children:[e.jsx(s,{title:"Surface",description:"배경 표면의 기본 역할 토큰 (다크모드 전환 시 이 값만 교체)"}),e.jsx(o,{token:"surface/primary",hex:"#FFFFFF",source:"Mono/coolNeutral100",role:"기본 표면 색상."}),e.jsx(o,{token:"surface/secondary",hex:"#F7F7F8",source:"Mono/coolNeutral99",role:"보조 표면 색상 (카드, 섹션 구분)."}),e.jsx(o,{token:"surface/tertiary",hex:"#EAEBEC",source:"Mono/coolNeutral97",role:"3단계 표면 색상 (인풋 비활성, 칩)."}),e.jsx(o,{token:"surface/inverse",hex:"#171719",source:"Mono/coolNeutral10",role:"반전 표면 (다크 영역, 활성 칩)."}),e.jsx(s,{title:"Content",description:"텍스트·아이콘 콘텐츠의 기본 역할 토큰"}),e.jsx(o,{token:"content/strong",hex:"#0F0F10",source:"Mono/coolNeutral5",role:"최강조 콘텐츠 색상."}),e.jsx(o,{token:"content/primary",hex:"#171719",source:"Mono/coolNeutral10",role:"기본 콘텐츠 색상."}),e.jsx(o,{token:"content/secondary",hex:"#70737C",source:"Mono/coolNeutral50",role:"보조 콘텐츠 색상."}),e.jsx(o,{token:"content/tertiary",hex:"#AEB0B6",source:"Mono/coolNeutral80",role:"비활성 콘텐츠 색상."}),e.jsx(o,{token:"content/quaternary",hex:"#5A5C63",source:"Mono/coolNeutral40",role:"4단계 콘텐츠 색상."}),e.jsx(o,{token:"content/label",hex:"#46474C",source:"Mono/coolNeutral30",role:"라벨 콘텐츠 색상."}),e.jsx(o,{token:"content/onColor",hex:"#FFFFFF",source:"Mono/coolNeutral100",role:"색상 배경 위 콘텐츠."}),e.jsx(s,{title:"Line",description:"구분선·테두리의 기본 역할 토큰"}),e.jsx(o,{token:"line/default",hex:"#E1E2E4",source:"Mono/coolNeutral96",role:"기본 구분선."}),e.jsx(o,{token:"line/active",hex:"#70737C",source:"Mono/coolNeutral50",role:"활성 구분선."}),e.jsx(s,{title:"Role",description:"브랜드·상태 의미를 가지는 역할 토큰"}),e.jsx(o,{token:"role/brand",hex:"#22C3BC",source:"Brand/mint45",role:"브랜드 색상."}),e.jsx(o,{token:"role/brandPressed",hex:"#17827D",source:"Brand/mint30",role:"브랜드 눌림 색상."}),e.jsx(o,{token:"role/error",hex:"#EF7676",source:"Semantic/red70",role:"에러 역할 색상."}),e.jsx(o,{token:"role/success",hex:"#22C289",source:"green/45",role:"성공 역할 색상."}),e.jsx(o,{token:"role/warning",hex:"#FF9733",source:"orange/60",role:"경고 역할 색상 (주황)."}),e.jsx(o,{token:"role/caution",hex:"#FFCE00",source:"Semantic/yellow50",role:"주의 역할 색상 (노랑)."}),e.jsx(s,{title:"Text",description:"텍스트에 적용하는 색상 토큰"}),e.jsx(o,{token:"textPrimary",hex:"#171719",source:"content/primary",role:"기본 본문·타이틀 텍스트 색상."}),e.jsx(o,{token:"textSecondary",hex:"#70737C",source:"content/secondary",role:"보조 설명, 부가 정보, 캡션 텍스트."}),e.jsx(o,{token:"textTertiary",hex:"#AEB0B6",source:"content/tertiary",role:"비활성화 텍스트, 힌트."}),e.jsx(o,{token:"textPlaceholder",hex:"#AEB0B6",source:"color/text/tertiary",role:"입력 필드 플레이스홀더 (textTertiary alias)."}),e.jsx(o,{token:"textQuaternary",hex:"#5A5C63",source:"content/quaternary",role:"4단계 텍스트 (보조 버튼, 비활성 수치)."}),e.jsx(o,{token:"textLabel",hex:"#46474C",source:"content/label",role:"라벨 텍스트 (입력 필드 등)."}),e.jsx(o,{token:"textOnColor",hex:"#FFFFFF",source:"content/onColor",role:"색상 배경 위 텍스트 (버튼, 배지 등)."}),e.jsx(o,{token:"textBrand",hex:"#22C3BC",source:"role/brand",role:"링크, 포커스, 브랜드 강조 텍스트."}),e.jsx(o,{token:"textError",hex:"#EF7676",source:"role/error",role:"에러·유효성 실패 메시지."}),e.jsx(o,{token:"textSuccess",hex:"#22C289",source:"role/success",role:"성공·유효성 통과 메시지."}),e.jsx(o,{token:"textWarning",hex:"#FF9733",source:"role/warning",role:"경고 상태 텍스트 (주황)."}),e.jsx(o,{token:"textCaution",hex:"#FFCE00",source:"role/caution",role:"주의 상태 텍스트 (노랑)."}),e.jsx(o,{token:"textAction",hex:"#A8F0EC",source:"Brand/mint80",role:"다크 배경 위 액션 텍스트 (토스트 등)."}),e.jsx(s,{title:"Background",description:"배경에 적용하는 색상 토큰"}),e.jsx(o,{token:"backgroundPrimary",hex:"#FFFFFF",source:"surface/primary",role:"기본 배경색."}),e.jsx(o,{token:"backgroundSecondary",hex:"#F7F7F8",source:"surface/secondary",role:"카드, 섹션 구분 배경색."}),e.jsx(o,{token:"backgroundTertiary",hex:"#EAEBEC",source:"surface/tertiary",role:"인풋 비활성, 칩 기본 배경."}),e.jsx(o,{token:"backgroundInverse",hex:"#171719",source:"surface/inverse",role:"다크 영역, 활성 칩 배경."}),e.jsx(o,{token:"backgroundOff",hex:"#C2C4C8",source:"Mono/coolNeutral90",role:"OFF 상태 배경."}),e.jsx(o,{token:"backgroundBrand",hex:"#22C3BC",source:"role/brand",role:"브랜드 배경 (CTA 버튼)."}),e.jsx(o,{token:"backgroundBrandPressed",hex:"#17827D",source:"role/brandPressed",role:"브랜드 배경 눌림."}),e.jsx(o,{token:"backgroundDisabled",hex:"#E1E2E4",source:"Mono/coolNeutral96",role:"비활성화 배경."}),e.jsx(o,{token:"backgroundBrandDisabled",hex:"#D4F7F6",source:"Brand/mint90",role:"브랜드 비활성화 배경."}),e.jsx(o,{token:"backgroundError",hex:"#EF7676",source:"role/error",role:"에러 배경."}),e.jsx(o,{token:"backgroundWarning",hex:"#FF9733",source:"role/warning",role:"경고 배경."}),e.jsx(o,{token:"backgroundSuccess",hex:"#22C289",source:"role/success",role:"성공 배경."}),e.jsx(o,{token:"backgroundToast",hex:"#878A93",source:"Mono/coolNeutral60",role:"토스트 배경."}),e.jsx(o,{token:"backgroundCaution",hex:"#FFCE00",source:"role/caution",role:"주의 배경 (노랑)."}),e.jsx(o,{token:"backgroundScrim",hex:"#333333",source:"rgba(0,0,0,0.6)",role:"오버레이 스크림 (모달, 바텀시트 dim). v2.4.0: bk60으로 마이그레이션 (0.4 → 0.6)."}),e.jsx(o,{token:"backgroundSuccessSubtle",hex:"#D4F7EB",source:"green[90]",role:"성공 연한 배경 (halo, Tag 등)."}),e.jsx(o,{token:"backgroundCautionSubtle",hex:"#FFF5CC",source:"yellow[90]",role:"주의 연한 배경."}),e.jsx(o,{token:"backgroundWarningSubtle",hex:"#FFE5CC",source:"orange[90]",role:"경고 연한 배경."}),e.jsx(o,{token:"backgroundErrorSubtle",hex:"#FAD1D1",source:"red[90]",role:"에러 연한 배경."}),e.jsx(s,{title:"Border",description:"테두리·구분선에 적용하는 색상 토큰"}),e.jsx(o,{token:"borderDefault",hex:"#E1E2E4",source:"line/default",role:"기본 테두리, 구분선."}),e.jsx(o,{token:"borderActive",hex:"#70737C",source:"line/active",role:"입력됨 상태 테두리."}),e.jsx(o,{token:"borderFocus",hex:"#22C3BC",source:"role/brand",role:"포커스·브랜드 강조 테두리."}),e.jsx(o,{token:"borderError",hex:"#EF7676",source:"role/error",role:"에러 상태 테두리."}),e.jsx(o,{token:"borderSuccess",hex:"#22C289",source:"role/success",role:"성공 상태 테두리."}),e.jsx(s,{title:"Icon",description:"아이콘에 적용하는 색상 토큰"}),e.jsx(o,{token:"iconPrimary",hex:"#171719",source:"content/primary",role:"기본 아이콘. 내비게이션, 액션."}),e.jsx(o,{token:"iconSecondary",hex:"#70737C",source:"content/secondary",role:"보조 아이콘. 부가 정보."}),e.jsx(o,{token:"iconDisabled",hex:"#AEB0B6",source:"content/tertiary",role:"비활성화 아이콘."}),e.jsx(o,{token:"iconBrand",hex:"#22C3BC",source:"role/brand",role:"브랜드 아이콘. 체크, 활성 상태."}),e.jsx(o,{token:"iconOnColor",hex:"#FFFFFF",source:"content/onColor",role:"색상 배경 위 아이콘."}),e.jsx(o,{token:"iconError",hex:"#EF7676",source:"role/error",role:"에러 상태 아이콘."}),e.jsx(o,{token:"iconSuccess",hex:"#22C289",source:"role/success",role:"성공 상태 아이콘."}),e.jsx(o,{token:"iconWarning",hex:"#FF9733",source:"role/warning",role:"경고 아이콘 (주황)."}),e.jsx(o,{token:"iconCaution",hex:"#FFCE00",source:"role/caution",role:"주의 아이콘 (노랑)."}),e.jsx(o,{token:"iconInactive",hex:"#C2C4C8",source:"coolNeutral90",role:"미선택/비활성 아이콘 (체크마크, 탭바)."})]})]}),e.jsx(r.h3,{id:"usage",children:"Usage"}),e.jsxs("p",{children:["컴포넌트에서 HEX 코드 대신 ",e.jsx("code",{children:"semanticColor"})," 토큰을 사용합니다."]}),e.jsx("div",{className:"usage-card",children:e.jsxs("pre",{children:[e.jsxs(r.p,{children:[e.jsx("span",{className:"comment",children:"// theme.ts에서 import"}),`
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
`]})]})})]})]})}function b(n={}){const{wrapper:r}={...l(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(a,{...n})}):a(n)}export{s as SectionHeader,o as TokenRow,b as default};
