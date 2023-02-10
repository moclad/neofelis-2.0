import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorPage } from '@/components/ErrorPage';

const Page500 = () => {
  const { t } = useTranslation('components');
  return (
    <>
      <Head>
        <title>{t('errorPage.default.title')}</title>
      </Head>
      <ErrorPage errorCode={500} />
    </>
  );
};
export default Page500;
