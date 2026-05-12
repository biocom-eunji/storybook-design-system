import{R as e,V as a,s as D,r as T}from"./iframe-rdsxNJ7l.js";import{I as V}from"./Icon-DGfD0Qtj.js";import{c as o,s as r,r as k,a as p,f as I,T as v}from"./theme-KAxj7l-q.js";import{B as q}from"./BaseInput-Bw9fcaU4.js";import{S as h,D as P,b as S,a as x,C as E}from"./storyHelpers-D5HpvNsw.js";import{T as w}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";import"./index-fsILkl5G.js";import"./index-LHpOlSgp.js";function s({placeholder:n="검색어를 입력하세요",value:l,onChangeText:t,onSubmit:c,onClear:b,disabled:f=!1}){return e.createElement(a,{style:f?C.disabled:void 0},e.createElement(q,{value:l,onChangeText:t,placeholder:n,disabled:f,leading:e.createElement(V,{name:"magnifying-glass",size:20,color:o.iconSecondary}),showClear:!0,onClear:b,containerStyle:C.container,accessibilityLabel:n,textInputProps:{returnKeyType:"search",onSubmitEditing:B=>{const z=B.nativeEvent.text;c?.(z)}}}))}const C=D.create({container:{backgroundColor:o.backgroundTertiary,borderRadius:k.medium,paddingHorizontal:r.medium,height:44,gap:r.small},disabled:{opacity:.5}});s.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{placeholder:{required:!1,tsType:{name:"string"},description:"플레이스홀더",defaultValue:{value:"'검색어를 입력하세요'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"입력값"},onChangeText:{required:!1,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:"값 변경 콜백"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:"검색 제출 콜백"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"지우기 콜백"},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화",defaultValue:{value:"false",computed:!1}}}};const M={title:"Input/SearchBar",component:s,argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"}},tags:["autodocs"]},d={render:()=>{const[n,l]=T.useState("");return e.createElement(a,{style:{maxWidth:375}},e.createElement(s,{value:n,onChangeText:l,placeholder:"음식을 검색하세요"}))}},m={name:"상태별",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(h,{title:"상태별",description:"기본, 입력됨, 비활성화 상태입니다."},e.createElement(a,{style:{gap:r.xlarge,maxWidth:375}},e.createElement(S,{gap:r.small},e.createElement(x,null,"기본 (빈 상태)"),e.createElement(s,{placeholder:"음식을 검색하세요"})),e.createElement(S,{gap:r.small},e.createElement(x,null,"입력됨"),e.createElement(s,{value:"닭가슴살",placeholder:"음식을 검색하세요"})),e.createElement(S,{gap:r.small},e.createElement(x,null,"비활성화"),e.createElement(s,{placeholder:"검색 불가",disabled:!0})))))},W={default:{background:"color/background/tertiary",text:"color/text/primary",placeholder:"color/text/placeholder",icon:"color/icon/secondary",clear:"—"},filled:{background:"color/background/tertiary",text:"color/text/primary",placeholder:"color/text/placeholder",icon:"color/icon/secondary",clear:"color/icon/disabled"},disabled:{background:"color/background/tertiary",text:"color/text/primary",placeholder:"color/text/placeholder",icon:"color/icon/secondary",clear:"—"}},R={"color/background/tertiary":o.backgroundTertiary,"color/text/primary":o.textPrimary,"color/text/placeholder":o.textPlaceholder,"color/icon/secondary":o.iconSecondary,"color/icon/disabled":o.iconDisabled},i=n=>R[n]??n,u={name:"디자인 스펙",render:()=>{const n=["default","filled","disabled"];return e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(h,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 SearchBar 상태별 스펙입니다.",badge:"디자인"},n.map(l=>{const t=W[l];return e.createElement(a,{key:l},e.createElement(w,{title:`state: ${l}`,rows:[{property:"배경색",token:t.background,value:i(t.background),type:"color"},{property:"텍스트",token:t.text,value:i(t.text),type:"color"},{property:"Placeholder",token:t.placeholder,value:i(t.placeholder),type:"color"},{property:"검색 아이콘",token:t.icon,value:i(t.icon),type:"color"},...t.clear!=="—"?[{property:"지우기 아이콘",token:t.clear,value:i(t.clear),type:"color"}]:[]]}),e.createElement(P,null))}),e.createElement(w,{title:"레이아웃",rows:[{property:"높이",token:"44dp (고정)",value:44,type:"size"},{property:"입력 타이포",token:"Body 2",value:`${p.body2.fontSize}px / ${p.body2.lineHeight}px / ${I.regular}`,type:"typography"},{property:"좌우 패딩",token:"spacing/medium",value:r.medium,type:"size"},{property:"아이콘-입력 간격",token:"spacing/small",value:r.small,type:"size"},{property:"코너 라디우스",token:"borderRadius/medium",value:k.medium,type:"size"},{property:"검색 아이콘 크기",token:"20dp",value:20,type:"size"},{property:"지우기 아이콘 크기",token:"20dp",value:20,type:"size"},{property:"비활성 투명도",token:"0.5",value:.5,type:"opacity"}]})))}},y={name:"실전 예시",render:()=>{const[n,l]=T.useState("닭가슴살"),t=[{name:"닭가슴살 샐러드",kcal:180},{name:"닭가슴살 스테이크",kcal:220},{name:"닭가슴살 김밥",kcal:310}];return e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(h,{title:"실전 예시",description:"음식 검색 화면에서의 SearchBar 활용 예시입니다."},e.createElement(a,{style:{maxWidth:375,backgroundColor:o.backgroundPrimary,borderRadius:k.large,borderWidth:1,borderColor:o.borderDefault,overflow:"hidden"}},e.createElement(a,{style:{padding:r.large}},e.createElement(s,{value:n,onChangeText:l,placeholder:"음식을 검색하세요"})),e.createElement(a,{style:{borderTopWidth:1,borderTopColor:o.borderDefault}},t.map((c,b)=>e.createElement(a,{key:c.name,style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:r.medium,paddingHorizontal:r.large,borderBottomWidth:b<t.length-1?1:0,borderBottomColor:o.borderDefault}},e.createElement(a,{style:{flexDirection:"row",alignItems:"center",gap:r.medium}},e.createElement(V,{name:"meal",style:"mini",size:16}),e.createElement(v,{style:{fontSize:p.body2.fontSize,lineHeight:p.body2.lineHeight,color:o.textPrimary}},c.name)),e.createElement(v,{style:{fontSize:p.caption.fontSize,color:o.textSecondary}},c.kcal," kcal")))))))}},g={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(h,{title:"사용 가이드",badge:"개발"},e.createElement(E,{title:"Import",code:"import { SearchBar } from '@design-system/components/SearchBar';"}),e.createElement(E,{title:"기본 사용",code:`const [query, setQuery] = useState('');

<SearchBar
  value={query}
  onChangeText={setQuery}
  onSubmit={handleSearch}
  placeholder="음식을 검색하세요"
/>`})))};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <View style={{
      maxWidth: 375
    }}>
        <SearchBar value={value} onChangeText={setValue} placeholder="음식을 검색하세요" />
      </View>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '상태별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="상태별" description="기본, 입력됨, 비활성화 상태입니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>기본 (빈 상태)</StateLabel>
            <SearchBar placeholder="음식을 검색하세요" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>입력됨</StateLabel>
            <SearchBar value="닭가슴살" placeholder="음식을 검색하세요" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>비활성화</StateLabel>
            <SearchBar placeholder="검색 불가" disabled />
          </Col>
        </View>
      </Section>
    </View>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => {
    const states = ['default', 'filled', 'disabled'] as const;
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 SearchBar 상태별 스펙입니다." badge="디자인">
          {states.map(state => {
          const st = STATE_TOKEN_MAP[state];
          return <View key={state}>
                <TokenSpecTable title={\`state: \${state}\`} rows={[{
              property: '배경색',
              token: st.background,
              value: resolve(st.background),
              type: 'color'
            }, {
              property: '텍스트',
              token: st.text,
              value: resolve(st.text),
              type: 'color'
            }, {
              property: 'Placeholder',
              token: st.placeholder,
              value: resolve(st.placeholder),
              type: 'color'
            }, {
              property: '검색 아이콘',
              token: st.icon,
              value: resolve(st.icon),
              type: 'color'
            }, ...(st.clear !== '—' ? [{
              property: '지우기 아이콘',
              token: st.clear,
              value: resolve(st.clear),
              type: 'color' as const
            }] : [])]} />
                <Divider />
              </View>;
        })}

          <TokenSpecTable title="레이아웃" rows={[{
          property: '높이',
          token: '44dp (고정)',
          value: 44,
          type: 'size'
        }, {
          property: '입력 타이포',
          token: 'Body 2',
          value: \`\${textStyle.body2.fontSize}px / \${textStyle.body2.lineHeight}px / \${fw.regular}\`,
          type: 'typography'
        }, {
          property: '좌우 패딩',
          token: 'spacing/medium',
          value: spacing.medium,
          type: 'size'
        }, {
          property: '아이콘-입력 간격',
          token: 'spacing/small',
          value: spacing.small,
          type: 'size'
        }, {
          property: '코너 라디우스',
          token: 'borderRadius/medium',
          value: radius.medium,
          type: 'size'
        }, {
          property: '검색 아이콘 크기',
          token: '20dp',
          value: 20,
          type: 'size'
        }, {
          property: '지우기 아이콘 크기',
          token: '20dp',
          value: 20,
          type: 'size'
        }, {
          property: '비활성 투명도',
          token: '0.5',
          value: 0.5,
          type: 'opacity'
        }]} />
        </Section>
      </View>;
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => {
    const [query, setQuery] = useState('닭가슴살');
    const mockResults = [{
      name: '닭가슴살 샐러드',
      kcal: 180
    }, {
      name: '닭가슴살 스테이크',
      kcal: 220
    }, {
      name: '닭가슴살 김밥',
      kcal: 310
    }];
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="음식 검색 화면에서의 SearchBar 활용 예시입니다.">
          <View style={{
          maxWidth: 375,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: radius.large,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          overflow: 'hidden'
        }}>
            <View style={{
            padding: spacing.large
          }}>
              <SearchBar value={query} onChangeText={setQuery} placeholder="음식을 검색하세요" />
            </View>

            <View style={{
            borderTopWidth: 1,
            borderTopColor: semanticColor.borderDefault
          }}>
              {mockResults.map((item, idx) => <View key={item.name} style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: spacing.medium,
              paddingHorizontal: spacing.large,
              borderBottomWidth: idx < mockResults.length - 1 ? 1 : 0,
              borderBottomColor: semanticColor.borderDefault
            }}>
                  <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: spacing.medium
              }}>
                    <Icon name="meal" style="mini" size={16} />
                    <Text style={{
                  fontSize: textStyle.body2.fontSize,
                  lineHeight: textStyle.body2.lineHeight,
                  color: semanticColor.textPrimary
                }}>
                      {item.name}
                    </Text>
                  </View>
                  <Text style={{
                fontSize: textStyle.caption.fontSize,
                color: semanticColor.textSecondary
              }}>
                    {item.kcal} kcal
                  </Text>
                </View>)}
            </View>
          </View>
        </Section>
      </View>;
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { SearchBar } from '@design-system/components/SearchBar';\`} />
        <CodeBlock title="기본 사용" code={\`const [query, setQuery] = useState('');\\n\\n<SearchBar\\n  value={query}\\n  onChangeText={setQuery}\\n  onSubmit={handleSearch}\\n  placeholder="음식을 검색하세요"\\n/>\`} />
      </Section>
    </View>
}`,...g.parameters?.docs?.source}}};const U=["Playground","States","DesignSpec","InContext","Usage"];export{u as DesignSpec,y as InContext,d as Playground,m as States,g as Usage,U as __namedExportsOrder,M as default};
