import { css } from '@quickchat.vn/css-in-js';
import { Box } from '@quickchat.vn/fuselage';
import { useResizeObserver } from '@quickchat.vn/fuselage-hooks';
import React, { useContext } from 'react';

import { context } from '../../Context';
import SplitPlaneContainer from './SplitPlaneContainer/SplitPlaneContainer';

const Wrapper = () => {
  const { ref, contentBoxSize } = useResizeObserver();
  const {
    state: { isTablet, tabsToggle },
  } = useContext(context);

  const tabChangeStyle = () => {
    switch (tabsToggle) {
      case 0:
        return css`
          transition: 0.5s ease;
          left: 0;
        `;
      case 1:
        return css`
          transition: 0.5s ease;
          left: -100%;
        `;
    }
  };

  return (
    <Box position='relative' width={'100%'} flexGrow={1}>
      <Box
        position='absolute'
        width={isTablet ? '200%' : '100%'}
        height={'100%'}
        display={'flex'}
        ref={ref}
        className={tabChangeStyle()}
      >
        <SplitPlaneContainer PreviewSize={contentBoxSize} />
      </Box>
    </Box>
  );
};

export default Wrapper;
