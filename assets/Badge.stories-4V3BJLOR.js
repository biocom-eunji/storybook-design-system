import{R as e,V as t,s as F}from"./iframe-CExKz_YG.js";import{y as L,m as v,e as T,r as i,c as n,s as a,T as m,a as p}from"./theme-DRANkRo4.js";import{S as u,R as o,a as r,b as I,D as Z,C as c,d}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";const W={primary:v[45],error:T[70],success:v[45],warning:L[50]},N={small:{height:16,minWidth:16,fontSize:10,dotSize:6},medium:{height:20,minWidth:20,fontSize:11,dotSize:8}};function l({count:b,maxCount:z=99,variant:x="filled",color:M="error",size:D="medium",accessibilityLabel:P,children:C}){const g=W[M],s=N[D],k=b!==void 0?b>z?`${z}+`:`${b}`:void 0,V=x==="dot",A=V?{width:s.dotSize,height:s.dotSize,borderRadius:i.full,backgroundColor:g}:{alignSelf:"flex-start",height:s.height,minWidth:s.height,borderRadius:i.full,paddingHorizontal:a.xsmall,alignItems:"center",justifyContent:"center",...x==="filled"?{backgroundColor:g}:{backgroundColor:n[100],borderWidth:1,borderColor:g}},_={fontSize:s.fontSize,fontWeight:"600",color:x==="filled"?n[100]:g,textAlign:"center"},R=e.createElement(t,{style:A},!V&&k!==void 0&&e.createElement(m,{style:_},k));return C?e.createElement(t,{style:B.wrapper,accessibilityLabel:P},C,e.createElement(t,{style:[B.positioned,V&&B.positionedDot]},R)):R}const B=F.create({wrapper:{alignSelf:"flex-start"},positioned:{position:"absolute",top:-4,right:-4},positionedDot:{top:-2,right:-2}});l.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{count:{required:!1,tsType:{name:"number"},description:""},maxCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'dot'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'dot'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'error' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'error'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"접근성 라벨"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const U={title:"Data Display/Badge",component:l,argTypes:{count:{control:"number",description:"표시할 숫자 (생략 시 dot 뱃지에서는 숫자 없음)"},maxCount:{control:"number",description:"최대 표시 숫자 (초과 시 99+)"},variant:{control:"select",options:["filled","outlined","dot"],description:"뱃지 스타일 변형"},color:{control:"select",options:["primary","error","success","warning"],description:"뱃지 컬러 테마"},size:{control:"select",options:["small","medium"],description:"뱃지 크기"}},tags:["autodocs"]},w={args:{count:5,maxCount:99,variant:"filled",color:"error",size:"medium"}},y={name:"모든 변형",render:()=>e.createElement(t,{style:{gap:a["3xlarge"]}},e.createElement(u,{title:"뱃지 변형 전체 보기",description:"variant(filled/outlined/dot)와 color(primary/error/success/warning)의 모든 조합입니다."},e.createElement(o,{gap:a["4xlarge"],align:"flex-start"},e.createElement(t,{style:{width:100}}),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,null,"Primary")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,null,"Error")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,null,"Success")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,null,"Warning"))),e.createElement(t,{style:{gap:a.xlarge,marginTop:a.large}},e.createElement(o,{gap:a["4xlarge"],align:"center"},e.createElement(t,{style:{width:100}},e.createElement(r,null,"Filled")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{count:5,variant:"filled",color:"primary"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{count:5,variant:"filled",color:"error"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{count:5,variant:"filled",color:"success"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{count:5,variant:"filled",color:"warning"}))),e.createElement(o,{gap:a["4xlarge"],align:"center"},e.createElement(t,{style:{width:100}},e.createElement(r,null,"Outlined")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{count:5,variant:"outlined",color:"primary"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{count:5,variant:"outlined",color:"error"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{count:5,variant:"outlined",color:"success"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{count:5,variant:"outlined",color:"warning"}))),e.createElement(o,{gap:a["4xlarge"],align:"center"},e.createElement(t,{style:{width:100}},e.createElement(r,null,"Dot")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{variant:"dot",color:"primary"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{variant:"dot",color:"error"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{variant:"dot",color:"success"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(l,{variant:"dot",color:"warning"}))))))},E={name:"크기 비교",render:()=>e.createElement(u,{title:"크기 비교",description:"Small(16px)과 Medium(20px) 두 가지 크기를 비교합니다."},e.createElement(o,{gap:a["3xlarge"],align:"flex-end"},e.createElement(c,{gap:a.small},e.createElement(r,null,"Small (16px)"),e.createElement(o,{gap:a.medium},e.createElement(l,{count:3,variant:"filled",color:"error",size:"small"}),e.createElement(l,{count:3,variant:"outlined",color:"error",size:"small"}),e.createElement(l,{variant:"dot",color:"error",size:"small"}))),e.createElement(c,{gap:a.small},e.createElement(r,null,"Medium (20px)"),e.createElement(o,{gap:a.medium},e.createElement(l,{count:3,variant:"filled",color:"error",size:"medium"}),e.createElement(l,{count:3,variant:"outlined",color:"error",size:"medium"}),e.createElement(l,{variant:"dot",color:"error",size:"medium"})))))},S={name:"래핑 예시",render:()=>e.createElement(u,{title:"래핑 예시",description:"children을 감싸면 뱃지가 우상단에 자동 위치합니다."},e.createElement(o,{gap:a["3xlarge"]},e.createElement(c,{gap:a.small},e.createElement(r,null,"숫자 뱃지"),e.createElement(l,{count:3,variant:"filled",color:"error"},e.createElement(t,{style:{width:48,height:48,borderRadius:i.medium,backgroundColor:n[97],alignItems:"center",justifyContent:"center"}},e.createElement(m,{style:{fontSize:p.xlarge,color:n[50]}},"A")))),e.createElement(c,{gap:a.small},e.createElement(r,null,"99+ 뱃지"),e.createElement(l,{count:150,variant:"filled",color:"error"},e.createElement(t,{style:{width:48,height:48,borderRadius:i.medium,backgroundColor:n[97],alignItems:"center",justifyContent:"center"}},e.createElement(m,{style:{fontSize:p.xlarge,color:n[50]}},"B")))),e.createElement(c,{gap:a.small},e.createElement(r,null,"Dot 뱃지"),e.createElement(l,{variant:"dot",color:"error"},e.createElement(t,{style:{width:48,height:48,borderRadius:i.medium,backgroundColor:n[97],alignItems:"center",justifyContent:"center"}},e.createElement(m,{style:{fontSize:p.xlarge,color:n[50]}},"C")))),e.createElement(c,{gap:a.small},e.createElement(r,null,"Outlined 뱃지"),e.createElement(l,{count:7,variant:"outlined",color:"primary"},e.createElement(t,{style:{width:48,height:48,borderRadius:i.medium,backgroundColor:n[97],alignItems:"center",justifyContent:"center"}},e.createElement(m,{style:{fontSize:p.xlarge,color:n[50]}},"D"))))))},h={name:"디자인 스펙",render:()=>e.createElement(t,{style:{gap:a["3xlarge"]}},e.createElement(u,{title:"디자인 스펙",description:"디자이너와 개발자를 위한 Badge 토큰 상세 스펙입니다."},e.createElement(I,{title:"Small (16px)",rows:[{label:"높이",value:"16px",token:"SIZE_MAP.small.height"},{label:"최소 너비",value:"16px",token:"SIZE_MAP.small.minWidth"},{label:"폰트 크기",value:"10px",token:"SIZE_MAP.small.fontSize"},{label:"Dot 크기",value:"6px",token:"SIZE_MAP.small.dotSize"},{label:"모서리 반경",value:"9999px",token:"radius.full"}]}),e.createElement(I,{title:"Medium (20px)",rows:[{label:"높이",value:"20px",token:"SIZE_MAP.medium.height"},{label:"최소 너비",value:"20px",token:"SIZE_MAP.medium.minWidth"},{label:"폰트 크기",value:"11px",token:"SIZE_MAP.medium.fontSize"},{label:"Dot 크기",value:"8px",token:"SIZE_MAP.medium.dotSize"},{label:"모서리 반경",value:"9999px",token:"radius.full"}]}),e.createElement(Z,null),e.createElement(I,{title:"컬러 토큰",rows:[{label:"Primary",value:v[45],token:"mint[45]"},{label:"Error",value:T[70],token:"red[70]"},{label:"Success",value:v[45],token:"mint[45]"},{label:"Warning",value:L[50],token:"yellow[50]"},{label:"Filled 텍스트",value:"#FFFFFF",token:"coolNeutral[100]"}]})))},f={name:"사용 가이드",render:()=>e.createElement(t,{style:{gap:a["3xlarge"]}},e.createElement(u,{title:"사용 가이드",description:"개발자를 위한 Badge 컴포넌트 사용 예시입니다."},e.createElement(d,{title:"Import",code:"import { Badge } from '@design-system/components/Badge';"}),e.createElement(d,{title:"숫자 뱃지",code:'<Badge count={5} variant="filled" color="error" />'}),e.createElement(d,{title:"Dot 뱃지",code:'<Badge variant="dot" color="primary" />'}),e.createElement(d,{title:"아이콘 래핑",code:`<Badge count={3} color="error">
  <IconButton name="notification" />
</Badge>`}),e.createElement(d,{title:"최대값 커스텀",code:`<Badge count={150} maxCount={99} color="error" />
// 결과: "99+"`})))};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5,
    maxCount: 99,
    variant: 'filled',
    color: 'error',
    size: 'medium'
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '모든 변형',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="뱃지 변형 전체 보기" description="variant(filled/outlined/dot)와 color(primary/error/success/warning)의 모든 조합입니다.">
        {/* Header */}
        <Row gap={spacing['4xlarge']} align="flex-start">
          <View style={{
          width: 100
        }} />
          <View style={{
          width: 80,
          alignItems: 'center'
        }}>
            <StateLabel>Primary</StateLabel>
          </View>
          <View style={{
          width: 80,
          alignItems: 'center'
        }}>
            <StateLabel>Error</StateLabel>
          </View>
          <View style={{
          width: 80,
          alignItems: 'center'
        }}>
            <StateLabel>Success</StateLabel>
          </View>
          <View style={{
          width: 80,
          alignItems: 'center'
        }}>
            <StateLabel>Warning</StateLabel>
          </View>
        </Row>

        <View style={{
        gap: spacing.xlarge,
        marginTop: spacing.large
      }}>
          {/* Filled */}
          <Row gap={spacing['4xlarge']} align="center">
            <View style={{
            width: 100
          }}>
              <StateLabel>Filled</StateLabel>
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge count={5} variant="filled" color="primary" />
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge count={5} variant="filled" color="error" />
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge count={5} variant="filled" color="success" />
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge count={5} variant="filled" color="warning" />
            </View>
          </Row>

          {/* Outlined */}
          <Row gap={spacing['4xlarge']} align="center">
            <View style={{
            width: 100
          }}>
              <StateLabel>Outlined</StateLabel>
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge count={5} variant="outlined" color="primary" />
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge count={5} variant="outlined" color="error" />
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge count={5} variant="outlined" color="success" />
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge count={5} variant="outlined" color="warning" />
            </View>
          </Row>

          {/* Dot */}
          <Row gap={spacing['4xlarge']} align="center">
            <View style={{
            width: 100
          }}>
              <StateLabel>Dot</StateLabel>
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge variant="dot" color="primary" />
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge variant="dot" color="error" />
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge variant="dot" color="success" />
            </View>
            <View style={{
            width: 80,
            alignItems: 'center'
          }}>
              <Badge variant="dot" color="warning" />
            </View>
          </Row>
        </View>
      </Section>
    </View>
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '크기 비교',
  render: () => <Section title="크기 비교" description="Small(16px)과 Medium(20px) 두 가지 크기를 비교합니다.">
      <Row gap={spacing['3xlarge']} align="flex-end">
        <Col gap={spacing.small}>
          <StateLabel>Small (16px)</StateLabel>
          <Row gap={spacing.medium}>
            <Badge count={3} variant="filled" color="error" size="small" />
            <Badge count={3} variant="outlined" color="error" size="small" />
            <Badge variant="dot" color="error" size="small" />
          </Row>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>Medium (20px)</StateLabel>
          <Row gap={spacing.medium}>
            <Badge count={3} variant="filled" color="error" size="medium" />
            <Badge count={3} variant="outlined" color="error" size="medium" />
            <Badge variant="dot" color="error" size="medium" />
          </Row>
        </Col>
      </Row>
    </Section>
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '래핑 예시',
  render: () => <Section title="래핑 예시" description="children을 감싸면 뱃지가 우상단에 자동 위치합니다.">
      <Row gap={spacing['3xlarge']}>
        <Col gap={spacing.small}>
          <StateLabel>숫자 뱃지</StateLabel>
          <Badge count={3} variant="filled" color="error">
            <View style={{
            width: 48,
            height: 48,
            borderRadius: radius.medium,
            backgroundColor: coolNeutral[97],
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: fontSize.xlarge,
              color: coolNeutral[50]
            }}>A</Text>
            </View>
          </Badge>
        </Col>

        <Col gap={spacing.small}>
          <StateLabel>99+ 뱃지</StateLabel>
          <Badge count={150} variant="filled" color="error">
            <View style={{
            width: 48,
            height: 48,
            borderRadius: radius.medium,
            backgroundColor: coolNeutral[97],
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: fontSize.xlarge,
              color: coolNeutral[50]
            }}>B</Text>
            </View>
          </Badge>
        </Col>

        <Col gap={spacing.small}>
          <StateLabel>Dot 뱃지</StateLabel>
          <Badge variant="dot" color="error">
            <View style={{
            width: 48,
            height: 48,
            borderRadius: radius.medium,
            backgroundColor: coolNeutral[97],
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: fontSize.xlarge,
              color: coolNeutral[50]
            }}>C</Text>
            </View>
          </Badge>
        </Col>

        <Col gap={spacing.small}>
          <StateLabel>Outlined 뱃지</StateLabel>
          <Badge count={7} variant="outlined" color="primary">
            <View style={{
            width: 48,
            height: 48,
            borderRadius: radius.medium,
            backgroundColor: coolNeutral[97],
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: fontSize.xlarge,
              color: coolNeutral[50]
            }}>D</Text>
            </View>
          </Badge>
        </Col>
      </Row>
    </Section>
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="디자이너와 개발자를 위한 Badge 토큰 상세 스펙입니다.">
        <SpecTable title="Small (16px)" rows={[{
        label: '높이',
        value: '16px',
        token: 'SIZE_MAP.small.height'
      }, {
        label: '최소 너비',
        value: '16px',
        token: 'SIZE_MAP.small.minWidth'
      }, {
        label: '폰트 크기',
        value: '10px',
        token: 'SIZE_MAP.small.fontSize'
      }, {
        label: 'Dot 크기',
        value: '6px',
        token: 'SIZE_MAP.small.dotSize'
      }, {
        label: '모서리 반경',
        value: '9999px',
        token: 'radius.full'
      }]} />

        <SpecTable title="Medium (20px)" rows={[{
        label: '높이',
        value: '20px',
        token: 'SIZE_MAP.medium.height'
      }, {
        label: '최소 너비',
        value: '20px',
        token: 'SIZE_MAP.medium.minWidth'
      }, {
        label: '폰트 크기',
        value: '11px',
        token: 'SIZE_MAP.medium.fontSize'
      }, {
        label: 'Dot 크기',
        value: '8px',
        token: 'SIZE_MAP.medium.dotSize'
      }, {
        label: '모서리 반경',
        value: '9999px',
        token: 'radius.full'
      }]} />

        <DividerLine />

        <SpecTable title="컬러 토큰" rows={[{
        label: 'Primary',
        value: mint[45],
        token: 'mint[45]'
      }, {
        label: 'Error',
        value: red[70],
        token: 'red[70]'
      }, {
        label: 'Success',
        value: mint[45],
        token: 'mint[45]'
      }, {
        label: 'Warning',
        value: yellow[50],
        token: 'yellow[50]'
      }, {
        label: 'Filled 텍스트',
        value: '#FFFFFF',
        token: 'coolNeutral[100]'
      }]} />
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Badge 컴포넌트 사용 예시입니다.">
        <CodeBlock title="Import" code={\`import { Badge } from '@design-system/components/Badge';\`} />

        <CodeBlock title="숫자 뱃지" code={\`<Badge count={5} variant="filled" color="error" />\`} />

        <CodeBlock title="Dot 뱃지" code={\`<Badge variant="dot" color="primary" />\`} />

        <CodeBlock title="아이콘 래핑" code={\`<Badge count={3} color="error">
  <IconButton name="notification" />
</Badge>\`} />

        <CodeBlock title="최대값 커스텀" code={\`<Badge count={150} maxCount={99} color="error" />
// 결과: "99+"\`} />
      </Section>
    </View>
}`,...f.parameters?.docs?.source}}};const $=["Playground","AllVariants","Sizes","WrappingExample","DesignSpec","Usage"];export{y as AllVariants,h as DesignSpec,w as Playground,E as Sizes,f as Usage,S as WrappingExample,$ as __namedExportsOrder,U as default};
