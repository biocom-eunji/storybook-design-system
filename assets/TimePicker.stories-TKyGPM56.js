import{r as w,R as e,V as l,s as H}from"./iframe-rdsxNJ7l.js";import{I as f}from"./Icon-DGfD0Qtj.js";import{j as _,M as y,c as r,T as m,f as I,a as s,r as g,s as o}from"./theme-KAxj7l-q.js";import{S as b,b as S,a as v,D as j,C as B}from"./storyHelpers-D5HpvNsw.js";import{T as L}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";const N={hour:12,minute:0,period:"AM"},G=["AM","PM"];function D(n){return String(n).padStart(2,"0")}function c({value:n,onChange:u,disabled:i=!1,minuteInterval:W=1}){const[k,R]=w.useState(n??N);w.useEffect(()=>{n&&R(n)},[n?.hour,n?.minute,n?.period]);const{hour:z,minute:M,period:d}=k,x=Array.from({length:Math.floor(60/W)},(t,p)=>p*W),A=t=>{R(t),u?.(t)},O=t=>{if(i)return;const p=(z-1+t+12)%12+1;A({...k,hour:p})},$=t=>{if(i)return;const F=(x.indexOf(M)+t+x.length)%x.length;A({...k,minute:x[F]})},q=t=>{i||t===d||A({...k,period:t})},U=i?_.disabledOpacity:1;return e.createElement(l,{style:[a.container,{opacity:U}],accessibilityRole:"adjustable",accessibilityLabel:`${z}시 ${D(M)}분 ${d}`},e.createElement(l,{style:a.column},e.createElement(y,{onPress:()=>O(1),disabled:i,style:({pressed:t})=>[a.arrowBtn,t&&a.pressed],accessibilityLabel:"시 증가"},e.createElement(f,{name:"caret-up",size:20,color:r.iconPrimary})),e.createElement(l,{style:a.valueBox},e.createElement(m,{style:a.valueText},D(z))),e.createElement(y,{onPress:()=>O(-1),disabled:i,style:({pressed:t})=>[a.arrowBtn,t&&a.pressed],accessibilityLabel:"시 감소"},e.createElement(f,{name:"caret-down",size:20,color:r.iconPrimary}))),e.createElement(m,{style:a.separator},":"),e.createElement(l,{style:a.column},e.createElement(y,{onPress:()=>$(1),disabled:i,style:({pressed:t})=>[a.arrowBtn,t&&a.pressed],accessibilityLabel:"분 증가"},e.createElement(f,{name:"caret-up",size:20,color:r.iconPrimary})),e.createElement(l,{style:a.valueBox},e.createElement(m,{style:a.valueText},D(M))),e.createElement(y,{onPress:()=>$(-1),disabled:i,style:({pressed:t})=>[a.arrowBtn,t&&a.pressed],accessibilityLabel:"분 감소"},e.createElement(f,{name:"caret-down",size:20,color:r.iconPrimary}))),e.createElement(l,{style:a.periodColumn},G.map(t=>e.createElement(y,{key:t,onPress:()=>q(t),disabled:i,style:({pressed:p})=>[a.periodBtn,t===d&&a.periodBtnActive,p&&!i&&a.pressed],accessibilityLabel:t,accessibilityState:{selected:t===d}},e.createElement(m,{style:[a.periodText,t===d&&a.periodTextActive]},t)))))}const a=H.create({container:{flexDirection:"row",alignItems:"center",gap:o.small,alignSelf:"flex-start"},column:{alignItems:"center",gap:o.xsmall},arrowBtn:{width:36,height:36,alignItems:"center",justifyContent:"center",borderRadius:g.small},pressed:{opacity:_.pressOpacity},valueBox:{width:64,height:56,alignItems:"center",justifyContent:"center",backgroundColor:r.backgroundSecondary,borderRadius:g.medium,borderWidth:1,borderColor:r.borderDefault},valueText:{fontSize:s.title3.fontSize,fontWeight:I.bold,color:r.textPrimary},separator:{fontSize:s.title3.fontSize,fontWeight:I.bold,color:r.textSecondary,marginHorizontal:o.xsmall},periodColumn:{gap:o.xsmall,marginLeft:o.medium},periodBtn:{width:48,height:36,alignItems:"center",justifyContent:"center",borderRadius:g.small,backgroundColor:r.backgroundSecondary,borderWidth:1,borderColor:r.borderDefault},periodBtnActive:{backgroundColor:r.backgroundBrand,borderColor:r.backgroundBrand},periodText:{fontSize:s.label1.fontSize,fontWeight:I.semibold,color:r.textSecondary},periodTextActive:{color:r.textOnColor}});c.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"TimeValue"},description:"선택된 시간"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TimeValue) => void",signature:{arguments:[{type:{name:"TimeValue"},name:"value"}],return:{name:"void"}}},description:"시간 변경 콜백"},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화",defaultValue:{value:"false",computed:!1}},minuteInterval:{required:!1,tsType:{name:"union",raw:"1 | 5 | 10 | 15 | 30",elements:[{name:"literal",value:"1"},{name:"literal",value:"5"},{name:"literal",value:"10"},{name:"literal",value:"15"},{name:"literal",value:"30"}]},description:"분 간격 (기본 1)",defaultValue:{value:"1",computed:!1}}}};const re={title:"Input/TimePicker",component:c,argTypes:{value:{control:"object",description:"TimeValue 객체 { hour, minute, period }"},disabled:{control:"boolean"},minuteInterval:{control:"select",options:[1,5,10,15,30]}},tags:["autodocs"]},h={render:()=>{const[n,u]=w.useState({hour:8,minute:30,period:"AM"});return e.createElement(l,{style:{gap:o.xlarge}},e.createElement(c,{value:n,onChange:i=>{u(i)}}),e.createElement(m,{style:{fontSize:s.body2.fontSize,color:r.textSecondary}},"선택: ",n.period," ",String(n.hour).padStart(2,"0"),":",String(n.minute).padStart(2,"0")))}},T={name:"상태별 비교",render:()=>e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(b,{title:"상태별 비교",description:"활성 상태와 비활성(Disabled) 상태를 비교합니다."},e.createElement(l,{style:{gap:o["2xlarge"]}},e.createElement(S,{gap:o.small},e.createElement(v,null,"Default"),e.createElement(c,{value:{hour:9,minute:0,period:"AM"}})),e.createElement(S,{gap:o.small},e.createElement(v,null,"Disabled"),e.createElement(c,{value:{hour:9,minute:0,period:"AM"},disabled:!0})))))},E={name:"분 간격",render:()=>e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(b,{title:"분 간격",description:"minuteInterval prop으로 분 단위를 조절합니다."},e.createElement(l,{style:{gap:o["2xlarge"]}},e.createElement(S,{gap:o.small},e.createElement(v,null,"5분 간격"),e.createElement(c,{value:{hour:7,minute:0,period:"AM"},minuteInterval:5})),e.createElement(S,{gap:o.small},e.createElement(v,null,"15분 간격"),e.createElement(c,{value:{hour:7,minute:0,period:"PM"},minuteInterval:15})),e.createElement(S,{gap:o.small},e.createElement(v,null,"30분 간격"),e.createElement(c,{value:{hour:12,minute:0,period:"PM"},minuteInterval:30})))))},C={name:"실전 예시",render:()=>{const[n,u]=w.useState({hour:7,minute:30,period:"AM"});return e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(b,{title:"실전 예시",description:"알람 설정 화면에서의 활용 예시입니다."},e.createElement(l,{style:{maxWidth:375,padding:o.xlarge,backgroundColor:r.backgroundPrimary,borderRadius:g.large,borderWidth:1,borderColor:r.borderDefault,gap:o.xlarge}},e.createElement(m,{style:{fontSize:s.headline.fontSize,fontWeight:"600",color:r.textPrimary}},"기상 알람 설정"),e.createElement(c,{value:n,minuteInterval:5,onChange:i=>{u(i)}}),e.createElement(m,{style:{fontSize:s.caption.fontSize,color:r.textSecondary}},"매일 ",n.period," ",String(n.hour).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),"에 알림을 보내드려요"))))}},P={name:"디자인 스펙",render:()=>e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(b,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 TimePicker 스펙입니다.",badge:"디자인"},e.createElement(L,{title:"값 박스",rows:[{property:"배경색",token:"color/background/secondary",value:r.backgroundSecondary,type:"color"},{property:"테두리",token:"color/border/default",value:r.borderDefault,type:"color"},{property:"텍스트",token:"color/text/primary",value:r.textPrimary,type:"color"},{property:"타이포",token:"Title 3",value:`${s.title3.fontSize}px / Bold`,type:"typography"},{property:"코너 라디우스",token:"borderRadius/medium",value:g.medium,type:"size"}]}),e.createElement(j,null),e.createElement(L,{title:"AM/PM 버튼",rows:[{property:"비활성 배경",token:"color/background/secondary",value:r.backgroundSecondary,type:"color"},{property:"활성 배경",token:"color/background/brand",value:r.backgroundBrand,type:"color"},{property:"비활성 텍스트",token:"color/text/secondary",value:r.textSecondary,type:"color"},{property:"활성 텍스트",token:"color/text/onColor",value:r.textOnColor,type:"color"},{property:"타이포",token:"Label 1",value:`${s.label1.fontSize}px / SemiBold`,type:"typography"}]}),e.createElement(j,null),e.createElement(L,{title:"레이아웃",rows:[{property:"값 박스 크기",token:"—",value:"64 × 56",type:"size"},{property:"AM/PM 크기",token:"—",value:"48 × 36",type:"size"},{property:"화살표 크기",token:"—",value:"36 × 36",type:"size"},{property:"열 간격",token:"spacing/small",value:o.small,type:"size"},{property:"AM/PM 간격",token:"spacing/medium",value:o.medium,type:"size"}]})))},V={name:"사용 가이드",render:()=>e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(b,{title:"사용 가이드",badge:"개발"},e.createElement(B,{title:"Import",code:"import { TimePicker } from '@design-system/components/TimePicker';"}),e.createElement(B,{title:"기본 사용",code:`import { TimePicker, type TimeValue } from '@design-system/components/TimePicker';

const [value, setValue] = useState<TimeValue>({ hour: 8, minute: 0, period: 'AM' });

<TimePicker
  value={value}
  onChange={(v) => {
    setValue(v);
  }}
/>`}),e.createElement(B,{title:"분 간격 설정",code:`<TimePicker
  value={{ hour: 7, minute: 0, period: 'AM' }}
  minuteInterval={15}
  onChange={handleTimeChange}
/>`})))};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<TimeValue>({
      hour: 8,
      minute: 30,
      period: 'AM'
    });
    return <View style={{
      gap: spacing.xlarge
    }}>
        <TimePicker value={value} onChange={v => {
        setValue(v);
      }} />
        <Text style={{
        fontSize: textStyle.body2.fontSize,
        color: semanticColor.textSecondary
      }}>
          선택: {value.period} {String(value.hour).padStart(2, '0')}:{String(value.minute).padStart(2, '0')}
        </Text>
      </View>;
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '상태별 비교',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="상태별 비교" description="활성 상태와 비활성(Disabled) 상태를 비교합니다.">
        <View style={{
        gap: spacing['2xlarge']
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Default</StateLabel>
            <TimePicker value={{
            hour: 9,
            minute: 0,
            period: 'AM'
          }} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <TimePicker value={{
            hour: 9,
            minute: 0,
            period: 'AM'
          }} disabled />
          </Col>
        </View>
      </Section>
    </View>
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '분 간격',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="분 간격" description="minuteInterval prop으로 분 단위를 조절합니다.">
        <View style={{
        gap: spacing['2xlarge']
      }}>
          <Col gap={spacing.small}>
            <StateLabel>5분 간격</StateLabel>
            <TimePicker value={{
            hour: 7,
            minute: 0,
            period: 'AM'
          }} minuteInterval={5} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>15분 간격</StateLabel>
            <TimePicker value={{
            hour: 7,
            minute: 0,
            period: 'PM'
          }} minuteInterval={15} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>30분 간격</StateLabel>
            <TimePicker value={{
            hour: 12,
            minute: 0,
            period: 'PM'
          }} minuteInterval={30} />
          </Col>
        </View>
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => {
    const [value, setValue] = useState<TimeValue>({
      hour: 7,
      minute: 30,
      period: 'AM'
    });
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="알람 설정 화면에서의 활용 예시입니다.">
          <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: radius.large,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          gap: spacing.xlarge
        }}>
            <Text style={{
            fontSize: textStyle.headline.fontSize,
            fontWeight: '600',
            color: semanticColor.textPrimary
          }}>
              기상 알람 설정
            </Text>
            <TimePicker value={value} minuteInterval={5} onChange={v => {
            setValue(v);
          }} />
            <Text style={{
            fontSize: textStyle.caption.fontSize,
            color: semanticColor.textSecondary
          }}>
              매일 {value.period} {String(value.hour).padStart(2, '0')}:{String(value.minute).padStart(2, '0')}에 알림을 보내드려요
            </Text>
          </View>
        </Section>
      </View>;
  }
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 TimePicker 스펙입니다." badge="디자인">
        <TokenSpecTable title="값 박스" rows={[{
        property: '배경색',
        token: 'color/background/secondary',
        value: semanticColor.backgroundSecondary,
        type: 'color'
      }, {
        property: '테두리',
        token: 'color/border/default',
        value: semanticColor.borderDefault,
        type: 'color'
      }, {
        property: '텍스트',
        token: 'color/text/primary',
        value: semanticColor.textPrimary,
        type: 'color'
      }, {
        property: '타이포',
        token: 'Title 3',
        value: \`\${textStyle.title3.fontSize}px / Bold\`,
        type: 'typography'
      }, {
        property: '코너 라디우스',
        token: 'borderRadius/medium',
        value: radius.medium,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="AM/PM 버튼" rows={[{
        property: '비활성 배경',
        token: 'color/background/secondary',
        value: semanticColor.backgroundSecondary,
        type: 'color'
      }, {
        property: '활성 배경',
        token: 'color/background/brand',
        value: semanticColor.backgroundBrand,
        type: 'color'
      }, {
        property: '비활성 텍스트',
        token: 'color/text/secondary',
        value: semanticColor.textSecondary,
        type: 'color'
      }, {
        property: '활성 텍스트',
        token: 'color/text/onColor',
        value: semanticColor.textOnColor,
        type: 'color'
      }, {
        property: '타이포',
        token: 'Label 1',
        value: \`\${textStyle.label1.fontSize}px / SemiBold\`,
        type: 'typography'
      }]} />

        <Divider />

        <TokenSpecTable title="레이아웃" rows={[{
        property: '값 박스 크기',
        token: '—',
        value: '64 × 56',
        type: 'size'
      }, {
        property: 'AM/PM 크기',
        token: '—',
        value: '48 × 36',
        type: 'size'
      }, {
        property: '화살표 크기',
        token: '—',
        value: '36 × 36',
        type: 'size'
      }, {
        property: '열 간격',
        token: 'spacing/small',
        value: spacing.small,
        type: 'size'
      }, {
        property: 'AM/PM 간격',
        token: 'spacing/medium',
        value: spacing.medium,
        type: 'size'
      }]} />
      </Section>
    </View>
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { TimePicker } from '@design-system/components/TimePicker';\`} />
        <CodeBlock title="기본 사용" code={\`import { TimePicker, type TimeValue } from '@design-system/components/TimePicker';

const [value, setValue] = useState<TimeValue>({ hour: 8, minute: 0, period: 'AM' });

<TimePicker
  value={value}
  onChange={(v) => {
    setValue(v);
  }}
/>\`} />
        <CodeBlock title="분 간격 설정" code={\`<TimePicker
  value={{ hour: 7, minute: 0, period: 'AM' }}
  minuteInterval={15}
  onChange={handleTimeChange}
/>\`} />
      </Section>
    </View>
}`,...V.parameters?.docs?.source}}};const ae=["Playground","AllStates","MinuteIntervals","InContext","DesignSpec","Usage"];export{T as AllStates,P as DesignSpec,C as InContext,E as MinuteIntervals,h as Playground,V as Usage,ae as __namedExportsOrder,re as default};
