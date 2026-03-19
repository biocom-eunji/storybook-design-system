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
          'Getting Started', ['Introduction', 'Release Notes', 'Naming Convention'],
          'Design Tokens', ['Color Palette', 'Color Tokens', 'Typography', 'Grid Palette', 'Grid Tokens', 'Spacing & Grid', 'Shadow & Elevation'],
          'General', ['Button', 'TextButton', 'Icon'],
          'Input', ['InputField', 'Checkbox', 'Radio', 'Switch', 'Chip'],
          'Feedback', ['Toast', 'Modal', 'BottomSheet', 'ProgressBar', 'Skeleton'],
          'Navigation', ['TabBar', 'ActionArea'],
          'Data Display', ['Badge', 'Avatar', 'Divider'],
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
