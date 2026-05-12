import{r as n,z as V,h as ce,s as _,B as me,V as o,U as ne,R as e}from"./iframe-rdsxNJ7l.js";import{_ as de,M as ie,T as u,s as r,c,f as O,e as f,r as x,a as N,q as ve,o as te}from"./theme-KAxj7l-q.js";import{D as M}from"./index-BFVMpTcU.js";import{A as k}from"./Animated-Dxl4hYIg.js";import{r as Se}from"./index-DvUEBMMR.js";import{B as h}from"./Button-DT9-49YQ.js";import{T as ae}from"./TextField-BD3-dNrB.js";import{C}from"./Checkbox-CKzHbKi6.js";import{S as E,D,C as F}from"./storyHelpers-D5HpvNsw.js";import{T as I}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-0_7wxnUT.js";import"./index-BAQ2jOn_.js";import"./index-LHpOlSgp.js";import"./index-BF5bKU7j.js";import"./index-GFEO7EU5.js";import"./Icon-DGfD0Qtj.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";import"./BaseInput-Bw9fcaU4.js";import"./index-fsILkl5G.js";function Ee(t){var a=t.children,i=n.useRef(null);if(V&&!i.current){var l=document.createElement("div");l&&document.body&&(document.body.appendChild(l),i.current=l)}return n.useEffect(()=>{if(V)return()=>{document.body&&i.current&&(document.body.removeChild(i.current),i.current=null)}},[]),i.current&&V?Se.createPortal(a,i.current):null}var le=250;function ke(t,a){return t==="slide"?a?we:Te:t==="fade"?a?Ce:Be:a?d.container:d.hidden}function xe(t){var a=t.animationType,i=t.children,l=t.onDismiss,m=t.onShow,s=t.visible,p=n.useState(!1),g=p[0],y=p[1],b=n.useRef(!1),P=n.useRef(!1),v=a&&a!=="none",z=n.useCallback(A=>{A&&A.currentTarget!==A.target||(s?m&&m():y(!1))},[m,s]);return n.useEffect(()=>{P.current&&!g&&l&&l(),P.current=g},[g,l]),n.useEffect(()=>{s&&y(!0),s!==b.current&&!v&&z(),b.current=s},[v,s,z]),g||s?ce("div",{style:g?ke(a,s):d.hidden,onAnimationEnd:z,children:i}):null}var d=_.create({container:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999},animatedIn:{animationDuration:le+"ms",animationTimingFunction:"cubic-bezier(0.215, 0.61, 0.355, 1)"},animatedOut:{pointerEvents:"none",animationDuration:le+"ms",animationTimingFunction:"cubic-bezier(0.47, 0, 0.745, 0.715)"},fadeIn:{opacity:1,animationKeyframes:{"0%":{opacity:0},"100%":{opacity:1}}},fadeOut:{opacity:0,animationKeyframes:{"0%":{opacity:1},"100%":{opacity:0}}},slideIn:{transform:"translateY(0%)",animationKeyframes:{"0%":{transform:"translateY(100%)"},"100%":{transform:"translateY(0%)"}}},slideOut:{transform:"translateY(100%)",animationKeyframes:{"0%":{transform:"translateY(0%)"},"100%":{transform:"translateY(100%)"}}},hidden:{opacity:0}}),we=[d.container,d.animatedIn,d.slideIn],Te=[d.container,d.animatedOut,d.slideOut],Ce=[d.container,d.animatedIn,d.fadeIn],Be=[d.container,d.animatedOut,d.fadeOut],Ve=["active","children","onRequestClose","transparent"],Pe=n.forwardRef((t,a)=>{var i=t.active,l=t.children,m=t.onRequestClose,s=t.transparent,p=me(t,Ve);n.useEffect(()=>{if(V){var y=b=>{i&&b.key==="Escape"&&(b.stopPropagation(),m&&m())};return document.addEventListener("keyup",y,!1),()=>document.removeEventListener("keyup",y,!1)}},[i,m]);var g=n.useMemo(()=>[L.modal,s?L.modalTransparent:L.modalOpaque],[s]);return n.createElement(o,de({},p,{"aria-modal":!0,ref:a,role:i?"dialog":null,style:g}),n.createElement(o,{style:L.container},l))}),L=_.create({modal:{position:"fixed",top:0,right:0,bottom:0,left:0},modalTransparent:{backgroundColor:"transparent"},modalOpaque:{backgroundColor:"white"},container:{top:0,flex:1}}),se=()=>ce("div",{role:"none",tabIndex:0,style:Ae.focusBracket});function ue(t){if(!V)return!1;try{t.focus()}catch{}return document.activeElement===t}function pe(t){for(var a=0;a<t.childNodes.length;a++){var i=t.childNodes[a];if(ue(i)||pe(i))return!0}return!1}function ge(t){for(var a=t.childNodes.length-1;a>=0;a--){var i=t.childNodes[a];if(ue(i)||ge(i))return!0}return!1}var ze=t=>{var a=t.active,i=t.children,l=n.useRef(),m=n.useRef({trapFocusInProgress:!1,lastFocusedElement:null});return n.useEffect(()=>{if(V){var s=()=>{if(!(l.current==null||m.current.trapFocusInProgress||!a)){try{if(m.current.trapFocusInProgress=!0,document.activeElement instanceof Node&&!l.current.contains(document.activeElement)){var p=pe(l.current);m.current.lastFocusedElement===document.activeElement&&(p=ge(l.current)),!p&&l.current!=null&&document.activeElement&&ne.focus(l.current)}}finally{m.current.trapFocusInProgress=!1}m.current.lastFocusedElement=document.activeElement}};return s(),document.addEventListener("focus",s,!0),()=>document.removeEventListener("focus",s,!0)}},[a]),n.useEffect(function(){if(V){var s=document.activeElement;return function(){s&&document.contains(s)&&ne.focus(s)}}},[]),n.createElement(n.Fragment,null,n.createElement(se,null),n.createElement(o,{ref:l},i),n.createElement(se,null))},Ae=_.create({focusBracket:{outlineStyle:"none"}}),He=["animationType","children","onDismiss","onRequestClose","onShow","transparent","visible"],Ne=0,B=[],R={};function ye(){if(B.length!==0){var t=B[B.length-1];B.forEach(a=>{a in R&&R[a](a===t)})}}function re(t){t in R&&(R[t](!1),delete R[t]);var a=B.indexOf(t);a!==-1&&(B.splice(a,1),ye())}function Re(t,a){re(t),B.push(t),R[t]=a,ye()}var _e=n.forwardRef((t,a)=>{var i=t.animationType,l=t.children,m=t.onDismiss,s=t.onRequestClose,p=t.onShow,g=t.transparent,y=t.visible,b=y===void 0?!0:y,P=me(t,He),v=n.useMemo(()=>Ne++,[]),z=n.useState(!1),A=z[0],he=z[1],fe=n.useCallback(()=>{re(v),m&&m()},[v,m]),be=n.useCallback(()=>{Re(v,he),p&&p()},[v,p]);return n.useEffect(()=>()=>re(v),[v]),n.createElement(Ee,null,n.createElement(xe,{animationType:i,onDismiss:fe,onShow:be,visible:b},n.createElement(ze,{active:A},n.createElement(Pe,de({},P,{active:A,onRequestClose:s,ref:a,transparent:g}),l))))});function Oe(){var t=n.useState(()=>M.get("window")),a=t[0],i=t[1];return n.useEffect(()=>{function l(m){var s=m.window;s!=null&&i(s)}return M.addEventListener("change",l),i(M.get("window")),()=>{M.removeEventListener("change",l)}},[]),a}const K=300,Ie=1;function oe({visible:t,onClose:a,title:i,children:l,showHandle:m=!0,showCloseButton:s=!1,safeAreaBottom:p=0}){const{height:g}=Oe(),y=n.useRef(new k.Value(g)).current,b=n.useRef(new k.Value(0)).current,[P,v]=e.useState(!1);return n.useEffect(()=>{t?(v(!0),k.parallel([k.timing(y,{toValue:0,duration:K,useNativeDriver:!0}),k.timing(b,{toValue:Ie,duration:K,useNativeDriver:!0})]).start()):k.parallel([k.timing(y,{toValue:g,duration:K,useNativeDriver:!0}),k.timing(b,{toValue:0,duration:K,useNativeDriver:!0})]).start(()=>{v(!1)})},[t,g,y,b]),e.createElement(_e,{visible:P,transparent:!0,animationType:"none",onRequestClose:a,statusBarTranslucent:!0},e.createElement(o,{style:w.overlay},e.createElement(k.View,{style:[w.backdrop,{opacity:b}]},e.createElement(ie,{style:_.absoluteFill,onPress:a,accessibilityRole:"none"})),e.createElement(k.View,{style:[w.sheet,{transform:[{translateY:y}],paddingBottom:p}]},m&&e.createElement(o,{style:w.handleContainer},e.createElement(o,{style:w.handle})),s&&e.createElement(ie,{style:w.closeButton,onPress:a},e.createElement(u,{style:w.closeButtonText},"✕")),i&&e.createElement(u,{style:w.title},i),e.createElement(o,{style:w.content},l))))}const w=_.create({overlay:{flex:1,justifyContent:"flex-end"},backdrop:{..._.absoluteFillObject,backgroundColor:c.backgroundScrim},sheet:{backgroundColor:c.backgroundPrimary,borderTopLeftRadius:x.xlarge,borderTopRightRadius:x.xlarge},handleContainer:{alignItems:"center",marginTop:r.medium},handle:{width:40,height:4,borderRadius:x.xsmall,backgroundColor:c.backgroundOff},closeButton:{position:"absolute",right:r.large,top:r.large,width:24,height:24,alignItems:"center",justifyContent:"center"},closeButtonText:{fontSize:f.large,color:c.textSecondary,fontWeight:O.medium},title:{fontSize:f.large,fontWeight:O.bold,color:c.textPrimary,paddingHorizontal:r.xlarge,paddingVertical:r.large},content:{paddingHorizontal:r.xlarge,paddingBottom:r.xlarge}});oe.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{visible:{required:!0,tsType:{name:"boolean"},description:"표시 여부"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"닫기 콜백"},title:{required:!1,tsType:{name:"string"},description:"헤더 타이틀"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"콘텐츠"},showHandle:{required:!1,tsType:{name:"boolean"},description:"드래그 핸들바 표시 (기본: true)",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"닫기 버튼 표시 (기본: false)",defaultValue:{value:"false",computed:!1}},safeAreaBottom:{required:!1,tsType:{name:"number"},description:`하단 Safe Area 여백 (px)
react-native-safe-area-context의 useSafeAreaInsets().bottom 값을 전달하세요.
기본값: 0`,defaultValue:{value:"0",computed:!1}}}};const S={background:{token:"color/background/primary",value:c.backgroundPrimary},radiusTop:{token:"borderRadius/xlarge",value:x.xlarge},titleColor:{token:"color/text/primary",value:c.textPrimary},paddingH:{token:"spacing/xlarge",value:r.xlarge},paddingV:{token:"spacing/large",value:r.large},contentPadB:{token:"spacing/xlarge",value:r.xlarge}},H={background:{token:"color/background/off",value:c.backgroundOff},radius:{token:"borderRadius/full",value:x.full},topMargin:{token:"spacing/medium",value:r.medium}},W={background:{token:"black",value:ve.black},opacity:{token:"opacity/43",value:te[43]}};function T({title:t,children:a,showHandle:i=!0,showClose:l=!1}){return e.createElement(o,{style:{maxWidth:375,backgroundColor:`rgba(0,0,0,${te[52]})`,borderTopLeftRadius:x.medium,borderTopRightRadius:x.medium,overflow:"hidden"}},e.createElement(o,{style:{height:80}}),e.createElement(o,{style:{backgroundColor:c.backgroundPrimary,borderTopLeftRadius:x.xlarge,borderTopRightRadius:x.xlarge}},i&&e.createElement(o,{style:{alignItems:"center",marginTop:r.medium}},e.createElement(o,{style:{width:40,height:4,borderRadius:2,backgroundColor:c.backgroundOff}})),l&&e.createElement(o,{style:{position:"absolute",right:r.large,top:r.large,width:24,height:24,alignItems:"center",justifyContent:"center"}},e.createElement(u,{style:{fontSize:f.large,color:c.textSecondary}},"✕")),t&&e.createElement(u,{style:{fontSize:f.large,fontWeight:O.bold,color:c.textPrimary,paddingHorizontal:r.xlarge,paddingVertical:r.large}},t),e.createElement(o,{style:{paddingHorizontal:r.xlarge,paddingBottom:r.xlarge}},a)))}const nt={title:"Overlay/BottomSheet",tags:["autodocs"]},q={render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"Playground",description:"BottomSheet 기본 미리보기입니다."},e.createElement(T,{title:"옵션 선택",showHandle:!0},e.createElement(o,{style:{gap:r.medium}},e.createElement(u,{style:{fontSize:f.medium,color:c.textSecondary}},"아래에서 원하는 옵션을 선택해주세요."),e.createElement(h,{label:"확인",variant:"primary",size:"medium"}),e.createElement(h,{label:"취소",variant:"sub",size:"medium"}))))),parameters:{docs:{description:{story:"**적용 토큰**: `color/background/primary`, `borderRadius/xlarge` (상단만), `spacing/xlarge`, Handle `color/background/off`"}}}},$={name:"Handle 유/무",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"Handle 유/무",description:"Drag handle bar 표시 여부를 비교합니다."},e.createElement(o,{style:{gap:r.xlarge}},e.createElement(o,null,e.createElement(u,{style:{fontSize:f.xsmall,fontWeight:O.semibold,color:c.textSecondary,marginBottom:r.small}},"Handle 표시"),e.createElement(T,{title:"제목",showHandle:!0},e.createElement(u,{style:{fontSize:f.medium,color:c.textSecondary}},"Handle이 있는 시트"))),e.createElement(o,null,e.createElement(u,{style:{fontSize:f.xsmall,fontWeight:O.semibold,color:c.textSecondary,marginBottom:r.small}},"Handle 숨김"),e.createElement(T,{title:"제목",showHandle:!1},e.createElement(u,{style:{fontSize:f.medium,color:c.textSecondary}},"Handle이 없는 시트"))))))},Y={name:"Close 버튼",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"Close 버튼",description:"우상단에 닫기 버튼이 포함된 시트입니다."},e.createElement(T,{title:"알림 설정",showHandle:!0,showClose:!0},e.createElement(u,{style:{fontSize:f.medium,color:c.textSecondary}},"알림 관련 옵션을 설정할 수 있습니다."))))},U={name:"Action Sheet",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"Action Sheet",description:"확인/취소 버튼이 포함된 기본 액션 시트입니다. 실제 Button 컴포넌트를 사용합니다."},e.createElement(T,{title:"기록 삭제",showHandle:!0},e.createElement(o,{style:{gap:r.medium}},e.createElement(u,{style:{fontSize:f.medium,color:c.textSecondary}},"이 기록을 삭제하시겠습니까? 삭제된 기록은 복구할 수 없습니다."),e.createElement(o,{style:{gap:r.small,marginTop:r.small}},e.createElement(h,{label:"삭제",variant:"primary",size:"medium"}),e.createElement(h,{label:"취소",variant:"sub",size:"medium"}))))))},j={name:"Form Sheet",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"Form Sheet",description:"TextField를 포함한 폼 시트입니다. 실제 TextField 컴포넌트를 import하여 사용합니다."},e.createElement(T,{title:"목표 설정",showHandle:!0},e.createElement(o,{style:{gap:r.medium}},e.createElement(ae,{label:"목표명",placeholder:"예: 하루 물 2L 마시기"}),e.createElement(ae,{label:"메모",placeholder:"상세 설명 (선택)",multiline:!0,minHeight:60}),e.createElement(o,{style:{gap:r.small,marginTop:r.small}},e.createElement(h,{label:"저장",variant:"primary",size:"medium"}),e.createElement(h,{label:"취소",variant:"sub",size:"medium"})))))),parameters:{docs:{description:{story:"**내부 컴포넌트**: `TextField`, `Button` import 사용. BottomSheet 자체 토큰과 내부 컴포넌트 토큰이 각각 독립 적용."}}}},G={name:"List Sheet",render:()=>{const t=["식단 기록","수면 기록","운동 기록","영양제 기록","수분 기록"];return e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"List Sheet",description:"여러 옵션 목록을 포함한 시트입니다."},e.createElement(T,{title:"기록 추가",showHandle:!0},e.createElement(o,{style:{gap:0}},t.map((a,i)=>e.createElement(o,{key:a,style:{paddingVertical:r.medium,borderBottomWidth:i<t.length-1?1:0,borderBottomColor:c.borderDefault}},e.createElement(u,{style:{fontSize:f.medium,fontWeight:O.medium,color:c.textPrimary}},a)))))))}},J={name:"Checkbox Sheet",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"Checkbox Sheet",description:"약관 동의 등 Checkbox를 포함한 시트입니다. 실제 Checkbox 컴포넌트를 사용합니다."},e.createElement(T,{title:"이용약관 동의",showHandle:!0},e.createElement(o,{style:{gap:r.small}},e.createElement(C,{state:"checked",label:"전체 동의",bold:!0}),e.createElement(o,{style:{height:1,backgroundColor:c.borderDefault}}),e.createElement(C,{state:"checked",label:"이용약관 동의 (필수)"}),e.createElement(C,{state:"checked",label:"개인정보 처리방침 동의 (필수)"}),e.createElement(C,{state:"unchecked",label:"마케팅 수신 동의 (선택)",sublabel:"이벤트, 혜택 정보를 받아볼 수 있습니다."}),e.createElement(o,{style:{marginTop:r.medium}},e.createElement(h,{label:"동의하고 계속하기",variant:"primary",size:"large"}))))))},Q={name:"인터랙티브 데모",render:()=>{const[t,a]=n.useState(!1),[i,l]=n.useState(!1);return e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"인터랙티브 데모",description:"버튼을 클릭하여 실제 BottomSheet 컴포넌트를 열어봅니다."},e.createElement(o,{style:{flexDirection:"row",gap:r.medium}},e.createElement(h,{label:"Action Sheet",variant:"primary",size:"small",onPress:()=>a(!0)}),e.createElement(h,{label:"Form Sheet",variant:"outlined-focused",size:"small",onPress:()=>l(!0)})),e.createElement(oe,{visible:t,onClose:()=>a(!1),title:"기록 삭제",showHandle:!0},e.createElement(o,{style:{gap:r.medium}},e.createElement(u,{style:{fontSize:f.medium,color:c.textSecondary}},"이 기록을 삭제하시겠습니까?"),e.createElement(h,{label:"삭제",variant:"primary",size:"medium",onPress:()=>a(!1)}),e.createElement(h,{label:"취소",variant:"sub",size:"medium",onPress:()=>a(!1)}))),e.createElement(oe,{visible:i,onClose:()=>l(!1),title:"목표 설정",showHandle:!0},e.createElement(o,{style:{gap:r.medium}},e.createElement(ae,{label:"목표명",placeholder:"예: 하루 물 2L 마시기"}),e.createElement(h,{label:"저장",variant:"primary",size:"medium",onPress:()=>l(!1)})))))}},X={name:"디자인 스펙",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 BottomSheet 컨테이너 스펙입니다. 내부 Button/TextField/Checkbox의 토큰은 각 컴포넌트 문서를 참조하세요.",badge:"디자인"},e.createElement(I,{title:"bottom sheet / container",rows:[{property:"Container 배경색",token:S.background.token,value:S.background.value,type:"color"},{property:"Container 상단 라디우스",token:S.radiusTop.token,value:S.radiusTop.value,type:"size"},{property:"Title 색상",token:S.titleColor.token,value:S.titleColor.value,type:"color"},{property:"Title 타이포",token:"Headline",value:`${N.headline.fontSize}px / ${N.headline.lineHeight}px / ${N.headline.fontWeight}`,type:"typography"},{property:"좌우 패딩",token:S.paddingH.token,value:S.paddingH.value,type:"size"},{property:"Title 상하 패딩",token:S.paddingV.token,value:S.paddingV.value,type:"size"},{property:"Content 하단 패딩",token:S.contentPadB.token,value:S.contentPadB.value,type:"size"}]}),e.createElement(D,null),e.createElement(I,{title:"bottom sheet / drag handle",rows:[{property:"Handle 배경색",token:H.background.token,value:H.background.value,type:"color"},{property:"Handle 라디우스",token:H.radius.token,value:H.radius.value,type:"size"},{property:"Handle 상단 여백",token:H.topMargin.token,value:H.topMargin.value,type:"size"},{property:"Handle 너비",token:"—",value:"40"},{property:"Handle 높이",token:"—",value:"4"}]}),e.createElement(D,null),e.createElement(I,{title:"bottom sheet / scrim",rows:[{property:"Scrim 배경색",token:W.background.token,value:W.background.value,type:"color"},{property:"Scrim opacity",token:W.opacity.token,value:W.opacity.value,type:"opacity"}]}),e.createElement(D,null),e.createElement(I,{title:"bottom sheet / animation (권장값)",rows:[{property:"등장 시작 opacity",token:"opacity/0",value:te[0],type:"opacity"},{property:"등장 끝 opacity",token:"opacity/100",value:te[100],type:"opacity"},{property:"등장 방향",token:"—",value:"translateY(100%) → translateY(0)"},{property:"Duration",token:"—",value:"300ms"},{property:"Easing",token:"—",value:"cubic-bezier(0.32, 0.72, 0, 1)"}]}),e.createElement(D,null),e.createElement(I,{title:"내부 컴포넌트 참조",rows:[{property:"Button",token:"Button (solid)",value:"→ General/Button 문서 참조"},{property:"TextField",token:"TextField",value:"→ Input/TextField 문서 참조"},{property:"Checkbox",token:"Checkbox",value:"→ Input/Checkbox 문서 참조"}]})))},Z={name:"실전 예시",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"실전 예시",description:"필터 선택 — 인라인 BottomSheet 미리보기입니다. 건강 기록 필터를 선택하는 시나리오입니다."},e.createElement(o,{style:{maxWidth:375,padding:r.xlarge,backgroundColor:c.backgroundPrimary,borderRadius:x.large,borderWidth:1,borderColor:c.borderDefault,gap:r.large}},e.createElement(u,{style:{fontSize:N.heading.fontSize,fontWeight:N.heading.fontWeight,lineHeight:N.heading.lineHeight,color:c.textPrimary}},"건강 기록"),e.createElement(T,{title:"기록 필터",showHandle:!0},e.createElement(o,{style:{gap:r.small}},e.createElement(C,{state:"checked",label:"식단 기록"}),e.createElement(C,{state:"unchecked",label:"수면 기록"}),e.createElement(C,{state:"checked",label:"운동 기록"}),e.createElement(C,{state:"unchecked",label:"영양제 기록"}),e.createElement(o,{style:{marginTop:r.medium}},e.createElement(h,{label:"필터 적용",variant:"primary",size:"medium"})))))))},ee={name:"사용 가이드",render:()=>e.createElement(o,{style:{gap:r["3xlarge"]}},e.createElement(E,{title:"사용 가이드",description:"개발자를 위한 BottomSheet 컴포넌트 사용 예시입니다.",badge:"개발"},e.createElement(F,{title:"Import",code:`import { BottomSheet } from '@design-system/components/BottomSheet';
import { Button } from '@design-system/components/Button';`}),e.createElement(F,{title:"기본 Action Sheet",code:`const [visible, setVisible] = useState(false);

<BottomSheet
  visible={visible}
  onClose={() => setVisible(false)}
  title="기록 삭제"
  showHandle
>
  <Text>이 기록을 삭제하시겠습니까?</Text>
  <Button label="삭제" onPress={handleDelete} />
  <Button label="취소" variant="sub" onPress={() => setVisible(false)} />
</BottomSheet>`}),e.createElement(F,{title:"Form Sheet",code:`<BottomSheet visible={visible} onClose={close} title="목표 설정" showHandle>
  <TextField label="목표명" placeholder="예: 하루 물 2L" />
  <TextField label="메모" multiline minHeight={60} />
  <Button label="저장" onPress={handleSave} />
</BottomSheet>`}),e.createElement(F,{title:"Safe Area 대응",code:`import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { bottom } = useSafeAreaInsets();

<BottomSheet
  visible={visible}
  onClose={close}
  safeAreaBottom={bottom}
>
  {children}
</BottomSheet>`})))};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Playground" description="BottomSheet 기본 미리보기입니다.">
        <SheetPreview title="옵션 선택" showHandle>
          <View style={{
          gap: spacing.medium
        }}>
            <Text style={{
            fontSize: fontSize.medium,
            color: semanticColor.textSecondary
          }}>
              아래에서 원하는 옵션을 선택해주세요.
            </Text>
            <Button label="확인" variant="primary" size="medium" />
            <Button label="취소" variant="sub" size="medium" />
          </View>
        </SheetPreview>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: \`color/background/primary\`, \`borderRadius/xlarge\` (상단만), \`spacing/xlarge\`, Handle \`color/background/off\`'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Handle 유/무',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Handle 유/무" description="Drag handle bar 표시 여부를 비교합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <View>
            <Text style={{
            fontSize: fontSize.xsmall,
            fontWeight: fontWeight.semibold,
            color: semanticColor.textSecondary,
            marginBottom: spacing.small
          }}>Handle 표시</Text>
            <SheetPreview title="제목" showHandle>
              <Text style={{
              fontSize: fontSize.medium,
              color: semanticColor.textSecondary
            }}>Handle이 있는 시트</Text>
            </SheetPreview>
          </View>
          <View>
            <Text style={{
            fontSize: fontSize.xsmall,
            fontWeight: fontWeight.semibold,
            color: semanticColor.textSecondary,
            marginBottom: spacing.small
          }}>Handle 숨김</Text>
            <SheetPreview title="제목" showHandle={false}>
              <Text style={{
              fontSize: fontSize.medium,
              color: semanticColor.textSecondary
            }}>Handle이 없는 시트</Text>
            </SheetPreview>
          </View>
        </View>
      </Section>
    </View>
}`,...$.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Close 버튼',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Close 버튼" description="우상단에 닫기 버튼이 포함된 시트입니다.">
        <SheetPreview title="알림 설정" showHandle showClose>
          <Text style={{
          fontSize: fontSize.medium,
          color: semanticColor.textSecondary
        }}>
            알림 관련 옵션을 설정할 수 있습니다.
          </Text>
        </SheetPreview>
      </Section>
    </View>
}`,...Y.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Action Sheet',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Action Sheet" description="확인/취소 버튼이 포함된 기본 액션 시트입니다. 실제 Button 컴포넌트를 사용합니다.">
        <SheetPreview title="기록 삭제" showHandle>
          <View style={{
          gap: spacing.medium
        }}>
            <Text style={{
            fontSize: fontSize.medium,
            color: semanticColor.textSecondary
          }}>
              이 기록을 삭제하시겠습니까? 삭제된 기록은 복구할 수 없습니다.
            </Text>
            <View style={{
            gap: spacing.small,
            marginTop: spacing.small
          }}>
              <Button label="삭제" variant="primary" size="medium" />
              <Button label="취소" variant="sub" size="medium" />
            </View>
          </View>
        </SheetPreview>
      </Section>
    </View>
}`,...U.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Form Sheet',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Form Sheet" description="TextField를 포함한 폼 시트입니다. 실제 TextField 컴포넌트를 import하여 사용합니다.">
        <SheetPreview title="목표 설정" showHandle>
          <View style={{
          gap: spacing.medium
        }}>
            <TextField label="목표명" placeholder="예: 하루 물 2L 마시기" />
            <TextField label="메모" placeholder="상세 설명 (선택)" multiline minHeight={60} />
            <View style={{
            gap: spacing.small,
            marginTop: spacing.small
          }}>
              <Button label="저장" variant="primary" size="medium" />
              <Button label="취소" variant="sub" size="medium" />
            </View>
          </View>
        </SheetPreview>
      </Section>
    </View>,
  parameters: {
    docs: {
      description: {
        story: '**내부 컴포넌트**: \`TextField\`, \`Button\` import 사용. BottomSheet 자체 토큰과 내부 컴포넌트 토큰이 각각 독립 적용.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'List Sheet',
  render: () => {
    const options = ['식단 기록', '수면 기록', '운동 기록', '영양제 기록', '수분 기록'];
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="List Sheet" description="여러 옵션 목록을 포함한 시트입니다.">
          <SheetPreview title="기록 추가" showHandle>
            <View style={{
            gap: 0
          }}>
              {options.map((opt, i) => <View key={opt} style={{
              paddingVertical: spacing.medium,
              borderBottomWidth: i < options.length - 1 ? 1 : 0,
              borderBottomColor: semanticColor.borderDefault
            }}>
                  <Text style={{
                fontSize: fontSize.medium,
                fontWeight: fontWeight.medium,
                color: semanticColor.textPrimary
              }}>{opt}</Text>
                </View>)}
            </View>
          </SheetPreview>
        </Section>
      </View>;
  }
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Checkbox Sheet',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Checkbox Sheet" description="약관 동의 등 Checkbox를 포함한 시트입니다. 실제 Checkbox 컴포넌트를 사용합니다.">
        <SheetPreview title="이용약관 동의" showHandle>
          <View style={{
          gap: spacing.small
        }}>
            <Checkbox state="checked" label="전체 동의" bold />
            <View style={{
            height: 1,
            backgroundColor: semanticColor.borderDefault
          }} />
            <Checkbox state="checked" label="이용약관 동의 (필수)" />
            <Checkbox state="checked" label="개인정보 처리방침 동의 (필수)" />
            <Checkbox state="unchecked" label="마케팅 수신 동의 (선택)" sublabel="이벤트, 혜택 정보를 받아볼 수 있습니다." />
            <View style={{
            marginTop: spacing.medium
          }}>
              <Button label="동의하고 계속하기" variant="primary" size="large" />
            </View>
          </View>
        </SheetPreview>
      </Section>
    </View>
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: '인터랙티브 데모',
  render: () => {
    const [visible, setVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="인터랙티브 데모" description="버튼을 클릭하여 실제 BottomSheet 컴포넌트를 열어봅니다.">
          <View style={{
          flexDirection: 'row',
          gap: spacing.medium
        }}>
            <Button label="Action Sheet" variant="primary" size="small" onPress={() => setVisible(true)} />
            <Button label="Form Sheet" variant="outlined-focused" size="small" onPress={() => setFormVisible(true)} />
          </View>

          <BottomSheet visible={visible} onClose={() => setVisible(false)} title="기록 삭제" showHandle>
            <View style={{
            gap: spacing.medium
          }}>
              <Text style={{
              fontSize: fontSize.medium,
              color: semanticColor.textSecondary
            }}>
                이 기록을 삭제하시겠습니까?
              </Text>
              <Button label="삭제" variant="primary" size="medium" onPress={() => setVisible(false)} />
              <Button label="취소" variant="sub" size="medium" onPress={() => setVisible(false)} />
            </View>
          </BottomSheet>

          <BottomSheet visible={formVisible} onClose={() => setFormVisible(false)} title="목표 설정" showHandle>
            <View style={{
            gap: spacing.medium
          }}>
              <TextField label="목표명" placeholder="예: 하루 물 2L 마시기" />
              <Button label="저장" variant="primary" size="medium" onPress={() => setFormVisible(false)} />
            </View>
          </BottomSheet>
        </Section>
      </View>;
  }
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 BottomSheet 컨테이너 스펙입니다. 내부 Button/TextField/Checkbox의 토큰은 각 컴포넌트 문서를 참조하세요." badge="디자인">
        <TokenSpecTable title="bottom sheet / container" rows={[{
        property: 'Container 배경색',
        token: CONTAINER_TOKEN_MAP.background.token,
        value: CONTAINER_TOKEN_MAP.background.value,
        type: 'color'
      }, {
        property: 'Container 상단 라디우스',
        token: CONTAINER_TOKEN_MAP.radiusTop.token,
        value: CONTAINER_TOKEN_MAP.radiusTop.value,
        type: 'size'
      }, {
        property: 'Title 색상',
        token: CONTAINER_TOKEN_MAP.titleColor.token,
        value: CONTAINER_TOKEN_MAP.titleColor.value,
        type: 'color'
      }, {
        property: 'Title 타이포',
        token: 'Headline',
        value: \`\${textStyle.headline.fontSize}px / \${textStyle.headline.lineHeight}px / \${textStyle.headline.fontWeight}\`,
        type: 'typography'
      }, {
        property: '좌우 패딩',
        token: CONTAINER_TOKEN_MAP.paddingH.token,
        value: CONTAINER_TOKEN_MAP.paddingH.value,
        type: 'size'
      }, {
        property: 'Title 상하 패딩',
        token: CONTAINER_TOKEN_MAP.paddingV.token,
        value: CONTAINER_TOKEN_MAP.paddingV.value,
        type: 'size'
      }, {
        property: 'Content 하단 패딩',
        token: CONTAINER_TOKEN_MAP.contentPadB.token,
        value: CONTAINER_TOKEN_MAP.contentPadB.value,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="bottom sheet / drag handle" rows={[{
        property: 'Handle 배경색',
        token: HANDLE_TOKEN_MAP.background.token,
        value: HANDLE_TOKEN_MAP.background.value,
        type: 'color'
      }, {
        property: 'Handle 라디우스',
        token: HANDLE_TOKEN_MAP.radius.token,
        value: HANDLE_TOKEN_MAP.radius.value,
        type: 'size'
      }, {
        property: 'Handle 상단 여백',
        token: HANDLE_TOKEN_MAP.topMargin.token,
        value: HANDLE_TOKEN_MAP.topMargin.value,
        type: 'size'
      }, {
        property: 'Handle 너비',
        token: '—',
        value: '40'
      }, {
        property: 'Handle 높이',
        token: '—',
        value: '4'
      }]} />

        <Divider />

        <TokenSpecTable title="bottom sheet / scrim" rows={[{
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

        <TokenSpecTable title="bottom sheet / animation (권장값)" rows={[{
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
        property: '등장 방향',
        token: '—',
        value: 'translateY(100%) → translateY(0)'
      }, {
        property: 'Duration',
        token: '—',
        value: '300ms'
      }, {
        property: 'Easing',
        token: '—',
        value: 'cubic-bezier(0.32, 0.72, 0, 1)'
      }]} />

        <Divider />

        <TokenSpecTable title="내부 컴포넌트 참조" rows={[{
        property: 'Button',
        token: 'Button (solid)',
        value: '→ General/Button 문서 참조'
      }, {
        property: 'TextField',
        token: 'TextField',
        value: '→ Input/TextField 문서 참조'
      }, {
        property: 'Checkbox',
        token: 'Checkbox',
        value: '→ Input/Checkbox 문서 참조'
      }]} />
      </Section>
    </View>
}`,...X.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="필터 선택 — 인라인 BottomSheet 미리보기입니다. 건강 기록 필터를 선택하는 시나리오입니다.">
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
            건강 기록
          </Text>
          <SheetPreview title="기록 필터" showHandle>
            <View style={{
            gap: spacing.small
          }}>
              <Checkbox state="checked" label="식단 기록" />
              <Checkbox state="unchecked" label="수면 기록" />
              <Checkbox state="checked" label="운동 기록" />
              <Checkbox state="unchecked" label="영양제 기록" />
              <View style={{
              marginTop: spacing.medium
            }}>
                <Button label="필터 적용" variant="primary" size="medium" />
              </View>
            </View>
          </SheetPreview>
        </View>
      </Section>
    </View>
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 BottomSheet 컴포넌트 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { BottomSheet } from '@design-system/components/BottomSheet';
import { Button } from '@design-system/components/Button';\`} />

        <CodeBlock title="기본 Action Sheet" code={\`const [visible, setVisible] = useState(false);

<BottomSheet
  visible={visible}
  onClose={() => setVisible(false)}
  title="기록 삭제"
  showHandle
>
  <Text>이 기록을 삭제하시겠습니까?</Text>
  <Button label="삭제" onPress={handleDelete} />
  <Button label="취소" variant="sub" onPress={() => setVisible(false)} />
</BottomSheet>\`} />

        <CodeBlock title="Form Sheet" code={\`<BottomSheet visible={visible} onClose={close} title="목표 설정" showHandle>
  <TextField label="목표명" placeholder="예: 하루 물 2L" />
  <TextField label="메모" multiline minHeight={60} />
  <Button label="저장" onPress={handleSave} />
</BottomSheet>\`} />

        <CodeBlock title="Safe Area 대응" code={\`import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { bottom } = useSafeAreaInsets();

<BottomSheet
  visible={visible}
  onClose={close}
  safeAreaBottom={bottom}
>
  {children}
</BottomSheet>\`} />
      </Section>
    </View>
}`,...ee.parameters?.docs?.source}}};const it=["Playground","HandleVariants","WithCloseButton","ActionSheet","FormSheet","ListSheet","CheckboxSheet","Interactive","DesignSpec","InContext","Usage"];export{U as ActionSheet,J as CheckboxSheet,X as DesignSpec,j as FormSheet,$ as HandleVariants,Z as InContext,Q as Interactive,G as ListSheet,q as Playground,ee as Usage,Y as WithCloseButton,it as __namedExportsOrder,nt as default};
