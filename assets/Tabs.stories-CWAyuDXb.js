import{R as e,V as i,s as O,r as _}from"./iframe-rdsxNJ7l.js";import{f as y,a,M as K,s as t,T as A,c as n,r as L}from"./theme-KAxj7l-q.js";import{S as d,b as c,a as m,D as $,C as S}from"./storyHelpers-D5HpvNsw.js";import{T as M}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";const F={small:{height:40,fontSize:a.body2.fontSize,lineHeight:a.body2.lineHeight,letterSpacing:a.body2.letterSpacing,fontWeight:y.regular,activeFontWeight:y.semibold},medium:{height:48,fontSize:a.headline.fontSize,lineHeight:a.headline.lineHeight,letterSpacing:a.headline.letterSpacing,fontWeight:y.regular,activeFontWeight:y.semibold},large:{height:56,fontSize:a.heading.fontSize,lineHeight:a.heading.lineHeight,letterSpacing:a.heading.letterSpacing,fontWeight:y.regular,activeFontWeight:y.semibold}},Z=2,j=24,q=t.medium,G=32;function r({items:l,value:o,onChange:I,size:D="medium",resize:B="hug"}){const u=F[D],P=B==="fill";return e.createElement(i,{style:p.container,accessibilityRole:"tablist"},e.createElement(i,{style:[p.content,{height:u.height},P?p.contentFill:{gap:j}]},l.map(b=>{const v=b.key===o,x=b.disabled,N=x?n.textTertiary:v?n.textPrimary:n.textTertiary,R={fontSize:u.fontSize,lineHeight:u.lineHeight,letterSpacing:u.letterSpacing,fontWeight:v?u.activeFontWeight:u.fontWeight,color:N,textAlign:"center"};return e.createElement(K,{key:b.key,onPress:()=>!x&&I?.(b.key),disabled:x,accessibilityRole:"tab",accessibilityState:{selected:v,disabled:x},style:[p.tab,P&&p.tabFill,{paddingVertical:q,minWidth:G}]},e.createElement(A,{style:R},b.label),v&&e.createElement(i,{style:[p.indicator,{backgroundColor:n.textPrimary}]}))})),e.createElement(i,{style:p.divider}))}const p=O.create({container:{position:"relative"},content:{flexDirection:"row",alignItems:"center"},contentFill:{justifyContent:"space-evenly"},tab:{alignItems:"center",justifyContent:"center",position:"relative"},tabFill:{flex:1},indicator:{position:"absolute",bottom:0,left:0,right:0,height:Z},divider:{position:"absolute",bottom:0,left:0,right:0,height:1,backgroundColor:n.borderDefault}});r.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabsItem"}],raw:"TabsItem[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},resize:{required:!1,tsType:{name:"union",raw:"'hug' | 'fill'",elements:[{name:"literal",value:"'hug'"},{name:"literal",value:"'fill'"}]},description:"",defaultValue:{value:"'hug'",computed:!1}}}};const s={activeText:{token:"color/text/primary",value:n.textPrimary},inactiveText:{token:"color/text/tertiary",value:n.textTertiary},indicator:{token:"color/text/primary",value:n.textPrimary},divider:{token:"color/border/default",value:n.borderDefault}},h={small:{typo:"Body 2",height:40},medium:{typo:"Headline",height:48},large:{typo:"Heading",height:56}},g=[{key:"tab1",label:"전체"},{key:"tab2",label:"식단"},{key:"tab3",label:"운동"}],H=[{key:"tab1",label:"전체"},{key:"tab2",label:"식단"},{key:"tab3",label:"운동"},{key:"tab4",label:"수면"},{key:"tab5",label:"영양제"},{key:"tab6",label:"수분"}],U=[{key:"tab1",label:"전체"},{key:"tab2",label:"식단"},{key:"tab3",label:"운동",disabled:!0},{key:"tab4",label:"수면",disabled:!0}],te={title:"Navigation/Tabs",component:r,argTypes:{size:{control:"select",options:["small","medium","large"],description:"탭 크기 (Figma: Size)"},resize:{control:"select",options:["hug","fill"],description:"탭 너비 모드 (Figma: Resize)"},value:{control:"text",description:"선택된 탭 key (controlled)"}},tags:["autodocs"]},f={render:()=>{const[l,o]=_.useState("tab1");return e.createElement(i,{style:{maxWidth:400}},e.createElement(r,{items:g,value:l,onChange:o,size:"medium",resize:"hug"}))},parameters:{docs:{description:{story:"**적용 토큰**: 활성 `color/text/primary`, 비활성 `color/text/tertiary`, 인디케이터 `color/text/primary`, 구분선 `color/border/default`"}}}},T={name:"크기별",render:()=>e.createElement(i,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"크기별",description:"Small(40px), Medium(48px), Large(56px) 세 가지 크기를 비교합니다."},e.createElement(i,{style:{gap:t.xlarge,maxWidth:400}},["small","medium","large"].map(l=>e.createElement(c,{key:l,gap:t.small},e.createElement(m,null,`${l} — ${h[l].height}px (${h[l].typo})`),e.createElement(r,{items:g,value:"tab1",size:l,resize:"hug"})))))),parameters:{docs:{description:{story:["**S**: `Body 2` (15px · Regular)","**M**: `Headline` (17px · SemiBold)","**L**: `Heading` (20px · SemiBold)"].join(`

`)}}}},z={name:"Resize 비교",render:()=>e.createElement(i,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"Resize 비교",description:"hug(텍스트 너비)과 fill(균등 분할)의 차이를 비교합니다."},e.createElement(i,{style:{gap:t.xlarge,maxWidth:400}},e.createElement(c,{gap:t.small},e.createElement(m,null,"hug — 텍스트 너비만큼"),e.createElement(r,{items:g,value:"tab1",size:"medium",resize:"hug"})),e.createElement(c,{gap:t.small},e.createElement(m,null,"fill — 균등 분할"),e.createElement(r,{items:g,value:"tab1",size:"medium",resize:"fill"})))))},k={name:"많은 탭",render:()=>e.createElement(i,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"많은 탭 (6개)",description:"탭 개수가 많을 때 hug/fill 각각의 레이아웃을 확인합니다."},e.createElement(i,{style:{gap:t.xlarge,maxWidth:400}},e.createElement(c,{gap:t.small},e.createElement(m,null,"hug"),e.createElement(r,{items:H,value:"tab1",size:"medium",resize:"hug"})),e.createElement(c,{gap:t.small},e.createElement(m,null,"fill"),e.createElement(r,{items:H,value:"tab1",size:"medium",resize:"fill"})))))},E={name:"Disabled",render:()=>e.createElement(i,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"Disabled 탭",description:"특정 탭이 비활성화된 상태입니다. 클릭 불가하며 색상이 흐려집니다."},e.createElement(i,{style:{maxWidth:400}},e.createElement(r,{items:U,value:"tab1",size:"medium",resize:"hug"})))),parameters:{docs:{description:{story:"**Disabled 텍스트**: `color/text/tertiary` — 비활성과 동일 색상이지만 클릭 불가"}}}},C={name:"인터랙티브 데모",render:()=>{const[l,o]=_.useState("tab1");return e.createElement(i,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"인터랙티브 데모",description:"탭을 클릭하여 onChange 동작을 확인합니다."},e.createElement(i,{style:{gap:t.xlarge,maxWidth:400}},e.createElement(c,{gap:t.small},e.createElement(m,null,"hug / Medium"),e.createElement(r,{items:g,value:l,onChange:o,size:"medium",resize:"hug"})),e.createElement(c,{gap:t.small},e.createElement(m,null,"fill / Medium"),e.createElement(r,{items:g,value:l,onChange:o,size:"medium",resize:"fill"})),e.createElement(c,{gap:t.small},e.createElement(m,null,"fill / Large (6개 탭)"),e.createElement(r,{items:H,value:l,onChange:o,size:"large",resize:"fill"})))))}},V={name:"디자인 스펙",render:()=>e.createElement(i,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 Tab 스펙입니다.",badge:"디자인"},e.createElement(M,{title:"색상 토큰",rows:[{property:"활성 텍스트",token:s.activeText.token,value:s.activeText.value,type:"color"},{property:"비활성 텍스트",token:s.inactiveText.token,value:s.inactiveText.value,type:"color"},{property:"인디케이터",token:s.indicator.token,value:s.indicator.value,type:"color"},{property:"하단 구분선",token:s.divider.token,value:s.divider.value,type:"color"}]}),e.createElement($,null),e.createElement(M,{title:"크기별 스펙",rows:[{property:"Small — 높이",token:"—",value:h.small.height,type:"size"},{property:"Small — 타이포",token:"Body 2",value:`${a.body2.fontSize}px / ${a.body2.lineHeight}px / ${a.body2.fontWeight}`,type:"typography"},{property:"Medium — 높이",token:"—",value:h.medium.height,type:"size"},{property:"Medium — 타이포",token:"Headline",value:`${a.headline.fontSize}px / ${a.headline.lineHeight}px / ${a.headline.fontWeight}`,type:"typography"},{property:"Large — 높이",token:"—",value:h.large.height,type:"size"},{property:"Large — 타이포",token:"Heading",value:`${a.heading.fontSize}px / ${a.heading.lineHeight}px / ${a.heading.fontWeight}`,type:"typography"}]}),e.createElement($,null),e.createElement(M,{title:"공통 레이아웃",rows:[{property:"인디케이터 높이",token:"—",value:2,type:"size"},{property:"탭 간 gap (hug)",token:"—",value:24,type:"size"},{property:"탭 상하 패딩",token:"—",value:12,type:"size"},{property:"탭 최소 너비",token:"—",value:32,type:"size"},{property:"구분선 높이",token:"—",value:1,type:"size"}]})))},w={name:"실전 예시",render:()=>{const[l,o]=_.useState("tab1"),I={tab1:"전체 건강 리포트 요약이 표시되는 영역",tab2:"식단 분석 결과 및 칼로리 차트 영역",tab3:"운동 기록 및 소모 칼로리 차트 영역"};return e.createElement(i,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"실전 예시",description:"건강 리포트 탭 — Tabs 아래 콘텐츠 영역이 전환되는 구조입니다."},e.createElement(i,{style:{maxWidth:375,padding:t.xlarge,backgroundColor:n.backgroundPrimary,borderRadius:L.large,borderWidth:1,borderColor:n.borderDefault}},e.createElement(A,{style:{fontSize:a.heading.fontSize,fontWeight:a.heading.fontWeight,lineHeight:a.heading.lineHeight,color:n.textPrimary,marginBottom:t.large}},"건강 리포트"),e.createElement(r,{items:g,value:l,onChange:o,size:"medium",resize:"fill"}),e.createElement(i,{style:{backgroundColor:n.backgroundSecondary,borderRadius:L.medium,padding:t.xlarge,marginTop:t.large,minHeight:120,justifyContent:"center",alignItems:"center"}},e.createElement(A,{style:{fontSize:a.body2.fontSize,color:n.textSecondary,textAlign:"center"}},I[l]??"")))))}},W={name:"사용 가이드",render:()=>e.createElement(i,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"사용 가이드",description:"개발자를 위한 Tab 컴포넌트 사용 예시입니다.",badge:"개발"},e.createElement(S,{title:"Import",code:"import { Tabs } from '@design-system/components/Tabs';"}),e.createElement(S,{title:"기본 사용 (controlled)",code:`const [activeTab, setActiveTab] = useState('tab1');

<Tab
  items={[
    { key: 'tab1', label: '전체' },
    { key: 'tab2', label: '식단' },
    { key: 'tab3', label: '운동' },
  ]}
  value={activeTab}
  onChange={setActiveTab}
  size="medium"
  resize="hug"
/>`}),e.createElement(S,{title:"fill 모드 (균등 분할)",code:`<Tab
  items={items}
  value={activeTab}
  onChange={setActiveTab}
  resize="fill"
/>`}),e.createElement(S,{title:"Disabled 탭",code:`<Tab
  items={[
    { key: 'tab1', label: '전체' },
    { key: 'tab2', label: '식단' },
    { key: 'tab3', label: '운동', disabled: true },
  ]}
  value={activeTab}
  onChange={setActiveTab}
/>`})))};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('tab1');
    return <View style={{
      maxWidth: 400
    }}>
        <Tabs items={defaultItems} value={value} onChange={setValue} size="medium" resize="hug" />
      </View>;
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 활성 \`color/text/primary\`, 비활성 \`color/text/tertiary\`, 인디케이터 \`color/text/primary\`, 구분선 \`color/border/default\`'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '크기별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="크기별" description="Small(40px), Medium(48px), Large(56px) 세 가지 크기를 비교합니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 400
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <Col key={size} gap={spacing.small}>
              <StateLabel>{\`\${size} — \${SIZE_TOKEN_MAP[size].height}px (\${SIZE_TOKEN_MAP[size].typo})\`}</StateLabel>
              <Tabs items={defaultItems} value="tab1" size={size} resize="hug" />
            </Col>)}
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: ['**S**: \`Body 2\` (15px · Regular)', '**M**: \`Headline\` (17px · SemiBold)', '**L**: \`Heading\` (20px · SemiBold)'].join('\\n\\n')
      }
    }
  }
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Resize 비교',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Resize 비교" description="hug(텍스트 너비)과 fill(균등 분할)의 차이를 비교합니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 400
      }}>
          <Col gap={spacing.small}>
            <StateLabel>hug — 텍스트 너비만큼</StateLabel>
            <Tabs items={defaultItems} value="tab1" size="medium" resize="hug" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>fill — 균등 분할</StateLabel>
            <Tabs items={defaultItems} value="tab1" size="medium" resize="fill" />
          </Col>
        </View>
      </Section>
    </View>
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '많은 탭',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="많은 탭 (6개)" description="탭 개수가 많을 때 hug/fill 각각의 레이아웃을 확인합니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 400
      }}>
          <Col gap={spacing.small}>
            <StateLabel>hug</StateLabel>
            <Tabs items={manyItems} value="tab1" size="medium" resize="hug" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>fill</StateLabel>
            <Tabs items={manyItems} value="tab1" size="medium" resize="fill" />
          </Col>
        </View>
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Disabled 탭" description="특정 탭이 비활성화된 상태입니다. 클릭 불가하며 색상이 흐려집니다.">
        <View style={{
        maxWidth: 400
      }}>
          <Tabs items={disabledItems} value="tab1" size="medium" resize="hug" />
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: '**Disabled 텍스트**: \`color/text/tertiary\` — 비활성과 동일 색상이지만 클릭 불가'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [value, setValue] = useState('tab1');
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="탭을 클릭하여 onChange 동작을 확인합니다.">
          <View style={{
          gap: spacing.xlarge,
          maxWidth: 400
        }}>
            <Col gap={spacing.small}>
              <StateLabel>hug / Medium</StateLabel>
              <Tabs items={defaultItems} value={value} onChange={setValue} size="medium" resize="hug" />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>fill / Medium</StateLabel>
              <Tabs items={defaultItems} value={value} onChange={setValue} size="medium" resize="fill" />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>fill / Large (6개 탭)</StateLabel>
              <Tabs items={manyItems} value={value} onChange={setValue} size="large" resize="fill" />
            </Col>
          </View>
        </Section>
      </View>;
  }
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 Tab 스펙입니다." badge="디자인">
        <TokenSpecTable title="색상 토큰" rows={[{
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
        property: '인디케이터',
        token: TOKEN_MAP.indicator.token,
        value: TOKEN_MAP.indicator.value,
        type: 'color'
      }, {
        property: '하단 구분선',
        token: TOKEN_MAP.divider.token,
        value: TOKEN_MAP.divider.value,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="크기별 스펙" rows={[{
        property: 'Small — 높이',
        token: '—',
        value: SIZE_TOKEN_MAP.small.height,
        type: 'size'
      }, {
        property: 'Small — 타이포',
        token: 'Body 2',
        value: \`\${textStyle.body2.fontSize}px / \${textStyle.body2.lineHeight}px / \${textStyle.body2.fontWeight}\`,
        type: 'typography'
      }, {
        property: 'Medium — 높이',
        token: '—',
        value: SIZE_TOKEN_MAP.medium.height,
        type: 'size'
      }, {
        property: 'Medium — 타이포',
        token: 'Headline',
        value: \`\${textStyle.headline.fontSize}px / \${textStyle.headline.lineHeight}px / \${textStyle.headline.fontWeight}\`,
        type: 'typography'
      }, {
        property: 'Large — 높이',
        token: '—',
        value: SIZE_TOKEN_MAP.large.height,
        type: 'size'
      }, {
        property: 'Large — 타이포',
        token: 'Heading',
        value: \`\${textStyle.heading.fontSize}px / \${textStyle.heading.lineHeight}px / \${textStyle.heading.fontWeight}\`,
        type: 'typography'
      }]} />

        <Divider />

        <TokenSpecTable title="공통 레이아웃" rows={[{
        property: '인디케이터 높이',
        token: '—',
        value: 2,
        type: 'size'
      }, {
        property: '탭 간 gap (hug)',
        token: '—',
        value: 24,
        type: 'size'
      }, {
        property: '탭 상하 패딩',
        token: '—',
        value: 12,
        type: 'size'
      }, {
        property: '탭 최소 너비',
        token: '—',
        value: 32,
        type: 'size'
      }, {
        property: '구분선 높이',
        token: '—',
        value: 1,
        type: 'size'
      }]} />
      </Section>
    </View>
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => {
    const [value, setValue] = useState('tab1');
    const tabContent: Record<string, string> = {
      tab1: '전체 건강 리포트 요약이 표시되는 영역',
      tab2: '식단 분석 결과 및 칼로리 차트 영역',
      tab3: '운동 기록 및 소모 칼로리 차트 영역'
    };
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="건강 리포트 탭 — Tabs 아래 콘텐츠 영역이 전환되는 구조입니다.">
          <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: radius.large,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault
        }}>
            <Text style={{
            fontSize: textStyle.heading.fontSize,
            fontWeight: textStyle.heading.fontWeight,
            lineHeight: textStyle.heading.lineHeight,
            color: semanticColor.textPrimary,
            marginBottom: spacing.large
          }}>
              건강 리포트
            </Text>
            <Tabs items={defaultItems} value={value} onChange={setValue} size="medium" resize="fill" />
            <View style={{
            backgroundColor: semanticColor.backgroundSecondary,
            borderRadius: radius.medium,
            padding: spacing.xlarge,
            marginTop: spacing.large,
            minHeight: 120,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
              <Text style={{
              fontSize: textStyle.body2.fontSize,
              color: semanticColor.textSecondary,
              textAlign: 'center'
            }}>
                {tabContent[value] ?? ''}
              </Text>
            </View>
          </View>
        </Section>
      </View>;
  }
}`,...w.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Tab 컴포넌트 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { Tabs } from '@design-system/components/Tabs';\`} />

        <CodeBlock title="기본 사용 (controlled)" code={\`const [activeTab, setActiveTab] = useState('tab1');

<Tab
  items={[
    { key: 'tab1', label: '전체' },
    { key: 'tab2', label: '식단' },
    { key: 'tab3', label: '운동' },
  ]}
  value={activeTab}
  onChange={setActiveTab}
  size="medium"
  resize="hug"
/>\`} />

        <CodeBlock title="fill 모드 (균등 분할)" code={\`<Tab
  items={items}
  value={activeTab}
  onChange={setActiveTab}
  resize="fill"
/>\`} />

        <CodeBlock title="Disabled 탭" code={\`<Tab
  items={[
    { key: 'tab1', label: '전체' },
    { key: 'tab2', label: '식단' },
    { key: 'tab3', label: '운동', disabled: true },
  ]}
  value={activeTab}
  onChange={setActiveTab}
/>\`} />
      </Section>
    </View>
}`,...W.parameters?.docs?.source}}};const ae=["Playground","Sizes","ResizeModes","ManyTabs","Disabled","Controlled","DesignSpec","InContext","Usage"];export{C as Controlled,V as DesignSpec,E as Disabled,w as InContext,k as ManyTabs,f as Playground,z as ResizeModes,T as Sizes,W as Usage,ae as __namedExportsOrder,te as default};
