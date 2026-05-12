import{R as e,V as l}from"./iframe-rdsxNJ7l.js";import{S as f,P as T,a as F}from"./index-CkrO8KnR.js";import{B as d}from"./Button-DT9-49YQ.js";import{S as c,D as A,C as v,a as m,R as I,b as w,c as x}from"./storyHelpers-D5HpvNsw.js";import{T as B}from"./TokenSpecTable-CJp3A6kK.js";import{s as o,b as n,t as p}from"./theme-KAxj7l-q.js";import"./preload-helper-PPVm8Dsz.js";const C=({color:t="#000",size:a=16})=>e.createElement(f,{width:a,height:a,viewBox:"0 0 24 24",fill:"none"},e.createElement(T,{d:"M12 5v14M5 12h14",stroke:t,strokeWidth:2,strokeLinecap:"round"})),E=({color:t="#000",size:a=16})=>e.createElement(f,{width:a,height:a,viewBox:"0 0 24 24",fill:"none"},e.createElement(T,{d:"M5 12h14M13 6l6 6-6 6",stroke:t,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),$=({color:t="#000",size:a=16})=>e.createElement(f,{width:a,height:a,viewBox:"0 0 24 24",fill:"none"},e.createElement(F,{points:"20 6 9 17 4 12",stroke:t,strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})),M={title:"Actions/Button",component:d,argTypes:{label:{control:"text",description:"Figma: 버튼 텍스트"},variant:{control:"select",options:["primary","sub","outlined","outlined-focused"],description:"Figma named variant — Btn(primary=yes/sub=no), Btn(primary=no/sub=yes), Btn-outlined(focused=no/sub=yes), Btn-outlined(focused=yes/sub=no)"},size:{control:"select",options:["small","medium","large"],description:"Figma SPEC: large(52) / medium(44) / small(36)"},disabled:{control:"boolean",description:"Figma 상태: disabled"}},args:{label:"확인",variant:"primary",size:"medium",disabled:!1},tags:["autodocs"],parameters:{docs:{description:{component:"Button — Figma `Button` 컴포넌트 1:1 매핑. 4개 named variant(primary / sub / outlined / outlined-focused) × 3 size(small / medium / large) × 3 state(default / pressed / disabled).\n\n**v3.0 Breaking change**: `colorScheme` · `loading` prop 제거. `variant`는 `'solid' | 'outlined'`에서 4개 named variant union으로 변경."}}}},u=["primary","sub","outlined","outlined-focused"],V=["small","medium","large"],L={primary:n.color.primary.default.label,sub:n.color.sub.default.label,outlined:n.color.outlined.default.label,"outlined-focused":n.color["outlined-focused"].default.label},g={parameters:{docs:{description:{story:"Controls 패널에서 Figma property 4종(label / variant / size / disabled)을 조작합니다."}}}},b={name:"Variants",render:()=>e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(c,{title:"Variants",description:"Figma named variant 4종 — Primary-Btn / Sub-Btn / Outlined-btn / Outlined-focused-btn."},e.createElement(x,{items:u.map(t=>({label:t,content:e.createElement(d,{label:"버튼",variant:t})}))})))},y={name:"Sizes",render:()=>e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(c,{title:"Sizes",description:"Figma SPEC: large(52) / medium(44) / small(36) — 4 variant × 3 size."},u.map(t=>e.createElement(l,{key:t,style:{gap:o.small,marginBottom:o.xlarge}},e.createElement(m,null,t),e.createElement(I,{gap:o.medium,align:"center"},V.map(a=>e.createElement(w,{key:a,gap:o.xsmall},e.createElement(m,null,a),e.createElement(d,{label:"버튼",variant:t,size:a}))))))))},z={name:"States",render:()=>e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(c,{title:"States",description:"Figma 상태 매트릭스 — default / pressed / disabled. pressed는 실제 터치 시 확인."},u.map(t=>e.createElement(l,{key:t,style:{gap:o.small,marginBottom:o.xlarge}},e.createElement(m,null,t),e.createElement(x,{items:[{label:"default",content:e.createElement(d,{label:"버튼",variant:t})},{label:"pressed (눌러서 확인)",content:e.createElement(d,{label:"버튼",variant:t})},{label:"disabled",content:e.createElement(d,{label:"버튼",variant:t,disabled:!0})}]}))))),parameters:{docs:{description:{story:"**Pressable의 한계**: RN의 `pressed` 상태는 실제 터치 중에만 활성화되므로 정적 스크린샷에서 default와 동일하게 보입니다. 실제 인터랙션으로 확인하세요."}}}},h={name:"With Icon",render:()=>{const t=[{key:"leading",label:"leftIcon",leadingFactory:C,trailingFactory:null},{key:"trailing",label:"rightIcon",leadingFactory:null,trailingFactory:E},{key:"both",label:"left + right Icon",leadingFactory:$,trailingFactory:E}];return e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(c,{title:"With Icon",description:"Figma 'SPEC: 아이콘이 있을 경우' (node 166:4647) — icon size 16 / gap large=6, medium=small=4. variant별 라벨 색에 아이콘 색 동기화."},u.map(a=>{const s=L[a];return e.createElement(l,{key:a,style:{gap:o.small,marginBottom:o.xlarge}},e.createElement(m,null,a),t.map(i=>e.createElement(l,{key:i.key,style:{marginBottom:o.medium}},e.createElement(m,null,i.label),e.createElement(I,{gap:o.medium,align:"center"},V.map(r=>e.createElement(w,{key:r,gap:o.xsmall},e.createElement(m,null,r),e.createElement(d,{label:"버튼",variant:a,size:r,leftIcon:i.leadingFactory?e.createElement(i.leadingFactory,{color:s,size:n.size[r].iconSize}):void 0,rightIcon:i.trailingFactory?e.createElement(i.trailingFactory,{color:s,size:n.size[r].iconSize}):void 0})))))))})),e.createElement(c,{title:"사용 예시 코드",badge:"개발"},e.createElement(v,{title:"Button + leftIcon / rightIcon (Figma BOOLEAN property: left icon#175:5, right icon#175:8)",code:`import { Icon } from '@/components/Icon';

<Button label="추가" leftIcon={<Icon name="plus" size={16} />} />
<Button label="다음" rightIcon={<Icon name="arrow-right" size={16} />} />
<Button label="확인" leftIcon={<Icon name="check" size={16} />} rightIcon={<Icon name="arrow-right" size={16} />} />`})))},parameters:{docs:{description:{story:"**Figma 매핑**: `left icon#175:5` / `right icon#175:8` BOOLEAN property. icon size는 모든 size에서 16 공통. variant별 label 색을 아이콘 stroke에 동기화하면 자연스러움."}}}},k={name:"디자인 스펙",render:()=>e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(c,{title:"Size 토큰",description:"Figma '버튼 크기(공통)' SPEC 1:1.",badge:"디자인"},e.createElement(B,{title:"Size × 속성 매트릭스",rows:[{property:"small / height",token:"buttonToken.size.small.height",value:n.size.small.height,type:"size"},{property:"small / padding",token:"buttonToken.size.small.paddingHorizontal",value:n.size.small.paddingHorizontal,type:"size"},{property:"small / radius",token:"buttonToken.size.small.radius",value:n.size.small.radius,type:"size"},{property:"small / gap",token:"buttonToken.size.small.gap",value:n.size.small.gap,type:"size"},{property:"small / icon size",token:"buttonToken.size.small.iconSize",value:n.size.small.iconSize,type:"size"},{property:"small / label",token:"textStyleV2.label3",value:`${p.label3.fontSize}px · weight ${p.label3.fontWeight}`},{property:"medium / height",token:"buttonToken.size.medium.height",value:n.size.medium.height,type:"size"},{property:"medium / padding",token:"buttonToken.size.medium.paddingHorizontal",value:n.size.medium.paddingHorizontal,type:"size"},{property:"medium / radius",token:"buttonToken.size.medium.radius",value:n.size.medium.radius,type:"size"},{property:"medium / gap",token:"buttonToken.size.medium.gap",value:n.size.medium.gap,type:"size"},{property:"medium / label",token:"textStyleV2.label2",value:`${p.label2.fontSize}px · weight ${p.label2.fontWeight}`},{property:"large / height",token:"buttonToken.size.large.height",value:n.size.large.height,type:"size"},{property:"large / padding",token:"buttonToken.size.large.paddingHorizontal",value:n.size.large.paddingHorizontal,type:"size"},{property:"large / radius",token:"buttonToken.size.large.radius",value:n.size.large.radius,type:"size"},{property:"large / gap",token:"buttonToken.size.large.gap",value:n.size.large.gap,type:"size"},{property:"large / label",token:"textStyleV2.label1",value:`${p.label1.fontSize}px · weight ${p.label1.fontWeight}`}]})),e.createElement(c,{title:"Variant × State 컬러",description:"Figma 명세 표 1:1.",badge:"디자인"},u.map(t=>{const a=n.color[t],s=[];return["default","pressed","disabled"].forEach(i=>{const r=a[i];s.push({property:`${i} / container`,token:`buttonToken.color.${t}.${i}.container`,value:r.container,type:"color"}),s.push({property:`${i} / label`,token:`buttonToken.color.${t}.${i}.label`,value:r.label,type:"color"}),r.border!=null&&(s.push({property:`${i} / border`,token:`buttonToken.color.${t}.${i}.border`,value:r.border,type:"color"}),s.push({property:`${i} / border width`,token:`buttonToken.color.${t}.${i}.borderWidth`,value:r.borderWidth,type:"size"}))}),e.createElement(l,{key:t},e.createElement(B,{title:t,rows:s}),e.createElement(A,null))})))},S={name:"마이그레이션 가이드 (v3.0)",render:()=>e.createElement(l,{style:{gap:o["3xlarge"]}},e.createElement(c,{title:"v3.0 Breaking Changes",description:"이전 API를 사용하던 코드의 매핑.",badge:"개발"},e.createElement(v,{title:"variant + colorScheme → variant union",code:`// Before (v2.x)
<Button variant="solid"    colorScheme="primary"   />
<Button variant="solid"    colorScheme="assistive" />
<Button variant="outlined" colorScheme="primary"   />
<Button variant="outlined" colorScheme="assistive" />

// After (v3.0)
<Button variant="primary" />
<Button variant="sub" />
<Button variant="outlined-focused" />
<Button variant="outlined" />`}),e.createElement(v,{title:"loading prop 제거 (Figma 미정의)",code:`// Before
<Button label="저장" loading />

// After — 외부에서 분기
{isLoading ? <ActivityIndicator /> : <Button label="저장" onPress={save} />}`}),e.createElement(v,{title:"size별 토큰 변경 (Figma 일치)",code:`small  : height 36 · padding 12 · radius 8  · gap 4 · iconSize 16 · label3 (13px)
medium : height 44 · padding 16 · radius 8  · gap 4 · iconSize 16 · label2 (14px)
large  : height 52 · padding 24 · radius 12 · gap 6 · iconSize 16 · label1 (16px)

// 주요 변경
- small.padding:   14 → 12
- medium.padding:  18 → 16
- medium.radius:   12 → 8
- medium.iconSize: 20 → 16
- large.iconSize:  24 → 16
- (신규) gap 필드 — 아이콘↔라벨 간격`})))};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Controls 패널에서 Figma property 4종(label / variant / size / disabled)을 조작합니다.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Variants',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Variants" description="Figma named variant 4종 — Primary-Btn / Sub-Btn / Outlined-btn / Outlined-focused-btn.">
        <CompareGrid items={VARIANTS.map(v => ({
        label: v,
        content: <Button label="버튼" variant={v} />
      }))} />
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Sizes" description="Figma SPEC: large(52) / medium(44) / small(36) — 4 variant × 3 size.">
        {VARIANTS.map(v => <View key={v} style={{
        gap: spacing.small,
        marginBottom: spacing.xlarge
      }}>
            <StateLabel>{v}</StateLabel>
            <Row gap={spacing.medium} align="center">
              {SIZES.map(s => <Col key={s} gap={spacing.xsmall}>
                  <StateLabel>{s}</StateLabel>
                  <Button label="버튼" variant={v} size={s} />
                </Col>)}
            </Row>
          </View>)}
      </Section>
    </View>
}`,...y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="States" description="Figma 상태 매트릭스 — default / pressed / disabled. pressed는 실제 터치 시 확인.">
        {VARIANTS.map(v => <View key={v} style={{
        gap: spacing.small,
        marginBottom: spacing.xlarge
      }}>
            <StateLabel>{v}</StateLabel>
            <CompareGrid items={[{
          label: 'default',
          content: <Button label="버튼" variant={v} />
        }, {
          label: 'pressed (눌러서 확인)',
          content: <Button label="버튼" variant={v} />
        }, {
          label: 'disabled',
          content: <Button label="버튼" variant={v} disabled />
        }]} />
          </View>)}
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: '**Pressable의 한계**: RN의 \`pressed\` 상태는 실제 터치 중에만 활성화되므로 정적 스크린샷에서 default와 동일하게 보입니다. 실제 인터랙션으로 확인하세요.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Icon',
  render: () => {
    // Figma SPEC (node 166:4647): icon size 16 공통, 4 variant × 3 icon 패턴(leading / trailing / both) × 3 size
    const ICON_PATTERNS = [{
      key: 'leading',
      label: 'leftIcon',
      leadingFactory: PlusIcon,
      trailingFactory: null
    }, {
      key: 'trailing',
      label: 'rightIcon',
      leadingFactory: null,
      trailingFactory: ArrowRight
    }, {
      key: 'both',
      label: 'left + right Icon',
      leadingFactory: CheckIcon,
      trailingFactory: ArrowRight
    }] as const;
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="With Icon" description="Figma 'SPEC: 아이콘이 있을 경우' (node 166:4647) — icon size 16 / gap large=6, medium=small=4. variant별 라벨 색에 아이콘 색 동기화.">
          {VARIANTS.map(v => {
          const iconColor = VARIANT_LABEL_COLOR[v];
          return <View key={v} style={{
            gap: spacing.small,
            marginBottom: spacing.xlarge
          }}>
                <StateLabel>{v}</StateLabel>
                {ICON_PATTERNS.map(p => <View key={p.key} style={{
              marginBottom: spacing.medium
            }}>
                    <StateLabel>{p.label}</StateLabel>
                    <Row gap={spacing.medium} align="center">
                      {SIZES.map(s => <Col key={s} gap={spacing.xsmall}>
                          <StateLabel>{s}</StateLabel>
                          <Button label="버튼" variant={v} size={s} leftIcon={p.leadingFactory ? <p.leadingFactory color={iconColor} size={buttonToken.size[s].iconSize} /> : undefined} rightIcon={p.trailingFactory ? <p.trailingFactory color={iconColor} size={buttonToken.size[s].iconSize} /> : undefined} />
                        </Col>)}
                    </Row>
                  </View>)}
              </View>;
        })}
        </Section>

        <Section title="사용 예시 코드" badge="개발">
          <CodeBlock title="Button + leftIcon / rightIcon (Figma BOOLEAN property: left icon#175:5, right icon#175:8)" code={\`import { Icon } from '@/components/Icon';

<Button label="추가" leftIcon={<Icon name="plus" size={16} />} />
<Button label="다음" rightIcon={<Icon name="arrow-right" size={16} />} />
<Button label="확인" leftIcon={<Icon name="check" size={16} />} rightIcon={<Icon name="arrow-right" size={16} />} />\`} />
        </Section>
      </View>;
  },
  parameters: {
    docs: {
      description: {
        story: '**Figma 매핑**: \`left icon#175:5\` / \`right icon#175:8\` BOOLEAN property. icon size는 모든 size에서 16 공통. variant별 label 색을 아이콘 stroke에 동기화하면 자연스러움.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Size 토큰" description="Figma '버튼 크기(공통)' SPEC 1:1." badge="디자인">
        <TokenSpecTable title="Size × 속성 매트릭스" rows={[{
        property: 'small / height',
        token: 'buttonToken.size.small.height',
        value: buttonToken.size.small.height,
        type: 'size'
      }, {
        property: 'small / padding',
        token: 'buttonToken.size.small.paddingHorizontal',
        value: buttonToken.size.small.paddingHorizontal,
        type: 'size'
      }, {
        property: 'small / radius',
        token: 'buttonToken.size.small.radius',
        value: buttonToken.size.small.radius,
        type: 'size'
      }, {
        property: 'small / gap',
        token: 'buttonToken.size.small.gap',
        value: buttonToken.size.small.gap,
        type: 'size'
      }, {
        property: 'small / icon size',
        token: 'buttonToken.size.small.iconSize',
        value: buttonToken.size.small.iconSize,
        type: 'size'
      }, {
        property: 'small / label',
        token: 'textStyleV2.label3',
        value: \`\${textStyleV2.label3.fontSize}px · weight \${textStyleV2.label3.fontWeight}\`
      }, {
        property: 'medium / height',
        token: 'buttonToken.size.medium.height',
        value: buttonToken.size.medium.height,
        type: 'size'
      }, {
        property: 'medium / padding',
        token: 'buttonToken.size.medium.paddingHorizontal',
        value: buttonToken.size.medium.paddingHorizontal,
        type: 'size'
      }, {
        property: 'medium / radius',
        token: 'buttonToken.size.medium.radius',
        value: buttonToken.size.medium.radius,
        type: 'size'
      }, {
        property: 'medium / gap',
        token: 'buttonToken.size.medium.gap',
        value: buttonToken.size.medium.gap,
        type: 'size'
      }, {
        property: 'medium / label',
        token: 'textStyleV2.label2',
        value: \`\${textStyleV2.label2.fontSize}px · weight \${textStyleV2.label2.fontWeight}\`
      }, {
        property: 'large / height',
        token: 'buttonToken.size.large.height',
        value: buttonToken.size.large.height,
        type: 'size'
      }, {
        property: 'large / padding',
        token: 'buttonToken.size.large.paddingHorizontal',
        value: buttonToken.size.large.paddingHorizontal,
        type: 'size'
      }, {
        property: 'large / radius',
        token: 'buttonToken.size.large.radius',
        value: buttonToken.size.large.radius,
        type: 'size'
      }, {
        property: 'large / gap',
        token: 'buttonToken.size.large.gap',
        value: buttonToken.size.large.gap,
        type: 'size'
      }, {
        property: 'large / label',
        token: 'textStyleV2.label1',
        value: \`\${textStyleV2.label1.fontSize}px · weight \${textStyleV2.label1.fontWeight}\`
      }]} />
      </Section>

      <Section title="Variant × State 컬러" description="Figma 명세 표 1:1." badge="디자인">
        {VARIANTS.map(v => {
        const t = buttonToken.color[v];
        const rows: {
          property: string;
          token: string;
          value: string | number;
          type?: 'color' | 'size';
        }[] = [];
        (['default', 'pressed', 'disabled'] as const).forEach(s => {
          const c = t[s] as {
            container: string;
            label: string;
            border?: string;
            borderWidth?: number;
          };
          rows.push({
            property: \`\${s} / container\`,
            token: \`buttonToken.color.\${v}.\${s}.container\`,
            value: c.container,
            type: 'color'
          });
          rows.push({
            property: \`\${s} / label\`,
            token: \`buttonToken.color.\${v}.\${s}.label\`,
            value: c.label,
            type: 'color'
          });
          if (c.border != null) {
            rows.push({
              property: \`\${s} / border\`,
              token: \`buttonToken.color.\${v}.\${s}.border\`,
              value: c.border,
              type: 'color'
            });
            rows.push({
              property: \`\${s} / border width\`,
              token: \`buttonToken.color.\${v}.\${s}.borderWidth\`,
              value: c.borderWidth as number,
              type: 'size'
            });
          }
        });
        return <View key={v}>
              <TokenSpecTable title={v} rows={rows} />
              <Divider />
            </View>;
      })}
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '마이그레이션 가이드 (v3.0)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="v3.0 Breaking Changes" description="이전 API를 사용하던 코드의 매핑." badge="개발">
        <CodeBlock title="variant + colorScheme → variant union" code={\`// Before (v2.x)
<Button variant="solid"    colorScheme="primary"   />
<Button variant="solid"    colorScheme="assistive" />
<Button variant="outlined" colorScheme="primary"   />
<Button variant="outlined" colorScheme="assistive" />

// After (v3.0)
<Button variant="primary" />
<Button variant="sub" />
<Button variant="outlined-focused" />
<Button variant="outlined" />\`} />

        <CodeBlock title="loading prop 제거 (Figma 미정의)" code={\`// Before
<Button label="저장" loading />

// After — 외부에서 분기
{isLoading ? <ActivityIndicator /> : <Button label="저장" onPress={save} />}\`} />

        <CodeBlock title="size별 토큰 변경 (Figma 일치)" code={\`small  : height 36 · padding 12 · radius 8  · gap 4 · iconSize 16 · label3 (13px)
medium : height 44 · padding 16 · radius 8  · gap 4 · iconSize 16 · label2 (14px)
large  : height 52 · padding 24 · radius 12 · gap 6 · iconSize 16 · label1 (16px)

// 주요 변경
- small.padding:   14 → 12
- medium.padding:  18 → 16
- medium.radius:   12 → 8
- medium.iconSize: 20 → 16
- large.iconSize:  24 → 16
- (신규) gap 필드 — 아이콘↔라벨 간격\`} />
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};const D=["Playground","Variants","Sizes","States","WithIcon","DesignSpec","Migration"];export{k as DesignSpec,S as Migration,g as Playground,y as Sizes,z as States,b as Variants,h as WithIcon,D as __namedExportsOrder,M as default};
