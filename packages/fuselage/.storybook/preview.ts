import breakpointTokens from '@quickchat.vn/fuselage-tokens/breakpoints.json';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { addParameters } from '@storybook/react';

import 'normalize.css/normalize.css';
import '@quickchat.vn/icons/dist/rocketchat.css';
import '@quickchat.vn/fuselage-polyfills';

addParameters({
  backgrounds: {
    grid: {
      cellSize: 4,
      cellAmount: 4,
      opacity: 0.5,
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: {
      order: [
        'Inputs',
        'Data Display',
        'Feedback',
        'Containers',
        'Navigation',
        'Layout',
        'Message',
        'Sidebar',
      ],
    },
  },
  viewport: {
    viewports: breakpointTokens.reduce(
      (obj, { name, minViewportWidth }) => ({
        ...obj,
        [name]: {
          name,
          styles: {
            width: `${minViewportWidth}px`,
            height: '90%',
          },
          type: 'desktop',
        },
      }),
      {}
    ),
  },
});
