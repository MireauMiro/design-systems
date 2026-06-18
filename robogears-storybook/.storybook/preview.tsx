import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  // No backgrounds addon — the dark base + CRT scanlines come from body styles in
  // index.css. (The addon would override body background and hide the scanlines.)
  initialGlobals: {
    scanline: 'green',
  },
  globalTypes: {
    scanline: {
      description: 'Scanline overlay color',
      toolbar: {
        title: 'Scanlines',
        icon: 'paintbrush',
        items: [
          { value: 'green', title: 'Green' },
          { value: 'blue', title: 'Blue' },
          { value: 'red', title: 'Red' },
          { value: 'gold', title: 'Gold' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      if (typeof document !== 'undefined') {
        document.documentElement.dataset.scanline = context.globals.scanline ?? 'green'
      }
      return <Story />
    },
  ],
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
