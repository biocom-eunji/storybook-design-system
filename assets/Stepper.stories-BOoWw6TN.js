import{r as L,R as e,V as l,s as F}from"./iframe-rdsxNJ7l.js";import{I as _}from"./Icon-DGfD0Qtj.js";import{s as a,a as u,M as $,c as t,T as S,f as j,j as O,r as U}from"./theme-KAxj7l-q.js";import{S as d,b as c,a as m,D as A,C as P}from"./storyHelpers-D5HpvNsw.js";import{T as M}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";const N={small:{btnSize:28,fontSize:u.label2.fontSize,gap:a.small},medium:{btnSize:36,fontSize:u.body2.fontSize,gap:a.medium},large:{btnSize:44,fontSize:u.headline.fontSize,gap:a.large}};function i({value:r=0,onChange:g,min:D=0,max:V=99,step:R=1,size:T="medium",disabled:n=!1,unit:b}){const[p,I]=L.useState(r);L.useEffect(()=>{I(r)},[r]);const s=N[T],x=p<=D,f=p>=V,q=y=>{if(n)return;const W=Math.min(V,Math.max(D,p+y));W!==p&&(I(W),g?.(W))},B=T==="small"?14:T==="medium"?18:22;return e.createElement(l,{style:[o.container,{gap:s.gap,opacity:n?.4:1}],accessibilityRole:"adjustable",accessibilityValue:{min:D,max:V,now:p},accessibilityLabel:`수량 ${p}${b?` ${b}`:""}`},e.createElement($,{onPress:()=>q(-R),disabled:n||x,style:({pressed:y})=>[o.button,{width:s.btnSize,height:s.btnSize,borderRadius:s.btnSize/2},(x||n)&&o.buttonDisabled,y&&!x&&!n&&o.pressed],accessibilityLabel:"감소"},e.createElement(_,{name:"minus",size:B,color:x||n?t.iconDisabled:t.iconPrimary})),e.createElement(l,{style:o.valueWrap},e.createElement(S,{style:[o.valueText,{fontSize:s.fontSize},n&&o.valueDisabled]},p),b&&e.createElement(S,{style:[o.unitText,n&&o.valueDisabled]},b)),e.createElement($,{onPress:()=>q(R),disabled:n||f,style:({pressed:y})=>[o.button,{width:s.btnSize,height:s.btnSize,borderRadius:s.btnSize/2},(f||n)&&o.buttonDisabled,y&&!f&&!n&&o.pressed],accessibilityLabel:"증가"},e.createElement(_,{name:"plus",size:B,color:f||n?t.iconDisabled:t.iconPrimary})))}const o=F.create({container:{flexDirection:"row",alignItems:"center",alignSelf:"flex-start"},button:{alignItems:"center",justifyContent:"center",backgroundColor:t.backgroundSecondary,borderWidth:1,borderColor:t.borderDefault},buttonDisabled:{backgroundColor:t.backgroundDisabled,borderColor:t.borderDefault},pressed:{opacity:O.pressOpacity},valueWrap:{flexDirection:"row",alignItems:"baseline",minWidth:40,justifyContent:"center"},valueText:{fontWeight:j.bold,color:t.textPrimary,textAlign:"center"},unitText:{fontSize:u.caption.fontSize,fontWeight:j.medium,color:t.textSecondary,marginLeft:2},valueDisabled:{color:t.textTertiary}});i.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{value:{required:!1,tsType:{name:"number"},description:"현재 값",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"값 변경 콜백"},min:{required:!1,tsType:{name:"number"},description:"최소값",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"최대값",defaultValue:{value:"99",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"증감 단위 (기본 1)",defaultValue:{value:"1",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"크기",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화",defaultValue:{value:"false",computed:!1}},unit:{required:!1,tsType:{name:"string"},description:'단위 텍스트 (예: "개", "회")'}}};const ee={title:"Input/Stepper",component:i,argTypes:{value:{control:{type:"range",min:0,max:99,step:1}},min:{control:"number"},max:{control:"number"},step:{control:"number"},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},unit:{control:"text"}},tags:["autodocs"]},v={render:()=>{const[r,g]=L.useState(3);return e.createElement(l,{style:{gap:a.xlarge}},e.createElement(i,{value:r,onChange:g,min:0,max:10,unit:"개"}),e.createElement(S,{style:{fontSize:u.body2.fontSize,color:t.textSecondary}},"현재 값: ",r))}},C={name:"크기별",render:()=>e.createElement(l,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"크기별",description:"small, medium, large 크기를 비교합니다."},e.createElement(l,{style:{gap:a["2xlarge"]}},["small","medium","large"].map(r=>e.createElement(c,{key:r,gap:a.small},e.createElement(m,null,r),e.createElement(i,{value:5,size:r,min:0,max:10}))))))},E={name:"상태별 비교",render:()=>e.createElement(l,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"상태별 비교",description:"Default, 최소값, 최대값, Disabled 상태를 비교합니다."},e.createElement(l,{style:{gap:a["2xlarge"]}},e.createElement(c,{gap:a.small},e.createElement(m,null,"Default"),e.createElement(i,{value:5,min:0,max:10})),e.createElement(c,{gap:a.small},e.createElement(m,null,"최소값 도달 (- 버튼 비활성)"),e.createElement(i,{value:0,min:0,max:10})),e.createElement(c,{gap:a.small},e.createElement(m,null,"최대값 도달 (+ 버튼 비활성)"),e.createElement(i,{value:10,min:0,max:10})),e.createElement(c,{gap:a.small},e.createElement(m,null,"Disabled"),e.createElement(i,{value:3,min:0,max:10,disabled:!0})))))},k={name:"커스텀 설정",render:()=>e.createElement(l,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"커스텀 설정",description:"증감 단위(step)와 단위 텍스트(unit) 활용 예시입니다."},e.createElement(l,{style:{gap:a["2xlarge"]}},e.createElement(c,{gap:a.small},e.createElement(m,null,'step=5, unit="분"'),e.createElement(i,{value:30,min:0,max:60,step:5,unit:"분"})),e.createElement(c,{gap:a.small},e.createElement(m,null,'step=100, unit="mL"'),e.createElement(i,{value:500,min:0,max:2e3,step:100,unit:"mL",size:"large"})),e.createElement(c,{gap:a.small},e.createElement(m,null,'step=1, unit="회"'),e.createElement(i,{value:3,min:1,max:7,step:1,unit:"회",size:"small"})))))},z={name:"실전 예시",render:()=>{const[r,g]=L.useState(500);return e.createElement(l,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"실전 예시",description:"수분 섭취 기록 카드에서의 활용 예시입니다."},e.createElement(l,{style:{maxWidth:375,padding:a.xlarge,backgroundColor:t.backgroundPrimary,borderRadius:U.large,borderWidth:1,borderColor:t.borderDefault,gap:a.large}},e.createElement(S,{style:{fontSize:u.headline.fontSize,fontWeight:"600",color:t.textPrimary}},"수분 섭취 기록"),e.createElement(i,{value:r,onChange:g,min:0,max:3e3,step:250,unit:"mL",size:"large"}),e.createElement(l,{style:{height:6,borderRadius:3,backgroundColor:t.backgroundDisabled,overflow:"hidden"}},e.createElement(l,{style:{width:`${Math.min(r/2e3*100,100)}%`,height:"100%",backgroundColor:r>=2e3?t.backgroundSuccess:t.backgroundBrand,borderRadius:3}})),e.createElement(S,{style:{fontSize:u.caption.fontSize,color:t.textSecondary}},"목표 2,000mL 중 ",r.toLocaleString(),"mL 달성"))))}},h={name:"디자인 스펙",render:()=>e.createElement(l,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 Stepper 스펙입니다.",badge:"디자인"},e.createElement(M,{title:"증감 버튼",rows:[{property:"배경색",token:"color/background/secondary",value:t.backgroundSecondary,type:"color"},{property:"테두리",token:"color/border/default",value:t.borderDefault,type:"color"},{property:"아이콘",token:"color/icon/primary",value:t.iconPrimary,type:"color"},{property:"비활성 아이콘",token:"color/icon/disabled",value:t.iconDisabled,type:"color"},{property:"비활성 배경",token:"color/background/disabled",value:t.backgroundDisabled,type:"color"},{property:"코너 라디우스",token:"radius/full",value:"원형",type:"size"}]}),e.createElement(A,null),e.createElement(M,{title:"값 표시",rows:[{property:"텍스트",token:"color/text/primary",value:t.textPrimary,type:"color"},{property:"단위",token:"color/text/secondary",value:t.textSecondary,type:"color"},{property:"비활성",token:"color/text/tertiary",value:t.textTertiary,type:"color"}]}),e.createElement(A,null),e.createElement(M,{title:"크기별 레이아웃",rows:[{property:"Small 버튼",token:"—",value:"28 × 28",type:"size"},{property:"Medium 버튼",token:"—",value:"36 × 36",type:"size"},{property:"Large 버튼",token:"—",value:"44 × 44",type:"size"},{property:"Small 간격",token:"spacing/small",value:a.small,type:"size"},{property:"Medium 간격",token:"spacing/medium",value:a.medium,type:"size"},{property:"Large 간격",token:"spacing/large",value:a.large,type:"size"}]})))},w={name:"사용 가이드",render:()=>e.createElement(l,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"사용 가이드",badge:"개발"},e.createElement(P,{title:"Import",code:"import { Stepper } from '@design-system/components/Stepper';"}),e.createElement(P,{title:"기본 사용",code:`const [count, setCount] = useState(1);

<Stepper
  value={count}
  onChange={setCount}
  min={0}
  max={10}
/>`}),e.createElement(P,{title:"커스텀 단위",code:`<Stepper
  value={water}
  onChange={setWater}
  min={0}
  max={3000}
  step={250}
  unit="mL"
  size="large"
/>`})))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(3);
    return <View style={{
      gap: spacing.xlarge
    }}>
        <Stepper value={count} onChange={setCount} min={0} max={10} unit="개" />
        <Text style={{
        fontSize: textStyle.body2.fontSize,
        color: semanticColor.textSecondary
      }}>
          현재 값: {count}
        </Text>
      </View>;
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '크기별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="크기별" description="small, medium, large 크기를 비교합니다.">
        <View style={{
        gap: spacing['2xlarge']
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <Col key={size} gap={spacing.small}>
              <StateLabel>{size}</StateLabel>
              <Stepper value={5} size={size} min={0} max={10} />
            </Col>)}
        </View>
      </Section>
    </View>
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '상태별 비교',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="상태별 비교" description="Default, 최소값, 최대값, Disabled 상태를 비교합니다.">
        <View style={{
        gap: spacing['2xlarge']
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Default</StateLabel>
            <Stepper value={5} min={0} max={10} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>최소값 도달 (- 버튼 비활성)</StateLabel>
            <Stepper value={0} min={0} max={10} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>최대값 도달 (+ 버튼 비활성)</StateLabel>
            <Stepper value={10} min={0} max={10} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <Stepper value={3} min={0} max={10} disabled />
          </Col>
        </View>
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '커스텀 설정',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="커스텀 설정" description="증감 단위(step)와 단위 텍스트(unit) 활용 예시입니다.">
        <View style={{
        gap: spacing['2xlarge']
      }}>
          <Col gap={spacing.small}>
            <StateLabel>step=5, unit="분"</StateLabel>
            <Stepper value={30} min={0} max={60} step={5} unit="분" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>step=100, unit="mL"</StateLabel>
            <Stepper value={500} min={0} max={2000} step={100} unit="mL" size="large" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>step=1, unit="회"</StateLabel>
            <Stepper value={3} min={1} max={7} step={1} unit="회" size="small" />
          </Col>
        </View>
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => {
    const [water, setWater] = useState(500);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="수분 섭취 기록 카드에서의 활용 예시입니다.">
          <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: radius.large,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          gap: spacing.large
        }}>
            <Text style={{
            fontSize: textStyle.headline.fontSize,
            fontWeight: '600',
            color: semanticColor.textPrimary
          }}>
              수분 섭취 기록
            </Text>
            <Stepper value={water} onChange={setWater} min={0} max={3000} step={250} unit="mL" size="large" />
            <View style={{
            height: 6,
            borderRadius: 3,
            backgroundColor: semanticColor.backgroundDisabled,
            overflow: 'hidden'
          }}>
              <View style={{
              width: \`\${Math.min(water / 2000 * 100, 100)}%\` as any,
              height: '100%',
              backgroundColor: water >= 2000 ? semanticColor.backgroundSuccess : semanticColor.backgroundBrand,
              borderRadius: 3
            }} />
            </View>
            <Text style={{
            fontSize: textStyle.caption.fontSize,
            color: semanticColor.textSecondary
          }}>
              목표 2,000mL 중 {water.toLocaleString()}mL 달성
            </Text>
          </View>
        </Section>
      </View>;
  }
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 Stepper 스펙입니다." badge="디자인">
        <TokenSpecTable title="증감 버튼" rows={[{
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
        property: '아이콘',
        token: 'color/icon/primary',
        value: semanticColor.iconPrimary,
        type: 'color'
      }, {
        property: '비활성 아이콘',
        token: 'color/icon/disabled',
        value: semanticColor.iconDisabled,
        type: 'color'
      }, {
        property: '비활성 배경',
        token: 'color/background/disabled',
        value: semanticColor.backgroundDisabled,
        type: 'color'
      }, {
        property: '코너 라디우스',
        token: 'radius/full',
        value: '원형',
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="값 표시" rows={[{
        property: '텍스트',
        token: 'color/text/primary',
        value: semanticColor.textPrimary,
        type: 'color'
      }, {
        property: '단위',
        token: 'color/text/secondary',
        value: semanticColor.textSecondary,
        type: 'color'
      }, {
        property: '비활성',
        token: 'color/text/tertiary',
        value: semanticColor.textTertiary,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="크기별 레이아웃" rows={[{
        property: 'Small 버튼',
        token: '—',
        value: '28 × 28',
        type: 'size'
      }, {
        property: 'Medium 버튼',
        token: '—',
        value: '36 × 36',
        type: 'size'
      }, {
        property: 'Large 버튼',
        token: '—',
        value: '44 × 44',
        type: 'size'
      }, {
        property: 'Small 간격',
        token: 'spacing/small',
        value: spacing.small,
        type: 'size'
      }, {
        property: 'Medium 간격',
        token: 'spacing/medium',
        value: spacing.medium,
        type: 'size'
      }, {
        property: 'Large 간격',
        token: 'spacing/large',
        value: spacing.large,
        type: 'size'
      }]} />
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { Stepper } from '@design-system/components/Stepper';\`} />
        <CodeBlock title="기본 사용" code={\`const [count, setCount] = useState(1);

<Stepper
  value={count}
  onChange={setCount}
  min={0}
  max={10}
/>\`} />
        <CodeBlock title="커스텀 단위" code={\`<Stepper
  value={water}
  onChange={setWater}
  min={0}
  max={3000}
  step={250}
  unit="mL"
  size="large"
/>\`} />
      </Section>
    </View>
}`,...w.parameters?.docs?.source}}};const te=["Playground","Sizes","AllStates","CustomStep","InContext","DesignSpec","Usage"];export{E as AllStates,k as CustomStep,h as DesignSpec,z as InContext,v as Playground,C as Sizes,w as Usage,te as __namedExportsOrder,ee as default};
