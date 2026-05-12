import{R as e,V as i,s as H}from"./iframe-rdsxNJ7l.js";import{S as C,P as R}from"./index-CkrO8KnR.js";import{k as r,M as q,T as D,s as n,t as I}from"./theme-KAxj7l-q.js";import{S as m,D as _,C as y,a as p,R as $,b,c as A}from"./storyHelpers-D5HpvNsw.js";import{T as V}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";const G=44;function l({label:t,onPress:a,variant:u="default",size:o="medium",disabled:c=!1,underlined:L=!0,leadingIcon:F,trailingIcon:W,accessibilityLabel:M}){const s=r.size[o],E=r.color[u],w=d=>c?E.disabled:d?E.pressed:E.default,N=({pressed:d})=>{const g=w(d);return{...j.base,height:s.height,paddingHorizontal:s.paddingHorizontal,borderRadius:s.radius,backgroundColor:g.container}},P=({pressed:d})=>{const g=w(d);return{fontSize:s.textStyle.fontSize,lineHeight:s.textStyle.lineHeight,letterSpacing:s.textStyle.letterSpacing,fontWeight:s.textStyle.fontWeight,color:g.label}},x=Math.max(0,(G-s.height)/2);return e.createElement(q,{onPress:a,disabled:c,accessibilityRole:"button",accessibilityState:{disabled:c},accessibilityLabel:M??t,hitSlop:{top:x,bottom:x,left:x,right:x},style:N},d=>{const g=w(d.pressed);return e.createElement(e.Fragment,null,e.createElement(i,{style:{flexDirection:"row",alignItems:"center",gap:s.gap}},F,e.createElement(D,{style:P(d)},t),W),L&&e.createElement(i,{style:{height:s.lineWidth,backgroundColor:g.underline,alignSelf:"stretch"}}))})}const j=H.create({base:{alignItems:"center",justifyContent:"center",flexDirection:"column"}});l.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{label:{required:!0,tsType:{name:"string"},description:"버튼 텍스트 (Figma: label)"},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 콜백"},variant:{required:!1,tsType:{name:"unknown"},description:"Figma named variant — focused/enabled toggle",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"unknown"},description:"버튼 크기 — Figma: large / medium (현재 동일 토큰, 향후 확장 대비 prop 유지)",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 상태 (Figma: disabled state)",defaultValue:{value:"false",computed:!1}},underlined:{required:!1,tsType:{name:"boolean"},description:"밑줄 표시 (Figma 시각 default true)",defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"좌측 아이콘 슬롯 — Figma icon size 16 자동 적용"},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"우측 아이콘 슬롯 — Figma icon size 16 자동 적용"},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"접근성 라벨 (미지정 시 label 사용)"}}};const U=({color:t="#000",size:a=16})=>e.createElement(C,{width:a,height:a,viewBox:"0 0 24 24",fill:"none"},e.createElement(R,{d:"M5 12h14M13 6l6 6-6 6",stroke:t,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),O=({color:t="#000",size:a=16})=>e.createElement(C,{width:a,height:a,viewBox:"0 0 24 24",fill:"none"},e.createElement(R,{d:"M19 12H5M11 6l-6 6 6 6",stroke:t,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),te={title:"Actions/TextButton",component:l,argTypes:{label:{control:"text",description:"Figma: 버튼 텍스트"},variant:{control:"select",options:["default","focused"],description:"Figma named variant — 'default' ← (focused=no, enabled=yes) / 'focused' ← (focused=yes, enabled=no)"},size:{control:"select",options:["large","medium"],description:"Figma: large / medium (현재 동일 토큰)"},disabled:{control:"boolean",description:"Figma 상태: disabled"},underlined:{control:"boolean",description:"밑줄 표시 (기본 true)"}},args:{label:"더보기",variant:"default",size:"medium",disabled:!1,underlined:!0},tags:["autodocs"],parameters:{docs:{description:{component:"TextButton — Figma `text button` 컴포넌트 1:1 매핑. 2 variant × 2 size × 3 state.\n\n**v3.0 Breaking**: `colorScheme` · `loading` 제거 / `size` 키 변경 (small→medium, medium→large) / `underlined` prop 신규."}}}},h=["default","focused"],Z=["large","medium"],f={parameters:{docs:{description:{story:"Controls 패널에서 Figma property를 조작합니다."}}}},S={name:"Variants",render:()=>e.createElement(i,{style:{gap:n["3xlarge"]}},e.createElement(m,{title:"Variants",description:"Figma named variant 2종 — Text-Btn(default) / Text-focused-Btn(focused)."},e.createElement(A,{items:h.map(t=>({label:t,content:e.createElement(l,{label:"더보기",variant:t})}))})))},T={name:"Sizes",render:()=>e.createElement(i,{style:{gap:n["3xlarge"]}},e.createElement(m,{title:"Sizes",description:"Figma는 large/medium 2종 변종이지만 현재 토큰값은 동일 (height 32, label2 14px). 향후 분기 대비로 prop 유지."},h.map(t=>e.createElement(i,{key:t,style:{gap:n.small,marginBottom:n.xlarge}},e.createElement(p,null,t),e.createElement($,{gap:n.medium,align:"center"},Z.map(a=>e.createElement(b,{key:a,gap:n.xsmall},e.createElement(p,null,a),e.createElement(l,{label:"더보기",variant:t,size:a}))))))))},B={name:"States",render:()=>e.createElement(i,{style:{gap:n["3xlarge"]}},e.createElement(m,{title:"States",description:"default / pressed / disabled. pressed는 실제 클릭 시 확인 (RN Pressable 한계)."},h.map(t=>e.createElement(i,{key:t,style:{gap:n.small,marginBottom:n.xlarge}},e.createElement(p,null,t),e.createElement(A,{items:[{label:"default",content:e.createElement(l,{label:"더보기",variant:t})},{label:"pressed (눌러서 확인)",content:e.createElement(l,{label:"더보기",variant:t})},{label:"disabled",content:e.createElement(l,{label:"더보기",variant:t,disabled:!0})}]})))))},v={name:"With Icon · Underline",render:()=>e.createElement(i,{style:{gap:n["3xlarge"]}},e.createElement(m,{title:"아이콘 슬롯 + underlined 옵션",description:"leadingIcon / trailingIcon + underlined boolean prop."},e.createElement($,{gap:n.xlarge,align:"center"},e.createElement(b,{gap:n.xsmall},e.createElement(p,null,"leadingIcon"),e.createElement(l,{label:"이전",variant:"focused",leadingIcon:e.createElement(O,{color:r.color.focused.default.icon})})),e.createElement(b,{gap:n.xsmall},e.createElement(p,null,"trailingIcon"),e.createElement(l,{label:"다음",variant:"focused",trailingIcon:e.createElement(U,{color:r.color.focused.default.icon})})),e.createElement(b,{gap:n.xsmall},e.createElement(p,null,"underlined=false"),e.createElement(l,{label:"밑줄 없음",variant:"default",underlined:!1})),e.createElement(b,{gap:n.xsmall},e.createElement(p,null,"underlined=true (기본)"),e.createElement(l,{label:"밑줄 있음",variant:"default",underlined:!0})))))},k={name:"디자인 스펙",render:()=>e.createElement(i,{style:{gap:n["3xlarge"]}},e.createElement(m,{title:"Size 토큰 (단일 column)",description:"Figma SPEC상 large/medium 모두 동일 토큰.",badge:"디자인"},e.createElement(V,{title:"공통 size 토큰",rows:[{property:"height",token:"textButtonToken.size.{*}.height",value:r.size.medium.height,type:"size"},{property:"padding",token:"textButtonToken.size.{*}.paddingHorizontal",value:r.size.medium.paddingHorizontal,type:"size"},{property:"radius",token:"textButtonToken.size.{*}.radius",value:r.size.medium.radius,type:"size"},{property:"gap",token:"textButtonToken.size.{*}.gap",value:r.size.medium.gap,type:"size"},{property:"icon size",token:"textButtonToken.size.{*}.iconSize",value:r.size.medium.iconSize,type:"size"},{property:"line width",token:"textButtonToken.size.{*}.lineWidth",value:r.size.medium.lineWidth,type:"size"},{property:"label font",token:"textStyleV2.label2",value:`${I.label2.fontSize}px · weight ${I.label2.fontWeight}`}]})),e.createElement(m,{title:"Variant × State 컬러",description:"Figma 명세 1:1.",badge:"디자인"},h.map(t=>{const a=r.color[t],u=[];return["default","pressed","disabled"].forEach(o=>{const c=a[o];u.push({property:`${o} / container`,token:`textButtonToken.color.${t}.${o}.container`,value:c.container,type:"color"}),u.push({property:`${o} / label`,token:`textButtonToken.color.${t}.${o}.label`,value:c.label,type:"color"}),u.push({property:`${o} / underline`,token:`textButtonToken.color.${t}.${o}.underline`,value:c.underline,type:"color"}),u.push({property:`${o} / icon`,token:`textButtonToken.color.${t}.${o}.icon`,value:c.icon,type:"color"})}),e.createElement(i,{key:t},e.createElement(V,{title:t,rows:u}),e.createElement(_,null))})))},z={name:"마이그레이션 가이드 (v3.0)",render:()=>e.createElement(i,{style:{gap:n["3xlarge"]}},e.createElement(m,{title:"v3.0 Breaking Changes",description:"이전 API를 사용하던 코드의 매핑.",badge:"개발"},e.createElement(y,{title:"colorScheme → variant union",code:`// Before (v2.x)
<TextButton colorScheme="primary"   />
<TextButton colorScheme="assistive" />

// After (v3.0)
<TextButton variant="focused" />
<TextButton variant="default" />`}),e.createElement(y,{title:"size 키 변경",code:`// Before (v2.x)
<TextButton size="small"  />   // label2 (14px Medium)
<TextButton size="medium" />   // body2 (15px Regular)

// After (v3.0)
<TextButton size="medium" />   // label2 (14px Medium) — 시각 회귀 발생 (body2 → label2)
<TextButton size="large"  />   // body2  (15px Regular) — 시각 동일 (body2 유지)`}),e.createElement(y,{title:"loading 제거 + underlined 신규",code:`// Before
<TextButton label="저장" loading />

// After — 외부 분기
{isLoading ? <ActivityIndicator /> : <TextButton label="저장" />}

// underlined 신규 (기본 true)
<TextButton label="밑줄 있음" />                // underlined=true
<TextButton label="밑줄 없음" underlined={false} />`}),e.createElement(y,{title:"아이콘 슬롯 신규 (leadingIcon / trailingIcon)",code:`import { Icon } from '@/components/Icon';

<TextButton label="이전" leadingIcon={<Icon name="arrow-left" size={16} />} />
<TextButton label="다음" trailingIcon={<Icon name="arrow-right" size={16} />} />`})))};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Controls 패널에서 Figma property를 조작합니다.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Variants',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Variants" description="Figma named variant 2종 — Text-Btn(default) / Text-focused-Btn(focused).">
        <CompareGrid items={VARIANTS.map(v => ({
        label: v,
        content: <TextButton label="더보기" variant={v} />
      }))} />
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Sizes" description="Figma는 large/medium 2종 변종이지만 현재 토큰값은 동일 (height 32, label2 14px). 향후 분기 대비로 prop 유지.">
        {VARIANTS.map(v => <View key={v} style={{
        gap: spacing.small,
        marginBottom: spacing.xlarge
      }}>
            <StateLabel>{v}</StateLabel>
            <Row gap={spacing.medium} align="center">
              {SIZES.map(s => <Col key={s} gap={spacing.xsmall}>
                  <StateLabel>{s}</StateLabel>
                  <TextButton label="더보기" variant={v} size={s} />
                </Col>)}
            </Row>
          </View>)}
      </Section>
    </View>
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="States" description="default / pressed / disabled. pressed는 실제 클릭 시 확인 (RN Pressable 한계).">
        {VARIANTS.map(v => <View key={v} style={{
        gap: spacing.small,
        marginBottom: spacing.xlarge
      }}>
            <StateLabel>{v}</StateLabel>
            <CompareGrid items={[{
          label: 'default',
          content: <TextButton label="더보기" variant={v} />
        }, {
          label: 'pressed (눌러서 확인)',
          content: <TextButton label="더보기" variant={v} />
        }, {
          label: 'disabled',
          content: <TextButton label="더보기" variant={v} disabled />
        }]} />
          </View>)}
      </Section>
    </View>
}`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Icon · Underline',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="아이콘 슬롯 + underlined 옵션" description="leadingIcon / trailingIcon + underlined boolean prop.">
        <Row gap={spacing.xlarge} align="center">
          <Col gap={spacing.xsmall}>
            <StateLabel>leadingIcon</StateLabel>
            <TextButton label="이전" variant="focused" leadingIcon={<ArrowLeft color={textButtonToken.color.focused.default.icon} />} />
          </Col>
          <Col gap={spacing.xsmall}>
            <StateLabel>trailingIcon</StateLabel>
            <TextButton label="다음" variant="focused" trailingIcon={<ArrowRight color={textButtonToken.color.focused.default.icon} />} />
          </Col>
          <Col gap={spacing.xsmall}>
            <StateLabel>underlined=false</StateLabel>
            <TextButton label="밑줄 없음" variant="default" underlined={false} />
          </Col>
          <Col gap={spacing.xsmall}>
            <StateLabel>underlined=true (기본)</StateLabel>
            <TextButton label="밑줄 있음" variant="default" underlined />
          </Col>
        </Row>
      </Section>
    </View>
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Size 토큰 (단일 column)" description="Figma SPEC상 large/medium 모두 동일 토큰." badge="디자인">
        <TokenSpecTable title="공통 size 토큰" rows={[{
        property: 'height',
        token: 'textButtonToken.size.{*}.height',
        value: textButtonToken.size.medium.height,
        type: 'size'
      }, {
        property: 'padding',
        token: 'textButtonToken.size.{*}.paddingHorizontal',
        value: textButtonToken.size.medium.paddingHorizontal,
        type: 'size'
      }, {
        property: 'radius',
        token: 'textButtonToken.size.{*}.radius',
        value: textButtonToken.size.medium.radius,
        type: 'size'
      }, {
        property: 'gap',
        token: 'textButtonToken.size.{*}.gap',
        value: textButtonToken.size.medium.gap,
        type: 'size'
      }, {
        property: 'icon size',
        token: 'textButtonToken.size.{*}.iconSize',
        value: textButtonToken.size.medium.iconSize,
        type: 'size'
      }, {
        property: 'line width',
        token: 'textButtonToken.size.{*}.lineWidth',
        value: textButtonToken.size.medium.lineWidth,
        type: 'size'
      }, {
        property: 'label font',
        token: 'textStyleV2.label2',
        value: \`\${textStyleV2.label2.fontSize}px · weight \${textStyleV2.label2.fontWeight}\`
      }]} />
      </Section>

      <Section title="Variant × State 컬러" description="Figma 명세 1:1." badge="디자인">
        {VARIANTS.map(v => {
        const t = textButtonToken.color[v];
        const rows: {
          property: string;
          token: string;
          value: string | number;
          type?: 'color' | 'size';
        }[] = [];
        (['default', 'pressed', 'disabled'] as const).forEach(s => {
          const c = t[s];
          rows.push({
            property: \`\${s} / container\`,
            token: \`textButtonToken.color.\${v}.\${s}.container\`,
            value: c.container,
            type: 'color'
          });
          rows.push({
            property: \`\${s} / label\`,
            token: \`textButtonToken.color.\${v}.\${s}.label\`,
            value: c.label,
            type: 'color'
          });
          rows.push({
            property: \`\${s} / underline\`,
            token: \`textButtonToken.color.\${v}.\${s}.underline\`,
            value: c.underline,
            type: 'color'
          });
          rows.push({
            property: \`\${s} / icon\`,
            token: \`textButtonToken.color.\${v}.\${s}.icon\`,
            value: c.icon,
            type: 'color'
          });
        });
        return <View key={v}>
              <TokenSpecTable title={v} rows={rows} />
              <Divider />
            </View>;
      })}
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '마이그레이션 가이드 (v3.0)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="v3.0 Breaking Changes" description="이전 API를 사용하던 코드의 매핑." badge="개발">
        <CodeBlock title="colorScheme → variant union" code={\`// Before (v2.x)
<TextButton colorScheme="primary"   />
<TextButton colorScheme="assistive" />

// After (v3.0)
<TextButton variant="focused" />
<TextButton variant="default" />\`} />
        <CodeBlock title="size 키 변경" code={\`// Before (v2.x)
<TextButton size="small"  />   // label2 (14px Medium)
<TextButton size="medium" />   // body2 (15px Regular)

// After (v3.0)
<TextButton size="medium" />   // label2 (14px Medium) — 시각 회귀 발생 (body2 → label2)
<TextButton size="large"  />   // body2  (15px Regular) — 시각 동일 (body2 유지)\`} />
        <CodeBlock title="loading 제거 + underlined 신규" code={\`// Before
<TextButton label="저장" loading />

// After — 외부 분기
{isLoading ? <ActivityIndicator /> : <TextButton label="저장" />}

// underlined 신규 (기본 true)
<TextButton label="밑줄 있음" />                // underlined=true
<TextButton label="밑줄 없음" underlined={false} />\`} />
        <CodeBlock title="아이콘 슬롯 신규 (leadingIcon / trailingIcon)" code={\`import { Icon } from '@/components/Icon';

<TextButton label="이전" leadingIcon={<Icon name="arrow-left" size={16} />} />
<TextButton label="다음" trailingIcon={<Icon name="arrow-right" size={16} />} />\`} />
      </Section>
    </View>
}`,...z.parameters?.docs?.source}}};const ne=["Playground","Variants","Sizes","States","WithIcon","DesignSpec","Migration"];export{k as DesignSpec,z as Migration,f as Playground,T as Sizes,B as States,S as Variants,v as WithIcon,ne as __namedExportsOrder,te as default};
