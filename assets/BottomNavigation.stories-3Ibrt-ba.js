import{R as e,V as n,s as N,r as I}from"./iframe-rdsxNJ7l.js";import{M as z,c as t,T as i,f as m,e as s,r as p,j as A,s as a}from"./theme-KAxj7l-q.js";import{I as O}from"./Icon-DGfD0Qtj.js";import{S as d,b as B,a as W,d as f,D as M,C as E}from"./storyHelpers-D5HpvNsw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";const b=[{key:"contents",label:"콘텐츠",icon:"stack"},{key:"goal",label:"목표",icon:"streak"},{key:"main",label:"메인",icon:"house"},{key:"ai",label:"AI",icon:"heart"},{key:"shop",label:"쇼핑",icon:"shopping-cart-simple"}];function u({items:o,value:r,onChange:w}){return e.createElement(n,{style:[c.container,c.default]},o.map(l=>{const g=l.key===r,V=g?t.iconBrand:t.iconDisabled,P=g?t.textBrand:t.textSecondary;return e.createElement(z,{key:l.key,style:({pressed:D})=>[c.tab,D&&c.tabPressed],onPress:()=>w?.(l.key),accessibilityRole:"tab",accessibilityState:{selected:g},accessibilityLabel:l.label},l.icon?e.createElement(O,{name:l.icon,size:24,color:V}):e.createElement(n,{style:[c.iconPlaceholder,{backgroundColor:g?t.iconBrand:t.iconInactive}]}),e.createElement(i,{style:[c.label,{color:P,fontWeight:g?m.semibold:m.medium}]},l.label))}))}const c=N.create({container:{flexDirection:"row"},default:{height:60,backgroundColor:t.backgroundPrimary,borderTopWidth:1,borderTopColor:t.borderDefault,paddingBottom:a.xsmall},tab:{flex:1,alignItems:"center",justifyContent:"center",gap:a.xsmall,paddingTop:a.small},tabPressed:{opacity:A.pressOpacity},iconPlaceholder:{width:24,height:24,borderRadius:p.medium},label:{fontSize:s.xsmall}});u.__docgenInfo={description:"",methods:[],displayName:"BottomNavigation",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""}}};const U={title:"Navigation/BottomNavigation",component:u,argTypes:{value:{control:"select",options:["contents","goal","main","ai","shop"],description:"활성 탭 키"}},tags:["autodocs"]},T=({children:o})=>e.createElement(n,{style:{backgroundColor:t.backgroundSecondary,paddingTop:a["3xlarge"],borderRadius:p.medium,overflow:"hidden"}},o),k={render:()=>{const[o,r]=I.useState("main");return e.createElement(T,null,e.createElement(u,{items:b,value:o,onChange:r}))}},y={name:"바이오컴 탭바",render:()=>{const[o,r]=I.useState("main");return e.createElement(d,{title:"바이오컴 탭바",description:"콘텐츠 · 목표 · 메인 · AI · 쇼핑 — 바이오컴 서비스의 기본 하단 내비게이션입니다."},e.createElement(T,null,e.createElement(u,{items:b,value:o,onChange:r})),e.createElement(n,{style:{marginTop:a.medium}},e.createElement(i,{style:{fontSize:s.small,color:t.textSecondary}},"현재 활성 탭: ",e.createElement(i,{style:{fontWeight:m.bold,color:t.textBrand}},o))))}},v={name:"탭별 활성 상태",render:()=>e.createElement(d,{title:"탭별 활성 상태",description:"각 탭이 활성화된 상태를 한눈에 비교합니다."},e.createElement(B,{gap:a.xlarge},b.map(o=>e.createElement(B,{key:o.key,gap:a.small},e.createElement(W,null,`${o.label} 활성`),e.createElement(T,null,e.createElement(u,{items:b,value:o.key}))))))},C={name:"아이콘 매핑",render:()=>e.createElement(d,{title:"아이콘 매핑",description:"각 탭에 사용된 Icon 컴포넌트 이름입니다. 모두 기존 Icon 파운데이션에서 가져옵니다."},e.createElement(f,{title:"탭 → 아이콘 매핑",rows:[{label:"콘텐츠",value:"stack",token:'<Icon name="stack" />'},{label:"목표",value:"streak",token:'<Icon name="streak" />'},{label:"메인",value:"house",token:'<Icon name="house" />'},{label:"AI",value:"heart",token:'<Icon name="heart" />'},{label:"쇼핑",value:"shopping-cart-simple",token:'<Icon name="shopping-cart-simple" />'}]}),e.createElement(M,null),e.createElement(f,{title:"색상 토큰",rows:[{label:"활성 아이콘",value:t.iconBrand,token:"semanticColor.iconBrand"},{label:"비활성 아이콘",value:t.iconDisabled,token:"semanticColor.iconDisabled"},{label:"활성 텍스트",value:t.textBrand,token:"semanticColor.textBrand"},{label:"비활성 텍스트",value:t.textSecondary,token:"semanticColor.textSecondary"},{label:"배경",value:t.backgroundPrimary,token:"semanticColor.backgroundPrimary"},{label:"구분선",value:t.borderDefault,token:"semanticColor.borderDefault"}]}))},S={name:"디자인 스펙",render:()=>e.createElement(d,{title:"디자인 스펙",description:"BottomNavigation 컴포넌트의 레이아웃 토큰 명세입니다."},e.createElement(B,{gap:a.xlarge},e.createElement(f,{title:"컨테이너",rows:[{label:"높이",value:"60px",token:"—"},{label:"배경색",value:t.backgroundPrimary,token:"semanticColor.backgroundPrimary"},{label:"상단 테두리",value:t.borderDefault,token:"semanticColor.borderDefault"},{label:"하단 패딩",value:`${a.xsmall}px`,token:"spacing.xsmall"}]}),e.createElement(f,{title:"탭 아이템",rows:[{label:"아이콘 크기",value:"24px",token:"—"},{label:"라벨 폰트",value:`${s.xsmall}px`,token:"fontSize.xsmall"},{label:"아이콘-라벨 간격",value:`${a.xsmall}px`,token:"spacing.xsmall"},{label:"상단 패딩",value:`${a.small}px`,token:"spacing.small"}]})))},x={name:"실전 예시",render:()=>{const[o,r]=I.useState("main");return e.createElement(n,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"실전 예시",description:"앱 메인 화면 — 상단 AppBar, 중간 콘텐츠, 하단 BottomNavigation이 배치된 모바일 화면 시뮬레이션입니다."},e.createElement(n,{style:{maxWidth:375,padding:a.xlarge,backgroundColor:t.backgroundPrimary,borderRadius:p.large,borderWidth:1,borderColor:t.borderDefault}},e.createElement(n,{style:{width:"100%",height:56,flexDirection:"row",alignItems:"center",paddingHorizontal:a.large,borderBottomWidth:1,borderBottomColor:t.borderDefault}},e.createElement(i,{style:{fontSize:s.large,fontWeight:m.semibold,color:t.textPrimary}},"Biocom")),e.createElement(n,{style:{padding:a.large,gap:a.medium,minHeight:280}},e.createElement(n,{style:{backgroundColor:t.backgroundSecondary,borderRadius:p.medium,padding:a.large,gap:a.small}},e.createElement(i,{style:{fontSize:s.large,fontWeight:m.semibold,color:t.textPrimary}},"오늘의 건강 점수"),e.createElement(i,{style:{fontSize:s.xlarge,fontWeight:m.bold,color:t.textBrand}},"92점")),e.createElement(n,{style:{backgroundColor:t.backgroundSecondary,borderRadius:p.medium,padding:a.large}},e.createElement(i,{style:{fontSize:s.medium,color:t.textSecondary}},"식단 · 수면 · 운동 기록을 확인해보세요"))),e.createElement(u,{items:b,value:o,onChange:r}))))}},h={name:"사용 가이드",render:()=>e.createElement(d,{title:"사용 가이드",description:"개발자를 위한 BottomNavigation 컴포넌트 사용 예시입니다."},e.createElement(B,{gap:a.large},e.createElement(E,{title:"Import",code:"import { BottomNavigation, BIOCOM_TABS } from '@design-system/components/BottomNavigation';"}),e.createElement(E,{title:"바이오컴 기본 탭바 (가장 간단한 사용법)",code:`const [value, setValue] = useState('main');

<BottomNavigation
  items={BIOCOM_TABS}
  value={value}
  onChange={setValue}
/>`}),e.createElement(E,{title:"커스텀 탭 구성",code:`<BottomNavigation
  items={[
    { key: 'contents', label: '콘텐츠', icon: 'stack' },
    { key: 'goal', label: '목표', icon: 'streak' },
    { key: 'main', label: '메인', icon: 'house' },
    { key: 'ai', label: 'AI', icon: 'heart' },
    { key: 'shop', label: '쇼핑', icon: 'shopping-cart-simple' },
  ]}
  value={value}
  onChange={setValue}
/>`})))};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('main');
    return <PreviewContainer>
        <BottomNavigation items={BIOCOM_TABS} value={value} onChange={setValue} />
      </PreviewContainer>;
  }
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '바이오컴 탭바',
  render: () => {
    const [value, setValue] = useState('main');
    return <Section title="바이오컴 탭바" description="콘텐츠 · 목표 · 메인 · AI · 쇼핑 — 바이오컴 서비스의 기본 하단 내비게이션입니다.">
        <PreviewContainer>
          <BottomNavigation items={BIOCOM_TABS} value={value} onChange={setValue} />
        </PreviewContainer>
        <View style={{
        marginTop: spacing.medium
      }}>
          <Text style={{
          fontSize: fontSize.small,
          color: semanticColor.textSecondary
        }}>
            현재 활성 탭: <Text style={{
            fontWeight: fontWeight.bold,
            color: semanticColor.textBrand
          }}>{value}</Text>
          </Text>
        </View>
      </Section>;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '탭별 활성 상태',
  render: () => <Section title="탭별 활성 상태" description="각 탭이 활성화된 상태를 한눈에 비교합니다.">
      <Col gap={spacing.xlarge}>
        {BIOCOM_TABS.map(tab => <Col key={tab.key} gap={spacing.small}>
            <StateLabel>{\`\${tab.label} 활성\`}</StateLabel>
            <PreviewContainer>
              <BottomNavigation items={BIOCOM_TABS} value={tab.key} />
            </PreviewContainer>
          </Col>)}
      </Col>
    </Section>
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '아이콘 매핑',
  render: () => <Section title="아이콘 매핑" description="각 탭에 사용된 Icon 컴포넌트 이름입니다. 모두 기존 Icon 파운데이션에서 가져옵니다.">
      <SpecTable title="탭 → 아이콘 매핑" rows={[{
      label: '콘텐츠',
      value: 'stack',
      token: '<Icon name="stack" />'
    }, {
      label: '목표',
      value: 'streak',
      token: '<Icon name="streak" />'
    }, {
      label: '메인',
      value: 'house',
      token: '<Icon name="house" />'
    }, {
      label: 'AI',
      value: 'heart',
      token: '<Icon name="heart" />'
    }, {
      label: '쇼핑',
      value: 'shopping-cart-simple',
      token: '<Icon name="shopping-cart-simple" />'
    }]} />

      <Divider />

      <SpecTable title="색상 토큰" rows={[{
      label: '활성 아이콘',
      value: semanticColor.iconBrand,
      token: 'semanticColor.iconBrand'
    }, {
      label: '비활성 아이콘',
      value: semanticColor.iconDisabled,
      token: 'semanticColor.iconDisabled'
    }, {
      label: '활성 텍스트',
      value: semanticColor.textBrand,
      token: 'semanticColor.textBrand'
    }, {
      label: '비활성 텍스트',
      value: semanticColor.textSecondary,
      token: 'semanticColor.textSecondary'
    }, {
      label: '배경',
      value: semanticColor.backgroundPrimary,
      token: 'semanticColor.backgroundPrimary'
    }, {
      label: '구분선',
      value: semanticColor.borderDefault,
      token: 'semanticColor.borderDefault'
    }]} />
    </Section>
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <Section title="디자인 스펙" description="BottomNavigation 컴포넌트의 레이아웃 토큰 명세입니다.">
      <Col gap={spacing.xlarge}>
        <SpecTable title="컨테이너" rows={[{
        label: '높이',
        value: '60px',
        token: '—'
      }, {
        label: '배경색',
        value: semanticColor.backgroundPrimary,
        token: 'semanticColor.backgroundPrimary'
      }, {
        label: '상단 테두리',
        value: semanticColor.borderDefault,
        token: 'semanticColor.borderDefault'
      }, {
        label: '하단 패딩',
        value: \`\${spacing.xsmall}px\`,
        token: 'spacing.xsmall'
      }]} />
        <SpecTable title="탭 아이템" rows={[{
        label: '아이콘 크기',
        value: '24px',
        token: '—'
      }, {
        label: '라벨 폰트',
        value: \`\${fontSize.xsmall}px\`,
        token: 'fontSize.xsmall'
      }, {
        label: '아이콘-라벨 간격',
        value: \`\${spacing.xsmall}px\`,
        token: 'spacing.xsmall'
      }, {
        label: '상단 패딩',
        value: \`\${spacing.small}px\`,
        token: 'spacing.small'
      }]} />
      </Col>
    </Section>
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => {
    const [value, setValue] = useState('main');
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="앱 메인 화면 — 상단 AppBar, 중간 콘텐츠, 하단 BottomNavigation이 배치된 모바일 화면 시뮬레이션입니다.">
          <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: radius.large,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault
        }}>
            <View style={{
            width: '100%' as any,
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: spacing.large,
            borderBottomWidth: 1,
            borderBottomColor: semanticColor.borderDefault
          }}>
              <Text style={{
              fontSize: fontSize.large,
              fontWeight: fontWeight.semibold,
              color: semanticColor.textPrimary
            }}>
                Biocom
              </Text>
            </View>

            <View style={{
            padding: spacing.large,
            gap: spacing.medium,
            minHeight: 280
          }}>
              <View style={{
              backgroundColor: semanticColor.backgroundSecondary,
              borderRadius: radius.medium,
              padding: spacing.large,
              gap: spacing.small
            }}>
                <Text style={{
                fontSize: fontSize.large,
                fontWeight: fontWeight.semibold,
                color: semanticColor.textPrimary
              }}>
                  오늘의 건강 점수
                </Text>
                <Text style={{
                fontSize: fontSize.xlarge,
                fontWeight: fontWeight.bold,
                color: semanticColor.textBrand
              }}>
                  92점
                </Text>
              </View>
              <View style={{
              backgroundColor: semanticColor.backgroundSecondary,
              borderRadius: radius.medium,
              padding: spacing.large
            }}>
                <Text style={{
                fontSize: fontSize.medium,
                color: semanticColor.textSecondary
              }}>
                  식단 · 수면 · 운동 기록을 확인해보세요
                </Text>
              </View>
            </View>

            <BottomNavigation items={BIOCOM_TABS} value={value} onChange={setValue} />
          </View>
        </Section>
      </View>;
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <Section title="사용 가이드" description="개발자를 위한 BottomNavigation 컴포넌트 사용 예시입니다.">
      <Col gap={spacing.large}>
        <CodeBlock title="Import" code={\`import { BottomNavigation, BIOCOM_TABS } from '@design-system/components/BottomNavigation';\`} />

        <CodeBlock title="바이오컴 기본 탭바 (가장 간단한 사용법)" code={\`const [value, setValue] = useState('main');

<BottomNavigation
  items={BIOCOM_TABS}
  value={value}
  onChange={setValue}
/>\`} />

        <CodeBlock title="커스텀 탭 구성" code={\`<BottomNavigation
  items={[
    { key: 'contents', label: '콘텐츠', icon: 'stack' },
    { key: 'goal', label: '목표', icon: 'streak' },
    { key: 'main', label: '메인', icon: 'house' },
    { key: 'ai', label: 'AI', icon: 'heart' },
    { key: 'shop', label: '쇼핑', icon: 'shopping-cart-simple' },
  ]}
  value={value}
  onChange={setValue}
/>\`} />
      </Col>
    </Section>
}`,...h.parameters?.docs?.source}}};const F=["Playground","BiocomBottomNavigation","ActiveStates","IconMapping","DesignSpec","InContext","Usage"];export{v as ActiveStates,y as BiocomBottomNavigation,S as DesignSpec,C as IconMapping,x as InContext,k as Playground,h as Usage,F as __namedExportsOrder,U as default};
