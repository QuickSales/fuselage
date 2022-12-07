import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { addParameters } from '@storybook/react';
import '@quickchat.vn/icons/dist/rocketchat.css';
import '@quickchat.vn/fuselage-polyfills';
import 'normalize.css/normalize.css';

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
    storySort: ([, a], [, b]) => a.kind.localeCompare(b.kind),
  },
});
