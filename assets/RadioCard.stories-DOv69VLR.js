import{R as e,V as r,r as u,s as L}from"./iframe-rdsxNJ7l.js";import{s as l,M as $,c as t,T as w,a as s,f as z,j as A,r as P}from"./theme-KAxj7l-q.js";import{S as p,D as B,C as G}from"./storyHelpers-D5HpvNsw.js";import{T}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";const q=u.createContext({value:null,onChange:()=>{},name:"",groupDisabled:!1});function c({value:o,onChange:n,name:g,disabled:k=!1,gap:V=l.small,children:D}){return e.createElement(q.Provider,{value:{value:o,onChange:n,name:g,groupDisabled:k}},e.createElement(r,{style:{gap:V},accessibilityRole:"radiogroup",accessibilityLabel:g},D))}const W=22,I=10;function a({value:o,label:n,description:g,disabled:k=!1}){const{value:V,onChange:D,groupDisabled:H}=u.useContext(q),m=V===o,i=H||k,N=i?t.borderDefault:m?t.borderFocus:t.borderDefault,O=m&&!i?2:1;return e.createElement($,{onPress:()=>{i||D(o)},disabled:i,accessibilityRole:"radio",accessibilityState:{checked:m,disabled:i},accessibilityLabel:n,style:({pressed:_})=>[d.card,{borderColor:N,borderWidth:O},i&&d.cardDisabled,_&&!i&&d.pressed]},e.createElement(r,{style:[d.indicator,m&&!i?{backgroundColor:t.backgroundBrand,borderWidth:0}:{backgroundColor:"transparent",borderWidth:1.5,borderColor:i?t.borderDefault:t.borderActive}]},m&&e.createElement(r,{style:d.indicatorInner})),e.createElement(r,{style:d.textWrap},e.createElement(w,{style:[d.label,m&&!i&&d.labelSelected,i&&d.textDisabled]},n),g&&e.createElement(w,{style:[d.description,i&&d.textDisabled]},g)))}const d=L.create({card:{flexDirection:"row",alignItems:"center",gap:l.medium,paddingVertical:l.medium,paddingHorizontal:l.large,borderRadius:P.medium,backgroundColor:t.backgroundPrimary},cardDisabled:{opacity:.4},pressed:{opacity:A.pressOpacity},indicator:{width:W,height:W,borderRadius:W/2,alignItems:"center",justifyContent:"center",flexShrink:0},indicatorInner:{width:I,height:I,borderRadius:I/2,backgroundColor:t.iconOnColor},textWrap:{flex:1,gap:2},label:{fontSize:s.body2.fontSize,fontWeight:z.medium,lineHeight:s.body2.lineHeight,color:t.textPrimary},labelSelected:{fontWeight:z.semibold},description:{fontSize:s.caption.fontSize,fontWeight:z.regular,lineHeight:s.caption.lineHeight,color:t.textSecondary},textDisabled:{color:t.textTertiary}});c.__docgenInfo={description:"",methods:[],displayName:"RadioCardGroup",props:{value:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"선택된 값"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"선택 변경 콜백"},name:{required:!0,tsType:{name:"string"},description:"폼 그룹 이름"},disabled:{required:!1,tsType:{name:"boolean"},description:"전체 비활성화",defaultValue:{value:"false",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"카드 간 간격",defaultValue:{value:"8",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"RadioCard children"}}};a.__docgenInfo={description:"",methods:[],displayName:"RadioCard",props:{value:{required:!0,tsType:{name:"string"},description:"고유 식별자"},label:{required:!0,tsType:{name:"string"},description:"표시 텍스트"},description:{required:!1,tsType:{name:"string"},description:"보조 설명"},disabled:{required:!1,tsType:{name:"boolean"},description:"개별 비활성화",defaultValue:{value:"false",computed:!1}}}};const K={title:"Input/RadioCard",component:c,tags:["autodocs"]},b={render:()=>{const[o,n]=u.useState("low");return e.createElement(r,{style:{maxWidth:375}},e.createElement(c,{value:o,onChange:n,name:"frequency"},e.createElement(a,{value:"none",label:"해당 없음"}),e.createElement(a,{value:"low",label:"가끔 (월 1~2회)"}),e.createElement(a,{value:"mid",label:"자주 (주 1~2회)"}),e.createElement(a,{value:"high",label:"매일"})))}},y={name:"Default (선택됨)",render:()=>{const[o,n]=u.useState("none");return e.createElement(r,{style:{gap:l["3xlarge"]}},e.createElement(p,{title:"Default",description:"첫 번째 옵션이 선택된 상태입니다."},e.createElement(r,{style:{maxWidth:375}},e.createElement(c,{value:o,onChange:n,name:"drinking"},e.createElement(a,{value:"none",label:"술을 안 마신다"}),e.createElement(a,{value:"low",label:"월 1회 이하"}),e.createElement(a,{value:"mid",label:"월 2~4회"}),e.createElement(a,{value:"high",label:"주 2~4회"})))))}},v={name:"미선택 상태",render:()=>{const[o,n]=u.useState(null);return e.createElement(r,{style:{gap:l["3xlarge"]}},e.createElement(p,{title:"미선택 상태",description:"아무것도 선택되지 않은 초기 상태입니다."},e.createElement(r,{style:{maxWidth:375}},e.createElement(c,{value:o,onChange:n,name:"exercise"},e.createElement(a,{value:"none",label:"운동을 하지 않는다"}),e.createElement(a,{value:"light",label:"가벼운 운동 (산책, 스트레칭)"}),e.createElement(a,{value:"moderate",label:"중간 강도 운동 (조깅, 수영)"}),e.createElement(a,{value:"intense",label:"고강도 운동 (웨이트, HIIT)"})))))}},C={name:"Description 포함",render:()=>{const[o,n]=u.useState("balanced");return e.createElement(r,{style:{gap:l["3xlarge"]}},e.createElement(p,{title:"Description 포함",description:"label 아래 보조 설명 텍스트를 추가할 수 있습니다."},e.createElement(r,{style:{maxWidth:375}},e.createElement(c,{value:o,onChange:n,name:"diet-type"},e.createElement(a,{value:"balanced",label:"균형 잡힌 식단",description:"탄수화물, 단백질, 지방을 고르게 섭취"}),e.createElement(a,{value:"low-carb",label:"저탄수화물 식단",description:"탄수화물 섭취를 줄이고 단백질 위주로"}),e.createElement(a,{value:"vegetarian",label:"채식 식단",description:"육류를 제외하고 식물성 식품 위주로"})))))}},h={name:"긴 텍스트",render:()=>{const[o,n]=u.useState("a");return e.createElement(r,{style:{gap:l["3xlarge"]}},e.createElement(p,{title:"긴 텍스트",description:"긴 레이블이 자연스럽게 줄바꿈되는지 확인합니다."},e.createElement(r,{style:{maxWidth:375}},e.createElement(c,{value:o,onChange:n,name:"long"},e.createElement(a,{value:"a",label:"매일 규칙적인 시간에 충분한 수면을 취하고 있으며 기상 시 개운함을 느낀다"}),e.createElement(a,{value:"b",label:"수면 시간이 불규칙하거나 충분하지 않아 낮 시간에 졸음이 오는 경우가 있다"})))))}},R={name:"Disabled (전체)",render:()=>e.createElement(r,{style:{gap:l["3xlarge"]}},e.createElement(p,{title:"Disabled",description:"그룹 전체가 비활성화된 상태입니다."},e.createElement(r,{style:{maxWidth:375}},e.createElement(c,{value:"low",onChange:()=>{},name:"disabled-group",disabled:!0},e.createElement(a,{value:"none",label:"술을 안 마신다"}),e.createElement(a,{value:"low",label:"월 1회 이하"}),e.createElement(a,{value:"mid",label:"월 2~4회"})))))},x={name:"Disabled (일부)",render:()=>{const[o,n]=u.useState("low");return e.createElement(r,{style:{gap:l["3xlarge"]}},e.createElement(p,{title:"일부 비활성화",description:"특정 카드만 개별적으로 비활성화할 수 있습니다."},e.createElement(r,{style:{maxWidth:375}},e.createElement(c,{value:o,onChange:n,name:"partial"},e.createElement(a,{value:"none",label:"해당 없음"}),e.createElement(a,{value:"low",label:"월 1회 이하"}),e.createElement(a,{value:"mid",label:"월 2~4회",disabled:!0}),e.createElement(a,{value:"high",label:"주 2~4회",disabled:!0})))))}},S={name:"실전 예시: 설문",render:()=>{const[o,n]=u.useState(null);return e.createElement(r,{style:{gap:l["3xlarge"]}},e.createElement(p,{title:"설문 화면",description:"음주 습관 관련 질문 화면을 재현합니다."},e.createElement(r,{style:{maxWidth:375,padding:l.xlarge,backgroundColor:t.backgroundPrimary,borderRadius:P.large,borderWidth:1,borderColor:t.borderDefault,gap:l.xlarge}},e.createElement(r,{style:{gap:l.small}},e.createElement(w,{style:{fontSize:s.headline.fontSize,fontWeight:"600",color:t.textPrimary}},"음주 습관"),e.createElement(w,{style:{fontSize:s.body2.fontSize,color:t.textSecondary,lineHeight:s.body2.lineHeight}},"평균적인 음주 횟수를 선택해주세요")),e.createElement(c,{value:o,onChange:n,name:"drinking-survey"},e.createElement(a,{value:"none",label:"술을 안 마신다"}),e.createElement(a,{value:"low",label:"월 1회 이하",description:"사교 모임에서 가끔"}),e.createElement(a,{value:"mid",label:"월 2~4회",description:"주말에 가끔"}),e.createElement(a,{value:"high",label:"주 2~4회",description:"규칙적으로 음주"}),e.createElement(a,{value:"daily",label:"거의 매일",description:"하루 한 잔 이상"})))))}},E={name:"디자인 스펙",render:()=>e.createElement(r,{style:{gap:l["3xlarge"]}},e.createElement(p,{title:"디자인 스펙",badge:"디자인"},e.createElement(T,{title:"카드 컨테이너",rows:[{property:"배경",token:"color/background/primary",value:t.backgroundPrimary,type:"color"},{property:"비선택 테두리",token:"color/border/default",value:t.borderDefault,type:"color"},{property:"선택 테두리",token:"color/border/focus",value:t.borderFocus,type:"color"},{property:"선택 border 두께",token:"—",value:2,type:"size"},{property:"radius",token:"borderRadius/medium",value:P.medium,type:"size"},{property:"상하 패딩",token:"spacing/medium",value:l.medium,type:"size"},{property:"좌우 패딩",token:"spacing/large",value:l.large,type:"size"},{property:"카드 간 gap",token:"spacing/small",value:l.small,type:"size"}]}),e.createElement(B,null),e.createElement(T,{title:"라디오 인디케이터",rows:[{property:"크기",token:"—",value:22,type:"size"},{property:"비선택 border",token:"color/border/active",value:t.borderActive,type:"color"},{property:"선택 fill",token:"color/background/brand",value:t.backgroundBrand,type:"color"},{property:"inner dot",token:"color/icon/onColor",value:t.iconOnColor,type:"color"},{property:"inner dot 크기",token:"—",value:10,type:"size"}]}),e.createElement(B,null),e.createElement(T,{title:"텍스트",rows:[{property:"label 타이포",token:"Body 2",value:`${s.body2.fontSize}px / Medium`,type:"typography"},{property:"label (선택)",token:"Body 2",value:`${s.body2.fontSize}px / SemiBold`,type:"typography"},{property:"description 타이포",token:"Caption",value:`${s.caption.fontSize}px / Regular`,type:"typography"},{property:"label 색상",token:"color/text/primary",value:t.textPrimary,type:"color"},{property:"description 색상",token:"color/text/secondary",value:t.textSecondary,type:"color"}]})))},f={name:"사용 가이드",render:()=>e.createElement(r,{style:{gap:l["3xlarge"]}},e.createElement(p,{title:"사용 가이드",badge:"개발"},e.createElement(G,{title:"Import",code:"import { RadioCardGroup, RadioCard } from '@design-system/components/RadioCard';"}),e.createElement(G,{title:"기본 사용",code:`const [value, setValue] = useState<string | null>(null);

<RadioCardGroup value={value} onChange={setValue} name="drinking">
  <RadioCard value="none" label="술을 안 마신다" />
  <RadioCard value="low" label="월 1회 이하" />
  <RadioCard value="mid" label="월 2~4회" />
  <RadioCard value="high" label="주 2~4회" />
</RadioCardGroup>`}),e.createElement(G,{title:"Description 포함",code:`<RadioCardGroup value={value} onChange={setValue} name="diet">
  <RadioCard
    value="balanced"
    label="균형 잡힌 식단"
    description="탄수화물, 단백질, 지방을 고르게 섭취"
  />
  <RadioCard
    value="low-carb"
    label="저탄수화물 식단"
    description="탄수화물 섭취를 줄이고 단백질 위주로"
  />
</RadioCardGroup>`})))};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<string | null>('low');
    return <View style={{
      maxWidth: 375
    }}>
        <RadioCardGroup value={val} onChange={setVal} name="frequency">
          <RadioCard value="none" label="해당 없음" />
          <RadioCard value="low" label="가끔 (월 1~2회)" />
          <RadioCard value="mid" label="자주 (주 1~2회)" />
          <RadioCard value="high" label="매일" />
        </RadioCardGroup>
      </View>;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Default (선택됨)',
  render: () => {
    const [val, setVal] = useState<string | null>('none');
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="Default" description="첫 번째 옵션이 선택된 상태입니다.">
          <View style={{
          maxWidth: 375
        }}>
            <RadioCardGroup value={val} onChange={setVal} name="drinking">
              <RadioCard value="none" label="술을 안 마신다" />
              <RadioCard value="low" label="월 1회 이하" />
              <RadioCard value="mid" label="월 2~4회" />
              <RadioCard value="high" label="주 2~4회" />
            </RadioCardGroup>
          </View>
        </Section>
      </View>;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '미선택 상태',
  render: () => {
    const [val, setVal] = useState<string | null>(null);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="미선택 상태" description="아무것도 선택되지 않은 초기 상태입니다.">
          <View style={{
          maxWidth: 375
        }}>
            <RadioCardGroup value={val} onChange={setVal} name="exercise">
              <RadioCard value="none" label="운동을 하지 않는다" />
              <RadioCard value="light" label="가벼운 운동 (산책, 스트레칭)" />
              <RadioCard value="moderate" label="중간 강도 운동 (조깅, 수영)" />
              <RadioCard value="intense" label="고강도 운동 (웨이트, HIIT)" />
            </RadioCardGroup>
          </View>
        </Section>
      </View>;
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Description 포함',
  render: () => {
    const [val, setVal] = useState<string | null>('balanced');
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="Description 포함" description="label 아래 보조 설명 텍스트를 추가할 수 있습니다.">
          <View style={{
          maxWidth: 375
        }}>
            <RadioCardGroup value={val} onChange={setVal} name="diet-type">
              <RadioCard value="balanced" label="균형 잡힌 식단" description="탄수화물, 단백질, 지방을 고르게 섭취" />
              <RadioCard value="low-carb" label="저탄수화물 식단" description="탄수화물 섭취를 줄이고 단백질 위주로" />
              <RadioCard value="vegetarian" label="채식 식단" description="육류를 제외하고 식물성 식품 위주로" />
            </RadioCardGroup>
          </View>
        </Section>
      </View>;
  }
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '긴 텍스트',
  render: () => {
    const [val, setVal] = useState<string | null>('a');
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="긴 텍스트" description="긴 레이블이 자연스럽게 줄바꿈되는지 확인합니다.">
          <View style={{
          maxWidth: 375
        }}>
            <RadioCardGroup value={val} onChange={setVal} name="long">
              <RadioCard value="a" label="매일 규칙적인 시간에 충분한 수면을 취하고 있으며 기상 시 개운함을 느낀다" />
              <RadioCard value="b" label="수면 시간이 불규칙하거나 충분하지 않아 낮 시간에 졸음이 오는 경우가 있다" />
            </RadioCardGroup>
          </View>
        </Section>
      </View>;
  }
}`,...h.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Disabled (전체)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Disabled" description="그룹 전체가 비활성화된 상태입니다.">
        <View style={{
        maxWidth: 375
      }}>
          <RadioCardGroup value="low" onChange={() => {}} name="disabled-group" disabled>
            <RadioCard value="none" label="술을 안 마신다" />
            <RadioCard value="low" label="월 1회 이하" />
            <RadioCard value="mid" label="월 2~4회" />
          </RadioCardGroup>
        </View>
      </Section>
    </View>
}`,...R.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Disabled (일부)',
  render: () => {
    const [val, setVal] = useState<string | null>('low');
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="일부 비활성화" description="특정 카드만 개별적으로 비활성화할 수 있습니다.">
          <View style={{
          maxWidth: 375
        }}>
            <RadioCardGroup value={val} onChange={setVal} name="partial">
              <RadioCard value="none" label="해당 없음" />
              <RadioCard value="low" label="월 1회 이하" />
              <RadioCard value="mid" label="월 2~4회" disabled />
              <RadioCard value="high" label="주 2~4회" disabled />
            </RadioCardGroup>
          </View>
        </Section>
      </View>;
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '실전 예시: 설문',
  render: () => {
    const [val, setVal] = useState<string | null>(null);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="설문 화면" description="음주 습관 관련 질문 화면을 재현합니다.">
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
            gap: spacing.small
          }}>
              <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary
            }}>
                음주 습관
              </Text>
              <Text style={{
              fontSize: textStyle.body2.fontSize,
              color: semanticColor.textSecondary,
              lineHeight: textStyle.body2.lineHeight
            }}>
                평균적인 음주 횟수를 선택해주세요
              </Text>
            </View>
            <RadioCardGroup value={val} onChange={setVal} name="drinking-survey">
              <RadioCard value="none" label="술을 안 마신다" />
              <RadioCard value="low" label="월 1회 이하" description="사교 모임에서 가끔" />
              <RadioCard value="mid" label="월 2~4회" description="주말에 가끔" />
              <RadioCard value="high" label="주 2~4회" description="규칙적으로 음주" />
              <RadioCard value="daily" label="거의 매일" description="하루 한 잔 이상" />
            </RadioCardGroup>
          </View>
        </Section>
      </View>;
  }
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" badge="디자인">
        <TokenSpecTable title="카드 컨테이너" rows={[{
        property: '배경',
        token: 'color/background/primary',
        value: semanticColor.backgroundPrimary,
        type: 'color'
      }, {
        property: '비선택 테두리',
        token: 'color/border/default',
        value: semanticColor.borderDefault,
        type: 'color'
      }, {
        property: '선택 테두리',
        token: 'color/border/focus',
        value: semanticColor.borderFocus,
        type: 'color'
      }, {
        property: '선택 border 두께',
        token: '—',
        value: 2,
        type: 'size'
      }, {
        property: 'radius',
        token: 'borderRadius/medium',
        value: radius.medium,
        type: 'size'
      }, {
        property: '상하 패딩',
        token: 'spacing/medium',
        value: spacing.medium,
        type: 'size'
      }, {
        property: '좌우 패딩',
        token: 'spacing/large',
        value: spacing.large,
        type: 'size'
      }, {
        property: '카드 간 gap',
        token: 'spacing/small',
        value: spacing.small,
        type: 'size'
      }]} />
        <Divider />
        <TokenSpecTable title="라디오 인디케이터" rows={[{
        property: '크기',
        token: '—',
        value: 22,
        type: 'size'
      }, {
        property: '비선택 border',
        token: 'color/border/active',
        value: semanticColor.borderActive,
        type: 'color'
      }, {
        property: '선택 fill',
        token: 'color/background/brand',
        value: semanticColor.backgroundBrand,
        type: 'color'
      }, {
        property: 'inner dot',
        token: 'color/icon/onColor',
        value: semanticColor.iconOnColor,
        type: 'color'
      }, {
        property: 'inner dot 크기',
        token: '—',
        value: 10,
        type: 'size'
      }]} />
        <Divider />
        <TokenSpecTable title="텍스트" rows={[{
        property: 'label 타이포',
        token: 'Body 2',
        value: \`\${textStyle.body2.fontSize}px / Medium\`,
        type: 'typography'
      }, {
        property: 'label (선택)',
        token: 'Body 2',
        value: \`\${textStyle.body2.fontSize}px / SemiBold\`,
        type: 'typography'
      }, {
        property: 'description 타이포',
        token: 'Caption',
        value: \`\${textStyle.caption.fontSize}px / Regular\`,
        type: 'typography'
      }, {
        property: 'label 색상',
        token: 'color/text/primary',
        value: semanticColor.textPrimary,
        type: 'color'
      }, {
        property: 'description 색상',
        token: 'color/text/secondary',
        value: semanticColor.textSecondary,
        type: 'color'
      }]} />
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { RadioCardGroup, RadioCard } from '@design-system/components/RadioCard';\`} />
        <CodeBlock title="기본 사용" code={\`const [value, setValue] = useState<string | null>(null);

<RadioCardGroup value={value} onChange={setValue} name="drinking">
  <RadioCard value="none" label="술을 안 마신다" />
  <RadioCard value="low" label="월 1회 이하" />
  <RadioCard value="mid" label="월 2~4회" />
  <RadioCard value="high" label="주 2~4회" />
</RadioCardGroup>\`} />
        <CodeBlock title="Description 포함" code={\`<RadioCardGroup value={value} onChange={setValue} name="diet">
  <RadioCard
    value="balanced"
    label="균형 잡힌 식단"
    description="탄수화물, 단백질, 지방을 고르게 섭취"
  />
  <RadioCard
    value="low-carb"
    label="저탄수화물 식단"
    description="탄수화물 섭취를 줄이고 단백질 위주로"
  />
</RadioCardGroup>\`} />
      </Section>
    </View>
}`,...f.parameters?.docs?.source}}};const Q=["Playground","Default","Unselected","WithDescription","LongLabels","DisabledGroup","PartiallyDisabled","InContext","DesignSpec","Usage"];export{y as Default,E as DesignSpec,R as DisabledGroup,S as InContext,h as LongLabels,x as PartiallyDisabled,b as Playground,v as Unselected,f as Usage,C as WithDescription,Q as __namedExportsOrder,K as default};
