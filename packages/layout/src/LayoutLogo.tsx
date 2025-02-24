import { Box } from '@quickchat.vn/fuselage';
import { QuickSalesLogo } from '@quickchat.vn/logo';
import type { ReactElement } from 'react';

import { useDarkMode } from './DarkModeProvider';
import { useLayoutContext } from './contexts/LayoutContext';

export const LayoutLogo = (): ReactElement => {
  const { logo, logoDark = logo } = useLayoutContext();
  const isDark = useDarkMode();
  return (
    <Box width='100%' maxWidth={224}>
      {(isDark ? logoDark : logo) || <QuickSalesLogo />}
    </Box>
  );
};
