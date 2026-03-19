import{R as e,V as k,s as O,r as I}from"./iframe-CExKz_YG.js";import{M,d as a,c as x,T as S,f as B,a as h,r as E,i as _,s as n}from"./theme-DRANkRo4.js";import{I as $}from"./Icon-CTnW1Y2_.js";import{S as i,C as g,a as z,b as v,D as W,d as C}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";const y=[{key:"contents",label:"콘텐츠",icon:"stack"},{key:"goal",label:"목표",icon:"streak"},{key:"main",label:"메인",icon:"house"},{key:"ai",label:"AI",icon:"heart"},{key:"shop",label:"쇼핑",icon:"shopping-cart-simple"}];function c({tabs:t,activeTab:l,onTabPress:P}){return e.createElement(k,{style:[r.container,r.default]},t.map(o=>{const s=o.key===l,A=s?a.iconBrand:a.iconDisabled,w=s?a.textBrand:a.textSecondary;return e.createElement(M,{key:o.key,style:({pressed:D})=>[r.tab,D&&r.tabPressed],onPress:()=>P?.(o.key),accessibilityRole:"tab",accessibilityState:{selected:s},accessibilityLabel:o.label},o.icon?e.createElement($,{name:o.icon,size:24,color:A}):e.createElement(k,{style:[r.iconPlaceholder,{backgroundColor:s?a.iconBrand:x[90]}]}),e.createElement(S,{style:[r.label,{color:w,fontWeight:s?B.semibold:B.medium}]},o.label))}))}const r=O.create({container:{flexDirection:"row"},default:{height:60,backgroundColor:a.backgroundPrimary,borderTopWidth:1,borderTopColor:a.borderDefault,paddingBottom:n.xsmall},tab:{flex:1,alignItems:"center",justifyContent:"center",gap:n.xsmall,paddingTop:n.small},tabPressed:{opacity:_.pressOpacity},iconPlaceholder:{width:24,height:24,borderRadius:E.medium},label:{fontSize:h.xsmall}});c.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},activeTab:{required:!0,tsType:{name:"string"},description:""},onTabPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""}}};const U={title:"Navigation/TabBar",component:c,argTypes:{activeTab:{control:"select",options:["contents","goal","main","ai","shop"],description:"활성 탭 키"}},tags:["autodocs"]},f=({children:t})=>e.createElement(k,{style:{backgroundColor:x[99],paddingTop:n["3xlarge"],borderRadius:E.medium,overflow:"hidden"}},t),m={render:()=>{const[t,l]=I.useState("main");return e.createElement(f,null,e.createElement(c,{tabs:y,activeTab:t,onTabPress:l}))}},b={name:"바이오컴 탭바",render:()=>{const[t,l]=I.useState("main");return e.createElement(i,{title:"바이오컴 탭바",description:"콘텐츠 · 목표 · 메인 · AI · 쇼핑 — 바이오컴 서비스의 기본 하단 내비게이션입니다."},e.createElement(f,null,e.createElement(c,{tabs:y,activeTab:t,onTabPress:l})),e.createElement(k,{style:{marginTop:n.medium}},e.createElement(S,{style:{fontSize:h.small,color:x[50]}},"현재 활성 탭: ",e.createElement(S,{style:{fontWeight:B.bold,color:a.textBrand}},t))))}},d={name:"탭별 활성 상태",render:()=>e.createElement(i,{title:"탭별 활성 상태",description:"각 탭이 활성화된 상태를 한눈에 비교합니다."},e.createElement(g,{gap:n.xlarge},y.map(t=>e.createElement(g,{key:t.key,gap:n.small},e.createElement(z,null,`${t.label} 활성`),e.createElement(f,null,e.createElement(c,{tabs:y,activeTab:t.key}))))))},p={name:"아이콘 매핑",render:()=>e.createElement(i,{title:"아이콘 매핑",description:"각 탭에 사용된 Icon 컴포넌트 이름입니다. 모두 기존 Icon 파운데이션에서 가져옵니다."},e.createElement(v,{title:"탭 → 아이콘 매핑",rows:[{label:"콘텐츠",value:"stack",token:'<Icon name="stack" />'},{label:"목표",value:"streak",token:'<Icon name="streak" />'},{label:"메인",value:"house",token:'<Icon name="house" />'},{label:"AI",value:"heart",token:'<Icon name="heart" />'},{label:"쇼핑",value:"shopping-cart-simple",token:'<Icon name="shopping-cart-simple" />'}]}),e.createElement(W,null),e.createElement(v,{title:"색상 토큰",rows:[{label:"활성 아이콘",value:a.iconBrand,token:"semanticColor.iconBrand"},{label:"비활성 아이콘",value:a.iconDisabled,token:"semanticColor.iconDisabled"},{label:"활성 텍스트",value:a.textBrand,token:"semanticColor.textBrand"},{label:"비활성 텍스트",value:a.textSecondary,token:"semanticColor.textSecondary"},{label:"배경",value:a.backgroundPrimary,token:"semanticColor.backgroundPrimary"},{label:"구분선",value:a.borderDefault,token:"semanticColor.borderDefault"}]}))},u={name:"디자인 스펙",render:()=>e.createElement(i,{title:"디자인 스펙",description:"TabBar 컴포넌트의 레이아웃 토큰 명세입니다."},e.createElement(g,{gap:n.xlarge},e.createElement(v,{title:"컨테이너",rows:[{label:"높이",value:"60px",token:"—"},{label:"배경색",value:a.backgroundPrimary,token:"semanticColor.backgroundPrimary"},{label:"상단 테두리",value:a.borderDefault,token:"semanticColor.borderDefault"},{label:"하단 패딩",value:`${n.xsmall}px`,token:"spacing.xsmall"}]}),e.createElement(v,{title:"탭 아이템",rows:[{label:"아이콘 크기",value:"24px",token:"—"},{label:"라벨 폰트",value:`${h.xsmall}px`,token:"fontSize.xsmall"},{label:"아이콘-라벨 간격",value:`${n.xsmall}px`,token:"spacing.xsmall"},{label:"상단 패딩",value:`${n.small}px`,token:"spacing.small"}]})))},T={name:"사용 가이드",render:()=>e.createElement(i,{title:"사용 가이드",description:"개발자를 위한 TabBar 컴포넌트 사용 예시입니다."},e.createElement(g,{gap:n.large},e.createElement(C,{title:"Import",code:"import { TabBar, BIOCOM_TABS } from '@design-system/components/TabBar';"}),e.createElement(C,{title:"바이오컴 기본 탭바 (가장 간단한 사용법)",code:`const [activeTab, setActiveTab] = useState('main');

<TabBar
  tabs={BIOCOM_TABS}
  activeTab={activeTab}
  onTabPress={setActiveTab}
/>`}),e.createElement(C,{title:"커스텀 탭 구성",code:`<TabBar
  tabs={[
    { key: 'contents', label: '콘텐츠', icon: 'stack' },
    { key: 'goal', label: '목표', icon: 'streak' },
    { key: 'main', label: '메인', icon: 'house' },
    { key: 'ai', label: 'AI', icon: 'heart' },
    { key: 'shop', label: '쇼핑', icon: 'shopping-cart-simple' },
  ]}
  activeTab={activeTab}
  onTabPress={setActiveTab}
/>`})))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('main');
    return <PreviewContainer>
        <TabBar tabs={BIOCOM_TABS} activeTab={activeTab} onTabPress={setActiveTab} />
      </PreviewContainer>;
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '바이오컴 탭바',
  render: () => {
    const [activeTab, setActiveTab] = useState('main');
    return <Section title="바이오컴 탭바" description="콘텐츠 · 목표 · 메인 · AI · 쇼핑 — 바이오컴 서비스의 기본 하단 내비게이션입니다.">
        <PreviewContainer>
          <TabBar tabs={BIOCOM_TABS} activeTab={activeTab} onTabPress={setActiveTab} />
        </PreviewContainer>
        <View style={{
        marginTop: spacing.medium
      }}>
          <Text style={{
          fontSize: fontSize.small,
          color: coolNeutral[50]
        }}>
            현재 활성 탭: <Text style={{
            fontWeight: fontWeight.bold,
            color: semanticColor.textBrand
          }}>{activeTab}</Text>
          </Text>
        </View>
      </Section>;
  }
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '탭별 활성 상태',
  render: () => <Section title="탭별 활성 상태" description="각 탭이 활성화된 상태를 한눈에 비교합니다.">
      <Col gap={spacing.xlarge}>
        {BIOCOM_TABS.map(tab => <Col key={tab.key} gap={spacing.small}>
            <StateLabel>{\`\${tab.label} 활성\`}</StateLabel>
            <PreviewContainer>
              <TabBar tabs={BIOCOM_TABS} activeTab={tab.key} />
            </PreviewContainer>
          </Col>)}
      </Col>
    </Section>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <Section title="디자인 스펙" description="TabBar 컴포넌트의 레이아웃 토큰 명세입니다.">
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
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <Section title="사용 가이드" description="개발자를 위한 TabBar 컴포넌트 사용 예시입니다.">
      <Col gap={spacing.large}>
        <CodeBlock title="Import" code={\`import { TabBar, BIOCOM_TABS } from '@design-system/components/TabBar';\`} />

        <CodeBlock title="바이오컴 기본 탭바 (가장 간단한 사용법)" code={\`const [activeTab, setActiveTab] = useState('main');

<TabBar
  tabs={BIOCOM_TABS}
  activeTab={activeTab}
  onTabPress={setActiveTab}
/>\`} />

        <CodeBlock title="커스텀 탭 구성" code={\`<TabBar
  tabs={[
    { key: 'contents', label: '콘텐츠', icon: 'stack' },
    { key: 'goal', label: '목표', icon: 'streak' },
    { key: 'main', label: '메인', icon: 'house' },
    { key: 'ai', label: 'AI', icon: 'heart' },
    { key: 'shop', label: '쇼핑', icon: 'shopping-cart-simple' },
  ]}
  activeTab={activeTab}
  onTabPress={setActiveTab}
/>\`} />
      </Col>
    </Section>
}`,...T.parameters?.docs?.source}}};const j=["Playground","BiocomTabBar","ActiveStates","IconMapping","DesignSpec","Usage"];export{d as ActiveStates,b as BiocomTabBar,u as DesignSpec,p as IconMapping,m as Playground,T as Usage,j as __namedExportsOrder,U as default};
