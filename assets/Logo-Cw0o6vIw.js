import{j as o}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BnV8E0r4.js";import"./iframe-rdsxNJ7l.js";import{M as a}from"./blocks-DrXMzeDr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvUEBMMR.js";import"./index-GFEO7EU5.js";function l(i){const e={p:"p",...s(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"Token/App Logo"}),`
`,o.jsx("style",{children:`
  .logo-page {
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 64px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #37383C;
  }
  .logo-page h2.page-title {
    font-size: 28px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 8px;
    padding-bottom: 12px;
    border-bottom: 2px solid #22C3BC;
  }
  .logo-page > p.page-desc {
    font-size: 15px;
    color: #5A5C63;
    margin: 0 0 40px;
    line-height: 1.7;
  }
  .logo-page h3 {
    font-size: 20px;
    font-weight: 700;
    color: #171719;
    margin: 48px 0 4px;
  }
  .logo-page h3 + p {
    font-size: 14px;
    color: #70737C;
    margin: 0 0 20px;
  }
  .logo-page h4 {
    font-size: 16px;
    font-weight: 700;
    color: #171719;
    margin: 24px 0 8px;
  }

  /* ── Hero ── */
  .logo-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 48px;
    background: #F7F7F8;
    border-radius: 16px;
    margin-bottom: 48px;
  }
  .logo-hero img {
    height: 120px;
  }
  .logo-hero-text {
    font-size: 15px;
    color: #5A5C63;
    text-align: center;
    line-height: 1.7;
  }

  /* ── Logo Card Grid ── */
  .logo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 32px;
  }
  .logo-card {
    border: 1px solid #E1E2E4;
    border-radius: 12px;
    overflow: hidden;
  }
  .logo-card-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    min-height: 120px;
  }
  .logo-card-preview.light {
    background: #FFFFFF;
  }
  .logo-card-preview.dark {
    background: #171719;
  }
  .logo-card-preview img {
    max-height: 48px;
    max-width: 100%;
  }
  .logo-card-info {
    padding: 12px 16px;
    background: #F7F7F8;
    border-top: 1px solid #E1E2E4;
  }
  .logo-card-title {
    font-size: 13px;
    font-weight: 600;
    color: #171719;
    margin: 0 0 2px;
  }
  .logo-card-desc {
    font-size: 12px;
    color: #70737C;
    margin: 0;
  }

  /* ── Color Variant Grid ── */
  .color-variant-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 16px;
  }
  .color-variant-card {
    border-radius: 12px;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border: 1px solid #E1E2E4;
  }
  .color-variant-card.light {
    background: #FFFFFF;
  }
  .color-variant-card.dark {
    background: #171719;
    border-color: #37383C;
  }
  .color-variant-card img {
    height: 40px;
  }
  .color-variant-label {
    font-size: 12px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 4px;
  }
  .color-variant-label.on-light {
    background: #E9FBF5;
    color: #22C289;
  }
  .color-variant-label.on-dark {
    background: rgba(255,255,255,0.1);
    color: #A8F0EC;
  }

  /* ── Min Size ── */
  .min-size-row {
    display: flex;
    gap: 48px;
    align-items: flex-end;
    margin-bottom: 24px;
  }
  .min-size-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .min-size-label {
    font-size: 11px;
    font-weight: 600;
    color: #22C3BC;
    background: #E9FBF5;
    padding: 2px 8px;
    border-radius: 4px;
  }
  .min-size-bad {
    opacity: 0.35;
    position: relative;
  }
  .min-size-bad::after {
    content: '\\2716';
    position: absolute;
    top: -6px;
    right: -6px;
    color: #EF7676;
    font-size: 14px;
    font-weight: 700;
  }

  /* ── Clear Space ── */
  .clearspace-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #22C3BC;
    padding: 32px;
    border-radius: 12px;
    background: rgba(34,195,188,0.05);
    position: relative;
    margin-bottom: 8px;
  }
  .clearspace-box img {
    height: 48px;
  }
  .clearspace-label {
    font-size: 11px;
    color: #22C3BC;
    font-weight: 600;
  }

  /* ── Do & Don't ── */
  .dodont-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
  }
  .dodont-card {
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #E1E2E4;
  }
  .dodont-header {
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .dodont-header.do {
    background: #E9FBF5;
    color: #22C289;
  }
  .dodont-header.dont {
    background: #FFF0F0;
    color: #EF7676;
  }
  .dodont-body {
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
    background: #FFFFFF;
  }
  .dodont-body img {
    height: 40px;
  }
  .dodont-desc {
    padding: 8px 16px 12px;
    font-size: 12px;
    color: #70737C;
    background: #F7F7F8;
  }

  /* ── Download Table ── */
  .dl-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin-bottom: 32px;
  }
  .dl-table thead th {
    text-align: left;
    padding: 10px 14px;
    font-weight: 600;
    color: #46474C;
    font-size: 12px;
    background: #F7F7F8;
    border-bottom: 2px solid #E1E2E4;
  }
  .dl-table td {
    padding: 12px 14px;
    border-bottom: 1px solid #F4F4F5;
    vertical-align: middle;
  }
  .dl-table tr:hover td {
    background: #FBFEFE;
  }
  .dl-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 48px;
    border-radius: 8px;
  }
  .dl-preview.light {
    background: #FFFFFF;
    border: 1px solid #E1E2E4;
  }
  .dl-preview.dark {
    background: #171719;
  }
  .dl-preview img {
    max-height: 28px;
    max-width: 64px;
  }
  .dl-filename {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 12px;
    color: #5A5C63;
  }
  .dl-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 8px;
    border: 1px solid #E1E2E4;
    background: #FFFFFF;
    color: #171719;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
  }
  .dl-btn:hover {
    background: #F7F7F8;
    border-color: #C2C4C8;
  }
  .dl-btn:visited {
    color: #171719;
  }

  /* ── Section Divider ── */
  .section-divider {
    border: none;
    border-top: 1px solid #E1E2E4;
    margin: 48px 0;
  }
`}),`
`,o.jsxs("div",{className:"logo-page",children:[o.jsx("h2",{className:"page-title",children:"Logo"}),o.jsx("p",{className:"page-desc",children:o.jsx(e.p,{children:"biocom의 브랜드 아이덴티티를 담은 공식 로고 가이드입니다."})}),o.jsxs("div",{className:"logo-hero",children:[o.jsx("img",{src:"./Logo/biocom-symbol.svg",alt:"biocom 심볼 로고"}),o.jsx("p",{className:"logo-hero-text",children:o.jsxs(e.p,{children:["biocom의 브랜드 아이덴티티를 담은 공식 로고입니다.",o.jsx("br",{}),`
본 가이드를 준수하여 일관된 브랜드 경험을 만들어주세요.`]})})]}),o.jsx("h3",{children:"로고 구성"}),o.jsx("p",{children:"세 가지 로고 타입을 제공합니다."}),o.jsxs("div",{className:"logo-grid",children:[o.jsxs("div",{className:"logo-card",children:[o.jsx("div",{className:"logo-card-preview light",children:o.jsx("img",{src:"./Logo/biocom-symbol.svg",alt:"biocom 심볼 로고"})}),o.jsxs("div",{className:"logo-card-info",children:[o.jsx("p",{className:"logo-card-title",children:"Symbol"}),o.jsx("p",{className:"logo-card-desc",children:"파비콘, 앱 아이콘, 제한 공간. 최소 24px"})]})]}),o.jsxs("div",{className:"logo-card",children:[o.jsx("div",{className:"logo-card-preview light",children:o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"biocom 가로형 로고 (컬러)"})}),o.jsxs("div",{className:"logo-card-info",children:[o.jsx("p",{className:"logo-card-title",children:"Horizontal"}),o.jsx("p",{className:"logo-card-desc",children:"헤더, 내비게이션, 가로 레이아웃. 최소 높이 32px"})]})]}),o.jsxs("div",{className:"logo-card",children:[o.jsx("div",{className:"logo-card-preview light",children:o.jsx("img",{src:"./Logo/biocom-vertical-color.svg",alt:"biocom 세로형 로고 (컬러)"})}),o.jsxs("div",{className:"logo-card-info",children:[o.jsx("p",{className:"logo-card-title",children:"Vertical"}),o.jsx("p",{className:"logo-card-desc",children:"스플래시, 중앙 정렬, 세로 공간. 최소 높이 64px"})]})]})]}),o.jsx("hr",{className:"section-divider"}),o.jsx("h3",{children:"색상 변형 & 배경 규칙"}),o.jsx("p",{children:"배경에 따라 올바른 색상 버전을 선택하세요."}),o.jsx("h4",{children:"Horizontal"}),o.jsxs("div",{className:"color-variant-grid",children:[o.jsxs("div",{className:"color-variant-card light",children:[o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"biocom 가로형 로고 (컬러)"}),o.jsx("span",{className:"color-variant-label on-light",children:"Color — 밝은 배경"})]}),o.jsxs("div",{className:"color-variant-card dark",children:[o.jsx("img",{src:"./Logo/biocom-horizontal-white.svg",alt:"biocom 가로형 로고 (화이트)"}),o.jsx("span",{className:"color-variant-label on-dark",children:"White — 어두운 배경"})]}),o.jsxs("div",{className:"color-variant-card light",children:[o.jsx("img",{src:"./Logo/biocom-horizontal-black.svg",alt:"biocom 가로형 로고 (블랙)"}),o.jsx("span",{className:"color-variant-label on-light",children:"Black — 모노크롬"})]})]}),o.jsx("h4",{children:"Vertical"}),o.jsxs("div",{className:"color-variant-grid",children:[o.jsxs("div",{className:"color-variant-card light",children:[o.jsx("img",{src:"./Logo/biocom-vertical-color.svg",alt:"biocom 세로형 로고 (컬러)",style:{height:64}}),o.jsx("span",{className:"color-variant-label on-light",children:"Color — 밝은 배경"})]}),o.jsxs("div",{className:"color-variant-card dark",children:[o.jsx("img",{src:"./Logo/biocom-vertical-white.svg",alt:"biocom 세로형 로고 (화이트)",style:{height:64}}),o.jsx("span",{className:"color-variant-label on-dark",children:"White — 어두운 배경"})]}),o.jsxs("div",{className:"color-variant-card light",children:[o.jsx("img",{src:"./Logo/biocom-vertical-black.svg",alt:"biocom 세로형 로고 (블랙)",style:{height:64}}),o.jsx("span",{className:"color-variant-label on-light",children:"Black — 모노크롬"})]})]}),o.jsx("hr",{className:"section-divider"}),o.jsx("h3",{children:"최소 크기"}),o.jsx("p",{children:"가독성을 보장하기 위해 아래 최소 크기를 준수하세요."}),o.jsxs("div",{className:"min-size-row",children:[o.jsxs("div",{className:"min-size-item",children:[o.jsx("img",{src:"./Logo/biocom-symbol.svg",alt:"biocom 심볼 최소 크기",style:{height:24,width:24}}),o.jsx("span",{className:"min-size-label",children:"Symbol 24px"})]}),o.jsxs("div",{className:"min-size-item",children:[o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"biocom 가로형 최소 크기",style:{height:32}}),o.jsx("span",{className:"min-size-label",children:"Horizontal 높이 32px"})]}),o.jsxs("div",{className:"min-size-item",children:[o.jsx("img",{src:"./Logo/biocom-vertical-color.svg",alt:"biocom 세로형 최소 크기",style:{height:64}}),o.jsx("span",{className:"min-size-label",children:"Vertical 높이 64px"})]})]}),o.jsxs("div",{style:{display:"flex",gap:48,alignItems:"flex-end",marginBottom:24},children:[o.jsxs("div",{className:"min-size-item",children:[o.jsx("div",{className:"min-size-bad","aria-label":"잘못된 사용 예시: 너무 작은 심볼",children:o.jsx("img",{src:"./Logo/biocom-symbol.svg",alt:"너무 작은 심볼 (판독 불가)",style:{height:12,width:12}})}),o.jsx("span",{style:{fontSize:11,color:"#EF7676",fontWeight:600},children:"판독 불가"})]}),o.jsxs("div",{className:"min-size-item",children:[o.jsx("div",{className:"min-size-bad","aria-label":"잘못된 사용 예시: 너무 작은 가로형",children:o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"너무 작은 가로형 (판독 불가)",style:{height:14}})}),o.jsx("span",{style:{fontSize:11,color:"#EF7676",fontWeight:600},children:"판독 불가"})]})]}),o.jsx("hr",{className:"section-divider"}),o.jsx("h3",{children:"Clear Space (여백 규칙)"}),o.jsx("p",{children:"로고 주변에 최소 여백(심볼 높이의 1/2)을 확보하세요. 이 영역 안에는 다른 요소를 배치하지 마세요."}),o.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center",marginBottom:8},children:[o.jsxs("div",{children:[o.jsx("div",{className:"clearspace-box",children:o.jsx("img",{src:"./Logo/biocom-symbol.svg",alt:"biocom 심볼 Clear Space 예시"})}),o.jsx("p",{className:"clearspace-label",children:"여백 = 심볼 높이의 1/2"})]}),o.jsxs("div",{children:[o.jsx("div",{className:"clearspace-box",children:o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"biocom 가로형 Clear Space 예시",style:{height:32}})}),o.jsx("p",{className:"clearspace-label",children:"여백 = 로고 높이의 1/2"})]})]}),o.jsx("hr",{className:"section-divider"}),o.jsx("h3",{children:"Do & Don't"}),o.jsx("p",{children:"로고의 일관성을 유지하기 위해 아래 규칙을 준수하세요."}),o.jsxs("div",{className:"dodont-grid",children:[o.jsxs("div",{className:"dodont-card","aria-label":"올바른 사용 예시",children:[o.jsx("div",{className:"dodont-header do",children:"✅ 원본 비율 유지"}),o.jsx("div",{className:"dodont-body",children:o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"올바른 비율"})}),o.jsx("div",{className:"dodont-desc",children:"제공된 SVG를 그대로 사용"})]}),o.jsxs("div",{className:"dodont-card","aria-label":"잘못된 사용 예시",children:[o.jsx("div",{className:"dodont-header dont",children:"❌ 비율 왜곡"}),o.jsx("div",{className:"dodont-body",children:o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"왜곡된 비율",style:{height:40,transform:"scaleX(1.5)"}})}),o.jsx("div",{className:"dodont-desc",children:"가로/세로 비율을 임의로 변경하지 마세요"})]})]}),o.jsxs("div",{className:"dodont-grid",children:[o.jsxs("div",{className:"dodont-card","aria-label":"올바른 사용 예시",children:[o.jsx("div",{className:"dodont-header do",children:"✅ 적절한 배경 대비"}),o.jsx("div",{className:"dodont-body",style:{background:"#171719"},children:o.jsx("img",{src:"./Logo/biocom-horizontal-white.svg",alt:"다크 배경에 화이트 로고"})}),o.jsx("div",{className:"dodont-desc",children:"White 로고는 어두운 배경에서 사용"})]}),o.jsxs("div",{className:"dodont-card","aria-label":"잘못된 사용 예시",children:[o.jsx("div",{className:"dodont-header dont",children:"❌ 대비 부족"}),o.jsx("div",{className:"dodont-body",children:o.jsx("img",{src:"./Logo/biocom-horizontal-white.svg",alt:"밝은 배경에 화이트 로고 (대비 부족)",style:{opacity:.15}})}),o.jsx("div",{className:"dodont-desc",children:"White 로고를 밝은 배경에 사용하면 안 됩니다"})]})]}),o.jsxs("div",{className:"dodont-grid",children:[o.jsxs("div",{className:"dodont-card","aria-label":"올바른 사용 예시",children:[o.jsx("div",{className:"dodont-header do",children:"✅ Clear Space 준수"}),o.jsx("div",{className:"dodont-body",children:o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"여백이 충분한 로고"})}),o.jsx("div",{className:"dodont-desc",children:"로고 주변에 충분한 여백 확보"})]}),o.jsxs("div",{className:"dodont-card","aria-label":"잘못된 사용 예시",children:[o.jsx("div",{className:"dodont-header dont",children:"❌ 회전/기울임"}),o.jsx("div",{className:"dodont-body",children:o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"회전된 로고",style:{height:40,transform:"rotate(-15deg)"}})}),o.jsx("div",{className:"dodont-desc",children:"로고를 회전하거나 기울이지 마세요"})]})]}),o.jsxs("div",{className:"dodont-grid",children:[o.jsxs("div",{className:"dodont-card","aria-label":"올바른 사용 예시",children:[o.jsx("div",{className:"dodont-header do",children:"✅ 제공된 색상 버전 사용"}),o.jsx("div",{className:"dodont-body",children:o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"공식 컬러 로고"})}),o.jsx("div",{className:"dodont-desc",children:"Color / White / Black 3종만 사용"})]}),o.jsxs("div",{className:"dodont-card","aria-label":"잘못된 사용 예시",children:[o.jsx("div",{className:"dodont-header dont",children:"❌ 효과 추가 금지"}),o.jsx("div",{className:"dodont-body",children:o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"그림자가 추가된 로고",style:{height:40,filter:"drop-shadow(4px 4px 8px rgba(0,0,0,0.4))"}})}),o.jsx("div",{className:"dodont-desc",children:"그림자, 글로우, 외곽선 등 효과를 추가하지 마세요"})]})]}),o.jsx("hr",{className:"section-divider"}),o.jsx("h3",{children:"다운로드"}),o.jsx("p",{children:"공식 로고 에셋을 SVG 포맷으로 다운로드할 수 있습니다."}),o.jsxs("table",{className:"dl-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{scope:"col",style:{width:"20%"},children:"로고 타입"}),o.jsx("th",{scope:"col",style:{width:"15%"},children:"미리보기"}),o.jsx("th",{scope:"col",style:{width:"35%"},children:"파일명"}),o.jsx("th",{scope:"col",style:{width:"20%"},children:"다운로드"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Symbol"}),o.jsx("td",{children:o.jsx("div",{className:"dl-preview light",children:o.jsx("img",{src:"./Logo/biocom-symbol.svg",alt:"biocom 심볼"})})}),o.jsx("td",{children:o.jsx("span",{className:"dl-filename",children:"biocom-symbol.svg"})}),o.jsx("td",{children:o.jsx("a",{href:"./Logo/biocom-symbol.svg",download:"biocom-symbol.svg",className:"dl-btn","aria-label":"biocom 심볼 SVG 다운로드",children:"↓ SVG"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Horizontal Color"}),o.jsx("td",{children:o.jsx("div",{className:"dl-preview light",children:o.jsx("img",{src:"./Logo/biocom-horizontal-color.svg",alt:"biocom 가로형 (컬러)"})})}),o.jsx("td",{children:o.jsx("span",{className:"dl-filename",children:"biocom-horizontal-color.svg"})}),o.jsx("td",{children:o.jsx("a",{href:"./Logo/biocom-horizontal-color.svg",download:"biocom-horizontal-color.svg",className:"dl-btn","aria-label":"biocom 가로형 컬러 로고 SVG 다운로드",children:"↓ SVG"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Horizontal White"}),o.jsx("td",{children:o.jsx("div",{className:"dl-preview dark",children:o.jsx("img",{src:"./Logo/biocom-horizontal-white.svg",alt:"biocom 가로형 (화이트)"})})}),o.jsx("td",{children:o.jsx("span",{className:"dl-filename",children:"biocom-horizontal-white.svg"})}),o.jsx("td",{children:o.jsx("a",{href:"./Logo/biocom-horizontal-white.svg",download:"biocom-horizontal-white.svg",className:"dl-btn","aria-label":"biocom 가로형 화이트 로고 SVG 다운로드",children:"↓ SVG"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Horizontal Black"}),o.jsx("td",{children:o.jsx("div",{className:"dl-preview light",children:o.jsx("img",{src:"./Logo/biocom-horizontal-black.svg",alt:"biocom 가로형 (블랙)"})})}),o.jsx("td",{children:o.jsx("span",{className:"dl-filename",children:"biocom-horizontal-black.svg"})}),o.jsx("td",{children:o.jsx("a",{href:"./Logo/biocom-horizontal-black.svg",download:"biocom-horizontal-black.svg",className:"dl-btn","aria-label":"biocom 가로형 블랙 로고 SVG 다운로드",children:"↓ SVG"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Vertical Color"}),o.jsx("td",{children:o.jsx("div",{className:"dl-preview light",children:o.jsx("img",{src:"./Logo/biocom-vertical-color.svg",alt:"biocom 세로형 (컬러)"})})}),o.jsx("td",{children:o.jsx("span",{className:"dl-filename",children:"biocom-vertical-color.svg"})}),o.jsx("td",{children:o.jsx("a",{href:"./Logo/biocom-vertical-color.svg",download:"biocom-vertical-color.svg",className:"dl-btn","aria-label":"biocom 세로형 컬러 로고 SVG 다운로드",children:"↓ SVG"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Vertical White"}),o.jsx("td",{children:o.jsx("div",{className:"dl-preview dark",children:o.jsx("img",{src:"./Logo/biocom-vertical-white.svg",alt:"biocom 세로형 (화이트)"})})}),o.jsx("td",{children:o.jsx("span",{className:"dl-filename",children:"biocom-vertical-white.svg"})}),o.jsx("td",{children:o.jsx("a",{href:"./Logo/biocom-vertical-white.svg",download:"biocom-vertical-white.svg",className:"dl-btn","aria-label":"biocom 세로형 화이트 로고 SVG 다운로드",children:"↓ SVG"})})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Vertical Black"}),o.jsx("td",{children:o.jsx("div",{className:"dl-preview light",children:o.jsx("img",{src:"./Logo/biocom-vertical-black.svg",alt:"biocom 세로형 (블랙)"})})}),o.jsx("td",{children:o.jsx("span",{className:"dl-filename",children:"biocom-vertical-black.svg"})}),o.jsx("td",{children:o.jsx("a",{href:"./Logo/biocom-vertical-black.svg",download:"biocom-vertical-black.svg",className:"dl-btn","aria-label":"biocom 세로형 블랙 로고 SVG 다운로드",children:"↓ SVG"})})]})]})]})]})]})}function x(i={}){const{wrapper:e}={...s(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(l,{...i})}):l(i)}export{x as default};
