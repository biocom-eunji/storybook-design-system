import{R as e,V as o,r as u}from"./iframe-rdsxNJ7l.js";import{S as s}from"./Switch-CYXnwUe3.js";import{S as p,c as O,D as R,b as z,a as I,C as h}from"./storyHelpers-D5HpvNsw.js";import{T as C}from"./TokenSpecTable-CJp3A6kK.js";import{s as t,r as v,d as E,c as r,T,f as W,a as V}from"./theme-KAxj7l-q.js";import"./preload-helper-PPVm8Dsz.js";const M={off:{default:{trackBg:"color/background/off",thumbBg:"color/text/onColor"},disabled:{trackBg:"color/background/disabled",thumbBg:"color/text/onColor"}},on:{default:{trackBg:"color/background/brand",thumbBg:"color/text/onColor"},disabled:{trackBg:"color/background/disabled",thumbBg:"color/text/onColor"}}},K={title:"Input/Switch",component:s,argTypes:{checked:{control:"boolean",description:"켜짐/꺼짐 상태 (Figma: Checked)"},disabled:{control:"boolean",description:"비활성화"}},tags:["autodocs"]},f={render:()=>{const[l,c]=u.useState(!1);return e.createElement(s,{checked:l,onPress:()=>c(!l)})},parameters:{docs:{description:{story:"**적용 토큰**: Track `color/background/brand`, Thumb `color/text/onColor`, 라디우스 `borderRadius/full`. 클릭하여 on/off를 토글합니다."}}}},k={name:"상태별",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(p,{title:"상태별",description:"Off / On / Disabled Off / Disabled On 네 가지 상태를 확인합니다."},e.createElement(O,{items:[{label:"Off",content:e.createElement(s,{checked:!1})},{label:"On",content:e.createElement(s,{checked:!0})},{label:"Off (Disabled)",content:e.createElement(s,{checked:!1,disabled:!0})},{label:"On (Disabled)",content:e.createElement(s,{checked:!0,disabled:!0})}]}))),parameters:{docs:{description:{story:["**Off**: Track `color/background/off` + Thumb `color/text/onColor`","**On**: Track `color/background/brand` + Thumb `color/text/onColor`","**Disabled**: Track `color/background/disabled` + 그림자 제거"].join(`

`)}}}},y={name:"인터랙티브 데모",render:()=>{const[l,c]=u.useState(!0),[i,b]=u.useState(!1),[n,d]=u.useState(!1),a=({label:m,sublabel:g,checked:D,onPress:B,disabled:P})=>e.createElement(o,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:t.medium,borderBottomWidth:1,borderBottomColor:r.borderDefault}},e.createElement(o,{style:{flex:1,marginRight:t.large}},e.createElement(T,{style:{fontSize:15,fontWeight:"500",color:P?r.textTertiary:r.textPrimary}},m),g&&e.createElement(T,{style:{fontSize:13,color:r.textSecondary,marginTop:t.xsmall}},g)),e.createElement(s,{checked:D,onPress:B,disabled:P}));return e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(p,{title:"인터랙티브 데모",description:"설정 화면 패턴입니다. 클릭하여 토글 애니메이션과 상태 변화를 확인하세요."},e.createElement(o,{style:{maxWidth:400}},e.createElement(a,{label:"푸시 알림",sublabel:"건강 리포트, 식단 알림 등",checked:l,onPress:()=>c(!l)}),e.createElement(a,{label:"다크 모드",sublabel:"준비 중 (v2 예정)",checked:i,onPress:()=>b(!i),disabled:!0}),e.createElement(a,{label:"생체 인증",sublabel:"Face ID / 지문으로 빠른 로그인",checked:n,onPress:()=>d(!n)}))))}},S={name:"디자인 스펙",render:()=>{const l=["off","on"],c=["default","disabled"],i={"color/background/brand":r.backgroundBrand,"color/background/off":r.backgroundOff,"color/background/disabled":r.backgroundDisabled,"color/text/onColor":r.textOnColor},b=n=>i[n]??n;return e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(p,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 Switch 전체 조합 스펙입니다.",badge:"디자인"},l.map(n=>c.map(d=>{const a=M[n][d];return e.createElement(o,{key:`${n}-${d}`},e.createElement(C,{title:`${n} / ${d}`,rows:[{property:"Track 배경",token:a.trackBg,value:b(a.trackBg),type:"color"},{property:"Thumb 배경",token:a.thumbBg,value:b(a.thumbBg),type:"color"}]}),e.createElement(R,null))})),e.createElement(C,{title:"공통 레이아웃",rows:[{property:"Track 크기",token:"—",value:"52×32",type:"size"},{property:"Thumb 크기",token:"—",value:"28×28",type:"size"},{property:"Track 라디우스",token:"borderRadius/full",value:v.full,type:"size"},{property:"Thumb 라디우스",token:"borderRadius/full",value:v.full,type:"size"},{property:"Thumb 그림자",token:"shadow/level2",value:`offset(0,${E.level2.shadowOffset.height}) blur(${E.level2.shadowRadius}) opacity(${E.level2.shadowOpacity})`},{property:"Thumb 이동 방식",token:"—",value:"alignSelf (flex-start ↔ flex-end)"}]}),e.createElement(C,{title:"애니메이션 (권장값)",rows:[{property:"Duration",token:"—",value:"150~200ms"},{property:"Easing",token:"—",value:"ease-in-out"},{property:"Reduce Motion 대응",token:"—",value:"prefers-reduced-motion 시 즉시 전환"}]})))}},w={name:"실전 예시",render:()=>{const[l,c]=u.useState(!0),[i,b]=u.useState(!0),[n,d]=u.useState(!1),a=[{label:"푸시 알림",sublabel:"건강 리포트, 목표 달성 알림",checked:l,onPress:()=>c(!l)},{label:"식단 기록 리마인더",sublabel:"매일 아침·점심·저녁 알림",checked:i,onPress:()=>b(!i)},{label:"수면 분석 알림",sublabel:"기상 후 수면 리포트 발송",checked:n,onPress:()=>d(!n)}];return e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(p,{title:"실전 예시",description:"실제 화면에서 Switch가 배치되는 맥락을 확인합니다."},e.createElement(o,{style:{gap:t["2xlarge"],maxWidth:375}},e.createElement(z,{gap:t.small},e.createElement(I,null,"알림 설정"),e.createElement(o,{style:{borderWidth:1,borderColor:r.borderDefault,borderRadius:v.large,padding:t.xlarge,backgroundColor:r.backgroundPrimary}},a.map((m,g)=>e.createElement(o,{key:m.label,style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:t.medium,borderBottomWidth:g<a.length-1?1:0,borderBottomColor:r.borderDefault}},e.createElement(o,{style:{flex:1,marginRight:t.large}},e.createElement(T,{style:{fontSize:V.body2.fontSize,fontWeight:W.medium,color:r.textPrimary}},m.label),e.createElement(T,{style:{fontSize:V.caption.fontSize,color:r.textSecondary,marginTop:t.xsmall}},m.sublabel)),e.createElement(s,{checked:m.checked,onPress:m.onPress}))))))))}},x={name:"사용 가이드",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(p,{title:"사용 가이드",description:"개발자를 위한 Switch 컴포넌트 사용 예시입니다.",badge:"개발"},e.createElement(h,{title:"Import",code:"import { Switch } from '@design-system/components/Switch';"}),e.createElement(h,{title:"기본 사용",code:`const [checked, setActive] = useState(false);

<Switch
  checked={checked}
  onPress={() => setActive(!checked)}
/>`}),e.createElement(h,{title:"설정 화면 패턴 (라벨 + Switch)",code:`<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <View>
    <Text style={{ fontSize: 15, color: semanticColor.textPrimary }}>
      푸시 알림
    </Text>
    <Text style={{ fontSize: 13, color: semanticColor.textSecondary }}>
      건강 리포트, 식단 알림 등
    </Text>
  </View>
  <Switch checked={isEnabled} onPress={toggle} />
</View>`}),e.createElement(h,{title:"비활성화",code:`<Switch checked={false} disabled />
<Switch checked={true} disabled />`})))};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setActive] = useState(false);
    return <Switch checked={checked} onPress={() => setActive(!checked)} />;
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: Track \`color/background/brand\`, Thumb \`color/text/onColor\`, 라디우스 \`borderRadius/full\`. 클릭하여 on/off를 토글합니다.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '상태별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="상태별" description="Off / On / Disabled Off / Disabled On 네 가지 상태를 확인합니다.">
        <CompareGrid items={[{
        label: 'Off',
        content: <Switch checked={false} />
      }, {
        label: 'On',
        content: <Switch checked={true} />
      }, {
        label: 'Off (Disabled)',
        content: <Switch checked={false} disabled />
      }, {
        label: 'On (Disabled)',
        content: <Switch checked={true} disabled />
      }]} />
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: ['**Off**: Track \`color/background/off\` + Thumb \`color/text/onColor\`', '**On**: Track \`color/background/brand\` + Thumb \`color/text/onColor\`', '**Disabled**: Track \`color/background/disabled\` + 그림자 제거'].join('\\n\\n')
      }
    }
  }
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [biometric, setBiometric] = useState(false);
    const SwitchRow = ({
      label,
      sublabel,
      checked,
      onPress,
      disabled
    }: {
      label: string;
      sublabel?: string;
      checked: boolean;
      onPress: () => void;
      disabled?: boolean;
    }) => <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: spacing.medium,
      borderBottomWidth: 1,
      borderBottomColor: semanticColor.borderDefault
    }}>
        <View style={{
        flex: 1,
        marginRight: spacing.large
      }}>
          <Text style={{
          fontSize: 15,
          fontWeight: '500',
          color: disabled ? semanticColor.textTertiary : semanticColor.textPrimary
        }}>{label}</Text>
          {sublabel && <Text style={{
          fontSize: 13,
          color: semanticColor.textSecondary,
          marginTop: spacing.xsmall
        }}>{sublabel}</Text>}
        </View>
        <Switch checked={checked} onPress={onPress} disabled={disabled} />
      </View>;
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="설정 화면 패턴입니다. 클릭하여 토글 애니메이션과 상태 변화를 확인하세요.">
          <View style={{
          maxWidth: 400
        }}>
            <SwitchRow label="푸시 알림" sublabel="건강 리포트, 식단 알림 등" checked={notifications} onPress={() => setNotifications(!notifications)} />
            <SwitchRow label="다크 모드" sublabel="준비 중 (v2 예정)" checked={darkMode} onPress={() => setDarkMode(!darkMode)} disabled />
            <SwitchRow label="생체 인증" sublabel="Face ID / 지문으로 빠른 로그인" checked={biometric} onPress={() => setBiometric(!biometric)} />
          </View>
        </Section>
      </View>;
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => {
    const checkedStates = ['off', 'on'] as const;
    const disabledStates = ['default', 'disabled'] as const;
    const resolve: Record<string, string> = {
      'color/background/brand': semanticColor.backgroundBrand,
      'color/background/off': semanticColor.backgroundOff,
      'color/background/disabled': semanticColor.backgroundDisabled,
      'color/text/onColor': semanticColor.textOnColor
    };
    const r = (token: string) => resolve[token] ?? token;
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 Switch 전체 조합 스펙입니다." badge="디자인">
          {checkedStates.map(checked => disabledStates.map(dis => {
          const t = TRACK_TOKEN_MAP[checked][dis];
          return <View key={\`\${checked}-\${dis}\`}>
                  <TokenSpecTable title={\`\${checked} / \${dis}\`} rows={[{
              property: 'Track 배경',
              token: t.trackBg,
              value: r(t.trackBg),
              type: 'color'
            }, {
              property: 'Thumb 배경',
              token: t.thumbBg,
              value: r(t.thumbBg),
              type: 'color'
            }]} />
                  <Divider />
                </View>;
        }))}

          <TokenSpecTable title="공통 레이아웃" rows={[{
          property: 'Track 크기',
          token: '—',
          value: '52×32',
          type: 'size'
        }, {
          property: 'Thumb 크기',
          token: '—',
          value: '28×28',
          type: 'size'
        }, {
          property: 'Track 라디우스',
          token: 'borderRadius/full',
          value: radius.full,
          type: 'size'
        }, {
          property: 'Thumb 라디우스',
          token: 'borderRadius/full',
          value: radius.full,
          type: 'size'
        }, {
          property: 'Thumb 그림자',
          token: 'shadow/level2',
          value: \`offset(0,\${shadow.level2.shadowOffset.height}) blur(\${shadow.level2.shadowRadius}) opacity(\${shadow.level2.shadowOpacity})\`
        }, {
          property: 'Thumb 이동 방식',
          token: '—',
          value: 'alignSelf (flex-start ↔ flex-end)'
        }]} />

          <TokenSpecTable title="애니메이션 (권장값)" rows={[{
          property: 'Duration',
          token: '—',
          value: '150~200ms'
        }, {
          property: 'Easing',
          token: '—',
          value: 'ease-in-out'
        }, {
          property: 'Reduce Motion 대응',
          token: '—',
          value: 'prefers-reduced-motion 시 즉시 전환'
        }]} />
        </Section>
      </View>;
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => {
    const [push, setPush] = useState(true);
    const [meal, setMeal] = useState(true);
    const [sleep, setSleep] = useState(false);
    const settings = [{
      label: '푸시 알림',
      sublabel: '건강 리포트, 목표 달성 알림',
      checked: push,
      onPress: () => setPush(!push)
    }, {
      label: '식단 기록 리마인더',
      sublabel: '매일 아침·점심·저녁 알림',
      checked: meal,
      onPress: () => setMeal(!meal)
    }, {
      label: '수면 분석 알림',
      sublabel: '기상 후 수면 리포트 발송',
      checked: sleep,
      onPress: () => setSleep(!sleep)
    }];
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="실전 예시" description="실제 화면에서 Switch가 배치되는 맥락을 확인합니다.">
          <View style={{
          gap: spacing['2xlarge'],
          maxWidth: 375
        }}>
            <Col gap={spacing.small}>
              <StateLabel>알림 설정</StateLabel>
              <View style={{
              borderWidth: 1,
              borderColor: semanticColor.borderDefault,
              borderRadius: radius.large,
              padding: spacing.xlarge,
              backgroundColor: semanticColor.backgroundPrimary
            }}>
                {settings.map((item, i) => <View key={item.label} style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: spacing.medium,
                borderBottomWidth: i < settings.length - 1 ? 1 : 0,
                borderBottomColor: semanticColor.borderDefault
              }}>
                    <View style={{
                  flex: 1,
                  marginRight: spacing.large
                }}>
                      <Text style={{
                    fontSize: textStyle.body2.fontSize,
                    fontWeight: fw.medium,
                    color: semanticColor.textPrimary
                  }}>{item.label}</Text>
                      <Text style={{
                    fontSize: textStyle.caption.fontSize,
                    color: semanticColor.textSecondary,
                    marginTop: spacing.xsmall
                  }}>{item.sublabel}</Text>
                    </View>
                    <Switch checked={item.checked} onPress={item.onPress} />
                  </View>)}
              </View>
            </Col>
          </View>
        </Section>
      </View>;
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Switch 컴포넌트 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { Switch } from '@design-system/components/Switch';\`} />

        <CodeBlock title="기본 사용" code={\`const [checked, setActive] = useState(false);

<Switch
  checked={checked}
  onPress={() => setActive(!checked)}
/>\`} />

        <CodeBlock title="설정 화면 패턴 (라벨 + Switch)" code={\`<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <View>
    <Text style={{ fontSize: 15, color: semanticColor.textPrimary }}>
      푸시 알림
    </Text>
    <Text style={{ fontSize: 13, color: semanticColor.textSecondary }}>
      건강 리포트, 식단 알림 등
    </Text>
  </View>
  <Switch checked={isEnabled} onPress={toggle} />
</View>\`} />

        <CodeBlock title="비활성화" code={\`<Switch checked={false} disabled />
<Switch checked={true} disabled />\`} />
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};const L=["Playground","AllStates","Interchecked","DesignSpec","InContext","Usage"];export{k as AllStates,S as DesignSpec,w as InContext,y as Interchecked,f as Playground,x as Usage,L as __namedExportsOrder,K as default};
