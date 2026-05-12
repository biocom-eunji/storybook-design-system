import{R as e,V as l,r as I}from"./iframe-rdsxNJ7l.js";import{p as g,M as F,T as B,f as K,j as N,s as r,c as i,r as j,a as O}from"./theme-KAxj7l-q.js";import{I as _}from"./Icon-DGfD0Qtj.js";import{I as X}from"./index-BF5bKU7j.js";import{S as h,a as k,R as y,D,b as P,C as x}from"./storyHelpers-D5HpvNsw.js";import{T as M}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";import"./index-BFVMpTcU.js";function p({label:n,onPress:m,variant:s="solid",size:o="medium",active:a=!1,disabled:t=!1,leadingIconName:c,trailingIconName:d,thumbnail:b}){const u=g.size[o],H=t?"disabled":a?"active":"inactive",v=g.variant[s][H],L=u.height-8,$=q=>{const S={alignSelf:"flex-start",height:u.height,paddingHorizontal:u.paddingHorizontal,borderRadius:u.radius,alignItems:"center",justifyContent:"center",flexDirection:"row",gap:r.xsmall,backgroundColor:v.background};return"border"in v&&(S.borderWidth=1,S.borderColor=v.border),!t&&q.pressed&&(S.opacity=N.pressOpacity),b&&(S.paddingLeft=r.xsmall),[S]},W={fontSize:u.fontSize,fontWeight:K.medium,color:v.content},A=v.content;return e.createElement(F,{onPress:m,disabled:t,accessibilityRole:"button",accessibilityState:{selected:a,disabled:t},style:$},b&&e.createElement(X,{source:b,style:{width:L,height:L,borderRadius:L/2}}),c&&e.createElement(_,{name:c,size:u.iconSize,color:A}),e.createElement(B,{style:W},n),d&&e.createElement(_,{name:d,size:u.iconSize,color:A}))}p.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outlined'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIconName:{required:!1,tsType:{name:"string"},description:"좌측 아이콘 이름 (iconRegistry 경유)"},trailingIconName:{required:!1,tsType:{name:"string"},description:"우측 아이콘 이름 (iconRegistry 경유)"},thumbnail:{required:!1,tsType:{name:"ImageSourcePropType"},description:""}}};const Z={solid:{inactive:{background:"color/background/tertiary",content:"color/text/secondary"},active:{background:"color/background/inverse",content:"color/text/onColor"},disabled:{background:"color/background/tertiary",content:"color/text/tertiary"}},outlined:{inactive:{background:"transparent",content:"color/text/secondary",border:"color/border/active"},active:{background:"transparent",content:"color/text/brand",border:"color/border/focus"},disabled:{background:"transparent",content:"color/text/tertiary",border:"color/border/default"}}},C={xsmall:{height:"component/chip/size/xsmall/height",paddingH:"component/chip/size/xsmall/paddingH",typography:"Caption",radius:"borderRadius/xsmall"},small:{height:"component/chip/size/small/height",paddingH:"component/chip/size/small/paddingH",typography:"Caption",radius:"borderRadius/small"},medium:{height:"component/chip/size/medium/height",paddingH:"component/chip/size/medium/paddingH",typography:"Label 2",radius:"borderRadius/small"},large:{height:"component/chip/size/large/height",paddingH:"component/chip/size/large/paddingH",typography:"Body 2",radius:"borderRadius/medium"}},oe={title:"Input/Chip",component:p,argTypes:{variant:{control:"select",options:["solid","outlined"],description:"칩 스타일 변형 (Figma: Variant)"},size:{control:"select",options:["xsmall","small","medium","large"],description:"칩 크기 (Figma: Size)"},active:{control:"boolean",description:"선택 상태 (Figma: Active)"},disabled:{control:"boolean",description:"비활성화"},label:{control:"text",description:"칩 텍스트"}},tags:["autodocs"]},z={render:()=>{const[n,m]=I.useState(null),s=["식단","수면","운동","영양제"];return e.createElement(y,{gap:r.small,wrap:!0},s.map(o=>e.createElement(p,{key:o,label:o,variant:"solid",size:"medium",active:n===o,onPress:()=>m(n===o?null:o)})))},parameters:{docs:{description:{story:"**적용 토큰**: `color/background/tertiary`, `color/text/secondary`, `Label 2`, `borderRadius/small`. 클릭하여 활성/비활성을 토글합니다."}}}},f={name:"모든 변형",render:()=>e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(h,{title:"모든 변형",description:"variant(solid/outlined) × state(inactive/active/disabled)의 모든 조합을 확인합니다."},["solid","outlined"].map(n=>e.createElement(l,{key:n,style:{marginBottom:r.xlarge}},e.createElement(k,null,n),e.createElement(y,{gap:r.medium,wrap:!0},e.createElement(p,{label:"비선택",variant:n,size:"medium"}),e.createElement(p,{label:"선택됨",variant:n,size:"medium",active:!0}),e.createElement(p,{label:"비활성",variant:n,size:"medium",disabled:!0})))))),parameters:{docs:{description:{story:["**Solid Inactive**: `color/background/tertiary` + `color/text/quaternary`","**Solid Active**: `color/background/inverse` + `color/text/onColor`","**Outlined Active**: `transparent` + `color/text/brand` + `color/border/focus`","**Disabled 공통**: `color/text/tertiary`"].join(`

`)}}}},E={name:"크기 비교",render:()=>e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(h,{title:"크기 비교",description:"XSmall(24px), Small(28px), Medium(32px), Large(38px) 네 가지 크기를 비교합니다."},e.createElement(y,{gap:r.medium,align:"flex-end",wrap:!0},["xsmall","small","medium","large"].map(n=>e.createElement(P,{key:n,gap:r.small},e.createElement(k,null,`${n} — ${g.size[n].height}px`),e.createElement(p,{label:"카테고리",variant:"solid",size:n,active:!0})))))),parameters:{docs:{description:{story:["**XSmall**: height 24 · `Caption` · `borderRadius/xsmall`","**Small**: height 28 · `Caption` · `borderRadius/small`","**Medium**: height 32 · `Label 2` · `borderRadius/small`","**Large**: height 38 · `Body 2` · `borderRadius/medium`"].join(`

`)}}}},w={name:"인터랙티브 데모",render:()=>{const[n,m]=I.useState(["식단"]),s=["식단","수면","운동","영양제","수분"],o=a=>{m(t=>t.includes(a)?t.filter(c=>c!==a):[...t,a])};return e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(h,{title:"인터랙티브 데모",description:"Filter Chip 패턴입니다. 복수 선택 가능합니다."},e.createElement(l,{style:{gap:r.xlarge}},e.createElement(P,{gap:r.small},e.createElement(k,null,"Solid"),e.createElement(y,{gap:r.small,wrap:!0},s.map(a=>e.createElement(p,{key:a,label:a,variant:"solid",size:"medium",active:n.includes(a),onPress:()=>o(a)})))),e.createElement(D,null),e.createElement(P,{gap:r.small},e.createElement(k,null,"Outlined"),e.createElement(y,{gap:r.small,wrap:!0},s.map(a=>e.createElement(p,{key:a,label:a,variant:"outlined",size:"medium",active:n.includes(a),onPress:()=>o(a)})))))))}},T={name:"디자인 스펙",render:()=>{const n=["solid","outlined"],m=["inactive","active","disabled"],s=["xsmall","small","medium","large"],o={"color/background/tertiary":i.backgroundTertiary,"color/background/inverse":i.backgroundInverse,"color/background/disabled":i.backgroundDisabled,"color/text/onColor":i.textOnColor,"color/text/brand":i.textBrand,"color/border/active":i.borderActive,"color/border/focus":i.borderFocus,"color/border/default":i.borderDefault,"color/text/secondary":i.textSecondary,"color/text/tertiary":i.textTertiary},a=t=>o[t]??t;return e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(h,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 Chip 전체 조합 스펙입니다.",badge:"디자인"},n.map(t=>m.map(c=>{const d=Z[t][c],b=[{property:"배경색",token:d.background,value:a(d.background),type:"color"},{property:"텍스트",token:d.content,value:a(d.content),type:"color"}];return"border"in d&&b.push({property:"테두리",token:d.border,value:a(d.border),type:"color"}),e.createElement(l,{key:`${t}-${c}`},e.createElement(M,{title:`${t} / ${c}`,rows:b}),e.createElement(D,null))})),s.map(t=>e.createElement(M,{key:t,title:`크기: ${t}`,rows:[{property:"높이",token:C[t].height,value:g.size[t].height,type:"size"},{property:"좌우 패딩",token:C[t].paddingH,value:g.size[t].paddingHorizontal,type:"size"},{property:"코너 라디우스",token:C[t].radius,value:g.size[t].radius,type:"size"},{property:"아이콘 크기",token:"—",value:g.size[t].iconSize,type:"size"},{property:"타이포",token:C[t].typography,value:C[t].typography},{property:"아이콘-텍스트 간격",token:"spacing/xsmall",value:r.xsmall,type:"size"}]}))))}},R={name:"실전 예시",render:()=>{const[n,m]=I.useState(["식단","운동"]),s=["전체","식단","수면","운동","영양제","수분"],o=a=>{m(t=>t.includes(a)?t.filter(c=>c!==a):[...t,a])};return e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(h,{title:"실전 예시",description:"실제 화면에서 Chip이 배치되는 맥락을 확인합니다."},e.createElement(l,{style:{gap:r["2xlarge"],maxWidth:375}},e.createElement(P,{gap:r.small},e.createElement(k,null,"카테고리 필터"),e.createElement(l,{style:{borderWidth:1,borderColor:i.borderDefault,borderRadius:j.large,padding:r.xlarge,backgroundColor:i.backgroundPrimary}},e.createElement(B,{style:{fontSize:O.headline.fontSize,fontWeight:O.headline.fontWeight,color:i.textPrimary,marginBottom:r.medium}},"건강 기록 필터"),e.createElement(y,{gap:r.small,wrap:!0},s.map(a=>e.createElement(p,{key:a,label:a,variant:"solid",size:"medium",active:n.includes(a),onPress:()=>o(a)}))))))))}},V={name:"사용 가이드",render:()=>e.createElement(l,{style:{gap:r["3xlarge"]}},e.createElement(h,{title:"사용 가이드",description:"개발자를 위한 Chip 컴포넌트 사용 예시입니다.",badge:"개발"},e.createElement(x,{title:"Import",code:"import { Chip } from '@design-system/components/Chip';"}),e.createElement(x,{title:"기본 사용",code:'<Chip label="카테고리" onPress={handlePress} />'}),e.createElement(x,{title:"Variant + Active 조합",code:`<Chip label="식단" variant="solid" active />
<Chip label="수면" variant="outlined" active />
<Chip label="운동" variant="solid" disabled />`}),e.createElement(x,{title:"Filter Chip 패턴 (복수 선택)",code:`const [selected, setSelected] = useState<string[]>([]);

const toggle = (cat: string) => {
  setSelected(prev =>
    prev.includes(cat)
      ? prev.filter(c => c !== cat)
      : [...prev, cat]
  );
};

{categories.map(cat => (
  <Chip
    key={cat}
    label={cat}
    variant="solid"
    size="medium"
    active={selected.includes(cat)}
    onPress={() => toggle(cat)}
  />
))}`}),e.createElement(x,{title:"크기 지정",code:`<Chip label="XS" size="xsmall" />
<Chip label="S" size="small" />
<Chip label="M" size="medium" />
<Chip label="L" size="large" />`})))};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    const categories = ['식단', '수면', '운동', '영양제'];
    return <Row gap={spacing.small} wrap>
        {categories.map(cat => <Chip key={cat} label={cat} variant="solid" size="medium" active={selected === cat} onPress={() => setSelected(selected === cat ? null : cat)} />)}
      </Row>;
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: \`color/background/tertiary\`, \`color/text/secondary\`, \`Label 2\`, \`borderRadius/small\`. 클릭하여 활성/비활성을 토글합니다.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '모든 변형',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="모든 변형" description="variant(solid/outlined) × state(inactive/active/disabled)의 모든 조합을 확인합니다.">
        {(['solid', 'outlined'] as const).map(variant => <View key={variant} style={{
        marginBottom: spacing.xlarge
      }}>
            <StateLabel>{variant}</StateLabel>
            <Row gap={spacing.medium} wrap>
              <Chip label="비선택" variant={variant} size="medium" />
              <Chip label="선택됨" variant={variant} size="medium" active />
              <Chip label="비활성" variant={variant} size="medium" disabled />
            </Row>
          </View>)}
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: ['**Solid Inactive**: \`color/background/tertiary\` + \`color/text/quaternary\`', '**Solid Active**: \`color/background/inverse\` + \`color/text/onColor\`', '**Outlined Active**: \`transparent\` + \`color/text/brand\` + \`color/border/focus\`', '**Disabled 공통**: \`color/text/tertiary\`'].join('\\n\\n')
      }
    }
  }
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '크기 비교',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="크기 비교" description="XSmall(24px), Small(28px), Medium(32px), Large(38px) 네 가지 크기를 비교합니다.">
        <Row gap={spacing.medium} align="flex-end" wrap>
          {(['xsmall', 'small', 'medium', 'large'] as const).map(size => <Col key={size} gap={spacing.small}>
              <StateLabel>{\`\${size} — \${chipToken.size[size].height}px\`}</StateLabel>
              <Chip label="카테고리" variant="solid" size={size} active />
            </Col>)}
        </Row>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: ['**XSmall**: height 24 · \`Caption\` · \`borderRadius/xsmall\`', '**Small**: height 28 · \`Caption\` · \`borderRadius/small\`', '**Medium**: height 32 · \`Label 2\` · \`borderRadius/small\`', '**Large**: height 38 · \`Body 2\` · \`borderRadius/medium\`'].join('\\n\\n')
      }
    }
  }
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['식단']);
    const categories = ['식단', '수면', '운동', '영양제', '수분'];
    const toggle = (cat: string) => {
      setSelected(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
    };
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="Filter Chip 패턴입니다. 복수 선택 가능합니다.">
          <View style={{
          gap: spacing.xlarge
        }}>
            <Col gap={spacing.small}>
              <StateLabel>Solid</StateLabel>
              <Row gap={spacing.small} wrap>
                {categories.map(cat => <Chip key={cat} label={cat} variant="solid" size="medium" active={selected.includes(cat)} onPress={() => toggle(cat)} />)}
              </Row>
            </Col>

            <Divider />

            <Col gap={spacing.small}>
              <StateLabel>Outlined</StateLabel>
              <Row gap={spacing.small} wrap>
                {categories.map(cat => <Chip key={cat} label={cat} variant="outlined" size="medium" active={selected.includes(cat)} onPress={() => toggle(cat)} />)}
              </Row>
            </Col>
          </View>
        </Section>
      </View>;
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => {
    const variants = ['solid', 'outlined'] as const;
    const states = ['inactive', 'active', 'disabled'] as const;
    const sizes = ['xsmall', 'small', 'medium', 'large'] as const;
    const resolve: Record<string, string> = {
      'color/background/tertiary': semanticColor.backgroundTertiary,
      'color/background/inverse': semanticColor.backgroundInverse,
      'color/background/disabled': semanticColor.backgroundDisabled,
      'color/text/onColor': semanticColor.textOnColor,
      'color/text/brand': semanticColor.textBrand,
      'color/border/active': semanticColor.borderActive,
      'color/border/focus': semanticColor.borderFocus,
      'color/border/default': semanticColor.borderDefault,
      'color/text/secondary': semanticColor.textSecondary,
      'color/text/tertiary': semanticColor.textTertiary
    };
    const r = (token: string) => resolve[token] ?? token;
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 Chip 전체 조합 스펙입니다." badge="디자인">
          {variants.map(variant => states.map(state => {
          const ct = COLOR_TOKEN_MAP[variant][state];
          const rows: Array<{
            property: string;
            token: string;
            value: string;
            type: 'color';
          }> = [{
            property: '배경색',
            token: ct.background,
            value: r(ct.background),
            type: 'color'
          }, {
            property: '텍스트',
            token: ct.content,
            value: r(ct.content),
            type: 'color'
          }];
          if ('border' in ct) {
            rows.push({
              property: '테두리',
              token: ct.border,
              value: r(ct.border),
              type: 'color'
            });
          }
          return <View key={\`\${variant}-\${state}\`}>
                  <TokenSpecTable title={\`\${variant} / \${state}\`} rows={rows} />
                  <Divider />
                </View>;
        }))}

          {sizes.map(size => <TokenSpecTable key={size} title={\`크기: \${size}\`} rows={[{
          property: '높이',
          token: SIZE_TOKEN_MAP[size].height,
          value: chipToken.size[size].height,
          type: 'size'
        }, {
          property: '좌우 패딩',
          token: SIZE_TOKEN_MAP[size].paddingH,
          value: chipToken.size[size].paddingHorizontal,
          type: 'size'
        }, {
          property: '코너 라디우스',
          token: SIZE_TOKEN_MAP[size].radius,
          value: chipToken.size[size].radius,
          type: 'size'
        }, {
          property: '아이콘 크기',
          token: '—',
          value: chipToken.size[size].iconSize,
          type: 'size'
        }, {
          property: '타이포',
          token: SIZE_TOKEN_MAP[size].typography,
          value: SIZE_TOKEN_MAP[size].typography
        }, {
          property: '아이콘-텍스트 간격',
          token: 'spacing/xsmall',
          value: spacing.xsmall,
          type: 'size'
        }]} />)}
        </Section>
      </View>;
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['식단', '운동']);
    const categories = ['전체', '식단', '수면', '운동', '영양제', '수분'];
    const toggle = (cat: string) => {
      setSelected(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
    };
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="실제 화면에서 Chip이 배치되는 맥락을 확인합니다.">
          <View style={{
          gap: spacing['2xlarge'],
          maxWidth: 375
        }}>
            <Col gap={spacing.small}>
              <StateLabel>카테고리 필터</StateLabel>
              <View style={{
              borderWidth: 1,
              borderColor: semanticColor.borderDefault,
              borderRadius: radius.large,
              padding: spacing.xlarge,
              backgroundColor: semanticColor.backgroundPrimary
            }}>
                <Text style={{
                fontSize: textStyle.headline.fontSize,
                fontWeight: textStyle.headline.fontWeight,
                color: semanticColor.textPrimary,
                marginBottom: spacing.medium
              }}>
                  건강 기록 필터
                </Text>
                <Row gap={spacing.small} wrap>
                  {categories.map(cat => <Chip key={cat} label={cat} variant="solid" size="medium" active={selected.includes(cat)} onPress={() => toggle(cat)} />)}
                </Row>
              </View>
            </Col>
          </View>
        </Section>
      </View>;
  }
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Chip 컴포넌트 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { Chip } from '@design-system/components/Chip';\`} />

        <CodeBlock title="기본 사용" code={\`<Chip label="카테고리" onPress={handlePress} />\`} />

        <CodeBlock title="Variant + Active 조합" code={\`<Chip label="식단" variant="solid" active />
<Chip label="수면" variant="outlined" active />
<Chip label="운동" variant="solid" disabled />\`} />

        <CodeBlock title="Filter Chip 패턴 (복수 선택)" code={\`const [selected, setSelected] = useState<string[]>([]);

const toggle = (cat: string) => {
  setSelected(prev =>
    prev.includes(cat)
      ? prev.filter(c => c !== cat)
      : [...prev, cat]
  );
};

{categories.map(cat => (
  <Chip
    key={cat}
    label={cat}
    variant="solid"
    size="medium"
    active={selected.includes(cat)}
    onPress={() => toggle(cat)}
  />
))}\`} />

        <CodeBlock title="크기 지정" code={\`<Chip label="XS" size="xsmall" />
<Chip label="S" size="small" />
<Chip label="M" size="medium" />
<Chip label="L" size="large" />\`} />
      </Section>
    </View>
}`,...V.parameters?.docs?.source}}};const ie=["Playground","AllVariants","Sizes","Interactive","DesignSpec","InContext","Usage"];export{f as AllVariants,T as DesignSpec,R as InContext,w as Interactive,z as Playground,E as Sizes,V as Usage,ie as __namedExportsOrder,oe as default};
