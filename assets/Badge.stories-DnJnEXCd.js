import{R as e,V as t,s as _}from"./iframe-rdsxNJ7l.js";import{a as R,c as l,r as c,s as a,T as o,f as F,m as L,u as Z,z as j,e as i}from"./theme-KAxj7l-q.js";import{S as m,R as d,a as n,d as k,D as q,b as s,C as u}from"./storyHelpers-D5HpvNsw.js";import"./preload-helper-PPVm8Dsz.js";const O={primary:l.backgroundBrand,error:l.backgroundError,success:l.backgroundSuccess,warning:l.backgroundWarning},N={small:{height:16,minWidth:16,fontSize:R.caption.fontSize,dotSize:6},medium:{height:20,minWidth:20,fontSize:R.caption.fontSize,dotSize:8}};function r({count:h,maxCount:z=99,variant:v="filled",color:A="error",size:D="medium",accessibilityLabel:P,children:I}){const p=O[A],g=N[D],B=h!==void 0?h>z?`${z}+`:`${h}`:void 0,C=v==="dot",M=C?{width:g.dotSize,height:g.dotSize,borderRadius:c.full,backgroundColor:p}:{alignSelf:"flex-start",height:g.height,minWidth:g.height,borderRadius:c.full,paddingHorizontal:a.xsmall,alignItems:"center",justifyContent:"center",...v==="filled"?{backgroundColor:p}:{backgroundColor:l.backgroundPrimary,borderWidth:1,borderColor:p}},W={fontSize:g.fontSize,fontWeight:F.semibold,color:v==="filled"?l.textOnColor:p,textAlign:"center"},T=e.createElement(t,{style:M},!C&&B!==void 0&&e.createElement(o,{style:W},B));return I?e.createElement(t,{style:V.wrapper,accessibilityLabel:P},I,e.createElement(t,{style:[V.positioned,C&&V.positionedDot]},T)):T}const V=_.create({wrapper:{alignSelf:"flex-start"},positioned:{position:"absolute",top:-4,right:-4},positionedDot:{top:-2,right:-2}});r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{count:{required:!1,tsType:{name:"number"},description:""},maxCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'dot'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'dot'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'error' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'error'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"접근성 라벨"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const J={title:"Data Display/Badge",component:r,argTypes:{count:{control:"number",description:"표시할 숫자 (생략 시 dot 뱃지에서는 숫자 없음)"},maxCount:{control:"number",description:"최대 표시 숫자 (초과 시 99+)"},variant:{control:"select",options:["filled","outlined","dot"],description:"뱃지 스타일 변형"},color:{control:"select",options:["primary","error","success","warning"],description:"뱃지 컬러 테마"},size:{control:"select",options:["small","medium"],description:"뱃지 크기"}},tags:["autodocs"]},y={args:{count:5,maxCount:99,variant:"filled",color:"error",size:"medium"}},w={name:"모든 변형",render:()=>e.createElement(t,{style:{gap:a["3xlarge"]}},e.createElement(m,{title:"뱃지 변형 전체 보기",description:"variant(filled/outlined/dot)와 color(primary/error/success/warning)의 모든 조합입니다."},e.createElement(d,{gap:a["4xlarge"],align:"flex-start"},e.createElement(t,{style:{width:100}}),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(n,null,"Primary")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(n,null,"Error")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(n,null,"Success")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(n,null,"Warning"))),e.createElement(t,{style:{gap:a.xlarge,marginTop:a.large}},e.createElement(d,{gap:a["4xlarge"],align:"center"},e.createElement(t,{style:{width:100}},e.createElement(n,null,"Filled")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{count:5,variant:"filled",color:"primary"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{count:5,variant:"filled",color:"error"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{count:5,variant:"filled",color:"success"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{count:5,variant:"filled",color:"warning"}))),e.createElement(d,{gap:a["4xlarge"],align:"center"},e.createElement(t,{style:{width:100}},e.createElement(n,null,"Outlined")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{count:5,variant:"outlined",color:"primary"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{count:5,variant:"outlined",color:"error"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{count:5,variant:"outlined",color:"success"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{count:5,variant:"outlined",color:"warning"}))),e.createElement(d,{gap:a["4xlarge"],align:"center"},e.createElement(t,{style:{width:100}},e.createElement(n,null,"Dot")),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{variant:"dot",color:"primary"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{variant:"dot",color:"error"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{variant:"dot",color:"success"})),e.createElement(t,{style:{width:80,alignItems:"center"}},e.createElement(r,{variant:"dot",color:"warning"}))))))},S={name:"크기 비교",render:()=>e.createElement(m,{title:"크기 비교",description:"Small(16px)과 Medium(20px) 두 가지 크기를 비교합니다."},e.createElement(d,{gap:a["3xlarge"],align:"flex-end"},e.createElement(s,{gap:a.small},e.createElement(n,null,"Small (16px)"),e.createElement(d,{gap:a.medium},e.createElement(r,{count:3,variant:"filled",color:"error",size:"small"}),e.createElement(r,{count:3,variant:"outlined",color:"error",size:"small"}),e.createElement(r,{variant:"dot",color:"error",size:"small"}))),e.createElement(s,{gap:a.small},e.createElement(n,null,"Medium (20px)"),e.createElement(d,{gap:a.medium},e.createElement(r,{count:3,variant:"filled",color:"error",size:"medium"}),e.createElement(r,{count:3,variant:"outlined",color:"error",size:"medium"}),e.createElement(r,{variant:"dot",color:"error",size:"medium"})))))},x={name:"래핑 예시",render:()=>e.createElement(m,{title:"래핑 예시",description:"children을 감싸면 뱃지가 우상단에 자동 위치합니다."},e.createElement(d,{gap:a["3xlarge"]},e.createElement(s,{gap:a.small},e.createElement(n,null,"숫자 뱃지"),e.createElement(r,{count:3,variant:"filled",color:"error"},e.createElement(t,{style:{width:48,height:48,borderRadius:c.medium,backgroundColor:l.backgroundTertiary,alignItems:"center",justifyContent:"center"}},e.createElement(o,{style:{fontSize:i.xlarge,color:l.textSecondary}},"A")))),e.createElement(s,{gap:a.small},e.createElement(n,null,"99+ 뱃지"),e.createElement(r,{count:150,variant:"filled",color:"error"},e.createElement(t,{style:{width:48,height:48,borderRadius:c.medium,backgroundColor:l.backgroundTertiary,alignItems:"center",justifyContent:"center"}},e.createElement(o,{style:{fontSize:i.xlarge,color:l.textSecondary}},"B")))),e.createElement(s,{gap:a.small},e.createElement(n,null,"Dot 뱃지"),e.createElement(r,{variant:"dot",color:"error"},e.createElement(t,{style:{width:48,height:48,borderRadius:c.medium,backgroundColor:l.backgroundTertiary,alignItems:"center",justifyContent:"center"}},e.createElement(o,{style:{fontSize:i.xlarge,color:l.textSecondary}},"C")))),e.createElement(s,{gap:a.small},e.createElement(n,null,"Outlined 뱃지"),e.createElement(r,{count:7,variant:"outlined",color:"primary"},e.createElement(t,{style:{width:48,height:48,borderRadius:c.medium,backgroundColor:l.backgroundTertiary,alignItems:"center",justifyContent:"center"}},e.createElement(o,{style:{fontSize:i.xlarge,color:l.textSecondary}},"D"))))))},E={name:"실전 예시",render:()=>e.createElement(t,{style:{gap:a["3xlarge"]}},e.createElement(m,{title:"실전 예시",description:"실제 화면에서 Badge가 배치되는 맥락을 확인합니다."},e.createElement(t,{style:{maxWidth:375}},e.createElement(s,{gap:a.small},e.createElement(n,null,"알림 탭 아이콘에 뱃지"),e.createElement(t,{style:{borderWidth:1,borderColor:l.borderDefault,borderRadius:c.large,backgroundColor:l.backgroundPrimary,paddingHorizontal:a.xlarge,paddingVertical:a.xlarge}},e.createElement(d,{gap:a["3xlarge"],align:"center"},e.createElement(s,{gap:a.small},e.createElement(r,{count:3,variant:"filled",color:"error"},e.createElement(t,{style:{width:48,height:48,borderRadius:c.medium,backgroundColor:l.backgroundTertiary,alignItems:"center",justifyContent:"center"}},e.createElement(o,{style:{fontSize:i.xlarge,color:l.textSecondary}},"🔔"))),e.createElement(o,{style:{fontSize:i.xsmall,color:l.textSecondary,textAlign:"center"}},"알림")),e.createElement(s,{gap:a.small},e.createElement(r,{variant:"dot",color:"error"},e.createElement(t,{style:{width:48,height:48,borderRadius:c.medium,backgroundColor:l.backgroundTertiary,alignItems:"center",justifyContent:"center"}},e.createElement(o,{style:{fontSize:i.xlarge,color:l.textSecondary}},"💬"))),e.createElement(o,{style:{fontSize:i.xsmall,color:l.textSecondary,textAlign:"center"}},"메시지")),e.createElement(s,{gap:a.small},e.createElement(t,{style:{width:48,height:48,borderRadius:c.medium,backgroundColor:l.backgroundTertiary,alignItems:"center",justifyContent:"center"}},e.createElement(o,{style:{fontSize:i.xlarge,color:l.textSecondary}},"⚙️")),e.createElement(o,{style:{fontSize:i.xsmall,color:l.textSecondary,textAlign:"center"}},"설정"))))))))},b={name:"디자인 스펙",render:()=>e.createElement(t,{style:{gap:a["3xlarge"]}},e.createElement(m,{title:"디자인 스펙",description:"디자이너와 개발자를 위한 Badge 토큰 상세 스펙입니다."},e.createElement(k,{title:"Small (16px)",rows:[{label:"높이",value:"16px",token:"SIZE_MAP.small.height"},{label:"최소 너비",value:"16px",token:"SIZE_MAP.small.minWidth"},{label:"폰트 크기",value:"10px",token:"SIZE_MAP.small.fontSize"},{label:"Dot 크기",value:"6px",token:"SIZE_MAP.small.dotSize"},{label:"모서리 반경",value:"9999px",token:"radius.full"}]}),e.createElement(k,{title:"Medium (20px)",rows:[{label:"높이",value:"20px",token:"SIZE_MAP.medium.height"},{label:"최소 너비",value:"20px",token:"SIZE_MAP.medium.minWidth"},{label:"폰트 크기",value:"11px",token:"SIZE_MAP.medium.fontSize"},{label:"Dot 크기",value:"8px",token:"SIZE_MAP.medium.dotSize"},{label:"모서리 반경",value:"9999px",token:"radius.full"}]}),e.createElement(q,null),e.createElement(k,{title:"컬러 토큰",rows:[{label:"Primary",value:L[45],token:"mint[45]"},{label:"Error",value:Z[70],token:"red[70]"},{label:"Success",value:L[45],token:"mint[45]"},{label:"Warning",value:j[50],token:"yellow[50]"},{label:"Filled 텍스트",value:"#FFFFFF",token:"coolNeutral[100]"}]})))},f={name:"사용 가이드",render:()=>e.createElement(t,{style:{gap:a["3xlarge"]}},e.createElement(m,{title:"사용 가이드",description:"개발자를 위한 Badge 컴포넌트 사용 예시입니다."},e.createElement(u,{title:"Import",code:"import { Badge } from '@design-system/components/Badge';"}),e.createElement(u,{title:"숫자 뱃지",code:'<Badge count={5} variant="filled" color="error" />'}),e.createElement(u,{title:"Dot 뱃지",code:'<Badge variant="dot" color="primary" />'}),e.createElement(u,{title:"아이콘 래핑",code:`<Badge count={3} color="error">
  <IconButton name="notification" />
</Badge>`}),e.createElement(u,{title:"최대값 커스텀",code:`<Badge count={150} maxCount={99} color="error" />
// 결과: "99+"`})))};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5,
    maxCount: 99,
    variant: 'filled',
    color: 'error',
    size: 'medium'
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
            backgroundColor: semanticColor.backgroundTertiary,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: fontSize.xlarge,
              color: semanticColor.textSecondary
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
            backgroundColor: semanticColor.backgroundTertiary,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: fontSize.xlarge,
              color: semanticColor.textSecondary
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
            backgroundColor: semanticColor.backgroundTertiary,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: fontSize.xlarge,
              color: semanticColor.textSecondary
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
            backgroundColor: semanticColor.backgroundTertiary,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: fontSize.xlarge,
              color: semanticColor.textSecondary
            }}>D</Text>
            </View>
          </Badge>
        </Col>
      </Row>
    </Section>
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="실제 화면에서 Badge가 배치되는 맥락을 확인합니다.">
        <View style={{
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>알림 탭 아이콘에 뱃지</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: radius.large,
            backgroundColor: semanticColor.backgroundPrimary,
            paddingHorizontal: spacing.xlarge,
            paddingVertical: spacing.xlarge
          }}>
              <Row gap={spacing['3xlarge']} align="center">
                <Col gap={spacing.small}>
                  <Badge count={3} variant="filled" color="error">
                    <View style={{
                    width: 48,
                    height: 48,
                    borderRadius: radius.medium,
                    backgroundColor: semanticColor.backgroundTertiary,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                      <Text style={{
                      fontSize: fontSize.xlarge,
                      color: semanticColor.textSecondary
                    }}>🔔</Text>
                    </View>
                  </Badge>
                  <Text style={{
                  fontSize: fontSize.xsmall,
                  color: semanticColor.textSecondary,
                  textAlign: 'center'
                }}>알림</Text>
                </Col>
                <Col gap={spacing.small}>
                  <Badge variant="dot" color="error">
                    <View style={{
                    width: 48,
                    height: 48,
                    borderRadius: radius.medium,
                    backgroundColor: semanticColor.backgroundTertiary,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                      <Text style={{
                      fontSize: fontSize.xlarge,
                      color: semanticColor.textSecondary
                    }}>💬</Text>
                    </View>
                  </Badge>
                  <Text style={{
                  fontSize: fontSize.xsmall,
                  color: semanticColor.textSecondary,
                  textAlign: 'center'
                }}>메시지</Text>
                </Col>
                <Col gap={spacing.small}>
                  <View style={{
                  width: 48,
                  height: 48,
                  borderRadius: radius.medium,
                  backgroundColor: semanticColor.backgroundTertiary,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                    <Text style={{
                    fontSize: fontSize.xlarge,
                    color: semanticColor.textSecondary
                  }}>⚙️</Text>
                  </View>
                  <Text style={{
                  fontSize: fontSize.xsmall,
                  color: semanticColor.textSecondary,
                  textAlign: 'center'
                }}>설정</Text>
                </Col>
              </Row>
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const K=["Playground","AllVariants","Sizes","WrappingExample","InContext","DesignSpec","Usage"];export{w as AllVariants,b as DesignSpec,E as InContext,y as Playground,S as Sizes,f as Usage,x as WrappingExample,K as __namedExportsOrder,J as default};
