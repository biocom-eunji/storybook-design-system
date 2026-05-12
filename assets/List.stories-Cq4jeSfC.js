import{R as e,V as o,r as u,s as _}from"./iframe-rdsxNJ7l.js";import{I as g}from"./Icon-DGfD0Qtj.js";import{M,T as y,c as t,s as r,f as B,a as l}from"./theme-KAxj7l-q.js";import{C as j}from"./Checkbox-CKzHbKi6.js";import{S as E}from"./Switch-CYXnwUe3.js";import{S as b,D as N,C as x}from"./storyHelpers-D5HpvNsw.js";import{T as H}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";function $({children:m,divider:d=!0,inset:s="none"}){const n=e.Children.toArray(m);return e.createElement(o,{accessibilityRole:"list"},n.map((p,c)=>e.createElement(e.Fragment,{key:c},p,d&&c<n.length-1&&e.createElement(o,{style:[a.divider,s==="leading"&&a.dividerInset]}))))}function q({title:m,description:d,leading:s,trailing:n,onPress:p,disabled:c=!1,selected:W=!1}){const V=!!p&&!c,D=d?64:48,S=e.createElement(o,{style:[a.itemRow,{minHeight:D},W&&a.itemSelected]},s&&e.createElement(o,{style:a.leadingSlot},s),e.createElement(o,{style:a.textSlot},e.createElement(y,{style:[a.titleText,c&&a.disabledText],numberOfLines:1},m),d&&e.createElement(y,{style:[a.descText,c&&a.disabledText],numberOfLines:2},d)),n&&e.createElement(o,{style:a.trailingSlot,onStartShouldSetResponder:()=>!0},n));return V?e.createElement(M,{onPress:p,disabled:c,accessibilityRole:"button",style:({pressed:h})=>[h&&a.itemPressed]},S):e.createElement(o,{accessibilityRole:"none"},S)}function F({title:m,description:d,leading:s,defaultExpanded:n=!1,expanded:p,onExpandedChange:c,children:W}){const[V,D]=u.useState(n),S=p!==void 0,h=S?p:V,A=()=>{S?c?.(!p):D(R=>!R)},O=d?64:48;return e.createElement(o,null,e.createElement(M,{onPress:A,accessibilityRole:"button",accessibilityState:{expanded:h},style:({pressed:R})=>[R&&a.itemPressed]},e.createElement(o,{style:[a.itemRow,{minHeight:O}]},s&&e.createElement(o,{style:a.leadingSlot},s),e.createElement(o,{style:a.textSlot},e.createElement(y,{style:a.titleText,numberOfLines:1},m),d&&e.createElement(y,{style:a.descText,numberOfLines:2},d)),e.createElement(o,{style:[a.expandIcon,h&&a.expandIconRotated]},e.createElement(g,{name:"caret-down",size:20,color:t.iconSecondary})))),h&&e.createElement(o,{style:a.expandedContent},W))}const i=Object.assign($,{Item:q,ExpandableItem:F}),U=40,a=_.create({itemRow:{flexDirection:"row",alignItems:"center",paddingHorizontal:r.large,paddingVertical:r.medium},itemPressed:{backgroundColor:t.backgroundSecondary},itemSelected:{backgroundColor:t.backgroundSecondary},leadingSlot:{marginRight:r.large,alignItems:"center",justifyContent:"center"},textSlot:{flex:1,justifyContent:"center",gap:2},titleText:{fontSize:l.body1.fontSize,lineHeight:l.body1.lineHeight,fontWeight:B.regular,color:t.textPrimary},descText:{fontSize:l.label1.fontSize,lineHeight:l.label1.lineHeight,fontWeight:B.regular,color:t.textSecondary},disabledText:{color:t.textTertiary},trailingSlot:{marginLeft:r.large,alignItems:"center",justifyContent:"center"},divider:{height:1,backgroundColor:t.borderDefault},dividerInset:{marginLeft:r.large+U},expandIcon:{marginLeft:r.small,transition:"transform 0.2s ease"},expandIconRotated:{transform:[{rotate:"180deg"}]},expandedContent:{paddingLeft:r.large,paddingRight:r.large,paddingBottom:r.medium}});$.__docgenInfo={description:"",methods:[],displayName:"ListRoot",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},divider:{required:!1,tsType:{name:"boolean"},description:"아이템 사이 구분선",defaultValue:{value:"true",computed:!1}},inset:{required:!1,tsType:{name:"union",raw:"'none' | 'leading'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'leading'"}]},description:"구분선 시작 위치",defaultValue:{value:"'none'",computed:!1}}}};const ie={title:"Data Display/List",tags:["autodocs"]},f={render:()=>e.createElement(o,{style:{maxWidth:375,borderWidth:1,borderColor:t.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(i,null,e.createElement(i.Item,{title:"프로필",trailing:e.createElement(g,{name:"caret-right",size:20,color:t.iconSecondary}),onPress:()=>{}}),e.createElement(i.Item,{title:"알림 설정",trailing:e.createElement(g,{name:"caret-right",size:20,color:t.iconSecondary}),onPress:()=>{}}),e.createElement(i.Item,{title:"개인정보 처리방침",trailing:e.createElement(g,{name:"caret-right",size:20,color:t.iconSecondary}),onPress:()=>{}}),e.createElement(i.Item,{title:"로그아웃",onPress:()=>{}})))},k={name:"Standard (텍스트만)",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(b,{title:"Standard List",description:"텍스트만 나열하는 가장 단순한 형태입니다."},e.createElement(o,{style:{maxWidth:375,borderWidth:1,borderColor:t.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(i,null,e.createElement(i.Item,{title:"식단 관리"}),e.createElement(i.Item,{title:"수면 관리"}),e.createElement(i.Item,{title:"운동 관리"})))))},L={name:"Two Line (제목 + 설명)",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(b,{title:"Two Line",description:"title + description 2줄 레이아웃입니다."},e.createElement(o,{style:{maxWidth:375,borderWidth:1,borderColor:t.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(i,null,e.createElement(i.Item,{title:"식단 기록",description:"오늘 먹은 음식을 기록하세요"}),e.createElement(i.Item,{title:"수면 리포트",description:"지난 7일간의 수면 패턴을 확인합니다"}),e.createElement(i.Item,{title:"운동 목표",description:"주간 운동 목표를 설정하고 달성률을 확인합니다"})))))},I={name:"Leading 아이콘",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(b,{title:"Leading 아이콘",description:"좌측에 아이콘이 포함된 리스트입니다."},e.createElement(o,{style:{maxWidth:375,borderWidth:1,borderColor:t.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(i,{inset:"leading"},e.createElement(i.Item,{leading:e.createElement(g,{name:"bell",size:24,color:t.iconPrimary}),title:"알림",description:"푸시 알림 설정을 관리합니다",trailing:e.createElement(g,{name:"caret-right",size:20,color:t.iconSecondary}),onPress:()=>{}}),e.createElement(i.Item,{leading:e.createElement(g,{name:"caret-right",size:24,color:t.iconPrimary}),title:"설정",description:"앱 환경설정을 변경합니다",trailing:e.createElement(g,{name:"caret-right",size:20,color:t.iconSecondary}),onPress:()=>{}}),e.createElement(i.Item,{leading:e.createElement(g,{name:"share-network",size:24,color:t.iconPrimary}),title:"공유",trailing:e.createElement(g,{name:"caret-right",size:20,color:t.iconSecondary}),onPress:()=>{}})))))},w={name:"Switch (설정 화면)",render:()=>{const[m,d]=u.useState(!0),[s,n]=u.useState(!1),[p,c]=u.useState(!1);return e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(b,{title:"Switch (설정 화면)",description:"trailing에 Switch를 배치한 설정 화면 패턴입니다."},e.createElement(o,{style:{maxWidth:375,borderWidth:1,borderColor:t.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(i,null,e.createElement(i.Item,{title:"푸시 알림",description:"건강 리포트, 식단 알림",trailing:e.createElement(E,{checked:m,onPress:()=>d(!m)})}),e.createElement(i.Item,{title:"다크 모드",description:"준비 중 (v2 예정)",trailing:e.createElement(E,{checked:s,onPress:()=>n(!s),disabled:!0}),disabled:!0}),e.createElement(i.Item,{title:"생체 인증",description:"Face ID / 지문으로 빠른 로그인",trailing:e.createElement(E,{checked:p,onPress:()=>c(!p)})})))))}},C={name:"Checkbox (선택 리스트)",render:()=>{const[m,d]=u.useState([{key:"diet",label:"식단",checked:!0},{key:"sleep",label:"수면",checked:!1},{key:"exercise",label:"운동",checked:!1},{key:"water",label:"수분",checked:!0}]),s=n=>{d(p=>p.map(c=>c.key===n?{...c,checked:!c.checked}:c))};return e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(b,{title:"Checkbox (선택 리스트)",description:"trailing에 Checkbox를 배치한 복수 선택 리스트입니다."},e.createElement(o,{style:{maxWidth:375,borderWidth:1,borderColor:t.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(i,null,m.map(n=>e.createElement(i.Item,{key:n.key,title:n.label,trailing:e.createElement(j,{state:n.checked?"checked":"unchecked",onPress:()=>s(n.key),size:"small"}),onPress:()=>s(n.key)}))))))}},z={name:"Expandable (아코디언)",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(b,{title:"Expandable (아코디언)",description:"클릭 시 하위 콘텐츠가 토글로 펼쳐집니다."},e.createElement(o,{style:{maxWidth:375,borderWidth:1,borderColor:t.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(i,null,e.createElement(i.ExpandableItem,{title:"자주 묻는 질문",defaultExpanded:!0},e.createElement(y,{style:{fontSize:l.body2.fontSize,color:t.textSecondary,lineHeight:l.body2.lineHeight}},"바이오컴은 AI 기반 헬스케어 셀프케어 앱으로, 식단·수면·운동·영양제 데이터를 통합 분석하여 개인 맞춤형 건강 관리를 제공합니다.")),e.createElement(i.ExpandableItem,{title:"데이터는 어떻게 보호되나요?"},e.createElement(y,{style:{fontSize:l.body2.fontSize,color:t.textSecondary,lineHeight:l.body2.lineHeight}},"모든 건강 데이터는 암호화되어 저장되며, 사용자 동의 없이 제3자에게 제공되지 않습니다.")),e.createElement(i.ExpandableItem,{title:"프리미엄 플랜은 무엇인가요?"},e.createElement(y,{style:{fontSize:l.body2.fontSize,color:t.textSecondary,lineHeight:l.body2.lineHeight}},"프리미엄 플랜은 AI 리포트, 상세 분석, 전문가 상담 등 추가 기능을 제공합니다. 월 9,900원에 이용 가능합니다."))))))},P={name:"설정 화면 (조합)",render:()=>{const[m,d]=u.useState(!0),[s,n]=u.useState(!1);return e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(b,{title:"설정 화면 (조합)",description:"Standard, Control, Expandable을 섞어서 구성한 실전 예시입니다."},e.createElement(o,{style:{maxWidth:375,borderWidth:1,borderColor:t.borderDefault,borderRadius:r.small,overflow:"hidden",backgroundColor:t.backgroundSecondary}},e.createElement(y,{style:{fontSize:l.label2.fontSize,fontWeight:"600",color:t.textSecondary,paddingHorizontal:r.large,paddingTop:r.large,paddingBottom:r.small}},"계정"),e.createElement(o,{style:{backgroundColor:t.backgroundPrimary}},e.createElement(i,null,e.createElement(i.Item,{title:"프로필",trailing:e.createElement(g,{name:"caret-right",size:20,color:t.iconSecondary}),onPress:()=>{}}),e.createElement(i.Item,{title:"알림",trailing:e.createElement(E,{checked:m,onPress:()=>d(!m)})}),e.createElement(i.Item,{title:"생체 인증",trailing:e.createElement(E,{checked:s,onPress:()=>n(!s)})}))),e.createElement(y,{style:{fontSize:l.label2.fontSize,fontWeight:"600",color:t.textSecondary,paddingHorizontal:r.large,paddingTop:r.xlarge,paddingBottom:r.small}},"정보"),e.createElement(o,{style:{backgroundColor:t.backgroundPrimary}},e.createElement(i,null,e.createElement(i.Item,{title:"이용약관",trailing:e.createElement(g,{name:"caret-right",size:20,color:t.iconSecondary}),onPress:()=>{}}),e.createElement(i.Item,{title:"개인정보 처리방침",trailing:e.createElement(g,{name:"caret-right",size:20,color:t.iconSecondary}),onPress:()=>{}}),e.createElement(i.ExpandableItem,{title:"앱 버전"},e.createElement(y,{style:{fontSize:l.body2.fontSize,color:t.textSecondary}},"v1.4.0 (Build 727cfb9)")))),e.createElement(o,{style:{height:r.large}}))))}},T={name:"디자인 스펙",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(b,{title:"디자인 스펙",description:"List 컴포넌트 스펙입니다.",badge:"디자인"},e.createElement(H,{title:"레이아웃",rows:[{property:"최소 높이 (1줄)",token:"—",value:48,type:"size"},{property:"최소 높이 (2줄)",token:"—",value:64,type:"size"},{property:"좌우 패딩",token:"spacing/large",value:r.large,type:"size"},{property:"Leading-Title gap",token:"spacing/large",value:r.large,type:"size"},{property:"구분선",token:"color/border/default",value:t.borderDefault,type:"color"}]}),e.createElement(N,null),e.createElement(H,{title:"타이포그래피",rows:[{property:"Title",token:"Body 1",value:`${l.body1.fontSize}px / ${l.body1.lineHeight}px / Regular`,type:"typography"},{property:"Description",token:"Label 1",value:`${l.label1.fontSize}px / ${l.label1.lineHeight}px / Regular`,type:"typography"}]}),e.createElement(N,null),e.createElement(H,{title:"색상",rows:[{property:"Title 텍스트",token:"color/text/primary",value:t.textPrimary,type:"color"},{property:"Description 텍스트",token:"color/text/secondary",value:t.textSecondary,type:"color"},{property:"Disabled 텍스트",token:"color/text/tertiary",value:t.textTertiary,type:"color"},{property:"Pressed 배경",token:"color/background/secondary",value:t.backgroundSecondary,type:"color"},{property:"Selected 배경",token:"color/background/secondary",value:t.backgroundSecondary,type:"color"}]})))},v={name:"사용 가이드",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(b,{title:"사용 가이드",description:"개발자를 위한 List 사용 예시입니다.",badge:"개발"},e.createElement(x,{title:"Import",code:"import { List } from '@design-system/components/List';"}),e.createElement(x,{title:"Standard List",code:`<List>
  <List.Item title="프로필" onPress={goProfile} />
  <List.Item title="설정" onPress={goSettings} />
</List>`}),e.createElement(x,{title:"Control List (Switch)",code:`<List>
  <List.Item
    title="푸시 알림"
    description="건강 리포트, 식단 알림"
    trailing={
      <Switch checked={notifications} onPress={toggleNotifications} />
    }
  />
</List>`}),e.createElement(x,{title:"Expandable List",code:`<List>
  <List.ExpandableItem title="자주 묻는 질문" defaultExpanded>
    <Text>답변 내용...</Text>
  </List.ExpandableItem>
</List>`}),e.createElement(x,{title:"혼합 사용",code:`<List>
  <List.Item title="프로필" trailing={<Icon name="caret-right" />} onPress={go} />
  <List.Item title="알림" trailing={<Switch checked={on} onPress={toggle} />} />
  <List.ExpandableItem title="앱 버전">
    <Text>v1.4.0</Text>
  </List.ExpandableItem>
</List>`})))};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    maxWidth: 375,
    borderWidth: 1,
    borderColor: semanticColor.borderDefault,
    borderRadius: spacing.small,
    overflow: 'hidden'
  }}>
      <List>
        <List.Item title="프로필" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
        <List.Item title="알림 설정" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
        <List.Item title="개인정보 처리방침" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
        <List.Item title="로그아웃" onPress={() => {}} />
      </List>
    </View>
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Standard (텍스트만)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Standard List" description="텍스트만 나열하는 가장 단순한 형태입니다.">
        <View style={{
        maxWidth: 375,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: spacing.small,
        overflow: 'hidden'
      }}>
          <List>
            <List.Item title="식단 관리" />
            <List.Item title="수면 관리" />
            <List.Item title="운동 관리" />
          </List>
        </View>
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Two Line (제목 + 설명)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Two Line" description="title + description 2줄 레이아웃입니다.">
        <View style={{
        maxWidth: 375,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: spacing.small,
        overflow: 'hidden'
      }}>
          <List>
            <List.Item title="식단 기록" description="오늘 먹은 음식을 기록하세요" />
            <List.Item title="수면 리포트" description="지난 7일간의 수면 패턴을 확인합니다" />
            <List.Item title="운동 목표" description="주간 운동 목표를 설정하고 달성률을 확인합니다" />
          </List>
        </View>
      </Section>
    </View>
}`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Leading 아이콘',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Leading 아이콘" description="좌측에 아이콘이 포함된 리스트입니다.">
        <View style={{
        maxWidth: 375,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: spacing.small,
        overflow: 'hidden'
      }}>
          <List inset="leading">
            <List.Item leading={<Icon name="bell" size={24} color={semanticColor.iconPrimary} />} title="알림" description="푸시 알림 설정을 관리합니다" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
            <List.Item leading={<Icon name="caret-right" size={24} color={semanticColor.iconPrimary} />} title="설정" description="앱 환경설정을 변경합니다" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
            <List.Item leading={<Icon name="share-network" size={24} color={semanticColor.iconPrimary} />} title="공유" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
          </List>
        </View>
      </Section>
    </View>
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Switch (설정 화면)',
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [biometric, setBiometric] = useState(false);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="Switch (설정 화면)" description="trailing에 Switch를 배치한 설정 화면 패턴입니다.">
          <View style={{
          maxWidth: 375,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          borderRadius: spacing.small,
          overflow: 'hidden'
        }}>
            <List>
              <List.Item title="푸시 알림" description="건강 리포트, 식단 알림" trailing={<Switch checked={notifications} onPress={() => setNotifications(!notifications)} />} />
              <List.Item title="다크 모드" description="준비 중 (v2 예정)" trailing={<Switch checked={darkMode} onPress={() => setDarkMode(!darkMode)} disabled />} disabled />
              <List.Item title="생체 인증" description="Face ID / 지문으로 빠른 로그인" trailing={<Switch checked={biometric} onPress={() => setBiometric(!biometric)} />} />
            </List>
          </View>
        </Section>
      </View>;
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Checkbox (선택 리스트)',
  render: () => {
    const [items, setItems] = useState([{
      key: 'diet',
      label: '식단',
      checked: true
    }, {
      key: 'sleep',
      label: '수면',
      checked: false
    }, {
      key: 'exercise',
      label: '운동',
      checked: false
    }, {
      key: 'water',
      label: '수분',
      checked: true
    }]);
    const toggle = (key: string) => {
      setItems(prev => prev.map(item => item.key === key ? {
        ...item,
        checked: !item.checked
      } : item));
    };
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="Checkbox (선택 리스트)" description="trailing에 Checkbox를 배치한 복수 선택 리스트입니다.">
          <View style={{
          maxWidth: 375,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          borderRadius: spacing.small,
          overflow: 'hidden'
        }}>
            <List>
              {items.map(item => <List.Item key={item.key} title={item.label} trailing={<Checkbox state={item.checked ? 'checked' : 'unchecked'} onPress={() => toggle(item.key)} size="small" />} onPress={() => toggle(item.key)} />)}
            </List>
          </View>
        </Section>
      </View>;
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Expandable (아코디언)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Expandable (아코디언)" description="클릭 시 하위 콘텐츠가 토글로 펼쳐집니다.">
        <View style={{
        maxWidth: 375,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: spacing.small,
        overflow: 'hidden'
      }}>
          <List>
            <List.ExpandableItem title="자주 묻는 질문" defaultExpanded>
              <Text style={{
              fontSize: textStyle.body2.fontSize,
              color: semanticColor.textSecondary,
              lineHeight: textStyle.body2.lineHeight
            }}>
                바이오컴은 AI 기반 헬스케어 셀프케어 앱으로, 식단·수면·운동·영양제 데이터를 통합 분석하여 개인 맞춤형 건강 관리를 제공합니다.
              </Text>
            </List.ExpandableItem>
            <List.ExpandableItem title="데이터는 어떻게 보호되나요?">
              <Text style={{
              fontSize: textStyle.body2.fontSize,
              color: semanticColor.textSecondary,
              lineHeight: textStyle.body2.lineHeight
            }}>
                모든 건강 데이터는 암호화되어 저장되며, 사용자 동의 없이 제3자에게 제공되지 않습니다.
              </Text>
            </List.ExpandableItem>
            <List.ExpandableItem title="프리미엄 플랜은 무엇인가요?">
              <Text style={{
              fontSize: textStyle.body2.fontSize,
              color: semanticColor.textSecondary,
              lineHeight: textStyle.body2.lineHeight
            }}>
                프리미엄 플랜은 AI 리포트, 상세 분석, 전문가 상담 등 추가 기능을 제공합니다. 월 9,900원에 이용 가능합니다.
              </Text>
            </List.ExpandableItem>
          </List>
        </View>
      </Section>
    </View>
}`,...z.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '설정 화면 (조합)',
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [biometric, setBiometric] = useState(false);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="설정 화면 (조합)" description="Standard, Control, Expandable을 섞어서 구성한 실전 예시입니다.">
          <View style={{
          maxWidth: 375,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          borderRadius: spacing.small,
          overflow: 'hidden',
          backgroundColor: semanticColor.backgroundSecondary
        }}>
            {/* 계정 섹션 */}
            <Text style={{
            fontSize: textStyle.label2.fontSize,
            fontWeight: '600',
            color: semanticColor.textSecondary,
            paddingHorizontal: spacing.large,
            paddingTop: spacing.large,
            paddingBottom: spacing.small
          }}>
              계정
            </Text>
            <View style={{
            backgroundColor: semanticColor.backgroundPrimary
          }}>
              <List>
                <List.Item title="프로필" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
                <List.Item title="알림" trailing={<Switch checked={notifications} onPress={() => setNotifications(!notifications)} />} />
                <List.Item title="생체 인증" trailing={<Switch checked={biometric} onPress={() => setBiometric(!biometric)} />} />
              </List>
            </View>

            {/* 정보 섹션 */}
            <Text style={{
            fontSize: textStyle.label2.fontSize,
            fontWeight: '600',
            color: semanticColor.textSecondary,
            paddingHorizontal: spacing.large,
            paddingTop: spacing.xlarge,
            paddingBottom: spacing.small
          }}>
              정보
            </Text>
            <View style={{
            backgroundColor: semanticColor.backgroundPrimary
          }}>
              <List>
                <List.Item title="이용약관" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
                <List.Item title="개인정보 처리방침" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
                <List.ExpandableItem title="앱 버전">
                  <Text style={{
                  fontSize: textStyle.body2.fontSize,
                  color: semanticColor.textSecondary
                }}>v1.4.0 (Build 727cfb9)</Text>
                </List.ExpandableItem>
              </List>
            </View>

            <View style={{
            height: spacing.large
          }} />
          </View>
        </Section>
      </View>;
  }
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="List 컴포넌트 스펙입니다." badge="디자인">
        <TokenSpecTable title="레이아웃" rows={[{
        property: '최소 높이 (1줄)',
        token: '—',
        value: 48,
        type: 'size'
      }, {
        property: '최소 높이 (2줄)',
        token: '—',
        value: 64,
        type: 'size'
      }, {
        property: '좌우 패딩',
        token: 'spacing/large',
        value: spacing.large,
        type: 'size'
      }, {
        property: 'Leading-Title gap',
        token: 'spacing/large',
        value: spacing.large,
        type: 'size'
      }, {
        property: '구분선',
        token: 'color/border/default',
        value: semanticColor.borderDefault,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="타이포그래피" rows={[{
        property: 'Title',
        token: 'Body 1',
        value: \`\${textStyle.body1.fontSize}px / \${textStyle.body1.lineHeight}px / Regular\`,
        type: 'typography'
      }, {
        property: 'Description',
        token: 'Label 1',
        value: \`\${textStyle.label1.fontSize}px / \${textStyle.label1.lineHeight}px / Regular\`,
        type: 'typography'
      }]} />

        <Divider />

        <TokenSpecTable title="색상" rows={[{
        property: 'Title 텍스트',
        token: 'color/text/primary',
        value: semanticColor.textPrimary,
        type: 'color'
      }, {
        property: 'Description 텍스트',
        token: 'color/text/secondary',
        value: semanticColor.textSecondary,
        type: 'color'
      }, {
        property: 'Disabled 텍스트',
        token: 'color/text/tertiary',
        value: semanticColor.textTertiary,
        type: 'color'
      }, {
        property: 'Pressed 배경',
        token: 'color/background/secondary',
        value: semanticColor.backgroundSecondary,
        type: 'color'
      }, {
        property: 'Selected 배경',
        token: 'color/background/secondary',
        value: semanticColor.backgroundSecondary,
        type: 'color'
      }]} />
      </Section>
    </View>
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 List 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { List } from '@design-system/components/List';\`} />

        <CodeBlock title="Standard List" code={\`<List>
  <List.Item title="프로필" onPress={goProfile} />
  <List.Item title="설정" onPress={goSettings} />
</List>\`} />

        <CodeBlock title="Control List (Switch)" code={\`<List>
  <List.Item
    title="푸시 알림"
    description="건강 리포트, 식단 알림"
    trailing={
      <Switch checked={notifications} onPress={toggleNotifications} />
    }
  />
</List>\`} />

        <CodeBlock title="Expandable List" code={\`<List>
  <List.ExpandableItem title="자주 묻는 질문" defaultExpanded>
    <Text>답변 내용...</Text>
  </List.ExpandableItem>
</List>\`} />

        <CodeBlock title="혼합 사용" code={\`<List>
  <List.Item title="프로필" trailing={<Icon name="caret-right" />} onPress={go} />
  <List.Item title="알림" trailing={<Switch checked={on} onPress={toggle} />} />
  <List.ExpandableItem title="앱 버전">
    <Text>v1.4.0</Text>
  </List.ExpandableItem>
</List>\`} />
      </Section>
    </View>
}`,...v.parameters?.docs?.source}}};const oe=["Playground","Standard","TwoLine","WithLeadingIcon","WithSwitch","WithCheckbox","Expandable","SettingsScreen","DesignSpec","Usage"];export{T as DesignSpec,z as Expandable,f as Playground,P as SettingsScreen,k as Standard,L as TwoLine,v as Usage,C as WithCheckbox,I as WithLeadingIcon,w as WithSwitch,oe as __namedExportsOrder,ie as default};
