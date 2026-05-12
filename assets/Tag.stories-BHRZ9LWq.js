import{R as e,V as o,s as H}from"./iframe-rdsxNJ7l.js";import{u as c,A as p,z as h,x as m,w as g,B as V,v as B,m as R,g as d,a as u,s as t,T as y,f as U,r as M,c as s}from"./theme-KAxj7l-q.js";import{S as i,b as D,a as W,R as v,D as _,C as b}from"./storyHelpers-D5HpvNsw.js";import{T as N}from"./TokenSpecTable-CJp3A6kK.js";import"./preload-helper-PPVm8Dsz.js";const Z={1:{bg:g[90],text:g[30]},2:{bg:m[90],text:m[30]},3:{bg:h[90],text:h[30]},4:{bg:p[90],text:p[30]},5:{bg:c[90],text:c[20]}},q={neutral:{bg:d[97],text:d[40]},info:{bg:g[90],text:g[30]},success:{bg:m[90],text:m[30]},warning:{bg:p[90],text:p[30]},error:{bg:c[90],text:c[20]},mint:{bg:R[90],text:R[30]},violet:{bg:B[95],text:B[30]},pink:{bg:V[95],text:V[30]}},F={bg:d[97],text:d[40]},G={small:{paddingV:2,paddingH:t.small,fontSize:u.caption.fontSize},medium:{paddingV:t.xsmall,paddingH:t.medium,fontSize:u.label1.fontSize}};function a(l){const{variant:r,children:n,size:O="medium"}=l,I=r==="level"?Z[l.level]:r==="status"?q[l.color]:F,P=G[O],$=r==="level"?`${l.level}단계`:r==="status"?"상태":"",j=$?`${$}: ${n}`:n;return e.createElement(o,{style:[A.container,{backgroundColor:I.bg,paddingVertical:P.paddingV,paddingHorizontal:P.paddingH}],accessibilityRole:"text",accessibilityLabel:j},e.createElement(y,{style:[A.text,{color:I.text,fontSize:P.fontSize}]},n))}const A=H.create({container:{alignSelf:"flex-start",borderRadius:M.full},text:{fontWeight:U.semibold,textAlign:"center"}});a.__docgenInfo={description:"",methods:[],displayName:"Tag"};const ee={title:"Data Display/Tag",component:a,tags:["autodocs"]},k={render:()=>e.createElement(o,{style:{gap:t.xlarge}},e.createElement(v,{gap:t.small,wrap:!0},e.createElement(a,{variant:"neutral"},"기본 태그"),e.createElement(a,{variant:"status",color:"info"},"안내"),e.createElement(a,{variant:"status",color:"success"},"완료"),e.createElement(a,{variant:"status",color:"warning"},"주의"),e.createElement(a,{variant:"status",color:"error"},"오류"),e.createElement(a,{variant:"level",level:1},"1단계")))},T={name:"Default (Neutral)",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(i,{title:"Default",description:"기본 neutral 태그입니다. 카테고리나 일반 레이블에 사용합니다."},e.createElement(v,{gap:t.small,wrap:!0},e.createElement(a,{variant:"neutral"},"일반"),e.createElement(a,{variant:"neutral"},"카테고리"),e.createElement(a,{variant:"neutral"},"기타"))))},S={name:"Level 5단계",render:()=>{const l=[{level:1,label:"1단계"},{level:2,label:"2단계"},{level:3,label:"3단계"},{level:4,label:"4단계"},{level:5,label:"5단계"}];return e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(i,{title:"Level 5단계",description:"숫자 단계를 파스텔 색상으로 구분합니다."},e.createElement(v,{gap:t.small,wrap:!0},l.map(({level:r,label:n})=>e.createElement(a,{key:r,variant:"level",level:r},n)))))}},w={name:"Status 색상",render:()=>{const l=[{color:"neutral",label:"기본"},{color:"info",label:"안내"},{color:"success",label:"완료"},{color:"warning",label:"주의"},{color:"error",label:"오류"},{color:"mint",label:"브랜드"},{color:"violet",label:"특별"},{color:"pink",label:"이벤트"}];return e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(i,{title:"Status 색상",description:"color prop으로 다양한 상태를 표현합니다."},e.createElement(v,{gap:t.small,wrap:!0},l.map(({color:r,label:n})=>e.createElement(a,{key:r,variant:"status",color:r},n)))))}},x={name:"크기별",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(i,{title:"크기별",description:"medium(기본)과 small 크기를 비교합니다."},e.createElement(o,{style:{gap:t.large}},e.createElement(D,{gap:t.small},e.createElement(W,null,"medium (기본)"),e.createElement(v,{gap:t.small,wrap:!0},e.createElement(a,{variant:"status",color:"success"},"완료"),e.createElement(a,{variant:"level",level:2},"2단계"),e.createElement(a,{variant:"neutral"},"일반"))),e.createElement(D,{gap:t.small},e.createElement(W,null,"small"),e.createElement(v,{gap:t.small,wrap:!0},e.createElement(a,{variant:"status",color:"success",size:"small"},"완료"),e.createElement(a,{variant:"level",level:2,size:"small"},"2단계"),e.createElement(a,{variant:"neutral",size:"small"},"일반"))))))},f={name:"실전 예시: 과민음식 리스트",render:()=>{const l=[{name:"아몬드",level:5},{name:"우유",level:3},{name:"밀",level:4},{name:"계란",level:1},{name:"대두",level:2}];return e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(i,{title:"과민음식 리스트",description:"음식 항목에 레벨 태그를 붙여 과민도를 표시합니다."},e.createElement(o,{style:{maxWidth:375,padding:t.xlarge,backgroundColor:s.backgroundPrimary,borderRadius:16,borderWidth:1,borderColor:s.borderDefault,gap:t.medium}},e.createElement(y,{style:{fontSize:u.headline.fontSize,fontWeight:"600",color:s.textPrimary}},"과민 음식"),l.map((r,n)=>e.createElement(o,{key:n,style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:t.small,borderBottomWidth:n<l.length-1?1:0,borderBottomColor:s.borderDefault}},e.createElement(y,{style:{fontSize:u.body2.fontSize,color:s.textPrimary}},r.name),e.createElement(a,{variant:"level",level:r.level,size:"small"},`${r.level}단계`))))))}},E={name:"실전 예시: 분석 상태",render:()=>{const l=[{name:"종합 검사",status:"warning",label:"접수 대기"},{name:"혈액 검사",status:"info",label:"분석 중"},{name:"장내 미생물",status:"success",label:"결과 확인"},{name:"유전자 검사",status:"error",label:"기한 만료"}];return e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(i,{title:"분석 상태",description:"검사 항목에 상태 태그를 붙여 진행 상황을 표시합니다."},e.createElement(o,{style:{maxWidth:375,padding:t.xlarge,backgroundColor:s.backgroundPrimary,borderRadius:16,borderWidth:1,borderColor:s.borderDefault,gap:t.medium}},e.createElement(y,{style:{fontSize:u.headline.fontSize,fontWeight:"600",color:s.textPrimary}},"검사 현황"),l.map((r,n)=>e.createElement(o,{key:n,style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:t.small,borderBottomWidth:n<l.length-1?1:0,borderBottomColor:s.borderDefault}},e.createElement(y,{style:{fontSize:u.body2.fontSize,color:s.textPrimary}},r.name),e.createElement(a,{variant:"status",color:r.status,size:"small"},r.label))))))}},L={name:"전체 색상 팔레트",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(i,{title:"전체 색상 팔레트",description:"Level 5단계 + Status 8색을 한 화면에 나열합니다."},e.createElement(o,{style:{gap:t.xlarge}},e.createElement(D,{gap:t.small},e.createElement(W,null,"Level"),e.createElement(v,{gap:t.small,wrap:!0},[1,2,3,4,5].map(l=>e.createElement(a,{key:l,variant:"level",level:l},`${l}단계`)))),e.createElement(D,{gap:t.small},e.createElement(W,null,"Status"),e.createElement(v,{gap:t.small,wrap:!0},["neutral","info","success","warning","error","mint","violet","pink"].map(l=>e.createElement(a,{key:l,variant:"status",color:l},l)))))))},C={name:"디자인 스펙",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(i,{title:"디자인 스펙",badge:"디자인"},e.createElement(N,{title:"레이아웃",rows:[{property:"radius",token:"radius/full",value:"pill",type:"size"},{property:"medium padding-v",token:"spacing/xsmall",value:t.xsmall,type:"size"},{property:"medium padding-h",token:"spacing/medium",value:t.medium,type:"size"},{property:"small padding-v",token:"—",value:2,type:"size"},{property:"small padding-h",token:"spacing/small",value:t.small,type:"size"},{property:"medium 타이포",token:"Label 1",value:`${u.label1.fontSize}px / SemiBold`,type:"typography"},{property:"small 타이포",token:"Caption",value:`${u.caption.fontSize}px / SemiBold`,type:"typography"}]}),e.createElement(_,null),e.createElement(N,{title:"Level 색상",rows:[{property:"Lv1 배경 (안전)",token:"lightBlue[90]",value:g[90],type:"color"},{property:"Lv1 텍스트",token:"lightBlue[30]",value:g[30],type:"color"},{property:"Lv2 배경 (양호)",token:"green[90]",value:m[90],type:"color"},{property:"Lv2 텍스트",token:"green[30]",value:m[30],type:"color"},{property:"Lv3 배경 (보통)",token:"yellow[90]",value:h[90],type:"color"},{property:"Lv3 텍스트",token:"yellow[30]",value:h[30],type:"color"},{property:"Lv4 배경 (주의)",token:"orange[90]",value:p[90],type:"color"},{property:"Lv4 텍스트",token:"orange[30]",value:p[30],type:"color"},{property:"Lv5 배경 (위험)",token:"red[90]",value:c[90],type:"color"},{property:"Lv5 텍스트",token:"red[20]",value:c[20],type:"color"}]}),e.createElement(_,null),e.createElement(N,{title:"Status 색상",rows:[{property:"neutral 배경",token:"coolNeutral[97]",value:d[97],type:"color"},{property:"neutral 텍스트",token:"coolNeutral[40]",value:d[40],type:"color"},{property:"info 배경",token:"lightBlue[90]",value:g[90],type:"color"},{property:"info 텍스트",token:"lightBlue[30]",value:g[30],type:"color"},{property:"success 배경",token:"green[90]",value:m[90],type:"color"},{property:"success 텍스트",token:"green[30]",value:m[30],type:"color"},{property:"warning 배경",token:"orange[90]",value:p[90],type:"color"},{property:"warning 텍스트",token:"orange[30]",value:p[30],type:"color"},{property:"error 배경",token:"red[90]",value:c[90],type:"color"},{property:"error 텍스트",token:"red[20]",value:c[20],type:"color"},{property:"mint 배경",token:"mint[90]",value:R[90],type:"color"},{property:"mint 텍스트",token:"mint[30]",value:R[30],type:"color"},{property:"violet 배경",token:"violet[95]",value:B[95],type:"color"},{property:"violet 텍스트",token:"violet[30]",value:B[30],type:"color"},{property:"pink 배경",token:"pink[95]",value:V[95],type:"color"},{property:"pink 텍스트",token:"pink[30]",value:V[30],type:"color"}]})))},z={name:"사용 가이드",render:()=>e.createElement(o,{style:{gap:t["3xlarge"]}},e.createElement(i,{title:"사용 가이드",badge:"개발"},e.createElement(b,{title:"Import",code:"import { Tag } from '@design-system/components/Tag';"}),e.createElement(b,{title:"Neutral",code:'<Tag variant="neutral">일반 태그</Tag>'}),e.createElement(b,{title:"Level",code:`<Tag variant="level" level={3}>3단계</Tag>
<Tag variant="level" level={1} size="small">1단계</Tag>`}),e.createElement(b,{title:"Status",code:`<Tag variant="status" color="success">완료</Tag>
<Tag variant="status" color="warning">접수 대기</Tag>
<Tag variant="status" color="error">기한 만료</Tag>
<Tag variant="status" color="info">분석 중</Tag>`})))};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: spacing.xlarge
  }}>
      <Row gap={spacing.small} wrap>
        <Tag variant="neutral">기본 태그</Tag>
        <Tag variant="status" color="info">안내</Tag>
        <Tag variant="status" color="success">완료</Tag>
        <Tag variant="status" color="warning">주의</Tag>
        <Tag variant="status" color="error">오류</Tag>
        <Tag variant="level" level={1}>1단계</Tag>
      </Row>
    </View>
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Default (Neutral)',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="Default" description="기본 neutral 태그입니다. 카테고리나 일반 레이블에 사용합니다.">
        <Row gap={spacing.small} wrap>
          <Tag variant="neutral">일반</Tag>
          <Tag variant="neutral">카테고리</Tag>
          <Tag variant="neutral">기타</Tag>
        </Row>
      </Section>
    </View>
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Level 5단계',
  render: () => {
    const levels: {
      level: TagLevel;
      label: string;
    }[] = [{
      level: 1,
      label: '1단계'
    }, {
      level: 2,
      label: '2단계'
    }, {
      level: 3,
      label: '3단계'
    }, {
      level: 4,
      label: '4단계'
    }, {
      level: 5,
      label: '5단계'
    }];
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="Level 5단계" description="숫자 단계를 파스텔 색상으로 구분합니다.">
          <Row gap={spacing.small} wrap>
            {levels.map(({
            level,
            label
          }) => <Tag key={level} variant="level" level={level}>{label}</Tag>)}
          </Row>
        </Section>
      </View>;
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Status 색상',
  render: () => {
    const statuses: {
      color: TagColor;
      label: string;
    }[] = [{
      color: 'neutral',
      label: '기본'
    }, {
      color: 'info',
      label: '안내'
    }, {
      color: 'success',
      label: '완료'
    }, {
      color: 'warning',
      label: '주의'
    }, {
      color: 'error',
      label: '오류'
    }, {
      color: 'mint',
      label: '브랜드'
    }, {
      color: 'violet',
      label: '특별'
    }, {
      color: 'pink',
      label: '이벤트'
    }];
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="Status 색상" description="color prop으로 다양한 상태를 표현합니다.">
          <Row gap={spacing.small} wrap>
            {statuses.map(({
            color,
            label
          }) => <Tag key={color} variant="status" color={color}>{label}</Tag>)}
          </Row>
        </Section>
      </View>;
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '크기별',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="크기별" description="medium(기본)과 small 크기를 비교합니다.">
        <View style={{
        gap: spacing.large
      }}>
          <Col gap={spacing.small}>
            <StateLabel>medium (기본)</StateLabel>
            <Row gap={spacing.small} wrap>
              <Tag variant="status" color="success">완료</Tag>
              <Tag variant="level" level={2}>2단계</Tag>
              <Tag variant="neutral">일반</Tag>
            </Row>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>small</StateLabel>
            <Row gap={spacing.small} wrap>
              <Tag variant="status" color="success" size="small">완료</Tag>
              <Tag variant="level" level={2} size="small">2단계</Tag>
              <Tag variant="neutral" size="small">일반</Tag>
            </Row>
          </Col>
        </View>
      </Section>
    </View>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '실전 예시: 과민음식 리스트',
  render: () => {
    const items = [{
      name: '아몬드',
      level: 5 as TagLevel
    }, {
      name: '우유',
      level: 3 as TagLevel
    }, {
      name: '밀',
      level: 4 as TagLevel
    }, {
      name: '계란',
      level: 1 as TagLevel
    }, {
      name: '대두',
      level: 2 as TagLevel
    }];
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="과민음식 리스트" description="음식 항목에 레벨 태그를 붙여 과민도를 표시합니다.">
          <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          gap: spacing.medium
        }}>
            <Text style={{
            fontSize: textStyle.headline.fontSize,
            fontWeight: '600',
            color: semanticColor.textPrimary
          }}>과민 음식</Text>
            {items.map((item, i) => <View key={i} style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: spacing.small,
            borderBottomWidth: i < items.length - 1 ? 1 : 0,
            borderBottomColor: semanticColor.borderDefault
          }}>
                <Text style={{
              fontSize: textStyle.body2.fontSize,
              color: semanticColor.textPrimary
            }}>{item.name}</Text>
                <Tag variant="level" level={item.level} size="small">{\`\${item.level}단계\`}</Tag>
              </View>)}
          </View>
        </Section>
      </View>;
  }
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '실전 예시: 분석 상태',
  render: () => {
    const analyses = [{
      name: '종합 검사',
      status: 'warning' as TagColor,
      label: '접수 대기'
    }, {
      name: '혈액 검사',
      status: 'info' as TagColor,
      label: '분석 중'
    }, {
      name: '장내 미생물',
      status: 'success' as TagColor,
      label: '결과 확인'
    }, {
      name: '유전자 검사',
      status: 'error' as TagColor,
      label: '기한 만료'
    }];
    return <View style={{
      gap: spacing['3xlarge']
    }}>
        <Section title="분석 상태" description="검사 항목에 상태 태그를 붙여 진행 상황을 표시합니다.">
          <View style={{
          maxWidth: 375,
          padding: spacing.xlarge,
          backgroundColor: semanticColor.backgroundPrimary,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: semanticColor.borderDefault,
          gap: spacing.medium
        }}>
            <Text style={{
            fontSize: textStyle.headline.fontSize,
            fontWeight: '600',
            color: semanticColor.textPrimary
          }}>검사 현황</Text>
            {analyses.map((item, i) => <View key={i} style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: spacing.small,
            borderBottomWidth: i < analyses.length - 1 ? 1 : 0,
            borderBottomColor: semanticColor.borderDefault
          }}>
                <Text style={{
              fontSize: textStyle.body2.fontSize,
              color: semanticColor.textPrimary
            }}>{item.name}</Text>
                <Tag variant="status" color={item.status} size="small">{item.label}</Tag>
              </View>)}
          </View>
        </Section>
      </View>;
  }
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '전체 색상 팔레트',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="전체 색상 팔레트" description="Level 5단계 + Status 8색을 한 화면에 나열합니다.">
        <View style={{
        gap: spacing.xlarge
      }}>
          <Col gap={spacing.small}>
            <StateLabel>Level</StateLabel>
            <Row gap={spacing.small} wrap>
              {([1, 2, 3, 4, 5] as TagLevel[]).map(level => <Tag key={level} variant="level" level={level}>{\`\${level}단계\`}</Tag>)}
            </Row>
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Status</StateLabel>
            <Row gap={spacing.small} wrap>
              {(['neutral', 'info', 'success', 'warning', 'error', 'mint', 'violet', 'pink'] as TagColor[]).map(color => <Tag key={color} variant="status" color={color}>{color}</Tag>)}
            </Row>
          </Col>
        </View>
      </Section>
    </View>
}`,...L.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="디자인 스펙" badge="디자인">
        <TokenSpecTable title="레이아웃" rows={[{
        property: 'radius',
        token: 'radius/full',
        value: 'pill',
        type: 'size'
      }, {
        property: 'medium padding-v',
        token: 'spacing/xsmall',
        value: spacing.xsmall,
        type: 'size'
      }, {
        property: 'medium padding-h',
        token: 'spacing/medium',
        value: spacing.medium,
        type: 'size'
      }, {
        property: 'small padding-v',
        token: '—',
        value: 2,
        type: 'size'
      }, {
        property: 'small padding-h',
        token: 'spacing/small',
        value: spacing.small,
        type: 'size'
      }, {
        property: 'medium 타이포',
        token: 'Label 1',
        value: \`\${textStyle.label1.fontSize}px / SemiBold\`,
        type: 'typography'
      }, {
        property: 'small 타이포',
        token: 'Caption',
        value: \`\${textStyle.caption.fontSize}px / SemiBold\`,
        type: 'typography'
      }]} />
        <Divider />
        <TokenSpecTable title="Level 색상" rows={[{
        property: 'Lv1 배경 (안전)',
        token: 'lightBlue[90]',
        value: lightBlue[90],
        type: 'color'
      }, {
        property: 'Lv1 텍스트',
        token: 'lightBlue[30]',
        value: lightBlue[30],
        type: 'color'
      }, {
        property: 'Lv2 배경 (양호)',
        token: 'green[90]',
        value: green[90],
        type: 'color'
      }, {
        property: 'Lv2 텍스트',
        token: 'green[30]',
        value: green[30],
        type: 'color'
      }, {
        property: 'Lv3 배경 (보통)',
        token: 'yellow[90]',
        value: yellow[90],
        type: 'color'
      }, {
        property: 'Lv3 텍스트',
        token: 'yellow[30]',
        value: yellow[30],
        type: 'color'
      }, {
        property: 'Lv4 배경 (주의)',
        token: 'orange[90]',
        value: orange[90],
        type: 'color'
      }, {
        property: 'Lv4 텍스트',
        token: 'orange[30]',
        value: orange[30],
        type: 'color'
      }, {
        property: 'Lv5 배경 (위험)',
        token: 'red[90]',
        value: red[90],
        type: 'color'
      }, {
        property: 'Lv5 텍스트',
        token: 'red[20]',
        value: red[20],
        type: 'color'
      }]} />
        <Divider />
        <TokenSpecTable title="Status 색상" rows={[{
        property: 'neutral 배경',
        token: 'coolNeutral[97]',
        value: coolNeutral[97],
        type: 'color'
      }, {
        property: 'neutral 텍스트',
        token: 'coolNeutral[40]',
        value: coolNeutral[40],
        type: 'color'
      }, {
        property: 'info 배경',
        token: 'lightBlue[90]',
        value: lightBlue[90],
        type: 'color'
      }, {
        property: 'info 텍스트',
        token: 'lightBlue[30]',
        value: lightBlue[30],
        type: 'color'
      }, {
        property: 'success 배경',
        token: 'green[90]',
        value: green[90],
        type: 'color'
      }, {
        property: 'success 텍스트',
        token: 'green[30]',
        value: green[30],
        type: 'color'
      }, {
        property: 'warning 배경',
        token: 'orange[90]',
        value: orange[90],
        type: 'color'
      }, {
        property: 'warning 텍스트',
        token: 'orange[30]',
        value: orange[30],
        type: 'color'
      }, {
        property: 'error 배경',
        token: 'red[90]',
        value: red[90],
        type: 'color'
      }, {
        property: 'error 텍스트',
        token: 'red[20]',
        value: red[20],
        type: 'color'
      }, {
        property: 'mint 배경',
        token: 'mint[90]',
        value: mint[90],
        type: 'color'
      }, {
        property: 'mint 텍스트',
        token: 'mint[30]',
        value: mint[30],
        type: 'color'
      }, {
        property: 'violet 배경',
        token: 'violet[95]',
        value: violet[95],
        type: 'color'
      }, {
        property: 'violet 텍스트',
        token: 'violet[30]',
        value: violet[30],
        type: 'color'
      }, {
        property: 'pink 배경',
        token: 'pink[95]',
        value: pink[95],
        type: 'color'
      }, {
        property: 'pink 텍스트',
        token: 'pink[30]',
        value: pink[30],
        type: 'color'
      }]} />
      </Section>
    </View>
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '사용 가이드',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <Section title="사용 가이드" badge="개발">
        <CodeBlock title="Import" code={\`import { Tag } from '@design-system/components/Tag';\`} />
        <CodeBlock title="Neutral" code={\`<Tag variant="neutral">일반 태그</Tag>\`} />
        <CodeBlock title="Level" code={\`<Tag variant="level" level={3}>3단계</Tag>
<Tag variant="level" level={1} size="small">1단계</Tag>\`} />
        <CodeBlock title="Status" code={\`<Tag variant="status" color="success">완료</Tag>
<Tag variant="status" color="warning">접수 대기</Tag>
<Tag variant="status" color="error">기한 만료</Tag>
<Tag variant="status" color="info">분석 중</Tag>\`} />
      </Section>
    </View>
}`,...z.parameters?.docs?.source}}};const te=["Playground","Default","Levels","Statuses","Sizes","InContextList","InContextStatus","AllColors","DesignSpec","Usage"];export{L as AllColors,T as Default,C as DesignSpec,f as InContextList,E as InContextStatus,S as Levels,k as Playground,x as Sizes,w as Statuses,z as Usage,te as __namedExportsOrder,ee as default};
