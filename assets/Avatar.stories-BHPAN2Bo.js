import{R as e,V as o,s as F}from"./iframe-CExKz_YG.js";import{c as i,T,f as R,m as k,s as a}from"./theme-DRANkRo4.js";import{I as _}from"./index-Cu5J3k6g.js";import{S as s,R as L,C as t,a as n,b as z,D as C,c as P,d as c}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";const N={small:{container:32,fontSize:13,onlineDot:8},medium:{container:40,fontSize:15,onlineDot:10},large:{container:56,fontSize:20,onlineDot:12},xlarge:{container:80,fontSize:28,onlineDot:16}};function l({source:A,name:x,size:y="medium",online:w,accessibilityLabel:h}){const E=N[y],r=E.container,M={width:r,height:r,borderRadius:r/2,backgroundColor:i[97],alignItems:"center",justifyContent:"center",overflow:"hidden"},D={fontSize:E.fontSize,fontWeight:R.medium,color:i[50]},I=x?x.charAt(0).toUpperCase():"?",v=E.onlineDot,m=2;return e.createElement(o,{style:f.wrapper,accessibilityLabel:h||x},e.createElement(o,{style:M},A?e.createElement(_,{source:A,style:{width:r,height:r,borderRadius:r/2}}):e.createElement(T,{style:D},I)),w&&e.createElement(o,{style:[f.onlineDot,{width:v+m*2,height:v+m*2,borderRadius:(v+m*2)/2,borderWidth:m,borderColor:i[100],backgroundColor:k[45]}]}))}const f=F.create({wrapper:{alignSelf:"flex-start"},onlineDot:{position:"absolute",bottom:0,right:0}});l.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{source:{required:!1,tsType:{name:"ImageSourcePropType"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'xlarge'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xlarge'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},online:{required:!1,tsType:{name:"boolean"},description:""},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"접근성 라벨"}}};const W={title:"Data Display/Avatar",component:l,argTypes:{name:{control:"text",description:"사용자 이름 (첫 글자가 이니셜로 표시)"},size:{control:"select",options:["small","medium","large","xlarge"],description:"아바타 크기"},online:{control:"boolean",description:"온라인 상태 표시 여부"}},tags:["autodocs"]},p={args:{name:"홍길동",size:"medium",online:!1}},g={name:"모든 크기",render:()=>e.createElement(s,{title:"크기 비교",description:"Small(32px), Medium(40px), Large(56px), XLarge(80px) 네 가지 크기를 비교합니다."},e.createElement(L,{gap:a["2xlarge"],align:"flex-end"},e.createElement(t,{gap:a.small},e.createElement(n,null,"Small (32px)"),e.createElement(l,{name:"김민수",size:"small"})),e.createElement(t,{gap:a.small},e.createElement(n,null,"Medium (40px)"),e.createElement(l,{name:"김민수",size:"medium"})),e.createElement(t,{gap:a.small},e.createElement(n,null,"Large (56px)"),e.createElement(l,{name:"김민수",size:"large"})),e.createElement(t,{gap:a.small},e.createElement(n,null,"XLarge (80px)"),e.createElement(l,{name:"김민수",size:"xlarge"}))))},u={name:"이니셜 폴백",render:()=>e.createElement(s,{title:"이니셜 폴백",description:"이미지가 없을 때 이름의 첫 글자가 이니셜로 표시됩니다."},e.createElement(L,{gap:a["2xlarge"]},e.createElement(t,{gap:a.small},e.createElement(n,null,"한글 이름"),e.createElement(l,{name:"홍길동",size:"large"})),e.createElement(t,{gap:a.small},e.createElement(n,null,"영문 이름"),e.createElement(l,{name:"Alice",size:"large"})),e.createElement(t,{gap:a.small},e.createElement(n,null,"이름 없음"),e.createElement(l,{size:"large"}))))},d={name:"온라인 상태",render:()=>e.createElement(s,{title:"온라인 상태 표시",description:"online prop을 통해 온라인 상태를 녹색 점으로 표시합니다."},e.createElement(P,{items:[{label:"오프라인 (기본)",content:e.createElement(l,{name:"김철수",size:"large"})},{label:"온라인",content:e.createElement(l,{name:"김철수",size:"large",online:!0})}]}),e.createElement(C,null),e.createElement(L,{gap:a["2xlarge"],align:"flex-end"},e.createElement(t,{gap:a.small},e.createElement(n,null,"Small"),e.createElement(l,{name:"A",size:"small",online:!0})),e.createElement(t,{gap:a.small},e.createElement(n,null,"Medium"),e.createElement(l,{name:"B",size:"medium",online:!0})),e.createElement(t,{gap:a.small},e.createElement(n,null,"Large"),e.createElement(l,{name:"C",size:"large",online:!0})),e.createElement(t,{gap:a.small},e.createElement(n,null,"XLarge"),e.createElement(l,{name:"D",size:"xlarge",online:!0}))))},S={name:"디자인 스펙",render:()=>e.createElement(o,{style:{gap:a["3xlarge"]}},e.createElement(s,{title:"디자인 스펙",description:"디자이너와 개발자를 위한 Avatar 토큰 상세 스펙입니다."},e.createElement(z,{title:"크기별 스펙",rows:[{label:"Small 크기",value:"32px",token:"SIZE_MAP.small.container"},{label:"Small 폰트",value:"13px",token:"fontSize.small"},{label:"Medium 크기",value:"40px",token:"SIZE_MAP.medium.container"},{label:"Medium 폰트",value:"15px",token:"fontSize.medium"},{label:"Large 크기",value:"56px",token:"SIZE_MAP.large.container"},{label:"Large 폰트",value:"20px",token:"fontSize.xlarge"},{label:"XLarge 크기",value:"80px",token:"SIZE_MAP.xlarge.container"},{label:"XLarge 폰트",value:"28px",token:"fontSize['3xlarge']"}]}),e.createElement(C,null),e.createElement(z,{title:"컬러 토큰",rows:[{label:"폴백 배경색",value:i[97],token:"coolNeutral[97]"},{label:"이니셜 텍스트",value:i[50],token:"coolNeutral[50]"},{label:"온라인 점 색상",value:k[45],token:"mint[45]"},{label:"온라인 점 테두리",value:"#FFFFFF",token:"coolNeutral[100]"},{label:"테두리 두께",value:"2px",token:"—"}]}),e.createElement(z,{title:"모서리 반경",rows:[{label:"형태",value:"원형 (size / 2)",token:"—"}]})))},b={name:"사용 가이드",render:()=>e.createElement(o,{style:{gap:a["3xlarge"]}},e.createElement(s,{title:"사용 가이드",description:"개발자를 위한 Avatar 컴포넌트 사용 예시입니다."},e.createElement(c,{title:"Import",code:"import { Avatar } from '@design-system/components/Avatar';"}),e.createElement(c,{title:"이미지 아바타",code:`<Avatar
  source={{ uri: 'https://example.com/photo.jpg' }}
  name="홍길동"
  size="medium"
/>`}),e.createElement(c,{title:"이니셜 폴백",code:'<Avatar name="홍길동" size="large" />'}),e.createElement(c,{title:"온라인 상태",code:'<Avatar name="홍길동" size="medium" online />'})))};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: '홍길동',
    size: 'medium',
    online: false
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '모든 크기',
  render: () => <Section title="크기 비교" description="Small(32px), Medium(40px), Large(56px), XLarge(80px) 네 가지 크기를 비교합니다.">
      <Row gap={spacing['2xlarge']} align="flex-end">
        <Col gap={spacing.small}>
          <StateLabel>Small (32px)</StateLabel>
          <Avatar name="김민수" size="small" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>Medium (40px)</StateLabel>
          <Avatar name="김민수" size="medium" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>Large (56px)</StateLabel>
          <Avatar name="김민수" size="large" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>XLarge (80px)</StateLabel>
          <Avatar name="김민수" size="xlarge" />
        </Col>
      </Row>
    </Section>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '이니셜 폴백',
  render: () => <Section title="이니셜 폴백" description="이미지가 없을 때 이름의 첫 글자가 이니셜로 표시됩니다.">
      <Row gap={spacing['2xlarge']}>
        <Col gap={spacing.small}>
          <StateLabel>한글 이름</StateLabel>
          <Avatar name="홍길동" size="large" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>영문 이름</StateLabel>
          <Avatar name="Alice" size="large" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>이름 없음</StateLabel>
          <Avatar size="large" />
        </Col>
      </Row>
    </Section>
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '온라인 상태',
  render: () => <Section title="온라인 상태 표시" description="online prop을 통해 온라인 상태를 녹색 점으로 표시합니다.">
      <CompareGrid items={[{
      label: '오프라인 (기본)',
      content: <Avatar name="김철수" size="large" />
    }, {
      label: '온라인',
      content: <Avatar name="김철수" size="large" online />
    }]} />

      <DividerLine />

      <Row gap={spacing['2xlarge']} align="flex-end">
        <Col gap={spacing.small}>
          <StateLabel>Small</StateLabel>
          <Avatar name="A" size="small" online />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>Medium</StateLabel>
          <Avatar name="B" size="medium" online />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>Large</StateLabel>
          <Avatar name="C" size="large" online />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>XLarge</StateLabel>
          <Avatar name="D" size="xlarge" online />
        </Col>
      </Row>
    </Section>
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="디자이너와 개발자를 위한 Avatar 토큰 상세 스펙입니다.">
        <SpecTable title="크기별 스펙" rows={[{
        label: 'Small 크기',
        value: '32px',
        token: 'SIZE_MAP.small.container'
      }, {
        label: 'Small 폰트',
        value: '13px',
        token: 'fontSize.small'
      }, {
        label: 'Medium 크기',
        value: '40px',
        token: 'SIZE_MAP.medium.container'
      }, {
        label: 'Medium 폰트',
        value: '15px',
        token: 'fontSize.medium'
      }, {
        label: 'Large 크기',
        value: '56px',
        token: 'SIZE_MAP.large.container'
      }, {
        label: 'Large 폰트',
        value: '20px',
        token: 'fontSize.xlarge'
      }, {
        label: 'XLarge 크기',
        value: '80px',
        token: 'SIZE_MAP.xlarge.container'
      }, {
        label: 'XLarge 폰트',
        value: '28px',
        token: "fontSize['3xlarge']"
      }]} />

        <DividerLine />

        <SpecTable title="컬러 토큰" rows={[{
        label: '폴백 배경색',
        value: coolNeutral[97],
        token: 'coolNeutral[97]'
      }, {
        label: '이니셜 텍스트',
        value: coolNeutral[50],
        token: 'coolNeutral[50]'
      }, {
        label: '온라인 점 색상',
        value: mint[45],
        token: 'mint[45]'
      }, {
        label: '온라인 점 테두리',
        value: '#FFFFFF',
        token: 'coolNeutral[100]'
      }, {
        label: '테두리 두께',
        value: '2px',
        token: '—'
      }]} />

        <SpecTable title="모서리 반경" rows={[{
        label: '형태',
        value: '원형 (size / 2)',
        token: '—'
      }]} />
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Avatar 컴포넌트 사용 예시입니다.">
        <CodeBlock title="Import" code={\`import { Avatar } from '@design-system/components/Avatar';\`} />

        <CodeBlock title="이미지 아바타" code={\`<Avatar
  source={{ uri: 'https://example.com/photo.jpg' }}
  name="홍길동"
  size="medium"
/>\`} />

        <CodeBlock title="이니셜 폴백" code={\`<Avatar name="홍길동" size="large" />\`} />

        <CodeBlock title="온라인 상태" code={\`<Avatar name="홍길동" size="medium" online />\`} />
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};const j=["Playground","AllSizes","InitialFallback","OnlineStatus","DesignSpec","Usage"];export{g as AllSizes,S as DesignSpec,u as InitialFallback,d as OnlineStatus,p as Playground,b as Usage,j as __namedExportsOrder,W as default};
