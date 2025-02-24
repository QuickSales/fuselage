import type { LayoutBlock } from '@quickchat.vn/ui-kit';

export const sectionWithButtonDefault: readonly LayoutBlock[] = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'This is a section block with a button.',
    },
    accessory: {
      type: 'button',
      appId: 'app-id',
      blockId: 'block-id',
      actionId: 'action-id',
      text: {
        type: 'plain_text',
        text: 'Click Me',
        emoji: true,
      },
    },
  },
];

export const sectionWithButtonPrimary: readonly LayoutBlock[] = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'This is a section block with a button.',
    },
    accessory: {
      type: 'button',
      appId: 'app-id',
      blockId: 'block-id',
      actionId: 'action-id',
      text: {
        type: 'plain_text',
        text: 'Click Me',
        emoji: true,
      },
      style: 'primary',
    },
  },
];

export const sectionWithButtonDanger: readonly LayoutBlock[] = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'This is a section block with a button.',
    },
    accessory: {
      type: 'button',
      appId: 'app-id',
      blockId: 'block-id',
      actionId: 'action-id',
      text: {
        type: 'plain_text',
        text: 'Click Me',
        emoji: true,
      },
      style: 'danger',
    },
  },
];

export const sectionWithButtonAsLink: readonly LayoutBlock[] = [
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'This is a section block with a button.',
    },
    accessory: {
      type: 'button',
      appId: 'app-id',
      blockId: 'block-id',
      actionId: 'action-id',
      text: {
        type: 'plain_text',
        text: 'Click Me',
        emoji: true,
      },
      url: 'https://quickchat.vn',
    },
  },
];
