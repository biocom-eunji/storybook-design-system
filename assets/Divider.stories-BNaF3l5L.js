import{R as e,V as o}from"./iframe-CExKz_YG.js";import{c as a,s as t,m as D,e as w,y as T,r as k,T as i,a as s}from"./theme-DRANkRo4.js";import{S as c,C as n,a as r,b,D as V,d as m}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";function l({direction:f="horizontal",thickness:h=1,color:x=a[96],spacing:C=0,inset:y=0}){const z=f==="horizontal"?{height:h,width:"100%",backgroundColor:x,marginVertical:C,marginLeft:y}:{width:h,height:"100%",backgroundColor:x,marginHorizontal:C,marginLeft:y};return e.createElement(o,{style:z,accessibilityRole:"none"})}l.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#E1E2E4'",computed:!1}},spacing:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},inset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const I={title:"Data Display/Divider",component:l,argTypes:{direction:{control:"select",options:["horizontal","vertical"],description:"구분선 방향"},thickness:{control:"number",description:"선 두께 (px)"},color:{control:"color",description:"선 색상"},spacing:{control:"number",description:"양쪽 여백 (px)"},inset:{control:"number",description:"왼쪽 들여쓰기 (px)"}},tags:["autodocs"]},p={args:{direction:"horizontal",thickness:1,color:a[96],spacing:0,inset:0}},d={name:"방향",render:()=>e.createElement(c,{title:"방향",description:"horizontal(가로)과 vertical(세로) 두 가지 방향을 지원합니다."},e.createElement(n,{gap:t.xlarge},e.createElement(n,{gap:t.small},e.createElement(r,null,"Horizontal (기본)"),e.createElement(o,{style:{backgroundColor:a[99],padding:t.large,borderRadius:k.small}},e.createElement(i,{style:{fontSize:s.small,color:a[50],marginBottom:t.small}},"위쪽 콘텐츠"),e.createElement(l,null),e.createElement(i,{style:{fontSize:s.small,color:a[50],marginTop:t.small}},"아래쪽 콘텐츠"))),e.createElement(n,{gap:t.small},e.createElement(r,null,"Vertical"),e.createElement(o,{style:{flexDirection:"row",alignItems:"center",backgroundColor:a[99],padding:t.large,borderRadius:k.small,height:60}},e.createElement(i,{style:{fontSize:s.small,color:a[50]}},"왼쪽"),e.createElement(o,{style:{marginHorizontal:t.medium,height:"100%"}},e.createElement(l,{direction:"vertical"})),e.createElement(i,{style:{fontSize:s.small,color:a[50]}},"오른쪽")))))},g={name:"두께",render:()=>e.createElement(c,{title:"두께",description:"thickness 값을 조절하여 선의 두께를 변경할 수 있습니다."},e.createElement(n,{gap:t.xlarge},e.createElement(n,{gap:t.small},e.createElement(r,null,"1px (기본)"),e.createElement(l,{thickness:1})),e.createElement(n,{gap:t.small},e.createElement(r,null,"2px"),e.createElement(l,{thickness:2})),e.createElement(n,{gap:t.small},e.createElement(r,null,"4px"),e.createElement(l,{thickness:4})),e.createElement(n,{gap:t.small},e.createElement(r,null,"8px"),e.createElement(l,{thickness:8}))))},u={name:"색상",render:()=>e.createElement(c,{title:"색상",description:"color prop으로 선 색상을 커스터마이즈할 수 있습니다."},e.createElement(n,{gap:t.xlarge},e.createElement(n,{gap:t.small},e.createElement(r,null,"기본 — coolNeutral[96]"),e.createElement(l,{thickness:2})),e.createElement(n,{gap:t.small},e.createElement(r,null,"coolNeutral[90]"),e.createElement(l,{thickness:2,color:a[90]})),e.createElement(n,{gap:t.small},e.createElement(r,null,"mint[45]"),e.createElement(l,{thickness:2,color:D[45]})),e.createElement(n,{gap:t.small},e.createElement(r,null,"red[70]"),e.createElement(l,{thickness:2,color:w[70]})),e.createElement(n,{gap:t.small},e.createElement(r,null,"yellow[50]"),e.createElement(l,{thickness:2,color:T[50]}))))},E={name:"인셋",render:()=>e.createElement(c,{title:"인셋 (들여쓰기)",description:"inset prop으로 왼쪽 들여쓰기를 적용할 수 있습니다. 리스트 구분선에 유용합니다."},e.createElement(o,{style:{backgroundColor:a[99],borderRadius:k.small,overflow:"hidden"}},e.createElement(o,{style:{padding:t.large}},e.createElement(i,{style:{fontSize:s.medium,color:a[17]}},"전체 너비 (inset: 0)")),e.createElement(l,null),e.createElement(o,{style:{padding:t.large}},e.createElement(i,{style:{fontSize:s.medium,color:a[17]}},"들여쓰기 16px")),e.createElement(l,{inset:t.large}),e.createElement(o,{style:{padding:t.large}},e.createElement(i,{style:{fontSize:s.medium,color:a[17]}},"들여쓰기 48px")),e.createElement(l,{inset:t["4xlarge"]}),e.createElement(o,{style:{padding:t.large}},e.createElement(i,{style:{fontSize:s.medium,color:a[17]}},"마지막 항목"))))},v={name:"디자인 스펙",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"디자인 스펙",description:"디자이너와 개발자를 위한 Divider 토큰 상세 스펙입니다."},e.createElement(b,{title:"기본 스펙",rows:[{label:"기본 두께",value:"1px",token:"—"},{label:"기본 색상",value:a[96],token:"coolNeutral[96]"},{label:"기본 방향",value:"horizontal",token:"—"},{label:"기본 여백",value:"0px",token:"—"},{label:"기본 인셋",value:"0px",token:"—"}]}),e.createElement(V,null),e.createElement(b,{title:"Horizontal 레이아웃",rows:[{label:"높이",value:"thickness 값",token:"—"},{label:"너비",value:"100%",token:"—"},{label:"여백 방향",value:"marginVertical",token:"—"}]}),e.createElement(b,{title:"Vertical 레이아웃",rows:[{label:"너비",value:"thickness 값",token:"—"},{label:"높이",value:"100%",token:"—"},{label:"여백 방향",value:"marginHorizontal",token:"—"}]})))},S={name:"사용 가이드",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"사용 가이드",description:"개발자를 위한 Divider 컴포넌트 사용 예시입니다."},e.createElement(m,{title:"Import",code:"import { Divider } from '@design-system/components/Divider';"}),e.createElement(m,{title:"기본 사용",code:"<Divider />"}),e.createElement(m,{title:"리스트 구분선 (인셋)",code:"<Divider inset={16} />"}),e.createElement(m,{title:"세로 구분선",code:`<View style={{ flexDirection: 'row', height: 40 }}>
  <Text>왼쪽</Text>
  <Divider direction="vertical" spacing={12} />
  <Text>오른쪽</Text>
</View>`}),e.createElement(m,{title:"커스텀 스타일",code:`<Divider
  thickness={2}
  color={coolNeutral[90]}
  spacing={16}
  inset={24}
/>`})))};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    thickness: 1,
    color: coolNeutral[96],
    spacing: 0,
    inset: 0
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '방향',
  render: () => <Section title="방향" description="horizontal(가로)과 vertical(세로) 두 가지 방향을 지원합니다.">
      <Col gap={spacing.xlarge}>
        <Col gap={spacing.small}>
          <StateLabel>Horizontal (기본)</StateLabel>
          <View style={{
          backgroundColor: coolNeutral[99],
          padding: spacing.large,
          borderRadius: radius.small
        }}>
            <Text style={{
            fontSize: fontSize.small,
            color: coolNeutral[50],
            marginBottom: spacing.small
          }}>위쪽 콘텐츠</Text>
            <DividerComponent />
            <Text style={{
            fontSize: fontSize.small,
            color: coolNeutral[50],
            marginTop: spacing.small
          }}>아래쪽 콘텐츠</Text>
          </View>
        </Col>

        <Col gap={spacing.small}>
          <StateLabel>Vertical</StateLabel>
          <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: coolNeutral[99],
          padding: spacing.large,
          borderRadius: radius.small,
          height: 60
        }}>
            <Text style={{
            fontSize: fontSize.small,
            color: coolNeutral[50]
          }}>왼쪽</Text>
            <View style={{
            marginHorizontal: spacing.medium,
            height: '100%'
          }}>
              <DividerComponent direction="vertical" />
            </View>
            <Text style={{
            fontSize: fontSize.small,
            color: coolNeutral[50]
          }}>오른쪽</Text>
          </View>
        </Col>
      </Col>
    </Section>
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '두께',
  render: () => <Section title="두께" description="thickness 값을 조절하여 선의 두께를 변경할 수 있습니다.">
      <Col gap={spacing.xlarge}>
        <Col gap={spacing.small}>
          <StateLabel>1px (기본)</StateLabel>
          <DividerComponent thickness={1} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>2px</StateLabel>
          <DividerComponent thickness={2} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>4px</StateLabel>
          <DividerComponent thickness={4} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>8px</StateLabel>
          <DividerComponent thickness={8} />
        </Col>
      </Col>
    </Section>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '색상',
  render: () => <Section title="색상" description="color prop으로 선 색상을 커스터마이즈할 수 있습니다.">
      <Col gap={spacing.xlarge}>
        <Col gap={spacing.small}>
          <StateLabel>{\`기본 — coolNeutral[96]\`}</StateLabel>
          <DividerComponent thickness={2} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{\`coolNeutral[90]\`}</StateLabel>
          <DividerComponent thickness={2} color={coolNeutral[90]} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{\`mint[45]\`}</StateLabel>
          <DividerComponent thickness={2} color={mint[45]} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{\`red[70]\`}</StateLabel>
          <DividerComponent thickness={2} color={red[70]} />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{\`yellow[50]\`}</StateLabel>
          <DividerComponent thickness={2} color={yellow[50]} />
        </Col>
      </Col>
    </Section>
}`,...u.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '인셋',
  render: () => <Section title="인셋 (들여쓰기)" description="inset prop으로 왼쪽 들여쓰기를 적용할 수 있습니다. 리스트 구분선에 유용합니다.">
      <View style={{
      backgroundColor: coolNeutral[99],
      borderRadius: radius.small,
      overflow: 'hidden'
    }}>
        <View style={{
        padding: spacing.large
      }}>
          <Text style={{
          fontSize: fontSize.medium,
          color: coolNeutral[17]
        }}>전체 너비 (inset: 0)</Text>
        </View>
        <DividerComponent />
        <View style={{
        padding: spacing.large
      }}>
          <Text style={{
          fontSize: fontSize.medium,
          color: coolNeutral[17]
        }}>들여쓰기 16px</Text>
        </View>
        <DividerComponent inset={spacing.large} />
        <View style={{
        padding: spacing.large
      }}>
          <Text style={{
          fontSize: fontSize.medium,
          color: coolNeutral[17]
        }}>들여쓰기 48px</Text>
        </View>
        <DividerComponent inset={spacing['4xlarge']} />
        <View style={{
        padding: spacing.large
      }}>
          <Text style={{
          fontSize: fontSize.medium,
          color: coolNeutral[17]
        }}>마지막 항목</Text>
        </View>
      </View>
    </Section>
}`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="디자이너와 개발자를 위한 Divider 토큰 상세 스펙입니다.">
        <SpecTable title="기본 스펙" rows={[{
        label: '기본 두께',
        value: '1px',
        token: '—'
      }, {
        label: '기본 색상',
        value: coolNeutral[96],
        token: 'coolNeutral[96]'
      }, {
        label: '기본 방향',
        value: 'horizontal',
        token: '—'
      }, {
        label: '기본 여백',
        value: '0px',
        token: '—'
      }, {
        label: '기본 인셋',
        value: '0px',
        token: '—'
      }]} />

        <DividerLine />

        <SpecTable title="Horizontal 레이아웃" rows={[{
        label: '높이',
        value: 'thickness 값',
        token: '—'
      }, {
        label: '너비',
        value: '100%',
        token: '—'
      }, {
        label: '여백 방향',
        value: 'marginVertical',
        token: '—'
      }]} />

        <SpecTable title="Vertical 레이아웃" rows={[{
        label: '너비',
        value: 'thickness 값',
        token: '—'
      }, {
        label: '높이',
        value: '100%',
        token: '—'
      }, {
        label: '여백 방향',
        value: 'marginHorizontal',
        token: '—'
      }]} />
      </Section>
    </View>
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Divider 컴포넌트 사용 예시입니다.">
        <CodeBlock title="Import" code={\`import { Divider } from '@design-system/components/Divider';\`} />

        <CodeBlock title="기본 사용" code={\`<Divider />\`} />

        <CodeBlock title="리스트 구분선 (인셋)" code={\`<Divider inset={16} />\`} />

        <CodeBlock title="세로 구분선" code={\`<View style={{ flexDirection: 'row', height: 40 }}>
  <Text>왼쪽</Text>
  <Divider direction="vertical" spacing={12} />
  <Text>오른쪽</Text>
</View>\`} />

        <CodeBlock title="커스텀 스타일" code={\`<Divider
  thickness={2}
  color={coolNeutral[90]}
  spacing={16}
  inset={24}
/>\`} />
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};const q=["Playground","Directions","Thickness","Colors","Inset","DesignSpec","Usage"];export{u as Colors,v as DesignSpec,d as Directions,E as Inset,p as Playground,g as Thickness,S as Usage,q as __namedExportsOrder,I as default};
