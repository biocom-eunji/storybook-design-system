import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputField } from '../src/components/InputField';
import { Section, StateLabel, Row, Col, SpecTable, CodeBlock, CompareGrid, Divider } from './storyHelpers';
import { coolNeutral, mint, redOrange, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    label: { control: 'text', description: '라벨' },
    placeholder: { control: 'text', description: '플레이스홀더' },
    value: { control: 'text', description: '입력값' },
    helperText: { control: 'text', description: '도움말' },
    errorMessage: { control: 'text', description: '에러 메시지' },
    successMessage: { control: 'text', description: '성공 메시지' },
    maxCharCount: { control: 'number', description: '최대 글자 수' },
    disabled: { control: 'boolean', description: '비활성화' },
    multiline: { control: 'boolean', description: 'Textarea 모드' },
    trailingIcon: {
      control: 'select',
      options: [undefined, 'clear', 'error', 'success', 'search'],
      description: '우측 아이콘',
    },
    trailingText: { control: 'text', description: '우측 텍스트 링크' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 360, padding: spacing.lg }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InputField>;

// ─── 1. Playground ──────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: '주제',
    placeholder: '메시지를 입력해 주세요.',
    helperText: '메시지에 마침표를 찍어요.',
    maxCharCount: 2000,
  },
};

// ─── 2. 모든 상태 ──────────────────────────────────────────

export const AllStates: Story = {
  name: '모든 상태',
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 800, padding: spacing.lg }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="모든 상태"
        description="기획자와 디자이너가 한눈에 확인할 수 있도록 InputField의 모든 상태를 정리했습니다."
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing['2xl'] }}>
          {/* 비활성 (Inactive) */}
          <Col gap={spacing.sm}>
            <StateLabel>비활성 (INACTIVE)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                placeholder="메시지를 입력해 주세요."
                helperText="메시지에 마침표를 찍어요."
                maxCharCount={2000}
              />
            </View>
          </Col>

          {/* 입력됨 (Active) */}
          <Col gap={spacing.sm}>
            <StateLabel>입력됨 (ACTIVE)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                value="입력된 내용"
                helperText="메시지에 마침표를 찍어요."
                maxCharCount={2000}
              />
            </View>
          </Col>

          {/* 포커스 (Focus) */}
          <Col gap={spacing.sm}>
            <StateLabel>포커스 (FOCUS)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                placeholder="메시지를 입력해 주세요."
                helperText="포커스 상태는 컴포넌트 내부에서 자동 관리됩니다. 입력 필드를 클릭하면 민트색 테두리가 나타납니다."
                maxCharCount={2000}
              />
            </View>
          </Col>

          {/* 에러 */}
          <Col gap={spacing.sm}>
            <StateLabel>에러 (ERROR)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                value="잘못된 입력"
                errorMessage="에러 메시지를 나타내요."
                trailingIcon="error"
              />
            </View>
          </Col>

          {/* 성공 */}
          <Col gap={spacing.sm}>
            <StateLabel>성공 (SUCCESS)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                value="올바른 입력"
                successMessage="성공 메시지를 나타내요."
                trailingIcon="success"
              />
            </View>
          </Col>

          {/* 비활성화 (Disabled) */}
          <Col gap={spacing.sm}>
            <StateLabel>비활성화 (DISABLED)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                placeholder="입력할 수 없습니다."
                helperText="비활성화된 입력 필드입니다."
                disabled
              />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 3. 후행 요소 ──────────────────────────────────────────

export const TrailingElements: Story = {
  name: '후행 요소',
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 800, padding: spacing.lg }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="후행 요소"
        description="입력 필드 오른쪽에 배치 가능한 아이콘과 텍스트 조합입니다."
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing['2xl'] }}>
          <Col gap={spacing.sm}>
            <StateLabel>CLEAR 아이콘</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                value="입력된 내용"
                helperText="지우기 아이콘을 탭하면 입력 내용을 삭제합니다."
                trailingIcon="clear"
              />
            </View>
          </Col>

          <Col gap={spacing.sm}>
            <StateLabel>ERROR 아이콘</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                value="잘못된 입력"
                errorMessage="에러 메시지를 나타내요."
                trailingIcon="error"
              />
            </View>
          </Col>

          <Col gap={spacing.sm}>
            <StateLabel>SUCCESS 아이콘</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                value="올바른 입력"
                successMessage="성공 메시지를 나타내요."
                trailingIcon="success"
              />
            </View>
          </Col>

          <Col gap={spacing.sm}>
            <StateLabel>SEARCH 아이콘</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="검색"
                placeholder="검색어를 입력하세요."
                trailingIcon="search"
              />
            </View>
          </Col>

          <Col gap={spacing.sm}>
            <StateLabel>텍스트 링크</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                value="입력된 내용"
                helperText="오른쪽 텍스트 링크를 통해 추가 동작을 제공합니다."
                trailingText="텍스트"
              />
            </View>
          </Col>

          <Col gap={spacing.sm}>
            <StateLabel>아이콘 + 텍스트 링크</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="주제"
                value="입력된 내용"
                helperText="아이콘과 텍스트 링크를 동시에 사용합니다."
                trailingIcon="clear"
                trailingText="텍스트"
              />
            </View>
          </Col>
        </View>
      </Section>
    </View>
  ),
};

// ─── 4. 텍스트 영역 ─────────────────────────────────────────

export const Textarea: Story = {
  name: '텍스트 영역',
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 500, padding: spacing.lg }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section
        title="텍스트 영역 (Textarea)"
        description="multiline 속성으로 여러 줄 입력이 가능한 텍스트 영역을 제공합니다."
      >
        <Col gap={spacing['2xl']}>
          <Col gap={spacing.sm}>
            <StateLabel>기본 텍스트 영역</StateLabel>
            <InputField
              label="주제"
              placeholder="메시지를 입력해 주세요."
              helperText="메시지에 마침표를 찍어요."
              maxCharCount={2000}
              multiline
            />
          </Col>

          <Divider />

          <Col gap={spacing.sm}>
            <StateLabel>입력된 텍스트 영역</StateLabel>
            <InputField
              label="주제"
              value="입력된 여러 줄의 내용이 들어갑니다. 텍스트 영역은 여러 줄의 긴 텍스트를 입력받을 때 사용합니다."
              helperText="메시지에 마침표를 찍어요."
              maxCharCount={2000}
              multiline
              trailingText="텍스트"
            />
          </Col>

          <Divider />

          <Col gap={spacing.sm}>
            <StateLabel>비활성화된 텍스트 영역</StateLabel>
            <InputField
              label="주제"
              value="수정할 수 없는 내용입니다."
              helperText="비활성화된 텍스트 영역입니다."
              maxCharCount={2000}
              multiline
              disabled
            />
          </Col>
        </Col>
      </Section>
    </View>
  ),
};

// ─── 5. 인터랙티브 데모 ─────────────────────────────────────

export const InteractiveDemo: Story = {
  name: '인터랙티브 데모',
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 400, padding: spacing.lg }}>
        <Story />
      </View>
    ),
  ],
  render: () => {
    const [text, setText] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const hasError = submitted && text.length < 2;
    const hasSuccess = submitted && text.length >= 2;

    return (
      <View style={{ gap: spacing['3xl'] }}>
        <Section
          title="인터랙티브 데모"
          description="직접 입력하며 상태 변화를 확인해 보세요. 2자 이상 입력 후 텍스트 링크를 누르면 유효성 검사를 실행합니다."
        >
          <Col gap={spacing.lg}>
            <InputField
              label="이름"
              placeholder="이름을 입력해 주세요."
              value={text}
              onChangeText={(v) => {
                setText(v);
                if (submitted) setSubmitted(false);
              }}
              helperText={!hasError && !hasSuccess ? '2자 이상 입력해 주세요.' : undefined}
              errorMessage={hasError ? '이름은 2자 이상 입력해야 합니다.' : undefined}
              successMessage={hasSuccess ? '올바른 이름입니다.' : undefined}
              trailingIcon={
                text.length > 0
                  ? hasError
                    ? 'error'
                    : hasSuccess
                      ? 'success'
                      : 'clear'
                  : undefined
              }
              trailingText="확인"
              onTrailingTextPress={() => setSubmitted(true)}
              onClear={() => {
                setText('');
                setSubmitted(false);
              }}
              maxCharCount={20}
            />
          </Col>
        </Section>
      </View>
    );
  },
};

// ─── 6. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 700, padding: spacing.lg }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section title="디자인 스펙" description="InputField 컴포넌트의 디자인 토큰 명세입니다.">
        <Col gap={spacing['2xl']}>
          <SpecTable
            title="상태별 테두리 컬러"
            rows={[
              { label: '비활성 (Inactive) 테두리', value: coolNeutral[96], token: 'coolNeutral[96]' },
              { label: '입력됨 (Active) 테두리', value: coolNeutral[90], token: 'coolNeutral[90]' },
              { label: '포커스 (Focus) 테두리', value: mint[45], token: 'mint[45]' },
              { label: '에러 (Error) 테두리', value: redOrange[50], token: 'redOrange[50]' },
              { label: '비활성화 (Disabled) 테두리', value: coolNeutral[96], token: 'coolNeutral[96]' },
            ]}
          />

          <SpecTable
            title="메시지 컬러"
            rows={[
              { label: '도움말 텍스트', value: coolNeutral[50], token: 'coolNeutral[50]' },
              { label: '에러 메시지', value: redOrange[50], token: 'redOrange[50]' },
              { label: '성공 메시지', value: mint[45], token: 'mint[45]' },
            ]}
          />

          <SpecTable
            title="텍스트 스타일"
            rows={[
              { label: '라벨 fontSize', value: `${fontSize.sm}`, token: 'fontSize.sm (13)' },
              { label: '라벨 fontWeight', value: fontWeight.medium, token: 'fontWeight.medium (500)' },
              { label: '라벨 색상', value: coolNeutral[30], token: 'coolNeutral[30]' },
              { label: '입력 텍스트 fontSize', value: `${fontSize.md}`, token: 'fontSize.md (15)' },
              { label: '입력 텍스트 색상', value: coolNeutral[17], token: 'coolNeutral[17]' },
              { label: '플레이스홀더 색상', value: coolNeutral[80], token: 'coolNeutral[80]' },
            ]}
          />

          <SpecTable
            title="레이아웃"
            rows={[
              { label: '테두리 radius', value: `${radius.md}`, token: 'radius.md (12)' },
              { label: '수평 패딩', value: `${spacing.lg}`, token: 'spacing.lg (16)' },
              { label: '최소 높이 (단일)', value: '48', token: '—' },
              { label: '최소 높이 (멀티라인)', value: '100', token: '—' },
              { label: '비활성화 배경색', value: coolNeutral[99], token: 'coolNeutral[99]' },
            ]}
          />
        </Col>
      </Section>
    </View>
  ),
};

// ─── 7. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 600, padding: spacing.lg }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xl'] }}>
      <Section title="사용 가이드" description="InputField 컴포넌트의 import 및 사용 예시입니다.">
        <Col gap={spacing.lg}>
          <CodeBlock
            title="Import"
            code={`import { InputField } from '@design-system/components/InputField';`}
          />

          <CodeBlock
            title="기본 사용"
            code={`<InputField
  label="주제"
  placeholder="메시지를 입력해 주세요."
  helperText="도움말 텍스트"
  value={text}
  onChangeText={setText}
/>`}
          />

          <CodeBlock
            title="에러 상태"
            code={`<InputField
  label="이메일"
  value={email}
  onChangeText={setEmail}
  errorMessage="올바른 이메일 형식이 아닙니다."
  trailingIcon="error"
/>`}
          />

          <CodeBlock
            title="성공 상태"
            code={`<InputField
  label="닉네임"
  value={nickname}
  onChangeText={setNickname}
  successMessage="사용 가능한 닉네임입니다."
  trailingIcon="success"
/>`}
          />

          <CodeBlock
            title="지우기 버튼 포함"
            code={`<InputField
  label="검색"
  value={query}
  onChangeText={setQuery}
  trailingIcon={query.length > 0 ? 'clear' : 'search'}
  onClear={() => setQuery('')}
/>`}
          />

          <CodeBlock
            title="글자 수 제한"
            code={`<InputField
  label="메모"
  value={memo}
  onChangeText={setMemo}
  maxCharCount={200}
  helperText="200자 이내로 작성해 주세요."
/>`}
          />

          <CodeBlock
            title="Textarea (여러 줄 입력)"
            code={`<InputField
  label="상세 설명"
  value={description}
  onChangeText={setDescription}
  multiline
  maxCharCount={2000}
  helperText="상세한 설명을 작성해 주세요."
/>`}
          />

          <CodeBlock
            title="비활성화"
            code={`<InputField
  label="이름"
  value="홍길동"
  disabled
/>`}
          />
        </Col>
      </Section>
    </View>
  ),
};
