import{R as e,V as r,s as I}from"./iframe-rdsxNJ7l.js";import{I as W}from"./Icon-DGfD0Qtj.js";import{c as t,M as _,d as B,s as a,r as v,T as y,j as H,f as $,a as i}from"./theme-KAxj7l-q.js";import{S as d,R as N,b as l,a as n,D as L,C as g}from"./storyHelpers-D5HpvNsw.js";import{T as F}from"./TokenSpecTable-CJp3A6kK.js";import{F as j}from"./index-BAQ2jOn_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";import"./index-BFVMpTcU.js";import"./index-LHpOlSgp.js";const V=56,q=24,M=a.large,U=a.small,G=V/2,X=v.large,P={primary:{background:t.backgroundBrand,backgroundPressed:t.backgroundBrandPressed,content:t.iconOnColor},secondary:{background:t.backgroundTertiary,backgroundPressed:t.backgroundOff,content:t.textPrimary}};function o({variant:u="regular",color:s="primary",iconName:R,label:m,onPress:T,disabled:p=!1,accessibilityLabel:z}){const c=u==="extended",A=p?{background:t.backgroundDisabled,content:t.textTertiary}:P[s];!c&&m&&console.warn("FAB: regular variant에 label을 전달했습니다. label은 extended에서만 표시됩니다."),c&&R&&!m&&console.warn("FAB: extended variant에 label이 없습니다. 아이콘만 사용하려면 regular variant를 권장합니다."),!c&&!z&&console.warn("FAB: regular FAB에는 accessibilityLabel이 필수입니다.");const O={height:V,borderRadius:c?X:G,backgroundColor:A.background,...c?{paddingHorizontal:M,alignSelf:"flex-start"}:{width:V},...p?{}:B.level2};return e.createElement(_,{onPress:T,disabled:p,accessibilityRole:"button",accessibilityLabel:z||m,accessibilityState:{disabled:p},style:({pressed:D})=>[b.base,O,D&&!p&&{backgroundColor:(P[s]||P.primary).backgroundPressed},D&&!p&&b.pressed]},e.createElement(r,{style:[b.content,c&&{gap:U}]},e.createElement(W,{name:R,size:q,color:A.content}),c&&m&&e.createElement(y,{style:[b.label,{color:A.content}],numberOfLines:1},m)))}const b=I.create({base:{alignItems:"center",justifyContent:"center"},content:{flexDirection:"row",alignItems:"center",justifyContent:"center"},label:{fontSize:i.label1.fontSize,lineHeight:i.label1.lineHeight,fontWeight:$.medium},pressed:{opacity:H.pressOpacity}});o.__docgenInfo={description:"",methods:[],displayName:"FAB",props:{variant:{required:!1,tsType:{name:"union",raw:"'regular' | 'extended'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'extended'"}]},description:"FAB 형태",defaultValue:{value:"'regular'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"색상",defaultValue:{value:"'primary'",computed:!1}},iconName:{required:!0,tsType:{name:"string"},description:"아이콘 이름 (iconRegistry 경유)"},label:{required:!1,tsType:{name:"string"},description:"라벨 텍스트 (extended에서만 표시)"},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 콜백"},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화",defaultValue:{value:"false",computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"접근성 라벨 (regular FAB는 필수)"}}};const ne={title:"Actions/FAB",component:o,argTypes:{variant:{control:"select",options:["regular","extended"],description:"FAB 형태"},color:{control:"select",options:["primary","secondary"],description:"색상"},label:{control:"text",description:"라벨 (extended에서만)"},disabled:{control:"boolean",description:"비활성화"}},tags:["autodocs"]},x={render:()=>e.createElement(N,{gap:a.xlarge,align:"center"},e.createElement(o,{iconName:"plus",onPress:()=>{},accessibilityLabel:"새 기록 추가"}),e.createElement(o,{variant:"extended",iconName:"plus",label:"작성하기",onPress:()=>{}})),parameters:{docs:{description:{story:"**적용 토큰**: 배경 `color/background/brand`, 콘텐츠 `color/text/onColor`, 그림자 `shadow.level2`, radius 28(regular) / 16(extended)"}}}},S={name:"Regular FAB",render:()=>e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"Regular FAB",description:"원형 FAB. 아이콘만 포함합니다. accessibilityLabel 필수."},e.createElement(N,{gap:a.xlarge,align:"center"},e.createElement(l,{gap:a.small},e.createElement(n,null,"Primary"),e.createElement(o,{iconName:"plus",onPress:()=>{},color:"primary",accessibilityLabel:"추가"})),e.createElement(l,{gap:a.small},e.createElement(n,null,"Secondary"),e.createElement(o,{iconName:"plus",onPress:()=>{},color:"secondary",accessibilityLabel:"추가"})),e.createElement(l,{gap:a.small},e.createElement(n,null,"Disabled"),e.createElement(o,{iconName:"plus",onPress:()=>{},disabled:!0,accessibilityLabel:"추가"})))))},E={name:"Extended FAB",render:()=>e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"Extended FAB",description:"아이콘 + 라벨 텍스트를 포함한 pill 형태 FAB입니다."},e.createElement(r,{style:{gap:a.xlarge}},e.createElement(l,{gap:a.small},e.createElement(n,null,"Primary"),e.createElement(o,{variant:"extended",iconName:"plus",label:"새 기록 작성",onPress:()=>{},color:"primary"})),e.createElement(l,{gap:a.small},e.createElement(n,null,"Secondary"),e.createElement(o,{variant:"extended",iconName:"plus",label:"새 기록 작성",onPress:()=>{},color:"secondary"})),e.createElement(l,{gap:a.small},e.createElement(n,null,"Disabled"),e.createElement(o,{variant:"extended",iconName:"plus",label:"새 기록 작성",onPress:()=>{},disabled:!0})))))},C={name:"Colors 비교",render:()=>e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"Colors 비교",description:"Primary(브랜드)와 Secondary(중립) 색상을 비교합니다."},e.createElement(r,{style:{gap:a.xlarge}},e.createElement(N,{gap:a["2xlarge"],align:"center"},e.createElement(l,{gap:a.small},e.createElement(n,null,"Regular Primary"),e.createElement(o,{iconName:"plus",onPress:()=>{},color:"primary",accessibilityLabel:"추가"})),e.createElement(l,{gap:a.small},e.createElement(n,null,"Regular Secondary"),e.createElement(o,{iconName:"plus",onPress:()=>{},color:"secondary",accessibilityLabel:"추가"}))),e.createElement(L,null),e.createElement(l,{gap:a.small},e.createElement(n,null,"Extended Primary"),e.createElement(o,{variant:"extended",iconName:"plus",label:"작성하기",onPress:()=>{},color:"primary"})),e.createElement(l,{gap:a.small},e.createElement(n,null,"Extended Secondary"),e.createElement(o,{variant:"extended",iconName:"plus",label:"작성하기",onPress:()=>{},color:"secondary"})))))},f={name:"On Screen",render:()=>e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"On Screen",description:"모바일 화면(375px) 하단에 FAB이 배치된 모습을 시뮬레이션합니다."},e.createElement(r,{style:{flexDirection:"row",gap:a.xlarge}},e.createElement(r,{style:{width:375,height:500,borderWidth:1,borderColor:t.borderDefault,borderRadius:a.medium,overflow:"hidden",backgroundColor:t.backgroundSecondary,position:"relative"}},e.createElement(r,{style:{height:56,backgroundColor:t.backgroundPrimary,justifyContent:"center",paddingHorizontal:a.large,borderBottomWidth:1,borderBottomColor:t.borderDefault}},e.createElement(y,{style:{fontSize:i.headline.fontSize,fontWeight:"600",color:t.textPrimary}},"건강 대시보드")),e.createElement(j,{style:{flex:1,padding:a.large}},Array.from({length:6},(u,s)=>e.createElement(r,{key:s,style:{height:64,backgroundColor:t.backgroundPrimary,borderRadius:a.small,marginBottom:a.medium,padding:a.large,justifyContent:"center"}},e.createElement(y,{style:{color:t.textSecondary,fontSize:i.body2.fontSize}},"기록 항목 ",s+1)))),e.createElement(r,{style:{position:"absolute",bottom:a.large,right:a.large}},e.createElement(o,{iconName:"plus",onPress:()=>{},accessibilityLabel:"새 기록 추가"}))))))},h={name:"디자인 스펙",render:()=>e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"디자인 스펙",description:"Material Design 3 기반 FAB 스펙입니다. Figma 디자인 없이 자체 정의한 값입니다.",badge:"디자인"},e.createElement(F,{title:"Regular FAB",rows:[{property:"컨테이너 크기",token:"—",value:"56×56",type:"size"},{property:"아이콘 크기",token:"—",value:24,type:"size"},{property:"코너 라디우스",token:"—",value:28,type:"size"},{property:"그림자",token:"shadow/level2",value:`offset(0,${B.level2.shadowOffset.height}) blur(${B.level2.shadowRadius}) opacity(${B.level2.shadowOpacity})`}]}),e.createElement(L,null),e.createElement(F,{title:"Extended FAB",rows:[{property:"높이",token:"—",value:56,type:"size"},{property:"좌우 패딩",token:"spacing/large",value:a.large,type:"size"},{property:"아이콘-라벨 gap",token:"spacing/small",value:a.small,type:"size"},{property:"코너 라디우스",token:"borderRadius/large",value:v.large,type:"size"},{property:"라벨 타이포",token:"Label 1",value:`${i.label1.fontSize}px / ${i.label1.lineHeight}px / Medium`,type:"typography"}]}),e.createElement(L,null),e.createElement(F,{title:"색상 토큰",rows:[{property:"Primary 배경",token:"color/background/brand",value:t.backgroundBrand,type:"color"},{property:"Primary 콘텐츠",token:"color/text/onColor",value:t.textOnColor,type:"color"},{property:"Secondary 배경",token:"color/background/tertiary",value:t.backgroundTertiary,type:"color"},{property:"Secondary 콘텐츠",token:"color/text/primary",value:t.textPrimary,type:"color"},{property:"Disabled 배경",token:"color/background/disabled",value:t.backgroundDisabled,type:"color"},{property:"Disabled 콘텐츠",token:"color/text/tertiary",value:t.textTertiary,type:"color"}]})))},k={name:"실전 예시",render:()=>e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"실전 예시",description:"실제 화면에서 FAB이 배치되는 맥락을 확인합니다."},e.createElement(r,{style:{gap:a["2xlarge"],maxWidth:375}},e.createElement(l,{gap:a.small},e.createElement(n,null,"식단 기록 화면 하단"),e.createElement(r,{style:{borderWidth:1,borderColor:t.borderDefault,borderRadius:v.large,padding:a.xlarge,backgroundColor:t.backgroundPrimary,height:320,position:"relative"}},e.createElement(y,{style:{fontSize:i.headline.fontSize,fontWeight:i.headline.fontWeight,color:t.textPrimary,marginBottom:a.medium}},"오늘의 식단"),["아침 · 토스트, 샐러드","점심 · 현미밥, 된장찌개"].map((u,s)=>e.createElement(r,{key:s,style:{height:56,backgroundColor:t.backgroundSecondary,borderRadius:v.small,marginBottom:a.small,paddingHorizontal:a.large,justifyContent:"center"}},e.createElement(y,{style:{fontSize:i.body2.fontSize,color:t.textSecondary}},u))),e.createElement(r,{style:{position:"absolute",bottom:a.large,right:a.large}},e.createElement(o,{variant:"extended",iconName:"plus",label:"기록하기",onPress:()=>{}})))))))},w={name:"사용 가이드",render:()=>e.createElement(r,{style:{gap:a["3xlarge"]}},e.createElement(d,{title:"사용 가이드",description:"개발자를 위한 FAB 사용 예시입니다.",badge:"개발"},e.createElement(g,{title:"Import",code:"import { FAB } from '@design-system/components/FAB';"}),e.createElement(g,{title:"Regular FAB (아이콘만)",code:`<FAB
  iconName="plus"
  onPress={handleCreate}
  accessibilityLabel="새 기록 추가"
/>`}),e.createElement(g,{title:"Extended FAB (아이콘 + 라벨)",code:`<FAB
  variant="extended"
  iconName="plus"
  label="작성하기"
  onPress={handleCreate}
/>`}),e.createElement(g,{title:"화면 배치 예시",code:`<View style={{ flex: 1 }}>
  {/* 메인 콘텐츠 */}
  <FlatList data={items} renderItem={renderItem} />

  {/* FAB: 우하단 고정 */}
  <View style={{
    position: 'absolute',
    bottom: spacing.large,  // 16
    right: spacing.large,   // 16
  }}>
    <FAB
      iconName="plus"
      onPress={handleCreate}
      accessibilityLabel="새 기록 추가"
    />
  </View>
</View>`}),e.createElement(g,{title:"Secondary 색상",code:`<FAB
  color="secondary"
  iconName="magnifying-glass"
  onPress={handleSearch}
  accessibilityLabel="검색"
/>`})))};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Row gap={spacing.xlarge} align="center">
      <FAB iconName="plus" onPress={() => {}} accessibilityLabel="새 기록 추가" />
      <FAB variant="extended" iconName="plus" label="작성하기" onPress={() => {}} />
    </Row>,
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 배경 \`color/background/brand\`, 콘텐츠 \`color/text/onColor\`, 그림자 \`shadow.level2\`, radius 28(regular) / 16(extended)'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Regular FAB',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Regular FAB" description="원형 FAB. 아이콘만 포함합니다. accessibilityLabel 필수.">
        <Row gap={spacing.xlarge} align="center">
          <Col gap={spacing.small}>
            <StateLabel>Primary</StateLabel>
            <FAB iconName="plus" onPress={() => {}} color="primary" accessibilityLabel="추가" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Secondary</StateLabel>
            <FAB iconName="plus" onPress={() => {}} color="secondary" accessibilityLabel="추가" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <FAB iconName="plus" onPress={() => {}} disabled accessibilityLabel="추가" />
          </Col>
        </Row>
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Extended FAB',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Extended FAB" description="아이콘 + 라벨 텍스트를 포함한 pill 형태 FAB입니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Primary</StateLabel>
            <FAB variant="extended" iconName="plus" label="새 기록 작성" onPress={() => {}} color="primary" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Secondary</StateLabel>
            <FAB variant="extended" iconName="plus" label="새 기록 작성" onPress={() => {}} color="secondary" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Disabled</StateLabel>
            <FAB variant="extended" iconName="plus" label="새 기록 작성" onPress={() => {}} disabled />
          </Col>
        </View>
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Colors 비교',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Colors 비교" description="Primary(브랜드)와 Secondary(중립) 색상을 비교합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Row gap={spacing['2xlarge']} align="center">
            <Col gap={spacing.small}>
              <StateLabel>Regular Primary</StateLabel>
              <FAB iconName="plus" onPress={() => {}} color="primary" accessibilityLabel="추가" />
            </Col>
            <Col gap={spacing.small}>
              <StateLabel>Regular Secondary</StateLabel>
              <FAB iconName="plus" onPress={() => {}} color="secondary" accessibilityLabel="추가" />
            </Col>
          </Row>

          <Divider />

          <Col gap={spacing.small}>
            <StateLabel>Extended Primary</StateLabel>
            <FAB variant="extended" iconName="plus" label="작성하기" onPress={() => {}} color="primary" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Extended Secondary</StateLabel>
            <FAB variant="extended" iconName="plus" label="작성하기" onPress={() => {}} color="secondary" />
          </Col>
        </View>
      </Section>
    </View>
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'On Screen',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="On Screen" description="모바일 화면(375px) 하단에 FAB이 배치된 모습을 시뮬레이션합니다.">
        <View style={{
        flexDirection: 'row',
        gap: spacing.xlarge
      }}>
          {/* Regular FAB */}
          <View style={{
          width: 375,
          height: 500,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          borderRadius: spacing.medium,
          overflow: 'hidden',
          backgroundColor: semanticColor.backgroundSecondary,
          position: 'relative'
        }}>
            <View style={{
            height: 56,
            backgroundColor: semanticColor.backgroundPrimary,
            justifyContent: 'center',
            paddingHorizontal: spacing.large,
            borderBottomWidth: 1,
            borderBottomColor: semanticColor.borderDefault
          }}>
              <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: '600',
              color: semanticColor.textPrimary
            }}>건강 대시보드</Text>
            </View>
            <ScrollView style={{
            flex: 1,
            padding: spacing.large
          }}>
              {Array.from({
              length: 6
            }, (_, i) => <View key={i} style={{
              height: 64,
              backgroundColor: semanticColor.backgroundPrimary,
              borderRadius: spacing.small,
              marginBottom: spacing.medium,
              padding: spacing.large,
              justifyContent: 'center'
            }}>
                  <Text style={{
                color: semanticColor.textSecondary,
                fontSize: textStyle.body2.fontSize
              }}>기록 항목 {i + 1}</Text>
                </View>)}
            </ScrollView>
            <View style={{
            position: 'absolute',
            bottom: spacing.large,
            right: spacing.large
          }}>
              <FAB iconName="plus" onPress={() => {}} accessibilityLabel="새 기록 추가" />
            </View>
          </View>
        </View>
      </Section>
    </View>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Material Design 3 기반 FAB 스펙입니다. Figma 디자인 없이 자체 정의한 값입니다." badge="디자인">
        <TokenSpecTable title="Regular FAB" rows={[{
        property: '컨테이너 크기',
        token: '—',
        value: '56×56',
        type: 'size'
      }, {
        property: '아이콘 크기',
        token: '—',
        value: 24,
        type: 'size'
      }, {
        property: '코너 라디우스',
        token: '—',
        value: 28,
        type: 'size'
      }, {
        property: '그림자',
        token: 'shadow/level2',
        value: \`offset(0,\${shadow.level2.shadowOffset.height}) blur(\${shadow.level2.shadowRadius}) opacity(\${shadow.level2.shadowOpacity})\`
      }]} />

        <Divider />

        <TokenSpecTable title="Extended FAB" rows={[{
        property: '높이',
        token: '—',
        value: 56,
        type: 'size'
      }, {
        property: '좌우 패딩',
        token: 'spacing/large',
        value: spacing.large,
        type: 'size'
      }, {
        property: '아이콘-라벨 gap',
        token: 'spacing/small',
        value: spacing.small,
        type: 'size'
      }, {
        property: '코너 라디우스',
        token: 'borderRadius/large',
        value: radius.large,
        type: 'size'
      }, {
        property: '라벨 타이포',
        token: 'Label 1',
        value: \`\${textStyle.label1.fontSize}px / \${textStyle.label1.lineHeight}px / Medium\`,
        type: 'typography'
      }]} />

        <Divider />

        <TokenSpecTable title="색상 토큰" rows={[{
        property: 'Primary 배경',
        token: 'color/background/brand',
        value: semanticColor.backgroundBrand,
        type: 'color'
      }, {
        property: 'Primary 콘텐츠',
        token: 'color/text/onColor',
        value: semanticColor.textOnColor,
        type: 'color'
      }, {
        property: 'Secondary 배경',
        token: 'color/background/tertiary',
        value: semanticColor.backgroundTertiary,
        type: 'color'
      }, {
        property: 'Secondary 콘텐츠',
        token: 'color/text/primary',
        value: semanticColor.textPrimary,
        type: 'color'
      }, {
        property: 'Disabled 배경',
        token: 'color/background/disabled',
        value: semanticColor.backgroundDisabled,
        type: 'color'
      }, {
        property: 'Disabled 콘텐츠',
        token: 'color/text/tertiary',
        value: semanticColor.textTertiary,
        type: 'color'
      }]} />
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="실제 화면에서 FAB이 배치되는 맥락을 확인합니다.">
        <View style={{
        gap: spacing['2xlarge'],
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>식단 기록 화면 하단</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: radius.large,
            padding: spacing.xlarge,
            backgroundColor: semanticColor.backgroundPrimary,
            height: 320,
            position: 'relative' as const
          }}>
              <Text style={{
              fontSize: textStyle.headline.fontSize,
              fontWeight: textStyle.headline.fontWeight,
              color: semanticColor.textPrimary,
              marginBottom: spacing.medium
            }}>
                오늘의 식단
              </Text>
              {['아침 · 토스트, 샐러드', '점심 · 현미밥, 된장찌개'].map((item, i) => <View key={i} style={{
              height: 56,
              backgroundColor: semanticColor.backgroundSecondary,
              borderRadius: radius.small,
              marginBottom: spacing.small,
              paddingHorizontal: spacing.large,
              justifyContent: 'center'
            }}>
                  <Text style={{
                fontSize: textStyle.body2.fontSize,
                color: semanticColor.textSecondary
              }}>{item}</Text>
                </View>)}
              <View style={{
              position: 'absolute',
              bottom: spacing.large,
              right: spacing.large
            }}>
                <FAB variant="extended" iconName="plus" label="기록하기" onPress={() => {}} />
              </View>
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 FAB 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { FAB } from '@design-system/components/FAB';\`} />

        <CodeBlock title="Regular FAB (아이콘만)" code={\`<FAB
  iconName="plus"
  onPress={handleCreate}
  accessibilityLabel="새 기록 추가"
/>\`} />

        <CodeBlock title="Extended FAB (아이콘 + 라벨)" code={\`<FAB
  variant="extended"
  iconName="plus"
  label="작성하기"
  onPress={handleCreate}
/>\`} />

        <CodeBlock title="화면 배치 예시" code={\`<View style={{ flex: 1 }}>
  {/* 메인 콘텐츠 */}
  <FlatList data={items} renderItem={renderItem} />

  {/* FAB: 우하단 고정 */}
  <View style={{
    position: 'absolute',
    bottom: spacing.large,  // 16
    right: spacing.large,   // 16
  }}>
    <FAB
      iconName="plus"
      onPress={handleCreate}
      accessibilityLabel="새 기록 추가"
    />
  </View>
</View>\`} />

        <CodeBlock title="Secondary 색상" code={\`<FAB
  color="secondary"
  iconName="magnifying-glass"
  onPress={handleSearch}
  accessibilityLabel="검색"
/>\`} />
      </Section>
    </View>
}`,...w.parameters?.docs?.source}}};const ie=["Playground","Regular","Extended","Colors","OnScreen","DesignSpec","InContext","Usage"];export{C as Colors,h as DesignSpec,E as Extended,k as InContext,f as OnScreen,x as Playground,S as Regular,w as Usage,ie as __namedExportsOrder,ne as default};
