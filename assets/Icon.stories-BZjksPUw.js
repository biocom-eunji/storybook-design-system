import{r as C,R as e,V as d,s as H}from"./iframe-CExKz_YG.js";import{m as B,c as D,a as P,n as A,I as T}from"./Icon-CTnW1Y2_.js";import{T as m,c as o,M as w,a as s,s as l,f as y,r as h,m as p}from"./theme-DRANkRo4.js";import{T as M}from"./index-w3bVWpth.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPDVw3Nd.js";const N=Object.keys(A),V=Object.keys(P),q=Object.keys(D),k=Object.keys(B),F={title:"General/Icon",component:T,argTypes:{name:{control:"text",description:"아이콘 이름"},style:{control:"select",options:["normal","color","circle","mini"],description:"아이콘 카테고리"},size:{control:{type:"range",min:12,max:64,step:4},description:"아이콘 크기 (px)"},color:{control:"color",description:"색상 오버라이드"},active:{control:"boolean",description:"활성 상태"}},tags:["autodocs"]},v={normal:{label:"Normal",desc:"단색 라인 아이콘 — 범용 UI에 사용합니다.",size:24},color:{label:"Color",desc:"멀티컬러 아이콘 — 시각적 구분이 필요한 곳에 사용합니다.",size:32},circle:{label:"Circle",desc:"원형 배경 아이콘 — 카테고리·기능 구분에 사용합니다.",size:40},mini:{label:"Mini",desc:"소형 아이콘 — 인라인·뱃지 등 좁은 공간에 사용합니다.",size:20}};function W(n,a){return a==="normal"?`<Icon name="${n}" />`:`<Icon name="${n}" style="${a}" />`}const R=({name:n,iconStyle:a,copied:i,onCopy:t})=>{const g=i===`${a}-${n}`,c=v[a].size;return e.createElement(w,{onPress:()=>t(n,a),style:({pressed:f})=>[r.card,f&&r.cardPressed,g&&r.cardCopied]},e.createElement(d,{style:r.iconArea},e.createElement(T,{name:n,style:a,size:c})),g?e.createElement(m,{style:r.copiedText},"복사 완료!"):e.createElement(m,{style:r.cardName,numberOfLines:1},n))},G=({names:n,iconStyle:a})=>{const[i,t]=C.useState(null),g=C.useCallback((c,f)=>{navigator.clipboard.writeText(W(c,f)),t(`${f}-${c}`),setTimeout(()=>t(null),1500)},[]);return n.length===0?e.createElement(m,{style:{fontSize:s.small,color:o[70],paddingVertical:l["2xlarge"]}},"검색 결과가 없습니다."):e.createElement(d,{style:r.grid},n.map(c=>e.createElement(R,{key:c,name:c,iconStyle:a,copied:i,onCopy:g})))},u=({iconStyle:n,names:a,showDivider:i=!1})=>{const{label:t,desc:g}=v[n];return e.createElement(e.Fragment,null,i&&e.createElement(d,{style:r.divider}),e.createElement(d,{style:r.section},e.createElement(d,{style:r.sectionHeader},e.createElement(m,{style:r.sectionTitle},t),e.createElement(d,{style:r.badge},e.createElement(m,{style:r.badgeText},a.length))),e.createElement(m,{style:r.sectionDesc},g),e.createElement(m,{style:r.usageHint},"사용법: ",W("{name}",n)),e.createElement(G,{names:a,iconStyle:n})))},S={args:{name:"bell",style:"normal",size:32}},I={render:()=>e.createElement(u,{iconStyle:"normal",names:N})},x={render:()=>e.createElement(u,{iconStyle:"color",names:V})},b={render:()=>e.createElement(u,{iconStyle:"circle",names:q})},E={render:()=>e.createElement(u,{iconStyle:"mini",names:k})},z={name:"Gallery",render:()=>{const[n,a]=C.useState(""),i=n.trim().toLowerCase(),t=C.useMemo(()=>({normal:N.filter(c=>c.includes(i)),color:V.filter(c=>c.includes(i)),circle:q.filter(c=>c.includes(i)),mini:k.filter(c=>c.includes(i))}),[i]),g=t.normal.length+t.color.length+t.circle.length+t.mini.length;return e.createElement(d,{style:r.gallery},e.createElement(d,{style:r.galleryHeader},e.createElement(m,{style:r.galleryTitle},"Icon Gallery"),e.createElement(m,{style:r.gallerySubtitle},"아이콘을 클릭하면 JSX 코드가 클립보드에 복사됩니다.")),e.createElement(d,{style:r.searchWrap},e.createElement(T,{name:"magnifying-glass",size:16,color:o[70]}),e.createElement(M,{value:n,onChangeText:a,placeholder:"아이콘 이름으로 검색...",placeholderTextColor:o[80],style:r.searchInput}),n.length>0&&e.createElement(w,{onPress:()=>a("")},e.createElement(m,{style:{fontSize:s.small,color:o[60]}},"지우기"))),i.length>0&&e.createElement(m,{style:r.resultCount},g,"개 아이콘 검색됨"),t.normal.length>0&&e.createElement(u,{iconStyle:"normal",names:t.normal}),t.color.length>0&&e.createElement(u,{iconStyle:"color",names:t.color,showDivider:t.normal.length>0}),t.circle.length>0&&e.createElement(u,{iconStyle:"circle",names:t.circle,showDivider:t.normal.length+t.color.length>0}),t.mini.length>0&&e.createElement(u,{iconStyle:"mini",names:t.mini,showDivider:t.normal.length+t.color.length+t.circle.length>0}),g===0&&i.length>0&&e.createElement(d,{style:r.emptyState},e.createElement(m,{style:{fontSize:s.large,color:o[80],marginBottom:l.small}},"검색 결과 없음"),e.createElement(m,{style:{fontSize:s.small,color:o[70]}},'"',n,'"에 해당하는 아이콘이 없습니다.')))}},r=H.create({grid:{flexDirection:"row",flexWrap:"wrap",gap:l.small},card:{width:104,paddingVertical:l.medium,paddingHorizontal:l.small,alignItems:"center",justifyContent:"center",gap:l.small,borderRadius:h.medium,backgroundColor:o[99],borderWidth:1,borderColor:"transparent",cursor:"pointer"},cardPressed:{backgroundColor:o[97],transform:[{scale:.96}]},cardCopied:{backgroundColor:p[99],borderColor:p[90]},iconArea:{height:40,alignItems:"center",justifyContent:"center"},cardName:{fontSize:s.xsmall,fontWeight:y.medium,color:o[50],textAlign:"center"},copiedText:{fontSize:s.xsmall,fontWeight:y.semibold,color:p[45],textAlign:"center"},section:{marginBottom:l["3xlarge"]},sectionHeader:{flexDirection:"row",alignItems:"center",gap:l.small,marginBottom:l.xsmall},sectionTitle:{fontSize:s.large,fontWeight:y.bold,color:o[17]},sectionDesc:{fontSize:s.small,color:o[50],marginBottom:l.small},usageHint:{fontSize:s.xsmall,fontFamily:"monospace",color:o[70],backgroundColor:o[99],paddingVertical:l.xsmall,paddingHorizontal:l.small,borderRadius:h.xsmall,marginBottom:l.large,alignSelf:"flex-start"},badge:{backgroundColor:p[95],paddingHorizontal:l.small,paddingVertical:2,borderRadius:h.full},badgeText:{fontSize:s.xsmall,fontWeight:y.semibold,color:p[40]},divider:{height:1,backgroundColor:o[96],marginBottom:l["3xlarge"]},gallery:{},galleryHeader:{marginBottom:l["3xlarge"]},galleryTitle:{fontSize:s["2xlarge"],fontWeight:y.bold,color:o[10],marginBottom:l.xsmall},gallerySubtitle:{fontSize:s.medium,color:o[50]},searchWrap:{flexDirection:"row",alignItems:"center",gap:l.small,backgroundColor:o[99],borderWidth:1,borderColor:o[95],borderRadius:h.medium,paddingHorizontal:l.medium,paddingVertical:l.small,marginBottom:l["2xlarge"]},searchInput:{flex:1,fontSize:s.medium,color:o[17],outlineStyle:"none"},resultCount:{fontSize:s.small,fontWeight:y.medium,color:o[50],marginBottom:l.large},emptyState:{alignItems:"center",paddingVertical:l["4xlarge"]}});S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'bell',
    style: 'normal',
    size: 32
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <IconSection iconStyle="normal" names={normalIconNames} />
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <IconSection iconStyle="color" names={colorIconNames} />
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <IconSection iconStyle="circle" names={circleIconNames} />
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <IconSection iconStyle="mini" names={miniIconNames} />
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
          <Icon name="magnifying-glass" size={16} color={coolNeutral[70]} />
          <TextInput value={query} onChangeText={setQuery} placeholder="아이콘 이름으로 검색..." placeholderTextColor={coolNeutral[80]} style={styles.searchInput} />
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
          color: coolNeutral[80],
          marginBottom: spacing.small
        }}>검색 결과 없음</Text>
            <Text style={{
          fontSize: fontSize.small,
          color: coolNeutral[70]
        }}>
              "{query}"에 해당하는 아이콘이 없습니다.
            </Text>
          </View>}
      </View>;
  }
}`,...z.parameters?.docs?.source}}};const J=["Playground","NormalIcons","ColorIcons","CircleIcons","MiniIcons","AllIcons"];export{z as AllIcons,b as CircleIcons,x as ColorIcons,E as MiniIcons,I as NormalIcons,S as Playground,J as __namedExportsOrder,F as default};
