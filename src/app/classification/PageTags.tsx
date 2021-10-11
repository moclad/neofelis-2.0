import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAccount } from '@/app/account/account.service';
import { ClassificationNav } from '@/app/classification/ClassificationNav';
import { Page, PageContent } from '@/app/layout';
import { Button, Heading } from '@chakra-ui/react';

export const PageTags = () => {
  const { t } = useTranslation();
  const { loading, data } = useAccount();

  return (
    <Page nav={<ClassificationNav />}>
      <PageContent loading={loading}>
        <Heading size="md" mb="4">
          {t('classification:tags.title')}
        </Heading>
        <Button>Button</Button>
      </PageContent>
    </Page>
  );
};
