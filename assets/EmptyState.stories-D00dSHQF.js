import{R as e,V as o,s as A}from"./iframe-rdsxNJ7l.js";import{I as L}from"./Icon-DGfD0Qtj.js";import{c as r,T as h,s as t,f as g,a as i,r as n}from"./theme-KAxj7l-q.js";import{B as W}from"./Button-DT9-49YQ.js";import{S as C,D as y,b as d,a as m,C as f}from"./storyHelpers-D5HpvNsw.js";import{T as c}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";function l({icon:s,illustration:V,title:z,description:w,actionLabel:k,onAction:v}){return e.createElement(o,{style:p.container,accessibilityRole:"none"},V||s&&e.createElement(o,{style:p.iconWrap},e.createElement(L,{name:s,size:48,color:r.iconDisabled})),e.createElement(h,{style:p.title},z),w&&e.createElement(h,{style:p.description},w),k&&v&&e.createElement(o,{style:p.actionWrap},e.createElement(W,{label:k,variant:"primary",size:"medium",onPress:v})))}const p=A.create({container:{alignItems:"center",justifyContent:"center",paddingVertical:t["4xlarge"],paddingHorizontal:t["2xlarge"],gap:t.small},iconWrap:{marginBottom:t.medium},title:{fontSize:i.headline.fontSize,lineHeight:i.headline.lineHeight,fontWeight:g.semibold,color:r.textPrimary,textAlign:"center"},description:{fontSize:i.body2.fontSize,lineHeight:i.body2.lineHeight,fontWeight:g.regular,color:r.textSecondary,textAlign:"center"},actionWrap:{marginTop:t.xlarge}});l.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"string"},description:"아이콘 이름 (Icon 컴포넌트 name)"},illustration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"커스텀 아이콘 (ReactNode, icon prop 대신 사용)"},title:{required:!0,tsType:{name:"string"},description:"제목"},description:{required:!1,tsType:{name:"string"},description:"설명"},actionLabel:{required:!1,tsType:{name:"string"},description:"CTA 버튼 라벨"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"CTA 클릭"}}};const K={title:"Feedback/EmptyState",component:l,argTypes:{title:{control:"text"},description:{control:"text"},icon:{control:"text"},actionLabel:{control:"text"}},tags:["autodocs"]},u={render:()=>e.createElement(o,{style:{maxWidth:375,borderWidth:1,borderColor:r.borderDefault,borderRadius:n.small}},e.createElement(l,{icon:"magnifying-glass",title:"검색 결과가 없어요",description:"다른 검색어를 입력해보세요."}))},E={name:"다양한 케이스",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(C,{title:"다양한 케이스",description:"아이콘, 설명, CTA 조합을 확인합니다."},e.createElement(o,{style:{gap:t.xlarge,maxWidth:375}},e.createElement(d,{gap:t.small},e.createElement(m,null,"아이콘 + 제목 + 설명"),e.createElement(o,{style:{borderWidth:1,borderColor:r.borderDefault,borderRadius:n.small}},e.createElement(l,{icon:"magnifying-glass",title:"검색 결과가 없어요",description:"다른 검색어를 입력해보세요."}))),e.createElement(d,{gap:t.small},e.createElement(m,null,"아이콘 + 제목 + CTA"),e.createElement(o,{style:{borderWidth:1,borderColor:r.borderDefault,borderRadius:n.small}},e.createElement(l,{icon:"plus",title:"아직 기록이 없어요",description:"오늘 첫 식단을 기록해보세요.",actionLabel:"기록 시작하기",onAction:()=>{}}))),e.createElement(d,{gap:t.small},e.createElement(m,null,"제목만"),e.createElement(o,{style:{borderWidth:1,borderColor:r.borderDefault,borderRadius:n.small}},e.createElement(l,{title:"데이터가 없습니다"}))))))},a={icon:{color:"color/icon/disabled",size:"48dp"},title:{color:"color/text/primary",typo:"Headline"},description:{color:"color/text/secondary",typo:"Body 2"},cta:{component:"Button (solid / primary / medium)"}},N={"color/icon/disabled":r.iconDisabled,"color/text/primary":r.textPrimary,"color/text/secondary":r.textSecondary},T=s=>N[s]??s,b={name:"실전 예시",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(C,{title:"실전 예시",description:"실제 화면에서 EmptyState가 배치되는 맥락을 확인합니다."},e.createElement(o,{style:{gap:t["2xlarge"],maxWidth:375}},e.createElement(d,{gap:t.small},e.createElement(m,null,"식단 기록 리스트"),e.createElement(o,{style:{borderWidth:1,borderColor:r.borderDefault,borderRadius:n.large,overflow:"hidden"}},e.createElement(o,{style:{backgroundColor:r.backgroundPrimary,paddingHorizontal:t.xlarge,paddingVertical:t.medium,borderBottomWidth:1,borderBottomColor:r.borderDefault}},e.createElement(h,{style:{fontSize:i.headline.fontSize,fontWeight:g.semibold,color:r.textPrimary}},"오늘의 식단")),e.createElement(l,{icon:"plus",title:"오늘 기록된 식단이 없어요",description:"첫 끼니를 기록하고 영양 분석을 시작해보세요.",actionLabel:"식단 기록하기",onAction:()=>{}}))),e.createElement(d,{gap:t.small},e.createElement(m,null,"목표 미설정"),e.createElement(o,{style:{borderWidth:1,borderColor:r.borderDefault,borderRadius:n.large,backgroundColor:r.backgroundPrimary,paddingHorizontal:t.xlarge,paddingVertical:t.xlarge}},e.createElement(l,{icon:"star",title:"건강 목표를 설정해주세요",description:"목표를 설정하면 맞춤 관리를 시작할 수 있어요.",actionLabel:"목표 설정하기",onAction:()=>{}}))))))},x={name:"디자인 스펙",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(C,{title:"디자인 스펙",description:"Figma 시맨틱 토큰 기준 EmptyState 구성 요소별 스펙입니다.",badge:"디자인"},e.createElement(c,{title:"아이콘",rows:[{property:"색상",token:a.icon.color,value:T(a.icon.color),type:"color"},{property:"크기",token:a.icon.size,value:48,type:"size"}]}),e.createElement(y,null),e.createElement(c,{title:"제목",rows:[{property:"색상",token:a.title.color,value:T(a.title.color),type:"color"},{property:"타이포",token:a.title.typo,value:`${i.headline.fontSize}px / ${i.headline.lineHeight}px / ${g.semibold}`,type:"typography"}]}),e.createElement(y,null),e.createElement(c,{title:"설명",rows:[{property:"색상",token:a.description.color,value:T(a.description.color),type:"color"},{property:"타이포",token:a.description.typo,value:`${i.body2.fontSize}px / ${i.body2.lineHeight}px / ${g.regular}`,type:"typography"}]}),e.createElement(y,null),e.createElement(c,{title:"CTA 버튼",rows:[{property:"컴포넌트",token:a.cta.component,value:"Button",type:"typography"}]}),e.createElement(y,null),e.createElement(c,{title:"레이아웃",rows:[{property:"상하 패딩",token:"spacing/4xlarge",value:t["4xlarge"],type:"size"},{property:"좌우 패딩",token:"spacing/2xlarge",value:t["2xlarge"],type:"size"},{property:"요소 간 gap",token:"spacing/small",value:t.small,type:"size"},{property:"아이콘-제목 간격",token:"spacing/medium",value:t.medium,type:"size"},{property:"설명-CTA 간격",token:"spacing/xlarge",value:t.xlarge,type:"size"}]})))},S={name:"사용 가이드",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(C,{title:"사용 가이드",badge:"개발"},e.createElement(f,{title:"Import",code:"import { EmptyState } from '@design-system/components/EmptyState';"}),e.createElement(f,{title:"기본 사용",code:`<EmptyState
  icon="plus"
  title="아직 기록이 없어요"
  description="오늘 첫 식단을 기록해보세요."
  actionLabel="기록 시작하기"
  onAction={handleCreate}
/>`}),e.createElement(f,{title:"아이콘 + 설명만 (CTA 없음)",code:`<EmptyState
  icon="magnifying-glass"
  title="검색 결과가 없어요"
  description="다른 검색어를 입력해보세요."
/>`})))};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    maxWidth: 375,
    borderWidth: 1,
    borderColor: semanticColor.borderDefault,
    borderRadius: radius.small
  }}>
      <EmptyState icon="magnifying-glass" title="검색 결과가 없어요" description="다른 검색어를 입력해보세요." />
    </View>
}`,...u.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '다양한 케이스',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="다양한 케이스" description="아이콘, 설명, CTA 조합을 확인합니다.">
        <View style={{
        gap: spacing.xlarge,
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>아이콘 + 제목 + 설명</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: radius.small
          }}>
              <EmptyState icon="magnifying-glass" title="검색 결과가 없어요" description="다른 검색어를 입력해보세요." />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>아이콘 + 제목 + CTA</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: radius.small
          }}>
              <EmptyState icon="plus" title="아직 기록이 없어요" description="오늘 첫 식단을 기록해보세요." actionLabel="기록 시작하기" onAction={() => {}} />
            </View>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>제목만</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: radius.small
          }}>
              <EmptyState title="데이터가 없습니다" />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="실제 화면에서 EmptyState가 배치되는 맥락을 확인합니다.">
        <View style={{
        gap: spacing['2xlarge'],
        maxWidth: 375
      }}>
          {/* 식단 기록 빈 상태 */}
          <Col gap={spacing.small}>
            <StateLabel>식단 기록 리스트</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: radius.large,
            overflow: 'hidden'
          }}>
              <View style={{
              backgroundColor: semanticColor.backgroundPrimary,
              paddingHorizontal: spacing.xlarge,
              paddingVertical: spacing.medium,
              borderBottomWidth: 1,
              borderBottomColor: semanticColor.borderDefault
            }}>
                <Text style={{
                fontSize: textStyle.headline.fontSize,
                fontWeight: fw.semibold,
                color: semanticColor.textPrimary
              }}>
                  오늘의 식단
                </Text>
              </View>
              <EmptyState icon="plus" title="오늘 기록된 식단이 없어요" description="첫 끼니를 기록하고 영양 분석을 시작해보세요." actionLabel="식단 기록하기" onAction={() => {}} />
            </View>
          </Col>

          {/* 목표 미설정 */}
          <Col gap={spacing.small}>
            <StateLabel>목표 미설정</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: radius.large,
            backgroundColor: semanticColor.backgroundPrimary,
            paddingHorizontal: spacing.xlarge,
            paddingVertical: spacing.xlarge
          }}>
              <EmptyState icon="star" title="건강 목표를 설정해주세요" description="목표를 설정하면 맞춤 관리를 시작할 수 있어요." actionLabel="목표 설정하기" onAction={() => {}} />
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 시맨틱 토큰 기준 EmptyState 구성 요소별 스펙입니다." badge="디자인">
        <TokenSpecTable title="아이콘" rows={[{
        property: '색상',
        token: ELEMENT_TOKEN_MAP.icon.color,
        value: resolve(ELEMENT_TOKEN_MAP.icon.color),
        type: 'color'
      }, {
        property: '크기',
        token: ELEMENT_TOKEN_MAP.icon.size,
        value: 48,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="제목" rows={[{
        property: '색상',
        token: ELEMENT_TOKEN_MAP.title.color,
        value: resolve(ELEMENT_TOKEN_MAP.title.color),
        type: 'color'
      }, {
        property: '타이포',
        token: ELEMENT_TOKEN_MAP.title.typo,
        value: \`\${textStyle.headline.fontSize}px / \${textStyle.headline.lineHeight}px / \${fw.semibold}\`,
        type: 'typography'
      }]} />

        <Divider />

        <TokenSpecTable title="설명" rows={[{
        property: '색상',
        token: ELEMENT_TOKEN_MAP.description.color,
        value: resolve(ELEMENT_TOKEN_MAP.description.color),
        type: 'color'
      }, {
        property: '타이포',
        token: ELEMENT_TOKEN_MAP.description.typo,
        value: \`\${textStyle.body2.fontSize}px / \${textStyle.body2.lineHeight}px / \${fw.regular}\`,
        type: 'typography'
      }]} />

        <Divider />

        <TokenSpecTable title="CTA 버튼" rows={[{
        property: '컴포넌트',
        token: ELEMENT_TOKEN_MAP.cta.component,
        value: 'Button',
        type: 'typography'
      }]} />

        <Divider />

        <TokenSpecTable title="레이아웃" rows={[{
        property: '상하 패딩',
        token: 'spacing/4xlarge',
        value: spacing['4xlarge'],
        type: 'size'
      }, {
        property: '좌우 패딩',
        token: 'spacing/2xlarge',
        value: spacing['2xlarge'],
        type: 'size'
      }, {
        property: '요소 간 gap',
        token: 'spacing/small',
        value: spacing.small,
        type: 'size'
      }, {
        property: '아이콘-제목 간격',
        token: 'spacing/medium',
        value: spacing.medium,
        type: 'size'
      }, {
        property: '설명-CTA 간격',
        token: 'spacing/xlarge',
        value: spacing.xlarge,
        type: 'size'
      }]} />
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { EmptyState } from '@design-system/components/EmptyState';\`} />
        <CodeBlock title="기본 사용" code={\`<EmptyState\\n  icon="plus"\\n  title="아직 기록이 없어요"\\n  description="오늘 첫 식단을 기록해보세요."\\n  actionLabel="기록 시작하기"\\n  onAction={handleCreate}\\n/>\`} />
        <CodeBlock title="아이콘 + 설명만 (CTA 없음)" code={\`<EmptyState\\n  icon="magnifying-glass"\\n  title="검색 결과가 없어요"\\n  description="다른 검색어를 입력해보세요."\\n/>\`} />
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};const I=["Playground","Variants","InContext","DesignSpec","Usage"];export{x as DesignSpec,b as InContext,u as Playground,S as Usage,E as Variants,I as __namedExportsOrder,K as default};
