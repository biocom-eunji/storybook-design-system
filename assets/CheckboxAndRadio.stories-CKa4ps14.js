import{R as e,V as r,s as q,r as f}from"./iframe-rdsxNJ7l.js";import{S as M,L as F,a as G}from"./index-CkrO8KnR.js";import{C as y}from"./Checkbox-CKzHbKi6.js";import{M as $,r as j,c as d,s as a,j as X,a as S,T as I,f as W,l as C,n as E}from"./theme-KAxj7l-q.js";import{S as T,a as c,c as K,D as N,C as J,R as z,b as p}from"./storyHelpers-D5HpvNsw.js";import{T as V}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";const Q={small:{outer:18,inner:8,gap:a.small,fontSize:S.label1.fontSize,subFontSize:S.label2.fontSize},medium:{outer:22,inner:10,gap:a.medium,fontSize:S.body2.fontSize,subFontSize:S.label1.fontSize}};function b({checked:l=!1,onPress:o,size:s="medium",label:u,sublabel:h,disabled:i=!1,tight:x=!1}){const m=Q[s],O=i?d.borderActive:l?d.borderFocus:d.borderActive,n=i?d.iconDisabled:d.backgroundBrand,g=i?d.textTertiary:d.textPrimary,_=i?d.textTertiary:d.textSecondary;return e.createElement($,{onPress:i?void 0:o,accessibilityRole:"radio",accessibilityState:{checked:l},accessibilityLabel:u,style:({pressed:A})=>[Y.root,{gap:u?m.gap:0,opacity:A&&!i?X.pressOpacity:1,paddingVertical:x?a.small:a.medium,paddingHorizontal:x?a.medium:0,backgroundColor:x?d.backgroundSecondary:"transparent",borderRadius:x?j.medium:0}]},e.createElement(r,{style:[Y.outer,{width:m.outer,height:m.outer,borderRadius:m.outer/2,borderWidth:l?0:1,borderColor:O,backgroundColor:l?n:"transparent"}]},l&&e.createElement(r,{style:{width:m.inner,height:m.inner,borderRadius:m.inner/2,backgroundColor:d.iconOnColor}})),u&&e.createElement(r,null,e.createElement(I,{style:{fontSize:m.fontSize,fontWeight:W.medium,color:g}},u),h&&e.createElement(I,{style:{fontSize:m.subFontSize,fontWeight:W.regular,color:_}},h)))}const Y=q.create({root:{flexDirection:"row",alignItems:"center"},outer:{alignItems:"center",justifyContent:"center"}});b.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},sublabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const t={KEY:{figma:"Line/Key Color",hex:C.Mono.mint[400]},N200:{figma:"Mono/Neutral-200",hex:C.Mono.neutral[200]},N300:{figma:"Mono/Neutral-300",hex:C.Mono.neutral[300]},WH:{figma:"WHBK/WH",hex:C.Mono.WH},ON_COLOR:{figma:"Icon/on Color",hex:d.iconOnColor},LINE2:{figma:"Line/Line 2",hex:C.Mono.neutral[200]}},D=({size:l,color:o,weight:s})=>e.createElement(M,{width:l,height:l,viewBox:"0 0 24 24",fill:"none"},e.createElement(G,{points:"20 6 9 17 4 12",stroke:o,strokeWidth:s,strokeLinecap:"round",strokeLinejoin:"round"})),U=({size:l,color:o,weight:s})=>e.createElement(M,{width:l,height:l,viewBox:"0 0 24 24",fill:"none"},e.createElement(F,{x1:5,y1:12,x2:19,y2:12,stroke:o,strokeWidth:s,strokeLinecap:"round"})),k=24,P=({state:l})=>{const o=l==="unselected"?t.N200.hex:t.KEY.hex,s=l==="multiple"?U:D;return e.createElement(r,{style:{width:k,height:k,borderRadius:8,backgroundColor:o,alignItems:"center",justifyContent:"center"}},e.createElement(s,{size:k*.7,color:t.ON_COLOR.hex,weight:E.bold}))},B=({state:l})=>{const o=l==="selected"?t.KEY.hex:t.N300.hex;return e.createElement(r,{style:{width:k,height:k,alignItems:"center",justifyContent:"center"}},e.createElement(D,{size:k,color:o,weight:E.medium}))},H=({state:l})=>{const o=l==="selected"?t.KEY.hex:t.LINE2.hex;return e.createElement(r,{style:{width:k,height:k,borderRadius:k/2,backgroundColor:t.WH.hex,borderColor:o,borderWidth:E.heavy}})},ne={title:"Input/Checkbox & Radio",parameters:{docs:{description:{component:"`Checkbox`(다중 선택)와 `Radio`(단일 선택) 선택 컨트롤. Figma `Check box, Radio` 페이지의 명세를 1:1 반영합니다."}}},tags:["autodocs"]},v={render:()=>{const[l,o]=f.useState(!0),[s,u]=f.useState(!1),[h,i]=f.useState("annual");return e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(T,{title:"인터랙티브 플레이그라운드",description:"Checkbox(다중 선택)와 Radio(단일 선택)를 실제로 클릭해 토글합니다."},e.createElement(z,{gap:a["3xlarge"],align:"flex-start"},e.createElement(p,{gap:a.medium},e.createElement(c,null,"Checkbox — 다중 선택"),e.createElement(y,{state:l?"checked":"unchecked",label:"이용약관에 동의합니다.",onPress:()=>o(!l)}),e.createElement(y,{state:s?"checked":"unchecked",label:"마케팅 수신 동의 (선택)",sublabel:"이벤트, 혜택 정보를 받아보실 수 있습니다.",onPress:()=>u(!s)})),e.createElement(p,{gap:a.medium},e.createElement(c,null,"Radio — 단일 선택"),e.createElement(b,{checked:h==="monthly",label:"월간 구독",onPress:()=>i("monthly")}),e.createElement(b,{checked:h==="annual",label:"연간 구독",sublabel:"2개월 무료",onPress:()=>i("annual")}),e.createElement(b,{checked:h==="lifetime",label:"평생 이용권",onPress:()=>i("lifetime")})))))}},R={name:"라벨 변형",render:()=>e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(T,{title:"라벨 변형",description:"라벨·서브라벨·볼드·아이콘만 등 다양한 라벨 조합을 확인합니다."},e.createElement(z,{gap:a["3xlarge"],align:"flex-start"},e.createElement(p,{gap:a["2xlarge"]},e.createElement(c,null,"Checkbox"),e.createElement(p,{gap:a.xsmall},e.createElement(c,null,"라벨만"),e.createElement(y,{state:"checked",label:"이용약관에 동의합니다."})),e.createElement(p,{gap:a.xsmall},e.createElement(c,null,"라벨 + 서브라벨"),e.createElement(y,{state:"checked",label:"마케팅 수신 동의",sublabel:"이벤트, 혜택 등의 정보를 받아보실 수 있습니다."})),e.createElement(p,{gap:a.xsmall},e.createElement(c,null,"볼드 라벨"),e.createElement(y,{state:"checked",label:"전체 동의",bold:!0})),e.createElement(p,{gap:a.xsmall},e.createElement(c,null,"아이콘만"),e.createElement(y,{state:"checked"}))),e.createElement(p,{gap:a["2xlarge"]},e.createElement(c,null,"Radio"),e.createElement(p,{gap:a.xsmall},e.createElement(c,null,"라벨만"),e.createElement(b,{checked:!0,label:"월간 구독"})),e.createElement(p,{gap:a.xsmall},e.createElement(c,null,"라벨 + 서브라벨"),e.createElement(b,{checked:!0,label:"연간 구독",sublabel:"2개월 무료"})),e.createElement(p,{gap:a.xsmall},e.createElement(c,null,"아이콘만"),e.createElement(b,{checked:!0}))))))},w={name:"인터랙티브 데모",render:()=>{const[l,o]=f.useState([{id:"terms",label:"이용약관 동의 (필수)",checked:!1},{id:"privacy",label:"개인정보 처리방침 동의 (필수)",checked:!1},{id:"marketing",label:"마케팅 수신 동의 (선택)",sublabel:"이벤트, 혜택 등의 정보를 받아보실 수 있습니다.",checked:!1}]),[s,u]=f.useState("standard"),h=l.every(n=>n.checked),i=l.some(n=>n.checked),x=h?"checked":i?"indeterminate":"unchecked",m=()=>{const n=!h;o(l.map(g=>({...g,checked:n})))},O=n=>{o(l.map(g=>g.id===n?{...g,checked:!g.checked}:g))};return e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(T,{title:"인터랙티브 데모",description:"전체 동의(indeterminate 상태) 패턴과 라디오 그룹 단일 선택 패턴을 함께 확인합니다."},e.createElement(z,{gap:a["3xlarge"],align:"flex-start"},e.createElement(r,{style:{maxWidth:400,gap:a.small}},e.createElement(c,null,"전체 선택 / 개별 선택 (Checkbox)"),e.createElement(y,{state:x,label:"전체 동의",bold:!0,onPress:m}),e.createElement(N,null),l.map(n=>e.createElement(y,{key:n.id,state:n.checked?"checked":"unchecked",label:n.label,sublabel:n.sublabel,onPress:()=>O(n.id)}))),e.createElement(r,{style:{maxWidth:320,gap:a.small}},e.createElement(c,null,"배송 방식 (Radio)"),e.createElement(b,{checked:s==="standard",label:"일반 배송",sublabel:"2-3일 소요",onPress:()=>u("standard")}),e.createElement(b,{checked:s==="express",label:"당일 배송",sublabel:"+ 3,000원",onPress:()=>u("express")}),e.createElement(b,{checked:s==="pickup",label:"매장 픽업",sublabel:"무료, 30분 후 수령",onPress:()=>u("pickup")})))))}},L={name:"디자인 스펙",render:()=>e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(T,{title:"디자인 스펙",description:"Figma Check box, Radio 페이지 1:1 매핑.",badge:"디자인"},e.createElement(r,{style:{gap:a.medium}},e.createElement(c,null,"A. Checkbox-box · 컨테이너 있는 체크박스 (다중 선택)"),e.createElement(K,{items:[{label:"selected",content:e.createElement(P,{state:"selected"})},{label:"selected multiple",content:e.createElement(P,{state:"multiple"})},{label:"unselected",content:e.createElement(P,{state:"unselected"})}]}),e.createElement(V,{title:"Checkbox-box 토큰 매트릭스",rows:[{property:"container 배경 (selected)",token:t.KEY.figma,value:t.KEY.hex,type:"color"},{property:"container 배경 (selected multiple)",token:t.KEY.figma,value:t.KEY.hex,type:"color"},{property:"container 배경 (unselected)",token:t.N200.figma,value:t.N200.hex,type:"color"},{property:"icon (selected)",token:"ic/Check-raw",value:"check icon",type:"size"},{property:"icon (selected multiple)",token:"ic/minus-raw",value:"minus icon",type:"size"},{property:"icon (unselected)",token:"ic/Check-raw",value:"check icon",type:"size"},{property:"icon color (전 상태 통일)",token:t.ON_COLOR.figma,value:t.ON_COLOR.hex,type:"color"},{property:"icon weight",token:"Line/Bold",value:`${E.bold}`,type:"size"}]})),e.createElement(N,null),e.createElement(r,{style:{gap:a.medium}},e.createElement(c,null,"B. Checkbox · 컨테이너 없는 체크박스 (리스트용)"),e.createElement(K,{items:[{label:"selected",content:e.createElement(B,{state:"selected"})},{label:"unselected",content:e.createElement(B,{state:"unselected"})}]}),e.createElement(V,{title:"Checkbox (icon-only) 토큰 매트릭스",rows:[{property:"icon (selected)",token:"ic/Check-raw",value:"check icon",type:"size"},{property:"icon (unselected)",token:"ic/Check-raw",value:"check icon",type:"size"},{property:"icon color (selected)",token:t.KEY.figma,value:t.KEY.hex,type:"color"},{property:"icon color (unselected)",token:t.N300.figma,value:t.N300.hex,type:"color"},{property:"icon weight",token:"Line/Medium",value:`${E.medium}`,type:"size"}]})),e.createElement(N,null),e.createElement(r,{style:{gap:a.medium}},e.createElement(c,null,"C. Radio-Btn · 단일 선택"),e.createElement(K,{items:[{label:"selected",content:e.createElement(H,{state:"selected"})},{label:"unselected",content:e.createElement(H,{state:"unselected"})}]}),e.createElement(V,{title:"Radio 토큰 매트릭스",rows:[{property:"container 배경 (selected)",token:t.WH.figma,value:t.WH.hex,type:"color"},{property:"container 배경 (unselected)",token:t.WH.figma,value:t.WH.hex,type:"color"},{property:"border color (selected)",token:t.KEY.figma,value:t.KEY.hex,type:"color"},{property:"border color (unselected)",token:t.LINE2.figma,value:t.LINE2.hex,type:"color"},{property:"border weight",token:"Line/Heavy",value:`${E.heavy}`,type:"size"}]})),e.createElement(N,null),e.createElement(J,{title:"컴포넌트 사용",code:`import { Checkbox } from '@/components/Checkbox';
import { Radio } from '@/components/Radio';

// Checkbox (다중 선택)
<Checkbox state="checked" label="동의" />
<Checkbox state="indeterminate" label="부분 동의" />
<Checkbox state="unchecked" label="미동의" />

// Radio (단일 선택)
<Radio checked label="선택됨" />
<Radio label="선택되지 않음" />`})))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [terms, setTerms] = useState(true);
    const [marketing, setMarketing] = useState(false);
    const [plan, setPlan] = useState<'monthly' | 'annual' | 'lifetime'>('annual');
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 플레이그라운드" description="Checkbox(다중 선택)와 Radio(단일 선택)를 실제로 클릭해 토글합니다.">
          <Row gap={spacing['3xlarge']} align="flex-start">
            <Col gap={spacing.medium}>
              <StateLabel>Checkbox — 다중 선택</StateLabel>
              <Checkbox state={terms ? 'checked' : 'unchecked'} label="이용약관에 동의합니다." onPress={() => setTerms(!terms)} />
              <Checkbox state={marketing ? 'checked' : 'unchecked'} label="마케팅 수신 동의 (선택)" sublabel="이벤트, 혜택 정보를 받아보실 수 있습니다." onPress={() => setMarketing(!marketing)} />
            </Col>

            <Col gap={spacing.medium}>
              <StateLabel>Radio — 단일 선택</StateLabel>
              <Radio checked={plan === 'monthly'} label="월간 구독" onPress={() => setPlan('monthly')} />
              <Radio checked={plan === 'annual'} label="연간 구독" sublabel="2개월 무료" onPress={() => setPlan('annual')} />
              <Radio checked={plan === 'lifetime'} label="평생 이용권" onPress={() => setPlan('lifetime')} />
            </Col>
          </Row>
        </Section>
      </View>;
  }
}`,...v.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '라벨 변형',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="라벨 변형" description="라벨·서브라벨·볼드·아이콘만 등 다양한 라벨 조합을 확인합니다.">
        <Row gap={spacing['3xlarge']} align="flex-start">
          <Col gap={spacing['2xlarge']}>
            <StateLabel>Checkbox</StateLabel>

            <Col gap={spacing.xsmall}>
              <StateLabel>라벨만</StateLabel>
              <Checkbox state="checked" label="이용약관에 동의합니다." />
            </Col>

            <Col gap={spacing.xsmall}>
              <StateLabel>라벨 + 서브라벨</StateLabel>
              <Checkbox state="checked" label="마케팅 수신 동의" sublabel="이벤트, 혜택 등의 정보를 받아보실 수 있습니다." />
            </Col>

            <Col gap={spacing.xsmall}>
              <StateLabel>볼드 라벨</StateLabel>
              <Checkbox state="checked" label="전체 동의" bold />
            </Col>

            <Col gap={spacing.xsmall}>
              <StateLabel>아이콘만</StateLabel>
              <Checkbox state="checked" />
            </Col>
          </Col>

          <Col gap={spacing['2xlarge']}>
            <StateLabel>Radio</StateLabel>

            <Col gap={spacing.xsmall}>
              <StateLabel>라벨만</StateLabel>
              <Radio checked label="월간 구독" />
            </Col>

            <Col gap={spacing.xsmall}>
              <StateLabel>라벨 + 서브라벨</StateLabel>
              <Radio checked label="연간 구독" sublabel="2개월 무료" />
            </Col>

            <Col gap={spacing.xsmall}>
              <StateLabel>아이콘만</StateLabel>
              <Radio checked />
            </Col>
          </Col>
        </Row>
      </Section>
    </View>
}`,...R.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [items, setItems] = useState([{
      id: 'terms',
      label: '이용약관 동의 (필수)',
      checked: false
    }, {
      id: 'privacy',
      label: '개인정보 처리방침 동의 (필수)',
      checked: false
    }, {
      id: 'marketing',
      label: '마케팅 수신 동의 (선택)',
      sublabel: '이벤트, 혜택 등의 정보를 받아보실 수 있습니다.',
      checked: false
    }]);
    const [delivery, setDelivery] = useState<'standard' | 'express' | 'pickup'>('standard');
    const allChecked = items.every(i => i.checked);
    const someChecked = items.some(i => i.checked);
    const allState: 'checked' | 'indeterminate' | 'unchecked' = allChecked ? 'checked' : someChecked ? 'indeterminate' : 'unchecked';
    const toggleAll = () => {
      const next = !allChecked;
      setItems(items.map(i => ({
        ...i,
        checked: next
      })));
    };
    const toggleItem = (id: string) => {
      setItems(items.map(i => i.id === id ? {
        ...i,
        checked: !i.checked
      } : i));
    };
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="전체 동의(indeterminate 상태) 패턴과 라디오 그룹 단일 선택 패턴을 함께 확인합니다.">
          <Row gap={spacing['3xlarge']} align="flex-start">
            <View style={{
            maxWidth: 400,
            gap: spacing.small
          }}>
              <StateLabel>전체 선택 / 개별 선택 (Checkbox)</StateLabel>
              <Checkbox state={allState} label="전체 동의" bold onPress={toggleAll} />
              <Divider />
              {items.map(item => <Checkbox key={item.id} state={item.checked ? 'checked' : 'unchecked'} label={item.label} sublabel={item.sublabel} onPress={() => toggleItem(item.id)} />)}
            </View>

            <View style={{
            maxWidth: 320,
            gap: spacing.small
          }}>
              <StateLabel>배송 방식 (Radio)</StateLabel>
              <Radio checked={delivery === 'standard'} label="일반 배송" sublabel="2-3일 소요" onPress={() => setDelivery('standard')} />
              <Radio checked={delivery === 'express'} label="당일 배송" sublabel="+ 3,000원" onPress={() => setDelivery('express')} />
              <Radio checked={delivery === 'pickup'} label="매장 픽업" sublabel="무료, 30분 후 수령" onPress={() => setDelivery('pickup')} />
            </View>
          </Row>
        </Section>
      </View>;
  }
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma Check box, Radio 페이지 1:1 매핑." badge="디자인">
        {/* ── A. Checkbox-box ── */}
        <View style={{
        gap: spacing.medium
      }}>
          <StateLabel>A. Checkbox-box · 컨테이너 있는 체크박스 (다중 선택)</StateLabel>
          <CompareGrid items={[{
          label: 'selected',
          content: <CheckboxBoxVisual state="selected" />
        }, {
          label: 'selected multiple',
          content: <CheckboxBoxVisual state="multiple" />
        }, {
          label: 'unselected',
          content: <CheckboxBoxVisual state="unselected" />
        }]} />
          <TokenSpecTable title="Checkbox-box 토큰 매트릭스" rows={[{
          property: 'container 배경 (selected)',
          token: TOKEN.KEY.figma,
          value: TOKEN.KEY.hex,
          type: 'color'
        }, {
          property: 'container 배경 (selected multiple)',
          token: TOKEN.KEY.figma,
          value: TOKEN.KEY.hex,
          type: 'color'
        }, {
          property: 'container 배경 (unselected)',
          token: TOKEN.N200.figma,
          value: TOKEN.N200.hex,
          type: 'color'
        }, {
          property: 'icon (selected)',
          token: 'ic/Check-raw',
          value: 'check icon',
          type: 'size'
        }, {
          property: 'icon (selected multiple)',
          token: 'ic/minus-raw',
          value: 'minus icon',
          type: 'size'
        }, {
          property: 'icon (unselected)',
          token: 'ic/Check-raw',
          value: 'check icon',
          type: 'size'
        }, {
          property: 'icon color (전 상태 통일)',
          token: TOKEN.ON_COLOR.figma,
          value: TOKEN.ON_COLOR.hex,
          type: 'color'
        }, {
          property: 'icon weight',
          token: 'Line/Bold',
          value: \`\${line.bold}\`,
          type: 'size'
        }]} />
        </View>

        <Divider />

        {/* ── B. Checkbox (icon-only) ── */}
        <View style={{
        gap: spacing.medium
      }}>
          <StateLabel>B. Checkbox · 컨테이너 없는 체크박스 (리스트용)</StateLabel>
          <CompareGrid items={[{
          label: 'selected',
          content: <CheckboxIconVisual state="selected" />
        }, {
          label: 'unselected',
          content: <CheckboxIconVisual state="unselected" />
        }]} />
          <TokenSpecTable title="Checkbox (icon-only) 토큰 매트릭스" rows={[{
          property: 'icon (selected)',
          token: 'ic/Check-raw',
          value: 'check icon',
          type: 'size'
        }, {
          property: 'icon (unselected)',
          token: 'ic/Check-raw',
          value: 'check icon',
          type: 'size'
        }, {
          property: 'icon color (selected)',
          token: TOKEN.KEY.figma,
          value: TOKEN.KEY.hex,
          type: 'color'
        }, {
          property: 'icon color (unselected)',
          token: TOKEN.N300.figma,
          value: TOKEN.N300.hex,
          type: 'color'
        }, {
          property: 'icon weight',
          token: 'Line/Medium',
          value: \`\${line.medium}\`,
          type: 'size'
        }]} />
        </View>

        <Divider />

        {/* ── C. Radio ── */}
        <View style={{
        gap: spacing.medium
      }}>
          <StateLabel>C. Radio-Btn · 단일 선택</StateLabel>
          <CompareGrid items={[{
          label: 'selected',
          content: <RadioVisual state="selected" />
        }, {
          label: 'unselected',
          content: <RadioVisual state="unselected" />
        }]} />
          <TokenSpecTable title="Radio 토큰 매트릭스" rows={[{
          property: 'container 배경 (selected)',
          token: TOKEN.WH.figma,
          value: TOKEN.WH.hex,
          type: 'color'
        }, {
          property: 'container 배경 (unselected)',
          token: TOKEN.WH.figma,
          value: TOKEN.WH.hex,
          type: 'color'
        }, {
          property: 'border color (selected)',
          token: TOKEN.KEY.figma,
          value: TOKEN.KEY.hex,
          type: 'color'
        }, {
          property: 'border color (unselected)',
          token: TOKEN.LINE2.figma,
          value: TOKEN.LINE2.hex,
          type: 'color'
        }, {
          property: 'border weight',
          token: 'Line/Heavy',
          value: \`\${line.heavy}\`,
          type: 'size'
        }]} />
        </View>

        <Divider />

        {/* ── 공통 사용 예시 코드 ── */}
        <CodeBlock title="컴포넌트 사용" code={\`import { Checkbox } from '@/components/Checkbox';
import { Radio } from '@/components/Radio';

// Checkbox (다중 선택)
<Checkbox state="checked" label="동의" />
<Checkbox state="indeterminate" label="부분 동의" />
<Checkbox state="unchecked" label="미동의" />

// Radio (단일 선택)
<Radio checked label="선택됨" />
<Radio label="선택되지 않음" />\`} />
      </Section>
    </View>
}`,...L.parameters?.docs?.source}}};const re=["Playground","LabelVariations","Interactive","DesignSpec"];export{L as DesignSpec,w as Interactive,R as LabelVariations,v as Playground,re as __namedExportsOrder,ne as default};
