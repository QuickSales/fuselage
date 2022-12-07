import type * as UiKit from '@quickchat.vn/ui-kit';
import type { ReactElement } from 'react';

import type { UiKitBanner, UiKitMessage, UiKitModal } from '../surfaces';

type UiKitComponentProps = {
  render: typeof UiKitBanner | typeof UiKitMessage | typeof UiKitModal;
  blocks: UiKit.LayoutBlock[];
};

export const UiKitComponent = ({
  render,
  blocks,
}: UiKitComponentProps): ReactElement | null => render(blocks);
