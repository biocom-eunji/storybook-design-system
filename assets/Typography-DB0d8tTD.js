import{j as e,M as l}from"./blocks-CF6kqcnP.js";import{useMDXComponents as o}from"./index-ukDLHecn.js";import"./iframe-CExKz_YG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhQdN83S.js";import"./index-4WY5UODG.js";const r="당신을 가장 잘 아는 바이오컴이 건강을 약속할게요.",a=[{name:"Title 1",token:"textStyle.title1",size:32,lineHeight:44,letterSpacing:-.81,weight:700,weightName:"Bold",usage:"서비스의 핵심 타이틀, 온보딩 메인 문구, 최상위 대제목"},{name:"Title 2",token:"textStyle.title2",size:28,lineHeight:38,letterSpacing:-.66,weight:700,weightName:"Bold",usage:"페이지 상단 헤더, 주요 섹션 대제목"},{name:"Title 3",token:"textStyle.title3",size:24,lineHeight:32,letterSpacing:-.55,weight:700,weightName:"Bold",usage:"카드/모달 타이틀, 하위 페이지 대제목"},{name:"Heading",token:"textStyle.heading",size:20,lineHeight:28,letterSpacing:-.24,weight:600,weightName:"SemiBold",usage:"소제목, 섹션 구분, 강조가 필요한 중간 타이틀"},{name:"Headline",token:"textStyle.headline",size:17,lineHeight:24,letterSpacing:0,weight:600,weightName:"SemiBold",usage:"리스트 헤더, 탭 섹션 제목, 강조 소제목"},{name:"Body 1",token:"textStyle.body1",size:16,lineHeight:24,letterSpacing:.09,weight:400,weightName:"Regular",usage:"일반적인 본문 텍스트, 상세 설명, 읽기 편한 긴 글"},{name:"Body 2",token:"textStyle.body2",size:15,lineHeight:22,letterSpacing:.14,weight:400,weightName:"Regular",usage:"보조 본문, 세부 설명, 부가 정보 텍스트"},{name:"Body 3",token:"textStyle.body3",size:16,lineHeight:24,letterSpacing:.09,weight:400,weightName:"Regular",usage:"본문 강조, Body 1과 동일 크기의 대체 스타일"},{name:"Label 1",token:"textStyle.label1",size:14,lineHeight:20,letterSpacing:.2,weight:500,weightName:"Medium",usage:"버튼 내 텍스트, 탭 메뉴, 클릭 요소 강조"},{name:"Label 2",token:"textStyle.label2",size:13,lineHeight:18,letterSpacing:.25,weight:500,weightName:"Medium",usage:"소형 버튼, 태그, 필터 칩 텍스트"},{name:"Caption",token:"textStyle.caption",size:12,lineHeight:16,letterSpacing:.3,weight:400,weightName:"Regular",usage:"이미지 캡션, 보조 설명, 유의사항, 날짜 등 작은 정보"}];function s(i){const n={h3:"h3",p:"p",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Design Tokens/Typography"}),`
`,`
`,`
`,e.jsx("style",{children:`
  .typo-page {
    max-width: 900px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #292A2D;
  }
  .typo-page h2.page-title {
    font-size: 28px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 8px;
    padding-bottom: 12px;
    border-bottom: 2px solid #22C3BC;
  }
  .typo-page > p.page-desc {
    font-size: 15px;
    color: #5A5C63;
    margin: 0 0 40px;
  }
  .typo-page h3 {
    font-size: 20px;
    font-weight: 700;
    color: #171719;
    margin: 48px 0 8px;
  }
  .typo-page h3 + p {
    font-size: 14px;
    color: #70737C;
    margin: 0 0 20px;
  }
  .font-family-card {
    background: #F7F7F8;
    border-radius: 16px;
    padding: 40px;
    text-align: center;
    margin: 0 0 48px;
  }
  .font-family-card .font-name {
    font-size: 40px;
    font-weight: 700;
    color: #171719;
    margin: 0 0 8px;
  }
  .font-family-card .font-desc {
    font-size: 14px;
    color: #70737C;
  }
  .spec-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    margin: 0 0 48px;
  }
  .spec-table thead {
    border-bottom: 2px solid #171719;
  }
  .spec-table th {
    text-align: left;
    padding: 10px 12px;
    font-weight: 600;
    color: #46474C;
    font-size: 13px;
  }
  .spec-table td {
    padding: 14px 12px;
    border-bottom: 1px solid #E1E2E4;
    color: #333438;
    vertical-align: top;
  }
  .spec-table tr:last-child td {
    border-bottom: none;
  }
  .spec-table .style-name {
    font-weight: 600;
    color: #171719;
    white-space: nowrap;
  }
  .spec-table .mono {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 13px;
    color: #5A5C63;
  }
  .spec-table .token-name {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 12px;
    color: #22C3BC;
    background: #E9FBF5;
    padding: 2px 8px;
    border-radius: 4px;
    white-space: nowrap;
  }
  .spec-table .usage-text {
    font-size: 13px;
    color: #70737C;
    line-height: 1.5;
  }
  .preview-section {
    margin: 0 0 48px;
  }
  .preview-item {
    display: flex;
    align-items: baseline;
    gap: 24px;
    padding: 20px 0;
    border-bottom: 1px solid #E1E2E4;
  }
  .preview-item:last-child {
    border-bottom: none;
  }
  .preview-label {
    min-width: 80px;
    font-size: 12px;
    font-weight: 600;
    color: #22C3BC;
    flex-shrink: 0;
  }
  .preview-text {
    color: #171719;
  }
  .font-family-card .download-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
    padding: 12px 28px;
    background-color: #22C3BC;
    color: #FFFFFF !important;
    font-size: 15px;
    font-weight: 600;
    border-radius: 12px;
    text-decoration: none;
    transition: background 0.15s;
  }
  .font-family-card .download-btn:hover {
    background-color: #1FADA7;
  }
  .font-family-card .download-btn:visited {
    color: #FFFFFF !important;
  }
  .section-divider {
    border: none;
    border-top: 1px solid #E1E2E4;
    margin: 48px 0;
  }
  .usage-card {
    background: linear-gradient(135deg, #FBFEFE 0%, #E9FBFA 100%);
    border: 1px solid #D4F7F6;
    border-radius: 12px;
    padding: 24px;
    margin: 0 0 48px;
    overflow-x: auto;
  }
  .usage-card pre {
    margin: 0;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 13px;
    line-height: 1.7;
    color: #37383C;
  }
  .usage-card .comment {
    color: #70737C;
  }
  .usage-card .keyword {
    color: #17827D;
  }
  .usage-card .string {
    color: #22C289;
  }
  .usage-card .token {
    color: #22C3BC;
  }
  .note-box {
    background: #FFF5CC;
    border-left: 4px solid #FFCE00;
    border-radius: 0 8px 8px 0;
    padding: 16px 20px;
    margin: 0 0 48px;
    font-size: 14px;
    color: #46474C;
    line-height: 1.7;
  }
  .note-box strong {
    color: #171719;
  }
`}),`
`,e.jsxs("div",{className:"typo-page",children:[e.jsx("h2",{className:"page-title",children:"Typography"}),e.jsx("p",{className:"page-desc",children:"바이오컴 서비스의 타이포그래피 시스템입니다. Pretendard Variable 글꼴을 기반으로 11개의 시맨틱 텍스트 스타일을 정의합니다."}),e.jsx(n.h3,{id:"font-family",children:"Font Family"}),e.jsx("p",{children:"바이오컴은 Pretendard Variable을 기본 글꼴로 사용합니다."}),e.jsxs("div",{className:"font-family-card",children:[e.jsx("p",{className:"font-name",children:"Pretendard Variable"}),e.jsx("p",{className:"font-name",style:{fontWeight:400,fontSize:28,color:"#5A5C63"},children:"프리텐다드 베리어블"}),e.jsx("p",{className:"font-desc",style:{marginTop:16},children:e.jsxs(n.p,{children:["가변 폰트(Variable Font)로, 하나의 파일에서 다양한 굵기(Weight)를 자유롭게 사용할 수 있습니다.",e.jsx("br",{}),`
iOS SF Pro · Android Roboto와 높은 호환성을 갖추고 있어 크로스 플랫폼에 적합합니다.`]})}),e.jsxs("a",{href:"https://cactus.tistory.com/306",target:"_blank",rel:"noopener noreferrer",className:"download-btn",style:{color:"#FFFFFF"},children:[e.jsx("span",{style:{fontSize:18,color:"#FFFFFF"},children:"↓"}),e.jsx("span",{style:{color:"#FFFFFF"},children:"Pretendard Variable 다운로드하기"})]})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(n.h3,{id:"text-styles",children:"Text Styles"}),e.jsx("p",{children:"피그마의 텍스트 스타일과 1:1 매칭되는 11개 시맨틱 토큰입니다. 컴포넌트에서 바로 적용할 수 있습니다."}),e.jsx("div",{className:"note-box",children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"React Native lineHeight 주의"}),e.jsx("br",{}),`
CSS의 `,e.jsx("code",{children:"lineHeight: 1.5"}),"는 폰트 크기의 1.5배이지만, React Native에서는 ",e.jsx("strong",{children:"절대 px 값"}),`입니다.
`,e.jsx("code",{children:"lineHeight: 1.5"}),`는 1.5px을 의미하여 글자가 겹칩니다.
아래 토큰은 모두 `,e.jsx("strong",{children:"절대 px 단위"}),"로 정의되어 있으므로 앱에 바로 적용 가능합니다."]})}),e.jsxs("table",{className:"spec-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"스타일"}),e.jsx("th",{children:"토큰"}),e.jsx("th",{children:"크기"}),e.jsx("th",{children:"행간 (px)"}),e.jsx("th",{children:"자간 (px)"}),e.jsx("th",{children:"굵기"}),e.jsx("th",{children:"용도"})]})}),e.jsx("tbody",{children:a.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"style-name",children:t.name}),e.jsx("td",{children:e.jsx("code",{className:"token-name",children:t.token})}),e.jsx("td",{className:"mono",children:t.size}),e.jsx("td",{className:"mono",children:t.lineHeight}),e.jsx("td",{className:"mono",children:t.letterSpacing}),e.jsxs("td",{className:"mono",children:[t.weightName," (",t.weight,")"]}),e.jsx("td",{className:"usage-text",children:t.usage})]},t.name))})]}),e.jsx("hr",{className:"section-divider"}),e.jsx(n.h3,{id:"preview",children:"Preview"}),e.jsx("p",{children:"각 스타일별 미리보기입니다."}),e.jsx("div",{className:"preview-section",children:a.map(t=>e.jsxs("div",{className:"preview-item",children:[e.jsxs("span",{className:"preview-label",children:[t.name,e.jsx("br",{}),e.jsxs("span",{style:{fontWeight:400,color:"#989BA2"},children:[t.size,"px"]})]}),e.jsx("span",{className:"preview-text",style:{fontSize:t.size,lineHeight:`${t.lineHeight}px`,letterSpacing:`${t.letterSpacing}px`,fontWeight:t.weight},children:r})]},t.name))}),e.jsx("hr",{className:"section-divider"}),e.jsx(n.h3,{id:"usage",children:"Usage"}),e.jsxs("p",{children:['피그마에서 "Title 1" 스타일을 적용하듯, 코드에서도 ',e.jsx("code",{children:"textStyle.title1"})," 하나로 적용합니다."]}),e.jsx("div",{className:"usage-card",children:e.jsxs("pre",{children:[e.jsxs(n.p,{children:[e.jsx("span",{className:"comment",children:"// theme.ts에서 import"}),`
`,`
`,e.jsx("span",{className:"keyword",children:"import"})," ","{ ",e.jsx("span",{className:"token",children:"textStyle"})," }"," ",e.jsx("span",{className:"keyword",children:"from"})," ",e.jsx("span",{className:"string",children:"'../tokens/theme'"}),";",`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx("span",{className:"comment",children:"// 시맨틱 스타일 한 번에 적용 (fontSize + fontWeight + lineHeight + letterSpacing)"}),`
`,`
`,"<",e.jsx("span",{className:"token",children:"Text"})," style=","{",e.jsx("span",{className:"token",children:"textStyle.title1"}),"}",">","서비스 핵심 타이틀","</",e.jsx("span",{className:"token",children:"Text"}),">",`
`,`
`,"<",e.jsx("span",{className:"token",children:"Text"})," style=","{",e.jsx("span",{className:"token",children:"textStyle.body1"}),"}",">","일반 본문 텍스트","</",e.jsx("span",{className:"token",children:"Text"}),">",`
`,`
`,"<",e.jsx("span",{className:"token",children:"Text"})," style=","{",e.jsx("span",{className:"token",children:"textStyle.caption"}),"}",">","보조 설명","</",e.jsx("span",{className:"token",children:"Text"}),">",`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx("span",{className:"comment",children:"// 색상 등 추가 스타일과 조합"}),`
`,`
`,"<",e.jsx("span",{className:"token",children:"Text"})," style=","{","[",e.jsx("span",{className:"token",children:"textStyle.headline"}),", ","{ ","color: ",e.jsx("span",{className:"token",children:"semanticColor.textBrand"})," }","]","}",">",`
`,`
`,"  ","브랜드 강조 소제목",`
`,`
`,"</",e.jsx("span",{className:"token",children:"Text"}),">",`
`]})]})})]})]})}function g(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{r as PREVIEW_TEXT,g as default,a as styles};
