import { Divider } from '@quickchat.vn/fuselage';
import type * as UiKit from '@quickchat.vn/ui-kit';
import type { ReactElement } from 'react';
import React, { memo } from 'react';

import type { BlockProps } from '../utils/BlockProps';

type DividerBlockProps = BlockProps<UiKit.DividerBlock>;

const DividerBlock = ({ className }: DividerBlockProps): ReactElement => (
  <Divider className={className} marginBlock='x24' />
);

export default memo(DividerBlock);
