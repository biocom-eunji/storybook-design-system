import{R as e,V as u,r as W}from"./iframe-CExKz_YG.js";import{M as L,i as P,m as f,c as o,s as l,T as m,f as n,a as s}from"./theme-DRANkRo4.js";import{S,R as y,C as d,a as p,b as C,c as F,d as b}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";const H={ios:{small:{trackW:44,trackH:26,thumbSize:22},medium:{trackW:52,trackH:32,thumbSize:28}},normal:{small:{trackW:36,trackH:20,thumbSize:16},medium:{trackW:44,trackH:24,thumbSize:20}}};function a({active:t=!1,onPress:i,platform:c="ios",size:N,disabled:g=!1}){const T=N??(c==="ios"?"medium":"small"),r=H[c][T],M=(r.trackH-r.thumbSize)/2,O=g?t?f[90]:o[96]:t?f[45]:o[90],B=o[100],R=g?{}:{shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.15,shadowRadius:2,elevation:2};return e.createElement(L,{onPress:g?void 0:i,accessibilityRole:"switch",accessibilityState:{checked:t},style:({pressed:V})=>({opacity:V&&!g?P.pressOpacity:1})},e.createElement(u,{style:{width:r.trackW,height:r.trackH,borderRadius:r.trackH/2,backgroundColor:O,justifyContent:"center",paddingHorizontal:M}},e.createElement(u,{style:{width:r.thumbSize,height:r.thumbSize,borderRadius:r.thumbSize/2,backgroundColor:B,alignSelf:t?"flex-end":"flex-start",...R}})))}a.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},platform:{required:!1,tsType:{name:"union",raw:"'ios' | 'normal'",elements:[{name:"literal",value:"'ios'"},{name:"literal",value:"'normal'"}]},description:"",defaultValue:{value:"'ios'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _={title:"Input/Switch",component:a,argTypes:{active:{control:"boolean"},platform:{control:"select",options:["ios","normal"]},size:{control:"select",options:["small","medium"]},disabled:{control:"boolean"}},tags:["autodocs"]},v={args:{active:!1,platform:"ios",size:"medium",disabled:!1}},h={name:"모든 변형",render:()=>e.createElement(S,{title:"모든 변형",description:"스위치의 모든 조합을 한눈에 확인할 수 있습니다."},["ios","normal"].map(t=>e.createElement(u,{key:t,style:{marginBottom:l["3xlarge"]}},e.createElement(m,{style:{fontSize:s.medium,fontWeight:n.bold,color:o[17],marginBottom:l.large}},t==="ios"?"iOS":"Normal"),["small","medium"].map(i=>e.createElement(u,{key:i,style:{marginBottom:l.xlarge}},e.createElement(m,{style:{fontSize:s.small,fontWeight:n.semibold,color:o[40],marginBottom:l.small}},i==="small"?"Small":"Medium"),e.createElement(y,{gap:l["2xlarge"],wrap:!0},e.createElement(d,null,e.createElement(p,null,"꺼짐"),e.createElement(a,{platform:t,size:i,active:!1})),e.createElement(d,null,e.createElement(p,null,"켜짐"),e.createElement(a,{platform:t,size:i,active:!0})),e.createElement(d,null,e.createElement(p,null,"비활성 꺼짐"),e.createElement(a,{platform:t,size:i,active:!1,disabled:!0})),e.createElement(d,null,e.createElement(p,null,"비활성 켜짐"),e.createElement(a,{platform:t,size:i,active:!0,disabled:!0}))))))))},z={name:"플랫폼 비교",render:()=>e.createElement(S,{title:"플랫폼 비교",description:"iOS와 Normal 플랫폼의 동일한 상태를 나란히 비교합니다."},e.createElement(m,{style:{fontSize:s.small,fontWeight:n.semibold,color:o[30],marginBottom:l.medium}},"Medium 크기 기준"),e.createElement(F,{items:[{label:"iOS — 꺼짐",content:e.createElement(a,{platform:"ios",size:"medium",active:!1})},{label:"Normal — 꺼짐",content:e.createElement(a,{platform:"normal",size:"medium",active:!1})},{label:"iOS — 켜짐",content:e.createElement(a,{platform:"ios",size:"medium",active:!0})},{label:"Normal — 켜짐",content:e.createElement(a,{platform:"normal",size:"medium",active:!0})},{label:"iOS — 비활성 꺼짐",content:e.createElement(a,{platform:"ios",size:"medium",active:!1,disabled:!0})},{label:"Normal — 비활성 꺼짐",content:e.createElement(a,{platform:"normal",size:"medium",active:!1,disabled:!0})},{label:"iOS — 비활성 켜짐",content:e.createElement(a,{platform:"ios",size:"medium",active:!0,disabled:!0})},{label:"Normal — 비활성 켜짐",content:e.createElement(a,{platform:"normal",size:"medium",active:!0,disabled:!0})}]}))},w={name:"크기 비교",render:()=>e.createElement(S,{title:"크기 비교",description:"플랫폼별 Small / Medium 크기를 비교합니다."},["ios","normal"].map(t=>e.createElement(u,{key:t,style:{marginBottom:l["2xlarge"]}},e.createElement(m,{style:{fontSize:s.medium,fontWeight:n.bold,color:o[17],marginBottom:l.medium}},t==="ios"?"iOS":"Normal"),e.createElement(y,{gap:l["3xlarge"]},e.createElement(d,{gap:l.small},e.createElement(p,null,t==="ios"?"Small — 44×26":"Small — 36×20"),e.createElement(a,{platform:t,size:"small",active:!0})),e.createElement(d,{gap:l.small},e.createElement(p,null,t==="ios"?"Medium — 52×32":"Medium — 44×24"),e.createElement(a,{platform:t,size:"medium",active:!0}))))))},k={name:"인터랙티브 데모",render:()=>{const[t,i]=W.useState(!1),[c,N]=W.useState(!1);return e.createElement(S,{title:"인터랙티브 데모",description:"스위치를 직접 눌러보며 상태 변화를 확인하세요."},e.createElement(d,{gap:l.xlarge},e.createElement(y,{gap:l.medium},e.createElement(a,{platform:"ios",size:"medium",active:t,onPress:()=>i(!t)}),e.createElement(m,{style:{fontSize:s.medium,fontWeight:n.medium,color:o[17]}},"알림 설정"),e.createElement(m,{style:{fontSize:s.small,fontWeight:n.semibold,color:t?f[45]:o[60]}},t?"켜짐":"꺼짐")),e.createElement(y,{gap:l.medium},e.createElement(a,{platform:"normal",size:"medium",active:c,onPress:()=>N(!c)}),e.createElement(m,{style:{fontSize:s.medium,fontWeight:n.medium,color:o[17]}},"다크 모드"),e.createElement(m,{style:{fontSize:s.small,fontWeight:n.semibold,color:c?f[45]:o[60]}},c?"켜짐":"꺼짐"))))}},E={name:"디자인 스펙",render:()=>e.createElement(S,{title:"디자인 스펙",description:"스위치 컴포넌트의 치수와 색상 토큰을 정리한 참고 자료입니다."},e.createElement(C,{title:"iOS 치수",rows:[{label:"Small 트랙 너비",value:"44px",token:"—"},{label:"Small 트랙 높이",value:"26px",token:"—"},{label:"Small 썸 크기",value:"22px",token:"—"},{label:"Medium 트랙 너비",value:"52px",token:"—"},{label:"Medium 트랙 높이",value:"32px",token:"—"},{label:"Medium 썸 크기",value:"28px",token:"—"}]}),e.createElement(u,{style:{height:l.large}}),e.createElement(C,{title:"Normal 치수",rows:[{label:"Small 트랙 너비",value:"36px",token:"—"},{label:"Small 트랙 높이",value:"20px",token:"—"},{label:"Small 썸 크기",value:"16px",token:"—"},{label:"Medium 트랙 너비",value:"44px",token:"—"},{label:"Medium 트랙 높이",value:"24px",token:"—"},{label:"Medium 썸 크기",value:"20px",token:"—"}]}),e.createElement(u,{style:{height:l.large}}),e.createElement(C,{title:"색상",rows:[{label:"활성 트랙",value:"#22C3BC",token:"mint[45]"},{label:"비활성 트랙",value:o[90],token:"coolNeutral[90]"},{label:"비활성화 활성 트랙",value:f[90],token:"mint[90]"},{label:"비활성화 비활성 트랙",value:o[96],token:"coolNeutral[96]"},{label:"썸 색상",value:"#FFFFFF",token:"—"}]}))},x={name:"사용 가이드",render:()=>e.createElement(S,{title:"사용 가이드",description:"개발 시 참고할 수 있는 코드 예제입니다."},e.createElement(b,{title:"Import",code:"import { Switch } from '@design-system/components/Switch';"}),e.createElement(b,{title:"기본 사용",code:`<Switch />
<Switch active />
<Switch size="small" />
<Switch disabled />`}),e.createElement(b,{title:"제어 컴포넌트 (useState)",code:`const [active, setActive] = useState(false);

<Switch
  active={active}
  onPress={() => setActive(!active)}
/>`}),e.createElement(b,{title:"플랫폼별 사용",code:`// iOS 스타일 (기본값)
<Switch platform="ios" size="medium" active />

// Normal 스타일
<Switch platform="normal" size="small" active={false} />`}))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    active: false,
    platform: 'ios',
    size: 'medium',
    disabled: false
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '모든 변형',
  render: () => <Section title="모든 변형" description="스위치의 모든 조합을 한눈에 확인할 수 있습니다.">
      {(['ios', 'normal'] as const).map(platform => <View key={platform} style={{
      marginBottom: spacing['3xlarge']
    }}>
          <Text style={{
        fontSize: fontSize.medium,
        fontWeight: fontWeight.bold,
        color: coolNeutral[17],
        marginBottom: spacing.large
      }}>
            {platform === 'ios' ? 'iOS' : 'Normal'}
          </Text>

          {(['small', 'medium'] as const).map(size => <View key={size} style={{
        marginBottom: spacing.xlarge
      }}>
              <Text style={{
          fontSize: fontSize.small,
          fontWeight: fontWeight.semibold,
          color: coolNeutral[40],
          marginBottom: spacing.small
        }}>
                {size === 'small' ? 'Small' : 'Medium'}
              </Text>
              <Row gap={spacing['2xlarge']} wrap>
                <Col>
                  <StateLabel>꺼짐</StateLabel>
                  <Switch platform={platform} size={size} active={false} />
                </Col>
                <Col>
                  <StateLabel>켜짐</StateLabel>
                  <Switch platform={platform} size={size} active />
                </Col>
                <Col>
                  <StateLabel>비활성 꺼짐</StateLabel>
                  <Switch platform={platform} size={size} active={false} disabled />
                </Col>
                <Col>
                  <StateLabel>비활성 켜짐</StateLabel>
                  <Switch platform={platform} size={size} active disabled />
                </Col>
              </Row>
            </View>)}
        </View>)}
    </Section>
}`,...h.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '플랫폼 비교',
  render: () => <Section title="플랫폼 비교" description="iOS와 Normal 플랫폼의 동일한 상태를 나란히 비교합니다.">
      <Text style={{
      fontSize: fontSize.small,
      fontWeight: fontWeight.semibold,
      color: coolNeutral[30],
      marginBottom: spacing.medium
    }}>
        Medium 크기 기준
      </Text>
      <CompareGrid items={[{
      label: 'iOS — 꺼짐',
      content: <Switch platform="ios" size="medium" active={false} />
    }, {
      label: 'Normal — 꺼짐',
      content: <Switch platform="normal" size="medium" active={false} />
    }, {
      label: 'iOS — 켜짐',
      content: <Switch platform="ios" size="medium" active />
    }, {
      label: 'Normal — 켜짐',
      content: <Switch platform="normal" size="medium" active />
    }, {
      label: 'iOS — 비활성 꺼짐',
      content: <Switch platform="ios" size="medium" active={false} disabled />
    }, {
      label: 'Normal — 비활성 꺼짐',
      content: <Switch platform="normal" size="medium" active={false} disabled />
    }, {
      label: 'iOS — 비활성 켜짐',
      content: <Switch platform="ios" size="medium" active disabled />
    }, {
      label: 'Normal — 비활성 켜짐',
      content: <Switch platform="normal" size="medium" active disabled />
    }]} />
    </Section>
}`,...z.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '크기 비교',
  render: () => <Section title="크기 비교" description="플랫폼별 Small / Medium 크기를 비교합니다.">
      {(['ios', 'normal'] as const).map(platform => <View key={platform} style={{
      marginBottom: spacing['2xlarge']
    }}>
          <Text style={{
        fontSize: fontSize.medium,
        fontWeight: fontWeight.bold,
        color: coolNeutral[17],
        marginBottom: spacing.medium
      }}>
            {platform === 'ios' ? 'iOS' : 'Normal'}
          </Text>
          <Row gap={spacing['3xlarge']}>
            <Col gap={spacing.small}>
              <StateLabel>
                {platform === 'ios' ? 'Small — 44×26' : 'Small — 36×20'}
              </StateLabel>
              <Switch platform={platform} size="small" active />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>
                {platform === 'ios' ? 'Medium — 52×32' : 'Medium — 44×24'}
              </StateLabel>
              <Switch platform={platform} size="medium" active />
            </Col>
          </Row>
        </View>)}
    </Section>
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [notif, setNotif] = useState(false);
    const [dark, setDark] = useState(false);
    return <Section title="인터랙티브 데모" description="스위치를 직접 눌러보며 상태 변화를 확인하세요.">
        <Col gap={spacing.xlarge}>
          <Row gap={spacing.medium}>
            <Switch platform="ios" size="medium" active={notif} onPress={() => setNotif(!notif)} />
            <Text style={{
            fontSize: fontSize.medium,
            fontWeight: fontWeight.medium,
            color: coolNeutral[17]
          }}>
              알림 설정
            </Text>
            <Text style={{
            fontSize: fontSize.small,
            fontWeight: fontWeight.semibold,
            color: notif ? mint[45] : coolNeutral[60]
          }}>
              {notif ? '켜짐' : '꺼짐'}
            </Text>
          </Row>

          <Row gap={spacing.medium}>
            <Switch platform="normal" size="medium" active={dark} onPress={() => setDark(!dark)} />
            <Text style={{
            fontSize: fontSize.medium,
            fontWeight: fontWeight.medium,
            color: coolNeutral[17]
          }}>
              다크 모드
            </Text>
            <Text style={{
            fontSize: fontSize.small,
            fontWeight: fontWeight.semibold,
            color: dark ? mint[45] : coolNeutral[60]
          }}>
              {dark ? '켜짐' : '꺼짐'}
            </Text>
          </Row>
        </Col>
      </Section>;
  }
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <Section title="디자인 스펙" description="스위치 컴포넌트의 치수와 색상 토큰을 정리한 참고 자료입니다.">
      <SpecTable title="iOS 치수" rows={[{
      label: 'Small 트랙 너비',
      value: '44px',
      token: '—'
    }, {
      label: 'Small 트랙 높이',
      value: '26px',
      token: '—'
    }, {
      label: 'Small 썸 크기',
      value: '22px',
      token: '—'
    }, {
      label: 'Medium 트랙 너비',
      value: '52px',
      token: '—'
    }, {
      label: 'Medium 트랙 높이',
      value: '32px',
      token: '—'
    }, {
      label: 'Medium 썸 크기',
      value: '28px',
      token: '—'
    }]} />

      <View style={{
      height: spacing.large
    }} />

      <SpecTable title="Normal 치수" rows={[{
      label: 'Small 트랙 너비',
      value: '36px',
      token: '—'
    }, {
      label: 'Small 트랙 높이',
      value: '20px',
      token: '—'
    }, {
      label: 'Small 썸 크기',
      value: '16px',
      token: '—'
    }, {
      label: 'Medium 트랙 너비',
      value: '44px',
      token: '—'
    }, {
      label: 'Medium 트랙 높이',
      value: '24px',
      token: '—'
    }, {
      label: 'Medium 썸 크기',
      value: '20px',
      token: '—'
    }]} />

      <View style={{
      height: spacing.large
    }} />

      <SpecTable title="색상" rows={[{
      label: '활성 트랙',
      value: '#22C3BC',
      token: 'mint[45]'
    }, {
      label: '비활성 트랙',
      value: coolNeutral[90],
      token: 'coolNeutral[90]'
    }, {
      label: '비활성화 활성 트랙',
      value: mint[90],
      token: 'mint[90]'
    }, {
      label: '비활성화 비활성 트랙',
      value: coolNeutral[96],
      token: 'coolNeutral[96]'
    }, {
      label: '썸 색상',
      value: '#FFFFFF',
      token: '—'
    }]} />
    </Section>
}`,...E.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <Section title="사용 가이드" description="개발 시 참고할 수 있는 코드 예제입니다.">
      <CodeBlock title="Import" code={\`import { Switch } from '@design-system/components/Switch';\`} />

      <CodeBlock title="기본 사용" code={\`<Switch />
<Switch active />
<Switch size="small" />
<Switch disabled />\`} />

      <CodeBlock title="제어 컴포넌트 (useState)" code={\`const [active, setActive] = useState(false);

<Switch
  active={active}
  onPress={() => setActive(!active)}
/>\`} />

      <CodeBlock title="플랫폼별 사용" code={\`// iOS 스타일 (기본값)
<Switch platform="ios" size="medium" active />

// Normal 스타일
<Switch platform="normal" size="small" active={false} />\`} />
    </Section>
}`,...x.parameters?.docs?.source}}};const G=["Playground","AllVariants","PlatformComparison","Sizes","Interactive","DesignSpec","Usage"];export{h as AllVariants,E as DesignSpec,k as Interactive,z as PlatformComparison,v as Playground,w as Sizes,x as Usage,G as __namedExportsOrder,_ as default};
