import{R as e,V as a,s as P}from"./iframe-rdsxNJ7l.js";import{a as l,c as r,T as z,f,s as t,r as I}from"./theme-KAxj7l-q.js";import{I as M}from"./index-BF5bKU7j.js";import{S as m,D as w,b as x,a as k,R as h,C}from"./storyHelpers-D5HpvNsw.js";import{T as p}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BFVMpTcU.js";const _={small:{container:32,fontSize:l.label2.fontSize,onlineDot:8},medium:{container:40,fontSize:l.body2.fontSize,onlineDot:10},large:{container:56,fontSize:l.heading.fontSize,onlineDot:12},xlarge:{container:80,fontSize:l.title2.fontSize,onlineDot:16}};function n({source:o,name:s,size:A="medium",online:D,accessibilityLabel:R}){const v=_[A],i=v.container,W={width:i,height:i,borderRadius:i/2,backgroundColor:r.backgroundTertiary,alignItems:"center",justifyContent:"center",overflow:"hidden"},B={fontSize:v.fontSize,fontWeight:f.medium,color:r.textSecondary},L=s?s.charAt(0).toUpperCase():"?",E=v.onlineDot,c=2;return e.createElement(a,{style:T.wrapper,accessibilityLabel:R||s},e.createElement(a,{style:W},o?e.createElement(M,{source:o,style:{width:i,height:i,borderRadius:i/2}}):e.createElement(z,{style:B},L)),D&&e.createElement(a,{style:[T.onlineDot,{width:E+c*2,height:E+c*2,borderRadius:(E+c*2)/2,borderWidth:c,borderColor:r.backgroundPrimary,backgroundColor:r.backgroundBrand}]}))}const T=P.create({wrapper:{alignSelf:"flex-start"},onlineDot:{position:"absolute",bottom:0,right:0}});n.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{source:{required:!1,tsType:{name:"ImageSourcePropType"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'xlarge'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xlarge'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},online:{required:!1,tsType:{name:"boolean"},description:""},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"접근성 라벨"}}};const G={title:"Data Display/Avatar",component:n,argTypes:{size:{control:"select",options:["small","medium","large","xlarge"],description:"크기"},name:{control:"text",description:"이니셜용 이름"},online:{control:"boolean",description:"온라인 상태 표시"}},tags:["autodocs"]},d={render:()=>e.createElement(h,{gap:t.large,align:"center"},e.createElement(n,{name:"은지",size:"small"}),e.createElement(n,{name:"은지",size:"medium"}),e.createElement(n,{name:"은지",size:"large"}),e.createElement(n,{name:"은지",size:"xlarge"}))},g={name:"크기별",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"크기별",description:"small(32) / medium(40) / large(56) / xlarge(80)"},e.createElement(h,{gap:t.large,align:"flex-end"},["small","medium","large","xlarge"].map(o=>e.createElement(x,{key:o,gap:t.small},e.createElement(k,null,o),e.createElement(n,{name:"바이오",size:o}))))))},u={name:"온라인 상태",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"온라인 상태",description:"online prop으로 초록색 상태 점을 표시합니다."},e.createElement(h,{gap:t.large,align:"center"},e.createElement(x,{gap:t.small},e.createElement(k,null,"오프라인"),e.createElement(n,{name:"은지",size:"large"})),e.createElement(x,{gap:t.small},e.createElement(k,null,"온라인"),e.createElement(n,{name:"은지",size:"large",online:!0})))))},V=[{name:"김은지",role:"프로덕트 디자이너",online:!0},{name:"박지훈",role:"프론트엔드 개발자",online:!0},{name:"이서연",role:"데이터 분석가",online:!1}],y={name:"실전 예시",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"실전 예시",description:"실제 화면에서 Avatar가 배치되는 맥락을 확인합니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(x,{gap:t.small},e.createElement(k,null,"팀원 목록"),e.createElement(a,{style:{borderWidth:1,borderColor:r.borderDefault,borderRadius:I.large,overflow:"hidden",backgroundColor:r.backgroundPrimary}},e.createElement(a,{style:{paddingHorizontal:t.xlarge,paddingVertical:t.medium,borderBottomWidth:1,borderBottomColor:r.borderDefault}},e.createElement(z,{style:{fontSize:l.headline.fontSize,fontWeight:f.semibold,color:r.textPrimary}},"헬스케어 팀")),V.map((o,s)=>e.createElement(a,{key:o.name},e.createElement(a,{style:{flexDirection:"row",alignItems:"center",paddingHorizontal:t.xlarge,paddingVertical:t.medium,gap:t.medium}},e.createElement(n,{name:o.name,size:"large",online:o.online}),e.createElement(a,{style:{flex:1,gap:t.xsmall}},e.createElement(z,{style:{fontSize:l.body2.fontSize,fontWeight:f.medium,color:r.textPrimary}},o.name),e.createElement(z,{style:{fontSize:l.caption.fontSize,color:r.textSecondary}},o.role))),s<V.length-1&&e.createElement(a,{style:{height:1,backgroundColor:r.borderDefault,marginLeft:t.xlarge+56+t.medium}}))))))))},S={name:"디자인 스펙",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 Avatar 구성 요소별 스펙입니다.",badge:"디자인"},e.createElement(p,{title:"원형 컨테이너",rows:[{property:"배경색",token:"color/background/tertiary",value:r.backgroundTertiary,type:"color"},{property:"모양",token:"—",value:"원형 (borderRadius = size / 2)"}]}),e.createElement(w,null),e.createElement(p,{title:"이니셜 텍스트",rows:[{property:"색상",token:"color/text/secondary",value:r.textSecondary,type:"color"},{property:"fontWeight",token:"fontWeight/medium",value:f.medium},{property:"small fontSize",token:"—",value:13,type:"size"},{property:"medium fontSize",token:"—",value:15,type:"size"},{property:"large fontSize",token:"—",value:20,type:"size"},{property:"xlarge fontSize",token:"—",value:28,type:"size"}]}),e.createElement(w,null),e.createElement(p,{title:"온라인 상태 점",rows:[{property:"배경색",token:"color/background/brand",value:r.backgroundBrand,type:"color"},{property:"테두리색",token:"color/background/primary",value:r.backgroundPrimary,type:"color"},{property:"테두리 두께",token:"—",value:2,type:"size"}]}),e.createElement(w,null),e.createElement(p,{title:"크기별 컨테이너",rows:[{property:"small",token:"—",value:32,type:"size"},{property:"medium",token:"—",value:40,type:"size"},{property:"large",token:"—",value:56,type:"size"},{property:"xlarge",token:"—",value:80,type:"size"}]})))},b={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"사용 가이드",badge:"개발"},e.createElement(C,{title:"Import",code:"import { Avatar } from '@design-system/components/Avatar';"}),e.createElement(C,{title:"기본 사용",code:`<Avatar name="은지" size="medium" />
<Avatar name="은지" size="large" online />`})))};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Row gap={spacing.large} align="center">
      <Avatar name="은지" size="small" />
      <Avatar name="은지" size="medium" />
      <Avatar name="은지" size="large" />
      <Avatar name="은지" size="xlarge" />
    </Row>
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '크기별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="크기별" description="small(32) / medium(40) / large(56) / xlarge(80)">
        <Row gap={spacing.large} align="flex-end">
          {(['small', 'medium', 'large', 'xlarge'] as const).map(size => <Col key={size} gap={spacing.small}>
              <StateLabel>{size}</StateLabel>
              <Avatar name="바이오" size={size} />
            </Col>)}
        </Row>
      </Section>
    </View>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '온라인 상태',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="온라인 상태" description="online prop으로 초록색 상태 점을 표시합니다.">
        <Row gap={spacing.large} align="center">
          <Col gap={spacing.small}><StateLabel>오프라인</StateLabel><Avatar name="은지" size="large" /></Col>
          <Col gap={spacing.small}><StateLabel>온라인</StateLabel><Avatar name="은지" size="large" online /></Col>
        </Row>
      </Section>
    </View>
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="실제 화면에서 Avatar가 배치되는 맥락을 확인합니다.">
        <View style={{
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>팀원 목록</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: radius.large,
            overflow: 'hidden',
            backgroundColor: semanticColor.backgroundPrimary
          }}>
              <View style={{
              paddingHorizontal: spacing.xlarge,
              paddingVertical: spacing.medium,
              borderBottomWidth: 1,
              borderBottomColor: semanticColor.borderDefault
            }}>
                <Text style={{
                fontSize: textStyle.headline.fontSize,
                fontWeight: fw.semibold,
                color: semanticColor.textPrimary
              }}>
                  헬스케어 팀
                </Text>
              </View>
              {TEAM_MEMBERS.map((member, i) => <View key={member.name}>
                  <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: spacing.xlarge,
                paddingVertical: spacing.medium,
                gap: spacing.medium
              }}>
                    <Avatar name={member.name} size="large" online={member.online} />
                    <View style={{
                  flex: 1,
                  gap: spacing.xsmall
                }}>
                      <Text style={{
                    fontSize: textStyle.body2.fontSize,
                    fontWeight: fw.medium,
                    color: semanticColor.textPrimary
                  }}>
                        {member.name}
                      </Text>
                      <Text style={{
                    fontSize: textStyle.caption.fontSize,
                    color: semanticColor.textSecondary
                  }}>
                        {member.role}
                      </Text>
                    </View>
                  </View>
                  {i < TEAM_MEMBERS.length - 1 && <View style={{
                height: 1,
                backgroundColor: semanticColor.borderDefault,
                marginLeft: spacing.xlarge + 56 + spacing.medium
              }} />}
                </View>)}
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 Avatar 구성 요소별 스펙입니다." badge="디자인">
        <TokenSpecTable title="원형 컨테이너" rows={[{
        property: '배경색',
        token: 'color/background/tertiary',
        value: semanticColor.backgroundTertiary,
        type: 'color'
      }, {
        property: '모양',
        token: '—',
        value: '원형 (borderRadius = size / 2)'
      }]} />

        <Divider />

        <TokenSpecTable title="이니셜 텍스트" rows={[{
        property: '색상',
        token: 'color/text/secondary',
        value: semanticColor.textSecondary,
        type: 'color'
      }, {
        property: 'fontWeight',
        token: 'fontWeight/medium',
        value: fw.medium
      }, {
        property: 'small fontSize',
        token: '—',
        value: 13,
        type: 'size'
      }, {
        property: 'medium fontSize',
        token: '—',
        value: 15,
        type: 'size'
      }, {
        property: 'large fontSize',
        token: '—',
        value: 20,
        type: 'size'
      }, {
        property: 'xlarge fontSize',
        token: '—',
        value: 28,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="온라인 상태 점" rows={[{
        property: '배경색',
        token: 'color/background/brand',
        value: semanticColor.backgroundBrand,
        type: 'color'
      }, {
        property: '테두리색',
        token: 'color/background/primary',
        value: semanticColor.backgroundPrimary,
        type: 'color'
      }, {
        property: '테두리 두께',
        token: '—',
        value: 2,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="크기별 컨테이너" rows={[{
        property: 'small',
        token: '—',
        value: 32,
        type: 'size'
      }, {
        property: 'medium',
        token: '—',
        value: 40,
        type: 'size'
      }, {
        property: 'large',
        token: '—',
        value: 56,
        type: 'size'
      }, {
        property: 'xlarge',
        token: '—',
        value: 80,
        type: 'size'
      }]} />
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { Avatar } from '@design-system/components/Avatar';\`} />
        <CodeBlock title="기본 사용" code={\`<Avatar name="은지" size="medium" />\\n<Avatar name="은지" size="large" online />\`} />
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};const J=["Playground","Sizes","OnlineStatus","InContext","DesignSpec","Usage"];export{S as DesignSpec,y as InContext,u as OnlineStatus,d as Playground,g as Sizes,b as Usage,J as __namedExportsOrder,G as default};
