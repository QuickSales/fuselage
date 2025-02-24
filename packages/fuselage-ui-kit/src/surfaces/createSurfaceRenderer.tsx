import type * as UiKit from '@quickchat.vn/ui-kit';
import type { ComponentType, ReactElement } from 'react';
import React from 'react';

export const createSurfaceRenderer = <
  S extends UiKit.SurfaceRenderer<ReactElement>
>(
  SurfaceComponent: ComponentType,
  surfaceRenderer: S
) =>
  function Surface(
    blocks: readonly UiKit.LayoutBlock[],
    conditions: UiKit.Conditions = {}
  ): ReactElement {
    return (
      <SurfaceComponent>
        {surfaceRenderer.render(blocks, {
          engine: 'quickchat.vn',
          ...conditions,
        })}
      </SurfaceComponent>
    );
  };
