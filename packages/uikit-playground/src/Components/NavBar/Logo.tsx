import { Box } from '@quickchat.vn/fuselage';
import { QuickSalesLogo } from '@quickchat.vn/logo';
import type { FC } from 'react';
import React from 'react';

const Logo: FC = () => (
  <Box
    display='flex'
    justifyContent='center'
    height='100%'
    width='var(--sidebar-width)'
  >
    <Box height='100%' width='80%'>
      <QuickSalesLogo />
    </Box>
  </Box>
);

export default Logo;
