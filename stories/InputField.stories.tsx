import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputField } from '../src/components/InputField';
import { Section, StateLabel, Col, SpecTable, CodeBlock, Divider } from './storyHelpers';
import { coolNeutral, mint, red, fontSize, fontWeight, spacing, radius } from '../src/tokens/theme';

const meta: Meta<typeof InputField> = {
  title: 'Input/InputField',
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
    keyboardType: {
      control: 'select',
      options: ['default', 'email-address', 'numeric', 'phone-pad', 'decimal-pad', 'number-pad', 'url'],
      description: '키보드 타입',
    },
    secureTextEntry: { control: 'boolean', description: '비밀번호 마스킹' },
    autoCapitalize: {
      control: 'select',
      options: ['none', 'sentences', 'words', 'characters'],
      description: '자동 대문자',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 360, padding: spacing.large }}>
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
      <View style={{ maxWidth: 800, padding: spacing.large }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="모든 상태"
        description="기획자와 디자이너가 한눈에 확인할 수 있도록 InputField의 모든 상태를 정리했습니다."
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing['2xlarge'] }}>
          {/* 비활성 (Inactive) */}
          <Col gap={spacing.small}>
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
          <Col gap={spacing.small}>
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
          <Col gap={spacing.small}>
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
          <Col gap={spacing.small}>
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
          <Col gap={spacing.small}>
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
          <Col gap={spacing.small}>
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
      <View style={{ maxWidth: 800, padding: spacing.large }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="후행 요소"
        description="입력 필드 오른쪽에 배치 가능한 아이콘과 텍스트 조합입니다."
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing['2xlarge'] }}>
          <Col gap={spacing.small}>
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

          <Col gap={spacing.small}>
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

          <Col gap={spacing.small}>
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

          <Col gap={spacing.small}>
            <StateLabel>SEARCH 아이콘</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="검색"
                placeholder="검색어를 입력하세요."
                trailingIcon="search"
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
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

          <Col gap={spacing.small}>
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
      <View style={{ maxWidth: 500, padding: spacing.large }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="텍스트 영역 (Textarea)"
        description="multiline 속성으로 여러 줄 입력이 가능한 텍스트 영역을 제공합니다."
      >
        <Col gap={spacing['2xlarge']}>
          <Col gap={spacing.small}>
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

          <Col gap={spacing.small}>
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

          <Col gap={spacing.small}>
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

// ─── 5. 키보드 & 입력 타입 ──────────────────────────────────

export const KeyboardTypes: Story = {
  name: '키보드 & 입력 타입',
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 800, padding: spacing.large }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section
        title="키보드 & 입력 타입"
        description="모바일에서 키보드 타입에 따라 다른 키패드가 올라옵니다. 각 입력 필드를 탭하여 키보드 동작을 확인하세요."
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing['2xlarge'] }}>
          <Col gap={spacing.small}>
            <StateLabel>기본 (default)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="이름"
                placeholder="이름을 입력하세요."
                keyboardType="default"
                autoCapitalize="words"
                helperText="keyboardType: default, autoCapitalize: words"
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>이메일 (email-address)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="이메일"
                placeholder="example@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                helperText="keyboardType: email-address, autoCapitalize: none"
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>전화번호 (phone-pad)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="전화번호"
                placeholder="010-0000-0000"
                keyboardType="phone-pad"
                helperText="keyboardType: phone-pad"
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>숫자 (numeric)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="나이"
                placeholder="숫자만 입력"
                keyboardType="numeric"
                helperText="keyboardType: numeric"
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>소수점 (decimal-pad)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="금액"
                placeholder="0.00"
                keyboardType="decimal-pad"
                helperText="keyboardType: decimal-pad"
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>URL (url)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="웹사이트"
                placeholder="https://example.com"
                keyboardType="url"
                autoCapitalize="none"
                helperText="keyboardType: url, autoCapitalize: none"
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>비밀번호 (secureTextEntry)</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="비밀번호"
                placeholder="비밀번호를 입력하세요."
                secureTextEntry
                autoCapitalize="none"
                helperText="secureTextEntry: true — 입력 내용이 마스킹됩니다."
              />
            </View>
          </Col>

          <Col gap={spacing.small}>
            <StateLabel>비밀번호 + 에러</StateLabel>
            <View style={{ width: 320 }}>
              <InputField
                label="비밀번호 확인"
                value="mismatch"
                secureTextEntry
                autoCapitalize="none"
                errorMessage="비밀번호가 일치하지 않습니다."
                trailingIcon="error"
              />
            </View>
          </Col>
        </View>
      </Section>

      <Section
        title="키보드 타입 매핑 가이드"
        description="기획자/디자이너를 위한 입력 유형별 권장 설정입니다."
      >
        <SpecTable
          rows={[
            { label: '일반 텍스트', value: "keyboardType: 'default'", token: '이름, 주소, 메모 등' },
            { label: '이메일', value: "keyboardType: 'email-address'\nautoCapitalize: 'none'", token: '@ 키가 포함된 키보드' },
            { label: '전화번호', value: "keyboardType: 'phone-pad'", token: '숫자 + 하이픈 키패드' },
            { label: '숫자 (정수)', value: "keyboardType: 'number-pad'", token: '숫자만 입력 (나이, 수량)' },
            { label: '숫자 (소수점)', value: "keyboardType: 'decimal-pad'", token: '숫자 + 소수점 (금액, 체중)' },
            { label: 'URL', value: "keyboardType: 'url'\nautoCapitalize: 'none'", token: '.com 키가 포함된 키보드' },
            { label: '비밀번호', value: "secureTextEntry: true\nautoCapitalize: 'none'", token: '입력 내용 마스킹 (●●●●)' },
          ]}
        />
      </Section>
    </View>
  ),
};

// ─── 6. 인터랙티브 데모 ─────────────────────────────────────

export const InteractiveDemo: Story = {
  name: '인터랙티브 데모',
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 400, padding: spacing.large }}>
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
      <View style={{ gap: spacing['3xlarge'] }}>
        <Section
          title="인터랙티브 데모"
          description="직접 입력하며 상태 변화를 확인해 보세요. 2자 이상 입력 후 텍스트 링크를 누르면 유효성 검사를 실행합니다."
        >
          <Col gap={spacing.large}>
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

// ─── 7. 디자인 스펙 ─────────────────────────────────────────

export const DesignSpec: Story = {
  name: '디자인 스펙',
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 700, padding: spacing.large }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="디자인 스펙" description="InputField 컴포넌트의 디자인 토큰 명세입니다.">
        <Col gap={spacing['2xlarge']}>
          <SpecTable
            title="상태별 테두리 컬러"
            rows={[
              { label: '비활성 (Inactive) 테두리', value: coolNeutral[96], token: 'semanticColor.borderDefault' },
              { label: '입력됨 (Active) 테두리', value: coolNeutral[90], token: 'semanticColor.borderActive' },
              { label: '포커스 (Focus) 테두리', value: mint[45], token: 'semanticColor.borderFocus' },
              { label: '에러 (Error) 테두리', value: red[70], token: 'semanticColor.borderError' },
              { label: '비활성화 (Disabled) 테두리', value: coolNeutral[96], token: 'semanticColor.borderDisabled' },
            ]}
          />

          <SpecTable
            title="메시지 컬러"
            rows={[
              { label: '도움말 텍스트', value: coolNeutral[50], token: 'semanticColor.textSecondary' },
              { label: '에러 메시지', value: red[70], token: 'semanticColor.textError' },
              { label: '성공 메시지', value: mint[45], token: 'semanticColor.textSuccess' },
            ]}
          />

          <SpecTable
            title="아이콘 컬러"
            rows={[
              { label: 'Clear 아이콘', value: coolNeutral[80], token: 'semanticColor.iconDisabled' },
              { label: 'Error 아이콘', value: red[70], token: 'semanticColor.iconError' },
              { label: 'Success 아이콘', value: mint[45], token: 'semanticColor.iconSuccess' },
              { label: 'Search 아이콘', value: coolNeutral[50], token: 'semanticColor.iconSecondary' },
            ]}
          />

          <SpecTable
            title="텍스트 스타일"
            rows={[
              { label: '라벨', value: 'textStyle.label2', token: '13px / 500 / 18px / 0.25' },
              { label: '라벨 색상', value: coolNeutral[30], token: 'coolNeutral[30] (palette 직접 참조)' },
              { label: '입력 텍스트', value: 'textStyle.body2', token: '15px / 400 / 22px / 0.14' },
              { label: '입력 텍스트 색상', value: coolNeutral[17], token: 'semanticColor.textPrimary' },
              { label: '플레이스홀더 색상', value: coolNeutral[80], token: 'semanticColor.textPlaceholder' },
            ]}
          />

          <SpecTable
            title="레이아웃"
            rows={[
              { label: '테두리 radius', value: `${radius.medium}`, token: 'radius.medium (12)' },
              { label: '수평 패딩', value: `${spacing.large}`, token: 'spacing.large (16)' },
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

// ─── 8. 사용 가이드 ─────────────────────────────────────────

export const Usage: Story = {
  name: '사용 가이드',
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 600, padding: spacing.large }}>
        <Story />
      </View>
    ),
  ],
  render: () => (
    <View style={{ gap: spacing['3xlarge'] }}>
      <Section title="사용 가이드" description="InputField 컴포넌트의 import 및 사용 예시입니다.">
        <Col gap={spacing.large}>
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
            title="키보드 타입 지정"
            code={`// 이메일 키보드 (@ 키 포함)
<InputField
  label="이메일"
  keyboardType="email-address"
  autoCapitalize="none"
/>

// 전화번호 키패드
<InputField
  label="전화번호"
  keyboardType="phone-pad"
/>

// 비밀번호 마스킹
<InputField
  label="비밀번호"
  secureTextEntry
  autoCapitalize="none"
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
            title="Textarea + KeyboardAvoidingView (키보드 가림 방지)"
            code={`import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

// ⚠️ Textarea(multiline)를 사용할 때 키보드가 입력창을 가리는 문제가 발생합니다.
// KeyboardAvoidingView로 감싸서 키보드가 올라올 때 화면을 자동으로 밀어올려야 합니다.

function WriteScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
    >
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <InputField label="제목" />
        <InputField
          label="본문"
          multiline
          maxCharCount={2000}
          minHeight={200}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}`}
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
