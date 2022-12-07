import { Icon } from '@quickchat.vn/fuselage';
import { TooltipWrapper } from '@quickchat.vn/layout';
import type { ReactElement } from 'react';

type InformationTooltipTriggerProps = {
  text: string;
};

const InformationTooltipTrigger = ({
  text,
}: InformationTooltipTriggerProps): ReactElement => (
  <TooltipWrapper text={text}>
    <Icon name='info' />
  </TooltipWrapper>
);

export default InformationTooltipTrigger;
