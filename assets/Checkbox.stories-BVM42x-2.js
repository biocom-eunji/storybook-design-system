import{R as e,V as y,r as G}from"./iframe-CExKz_YG.js";import{S as D,P as Z,R as J,I as K}from"./Icon-CTnW1Y2_.js";import{M as W,r as A,c as o,s as t,i as N,m as E,T as F,f as v,a as $}from"./theme-DRANkRo4.js";import{S as k,C as a,a as i,R,c as x,D as V,d as C,b as q}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";const Q={small:{box:18,iconVB:256,radius:4,gap:8,fontSize:14,subFontSize:13},medium:{box:22,iconVB:256,radius:5,gap:10,fontSize:15,subFontSize:14}};function c({state:r="unchecked",onPress:l,size:h="medium",label:m,sublabel:d,disabled:n=!1,bold:b=!1,tight:u=!1}){const s=Q[h],p=r==="checked",g=r==="indeterminate",f=p||g,_=n?f?E[90]:"transparent":f?E[45]:"transparent",O=n?o[90]:f?E[45]:o[90],U=n?o[80]:o[17],H=n?o[80]:o[50];return e.createElement(W,{onPress:n?void 0:l,accessibilityRole:"checkbox",accessibilityState:{checked:p||g},accessibilityLabel:m,style:({pressed:j})=>({flexDirection:"row",alignItems:"center",gap:m?s.gap:0,opacity:j&&!n?N.pressOpacity:1,paddingVertical:u?t.small:t.medium,paddingHorizontal:u?t.medium:0,backgroundColor:u?o[99]:"transparent",borderRadius:u?A.medium:0})},e.createElement(y,{style:{width:s.box,height:s.box,borderRadius:s.radius,borderWidth:f?0:1.5,borderColor:O,backgroundColor:_,alignItems:"center",justifyContent:"center"}},p&&e.createElement(D,{width:s.box*.7,height:s.box*.7,viewBox:"0 0 256 256",fill:"none"},e.createElement(Z,{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z",fill:"#FFFFFF"})),g&&e.createElement(D,{width:s.box*.6,height:s.box*.6,viewBox:"0 0 256 256",fill:"none"},e.createElement(J,{x:"40",y:"112",width:"176",height:"32",rx:"12",fill:"#FFFFFF"}))),m&&e.createElement(y,{style:{flex:1}},e.createElement(F,{style:{fontSize:s.fontSize,fontWeight:b?v.semibold:v.medium,color:U}},m),d&&e.createElement(F,{style:{fontSize:s.subFontSize,fontWeight:v.regular,color:H,marginTop:2}},d)))}c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{state:{required:!1,tsType:{name:"union",raw:"'unchecked' | 'checked' | 'indeterminate'",elements:[{name:"literal",value:"'unchecked'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'indeterminate'"}]},description:"",defaultValue:{value:"'unchecked'",computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},sublabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const X={small:{icon:18,gap:8,fontSize:14,subFontSize:13},medium:{icon:22,gap:10,fontSize:15,subFontSize:14}};function S({checked:r=!1,onPress:l,size:h="medium",label:m,sublabel:d,disabled:n=!1,tight:b=!1}){const u=X[h],s=n?o[80]:r?E[45]:o[90],p=n?o[80]:o[17],g=n?o[80]:o[50];return e.createElement(W,{onPress:n?void 0:l,accessibilityRole:"checkbox",accessibilityState:{checked:r},accessibilityLabel:m,style:({pressed:f})=>({flexDirection:"row",alignItems:"center",gap:m?u.gap:0,opacity:f&&!n?N.pressOpacity:1,paddingVertical:b?8:12,paddingHorizontal:b?12:0,backgroundColor:b?o[99]:"transparent",borderRadius:b?12:0})},e.createElement(K,{name:"check",size:u.icon,color:s}),m&&e.createElement(y,null,e.createElement(F,{style:{fontSize:u.fontSize,fontWeight:v.medium,color:p}},m),d&&e.createElement(F,{style:{fontSize:u.subFontSize,fontWeight:v.regular,color:g,marginTop:2}},d)))}S.__docgenInfo={description:"",methods:[],displayName:"CheckMark",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},sublabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ne={title:"Input/Checkbox",component:c,argTypes:{state:{control:"select",options:["unchecked","checked","indeterminate"],description:"체크박스 상태"},size:{control:"select",options:["small","medium"],description:"체크박스 크기"},label:{control:"text",description:"라벨 텍스트"},sublabel:{control:"text",description:"보조 라벨 텍스트"},disabled:{control:"boolean",description:"비활성화 상태"},bold:{control:"boolean",description:"라벨 굵게 표시"},tight:{control:"boolean",description:"좁은 간격 모드"}},tags:["autodocs"]},z={args:{state:"checked",size:"medium",label:"동의합니다",sublabel:"보조 설명 텍스트",disabled:!1,bold:!1,tight:!1}},w={name:"세 가지 상태",render:()=>e.createElement(k,{title:"세 가지 상태",description:"체크박스는 unchecked, checked, indeterminate 세 가지 상태를 가집니다."},e.createElement(x,{items:[{label:"Unchecked (미선택)",content:e.createElement(a,{gap:t.xsmall},e.createElement(i,null,"미선택"),e.createElement(c,{state:"unchecked",label:"미선택 상태"}))},{label:"Checked (선택)",content:e.createElement(a,{gap:t.xsmall},e.createElement(i,null,"선택"),e.createElement(c,{state:"checked",label:"선택 상태"}))},{label:"Indeterminate (부분 선택)",content:e.createElement(a,{gap:t.xsmall},e.createElement(i,null,"부분 선택"),e.createElement(c,{state:"indeterminate",label:"부분 선택 상태"}))}]}))},L={name:"모든 변형",render:()=>{const r=[{state:"unchecked",label:"미선택"},{state:"checked",label:"선택"},{state:"indeterminate",label:"부분 선택"}];return e.createElement(k,{title:"모든 변형",description:"3가지 상태 x 활성/비활성 x 2가지 사이즈의 전체 조합입니다."},e.createElement(a,{gap:t["3xlarge"]},e.createElement(a,{gap:t.large},e.createElement(i,null,"Small 사이즈"),e.createElement(R,{gap:t["3xlarge"],wrap:!0,align:"flex-start"},e.createElement(a,{gap:t.small},e.createElement(i,null,"활성"),e.createElement(x,{items:r.map(l=>({label:l.label,content:e.createElement(c,{state:l.state,size:"small"})}))})),e.createElement(a,{gap:t.small},e.createElement(i,null,"비활성"),e.createElement(x,{items:r.map(l=>({label:l.label,content:e.createElement(c,{state:l.state,size:"small",disabled:!0})}))})))),e.createElement(V,null),e.createElement(a,{gap:t.large},e.createElement(i,null,"Medium 사이즈"),e.createElement(R,{gap:t["3xlarge"],wrap:!0,align:"flex-start"},e.createElement(a,{gap:t.small},e.createElement(i,null,"활성"),e.createElement(x,{items:r.map(l=>({label:l.label,content:e.createElement(c,{state:l.state,size:"medium"})}))})),e.createElement(a,{gap:t.small},e.createElement(i,null,"비활성"),e.createElement(x,{items:r.map(l=>({label:l.label,content:e.createElement(c,{state:l.state,size:"medium",disabled:!0})}))}))))))}},M={name:"라벨 옵션",render:()=>e.createElement(k,{title:"라벨 옵션",description:"라벨, 보조 라벨, bold, tight 등 다양한 라벨 구성을 확인합니다."},e.createElement(a,{gap:t["2xlarge"]},e.createElement(a,{gap:t.small},e.createElement(i,null,"라벨만"),e.createElement(c,{state:"checked",label:"라벨만 있는 체크박스"}),e.createElement(c,{state:"unchecked",label:"라벨만 있는 체크박스"})),e.createElement(V,null),e.createElement(a,{gap:t.small},e.createElement(i,null,"라벨 + 보조 라벨"),e.createElement(c,{state:"checked",label:"메인 라벨",sublabel:"보조 설명이 여기에 표시됩니다"}),e.createElement(c,{state:"unchecked",label:"메인 라벨",sublabel:"보조 설명이 여기에 표시됩니다"})),e.createElement(V,null),e.createElement(a,{gap:t.small},e.createElement(i,null,"Bold 라벨"),e.createElement(R,{gap:t["2xlarge"],wrap:!0},e.createElement(c,{state:"checked",label:"일반 라벨",sublabel:"기본 굵기"}),e.createElement(c,{state:"checked",label:"굵은 라벨",sublabel:"bold 적용",bold:!0}))),e.createElement(V,null),e.createElement(a,{gap:t.small},e.createElement(i,null,"Tight 모드"),e.createElement(y,{style:{maxWidth:300}},e.createElement(a,{gap:t.small},e.createElement(c,{state:"checked",label:"좁은 간격",sublabel:"tight 모드에서는 간격이 줄어듭니다",tight:!0}),e.createElement(c,{state:"unchecked",label:"좁은 간격",sublabel:"tight 모드에서는 간격이 줄어듭니다",tight:!0}))))))},T={name:"부모-자식 연동",render:()=>{const[r,l]=G.useState([!1,!0,!1]),h=r.every(Boolean),m=r.some(Boolean),d=h?"checked":m?"indeterminate":"unchecked",n=()=>{const s=!h;l(r.map(()=>s))},b=s=>l(p=>{const g=[...p];return g[s]=!g[s],g}),u=["이용약관 동의","개인정보 수집 동의","마케팅 수신 동의"];return e.createElement(k,{title:"부모-자식 연동",description:"부모 체크박스가 자식의 상태에 따라 indeterminate로 전환됩니다. 직접 클릭해 보세요."},e.createElement(a,{gap:t.xsmall},e.createElement(c,{state:d,label:"전체 동의",bold:!0,onPress:n}),e.createElement(y,{style:{paddingLeft:t["2xlarge"]}},e.createElement(a,{gap:t.xsmall},u.map((s,p)=>e.createElement(c,{key:p,state:r[p]?"checked":"unchecked",label:s,onPress:()=>b(p)}))))))}},I={name:"디자인 스펙",render:()=>e.createElement(k,{title:"디자인 스펙",description:"디자이너를 위한 사이즈 및 컬러 토큰 명세입니다."},e.createElement(a,{gap:t["2xlarge"]},e.createElement(q,{title:"Small 사이즈",rows:[{label:"박스 크기",value:"18px",token:"—"},{label:"모서리 반경",value:`${A.xsmall}px`,token:"radius.xsmall"},{label:"라벨 간격",value:`${t.small}px`,token:"spacing.small"},{label:"라벨 폰트 크기",value:`${$.small}px`,token:"fontSize.small"}]}),e.createElement(q,{title:"Medium 사이즈",rows:[{label:"박스 크기",value:"22px",token:"—"},{label:"모서리 반경",value:"5px",token:"—"},{label:"라벨 간격",value:"10px",token:"—"},{label:"라벨 폰트 크기",value:`${$.medium}px`,token:"fontSize.medium"}]}),e.createElement(q,{title:"컬러",rows:[{label:"미선택 테두리",value:o[90],token:"coolNeutral[90]"},{label:"선택/부분선택 채움",value:E[45],token:"mint[45]"},{label:"비활성 상태",value:E[90],token:"mint[90]"}]})))},P={name:"사용 가이드",render:()=>e.createElement(k,{title:"사용 가이드",description:"개발자를 위한 코드 사용 예시입니다."},e.createElement(a,{gap:t.large},e.createElement(C,{title:"기본 사용",code:'<Checkbox state="unchecked" onPress={() => {}} />'}),e.createElement(C,{title:"라벨과 함께 사용",code:`<Checkbox
  state="checked"
  label="동의합니다"
  sublabel="보조 설명 텍스트"
  onPress={() => handleToggle()}
/>`}),e.createElement(C,{title:"Indeterminate 상태 (부모-자식 패턴)",code:`const allChecked = items.every(Boolean);
const someChecked = items.some(Boolean);
const parentState = allChecked
  ? 'checked'
  : someChecked
    ? 'indeterminate'
    : 'unchecked';

<Checkbox
  state={parentState}
  label="전체 선택"
  bold
  onPress={() => {
    const next = !allChecked;
    setItems(items.map(() => next));
  }}
/>`}),e.createElement(C,{title:"사이즈 변경",code:`<Checkbox state="checked" size="small" label="작은 체크박스" />
<Checkbox state="checked" size="medium" label="중간 체크박스" />`}),e.createElement(C,{title:"Bold 라벨",code:'<Checkbox state="checked" label="굵은 라벨" bold />'}),e.createElement(C,{title:"비활성화",code:'<Checkbox state="checked" disabled label="비활성 체크박스" />'})))},B={name:"CheckMark",render:()=>{const[r,l]=G.useState([!1,!0,!1,!1]),h=[{label:"알림 수신 동의",sublabel:"마케팅 및 서비스 알림을 수신합니다"},{label:"이메일 수신 동의",sublabel:"이메일로 소식을 받아봅니다"},{label:"SMS 수신 동의",sublabel:"문자로 소식을 받아봅니다"},{label:"야간 알림 동의",sublabel:"21시~08시 사이 알림을 수신합니다"}],m=d=>l(n=>{const b=[...n];return b[d]=!b[d],b});return e.createElement(a,{gap:t["3xlarge"]},e.createElement(k,{title:"CheckMark",description:"체크 아이콘만 사용하는 간결한 선택 컴포넌트입니다. 박스 없이 체크 표시만으로 선택 상태를 나타냅니다."},e.createElement(R,{gap:t["3xlarge"],wrap:!0,align:"flex-start"},e.createElement(a,{gap:t.large},e.createElement(i,null,"활성"),e.createElement(x,{items:[{label:"미선택",content:e.createElement(S,{checked:!1,size:"medium"})},{label:"선택",content:e.createElement(S,{checked:!0,size:"medium"})}]})),e.createElement(a,{gap:t.large},e.createElement(i,null,"비활성"),e.createElement(x,{items:[{label:"미선택",content:e.createElement(S,{checked:!1,size:"medium",disabled:!0})},{label:"선택",content:e.createElement(S,{checked:!0,size:"medium",disabled:!0})}]})))),e.createElement(k,{title:"CheckMark 인터랙티브",description:"직접 클릭해 보세요."},e.createElement(a,{gap:t.xsmall},h.map((d,n)=>e.createElement(S,{key:n,checked:r[n],label:d.label,sublabel:d.sublabel,onPress:()=>m(n)})))),e.createElement(k,{title:"CheckMark 사용 가이드"},e.createElement(C,{title:"기본 사용",code:`<CheckMark checked={false} onPress={() => {}} />
<CheckMark checked label="항목" sublabel="설명" />`})))}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'checked',
    size: 'medium',
    label: '동의합니다',
    sublabel: '보조 설명 텍스트',
    disabled: false,
    bold: false,
    tight: false
  }
}`,...z.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '세 가지 상태',
  render: () => <Section title="세 가지 상태" description="체크박스는 unchecked, checked, indeterminate 세 가지 상태를 가집니다.">
      <CompareGrid items={[{
      label: 'Unchecked (미선택)',
      content: <Col gap={spacing.xsmall}>
                <StateLabel>미선택</StateLabel>
                <Checkbox state="unchecked" label="미선택 상태" />
              </Col>
    }, {
      label: 'Checked (선택)',
      content: <Col gap={spacing.xsmall}>
                <StateLabel>선택</StateLabel>
                <Checkbox state="checked" label="선택 상태" />
              </Col>
    }, {
      label: 'Indeterminate (부분 선택)',
      content: <Col gap={spacing.xsmall}>
                <StateLabel>부분 선택</StateLabel>
                <Checkbox state="indeterminate" label="부분 선택 상태" />
              </Col>
    }]} />
    </Section>
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '모든 변형',
  render: () => {
    const states: Array<{
      state: 'unchecked' | 'checked' | 'indeterminate';
      label: string;
    }> = [{
      state: 'unchecked',
      label: '미선택'
    }, {
      state: 'checked',
      label: '선택'
    }, {
      state: 'indeterminate',
      label: '부분 선택'
    }];
    return <Section title="모든 변형" description="3가지 상태 x 활성/비활성 x 2가지 사이즈의 전체 조합입니다.">
        <Col gap={spacing['3xlarge']}>
          {/* Small */}
          <Col gap={spacing.large}>
            <StateLabel>Small 사이즈</StateLabel>
            <Row gap={spacing['3xlarge']} wrap align="flex-start">
              <Col gap={spacing.small}>
                <StateLabel>활성</StateLabel>
                <CompareGrid items={states.map(s => ({
                label: s.label,
                content: <Checkbox state={s.state} size="small" />
              }))} />
              </Col>
              <Col gap={spacing.small}>
                <StateLabel>비활성</StateLabel>
                <CompareGrid items={states.map(s => ({
                label: s.label,
                content: <Checkbox state={s.state} size="small" disabled />
              }))} />
              </Col>
            </Row>
          </Col>

          <Divider />

          {/* Medium */}
          <Col gap={spacing.large}>
            <StateLabel>Medium 사이즈</StateLabel>
            <Row gap={spacing['3xlarge']} wrap align="flex-start">
              <Col gap={spacing.small}>
                <StateLabel>활성</StateLabel>
                <CompareGrid items={states.map(s => ({
                label: s.label,
                content: <Checkbox state={s.state} size="medium" />
              }))} />
              </Col>
              <Col gap={spacing.small}>
                <StateLabel>비활성</StateLabel>
                <CompareGrid items={states.map(s => ({
                label: s.label,
                content: <Checkbox state={s.state} size="medium" disabled />
              }))} />
              </Col>
            </Row>
          </Col>
        </Col>
      </Section>;
  }
}`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '라벨 옵션',
  render: () => <Section title="라벨 옵션" description="라벨, 보조 라벨, bold, tight 등 다양한 라벨 구성을 확인합니다.">
      <Col gap={spacing['2xlarge']}>
        <Col gap={spacing.small}>
          <StateLabel>라벨만</StateLabel>
          <Checkbox state="checked" label="라벨만 있는 체크박스" />
          <Checkbox state="unchecked" label="라벨만 있는 체크박스" />
        </Col>

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>라벨 + 보조 라벨</StateLabel>
          <Checkbox state="checked" label="메인 라벨" sublabel="보조 설명이 여기에 표시됩니다" />
          <Checkbox state="unchecked" label="메인 라벨" sublabel="보조 설명이 여기에 표시됩니다" />
        </Col>

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>Bold 라벨</StateLabel>
          <Row gap={spacing['2xlarge']} wrap>
            <Checkbox state="checked" label="일반 라벨" sublabel="기본 굵기" />
            <Checkbox state="checked" label="굵은 라벨" sublabel="bold 적용" bold />
          </Row>
        </Col>

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>Tight 모드</StateLabel>
          <View style={{
          maxWidth: 300
        }}>
            <Col gap={spacing.small}>
              <Checkbox state="checked" label="좁은 간격" sublabel="tight 모드에서는 간격이 줄어듭니다" tight />
              <Checkbox state="unchecked" label="좁은 간격" sublabel="tight 모드에서는 간격이 줄어듭니다" tight />
            </Col>
          </View>
        </Col>
      </Col>
    </Section>
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '부모-자식 연동',
  render: () => {
    const [items, setItems] = useState([false, true, false]);
    const allChecked = items.every(Boolean);
    const someChecked = items.some(Boolean);
    const parentState: 'checked' | 'indeterminate' | 'unchecked' = allChecked ? 'checked' : someChecked ? 'indeterminate' : 'unchecked';
    const toggleAll = () => {
      const next = !allChecked;
      setItems(items.map(() => next));
    };
    const toggleItem = (i: number) => setItems(prev => {
      const n = [...prev];
      n[i] = !n[i];
      return n;
    });
    const children = ['이용약관 동의', '개인정보 수집 동의', '마케팅 수신 동의'];
    return <Section title="부모-자식 연동" description="부모 체크박스가 자식의 상태에 따라 indeterminate로 전환됩니다. 직접 클릭해 보세요.">
        <Col gap={spacing.xsmall}>
          <Checkbox state={parentState} label="전체 동의" bold onPress={toggleAll} />
          <View style={{
          paddingLeft: spacing['2xlarge']
        }}>
            <Col gap={spacing.xsmall}>
              {children.map((name, i) => <Checkbox key={i} state={items[i] ? 'checked' : 'unchecked'} label={name} onPress={() => toggleItem(i)} />)}
            </Col>
          </View>
        </Col>
      </Section>;
  }
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <Section title="디자인 스펙" description="디자이너를 위한 사이즈 및 컬러 토큰 명세입니다.">
      <Col gap={spacing['2xlarge']}>
        <SpecTable title="Small 사이즈" rows={[{
        label: '박스 크기',
        value: '18px',
        token: '—'
      }, {
        label: '모서리 반경',
        value: \`\${radius.xsmall}px\`,
        token: 'radius.xsmall'
      }, {
        label: '라벨 간격',
        value: \`\${spacing.small}px\`,
        token: 'spacing.small'
      }, {
        label: '라벨 폰트 크기',
        value: \`\${fontSize.small}px\`,
        token: 'fontSize.small'
      }]} />
        <SpecTable title="Medium 사이즈" rows={[{
        label: '박스 크기',
        value: '22px',
        token: '—'
      }, {
        label: '모서리 반경',
        value: '5px',
        token: '—'
      }, {
        label: '라벨 간격',
        value: '10px',
        token: '—'
      }, {
        label: '라벨 폰트 크기',
        value: \`\${fontSize.medium}px\`,
        token: 'fontSize.medium'
      }]} />
        <SpecTable title="컬러" rows={[{
        label: '미선택 테두리',
        value: coolNeutral[90],
        token: 'coolNeutral[90]'
      }, {
        label: '선택/부분선택 채움',
        value: mint[45],
        token: 'mint[45]'
      }, {
        label: '비활성 상태',
        value: mint[90],
        token: 'mint[90]'
      }]} />
      </Col>
    </Section>
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <Section title="사용 가이드" description="개발자를 위한 코드 사용 예시입니다.">
      <Col gap={spacing.large}>
        <CodeBlock title="기본 사용" code={\`<Checkbox state="unchecked" onPress={() => {}} />\`} />
        <CodeBlock title="라벨과 함께 사용" code={\`<Checkbox
  state="checked"
  label="동의합니다"
  sublabel="보조 설명 텍스트"
  onPress={() => handleToggle()}
/>\`} />
        <CodeBlock title="Indeterminate 상태 (부모-자식 패턴)" code={\`const allChecked = items.every(Boolean);
const someChecked = items.some(Boolean);
const parentState = allChecked
  ? 'checked'
  : someChecked
    ? 'indeterminate'
    : 'unchecked';

<Checkbox
  state={parentState}
  label="전체 선택"
  bold
  onPress={() => {
    const next = !allChecked;
    setItems(items.map(() => next));
  }}
/>\`} />
        <CodeBlock title="사이즈 변경" code={\`<Checkbox state="checked" size="small" label="작은 체크박스" />
<Checkbox state="checked" size="medium" label="중간 체크박스" />\`} />
        <CodeBlock title="Bold 라벨" code={\`<Checkbox state="checked" label="굵은 라벨" bold />\`} />
        <CodeBlock title="비활성화" code={\`<Checkbox state="checked" disabled label="비활성 체크박스" />\`} />
      </Col>
    </Section>
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'CheckMark',
  render: () => {
    const [items, setItems] = useState([false, true, false, false]);
    const labels = [{
      label: '알림 수신 동의',
      sublabel: '마케팅 및 서비스 알림을 수신합니다'
    }, {
      label: '이메일 수신 동의',
      sublabel: '이메일로 소식을 받아봅니다'
    }, {
      label: 'SMS 수신 동의',
      sublabel: '문자로 소식을 받아봅니다'
    }, {
      label: '야간 알림 동의',
      sublabel: '21시~08시 사이 알림을 수신합니다'
    }];
    const toggle = (i: number) => setItems(prev => {
      const n = [...prev];
      n[i] = !n[i];
      return n;
    });
    return <Col gap={spacing['3xlarge']}>
        <Section title="CheckMark" description="체크 아이콘만 사용하는 간결한 선택 컴포넌트입니다. 박스 없이 체크 표시만으로 선택 상태를 나타냅니다.">
          <Row gap={spacing['3xlarge']} wrap align="flex-start">
            <Col gap={spacing.large}>
              <StateLabel>활성</StateLabel>
              <CompareGrid items={[{
              label: '미선택',
              content: <CheckMark checked={false} size="medium" />
            }, {
              label: '선택',
              content: <CheckMark checked size="medium" />
            }]} />
            </Col>
            <Col gap={spacing.large}>
              <StateLabel>비활성</StateLabel>
              <CompareGrid items={[{
              label: '미선택',
              content: <CheckMark checked={false} size="medium" disabled />
            }, {
              label: '선택',
              content: <CheckMark checked size="medium" disabled />
            }]} />
            </Col>
          </Row>
        </Section>

        <Section title="CheckMark 인터랙티브" description="직접 클릭해 보세요.">
          <Col gap={spacing.xsmall}>
            {labels.map((opt, i) => <CheckMark key={i} checked={items[i]} label={opt.label} sublabel={opt.sublabel} onPress={() => toggle(i)} />)}
          </Col>
        </Section>

        <Section title="CheckMark 사용 가이드">
          <CodeBlock title="기본 사용" code={\`<CheckMark checked={false} onPress={() => {}} />
<CheckMark checked label="항목" sublabel="설명" />\`} />
        </Section>
      </Col>;
  }
}`,...B.parameters?.docs?.source}}};const se=["Playground","ThreeStates","AllVariants","LabelOptions","ParentChild","DesignSpec","Usage","CheckMarkSection"];export{L as AllVariants,B as CheckMarkSection,I as DesignSpec,M as LabelOptions,T as ParentChild,z as Playground,w as ThreeStates,P as Usage,se as __namedExportsOrder,ne as default};
