import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Svg, { Polyline, Line as SvgLine } from 'react-native-svg';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../src/components/Checkbox';
import { Radio } from '../src/components/Radio';
import {
  Section, StateLabel, Row, Col, CompareGrid, Divider, CodeBlock,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import {
  spacing, semanticColor, radius, textStyle, colorTokensV2, line,
} from '../src/tokens/theme';

// ─── 토큰 매핑 (Figma "Check box, Radio" 명세 단일 진실 원천) ─────

const TOKEN = {
  KEY:      { figma: 'Line/Key Color',   code: 'colorTokensV2.Mono.mint[400]',    hex: colorTokensV2.Mono.mint[400] },
  N200:     { figma: 'Mono/Neutral-200', code: 'colorTokensV2.Mono.neutral[200]', hex: colorTokensV2.Mono.neutral[200] },
  N300:     { figma: 'Mono/Neutral-300', code: 'colorTokensV2.Mono.neutral[300]', hex: colorTokensV2.Mono.neutral[300] },
  WH:       { figma: 'WHBK/WH',          code: 'colorTokensV2.Mono.WH',           hex: colorTokensV2.Mono.WH },
  ON_COLOR: { figma: 'Icon/on Color',    code: 'semanticColor.iconOnColor',       hex: semanticColor.iconOnColor },
  LINE2:    { figma: 'Line/Line 2',      code: 'colorTokensV2.Mono.neutral[200]', hex: colorTokensV2.Mono.neutral[200] },
} as const;

// ─── Inline visual primitives (명세 B: icon-only Checkbox 시각 데모) ─

const CheckGlyph = ({ size, color, weight }: { size: number; color: string; weight: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Polyline points="20 6 9 17 4 12" stroke={color} strokeWidth={weight} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const MinusGlyph = ({ size, color, weight }: { size: number; color: string; weight: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <SvgLine x1={5} y1={12} x2={19} y2={12} stroke={color} strokeWidth={weight} strokeLinecap="round" />
  </Svg>
);

const BOX = 24;

const CheckboxBoxVisual = ({ state }: { state: 'selected' | 'multiple' | 'unselected' }) => {
  const bg = state === 'unselected' ? TOKEN.N200.hex : TOKEN.KEY.hex;
  const Glyph = state === 'multiple' ? MinusGlyph : CheckGlyph;
  return (
    <View style={{
      width: BOX, height: BOX, borderRadius: 8,
      backgroundColor: bg, alignItems: 'center', justifyContent: 'center',
    }}>
      <Glyph size={BOX * 0.7} color={TOKEN.ON_COLOR.hex} weight={line.bold} />
    </View>
  );
};

const CheckboxIconVisual = ({ state }: { state: 'selected' | 'unselected' }) => {
  const color = state === 'selected' ? TOKEN.KEY.hex : TOKEN.N300.hex;
  return (
    <View style={{ width: BOX, height: BOX, alignItems: 'center', justifyContent: 'center' }}>
      <CheckGlyph size={BOX} color={color} weight={line.medium} />
    </View>
  );
};

const RadioVisual = ({ state }: { state: 'selected' | 'unselected' }) => {
  const borderColor = state === 'selected' ? TOKEN.KEY.hex : TOKEN.LINE2.hex;
  return (
    <View style={{
      width: BOX, height: BOX, borderRadius: BOX / 2,
      backgroundColor: TOKEN.WH.hex, borderColor, borderWidth: line.heavy,
    }} />
  );
};

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Input/Checkbox & Radio',
  parameters: {
    docs: {
      description: {
        component: '`Checkbox`(다중 선택)와 `Radio`(단일 선택) 선택 컨트롤. Figma `Check box, Radio` 페이지의 명세를 1:1 반영합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [terms, setTerms] = useState(true);
    const [marketing, setMarketing] = useState(false);
    const [plan, setPlan] = useState<'monthly' | 'annual' | 'lifetime'>('annual');

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 플레이그라운드"
          description="Checkbox(다중 선택)와 Radio(단일 선택)를 실제로 클릭해 토글합니다."
        >
          <Row gap={spacing['3xlarge']} align="flex-start">
            <Col gap={spacing.medium}>
              <StateLabel>Checkbox — 다중 선택</StateLabel>
              <Checkbox
                state={terms ? 'checked' : 'unchecked'}
                label="이용약관에 동의합니다."
                onPress={() => setTerms(!terms)}
              />
              <Checkbox
                state={marketing ? 'checked' : 'unchecked'}
                label="마케팅 수신 동의 (선택)"
                sublabel="이벤트, 혜택 정보를 받아보실 수 있습니다."
                onPress={() => setMarketing(!marketing)}
              />
            </Col>

            <Col gap={spacing.medium}>
              <StateLabel>Radio — 단일 선택</StateLabel>
              <Radio checked={plan === 'monthly'}  label="월간 구독"  onPress={() => setPlan('monthly')} />
              <Radio checked={plan === 'annual'}   label="연간 구독"  sublabel="2개월 무료" onPress={() => setPlan('annual')} />
              <Radio checked={plan === 'lifetime'} label="평생 이용권" onPress={() => setPlan('lifetime')} />
            </Col>
          </Row>
        </Section>
      </View>
    );
  },
};

// ─── 2. 라벨 변형 ────────────────────────────────────────────

export const LabelVariations: Story = {
  name: '라벨 변형',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="라벨 변형"
        description="라벨·서브라벨·볼드·아이콘만 등 다양한 라벨 조합을 확인합니다."
      >
        <Row gap={spacing['3xlarge']} align="flex-start">
          <Col gap={spacing['2xlarge']}>
            <StateLabel>Checkbox</StateLabel>

            <Col gap={spacing.xsmall}>
              <StateLabel>라벨만</StateLabel>
              <Checkbox state="checked" label="이용약관에 동의합니다." />
            </Col>

            <Col gap={spacing.xsmall}>
              <StateLabel>라벨 + 서브라벨</StateLabel>
              <Checkbox state="checked" label="마케팅 수신 동의" sublabel="이벤트, 혜택 등의 정보를 받아보실 수 있습니다." />
            </Col>

            <Col gap={spacing.xsmall}>
              <StateLabel>볼드 라벨</StateLabel>
              <Checkbox state="checked" label="전체 동의" bold />
            </Col>

            <Col gap={spacing.xsmall}>
              <StateLabel>아이콘만</StateLabel>
              <Checkbox state="checked" />
            </Col>
          </Col>

          <Col gap={spacing['2xlarge']}>
            <StateLabel>Radio</StateLabel>

            <Col gap={spacing.xsmall}>
              <StateLabel>라벨만</StateLabel>
              <Radio checked label="월간 구독" />
            </Col>

            <Col gap={spacing.xsmall}>
              <StateLabel>라벨 + 서브라벨</StateLabel>
              <Radio checked label="연간 구독" sublabel="2개월 무료" />
            </Col>

            <Col gap={spacing.xsmall}>
              <StateLabel>아이콘만</StateLabel>
              <Radio checked />
            </Col>
          </Col>
        </Row>
      </Section>
    </View>
  ),
};

// ─── 3. 인터랙티브 데모 ──────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [items, setItems] = useState([
      { id: 'terms',     label: '이용약관 동의 (필수)',         checked: false },
      { id: 'privacy',   label: '개인정보 처리방침 동의 (필수)', checked: false },
      { id: 'marketing', label: '마케팅 수신 동의 (선택)',
        sublabel: '이벤트, 혜택 등의 정보를 받아보실 수 있습니다.', checked: false },
    ]);
    const [delivery, setDelivery] = useState<'standard' | 'express' | 'pickup'>('standard');

    const allChecked = items.every(i => i.checked);
    const someChecked = items.some(i => i.checked);
    const allState: 'checked' | 'indeterminate' | 'unchecked' =
      allChecked ? 'checked' : someChecked ? 'indeterminate' : 'unchecked';

    const toggleAll = () => {
      const next = !allChecked;
      setItems(items.map(i => ({ ...i, checked: next })));
    };
    const toggleItem = (id: string) => {
      setItems(items.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
    };

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="전체 동의(indeterminate 상태) 패턴과 라디오 그룹 단일 선택 패턴을 함께 확인합니다."
        >
          <Row gap={spacing['3xlarge']} align="flex-start">
            <View style={{ maxWidth: 400, gap: spacing.small }}>
              <StateLabel>전체 선택 / 개별 선택 (Checkbox)</StateLabel>
              <Checkbox state={allState} label="전체 동의" bold onPress={toggleAll} />
              <Divider />
              {items.map(item => (
                <Checkbox
                  key={item.id}
                  state={item.checked ? 'checked' : 'unchecked'}
                  label={item.label}
                  sublabel={item.sublabel}
                  onPress={() => toggleItem(item.id)}
                />
              ))}
            </View>

            <View style={{ maxWidth: 320, gap: spacing.small }}>
              <StateLabel>배송 방식 (Radio)</StateLabel>
              <Radio checked={delivery === 'standard'} label="일반 배송" sublabel="2-3일 소요" onPress={() => setDelivery('standard')} />
              <Radio checked={delivery === 'express'}  label="당일 배송" sublabel="+ 3,000원" onPress={() => setDelivery('express')} />
              <Radio checked={delivery === 'pickup'}   label="매장 픽업" sublabel="무료, 30분 후 수령" onPress={() => setDelivery('pickup')} />
            </View>
          </Row>
        </Section>
      </View>
    );
  },
};

// ─── 4. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="Figma Check box, Radio 페이지 1:1 매핑."
        badge="디자인"
      >
        {/* ── A. Checkbox-box ── */}
        <View style={{ gap: spacing.medium }}>
          <StateLabel>A. Checkbox-box · 컨테이너 있는 체크박스 (다중 선택)</StateLabel>
          <CompareGrid
            items={[
              { label: 'selected',          content: <CheckboxBoxVisual state="selected" /> },
              { label: 'selected multiple', content: <CheckboxBoxVisual state="multiple" /> },
              { label: 'unselected',        content: <CheckboxBoxVisual state="unselected" /> },
            ]}
          />
          <TokenSpecTable
            title="Checkbox-box 토큰 매트릭스"
            rows={[
              { property: 'container 배경 (selected)',          token: TOKEN.KEY.figma,      value: TOKEN.KEY.hex,      type: 'color' },
              { property: 'container 배경 (selected multiple)', token: TOKEN.KEY.figma,      value: TOKEN.KEY.hex,      type: 'color' },
              { property: 'container 배경 (unselected)',        token: TOKEN.N200.figma,     value: TOKEN.N200.hex,     type: 'color' },
              { property: 'icon (selected)',                    token: 'ic/Check-raw',       value: 'check icon',       type: 'size' },
              { property: 'icon (selected multiple)',           token: 'ic/minus-raw',       value: 'minus icon',       type: 'size' },
              { property: 'icon (unselected)',                  token: 'ic/Check-raw',       value: 'check icon',       type: 'size' },
              { property: 'icon color (전 상태 통일)',          token: TOKEN.ON_COLOR.figma, value: TOKEN.ON_COLOR.hex, type: 'color' },
              { property: 'icon weight',                        token: 'Line/Bold',          value: `${line.bold}`,     type: 'size' },
            ]}
          />
        </View>

        <Divider />

        {/* ── B. Checkbox (icon-only) ── */}
        <View style={{ gap: spacing.medium }}>
          <StateLabel>B. Checkbox · 컨테이너 없는 체크박스 (리스트용)</StateLabel>
          <CompareGrid
            items={[
              { label: 'selected',   content: <CheckboxIconVisual state="selected" /> },
              { label: 'unselected', content: <CheckboxIconVisual state="unselected" /> },
            ]}
          />
          <TokenSpecTable
            title="Checkbox (icon-only) 토큰 매트릭스"
            rows={[
              { property: 'icon (selected)',     token: 'ic/Check-raw',   value: 'check icon',  type: 'size' },
              { property: 'icon (unselected)',   token: 'ic/Check-raw',   value: 'check icon',  type: 'size' },
              { property: 'icon color (selected)',   token: TOKEN.KEY.figma,  value: TOKEN.KEY.hex,  type: 'color' },
              { property: 'icon color (unselected)', token: TOKEN.N300.figma, value: TOKEN.N300.hex, type: 'color' },
              { property: 'icon weight',         token: 'Line/Medium',    value: `${line.medium}`, type: 'size' },
            ]}
          />
        </View>

        <Divider />

        {/* ── C. Radio ── */}
        <View style={{ gap: spacing.medium }}>
          <StateLabel>C. Radio-Btn · 단일 선택</StateLabel>
          <CompareGrid
            items={[
              { label: 'selected',   content: <RadioVisual state="selected" /> },
              { label: 'unselected', content: <RadioVisual state="unselected" /> },
            ]}
          />
          <TokenSpecTable
            title="Radio 토큰 매트릭스"
            rows={[
              { property: 'container 배경 (selected)',   token: TOKEN.WH.figma,    value: TOKEN.WH.hex,    type: 'color' },
              { property: 'container 배경 (unselected)', token: TOKEN.WH.figma,    value: TOKEN.WH.hex,    type: 'color' },
              { property: 'border color (selected)',     token: TOKEN.KEY.figma,   value: TOKEN.KEY.hex,   type: 'color' },
              { property: 'border color (unselected)',   token: TOKEN.LINE2.figma, value: TOKEN.LINE2.hex, type: 'color' },
              { property: 'border weight',               token: 'Line/Heavy',      value: `${line.heavy}`, type: 'size' },
            ]}
          />
        </View>

        <Divider />

        {/* ── 공통 사용 예시 코드 ── */}
        <CodeBlock
          title="컴포넌트 사용"
          code={`import { Checkbox } from '@/components/Checkbox';
import { Radio } from '@/components/Radio';

// Checkbox (다중 선택)
<Checkbox state="checked" label="동의" />
<Checkbox state="indeterminate" label="부분 동의" />
<Checkbox state="unchecked" label="미동의" />

// Radio (단일 선택)
<Radio checked label="선택됨" />
<Radio label="선택되지 않음" />`}
        />
      </Section>
    </View>
  ),
};
