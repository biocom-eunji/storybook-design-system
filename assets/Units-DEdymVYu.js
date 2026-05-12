import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as w}from"./index-BnV8E0r4.js";import{R as o}from"./iframe-rdsxNJ7l.js";import{M as y}from"./blocks-DrXMzeDr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvUEBMMR.js";import"./index-GFEO7EU5.js";const F=[{name:"3XSmall",token:"gap.inner['3xsmall']",px:4},{name:"2XSmall",token:"gap.inner['2xsmall']",px:6},{name:"XSmall",token:"gap.inner.xsmall",px:8},{name:"Small",token:"gap.inner.small",px:12},{name:"Medium",token:"gap.inner.medium",px:16},{name:"Large",token:"gap.inner.large",px:20},{name:"XLarge",token:"gap.inner.xlarge",px:24},{name:"2XLarge",token:"gap.inner['2xlarge']",px:32}],v=[{name:"XSmall",token:"gap.outer.xsmall",px:16},{name:"Small",token:"gap.outer.small",px:24},{name:"Medium",token:"gap.outer.medium",px:32},{name:"Large",token:"gap.outer.large",px:40},{name:"XLarge",token:"gap.outer.xlarge",px:48}],C=[{name:"Hairline",token:"line.hairline",px:"hairline",display:"0.5 px"},{name:"Regular",token:"line.regular",px:1,display:"1 px"},{name:"Medium",token:"line.medium",px:1.5,display:"1.5 px"},{name:"Bold",token:"line.bold",px:2,display:"2 px"},{name:"Heavy",token:"line.heavy",px:6,display:"6 px"},{name:"Black",token:"line.black",px:12,display:"12 px"}],N=[{name:"2XSmall",token:"height['2xsmall']",px:24},{name:"XSmall",token:"height.xsmall",px:32},{name:"Small",token:"height.small",px:36},{name:"Medium",token:"height.medium",px:40},{name:"Large",token:"height.large",px:44},{name:"XLarge",token:"height.xlarge",px:52},{name:"2XLarge",token:"height['2xlarge']",px:56}],S=[{name:"Small",token:"icon.small",px:16},{name:"Medium",token:"icon.medium",px:20},{name:"Large",token:"icon.large",px:24},{name:"XLarge",token:"icon.xlarge",px:32}],z=[{name:"XSmall",token:"radiusTokensV2.xsmall",px:4},{name:"Small",token:"radiusTokensV2.small",px:8},{name:"Regular",token:"radiusTokensV2.regular",px:12},{name:"Medium",token:"radiusTokensV2.medium",px:16},{name:"Large",token:"radiusTokensV2.large",px:24},{name:"XLarge",token:"radiusTokensV2.xlarge",px:32},{name:"full",token:"radiusTokensV2.full",px:9999}],u=[{id:"gap-inner",label:"gap-inner"},{id:"gap-outer",label:"gap-outer"},{id:"line",label:"line"},{id:"height",label:"height"},{id:"icon-size",label:"icon size"},{id:"radius",label:"radius"}],k=o.createContext({copy:()=>{}}),E=({children:i})=>{const[n,t]=o.useState(null),s=o.useRef(null),a=o.useRef(0),d=o.useCallback(c=>{const b=Date.now();if(!(b-a.current<200)){a.current=b,s.current&&clearTimeout(s.current);try{navigator.clipboard.writeText(c).then(()=>{t(c),s.current=setTimeout(()=>t(null),1500)})}catch{t(c),s.current=setTimeout(()=>t(null),1500)}}},[]);return e.jsxs(k.Provider,{value:{copy:d},children:[i,n&&e.jsxs("div",{className:"units-toast",role:"status","aria-live":"polite",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#22C3BC",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),e.jsxs("span",{children:["Copied: ",e.jsx("code",{children:n})]})]})]})},T=({size:i,color:n})=>e.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n||"#22C3BC",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),p=({token:i,children:n})=>{const{copy:t}=o.useContext(k),s=a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),t(i))};return e.jsx("tr",{className:"token-row",role:"button",tabIndex:0,"aria-label":`Copy token ${i}`,onClick:()=>t(i),onKeyDown:s,children:n})},x=({name:i,token:n})=>e.jsxs("td",{className:"name-cell",children:[e.jsx("div",{className:"name-label",children:i}),e.jsx("code",{className:"name-code",children:n})]}),m=({display:i})=>{const n=typeof i=="string"?i.match(/^(.*?)\s*(px)$/):null;return n?e.jsxs("td",{className:"value-cell",children:[e.jsx("span",{className:"value-number",children:n[1]}),e.jsx("span",{className:"value-unit",children:n[2]})]}):e.jsx("td",{className:"value-cell",children:e.jsx("span",{className:"value-number",children:i})})},f=({name:i,token:n,px:t})=>e.jsxs(p,{token:n,children:[e.jsx(x,{name:i,token:n}),e.jsx("td",{className:"preview-cell",children:e.jsx("div",{className:"gap-track",children:e.jsx("div",{className:"gap-fill",style:{width:t},"aria-hidden":"true"})})}),e.jsx(m,{display:`${t} px`})]}),B=({name:i,token:n,px:t,display:s})=>{const a=t==="hairline";return e.jsxs(p,{token:n,children:[e.jsx(x,{name:i,token:n}),e.jsx("td",{className:"preview-cell",children:e.jsx("div",{className:"line-track",children:e.jsx("div",{className:"line-stroke",style:{height:a?1:t,transform:a?"scaleY(0.5)":void 0,transformOrigin:"center"},"aria-hidden":"true"})})}),e.jsx(m,{display:s})]})},V=({name:i,token:n,px:t})=>e.jsxs(p,{token:n,children:[e.jsx(x,{name:i,token:n}),e.jsx("td",{className:"preview-cell",children:e.jsx("div",{className:"height-track",children:e.jsx("div",{className:"height-fill",style:{width:120,height:t},"aria-hidden":"true",children:e.jsx("span",{className:"height-label",children:t})})})}),e.jsx(m,{display:`${t} px`})]}),R=({name:i,token:n,px:t})=>e.jsxs(p,{token:n,children:[e.jsx(x,{name:i,token:n}),e.jsx("td",{className:"preview-cell",children:e.jsx("div",{className:"icon-guide","aria-hidden":"true",children:e.jsx(T,{size:t})})}),e.jsx(m,{display:`${t} × ${t} px`})]}),M=({name:i,token:n,px:t})=>e.jsxs(p,{token:n,children:[e.jsx(x,{name:i,token:n}),e.jsx("td",{className:"preview-cell",children:e.jsx("div",{className:"radius-box",style:{borderRadius:t===9999?9999:t},"aria-hidden":"true"})}),e.jsx(m,{display:t===9999?"9999 px":`${t} px`})]}),r=()=>e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"38%"},children:"Token"}),e.jsx("th",{style:{width:"34%"},children:"Preview"}),e.jsx("th",{children:"size"})]})}),l=({children:i})=>e.jsx("div",{className:"usage-card",children:e.jsx("pre",{children:i})}),h=({number:i,title:n,subtitle:t,description:s,children:a})=>e.jsxs("section",{className:"section-card",children:[e.jsxs("header",{className:"section-card-head",children:[i!=null&&e.jsx("span",{className:"section-number",children:i}),e.jsxs("div",{className:"section-card-text",children:[e.jsxs("h3",{className:"section-title",children:[n,t&&e.jsxs("span",{className:"section-subtitle",children:[" · ",t]})]}),s&&e.jsx("p",{className:"section-desc",children:s})]})]}),e.jsx("div",{className:"section-card-body",children:a})]}),g=({id:i,children:n})=>e.jsx("h4",{id:i,className:"subsection-title",children:n}),L=()=>{const[i,n]=o.useState(u[0].id);return o.useEffect(()=>{if(typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(s=>{const a=s.filter(d=>d.isIntersecting).sort((d,c)=>d.target.getBoundingClientRect().top-c.target.getBoundingClientRect().top);a[0]&&n(a[0].target.id)},{rootMargin:"-25% 0px -65% 0px",threshold:0});return u.forEach(({id:s})=>{const a=document.getElementById(s);a&&t.observe(a)}),()=>t.disconnect()},[]),e.jsx("nav",{className:"units-toc","aria-label":"섹션 목차",children:e.jsx("ul",{children:u.map(({id:t,label:s})=>e.jsx("li",{children:e.jsx("a",{href:`#${t}`,className:i===t?"active":"",tabIndex:0,children:s})},t))})})};function j(i){return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Token/Units"}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,e.jsx("style",{children:`
.units-page {
  max-width: 980px;
  margin: 0 auto;
  padding: 24px 24px 48px;
  background: #FFFFFF;
  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #37383C;
  color-scheme: light;
}
.units-page > h2 {
  font-size: 28px;
  font-weight: 700;
  color: #171719;
  margin: 0 0 8px;
  padding-bottom: 12px;
  border-bottom: 2px solid #22C3BC;
}
.units-page > p.lead {
  font-size: 14px;
  color: #5A5C63;
  margin: 0 0 24px;
  line-height: 1.7;
}

/* ── ToC ── */
.units-toc {
  position: sticky;
  top: 0;
  z-index: 10;
  margin: 0 0 32px;
  padding: 8px 4px;
  background: #FFFFFF;
  border-bottom: 1px solid #E1E2E4;
}
.units-toc ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.units-toc a {
  display: inline-block;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #70737C;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.15s, color 0.15s;
}
.units-toc a:hover { background: #F4F4F5; color: #171719; }
.units-toc a:focus-visible {
  outline: 2px solid #22C3BC;
  outline-offset: 2px;
}
.units-toc a.active {
  background: #E9FBFA;
  color: #17827D;
}

/* ── Section Card ── */
.section-card {
  border: 1px solid #E1E2E4;
  border-radius: 12px;
  padding: 24px 28px;
  margin: 0 0 32px;
  background: #FFFFFF;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
}
.section-card-head {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding-left: 14px;
  position: relative;
  margin-bottom: 20px;
}
.section-card-head::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  width: 4px;
  border-radius: 2px;
  background: #22C3BC;
}
.section-number {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: #E9FBFA;
  color: #17827D;
  font-size: 13px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}
.section-card-text { flex: 1; min-width: 0; }
.section-title {
  font-size: 20px;
  font-weight: 700;
  color: #171719;
  margin: 0 0 4px;
}
.section-subtitle {
  font-size: 14px;
  font-weight: 500;
  color: #70737C;
}
.section-desc {
  font-size: 13px;
  color: #70737C;
  margin: 0;
  line-height: 1.6;
}
.subsection-title {
  scroll-margin-top: 80px;
  font-size: 14px;
  font-weight: 700;
  color: #171719;
  margin: 12px 0 8px;
}
.section-card-body > .subsection-title:first-child { margin-top: 0; }
.section-card-body > .subsection-title + .usage-card { margin-top: 0; }
.section-card-body > .subsection-title ~ .subsection-title { margin-top: 32px; }
/* anchor sections inside SectionCard (line/radius single-anchor case) */
.section-card[id], .units-page section[id] { scroll-margin-top: 64px; }

/* ── Usage Code ── */
.usage-card {
  background: linear-gradient(135deg, #FBFEFE 0%, #E9FBFA 100%);
  border: 1px solid #D4F7F6;
  border-radius: 10px;
  padding: 12px 16px;
  margin: 0 0 14px;
  overflow-x: auto;
}
.usage-card pre {
  margin: 0;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 12px;
  line-height: 1.7;
  color: #37383C;
  white-space: pre;
}

/* ── Token Table ── */
.units-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  table-layout: fixed;
}
.units-table thead th {
  text-align: left;
  padding: 10px 14px;
  font-weight: 600;
  color: #46474C;
  font-size: 12px;
  background: #F7F7F8;
  border-bottom: 2px solid #E1E2E4;
}
.units-table .token-row {
  cursor: pointer;
  transition: background 0.12s;
}
.units-table .token-row td {
  padding: 12px 14px;
  border-bottom: 1px solid #F4F4F5;
  vertical-align: middle;
}
.units-table .token-row:hover td { background: #F7FCFC; }
.units-table .token-row:active td { background: #E9FBFA; }
.units-table .token-row:focus { outline: none; }
.units-table .token-row:focus-visible {
  outline: 2px solid #22C3BC;
  outline-offset: -2px;
}

.name-cell { padding: 12px 14px; }
.name-label { font-size: 13px; font-weight: 600; color: #171719; margin-bottom: 4px; line-height: 1.3; }
.name-code {
  font-family: 'SF Mono', monospace;
  font-size: 11px;
  color: #989BA2;
  background: transparent;
  padding: 0;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  white-space: nowrap;
}
.value-cell { font-family: 'SF Mono', monospace; }
.value-cell .value-number {
  font-size: 14px;
  font-weight: 700;
  color: #171719;
}
.value-cell .value-unit {
  font-size: 12px;
  color: #989BA2;
  margin-left: 4px;
}
.preview-cell { padding-right: 8px !important; }

/* ── gap preview ── */
.gap-track {
  box-sizing: border-box;
  width: 180px;
  height: 36px;
  background: #F4F4F5;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 6px;
}
.gap-fill {
  height: 14px;
  background: #22C3BC;
  border-radius: 4px;
  min-width: 4px;
}

/* ── line preview ── */
.line-track {
  box-sizing: border-box;
  width: 200px;
  height: 28px;
  background: #FFFFFF;
  border: 1px solid #E1E2E4;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.line-stroke {
  flex: 1;
  background: #2C2E32;
}

/* ── height preview ── */
.height-track {
  display: flex;
  align-items: flex-end;
  height: 64px;
  border-bottom: 1px dashed #E1E2E4;
}
.height-fill {
  background: #E9FBFA;
  border: 1px solid #22C3BC;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.height-label {
  font-family: 'SF Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  color: #17827D;
}

/* ── icon size preview ── */
.icon-guide {
  width: 32px;
  height: 32px;
  background: #F4F4F5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── radius preview ── */
.radius-box {
  width: 60px;
  height: 60px;
  background: #E9FBFA;
  border: 1px solid #22C3BC;
}

/* ── Toast ── */
.units-toast {
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: #171719;
  color: #FFFFFF;
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  animation: units-toast-in 0.18s ease-out;
}
.units-toast code {
  background: rgba(255, 255, 255, 0.14);
  padding: 2px 8px;
  border-radius: 6px;
  font-family: 'SF Mono', monospace;
  font-size: 12px;
  color: #FFFFFF;
}
@keyframes units-toast-in {
  from { opacity: 0; transform: translate(-50%, 12px); }
  to   { opacity: 1; transform: translate(-50%, 0); }
}
`}),`
`,e.jsx(E,{children:e.jsxs("div",{className:"units-page",children:[e.jsx("h2",{children:"Units"}),e.jsxs("p",{className:"lead",children:["Figma ",e.jsx("code",{children:"units"})," 페이지와 1:1 매핑된 단위 토큰. 6개 그룹: gap(inner/outer), line, height, icon size, radius. 모든 값은 px 단위 (line.hairline 제외). ",e.jsx("strong",{children:"표의 어느 셀이든 클릭하면 토큰 경로가 복사됩니다."})]}),e.jsx(L,{}),e.jsxs(h,{number:"①",title:"gap, margin, padding",subtitle:"gap-inner · gap-outer",description:"컴포넌트 내부 갭(gap-inner)과 컴포넌트 외부 갭(gap-outer)을 분리하여 의도를 명확히 합니다.",children:[e.jsxs(g,{id:"gap-inner",children:["gap-inner — 버튼·카드 등 컴포넌트 ",e.jsx("strong",{children:"내부"})," 갭/패딩/마진"]}),e.jsx(l,{children:`import { gap } from '@/tokens/theme';

<View style={{ padding: gap.inner.medium, gap: gap.inner.small }}>
<Text>16px padding · 12px gap</Text>
</View>`}),e.jsxs("table",{className:"units-table",children:[e.jsx(r,{}),e.jsx("tbody",{children:F.map(n=>e.jsx(f,{...n},n.name))})]}),e.jsxs(g,{id:"gap-outer",children:["gap-outer — 섹션 등 컴포넌트 ",e.jsx("strong",{children:"외부"})," 갭/마진"]}),e.jsx(l,{children:`import { gap } from '@/tokens/theme';

<View style={{ marginVertical: gap.outer.large }}>  // 40px
<View style={{ gap: gap.outer.medium }}>            // 32px section gap`}),e.jsxs("table",{className:"units-table",children:[e.jsx(r,{}),e.jsx("tbody",{children:v.map(n=>e.jsx(f,{...n},n.name))})]})]}),e.jsx("section",{id:"line",children:e.jsxs(h,{number:"②",title:"line",subtitle:"border · underline · outline",description:"보더·언더라인·아웃라인 두께. Hairline은 device pixel ratio 기준 1물리픽셀 (CSS는 0.5px 또는 1px + transform scale로 표현).",children:[e.jsx(l,{children:`import { line } from '@/tokens/theme';

<View style={{ borderWidth: line.regular }} />  // 1px
<View style={{ borderWidth: line.bold }} />     // 2px

// Hairline (RN 0.5px 또는 StyleSheet.hairlineWidth)
<View style={{ borderWidth: StyleSheet.hairlineWidth }} />`}),e.jsxs("table",{className:"units-table",children:[e.jsx(r,{}),e.jsx("tbody",{children:C.map(n=>e.jsx(B,{...n},n.name))})]})]})}),e.jsxs(h,{number:"③",title:"height",subtitle:"콘텐츠·컴포넌트 높이 · 아이콘 크기",description:"버튼·탭·카드 등 컴포넌트 높이와 아이콘 크기 스케일. Preview 박스는 너비 120px 고정, height만 변하며 하단 베이스라인 정렬.",children:[e.jsx(g,{id:"height",children:"height — 콘텐츠·컴포넌트 높이"}),e.jsx(l,{children:`import { height } from '@/tokens/theme';

<View style={{ height: height.small }} />     // 36
<View style={{ height: height.medium }} />    // 40
<View style={{ height: height['2xlarge'] }} />// 56`}),e.jsxs("table",{className:"units-table",children:[e.jsx(r,{}),e.jsx("tbody",{children:N.map(n=>e.jsx(V,{...n},n.name))})]}),e.jsx(g,{id:"icon-size",children:"icon size — 아이콘 크기"}),e.jsx(l,{children:`import { Icon } from '@/components/Icon';
import { icon } from '@/tokens/theme';

<Icon name="Check" size={icon.small} />   // 16
<Icon name="Check" size={icon.medium} />  // 20
<Icon name="Check" size={icon.large} />   // 24
<Icon name="Check" size={icon.xlarge} />  // 32`}),e.jsxs("table",{className:"units-table",children:[e.jsx(r,{}),e.jsx("tbody",{children:S.map(n=>e.jsx(R,{...n},n.name))})]})]}),e.jsx("section",{id:"radius",children:e.jsxs(h,{number:"④",title:"radius",subtitle:"border radius",description:"모서리 반경. full(9999)은 원형으로 렌더링됩니다.",children:[e.jsx(l,{children:`import { radiusTokensV2 } from '@/tokens/theme';

<View style={{ borderRadius: radiusTokensV2.regular }} />  // 12 — Button
<View style={{ borderRadius: radiusTokensV2.medium }} />   // 16 — Card
<View style={{ borderRadius: radiusTokensV2.full }} />     // pill — Avatar`}),e.jsxs("table",{className:"units-table",children:[e.jsx(r,{}),e.jsx("tbody",{children:z.map(n=>e.jsx(M,{...n},n.name))})]})]})})]})})]})}function O(i={}){const{wrapper:n}={...w(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(j,{...i})}):j()}export{T as CheckIcon,f as GapRow,V as HeightRow,R as IconRow,B as LineRow,M as RadiusRow,h as SectionCard,r as SectionHead,m as SizeCell,g as SubsectionTitle,L as TableOfContents,k as ToastContext,E as ToastProvider,x as TokenCell,p as TokenRow,l as UsageBlock,O as default,F as gapInnerSteps,v as gapOuterSteps,N as heightSteps,S as iconSizeSteps,C as lineSteps,z as radiusSteps,u as tocItems};
