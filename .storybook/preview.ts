// React Native 웹 환경에서 __DEV__ 전역 변수 정의
(globalThis as any).__DEV__ = true;

import React from 'react';
import { View } from 'react-native';
import type { Preview } from '@storybook/react-vite';
import { create } from 'storybook/theming/create';

const biocomTheme = create({
  base: 'light',
  brandTitle: 'Biocom Design System',
  colorPrimary: '#22C3BC',
  colorSecondary: '#22C3BC',
  textColor: '#212225',
  textMutedColor: '#70737C',
  barSelectedColor: '#22C3BC',
});

const preview: Preview = {
  parameters: {
    docs: {
      theme: biocomTheme,
    },
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
          'Foundation', ['Color Palette', 'Color Tokens', 'Typography', 'Naming Convention'],
          'General', ['Button', 'TextButton', 'Icon', 'Divider'],
          'Form', ['InputField', 'Checkbox', 'CheckMark', 'Radio', 'Switch', 'Chip'],
          'Feedback', ['Toast', 'Modal', 'BottomSheet', 'ProgressBar', 'Skeleton'],
          'Display', ['Badge', 'Avatar', 'TabBar', 'ActionArea'],
        ],
      },
    },
    layout: 'padded',
  },
  decorators: [
    (Story: any) =>
      React.createElement(
        View,
        { style: { padding: 4, maxWidth: 960 } },
        React.createElement(Story, null),
      ),
  ],
};

export default preview;
