import type { Box } from '@quickchat.vn/fuselage';
import type * as UiKit from '@quickchat.vn/ui-kit';
import type { ComponentProps, ReactElement } from 'react';

export type BlockProps<B extends UiKit.Block> = {
  className?: ComponentProps<typeof Box>['className'];
  block: B;
  context: UiKit.BlockContext;
  index: number;
  surfaceRenderer: UiKit.SurfaceRenderer<ReactElement>;
};
