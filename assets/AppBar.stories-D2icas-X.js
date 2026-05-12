import{R as e,V as a,s as M}from"./iframe-rdsxNJ7l.js";import{I as q}from"./Icon-DGfD0Qtj.js";import{c as l,T as m,s as r,j as $,f as G,a as o,M as j,r as L}from"./theme-KAxj7l-q.js";import{S as i,D as H,b as u,a as y,C as b}from"./storyHelpers-D5HpvNsw.js";import{T as N}from"./TokenSpecTable-CJp3A6kK.js";import{F as U}from"./index-BAQ2jOn_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";import"./index-BFVMpTcU.js";import"./index-LHpOlSgp.js";const X=56,h=r.xsmall,B=44,O=3;function Z({onPress:c,label:s="뒤로 가기"}){return e.createElement(j,{onPress:c,accessibilityRole:"button",accessibilityLabel:s,style:({pressed:d})=>[n.iconButton,d&&n.iconButtonPressed]},e.createElement(q,{name:"caret-left",size:24,color:l.iconPrimary}))}function J({onPress:c,label:s="닫기"}){return e.createElement(j,{onPress:c,accessibilityRole:"button",accessibilityLabel:s,style:({pressed:d})=>[n.iconButton,d&&n.iconButtonPressed]},e.createElement(q,{name:"x-circle",size:24,color:l.iconPrimary}))}function K({name:c,onPress:s,label:d}){return e.createElement(j,{onPress:s,accessibilityRole:"button",accessibilityLabel:d,style:({pressed:p})=>[n.iconButton,p&&n.iconButtonPressed]},e.createElement(q,{name:c,size:24,color:l.iconPrimary}))}function t({title:c,titleAlign:s="left",leading:d,trailing:p,showDivider:_=!0,variant:Q="default"}){const R=e.useMemo(()=>{if(!p)return[];const g=Array.isArray(p)?p:[p];return g.length>O?(console.warn(`AppBar: trailing은 최대 ${O}개입니다.`),g.slice(0,O)):g},[p]),F=s==="center",f=!!d,z=R.length;return e.createElement(a,{style:[n.container,{backgroundColor:l.backgroundPrimary}],accessibilityRole:"header"},F?e.createElement(a,{style:n.row},e.createElement(a,{style:[n.sideSlot,{minWidth:Math.max(f?B:0,z*B)+h}]},d),e.createElement(a,{style:n.centerTitle},e.createElement(m,{style:[n.titleText,{textAlign:"center"}],numberOfLines:1,accessibilityRole:"header"},c)),e.createElement(a,{style:[n.sideSlot,n.sideSlotEnd,{minWidth:Math.max(f?B:0,z*B)+h}]},R.map((g,P)=>e.createElement(e.Fragment,{key:P},g)))):e.createElement(a,{style:n.row},f&&e.createElement(a,{style:[n.sideSlot,{paddingLeft:h}]},d),e.createElement(a,{style:[n.leftTitle,!f&&{paddingLeft:r.large}]},e.createElement(m,{style:[n.titleText,{textAlign:"left"}],numberOfLines:1,accessibilityRole:"header"},c)),z>0&&e.createElement(a,{style:[n.sideSlot,n.sideSlotEnd,{paddingRight:h}]},R.map((g,P)=>e.createElement(e.Fragment,{key:P},g)))),_&&e.createElement(a,{style:n.divider}))}t.BackButton=Z;t.CloseButton=J;t.IconAction=K;const n=M.create({container:{width:"100%",height:X,position:"relative"},row:{flex:1,flexDirection:"row",alignItems:"center"},sideSlot:{flexDirection:"row",alignItems:"center",flexShrink:0},sideSlotEnd:{justifyContent:"flex-end"},centerTitle:{flex:1,alignItems:"center",justifyContent:"center",paddingHorizontal:r.xsmall},leftTitle:{flex:1,justifyContent:"center",paddingHorizontal:r.small},titleText:{fontSize:o.headline.fontSize,lineHeight:o.headline.lineHeight,fontWeight:G.semibold,color:l.textPrimary},iconButton:{width:B,height:B,alignItems:"center",justifyContent:"center"},iconButtonPressed:{opacity:$.pressOpacity},divider:{position:"absolute",bottom:0,left:0,right:0,height:1,backgroundColor:l.borderDefault}});t.__docgenInfo={description:"",methods:[{name:"BackButton",docblock:null,modifiers:["static"],params:[{name:"{ onPress, label = '뒤로 가기' }: { onPress?: () => void; label?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ onPress?: () => void; label?: string }",signature:{properties:[{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"label",value:{name:"string",required:!1}}]}}}],returns:null},{name:"CloseButton",docblock:null,modifiers:["static"],params:[{name:"{ onPress, label = '닫기' }: { onPress?: () => void; label?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ onPress?: () => void; label?: string }",signature:{properties:[{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"label",value:{name:"string",required:!1}}]}}}],returns:null},{name:"IconAction",docblock:null,modifiers:["static"],params:[{name:"{ name, onPress, label }: { name: string; onPress?: () => void; label: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ name: string; onPress?: () => void; label: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"onPress",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"label",value:{name:"string",required:!0}}]}}}],returns:null}],displayName:"AppBar",props:{title:{required:!1,tsType:{name:"string"},description:"화면 제목"},titleAlign:{required:!1,tsType:{name:"union",raw:"'left' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"}]},description:"타이틀 정렬",defaultValue:{value:"'left'",computed:!1}},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"좌측 슬롯 (보통 BackButton / CloseButton)"},trailing:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:"우측 슬롯 (최대 3개)"},showDivider:{required:!1,tsType:{name:"boolean"},description:"하단 구분선 표시 여부",defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'transparent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'transparent'"}]},description:"배경 변형",defaultValue:{value:"'default'",computed:!1}}}};const de={title:"Navigation/AppBar",component:t,argTypes:{title:{control:"text",description:"화면 제목"},titleAlign:{control:"select",options:["left","center"],description:"타이틀 정렬"},showDivider:{control:"boolean",description:"하단 구분선"},variant:{control:"select",options:["default","transparent"],description:"배경 변형"}},tags:["autodocs"]},k={render:()=>e.createElement(a,{style:{maxWidth:375,borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"홈",titleAlign:"left",leading:e.createElement(t.BackButton,null),trailing:e.createElement(t.IconAction,{name:"bell",label:"알림"}),showDivider:!0})),parameters:{docs:{description:{story:"**적용 토큰**: 배경 `color/background/status`, 텍스트 `color/text/primary`, 구분선 `color/border/default`, 타이포 `Headline` (17px SemiBold)"}}}},A={name:"Default (타이틀만)",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"Default",description:"타이틀만 있는 가장 단순한 형태입니다."},e.createElement(a,{style:{maxWidth:375,borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"설정"}))))},w={name:"BackButton + 중앙 정렬",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"BackButton + 중앙 정렬",description:"leading에 BackButton, titleAlign='center'"},e.createElement(a,{style:{maxWidth:375,borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"프로필 수정",titleAlign:"center",leading:e.createElement(t.BackButton,null),showDivider:!0}))))},E={name:"Trailing 액션",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"Trailing 액션",description:"우측 액션 버튼 1~3개 케이스입니다."},e.createElement(a,{style:{gap:r.xlarge,maxWidth:375}},e.createElement(u,{gap:r.small},e.createElement(y,null,"1개"),e.createElement(a,{style:{borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"홈",leading:e.createElement(t.BackButton,null),trailing:e.createElement(t.IconAction,{name:"bell",label:"알림"})}))),e.createElement(u,{gap:r.small},e.createElement(y,null,"2개"),e.createElement(a,{style:{borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"홈",leading:e.createElement(t.BackButton,null),trailing:[e.createElement(t.IconAction,{key:"search",name:"magnifying-glass",label:"검색"}),e.createElement(t.IconAction,{key:"bell",name:"bell",label:"알림"})]}))),e.createElement(u,{gap:r.small},e.createElement(y,null,"3개 (최대)"),e.createElement(a,{style:{borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"홈",leading:e.createElement(t.BackButton,null),trailing:[e.createElement(t.IconAction,{key:"search",name:"magnifying-glass",label:"검색"}),e.createElement(t.IconAction,{key:"share",name:"share-network",label:"공유"}),e.createElement(t.IconAction,{key:"bell",name:"bell",label:"알림"})]}))))))},x={name:"전체 예시",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"Full Example",description:"leading + title + trailing 3개 + showDivider 전부 포함된 케이스입니다."},e.createElement(a,{style:{maxWidth:375,borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"건강 리포트",titleAlign:"center",leading:e.createElement(t.BackButton,null),trailing:[e.createElement(t.IconAction,{key:"search",name:"magnifying-glass",label:"검색"}),e.createElement(t.IconAction,{key:"share",name:"share-network",label:"공유"}),e.createElement(t.IconAction,{key:"bell",name:"bell",label:"알림"})],showDivider:!0}))))},S={name:"Long Title (말줄임)",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"Long Title",description:"긴 타이틀이 trailing 액션과 겹치지 않고 말줄임 처리되는지 확인합니다."},e.createElement(a,{style:{gap:r.xlarge,maxWidth:375}},e.createElement(u,{gap:r.small},e.createElement(y,null,"left 정렬 + trailing 3개"),e.createElement(a,{style:{borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"아주 긴 타이틀이 들어가는 화면의 제목입니다",titleAlign:"left",leading:e.createElement(t.BackButton,null),trailing:[e.createElement(t.IconAction,{key:"1",name:"magnifying-glass",label:"검색"}),e.createElement(t.IconAction,{key:"2",name:"share-network",label:"공유"}),e.createElement(t.IconAction,{key:"3",name:"bell",label:"알림"})]}))),e.createElement(u,{gap:r.small},e.createElement(y,null,"center 정렬 + trailing 3개"),e.createElement(a,{style:{borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"아주 긴 타이틀이 들어가는 화면의 제목입니다",titleAlign:"center",leading:e.createElement(t.BackButton,null),trailing:[e.createElement(t.IconAction,{key:"1",name:"magnifying-glass",label:"검색"}),e.createElement(t.IconAction,{key:"2",name:"share-network",label:"공유"}),e.createElement(t.IconAction,{key:"3",name:"bell",label:"알림"})]}))))))},C={name:"투명 배경",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"Transparent",description:"배경 이미지 위에 투명 AppBar를 올린 케이스입니다."},e.createElement(a,{style:{maxWidth:375,borderRadius:r.small,overflow:"hidden",backgroundColor:l.backgroundInverse,height:200}},e.createElement(t,{title:"사진 상세",titleAlign:"center",variant:"transparent",leading:e.createElement(t.BackButton,null),trailing:e.createElement(t.IconAction,{name:"share-network",label:"공유"})}),e.createElement(a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},e.createElement(m,{style:{color:l.textOnColor,fontSize:o.caption.fontSize}},"배경 이미지 영역")))))},v={name:"Title 정렬 비교",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"Title 정렬 비교",description:"left vs center 정렬을 비교합니다."},e.createElement(a,{style:{gap:r.xlarge,maxWidth:375}},e.createElement(u,{gap:r.small},e.createElement(y,null,"left (기본)"),e.createElement(a,{style:{borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"설정",titleAlign:"left",leading:e.createElement(t.BackButton,null),showDivider:!0}))),e.createElement(u,{gap:r.small},e.createElement(y,null,"center"),e.createElement(a,{style:{borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"설정",titleAlign:"center",leading:e.createElement(t.BackButton,null),showDivider:!0}))))))},I={name:"닫기 버튼",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"CloseButton",description:"모달/풀스크린 닫기용 CloseButton 프리셋입니다."},e.createElement(a,{style:{maxWidth:375,borderWidth:1,borderColor:l.borderDefault,borderRadius:r.small,overflow:"hidden"}},e.createElement(t,{title:"약관 동의",titleAlign:"center",leading:e.createElement(t.CloseButton,null),showDivider:!0}))))},V={name:"On Screen",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"On Screen",description:"모바일 화면(375px) 상단에 놓인 모습을 시뮬레이션합니다."},e.createElement(a,{style:{width:375,height:600,borderWidth:1,borderColor:l.borderDefault,borderRadius:r.medium,overflow:"hidden",backgroundColor:l.backgroundSecondary}},e.createElement(t,{title:"건강 대시보드",leading:e.createElement(t.BackButton,null),trailing:[e.createElement(t.IconAction,{key:"search",name:"magnifying-glass",label:"검색"}),e.createElement(t.IconAction,{key:"bell",name:"bell",label:"알림"})],showDivider:!0}),e.createElement(U,{style:{flex:1,padding:r.large}},Array.from({length:8},(c,s)=>e.createElement(a,{key:s,style:{height:80,backgroundColor:l.backgroundPrimary,borderRadius:r.small,marginBottom:r.medium,padding:r.large,justifyContent:"center"}},e.createElement(m,{style:{color:l.textSecondary,fontSize:o.body2.fontSize}},"콘텐츠 카드 ",s+1)))))))},T={name:"디자인 스펙",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"디자인 스펙",description:"AppBar 토큰 스펙입니다. Figma 디자인 없이 자체 정의한 값입니다.",badge:"디자인"},e.createElement(N,{title:"색상 토큰",rows:[{property:"배경 (default)",token:"color/background/status",value:l.backgroundPrimary,type:"color"},{property:"배경 (transparent)",token:"—",value:"transparent"},{property:"타이틀 텍스트",token:"color/text/primary",value:l.textPrimary,type:"color"},{property:"아이콘",token:"color/icon/primary",value:l.iconPrimary,type:"color"},{property:"구분선",token:"color/border/default",value:l.borderDefault,type:"color"}]}),e.createElement(H,null),e.createElement(N,{title:"레이아웃 스펙",rows:[{property:"높이",token:"—",value:56,type:"size"},{property:"좌우 패딩",token:"spacing/xsmall",value:r.xsmall,type:"size"},{property:"아이콘 버튼 크기",token:"—",value:"44×44",type:"size"},{property:"아이콘 크기",token:"—",value:24,type:"size"},{property:"Trailing gap",token:"spacing/xsmall",value:r.xsmall,type:"size"},{property:"Trailing 최대",token:"—",value:"3개"},{property:"구분선 높이",token:"—",value:1,type:"size"}]}),e.createElement(H,null),e.createElement(N,{title:"타이포그래피",rows:[{property:"Medium 타이틀",token:"Headline",value:`${o.headline.fontSize}px / ${o.headline.lineHeight}px / ${o.headline.fontWeight}`,type:"typography"}]})))},D={name:"실전 예시",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"실전 예시",description:"건강 대시보드 상단바 — AppBar 아래 콘텐츠 카드가 배치된 모바일 화면 시뮬레이션입니다."},e.createElement(a,{style:{maxWidth:375,padding:r.xlarge,backgroundColor:l.backgroundPrimary,borderRadius:L.large,borderWidth:1,borderColor:l.borderDefault}},e.createElement(t,{title:"건강 대시보드",leading:e.createElement(t.BackButton,null),trailing:[e.createElement(t.IconAction,{key:"search",name:"magnifying-glass",label:"검색"}),e.createElement(t.IconAction,{key:"bell",name:"bell",label:"알림"})],showDivider:!0}),e.createElement(a,{style:{gap:r.medium,marginTop:r.large}},e.createElement(a,{style:{backgroundColor:l.backgroundSecondary,borderRadius:L.medium,padding:r.large,gap:r.small}},e.createElement(m,{style:{fontSize:o.headline.fontSize,fontWeight:"600",color:l.textPrimary}},"오늘의 건강 점수"),e.createElement(m,{style:{fontSize:o.title2.fontSize,fontWeight:"700",color:l.textBrand}},"85점"),e.createElement(m,{style:{fontSize:o.caption.fontSize,color:l.textSecondary}},"어제보다 5점 상승")),e.createElement(a,{style:{backgroundColor:l.backgroundSecondary,borderRadius:L.medium,padding:r.large,gap:r.small}},e.createElement(m,{style:{fontSize:o.headline.fontSize,fontWeight:"600",color:l.textPrimary}},"수분 섭취"),e.createElement(m,{style:{fontSize:o.body1.fontSize,color:l.textSecondary}},"1,200mL / 2,000mL"))))))},W={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:r["3xlarge"]}},e.createElement(i,{title:"사용 가이드",description:"개발자를 위한 AppBar 사용 예시입니다.",badge:"개발"},e.createElement(b,{title:"Import",code:"import { AppBar } from '@design-system/components/AppBar';"}),e.createElement(b,{title:"기본 사용",code:'<AppBar title="설정" />'}),e.createElement(b,{title:"BackButton + 중앙 정렬",code:`<AppBar
  title="프로필 수정"
  titleAlign="center"
  leading={<AppBar.BackButton onPress={navigation.goBack} />}
  showDivider
/>`}),e.createElement(b,{title:"Trailing 액션",code:`<AppBar
  title="홈"
  leading={<AppBar.BackButton onPress={goBack} />}
  trailing={[
    <AppBar.IconAction name="magnifying-glass" label="검색" onPress={openSearch} />,
    <AppBar.IconAction name="bell" label="알림" onPress={openNotifications} />,
  ]}
/>`}),e.createElement(b,{title:"Transparent (배경 이미지 위)",code:`<ImageBackground source={heroImage}>
  <AppBar
    title="사진 상세"
    variant="transparent"
    leading={<AppBar.BackButton />}
  />
</ImageBackground>`}),e.createElement(b,{title:"CloseButton (모달용)",code:`<AppBar
  title="약관 동의"
  titleAlign="center"
  leading={<AppBar.CloseButton onPress={closeModal} />}
/>`})))};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    maxWidth: 375,
    borderWidth: 1,
    borderColor: semanticColor.borderDefault,
    borderRadius: spacing.small,
    overflow: 'hidden'
  }}>
      <AppBar title="홈" titleAlign="left" leading={<AppBar.BackButton />} trailing={<AppBar.IconAction name="bell" label="알림" />} showDivider />
    </View>,
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 배경 \`color/background/status\`, 텍스트 \`color/text/primary\`, 구분선 \`color/border/default\`, 타이포 \`Headline\` (17px SemiBold)'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Default (타이틀만)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Default" description="타이틀만 있는 가장 단순한 형태입니다.">
        <View style={{
        maxWidth: 375,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: spacing.small,
        overflow: 'hidden'
      }}>
          <AppBar title="설정" />
        </View>
      </Section>
    </View>
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'BackButton + 중앙 정렬',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="BackButton + 중앙 정렬" description="leading에 BackButton, titleAlign='center'">
        <View style={{
        maxWidth: 375,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: spacing.small,
        overflow: 'hidden'
      }}>
          <AppBar title="프로필 수정" titleAlign="center" leading={<AppBar.BackButton />} showDivider />
        </View>
      </Section>
    </View>
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Trailing 액션',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Trailing 액션" description="우측 액션 버튼 1~3개 케이스입니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>1개</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: spacing.small,
            overflow: 'hidden'
          }}>
              <AppBar title="홈" leading={<AppBar.BackButton />} trailing={<AppBar.IconAction name="bell" label="알림" />} />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>2개</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: spacing.small,
            overflow: 'hidden'
          }}>
              <AppBar title="홈" leading={<AppBar.BackButton />} trailing={[<AppBar.IconAction key="search" name="magnifying-glass" label="검색" />, <AppBar.IconAction key="bell" name="bell" label="알림" />]} />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>3개 (최대)</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: spacing.small,
            overflow: 'hidden'
          }}>
              <AppBar title="홈" leading={<AppBar.BackButton />} trailing={[<AppBar.IconAction key="search" name="magnifying-glass" label="검색" />, <AppBar.IconAction key="share" name="share-network" label="공유" />, <AppBar.IconAction key="bell" name="bell" label="알림" />]} />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '전체 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Full Example" description="leading + title + trailing 3개 + showDivider 전부 포함된 케이스입니다.">
        <View style={{
        maxWidth: 375,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: spacing.small,
        overflow: 'hidden'
      }}>
          <AppBar title="건강 리포트" titleAlign="center" leading={<AppBar.BackButton />} trailing={[<AppBar.IconAction key="search" name="magnifying-glass" label="검색" />, <AppBar.IconAction key="share" name="share-network" label="공유" />, <AppBar.IconAction key="bell" name="bell" label="알림" />]} showDivider />
        </View>
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Long Title (말줄임)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Long Title" description="긴 타이틀이 trailing 액션과 겹치지 않고 말줄임 처리되는지 확인합니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>left 정렬 + trailing 3개</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: spacing.small,
            overflow: 'hidden'
          }}>
              <AppBar title="아주 긴 타이틀이 들어가는 화면의 제목입니다" titleAlign="left" leading={<AppBar.BackButton />} trailing={[<AppBar.IconAction key="1" name="magnifying-glass" label="검색" />, <AppBar.IconAction key="2" name="share-network" label="공유" />, <AppBar.IconAction key="3" name="bell" label="알림" />]} />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>center 정렬 + trailing 3개</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: spacing.small,
            overflow: 'hidden'
          }}>
              <AppBar title="아주 긴 타이틀이 들어가는 화면의 제목입니다" titleAlign="center" leading={<AppBar.BackButton />} trailing={[<AppBar.IconAction key="1" name="magnifying-glass" label="검색" />, <AppBar.IconAction key="2" name="share-network" label="공유" />, <AppBar.IconAction key="3" name="bell" label="알림" />]} />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '투명 배경',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Transparent" description="배경 이미지 위에 투명 AppBar를 올린 케이스입니다.">
        <View style={{
        maxWidth: 375,
        borderRadius: spacing.small,
        overflow: 'hidden',
        backgroundColor: semanticColor.backgroundInverse,
        height: 200
      }}>
          <AppBar title="사진 상세" titleAlign="center" variant="transparent" leading={<AppBar.BackButton />} trailing={<AppBar.IconAction name="share-network" label="공유" />} />
          <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            <Text style={{
            color: semanticColor.textOnColor,
            fontSize: textStyle.caption.fontSize
          }}>배경 이미지 영역</Text>
          </View>
        </View>
      </Section>
    </View>
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Title 정렬 비교',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Title 정렬 비교" description="left vs center 정렬을 비교합니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>left (기본)</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: spacing.small,
            overflow: 'hidden'
          }}>
              <AppBar title="설정" titleAlign="left" leading={<AppBar.BackButton />} showDivider />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>center</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: spacing.small,
            overflow: 'hidden'
          }}>
              <AppBar title="설정" titleAlign="center" leading={<AppBar.BackButton />} showDivider />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '닫기 버튼',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="CloseButton" description="모달/풀스크린 닫기용 CloseButton 프리셋입니다.">
        <View style={{
        maxWidth: 375,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: spacing.small,
        overflow: 'hidden'
      }}>
          <AppBar title="약관 동의" titleAlign="center" leading={<AppBar.CloseButton />} showDivider />
        </View>
      </Section>
    </View>
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'On Screen',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="On Screen" description="모바일 화면(375px) 상단에 놓인 모습을 시뮬레이션합니다.">
        <View style={{
        width: 375,
        height: 600,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: spacing.medium,
        overflow: 'hidden',
        backgroundColor: semanticColor.backgroundSecondary
      }}>
          <AppBar title="건강 대시보드" leading={<AppBar.BackButton />} trailing={[<AppBar.IconAction key="search" name="magnifying-glass" label="검색" />, <AppBar.IconAction key="bell" name="bell" label="알림" />]} showDivider />
          <ScrollView style={{
          flex: 1,
          padding: spacing.large
        }}>
            {Array.from({
            length: 8
          }, (_, i) => <View key={i} style={{
            height: 80,
            backgroundColor: semanticColor.backgroundPrimary,
            borderRadius: spacing.small,
            marginBottom: spacing.medium,
            padding: spacing.large,
            justifyContent: 'center'
          }}>
                <Text style={{
              color: semanticColor.textSecondary,
              fontSize: textStyle.body2.fontSize
            }}>
                  콘텐츠 카드 {i + 1}
                </Text>
              </View>)}
          </ScrollView>
        </View>
      </Section>
    </View>
}`,...V.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="AppBar 토큰 스펙입니다. Figma 디자인 없이 자체 정의한 값입니다." badge="디자인">
        <TokenSpecTable title="색상 토큰" rows={[{
        property: '배경 (default)',
        token: 'color/background/status',
        value: semanticColor.backgroundPrimary,
        type: 'color'
      }, {
        property: '배경 (transparent)',
        token: '—',
        value: 'transparent'
      }, {
        property: '타이틀 텍스트',
        token: 'color/text/primary',
        value: semanticColor.textPrimary,
        type: 'color'
      }, {
        property: '아이콘',
        token: 'color/icon/primary',
        value: semanticColor.iconPrimary,
        type: 'color'
      }, {
        property: '구분선',
        token: 'color/border/default',
        value: semanticColor.borderDefault,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="레이아웃 스펙" rows={[{
        property: '높이',
        token: '—',
        value: 56,
        type: 'size'
      }, {
        property: '좌우 패딩',
        token: 'spacing/xsmall',
        value: spacing.xsmall,
        type: 'size'
      }, {
        property: '아이콘 버튼 크기',
        token: '—',
        value: '44×44',
        type: 'size'
      }, {
        property: '아이콘 크기',
        token: '—',
        value: 24,
        type: 'size'
      }, {
        property: 'Trailing gap',
        token: 'spacing/xsmall',
        value: spacing.xsmall,
        type: 'size'
      }, {
        property: 'Trailing 최대',
        token: '—',
        value: '3개'
      }, {
        property: '구분선 높이',
        token: '—',
        value: 1,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="타이포그래피" rows={[{
        property: 'Medium 타이틀',
        token: 'Headline',
        value: \`\${textStyle.headline.fontSize}px / \${textStyle.headline.lineHeight}px / \${textStyle.headline.fontWeight}\`,
        type: 'typography'
      }]} />
      </Section>
    </View>
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="건강 대시보드 상단바 — AppBar 아래 콘텐츠 카드가 배치된 모바일 화면 시뮬레이션입니다.">
        <View style={{
        maxWidth: 375,
        padding: spacing.xlarge,
        backgroundColor: semanticColor.backgroundPrimary,
        borderRadius: radius.large,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault
      }}>
          <AppBar title="건강 대시보드" leading={<AppBar.BackButton />} trailing={[<AppBar.IconAction key="search" name="magnifying-glass" label="검색" />, <AppBar.IconAction key="bell" name="bell" label="알림" />]} showDivider />
          <View style={{
          gap: spacing.medium,
          marginTop: spacing.large
        }}>
            <View style={{
            backgroundColor: semanticColor.backgroundSecondary,
            borderRadius: radius.medium,
            padding: spacing.large,
            gap: spacing.small
          }}>
              <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary
            }}>
                오늘의 건강 점수
              </Text>
              <Text style={{
              fontSize: textStyle.title2.fontSize,
              fontWeight: '700',
              color: semanticColor.textBrand
            }}>
                85점
              </Text>
              <Text style={{
              fontSize: textStyle.caption.fontSize,
              color: semanticColor.textSecondary
            }}>
                어제보다 5점 상승
              </Text>
            </View>
            <View style={{
            backgroundColor: semanticColor.backgroundSecondary,
            borderRadius: radius.medium,
            padding: spacing.large,
            gap: spacing.small
          }}>
              <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary
            }}>
                수분 섭취
              </Text>
              <Text style={{
              fontSize: textStyle.body1.fontSize,
              color: semanticColor.textSecondary
            }}>
                1,200mL / 2,000mL
              </Text>
            </View>
          </View>
        </View>
      </Section>
    </View>
}`,...D.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 AppBar 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { AppBar } from '@design-system/components/AppBar';\`} />

        <CodeBlock title="기본 사용" code={\`<AppBar title="설정" />\`} />

        <CodeBlock title="BackButton + 중앙 정렬" code={\`<AppBar
  title="프로필 수정"
  titleAlign="center"
  leading={<AppBar.BackButton onPress={navigation.goBack} />}
  showDivider
/>\`} />

        <CodeBlock title="Trailing 액션" code={\`<AppBar
  title="홈"
  leading={<AppBar.BackButton onPress={goBack} />}
  trailing={[
    <AppBar.IconAction name="magnifying-glass" label="검색" onPress={openSearch} />,
    <AppBar.IconAction name="bell" label="알림" onPress={openNotifications} />,
  ]}
/>\`} />

        <CodeBlock title="Transparent (배경 이미지 위)" code={\`<ImageBackground source={heroImage}>
  <AppBar
    title="사진 상세"
    variant="transparent"
    leading={<AppBar.BackButton />}
  />
</ImageBackground>\`} />

        <CodeBlock title="CloseButton (모달용)" code={\`<AppBar
  title="약관 동의"
  titleAlign="center"
  leading={<AppBar.CloseButton onPress={closeModal} />}
/>\`} />
      </Section>
    </View>
}`,...W.parameters?.docs?.source}}};const me=["Playground","Default","WithBackButton","WithActions","FullExample","LongTitle","Transparent","TitleAlignment","WithCloseButton","OnScreen","DesignSpec","InContext","Usage"];export{A as Default,T as DesignSpec,x as FullExample,D as InContext,S as LongTitle,V as OnScreen,k as Playground,v as TitleAlignment,C as Transparent,W as Usage,E as WithActions,w as WithBackButton,I as WithCloseButton,me as __namedExportsOrder,de as default};
