import{R as e,V as t,s as O}from"./iframe-CExKz_YG.js";import{B as x}from"./Button-BZHIBGqV.js";import{d as z,j as B,c as r,s as a,T as g,a as b,r as c}from"./theme-DRANkRo4.js";import{S as p,C as l,a as n,D as T,b as P,R as L,d as u}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZaAZL7W.js";const F=({primary:m,secondary:s,size:i,primaryFlex:h=1})=>e.createElement(t,{style:R.row},s&&e.createElement(t,{style:R.flex1},e.createElement(x,{...s,variant:"outlined",color:"assistive",size:i})),e.createElement(t,{style:{flex:h}},e.createElement(x,{...m,variant:"solid",color:"primary",size:i})));function o({variant:m="strong",primary:s,secondary:i,divider:h=!0,transparent:V=!1,safeAreaBottom:N=0}){const k={...R.container,paddingBottom:a.medium+N,backgroundColor:V?"transparent":z.backgroundPrimary,borderTopWidth:h?1:0};switch(m){case"strong":return e.createElement(t,{style:k},e.createElement(x,{...s,variant:"solid",color:"primary",size:"large"}));case"neutral":return e.createElement(t,{style:k},e.createElement(F,{primary:s,secondary:i,size:"large",primaryFlex:i?2:1}));case"compact":return e.createElement(t,{style:k},e.createElement(F,{primary:s,secondary:i,size:"medium"}));default:return null}}const R=O.create({container:{paddingHorizontal:B.padding,paddingTop:a.medium,gap:B.gap,borderTopColor:r[96]},row:{flexDirection:"row",gap:B.gap},flex1:{flex:1}});o.__docgenInfo={description:"",methods:[],displayName:"ActionArea",props:{variant:{required:!1,tsType:{name:"union",raw:"'strong' | 'neutral' | 'compact'",elements:[{name:"literal",value:"'strong'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'compact'"}]},description:"레이아웃 변형",defaultValue:{value:"'strong'",computed:!1}},primary:{required:!0,tsType:{name:"intersection",raw:`Omit<ButtonProps, 'variant' | 'color' | 'size'> & {
  label: string;
}`,elements:[{name:"Omit",elements:[{name:"ButtonProps"},{name:"union",raw:"'variant' | 'color' | 'size'",elements:[{name:"literal",value:"'variant'"},{name:"literal",value:"'color'"},{name:"literal",value:"'size'"}]}],raw:"Omit<ButtonProps, 'variant' | 'color' | 'size'>"},{name:"signature",type:"object",raw:`{
  label: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}}]}}]},description:"메인(Primary) 버튼 props"},secondary:{required:!1,tsType:{name:"intersection",raw:`Omit<ButtonProps, 'variant' | 'color' | 'size'> & {
  label: string;
}`,elements:[{name:"Omit",elements:[{name:"ButtonProps"},{name:"union",raw:"'variant' | 'color' | 'size'",elements:[{name:"literal",value:"'variant'"},{name:"literal",value:"'color'"},{name:"literal",value:"'size'"}]}],raw:"Omit<ButtonProps, 'variant' | 'color' | 'size'>"},{name:"signature",type:"object",raw:`{
  label: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}}]}}]},description:"보조(Secondary) 버튼 props — neutral, compact에서 사용"},divider:{required:!1,tsType:{name:"boolean"},description:"상단 구분선 표시 여부",defaultValue:{value:"true",computed:!1}},transparent:{required:!1,tsType:{name:"boolean"},description:"배경색 투명 여부 (기본: 흰색)",defaultValue:{value:"false",computed:!1}},safeAreaBottom:{required:!1,tsType:{name:"number"},description:`하단 Safe Area 여백 (px)
react-native-safe-area-context의 useSafeAreaInsets().bottom 값을 전달하세요.
기본값: 0`,defaultValue:{value:"0",computed:!1}}}};const d=34,A=({children:m,safeArea:s=!0,width:i=400})=>e.createElement(t,{style:{maxWidth:i,borderRadius:c.large,overflow:"hidden",borderWidth:1,borderColor:r[95]}},e.createElement(t,{style:{height:80,backgroundColor:r[99],justifyContent:"center",alignItems:"center"}},e.createElement(g,{style:{fontSize:b.xsmall,color:r[70]}},"화면 콘텐츠 영역")),m,s&&e.createElement(t,{style:{height:d,backgroundColor:r[99],alignItems:"center",justifyContent:"center"}},e.createElement(t,{style:{width:120,height:4,borderRadius:2,backgroundColor:r[90]}}))),W={title:"Navigation/ActionArea",component:o,argTypes:{variant:{control:"select",options:["strong","neutral","compact"],description:"레이아웃 변형"},divider:{control:"boolean",description:"상단 구분선"},transparent:{control:"boolean",description:"투명 배경"},safeAreaBottom:{control:{type:"range",min:0,max:48,step:4},description:"Safe Area 하단 여백 (px)"}},decorators:[m=>e.createElement(t,{style:{maxWidth:400,borderRadius:c.large,overflow:"hidden",borderWidth:1,borderColor:r[95]}},e.createElement(t,{style:{height:200,backgroundColor:r[99],justifyContent:"center",alignItems:"center"}},e.createElement(g,{style:{fontSize:b.small,color:r[70]}},"화면 콘텐츠 영역")),e.createElement(m,null))],tags:["autodocs"]},v={args:{variant:"strong",primary:{label:"확인"},secondary:{label:"취소"},divider:!0,transparent:!1,safeAreaBottom:d}},f={name:"모든 변형",decorators:[],render:()=>e.createElement(p,{title:"모든 변형",description:"ActionArea는 화면 하단에서 사용자 액션을 유도하는 영역입니다. 3가지 레이아웃 변형을 제공합니다."},e.createElement(t,{style:{gap:a["3xlarge"]}},e.createElement(l,{gap:a.small},e.createElement(n,null,"STRONG — CTA 강조형"),e.createElement(g,{style:{fontSize:b.xsmall,color:r[50],marginBottom:a.small}},"메인 액션 하나만 크게 노출합니다. 결제, 가입 완료 등 핵심 전환 화면에 사용합니다."),e.createElement(A,null,e.createElement(o,{variant:"strong",primary:{label:"결제하기",onPress:()=>{}},safeAreaBottom:d}))),e.createElement(T,null),e.createElement(l,{gap:a.small},e.createElement(n,null,"NEUTRAL — 보조/메인 복합"),e.createElement(g,{style:{fontSize:b.xsmall,color:r[50],marginBottom:a.small}},"보조 버튼과 메인 버튼을 함께 노출합니다. 메인 버튼이 2:1 비율로 강조됩니다."),e.createElement(A,null,e.createElement(o,{variant:"neutral",primary:{label:"다음",onPress:()=>{}},secondary:{label:"이전",onPress:()=>{}},safeAreaBottom:d}))),e.createElement(T,null),e.createElement(l,{gap:a.small},e.createElement(n,null,"COMPACT — 작은 크기 복합"),e.createElement(g,{style:{fontSize:b.xsmall,color:r[50],marginBottom:a.small}},"Medium 사이즈 버튼으로 공간을 절약합니다. 모달, 바텀시트 등에 적합합니다."),e.createElement(A,null,e.createElement(o,{variant:"compact",primary:{label:"적용",onPress:()=>{}},secondary:{label:"초기화",onPress:()=>{}},safeAreaBottom:d})))))},y={name:"Safe Area 비교",decorators:[],render:()=>e.createElement(p,{title:"Safe Area 비교",description:"safeAreaBottom 적용 전/후를 비교합니다. 실제 기기에서는 useSafeAreaInsets().bottom 값을 전달하세요."},e.createElement(L,{gap:a["2xlarge"],wrap:!0,align:"flex-start"},e.createElement(l,{gap:a.small},e.createElement(n,null,"safeAreaBottom: 0"),e.createElement(A,{safeArea:!1},e.createElement(o,{variant:"strong",primary:{label:"확인"},safeAreaBottom:0}))),e.createElement(l,{gap:a.small},e.createElement(n,null,"safeAreaBottom: 34 (iPhone)"),e.createElement(A,null,e.createElement(o,{variant:"strong",primary:{label:"확인"},safeAreaBottom:d})))))},E={name:"상태",decorators:[],render:()=>e.createElement(p,{title:"버튼 상태",description:"ActionArea 내 버튼의 활성/비활성 상태를 확인합니다."},e.createElement(L,{gap:a["2xlarge"],wrap:!0,align:"flex-start"},e.createElement(l,{gap:a.small},e.createElement(n,null,"기본"),e.createElement(t,{style:{width:320,backgroundColor:r[99],borderRadius:c.large,overflow:"hidden"}},e.createElement(o,{variant:"neutral",primary:{label:"확인"},secondary:{label:"취소"},divider:!1}))),e.createElement(l,{gap:a.small},e.createElement(n,null,"메인 버튼 비활성화"),e.createElement(t,{style:{width:320,backgroundColor:r[99],borderRadius:c.large,overflow:"hidden"}},e.createElement(o,{variant:"neutral",primary:{label:"확인",disabled:!0},secondary:{label:"취소"},divider:!1}))),e.createElement(l,{gap:a.small},e.createElement(n,null,"메인 버튼 로딩"),e.createElement(t,{style:{width:320,backgroundColor:r[99],borderRadius:c.large,overflow:"hidden"}},e.createElement(o,{variant:"neutral",primary:{label:"확인",loading:!0},secondary:{label:"취소"},divider:!1})))))},S={name:"옵션",decorators:[],render:()=>e.createElement(p,{title:"옵션",description:"구분선 표시 및 투명 배경 옵션을 확인합니다."},e.createElement(L,{gap:a["2xlarge"],wrap:!0,align:"flex-start"},e.createElement(l,{gap:a.small},e.createElement(n,null,"구분선 있음 (기본)"),e.createElement(t,{style:{width:320,backgroundColor:r[99],borderRadius:c.large,overflow:"hidden"}},e.createElement(t,{style:{height:40}}),e.createElement(o,{variant:"strong",primary:{label:"확인"},divider:!0}))),e.createElement(l,{gap:a.small},e.createElement(n,null,"구분선 없음"),e.createElement(t,{style:{width:320,backgroundColor:r[99],borderRadius:c.large,overflow:"hidden"}},e.createElement(t,{style:{height:40}}),e.createElement(o,{variant:"strong",primary:{label:"확인"},divider:!1}))),e.createElement(l,{gap:a.small},e.createElement(n,null,"투명 배경"),e.createElement(t,{style:{width:320,backgroundColor:r[97],borderRadius:c.large,overflow:"hidden"}},e.createElement(t,{style:{height:40}}),e.createElement(o,{variant:"strong",primary:{label:"확인"},transparent:!0})))))},w={name:"디자인 스펙",decorators:[],render:()=>e.createElement(p,{title:"디자인 스펙",description:"ActionArea 컴포넌트의 레이아웃 토큰 명세입니다."},e.createElement(l,{gap:a["2xlarge"]},e.createElement(P,{title:"레이아웃",rows:[{label:"좌우 패딩",value:"16px",token:"actionAreaToken.padding (spacing.large)"},{label:"상단 패딩",value:"12px",token:"spacing.medium"},{label:"하단 패딩",value:"12px + safeAreaBottom",token:"spacing.medium + safeAreaBottom"},{label:"버튼 간격",value:"8px",token:"actionAreaToken.gap (spacing.small)"},{label:"구분선 색상",value:r[96],token:"coolNeutral[96]"},{label:"배경색",value:"#FFFFFF",token:"semanticColor.backgroundPrimary"}]}),e.createElement(P,{title:"변형별 버튼 구성",rows:[{label:"Strong",value:"Large Solid Primary ×1",token:"메인 CTA 단독"},{label:"Neutral",value:"Large ×2 (보조 1 : 메인 2)",token:"복합 액션"},{label:"Compact",value:"Medium ×2 (1:1)",token:"작은 복합 액션"}]})))},C={name:"사용 가이드",decorators:[],render:()=>e.createElement(p,{title:"사용 가이드",description:"개발자를 위한 ActionArea 컴포넌트 사용 예시입니다."},e.createElement(l,{gap:a.large},e.createElement(u,{title:"Import",code:"import { ActionArea } from '@design-system/components/ActionArea';"}),e.createElement(u,{title:"Safe Area 적용 (react-native-safe-area-context)",code:`import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MyScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      {/* 화면 콘텐츠 */}
      <ActionArea
        variant="strong"
        primary={{ label: '결제하기', onPress: handlePay }}
        safeAreaBottom={insets.bottom}
      />
    </View>
  );
}`}),e.createElement(u,{title:"Strong — CTA 강조형",code:`<ActionArea
  variant="strong"
  primary={{ label: '결제하기', onPress: handlePay }}
  safeAreaBottom={insets.bottom}
/>`}),e.createElement(u,{title:"Neutral — 보조/메인 복합",code:`<ActionArea
  variant="neutral"
  primary={{ label: '다음', onPress: handleNext }}
  secondary={{ label: '이전', onPress: handleBack }}
  safeAreaBottom={insets.bottom}
/>`}),e.createElement(u,{title:"Compact — 모달/바텀시트용",code:`<ActionArea
  variant="compact"
  primary={{ label: '적용', onPress: handleApply }}
  secondary={{ label: '초기화', onPress: handleReset }}
/>`}),e.createElement(T,null),e.createElement(l,{gap:a.small},e.createElement(n,null,"Props"),e.createElement(P,{rows:[{label:"variant",value:"'strong' | 'neutral' | 'compact'",token:"레이아웃 변형 (기본: 'strong')"},{label:"primary",value:"{ label, onPress, ... }",token:"메인 버튼 (필수)"},{label:"secondary",value:"{ label, onPress, ... }",token:"보조 버튼"},{label:"divider",value:"boolean",token:"상단 구분선 (기본: true)"},{label:"transparent",value:"boolean",token:"투명 배경 (기본: false)"},{label:"safeAreaBottom",value:"number",token:"Safe Area 하단 여백 (기본: 0)"}]}))))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'strong',
    primary: {
      label: '확인'
    },
    secondary: {
      label: '취소'
    },
    divider: true,
    transparent: false,
    safeAreaBottom: SAFE_AREA_BOTTOM
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '모든 변형',
  decorators: [],
  render: () => <Section title="모든 변형" description="ActionArea는 화면 하단에서 사용자 액션을 유도하는 영역입니다. 3가지 레이아웃 변형을 제공합니다.">
      <View style={{
      gap: spacing['3xlarge']
    }}>
        {/* Strong */}
        <Col gap={spacing.small}>
          <StateLabel>STRONG — CTA 강조형</StateLabel>
          <Text style={{
          fontSize: fontSize.xsmall,
          color: coolNeutral[50],
          marginBottom: spacing.small
        }}>
            메인 액션 하나만 크게 노출합니다. 결제, 가입 완료 등 핵심 전환 화면에 사용합니다.
          </Text>
          <DeviceFrame>
            <ActionArea variant="strong" primary={{
            label: '결제하기',
            onPress: () => {}
          }} safeAreaBottom={SAFE_AREA_BOTTOM} />
          </DeviceFrame>
        </Col>

        <Divider />

        {/* Neutral */}
        <Col gap={spacing.small}>
          <StateLabel>NEUTRAL — 보조/메인 복합</StateLabel>
          <Text style={{
          fontSize: fontSize.xsmall,
          color: coolNeutral[50],
          marginBottom: spacing.small
        }}>
            보조 버튼과 메인 버튼을 함께 노출합니다. 메인 버튼이 2:1 비율로 강조됩니다.
          </Text>
          <DeviceFrame>
            <ActionArea variant="neutral" primary={{
            label: '다음',
            onPress: () => {}
          }} secondary={{
            label: '이전',
            onPress: () => {}
          }} safeAreaBottom={SAFE_AREA_BOTTOM} />
          </DeviceFrame>
        </Col>

        <Divider />

        {/* Compact */}
        <Col gap={spacing.small}>
          <StateLabel>COMPACT — 작은 크기 복합</StateLabel>
          <Text style={{
          fontSize: fontSize.xsmall,
          color: coolNeutral[50],
          marginBottom: spacing.small
        }}>
            Medium 사이즈 버튼으로 공간을 절약합니다. 모달, 바텀시트 등에 적합합니다.
          </Text>
          <DeviceFrame>
            <ActionArea variant="compact" primary={{
            label: '적용',
            onPress: () => {}
          }} secondary={{
            label: '초기화',
            onPress: () => {}
          }} safeAreaBottom={SAFE_AREA_BOTTOM} />
          </DeviceFrame>
        </Col>
      </View>
    </Section>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Safe Area 비교',
  decorators: [],
  render: () => <Section title="Safe Area 비교" description="safeAreaBottom 적용 전/후를 비교합니다. 실제 기기에서는 useSafeAreaInsets().bottom 값을 전달하세요.">
      <Row gap={spacing['2xlarge']} wrap align="flex-start">
        <Col gap={spacing.small}>
          <StateLabel>safeAreaBottom: 0</StateLabel>
          <DeviceFrame safeArea={false}>
            <ActionArea variant="strong" primary={{
            label: '확인'
          }} safeAreaBottom={0} />
          </DeviceFrame>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>safeAreaBottom: 34 (iPhone)</StateLabel>
          <DeviceFrame>
            <ActionArea variant="strong" primary={{
            label: '확인'
          }} safeAreaBottom={SAFE_AREA_BOTTOM} />
          </DeviceFrame>
        </Col>
      </Row>
    </Section>
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '상태',
  decorators: [],
  render: () => <Section title="버튼 상태" description="ActionArea 내 버튼의 활성/비활성 상태를 확인합니다.">
      <Row gap={spacing['2xlarge']} wrap align="flex-start">
        <Col gap={spacing.small}>
          <StateLabel>기본</StateLabel>
          <View style={{
          width: 320,
          backgroundColor: coolNeutral[99],
          borderRadius: radius.large,
          overflow: 'hidden'
        }}>
            <ActionArea variant="neutral" primary={{
            label: '확인'
          }} secondary={{
            label: '취소'
          }} divider={false} />
          </View>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>메인 버튼 비활성화</StateLabel>
          <View style={{
          width: 320,
          backgroundColor: coolNeutral[99],
          borderRadius: radius.large,
          overflow: 'hidden'
        }}>
            <ActionArea variant="neutral" primary={{
            label: '확인',
            disabled: true
          }} secondary={{
            label: '취소'
          }} divider={false} />
          </View>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>메인 버튼 로딩</StateLabel>
          <View style={{
          width: 320,
          backgroundColor: coolNeutral[99],
          borderRadius: radius.large,
          overflow: 'hidden'
        }}>
            <ActionArea variant="neutral" primary={{
            label: '확인',
            loading: true
          }} secondary={{
            label: '취소'
          }} divider={false} />
          </View>
        </Col>
      </Row>
    </Section>
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '옵션',
  decorators: [],
  render: () => <Section title="옵션" description="구분선 표시 및 투명 배경 옵션을 확인합니다.">
      <Row gap={spacing['2xlarge']} wrap align="flex-start">
        <Col gap={spacing.small}>
          <StateLabel>구분선 있음 (기본)</StateLabel>
          <View style={{
          width: 320,
          backgroundColor: coolNeutral[99],
          borderRadius: radius.large,
          overflow: 'hidden'
        }}>
            <View style={{
            height: 40
          }} />
            <ActionArea variant="strong" primary={{
            label: '확인'
          }} divider={true} />
          </View>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>구분선 없음</StateLabel>
          <View style={{
          width: 320,
          backgroundColor: coolNeutral[99],
          borderRadius: radius.large,
          overflow: 'hidden'
        }}>
            <View style={{
            height: 40
          }} />
            <ActionArea variant="strong" primary={{
            label: '확인'
          }} divider={false} />
          </View>
        </Col>
        <Col gap={spacing.small}>
          <StateLabel>투명 배경</StateLabel>
          <View style={{
          width: 320,
          backgroundColor: coolNeutral[97],
          borderRadius: radius.large,
          overflow: 'hidden'
        }}>
            <View style={{
            height: 40
          }} />
            <ActionArea variant="strong" primary={{
            label: '확인'
          }} transparent={true} />
          </View>
        </Col>
      </Row>
    </Section>
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  decorators: [],
  render: () => <Section title="디자인 스펙" description="ActionArea 컴포넌트의 레이아웃 토큰 명세입니다.">
      <Col gap={spacing['2xlarge']}>
        <SpecTable title="레이아웃" rows={[{
        label: '좌우 패딩',
        value: '16px',
        token: 'actionAreaToken.padding (spacing.large)'
      }, {
        label: '상단 패딩',
        value: '12px',
        token: 'spacing.medium'
      }, {
        label: '하단 패딩',
        value: '12px + safeAreaBottom',
        token: 'spacing.medium + safeAreaBottom'
      }, {
        label: '버튼 간격',
        value: '8px',
        token: 'actionAreaToken.gap (spacing.small)'
      }, {
        label: '구분선 색상',
        value: coolNeutral[96],
        token: 'coolNeutral[96]'
      }, {
        label: '배경색',
        value: '#FFFFFF',
        token: 'semanticColor.backgroundPrimary'
      }]} />
        <SpecTable title="변형별 버튼 구성" rows={[{
        label: 'Strong',
        value: 'Large Solid Primary ×1',
        token: '메인 CTA 단독'
      }, {
        label: 'Neutral',
        value: 'Large ×2 (보조 1 : 메인 2)',
        token: '복합 액션'
      }, {
        label: 'Compact',
        value: 'Medium ×2 (1:1)',
        token: '작은 복합 액션'
      }]} />
      </Col>
    </Section>
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  decorators: [],
  render: () => <Section title="사용 가이드" description="개발자를 위한 ActionArea 컴포넌트 사용 예시입니다.">
      <Col gap={spacing.large}>
        <CodeBlock title="Import" code={\`import { ActionArea } from '@design-system/components/ActionArea';\`} />
        <CodeBlock title="Safe Area 적용 (react-native-safe-area-context)" code={\`import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MyScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      {/* 화면 콘텐츠 */}
      <ActionArea
        variant="strong"
        primary={{ label: '결제하기', onPress: handlePay }}
        safeAreaBottom={insets.bottom}
      />
    </View>
  );
}\`} />
        <CodeBlock title="Strong — CTA 강조형" code={\`<ActionArea
  variant="strong"
  primary={{ label: '결제하기', onPress: handlePay }}
  safeAreaBottom={insets.bottom}
/>\`} />
        <CodeBlock title="Neutral — 보조/메인 복합" code={\`<ActionArea
  variant="neutral"
  primary={{ label: '다음', onPress: handleNext }}
  secondary={{ label: '이전', onPress: handleBack }}
  safeAreaBottom={insets.bottom}
/>\`} />
        <CodeBlock title="Compact — 모달/바텀시트용" code={\`<ActionArea
  variant="compact"
  primary={{ label: '적용', onPress: handleApply }}
  secondary={{ label: '초기화', onPress: handleReset }}
/>\`} />

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>Props</StateLabel>
          <SpecTable rows={[{
          label: 'variant',
          value: "'strong' | 'neutral' | 'compact'",
          token: "레이아웃 변형 (기본: 'strong')"
        }, {
          label: 'primary',
          value: '{ label, onPress, ... }',
          token: '메인 버튼 (필수)'
        }, {
          label: 'secondary',
          value: '{ label, onPress, ... }',
          token: '보조 버튼'
        }, {
          label: 'divider',
          value: 'boolean',
          token: '상단 구분선 (기본: true)'
        }, {
          label: 'transparent',
          value: 'boolean',
          token: '투명 배경 (기본: false)'
        }, {
          label: 'safeAreaBottom',
          value: 'number',
          token: 'Safe Area 하단 여백 (기본: 0)'
        }]} />
        </Col>
      </Col>
    </Section>
}`,...C.parameters?.docs?.source}}};const U=["Playground","AllVariants","SafeAreaComparison","States","Options","DesignSpec","Usage"];export{f as AllVariants,w as DesignSpec,S as Options,v as Playground,y as SafeAreaComparison,E as States,C as Usage,U as __namedExportsOrder,W as default};
