import{r as x,R as e,V as s,s as q}from"./iframe-rdsxNJ7l.js";import{I as H}from"./Icon-DGfD0Qtj.js";import{M,c as a,T as g,f as d,a as c,r as S,s as i,j as R}from"./theme-KAxj7l-q.js";import{S as k,D as _,b as L,a as V,C as W}from"./storyHelpers-D5HpvNsw.js";import{T as $}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";const K=["일","월","화","수","목","금","토"];function F(t,l){return t.getFullYear()===l.getFullYear()&&t.getMonth()===l.getMonth()&&t.getDate()===l.getDate()}function O(t){return F(t,new Date)}function Z(t,l){return new Date(t,l+1,0).getDate()}function U(t,l){return new Date(t,l,1).getDay()}function y({value:t,onChange:l,minDate:n,maxDate:f}){const I=new Date,[m,Y]=x.useState(t?.getFullYear()??I.getFullYear()),[p,E]=x.useState(t?.getMonth()??I.getMonth()),A=x.useMemo(()=>{const r=Z(m,p),b=U(m,p),h=[];for(let u=0;u<b;u++)h.push(null);for(let u=1;u<=r;u++)h.push(new Date(m,p,u));return h},[m,p]),j=()=>{p===0?(Y(m-1),E(11)):E(p-1)},N=()=>{p===11?(Y(m+1),E(0)):E(p+1)},D=r=>!!(n&&r<n||f&&r>f);return e.createElement(s,{style:o.container},e.createElement(s,{style:o.header},e.createElement(M,{onPress:j,style:({pressed:r})=>[o.navBtn,r&&o.pressed],accessibilityLabel:"이전 달"},e.createElement(H,{name:"caret-left",size:20,color:a.iconPrimary})),e.createElement(g,{style:o.headerTitle},m,"년 ",p+1,"월"),e.createElement(M,{onPress:N,style:({pressed:r})=>[o.navBtn,r&&o.pressed],accessibilityLabel:"다음 달"},e.createElement(H,{name:"caret-right",size:20,color:a.iconPrimary}))),e.createElement(s,{style:o.weekRow},K.map((r,b)=>e.createElement(s,{key:r,style:o.cell},e.createElement(g,{style:[o.weekLabel,b===0&&o.sundayLabel]},r)))),e.createElement(s,{style:o.grid},A.map((r,b)=>e.createElement(s,{key:b,style:o.cell},r?e.createElement(M,{onPress:()=>!D(r)&&l?.(r),disabled:D(r),style:({pressed:h})=>[o.dayBtn,t&&F(r,t)&&o.selectedDay,O(r)&&!t&&o.todayDay,D(r)&&o.disabledDay,h&&!D(r)&&o.pressed],accessibilityLabel:`${r.getMonth()+1}월 ${r.getDate()}일`},e.createElement(g,{style:[o.dayText,t&&F(r,t)&&o.selectedDayText,O(r)&&o.todayText,D(r)&&o.disabledText,r.getDay()===0&&o.sundayText]},r.getDate())):null))))}const G=40,o=q.create({container:{backgroundColor:a.backgroundPrimary,borderRadius:S.medium,padding:i.large},header:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:i.large},headerTitle:{fontSize:c.headline.fontSize,fontWeight:d.semibold,color:a.textPrimary},navBtn:{width:36,height:36,alignItems:"center",justifyContent:"center",borderRadius:S.full},pressed:{opacity:R.pressOpacity},weekRow:{flexDirection:"row",marginBottom:i.small},weekLabel:{fontSize:c.caption.fontSize,fontWeight:d.medium,color:a.textSecondary,textAlign:"center"},sundayLabel:{color:a.textError},grid:{flexDirection:"row",flexWrap:"wrap"},cell:{width:`${100/7}%`,height:G,alignItems:"center",justifyContent:"center"},dayBtn:{width:36,height:36,alignItems:"center",justifyContent:"center",borderRadius:S.full},dayText:{fontSize:c.label1.fontSize,fontWeight:d.regular,color:a.textPrimary},selectedDay:{backgroundColor:a.backgroundBrand},selectedDayText:{color:a.textOnColor,fontWeight:d.semibold},todayDay:{borderWidth:1,borderColor:a.borderFocus},todayText:{color:a.textBrand,fontWeight:d.semibold},disabledDay:{opacity:.3},disabledText:{color:a.textTertiary},sundayText:{color:a.textError}});y.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"Date"},description:"선택된 날짜"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:"날짜 변경 콜백"},minDate:{required:!1,tsType:{name:"Date"},description:"최소 선택 가능 날짜"},maxDate:{required:!1,tsType:{name:"Date"},description:"최대 선택 가능 날짜"}}};const ie={title:"Input/DatePicker",component:y,tags:["autodocs"]},w={render:()=>{const[t,l]=x.useState(void 0);return e.createElement(s,{style:{maxWidth:375}},e.createElement(y,{value:t,onChange:l}),t&&e.createElement(g,{style:{marginTop:i.medium,color:a.textSecondary,textAlign:"center"}},"선택: ",t.getFullYear(),"-",String(t.getMonth()+1).padStart(2,"0"),"-",String(t.getDate()).padStart(2,"0")))}},C={name:"날짜 제한",render:()=>{const[t,l]=x.useState(void 0),n=new Date,f=new Date(n.getFullYear(),n.getMonth(),n.getDate()-7);return e.createElement(s,{style:{gap:i["3xlarge"]}},e.createElement(k,{title:"날짜 제한",description:"minDate/maxDate로 선택 가능 범위를 제한합니다. 오늘 기준 과거 7일만 선택 가능."},e.createElement(s,{style:{maxWidth:375}},e.createElement(y,{value:t,onChange:l,minDate:f,maxDate:n}))))}},v={name:"상태별",render:()=>{const t=new Date,l=new Date(t.getFullYear(),t.getMonth(),15),n=new Date(t.getFullYear(),t.getMonth(),t.getDate()+3);return e.createElement(s,{style:{gap:i["3xlarge"]}},e.createElement(k,{title:"상태별",description:"날짜 셀의 5가지 상태를 확인합니다: 기본 · 오늘 · 선택됨 · 비활성 · 일요일."},e.createElement(s,{style:{gap:i.xlarge,maxWidth:375}},e.createElement(L,{gap:i.small},e.createElement(V,null,"기본 (선택 전)"),e.createElement(y,null)),e.createElement(L,{gap:i.small},e.createElement(V,null,"날짜 선택됨 (15일)"),e.createElement(y,{value:l})),e.createElement(L,{gap:i.small},e.createElement(V,null,"날짜 제한 (오늘+3일 이후만 선택 가능)"),e.createElement(y,{minDate:n})))))}},J={default:{background:"—",text:"color/text/primary",border:"—",opacity:"1"},today:{background:"—",text:"color/text/brand",border:"color/border/focus",opacity:"1"},selected:{background:"color/background/brand",text:"color/text/onColor",border:"—",opacity:"1"},disabled:{background:"—",text:"color/text/tertiary",border:"—",opacity:"0.3"},sunday:{background:"—",text:"color/text/error",border:"—",opacity:"1"}},Q={"color/text/primary":a.textPrimary,"color/text/brand":a.textBrand,"color/text/onColor":a.textOnColor,"color/text/tertiary":a.textTertiary,"color/text/error":a.textError,"color/background/brand":a.backgroundBrand,"color/border/focus":a.borderFocus},B=t=>Q[t]??t,T={name:"디자인 스펙",render:()=>{const t=["default","today","selected","disabled","sunday"];return e.createElement(s,{style:{gap:i["3xlarge"]}},e.createElement(k,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 DatePicker 상태별 스펙입니다.",badge:"디자인"},t.map(l=>{const n=J[l];return e.createElement(s,{key:l},e.createElement($,{title:`날짜 셀: ${l}`,rows:[...n.background!=="—"?[{property:"배경색",token:n.background,value:B(n.background),type:"color"}]:[],{property:"텍스트",token:n.text,value:B(n.text),type:"color"},...n.border!=="—"?[{property:"테두리",token:n.border,value:B(n.border),type:"color"}]:[],...n.opacity!=="1"?[{property:"opacity",token:n.opacity,value:Number(n.opacity),type:"opacity"}]:[]]}),e.createElement(_,null))}),e.createElement($,{title:"컨테이너 · 헤더",rows:[{property:"컨테이너 배경",token:"color/background/primary",value:a.backgroundPrimary,type:"color"},{property:"컨테이너 라디우스",token:"borderRadius/medium",value:S.medium,type:"size"},{property:"컨테이너 패딩",token:"spacing/large",value:i.large,type:"size"},{property:"헤더 타이포",token:"Headline",value:`${c.headline.fontSize}px / ${c.headline.lineHeight}px / ${d.semibold}`,type:"typography"},{property:"헤더 텍스트",token:"color/text/primary",value:a.textPrimary,type:"color"},{property:"네비 아이콘",token:"color/icon/primary",value:a.iconPrimary,type:"color"},{property:"네비 버튼 크기",token:"36dp (원형)",value:36,type:"size"},{property:"헤더-요일 간격",token:"spacing/large",value:i.large,type:"size"}]}),e.createElement(_,null),e.createElement($,{title:"요일 · 날짜 셀 레이아웃",rows:[{property:"요일 타이포",token:"Caption",value:`${c.caption.fontSize}px / ${c.caption.lineHeight}px / ${d.medium}`,type:"typography"},{property:"요일 색상",token:"color/text/secondary",value:a.textSecondary,type:"color"},{property:"일요일 색상",token:"color/text/error",value:a.textError,type:"color"},{property:"요일-날짜 간격",token:"spacing/small",value:i.small,type:"size"},{property:"셀 높이",token:"40dp (CELL_SIZE)",value:40,type:"size"},{property:"날짜 버튼 크기",token:"36dp (원형)",value:36,type:"size"},{property:"날짜 타이포",token:"Label 1",value:`${c.label1.fontSize}px / ${c.label1.lineHeight}px / ${d.regular}`,type:"typography"},{property:"press 투명도",token:"interaction.pressOpacity",value:R.pressOpacity,type:"opacity"}]})))}},P={name:"실전 예시",render:()=>{const[t,l]=x.useState(void 0),n=new Date;return e.createElement(s,{style:{gap:i["3xlarge"]}},e.createElement(k,{title:"실전 예시",description:"생년월일 입력에서의 DatePicker 활용 예시입니다."},e.createElement(s,{style:{maxWidth:375,padding:i.xlarge,backgroundColor:a.backgroundPrimary,borderRadius:S.large,borderWidth:1,borderColor:a.borderDefault,gap:i.large}},e.createElement(s,{style:{gap:i.small}},e.createElement(g,{style:{fontSize:c.label2.fontSize,fontWeight:c.label2.fontWeight,lineHeight:c.label2.lineHeight,color:a.textPrimary}},"생년월일"),e.createElement(g,{style:{fontSize:c.caption.fontSize,lineHeight:c.caption.lineHeight,color:a.textSecondary}},"맞춤 건강 분석을 위해 생년월일을 선택해 주세요.")),e.createElement(y,{value:t,onChange:l,maxDate:n}),t&&e.createElement(g,{style:{fontSize:c.caption.fontSize,color:a.textBrand,textAlign:"center"}},"선택: ",t.getFullYear(),"년 ",t.getMonth()+1,"월 ",t.getDate(),"일"))))}},z={name:"사용 가이드",render:()=>e.createElement(s,{style:{gap:i["3xlarge"]}},e.createElement(k,{title:"사용 가이드",badge:"개발"},e.createElement(W,{title:"Import",code:"import { DatePicker } from '@design-system/components/DatePicker';"}),e.createElement(W,{title:"기본 사용",code:`const [date, setDate] = useState<Date>();

<DatePicker value={date} onChange={setDate} />`}),e.createElement(W,{title:"날짜 제한",code:`<DatePicker
  value={date}
  onChange={setDate}
  minDate={new Date(2026, 0, 1)}
  maxDate={new Date()}
/>`})))};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <View style={{
      maxWidth: 375
    }}>
        <DatePicker value={date} onChange={setDate} />
        {date && <Text style={{
        marginTop: spacing.medium,
        color: semanticColor.textSecondary,
        textAlign: 'center'
      }}>
            선택: {date.getFullYear()}-{String(date.getMonth() + 1).padStart(2, '0')}-{String(date.getDate()).padStart(2, '0')}
          </Text>}
      </View>;
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '날짜 제한',
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="날짜 제한" description="minDate/maxDate로 선택 가능 범위를 제한합니다. 오늘 기준 과거 7일만 선택 가능.">
          <View style={{
          maxWidth: 375
        }}>
            <DatePicker value={date} onChange={setDate} minDate={minDate} maxDate={today} />
          </View>
        </Section>
      </View>;
  }
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '상태별',
  render: () => {
    const today = new Date();
    const selected = new Date(today.getFullYear(), today.getMonth(), 15);
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="상태별" description="날짜 셀의 5가지 상태를 확인합니다: 기본 · 오늘 · 선택됨 · 비활성 · 일요일.">
          <View style={{
          gap: spacing.xlarge,
          maxWidth: 375
        }}>
            <Col gap={spacing.small}>
              <StateLabel>기본 (선택 전)</StateLabel>
              <DatePicker />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>날짜 선택됨 (15일)</StateLabel>
              <DatePicker value={selected} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>날짜 제한 (오늘+3일 이후만 선택 가능)</StateLabel>
              <DatePicker minDate={minDate} />
            </Col>
          </View>
        </Section>
      </View>;
  }
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => {
    const cellStates = ['default', 'today', 'selected', 'disabled', 'sunday'] as const;
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 DatePicker 상태별 스펙입니다." badge="디자인">
          {/* 날짜 셀 상태별 */}
          {cellStates.map(state => {
          const st = CELL_STATE_TOKEN_MAP[state];
          return <View key={state}>
                <TokenSpecTable title={\`날짜 셀: \${state}\`} rows={[...(st.background !== '—' ? [{
              property: '배경색',
              token: st.background,
              value: resolveCell(st.background),
              type: 'color' as const
            }] : []), {
              property: '텍스트',
              token: st.text,
              value: resolveCell(st.text),
              type: 'color'
            }, ...(st.border !== '—' ? [{
              property: '테두리',
              token: st.border,
              value: resolveCell(st.border),
              type: 'color' as const
            }] : []), ...(st.opacity !== '1' ? [{
              property: 'opacity',
              token: st.opacity,
              value: Number(st.opacity),
              type: 'opacity' as const
            }] : [])]} />
                <Divider />
              </View>;
        })}

          {/* 컨테이너 / 헤더 */}
          <TokenSpecTable title="컨테이너 · 헤더" rows={[{
          property: '컨테이너 배경',
          token: 'color/background/primary',
          value: semanticColor.backgroundPrimary,
          type: 'color'
        }, {
          property: '컨테이너 라디우스',
          token: 'borderRadius/medium',
          value: radius.medium,
          type: 'size'
        }, {
          property: '컨테이너 패딩',
          token: 'spacing/large',
          value: spacing.large,
          type: 'size'
        }, {
          property: '헤더 타이포',
          token: 'Headline',
          value: \`\${textStyle.headline.fontSize}px / \${textStyle.headline.lineHeight}px / \${fw.semibold}\`,
          type: 'typography'
        }, {
          property: '헤더 텍스트',
          token: 'color/text/primary',
          value: semanticColor.textPrimary,
          type: 'color'
        }, {
          property: '네비 아이콘',
          token: 'color/icon/primary',
          value: semanticColor.iconPrimary,
          type: 'color'
        }, {
          property: '네비 버튼 크기',
          token: '36dp (원형)',
          value: 36,
          type: 'size'
        }, {
          property: '헤더-요일 간격',
          token: 'spacing/large',
          value: spacing.large,
          type: 'size'
        }]} />

          <Divider />

          {/* 요일 · 날짜 셀 레이아웃 */}
          <TokenSpecTable title="요일 · 날짜 셀 레이아웃" rows={[{
          property: '요일 타이포',
          token: 'Caption',
          value: \`\${textStyle.caption.fontSize}px / \${textStyle.caption.lineHeight}px / \${fw.medium}\`,
          type: 'typography'
        }, {
          property: '요일 색상',
          token: 'color/text/secondary',
          value: semanticColor.textSecondary,
          type: 'color'
        }, {
          property: '일요일 색상',
          token: 'color/text/error',
          value: semanticColor.textError,
          type: 'color'
        }, {
          property: '요일-날짜 간격',
          token: 'spacing/small',
          value: spacing.small,
          type: 'size'
        }, {
          property: '셀 높이',
          token: '40dp (CELL_SIZE)',
          value: 40,
          type: 'size'
        }, {
          property: '날짜 버튼 크기',
          token: '36dp (원형)',
          value: 36,
          type: 'size'
        }, {
          property: '날짜 타이포',
          token: 'Label 1',
          value: \`\${textStyle.label1.fontSize}px / \${textStyle.label1.lineHeight}px / \${fw.regular}\`,
          type: 'typography'
        }, {
          property: 'press 투명도',
          token: 'interaction.pressOpacity',
          value: interaction.pressOpacity,
          type: 'opacity'
        }]} />
        </Section>
      </View>;
  }
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => {
    const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
    const maxDate = new Date();
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="생년월일 입력에서의 DatePicker 활용 예시입니다.">
          <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: radius.large,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          gap: spacing.large
        }}>
            <View style={{
            gap: spacing.small
          }}>
              <Text style={{
              fontSize: textStyle.label2.fontSize,
              fontWeight: textStyle.label2.fontWeight,
              lineHeight: textStyle.label2.lineHeight,
              color: semanticColor.textPrimary
            }}>
                생년월일
              </Text>
              <Text style={{
              fontSize: textStyle.caption.fontSize,
              lineHeight: textStyle.caption.lineHeight,
              color: semanticColor.textSecondary
            }}>
                맞춤 건강 분석을 위해 생년월일을 선택해 주세요.
              </Text>
            </View>

            <DatePicker value={birthDate} onChange={setBirthDate} maxDate={maxDate} />

            {birthDate && <Text style={{
            fontSize: textStyle.caption.fontSize,
            color: semanticColor.textBrand,
            textAlign: 'center'
          }}>
                선택: {birthDate.getFullYear()}년 {birthDate.getMonth() + 1}월 {birthDate.getDate()}일
              </Text>}
          </View>
        </Section>
      </View>;
  }
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { DatePicker } from '@design-system/components/DatePicker';\`} />
        <CodeBlock title="기본 사용" code={\`const [date, setDate] = useState<Date>();\\n\\n<DatePicker value={date} onChange={setDate} />\`} />
        <CodeBlock title="날짜 제한" code={\`<DatePicker\\n  value={date}\\n  onChange={setDate}\\n  minDate={new Date(2026, 0, 1)}\\n  maxDate={new Date()}\\n/>\`} />
      </Section>
    </View>
}`,...z.parameters?.docs?.source}}};const se=["Playground","WithConstraints","States","DesignSpec","InContext","Usage"];export{T as DesignSpec,P as InContext,w as Playground,v as States,z as Usage,C as WithConstraints,se as __namedExportsOrder,ie as default};
