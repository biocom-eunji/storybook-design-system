import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  fontSize, fontWeight, spacing, radius, semanticColor,
} from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────

export type TokenRow = {
  /** 속성 한국어 표시명 (예: "배경색") */
  property: string;
  /** 시맨틱 토큰명 (예: "color/background/brand") */
  token: string;
  /** 토큰이 해석되는 실제 원시값 — 반드시 tokens.* 에서 참조 */
  value: string | number;
  /** 렌더링 방식: color(스와치+hex), size(px), typography(조합), opacity(체크무늬+박스), 미지정=텍스트 */
  type?: 'color' | 'size' | 'typography' | 'opacity';
};

export type TokenSpecTableProps = {
  /** 조합 식별 타이틀 (예: "solid / primary") */
  title?: string;
  rows: TokenRow[];
};

// ─── Value Renderers ─────────────────────────────────────────

function ColorValue({ value }: { value: string }) {
  return (
    <View style={s.valueRow}>
      <View
        style={[
          s.swatch,
          { backgroundColor: value },
        ]}
      />
      <Text style={s.mono}>{value}</Text>
    </View>
  );
}

function SizeValue({ value }: { value: string | number }) {
  const display = typeof value === 'number' ? `${value}px` : String(value);
  return <Text style={s.mono}>{display}</Text>;
}

function TypographyValue({ value }: { value: string }) {
  return <Text style={s.mono}>{value}</Text>;
}

function OpacityValue({ value }: { value: number }) {
  return (
    <View style={s.valueRow}>
      <View style={s.checkerboard}>
        <View style={[s.opacityOverlay, { opacity: value }]} />
      </View>
      <Text style={s.mono}>{value}</Text>
    </View>
  );
}

function PlainValue({ value }: { value: string | number }) {
  return <Text style={s.mono}>{String(value)}</Text>;
}

// ─── Component ───────────────────────────────────────────────

export function TokenSpecTable({ title, rows }: TokenSpecTableProps) {
  return (
    <View style={s.wrap}>
      {title && <Text style={s.title}>{title}</Text>}
      <View style={s.table}>
        {/* Header */}
        <View style={[s.row, s.headerRow]}>
          <Text style={[s.cell, s.headerText, s.colProperty]}>속성</Text>
          <Text style={[s.cell, s.headerText, s.colToken]}>시맨틱 토큰</Text>
          <Text style={[s.cell, s.headerText, s.colValue]}>값</Text>
        </View>

        {/* Body */}
        {rows.map((row, i) => (
          <View key={i} style={[s.row, i % 2 === 1 && s.rowAlt]}>
            <Text style={[s.cell, s.propertyCell, s.colProperty]}>{row.property}</Text>
            <Text style={[s.cell, s.tokenCell, s.colToken]}>{row.token}</Text>
            <View style={[s.cell, s.colValue]}>
              {row.type === 'color'      ? <ColorValue value={String(row.value)} /> :
               row.type === 'size'        ? <SizeValue value={row.value} /> :
               row.type === 'typography'  ? <TypographyValue value={String(row.value)} /> :
               row.type === 'opacity'     ? <OpacityValue value={Number(row.value)} /> :
                                            <PlainValue value={row.value} />}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

// ─── Styles ──────────────────────────────────────────────────

const s = StyleSheet.create({
  wrap: {
    marginBottom: spacing.xlarge,
  },
  title: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.bold,
    color: semanticColor.textPrimary,
    marginBottom: spacing.small,
  },
  table: {
    borderRadius: radius.medium,
    borderWidth: 1,
    borderColor: semanticColor.borderDefault,
    overflow: 'hidden',
    minWidth: 700,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: spacing.large,
    minHeight: 42,
    gap: spacing.medium,
  },
  rowAlt: {
    backgroundColor: semanticColor.backgroundSecondary,
  },
  headerRow: {
    backgroundColor: semanticColor.backgroundTertiary,
    borderBottomWidth: 1,
    borderBottomColor: semanticColor.borderDefault,
    minHeight: 36,
  },
  headerText: {
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.bold,
    color: semanticColor.textQuaternary,
  },
  cell: {
    fontSize: fontSize.small,
    color: semanticColor.textSecondary,
    flexShrink: 1,
  },
  colProperty: {
    flex: 1.2,
  },
  colToken: {
    flex: 2,
  },
  colValue: {
    flex: 1.5,
  },
  propertyCell: {
    color: semanticColor.textPrimary,
    fontWeight: fontWeight.medium,
  },
  tokenCell: {
    fontFamily: 'monospace',
    fontSize: fontSize.xsmall,
    color: semanticColor.textBrand,
  },
  mono: {
    fontFamily: 'monospace',
    fontSize: fontSize.xsmall,
    color: semanticColor.textSecondary,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.small,
  },
  swatch: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    flexShrink: 0,
  },
  checkerboard: {
    width: 32,
    height: 16,
    borderRadius: 4,
    overflow: 'hidden' as const,
    flexShrink: 0,
    backgroundImage:
      'linear-gradient(45deg, #ccc 25%, transparent 25%), ' +
      'linear-gradient(-45deg, #ccc 25%, transparent 25%), ' +
      'linear-gradient(45deg, transparent 75%, #ccc 75%), ' +
      'linear-gradient(-45deg, transparent 75%, #ccc 75%)',
    backgroundSize: '8px 8px',
    backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
  } as any,
  opacityOverlay: {
    width: '100%' as any,
    height: '100%' as any,
    backgroundColor: '#000000',
  },
});
