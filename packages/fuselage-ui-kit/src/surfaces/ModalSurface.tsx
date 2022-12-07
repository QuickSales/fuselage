import { Margins } from '@quickchat.vn/fuselage';
import type { ReactElement, ReactNode } from 'react';
import React from 'react';

import { Surface } from './Surface';

type ModalSurfaceProps = {
  children?: ReactNode;
};

const ModalSurface = ({ children }: ModalSurfaceProps): ReactElement => (
  <Surface type='modal'>
    <Margins blockEnd='x16'>{children}</Margins>
  </Surface>
);

export default ModalSurface;
