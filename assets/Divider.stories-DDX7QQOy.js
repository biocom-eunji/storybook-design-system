import{R as e,V as a}from"./iframe-rdsxNJ7l.js";import{c as r,s as t,r as C,T as o,e as i}from"./theme-KAxj7l-q.js";import{S as c,b as s,a as E,C as d}from"./storyHelpers-D5HpvNsw.js";import{T as k}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";function l({direction:n="horizontal",thickness:m=1,color:p=r.borderDefault,spacing:v=0,inset:z=0}){const h=n==="horizontal"?{height:m,width:"100%",backgroundColor:p,marginVertical:v,marginLeft:z}:{width:m,height:"100%",backgroundColor:p,marginHorizontal:v,marginLeft:z};return e.createElement(a,{style:h,accessibilityRole:"none"})}l.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#E1E2E4'",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},inset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const R={title:"Data Display/Divider",component:l,argTypes:{direction:{control:"select",options:["horizontal","vertical"],description:"구분선 방향"},thickness:{control:"number",description:"선 두께"},color:{control:"color",description:"선 색상"},spacing:{control:"number",description:"양쪽 여백"},inset:{control:"number",description:"왼쪽 들여쓰기"}},tags:["autodocs"]},g={args:{direction:"horizontal",thickness:1,color:r.borderDefault,spacing:0,inset:0}},u={name:"방향",render:()=>e.createElement(c,{title:"방향",description:"horizontal(가로)과 vertical(세로) 두 가지 방향을 지원합니다."},e.createElement(s,{gap:t.xlarge},e.createElement(s,{gap:t.small},e.createElement(E,null,"Horizontal (기본)"),e.createElement(a,{style:{backgroundColor:r.backgroundSecondary,padding:t.large,borderRadius:C.small}},e.createElement(o,{style:{fontSize:i.small,color:r.textSecondary,marginBottom:t.small}},"위쪽 콘텐츠"),e.createElement(l,null),e.createElement(o,{style:{fontSize:i.small,color:r.textSecondary,marginTop:t.small}},"아래쪽 콘텐츠"))),e.createElement(s,{gap:t.small},e.createElement(E,null,"Vertical"),e.createElement(a,{style:{flexDirection:"row",alignItems:"center",backgroundColor:r.backgroundSecondary,padding:t.large,borderRadius:C.small,height:60}},e.createElement(o,{style:{fontSize:i.small,color:r.textSecondary}},"왼쪽"),e.createElement(a,{style:{marginHorizontal:t.medium,height:"100%"}},e.createElement(l,{direction:"vertical"})),e.createElement(o,{style:{fontSize:i.small,color:r.textSecondary}},"오른쪽")))))},y={name:"두께",render:()=>e.createElement(c,{title:"두께",description:"thickness 값을 조절하여 선의 두께를 변경할 수 있습니다."},e.createElement(s,{gap:t.xlarge},[1,2,4,8].map(n=>e.createElement(s,{key:n,gap:t.small},e.createElement(E,null,`${n}px`),e.createElement(l,{thickness:n})))))},x={name:"인셋",render:()=>e.createElement(c,{title:"인셋 (들여쓰기)",description:"inset prop으로 왼쪽 들여쓰기를 적용할 수 있습니다. 리스트 구분선에 유용합니다."},e.createElement(a,{style:{backgroundColor:r.backgroundSecondary,borderRadius:C.small,overflow:"hidden"}},e.createElement(a,{style:{padding:t.large}},e.createElement(o,{style:{fontSize:i.medium,color:r.textPrimary}},"전체 너비 (inset: 0)")),e.createElement(l,null),e.createElement(a,{style:{padding:t.large}},e.createElement(o,{style:{fontSize:i.medium,color:r.textPrimary}},"들여쓰기 16px")),e.createElement(l,{inset:t.large}),e.createElement(a,{style:{padding:t.large}},e.createElement(o,{style:{fontSize:i.medium,color:r.textPrimary}},"들여쓰기 48px")),e.createElement(l,{inset:t["4xlarge"]}),e.createElement(a,{style:{padding:t.large}},e.createElement(o,{style:{fontSize:i.medium,color:r.textPrimary}},"마지막 항목"))))},S={name:"실전 예시",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"실전 예시",description:"실제 화면에서 Divider가 배치되는 맥락을 확인합니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(s,{gap:t.small},e.createElement(E,null,"설정 화면 구분선"),e.createElement(a,{style:{borderWidth:1,borderColor:r.borderDefault,borderRadius:C.large,overflow:"hidden",backgroundColor:r.backgroundPrimary}},[{label:"프로필 설정",desc:"이름, 사진, 목표 체중"},{label:"알림 설정",desc:"푸시 알림, 리마인더"},{label:"데이터 관리",desc:"내보내기, 초기화"},{label:"앱 정보",desc:"버전, 라이선스"}].map((n,m,p)=>e.createElement(a,{key:n.label},e.createElement(a,{style:{paddingHorizontal:t.xlarge,paddingVertical:t.large,gap:t.xsmall}},e.createElement(o,{style:{fontSize:i.medium,color:r.textPrimary}},n.label),e.createElement(o,{style:{fontSize:i.xsmall,color:r.textSecondary}},n.desc)),m<p.length-1&&e.createElement(l,{inset:t.xlarge}))))))))},b={name:"디자인 스펙",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"디자인 스펙",description:"Divider 토큰 스펙입니다.",badge:"디자인"},e.createElement(k,{title:"기본 스펙",rows:[{property:"기본 두께",token:"—",value:1,type:"size"},{property:"기본 색상",token:"color/border/default",value:r.borderDefault,type:"color"},{property:"기본 방향",token:"—",value:"horizontal"},{property:"기본 여백",token:"—",value:0,type:"size"},{property:"기본 인셋",token:"—",value:0,type:"size"}]})))},f={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"사용 가이드",description:"개발자를 위한 Divider 컴포넌트 사용 예시입니다.",badge:"개발"},e.createElement(d,{title:"Import",code:"import { Divider } from '@design-system/components/Divider';"}),e.createElement(d,{title:"기본 사용",code:"<Divider />"}),e.createElement(d,{title:"리스트 구분선 (인셋)",code:"<Divider inset={spacing.large} />"}),e.createElement(d,{title:"세로 구분선",code:`<View style={{ flexDirection: 'row', height: 40 }}>
  <Text>왼쪽</Text>
  <Divider direction="vertical" spacing={spacing.medium} />
  <Text>오른쪽</Text>
</View>`}),e.createElement(d,{title:"커스텀 색상",code:`<Divider
  thickness={2}
  color={semanticColor.borderFocus}
  spacing={spacing.large}
/>`})))};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    thickness: 1,
    color: semanticColor.borderDefault,
    spacing: 0,
    inset: 0
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '방향',
  render: () => <Section title="방향" description="horizontal(가로)과 vertical(세로) 두 가지 방향을 지원합니다.">
      <Col gap={spacing.xlarge}>
        <Col gap={spacing.small}>
          <StateLabel>Horizontal (기본)</StateLabel>
          <View style={{
          backgroundColor: semanticColor.backgroundSecondary,
          padding: spacing.large,
          borderRadius: radius.small
        }}>
            <Text style={{
            fontSize: fontSize.small,
            color: semanticColor.textSecondary,
            marginBottom: spacing.small
          }}>위쪽 콘텐츠</Text>
            <DividerComponent />
            <Text style={{
            fontSize: fontSize.small,
            color: semanticColor.textSecondary,
            marginTop: spacing.small
          }}>아래쪽 콘텐츠</Text>
          </View>
        </Col>

        <Col gap={spacing.small}>
          <StateLabel>Vertical</StateLabel>
          <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: semanticColor.backgroundSecondary,
          padding: spacing.large,
          borderRadius: radius.small,
          height: 60
        }}>
            <Text style={{
            fontSize: fontSize.small,
            color: semanticColor.textSecondary
          }}>왼쪽</Text>
            <View style={{
            marginHorizontal: spacing.medium,
            height: '100%'
          }}>
              <DividerComponent direction="vertical" />
            </View>
            <Text style={{
            fontSize: fontSize.small,
            color: semanticColor.textSecondary
          }}>오른쪽</Text>
          </View>
        </Col>
      </Col>
    </Section>
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '두께',
  render: () => <Section title="두께" description="thickness 값을 조절하여 선의 두께를 변경할 수 있습니다.">
      <Col gap={spacing.xlarge}>
        {[1, 2, 4, 8].map(t => <Col key={t} gap={spacing.small}>
            <StateLabel>{\`\${t}px\`}</StateLabel>
            <DividerComponent thickness={t} />
          </Col>)}
      </Col>
    </Section>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '인셋',
  render: () => <Section title="인셋 (들여쓰기)" description="inset prop으로 왼쪽 들여쓰기를 적용할 수 있습니다. 리스트 구분선에 유용합니다.">
      <View style={{
      backgroundColor: semanticColor.backgroundSecondary,
      borderRadius: radius.small,
      overflow: 'hidden'
    }}>
        <View style={{
        padding: spacing.large
      }}>
          <Text style={{
          fontSize: fontSize.medium,
          color: semanticColor.textPrimary
        }}>전체 너비 (inset: 0)</Text>
        </View>
        <DividerComponent />
        <View style={{
        padding: spacing.large
      }}>
          <Text style={{
          fontSize: fontSize.medium,
          color: semanticColor.textPrimary
        }}>들여쓰기 16px</Text>
        </View>
        <DividerComponent inset={spacing.large} />
        <View style={{
        padding: spacing.large
      }}>
          <Text style={{
          fontSize: fontSize.medium,
          color: semanticColor.textPrimary
        }}>들여쓰기 48px</Text>
        </View>
        <DividerComponent inset={spacing['4xlarge']} />
        <View style={{
        padding: spacing.large
      }}>
          <Text style={{
          fontSize: fontSize.medium,
          color: semanticColor.textPrimary
        }}>마지막 항목</Text>
        </View>
      </View>
    </Section>
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="실제 화면에서 Divider가 배치되는 맥락을 확인합니다.">
        <View style={{
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>설정 화면 구분선</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: radius.large,
            overflow: 'hidden',
            backgroundColor: semanticColor.backgroundPrimary
          }}>
              {[{
              label: '프로필 설정',
              desc: '이름, 사진, 목표 체중'
            }, {
              label: '알림 설정',
              desc: '푸시 알림, 리마인더'
            }, {
              label: '데이터 관리',
              desc: '내보내기, 초기화'
            }, {
              label: '앱 정보',
              desc: '버전, 라이선스'
            }].map((item, i, arr) => <View key={item.label}>
                  <View style={{
                paddingHorizontal: spacing.xlarge,
                paddingVertical: spacing.large,
                gap: spacing.xsmall
              }}>
                    <Text style={{
                  fontSize: fontSize.medium,
                  color: semanticColor.textPrimary
                }}>
                      {item.label}
                    </Text>
                    <Text style={{
                  fontSize: fontSize.xsmall,
                  color: semanticColor.textSecondary
                }}>
                      {item.desc}
                    </Text>
                  </View>
                  {i < arr.length - 1 && <DividerComponent inset={spacing.xlarge} />}
                </View>)}
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Divider 토큰 스펙입니다." badge="디자인">
        <TokenSpecTable title="기본 스펙" rows={[{
        property: '기본 두께',
        token: '—',
        value: 1,
        type: 'size'
      }, {
        property: '기본 색상',
        token: 'color/border/default',
        value: semanticColor.borderDefault,
        type: 'color'
      }, {
        property: '기본 방향',
        token: '—',
        value: 'horizontal'
      }, {
        property: '기본 여백',
        token: '—',
        value: 0,
        type: 'size'
      }, {
        property: '기본 인셋',
        token: '—',
        value: 0,
        type: 'size'
      }]} />
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Divider 컴포넌트 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { Divider } from '@design-system/components/Divider';\`} />

        <CodeBlock title="기본 사용" code={\`<Divider />\`} />

        <CodeBlock title="리스트 구분선 (인셋)" code={\`<Divider inset={spacing.large} />\`} />

        <CodeBlock title="세로 구분선" code={\`<View style={{ flexDirection: 'row', height: 40 }}>
  <Text>왼쪽</Text>
  <Divider direction="vertical" spacing={spacing.medium} />
  <Text>오른쪽</Text>
</View>\`} />

        <CodeBlock title="커스텀 색상" code={\`<Divider
  thickness={2}
  color={semanticColor.borderFocus}
  spacing={spacing.large}
/>\`} />
      </Section>
    </View>
}`,...f.parameters?.docs?.source}}};const H=["Playground","Directions","Thickness","Inset","InContext","DesignSpec","Usage"];export{b as DesignSpec,u as Directions,S as InContext,x as Inset,g as Playground,y as Thickness,f as Usage,H as __namedExportsOrder,R as default};
