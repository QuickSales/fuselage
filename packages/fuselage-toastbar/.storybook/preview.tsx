import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import type { DecoratorFunction } from '@storybook/addons';
import { addParameters } from '@storybook/react';
import '@quickchat.vn/icons/dist/rocketchat.css';
import '@quickchat.vn/fuselage-polyfills';
import type { ElementType, ReactElement } from 'react';
import { Suspense } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import ToastBarProvider from '../src/ToastBarProvider';
import { DarkModeProvider } from '@quickchat.vn/layout';
import React from 'react';

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

export const decorators: DecoratorFunction<ReactElement>[] = [
  (Story: ElementType): ReactElement => {
    const dark = useDarkMode();

    return (
      <Suspense fallback={null}>
        <DarkModeProvider.default forcedDarkMode={dark}>
          <ToastBarProvider>
            <Story />
          </ToastBarProvider>
        </DarkModeProvider.default>
      </Suspense>
    );
  },
];
