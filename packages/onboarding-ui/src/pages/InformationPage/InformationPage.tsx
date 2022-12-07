import {
  HeroLayout,
  HeroLayoutSubtitle,
  HeroLayoutTitle,
} from '@quickchat.vn/layout';
import type { ReactElement, ReactNode } from 'react';

type InformationPageProps = {
  title: string;
  description?: ReactNode;
};

const InformationPage = ({
  title,
  description,
}: InformationPageProps): ReactElement => (
  <HeroLayout>
    <HeroLayoutTitle>{title}</HeroLayoutTitle>
    {description && <HeroLayoutSubtitle>{description}</HeroLayoutSubtitle>}
  </HeroLayout>
);

export default InformationPage;
