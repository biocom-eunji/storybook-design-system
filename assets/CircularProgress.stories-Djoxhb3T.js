import{R as e,V as n}from"./iframe-rdsxNJ7l.js";import{C as a}from"./CircularProgress-gytsOpyk.js";import{S as c,R as i,b as s,a as z,D as x,C}from"./storyHelpers-D5HpvNsw.js";import{s as r,c as o,f as E,a as l,T as p}from"./theme-KAxj7l-q.js";import{T as g}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";const W={title:"Feedback/CircularProgress",component:a,argTypes:{progress:{control:{type:"range",min:0,max:1,step:.01}},size:{control:"number"},strokeWidth:{control:"number"},color:{control:"select",options:["primary","success","warning","error"]},showLabel:{control:"boolean"}},tags:["autodocs"]},m={render:()=>e.createElement(i,{gap:r.xlarge,align:"center"},e.createElement(a,{progress:.72,color:"primary"}),e.createElement(a,{progress:.85,color:"success"}),e.createElement(a,{progress:.45,color:"warning"}))},d={name:"진행률별",render:()=>e.createElement(n,{style:{gap:r["3xlarge"]}},e.createElement(c,{title:"진행률별",description:"0% ~ 100% 진행률을 비교합니다."},e.createElement(i,{gap:r.large,align:"center"},[0,.25,.5,.75,1].map(t=>e.createElement(s,{key:t,gap:r.small},e.createElement(a,{progress:t,size:64}))))))},u={name:"Color별",render:()=>e.createElement(n,{style:{gap:r["3xlarge"]}},e.createElement(c,{title:"Color별",description:"primary, success, warning, error 색상을 비교합니다."},e.createElement(i,{gap:r.xlarge,align:"center"},["primary","success","warning","error"].map(t=>e.createElement(s,{key:t,gap:r.small},e.createElement(z,null,t),e.createElement(a,{progress:.65,color:t,size:64}))))))},y={name:"크기별",render:()=>e.createElement(n,{style:{gap:r["3xlarge"]}},e.createElement(c,{title:"크기별",description:"size prop으로 크기를 조절합니다."},e.createElement(i,{gap:r.xlarge,align:"center"},[40,56,80,120].map(t=>e.createElement(s,{key:t,gap:r.small},e.createElement(z,null,`${t}px`),e.createElement(a,{progress:.72,size:t}))))))},S={name:"실전 예시",render:()=>e.createElement(n,{style:{gap:r["3xlarge"]}},e.createElement(c,{title:"실전 예시",description:"건강 목표 달성률 대시보드입니다."},e.createElement(n,{style:{maxWidth:375,padding:r.xlarge,backgroundColor:o.backgroundPrimary,borderRadius:r.small,borderWidth:1,borderColor:o.borderDefault}},e.createElement(p,{style:{fontSize:l.headline.fontSize,fontWeight:"600",color:o.textPrimary,marginBottom:r.large}},"오늘의 목표"),e.createElement(i,{gap:r["2xlarge"],align:"center"},e.createElement(s,{gap:r.small},e.createElement(a,{progress:.85,color:"success",label:"85%"}),e.createElement(p,{style:{fontSize:l.caption.fontSize,color:o.textSecondary,textAlign:"center"}},"수분")),e.createElement(s,{gap:r.small},e.createElement(a,{progress:.6,color:"primary",label:"60%"}),e.createElement(p,{style:{fontSize:l.caption.fontSize,color:o.textSecondary,textAlign:"center"}},"운동")),e.createElement(s,{gap:r.small},e.createElement(a,{progress:.3,color:"error",label:"30%"}),e.createElement(p,{style:{fontSize:l.caption.fontSize,color:o.textSecondary,textAlign:"center"}},"수면"))))))},b={name:"디자인 스펙",render:()=>e.createElement(n,{style:{gap:r["3xlarge"]}},e.createElement(c,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 CircularProgress 구성 요소별 스펙입니다.",badge:"디자인"},e.createElement(g,{title:"트랙 (배경 링)",rows:[{property:"색상",token:"color/background/disabled",value:o.backgroundDisabled,type:"color"}]}),e.createElement(x,null),e.createElement(g,{title:"진행 호 (color별)",rows:[{property:"primary",token:"color/background/brand",value:o.backgroundBrand,type:"color"},{property:"success",token:"color/background/success",value:o.backgroundSuccess,type:"color"},{property:"warning",token:"color/background/warning",value:o.backgroundWarning,type:"color"},{property:"error",token:"color/background/error",value:o.backgroundError,type:"color"}]}),e.createElement(x,null),e.createElement(g,{title:"라벨 텍스트",rows:[{property:"색상",token:"color/text/primary",value:o.textPrimary,type:"color"},{property:"fontWeight",token:"fontWeight/bold",value:E.bold},{property:"fontSize (size >= 80)",token:"Headline",value:`${l.headline.fontSize}px`,type:"typography"},{property:"fontSize (size >= 56)",token:"Label 1",value:`${l.label1.fontSize}px`,type:"typography"},{property:"fontSize (size < 56)",token:"Caption",value:`${l.caption.fontSize}px`,type:"typography"}]}),e.createElement(x,null),e.createElement(g,{title:"기본값",rows:[{property:"기본 size (지름)",token:"—",value:80,type:"size"},{property:"기본 strokeWidth",token:"—",value:6,type:"size"},{property:"strokeLinecap",token:"—",value:"round"}]})))},k={name:"사용 가이드",render:()=>e.createElement(n,{style:{gap:r["3xlarge"]}},e.createElement(c,{title:"사용 가이드",badge:"개발"},e.createElement(C,{title:"Import",code:"import { CircularProgress } from '@design-system/components/CircularProgress';"}),e.createElement(C,{title:"기본 사용",code:"<CircularProgress progress={0.72} />"}),e.createElement(C,{title:"커스텀",code:`<CircularProgress
  progress={goal / target}
  size={120}
  strokeWidth={8}
  color="success"
  label={\`\${Math.round(goal/target*100)}%\`}
/>`})))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Row gap={spacing.xlarge} align="center">
      <CircularProgress progress={0.72} color="primary" />
      <CircularProgress progress={0.85} color="success" />
      <CircularProgress progress={0.45} color="warning" />
    </Row>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '진행률별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="진행률별" description="0% ~ 100% 진행률을 비교합니다.">
        <Row gap={spacing.large} align="center">
          {[0, 0.25, 0.5, 0.75, 1].map(v => <Col key={v} gap={spacing.small}>
              <CircularProgress progress={v} size={64} />
            </Col>)}
        </Row>
      </Section>
    </View>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Color별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Color별" description="primary, success, warning, error 색상을 비교합니다.">
        <Row gap={spacing.xlarge} align="center">
          {(['primary', 'success', 'warning', 'error'] as const).map(color => <Col key={color} gap={spacing.small}>
              <StateLabel>{color}</StateLabel>
              <CircularProgress progress={0.65} color={color} size={64} />
            </Col>)}
        </Row>
      </Section>
    </View>
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '크기별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="크기별" description="size prop으로 크기를 조절합니다.">
        <Row gap={spacing.xlarge} align="center">
          {[40, 56, 80, 120].map(size => <Col key={size} gap={spacing.small}>
              <StateLabel>{\`\${size}px\`}</StateLabel>
              <CircularProgress progress={0.72} size={size} />
            </Col>)}
        </Row>
      </Section>
    </View>
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="건강 목표 달성률 대시보드입니다.">
        <View style={{
        maxWidth: 375,
        padding: spacing.xlarge,
        backgroundColor: semanticColor.backgroundPrimary,
        borderRadius: spacing.small,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault
      }}>
          <Text style={{
          fontSize: textStyle.headline.fontSize,
          fontWeight: '600',
          color: semanticColor.textPrimary,
          marginBottom: spacing.large
        }}>
            오늘의 목표
          </Text>
          <Row gap={spacing['2xlarge']} align="center">
            <Col gap={spacing.small}>
              <CircularProgress progress={0.85} color="success" label="85%" />
              <Text style={{
              fontSize: textStyle.caption.fontSize,
              color: semanticColor.textSecondary,
              textAlign: 'center'
            }}>수분</Text>
            </Col>
            <Col gap={spacing.small}>
              <CircularProgress progress={0.6} color="primary" label="60%" />
              <Text style={{
              fontSize: textStyle.caption.fontSize,
              color: semanticColor.textSecondary,
              textAlign: 'center'
            }}>운동</Text>
            </Col>
            <Col gap={spacing.small}>
              <CircularProgress progress={0.3} color="error" label="30%" />
              <Text style={{
              fontSize: textStyle.caption.fontSize,
              color: semanticColor.textSecondary,
              textAlign: 'center'
            }}>수면</Text>
            </Col>
          </Row>
        </View>
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 CircularProgress 구성 요소별 스펙입니다." badge="디자인">
        <TokenSpecTable title="트랙 (배경 링)" rows={[{
        property: '색상',
        token: 'color/background/disabled',
        value: semanticColor.backgroundDisabled,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="진행 호 (color별)" rows={[{
        property: 'primary',
        token: 'color/background/brand',
        value: semanticColor.backgroundBrand,
        type: 'color'
      }, {
        property: 'success',
        token: 'color/background/success',
        value: semanticColor.backgroundSuccess,
        type: 'color'
      }, {
        property: 'warning',
        token: 'color/background/warning',
        value: semanticColor.backgroundWarning,
        type: 'color'
      }, {
        property: 'error',
        token: 'color/background/error',
        value: semanticColor.backgroundError,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="라벨 텍스트" rows={[{
        property: '색상',
        token: 'color/text/primary',
        value: semanticColor.textPrimary,
        type: 'color'
      }, {
        property: 'fontWeight',
        token: 'fontWeight/bold',
        value: fw.bold
      }, {
        property: 'fontSize (size >= 80)',
        token: 'Headline',
        value: \`\${textStyle.headline.fontSize}px\`,
        type: 'typography'
      }, {
        property: 'fontSize (size >= 56)',
        token: 'Label 1',
        value: \`\${textStyle.label1.fontSize}px\`,
        type: 'typography'
      }, {
        property: 'fontSize (size < 56)',
        token: 'Caption',
        value: \`\${textStyle.caption.fontSize}px\`,
        type: 'typography'
      }]} />

        <Divider />

        <TokenSpecTable title="기본값" rows={[{
        property: '기본 size (지름)',
        token: '—',
        value: 80,
        type: 'size'
      }, {
        property: '기본 strokeWidth',
        token: '—',
        value: 6,
        type: 'size'
      }, {
        property: 'strokeLinecap',
        token: '—',
        value: 'round'
      }]} />
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { CircularProgress } from '@design-system/components/CircularProgress';\`} />
        <CodeBlock title="기본 사용" code={\`<CircularProgress progress={0.72} />\`} />
        <CodeBlock title="커스텀" code={\`<CircularProgress\\n  progress={goal / target}\\n  size={120}\\n  strokeWidth={8}\\n  color="success"\\n  label={\\\`\\\${Math.round(goal/target*100)}%\\\`}\\n/>\`} />
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};const R=["Playground","ProgressValues","Colors","Sizes","InContext","DesignSpec","Usage"];export{u as Colors,b as DesignSpec,S as InContext,m as Playground,d as ProgressValues,y as Sizes,k as Usage,R as __namedExportsOrder,W as default};
