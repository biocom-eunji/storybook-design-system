import{R as e,V as a,s as j,r as y}from"./iframe-rdsxNJ7l.js";import{M as Z,T as W,c as t,a as b,f as G,j as J,s as n,r as K}from"./theme-KAxj7l-q.js";import{S as u,D as q,C as B}from"./storyHelpers-D5HpvNsw.js";import{T}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";const z=[t.backgroundError,t.backgroundWarning,t.backgroundOff,t.backgroundCaution,t.backgroundSuccess];function M(r,o){const m=o<=1?0:r/(o-1),d=Math.round(m*(z.length-1));return z[d]}const D=32,R=44;function p({steps:r=4,value:o,onChange:m,startLabel:d,endLabel:s,colorMode:S="neutral",disabled:g=!1,name:I}){const A=Array.from({length:r},(l,c)=>c),P=(l,c)=>c?S==="neutral"?t.backgroundBrand:M(l,r):"transparent",O=(l,c)=>c?"transparent":S==="bipolar"?M(l,r):t.borderActive,N=S==="bipolar"?t.textError:t.textSecondary,$=S==="bipolar"?t.textSuccess:t.textSecondary;return e.createElement(a,{style:[i.container,g&&i.disabled],accessibilityRole:"radiogroup",accessibilityLabel:I},e.createElement(a,{style:i.dotsRow},A.map(l=>{const c=o===l,_=P(l,c),H=O(l,c),U=l===0&&d?`${l+1}단계: ${d}`:l===r-1&&s?`${l+1}단계: ${s}`:`${l+1}단계`;return e.createElement(a,{key:l,style:i.dotCell},e.createElement(Z,{onPress:()=>{g||m(l)},disabled:g,accessibilityRole:"radio",accessibilityState:{checked:c},accessibilityLabel:U,style:({pressed:F})=>[i.touchArea,F&&!g&&i.pressed]},e.createElement(a,{style:[i.dot,{backgroundColor:_,borderColor:H,borderWidth:c?0:2}]})))})),(d||s)&&e.createElement(a,{style:i.labelsRow},e.createElement(W,{style:[i.label,{color:N}]},d||""),e.createElement(W,{style:[i.label,{color:$,textAlign:"right"}]},s||"")))}const i=j.create({container:{gap:n.small},disabled:{opacity:.4},dotsRow:{flexDirection:"row"},dotCell:{flex:1,alignItems:"center"},touchArea:{width:R,height:R,alignItems:"center",justifyContent:"center"},pressed:{opacity:J.pressOpacity},dot:{width:D,height:D,borderRadius:D/2},labelsRow:{flexDirection:"row",justifyContent:"space-between"},label:{fontSize:b.caption.fontSize,fontWeight:G.regular,lineHeight:b.caption.lineHeight,letterSpacing:b.caption.letterSpacing,color:t.textSecondary}});p.__docgenInfo={description:"",methods:[],displayName:"LikertScale",props:{steps:{required:!1,tsType:{name:"union",raw:"3 | 4 | 5 | 6 | 7",elements:[{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"}]},description:"선택지 개수 (3~7)",defaultValue:{value:"4",computed:!1}},value:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"선택된 인덱스 (0-based, null = 미선택)"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"선택 변경 콜백"},startLabel:{required:!1,tsType:{name:"string"},description:"좌측 끝 레이블"},endLabel:{required:!1,tsType:{name:"string"},description:"우측 끝 레이블"},colorMode:{required:!1,tsType:{name:"union",raw:"'neutral' | 'bipolar'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'bipolar'"}]},description:"색상 모드",defaultValue:{value:"'neutral'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"접근성 그룹 이름"}}};const re={title:"Input/LikertScale",component:p,argTypes:{steps:{control:{type:"range",min:3,max:7,step:1}},colorMode:{control:"select",options:["neutral","bipolar"]},startLabel:{control:"text"},endLabel:{control:"text"},disabled:{control:"boolean"}},tags:["autodocs"]},v={render:r=>{const[o,m]=y.useState(null);return e.createElement(a,{style:{maxWidth:375}},e.createElement(p,{steps:r.steps||4,value:o,onChange:m,startLabel:r.startLabel||"그렇지 않다",endLabel:r.endLabel||"그렇다",colorMode:r.colorMode||"neutral",disabled:r.disabled}))}},k={name:"Default (Neutral 4단계)",render:()=>{const[r,o]=y.useState(null);return e.createElement(a,{style:{gap:n["3xlarge"]}},e.createElement(u,{title:"Default",description:"4단계 neutral 모드, 미선택 상태입니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(p,{steps:4,value:r,onChange:o,startLabel:"그렇지 않다",endLabel:"그렇다"}))))}},x={name:"Bipolar 4단계",render:()=>{const[r,o]=y.useState(1);return e.createElement(a,{style:{gap:n["3xlarge"]}},e.createElement(u,{title:"Bipolar 4단계",description:"양극 색상 그라데이션으로 부정(빨강)→긍정(초록)을 표현합니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(p,{steps:4,value:r,onChange:o,startLabel:"전혀 아니다",endLabel:"매우 그렇다",colorMode:"bipolar"}))))}},f={name:"Bipolar 5단계",render:()=>{const[r,o]=y.useState(2);return e.createElement(a,{style:{gap:n["3xlarge"]}},e.createElement(u,{title:"Bipolar 5단계",description:"중앙에 중립(회색) 단계가 포함된 5단계 양극 척도입니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(p,{steps:5,value:r,onChange:o,startLabel:"매우 나쁨",endLabel:"매우 좋음",colorMode:"bipolar"}))))}},h={name:"Neutral 7단계",render:()=>{const[r,o]=y.useState(4);return e.createElement(a,{style:{gap:n["3xlarge"]}},e.createElement(u,{title:"Neutral 7단계",description:"7단계 중립 색상 척도입니다. 모든 옵션이 brand 색상으로 통일됩니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(p,{steps:7,value:r,onChange:o,startLabel:"전혀 동의하지 않음",endLabel:"매우 동의함"}))))}},L={name:"초기값 지정",render:()=>{const[r,o]=y.useState(2);return e.createElement(a,{style:{gap:n["3xlarge"]}},e.createElement(u,{title:"초기값 지정",description:"value prop으로 초기 선택 상태를 지정합니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(p,{steps:4,value:r,onChange:o,startLabel:"그렇지 않다",endLabel:"그렇다",colorMode:"bipolar"}))))}},w={name:"Disabled",render:()=>e.createElement(a,{style:{gap:n["3xlarge"]}},e.createElement(u,{title:"Disabled",description:"비활성화 상태에서는 인터랙션이 차단됩니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(p,{steps:4,value:1,onChange:()=>{},startLabel:"그렇지 않다",endLabel:"그렇다",colorMode:"bipolar",disabled:!0}))))},C={name:"실전 예시: 문진",render:()=>{const r=["두통이나 편두통이 있다","탈수 증상이 자주 있다","수면 시 깊이 잠들지 못한다","일상 활동 시 피로감을 느낀다"],[o,m]=y.useState(Array(r.length).fill(null));return e.createElement(a,{style:{gap:n["3xlarge"]}},e.createElement(u,{title:"문진 화면",description:"여러 질문에 LikertScale을 반복 배치한 실제 설문 UI 예시입니다."},e.createElement(a,{style:{maxWidth:375,padding:n.xlarge,backgroundColor:t.backgroundPrimary,borderRadius:K.large,borderWidth:1,borderColor:t.borderDefault,gap:n["2xlarge"]}},e.createElement(W,{style:{fontSize:b.headline.fontSize,fontWeight:"600",color:t.textPrimary}},"건강 상태 체크"),r.map((d,s)=>e.createElement(a,{key:s,style:{gap:n.medium}},e.createElement(W,{style:{fontSize:b.body2.fontSize,fontWeight:"500",color:t.textPrimary,lineHeight:b.body2.lineHeight}},s+1,". ",d),e.createElement(p,{steps:4,value:o[s],onChange:S=>{const g=[...o];g[s]=S,m(g)},startLabel:"그렇지 않다",endLabel:"그렇다",colorMode:"bipolar",name:`question-${s}`}))))))}},V={name:"디자인 스펙",render:()=>e.createElement(a,{style:{gap:n["3xlarge"]}},e.createElement(u,{title:"디자인 스펙",badge:"디자인"},e.createElement(T,{title:"원형 선택지",rows:[{property:"크기",token:"—",value:32,type:"size"},{property:"터치 영역",token:"—",value:44,type:"size"},{property:"비선택 border",token:"color/border/active",value:t.borderActive,type:"color"},{property:"border 두께",token:"—",value:2,type:"size"},{property:"선택 fill (neutral)",token:"color/background/brand",value:t.backgroundBrand,type:"color"}]}),e.createElement(q,null),e.createElement(T,{title:"Bipolar 색상",rows:[{property:"critical",token:"color/background/error",value:t.backgroundError,type:"color"},{property:"warning",token:"color/background/warning",value:t.backgroundWarning,type:"color"},{property:"neutral",token:"color/background/off",value:t.backgroundOff,type:"color"},{property:"caution",token:"color/background/caution",value:t.backgroundCaution,type:"color"},{property:"success",token:"color/background/success",value:t.backgroundSuccess,type:"color"}]}),e.createElement(q,null),e.createElement(T,{title:"레이블",rows:[{property:"타이포",token:"Caption",value:`${b.caption.fontSize}px / Regular`,type:"typography"},{property:"neutral 색상",token:"color/text/secondary",value:t.textSecondary,type:"color"},{property:"bipolar start",token:"color/text/error",value:t.textError,type:"color"},{property:"bipolar end",token:"color/text/success",value:t.textSuccess,type:"color"}]})))},E={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:n["3xlarge"]}},e.createElement(u,{title:"사용 가이드",badge:"개발"},e.createElement(B,{title:"Import",code:"import { LikertScale } from '@design-system/components/LikertScale';"}),e.createElement(B,{title:"기본 사용",code:`const [value, setValue] = useState<number | null>(null);

<LikertScale
  steps={4}
  value={value}
  onChange={setValue}
  startLabel="그렇지 않다"
  endLabel="그렇다"
/>`}),e.createElement(B,{title:"Bipolar 모드",code:`<LikertScale
  steps={5}
  value={value}
  onChange={setValue}
  startLabel="매우 나쁨"
  endLabel="매우 좋음"
  colorMode="bipolar"
/>`})))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<number | null>(null);
    return <View style={{
      maxWidth: 375
    }}>
        <LikertScale steps={args.steps || 4} value={val} onChange={setVal} startLabel={args.startLabel || '그렇지 않다'} endLabel={args.endLabel || '그렇다'} colorMode={args.colorMode || 'neutral'} disabled={args.disabled} />
      </View>;
  }
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Default (Neutral 4단계)',
  render: () => {
    const [val, setVal] = useState<number | null>(null);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="Default" description="4단계 neutral 모드, 미선택 상태입니다.">
          <View style={{
          maxWidth: 375
        }}>
            <LikertScale steps={4} value={val} onChange={setVal} startLabel="그렇지 않다" endLabel="그렇다" />
          </View>
        </Section>
      </View>;
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Bipolar 4단계',
  render: () => {
    const [val, setVal] = useState<number | null>(1);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="Bipolar 4단계" description="양극 색상 그라데이션으로 부정(빨강)→긍정(초록)을 표현합니다.">
          <View style={{
          maxWidth: 375
        }}>
            <LikertScale steps={4} value={val} onChange={setVal} startLabel="전혀 아니다" endLabel="매우 그렇다" colorMode="bipolar" />
          </View>
        </Section>
      </View>;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Bipolar 5단계',
  render: () => {
    const [val, setVal] = useState<number | null>(2);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="Bipolar 5단계" description="중앙에 중립(회색) 단계가 포함된 5단계 양극 척도입니다.">
          <View style={{
          maxWidth: 375
        }}>
            <LikertScale steps={5} value={val} onChange={setVal} startLabel="매우 나쁨" endLabel="매우 좋음" colorMode="bipolar" />
          </View>
        </Section>
      </View>;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Neutral 7단계',
  render: () => {
    const [val, setVal] = useState<number | null>(4);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="Neutral 7단계" description="7단계 중립 색상 척도입니다. 모든 옵션이 brand 색상으로 통일됩니다.">
          <View style={{
          maxWidth: 375
        }}>
            <LikertScale steps={7} value={val} onChange={setVal} startLabel="전혀 동의하지 않음" endLabel="매우 동의함" />
          </View>
        </Section>
      </View>;
  }
}`,...h.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '초기값 지정',
  render: () => {
    const [val, setVal] = useState<number | null>(2);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="초기값 지정" description="value prop으로 초기 선택 상태를 지정합니다.">
          <View style={{
          maxWidth: 375
        }}>
            <LikertScale steps={4} value={val} onChange={setVal} startLabel="그렇지 않다" endLabel="그렇다" colorMode="bipolar" />
          </View>
        </Section>
      </View>;
  }
}`,...L.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Disabled" description="비활성화 상태에서는 인터랙션이 차단됩니다.">
        <View style={{
        maxWidth: 375
      }}>
          <LikertScale steps={4} value={1} onChange={() => {}} startLabel="그렇지 않다" endLabel="그렇다" colorMode="bipolar" disabled />
        </View>
      </Section>
    </View>
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '실전 예시: 문진',
  render: () => {
    const questions = ['두통이나 편두통이 있다', '탈수 증상이 자주 있다', '수면 시 깊이 잠들지 못한다', '일상 활동 시 피로감을 느낀다'];
    const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="문진 화면" description="여러 질문에 LikertScale을 반복 배치한 실제 설문 UI 예시입니다.">
          <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: radius.large,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          gap: spacing['2xlarge']
        }}>
            <Text style={{
            fontSize: textStyle.headline.fontSize,
            fontWeight: '600',
            color: semanticColor.textPrimary
          }}>
              건강 상태 체크
            </Text>

            {questions.map((q, qi) => <View key={qi} style={{
            gap: spacing.medium
          }}>
                <Text style={{
              fontSize: textStyle.body2.fontSize,
              fontWeight: '500',
              color: semanticColor.textPrimary,
              lineHeight: textStyle.body2.lineHeight
            }}>
                  {qi + 1}. {q}
                </Text>
                <LikertScale steps={4} value={answers[qi]} onChange={idx => {
              const next = [...answers];
              next[qi] = idx;
              setAnswers(next);
            }} startLabel="그렇지 않다" endLabel="그렇다" colorMode="bipolar" name={\`question-\${qi}\`} />
              </View>)}
          </View>
        </Section>
      </View>;
  }
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" badge="디자인">
        <TokenSpecTable title="원형 선택지" rows={[{
        property: '크기',
        token: '—',
        value: 32,
        type: 'size'
      }, {
        property: '터치 영역',
        token: '—',
        value: 44,
        type: 'size'
      }, {
        property: '비선택 border',
        token: 'color/border/active',
        value: semanticColor.borderActive,
        type: 'color'
      }, {
        property: 'border 두께',
        token: '—',
        value: 2,
        type: 'size'
      }, {
        property: '선택 fill (neutral)',
        token: 'color/background/brand',
        value: semanticColor.backgroundBrand,
        type: 'color'
      }]} />
        <Divider />
        <TokenSpecTable title="Bipolar 색상" rows={[{
        property: 'critical',
        token: 'color/background/error',
        value: semanticColor.backgroundError,
        type: 'color'
      }, {
        property: 'warning',
        token: 'color/background/warning',
        value: semanticColor.backgroundWarning,
        type: 'color'
      }, {
        property: 'neutral',
        token: 'color/background/off',
        value: semanticColor.backgroundOff,
        type: 'color'
      }, {
        property: 'caution',
        token: 'color/background/caution',
        value: semanticColor.backgroundCaution,
        type: 'color'
      }, {
        property: 'success',
        token: 'color/background/success',
        value: semanticColor.backgroundSuccess,
        type: 'color'
      }]} />
        <Divider />
        <TokenSpecTable title="레이블" rows={[{
        property: '타이포',
        token: 'Caption',
        value: \`\${textStyle.caption.fontSize}px / Regular\`,
        type: 'typography'
      }, {
        property: 'neutral 색상',
        token: 'color/text/secondary',
        value: semanticColor.textSecondary,
        type: 'color'
      }, {
        property: 'bipolar start',
        token: 'color/text/error',
        value: semanticColor.textError,
        type: 'color'
      }, {
        property: 'bipolar end',
        token: 'color/text/success',
        value: semanticColor.textSuccess,
        type: 'color'
      }]} />
      </Section>
    </View>
}`,...V.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { LikertScale } from '@design-system/components/LikertScale';\`} />
        <CodeBlock title="기본 사용" code={\`const [value, setValue] = useState<number | null>(null);

<LikertScale
  steps={4}
  value={value}
  onChange={setValue}
  startLabel="그렇지 않다"
  endLabel="그렇다"
/>\`} />
        <CodeBlock title="Bipolar 모드" code={\`<LikertScale
  steps={5}
  value={value}
  onChange={setValue}
  startLabel="매우 나쁨"
  endLabel="매우 좋음"
  colorMode="bipolar"
/>\`} />
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};const ae=["Playground","Default","FourStepsBipolar","FiveStepsBipolar","SevenStepsNeutral","PreSelected","Disabled","InContext","DesignSpec","Usage"];export{k as Default,V as DesignSpec,w as Disabled,f as FiveStepsBipolar,x as FourStepsBipolar,C as InContext,v as Playground,L as PreSelected,h as SevenStepsNeutral,E as Usage,ae as __namedExportsOrder,re as default};
