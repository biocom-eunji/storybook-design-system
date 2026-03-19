import{j as e,M as d}from"./blocks-CF6kqcnP.js";import{useMDXComponents as i}from"./index-ukDLHecn.js";import"./iframe-CExKz_YG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhQdN83S.js";import"./index-4WY5UODG.js";function o(s){const n={h2:"h2",h3:"h3",p:"p",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Design Tokens/Shadow"}),`
`,e.jsx("style",{children:`
  .shadow-page {
    max-width: 900px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  .shadow-page h2 {
    font-size: 28px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 8px;
    padding-bottom: 12px;
    border-bottom: 2px solid #22C3BC;
  }
  .shadow-page > p {
    font-size: 15px;
    color: #5A5C63;
    margin: 0 0 40px;
  }
  .section-divider {
    border: none;
    border-top: 1px solid #E1E2E4;
    margin: 16px 0 48px;
  }
  .shadow-page h3 {
    font-size: 20px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 4px;
  }
  .shadow-page h3 + p {
    font-size: 14px;
    color: #70737C;
    margin: 0 0 16px;
  }
  .shadow-page table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0 32px;
    font-size: 14px;
  }
  .shadow-page th {
    text-align: left;
    padding: 10px 12px;
    background: #F7F7F8;
    border-bottom: 2px solid #E1E2E4;
    color: #46474C;
    font-weight: 600;
    font-size: 13px;
  }
  .shadow-page td {
    padding: 10px 12px;
    border-bottom: 1px solid #EAEBEC;
    color: #292A2D;
    vertical-align: middle;
  }
  .shadow-page code {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 13px;
    background: #F4F4F5;
    padding: 2px 6px;
    border-radius: 4px;
    color: #5A5C63;
  }
  .usage-card {
    background: linear-gradient(135deg, #FBFEFE 0%, #E9FBFA 100%);
    border: 1px solid #D4F7F6;
    border-radius: 12px;
    padding: 20px 24px;
    margin: 16px 0 32px;
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
`,e.jsxs("div",{className:"shadow-page",children:[e.jsx("h2",{children:"Shadow"}),e.jsx("p",{children:"컴포넌트의 깊이감을 표현하는 그림자 단계입니다."}),e.jsx(n.h2,{id:"shadow-levels",children:"Shadow Levels"}),e.jsx("h3",{children:"그림자 단계"}),e.jsx("p",{children:"3단계 그림자로 UI 요소의 깊이를 표현합니다."}),e.jsxs("div",{style:{display:"flex",gap:24,marginBottom:48},children:[e.jsxs("div",{style:{flex:1,height:120,backgroundColor:"#FFFFFF",borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0px 1px 4px rgba(0, 0, 0, 0.06)"},children:[e.jsx("span",{style:{fontSize:15,fontWeight:600,color:"#171719"},children:"Level 1"}),e.jsx("span",{style:{fontSize:12,color:"#70737C",marginTop:4},children:"Subtle"}),e.jsx("span",{style:{fontSize:11,color:"#989BA2",marginTop:8,textAlign:"center",padding:"0 12px"},children:"카드, 구분선 대체, 미세한 깊이감"})]}),e.jsxs("div",{style:{flex:1,height:120,backgroundColor:"#FFFFFF",borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.1)"},children:[e.jsx("span",{style:{fontSize:15,fontWeight:600,color:"#171719"},children:"Level 2"}),e.jsx("span",{style:{fontSize:12,color:"#70737C",marginTop:4},children:"Medium"}),e.jsx("span",{style:{fontSize:11,color:"#989BA2",marginTop:8,textAlign:"center",padding:"0 12px"},children:"플로팅 요소, 드롭다운, 호버 카드"})]}),e.jsxs("div",{style:{flex:1,height:120,backgroundColor:"#FFFFFF",borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0px 4px 16px rgba(0, 0, 0, 0.15)"},children:[e.jsx("span",{style:{fontSize:15,fontWeight:600,color:"#171719"},children:"Level 3"}),e.jsx("span",{style:{fontSize:12,color:"#70737C",marginTop:4},children:"Strong"}),e.jsx("span",{style:{fontSize:11,color:"#989BA2",marginTop:8,textAlign:"center",padding:"0 12px"},children:"모달, 바텀시트, 최상위 레이어"})]})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(n.h2,{id:"spec-table",children:"Spec Table"}),e.jsx("h3",{children:"그림자 스펙"}),e.jsx("p",{children:"각 레벨의 상세 값입니다. React Native의 shadow 속성과 Android의 elevation 값을 함께 제공합니다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"레벨"}),e.jsx("th",{children:"shadowOffset"}),e.jsx("th",{children:"shadowOpacity"}),e.jsx("th",{children:"shadowRadius"}),e.jsx("th",{children:"elevation"}),e.jsx("th",{children:"용도"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"level1"})}),e.jsx("td",{children:"0, 1"}),e.jsx("td",{children:"0.06"}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"2"}),e.jsx("td",{children:"카드, 리스트 아이템"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"level2"})}),e.jsx("td",{children:"0, 2"}),e.jsx("td",{children:"0.10"}),e.jsx("td",{children:"8"}),e.jsx("td",{children:"4"}),e.jsx("td",{children:"플로팅 버튼, 드롭다운"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"level3"})}),e.jsx("td",{children:"0, 4"}),e.jsx("td",{children:"0.15"}),e.jsx("td",{children:"16"}),e.jsx("td",{children:"8"}),e.jsx("td",{children:"모달, 바텀시트"})]})]})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(n.h3,{id:"usage",children:"Usage"}),e.jsxs("p",{children:["테마에서 ",e.jsx("code",{children:"shadow"})," 토큰을 가져와 컴포넌트에 적용합니다."]}),e.jsx("div",{className:"usage-card",children:e.jsxs("pre",{children:[e.jsxs(n.p,{children:[e.jsx("span",{className:"comment",children:"// theme.ts에서 import"}),`
`,`
import `,"{ ",e.jsx("span",{className:"token",children:"shadow"})," }"," from '../tokens/theme';",`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx("span",{className:"comment",children:"// 스타일 객체로 직접 사용"}),`
`,`
`,"const modalStyle = {",`
`,`
`,"  backgroundColor: '#FFFFFF',",`
`,`
`,"  borderRadius: 16,",`
`,`
`,"  ...",e.jsx("span",{className:"token",children:"shadow.level3"}),",",`
`,`
`,"};",`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx("span",{className:"comment",children:"// React Native에서 사용"}),`
`,`
`,"<",e.jsx("span",{className:"token",children:"View"})," style=","{","[styles.container, ",e.jsx("span",{className:"token",children:"shadow.level2"}),"]","}",">",`
`,`
`,"  <",e.jsx("span",{className:"token",children:"Text"}),">","플로팅 카드","</",e.jsx("span",{className:"token",children:"Text"}),">",`
`,`
`,"</",e.jsx("span",{className:"token",children:"View"}),">",`
`]})]})})]})]})}function h(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{h as default};
