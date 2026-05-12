import{R as e,V as n,r as M}from"./iframe-rdsxNJ7l.js";import{I as H}from"./Icon-DGfD0Qtj.js";import{s as t,c as a,r as c,a as r,o as A,T as i,M as y,f as m,e as x}from"./theme-KAxj7l-q.js";import{S as b,D as N,R as _,C as T,b as k,a as S}from"./storyHelpers-D5HpvNsw.js";import{T as z}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";const W={success:{icon:"color/icon/success",iconVal:a.iconSuccess,iconName:"check-circle"},warning:{icon:"role/caution",iconVal:a.iconCaution,iconName:"warning"},error:{icon:"color/icon/error",iconVal:a.iconError,iconName:"x-circle"}},o={background:{token:"color/background/toast",value:a.backgroundToast},messageText:{token:"color/text/onColor",value:a.textOnColor},actionText:{token:"color/text/action",value:a.textAction},paddingH:{token:"spacing/large",value:t.large},paddingV:{token:"spacing/medium",value:t.medium},gap:{token:"spacing/medium",value:t.medium},radius:{token:"borderRadius/medium",value:c.medium}};function p({message:d,variant:s="success",actionLabel:g}){const l=W[s];return e.createElement(n,{style:{backgroundColor:a.backgroundToast,borderRadius:c.medium,paddingHorizontal:t.large,paddingVertical:t.medium,flexDirection:"row",alignItems:"center",gap:t.medium}},e.createElement(H,{name:l.iconName,size:24,color:l.iconVal}),e.createElement(i,{style:{color:a.textOnColor,fontSize:x.medium,fontWeight:m.medium,flex:1}},d),g&&e.createElement(i,{style:{color:a.textAction,fontSize:x.small,fontWeight:m.semibold,marginLeft:t.small}},g))}const j={title:"Feedback/Toast",tags:["autodocs"]},E={render:()=>{const[d,s]=M.useState(!1),[g,l]=M.useState("success"),O={success:"저장되었습니다.",warning:"네트워크가 불안정합니다.",error:"저장에 실패했습니다."},u=v=>{l(v),s(!0),setTimeout(()=>s(!1),3e3)};return e.createElement(n,{style:{gap:t.xlarge}},e.createElement(_,{gap:t.small,wrap:!0},e.createElement(y,{onPress:()=>u("success"),style:{backgroundColor:a.backgroundSuccess,paddingHorizontal:t.large,paddingVertical:t.small,borderRadius:c.small}},e.createElement(i,{style:{color:a.textOnColor,fontWeight:m.semibold,fontSize:x.small}},"Success")),e.createElement(y,{onPress:()=>u("warning"),style:{backgroundColor:a.backgroundCaution,paddingHorizontal:t.large,paddingVertical:t.small,borderRadius:c.small}},e.createElement(i,{style:{color:a.textPrimary,fontWeight:m.semibold,fontSize:x.small}},"Warning")),e.createElement(y,{onPress:()=>u("error"),style:{backgroundColor:a.backgroundError,paddingHorizontal:t.large,paddingVertical:t.small,borderRadius:c.small}},e.createElement(i,{style:{color:a.textOnColor,fontWeight:m.semibold,fontSize:x.small}},"Error"))),e.createElement("div",{style:{overflow:"hidden",transition:"max-height 0.3s ease, opacity 0.3s ease",maxHeight:d?80:0,opacity:d?1:0}},e.createElement(p,{message:O[g],variant:g})))},parameters:{docs:{description:{story:"**적용 토큰**: `color/background/toast`, `color/text/onColor`, `color/icon/success`, `Body 2`, `borderRadius/medium`. 버튼을 클릭하면 Toast가 애니메이션과 함께 나타납니다."}}}},f={name:"Variant별",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(b,{title:"Variant별",description:"success, warning, error 세 가지 타입을 확인합니다."},e.createElement(n,{style:{gap:t.xlarge}},e.createElement(k,{gap:t.small},e.createElement(S,null,"success"),e.createElement(p,{message:"저장되었습니다.",variant:"success"})),e.createElement(k,{gap:t.small},e.createElement(S,null,"warning"),e.createElement(p,{message:"네트워크가 불안정합니다.",variant:"warning"})),e.createElement(k,{gap:t.small},e.createElement(S,null,"error"),e.createElement(p,{message:"저장에 실패했습니다.",variant:"error"}))))),parameters:{docs:{description:{story:["**Success**: `color/icon/success` (민트)","**Warning**: `role/caution` (옐로우)","**Error**: `color/icon/error` (레드)","**공통 배경**: `color/background/toast`"].join(`

`)}}}},C={name:"Action 버튼",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(b,{title:"Action 버튼",description:"오른쪽에 액션 텍스트 버튼을 포함한 Toast입니다."},e.createElement(n,{style:{gap:t.xlarge}},e.createElement(k,{gap:t.small},e.createElement(S,null,"Success + Action"),e.createElement(p,{message:"기록이 삭제되었습니다.",variant:"success",actionLabel:"되돌리기"})),e.createElement(k,{gap:t.small},e.createElement(S,null,"Error + Action"),e.createElement(p,{message:"저장에 실패했습니다.",variant:"error",actionLabel:"재시도"}))))),parameters:{docs:{description:{story:"**Action 텍스트**: `color/text/action` · `Label 1` · fontWeight semibold"}}}},h={name:"인터랙티브 데모",render:()=>{const[d,s]=M.useState([]),g=(l,O)=>{const u=Date.now();s(v=>[...v,{id:u,message:O,variant:l}]),setTimeout(()=>s(v=>v.filter(R=>R.id!==u)),3e3)};return e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(b,{title:"인터랙티브 데모",description:"버튼을 클릭하여 Toast를 표시합니다. 3초 후 자동으로 사라집니다."},e.createElement(_,{gap:t.medium,wrap:!0},e.createElement(y,{onPress:()=>g("success","저장되었습니다."),style:{backgroundColor:a.backgroundSuccess,paddingHorizontal:t.large,paddingVertical:t.small,borderRadius:c.small}},e.createElement(i,{style:{color:a.textOnColor,fontWeight:m.semibold}},"Success")),e.createElement(y,{onPress:()=>g("warning","네트워크가 불안정합니다."),style:{backgroundColor:a.backgroundCaution,paddingHorizontal:t.large,paddingVertical:t.small,borderRadius:c.small}},e.createElement(i,{style:{color:a.textPrimary,fontWeight:m.semibold}},"Warning")),e.createElement(y,{onPress:()=>g("error","저장에 실패했습니다."),style:{backgroundColor:a.backgroundError,paddingHorizontal:t.large,paddingVertical:t.small,borderRadius:c.small}},e.createElement(i,{style:{color:a.textOnColor,fontWeight:m.semibold}},"Error"))),e.createElement(n,{style:{gap:t.small,marginTop:t.xlarge}},d.map(l=>e.createElement(p,{key:l.id,message:l.message,variant:l.variant})))))}},w={name:"디자인 스펙",render:()=>{const d=["success","warning","error"];return e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(b,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 Toast 전체 스펙입니다.",badge:"디자인"},d.map(s=>e.createElement(n,{key:s},e.createElement(z,{title:`variant: ${s}`,rows:[{property:"배경색",token:o.background.token,value:o.background.value,type:"color"},{property:"아이콘",token:W[s].icon,value:W[s].iconVal,type:"color"},{property:"메시지 텍스트",token:o.messageText.token,value:o.messageText.value,type:"color"},{property:"액션 텍스트",token:o.actionText.token,value:o.actionText.value,type:"color"}]}),e.createElement(N,null))),e.createElement(z,{title:"공통 레이아웃",rows:[{property:"좌우 패딩",token:o.paddingH.token,value:o.paddingH.value,type:"size"},{property:"상하 패딩",token:o.paddingV.token,value:o.paddingV.value,type:"size"},{property:"아이콘-텍스트 간격",token:o.gap.token,value:o.gap.value,type:"size"},{property:"코너 라디우스",token:o.radius.token,value:o.radius.value,type:"size"},{property:"메시지 타이포",token:"Body 2",value:`${r.body2.fontSize}px / ${r.body2.lineHeight}px / ${r.body2.fontWeight}`,type:"typography"},{property:"액션 타이포",token:"Label 1",value:`${r.label1.fontSize}px / ${r.label1.lineHeight}px / ${r.label1.fontWeight}`,type:"typography"}]}),e.createElement(N,null),e.createElement(z,{title:"애니메이션 (권장값)",rows:[{property:"등장 시작 opacity",token:"opacity/0",value:A[0],type:"opacity"},{property:"등장 끝 opacity",token:"opacity/100",value:A[100],type:"opacity"},{property:"Duration",token:"—",value:"250ms"},{property:"Easing",token:"—",value:"cubic-bezier(0.4, 0, 0.2, 1)"},{property:"자동 닫힘 기본값",token:"—",value:"3000ms"}]})))}},V={name:"실전 예시",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(b,{title:"실전 예시",description:"식단 저장 성공 — 인라인 Toast 미리보기입니다. 식단 기록 후 표시되는 성공 토스트 시나리오입니다."},e.createElement(n,{style:{maxWidth:375,padding:t.xlarge,backgroundColor:a.backgroundPrimary,borderRadius:c.large,borderWidth:1,borderColor:a.borderDefault,gap:t.large}},e.createElement(i,{style:{fontSize:r.heading.fontSize,fontWeight:r.heading.fontWeight,lineHeight:r.heading.lineHeight,color:a.textPrimary}},"식단 기록"),e.createElement(n,{style:{backgroundColor:a.backgroundSecondary,borderRadius:c.medium,padding:t.large,gap:t.small}},e.createElement(i,{style:{fontSize:r.headline.fontSize,fontWeight:r.headline.fontWeight,color:a.textPrimary}},"점심 식단"),e.createElement(i,{style:{fontSize:r.body2.fontSize,color:a.textSecondary}},"현미밥, 된장찌개, 고등어구이"),e.createElement(i,{style:{fontSize:r.caption.fontSize,color:a.textTertiary}},"약 520kcal")),e.createElement(p,{message:"식단이 저장되었습니다.",variant:"success",actionLabel:"되돌리기"}))))},P={name:"사용 가이드",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(b,{title:"사용 가이드",description:"개발자를 위한 Toast 컴포넌트 사용 예시입니다.",badge:"개발"},e.createElement(T,{title:"Import",code:"import { Toast } from '@design-system/components/Toast';"}),e.createElement(T,{title:"기본 사용",code:`const [visible, setVisible] = useState(false);

<Toast
  message="저장되었습니다."
  variant="success"
  visible={visible}
  duration={3000}
  onDismiss={() => setVisible(false)}
/>`}),e.createElement(T,{title:"Action 버튼 포함",code:`<Toast
  message="기록이 삭제되었습니다."
  variant="success"
  visible={visible}
  duration={5000}
  onDismiss={() => setVisible(false)}
  action={{
    label: '되돌리기',
    onPress: handleUndo,
  }}
/>`}),e.createElement(T,{title:"Variant별 사용",code:`<Toast message="완료!" variant="success" visible={true} />
<Toast message="주의!" variant="warning" visible={true} />
<Toast message="실패!" variant="error" visible={true} />`}),e.createElement(T,{title:"위치 지정",code:`<Toast message="상단 Toast" position="top" visible={true} />
<Toast message="하단 Toast" position="bottom" visible={true} />`})))};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(false);
    const [variant, setVariant] = useState<ToastVariant>('success');
    const messages: Record<ToastVariant, string> = {
      success: '저장되었습니다.',
      warning: '네트워크가 불안정합니다.',
      error: '저장에 실패했습니다.'
    };
    const show = (v: ToastVariant) => {
      setVariant(v);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    };
    return <View style={{
      gap: spacing.xlarge
    }}>
        <Row gap={spacing.small} wrap>
          <Pressable onPress={() => show('success')} style={{
          backgroundColor: semanticColor.backgroundSuccess,
          paddingHorizontal: spacing.large,
          paddingVertical: spacing.small,
          borderRadius: radius.small
        }}>
            <Text style={{
            color: semanticColor.textOnColor,
            fontWeight: fontWeight.semibold,
            fontSize: fontSize.small
          }}>Success</Text>
          </Pressable>
          <Pressable onPress={() => show('warning')} style={{
          backgroundColor: semanticColor.backgroundCaution,
          paddingHorizontal: spacing.large,
          paddingVertical: spacing.small,
          borderRadius: radius.small
        }}>
            <Text style={{
            color: semanticColor.textPrimary,
            fontWeight: fontWeight.semibold,
            fontSize: fontSize.small
          }}>Warning</Text>
          </Pressable>
          <Pressable onPress={() => show('error')} style={{
          backgroundColor: semanticColor.backgroundError,
          paddingHorizontal: spacing.large,
          paddingVertical: spacing.small,
          borderRadius: radius.small
        }}>
            <Text style={{
            color: semanticColor.textOnColor,
            fontWeight: fontWeight.semibold,
            fontSize: fontSize.small
          }}>Error</Text>
          </Pressable>
        </Row>
        <div style={{
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, opacity 0.3s ease',
        maxHeight: visible ? 80 : 0,
        opacity: visible ? 1 : 0
      }}>
          <ToastPreview message={messages[variant]} variant={variant} />
        </div>
      </View>;
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: \`color/background/toast\`, \`color/text/onColor\`, \`color/icon/success\`, \`Body 2\`, \`borderRadius/medium\`. 버튼을 클릭하면 Toast가 애니메이션과 함께 나타납니다.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Variant별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Variant별" description="success, warning, error 세 가지 타입을 확인합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>success</StateLabel>
            <ToastPreview message="저장되었습니다." variant="success" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>warning</StateLabel>
            <ToastPreview message="네트워크가 불안정합니다." variant="warning" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>error</StateLabel>
            <ToastPreview message="저장에 실패했습니다." variant="error" />
          </Col>
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: ['**Success**: \`color/icon/success\` (민트)', '**Warning**: \`role/caution\` (옐로우)', '**Error**: \`color/icon/error\` (레드)', '**공통 배경**: \`color/background/toast\`'].join('\\n\\n')
      }
    }
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Action 버튼',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Action 버튼" description="오른쪽에 액션 텍스트 버튼을 포함한 Toast입니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Success + Action</StateLabel>
            <ToastPreview message="기록이 삭제되었습니다." variant="success" actionLabel="되돌리기" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Error + Action</StateLabel>
            <ToastPreview message="저장에 실패했습니다." variant="error" actionLabel="재시도" />
          </Col>
        </View>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: '**Action 텍스트**: \`color/text/action\` · \`Label 1\` · fontWeight semibold'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [toasts, setToasts] = useState<Array<{
      id: number;
      message: string;
      variant: ToastVariant;
    }>>([]);
    const show = (variant: ToastVariant, message: string) => {
      const id = Date.now();
      setToasts(prev => [...prev, {
        id,
        message,
        variant
      }]);
      setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
    };
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="버튼을 클릭하여 Toast를 표시합니다. 3초 후 자동으로 사라집니다.">
          <Row gap={spacing.medium} wrap>
            <Pressable onPress={() => show('success', '저장되었습니다.')} style={{
            backgroundColor: semanticColor.backgroundSuccess,
            paddingHorizontal: spacing.large,
            paddingVertical: spacing.small,
            borderRadius: radius.small
          }}>
              <Text style={{
              color: semanticColor.textOnColor,
              fontWeight: fontWeight.semibold
            }}>Success</Text>
            </Pressable>
            <Pressable onPress={() => show('warning', '네트워크가 불안정합니다.')} style={{
            backgroundColor: semanticColor.backgroundCaution,
            paddingHorizontal: spacing.large,
            paddingVertical: spacing.small,
            borderRadius: radius.small
          }}>
              <Text style={{
              color: semanticColor.textPrimary,
              fontWeight: fontWeight.semibold
            }}>Warning</Text>
            </Pressable>
            <Pressable onPress={() => show('error', '저장에 실패했습니다.')} style={{
            backgroundColor: semanticColor.backgroundError,
            paddingHorizontal: spacing.large,
            paddingVertical: spacing.small,
            borderRadius: radius.small
          }}>
              <Text style={{
              color: semanticColor.textOnColor,
              fontWeight: fontWeight.semibold
            }}>Error</Text>
            </Pressable>
          </Row>

          <View style={{
          gap: spacing.small,
          marginTop: spacing.xlarge
        }}>
            {toasts.map(t => <ToastPreview key={t.id} message={t.message} variant={t.variant} />)}
          </View>
        </Section>
      </View>;
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => {
    const variants = ['success', 'warning', 'error'] as const;
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 Toast 전체 스펙입니다." badge="디자인">
          {variants.map(variant => <View key={variant}>
              <TokenSpecTable title={\`variant: \${variant}\`} rows={[{
            property: '배경색',
            token: COMMON_TOKEN_MAP.background.token,
            value: COMMON_TOKEN_MAP.background.value,
            type: 'color'
          }, {
            property: '아이콘',
            token: VARIANT_TOKEN_MAP[variant].icon,
            value: VARIANT_TOKEN_MAP[variant].iconVal,
            type: 'color'
          }, {
            property: '메시지 텍스트',
            token: COMMON_TOKEN_MAP.messageText.token,
            value: COMMON_TOKEN_MAP.messageText.value,
            type: 'color'
          }, {
            property: '액션 텍스트',
            token: COMMON_TOKEN_MAP.actionText.token,
            value: COMMON_TOKEN_MAP.actionText.value,
            type: 'color'
          }]} />
              <Divider />
            </View>)}

          <TokenSpecTable title="공통 레이아웃" rows={[{
          property: '좌우 패딩',
          token: COMMON_TOKEN_MAP.paddingH.token,
          value: COMMON_TOKEN_MAP.paddingH.value,
          type: 'size'
        }, {
          property: '상하 패딩',
          token: COMMON_TOKEN_MAP.paddingV.token,
          value: COMMON_TOKEN_MAP.paddingV.value,
          type: 'size'
        }, {
          property: '아이콘-텍스트 간격',
          token: COMMON_TOKEN_MAP.gap.token,
          value: COMMON_TOKEN_MAP.gap.value,
          type: 'size'
        }, {
          property: '코너 라디우스',
          token: COMMON_TOKEN_MAP.radius.token,
          value: COMMON_TOKEN_MAP.radius.value,
          type: 'size'
        }, {
          property: '메시지 타이포',
          token: 'Body 2',
          value: \`\${textStyle.body2.fontSize}px / \${textStyle.body2.lineHeight}px / \${textStyle.body2.fontWeight}\`,
          type: 'typography'
        }, {
          property: '액션 타이포',
          token: 'Label 1',
          value: \`\${textStyle.label1.fontSize}px / \${textStyle.label1.lineHeight}px / \${textStyle.label1.fontWeight}\`,
          type: 'typography'
        }]} />

          <Divider />

          <TokenSpecTable title="애니메이션 (권장값)" rows={[{
          property: '등장 시작 opacity',
          token: 'opacity/0',
          value: opacity[0],
          type: 'opacity'
        }, {
          property: '등장 끝 opacity',
          token: 'opacity/100',
          value: opacity[100],
          type: 'opacity'
        }, {
          property: 'Duration',
          token: '—',
          value: '250ms'
        }, {
          property: 'Easing',
          token: '—',
          value: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }, {
          property: '자동 닫힘 기본값',
          token: '—',
          value: '3000ms'
        }]} />
        </Section>
      </View>;
  }
}`,...w.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="식단 저장 성공 — 인라인 Toast 미리보기입니다. 식단 기록 후 표시되는 성공 토스트 시나리오입니다.">
        <View style={{
        maxWidth: 375,
        padding: spacing.xlarge,
        backgroundColor: semanticColor.backgroundPrimary,
        borderRadius: radius.large,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        gap: spacing.large
      }}>
          <Text style={{
          fontSize: textStyle.heading.fontSize,
          fontWeight: textStyle.heading.fontWeight,
          lineHeight: textStyle.heading.lineHeight,
          color: semanticColor.textPrimary
        }}>
            식단 기록
          </Text>
          <View style={{
          backgroundColor: semanticColor.backgroundSecondary,
          borderRadius: radius.medium,
          padding: spacing.large,
          gap: spacing.small
        }}>
            <Text style={{
            fontSize: textStyle.headline.fontSize,
            fontWeight: textStyle.headline.fontWeight,
            color: semanticColor.textPrimary
          }}>
              점심 식단
            </Text>
            <Text style={{
            fontSize: textStyle.body2.fontSize,
            color: semanticColor.textSecondary
          }}>
              현미밥, 된장찌개, 고등어구이
            </Text>
            <Text style={{
            fontSize: textStyle.caption.fontSize,
            color: semanticColor.textTertiary
          }}>
              약 520kcal
            </Text>
          </View>
          <ToastPreview message="식단이 저장되었습니다." variant="success" actionLabel="되돌리기" />
        </View>
      </Section>
    </View>
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Toast 컴포넌트 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { Toast } from '@design-system/components/Toast';\`} />

        <CodeBlock title="기본 사용" code={\`const [visible, setVisible] = useState(false);

<Toast
  message="저장되었습니다."
  variant="success"
  visible={visible}
  duration={3000}
  onDismiss={() => setVisible(false)}
/>\`} />

        <CodeBlock title="Action 버튼 포함" code={\`<Toast
  message="기록이 삭제되었습니다."
  variant="success"
  visible={visible}
  duration={5000}
  onDismiss={() => setVisible(false)}
  action={{
    label: '되돌리기',
    onPress: handleUndo,
  }}
/>\`} />

        <CodeBlock title="Variant별 사용" code={\`<Toast message="완료!" variant="success" visible={true} />
<Toast message="주의!" variant="warning" visible={true} />
<Toast message="실패!" variant="error" visible={true} />\`} />

        <CodeBlock title="위치 지정" code={\`<Toast message="상단 Toast" position="top" visible={true} />
<Toast message="하단 Toast" position="bottom" visible={true} />\`} />
      </Section>
    </View>
}`,...P.parameters?.docs?.source}}};const q=["Playground","Variants","WithAction","Interactive","DesignSpec","InContext","Usage"];export{w as DesignSpec,V as InContext,h as Interactive,E as Playground,P as Usage,f as Variants,C as WithAction,q as __namedExportsOrder,j as default};
