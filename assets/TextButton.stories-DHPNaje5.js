import{R as e,V as s}from"./iframe-CExKz_YG.js";import{M as D,s as t,t as y,T as h,f as q,m as G,c as z}from"./theme-DRANkRo4.js";import{r as f}from"./utils-DPo6dezl.js";import{A as W}from"./index-DZaAZL7W.js";import{I as o}from"./Icon-CTnW1Y2_.js";import{S as c,C as a,a as n,R as r,D as S,b as C,c as k,d as i}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";function l({label:L,onPress:w,color:R="primary",size:N="medium",disabled:T=!1,loading:I=!1,leadingIcon:V,trailingIcon:A}){const v=y.size[N],B=y.color[R],P=m=>T?B.contentDisabled:m.pressed?B.contentPressed:B.content;return e.createElement(D,{onPress:w,disabled:T||I,accessibilityRole:"button",accessibilityState:{disabled:T||I},style:m=>[{flexDirection:"row",alignItems:"center",gap:t.xsmall}]},m=>{const u=P(m),M={fontSize:v.fontSize,fontWeight:q.medium,color:u,textDecorationLine:"underline"};return I?e.createElement(W,{size:"small",color:u}):e.createElement(e.Fragment,null,f(V,v.iconSize,u),e.createElement(h,{style:M},L),f(A,v.iconSize,u))})}l.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{label:{required:!0,tsType:{name:"string"},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'assistive'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'assistive'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const J={title:"General/TextButton",component:l,argTypes:{color:{control:"select",options:["primary","assistive"],description:"버튼 컬러"},size:{control:"select",options:["small","medium"],description:"버튼 크기"},label:{control:"text",description:"버튼 텍스트"},disabled:{control:"boolean",description:"비활성화 상태"},loading:{control:"boolean",description:"로딩 상태"}},tags:["autodocs"]},d={args:{label:"텍스트 버튼",color:"primary",size:"medium",disabled:!1,loading:!1}},p={name:"모든 변형",render:()=>e.createElement(s,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"TextButton",description:"배경이나 테두리 없이 텍스트만으로 동작하는 버튼입니다."},e.createElement(a,{gap:t["2xlarge"]},e.createElement(a,{gap:t.medium},e.createElement(n,null,"PRIMARY"),e.createElement(r,{gap:t.xlarge},e.createElement(a,{gap:t.xsmall},e.createElement(n,null,"Medium"),e.createElement(l,{label:"텍스트",color:"primary",size:"medium"})),e.createElement(a,{gap:t.xsmall},e.createElement(n,null,"Small"),e.createElement(l,{label:"텍스트",color:"primary",size:"small"})),e.createElement(a,{gap:t.xsmall},e.createElement(n,null,"아이콘 포함"),e.createElement(l,{label:"텍스트",color:"primary",size:"medium",leadingIcon:e.createElement(o,{name:"null"})})),e.createElement(a,{gap:t.xsmall},e.createElement(n,null,"비활성화"),e.createElement(l,{label:"텍스트",color:"primary",size:"medium",disabled:!0})))),e.createElement(S,null),e.createElement(a,{gap:t.medium},e.createElement(n,null,"ASSISTIVE"),e.createElement(r,{gap:t.xlarge},e.createElement(a,{gap:t.xsmall},e.createElement(n,null,"Medium"),e.createElement(l,{label:"텍스트",color:"assistive",size:"medium"})),e.createElement(a,{gap:t.xsmall},e.createElement(n,null,"Small"),e.createElement(l,{label:"텍스트",color:"assistive",size:"small"})),e.createElement(a,{gap:t.xsmall},e.createElement(n,null,"아이콘 포함"),e.createElement(l,{label:"텍스트",color:"assistive",size:"medium",leadingIcon:e.createElement(o,{name:"null"})})),e.createElement(a,{gap:t.xsmall},e.createElement(n,null,"비활성화"),e.createElement(l,{label:"텍스트",color:"assistive",size:"medium",disabled:!0})))))))},g={name:"상태",render:()=>e.createElement(s,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"상태별 비교",description:"각 상태에서의 TextButton 모습을 비교합니다."},e.createElement(a,{gap:t["2xlarge"]},e.createElement(a,{gap:t.medium},e.createElement(n,null,"PRIMARY"),e.createElement(k,{items:[{label:"기본",content:e.createElement(l,{label:"텍스트",color:"primary"})},{label:"비활성화",content:e.createElement(l,{label:"텍스트",color:"primary",disabled:!0})},{label:"로딩",content:e.createElement(l,{label:"텍스트",color:"primary",loading:!0})}]})),e.createElement(S,null),e.createElement(a,{gap:t.medium},e.createElement(n,null,"ASSISTIVE"),e.createElement(k,{items:[{label:"기본",content:e.createElement(l,{label:"텍스트",color:"assistive"})},{label:"비활성화",content:e.createElement(l,{label:"텍스트",color:"assistive",disabled:!0})},{label:"로딩",content:e.createElement(l,{label:"텍스트",color:"assistive",loading:!0})}]})))))},b={name:"아이콘 조합",render:()=>e.createElement(s,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"아이콘 조합",description:"Leading, Trailing 또는 양쪽 모두에 아이콘을 배치할 수 있습니다."},e.createElement(a,{gap:t["2xlarge"]},e.createElement(a,{gap:t.medium},e.createElement(n,null,"LEADING 아이콘"),e.createElement(r,{gap:t.xlarge},e.createElement(l,{label:"텍스트",color:"primary",size:"medium",leadingIcon:e.createElement(o,{name:"null"})}),e.createElement(l,{label:"텍스트",color:"assistive",size:"medium",leadingIcon:e.createElement(o,{name:"null"})}))),e.createElement(S,null),e.createElement(a,{gap:t.medium},e.createElement(n,null,"TRAILING 아이콘"),e.createElement(r,{gap:t.xlarge},e.createElement(l,{label:"텍스트",color:"primary",size:"medium",trailingIcon:e.createElement(o,{name:"null"})}),e.createElement(l,{label:"텍스트",color:"assistive",size:"medium",trailingIcon:e.createElement(o,{name:"null"})}))),e.createElement(S,null),e.createElement(a,{gap:t.medium},e.createElement(n,null,"양쪽 아이콘"),e.createElement(r,{gap:t.xlarge},e.createElement(l,{label:"텍스트",color:"primary",size:"medium",leadingIcon:e.createElement(o,{name:"null"}),trailingIcon:e.createElement(o,{name:"null"})}),e.createElement(l,{label:"텍스트",color:"assistive",size:"medium",leadingIcon:e.createElement(o,{name:"null"}),trailingIcon:e.createElement(o,{name:"null"})}))))))},x={name:"디자인 스펙",render:()=>e.createElement(s,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"디자인 스펙",description:"TextButton 컴포넌트의 디자인 토큰 명세입니다."},e.createElement(a,{gap:t["2xlarge"]},e.createElement(C,{title:"사이즈별 스펙",rows:[{label:"Small - fontSize",value:"13",token:"textButtonToken.size.small.fontSize"},{label:"Small - iconSize",value:"16",token:"textButtonToken.size.small.iconSize"},{label:"Medium - fontSize",value:"15",token:"textButtonToken.size.medium.fontSize"},{label:"Medium - iconSize",value:"20",token:"textButtonToken.size.medium.iconSize"}]}),e.createElement(C,{title:"Primary 컬러",rows:[{label:"기본 콘텐츠",value:"#22C3BC",token:"mint[45]"},{label:"눌림 콘텐츠",value:G[30],token:"mint[30]"},{label:"비활성화 콘텐츠",value:z[80],token:"coolNeutral[80]"}]}),e.createElement(C,{title:"Assistive 컬러",rows:[{label:"기본 콘텐츠",value:"#70737C",token:"coolNeutral[50]"},{label:"눌림 콘텐츠",value:z[30],token:"coolNeutral[30]"},{label:"비활성화 콘텐츠",value:z[80],token:"coolNeutral[80]"}]}))))},E={name:"사용 가이드",render:()=>e.createElement(s,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"사용 가이드",description:"TextButton 컴포넌트의 import 및 사용 예시입니다."},e.createElement(a,{gap:t.large},e.createElement(i,{title:"Import",code:`import { TextButton } from '@design-system/components/TextButton';
import { Icon } from '@design-system/components/Icon';`}),e.createElement(i,{title:"기본 사용",code:'<TextButton label="확인" onPress={handlePress} />'}),e.createElement(i,{title:"Assistive 스타일",code:'<TextButton label="취소" color="assistive" onPress={handleCancel} />'}),e.createElement(i,{title:"Small 사이즈",code:'<TextButton label="더보기" size="small" />'}),e.createElement(i,{title:"아이콘 포함",code:`<TextButton
  label="다음"
  trailingIcon={<Icon name="null" />}
  onPress={handleNext}
/>`}),e.createElement(i,{title:"비활성화 상태",code:'<TextButton label="제출" disabled />'}),e.createElement(i,{title:"로딩 상태",code:'<TextButton label="저장 중" loading />'}))))};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: '텍스트 버튼',
    color: 'primary',
    size: 'medium',
    disabled: false,
    loading: false
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '모든 변형',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="TextButton" description="배경이나 테두리 없이 텍스트만으로 동작하는 버튼입니다.">
        <Col gap={spacing['2xlarge']}>
          {/* Primary */}
          <Col gap={spacing.medium}>
            <StateLabel>PRIMARY</StateLabel>
            <Row gap={spacing.xlarge}>
              <Col gap={spacing.xsmall}>
                <StateLabel>Medium</StateLabel>
                <TextButton label="텍스트" color="primary" size="medium" />
              </Col>
              <Col gap={spacing.xsmall}>
                <StateLabel>Small</StateLabel>
                <TextButton label="텍스트" color="primary" size="small" />
              </Col>
              <Col gap={spacing.xsmall}>
                <StateLabel>아이콘 포함</StateLabel>
                <TextButton label="텍스트" color="primary" size="medium" leadingIcon={<Icon name="null" />} />
              </Col>
              <Col gap={spacing.xsmall}>
                <StateLabel>비활성화</StateLabel>
                <TextButton label="텍스트" color="primary" size="medium" disabled />
              </Col>
            </Row>
          </Col>

          <Divider />

          {/* Assistive */}
          <Col gap={spacing.medium}>
            <StateLabel>ASSISTIVE</StateLabel>
            <Row gap={spacing.xlarge}>
              <Col gap={spacing.xsmall}>
                <StateLabel>Medium</StateLabel>
                <TextButton label="텍스트" color="assistive" size="medium" />
              </Col>
              <Col gap={spacing.xsmall}>
                <StateLabel>Small</StateLabel>
                <TextButton label="텍스트" color="assistive" size="small" />
              </Col>
              <Col gap={spacing.xsmall}>
                <StateLabel>아이콘 포함</StateLabel>
                <TextButton label="텍스트" color="assistive" size="medium" leadingIcon={<Icon name="null" />} />
              </Col>
              <Col gap={spacing.xsmall}>
                <StateLabel>비활성화</StateLabel>
                <TextButton label="텍스트" color="assistive" size="medium" disabled />
              </Col>
            </Row>
          </Col>
        </Col>
      </Section>
    </View>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '상태',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="상태별 비교" description="각 상태에서의 TextButton 모습을 비교합니다.">
        <Col gap={spacing['2xlarge']}>
          <Col gap={spacing.medium}>
            <StateLabel>PRIMARY</StateLabel>
            <CompareGrid items={[{
            label: '기본',
            content: <TextButton label="텍스트" color="primary" />
          }, {
            label: '비활성화',
            content: <TextButton label="텍스트" color="primary" disabled />
          }, {
            label: '로딩',
            content: <TextButton label="텍스트" color="primary" loading />
          }]} />
          </Col>

          <Divider />

          <Col gap={spacing.medium}>
            <StateLabel>ASSISTIVE</StateLabel>
            <CompareGrid items={[{
            label: '기본',
            content: <TextButton label="텍스트" color="assistive" />
          }, {
            label: '비활성화',
            content: <TextButton label="텍스트" color="assistive" disabled />
          }, {
            label: '로딩',
            content: <TextButton label="텍스트" color="assistive" loading />
          }]} />
          </Col>
        </Col>
      </Section>
    </View>
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '아이콘 조합',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="아이콘 조합" description="Leading, Trailing 또는 양쪽 모두에 아이콘을 배치할 수 있습니다.">
        <Col gap={spacing['2xlarge']}>
          <Col gap={spacing.medium}>
            <StateLabel>LEADING 아이콘</StateLabel>
            <Row gap={spacing.xlarge}>
              <TextButton label="텍스트" color="primary" size="medium" leadingIcon={<Icon name="null" />} />
              <TextButton label="텍스트" color="assistive" size="medium" leadingIcon={<Icon name="null" />} />
            </Row>
          </Col>

          <Divider />

          <Col gap={spacing.medium}>
            <StateLabel>TRAILING 아이콘</StateLabel>
            <Row gap={spacing.xlarge}>
              <TextButton label="텍스트" color="primary" size="medium" trailingIcon={<Icon name="null" />} />
              <TextButton label="텍스트" color="assistive" size="medium" trailingIcon={<Icon name="null" />} />
            </Row>
          </Col>

          <Divider />

          <Col gap={spacing.medium}>
            <StateLabel>양쪽 아이콘</StateLabel>
            <Row gap={spacing.xlarge}>
              <TextButton label="텍스트" color="primary" size="medium" leadingIcon={<Icon name="null" />} trailingIcon={<Icon name="null" />} />
              <TextButton label="텍스트" color="assistive" size="medium" leadingIcon={<Icon name="null" />} trailingIcon={<Icon name="null" />} />
            </Row>
          </Col>
        </Col>
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="TextButton 컴포넌트의 디자인 토큰 명세입니다.">
        <Col gap={spacing['2xlarge']}>
          <SpecTable title="사이즈별 스펙" rows={[{
          label: 'Small - fontSize',
          value: '13',
          token: 'textButtonToken.size.small.fontSize'
        }, {
          label: 'Small - iconSize',
          value: '16',
          token: 'textButtonToken.size.small.iconSize'
        }, {
          label: 'Medium - fontSize',
          value: '15',
          token: 'textButtonToken.size.medium.fontSize'
        }, {
          label: 'Medium - iconSize',
          value: '20',
          token: 'textButtonToken.size.medium.iconSize'
        }]} />

          <SpecTable title="Primary 컬러" rows={[{
          label: '기본 콘텐츠',
          value: '#22C3BC',
          token: 'mint[45]'
        }, {
          label: '눌림 콘텐츠',
          value: mint[30],
          token: 'mint[30]'
        }, {
          label: '비활성화 콘텐츠',
          value: coolNeutral[80],
          token: 'coolNeutral[80]'
        }]} />

          <SpecTable title="Assistive 컬러" rows={[{
          label: '기본 콘텐츠',
          value: '#70737C',
          token: 'coolNeutral[50]'
        }, {
          label: '눌림 콘텐츠',
          value: coolNeutral[30],
          token: 'coolNeutral[30]'
        }, {
          label: '비활성화 콘텐츠',
          value: coolNeutral[80],
          token: 'coolNeutral[80]'
        }]} />
        </Col>
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="TextButton 컴포넌트의 import 및 사용 예시입니다.">
        <Col gap={spacing.large}>
          <CodeBlock title="Import" code={\`import { TextButton } from '@design-system/components/TextButton';
import { Icon } from '@design-system/components/Icon';\`} />

          <CodeBlock title="기본 사용" code={\`<TextButton label="확인" onPress={handlePress} />\`} />

          <CodeBlock title="Assistive 스타일" code={\`<TextButton label="취소" color="assistive" onPress={handleCancel} />\`} />

          <CodeBlock title="Small 사이즈" code={\`<TextButton label="더보기" size="small" />\`} />

          <CodeBlock title="아이콘 포함" code={\`<TextButton
  label="다음"
  trailingIcon={<Icon name="null" />}
  onPress={handleNext}
/>\`} />

          <CodeBlock title="비활성화 상태" code={\`<TextButton label="제출" disabled />\`} />

          <CodeBlock title="로딩 상태" code={\`<TextButton label="저장 중" loading />\`} />
        </Col>
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};const K=["Playground","AllVariants","States","WithIcons","DesignSpec","Usage"];export{p as AllVariants,x as DesignSpec,d as Playground,g as States,E as Usage,b as WithIcons,K as __namedExportsOrder,J as default};
