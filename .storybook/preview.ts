// React Native 웹 환경에서 __DEV__ 전역 변수 정의
(globalThis as any).__DEV__ = true;

import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundation', ['Color Palette', 'Color Tokens', 'Typography'],
          'General', ['Button', 'TextButton', 'Icon', 'Divider'],
          'Form', ['InputField', 'Checkbox', 'CheckMark', 'Radio', 'Switch', 'Chip'],
          'Feedback', ['Toast', 'Modal', 'BottomSheet', 'ProgressBar', 'Skeleton'],
          'Display', ['Badge', 'Avatar', 'TabBar', 'ActionArea'],
        ],
      },
    },
  },
};

export default preview;
