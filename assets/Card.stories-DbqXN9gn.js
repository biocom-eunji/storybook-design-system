import{R as e,V as a,s as O}from"./iframe-rdsxNJ7l.js";import{S as y}from"./Skeleton-kQ45jusu.js";import{r as V,s as t,T as D,M as A,j as U,c as o,f as W,a as s}from"./theme-KAxj7l-q.js";import{I as G}from"./index-BF5bKU7j.js";import{S as c,R as g,b as l,a as n,D as I,C as m}from"./storyHelpers-D5HpvNsw.js";import{T as P}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";import"./Animated-Dxl4hYIg.js";import"./index-0_7wxnUT.js";import"./index-BFVMpTcU.js";import"./index-BAQ2jOn_.js";import"./index-LHpOlSgp.js";const j=152,N=75/152,R=V.medium,M=6,q=t.xsmall;function r({title:d,caption:p,subCaption:T,imageSource:L,onPress:z,skeleton:_=!1,width:u=j}){const B=Math.round(u*N);if(_)return e.createElement(a,{style:[i.container,{width:u,gap:M}],accessibilityState:{busy:!0}},e.createElement(y,{variant:"rectangular",width:u,height:B,borderRadius:R}),e.createElement(a,{style:[i.contentWrap,{gap:q}]},e.createElement(y,{variant:"text"}),p!==void 0&&e.createElement(y,{variant:"text",width:"75%",height:14}),T!==void 0&&e.createElement(y,{variant:"text",width:"50%",height:14})));const H=e.createElement(a,{style:[i.container,{width:u,gap:M}]},e.createElement(a,{style:[i.thumbWrap,{height:B}]},L?e.createElement(G,{source:L,style:i.thumbImage,resizeMode:"cover"}):e.createElement(a,{style:i.thumbPlaceholder}),e.createElement(a,{style:i.thumbBorder})),e.createElement(a,{style:[i.contentWrap,{gap:q}]},e.createElement(D,{style:i.titleText,numberOfLines:2},d),p&&e.createElement(D,{style:i.captionText,numberOfLines:1},p),T&&e.createElement(D,{style:i.captionText,numberOfLines:1},T)));return z?e.createElement(A,{onPress:z,accessibilityRole:"button",style:({pressed:$})=>[$&&i.pressed]},H):H}const i=O.create({container:{flexDirection:"column",alignItems:"flex-start"},thumbWrap:{width:"100%",borderRadius:R,overflow:"hidden",position:"relative"},thumbImage:{width:"100%",height:"100%"},thumbPlaceholder:{width:"100%",height:"100%",backgroundColor:o.backgroundSecondary},thumbBorder:{position:"absolute",top:0,left:0,right:0,bottom:0,borderRadius:R,borderWidth:1,borderColor:o.borderDefault},contentWrap:{width:"100%",flexDirection:"column"},titleText:{fontSize:s.body2.fontSize,lineHeight:s.body2.lineHeight,fontWeight:W.regular,color:o.textPrimary},captionText:{fontSize:s.label2.fontSize,lineHeight:s.label2.lineHeight,fontWeight:W.medium,color:o.textSecondary},pressed:{opacity:U.pressOpacity}});r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!0,tsType:{name:"string"},description:"제목 텍스트"},caption:{required:!1,tsType:{name:"string"},description:"캡션 텍스트"},subCaption:{required:!1,tsType:{name:"string"},description:"보조 캡션"},imageSource:{required:!1,tsType:{name:"ImageSourcePropType"},description:"썸네일 이미지"},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 핸들러"},skeleton:{required:!1,tsType:{name:"boolean"},description:"스켈레톤 로딩 상태",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"카드 너비",defaultValue:{value:"152",computed:!1}}}};const ie={title:"Data Display/Card",component:r,argTypes:{title:{control:"text",description:"제목"},caption:{control:"text",description:"캡션"},subCaption:{control:"text",description:"보조 캡션"},skeleton:{control:"boolean",description:"스켈레톤 상태"},width:{control:"number",description:"카드 너비"}},tags:["autodocs"]},b={render:()=>e.createElement(g,{gap:t.medium},e.createElement(r,{title:"건강한 아침 식단",caption:"식단 관리"}),e.createElement(r,{title:"수면 패턴 분석",caption:"수면 리포트",subCaption:"7일간 데이터"}))},C={name:"Default",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"Default",description:"제목만 있는 가장 단순한 카드입니다."},e.createElement(r,{title:"건강한 아침 식단"})))},x={name:"캡션 조합",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"캡션 조합",description:"caption, subCaption 조합을 비교합니다."},e.createElement(g,{gap:t.medium,wrap:!0},e.createElement(l,{gap:t.small},e.createElement(n,null,"제목만"),e.createElement(r,{title:"건강한 아침 식단"})),e.createElement(l,{gap:t.small},e.createElement(n,null,"제목 + 캡션"),e.createElement(r,{title:"건강한 아침 식단",caption:"식단 관리"})),e.createElement(l,{gap:t.small},e.createElement(n,null,"제목 + 캡션 + 보조"),e.createElement(r,{title:"건강한 아침 식단",caption:"식단 관리",subCaption:"오늘 기록"})))))},E={name:"클릭 가능",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"클릭 가능",description:"onPress가 있으면 pressed 인터랙션이 적용됩니다."},e.createElement(g,{gap:t.medium},e.createElement(r,{title:"식단 기록 보기",caption:"오늘의 식단",onPress:()=>{}}),e.createElement(r,{title:"운동 기록 보기",caption:"오늘의 운동",onPress:()=>{}}))))},S={name:"스켈레톤",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"스켈레톤",description:"로딩 중 플레이스홀더 상태입니다."},e.createElement(g,{gap:t.medium},e.createElement(l,{gap:t.small},e.createElement(n,null,"캡션 포함"),e.createElement(r,{title:"",caption:"",skeleton:!0})),e.createElement(l,{gap:t.small},e.createElement(n,null,"캡션 + 보조 포함"),e.createElement(r,{title:"",caption:"",subCaption:"",skeleton:!0})),e.createElement(l,{gap:t.small},e.createElement(n,null,"제목만"),e.createElement(r,{title:"",skeleton:!0})))))},h={name:"너비 커스텀",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"너비 커스텀",description:"width prop으로 카드 크기를 조절합니다."},e.createElement(g,{gap:t.medium,align:"flex-start"},e.createElement(l,{gap:t.small},e.createElement(n,null,"120px"),e.createElement(r,{title:"좁은 카드",caption:"캡션",width:120})),e.createElement(l,{gap:t.small},e.createElement(n,null,"152px (기본)"),e.createElement(r,{title:"기본 카드",caption:"캡션",width:152})),e.createElement(l,{gap:t.small},e.createElement(n,null,"200px"),e.createElement(r,{title:"넓은 카드",caption:"캡션",width:200})))))},w={name:"그리드 (모바일)",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"그리드",description:"375px 모바일 화면에 2열 그리드로 배치한 예시입니다."},e.createElement(a,{style:{width:375,padding:t.large,backgroundColor:o.backgroundPrimary,borderWidth:1,borderColor:o.borderDefault,borderRadius:V.small,flexDirection:"row",flexWrap:"wrap",gap:t.medium}},["건강한 아침 식단","수면 패턴 분석","주간 운동 리포트","영양제 섭취 기록"].map((d,p)=>e.createElement(r,{key:p,title:d,caption:["식단","수면","운동","영양제"][p],width:(375-t.large*2-t.medium)/2,onPress:()=>{}})))))},f={name:"실전 예시",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"실전 예시",description:"실제 화면에서 Card가 배치되는 맥락을 확인합니다."},e.createElement(a,{style:{maxWidth:375}},e.createElement(l,{gap:t.small},e.createElement(n,null,"건강 콘텐츠 피드"),e.createElement(a,{style:{borderWidth:1,borderColor:o.borderDefault,borderRadius:V.large,overflow:"hidden",backgroundColor:o.backgroundPrimary}},e.createElement(a,{style:{paddingHorizontal:t.xlarge,paddingVertical:t.medium,borderBottomWidth:1,borderBottomColor:o.borderDefault}},e.createElement(D,{style:{fontSize:s.headline.fontSize,fontWeight:W.semibold,color:o.textPrimary}},"추천 콘텐츠")),e.createElement(a,{style:{padding:t.xlarge,gap:t.medium}},[{title:"아침 공복에 좋은 음식 5가지",caption:"식단 관리",subCaption:"3분 읽기"},{title:"수면의 질을 높이는 저녁 루틴",caption:"수면 관리",subCaption:"5분 읽기"},{title:"하루 10분 홈트레이닝 가이드",caption:"운동",subCaption:"4분 읽기"}].map((d,p)=>e.createElement(r,{key:p,title:d.title,caption:d.caption,subCaption:d.subCaption,width:375-t.xlarge*2,onPress:()=>{}}))))))))},k={name:"디자인 스펙",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"디자인 스펙",description:"Figma 기반 Card 스펙입니다. 외부 토큰은 우리 토큰으로 매핑되었습니다.",badge:"디자인"},e.createElement(P,{title:"색상 토큰",rows:[{property:"제목 텍스트",token:"color/text/primary",value:o.textPrimary,type:"color"},{property:"캡션 텍스트",token:"color/text/secondary",value:o.textSecondary,type:"color"},{property:"썸네일 테두리",token:"color/border/default",value:o.borderDefault,type:"color"},{property:"썸네일 배경",token:"color/background/secondary",value:o.backgroundSecondary,type:"color"},{property:"스켈레톤 배경",token:"color/background/disabled",value:o.backgroundDisabled,type:"color"}]}),e.createElement(I,null),e.createElement(P,{title:"레이아웃",rows:[{property:"카드 너비 (Mobile)",token:"—",value:152,type:"size"},{property:"썸네일 비율",token:"—",value:"75:152 (≈1:2)"},{property:"썸네일 라디우스",token:"borderRadius/medium",value:V.medium,type:"size"},{property:"썸네일-콘텐츠 gap",token:"—",value:6,type:"size"},{property:"콘텐츠 내부 gap",token:"spacing/xsmall",value:t.xsmall,type:"size"}]}),e.createElement(I,null),e.createElement(P,{title:"타이포그래피",rows:[{property:"제목 (Mobile)",token:"Body 2",value:`${s.body2.fontSize}px / ${s.body2.lineHeight}px / Regular`,type:"typography"},{property:"캡션",token:"Label 2",value:`${s.label2.fontSize}px / ${s.label2.lineHeight}px / Medium`,type:"typography"}]})))},v={name:"사용 가이드",render:()=>e.createElement(a,{style:{gap:t["3xlarge"]}},e.createElement(c,{title:"사용 가이드",description:"개발자를 위한 Card 사용 예시입니다.",badge:"개발"},e.createElement(m,{title:"Import",code:"import { Card } from '@design-system/components/Card';"}),e.createElement(m,{title:"기본 사용",code:'<Card title="건강한 아침 식단" caption="식단 관리" />'}),e.createElement(m,{title:"클릭 가능 카드",code:`<Card
  title="식단 기록 보기"
  caption="오늘의 식단"
  onPress={() => navigation.navigate('DietDetail')}
/>`}),e.createElement(m,{title:"이미지 포함",code:`<Card
  title="오늘의 레시피"
  caption="건강 식단"
  imageSource={require('./assets/recipe.jpg')}
/>`}),e.createElement(m,{title:"스켈레톤 (로딩)",code:'<Card title="" caption="" skeleton />'}),e.createElement(m,{title:"2열 그리드",code:`<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.medium }}>
  {items.map(item => (
    <Card
      key={item.id}
      title={item.title}
      caption={item.caption}
      width={(screenWidth - spacing.large * 2 - spacing.medium) / 2}
      onPress={() => navigate(item.id)}
    />
  ))}
</View>`})))};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Row gap={spacing.medium}>
      <Card title="건강한 아침 식단" caption="식단 관리" />
      <Card title="수면 패턴 분석" caption="수면 리포트" subCaption="7일간 데이터" />
    </Row>
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Default" description="제목만 있는 가장 단순한 카드입니다.">
        <Card title="건강한 아침 식단" />
      </Section>
    </View>
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '캡션 조합',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="캡션 조합" description="caption, subCaption 조합을 비교합니다.">
        <Row gap={spacing.medium} wrap>
          <Col gap={spacing.small}>
            <StateLabel>제목만</StateLabel>
            <Card title="건강한 아침 식단" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>제목 + 캡션</StateLabel>
            <Card title="건강한 아침 식단" caption="식단 관리" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>제목 + 캡션 + 보조</StateLabel>
            <Card title="건강한 아침 식단" caption="식단 관리" subCaption="오늘 기록" />
          </Col>
        </Row>
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '클릭 가능',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="클릭 가능" description="onPress가 있으면 pressed 인터랙션이 적용됩니다.">
        <Row gap={spacing.medium}>
          <Card title="식단 기록 보기" caption="오늘의 식단" onPress={() => {}} />
          <Card title="운동 기록 보기" caption="오늘의 운동" onPress={() => {}} />
        </Row>
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '스켈레톤',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="스켈레톤" description="로딩 중 플레이스홀더 상태입니다.">
        <Row gap={spacing.medium}>
          <Col gap={spacing.small}>
            <StateLabel>캡션 포함</StateLabel>
            <Card title="" caption="" skeleton />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>캡션 + 보조 포함</StateLabel>
            <Card title="" caption="" subCaption="" skeleton />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>제목만</StateLabel>
            <Card title="" skeleton />
          </Col>
        </Row>
      </Section>
    </View>
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '너비 커스텀',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="너비 커스텀" description="width prop으로 카드 크기를 조절합니다.">
        <Row gap={spacing.medium} align="flex-start">
          <Col gap={spacing.small}>
            <StateLabel>120px</StateLabel>
            <Card title="좁은 카드" caption="캡션" width={120} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>152px (기본)</StateLabel>
            <Card title="기본 카드" caption="캡션" width={152} />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>200px</StateLabel>
            <Card title="넓은 카드" caption="캡션" width={200} />
          </Col>
        </Row>
      </Section>
    </View>
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '그리드 (모바일)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="그리드" description="375px 모바일 화면에 2열 그리드로 배치한 예시입니다.">
        <View style={{
        width: 375,
        padding: spacing.large,
        backgroundColor: semanticColor.backgroundPrimary,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: radius.small,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.medium
      }}>
          {['건강한 아침 식단', '수면 패턴 분석', '주간 운동 리포트', '영양제 섭취 기록'].map((title, i) => <Card key={i} title={title} caption={['식단', '수면', '운동', '영양제'][i]} width={(375 - spacing.large * 2 - spacing.medium) / 2} onPress={() => {}} />)}
        </View>
      </Section>
    </View>
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="실제 화면에서 Card가 배치되는 맥락을 확인합니다.">
        <View style={{
        maxWidth: 375
      }}>
          <Col gap={spacing.small}>
            <StateLabel>건강 콘텐츠 피드</StateLabel>
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
                  추천 콘텐츠
                </Text>
              </View>
              <View style={{
              padding: spacing.xlarge,
              gap: spacing.medium
            }}>
                {[{
                title: '아침 공복에 좋은 음식 5가지',
                caption: '식단 관리',
                subCaption: '3분 읽기'
              }, {
                title: '수면의 질을 높이는 저녁 루틴',
                caption: '수면 관리',
                subCaption: '5분 읽기'
              }, {
                title: '하루 10분 홈트레이닝 가이드',
                caption: '운동',
                subCaption: '4분 읽기'
              }].map((item, i) => <Card key={i} title={item.title} caption={item.caption} subCaption={item.subCaption} width={375 - spacing.xlarge * 2} onPress={() => {}} />)}
              </View>
            </View>
          </Col>
        </View>
      </Section>
    </View>
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 기반 Card 스펙입니다. 외부 토큰은 우리 토큰으로 매핑되었습니다." badge="디자인">
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
        property: '카드 너비 (Mobile)',
        token: '—',
        value: 152,
        type: 'size'
      }, {
        property: '썸네일 비율',
        token: '—',
        value: '75:152 (≈1:2)'
      }, {
        property: '썸네일 라디우스',
        token: 'borderRadius/medium',
        value: radius.medium,
        type: 'size'
      }, {
        property: '썸네일-콘텐츠 gap',
        token: '—',
        value: 6,
        type: 'size'
      }, {
        property: '콘텐츠 내부 gap',
        token: 'spacing/xsmall',
        value: spacing.xsmall,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="타이포그래피" rows={[{
        property: '제목 (Mobile)',
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
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Card 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { Card } from '@design-system/components/Card';\`} />

        <CodeBlock title="기본 사용" code={\`<Card title="건강한 아침 식단" caption="식단 관리" />\`} />

        <CodeBlock title="클릭 가능 카드" code={\`<Card
  title="식단 기록 보기"
  caption="오늘의 식단"
  onPress={() => navigation.navigate('DietDetail')}
/>\`} />

        <CodeBlock title="이미지 포함" code={\`<Card
  title="오늘의 레시피"
  caption="건강 식단"
  imageSource={require('./assets/recipe.jpg')}
/>\`} />

        <CodeBlock title="스켈레톤 (로딩)" code={\`<Card title="" caption="" skeleton />\`} />

        <CodeBlock title="2열 그리드" code={\`<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.medium }}>
  {items.map(item => (
    <Card
      key={item.id}
      title={item.title}
      caption={item.caption}
      width={(screenWidth - spacing.large * 2 - spacing.medium) / 2}
      onPress={() => navigate(item.id)}
    />
  ))}
</View>\`} />
      </Section>
    </View>
}`,...v.parameters?.docs?.source}}};const le=["Playground","Default","WithCaptions","Clickable","Skeleton","CustomWidth","Grid","InContext","DesignSpec","Usage"];export{E as Clickable,h as CustomWidth,C as Default,k as DesignSpec,w as Grid,f as InContext,b as Playground,S as Skeleton,v as Usage,x as WithCaptions,le as __namedExportsOrder,ie as default};
