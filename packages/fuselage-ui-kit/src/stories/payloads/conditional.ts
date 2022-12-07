import type * as UiKit from '@quickchat.vn/ui-kit';

export const conditional: readonly UiKit.LayoutBlock[] = [
  {
    type: 'conditional',
    when: {
      engine: ['quickchat.vn'],
    },
    render: [
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: 'This is a plain text section block.',
          emoji: true,
        },
      },
    ],
  },
] as const;
