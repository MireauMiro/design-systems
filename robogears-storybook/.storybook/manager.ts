import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

const theme = create({
  base: 'dark',

  // Brand
  brandTitle: 'ROBOGEARS',
  brandUrl: 'https://robogears.gg',

  // UI shell colors
  colorPrimary: '#00FF41',
  colorSecondary: '#F9E900',

  // App chrome
  appBg: '#090E0A',
  appContentBg: '#0A100B',
  appPreviewBg: 'hsl(130 15% 4%)',
  appBorderColor: '#1A3020',
  appBorderRadius: 4,

  // Text
  textColor: '#00FF41',
  textInverseColor: '#090E0A',
  textMutedColor: '#2E7A3E',

  // Toolbar
  barTextColor: '#00FF41',
  barHoverColor: '#F9E900',
  barSelectedColor: '#F9E900',
  barBg: '#090E0A',

  // Input fields
  inputBg: '#0A100B',
  inputBorder: '#1A3020',
  inputTextColor: '#00FF41',
  inputBorderRadius: 4,
})

addons.setConfig({ theme })
