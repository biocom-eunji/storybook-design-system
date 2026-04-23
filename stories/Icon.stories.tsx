import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../src/components/Icon';
import {
  normalIconNames,
  colorIconNames,
  circleIconNames,
  miniIconNames,
} from '../src/components/Icon';
import type { IconStyle } from '../src/components/Icon';
import {
  coolNeutral,
  mint,
  fontSize,
  fontWeight,
  spacing,
  radius,
  semanticColor,
} from '../src/tokens/theme';

// ─── Meta ────────────────────────────────────────────────

const meta: Meta<typeof Icon> = {
  title: 'Semantics Token/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'text', description: '아이콘 이름' },
    style: {
      control: 'select',
      options: ['normal', 'color', 'circle', 'mini'],
      description: '아이콘 카테고리',
    },
    size: {
      control: { type: 'range', min: 12, max: 64, step: 4 },
      description: '아이콘 크기 (px)',
    },
    color: { control: 'color', description: '색상 오버라이드' },
    active: { control: 'boolean', description: '활성 상태' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

// ─── Helpers ─────────────────────────────────────────────

const CATEGORY_META: Record<IconStyle, { label: string; desc: string; size: number }> = {
  normal: { label: 'Normal', desc: '단색 라인 아이콘 — 범용 UI에 사용합니다.', size: 24 },
  color: { label: 'Color', desc: '멀티컬러 아이콘 — 시각적 구분이 필요한 곳에 사용합니다.', size: 32 },
  circle: { label: 'Circle', desc: '원형 배경 아이콘 — 카테고리·기능 구분에 사용합니다.', size: 40 },
  mini: { label: 'Mini', desc: '소형 아이콘 — 인라인·뱃지 등 좁은 공간에 사용합니다.', size: 20 },
};

function buildCode(name: string, style: IconStyle) {
  return style === 'normal'
    ? `<Icon name="${name}" />`
    : `<Icon name="${name}" style="${style}" />`;
}

// ─── Icon Card ───────────────────────────────────────────

interface IconCardProps {
  name: string;
  iconStyle: IconStyle;
  copied: string | null;
  onCopy: (name: string, style: IconStyle) => void;
}

const DUAL_VARIANT_ICONS = ['info', 'star'];

const IconCard = ({ name, iconStyle, copied, onCopy }: IconCardProps) => {
  const isCopied = copied === `${iconStyle}-${name}`;
  const previewSize = CATEGORY_META[iconStyle].size;
  const isDual = iconStyle === 'normal' && DUAL_VARIANT_ICONS.includes(name);

  return (
    <Pressable
      onPress={() => onCopy(name, iconStyle)}
      style={({ pressed }) => [
        styles.card,
        isDual && styles.cardWide,
        pressed && styles.cardPressed,
        isCopied && styles.cardCopied,
      ]}
    >
      {isDual ? (
        <View style={styles.iconRow}>
          <View style={styles.iconVariantCol}>
            <Icon name={name} style={iconStyle} variant="regular" size={previewSize} />
            <Text style={styles.variantLabel}>Regular</Text>
          </View>
          <View style={styles.iconVariantCol}>
            <Icon name={name} style={iconStyle} variant="fill" size={previewSize} />
            <Text style={styles.variantLabel}>Fill</Text>
          </View>
        </View>
      ) : (
        <View style={styles.iconArea}>
          <Icon name={name} style={iconStyle} size={previewSize} />
        </View>
      )}

      {isCopied ? (
        <Text style={styles.copiedText}>복사 완료!</Text>
      ) : (
        <Text style={styles.cardName} numberOfLines={1}>{name}</Text>
      )}
    </Pressable>
  );
};

// ─── Icon Grid (with copy state) ────────────────────────

const IconGrid = ({ names, iconStyle }: { names: string[]; iconStyle: IconStyle }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = useCallback((name: string, style: IconStyle) => {
    navigator.clipboard.writeText(buildCode(name, style));
    setCopied(`${style}-${name}`);
    setTimeout(() => setCopied(null), 1500);
  }, []);

  if (names.length === 0) {
    return (
      <Text style={{ fontSize: fontSize.small, color: semanticColor.textSecondary, paddingVertical: spacing['2xlarge'] }}>
        검색 결과가 없습니다.
      </Text>
    );
  }

  return (
    <View style={styles.grid}>
      {names.map((name) => (
        <IconCard key={name} name={name} iconStyle={iconStyle} copied={copied} onCopy={handleCopy} />
      ))}
    </View>
  );
};

// ─── Section ─────────────────────────────────────────────

const IconSection = ({
  iconStyle,
  names,
  showDivider = false,
}: {
  iconStyle: IconStyle;
  names: string[];
  showDivider?: boolean;
}) => {
  const { label, desc } = CATEGORY_META[iconStyle];

  return (
    <>
      {showDivider && <View style={styles.divider} />}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{label}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{names.length}</Text>
          </View>
        </View>
        <Text style={styles.sectionDesc}>{desc}</Text>
        <Text style={styles.usageHint}>
          사용법: {buildCode('{name}', iconStyle)}
        </Text>
        <IconGrid names={names} iconStyle={iconStyle} />
      </View>
    </>
  );
};

// ─── Stories ─────────────────────────────────────────────

export const Playground: Story = {
  args: { name: 'bell', style: 'normal', size: 32 },
};

export const NormalIcons: Story = {
  render: () => <IconSection iconStyle="normal" names={normalIconNames} />,
};

export const ColorIcons: Story = {
  render: () => <IconSection iconStyle="color" names={colorIconNames} />,
};

export const CircleIcons: Story = {
  render: () => <IconSection iconStyle="circle" names={circleIconNames} />,
};

export const MiniIcons: Story = {
  render: () => <IconSection iconStyle="mini" names={miniIconNames} />,
};

// ─── Gallery (All Icons) ─────────────────────────────────

export const AllIcons: Story = {
  name: 'Gallery',
  render: () => {
    const [query, setQuery] = useState('');
    const q = query.trim().toLowerCase();

    const filtered = useMemo(() => ({
      normal: normalIconNames.filter((n) => n.includes(q)),
      color: colorIconNames.filter((n) => n.includes(q)),
      circle: circleIconNames.filter((n) => n.includes(q)),
      mini: miniIconNames.filter((n) => n.includes(q)),
    }), [q]);

    const total = filtered.normal.length + filtered.color.length + filtered.circle.length + filtered.mini.length;

    return (
      <View style={styles.gallery}>
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
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="아이콘 이름으로 검색..."
            placeholderTextColor={semanticColor.textTertiary}
            style={styles.searchInput}
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery('')}>
              <Text style={{ fontSize: fontSize.small, color: coolNeutral[60] }}>지우기</Text>
            </Pressable>
          )}
        </View>

        {/* Result count */}
        {q.length > 0 && (
          <Text style={styles.resultCount}>
            {total}개 아이콘 검색됨
          </Text>
        )}

        {/* Sections */}
        {filtered.normal.length > 0 && (
          <IconSection iconStyle="normal" names={filtered.normal} />
        )}
        {filtered.color.length > 0 && (
          <IconSection iconStyle="color" names={filtered.color} showDivider={filtered.normal.length > 0} />
        )}
        {filtered.circle.length > 0 && (
          <IconSection iconStyle="circle" names={filtered.circle} showDivider={filtered.normal.length + filtered.color.length > 0} />
        )}
        {filtered.mini.length > 0 && (
          <IconSection iconStyle="mini" names={filtered.mini} showDivider={filtered.normal.length + filtered.color.length + filtered.circle.length > 0} />
        )}

        {total === 0 && q.length > 0 && (
          <View style={styles.emptyState}>
            <Text style={{ fontSize: fontSize.large, color: semanticColor.textTertiary, marginBottom: spacing.small }}>검색 결과 없음</Text>
            <Text style={{ fontSize: fontSize.small, color: semanticColor.textSecondary }}>
              "{query}"에 해당하는 아이콘이 없습니다.
            </Text>
          </View>
        )}
      </View>
    );
  },
};

// ─── Styles ──────────────────────────────────────────────

const styles = StyleSheet.create({
  // Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.small,
  },

  // Card
  card: {
    width: 104,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.small,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.small,
    borderRadius: radius.medium,
    backgroundColor: semanticColor.backgroundSecondary,
    borderWidth: 1,
    borderColor: 'transparent',
    cursor: 'pointer' as any,
  },
  cardWide: {
    width: 160,
  },
  cardPressed: {
    backgroundColor: semanticColor.backgroundTertiary,
    transform: [{ scale: 0.96 }],
  },
  cardCopied: {
    backgroundColor: mint[99],
    borderColor: mint[90],
  },
  iconArea: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    gap: spacing.large,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVariantCol: {
    alignItems: 'center',
    gap: spacing.xsmall,
  },
  variantLabel: {
    fontSize: 10,
    fontWeight: fontWeight.medium,
    color: semanticColor.textTertiary,
    textAlign: 'center',
  },
  cardName: {
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.medium,
    color: semanticColor.textSecondary,
    textAlign: 'center',
  },
  copiedText: {
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.semibold,
    color: semanticColor.textBrand,
    textAlign: 'center',
  },

  // Section
  section: {
    marginBottom: spacing['3xlarge'],
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.small,
    marginBottom: spacing.xsmall,
  },
  sectionTitle: {
    fontSize: fontSize.large,
    fontWeight: fontWeight.bold,
    color: semanticColor.textPrimary,
  },
  sectionDesc: {
    fontSize: fontSize.small,
    color: semanticColor.textSecondary,
    marginBottom: spacing.small,
  },
  usageHint: {
    fontSize: fontSize.xsmall,
    fontFamily: 'monospace',
    color: semanticColor.textSecondary,
    backgroundColor: semanticColor.backgroundSecondary,
    paddingVertical: spacing.xsmall,
    paddingHorizontal: spacing.small,
    borderRadius: radius.xsmall,
    marginBottom: spacing.large,
    alignSelf: 'flex-start',
  },
  badge: {
    backgroundColor: mint[95],
    paddingHorizontal: spacing.small,
    paddingVertical: 2,
    borderRadius: radius.full,
  },
  badgeText: {
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.semibold,
    color: mint[40],
  },
  divider: {
    height: 1,
    backgroundColor: semanticColor.borderDefault,
    marginBottom: spacing['3xlarge'],
  },

  // Gallery
  gallery: {},
  galleryHeader: {
    marginBottom: spacing['3xlarge'],
  },
  galleryTitle: {
    fontSize: fontSize['2xlarge'],
    fontWeight: fontWeight.bold,
    color: coolNeutral[10],
    marginBottom: spacing.xsmall,
  },
  gallerySubtitle: {
    fontSize: fontSize.medium,
    color: semanticColor.textSecondary,
  },

  // Search
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.small,
    backgroundColor: semanticColor.backgroundSecondary,
    borderWidth: 1,
    borderColor: coolNeutral[95],
    borderRadius: radius.medium,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    marginBottom: spacing['2xlarge'],
  },
  searchInput: {
    flex: 1,
    fontSize: fontSize.medium,
    color: semanticColor.textPrimary,
    outlineStyle: 'none' as any,
  },
  resultCount: {
    fontSize: fontSize.small,
    fontWeight: fontWeight.medium,
    color: semanticColor.textSecondary,
    marginBottom: spacing.large,
  },

  // Empty
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing['4xlarge'],
  },
});
