import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';

import QuickSalesLogo from '../QuickSalesLogo';
import { LogoContainer, LogoTag } from './TaggedQuickSalesLogo.styles';

type TaggedQuickSalesLogoProps = {
  tagTitle?: string;
  tagBackground?: string;
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const TaggedQuickSalesLogo = ({
  tagTitle,
  tagBackground = colors.d400,
  color = colors.white,
  ...props
}: TaggedQuickSalesLogoProps): ReactElement => (
  <LogoContainer {...props}>
    <QuickSalesLogo />
    {tagTitle && (
      <LogoTag backgroundColor={tagBackground} color={color}>
        {tagTitle}
      </LogoTag>
    )}
  </LogoContainer>
);

export default TaggedQuickSalesLogo;
