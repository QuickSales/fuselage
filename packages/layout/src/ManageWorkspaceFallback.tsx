import { Box } from '@quickchat.vn/fuselage';
import type { ReactElement } from 'react';
import { Trans } from 'react-i18next';

import ActionLink from './ActionLink';

type ManageWorkspaceFallbackProps = {
  onManageWorkspaceClick: () => void;
};

const ManageWorkspaceFallback = ({
  onManageWorkspaceClick,
}: ManageWorkspaceFallbackProps): ReactElement => (
  <Box fontScale='h4' pb='x40'>
    <Trans i18nKey='component.manageWorkspaceFallback'>
      Already have an account?
      <ActionLink fontScale='h4' onClick={onManageWorkspaceClick}>
        Manage your workspaces.
      </ActionLink>
    </Trans>
  </Box>
);

export default ManageWorkspaceFallback;
