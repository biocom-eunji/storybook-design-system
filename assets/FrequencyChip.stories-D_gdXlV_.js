import{R as e,V as n,s as F}from"./iframe-rdsxNJ7l.js";import{c as r,T as S,f as T,a as g,s as a,x as R,z,A as I,u as D}from"./theme-KAxj7l-q.js";import{S as l,D as W,R as v,b,a as E,C as c}from"./storyHelpers-D5HpvNsw.js";import{T as f}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";const C=26,B=2,L=C/2,_={safe:{main:r.backgroundSuccess,halo:r.backgroundSuccessSubtle},caution:{main:r.backgroundCaution,halo:r.backgroundCautionSubtle},warning:{main:r.backgroundWarning,halo:r.backgroundWarningSubtle},critical:{main:r.backgroundError,halo:r.backgroundErrorSubtle}},O={safe:"안전",caution:"양호",warning:"주의",critical:"위험"};function o({value:t,severity:i="safe",max:k=99,accessibilityLabel:x}){(t<0||!Number.isInteger(t))&&console.warn("FrequencyChip: value는 0 이상의 정수여야 합니다.");const w=_[i],V=t>k?`${k}+`:String(t),q=x??`${O[i]} 단계, ${t}회`;return e.createElement(n,{style:[h.chip,{backgroundColor:w.main,borderColor:w.halo}],accessibilityRole:"image",accessibilityLabel:q},e.createElement(S,{style:h.text},V))}const h=F.create({chip:{width:C,height:C,borderRadius:L,borderWidth:B,alignItems:"center",justifyContent:"center"},text:{fontSize:g.label1.fontSize,fontWeight:T.medium,color:r.textOnColor,textAlign:"center"}});o.__docgenInfo={description:"",methods:[],displayName:"FrequencyChip",props:{value:{required:!0,tsType:{name:"number"},description:"표시할 숫자 (0 이상의 정수)"},severity:{required:!1,tsType:{name:"union",raw:"'safe' | 'caution' | 'warning' | 'critical'",elements:[{name:"literal",value:"'safe'"},{name:"literal",value:"'caution'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'critical'"}]},description:"심각도",defaultValue:{value:"'safe'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:'최대값 (초과 시 "99+" 형태)',defaultValue:{value:"99",computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"접근성 라벨"}}};const H={title:"Data Display/FrequencyChip",component:o,argTypes:{value:{control:{type:"number",min:0},description:"표시할 숫자"},severity:{control:"select",options:["safe","caution","warning","critical"],description:"심각도"},max:{control:"number",description:'최대값 (초과 시 "99+"  표시)'}},tags:["autodocs"]},s={render:()=>e.createElement(v,{gap:a.medium,align:"center"},e.createElement(o,{value:8,severity:"critical"}),e.createElement(o,{value:5,severity:"warning"}),e.createElement(o,{value:2,severity:"caution"}),e.createElement(o,{value:0,severity:"safe"}))},p={name:"Severity별",render:()=>e.createElement(n,{style:{gap:a["3xlarge"]}},e.createElement(l,{title:"Severity별",description:"4단계 심각도를 색상으로 구분합니다."},e.createElement(v,{gap:a.xlarge,align:"center"},["critical","warning","caution","safe"].map(t=>e.createElement(b,{key:t,gap:a.small},e.createElement(E,null,t),e.createElement(n,{style:{alignItems:"center"}},e.createElement(o,{value:3,severity:t})))))))},y={name:"다양한 값",render:()=>e.createElement(n,{style:{gap:a["3xlarge"]}},e.createElement(l,{title:"다양한 값",description:"0부터 max 초과까지 다양한 숫자 표시입니다."},e.createElement(v,{gap:a.medium,align:"center"},[0,1,5,8,15,99,100].map(t=>e.createElement(b,{key:t,gap:a.small},e.createElement(n,{style:{alignItems:"center"}},e.createElement(o,{value:t,severity:t>=8?"critical":t>=5?"warning":t>=2?"caution":"safe"})),e.createElement(E,null,t>99?"99+":String(t)))))))},u={name:"실전 예시 (주간)",render:()=>{const t=[{day:"04/14",value:3,severity:"caution"},{day:"04/15",value:0,severity:"safe"},{day:"04/16",value:7,severity:"critical"},{day:"04/17",value:2,severity:"caution"},{day:"04/18",value:5,severity:"warning"},{day:"04/19",value:1,severity:"safe"},{day:"04/20",value:8,severity:"critical"}];return e.createElement(n,{style:{gap:a["3xlarge"]}},e.createElement(l,{title:"실전 예시",description:"일주일간 과민음식 섭취 빈도를 시각화한 예시입니다."},e.createElement(n,{style:{maxWidth:375,padding:a.large,backgroundColor:r.backgroundPrimary,borderRadius:a.small,borderWidth:1,borderColor:r.borderDefault}},e.createElement(S,{style:{fontSize:g.headline.fontSize,fontWeight:"600",color:r.textPrimary,marginBottom:a.medium}},"이번 주 섭취 빈도"),e.createElement(v,{gap:a.medium,align:"center"},t.map(i=>e.createElement(b,{key:i.day,gap:a.small},e.createElement(n,{style:{alignItems:"center"}},e.createElement(o,{value:i.value,severity:i.severity})),e.createElement(S,{style:{fontSize:g.caption.fontSize,color:r.textSecondary,textAlign:"center"}},i.day)))))))}},d={name:"디자인 스펙",render:()=>e.createElement(n,{style:{gap:a["3xlarge"]}},e.createElement(l,{title:"디자인 스펙",description:"Figma 기반 FrequencyChip 스펙입니다.",badge:"디자인"},e.createElement(f,{title:"Severity별 색상",rows:[{property:"Safe 메인",token:"role/success",value:r.backgroundSuccess,type:"color"},{property:"Safe halo",token:"green/90",value:R[90],type:"color"},{property:"Moderate 메인",token:"role/caution",value:r.backgroundCaution,type:"color"},{property:"Moderate halo",token:"yellow/90",value:z[90],type:"color"},{property:"Warning 메인",token:"role/warning",value:r.backgroundWarning,type:"color"},{property:"Warning halo",token:"orange/90",value:I[90],type:"color"},{property:"Critical 메인",token:"role/error",value:r.backgroundError,type:"color"},{property:"Critical halo",token:"red/90",value:D[90],type:"color"},{property:"텍스트",token:"color/text/onColor",value:r.textOnColor,type:"color"}]}),e.createElement(W,null),e.createElement(f,{title:"레이아웃",rows:[{property:"전체 크기",token:"—",value:"26×26",type:"size"},{property:"Border 두께",token:"—",value:2,type:"size"},{property:"Border radius",token:"—",value:13,type:"size"},{property:"타이포",token:"Label 1",value:`${g.label1.fontSize}px / Medium`,type:"typography"}]})))},m={name:"사용 가이드",render:()=>e.createElement(n,{style:{gap:a["3xlarge"]}},e.createElement(l,{title:"사용 가이드",description:"개발자를 위한 FrequencyChip 사용 예시입니다.",badge:"개발"},e.createElement(c,{title:"Import",code:"import { FrequencyChip } from '@design-system/components/FrequencyChip';"}),e.createElement(c,{title:"기본 사용",code:'<FrequencyChip value={5} severity="warning" />'}),e.createElement(c,{title:"주간 빈도 리스트",code:`{weekData.map(d => (
  <View key={d.day} style={{ alignItems: 'center', gap: 4 }}>
    <FrequencyChip value={d.value} severity={d.severity} />
    <Text style={{ fontSize: 12, color: semanticColor.textSecondary }}>
      {d.day}
    </Text>
  </View>
))}`}),e.createElement(c,{title:"접근성 라벨 (색상만으로 구분하지 않도록 라벨 동반 권장)",code:`<FrequencyChip
  value={8}
  severity="critical"
  accessibilityLabel="위험 단계, 과민음식 8회 섭취"
/>`})))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Row gap={spacing.medium} align="center">
      <FrequencyChip value={8} severity="critical" />
      <FrequencyChip value={5} severity="warning" />
      <FrequencyChip value={2} severity="caution" />
      <FrequencyChip value={0} severity="safe" />
    </Row>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Severity별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Severity별" description="4단계 심각도를 색상으로 구분합니다.">
        <Row gap={spacing.xlarge} align="center">
          {(['critical', 'warning', 'caution', 'safe'] as const).map(sev => <Col key={sev} gap={spacing.small}>
              <StateLabel>{sev}</StateLabel>
              <View style={{
            alignItems: 'center'
          }}>
                <FrequencyChip value={3} severity={sev} />
              </View>
            </Col>)}
        </Row>
      </Section>
    </View>
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '다양한 값',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="다양한 값" description="0부터 max 초과까지 다양한 숫자 표시입니다.">
        <Row gap={spacing.medium} align="center">
          {[0, 1, 5, 8, 15, 99, 100].map(v => <Col key={v} gap={spacing.small}>
              <View style={{
            alignItems: 'center'
          }}>
                <FrequencyChip value={v} severity={v >= 8 ? 'critical' : v >= 5 ? 'warning' : v >= 2 ? 'caution' : 'safe'} />
              </View>
              <StateLabel>{v > 99 ? '99+' : String(v)}</StateLabel>
            </Col>)}
        </Row>
      </Section>
    </View>
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '실전 예시 (주간)',
  render: () => {
    const weekData = [{
      day: '04/14',
      value: 3,
      severity: 'caution' as const
    }, {
      day: '04/15',
      value: 0,
      severity: 'safe' as const
    }, {
      day: '04/16',
      value: 7,
      severity: 'critical' as const
    }, {
      day: '04/17',
      value: 2,
      severity: 'caution' as const
    }, {
      day: '04/18',
      value: 5,
      severity: 'warning' as const
    }, {
      day: '04/19',
      value: 1,
      severity: 'safe' as const
    }, {
      day: '04/20',
      value: 8,
      severity: 'critical' as const
    }];
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="일주일간 과민음식 섭취 빈도를 시각화한 예시입니다.">
          <View style={{
          maxWidth: 375,
          padding: spacing.large,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: spacing.small,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault
        }}>
            <Text style={{
            fontSize: textStyle.headline.fontSize,
            fontWeight: '600',
            color: semanticColor.textPrimary,
            marginBottom: spacing.medium
          }}>이번 주 섭취 빈도</Text>
            <Row gap={spacing.medium} align="center">
              {weekData.map(d => <Col key={d.day} gap={spacing.small}>
                  <View style={{
                alignItems: 'center'
              }}>
                    <FrequencyChip value={d.value} severity={d.severity} />
                  </View>
                  <Text style={{
                fontSize: textStyle.caption.fontSize,
                color: semanticColor.textSecondary,
                textAlign: 'center'
              }}>{d.day}</Text>
                </Col>)}
            </Row>
          </View>
        </Section>
      </View>;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 기반 FrequencyChip 스펙입니다." badge="디자인">
        <TokenSpecTable title="Severity별 색상" rows={[{
        property: 'Safe 메인',
        token: 'role/success',
        value: semanticColor.backgroundSuccess,
        type: 'color'
      }, {
        property: 'Safe halo',
        token: 'green/90',
        value: green[90],
        type: 'color'
      }, {
        property: 'Moderate 메인',
        token: 'role/caution',
        value: semanticColor.backgroundCaution,
        type: 'color'
      }, {
        property: 'Moderate halo',
        token: 'yellow/90',
        value: yellow[90],
        type: 'color'
      }, {
        property: 'Warning 메인',
        token: 'role/warning',
        value: semanticColor.backgroundWarning,
        type: 'color'
      }, {
        property: 'Warning halo',
        token: 'orange/90',
        value: orange[90],
        type: 'color'
      }, {
        property: 'Critical 메인',
        token: 'role/error',
        value: semanticColor.backgroundError,
        type: 'color'
      }, {
        property: 'Critical halo',
        token: 'red/90',
        value: red[90],
        type: 'color'
      }, {
        property: '텍스트',
        token: 'color/text/onColor',
        value: semanticColor.textOnColor,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="레이아웃" rows={[{
        property: '전체 크기',
        token: '—',
        value: '26×26',
        type: 'size'
      }, {
        property: 'Border 두께',
        token: '—',
        value: 2,
        type: 'size'
      }, {
        property: 'Border radius',
        token: '—',
        value: 13,
        type: 'size'
      }, {
        property: '타이포',
        token: 'Label 1',
        value: \`\${textStyle.label1.fontSize}px / Medium\`,
        type: 'typography'
      }]} />
      </Section>
    </View>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 FrequencyChip 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { FrequencyChip } from '@design-system/components/FrequencyChip';\`} />

        <CodeBlock title="기본 사용" code={\`<FrequencyChip value={5} severity="warning" />\`} />

        <CodeBlock title="주간 빈도 리스트" code={\`{weekData.map(d => (
  <View key={d.day} style={{ alignItems: 'center', gap: 4 }}>
    <FrequencyChip value={d.value} severity={d.severity} />
    <Text style={{ fontSize: 12, color: semanticColor.textSecondary }}>
      {d.day}
    </Text>
  </View>
))}\`} />

        <CodeBlock title="접근성 라벨 (색상만으로 구분하지 않도록 라벨 동반 권장)" code={\`<FrequencyChip
  value={8}
  severity="critical"
  accessibilityLabel="위험 단계, 과민음식 8회 섭취"
/>\`} />
      </Section>
    </View>
}`,...m.parameters?.docs?.source}}};const N=["Playground","Severities","Values","InContext","DesignSpec","Usage"];export{d as DesignSpec,u as InContext,s as Playground,p as Severities,m as Usage,y as Values,N as __namedExportsOrder,H as default};
