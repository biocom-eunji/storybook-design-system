import{R as e,V as a,s as _,r as R}from"./iframe-rdsxNJ7l.js";import{a as t,r as i,M as O,d as f,c as n,T,f as $,s as r}from"./theme-KAxj7l-q.js";import{S as m,D as N,b as w,a as V,C as g}from"./storyHelpers-D5HpvNsw.js";import{T as P}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";const K={small:{height:32,containerPadding:2,containerRadius:i.small,segmentRadius:i.xsmall,fontSize:t.label2.fontSize,lineHeight:t.label2.lineHeight,letterSpacing:t.label2.letterSpacing},medium:{height:40,containerPadding:2,containerRadius:i.small,segmentRadius:i.small,fontSize:t.body2.fontSize,lineHeight:t.body2.lineHeight,letterSpacing:t.body2.letterSpacing},large:{height:48,containerPadding:3,containerRadius:i.medium,segmentRadius:i.small,fontSize:t.headline.fontSize,lineHeight:t.headline.lineHeight,letterSpacing:t.headline.letterSpacing}};function s({items:l,value:d,onChange:I,size:W="medium"}){const c=K[W];return e.createElement(a,{style:[L.container,{height:c.height,padding:c.containerPadding,borderRadius:c.containerRadius}],accessibilityRole:"radiogroup"},l.map(p=>{const E=p.key===d,u=p.disabled,A={...L.segment,borderRadius:c.segmentRadius,...E?{backgroundColor:n.backgroundPrimary,...f.level1}:{}},B=u?n.textTertiary:E?n.textPrimary:n.textSecondary,D={fontSize:c.fontSize,lineHeight:c.lineHeight,letterSpacing:c.letterSpacing,fontWeight:$.medium,color:B,textAlign:"center"};return e.createElement(O,{key:p.key,onPress:()=>!u&&I?.(p.key),disabled:u,accessibilityRole:"radio",accessibilityState:{checked:E,disabled:u},style:A},e.createElement(T,{style:D,numberOfLines:1},p.label))}))}const L=_.create({container:{flexDirection:"row",alignItems:"center",backgroundColor:n.backgroundTertiary},segment:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"}});s.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentedControlItem"}],raw:"SegmentedControlItem[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const o={containerBg:{token:"color/background/tertiary",value:n.backgroundTertiary},activeBg:{token:"color/background/primary",value:n.backgroundPrimary},activeShadow:{value:`offset(0,0) blur(${f.level1.shadowRadius}) opacity(${f.level1.shadowOpacity})`},activeText:{token:"color/text/primary",value:n.textPrimary},inactiveText:{token:"color/text/secondary",value:n.textSecondary},disabledText:{token:"color/text/tertiary",value:n.textTertiary}},M=[{key:"all",label:"전체"},{key:"diet",label:"식단"},{key:"exercise",label:"운동"}],F=[{key:"daily",label:"일간"},{key:"weekly",label:"주간"}],H=[{key:"all",label:"전체"},{key:"diet",label:"식단"},{key:"exercise",label:"운동"},{key:"sleep",label:"수면"},{key:"supplement",label:"영양제"}],j=[{key:"all",label:"전체"},{key:"diet",label:"식단"},{key:"exercise",label:"운동",disabled:!0}],Q={title:"Input/SegmentedControl",component:s,argTypes:{size:{control:"select",options:["small","medium","large"],description:"크기 (Figma: Size)"},value:{control:"text",description:"선택된 세그먼트 key"}},tags:["autodocs"]},y={render:()=>{const[l,d]=R.useState("all");return e.createElement(a,{style:{maxWidth:375}},e.createElement(s,{items:M,value:l,onChange:d,size:"medium"}))},parameters:{docs:{description:{story:"**적용 토큰**: 컨테이너 `color/background/tertiary`, 활성 `color/background/primary` + `Level 1` shadow, 텍스트 `color/text/primary`/`secondary`"}}}},b={name:"크기별",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"크기별",description:"Small(32px), Medium(40px), Large(48px) 세 가지 크기를 비교합니다."},e.createElement(a,{style:{gap:r.xlarge,maxWidth:375}},["small","medium","large"].map(l=>e.createElement(w,{key:l,gap:r.small},e.createElement(V,null,`${l}`),e.createElement(s,{items:M,value:"all",size:l})))))),parameters:{docs:{description:{story:["**Small**: `Label 2` (13px), height 32, radius S=`borderRadius/small`, segment=`borderRadius/xsmall`","**Medium**: `Body 2` (15px), height 40, radius `borderRadius/small`","**Large**: `Headline` (17px), height 48, radius `borderRadius/medium`, segment=`borderRadius/small`"].join(`

`)}}}},S={name:"2개 항목",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"2개 항목",description:"세그먼트 2개인 케이스입니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(s,{items:F,value:"daily",size:"medium"}))))},x={name:"5개 항목",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"5개 항목",description:"세그먼트 수가 많을 때의 레이아웃을 확인합니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(s,{items:H,value:"all",size:"medium"}))))},k={name:"Disabled",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"Disabled",description:"특정 세그먼트가 비활성화된 상태입니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(s,{items:j,value:"all",size:"medium"}))))},v={name:"인터랙티브 데모",render:()=>{const[l,d]=R.useState("all");return e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"인터랙티브 데모",description:"세그먼트를 클릭하여 onChange 동작을 확인합니다."},e.createElement(a,{style:{gap:r.xlarge,maxWidth:375}},e.createElement(w,{gap:r.small},e.createElement(V,null,"Medium (3개)"),e.createElement(s,{items:M,value:l,onChange:d,size:"medium"})),e.createElement(w,{gap:r.small},e.createElement(V,null,"Large (5개)"),e.createElement(s,{items:H,value:l,onChange:d,size:"large"})))))}},h={name:"디자인 스펙",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"디자인 스펙",description:"Figma 실측 기준 SegmentedControl 스펙입니다.",badge:"디자인"},e.createElement(P,{title:"색상 토큰",rows:[{property:"컨테이너 배경",token:o.containerBg.token,value:o.containerBg.value,type:"color"},{property:"활성 세그먼트 배경",token:o.activeBg.token,value:o.activeBg.value,type:"color"},{property:"활성 그림자",token:"Level 1",value:o.activeShadow.value},{property:"활성 텍스트",token:o.activeText.token,value:o.activeText.value,type:"color"},{property:"비활성 텍스트",token:o.inactiveText.token,value:o.inactiveText.value,type:"color"},{property:"Disabled 텍스트",token:o.disabledText.token,value:o.disabledText.value,type:"color"}]}),e.createElement(N,null),e.createElement(P,{title:"크기별 스펙 (Figma 실측)",rows:[{property:"S — 높이",token:"—",value:32,type:"size"},{property:"S — 컨테이너 padding",token:"—",value:2,type:"size"},{property:"S — 컨테이너 radius",token:"borderRadius/small",value:i.small,type:"size"},{property:"S — 세그먼트 radius",token:"borderRadius/xsmall",value:i.xsmall,type:"size"},{property:"S — 타이포",token:"Label 2",value:`${t.label2.fontSize}px / ${t.label2.lineHeight}px / Medium`,type:"typography"},{property:"M — 높이",token:"—",value:40,type:"size"},{property:"M — 컨테이너 padding",token:"—",value:2,type:"size"},{property:"M — 컨테이너 radius",token:"borderRadius/small",value:i.small,type:"size"},{property:"M — 세그먼트 radius",token:"borderRadius/small",value:i.small,type:"size"},{property:"M — 타이포",token:"Body 2",value:`${t.body2.fontSize}px / ${t.body2.lineHeight}px / Medium`,type:"typography"},{property:"L — 높이",token:"—",value:48,type:"size"},{property:"L — 컨테이너 padding",token:"—",value:3,type:"size"},{property:"L — 컨테이너 radius",token:"borderRadius/medium",value:i.medium,type:"size"},{property:"L — 세그먼트 radius",token:"borderRadius/small",value:i.small,type:"size"},{property:"L — 타이포",token:"Headline",value:`${t.headline.fontSize}px / ${t.headline.lineHeight}px / Medium`,type:"typography"}]})))},C={name:"실전 예시",render:()=>{const[l,d]=R.useState("daily");return e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"실전 예시",description:"기간 선택 — 일간/주간/월간 SegmentedControl과 하단 차트 영역 플레이스홀더입니다."},e.createElement(a,{style:{maxWidth:375,padding:r.xlarge,backgroundColor:n.backgroundPrimary,borderRadius:i.large,borderWidth:1,borderColor:n.borderDefault,gap:r.large}},e.createElement(T,{style:{fontSize:t.heading.fontSize,fontWeight:t.heading.fontWeight,lineHeight:t.heading.lineHeight,color:n.textPrimary}},"활동 리포트"),e.createElement(s,{items:[{key:"daily",label:"일간"},{key:"weekly",label:"주간"},{key:"monthly",label:"월간"}],value:l,onChange:d,size:"medium"}),e.createElement(a,{style:{backgroundColor:n.backgroundTertiary,borderRadius:i.medium,height:180,alignItems:"center",justifyContent:"center"}},e.createElement(T,{style:{fontSize:t.body2.fontSize,color:n.textSecondary}},l==="daily"?"일간":l==="weekly"?"주간":"월간"," 차트 영역")),e.createElement(T,{style:{fontSize:t.caption.fontSize,color:n.textTertiary,textAlign:"center"}},"데이터가 충분히 모이면 더 정확한 분석 제공"))))}},z={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(m,{title:"사용 가이드",description:"개발자를 위한 SegmentedControl 사용 예시입니다.",badge:"개발"},e.createElement(g,{title:"Import",code:"import { SegmentedControl } from '@design-system/components/SegmentedControl';"}),e.createElement(g,{title:"기본 사용 (controlled)",code:`const [period, setPeriod] = useState('daily');

<SegmentedControl
  items={[
    { key: 'daily', label: '일간' },
    { key: 'weekly', label: '주간' },
    { key: 'monthly', label: '월간' },
  ]}
  value={period}
  onChange={setPeriod}
  size="medium"
/>`}),e.createElement(g,{title:"Disabled 항목",code:`<SegmentedControl
  items={[
    { key: 'all', label: '전체' },
    { key: 'diet', label: '식단' },
    { key: 'exercise', label: '운동', disabled: true },
  ]}
  value={selected}
  onChange={setSelected}
/>`}),e.createElement(g,{title:"Tab과의 차이",code:`// Tab = 콘텐츠 전환 네비게이션 (페이지 레벨)
// role="tablist" + role="tab"
<Tab items={tabs} value={activeTab} onChange={setActiveTab} />

// SegmentedControl = 옵션 선택 폼 컨트롤 (값 선택)
// role="radiogroup" + role="radio"
<SegmentedControl items={options} value={selected} onChange={setSelected} />`})))};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('all');
    return <View style={{
      maxWidth: 375
    }}>
        <SegmentedControl items={items3} value={value} onChange={setValue} size="medium" />
      </View>;
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 컨테이너 \`color/background/tertiary\`, 활성 \`color/background/primary\` + \`Level 1\` shadow, 텍스트 \`color/text/primary\`/\`secondary\`'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '크기별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="크기별" description="Small(32px), Medium(40px), Large(48px) 세 가지 크기를 비교합니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 375
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <Col key={size} gap={spacing.small}>
              <StateLabel>{\`\${size}\`}</StateLabel>
              <SegmentedControl items={items3} value="all" size={size} />
            </Col>)}
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: ['**Small**: \`Label 2\` (13px), height 32, radius S=\`borderRadius/small\`, segment=\`borderRadius/xsmall\`', '**Medium**: \`Body 2\` (15px), height 40, radius \`borderRadius/small\`', '**Large**: \`Headline\` (17px), height 48, radius \`borderRadius/medium\`, segment=\`borderRadius/small\`'].join('\\n\\n')
      }
    }
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '2개 항목',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="2개 항목" description="세그먼트 2개인 케이스입니다.">
        <View style={{
        maxWidth: 375
      }}>
          <SegmentedControl items={items2} value="daily" size="medium" />
        </View>
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '5개 항목',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="5개 항목" description="세그먼트 수가 많을 때의 레이아웃을 확인합니다.">
        <View style={{
        maxWidth: 375
      }}>
          <SegmentedControl items={items5} value="all" size="medium" />
        </View>
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Disabled" description="특정 세그먼트가 비활성화된 상태입니다.">
        <View style={{
        maxWidth: 375
      }}>
          <SegmentedControl items={disabledItems} value="all" size="medium" />
        </View>
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [value, setValue] = useState('all');
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="세그먼트를 클릭하여 onChange 동작을 확인합니다.">
          <View style={{
          gap: spacing.xlarge,
          maxWidth: 375
        }}>
            <Col gap={spacing.small}>
              <StateLabel>Medium (3개)</StateLabel>
              <SegmentedControl items={items3} value={value} onChange={setValue} size="medium" />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>Large (5개)</StateLabel>
              <SegmentedControl items={items5} value={value} onChange={setValue} size="large" />
            </Col>
          </View>
        </Section>
      </View>;
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 실측 기준 SegmentedControl 스펙입니다." badge="디자인">
        <TokenSpecTable title="색상 토큰" rows={[{
        property: '컨테이너 배경',
        token: TOKEN_MAP.containerBg.token,
        value: TOKEN_MAP.containerBg.value,
        type: 'color'
      }, {
        property: '활성 세그먼트 배경',
        token: TOKEN_MAP.activeBg.token,
        value: TOKEN_MAP.activeBg.value,
        type: 'color'
      }, {
        property: '활성 그림자',
        token: 'Level 1',
        value: TOKEN_MAP.activeShadow.value
      }, {
        property: '활성 텍스트',
        token: TOKEN_MAP.activeText.token,
        value: TOKEN_MAP.activeText.value,
        type: 'color'
      }, {
        property: '비활성 텍스트',
        token: TOKEN_MAP.inactiveText.token,
        value: TOKEN_MAP.inactiveText.value,
        type: 'color'
      }, {
        property: 'Disabled 텍스트',
        token: TOKEN_MAP.disabledText.token,
        value: TOKEN_MAP.disabledText.value,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="크기별 스펙 (Figma 실측)" rows={[{
        property: 'S — 높이',
        token: '—',
        value: 32,
        type: 'size'
      }, {
        property: 'S — 컨테이너 padding',
        token: '—',
        value: 2,
        type: 'size'
      }, {
        property: 'S — 컨테이너 radius',
        token: 'borderRadius/small',
        value: radius.small,
        type: 'size'
      }, {
        property: 'S — 세그먼트 radius',
        token: 'borderRadius/xsmall',
        value: radius.xsmall,
        type: 'size'
      }, {
        property: 'S — 타이포',
        token: 'Label 2',
        value: \`\${textStyle.label2.fontSize}px / \${textStyle.label2.lineHeight}px / Medium\`,
        type: 'typography'
      }, {
        property: 'M — 높이',
        token: '—',
        value: 40,
        type: 'size'
      }, {
        property: 'M — 컨테이너 padding',
        token: '—',
        value: 2,
        type: 'size'
      }, {
        property: 'M — 컨테이너 radius',
        token: 'borderRadius/small',
        value: radius.small,
        type: 'size'
      }, {
        property: 'M — 세그먼트 radius',
        token: 'borderRadius/small',
        value: radius.small,
        type: 'size'
      }, {
        property: 'M — 타이포',
        token: 'Body 2',
        value: \`\${textStyle.body2.fontSize}px / \${textStyle.body2.lineHeight}px / Medium\`,
        type: 'typography'
      }, {
        property: 'L — 높이',
        token: '—',
        value: 48,
        type: 'size'
      }, {
        property: 'L — 컨테이너 padding',
        token: '—',
        value: 3,
        type: 'size'
      }, {
        property: 'L — 컨테이너 radius',
        token: 'borderRadius/medium',
        value: radius.medium,
        type: 'size'
      }, {
        property: 'L — 세그먼트 radius',
        token: 'borderRadius/small',
        value: radius.small,
        type: 'size'
      }, {
        property: 'L — 타이포',
        token: 'Headline',
        value: \`\${textStyle.headline.fontSize}px / \${textStyle.headline.lineHeight}px / Medium\`,
        type: 'typography'
      }]} />
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => {
    const [period, setPeriod] = useState('daily');
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="기간 선택 — 일간/주간/월간 SegmentedControl과 하단 차트 영역 플레이스홀더입니다.">
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
            fontSize: textStyle.heading.fontSize,
            fontWeight: textStyle.heading.fontWeight,
            lineHeight: textStyle.heading.lineHeight,
            color: semanticColor.textPrimary
          }}>
              활동 리포트
            </Text>
            <SegmentedControl items={[{
            key: 'daily',
            label: '일간'
          }, {
            key: 'weekly',
            label: '주간'
          }, {
            key: 'monthly',
            label: '월간'
          }]} value={period} onChange={setPeriod} size="medium" />
            <View style={{
            backgroundColor: semanticColor.backgroundTertiary,
            borderRadius: radius.medium,
            height: 180,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: textStyle.body2.fontSize,
              color: semanticColor.textSecondary
            }}>
                {period === 'daily' ? '일간' : period === 'weekly' ? '주간' : '월간'} 차트 영역
              </Text>
            </View>
            <Text style={{
            fontSize: textStyle.caption.fontSize,
            color: semanticColor.textTertiary,
            textAlign: 'center'
          }}>
              데이터가 충분히 모이면 더 정확한 분석 제공
            </Text>
          </View>
        </Section>
      </View>;
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 SegmentedControl 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { SegmentedControl } from '@design-system/components/SegmentedControl';\`} />

        <CodeBlock title="기본 사용 (controlled)" code={\`const [period, setPeriod] = useState('daily');

<SegmentedControl
  items={[
    { key: 'daily', label: '일간' },
    { key: 'weekly', label: '주간' },
    { key: 'monthly', label: '월간' },
  ]}
  value={period}
  onChange={setPeriod}
  size="medium"
/>\`} />

        <CodeBlock title="Disabled 항목" code={\`<SegmentedControl
  items={[
    { key: 'all', label: '전체' },
    { key: 'diet', label: '식단' },
    { key: 'exercise', label: '운동', disabled: true },
  ]}
  value={selected}
  onChange={setSelected}
/>\`} />

        <CodeBlock title="Tab과의 차이" code={\`// Tab = 콘텐츠 전환 네비게이션 (페이지 레벨)
// role="tablist" + role="tab"
<Tab items={tabs} value={activeTab} onChange={setActiveTab} />

// SegmentedControl = 옵션 선택 폼 컨트롤 (값 선택)
// role="radiogroup" + role="radio"
<SegmentedControl items={options} value={selected} onChange={setSelected} />\`} />
      </Section>
    </View>
}`,...z.parameters?.docs?.source}}};const X=["Playground","Sizes","TwoItems","FiveItems","Disabled","Interactive","DesignSpec","InContext","Usage"];export{h as DesignSpec,k as Disabled,x as FiveItems,C as InContext,v as Interactive,y as Playground,b as Sizes,S as TwoItems,z as Usage,X as __namedExportsOrder,Q as default};
