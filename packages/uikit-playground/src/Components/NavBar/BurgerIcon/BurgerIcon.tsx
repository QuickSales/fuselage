import { usePrefersReducedMotion } from '@quickchat.vn/fuselage-hooks';
import type { ReactElement, ReactNode } from 'react';
import React, { useContext } from 'react';

import { context } from '../../../Context';
import Line from './Line';
import Wrapper from './Wrapper';

const BurgerIcon = ({ children }: { children?: ReactNode }): ReactElement => {
  const isReducedMotionPreferred = usePrefersReducedMotion();
  const {
    state: { navMenuToggle },
  } = useContext(context);

  return (
    <Wrapper>
      <Line animated={!isReducedMotionPreferred} moved={navMenuToggle} />
      <Line animated={!isReducedMotionPreferred} moved={navMenuToggle} />
      <Line animated={!isReducedMotionPreferred} moved={navMenuToggle} />
      {children}
    </Wrapper>
  );
};

export default BurgerIcon;
