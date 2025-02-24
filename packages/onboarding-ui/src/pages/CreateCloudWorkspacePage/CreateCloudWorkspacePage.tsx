import { Box } from '@quickchat.vn/fuselage';
import { BackgroundLayer } from '@quickchat.vn/layout';
import type { ComponentProps, ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import FormPageLayout from '../../common/FormPageLayout';
import CreateCloudWorkspaceForm from '../../forms/CreateCloudWorkspaceForm';
import Description from './Description';
import TitleCreateCloudPage from './TitleCreateCloudPage';

type CreateCloudWorkspacePageProps = ComponentProps<
  typeof CreateCloudWorkspaceForm
>;

const CreateCloudWorkspacePage = (
  props: CreateCloudWorkspacePageProps
): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <FormPageLayout
        title={<TitleCreateCloudPage />}
        description={<Description />}
        subtitle={t('page.createCloudWorkspace.tryGold')}
      >
        <CreateCloudWorkspaceForm {...props} />

        <Box mbs='x28' display='inline' textAlign='center'>
          <Trans i18nKey='page.alreadyHaveAccount'>
            Already have an account?
            <Box
              is='a'
              color='primary-400'
              textDecorationLine='none'
              href='https://cloud.quickchat.vn/login'
              target='_blank'
              rel='noopener noreferrer'
            >
              Manage your workspaces.
            </Box>
          </Trans>
        </Box>
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default CreateCloudWorkspacePage;
