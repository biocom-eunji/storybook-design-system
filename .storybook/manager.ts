import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const biocomTheme = create({
  base: 'light',

  // Brand
  brandTitle: 'Biocom Design System',
  brandUrl: '/',

  // Colors
  colorPrimary: '#22C3BC',
  colorSecondary: '#22C3BC',

  // UI
  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E1E2E4',
  appBorderRadius: 8,

  // Text
  textColor: '#212225',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#70737C',

  // Toolbar
  barTextColor: '#70737C',
  barSelectedColor: '#22C3BC',
  barHoverColor: '#1FADA7',
  barBg: '#FFFFFF',

  // Inputs
  inputBg: '#FFFFFF',
  inputBorder: '#E1E2E4',
  inputTextColor: '#212225',
  inputBorderRadius: 8,
});

addons.setConfig({
  theme: biocomTheme,
  sidebar: {
    showRoots: true,
  },
});
