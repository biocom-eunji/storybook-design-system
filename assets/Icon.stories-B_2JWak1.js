import{r as I,R as e,V as c,s as B}from"./iframe-rdsxNJ7l.js";import{m as q,c as A,a as O,n as F,I as u}from"./Icon-DGfD0Qtj.js";import{T as l,c as o,M as W,g as k,e as a,s as r,f as d,r as f,m as S}from"./theme-KAxj7l-q.js";import{T as M}from"./index-fsILkl5G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkrO8KnR.js";import"./jsx-runtime-u17CrQMm.js";import"./index-LHpOlSgp.js";const V=Object.keys(F),D=Object.keys(O),P=Object.keys(A),v=Object.keys(q),Z={title:"Token/Icons",component:u,argTypes:{name:{control:"text",description:"아이콘 이름"},style:{control:"select",options:["normal","color","circle","mini"],description:"아이콘 카테고리"},size:{control:{type:"range",min:12,max:64,step:4},description:"아이콘 크기 (px)"},color:{control:"color",description:"색상 오버라이드"},active:{control:"boolean",description:"활성 상태"}},tags:["autodocs"]},H={normal:{label:"Normal",desc:"단색 라인 아이콘 — 범용 UI에 사용합니다.",size:24},color:{label:"Color",desc:"멀티컬러 아이콘 — 시각적 구분이 필요한 곳에 사용합니다.",size:32},circle:{label:"Circle",desc:"원형 배경 아이콘 — 카테고리·기능 구분에 사용합니다.",size:40},mini:{label:"Mini",desc:"소형 아이콘 — 인라인·뱃지 등 좁은 공간에 사용합니다.",size:20}};function N(t,s){return s==="normal"?`<Icon name="${t}" />`:`<Icon name="${t}" style="${s}" />`}const j=["info","star"],L=({name:t,iconStyle:s,copied:g,onCopy:i})=>{const y=g===`${s}-${t}`,m=H[s].size,x=s==="normal"&&j.includes(t);return e.createElement(W,{onPress:()=>i(t,s),style:({pressed:R})=>[n.card,x&&n.cardWide,R&&n.cardPressed,y&&n.cardCopied]},x?e.createElement(c,{style:n.iconRow},e.createElement(c,{style:n.iconVariantCol},e.createElement(u,{name:t,style:s,variant:"regular",size:m}),e.createElement(l,{style:n.variantLabel},"Regular")),e.createElement(c,{style:n.iconVariantCol},e.createElement(u,{name:t,style:s,variant:"fill",size:m}),e.createElement(l,{style:n.variantLabel},"Fill"))):e.createElement(c,{style:n.iconArea},e.createElement(u,{name:t,style:s,size:m})),y?e.createElement(l,{style:n.copiedText},"복사 완료!"):e.createElement(l,{style:n.cardName,numberOfLines:1},t))},$=({names:t,iconStyle:s})=>{const[g,i]=I.useState(null),y=I.useCallback((m,x)=>{navigator.clipboard.writeText(N(m,x)),i(`${x}-${m}`),setTimeout(()=>i(null),1500)},[]);return t.length===0?e.createElement(l,{style:{fontSize:a.small,color:o.textSecondary,paddingVertical:r["2xlarge"]}},"검색 결과가 없습니다."):e.createElement(c,{style:n.grid},t.map(m=>e.createElement(L,{key:m,name:m,iconStyle:s,copied:g,onCopy:y})))},p=({iconStyle:t,names:s,showDivider:g=!1})=>{const{label:i,desc:y}=H[t];return e.createElement(e.Fragment,null,g&&e.createElement(c,{style:n.divider}),e.createElement(c,{style:n.section},e.createElement(c,{style:n.sectionHeader},e.createElement(l,{style:n.sectionTitle},i),e.createElement(c,{style:n.badge},e.createElement(l,{style:n.badgeText},s.length))),e.createElement(l,{style:n.sectionDesc},y),e.createElement(l,{style:n.usageHint},"사용법: ",N("{name}",t)),e.createElement($,{names:s,iconStyle:t})))},b={args:{name:"bell",style:"normal",size:32}},h={render:()=>e.createElement(p,{iconStyle:"normal",names:V})},C={render:()=>e.createElement(p,{iconStyle:"color",names:D})},z={render:()=>e.createElement(p,{iconStyle:"circle",names:P})},T={render:()=>e.createElement(p,{iconStyle:"mini",names:v})},E={name:"Gallery",render:()=>{const[t,s]=I.useState(""),g=t.trim().toLowerCase(),i=I.useMemo(()=>({normal:V.filter(m=>m.includes(g)),color:D.filter(m=>m.includes(g)),circle:P.filter(m=>m.includes(g)),mini:v.filter(m=>m.includes(g))}),[g]),y=i.normal.length+i.color.length+i.circle.length+i.mini.length;return e.createElement(c,{style:n.gallery},e.createElement(c,{style:n.galleryHeader},e.createElement(l,{style:n.galleryTitle},"Icon Gallery"),e.createElement(l,{style:n.gallerySubtitle},"아이콘을 클릭하면 JSX 코드가 클립보드에 복사됩니다.")),e.createElement(c,{style:n.searchWrap},e.createElement(u,{name:"magnifying-glass",size:16,color:o.iconSecondary}),e.createElement(M,{value:t,onChangeText:s,placeholder:"아이콘 이름으로 검색...",placeholderTextColor:o.textTertiary,style:n.searchInput}),t.length>0&&e.createElement(W,{onPress:()=>s("")},e.createElement(l,{style:{fontSize:a.small,color:k[60]}},"지우기"))),g.length>0&&e.createElement(l,{style:n.resultCount},y,"개 아이콘 검색됨"),i.normal.length>0&&e.createElement(p,{iconStyle:"normal",names:i.normal}),i.color.length>0&&e.createElement(p,{iconStyle:"color",names:i.color,showDivider:i.normal.length>0}),i.circle.length>0&&e.createElement(p,{iconStyle:"circle",names:i.circle,showDivider:i.normal.length+i.color.length>0}),i.mini.length>0&&e.createElement(p,{iconStyle:"mini",names:i.mini,showDivider:i.normal.length+i.color.length+i.circle.length>0}),y===0&&g.length>0&&e.createElement(c,{style:n.emptyState},e.createElement(l,{style:{fontSize:a.large,color:o.textTertiary,marginBottom:r.small}},"검색 결과 없음"),e.createElement(l,{style:{fontSize:a.small,color:o.textSecondary}},'"',t,'"에 해당하는 아이콘이 없습니다.')))}},w={name:"디자인 스펙",render:()=>e.createElement(c,{style:{gap:r["3xlarge"]}},e.createElement(c,{style:{gap:r.xlarge}},e.createElement(c,null,e.createElement(l,{style:{fontSize:a.large,fontWeight:d.bold,color:o.textPrimary,marginBottom:r.xsmall}},"디자인 스펙"),e.createElement(l,{style:{fontSize:a.small,color:o.textSecondary,marginBottom:r["2xlarge"]}},"Figma 시맨틱 토큰 기준 Icon 카테고리별 크기 · 색상 스펙입니다.")),e.createElement(c,{style:{borderWidth:1,borderColor:o.borderDefault,borderRadius:f.medium,overflow:"hidden"}},e.createElement(c,{style:{flexDirection:"row",backgroundColor:o.backgroundTertiary,paddingVertical:r.small,paddingHorizontal:r.medium}},e.createElement(l,{style:{flex:1,fontSize:a.xsmall,fontWeight:d.semibold,color:o.textPrimary}},"카테고리"),e.createElement(l,{style:{flex:1,fontSize:a.xsmall,fontWeight:d.semibold,color:o.textPrimary}},"기본 크기"),e.createElement(l,{style:{flex:1,fontSize:a.xsmall,fontWeight:d.semibold,color:o.textPrimary}},"용도")),[{category:"normal",size:"24px",desc:"범용 UI 아이콘"},{category:"color",size:"32px",desc:"멀티컬러 구분 아이콘"},{category:"circle",size:"48px",desc:"원형 카테고리 아이콘"},{category:"mini",size:"20px",desc:"인라인 · 뱃지 소형 아이콘"}].map((t,s)=>e.createElement(c,{key:t.category,style:{flexDirection:"row",paddingVertical:r.small,paddingHorizontal:r.medium,borderTopWidth:1,borderTopColor:o.borderDefault,backgroundColor:s%2===1?o.backgroundSecondary:o.backgroundPrimary}},e.createElement(l,{style:{flex:1,fontSize:a.xsmall,fontWeight:d.medium,color:o.textPrimary}},t.category),e.createElement(l,{style:{flex:1,fontSize:a.xsmall,color:o.textSecondary,fontFamily:"monospace"}},t.size),e.createElement(l,{style:{flex:1,fontSize:a.xsmall,color:o.textSecondary}},t.desc)))),e.createElement(c,{style:{borderWidth:1,borderColor:o.borderDefault,borderRadius:f.medium,overflow:"hidden",marginTop:r.large}},e.createElement(c,{style:{flexDirection:"row",backgroundColor:o.backgroundTertiary,paddingVertical:r.small,paddingHorizontal:r.medium}},e.createElement(l,{style:{flex:1,fontSize:a.xsmall,fontWeight:d.semibold,color:o.textPrimary}},"속성"),e.createElement(l,{style:{flex:1,fontSize:a.xsmall,fontWeight:d.semibold,color:o.textPrimary}},"토큰"),e.createElement(l,{style:{width:24,fontSize:a.xsmall,fontWeight:d.semibold,color:o.textPrimary}},"값")),[{property:"기본 아이콘",token:"color/icon/primary",color:o.iconPrimary},{property:"보조 아이콘",token:"color/icon/secondary",color:o.iconSecondary},{property:"비활성 아이콘",token:"color/icon/disabled",color:o.iconDisabled},{property:"브랜드 아이콘",token:"color/icon/brand",color:o.iconBrand},{property:"색상 배경 위",token:"color/icon/onColor",color:o.iconOnColor},{property:"에러 아이콘",token:"color/icon/error",color:o.iconError},{property:"성공 아이콘",token:"color/icon/success",color:o.iconSuccess},{property:"경고 아이콘",token:"color/icon/warning",color:o.iconWarning},{property:"미선택 아이콘",token:"color/icon/inactive",color:o.iconInactive}].map((t,s)=>e.createElement(c,{key:t.token,style:{flexDirection:"row",alignItems:"center",paddingVertical:r.small,paddingHorizontal:r.medium,borderTopWidth:1,borderTopColor:o.borderDefault,backgroundColor:s%2===1?o.backgroundSecondary:o.backgroundPrimary}},e.createElement(l,{style:{flex:1,fontSize:a.xsmall,color:o.textPrimary}},t.property),e.createElement(l,{style:{flex:1,fontSize:a.xsmall,color:o.textSecondary,fontFamily:"monospace"}},t.token),e.createElement(c,{style:{width:20,height:20,borderRadius:f.xsmall,backgroundColor:t.color,borderWidth:1,borderColor:o.borderDefault}}))))))},n=B.create({grid:{flexDirection:"row",flexWrap:"wrap",gap:r.small},card:{width:104,paddingVertical:r.medium,paddingHorizontal:r.small,alignItems:"center",justifyContent:"center",gap:r.small,borderRadius:f.medium,backgroundColor:o.backgroundSecondary,borderWidth:1,borderColor:"transparent",cursor:"pointer"},cardWide:{width:160},cardPressed:{backgroundColor:o.backgroundTertiary,transform:[{scale:.96}]},cardCopied:{backgroundColor:S[99],borderColor:S[90]},iconArea:{height:40,alignItems:"center",justifyContent:"center"},iconRow:{flexDirection:"row",gap:r.large,height:40,alignItems:"center",justifyContent:"center"},iconVariantCol:{alignItems:"center",gap:r.xsmall},variantLabel:{fontSize:10,fontWeight:d.medium,color:o.textTertiary,textAlign:"center"},cardName:{fontSize:a.xsmall,fontWeight:d.medium,color:o.textSecondary,textAlign:"center"},copiedText:{fontSize:a.xsmall,fontWeight:d.semibold,color:o.textBrand,textAlign:"center"},section:{marginBottom:r["3xlarge"]},sectionHeader:{flexDirection:"row",alignItems:"center",gap:r.small,marginBottom:r.xsmall},sectionTitle:{fontSize:a.large,fontWeight:d.bold,color:o.textPrimary},sectionDesc:{fontSize:a.small,color:o.textSecondary,marginBottom:r.small},usageHint:{fontSize:a.xsmall,fontFamily:"monospace",color:o.textSecondary,backgroundColor:o.backgroundSecondary,paddingVertical:r.xsmall,paddingHorizontal:r.small,borderRadius:f.xsmall,marginBottom:r.large,alignSelf:"flex-start"},badge:{backgroundColor:S[95],paddingHorizontal:r.small,paddingVertical:2,borderRadius:f.full},badgeText:{fontSize:a.xsmall,fontWeight:d.semibold,color:S[40]},divider:{height:1,backgroundColor:o.borderDefault,marginBottom:r["3xlarge"]},gallery:{},galleryHeader:{marginBottom:r["3xlarge"]},galleryTitle:{fontSize:a["2xlarge"],fontWeight:d.bold,color:k[10],marginBottom:r.xsmall},gallerySubtitle:{fontSize:a.medium,color:o.textSecondary},searchWrap:{flexDirection:"row",alignItems:"center",gap:r.small,backgroundColor:o.backgroundSecondary,borderWidth:1,borderColor:k[95],borderRadius:f.medium,paddingHorizontal:r.medium,paddingVertical:r.small,marginBottom:r["2xlarge"]},searchInput:{flex:1,fontSize:a.medium,color:o.textPrimary,outlineStyle:"none"},resultCount:{fontSize:a.small,fontWeight:d.medium,color:o.textSecondary,marginBottom:r.large},emptyState:{alignItems:"center",paddingVertical:r["4xlarge"]}});b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'bell',
    style: 'normal',
    size: 32
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <IconSection iconStyle="normal" names={normalIconNames} />
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <IconSection iconStyle="color" names={colorIconNames} />
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <IconSection iconStyle="circle" names={circleIconNames} />
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <IconSection iconStyle="mini" names={miniIconNames} />
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Gallery',
  render: () => {
    const [query, setQuery] = useState('');
    const q = query.trim().toLowerCase();
    const filtered = useMemo(() => ({
      normal: normalIconNames.filter(n => n.includes(q)),
      color: colorIconNames.filter(n => n.includes(q)),
      circle: circleIconNames.filter(n => n.includes(q)),
      mini: miniIconNames.filter(n => n.includes(q))
    }), [q]);
    const total = filtered.normal.length + filtered.color.length + filtered.circle.length + filtered.mini.length;
    return <View style={styles.gallery}>
        {/* Header */}
        <View style={styles.galleryHeader}>
          <Text style={styles.galleryTitle}>Icon Gallery</Text>
          <Text style={styles.gallerySubtitle}>
            아이콘을 클릭하면 JSX 코드가 클립보드에 복사됩니다.
          </Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrap}>
          <Icon name="magnifying-glass" size={16} color={semanticColor.iconSecondary} />
          <TextInput value={query} onChangeText={setQuery} placeholder="아이콘 이름으로 검색..." placeholderTextColor={semanticColor.textTertiary} style={styles.searchInput} />
          {query.length > 0 && <Pressable onPress={() => setQuery('')}>
              <Text style={{
            fontSize: fontSize.small,
            color: coolNeutral[60]
          }}>지우기</Text>
            </Pressable>}
        </View>

        {/* Result count */}
        {q.length > 0 && <Text style={styles.resultCount}>
            {total}개 아이콘 검색됨
          </Text>}

        {/* Sections */}
        {filtered.normal.length > 0 && <IconSection iconStyle="normal" names={filtered.normal} />}
        {filtered.color.length > 0 && <IconSection iconStyle="color" names={filtered.color} showDivider={filtered.normal.length > 0} />}
        {filtered.circle.length > 0 && <IconSection iconStyle="circle" names={filtered.circle} showDivider={filtered.normal.length + filtered.color.length > 0} />}
        {filtered.mini.length > 0 && <IconSection iconStyle="mini" names={filtered.mini} showDivider={filtered.normal.length + filtered.color.length + filtered.circle.length > 0} />}

        {total === 0 && q.length > 0 && <View style={styles.emptyState}>
            <Text style={{
          fontSize: fontSize.large,
          color: semanticColor.textTertiary,
          marginBottom: spacing.small
        }}>검색 결과 없음</Text>
            <Text style={{
          fontSize: fontSize.small,
          color: semanticColor.textSecondary
        }}>
              "{query}"에 해당하는 아이콘이 없습니다.
            </Text>
          </View>}
      </View>;
  }
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '디자인 스펙',
  render: () => <View style={{
    gap: spacing['3xlarge']
  }}>
      <View style={{
      gap: spacing.xlarge
    }}>
        <View>
          <Text style={{
          fontSize: fontSize.large,
          fontWeight: fontWeight.bold,
          color: semanticColor.textPrimary,
          marginBottom: spacing.xsmall
        }}>
            디자인 스펙
          </Text>
          <Text style={{
          fontSize: fontSize.small,
          color: semanticColor.textSecondary,
          marginBottom: spacing['2xlarge']
        }}>
            Figma 시맨틱 토큰 기준 Icon 카테고리별 크기 · 색상 스펙입니다.
          </Text>
        </View>

        {/* 카테고리별 크기 테이블 */}
        <View style={{
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: radius.medium,
        overflow: 'hidden'
      }}>
          {/* Header */}
          <View style={{
          flexDirection: 'row',
          backgroundColor: semanticColor.backgroundTertiary,
          paddingVertical: spacing.small,
          paddingHorizontal: spacing.medium
        }}>
            <Text style={{
            flex: 1,
            fontSize: fontSize.xsmall,
            fontWeight: fontWeight.semibold,
            color: semanticColor.textPrimary
          }}>카테고리</Text>
            <Text style={{
            flex: 1,
            fontSize: fontSize.xsmall,
            fontWeight: fontWeight.semibold,
            color: semanticColor.textPrimary
          }}>기본 크기</Text>
            <Text style={{
            flex: 1,
            fontSize: fontSize.xsmall,
            fontWeight: fontWeight.semibold,
            color: semanticColor.textPrimary
          }}>용도</Text>
          </View>
          {/* Rows */}
          {([{
          category: 'normal',
          size: '24px',
          desc: '범용 UI 아이콘'
        }, {
          category: 'color',
          size: '32px',
          desc: '멀티컬러 구분 아이콘'
        }, {
          category: 'circle',
          size: '48px',
          desc: '원형 카테고리 아이콘'
        }, {
          category: 'mini',
          size: '20px',
          desc: '인라인 · 뱃지 소형 아이콘'
        }] as const).map((row, idx) => <View key={row.category} style={{
          flexDirection: 'row',
          paddingVertical: spacing.small,
          paddingHorizontal: spacing.medium,
          borderTopWidth: 1,
          borderTopColor: semanticColor.borderDefault,
          backgroundColor: idx % 2 === 1 ? semanticColor.backgroundSecondary : semanticColor.backgroundPrimary
        }}>
              <Text style={{
            flex: 1,
            fontSize: fontSize.xsmall,
            fontWeight: fontWeight.medium,
            color: semanticColor.textPrimary
          }}>{row.category}</Text>
              <Text style={{
            flex: 1,
            fontSize: fontSize.xsmall,
            color: semanticColor.textSecondary,
            fontFamily: 'monospace'
          }}>{row.size}</Text>
              <Text style={{
            flex: 1,
            fontSize: fontSize.xsmall,
            color: semanticColor.textSecondary
          }}>{row.desc}</Text>
            </View>)}
        </View>

        {/* 색상 토큰 테이블 */}
        <View style={{
        borderWidth: 1,
        borderColor: semanticColor.borderDefault,
        borderRadius: radius.medium,
        overflow: 'hidden',
        marginTop: spacing.large
      }}>
          {/* Header */}
          <View style={{
          flexDirection: 'row',
          backgroundColor: semanticColor.backgroundTertiary,
          paddingVertical: spacing.small,
          paddingHorizontal: spacing.medium
        }}>
            <Text style={{
            flex: 1,
            fontSize: fontSize.xsmall,
            fontWeight: fontWeight.semibold,
            color: semanticColor.textPrimary
          }}>속성</Text>
            <Text style={{
            flex: 1,
            fontSize: fontSize.xsmall,
            fontWeight: fontWeight.semibold,
            color: semanticColor.textPrimary
          }}>토큰</Text>
            <Text style={{
            width: 24,
            fontSize: fontSize.xsmall,
            fontWeight: fontWeight.semibold,
            color: semanticColor.textPrimary
          }}>값</Text>
          </View>
          {/* Color Rows */}
          {[{
          property: '기본 아이콘',
          token: 'color/icon/primary',
          color: semanticColor.iconPrimary
        }, {
          property: '보조 아이콘',
          token: 'color/icon/secondary',
          color: semanticColor.iconSecondary
        }, {
          property: '비활성 아이콘',
          token: 'color/icon/disabled',
          color: semanticColor.iconDisabled
        }, {
          property: '브랜드 아이콘',
          token: 'color/icon/brand',
          color: semanticColor.iconBrand
        }, {
          property: '색상 배경 위',
          token: 'color/icon/onColor',
          color: semanticColor.iconOnColor
        }, {
          property: '에러 아이콘',
          token: 'color/icon/error',
          color: semanticColor.iconError
        }, {
          property: '성공 아이콘',
          token: 'color/icon/success',
          color: semanticColor.iconSuccess
        }, {
          property: '경고 아이콘',
          token: 'color/icon/warning',
          color: semanticColor.iconWarning
        }, {
          property: '미선택 아이콘',
          token: 'color/icon/inactive',
          color: semanticColor.iconInactive
        }].map((row, idx) => <View key={row.token} style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: spacing.small,
          paddingHorizontal: spacing.medium,
          borderTopWidth: 1,
          borderTopColor: semanticColor.borderDefault,
          backgroundColor: idx % 2 === 1 ? semanticColor.backgroundSecondary : semanticColor.backgroundPrimary
        }}>
              <Text style={{
            flex: 1,
            fontSize: fontSize.xsmall,
            color: semanticColor.textPrimary
          }}>{row.property}</Text>
              <Text style={{
            flex: 1,
            fontSize: fontSize.xsmall,
            color: semanticColor.textSecondary,
            fontFamily: 'monospace'
          }}>{row.token}</Text>
              <View style={{
            width: 20,
            height: 20,
            borderRadius: radius.xsmall,
            backgroundColor: row.color,
            borderWidth: 1,
            borderColor: semanticColor.borderDefault
          }} />
            </View>)}
        </View>
      </View>
    </View>
}`,...w.parameters?.docs?.source}}};const ee=["Playground","NormalIcons","ColorIcons","CircleIcons","MiniIcons","AllIcons","DesignSpec"];export{E as AllIcons,z as CircleIcons,C as ColorIcons,w as DesignSpec,T as MiniIcons,h as NormalIcons,b as Playground,ee as __namedExportsOrder,Z as default};
