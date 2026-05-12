import{R as e,V as a,s as re,r as U}from"./iframe-rdsxNJ7l.js";import{S as ne,P as ie}from"./index-CkrO8KnR.js";import{C as le}from"./CircularProgress-gytsOpyk.js";import{c as s,M as ce,T as u,s as r,r as h,a as p,f as C,j as oe,u as X,m as J,v as K,w as Q,x as Y,y as Z}from"./theme-KAxj7l-q.js";import{I as i}from"./Icon-DGfD0Qtj.js";import{L as j}from"./LevelIndicator-CpsZH9Wv.js";import{P as G}from"./ProgressBar-B7qrEQHU.js";import{S as m,b as se,a as me,D as b,C as S,R as ee}from"./storyHelpers-D5HpvNsw.js";import{T as E}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./jsx-runtime-u17CrQMm.js";import"./index-0_7wxnUT.js";const te={violet:s.accentViolet,purple:s.accentPurple,green:s.accentGreen,lightBlue:s.accentLightBlue,blue:s.accentViolet,mint:s.accentMint,red:s.accentRed},O=U.createContext(te.violet);function y(){return U.useContext(O)}function ae({accent:n,onPress:l,children:o}){const d=te[n],g=e.createElement(a,{style:c.container},o);return l?e.createElement(O.Provider,{value:d},e.createElement(ce,{onPress:l,accessibilityRole:"button",style:({pressed:w})=>[w&&c.pressed]},g)):e.createElement(O.Provider,{value:d},g)}function de({icon:n,title:l}){const o=y(),d=e.isValidElement(n)?e.cloneElement(n,{color:o}):n;return e.createElement(a,{style:c.header,accessibilityRole:"header"},d,e.createElement(u,{style:[c.headerTitle,{color:o}]},l))}function pe({current:n,total:l,unit:o}){const d=y(),g=l?`${l}${o??""} 중 ${n}${o??""} 달성`:`${n}${o??""}`;return e.createElement(a,{style:c.countRow,accessibilityLabel:g},e.createElement(u,{style:[c.bigNumber,{color:d}]},n),l!=null?e.createElement(u,{style:c.unitText},o?` ${o}`:""," / ",l,o??""):o&&e.createElement(u,{style:c.unitText}," ",o))}function ue({items:n}){const l=y(),o=n.map(d=>`${d.label} ${d.value}${d.unit??""}`).join(", ");return e.createElement(a,{style:c.bigScoreWrap,accessibilityLabel:o},n.map((d,g)=>e.createElement(a,{key:g,style:c.bigScoreRow},e.createElement(u,{style:[c.bigNumber,g===0?{color:l}:{color:s.textSecondary}]},d.value),d.unit&&e.createElement(u,{style:c.unitText}," ",d.unit),e.createElement(u,{style:[c.unitText,{textAlign:"right",flex:1}]},d.label))))}function ge({label:n,value:l}){const o=y();return e.createElement(a,{style:c.labelRow,accessibilityLabel:`${n} ${l}`},e.createElement(u,{style:c.labelText},n," "),e.createElement(u,{style:[c.labelValue,{color:o}]},l))}function ye({hours:n,minutes:l}){const o=y(),d=l!=null?`${n}시간 ${l}분`:`${n}시간`;return e.createElement(a,{style:c.durationRow,accessibilityLabel:d},e.createElement(u,{style:[c.bigNumber,{color:o}]},n),e.createElement(u,{style:c.unitText}," 시간"),l!=null&&e.createElement(e.Fragment,null,e.createElement(u,{style:[c.bigNumber,{color:o,marginLeft:r.medium}]},l),e.createElement(u,{style:c.unitText}," 분")))}function Ce({progress:n=1}){const l=y();return e.createElement(a,{style:c.completionWrap,accessibilityLabel:`${Math.round(n*100)}% 완료`},e.createElement(le,{progress:n,size:36,strokeWidth:4,strokeColor:l,showLabel:!1}))}const Se="M10.97 16.47l-3.47-3.47a.75.75 0 0 1 1.06-1.06L11.5 14.88l5.44-5.44a.75.75 0 0 1 1.06 1.06l-6 6a.75.75 0 0 1-1.03.03z";function Ee({total:n,completed:l}){const o=y(),d=`${n}개 중 ${l}개 완료`;return e.createElement(a,{style:c.checkListRow,accessibilityLabel:d,accessibilityRole:"image"},Array.from({length:n},(g,w)=>{const q=w<l;return e.createElement(a,{key:w,style:[c.checkBox,q?{backgroundColor:o}:{backgroundColor:s.backgroundDisabled}]},q&&e.createElement(ne,{width:20,height:20,viewBox:"0 0 24 24"},e.createElement(ie,{d:Se,fill:s.iconOnColor})))}))}const t=Object.assign(ae,{Header:de,Count:pe,BigScore:ue,Label:ge,Duration:ye,CompletionCheck:Ce,CheckList:Ee}),he=6,c=re.create({container:{backgroundColor:s.backgroundPrimary,borderRadius:h.large,borderWidth:1,borderColor:s.borderDefault,paddingVertical:r.large,paddingHorizontal:r.xlarge,gap:r.medium},pressed:{opacity:oe.pressOpacity},header:{flexDirection:"row",alignItems:"center",gap:he},headerTitle:{fontSize:p.label1.fontSize,fontWeight:C.medium,lineHeight:p.label1.lineHeight,letterSpacing:p.label1.letterSpacing},countRow:{flexDirection:"row",alignItems:"baseline"},bigNumber:{fontSize:p.title3.fontSize,fontWeight:C.semibold,letterSpacing:p.title3.letterSpacing},unitText:{fontSize:p.label1.fontSize,fontWeight:C.medium,lineHeight:p.label1.lineHeight,letterSpacing:p.label1.letterSpacing,color:s.textSecondary},bigScoreWrap:{gap:r.xsmall},bigScoreRow:{flexDirection:"row",alignItems:"baseline"},labelRow:{flexDirection:"row",alignItems:"baseline"},labelText:{fontSize:p.title3.fontSize,fontWeight:C.semibold,color:s.textPrimary,letterSpacing:p.title3.letterSpacing},labelValue:{fontSize:p.title3.fontSize,fontWeight:C.semibold,letterSpacing:p.title3.letterSpacing},durationRow:{flexDirection:"row",alignItems:"baseline"},completionWrap:{alignSelf:"flex-start"},checkListRow:{flexDirection:"row",gap:r.small},checkBox:{width:36,height:36,borderRadius:h.xsmall,alignItems:"center",justifyContent:"center"}});ae.__docgenInfo={description:"",methods:[],displayName:"StatCardRoot",props:{accent:{required:!0,tsType:{name:"union",raw:"'violet' | 'purple' | 'green' | 'lightBlue' | 'blue' | 'mint' | 'red'",elements:[{name:"literal",value:"'violet'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'green'"},{name:"literal",value:"'lightBlue'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'mint'"},{name:"literal",value:"'red'"}]},description:"액센트 컬러"},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"카드 클릭 핸들러 (없으면 표시 전용)"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"빌딩 블록 children"}}};const we={violet:K[60],purple:Z[40],green:Y[45],lightBlue:Q[50],blue:K[50],mint:J[45],red:X[60]},Be={title:"Data Display/StatCard",component:t,argTypes:{accent:{control:"select",options:["violet","purple","green","lightBlue","blue","mint","red"],description:"액센트 컬러"}},tags:["autodocs"]},x={render:n=>e.createElement(a,{style:{maxWidth:200}},e.createElement(t,{accent:n.accent||"violet"},e.createElement(t.Header,{icon:e.createElement(i,{name:"activity",style:"mini",size:16}),title:"목표"}),e.createElement(t.Count,{current:3,total:10,unit:"개"})))},v={name:"Default (Header + Count)",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"Default",description:"최소 구성: Header + Count 블록 조합"},e.createElement(a,{style:{maxWidth:200}},e.createElement(t,{accent:"violet"},e.createElement(t.Header,{icon:e.createElement(i,{name:"activity",style:"mini",size:16}),title:"목표"}),e.createElement(t.Count,{current:3,total:10,unit:"개"})))))},k={name:"BigScore 블록",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"BigScore",description:"여러 점수를 세로로 나열합니다. 첫 번째 행만 accent 색상, 나머지는 보조색입니다."},e.createElement(a,{style:{maxWidth:200}},e.createElement(t,{accent:"purple"},e.createElement(t.Header,{icon:e.createElement(i,{name:"beauty-score",style:"mini",size:16}),title:"뷰티 종합 점수"}),e.createElement(t.BigScore,{items:[{value:50,unit:"점",label:"이너"},{value:40,unit:"점",label:"아우터"}]})))))},f={name:"Label 블록",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"Label",description:"레이블 + 강조 값 형태. value는 accent 색상으로 강조됩니다."},e.createElement(a,{style:{maxWidth:200}},e.createElement(t,{accent:"green"},e.createElement(t.Header,{icon:e.createElement(i,{name:"meal",style:"mini",size:16}),title:"식단"}),e.createElement(t.Label,{label:"점수",value:"좋음"})))))},V={name:"Duration 블록",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"Duration",description:"시간 + 분 형태로 시간을 표시합니다."},e.createElement(ee,{gap:r.large,wrap:!0,align:"flex-start"},e.createElement(a,{style:{width:200}},e.createElement(t,{accent:"blue"},e.createElement(t.Header,{icon:e.createElement(i,{name:"fasting",style:"mini",size:16}),title:"간헐적 단식"}),e.createElement(t.Duration,{hours:11,minutes:30}))),e.createElement(a,{style:{width:200}},e.createElement(t,{accent:"mint"},e.createElement(t.Header,{icon:e.createElement(i,{name:"sleep",style:"mini",size:16}),title:"수면"}),e.createElement(t.Duration,{hours:5}))))))},z={name:"CompletionCheck 블록",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"CompletionCheck",description:"CircularProgress 기반 원형 진행률을 표시합니다. accent 색상이 자동 적용됩니다."},e.createElement(ee,{gap:r.large,wrap:!0,align:"flex-start"},e.createElement(a,{style:{width:200}},e.createElement(t,{accent:"mint"},e.createElement(t.Header,{icon:e.createElement(i,{name:"sleep",style:"mini",size:16}),title:"수면"}),e.createElement(t.Duration,{hours:5}),e.createElement(t.CompletionCheck,{progress:.63}))),e.createElement(a,{style:{width:200}},e.createElement(t,{accent:"blue"},e.createElement(t.Header,{icon:e.createElement(i,{name:"fasting",style:"mini",size:16}),title:"간헐적 단식"}),e.createElement(t.Duration,{hours:11,minutes:30}),e.createElement(t.CompletionCheck,{progress:.85}))))))},H={name:"CheckList 블록",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"CheckList",description:"네모 칸으로 완료 상태를 시각화합니다. 인터랙션 없는 표시 전용입니다."},e.createElement(a,{style:{maxWidth:200}},e.createElement(t,{accent:"lightBlue"},e.createElement(t.Header,{icon:e.createElement(i,{name:"supplement",style:"mini",size:16}),title:"영양제"}),e.createElement(t.Count,{current:2,total:3,unit:"개"}),e.createElement(t.CheckList,{total:3,completed:2})))))},L={name:"LevelIndicator 조합",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"LevelIndicator 조합",description:"기존 LevelIndicator 컴포넌트를 children으로 배치하여 식단 카드를 구성합니다."},e.createElement(a,{style:{maxWidth:200}},e.createElement(t,{accent:"green"},e.createElement(t.Header,{icon:e.createElement(i,{name:"meal",style:"mini",size:16}),title:"식단"}),e.createElement(t.Label,{label:"점수",value:"좋음"}),e.createElement(j,{current:"great"})))))},D={name:"ProgressBar 조합",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"ProgressBar 조합",description:"기존 ProgressBar 컴포넌트를 children으로 배치하여 활동 카드를 구성합니다."},e.createElement(a,{style:{maxWidth:200}},e.createElement(t,{accent:"red"},e.createElement(t.Header,{icon:e.createElement(i,{name:"activity",style:"mini",size:16}),title:"활동"}),e.createElement(t.Count,{current:483,unit:"Kcal"}),e.createElement(G,{progress:.6,size:"small",color:"error"})))))},W={name:"Accent 팔레트",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"Accent 팔레트",description:"7가지 accent 컬러를 한 화면에 나열합니다."},e.createElement(a,{style:{flexDirection:"row",flexWrap:"wrap",gap:r.medium}},Object.keys(we).map(n=>e.createElement(a,{key:n,style:{width:170}},e.createElement(se,{gap:r.xsmall},e.createElement(me,null,n),e.createElement(t,{accent:n},e.createElement(t.Header,{icon:e.createElement(i,{name:"activity",style:"mini",size:16}),title:n}),e.createElement(t.Count,{current:42,unit:"pt"}))))))))},I={name:"예시: 목표",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"목표 카드",description:"Figma 디자인의 '목표' 카드 재현"},e.createElement(a,{style:{width:173}},e.createElement(t,{accent:"violet"},e.createElement(t.Header,{icon:e.createElement(i,{name:"activity",style:"mini",size:16}),title:"목표"}),e.createElement(t.Count,{current:3,total:10,unit:"개"})))))},B={name:"예시: 뷰티 종합 점수",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"뷰티 종합 점수 카드",description:"Figma 디자인의 '뷰티 종합 점수' 카드 재현"},e.createElement(a,{style:{width:170}},e.createElement(t,{accent:"purple"},e.createElement(t.Header,{icon:e.createElement(i,{name:"beauty-score",style:"mini",size:16}),title:"뷰티 종합 점수"}),e.createElement(t.BigScore,{items:[{value:50,unit:"점",label:"이너"},{value:40,unit:"점",label:"아우터"}]})))))},R={name:"예시: 식단",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"식단 카드",description:"Figma 디자인의 '식단' 카드 재현 (LevelIndicator 조합)"},e.createElement(a,{style:{width:173}},e.createElement(t,{accent:"green"},e.createElement(t.Header,{icon:e.createElement(i,{name:"meal",style:"mini",size:16}),title:"식단"}),e.createElement(t.Label,{label:"점수",value:"좋음"}),e.createElement(j,{current:"great"})))))},T={name:"예시: 영양제",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"영양제 카드",description:"Figma 디자인의 '영양제' 카드 재현 (CheckList 블록)"},e.createElement(a,{style:{width:170}},e.createElement(t,{accent:"lightBlue"},e.createElement(t.Header,{icon:e.createElement(i,{name:"supplement",style:"mini",size:16}),title:"영양제"}),e.createElement(t.Count,{current:2,total:3,unit:"개"}),e.createElement(t.CheckList,{total:3,completed:2})))))},P={name:"예시: 간헐적 단식",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"간헐적 단식 카드",description:"Figma 디자인의 '간헐적 단식' 카드 재현 (Duration + CompletionCheck)"},e.createElement(a,{style:{width:173}},e.createElement(t,{accent:"blue"},e.createElement(t.Header,{icon:e.createElement(i,{name:"fasting",style:"mini",size:16}),title:"간헐적 단식"}),e.createElement(t.Duration,{hours:11,minutes:30}),e.createElement(t.CompletionCheck,{progress:1})))))},$={name:"예시: 수면",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"수면 카드",description:"Figma 디자인의 '수면' 카드 재현 (Duration + CompletionCheck)"},e.createElement(a,{style:{width:170}},e.createElement(t,{accent:"mint"},e.createElement(t.Header,{icon:e.createElement(i,{name:"sleep",style:"mini",size:16}),title:"수면"}),e.createElement(t.Duration,{hours:5}),e.createElement(t.CompletionCheck,{progress:1})))))},A={name:"예시: 활동",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"활동 카드",description:"Figma 디자인의 '활동' 카드 재현 (Count + ProgressBar 조합)"},e.createElement(a,{style:{width:173}},e.createElement(t,{accent:"red"},e.createElement(t.Header,{icon:e.createElement(i,{name:"activity",style:"mini",size:16}),title:"활동"}),e.createElement(t.Count,{current:483,unit:"Kcal"}),e.createElement(G,{progress:.6,size:"small",color:"error"})))))},F={name:"대시보드 그리드",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"대시보드 그리드",description:"모바일 375px 뷰포트 기준, 2열 그리드에 7개 카드를 배치합니다."},e.createElement(a,{style:{width:375,paddingHorizontal:r.large,flexDirection:"row",flexWrap:"wrap",gap:r.medium}},e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"violet"},e.createElement(t.Header,{icon:e.createElement(i,{name:"activity",style:"mini",size:16}),title:"목표"}),e.createElement(t.Count,{current:3,total:10,unit:"개"}))),e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"purple"},e.createElement(t.Header,{icon:e.createElement(i,{name:"beauty-score",style:"mini",size:16}),title:"뷰티 종합 점수"}),e.createElement(t.BigScore,{items:[{value:50,unit:"점",label:"이너"},{value:40,unit:"점",label:"아우터"}]}))),e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"green"},e.createElement(t.Header,{icon:e.createElement(i,{name:"meal",style:"mini",size:16}),title:"식단"}),e.createElement(t.Label,{label:"점수",value:"좋음"}),e.createElement(j,{current:"great"}))),e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"lightBlue"},e.createElement(t.Header,{icon:e.createElement(i,{name:"supplement",style:"mini",size:16}),title:"영양제"}),e.createElement(t.Count,{current:2,total:3,unit:"개"}),e.createElement(t.CheckList,{total:3,completed:2}))),e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"blue"},e.createElement(t.Header,{icon:e.createElement(i,{name:"fasting",style:"mini",size:16}),title:"간헐적 단식"}),e.createElement(t.Duration,{hours:11,minutes:30}),e.createElement(t.CompletionCheck,{progress:1}))),e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"mint"},e.createElement(t.Header,{icon:e.createElement(i,{name:"sleep",style:"mini",size:16}),title:"수면"}),e.createElement(t.Duration,{hours:5}),e.createElement(t.CompletionCheck,{progress:1}))),e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"red"},e.createElement(t.Header,{icon:e.createElement(i,{name:"activity",style:"mini",size:16}),title:"활동"}),e.createElement(t.Count,{current:483,unit:"Kcal"}),e.createElement(G,{progress:.6,size:"small",color:"error"}))))))},N={name:"실전 예시",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"실전 예시",description:"건강 대시보드에서의 StatCard 2열 그리드 활용 예시입니다."},e.createElement(a,{style:{maxWidth:375,padding:r.large,backgroundColor:s.backgroundSecondary,borderRadius:h.large,gap:r.large}},e.createElement(u,{style:{fontSize:p.heading.fontSize,fontWeight:p.heading.fontWeight,lineHeight:p.heading.lineHeight,color:s.textPrimary}},"오늘의 건강"),e.createElement(a,{style:{flexDirection:"row",flexWrap:"wrap",gap:r.medium}},e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"violet"},e.createElement(t.Header,{icon:e.createElement(i,{name:"activity",style:"mini",size:16}),title:"목표"}),e.createElement(t.Count,{current:3,total:10,unit:"개"}))),e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"green"},e.createElement(t.Header,{icon:e.createElement(i,{name:"meal",style:"mini",size:16}),title:"식단"}),e.createElement(t.Label,{label:"점수",value:"좋음"}))),e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"mint"},e.createElement(t.Header,{icon:e.createElement(i,{name:"sleep",style:"mini",size:16}),title:"수면"}),e.createElement(t.Duration,{hours:7,minutes:30}))),e.createElement(a,{style:{flex:1,minWidth:150}},e.createElement(t,{accent:"red"},e.createElement(t.Header,{icon:e.createElement(i,{name:"activity",style:"mini",size:16}),title:"활동"}),e.createElement(t.Count,{current:483,unit:"Kcal"})))))))},_={name:"디자인 스펙",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 StatCard 스펙입니다.",badge:"디자인"},e.createElement(E,{title:"컨테이너",rows:[{property:"배경색",token:"color/background/primary",value:s.backgroundPrimary,type:"color"},{property:"테두리",token:"color/border/default",value:s.borderDefault,type:"color"},{property:"코너 라디우스",token:"borderRadius/large",value:h.large,type:"size"},{property:"상하 패딩",token:"spacing/large",value:r.large,type:"size"},{property:"좌우 패딩",token:"spacing/xlarge",value:r.xlarge,type:"size"},{property:"블록 간 gap",token:"spacing/medium",value:r.medium,type:"size"}]}),e.createElement(b,null),e.createElement(E,{title:"Header",rows:[{property:"아이콘 크기",token:"—",value:16,type:"size"},{property:"아이콘-제목 gap",token:"—",value:6,type:"size"},{property:"제목 타이포",token:"Label 1",value:`${p.label1.fontSize}px / Medium`,type:"typography"},{property:"제목/아이콘 색상",token:"accent",value:"카드별 accent 색상",type:"color"}]}),e.createElement(b,null),e.createElement(E,{title:"Count / BigScore / Duration",rows:[{property:"큰 숫자 타이포",token:"Title 3",value:`${p.title3.fontSize}px / SemiBold`,type:"typography"},{property:"큰 숫자 색상",token:"accent",value:"카드별 accent 색상",type:"color"},{property:"단위 타이포",token:"Label 1",value:`${p.label1.fontSize}px / Medium`,type:"typography"},{property:"단위 색상",token:"color/text/secondary",value:s.textSecondary,type:"color"},{property:"BigScore 2행+",token:"color/text/secondary",value:s.textSecondary,type:"color"}]}),e.createElement(b,null),e.createElement(E,{title:"CheckList",rows:[{property:"칸 크기",token:"—",value:36,type:"size"},{property:"칸 간격",token:"spacing/small",value:r.small,type:"size"},{property:"칸 radius",token:"borderRadius/xsmall",value:h.xsmall,type:"size"},{property:"완료 칸 배경",token:"accent",value:"카드별 accent 색상",type:"color"},{property:"빈 칸 배경",token:"color/background/disabled",value:s.backgroundDisabled,type:"color"},{property:"체크 아이콘",token:"color/icon/onColor",value:s.iconOnColor,type:"color"}]}),e.createElement(b,null),e.createElement(E,{title:"Accent 팔레트",rows:[{property:"violet",token:"violet[60]",value:K[60],type:"color"},{property:"purple",token:"purple[40]",value:Z[40],type:"color"},{property:"green",token:"green[45]",value:Y[45],type:"color"},{property:"lightBlue",token:"lightBlue[50]",value:Q[50],type:"color"},{property:"blue",token:"violet[50]",value:K[50],type:"color"},{property:"mint",token:"mint[45]",value:J[45],type:"color"},{property:"red",token:"red[60]",value:X[60],type:"color"}]})))},M={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"사용 가이드",badge:"개발"},e.createElement(S,{title:"Import",code:`import { StatCard } from '@design-system/components/StatCard';
import { Icon } from '@design-system/components/Icon';`}),e.createElement(S,{title:"기본 사용 (Header + Count)",code:`<StatCard accent="violet">
  <StatCard.Header icon={<Icon name="activity" style="mini" />} title="목표" />
  <StatCard.Count current={3} total={10} unit="개" />
</StatCard>`}),e.createElement(S,{title:"기존 컴포넌트 조합",code:`<StatCard accent="green">
  <StatCard.Header icon={<Icon name="meal" style="mini" />} title="식단" />
  <StatCard.Label label="점수" value="좋음" />
  <LevelIndicator current="great" />
</StatCard>`}),e.createElement(S,{title:"Duration + CompletionCheck",code:`<StatCard accent="blue">
  <StatCard.Header icon={<Icon name="fasting" style="mini" />} title="간헐적 단식" />
  <StatCard.Duration hours={11} minutes={30} />
  <StatCard.CompletionCheck progress={1} />
</StatCard>`}),e.createElement(S,{title:"BigScore (여러 점수)",code:`<StatCard accent="purple">
  <StatCard.Header icon={<Icon name="beauty-score" style="mini" />} title="뷰티 종합 점수" />
  <StatCard.BigScore items={[
    { value: 50, unit: '점', label: '이너' },
    { value: 40, unit: '점', label: '아우터' },
  ]} />
</StatCard>`})))};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    maxWidth: 200
  }}>
      <StatCard accent={args.accent || 'violet'}>
        <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="목표" />
        <StatCard.Count current={3} total={10} unit="개" />
      </StatCard>
    </View>
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Default (Header + Count)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Default" description="최소 구성: Header + Count 블록 조합">
        <View style={{
        maxWidth: 200
      }}>
          <StatCard accent="violet">
            <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="목표" />
            <StatCard.Count current={3} total={10} unit="개" />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'BigScore 블록',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="BigScore" description="여러 점수를 세로로 나열합니다. 첫 번째 행만 accent 색상, 나머지는 보조색입니다.">
        <View style={{
        maxWidth: 200
      }}>
          <StatCard accent="purple">
            <StatCard.Header icon={<Icon name="beauty-score" style="mini" size={16} />} title="뷰티 종합 점수" />
            <StatCard.BigScore items={[{
            value: 50,
            unit: '점',
            label: '이너'
          }, {
            value: 40,
            unit: '점',
            label: '아우터'
          }]} />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Label 블록',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Label" description="레이블 + 강조 값 형태. value는 accent 색상으로 강조됩니다.">
        <View style={{
        maxWidth: 200
      }}>
          <StatCard accent="green">
            <StatCard.Header icon={<Icon name="meal" style="mini" size={16} />} title="식단" />
            <StatCard.Label label="점수" value="좋음" />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...f.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Duration 블록',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Duration" description="시간 + 분 형태로 시간을 표시합니다.">
        <Row gap={spacing.large} wrap align="flex-start">
          <View style={{
          width: 200
        }}>
            <StatCard accent="blue">
              <StatCard.Header icon={<Icon name="fasting" style="mini" size={16} />} title="간헐적 단식" />
              <StatCard.Duration hours={11} minutes={30} />
            </StatCard>
          </View>
          <View style={{
          width: 200
        }}>
            <StatCard accent="mint">
              <StatCard.Header icon={<Icon name="sleep" style="mini" size={16} />} title="수면" />
              <StatCard.Duration hours={5} />
            </StatCard>
          </View>
        </Row>
      </Section>
    </View>
}`,...V.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'CompletionCheck 블록',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="CompletionCheck" description="CircularProgress 기반 원형 진행률을 표시합니다. accent 색상이 자동 적용됩니다.">
        <Row gap={spacing.large} wrap align="flex-start">
          <View style={{
          width: 200
        }}>
            <StatCard accent="mint">
              <StatCard.Header icon={<Icon name="sleep" style="mini" size={16} />} title="수면" />
              <StatCard.Duration hours={5} />
              <StatCard.CompletionCheck progress={0.63} />
            </StatCard>
          </View>
          <View style={{
          width: 200
        }}>
            <StatCard accent="blue">
              <StatCard.Header icon={<Icon name="fasting" style="mini" size={16} />} title="간헐적 단식" />
              <StatCard.Duration hours={11} minutes={30} />
              <StatCard.CompletionCheck progress={0.85} />
            </StatCard>
          </View>
        </Row>
      </Section>
    </View>
}`,...z.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'CheckList 블록',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="CheckList" description="네모 칸으로 완료 상태를 시각화합니다. 인터랙션 없는 표시 전용입니다.">
        <View style={{
        maxWidth: 200
      }}>
          <StatCard accent="lightBlue">
            <StatCard.Header icon={<Icon name="supplement" style="mini" size={16} />} title="영양제" />
            <StatCard.Count current={2} total={3} unit="개" />
            <StatCard.CheckList total={3} completed={2} />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...H.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'LevelIndicator 조합',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="LevelIndicator 조합" description="기존 LevelIndicator 컴포넌트를 children으로 배치하여 식단 카드를 구성합니다.">
        <View style={{
        maxWidth: 200
      }}>
          <StatCard accent="green">
            <StatCard.Header icon={<Icon name="meal" style="mini" size={16} />} title="식단" />
            <StatCard.Label label="점수" value="좋음" />
            <LevelIndicator current="great" />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'ProgressBar 조합',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="ProgressBar 조합" description="기존 ProgressBar 컴포넌트를 children으로 배치하여 활동 카드를 구성합니다.">
        <View style={{
        maxWidth: 200
      }}>
          <StatCard accent="red">
            <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="활동" />
            <StatCard.Count current={483} unit="Kcal" />
            <ProgressBar progress={0.6} size="small" color="error" />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...D.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Accent 팔레트',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Accent 팔레트" description="7가지 accent 컬러를 한 화면에 나열합니다.">
        <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.medium
      }}>
          {(Object.keys(ACCENT_HEX) as StatCardAccent[]).map(accent => <View key={accent} style={{
          width: 170
        }}>
              <Col gap={spacing.xsmall}>
                <StateLabel>{accent}</StateLabel>
                <StatCard accent={accent}>
                  <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title={accent} />
                  <StatCard.Count current={42} unit="pt" />
                </StatCard>
              </Col>
            </View>)}
        </View>
      </Section>
    </View>
}`,...W.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '예시: 목표',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="목표 카드" description="Figma 디자인의 '목표' 카드 재현">
        <View style={{
        width: 173
      }}>
          <StatCard accent="violet">
            <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="목표" />
            <StatCard.Count current={3} total={10} unit="개" />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: '예시: 뷰티 종합 점수',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="뷰티 종합 점수 카드" description="Figma 디자인의 '뷰티 종합 점수' 카드 재현">
        <View style={{
        width: 170
      }}>
          <StatCard accent="purple">
            <StatCard.Header icon={<Icon name="beauty-score" style="mini" size={16} />} title="뷰티 종합 점수" />
            <StatCard.BigScore items={[{
            value: 50,
            unit: '점',
            label: '이너'
          }, {
            value: 40,
            unit: '점',
            label: '아우터'
          }]} />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '예시: 식단',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="식단 카드" description="Figma 디자인의 '식단' 카드 재현 (LevelIndicator 조합)">
        <View style={{
        width: 173
      }}>
          <StatCard accent="green">
            <StatCard.Header icon={<Icon name="meal" style="mini" size={16} />} title="식단" />
            <StatCard.Label label="점수" value="좋음" />
            <LevelIndicator current="great" />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '예시: 영양제',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="영양제 카드" description="Figma 디자인의 '영양제' 카드 재현 (CheckList 블록)">
        <View style={{
        width: 170
      }}>
          <StatCard accent="lightBlue">
            <StatCard.Header icon={<Icon name="supplement" style="mini" size={16} />} title="영양제" />
            <StatCard.Count current={2} total={3} unit="개" />
            <StatCard.CheckList total={3} completed={2} />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '예시: 간헐적 단식',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="간헐적 단식 카드" description="Figma 디자인의 '간헐적 단식' 카드 재현 (Duration + CompletionCheck)">
        <View style={{
        width: 173
      }}>
          <StatCard accent="blue">
            <StatCard.Header icon={<Icon name="fasting" style="mini" size={16} />} title="간헐적 단식" />
            <StatCard.Duration hours={11} minutes={30} />
            <StatCard.CompletionCheck progress={1} />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...P.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: '예시: 수면',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="수면 카드" description="Figma 디자인의 '수면' 카드 재현 (Duration + CompletionCheck)">
        <View style={{
        width: 170
      }}>
          <StatCard accent="mint">
            <StatCard.Header icon={<Icon name="sleep" style="mini" size={16} />} title="수면" />
            <StatCard.Duration hours={5} />
            <StatCard.CompletionCheck progress={1} />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...$.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '예시: 활동',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="활동 카드" description="Figma 디자인의 '활동' 카드 재현 (Count + ProgressBar 조합)">
        <View style={{
        width: 173
      }}>
          <StatCard accent="red">
            <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="활동" />
            <StatCard.Count current={483} unit="Kcal" />
            <ProgressBar progress={0.6} size="small" color="error" />
          </StatCard>
        </View>
      </Section>
    </View>
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '대시보드 그리드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="대시보드 그리드" description="모바일 375px 뷰포트 기준, 2열 그리드에 7개 카드를 배치합니다.">
        <View style={{
        width: 375,
        paddingHorizontal: spacing.large,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.medium
      }}>
          {/* Row 1 */}
          <View style={{
          flex: 1,
          minWidth: 150
        }}>
            <StatCard accent="violet">
              <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="목표" />
              <StatCard.Count current={3} total={10} unit="개" />
            </StatCard>
          </View>
          <View style={{
          flex: 1,
          minWidth: 150
        }}>
            <StatCard accent="purple">
              <StatCard.Header icon={<Icon name="beauty-score" style="mini" size={16} />} title="뷰티 종합 점수" />
              <StatCard.BigScore items={[{
              value: 50,
              unit: '점',
              label: '이너'
            }, {
              value: 40,
              unit: '점',
              label: '아우터'
            }]} />
            </StatCard>
          </View>

          {/* Row 2 */}
          <View style={{
          flex: 1,
          minWidth: 150
        }}>
            <StatCard accent="green">
              <StatCard.Header icon={<Icon name="meal" style="mini" size={16} />} title="식단" />
              <StatCard.Label label="점수" value="좋음" />
              <LevelIndicator current="great" />
            </StatCard>
          </View>
          <View style={{
          flex: 1,
          minWidth: 150
        }}>
            <StatCard accent="lightBlue">
              <StatCard.Header icon={<Icon name="supplement" style="mini" size={16} />} title="영양제" />
              <StatCard.Count current={2} total={3} unit="개" />
              <StatCard.CheckList total={3} completed={2} />
            </StatCard>
          </View>

          {/* Row 3 */}
          <View style={{
          flex: 1,
          minWidth: 150
        }}>
            <StatCard accent="blue">
              <StatCard.Header icon={<Icon name="fasting" style="mini" size={16} />} title="간헐적 단식" />
              <StatCard.Duration hours={11} minutes={30} />
              <StatCard.CompletionCheck progress={1} />
            </StatCard>
          </View>
          <View style={{
          flex: 1,
          minWidth: 150
        }}>
            <StatCard accent="mint">
              <StatCard.Header icon={<Icon name="sleep" style="mini" size={16} />} title="수면" />
              <StatCard.Duration hours={5} />
              <StatCard.CompletionCheck progress={1} />
            </StatCard>
          </View>

          {/* Row 4 — 활동 카드 (한 줄 전체) */}
          <View style={{
          flex: 1,
          minWidth: 150
        }}>
            <StatCard accent="red">
              <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="활동" />
              <StatCard.Count current={483} unit="Kcal" />
              <ProgressBar progress={0.6} size="small" color="error" />
            </StatCard>
          </View>
        </View>
      </Section>
    </View>
}`,...F.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="건강 대시보드에서의 StatCard 2열 그리드 활용 예시입니다.">
        <View style={{
        maxWidth: 375,
        padding: spacing.large,
        backgroundColor: semanticColor.backgroundSecondary,
        borderRadius: radius.large,
        gap: spacing.large
      }}>
          <Text style={{
          fontSize: textStyle.heading.fontSize,
          fontWeight: textStyle.heading.fontWeight,
          lineHeight: textStyle.heading.lineHeight,
          color: semanticColor.textPrimary
        }}>
            오늘의 건강
          </Text>

          <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: spacing.medium
        }}>
            <View style={{
            flex: 1,
            minWidth: 150
          }}>
              <StatCard accent="violet">
                <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="목표" />
                <StatCard.Count current={3} total={10} unit="개" />
              </StatCard>
            </View>
            <View style={{
            flex: 1,
            minWidth: 150
          }}>
              <StatCard accent="green">
                <StatCard.Header icon={<Icon name="meal" style="mini" size={16} />} title="식단" />
                <StatCard.Label label="점수" value="좋음" />
              </StatCard>
            </View>
            <View style={{
            flex: 1,
            minWidth: 150
          }}>
              <StatCard accent="mint">
                <StatCard.Header icon={<Icon name="sleep" style="mini" size={16} />} title="수면" />
                <StatCard.Duration hours={7} minutes={30} />
              </StatCard>
            </View>
            <View style={{
            flex: 1,
            minWidth: 150
          }}>
              <StatCard accent="red">
                <StatCard.Header icon={<Icon name="activity" style="mini" size={16} />} title="활동" />
                <StatCard.Count current={483} unit="Kcal" />
              </StatCard>
            </View>
          </View>
        </View>
      </Section>
    </View>
}`,...N.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 StatCard 스펙입니다." badge="디자인">
        <TokenSpecTable title="컨테이너" rows={[{
        property: '배경색',
        token: 'color/background/primary',
        value: semanticColor.backgroundPrimary,
        type: 'color'
      }, {
        property: '테두리',
        token: 'color/border/default',
        value: semanticColor.borderDefault,
        type: 'color'
      }, {
        property: '코너 라디우스',
        token: 'borderRadius/large',
        value: radius.large,
        type: 'size'
      }, {
        property: '상하 패딩',
        token: 'spacing/large',
        value: spacing.large,
        type: 'size'
      }, {
        property: '좌우 패딩',
        token: 'spacing/xlarge',
        value: spacing.xlarge,
        type: 'size'
      }, {
        property: '블록 간 gap',
        token: 'spacing/medium',
        value: spacing.medium,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="Header" rows={[{
        property: '아이콘 크기',
        token: '—',
        value: 16,
        type: 'size'
      }, {
        property: '아이콘-제목 gap',
        token: '—',
        value: 6,
        type: 'size'
      }, {
        property: '제목 타이포',
        token: 'Label 1',
        value: \`\${textStyle.label1.fontSize}px / Medium\`,
        type: 'typography'
      }, {
        property: '제목/아이콘 색상',
        token: 'accent',
        value: '카드별 accent 색상',
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="Count / BigScore / Duration" rows={[{
        property: '큰 숫자 타이포',
        token: 'Title 3',
        value: \`\${textStyle.title3.fontSize}px / SemiBold\`,
        type: 'typography'
      }, {
        property: '큰 숫자 색상',
        token: 'accent',
        value: '카드별 accent 색상',
        type: 'color'
      }, {
        property: '단위 타이포',
        token: 'Label 1',
        value: \`\${textStyle.label1.fontSize}px / Medium\`,
        type: 'typography'
      }, {
        property: '단위 색상',
        token: 'color/text/secondary',
        value: semanticColor.textSecondary,
        type: 'color'
      }, {
        property: 'BigScore 2행+',
        token: 'color/text/secondary',
        value: semanticColor.textSecondary,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="CheckList" rows={[{
        property: '칸 크기',
        token: '—',
        value: 36,
        type: 'size'
      }, {
        property: '칸 간격',
        token: 'spacing/small',
        value: spacing.small,
        type: 'size'
      }, {
        property: '칸 radius',
        token: 'borderRadius/xsmall',
        value: radius.xsmall,
        type: 'size'
      }, {
        property: '완료 칸 배경',
        token: 'accent',
        value: '카드별 accent 색상',
        type: 'color'
      }, {
        property: '빈 칸 배경',
        token: 'color/background/disabled',
        value: semanticColor.backgroundDisabled,
        type: 'color'
      }, {
        property: '체크 아이콘',
        token: 'color/icon/onColor',
        value: semanticColor.iconOnColor,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="Accent 팔레트" rows={[{
        property: 'violet',
        token: 'violet[60]',
        value: violet[60],
        type: 'color'
      }, {
        property: 'purple',
        token: 'purple[40]',
        value: purple[40],
        type: 'color'
      }, {
        property: 'green',
        token: 'green[45]',
        value: green[45],
        type: 'color'
      }, {
        property: 'lightBlue',
        token: 'lightBlue[50]',
        value: lightBlue[50],
        type: 'color'
      }, {
        property: 'blue',
        token: 'violet[50]',
        value: violet[50],
        type: 'color'
      }, {
        property: 'mint',
        token: 'mint[45]',
        value: mint[45],
        type: 'color'
      }, {
        property: 'red',
        token: 'red[60]',
        value: red[60],
        type: 'color'
      }]} />
      </Section>
    </View>
}`,..._.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { StatCard } from '@design-system/components/StatCard';
import { Icon } from '@design-system/components/Icon';\`} />
        <CodeBlock title="기본 사용 (Header + Count)" code={\`<StatCard accent="violet">
  <StatCard.Header icon={<Icon name="activity" style="mini" />} title="목표" />
  <StatCard.Count current={3} total={10} unit="개" />
</StatCard>\`} />
        <CodeBlock title="기존 컴포넌트 조합" code={\`<StatCard accent="green">
  <StatCard.Header icon={<Icon name="meal" style="mini" />} title="식단" />
  <StatCard.Label label="점수" value="좋음" />
  <LevelIndicator current="great" />
</StatCard>\`} />
        <CodeBlock title="Duration + CompletionCheck" code={\`<StatCard accent="blue">
  <StatCard.Header icon={<Icon name="fasting" style="mini" />} title="간헐적 단식" />
  <StatCard.Duration hours={11} minutes={30} />
  <StatCard.CompletionCheck progress={1} />
</StatCard>\`} />
        <CodeBlock title="BigScore (여러 점수)" code={\`<StatCard accent="purple">
  <StatCard.Header icon={<Icon name="beauty-score" style="mini" />} title="뷰티 종합 점수" />
  <StatCard.BigScore items={[
    { value: 50, unit: '점', label: '이너' },
    { value: 40, unit: '점', label: '아우터' },
  ]} />
</StatCard>\`} />
      </Section>
    </View>
}`,...M.parameters?.docs?.source}}};const Re=["Playground","Default","WithBigScore","WithLabel","WithDuration","WithCompletionCheck","WithCheckList","WithLevelIndicator","WithProgressBar","AccentColors","ExampleGoal","ExampleBeautyScore","ExampleDiet","ExampleSupplement","ExampleFasting","ExampleSleep","ExampleActivity","DashboardGrid","InContext","DesignSpec","Usage"];export{W as AccentColors,F as DashboardGrid,v as Default,_ as DesignSpec,A as ExampleActivity,B as ExampleBeautyScore,R as ExampleDiet,P as ExampleFasting,I as ExampleGoal,$ as ExampleSleep,T as ExampleSupplement,N as InContext,x as Playground,M as Usage,k as WithBigScore,H as WithCheckList,z as WithCompletionCheck,V as WithDuration,f as WithLabel,L as WithLevelIndicator,D as WithProgressBar,Re as __namedExportsOrder,Be as default};
