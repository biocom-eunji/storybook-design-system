import{R as e,V as t,s as q}from"./iframe-rdsxNJ7l.js";import{S as k}from"./Skeleton-kQ45jusu.js";import{r as f,T as V,M as N,j as O,c as a,f as L,a as l,s as r}from"./theme-KAxj7l-q.js";import{I as F}from"./index-BF5bKU7j.js";import{I as z}from"./Icon-DGfD0Qtj.js";import{S as s,b as v,a as T,D as H,C as d}from"./storyHelpers-D5HpvNsw.js";import{T as w}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-Dxl4hYIg.js";import"./index-0_7wxnUT.js";import"./index-BFVMpTcU.js";import"./index-BAQ2jOn_.js";import"./index-LHpOlSgp.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";const M=96,U=67,W=f.medium,R=r.medium,A=r.xsmall;function o({title:n,caption:c,imageSource:m,trailing:D,onPress:P,skeleton:_=!1}){if(_)return e.createElement(t,{style:i.container,accessibilityState:{busy:!0}},e.createElement(k,{variant:"rectangular",width:M,height:U,borderRadius:W}),e.createElement(t,{style:i.textWrap},e.createElement(k,{variant:"text",width:"75%"}),e.createElement(k,{variant:"text",width:"40%",height:14})));const I=e.createElement(t,{style:i.container},e.createElement(t,{style:i.thumbWrap},m?e.createElement(F,{source:m,style:i.thumbImage,resizeMode:"cover",accessibilityLabel:n}):e.createElement(t,{style:i.thumbPlaceholder}),e.createElement(t,{style:i.thumbBorder})),e.createElement(t,{style:i.contentWrap},e.createElement(t,{style:i.textWrap},e.createElement(V,{style:i.titleText,numberOfLines:2},n),c&&e.createElement(V,{style:i.captionText,numberOfLines:1},c)),D&&e.createElement(t,{style:i.trailingSlot,onStartShouldSetResponder:()=>!0},D)));return P?e.createElement(N,{onPress:P,accessibilityRole:"button",style:({pressed:$})=>[$&&i.pressed]},I):I}const i=q.create({container:{flexDirection:"row",alignItems:"center",gap:R},thumbWrap:{width:M,height:U,borderRadius:W,overflow:"hidden",position:"relative",flexShrink:0},thumbImage:{width:"100%",height:"100%"},thumbPlaceholder:{width:"100%",height:"100%",backgroundColor:a.backgroundSecondary},thumbBorder:{position:"absolute",top:0,left:0,right:0,bottom:0,borderRadius:W,borderWidth:1,borderColor:a.borderDefault},contentWrap:{flex:1,flexDirection:"row",alignItems:"center",gap:R},textWrap:{flex:1,gap:A},titleText:{fontSize:l.body2.fontSize,lineHeight:l.body2.lineHeight,fontWeight:L.regular,color:a.textPrimary},captionText:{fontSize:l.label2.fontSize,lineHeight:l.label2.lineHeight,fontWeight:L.medium,color:a.textSecondary},trailingSlot:{flexShrink:0},pressed:{opacity:O.pressOpacity}});o.__docgenInfo={description:"",methods:[],displayName:"ListCard",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},caption:{required:!1,tsType:{name:"string"},description:"캡션"},imageSource:{required:!1,tsType:{name:"ImageSourcePropType"},description:"썸네일 이미지"},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"우측 슬롯"},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 핸들러"},skeleton:{required:!1,tsType:{name:"boolean"},description:"스켈레톤 로딩",defaultValue:{value:"false",computed:!1}}}};const le={title:"Data Display/ListCard",component:o,argTypes:{title:{control:"text",description:"제목"},caption:{control:"text",description:"캡션"},skeleton:{control:"boolean",description:"스켈레톤 상태"}},tags:["autodocs"]},B=[{title:"건강한 아침 식단 가이드",caption:"식단 관리"},{title:"수면 패턴 분석 리포트",caption:"수면 리포트"},{title:"주간 운동 루틴 추천",caption:"운동"},{title:"영양제 섭취 타이밍 정리",caption:"영양제"}],p={render:()=>e.createElement(t,{style:{maxWidth:375}},e.createElement(o,{title:"건강한 아침 식단 가이드",caption:"식단 관리",onPress:()=>{}}))},g={name:"Default",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(s,{title:"Default",description:"썸네일 + 제목 + 캡션 기본 조합입니다."},e.createElement(t,{style:{maxWidth:375,gap:r.xlarge}},e.createElement(v,{gap:r.small},e.createElement(T,null,"제목 + 캡션"),e.createElement(o,{title:"건강한 아침 식단 가이드",caption:"식단 관리"})),e.createElement(v,{gap:r.small},e.createElement(T,null,"제목만"),e.createElement(o,{title:"수면 패턴 분석 리포트"})))))},u={name:"클릭 가능",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(s,{title:"클릭 가능",description:"onPress가 있으면 pressed 인터랙션이 적용됩니다."},e.createElement(t,{style:{maxWidth:375}},e.createElement(o,{title:"식단 기록 상세 보기",caption:"오늘의 식단",onPress:()=>{}}))))},y={name:"Trailing 슬롯",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(s,{title:"Trailing 슬롯",description:"우측에 아이콘이나 액션 요소를 배치합니다."},e.createElement(t,{style:{maxWidth:375}},e.createElement(o,{title:"건강한 아침 식단 가이드",caption:"식단 관리",trailing:e.createElement(z,{name:"caret-right",size:20,color:a.iconSecondary}),onPress:()=>{}}))))},b={name:"스켈레톤",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(s,{title:"스켈레톤",description:"로딩 중 플레이스홀더입니다. 기존 Skeleton 컴포넌트를 재사용합니다."},e.createElement(t,{style:{maxWidth:375,gap:r.large}},e.createElement(o,{title:"",skeleton:!0}),e.createElement(o,{title:"",caption:"",skeleton:!0}))))},h={name:"긴 제목",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(s,{title:"긴 제목",description:"제목이 2줄까지 표시되고 그 이상은 말줄임됩니다."},e.createElement(t,{style:{maxWidth:375}},e.createElement(o,{title:"아주 긴 제목이 들어가는 리스트 카드 항목으로 두 줄까지 표시되고 나머지는 잘립니다",caption:"식단 관리 · 오늘"}))))},x={name:"리스트 (실전)",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(s,{title:"리스트 (실전)",description:"여러 ListCard를 세로로 나열한 실제 사용 예시입니다. 일부는 스켈레톤."},e.createElement(t,{style:{maxWidth:375,borderWidth:1,borderColor:a.borderDefault,borderRadius:f.small,overflow:"hidden",backgroundColor:a.backgroundPrimary}},B.map((n,c)=>e.createElement(t,{key:c},e.createElement(t,{style:{paddingHorizontal:r.large,paddingVertical:r.medium}},e.createElement(o,{title:n.title,caption:n.caption,trailing:e.createElement(z,{name:"caret-right",size:20,color:a.iconSecondary}),onPress:()=>{}})),c<B.length-1&&e.createElement(t,{style:{height:1,backgroundColor:a.borderDefault,marginLeft:96+r.medium+r.large}}))),e.createElement(t,{style:{height:1,backgroundColor:a.borderDefault,marginLeft:96+r.medium+r.large}}),e.createElement(t,{style:{paddingHorizontal:r.large,paddingVertical:r.medium}},e.createElement(o,{title:"",caption:"",skeleton:!0})))))},S={name:"실전 예시",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(s,{title:"실전 예시",description:"실제 화면에서 ListCard가 배치되는 맥락을 확인합니다."},e.createElement(t,{style:{maxWidth:375}},e.createElement(v,{gap:r.small},e.createElement(T,null,"최근 기록"),e.createElement(t,{style:{borderWidth:1,borderColor:a.borderDefault,borderRadius:f.large,overflow:"hidden",backgroundColor:a.backgroundPrimary}},e.createElement(t,{style:{paddingHorizontal:r.xlarge,paddingVertical:r.medium,borderBottomWidth:1,borderBottomColor:a.borderDefault}},e.createElement(V,{style:{fontSize:l.headline.fontSize,fontWeight:L.semibold,color:a.textPrimary}},"최근 기록")),[{title:"오늘의 아침 식단",caption:"식단 · 08:30"},{title:"저녁 30분 조깅",caption:"운동 · 19:00"},{title:"수면 7시간 42분",caption:"수면 · 어젯밤"}].map((n,c,m)=>e.createElement(t,{key:n.title},e.createElement(t,{style:{paddingHorizontal:r.xlarge,paddingVertical:r.medium}},e.createElement(o,{title:n.title,caption:n.caption,trailing:e.createElement(z,{name:"caret-right",size:20,color:a.iconSecondary}),onPress:()=>{}})),c<m.length-1&&e.createElement(t,{style:{height:1,backgroundColor:a.borderDefault,marginLeft:96+r.medium+r.xlarge}}))))))))},C={name:"디자인 스펙",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(s,{title:"디자인 스펙",description:"Figma 기반 ListCard 스펙입니다. 외부 토큰은 우리 토큰으로 매핑되었습니다.",badge:"디자인"},e.createElement(w,{title:"색상 토큰",rows:[{property:"제목 텍스트",token:"color/text/primary",value:a.textPrimary,type:"color"},{property:"캡션 텍스트",token:"color/text/secondary",value:a.textSecondary,type:"color"},{property:"썸네일 테두리",token:"color/border/default",value:a.borderDefault,type:"color"},{property:"썸네일 배경",token:"color/background/secondary",value:a.backgroundSecondary,type:"color"},{property:"스켈레톤 배경",token:"color/background/disabled",value:a.backgroundDisabled,type:"color"}]}),e.createElement(H,null),e.createElement(w,{title:"레이아웃",rows:[{property:"썸네일 크기 (Mobile)",token:"—",value:"96 × 67",type:"size"},{property:"썸네일 라디우스",token:"borderRadius/medium",value:f.medium,type:"size"},{property:"썸네일-텍스트 gap",token:"spacing/medium",value:r.medium,type:"size"},{property:"콘텐츠 내부 gap",token:"spacing/xsmall",value:r.xsmall,type:"size"}]}),e.createElement(H,null),e.createElement(w,{title:"타이포그래피",rows:[{property:"제목",token:"Body 2",value:`${l.body2.fontSize}px / ${l.body2.lineHeight}px / Regular`,type:"typography"},{property:"캡션",token:"Label 2",value:`${l.label2.fontSize}px / ${l.label2.lineHeight}px / Medium`,type:"typography"}]})))},E={name:"사용 가이드",render:()=>e.createElement(t,{style:{gap:r["3xlarge"]}},e.createElement(s,{title:"사용 가이드",description:"개발자를 위한 ListCard 사용 예시입니다.",badge:"개발"},e.createElement(d,{title:"Import",code:"import { ListCard } from '@design-system/components/ListCard';"}),e.createElement(d,{title:"기본 사용",code:`<ListCard
  title="건강한 아침 식단 가이드"
  caption="식단 관리"
  onPress={() => navigate('detail')}
/>`}),e.createElement(d,{title:"Trailing 아이콘",code:`<ListCard
  title="수면 패턴 분석"
  caption="수면 리포트"
  trailing={<Icon name="caret-right" size={20} />}
  onPress={goDetail}
/>`}),e.createElement(d,{title:"스켈레톤 (로딩)",code:'<ListCard title="" caption="" skeleton />'}),e.createElement(d,{title:"리스트로 반복",code:`<FlatList
  data={items}
  renderItem={({ item }) => (
    <ListCard
      title={item.title}
      caption={item.caption}
      imageSource={{ uri: item.thumbnailUrl }}
      onPress={() => navigate(item.id)}
    />
  )}
/>`})))};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    maxWidth: 375
  }}>
      <ListCard title="건강한 아침 식단 가이드" caption="식단 관리" onPress={() => {}} />
    </View>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Default" description="썸네일 + 제목 + 캡션 기본 조합입니다.">
        <View style={{
        maxWidth: 375,
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>제목 + 캡션</StateLabel>
            <ListCard title="건강한 아침 식단 가이드" caption="식단 관리" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>제목만</StateLabel>
            <ListCard title="수면 패턴 분석 리포트" />
          </Col>
        </View>
      </Section>
    </View>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '클릭 가능',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="클릭 가능" description="onPress가 있으면 pressed 인터랙션이 적용됩니다.">
        <View style={{
        maxWidth: 375
      }}>
          <ListCard title="식단 기록 상세 보기" caption="오늘의 식단" onPress={() => {}} />
        </View>
      </Section>
    </View>
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Trailing 슬롯',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Trailing 슬롯" description="우측에 아이콘이나 액션 요소를 배치합니다.">
        <View style={{
        maxWidth: 375
      }}>
          <ListCard title="건강한 아침 식단 가이드" caption="식단 관리" trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
        </View>
      </Section>
    </View>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '스켈레톤',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="스켈레톤" description="로딩 중 플레이스홀더입니다. 기존 Skeleton 컴포넌트를 재사용합니다.">
        <View style={{
        maxWidth: 375,
        gap: spacing.large
      }}>
          <ListCard title="" skeleton />
          <ListCard title="" caption="" skeleton />
        </View>
      </Section>
    </View>
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '긴 제목',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="긴 제목" description="제목이 2줄까지 표시되고 그 이상은 말줄임됩니다.">
        <View style={{
        maxWidth: 375
      }}>
          <ListCard title="아주 긴 제목이 들어가는 리스트 카드 항목으로 두 줄까지 표시되고 나머지는 잘립니다" caption="식단 관리 · 오늘" />
        </View>
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '리스트 (실전)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="리스트 (실전)" description="여러 ListCard를 세로로 나열한 실제 사용 예시입니다. 일부는 스켈레톤.">
        <View style={{
        maxWidth: 375,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: radius.small,
        overflow: 'hidden',
        backgroundColor: semanticColor.backgroundPrimary
      }}>
          {sampleItems.map((item, i) => <View key={i}>
              <View style={{
            paddingHorizontal: spacing.large,
            paddingVertical: spacing.medium
          }}>
                <ListCard title={item.title} caption={item.caption} trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
              </View>
              {i < sampleItems.length - 1 && <View style={{
            height: 1,
            backgroundColor: semanticColor.borderDefault,
            marginLeft: 96 + spacing.medium + spacing.large
          }} />}
            </View>)}
          {/* Loading items */}
          <View style={{
          height: 1,
          backgroundColor: semanticColor.borderDefault,
          marginLeft: 96 + spacing.medium + spacing.large
        }} />
          <View style={{
          paddingHorizontal: spacing.large,
          paddingVertical: spacing.medium
        }}>
            <ListCard title="" caption="" skeleton />
          </View>
        </View>
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="실제 화면에서 ListCard가 배치되는 맥락을 확인합니다.">
        <View style={{
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>최근 기록</StateLabel>
            <View style={{
            borderWidth: 1,
            borderColor: semanticColor.borderDefault,
            borderRadius: radius.large,
            overflow: 'hidden',
            backgroundColor: semanticColor.backgroundPrimary
          }}>
              <View style={{
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
                  최근 기록
                </Text>
              </View>
              {[{
              title: '오늘의 아침 식단',
              caption: '식단 · 08:30'
            }, {
              title: '저녁 30분 조깅',
              caption: '운동 · 19:00'
            }, {
              title: '수면 7시간 42분',
              caption: '수면 · 어젯밤'
            }].map((item, i, arr) => <View key={item.title}>
                  <View style={{
                paddingHorizontal: spacing.xlarge,
                paddingVertical: spacing.medium
              }}>
                    <ListCard title={item.title} caption={item.caption} trailing={<Icon name="caret-right" size={20} color={semanticColor.iconSecondary} />} onPress={() => {}} />
                  </View>
                  {i < arr.length - 1 && <View style={{
                height: 1,
                backgroundColor: semanticColor.borderDefault,
                marginLeft: 96 + spacing.medium + spacing.xlarge
              }} />}
                </View>)}
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 기반 ListCard 스펙입니다. 외부 토큰은 우리 토큰으로 매핑되었습니다." badge="디자인">
        <TokenSpecTable title="색상 토큰" rows={[{
        property: '제목 텍스트',
        token: 'color/text/primary',
        value: semanticColor.textPrimary,
        type: 'color'
      }, {
        property: '캡션 텍스트',
        token: 'color/text/secondary',
        value: semanticColor.textSecondary,
        type: 'color'
      }, {
        property: '썸네일 테두리',
        token: 'color/border/default',
        value: semanticColor.borderDefault,
        type: 'color'
      }, {
        property: '썸네일 배경',
        token: 'color/background/secondary',
        value: semanticColor.backgroundSecondary,
        type: 'color'
      }, {
        property: '스켈레톤 배경',
        token: 'color/background/disabled',
        value: semanticColor.backgroundDisabled,
        type: 'color'
      }]} />

        <Divider />

        <TokenSpecTable title="레이아웃" rows={[{
        property: '썸네일 크기 (Mobile)',
        token: '—',
        value: '96 × 67',
        type: 'size'
      }, {
        property: '썸네일 라디우스',
        token: 'borderRadius/medium',
        value: radius.medium,
        type: 'size'
      }, {
        property: '썸네일-텍스트 gap',
        token: 'spacing/medium',
        value: spacing.medium,
        type: 'size'
      }, {
        property: '콘텐츠 내부 gap',
        token: 'spacing/xsmall',
        value: spacing.xsmall,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="타이포그래피" rows={[{
        property: '제목',
        token: 'Body 2',
        value: \`\${textStyle.body2.fontSize}px / \${textStyle.body2.lineHeight}px / Regular\`,
        type: 'typography'
      }, {
        property: '캡션',
        token: 'Label 2',
        value: \`\${textStyle.label2.fontSize}px / \${textStyle.label2.lineHeight}px / Medium\`,
        type: 'typography'
      }]} />
      </Section>
    </View>
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 ListCard 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { ListCard } from '@design-system/components/ListCard';\`} />

        <CodeBlock title="기본 사용" code={\`<ListCard
  title="건강한 아침 식단 가이드"
  caption="식단 관리"
  onPress={() => navigate('detail')}
/>\`} />

        <CodeBlock title="Trailing 아이콘" code={\`<ListCard
  title="수면 패턴 분석"
  caption="수면 리포트"
  trailing={<Icon name="caret-right" size={20} />}
  onPress={goDetail}
/>\`} />

        <CodeBlock title="스켈레톤 (로딩)" code={\`<ListCard title="" caption="" skeleton />\`} />

        <CodeBlock title="리스트로 반복" code={\`<FlatList
  data={items}
  renderItem={({ item }) => (
    <ListCard
      title={item.title}
      caption={item.caption}
      imageSource={{ uri: item.thumbnailUrl }}
      onPress={() => navigate(item.id)}
    />
  )}
/>\`} />
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};const se=["Playground","Default","Clickable","WithTrailing","SkeletonState","LongTitle","ListExample","InContext","DesignSpec","Usage"];export{u as Clickable,g as Default,C as DesignSpec,S as InContext,x as ListExample,h as LongTitle,p as Playground,b as SkeletonState,E as Usage,y as WithTrailing,se as __namedExportsOrder,le as default};
