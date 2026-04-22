import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomSheet } from '../src/components/BottomSheet';
import { Button } from '../src/components/Button';
import { TextField } from '../src/components/TextField';
import { Checkbox } from '../src/components/Checkbox';
import { Section, CodeBlock, Divider } from './storyHelpers';
import { TokenSpecTable } from '../src/storybook-components/TokenSpecTable';
import {
  spacing, semanticColor, radius, opacity, textStyle, shadow,
  fontSize, fontWeight, palette,
} from '../src/tokens/theme';

// ─── 토큰 매핑 테이블 (Single Source of Truth) ──────────────

const CONTAINER_TOKEN_MAP = {
  background:   { token: 'color/background/primary',  value: semanticColor.backgroundStatus },
  radiusTop:    { token: 'borderRadius/xlarge',        value: radius.xlarge },
  titleColor:   { token: 'color/text/primary',         value: semanticColor.textPrimary },
  paddingH:     { token: 'spacing/xlarge',             value: spacing.xlarge },
  paddingV:     { token: 'spacing/large',              value: spacing.large },
  contentPadB:  { token: 'spacing/xlarge',             value: spacing.xlarge },
} as const;

const HANDLE_TOKEN_MAP = {
  background:   { token: 'color/background/off',       value: semanticColor.backgroundOff },
  radius:       { token: 'borderRadius/full',           value: radius.full },
  topMargin:    { token: 'spacing/medium',              value: spacing.medium },
} as const;

const SCRIM_TOKEN_MAP = {
  background:   { token: 'black',                      value: palette.black },
  opacity:      { token: 'opacity/43',                  value: opacity[43] },
} as const;

// ─── 인라인 BottomSheet 미리보기 (position: static) ──────────

function SheetPreview({
  title,
  children,
  showHandle = true,
  showClose = false,
}: {
  title?: string;
  children?: React.ReactNode;
  showHandle?: boolean;
  showClose?: boolean;
}) {
  return (
    <View style={{
      maxWidth: 375,
      backgroundColor: `rgba(0,0,0,${opacity[52]})`,
      borderTopLeftRadius: radius.medium,
      borderTopRightRadius: radius.medium,
      overflow: 'hidden',
    }}>
      <View style={{ height: 80 }} />
      <View style={{
        backgroundColor: semanticColor.backgroundStatus,
        borderTopLeftRadius: radius.xlarge,
        borderTopRightRadius: radius.xlarge,
      }}>
        {showHandle && (
          <View style={{ alignItems: 'center', marginTop: spacing.medium }}>
            <View style={{
              width: 40,
              height: 4,
              borderRadius: 2,
              backgroundColor: semanticColor.backgroundOff,
            }} />
          </View>
        )}
        {showClose && (
          <View style={{
            position: 'absolute',
            right: spacing.large,
            top: spacing.large,
            width: 24,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{ fontSize: fontSize.large, color: semanticColor.textSecondary }}>{'\u2715'}</Text>
          </View>
        )}
        {title && (
          <Text style={{
            fontSize: fontSize.large,
            fontWeight: fontWeight.bold,
            color: semanticColor.textPrimary,
            paddingHorizontal: spacing.xlarge,
            paddingVertical: spacing.large,
          }}>{title}</Text>
        )}
        <View style={{ paddingHorizontal: spacing.xlarge, paddingBottom: spacing.xlarge }}>
          {children}
        </View>
      </View>
    </View>
  );
}

// ─── Meta ────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Overlay/BottomSheet',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// ─── 1. Playground ───────────────────────────────────────────

export const Playground: Story = {
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Playground"
        description="BottomSheet 기본 미리보기입니다."
      >
        <SheetPreview title="옵션 선택" showHandle>
          <View style={{ gap: spacing.medium }}>
            <Text style={{ fontSize: fontSize.medium, color: semanticColor.textSecondary }}>
              아래에서 원하는 옵션을 선택해주세요.
            </Text>
            <Button label="확인" variant="solid" color="primary" size="medium" />
            <Button label="취소" variant="solid" color="assistive" size="medium" />
          </View>
        </SheetPreview>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '**적용 토큰**: `color/background/primary`, `borderRadius/xlarge` (상단만), `spacing/xlarge`, Handle `color/background/off`',
      },
    },
  },
};

// ─── 2. Handle 유/무 ─────────────────────────────────────────

export const HandleVariants: Story = {
  name: 'Handle 유/무',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Handle 유/무"
        description="Drag handle bar 표시 여부를 비교합니다."
      >
        <View style={{ gap: spacing.xlarge }}>
          <View>
            <Text style={{ fontSize: fontSize.xsmall, fontWeight: fontWeight.semibold, color: semanticColor.textSecondary, marginBottom: spacing.small }}>Handle 표시</Text>
            <SheetPreview title="제목" showHandle>
              <Text style={{ fontSize: fontSize.medium, color: semanticColor.textSecondary }}>Handle이 있는 시트</Text>
            </SheetPreview>
          </View>
          <View>
            <Text style={{ fontSize: fontSize.xsmall, fontWeight: fontWeight.semibold, color: semanticColor.textSecondary, marginBottom: spacing.small }}>Handle 숨김</Text>
            <SheetPreview title="제목" showHandle={false}>
              <Text style={{ fontSize: fontSize.medium, color: semanticColor.textSecondary }}>Handle이 없는 시트</Text>
            </SheetPreview>
          </View>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. CloseButton ──────────────────────────────────────────

export const WithCloseButton: Story = {
  name: 'Close 버튼',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Close 버튼"
        description="우상단에 닫기 버튼이 포함된 시트입니다."
      >
        <SheetPreview title="알림 설정" showHandle showClose>
          <Text style={{ fontSize: fontSize.medium, color: semanticColor.textSecondary }}>
            알림 관련 옵션을 설정할 수 있습니다.
          </Text>
        </SheetPreview>
      </Section>
    </View>
  ),
};

// ─── 4. Action Sheet ─────────────────────────────────────────

export const ActionSheet: Story = {
  name: 'Action Sheet',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Action Sheet"
        description="확인/취소 버튼이 포함된 기본 액션 시트입니다. 실제 Button 컴포넌트를 사용합니다."
      >
        <SheetPreview title="기록 삭제" showHandle>
          <View style={{ gap: spacing.medium }}>
            <Text style={{ fontSize: fontSize.medium, color: semanticColor.textSecondary }}>
              이 기록을 삭제하시겠습니까? 삭제된 기록은 복구할 수 없습니다.
            </Text>
            <View style={{ gap: spacing.small, marginTop: spacing.small }}>
              <Button label="삭제" variant="solid" color="primary" size="medium" />
              <Button label="취소" variant="solid" color="assistive" size="medium" />
            </View>
          </View>
        </SheetPreview>
      </Section>
    </View>
  ),
};

// ─── 5. Form Sheet ───────────────────────────────────────────

export const FormSheet: Story = {
  name: 'Form Sheet',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Form Sheet"
        description="TextField를 포함한 폼 시트입니다. 실제 TextField 컴포넌트를 import하여 사용합니다."
      >
        <SheetPreview title="목표 설정" showHandle>
          <View style={{ gap: spacing.medium }}>
            <TextField label="목표명" placeholder="예: 하루 물 2L 마시기" />
            <TextField label="메모" placeholder="상세 설명 (선택)" multiline minHeight={60} />
            <View style={{ gap: spacing.small, marginTop: spacing.small }}>
              <Button label="저장" variant="solid" color="primary" size="medium" />
              <Button label="취소" variant="solid" color="assistive" size="medium" />
            </View>
          </View>
        </SheetPreview>
      </Section>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: '**내부 컴포넌트**: `TextField`, `Button` import 사용. BottomSheet 자체 토큰과 내부 컴포넌트 토큰이 각각 독립 적용.',
      },
    },
  },
};

// ─── 6. List Sheet ───────────────────────────────────────────

export const ListSheet: Story = {
  name: 'List Sheet',
  render: () => {
    const options = ['식단 기록', '수면 기록', '운동 기록', '영양제 기록', '수분 기록'];
    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="List Sheet"
          description="여러 옵션 목록을 포함한 시트입니다."
        >
          <SheetPreview title="기록 추가" showHandle>
            <View style={{ gap: 0 }}>
              {options.map((opt, i) => (
                <View key={opt} style={{
                  paddingVertical: spacing.medium,
                  borderBottomWidth: i < options.length - 1 ? 1 : 0,
                  borderBottomColor: semanticColor.borderDefault,
                }}>
                  <Text style={{ fontSize: fontSize.medium, fontWeight: fontWeight.medium, color: semanticColor.textPrimary }}>{opt}</Text>
                </View>
              ))}
            </View>
          </SheetPreview>
        </Section>
      </View>
    );
  },
};

// ─── 7. Checkbox Sheet ───────────────────────────────────────

export const CheckboxSheet: Story = {
  name: 'Checkbox Sheet',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="Checkbox Sheet"
        description="약관 동의 등 Checkbox를 포함한 시트입니다. 실제 Checkbox 컴포넌트를 사용합니다."
      >
        <SheetPreview title="이용약관 동의" showHandle>
          <View style={{ gap: spacing.small }}>
            <Checkbox state="checked" label="전체 동의" bold />
            <View style={{ height: 1, backgroundColor: semanticColor.borderDefault }} />
            <Checkbox state="checked" label="이용약관 동의 (필수)" />
            <Checkbox state="checked" label="개인정보 처리방침 동의 (필수)" />
            <Checkbox state="unchecked" label="마케팅 수신 동의 (선택)" sublabel="이벤트, 혜택 정보를 받아볼 수 있습니다." />
            <View style={{ marginTop: spacing.medium }}>
              <Button label="동의하고 계속하기" variant="solid" color="primary" size="large" />
            </View>
          </View>
        </SheetPreview>
      </Section>
    </View>
  ),
};

// ─── 8. 인터랙티브 데모 ──────────────────────────────────────

export const Interactive: Story = {
  name: '인터랙티브 데모',
  render: () => {
    const [visible, setVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);

    return (
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="버튼을 클릭하여 실제 BottomSheet 컴포넌트를 열어봅니다."
        >
          <View style={{ flexDirection: 'row', gap: spacing.medium }}>
            <Button label="Action Sheet" variant="solid" color="primary" size="small" onPress={() => setVisible(true)} />
            <Button label="Form Sheet" variant="outlined" color="primary" size="small" onPress={() => setFormVisible(true)} />
          </View>

          <BottomSheet visible={visible} onClose={() => setVisible(false)} title="기록 삭제" showHandle>
            <View style={{ gap: spacing.medium }}>
              <Text style={{ fontSize: fontSize.medium, color: semanticColor.textSecondary }}>
                이 기록을 삭제하시겠습니까?
              </Text>
              <Button label="삭제" variant="solid" color="primary" size="medium" onPress={() => setVisible(false)} />
              <Button label="취소" variant="solid" color="assistive" size="medium" onPress={() => setVisible(false)} />
            </View>
          </BottomSheet>

          <BottomSheet visible={formVisible} onClose={() => setFormVisible(false)} title="목표 설정" showHandle>
            <View style={{ gap: spacing.medium }}>
              <TextField label="목표명" placeholder="예: 하루 물 2L 마시기" />
              <Button label="저장" variant="solid" color="primary" size="medium" onPress={() => setFormVisible(false)} />
            </View>
          </BottomSheet>
        </Section>
      </View>
    );
  },
};

// ─── 9. 디자인 스펙 ──────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="디자인 스펙"
        description="Figma 시맨틱 토큰 기준 BottomSheet 컨테이너 스펙입니다. 내부 Button/TextField/Checkbox의 토큰은 각 컴포넌트 문서를 참조하세요."
        badge="디자인"
      >
        <TokenSpecTable
          title="bottom sheet / container"
          rows={[
            { property: 'Container 배경색',      token: CONTAINER_TOKEN_MAP.background.token,  value: CONTAINER_TOKEN_MAP.background.value,  type: 'color' },
            { property: 'Container 상단 라디우스', token: CONTAINER_TOKEN_MAP.radiusTop.token,   value: CONTAINER_TOKEN_MAP.radiusTop.value,   type: 'size' },
            { property: 'Title 색상',             token: CONTAINER_TOKEN_MAP.titleColor.token,  value: CONTAINER_TOKEN_MAP.titleColor.value,  type: 'color' },
            { property: 'Title 타이포',           token: 'Headline', value: `${textStyle.headline.fontSize}px / ${textStyle.headline.lineHeight}px / ${textStyle.headline.fontWeight}`, type: 'typography' },
            { property: '좌우 패딩',              token: CONTAINER_TOKEN_MAP.paddingH.token,    value: CONTAINER_TOKEN_MAP.paddingH.value,    type: 'size' },
            { property: 'Title 상하 패딩',        token: CONTAINER_TOKEN_MAP.paddingV.token,    value: CONTAINER_TOKEN_MAP.paddingV.value,    type: 'size' },
            { property: 'Content 하단 패딩',      token: CONTAINER_TOKEN_MAP.contentPadB.token, value: CONTAINER_TOKEN_MAP.contentPadB.value, type: 'size' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="bottom sheet / drag handle"
          rows={[
            { property: 'Handle 배경색',   token: HANDLE_TOKEN_MAP.background.token, value: HANDLE_TOKEN_MAP.background.value, type: 'color' },
            { property: 'Handle 라디우스',  token: HANDLE_TOKEN_MAP.radius.token,     value: HANDLE_TOKEN_MAP.radius.value,    type: 'size' },
            { property: 'Handle 상단 여백', token: HANDLE_TOKEN_MAP.topMargin.token,   value: HANDLE_TOKEN_MAP.topMargin.value, type: 'size' },
            { property: 'Handle 너비',     token: '—', value: '40' },
            { property: 'Handle 높이',     token: '—', value: '4' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="bottom sheet / scrim"
          rows={[
            { property: 'Scrim 배경색',  token: SCRIM_TOKEN_MAP.background.token, value: SCRIM_TOKEN_MAP.background.value, type: 'color' },
            { property: 'Scrim opacity', token: SCRIM_TOKEN_MAP.opacity.token,    value: SCRIM_TOKEN_MAP.opacity.value,    type: 'opacity' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="bottom sheet / animation (권장값)"
          rows={[
            { property: '등장 시작 opacity',  token: 'opacity/0',   value: opacity[0],   type: 'opacity' },
            { property: '등장 끝 opacity',    token: 'opacity/100', value: opacity[100], type: 'opacity' },
            { property: '등장 방향',          token: '—',           value: 'translateY(100%) → translateY(0)' },
            { property: 'Duration',           token: '—',           value: '300ms' },
            { property: 'Easing',             token: '—',           value: 'cubic-bezier(0.32, 0.72, 0, 1)' },
          ]}
        />

        <Divider />

        <TokenSpecTable
          title="내부 컴포넌트 참조"
          rows={[
            { property: 'Button',     token: 'Button (solid)',         value: '→ General/Button 문서 참조' },
            { property: 'TextField', token: 'TextField',             value: '→ Input/TextField 문서 참조' },
            { property: 'Checkbox',   token: 'Checkbox',               value: '→ Input/Checkbox 문서 참조' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 10. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="사용 가이드"
        description="개발자를 위한 BottomSheet 컴포넌트 사용 예시입니다."
        badge="개발"
      >
        <CodeBlock
          title="Import"
          code={`import { BottomSheet } from '@design-system/components/BottomSheet';
import { Button } from '@design-system/components/Button';`}
        />

        <CodeBlock
          title="기본 Action Sheet"
          code={`const [visible, setVisible] = useState(false);

<BottomSheet
  visible={visible}
  onClose={() => setVisible(false)}
  title="기록 삭제"
  showHandle
>
  <Text>이 기록을 삭제하시겠습니까?</Text>
  <Button label="삭제" onPress={handleDelete} />
  <Button label="취소" variant="solid" color="assistive" onPress={() => setVisible(false)} />
</BottomSheet>`}
        />

        <CodeBlock
          title="Form Sheet"
          code={`<BottomSheet visible={visible} onClose={close} title="목표 설정" showHandle>
  <TextField label="목표명" placeholder="예: 하루 물 2L" />
  <TextField label="메모" multiline minHeight={60} />
  <Button label="저장" onPress={handleSave} />
</BottomSheet>`}
        />

        <CodeBlock
          title="Safe Area 대응"
          code={`import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { bottom } = useSafeAreaInsets();

<BottomSheet
  visible={visible}
  onClose={close}
  safeAreaBottom={bottom}
>
  {children}
</BottomSheet>`}
        />
      </Section>
    </View>
  ),
};
