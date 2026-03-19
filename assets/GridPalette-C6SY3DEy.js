import{j as e,M as o}from"./blocks-CF6kqcnP.js";import{useMDXComponents as n}from"./index-ukDLHecn.js";import"./iframe-CExKz_YG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhQdN83S.js";import"./index-4WY5UODG.js";const s=[{value:4,multiplier:"×1",desc:"최소 단위 — 아이콘-텍스트 간격"},{value:8,multiplier:"×2",desc:"기본 간격 — 컴포넌트 내부 패딩"},{value:12,multiplier:"×3",desc:"중간 간격 — 카드 내부 패딩"},{value:14,multiplier:"×3.5",desc:"버튼 소형 패딩 — Button Small paddingX"},{value:16,multiplier:"×4",desc:"표준 간격 — 화면 좌우 마진"},{value:18,multiplier:"×4.5",desc:"버튼 중형 패딩 — Button Medium paddingX"},{value:20,multiplier:"×5",desc:"넓은 간격 — 섹션 내 요소 간격"},{value:24,multiplier:"×6",desc:"섹션 간격 — 콘텐츠 블록 구분"},{value:28,multiplier:"×7",desc:"칩 소형 높이 — Chip Small height"},{value:32,multiplier:"×8",desc:"대형 간격 — 페이지 섹션 구분"},{value:36,multiplier:"×9",desc:"버튼 소형 높이 — Button Small height"},{value:38,multiplier:"×9.5",desc:"칩 대형 높이 — Chip Large height"},{value:40,multiplier:"×10",desc:"특대 간격 — 헤더-콘텐츠 분리"},{value:44,multiplier:"×11",desc:"버튼 중형 높이 — Button Medium height"},{value:48,multiplier:"×12",desc:"최대 간격 — 인풋 최소 높이"},{value:52,multiplier:"×13",desc:"버튼 대형 높이 — Button Large height"},{value:64,multiplier:"×16",desc:"확장 간격 — 풀스크린 여백"}],a=({value:t,multiplier:i,desc:r})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,padding:"10px 0",borderBottom:"1px solid #F4F4F5"},children:[e.jsxs("div",{style:{width:56,textAlign:"right",fontFamily:"'SF Mono', 'Fira Code', monospace",fontSize:13,fontWeight:600,color:"#171719",flexShrink:0},children:[t,"px"]}),e.jsx("div",{style:{width:28,textAlign:"center",fontSize:11,fontWeight:600,color:"#989BA2",flexShrink:0},children:i}),e.jsx("div",{style:{width:t*3,height:24,backgroundColor:"#22C3BC",borderRadius:6,minWidth:12,transition:"width 0.2s"}}),e.jsx("div",{style:{fontSize:13,color:"#70737C",flex:1},children:r})]});function d(t){const i={h3:"h3",p:"p",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Design Tokens/Grid Palette"}),`
`,`
`,`
`,e.jsx("style",{children:`
  .grid-palette-page {
    max-width: 900px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #37383C;
  }
  .grid-palette-page h2.page-title {
    font-size: 28px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 8px;
    padding-bottom: 12px;
    border-bottom: 2px solid #22C3BC;
  }
  .grid-palette-page > p.page-desc {
    font-size: 14px;
    color: #70737C;
    margin: 0 0 32px;
    line-height: 1.7;
  }
  .grid-palette-page h3 {
    font-size: 18px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 6px;
  }
  .grid-palette-page h3 + p {
    font-size: 13px;
    color: #70737C;
    margin: 0 0 16px;
    line-height: 1.6;
  }
  .section-divider {
    border: none;
    border-top: 1px solid #E1E2E4;
    margin: 36px 0;
  }
  .grid-unit-demo {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    margin: 0 0 12px;
  }
  .grid-unit-cell {
    width: 4px;
    height: 4px;
    background: #22C3BC;
    border-radius: 1px;
  }
  .grid-info-box {
    background: linear-gradient(135deg, #FBFEFE 0%, #E9FBFA 100%);
    border: 1px solid #D4F7F6;
    border-radius: 12px;
    padding: 20px 24px;
    margin: 0 0 32px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .grid-info-box .grid-badge {
    background: #22C3BC;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .grid-info-box .grid-text {
    font-size: 14px;
    color: #37383C;
    line-height: 1.6;
  }
  .grid-info-box .grid-text strong {
    color: #171719;
  }
  .bar-list {
    margin: 0 0 0;
  }
  .bar-list > div:first-child {
    padding-top: 0;
  }
  .bar-list > div:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`}),`
`,e.jsxs("div",{className:"grid-palette-page",children:[e.jsx("h2",{className:"page-title",children:"Grid Palette"}),e.jsx("p",{className:"page-desc",children:e.jsx(i.p,{children:"바이오컴 디자인 시스템의 모든 여백은 4px 그리드를 기본 단위로 사용합니다. 아래 팔레트를 통해 각 크기를 시각적으로 비교할 수 있습니다."})}),e.jsx(i.h3,{id:"base-unit",children:"Base Unit"}),e.jsx("p",{children:"4px을 1 단위로 하여 모든 간격이 배수로 구성됩니다."}),e.jsxs("div",{className:"grid-info-box",children:[e.jsx("div",{className:"grid-badge",children:"4"}),e.jsx("div",{className:"grid-text",children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"gridUnit = 4px"}),e.jsx("br",{}),`
모든 spacing, padding, margin, gap, height 값은 4의 배수입니다.
커스텀 간격이 필요할 때는 `,e.jsx("code",{children:"gridUnit * N"})," 형태로 사용합니다."]})})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(i.h3,{id:"scale",children:"Scale"}),e.jsx("p",{children:"4px 배수 기반 전체 스케일입니다. 막대 길이로 크기를 직관적으로 비교할 수 있습니다."}),e.jsx("div",{className:"bar-list",children:s.map(r=>e.jsx(a,{...r},r.value))}),e.jsx("hr",{className:"section-divider"}),e.jsx(i.h3,{id:"column-grid",children:"Column Grid"}),e.jsxs("p",{children:["모바일 화면의 컬럼 그리드 간격은 ",e.jsx("strong",{children:"20px"}),"로 두며, 화면 너비에 맞게 유연히 대응할 수 있는 컬럼 그리드를 사용합니다."]}),e.jsxs("div",{style:{border:"1px solid #E1E2E4",borderRadius:12,padding:20,backgroundColor:"#F7F7F8",marginBottom:24},children:[e.jsx("div",{style:{display:"flex",gap:20,height:120},children:Array.from({length:4}).map((r,l)=>e.jsxs("div",{style:{flex:1,backgroundColor:"rgba(34, 195, 188, 0.15)",borderRadius:6,border:"1px dashed #22C3BC",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:600,color:"#22C3BC"},children:["Col ",l+1]},l))}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4,marginTop:8},children:[e.jsx("span",{style:{fontSize:11,color:"#989BA2"},children:"margin: 20px"}),e.jsx("span",{style:{fontSize:11,color:"#989BA2"},children:"·"}),e.jsx("span",{style:{fontSize:11,color:"#989BA2"},children:"gutter: 20px"}),e.jsx("span",{style:{fontSize:11,color:"#989BA2"},children:"·"}),e.jsx("span",{style:{fontSize:11,color:"#989BA2"},children:"columns: flexible"})]})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(i.h3,{id:"figma-grid-shortcut",children:"Figma Grid Shortcut"}),e.jsx("p",{children:"피그마에서 그리드를 켜고 끌 때 사용하는 단축키입니다."}),e.jsxs("div",{style:{display:"flex",gap:16,marginBottom:0},children:[e.jsxs("div",{style:{flex:1,background:"#F7F7F8",borderRadius:10,padding:"16px 20px",border:"1px solid #E1E2E4"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#989BA2",marginBottom:6},children:"macOS"}),e.jsx("div",{style:{fontFamily:"'SF Mono', 'Fira Code', monospace",fontSize:15,fontWeight:700,color:"#171719"},children:"⌃ Control + G"})]}),e.jsxs("div",{style:{flex:1,background:"#F7F7F8",borderRadius:10,padding:"16px 20px",border:"1px solid #E1E2E4"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#989BA2",marginBottom:6},children:"Windows"}),e.jsx("div",{style:{fontFamily:"'SF Mono', 'Fira Code', monospace",fontSize:15,fontWeight:700,color:"#171719"},children:"Ctrl + Shift + 4"})]})]})]})]})}function u(t={}){const{wrapper:i}={...n(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(d,{...t})}):d(t)}export{a as GridBar,u as default,s as gridSteps};
