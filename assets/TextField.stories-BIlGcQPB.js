import{R as e,V as n}from"./iframe-rdsxNJ7l.js";import{T as l}from"./TextField-BD3-dNrB.js";import{B as v}from"./Button-DT9-49YQ.js";import{S as d,b as c,a as i,D as F,C as p}from"./storyHelpers-D5HpvNsw.js";import{T as S}from"./TokenSpecTable-CJp3A6kK.js";import{s as r,a,r as C,c as o,T as w}from"./theme-KAxj7l-q.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DGfD0Qtj.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";import"./BaseInput-Bw9fcaU4.js";import"./index-fsILkl5G.js";import"./index-LHpOlSgp.js";const L={default:{background:"color/background/primary",border:"color/border/default",text:"color/text/primary",placeholder:"color/text/tertiary",label:"color/text/primary"},focus:{background:"color/background/primary",border:"color/border/focus",text:"color/text/primary",placeholder:"color/text/tertiary",label:"color/text/primary"},filled:{background:"color/background/primary",border:"color/border/active",text:"color/text/primary",placeholder:"color/text/tertiary",label:"color/text/primary"},error:{background:"color/background/primary",border:"color/border/error",text:"color/text/primary",placeholder:"color/text/tertiary",label:"color/text/primary",message:"color/text/error",icon:"color/icon/error"},success:{background:"color/background/primary",border:"color/border/focus",text:"color/text/primary",placeholder:"color/text/tertiary",label:"color/text/primary",message:"color/text/brand",icon:"color/icon/success"},disabled:{background:"color/background/secondary",border:"color/border/default",text:"color/text/tertiary",placeholder:"color/text/tertiary",label:"color/text/primary",icon:"color/icon/disabled"}},j={title:"Input/TextField",component:l,argTypes:{label:{control:"text",description:"라벨 텍스트"},placeholder:{control:"text",description:"플레이스홀더"},helperText:{control:"text",description:"하단 도움말 텍스트"},errorMessage:{control:"text",description:"에러 메시지 (표시 시 error 상태 적용)"},successMessage:{control:"text",description:"성공 메시지 (표시 시 success 상태 적용)"},disabled:{control:"boolean",description:"비활성화"},maxCharCount:{control:"number",description:"최대 글자 수 카운터"},trailingIcon:{control:"select",options:[void 0,"clear","error","success","search"],description:"오른쪽 아이콘"},trailingText:{control:"text",description:"오른쪽 텍스트 링크"},secureTextEntry:{control:"boolean",description:"비밀번호 마스킹"}},tags:["autodocs"]},m={args:{label:"이메일",placeholder:"이메일을 입력해 주세요.",helperText:"로그인에 사용할 이메일 주소를 입력하세요."},parameters:{docs:{description:{story:"**적용 토큰**: `color/background/primary`, `color/border/default`, `color/text/primary`, `Body 2`, `Label 2`, `borderRadius/medium`, `spacing/large`"}}}},g={name:"상태별 비교",render:()=>e.createElement(n,{style:{gap:r["3xlarge"],maxWidth:360}},e.createElement(d,{title:"상태별 비교",description:"Default, Focus(시뮬레이션), Filled, Error, Success, Disabled 상태를 확인합니다."},e.createElement(n,{style:{gap:r.xlarge}},e.createElement(c,{gap:r.small},e.createElement(i,null,"Default"),e.createElement(l,{label:"이메일",placeholder:"이메일을 입력해 주세요."})),e.createElement(c,{gap:r.small},e.createElement(i,null,"Filled"),e.createElement(l,{label:"이메일",value:"user@biocom.kr"})),e.createElement(c,{gap:r.small},e.createElement(i,null,"Error"),e.createElement(l,{label:"이메일",value:"invalid-email",errorMessage:"올바른 이메일 형식이 아닙니다."})),e.createElement(c,{gap:r.small},e.createElement(i,null,"Success"),e.createElement(l,{label:"이메일",value:"user@biocom.kr",successMessage:"사용 가능한 이메일입니다."})),e.createElement(c,{gap:r.small},e.createElement(i,null,"Disabled"),e.createElement(l,{label:"이메일",placeholder:"입력할 수 없습니다.",disabled:!0}))))),parameters:{docs:{description:{story:["**Default**: `color/border/default`","**Focus**: `color/border/focus`","**Filled**: `color/border/active`","**Error**: `color/border/error` + `color/text/error` + `color/icon/error`","**Success**: `color/border/focus` + `color/text/brand` + `color/icon/success`","**Disabled**: `color/background/secondary` + `color/text/tertiary`"].join(`

`)}}}},b={name:"Trailing 요소",render:()=>e.createElement(n,{style:{gap:r["3xlarge"],maxWidth:360}},e.createElement(d,{title:"Trailing 요소",description:"오른쪽 슬롯에 아이콘 또는 텍스트를 배치할 수 있습니다."},e.createElement(n,{style:{gap:r.xlarge}},e.createElement(c,{gap:r.small},e.createElement(i,null,"Clear 아이콘"),e.createElement(l,{label:"검색",value:"바이오컴",trailingIcon:"clear"})),e.createElement(c,{gap:r.small},e.createElement(i,null,"Search 아이콘"),e.createElement(l,{label:"검색",placeholder:"검색어를 입력하세요.",trailingIcon:"search"})),e.createElement(c,{gap:r.small},e.createElement(i,null,"Trailing 텍스트"),e.createElement(l,{label:"인증번호",placeholder:"인증번호 6자리",trailingText:"재전송"})),e.createElement(c,{gap:r.small},e.createElement(i,null,"비밀번호"),e.createElement(l,{label:"비밀번호",placeholder:"비밀번호를 입력하세요.",secureTextEntry:!0}))))),parameters:{docs:{description:{story:["**Clear**: `color/icon/disabled` — 입력 지우기","**Search**: `color/icon/secondary` — 검색 아이콘","**Error/Success**: 자동 표시 (`color/icon/error`, `color/icon/success`)","**Trailing 텍스트**: `color/text/secondary` → focus 시 `color/text/brand`"].join(`

`)}}}},u={name:"글자 수 카운터",render:()=>e.createElement(n,{style:{gap:r["3xlarge"],maxWidth:360}},e.createElement(d,{title:"글자 수 카운터",description:"maxCharCount prop으로 글자 수 제한과 카운터를 표시합니다."},e.createElement(n,{style:{gap:r.xlarge}},e.createElement(c,{gap:r.small},e.createElement(i,null,"기본 카운터"),e.createElement(l,{label:"닉네임",placeholder:"닉네임을 입력하세요.",maxCharCount:20})),e.createElement(c,{gap:r.small},e.createElement(i,null,"초과 상태"),e.createElement(l,{label:"닉네임",value:"이름이너무길면에러가표시됩니다열다섯글자넘음",maxCharCount:15,errorMessage:"최대 15자까지 입력 가능합니다."}))))),parameters:{docs:{description:{story:"카운터 텍스트: `color/text/primary` · 초과 시: `color/text/error`"}}}},y={name:"실전 예시",render:()=>e.createElement(n,{style:{gap:r["3xlarge"]}},e.createElement(d,{title:"실전 예시",description:"회원가입 폼에서의 TextField 활용 예시입니다."},e.createElement(n,{style:{maxWidth:375,padding:r.xlarge,backgroundColor:o.backgroundPrimary,borderRadius:C.large,borderWidth:1,borderColor:o.borderDefault,gap:r.xlarge}},e.createElement(w,{style:{fontSize:a.heading.fontSize,fontWeight:a.heading.fontWeight,lineHeight:a.heading.lineHeight,color:o.textPrimary}},"회원가입"),e.createElement(n,{style:{gap:r.large}},e.createElement(l,{label:"이름",placeholder:"이름을 입력해 주세요."}),e.createElement(l,{label:"이메일",placeholder:"이메일을 입력해 주세요.",keyboardType:"email-address"}),e.createElement(l,{label:"비밀번호",placeholder:"비밀번호를 입력해 주세요.",secureTextEntry:!0,helperText:"영문, 숫자, 특수문자 포함 8자 이상"})),e.createElement(v,{label:"가입하기",variant:"primary",size:"large"}))))},x={name:"디자인 스펙",render:()=>{const k=["default","focus","filled","error","success","disabled"];return e.createElement(n,{style:{gap:r["3xlarge"]}},e.createElement(d,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 TextField 상태별 스펙입니다.",badge:"디자인"},k.map(E=>{const f={"color/background/primary":o.backgroundPrimary,"color/background/secondary":o.backgroundSecondary,"color/border/default":o.borderDefault,"color/border/focus":o.borderFocus,"color/border/active":o.borderActive,"color/border/error":o.borderError,"color/text/primary":o.textPrimary,"color/text/tertiary":o.textTertiary,"color/text/error":o.textError,"color/text/brand":o.textBrand,"color/icon/error":o.iconError,"color/icon/success":o.iconSuccess,"color/icon/disabled":o.iconDisabled},s=T=>f[T]??T,t=L[E];return e.createElement(n,{key:E},e.createElement(S,{title:`state: ${E}`,rows:[{property:"배경색",token:t.background,value:s(t.background),type:"color"},{property:"테두리",token:t.border,value:s(t.border),type:"color"},{property:"텍스트",token:t.text,value:s(t.text),type:"color"},{property:"Placeholder",token:t.placeholder,value:s(t.placeholder),type:"color"},{property:"라벨",token:t.label,value:s(t.label),type:"color"},..."message"in t?[{property:"메시지",token:t.message,value:s(t.message),type:"color"}]:[],..."icon"in t?[{property:"아이콘",token:t.icon,value:s(t.icon),type:"color"}]:[]]}),e.createElement(F,null))}),e.createElement(S,{title:"레이아웃",rows:[{property:"입력 타이포",token:"Body 2",value:`${a.body2.fontSize}px / ${a.body2.lineHeight}px / ${a.body2.fontWeight}`,type:"typography"},{property:"라벨 타이포",token:"Label 2",value:`${a.label2.fontSize}px / ${a.label2.lineHeight}px / ${a.label2.fontWeight}`,type:"typography"},{property:"헬퍼 타이포",token:"Label 2",value:`${a.label2.fontSize}px / ${a.label2.lineHeight}px / ${a.label2.fontWeight}`,type:"typography"},{property:"좌우 패딩",token:"spacing/large",value:r.large,type:"size"},{property:"상하 패딩",token:"spacing/medium",value:r.medium,type:"size"},{property:"코너 라디우스",token:"borderRadius/medium",value:C.medium,type:"size"},{property:"라벨-인풋 간격",token:"spacing/small",value:r.small,type:"size"}]})))}},h={name:"사용 가이드",render:()=>e.createElement(n,{style:{gap:r["3xlarge"]}},e.createElement(d,{title:"사용 가이드",description:"개발자를 위한 TextField 컴포넌트 사용 예시입니다.",badge:"개발"},e.createElement(p,{title:"Import",code:"import { TextField } from '@design-system/components/TextField';"}),e.createElement(p,{title:"기본 사용",code:`<TextField
  label="이메일"
  placeholder="이메일을 입력해 주세요."
  onChangeText={setEmail}
/>`}),e.createElement(p,{title:"유효성 검사",code:`<TextField
  label="이메일"
  value={email}
  onChangeText={setEmail}
  errorMessage={emailError}
  successMessage={emailValid ? '사용 가능합니다.' : undefined}
/>`}),e.createElement(p,{title:"Trailing 요소",code:`<TextField
  label="검색"
  trailingIcon="search"
/>

<TextField
  label="인증번호"
  trailingText="재전송"
  onTrailingTextPress={handleResend}
/>`}),e.createElement(p,{title:"글자 수 제한",code:`<TextField
  label="닉네임"
  maxCharCount={20}
  onChangeText={setNickname}
/>`})))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: '이메일',\n    placeholder: '이메일을 입력해 주세요.',\n    helperText: '로그인에 사용할 이메일 주소를 입력하세요.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '**적용 토큰**: `color/background/primary`, `color/border/default`, `color/text/primary`, `Body 2`, `Label 2`, `borderRadius/medium`, `spacing/large`'\n      }\n    }\n  }\n}",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '상태별 비교',
  render: () => <View style={{
    gap: spacing['3xlarge'],
    maxWidth: 360
  }}>
      <Section title="상태별 비교" description="Default, Focus(시뮬레이션), Filled, Error, Success, Disabled 상태를 확인합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Default</StateLabel>
            <TextField label="이메일" placeholder="이메일을 입력해 주세요." />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Filled</StateLabel>
            <TextField label="이메일" value="user@biocom.kr" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Error</StateLabel>
            <TextField label="이메일" value="invalid-email" errorMessage="올바른 이메일 형식이 아닙니다." />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Success</StateLabel>
            <TextField label="이메일" value="user@biocom.kr" successMessage="사용 가능한 이메일입니다." />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <TextField label="이메일" placeholder="입력할 수 없습니다." disabled />
          </Col>
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: ['**Default**: \`color/border/default\`', '**Focus**: \`color/border/focus\`', '**Filled**: \`color/border/active\`', '**Error**: \`color/border/error\` + \`color/text/error\` + \`color/icon/error\`', '**Success**: \`color/border/focus\` + \`color/text/brand\` + \`color/icon/success\`', '**Disabled**: \`color/background/secondary\` + \`color/text/tertiary\`'].join('\\n\\n')
      }
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Trailing 요소',
  render: () => <View style={{
    gap: spacing['3xlarge'],
    maxWidth: 360
  }}>
      <Section title="Trailing 요소" description="오른쪽 슬롯에 아이콘 또는 텍스트를 배치할 수 있습니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Clear 아이콘</StateLabel>
            <TextField label="검색" value="바이오컴" trailingIcon="clear" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Search 아이콘</StateLabel>
            <TextField label="검색" placeholder="검색어를 입력하세요." trailingIcon="search" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>Trailing 텍스트</StateLabel>
            <TextField label="인증번호" placeholder="인증번호 6자리" trailingText="재전송" />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>비밀번호</StateLabel>
            <TextField label="비밀번호" placeholder="비밀번호를 입력하세요." secureTextEntry />
          </Col>
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: ['**Clear**: \`color/icon/disabled\` — 입력 지우기', '**Search**: \`color/icon/secondary\` — 검색 아이콘', '**Error/Success**: 자동 표시 (\`color/icon/error\`, \`color/icon/success\`)', '**Trailing 텍스트**: \`color/text/secondary\` → focus 시 \`color/text/brand\`'].join('\\n\\n')
      }
    }
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '글자 수 카운터',
  render: () => <View style={{
    gap: spacing['3xlarge'],
    maxWidth: 360
  }}>
      <Section title="글자 수 카운터" description="maxCharCount prop으로 글자 수 제한과 카운터를 표시합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>기본 카운터</StateLabel>
            <TextField label="닉네임" placeholder="닉네임을 입력하세요." maxCharCount={20} />
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>초과 상태</StateLabel>
            <TextField label="닉네임" value="이름이너무길면에러가표시됩니다열다섯글자넘음" maxCharCount={15} errorMessage="최대 15자까지 입력 가능합니다." />
          </Col>
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: '카운터 텍스트: \`color/text/primary\` · 초과 시: \`color/text/error\`'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="회원가입 폼에서의 TextField 활용 예시입니다.">
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
            회원가입
          </Text>

          <View style={{
          gap: spacing.large
        }}>
            <TextField label="이름" placeholder="이름을 입력해 주세요." />
            <TextField label="이메일" placeholder="이메일을 입력해 주세요." keyboardType="email-address" />
            <TextField label="비밀번호" placeholder="비밀번호를 입력해 주세요." secureTextEntry helperText="영문, 숫자, 특수문자 포함 8자 이상" />
          </View>

          <Button label="가입하기" variant="primary" size="large" />
        </View>
      </Section>
    </View>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => {
    const states = ['default', 'focus', 'filled', 'error', 'success', 'disabled'] as const;
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 TextField 상태별 스펙입니다." badge="디자인">
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
            'color/text/error': semanticColor.textError,
            'color/text/brand': semanticColor.textBrand,
            'color/icon/error': semanticColor.iconError,
            'color/icon/success': semanticColor.iconSuccess,
            'color/icon/disabled': semanticColor.iconDisabled
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
            }] : []), ...('icon' in st ? [{
              property: '아이콘',
              token: (st as any).icon,
              value: resolve((st as any).icon),
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
          property: '라벨-인풋 간격',
          token: 'spacing/small',
          value: spacing.small,
          type: 'size'
        }]} />
        </Section>
      </View>;
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 TextField 컴포넌트 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { TextField } from '@design-system/components/TextField';\`} />

        <CodeBlock title="기본 사용" code={\`<TextField
  label="이메일"
  placeholder="이메일을 입력해 주세요."
  onChangeText={setEmail}
/>\`} />

        <CodeBlock title="유효성 검사" code={\`<TextField
  label="이메일"
  value={email}
  onChangeText={setEmail}
  errorMessage={emailError}
  successMessage={emailValid ? '사용 가능합니다.' : undefined}
/>\`} />

        <CodeBlock title="Trailing 요소" code={\`<TextField
  label="검색"
  trailingIcon="search"
/>

<TextField
  label="인증번호"
  trailingText="재전송"
  onTrailingTextPress={handleResend}
/>\`} />

        <CodeBlock title="글자 수 제한" code={\`<TextField
  label="닉네임"
  maxCharCount={20}
  onChangeText={setNickname}
/>\`} />
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};const N=["Playground","AllStates","TrailingElements","CharCounter","InContext","DesignSpec","Usage"];export{g as AllStates,u as CharCounter,x as DesignSpec,y as InContext,m as Playground,b as TrailingElements,h as Usage,N as __namedExportsOrder,j as default};
