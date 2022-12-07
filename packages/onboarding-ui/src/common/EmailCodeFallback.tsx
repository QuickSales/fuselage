import { Box } from '@quickchat.vn/fuselage';
import { ActionLink } from '@quickchat.vn/layout';
import type { ReactElement } from 'react';
import { Trans } from 'react-i18next';

type EmailCodeFallbackProps = {
  onResendEmailRequest: () => void;
  onChangeEmailRequest: () => void;
};

const EmailCodeFallback = ({
  onResendEmailRequest,
  onChangeEmailRequest,
}: EmailCodeFallbackProps): ReactElement => (
  <Box fontScale='c1'>
    <Trans i18nKey='component.emailCodeFallback'>
      Didn’t receive email?
      <ActionLink onClick={onResendEmailRequest}>Resend</ActionLink>
      or
      <ActionLink onClick={onChangeEmailRequest}>Change email</ActionLink>
    </Trans>
  </Box>
);

export default EmailCodeFallback;
