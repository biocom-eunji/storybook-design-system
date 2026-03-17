import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import {
  coolNeutral, mint,
  fontSize, fontWeight, spacing, radius,
} from '../src/tokens/theme';

// ─── Section ─────────────────────────────────────────────
// Story section with Korean title + optional description

export const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <View style={h.section}>
    <Text style={h.sectionTitle}>{title}</Text>
    {description && <Text style={h.sectionDesc}>{description}</Text>}
    {children}
  </View>
);

// ─── State Label ─────────────────────────────────────────
// Small label above a component group (e.g. "활성" / "비활성")

export const StateLabel = ({ children }: { children: string }) => (
  <Text style={h.stateLabel}>{children}</Text>
);

// ─── Row / Col ───────────────────────────────────────────
// Flex helpers for layout

export const Row = ({
  children,
  gap = spacing.lg,
  wrap = false,
  align = 'center',
}: {
  children: React.ReactNode;
  gap?: number;
  wrap?: boolean;
  align?: 'center' | 'flex-start' | 'flex-end';
}) => (
  <View style={{ flexDirection: 'row', gap, flexWrap: wrap ? 'wrap' : 'nowrap', alignItems: align }}>
    {children}
  </View>
);

export const Col = ({
  children,
  gap = spacing.sm,
}: {
  children: React.ReactNode;
  gap?: number;
}) => (
  <View style={{ gap }}>{children}</View>
);

// ─── Spec Table ──────────────────────────────────────────
// Design token reference table for designers

export const SpecTable = ({
  title,
  rows,
}: {
  title?: string;
  rows: Array<{ label: string; value: string; token?: string }>;
}) => (
  <View style={h.specWrap}>
    {title && <Text style={h.specTitle}>{title}</Text>}
    <View style={h.specTable}>
      <View style={[h.specRow, h.specHeader]}>
        <Text style={[h.specCell, h.specHeaderText, { flex: 1.2 }]}>속성</Text>
        <Text style={[h.specCell, h.specHeaderText, { flex: 1 }]}>값</Text>
        <Text style={[h.specCell, h.specHeaderText, { flex: 1.5 }]}>토큰</Text>
      </View>
      {rows.map((row, i) => (
        <View key={i} style={[h.specRow, i % 2 === 0 && h.specRowAlt]}>
          <Text style={[h.specCell, { flex: 1.2, color: coolNeutral[17] }]}>{row.label}</Text>
          <Text style={[h.specCell, h.specMono, { flex: 1 }]}>{row.value}</Text>
          <Text style={[h.specCell, h.specMono, { flex: 1.5, color: mint[40] }]}>{row.token || '—'}</Text>
        </View>
      ))}
    </View>
  </View>
);

// ─── Color Chip ──────────────────────────────────────────
// Small color swatch with hex value

export const ColorChip = ({ color, label }: { color: string; label?: string }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
    <View style={{ width: 16, height: 16, borderRadius: 4, backgroundColor: color, borderWidth: 1, borderColor: coolNeutral[95] }} />
    <Text style={{ fontSize: fontSize.xs, fontFamily: 'monospace', color: coolNeutral[40] }}>{label || color}</Text>
  </View>
);

// ─── Code Block ──────────────────────────────────────────
// Copyable code snippet for developers

export const CodeBlock = ({ code, title }: { code: string; title?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <View style={h.codeWrap}>
      {title && <Text style={h.codeTitle}>{title}</Text>}
      <Pressable onPress={handleCopy} style={h.codeBlock}>
        <Text style={h.codeText}>{code}</Text>
        <Text style={[h.codeCopy, copied && { color: mint[45] }]}>
          {copied ? '복사 완료!' : '클릭하여 복사'}
        </Text>
      </Pressable>
    </View>
  );
};

// ─── Comparison Grid ─────────────────────────────────────
// Side-by-side state comparison with labels

export const CompareGrid = ({
  items,
}: {
  items: Array<{ label: string; content: React.ReactNode }>;
}) => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing['2xl'] }}>
    {items.map((item, i) => (
      <View key={i} style={{ minWidth: 120 }}>
        <Text style={h.stateLabel}>{item.label}</Text>
        <View style={{ marginTop: spacing.sm }}>{item.content}</View>
      </View>
    ))}
  </View>
);

// ─── Audience Badge ──────────────────────────────────────
// Badge indicating target audience

export const AudienceBadge = ({ role }: { role: '기획' | '디자인' | '개발' }) => {
  const colors = {
    '기획': { bg: '#EBF5FF', text: '#3182F6' },
    '디자인': { bg: '#FFF0F0', text: '#EF4452' },
    '개발': { bg: '#E9FBF5', text: '#22C289' },
  };
  const c = colors[role];
  return (
    <View style={{ backgroundColor: c.bg, paddingHorizontal: spacing.sm, paddingVertical: 2, borderRadius: radius.full, alignSelf: 'flex-start' }}>
      <Text style={{ fontSize: fontSize.xs, fontWeight: fontWeight.semibold, color: c.text }}>{role}</Text>
    </View>
  );
};

// ─── Divider ─────────────────────────────────────────────

export const Divider = () => (
  <View style={{ height: 1, backgroundColor: coolNeutral[96], marginVertical: spacing['2xl'] }} />
);

// ─── Styles ──────────────────────────────────────────────

const h = StyleSheet.create({
  section: {
    marginBottom: spacing['3xl'],
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: coolNeutral[17],
    marginBottom: spacing.xs,
  },
  sectionDesc: {
    fontSize: fontSize.sm,
    color: coolNeutral[50],
    marginBottom: spacing.lg,
  },
  stateLabel: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    color: coolNeutral[60],
    textTransform: 'uppercase' as any,
    letterSpacing: 0.5,
  },
  specWrap: {
    marginBottom: spacing.lg,
  },
  specTitle: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: coolNeutral[30],
    marginBottom: spacing.sm,
  },
  specTable: {
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: coolNeutral[95],
    overflow: 'hidden',
  },
  specRow: {
    flexDirection: 'row',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  specRowAlt: {
    backgroundColor: coolNeutral[99],
  },
  specHeader: {
    backgroundColor: coolNeutral[97],
    borderBottomWidth: 1,
    borderBottomColor: coolNeutral[95],
  },
  specHeaderText: {
    fontWeight: fontWeight.semibold,
    color: coolNeutral[40],
  },
  specCell: {
    fontSize: fontSize.xs,
    color: coolNeutral[50],
  },
  specMono: {
    fontFamily: 'monospace',
  },
  codeWrap: {
    marginBottom: spacing.md,
  },
  codeTitle: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    color: coolNeutral[50],
    marginBottom: spacing.xs,
  },
  codeBlock: {
    backgroundColor: coolNeutral[10],
    borderRadius: radius.sm,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer' as any,
  },
  codeText: {
    fontSize: fontSize.sm,
    fontFamily: 'monospace',
    color: mint[80],
    flex: 1,
  },
  codeCopy: {
    fontSize: fontSize.xs,
    color: coolNeutral[60],
    marginLeft: spacing.lg,
  },
});
