import{R as e,V as t,r as w}from"./iframe-rdsxNJ7l.js";import{P as o}from"./ProgressBar-B7qrEQHU.js";import{B as z}from"./Button-DT9-49YQ.js";import{S as n,D as C,b as m,a as g,R as O,C as c}from"./storyHelpers-D5HpvNsw.js";import{T as h}from"./TokenSpecTable-CJp3A6kK.js";import{s as r,c as s,a,T as p}from"./theme-KAxj7l-q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-0_7wxnUT.js";const L={primary:{token:"color/background/brand",value:s.backgroundBrand}},l={track:{token:"color/background/disabled",value:s.backgroundDisabled},labelColor:{token:"color/text/primary",value:s.textPrimary},labelGap:{token:"spacing/xsmall",value:r.xsmall}},A={title:"Feedback/ProgressBar",component:o,argTypes:{progress:{control:{type:"range",min:0,max:1,step:.01},description:"진행률 (0~1)"},size:{control:"select",options:["small","medium","large"],description:"크기 (Figma: Size)"},color:{control:"select",options:["primary","success","error","warning"],description:"Fill 색상 (Figma: Color)"},showLabel:{control:"boolean",description:"퍼센트 라벨 표시"},rounded:{control:"boolean",description:"Pill 형태 라운딩"}},tags:["autodocs"]},u={args:{progress:.6,size:"medium",color:"primary",showLabel:!0,rounded:!0},parameters:{docs:{description:{story:"**적용 토큰**: Track `color/background/disabled`, Fill `color/background/brand`, Label `color/text/primary` `Caption`"}}}},d={name:"진행률별",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(n,{title:"진행률별",description:"0%, 25%, 50%, 75%, 100% 진행률을 비교합니다."},e.createElement(t,{style:{gap:r.xlarge,maxWidth:400}},[0,.25,.5,.75,1].map(i=>e.createElement(m,{key:i,gap:r.small},e.createElement(g,null,`${Math.round(i*100)}%`),e.createElement(o,{progress:i,size:"medium",color:"primary",showLabel:!0}))))))},y={name:"Label 표시",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(n,{title:"Label 표시",description:"showLabel prop으로 퍼센트 수치를 표시합니다."},e.createElement(t,{style:{gap:r.xlarge,maxWidth:400}},e.createElement(m,{gap:r.small},e.createElement(g,null,"Label 없음"),e.createElement(o,{progress:.45,size:"large",color:"primary"})),e.createElement(m,{gap:r.small},e.createElement(g,null,"Label 표시"),e.createElement(o,{progress:.45,size:"large",color:"primary",showLabel:!0})))))},b={name:"인터랙티브 데모",render:()=>{const[i,P]=w.useState(0),[k,f]=w.useState(!1);w.useEffect(()=>{if(!k)return;const T=setInterval(()=>{P(v=>v>=1?(f(!1),1):v+.02)},50);return()=>clearInterval(T)},[k]);const B=()=>{P(0),f(!1)},V=()=>{P(0),f(!0)};return e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(n,{title:"인터랙티브 데모",description:"버튼을 클릭하여 진행률 애니메이션을 확인합니다."},e.createElement(t,{style:{maxWidth:400,gap:r.large}},e.createElement(o,{progress:i,size:"large",color:"primary",showLabel:!0}),e.createElement(O,{gap:r.medium},e.createElement(z,{label:"시작",variant:"primary",size:"small",onPress:V}),e.createElement(z,{label:"초기화",variant:"sub",size:"small",onPress:B})))))}},x={name:"실전 예시",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(n,{title:"실전 예시",description:"실제 UI 패턴에서의 ProgressBar 활용 예시입니다."},e.createElement(t,{style:{gap:r["2xlarge"],maxWidth:400}},e.createElement(m,{gap:r.small},e.createElement(g,null,"파일 업로드"),e.createElement(t,{style:{gap:r.xsmall}},e.createElement(t,{style:{flexDirection:"row",justifyContent:"space-between"}},e.createElement(p,{style:{fontSize:a.label2.fontSize,fontWeight:a.label2.fontWeight,color:s.textPrimary}},"photo_001.jpg"),e.createElement(p,{style:{fontSize:a.caption.fontSize,color:s.textSecondary}},"72%")),e.createElement(o,{progress:.72,size:"small",color:"primary"}))),e.createElement(C,null),e.createElement(m,{gap:r.small},e.createElement(g,null,"건강 목표 달성률"),e.createElement(t,{style:{gap:r.medium}},e.createElement(t,{style:{gap:r.xsmall}},e.createElement(p,{style:{fontSize:a.label2.fontSize,fontWeight:a.label2.fontWeight,color:s.textPrimary}},"수분 섭취"),e.createElement(o,{progress:.85,size:"medium",color:"success"})),e.createElement(t,{style:{gap:r.xsmall}},e.createElement(p,{style:{fontSize:a.label2.fontSize,fontWeight:a.label2.fontWeight,color:s.textPrimary}},"운동"),e.createElement(o,{progress:.3,size:"medium",color:"warning"})),e.createElement(t,{style:{gap:r.xsmall}},e.createElement(p,{style:{fontSize:a.label2.fontSize,fontWeight:a.label2.fontWeight,color:s.textPrimary}},"수면"),e.createElement(o,{progress:.15,size:"medium",color:"error"})))))))},S={name:"디자인 스펙",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(n,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 ProgressBar 스펙입니다.",badge:"디자인"},e.createElement(h,{title:"ProgressBar 토큰",rows:[{property:"Track 배경",token:l.track.token,value:l.track.value,type:"color"},{property:"Fill 배경",token:L.primary.token,value:L.primary.value,type:"color"},{property:"Track 라디우스",token:"height / 2 (pill)",value:"pill 형태"},{property:"Label 색상",token:l.labelColor.token,value:l.labelColor.value,type:"color"},{property:"Label 타이포",token:"Caption",value:`${a.caption.fontSize}px / ${a.caption.lineHeight}px / ${a.caption.fontWeight}`,type:"typography"},{property:"Label-Track 간격",token:l.labelGap.token,value:l.labelGap.value,type:"size"}]}),e.createElement(C,null),e.createElement(h,{title:"애니메이션 (권장값)",rows:[{property:"Determinate transition",token:"—",value:"300ms ease"},{property:"Reduce Motion 대응",token:"—",value:"transition 제거"}]})))},E={name:"사용 가이드",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(n,{title:"사용 가이드",description:"개발자를 위한 ProgressBar 컴포넌트 사용 예시입니다.",badge:"개발"},e.createElement(c,{title:"Import",code:"import { ProgressBar } from '@design-system/components/ProgressBar';"}),e.createElement(c,{title:"기본 사용",code:"<ProgressBar progress={0.6} />"}),e.createElement(c,{title:"Color + Size + Label",code:'<ProgressBar progress={0.75} size="large" color="success" showLabel />'}),e.createElement(c,{title:"동적 진행률",code:`const [progress, setProgress] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => Math.min(prev + 0.01, 1));
  }, 50);
  return () => clearInterval(interval);
}, []);

<ProgressBar progress={progress} color="primary" showLabel />`}),e.createElement(c,{title:"건강 목표 대시보드",code:`<View style={{ gap: spacing.medium }}>
  <ProgressBar progress={waterGoal} color="success" size="small" />
  <ProgressBar progress={exerciseGoal} color="warning" size="small" />
  <ProgressBar progress={sleepGoal} color="error" size="small" />
</View>`})))};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 0.6,
    size: 'medium',
    color: 'primary',
    showLabel: true,
    rounded: true
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: Track \`color/background/disabled\`, Fill \`color/background/brand\`, Label \`color/text/primary\` \`Caption\`'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '진행률별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="진행률별" description="0%, 25%, 50%, 75%, 100% 진행률을 비교합니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 400
      }}>
          {[0, 0.25, 0.5, 0.75, 1].map(v => <Col key={v} gap={spacing.small}>
              <StateLabel>{\`\${Math.round(v * 100)}%\`}</StateLabel>
              <ProgressBar progress={v} size="medium" color="primary" showLabel />
            </Col>)}
        </View>
      </Section>
    </View>
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Label 표시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Label 표시" description="showLabel prop으로 퍼센트 수치를 표시합니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 400
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Label 없음</StateLabel>
            <ProgressBar progress={0.45} size="large" color="primary" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Label 표시</StateLabel>
            <ProgressBar progress={0.45} size="large" color="primary" showLabel />
          </Col>
        </View>
      </Section>
    </View>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [progress, setProgress] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
      if (!running) return;
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 1) {
            setRunning(false);
            return 1;
          }
          return prev + 0.02;
        });
      }, 50);
      return () => clearInterval(interval);
    }, [running]);
    const reset = () => {
      setProgress(0);
      setRunning(false);
    };
    const start = () => {
      setProgress(0);
      setRunning(true);
    };
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="버튼을 클릭하여 진행률 애니메이션을 확인합니다.">
          <View style={{
          maxWidth: 400,
          gap: spacing.large
        }}>
            <ProgressBar progress={progress} size="large" color="primary" showLabel />
            <Row gap={spacing.medium}>
              <Button label="시작" variant="primary" size="small" onPress={start} />
              <Button label="초기화" variant="sub" size="small" onPress={reset} />
            </Row>
          </View>
        </Section>
      </View>;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="실제 UI 패턴에서의 ProgressBar 활용 예시입니다.">
        <View style={{
        gap: spacing['2xlarge'],
        maxWidth: 400
      }}>
          <Col gap={spacing.small}>
            <StateLabel>파일 업로드</StateLabel>
            <View style={{
            gap: spacing.xsmall
          }}>
              <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
                <Text style={{
                fontSize: textStyle.label2.fontSize,
                fontWeight: textStyle.label2.fontWeight,
                color: semanticColor.textPrimary
              }}>photo_001.jpg</Text>
                <Text style={{
                fontSize: textStyle.caption.fontSize,
                color: semanticColor.textSecondary
              }}>72%</Text>
              </View>
              <ProgressBar progress={0.72} size="small" color="primary" />
            </View>
          </Col>

          <Divider />

          <Col gap={spacing.small}>
            <StateLabel>건강 목표 달성률</StateLabel>
            <View style={{
            gap: spacing.medium
          }}>
              <View style={{
              gap: spacing.xsmall
            }}>
                <Text style={{
                fontSize: textStyle.label2.fontSize,
                fontWeight: textStyle.label2.fontWeight,
                color: semanticColor.textPrimary
              }}>수분 섭취</Text>
                <ProgressBar progress={0.85} size="medium" color="success" />
              </View>
              <View style={{
              gap: spacing.xsmall
            }}>
                <Text style={{
                fontSize: textStyle.label2.fontSize,
                fontWeight: textStyle.label2.fontWeight,
                color: semanticColor.textPrimary
              }}>운동</Text>
                <ProgressBar progress={0.3} size="medium" color="warning" />
              </View>
              <View style={{
              gap: spacing.xsmall
            }}>
                <Text style={{
                fontSize: textStyle.label2.fontSize,
                fontWeight: textStyle.label2.fontWeight,
                color: semanticColor.textPrimary
              }}>수면</Text>
                <ProgressBar progress={0.15} size="medium" color="error" />
              </View>
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 ProgressBar 스펙입니다." badge="디자인">
        <TokenSpecTable title="ProgressBar 토큰" rows={[{
        property: 'Track 배경',
        token: COMMON_TOKEN_MAP.track.token,
        value: COMMON_TOKEN_MAP.track.value,
        type: 'color'
      }, {
        property: 'Fill 배경',
        token: COLOR_TOKEN_MAP.primary.token,
        value: COLOR_TOKEN_MAP.primary.value,
        type: 'color'
      }, {
        property: 'Track 라디우스',
        token: 'height / 2 (pill)',
        value: 'pill 형태'
      }, {
        property: 'Label 색상',
        token: COMMON_TOKEN_MAP.labelColor.token,
        value: COMMON_TOKEN_MAP.labelColor.value,
        type: 'color'
      }, {
        property: 'Label 타이포',
        token: 'Caption',
        value: \`\${textStyle.caption.fontSize}px / \${textStyle.caption.lineHeight}px / \${textStyle.caption.fontWeight}\`,
        type: 'typography'
      }, {
        property: 'Label-Track 간격',
        token: COMMON_TOKEN_MAP.labelGap.token,
        value: COMMON_TOKEN_MAP.labelGap.value,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="애니메이션 (권장값)" rows={[{
        property: 'Determinate transition',
        token: '—',
        value: '300ms ease'
      }, {
        property: 'Reduce Motion 대응',
        token: '—',
        value: 'transition 제거'
      }]} />
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 ProgressBar 컴포넌트 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { ProgressBar } from '@design-system/components/ProgressBar';\`} />

        <CodeBlock title="기본 사용" code={\`<ProgressBar progress={0.6} />\`} />

        <CodeBlock title="Color + Size + Label" code={\`<ProgressBar progress={0.75} size="large" color="success" showLabel />\`} />

        <CodeBlock title="동적 진행률" code={\`const [progress, setProgress] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => Math.min(prev + 0.01, 1));
  }, 50);
  return () => clearInterval(interval);
}, []);

<ProgressBar progress={progress} color="primary" showLabel />\`} />

        <CodeBlock title="건강 목표 대시보드" code={\`<View style={{ gap: spacing.medium }}>
  <ProgressBar progress={waterGoal} color="success" size="small" />
  <ProgressBar progress={exerciseGoal} color="warning" size="small" />
  <ProgressBar progress={sleepGoal} color="error" size="small" />
</View>\`} />
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};const F=["Playground","ProgressValues","WithLabel","Interactive","Examples","DesignSpec","Usage"];export{S as DesignSpec,x as Examples,b as Interactive,u as Playground,d as ProgressValues,E as Usage,y as WithLabel,F as __namedExportsOrder,A as default};
