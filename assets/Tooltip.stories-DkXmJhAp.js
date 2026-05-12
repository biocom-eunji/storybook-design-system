import{R as e,V as n,s as I}from"./iframe-rdsxNJ7l.js";import{f as H,a as l,s as t,T as S,c as a,d as $,r as x}from"./theme-KAxj7l-q.js";import{S as d,D as W,b as g,a as c,C as b}from"./storyHelpers-D5HpvNsw.js";import{T as f}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";const p=6,A={medium:{paddingVertical:t.small,paddingHorizontal:t.medium,fontSize:l.label1.fontSize,lineHeight:l.label1.lineHeight,fontWeight:H.medium,maxWidth:240},small:{paddingVertical:t.small,paddingHorizontal:t.medium,fontSize:l.caption.fontSize,lineHeight:l.caption.lineHeight,fontWeight:H.regular,maxWidth:200}};function i({content:o,size:m="medium",position:r="top",align:u,visible:s=!0}){if(!s)return null;const y=A[m],R=D(r,u??(r==="top"||r==="bottom"?"leading":"top"));return e.createElement(n,{style:[L.wrapper,B(r)]},(r==="bottom"||r==="right")&&e.createElement(n,{style:R}),e.createElement(n,{style:[L.body,{paddingVertical:y.paddingVertical,paddingHorizontal:y.paddingHorizontal,maxWidth:y.maxWidth}]},e.createElement(S,{style:[L.text,{fontSize:y.fontSize,lineHeight:y.lineHeight,fontWeight:y.fontWeight}]},o)),(r==="top"||r==="left")&&e.createElement(n,{style:R}))}function B(o){return o==="top"||o==="bottom"?{flexDirection:"column",alignItems:"flex-start"}:{flexDirection:"row",alignItems:"flex-start"}}function D(o,m){const r={width:0,height:0,borderStyle:"solid"},u=a.backgroundInverse;let s={};switch(o==="top"||o==="bottom"?m==="leading"?s={marginLeft:t.medium}:m==="center"?s={alignSelf:"center"}:m==="trailing"&&(s={alignSelf:"flex-end",marginRight:t.medium}):m==="top"?s={marginTop:t.small}:m==="center"?s={alignSelf:"center"}:m==="bottom"&&(s={alignSelf:"flex-end",marginBottom:t.small}),o){case"top":return{...r,...s,borderLeftWidth:p,borderRightWidth:p,borderTopWidth:p,borderLeftColor:"transparent",borderRightColor:"transparent",borderTopColor:u};case"bottom":return{...r,...s,borderLeftWidth:p,borderRightWidth:p,borderBottomWidth:p,borderLeftColor:"transparent",borderRightColor:"transparent",borderBottomColor:u};case"left":return{...r,...s,borderTopWidth:p,borderBottomWidth:p,borderLeftWidth:p,borderTopColor:"transparent",borderBottomColor:"transparent",borderLeftColor:u};case"right":return{...r,...s,borderTopWidth:p,borderBottomWidth:p,borderRightWidth:p,borderTopColor:"transparent",borderBottomColor:"transparent",borderRightColor:u}}}const L=I.create({wrapper:{alignSelf:"flex-start"},body:{backgroundColor:a.backgroundInverse,borderRadius:x.small,...$.level2},text:{color:a.textOnColor}});i.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"string"},description:"툴팁 내용"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"크기",defaultValue:{value:"'medium'",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:"표시 여부",defaultValue:{value:"true",computed:!1}},position:{defaultValue:{value:"'top'",computed:!1},required:!1}}};const N={title:"Overlay/Tooltip",component:i,argTypes:{content:{control:"text",description:"툴팁 내용"},size:{control:"select",options:["small","medium"],description:"크기"},position:{control:"select",options:["top","right","bottom","left"],description:"위치"},visible:{control:"boolean",description:"표시 여부"}},tags:["autodocs"]},h={render:()=>e.createElement(n,{style:{padding:t["3xlarge"]}},e.createElement(i,{content:"추가 정보를 확인하세요",position:"top",align:"leading"})),parameters:{docs:{description:{story:"**적용 토큰**: 배경 `color/background/inverse`, 텍스트 `color/text/onColor`, radius `borderRadius/small`, shadow `level2`"}}}},T={name:"크기별",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"크기별",description:"Medium(Label 1, 14px)과 Small(Caption, 12px)을 비교합니다."},e.createElement(n,{style:{gap:t.xlarge}},e.createElement(g,{gap:t.small},e.createElement(c,null,"Medium"),e.createElement(i,{content:"Medium 사이즈 툴팁입니다",size:"medium",position:"top",align:"leading"})),e.createElement(g,{gap:t.small},e.createElement(c,null,"Small"),e.createElement(i,{content:"Small 사이즈 툴팁입니다",size:"small",position:"top",align:"leading"})))))},E={name:"위치별 (4방향)",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"위치별",description:"top / right / bottom / left 4방향 배치입니다. 화살표가 anchor를 향합니다."},e.createElement(n,{style:{gap:t.xlarge}},["top","bottom","left","right"].map(o=>e.createElement(g,{key:o,gap:t.small},e.createElement(c,null,`position="${o}"`),o==="top"||o==="bottom"?e.createElement(i,{content:`${o} 방향 툴팁`,position:o,align:"leading"}):e.createElement(i,{content:`${o} 방향 툴팁`,position:o,align:"top"}))))))},w={name:"Arrow Vertical (상/하 배치 + 가로 정렬)",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"Arrow Vertical",description:"position='top'일 때 align=leading / center / trailing 비교입니다."},e.createElement(n,{style:{gap:t.xlarge}},["leading","center","trailing"].map(o=>e.createElement(g,{key:o,gap:t.small},e.createElement(c,null,`align="${o}"`),e.createElement(i,{content:"툴팁 텍스트",position:"top",align:o})))),e.createElement(W,null),e.createElement(n,{style:{gap:t.xlarge,marginTop:t.xlarge}},e.createElement(c,null,'position="bottom" 에서도 동일'),["leading","center","trailing"].map(o=>e.createElement(g,{key:o,gap:t.small},e.createElement(c,null,`align="${o}"`),e.createElement(i,{content:"툴팁 텍스트",position:"bottom",align:o}))))))},C={name:"Arrow Horizontal (좌/우 배치 + 세로 정렬)",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"Arrow Horizontal",description:"position='right'일 때 align=top / center / bottom 비교입니다."},e.createElement(n,{style:{gap:t.xlarge}},["top","center","bottom"].map(o=>e.createElement(g,{key:o,gap:t.small},e.createElement(c,null,`align="${o}"`),e.createElement(i,{content:"툴팁 텍스트",position:"right",align:o})))),e.createElement(W,null),e.createElement(n,{style:{gap:t.xlarge,marginTop:t.xlarge}},e.createElement(c,null,'position="left" 에서도 동일'),["top","center","bottom"].map(o=>e.createElement(g,{key:o,gap:t.small},e.createElement(c,null,`align="${o}"`),e.createElement(i,{content:"툴팁 텍스트",position:"left",align:o}))))))},k={name:"긴 텍스트 (줄바꿈)",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"긴 텍스트",description:"최대 폭(240px/200px) 초과 시 자동 줄바꿈됩니다."},e.createElement(n,{style:{gap:t.xlarge}},e.createElement(g,{gap:t.small},e.createElement(c,null,"Medium (max 240px)"),e.createElement(i,{content:"이 툴팁은 긴 텍스트를 포함하고 있어서 최대 폭을 초과하면 자동으로 줄바꿈이 됩니다.",size:"medium",position:"top",align:"leading"})),e.createElement(g,{gap:t.small},e.createElement(c,null,"Small (max 200px)"),e.createElement(i,{content:"이 툴팁은 긴 텍스트를 포함하고 있어서 최대 폭을 초과하면 자동으로 줄바꿈이 됩니다.",size:"small",position:"top",align:"leading"})))))},z={name:"디자인 스펙",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"디자인 스펙",description:"Figma 실측 기준 Tooltip 스펙입니다.",badge:"디자인"},e.createElement(f,{title:"색상 토큰",rows:[{property:"배경",token:"color/background/inverse",value:a.backgroundInverse,type:"color"},{property:"텍스트",token:"color/text/onColor",value:a.textOnColor,type:"color"},{property:"그림자",token:"shadow/level2",value:`offset(0,${$.level2.shadowOffset.height}) blur(${$.level2.shadowRadius})`},{property:"라디우스",token:"borderRadius/small",value:x.small,type:"size"}]}),e.createElement(W,null),e.createElement(f,{title:"Medium 사이즈",rows:[{property:"패딩",token:"spacing/small × spacing/medium",value:`${t.small} × ${t.medium}`,type:"size"},{property:"타이포",token:"Label 1",value:`${l.label1.fontSize}px / ${l.label1.lineHeight}px / Medium`,type:"typography"},{property:"최대 폭",token:"—",value:240,type:"size"}]}),e.createElement(f,{title:"Small 사이즈",rows:[{property:"패딩",token:"6 × 10",value:"6 × 10",type:"size"},{property:"타이포",token:"Caption",value:`${l.caption.fontSize}px / ${l.caption.lineHeight}px / Regular`,type:"typography"},{property:"최대 폭",token:"—",value:200,type:"size"}]}),e.createElement(W,null),e.createElement(f,{title:"화살표",rows:[{property:"크기",token:"—",value:"6px 삼각형",type:"size"},{property:"색상",token:"color/background/inverse",value:a.backgroundInverse,type:"color"}]})))},v={name:"실전 예시",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"실전 예시",description:"도움말 아이콘 위 Tooltip — 건강 점수 옆 도움말 아이콘에 Tooltip이 표시되는 구조입니다."},e.createElement(n,{style:{maxWidth:375,padding:t.xlarge,backgroundColor:a.backgroundPrimary,borderRadius:x.large,borderWidth:1,borderColor:a.borderDefault,gap:t.large}},e.createElement(n,{style:{flexDirection:"row",alignItems:"center",gap:t.small}},e.createElement(S,{style:{fontSize:l.heading.fontSize,fontWeight:l.heading.fontWeight,lineHeight:l.heading.lineHeight,color:a.textPrimary}},"건강 점수"),e.createElement(n,{style:{width:20,height:20,borderRadius:x.full,backgroundColor:a.backgroundTertiary,alignItems:"center",justifyContent:"center"}},e.createElement(S,{style:{fontSize:l.caption.fontSize,fontWeight:l.caption.fontWeight,color:a.textSecondary}},"?"))),e.createElement(i,{content:"식단, 수면, 운동 데이터를 종합하여 산출한 점수입니다",position:"bottom",align:"leading",size:"medium"}),e.createElement(n,{style:{backgroundColor:a.backgroundSecondary,borderRadius:x.medium,padding:t.xlarge,alignItems:"center"}},e.createElement(S,{style:{fontSize:l.title1.fontSize,fontWeight:l.title1.fontWeight,color:a.textBrand}},"85"),e.createElement(S,{style:{fontSize:l.caption.fontSize,color:a.textSecondary,marginTop:t.xsmall}},"100점 만점")))))},V={name:"사용 가이드",render:()=>e.createElement(n,{style:{gap:t["3xlarge"]}},e.createElement(d,{title:"사용 가이드",description:"개발자를 위한 Tooltip 사용 예시입니다.",badge:"개발"},e.createElement(b,{title:"Import",code:"import { Tooltip } from '@design-system/components/Tooltip';"}),e.createElement(b,{title:"기본 사용",code:`<Tooltip
  content="추가 정보를 확인하세요"
  position="top"
  align="leading"
/>`}),e.createElement(b,{title:"Position + Align 조합",code:`// 상단, 화살표 중앙
<Tooltip content="도움말" position="top" align="center" />

// 우측, 화살표 상단
<Tooltip content="도움말" position="right" align="top" />

// 하단, 화살표 우측
<Tooltip content="도움말" position="bottom" align="trailing" />`}),e.createElement(b,{title:"Small 사이즈",code:'<Tooltip content="간단한 힌트" size="small" position="top" />'}),e.createElement(b,{title:"TypeScript 타입 안전성",code:`// ✅ 올바른 조합
<Tooltip position="top" align="leading" />     // vertical → leading/center/trailing
<Tooltip position="right" align="top" />       // horizontal → top/center/bottom

// ❌ 타입 에러 (컴파일 시 잡힘)
// <Tooltip position="top" align="top" />      // vertical에 horizontal align 불가
// <Tooltip position="right" align="leading" /> // horizontal에 vertical align 불가`})))};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    padding: spacing['3xlarge']
  }}>
      <Tooltip content="추가 정보를 확인하세요" position="top" align="leading" />
    </View>,
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: 배경 \`color/background/inverse\`, 텍스트 \`color/text/onColor\`, radius \`borderRadius/small\`, shadow \`level2\`'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '크기별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="크기별" description="Medium(Label 1, 14px)과 Small(Caption, 12px)을 비교합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Medium</StateLabel>
            <Tooltip content="Medium 사이즈 툴팁입니다" size="medium" position="top" align="leading" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Small</StateLabel>
            <Tooltip content="Small 사이즈 툴팁입니다" size="small" position="top" align="leading" />
          </Col>
        </View>
      </Section>
    </View>
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '위치별 (4방향)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="위치별" description="top / right / bottom / left 4방향 배치입니다. 화살표가 anchor를 향합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          {(['top', 'bottom', 'left', 'right'] as const).map(pos => <Col key={pos} gap={spacing.small}>
              <StateLabel>{\`position="\${pos}"\`}</StateLabel>
              {pos === 'top' || pos === 'bottom' ? <Tooltip content={\`\${pos} 방향 툴팁\`} position={pos} align="leading" /> : <Tooltip content={\`\${pos} 방향 툴팁\`} position={pos} align="top" />}
            </Col>)}
        </View>
      </Section>
    </View>
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Arrow Vertical (상/하 배치 + 가로 정렬)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Arrow Vertical" description="position='top'일 때 align=leading / center / trailing 비교입니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          {(['leading', 'center', 'trailing'] as const).map(align => <Col key={align} gap={spacing.small}>
              <StateLabel>{\`align="\${align}"\`}</StateLabel>
              <Tooltip content="툴팁 텍스트" position="top" align={align} />
            </Col>)}
        </View>

        <Divider />

        <View style={{
        gap: spacing.xlarge,
        marginTop: spacing.xlarge
      }}>
          <StateLabel>position="bottom" 에서도 동일</StateLabel>
          {(['leading', 'center', 'trailing'] as const).map(align => <Col key={align} gap={spacing.small}>
              <StateLabel>{\`align="\${align}"\`}</StateLabel>
              <Tooltip content="툴팁 텍스트" position="bottom" align={align} />
            </Col>)}
        </View>
      </Section>
    </View>
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Arrow Horizontal (좌/우 배치 + 세로 정렬)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Arrow Horizontal" description="position='right'일 때 align=top / center / bottom 비교입니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          {(['top', 'center', 'bottom'] as const).map(align => <Col key={align} gap={spacing.small}>
              <StateLabel>{\`align="\${align}"\`}</StateLabel>
              <Tooltip content="툴팁 텍스트" position="right" align={align} />
            </Col>)}
        </View>

        <Divider />

        <View style={{
        gap: spacing.xlarge,
        marginTop: spacing.xlarge
      }}>
          <StateLabel>position="left" 에서도 동일</StateLabel>
          {(['top', 'center', 'bottom'] as const).map(align => <Col key={align} gap={spacing.small}>
              <StateLabel>{\`align="\${align}"\`}</StateLabel>
              <Tooltip content="툴팁 텍스트" position="left" align={align} />
            </Col>)}
        </View>
      </Section>
    </View>
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '긴 텍스트 (줄바꿈)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="긴 텍스트" description="최대 폭(240px/200px) 초과 시 자동 줄바꿈됩니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Medium (max 240px)</StateLabel>
            <Tooltip content="이 툴팁은 긴 텍스트를 포함하고 있어서 최대 폭을 초과하면 자동으로 줄바꿈이 됩니다." size="medium" position="top" align="leading" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Small (max 200px)</StateLabel>
            <Tooltip content="이 툴팁은 긴 텍스트를 포함하고 있어서 최대 폭을 초과하면 자동으로 줄바꿈이 됩니다." size="small" position="top" align="leading" />
          </Col>
        </View>
      </Section>
    </View>
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" description="Figma 실측 기준 Tooltip 스펙입니다." badge="디자인">
        <TokenSpecTable title="색상 토큰" rows={[{
        property: '배경',
        token: 'color/background/inverse',
        value: semanticColor.backgroundInverse,
        type: 'color'
      }, {
        property: '텍스트',
        token: 'color/text/onColor',
        value: semanticColor.textOnColor,
        type: 'color'
      }, {
        property: '그림자',
        token: 'shadow/level2',
        value: \`offset(0,\${shadow.level2.shadowOffset.height}) blur(\${shadow.level2.shadowRadius})\`
      }, {
        property: '라디우스',
        token: 'borderRadius/small',
        value: radius.small,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="Medium 사이즈" rows={[{
        property: '패딩',
        token: 'spacing/small × spacing/medium',
        value: \`\${spacing.small} × \${spacing.medium}\`,
        type: 'size'
      }, {
        property: '타이포',
        token: 'Label 1',
        value: \`\${textStyle.label1.fontSize}px / \${textStyle.label1.lineHeight}px / Medium\`,
        type: 'typography'
      }, {
        property: '최대 폭',
        token: '—',
        value: 240,
        type: 'size'
      }]} />

        <TokenSpecTable title="Small 사이즈" rows={[{
        property: '패딩',
        token: '6 × 10',
        value: '6 × 10',
        type: 'size'
      }, {
        property: '타이포',
        token: 'Caption',
        value: \`\${textStyle.caption.fontSize}px / \${textStyle.caption.lineHeight}px / Regular\`,
        type: 'typography'
      }, {
        property: '최대 폭',
        token: '—',
        value: 200,
        type: 'size'
      }]} />

        <Divider />

        <TokenSpecTable title="화살표" rows={[{
        property: '크기',
        token: '—',
        value: '6px 삼각형',
        type: 'size'
      }, {
        property: '색상',
        token: 'color/background/inverse',
        value: semanticColor.backgroundInverse,
        type: 'color'
      }]} />
      </Section>
    </View>
}`,...z.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '실전 예시',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="실전 예시" description="도움말 아이콘 위 Tooltip — 건강 점수 옆 도움말 아이콘에 Tooltip이 표시되는 구조입니다.">
        <View style={{
        maxWidth: 375,
        padding: spacing.xlarge,
        backgroundColor: semanticColor.backgroundPrimary,
        borderRadius: radius.large,
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        gap: spacing.large
      }}>
          <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: spacing.small
        }}>
            <Text style={{
            fontSize: textStyle.heading.fontSize,
            fontWeight: textStyle.heading.fontWeight,
            lineHeight: textStyle.heading.lineHeight,
            color: semanticColor.textPrimary
          }}>
              건강 점수
            </Text>
            <View style={{
            width: 20,
            height: 20,
            borderRadius: radius.full,
            backgroundColor: semanticColor.backgroundTertiary,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text style={{
              fontSize: textStyle.caption.fontSize,
              fontWeight: textStyle.caption.fontWeight,
              color: semanticColor.textSecondary
            }}>
                ?
              </Text>
            </View>
          </View>
          <Tooltip content="식단, 수면, 운동 데이터를 종합하여 산출한 점수입니다" position="bottom" align="leading" size="medium" />
          <View style={{
          backgroundColor: semanticColor.backgroundSecondary,
          borderRadius: radius.medium,
          padding: spacing.xlarge,
          alignItems: 'center'
        }}>
            <Text style={{
            fontSize: textStyle.title1.fontSize,
            fontWeight: textStyle.title1.fontWeight,
            color: semanticColor.textBrand
          }}>
              85
            </Text>
            <Text style={{
            fontSize: textStyle.caption.fontSize,
            color: semanticColor.textSecondary,
            marginTop: spacing.xsmall
          }}>
              100점 만점
            </Text>
          </View>
        </View>
      </Section>
    </View>
}`,...v.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" description="개발자를 위한 Tooltip 사용 예시입니다." badge="개발">
        <CodeBlock title="Import" code={\`import { Tooltip } from '@design-system/components/Tooltip';\`} />

        <CodeBlock title="기본 사용" code={\`<Tooltip
  content="추가 정보를 확인하세요"
  position="top"
  align="leading"
/>\`} />

        <CodeBlock title="Position + Align 조합" code={\`// 상단, 화살표 중앙
<Tooltip content="도움말" position="top" align="center" />

// 우측, 화살표 상단
<Tooltip content="도움말" position="right" align="top" />

// 하단, 화살표 우측
<Tooltip content="도움말" position="bottom" align="trailing" />\`} />

        <CodeBlock title="Small 사이즈" code={\`<Tooltip content="간단한 힌트" size="small" position="top" />\`} />

        <CodeBlock title="TypeScript 타입 안전성" code={\`// ✅ 올바른 조합
<Tooltip position="top" align="leading" />     // vertical → leading/center/trailing
<Tooltip position="right" align="top" />       // horizontal → top/center/bottom

// ❌ 타입 에러 (컴파일 시 잡힘)
// <Tooltip position="top" align="top" />      // vertical에 horizontal align 불가
// <Tooltip position="right" align="leading" /> // horizontal에 vertical align 불가\`} />
      </Section>
    </View>
}`,...V.parameters?.docs?.source}}};const U=["Playground","Sizes","Positions","VerticalAlign","HorizontalAlign","LongContent","DesignSpec","InContext","Usage"];export{z as DesignSpec,C as HorizontalAlign,v as InContext,k as LongContent,h as Playground,E as Positions,T as Sizes,V as Usage,w as VerticalAlign,U as __namedExportsOrder,N as default};
