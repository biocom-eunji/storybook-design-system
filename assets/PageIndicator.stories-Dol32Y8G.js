import{R as e,V as r,s as A,r as T}from"./iframe-rdsxNJ7l.js";import{c as o,o as c,M,s as t,r as F,T as _,a as h}from"./theme-KAxj7l-q.js";import{S as m,D as K,b as l,a as s,C as u}from"./storyHelpers-D5HpvNsw.js";import{T as I}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";const $={medium:{activeSize:10,sizes:[10,10,8,6],gap:10},small:{activeSize:6,sizes:[6,6,4,2],gap:6}},B={normal:{active:c[100],inactive:c[16],color:o.iconPrimary},inverse:{active:c[100],inactive:c[52],color:o.iconOnColor}};function j(a,i){return a>=i.sizes.length?i.sizes[i.sizes.length-1]:i.sizes[a]}function n({variant:a="normal",size:i="medium",total:g,current:O,onChange:L}){const R=$[i],w=B[a];return e.createElement(r,{style:[f.container,{gap:R.gap}],accessibilityRole:"tablist",accessibilityLabel:"페이지 인디케이터"},Array.from({length:g},(q,p)=>{const P=p===O,N=Math.abs(p-O),V=j(N,R),W=P?w.active:w.inactive,D={width:V,height:V,borderRadius:V/2,backgroundColor:w.color,opacity:W};return L?e.createElement(M,{key:p,onPress:()=>L(p),accessibilityRole:"tab",accessibilityState:{selected:P},accessibilityLabel:`페이지 ${p+1}`,hitSlop:8,style:f.dotWrapper},e.createElement(r,{style:D})):e.createElement(r,{key:p,style:[f.dotWrapper,D],accessibilityRole:"tab",accessibilityState:{selected:P}})}))}const f=A.create({container:{flexDirection:"row",alignItems:"center"},dotWrapper:{alignItems:"center",justifyContent:"center"}});n.__docgenInfo={description:"",methods:[],displayName:"PageIndicator",props:{variant:{required:!1,tsType:{name:"union",raw:"'normal' | 'inverse'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'inverse'"}]},description:"색상 변형",defaultValue:{value:"'normal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"크기",defaultValue:{value:"'medium'",computed:!1}},total:{required:!0,tsType:{name:"number"},description:"전체 페이지 수"},current:{required:!0,tsType:{name:"number"},description:"현재 페이지 index (0-based)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"클릭 시 페이지 이동"}}};const d={normal:{color:{token:"color/icon/primary",value:o.iconPrimary},activeOpacity:{token:"opacity/100",value:c[100]},inactiveOpacity:{token:"opacity/16",value:c[16]}},inverse:{color:{token:"color/icon/onColor",value:o.iconOnColor},activeOpacity:{token:"opacity/100",value:c[100]},inactiveOpacity:{token:"opacity/52",value:c[52]}}},J={title:"Navigation/PageIndicator",component:n,argTypes:{variant:{control:"select",options:["normal","inverse"],description:"색상 변형 (Figma: Variant)"},size:{control:"select",options:["small","medium"],description:"크기 (Figma: Size)"},total:{control:{type:"range",min:2,max:10},description:"전체 페이지 수"},current:{control:{type:"range",min:0,max:9},description:"현재 페이지 index (0-based)"}},tags:["autodocs"]},y={render:()=>{const[a,i]=T.useState(0);return e.createElement(n,{variant:"normal",size:"medium",total:5,current:a,onChange:i})},parameters:{docs:{description:{story:"**적용 토큰**: 활성 `color/icon/primary` + `opacity/100`, 비활성 `opacity/16`, 축소 dot: distance별 10→8→6px"}}}},v={name:"Variant 비교",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"Variant 비교",description:"normal(어두운 점)과 white(밝은 점)를 비교합니다."},e.createElement(r,{style:{gap:t.xlarge}},e.createElement(l,{gap:t.small},e.createElement(s,null,"normal"),e.createElement(n,{variant:"normal",size:"medium",total:5,current:0})),e.createElement(l,{gap:t.small},e.createElement(s,null,"white (어두운 배경)"),e.createElement(r,{style:{backgroundColor:o.backgroundInverse,padding:t.large,borderRadius:t.small}},e.createElement(n,{variant:"inverse",size:"medium",total:5,current:0})))))),parameters:{docs:{description:{story:["**Normal**: `color/icon/primary` + 비활성 `opacity/16`","**White**: `color/icon/onColor` + 비활성 `opacity/52`"].join(`

`)}}}},C={name:"Size 비교",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"Size 비교",description:"small과 medium 두 가지 크기를 비교합니다."},e.createElement(r,{style:{gap:t.xlarge}},e.createElement(l,{gap:t.small},e.createElement(s,null,"medium — 활성 10px, gap 10px"),e.createElement(n,{variant:"normal",size:"medium",total:5,current:0})),e.createElement(l,{gap:t.small},e.createElement(s,null,"small — 활성 6px, gap 6px"),e.createElement(n,{variant:"normal",size:"small",total:5,current:0})))))},b={name:"Variant × Size 매트릭스",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"Variant × Size 매트릭스",description:"모든 조합을 한 화면에서 비교합니다."},e.createElement(r,{style:{gap:t.xlarge}},e.createElement(l,{gap:t.small},e.createElement(s,null,"normal / medium"),e.createElement(n,{variant:"normal",size:"medium",total:5,current:0})),e.createElement(l,{gap:t.small},e.createElement(s,null,"normal / small"),e.createElement(n,{variant:"normal",size:"small",total:5,current:0})),e.createElement(l,{gap:t.small},e.createElement(s,null,"white / medium"),e.createElement(r,{style:{backgroundColor:o.backgroundInverse,padding:t.large,borderRadius:t.small}},e.createElement(n,{variant:"inverse",size:"medium",total:5,current:0}))),e.createElement(l,{gap:t.small},e.createElement(s,null,"white / small"),e.createElement(r,{style:{backgroundColor:o.backgroundInverse,padding:t.large,borderRadius:t.small}},e.createElement(n,{variant:"inverse",size:"small",total:5,current:0}))))))},S={name:"위치별 (Fade 방향)",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"위치별 (Fade 방향)",description:"current를 변경하여 축소 dot의 fade 방향을 확인합니다."},e.createElement(r,{style:{gap:t.xlarge}},[0,2,4].map(a=>e.createElement(l,{key:a,gap:t.small},e.createElement(s,null,`current=${a} (${a+1}번째)`),e.createElement(n,{variant:"normal",size:"medium",total:5,current:a}))))))},E={name:"인터랙티브 데모",render:()=>{const[a,i]=T.useState(0);return e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"인터랙티브 데모",description:"점을 클릭하여 current를 변경합니다."},e.createElement(r,{style:{gap:t.xlarge}},e.createElement(l,{gap:t.small},e.createElement(s,null,"medium (클릭 가능)"),e.createElement(n,{variant:"normal",size:"medium",total:7,current:a,onChange:i})),e.createElement(l,{gap:t.small},e.createElement(s,null,"white (클릭 가능)"),e.createElement(r,{style:{backgroundColor:o.backgroundInverse,padding:t.large,borderRadius:t.small}},e.createElement(n,{variant:"inverse",size:"medium",total:7,current:a,onChange:i}))))))}},k={name:"디자인 스펙",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"디자인 스펙",description:"Figma 실측 기준 Dot 스펙입니다.",badge:"디자인"},["normal","inverse"].map(a=>e.createElement(r,{key:a},e.createElement(I,{title:`variant: ${a}`,rows:[{property:"Dot 색상",token:d[a].color.token,value:d[a].color.value,type:"color"},{property:"활성 opacity",token:d[a].activeOpacity.token,value:d[a].activeOpacity.value,type:"opacity"},{property:"비활성 opacity",token:d[a].inactiveOpacity.token,value:d[a].inactiveOpacity.value,type:"opacity"}]}),e.createElement(K,null))),e.createElement(I,{title:"medium 사이즈 (Figma 실측)",rows:[{property:"활성 dot (distance 0)",token:"—",value:10,type:"size"},{property:"인접 비활성 (distance 1)",token:"—",value:10,type:"size"},{property:"1단계 축소 (distance 2)",token:"—",value:8,type:"size"},{property:"2단계 축소 (distance 3+)",token:"—",value:6,type:"size"},{property:"gap",token:"—",value:10,type:"size"}]}),e.createElement(I,{title:"small 사이즈 (Figma 실측)",rows:[{property:"활성 dot (distance 0)",token:"—",value:6,type:"size"},{property:"인접 비활성 (distance 1)",token:"—",value:6,type:"size"},{property:"1단계 축소 (distance 2)",token:"—",value:4,type:"size"},{property:"2단계 축소 (distance 3+)",token:"—",value:2,type:"size"},{property:"gap",token:"—",value:6,type:"size"}]})))},z={name:"실전 예시",render:()=>{const[a,i]=T.useState(0),g=["건강 데이터를 한눈에","맞춤 식단 추천","수면 패턴 분석"];return e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"실전 예시",description:"온보딩 캐러셀 — 이미지 플레이스홀더 하단에 PageIndicator가 배치된 구조입니다."},e.createElement(r,{style:{maxWidth:375,padding:t.xlarge,backgroundColor:o.backgroundPrimary,borderRadius:F.large,borderWidth:1,borderColor:o.borderDefault,gap:t.xlarge}},e.createElement(r,{style:{backgroundColor:o.backgroundTertiary,borderRadius:F.medium,height:240,alignItems:"center",justifyContent:"center"}},e.createElement(_,{style:{fontSize:h.heading.fontSize,fontWeight:h.heading.fontWeight,color:o.textPrimary,textAlign:"center"}},g[a]),e.createElement(_,{style:{fontSize:h.caption.fontSize,color:o.textSecondary,marginTop:t.small}},"슬라이드 ",a+1," / ",g.length)),e.createElement(r,{style:{alignItems:"center"}},e.createElement(n,{variant:"normal",size:"medium",total:g.length,current:a,onChange:i})))))}},x={name:"사용 가이드",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"사용 가이드",description:"개발자를 위한 Dot 컴포넌트 사용 예시입니다.",badge:"개발"},e.createElement(u,{title:"Import",code:"import { PageIndicator } from '@design-system/components/PageIndicator';"}),e.createElement(u,{title:"기본 사용 (표시 전용)",code:"<PageIndicator total={5} current={currentPage} />"}),e.createElement(u,{title:"클릭 가능 (onChange)",code:`<Dot
  total={5}
  current={currentPage}
  onChange={setCurrentPage}
/>`}),e.createElement(u,{title:"어두운 배경 위 (white variant)",code:`<View style={{ backgroundColor: semanticColor.backgroundInverse }}>
  <PageIndicator variant="inverse" total={5} current={currentPage} />
</View>`}),e.createElement(u,{title:"캐러셀과 함께",code:`const [page, setPage] = useState(0);

<Carousel onPageChange={setPage}>
  {slides}
</Carousel>
<PageIndicator total={slides.length} current={page} size="small" />`})))};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(0);
    return <PageIndicator variant="normal" size="medium" total={5} current={current} onChange={setCurrent} />;
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 활성 \`color/icon/primary\` + \`opacity/100\`, 비활성 \`opacity/16\`, 축소 dot: distance별 10→8→6px'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Variant 비교',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Variant 비교" description="normal(어두운 점)과 white(밝은 점)를 비교합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>normal</StateLabel>
            <PageIndicator variant="normal" size="medium" total={5} current={0} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>white (어두운 배경)</StateLabel>
            <View style={{
            backgroundColor: semanticColor.backgroundInverse,
            padding: spacing.large,
            borderRadius: spacing.small
          }}>
              <PageIndicator variant="inverse" size="medium" total={5} current={0} />
            </View>
          </Col>
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: ['**Normal**: \`color/icon/primary\` + 비활성 \`opacity/16\`', '**White**: \`color/icon/onColor\` + 비활성 \`opacity/52\`'].join('\\n\\n')
      }
    }
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Size 비교',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Size 비교" description="small과 medium 두 가지 크기를 비교합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>medium — 활성 10px, gap 10px</StateLabel>
            <PageIndicator variant="normal" size="medium" total={5} current={0} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>small — 활성 6px, gap 6px</StateLabel>
            <PageIndicator variant="normal" size="small" total={5} current={0} />
          </Col>
        </View>
      </Section>
    </View>
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Variant × Size 매트릭스',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Variant × Size 매트릭스" description="모든 조합을 한 화면에서 비교합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>normal / medium</StateLabel>
            <PageIndicator variant="normal" size="medium" total={5} current={0} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>normal / small</StateLabel>
            <PageIndicator variant="normal" size="small" total={5} current={0} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>white / medium</StateLabel>
            <View style={{
            backgroundColor: semanticColor.backgroundInverse,
            padding: spacing.large,
            borderRadius: spacing.small
          }}>
              <PageIndicator variant="inverse" size="medium" total={5} current={0} />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>white / small</StateLabel>
            <View style={{
            backgroundColor: semanticColor.backgroundInverse,
            padding: spacing.large,
            borderRadius: spacing.small
          }}>
              <PageIndicator variant="inverse" size="small" total={5} current={0} />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '위치별 (Fade 방향)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="위치별 (Fade 방향)" description="current를 변경하여 축소 dot의 fade 방향을 확인합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          {[0, 2, 4].map(current => <Col key={current} gap={spacing.small}>
              <StateLabel>{\`current=\${current} (\${current + 1}번째)\`}</StateLabel>
              <PageIndicator variant="normal" size="medium" total={5} current={current} />
            </Col>)}
        </View>
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [current, setCurrent] = useState(0);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="점을 클릭하여 current를 변경합니다.">
          <View style={{
          gap: spacing.xlarge
        }}>
            <Col gap={spacing.small}>
              <StateLabel>medium (클릭 가능)</StateLabel>
              <PageIndicator variant="normal" size="medium" total={7} current={current} onChange={setCurrent} />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>white (클릭 가능)</StateLabel>
              <View style={{
              backgroundColor: semanticColor.backgroundInverse,
              padding: spacing.large,
              borderRadius: spacing.small
            }}>
                <PageIndicator variant="inverse" size="medium" total={7} current={current} onChange={setCurrent} />
              </View>
            </Col>
          </View>
        </Section>
      </View>;
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 실측 기준 Dot 스펙입니다." badge="디자인">
        {(['normal', 'inverse'] as const).map(variant => <View key={variant}>
            <TokenSpecTable title={\`variant: \${variant}\`} rows={[{
          property: 'Dot 색상',
          token: TOKEN_MAP[variant].color.token,
          value: TOKEN_MAP[variant].color.value,
          type: 'color'
        }, {
          property: '활성 opacity',
          token: TOKEN_MAP[variant].activeOpacity.token,
          value: TOKEN_MAP[variant].activeOpacity.value,
          type: 'opacity'
        }, {
          property: '비활성 opacity',
          token: TOKEN_MAP[variant].inactiveOpacity.token,
          value: TOKEN_MAP[variant].inactiveOpacity.value,
          type: 'opacity'
        }]} />
            <Divider />
          </View>)}

        <TokenSpecTable title="medium 사이즈 (Figma 실측)" rows={[{
        property: '활성 dot (distance 0)',
        token: '—',
        value: 10,
        type: 'size'
      }, {
        property: '인접 비활성 (distance 1)',
        token: '—',
        value: 10,
        type: 'size'
      }, {
        property: '1단계 축소 (distance 2)',
        token: '—',
        value: 8,
        type: 'size'
      }, {
        property: '2단계 축소 (distance 3+)',
        token: '—',
        value: 6,
        type: 'size'
      }, {
        property: 'gap',
        token: '—',
        value: 10,
        type: 'size'
      }]} />

        <TokenSpecTable title="small 사이즈 (Figma 실측)" rows={[{
        property: '활성 dot (distance 0)',
        token: '—',
        value: 6,
        type: 'size'
      }, {
        property: '인접 비활성 (distance 1)',
        token: '—',
        value: 6,
        type: 'size'
      }, {
        property: '1단계 축소 (distance 2)',
        token: '—',
        value: 4,
        type: 'size'
      }, {
        property: '2단계 축소 (distance 3+)',
        token: '—',
        value: 2,
        type: 'size'
      }, {
        property: 'gap',
        token: '—',
        value: 6,
        type: 'size'
      }]} />
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => {
    const [current, setCurrent] = useState(0);
    const slides = ['건강 데이터를 한눈에', '맞춤 식단 추천', '수면 패턴 분석'];
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="온보딩 캐러셀 — 이미지 플레이스홀더 하단에 PageIndicator가 배치된 구조입니다.">
          <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: radius.large,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          gap: spacing.xlarge
        }}>
            <View style={{
            backgroundColor: semanticColor.backgroundTertiary,
            borderRadius: radius.medium,
            height: 240,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: textStyle.heading.fontSize,
              fontWeight: textStyle.heading.fontWeight,
              color: semanticColor.textPrimary,
              textAlign: 'center'
            }}>
                {slides[current]}
              </Text>
              <Text style={{
              fontSize: textStyle.caption.fontSize,
              color: semanticColor.textSecondary,
              marginTop: spacing.small
            }}>
                슬라이드 {current + 1} / {slides.length}
              </Text>
            </View>
            <View style={{
            alignItems: 'center'
          }}>
              <PageIndicator variant="normal" size="medium" total={slides.length} current={current} onChange={setCurrent} />
            </View>
          </View>
        </Section>
      </View>;
  }
}`,...z.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Dot 컴포넌트 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { PageIndicator } from '@design-system/components/PageIndicator';\`} />

        <CodeBlock title="기본 사용 (표시 전용)" code={\`<PageIndicator total={5} current={currentPage} />\`} />

        <CodeBlock title="클릭 가능 (onChange)" code={\`<Dot
  total={5}
  current={currentPage}
  onChange={setCurrentPage}
/>\`} />

        <CodeBlock title="어두운 배경 위 (white variant)" code={\`<View style={{ backgroundColor: semanticColor.backgroundInverse }}>
  <PageIndicator variant="inverse" total={5} current={currentPage} />
</View>\`} />

        <CodeBlock title="캐러셀과 함께" code={\`const [page, setPage] = useState(0);

<Carousel onPageChange={setPage}>
  {slides}
</Carousel>
<PageIndicator total={slides.length} current={page} size="small" />\`} />
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};const Q=["Playground","Variants","Sizes","Matrix","Positions","Interactive","DesignSpec","InContext","Usage"];export{k as DesignSpec,z as InContext,E as Interactive,b as Matrix,y as Playground,S as Positions,C as Sizes,x as Usage,v as Variants,Q as __namedExportsOrder,J as default};
