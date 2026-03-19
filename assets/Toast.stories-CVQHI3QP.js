import{r as T,R as e,V as a}from"./iframe-CExKz_YG.js";import{I as z}from"./Icon-CTnW1Y2_.js";import{s as t,r as s,c as i,T as u,f as o,a as r,M as p,m,e as P,y as W}from"./theme-DRANkRo4.js";import{S as f,b as R,D as $,R as U,d as y,C as b,a as v}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";const A=()=>e.createElement(z,{name:"check-circle",size:24,color:m[45]}),B=()=>e.createElement(z,{name:"warning",size:24,color:W[50]}),_=()=>e.createElement(z,{name:"x-circle",size:24,color:P[70]}),M={success:A,warning:B,error:_};function l({message:S,variant:g="success",visible:n,duration:d=3e3,onDismiss:c,position:x="bottom",action:C}){if(T.useEffect(()=>{if(n&&d>0&&c){const q=setTimeout(c,d);return()=>clearTimeout(q)}},[n,d,c]),!n)return null;const D=M[g],N={position:"absolute",left:0,right:0,...x==="bottom"?{bottom:48}:{top:48},marginHorizontal:t.large},I={backgroundColor:i[50],borderRadius:s.medium,paddingHorizontal:t.large,paddingVertical:t.medium,flexDirection:"row",alignItems:"center",gap:t.medium},L={color:i[100],fontSize:r.medium,fontWeight:o.medium,flex:1},H={color:m[80],fontSize:r.small,fontWeight:o.semibold,marginLeft:t.small};return e.createElement(a,{style:N,pointerEvents:"box-none"},e.createElement(a,{style:I,accessibilityRole:"alert"},e.createElement(D,null),e.createElement(u,{style:L},S),C&&e.createElement(p,{onPress:C.onPress},e.createElement(u,{style:H},C.label))))}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'success'",computed:!1}},visible:{required:!0,tsType:{name:"boolean"},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},action:{required:!1,tsType:{name:"ToastAction"},description:""}}};const Q={title:"Feedback/Toast",component:l,argTypes:{message:{control:"text",description:"토스트 메시지 텍스트"},variant:{control:"select",options:["success","error","warning"],description:"상태 변형"},visible:{control:"boolean",description:"표시 여부"},duration:{control:"number",description:"자동 닫힘 시간(ms)"},position:{control:"select",options:["top","bottom"],description:"위치"}},tags:["autodocs"]},E={name:"Playground",render:function(){const[g,n]=T.useState(!1);return e.createElement(a,{style:{height:200}},e.createElement(p,{onPress:()=>n(!0),style:{backgroundColor:m[45],paddingHorizontal:t.xlarge,paddingVertical:t.medium,borderRadius:s.medium,alignSelf:"flex-start"}},e.createElement(u,{style:{color:"#FFFFFF",fontSize:r.small,fontWeight:o.semibold}},"토스트 표시")),e.createElement(l,{message:"메시지에 마침표를 찍어요.",variant:"success",visible:g,duration:3e3,onDismiss:()=>n(!1),position:"bottom"}))}},w={name:"변형",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(f,{title:"변형",description:"variant별로 왼쪽 아이콘이 달라집니다. 성공(민트 체크), 경고(노란 삼각형), 에러(빨간 느낌표)를 제공합니다."},e.createElement(a,{style:{gap:t["2xlarge"]}},e.createElement(b,{gap:t.small},e.createElement(v,null,"SUCCESS (성공)"),e.createElement(a,{style:{height:100,position:"relative",backgroundColor:i[99],borderRadius:s.small}},e.createElement(l,{message:"메시지에 마침표를 찍어요.",variant:"success",visible:!0,position:"bottom"}))),e.createElement(b,{gap:t.small},e.createElement(v,null,"WARNING (경고)"),e.createElement(a,{style:{height:100,position:"relative",backgroundColor:i[99],borderRadius:s.small}},e.createElement(l,{message:"메시지에 마침표를 찍어요.",variant:"warning",visible:!0,position:"bottom"}))),e.createElement(b,{gap:t.small},e.createElement(v,null,"ERROR (에러)"),e.createElement(a,{style:{height:100,position:"relative",backgroundColor:i[99],borderRadius:s.small}},e.createElement(l,{message:"메시지에 마침표를 찍어요.",variant:"error",visible:!0,position:"bottom"}))))))},h={name:"액션 버튼",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(f,{title:"액션 버튼",description:"action prop으로 토스트에 인터랙티브 버튼을 추가할 수 있습니다."},e.createElement(a,{style:{gap:t.large}},e.createElement(b,{gap:t.small},e.createElement(v,null,"실행 취소"),e.createElement(a,{style:{height:100,position:"relative",backgroundColor:i[99],borderRadius:s.small}},e.createElement(l,{message:"항목이 삭제되었습니다.",variant:"success",visible:!0,action:{label:"실행 취소",onPress:()=>{}}}))),e.createElement(b,{gap:t.small},e.createElement(v,null,"다시 시도"),e.createElement(a,{style:{height:100,position:"relative",backgroundColor:i[99],borderRadius:s.small}},e.createElement(l,{message:"전송에 실패했습니다.",variant:"error",visible:!0,action:{label:"다시 시도",onPress:()=>{}}}))))))},F={name:"인터랙티브 데모",render:()=>{const[S,g]=T.useState("success"),[n,d]=T.useState(!1),c=x=>{g(x),d(!0)};return e.createElement(f,{title:"인터랙티브 데모",description:"버튼을 눌러 각 변형의 토스트를 직접 확인해보세요. 3초 후 자동으로 사라집니다."},e.createElement(U,{gap:t.small,wrap:!0},e.createElement(p,{onPress:()=>c("success"),style:{backgroundColor:m[45],paddingHorizontal:t.large,paddingVertical:t.small,borderRadius:s.small}},e.createElement(u,{style:{color:"#FFFFFF",fontSize:r.small,fontWeight:o.semibold}},"성공")),e.createElement(p,{onPress:()=>c("warning"),style:{backgroundColor:W[50],paddingHorizontal:t.large,paddingVertical:t.small,borderRadius:s.small}},e.createElement(u,{style:{color:"#FFFFFF",fontSize:r.small,fontWeight:o.semibold}},"경고")),e.createElement(p,{onPress:()=>c("error"),style:{backgroundColor:P[70],paddingHorizontal:t.large,paddingVertical:t.small,borderRadius:s.small}},e.createElement(u,{style:{color:"#FFFFFF",fontSize:r.small,fontWeight:o.semibold}},"에러"))),e.createElement(a,{style:{height:100,position:"relative",marginTop:t.large}},e.createElement(l,{message:"메시지에 마침표를 찍어요.",variant:S,visible:n,duration:3e3,onDismiss:()=>d(!1)})))}},V={name:"디자인 스펙",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(f,{title:"디자인 스펙",description:"디자이너와 개발자를 위한 Toast 토큰 상세 스펙입니다."},e.createElement(R,{title:"레이아웃",rows:[{label:"배경색",value:i[50],token:"coolNeutral[50]"},{label:"텍스트 색상",value:"#FFFFFF",token:"coolNeutral[100]"},{label:"폰트 크기",value:`${r.medium}px`,token:"fontSize.medium"},{label:"폰트 굵기",value:o.medium,token:"fontWeight.medium"},{label:"모서리 반경",value:`${s.medium}px`,token:"radius.medium"},{label:"좌우 패딩",value:`${t.large}px`,token:"spacing.large"},{label:"상하 패딩",value:`${t.medium}px`,token:"spacing.medium"},{label:"아이콘-텍스트 간격",value:`${t.medium}px`,token:"spacing.medium"},{label:"좌우 마진",value:`${t.large}px`,token:"spacing.large"}]}),e.createElement($,null),e.createElement(R,{title:"상태별 아이콘",rows:[{label:"Success 아이콘",value:"민트 원 + 흰색 체크",token:`mint[45] (${m[45]})`},{label:"Warning 아이콘",value:"노란 삼각형 + 흰색 느낌표",token:`yellow[50] (${W[50]})`},{label:"Error 아이콘",value:"빨간 원 + 흰색 느낌표",token:`red[70] (${P[70]})`},{label:"Default 아이콘",value:"민트 원 + 흰색 느낌표",token:`mint[45] (${m[45]})`},{label:"아이콘 크기",value:"24×24px",token:"—"}]}),e.createElement($,null),e.createElement(R,{title:"액션 버튼",rows:[{label:"텍스트 색상",value:m[80],token:"mint[80]"},{label:"폰트 크기",value:`${r.small}px`,token:"fontSize.small"},{label:"폰트 굵기",value:o.semibold,token:"fontWeight.semibold"}]})))},k={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(f,{title:"사용 가이드",description:"개발자를 위한 Toast 컴포넌트 사용 예시입니다."},e.createElement(y,{title:"Import",code:"import { Toast } from '@design-system/components/Toast';"}),e.createElement(y,{title:"기본 사용",code:`const [visible, setVisible] = useState(false);

<Toast
  message="저장되었습니다."
  variant="success"
  visible={visible}
  onDismiss={() => setVisible(false)}
/>`}),e.createElement(y,{title:"액션 버튼 포함",code:`<Toast
  message="항목이 삭제되었습니다."
  variant="error"
  visible={visible}
  onDismiss={() => setVisible(false)}
  action={{
    label: '실행 취소',
    onPress: handleUndo,
  }}
/>`}),e.createElement(y,{title:"상단 위치 + 경고",code:`<Toast
  message="네트워크 연결 불안정"
  variant="warning"
  visible={visible}
  position="top"
  duration={5000}
  onDismiss={() => setVisible(false)}
/>`})))};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: function PlaygroundRender() {
    const [visible, setVisible] = useState(false);
    return <View style={{
      height: 200
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
          fontSize: fontSize.small,
          fontWeight: fontWeight.semibold
        }}>
            토스트 표시
          </Text>
        </Pressable>
        <Toast message="메시지에 마침표를 찍어요." variant="success" visible={visible} duration={3000} onDismiss={() => setVisible(false)} position="bottom" />
      </View>;
  }
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '변형',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="변형" description="variant별로 왼쪽 아이콘이 달라집니다. 성공(민트 체크), 경고(노란 삼각형), 에러(빨간 느낌표)를 제공합니다.">
        <View style={{
        gap: spacing['2xlarge']
      }}>
          <Col gap={spacing.small}>
            <StateLabel>SUCCESS (성공)</StateLabel>
            <View style={{
            height: 100,
            position: 'relative',
            backgroundColor: coolNeutral[99],
            borderRadius: radius.small
          }}>
              <Toast message="메시지에 마침표를 찍어요." variant="success" visible position="bottom" />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>WARNING (경고)</StateLabel>
            <View style={{
            height: 100,
            position: 'relative',
            backgroundColor: coolNeutral[99],
            borderRadius: radius.small
          }}>
              <Toast message="메시지에 마침표를 찍어요." variant="warning" visible position="bottom" />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>ERROR (에러)</StateLabel>
            <View style={{
            height: 100,
            position: 'relative',
            backgroundColor: coolNeutral[99],
            borderRadius: radius.small
          }}>
              <Toast message="메시지에 마침표를 찍어요." variant="error" visible position="bottom" />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '액션 버튼',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="액션 버튼" description="action prop으로 토스트에 인터랙티브 버튼을 추가할 수 있습니다.">
        <View style={{
        gap: spacing.large
      }}>
          <Col gap={spacing.small}>
            <StateLabel>실행 취소</StateLabel>
            <View style={{
            height: 100,
            position: 'relative',
            backgroundColor: coolNeutral[99],
            borderRadius: radius.small
          }}>
              <Toast message="항목이 삭제되었습니다." variant="success" visible action={{
              label: '실행 취소',
              onPress: () => {}
            }} />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>다시 시도</StateLabel>
            <View style={{
            height: 100,
            position: 'relative',
            backgroundColor: coolNeutral[99],
            borderRadius: radius.small
          }}>
              <Toast message="전송에 실패했습니다." variant="error" visible action={{
              label: '다시 시도',
              onPress: () => {}
            }} />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [variant, setVariant] = useState<'success' | 'warning' | 'error'>('success');
    const [visible, setVisible] = useState(false);
    const show = (v: typeof variant) => {
      setVariant(v);
      setVisible(true);
    };
    return <Section title="인터랙티브 데모" description="버튼을 눌러 각 변형의 토스트를 직접 확인해보세요. 3초 후 자동으로 사라집니다.">
        <Row gap={spacing.small} wrap>
          <Pressable onPress={() => show('success')} style={{
          backgroundColor: mint[45],
          paddingHorizontal: spacing.large,
          paddingVertical: spacing.small,
          borderRadius: radius.small
        }}>
            <Text style={{
            color: '#FFFFFF',
            fontSize: fontSize.small,
            fontWeight: fontWeight.semibold
          }}>성공</Text>
          </Pressable>
          <Pressable onPress={() => show('warning')} style={{
          backgroundColor: yellow[50],
          paddingHorizontal: spacing.large,
          paddingVertical: spacing.small,
          borderRadius: radius.small
        }}>
            <Text style={{
            color: '#FFFFFF',
            fontSize: fontSize.small,
            fontWeight: fontWeight.semibold
          }}>경고</Text>
          </Pressable>
          <Pressable onPress={() => show('error')} style={{
          backgroundColor: red[70],
          paddingHorizontal: spacing.large,
          paddingVertical: spacing.small,
          borderRadius: radius.small
        }}>
            <Text style={{
            color: '#FFFFFF',
            fontSize: fontSize.small,
            fontWeight: fontWeight.semibold
          }}>에러</Text>
          </Pressable>
        </Row>
        <View style={{
        height: 100,
        position: 'relative',
        marginTop: spacing.large
      }}>
          <Toast message="메시지에 마침표를 찍어요." variant={variant} visible={visible} duration={3000} onDismiss={() => setVisible(false)} />
        </View>
      </Section>;
  }
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="디자이너와 개발자를 위한 Toast 토큰 상세 스펙입니다.">
        <SpecTable title="레이아웃" rows={[{
        label: '배경색',
        value: coolNeutral[50],
        token: 'coolNeutral[50]'
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
        value: fontWeight.medium,
        token: 'fontWeight.medium'
      }, {
        label: '모서리 반경',
        value: \`\${radius.medium}px\`,
        token: 'radius.medium'
      }, {
        label: '좌우 패딩',
        value: \`\${spacing.large}px\`,
        token: 'spacing.large'
      }, {
        label: '상하 패딩',
        value: \`\${spacing.medium}px\`,
        token: 'spacing.medium'
      }, {
        label: '아이콘-텍스트 간격',
        value: \`\${spacing.medium}px\`,
        token: 'spacing.medium'
      }, {
        label: '좌우 마진',
        value: \`\${spacing.large}px\`,
        token: 'spacing.large'
      }]} />

        <Divider />

        <SpecTable title="상태별 아이콘" rows={[{
        label: 'Success 아이콘',
        value: '민트 원 + 흰색 체크',
        token: \`mint[45] (\${mint[45]})\`
      }, {
        label: 'Warning 아이콘',
        value: '노란 삼각형 + 흰색 느낌표',
        token: \`yellow[50] (\${yellow[50]})\`
      }, {
        label: 'Error 아이콘',
        value: '빨간 원 + 흰색 느낌표',
        token: \`red[70] (\${red[70]})\`
      }, {
        label: 'Default 아이콘',
        value: '민트 원 + 흰색 느낌표',
        token: \`mint[45] (\${mint[45]})\`
      }, {
        label: '아이콘 크기',
        value: '24×24px',
        token: '—'
      }]} />

        <Divider />

        <SpecTable title="액션 버튼" rows={[{
        label: '텍스트 색상',
        value: mint[80],
        token: 'mint[80]'
      }, {
        label: '폰트 크기',
        value: \`\${fontSize.small}px\`,
        token: 'fontSize.small'
      }, {
        label: '폰트 굵기',
        value: fontWeight.semibold,
        token: 'fontWeight.semibold'
      }]} />
      </Section>
    </View>
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Toast 컴포넌트 사용 예시입니다.">
        <CodeBlock title="Import" code={\`import { Toast } from '@design-system/components/Toast';\`} />

        <CodeBlock title="기본 사용" code={\`const [visible, setVisible] = useState(false);

<Toast
  message="저장되었습니다."
  variant="success"
  visible={visible}
  onDismiss={() => setVisible(false)}
/>\`} />

        <CodeBlock title="액션 버튼 포함" code={\`<Toast
  message="항목이 삭제되었습니다."
  variant="error"
  visible={visible}
  onDismiss={() => setVisible(false)}
  action={{
    label: '실행 취소',
    onPress: handleUndo,
  }}
/>\`} />

        <CodeBlock title="상단 위치 + 경고" code={\`<Toast
  message="네트워크 연결 불안정"
  variant="warning"
  visible={visible}
  position="top"
  duration={5000}
  onDismiss={() => setVisible(false)}
/>\`} />
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};const X=["Playground","Variants","WithAction","Interactive","DesignSpec","Usage"];export{V as DesignSpec,F as Interactive,E as Playground,k as Usage,w as Variants,h as WithAction,X as __namedExportsOrder,Q as default};
