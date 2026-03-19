import{R as e,V as a,s as V,r as M}from"./iframe-CExKz_YG.js";import{M as C,T as s,f as d,a as o,c as l,r as m,e as A,m as w,s as t,d as N}from"./theme-DRANkRo4.js";import{S as p,b as r,d as v,D as z,C as $,a as R}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";function u({visible:c,onClose:h,title:i,description:F,children:T,primaryAction:b,secondaryAction:g}){return c?e.createElement(a,{style:n.overlay},e.createElement(C,{style:n.backdrop,onPress:h,accessibilityRole:"none"}),e.createElement(a,{style:n.dialog},i&&e.createElement(s,{style:n.title},i),T?e.createElement(a,{style:n.childrenContainer},T):F&&e.createElement(s,{style:n.description},F),(b||g)&&e.createElement(a,{style:n.buttonArea},b&&e.createElement(C,{style:[n.primaryButton,b.destructive&&n.destructiveButton],onPress:b.onPress},e.createElement(s,{style:n.primaryButtonText},b.label)),g&&e.createElement(C,{style:n.secondaryButton,onPress:g.onPress},e.createElement(s,{style:n.secondaryButtonText},g.label))))):null}const n=V.create({overlay:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.4)",justifyContent:"center",alignItems:"center"},backdrop:{position:"absolute",top:0,left:0,right:0,bottom:0},dialog:{backgroundColor:N.backgroundPrimary,borderRadius:m.xlarge,width:300,padding:t["2xlarge"]},title:{fontSize:o.large,fontWeight:d.bold,color:l[17],textAlign:"center"},description:{fontSize:o.medium,color:l[50],textAlign:"center",marginTop:t.small},childrenContainer:{marginTop:t.small},buttonArea:{marginTop:t["2xlarge"],gap:t.small},primaryButton:{height:48,borderRadius:m.medium,backgroundColor:w[45],alignItems:"center",justifyContent:"center"},destructiveButton:{backgroundColor:A[70]},primaryButtonText:{color:l[100],fontSize:o.medium,fontWeight:d.semibold},secondaryButton:{height:48,borderRadius:m.medium,backgroundColor:l[97],alignItems:"center",justifyContent:"center"},secondaryButtonText:{color:l[40],fontSize:o.medium,fontWeight:d.semibold}});u.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},primaryAction:{required:!1,tsType:{name:"ModalAction"},description:""},secondaryAction:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; onPress: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""}}};const I={title:"Feedback/Modal",component:u,argTypes:{visible:{control:"boolean",description:"표시 여부"},title:{control:"text",description:"대화상자 타이틀"},description:{control:"text",description:"본문 텍스트"}},tags:["autodocs"]},E=({children:c})=>e.createElement(a,{style:{height:400,backgroundColor:l[99],position:"relative",overflow:"hidden",borderRadius:m.medium,justifyContent:"center",alignItems:"center"}},c),y={args:{visible:!0,title:"알림",description:"변경 사항을 저장하시겠습니까?"},render:c=>{const[h,i]=M.useState(c.visible);return e.createElement(a,{style:{gap:t.large}},e.createElement(C,{onPress:()=>i(!0),style:{backgroundColor:w[45],paddingHorizontal:t.xlarge,paddingVertical:t.medium,borderRadius:m.medium,alignSelf:"flex-start"}},e.createElement(s,{style:{color:"#FFFFFF",fontSize:o.medium,fontWeight:d.semibold}},"모달 열기")),e.createElement(E,null,e.createElement(u,{...c,visible:h,onClose:()=>i(!1),primaryAction:{label:"확인",onPress:()=>i(!1)},secondaryAction:{label:"취소",onPress:()=>i(!1)}})))}},k={name:"기본 대화상자",render:()=>e.createElement(p,{title:"기본 대화상자",description:"타이틀, 설명, 버튼이 포함된 기본 모달입니다."},e.createElement(E,null,e.createElement(u,{visible:!0,title:"변경 사항 저장",description:"저장하지 않으면 변경 사항이 모두 사라집니다.",primaryAction:{label:"저장",onPress:()=>{}},secondaryAction:{label:"취소",onPress:()=>{}}})))},f={name:"위험 액션",render:()=>e.createElement(p,{title:"위험 액션",description:"삭제 등 되돌릴 수 없는 작업에 대한 경고 모달입니다. Primary 버튼이 빨간색으로 표시됩니다."},e.createElement(E,null,e.createElement(u,{visible:!0,title:"계정 삭제",description:"정말로 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.",primaryAction:{label:"삭제",onPress:()=>{},destructive:!0},secondaryAction:{label:"취소",onPress:()=>{}}})))},x={name:"커스텀 콘텐츠",render:()=>e.createElement(p,{title:"커스텀 콘텐츠",description:"children을 통해 description 대신 커스텀 콘텐츠를 렌더링할 수 있습니다."},e.createElement(E,null,e.createElement(u,{visible:!0,title:"피드백 보내기",primaryAction:{label:"보내기",onPress:()=>{}},secondaryAction:{label:"취소",onPress:()=>{}}},e.createElement(a,{style:{gap:t.medium,marginTop:t.medium}},e.createElement(s,{style:{fontSize:o.small,color:l[50],textAlign:"center"}},"서비스 개선을 위해 의견을 보내주세요."),e.createElement(a,{style:{borderWidth:1,borderColor:l[96],borderRadius:m.small,padding:t.medium,minHeight:80,backgroundColor:l[99]}},e.createElement(s,{style:{fontSize:o.medium,color:l[80]}},"의견을 입력하세요..."))))))},S={name:"디자인 스펙",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(p,{title:"디자인 스펙",description:"Modal 컴포넌트의 디자인 토큰 상세 스펙입니다."},e.createElement(r,{title:"오버레이",rows:[{label:"배경색",value:"rgba(0,0,0,0.4)",token:"—"},{label:"정렬",value:"center / center",token:"—"}]}),e.createElement(r,{title:"대화상자",rows:[{label:"배경색",value:"#FFFFFF",token:"coolNeutral[100]"},{label:"모서리 반경",value:"20px",token:"—"},{label:"너비",value:"300px",token:"—"},{label:"패딩",value:`${t["2xlarge"]}px`,token:"spacing.2xl"}]}),e.createElement(r,{title:"타이틀",rows:[{label:"폰트 크기",value:`${o.large}px`,token:"fontSize.large"},{label:"폰트 굵기",value:d.bold,token:"fontWeight.bold"},{label:"색상",value:l[17],token:"coolNeutral[17]"},{label:"정렬",value:"center",token:"—"}]}),e.createElement(r,{title:"설명",rows:[{label:"폰트 크기",value:`${o.medium}px`,token:"fontSize.medium"},{label:"색상",value:l[50],token:"coolNeutral[50]"},{label:"상단 마진",value:`${t.small}px`,token:"spacing.small"},{label:"정렬",value:"center",token:"—"}]}),e.createElement(r,{title:"Primary 버튼",rows:[{label:"높이",value:"48px",token:"—"},{label:"모서리 반경",value:`${t.medium}px`,token:"spacing.medium"},{label:"배경색",value:w[45],token:"mint[45]"},{label:"배경색 (위험)",value:A[70],token:"red[70]"},{label:"텍스트 색상",value:"#FFFFFF",token:"coolNeutral[100]"},{label:"폰트 크기",value:`${o.medium}px`,token:"fontSize.medium"},{label:"폰트 굵기",value:d.semibold,token:"fontWeight.semibold"}]}),e.createElement(r,{title:"Secondary 버튼",rows:[{label:"높이",value:"48px",token:"—"},{label:"모서리 반경",value:`${t.medium}px`,token:"spacing.medium"},{label:"배경색",value:l[97],token:"coolNeutral[97]"},{label:"텍스트 색상",value:l[40],token:"coolNeutral[40]"}]}),e.createElement(r,{title:"버튼 영역",rows:[{label:"상단 마진",value:`${t["2xlarge"]}px`,token:"spacing.2xl"},{label:"간격",value:`${t.small}px`,token:"spacing.small"},{label:"정렬",value:"수직 (primary 위, secondary 아래)",token:"—"}]})))},P={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(p,{title:"사용 가이드",description:"개발자를 위한 Modal 컴포넌트 사용 예시입니다."},e.createElement(v,{title:"Import",code:"import { Modal } from '@design-system/components/Modal';"}),e.createElement(v,{title:"기본 사용",code:`const [visible, setVisible] = useState(false);

<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="알림"
  description="변경 사항을 저장하시겠습니까?"
  primaryAction={{ label: '저장', onPress: handleSave }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>`}),e.createElement(v,{title:"위험 액션",code:`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="삭제 확인"
  description="이 작업은 되돌릴 수 없습니다."
  primaryAction={{ label: '삭제', onPress: handleDelete, destructive: true }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>`}),e.createElement(v,{title:"커스텀 콘텐츠",code:`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="피드백"
  primaryAction={{ label: '보내기', onPress: handleSubmit }}
>
  <TextInput placeholder="의견을 입력하세요" />
</Modal>`}),e.createElement(z,null),e.createElement($,{gap:t.small},e.createElement(R,null,"Props"),e.createElement(r,{rows:[{label:"visible",value:"boolean",token:"표시 여부 (필수)"},{label:"onClose",value:"() => void",token:"배경 탭 시 닫기 콜백"},{label:"title",value:"string",token:"대화상자 타이틀"},{label:"description",value:"string",token:"본문 텍스트"},{label:"children",value:"ReactNode",token:"커스텀 콘텐츠 (description 대체)"},{label:"primaryAction",value:"{ label, onPress, destructive? }",token:"주 버튼"},{label:"secondaryAction",value:"{ label, onPress }",token:"보조 버튼"}]}))))};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    title: '알림',
    description: '변경 사항을 저장하시겠습니까?'
  },
  render: args => {
    const [visible, setVisible] = useState(args.visible);
    return <View style={{
      gap: spacing.large
    }}>
        <Pressable onPress={() => setVisible(true)} style={{
        backgroundColor: mint[45],
        paddingHorizontal: spacing.xlarge,
        paddingVertical: spacing.medium,
        borderRadius: radius.medium,
        alignSelf: 'flex-start'
      }}>
          <Text style={{
          color: '#FFFFFF',
          fontSize: fontSize.medium,
          fontWeight: fontWeight.semibold
        }}>모달 열기</Text>
        </Pressable>
        <PreviewContainer>
          <Modal {...args} visible={visible} onClose={() => setVisible(false)} primaryAction={{
          label: '확인',
          onPress: () => setVisible(false)
        }} secondaryAction={{
          label: '취소',
          onPress: () => setVisible(false)
        }} />
        </PreviewContainer>
      </View>;
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '기본 대화상자',
  render: () => <Section title="기본 대화상자" description="타이틀, 설명, 버튼이 포함된 기본 모달입니다.">
      <PreviewContainer>
        <Modal visible title="변경 사항 저장" description="저장하지 않으면 변경 사항이 모두 사라집니다." primaryAction={{
        label: '저장',
        onPress: () => {}
      }} secondaryAction={{
        label: '취소',
        onPress: () => {}
      }} />
      </PreviewContainer>
    </Section>
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '위험 액션',
  render: () => <Section title="위험 액션" description="삭제 등 되돌릴 수 없는 작업에 대한 경고 모달입니다. Primary 버튼이 빨간색으로 표시됩니다.">
      <PreviewContainer>
        <Modal visible title="계정 삭제" description="정말로 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다." primaryAction={{
        label: '삭제',
        onPress: () => {},
        destructive: true
      }} secondaryAction={{
        label: '취소',
        onPress: () => {}
      }} />
      </PreviewContainer>
    </Section>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '커스텀 콘텐츠',
  render: () => <Section title="커스텀 콘텐츠" description="children을 통해 description 대신 커스텀 콘텐츠를 렌더링할 수 있습니다.">
      <PreviewContainer>
        <Modal visible title="피드백 보내기" primaryAction={{
        label: '보내기',
        onPress: () => {}
      }} secondaryAction={{
        label: '취소',
        onPress: () => {}
      }}>
          <View style={{
          gap: spacing.medium,
          marginTop: spacing.medium
        }}>
            <Text style={{
            fontSize: fontSize.small,
            color: coolNeutral[50],
            textAlign: 'center'
          }}>
              서비스 개선을 위해 의견을 보내주세요.
            </Text>
            <View style={{
            borderWidth: 1,
            borderColor: coolNeutral[96],
            borderRadius: radius.small,
            padding: spacing.medium,
            minHeight: 80,
            backgroundColor: coolNeutral[99]
          }}>
              <Text style={{
              fontSize: fontSize.medium,
              color: coolNeutral[80]
            }}>의견을 입력하세요...</Text>
            </View>
          </View>
        </Modal>
      </PreviewContainer>
    </Section>
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Modal 컴포넌트의 디자인 토큰 상세 스펙입니다.">
        <SpecTable title="오버레이" rows={[{
        label: '배경색',
        value: 'rgba(0,0,0,0.4)',
        token: '—'
      }, {
        label: '정렬',
        value: 'center / center',
        token: '—'
      }]} />

        <SpecTable title="대화상자" rows={[{
        label: '배경색',
        value: '#FFFFFF',
        token: 'coolNeutral[100]'
      }, {
        label: '모서리 반경',
        value: '20px',
        token: '—'
      }, {
        label: '너비',
        value: '300px',
        token: '—'
      }, {
        label: '패딩',
        value: \`\${spacing['2xlarge']}px\`,
        token: 'spacing.2xl'
      }]} />

        <SpecTable title="타이틀" rows={[{
        label: '폰트 크기',
        value: \`\${fontSize.large}px\`,
        token: 'fontSize.large'
      }, {
        label: '폰트 굵기',
        value: fontWeight.bold,
        token: 'fontWeight.bold'
      }, {
        label: '색상',
        value: coolNeutral[17],
        token: 'coolNeutral[17]'
      }, {
        label: '정렬',
        value: 'center',
        token: '—'
      }]} />

        <SpecTable title="설명" rows={[{
        label: '폰트 크기',
        value: \`\${fontSize.medium}px\`,
        token: 'fontSize.medium'
      }, {
        label: '색상',
        value: coolNeutral[50],
        token: 'coolNeutral[50]'
      }, {
        label: '상단 마진',
        value: \`\${spacing.small}px\`,
        token: 'spacing.small'
      }, {
        label: '정렬',
        value: 'center',
        token: '—'
      }]} />

        <SpecTable title="Primary 버튼" rows={[{
        label: '높이',
        value: '48px',
        token: '—'
      }, {
        label: '모서리 반경',
        value: \`\${spacing.medium}px\`,
        token: 'spacing.medium'
      }, {
        label: '배경색',
        value: mint[45],
        token: 'mint[45]'
      }, {
        label: '배경색 (위험)',
        value: red[70],
        token: 'red[70]'
      }, {
        label: '텍스트 색상',
        value: '#FFFFFF',
        token: 'coolNeutral[100]'
      }, {
        label: '폰트 크기',
        value: \`\${fontSize.medium}px\`,
        token: 'fontSize.medium'
      }, {
        label: '폰트 굵기',
        value: fontWeight.semibold,
        token: 'fontWeight.semibold'
      }]} />

        <SpecTable title="Secondary 버튼" rows={[{
        label: '높이',
        value: '48px',
        token: '—'
      }, {
        label: '모서리 반경',
        value: \`\${spacing.medium}px\`,
        token: 'spacing.medium'
      }, {
        label: '배경색',
        value: coolNeutral[97],
        token: 'coolNeutral[97]'
      }, {
        label: '텍스트 색상',
        value: coolNeutral[40],
        token: 'coolNeutral[40]'
      }]} />

        <SpecTable title="버튼 영역" rows={[{
        label: '상단 마진',
        value: \`\${spacing['2xlarge']}px\`,
        token: 'spacing.2xl'
      }, {
        label: '간격',
        value: \`\${spacing.small}px\`,
        token: 'spacing.small'
      }, {
        label: '정렬',
        value: '수직 (primary 위, secondary 아래)',
        token: '—'
      }]} />
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Modal 컴포넌트 사용 예시입니다.">
        <CodeBlock title="Import" code={\`import { Modal } from '@design-system/components/Modal';\`} />

        <CodeBlock title="기본 사용" code={\`const [visible, setVisible] = useState(false);

<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="알림"
  description="변경 사항을 저장하시겠습니까?"
  primaryAction={{ label: '저장', onPress: handleSave }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>\`} />

        <CodeBlock title="위험 액션" code={\`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="삭제 확인"
  description="이 작업은 되돌릴 수 없습니다."
  primaryAction={{ label: '삭제', onPress: handleDelete, destructive: true }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>\`} />

        <CodeBlock title="커스텀 콘텐츠" code={\`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="피드백"
  primaryAction={{ label: '보내기', onPress: handleSubmit }}
>
  <TextInput placeholder="의견을 입력하세요" />
</Modal>\`} />

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>Props</StateLabel>
          <SpecTable rows={[{
          label: 'visible',
          value: 'boolean',
          token: '표시 여부 (필수)'
        }, {
          label: 'onClose',
          value: '() => void',
          token: '배경 탭 시 닫기 콜백'
        }, {
          label: 'title',
          value: 'string',
          token: '대화상자 타이틀'
        }, {
          label: 'description',
          value: 'string',
          token: '본문 텍스트'
        }, {
          label: 'children',
          value: 'ReactNode',
          token: '커스텀 콘텐츠 (description 대체)'
        }, {
          label: 'primaryAction',
          value: '{ label, onPress, destructive? }',
          token: '주 버튼'
        }, {
          label: 'secondaryAction',
          value: '{ label, onPress }',
          token: '보조 버튼'
        }]} />
        </Col>
      </Section>
    </View>
}`,...P.parameters?.docs?.source}}};const j=["Playground","Default","Destructive","CustomContent","DesignSpec","Usage"];export{x as CustomContent,k as Default,S as DesignSpec,f as Destructive,y as Playground,P as Usage,j as __namedExportsOrder,I as default};
