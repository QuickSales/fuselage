// import * as UiKit from '@quickchat.vn/ui-kit';
import type { PreviewBlock } from '@quickchat.vn/ui-kit';

import img from './img';

export const preview: PreviewBlock[] = [
  {
    type: 'preview',
    title: [
      {
        type: 'plain_text',
        text: 'I Need a Marg',
        emoji: true,
      },
    ],
    description: [
      {
        type: 'plain_text',
        text: 'I Need a Description',
        emoji: true,
      },
    ],
    thumb: { url: img },
    footer: {
      type: 'context',
      elements: [
        {
          type: 'plain_text',
          text: 'google.com',
        },
      ],
    },
  },
];

export const previewWithExternalUrl: PreviewBlock[] = [
  {
    type: 'preview',
    title: [
      {
        type: 'plain_text',
        text: 'I Need a Marg',
        emoji: true,
      },
    ],
    description: [
      {
        type: 'plain_text',
        text: 'I Need a Description',
        emoji: true,
      },
    ],
    // thumb: { url: img },
    footer: {
      type: 'context',
      elements: [
        {
          type: 'plain_text',
          text: 'google.com',
        },
      ],
    },
    externalUrl:
      'https://rocketchat.github.io/QuickSales.Vn.Fuselage/?path=/story/*',
  },
];
