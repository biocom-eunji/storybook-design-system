import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import {
  coolNeutral, mint,
  fontSize, fontWeight, spacing, radius,
} from '../src/tokens/theme';

// ─── Section ─────────────────────────────────────────────
// 스토리 섹션 — 제목 + 설명 + 콘텐츠

export const Section = ({
  title,
  description,
  badge,
  children,
}: {
  title: string;
  description?: string;
  badge?: '기획' | '디자인' | '개발';
  children: React.ReactNode;
}) => (
  <View style={h.section}>
    <View style={h.sectionHeader}>
      <Text style={h.sectionTitle}>{title}</Text>
      {badge && <AudienceBadge role={badge} />}
    </View>
    {description && <Text style={h.sectionDesc}>{description}</Text>}
    {children}
  </View>
);

// ─── State Label ─────────────────────────────────────────
// 상태 라벨 (예: "활성" / "비활성")

export const StateLabel = ({ children }: { children: string }) => (
  <Text style={h.stateLabel}>{children}</Text>
);

// ─── Row / Col ───────────────────────────────────────────

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
// 디자인 토큰 참조 테이블

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
        <View key={i} style={[h.specRow, i % 2 === 1 && h.specRowAlt]}>
          <Text style={[h.specCell, h.specLabelCell, { flex: 1.2 }]}>{row.label}</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            {/^#[0-9A-Fa-f]{6}$/.test(row.value) && (
              <View style={{
                width: 14, height: 14, borderRadius: 3,
                backgroundColor: row.value,
                borderWidth: row.value === '#FFFFFF' ? 1 : 0,
                borderColor: coolNeutral[90],
              }} />
            )}
            <Text style={[h.specCell, h.specMono]}>{row.value}</Text>
          </View>
          <Text style={[h.specCell, h.specMono, h.specTokenCell, { flex: 1.5 }]}>{row.token || '—'}</Text>
        </View>
      ))}
    </View>
  </View>
);

// ─── Color Chip ──────────────────────────────────────────

export const ColorChip = ({ color, label }: { color: string; label?: string }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
    <View style={{
      width: 20, height: 20, borderRadius: 4,
      backgroundColor: color,
      borderWidth: 1, borderColor: coolNeutral[95],
    }} />
    <Text style={{ fontSize: fontSize.xs, fontFamily: 'monospace', color: coolNeutral[40] }}>
      {label || color}
    </Text>
  </View>
);

// ─── Code Block ──────────────────────────────────────────
// 복사 가능한 코드 블록

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
      <Pressable onPress={handleCopy} style={({ pressed }) => [h.codeBlock, pressed && h.codeBlockPressed]}>
        <Text style={h.codeText}>{code}</Text>
        <View style={h.codeCopyWrap}>
          <Text style={[h.codeCopy, copied && h.codeCopied]}>
            {copied ? '복사 완료!' : '복사'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

// ─── Comparison Grid ─────────────────────────────────────
// 상태 비교 그리드

export const CompareGrid = ({
  items,
}: {
  items: Array<{ label: string; content: React.ReactNode }>;
}) => (
  <View style={h.compareGrid}>
    {items.map((item, i) => (
      <View key={i} style={h.compareItem}>
        <Text style={h.stateLabel}>{item.label}</Text>
        <View style={h.compareContent}>{item.content}</View>
      </View>
    ))}
  </View>
);

// ─── Audience Badge ──────────────────────────────────────

export const AudienceBadge = ({ role }: { role: '기획' | '디자인' | '개발' }) => {
  const colors = {
    '기획': { bg: '#EBF5FF', text: '#3182F6' },
    '디자인': { bg: '#FFF0F0', text: '#EF4452' },
    '개발': { bg: '#E9FBF5', text: '#22C289' },
  };
  const c = colors[role];
  return (
    <View style={{
      backgroundColor: c.bg,
      paddingHorizontal: spacing.sm,
      paddingVertical: 2,
      borderRadius: radius.full,
      alignSelf: 'center',
    }}>
      <Text style={{ fontSize: fontSize.xs, fontWeight: fontWeight.semibold, color: c.text }}>
        {role}
      </Text>
    </View>
  );
};

// ─── Divider ─────────────────────────────────────────────

export const Divider = () => (
  <View style={h.divider} />
);

// ─── Styles ──────────────────────────────────────────────

const h = StyleSheet.create({
  // Section
  section: {
    marginBottom: spacing['3xl'],
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  sectionTitle: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: coolNeutral[10],
  },
  sectionDesc: {
    fontSize: fontSize.sm,
    color: coolNeutral[50],
    lineHeight: 20,
    marginBottom: spacing.xl,
  },

  // State Label
  stateLabel: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    color: coolNeutral[50],
    letterSpacing: 0.3,
    marginBottom: 2,
  },

  // Spec Table
  specWrap: {
    marginBottom: spacing.xl,
  },
  specTitle: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    color: coolNeutral[17],
    marginBottom: spacing.sm,
  },
  specTable: {
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: coolNeutral[95],
    overflow: 'hidden',
  },
  specRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: spacing.lg,
    minHeight: 40,
  },
  specRowAlt: {
    backgroundColor: coolNeutral[99],
  },
  specHeader: {
    backgroundColor: coolNeutral[97],
    borderBottomWidth: 1,
    borderBottomColor: coolNeutral[95],
    minHeight: 36,
  },
  specHeaderText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
    color: coolNeutral[40],
  },
  specCell: {
    fontSize: fontSize.sm,
    color: coolNeutral[50],
  },
  specLabelCell: {
    color: coolNeutral[17],
    fontWeight: fontWeight.medium,
  },
  specMono: {
    fontFamily: 'monospace',
    fontSize: fontSize.xs,
  },
  specTokenCell: {
    color: mint[40],
  },

  // Code Block
  codeWrap: {
    marginBottom: spacing.lg,
  },
  codeTitle: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    color: coolNeutral[40],
    marginBottom: spacing.xs,
  },
  codeBlock: {
    backgroundColor: coolNeutral[7],
    borderRadius: radius.md,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    cursor: 'pointer' as any,
  },
  codeBlockPressed: {
    opacity: 0.85,
  },
  codeText: {
    fontSize: fontSize.sm,
    fontFamily: 'monospace',
    color: mint[80],
    lineHeight: 22,
    flex: 1,
  },
  codeCopyWrap: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.xs,
    marginLeft: spacing.lg,
  },
  codeCopy: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    color: coolNeutral[60],
  },
  codeCopied: {
    color: mint[45],
    fontWeight: fontWeight.semibold,
  },

  // Compare Grid
  compareGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing['2xl'],
  },
  compareItem: {
    minWidth: 120,
    gap: spacing.sm,
  },
  compareContent: {
    paddingTop: spacing.xs,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: coolNeutral[96],
    marginVertical: spacing['2xl'],
  },
});
