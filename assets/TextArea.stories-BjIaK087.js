import{R as e,V as a}from"./iframe-rdsxNJ7l.js";import{T as n}from"./TextField-BD3-dNrB.js";import{B as F}from"./Button-DT9-49YQ.js";import{S as p,b as i,a as c,D as E,C as d}from"./storyHelpers-D5HpvNsw.js";import{T as k}from"./TokenSpecTable-CJp3A6kK.js";import{s as t,a as r,r as T,c as o,T as H}from"./theme-KAxj7l-q.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DGfD0Qtj.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";import"./BaseInput-Bw9fcaU4.js";import"./index-fsILkl5G.js";import"./index-LHpOlSgp.js";const w={default:{background:"color/background/primary",border:"color/border/default",text:"color/text/primary",placeholder:"color/text/tertiary",label:"color/text/primary"},focus:{background:"color/background/primary",border:"color/border/focus",text:"color/text/primary",placeholder:"color/text/tertiary",label:"color/text/primary"},filled:{background:"color/background/primary",border:"color/border/active",text:"color/text/primary",placeholder:"color/text/tertiary",label:"color/text/primary"},error:{background:"color/background/primary",border:"color/border/error",text:"color/text/primary",placeholder:"color/text/tertiary",label:"color/text/primary",message:"color/text/error"},disabled:{background:"color/background/secondary",border:"color/border/default",text:"color/text/tertiary",placeholder:"color/text/tertiary",label:"color/text/primary"}},O={title:"Input/TextArea",component:n,argTypes:{label:{control:"text",description:"라벨 텍스트"},placeholder:{control:"text",description:"플레이스홀더"},helperText:{control:"text",description:"하단 도움말 텍스트"},errorMessage:{control:"text",description:"에러 메시지"},disabled:{control:"boolean",description:"비활성화"},maxCharCount:{control:"number",description:"최대 글자 수 카운터"},minHeight:{control:"number",description:"Textarea 최소 높이"}},args:{multiline:!0},tags:["autodocs"]},m={args:{label:"자기소개",placeholder:"자기소개를 입력해 주세요.",multiline:!0,maxCharCount:200},parameters:{docs:{description:{story:"**적용 토큰**: `color/background/primary`, `color/border/default`, `color/text/primary`, `Body 2`, `Label 2`, `borderRadius/medium`, `spacing/large`, `spacing/medium`"}}}},g={name:"상태별 비교",render:()=>e.createElement(a,{style:{gap:t["3xlarge"],maxWidth:400}},e.createElement(p,{title:"상태별 비교",description:"Default, Filled, Error, Disabled 상태를 확인합니다."},e.createElement(a,{style:{gap:t.xlarge}},e.createElement(i,{gap:t.small},e.createElement(c,null,"Default"),e.createElement(n,{label:"자기소개",placeholder:"자기소개를 입력해 주세요.",multiline:!0})),e.createElement(i,{gap:t.small},e.createElement(c,null,"Filled"),e.createElement(n,{label:"자기소개",value:"안녕하세요. 건강한 라이프스타일에 관심이 많은 사용자입니다. 바이오컴을 통해 식단과 수면 패턴을 관리하고 있어요.",multiline:!0,maxCharCount:200})),e.createElement(i,{gap:t.small},e.createElement(c,null,"Error"),e.createElement(n,{label:"자기소개",value:"짧은 소개",multiline:!0,maxCharCount:200,errorMessage:"최소 20자 이상 입력해 주세요."})),e.createElement(i,{gap:t.small},e.createElement(c,null,"Disabled"),e.createElement(n,{label:"자기소개",placeholder:"입력할 수 없습니다.",multiline:!0,disabled:!0}))))),parameters:{docs:{description:{story:["**Default**: `color/border/default`","**Focus**: `color/border/focus`","**Filled**: `color/border/active` + 글자 수 카운터","**Error**: `color/border/error` + `color/text/error`","**Disabled**: `color/background/secondary` + `color/text/tertiary`"].join(`

`)}}}},u={name:"글자 수 카운터",render:()=>e.createElement(a,{style:{gap:t["3xlarge"],maxWidth:400}},e.createElement(p,{title:"글자 수 카운터",description:"TextArea는 내부 하단 오른쪽에 글자 수 카운터가 표시됩니다."},e.createElement(a,{style:{gap:t.xlarge}},e.createElement(i,{gap:t.small},e.createElement(c,null,"카운터 표시"),e.createElement(n,{label:"메모",placeholder:"메모를 입력하세요.",multiline:!0,maxCharCount:500})),e.createElement(i,{gap:t.small},e.createElement(c,null,"초과 상태"),e.createElement(n,{label:"메모",value:"글자 수가 제한을 초과하면 카운터와 테두리가 에러 색상으로 변경됩니다. 이 텍스트는 50자를 초과합니다.",multiline:!0,maxCharCount:50,errorMessage:"최대 50자까지 입력 가능합니다."}))))),parameters:{docs:{description:{story:"카운터: `color/text/primary` (`Label 2`) · 초과 시: `color/text/error`"}}}},b={name:"높이 커스텀",render:()=>e.createElement(a,{style:{gap:t["3xlarge"],maxWidth:400}},e.createElement(p,{title:"높이 커스텀",description:"minHeight prop으로 최소 높이를 조절할 수 있습니다."},e.createElement(a,{style:{gap:t.xlarge}},e.createElement(i,{gap:t.small},e.createElement(c,null,"minHeight: 80"),e.createElement(n,{label:"짧은 메모",placeholder:"짧은 메모...",multiline:!0,minHeight:80})),e.createElement(i,{gap:t.small},e.createElement(c,null,"minHeight: 160"),e.createElement(n,{label:"긴 메모",placeholder:"긴 메모...",multiline:!0,minHeight:160})))))},y={name:"실전 예시",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(p,{title:"실전 예시",description:"피드백 작성 폼에서의 TextArea 활용 예시입니다."},e.createElement(a,{style:{maxWidth:375,padding:t.xlarge,backgroundColor:o.backgroundPrimary,borderRadius:T.large,borderWidth:1,borderColor:o.borderDefault,gap:t.xlarge}},e.createElement(H,{style:{fontSize:r.heading.fontSize,fontWeight:r.heading.fontWeight,lineHeight:r.heading.lineHeight,color:o.textPrimary}},"피드백 작성"),e.createElement(a,{style:{gap:t.large}},e.createElement(n,{label:"제목",placeholder:"피드백 제목을 입력해 주세요."}),e.createElement(n,{label:"내용",placeholder:"피드백 내용을 자세히 작성해 주세요.",multiline:!0,minHeight:120,maxCharCount:500})),e.createElement(F,{label:"제출하기",variant:"primary",size:"large"}))))},x={name:"디자인 스펙",render:()=>{const f=["default","focus","filled","error","disabled"];return e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(p,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 TextArea 상태별 스펙입니다.",badge:"디자인"},f.map(C=>{const v={"color/background/primary":o.backgroundPrimary,"color/background/secondary":o.backgroundSecondary,"color/border/default":o.borderDefault,"color/border/focus":o.borderFocus,"color/border/active":o.borderActive,"color/border/error":o.borderError,"color/text/primary":o.textPrimary,"color/text/tertiary":o.textTertiary,"color/text/error":o.textError},s=S=>v[S]??S,l=w[C];return e.createElement(a,{key:C},e.createElement(k,{title:`state: ${C}`,rows:[{property:"배경색",token:l.background,value:s(l.background),type:"color"},{property:"테두리",token:l.border,value:s(l.border),type:"color"},{property:"텍스트",token:l.text,value:s(l.text),type:"color"},{property:"Placeholder",token:l.placeholder,value:s(l.placeholder),type:"color"},{property:"라벨",token:l.label,value:s(l.label),type:"color"},..."message"in l?[{property:"메시지",token:l.message,value:s(l.message),type:"color"}]:[]]}),e.createElement(E,null))}),e.createElement(k,{title:"레이아웃",rows:[{property:"입력 타이포",token:"Body 2",value:`${r.body2.fontSize}px / ${r.body2.lineHeight}px / ${r.body2.fontWeight}`,type:"typography"},{property:"라벨 타이포",token:"Label 2",value:`${r.label2.fontSize}px / ${r.label2.lineHeight}px / ${r.label2.fontWeight}`,type:"typography"},{property:"헬퍼 타이포",token:"Label 2",value:`${r.label2.fontSize}px / ${r.label2.lineHeight}px / ${r.label2.fontWeight}`,type:"typography"},{property:"좌우 패딩",token:"spacing/large",value:t.large,type:"size"},{property:"상하 패딩",token:"spacing/medium",value:t.medium,type:"size"},{property:"코너 라디우스",token:"borderRadius/medium",value:T.medium,type:"size"},{property:"최소 높이",token:"prop: minHeight",value:"100 (기본값)"},{property:"카운터 타이포",token:"Label 2",value:`${r.label2.fontSize}px / ${r.label2.lineHeight}px / ${r.label2.fontWeight}`,type:"typography"}]}),e.createElement(E,null),e.createElement(k,{title:"TextField와의 차이점",rows:[{property:"multiline",token:"prop",value:"true (고정)"},{property:"paddingVertical",token:"spacing/medium",value:t.medium,type:"size"},{property:"카운터 위치",token:"—",value:"인풋 내부 하단 오른쪽"},{property:"textAlignVertical",token:"—",value:"top"},{property:"최소 높이",token:"prop: minHeight",value:"100 (기본값, 조절 가능)"}]})))}},h={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(p,{title:"사용 가이드",description:"TextArea는 TextField 컴포넌트의 multiline 모드입니다.",badge:"개발"},e.createElement(d,{title:"Import (TextField와 동일)",code:"import { TextField } from '@design-system/components/TextField';"}),e.createElement(d,{title:"기본 사용",code:`<TextField
  label="자기소개"
  placeholder="자기소개를 입력해 주세요."
  multiline
  onChangeText={setBio}
/>`}),e.createElement(d,{title:"글자 수 제한",code:`<TextField
  label="메모"
  multiline
  maxCharCount={200}
  onChangeText={setMemo}
/>`}),e.createElement(d,{title:"높이 커스텀",code:`<TextField
  label="상세 설명"
  multiline
  minHeight={160}
  maxCharCount={500}
/>`}),e.createElement(d,{title:"유효성 검사",code:`<TextField
  label="자기소개"
  multiline
  value={bio}
  onChangeText={setBio}
  maxCharCount={200}
  errorMessage={bio.length < 20 ? '최소 20자 이상 입력해 주세요.' : undefined}
/>`})))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: '자기소개',\n    placeholder: '자기소개를 입력해 주세요.',\n    multiline: true,\n    maxCharCount: 200\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '**적용 토큰**: `color/background/primary`, `color/border/default`, `color/text/primary`, `Body 2`, `Label 2`, `borderRadius/medium`, `spacing/large`, `spacing/medium`'\n      }\n    }\n  }\n}",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '상태별 비교',
  render: () => <View style={{
    gap: spacing['3xlarge'],
    maxWidth: 400
  }}>
      <Section title="상태별 비교" description="Default, Filled, Error, Disabled 상태를 확인합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Default</StateLabel>
            <TextField label="자기소개" placeholder="자기소개를 입력해 주세요." multiline />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Filled</StateLabel>
            <TextField label="자기소개" value="안녕하세요. 건강한 라이프스타일에 관심이 많은 사용자입니다. 바이오컴을 통해 식단과 수면 패턴을 관리하고 있어요." multiline maxCharCount={200} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Error</StateLabel>
            <TextField label="자기소개" value="짧은 소개" multiline maxCharCount={200} errorMessage="최소 20자 이상 입력해 주세요." />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <TextField label="자기소개" placeholder="입력할 수 없습니다." multiline disabled />
          </Col>
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: ['**Default**: \`color/border/default\`', '**Focus**: \`color/border/focus\`', '**Filled**: \`color/border/active\` + 글자 수 카운터', '**Error**: \`color/border/error\` + \`color/text/error\`', '**Disabled**: \`color/background/secondary\` + \`color/text/tertiary\`'].join('\\n\\n')
      }
    }
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '글자 수 카운터',
  render: () => <View style={{
    gap: spacing['3xlarge'],
    maxWidth: 400
  }}>
      <Section title="글자 수 카운터" description="TextArea는 내부 하단 오른쪽에 글자 수 카운터가 표시됩니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>카운터 표시</StateLabel>
            <TextField label="메모" placeholder="메모를 입력하세요." multiline maxCharCount={500} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>초과 상태</StateLabel>
            <TextField label="메모" value="글자 수가 제한을 초과하면 카운터와 테두리가 에러 색상으로 변경됩니다. 이 텍스트는 50자를 초과합니다." multiline maxCharCount={50} errorMessage="최대 50자까지 입력 가능합니다." />
          </Col>
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: '카운터: \`color/text/primary\` (\`Label 2\`) · 초과 시: \`color/text/error\`'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '높이 커스텀',
  render: () => <View style={{
    gap: spacing['3xlarge'],
    maxWidth: 400
  }}>
      <Section title="높이 커스텀" description="minHeight prop으로 최소 높이를 조절할 수 있습니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>minHeight: 80</StateLabel>
            <TextField label="짧은 메모" placeholder="짧은 메모..." multiline minHeight={80} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>minHeight: 160</StateLabel>
            <TextField label="긴 메모" placeholder="긴 메모..." multiline minHeight={160} />
          </Col>
        </View>
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="피드백 작성 폼에서의 TextArea 활용 예시입니다.">
        <View style={{
        maxWidth: 375,
        padding: spacing.xlarge,
        backgroundColor: semanticColor.backgroundPrimary,
        borderRadius: radius.large,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        gap: spacing.xlarge
      }}>
          <Text style={{
          fontSize: textStyle.heading.fontSize,
          fontWeight: textStyle.heading.fontWeight,
          lineHeight: textStyle.heading.lineHeight,
          color: semanticColor.textPrimary
        }}>
            피드백 작성
          </Text>

          <View style={{
          gap: spacing.large
        }}>
            <TextField label="제목" placeholder="피드백 제목을 입력해 주세요." />
            <TextField label="내용" placeholder="피드백 내용을 자세히 작성해 주세요." multiline minHeight={120} maxCharCount={500} />
          </View>

          <Button label="제출하기" variant="primary" size="large" />
        </View>
      </Section>
    </View>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => {
    const states = ['default', 'focus', 'filled', 'error', 'disabled'] as const;
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 TextArea 상태별 스펙입니다." badge="디자인">
          {states.map(state => {
          const stateColors: Record<string, string> = {
            'color/background/primary': semanticColor.backgroundPrimary,
            'color/background/secondary': semanticColor.backgroundSecondary,
            'color/border/default': semanticColor.borderDefault,
            'color/border/focus': semanticColor.borderFocus,
            'color/border/active': semanticColor.borderActive,
            'color/border/error': semanticColor.borderError,
            'color/text/primary': semanticColor.textPrimary,
            'color/text/tertiary': semanticColor.textTertiary,
            'color/text/error': semanticColor.textError
          };
          const resolve = (token: string) => stateColors[token] ?? token;
          const st = STATE_TOKEN_MAP[state];
          return <View key={state}>
                <TokenSpecTable title={\`state: \${state}\`} rows={[{
              property: '배경색',
              token: st.background,
              value: resolve(st.background),
              type: 'color'
            }, {
              property: '테두리',
              token: st.border,
              value: resolve(st.border),
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
              property: '라벨',
              token: st.label,
              value: resolve(st.label),
              type: 'color'
            }, ...('message' in st ? [{
              property: '메시지',
              token: (st as any).message,
              value: resolve((st as any).message),
              type: 'color' as const
            }] : [])]} />
                <Divider />
              </View>;
        })}

          <TokenSpecTable title="레이아웃" rows={[{
          property: '입력 타이포',
          token: 'Body 2',
          value: \`\${textStyle.body2.fontSize}px / \${textStyle.body2.lineHeight}px / \${textStyle.body2.fontWeight}\`,
          type: 'typography'
        }, {
          property: '라벨 타이포',
          token: 'Label 2',
          value: \`\${textStyle.label2.fontSize}px / \${textStyle.label2.lineHeight}px / \${textStyle.label2.fontWeight}\`,
          type: 'typography'
        }, {
          property: '헬퍼 타이포',
          token: 'Label 2',
          value: \`\${textStyle.label2.fontSize}px / \${textStyle.label2.lineHeight}px / \${textStyle.label2.fontWeight}\`,
          type: 'typography'
        }, {
          property: '좌우 패딩',
          token: 'spacing/large',
          value: spacing.large,
          type: 'size'
        }, {
          property: '상하 패딩',
          token: 'spacing/medium',
          value: spacing.medium,
          type: 'size'
        }, {
          property: '코너 라디우스',
          token: 'borderRadius/medium',
          value: radius.medium,
          type: 'size'
        }, {
          property: '최소 높이',
          token: 'prop: minHeight',
          value: '100 (기본값)'
        }, {
          property: '카운터 타이포',
          token: 'Label 2',
          value: \`\${textStyle.label2.fontSize}px / \${textStyle.label2.lineHeight}px / \${textStyle.label2.fontWeight}\`,
          type: 'typography'
        }]} />

          <Divider />

          <TokenSpecTable title="TextField와의 차이점" rows={[{
          property: 'multiline',
          token: 'prop',
          value: 'true (고정)'
        }, {
          property: 'paddingVertical',
          token: 'spacing/medium',
          value: spacing.medium,
          type: 'size'
        }, {
          property: '카운터 위치',
          token: '—',
          value: '인풋 내부 하단 오른쪽'
        }, {
          property: 'textAlignVertical',
          token: '—',
          value: 'top'
        }, {
          property: '최소 높이',
          token: 'prop: minHeight',
          value: '100 (기본값, 조절 가능)'
        }]} />
        </Section>
      </View>;
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="TextArea는 TextField 컴포넌트의 multiline 모드입니다." badge="개발">
        <CodeBlock title="Import (TextField와 동일)" code={\`import { TextField } from '@design-system/components/TextField';\`} />

        <CodeBlock title="기본 사용" code={\`<TextField
  label="자기소개"
  placeholder="자기소개를 입력해 주세요."
  multiline
  onChangeText={setBio}
/>\`} />

        <CodeBlock title="글자 수 제한" code={\`<TextField
  label="메모"
  multiline
  maxCharCount={200}
  onChangeText={setMemo}
/>\`} />

        <CodeBlock title="높이 커스텀" code={\`<TextField
  label="상세 설명"
  multiline
  minHeight={160}
  maxCharCount={500}
/>\`} />

        <CodeBlock title="유효성 검사" code={\`<TextField
  label="자기소개"
  multiline
  value={bio}
  onChangeText={setBio}
  maxCharCount={200}
  errorMessage={bio.length < 20 ? '최소 20자 이상 입력해 주세요.' : undefined}
/>\`} />
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};const j=["Playground","AllStates","CharCounter","CustomHeight","InContext","DesignSpec","Usage"];export{g as AllStates,u as CharCounter,b as CustomHeight,x as DesignSpec,y as InContext,m as Playground,h as Usage,j as __namedExportsOrder,O as default};
