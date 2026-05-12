import{R as e,V as l}from"./iframe-rdsxNJ7l.js";import{S as a}from"./Skeleton-kQ45jusu.js";import{S as o,c as k,R as w,b as r,a as i,D as b,d as c,C as s}from"./storyHelpers-D5HpvNsw.js";import{s as t,c as S,r as n,g as v}from"./theme-KAxj7l-q.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-Dxl4hYIg.js";import"./index-0_7wxnUT.js";import"./index-BFVMpTcU.js";import"./index-BAQ2jOn_.js";import"./index-LHpOlSgp.js";import"./index-BF5bKU7j.js";const I={title:"Feedback/Skeleton",component:a,argTypes:{variant:{control:"select",options:["text","circular","rectangular"],description:"스켈레톤 형태"},width:{control:"text",description:"너비"},height:{control:"number",description:"높이"},borderRadius:{control:"number",description:"커스텀 모서리 반경"}},tags:["autodocs"]},m={args:{variant:"rectangular",width:200,height:100}},g={name:"변형",render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(o,{title:"변형",description:"text, circular, rectangular 세 가지 형태를 제공합니다."},e.createElement(l,{style:{gap:t.xlarge}},e.createElement(r,{gap:t.small},e.createElement(i,null,"Text"),e.createElement(l,{style:{maxWidth:300}},e.createElement(a,{variant:"text"}))),e.createElement(r,{gap:t.small},e.createElement(i,null,"Circular"),e.createElement(a,{variant:"circular"})),e.createElement(r,{gap:t.small},e.createElement(i,null,"Rectangular"),e.createElement(l,{style:{maxWidth:300}},e.createElement(a,{variant:"rectangular"}))))))},d={name:"크기 커스텀",render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(o,{title:"크기 커스텀",description:"width와 height를 자유롭게 조합할 수 있습니다."},e.createElement(l,{style:{gap:t.xlarge}},e.createElement(w,{gap:t.large,align:"flex-end"},e.createElement(r,{gap:t.small},e.createElement(i,null,"40×40"),e.createElement(a,{variant:"rectangular",width:40,height:40})),e.createElement(r,{gap:t.small},e.createElement(i,null,"80×80"),e.createElement(a,{variant:"rectangular",width:80,height:80})),e.createElement(r,{gap:t.small},e.createElement(i,null,"120×60"),e.createElement(a,{variant:"rectangular",width:120,height:60})),e.createElement(r,{gap:t.small},e.createElement(i,null,"200×20"),e.createElement(a,{variant:"rectangular",width:200,height:20}))),e.createElement(b,null),e.createElement(w,{gap:t.large,align:"flex-end"},e.createElement(r,{gap:t.small},e.createElement(i,null,"원형 24"),e.createElement(a,{variant:"circular",width:24,height:24})),e.createElement(r,{gap:t.small},e.createElement(i,null,"원형 40"),e.createElement(a,{variant:"circular",width:40,height:40})),e.createElement(r,{gap:t.small},e.createElement(i,null,"원형 56"),e.createElement(a,{variant:"circular",width:56,height:56})),e.createElement(r,{gap:t.small},e.createElement(i,null,"원형 72"),e.createElement(a,{variant:"circular",width:72,height:72}))))))},p={name:"실전 예시",render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(o,{title:"실전 예시 — 카드 스켈레톤",description:"실제 UI 레이아웃에 맞춰 Skeleton을 조합한 예시입니다."},e.createElement(k,{items:[{label:"프로필 카드",content:e.createElement(l,{style:{padding:t.large,borderRadius:n.medium,borderWidth:1,borderColor:S.borderDefault,width:260,gap:t.medium}},e.createElement(w,{gap:t.medium,align:"center"},e.createElement(a,{variant:"circular",width:48,height:48}),e.createElement(l,{style:{flex:1,gap:t.small}},e.createElement(a,{variant:"text",width:120}),e.createElement(a,{variant:"text",width:80,height:12}))),e.createElement(a,{variant:"text"}),e.createElement(a,{variant:"text",width:"80%"}))},{label:"미디어 카드",content:e.createElement(l,{style:{borderRadius:n.medium,borderWidth:1,borderColor:S.borderDefault,width:260,overflow:"hidden"}},e.createElement(a,{variant:"rectangular",height:140,borderRadius:0}),e.createElement(l,{style:{padding:t.large,gap:t.small}},e.createElement(a,{variant:"text",width:"90%"}),e.createElement(a,{variant:"text",width:"60%",height:12}),e.createElement(l,{style:{marginTop:t.small}},e.createElement(a,{variant:"rectangular",height:36,borderRadius:n.small}))))},{label:"리스트 아이템",content:e.createElement(l,{style:{width:260,gap:t.medium}},[0,1,2].map(E=>e.createElement(w,{key:E,gap:t.medium,align:"center"},e.createElement(a,{variant:"circular",width:36,height:36}),e.createElement(l,{style:{flex:1,gap:t.xsmall}},e.createElement(a,{variant:"text",width:"70%"}),e.createElement(a,{variant:"text",width:"40%",height:12})),e.createElement(a,{variant:"rectangular",width:60,height:28,borderRadius:n.small}))))}]})))},u={name:"디자인 스펙",render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(o,{title:"디자인 스펙",description:"디자이너와 개발자를 위한 Skeleton 토큰 상세 스펙입니다."},e.createElement(c,{title:"기본값",rows:[{label:"배경색",value:v[96],token:"coolNeutral[96]"},{label:"쉬머 하이라이트",value:v[90],token:"coolNeutral[90]"},{label:"애니메이션 주기",value:"1.5s",token:"—"}]}),e.createElement(b,null),e.createElement(c,{title:"Text 변형",rows:[{label:"높이",value:"16px",token:"—"},{label:"너비",value:"100%",token:"—"},{label:"모서리 반경",value:"4px",token:"—"}]}),e.createElement(c,{title:"Circular 변형",rows:[{label:"높이",value:"40px",token:"—"},{label:"너비",value:"40px",token:"—"},{label:"모서리 반경",value:"9999px",token:"radius.full"}]}),e.createElement(c,{title:"Rectangular 변형",rows:[{label:"높이",value:"100px",token:"—"},{label:"너비",value:"100%",token:"—"},{label:"모서리 반경",value:`${n.small}px`,token:"radius.small"}]})))},h={name:"사용 가이드",render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(o,{title:"사용 가이드",description:"개발자를 위한 Skeleton 컴포넌트 사용 예시입니다."},e.createElement(s,{title:"Import",code:"import { Skeleton } from '@design-system/components/Skeleton';"}),e.createElement(s,{title:"기본 사용",code:`<Skeleton variant="rectangular" />
<Skeleton variant="text" />
<Skeleton variant="circular" />`}),e.createElement(s,{title:"커스텀 크기",code:`<Skeleton
  variant="rectangular"
  width={200}
  height={120}
  borderRadius={16}
/>`}),e.createElement(s,{title:"카드 스켈레톤 조합",code:`<View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
  <Skeleton variant="circular" width={48} height={48} />
  <View style={{ flex: 1, gap: 8 }}>
    <Skeleton variant="text" width={120} />
    <Skeleton variant="text" width={80} height={12} />
  </View>
</View>`})))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 200,
    height: 100
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '변형',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="변형" description="text, circular, rectangular 세 가지 형태를 제공합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Text</StateLabel>
            <View style={{
            maxWidth: 300
          }}>
              <Skeleton variant="text" />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Circular</StateLabel>
            <Skeleton variant="circular" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Rectangular</StateLabel>
            <View style={{
            maxWidth: 300
          }}>
              <Skeleton variant="rectangular" />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '크기 커스텀',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="크기 커스텀" description="width와 height를 자유롭게 조합할 수 있습니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Row gap={spacing.large} align="flex-end">
            <Col gap={spacing.small}>
              <StateLabel>40×40</StateLabel>
              <Skeleton variant="rectangular" width={40} height={40} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>80×80</StateLabel>
              <Skeleton variant="rectangular" width={80} height={80} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>120×60</StateLabel>
              <Skeleton variant="rectangular" width={120} height={60} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>200×20</StateLabel>
              <Skeleton variant="rectangular" width={200} height={20} />
            </Col>
          </Row>

          <Divider />

          <Row gap={spacing.large} align="flex-end">
            <Col gap={spacing.small}>
              <StateLabel>원형 24</StateLabel>
              <Skeleton variant="circular" width={24} height={24} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>원형 40</StateLabel>
              <Skeleton variant="circular" width={40} height={40} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>원형 56</StateLabel>
              <Skeleton variant="circular" width={56} height={56} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>원형 72</StateLabel>
              <Skeleton variant="circular" width={72} height={72} />
            </Col>
          </Row>
        </View>
      </Section>
    </View>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시 — 카드 스켈레톤" description="실제 UI 레이아웃에 맞춰 Skeleton을 조합한 예시입니다.">
        <CompareGrid items={[{
        label: '프로필 카드',
        content: <View style={{
          padding: spacing.large,
          borderRadius: radius.medium,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          width: 260,
          gap: spacing.medium
        }}>
                  <Row gap={spacing.medium} align="center">
                    <Skeleton variant="circular" width={48} height={48} />
                    <View style={{
              flex: 1,
              gap: spacing.small
            }}>
                      <Skeleton variant="text" width={120} />
                      <Skeleton variant="text" width={80} height={12} />
                    </View>
                  </Row>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="80%" />
                </View>
      }, {
        label: '미디어 카드',
        content: <View style={{
          borderRadius: radius.medium,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          width: 260,
          overflow: 'hidden'
        }}>
                  <Skeleton variant="rectangular" height={140} borderRadius={0} />
                  <View style={{
            padding: spacing.large,
            gap: spacing.small
          }}>
                    <Skeleton variant="text" width="90%" />
                    <Skeleton variant="text" width="60%" height={12} />
                    <View style={{
              marginTop: spacing.small
            }}>
                      <Skeleton variant="rectangular" height={36} borderRadius={radius.small} />
                    </View>
                  </View>
                </View>
      }, {
        label: '리스트 아이템',
        content: <View style={{
          width: 260,
          gap: spacing.medium
        }}>
                  {[0, 1, 2].map(i => <Row key={i} gap={spacing.medium} align="center">
                      <Skeleton variant="circular" width={36} height={36} />
                      <View style={{
              flex: 1,
              gap: spacing.xsmall
            }}>
                        <Skeleton variant="text" width="70%" />
                        <Skeleton variant="text" width="40%" height={12} />
                      </View>
                      <Skeleton variant="rectangular" width={60} height={28} borderRadius={radius.small} />
                    </Row>)}
                </View>
      }]} />
      </Section>
    </View>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="디자이너와 개발자를 위한 Skeleton 토큰 상세 스펙입니다.">
        <SpecTable title="기본값" rows={[{
        label: '배경색',
        value: coolNeutral[96],
        token: 'coolNeutral[96]'
      }, {
        label: '쉬머 하이라이트',
        value: coolNeutral[90],
        token: 'coolNeutral[90]'
      }, {
        label: '애니메이션 주기',
        value: '1.5s',
        token: '—'
      }]} />

        <Divider />

        <SpecTable title="Text 변형" rows={[{
        label: '높이',
        value: '16px',
        token: '—'
      }, {
        label: '너비',
        value: '100%',
        token: '—'
      }, {
        label: '모서리 반경',
        value: '4px',
        token: '—'
      }]} />

        <SpecTable title="Circular 변형" rows={[{
        label: '높이',
        value: '40px',
        token: '—'
      }, {
        label: '너비',
        value: '40px',
        token: '—'
      }, {
        label: '모서리 반경',
        value: '9999px',
        token: 'radius.full'
      }]} />

        <SpecTable title="Rectangular 변형" rows={[{
        label: '높이',
        value: '100px',
        token: '—'
      }, {
        label: '너비',
        value: '100%',
        token: '—'
      }, {
        label: '모서리 반경',
        value: \`\${radius.small}px\`,
        token: 'radius.small'
      }]} />
      </Section>
    </View>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Skeleton 컴포넌트 사용 예시입니다.">
        <CodeBlock title="Import" code={\`import { Skeleton } from '@design-system/components/Skeleton';\`} />

        <CodeBlock title="기본 사용" code={\`<Skeleton variant="rectangular" />
<Skeleton variant="text" />
<Skeleton variant="circular" />\`} />

        <CodeBlock title="커스텀 크기" code={\`<Skeleton
  variant="rectangular"
  width={200}
  height={120}
  borderRadius={16}
/>\`} />

        <CodeBlock title="카드 스켈레톤 조합" code={\`<View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
  <Skeleton variant="circular" width={48} height={48} />
  <View style={{ flex: 1, gap: 8 }}>
    <Skeleton variant="text" width={120} />
    <Skeleton variant="text" width={80} height={12} />
  </View>
</View>\`} />
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};const B=["Playground","Variants","CustomSizes","CardExample","DesignSpec","Usage"];export{p as CardExample,d as CustomSizes,u as DesignSpec,m as Playground,h as Usage,g as Variants,B as __namedExportsOrder,I as default};
