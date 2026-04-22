// React Native 웹 환경에서 __DEV__ 전역 변수 정의
(globalThis as any).__DEV__ = true;

import React from 'react';
import { View } from 'react-native';
import type { Preview } from '@storybook/react-vite';
import { create } from 'storybook/theming/create';
import './global.css';

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
          'Getting Started', ['Introduction', 'Release Notes', 'Naming Convention', 'Brand Logo'],
          'Primitives', ['Color', 'Grid', 'Opacity'],
          'Semantics', ['Color', 'Typography', 'Spacing', 'Border Radius', 'Shadow'],
          'Foundation', ['Icon'],
          'Actions', ['Button', 'TextButton', 'FAB'],
          'Input', ['TextField', 'TextArea', 'SearchBar', 'DatePicker', 'Checkbox', 'Radio', 'Switch', 'Chip', 'SegmentedControl'],
          'Feedback', ['Toast', 'ProgressBar', 'CircularProgress', 'Skeleton', 'EmptyState'],
          'Overlay', ['Modal', 'BottomSheet', 'Tooltip'],
          'Navigation', ['AppBar', 'Tabs', 'BottomNavigation', 'PageIndicator'],
          'Data Display', ['Card', 'ListCard', 'List', 'FrequencyChip', 'LevelIndicator', 'Avatar', 'Badge', 'Divider'],
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
