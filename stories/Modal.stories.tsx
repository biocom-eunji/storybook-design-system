import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from '../src/components/Modal';
import { Button } from '../src/components/Button';
import { TextField } from '../src/components/TextField';
import { Section, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import {
  spacing, semanticColor, radius, opacity, textStyle, shadow,
  fontSize, fontWeight, palette,
} from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────

const CONTAINER_TOKEN_MAP = {
  background:  { token: 'color/background/primary',  value: semanticColor.backgroundPrimary },
  radius:      { token: 'borderRadius/medium',        value: radius.medium },
  shadow:      { token: 'Level 3',                    value: `offset(0,${shadow.level3.shadowOffset.height}) blur(${shadow.level3.shadowRadius}) opacity(${shadow.level3.shadowOpacity})` },
  titleColor:  { token: 'color/text/primary',         value: semanticColor.textPrimary },
  descColor:   { token: 'color/text/secondary',       value: semanticColor.textSecondary },
  padding:     { token: 'spacing/2xlarge',             value: spacing['2xlarge'] },
  buttonGap:   { token: 'spacing/small',               value: spacing.small },
} as const;

const SCRIM_TOKEN_MAP = {
  background: { token: 'black',        value: palette.black },
  opacity:    { token: 'opacity/43',    value: opacity[43] },
} as const;

// ─── 인라인 Modal 미리보기 (position: static) ────────────────

function ModalPreview({
  title,
  description,
  children,
  primaryLabel,
  secondaryLabel,
}: {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <View style={{
      backgroundColor: semanticColor.backgroundPrimary,
      borderRadius: radius.medium,
      padding: spacing['2xlarge'],
      width: 300,
      shadowColor: palette.black,
      shadowOffset: { width: 0, height: shadow.level3.shadowOffset.height },
      shadowOpacity: shadow.level3.shadowOpacity,
      shadowRadius: shadow.level3.shadowRadius,
      elevation: shadow.level3.elevation,
    }}>
      {title && (
        <Text style={{
          fontSize: fontSize.large,
          fontWeight: fontWeight.bold,
          color: semanticColor.textPrimary,
          textAlign: 'center',
        }}>{title}</Text>
      )}
      {children ? (
        <View style={{ marginTop: spacing.small }}>{children}</View>
      ) : (
        description && (
          <Text style={{
            fontSize: fontSize.medium,
            color: semanticColor.textSecondary,
            textAlign: 'center',
            marginTop: spacing.small,
          }}>{description}</Text>
        )
      )}
      {(primaryLabel || secondaryLabel) && (
        <View style={{ marginTop: spacing['2xlarge'], gap: spacing.small }}>
          {primaryLabel && (
            <Button label={primaryLabel} variant="solid" color="primary" size="medium" />
          )}
          {secondaryLabel && (
            <Button label={secondaryLabel} variant="solid" color="assistive" size="medium" />
          )}
        </View>
      )}
    </View>
  );
}

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Overlay/Modal',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <View style={{
      backgroundColor: `rgba(0,0,0,${opacity[52]})`,
      borderRadius: radius.medium,
      padding: spacing['3xlarge'],
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ModalPreview
        title="변경사항 저장"
        description="저장하지 않은 변경사항이 있습니다. 저장하시겠습니까?"
        primaryLabel="저장"
        secondaryLabel="취소"
      />
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: `color/background/primary`, `color/text/primary`, `borderRadius/medium`, `spacing/2xlarge`, `Level 3` shadow',
      },
    },
  },
};

// ─── 2. Confirmation ─────────────────────────────────────────

export const Confirmation: Story = {
  name: '확인 다이얼로그',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Confirmation Modal"
        description="기본 확인/취소 대화상자입니다."
      >
        <ModalPreview
          title="로그아웃"
          description="정말 로그아웃 하시겠습니까?"
          primaryLabel="로그아웃"
          secondaryLabel="취소"
        />
      </Section>
    </View>
  ),
};

// ─── 3. Destructive ──────────────────────────────────────────

export const Destructive: Story = {
  name: '위험 액션',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Destructive Modal"
        description="삭제 등 되돌릴 수 없는 작업 확인 시 사용합니다. Primary 버튼에 에러 색상이 적용됩니다."
      >
        <ModalPreview
          title="계정 삭제"
          description="계정을 삭제하면 모든 데이터가 영구적으로 제거됩니다. 이 작업은 되돌릴 수 없습니다."
          primaryLabel="삭제"
          secondaryLabel="취소"
        />
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '**Destructive 버튼**: `color/background/error` · `color/text/onColor`',
      },
    },
  },
};

// ─── 4. Form Modal ───────────────────────────────────────────

export const FormModal: Story = {
  name: '폼 모달',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Form Modal"
        description="TextField 컴포넌트를 포함한 모달입니다. 실제 TextField를 import하여 사용합니다."
      >
        <ModalPreview title="피드백 보내기" primaryLabel="전송" secondaryLabel="취소">
          <View style={{ gap: spacing.medium }}>
            <TextField label="제목" placeholder="피드백 제목을 입력하세요." />
            <TextField
              label="내용"
              placeholder="상세 내용을 작성해주세요."
              multiline
              minHeight={80}
              maxCharCount={200}
            />
          </View>
        </ModalPreview>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '**내부 컴포넌트**: `TextField` (multiline) import 사용. Modal 자체 토큰과 TextField 토큰이 각각 독립 적용.',
      },
    },
  },
};

// ─── 5. Title Only ───────────────────────────────────────────

export const TitleOnly: Story = {
  name: '제목만',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Title Only"
        description="설명 없이 제목과 버튼만 포함된 간단한 모달입니다."
      >
        <ModalPreview
          title="알림을 켤까요?"
          primaryLabel="켜기"
          secondaryLabel="나중에"
        />
      </Section>
    </View>
  ),
};

// ─── 6. 단일 버튼 ────────────────────────────────────────────

export const SingleAction: Story = {
  name: '단일 버튼',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="단일 버튼 Modal"
        description="확인 버튼만 있는 알림형 모달입니다."
      >
        <ModalPreview
          title="업데이트 완료"
          description="앱이 최신 버전으로 업데이트되었습니다."
          primaryLabel="확인"
        />
      </Section>
    </View>
  ),
};

// ─── 7. 인터랙티브 데모 ──────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [visible, setVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="버튼을 클릭하여 실제 Modal 컴포넌트를 열어봅니다."
        >
          <View style={{ flexDirection: 'row', gap: spacing.medium }}>
            <Button
              label="Confirmation Modal"
              variant="solid"
              color="primary"
              size="small"
              onPress={() => setVisible(true)}
            />
            <Button
              label="Form Modal"
              variant="outlined"
              color="primary"
              size="small"
              onPress={() => setFormVisible(true)}
            />
          </View>

          <View style={{ height: 400, position: 'relative', marginTop: spacing.xlarge }}>
            <Modal
              visible={visible}
              onClose={() => setVisible(false)}
              title="로그아웃"
              description="정말 로그아웃 하시겠습니까?"
              primaryAction={{ label: '로그아웃', onPress: () => setVisible(false) }}
              secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
            />
            <Modal
              visible={formVisible}
              onClose={() => setFormVisible(false)}
              title="피드백 보내기"
              primaryAction={{ label: '전송', onPress: () => setFormVisible(false) }}
              secondaryAction={{ label: '취소', onPress: () => setFormVisible(false) }}
            >
              <View style={{ gap: spacing.medium }}>
                <TextField label="제목" placeholder="피드백 제목" />
                <TextField label="내용" placeholder="상세 내용" multiline minHeight={80} />
              </View>
            </Modal>
          </View>
        </Section>
      </View>
    );
  },
};

// ─── 8. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="Figma 시맨틱 토큰 기준 Modal 컨테이너 스펙입니다. 내부 Button/TextField의 토큰은 각 컴포넌트 문서를 참조하세요."
        badge="디자인"
      >
        <TokenSpecTable
          title="modal / container"
          rows={[
            { property: 'Container 배경색',  token: CONTAINER_TOKEN_MAP.background.token,  value: CONTAINER_TOKEN_MAP.background.value,  type: 'color' },
            { property: 'Container 라디우스', token: CONTAINER_TOKEN_MAP.radius.token,      value: CONTAINER_TOKEN_MAP.radius.value,      type: 'size' },
            { property: 'Container 그림자',   token: CONTAINER_TOKEN_MAP.shadow.token,      value: CONTAINER_TOKEN_MAP.shadow.value },
            { property: 'Title 색상',         token: CONTAINER_TOKEN_MAP.titleColor.token,  value: CONTAINER_TOKEN_MAP.titleColor.value,  type: 'color' },
            { property: 'Description 색상',   token: CONTAINER_TOKEN_MAP.descColor.token,   value: CONTAINER_TOKEN_MAP.descColor.value,   type: 'color' },
            { property: 'Title 타이포',       token: 'Headline', value: `${textStyle.headline.fontSize}px / ${textStyle.headline.lineHeight}px / ${textStyle.headline.fontWeight}`, type: 'typography' },
            { property: 'Description 타이포', token: 'Body 2',   value: `${textStyle.body2.fontSize}px / ${textStyle.body2.lineHeight}px / ${textStyle.body2.fontWeight}`,          type: 'typography' },
            { property: '전체 패딩',          token: CONTAINER_TOKEN_MAP.padding.token,     value: CONTAINER_TOKEN_MAP.padding.value,     type: 'size' },
            { property: '버튼 간격',          token: CONTAINER_TOKEN_MAP.buttonGap.token,   value: CONTAINER_TOKEN_MAP.buttonGap.value,   type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="modal / scrim"
          rows={[
            { property: 'Scrim 배경색',  token: SCRIM_TOKEN_MAP.background.token, value: SCRIM_TOKEN_MAP.background.value, type: 'color' },
            { property: 'Scrim opacity', token: SCRIM_TOKEN_MAP.opacity.token,    value: SCRIM_TOKEN_MAP.opacity.value,    type: 'opacity' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="modal / animation (권장값)"
          rows={[
            { property: '등장 시작 opacity', token: 'opacity/0',   value: opacity[0],   type: 'opacity' },
            { property: '등장 끝 opacity',   token: 'opacity/100', value: opacity[100], type: 'opacity' },
            { property: 'Duration',          token: '—',           value: '200ms' },
            { property: 'Easing',            token: '—',           value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="내부 컴포넌트 참조"
          rows={[
            { property: 'Primary 버튼',   token: 'Button (solid/primary)',   value: '→ General/Button 문서 참조' },
            { property: 'Secondary 버튼', token: 'Button (solid/assistive)', value: '→ General/Button 문서 참조' },
            { property: 'TextField',     token: 'TextField',               value: '→ Input/TextField 문서 참조' },
            { property: 'TextArea',       token: 'TextField (multiline)',    value: '→ Input/TextArea 문서 참조' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 9. 사용 가이드 ──────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 Modal 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { Modal } from '@design-system/components/Modal';
import { Button } from '@design-system/components/Button';
import { TextField } from '@design-system/components/TextField';`}
        />

        <CodeBlock
          title="기본 Confirmation"
          code={`const [visible, setVisible] = useState(false);

<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="변경사항 저장"
  description="저장하지 않은 변경사항이 있습니다."
  primaryAction={{ label: '저장', onPress: handleSave }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>`}
        />

        <CodeBlock
          title="Destructive (위험 액션)"
          code={`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="계정 삭제"
  description="이 작업은 되돌릴 수 없습니다."
  primaryAction={{ label: '삭제', onPress: handleDelete, destructive: true }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
/>`}
        />

        <CodeBlock
          title="Form Modal (TextField 포함)"
          code={`<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="피드백 보내기"
  primaryAction={{ label: '전송', onPress: handleSubmit }}
  secondaryAction={{ label: '취소', onPress: () => setVisible(false) }}
>
  <TextField label="제목" placeholder="피드백 제목" />
  <TextField
    label="내용"
    placeholder="상세 내용"
    multiline
    maxCharCount={200}
  />
</Modal>`}
        />
      </Section>
    </View>
  ),
};
