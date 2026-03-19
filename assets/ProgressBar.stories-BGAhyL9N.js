import{R as e,V as l,r as I}from"./iframe-CExKz_YG.js";import{T as B,s as r,c as n,f,a as L,y as V,e as z,h as W,m as v,M as q,r as D}from"./theme-DRANkRo4.js";import{S as i,C as t,a as s,b as m,D as C,R as _,d as p}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";const $={small:4,medium:8,large:12},H={primary:v[45],success:W[45],error:z[70],warning:V[50]};function a({progress:P,size:c="medium",color:y="primary",showLabel:o=!1,animated:T=!0,rounded:M=!0}){const x=Math.min(Math.max(P,0),1),h=$[c],k=M?h/2:0,F={fontSize:L.xsmall,fontWeight:f.semibold,color:n[17],textAlign:"right",marginBottom:r.xsmall},R={height:h,backgroundColor:n[96],borderRadius:k,overflow:"hidden"},N={height:h,width:`${x*100}%`,backgroundColor:H[y],borderRadius:k,...T?{transition:"width 0.3s ease"}:{}};return e.createElement(l,{accessibilityRole:"progressbar",accessibilityValue:{min:0,max:100,now:Math.round(x*100)}},o&&e.createElement(B,{style:F},Math.round(x*100),"%"),e.createElement(l,{style:R},e.createElement(l,{style:N})))}a.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{progress:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const G={title:"Feedback/ProgressBar",component:a,argTypes:{progress:{control:{type:"range",min:0,max:1,step:.01},description:"진행률 (0~1)"},size:{control:"select",options:["small","medium","large"],description:"바 높이"},color:{control:"select",options:["primary","success","error","warning"],description:"바 색상"},showLabel:{control:"boolean",description:"퍼센트 텍스트 표시"},animated:{control:"boolean",description:"너비 애니메이션"},rounded:{control:"boolean",description:"둥근 끝"}},tags:["autodocs"]},g={args:{progress:.6,size:"medium",color:"primary",showLabel:!1,animated:!0,rounded:!0}},d={name:"크기 비교",render:()=>e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"크기 비교",description:"Small(4px), Medium(8px), Large(12px) 세 가지 높이를 비교합니다."},e.createElement(l,{style:{gap:r.xlarge,maxWidth:400}},e.createElement(t,{gap:r.small},e.createElement(s,null,"Small — 4px"),e.createElement(a,{progress:.7,size:"small"})),e.createElement(t,{gap:r.small},e.createElement(s,null,"Medium — 8px"),e.createElement(a,{progress:.7,size:"medium"})),e.createElement(t,{gap:r.small},e.createElement(s,null,"Large — 12px"),e.createElement(a,{progress:.7,size:"large"})))))},u={name:"색상",render:()=>e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"색상",description:"color prop으로 진행 바의 색상을 변경할 수 있습니다."},e.createElement(l,{style:{gap:r.xlarge,maxWidth:400}},e.createElement(t,{gap:r.small},e.createElement(s,null,"Primary (mint)"),e.createElement(a,{progress:.65,color:"primary"})),e.createElement(t,{gap:r.small},e.createElement(s,null,"Success (green)"),e.createElement(a,{progress:.65,color:"success"})),e.createElement(t,{gap:r.small},e.createElement(s,null,"Error (red)"),e.createElement(a,{progress:.65,color:"error"})),e.createElement(t,{gap:r.small},e.createElement(s,null,"Warning (yellow)"),e.createElement(a,{progress:.65,color:"warning"})))))},b={name:"라벨 표시",render:()=>e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"라벨 표시",description:"showLabel prop을 사용하면 퍼센트 텍스트가 바 위에 표시됩니다."},e.createElement(l,{style:{gap:r.xlarge,maxWidth:400}},e.createElement(t,{gap:r.small},e.createElement(s,null,"0%"),e.createElement(a,{progress:0,showLabel:!0})),e.createElement(t,{gap:r.small},e.createElement(s,null,"33%"),e.createElement(a,{progress:.33,showLabel:!0})),e.createElement(t,{gap:r.small},e.createElement(s,null,"67%"),e.createElement(a,{progress:.67,showLabel:!0})),e.createElement(t,{gap:r.small},e.createElement(s,null,"100%"),e.createElement(a,{progress:1,showLabel:!0})))))},S={name:"인터랙티브 데모",render:function(){const[c,y]=I.useState(.3);return e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"인터랙티브 데모",description:"버튼을 눌러 진행률을 변경해 보세요."},e.createElement(l,{style:{maxWidth:400,gap:r.large}},e.createElement(a,{progress:c,showLabel:!0,size:"large"}),e.createElement(_,{gap:r.small},[0,.25,.5,.75,1].map(o=>e.createElement(q,{key:o,onPress:()=>y(o),style:{backgroundColor:c===o?v[45]:n[97],paddingHorizontal:r.medium,paddingVertical:r.small,borderRadius:D.small}},e.createElement(B,{style:{fontSize:L.small,fontWeight:f.semibold,color:c===o?"#FFFFFF":n[40]}},Math.round(o*100),"%")))))))}},E={name:"디자인 스펙",render:()=>e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"디자인 스펙",description:"디자이너와 개발자를 위한 ProgressBar 토큰 상세 스펙입니다."},e.createElement(m,{title:"크기",rows:[{label:"Small 높이",value:"4px",token:"—"},{label:"Medium 높이",value:"8px",token:"—"},{label:"Large 높이",value:"12px",token:"—"},{label:"모서리 반경",value:"height / 2",token:"—"}]}),e.createElement(C,null),e.createElement(m,{title:"트랙",rows:[{label:"배경색",value:n[96],token:"coolNeutral[96]"}]}),e.createElement(m,{title:"채우기 색상",rows:[{label:"Primary",value:v[45],token:"mint[45]"},{label:"Success",value:W[45],token:"green[45]"},{label:"Error",value:z[70],token:"red[70]"},{label:"Warning",value:V[50],token:"yellow[50]"}]}),e.createElement(C,null),e.createElement(m,{title:"라벨",rows:[{label:"폰트 크기",value:`${L.xsmall}px`,token:"fontSize.xsmall"},{label:"폰트 굵기",value:f.semibold,token:"fontWeight.semibold"},{label:"텍스트 색상",value:n[17],token:"coolNeutral[17]"},{label:"정렬",value:"right",token:"—"}]})))},w={name:"사용 가이드",render:()=>e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"사용 가이드",description:"개발자를 위한 ProgressBar 컴포넌트 사용 예시입니다."},e.createElement(p,{title:"Import",code:"import { ProgressBar } from '@design-system/components/ProgressBar';"}),e.createElement(p,{title:"기본 사용",code:"<ProgressBar progress={0.6} />"}),e.createElement(p,{title:"라벨 + 색상 + 크기",code:`<ProgressBar
  progress={0.75}
  size="large"
  color="success"
  showLabel
/>`}),e.createElement(p,{title:"각진 스타일",code:`<ProgressBar
  progress={0.5}
  rounded={false}
  animated={false}
/>`})))};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 0.6,
    size: 'medium',
    color: 'primary',
    showLabel: false,
    animated: true,
    rounded: true
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '크기 비교',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="크기 비교" description="Small(4px), Medium(8px), Large(12px) 세 가지 높이를 비교합니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 400
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Small — 4px</StateLabel>
            <ProgressBar progress={0.7} size="small" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Medium — 8px</StateLabel>
            <ProgressBar progress={0.7} size="medium" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Large — 12px</StateLabel>
            <ProgressBar progress={0.7} size="large" />
          </Col>
        </View>
      </Section>
    </View>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '색상',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="색상" description="color prop으로 진행 바의 색상을 변경할 수 있습니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 400
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Primary (mint)</StateLabel>
            <ProgressBar progress={0.65} color="primary" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Success (green)</StateLabel>
            <ProgressBar progress={0.65} color="success" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Error (red)</StateLabel>
            <ProgressBar progress={0.65} color="error" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Warning (yellow)</StateLabel>
            <ProgressBar progress={0.65} color="warning" />
          </Col>
        </View>
      </Section>
    </View>
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '라벨 표시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="라벨 표시" description="showLabel prop을 사용하면 퍼센트 텍스트가 바 위에 표시됩니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 400
      }}>
          <Col gap={spacing.small}>
            <StateLabel>0%</StateLabel>
            <ProgressBar progress={0} showLabel />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>33%</StateLabel>
            <ProgressBar progress={0.33} showLabel />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>67%</StateLabel>
            <ProgressBar progress={0.67} showLabel />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>100%</StateLabel>
            <ProgressBar progress={1} showLabel />
          </Col>
        </View>
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: function InteractiveRender() {
    const [progress, setProgress] = useState(0.3);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="버튼을 눌러 진행률을 변경해 보세요.">
          <View style={{
          maxWidth: 400,
          gap: spacing.large
        }}>
            <ProgressBar progress={progress} showLabel size="large" />
            <Row gap={spacing.small}>
              {[0, 0.25, 0.5, 0.75, 1].map(val => <Pressable key={val} onPress={() => setProgress(val)} style={{
              backgroundColor: progress === val ? mint[45] : coolNeutral[97],
              paddingHorizontal: spacing.medium,
              paddingVertical: spacing.small,
              borderRadius: radius.small
            }}>
                  <Text style={{
                fontSize: fontSize.small,
                fontWeight: fontWeight.semibold,
                color: progress === val ? '#FFFFFF' : coolNeutral[40]
              }}>
                    {Math.round(val * 100)}%
                  </Text>
                </Pressable>)}
            </Row>
          </View>
        </Section>
      </View>;
  }
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="디자이너와 개발자를 위한 ProgressBar 토큰 상세 스펙입니다.">
        <SpecTable title="크기" rows={[{
        label: 'Small 높이',
        value: '4px',
        token: '—'
      }, {
        label: 'Medium 높이',
        value: '8px',
        token: '—'
      }, {
        label: 'Large 높이',
        value: '12px',
        token: '—'
      }, {
        label: '모서리 반경',
        value: 'height / 2',
        token: '—'
      }]} />

        <Divider />

        <SpecTable title="트랙" rows={[{
        label: '배경색',
        value: coolNeutral[96],
        token: 'coolNeutral[96]'
      }]} />

        <SpecTable title="채우기 색상" rows={[{
        label: 'Primary',
        value: mint[45],
        token: 'mint[45]'
      }, {
        label: 'Success',
        value: green[45],
        token: 'green[45]'
      }, {
        label: 'Error',
        value: red[70],
        token: 'red[70]'
      }, {
        label: 'Warning',
        value: yellow[50],
        token: 'yellow[50]'
      }]} />

        <Divider />

        <SpecTable title="라벨" rows={[{
        label: '폰트 크기',
        value: \`\${fontSize.xsmall}px\`,
        token: 'fontSize.xsmall'
      }, {
        label: '폰트 굵기',
        value: fontWeight.semibold,
        token: 'fontWeight.semibold'
      }, {
        label: '텍스트 색상',
        value: coolNeutral[17],
        token: 'coolNeutral[17]'
      }, {
        label: '정렬',
        value: 'right',
        token: '—'
      }]} />
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 ProgressBar 컴포넌트 사용 예시입니다.">
        <CodeBlock title="Import" code={\`import { ProgressBar } from '@design-system/components/ProgressBar';\`} />

        <CodeBlock title="기본 사용" code={\`<ProgressBar progress={0.6} />\`} />

        <CodeBlock title="라벨 + 색상 + 크기" code={\`<ProgressBar
  progress={0.75}
  size="large"
  color="success"
  showLabel
/>\`} />

        <CodeBlock title="각진 스타일" code={\`<ProgressBar
  progress={0.5}
  rounded={false}
  animated={false}
/>\`} />
      </Section>
    </View>
}`,...w.parameters?.docs?.source}}};const J=["Playground","Sizes","Colors","WithLabel","Interactive","DesignSpec","Usage"];export{u as Colors,E as DesignSpec,S as Interactive,g as Playground,d as Sizes,w as Usage,b as WithLabel,J as __namedExportsOrder,G as default};
