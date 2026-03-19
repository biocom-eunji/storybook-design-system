import{R as e,V as C,r as W}from"./iframe-CExKz_YG.js";import{M as q,c as o,i as D,m as v,T as y,f as w,s as a,a as L}from"./theme-DRANkRo4.js";import{S as u,R as G,C as t,a as i,c as b,b as x,d as m,D as T}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";const $={small:{outer:18,inner:8,gap:8,fontSize:14,subFontSize:13},medium:{outer:22,inner:10,gap:10,fontSize:15,subFontSize:14}};function l({checked:n=!1,onPress:R,size:z="medium",label:r,sublabel:c,disabled:d=!1,tight:p=!1}){const s=$[z],P=d?o[90]:n?v[45]:o[90],M=d?o[80]:v[45],V=d?o[80]:o[17],B=d?o[80]:o[50];return e.createElement(q,{onPress:d?void 0:R,accessibilityRole:"radio",accessibilityState:{checked:n},accessibilityLabel:r,style:({pressed:N})=>({flexDirection:"row",alignItems:"center",gap:r?s.gap:0,opacity:N&&!d?D.pressOpacity:1,paddingVertical:p?8:12,paddingHorizontal:p?12:0,backgroundColor:p?o[99]:"transparent",borderRadius:p?12:0})},e.createElement(C,{style:{width:s.outer,height:s.outer,borderRadius:s.outer/2,borderWidth:n?0:1.5,borderColor:P,backgroundColor:n?M:"transparent",alignItems:"center",justifyContent:"center"}},n&&e.createElement(C,{style:{width:s.inner,height:s.inner,borderRadius:s.inner/2,backgroundColor:o[100]}})),r&&e.createElement(C,null,e.createElement(y,{style:{fontSize:s.fontSize,fontWeight:w.medium,color:V}},r),c&&e.createElement(y,{style:{fontSize:s.subFontSize,fontWeight:w.regular,color:B,marginTop:2}},c)))}l.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},sublabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const O={title:"Input/Radio",component:l,argTypes:{checked:{control:"boolean",description:"선택 상태"},size:{control:"select",options:["small","medium"],description:"라디오 크기"},label:{control:"text",description:"라벨 텍스트"},sublabel:{control:"text",description:"보조 라벨 텍스트"},disabled:{control:"boolean",description:"비활성화 상태"},tight:{control:"boolean",description:"좁은 간격 모드"}},tags:["autodocs"]},g={args:{checked:!0,size:"medium",label:"옵션 텍스트",sublabel:"보조 설명 텍스트",disabled:!1,tight:!1}},S={name:"모든 변형",render:()=>e.createElement(u,{title:"모든 변형",description:"라디오 버튼의 모든 상태를 한눈에 확인할 수 있습니다."},e.createElement(G,{gap:a["3xlarge"],wrap:!0,align:"flex-start"},e.createElement(t,{gap:a.large},e.createElement(i,null,"Small - 활성"),e.createElement(b,{items:[{label:"미선택",content:e.createElement(l,{checked:!1,size:"small"})},{label:"선택",content:e.createElement(l,{checked:!0,size:"small"})}]})),e.createElement(t,{gap:a.large},e.createElement(i,null,"Small - 비활성"),e.createElement(b,{items:[{label:"미선택",content:e.createElement(l,{checked:!1,size:"small",disabled:!0})},{label:"선택",content:e.createElement(l,{checked:!0,size:"small",disabled:!0})}]})),e.createElement(t,{gap:a.large},e.createElement(i,null,"Medium - 활성"),e.createElement(b,{items:[{label:"미선택",content:e.createElement(l,{checked:!1,size:"medium"})},{label:"선택",content:e.createElement(l,{checked:!0,size:"medium"})}]})),e.createElement(t,{gap:a.large},e.createElement(i,null,"Medium - 비활성"),e.createElement(b,{items:[{label:"미선택",content:e.createElement(l,{checked:!1,size:"medium",disabled:!0})},{label:"선택",content:e.createElement(l,{checked:!0,size:"medium",disabled:!0})}]}))))},k={name:"라벨 조합",render:()=>e.createElement(u,{title:"라벨 조합",description:"라벨, 보조 라벨, tight 모드 등 다양한 라벨 조합을 확인합니다."},e.createElement(t,{gap:a["2xlarge"]},e.createElement(t,{gap:a.small},e.createElement(i,null,"라벨만"),e.createElement(l,{checked:!0,label:"라벨만 있는 라디오"}),e.createElement(l,{checked:!1,label:"라벨만 있는 라디오"})),e.createElement(T,null),e.createElement(t,{gap:a.small},e.createElement(i,null,"라벨 + 보조 라벨"),e.createElement(l,{checked:!0,label:"메인 라벨",sublabel:"보조 설명 텍스트가 여기에 표시됩니다"}),e.createElement(l,{checked:!1,label:"메인 라벨",sublabel:"보조 설명 텍스트가 여기에 표시됩니다"})),e.createElement(T,null),e.createElement(t,{gap:a.small},e.createElement(i,null,"Tight 모드"),e.createElement(C,{style:{maxWidth:300}},e.createElement(t,{gap:a.small},e.createElement(l,{checked:!0,label:"좁은 간격",sublabel:"tight 모드에서는 간격이 줄어듭니다",tight:!0}),e.createElement(l,{checked:!1,label:"좁은 간격",sublabel:"tight 모드에서는 간격이 줄어듭니다",tight:!0}))))))},h={name:"라디오 그룹",render:()=>{const[n,R]=W.useState(0),z=[{label:"이메일로 받기",sublabel:"등록된 이메일 주소로 알림을 발송합니다"},{label:"SMS로 받기",sublabel:"등록된 휴대폰 번호로 문자를 발송합니다"},{label:"알림 받지 않기",sublabel:"모든 알림을 중지합니다"}];return e.createElement(u,{title:"라디오 그룹",description:"여러 옵션 중 하나를 선택하는 인터랙티브 예시입니다. 직접 클릭해 보세요."},e.createElement(t,{gap:a.xsmall},z.map((r,c)=>e.createElement(l,{key:c,checked:n===c,label:r.label,sublabel:r.sublabel,onPress:()=>R(c)}))))}},f={name:"디자인 스펙",render:()=>e.createElement(u,{title:"디자인 스펙",description:"디자이너를 위한 사이즈 및 컬러 토큰 명세입니다."},e.createElement(t,{gap:a["2xlarge"]},e.createElement(x,{title:"Small 사이즈",rows:[{label:"외곽 원 크기",value:"18px",token:"—"},{label:"내부 원 크기",value:"8px",token:"—"},{label:"라벨 간격",value:`${a.small}px`,token:"spacing.small"},{label:"라벨 폰트 크기",value:`${L.small}px`,token:"fontSize.small"}]}),e.createElement(x,{title:"Medium 사이즈",rows:[{label:"외곽 원 크기",value:"22px",token:"—"},{label:"내부 원 크기",value:"10px",token:"—"},{label:"라벨 간격",value:"10px",token:"—"},{label:"라벨 폰트 크기",value:`${L.medium}px`,token:"fontSize.medium"}]}),e.createElement(x,{title:"컬러",rows:[{label:"미선택 테두리",value:o[90],token:"coolNeutral[90]"},{label:"선택 채움",value:v[45],token:"mint[45]"},{label:"비활성 상태",value:o[80],token:"coolNeutral[80]"}]})))},E={name:"사용 가이드",render:()=>e.createElement(u,{title:"사용 가이드",description:"개발자를 위한 코드 사용 예시입니다."},e.createElement(t,{gap:a.large},e.createElement(m,{title:"기본 사용",code:"<Radio checked={false} onPress={() => {}} />"}),e.createElement(m,{title:"라벨과 함께 사용",code:`<Radio
  checked={true}
  label="옵션 텍스트"
  sublabel="보조 설명"
  onPress={() => handleSelect()}
/>`}),e.createElement(m,{title:"라디오 그룹 패턴",code:`const [selected, setSelected] = useState(0);
const options = ['옵션 A', '옵션 B', '옵션 C'];

{options.map((opt, i) => (
  <Radio
    key={i}
    checked={selected === i}
    label={opt}
    onPress={() => setSelected(i)}
  />
))}`}),e.createElement(m,{title:"사이즈 변경",code:`<Radio checked size="small" label="작은 라디오" />
<Radio checked size="medium" label="중간 라디오" />`}),e.createElement(m,{title:"비활성화",code:'<Radio checked disabled label="비활성 라디오" />'})))};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: 'medium',
    label: '옵션 텍스트',
    sublabel: '보조 설명 텍스트',
    disabled: false,
    tight: false
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '모든 변형',
  render: () => <Section title="모든 변형" description="라디오 버튼의 모든 상태를 한눈에 확인할 수 있습니다.">
      <Row gap={spacing['3xlarge']} wrap align="flex-start">
        <Col gap={spacing.large}>
          <StateLabel>Small - 활성</StateLabel>
          <CompareGrid items={[{
          label: '미선택',
          content: <Radio checked={false} size="small" />
        }, {
          label: '선택',
          content: <Radio checked size="small" />
        }]} />
        </Col>
        <Col gap={spacing.large}>
          <StateLabel>Small - 비활성</StateLabel>
          <CompareGrid items={[{
          label: '미선택',
          content: <Radio checked={false} size="small" disabled />
        }, {
          label: '선택',
          content: <Radio checked size="small" disabled />
        }]} />
        </Col>
        <Col gap={spacing.large}>
          <StateLabel>Medium - 활성</StateLabel>
          <CompareGrid items={[{
          label: '미선택',
          content: <Radio checked={false} size="medium" />
        }, {
          label: '선택',
          content: <Radio checked size="medium" />
        }]} />
        </Col>
        <Col gap={spacing.large}>
          <StateLabel>Medium - 비활성</StateLabel>
          <CompareGrid items={[{
          label: '미선택',
          content: <Radio checked={false} size="medium" disabled />
        }, {
          label: '선택',
          content: <Radio checked size="medium" disabled />
        }]} />
        </Col>
      </Row>
    </Section>
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '라벨 조합',
  render: () => <Section title="라벨 조합" description="라벨, 보조 라벨, tight 모드 등 다양한 라벨 조합을 확인합니다.">
      <Col gap={spacing['2xlarge']}>
        <Col gap={spacing.small}>
          <StateLabel>라벨만</StateLabel>
          <Radio checked label="라벨만 있는 라디오" />
          <Radio checked={false} label="라벨만 있는 라디오" />
        </Col>

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>라벨 + 보조 라벨</StateLabel>
          <Radio checked label="메인 라벨" sublabel="보조 설명 텍스트가 여기에 표시됩니다" />
          <Radio checked={false} label="메인 라벨" sublabel="보조 설명 텍스트가 여기에 표시됩니다" />
        </Col>

        <Divider />

        <Col gap={spacing.small}>
          <StateLabel>Tight 모드</StateLabel>
          <View style={{
          maxWidth: 300
        }}>
            <Col gap={spacing.small}>
              <Radio checked label="좁은 간격" sublabel="tight 모드에서는 간격이 줄어듭니다" tight />
              <Radio checked={false} label="좁은 간격" sublabel="tight 모드에서는 간격이 줄어듭니다" tight />
            </Col>
          </View>
        </Col>
      </Col>
    </Section>
}`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '라디오 그룹',
  render: () => {
    const [selected, setSelected] = useState(0);
    const options = [{
      label: '이메일로 받기',
      sublabel: '등록된 이메일 주소로 알림을 발송합니다'
    }, {
      label: 'SMS로 받기',
      sublabel: '등록된 휴대폰 번호로 문자를 발송합니다'
    }, {
      label: '알림 받지 않기',
      sublabel: '모든 알림을 중지합니다'
    }];
    return <Section title="라디오 그룹" description="여러 옵션 중 하나를 선택하는 인터랙티브 예시입니다. 직접 클릭해 보세요.">
        <Col gap={spacing.xsmall}>
          {options.map((opt, i) => <Radio key={i} checked={selected === i} label={opt.label} sublabel={opt.sublabel} onPress={() => setSelected(i)} />)}
        </Col>
      </Section>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <Section title="디자인 스펙" description="디자이너를 위한 사이즈 및 컬러 토큰 명세입니다.">
      <Col gap={spacing['2xlarge']}>
        <SpecTable title="Small 사이즈" rows={[{
        label: '외곽 원 크기',
        value: '18px',
        token: '—'
      }, {
        label: '내부 원 크기',
        value: '8px',
        token: '—'
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
        label: '외곽 원 크기',
        value: '22px',
        token: '—'
      }, {
        label: '내부 원 크기',
        value: '10px',
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
        label: '선택 채움',
        value: mint[45],
        token: 'mint[45]'
      }, {
        label: '비활성 상태',
        value: coolNeutral[80],
        token: 'coolNeutral[80]'
      }]} />
      </Col>
    </Section>
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <Section title="사용 가이드" description="개발자를 위한 코드 사용 예시입니다.">
      <Col gap={spacing.large}>
        <CodeBlock title="기본 사용" code={\`<Radio checked={false} onPress={() => {}} />\`} />
        <CodeBlock title="라벨과 함께 사용" code={\`<Radio
  checked={true}
  label="옵션 텍스트"
  sublabel="보조 설명"
  onPress={() => handleSelect()}
/>\`} />
        <CodeBlock title="라디오 그룹 패턴" code={\`const [selected, setSelected] = useState(0);
const options = ['옵션 A', '옵션 B', '옵션 C'];

{options.map((opt, i) => (
  <Radio
    key={i}
    checked={selected === i}
    label={opt}
    onPress={() => setSelected(i)}
  />
))}\`} />
        <CodeBlock title="사이즈 변경" code={\`<Radio checked size="small" label="작은 라디오" />
<Radio checked size="medium" label="중간 라디오" />\`} />
        <CodeBlock title="비활성화" code={\`<Radio checked disabled label="비활성 라디오" />\`} />
      </Col>
    </Section>
}`,...E.parameters?.docs?.source}}};const U=["Playground","AllVariants","WithLabels","RadioGroup","DesignSpec","Usage"];export{S as AllVariants,f as DesignSpec,g as Playground,h as RadioGroup,E as Usage,k as WithLabels,U as __namedExportsOrder,O as default};
