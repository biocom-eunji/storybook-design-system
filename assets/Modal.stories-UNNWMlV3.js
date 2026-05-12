import{R as e,V as r,s as W,r as L}from"./iframe-rdsxNJ7l.js";import{M as B,T as m,f as _,e as v,c as o,r as d,s as t,d as u,a as s,q as K,o as k}from"./theme-KAxj7l-q.js";import{B as R}from"./Button-DT9-49YQ.js";import{T as I}from"./TextField-BD3-dNrB.js";import{S as c,D as z,C as T}from"./storyHelpers-D5HpvNsw.js";import{T as E}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DGfD0Qtj.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";import"./BaseInput-Bw9fcaU4.js";import"./index-fsILkl5G.js";import"./index-LHpOlSgp.js";function D({visible:g,onClose:n,title:p,description:l,children:b,primaryAction:x,secondaryAction:f}){const $=e.createElement(r,{style:i.overlay},e.createElement(B,{style:i.backdrop,onPress:n,accessibilityRole:"none"}),e.createElement(r,{style:i.dialog},p&&e.createElement(m,{style:i.title},p),b?e.createElement(r,{style:i.childrenContainer},b):l&&e.createElement(m,{style:i.description},l),(x||f)&&e.createElement(r,{style:i.buttonArea},x&&e.createElement(B,{style:[i.primaryButton,x.destructive&&i.destructiveButton],onPress:x.onPress},e.createElement(m,{style:i.primaryButtonText},x.label)),f&&e.createElement(B,{style:i.secondaryButton,onPress:f.onPress},e.createElement(m,{style:i.secondaryButtonText},f.label)))));return g?$:null}const i=W.create({overlay:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:o.backgroundScrim,justifyContent:"center",alignItems:"center"},backdrop:{position:"absolute",top:0,left:0,right:0,bottom:0},dialog:{backgroundColor:o.backgroundPrimary,borderRadius:d.xlarge,width:300,padding:t["2xlarge"]},title:{fontSize:v.large,fontWeight:_.bold,color:o.textPrimary,textAlign:"center"},description:{fontSize:v.medium,color:o.textSecondary,textAlign:"center",marginTop:t.small},childrenContainer:{marginTop:t.small},buttonArea:{marginTop:t["2xlarge"],gap:t.small},primaryButton:{height:48,borderRadius:d.medium,backgroundColor:o.backgroundBrand,alignItems:"center",justifyContent:"center"},destructiveButton:{backgroundColor:o.backgroundError},primaryButtonText:{color:o.textOnColor,fontSize:v.medium,fontWeight:_.semibold},secondaryButton:{height:48,borderRadius:d.medium,backgroundColor:o.backgroundTertiary,alignItems:"center",justifyContent:"center"},secondaryButtonText:{color:o.textQuaternary,fontSize:v.medium,fontWeight:_.semibold}});D.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},primaryAction:{required:!1,tsType:{name:"ModalAction"},description:""},secondaryAction:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; onPress: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""}}};const a={background:{token:"color/background/primary",value:o.backgroundPrimary},radius:{token:"borderRadius/medium",value:d.medium},shadow:{token:"Level 3",value:`offset(0,${u.level3.shadowOffset.height}) blur(${u.level3.shadowRadius}) opacity(${u.level3.shadowOpacity})`},titleColor:{token:"color/text/primary",value:o.textPrimary},descColor:{token:"color/text/secondary",value:o.textSecondary},padding:{token:"spacing/2xlarge",value:t["2xlarge"]},buttonGap:{token:"spacing/small",value:t.small}},h={background:{token:"black",value:K.black},opacity:{token:"opacity/43",value:k[43]}};function y({title:g,description:n,children:p,primaryLabel:l,secondaryLabel:b}){return e.createElement(r,{style:{backgroundColor:o.backgroundPrimary,borderRadius:d.medium,padding:t["2xlarge"],width:300,shadowColor:K.black,shadowOffset:{width:0,height:u.level3.shadowOffset.height},shadowOpacity:u.level3.shadowOpacity,shadowRadius:u.level3.shadowRadius,elevation:u.level3.elevation}},g&&e.createElement(m,{style:{fontSize:v.large,fontWeight:_.bold,color:o.textPrimary,textAlign:"center"}},g),p?e.createElement(r,{style:{marginTop:t.small}},p):n&&e.createElement(m,{style:{fontSize:v.medium,color:o.textSecondary,textAlign:"center",marginTop:t.small}},n),(l||b)&&e.createElement(r,{style:{marginTop:t["2xlarge"],gap:t.small}},l&&e.createElement(R,{label:l,variant:"primary",size:"medium"}),b&&e.createElement(R,{label:b,variant:"sub",size:"medium"})))}const oe={title:"Overlay/Modal",tags:["autodocs"]},C={render:()=>e.createElement(r,{style:{backgroundColor:`rgba(0,0,0,${k[52]})`,borderRadius:d.medium,padding:t["3xlarge"],alignItems:"center",justifyContent:"center"}},e.createElement(y,{title:"변경사항 저장",description:"저장하지 않은 변경사항이 있습니다. 저장하시겠습니까?",primaryLabel:"저장",secondaryLabel:"취소"})),parameters:{docs:{description:{story:"**적용 토큰**: `color/background/primary`, `color/text/primary`, `borderRadius/medium`, `spacing/2xlarge`, `Level 3` shadow"}}}},S={name:"확인 다이얼로그",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"Confirmation Modal",description:"기본 확인/취소 대화상자입니다."},e.createElement(y,{title:"로그아웃",description:"정말 로그아웃 하시겠습니까?",primaryLabel:"로그아웃",secondaryLabel:"취소"})))},M={name:"위험 액션",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"Destructive Modal",description:"삭제 등 되돌릴 수 없는 작업 확인 시 사용합니다. Primary 버튼에 에러 색상이 적용됩니다."},e.createElement(y,{title:"계정 삭제",description:"계정을 삭제하면 모든 데이터가 영구적으로 제거됩니다. 이 작업은 되돌릴 수 없습니다.",primaryLabel:"삭제",secondaryLabel:"취소"}))),parameters:{docs:{description:{story:"**Destructive 버튼**: `color/background/error` · `color/text/onColor`"}}}},w={name:"폼 모달",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"Form Modal",description:"TextField 컴포넌트를 포함한 모달입니다. 실제 TextField를 import하여 사용합니다."},e.createElement(y,{title:"피드백 보내기",primaryLabel:"전송",secondaryLabel:"취소"},e.createElement(r,{style:{gap:t.medium}},e.createElement(I,{label:"제목",placeholder:"피드백 제목을 입력하세요."}),e.createElement(I,{label:"내용",placeholder:"상세 내용을 작성해주세요.",multiline:!0,minHeight:80,maxCharCount:200}))))),parameters:{docs:{description:{story:"**내부 컴포넌트**: `TextField` (multiline) import 사용. Modal 자체 토큰과 TextField 토큰이 각각 독립 적용."}}}},P={name:"제목만",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"Title Only",description:"설명 없이 제목과 버튼만 포함된 간단한 모달입니다."},e.createElement(y,{title:"알림을 켤까요?",primaryLabel:"켜기",secondaryLabel:"나중에"})))},A={name:"단일 버튼",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"단일 버튼 Modal",description:"확인 버튼만 있는 알림형 모달입니다."},e.createElement(y,{title:"업데이트 완료",description:"앱이 최신 버전으로 업데이트되었습니다.",primaryLabel:"확인"})))},V={name:"인터랙티브 데모",render:()=>{const[g,n]=L.useState(!1),[p,l]=L.useState(!1);return e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"인터랙티브 데모",description:"버튼을 클릭하여 실제 Modal 컴포넌트를 열어봅니다."},e.createElement(r,{style:{flexDirection:"row",gap:t.medium}},e.createElement(R,{label:"Confirmation Modal",variant:"primary",size:"small",onPress:()=>n(!0)}),e.createElement(R,{label:"Form Modal",variant:"outlined-focused",size:"small",onPress:()=>l(!0)})),e.createElement(r,{style:{height:400,position:"relative",marginTop:t.xlarge}},e.createElement(D,{visible:g,onClose:()=>n(!1),title:"로그아웃",description:"정말 로그아웃 하시겠습니까?",primaryAction:{label:"로그아웃",onPress:()=>n(!1)},secondaryAction:{label:"취소",onPress:()=>n(!1)}}),e.createElement(D,{visible:p,onClose:()=>l(!1),title:"피드백 보내기",primaryAction:{label:"전송",onPress:()=>l(!1)},secondaryAction:{label:"취소",onPress:()=>l(!1)}},e.createElement(r,{style:{gap:t.medium}},e.createElement(I,{label:"제목",placeholder:"피드백 제목"}),e.createElement(I,{label:"내용",placeholder:"상세 내용",multiline:!0,minHeight:80}))))))}},N={name:"디자인 스펙",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 Modal 컨테이너 스펙입니다. 내부 Button/TextField의 토큰은 각 컴포넌트 문서를 참조하세요.",badge:"디자인"},e.createElement(E,{title:"modal / container",rows:[{property:"Container 배경색",token:a.background.token,value:a.background.value,type:"color"},{property:"Container 라디우스",token:a.radius.token,value:a.radius.value,type:"size"},{property:"Container 그림자",token:a.shadow.token,value:a.shadow.value},{property:"Title 색상",token:a.titleColor.token,value:a.titleColor.value,type:"color"},{property:"Description 색상",token:a.descColor.token,value:a.descColor.value,type:"color"},{property:"Title 타이포",token:"Headline",value:`${s.headline.fontSize}px / ${s.headline.lineHeight}px / ${s.headline.fontWeight}`,type:"typography"},{property:"Description 타이포",token:"Body 2",value:`${s.body2.fontSize}px / ${s.body2.lineHeight}px / ${s.body2.fontWeight}`,type:"typography"},{property:"전체 패딩",token:a.padding.token,value:a.padding.value,type:"size"},{property:"버튼 간격",token:a.buttonGap.token,value:a.buttonGap.value,type:"size"}]}),e.createElement(z,null),e.createElement(E,{title:"modal / scrim",rows:[{property:"Scrim 배경색",token:h.background.token,value:h.background.value,type:"color"},{property:"Scrim opacity",token:h.opacity.token,value:h.opacity.value,type:"opacity"}]}),e.createElement(z,null),e.createElement(E,{title:"modal / animation (권장값)",rows:[{property:"등장 시작 opacity",token:"opacity/0",value:k[0],type:"opacity"},{property:"등장 끝 opacity",token:"opacity/100",value:k[100],type:"opacity"},{property:"Duration",token:"—",value:"200ms"},{property:"Easing",token:"—",value:"cubic-bezier(0.4, 0, 0.2, 1)"}]}),e.createElement(z,null),e.createElement(E,{title:"내부 컴포넌트 참조",rows:[{property:"Primary 버튼",token:"Button (solid/primary)",value:"→ General/Button 문서 참조"},{property:"Secondary 버튼",token:"Button (solid/assistive)",value:"→ General/Button 문서 참조"},{property:"TextField",token:"TextField",value:"→ Input/TextField 문서 참조"},{property:"TextArea",token:"TextField (multiline)",value:"→ Input/TextArea 문서 참조"}]})))},F={name:"실전 예시",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"실전 예시",description:"로그아웃 확인 모달 — 인라인 카드 형태로 시각화한 모달 미리보기입니다."},e.createElement(r,{style:{maxWidth:375,padding:t.xlarge,backgroundColor:o.backgroundPrimary,borderRadius:d.large,borderWidth:1,borderColor:o.borderDefault,gap:t.xlarge}},e.createElement(m,{style:{fontSize:s.heading.fontSize,fontWeight:s.heading.fontWeight,lineHeight:s.heading.lineHeight,color:o.textPrimary}},"설정"),e.createElement(r,{style:{backgroundColor:`rgba(0,0,0,${k[22]})`,borderRadius:d.medium,padding:t["2xlarge"],alignItems:"center"}},e.createElement(y,{title:"로그아웃",description:"정말 로그아웃 하시겠습니까? 저장하지 않은 건강 기록이 있을 수 있습니다.",primaryLabel:"로그아웃",secondaryLabel:"취소"})))))},O={name:"사용 가이드",render:()=>e.createElement(r,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"사용 가이드",description:"개발자를 위한 Modal 컴포넌트 사용 예시입니다.",badge:"개발"},e.createElement(T,{title:"Import",code:`import { Modal } from '@design-system/components/Modal';
import { Button } from '@design-system/components/Button';
import { TextField } from '@design-system/components/TextField';`}),e.createElement(T,{title:"기본 Confirmation",code:`const [visible, setVisible] = useState(false);

<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="변경사항 저장"
  description="저장하지 않은 변경사항이 있습니다."
  primaryAction={{ label: '저장', onPress: handleSave }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>`}),e.createElement(T,{title:"Destructive (위험 액션)",code:`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="계정 삭제"
  description="이 작업은 되돌릴 수 없습니다."
  primaryAction={{ label: '삭제', onPress: handleDelete, destructive: true }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>`}),e.createElement(T,{title:"Form Modal (TextField 포함)",code:`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="피드백 보내기"
  primaryAction={{ label: '전송', onPress: handleSubmit }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
>
  <TextField label="제목" placeholder="피드백 제목" />
  <TextField
    label="내용"
    placeholder="상세 내용"
    multiline
    maxCharCount={200}
  />
</Modal>`})))};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    backgroundColor: \`rgba(0,0,0,\${opacity[52]})\`,
    borderRadius: radius.medium,
    padding: spacing['3xlarge'],
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <ModalPreview title="변경사항 저장" description="저장하지 않은 변경사항이 있습니다. 저장하시겠습니까?" primaryLabel="저장" secondaryLabel="취소" />
    </View>,
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: \`color/background/primary\`, \`color/text/primary\`, \`borderRadius/medium\`, \`spacing/2xlarge\`, \`Level 3\` shadow'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '확인 다이얼로그',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Confirmation Modal" description="기본 확인/취소 대화상자입니다.">
        <ModalPreview title="로그아웃" description="정말 로그아웃 하시겠습니까?" primaryLabel="로그아웃" secondaryLabel="취소" />
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '위험 액션',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Destructive Modal" description="삭제 등 되돌릴 수 없는 작업 확인 시 사용합니다. Primary 버튼에 에러 색상이 적용됩니다.">
        <ModalPreview title="계정 삭제" description="계정을 삭제하면 모든 데이터가 영구적으로 제거됩니다. 이 작업은 되돌릴 수 없습니다." primaryLabel="삭제" secondaryLabel="취소" />
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: '**Destructive 버튼**: \`color/background/error\` · \`color/text/onColor\`'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '폼 모달',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Form Modal" description="TextField 컴포넌트를 포함한 모달입니다. 실제 TextField를 import하여 사용합니다.">
        <ModalPreview title="피드백 보내기" primaryLabel="전송" secondaryLabel="취소">
          <View style={{
          gap: spacing.medium
        }}>
            <TextField label="제목" placeholder="피드백 제목을 입력하세요." />
            <TextField label="내용" placeholder="상세 내용을 작성해주세요." multiline minHeight={80} maxCharCount={200} />
          </View>
        </ModalPreview>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: '**내부 컴포넌트**: \`TextField\` (multiline) import 사용. Modal 자체 토큰과 TextField 토큰이 각각 독립 적용.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '제목만',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Title Only" description="설명 없이 제목과 버튼만 포함된 간단한 모달입니다.">
        <ModalPreview title="알림을 켤까요?" primaryLabel="켜기" secondaryLabel="나중에" />
      </Section>
    </View>
}`,...P.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '단일 버튼',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="단일 버튼 Modal" description="확인 버튼만 있는 알림형 모달입니다.">
        <ModalPreview title="업데이트 완료" description="앱이 최신 버전으로 업데이트되었습니다." primaryLabel="확인" />
      </Section>
    </View>
}`,...A.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [visible, setVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="버튼을 클릭하여 실제 Modal 컴포넌트를 열어봅니다.">
          <View style={{
          flexDirection: 'row',
          gap: spacing.medium
        }}>
            <Button label="Confirmation Modal" variant="primary" size="small" onPress={() => setVisible(true)} />
            <Button label="Form Modal" variant="outlined-focused" size="small" onPress={() => setFormVisible(true)} />
          </View>

          <View style={{
          height: 400,
          position: 'relative',
          marginTop: spacing.xlarge
        }}>
            <Modal visible={visible} onClose={() => setVisible(false)} title="로그아웃" description="정말 로그아웃 하시겠습니까?" primaryAction={{
            label: '로그아웃',
            onPress: () => setVisible(false)
          }} secondaryAction={{
            label: '취소',
            onPress: () => setVisible(false)
          }} />
            <Modal visible={formVisible} onClose={() => setFormVisible(false)} title="피드백 보내기" primaryAction={{
            label: '전송',
            onPress: () => setFormVisible(false)
          }} secondaryAction={{
            label: '취소',
            onPress: () => setFormVisible(false)
          }}>
              <View style={{
              gap: spacing.medium
            }}>
                <TextField label="제목" placeholder="피드백 제목" />
                <TextField label="내용" placeholder="상세 내용" multiline minHeight={80} />
              </View>
            </Modal>
          </View>
        </Section>
      </View>;
  }
}`,...V.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 Modal 컨테이너 스펙입니다. 내부 Button/TextField의 토큰은 각 컴포넌트 문서를 참조하세요." badge="디자인">
        <TokenSpecTable title="modal / container" rows={[{
        property: 'Container 배경색',
        token: CONTAINER_TOKEN_MAP.background.token,
        value: CONTAINER_TOKEN_MAP.background.value,
        type: 'color'
      }, {
        property: 'Container 라디우스',
        token: CONTAINER_TOKEN_MAP.radius.token,
        value: CONTAINER_TOKEN_MAP.radius.value,
        type: 'size'
      }, {
        property: 'Container 그림자',
        token: CONTAINER_TOKEN_MAP.shadow.token,
        value: CONTAINER_TOKEN_MAP.shadow.value
      }, {
        property: 'Title 색상',
        token: CONTAINER_TOKEN_MAP.titleColor.token,
        value: CONTAINER_TOKEN_MAP.titleColor.value,
        type: 'color'
      }, {
        property: 'Description 색상',
        token: CONTAINER_TOKEN_MAP.descColor.token,
        value: CONTAINER_TOKEN_MAP.descColor.value,
        type: 'color'
      }, {
        property: 'Title 타이포',
        token: 'Headline',
        value: \`\${textStyle.headline.fontSize}px / \${textStyle.headline.lineHeight}px / \${textStyle.headline.fontWeight}\`,
        type: 'typography'
      }, {
        property: 'Description 타이포',
        token: 'Body 2',
        value: \`\${textStyle.body2.fontSize}px / \${textStyle.body2.lineHeight}px / \${textStyle.body2.fontWeight}\`,
        type: 'typography'
      }, {
        property: '전체 패딩',
        token: CONTAINER_TOKEN_MAP.padding.token,
        value: CONTAINER_TOKEN_MAP.padding.value,
        type: 'size'
      }, {
        property: '버튼 간격',
        token: CONTAINER_TOKEN_MAP.buttonGap.token,
        value: CONTAINER_TOKEN_MAP.buttonGap.value,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="modal / scrim" rows={[{
        property: 'Scrim 배경색',
        token: SCRIM_TOKEN_MAP.background.token,
        value: SCRIM_TOKEN_MAP.background.value,
        type: 'color'
      }, {
        property: 'Scrim opacity',
        token: SCRIM_TOKEN_MAP.opacity.token,
        value: SCRIM_TOKEN_MAP.opacity.value,
        type: 'opacity'
      }]} />

        <Divider />

        <TokenSpecTable title="modal / animation (권장값)" rows={[{
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
        value: '200ms'
      }, {
        property: 'Easing',
        token: '—',
        value: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }]} />

        <Divider />

        <TokenSpecTable title="내부 컴포넌트 참조" rows={[{
        property: 'Primary 버튼',
        token: 'Button (solid/primary)',
        value: '→ General/Button 문서 참조'
      }, {
        property: 'Secondary 버튼',
        token: 'Button (solid/assistive)',
        value: '→ General/Button 문서 참조'
      }, {
        property: 'TextField',
        token: 'TextField',
        value: '→ Input/TextField 문서 참조'
      }, {
        property: 'TextArea',
        token: 'TextField (multiline)',
        value: '→ Input/TextArea 문서 참조'
      }]} />
      </Section>
    </View>
}`,...N.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="로그아웃 확인 모달 — 인라인 카드 형태로 시각화한 모달 미리보기입니다.">
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
            설정
          </Text>
          <View style={{
          backgroundColor: \`rgba(0,0,0,\${opacity[22]})\`,
          borderRadius: radius.medium,
          padding: spacing['2xlarge'],
          alignItems: 'center'
        }}>
            <ModalPreview title="로그아웃" description="정말 로그아웃 하시겠습니까? 저장하지 않은 건강 기록이 있을 수 있습니다." primaryLabel="로그아웃" secondaryLabel="취소" />
          </View>
        </View>
      </Section>
    </View>
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Modal 컴포넌트 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { Modal } from '@design-system/components/Modal';
import { Button } from '@design-system/components/Button';
import { TextField } from '@design-system/components/TextField';\`} />

        <CodeBlock title="기본 Confirmation" code={\`const [visible, setVisible] = useState(false);

<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="변경사항 저장"
  description="저장하지 않은 변경사항이 있습니다."
  primaryAction={{ label: '저장', onPress: handleSave }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>\`} />

        <CodeBlock title="Destructive (위험 액션)" code={\`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="계정 삭제"
  description="이 작업은 되돌릴 수 없습니다."
  primaryAction={{ label: '삭제', onPress: handleDelete, destructive: true }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>\`} />

        <CodeBlock title="Form Modal (TextField 포함)" code={\`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="피드백 보내기"
  primaryAction={{ label: '전송', onPress: handleSubmit }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
>
  <TextField label="제목" placeholder="피드백 제목" />
  <TextField
    label="내용"
    placeholder="상세 내용"
    multiline
    maxCharCount={200}
  />
</Modal>\`} />
      </Section>
    </View>
}`,...O.parameters?.docs?.source}}};const ae=["Playground","Confirmation","Destructive","FormModal","TitleOnly","SingleAction","Interactive","DesignSpec","InContext","Usage"];export{S as Confirmation,N as DesignSpec,M as Destructive,w as FormModal,F as InContext,V as Interactive,C as Playground,A as SingleAction,P as TitleOnly,O as Usage,ae as __namedExportsOrder,oe as default};
