import{R as e,V as o}from"./iframe-rdsxNJ7l.js";import{L as a}from"./LevelIndicator-CpsZH9Wv.js";import{S as g,b as l,a as n,D as b,C as c}from"./storyHelpers-D5HpvNsw.js";import{T as y}from"./TokenSpecTable-CJp3A6kK.js";import{s as t,c as r,a as u,T as S}from"./theme-KAxj7l-q.js";import"./preload-helper-PPVm8Dsz.js";const w={title:"Data Display/LevelIndicator",component:a,argTypes:{current:{control:"select",options:[null,"bad","caution","good","great"],description:"현재 활성 단계"}},tags:["autodocs"]},i={render:()=>e.createElement(o,{style:{maxWidth:375,padding:t.large}},e.createElement(a,{current:"caution"}))},s={name:"전체 상태",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(g,{title:"전체 상태",description:"step 0(없음)부터 step 4(좋음)까지 5가지 상태입니다."},e.createElement(o,{style:{gap:t.xlarge,maxWidth:375}},e.createElement(l,{gap:t.small},e.createElement(n,null,"상태 없음 (current=null)"),e.createElement(a,{current:null})),e.createElement(l,{gap:t.small},e.createElement(n,null,"나쁨 (critical)"),e.createElement(a,{current:"bad"})),e.createElement(l,{gap:t.small},e.createElement(n,null,"주의 (warning)"),e.createElement(a,{current:"caution"})),e.createElement(l,{gap:t.small},e.createElement(n,null,"양호 (caution)"),e.createElement(a,{current:"good"})),e.createElement(l,{gap:t.small},e.createElement(n,null,"좋음 (safe)"),e.createElement(a,{current:"great"})))))},p={name:"실전 예시",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(g,{title:"실전 예시",description:"카드 내부에 LevelIndicator를 배치한 예시입니다."},e.createElement(o,{style:{maxWidth:375,padding:t.xlarge,backgroundColor:r.backgroundPrimary,borderRadius:t.small,borderWidth:1,borderColor:r.borderDefault,gap:t.large}},e.createElement(o,null,e.createElement(S,{style:{fontSize:u.headline.fontSize,fontWeight:"600",color:r.textPrimary}},"과민음식 분석"),e.createElement(S,{style:{fontSize:u.body2.fontSize,color:r.textSecondary,marginTop:t.xsmall}},"이번 주 섭취 빈도 기준")),e.createElement(a,{current:"caution"}))))},d={name:"디자인 스펙",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(g,{title:"디자인 스펙",description:"Figma 기반 LevelIndicator 스펙입니다.",badge:"디자인"},e.createElement(y,{title:"구간별 색상 (role 토큰)",rows:[{property:"Critical (나쁨)",token:"role/error",value:r.backgroundError,type:"color"},{property:"Warning (주의)",token:"role/warning",value:r.backgroundWarning,type:"color"},{property:"Caution (양호)",token:"role/caution",value:r.backgroundCaution,type:"color"},{property:"Safe (좋음)",token:"role/success",value:r.backgroundSuccess,type:"color"},{property:"비활성 라벨",token:"color/text/tertiary",value:r.textTertiary,type:"color"},{property:"활성 라벨 (말풍선)",token:"color/text/onColor",value:r.textOnColor,type:"color"}]}),e.createElement(b,null),e.createElement(y,{title:"레이아웃",rows:[{property:"막대 높이",token:"—",value:19,type:"size"},{property:"막대 radius",token:"—",value:6,type:"size"},{property:"말풍선 높이",token:"—",value:24,type:"size"},{property:"말풍선 arrow",token:"—",value:5,type:"size"},{property:"말풍선 radius",token:"borderRadius/xsmall",value:4,type:"size"}]}),e.createElement(b,null),e.createElement(y,{title:"타이포그래피",rows:[{property:"비활성 라벨",token:"Label 1",value:`${u.label1.fontSize}px / Medium`,type:"typography"},{property:"활성 라벨 (말풍선)",token:"Caption",value:`${u.caption.fontSize}px / Medium`,type:"typography"}]})))},m={name:"사용 가이드",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(g,{title:"사용 가이드",description:"개발자를 위한 LevelIndicator 사용 예시입니다.",badge:"개발"},e.createElement(c,{title:"Import",code:"import { LevelIndicator } from '@design-system/components/LevelIndicator';"}),e.createElement(c,{title:"기본 사용 (기본 4단계)",code:'<LevelIndicator current="caution" />'}),e.createElement(c,{title:"상태 없음",code:"<LevelIndicator current={null} />"}),e.createElement(c,{title:"커스텀 레벨",code:`<LevelIndicator
  levels={[
    { key: 'low',  label: '낮음', color: 'safe' },
    { key: 'mid',  label: '보통', color: 'caution' },
    { key: 'high', label: '높음', color: 'critical' },
  ]}
  current="mid"
/>`})))};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    maxWidth: 375,
    padding: spacing.large
  }}>
      <LevelIndicator current="caution" />
    </View>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '전체 상태',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="전체 상태" description="step 0(없음)부터 step 4(좋음)까지 5가지 상태입니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>상태 없음 (current=null)</StateLabel>
            <LevelIndicator current={null} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>나쁨 (critical)</StateLabel>
            <LevelIndicator current="bad" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>주의 (warning)</StateLabel>
            <LevelIndicator current="caution" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>양호 (caution)</StateLabel>
            <LevelIndicator current="good" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>좋음 (safe)</StateLabel>
            <LevelIndicator current="great" />
          </Col>
        </View>
      </Section>
    </View>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="카드 내부에 LevelIndicator를 배치한 예시입니다.">
        <View style={{
        maxWidth: 375,
        padding: spacing.xlarge,
        backgroundColor: semanticColor.backgroundPrimary,
        borderRadius: spacing.small,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        gap: spacing.large
      }}>
          <View>
            <Text style={{
            fontSize: textStyle.headline.fontSize,
            fontWeight: '600',
            color: semanticColor.textPrimary
          }}>과민음식 분석</Text>
            <Text style={{
            fontSize: textStyle.body2.fontSize,
            color: semanticColor.textSecondary,
            marginTop: spacing.xsmall
          }}>이번 주 섭취 빈도 기준</Text>
          </View>
          <LevelIndicator current="caution" />
        </View>
      </Section>
    </View>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 기반 LevelIndicator 스펙입니다." badge="디자인">
        <TokenSpecTable title="구간별 색상 (role 토큰)" rows={[{
        property: 'Critical (나쁨)',
        token: 'role/error',
        value: semanticColor.backgroundError,
        type: 'color'
      }, {
        property: 'Warning (주의)',
        token: 'role/warning',
        value: semanticColor.backgroundWarning,
        type: 'color'
      }, {
        property: 'Caution (양호)',
        token: 'role/caution',
        value: semanticColor.backgroundCaution,
        type: 'color'
      }, {
        property: 'Safe (좋음)',
        token: 'role/success',
        value: semanticColor.backgroundSuccess,
        type: 'color'
      }, {
        property: '비활성 라벨',
        token: 'color/text/tertiary',
        value: semanticColor.textTertiary,
        type: 'color'
      }, {
        property: '활성 라벨 (말풍선)',
        token: 'color/text/onColor',
        value: semanticColor.textOnColor,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="레이아웃" rows={[{
        property: '막대 높이',
        token: '—',
        value: 19,
        type: 'size'
      }, {
        property: '막대 radius',
        token: '—',
        value: 6,
        type: 'size'
      }, {
        property: '말풍선 높이',
        token: '—',
        value: 24,
        type: 'size'
      }, {
        property: '말풍선 arrow',
        token: '—',
        value: 5,
        type: 'size'
      }, {
        property: '말풍선 radius',
        token: 'borderRadius/xsmall',
        value: 4,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="타이포그래피" rows={[{
        property: '비활성 라벨',
        token: 'Label 1',
        value: \`\${textStyle.label1.fontSize}px / Medium\`,
        type: 'typography'
      }, {
        property: '활성 라벨 (말풍선)',
        token: 'Caption',
        value: \`\${textStyle.caption.fontSize}px / Medium\`,
        type: 'typography'
      }]} />
      </Section>
    </View>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 LevelIndicator 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { LevelIndicator } from '@design-system/components/LevelIndicator';\`} />

        <CodeBlock title="기본 사용 (기본 4단계)" code={\`<LevelIndicator current="caution" />\`} />

        <CodeBlock title="상태 없음" code={\`<LevelIndicator current={null} />\`} />

        <CodeBlock title="커스텀 레벨" code={\`<LevelIndicator
  levels={[
    { key: 'low',  label: '낮음', color: 'safe' },
    { key: 'mid',  label: '보통', color: 'caution' },
    { key: 'high', label: '높음', color: 'critical' },
  ]}
  current="mid"
/>\`} />
      </Section>
    </View>
}`,...m.parameters?.docs?.source}}};const f=["Playground","AllStates","InContext","DesignSpec","Usage"];export{s as AllStates,d as DesignSpec,p as InContext,i as Playground,m as Usage,f as __namedExportsOrder,w as default};
