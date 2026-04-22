import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../src/components/Icon';
import {
  Section, StateLabel, Row, Col, CodeBlock, CompareGrid, Divider,
} from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import {
  spacing, semanticColor, radius, opacity, textStyle, fontSize, fontWeight,
} from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────

const VARIANT_TOKEN_MAP = {
  success: {
    icon:     'color/icon/success',
    iconVal:  semanticColor.iconSuccess,
    iconName: 'check-circle',
  },
  warning: {
    icon:     'role/caution',
    iconVal:  semanticColor.iconCaution,
    iconName: 'warning',
  },
  error: {
    icon:     'color/icon/error',
    iconVal:  semanticColor.iconError,
    iconName: 'x-circle',
  },
} as const;

const COMMON_TOKEN_MAP = {
  background:    { token: 'color/background/toast',   value: semanticColor.backgroundToast },
  messageText:   { token: 'color/text/onColor',       value: semanticColor.textOnColor },
  actionText:    { token: 'color/text/action',        value: semanticColor.textAction },
  paddingH:      { token: 'spacing/large',            value: spacing.large },
  paddingV:      { token: 'spacing/medium',           value: spacing.medium },
  gap:           { token: 'spacing/medium',           value: spacing.medium },
  radius:        { token: 'borderRadius/medium',      value: radius.medium },
} as const;

// ─── 인라인 Toast 미리보기 (position: static) ────────────────
// 실제 Toast 컴포넌트는 absolute 위치를 사용하므로,
// 스토리북 문서에서 나열용으로 static 미리보기 컴포넌트를 사용

type ToastVariant = 'success' | 'warning' | 'error';

function ToastPreview({
  message,
  variant = 'success',
  actionLabel,
}: {
  message: string;
  variant?: ToastVariant;
  actionLabel?: string;
}) {
  const vt = VARIANT_TOKEN_MAP[variant];
  return (
    <View style={{
      backgroundColor: semanticColor.backgroundToast,
      borderRadius: radius.medium,
      paddingHorizontal: spacing.large,
      paddingVertical: spacing.medium,
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.medium,
    }}>
      <Icon name={vt.iconName} size={24} color={vt.iconVal} />
      <Text style={{
        color: semanticColor.textOnColor,
        fontSize: fontSize.medium,
        fontWeight: fontWeight.medium,
        flex: 1,
      }}>{message}</Text>
      {actionLabel && (
        <Text style={{
          color: semanticColor.textAction,
          fontSize: fontSize.small,
          fontWeight: fontWeight.semibold,
          marginLeft: spacing.small,
        }}>{actionLabel}</Text>
      )}
    </View>
  );
}

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Feedback/Toast',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [variant, setVariant] = useState<ToastVariant>('success');
    const messages: Record<ToastVariant, string> = {
      success: '저장되었습니다.',
      warning: '네트워크가 불안정합니다.',
      error: '저장에 실패했습니다.',
    };

    const show = (v: ToastVariant) => {
      setVariant(v);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    };

    return (
      <View style={{ gap: spacing.xlarge }}>
        <Row gap={spacing.small} wrap>
          <Pressable onPress={() => show('success')} style={{ backgroundColor: semanticColor.backgroundSuccess, paddingHorizontal: spacing.large, paddingVertical: spacing.small, borderRadius: radius.small }}>
            <Text style={{ color: semanticColor.textOnColor, fontWeight: fontWeight.semibold, fontSize: fontSize.small }}>Success</Text>
          </Pressable>
          <Pressable onPress={() => show('warning')} style={{ backgroundColor: semanticColor.backgroundCaution, paddingHorizontal: spacing.large, paddingVertical: spacing.small, borderRadius: radius.small }}>
            <Text style={{ color: semanticColor.textPrimary, fontWeight: fontWeight.semibold, fontSize: fontSize.small }}>Warning</Text>
          </Pressable>
          <Pressable onPress={() => show('error')} style={{ backgroundColor: semanticColor.backgroundError, paddingHorizontal: spacing.large, paddingVertical: spacing.small, borderRadius: radius.small }}>
            <Text style={{ color: semanticColor.textOnColor, fontWeight: fontWeight.semibold, fontSize: fontSize.small }}>Error</Text>
          </Pressable>
        </Row>
        <div style={{
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
          maxHeight: visible ? 80 : 0,
          opacity: visible ? 1 : 0,
        }}>
          <ToastPreview message={messages[variant]} variant={variant} />
        </div>
      </View>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: `color/background/toast`, `color/text/onColor`, `color/icon/success`, `Body 2`, `borderRadius/medium`. 버튼을 클릭하면 Toast가 애니메이션과 함께 나타납니다.',
      },
    },
  },
};

// ─── 2. Variant별 ────────────────────────────────────────────

export const Variants: Story = {
  name: 'Variant별',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Variant별"
        description="success, warning, error 세 가지 타입을 확인합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>success</StateLabel>
            <ToastPreview message="저장되었습니다." variant="success" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>warning</StateLabel>
            <ToastPreview message="네트워크가 불안정합니다." variant="warning" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>error</StateLabel>
            <ToastPreview message="저장에 실패했습니다." variant="error" />
          </Col>
        </View>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: [
          '**Success**: `color/icon/success` (민트)',
          '**Warning**: `role/caution` (옐로우)',
          '**Error**: `color/icon/error` (레드)',
          '**공통 배경**: `color/background/toast`',
        ].join('\n\n'),
      },
    },
  },
};

// ─── 3. Action 버튼 ──────────────────────────────────────────

export const WithAction: Story = {
  name: 'Action 버튼',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Action 버튼"
        description="오른쪽에 액션 텍스트 버튼을 포함한 Toast입니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <Col gap={spacing.small}>
            <StateLabel>Success + Action</StateLabel>
            <ToastPreview message="기록이 삭제되었습니다." variant="success" actionLabel="되돌리기" />
          </Col>
          <Col gap={spacing.small}>
            <StateLabel>Error + Action</StateLabel>
            <ToastPreview message="저장에 실패했습니다." variant="error" actionLabel="재시도" />
          </Col>
        </View>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '**Action 텍스트**: `color/text/action` · `Label 1` · fontWeight semibold',
      },
    },
  },
};

// ─── 4. 인터랙티브 데모 ──────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [toasts, setToasts] = useState<Array<{ id: number; message: string; variant: ToastVariant }>>([]);

    const show = (variant: ToastVariant, message: string) => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message, variant }]);
      setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
    };

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="버튼을 클릭하여 Toast를 표시합니다. 3초 후 자동으로 사라집니다."
        >
          <Row gap={spacing.medium} wrap>
            <Pressable
              onPress={() => show('success', '저장되었습니다.')}
              style={{ backgroundColor: semanticColor.backgroundSuccess, paddingHorizontal: spacing.large, paddingVertical: spacing.small, borderRadius: radius.small }}
            >
              <Text style={{ color: semanticColor.textOnColor, fontWeight: fontWeight.semibold }}>Success</Text>
            </Pressable>
            <Pressable
              onPress={() => show('warning', '네트워크가 불안정합니다.')}
              style={{ backgroundColor: semanticColor.backgroundCaution, paddingHorizontal: spacing.large, paddingVertical: spacing.small, borderRadius: radius.small }}
            >
              <Text style={{ color: semanticColor.textPrimary, fontWeight: fontWeight.semibold }}>Warning</Text>
            </Pressable>
            <Pressable
              onPress={() => show('error', '저장에 실패했습니다.')}
              style={{ backgroundColor: semanticColor.backgroundError, paddingHorizontal: spacing.large, paddingVertical: spacing.small, borderRadius: radius.small }}
            >
              <Text style={{ color: semanticColor.textOnColor, fontWeight: fontWeight.semibold }}>Error</Text>
            </Pressable>
          </Row>

          <View style={{ gap: spacing.small, marginTop: spacing.xlarge }}>
            {toasts.map(t => (
              <ToastPreview key={t.id} message={t.message} variant={t.variant} />
            ))}
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 5. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => {
    const variants = ['success', 'warning', 'error'] as const;

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="디자인 스펙"
          description="Figma 시맨틱 토큰 기준 Toast 전체 스펙입니다."
          badge="디자인"
        >
          {variants.map(variant => (
            <View key={variant}>
              <TokenSpecTable
                title={`variant: ${variant}`}
                rows={[
                  { property: '배경색',         token: COMMON_TOKEN_MAP.background.token,  value: COMMON_TOKEN_MAP.background.value,  type: 'color' },
                  { property: '아이콘',         token: VARIANT_TOKEN_MAP[variant].icon,     value: VARIANT_TOKEN_MAP[variant].iconVal, type: 'color' },
                  { property: '메시지 텍스트',   token: COMMON_TOKEN_MAP.messageText.token, value: COMMON_TOKEN_MAP.messageText.value, type: 'color' },
                  { property: '액션 텍스트',     token: COMMON_TOKEN_MAP.actionText.token,  value: COMMON_TOKEN_MAP.actionText.value,  type: 'color' },
                ]}
              />
              <Divider />
            </View>
          ))}

          <TokenSpecTable
            title="공통 레이아웃"
            rows={[
              { property: '좌우 패딩',       token: COMMON_TOKEN_MAP.paddingH.token, value: COMMON_TOKEN_MAP.paddingH.value, type: 'size' },
              { property: '상하 패딩',       token: COMMON_TOKEN_MAP.paddingV.token, value: COMMON_TOKEN_MAP.paddingV.value, type: 'size' },
              { property: '아이콘-텍스트 간격', token: COMMON_TOKEN_MAP.gap.token,    value: COMMON_TOKEN_MAP.gap.value,     type: 'size' },
              { property: '코너 라디우스',   token: COMMON_TOKEN_MAP.radius.token,    value: COMMON_TOKEN_MAP.radius.value,  type: 'size' },
              { property: '메시지 타이포',   token: 'Body 2',  value: `${textStyle.body2.fontSize}px / ${textStyle.body2.lineHeight}px / ${textStyle.body2.fontWeight}`, type: 'typography' },
              { property: '액션 타이포',     token: 'Label 1', value: `${textStyle.label1.fontSize}px / ${textStyle.label1.lineHeight}px / ${textStyle.label1.fontWeight}`, type: 'typography' },
            ]}
          />

          <Divider />

          <TokenSpecTable
            title="애니메이션 (권장값)"
            rows={[
              { property: '등장 시작 opacity', token: 'opacity/0',   value: opacity[0],   type: 'opacity' },
              { property: '등장 끝 opacity',   token: 'opacity/100', value: opacity[100], type: 'opacity' },
              { property: 'Duration',          token: '—',           value: '250ms' },
              { property: 'Easing',            token: '—',           value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
              { property: '자동 닫힘 기본값',   token: '—',           value: '3000ms' },
            ]}
          />
        </Section>
      </View>
    );
  },
};

// ─── 6. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 Toast 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { Toast } from '@design-system/components/Toast';`}
        />

        <CodeBlock
          title="기본 사용"
          code={`const [visible, setVisible] = useState(false);

<Toast
  message="저장되었습니다."
  variant="success"
  visible={visible}
  duration={3000}
  onDismiss={() => setVisible(false)}
/>`}
        />

        <CodeBlock
          title="Action 버튼 포함"
          code={`<Toast
  message="기록이 삭제되었습니다."
  variant="success"
  visible={visible}
  duration={5000}
  onDismiss={() => setVisible(false)}
  action={{
    label: '되돌리기',
    onPress: handleUndo,
  }}
/>`}
        />

        <CodeBlock
          title="Variant별 사용"
          code={`<Toast message="완료!" variant="success" visible={true} />
<Toast message="주의!" variant="warning" visible={true} />
<Toast message="실패!" variant="error" visible={true} />`}
        />

        <CodeBlock
          title="위치 지정"
          code={`<Toast message="상단 Toast" position="top" visible={true} />
<Toast message="하단 Toast" position="bottom" visible={true} />`}
        />
      </Section>
    </View>
  ),
};
