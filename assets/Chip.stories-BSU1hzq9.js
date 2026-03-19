import{R as e,V as m}from"./iframe-CExKz_YG.js";import{g as l,M as A,T as M,f as q,s as a,c as o,m as L}from"./theme-DRANkRo4.js";import{r as w}from"./utils-DPo6dezl.js";import{I as X}from"./index-Cu5J3k6g.js";import{I as s}from"./Icon-CTnW1Y2_.js";import{S as g,R as u,C as t,a as i,b as c,D as W,d as C}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";function n({label:y,onPress:$,variant:N="solid",size:R="medium",active:T=!1,disabled:b=!1,leadingIcon:V,trailingIcon:H,thumbnail:E}){const r=l.size[R],D=b?"disabled":T?"active":"inactive",p=l.variant[N][D],f=r.height-8,F=P=>{const d={alignSelf:"flex-start",height:r.height,paddingHorizontal:r.paddingHorizontal,borderRadius:r.radius,alignItems:"center",justifyContent:"center",flexDirection:"row",gap:a.xsmall,backgroundColor:p.background};return"border"in p&&(d.borderWidth=1,d.borderColor=p.border),!b&&P.pressed&&(d.opacity=.7),E&&(d.paddingLeft=4),[d]},O={fontSize:r.fontSize,fontWeight:q.medium,color:p.content},I=p.content;return e.createElement(A,{onPress:$,disabled:b,accessibilityRole:"button",accessibilityState:{selected:T,disabled:b},style:F},E&&e.createElement(X,{source:E,style:{width:f,height:f,borderRadius:f/2}}),w(V,r.iconSize,I),e.createElement(M,{style:O},y),w(H,r.iconSize,I))}n.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outlined'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},thumbnail:{required:!1,tsType:{name:"ImageSourcePropType"},description:""}}};const Q={title:"Input/Chip",component:n,argTypes:{variant:{control:"select",options:["solid","outlined"],description:"칩 스타일 변형"},size:{control:"select",options:["xsmall","small","medium","large"],description:"칩 크기"},active:{control:"boolean",description:"활성화 상태"},disabled:{control:"boolean",description:"비활성화 상태"},label:{control:"text",description:"칩 텍스트"}},tags:["autodocs"]},z={args:{label:"텍스트",variant:"solid",size:"medium",active:!1,disabled:!1}},h={name:"모든 변형",render:()=>e.createElement(m,{style:{gap:a["3xlarge"]}},e.createElement(g,{title:"칩 변형 전체 보기",description:"variant(solid/outlined)와 상태(inactive/active/disabled)의 모든 조합을 확인할 수 있습니다."},e.createElement(m,{style:{gap:a.xlarge}},e.createElement(u,{gap:a["2xlarge"],align:"flex-start"},e.createElement(t,{gap:a.small},e.createElement(i,null,"Solid — 비활성"),e.createElement(n,{label:"텍스트",variant:"solid"})),e.createElement(t,{gap:a.small},e.createElement(i,null,"Solid — 활성"),e.createElement(n,{label:"텍스트",variant:"solid",active:!0})),e.createElement(t,{gap:a.small},e.createElement(i,null,"Solid — 비활성화"),e.createElement(n,{label:"텍스트",variant:"solid",disabled:!0}))),e.createElement(u,{gap:a["2xlarge"],align:"flex-start"},e.createElement(t,{gap:a.small},e.createElement(i,null,"Outlined — 비활성"),e.createElement(n,{label:"텍스트",variant:"outlined"})),e.createElement(t,{gap:a.small},e.createElement(i,null,"Outlined — 활성"),e.createElement(n,{label:"텍스트",variant:"outlined",active:!0})),e.createElement(t,{gap:a.small},e.createElement(i,null,"Outlined — 비활성화"),e.createElement(n,{label:"텍스트",variant:"outlined",disabled:!0}))))))},S={name:"크기 비교",render:()=>e.createElement(g,{title:"크기 비교",description:"XSmall, Small, Medium, Large 네 가지 크기를 나란히 비교합니다."},e.createElement(u,{gap:a["2xlarge"],align:"flex-end"},e.createElement(t,{gap:a.small},e.createElement(i,null,`XS — ${l.size.xsmall.height}px`),e.createElement(n,{label:"텍스트",size:"xsmall"})),e.createElement(t,{gap:a.small},e.createElement(i,null,`S — ${l.size.small.height}px`),e.createElement(n,{label:"텍스트",size:"small"})),e.createElement(t,{gap:a.small},e.createElement(i,null,`M — ${l.size.medium.height}px`),e.createElement(n,{label:"텍스트",size:"medium"})),e.createElement(t,{gap:a.small},e.createElement(i,null,`L — ${l.size.large.height}px`),e.createElement(n,{label:"텍스트",size:"large"}))))},v={name:"아이콘 조합",render:()=>e.createElement(m,{style:{gap:a["3xlarge"]}},e.createElement(g,{title:"아이콘 조합",description:"leadingIcon, trailingIcon 또는 양쪽 모두 아이콘을 배치할 수 있습니다."},e.createElement(m,{style:{gap:a.xlarge}},e.createElement(u,{gap:a["2xlarge"],align:"flex-start"},e.createElement(t,{gap:a.small},e.createElement(i,null,"Leading 아이콘"),e.createElement(n,{label:"선택됨",variant:"solid",active:!0,leadingIcon:e.createElement(s,{name:"null",size:l.size.medium.iconSize})})),e.createElement(t,{gap:a.small},e.createElement(i,null,"Trailing 아이콘"),e.createElement(n,{label:"삭제",variant:"outlined",trailingIcon:e.createElement(s,{name:"null",size:l.size.medium.iconSize})})),e.createElement(t,{gap:a.small},e.createElement(i,null,"양쪽 아이콘"),e.createElement(n,{label:"필터",variant:"outlined",active:!0,leadingIcon:e.createElement(s,{name:"null",size:l.size.medium.iconSize}),trailingIcon:e.createElement(s,{name:"null",size:l.size.medium.iconSize})}))),e.createElement(u,{gap:a.large,align:"flex-end"},e.createElement(t,{gap:a.small},e.createElement(i,null,"XS + 아이콘"),e.createElement(n,{label:"태그",size:"xsmall",leadingIcon:e.createElement(s,{name:"null",size:l.size.xsmall.iconSize})})),e.createElement(t,{gap:a.small},e.createElement(i,null,"S + 아이콘"),e.createElement(n,{label:"태그",size:"small",leadingIcon:e.createElement(s,{name:"null",size:l.size.small.iconSize})})),e.createElement(t,{gap:a.small},e.createElement(i,null,"M + 아이콘"),e.createElement(n,{label:"태그",size:"medium",leadingIcon:e.createElement(s,{name:"null",size:l.size.medium.iconSize})})),e.createElement(t,{gap:a.small},e.createElement(i,null,"L + 아이콘"),e.createElement(n,{label:"태그",size:"large",leadingIcon:e.createElement(s,{name:"null",size:l.size.large.iconSize})}))))))},x={name:"디자인 스펙",render:()=>e.createElement(m,{style:{gap:a["3xlarge"]}},e.createElement(g,{title:"디자인 스펙",description:"디자이너와 개발자를 위한 칩 토큰 상세 스펙입니다."},e.createElement(c,{title:"XSmall (24px)",rows:[{label:"높이",value:`${l.size.xsmall.height}px`,token:"chipToken.size.xsmall.height"},{label:"좌우 패딩",value:`${l.size.xsmall.paddingHorizontal}px`,token:"chipToken.size.xsmall.paddingHorizontal"},{label:"폰트 크기",value:`${l.size.xsmall.fontSize}px`,token:"fontSize.xsmall"},{label:"모서리 반경",value:`${l.size.xsmall.radius}px`,token:"radius.xsmall"}]}),e.createElement(c,{title:"Small (28px)",rows:[{label:"높이",value:`${l.size.small.height}px`,token:"chipToken.size.small.height"},{label:"좌우 패딩",value:`${l.size.small.paddingHorizontal}px`,token:"chipToken.size.small.paddingHorizontal"},{label:"폰트 크기",value:`${l.size.small.fontSize}px`,token:"fontSize.xsmall"},{label:"모서리 반경",value:`${l.size.small.radius}px`,token:"radius.small"}]}),e.createElement(c,{title:"Medium (32px)",rows:[{label:"높이",value:`${l.size.medium.height}px`,token:"chipToken.size.medium.height"},{label:"좌우 패딩",value:`${l.size.medium.paddingHorizontal}px`,token:"chipToken.size.medium.paddingHorizontal"},{label:"폰트 크기",value:`${l.size.medium.fontSize}px`,token:"fontSize.small"},{label:"모서리 반경",value:`${l.size.medium.radius}px`,token:"radius.small"}]}),e.createElement(c,{title:"Large (38px)",rows:[{label:"높이",value:`${l.size.large.height}px`,token:"chipToken.size.large.height"},{label:"좌우 패딩",value:`${l.size.large.paddingHorizontal}px`,token:"chipToken.size.large.paddingHorizontal"},{label:"폰트 크기",value:`${l.size.large.fontSize}px`,token:"fontSize.medium"},{label:"모서리 반경",value:`${l.size.large.radius}px`,token:"radius.medium"}]}),e.createElement(W,null),e.createElement(c,{title:"Solid 컬러 상태",rows:[{label:"Inactive 배경",value:o[97],token:"coolNeutral[97]"},{label:"Inactive 텍스트",value:o[40],token:"coolNeutral[40]"},{label:"Active 배경",value:o[10],token:"coolNeutral[10]"},{label:"Active 텍스트",value:"#FFFFFF",token:"coolNeutral[100]"},{label:"Disabled 배경",value:o[97],token:"coolNeutral[97]"},{label:"Disabled 텍스트",value:o[80],token:"coolNeutral[80]"}]}),e.createElement(c,{title:"Outlined 컬러 상태",rows:[{label:"Inactive 배경",value:"transparent",token:"— (transparent)"},{label:"Inactive 텍스트",value:o[40],token:"coolNeutral[40]"},{label:"Inactive 테두리",value:o[90],token:"coolNeutral[90]"},{label:"Active 텍스트",value:L[45],token:"mint[45]"},{label:"Active 테두리",value:L[45],token:"mint[45]"},{label:"Disabled 텍스트",value:o[80],token:"coolNeutral[80]"},{label:"Disabled 테두리",value:o[96],token:"coolNeutral[96]"}]})))},k={name:"사용 가이드",render:()=>e.createElement(m,{style:{gap:a["3xlarge"]}},e.createElement(g,{title:"사용 가이드",description:"개발자를 위한 Chip 컴포넌트 사용 예시입니다."},e.createElement(C,{title:"Import",code:`import { Chip } from '@design-system/components/Chip';
import { Icon } from '@design-system/components/Icon';`}),e.createElement(C,{title:"기본 사용",code:'<Chip label="카테고리" onPress={handleSelect} />'}),e.createElement(C,{title:"모든 Props 예시",code:`<Chip
  label="필터"
  variant="outlined"
  size="medium"
  active={isSelected}
  disabled={false}
  leadingIcon={<Icon name="null" size={16} />}
  trailingIcon={<Icon name="null" size={16} />}
  onPress={handleToggle}
/>`})))};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: '텍스트',
    variant: 'solid',
    size: 'medium',
    active: false,
    disabled: false
  }
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '모든 변형',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="칩 변형 전체 보기" description="variant(solid/outlined)와 상태(inactive/active/disabled)의 모든 조합을 확인할 수 있습니다.">
        {/* Solid Row */}
        <View style={{
        gap: spacing.xlarge
      }}>
          <Row gap={spacing['2xlarge']} align="flex-start">
            <Col gap={spacing.small}>
              <StateLabel>Solid — 비활성</StateLabel>
              <Chip label="텍스트" variant="solid" />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>Solid — 활성</StateLabel>
              <Chip label="텍스트" variant="solid" active />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>Solid — 비활성화</StateLabel>
              <Chip label="텍스트" variant="solid" disabled />
            </Col>
          </Row>

          {/* Outlined Row */}
          <Row gap={spacing['2xlarge']} align="flex-start">
            <Col gap={spacing.small}>
              <StateLabel>Outlined — 비활성</StateLabel>
              <Chip label="텍스트" variant="outlined" />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>Outlined — 활성</StateLabel>
              <Chip label="텍스트" variant="outlined" active />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>Outlined — 비활성화</StateLabel>
              <Chip label="텍스트" variant="outlined" disabled />
            </Col>
          </Row>
        </View>
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '크기 비교',
  render: () => <Section title="크기 비교" description="XSmall, Small, Medium, Large 네 가지 크기를 나란히 비교합니다.">
      <Row gap={spacing['2xlarge']} align="flex-end">
        <Col gap={spacing.small}>
          <StateLabel>{\`XS — \${chipToken.size.xsmall.height}px\`}</StateLabel>
          <Chip label="텍스트" size="xsmall" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{\`S — \${chipToken.size.small.height}px\`}</StateLabel>
          <Chip label="텍스트" size="small" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{\`M — \${chipToken.size.medium.height}px\`}</StateLabel>
          <Chip label="텍스트" size="medium" />
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>{\`L — \${chipToken.size.large.height}px\`}</StateLabel>
          <Chip label="텍스트" size="large" />
        </Col>
      </Row>
    </Section>
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '아이콘 조합',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="아이콘 조합" description="leadingIcon, trailingIcon 또는 양쪽 모두 아이콘을 배치할 수 있습니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Row gap={spacing['2xlarge']} align="flex-start">
            <Col gap={spacing.small}>
              <StateLabel>Leading 아이콘</StateLabel>
              <Chip label="선택됨" variant="solid" active leadingIcon={<Icon name="null" size={chipToken.size.medium.iconSize} />} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>Trailing 아이콘</StateLabel>
              <Chip label="삭제" variant="outlined" trailingIcon={<Icon name="null" size={chipToken.size.medium.iconSize} />} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>양쪽 아이콘</StateLabel>
              <Chip label="필터" variant="outlined" active leadingIcon={<Icon name="null" size={chipToken.size.medium.iconSize} />} trailingIcon={<Icon name="null" size={chipToken.size.medium.iconSize} />} />
            </Col>
          </Row>

          {/* Icon chips in different sizes */}
          <Row gap={spacing.large} align="flex-end">
            <Col gap={spacing.small}>
              <StateLabel>XS + 아이콘</StateLabel>
              <Chip label="태그" size="xsmall" leadingIcon={<Icon name="null" size={chipToken.size.xsmall.iconSize} />} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>S + 아이콘</StateLabel>
              <Chip label="태그" size="small" leadingIcon={<Icon name="null" size={chipToken.size.small.iconSize} />} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>M + 아이콘</StateLabel>
              <Chip label="태그" size="medium" leadingIcon={<Icon name="null" size={chipToken.size.medium.iconSize} />} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>L + 아이콘</StateLabel>
              <Chip label="태그" size="large" leadingIcon={<Icon name="null" size={chipToken.size.large.iconSize} />} />
            </Col>
          </Row>
        </View>
      </Section>
    </View>
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="디자이너와 개발자를 위한 칩 토큰 상세 스펙입니다.">
        {/* Size specs */}
        <SpecTable title="XSmall (24px)" rows={[{
        label: '높이',
        value: \`\${chipToken.size.xsmall.height}px\`,
        token: 'chipToken.size.xsmall.height'
      }, {
        label: '좌우 패딩',
        value: \`\${chipToken.size.xsmall.paddingHorizontal}px\`,
        token: 'chipToken.size.xsmall.paddingHorizontal'
      }, {
        label: '폰트 크기',
        value: \`\${chipToken.size.xsmall.fontSize}px\`,
        token: 'fontSize.xsmall'
      }, {
        label: '모서리 반경',
        value: \`\${chipToken.size.xsmall.radius}px\`,
        token: 'radius.xsmall'
      }]} />

        <SpecTable title="Small (28px)" rows={[{
        label: '높이',
        value: \`\${chipToken.size.small.height}px\`,
        token: 'chipToken.size.small.height'
      }, {
        label: '좌우 패딩',
        value: \`\${chipToken.size.small.paddingHorizontal}px\`,
        token: 'chipToken.size.small.paddingHorizontal'
      }, {
        label: '폰트 크기',
        value: \`\${chipToken.size.small.fontSize}px\`,
        token: 'fontSize.xsmall'
      }, {
        label: '모서리 반경',
        value: \`\${chipToken.size.small.radius}px\`,
        token: 'radius.small'
      }]} />

        <SpecTable title="Medium (32px)" rows={[{
        label: '높이',
        value: \`\${chipToken.size.medium.height}px\`,
        token: 'chipToken.size.medium.height'
      }, {
        label: '좌우 패딩',
        value: \`\${chipToken.size.medium.paddingHorizontal}px\`,
        token: 'chipToken.size.medium.paddingHorizontal'
      }, {
        label: '폰트 크기',
        value: \`\${chipToken.size.medium.fontSize}px\`,
        token: 'fontSize.small'
      }, {
        label: '모서리 반경',
        value: \`\${chipToken.size.medium.radius}px\`,
        token: 'radius.small'
      }]} />

        <SpecTable title="Large (38px)" rows={[{
        label: '높이',
        value: \`\${chipToken.size.large.height}px\`,
        token: 'chipToken.size.large.height'
      }, {
        label: '좌우 패딩',
        value: \`\${chipToken.size.large.paddingHorizontal}px\`,
        token: 'chipToken.size.large.paddingHorizontal'
      }, {
        label: '폰트 크기',
        value: \`\${chipToken.size.large.fontSize}px\`,
        token: 'fontSize.medium'
      }, {
        label: '모서리 반경',
        value: \`\${chipToken.size.large.radius}px\`,
        token: 'radius.medium'
      }]} />

        <Divider />

        {/* Color state specs — Solid */}
        <SpecTable title="Solid 컬러 상태" rows={[{
        label: 'Inactive 배경',
        value: coolNeutral[97],
        token: 'coolNeutral[97]'
      }, {
        label: 'Inactive 텍스트',
        value: coolNeutral[40],
        token: 'coolNeutral[40]'
      }, {
        label: 'Active 배경',
        value: coolNeutral[10],
        token: 'coolNeutral[10]'
      }, {
        label: 'Active 텍스트',
        value: '#FFFFFF',
        token: 'coolNeutral[100]'
      }, {
        label: 'Disabled 배경',
        value: coolNeutral[97],
        token: 'coolNeutral[97]'
      }, {
        label: 'Disabled 텍스트',
        value: coolNeutral[80],
        token: 'coolNeutral[80]'
      }]} />

        {/* Color state specs — Outlined */}
        <SpecTable title="Outlined 컬러 상태" rows={[{
        label: 'Inactive 배경',
        value: 'transparent',
        token: '— (transparent)'
      }, {
        label: 'Inactive 텍스트',
        value: coolNeutral[40],
        token: 'coolNeutral[40]'
      }, {
        label: 'Inactive 테두리',
        value: coolNeutral[90],
        token: 'coolNeutral[90]'
      }, {
        label: 'Active 텍스트',
        value: mint[45],
        token: 'mint[45]'
      }, {
        label: 'Active 테두리',
        value: mint[45],
        token: 'mint[45]'
      }, {
        label: 'Disabled 텍스트',
        value: coolNeutral[80],
        token: 'coolNeutral[80]'
      }, {
        label: 'Disabled 테두리',
        value: coolNeutral[96],
        token: 'coolNeutral[96]'
      }]} />
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Chip 컴포넌트 사용 예시입니다.">
        <CodeBlock title="Import" code={\`import { Chip } from '@design-system/components/Chip';
import { Icon } from '@design-system/components/Icon';\`} />

        <CodeBlock title="기본 사용" code={\`<Chip label="카테고리" onPress={handleSelect} />\`} />

        <CodeBlock title="모든 Props 예시" code={\`<Chip
  label="필터"
  variant="outlined"
  size="medium"
  active={isSelected}
  disabled={false}
  leadingIcon={<Icon name="null" size={16} />}
  trailingIcon={<Icon name="null" size={16} />}
  onPress={handleToggle}
/>\`} />
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};const Y=["Playground","AllVariants","Sizes","WithIcons","DesignSpec","Usage"];export{h as AllVariants,x as DesignSpec,z as Playground,S as Sizes,k as Usage,v as WithIcons,Y as __namedExportsOrder,Q as default};
