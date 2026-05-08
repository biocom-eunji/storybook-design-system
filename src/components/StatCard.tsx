import React, { createContext, useContext } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { CircularProgress } from './CircularProgress';
import {
  semanticColor, fontWeight, textStyle, spacing, radius, interaction,
} from '../tokens/theme';

// ─── Accent ──────────────────────────────────────────────

export type StatCardAccent = 'violet' | 'purple' | 'green' | 'lightBlue' | 'blue' | 'mint' | 'red';

const ACCENT_MAP: Record<StatCardAccent, string> = {
  violet:    semanticColor.accentViolet,
  purple:    semanticColor.accentPurple,
  green:     semanticColor.accentGreen,
  lightBlue: semanticColor.accentLightBlue,
  blue:      semanticColor.accentViolet,  // 순수 blue 토큰 미보유, violet 대체
  mint:      semanticColor.accentMint,
  red:       semanticColor.accentRed,
};

// ─── Context ─────────────────────────────────────────────

const AccentContext = createContext<string>(ACCENT_MAP.violet);

function useAccent(): string {
  return useContext(AccentContext);
}

// ─── StatCard (Container) ────────────────────────────────

export interface StatCardProps {
  /** 액센트 컬러 */
  accent: StatCardAccent;
  /** 카드 클릭 핸들러 (없으면 표시 전용) */
  onPress?: () => void;
  /** 빌딩 블록 children */
  children: React.ReactNode;
}

function StatCardRoot({ accent, onPress, children }: StatCardProps) {
  const accentColor = ACCENT_MAP[accent];

  const card = (
    <View style={styles.container}>
      {children}
    </View>
  );

  if (onPress) {
    return (
      <AccentContext.Provider value={accentColor}>
        <Pressable
          onPress={onPress}
          accessibilityRole="button"
          style={({ pressed }) => [pressed && styles.pressed]}
        >
          {card}
        </Pressable>
      </AccentContext.Provider>
    );
  }

  return (
    <AccentContext.Provider value={accentColor}>
      {card}
    </AccentContext.Provider>
  );
}

// ─── Header ──────────────────────────────────────────────

export interface StatCardHeaderProps {
  /** 헤더 아이콘 */
  icon: React.ReactNode;
  /** 카드 제목 */
  title: string;
}

function Header({ icon, title }: StatCardHeaderProps) {
  const accent = useAccent();
  const styledIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<any>, { color: accent })
    : icon;

  return (
    <View
      style={styles.header}
      accessibilityRole="header"
    >
      {styledIcon}
      <Text style={[styles.headerTitle, { color: accent }]}>{title}</Text>
    </View>
  );
}

// ─── Count ───────────────────────────────────────────────

export interface StatCardCountProps {
  /** 현재값 */
  current: number;
  /** 총합 (없으면 단일 수치) */
  total?: number;
  /** 단위 (개, Kcal 등) */
  unit?: string;
}

function Count({ current, total, unit }: StatCardCountProps) {
  const accent = useAccent();
  const ariaLabel = total
    ? `${total}${unit ?? ''} 중 ${current}${unit ?? ''} 달성`
    : `${current}${unit ?? ''}`;

  return (
    <View style={styles.countRow} accessibilityLabel={ariaLabel}>
      <Text style={[styles.bigNumber, { color: accent }]}>{current}</Text>
      {total != null ? (
        <Text style={styles.unitText}>
          {unit ? ` ${unit}` : ''} / {total}{unit ?? ''}
        </Text>
      ) : (
        unit && <Text style={styles.unitText}> {unit}</Text>
      )}
    </View>
  );
}

// ─── BigScore ────────────────────────────────────────────

export interface StatCardBigScoreItem {
  value: number | string;
  unit?: string;
  label: string;
}

export interface StatCardBigScoreProps {
  items: StatCardBigScoreItem[];
}

function BigScore({ items }: StatCardBigScoreProps) {
  const accent = useAccent();
  const ariaLabel = items.map(i => `${i.label} ${i.value}${i.unit ?? ''}`).join(', ');

  return (
    <View style={styles.bigScoreWrap} accessibilityLabel={ariaLabel}>
      {items.map((item, i) => (
        <View key={i} style={styles.bigScoreRow}>
          <Text style={[styles.bigNumber, i === 0 ? { color: accent } : { color: semanticColor.textSecondary }]}>
            {item.value}
          </Text>
          {item.unit && (
            <Text style={styles.unitText}> {item.unit}</Text>
          )}
          <Text style={[styles.unitText, { textAlign: 'right', flex: 1 }]}>
            {item.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

// ─── Label ───────────────────────────────────────────────

export interface StatCardLabelProps {
  /** 작은 레이블 (예: "점수") */
  label: string;
  /** 강조 값 (예: "좋음") — accent 색상 적용 */
  value: string;
}

function Label({ label, value }: StatCardLabelProps) {
  const accent = useAccent();
  return (
    <View style={styles.labelRow} accessibilityLabel={`${label} ${value}`}>
      <Text style={styles.labelText}>{label} </Text>
      <Text style={[styles.labelValue, { color: accent }]}>{value}</Text>
    </View>
  );
}

// ─── Duration ────────────────────────────────────────────

export interface StatCardDurationProps {
  /** 시간 */
  hours: number;
  /** 분 (생략 시 시간만 표시) */
  minutes?: number;
}

function Duration({ hours, minutes }: StatCardDurationProps) {
  const accent = useAccent();
  const ariaLabel = minutes != null
    ? `${hours}시간 ${minutes}분`
    : `${hours}시간`;

  return (
    <View style={styles.durationRow} accessibilityLabel={ariaLabel}>
      <Text style={[styles.bigNumber, { color: accent }]}>{hours}</Text>
      <Text style={styles.unitText}> 시간</Text>
      {minutes != null && (
        <>
          <Text style={[styles.bigNumber, { color: accent, marginLeft: spacing.medium }]}>{minutes}</Text>
          <Text style={styles.unitText}> 분</Text>
        </>
      )}
    </View>
  );
}

// ─── CompletionCheck ─────────────────────────────────────

export interface StatCardCompletionCheckProps {
  /** 진행률 (0~1, 기본 1 = 완료) */
  progress?: number;
}

function CompletionCheck({ progress = 1 }: StatCardCompletionCheckProps) {
  const accent = useAccent();

  return (
    <View style={styles.completionWrap} accessibilityLabel={`${Math.round(progress * 100)}% 완료`}>
      <CircularProgress
        progress={progress}
        size={36}
        strokeWidth={4}
        strokeColor={accent}
        showLabel={false}
      />
    </View>
  );
}

// ─── CheckList ───────────────────────────────────────────

export interface StatCardCheckListProps {
  /** 전체 개수 */
  total: number;
  /** 완료 개수 */
  completed: number;
}

// 체크마크 SVG path (Phosphor check 경량화)
const CHECK_PATH = 'M10.97 16.47l-3.47-3.47a.75.75 0 0 1 1.06-1.06L11.5 14.88l5.44-5.44a.75.75 0 0 1 1.06 1.06l-6 6a.75.75 0 0 1-1.03.03z';

function CheckList({ total, completed }: StatCardCheckListProps) {
  const accent = useAccent();
  const ariaLabel = `${total}개 중 ${completed}개 완료`;

  return (
    <View style={styles.checkListRow} accessibilityLabel={ariaLabel} accessibilityRole="image">
      {Array.from({ length: total }, (_, i) => {
        const isCompleted = i < completed;
        return (
          <View
            key={i}
            style={[
              styles.checkBox,
              isCompleted
                ? { backgroundColor: accent }
                : { backgroundColor: semanticColor.backgroundDisabled },
            ]}
          >
            {isCompleted && (
              <Svg width={20} height={20} viewBox="0 0 24 24">
                <Path d={CHECK_PATH} fill={semanticColor.iconOnColor} />
              </Svg>
            )}
          </View>
        );
      })}
    </View>
  );
}

// ─── Compound Export ─────────────────────────────────────

export const StatCard = Object.assign(StatCardRoot, {
  Header,
  Count,
  BigScore,
  Label,
  Duration,
  CompletionCheck,
  CheckList,
});

// ─── Styles ──────────────────────────────────────────────

const HEADER_ICON_GAP = 6;

const styles = StyleSheet.create({
  container: {
    backgroundColor: semanticColor.backgroundPrimary,
    borderRadius: radius.large,
    borderWidth: 1,
    borderColor: semanticColor.borderDefault,
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.xlarge,
    gap: spacing.medium,
  } as ViewStyle,
  pressed: {
    opacity: interaction.pressOpacity,
  } as ViewStyle,

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: HEADER_ICON_GAP,
  } as ViewStyle,
  headerTitle: {
    fontSize: textStyle.label1.fontSize,
    fontWeight: fontWeight.medium,
    lineHeight: textStyle.label1.lineHeight,
    letterSpacing: textStyle.label1.letterSpacing,
  } as TextStyle,

  // Count
  countRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  } as ViewStyle,
  bigNumber: {
    fontSize: textStyle.title3.fontSize,
    fontWeight: fontWeight.semibold,
    letterSpacing: textStyle.title3.letterSpacing,
  } as TextStyle,
  unitText: {
    fontSize: textStyle.label1.fontSize,
    fontWeight: fontWeight.medium,
    lineHeight: textStyle.label1.lineHeight,
    letterSpacing: textStyle.label1.letterSpacing,
    color: semanticColor.textSecondary,
  } as TextStyle,

  // BigScore
  bigScoreWrap: {
    gap: spacing.xsmall,
  } as ViewStyle,
  bigScoreRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  } as ViewStyle,

  // Label
  labelRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  } as ViewStyle,
  labelText: {
    fontSize: textStyle.title3.fontSize,
    fontWeight: fontWeight.semibold,
    color: semanticColor.textPrimary,
    letterSpacing: textStyle.title3.letterSpacing,
  } as TextStyle,
  labelValue: {
    fontSize: textStyle.title3.fontSize,
    fontWeight: fontWeight.semibold,
    letterSpacing: textStyle.title3.letterSpacing,
  } as TextStyle,

  // Duration
  durationRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  } as ViewStyle,

  // CompletionCheck
  completionWrap: {
    alignSelf: 'flex-start',
  } as ViewStyle,

  // CheckList
  checkListRow: {
    flexDirection: 'row',
    gap: spacing.small,
  } as ViewStyle,
  checkBox: {
    width: 36,
    height: 36,
    borderRadius: radius.xsmall,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
});
