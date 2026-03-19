import{r as C,R as e,V as l,s as he}from"./iframe-CExKz_YG.js";import{I as xe}from"./Icon-CTnW1Y2_.js";import{T as f,M,s as t,d as i,a as b,f as A,r as Y,c as d,m as q,e as O}from"./theme-DRANkRo4.js";import{T as Ee}from"./index-w3bVWpth.js";import{S as m,C as a,a as o,b as T,D as X,d as u}from"./storyHelpers-Cr27IWoZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPDVw3Nd.js";const Te=20,Ce=t["4xlarge"],we={clear:{name:"x-circle",color:d[80]},error:{name:"warning",color:O[70]},success:{name:"check-circle",color:q[45]},search:{name:"magnifying-glass",color:d[50]}};function r({label:n,placeholder:w="텍스트를 입력해 주세요.",value:p,onChangeText:y,helperText:h,errorMessage:g,successMessage:x,maxCharCount:S,disabled:E=!1,multiline:c=!1,minHeight:ee=100,trailingIcon:te,trailingText:P,onTrailingTextPress:le,onClear:ae,keyboardType:re,secureTextEntry:ne,autoCapitalize:oe,textInputProps:ie}){const[B,K]=C.useState(!1),[se,U]=C.useState(p??""),H=C.useRef(null);e.useEffect(()=>{p!==void 0&&U(p)},[p]);const _=p??se,D=_?.length??0,ce=D>0,$=g?"error":x?"success":"default",de=S!=null&&D>S,ue=v=>{U(v),y?.(v)},pe=E?i.borderDisabled:$==="error"?i.borderError:B?i.borderFocus:ce?i.borderActive:i.borderDefault,me={...s.container,borderColor:pe,backgroundColor:E?i.backgroundSecondary:i.backgroundPrimary,paddingVertical:c?t.medium:0,minHeight:c?ee:Ce,flexDirection:c?"column":"row",alignItems:c?"stretch":"center"},ge={...s.input,color:E?i.textTertiary:i.textPrimary,paddingVertical:c?0:t.medium,textAlignVertical:c?"top":"center"},Q=g||x||h,be=g?i.textError:x?i.textSuccess:i.textSecondary,R=te??($==="error"?"error":void 0),G=()=>{if(!R)return null;const{name:v,color:ye}=we[R],J=e.createElement(xe,{name:v,size:Te,color:ye});return R==="clear"?e.createElement(M,{onPress:ae,hitSlop:8,style:s.trailingSlot},J):e.createElement(l,{style:s.trailingSlot},J)},j=()=>P?e.createElement(M,{onPress:le,hitSlop:8,style:s.trailingSlot},e.createElement(f,{style:[s.trailingTextLabel,B&&s.trailingTextFocused]},P)):null,Z=()=>S==null?null:e.createElement(f,{style:[s.charCounter,de&&s.charCounterError]},D,"/",S);return e.createElement(l,{style:s.root},n&&e.createElement(f,{style:s.label},n),e.createElement(M,{onPress:()=>{E||H.current?.focus()},style:me},e.createElement(Ee,{ref:H,value:_,onChangeText:ue,placeholder:w,placeholderTextColor:i.textPlaceholder,editable:!E,multiline:c,keyboardType:re,secureTextEntry:ne,autoCapitalize:oe,accessibilityLabel:n,onFocus:()=>K(!0),onBlur:()=>K(!1),style:ge,...ie}),!c&&G(),!c&&j(),c&&e.createElement(l,{style:s.multilineFooter},Z()??e.createElement(l,null),e.createElement(l,{style:s.multilineTrailing},G(),j()))),e.createElement(l,{style:s.bottomRow},Q?e.createElement(f,{style:[s.bottomMessage,{color:be}]},Q):e.createElement(l,null),!c&&Z()))}const s=he.create({root:{gap:6},label:{fontSize:b.small,fontWeight:A.medium,color:d[30]},container:{borderWidth:1,borderRadius:Y.medium,paddingHorizontal:t.large},input:{flex:1,fontSize:b.medium,fontWeight:A.regular,outlineStyle:"none"},trailingSlot:{marginLeft:t.small},trailingTextLabel:{fontSize:b.small,fontWeight:A.semibold,color:i.textSecondary},trailingTextFocused:{color:i.textBrand},multilineFooter:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:t.small},multilineTrailing:{flexDirection:"row",alignItems:"center"},bottomRow:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},bottomMessage:{fontSize:b.small,flex:1},charCounter:{fontSize:b.small,color:i.textPrimary},charCounterError:{color:i.textError}});r.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:"라벨 텍스트"},placeholder:{required:!1,tsType:{name:"string"},description:"플레이스홀더",defaultValue:{value:"'텍스트를 입력해 주세요.'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"입력값"},onChangeText:{required:!1,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:"값 변경 콜백"},helperText:{required:!1,tsType:{name:"string"},description:"하단 도움말 텍스트"},errorMessage:{required:!1,tsType:{name:"string"},description:"에러 메시지 (표시되면 error 상태 자동 적용)"},successMessage:{required:!1,tsType:{name:"string"},description:"성공 메시지 (표시되면 success 상태 자동 적용)"},maxCharCount:{required:!1,tsType:{name:"number"},description:"최대 글자 수 카운터"},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화",defaultValue:{value:"false",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"Textarea 모드 (여러 줄 입력)",defaultValue:{value:"false",computed:!1}},minHeight:{required:!1,tsType:{name:"number"},description:"Textarea 최소 높이",defaultValue:{value:"100",computed:!1}},trailingIcon:{required:!1,tsType:{name:"union",raw:"'clear' | 'error' | 'success' | 'search'",elements:[{name:"literal",value:"'clear'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'search'"}]},description:"오른쪽 trailing 아이콘"},trailingText:{required:!1,tsType:{name:"string"},description:"오른쪽 trailing 텍스트 링크"},onTrailingTextPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"trailing 텍스트 클릭 콜백"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"지우기 버튼 클릭 콜백"},keyboardType:{required:!1,tsType:{name:"KeyboardTypeOptions"},description:"키보드 타입 (숫자 패드, 이메일 등)"},secureTextEntry:{required:!1,tsType:{name:"boolean"},description:"비밀번호 마스킹"},autoCapitalize:{required:!1,tsType:{name:"union",raw:"'none' | 'sentences' | 'words' | 'characters'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sentences'"},{name:"literal",value:"'words'"},{name:"literal",value:"'characters'"}]},description:"자동 대문자 변환"},textInputProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TextInputProps"},{name:"union",raw:"'value' | 'onChangeText' | 'placeholder' | 'editable' | 'multiline' | 'keyboardType' | 'secureTextEntry' | 'autoCapitalize'",elements:[{name:"literal",value:"'value'"},{name:"literal",value:"'onChangeText'"},{name:"literal",value:"'placeholder'"},{name:"literal",value:"'editable'"},{name:"literal",value:"'multiline'"},{name:"literal",value:"'keyboardType'"},{name:"literal",value:"'secureTextEntry'"},{name:"literal",value:"'autoCapitalize'"}]}],raw:"Omit<TextInputProps, 'value' | 'onChangeText' | 'placeholder' | 'editable' | 'multiline' | 'keyboardType' | 'secureTextEntry' | 'autoCapitalize'>"},description:"추가 TextInput props"}}};const Le={title:"Input/InputField",component:r,argTypes:{label:{control:"text",description:"라벨"},placeholder:{control:"text",description:"플레이스홀더"},value:{control:"text",description:"입력값"},helperText:{control:"text",description:"도움말"},errorMessage:{control:"text",description:"에러 메시지"},successMessage:{control:"text",description:"성공 메시지"},maxCharCount:{control:"number",description:"최대 글자 수"},disabled:{control:"boolean",description:"비활성화"},multiline:{control:"boolean",description:"Textarea 모드"},trailingIcon:{control:"select",options:[void 0,"clear","error","success","search"],description:"우측 아이콘"},trailingText:{control:"text",description:"우측 텍스트 링크"},keyboardType:{control:"select",options:["default","email-address","numeric","phone-pad","decimal-pad","number-pad","url"],description:"키보드 타입"},secureTextEntry:{control:"boolean",description:"비밀번호 마스킹"},autoCapitalize:{control:"select",options:["none","sentences","words","characters"],description:"자동 대문자"}},tags:["autodocs"],decorators:[n=>e.createElement(l,{style:{maxWidth:360,padding:t.large}},e.createElement(n,null))]},I={args:{label:"주제",placeholder:"메시지를 입력해 주세요.",helperText:"메시지에 마침표를 찍어요.",maxCharCount:2e3}},k={name:"모든 상태",decorators:[n=>e.createElement(l,{style:{maxWidth:800,padding:t.large}},e.createElement(n,null))],render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"모든 상태",description:"기획자와 디자이너가 한눈에 확인할 수 있도록 InputField의 모든 상태를 정리했습니다."},e.createElement(l,{style:{flexDirection:"row",flexWrap:"wrap",gap:t["2xlarge"]}},e.createElement(a,{gap:t.small},e.createElement(o,null,"비활성 (INACTIVE)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",placeholder:"메시지를 입력해 주세요.",helperText:"메시지에 마침표를 찍어요.",maxCharCount:2e3}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"입력됨 (ACTIVE)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",value:"입력된 내용",helperText:"메시지에 마침표를 찍어요.",maxCharCount:2e3}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"포커스 (FOCUS)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",placeholder:"메시지를 입력해 주세요.",helperText:"포커스 상태는 컴포넌트 내부에서 자동 관리됩니다. 입력 필드를 클릭하면 민트색 테두리가 나타납니다.",maxCharCount:2e3}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"에러 (ERROR)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",value:"잘못된 입력",errorMessage:"에러 메시지를 나타내요.",trailingIcon:"error"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"성공 (SUCCESS)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",value:"올바른 입력",successMessage:"성공 메시지를 나타내요.",trailingIcon:"success"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"비활성화 (DISABLED)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",placeholder:"입력할 수 없습니다.",helperText:"비활성화된 입력 필드입니다.",disabled:!0}))))))},V={name:"후행 요소",decorators:[n=>e.createElement(l,{style:{maxWidth:800,padding:t.large}},e.createElement(n,null))],render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"후행 요소",description:"입력 필드 오른쪽에 배치 가능한 아이콘과 텍스트 조합입니다."},e.createElement(l,{style:{flexDirection:"row",flexWrap:"wrap",gap:t["2xlarge"]}},e.createElement(a,{gap:t.small},e.createElement(o,null,"CLEAR 아이콘"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",value:"입력된 내용",helperText:"지우기 아이콘을 탭하면 입력 내용을 삭제합니다.",trailingIcon:"clear"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"ERROR 아이콘"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",value:"잘못된 입력",errorMessage:"에러 메시지를 나타내요.",trailingIcon:"error"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"SUCCESS 아이콘"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",value:"올바른 입력",successMessage:"성공 메시지를 나타내요.",trailingIcon:"success"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"SEARCH 아이콘"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"검색",placeholder:"검색어를 입력하세요.",trailingIcon:"search"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"텍스트 링크"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",value:"입력된 내용",helperText:"오른쪽 텍스트 링크를 통해 추가 동작을 제공합니다.",trailingText:"텍스트"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"아이콘 + 텍스트 링크"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"주제",value:"입력된 내용",helperText:"아이콘과 텍스트 링크를 동시에 사용합니다.",trailingIcon:"clear",trailingText:"텍스트"}))))))},F={name:"텍스트 영역",decorators:[n=>e.createElement(l,{style:{maxWidth:500,padding:t.large}},e.createElement(n,null))],render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"텍스트 영역 (Textarea)",description:"multiline 속성으로 여러 줄 입력이 가능한 텍스트 영역을 제공합니다."},e.createElement(a,{gap:t["2xlarge"]},e.createElement(a,{gap:t.small},e.createElement(o,null,"기본 텍스트 영역"),e.createElement(r,{label:"주제",placeholder:"메시지를 입력해 주세요.",helperText:"메시지에 마침표를 찍어요.",maxCharCount:2e3,multiline:!0})),e.createElement(X,null),e.createElement(a,{gap:t.small},e.createElement(o,null,"입력된 텍스트 영역"),e.createElement(r,{label:"주제",value:"입력된 여러 줄의 내용이 들어갑니다. 텍스트 영역은 여러 줄의 긴 텍스트를 입력받을 때 사용합니다.",helperText:"메시지에 마침표를 찍어요.",maxCharCount:2e3,multiline:!0,trailingText:"텍스트"})),e.createElement(X,null),e.createElement(a,{gap:t.small},e.createElement(o,null,"비활성화된 텍스트 영역"),e.createElement(r,{label:"주제",value:"수정할 수 없는 내용입니다.",helperText:"비활성화된 텍스트 영역입니다.",maxCharCount:2e3,multiline:!0,disabled:!0})))))},L={name:"키보드 & 입력 타입",decorators:[n=>e.createElement(l,{style:{maxWidth:800,padding:t.large}},e.createElement(n,null))],render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"키보드 & 입력 타입",description:"모바일에서 키보드 타입에 따라 다른 키패드가 올라옵니다. 각 입력 필드를 탭하여 키보드 동작을 확인하세요."},e.createElement(l,{style:{flexDirection:"row",flexWrap:"wrap",gap:t["2xlarge"]}},e.createElement(a,{gap:t.small},e.createElement(o,null,"기본 (default)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"이름",placeholder:"이름을 입력하세요.",keyboardType:"default",autoCapitalize:"words",helperText:"keyboardType: default, autoCapitalize: words"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"이메일 (email-address)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"이메일",placeholder:"example@email.com",keyboardType:"email-address",autoCapitalize:"none",helperText:"keyboardType: email-address, autoCapitalize: none"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"전화번호 (phone-pad)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"전화번호",placeholder:"010-0000-0000",keyboardType:"phone-pad",helperText:"keyboardType: phone-pad"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"숫자 (numeric)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"나이",placeholder:"숫자만 입력",keyboardType:"numeric",helperText:"keyboardType: numeric"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"소수점 (decimal-pad)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"금액",placeholder:"0.00",keyboardType:"decimal-pad",helperText:"keyboardType: decimal-pad"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"URL (url)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"웹사이트",placeholder:"https://example.com",keyboardType:"url",autoCapitalize:"none",helperText:"keyboardType: url, autoCapitalize: none"}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"비밀번호 (secureTextEntry)"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"비밀번호",placeholder:"비밀번호를 입력하세요.",secureTextEntry:!0,autoCapitalize:"none",helperText:"secureTextEntry: true — 입력 내용이 마스킹됩니다."}))),e.createElement(a,{gap:t.small},e.createElement(o,null,"비밀번호 + 에러"),e.createElement(l,{style:{width:320}},e.createElement(r,{label:"비밀번호 확인",value:"mismatch",secureTextEntry:!0,autoCapitalize:"none",errorMessage:"비밀번호가 일치하지 않습니다.",trailingIcon:"error"}))))),e.createElement(m,{title:"키보드 타입 매핑 가이드",description:"기획자/디자이너를 위한 입력 유형별 권장 설정입니다."},e.createElement(T,{rows:[{label:"일반 텍스트",value:"keyboardType: 'default'",token:"이름, 주소, 메모 등"},{label:"이메일",value:`keyboardType: 'email-address'
autoCapitalize: 'none'`,token:"@ 키가 포함된 키보드"},{label:"전화번호",value:"keyboardType: 'phone-pad'",token:"숫자 + 하이픈 키패드"},{label:"숫자 (정수)",value:"keyboardType: 'number-pad'",token:"숫자만 입력 (나이, 수량)"},{label:"숫자 (소수점)",value:"keyboardType: 'decimal-pad'",token:"숫자 + 소수점 (금액, 체중)"},{label:"URL",value:`keyboardType: 'url'
autoCapitalize: 'none'`,token:".com 키가 포함된 키보드"},{label:"비밀번호",value:`secureTextEntry: true
autoCapitalize: 'none'`,token:"입력 내용 마스킹 (●●●●)"}]})))},z={name:"인터랙티브 데모",decorators:[n=>e.createElement(l,{style:{maxWidth:400,padding:t.large}},e.createElement(n,null))],render:()=>{const[n,w]=C.useState(""),[p,y]=C.useState(!1),h=p&&n.length<2,g=p&&n.length>=2;return e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"인터랙티브 데모",description:"직접 입력하며 상태 변화를 확인해 보세요. 2자 이상 입력 후 텍스트 링크를 누르면 유효성 검사를 실행합니다."},e.createElement(a,{gap:t.large},e.createElement(r,{label:"이름",placeholder:"이름을 입력해 주세요.",value:n,onChangeText:x=>{w(x),p&&y(!1)},helperText:!h&&!g?"2자 이상 입력해 주세요.":void 0,errorMessage:h?"이름은 2자 이상 입력해야 합니다.":void 0,successMessage:g?"올바른 이름입니다.":void 0,trailingIcon:n.length>0?h?"error":g?"success":"clear":void 0,trailingText:"확인",onTrailingTextPress:()=>y(!0),onClear:()=>{w(""),y(!1)},maxCharCount:20}))))}},N={name:"디자인 스펙",decorators:[n=>e.createElement(l,{style:{maxWidth:700,padding:t.large}},e.createElement(n,null))],render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"디자인 스펙",description:"InputField 컴포넌트의 디자인 토큰 명세입니다."},e.createElement(a,{gap:t["2xlarge"]},e.createElement(T,{title:"상태별 테두리 컬러",rows:[{label:"비활성 (Inactive) 테두리",value:d[96],token:"coolNeutral[96]"},{label:"입력됨 (Active) 테두리",value:d[90],token:"coolNeutral[90]"},{label:"포커스 (Focus) 테두리",value:q[45],token:"mint[45]"},{label:"에러 (Error) 테두리",value:O[70],token:"red[70]"},{label:"비활성화 (Disabled) 테두리",value:d[96],token:"coolNeutral[96]"}]}),e.createElement(T,{title:"메시지 컬러",rows:[{label:"도움말 텍스트",value:d[50],token:"coolNeutral[50]"},{label:"에러 메시지",value:O[70],token:"red[70]"},{label:"성공 메시지",value:q[45],token:"mint[45]"}]}),e.createElement(T,{title:"텍스트 스타일",rows:[{label:"라벨 fontSize",value:`${b.small}`,token:"fontSize.small (13)"},{label:"라벨 fontWeight",value:A.medium,token:"fontWeight.medium (500)"},{label:"라벨 색상",value:d[30],token:"coolNeutral[30]"},{label:"입력 텍스트 fontSize",value:`${b.medium}`,token:"fontSize.medium (15)"},{label:"입력 텍스트 색상",value:d[17],token:"coolNeutral[17]"},{label:"플레이스홀더 색상",value:d[80],token:"coolNeutral[80]"}]}),e.createElement(T,{title:"레이아웃",rows:[{label:"테두리 radius",value:`${Y.medium}`,token:"radius.medium (12)"},{label:"수평 패딩",value:`${t.large}`,token:"spacing.large (16)"},{label:"최소 높이 (단일)",value:"48",token:"—"},{label:"최소 높이 (멀티라인)",value:"100",token:"—"},{label:"비활성화 배경색",value:d[99],token:"coolNeutral[99]"}]}))))},W={name:"사용 가이드",decorators:[n=>e.createElement(l,{style:{maxWidth:600,padding:t.large}},e.createElement(n,null))],render:()=>e.createElement(l,{style:{gap:t["3xlarge"]}},e.createElement(m,{title:"사용 가이드",description:"InputField 컴포넌트의 import 및 사용 예시입니다."},e.createElement(a,{gap:t.large},e.createElement(u,{title:"Import",code:"import { InputField } from '@design-system/components/InputField';"}),e.createElement(u,{title:"기본 사용",code:`<InputField
  label="주제"
  placeholder="메시지를 입력해 주세요."
  helperText="도움말 텍스트"
  value={text}
  onChangeText={setText}
/>`}),e.createElement(u,{title:"에러 상태",code:`<InputField
  label="이메일"
  value={email}
  onChangeText={setEmail}
  errorMessage="올바른 이메일 형식이 아닙니다."
  trailingIcon="error"
/>`}),e.createElement(u,{title:"성공 상태",code:`<InputField
  label="닉네임"
  value={nickname}
  onChangeText={setNickname}
  successMessage="사용 가능한 닉네임입니다."
  trailingIcon="success"
/>`}),e.createElement(u,{title:"지우기 버튼 포함",code:`<InputField
  label="검색"
  value={query}
  onChangeText={setQuery}
  trailingIcon={query.length > 0 ? 'clear' : 'search'}
  onClear={() => setQuery('')}
/>`}),e.createElement(u,{title:"글자 수 제한",code:`<InputField
  label="메모"
  value={memo}
  onChangeText={setMemo}
  maxCharCount={200}
  helperText="200자 이내로 작성해 주세요."
/>`}),e.createElement(u,{title:"키보드 타입 지정",code:`// 이메일 키보드 (@ 키 포함)
<InputField
  label="이메일"
  keyboardType="email-address"
  autoCapitalize="none"
/>

// 전화번호 키패드
<InputField
  label="전화번호"
  keyboardType="phone-pad"
/>

// 비밀번호 마스킹
<InputField
  label="비밀번호"
  secureTextEntry
  autoCapitalize="none"
/>`}),e.createElement(u,{title:"Textarea (여러 줄 입력)",code:`<InputField
  label="상세 설명"
  value={description}
  onChangeText={setDescription}
  multiline
  maxCharCount={2000}
  helperText="상세한 설명을 작성해 주세요."
/>`}),e.createElement(u,{title:"Textarea + KeyboardAvoidingView (키보드 가림 방지)",code:`import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

// ⚠️ Textarea(multiline)를 사용할 때 키보드가 입력창을 가리는 문제가 발생합니다.
// KeyboardAvoidingView로 감싸서 키보드가 올라올 때 화면을 자동으로 밀어올려야 합니다.

function WriteScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
    >
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <InputField label="제목" />
        <InputField
          label="본문"
          multiline
          maxCharCount={2000}
          minHeight={200}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}`}),e.createElement(u,{title:"비활성화",code:`<InputField
  label="이름"
  value="홍길동"
  disabled
/>`}))))};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: '주제',
    placeholder: '메시지를 입력해 주세요.',
    helperText: '메시지에 마침표를 찍어요.',
    maxCharCount: 2000
  }
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '모든 상태',
  decorators: [Story => <View style={{
    maxWidth: 800,
    padding: spacing.large
  }}>
        <Story />
      </View>],
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="모든 상태" description="기획자와 디자이너가 한눈에 확인할 수 있도록 InputField의 모든 상태를 정리했습니다.">
        <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing['2xlarge']
      }}>
          {/* 비활성 (Inactive) */}
          <Col gap={spacing.small}>
            <StateLabel>비활성 (INACTIVE)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" placeholder="메시지를 입력해 주세요." helperText="메시지에 마침표를 찍어요." maxCharCount={2000} />
            </View>
          </Col>

          {/* 입력됨 (Active) */}
          <Col gap={spacing.small}>
            <StateLabel>입력됨 (ACTIVE)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" value="입력된 내용" helperText="메시지에 마침표를 찍어요." maxCharCount={2000} />
            </View>
          </Col>

          {/* 포커스 (Focus) */}
          <Col gap={spacing.small}>
            <StateLabel>포커스 (FOCUS)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" placeholder="메시지를 입력해 주세요." helperText="포커스 상태는 컴포넌트 내부에서 자동 관리됩니다. 입력 필드를 클릭하면 민트색 테두리가 나타납니다." maxCharCount={2000} />
            </View>
          </Col>

          {/* 에러 */}
          <Col gap={spacing.small}>
            <StateLabel>에러 (ERROR)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" value="잘못된 입력" errorMessage="에러 메시지를 나타내요." trailingIcon="error" />
            </View>
          </Col>

          {/* 성공 */}
          <Col gap={spacing.small}>
            <StateLabel>성공 (SUCCESS)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" value="올바른 입력" successMessage="성공 메시지를 나타내요." trailingIcon="success" />
            </View>
          </Col>

          {/* 비활성화 (Disabled) */}
          <Col gap={spacing.small}>
            <StateLabel>비활성화 (DISABLED)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" placeholder="입력할 수 없습니다." helperText="비활성화된 입력 필드입니다." disabled />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '후행 요소',
  decorators: [Story => <View style={{
    maxWidth: 800,
    padding: spacing.large
  }}>
        <Story />
      </View>],
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="후행 요소" description="입력 필드 오른쪽에 배치 가능한 아이콘과 텍스트 조합입니다.">
        <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing['2xlarge']
      }}>
          <Col gap={spacing.small}>
            <StateLabel>CLEAR 아이콘</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" value="입력된 내용" helperText="지우기 아이콘을 탭하면 입력 내용을 삭제합니다." trailingIcon="clear" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>ERROR 아이콘</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" value="잘못된 입력" errorMessage="에러 메시지를 나타내요." trailingIcon="error" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>SUCCESS 아이콘</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" value="올바른 입력" successMessage="성공 메시지를 나타내요." trailingIcon="success" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>SEARCH 아이콘</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="검색" placeholder="검색어를 입력하세요." trailingIcon="search" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>텍스트 링크</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" value="입력된 내용" helperText="오른쪽 텍스트 링크를 통해 추가 동작을 제공합니다." trailingText="텍스트" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>아이콘 + 텍스트 링크</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="주제" value="입력된 내용" helperText="아이콘과 텍스트 링크를 동시에 사용합니다." trailingIcon="clear" trailingText="텍스트" />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...V.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '텍스트 영역',
  decorators: [Story => <View style={{
    maxWidth: 500,
    padding: spacing.large
  }}>
        <Story />
      </View>],
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="텍스트 영역 (Textarea)" description="multiline 속성으로 여러 줄 입력이 가능한 텍스트 영역을 제공합니다.">
        <Col gap={spacing['2xlarge']}>
          <Col gap={spacing.small}>
            <StateLabel>기본 텍스트 영역</StateLabel>
            <InputField label="주제" placeholder="메시지를 입력해 주세요." helperText="메시지에 마침표를 찍어요." maxCharCount={2000} multiline />
          </Col>

          <Divider />

          <Col gap={spacing.small}>
            <StateLabel>입력된 텍스트 영역</StateLabel>
            <InputField label="주제" value="입력된 여러 줄의 내용이 들어갑니다. 텍스트 영역은 여러 줄의 긴 텍스트를 입력받을 때 사용합니다." helperText="메시지에 마침표를 찍어요." maxCharCount={2000} multiline trailingText="텍스트" />
          </Col>

          <Divider />

          <Col gap={spacing.small}>
            <StateLabel>비활성화된 텍스트 영역</StateLabel>
            <InputField label="주제" value="수정할 수 없는 내용입니다." helperText="비활성화된 텍스트 영역입니다." maxCharCount={2000} multiline disabled />
          </Col>
        </Col>
      </Section>
    </View>
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '키보드 & 입력 타입',
  decorators: [Story => <View style={{
    maxWidth: 800,
    padding: spacing.large
  }}>
        <Story />
      </View>],
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="키보드 & 입력 타입" description="모바일에서 키보드 타입에 따라 다른 키패드가 올라옵니다. 각 입력 필드를 탭하여 키보드 동작을 확인하세요.">
        <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing['2xlarge']
      }}>
          <Col gap={spacing.small}>
            <StateLabel>기본 (default)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="이름" placeholder="이름을 입력하세요." keyboardType="default" autoCapitalize="words" helperText="keyboardType: default, autoCapitalize: words" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>이메일 (email-address)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="이메일" placeholder="example@email.com" keyboardType="email-address" autoCapitalize="none" helperText="keyboardType: email-address, autoCapitalize: none" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>전화번호 (phone-pad)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="전화번호" placeholder="010-0000-0000" keyboardType="phone-pad" helperText="keyboardType: phone-pad" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>숫자 (numeric)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="나이" placeholder="숫자만 입력" keyboardType="numeric" helperText="keyboardType: numeric" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>소수점 (decimal-pad)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="금액" placeholder="0.00" keyboardType="decimal-pad" helperText="keyboardType: decimal-pad" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>URL (url)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="웹사이트" placeholder="https://example.com" keyboardType="url" autoCapitalize="none" helperText="keyboardType: url, autoCapitalize: none" />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>비밀번호 (secureTextEntry)</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="비밀번호" placeholder="비밀번호를 입력하세요." secureTextEntry autoCapitalize="none" helperText="secureTextEntry: true — 입력 내용이 마스킹됩니다." />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>비밀번호 + 에러</StateLabel>
            <View style={{
            width: 320
          }}>
              <InputField label="비밀번호 확인" value="mismatch" secureTextEntry autoCapitalize="none" errorMessage="비밀번호가 일치하지 않습니다." trailingIcon="error" />
            </View>
          </Col>
        </View>
      </Section>

      <Section title="키보드 타입 매핑 가이드" description="기획자/디자이너를 위한 입력 유형별 권장 설정입니다.">
        <SpecTable rows={[{
        label: '일반 텍스트',
        value: "keyboardType: 'default'",
        token: '이름, 주소, 메모 등'
      }, {
        label: '이메일',
        value: "keyboardType: 'email-address'\\nautoCapitalize: 'none'",
        token: '@ 키가 포함된 키보드'
      }, {
        label: '전화번호',
        value: "keyboardType: 'phone-pad'",
        token: '숫자 + 하이픈 키패드'
      }, {
        label: '숫자 (정수)',
        value: "keyboardType: 'number-pad'",
        token: '숫자만 입력 (나이, 수량)'
      }, {
        label: '숫자 (소수점)',
        value: "keyboardType: 'decimal-pad'",
        token: '숫자 + 소수점 (금액, 체중)'
      }, {
        label: 'URL',
        value: "keyboardType: 'url'\\nautoCapitalize: 'none'",
        token: '.com 키가 포함된 키보드'
      }, {
        label: '비밀번호',
        value: "secureTextEntry: true\\nautoCapitalize: 'none'",
        token: '입력 내용 마스킹 (●●●●)'
      }]} />
      </Section>
    </View>
}`,...L.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  decorators: [Story => <View style={{
    maxWidth: 400,
    padding: spacing.large
  }}>
        <Story />
      </View>],
  render: () => {
    const [text, setText] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const hasError = submitted && text.length < 2;
    const hasSuccess = submitted && text.length >= 2;
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="직접 입력하며 상태 변화를 확인해 보세요. 2자 이상 입력 후 텍스트 링크를 누르면 유효성 검사를 실행합니다.">
          <Col gap={spacing.large}>
            <InputField label="이름" placeholder="이름을 입력해 주세요." value={text} onChangeText={v => {
            setText(v);
            if (submitted) setSubmitted(false);
          }} helperText={!hasError && !hasSuccess ? '2자 이상 입력해 주세요.' : undefined} errorMessage={hasError ? '이름은 2자 이상 입력해야 합니다.' : undefined} successMessage={hasSuccess ? '올바른 이름입니다.' : undefined} trailingIcon={text.length > 0 ? hasError ? 'error' : hasSuccess ? 'success' : 'clear' : undefined} trailingText="확인" onTrailingTextPress={() => setSubmitted(true)} onClear={() => {
            setText('');
            setSubmitted(false);
          }} maxCharCount={20} />
          </Col>
        </Section>
      </View>;
  }
}`,...z.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  decorators: [Story => <View style={{
    maxWidth: 700,
    padding: spacing.large
  }}>
        <Story />
      </View>],
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="InputField 컴포넌트의 디자인 토큰 명세입니다.">
        <Col gap={spacing['2xlarge']}>
          <SpecTable title="상태별 테두리 컬러" rows={[{
          label: '비활성 (Inactive) 테두리',
          value: coolNeutral[96],
          token: 'coolNeutral[96]'
        }, {
          label: '입력됨 (Active) 테두리',
          value: coolNeutral[90],
          token: 'coolNeutral[90]'
        }, {
          label: '포커스 (Focus) 테두리',
          value: mint[45],
          token: 'mint[45]'
        }, {
          label: '에러 (Error) 테두리',
          value: red[70],
          token: 'red[70]'
        }, {
          label: '비활성화 (Disabled) 테두리',
          value: coolNeutral[96],
          token: 'coolNeutral[96]'
        }]} />

          <SpecTable title="메시지 컬러" rows={[{
          label: '도움말 텍스트',
          value: coolNeutral[50],
          token: 'coolNeutral[50]'
        }, {
          label: '에러 메시지',
          value: red[70],
          token: 'red[70]'
        }, {
          label: '성공 메시지',
          value: mint[45],
          token: 'mint[45]'
        }]} />

          <SpecTable title="텍스트 스타일" rows={[{
          label: '라벨 fontSize',
          value: \`\${fontSize.small}\`,
          token: 'fontSize.small (13)'
        }, {
          label: '라벨 fontWeight',
          value: fontWeight.medium,
          token: 'fontWeight.medium (500)'
        }, {
          label: '라벨 색상',
          value: coolNeutral[30],
          token: 'coolNeutral[30]'
        }, {
          label: '입력 텍스트 fontSize',
          value: \`\${fontSize.medium}\`,
          token: 'fontSize.medium (15)'
        }, {
          label: '입력 텍스트 색상',
          value: coolNeutral[17],
          token: 'coolNeutral[17]'
        }, {
          label: '플레이스홀더 색상',
          value: coolNeutral[80],
          token: 'coolNeutral[80]'
        }]} />

          <SpecTable title="레이아웃" rows={[{
          label: '테두리 radius',
          value: \`\${radius.medium}\`,
          token: 'radius.medium (12)'
        }, {
          label: '수평 패딩',
          value: \`\${spacing.large}\`,
          token: 'spacing.large (16)'
        }, {
          label: '최소 높이 (단일)',
          value: '48',
          token: '—'
        }, {
          label: '최소 높이 (멀티라인)',
          value: '100',
          token: '—'
        }, {
          label: '비활성화 배경색',
          value: coolNeutral[99],
          token: 'coolNeutral[99]'
        }]} />
        </Col>
      </Section>
    </View>
}`,...N.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  decorators: [Story => <View style={{
    maxWidth: 600,
    padding: spacing.large
  }}>
        <Story />
      </View>],
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="InputField 컴포넌트의 import 및 사용 예시입니다.">
        <Col gap={spacing.large}>
          <CodeBlock title="Import" code={\`import { InputField } from '@design-system/components/InputField';\`} />

          <CodeBlock title="기본 사용" code={\`<InputField
  label="주제"
  placeholder="메시지를 입력해 주세요."
  helperText="도움말 텍스트"
  value={text}
  onChangeText={setText}
/>\`} />

          <CodeBlock title="에러 상태" code={\`<InputField
  label="이메일"
  value={email}
  onChangeText={setEmail}
  errorMessage="올바른 이메일 형식이 아닙니다."
  trailingIcon="error"
/>\`} />

          <CodeBlock title="성공 상태" code={\`<InputField
  label="닉네임"
  value={nickname}
  onChangeText={setNickname}
  successMessage="사용 가능한 닉네임입니다."
  trailingIcon="success"
/>\`} />

          <CodeBlock title="지우기 버튼 포함" code={\`<InputField
  label="검색"
  value={query}
  onChangeText={setQuery}
  trailingIcon={query.length > 0 ? 'clear' : 'search'}
  onClear={() => setQuery('')}
/>\`} />

          <CodeBlock title="글자 수 제한" code={\`<InputField
  label="메모"
  value={memo}
  onChangeText={setMemo}
  maxCharCount={200}
  helperText="200자 이내로 작성해 주세요."
/>\`} />

          <CodeBlock title="키보드 타입 지정" code={\`// 이메일 키보드 (@ 키 포함)
<InputField
  label="이메일"
  keyboardType="email-address"
  autoCapitalize="none"
/>

// 전화번호 키패드
<InputField
  label="전화번호"
  keyboardType="phone-pad"
/>

// 비밀번호 마스킹
<InputField
  label="비밀번호"
  secureTextEntry
  autoCapitalize="none"
/>\`} />

          <CodeBlock title="Textarea (여러 줄 입력)" code={\`<InputField
  label="상세 설명"
  value={description}
  onChangeText={setDescription}
  multiline
  maxCharCount={2000}
  helperText="상세한 설명을 작성해 주세요."
/>\`} />

          <CodeBlock title="Textarea + KeyboardAvoidingView (키보드 가림 방지)" code={\`import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

// ⚠️ Textarea(multiline)를 사용할 때 키보드가 입력창을 가리는 문제가 발생합니다.
// KeyboardAvoidingView로 감싸서 키보드가 올라올 때 화면을 자동으로 밀어올려야 합니다.

function WriteScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
    >
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <InputField label="제목" />
        <InputField
          label="본문"
          multiline
          maxCharCount={2000}
          minHeight={200}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}\`} />

          <CodeBlock title="비활성화" code={\`<InputField
  label="이름"
  value="홍길동"
  disabled
/>\`} />
        </Col>
      </Section>
    </View>
}`,...W.parameters?.docs?.source}}};const ze=["Playground","AllStates","TrailingElements","Textarea","KeyboardTypes","InteractiveDemo","DesignSpec","Usage"];export{k as AllStates,N as DesignSpec,z as InteractiveDemo,L as KeyboardTypes,I as Playground,F as Textarea,V as TrailingElements,W as Usage,ze as __namedExportsOrder,Le as default};
