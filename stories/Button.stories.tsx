import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Polyline } from 'react-native-svg';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/components/Button';
import {
  Section, StateLabel, Row, Col, CompareGrid, Divider, CodeBlock,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import { buttonToken, spacing, textStyleV2 } from '../src/tokens/theme';

// ─── Inline icons (Figma icon size 16) ────────────────────────

const PlusIcon = ({ color = '#000', size = 16 }: { color?: string; size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 5v14M5 12h14" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </Svg>
);
const ArrowRight = ({ color = '#000', size = 16 }: { color?: string; size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);
const CheckIcon = ({ color = '#000', size = 16 }: { color?: string; size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Polyline points="20 6 9 17 4 12" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  argTypes: {
    label: { control: 'text', description: 'Figma: 버튼 텍스트' },
    variant: {
      control: 'select',
      options: ['primary', 'sub', 'outlined', 'outlined-focused'],
      description:
        'Figma named variant — Btn(primary=yes/sub=no), Btn(primary=no/sub=yes), Btn-outlined(focused=no/sub=yes), Btn-outlined(focused=yes/sub=no)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Figma SPEC: large(52) / medium(44) / small(36)',
    },
    disabled: { control: 'boolean', description: 'Figma 상태: disabled' },
  },
  args: { label: '확인', variant: 'primary', size: 'medium', disabled: false },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button — Figma `Button` 컴포넌트 1:1 매핑. 4개 named variant(primary / sub / outlined / outlined-focused) × 3 size(small / medium / large) × 3 state(default / pressed / disabled).\n\n**v3.0 Breaking change**: `colorScheme` · `loading` prop 제거. `variant`는 `\'solid\' | \'outlined\'`에서 4개 named variant union으로 변경.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const VARIANTS = ['primary', 'sub', 'outlined', 'outlined-focused'] as const;
const SIZES = ['small', 'medium', 'large'] as const;

// variant별 현재(default) 라벨 색 — 아이콘도 동일 색으로 동기화
const VARIANT_LABEL_COLOR: Record<typeof VARIANTS[number], string> = {
  primary:            buttonToken.color.primary.default.label,
  sub:                buttonToken.color.sub.default.label,
  outlined:           buttonToken.color.outlined.default.label,
  'outlined-focused': buttonToken.color['outlined-focused'].default.label,
};

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Controls 패널에서 Figma property 4종(label / variant / size / disabled)을 조작합니다.',
      },
    },
  },
};

// ─── 2. Variants 매트릭스 ────────────────────────────────────

export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Variants"
        description="Figma named variant 4종 — Primary-Btn / Sub-Btn / Outlined-btn / Outlined-focused-btn."
      >
        <CompareGrid
          items={VARIANTS.map((v) => ({
            label: v,
            content: <Button label="버튼" variant={v} />,
          }))}
        />
      </Section>
    </View>
  ),
};

// ─── 3. Sizes 매트릭스 ───────────────────────────────────────

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Sizes"
        description="Figma SPEC: large(52) / medium(44) / small(36) — 4 variant × 3 size."
      >
        {VARIANTS.map((v) => (
          <View key={v} style={{ gap: spacing.small, marginBottom: spacing.xlarge }}>
            <StateLabel>{v}</StateLabel>
            <Row gap={spacing.medium} align="center">
              {SIZES.map((s) => (
                <Col key={s} gap={spacing.xsmall}>
                  <StateLabel>{s}</StateLabel>
                  <Button label="버튼" variant={v} size={s} />
                </Col>
              ))}
            </Row>
          </View>
        ))}
      </Section>
    </View>
  ),
};

// ─── 4. States 매트릭스 ──────────────────────────────────────

export const States: Story = {
  name: 'States',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="States"
        description="Figma 상태 매트릭스 — default / pressed / disabled. pressed는 실제 터치 시 확인."
      >
        {VARIANTS.map((v) => (
          <View key={v} style={{ gap: spacing.small, marginBottom: spacing.xlarge }}>
            <StateLabel>{v}</StateLabel>
            <CompareGrid
              items={[
                { label: 'default',  content: <Button label="버튼" variant={v} /> },
                { label: 'pressed (눌러서 확인)', content: <Button label="버튼" variant={v} /> },
                { label: 'disabled', content: <Button label="버튼" variant={v} disabled /> },
              ]}
            />
          </View>
        ))}
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '**Pressable의 한계**: RN의 `pressed` 상태는 실제 터치 중에만 활성화되므로 정적 스크린샷에서 default와 동일하게 보입니다. 실제 인터랙션으로 확인하세요.',
      },
    },
  },
};

// ─── 5. With Icon ────────────────────────────────────────────

export const WithIcon: Story = {
  name: 'With Icon',
  render: () => {
    // Figma SPEC (node 166:4647): icon size 16 공통, 4 variant × 3 icon 패턴(leading / trailing / both) × 3 size
    const ICON_PATTERNS = [
      { key: 'leading',  label: 'leftIcon',           leadingFactory: PlusIcon,  trailingFactory: null },
      { key: 'trailing', label: 'rightIcon',          leadingFactory: null,      trailingFactory: ArrowRight },
      { key: 'both',     label: 'left + right Icon',  leadingFactory: CheckIcon, trailingFactory: ArrowRight },
    ] as const;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="With Icon"
          description="Figma 'SPEC: 아이콘이 있을 경우' (node 166:4647) — icon size 16 / gap large=6, medium=small=4. variant별 라벨 색에 아이콘 색 동기화."
        >
          {VARIANTS.map((v) => {
            const iconColor = VARIANT_LABEL_COLOR[v];
            return (
              <View key={v} style={{ gap: spacing.small, marginBottom: spacing.xlarge }}>
                <StateLabel>{v}</StateLabel>
                {ICON_PATTERNS.map((p) => (
                  <View key={p.key} style={{ marginBottom: spacing.medium }}>
                    <StateLabel>{p.label}</StateLabel>
                    <Row gap={spacing.medium} align="center">
                      {SIZES.map((s) => (
                        <Col key={s} gap={spacing.xsmall}>
                          <StateLabel>{s}</StateLabel>
                          <Button
                            label="버튼"
                            variant={v}
                            size={s}
                            leftIcon={p.leadingFactory ? <p.leadingFactory color={iconColor} size={buttonToken.size[s].iconSize} /> : undefined}
                            rightIcon={p.trailingFactory ? <p.trailingFactory color={iconColor} size={buttonToken.size[s].iconSize} /> : undefined}
                          />
                        </Col>
                      ))}
                    </Row>
                  </View>
                ))}
              </View>
            );
          })}
        </Section>

        <Section title="사용 예시 코드" badge="개발">
          <CodeBlock
            title="Button + leftIcon / rightIcon (Figma BOOLEAN property: left icon#175:5, right icon#175:8)"
            code={`import { Icon } from '@/components/Icon';

<Button label="추가" leftIcon={<Icon name="plus" size={16} />} />
<Button label="다음" rightIcon={<Icon name="arrow-right" size={16} />} />
<Button label="확인" leftIcon={<Icon name="check" size={16} />} rightIcon={<Icon name="arrow-right" size={16} />} />`}
          />
        </Section>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          '**Figma 매핑**: `left icon#175:5` / `right icon#175:8` BOOLEAN property. icon size는 모든 size에서 16 공통. variant별 label 색을 아이콘 stroke에 동기화하면 자연스러움.',
      },
    },
  },
};

// ─── 6. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="Size 토큰" description="Figma '버튼 크기(공통)' SPEC 1:1." badge="디자인">
        <TokenSpecTable
          title="Size × 속성 매트릭스"
          rows={[
            { property: 'small / height',    token: 'buttonToken.size.small.height',  value: buttonToken.size.small.height,  type: 'size' },
            { property: 'small / padding',   token: 'buttonToken.size.small.paddingHorizontal', value: buttonToken.size.small.paddingHorizontal, type: 'size' },
            { property: 'small / radius',    token: 'buttonToken.size.small.radius',  value: buttonToken.size.small.radius,  type: 'size' },
            { property: 'small / gap',       token: 'buttonToken.size.small.gap',     value: buttonToken.size.small.gap,     type: 'size' },
            { property: 'small / icon size', token: 'buttonToken.size.small.iconSize', value: buttonToken.size.small.iconSize, type: 'size' },
            { property: 'small / label',     token: 'textStyleV2.label3',             value: `${textStyleV2.label3.fontSize}px · weight ${textStyleV2.label3.fontWeight}` },
            { property: 'medium / height',   token: 'buttonToken.size.medium.height', value: buttonToken.size.medium.height, type: 'size' },
            { property: 'medium / padding',  token: 'buttonToken.size.medium.paddingHorizontal', value: buttonToken.size.medium.paddingHorizontal, type: 'size' },
            { property: 'medium / radius',   token: 'buttonToken.size.medium.radius', value: buttonToken.size.medium.radius, type: 'size' },
            { property: 'medium / gap',      token: 'buttonToken.size.medium.gap',    value: buttonToken.size.medium.gap,    type: 'size' },
            { property: 'medium / label',    token: 'textStyleV2.label2',             value: `${textStyleV2.label2.fontSize}px · weight ${textStyleV2.label2.fontWeight}` },
            { property: 'large / height',    token: 'buttonToken.size.large.height',  value: buttonToken.size.large.height,  type: 'size' },
            { property: 'large / padding',   token: 'buttonToken.size.large.paddingHorizontal', value: buttonToken.size.large.paddingHorizontal, type: 'size' },
            { property: 'large / radius',    token: 'buttonToken.size.large.radius',  value: buttonToken.size.large.radius,  type: 'size' },
            { property: 'large / gap',       token: 'buttonToken.size.large.gap',     value: buttonToken.size.large.gap,     type: 'size' },
            { property: 'large / label',     token: 'textStyleV2.label1',             value: `${textStyleV2.label1.fontSize}px · weight ${textStyleV2.label1.fontWeight}` },
          ]}
        />
      </Section>

      <Section title="Variant × State 컬러" description="Figma 명세 표 1:1." badge="디자인">
        {VARIANTS.map((v) => {
          const t = buttonToken.color[v];
          const rows: { property: string; token: string; value: string | number; type?: 'color' | 'size' }[] = [];
          (['default', 'pressed', 'disabled'] as const).forEach((s) => {
            const c = t[s] as { container: string; label: string; border?: string; borderWidth?: number };
            rows.push({ property: `${s} / container`, token: `buttonToken.color.${v}.${s}.container`, value: c.container, type: 'color' });
            rows.push({ property: `${s} / label`,     token: `buttonToken.color.${v}.${s}.label`,     value: c.label,     type: 'color' });
            if (c.border != null) {
              rows.push({ property: `${s} / border`,       token: `buttonToken.color.${v}.${s}.border`,      value: c.border,                    type: 'color' });
              rows.push({ property: `${s} / border width`, token: `buttonToken.color.${v}.${s}.borderWidth`, value: c.borderWidth as number,     type: 'size' });
            }
          });
          return (
            <View key={v}>
              <TokenSpecTable title={v} rows={rows} />
              <Divider />
            </View>
          );
        })}
      </Section>
    </View>
  ),
};

// ─── 6. 마이그레이션 가이드 ──────────────────────────────────

export const Migration: Story = {
  name: '마이그레이션 가이드 (v3.0)',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="v3.0 Breaking Changes" description="이전 API를 사용하던 코드의 매핑." badge="개발">
        <CodeBlock
          title="variant + colorScheme → variant union"
          code={`// Before (v2.x)
<Button variant="solid"    colorScheme="primary"   />
<Button variant="solid"    colorScheme="assistive" />
<Button variant="outlined" colorScheme="primary"   />
<Button variant="outlined" colorScheme="assistive" />

// After (v3.0)
<Button variant="primary" />
<Button variant="sub" />
<Button variant="outlined-focused" />
<Button variant="outlined" />`}
        />

        <CodeBlock
          title="loading prop 제거 (Figma 미정의)"
          code={`// Before
<Button label="저장" loading />

// After — 외부에서 분기
{isLoading ? <ActivityIndicator /> : <Button label="저장" onPress={save} />}`}
        />

        <CodeBlock
          title="size별 토큰 변경 (Figma 일치)"
          code={`small  : height 36 · padding 12 · radius 8  · gap 4 · iconSize 16 · label3 (13px)
medium : height 44 · padding 16 · radius 8  · gap 4 · iconSize 16 · label2 (14px)
large  : height 52 · padding 24 · radius 12 · gap 6 · iconSize 16 · label1 (16px)

// 주요 변경
- small.padding:   14 → 12
- medium.padding:  18 → 16
- medium.radius:   12 → 8
- medium.iconSize: 20 → 16
- large.iconSize:  24 → 16
- (신규) gap 필드 — 아이콘↔라벨 간격`}
        />
      </Section>
    </View>
  ),
};
